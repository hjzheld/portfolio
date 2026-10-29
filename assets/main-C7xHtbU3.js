(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const u of o)if(u.type==="childList")for(const c of u.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function r(o){const u={};return o.integrity&&(u.integrity=o.integrity),o.referrerPolicy&&(u.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?u.credentials="include":o.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function a(o){if(o.ep)return;o.ep=!0;const u=r(o);fetch(o.href,u)}})();function s2(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var Sm={exports:{}},pu={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hb;function ZA(){if(hb)return pu;hb=1;var n=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function r(a,o,u){var c=null;if(u!==void 0&&(c=""+u),o.key!==void 0&&(c=""+o.key),"key"in o){u={};for(var f in o)f!=="key"&&(u[f]=o[f])}else u=o;return o=u.ref,{$$typeof:n,type:a,key:c,ref:o!==void 0?o:null,props:u}}return pu.Fragment=e,pu.jsx=r,pu.jsxs=r,pu}var pb;function WA(){return pb||(pb=1,Sm.exports=ZA()),Sm.exports}var b=WA(),Tm={exports:{}},Ee={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var mb;function JA(){if(mb)return Ee;mb=1;var n=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),r=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),c=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),y=Symbol.iterator;function x(T){return T===null||typeof T!="object"?null:(T=y&&T[y]||T["@@iterator"],typeof T=="function"?T:null)}var v={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},w=Object.assign,S={};function C(T,Q,te){this.props=T,this.context=Q,this.refs=S,this.updater=te||v}C.prototype.isReactComponent={},C.prototype.setState=function(T,Q){if(typeof T!="object"&&typeof T!="function"&&T!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,T,Q,"setState")},C.prototype.forceUpdate=function(T){this.updater.enqueueForceUpdate(this,T,"forceUpdate")};function E(){}E.prototype=C.prototype;function M(T,Q,te){this.props=T,this.context=Q,this.refs=S,this.updater=te||v}var R=M.prototype=new E;R.constructor=M,w(R,C.prototype),R.isPureReactComponent=!0;var O=Array.isArray,j={H:null,A:null,T:null,S:null,V:null},P=Object.prototype.hasOwnProperty;function D(T,Q,te,ie,ae,me){return te=me.ref,{$$typeof:n,type:T,key:Q,ref:te!==void 0?te:null,props:me}}function B(T,Q){return D(T.type,Q,void 0,void 0,void 0,T.props)}function G(T){return typeof T=="object"&&T!==null&&T.$$typeof===n}function F(T){var Q={"=":"=0",":":"=2"};return"$"+T.replace(/[=:]/g,function(te){return Q[te]})}var re=/\/+/g;function J(T,Q){return typeof T=="object"&&T!==null&&T.key!=null?F(""+T.key):Q.toString(36)}function ye(){}function pe(T){switch(T.status){case"fulfilled":return T.value;case"rejected":throw T.reason;default:switch(typeof T.status=="string"?T.then(ye,ye):(T.status="pending",T.then(function(Q){T.status==="pending"&&(T.status="fulfilled",T.value=Q)},function(Q){T.status==="pending"&&(T.status="rejected",T.reason=Q)})),T.status){case"fulfilled":return T.value;case"rejected":throw T.reason}}throw T}function ge(T,Q,te,ie,ae){var me=typeof T;(me==="undefined"||me==="boolean")&&(T=null);var oe=!1;if(T===null)oe=!0;else switch(me){case"bigint":case"string":case"number":oe=!0;break;case"object":switch(T.$$typeof){case n:case e:oe=!0;break;case g:return oe=T._init,ge(oe(T._payload),Q,te,ie,ae)}}if(oe)return ae=ae(T),oe=ie===""?"."+J(T,0):ie,O(ae)?(te="",oe!=null&&(te=oe.replace(re,"$&/")+"/"),ge(ae,Q,te,"",function(Fe){return Fe})):ae!=null&&(G(ae)&&(ae=B(ae,te+(ae.key==null||T&&T.key===ae.key?"":(""+ae.key).replace(re,"$&/")+"/")+oe)),Q.push(ae)),1;oe=0;var je=ie===""?".":ie+":";if(O(T))for(var Te=0;Te<T.length;Te++)ie=T[Te],me=je+J(ie,Te),oe+=ge(ie,Q,te,me,ae);else if(Te=x(T),typeof Te=="function")for(T=Te.call(T),Te=0;!(ie=T.next()).done;)ie=ie.value,me=je+J(ie,Te++),oe+=ge(ie,Q,te,me,ae);else if(me==="object"){if(typeof T.then=="function")return ge(pe(T),Q,te,ie,ae);throw Q=String(T),Error("Objects are not valid as a React child (found: "+(Q==="[object Object]"?"object with keys {"+Object.keys(T).join(", ")+"}":Q)+"). If you meant to render a collection of children, use an array instead.")}return oe}function Y(T,Q,te){if(T==null)return T;var ie=[],ae=0;return ge(T,ie,"","",function(me){return Q.call(te,me,ae++)}),ie}function K(T){if(T._status===-1){var Q=T._result;Q=Q(),Q.then(function(te){(T._status===0||T._status===-1)&&(T._status=1,T._result=te)},function(te){(T._status===0||T._status===-1)&&(T._status=2,T._result=te)}),T._status===-1&&(T._status=0,T._result=Q)}if(T._status===1)return T._result.default;throw T._result}var ee=typeof reportError=="function"?reportError:function(T){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var Q=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof T=="object"&&T!==null&&typeof T.message=="string"?String(T.message):String(T),error:T});if(!window.dispatchEvent(Q))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",T);return}console.error(T)};function se(){}return Ee.Children={map:Y,forEach:function(T,Q,te){Y(T,function(){Q.apply(this,arguments)},te)},count:function(T){var Q=0;return Y(T,function(){Q++}),Q},toArray:function(T){return Y(T,function(Q){return Q})||[]},only:function(T){if(!G(T))throw Error("React.Children.only expected to receive a single React element child.");return T}},Ee.Component=C,Ee.Fragment=r,Ee.Profiler=o,Ee.PureComponent=M,Ee.StrictMode=a,Ee.Suspense=h,Ee.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=j,Ee.__COMPILER_RUNTIME={__proto__:null,c:function(T){return j.H.useMemoCache(T)}},Ee.cache=function(T){return function(){return T.apply(null,arguments)}},Ee.cloneElement=function(T,Q,te){if(T==null)throw Error("The argument must be a React element, but you passed "+T+".");var ie=w({},T.props),ae=T.key,me=void 0;if(Q!=null)for(oe in Q.ref!==void 0&&(me=void 0),Q.key!==void 0&&(ae=""+Q.key),Q)!P.call(Q,oe)||oe==="key"||oe==="__self"||oe==="__source"||oe==="ref"&&Q.ref===void 0||(ie[oe]=Q[oe]);var oe=arguments.length-2;if(oe===1)ie.children=te;else if(1<oe){for(var je=Array(oe),Te=0;Te<oe;Te++)je[Te]=arguments[Te+2];ie.children=je}return D(T.type,ae,void 0,void 0,me,ie)},Ee.createContext=function(T){return T={$$typeof:c,_currentValue:T,_currentValue2:T,_threadCount:0,Provider:null,Consumer:null},T.Provider=T,T.Consumer={$$typeof:u,_context:T},T},Ee.createElement=function(T,Q,te){var ie,ae={},me=null;if(Q!=null)for(ie in Q.key!==void 0&&(me=""+Q.key),Q)P.call(Q,ie)&&ie!=="key"&&ie!=="__self"&&ie!=="__source"&&(ae[ie]=Q[ie]);var oe=arguments.length-2;if(oe===1)ae.children=te;else if(1<oe){for(var je=Array(oe),Te=0;Te<oe;Te++)je[Te]=arguments[Te+2];ae.children=je}if(T&&T.defaultProps)for(ie in oe=T.defaultProps,oe)ae[ie]===void 0&&(ae[ie]=oe[ie]);return D(T,me,void 0,void 0,null,ae)},Ee.createRef=function(){return{current:null}},Ee.forwardRef=function(T){return{$$typeof:f,render:T}},Ee.isValidElement=G,Ee.lazy=function(T){return{$$typeof:g,_payload:{_status:-1,_result:T},_init:K}},Ee.memo=function(T,Q){return{$$typeof:p,type:T,compare:Q===void 0?null:Q}},Ee.startTransition=function(T){var Q=j.T,te={};j.T=te;try{var ie=T(),ae=j.S;ae!==null&&ae(te,ie),typeof ie=="object"&&ie!==null&&typeof ie.then=="function"&&ie.then(se,ee)}catch(me){ee(me)}finally{j.T=Q}},Ee.unstable_useCacheRefresh=function(){return j.H.useCacheRefresh()},Ee.use=function(T){return j.H.use(T)},Ee.useActionState=function(T,Q,te){return j.H.useActionState(T,Q,te)},Ee.useCallback=function(T,Q){return j.H.useCallback(T,Q)},Ee.useContext=function(T){return j.H.useContext(T)},Ee.useDebugValue=function(){},Ee.useDeferredValue=function(T,Q){return j.H.useDeferredValue(T,Q)},Ee.useEffect=function(T,Q,te){var ie=j.H;if(typeof te=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return ie.useEffect(T,Q)},Ee.useId=function(){return j.H.useId()},Ee.useImperativeHandle=function(T,Q,te){return j.H.useImperativeHandle(T,Q,te)},Ee.useInsertionEffect=function(T,Q){return j.H.useInsertionEffect(T,Q)},Ee.useLayoutEffect=function(T,Q){return j.H.useLayoutEffect(T,Q)},Ee.useMemo=function(T,Q){return j.H.useMemo(T,Q)},Ee.useOptimistic=function(T,Q){return j.H.useOptimistic(T,Q)},Ee.useReducer=function(T,Q,te){return j.H.useReducer(T,Q,te)},Ee.useRef=function(T){return j.H.useRef(T)},Ee.useState=function(T){return j.H.useState(T)},Ee.useSyncExternalStore=function(T,Q,te){return j.H.useSyncExternalStore(T,Q,te)},Ee.useTransition=function(){return j.H.useTransition()},Ee.version="19.1.0",Ee}var gb;function dg(){return gb||(gb=1,Tm.exports=JA()),Tm.exports}var z=dg();const tl=s2(z);var Am={exports:{}},mu={},Em={exports:{}},Cm={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yb;function eE(){return yb||(yb=1,function(n){function e(Y,K){var ee=Y.length;Y.push(K);e:for(;0<ee;){var se=ee-1>>>1,T=Y[se];if(0<o(T,K))Y[se]=K,Y[ee]=T,ee=se;else break e}}function r(Y){return Y.length===0?null:Y[0]}function a(Y){if(Y.length===0)return null;var K=Y[0],ee=Y.pop();if(ee!==K){Y[0]=ee;e:for(var se=0,T=Y.length,Q=T>>>1;se<Q;){var te=2*(se+1)-1,ie=Y[te],ae=te+1,me=Y[ae];if(0>o(ie,ee))ae<T&&0>o(me,ie)?(Y[se]=me,Y[ae]=ee,se=ae):(Y[se]=ie,Y[te]=ee,se=te);else if(ae<T&&0>o(me,ee))Y[se]=me,Y[ae]=ee,se=ae;else break e}}return K}function o(Y,K){var ee=Y.sortIndex-K.sortIndex;return ee!==0?ee:Y.id-K.id}if(n.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;n.unstable_now=function(){return u.now()}}else{var c=Date,f=c.now();n.unstable_now=function(){return c.now()-f}}var h=[],p=[],g=1,y=null,x=3,v=!1,w=!1,S=!1,C=!1,E=typeof setTimeout=="function"?setTimeout:null,M=typeof clearTimeout=="function"?clearTimeout:null,R=typeof setImmediate<"u"?setImmediate:null;function O(Y){for(var K=r(p);K!==null;){if(K.callback===null)a(p);else if(K.startTime<=Y)a(p),K.sortIndex=K.expirationTime,e(h,K);else break;K=r(p)}}function j(Y){if(S=!1,O(Y),!w)if(r(h)!==null)w=!0,P||(P=!0,J());else{var K=r(p);K!==null&&ge(j,K.startTime-Y)}}var P=!1,D=-1,B=5,G=-1;function F(){return C?!0:!(n.unstable_now()-G<B)}function re(){if(C=!1,P){var Y=n.unstable_now();G=Y;var K=!0;try{e:{w=!1,S&&(S=!1,M(D),D=-1),v=!0;var ee=x;try{t:{for(O(Y),y=r(h);y!==null&&!(y.expirationTime>Y&&F());){var se=y.callback;if(typeof se=="function"){y.callback=null,x=y.priorityLevel;var T=se(y.expirationTime<=Y);if(Y=n.unstable_now(),typeof T=="function"){y.callback=T,O(Y),K=!0;break t}y===r(h)&&a(h),O(Y)}else a(h);y=r(h)}if(y!==null)K=!0;else{var Q=r(p);Q!==null&&ge(j,Q.startTime-Y),K=!1}}break e}finally{y=null,x=ee,v=!1}K=void 0}}finally{K?J():P=!1}}}var J;if(typeof R=="function")J=function(){R(re)};else if(typeof MessageChannel<"u"){var ye=new MessageChannel,pe=ye.port2;ye.port1.onmessage=re,J=function(){pe.postMessage(null)}}else J=function(){E(re,0)};function ge(Y,K){D=E(function(){Y(n.unstable_now())},K)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(Y){Y.callback=null},n.unstable_forceFrameRate=function(Y){0>Y||125<Y?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):B=0<Y?Math.floor(1e3/Y):5},n.unstable_getCurrentPriorityLevel=function(){return x},n.unstable_next=function(Y){switch(x){case 1:case 2:case 3:var K=3;break;default:K=x}var ee=x;x=K;try{return Y()}finally{x=ee}},n.unstable_requestPaint=function(){C=!0},n.unstable_runWithPriority=function(Y,K){switch(Y){case 1:case 2:case 3:case 4:case 5:break;default:Y=3}var ee=x;x=Y;try{return K()}finally{x=ee}},n.unstable_scheduleCallback=function(Y,K,ee){var se=n.unstable_now();switch(typeof ee=="object"&&ee!==null?(ee=ee.delay,ee=typeof ee=="number"&&0<ee?se+ee:se):ee=se,Y){case 1:var T=-1;break;case 2:T=250;break;case 5:T=1073741823;break;case 4:T=1e4;break;default:T=5e3}return T=ee+T,Y={id:g++,callback:K,priorityLevel:Y,startTime:ee,expirationTime:T,sortIndex:-1},ee>se?(Y.sortIndex=ee,e(p,Y),r(h)===null&&Y===r(p)&&(S?(M(D),D=-1):S=!0,ge(j,ee-se))):(Y.sortIndex=T,e(h,Y),w||v||(w=!0,P||(P=!0,J()))),Y},n.unstable_shouldYield=F,n.unstable_wrapCallback=function(Y){var K=x;return function(){var ee=x;x=K;try{return Y.apply(this,arguments)}finally{x=ee}}}}(Cm)),Cm}var vb;function tE(){return vb||(vb=1,Em.exports=eE()),Em.exports}var Rm={exports:{}},xn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xb;function nE(){if(xb)return xn;xb=1;var n=dg();function e(h){var p="https://react.dev/errors/"+h;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)p+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+h+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function r(){}var a={d:{f:r,r:function(){throw Error(e(522))},D:r,C:r,L:r,m:r,X:r,S:r,M:r},p:0,findDOMNode:null},o=Symbol.for("react.portal");function u(h,p,g){var y=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:y==null?null:""+y,children:h,containerInfo:p,implementation:g}}var c=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function f(h,p){if(h==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return xn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,xn.createPortal=function(h,p){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(e(299));return u(h,p,null,g)},xn.flushSync=function(h){var p=c.T,g=a.p;try{if(c.T=null,a.p=2,h)return h()}finally{c.T=p,a.p=g,a.d.f()}},xn.preconnect=function(h,p){typeof h=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,a.d.C(h,p))},xn.prefetchDNS=function(h){typeof h=="string"&&a.d.D(h)},xn.preinit=function(h,p){if(typeof h=="string"&&p&&typeof p.as=="string"){var g=p.as,y=f(g,p.crossOrigin),x=typeof p.integrity=="string"?p.integrity:void 0,v=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;g==="style"?a.d.S(h,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:y,integrity:x,fetchPriority:v}):g==="script"&&a.d.X(h,{crossOrigin:y,integrity:x,fetchPriority:v,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},xn.preinitModule=function(h,p){if(typeof h=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var g=f(p.as,p.crossOrigin);a.d.M(h,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&a.d.M(h)},xn.preload=function(h,p){if(typeof h=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var g=p.as,y=f(g,p.crossOrigin);a.d.L(h,g,{crossOrigin:y,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},xn.preloadModule=function(h,p){if(typeof h=="string")if(p){var g=f(p.as,p.crossOrigin);a.d.m(h,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else a.d.m(h)},xn.requestFormReset=function(h){a.d.r(h)},xn.unstable_batchedUpdates=function(h,p){return h(p)},xn.useFormState=function(h,p,g){return c.H.useFormState(h,p,g)},xn.useFormStatus=function(){return c.H.useHostTransitionStatus()},xn.version="19.1.0",xn}var bb;function iE(){if(bb)return Rm.exports;bb=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}return n(),Rm.exports=nE(),Rm.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _b;function rE(){if(_b)return mu;_b=1;var n=tE(),e=dg(),r=iE();function a(t){var i="https://react.dev/errors/"+t;if(1<arguments.length){i+="?args[]="+encodeURIComponent(arguments[1]);for(var s=2;s<arguments.length;s++)i+="&args[]="+encodeURIComponent(arguments[s])}return"Minified React error #"+t+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function u(t){var i=t,s=t;if(t.alternate)for(;i.return;)i=i.return;else{t=i;do i=t,(i.flags&4098)!==0&&(s=i.return),t=i.return;while(t)}return i.tag===3?s:null}function c(t){if(t.tag===13){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function f(t){if(u(t)!==t)throw Error(a(188))}function h(t){var i=t.alternate;if(!i){if(i=u(t),i===null)throw Error(a(188));return i!==t?null:t}for(var s=t,l=i;;){var d=s.return;if(d===null)break;var m=d.alternate;if(m===null){if(l=d.return,l!==null){s=l;continue}break}if(d.child===m.child){for(m=d.child;m;){if(m===s)return f(d),t;if(m===l)return f(d),i;m=m.sibling}throw Error(a(188))}if(s.return!==l.return)s=d,l=m;else{for(var _=!1,A=d.child;A;){if(A===s){_=!0,s=d,l=m;break}if(A===l){_=!0,l=d,s=m;break}A=A.sibling}if(!_){for(A=m.child;A;){if(A===s){_=!0,s=m,l=d;break}if(A===l){_=!0,l=m,s=d;break}A=A.sibling}if(!_)throw Error(a(189))}}if(s.alternate!==l)throw Error(a(190))}if(s.tag!==3)throw Error(a(188));return s.stateNode.current===s?t:i}function p(t){var i=t.tag;if(i===5||i===26||i===27||i===6)return t;for(t=t.child;t!==null;){if(i=p(t),i!==null)return i;t=t.sibling}return null}var g=Object.assign,y=Symbol.for("react.element"),x=Symbol.for("react.transitional.element"),v=Symbol.for("react.portal"),w=Symbol.for("react.fragment"),S=Symbol.for("react.strict_mode"),C=Symbol.for("react.profiler"),E=Symbol.for("react.provider"),M=Symbol.for("react.consumer"),R=Symbol.for("react.context"),O=Symbol.for("react.forward_ref"),j=Symbol.for("react.suspense"),P=Symbol.for("react.suspense_list"),D=Symbol.for("react.memo"),B=Symbol.for("react.lazy"),G=Symbol.for("react.activity"),F=Symbol.for("react.memo_cache_sentinel"),re=Symbol.iterator;function J(t){return t===null||typeof t!="object"?null:(t=re&&t[re]||t["@@iterator"],typeof t=="function"?t:null)}var ye=Symbol.for("react.client.reference");function pe(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===ye?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case w:return"Fragment";case C:return"Profiler";case S:return"StrictMode";case j:return"Suspense";case P:return"SuspenseList";case G:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case v:return"Portal";case R:return(t.displayName||"Context")+".Provider";case M:return(t._context.displayName||"Context")+".Consumer";case O:var i=t.render;return t=t.displayName,t||(t=i.displayName||i.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case D:return i=t.displayName||null,i!==null?i:pe(t.type)||"Memo";case B:i=t._payload,t=t._init;try{return pe(t(i))}catch{}}return null}var ge=Array.isArray,Y=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,K=r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ee={pending:!1,data:null,method:null,action:null},se=[],T=-1;function Q(t){return{current:t}}function te(t){0>T||(t.current=se[T],se[T]=null,T--)}function ie(t,i){T++,se[T]=t.current,t.current=i}var ae=Q(null),me=Q(null),oe=Q(null),je=Q(null);function Te(t,i){switch(ie(oe,i),ie(me,t),ie(ae,null),i.nodeType){case 9:case 11:t=(t=i.documentElement)&&(t=t.namespaceURI)?Hx(t):0;break;default:if(t=i.tagName,i=i.namespaceURI)i=Hx(i),t=Yx(i,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}te(ae),ie(ae,t)}function Fe(){te(ae),te(me),te(oe)}function gn(t){t.memoizedState!==null&&ie(je,t);var i=ae.current,s=Yx(i,t.type);i!==s&&(ie(me,t),ie(ae,s))}function pt(t){me.current===t&&(te(ae),te(me)),je.current===t&&(te(je),uu._currentValue=ee)}var it=Object.prototype.hasOwnProperty,Be=n.unstable_scheduleCallback,mt=n.unstable_cancelCallback,yn=n.unstable_shouldYield,Rn=n.unstable_requestPaint,$=n.unstable_now,Mn=n.unstable_getCurrentPriorityLevel,Ci=n.unstable_ImmediatePriority,Qi=n.unstable_UserBlockingPriority,ot=n.unstable_NormalPriority,Ii=n.unstable_LowPriority,Zi=n.unstable_IdlePriority,Mr=n.log,Ut=n.unstable_setDisableYieldValue,Un=null,Ye=null;function Ht(t){if(typeof Mr=="function"&&Ut(t),Ye&&typeof Ye.setStrictMode=="function")try{Ye.setStrictMode(Un,t)}catch{}}var ct=Math.clz32?Math.clz32:Rt,Wi=Math.log,es=Math.LN2;function Rt(t){return t>>>=0,t===0?32:31-(Wi(t)/es|0)|0}var Dr=256,Hn=4194304;function Yn(t){var i=t&42;if(i!==0)return i;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function Ji(t,i,s){var l=t.pendingLanes;if(l===0)return 0;var d=0,m=t.suspendedLanes,_=t.pingedLanes;t=t.warmLanes;var A=l&134217727;return A!==0?(l=A&~m,l!==0?d=Yn(l):(_&=A,_!==0?d=Yn(_):s||(s=A&~t,s!==0&&(d=Yn(s))))):(A=l&~m,A!==0?d=Yn(A):_!==0?d=Yn(_):s||(s=l&~t,s!==0&&(d=Yn(s)))),d===0?0:i!==0&&i!==d&&(i&m)===0&&(m=d&-d,s=i&-i,m>=s||m===32&&(s&4194048)!==0)?i:d}function Gn(t,i){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&i)===0}function jr(t,i){switch(t){case 1:case 2:case 4:case 8:case 64:return i+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ce(){var t=Dr;return Dr<<=1,(Dr&4194048)===0&&(Dr=256),t}function ur(){var t=Hn;return Hn<<=1,(Hn&62914560)===0&&(Hn=4194304),t}function Dn(t){for(var i=[],s=0;31>s;s++)i.push(t);return i}function ln(t,i){t.pendingLanes|=i,i!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function ni(t,i,s,l,d,m){var _=t.pendingLanes;t.pendingLanes=s,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=s,t.entangledLanes&=s,t.errorRecoveryDisabledLanes&=s,t.shellSuspendCounter=0;var A=t.entanglements,k=t.expirationTimes,H=t.hiddenUpdates;for(s=_&~s;0<s;){var I=31-ct(s),W=1<<I;A[I]=0,k[I]=-1;var X=H[I];if(X!==null)for(H[I]=null,I=0;I<X.length;I++){var q=X[I];q!==null&&(q.lane&=-536870913)}s&=~W}l!==0&&cr(t,l,0),m!==0&&d===0&&t.tag!==0&&(t.suspendedLanes|=m&~(_&~i))}function cr(t,i,s){t.pendingLanes|=i,t.suspendedLanes&=~i;var l=31-ct(i);t.entangledLanes|=i,t.entanglements[l]=t.entanglements[l]|1073741824|s&4194090}function kr(t,i){var s=t.entangledLanes|=i;for(t=t.entanglements;s;){var l=31-ct(s),d=1<<l;d&i|t[l]&i&&(t[l]|=i),s&=~d}}function ii(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Or(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Ae(){var t=K.p;return t!==0?t:(t=window.event,t===void 0?32:ob(t.type))}function ve(t,i){var s=K.p;try{return K.p=t,i()}finally{K.p=s}}var Re=Math.random().toString(36).slice(2),ne="__reactFiber$"+Re,fe="__reactProps$"+Re,ce="__reactContainer$"+Re,Se="__reactEvents$"+Re,Yt="__reactListeners$"+Re,Ve="__reactHandles$"+Re,vt="__reactResources$"+Re,Mt="__reactMarker$"+Re;function ft(t){delete t[ne],delete t[fe],delete t[Se],delete t[Yt],delete t[Ve]}function Qe(t){var i=t[ne];if(i)return i;for(var s=t.parentNode;s;){if(i=s[ce]||s[ne]){if(s=i.alternate,i.child!==null||s!==null&&s.child!==null)for(t=Fx(t);t!==null;){if(s=t[ne])return s;t=Fx(t)}return i}t=s,s=t.parentNode}return null}function Xe(t){if(t=t[ne]||t[ce]){var i=t.tag;if(i===5||i===6||i===13||i===26||i===27||i===3)return t}return null}function un(t){var i=t.tag;if(i===5||i===26||i===27||i===6)return t.stateNode;throw Error(a(33))}function Ze(t){var i=t[vt];return i||(i=t[vt]={hoistableStyles:new Map,hoistableScripts:new Map}),i}function $e(t){t[Mt]=!0}var ri=new Set,Gt={};function gt(t,i){wt(t,i),wt(t+"Capture",i)}function wt(t,i){for(Gt[t]=i,t=0;t<i.length;t++)ri.add(i[t])}var zr=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ts={},Qt={};function zt(t){return it.call(Qt,t)?!0:it.call(ts,t)?!1:zr.test(t)?Qt[t]=!0:(ts[t]=!0,!1)}function jn(t,i,s){if(zt(i))if(s===null)t.removeAttribute(i);else{switch(typeof s){case"undefined":case"function":case"symbol":t.removeAttribute(i);return;case"boolean":var l=i.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){t.removeAttribute(i);return}}t.setAttribute(i,""+s)}}function ua(t,i,s){if(s===null)t.removeAttribute(i);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(i);return}t.setAttribute(i,""+s)}}function Ri(t,i,s,l){if(l===null)t.removeAttribute(s);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(s);return}t.setAttributeNS(i,s,""+l)}}var Nr,ai;function Mi(t){if(Nr===void 0)try{throw Error()}catch(s){var i=s.stack.trim().match(/\n( *(at )?)/);Nr=i&&i[1]||"",ai=-1<s.stack.indexOf(`
    at`)?" (<anonymous>)":-1<s.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Nr+t+ai}var ca=!1;function Di(t,i){if(!t||ca)return"";ca=!0;var s=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(i){var W=function(){throw Error()};if(Object.defineProperty(W.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(W,[])}catch(q){var X=q}Reflect.construct(t,[],W)}else{try{W.call()}catch(q){X=q}t.call(W.prototype)}}else{try{throw Error()}catch(q){X=q}(W=t())&&typeof W.catch=="function"&&W.catch(function(){})}}catch(q){if(q&&X&&typeof q.stack=="string")return[q.stack,X.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var d=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");d&&d.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var m=l.DetermineComponentFrameRoot(),_=m[0],A=m[1];if(_&&A){var k=_.split(`
`),H=A.split(`
`);for(d=l=0;l<k.length&&!k[l].includes("DetermineComponentFrameRoot");)l++;for(;d<H.length&&!H[d].includes("DetermineComponentFrameRoot");)d++;if(l===k.length||d===H.length)for(l=k.length-1,d=H.length-1;1<=l&&0<=d&&k[l]!==H[d];)d--;for(;1<=l&&0<=d;l--,d--)if(k[l]!==H[d]){if(l!==1||d!==1)do if(l--,d--,0>d||k[l]!==H[d]){var I=`
`+k[l].replace(" at new "," at ");return t.displayName&&I.includes("<anonymous>")&&(I=I.replace("<anonymous>",t.displayName)),I}while(1<=l&&0<=d);break}}}finally{ca=!1,Error.prepareStackTrace=s}return(s=t?t.displayName||t.name:"")?Mi(s):""}function q5(t){switch(t.tag){case 26:case 27:case 5:return Mi(t.type);case 16:return Mi("Lazy");case 13:return Mi("Suspense");case 19:return Mi("SuspenseList");case 0:case 15:return Di(t.type,!1);case 11:return Di(t.type.render,!1);case 1:return Di(t.type,!0);case 31:return Mi("Activity");default:return""}}function Ny(t){try{var i="";do i+=q5(t),t=t.return;while(t);return i}catch(s){return`
Error generating stack: `+s.message+`
`+s.stack}}function ji(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Py(t){var i=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function F5(t){var i=Py(t)?"checked":"value",s=Object.getOwnPropertyDescriptor(t.constructor.prototype,i),l=""+t[i];if(!t.hasOwnProperty(i)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var d=s.get,m=s.set;return Object.defineProperty(t,i,{configurable:!0,get:function(){return d.call(this)},set:function(_){l=""+_,m.call(this,_)}}),Object.defineProperty(t,i,{enumerable:s.enumerable}),{getValue:function(){return l},setValue:function(_){l=""+_},stopTracking:function(){t._valueTracker=null,delete t[i]}}}}function Ec(t){t._valueTracker||(t._valueTracker=F5(t))}function Ly(t){if(!t)return!1;var i=t._valueTracker;if(!i)return!0;var s=i.getValue(),l="";return t&&(l=Py(t)?t.checked?"true":"false":t.value),t=l,t!==s?(i.setValue(t),!0):!1}function Cc(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var $5=/[\n"\\]/g;function ki(t){return t.replace($5,function(i){return"\\"+i.charCodeAt(0).toString(16)+" "})}function bh(t,i,s,l,d,m,_,A){t.name="",_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"?t.type=_:t.removeAttribute("type"),i!=null?_==="number"?(i===0&&t.value===""||t.value!=i)&&(t.value=""+ji(i)):t.value!==""+ji(i)&&(t.value=""+ji(i)):_!=="submit"&&_!=="reset"||t.removeAttribute("value"),i!=null?_h(t,_,ji(i)):s!=null?_h(t,_,ji(s)):l!=null&&t.removeAttribute("value"),d==null&&m!=null&&(t.defaultChecked=!!m),d!=null&&(t.checked=d&&typeof d!="function"&&typeof d!="symbol"),A!=null&&typeof A!="function"&&typeof A!="symbol"&&typeof A!="boolean"?t.name=""+ji(A):t.removeAttribute("name")}function By(t,i,s,l,d,m,_,A){if(m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"&&(t.type=m),i!=null||s!=null){if(!(m!=="submit"&&m!=="reset"||i!=null))return;s=s!=null?""+ji(s):"",i=i!=null?""+ji(i):s,A||i===t.value||(t.value=i),t.defaultValue=i}l=l??d,l=typeof l!="function"&&typeof l!="symbol"&&!!l,t.checked=A?t.checked:!!l,t.defaultChecked=!!l,_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"&&(t.name=_)}function _h(t,i,s){i==="number"&&Cc(t.ownerDocument)===t||t.defaultValue===""+s||(t.defaultValue=""+s)}function Fs(t,i,s,l){if(t=t.options,i){i={};for(var d=0;d<s.length;d++)i["$"+s[d]]=!0;for(s=0;s<t.length;s++)d=i.hasOwnProperty("$"+t[s].value),t[s].selected!==d&&(t[s].selected=d),d&&l&&(t[s].defaultSelected=!0)}else{for(s=""+ji(s),i=null,d=0;d<t.length;d++){if(t[d].value===s){t[d].selected=!0,l&&(t[d].defaultSelected=!0);return}i!==null||t[d].disabled||(i=t[d])}i!==null&&(i.selected=!0)}}function Vy(t,i,s){if(i!=null&&(i=""+ji(i),i!==t.value&&(t.value=i),s==null)){t.defaultValue!==i&&(t.defaultValue=i);return}t.defaultValue=s!=null?""+ji(s):""}function Uy(t,i,s,l){if(i==null){if(l!=null){if(s!=null)throw Error(a(92));if(ge(l)){if(1<l.length)throw Error(a(93));l=l[0]}s=l}s==null&&(s=""),i=s}s=ji(i),t.defaultValue=s,l=t.textContent,l===s&&l!==""&&l!==null&&(t.value=l)}function $s(t,i){if(i){var s=t.firstChild;if(s&&s===t.lastChild&&s.nodeType===3){s.nodeValue=i;return}}t.textContent=i}var K5=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Hy(t,i,s){var l=i.indexOf("--")===0;s==null||typeof s=="boolean"||s===""?l?t.setProperty(i,""):i==="float"?t.cssFloat="":t[i]="":l?t.setProperty(i,s):typeof s!="number"||s===0||K5.has(i)?i==="float"?t.cssFloat=s:t[i]=(""+s).trim():t[i]=s+"px"}function Yy(t,i,s){if(i!=null&&typeof i!="object")throw Error(a(62));if(t=t.style,s!=null){for(var l in s)!s.hasOwnProperty(l)||i!=null&&i.hasOwnProperty(l)||(l.indexOf("--")===0?t.setProperty(l,""):l==="float"?t.cssFloat="":t[l]="");for(var d in i)l=i[d],i.hasOwnProperty(d)&&s[d]!==l&&Hy(t,d,l)}else for(var m in i)i.hasOwnProperty(m)&&Hy(t,m,i[m])}function wh(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Q5=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),I5=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Rc(t){return I5.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}var Sh=null;function Th(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ks=null,Qs=null;function Gy(t){var i=Xe(t);if(i&&(t=i.stateNode)){var s=t[fe]||null;e:switch(t=i.stateNode,i.type){case"input":if(bh(t,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name),i=s.name,s.type==="radio"&&i!=null){for(s=t;s.parentNode;)s=s.parentNode;for(s=s.querySelectorAll('input[name="'+ki(""+i)+'"][type="radio"]'),i=0;i<s.length;i++){var l=s[i];if(l!==t&&l.form===t.form){var d=l[fe]||null;if(!d)throw Error(a(90));bh(l,d.value,d.defaultValue,d.defaultValue,d.checked,d.defaultChecked,d.type,d.name)}}for(i=0;i<s.length;i++)l=s[i],l.form===t.form&&Ly(l)}break e;case"textarea":Vy(t,s.value,s.defaultValue);break e;case"select":i=s.value,i!=null&&Fs(t,!!s.multiple,i,!1)}}}var Ah=!1;function Xy(t,i,s){if(Ah)return t(i,s);Ah=!0;try{var l=t(i);return l}finally{if(Ah=!1,(Ks!==null||Qs!==null)&&(pf(),Ks&&(i=Ks,t=Qs,Qs=Ks=null,Gy(i),t)))for(i=0;i<t.length;i++)Gy(t[i])}}function wl(t,i){var s=t.stateNode;if(s===null)return null;var l=s[fe]||null;if(l===null)return null;s=l[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(t=t.type,l=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!l;break e;default:t=!1}if(t)return null;if(s&&typeof s!="function")throw Error(a(231,i,typeof s));return s}var Pr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Eh=!1;if(Pr)try{var Sl={};Object.defineProperty(Sl,"passive",{get:function(){Eh=!0}}),window.addEventListener("test",Sl,Sl),window.removeEventListener("test",Sl,Sl)}catch{Eh=!1}var fa=null,Ch=null,Mc=null;function qy(){if(Mc)return Mc;var t,i=Ch,s=i.length,l,d="value"in fa?fa.value:fa.textContent,m=d.length;for(t=0;t<s&&i[t]===d[t];t++);var _=s-t;for(l=1;l<=_&&i[s-l]===d[m-l];l++);return Mc=d.slice(t,1<l?1-l:void 0)}function Dc(t){var i=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&i===13&&(t=13)):t=i,t===10&&(t=13),32<=t||t===13?t:0}function jc(){return!0}function Fy(){return!1}function Xn(t){function i(s,l,d,m,_){this._reactName=s,this._targetInst=d,this.type=l,this.nativeEvent=m,this.target=_,this.currentTarget=null;for(var A in t)t.hasOwnProperty(A)&&(s=t[A],this[A]=s?s(m):m[A]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?jc:Fy,this.isPropagationStopped=Fy,this}return g(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var s=this.nativeEvent;s&&(s.preventDefault?s.preventDefault():typeof s.returnValue!="unknown"&&(s.returnValue=!1),this.isDefaultPrevented=jc)},stopPropagation:function(){var s=this.nativeEvent;s&&(s.stopPropagation?s.stopPropagation():typeof s.cancelBubble!="unknown"&&(s.cancelBubble=!0),this.isPropagationStopped=jc)},persist:function(){},isPersistent:jc}),i}var ns={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},kc=Xn(ns),Tl=g({},ns,{view:0,detail:0}),Z5=Xn(Tl),Rh,Mh,Al,Oc=g({},Tl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:jh,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Al&&(Al&&t.type==="mousemove"?(Rh=t.screenX-Al.screenX,Mh=t.screenY-Al.screenY):Mh=Rh=0,Al=t),Rh)},movementY:function(t){return"movementY"in t?t.movementY:Mh}}),$y=Xn(Oc),W5=g({},Oc,{dataTransfer:0}),J5=Xn(W5),e3=g({},Tl,{relatedTarget:0}),Dh=Xn(e3),t3=g({},ns,{animationName:0,elapsedTime:0,pseudoElement:0}),n3=Xn(t3),i3=g({},ns,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),r3=Xn(i3),a3=g({},ns,{data:0}),Ky=Xn(a3),s3={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},o3={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},l3={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function u3(t){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(t):(t=l3[t])?!!i[t]:!1}function jh(){return u3}var c3=g({},Tl,{key:function(t){if(t.key){var i=s3[t.key]||t.key;if(i!=="Unidentified")return i}return t.type==="keypress"?(t=Dc(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?o3[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:jh,charCode:function(t){return t.type==="keypress"?Dc(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Dc(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),f3=Xn(c3),d3=g({},Oc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Qy=Xn(d3),h3=g({},Tl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:jh}),p3=Xn(h3),m3=g({},ns,{propertyName:0,elapsedTime:0,pseudoElement:0}),g3=Xn(m3),y3=g({},Oc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),v3=Xn(y3),x3=g({},ns,{newState:0,oldState:0}),b3=Xn(x3),_3=[9,13,27,32],kh=Pr&&"CompositionEvent"in window,El=null;Pr&&"documentMode"in document&&(El=document.documentMode);var w3=Pr&&"TextEvent"in window&&!El,Iy=Pr&&(!kh||El&&8<El&&11>=El),Zy=" ",Wy=!1;function Jy(t,i){switch(t){case"keyup":return _3.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function e1(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Is=!1;function S3(t,i){switch(t){case"compositionend":return e1(i);case"keypress":return i.which!==32?null:(Wy=!0,Zy);case"textInput":return t=i.data,t===Zy&&Wy?null:t;default:return null}}function T3(t,i){if(Is)return t==="compositionend"||!kh&&Jy(t,i)?(t=qy(),Mc=Ch=fa=null,Is=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Iy&&i.locale!=="ko"?null:i.data;default:return null}}var A3={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function t1(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i==="input"?!!A3[t.type]:i==="textarea"}function n1(t,i,s,l){Ks?Qs?Qs.push(l):Qs=[l]:Ks=l,i=bf(i,"onChange"),0<i.length&&(s=new kc("onChange","change",null,s,l),t.push({event:s,listeners:i}))}var Cl=null,Rl=null;function E3(t){Px(t,0)}function zc(t){var i=un(t);if(Ly(i))return t}function i1(t,i){if(t==="change")return i}var r1=!1;if(Pr){var Oh;if(Pr){var zh="oninput"in document;if(!zh){var a1=document.createElement("div");a1.setAttribute("oninput","return;"),zh=typeof a1.oninput=="function"}Oh=zh}else Oh=!1;r1=Oh&&(!document.documentMode||9<document.documentMode)}function s1(){Cl&&(Cl.detachEvent("onpropertychange",o1),Rl=Cl=null)}function o1(t){if(t.propertyName==="value"&&zc(Rl)){var i=[];n1(i,Rl,t,Th(t)),Xy(E3,i)}}function C3(t,i,s){t==="focusin"?(s1(),Cl=i,Rl=s,Cl.attachEvent("onpropertychange",o1)):t==="focusout"&&s1()}function R3(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return zc(Rl)}function M3(t,i){if(t==="click")return zc(i)}function D3(t,i){if(t==="input"||t==="change")return zc(i)}function j3(t,i){return t===i&&(t!==0||1/t===1/i)||t!==t&&i!==i}var si=typeof Object.is=="function"?Object.is:j3;function Ml(t,i){if(si(t,i))return!0;if(typeof t!="object"||t===null||typeof i!="object"||i===null)return!1;var s=Object.keys(t),l=Object.keys(i);if(s.length!==l.length)return!1;for(l=0;l<s.length;l++){var d=s[l];if(!it.call(i,d)||!si(t[d],i[d]))return!1}return!0}function l1(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function u1(t,i){var s=l1(t);t=0;for(var l;s;){if(s.nodeType===3){if(l=t+s.textContent.length,t<=i&&l>=i)return{node:s,offset:i-t};t=l}e:{for(;s;){if(s.nextSibling){s=s.nextSibling;break e}s=s.parentNode}s=void 0}s=l1(s)}}function c1(t,i){return t&&i?t===i?!0:t&&t.nodeType===3?!1:i&&i.nodeType===3?c1(t,i.parentNode):"contains"in t?t.contains(i):t.compareDocumentPosition?!!(t.compareDocumentPosition(i)&16):!1:!1}function f1(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var i=Cc(t.document);i instanceof t.HTMLIFrameElement;){try{var s=typeof i.contentWindow.location.href=="string"}catch{s=!1}if(s)t=i.contentWindow;else break;i=Cc(t.document)}return i}function Nh(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i&&(i==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||i==="textarea"||t.contentEditable==="true")}var k3=Pr&&"documentMode"in document&&11>=document.documentMode,Zs=null,Ph=null,Dl=null,Lh=!1;function d1(t,i,s){var l=s.window===s?s.document:s.nodeType===9?s:s.ownerDocument;Lh||Zs==null||Zs!==Cc(l)||(l=Zs,"selectionStart"in l&&Nh(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),Dl&&Ml(Dl,l)||(Dl=l,l=bf(Ph,"onSelect"),0<l.length&&(i=new kc("onSelect","select",null,i,s),t.push({event:i,listeners:l}),i.target=Zs)))}function is(t,i){var s={};return s[t.toLowerCase()]=i.toLowerCase(),s["Webkit"+t]="webkit"+i,s["Moz"+t]="moz"+i,s}var Ws={animationend:is("Animation","AnimationEnd"),animationiteration:is("Animation","AnimationIteration"),animationstart:is("Animation","AnimationStart"),transitionrun:is("Transition","TransitionRun"),transitionstart:is("Transition","TransitionStart"),transitioncancel:is("Transition","TransitionCancel"),transitionend:is("Transition","TransitionEnd")},Bh={},h1={};Pr&&(h1=document.createElement("div").style,"AnimationEvent"in window||(delete Ws.animationend.animation,delete Ws.animationiteration.animation,delete Ws.animationstart.animation),"TransitionEvent"in window||delete Ws.transitionend.transition);function rs(t){if(Bh[t])return Bh[t];if(!Ws[t])return t;var i=Ws[t],s;for(s in i)if(i.hasOwnProperty(s)&&s in h1)return Bh[t]=i[s];return t}var p1=rs("animationend"),m1=rs("animationiteration"),g1=rs("animationstart"),O3=rs("transitionrun"),z3=rs("transitionstart"),N3=rs("transitioncancel"),y1=rs("transitionend"),v1=new Map,Vh="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Vh.push("scrollEnd");function er(t,i){v1.set(t,i),gt(i,[t])}var x1=new WeakMap;function Oi(t,i){if(typeof t=="object"&&t!==null){var s=x1.get(t);return s!==void 0?s:(i={value:t,source:i,stack:Ny(i)},x1.set(t,i),i)}return{value:t,source:i,stack:Ny(i)}}var zi=[],Js=0,Uh=0;function Nc(){for(var t=Js,i=Uh=Js=0;i<t;){var s=zi[i];zi[i++]=null;var l=zi[i];zi[i++]=null;var d=zi[i];zi[i++]=null;var m=zi[i];if(zi[i++]=null,l!==null&&d!==null){var _=l.pending;_===null?d.next=d:(d.next=_.next,_.next=d),l.pending=d}m!==0&&b1(s,d,m)}}function Pc(t,i,s,l){zi[Js++]=t,zi[Js++]=i,zi[Js++]=s,zi[Js++]=l,Uh|=l,t.lanes|=l,t=t.alternate,t!==null&&(t.lanes|=l)}function Hh(t,i,s,l){return Pc(t,i,s,l),Lc(t)}function eo(t,i){return Pc(t,null,null,i),Lc(t)}function b1(t,i,s){t.lanes|=s;var l=t.alternate;l!==null&&(l.lanes|=s);for(var d=!1,m=t.return;m!==null;)m.childLanes|=s,l=m.alternate,l!==null&&(l.childLanes|=s),m.tag===22&&(t=m.stateNode,t===null||t._visibility&1||(d=!0)),t=m,m=m.return;return t.tag===3?(m=t.stateNode,d&&i!==null&&(d=31-ct(s),t=m.hiddenUpdates,l=t[d],l===null?t[d]=[i]:l.push(i),i.lane=s|536870912),m):null}function Lc(t){if(50<tu)throw tu=0,$p=null,Error(a(185));for(var i=t.return;i!==null;)t=i,i=t.return;return t.tag===3?t.stateNode:null}var to={};function P3(t,i,s,l){this.tag=t,this.key=s,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function oi(t,i,s,l){return new P3(t,i,s,l)}function Yh(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Lr(t,i){var s=t.alternate;return s===null?(s=oi(t.tag,i,t.key,t.mode),s.elementType=t.elementType,s.type=t.type,s.stateNode=t.stateNode,s.alternate=t,t.alternate=s):(s.pendingProps=i,s.type=t.type,s.flags=0,s.subtreeFlags=0,s.deletions=null),s.flags=t.flags&65011712,s.childLanes=t.childLanes,s.lanes=t.lanes,s.child=t.child,s.memoizedProps=t.memoizedProps,s.memoizedState=t.memoizedState,s.updateQueue=t.updateQueue,i=t.dependencies,s.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},s.sibling=t.sibling,s.index=t.index,s.ref=t.ref,s.refCleanup=t.refCleanup,s}function _1(t,i){t.flags&=65011714;var s=t.alternate;return s===null?(t.childLanes=0,t.lanes=i,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=s.childLanes,t.lanes=s.lanes,t.child=s.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=s.memoizedProps,t.memoizedState=s.memoizedState,t.updateQueue=s.updateQueue,t.type=s.type,i=s.dependencies,t.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),t}function Bc(t,i,s,l,d,m){var _=0;if(l=t,typeof t=="function")Yh(t)&&(_=1);else if(typeof t=="string")_=BA(t,s,ae.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case G:return t=oi(31,s,i,d),t.elementType=G,t.lanes=m,t;case w:return as(s.children,d,m,i);case S:_=8,d|=24;break;case C:return t=oi(12,s,i,d|2),t.elementType=C,t.lanes=m,t;case j:return t=oi(13,s,i,d),t.elementType=j,t.lanes=m,t;case P:return t=oi(19,s,i,d),t.elementType=P,t.lanes=m,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case E:case R:_=10;break e;case M:_=9;break e;case O:_=11;break e;case D:_=14;break e;case B:_=16,l=null;break e}_=29,s=Error(a(130,t===null?"null":typeof t,"")),l=null}return i=oi(_,s,i,d),i.elementType=t,i.type=l,i.lanes=m,i}function as(t,i,s,l){return t=oi(7,t,l,i),t.lanes=s,t}function Gh(t,i,s){return t=oi(6,t,null,i),t.lanes=s,t}function Xh(t,i,s){return i=oi(4,t.children!==null?t.children:[],t.key,i),i.lanes=s,i.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},i}var no=[],io=0,Vc=null,Uc=0,Ni=[],Pi=0,ss=null,Br=1,Vr="";function os(t,i){no[io++]=Uc,no[io++]=Vc,Vc=t,Uc=i}function w1(t,i,s){Ni[Pi++]=Br,Ni[Pi++]=Vr,Ni[Pi++]=ss,ss=t;var l=Br;t=Vr;var d=32-ct(l)-1;l&=~(1<<d),s+=1;var m=32-ct(i)+d;if(30<m){var _=d-d%5;m=(l&(1<<_)-1).toString(32),l>>=_,d-=_,Br=1<<32-ct(i)+d|s<<d|l,Vr=m+t}else Br=1<<m|s<<d|l,Vr=t}function qh(t){t.return!==null&&(os(t,1),w1(t,1,0))}function Fh(t){for(;t===Vc;)Vc=no[--io],no[io]=null,Uc=no[--io],no[io]=null;for(;t===ss;)ss=Ni[--Pi],Ni[Pi]=null,Vr=Ni[--Pi],Ni[Pi]=null,Br=Ni[--Pi],Ni[Pi]=null}var kn=null,Dt=null,Ie=!1,ls=null,fr=!1,$h=Error(a(519));function us(t){var i=Error(a(418,""));throw Ol(Oi(i,t)),$h}function S1(t){var i=t.stateNode,s=t.type,l=t.memoizedProps;switch(i[ne]=t,i[fe]=l,s){case"dialog":He("cancel",i),He("close",i);break;case"iframe":case"object":case"embed":He("load",i);break;case"video":case"audio":for(s=0;s<iu.length;s++)He(iu[s],i);break;case"source":He("error",i);break;case"img":case"image":case"link":He("error",i),He("load",i);break;case"details":He("toggle",i);break;case"input":He("invalid",i),By(i,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0),Ec(i);break;case"select":He("invalid",i);break;case"textarea":He("invalid",i),Uy(i,l.value,l.defaultValue,l.children),Ec(i)}s=l.children,typeof s!="string"&&typeof s!="number"&&typeof s!="bigint"||i.textContent===""+s||l.suppressHydrationWarning===!0||Ux(i.textContent,s)?(l.popover!=null&&(He("beforetoggle",i),He("toggle",i)),l.onScroll!=null&&He("scroll",i),l.onScrollEnd!=null&&He("scrollend",i),l.onClick!=null&&(i.onclick=_f),i=!0):i=!1,i||us(t)}function T1(t){for(kn=t.return;kn;)switch(kn.tag){case 5:case 13:fr=!1;return;case 27:case 3:fr=!0;return;default:kn=kn.return}}function jl(t){if(t!==kn)return!1;if(!Ie)return T1(t),Ie=!0,!1;var i=t.tag,s;if((s=i!==3&&i!==27)&&((s=i===5)&&(s=t.type,s=!(s!=="form"&&s!=="button")||um(t.type,t.memoizedProps)),s=!s),s&&Dt&&us(t),T1(t),i===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(a(317));e:{for(t=t.nextSibling,i=0;t;){if(t.nodeType===8)if(s=t.data,s==="/$"){if(i===0){Dt=nr(t.nextSibling);break e}i--}else s!=="$"&&s!=="$!"&&s!=="$?"||i++;t=t.nextSibling}Dt=null}}else i===27?(i=Dt,Ca(t.type)?(t=hm,hm=null,Dt=t):Dt=i):Dt=kn?nr(t.stateNode.nextSibling):null;return!0}function kl(){Dt=kn=null,Ie=!1}function A1(){var t=ls;return t!==null&&($n===null?$n=t:$n.push.apply($n,t),ls=null),t}function Ol(t){ls===null?ls=[t]:ls.push(t)}var Kh=Q(null),cs=null,Ur=null;function da(t,i,s){ie(Kh,i._currentValue),i._currentValue=s}function Hr(t){t._currentValue=Kh.current,te(Kh)}function Qh(t,i,s){for(;t!==null;){var l=t.alternate;if((t.childLanes&i)!==i?(t.childLanes|=i,l!==null&&(l.childLanes|=i)):l!==null&&(l.childLanes&i)!==i&&(l.childLanes|=i),t===s)break;t=t.return}}function Ih(t,i,s,l){var d=t.child;for(d!==null&&(d.return=t);d!==null;){var m=d.dependencies;if(m!==null){var _=d.child;m=m.firstContext;e:for(;m!==null;){var A=m;m=d;for(var k=0;k<i.length;k++)if(A.context===i[k]){m.lanes|=s,A=m.alternate,A!==null&&(A.lanes|=s),Qh(m.return,s,t),l||(_=null);break e}m=A.next}}else if(d.tag===18){if(_=d.return,_===null)throw Error(a(341));_.lanes|=s,m=_.alternate,m!==null&&(m.lanes|=s),Qh(_,s,t),_=null}else _=d.child;if(_!==null)_.return=d;else for(_=d;_!==null;){if(_===t){_=null;break}if(d=_.sibling,d!==null){d.return=_.return,_=d;break}_=_.return}d=_}}function zl(t,i,s,l){t=null;for(var d=i,m=!1;d!==null;){if(!m){if((d.flags&524288)!==0)m=!0;else if((d.flags&262144)!==0)break}if(d.tag===10){var _=d.alternate;if(_===null)throw Error(a(387));if(_=_.memoizedProps,_!==null){var A=d.type;si(d.pendingProps.value,_.value)||(t!==null?t.push(A):t=[A])}}else if(d===je.current){if(_=d.alternate,_===null)throw Error(a(387));_.memoizedState.memoizedState!==d.memoizedState.memoizedState&&(t!==null?t.push(uu):t=[uu])}d=d.return}t!==null&&Ih(i,t,s,l),i.flags|=262144}function Hc(t){for(t=t.firstContext;t!==null;){if(!si(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function fs(t){cs=t,Ur=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function vn(t){return E1(cs,t)}function Yc(t,i){return cs===null&&fs(t),E1(t,i)}function E1(t,i){var s=i._currentValue;if(i={context:i,memoizedValue:s,next:null},Ur===null){if(t===null)throw Error(a(308));Ur=i,t.dependencies={lanes:0,firstContext:i},t.flags|=524288}else Ur=Ur.next=i;return s}var L3=typeof AbortController<"u"?AbortController:function(){var t=[],i=this.signal={aborted:!1,addEventListener:function(s,l){t.push(l)}};this.abort=function(){i.aborted=!0,t.forEach(function(s){return s()})}},B3=n.unstable_scheduleCallback,V3=n.unstable_NormalPriority,It={$$typeof:R,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Zh(){return{controller:new L3,data:new Map,refCount:0}}function Nl(t){t.refCount--,t.refCount===0&&B3(V3,function(){t.controller.abort()})}var Pl=null,Wh=0,ro=0,ao=null;function U3(t,i){if(Pl===null){var s=Pl=[];Wh=0,ro=em(),ao={status:"pending",value:void 0,then:function(l){s.push(l)}}}return Wh++,i.then(C1,C1),i}function C1(){if(--Wh===0&&Pl!==null){ao!==null&&(ao.status="fulfilled");var t=Pl;Pl=null,ro=0,ao=null;for(var i=0;i<t.length;i++)(0,t[i])()}}function H3(t,i){var s=[],l={status:"pending",value:null,reason:null,then:function(d){s.push(d)}};return t.then(function(){l.status="fulfilled",l.value=i;for(var d=0;d<s.length;d++)(0,s[d])(i)},function(d){for(l.status="rejected",l.reason=d,d=0;d<s.length;d++)(0,s[d])(void 0)}),l}var R1=Y.S;Y.S=function(t,i){typeof i=="object"&&i!==null&&typeof i.then=="function"&&U3(t,i),R1!==null&&R1(t,i)};var ds=Q(null);function Jh(){var t=ds.current;return t!==null?t:dt.pooledCache}function Gc(t,i){i===null?ie(ds,ds.current):ie(ds,i.pool)}function M1(){var t=Jh();return t===null?null:{parent:It._currentValue,pool:t}}var Ll=Error(a(460)),D1=Error(a(474)),Xc=Error(a(542)),ep={then:function(){}};function j1(t){return t=t.status,t==="fulfilled"||t==="rejected"}function qc(){}function k1(t,i,s){switch(s=t[s],s===void 0?t.push(i):s!==i&&(i.then(qc,qc),i=s),i.status){case"fulfilled":return i.value;case"rejected":throw t=i.reason,z1(t),t;default:if(typeof i.status=="string")i.then(qc,qc);else{if(t=dt,t!==null&&100<t.shellSuspendCounter)throw Error(a(482));t=i,t.status="pending",t.then(function(l){if(i.status==="pending"){var d=i;d.status="fulfilled",d.value=l}},function(l){if(i.status==="pending"){var d=i;d.status="rejected",d.reason=l}})}switch(i.status){case"fulfilled":return i.value;case"rejected":throw t=i.reason,z1(t),t}throw Bl=i,Ll}}var Bl=null;function O1(){if(Bl===null)throw Error(a(459));var t=Bl;return Bl=null,t}function z1(t){if(t===Ll||t===Xc)throw Error(a(483))}var ha=!1;function tp(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function np(t,i){t=t.updateQueue,i.updateQueue===t&&(i.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function pa(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function ma(t,i,s){var l=t.updateQueue;if(l===null)return null;if(l=l.shared,(et&2)!==0){var d=l.pending;return d===null?i.next=i:(i.next=d.next,d.next=i),l.pending=i,i=Lc(t),b1(t,null,s),i}return Pc(t,l,i,s),Lc(t)}function Vl(t,i,s){if(i=i.updateQueue,i!==null&&(i=i.shared,(s&4194048)!==0)){var l=i.lanes;l&=t.pendingLanes,s|=l,i.lanes=s,kr(t,s)}}function ip(t,i){var s=t.updateQueue,l=t.alternate;if(l!==null&&(l=l.updateQueue,s===l)){var d=null,m=null;if(s=s.firstBaseUpdate,s!==null){do{var _={lane:s.lane,tag:s.tag,payload:s.payload,callback:null,next:null};m===null?d=m=_:m=m.next=_,s=s.next}while(s!==null);m===null?d=m=i:m=m.next=i}else d=m=i;s={baseState:l.baseState,firstBaseUpdate:d,lastBaseUpdate:m,shared:l.shared,callbacks:l.callbacks},t.updateQueue=s;return}t=s.lastBaseUpdate,t===null?s.firstBaseUpdate=i:t.next=i,s.lastBaseUpdate=i}var rp=!1;function Ul(){if(rp){var t=ao;if(t!==null)throw t}}function Hl(t,i,s,l){rp=!1;var d=t.updateQueue;ha=!1;var m=d.firstBaseUpdate,_=d.lastBaseUpdate,A=d.shared.pending;if(A!==null){d.shared.pending=null;var k=A,H=k.next;k.next=null,_===null?m=H:_.next=H,_=k;var I=t.alternate;I!==null&&(I=I.updateQueue,A=I.lastBaseUpdate,A!==_&&(A===null?I.firstBaseUpdate=H:A.next=H,I.lastBaseUpdate=k))}if(m!==null){var W=d.baseState;_=0,I=H=k=null,A=m;do{var X=A.lane&-536870913,q=X!==A.lane;if(q?(qe&X)===X:(l&X)===X){X!==0&&X===ro&&(rp=!0),I!==null&&(I=I.next={lane:0,tag:A.tag,payload:A.payload,callback:null,next:null});e:{var we=t,xe=A;X=i;var st=s;switch(xe.tag){case 1:if(we=xe.payload,typeof we=="function"){W=we.call(st,W,X);break e}W=we;break e;case 3:we.flags=we.flags&-65537|128;case 0:if(we=xe.payload,X=typeof we=="function"?we.call(st,W,X):we,X==null)break e;W=g({},W,X);break e;case 2:ha=!0}}X=A.callback,X!==null&&(t.flags|=64,q&&(t.flags|=8192),q=d.callbacks,q===null?d.callbacks=[X]:q.push(X))}else q={lane:X,tag:A.tag,payload:A.payload,callback:A.callback,next:null},I===null?(H=I=q,k=W):I=I.next=q,_|=X;if(A=A.next,A===null){if(A=d.shared.pending,A===null)break;q=A,A=q.next,q.next=null,d.lastBaseUpdate=q,d.shared.pending=null}}while(!0);I===null&&(k=W),d.baseState=k,d.firstBaseUpdate=H,d.lastBaseUpdate=I,m===null&&(d.shared.lanes=0),Sa|=_,t.lanes=_,t.memoizedState=W}}function N1(t,i){if(typeof t!="function")throw Error(a(191,t));t.call(i)}function P1(t,i){var s=t.callbacks;if(s!==null)for(t.callbacks=null,t=0;t<s.length;t++)N1(s[t],i)}var so=Q(null),Fc=Q(0);function L1(t,i){t=Kr,ie(Fc,t),ie(so,i),Kr=t|i.baseLanes}function ap(){ie(Fc,Kr),ie(so,so.current)}function sp(){Kr=Fc.current,te(so),te(Fc)}var ga=0,ke=null,rt=null,Xt=null,$c=!1,oo=!1,hs=!1,Kc=0,Yl=0,lo=null,Y3=0;function Nt(){throw Error(a(321))}function op(t,i){if(i===null)return!1;for(var s=0;s<i.length&&s<t.length;s++)if(!si(t[s],i[s]))return!1;return!0}function lp(t,i,s,l,d,m){return ga=m,ke=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,Y.H=t===null||t.memoizedState===null?bv:_v,hs=!1,m=s(l,d),hs=!1,oo&&(m=V1(i,s,l,d)),B1(t),m}function B1(t){Y.H=ef;var i=rt!==null&&rt.next!==null;if(ga=0,Xt=rt=ke=null,$c=!1,Yl=0,lo=null,i)throw Error(a(300));t===null||en||(t=t.dependencies,t!==null&&Hc(t)&&(en=!0))}function V1(t,i,s,l){ke=t;var d=0;do{if(oo&&(lo=null),Yl=0,oo=!1,25<=d)throw Error(a(301));if(d+=1,Xt=rt=null,t.updateQueue!=null){var m=t.updateQueue;m.lastEffect=null,m.events=null,m.stores=null,m.memoCache!=null&&(m.memoCache.index=0)}Y.H=Q3,m=i(s,l)}while(oo);return m}function G3(){var t=Y.H,i=t.useState()[0];return i=typeof i.then=="function"?Gl(i):i,t=t.useState()[0],(rt!==null?rt.memoizedState:null)!==t&&(ke.flags|=1024),i}function up(){var t=Kc!==0;return Kc=0,t}function cp(t,i,s){i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~s}function fp(t){if($c){for(t=t.memoizedState;t!==null;){var i=t.queue;i!==null&&(i.pending=null),t=t.next}$c=!1}ga=0,Xt=rt=ke=null,oo=!1,Yl=Kc=0,lo=null}function qn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Xt===null?ke.memoizedState=Xt=t:Xt=Xt.next=t,Xt}function qt(){if(rt===null){var t=ke.alternate;t=t!==null?t.memoizedState:null}else t=rt.next;var i=Xt===null?ke.memoizedState:Xt.next;if(i!==null)Xt=i,rt=t;else{if(t===null)throw ke.alternate===null?Error(a(467)):Error(a(310));rt=t,t={memoizedState:rt.memoizedState,baseState:rt.baseState,baseQueue:rt.baseQueue,queue:rt.queue,next:null},Xt===null?ke.memoizedState=Xt=t:Xt=Xt.next=t}return Xt}function dp(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Gl(t){var i=Yl;return Yl+=1,lo===null&&(lo=[]),t=k1(lo,t,i),i=ke,(Xt===null?i.memoizedState:Xt.next)===null&&(i=i.alternate,Y.H=i===null||i.memoizedState===null?bv:_v),t}function Qc(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Gl(t);if(t.$$typeof===R)return vn(t)}throw Error(a(438,String(t)))}function hp(t){var i=null,s=ke.updateQueue;if(s!==null&&(i=s.memoCache),i==null){var l=ke.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(i={data:l.data.map(function(d){return d.slice()}),index:0})))}if(i==null&&(i={data:[],index:0}),s===null&&(s=dp(),ke.updateQueue=s),s.memoCache=i,s=i.data[i.index],s===void 0)for(s=i.data[i.index]=Array(t),l=0;l<t;l++)s[l]=F;return i.index++,s}function Yr(t,i){return typeof i=="function"?i(t):i}function Ic(t){var i=qt();return pp(i,rt,t)}function pp(t,i,s){var l=t.queue;if(l===null)throw Error(a(311));l.lastRenderedReducer=s;var d=t.baseQueue,m=l.pending;if(m!==null){if(d!==null){var _=d.next;d.next=m.next,m.next=_}i.baseQueue=d=m,l.pending=null}if(m=t.baseState,d===null)t.memoizedState=m;else{i=d.next;var A=_=null,k=null,H=i,I=!1;do{var W=H.lane&-536870913;if(W!==H.lane?(qe&W)===W:(ga&W)===W){var X=H.revertLane;if(X===0)k!==null&&(k=k.next={lane:0,revertLane:0,action:H.action,hasEagerState:H.hasEagerState,eagerState:H.eagerState,next:null}),W===ro&&(I=!0);else if((ga&X)===X){H=H.next,X===ro&&(I=!0);continue}else W={lane:0,revertLane:H.revertLane,action:H.action,hasEagerState:H.hasEagerState,eagerState:H.eagerState,next:null},k===null?(A=k=W,_=m):k=k.next=W,ke.lanes|=X,Sa|=X;W=H.action,hs&&s(m,W),m=H.hasEagerState?H.eagerState:s(m,W)}else X={lane:W,revertLane:H.revertLane,action:H.action,hasEagerState:H.hasEagerState,eagerState:H.eagerState,next:null},k===null?(A=k=X,_=m):k=k.next=X,ke.lanes|=W,Sa|=W;H=H.next}while(H!==null&&H!==i);if(k===null?_=m:k.next=A,!si(m,t.memoizedState)&&(en=!0,I&&(s=ao,s!==null)))throw s;t.memoizedState=m,t.baseState=_,t.baseQueue=k,l.lastRenderedState=m}return d===null&&(l.lanes=0),[t.memoizedState,l.dispatch]}function mp(t){var i=qt(),s=i.queue;if(s===null)throw Error(a(311));s.lastRenderedReducer=t;var l=s.dispatch,d=s.pending,m=i.memoizedState;if(d!==null){s.pending=null;var _=d=d.next;do m=t(m,_.action),_=_.next;while(_!==d);si(m,i.memoizedState)||(en=!0),i.memoizedState=m,i.baseQueue===null&&(i.baseState=m),s.lastRenderedState=m}return[m,l]}function U1(t,i,s){var l=ke,d=qt(),m=Ie;if(m){if(s===void 0)throw Error(a(407));s=s()}else s=i();var _=!si((rt||d).memoizedState,s);_&&(d.memoizedState=s,en=!0),d=d.queue;var A=G1.bind(null,l,d,t);if(Xl(2048,8,A,[t]),d.getSnapshot!==i||_||Xt!==null&&Xt.memoizedState.tag&1){if(l.flags|=2048,uo(9,Zc(),Y1.bind(null,l,d,s,i),null),dt===null)throw Error(a(349));m||(ga&124)!==0||H1(l,i,s)}return s}function H1(t,i,s){t.flags|=16384,t={getSnapshot:i,value:s},i=ke.updateQueue,i===null?(i=dp(),ke.updateQueue=i,i.stores=[t]):(s=i.stores,s===null?i.stores=[t]:s.push(t))}function Y1(t,i,s,l){i.value=s,i.getSnapshot=l,X1(i)&&q1(t)}function G1(t,i,s){return s(function(){X1(i)&&q1(t)})}function X1(t){var i=t.getSnapshot;t=t.value;try{var s=i();return!si(t,s)}catch{return!0}}function q1(t){var i=eo(t,2);i!==null&&di(i,t,2)}function gp(t){var i=qn();if(typeof t=="function"){var s=t;if(t=s(),hs){Ht(!0);try{s()}finally{Ht(!1)}}}return i.memoizedState=i.baseState=t,i.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Yr,lastRenderedState:t},i}function F1(t,i,s,l){return t.baseState=s,pp(t,rt,typeof l=="function"?l:Yr)}function X3(t,i,s,l,d){if(Jc(t))throw Error(a(485));if(t=i.action,t!==null){var m={payload:d,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(_){m.listeners.push(_)}};Y.T!==null?s(!0):m.isTransition=!1,l(m),s=i.pending,s===null?(m.next=i.pending=m,$1(i,m)):(m.next=s.next,i.pending=s.next=m)}}function $1(t,i){var s=i.action,l=i.payload,d=t.state;if(i.isTransition){var m=Y.T,_={};Y.T=_;try{var A=s(d,l),k=Y.S;k!==null&&k(_,A),K1(t,i,A)}catch(H){yp(t,i,H)}finally{Y.T=m}}else try{m=s(d,l),K1(t,i,m)}catch(H){yp(t,i,H)}}function K1(t,i,s){s!==null&&typeof s=="object"&&typeof s.then=="function"?s.then(function(l){Q1(t,i,l)},function(l){return yp(t,i,l)}):Q1(t,i,s)}function Q1(t,i,s){i.status="fulfilled",i.value=s,I1(i),t.state=s,i=t.pending,i!==null&&(s=i.next,s===i?t.pending=null:(s=s.next,i.next=s,$1(t,s)))}function yp(t,i,s){var l=t.pending;if(t.pending=null,l!==null){l=l.next;do i.status="rejected",i.reason=s,I1(i),i=i.next;while(i!==l)}t.action=null}function I1(t){t=t.listeners;for(var i=0;i<t.length;i++)(0,t[i])()}function Z1(t,i){return i}function W1(t,i){if(Ie){var s=dt.formState;if(s!==null){e:{var l=ke;if(Ie){if(Dt){t:{for(var d=Dt,m=fr;d.nodeType!==8;){if(!m){d=null;break t}if(d=nr(d.nextSibling),d===null){d=null;break t}}m=d.data,d=m==="F!"||m==="F"?d:null}if(d){Dt=nr(d.nextSibling),l=d.data==="F!";break e}}us(l)}l=!1}l&&(i=s[0])}}return s=qn(),s.memoizedState=s.baseState=i,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Z1,lastRenderedState:i},s.queue=l,s=yv.bind(null,ke,l),l.dispatch=s,l=gp(!1),m=wp.bind(null,ke,!1,l.queue),l=qn(),d={state:i,dispatch:null,action:t,pending:null},l.queue=d,s=X3.bind(null,ke,d,m,s),d.dispatch=s,l.memoizedState=t,[i,s,!1]}function J1(t){var i=qt();return ev(i,rt,t)}function ev(t,i,s){if(i=pp(t,i,Z1)[0],t=Ic(Yr)[0],typeof i=="object"&&i!==null&&typeof i.then=="function")try{var l=Gl(i)}catch(_){throw _===Ll?Xc:_}else l=i;i=qt();var d=i.queue,m=d.dispatch;return s!==i.memoizedState&&(ke.flags|=2048,uo(9,Zc(),q3.bind(null,d,s),null)),[l,m,t]}function q3(t,i){t.action=i}function tv(t){var i=qt(),s=rt;if(s!==null)return ev(i,s,t);qt(),i=i.memoizedState,s=qt();var l=s.queue.dispatch;return s.memoizedState=t,[i,l,!1]}function uo(t,i,s,l){return t={tag:t,create:s,deps:l,inst:i,next:null},i=ke.updateQueue,i===null&&(i=dp(),ke.updateQueue=i),s=i.lastEffect,s===null?i.lastEffect=t.next=t:(l=s.next,s.next=t,t.next=l,i.lastEffect=t),t}function Zc(){return{destroy:void 0,resource:void 0}}function nv(){return qt().memoizedState}function Wc(t,i,s,l){var d=qn();l=l===void 0?null:l,ke.flags|=t,d.memoizedState=uo(1|i,Zc(),s,l)}function Xl(t,i,s,l){var d=qt();l=l===void 0?null:l;var m=d.memoizedState.inst;rt!==null&&l!==null&&op(l,rt.memoizedState.deps)?d.memoizedState=uo(i,m,s,l):(ke.flags|=t,d.memoizedState=uo(1|i,m,s,l))}function iv(t,i){Wc(8390656,8,t,i)}function rv(t,i){Xl(2048,8,t,i)}function av(t,i){return Xl(4,2,t,i)}function sv(t,i){return Xl(4,4,t,i)}function ov(t,i){if(typeof i=="function"){t=t();var s=i(t);return function(){typeof s=="function"?s():i(null)}}if(i!=null)return t=t(),i.current=t,function(){i.current=null}}function lv(t,i,s){s=s!=null?s.concat([t]):null,Xl(4,4,ov.bind(null,i,t),s)}function vp(){}function uv(t,i){var s=qt();i=i===void 0?null:i;var l=s.memoizedState;return i!==null&&op(i,l[1])?l[0]:(s.memoizedState=[t,i],t)}function cv(t,i){var s=qt();i=i===void 0?null:i;var l=s.memoizedState;if(i!==null&&op(i,l[1]))return l[0];if(l=t(),hs){Ht(!0);try{t()}finally{Ht(!1)}}return s.memoizedState=[l,i],l}function xp(t,i,s){return s===void 0||(ga&1073741824)!==0?t.memoizedState=i:(t.memoizedState=s,t=hx(),ke.lanes|=t,Sa|=t,s)}function fv(t,i,s,l){return si(s,i)?s:so.current!==null?(t=xp(t,s,l),si(t,i)||(en=!0),t):(ga&42)===0?(en=!0,t.memoizedState=s):(t=hx(),ke.lanes|=t,Sa|=t,i)}function dv(t,i,s,l,d){var m=K.p;K.p=m!==0&&8>m?m:8;var _=Y.T,A={};Y.T=A,wp(t,!1,i,s);try{var k=d(),H=Y.S;if(H!==null&&H(A,k),k!==null&&typeof k=="object"&&typeof k.then=="function"){var I=H3(k,l);ql(t,i,I,fi(t))}else ql(t,i,l,fi(t))}catch(W){ql(t,i,{then:function(){},status:"rejected",reason:W},fi())}finally{K.p=m,Y.T=_}}function F3(){}function bp(t,i,s,l){if(t.tag!==5)throw Error(a(476));var d=hv(t).queue;dv(t,d,i,ee,s===null?F3:function(){return pv(t),s(l)})}function hv(t){var i=t.memoizedState;if(i!==null)return i;i={memoizedState:ee,baseState:ee,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Yr,lastRenderedState:ee},next:null};var s={};return i.next={memoizedState:s,baseState:s,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Yr,lastRenderedState:s},next:null},t.memoizedState=i,t=t.alternate,t!==null&&(t.memoizedState=i),i}function pv(t){var i=hv(t).next.queue;ql(t,i,{},fi())}function _p(){return vn(uu)}function mv(){return qt().memoizedState}function gv(){return qt().memoizedState}function $3(t){for(var i=t.return;i!==null;){switch(i.tag){case 24:case 3:var s=fi();t=pa(s);var l=ma(i,t,s);l!==null&&(di(l,i,s),Vl(l,i,s)),i={cache:Zh()},t.payload=i;return}i=i.return}}function K3(t,i,s){var l=fi();s={lane:l,revertLane:0,action:s,hasEagerState:!1,eagerState:null,next:null},Jc(t)?vv(i,s):(s=Hh(t,i,s,l),s!==null&&(di(s,t,l),xv(s,i,l)))}function yv(t,i,s){var l=fi();ql(t,i,s,l)}function ql(t,i,s,l){var d={lane:l,revertLane:0,action:s,hasEagerState:!1,eagerState:null,next:null};if(Jc(t))vv(i,d);else{var m=t.alternate;if(t.lanes===0&&(m===null||m.lanes===0)&&(m=i.lastRenderedReducer,m!==null))try{var _=i.lastRenderedState,A=m(_,s);if(d.hasEagerState=!0,d.eagerState=A,si(A,_))return Pc(t,i,d,0),dt===null&&Nc(),!1}catch{}finally{}if(s=Hh(t,i,d,l),s!==null)return di(s,t,l),xv(s,i,l),!0}return!1}function wp(t,i,s,l){if(l={lane:2,revertLane:em(),action:l,hasEagerState:!1,eagerState:null,next:null},Jc(t)){if(i)throw Error(a(479))}else i=Hh(t,s,l,2),i!==null&&di(i,t,2)}function Jc(t){var i=t.alternate;return t===ke||i!==null&&i===ke}function vv(t,i){oo=$c=!0;var s=t.pending;s===null?i.next=i:(i.next=s.next,s.next=i),t.pending=i}function xv(t,i,s){if((s&4194048)!==0){var l=i.lanes;l&=t.pendingLanes,s|=l,i.lanes=s,kr(t,s)}}var ef={readContext:vn,use:Qc,useCallback:Nt,useContext:Nt,useEffect:Nt,useImperativeHandle:Nt,useLayoutEffect:Nt,useInsertionEffect:Nt,useMemo:Nt,useReducer:Nt,useRef:Nt,useState:Nt,useDebugValue:Nt,useDeferredValue:Nt,useTransition:Nt,useSyncExternalStore:Nt,useId:Nt,useHostTransitionStatus:Nt,useFormState:Nt,useActionState:Nt,useOptimistic:Nt,useMemoCache:Nt,useCacheRefresh:Nt},bv={readContext:vn,use:Qc,useCallback:function(t,i){return qn().memoizedState=[t,i===void 0?null:i],t},useContext:vn,useEffect:iv,useImperativeHandle:function(t,i,s){s=s!=null?s.concat([t]):null,Wc(4194308,4,ov.bind(null,i,t),s)},useLayoutEffect:function(t,i){return Wc(4194308,4,t,i)},useInsertionEffect:function(t,i){Wc(4,2,t,i)},useMemo:function(t,i){var s=qn();i=i===void 0?null:i;var l=t();if(hs){Ht(!0);try{t()}finally{Ht(!1)}}return s.memoizedState=[l,i],l},useReducer:function(t,i,s){var l=qn();if(s!==void 0){var d=s(i);if(hs){Ht(!0);try{s(i)}finally{Ht(!1)}}}else d=i;return l.memoizedState=l.baseState=d,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:d},l.queue=t,t=t.dispatch=K3.bind(null,ke,t),[l.memoizedState,t]},useRef:function(t){var i=qn();return t={current:t},i.memoizedState=t},useState:function(t){t=gp(t);var i=t.queue,s=yv.bind(null,ke,i);return i.dispatch=s,[t.memoizedState,s]},useDebugValue:vp,useDeferredValue:function(t,i){var s=qn();return xp(s,t,i)},useTransition:function(){var t=gp(!1);return t=dv.bind(null,ke,t.queue,!0,!1),qn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,i,s){var l=ke,d=qn();if(Ie){if(s===void 0)throw Error(a(407));s=s()}else{if(s=i(),dt===null)throw Error(a(349));(qe&124)!==0||H1(l,i,s)}d.memoizedState=s;var m={value:s,getSnapshot:i};return d.queue=m,iv(G1.bind(null,l,m,t),[t]),l.flags|=2048,uo(9,Zc(),Y1.bind(null,l,m,s,i),null),s},useId:function(){var t=qn(),i=dt.identifierPrefix;if(Ie){var s=Vr,l=Br;s=(l&~(1<<32-ct(l)-1)).toString(32)+s,i="«"+i+"R"+s,s=Kc++,0<s&&(i+="H"+s.toString(32)),i+="»"}else s=Y3++,i="«"+i+"r"+s.toString(32)+"»";return t.memoizedState=i},useHostTransitionStatus:_p,useFormState:W1,useActionState:W1,useOptimistic:function(t){var i=qn();i.memoizedState=i.baseState=t;var s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return i.queue=s,i=wp.bind(null,ke,!0,s),s.dispatch=i,[t,i]},useMemoCache:hp,useCacheRefresh:function(){return qn().memoizedState=$3.bind(null,ke)}},_v={readContext:vn,use:Qc,useCallback:uv,useContext:vn,useEffect:rv,useImperativeHandle:lv,useInsertionEffect:av,useLayoutEffect:sv,useMemo:cv,useReducer:Ic,useRef:nv,useState:function(){return Ic(Yr)},useDebugValue:vp,useDeferredValue:function(t,i){var s=qt();return fv(s,rt.memoizedState,t,i)},useTransition:function(){var t=Ic(Yr)[0],i=qt().memoizedState;return[typeof t=="boolean"?t:Gl(t),i]},useSyncExternalStore:U1,useId:mv,useHostTransitionStatus:_p,useFormState:J1,useActionState:J1,useOptimistic:function(t,i){var s=qt();return F1(s,rt,t,i)},useMemoCache:hp,useCacheRefresh:gv},Q3={readContext:vn,use:Qc,useCallback:uv,useContext:vn,useEffect:rv,useImperativeHandle:lv,useInsertionEffect:av,useLayoutEffect:sv,useMemo:cv,useReducer:mp,useRef:nv,useState:function(){return mp(Yr)},useDebugValue:vp,useDeferredValue:function(t,i){var s=qt();return rt===null?xp(s,t,i):fv(s,rt.memoizedState,t,i)},useTransition:function(){var t=mp(Yr)[0],i=qt().memoizedState;return[typeof t=="boolean"?t:Gl(t),i]},useSyncExternalStore:U1,useId:mv,useHostTransitionStatus:_p,useFormState:tv,useActionState:tv,useOptimistic:function(t,i){var s=qt();return rt!==null?F1(s,rt,t,i):(s.baseState=t,[t,s.queue.dispatch])},useMemoCache:hp,useCacheRefresh:gv},co=null,Fl=0;function tf(t){var i=Fl;return Fl+=1,co===null&&(co=[]),k1(co,t,i)}function $l(t,i){i=i.props.ref,t.ref=i!==void 0?i:null}function nf(t,i){throw i.$$typeof===y?Error(a(525)):(t=Object.prototype.toString.call(i),Error(a(31,t==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":t)))}function wv(t){var i=t._init;return i(t._payload)}function Sv(t){function i(L,N){if(t){var U=L.deletions;U===null?(L.deletions=[N],L.flags|=16):U.push(N)}}function s(L,N){if(!t)return null;for(;N!==null;)i(L,N),N=N.sibling;return null}function l(L){for(var N=new Map;L!==null;)L.key!==null?N.set(L.key,L):N.set(L.index,L),L=L.sibling;return N}function d(L,N){return L=Lr(L,N),L.index=0,L.sibling=null,L}function m(L,N,U){return L.index=U,t?(U=L.alternate,U!==null?(U=U.index,U<N?(L.flags|=67108866,N):U):(L.flags|=67108866,N)):(L.flags|=1048576,N)}function _(L){return t&&L.alternate===null&&(L.flags|=67108866),L}function A(L,N,U,Z){return N===null||N.tag!==6?(N=Gh(U,L.mode,Z),N.return=L,N):(N=d(N,U),N.return=L,N)}function k(L,N,U,Z){var ue=U.type;return ue===w?I(L,N,U.props.children,Z,U.key):N!==null&&(N.elementType===ue||typeof ue=="object"&&ue!==null&&ue.$$typeof===B&&wv(ue)===N.type)?(N=d(N,U.props),$l(N,U),N.return=L,N):(N=Bc(U.type,U.key,U.props,null,L.mode,Z),$l(N,U),N.return=L,N)}function H(L,N,U,Z){return N===null||N.tag!==4||N.stateNode.containerInfo!==U.containerInfo||N.stateNode.implementation!==U.implementation?(N=Xh(U,L.mode,Z),N.return=L,N):(N=d(N,U.children||[]),N.return=L,N)}function I(L,N,U,Z,ue){return N===null||N.tag!==7?(N=as(U,L.mode,Z,ue),N.return=L,N):(N=d(N,U),N.return=L,N)}function W(L,N,U){if(typeof N=="string"&&N!==""||typeof N=="number"||typeof N=="bigint")return N=Gh(""+N,L.mode,U),N.return=L,N;if(typeof N=="object"&&N!==null){switch(N.$$typeof){case x:return U=Bc(N.type,N.key,N.props,null,L.mode,U),$l(U,N),U.return=L,U;case v:return N=Xh(N,L.mode,U),N.return=L,N;case B:var Z=N._init;return N=Z(N._payload),W(L,N,U)}if(ge(N)||J(N))return N=as(N,L.mode,U,null),N.return=L,N;if(typeof N.then=="function")return W(L,tf(N),U);if(N.$$typeof===R)return W(L,Yc(L,N),U);nf(L,N)}return null}function X(L,N,U,Z){var ue=N!==null?N.key:null;if(typeof U=="string"&&U!==""||typeof U=="number"||typeof U=="bigint")return ue!==null?null:A(L,N,""+U,Z);if(typeof U=="object"&&U!==null){switch(U.$$typeof){case x:return U.key===ue?k(L,N,U,Z):null;case v:return U.key===ue?H(L,N,U,Z):null;case B:return ue=U._init,U=ue(U._payload),X(L,N,U,Z)}if(ge(U)||J(U))return ue!==null?null:I(L,N,U,Z,null);if(typeof U.then=="function")return X(L,N,tf(U),Z);if(U.$$typeof===R)return X(L,N,Yc(L,U),Z);nf(L,U)}return null}function q(L,N,U,Z,ue){if(typeof Z=="string"&&Z!==""||typeof Z=="number"||typeof Z=="bigint")return L=L.get(U)||null,A(N,L,""+Z,ue);if(typeof Z=="object"&&Z!==null){switch(Z.$$typeof){case x:return L=L.get(Z.key===null?U:Z.key)||null,k(N,L,Z,ue);case v:return L=L.get(Z.key===null?U:Z.key)||null,H(N,L,Z,ue);case B:var Ne=Z._init;return Z=Ne(Z._payload),q(L,N,U,Z,ue)}if(ge(Z)||J(Z))return L=L.get(U)||null,I(N,L,Z,ue,null);if(typeof Z.then=="function")return q(L,N,U,tf(Z),ue);if(Z.$$typeof===R)return q(L,N,U,Yc(N,Z),ue);nf(N,Z)}return null}function we(L,N,U,Z){for(var ue=null,Ne=null,he=N,be=N=0,nn=null;he!==null&&be<U.length;be++){he.index>be?(nn=he,he=null):nn=he.sibling;var Ke=X(L,he,U[be],Z);if(Ke===null){he===null&&(he=nn);break}t&&he&&Ke.alternate===null&&i(L,he),N=m(Ke,N,be),Ne===null?ue=Ke:Ne.sibling=Ke,Ne=Ke,he=nn}if(be===U.length)return s(L,he),Ie&&os(L,be),ue;if(he===null){for(;be<U.length;be++)he=W(L,U[be],Z),he!==null&&(N=m(he,N,be),Ne===null?ue=he:Ne.sibling=he,Ne=he);return Ie&&os(L,be),ue}for(he=l(he);be<U.length;be++)nn=q(he,L,be,U[be],Z),nn!==null&&(t&&nn.alternate!==null&&he.delete(nn.key===null?be:nn.key),N=m(nn,N,be),Ne===null?ue=nn:Ne.sibling=nn,Ne=nn);return t&&he.forEach(function(ka){return i(L,ka)}),Ie&&os(L,be),ue}function xe(L,N,U,Z){if(U==null)throw Error(a(151));for(var ue=null,Ne=null,he=N,be=N=0,nn=null,Ke=U.next();he!==null&&!Ke.done;be++,Ke=U.next()){he.index>be?(nn=he,he=null):nn=he.sibling;var ka=X(L,he,Ke.value,Z);if(ka===null){he===null&&(he=nn);break}t&&he&&ka.alternate===null&&i(L,he),N=m(ka,N,be),Ne===null?ue=ka:Ne.sibling=ka,Ne=ka,he=nn}if(Ke.done)return s(L,he),Ie&&os(L,be),ue;if(he===null){for(;!Ke.done;be++,Ke=U.next())Ke=W(L,Ke.value,Z),Ke!==null&&(N=m(Ke,N,be),Ne===null?ue=Ke:Ne.sibling=Ke,Ne=Ke);return Ie&&os(L,be),ue}for(he=l(he);!Ke.done;be++,Ke=U.next())Ke=q(he,L,be,Ke.value,Z),Ke!==null&&(t&&Ke.alternate!==null&&he.delete(Ke.key===null?be:Ke.key),N=m(Ke,N,be),Ne===null?ue=Ke:Ne.sibling=Ke,Ne=Ke);return t&&he.forEach(function(IA){return i(L,IA)}),Ie&&os(L,be),ue}function st(L,N,U,Z){if(typeof U=="object"&&U!==null&&U.type===w&&U.key===null&&(U=U.props.children),typeof U=="object"&&U!==null){switch(U.$$typeof){case x:e:{for(var ue=U.key;N!==null;){if(N.key===ue){if(ue=U.type,ue===w){if(N.tag===7){s(L,N.sibling),Z=d(N,U.props.children),Z.return=L,L=Z;break e}}else if(N.elementType===ue||typeof ue=="object"&&ue!==null&&ue.$$typeof===B&&wv(ue)===N.type){s(L,N.sibling),Z=d(N,U.props),$l(Z,U),Z.return=L,L=Z;break e}s(L,N);break}else i(L,N);N=N.sibling}U.type===w?(Z=as(U.props.children,L.mode,Z,U.key),Z.return=L,L=Z):(Z=Bc(U.type,U.key,U.props,null,L.mode,Z),$l(Z,U),Z.return=L,L=Z)}return _(L);case v:e:{for(ue=U.key;N!==null;){if(N.key===ue)if(N.tag===4&&N.stateNode.containerInfo===U.containerInfo&&N.stateNode.implementation===U.implementation){s(L,N.sibling),Z=d(N,U.children||[]),Z.return=L,L=Z;break e}else{s(L,N);break}else i(L,N);N=N.sibling}Z=Xh(U,L.mode,Z),Z.return=L,L=Z}return _(L);case B:return ue=U._init,U=ue(U._payload),st(L,N,U,Z)}if(ge(U))return we(L,N,U,Z);if(J(U)){if(ue=J(U),typeof ue!="function")throw Error(a(150));return U=ue.call(U),xe(L,N,U,Z)}if(typeof U.then=="function")return st(L,N,tf(U),Z);if(U.$$typeof===R)return st(L,N,Yc(L,U),Z);nf(L,U)}return typeof U=="string"&&U!==""||typeof U=="number"||typeof U=="bigint"?(U=""+U,N!==null&&N.tag===6?(s(L,N.sibling),Z=d(N,U),Z.return=L,L=Z):(s(L,N),Z=Gh(U,L.mode,Z),Z.return=L,L=Z),_(L)):s(L,N)}return function(L,N,U,Z){try{Fl=0;var ue=st(L,N,U,Z);return co=null,ue}catch(he){if(he===Ll||he===Xc)throw he;var Ne=oi(29,he,null,L.mode);return Ne.lanes=Z,Ne.return=L,Ne}finally{}}}var fo=Sv(!0),Tv=Sv(!1),Li=Q(null),dr=null;function ya(t){var i=t.alternate;ie(Zt,Zt.current&1),ie(Li,t),dr===null&&(i===null||so.current!==null||i.memoizedState!==null)&&(dr=t)}function Av(t){if(t.tag===22){if(ie(Zt,Zt.current),ie(Li,t),dr===null){var i=t.alternate;i!==null&&i.memoizedState!==null&&(dr=t)}}else va()}function va(){ie(Zt,Zt.current),ie(Li,Li.current)}function Gr(t){te(Li),dr===t&&(dr=null),te(Zt)}var Zt=Q(0);function rf(t){for(var i=t;i!==null;){if(i.tag===13){var s=i.memoizedState;if(s!==null&&(s=s.dehydrated,s===null||s.data==="$?"||dm(s)))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}function Sp(t,i,s,l){i=t.memoizedState,s=s(l,i),s=s==null?i:g({},i,s),t.memoizedState=s,t.lanes===0&&(t.updateQueue.baseState=s)}var Tp={enqueueSetState:function(t,i,s){t=t._reactInternals;var l=fi(),d=pa(l);d.payload=i,s!=null&&(d.callback=s),i=ma(t,d,l),i!==null&&(di(i,t,l),Vl(i,t,l))},enqueueReplaceState:function(t,i,s){t=t._reactInternals;var l=fi(),d=pa(l);d.tag=1,d.payload=i,s!=null&&(d.callback=s),i=ma(t,d,l),i!==null&&(di(i,t,l),Vl(i,t,l))},enqueueForceUpdate:function(t,i){t=t._reactInternals;var s=fi(),l=pa(s);l.tag=2,i!=null&&(l.callback=i),i=ma(t,l,s),i!==null&&(di(i,t,s),Vl(i,t,s))}};function Ev(t,i,s,l,d,m,_){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(l,m,_):i.prototype&&i.prototype.isPureReactComponent?!Ml(s,l)||!Ml(d,m):!0}function Cv(t,i,s,l){t=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(s,l),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(s,l),i.state!==t&&Tp.enqueueReplaceState(i,i.state,null)}function ps(t,i){var s=i;if("ref"in i){s={};for(var l in i)l!=="ref"&&(s[l]=i[l])}if(t=t.defaultProps){s===i&&(s=g({},s));for(var d in t)s[d]===void 0&&(s[d]=t[d])}return s}var af=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var i=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(i))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)};function Rv(t){af(t)}function Mv(t){console.error(t)}function Dv(t){af(t)}function sf(t,i){try{var s=t.onUncaughtError;s(i.value,{componentStack:i.stack})}catch(l){setTimeout(function(){throw l})}}function jv(t,i,s){try{var l=t.onCaughtError;l(s.value,{componentStack:s.stack,errorBoundary:i.tag===1?i.stateNode:null})}catch(d){setTimeout(function(){throw d})}}function Ap(t,i,s){return s=pa(s),s.tag=3,s.payload={element:null},s.callback=function(){sf(t,i)},s}function kv(t){return t=pa(t),t.tag=3,t}function Ov(t,i,s,l){var d=s.type.getDerivedStateFromError;if(typeof d=="function"){var m=l.value;t.payload=function(){return d(m)},t.callback=function(){jv(i,s,l)}}var _=s.stateNode;_!==null&&typeof _.componentDidCatch=="function"&&(t.callback=function(){jv(i,s,l),typeof d!="function"&&(Ta===null?Ta=new Set([this]):Ta.add(this));var A=l.stack;this.componentDidCatch(l.value,{componentStack:A!==null?A:""})})}function I3(t,i,s,l,d){if(s.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(i=s.alternate,i!==null&&zl(i,s,d,!0),s=Li.current,s!==null){switch(s.tag){case 13:return dr===null?Qp():s.alternate===null&&jt===0&&(jt=3),s.flags&=-257,s.flags|=65536,s.lanes=d,l===ep?s.flags|=16384:(i=s.updateQueue,i===null?s.updateQueue=new Set([l]):i.add(l),Zp(t,l,d)),!1;case 22:return s.flags|=65536,l===ep?s.flags|=16384:(i=s.updateQueue,i===null?(i={transitions:null,markerInstances:null,retryQueue:new Set([l])},s.updateQueue=i):(s=i.retryQueue,s===null?i.retryQueue=new Set([l]):s.add(l)),Zp(t,l,d)),!1}throw Error(a(435,s.tag))}return Zp(t,l,d),Qp(),!1}if(Ie)return i=Li.current,i!==null?((i.flags&65536)===0&&(i.flags|=256),i.flags|=65536,i.lanes=d,l!==$h&&(t=Error(a(422),{cause:l}),Ol(Oi(t,s)))):(l!==$h&&(i=Error(a(423),{cause:l}),Ol(Oi(i,s))),t=t.current.alternate,t.flags|=65536,d&=-d,t.lanes|=d,l=Oi(l,s),d=Ap(t.stateNode,l,d),ip(t,d),jt!==4&&(jt=2)),!1;var m=Error(a(520),{cause:l});if(m=Oi(m,s),eu===null?eu=[m]:eu.push(m),jt!==4&&(jt=2),i===null)return!0;l=Oi(l,s),s=i;do{switch(s.tag){case 3:return s.flags|=65536,t=d&-d,s.lanes|=t,t=Ap(s.stateNode,l,t),ip(s,t),!1;case 1:if(i=s.type,m=s.stateNode,(s.flags&128)===0&&(typeof i.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(Ta===null||!Ta.has(m))))return s.flags|=65536,d&=-d,s.lanes|=d,d=kv(d),Ov(d,t,s,l),ip(s,d),!1}s=s.return}while(s!==null);return!1}var zv=Error(a(461)),en=!1;function cn(t,i,s,l){i.child=t===null?Tv(i,null,s,l):fo(i,t.child,s,l)}function Nv(t,i,s,l,d){s=s.render;var m=i.ref;if("ref"in l){var _={};for(var A in l)A!=="ref"&&(_[A]=l[A])}else _=l;return fs(i),l=lp(t,i,s,_,m,d),A=up(),t!==null&&!en?(cp(t,i,d),Xr(t,i,d)):(Ie&&A&&qh(i),i.flags|=1,cn(t,i,l,d),i.child)}function Pv(t,i,s,l,d){if(t===null){var m=s.type;return typeof m=="function"&&!Yh(m)&&m.defaultProps===void 0&&s.compare===null?(i.tag=15,i.type=m,Lv(t,i,m,l,d)):(t=Bc(s.type,null,l,i,i.mode,d),t.ref=i.ref,t.return=i,i.child=t)}if(m=t.child,!Op(t,d)){var _=m.memoizedProps;if(s=s.compare,s=s!==null?s:Ml,s(_,l)&&t.ref===i.ref)return Xr(t,i,d)}return i.flags|=1,t=Lr(m,l),t.ref=i.ref,t.return=i,i.child=t}function Lv(t,i,s,l,d){if(t!==null){var m=t.memoizedProps;if(Ml(m,l)&&t.ref===i.ref)if(en=!1,i.pendingProps=l=m,Op(t,d))(t.flags&131072)!==0&&(en=!0);else return i.lanes=t.lanes,Xr(t,i,d)}return Ep(t,i,s,l,d)}function Bv(t,i,s){var l=i.pendingProps,d=l.children,m=t!==null?t.memoizedState:null;if(l.mode==="hidden"){if((i.flags&128)!==0){if(l=m!==null?m.baseLanes|s:s,t!==null){for(d=i.child=t.child,m=0;d!==null;)m=m|d.lanes|d.childLanes,d=d.sibling;i.childLanes=m&~l}else i.childLanes=0,i.child=null;return Vv(t,i,l,s)}if((s&536870912)!==0)i.memoizedState={baseLanes:0,cachePool:null},t!==null&&Gc(i,m!==null?m.cachePool:null),m!==null?L1(i,m):ap(),Av(i);else return i.lanes=i.childLanes=536870912,Vv(t,i,m!==null?m.baseLanes|s:s,s)}else m!==null?(Gc(i,m.cachePool),L1(i,m),va(),i.memoizedState=null):(t!==null&&Gc(i,null),ap(),va());return cn(t,i,d,s),i.child}function Vv(t,i,s,l){var d=Jh();return d=d===null?null:{parent:It._currentValue,pool:d},i.memoizedState={baseLanes:s,cachePool:d},t!==null&&Gc(i,null),ap(),Av(i),t!==null&&zl(t,i,l,!0),null}function of(t,i){var s=i.ref;if(s===null)t!==null&&t.ref!==null&&(i.flags|=4194816);else{if(typeof s!="function"&&typeof s!="object")throw Error(a(284));(t===null||t.ref!==s)&&(i.flags|=4194816)}}function Ep(t,i,s,l,d){return fs(i),s=lp(t,i,s,l,void 0,d),l=up(),t!==null&&!en?(cp(t,i,d),Xr(t,i,d)):(Ie&&l&&qh(i),i.flags|=1,cn(t,i,s,d),i.child)}function Uv(t,i,s,l,d,m){return fs(i),i.updateQueue=null,s=V1(i,l,s,d),B1(t),l=up(),t!==null&&!en?(cp(t,i,m),Xr(t,i,m)):(Ie&&l&&qh(i),i.flags|=1,cn(t,i,s,m),i.child)}function Hv(t,i,s,l,d){if(fs(i),i.stateNode===null){var m=to,_=s.contextType;typeof _=="object"&&_!==null&&(m=vn(_)),m=new s(l,m),i.memoizedState=m.state!==null&&m.state!==void 0?m.state:null,m.updater=Tp,i.stateNode=m,m._reactInternals=i,m=i.stateNode,m.props=l,m.state=i.memoizedState,m.refs={},tp(i),_=s.contextType,m.context=typeof _=="object"&&_!==null?vn(_):to,m.state=i.memoizedState,_=s.getDerivedStateFromProps,typeof _=="function"&&(Sp(i,s,_,l),m.state=i.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof m.getSnapshotBeforeUpdate=="function"||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(_=m.state,typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount(),_!==m.state&&Tp.enqueueReplaceState(m,m.state,null),Hl(i,l,m,d),Ul(),m.state=i.memoizedState),typeof m.componentDidMount=="function"&&(i.flags|=4194308),l=!0}else if(t===null){m=i.stateNode;var A=i.memoizedProps,k=ps(s,A);m.props=k;var H=m.context,I=s.contextType;_=to,typeof I=="object"&&I!==null&&(_=vn(I));var W=s.getDerivedStateFromProps;I=typeof W=="function"||typeof m.getSnapshotBeforeUpdate=="function",A=i.pendingProps!==A,I||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(A||H!==_)&&Cv(i,m,l,_),ha=!1;var X=i.memoizedState;m.state=X,Hl(i,l,m,d),Ul(),H=i.memoizedState,A||X!==H||ha?(typeof W=="function"&&(Sp(i,s,W,l),H=i.memoizedState),(k=ha||Ev(i,s,k,l,X,H,_))?(I||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount()),typeof m.componentDidMount=="function"&&(i.flags|=4194308)):(typeof m.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=l,i.memoizedState=H),m.props=l,m.state=H,m.context=_,l=k):(typeof m.componentDidMount=="function"&&(i.flags|=4194308),l=!1)}else{m=i.stateNode,np(t,i),_=i.memoizedProps,I=ps(s,_),m.props=I,W=i.pendingProps,X=m.context,H=s.contextType,k=to,typeof H=="object"&&H!==null&&(k=vn(H)),A=s.getDerivedStateFromProps,(H=typeof A=="function"||typeof m.getSnapshotBeforeUpdate=="function")||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(_!==W||X!==k)&&Cv(i,m,l,k),ha=!1,X=i.memoizedState,m.state=X,Hl(i,l,m,d),Ul();var q=i.memoizedState;_!==W||X!==q||ha||t!==null&&t.dependencies!==null&&Hc(t.dependencies)?(typeof A=="function"&&(Sp(i,s,A,l),q=i.memoizedState),(I=ha||Ev(i,s,I,l,X,q,k)||t!==null&&t.dependencies!==null&&Hc(t.dependencies))?(H||typeof m.UNSAFE_componentWillUpdate!="function"&&typeof m.componentWillUpdate!="function"||(typeof m.componentWillUpdate=="function"&&m.componentWillUpdate(l,q,k),typeof m.UNSAFE_componentWillUpdate=="function"&&m.UNSAFE_componentWillUpdate(l,q,k)),typeof m.componentDidUpdate=="function"&&(i.flags|=4),typeof m.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof m.componentDidUpdate!="function"||_===t.memoizedProps&&X===t.memoizedState||(i.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||_===t.memoizedProps&&X===t.memoizedState||(i.flags|=1024),i.memoizedProps=l,i.memoizedState=q),m.props=l,m.state=q,m.context=k,l=I):(typeof m.componentDidUpdate!="function"||_===t.memoizedProps&&X===t.memoizedState||(i.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||_===t.memoizedProps&&X===t.memoizedState||(i.flags|=1024),l=!1)}return m=l,of(t,i),l=(i.flags&128)!==0,m||l?(m=i.stateNode,s=l&&typeof s.getDerivedStateFromError!="function"?null:m.render(),i.flags|=1,t!==null&&l?(i.child=fo(i,t.child,null,d),i.child=fo(i,null,s,d)):cn(t,i,s,d),i.memoizedState=m.state,t=i.child):t=Xr(t,i,d),t}function Yv(t,i,s,l){return kl(),i.flags|=256,cn(t,i,s,l),i.child}var Cp={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Rp(t){return{baseLanes:t,cachePool:M1()}}function Mp(t,i,s){return t=t!==null?t.childLanes&~s:0,i&&(t|=Bi),t}function Gv(t,i,s){var l=i.pendingProps,d=!1,m=(i.flags&128)!==0,_;if((_=m)||(_=t!==null&&t.memoizedState===null?!1:(Zt.current&2)!==0),_&&(d=!0,i.flags&=-129),_=(i.flags&32)!==0,i.flags&=-33,t===null){if(Ie){if(d?ya(i):va(),Ie){var A=Dt,k;if(k=A){e:{for(k=A,A=fr;k.nodeType!==8;){if(!A){A=null;break e}if(k=nr(k.nextSibling),k===null){A=null;break e}}A=k}A!==null?(i.memoizedState={dehydrated:A,treeContext:ss!==null?{id:Br,overflow:Vr}:null,retryLane:536870912,hydrationErrors:null},k=oi(18,null,null,0),k.stateNode=A,k.return=i,i.child=k,kn=i,Dt=null,k=!0):k=!1}k||us(i)}if(A=i.memoizedState,A!==null&&(A=A.dehydrated,A!==null))return dm(A)?i.lanes=32:i.lanes=536870912,null;Gr(i)}return A=l.children,l=l.fallback,d?(va(),d=i.mode,A=lf({mode:"hidden",children:A},d),l=as(l,d,s,null),A.return=i,l.return=i,A.sibling=l,i.child=A,d=i.child,d.memoizedState=Rp(s),d.childLanes=Mp(t,_,s),i.memoizedState=Cp,l):(ya(i),Dp(i,A))}if(k=t.memoizedState,k!==null&&(A=k.dehydrated,A!==null)){if(m)i.flags&256?(ya(i),i.flags&=-257,i=jp(t,i,s)):i.memoizedState!==null?(va(),i.child=t.child,i.flags|=128,i=null):(va(),d=l.fallback,A=i.mode,l=lf({mode:"visible",children:l.children},A),d=as(d,A,s,null),d.flags|=2,l.return=i,d.return=i,l.sibling=d,i.child=l,fo(i,t.child,null,s),l=i.child,l.memoizedState=Rp(s),l.childLanes=Mp(t,_,s),i.memoizedState=Cp,i=d);else if(ya(i),dm(A)){if(_=A.nextSibling&&A.nextSibling.dataset,_)var H=_.dgst;_=H,l=Error(a(419)),l.stack="",l.digest=_,Ol({value:l,source:null,stack:null}),i=jp(t,i,s)}else if(en||zl(t,i,s,!1),_=(s&t.childLanes)!==0,en||_){if(_=dt,_!==null&&(l=s&-s,l=(l&42)!==0?1:ii(l),l=(l&(_.suspendedLanes|s))!==0?0:l,l!==0&&l!==k.retryLane))throw k.retryLane=l,eo(t,l),di(_,t,l),zv;A.data==="$?"||Qp(),i=jp(t,i,s)}else A.data==="$?"?(i.flags|=192,i.child=t.child,i=null):(t=k.treeContext,Dt=nr(A.nextSibling),kn=i,Ie=!0,ls=null,fr=!1,t!==null&&(Ni[Pi++]=Br,Ni[Pi++]=Vr,Ni[Pi++]=ss,Br=t.id,Vr=t.overflow,ss=i),i=Dp(i,l.children),i.flags|=4096);return i}return d?(va(),d=l.fallback,A=i.mode,k=t.child,H=k.sibling,l=Lr(k,{mode:"hidden",children:l.children}),l.subtreeFlags=k.subtreeFlags&65011712,H!==null?d=Lr(H,d):(d=as(d,A,s,null),d.flags|=2),d.return=i,l.return=i,l.sibling=d,i.child=l,l=d,d=i.child,A=t.child.memoizedState,A===null?A=Rp(s):(k=A.cachePool,k!==null?(H=It._currentValue,k=k.parent!==H?{parent:H,pool:H}:k):k=M1(),A={baseLanes:A.baseLanes|s,cachePool:k}),d.memoizedState=A,d.childLanes=Mp(t,_,s),i.memoizedState=Cp,l):(ya(i),s=t.child,t=s.sibling,s=Lr(s,{mode:"visible",children:l.children}),s.return=i,s.sibling=null,t!==null&&(_=i.deletions,_===null?(i.deletions=[t],i.flags|=16):_.push(t)),i.child=s,i.memoizedState=null,s)}function Dp(t,i){return i=lf({mode:"visible",children:i},t.mode),i.return=t,t.child=i}function lf(t,i){return t=oi(22,t,null,i),t.lanes=0,t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},t}function jp(t,i,s){return fo(i,t.child,null,s),t=Dp(i,i.pendingProps.children),t.flags|=2,i.memoizedState=null,t}function Xv(t,i,s){t.lanes|=i;var l=t.alternate;l!==null&&(l.lanes|=i),Qh(t.return,i,s)}function kp(t,i,s,l,d){var m=t.memoizedState;m===null?t.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:l,tail:s,tailMode:d}:(m.isBackwards=i,m.rendering=null,m.renderingStartTime=0,m.last=l,m.tail=s,m.tailMode=d)}function qv(t,i,s){var l=i.pendingProps,d=l.revealOrder,m=l.tail;if(cn(t,i,l.children,s),l=Zt.current,(l&2)!==0)l=l&1|2,i.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=i.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Xv(t,s,i);else if(t.tag===19)Xv(t,s,i);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===i)break e;for(;t.sibling===null;){if(t.return===null||t.return===i)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}l&=1}switch(ie(Zt,l),d){case"forwards":for(s=i.child,d=null;s!==null;)t=s.alternate,t!==null&&rf(t)===null&&(d=s),s=s.sibling;s=d,s===null?(d=i.child,i.child=null):(d=s.sibling,s.sibling=null),kp(i,!1,d,s,m);break;case"backwards":for(s=null,d=i.child,i.child=null;d!==null;){if(t=d.alternate,t!==null&&rf(t)===null){i.child=d;break}t=d.sibling,d.sibling=s,s=d,d=t}kp(i,!0,s,null,m);break;case"together":kp(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function Xr(t,i,s){if(t!==null&&(i.dependencies=t.dependencies),Sa|=i.lanes,(s&i.childLanes)===0)if(t!==null){if(zl(t,i,s,!1),(s&i.childLanes)===0)return null}else return null;if(t!==null&&i.child!==t.child)throw Error(a(153));if(i.child!==null){for(t=i.child,s=Lr(t,t.pendingProps),i.child=s,s.return=i;t.sibling!==null;)t=t.sibling,s=s.sibling=Lr(t,t.pendingProps),s.return=i;s.sibling=null}return i.child}function Op(t,i){return(t.lanes&i)!==0?!0:(t=t.dependencies,!!(t!==null&&Hc(t)))}function Z3(t,i,s){switch(i.tag){case 3:Te(i,i.stateNode.containerInfo),da(i,It,t.memoizedState.cache),kl();break;case 27:case 5:gn(i);break;case 4:Te(i,i.stateNode.containerInfo);break;case 10:da(i,i.type,i.memoizedProps.value);break;case 13:var l=i.memoizedState;if(l!==null)return l.dehydrated!==null?(ya(i),i.flags|=128,null):(s&i.child.childLanes)!==0?Gv(t,i,s):(ya(i),t=Xr(t,i,s),t!==null?t.sibling:null);ya(i);break;case 19:var d=(t.flags&128)!==0;if(l=(s&i.childLanes)!==0,l||(zl(t,i,s,!1),l=(s&i.childLanes)!==0),d){if(l)return qv(t,i,s);i.flags|=128}if(d=i.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),ie(Zt,Zt.current),l)break;return null;case 22:case 23:return i.lanes=0,Bv(t,i,s);case 24:da(i,It,t.memoizedState.cache)}return Xr(t,i,s)}function Fv(t,i,s){if(t!==null)if(t.memoizedProps!==i.pendingProps)en=!0;else{if(!Op(t,s)&&(i.flags&128)===0)return en=!1,Z3(t,i,s);en=(t.flags&131072)!==0}else en=!1,Ie&&(i.flags&1048576)!==0&&w1(i,Uc,i.index);switch(i.lanes=0,i.tag){case 16:e:{t=i.pendingProps;var l=i.elementType,d=l._init;if(l=d(l._payload),i.type=l,typeof l=="function")Yh(l)?(t=ps(l,t),i.tag=1,i=Hv(null,i,l,t,s)):(i.tag=0,i=Ep(null,i,l,t,s));else{if(l!=null){if(d=l.$$typeof,d===O){i.tag=11,i=Nv(null,i,l,t,s);break e}else if(d===D){i.tag=14,i=Pv(null,i,l,t,s);break e}}throw i=pe(l)||l,Error(a(306,i,""))}}return i;case 0:return Ep(t,i,i.type,i.pendingProps,s);case 1:return l=i.type,d=ps(l,i.pendingProps),Hv(t,i,l,d,s);case 3:e:{if(Te(i,i.stateNode.containerInfo),t===null)throw Error(a(387));l=i.pendingProps;var m=i.memoizedState;d=m.element,np(t,i),Hl(i,l,null,s);var _=i.memoizedState;if(l=_.cache,da(i,It,l),l!==m.cache&&Ih(i,[It],s,!0),Ul(),l=_.element,m.isDehydrated)if(m={element:l,isDehydrated:!1,cache:_.cache},i.updateQueue.baseState=m,i.memoizedState=m,i.flags&256){i=Yv(t,i,l,s);break e}else if(l!==d){d=Oi(Error(a(424)),i),Ol(d),i=Yv(t,i,l,s);break e}else{switch(t=i.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(Dt=nr(t.firstChild),kn=i,Ie=!0,ls=null,fr=!0,s=Tv(i,null,l,s),i.child=s;s;)s.flags=s.flags&-3|4096,s=s.sibling}else{if(kl(),l===d){i=Xr(t,i,s);break e}cn(t,i,l,s)}i=i.child}return i;case 26:return of(t,i),t===null?(s=Ix(i.type,null,i.pendingProps,null))?i.memoizedState=s:Ie||(s=i.type,t=i.pendingProps,l=wf(oe.current).createElement(s),l[ne]=i,l[fe]=t,dn(l,s,t),$e(l),i.stateNode=l):i.memoizedState=Ix(i.type,t.memoizedProps,i.pendingProps,t.memoizedState),null;case 27:return gn(i),t===null&&Ie&&(l=i.stateNode=$x(i.type,i.pendingProps,oe.current),kn=i,fr=!0,d=Dt,Ca(i.type)?(hm=d,Dt=nr(l.firstChild)):Dt=d),cn(t,i,i.pendingProps.children,s),of(t,i),t===null&&(i.flags|=4194304),i.child;case 5:return t===null&&Ie&&((d=l=Dt)&&(l=AA(l,i.type,i.pendingProps,fr),l!==null?(i.stateNode=l,kn=i,Dt=nr(l.firstChild),fr=!1,d=!0):d=!1),d||us(i)),gn(i),d=i.type,m=i.pendingProps,_=t!==null?t.memoizedProps:null,l=m.children,um(d,m)?l=null:_!==null&&um(d,_)&&(i.flags|=32),i.memoizedState!==null&&(d=lp(t,i,G3,null,null,s),uu._currentValue=d),of(t,i),cn(t,i,l,s),i.child;case 6:return t===null&&Ie&&((t=s=Dt)&&(s=EA(s,i.pendingProps,fr),s!==null?(i.stateNode=s,kn=i,Dt=null,t=!0):t=!1),t||us(i)),null;case 13:return Gv(t,i,s);case 4:return Te(i,i.stateNode.containerInfo),l=i.pendingProps,t===null?i.child=fo(i,null,l,s):cn(t,i,l,s),i.child;case 11:return Nv(t,i,i.type,i.pendingProps,s);case 7:return cn(t,i,i.pendingProps,s),i.child;case 8:return cn(t,i,i.pendingProps.children,s),i.child;case 12:return cn(t,i,i.pendingProps.children,s),i.child;case 10:return l=i.pendingProps,da(i,i.type,l.value),cn(t,i,l.children,s),i.child;case 9:return d=i.type._context,l=i.pendingProps.children,fs(i),d=vn(d),l=l(d),i.flags|=1,cn(t,i,l,s),i.child;case 14:return Pv(t,i,i.type,i.pendingProps,s);case 15:return Lv(t,i,i.type,i.pendingProps,s);case 19:return qv(t,i,s);case 31:return l=i.pendingProps,s=i.mode,l={mode:l.mode,children:l.children},t===null?(s=lf(l,s),s.ref=i.ref,i.child=s,s.return=i,i=s):(s=Lr(t.child,l),s.ref=i.ref,i.child=s,s.return=i,i=s),i;case 22:return Bv(t,i,s);case 24:return fs(i),l=vn(It),t===null?(d=Jh(),d===null&&(d=dt,m=Zh(),d.pooledCache=m,m.refCount++,m!==null&&(d.pooledCacheLanes|=s),d=m),i.memoizedState={parent:l,cache:d},tp(i),da(i,It,d)):((t.lanes&s)!==0&&(np(t,i),Hl(i,null,null,s),Ul()),d=t.memoizedState,m=i.memoizedState,d.parent!==l?(d={parent:l,cache:l},i.memoizedState=d,i.lanes===0&&(i.memoizedState=i.updateQueue.baseState=d),da(i,It,l)):(l=m.cache,da(i,It,l),l!==d.cache&&Ih(i,[It],s,!0))),cn(t,i,i.pendingProps.children,s),i.child;case 29:throw i.pendingProps}throw Error(a(156,i.tag))}function qr(t){t.flags|=4}function $v(t,i){if(i.type!=="stylesheet"||(i.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!tb(i)){if(i=Li.current,i!==null&&((qe&4194048)===qe?dr!==null:(qe&62914560)!==qe&&(qe&536870912)===0||i!==dr))throw Bl=ep,D1;t.flags|=8192}}function uf(t,i){i!==null&&(t.flags|=4),t.flags&16384&&(i=t.tag!==22?ur():536870912,t.lanes|=i,go|=i)}function Kl(t,i){if(!Ie)switch(t.tailMode){case"hidden":i=t.tail;for(var s=null;i!==null;)i.alternate!==null&&(s=i),i=i.sibling;s===null?t.tail=null:s.sibling=null;break;case"collapsed":s=t.tail;for(var l=null;s!==null;)s.alternate!==null&&(l=s),s=s.sibling;l===null?i||t.tail===null?t.tail=null:t.tail.sibling=null:l.sibling=null}}function St(t){var i=t.alternate!==null&&t.alternate.child===t.child,s=0,l=0;if(i)for(var d=t.child;d!==null;)s|=d.lanes|d.childLanes,l|=d.subtreeFlags&65011712,l|=d.flags&65011712,d.return=t,d=d.sibling;else for(d=t.child;d!==null;)s|=d.lanes|d.childLanes,l|=d.subtreeFlags,l|=d.flags,d.return=t,d=d.sibling;return t.subtreeFlags|=l,t.childLanes=s,i}function W3(t,i,s){var l=i.pendingProps;switch(Fh(i),i.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return St(i),null;case 1:return St(i),null;case 3:return s=i.stateNode,l=null,t!==null&&(l=t.memoizedState.cache),i.memoizedState.cache!==l&&(i.flags|=2048),Hr(It),Fe(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(t===null||t.child===null)&&(jl(i)?qr(i):t===null||t.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,A1())),St(i),null;case 26:return s=i.memoizedState,t===null?(qr(i),s!==null?(St(i),$v(i,s)):(St(i),i.flags&=-16777217)):s?s!==t.memoizedState?(qr(i),St(i),$v(i,s)):(St(i),i.flags&=-16777217):(t.memoizedProps!==l&&qr(i),St(i),i.flags&=-16777217),null;case 27:pt(i),s=oe.current;var d=i.type;if(t!==null&&i.stateNode!=null)t.memoizedProps!==l&&qr(i);else{if(!l){if(i.stateNode===null)throw Error(a(166));return St(i),null}t=ae.current,jl(i)?S1(i):(t=$x(d,l,s),i.stateNode=t,qr(i))}return St(i),null;case 5:if(pt(i),s=i.type,t!==null&&i.stateNode!=null)t.memoizedProps!==l&&qr(i);else{if(!l){if(i.stateNode===null)throw Error(a(166));return St(i),null}if(t=ae.current,jl(i))S1(i);else{switch(d=wf(oe.current),t){case 1:t=d.createElementNS("http://www.w3.org/2000/svg",s);break;case 2:t=d.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;default:switch(s){case"svg":t=d.createElementNS("http://www.w3.org/2000/svg",s);break;case"math":t=d.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;case"script":t=d.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild);break;case"select":t=typeof l.is=="string"?d.createElement("select",{is:l.is}):d.createElement("select"),l.multiple?t.multiple=!0:l.size&&(t.size=l.size);break;default:t=typeof l.is=="string"?d.createElement(s,{is:l.is}):d.createElement(s)}}t[ne]=i,t[fe]=l;e:for(d=i.child;d!==null;){if(d.tag===5||d.tag===6)t.appendChild(d.stateNode);else if(d.tag!==4&&d.tag!==27&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===i)break e;for(;d.sibling===null;){if(d.return===null||d.return===i)break e;d=d.return}d.sibling.return=d.return,d=d.sibling}i.stateNode=t;e:switch(dn(t,s,l),s){case"button":case"input":case"select":case"textarea":t=!!l.autoFocus;break e;case"img":t=!0;break e;default:t=!1}t&&qr(i)}}return St(i),i.flags&=-16777217,null;case 6:if(t&&i.stateNode!=null)t.memoizedProps!==l&&qr(i);else{if(typeof l!="string"&&i.stateNode===null)throw Error(a(166));if(t=oe.current,jl(i)){if(t=i.stateNode,s=i.memoizedProps,l=null,d=kn,d!==null)switch(d.tag){case 27:case 5:l=d.memoizedProps}t[ne]=i,t=!!(t.nodeValue===s||l!==null&&l.suppressHydrationWarning===!0||Ux(t.nodeValue,s)),t||us(i)}else t=wf(t).createTextNode(l),t[ne]=i,i.stateNode=t}return St(i),null;case 13:if(l=i.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(d=jl(i),l!==null&&l.dehydrated!==null){if(t===null){if(!d)throw Error(a(318));if(d=i.memoizedState,d=d!==null?d.dehydrated:null,!d)throw Error(a(317));d[ne]=i}else kl(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;St(i),d=!1}else d=A1(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=d),d=!0;if(!d)return i.flags&256?(Gr(i),i):(Gr(i),null)}if(Gr(i),(i.flags&128)!==0)return i.lanes=s,i;if(s=l!==null,t=t!==null&&t.memoizedState!==null,s){l=i.child,d=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(d=l.alternate.memoizedState.cachePool.pool);var m=null;l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(m=l.memoizedState.cachePool.pool),m!==d&&(l.flags|=2048)}return s!==t&&s&&(i.child.flags|=8192),uf(i,i.updateQueue),St(i),null;case 4:return Fe(),t===null&&rm(i.stateNode.containerInfo),St(i),null;case 10:return Hr(i.type),St(i),null;case 19:if(te(Zt),d=i.memoizedState,d===null)return St(i),null;if(l=(i.flags&128)!==0,m=d.rendering,m===null)if(l)Kl(d,!1);else{if(jt!==0||t!==null&&(t.flags&128)!==0)for(t=i.child;t!==null;){if(m=rf(t),m!==null){for(i.flags|=128,Kl(d,!1),t=m.updateQueue,i.updateQueue=t,uf(i,t),i.subtreeFlags=0,t=s,s=i.child;s!==null;)_1(s,t),s=s.sibling;return ie(Zt,Zt.current&1|2),i.child}t=t.sibling}d.tail!==null&&$()>df&&(i.flags|=128,l=!0,Kl(d,!1),i.lanes=4194304)}else{if(!l)if(t=rf(m),t!==null){if(i.flags|=128,l=!0,t=t.updateQueue,i.updateQueue=t,uf(i,t),Kl(d,!0),d.tail===null&&d.tailMode==="hidden"&&!m.alternate&&!Ie)return St(i),null}else 2*$()-d.renderingStartTime>df&&s!==536870912&&(i.flags|=128,l=!0,Kl(d,!1),i.lanes=4194304);d.isBackwards?(m.sibling=i.child,i.child=m):(t=d.last,t!==null?t.sibling=m:i.child=m,d.last=m)}return d.tail!==null?(i=d.tail,d.rendering=i,d.tail=i.sibling,d.renderingStartTime=$(),i.sibling=null,t=Zt.current,ie(Zt,l?t&1|2:t&1),i):(St(i),null);case 22:case 23:return Gr(i),sp(),l=i.memoizedState!==null,t!==null?t.memoizedState!==null!==l&&(i.flags|=8192):l&&(i.flags|=8192),l?(s&536870912)!==0&&(i.flags&128)===0&&(St(i),i.subtreeFlags&6&&(i.flags|=8192)):St(i),s=i.updateQueue,s!==null&&uf(i,s.retryQueue),s=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(s=t.memoizedState.cachePool.pool),l=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(l=i.memoizedState.cachePool.pool),l!==s&&(i.flags|=2048),t!==null&&te(ds),null;case 24:return s=null,t!==null&&(s=t.memoizedState.cache),i.memoizedState.cache!==s&&(i.flags|=2048),Hr(It),St(i),null;case 25:return null;case 30:return null}throw Error(a(156,i.tag))}function J3(t,i){switch(Fh(i),i.tag){case 1:return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 3:return Hr(It),Fe(),t=i.flags,(t&65536)!==0&&(t&128)===0?(i.flags=t&-65537|128,i):null;case 26:case 27:case 5:return pt(i),null;case 13:if(Gr(i),t=i.memoizedState,t!==null&&t.dehydrated!==null){if(i.alternate===null)throw Error(a(340));kl()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 19:return te(Zt),null;case 4:return Fe(),null;case 10:return Hr(i.type),null;case 22:case 23:return Gr(i),sp(),t!==null&&te(ds),t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 24:return Hr(It),null;case 25:return null;default:return null}}function Kv(t,i){switch(Fh(i),i.tag){case 3:Hr(It),Fe();break;case 26:case 27:case 5:pt(i);break;case 4:Fe();break;case 13:Gr(i);break;case 19:te(Zt);break;case 10:Hr(i.type);break;case 22:case 23:Gr(i),sp(),t!==null&&te(ds);break;case 24:Hr(It)}}function Ql(t,i){try{var s=i.updateQueue,l=s!==null?s.lastEffect:null;if(l!==null){var d=l.next;s=d;do{if((s.tag&t)===t){l=void 0;var m=s.create,_=s.inst;l=m(),_.destroy=l}s=s.next}while(s!==d)}}catch(A){lt(i,i.return,A)}}function xa(t,i,s){try{var l=i.updateQueue,d=l!==null?l.lastEffect:null;if(d!==null){var m=d.next;l=m;do{if((l.tag&t)===t){var _=l.inst,A=_.destroy;if(A!==void 0){_.destroy=void 0,d=i;var k=s,H=A;try{H()}catch(I){lt(d,k,I)}}}l=l.next}while(l!==m)}}catch(I){lt(i,i.return,I)}}function Qv(t){var i=t.updateQueue;if(i!==null){var s=t.stateNode;try{P1(i,s)}catch(l){lt(t,t.return,l)}}}function Iv(t,i,s){s.props=ps(t.type,t.memoizedProps),s.state=t.memoizedState;try{s.componentWillUnmount()}catch(l){lt(t,i,l)}}function Il(t,i){try{var s=t.ref;if(s!==null){switch(t.tag){case 26:case 27:case 5:var l=t.stateNode;break;case 30:l=t.stateNode;break;default:l=t.stateNode}typeof s=="function"?t.refCleanup=s(l):s.current=l}}catch(d){lt(t,i,d)}}function hr(t,i){var s=t.ref,l=t.refCleanup;if(s!==null)if(typeof l=="function")try{l()}catch(d){lt(t,i,d)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof s=="function")try{s(null)}catch(d){lt(t,i,d)}else s.current=null}function Zv(t){var i=t.type,s=t.memoizedProps,l=t.stateNode;try{e:switch(i){case"button":case"input":case"select":case"textarea":s.autoFocus&&l.focus();break e;case"img":s.src?l.src=s.src:s.srcSet&&(l.srcset=s.srcSet)}}catch(d){lt(t,t.return,d)}}function zp(t,i,s){try{var l=t.stateNode;bA(l,t.type,s,i),l[fe]=i}catch(d){lt(t,t.return,d)}}function Wv(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Ca(t.type)||t.tag===4}function Np(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Wv(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Ca(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Pp(t,i,s){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?(s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s).insertBefore(t,i):(i=s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s,i.appendChild(t),s=s._reactRootContainer,s!=null||i.onclick!==null||(i.onclick=_f));else if(l!==4&&(l===27&&Ca(t.type)&&(s=t.stateNode,i=null),t=t.child,t!==null))for(Pp(t,i,s),t=t.sibling;t!==null;)Pp(t,i,s),t=t.sibling}function cf(t,i,s){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?s.insertBefore(t,i):s.appendChild(t);else if(l!==4&&(l===27&&Ca(t.type)&&(s=t.stateNode),t=t.child,t!==null))for(cf(t,i,s),t=t.sibling;t!==null;)cf(t,i,s),t=t.sibling}function Jv(t){var i=t.stateNode,s=t.memoizedProps;try{for(var l=t.type,d=i.attributes;d.length;)i.removeAttributeNode(d[0]);dn(i,l,s),i[ne]=t,i[fe]=s}catch(m){lt(t,t.return,m)}}var Fr=!1,Pt=!1,Lp=!1,ex=typeof WeakSet=="function"?WeakSet:Set,tn=null;function eA(t,i){if(t=t.containerInfo,om=Rf,t=f1(t),Nh(t)){if("selectionStart"in t)var s={start:t.selectionStart,end:t.selectionEnd};else e:{s=(s=t.ownerDocument)&&s.defaultView||window;var l=s.getSelection&&s.getSelection();if(l&&l.rangeCount!==0){s=l.anchorNode;var d=l.anchorOffset,m=l.focusNode;l=l.focusOffset;try{s.nodeType,m.nodeType}catch{s=null;break e}var _=0,A=-1,k=-1,H=0,I=0,W=t,X=null;t:for(;;){for(var q;W!==s||d!==0&&W.nodeType!==3||(A=_+d),W!==m||l!==0&&W.nodeType!==3||(k=_+l),W.nodeType===3&&(_+=W.nodeValue.length),(q=W.firstChild)!==null;)X=W,W=q;for(;;){if(W===t)break t;if(X===s&&++H===d&&(A=_),X===m&&++I===l&&(k=_),(q=W.nextSibling)!==null)break;W=X,X=W.parentNode}W=q}s=A===-1||k===-1?null:{start:A,end:k}}else s=null}s=s||{start:0,end:0}}else s=null;for(lm={focusedElem:t,selectionRange:s},Rf=!1,tn=i;tn!==null;)if(i=tn,t=i.child,(i.subtreeFlags&1024)!==0&&t!==null)t.return=i,tn=t;else for(;tn!==null;){switch(i=tn,m=i.alternate,t=i.flags,i.tag){case 0:break;case 11:case 15:break;case 1:if((t&1024)!==0&&m!==null){t=void 0,s=i,d=m.memoizedProps,m=m.memoizedState,l=s.stateNode;try{var we=ps(s.type,d,s.elementType===s.type);t=l.getSnapshotBeforeUpdate(we,m),l.__reactInternalSnapshotBeforeUpdate=t}catch(xe){lt(s,s.return,xe)}}break;case 3:if((t&1024)!==0){if(t=i.stateNode.containerInfo,s=t.nodeType,s===9)fm(t);else if(s===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":fm(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(a(163))}if(t=i.sibling,t!==null){t.return=i.return,tn=t;break}tn=i.return}}function tx(t,i,s){var l=s.flags;switch(s.tag){case 0:case 11:case 15:ba(t,s),l&4&&Ql(5,s);break;case 1:if(ba(t,s),l&4)if(t=s.stateNode,i===null)try{t.componentDidMount()}catch(_){lt(s,s.return,_)}else{var d=ps(s.type,i.memoizedProps);i=i.memoizedState;try{t.componentDidUpdate(d,i,t.__reactInternalSnapshotBeforeUpdate)}catch(_){lt(s,s.return,_)}}l&64&&Qv(s),l&512&&Il(s,s.return);break;case 3:if(ba(t,s),l&64&&(t=s.updateQueue,t!==null)){if(i=null,s.child!==null)switch(s.child.tag){case 27:case 5:i=s.child.stateNode;break;case 1:i=s.child.stateNode}try{P1(t,i)}catch(_){lt(s,s.return,_)}}break;case 27:i===null&&l&4&&Jv(s);case 26:case 5:ba(t,s),i===null&&l&4&&Zv(s),l&512&&Il(s,s.return);break;case 12:ba(t,s);break;case 13:ba(t,s),l&4&&rx(t,s),l&64&&(t=s.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(s=uA.bind(null,s),CA(t,s))));break;case 22:if(l=s.memoizedState!==null||Fr,!l){i=i!==null&&i.memoizedState!==null||Pt,d=Fr;var m=Pt;Fr=l,(Pt=i)&&!m?_a(t,s,(s.subtreeFlags&8772)!==0):ba(t,s),Fr=d,Pt=m}break;case 30:break;default:ba(t,s)}}function nx(t){var i=t.alternate;i!==null&&(t.alternate=null,nx(i)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(i=t.stateNode,i!==null&&ft(i)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var xt=null,Fn=!1;function $r(t,i,s){for(s=s.child;s!==null;)ix(t,i,s),s=s.sibling}function ix(t,i,s){if(Ye&&typeof Ye.onCommitFiberUnmount=="function")try{Ye.onCommitFiberUnmount(Un,s)}catch{}switch(s.tag){case 26:Pt||hr(s,i),$r(t,i,s),s.memoizedState?s.memoizedState.count--:s.stateNode&&(s=s.stateNode,s.parentNode.removeChild(s));break;case 27:Pt||hr(s,i);var l=xt,d=Fn;Ca(s.type)&&(xt=s.stateNode,Fn=!1),$r(t,i,s),au(s.stateNode),xt=l,Fn=d;break;case 5:Pt||hr(s,i);case 6:if(l=xt,d=Fn,xt=null,$r(t,i,s),xt=l,Fn=d,xt!==null)if(Fn)try{(xt.nodeType===9?xt.body:xt.nodeName==="HTML"?xt.ownerDocument.body:xt).removeChild(s.stateNode)}catch(m){lt(s,i,m)}else try{xt.removeChild(s.stateNode)}catch(m){lt(s,i,m)}break;case 18:xt!==null&&(Fn?(t=xt,qx(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,s.stateNode),hu(t)):qx(xt,s.stateNode));break;case 4:l=xt,d=Fn,xt=s.stateNode.containerInfo,Fn=!0,$r(t,i,s),xt=l,Fn=d;break;case 0:case 11:case 14:case 15:Pt||xa(2,s,i),Pt||xa(4,s,i),$r(t,i,s);break;case 1:Pt||(hr(s,i),l=s.stateNode,typeof l.componentWillUnmount=="function"&&Iv(s,i,l)),$r(t,i,s);break;case 21:$r(t,i,s);break;case 22:Pt=(l=Pt)||s.memoizedState!==null,$r(t,i,s),Pt=l;break;default:$r(t,i,s)}}function rx(t,i){if(i.memoizedState===null&&(t=i.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{hu(t)}catch(s){lt(i,i.return,s)}}function tA(t){switch(t.tag){case 13:case 19:var i=t.stateNode;return i===null&&(i=t.stateNode=new ex),i;case 22:return t=t.stateNode,i=t._retryCache,i===null&&(i=t._retryCache=new ex),i;default:throw Error(a(435,t.tag))}}function Bp(t,i){var s=tA(t);i.forEach(function(l){var d=cA.bind(null,t,l);s.has(l)||(s.add(l),l.then(d,d))})}function li(t,i){var s=i.deletions;if(s!==null)for(var l=0;l<s.length;l++){var d=s[l],m=t,_=i,A=_;e:for(;A!==null;){switch(A.tag){case 27:if(Ca(A.type)){xt=A.stateNode,Fn=!1;break e}break;case 5:xt=A.stateNode,Fn=!1;break e;case 3:case 4:xt=A.stateNode.containerInfo,Fn=!0;break e}A=A.return}if(xt===null)throw Error(a(160));ix(m,_,d),xt=null,Fn=!1,m=d.alternate,m!==null&&(m.return=null),d.return=null}if(i.subtreeFlags&13878)for(i=i.child;i!==null;)ax(i,t),i=i.sibling}var tr=null;function ax(t,i){var s=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:li(i,t),ui(t),l&4&&(xa(3,t,t.return),Ql(3,t),xa(5,t,t.return));break;case 1:li(i,t),ui(t),l&512&&(Pt||s===null||hr(s,s.return)),l&64&&Fr&&(t=t.updateQueue,t!==null&&(l=t.callbacks,l!==null&&(s=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=s===null?l:s.concat(l))));break;case 26:var d=tr;if(li(i,t),ui(t),l&512&&(Pt||s===null||hr(s,s.return)),l&4){var m=s!==null?s.memoizedState:null;if(l=t.memoizedState,s===null)if(l===null)if(t.stateNode===null){e:{l=t.type,s=t.memoizedProps,d=d.ownerDocument||d;t:switch(l){case"title":m=d.getElementsByTagName("title")[0],(!m||m[Mt]||m[ne]||m.namespaceURI==="http://www.w3.org/2000/svg"||m.hasAttribute("itemprop"))&&(m=d.createElement(l),d.head.insertBefore(m,d.querySelector("head > title"))),dn(m,l,s),m[ne]=t,$e(m),l=m;break e;case"link":var _=Jx("link","href",d).get(l+(s.href||""));if(_){for(var A=0;A<_.length;A++)if(m=_[A],m.getAttribute("href")===(s.href==null||s.href===""?null:s.href)&&m.getAttribute("rel")===(s.rel==null?null:s.rel)&&m.getAttribute("title")===(s.title==null?null:s.title)&&m.getAttribute("crossorigin")===(s.crossOrigin==null?null:s.crossOrigin)){_.splice(A,1);break t}}m=d.createElement(l),dn(m,l,s),d.head.appendChild(m);break;case"meta":if(_=Jx("meta","content",d).get(l+(s.content||""))){for(A=0;A<_.length;A++)if(m=_[A],m.getAttribute("content")===(s.content==null?null:""+s.content)&&m.getAttribute("name")===(s.name==null?null:s.name)&&m.getAttribute("property")===(s.property==null?null:s.property)&&m.getAttribute("http-equiv")===(s.httpEquiv==null?null:s.httpEquiv)&&m.getAttribute("charset")===(s.charSet==null?null:s.charSet)){_.splice(A,1);break t}}m=d.createElement(l),dn(m,l,s),d.head.appendChild(m);break;default:throw Error(a(468,l))}m[ne]=t,$e(m),l=m}t.stateNode=l}else eb(d,t.type,t.stateNode);else t.stateNode=Wx(d,l,t.memoizedProps);else m!==l?(m===null?s.stateNode!==null&&(s=s.stateNode,s.parentNode.removeChild(s)):m.count--,l===null?eb(d,t.type,t.stateNode):Wx(d,l,t.memoizedProps)):l===null&&t.stateNode!==null&&zp(t,t.memoizedProps,s.memoizedProps)}break;case 27:li(i,t),ui(t),l&512&&(Pt||s===null||hr(s,s.return)),s!==null&&l&4&&zp(t,t.memoizedProps,s.memoizedProps);break;case 5:if(li(i,t),ui(t),l&512&&(Pt||s===null||hr(s,s.return)),t.flags&32){d=t.stateNode;try{$s(d,"")}catch(q){lt(t,t.return,q)}}l&4&&t.stateNode!=null&&(d=t.memoizedProps,zp(t,d,s!==null?s.memoizedProps:d)),l&1024&&(Lp=!0);break;case 6:if(li(i,t),ui(t),l&4){if(t.stateNode===null)throw Error(a(162));l=t.memoizedProps,s=t.stateNode;try{s.nodeValue=l}catch(q){lt(t,t.return,q)}}break;case 3:if(Af=null,d=tr,tr=Sf(i.containerInfo),li(i,t),tr=d,ui(t),l&4&&s!==null&&s.memoizedState.isDehydrated)try{hu(i.containerInfo)}catch(q){lt(t,t.return,q)}Lp&&(Lp=!1,sx(t));break;case 4:l=tr,tr=Sf(t.stateNode.containerInfo),li(i,t),ui(t),tr=l;break;case 12:li(i,t),ui(t);break;case 13:li(i,t),ui(t),t.child.flags&8192&&t.memoizedState!==null!=(s!==null&&s.memoizedState!==null)&&(Xp=$()),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,Bp(t,l)));break;case 22:d=t.memoizedState!==null;var k=s!==null&&s.memoizedState!==null,H=Fr,I=Pt;if(Fr=H||d,Pt=I||k,li(i,t),Pt=I,Fr=H,ui(t),l&8192)e:for(i=t.stateNode,i._visibility=d?i._visibility&-2:i._visibility|1,d&&(s===null||k||Fr||Pt||ms(t)),s=null,i=t;;){if(i.tag===5||i.tag===26){if(s===null){k=s=i;try{if(m=k.stateNode,d)_=m.style,typeof _.setProperty=="function"?_.setProperty("display","none","important"):_.display="none";else{A=k.stateNode;var W=k.memoizedProps.style,X=W!=null&&W.hasOwnProperty("display")?W.display:null;A.style.display=X==null||typeof X=="boolean"?"":(""+X).trim()}}catch(q){lt(k,k.return,q)}}}else if(i.tag===6){if(s===null){k=i;try{k.stateNode.nodeValue=d?"":k.memoizedProps}catch(q){lt(k,k.return,q)}}}else if((i.tag!==22&&i.tag!==23||i.memoizedState===null||i===t)&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break e;for(;i.sibling===null;){if(i.return===null||i.return===t)break e;s===i&&(s=null),i=i.return}s===i&&(s=null),i.sibling.return=i.return,i=i.sibling}l&4&&(l=t.updateQueue,l!==null&&(s=l.retryQueue,s!==null&&(l.retryQueue=null,Bp(t,s))));break;case 19:li(i,t),ui(t),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,Bp(t,l)));break;case 30:break;case 21:break;default:li(i,t),ui(t)}}function ui(t){var i=t.flags;if(i&2){try{for(var s,l=t.return;l!==null;){if(Wv(l)){s=l;break}l=l.return}if(s==null)throw Error(a(160));switch(s.tag){case 27:var d=s.stateNode,m=Np(t);cf(t,m,d);break;case 5:var _=s.stateNode;s.flags&32&&($s(_,""),s.flags&=-33);var A=Np(t);cf(t,A,_);break;case 3:case 4:var k=s.stateNode.containerInfo,H=Np(t);Pp(t,H,k);break;default:throw Error(a(161))}}catch(I){lt(t,t.return,I)}t.flags&=-3}i&4096&&(t.flags&=-4097)}function sx(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var i=t;sx(i),i.tag===5&&i.flags&1024&&i.stateNode.reset(),t=t.sibling}}function ba(t,i){if(i.subtreeFlags&8772)for(i=i.child;i!==null;)tx(t,i.alternate,i),i=i.sibling}function ms(t){for(t=t.child;t!==null;){var i=t;switch(i.tag){case 0:case 11:case 14:case 15:xa(4,i,i.return),ms(i);break;case 1:hr(i,i.return);var s=i.stateNode;typeof s.componentWillUnmount=="function"&&Iv(i,i.return,s),ms(i);break;case 27:au(i.stateNode);case 26:case 5:hr(i,i.return),ms(i);break;case 22:i.memoizedState===null&&ms(i);break;case 30:ms(i);break;default:ms(i)}t=t.sibling}}function _a(t,i,s){for(s=s&&(i.subtreeFlags&8772)!==0,i=i.child;i!==null;){var l=i.alternate,d=t,m=i,_=m.flags;switch(m.tag){case 0:case 11:case 15:_a(d,m,s),Ql(4,m);break;case 1:if(_a(d,m,s),l=m,d=l.stateNode,typeof d.componentDidMount=="function")try{d.componentDidMount()}catch(H){lt(l,l.return,H)}if(l=m,d=l.updateQueue,d!==null){var A=l.stateNode;try{var k=d.shared.hiddenCallbacks;if(k!==null)for(d.shared.hiddenCallbacks=null,d=0;d<k.length;d++)N1(k[d],A)}catch(H){lt(l,l.return,H)}}s&&_&64&&Qv(m),Il(m,m.return);break;case 27:Jv(m);case 26:case 5:_a(d,m,s),s&&l===null&&_&4&&Zv(m),Il(m,m.return);break;case 12:_a(d,m,s);break;case 13:_a(d,m,s),s&&_&4&&rx(d,m);break;case 22:m.memoizedState===null&&_a(d,m,s),Il(m,m.return);break;case 30:break;default:_a(d,m,s)}i=i.sibling}}function Vp(t,i){var s=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(s=t.memoizedState.cachePool.pool),t=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(t=i.memoizedState.cachePool.pool),t!==s&&(t!=null&&t.refCount++,s!=null&&Nl(s))}function Up(t,i){t=null,i.alternate!==null&&(t=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==t&&(i.refCount++,t!=null&&Nl(t))}function pr(t,i,s,l){if(i.subtreeFlags&10256)for(i=i.child;i!==null;)ox(t,i,s,l),i=i.sibling}function ox(t,i,s,l){var d=i.flags;switch(i.tag){case 0:case 11:case 15:pr(t,i,s,l),d&2048&&Ql(9,i);break;case 1:pr(t,i,s,l);break;case 3:pr(t,i,s,l),d&2048&&(t=null,i.alternate!==null&&(t=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==t&&(i.refCount++,t!=null&&Nl(t)));break;case 12:if(d&2048){pr(t,i,s,l),t=i.stateNode;try{var m=i.memoizedProps,_=m.id,A=m.onPostCommit;typeof A=="function"&&A(_,i.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(k){lt(i,i.return,k)}}else pr(t,i,s,l);break;case 13:pr(t,i,s,l);break;case 23:break;case 22:m=i.stateNode,_=i.alternate,i.memoizedState!==null?m._visibility&2?pr(t,i,s,l):Zl(t,i):m._visibility&2?pr(t,i,s,l):(m._visibility|=2,ho(t,i,s,l,(i.subtreeFlags&10256)!==0)),d&2048&&Vp(_,i);break;case 24:pr(t,i,s,l),d&2048&&Up(i.alternate,i);break;default:pr(t,i,s,l)}}function ho(t,i,s,l,d){for(d=d&&(i.subtreeFlags&10256)!==0,i=i.child;i!==null;){var m=t,_=i,A=s,k=l,H=_.flags;switch(_.tag){case 0:case 11:case 15:ho(m,_,A,k,d),Ql(8,_);break;case 23:break;case 22:var I=_.stateNode;_.memoizedState!==null?I._visibility&2?ho(m,_,A,k,d):Zl(m,_):(I._visibility|=2,ho(m,_,A,k,d)),d&&H&2048&&Vp(_.alternate,_);break;case 24:ho(m,_,A,k,d),d&&H&2048&&Up(_.alternate,_);break;default:ho(m,_,A,k,d)}i=i.sibling}}function Zl(t,i){if(i.subtreeFlags&10256)for(i=i.child;i!==null;){var s=t,l=i,d=l.flags;switch(l.tag){case 22:Zl(s,l),d&2048&&Vp(l.alternate,l);break;case 24:Zl(s,l),d&2048&&Up(l.alternate,l);break;default:Zl(s,l)}i=i.sibling}}var Wl=8192;function po(t){if(t.subtreeFlags&Wl)for(t=t.child;t!==null;)lx(t),t=t.sibling}function lx(t){switch(t.tag){case 26:po(t),t.flags&Wl&&t.memoizedState!==null&&UA(tr,t.memoizedState,t.memoizedProps);break;case 5:po(t);break;case 3:case 4:var i=tr;tr=Sf(t.stateNode.containerInfo),po(t),tr=i;break;case 22:t.memoizedState===null&&(i=t.alternate,i!==null&&i.memoizedState!==null?(i=Wl,Wl=16777216,po(t),Wl=i):po(t));break;default:po(t)}}function ux(t){var i=t.alternate;if(i!==null&&(t=i.child,t!==null)){i.child=null;do i=t.sibling,t.sibling=null,t=i;while(t!==null)}}function Jl(t){var i=t.deletions;if((t.flags&16)!==0){if(i!==null)for(var s=0;s<i.length;s++){var l=i[s];tn=l,fx(l,t)}ux(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)cx(t),t=t.sibling}function cx(t){switch(t.tag){case 0:case 11:case 15:Jl(t),t.flags&2048&&xa(9,t,t.return);break;case 3:Jl(t);break;case 12:Jl(t);break;case 22:var i=t.stateNode;t.memoizedState!==null&&i._visibility&2&&(t.return===null||t.return.tag!==13)?(i._visibility&=-3,ff(t)):Jl(t);break;default:Jl(t)}}function ff(t){var i=t.deletions;if((t.flags&16)!==0){if(i!==null)for(var s=0;s<i.length;s++){var l=i[s];tn=l,fx(l,t)}ux(t)}for(t=t.child;t!==null;){switch(i=t,i.tag){case 0:case 11:case 15:xa(8,i,i.return),ff(i);break;case 22:s=i.stateNode,s._visibility&2&&(s._visibility&=-3,ff(i));break;default:ff(i)}t=t.sibling}}function fx(t,i){for(;tn!==null;){var s=tn;switch(s.tag){case 0:case 11:case 15:xa(8,s,i);break;case 23:case 22:if(s.memoizedState!==null&&s.memoizedState.cachePool!==null){var l=s.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:Nl(s.memoizedState.cache)}if(l=s.child,l!==null)l.return=s,tn=l;else e:for(s=t;tn!==null;){l=tn;var d=l.sibling,m=l.return;if(nx(l),l===s){tn=null;break e}if(d!==null){d.return=m,tn=d;break e}tn=m}}}var nA={getCacheForType:function(t){var i=vn(It),s=i.data.get(t);return s===void 0&&(s=t(),i.data.set(t,s)),s}},iA=typeof WeakMap=="function"?WeakMap:Map,et=0,dt=null,Ue=null,qe=0,tt=0,ci=null,wa=!1,mo=!1,Hp=!1,Kr=0,jt=0,Sa=0,gs=0,Yp=0,Bi=0,go=0,eu=null,$n=null,Gp=!1,Xp=0,df=1/0,hf=null,Ta=null,fn=0,Aa=null,yo=null,vo=0,qp=0,Fp=null,dx=null,tu=0,$p=null;function fi(){if((et&2)!==0&&qe!==0)return qe&-qe;if(Y.T!==null){var t=ro;return t!==0?t:em()}return Ae()}function hx(){Bi===0&&(Bi=(qe&536870912)===0||Ie?Ce():536870912);var t=Li.current;return t!==null&&(t.flags|=32),Bi}function di(t,i,s){(t===dt&&(tt===2||tt===9)||t.cancelPendingCommit!==null)&&(xo(t,0),Ea(t,qe,Bi,!1)),ln(t,s),((et&2)===0||t!==dt)&&(t===dt&&((et&2)===0&&(gs|=s),jt===4&&Ea(t,qe,Bi,!1)),mr(t))}function px(t,i,s){if((et&6)!==0)throw Error(a(327));var l=!s&&(i&124)===0&&(i&t.expiredLanes)===0||Gn(t,i),d=l?sA(t,i):Ip(t,i,!0),m=l;do{if(d===0){mo&&!l&&Ea(t,i,0,!1);break}else{if(s=t.current.alternate,m&&!rA(s)){d=Ip(t,i,!1),m=!1;continue}if(d===2){if(m=i,t.errorRecoveryDisabledLanes&m)var _=0;else _=t.pendingLanes&-536870913,_=_!==0?_:_&536870912?536870912:0;if(_!==0){i=_;e:{var A=t;d=eu;var k=A.current.memoizedState.isDehydrated;if(k&&(xo(A,_).flags|=256),_=Ip(A,_,!1),_!==2){if(Hp&&!k){A.errorRecoveryDisabledLanes|=m,gs|=m,d=4;break e}m=$n,$n=d,m!==null&&($n===null?$n=m:$n.push.apply($n,m))}d=_}if(m=!1,d!==2)continue}}if(d===1){xo(t,0),Ea(t,i,0,!0);break}e:{switch(l=t,m=d,m){case 0:case 1:throw Error(a(345));case 4:if((i&4194048)!==i)break;case 6:Ea(l,i,Bi,!wa);break e;case 2:$n=null;break;case 3:case 5:break;default:throw Error(a(329))}if((i&62914560)===i&&(d=Xp+300-$(),10<d)){if(Ea(l,i,Bi,!wa),Ji(l,0,!0)!==0)break e;l.timeoutHandle=Gx(mx.bind(null,l,s,$n,hf,Gp,i,Bi,gs,go,wa,m,2,-0,0),d);break e}mx(l,s,$n,hf,Gp,i,Bi,gs,go,wa,m,0,-0,0)}}break}while(!0);mr(t)}function mx(t,i,s,l,d,m,_,A,k,H,I,W,X,q){if(t.timeoutHandle=-1,W=i.subtreeFlags,(W&8192||(W&16785408)===16785408)&&(lu={stylesheets:null,count:0,unsuspend:VA},lx(i),W=HA(),W!==null)){t.cancelPendingCommit=W(wx.bind(null,t,i,m,s,l,d,_,A,k,I,1,X,q)),Ea(t,m,_,!H);return}wx(t,i,m,s,l,d,_,A,k)}function rA(t){for(var i=t;;){var s=i.tag;if((s===0||s===11||s===15)&&i.flags&16384&&(s=i.updateQueue,s!==null&&(s=s.stores,s!==null)))for(var l=0;l<s.length;l++){var d=s[l],m=d.getSnapshot;d=d.value;try{if(!si(m(),d))return!1}catch{return!1}}if(s=i.child,i.subtreeFlags&16384&&s!==null)s.return=i,i=s;else{if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function Ea(t,i,s,l){i&=~Yp,i&=~gs,t.suspendedLanes|=i,t.pingedLanes&=~i,l&&(t.warmLanes|=i),l=t.expirationTimes;for(var d=i;0<d;){var m=31-ct(d),_=1<<m;l[m]=-1,d&=~_}s!==0&&cr(t,s,i)}function pf(){return(et&6)===0?(nu(0),!1):!0}function Kp(){if(Ue!==null){if(tt===0)var t=Ue.return;else t=Ue,Ur=cs=null,fp(t),co=null,Fl=0,t=Ue;for(;t!==null;)Kv(t.alternate,t),t=t.return;Ue=null}}function xo(t,i){var s=t.timeoutHandle;s!==-1&&(t.timeoutHandle=-1,wA(s)),s=t.cancelPendingCommit,s!==null&&(t.cancelPendingCommit=null,s()),Kp(),dt=t,Ue=s=Lr(t.current,null),qe=i,tt=0,ci=null,wa=!1,mo=Gn(t,i),Hp=!1,go=Bi=Yp=gs=Sa=jt=0,$n=eu=null,Gp=!1,(i&8)!==0&&(i|=i&32);var l=t.entangledLanes;if(l!==0)for(t=t.entanglements,l&=i;0<l;){var d=31-ct(l),m=1<<d;i|=t[d],l&=~m}return Kr=i,Nc(),s}function gx(t,i){ke=null,Y.H=ef,i===Ll||i===Xc?(i=O1(),tt=3):i===D1?(i=O1(),tt=4):tt=i===zv?8:i!==null&&typeof i=="object"&&typeof i.then=="function"?6:1,ci=i,Ue===null&&(jt=1,sf(t,Oi(i,t.current)))}function yx(){var t=Y.H;return Y.H=ef,t===null?ef:t}function vx(){var t=Y.A;return Y.A=nA,t}function Qp(){jt=4,wa||(qe&4194048)!==qe&&Li.current!==null||(mo=!0),(Sa&134217727)===0&&(gs&134217727)===0||dt===null||Ea(dt,qe,Bi,!1)}function Ip(t,i,s){var l=et;et|=2;var d=yx(),m=vx();(dt!==t||qe!==i)&&(hf=null,xo(t,i)),i=!1;var _=jt;e:do try{if(tt!==0&&Ue!==null){var A=Ue,k=ci;switch(tt){case 8:Kp(),_=6;break e;case 3:case 2:case 9:case 6:Li.current===null&&(i=!0);var H=tt;if(tt=0,ci=null,bo(t,A,k,H),s&&mo){_=0;break e}break;default:H=tt,tt=0,ci=null,bo(t,A,k,H)}}aA(),_=jt;break}catch(I){gx(t,I)}while(!0);return i&&t.shellSuspendCounter++,Ur=cs=null,et=l,Y.H=d,Y.A=m,Ue===null&&(dt=null,qe=0,Nc()),_}function aA(){for(;Ue!==null;)xx(Ue)}function sA(t,i){var s=et;et|=2;var l=yx(),d=vx();dt!==t||qe!==i?(hf=null,df=$()+500,xo(t,i)):mo=Gn(t,i);e:do try{if(tt!==0&&Ue!==null){i=Ue;var m=ci;t:switch(tt){case 1:tt=0,ci=null,bo(t,i,m,1);break;case 2:case 9:if(j1(m)){tt=0,ci=null,bx(i);break}i=function(){tt!==2&&tt!==9||dt!==t||(tt=7),mr(t)},m.then(i,i);break e;case 3:tt=7;break e;case 4:tt=5;break e;case 7:j1(m)?(tt=0,ci=null,bx(i)):(tt=0,ci=null,bo(t,i,m,7));break;case 5:var _=null;switch(Ue.tag){case 26:_=Ue.memoizedState;case 5:case 27:var A=Ue;if(!_||tb(_)){tt=0,ci=null;var k=A.sibling;if(k!==null)Ue=k;else{var H=A.return;H!==null?(Ue=H,mf(H)):Ue=null}break t}}tt=0,ci=null,bo(t,i,m,5);break;case 6:tt=0,ci=null,bo(t,i,m,6);break;case 8:Kp(),jt=6;break e;default:throw Error(a(462))}}oA();break}catch(I){gx(t,I)}while(!0);return Ur=cs=null,Y.H=l,Y.A=d,et=s,Ue!==null?0:(dt=null,qe=0,Nc(),jt)}function oA(){for(;Ue!==null&&!yn();)xx(Ue)}function xx(t){var i=Fv(t.alternate,t,Kr);t.memoizedProps=t.pendingProps,i===null?mf(t):Ue=i}function bx(t){var i=t,s=i.alternate;switch(i.tag){case 15:case 0:i=Uv(s,i,i.pendingProps,i.type,void 0,qe);break;case 11:i=Uv(s,i,i.pendingProps,i.type.render,i.ref,qe);break;case 5:fp(i);default:Kv(s,i),i=Ue=_1(i,Kr),i=Fv(s,i,Kr)}t.memoizedProps=t.pendingProps,i===null?mf(t):Ue=i}function bo(t,i,s,l){Ur=cs=null,fp(i),co=null,Fl=0;var d=i.return;try{if(I3(t,d,i,s,qe)){jt=1,sf(t,Oi(s,t.current)),Ue=null;return}}catch(m){if(d!==null)throw Ue=d,m;jt=1,sf(t,Oi(s,t.current)),Ue=null;return}i.flags&32768?(Ie||l===1?t=!0:mo||(qe&536870912)!==0?t=!1:(wa=t=!0,(l===2||l===9||l===3||l===6)&&(l=Li.current,l!==null&&l.tag===13&&(l.flags|=16384))),_x(i,t)):mf(i)}function mf(t){var i=t;do{if((i.flags&32768)!==0){_x(i,wa);return}t=i.return;var s=W3(i.alternate,i,Kr);if(s!==null){Ue=s;return}if(i=i.sibling,i!==null){Ue=i;return}Ue=i=t}while(i!==null);jt===0&&(jt=5)}function _x(t,i){do{var s=J3(t.alternate,t);if(s!==null){s.flags&=32767,Ue=s;return}if(s=t.return,s!==null&&(s.flags|=32768,s.subtreeFlags=0,s.deletions=null),!i&&(t=t.sibling,t!==null)){Ue=t;return}Ue=t=s}while(t!==null);jt=6,Ue=null}function wx(t,i,s,l,d,m,_,A,k){t.cancelPendingCommit=null;do gf();while(fn!==0);if((et&6)!==0)throw Error(a(327));if(i!==null){if(i===t.current)throw Error(a(177));if(m=i.lanes|i.childLanes,m|=Uh,ni(t,s,m,_,A,k),t===dt&&(Ue=dt=null,qe=0),yo=i,Aa=t,vo=s,qp=m,Fp=d,dx=l,(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,fA(ot,function(){return Cx(),null})):(t.callbackNode=null,t.callbackPriority=0),l=(i.flags&13878)!==0,(i.subtreeFlags&13878)!==0||l){l=Y.T,Y.T=null,d=K.p,K.p=2,_=et,et|=4;try{eA(t,i,s)}finally{et=_,K.p=d,Y.T=l}}fn=1,Sx(),Tx(),Ax()}}function Sx(){if(fn===1){fn=0;var t=Aa,i=yo,s=(i.flags&13878)!==0;if((i.subtreeFlags&13878)!==0||s){s=Y.T,Y.T=null;var l=K.p;K.p=2;var d=et;et|=4;try{ax(i,t);var m=lm,_=f1(t.containerInfo),A=m.focusedElem,k=m.selectionRange;if(_!==A&&A&&A.ownerDocument&&c1(A.ownerDocument.documentElement,A)){if(k!==null&&Nh(A)){var H=k.start,I=k.end;if(I===void 0&&(I=H),"selectionStart"in A)A.selectionStart=H,A.selectionEnd=Math.min(I,A.value.length);else{var W=A.ownerDocument||document,X=W&&W.defaultView||window;if(X.getSelection){var q=X.getSelection(),we=A.textContent.length,xe=Math.min(k.start,we),st=k.end===void 0?xe:Math.min(k.end,we);!q.extend&&xe>st&&(_=st,st=xe,xe=_);var L=u1(A,xe),N=u1(A,st);if(L&&N&&(q.rangeCount!==1||q.anchorNode!==L.node||q.anchorOffset!==L.offset||q.focusNode!==N.node||q.focusOffset!==N.offset)){var U=W.createRange();U.setStart(L.node,L.offset),q.removeAllRanges(),xe>st?(q.addRange(U),q.extend(N.node,N.offset)):(U.setEnd(N.node,N.offset),q.addRange(U))}}}}for(W=[],q=A;q=q.parentNode;)q.nodeType===1&&W.push({element:q,left:q.scrollLeft,top:q.scrollTop});for(typeof A.focus=="function"&&A.focus(),A=0;A<W.length;A++){var Z=W[A];Z.element.scrollLeft=Z.left,Z.element.scrollTop=Z.top}}Rf=!!om,lm=om=null}finally{et=d,K.p=l,Y.T=s}}t.current=i,fn=2}}function Tx(){if(fn===2){fn=0;var t=Aa,i=yo,s=(i.flags&8772)!==0;if((i.subtreeFlags&8772)!==0||s){s=Y.T,Y.T=null;var l=K.p;K.p=2;var d=et;et|=4;try{tx(t,i.alternate,i)}finally{et=d,K.p=l,Y.T=s}}fn=3}}function Ax(){if(fn===4||fn===3){fn=0,Rn();var t=Aa,i=yo,s=vo,l=dx;(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?fn=5:(fn=0,yo=Aa=null,Ex(t,t.pendingLanes));var d=t.pendingLanes;if(d===0&&(Ta=null),Or(s),i=i.stateNode,Ye&&typeof Ye.onCommitFiberRoot=="function")try{Ye.onCommitFiberRoot(Un,i,void 0,(i.current.flags&128)===128)}catch{}if(l!==null){i=Y.T,d=K.p,K.p=2,Y.T=null;try{for(var m=t.onRecoverableError,_=0;_<l.length;_++){var A=l[_];m(A.value,{componentStack:A.stack})}}finally{Y.T=i,K.p=d}}(vo&3)!==0&&gf(),mr(t),d=t.pendingLanes,(s&4194090)!==0&&(d&42)!==0?t===$p?tu++:(tu=0,$p=t):tu=0,nu(0)}}function Ex(t,i){(t.pooledCacheLanes&=i)===0&&(i=t.pooledCache,i!=null&&(t.pooledCache=null,Nl(i)))}function gf(t){return Sx(),Tx(),Ax(),Cx()}function Cx(){if(fn!==5)return!1;var t=Aa,i=qp;qp=0;var s=Or(vo),l=Y.T,d=K.p;try{K.p=32>s?32:s,Y.T=null,s=Fp,Fp=null;var m=Aa,_=vo;if(fn=0,yo=Aa=null,vo=0,(et&6)!==0)throw Error(a(331));var A=et;if(et|=4,cx(m.current),ox(m,m.current,_,s),et=A,nu(0,!1),Ye&&typeof Ye.onPostCommitFiberRoot=="function")try{Ye.onPostCommitFiberRoot(Un,m)}catch{}return!0}finally{K.p=d,Y.T=l,Ex(t,i)}}function Rx(t,i,s){i=Oi(s,i),i=Ap(t.stateNode,i,2),t=ma(t,i,2),t!==null&&(ln(t,2),mr(t))}function lt(t,i,s){if(t.tag===3)Rx(t,t,s);else for(;i!==null;){if(i.tag===3){Rx(i,t,s);break}else if(i.tag===1){var l=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(Ta===null||!Ta.has(l))){t=Oi(s,t),s=kv(2),l=ma(i,s,2),l!==null&&(Ov(s,l,i,t),ln(l,2),mr(l));break}}i=i.return}}function Zp(t,i,s){var l=t.pingCache;if(l===null){l=t.pingCache=new iA;var d=new Set;l.set(i,d)}else d=l.get(i),d===void 0&&(d=new Set,l.set(i,d));d.has(s)||(Hp=!0,d.add(s),t=lA.bind(null,t,i,s),i.then(t,t))}function lA(t,i,s){var l=t.pingCache;l!==null&&l.delete(i),t.pingedLanes|=t.suspendedLanes&s,t.warmLanes&=~s,dt===t&&(qe&s)===s&&(jt===4||jt===3&&(qe&62914560)===qe&&300>$()-Xp?(et&2)===0&&xo(t,0):Yp|=s,go===qe&&(go=0)),mr(t)}function Mx(t,i){i===0&&(i=ur()),t=eo(t,i),t!==null&&(ln(t,i),mr(t))}function uA(t){var i=t.memoizedState,s=0;i!==null&&(s=i.retryLane),Mx(t,s)}function cA(t,i){var s=0;switch(t.tag){case 13:var l=t.stateNode,d=t.memoizedState;d!==null&&(s=d.retryLane);break;case 19:l=t.stateNode;break;case 22:l=t.stateNode._retryCache;break;default:throw Error(a(314))}l!==null&&l.delete(i),Mx(t,s)}function fA(t,i){return Be(t,i)}var yf=null,_o=null,Wp=!1,vf=!1,Jp=!1,ys=0;function mr(t){t!==_o&&t.next===null&&(_o===null?yf=_o=t:_o=_o.next=t),vf=!0,Wp||(Wp=!0,hA())}function nu(t,i){if(!Jp&&vf){Jp=!0;do for(var s=!1,l=yf;l!==null;){if(t!==0){var d=l.pendingLanes;if(d===0)var m=0;else{var _=l.suspendedLanes,A=l.pingedLanes;m=(1<<31-ct(42|t)+1)-1,m&=d&~(_&~A),m=m&201326741?m&201326741|1:m?m|2:0}m!==0&&(s=!0,Ox(l,m))}else m=qe,m=Ji(l,l===dt?m:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(m&3)===0||Gn(l,m)||(s=!0,Ox(l,m));l=l.next}while(s);Jp=!1}}function dA(){Dx()}function Dx(){vf=Wp=!1;var t=0;ys!==0&&(_A()&&(t=ys),ys=0);for(var i=$(),s=null,l=yf;l!==null;){var d=l.next,m=jx(l,i);m===0?(l.next=null,s===null?yf=d:s.next=d,d===null&&(_o=s)):(s=l,(t!==0||(m&3)!==0)&&(vf=!0)),l=d}nu(t)}function jx(t,i){for(var s=t.suspendedLanes,l=t.pingedLanes,d=t.expirationTimes,m=t.pendingLanes&-62914561;0<m;){var _=31-ct(m),A=1<<_,k=d[_];k===-1?((A&s)===0||(A&l)!==0)&&(d[_]=jr(A,i)):k<=i&&(t.expiredLanes|=A),m&=~A}if(i=dt,s=qe,s=Ji(t,t===i?s:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l=t.callbackNode,s===0||t===i&&(tt===2||tt===9)||t.cancelPendingCommit!==null)return l!==null&&l!==null&&mt(l),t.callbackNode=null,t.callbackPriority=0;if((s&3)===0||Gn(t,s)){if(i=s&-s,i===t.callbackPriority)return i;switch(l!==null&&mt(l),Or(s)){case 2:case 8:s=Qi;break;case 32:s=ot;break;case 268435456:s=Zi;break;default:s=ot}return l=kx.bind(null,t),s=Be(s,l),t.callbackPriority=i,t.callbackNode=s,i}return l!==null&&l!==null&&mt(l),t.callbackPriority=2,t.callbackNode=null,2}function kx(t,i){if(fn!==0&&fn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var s=t.callbackNode;if(gf()&&t.callbackNode!==s)return null;var l=qe;return l=Ji(t,t===dt?l:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l===0?null:(px(t,l,i),jx(t,$()),t.callbackNode!=null&&t.callbackNode===s?kx.bind(null,t):null)}function Ox(t,i){if(gf())return null;px(t,i,!0)}function hA(){SA(function(){(et&6)!==0?Be(Ci,dA):Dx()})}function em(){return ys===0&&(ys=Ce()),ys}function zx(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Rc(""+t)}function Nx(t,i){var s=i.ownerDocument.createElement("input");return s.name=i.name,s.value=i.value,t.id&&s.setAttribute("form",t.id),i.parentNode.insertBefore(s,i),t=new FormData(t),s.parentNode.removeChild(s),t}function pA(t,i,s,l,d){if(i==="submit"&&s&&s.stateNode===d){var m=zx((d[fe]||null).action),_=l.submitter;_&&(i=(i=_[fe]||null)?zx(i.formAction):_.getAttribute("formAction"),i!==null&&(m=i,_=null));var A=new kc("action","action",null,l,d);t.push({event:A,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(ys!==0){var k=_?Nx(d,_):new FormData(d);bp(s,{pending:!0,data:k,method:d.method,action:m},null,k)}}else typeof m=="function"&&(A.preventDefault(),k=_?Nx(d,_):new FormData(d),bp(s,{pending:!0,data:k,method:d.method,action:m},m,k))},currentTarget:d}]})}}for(var tm=0;tm<Vh.length;tm++){var nm=Vh[tm],mA=nm.toLowerCase(),gA=nm[0].toUpperCase()+nm.slice(1);er(mA,"on"+gA)}er(p1,"onAnimationEnd"),er(m1,"onAnimationIteration"),er(g1,"onAnimationStart"),er("dblclick","onDoubleClick"),er("focusin","onFocus"),er("focusout","onBlur"),er(O3,"onTransitionRun"),er(z3,"onTransitionStart"),er(N3,"onTransitionCancel"),er(y1,"onTransitionEnd"),wt("onMouseEnter",["mouseout","mouseover"]),wt("onMouseLeave",["mouseout","mouseover"]),wt("onPointerEnter",["pointerout","pointerover"]),wt("onPointerLeave",["pointerout","pointerover"]),gt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),gt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),gt("onBeforeInput",["compositionend","keypress","textInput","paste"]),gt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),gt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),gt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var iu="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),yA=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(iu));function Px(t,i){i=(i&4)!==0;for(var s=0;s<t.length;s++){var l=t[s],d=l.event;l=l.listeners;e:{var m=void 0;if(i)for(var _=l.length-1;0<=_;_--){var A=l[_],k=A.instance,H=A.currentTarget;if(A=A.listener,k!==m&&d.isPropagationStopped())break e;m=A,d.currentTarget=H;try{m(d)}catch(I){af(I)}d.currentTarget=null,m=k}else for(_=0;_<l.length;_++){if(A=l[_],k=A.instance,H=A.currentTarget,A=A.listener,k!==m&&d.isPropagationStopped())break e;m=A,d.currentTarget=H;try{m(d)}catch(I){af(I)}d.currentTarget=null,m=k}}}}function He(t,i){var s=i[Se];s===void 0&&(s=i[Se]=new Set);var l=t+"__bubble";s.has(l)||(Lx(i,t,2,!1),s.add(l))}function im(t,i,s){var l=0;i&&(l|=4),Lx(s,t,l,i)}var xf="_reactListening"+Math.random().toString(36).slice(2);function rm(t){if(!t[xf]){t[xf]=!0,ri.forEach(function(s){s!=="selectionchange"&&(yA.has(s)||im(s,!1,t),im(s,!0,t))});var i=t.nodeType===9?t:t.ownerDocument;i===null||i[xf]||(i[xf]=!0,im("selectionchange",!1,i))}}function Lx(t,i,s,l){switch(ob(i)){case 2:var d=XA;break;case 8:d=qA;break;default:d=vm}s=d.bind(null,i,s,t),d=void 0,!Eh||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(d=!0),l?d!==void 0?t.addEventListener(i,s,{capture:!0,passive:d}):t.addEventListener(i,s,!0):d!==void 0?t.addEventListener(i,s,{passive:d}):t.addEventListener(i,s,!1)}function am(t,i,s,l,d){var m=l;if((i&1)===0&&(i&2)===0&&l!==null)e:for(;;){if(l===null)return;var _=l.tag;if(_===3||_===4){var A=l.stateNode.containerInfo;if(A===d)break;if(_===4)for(_=l.return;_!==null;){var k=_.tag;if((k===3||k===4)&&_.stateNode.containerInfo===d)return;_=_.return}for(;A!==null;){if(_=Qe(A),_===null)return;if(k=_.tag,k===5||k===6||k===26||k===27){l=m=_;continue e}A=A.parentNode}}l=l.return}Xy(function(){var H=m,I=Th(s),W=[];e:{var X=v1.get(t);if(X!==void 0){var q=kc,we=t;switch(t){case"keypress":if(Dc(s)===0)break e;case"keydown":case"keyup":q=f3;break;case"focusin":we="focus",q=Dh;break;case"focusout":we="blur",q=Dh;break;case"beforeblur":case"afterblur":q=Dh;break;case"click":if(s.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":q=$y;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":q=J5;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":q=p3;break;case p1:case m1:case g1:q=n3;break;case y1:q=g3;break;case"scroll":case"scrollend":q=Z5;break;case"wheel":q=v3;break;case"copy":case"cut":case"paste":q=r3;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":q=Qy;break;case"toggle":case"beforetoggle":q=b3}var xe=(i&4)!==0,st=!xe&&(t==="scroll"||t==="scrollend"),L=xe?X!==null?X+"Capture":null:X;xe=[];for(var N=H,U;N!==null;){var Z=N;if(U=Z.stateNode,Z=Z.tag,Z!==5&&Z!==26&&Z!==27||U===null||L===null||(Z=wl(N,L),Z!=null&&xe.push(ru(N,Z,U))),st)break;N=N.return}0<xe.length&&(X=new q(X,we,null,s,I),W.push({event:X,listeners:xe}))}}if((i&7)===0){e:{if(X=t==="mouseover"||t==="pointerover",q=t==="mouseout"||t==="pointerout",X&&s!==Sh&&(we=s.relatedTarget||s.fromElement)&&(Qe(we)||we[ce]))break e;if((q||X)&&(X=I.window===I?I:(X=I.ownerDocument)?X.defaultView||X.parentWindow:window,q?(we=s.relatedTarget||s.toElement,q=H,we=we?Qe(we):null,we!==null&&(st=u(we),xe=we.tag,we!==st||xe!==5&&xe!==27&&xe!==6)&&(we=null)):(q=null,we=H),q!==we)){if(xe=$y,Z="onMouseLeave",L="onMouseEnter",N="mouse",(t==="pointerout"||t==="pointerover")&&(xe=Qy,Z="onPointerLeave",L="onPointerEnter",N="pointer"),st=q==null?X:un(q),U=we==null?X:un(we),X=new xe(Z,N+"leave",q,s,I),X.target=st,X.relatedTarget=U,Z=null,Qe(I)===H&&(xe=new xe(L,N+"enter",we,s,I),xe.target=U,xe.relatedTarget=st,Z=xe),st=Z,q&&we)t:{for(xe=q,L=we,N=0,U=xe;U;U=wo(U))N++;for(U=0,Z=L;Z;Z=wo(Z))U++;for(;0<N-U;)xe=wo(xe),N--;for(;0<U-N;)L=wo(L),U--;for(;N--;){if(xe===L||L!==null&&xe===L.alternate)break t;xe=wo(xe),L=wo(L)}xe=null}else xe=null;q!==null&&Bx(W,X,q,xe,!1),we!==null&&st!==null&&Bx(W,st,we,xe,!0)}}e:{if(X=H?un(H):window,q=X.nodeName&&X.nodeName.toLowerCase(),q==="select"||q==="input"&&X.type==="file")var ue=i1;else if(t1(X))if(r1)ue=D3;else{ue=R3;var Ne=C3}else q=X.nodeName,!q||q.toLowerCase()!=="input"||X.type!=="checkbox"&&X.type!=="radio"?H&&wh(H.elementType)&&(ue=i1):ue=M3;if(ue&&(ue=ue(t,H))){n1(W,ue,s,I);break e}Ne&&Ne(t,X,H),t==="focusout"&&H&&X.type==="number"&&H.memoizedProps.value!=null&&_h(X,"number",X.value)}switch(Ne=H?un(H):window,t){case"focusin":(t1(Ne)||Ne.contentEditable==="true")&&(Zs=Ne,Ph=H,Dl=null);break;case"focusout":Dl=Ph=Zs=null;break;case"mousedown":Lh=!0;break;case"contextmenu":case"mouseup":case"dragend":Lh=!1,d1(W,s,I);break;case"selectionchange":if(k3)break;case"keydown":case"keyup":d1(W,s,I)}var he;if(kh)e:{switch(t){case"compositionstart":var be="onCompositionStart";break e;case"compositionend":be="onCompositionEnd";break e;case"compositionupdate":be="onCompositionUpdate";break e}be=void 0}else Is?Jy(t,s)&&(be="onCompositionEnd"):t==="keydown"&&s.keyCode===229&&(be="onCompositionStart");be&&(Iy&&s.locale!=="ko"&&(Is||be!=="onCompositionStart"?be==="onCompositionEnd"&&Is&&(he=qy()):(fa=I,Ch="value"in fa?fa.value:fa.textContent,Is=!0)),Ne=bf(H,be),0<Ne.length&&(be=new Ky(be,t,null,s,I),W.push({event:be,listeners:Ne}),he?be.data=he:(he=e1(s),he!==null&&(be.data=he)))),(he=w3?S3(t,s):T3(t,s))&&(be=bf(H,"onBeforeInput"),0<be.length&&(Ne=new Ky("onBeforeInput","beforeinput",null,s,I),W.push({event:Ne,listeners:be}),Ne.data=he)),pA(W,t,H,s,I)}Px(W,i)})}function ru(t,i,s){return{instance:t,listener:i,currentTarget:s}}function bf(t,i){for(var s=i+"Capture",l=[];t!==null;){var d=t,m=d.stateNode;if(d=d.tag,d!==5&&d!==26&&d!==27||m===null||(d=wl(t,s),d!=null&&l.unshift(ru(t,d,m)),d=wl(t,i),d!=null&&l.push(ru(t,d,m))),t.tag===3)return l;t=t.return}return[]}function wo(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function Bx(t,i,s,l,d){for(var m=i._reactName,_=[];s!==null&&s!==l;){var A=s,k=A.alternate,H=A.stateNode;if(A=A.tag,k!==null&&k===l)break;A!==5&&A!==26&&A!==27||H===null||(k=H,d?(H=wl(s,m),H!=null&&_.unshift(ru(s,H,k))):d||(H=wl(s,m),H!=null&&_.push(ru(s,H,k)))),s=s.return}_.length!==0&&t.push({event:i,listeners:_})}var vA=/\r\n?/g,xA=/\u0000|\uFFFD/g;function Vx(t){return(typeof t=="string"?t:""+t).replace(vA,`
`).replace(xA,"")}function Ux(t,i){return i=Vx(i),Vx(t)===i}function _f(){}function at(t,i,s,l,d,m){switch(s){case"children":typeof l=="string"?i==="body"||i==="textarea"&&l===""||$s(t,l):(typeof l=="number"||typeof l=="bigint")&&i!=="body"&&$s(t,""+l);break;case"className":ua(t,"class",l);break;case"tabIndex":ua(t,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":ua(t,s,l);break;case"style":Yy(t,l,m);break;case"data":if(i!=="object"){ua(t,"data",l);break}case"src":case"href":if(l===""&&(i!=="a"||s!=="href")){t.removeAttribute(s);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(s);break}l=Rc(""+l),t.setAttribute(s,l);break;case"action":case"formAction":if(typeof l=="function"){t.setAttribute(s,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof m=="function"&&(s==="formAction"?(i!=="input"&&at(t,i,"name",d.name,d,null),at(t,i,"formEncType",d.formEncType,d,null),at(t,i,"formMethod",d.formMethod,d,null),at(t,i,"formTarget",d.formTarget,d,null)):(at(t,i,"encType",d.encType,d,null),at(t,i,"method",d.method,d,null),at(t,i,"target",d.target,d,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(s);break}l=Rc(""+l),t.setAttribute(s,l);break;case"onClick":l!=null&&(t.onclick=_f);break;case"onScroll":l!=null&&He("scroll",t);break;case"onScrollEnd":l!=null&&He("scrollend",t);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(a(61));if(s=l.__html,s!=null){if(d.children!=null)throw Error(a(60));t.innerHTML=s}}break;case"multiple":t.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":t.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){t.removeAttribute("xlink:href");break}s=Rc(""+l),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",s);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(s,""+l):t.removeAttribute(s);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(s,""):t.removeAttribute(s);break;case"capture":case"download":l===!0?t.setAttribute(s,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(s,l):t.removeAttribute(s);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?t.setAttribute(s,l):t.removeAttribute(s);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?t.removeAttribute(s):t.setAttribute(s,l);break;case"popover":He("beforetoggle",t),He("toggle",t),jn(t,"popover",l);break;case"xlinkActuate":Ri(t,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":Ri(t,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":Ri(t,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":Ri(t,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":Ri(t,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":Ri(t,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":Ri(t,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":Ri(t,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":Ri(t,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":jn(t,"is",l);break;case"innerText":case"textContent":break;default:(!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(s=Q5.get(s)||s,jn(t,s,l))}}function sm(t,i,s,l,d,m){switch(s){case"style":Yy(t,l,m);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(a(61));if(s=l.__html,s!=null){if(d.children!=null)throw Error(a(60));t.innerHTML=s}}break;case"children":typeof l=="string"?$s(t,l):(typeof l=="number"||typeof l=="bigint")&&$s(t,""+l);break;case"onScroll":l!=null&&He("scroll",t);break;case"onScrollEnd":l!=null&&He("scrollend",t);break;case"onClick":l!=null&&(t.onclick=_f);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Gt.hasOwnProperty(s))e:{if(s[0]==="o"&&s[1]==="n"&&(d=s.endsWith("Capture"),i=s.slice(2,d?s.length-7:void 0),m=t[fe]||null,m=m!=null?m[s]:null,typeof m=="function"&&t.removeEventListener(i,m,d),typeof l=="function")){typeof m!="function"&&m!==null&&(s in t?t[s]=null:t.hasAttribute(s)&&t.removeAttribute(s)),t.addEventListener(i,l,d);break e}s in t?t[s]=l:l===!0?t.setAttribute(s,""):jn(t,s,l)}}}function dn(t,i,s){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":He("error",t),He("load",t);var l=!1,d=!1,m;for(m in s)if(s.hasOwnProperty(m)){var _=s[m];if(_!=null)switch(m){case"src":l=!0;break;case"srcSet":d=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(a(137,i));default:at(t,i,m,_,s,null)}}d&&at(t,i,"srcSet",s.srcSet,s,null),l&&at(t,i,"src",s.src,s,null);return;case"input":He("invalid",t);var A=m=_=d=null,k=null,H=null;for(l in s)if(s.hasOwnProperty(l)){var I=s[l];if(I!=null)switch(l){case"name":d=I;break;case"type":_=I;break;case"checked":k=I;break;case"defaultChecked":H=I;break;case"value":m=I;break;case"defaultValue":A=I;break;case"children":case"dangerouslySetInnerHTML":if(I!=null)throw Error(a(137,i));break;default:at(t,i,l,I,s,null)}}By(t,m,A,k,H,_,d,!1),Ec(t);return;case"select":He("invalid",t),l=_=m=null;for(d in s)if(s.hasOwnProperty(d)&&(A=s[d],A!=null))switch(d){case"value":m=A;break;case"defaultValue":_=A;break;case"multiple":l=A;default:at(t,i,d,A,s,null)}i=m,s=_,t.multiple=!!l,i!=null?Fs(t,!!l,i,!1):s!=null&&Fs(t,!!l,s,!0);return;case"textarea":He("invalid",t),m=d=l=null;for(_ in s)if(s.hasOwnProperty(_)&&(A=s[_],A!=null))switch(_){case"value":l=A;break;case"defaultValue":d=A;break;case"children":m=A;break;case"dangerouslySetInnerHTML":if(A!=null)throw Error(a(91));break;default:at(t,i,_,A,s,null)}Uy(t,l,d,m),Ec(t);return;case"option":for(k in s)if(s.hasOwnProperty(k)&&(l=s[k],l!=null))switch(k){case"selected":t.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:at(t,i,k,l,s,null)}return;case"dialog":He("beforetoggle",t),He("toggle",t),He("cancel",t),He("close",t);break;case"iframe":case"object":He("load",t);break;case"video":case"audio":for(l=0;l<iu.length;l++)He(iu[l],t);break;case"image":He("error",t),He("load",t);break;case"details":He("toggle",t);break;case"embed":case"source":case"link":He("error",t),He("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(H in s)if(s.hasOwnProperty(H)&&(l=s[H],l!=null))switch(H){case"children":case"dangerouslySetInnerHTML":throw Error(a(137,i));default:at(t,i,H,l,s,null)}return;default:if(wh(i)){for(I in s)s.hasOwnProperty(I)&&(l=s[I],l!==void 0&&sm(t,i,I,l,s,void 0));return}}for(A in s)s.hasOwnProperty(A)&&(l=s[A],l!=null&&at(t,i,A,l,s,null))}function bA(t,i,s,l){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var d=null,m=null,_=null,A=null,k=null,H=null,I=null;for(q in s){var W=s[q];if(s.hasOwnProperty(q)&&W!=null)switch(q){case"checked":break;case"value":break;case"defaultValue":k=W;default:l.hasOwnProperty(q)||at(t,i,q,null,l,W)}}for(var X in l){var q=l[X];if(W=s[X],l.hasOwnProperty(X)&&(q!=null||W!=null))switch(X){case"type":m=q;break;case"name":d=q;break;case"checked":H=q;break;case"defaultChecked":I=q;break;case"value":_=q;break;case"defaultValue":A=q;break;case"children":case"dangerouslySetInnerHTML":if(q!=null)throw Error(a(137,i));break;default:q!==W&&at(t,i,X,q,l,W)}}bh(t,_,A,k,H,I,m,d);return;case"select":q=_=A=X=null;for(m in s)if(k=s[m],s.hasOwnProperty(m)&&k!=null)switch(m){case"value":break;case"multiple":q=k;default:l.hasOwnProperty(m)||at(t,i,m,null,l,k)}for(d in l)if(m=l[d],k=s[d],l.hasOwnProperty(d)&&(m!=null||k!=null))switch(d){case"value":X=m;break;case"defaultValue":A=m;break;case"multiple":_=m;default:m!==k&&at(t,i,d,m,l,k)}i=A,s=_,l=q,X!=null?Fs(t,!!s,X,!1):!!l!=!!s&&(i!=null?Fs(t,!!s,i,!0):Fs(t,!!s,s?[]:"",!1));return;case"textarea":q=X=null;for(A in s)if(d=s[A],s.hasOwnProperty(A)&&d!=null&&!l.hasOwnProperty(A))switch(A){case"value":break;case"children":break;default:at(t,i,A,null,l,d)}for(_ in l)if(d=l[_],m=s[_],l.hasOwnProperty(_)&&(d!=null||m!=null))switch(_){case"value":X=d;break;case"defaultValue":q=d;break;case"children":break;case"dangerouslySetInnerHTML":if(d!=null)throw Error(a(91));break;default:d!==m&&at(t,i,_,d,l,m)}Vy(t,X,q);return;case"option":for(var we in s)if(X=s[we],s.hasOwnProperty(we)&&X!=null&&!l.hasOwnProperty(we))switch(we){case"selected":t.selected=!1;break;default:at(t,i,we,null,l,X)}for(k in l)if(X=l[k],q=s[k],l.hasOwnProperty(k)&&X!==q&&(X!=null||q!=null))switch(k){case"selected":t.selected=X&&typeof X!="function"&&typeof X!="symbol";break;default:at(t,i,k,X,l,q)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var xe in s)X=s[xe],s.hasOwnProperty(xe)&&X!=null&&!l.hasOwnProperty(xe)&&at(t,i,xe,null,l,X);for(H in l)if(X=l[H],q=s[H],l.hasOwnProperty(H)&&X!==q&&(X!=null||q!=null))switch(H){case"children":case"dangerouslySetInnerHTML":if(X!=null)throw Error(a(137,i));break;default:at(t,i,H,X,l,q)}return;default:if(wh(i)){for(var st in s)X=s[st],s.hasOwnProperty(st)&&X!==void 0&&!l.hasOwnProperty(st)&&sm(t,i,st,void 0,l,X);for(I in l)X=l[I],q=s[I],!l.hasOwnProperty(I)||X===q||X===void 0&&q===void 0||sm(t,i,I,X,l,q);return}}for(var L in s)X=s[L],s.hasOwnProperty(L)&&X!=null&&!l.hasOwnProperty(L)&&at(t,i,L,null,l,X);for(W in l)X=l[W],q=s[W],!l.hasOwnProperty(W)||X===q||X==null&&q==null||at(t,i,W,X,l,q)}var om=null,lm=null;function wf(t){return t.nodeType===9?t:t.ownerDocument}function Hx(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Yx(t,i){if(t===0)switch(i){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&i==="foreignObject"?0:t}function um(t,i){return t==="textarea"||t==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.children=="bigint"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var cm=null;function _A(){var t=window.event;return t&&t.type==="popstate"?t===cm?!1:(cm=t,!0):(cm=null,!1)}var Gx=typeof setTimeout=="function"?setTimeout:void 0,wA=typeof clearTimeout=="function"?clearTimeout:void 0,Xx=typeof Promise=="function"?Promise:void 0,SA=typeof queueMicrotask=="function"?queueMicrotask:typeof Xx<"u"?function(t){return Xx.resolve(null).then(t).catch(TA)}:Gx;function TA(t){setTimeout(function(){throw t})}function Ca(t){return t==="head"}function qx(t,i){var s=i,l=0,d=0;do{var m=s.nextSibling;if(t.removeChild(s),m&&m.nodeType===8)if(s=m.data,s==="/$"){if(0<l&&8>l){s=l;var _=t.ownerDocument;if(s&1&&au(_.documentElement),s&2&&au(_.body),s&4)for(s=_.head,au(s),_=s.firstChild;_;){var A=_.nextSibling,k=_.nodeName;_[Mt]||k==="SCRIPT"||k==="STYLE"||k==="LINK"&&_.rel.toLowerCase()==="stylesheet"||s.removeChild(_),_=A}}if(d===0){t.removeChild(m),hu(i);return}d--}else s==="$"||s==="$?"||s==="$!"?d++:l=s.charCodeAt(0)-48;else l=0;s=m}while(s);hu(i)}function fm(t){var i=t.firstChild;for(i&&i.nodeType===10&&(i=i.nextSibling);i;){var s=i;switch(i=i.nextSibling,s.nodeName){case"HTML":case"HEAD":case"BODY":fm(s),ft(s);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(s.rel.toLowerCase()==="stylesheet")continue}t.removeChild(s)}}function AA(t,i,s,l){for(;t.nodeType===1;){var d=s;if(t.nodeName.toLowerCase()!==i.toLowerCase()){if(!l&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(l){if(!t[Mt])switch(i){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(m=t.getAttribute("rel"),m==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(m!==d.rel||t.getAttribute("href")!==(d.href==null||d.href===""?null:d.href)||t.getAttribute("crossorigin")!==(d.crossOrigin==null?null:d.crossOrigin)||t.getAttribute("title")!==(d.title==null?null:d.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(m=t.getAttribute("src"),(m!==(d.src==null?null:d.src)||t.getAttribute("type")!==(d.type==null?null:d.type)||t.getAttribute("crossorigin")!==(d.crossOrigin==null?null:d.crossOrigin))&&m&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(i==="input"&&t.type==="hidden"){var m=d.name==null?null:""+d.name;if(d.type==="hidden"&&t.getAttribute("name")===m)return t}else return t;if(t=nr(t.nextSibling),t===null)break}return null}function EA(t,i,s){if(i==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!s||(t=nr(t.nextSibling),t===null))return null;return t}function dm(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState==="complete"}function CA(t,i){var s=t.ownerDocument;if(t.data!=="$?"||s.readyState==="complete")i();else{var l=function(){i(),s.removeEventListener("DOMContentLoaded",l)};s.addEventListener("DOMContentLoaded",l),t._reactRetry=l}}function nr(t){for(;t!=null;t=t.nextSibling){var i=t.nodeType;if(i===1||i===3)break;if(i===8){if(i=t.data,i==="$"||i==="$!"||i==="$?"||i==="F!"||i==="F")break;if(i==="/$")return null}}return t}var hm=null;function Fx(t){t=t.previousSibling;for(var i=0;t;){if(t.nodeType===8){var s=t.data;if(s==="$"||s==="$!"||s==="$?"){if(i===0)return t;i--}else s==="/$"&&i++}t=t.previousSibling}return null}function $x(t,i,s){switch(i=wf(s),t){case"html":if(t=i.documentElement,!t)throw Error(a(452));return t;case"head":if(t=i.head,!t)throw Error(a(453));return t;case"body":if(t=i.body,!t)throw Error(a(454));return t;default:throw Error(a(451))}}function au(t){for(var i=t.attributes;i.length;)t.removeAttributeNode(i[0]);ft(t)}var Vi=new Map,Kx=new Set;function Sf(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var Qr=K.d;K.d={f:RA,r:MA,D:DA,C:jA,L:kA,m:OA,X:NA,S:zA,M:PA};function RA(){var t=Qr.f(),i=pf();return t||i}function MA(t){var i=Xe(t);i!==null&&i.tag===5&&i.type==="form"?pv(i):Qr.r(t)}var So=typeof document>"u"?null:document;function Qx(t,i,s){var l=So;if(l&&typeof i=="string"&&i){var d=ki(i);d='link[rel="'+t+'"][href="'+d+'"]',typeof s=="string"&&(d+='[crossorigin="'+s+'"]'),Kx.has(d)||(Kx.add(d),t={rel:t,crossOrigin:s,href:i},l.querySelector(d)===null&&(i=l.createElement("link"),dn(i,"link",t),$e(i),l.head.appendChild(i)))}}function DA(t){Qr.D(t),Qx("dns-prefetch",t,null)}function jA(t,i){Qr.C(t,i),Qx("preconnect",t,i)}function kA(t,i,s){Qr.L(t,i,s);var l=So;if(l&&t&&i){var d='link[rel="preload"][as="'+ki(i)+'"]';i==="image"&&s&&s.imageSrcSet?(d+='[imagesrcset="'+ki(s.imageSrcSet)+'"]',typeof s.imageSizes=="string"&&(d+='[imagesizes="'+ki(s.imageSizes)+'"]')):d+='[href="'+ki(t)+'"]';var m=d;switch(i){case"style":m=To(t);break;case"script":m=Ao(t)}Vi.has(m)||(t=g({rel:"preload",href:i==="image"&&s&&s.imageSrcSet?void 0:t,as:i},s),Vi.set(m,t),l.querySelector(d)!==null||i==="style"&&l.querySelector(su(m))||i==="script"&&l.querySelector(ou(m))||(i=l.createElement("link"),dn(i,"link",t),$e(i),l.head.appendChild(i)))}}function OA(t,i){Qr.m(t,i);var s=So;if(s&&t){var l=i&&typeof i.as=="string"?i.as:"script",d='link[rel="modulepreload"][as="'+ki(l)+'"][href="'+ki(t)+'"]',m=d;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":m=Ao(t)}if(!Vi.has(m)&&(t=g({rel:"modulepreload",href:t},i),Vi.set(m,t),s.querySelector(d)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(s.querySelector(ou(m)))return}l=s.createElement("link"),dn(l,"link",t),$e(l),s.head.appendChild(l)}}}function zA(t,i,s){Qr.S(t,i,s);var l=So;if(l&&t){var d=Ze(l).hoistableStyles,m=To(t);i=i||"default";var _=d.get(m);if(!_){var A={loading:0,preload:null};if(_=l.querySelector(su(m)))A.loading=5;else{t=g({rel:"stylesheet",href:t,"data-precedence":i},s),(s=Vi.get(m))&&pm(t,s);var k=_=l.createElement("link");$e(k),dn(k,"link",t),k._p=new Promise(function(H,I){k.onload=H,k.onerror=I}),k.addEventListener("load",function(){A.loading|=1}),k.addEventListener("error",function(){A.loading|=2}),A.loading|=4,Tf(_,i,l)}_={type:"stylesheet",instance:_,count:1,state:A},d.set(m,_)}}}function NA(t,i){Qr.X(t,i);var s=So;if(s&&t){var l=Ze(s).hoistableScripts,d=Ao(t),m=l.get(d);m||(m=s.querySelector(ou(d)),m||(t=g({src:t,async:!0},i),(i=Vi.get(d))&&mm(t,i),m=s.createElement("script"),$e(m),dn(m,"link",t),s.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},l.set(d,m))}}function PA(t,i){Qr.M(t,i);var s=So;if(s&&t){var l=Ze(s).hoistableScripts,d=Ao(t),m=l.get(d);m||(m=s.querySelector(ou(d)),m||(t=g({src:t,async:!0,type:"module"},i),(i=Vi.get(d))&&mm(t,i),m=s.createElement("script"),$e(m),dn(m,"link",t),s.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},l.set(d,m))}}function Ix(t,i,s,l){var d=(d=oe.current)?Sf(d):null;if(!d)throw Error(a(446));switch(t){case"meta":case"title":return null;case"style":return typeof s.precedence=="string"&&typeof s.href=="string"?(i=To(s.href),s=Ze(d).hoistableStyles,l=s.get(i),l||(l={type:"style",instance:null,count:0,state:null},s.set(i,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(s.rel==="stylesheet"&&typeof s.href=="string"&&typeof s.precedence=="string"){t=To(s.href);var m=Ze(d).hoistableStyles,_=m.get(t);if(_||(d=d.ownerDocument||d,_={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},m.set(t,_),(m=d.querySelector(su(t)))&&!m._p&&(_.instance=m,_.state.loading=5),Vi.has(t)||(s={rel:"preload",as:"style",href:s.href,crossOrigin:s.crossOrigin,integrity:s.integrity,media:s.media,hrefLang:s.hrefLang,referrerPolicy:s.referrerPolicy},Vi.set(t,s),m||LA(d,t,s,_.state))),i&&l===null)throw Error(a(528,""));return _}if(i&&l!==null)throw Error(a(529,""));return null;case"script":return i=s.async,s=s.src,typeof s=="string"&&i&&typeof i!="function"&&typeof i!="symbol"?(i=Ao(s),s=Ze(d).hoistableScripts,l=s.get(i),l||(l={type:"script",instance:null,count:0,state:null},s.set(i,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(a(444,t))}}function To(t){return'href="'+ki(t)+'"'}function su(t){return'link[rel="stylesheet"]['+t+"]"}function Zx(t){return g({},t,{"data-precedence":t.precedence,precedence:null})}function LA(t,i,s,l){t.querySelector('link[rel="preload"][as="style"]['+i+"]")?l.loading=1:(i=t.createElement("link"),l.preload=i,i.addEventListener("load",function(){return l.loading|=1}),i.addEventListener("error",function(){return l.loading|=2}),dn(i,"link",s),$e(i),t.head.appendChild(i))}function Ao(t){return'[src="'+ki(t)+'"]'}function ou(t){return"script[async]"+t}function Wx(t,i,s){if(i.count++,i.instance===null)switch(i.type){case"style":var l=t.querySelector('style[data-href~="'+ki(s.href)+'"]');if(l)return i.instance=l,$e(l),l;var d=g({},s,{"data-href":s.href,"data-precedence":s.precedence,href:null,precedence:null});return l=(t.ownerDocument||t).createElement("style"),$e(l),dn(l,"style",d),Tf(l,s.precedence,t),i.instance=l;case"stylesheet":d=To(s.href);var m=t.querySelector(su(d));if(m)return i.state.loading|=4,i.instance=m,$e(m),m;l=Zx(s),(d=Vi.get(d))&&pm(l,d),m=(t.ownerDocument||t).createElement("link"),$e(m);var _=m;return _._p=new Promise(function(A,k){_.onload=A,_.onerror=k}),dn(m,"link",l),i.state.loading|=4,Tf(m,s.precedence,t),i.instance=m;case"script":return m=Ao(s.src),(d=t.querySelector(ou(m)))?(i.instance=d,$e(d),d):(l=s,(d=Vi.get(m))&&(l=g({},s),mm(l,d)),t=t.ownerDocument||t,d=t.createElement("script"),$e(d),dn(d,"link",l),t.head.appendChild(d),i.instance=d);case"void":return null;default:throw Error(a(443,i.type))}else i.type==="stylesheet"&&(i.state.loading&4)===0&&(l=i.instance,i.state.loading|=4,Tf(l,s.precedence,t));return i.instance}function Tf(t,i,s){for(var l=s.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),d=l.length?l[l.length-1]:null,m=d,_=0;_<l.length;_++){var A=l[_];if(A.dataset.precedence===i)m=A;else if(m!==d)break}m?m.parentNode.insertBefore(t,m.nextSibling):(i=s.nodeType===9?s.head:s,i.insertBefore(t,i.firstChild))}function pm(t,i){t.crossOrigin==null&&(t.crossOrigin=i.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=i.referrerPolicy),t.title==null&&(t.title=i.title)}function mm(t,i){t.crossOrigin==null&&(t.crossOrigin=i.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=i.referrerPolicy),t.integrity==null&&(t.integrity=i.integrity)}var Af=null;function Jx(t,i,s){if(Af===null){var l=new Map,d=Af=new Map;d.set(s,l)}else d=Af,l=d.get(s),l||(l=new Map,d.set(s,l));if(l.has(t))return l;for(l.set(t,null),s=s.getElementsByTagName(t),d=0;d<s.length;d++){var m=s[d];if(!(m[Mt]||m[ne]||t==="link"&&m.getAttribute("rel")==="stylesheet")&&m.namespaceURI!=="http://www.w3.org/2000/svg"){var _=m.getAttribute(i)||"";_=t+_;var A=l.get(_);A?A.push(m):l.set(_,[m])}}return l}function eb(t,i,s){t=t.ownerDocument||t,t.head.insertBefore(s,i==="title"?t.querySelector("head > title"):null)}function BA(t,i,s){if(s===1||i.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof i.precedence!="string"||typeof i.href!="string"||i.href==="")break;return!0;case"link":if(typeof i.rel!="string"||typeof i.href!="string"||i.href===""||i.onLoad||i.onError)break;switch(i.rel){case"stylesheet":return t=i.disabled,typeof i.precedence=="string"&&t==null;default:return!0}case"script":if(i.async&&typeof i.async!="function"&&typeof i.async!="symbol"&&!i.onLoad&&!i.onError&&i.src&&typeof i.src=="string")return!0}return!1}function tb(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}var lu=null;function VA(){}function UA(t,i,s){if(lu===null)throw Error(a(475));var l=lu;if(i.type==="stylesheet"&&(typeof s.media!="string"||matchMedia(s.media).matches!==!1)&&(i.state.loading&4)===0){if(i.instance===null){var d=To(s.href),m=t.querySelector(su(d));if(m){t=m._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(l.count++,l=Ef.bind(l),t.then(l,l)),i.state.loading|=4,i.instance=m,$e(m);return}m=t.ownerDocument||t,s=Zx(s),(d=Vi.get(d))&&pm(s,d),m=m.createElement("link"),$e(m);var _=m;_._p=new Promise(function(A,k){_.onload=A,_.onerror=k}),dn(m,"link",s),i.instance=m}l.stylesheets===null&&(l.stylesheets=new Map),l.stylesheets.set(i,t),(t=i.state.preload)&&(i.state.loading&3)===0&&(l.count++,i=Ef.bind(l),t.addEventListener("load",i),t.addEventListener("error",i))}}function HA(){if(lu===null)throw Error(a(475));var t=lu;return t.stylesheets&&t.count===0&&gm(t,t.stylesheets),0<t.count?function(i){var s=setTimeout(function(){if(t.stylesheets&&gm(t,t.stylesheets),t.unsuspend){var l=t.unsuspend;t.unsuspend=null,l()}},6e4);return t.unsuspend=i,function(){t.unsuspend=null,clearTimeout(s)}}:null}function Ef(){if(this.count--,this.count===0){if(this.stylesheets)gm(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Cf=null;function gm(t,i){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Cf=new Map,i.forEach(YA,t),Cf=null,Ef.call(t))}function YA(t,i){if(!(i.state.loading&4)){var s=Cf.get(t);if(s)var l=s.get(null);else{s=new Map,Cf.set(t,s);for(var d=t.querySelectorAll("link[data-precedence],style[data-precedence]"),m=0;m<d.length;m++){var _=d[m];(_.nodeName==="LINK"||_.getAttribute("media")!=="not all")&&(s.set(_.dataset.precedence,_),l=_)}l&&s.set(null,l)}d=i.instance,_=d.getAttribute("data-precedence"),m=s.get(_)||l,m===l&&s.set(null,d),s.set(_,d),this.count++,l=Ef.bind(this),d.addEventListener("load",l),d.addEventListener("error",l),m?m.parentNode.insertBefore(d,m.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(d,t.firstChild)),i.state.loading|=4}}var uu={$$typeof:R,Provider:null,Consumer:null,_currentValue:ee,_currentValue2:ee,_threadCount:0};function GA(t,i,s,l,d,m,_,A){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Dn(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Dn(0),this.hiddenUpdates=Dn(null),this.identifierPrefix=l,this.onUncaughtError=d,this.onCaughtError=m,this.onRecoverableError=_,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=A,this.incompleteTransitions=new Map}function nb(t,i,s,l,d,m,_,A,k,H,I,W){return t=new GA(t,i,s,_,A,k,H,W),i=1,m===!0&&(i|=24),m=oi(3,null,null,i),t.current=m,m.stateNode=t,i=Zh(),i.refCount++,t.pooledCache=i,i.refCount++,m.memoizedState={element:l,isDehydrated:s,cache:i},tp(m),t}function ib(t){return t?(t=to,t):to}function rb(t,i,s,l,d,m){d=ib(d),l.context===null?l.context=d:l.pendingContext=d,l=pa(i),l.payload={element:s},m=m===void 0?null:m,m!==null&&(l.callback=m),s=ma(t,l,i),s!==null&&(di(s,t,i),Vl(s,t,i))}function ab(t,i){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var s=t.retryLane;t.retryLane=s!==0&&s<i?s:i}}function ym(t,i){ab(t,i),(t=t.alternate)&&ab(t,i)}function sb(t){if(t.tag===13){var i=eo(t,67108864);i!==null&&di(i,t,67108864),ym(t,67108864)}}var Rf=!0;function XA(t,i,s,l){var d=Y.T;Y.T=null;var m=K.p;try{K.p=2,vm(t,i,s,l)}finally{K.p=m,Y.T=d}}function qA(t,i,s,l){var d=Y.T;Y.T=null;var m=K.p;try{K.p=8,vm(t,i,s,l)}finally{K.p=m,Y.T=d}}function vm(t,i,s,l){if(Rf){var d=xm(l);if(d===null)am(t,i,l,Mf,s),lb(t,l);else if($A(d,t,i,s,l))l.stopPropagation();else if(lb(t,l),i&4&&-1<FA.indexOf(t)){for(;d!==null;){var m=Xe(d);if(m!==null)switch(m.tag){case 3:if(m=m.stateNode,m.current.memoizedState.isDehydrated){var _=Yn(m.pendingLanes);if(_!==0){var A=m;for(A.pendingLanes|=2,A.entangledLanes|=2;_;){var k=1<<31-ct(_);A.entanglements[1]|=k,_&=~k}mr(m),(et&6)===0&&(df=$()+500,nu(0))}}break;case 13:A=eo(m,2),A!==null&&di(A,m,2),pf(),ym(m,2)}if(m=xm(l),m===null&&am(t,i,l,Mf,s),m===d)break;d=m}d!==null&&l.stopPropagation()}else am(t,i,l,null,s)}}function xm(t){return t=Th(t),bm(t)}var Mf=null;function bm(t){if(Mf=null,t=Qe(t),t!==null){var i=u(t);if(i===null)t=null;else{var s=i.tag;if(s===13){if(t=c(i),t!==null)return t;t=null}else if(s===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;t=null}else i!==t&&(t=null)}}return Mf=t,null}function ob(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Mn()){case Ci:return 2;case Qi:return 8;case ot:case Ii:return 32;case Zi:return 268435456;default:return 32}default:return 32}}var _m=!1,Ra=null,Ma=null,Da=null,cu=new Map,fu=new Map,ja=[],FA="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function lb(t,i){switch(t){case"focusin":case"focusout":Ra=null;break;case"dragenter":case"dragleave":Ma=null;break;case"mouseover":case"mouseout":Da=null;break;case"pointerover":case"pointerout":cu.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":fu.delete(i.pointerId)}}function du(t,i,s,l,d,m){return t===null||t.nativeEvent!==m?(t={blockedOn:i,domEventName:s,eventSystemFlags:l,nativeEvent:m,targetContainers:[d]},i!==null&&(i=Xe(i),i!==null&&sb(i)),t):(t.eventSystemFlags|=l,i=t.targetContainers,d!==null&&i.indexOf(d)===-1&&i.push(d),t)}function $A(t,i,s,l,d){switch(i){case"focusin":return Ra=du(Ra,t,i,s,l,d),!0;case"dragenter":return Ma=du(Ma,t,i,s,l,d),!0;case"mouseover":return Da=du(Da,t,i,s,l,d),!0;case"pointerover":var m=d.pointerId;return cu.set(m,du(cu.get(m)||null,t,i,s,l,d)),!0;case"gotpointercapture":return m=d.pointerId,fu.set(m,du(fu.get(m)||null,t,i,s,l,d)),!0}return!1}function ub(t){var i=Qe(t.target);if(i!==null){var s=u(i);if(s!==null){if(i=s.tag,i===13){if(i=c(s),i!==null){t.blockedOn=i,ve(t.priority,function(){if(s.tag===13){var l=fi();l=ii(l);var d=eo(s,l);d!==null&&di(d,s,l),ym(s,l)}});return}}else if(i===3&&s.stateNode.current.memoizedState.isDehydrated){t.blockedOn=s.tag===3?s.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Df(t){if(t.blockedOn!==null)return!1;for(var i=t.targetContainers;0<i.length;){var s=xm(t.nativeEvent);if(s===null){s=t.nativeEvent;var l=new s.constructor(s.type,s);Sh=l,s.target.dispatchEvent(l),Sh=null}else return i=Xe(s),i!==null&&sb(i),t.blockedOn=s,!1;i.shift()}return!0}function cb(t,i,s){Df(t)&&s.delete(i)}function KA(){_m=!1,Ra!==null&&Df(Ra)&&(Ra=null),Ma!==null&&Df(Ma)&&(Ma=null),Da!==null&&Df(Da)&&(Da=null),cu.forEach(cb),fu.forEach(cb)}function jf(t,i){t.blockedOn===i&&(t.blockedOn=null,_m||(_m=!0,n.unstable_scheduleCallback(n.unstable_NormalPriority,KA)))}var kf=null;function fb(t){kf!==t&&(kf=t,n.unstable_scheduleCallback(n.unstable_NormalPriority,function(){kf===t&&(kf=null);for(var i=0;i<t.length;i+=3){var s=t[i],l=t[i+1],d=t[i+2];if(typeof l!="function"){if(bm(l||s)===null)continue;break}var m=Xe(s);m!==null&&(t.splice(i,3),i-=3,bp(m,{pending:!0,data:d,method:s.method,action:l},l,d))}}))}function hu(t){function i(k){return jf(k,t)}Ra!==null&&jf(Ra,t),Ma!==null&&jf(Ma,t),Da!==null&&jf(Da,t),cu.forEach(i),fu.forEach(i);for(var s=0;s<ja.length;s++){var l=ja[s];l.blockedOn===t&&(l.blockedOn=null)}for(;0<ja.length&&(s=ja[0],s.blockedOn===null);)ub(s),s.blockedOn===null&&ja.shift();if(s=(t.ownerDocument||t).$$reactFormReplay,s!=null)for(l=0;l<s.length;l+=3){var d=s[l],m=s[l+1],_=d[fe]||null;if(typeof m=="function")_||fb(s);else if(_){var A=null;if(m&&m.hasAttribute("formAction")){if(d=m,_=m[fe]||null)A=_.formAction;else if(bm(d)!==null)continue}else A=_.action;typeof A=="function"?s[l+1]=A:(s.splice(l,3),l-=3),fb(s)}}}function wm(t){this._internalRoot=t}Of.prototype.render=wm.prototype.render=function(t){var i=this._internalRoot;if(i===null)throw Error(a(409));var s=i.current,l=fi();rb(s,l,t,i,null,null)},Of.prototype.unmount=wm.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var i=t.containerInfo;rb(t.current,2,null,t,null,null),pf(),i[ce]=null}};function Of(t){this._internalRoot=t}Of.prototype.unstable_scheduleHydration=function(t){if(t){var i=Ae();t={blockedOn:null,target:t,priority:i};for(var s=0;s<ja.length&&i!==0&&i<ja[s].priority;s++);ja.splice(s,0,t),s===0&&ub(t)}};var db=e.version;if(db!=="19.1.0")throw Error(a(527,db,"19.1.0"));K.findDOMNode=function(t){var i=t._reactInternals;if(i===void 0)throw typeof t.render=="function"?Error(a(188)):(t=Object.keys(t).join(","),Error(a(268,t)));return t=h(i),t=t!==null?p(t):null,t=t===null?null:t.stateNode,t};var QA={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:Y,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var zf=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!zf.isDisabled&&zf.supportsFiber)try{Un=zf.inject(QA),Ye=zf}catch{}}return mu.createRoot=function(t,i){if(!o(t))throw Error(a(299));var s=!1,l="",d=Rv,m=Mv,_=Dv,A=null;return i!=null&&(i.unstable_strictMode===!0&&(s=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onUncaughtError!==void 0&&(d=i.onUncaughtError),i.onCaughtError!==void 0&&(m=i.onCaughtError),i.onRecoverableError!==void 0&&(_=i.onRecoverableError),i.unstable_transitionCallbacks!==void 0&&(A=i.unstable_transitionCallbacks)),i=nb(t,1,!1,null,null,s,l,d,m,_,A,null),t[ce]=i.current,rm(t),new wm(i)},mu.hydrateRoot=function(t,i,s){if(!o(t))throw Error(a(299));var l=!1,d="",m=Rv,_=Mv,A=Dv,k=null,H=null;return s!=null&&(s.unstable_strictMode===!0&&(l=!0),s.identifierPrefix!==void 0&&(d=s.identifierPrefix),s.onUncaughtError!==void 0&&(m=s.onUncaughtError),s.onCaughtError!==void 0&&(_=s.onCaughtError),s.onRecoverableError!==void 0&&(A=s.onRecoverableError),s.unstable_transitionCallbacks!==void 0&&(k=s.unstable_transitionCallbacks),s.formState!==void 0&&(H=s.formState)),i=nb(t,1,!0,i,s??null,l,d,m,_,A,k,H),i.context=ib(null),s=i.current,l=fi(),l=ii(l),d=pa(l),d.callback=null,ma(s,d,l),s=l,i.current.lanes=s,ln(i,s),mr(i),t[ce]=i.current,rm(t),new Of(i)},mu.version="19.1.0",mu}var wb;function aE(){if(wb)return Am.exports;wb=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}return n(),Am.exports=rE(),Am.exports}var sE=aE();const oE=s2(sE);var In=function(){return In=Object.assign||function(e){for(var r,a=1,o=arguments.length;a<o;a++){r=arguments[a];for(var u in r)Object.prototype.hasOwnProperty.call(r,u)&&(e[u]=r[u])}return e},In.apply(this,arguments)};function zd(n,e,r){if(r||arguments.length===2)for(var a=0,o=e.length,u;a<o;a++)(u||!(a in e))&&(u||(u=Array.prototype.slice.call(e,0,a)),u[a]=e[a]);return n.concat(u||Array.prototype.slice.call(e))}var yt="-ms-",Ou="-moz-",We="-webkit-",o2="comm",ih="rule",hg="decl",lE="@import",l2="@keyframes",uE="@layer",u2=Math.abs,pg=String.fromCharCode,p0=Object.assign;function cE(n,e){return sn(n,0)^45?(((e<<2^sn(n,0))<<2^sn(n,1))<<2^sn(n,2))<<2^sn(n,3):0}function c2(n){return n.trim()}function Zr(n,e){return(n=e.exec(n))?n[0]:n}function Me(n,e,r){return n.replace(e,r)}function md(n,e,r){return n.indexOf(e,r)}function sn(n,e){return n.charCodeAt(e)|0}function nl(n,e,r){return n.slice(e,r)}function vr(n){return n.length}function f2(n){return n.length}function wu(n,e){return e.push(n),n}function fE(n,e){return n.map(e).join("")}function Sb(n,e){return n.filter(function(r){return!Zr(r,e)})}var rh=1,il=1,d2=0,Ki=0,Kt=0,ml="";function ah(n,e,r,a,o,u,c,f){return{value:n,root:e,parent:r,type:a,props:o,children:u,line:rh,column:il,length:c,return:"",siblings:f}}function Oa(n,e){return p0(ah("",null,null,"",null,null,0,n.siblings),n,{length:-n.length},e)}function Eo(n){for(;n.root;)n=Oa(n.root,{children:[n]});wu(n,n.siblings)}function dE(){return Kt}function hE(){return Kt=Ki>0?sn(ml,--Ki):0,il--,Kt===10&&(il=1,rh--),Kt}function ar(){return Kt=Ki<d2?sn(ml,Ki++):0,il++,Kt===10&&(il=1,rh++),Kt}function Ds(){return sn(ml,Ki)}function gd(){return Ki}function sh(n,e){return nl(ml,n,e)}function m0(n){switch(n){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function pE(n){return rh=il=1,d2=vr(ml=n),Ki=0,[]}function mE(n){return ml="",n}function Mm(n){return c2(sh(Ki-1,g0(n===91?n+2:n===40?n+1:n)))}function gE(n){for(;(Kt=Ds())&&Kt<33;)ar();return m0(n)>2||m0(Kt)>3?"":" "}function yE(n,e){for(;--e&&ar()&&!(Kt<48||Kt>102||Kt>57&&Kt<65||Kt>70&&Kt<97););return sh(n,gd()+(e<6&&Ds()==32&&ar()==32))}function g0(n){for(;ar();)switch(Kt){case n:return Ki;case 34:case 39:n!==34&&n!==39&&g0(Kt);break;case 40:n===41&&g0(n);break;case 92:ar();break}return Ki}function vE(n,e){for(;ar()&&n+Kt!==57;)if(n+Kt===84&&Ds()===47)break;return"/*"+sh(e,Ki-1)+"*"+pg(n===47?n:ar())}function xE(n){for(;!m0(Ds());)ar();return sh(n,Ki)}function bE(n){return mE(yd("",null,null,null,[""],n=pE(n),0,[0],n))}function yd(n,e,r,a,o,u,c,f,h){for(var p=0,g=0,y=c,x=0,v=0,w=0,S=1,C=1,E=1,M=0,R="",O=o,j=u,P=a,D=R;C;)switch(w=M,M=ar()){case 40:if(w!=108&&sn(D,y-1)==58){md(D+=Me(Mm(M),"&","&\f"),"&\f",u2(p?f[p-1]:0))!=-1&&(E=-1);break}case 34:case 39:case 91:D+=Mm(M);break;case 9:case 10:case 13:case 32:D+=gE(w);break;case 92:D+=yE(gd()-1,7);continue;case 47:switch(Ds()){case 42:case 47:wu(_E(vE(ar(),gd()),e,r,h),h);break;default:D+="/"}break;case 123*S:f[p++]=vr(D)*E;case 125*S:case 59:case 0:switch(M){case 0:case 125:C=0;case 59+g:E==-1&&(D=Me(D,/\f/g,"")),v>0&&vr(D)-y&&wu(v>32?Ab(D+";",a,r,y-1,h):Ab(Me(D," ","")+";",a,r,y-2,h),h);break;case 59:D+=";";default:if(wu(P=Tb(D,e,r,p,g,o,f,R,O=[],j=[],y,u),u),M===123)if(g===0)yd(D,e,P,P,O,u,y,f,j);else switch(x===99&&sn(D,3)===110?100:x){case 100:case 108:case 109:case 115:yd(n,P,P,a&&wu(Tb(n,P,P,0,0,o,f,R,o,O=[],y,j),j),o,j,y,f,a?O:j);break;default:yd(D,P,P,P,[""],j,0,f,j)}}p=g=v=0,S=E=1,R=D="",y=c;break;case 58:y=1+vr(D),v=w;default:if(S<1){if(M==123)--S;else if(M==125&&S++==0&&hE()==125)continue}switch(D+=pg(M),M*S){case 38:E=g>0?1:(D+="\f",-1);break;case 44:f[p++]=(vr(D)-1)*E,E=1;break;case 64:Ds()===45&&(D+=Mm(ar())),x=Ds(),g=y=vr(R=D+=xE(gd())),M++;break;case 45:w===45&&vr(D)==2&&(S=0)}}return u}function Tb(n,e,r,a,o,u,c,f,h,p,g,y){for(var x=o-1,v=o===0?u:[""],w=f2(v),S=0,C=0,E=0;S<a;++S)for(var M=0,R=nl(n,x+1,x=u2(C=c[S])),O=n;M<w;++M)(O=c2(C>0?v[M]+" "+R:Me(R,/&\f/g,v[M])))&&(h[E++]=O);return ah(n,e,r,o===0?ih:f,h,p,g,y)}function _E(n,e,r,a){return ah(n,e,r,o2,pg(dE()),nl(n,2,-2),0,a)}function Ab(n,e,r,a,o){return ah(n,e,r,hg,nl(n,0,a),nl(n,a+1,-1),a,o)}function h2(n,e,r){switch(cE(n,e)){case 5103:return We+"print-"+n+n;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return We+n+n;case 4789:return Ou+n+n;case 5349:case 4246:case 4810:case 6968:case 2756:return We+n+Ou+n+yt+n+n;case 5936:switch(sn(n,e+11)){case 114:return We+n+yt+Me(n,/[svh]\w+-[tblr]{2}/,"tb")+n;case 108:return We+n+yt+Me(n,/[svh]\w+-[tblr]{2}/,"tb-rl")+n;case 45:return We+n+yt+Me(n,/[svh]\w+-[tblr]{2}/,"lr")+n}case 6828:case 4268:case 2903:return We+n+yt+n+n;case 6165:return We+n+yt+"flex-"+n+n;case 5187:return We+n+Me(n,/(\w+).+(:[^]+)/,We+"box-$1$2"+yt+"flex-$1$2")+n;case 5443:return We+n+yt+"flex-item-"+Me(n,/flex-|-self/g,"")+(Zr(n,/flex-|baseline/)?"":yt+"grid-row-"+Me(n,/flex-|-self/g,""))+n;case 4675:return We+n+yt+"flex-line-pack"+Me(n,/align-content|flex-|-self/g,"")+n;case 5548:return We+n+yt+Me(n,"shrink","negative")+n;case 5292:return We+n+yt+Me(n,"basis","preferred-size")+n;case 6060:return We+"box-"+Me(n,"-grow","")+We+n+yt+Me(n,"grow","positive")+n;case 4554:return We+Me(n,/([^-])(transform)/g,"$1"+We+"$2")+n;case 6187:return Me(Me(Me(n,/(zoom-|grab)/,We+"$1"),/(image-set)/,We+"$1"),n,"")+n;case 5495:case 3959:return Me(n,/(image-set\([^]*)/,We+"$1$`$1");case 4968:return Me(Me(n,/(.+:)(flex-)?(.*)/,We+"box-pack:$3"+yt+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+We+n+n;case 4200:if(!Zr(n,/flex-|baseline/))return yt+"grid-column-align"+nl(n,e)+n;break;case 2592:case 3360:return yt+Me(n,"template-","")+n;case 4384:case 3616:return r&&r.some(function(a,o){return e=o,Zr(a.props,/grid-\w+-end/)})?~md(n+(r=r[e].value),"span",0)?n:yt+Me(n,"-start","")+n+yt+"grid-row-span:"+(~md(r,"span",0)?Zr(r,/\d+/):+Zr(r,/\d+/)-+Zr(n,/\d+/))+";":yt+Me(n,"-start","")+n;case 4896:case 4128:return r&&r.some(function(a){return Zr(a.props,/grid-\w+-start/)})?n:yt+Me(Me(n,"-end","-span"),"span ","")+n;case 4095:case 3583:case 4068:case 2532:return Me(n,/(.+)-inline(.+)/,We+"$1$2")+n;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(vr(n)-1-e>6)switch(sn(n,e+1)){case 109:if(sn(n,e+4)!==45)break;case 102:return Me(n,/(.+:)(.+)-([^]+)/,"$1"+We+"$2-$3$1"+Ou+(sn(n,e+3)==108?"$3":"$2-$3"))+n;case 115:return~md(n,"stretch",0)?h2(Me(n,"stretch","fill-available"),e,r)+n:n}break;case 5152:case 5920:return Me(n,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(a,o,u,c,f,h,p){return yt+o+":"+u+p+(c?yt+o+"-span:"+(f?h:+h-+u)+p:"")+n});case 4949:if(sn(n,e+6)===121)return Me(n,":",":"+We)+n;break;case 6444:switch(sn(n,sn(n,14)===45?18:11)){case 120:return Me(n,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+We+(sn(n,14)===45?"inline-":"")+"box$3$1"+We+"$2$3$1"+yt+"$2box$3")+n;case 100:return Me(n,":",":"+yt)+n}break;case 5719:case 2647:case 2135:case 3927:case 2391:return Me(n,"scroll-","scroll-snap-")+n}return n}function Nd(n,e){for(var r="",a=0;a<n.length;a++)r+=e(n[a],a,n,e)||"";return r}function wE(n,e,r,a){switch(n.type){case uE:if(n.children.length)break;case lE:case hg:return n.return=n.return||n.value;case o2:return"";case l2:return n.return=n.value+"{"+Nd(n.children,a)+"}";case ih:if(!vr(n.value=n.props.join(",")))return""}return vr(r=Nd(n.children,a))?n.return=n.value+"{"+r+"}":""}function SE(n){var e=f2(n);return function(r,a,o,u){for(var c="",f=0;f<e;f++)c+=n[f](r,a,o,u)||"";return c}}function TE(n){return function(e){e.root||(e=e.return)&&n(e)}}function AE(n,e,r,a){if(n.length>-1&&!n.return)switch(n.type){case hg:n.return=h2(n.value,n.length,r);return;case l2:return Nd([Oa(n,{value:Me(n.value,"@","@"+We)})],a);case ih:if(n.length)return fE(r=n.props,function(o){switch(Zr(o,a=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Eo(Oa(n,{props:[Me(o,/:(read-\w+)/,":"+Ou+"$1")]})),Eo(Oa(n,{props:[o]})),p0(n,{props:Sb(r,a)});break;case"::placeholder":Eo(Oa(n,{props:[Me(o,/:(plac\w+)/,":"+We+"input-$1")]})),Eo(Oa(n,{props:[Me(o,/:(plac\w+)/,":"+Ou+"$1")]})),Eo(Oa(n,{props:[Me(o,/:(plac\w+)/,yt+"input-$1")]})),Eo(Oa(n,{props:[o]})),p0(n,{props:Sb(r,a)});break}return""})}}var EE={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},hi={},rl=typeof process<"u"&&hi!==void 0&&(hi.REACT_APP_SC_ATTR||hi.SC_ATTR)||"data-styled",p2="active",m2="data-styled-version",oh="6.1.17",mg=`/*!sc*/
`,Pd=typeof window<"u"&&"HTMLElement"in window,CE=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&hi!==void 0&&hi.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&hi.REACT_APP_SC_DISABLE_SPEEDY!==""?hi.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&hi.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&hi!==void 0&&hi.SC_DISABLE_SPEEDY!==void 0&&hi.SC_DISABLE_SPEEDY!==""&&hi.SC_DISABLE_SPEEDY!=="false"&&hi.SC_DISABLE_SPEEDY),lh=Object.freeze([]),al=Object.freeze({});function RE(n,e,r){return r===void 0&&(r=al),n.theme!==r.theme&&n.theme||e||r.theme}var g2=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),ME=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,DE=/(^-|-$)/g;function Eb(n){return n.replace(ME,"-").replace(DE,"")}var jE=/(a)(d)/gi,Nf=52,Cb=function(n){return String.fromCharCode(n+(n>25?39:97))};function y0(n){var e,r="";for(e=Math.abs(n);e>Nf;e=e/Nf|0)r=Cb(e%Nf)+r;return(Cb(e%Nf)+r).replace(jE,"$1-$2")}var Dm,y2=5381,Vo=function(n,e){for(var r=e.length;r;)n=33*n^e.charCodeAt(--r);return n},v2=function(n){return Vo(y2,n)};function kE(n){return y0(v2(n)>>>0)}function OE(n){return n.displayName||n.name||"Component"}function jm(n){return typeof n=="string"&&!0}var x2=typeof Symbol=="function"&&Symbol.for,b2=x2?Symbol.for("react.memo"):60115,zE=x2?Symbol.for("react.forward_ref"):60112,NE={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},PE={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},_2={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},LE=((Dm={})[zE]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Dm[b2]=_2,Dm);function Rb(n){return("type"in(e=n)&&e.type.$$typeof)===b2?_2:"$$typeof"in n?LE[n.$$typeof]:NE;var e}var BE=Object.defineProperty,VE=Object.getOwnPropertyNames,Mb=Object.getOwnPropertySymbols,UE=Object.getOwnPropertyDescriptor,HE=Object.getPrototypeOf,Db=Object.prototype;function w2(n,e,r){if(typeof e!="string"){if(Db){var a=HE(e);a&&a!==Db&&w2(n,a,r)}var o=VE(e);Mb&&(o=o.concat(Mb(e)));for(var u=Rb(n),c=Rb(e),f=0;f<o.length;++f){var h=o[f];if(!(h in PE||r&&r[h]||c&&h in c||u&&h in u)){var p=UE(e,h);try{BE(n,h,p)}catch{}}}}return n}function sl(n){return typeof n=="function"}function gg(n){return typeof n=="object"&&"styledComponentId"in n}function As(n,e){return n&&e?"".concat(n," ").concat(e):n||e||""}function jb(n,e){if(n.length===0)return"";for(var r=n[0],a=1;a<n.length;a++)r+=n[a];return r}function Zu(n){return n!==null&&typeof n=="object"&&n.constructor.name===Object.name&&!("props"in n&&n.$$typeof)}function v0(n,e,r){if(r===void 0&&(r=!1),!r&&!Zu(n)&&!Array.isArray(n))return e;if(Array.isArray(e))for(var a=0;a<e.length;a++)n[a]=v0(n[a],e[a]);else if(Zu(e))for(var a in e)n[a]=v0(n[a],e[a]);return n}function yg(n,e){Object.defineProperty(n,"toString",{value:e})}function vc(n){for(var e=[],r=1;r<arguments.length;r++)e[r-1]=arguments[r];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(n," for more information.").concat(e.length>0?" Args: ".concat(e.join(", ")):""))}var YE=function(){function n(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return n.prototype.indexOfGroup=function(e){for(var r=0,a=0;a<e;a++)r+=this.groupSizes[a];return r},n.prototype.insertRules=function(e,r){if(e>=this.groupSizes.length){for(var a=this.groupSizes,o=a.length,u=o;e>=u;)if((u<<=1)<0)throw vc(16,"".concat(e));this.groupSizes=new Uint32Array(u),this.groupSizes.set(a),this.length=u;for(var c=o;c<u;c++)this.groupSizes[c]=0}for(var f=this.indexOfGroup(e+1),h=(c=0,r.length);c<h;c++)this.tag.insertRule(f,r[c])&&(this.groupSizes[e]++,f++)},n.prototype.clearGroup=function(e){if(e<this.length){var r=this.groupSizes[e],a=this.indexOfGroup(e),o=a+r;this.groupSizes[e]=0;for(var u=a;u<o;u++)this.tag.deleteRule(a)}},n.prototype.getGroup=function(e){var r="";if(e>=this.length||this.groupSizes[e]===0)return r;for(var a=this.groupSizes[e],o=this.indexOfGroup(e),u=o+a,c=o;c<u;c++)r+="".concat(this.tag.getRule(c)).concat(mg);return r},n}(),vd=new Map,Ld=new Map,xd=1,Pf=function(n){if(vd.has(n))return vd.get(n);for(;Ld.has(xd);)xd++;var e=xd++;return vd.set(n,e),Ld.set(e,n),e},GE=function(n,e){xd=e+1,vd.set(n,e),Ld.set(e,n)},XE="style[".concat(rl,"][").concat(m2,'="').concat(oh,'"]'),qE=new RegExp("^".concat(rl,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),FE=function(n,e,r){for(var a,o=r.split(","),u=0,c=o.length;u<c;u++)(a=o[u])&&n.registerName(e,a)},$E=function(n,e){for(var r,a=((r=e.textContent)!==null&&r!==void 0?r:"").split(mg),o=[],u=0,c=a.length;u<c;u++){var f=a[u].trim();if(f){var h=f.match(qE);if(h){var p=0|parseInt(h[1],10),g=h[2];p!==0&&(GE(g,p),FE(n,g,h[3]),n.getTag().insertRules(p,o)),o.length=0}else o.push(f)}}},kb=function(n){for(var e=document.querySelectorAll(XE),r=0,a=e.length;r<a;r++){var o=e[r];o&&o.getAttribute(rl)!==p2&&($E(n,o),o.parentNode&&o.parentNode.removeChild(o))}};function KE(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var S2=function(n){var e=document.head,r=n||e,a=document.createElement("style"),o=function(f){var h=Array.from(f.querySelectorAll("style[".concat(rl,"]")));return h[h.length-1]}(r),u=o!==void 0?o.nextSibling:null;a.setAttribute(rl,p2),a.setAttribute(m2,oh);var c=KE();return c&&a.setAttribute("nonce",c),r.insertBefore(a,u),a},QE=function(){function n(e){this.element=S2(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(r){if(r.sheet)return r.sheet;for(var a=document.styleSheets,o=0,u=a.length;o<u;o++){var c=a[o];if(c.ownerNode===r)return c}throw vc(17)}(this.element),this.length=0}return n.prototype.insertRule=function(e,r){try{return this.sheet.insertRule(r,e),this.length++,!0}catch{return!1}},n.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},n.prototype.getRule=function(e){var r=this.sheet.cssRules[e];return r&&r.cssText?r.cssText:""},n}(),IE=function(){function n(e){this.element=S2(e),this.nodes=this.element.childNodes,this.length=0}return n.prototype.insertRule=function(e,r){if(e<=this.length&&e>=0){var a=document.createTextNode(r);return this.element.insertBefore(a,this.nodes[e]||null),this.length++,!0}return!1},n.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},n.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},n}(),ZE=function(){function n(e){this.rules=[],this.length=0}return n.prototype.insertRule=function(e,r){return e<=this.length&&(this.rules.splice(e,0,r),this.length++,!0)},n.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},n.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},n}(),Ob=Pd,WE={isServer:!Pd,useCSSOMInjection:!CE},T2=function(){function n(e,r,a){e===void 0&&(e=al),r===void 0&&(r={});var o=this;this.options=In(In({},WE),e),this.gs=r,this.names=new Map(a),this.server=!!e.isServer,!this.server&&Pd&&Ob&&(Ob=!1,kb(this)),yg(this,function(){return function(u){for(var c=u.getTag(),f=c.length,h="",p=function(y){var x=function(E){return Ld.get(E)}(y);if(x===void 0)return"continue";var v=u.names.get(x),w=c.getGroup(y);if(v===void 0||!v.size||w.length===0)return"continue";var S="".concat(rl,".g").concat(y,'[id="').concat(x,'"]'),C="";v!==void 0&&v.forEach(function(E){E.length>0&&(C+="".concat(E,","))}),h+="".concat(w).concat(S,'{content:"').concat(C,'"}').concat(mg)},g=0;g<f;g++)p(g);return h}(o)})}return n.registerId=function(e){return Pf(e)},n.prototype.rehydrate=function(){!this.server&&Pd&&kb(this)},n.prototype.reconstructWithOptions=function(e,r){return r===void 0&&(r=!0),new n(In(In({},this.options),e),this.gs,r&&this.names||void 0)},n.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},n.prototype.getTag=function(){return this.tag||(this.tag=(e=function(r){var a=r.useCSSOMInjection,o=r.target;return r.isServer?new ZE(o):a?new QE(o):new IE(o)}(this.options),new YE(e)));var e},n.prototype.hasNameForId=function(e,r){return this.names.has(e)&&this.names.get(e).has(r)},n.prototype.registerName=function(e,r){if(Pf(e),this.names.has(e))this.names.get(e).add(r);else{var a=new Set;a.add(r),this.names.set(e,a)}},n.prototype.insertRules=function(e,r,a){this.registerName(e,r),this.getTag().insertRules(Pf(e),a)},n.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},n.prototype.clearRules=function(e){this.getTag().clearGroup(Pf(e)),this.clearNames(e)},n.prototype.clearTag=function(){this.tag=void 0},n}(),JE=/&/g,eC=/^\s*\/\/.*$/gm;function A2(n,e){return n.map(function(r){return r.type==="rule"&&(r.value="".concat(e," ").concat(r.value),r.value=r.value.replaceAll(",",",".concat(e," ")),r.props=r.props.map(function(a){return"".concat(e," ").concat(a)})),Array.isArray(r.children)&&r.type!=="@keyframes"&&(r.children=A2(r.children,e)),r})}function tC(n){var e,r,a,o=al,u=o.options,c=u===void 0?al:u,f=o.plugins,h=f===void 0?lh:f,p=function(x,v,w){return w.startsWith(r)&&w.endsWith(r)&&w.replaceAll(r,"").length>0?".".concat(e):x},g=h.slice();g.push(function(x){x.type===ih&&x.value.includes("&")&&(x.props[0]=x.props[0].replace(JE,r).replace(a,p))}),c.prefix&&g.push(AE),g.push(wE);var y=function(x,v,w,S){v===void 0&&(v=""),w===void 0&&(w=""),S===void 0&&(S="&"),e=S,r=v,a=new RegExp("\\".concat(r,"\\b"),"g");var C=x.replace(eC,""),E=bE(w||v?"".concat(w," ").concat(v," { ").concat(C," }"):C);c.namespace&&(E=A2(E,c.namespace));var M=[];return Nd(E,SE(g.concat(TE(function(R){return M.push(R)})))),M};return y.hash=h.length?h.reduce(function(x,v){return v.name||vc(15),Vo(x,v.name)},y2).toString():"",y}var nC=new T2,x0=tC(),E2=tl.createContext({shouldForwardProp:void 0,styleSheet:nC,stylis:x0});E2.Consumer;tl.createContext(void 0);function zb(){return z.useContext(E2)}var iC=function(){function n(e,r){var a=this;this.inject=function(o,u){u===void 0&&(u=x0);var c=a.name+u.hash;o.hasNameForId(a.id,c)||o.insertRules(a.id,c,u(a.rules,c,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=r,yg(this,function(){throw vc(12,String(a.name))})}return n.prototype.getName=function(e){return e===void 0&&(e=x0),this.name+e.hash},n}(),rC=function(n){return n>="A"&&n<="Z"};function Nb(n){for(var e="",r=0;r<n.length;r++){var a=n[r];if(r===1&&a==="-"&&n[0]==="-")return n;rC(a)?e+="-"+a.toLowerCase():e+=a}return e.startsWith("ms-")?"-"+e:e}var C2=function(n){return n==null||n===!1||n===""},R2=function(n){var e,r,a=[];for(var o in n){var u=n[o];n.hasOwnProperty(o)&&!C2(u)&&(Array.isArray(u)&&u.isCss||sl(u)?a.push("".concat(Nb(o),":"),u,";"):Zu(u)?a.push.apply(a,zd(zd(["".concat(o," {")],R2(u),!1),["}"],!1)):a.push("".concat(Nb(o),": ").concat((e=o,(r=u)==null||typeof r=="boolean"||r===""?"":typeof r!="number"||r===0||e in EE||e.startsWith("--")?String(r).trim():"".concat(r,"px")),";")))}return a};function js(n,e,r,a){if(C2(n))return[];if(gg(n))return[".".concat(n.styledComponentId)];if(sl(n)){if(!sl(u=n)||u.prototype&&u.prototype.isReactComponent||!e)return[n];var o=n(e);return js(o,e,r,a)}var u;return n instanceof iC?r?(n.inject(r,a),[n.getName(a)]):[n]:Zu(n)?R2(n):Array.isArray(n)?Array.prototype.concat.apply(lh,n.map(function(c){return js(c,e,r,a)})):[n.toString()]}function aC(n){for(var e=0;e<n.length;e+=1){var r=n[e];if(sl(r)&&!gg(r))return!1}return!0}var sC=v2(oh),oC=function(){function n(e,r,a){this.rules=e,this.staticRulesId="",this.isStatic=(a===void 0||a.isStatic)&&aC(e),this.componentId=r,this.baseHash=Vo(sC,r),this.baseStyle=a,T2.registerId(r)}return n.prototype.generateAndInjectStyles=function(e,r,a){var o=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,r,a):"";if(this.isStatic&&!a.hash)if(this.staticRulesId&&r.hasNameForId(this.componentId,this.staticRulesId))o=As(o,this.staticRulesId);else{var u=jb(js(this.rules,e,r,a)),c=y0(Vo(this.baseHash,u)>>>0);if(!r.hasNameForId(this.componentId,c)){var f=a(u,".".concat(c),void 0,this.componentId);r.insertRules(this.componentId,c,f)}o=As(o,c),this.staticRulesId=c}else{for(var h=Vo(this.baseHash,a.hash),p="",g=0;g<this.rules.length;g++){var y=this.rules[g];if(typeof y=="string")p+=y;else if(y){var x=jb(js(y,e,r,a));h=Vo(h,x+g),p+=x}}if(p){var v=y0(h>>>0);r.hasNameForId(this.componentId,v)||r.insertRules(this.componentId,v,a(p,".".concat(v),void 0,this.componentId)),o=As(o,v)}}return o},n}(),M2=tl.createContext(void 0);M2.Consumer;var km={};function lC(n,e,r){var a=gg(n),o=n,u=!jm(n),c=e.attrs,f=c===void 0?lh:c,h=e.componentId,p=h===void 0?function(O,j){var P=typeof O!="string"?"sc":Eb(O);km[P]=(km[P]||0)+1;var D="".concat(P,"-").concat(kE(oh+P+km[P]));return j?"".concat(j,"-").concat(D):D}(e.displayName,e.parentComponentId):h,g=e.displayName,y=g===void 0?function(O){return jm(O)?"styled.".concat(O):"Styled(".concat(OE(O),")")}(n):g,x=e.displayName&&e.componentId?"".concat(Eb(e.displayName),"-").concat(e.componentId):e.componentId||p,v=a&&o.attrs?o.attrs.concat(f).filter(Boolean):f,w=e.shouldForwardProp;if(a&&o.shouldForwardProp){var S=o.shouldForwardProp;if(e.shouldForwardProp){var C=e.shouldForwardProp;w=function(O,j){return S(O,j)&&C(O,j)}}else w=S}var E=new oC(r,x,a?o.componentStyle:void 0);function M(O,j){return function(P,D,B){var G=P.attrs,F=P.componentStyle,re=P.defaultProps,J=P.foldedComponentIds,ye=P.styledComponentId,pe=P.target,ge=tl.useContext(M2),Y=zb(),K=P.shouldForwardProp||Y.shouldForwardProp,ee=RE(D,ge,re)||al,se=function(me,oe,je){for(var Te,Fe=In(In({},oe),{className:void 0,theme:je}),gn=0;gn<me.length;gn+=1){var pt=sl(Te=me[gn])?Te(Fe):Te;for(var it in pt)Fe[it]=it==="className"?As(Fe[it],pt[it]):it==="style"?In(In({},Fe[it]),pt[it]):pt[it]}return oe.className&&(Fe.className=As(Fe.className,oe.className)),Fe}(G,D,ee),T=se.as||pe,Q={};for(var te in se)se[te]===void 0||te[0]==="$"||te==="as"||te==="theme"&&se.theme===ee||(te==="forwardedAs"?Q.as=se.forwardedAs:K&&!K(te,T)||(Q[te]=se[te]));var ie=function(me,oe){var je=zb(),Te=me.generateAndInjectStyles(oe,je.styleSheet,je.stylis);return Te}(F,se),ae=As(J,ye);return ie&&(ae+=" "+ie),se.className&&(ae+=" "+se.className),Q[jm(T)&&!g2.has(T)?"class":"className"]=ae,B&&(Q.ref=B),z.createElement(T,Q)}(R,O,j)}M.displayName=y;var R=tl.forwardRef(M);return R.attrs=v,R.componentStyle=E,R.displayName=y,R.shouldForwardProp=w,R.foldedComponentIds=a?As(o.foldedComponentIds,o.styledComponentId):"",R.styledComponentId=x,R.target=a?o.target:n,Object.defineProperty(R,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(O){this._foldedDefaultProps=a?function(j){for(var P=[],D=1;D<arguments.length;D++)P[D-1]=arguments[D];for(var B=0,G=P;B<G.length;B++)v0(j,G[B],!0);return j}({},o.defaultProps,O):O}}),yg(R,function(){return".".concat(R.styledComponentId)}),u&&w2(R,n,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),R}function Pb(n,e){for(var r=[n[0]],a=0,o=e.length;a<o;a+=1)r.push(e[a],n[a+1]);return r}var Lb=function(n){return Object.assign(n,{isCss:!0})};function uC(n){for(var e=[],r=1;r<arguments.length;r++)e[r-1]=arguments[r];if(sl(n)||Zu(n))return Lb(js(Pb(lh,zd([n],e,!0))));var a=n;return e.length===0&&a.length===1&&typeof a[0]=="string"?js(a):Lb(js(Pb(a,e)))}function b0(n,e,r){if(r===void 0&&(r=al),!e)throw vc(1,e);var a=function(o){for(var u=[],c=1;c<arguments.length;c++)u[c-1]=arguments[c];return n(e,r,uC.apply(void 0,zd([o],u,!1)))};return a.attrs=function(o){return b0(n,e,In(In({},r),{attrs:Array.prototype.concat(r.attrs,o).filter(Boolean)}))},a.withConfig=function(o){return b0(n,e,In(In({},r),o))},a}var D2=function(n){return b0(lC,n)},V=D2;g2.forEach(function(n){V[n]=D2(n)});const cC=V.div`
  width: 80%;
  height: 2px;
  margin: 10px auto 0;

  background: linear-gradient(
    90deg,
    transparent,
    ${({color:n})=>n==="gray"?"var(--primary-gray)":"var(--mauve)"},
    transparent
  );
`,j2=({color:n="primary"})=>b.jsx(cC,{color:n}),vg=z.createContext({});function xg(n){const e=z.useRef(null);return e.current===null&&(e.current=n()),e.current}const bg=typeof window<"u",k2=bg?z.useLayoutEffect:z.useEffect,uh=z.createContext(null),_g=z.createContext({transformPagePoint:n=>n,isStatic:!1,reducedMotion:"never"});class fC extends z.Component{getSnapshotBeforeUpdate(e){const r=this.props.childRef.current;if(r&&e.isPresent&&!this.props.isPresent){const a=r.offsetParent,o=a instanceof HTMLElement&&a.offsetWidth||0,u=this.props.sizeRef.current;u.height=r.offsetHeight||0,u.width=r.offsetWidth||0,u.top=r.offsetTop,u.left=r.offsetLeft,u.right=o-u.width-u.left}return null}componentDidUpdate(){}render(){return this.props.children}}function dC({children:n,isPresent:e,anchorX:r}){const a=z.useId(),o=z.useRef(null),u=z.useRef({width:0,height:0,top:0,left:0,right:0}),{nonce:c}=z.useContext(_g);return z.useInsertionEffect(()=>{const{width:f,height:h,top:p,left:g,right:y}=u.current;if(e||!o.current||!f||!h)return;const x=r==="left"?`left: ${g}`:`right: ${y}`;o.current.dataset.motionPopId=a;const v=document.createElement("style");return c&&(v.nonce=c),document.head.appendChild(v),v.sheet&&v.sheet.insertRule(`
          [data-motion-pop-id="${a}"] {
            position: absolute !important;
            width: ${f}px !important;
            height: ${h}px !important;
            ${x}px !important;
            top: ${p}px !important;
          }
        `),()=>{document.head.removeChild(v)}},[e]),b.jsx(fC,{isPresent:e,childRef:o,sizeRef:u,children:z.cloneElement(n,{ref:o})})}const hC=({children:n,initial:e,isPresent:r,onExitComplete:a,custom:o,presenceAffectsLayout:u,mode:c,anchorX:f})=>{const h=xg(pC),p=z.useId(),g=z.useCallback(x=>{h.set(x,!0);for(const v of h.values())if(!v)return;a&&a()},[h,a]),y=z.useMemo(()=>({id:p,initial:e,isPresent:r,custom:o,onExitComplete:g,register:x=>(h.set(x,!1),()=>h.delete(x))}),u?[Math.random(),g]:[r,g]);return z.useMemo(()=>{h.forEach((x,v)=>h.set(v,!1))},[r]),z.useEffect(()=>{!r&&!h.size&&a&&a()},[r]),c==="popLayout"&&(n=b.jsx(dC,{isPresent:r,anchorX:f,children:n})),b.jsx(uh.Provider,{value:y,children:n})};function pC(){return new Map}function O2(n=!0){const e=z.useContext(uh);if(e===null)return[!0,null];const{isPresent:r,onExitComplete:a,register:o}=e,u=z.useId();z.useEffect(()=>{if(n)return o(u)},[n]);const c=z.useCallback(()=>n&&a&&a(u),[u,a,n]);return!r&&a?[!1,c]:[!0]}const Lf=n=>n.key||"";function Bb(n){const e=[];return z.Children.forEach(n,r=>{z.isValidElement(r)&&e.push(r)}),e}const mC=({children:n,custom:e,initial:r=!0,onExitComplete:a,presenceAffectsLayout:o=!0,mode:u="sync",propagate:c=!1,anchorX:f="left"})=>{const[h,p]=O2(c),g=z.useMemo(()=>Bb(n),[n]),y=c&&!h?[]:g.map(Lf),x=z.useRef(!0),v=z.useRef(g),w=xg(()=>new Map),[S,C]=z.useState(g),[E,M]=z.useState(g);k2(()=>{x.current=!1,v.current=g;for(let j=0;j<E.length;j++){const P=Lf(E[j]);y.includes(P)?w.delete(P):w.get(P)!==!0&&w.set(P,!1)}},[E,y.length,y.join("-")]);const R=[];if(g!==S){let j=[...g];for(let P=0;P<E.length;P++){const D=E[P],B=Lf(D);y.includes(B)||(j.splice(P,0,D),R.push(D))}return u==="wait"&&R.length&&(j=R),M(Bb(j)),C(g),null}const{forceRender:O}=z.useContext(vg);return b.jsx(b.Fragment,{children:E.map(j=>{const P=Lf(j),D=c&&!h?!1:g===E||y.includes(P),B=()=>{if(w.has(P))w.set(P,!0);else return;let G=!0;w.forEach(F=>{F||(G=!1)}),G&&(O==null||O(),M(v.current),c&&(p==null||p()),a&&a())};return b.jsx(hC,{isPresent:D,initial:!x.current||r?void 0:!1,custom:e,presenceAffectsLayout:o,mode:u,onExitComplete:D?void 0:B,anchorX:f,children:j},P)})})};function wg(n,e){n.indexOf(e)===-1&&n.push(e)}function Sg(n,e){const r=n.indexOf(e);r>-1&&n.splice(r,1)}let z2=()=>{};const gC={useManualTiming:!1};function Tg(n){let e;return()=>(e===void 0&&(e=n()),e)}const Fi=n=>n,Wu=(n,e,r)=>{const a=e-n;return a===0?1:(r-n)/a};class Ag{constructor(){this.subscriptions=[]}add(e){return wg(this.subscriptions,e),()=>Sg(this.subscriptions,e)}notify(e,r,a){const o=this.subscriptions.length;if(o)if(o===1)this.subscriptions[0](e,r,a);else for(let u=0;u<o;u++){const c=this.subscriptions[u];c&&c(e,r,a)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const wr=n=>n*1e3,Sr=n=>n/1e3;function N2(n,e){return e?n*(1e3/e):0}const yC=Tg(()=>window.ScrollTimeline!==void 0);class vC{constructor(e){this.stop=()=>this.runAll("stop"),this.animations=e.filter(Boolean)}get finished(){return Promise.all(this.animations.map(e=>e.finished))}getAll(e){return this.animations[0][e]}setAll(e,r){for(let a=0;a<this.animations.length;a++)this.animations[a][e]=r}attachTimeline(e,r){const a=this.animations.map(o=>{if(yC()&&o.attachTimeline)return o.attachTimeline(e);if(typeof r=="function")return r(o)});return()=>{a.forEach((o,u)=>{o&&o(),this.animations[u].stop()})}}get time(){return this.getAll("time")}set time(e){this.setAll("time",e)}get speed(){return this.getAll("speed")}set speed(e){this.setAll("speed",e)}get startTime(){return this.getAll("startTime")}get duration(){let e=0;for(let r=0;r<this.animations.length;r++)e=Math.max(e,this.animations[r].duration);return e}runAll(e){this.animations.forEach(r=>r[e]())}flatten(){this.runAll("flatten")}play(){this.runAll("play")}pause(){this.runAll("pause")}cancel(){this.runAll("cancel")}complete(){this.runAll("complete")}}class xC extends vC{then(e,r){return this.finished.finally(e).then(()=>{})}}const Vb={value:null},Eg=n=>Array.isArray(n)&&typeof n[0]=="number",bC={};function _C(n,e){const r=Tg(n);return()=>bC[e]??r()}const Ju=_C(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),P2=(n,e,r=10)=>{let a="";const o=Math.max(Math.round(e/r),2);for(let u=0;u<o;u++)a+=n(u/(o-1))+", ";return`linear(${a.substring(0,a.length-2)})`},Su=([n,e,r,a])=>`cubic-bezier(${n}, ${e}, ${r}, ${a})`,_0={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:Su([0,.65,.55,1]),circOut:Su([.55,0,1,.45]),backIn:Su([.31,.01,.66,-.59]),backOut:Su([.33,1.53,.69,.99])};function L2(n,e){if(n)return typeof n=="function"&&Ju()?P2(n,e):Eg(n)?Su(n):Array.isArray(n)?n.map(r=>L2(r,e)||_0.easeOut):_0[n]}function wC(n,e,r,{delay:a=0,duration:o=300,repeat:u=0,repeatType:c="loop",ease:f="easeInOut",times:h}={},p=void 0){const g={[e]:r};h&&(g.offset=h);const y=L2(f,o);return Array.isArray(y)&&(g.easing=y),n.animate(g,{delay:a,duration:o,easing:Array.isArray(y)?"linear":y,fill:"both",iterations:u+1,direction:c==="reverse"?"alternate":"normal",pseudoElement:p})}function Cg(n){return typeof n=="function"&&"applyToOptions"in n}function Rg(n,e){return(n==null?void 0:n[e])??(n==null?void 0:n.default)??n}const Bd=2e4;function Mg(n){let e=0;const r=50;let a=n.next(e);for(;!a.done&&e<Bd;)e+=r,a=n.next(e);return e>=Bd?1/0:e}function SC(n,e=100,r){const a=r({...n,keyframes:[0,e]}),o=Math.min(Mg(a),Bd);return{type:"keyframes",ease:u=>a.next(o*u).value/e,duration:Sr(o)}}function B2(n){return!!(typeof n=="function"&&Ju()||!n||typeof n=="string"&&(n in _0||Ju())||Eg(n)||Array.isArray(n)&&n.every(B2))}function Ub(n,e){n.timeline=e,n.onfinish=null}const Bf=["read","resolveKeyframes","update","preRender","render","postRender"];function TC(n,e){let r=new Set,a=new Set,o=!1,u=!1;const c=new WeakSet;let f={delta:0,timestamp:0,isProcessing:!1},h=0;function p(y){c.has(y)&&(g.schedule(y),n()),h++,y(f)}const g={schedule:(y,x=!1,v=!1)=>{const S=v&&o?r:a;return x&&c.add(y),S.has(y)||S.add(y),y},cancel:y=>{a.delete(y),c.delete(y)},process:y=>{if(f=y,o){u=!0;return}o=!0,[r,a]=[a,r],r.forEach(p),e&&Vb.value&&Vb.value.frameloop[e].push(h),h=0,r.clear(),o=!1,u&&(u=!1,g.process(y))}};return g}const AC=40;function V2(n,e){let r=!1,a=!0;const o={delta:0,timestamp:0,isProcessing:!1},u=()=>r=!0,c=Bf.reduce((E,M)=>(E[M]=TC(u,e?M:void 0),E),{}),{read:f,resolveKeyframes:h,update:p,preRender:g,render:y,postRender:x}=c,v=()=>{const E=performance.now();r=!1,o.delta=a?1e3/60:Math.max(Math.min(E-o.timestamp,AC),1),o.timestamp=E,o.isProcessing=!0,f.process(o),h.process(o),p.process(o),g.process(o),y.process(o),x.process(o),o.isProcessing=!1,r&&e&&(a=!1,n(v))},w=()=>{r=!0,a=!0,o.isProcessing||n(v)};return{schedule:Bf.reduce((E,M)=>{const R=c[M];return E[M]=(O,j=!1,P=!1)=>(r||w(),R.schedule(O,j,P)),E},{}),cancel:E=>{for(let M=0;M<Bf.length;M++)c[Bf[M]].cancel(E)},state:o,steps:c}}const{schedule:ht,cancel:qa,state:hn,steps:Om}=V2(typeof requestAnimationFrame<"u"?requestAnimationFrame:Fi,!0),{schedule:Dg}=V2(queueMicrotask,!1);let bd;function EC(){bd=void 0}const Tr={now:()=>(bd===void 0&&Tr.set(hn.isProcessing||gC.useManualTiming?hn.timestamp:performance.now()),bd),set:n=>{bd=n,queueMicrotask(EC)}},rr={x:!1,y:!1};function U2(){return rr.x||rr.y}function CC(n){return n==="x"||n==="y"?rr[n]?null:(rr[n]=!0,()=>{rr[n]=!1}):rr.x||rr.y?null:(rr.x=rr.y=!0,()=>{rr.x=rr.y=!1})}function RC(n,e,r){if(n instanceof EventTarget)return[n];if(typeof n=="string"){const o=document.querySelectorAll(n);return o?Array.from(o):[]}return Array.from(n)}function H2(n,e){const r=RC(n),a=new AbortController,o={passive:!0,...e,signal:a.signal};return[r,o,()=>a.abort()]}function Hb(n){return!(n.pointerType==="touch"||U2())}function MC(n,e,r={}){const[a,o,u]=H2(n,r),c=f=>{if(!Hb(f))return;const{target:h}=f,p=e(h,f);if(typeof p!="function"||!h)return;const g=y=>{Hb(y)&&(p(y),h.removeEventListener("pointerleave",g))};h.addEventListener("pointerleave",g,o)};return a.forEach(f=>{f.addEventListener("pointerenter",c,o)}),u}const Y2=(n,e)=>e?n===e?!0:Y2(n,e.parentElement):!1,jg=n=>n.pointerType==="mouse"?typeof n.button!="number"||n.button<=0:n.isPrimary!==!1,DC=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function jC(n){return DC.has(n.tagName)||n.tabIndex!==-1}const Tu=new WeakSet;function Yb(n){return e=>{e.key==="Enter"&&n(e)}}function zm(n,e){n.dispatchEvent(new PointerEvent("pointer"+e,{isPrimary:!0,bubbles:!0}))}const kC=(n,e)=>{const r=n.currentTarget;if(!r)return;const a=Yb(()=>{if(Tu.has(r))return;zm(r,"down");const o=Yb(()=>{zm(r,"up")}),u=()=>zm(r,"cancel");r.addEventListener("keyup",o,e),r.addEventListener("blur",u,e)});r.addEventListener("keydown",a,e),r.addEventListener("blur",()=>r.removeEventListener("keydown",a),e)};function Gb(n){return jg(n)&&!U2()}function OC(n,e,r={}){const[a,o,u]=H2(n,r),c=f=>{const h=f.currentTarget;if(!Gb(f)||Tu.has(h))return;Tu.add(h);const p=e(h,f),g=(v,w)=>{window.removeEventListener("pointerup",y),window.removeEventListener("pointercancel",x),!(!Gb(v)||!Tu.has(h))&&(Tu.delete(h),typeof p=="function"&&p(v,{success:w}))},y=v=>{g(v,h===window||h===document||r.useGlobalTarget||Y2(h,v.target))},x=v=>{g(v,!1)};window.addEventListener("pointerup",y,o),window.addEventListener("pointercancel",x,o)};return a.forEach(f=>{(r.useGlobalTarget?window:f).addEventListener("pointerdown",c,o),f instanceof HTMLElement&&(f.addEventListener("focus",p=>kC(p,o)),!jC(f)&&!f.hasAttribute("tabindex")&&(f.tabIndex=0))}),u}const Xb=30,zC=n=>!isNaN(parseFloat(n));class NC{constructor(e,r={}){this.version="12.6.3",this.canTrackVelocity=null,this.events={},this.updateAndNotify=(a,o=!0)=>{const u=Tr.now();this.updatedAt!==u&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(a),this.current!==this.prev&&this.events.change&&this.events.change.notify(this.current),o&&this.events.renderRequest&&this.events.renderRequest.notify(this.current)},this.hasAnimated=!1,this.setCurrent(e),this.owner=r.owner}setCurrent(e){this.current=e,this.updatedAt=Tr.now(),this.canTrackVelocity===null&&e!==void 0&&(this.canTrackVelocity=zC(this.current))}setPrevFrameValue(e=this.current){this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt}onChange(e){return this.on("change",e)}on(e,r){this.events[e]||(this.events[e]=new Ag);const a=this.events[e].add(r);return e==="change"?()=>{a(),ht.read(()=>{this.events.change.getSize()||this.stop()})}:a}clearListeners(){for(const e in this.events)this.events[e].clear()}attach(e,r){this.passiveEffect=e,this.stopPassiveEffect=r}set(e,r=!0){!r||!this.passiveEffect?this.updateAndNotify(e,r):this.passiveEffect(e,this.updateAndNotify)}setWithVelocity(e,r,a){this.set(r),this.prev=void 0,this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt-a}jump(e,r=!0){this.updateAndNotify(e),this.prev=e,this.prevUpdatedAt=this.prevFrameValue=void 0,r&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const e=Tr.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||e-this.updatedAt>Xb)return 0;const r=Math.min(this.updatedAt-this.prevUpdatedAt,Xb);return N2(parseFloat(this.current)-parseFloat(this.prevFrameValue),r)}start(e){return this.stop(),new Promise(r=>{this.hasAnimated=!0,this.animation=e(r),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function ec(n,e){return new NC(n,e)}const G2=z.createContext({strict:!1}),qb={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},ol={};for(const n in qb)ol[n]={isEnabled:e=>qb[n].some(r=>!!e[r])};function PC(n){for(const e in n)ol[e]={...ol[e],...n[e]}}const LC=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function Vd(n){return n.startsWith("while")||n.startsWith("drag")&&n!=="draggable"||n.startsWith("layout")||n.startsWith("onTap")||n.startsWith("onPan")||n.startsWith("onLayout")||LC.has(n)}let X2=n=>!Vd(n);function BC(n){n&&(X2=e=>e.startsWith("on")?!Vd(e):n(e))}try{BC(require("@emotion/is-prop-valid").default)}catch{}function VC(n,e,r){const a={};for(const o in n)o==="values"&&typeof n.values=="object"||(X2(o)||r===!0&&Vd(o)||!e&&!Vd(o)||n.draggable&&o.startsWith("onDrag"))&&(a[o]=n[o]);return a}function UC(n){if(typeof Proxy>"u")return n;const e=new Map,r=(...a)=>n(...a);return new Proxy(r,{get:(a,o)=>o==="create"?n:(e.has(o)||e.set(o,n(o)),e.get(o))})}const ch=z.createContext({});function fh(n){return n!==null&&typeof n=="object"&&typeof n.start=="function"}function tc(n){return typeof n=="string"||Array.isArray(n)}const kg=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],Og=["initial",...kg];function dh(n){return fh(n.animate)||Og.some(e=>tc(n[e]))}function q2(n){return!!(dh(n)||n.variants)}function HC(n,e){if(dh(n)){const{initial:r,animate:a}=n;return{initial:r===!1||tc(r)?r:void 0,animate:tc(a)?a:void 0}}return n.inherit!==!1?e:{}}function YC(n){const{initial:e,animate:r}=HC(n,z.useContext(ch));return z.useMemo(()=>({initial:e,animate:r}),[Fb(e),Fb(r)])}function Fb(n){return Array.isArray(n)?n.join(" "):n}const GC=Symbol.for("motionComponentSymbol");function Uo(n){return n&&typeof n=="object"&&Object.prototype.hasOwnProperty.call(n,"current")}function XC(n,e,r){return z.useCallback(a=>{a&&n.onMount&&n.onMount(a),e&&(a?e.mount(a):e.unmount()),r&&(typeof r=="function"?r(a):Uo(r)&&(r.current=a))},[e])}const zg=n=>n.replace(/([a-z])([A-Z])/gu,"$1-$2").toLowerCase(),qC="framerAppearId",F2="data-"+zg(qC),$2=z.createContext({});function FC(n,e,r,a,o){var S,C;const{visualElement:u}=z.useContext(ch),c=z.useContext(G2),f=z.useContext(uh),h=z.useContext(_g).reducedMotion,p=z.useRef(null);a=a||c.renderer,!p.current&&a&&(p.current=a(n,{visualState:e,parent:u,props:r,presenceContext:f,blockInitialAnimation:f?f.initial===!1:!1,reducedMotionConfig:h}));const g=p.current,y=z.useContext($2);g&&!g.projection&&o&&(g.type==="html"||g.type==="svg")&&$C(p.current,r,o,y);const x=z.useRef(!1);z.useInsertionEffect(()=>{g&&x.current&&g.update(r,f)});const v=r[F2],w=z.useRef(!!v&&!((S=window.MotionHandoffIsComplete)!=null&&S.call(window,v))&&((C=window.MotionHasOptimisedAnimation)==null?void 0:C.call(window,v)));return k2(()=>{g&&(x.current=!0,window.MotionIsMounted=!0,g.updateFeatures(),Dg.render(g.render),w.current&&g.animationState&&g.animationState.animateChanges())}),z.useEffect(()=>{g&&(!w.current&&g.animationState&&g.animationState.animateChanges(),w.current&&(queueMicrotask(()=>{var E;(E=window.MotionHandoffMarkAsComplete)==null||E.call(window,v)}),w.current=!1))}),g}function $C(n,e,r,a){const{layoutId:o,layout:u,drag:c,dragConstraints:f,layoutScroll:h,layoutRoot:p}=e;n.projection=new r(n.latestValues,e["data-framer-portal-id"]?void 0:K2(n.parent)),n.projection.setOptions({layoutId:o,layout:u,alwaysMeasureLayout:!!c||f&&Uo(f),visualElement:n,animationType:typeof u=="string"?u:"both",initialPromotionConfig:a,layoutScroll:h,layoutRoot:p})}function K2(n){if(n)return n.options.allowProjection!==!1?n.projection:K2(n.parent)}function KC({preloadedFeatures:n,createVisualElement:e,useRender:r,useVisualState:a,Component:o}){n&&PC(n);function u(f,h){let p;const g={...z.useContext(_g),...f,layoutId:QC(f)},{isStatic:y}=g,x=YC(f),v=a(f,y);if(!y&&bg){IC();const w=ZC(g);p=w.MeasureLayout,x.visualElement=FC(o,v,g,e,w.ProjectionNode)}return b.jsxs(ch.Provider,{value:x,children:[p&&x.visualElement?b.jsx(p,{visualElement:x.visualElement,...g}):null,r(o,f,XC(v,x.visualElement,h),v,y,x.visualElement)]})}u.displayName=`motion.${typeof o=="string"?o:`create(${o.displayName??o.name??""})`}`;const c=z.forwardRef(u);return c[GC]=o,c}function QC({layoutId:n}){const e=z.useContext(vg).id;return e&&n!==void 0?e+"-"+n:n}function IC(n,e){z.useContext(G2).strict}function ZC(n){const{drag:e,layout:r}=ol;if(!e&&!r)return{};const a={...e,...r};return{MeasureLayout:e!=null&&e.isEnabled(n)||r!=null&&r.isEnabled(n)?a.MeasureLayout:void 0,ProjectionNode:a.ProjectionNode}}const Q2=n=>e=>typeof e=="string"&&e.startsWith(n),Ng=Q2("--"),WC=Q2("var(--"),Pg=n=>WC(n)?JC.test(n.split("/*")[0].trim()):!1,JC=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,nc={};function e4(n){for(const e in n)nc[e]=n[e],Ng(e)&&(nc[e].isCSSVariable=!0)}const gl=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],Xs=new Set(gl);function I2(n,{layout:e,layoutId:r}){return Xs.has(n)||n.startsWith("origin")||(e||r!==void 0)&&(!!nc[n]||n==="opacity")}const An=n=>!!(n&&n.getVelocity),Z2=(n,e)=>e&&typeof n=="number"?e.transform(n):n,aa=(n,e,r)=>r>e?e:r<n?n:r,yl={test:n=>typeof n=="number",parse:parseFloat,transform:n=>n},ic={...yl,transform:n=>aa(0,1,n)},Vf={...yl,default:1},xc=n=>({test:e=>typeof e=="string"&&e.endsWith(n)&&e.split(" ").length===1,parse:parseFloat,transform:e=>`${e}${n}`}),za=xc("deg"),Ar=xc("%"),_e=xc("px"),t4=xc("vh"),n4=xc("vw"),$b={...Ar,parse:n=>Ar.parse(n)/100,transform:n=>Ar.transform(n*100)},i4={borderWidth:_e,borderTopWidth:_e,borderRightWidth:_e,borderBottomWidth:_e,borderLeftWidth:_e,borderRadius:_e,radius:_e,borderTopLeftRadius:_e,borderTopRightRadius:_e,borderBottomRightRadius:_e,borderBottomLeftRadius:_e,width:_e,maxWidth:_e,height:_e,maxHeight:_e,top:_e,right:_e,bottom:_e,left:_e,padding:_e,paddingTop:_e,paddingRight:_e,paddingBottom:_e,paddingLeft:_e,margin:_e,marginTop:_e,marginRight:_e,marginBottom:_e,marginLeft:_e,backgroundPositionX:_e,backgroundPositionY:_e},r4={rotate:za,rotateX:za,rotateY:za,rotateZ:za,scale:Vf,scaleX:Vf,scaleY:Vf,scaleZ:Vf,skew:za,skewX:za,skewY:za,distance:_e,translateX:_e,translateY:_e,translateZ:_e,x:_e,y:_e,z:_e,perspective:_e,transformPerspective:_e,opacity:ic,originX:$b,originY:$b,originZ:_e},Kb={...yl,transform:Math.round},Lg={...i4,...r4,zIndex:Kb,size:_e,fillOpacity:ic,strokeOpacity:ic,numOctaves:Kb},a4={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},s4=gl.length;function o4(n,e,r){let a="",o=!0;for(let u=0;u<s4;u++){const c=gl[u],f=n[c];if(f===void 0)continue;let h=!0;if(typeof f=="number"?h=f===(c.startsWith("scale")?1:0):h=parseFloat(f)===0,!h||r){const p=Z2(f,Lg[c]);if(!h){o=!1;const g=a4[c]||c;a+=`${g}(${p}) `}r&&(e[c]=p)}}return a=a.trim(),r?a=r(e,o?"":a):o&&(a="none"),a}function Bg(n,e,r){const{style:a,vars:o,transformOrigin:u}=n;let c=!1,f=!1;for(const h in e){const p=e[h];if(Xs.has(h)){c=!0;continue}else if(Ng(h)){o[h]=p;continue}else{const g=Z2(p,Lg[h]);h.startsWith("origin")?(f=!0,u[h]=g):a[h]=g}}if(e.transform||(c||r?a.transform=o4(e,n.transform,r):a.transform&&(a.transform="none")),f){const{originX:h="50%",originY:p="50%",originZ:g=0}=u;a.transformOrigin=`${h} ${p} ${g}`}}const Vg=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function W2(n,e,r){for(const a in e)!An(e[a])&&!I2(a,r)&&(n[a]=e[a])}function l4({transformTemplate:n},e){return z.useMemo(()=>{const r=Vg();return Bg(r,e,n),Object.assign({},r.vars,r.style)},[e])}function u4(n,e){const r=n.style||{},a={};return W2(a,r,n),Object.assign(a,l4(n,e)),a}function c4(n,e){const r={},a=u4(n,e);return n.drag&&n.dragListener!==!1&&(r.draggable=!1,a.userSelect=a.WebkitUserSelect=a.WebkitTouchCallout="none",a.touchAction=n.drag===!0?"none":`pan-${n.drag==="x"?"y":"x"}`),n.tabIndex===void 0&&(n.onTap||n.onTapStart||n.whileTap)&&(r.tabIndex=0),r.style=a,r}const f4=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function Ug(n){return typeof n!="string"||n.includes("-")?!1:!!(f4.indexOf(n)>-1||/[A-Z]/u.test(n))}const d4={offset:"stroke-dashoffset",array:"stroke-dasharray"},h4={offset:"strokeDashoffset",array:"strokeDasharray"};function p4(n,e,r=1,a=0,o=!0){n.pathLength=1;const u=o?d4:h4;n[u.offset]=_e.transform(-a);const c=_e.transform(e),f=_e.transform(r);n[u.array]=`${c} ${f}`}function Qb(n,e,r){return typeof n=="string"?n:_e.transform(e+r*n)}function m4(n,e,r){const a=Qb(e,n.x,n.width),o=Qb(r,n.y,n.height);return`${a} ${o}`}function Hg(n,{attrX:e,attrY:r,attrScale:a,originX:o,originY:u,pathLength:c,pathSpacing:f=1,pathOffset:h=0,...p},g,y){if(Bg(n,p,y),g){n.style.viewBox&&(n.attrs.viewBox=n.style.viewBox);return}n.attrs=n.style,n.style={};const{attrs:x,style:v,dimensions:w}=n;x.transform&&(w&&(v.transform=x.transform),delete x.transform),w&&(o!==void 0||u!==void 0||v.transform)&&(v.transformOrigin=m4(w,o!==void 0?o:.5,u!==void 0?u:.5)),e!==void 0&&(x.x=e),r!==void 0&&(x.y=r),a!==void 0&&(x.scale=a),c!==void 0&&p4(x,c,f,h,!1)}const J2=()=>({...Vg(),attrs:{}}),Yg=n=>typeof n=="string"&&n.toLowerCase()==="svg";function g4(n,e,r,a){const o=z.useMemo(()=>{const u=J2();return Hg(u,e,Yg(a),n.transformTemplate),{...u.attrs,style:{...u.style}}},[e]);if(n.style){const u={};W2(u,n.style,n),o.style={...u,...o.style}}return o}function y4(n=!1){return(r,a,o,{latestValues:u},c)=>{const h=(Ug(r)?g4:c4)(a,u,c,r),p=VC(a,typeof r=="string",n),g=r!==z.Fragment?{...p,...h,ref:o}:{},{children:y}=a,x=z.useMemo(()=>An(y)?y.get():y,[y]);return z.createElement(r,{...g,children:x})}}function Ib(n){const e=[{},{}];return n==null||n.values.forEach((r,a)=>{e[0][a]=r.get(),e[1][a]=r.getVelocity()}),e}function Gg(n,e,r,a){if(typeof e=="function"){const[o,u]=Ib(a);e=e(r!==void 0?r:n.custom,o,u)}if(typeof e=="string"&&(e=n.variants&&n.variants[e]),typeof e=="function"){const[o,u]=Ib(a);e=e(r!==void 0?r:n.custom,o,u)}return e}const w0=n=>Array.isArray(n),v4=n=>!!(n&&typeof n=="object"&&n.mix&&n.toValue),x4=n=>w0(n)?n[n.length-1]||0:n;function _d(n){const e=An(n)?n.get():n;return v4(e)?e.toValue():e}function b4({scrapeMotionValuesFromProps:n,createRenderState:e,onUpdate:r},a,o,u){const c={latestValues:_4(a,o,u,n),renderState:e()};return r&&(c.onMount=f=>r({props:a,current:f,...c}),c.onUpdate=f=>r(f)),c}const eS=n=>(e,r)=>{const a=z.useContext(ch),o=z.useContext(uh),u=()=>b4(n,e,a,o);return r?u():xg(u)};function _4(n,e,r,a){const o={},u=a(n,{});for(const x in u)o[x]=_d(u[x]);let{initial:c,animate:f}=n;const h=dh(n),p=q2(n);e&&p&&!h&&n.inherit!==!1&&(c===void 0&&(c=e.initial),f===void 0&&(f=e.animate));let g=r?r.initial===!1:!1;g=g||c===!1;const y=g?f:c;if(y&&typeof y!="boolean"&&!fh(y)){const x=Array.isArray(y)?y:[y];for(let v=0;v<x.length;v++){const w=Gg(n,x[v]);if(w){const{transitionEnd:S,transition:C,...E}=w;for(const M in E){let R=E[M];if(Array.isArray(R)){const O=g?R.length-1:0;R=R[O]}R!==null&&(o[M]=R)}for(const M in S)o[M]=S[M]}}}return o}function Xg(n,e,r){var u;const{style:a}=n,o={};for(const c in a)(An(a[c])||e.style&&An(e.style[c])||I2(c,n)||((u=r==null?void 0:r.getValue(c))==null?void 0:u.liveStyle)!==void 0)&&(o[c]=a[c]);return o}const w4={useVisualState:eS({scrapeMotionValuesFromProps:Xg,createRenderState:Vg})};function tS(n,e){try{e.dimensions=typeof n.getBBox=="function"?n.getBBox():n.getBoundingClientRect()}catch{e.dimensions={x:0,y:0,width:0,height:0}}}function nS(n,{style:e,vars:r},a,o){Object.assign(n.style,e,o&&o.getProjectionStyles(a));for(const u in r)n.style.setProperty(u,r[u])}const iS=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function rS(n,e,r,a){nS(n,e,void 0,a);for(const o in e.attrs)n.setAttribute(iS.has(o)?o:zg(o),e.attrs[o])}function aS(n,e,r){const a=Xg(n,e,r);for(const o in n)if(An(n[o])||An(e[o])){const u=gl.indexOf(o)!==-1?"attr"+o.charAt(0).toUpperCase()+o.substring(1):o;a[u]=n[o]}return a}const Zb=["x","y","width","height","cx","cy","r"],S4={useVisualState:eS({scrapeMotionValuesFromProps:aS,createRenderState:J2,onUpdate:({props:n,prevProps:e,current:r,renderState:a,latestValues:o})=>{if(!r)return;let u=!!n.drag;if(!u){for(const f in o)if(Xs.has(f)){u=!0;break}}if(!u)return;let c=!e;if(e)for(let f=0;f<Zb.length;f++){const h=Zb[f];n[h]!==e[h]&&(c=!0)}c&&ht.read(()=>{tS(r,a),ht.render(()=>{Hg(a,o,Yg(r.tagName),n.transformTemplate),rS(r,a)})})}})};function T4(n,e){return function(a,{forwardMotionProps:o}={forwardMotionProps:!1}){const c={...Ug(a)?S4:w4,preloadedFeatures:n,useRender:y4(o),createVisualElement:e,Component:a};return KC(c)}}function rc(n,e,r){const a=n.getProps();return Gg(a,e,r!==void 0?r:a.custom,n)}const sS=new Set(["width","height","top","left","right","bottom",...gl]);function A4(n,e,r){n.hasValue(e)?n.getValue(e).set(r):n.addValue(e,ec(r))}function E4(n,e){const r=rc(n,e);let{transitionEnd:a={},transition:o={},...u}=r||{};u={...u,...a};for(const c in u){const f=x4(u[c]);A4(n,c,f)}}function C4(n){return!!(An(n)&&n.add)}function S0(n,e){const r=n.getValue("willChange");if(C4(r))return r.add(e)}function oS(n){return n.props[F2]}const lS=(n,e,r)=>(((1-3*r+3*e)*n+(3*r-6*e))*n+3*e)*n,R4=1e-7,M4=12;function D4(n,e,r,a,o){let u,c,f=0;do c=e+(r-e)/2,u=lS(c,a,o)-n,u>0?r=c:e=c;while(Math.abs(u)>R4&&++f<M4);return c}function bc(n,e,r,a){if(n===e&&r===a)return Fi;const o=u=>D4(u,0,1,n,r);return u=>u===0||u===1?u:lS(o(u),e,a)}const uS=n=>e=>e<=.5?n(2*e)/2:(2-n(2*(1-e)))/2,cS=n=>e=>1-n(1-e),fS=bc(.33,1.53,.69,.99),qg=cS(fS),dS=uS(qg),hS=n=>(n*=2)<1?.5*qg(n):.5*(2-Math.pow(2,-10*(n-1))),Fg=n=>1-Math.sin(Math.acos(n)),pS=cS(Fg),mS=uS(Fg),gS=n=>/^0[^.\s]+$/u.test(n);function j4(n){return typeof n=="number"?n===0:n!==null?n==="none"||n==="0"||gS(n):!0}const zu=n=>Math.round(n*1e5)/1e5,$g=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function k4(n){return n==null}const O4=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,Kg=(n,e)=>r=>!!(typeof r=="string"&&O4.test(r)&&r.startsWith(n)||e&&!k4(r)&&Object.prototype.hasOwnProperty.call(r,e)),yS=(n,e,r)=>a=>{if(typeof a!="string")return a;const[o,u,c,f]=a.match($g);return{[n]:parseFloat(o),[e]:parseFloat(u),[r]:parseFloat(c),alpha:f!==void 0?parseFloat(f):1}},z4=n=>aa(0,255,n),Nm={...yl,transform:n=>Math.round(z4(n))},Es={test:Kg("rgb","red"),parse:yS("red","green","blue"),transform:({red:n,green:e,blue:r,alpha:a=1})=>"rgba("+Nm.transform(n)+", "+Nm.transform(e)+", "+Nm.transform(r)+", "+zu(ic.transform(a))+")"};function N4(n){let e="",r="",a="",o="";return n.length>5?(e=n.substring(1,3),r=n.substring(3,5),a=n.substring(5,7),o=n.substring(7,9)):(e=n.substring(1,2),r=n.substring(2,3),a=n.substring(3,4),o=n.substring(4,5),e+=e,r+=r,a+=a,o+=o),{red:parseInt(e,16),green:parseInt(r,16),blue:parseInt(a,16),alpha:o?parseInt(o,16)/255:1}}const T0={test:Kg("#"),parse:N4,transform:Es.transform},Ho={test:Kg("hsl","hue"),parse:yS("hue","saturation","lightness"),transform:({hue:n,saturation:e,lightness:r,alpha:a=1})=>"hsla("+Math.round(n)+", "+Ar.transform(zu(e))+", "+Ar.transform(zu(r))+", "+zu(ic.transform(a))+")"},_n={test:n=>Es.test(n)||T0.test(n)||Ho.test(n),parse:n=>Es.test(n)?Es.parse(n):Ho.test(n)?Ho.parse(n):T0.parse(n),transform:n=>typeof n=="string"?n:n.hasOwnProperty("red")?Es.transform(n):Ho.transform(n)},P4=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function L4(n){var e,r;return isNaN(n)&&typeof n=="string"&&(((e=n.match($g))==null?void 0:e.length)||0)+(((r=n.match(P4))==null?void 0:r.length)||0)>0}const vS="number",xS="color",B4="var",V4="var(",Wb="${}",U4=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function ac(n){const e=n.toString(),r=[],a={color:[],number:[],var:[]},o=[];let u=0;const f=e.replace(U4,h=>(_n.test(h)?(a.color.push(u),o.push(xS),r.push(_n.parse(h))):h.startsWith(V4)?(a.var.push(u),o.push(B4),r.push(h)):(a.number.push(u),o.push(vS),r.push(parseFloat(h))),++u,Wb)).split(Wb);return{values:r,split:f,indexes:a,types:o}}function bS(n){return ac(n).values}function _S(n){const{split:e,types:r}=ac(n),a=e.length;return o=>{let u="";for(let c=0;c<a;c++)if(u+=e[c],o[c]!==void 0){const f=r[c];f===vS?u+=zu(o[c]):f===xS?u+=_n.transform(o[c]):u+=o[c]}return u}}const H4=n=>typeof n=="number"?0:n;function Y4(n){const e=bS(n);return _S(n)(e.map(H4))}const Fa={test:L4,parse:bS,createTransformer:_S,getAnimatableNone:Y4},G4=new Set(["brightness","contrast","saturate","opacity"]);function X4(n){const[e,r]=n.slice(0,-1).split("(");if(e==="drop-shadow")return n;const[a]=r.match($g)||[];if(!a)return n;const o=r.replace(a,"");let u=G4.has(e)?1:0;return a!==r&&(u*=100),e+"("+u+o+")"}const q4=/\b([a-z-]*)\(.*?\)/gu,A0={...Fa,getAnimatableNone:n=>{const e=n.match(q4);return e?e.map(X4).join(" "):n}},F4={...Lg,color:_n,backgroundColor:_n,outlineColor:_n,fill:_n,stroke:_n,borderColor:_n,borderTopColor:_n,borderRightColor:_n,borderBottomColor:_n,borderLeftColor:_n,filter:A0,WebkitFilter:A0},wS=n=>F4[n];function SS(n,e){let r=wS(n);return r!==A0&&(r=Fa),r.getAnimatableNone?r.getAnimatableNone(e):void 0}const $4=new Set(["auto","none","0"]);function K4(n,e,r){let a=0,o;for(;a<n.length&&!o;){const u=n[a];typeof u=="string"&&!$4.has(u)&&ac(u).values.length&&(o=n[a]),a++}if(o&&r)for(const u of e)n[u]=SS(r,o)}const Cs=n=>n*180/Math.PI,E0=n=>{const e=Cs(Math.atan2(n[1],n[0]));return C0(e)},Q4={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:n=>(Math.abs(n[0])+Math.abs(n[3]))/2,rotate:E0,rotateZ:E0,skewX:n=>Cs(Math.atan(n[1])),skewY:n=>Cs(Math.atan(n[2])),skew:n=>(Math.abs(n[1])+Math.abs(n[2]))/2},C0=n=>(n=n%360,n<0&&(n+=360),n),Jb=E0,e_=n=>Math.sqrt(n[0]*n[0]+n[1]*n[1]),t_=n=>Math.sqrt(n[4]*n[4]+n[5]*n[5]),I4={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:e_,scaleY:t_,scale:n=>(e_(n)+t_(n))/2,rotateX:n=>C0(Cs(Math.atan2(n[6],n[5]))),rotateY:n=>C0(Cs(Math.atan2(-n[2],n[0]))),rotateZ:Jb,rotate:Jb,skewX:n=>Cs(Math.atan(n[4])),skewY:n=>Cs(Math.atan(n[1])),skew:n=>(Math.abs(n[1])+Math.abs(n[4]))/2};function n_(n){return n.includes("scale")?1:0}function R0(n,e){if(!n||n==="none")return n_(e);const r=n.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);let a,o;if(r)a=I4,o=r;else{const f=n.match(/^matrix\(([-\d.e\s,]+)\)$/u);a=Q4,o=f}if(!o)return n_(e);const u=a[e],c=o[1].split(",").map(W4);return typeof u=="function"?u(c):c[u]}const Z4=(n,e)=>{const{transform:r="none"}=getComputedStyle(n);return R0(r,e)};function W4(n){return parseFloat(n.trim())}const i_=n=>n===yl||n===_e,J4=new Set(["x","y","z"]),eR=gl.filter(n=>!J4.has(n));function tR(n){const e=[];return eR.forEach(r=>{const a=n.getValue(r);a!==void 0&&(e.push([r,a.get()]),a.set(r.startsWith("scale")?1:0))}),e}const ll={width:({x:n},{paddingLeft:e="0",paddingRight:r="0"})=>n.max-n.min-parseFloat(e)-parseFloat(r),height:({y:n},{paddingTop:e="0",paddingBottom:r="0"})=>n.max-n.min-parseFloat(e)-parseFloat(r),top:(n,{top:e})=>parseFloat(e),left:(n,{left:e})=>parseFloat(e),bottom:({y:n},{top:e})=>parseFloat(e)+(n.max-n.min),right:({x:n},{left:e})=>parseFloat(e)+(n.max-n.min),x:(n,{transform:e})=>R0(e,"x"),y:(n,{transform:e})=>R0(e,"y")};ll.translateX=ll.x;ll.translateY=ll.y;const ks=new Set;let M0=!1,D0=!1;function TS(){if(D0){const n=Array.from(ks).filter(a=>a.needsMeasurement),e=new Set(n.map(a=>a.element)),r=new Map;e.forEach(a=>{const o=tR(a);o.length&&(r.set(a,o),a.render())}),n.forEach(a=>a.measureInitialState()),e.forEach(a=>{a.render();const o=r.get(a);o&&o.forEach(([u,c])=>{var f;(f=a.getValue(u))==null||f.set(c)})}),n.forEach(a=>a.measureEndState()),n.forEach(a=>{a.suspendedScrollY!==void 0&&window.scrollTo(0,a.suspendedScrollY)})}D0=!1,M0=!1,ks.forEach(n=>n.complete()),ks.clear()}function AS(){ks.forEach(n=>{n.readKeyframes(),n.needsMeasurement&&(D0=!0)})}function nR(){AS(),TS()}class Qg{constructor(e,r,a,o,u,c=!1){this.isComplete=!1,this.isAsync=!1,this.needsMeasurement=!1,this.isScheduled=!1,this.unresolvedKeyframes=[...e],this.onComplete=r,this.name=a,this.motionValue=o,this.element=u,this.isAsync=c}scheduleResolve(){this.isScheduled=!0,this.isAsync?(ks.add(this),M0||(M0=!0,ht.read(AS),ht.resolveKeyframes(TS))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:e,name:r,element:a,motionValue:o}=this;for(let u=0;u<e.length;u++)if(e[u]===null)if(u===0){const c=o==null?void 0:o.get(),f=e[e.length-1];if(c!==void 0)e[0]=c;else if(a&&r){const h=a.readValue(r,f);h!=null&&(e[0]=h)}e[0]===void 0&&(e[0]=f),o&&c===void 0&&o.set(e[0])}else e[u]=e[u-1]}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(){this.isComplete=!0,this.onComplete(this.unresolvedKeyframes,this.finalKeyframe),ks.delete(this)}cancel(){this.isComplete||(this.isScheduled=!1,ks.delete(this))}resume(){this.isComplete||this.scheduleResolve()}}const ES=n=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(n),iR=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function rR(n){const e=iR.exec(n);if(!e)return[,];const[,r,a,o]=e;return[`--${r??a}`,o]}function CS(n,e,r=1){const[a,o]=rR(n);if(!a)return;const u=window.getComputedStyle(e).getPropertyValue(a);if(u){const c=u.trim();return ES(c)?parseFloat(c):c}return Pg(o)?CS(o,e,r+1):o}const RS=n=>e=>e.test(n),aR={test:n=>n==="auto",parse:n=>n},MS=[yl,_e,Ar,za,n4,t4,aR],r_=n=>MS.find(RS(n));class DS extends Qg{constructor(e,r,a,o,u){super(e,r,a,o,u,!0)}readKeyframes(){const{unresolvedKeyframes:e,element:r,name:a}=this;if(!r||!r.current)return;super.readKeyframes();for(let h=0;h<e.length;h++){let p=e[h];if(typeof p=="string"&&(p=p.trim(),Pg(p))){const g=CS(p,r.current);g!==void 0&&(e[h]=g),h===e.length-1&&(this.finalKeyframe=p)}}if(this.resolveNoneKeyframes(),!sS.has(a)||e.length!==2)return;const[o,u]=e,c=r_(o),f=r_(u);if(c!==f)if(i_(c)&&i_(f))for(let h=0;h<e.length;h++){const p=e[h];typeof p=="string"&&(e[h]=parseFloat(p))}else this.needsMeasurement=!0}resolveNoneKeyframes(){const{unresolvedKeyframes:e,name:r}=this,a=[];for(let o=0;o<e.length;o++)j4(e[o])&&a.push(o);a.length&&K4(e,a,r)}measureInitialState(){const{element:e,unresolvedKeyframes:r,name:a}=this;if(!e||!e.current)return;a==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=ll[a](e.measureViewportBox(),window.getComputedStyle(e.current)),r[0]=this.measuredOrigin;const o=r[r.length-1];o!==void 0&&e.getValue(a,o).jump(o,!1)}measureEndState(){var f;const{element:e,name:r,unresolvedKeyframes:a}=this;if(!e||!e.current)return;const o=e.getValue(r);o&&o.jump(this.measuredOrigin,!1);const u=a.length-1,c=a[u];a[u]=ll[r](e.measureViewportBox(),window.getComputedStyle(e.current)),c!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=c),(f=this.removedTransforms)!=null&&f.length&&this.removedTransforms.forEach(([h,p])=>{e.getValue(h).set(p)}),this.resolveNoneKeyframes()}}const a_=(n,e)=>e==="zIndex"?!1:!!(typeof n=="number"||Array.isArray(n)||typeof n=="string"&&(Fa.test(n)||n==="0")&&!n.startsWith("url("));function sR(n){const e=n[0];if(n.length===1)return!0;for(let r=0;r<n.length;r++)if(n[r]!==e)return!0}function oR(n,e,r,a){const o=n[0];if(o===null)return!1;if(e==="display"||e==="visibility")return!0;const u=n[n.length-1],c=a_(o,e),f=a_(u,e);return!c||!f?!1:sR(n)||(r==="spring"||Cg(r))&&a}const lR=n=>n!==null;function hh(n,{repeat:e,repeatType:r="loop"},a){const o=n.filter(lR),u=e&&r!=="loop"&&e%2===1?0:o.length-1;return!u||a===void 0?o[u]:a}const uR=40;class jS{constructor({autoplay:e=!0,delay:r=0,type:a="keyframes",repeat:o=0,repeatDelay:u=0,repeatType:c="loop",...f}){this.isStopped=!1,this.hasAttemptedResolve=!1,this.createdAt=Tr.now(),this.options={autoplay:e,delay:r,type:a,repeat:o,repeatDelay:u,repeatType:c,...f},this.updateFinishedPromise()}calcStartTime(){return this.resolvedAt?this.resolvedAt-this.createdAt>uR?this.resolvedAt:this.createdAt:this.createdAt}get resolved(){return!this._resolved&&!this.hasAttemptedResolve&&nR(),this._resolved}onKeyframesResolved(e,r){this.resolvedAt=Tr.now(),this.hasAttemptedResolve=!0;const{name:a,type:o,velocity:u,delay:c,onComplete:f,onUpdate:h,isGenerator:p}=this.options;if(!p&&!oR(e,a,o,u))if(c)this.options.duration=0;else{h&&h(hh(e,this.options,r)),f&&f(),this.resolveFinishedPromise();return}const g=this.initPlayback(e,r);g!==!1&&(this._resolved={keyframes:e,finalKeyframe:r,...g},this.onPostResolved())}onPostResolved(){}then(e,r){return this.currentFinishedPromise.then(e,r)}flatten(){this.options.allowFlatten&&(this.options.type="keyframes",this.options.ease="linear")}updateFinishedPromise(){this.currentFinishedPromise=new Promise(e=>{this.resolveFinishedPromise=e})}}const Et=(n,e,r)=>n+(e-n)*r;function Pm(n,e,r){return r<0&&(r+=1),r>1&&(r-=1),r<1/6?n+(e-n)*6*r:r<1/2?e:r<2/3?n+(e-n)*(2/3-r)*6:n}function cR({hue:n,saturation:e,lightness:r,alpha:a}){n/=360,e/=100,r/=100;let o=0,u=0,c=0;if(!e)o=u=c=r;else{const f=r<.5?r*(1+e):r+e-r*e,h=2*r-f;o=Pm(h,f,n+1/3),u=Pm(h,f,n),c=Pm(h,f,n-1/3)}return{red:Math.round(o*255),green:Math.round(u*255),blue:Math.round(c*255),alpha:a}}function Ud(n,e){return r=>r>0?e:n}const Lm=(n,e,r)=>{const a=n*n,o=r*(e*e-a)+a;return o<0?0:Math.sqrt(o)},fR=[T0,Es,Ho],dR=n=>fR.find(e=>e.test(n));function s_(n){const e=dR(n);if(!e)return!1;let r=e.parse(n);return e===Ho&&(r=cR(r)),r}const o_=(n,e)=>{const r=s_(n),a=s_(e);if(!r||!a)return Ud(n,e);const o={...r};return u=>(o.red=Lm(r.red,a.red,u),o.green=Lm(r.green,a.green,u),o.blue=Lm(r.blue,a.blue,u),o.alpha=Et(r.alpha,a.alpha,u),Es.transform(o))},hR=(n,e)=>r=>e(n(r)),_c=(...n)=>n.reduce(hR),j0=new Set(["none","hidden"]);function pR(n,e){return j0.has(n)?r=>r<=0?n:e:r=>r>=1?e:n}function mR(n,e){return r=>Et(n,e,r)}function Ig(n){return typeof n=="number"?mR:typeof n=="string"?Pg(n)?Ud:_n.test(n)?o_:vR:Array.isArray(n)?kS:typeof n=="object"?_n.test(n)?o_:gR:Ud}function kS(n,e){const r=[...n],a=r.length,o=n.map((u,c)=>Ig(u)(u,e[c]));return u=>{for(let c=0;c<a;c++)r[c]=o[c](u);return r}}function gR(n,e){const r={...n,...e},a={};for(const o in r)n[o]!==void 0&&e[o]!==void 0&&(a[o]=Ig(n[o])(n[o],e[o]));return o=>{for(const u in a)r[u]=a[u](o);return r}}function yR(n,e){const r=[],a={color:0,var:0,number:0};for(let o=0;o<e.values.length;o++){const u=e.types[o],c=n.indexes[u][a[u]],f=n.values[c]??0;r[o]=f,a[u]++}return r}const vR=(n,e)=>{const r=Fa.createTransformer(e),a=ac(n),o=ac(e);return a.indexes.var.length===o.indexes.var.length&&a.indexes.color.length===o.indexes.color.length&&a.indexes.number.length>=o.indexes.number.length?j0.has(n)&&!o.values.length||j0.has(e)&&!a.values.length?pR(n,e):_c(kS(yR(a,o),o.values),r):Ud(n,e)};function OS(n,e,r){return typeof n=="number"&&typeof e=="number"&&typeof r=="number"?Et(n,e,r):Ig(n)(n,e)}const xR=5;function zS(n,e,r){const a=Math.max(e-xR,0);return N2(r-n(a),e-a)}const kt={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1},l_=.001;function bR({duration:n=kt.duration,bounce:e=kt.bounce,velocity:r=kt.velocity,mass:a=kt.mass}){let o,u,c=1-e;c=aa(kt.minDamping,kt.maxDamping,c),n=aa(kt.minDuration,kt.maxDuration,Sr(n)),c<1?(o=p=>{const g=p*c,y=g*n,x=g-r,v=k0(p,c),w=Math.exp(-y);return l_-x/v*w},u=p=>{const y=p*c*n,x=y*r+r,v=Math.pow(c,2)*Math.pow(p,2)*n,w=Math.exp(-y),S=k0(Math.pow(p,2),c);return(-o(p)+l_>0?-1:1)*((x-v)*w)/S}):(o=p=>{const g=Math.exp(-p*n),y=(p-r)*n+1;return-.001+g*y},u=p=>{const g=Math.exp(-p*n),y=(r-p)*(n*n);return g*y});const f=5/n,h=wR(o,u,f);if(n=wr(n),isNaN(h))return{stiffness:kt.stiffness,damping:kt.damping,duration:n};{const p=Math.pow(h,2)*a;return{stiffness:p,damping:c*2*Math.sqrt(a*p),duration:n}}}const _R=12;function wR(n,e,r){let a=r;for(let o=1;o<_R;o++)a=a-n(a)/e(a);return a}function k0(n,e){return n*Math.sqrt(1-e*e)}const SR=["duration","bounce"],TR=["stiffness","damping","mass"];function u_(n,e){return e.some(r=>n[r]!==void 0)}function AR(n){let e={velocity:kt.velocity,stiffness:kt.stiffness,damping:kt.damping,mass:kt.mass,isResolvedFromDuration:!1,...n};if(!u_(n,TR)&&u_(n,SR))if(n.visualDuration){const r=n.visualDuration,a=2*Math.PI/(r*1.2),o=a*a,u=2*aa(.05,1,1-(n.bounce||0))*Math.sqrt(o);e={...e,mass:kt.mass,stiffness:o,damping:u}}else{const r=bR(n);e={...e,...r,mass:kt.mass},e.isResolvedFromDuration=!0}return e}function Hd(n=kt.visualDuration,e=kt.bounce){const r=typeof n!="object"?{visualDuration:n,keyframes:[0,1],bounce:e}:n;let{restSpeed:a,restDelta:o}=r;const u=r.keyframes[0],c=r.keyframes[r.keyframes.length-1],f={done:!1,value:u},{stiffness:h,damping:p,mass:g,duration:y,velocity:x,isResolvedFromDuration:v}=AR({...r,velocity:-Sr(r.velocity||0)}),w=x||0,S=p/(2*Math.sqrt(h*g)),C=c-u,E=Sr(Math.sqrt(h/g)),M=Math.abs(C)<5;a||(a=M?kt.restSpeed.granular:kt.restSpeed.default),o||(o=M?kt.restDelta.granular:kt.restDelta.default);let R;if(S<1){const j=k0(E,S);R=P=>{const D=Math.exp(-S*E*P);return c-D*((w+S*E*C)/j*Math.sin(j*P)+C*Math.cos(j*P))}}else if(S===1)R=j=>c-Math.exp(-E*j)*(C+(w+E*C)*j);else{const j=E*Math.sqrt(S*S-1);R=P=>{const D=Math.exp(-S*E*P),B=Math.min(j*P,300);return c-D*((w+S*E*C)*Math.sinh(B)+j*C*Math.cosh(B))/j}}const O={calculatedDuration:v&&y||null,next:j=>{const P=R(j);if(v)f.done=j>=y;else{let D=0;S<1&&(D=j===0?wr(w):zS(R,j,P));const B=Math.abs(D)<=a,G=Math.abs(c-P)<=o;f.done=B&&G}return f.value=f.done?c:P,f},toString:()=>{const j=Math.min(Mg(O),Bd),P=P2(D=>O.next(j*D).value,j,30);return j+"ms "+P},toTransition:()=>{}};return O}Hd.applyToOptions=n=>{const e=SC(n,100,Hd);return n.ease=Ju()?e.ease:"easeOut",n.duration=wr(e.duration),n.type="keyframes",n};function c_({keyframes:n,velocity:e=0,power:r=.8,timeConstant:a=325,bounceDamping:o=10,bounceStiffness:u=500,modifyTarget:c,min:f,max:h,restDelta:p=.5,restSpeed:g}){const y=n[0],x={done:!1,value:y},v=B=>f!==void 0&&B<f||h!==void 0&&B>h,w=B=>f===void 0?h:h===void 0||Math.abs(f-B)<Math.abs(h-B)?f:h;let S=r*e;const C=y+S,E=c===void 0?C:c(C);E!==C&&(S=E-y);const M=B=>-S*Math.exp(-B/a),R=B=>E+M(B),O=B=>{const G=M(B),F=R(B);x.done=Math.abs(G)<=p,x.value=x.done?E:F};let j,P;const D=B=>{v(x.value)&&(j=B,P=Hd({keyframes:[x.value,w(x.value)],velocity:zS(R,B,x.value),damping:o,stiffness:u,restDelta:p,restSpeed:g}))};return D(0),{calculatedDuration:null,next:B=>{let G=!1;return!P&&j===void 0&&(G=!0,O(B),D(B)),j!==void 0&&B>=j?P.next(B-j):(!G&&O(B),x)}}}const ER=bc(.42,0,1,1),CR=bc(0,0,.58,1),NS=bc(.42,0,.58,1),RR=n=>Array.isArray(n)&&typeof n[0]!="number",MR={linear:Fi,easeIn:ER,easeInOut:NS,easeOut:CR,circIn:Fg,circInOut:mS,circOut:pS,backIn:qg,backInOut:dS,backOut:fS,anticipate:hS},f_=n=>{if(Eg(n)){z2(n.length===4);const[e,r,a,o]=n;return bc(e,r,a,o)}else if(typeof n=="string")return MR[n];return n};function DR(n,e,r){const a=[],o=r||OS,u=n.length-1;for(let c=0;c<u;c++){let f=o(n[c],n[c+1]);if(e){const h=Array.isArray(e)?e[c]||Fi:e;f=_c(h,f)}a.push(f)}return a}function jR(n,e,{clamp:r=!0,ease:a,mixer:o}={}){const u=n.length;if(z2(u===e.length),u===1)return()=>e[0];if(u===2&&e[0]===e[1])return()=>e[1];const c=n[0]===n[1];n[0]>n[u-1]&&(n=[...n].reverse(),e=[...e].reverse());const f=DR(e,a,o),h=f.length,p=g=>{if(c&&g<n[0])return e[0];let y=0;if(h>1)for(;y<n.length-2&&!(g<n[y+1]);y++);const x=Wu(n[y],n[y+1],g);return f[y](x)};return r?g=>p(aa(n[0],n[u-1],g)):p}function kR(n,e){const r=n[n.length-1];for(let a=1;a<=e;a++){const o=Wu(0,e,a);n.push(Et(r,1,o))}}function OR(n){const e=[0];return kR(e,n.length-1),e}function zR(n,e){return n.map(r=>r*e)}function NR(n,e){return n.map(()=>e||NS).splice(0,n.length-1)}function Yd({duration:n=300,keyframes:e,times:r,ease:a="easeInOut"}){const o=RR(a)?a.map(f_):f_(a),u={done:!1,value:e[0]},c=zR(r&&r.length===e.length?r:OR(e),n),f=jR(c,e,{ease:Array.isArray(o)?o:NR(e,o)});return{calculatedDuration:n,next:h=>(u.value=f(h),u.done=h>=n,u)}}const PR=n=>{const e=({timestamp:r})=>n(r);return{start:()=>ht.update(e,!0),stop:()=>qa(e),now:()=>hn.isProcessing?hn.timestamp:Tr.now()}},LR={decay:c_,inertia:c_,tween:Yd,keyframes:Yd,spring:Hd},BR=n=>n/100;class Zg extends jS{constructor(e){super(e),this.holdTime=null,this.cancelTime=null,this.currentTime=0,this.playbackSpeed=1,this.pendingPlayState="running",this.startTime=null,this.state="idle",this.stop=()=>{if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.teardown();const{onStop:h}=this.options;h&&h()};const{name:r,motionValue:a,element:o,keyframes:u}=this.options,c=(o==null?void 0:o.KeyframeResolver)||Qg,f=(h,p)=>this.onKeyframesResolved(h,p);this.resolver=new c(u,f,r,a,o),this.resolver.scheduleResolve()}flatten(){super.flatten(),this._resolved&&Object.assign(this._resolved,this.initPlayback(this._resolved.keyframes))}initPlayback(e){const{type:r="keyframes",repeat:a=0,repeatDelay:o=0,repeatType:u,velocity:c=0}=this.options,f=Cg(r)?r:LR[r]||Yd;let h,p;f!==Yd&&typeof e[0]!="number"&&(h=_c(BR,OS(e[0],e[1])),e=[0,100]);const g=f({...this.options,keyframes:e});u==="mirror"&&(p=f({...this.options,keyframes:[...e].reverse(),velocity:-c})),g.calculatedDuration===null&&(g.calculatedDuration=Mg(g));const{calculatedDuration:y}=g,x=y+o,v=x*(a+1)-o;return{generator:g,mirroredGenerator:p,mapPercentToKeyframes:h,calculatedDuration:y,resolvedDuration:x,totalDuration:v}}onPostResolved(){const{autoplay:e=!0}=this.options;this.play(),this.pendingPlayState==="paused"||!e?this.pause():this.state=this.pendingPlayState}tick(e,r=!1){const{resolved:a}=this;if(!a){const{keyframes:B}=this.options;return{done:!0,value:B[B.length-1]}}const{finalKeyframe:o,generator:u,mirroredGenerator:c,mapPercentToKeyframes:f,keyframes:h,calculatedDuration:p,totalDuration:g,resolvedDuration:y}=a;if(this.startTime===null)return u.next(0);const{delay:x,repeat:v,repeatType:w,repeatDelay:S,onUpdate:C}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,e):this.speed<0&&(this.startTime=Math.min(e-g/this.speed,this.startTime)),r?this.currentTime=e:this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=Math.round(e-this.startTime)*this.speed;const E=this.currentTime-x*(this.speed>=0?1:-1),M=this.speed>=0?E<0:E>g;this.currentTime=Math.max(E,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=g);let R=this.currentTime,O=u;if(v){const B=Math.min(this.currentTime,g)/y;let G=Math.floor(B),F=B%1;!F&&B>=1&&(F=1),F===1&&G--,G=Math.min(G,v+1),!!(G%2)&&(w==="reverse"?(F=1-F,S&&(F-=S/y)):w==="mirror"&&(O=c)),R=aa(0,1,F)*y}const j=M?{done:!1,value:h[0]}:O.next(R);f&&(j.value=f(j.value));let{done:P}=j;!M&&p!==null&&(P=this.speed>=0?this.currentTime>=g:this.currentTime<=0);const D=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&P);return D&&o!==void 0&&(j.value=hh(h,this.options,o)),C&&C(j.value),D&&this.finish(),j}get duration(){const{resolved:e}=this;return e?Sr(e.calculatedDuration):0}get time(){return Sr(this.currentTime)}set time(e){e=wr(e),this.currentTime=e,this.holdTime!==null||this.speed===0?this.holdTime=e:this.driver&&(this.startTime=this.driver.now()-e/this.speed)}get speed(){return this.playbackSpeed}set speed(e){const r=this.playbackSpeed!==e;this.playbackSpeed=e,r&&(this.time=Sr(this.currentTime))}play(){if(this.resolver.isScheduled||this.resolver.resume(),!this._resolved){this.pendingPlayState="running";return}if(this.isStopped)return;const{driver:e=PR,onPlay:r,startTime:a}=this.options;this.driver||(this.driver=e(u=>this.tick(u))),r&&r();const o=this.driver.now();this.holdTime!==null?this.startTime=o-this.holdTime:this.startTime?this.state==="finished"&&(this.startTime=o):this.startTime=a??this.calcStartTime(),this.state==="finished"&&this.updateFinishedPromise(),this.cancelTime=this.startTime,this.holdTime=null,this.state="running",this.driver.start()}pause(){if(!this._resolved){this.pendingPlayState="paused";return}this.state="paused",this.holdTime=this.currentTime??0}complete(){this.state!=="running"&&this.play(),this.pendingPlayState=this.state="finished",this.holdTime=null}finish(){this.teardown(),this.state="finished";const{onComplete:e}=this.options;e&&e()}cancel(){this.cancelTime!==null&&this.tick(this.cancelTime),this.teardown(),this.updateFinishedPromise()}teardown(){this.state="idle",this.stopDriver(),this.resolveFinishedPromise(),this.updateFinishedPromise(),this.startTime=this.cancelTime=null,this.resolver.cancel()}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(e){return this.startTime=0,this.tick(e,!0)}get finished(){return this.currentFinishedPromise}}const VR=new Set(["opacity","clipPath","filter","transform"]),UR=Tg(()=>Object.hasOwnProperty.call(Element.prototype,"animate")),Gd=10,HR=2e4;function YR(n){return Cg(n.type)||n.type==="spring"||!B2(n.ease)}function GR(n,e){const r=new Zg({...e,keyframes:n,repeat:0,delay:0,isGenerator:!0});let a={done:!1,value:n[0]};const o=[];let u=0;for(;!a.done&&u<HR;)a=r.sample(u),o.push(a.value),u+=Gd;return{times:void 0,keyframes:o,duration:u-Gd,ease:"linear"}}const PS={anticipate:hS,backInOut:dS,circInOut:mS};function XR(n){return n in PS}class d_ extends jS{constructor(e){super(e);const{name:r,motionValue:a,element:o,keyframes:u}=this.options;this.resolver=new DS(u,(c,f)=>this.onKeyframesResolved(c,f),r,a,o),this.resolver.scheduleResolve()}initPlayback(e,r){let{duration:a=300,times:o,ease:u,type:c,motionValue:f,name:h,startTime:p}=this.options;if(!f.owner||!f.owner.current)return!1;if(typeof u=="string"&&Ju()&&XR(u)&&(u=PS[u]),YR(this.options)){const{onComplete:y,onUpdate:x,motionValue:v,element:w,...S}=this.options,C=GR(e,S);e=C.keyframes,e.length===1&&(e[1]=e[0]),a=C.duration,o=C.times,u=C.ease,c="keyframes"}const g=wC(f.owner.current,h,e,{...this.options,duration:a,times:o,ease:u});return g.startTime=p??this.calcStartTime(),this.pendingTimeline?(Ub(g,this.pendingTimeline),this.pendingTimeline=void 0):g.onfinish=()=>{const{onComplete:y}=this.options;f.set(hh(e,this.options,r)),y&&y(),this.cancel(),this.resolveFinishedPromise()},{animation:g,duration:a,times:o,type:c,ease:u,keyframes:e}}get duration(){const{resolved:e}=this;if(!e)return 0;const{duration:r}=e;return Sr(r)}get time(){const{resolved:e}=this;if(!e)return 0;const{animation:r}=e;return Sr(r.currentTime||0)}set time(e){const{resolved:r}=this;if(!r)return;const{animation:a}=r;a.currentTime=wr(e)}get speed(){const{resolved:e}=this;if(!e)return 1;const{animation:r}=e;return r.playbackRate}get finished(){return this.resolved.animation.finished}set speed(e){const{resolved:r}=this;if(!r)return;const{animation:a}=r;a.playbackRate=e}get state(){const{resolved:e}=this;if(!e)return"idle";const{animation:r}=e;return r.playState}get startTime(){const{resolved:e}=this;if(!e)return null;const{animation:r}=e;return r.startTime}attachTimeline(e){if(!this._resolved)this.pendingTimeline=e;else{const{resolved:r}=this;if(!r)return Fi;const{animation:a}=r;Ub(a,e)}return Fi}play(){if(this.isStopped)return;const{resolved:e}=this;if(!e)return;const{animation:r}=e;r.playState==="finished"&&this.updateFinishedPromise(),r.play()}pause(){const{resolved:e}=this;if(!e)return;const{animation:r}=e;r.pause()}stop(){if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.resolveFinishedPromise(),this.updateFinishedPromise();const{resolved:e}=this;if(!e)return;const{animation:r,keyframes:a,duration:o,type:u,ease:c,times:f}=e;if(r.playState==="idle"||r.playState==="finished")return;if(this.time){const{motionValue:p,onUpdate:g,onComplete:y,element:x,...v}=this.options,w=new Zg({...v,keyframes:a,duration:o,type:u,ease:c,times:f,isGenerator:!0}),S=wr(this.time);p.setWithVelocity(w.sample(S-Gd).value,w.sample(S).value,Gd)}const{onStop:h}=this.options;h&&h(),this.cancel()}complete(){const{resolved:e}=this;e&&e.animation.finish()}cancel(){const{resolved:e}=this;e&&e.animation.cancel()}static supports(e){const{motionValue:r,name:a,repeatDelay:o,repeatType:u,damping:c,type:f}=e;if(!r||!r.owner||!(r.owner.current instanceof HTMLElement))return!1;const{onUpdate:h,transformTemplate:p}=r.owner.getProps();return UR()&&a&&VR.has(a)&&(a!=="transform"||!p)&&!h&&!o&&u!=="mirror"&&c!==0&&f!=="inertia"}}const qR={type:"spring",stiffness:500,damping:25,restSpeed:10},FR=n=>({type:"spring",stiffness:550,damping:n===0?2*Math.sqrt(550):30,restSpeed:10}),$R={type:"keyframes",duration:.8},KR={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},QR=(n,{keyframes:e})=>e.length>2?$R:Xs.has(n)?n.startsWith("scale")?FR(e[1]):qR:KR;function IR({when:n,delay:e,delayChildren:r,staggerChildren:a,staggerDirection:o,repeat:u,repeatType:c,repeatDelay:f,from:h,elapsed:p,...g}){return!!Object.keys(g).length}const Wg=(n,e,r,a={},o,u)=>c=>{const f=Rg(a,n)||{},h=f.delay||a.delay||0;let{elapsed:p=0}=a;p=p-wr(h);let g={keyframes:Array.isArray(r)?r:[null,r],ease:"easeOut",velocity:e.getVelocity(),...f,delay:-p,onUpdate:x=>{e.set(x),f.onUpdate&&f.onUpdate(x)},onComplete:()=>{c(),f.onComplete&&f.onComplete()},name:n,motionValue:e,element:u?void 0:o};IR(f)||(g={...g,...QR(n,g)}),g.duration&&(g.duration=wr(g.duration)),g.repeatDelay&&(g.repeatDelay=wr(g.repeatDelay)),g.from!==void 0&&(g.keyframes[0]=g.from);let y=!1;if((g.type===!1||g.duration===0&&!g.repeatDelay)&&(g.duration=0,g.delay===0&&(y=!0)),g.allowFlatten=!f.type&&!f.ease,y&&!u&&e.get()!==void 0){const x=hh(g.keyframes,f);if(x!==void 0)return ht.update(()=>{g.onUpdate(x),g.onComplete()}),new xC([])}return!u&&d_.supports(g)?new d_(g):new Zg(g)};function ZR({protectedKeys:n,needsAnimating:e},r){const a=n.hasOwnProperty(r)&&e[r]!==!0;return e[r]=!1,a}function LS(n,e,{delay:r=0,transitionOverride:a,type:o}={}){let{transition:u=n.getDefaultTransition(),transitionEnd:c,...f}=e;a&&(u=a);const h=[],p=o&&n.animationState&&n.animationState.getState()[o];for(const g in f){const y=n.getValue(g,n.latestValues[g]??null),x=f[g];if(x===void 0||p&&ZR(p,g))continue;const v={delay:r,...Rg(u||{},g)};let w=!1;if(window.MotionHandoffAnimation){const C=oS(n);if(C){const E=window.MotionHandoffAnimation(C,g,ht);E!==null&&(v.startTime=E,w=!0)}}S0(n,g),y.start(Wg(g,y,x,n.shouldReduceMotion&&sS.has(g)?{type:!1}:v,n,w));const S=y.animation;S&&h.push(S)}return c&&Promise.all(h).then(()=>{ht.update(()=>{c&&E4(n,c)})}),h}function O0(n,e,r={}){var h;const a=rc(n,e,r.type==="exit"?(h=n.presenceContext)==null?void 0:h.custom:void 0);let{transition:o=n.getDefaultTransition()||{}}=a||{};r.transitionOverride&&(o=r.transitionOverride);const u=a?()=>Promise.all(LS(n,a,r)):()=>Promise.resolve(),c=n.variantChildren&&n.variantChildren.size?(p=0)=>{const{delayChildren:g=0,staggerChildren:y,staggerDirection:x}=o;return WR(n,e,g+p,y,x,r)}:()=>Promise.resolve(),{when:f}=o;if(f){const[p,g]=f==="beforeChildren"?[u,c]:[c,u];return p().then(()=>g())}else return Promise.all([u(),c(r.delay)])}function WR(n,e,r=0,a=0,o=1,u){const c=[],f=(n.variantChildren.size-1)*a,h=o===1?(p=0)=>p*a:(p=0)=>f-p*a;return Array.from(n.variantChildren).sort(JR).forEach((p,g)=>{p.notify("AnimationStart",e),c.push(O0(p,e,{...u,delay:r+h(g)}).then(()=>p.notify("AnimationComplete",e)))}),Promise.all(c)}function JR(n,e){return n.sortNodePosition(e)}function eM(n,e,r={}){n.notify("AnimationStart",e);let a;if(Array.isArray(e)){const o=e.map(u=>O0(n,u,r));a=Promise.all(o)}else if(typeof e=="string")a=O0(n,e,r);else{const o=typeof e=="function"?rc(n,e,r.custom):e;a=Promise.all(LS(n,o,r))}return a.then(()=>{n.notify("AnimationComplete",e)})}function BS(n,e){if(!Array.isArray(e))return!1;const r=e.length;if(r!==n.length)return!1;for(let a=0;a<r;a++)if(e[a]!==n[a])return!1;return!0}const tM=Og.length;function VS(n){if(!n)return;if(!n.isControllingVariants){const r=n.parent?VS(n.parent)||{}:{};return n.props.initial!==void 0&&(r.initial=n.props.initial),r}const e={};for(let r=0;r<tM;r++){const a=Og[r],o=n.props[a];(tc(o)||o===!1)&&(e[a]=o)}return e}const nM=[...kg].reverse(),iM=kg.length;function rM(n){return e=>Promise.all(e.map(({animation:r,options:a})=>eM(n,r,a)))}function aM(n){let e=rM(n),r=h_(),a=!0;const o=h=>(p,g)=>{var x;const y=rc(n,g,h==="exit"?(x=n.presenceContext)==null?void 0:x.custom:void 0);if(y){const{transition:v,transitionEnd:w,...S}=y;p={...p,...S,...w}}return p};function u(h){e=h(n)}function c(h){const{props:p}=n,g=VS(n.parent)||{},y=[],x=new Set;let v={},w=1/0;for(let C=0;C<iM;C++){const E=nM[C],M=r[E],R=p[E]!==void 0?p[E]:g[E],O=tc(R),j=E===h?M.isActive:null;j===!1&&(w=C);let P=R===g[E]&&R!==p[E]&&O;if(P&&a&&n.manuallyAnimateOnMount&&(P=!1),M.protectedKeys={...v},!M.isActive&&j===null||!R&&!M.prevProp||fh(R)||typeof R=="boolean")continue;const D=sM(M.prevProp,R);let B=D||E===h&&M.isActive&&!P&&O||C>w&&O,G=!1;const F=Array.isArray(R)?R:[R];let re=F.reduce(o(E),{});j===!1&&(re={});const{prevResolvedValues:J={}}=M,ye={...J,...re},pe=K=>{B=!0,x.has(K)&&(G=!0,x.delete(K)),M.needsAnimating[K]=!0;const ee=n.getValue(K);ee&&(ee.liveStyle=!1)};for(const K in ye){const ee=re[K],se=J[K];if(v.hasOwnProperty(K))continue;let T=!1;w0(ee)&&w0(se)?T=!BS(ee,se):T=ee!==se,T?ee!=null?pe(K):x.add(K):ee!==void 0&&x.has(K)?pe(K):M.protectedKeys[K]=!0}M.prevProp=R,M.prevResolvedValues=re,M.isActive&&(v={...v,...re}),a&&n.blockInitialAnimation&&(B=!1),B&&(!(P&&D)||G)&&y.push(...F.map(K=>({animation:K,options:{type:E}})))}if(x.size){const C={};if(typeof p.initial!="boolean"){const E=rc(n,Array.isArray(p.initial)?p.initial[0]:p.initial);E&&E.transition&&(C.transition=E.transition)}x.forEach(E=>{const M=n.getBaseTarget(E),R=n.getValue(E);R&&(R.liveStyle=!0),C[E]=M??null}),y.push({animation:C})}let S=!!y.length;return a&&(p.initial===!1||p.initial===p.animate)&&!n.manuallyAnimateOnMount&&(S=!1),a=!1,S?e(y):Promise.resolve()}function f(h,p){var y;if(r[h].isActive===p)return Promise.resolve();(y=n.variantChildren)==null||y.forEach(x=>{var v;return(v=x.animationState)==null?void 0:v.setActive(h,p)}),r[h].isActive=p;const g=c(h);for(const x in r)r[x].protectedKeys={};return g}return{animateChanges:c,setActive:f,setAnimateFunction:u,getState:()=>r,reset:()=>{r=h_(),a=!0}}}function sM(n,e){return typeof e=="string"?e!==n:Array.isArray(e)?!BS(e,n):!1}function vs(n=!1){return{isActive:n,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function h_(){return{animate:vs(!0),whileInView:vs(),whileHover:vs(),whileTap:vs(),whileDrag:vs(),whileFocus:vs(),exit:vs()}}class Za{constructor(e){this.isMounted=!1,this.node=e}update(){}}class oM extends Za{constructor(e){super(e),e.animationState||(e.animationState=aM(e))}updateAnimationControlsSubscription(){const{animate:e}=this.node.getProps();fh(e)&&(this.unmountControls=e.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:e}=this.node.getProps(),{animate:r}=this.node.prevProps||{};e!==r&&this.updateAnimationControlsSubscription()}unmount(){var e;this.node.animationState.reset(),(e=this.unmountControls)==null||e.call(this)}}let lM=0;class uM extends Za{constructor(){super(...arguments),this.id=lM++}update(){if(!this.node.presenceContext)return;const{isPresent:e,onExitComplete:r}=this.node.presenceContext,{isPresent:a}=this.node.prevPresenceContext||{};if(!this.node.animationState||e===a)return;const o=this.node.animationState.setActive("exit",!e);r&&!e&&o.then(()=>{r(this.id)})}mount(){const{register:e,onExitComplete:r}=this.node.presenceContext||{};r&&r(this.id),e&&(this.unmount=e(this.id))}unmount(){}}const cM={animation:{Feature:oM},exit:{Feature:uM}};function sc(n,e,r,a={passive:!0}){return n.addEventListener(e,r,a),()=>n.removeEventListener(e,r)}function wc(n){return{point:{x:n.pageX,y:n.pageY}}}const fM=n=>e=>jg(e)&&n(e,wc(e));function Nu(n,e,r,a){return sc(n,e,fM(r),a)}function US({top:n,left:e,right:r,bottom:a}){return{x:{min:e,max:r},y:{min:n,max:a}}}function dM({x:n,y:e}){return{top:e.min,right:n.max,bottom:e.max,left:n.min}}function hM(n,e){if(!e)return n;const r=e({x:n.left,y:n.top}),a=e({x:n.right,y:n.bottom});return{top:r.y,left:r.x,bottom:a.y,right:a.x}}const HS=1e-4,pM=1-HS,mM=1+HS,YS=.01,gM=0-YS,yM=0+YS;function Vn(n){return n.max-n.min}function vM(n,e,r){return Math.abs(n-e)<=r}function p_(n,e,r,a=.5){n.origin=a,n.originPoint=Et(e.min,e.max,n.origin),n.scale=Vn(r)/Vn(e),n.translate=Et(r.min,r.max,n.origin)-n.originPoint,(n.scale>=pM&&n.scale<=mM||isNaN(n.scale))&&(n.scale=1),(n.translate>=gM&&n.translate<=yM||isNaN(n.translate))&&(n.translate=0)}function Pu(n,e,r,a){p_(n.x,e.x,r.x,a?a.originX:void 0),p_(n.y,e.y,r.y,a?a.originY:void 0)}function m_(n,e,r){n.min=r.min+e.min,n.max=n.min+Vn(e)}function xM(n,e,r){m_(n.x,e.x,r.x),m_(n.y,e.y,r.y)}function g_(n,e,r){n.min=e.min-r.min,n.max=n.min+Vn(e)}function Lu(n,e,r){g_(n.x,e.x,r.x),g_(n.y,e.y,r.y)}const y_=()=>({translate:0,scale:1,origin:0,originPoint:0}),Yo=()=>({x:y_(),y:y_()}),v_=()=>({min:0,max:0}),Lt=()=>({x:v_(),y:v_()});function Hi(n){return[n("x"),n("y")]}function Bm(n){return n===void 0||n===1}function z0({scale:n,scaleX:e,scaleY:r}){return!Bm(n)||!Bm(e)||!Bm(r)}function _s(n){return z0(n)||GS(n)||n.z||n.rotate||n.rotateX||n.rotateY||n.skewX||n.skewY}function GS(n){return x_(n.x)||x_(n.y)}function x_(n){return n&&n!=="0%"}function Xd(n,e,r){const a=n-r,o=e*a;return r+o}function b_(n,e,r,a,o){return o!==void 0&&(n=Xd(n,o,a)),Xd(n,r,a)+e}function N0(n,e=0,r=1,a,o){n.min=b_(n.min,e,r,a,o),n.max=b_(n.max,e,r,a,o)}function XS(n,{x:e,y:r}){N0(n.x,e.translate,e.scale,e.originPoint),N0(n.y,r.translate,r.scale,r.originPoint)}const __=.999999999999,w_=1.0000000000001;function bM(n,e,r,a=!1){const o=r.length;if(!o)return;e.x=e.y=1;let u,c;for(let f=0;f<o;f++){u=r[f],c=u.projectionDelta;const{visualElement:h}=u.options;h&&h.props.style&&h.props.style.display==="contents"||(a&&u.options.layoutScroll&&u.scroll&&u!==u.root&&Xo(n,{x:-u.scroll.offset.x,y:-u.scroll.offset.y}),c&&(e.x*=c.x.scale,e.y*=c.y.scale,XS(n,c)),a&&_s(u.latestValues)&&Xo(n,u.latestValues))}e.x<w_&&e.x>__&&(e.x=1),e.y<w_&&e.y>__&&(e.y=1)}function Go(n,e){n.min=n.min+e,n.max=n.max+e}function S_(n,e,r,a,o=.5){const u=Et(n.min,n.max,o);N0(n,e,r,u,a)}function Xo(n,e){S_(n.x,e.x,e.scaleX,e.scale,e.originX),S_(n.y,e.y,e.scaleY,e.scale,e.originY)}function qS(n,e){return US(hM(n.getBoundingClientRect(),e))}function _M(n,e,r){const a=qS(n,r),{scroll:o}=e;return o&&(Go(a.x,o.offset.x),Go(a.y,o.offset.y)),a}const FS=({current:n})=>n?n.ownerDocument.defaultView:null,T_=(n,e)=>Math.abs(n-e);function wM(n,e){const r=T_(n.x,e.x),a=T_(n.y,e.y);return Math.sqrt(r**2+a**2)}class $S{constructor(e,r,{transformPagePoint:a,contextWindow:o,dragSnapToOrigin:u=!1}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const y=Um(this.lastMoveEventInfo,this.history),x=this.startEvent!==null,v=wM(y.offset,{x:0,y:0})>=3;if(!x&&!v)return;const{point:w}=y,{timestamp:S}=hn;this.history.push({...w,timestamp:S});const{onStart:C,onMove:E}=this.handlers;x||(C&&C(this.lastMoveEvent,y),this.startEvent=this.lastMoveEvent),E&&E(this.lastMoveEvent,y)},this.handlePointerMove=(y,x)=>{this.lastMoveEvent=y,this.lastMoveEventInfo=Vm(x,this.transformPagePoint),ht.update(this.updatePoint,!0)},this.handlePointerUp=(y,x)=>{this.end();const{onEnd:v,onSessionEnd:w,resumeAnimation:S}=this.handlers;if(this.dragSnapToOrigin&&S&&S(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const C=Um(y.type==="pointercancel"?this.lastMoveEventInfo:Vm(x,this.transformPagePoint),this.history);this.startEvent&&v&&v(y,C),w&&w(y,C)},!jg(e))return;this.dragSnapToOrigin=u,this.handlers=r,this.transformPagePoint=a,this.contextWindow=o||window;const c=wc(e),f=Vm(c,this.transformPagePoint),{point:h}=f,{timestamp:p}=hn;this.history=[{...h,timestamp:p}];const{onSessionStart:g}=r;g&&g(e,Um(f,this.history)),this.removeListeners=_c(Nu(this.contextWindow,"pointermove",this.handlePointerMove),Nu(this.contextWindow,"pointerup",this.handlePointerUp),Nu(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(e){this.handlers=e}end(){this.removeListeners&&this.removeListeners(),qa(this.updatePoint)}}function Vm(n,e){return e?{point:e(n.point)}:n}function A_(n,e){return{x:n.x-e.x,y:n.y-e.y}}function Um({point:n},e){return{point:n,delta:A_(n,KS(e)),offset:A_(n,SM(e)),velocity:TM(e,.1)}}function SM(n){return n[0]}function KS(n){return n[n.length-1]}function TM(n,e){if(n.length<2)return{x:0,y:0};let r=n.length-1,a=null;const o=KS(n);for(;r>=0&&(a=n[r],!(o.timestamp-a.timestamp>wr(e)));)r--;if(!a)return{x:0,y:0};const u=Sr(o.timestamp-a.timestamp);if(u===0)return{x:0,y:0};const c={x:(o.x-a.x)/u,y:(o.y-a.y)/u};return c.x===1/0&&(c.x=0),c.y===1/0&&(c.y=0),c}function AM(n,{min:e,max:r},a){return e!==void 0&&n<e?n=a?Et(e,n,a.min):Math.max(n,e):r!==void 0&&n>r&&(n=a?Et(r,n,a.max):Math.min(n,r)),n}function E_(n,e,r){return{min:e!==void 0?n.min+e:void 0,max:r!==void 0?n.max+r-(n.max-n.min):void 0}}function EM(n,{top:e,left:r,bottom:a,right:o}){return{x:E_(n.x,r,o),y:E_(n.y,e,a)}}function C_(n,e){let r=e.min-n.min,a=e.max-n.max;return e.max-e.min<n.max-n.min&&([r,a]=[a,r]),{min:r,max:a}}function CM(n,e){return{x:C_(n.x,e.x),y:C_(n.y,e.y)}}function RM(n,e){let r=.5;const a=Vn(n),o=Vn(e);return o>a?r=Wu(e.min,e.max-a,n.min):a>o&&(r=Wu(n.min,n.max-o,e.min)),aa(0,1,r)}function MM(n,e){const r={};return e.min!==void 0&&(r.min=e.min-n.min),e.max!==void 0&&(r.max=e.max-n.min),r}const P0=.35;function DM(n=P0){return n===!1?n=0:n===!0&&(n=P0),{x:R_(n,"left","right"),y:R_(n,"top","bottom")}}function R_(n,e,r){return{min:M_(n,e),max:M_(n,r)}}function M_(n,e){return typeof n=="number"?n:n[e]||0}const jM=new WeakMap;class kM{constructor(e){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=Lt(),this.visualElement=e}start(e,{snapToCursor:r=!1}={}){const{presenceContext:a}=this.visualElement;if(a&&a.isPresent===!1)return;const o=g=>{const{dragSnapToOrigin:y}=this.getProps();y?this.pauseAnimation():this.stopAnimation(),r&&this.snapToCursor(wc(g).point)},u=(g,y)=>{const{drag:x,dragPropagation:v,onDragStart:w}=this.getProps();if(x&&!v&&(this.openDragLock&&this.openDragLock(),this.openDragLock=CC(x),!this.openDragLock))return;this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),Hi(C=>{let E=this.getAxisMotionValue(C).get()||0;if(Ar.test(E)){const{projection:M}=this.visualElement;if(M&&M.layout){const R=M.layout.layoutBox[C];R&&(E=Vn(R)*(parseFloat(E)/100))}}this.originPoint[C]=E}),w&&ht.postRender(()=>w(g,y)),S0(this.visualElement,"transform");const{animationState:S}=this.visualElement;S&&S.setActive("whileDrag",!0)},c=(g,y)=>{const{dragPropagation:x,dragDirectionLock:v,onDirectionLock:w,onDrag:S}=this.getProps();if(!x&&!this.openDragLock)return;const{offset:C}=y;if(v&&this.currentDirection===null){this.currentDirection=OM(C),this.currentDirection!==null&&w&&w(this.currentDirection);return}this.updateAxis("x",y.point,C),this.updateAxis("y",y.point,C),this.visualElement.render(),S&&S(g,y)},f=(g,y)=>this.stop(g,y),h=()=>Hi(g=>{var y;return this.getAnimationState(g)==="paused"&&((y=this.getAxisMotionValue(g).animation)==null?void 0:y.play())}),{dragSnapToOrigin:p}=this.getProps();this.panSession=new $S(e,{onSessionStart:o,onStart:u,onMove:c,onSessionEnd:f,resumeAnimation:h},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:p,contextWindow:FS(this.visualElement)})}stop(e,r){const a=this.isDragging;if(this.cancel(),!a)return;const{velocity:o}=r;this.startAnimation(o);const{onDragEnd:u}=this.getProps();u&&ht.postRender(()=>u(e,r))}cancel(){this.isDragging=!1;const{projection:e,animationState:r}=this.visualElement;e&&(e.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:a}=this.getProps();!a&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),r&&r.setActive("whileDrag",!1)}updateAxis(e,r,a){const{drag:o}=this.getProps();if(!a||!Uf(e,o,this.currentDirection))return;const u=this.getAxisMotionValue(e);let c=this.originPoint[e]+a[e];this.constraints&&this.constraints[e]&&(c=AM(c,this.constraints[e],this.elastic[e])),u.set(c)}resolveConstraints(){var u;const{dragConstraints:e,dragElastic:r}=this.getProps(),a=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(u=this.visualElement.projection)==null?void 0:u.layout,o=this.constraints;e&&Uo(e)?this.constraints||(this.constraints=this.resolveRefConstraints()):e&&a?this.constraints=EM(a.layoutBox,e):this.constraints=!1,this.elastic=DM(r),o!==this.constraints&&a&&this.constraints&&!this.hasMutatedConstraints&&Hi(c=>{this.constraints!==!1&&this.getAxisMotionValue(c)&&(this.constraints[c]=MM(a.layoutBox[c],this.constraints[c]))})}resolveRefConstraints(){const{dragConstraints:e,onMeasureDragConstraints:r}=this.getProps();if(!e||!Uo(e))return!1;const a=e.current,{projection:o}=this.visualElement;if(!o||!o.layout)return!1;const u=_M(a,o.root,this.visualElement.getTransformPagePoint());let c=CM(o.layout.layoutBox,u);if(r){const f=r(dM(c));this.hasMutatedConstraints=!!f,f&&(c=US(f))}return c}startAnimation(e){const{drag:r,dragMomentum:a,dragElastic:o,dragTransition:u,dragSnapToOrigin:c,onDragTransitionEnd:f}=this.getProps(),h=this.constraints||{},p=Hi(g=>{if(!Uf(g,r,this.currentDirection))return;let y=h&&h[g]||{};c&&(y={min:0,max:0});const x=o?200:1e6,v=o?40:1e7,w={type:"inertia",velocity:a?e[g]:0,bounceStiffness:x,bounceDamping:v,timeConstant:750,restDelta:1,restSpeed:10,...u,...y};return this.startAxisValueAnimation(g,w)});return Promise.all(p).then(f)}startAxisValueAnimation(e,r){const a=this.getAxisMotionValue(e);return S0(this.visualElement,e),a.start(Wg(e,a,0,r,this.visualElement,!1))}stopAnimation(){Hi(e=>this.getAxisMotionValue(e).stop())}pauseAnimation(){Hi(e=>{var r;return(r=this.getAxisMotionValue(e).animation)==null?void 0:r.pause()})}getAnimationState(e){var r;return(r=this.getAxisMotionValue(e).animation)==null?void 0:r.state}getAxisMotionValue(e){const r=`_drag${e.toUpperCase()}`,a=this.visualElement.getProps(),o=a[r];return o||this.visualElement.getValue(e,(a.initial?a.initial[e]:void 0)||0)}snapToCursor(e){Hi(r=>{const{drag:a}=this.getProps();if(!Uf(r,a,this.currentDirection))return;const{projection:o}=this.visualElement,u=this.getAxisMotionValue(r);if(o&&o.layout){const{min:c,max:f}=o.layout.layoutBox[r];u.set(e[r]-Et(c,f,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:e,dragConstraints:r}=this.getProps(),{projection:a}=this.visualElement;if(!Uo(r)||!a||!this.constraints)return;this.stopAnimation();const o={x:0,y:0};Hi(c=>{const f=this.getAxisMotionValue(c);if(f&&this.constraints!==!1){const h=f.get();o[c]=RM({min:h,max:h},this.constraints[c])}});const{transformTemplate:u}=this.visualElement.getProps();this.visualElement.current.style.transform=u?u({},""):"none",a.root&&a.root.updateScroll(),a.updateLayout(),this.resolveConstraints(),Hi(c=>{if(!Uf(c,e,null))return;const f=this.getAxisMotionValue(c),{min:h,max:p}=this.constraints[c];f.set(Et(h,p,o[c]))})}addListeners(){if(!this.visualElement.current)return;jM.set(this.visualElement,this);const e=this.visualElement.current,r=Nu(e,"pointerdown",h=>{const{drag:p,dragListener:g=!0}=this.getProps();p&&g&&this.start(h)}),a=()=>{const{dragConstraints:h}=this.getProps();Uo(h)&&h.current&&(this.constraints=this.resolveRefConstraints())},{projection:o}=this.visualElement,u=o.addEventListener("measure",a);o&&!o.layout&&(o.root&&o.root.updateScroll(),o.updateLayout()),ht.read(a);const c=sc(window,"resize",()=>this.scalePositionWithinConstraints()),f=o.addEventListener("didUpdate",({delta:h,hasLayoutChanged:p})=>{this.isDragging&&p&&(Hi(g=>{const y=this.getAxisMotionValue(g);y&&(this.originPoint[g]+=h[g].translate,y.set(y.get()+h[g].translate))}),this.visualElement.render())});return()=>{c(),r(),u(),f&&f()}}getProps(){const e=this.visualElement.getProps(),{drag:r=!1,dragDirectionLock:a=!1,dragPropagation:o=!1,dragConstraints:u=!1,dragElastic:c=P0,dragMomentum:f=!0}=e;return{...e,drag:r,dragDirectionLock:a,dragPropagation:o,dragConstraints:u,dragElastic:c,dragMomentum:f}}}function Uf(n,e,r){return(e===!0||e===n)&&(r===null||r===n)}function OM(n,e=10){let r=null;return Math.abs(n.y)>e?r="y":Math.abs(n.x)>e&&(r="x"),r}class zM extends Za{constructor(e){super(e),this.removeGroupControls=Fi,this.removeListeners=Fi,this.controls=new kM(e)}mount(){const{dragControls:e}=this.node.getProps();e&&(this.removeGroupControls=e.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||Fi}unmount(){this.removeGroupControls(),this.removeListeners()}}const D_=n=>(e,r)=>{n&&ht.postRender(()=>n(e,r))};class NM extends Za{constructor(){super(...arguments),this.removePointerDownListener=Fi}onPointerDown(e){this.session=new $S(e,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:FS(this.node)})}createPanHandlers(){const{onPanSessionStart:e,onPanStart:r,onPan:a,onPanEnd:o}=this.node.getProps();return{onSessionStart:D_(e),onStart:D_(r),onMove:a,onEnd:(u,c)=>{delete this.session,o&&ht.postRender(()=>o(u,c))}}}mount(){this.removePointerDownListener=Nu(this.node.current,"pointerdown",e=>this.onPointerDown(e))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}const wd={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function j_(n,e){return e.max===e.min?0:n/(e.max-e.min)*100}const gu={correct:(n,e)=>{if(!e.target)return n;if(typeof n=="string")if(_e.test(n))n=parseFloat(n);else return n;const r=j_(n,e.target.x),a=j_(n,e.target.y);return`${r}% ${a}%`}},PM={correct:(n,{treeScale:e,projectionDelta:r})=>{const a=n,o=Fa.parse(n);if(o.length>5)return a;const u=Fa.createTransformer(n),c=typeof o[0]!="number"?1:0,f=r.x.scale*e.x,h=r.y.scale*e.y;o[0+c]/=f,o[1+c]/=h;const p=Et(f,h,.5);return typeof o[2+c]=="number"&&(o[2+c]/=p),typeof o[3+c]=="number"&&(o[3+c]/=p),u(o)}};class LM extends z.Component{componentDidMount(){const{visualElement:e,layoutGroup:r,switchLayoutGroup:a,layoutId:o}=this.props,{projection:u}=e;e4(BM),u&&(r.group&&r.group.add(u),a&&a.register&&o&&a.register(u),u.root.didUpdate(),u.addEventListener("animationComplete",()=>{this.safeToRemove()}),u.setOptions({...u.options,onExitComplete:()=>this.safeToRemove()})),wd.hasEverUpdated=!0}getSnapshotBeforeUpdate(e){const{layoutDependency:r,visualElement:a,drag:o,isPresent:u}=this.props,c=a.projection;return c&&(c.isPresent=u,o||e.layoutDependency!==r||r===void 0||e.isPresent!==u?c.willUpdate():this.safeToRemove(),e.isPresent!==u&&(u?c.promote():c.relegate()||ht.postRender(()=>{const f=c.getStack();(!f||!f.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:e}=this.props.visualElement;e&&(e.root.didUpdate(),Dg.postRender(()=>{!e.currentAnimation&&e.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:e,layoutGroup:r,switchLayoutGroup:a}=this.props,{projection:o}=e;o&&(o.scheduleCheckAfterUnmount(),r&&r.group&&r.group.remove(o),a&&a.deregister&&a.deregister(o))}safeToRemove(){const{safeToRemove:e}=this.props;e&&e()}render(){return null}}function QS(n){const[e,r]=O2(),a=z.useContext(vg);return b.jsx(LM,{...n,layoutGroup:a,switchLayoutGroup:z.useContext($2),isPresent:e,safeToRemove:r})}const BM={borderRadius:{...gu,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:gu,borderTopRightRadius:gu,borderBottomLeftRadius:gu,borderBottomRightRadius:gu,boxShadow:PM};function VM(n,e,r){const a=An(n)?n:ec(n);return a.start(Wg("",a,e,r)),a.animation}function UM(n){return n instanceof SVGElement&&n.tagName!=="svg"}const HM=(n,e)=>n.depth-e.depth;class YM{constructor(){this.children=[],this.isDirty=!1}add(e){wg(this.children,e),this.isDirty=!0}remove(e){Sg(this.children,e),this.isDirty=!0}forEach(e){this.isDirty&&this.children.sort(HM),this.isDirty=!1,this.children.forEach(e)}}function GM(n,e){const r=Tr.now(),a=({timestamp:o})=>{const u=o-r;u>=e&&(qa(a),n(u-e))};return ht.read(a,!0),()=>qa(a)}const IS=["TopLeft","TopRight","BottomLeft","BottomRight"],XM=IS.length,k_=n=>typeof n=="string"?parseFloat(n):n,O_=n=>typeof n=="number"||_e.test(n);function qM(n,e,r,a,o,u){o?(n.opacity=Et(0,r.opacity!==void 0?r.opacity:1,FM(a)),n.opacityExit=Et(e.opacity!==void 0?e.opacity:1,0,$M(a))):u&&(n.opacity=Et(e.opacity!==void 0?e.opacity:1,r.opacity!==void 0?r.opacity:1,a));for(let c=0;c<XM;c++){const f=`border${IS[c]}Radius`;let h=z_(e,f),p=z_(r,f);if(h===void 0&&p===void 0)continue;h||(h=0),p||(p=0),h===0||p===0||O_(h)===O_(p)?(n[f]=Math.max(Et(k_(h),k_(p),a),0),(Ar.test(p)||Ar.test(h))&&(n[f]+="%")):n[f]=p}(e.rotate||r.rotate)&&(n.rotate=Et(e.rotate||0,r.rotate||0,a))}function z_(n,e){return n[e]!==void 0?n[e]:n.borderRadius}const FM=ZS(0,.5,pS),$M=ZS(.5,.95,Fi);function ZS(n,e,r){return a=>a<n?0:a>e?1:r(Wu(n,e,a))}function N_(n,e){n.min=e.min,n.max=e.max}function Ui(n,e){N_(n.x,e.x),N_(n.y,e.y)}function P_(n,e){n.translate=e.translate,n.scale=e.scale,n.originPoint=e.originPoint,n.origin=e.origin}function L_(n,e,r,a,o){return n-=e,n=Xd(n,1/r,a),o!==void 0&&(n=Xd(n,1/o,a)),n}function KM(n,e=0,r=1,a=.5,o,u=n,c=n){if(Ar.test(e)&&(e=parseFloat(e),e=Et(c.min,c.max,e/100)-c.min),typeof e!="number")return;let f=Et(u.min,u.max,a);n===u&&(f-=e),n.min=L_(n.min,e,r,f,o),n.max=L_(n.max,e,r,f,o)}function B_(n,e,[r,a,o],u,c){KM(n,e[r],e[a],e[o],e.scale,u,c)}const QM=["x","scaleX","originX"],IM=["y","scaleY","originY"];function V_(n,e,r,a){B_(n.x,e,QM,r?r.x:void 0,a?a.x:void 0),B_(n.y,e,IM,r?r.y:void 0,a?a.y:void 0)}function U_(n){return n.translate===0&&n.scale===1}function WS(n){return U_(n.x)&&U_(n.y)}function H_(n,e){return n.min===e.min&&n.max===e.max}function ZM(n,e){return H_(n.x,e.x)&&H_(n.y,e.y)}function Y_(n,e){return Math.round(n.min)===Math.round(e.min)&&Math.round(n.max)===Math.round(e.max)}function JS(n,e){return Y_(n.x,e.x)&&Y_(n.y,e.y)}function G_(n){return Vn(n.x)/Vn(n.y)}function X_(n,e){return n.translate===e.translate&&n.scale===e.scale&&n.originPoint===e.originPoint}class WM{constructor(){this.members=[]}add(e){wg(this.members,e),e.scheduleRender()}remove(e){if(Sg(this.members,e),e===this.prevLead&&(this.prevLead=void 0),e===this.lead){const r=this.members[this.members.length-1];r&&this.promote(r)}}relegate(e){const r=this.members.findIndex(o=>e===o);if(r===0)return!1;let a;for(let o=r;o>=0;o--){const u=this.members[o];if(u.isPresent!==!1){a=u;break}}return a?(this.promote(a),!0):!1}promote(e,r){const a=this.lead;if(e!==a&&(this.prevLead=a,this.lead=e,e.show(),a)){a.instance&&a.scheduleRender(),e.scheduleRender(),e.resumeFrom=a,r&&(e.resumeFrom.preserveOpacity=!0),a.snapshot&&(e.snapshot=a.snapshot,e.snapshot.latestValues=a.animationValues||a.latestValues),e.root&&e.root.isUpdating&&(e.isLayoutDirty=!0);const{crossfade:o}=e.options;o===!1&&a.hide()}}exitAnimationComplete(){this.members.forEach(e=>{const{options:r,resumingFrom:a}=e;r.onExitComplete&&r.onExitComplete(),a&&a.options.onExitComplete&&a.options.onExitComplete()})}scheduleRender(){this.members.forEach(e=>{e.instance&&e.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function JM(n,e,r){let a="";const o=n.x.translate/e.x,u=n.y.translate/e.y,c=(r==null?void 0:r.z)||0;if((o||u||c)&&(a=`translate3d(${o}px, ${u}px, ${c}px) `),(e.x!==1||e.y!==1)&&(a+=`scale(${1/e.x}, ${1/e.y}) `),r){const{transformPerspective:p,rotate:g,rotateX:y,rotateY:x,skewX:v,skewY:w}=r;p&&(a=`perspective(${p}px) ${a}`),g&&(a+=`rotate(${g}deg) `),y&&(a+=`rotateX(${y}deg) `),x&&(a+=`rotateY(${x}deg) `),v&&(a+=`skewX(${v}deg) `),w&&(a+=`skewY(${w}deg) `)}const f=n.x.scale*e.x,h=n.y.scale*e.y;return(f!==1||h!==1)&&(a+=`scale(${f}, ${h})`),a||"none"}const Hm=["","X","Y","Z"],eD={visibility:"hidden"},q_=1e3;let tD=0;function Ym(n,e,r,a){const{latestValues:o}=e;o[n]&&(r[n]=o[n],e.setStaticValue(n,0),a&&(a[n]=0))}function eT(n){if(n.hasCheckedOptimisedAppear=!0,n.root===n)return;const{visualElement:e}=n.options;if(!e)return;const r=oS(e);if(window.MotionHasOptimisedAnimation(r,"transform")){const{layout:o,layoutId:u}=n.options;window.MotionCancelOptimisedAnimation(r,"transform",ht,!(o||u))}const{parent:a}=n;a&&!a.hasCheckedOptimisedAppear&&eT(a)}function tT({attachResizeListener:n,defaultParent:e,measureScroll:r,checkIsScrollRoot:a,resetTransform:o}){return class{constructor(c={},f=e==null?void 0:e()){this.id=tD++,this.animationId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,this.nodes.forEach(rD),this.nodes.forEach(uD),this.nodes.forEach(cD),this.nodes.forEach(aD)},this.resolvedRelativeTargetAt=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=c,this.root=f?f.root||f:this,this.path=f?[...f.path,f]:[],this.parent=f,this.depth=f?f.depth+1:0;for(let h=0;h<this.path.length;h++)this.path[h].shouldResetTransform=!0;this.root===this&&(this.nodes=new YM)}addEventListener(c,f){return this.eventHandlers.has(c)||this.eventHandlers.set(c,new Ag),this.eventHandlers.get(c).add(f)}notifyListeners(c,...f){const h=this.eventHandlers.get(c);h&&h.notify(...f)}hasListeners(c){return this.eventHandlers.has(c)}mount(c,f=this.root.hasTreeAnimated){if(this.instance)return;this.isSVG=UM(c),this.instance=c;const{layoutId:h,layout:p,visualElement:g}=this.options;if(g&&!g.current&&g.mount(c),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),f&&(p||h)&&(this.isLayoutDirty=!0),n){let y;const x=()=>this.root.updateBlockedByResize=!1;n(c,()=>{this.root.updateBlockedByResize=!0,y&&y(),y=GM(x,250),wd.hasAnimatedSinceResize&&(wd.hasAnimatedSinceResize=!1,this.nodes.forEach($_))})}h&&this.root.registerSharedNode(h,this),this.options.animate!==!1&&g&&(h||p)&&this.addEventListener("didUpdate",({delta:y,hasLayoutChanged:x,hasRelativeLayoutChanged:v,layout:w})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const S=this.options.transition||g.getDefaultTransition()||mD,{onLayoutAnimationStart:C,onLayoutAnimationComplete:E}=g.getProps(),M=!this.targetLayout||!JS(this.targetLayout,w),R=!x&&v;if(this.options.layoutRoot||this.resumeFrom||R||x&&(M||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0),this.setAnimationOrigin(y,R);const O={...Rg(S,"layout"),onPlay:C,onComplete:E};(g.shouldReduceMotion||this.options.layoutRoot)&&(O.delay=0,O.type=!1),this.startAnimation(O)}else x||$_(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=w})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const c=this.getStack();c&&c.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,qa(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(fD),this.animationId++)}getTransformTemplate(){const{visualElement:c}=this.options;return c&&c.getProps().transformTemplate}willUpdate(c=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&eT(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let g=0;g<this.path.length;g++){const y=this.path[g];y.shouldResetTransform=!0,y.updateScroll("snapshot"),y.options.layoutRoot&&y.willUpdate(!1)}const{layoutId:f,layout:h}=this.options;if(f===void 0&&!h)return;const p=this.getTransformTemplate();this.prevTransformTemplateValue=p?p(this.latestValues,""):void 0,this.updateSnapshot(),c&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(F_);return}this.isUpdating||this.nodes.forEach(oD),this.isUpdating=!1,this.nodes.forEach(lD),this.nodes.forEach(nD),this.nodes.forEach(iD),this.clearAllSnapshots();const f=Tr.now();hn.delta=aa(0,1e3/60,f-hn.timestamp),hn.timestamp=f,hn.isProcessing=!0,Om.update.process(hn),Om.preRender.process(hn),Om.render.process(hn),hn.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,Dg.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(sD),this.sharedNodes.forEach(dD)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,ht.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){ht.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure(),this.snapshot&&!Vn(this.snapshot.measuredBox.x)&&!Vn(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let h=0;h<this.path.length;h++)this.path[h].updateScroll();const c=this.layout;this.layout=this.measure(!1),this.layoutCorrected=Lt(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:f}=this.options;f&&f.notify("LayoutMeasure",this.layout.layoutBox,c?c.layoutBox:void 0)}updateScroll(c="measure"){let f=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===c&&(f=!1),f){const h=a(this.instance);this.scroll={animationId:this.root.animationId,phase:c,isRoot:h,offset:r(this.instance),wasRoot:this.scroll?this.scroll.isRoot:h}}}resetTransform(){if(!o)return;const c=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,f=this.projectionDelta&&!WS(this.projectionDelta),h=this.getTransformTemplate(),p=h?h(this.latestValues,""):void 0,g=p!==this.prevTransformTemplateValue;c&&(f||_s(this.latestValues)||g)&&(o(this.instance,p),this.shouldResetTransform=!1,this.scheduleRender())}measure(c=!0){const f=this.measurePageBox();let h=this.removeElementScroll(f);return c&&(h=this.removeTransform(h)),gD(h),{animationId:this.root.animationId,measuredBox:f,layoutBox:h,latestValues:{},source:this.id}}measurePageBox(){var p;const{visualElement:c}=this.options;if(!c)return Lt();const f=c.measureViewportBox();if(!(((p=this.scroll)==null?void 0:p.wasRoot)||this.path.some(yD))){const{scroll:g}=this.root;g&&(Go(f.x,g.offset.x),Go(f.y,g.offset.y))}return f}removeElementScroll(c){var h;const f=Lt();if(Ui(f,c),(h=this.scroll)!=null&&h.wasRoot)return f;for(let p=0;p<this.path.length;p++){const g=this.path[p],{scroll:y,options:x}=g;g!==this.root&&y&&x.layoutScroll&&(y.wasRoot&&Ui(f,c),Go(f.x,y.offset.x),Go(f.y,y.offset.y))}return f}applyTransform(c,f=!1){const h=Lt();Ui(h,c);for(let p=0;p<this.path.length;p++){const g=this.path[p];!f&&g.options.layoutScroll&&g.scroll&&g!==g.root&&Xo(h,{x:-g.scroll.offset.x,y:-g.scroll.offset.y}),_s(g.latestValues)&&Xo(h,g.latestValues)}return _s(this.latestValues)&&Xo(h,this.latestValues),h}removeTransform(c){const f=Lt();Ui(f,c);for(let h=0;h<this.path.length;h++){const p=this.path[h];if(!p.instance||!_s(p.latestValues))continue;z0(p.latestValues)&&p.updateSnapshot();const g=Lt(),y=p.measurePageBox();Ui(g,y),V_(f,p.latestValues,p.snapshot?p.snapshot.layoutBox:void 0,g)}return _s(this.latestValues)&&V_(f,this.latestValues),f}setTargetDelta(c){this.targetDelta=c,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(c){this.options={...this.options,...c,crossfade:c.crossfade!==void 0?c.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==hn.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(c=!1){var x;const f=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=f.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=f.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=f.isSharedProjectionDirty);const h=!!this.resumingFrom||this!==f;if(!(c||h&&this.isSharedProjectionDirty||this.isProjectionDirty||(x=this.parent)!=null&&x.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:g,layoutId:y}=this.options;if(!(!this.layout||!(g||y))){if(this.resolvedRelativeTargetAt=hn.timestamp,!this.targetDelta&&!this.relativeTarget){const v=this.getClosestProjectingParent();v&&v.layout&&this.animationProgress!==1?(this.relativeParent=v,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Lt(),this.relativeTargetOrigin=Lt(),Lu(this.relativeTargetOrigin,this.layout.layoutBox,v.layout.layoutBox),Ui(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=Lt(),this.targetWithTransforms=Lt()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),xM(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):Ui(this.target,this.layout.layoutBox),XS(this.target,this.targetDelta)):Ui(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget)){this.attemptToResolveRelativeTarget=!1;const v=this.getClosestProjectingParent();v&&!!v.resumingFrom==!!this.resumingFrom&&!v.options.layoutScroll&&v.target&&this.animationProgress!==1?(this.relativeParent=v,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Lt(),this.relativeTargetOrigin=Lt(),Lu(this.relativeTargetOrigin,this.target,v.target),Ui(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}}}getClosestProjectingParent(){if(!(!this.parent||z0(this.parent.latestValues)||GS(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var w;const c=this.getLead(),f=!!this.resumingFrom||this!==c;let h=!0;if((this.isProjectionDirty||(w=this.parent)!=null&&w.isProjectionDirty)&&(h=!1),f&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(h=!1),this.resolvedRelativeTargetAt===hn.timestamp&&(h=!1),h)return;const{layout:p,layoutId:g}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(p||g))return;Ui(this.layoutCorrected,this.layout.layoutBox);const y=this.treeScale.x,x=this.treeScale.y;bM(this.layoutCorrected,this.treeScale,this.path,f),c.layout&&!c.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(c.target=c.layout.layoutBox,c.targetWithTransforms=Lt());const{target:v}=c;if(!v){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(P_(this.prevProjectionDelta.x,this.projectionDelta.x),P_(this.prevProjectionDelta.y,this.projectionDelta.y)),Pu(this.projectionDelta,this.layoutCorrected,v,this.latestValues),(this.treeScale.x!==y||this.treeScale.y!==x||!X_(this.projectionDelta.x,this.prevProjectionDelta.x)||!X_(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",v))}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(c=!0){var f;if((f=this.options.visualElement)==null||f.scheduleRender(),c){const h=this.getStack();h&&h.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=Yo(),this.projectionDelta=Yo(),this.projectionDeltaWithTransform=Yo()}setAnimationOrigin(c,f=!1){const h=this.snapshot,p=h?h.latestValues:{},g={...this.latestValues},y=Yo();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!f;const x=Lt(),v=h?h.source:void 0,w=this.layout?this.layout.source:void 0,S=v!==w,C=this.getStack(),E=!C||C.members.length<=1,M=!!(S&&!E&&this.options.crossfade===!0&&!this.path.some(pD));this.animationProgress=0;let R;this.mixTargetDelta=O=>{const j=O/1e3;K_(y.x,c.x,j),K_(y.y,c.y,j),this.setTargetDelta(y),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(Lu(x,this.layout.layoutBox,this.relativeParent.layout.layoutBox),hD(this.relativeTarget,this.relativeTargetOrigin,x,j),R&&ZM(this.relativeTarget,R)&&(this.isProjectionDirty=!1),R||(R=Lt()),Ui(R,this.relativeTarget)),S&&(this.animationValues=g,qM(g,p,this.latestValues,j,M,E)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=j},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(c){this.notifyListeners("animationStart"),this.currentAnimation&&this.currentAnimation.stop(),this.resumingFrom&&this.resumingFrom.currentAnimation&&this.resumingFrom.currentAnimation.stop(),this.pendingAnimation&&(qa(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=ht.update(()=>{wd.hasAnimatedSinceResize=!0,this.currentAnimation=VM(0,q_,{...c,onUpdate:f=>{this.mixTargetDelta(f),c.onUpdate&&c.onUpdate(f)},onStop:()=>{},onComplete:()=>{c.onComplete&&c.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const c=this.getStack();c&&c.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(q_),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const c=this.getLead();let{targetWithTransforms:f,target:h,layout:p,latestValues:g}=c;if(!(!f||!h||!p)){if(this!==c&&this.layout&&p&&nT(this.options.animationType,this.layout.layoutBox,p.layoutBox)){h=this.target||Lt();const y=Vn(this.layout.layoutBox.x);h.x.min=c.target.x.min,h.x.max=h.x.min+y;const x=Vn(this.layout.layoutBox.y);h.y.min=c.target.y.min,h.y.max=h.y.min+x}Ui(f,h),Xo(f,g),Pu(this.projectionDeltaWithTransform,this.layoutCorrected,f,g)}}registerSharedNode(c,f){this.sharedNodes.has(c)||this.sharedNodes.set(c,new WM),this.sharedNodes.get(c).add(f);const p=f.options.initialPromotionConfig;f.promote({transition:p?p.transition:void 0,preserveFollowOpacity:p&&p.shouldPreserveFollowOpacity?p.shouldPreserveFollowOpacity(f):void 0})}isLead(){const c=this.getStack();return c?c.lead===this:!0}getLead(){var f;const{layoutId:c}=this.options;return c?((f=this.getStack())==null?void 0:f.lead)||this:this}getPrevLead(){var f;const{layoutId:c}=this.options;return c?(f=this.getStack())==null?void 0:f.prevLead:void 0}getStack(){const{layoutId:c}=this.options;if(c)return this.root.sharedNodes.get(c)}promote({needsReset:c,transition:f,preserveFollowOpacity:h}={}){const p=this.getStack();p&&p.promote(this,h),c&&(this.projectionDelta=void 0,this.needsReset=!0),f&&this.setOptions({transition:f})}relegate(){const c=this.getStack();return c?c.relegate(this):!1}resetSkewAndRotation(){const{visualElement:c}=this.options;if(!c)return;let f=!1;const{latestValues:h}=c;if((h.z||h.rotate||h.rotateX||h.rotateY||h.rotateZ||h.skewX||h.skewY)&&(f=!0),!f)return;const p={};h.z&&Ym("z",c,p,this.animationValues);for(let g=0;g<Hm.length;g++)Ym(`rotate${Hm[g]}`,c,p,this.animationValues),Ym(`skew${Hm[g]}`,c,p,this.animationValues);c.render();for(const g in p)c.setStaticValue(g,p[g]),this.animationValues&&(this.animationValues[g]=p[g]);c.scheduleRender()}getProjectionStyles(c){if(!this.instance||this.isSVG)return;if(!this.isVisible)return eD;const f={visibility:""},h=this.getTransformTemplate();if(this.needsReset)return this.needsReset=!1,f.opacity="",f.pointerEvents=_d(c==null?void 0:c.pointerEvents)||"",f.transform=h?h(this.latestValues,""):"none",f;const p=this.getLead();if(!this.projectionDelta||!this.layout||!p.target){const v={};return this.options.layoutId&&(v.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,v.pointerEvents=_d(c==null?void 0:c.pointerEvents)||""),this.hasProjected&&!_s(this.latestValues)&&(v.transform=h?h({},""):"none",this.hasProjected=!1),v}const g=p.animationValues||p.latestValues;this.applyTransformsToTarget(),f.transform=JM(this.projectionDeltaWithTransform,this.treeScale,g),h&&(f.transform=h(g,f.transform));const{x:y,y:x}=this.projectionDelta;f.transformOrigin=`${y.origin*100}% ${x.origin*100}% 0`,p.animationValues?f.opacity=p===this?g.opacity??this.latestValues.opacity??1:this.preserveOpacity?this.latestValues.opacity:g.opacityExit:f.opacity=p===this?g.opacity!==void 0?g.opacity:"":g.opacityExit!==void 0?g.opacityExit:0;for(const v in nc){if(g[v]===void 0)continue;const{correct:w,applyTo:S,isCSSVariable:C}=nc[v],E=f.transform==="none"?g[v]:w(g[v],p);if(S){const M=S.length;for(let R=0;R<M;R++)f[S[R]]=E}else C?this.options.visualElement.renderState.vars[v]=E:f[v]=E}return this.options.layoutId&&(f.pointerEvents=p===this?_d(c==null?void 0:c.pointerEvents)||"":"none"),f}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(c=>{var f;return(f=c.currentAnimation)==null?void 0:f.stop()}),this.root.nodes.forEach(F_),this.root.sharedNodes.clear()}}}function nD(n){n.updateLayout()}function iD(n){var r;const e=((r=n.resumeFrom)==null?void 0:r.snapshot)||n.snapshot;if(n.isLead()&&n.layout&&e&&n.hasListeners("didUpdate")){const{layoutBox:a,measuredBox:o}=n.layout,{animationType:u}=n.options,c=e.source!==n.layout.source;u==="size"?Hi(y=>{const x=c?e.measuredBox[y]:e.layoutBox[y],v=Vn(x);x.min=a[y].min,x.max=x.min+v}):nT(u,e.layoutBox,a)&&Hi(y=>{const x=c?e.measuredBox[y]:e.layoutBox[y],v=Vn(a[y]);x.max=x.min+v,n.relativeTarget&&!n.currentAnimation&&(n.isProjectionDirty=!0,n.relativeTarget[y].max=n.relativeTarget[y].min+v)});const f=Yo();Pu(f,a,e.layoutBox);const h=Yo();c?Pu(h,n.applyTransform(o,!0),e.measuredBox):Pu(h,a,e.layoutBox);const p=!WS(f);let g=!1;if(!n.resumeFrom){const y=n.getClosestProjectingParent();if(y&&!y.resumeFrom){const{snapshot:x,layout:v}=y;if(x&&v){const w=Lt();Lu(w,e.layoutBox,x.layoutBox);const S=Lt();Lu(S,a,v.layoutBox),JS(w,S)||(g=!0),y.options.layoutRoot&&(n.relativeTarget=S,n.relativeTargetOrigin=w,n.relativeParent=y)}}}n.notifyListeners("didUpdate",{layout:a,snapshot:e,delta:h,layoutDelta:f,hasLayoutChanged:p,hasRelativeLayoutChanged:g})}else if(n.isLead()){const{onExitComplete:a}=n.options;a&&a()}n.options.transition=void 0}function rD(n){n.parent&&(n.isProjecting()||(n.isProjectionDirty=n.parent.isProjectionDirty),n.isSharedProjectionDirty||(n.isSharedProjectionDirty=!!(n.isProjectionDirty||n.parent.isProjectionDirty||n.parent.isSharedProjectionDirty)),n.isTransformDirty||(n.isTransformDirty=n.parent.isTransformDirty))}function aD(n){n.isProjectionDirty=n.isSharedProjectionDirty=n.isTransformDirty=!1}function sD(n){n.clearSnapshot()}function F_(n){n.clearMeasurements()}function oD(n){n.isLayoutDirty=!1}function lD(n){const{visualElement:e}=n.options;e&&e.getProps().onBeforeLayoutMeasure&&e.notify("BeforeLayoutMeasure"),n.resetTransform()}function $_(n){n.finishAnimation(),n.targetDelta=n.relativeTarget=n.target=void 0,n.isProjectionDirty=!0}function uD(n){n.resolveTargetDelta()}function cD(n){n.calcProjection()}function fD(n){n.resetSkewAndRotation()}function dD(n){n.removeLeadSnapshot()}function K_(n,e,r){n.translate=Et(e.translate,0,r),n.scale=Et(e.scale,1,r),n.origin=e.origin,n.originPoint=e.originPoint}function Q_(n,e,r,a){n.min=Et(e.min,r.min,a),n.max=Et(e.max,r.max,a)}function hD(n,e,r,a){Q_(n.x,e.x,r.x,a),Q_(n.y,e.y,r.y,a)}function pD(n){return n.animationValues&&n.animationValues.opacityExit!==void 0}const mD={duration:.45,ease:[.4,0,.1,1]},I_=n=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(n),Z_=I_("applewebkit/")&&!I_("chrome/")?Math.round:Fi;function W_(n){n.min=Z_(n.min),n.max=Z_(n.max)}function gD(n){W_(n.x),W_(n.y)}function nT(n,e,r){return n==="position"||n==="preserve-aspect"&&!vM(G_(e),G_(r),.2)}function yD(n){var e;return n!==n.root&&((e=n.scroll)==null?void 0:e.wasRoot)}const vD=tT({attachResizeListener:(n,e)=>sc(n,"resize",e),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),Gm={current:void 0},iT=tT({measureScroll:n=>({x:n.scrollLeft,y:n.scrollTop}),defaultParent:()=>{if(!Gm.current){const n=new vD({});n.mount(window),n.setOptions({layoutScroll:!0}),Gm.current=n}return Gm.current},resetTransform:(n,e)=>{n.style.transform=e!==void 0?e:"none"},checkIsScrollRoot:n=>window.getComputedStyle(n).position==="fixed"}),xD={pan:{Feature:NM},drag:{Feature:zM,ProjectionNode:iT,MeasureLayout:QS}};function J_(n,e,r){const{props:a}=n;n.animationState&&a.whileHover&&n.animationState.setActive("whileHover",r==="Start");const o="onHover"+r,u=a[o];u&&ht.postRender(()=>u(e,wc(e)))}class bD extends Za{mount(){const{current:e}=this.node;e&&(this.unmount=MC(e,(r,a)=>(J_(this.node,a,"Start"),o=>J_(this.node,o,"End"))))}unmount(){}}class _D extends Za{constructor(){super(...arguments),this.isActive=!1}onFocus(){let e=!1;try{e=this.node.current.matches(":focus-visible")}catch{e=!0}!e||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=_c(sc(this.node.current,"focus",()=>this.onFocus()),sc(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function ew(n,e,r){const{props:a}=n;if(n.current instanceof HTMLButtonElement&&n.current.disabled)return;n.animationState&&a.whileTap&&n.animationState.setActive("whileTap",r==="Start");const o="onTap"+(r==="End"?"":r),u=a[o];u&&ht.postRender(()=>u(e,wc(e)))}class wD extends Za{mount(){const{current:e}=this.node;e&&(this.unmount=OC(e,(r,a)=>(ew(this.node,a,"Start"),(o,{success:u})=>ew(this.node,o,u?"End":"Cancel")),{useGlobalTarget:this.node.props.globalTapTarget}))}unmount(){}}const L0=new WeakMap,Xm=new WeakMap,SD=n=>{const e=L0.get(n.target);e&&e(n)},TD=n=>{n.forEach(SD)};function AD({root:n,...e}){const r=n||document;Xm.has(r)||Xm.set(r,{});const a=Xm.get(r),o=JSON.stringify(e);return a[o]||(a[o]=new IntersectionObserver(TD,{root:n,...e})),a[o]}function ED(n,e,r){const a=AD(e);return L0.set(n,r),a.observe(n),()=>{L0.delete(n),a.unobserve(n)}}const CD={some:0,all:1};class RD extends Za{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:e={}}=this.node.getProps(),{root:r,margin:a,amount:o="some",once:u}=e,c={root:r?r.current:void 0,rootMargin:a,threshold:typeof o=="number"?o:CD[o]},f=h=>{const{isIntersecting:p}=h;if(this.isInView===p||(this.isInView=p,u&&!p&&this.hasEnteredView))return;p&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",p);const{onViewportEnter:g,onViewportLeave:y}=this.node.getProps(),x=p?g:y;x&&x(h)};return ED(this.node.current,c,f)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:e,prevProps:r}=this.node;["amount","margin","root"].some(MD(e,r))&&this.startObserver()}unmount(){}}function MD({viewport:n={}},{viewport:e={}}={}){return r=>n[r]!==e[r]}const DD={inView:{Feature:RD},tap:{Feature:wD},focus:{Feature:_D},hover:{Feature:bD}},jD={layout:{ProjectionNode:iT,MeasureLayout:QS}},B0={current:null},rT={current:!1};function kD(){if(rT.current=!0,!!bg)if(window.matchMedia){const n=window.matchMedia("(prefers-reduced-motion)"),e=()=>B0.current=n.matches;n.addListener(e),e()}else B0.current=!1}const OD=[...MS,_n,Fa],zD=n=>OD.find(RS(n)),ND=new WeakMap;function PD(n,e,r){for(const a in e){const o=e[a],u=r[a];if(An(o))n.addValue(a,o);else if(An(u))n.addValue(a,ec(o,{owner:n}));else if(u!==o)if(n.hasValue(a)){const c=n.getValue(a);c.liveStyle===!0?c.jump(o):c.hasAnimated||c.set(o)}else{const c=n.getStaticValue(a);n.addValue(a,ec(c!==void 0?c:o,{owner:n}))}}for(const a in r)e[a]===void 0&&n.removeValue(a);return e}const tw=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];class LD{scrapeMotionValuesFromProps(e,r,a){return{}}constructor({parent:e,props:r,presenceContext:a,reducedMotionConfig:o,blockInitialAnimation:u,visualState:c},f={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=Qg,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const v=Tr.now();this.renderScheduledAt<v&&(this.renderScheduledAt=v,ht.render(this.render,!1,!0))};const{latestValues:h,renderState:p,onUpdate:g}=c;this.onUpdate=g,this.latestValues=h,this.baseTarget={...h},this.initialValues=r.initial?{...h}:{},this.renderState=p,this.parent=e,this.props=r,this.presenceContext=a,this.depth=e?e.depth+1:0,this.reducedMotionConfig=o,this.options=f,this.blockInitialAnimation=!!u,this.isControllingVariants=dh(r),this.isVariantNode=q2(r),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(e&&e.current);const{willChange:y,...x}=this.scrapeMotionValuesFromProps(r,{},this);for(const v in x){const w=x[v];h[v]!==void 0&&An(w)&&w.set(h[v],!1)}}mount(e){this.current=e,ND.set(e,this),this.projection&&!this.projection.instance&&this.projection.mount(e),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((r,a)=>this.bindToMotionValue(a,r)),rT.current||kD(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:B0.current,this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){this.projection&&this.projection.unmount(),qa(this.notifyUpdate),qa(this.render),this.valueSubscriptions.forEach(e=>e()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this);for(const e in this.events)this.events[e].clear();for(const e in this.features){const r=this.features[e];r&&(r.unmount(),r.isMounted=!1)}this.current=null}bindToMotionValue(e,r){this.valueSubscriptions.has(e)&&this.valueSubscriptions.get(e)();const a=Xs.has(e);a&&this.onBindTransform&&this.onBindTransform();const o=r.on("change",f=>{this.latestValues[e]=f,this.props.onUpdate&&ht.preRender(this.notifyUpdate),a&&this.projection&&(this.projection.isTransformDirty=!0)}),u=r.on("renderRequest",this.scheduleRender);let c;window.MotionCheckAppearSync&&(c=window.MotionCheckAppearSync(this,e,r)),this.valueSubscriptions.set(e,()=>{o(),u(),c&&c(),r.owner&&r.stop()})}sortNodePosition(e){return!this.current||!this.sortInstanceNodePosition||this.type!==e.type?0:this.sortInstanceNodePosition(this.current,e.current)}updateFeatures(){let e="animation";for(e in ol){const r=ol[e];if(!r)continue;const{isEnabled:a,Feature:o}=r;if(!this.features[e]&&o&&a(this.props)&&(this.features[e]=new o(this)),this.features[e]){const u=this.features[e];u.isMounted?u.update():(u.mount(),u.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):Lt()}getStaticValue(e){return this.latestValues[e]}setStaticValue(e,r){this.latestValues[e]=r}update(e,r){(e.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=e,this.prevPresenceContext=this.presenceContext,this.presenceContext=r;for(let a=0;a<tw.length;a++){const o=tw[a];this.propEventSubscriptions[o]&&(this.propEventSubscriptions[o](),delete this.propEventSubscriptions[o]);const u="on"+o,c=e[u];c&&(this.propEventSubscriptions[o]=this.on(o,c))}this.prevMotionValues=PD(this,this.scrapeMotionValuesFromProps(e,this.prevProps,this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue(),this.onUpdate&&this.onUpdate(this)}getProps(){return this.props}getVariant(e){return this.props.variants?this.props.variants[e]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(e){const r=this.getClosestVariantNode();if(r)return r.variantChildren&&r.variantChildren.add(e),()=>r.variantChildren.delete(e)}addValue(e,r){const a=this.values.get(e);r!==a&&(a&&this.removeValue(e),this.bindToMotionValue(e,r),this.values.set(e,r),this.latestValues[e]=r.get())}removeValue(e){this.values.delete(e);const r=this.valueSubscriptions.get(e);r&&(r(),this.valueSubscriptions.delete(e)),delete this.latestValues[e],this.removeValueFromRenderState(e,this.renderState)}hasValue(e){return this.values.has(e)}getValue(e,r){if(this.props.values&&this.props.values[e])return this.props.values[e];let a=this.values.get(e);return a===void 0&&r!==void 0&&(a=ec(r===null?void 0:r,{owner:this}),this.addValue(e,a)),a}readValue(e,r){let a=this.latestValues[e]!==void 0||!this.current?this.latestValues[e]:this.getBaseTargetFromProps(this.props,e)??this.readValueFromInstance(this.current,e,this.options);return a!=null&&(typeof a=="string"&&(ES(a)||gS(a))?a=parseFloat(a):!zD(a)&&Fa.test(r)&&(a=SS(e,r)),this.setBaseTarget(e,An(a)?a.get():a)),An(a)?a.get():a}setBaseTarget(e,r){this.baseTarget[e]=r}getBaseTarget(e){var u;const{initial:r}=this.props;let a;if(typeof r=="string"||typeof r=="object"){const c=Gg(this.props,r,(u=this.presenceContext)==null?void 0:u.custom);c&&(a=c[e])}if(r&&a!==void 0)return a;const o=this.getBaseTargetFromProps(this.props,e);return o!==void 0&&!An(o)?o:this.initialValues[e]!==void 0&&a===void 0?void 0:this.baseTarget[e]}on(e,r){return this.events[e]||(this.events[e]=new Ag),this.events[e].add(r)}notify(e,...r){this.events[e]&&this.events[e].notify(...r)}}class aT extends LD{constructor(){super(...arguments),this.KeyframeResolver=DS}sortInstanceNodePosition(e,r){return e.compareDocumentPosition(r)&2?1:-1}getBaseTargetFromProps(e,r){return e.style?e.style[r]:void 0}removeValueFromRenderState(e,{vars:r,style:a}){delete r[e],delete a[e]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:e}=this.props;An(e)&&(this.childSubscription=e.on("change",r=>{this.current&&(this.current.textContent=`${r}`)}))}}function BD(n){return window.getComputedStyle(n)}class VD extends aT{constructor(){super(...arguments),this.type="html",this.renderInstance=nS}readValueFromInstance(e,r){if(Xs.has(r))return Z4(e,r);{const a=BD(e),o=(Ng(r)?a.getPropertyValue(r):a[r])||0;return typeof o=="string"?o.trim():o}}measureInstanceViewportBox(e,{transformPagePoint:r}){return qS(e,r)}build(e,r,a){Bg(e,r,a.transformTemplate)}scrapeMotionValuesFromProps(e,r,a){return Xg(e,r,a)}}class UD extends aT{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=Lt,this.updateDimensions=()=>{this.current&&!this.renderState.dimensions&&tS(this.current,this.renderState)}}getBaseTargetFromProps(e,r){return e[r]}readValueFromInstance(e,r){if(Xs.has(r)){const a=wS(r);return a&&a.default||0}return r=iS.has(r)?r:zg(r),e.getAttribute(r)}scrapeMotionValuesFromProps(e,r,a){return aS(e,r,a)}onBindTransform(){this.current&&!this.renderState.dimensions&&ht.postRender(this.updateDimensions)}build(e,r,a){Hg(e,r,this.isSVGTag,a.transformTemplate)}renderInstance(e,r,a,o){rS(e,r,a,o)}mount(e){this.isSVGTag=Yg(e.tagName),super.mount(e)}}const HD=(n,e)=>Ug(n)?new UD(e):new VD(e,{allowProjection:n!==z.Fragment}),YD=T4({...cM,...DD,...xD,...jD},HD),De=UC(YD);var yu={},nw;function GD(){if(nw)return yu;nw=1,Object.defineProperty(yu,"__esModule",{value:!0}),yu.parse=c,yu.serialize=p;const n=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,e=/^[\u0021-\u003A\u003C-\u007E]*$/,r=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,a=/^[\u0020-\u003A\u003D-\u007E]*$/,o=Object.prototype.toString,u=(()=>{const x=function(){};return x.prototype=Object.create(null),x})();function c(x,v){const w=new u,S=x.length;if(S<2)return w;const C=(v==null?void 0:v.decode)||g;let E=0;do{const M=x.indexOf("=",E);if(M===-1)break;const R=x.indexOf(";",E),O=R===-1?S:R;if(M>O){E=x.lastIndexOf(";",M-1)+1;continue}const j=f(x,E,M),P=h(x,M,j),D=x.slice(j,P);if(w[D]===void 0){let B=f(x,M+1,O),G=h(x,O,B);const F=C(x.slice(B,G));w[D]=F}E=O+1}while(E<S);return w}function f(x,v,w){do{const S=x.charCodeAt(v);if(S!==32&&S!==9)return v}while(++v<w);return w}function h(x,v,w){for(;v>w;){const S=x.charCodeAt(--v);if(S!==32&&S!==9)return v+1}return w}function p(x,v,w){const S=(w==null?void 0:w.encode)||encodeURIComponent;if(!n.test(x))throw new TypeError(`argument name is invalid: ${x}`);const C=S(v);if(!e.test(C))throw new TypeError(`argument val is invalid: ${v}`);let E=x+"="+C;if(!w)return E;if(w.maxAge!==void 0){if(!Number.isInteger(w.maxAge))throw new TypeError(`option maxAge is invalid: ${w.maxAge}`);E+="; Max-Age="+w.maxAge}if(w.domain){if(!r.test(w.domain))throw new TypeError(`option domain is invalid: ${w.domain}`);E+="; Domain="+w.domain}if(w.path){if(!a.test(w.path))throw new TypeError(`option path is invalid: ${w.path}`);E+="; Path="+w.path}if(w.expires){if(!y(w.expires)||!Number.isFinite(w.expires.valueOf()))throw new TypeError(`option expires is invalid: ${w.expires}`);E+="; Expires="+w.expires.toUTCString()}if(w.httpOnly&&(E+="; HttpOnly"),w.secure&&(E+="; Secure"),w.partitioned&&(E+="; Partitioned"),w.priority)switch(typeof w.priority=="string"?w.priority.toLowerCase():void 0){case"low":E+="; Priority=Low";break;case"medium":E+="; Priority=Medium";break;case"high":E+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${w.priority}`)}if(w.sameSite)switch(typeof w.sameSite=="string"?w.sameSite.toLowerCase():w.sameSite){case!0:case"strict":E+="; SameSite=Strict";break;case"lax":E+="; SameSite=Lax";break;case"none":E+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${w.sameSite}`)}return E}function g(x){if(x.indexOf("%")===-1)return x;try{return decodeURIComponent(x)}catch{return x}}function y(x){return o.call(x)==="[object Date]"}return yu}GD();/**
 * react-router v7.4.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var iw="popstate";function XD(n={}){function e(a,o){let{pathname:u,search:c,hash:f}=a.location;return V0("",{pathname:u,search:c,hash:f},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function r(a,o){return typeof o=="string"?o:oc(o)}return FD(e,r,null,n)}function _t(n,e){if(n===!1||n===null||typeof n>"u")throw new Error(e)}function sr(n,e){if(!n){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function qD(){return Math.random().toString(36).substring(2,10)}function rw(n,e){return{usr:n.state,key:n.key,idx:e}}function V0(n,e,r=null,a){return{pathname:typeof n=="string"?n:n.pathname,search:"",hash:"",...typeof e=="string"?vl(e):e,state:r,key:e&&e.key||a||qD()}}function oc({pathname:n="/",search:e="",hash:r=""}){return e&&e!=="?"&&(n+=e.charAt(0)==="?"?e:"?"+e),r&&r!=="#"&&(n+=r.charAt(0)==="#"?r:"#"+r),n}function vl(n){let e={};if(n){let r=n.indexOf("#");r>=0&&(e.hash=n.substring(r),n=n.substring(0,r));let a=n.indexOf("?");a>=0&&(e.search=n.substring(a),n=n.substring(0,a)),n&&(e.pathname=n)}return e}function FD(n,e,r,a={}){let{window:o=document.defaultView,v5Compat:u=!1}=a,c=o.history,f="POP",h=null,p=g();p==null&&(p=0,c.replaceState({...c.state,idx:p},""));function g(){return(c.state||{idx:null}).idx}function y(){f="POP";let C=g(),E=C==null?null:C-p;p=C,h&&h({action:f,location:S.location,delta:E})}function x(C,E){f="PUSH";let M=V0(S.location,C,E);p=g()+1;let R=rw(M,p),O=S.createHref(M);try{c.pushState(R,"",O)}catch(j){if(j instanceof DOMException&&j.name==="DataCloneError")throw j;o.location.assign(O)}u&&h&&h({action:f,location:S.location,delta:1})}function v(C,E){f="REPLACE";let M=V0(S.location,C,E);p=g();let R=rw(M,p),O=S.createHref(M);c.replaceState(R,"",O),u&&h&&h({action:f,location:S.location,delta:0})}function w(C){let E=o.location.origin!=="null"?o.location.origin:o.location.href,M=typeof C=="string"?C:oc(C);return M=M.replace(/ $/,"%20"),_t(E,`No window.location.(origin|href) available to create URL for href: ${M}`),new URL(M,E)}let S={get action(){return f},get location(){return n(o,c)},listen(C){if(h)throw new Error("A history only accepts one active listener");return o.addEventListener(iw,y),h=C,()=>{o.removeEventListener(iw,y),h=null}},createHref(C){return e(o,C)},createURL:w,encodeLocation(C){let E=w(C);return{pathname:E.pathname,search:E.search,hash:E.hash}},push:x,replace:v,go(C){return c.go(C)}};return S}function sT(n,e,r="/"){return $D(n,e,r,!1)}function $D(n,e,r,a){let o=typeof e=="string"?vl(e):e,u=sa(o.pathname||"/",r);if(u==null)return null;let c=oT(n);KD(c);let f=null;for(let h=0;f==null&&h<c.length;++h){let p=aj(u);f=ij(c[h],p,a)}return f}function oT(n,e=[],r=[],a=""){let o=(u,c,f)=>{let h={relativePath:f===void 0?u.path||"":f,caseSensitive:u.caseSensitive===!0,childrenIndex:c,route:u};h.relativePath.startsWith("/")&&(_t(h.relativePath.startsWith(a),`Absolute route path "${h.relativePath}" nested under path "${a}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),h.relativePath=h.relativePath.slice(a.length));let p=na([a,h.relativePath]),g=r.concat(h);u.children&&u.children.length>0&&(_t(u.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${p}".`),oT(u.children,e,g,p)),!(u.path==null&&!u.index)&&e.push({path:p,score:tj(p,u.index),routesMeta:g})};return n.forEach((u,c)=>{var f;if(u.path===""||!((f=u.path)!=null&&f.includes("?")))o(u,c);else for(let h of lT(u.path))o(u,c,h)}),e}function lT(n){let e=n.split("/");if(e.length===0)return[];let[r,...a]=e,o=r.endsWith("?"),u=r.replace(/\?$/,"");if(a.length===0)return o?[u,""]:[u];let c=lT(a.join("/")),f=[];return f.push(...c.map(h=>h===""?u:[u,h].join("/"))),o&&f.push(...c),f.map(h=>n.startsWith("/")&&h===""?"/":h)}function KD(n){n.sort((e,r)=>e.score!==r.score?r.score-e.score:nj(e.routesMeta.map(a=>a.childrenIndex),r.routesMeta.map(a=>a.childrenIndex)))}var QD=/^:[\w-]+$/,ID=3,ZD=2,WD=1,JD=10,ej=-2,aw=n=>n==="*";function tj(n,e){let r=n.split("/"),a=r.length;return r.some(aw)&&(a+=ej),e&&(a+=ZD),r.filter(o=>!aw(o)).reduce((o,u)=>o+(QD.test(u)?ID:u===""?WD:JD),a)}function nj(n,e){return n.length===e.length&&n.slice(0,-1).every((a,o)=>a===e[o])?n[n.length-1]-e[e.length-1]:0}function ij(n,e,r=!1){let{routesMeta:a}=n,o={},u="/",c=[];for(let f=0;f<a.length;++f){let h=a[f],p=f===a.length-1,g=u==="/"?e:e.slice(u.length)||"/",y=qd({path:h.relativePath,caseSensitive:h.caseSensitive,end:p},g),x=h.route;if(!y&&p&&r&&!a[a.length-1].route.index&&(y=qd({path:h.relativePath,caseSensitive:h.caseSensitive,end:!1},g)),!y)return null;Object.assign(o,y.params),c.push({params:o,pathname:na([u,y.pathname]),pathnameBase:uj(na([u,y.pathnameBase])),route:x}),y.pathnameBase!=="/"&&(u=na([u,y.pathnameBase]))}return c}function qd(n,e){typeof n=="string"&&(n={path:n,caseSensitive:!1,end:!0});let[r,a]=rj(n.path,n.caseSensitive,n.end),o=e.match(r);if(!o)return null;let u=o[0],c=u.replace(/(.)\/+$/,"$1"),f=o.slice(1);return{params:a.reduce((p,{paramName:g,isOptional:y},x)=>{if(g==="*"){let w=f[x]||"";c=u.slice(0,u.length-w.length).replace(/(.)\/+$/,"$1")}const v=f[x];return y&&!v?p[g]=void 0:p[g]=(v||"").replace(/%2F/g,"/"),p},{}),pathname:u,pathnameBase:c,pattern:n}}function rj(n,e=!1,r=!0){sr(n==="*"||!n.endsWith("*")||n.endsWith("/*"),`Route path "${n}" will be treated as if it were "${n.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${n.replace(/\*$/,"/*")}".`);let a=[],o="^"+n.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(c,f,h)=>(a.push({paramName:f,isOptional:h!=null}),h?"/?([^\\/]+)?":"/([^\\/]+)"));return n.endsWith("*")?(a.push({paramName:"*"}),o+=n==="*"||n==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):r?o+="\\/*$":n!==""&&n!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,e?void 0:"i"),a]}function aj(n){try{return n.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return sr(!1,`The URL path "${n}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),n}}function sa(n,e){if(e==="/")return n;if(!n.toLowerCase().startsWith(e.toLowerCase()))return null;let r=e.endsWith("/")?e.length-1:e.length,a=n.charAt(r);return a&&a!=="/"?null:n.slice(r)||"/"}function sj(n,e="/"){let{pathname:r,search:a="",hash:o=""}=typeof n=="string"?vl(n):n;return{pathname:r?r.startsWith("/")?r:oj(r,e):e,search:cj(a),hash:fj(o)}}function oj(n,e){let r=e.replace(/\/+$/,"").split("/");return n.split("/").forEach(o=>{o===".."?r.length>1&&r.pop():o!=="."&&r.push(o)}),r.length>1?r.join("/"):"/"}function qm(n,e,r,a){return`Cannot include a '${n}' character in a manually specified \`to.${e}\` field [${JSON.stringify(a)}].  Please separate it out to the \`to.${r}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function lj(n){return n.filter((e,r)=>r===0||e.route.path&&e.route.path.length>0)}function Jg(n){let e=lj(n);return e.map((r,a)=>a===e.length-1?r.pathname:r.pathnameBase)}function ey(n,e,r,a=!1){let o;typeof n=="string"?o=vl(n):(o={...n},_t(!o.pathname||!o.pathname.includes("?"),qm("?","pathname","search",o)),_t(!o.pathname||!o.pathname.includes("#"),qm("#","pathname","hash",o)),_t(!o.search||!o.search.includes("#"),qm("#","search","hash",o)));let u=n===""||o.pathname==="",c=u?"/":o.pathname,f;if(c==null)f=r;else{let y=e.length-1;if(!a&&c.startsWith("..")){let x=c.split("/");for(;x[0]==="..";)x.shift(),y-=1;o.pathname=x.join("/")}f=y>=0?e[y]:"/"}let h=sj(o,f),p=c&&c!=="/"&&c.endsWith("/"),g=(u||c===".")&&r.endsWith("/");return!h.pathname.endsWith("/")&&(p||g)&&(h.pathname+="/"),h}var na=n=>n.join("/").replace(/\/\/+/g,"/"),uj=n=>n.replace(/\/+$/,"").replace(/^\/*/,"/"),cj=n=>!n||n==="?"?"":n.startsWith("?")?n:"?"+n,fj=n=>!n||n==="#"?"":n.startsWith("#")?n:"#"+n;function dj(n){return n!=null&&typeof n.status=="number"&&typeof n.statusText=="string"&&typeof n.internal=="boolean"&&"data"in n}var uT=["POST","PUT","PATCH","DELETE"];new Set(uT);var hj=["GET",...uT];new Set(hj);var xl=z.createContext(null);xl.displayName="DataRouter";var ph=z.createContext(null);ph.displayName="DataRouterState";var cT=z.createContext({isTransitioning:!1});cT.displayName="ViewTransition";var pj=z.createContext(new Map);pj.displayName="Fetchers";var mj=z.createContext(null);mj.displayName="Await";var or=z.createContext(null);or.displayName="Navigation";var Sc=z.createContext(null);Sc.displayName="Location";var lr=z.createContext({outlet:null,matches:[],isDataRoute:!1});lr.displayName="Route";var ty=z.createContext(null);ty.displayName="RouteError";function gj(n,{relative:e}={}){_t(bl(),"useHref() may be used only in the context of a <Router> component.");let{basename:r,navigator:a}=z.useContext(or),{hash:o,pathname:u,search:c}=Tc(n,{relative:e}),f=u;return r!=="/"&&(f=u==="/"?r:na([r,u])),a.createHref({pathname:f,search:c,hash:o})}function bl(){return z.useContext(Sc)!=null}function Ai(){return _t(bl(),"useLocation() may be used only in the context of a <Router> component."),z.useContext(Sc).location}var fT="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function dT(n){z.useContext(or).static||z.useLayoutEffect(n)}function Wa(){let{isDataRoute:n}=z.useContext(lr);return n?Dj():yj()}function yj(){_t(bl(),"useNavigate() may be used only in the context of a <Router> component.");let n=z.useContext(xl),{basename:e,navigator:r}=z.useContext(or),{matches:a}=z.useContext(lr),{pathname:o}=Ai(),u=JSON.stringify(Jg(a)),c=z.useRef(!1);return dT(()=>{c.current=!0}),z.useCallback((h,p={})=>{if(sr(c.current,fT),!c.current)return;if(typeof h=="number"){r.go(h);return}let g=ey(h,JSON.parse(u),o,p.relative==="path");n==null&&e!=="/"&&(g.pathname=g.pathname==="/"?e:na([e,g.pathname])),(p.replace?r.replace:r.push)(g,p.state,p)},[e,r,u,o,n])}z.createContext(null);function vj(){let{matches:n}=z.useContext(lr),e=n[n.length-1];return e?e.params:{}}function Tc(n,{relative:e}={}){let{matches:r}=z.useContext(lr),{pathname:a}=Ai(),o=JSON.stringify(Jg(r));return z.useMemo(()=>ey(n,JSON.parse(o),a,e==="path"),[n,o,a,e])}function xj(n,e){return hT(n,e)}function hT(n,e,r,a){var M;_t(bl(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:o,static:u}=z.useContext(or),{matches:c}=z.useContext(lr),f=c[c.length-1],h=f?f.params:{},p=f?f.pathname:"/",g=f?f.pathnameBase:"/",y=f&&f.route;{let R=y&&y.path||"";pT(p,!y||R.endsWith("*")||R.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${p}" (under <Route path="${R}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${R}"> to <Route path="${R==="/"?"*":`${R}/*`}">.`)}let x=Ai(),v;if(e){let R=typeof e=="string"?vl(e):e;_t(g==="/"||((M=R.pathname)==null?void 0:M.startsWith(g)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${g}" but pathname "${R.pathname}" was given in the \`location\` prop.`),v=R}else v=x;let w=v.pathname||"/",S=w;if(g!=="/"){let R=g.replace(/^\//,"").split("/");S="/"+w.replace(/^\//,"").split("/").slice(R.length).join("/")}let C=!u&&r&&r.matches&&r.matches.length>0?r.matches:sT(n,{pathname:S});sr(y||C!=null,`No routes matched location "${v.pathname}${v.search}${v.hash}" `),sr(C==null||C[C.length-1].route.element!==void 0||C[C.length-1].route.Component!==void 0||C[C.length-1].route.lazy!==void 0,`Matched leaf route at location "${v.pathname}${v.search}${v.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let E=Tj(C&&C.map(R=>Object.assign({},R,{params:Object.assign({},h,R.params),pathname:na([g,o.encodeLocation?o.encodeLocation(R.pathname).pathname:R.pathname]),pathnameBase:R.pathnameBase==="/"?g:na([g,o.encodeLocation?o.encodeLocation(R.pathnameBase).pathname:R.pathnameBase])})),c,r,a);return e&&E?z.createElement(Sc.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...v},navigationType:"POP"}},E):E}function bj(){let n=Mj(),e=dj(n)?`${n.status} ${n.statusText}`:n instanceof Error?n.message:JSON.stringify(n),r=n instanceof Error?n.stack:null,a="rgba(200,200,200, 0.5)",o={padding:"0.5rem",backgroundColor:a},u={padding:"2px 4px",backgroundColor:a},c=null;return console.error("Error handled by React Router default ErrorBoundary:",n),c=z.createElement(z.Fragment,null,z.createElement("p",null,"💿 Hey developer 👋"),z.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",z.createElement("code",{style:u},"ErrorBoundary")," or"," ",z.createElement("code",{style:u},"errorElement")," prop on your route.")),z.createElement(z.Fragment,null,z.createElement("h2",null,"Unexpected Application Error!"),z.createElement("h3",{style:{fontStyle:"italic"}},e),r?z.createElement("pre",{style:o},r):null,c)}var _j=z.createElement(bj,null),wj=class extends z.Component{constructor(n){super(n),this.state={location:n.location,revalidation:n.revalidation,error:n.error}}static getDerivedStateFromError(n){return{error:n}}static getDerivedStateFromProps(n,e){return e.location!==n.location||e.revalidation!=="idle"&&n.revalidation==="idle"?{error:n.error,location:n.location,revalidation:n.revalidation}:{error:n.error!==void 0?n.error:e.error,location:e.location,revalidation:n.revalidation||e.revalidation}}componentDidCatch(n,e){console.error("React Router caught the following error during render",n,e)}render(){return this.state.error!==void 0?z.createElement(lr.Provider,{value:this.props.routeContext},z.createElement(ty.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function Sj({routeContext:n,match:e,children:r}){let a=z.useContext(xl);return a&&a.static&&a.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(a.staticContext._deepestRenderedBoundaryId=e.route.id),z.createElement(lr.Provider,{value:n},r)}function Tj(n,e=[],r=null,a=null){if(n==null){if(!r)return null;if(r.errors)n=r.matches;else if(e.length===0&&!r.initialized&&r.matches.length>0)n=r.matches;else return null}let o=n,u=r==null?void 0:r.errors;if(u!=null){let h=o.findIndex(p=>p.route.id&&(u==null?void 0:u[p.route.id])!==void 0);_t(h>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(u).join(",")}`),o=o.slice(0,Math.min(o.length,h+1))}let c=!1,f=-1;if(r)for(let h=0;h<o.length;h++){let p=o[h];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(f=h),p.route.id){let{loaderData:g,errors:y}=r,x=p.route.loader&&!g.hasOwnProperty(p.route.id)&&(!y||y[p.route.id]===void 0);if(p.route.lazy||x){c=!0,f>=0?o=o.slice(0,f+1):o=[o[0]];break}}}return o.reduceRight((h,p,g)=>{let y,x=!1,v=null,w=null;r&&(y=u&&p.route.id?u[p.route.id]:void 0,v=p.route.errorElement||_j,c&&(f<0&&g===0?(pT("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),x=!0,w=null):f===g&&(x=!0,w=p.route.hydrateFallbackElement||null)));let S=e.concat(o.slice(0,g+1)),C=()=>{let E;return y?E=v:x?E=w:p.route.Component?E=z.createElement(p.route.Component,null):p.route.element?E=p.route.element:E=h,z.createElement(Sj,{match:p,routeContext:{outlet:h,matches:S,isDataRoute:r!=null},children:E})};return r&&(p.route.ErrorBoundary||p.route.errorElement||g===0)?z.createElement(wj,{location:r.location,revalidation:r.revalidation,component:v,error:y,children:C(),routeContext:{outlet:null,matches:S,isDataRoute:!0}}):C()},null)}function ny(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Aj(n){let e=z.useContext(xl);return _t(e,ny(n)),e}function Ej(n){let e=z.useContext(ph);return _t(e,ny(n)),e}function Cj(n){let e=z.useContext(lr);return _t(e,ny(n)),e}function iy(n){let e=Cj(n),r=e.matches[e.matches.length-1];return _t(r.route.id,`${n} can only be used on routes that contain a unique "id"`),r.route.id}function Rj(){return iy("useRouteId")}function Mj(){var a;let n=z.useContext(ty),e=Ej("useRouteError"),r=iy("useRouteError");return n!==void 0?n:(a=e.errors)==null?void 0:a[r]}function Dj(){let{router:n}=Aj("useNavigate"),e=iy("useNavigate"),r=z.useRef(!1);return dT(()=>{r.current=!0}),z.useCallback(async(o,u={})=>{sr(r.current,fT),r.current&&(typeof o=="number"?n.navigate(o):await n.navigate(o,{fromRouteId:e,...u}))},[n,e])}var sw={};function pT(n,e,r){!e&&!sw[n]&&(sw[n]=!0,sr(!1,r))}z.memo(jj);function jj({routes:n,future:e,state:r}){return hT(n,void 0,r,e)}function kj({to:n,replace:e,state:r,relative:a}){_t(bl(),"<Navigate> may be used only in the context of a <Router> component.");let{static:o}=z.useContext(or);sr(!o,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:u}=z.useContext(lr),{pathname:c}=Ai(),f=Wa(),h=ey(n,Jg(u),c,a==="path"),p=JSON.stringify(h);return z.useEffect(()=>{f(JSON.parse(p),{replace:e,state:r,relative:a})},[f,p,a,e,r]),null}function Na(n){_t(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function Oj({basename:n="/",children:e=null,location:r,navigationType:a="POP",navigator:o,static:u=!1}){_t(!bl(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let c=n.replace(/^\/*/,"/"),f=z.useMemo(()=>({basename:c,navigator:o,static:u,future:{}}),[c,o,u]);typeof r=="string"&&(r=vl(r));let{pathname:h="/",search:p="",hash:g="",state:y=null,key:x="default"}=r,v=z.useMemo(()=>{let w=sa(h,c);return w==null?null:{location:{pathname:w,search:p,hash:g,state:y,key:x},navigationType:a}},[c,h,p,g,y,x,a]);return sr(v!=null,`<Router basename="${c}"> is not able to match the URL "${h}${p}${g}" because it does not start with the basename, so the <Router> won't render anything.`),v==null?null:z.createElement(or.Provider,{value:f},z.createElement(Sc.Provider,{children:e,value:v}))}function zj({children:n,location:e}){return xj(U0(n),e)}function U0(n,e=[]){let r=[];return z.Children.forEach(n,(a,o)=>{if(!z.isValidElement(a))return;let u=[...e,o];if(a.type===z.Fragment){r.push.apply(r,U0(a.props.children,u));return}_t(a.type===Na,`[${typeof a.type=="string"?a.type:a.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),_t(!a.props.index||!a.props.children,"An index route cannot have child routes.");let c={id:a.props.id||u.join("-"),caseSensitive:a.props.caseSensitive,element:a.props.element,Component:a.props.Component,index:a.props.index,path:a.props.path,loader:a.props.loader,action:a.props.action,hydrateFallbackElement:a.props.hydrateFallbackElement,HydrateFallback:a.props.HydrateFallback,errorElement:a.props.errorElement,ErrorBoundary:a.props.ErrorBoundary,hasErrorBoundary:a.props.hasErrorBoundary===!0||a.props.ErrorBoundary!=null||a.props.errorElement!=null,shouldRevalidate:a.props.shouldRevalidate,handle:a.props.handle,lazy:a.props.lazy};a.props.children&&(c.children=U0(a.props.children,u)),r.push(c)}),r}var Sd="get",Td="application/x-www-form-urlencoded";function mh(n){return n!=null&&typeof n.tagName=="string"}function Nj(n){return mh(n)&&n.tagName.toLowerCase()==="button"}function Pj(n){return mh(n)&&n.tagName.toLowerCase()==="form"}function Lj(n){return mh(n)&&n.tagName.toLowerCase()==="input"}function Bj(n){return!!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)}function Vj(n,e){return n.button===0&&(!e||e==="_self")&&!Bj(n)}var Hf=null;function Uj(){if(Hf===null)try{new FormData(document.createElement("form"),0),Hf=!1}catch{Hf=!0}return Hf}var Hj=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Fm(n){return n!=null&&!Hj.has(n)?(sr(!1,`"${n}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Td}"`),null):n}function Yj(n,e){let r,a,o,u,c;if(Pj(n)){let f=n.getAttribute("action");a=f?sa(f,e):null,r=n.getAttribute("method")||Sd,o=Fm(n.getAttribute("enctype"))||Td,u=new FormData(n)}else if(Nj(n)||Lj(n)&&(n.type==="submit"||n.type==="image")){let f=n.form;if(f==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let h=n.getAttribute("formaction")||f.getAttribute("action");if(a=h?sa(h,e):null,r=n.getAttribute("formmethod")||f.getAttribute("method")||Sd,o=Fm(n.getAttribute("formenctype"))||Fm(f.getAttribute("enctype"))||Td,u=new FormData(f,n),!Uj()){let{name:p,type:g,value:y}=n;if(g==="image"){let x=p?`${p}.`:"";u.append(`${x}x`,"0"),u.append(`${x}y`,"0")}else p&&u.append(p,y)}}else{if(mh(n))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');r=Sd,a=null,o=Td,c=n}return u&&o==="text/plain"&&(c=u,u=void 0),{action:a,method:r.toLowerCase(),encType:o,formData:u,body:c}}function ry(n,e){if(n===!1||n===null||typeof n>"u")throw new Error(e)}async function Gj(n,e){if(n.id in e)return e[n.id];try{let r=await import(n.module);return e[n.id]=r,r}catch(r){return console.error(`Error loading route module \`${n.module}\`, reloading page...`),console.error(r),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function Xj(n){return n==null?!1:n.href==null?n.rel==="preload"&&typeof n.imageSrcSet=="string"&&typeof n.imageSizes=="string":typeof n.rel=="string"&&typeof n.href=="string"}async function qj(n,e,r){let a=await Promise.all(n.map(async o=>{let u=e.routes[o.route.id];if(u){let c=await Gj(u,r);return c.links?c.links():[]}return[]}));return Qj(a.flat(1).filter(Xj).filter(o=>o.rel==="stylesheet"||o.rel==="preload").map(o=>o.rel==="stylesheet"?{...o,rel:"prefetch",as:"style"}:{...o,rel:"prefetch"}))}function ow(n,e,r,a,o,u){let c=(h,p)=>r[p]?h.route.id!==r[p].route.id:!0,f=(h,p)=>{var g;return r[p].pathname!==h.pathname||((g=r[p].route.path)==null?void 0:g.endsWith("*"))&&r[p].params["*"]!==h.params["*"]};return u==="assets"?e.filter((h,p)=>c(h,p)||f(h,p)):u==="data"?e.filter((h,p)=>{var y;let g=a.routes[h.route.id];if(!g||!g.hasLoader)return!1;if(c(h,p)||f(h,p))return!0;if(h.route.shouldRevalidate){let x=h.route.shouldRevalidate({currentUrl:new URL(o.pathname+o.search+o.hash,window.origin),currentParams:((y=r[0])==null?void 0:y.params)||{},nextUrl:new URL(n,window.origin),nextParams:h.params,defaultShouldRevalidate:!0});if(typeof x=="boolean")return x}return!0}):[]}function Fj(n,e,{includeHydrateFallback:r}={}){return $j(n.map(a=>{let o=e.routes[a.route.id];if(!o)return[];let u=[o.module];return o.clientActionModule&&(u=u.concat(o.clientActionModule)),o.clientLoaderModule&&(u=u.concat(o.clientLoaderModule)),r&&o.hydrateFallbackModule&&(u=u.concat(o.hydrateFallbackModule)),o.imports&&(u=u.concat(o.imports)),u}).flat(1))}function $j(n){return[...new Set(n)]}function Kj(n){let e={},r=Object.keys(n).sort();for(let a of r)e[a]=n[a];return e}function Qj(n,e){let r=new Set;return new Set(e),n.reduce((a,o)=>{let u=JSON.stringify(Kj(o));return r.has(u)||(r.add(u),a.push({key:u,link:o})),a},[])}function Ij(n,e){let r=typeof n=="string"?new URL(n,typeof window>"u"?"server://singlefetch/":window.location.origin):n;return r.pathname==="/"?r.pathname="_root.data":e&&sa(r.pathname,e)==="/"?r.pathname=`${e.replace(/\/$/,"")}/_root.data`:r.pathname=`${r.pathname.replace(/\/$/,"")}.data`,r}function mT(){let n=z.useContext(xl);return ry(n,"You must render this element inside a <DataRouterContext.Provider> element"),n}function Zj(){let n=z.useContext(ph);return ry(n,"You must render this element inside a <DataRouterStateContext.Provider> element"),n}var ay=z.createContext(void 0);ay.displayName="FrameworkContext";function gT(){let n=z.useContext(ay);return ry(n,"You must render this element inside a <HydratedRouter> element"),n}function Wj(n,e){let r=z.useContext(ay),[a,o]=z.useState(!1),[u,c]=z.useState(!1),{onFocus:f,onBlur:h,onMouseEnter:p,onMouseLeave:g,onTouchStart:y}=e,x=z.useRef(null);z.useEffect(()=>{if(n==="render"&&c(!0),n==="viewport"){let S=E=>{E.forEach(M=>{c(M.isIntersecting)})},C=new IntersectionObserver(S,{threshold:.5});return x.current&&C.observe(x.current),()=>{C.disconnect()}}},[n]),z.useEffect(()=>{if(a){let S=setTimeout(()=>{c(!0)},100);return()=>{clearTimeout(S)}}},[a]);let v=()=>{o(!0)},w=()=>{o(!1),c(!1)};return r?n!=="intent"?[u,x,{}]:[u,x,{onFocus:vu(f,v),onBlur:vu(h,w),onMouseEnter:vu(p,v),onMouseLeave:vu(g,w),onTouchStart:vu(y,v)}]:[!1,x,{}]}function vu(n,e){return r=>{n&&n(r),r.defaultPrevented||e(r)}}function Jj({page:n,...e}){let{router:r}=mT(),a=z.useMemo(()=>sT(r.routes,n,r.basename),[r.routes,n,r.basename]);return a?z.createElement(tk,{page:n,matches:a,...e}):null}function ek(n){let{manifest:e,routeModules:r}=gT(),[a,o]=z.useState([]);return z.useEffect(()=>{let u=!1;return qj(n,e,r).then(c=>{u||o(c)}),()=>{u=!0}},[n,e,r]),a}function tk({page:n,matches:e,...r}){let a=Ai(),{manifest:o,routeModules:u}=gT(),{basename:c}=mT(),{loaderData:f,matches:h}=Zj(),p=z.useMemo(()=>ow(n,e,h,o,a,"data"),[n,e,h,o,a]),g=z.useMemo(()=>ow(n,e,h,o,a,"assets"),[n,e,h,o,a]),y=z.useMemo(()=>{if(n===a.pathname+a.search+a.hash)return[];let w=new Set,S=!1;if(e.forEach(E=>{var R;let M=o.routes[E.route.id];!M||!M.hasLoader||(!p.some(O=>O.route.id===E.route.id)&&E.route.id in f&&((R=u[E.route.id])!=null&&R.shouldRevalidate)||M.hasClientLoader?S=!0:w.add(E.route.id))}),w.size===0)return[];let C=Ij(n,c);return S&&w.size>0&&C.searchParams.set("_routes",e.filter(E=>w.has(E.route.id)).map(E=>E.route.id).join(",")),[C.pathname+C.search]},[c,f,a,o,p,e,n,u]),x=z.useMemo(()=>Fj(g,o),[g,o]),v=ek(g);return z.createElement(z.Fragment,null,y.map(w=>z.createElement("link",{key:w,rel:"prefetch",as:"fetch",href:w,...r})),x.map(w=>z.createElement("link",{key:w,rel:"modulepreload",href:w,...r})),v.map(({key:w,link:S})=>z.createElement("link",{key:w,...S})))}function nk(...n){return e=>{n.forEach(r=>{typeof r=="function"?r(e):r!=null&&(r.current=e)})}}var yT=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{yT&&(window.__reactRouterVersion="7.4.1")}catch{}function ik({basename:n,children:e,window:r}){let a=z.useRef();a.current==null&&(a.current=XD({window:r,v5Compat:!0}));let o=a.current,[u,c]=z.useState({action:o.action,location:o.location}),f=z.useCallback(h=>{z.startTransition(()=>c(h))},[c]);return z.useLayoutEffect(()=>o.listen(f),[o,f]),z.createElement(Oj,{basename:n,children:e,location:u.location,navigationType:u.action,navigator:o})}var vT=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,ia=z.forwardRef(function({onClick:e,discover:r="render",prefetch:a="none",relative:o,reloadDocument:u,replace:c,state:f,target:h,to:p,preventScrollReset:g,viewTransition:y,...x},v){let{basename:w}=z.useContext(or),S=typeof p=="string"&&vT.test(p),C,E=!1;if(typeof p=="string"&&S&&(C=p,yT))try{let G=new URL(window.location.href),F=p.startsWith("//")?new URL(G.protocol+p):new URL(p),re=sa(F.pathname,w);F.origin===G.origin&&re!=null?p=re+F.search+F.hash:E=!0}catch{sr(!1,`<Link to="${p}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let M=gj(p,{relative:o}),[R,O,j]=Wj(a,x),P=ok(p,{replace:c,state:f,target:h,preventScrollReset:g,relative:o,viewTransition:y});function D(G){e&&e(G),G.defaultPrevented||P(G)}let B=z.createElement("a",{...x,...j,href:C||M,onClick:E||u?e:D,ref:nk(v,O),target:h,"data-discover":!S&&r==="render"?"true":void 0});return R&&!S?z.createElement(z.Fragment,null,B,z.createElement(Jj,{page:M})):B});ia.displayName="Link";var rk=z.forwardRef(function({"aria-current":e="page",caseSensitive:r=!1,className:a="",end:o=!1,style:u,to:c,viewTransition:f,children:h,...p},g){let y=Tc(c,{relative:p.relative}),x=Ai(),v=z.useContext(ph),{navigator:w,basename:S}=z.useContext(or),C=v!=null&&dk(y)&&f===!0,E=w.encodeLocation?w.encodeLocation(y).pathname:y.pathname,M=x.pathname,R=v&&v.navigation&&v.navigation.location?v.navigation.location.pathname:null;r||(M=M.toLowerCase(),R=R?R.toLowerCase():null,E=E.toLowerCase()),R&&S&&(R=sa(R,S)||R);const O=E!=="/"&&E.endsWith("/")?E.length-1:E.length;let j=M===E||!o&&M.startsWith(E)&&M.charAt(O)==="/",P=R!=null&&(R===E||!o&&R.startsWith(E)&&R.charAt(E.length)==="/"),D={isActive:j,isPending:P,isTransitioning:C},B=j?e:void 0,G;typeof a=="function"?G=a(D):G=[a,j?"active":null,P?"pending":null,C?"transitioning":null].filter(Boolean).join(" ");let F=typeof u=="function"?u(D):u;return z.createElement(ia,{...p,"aria-current":B,className:G,ref:g,style:F,to:c,viewTransition:f},typeof h=="function"?h(D):h)});rk.displayName="NavLink";var ak=z.forwardRef(({discover:n="render",fetcherKey:e,navigate:r,reloadDocument:a,replace:o,state:u,method:c=Sd,action:f,onSubmit:h,relative:p,preventScrollReset:g,viewTransition:y,...x},v)=>{let w=ck(),S=fk(f,{relative:p}),C=c.toLowerCase()==="get"?"get":"post",E=typeof f=="string"&&vT.test(f),M=R=>{if(h&&h(R),R.defaultPrevented)return;R.preventDefault();let O=R.nativeEvent.submitter,j=(O==null?void 0:O.getAttribute("formmethod"))||c;w(O||R.currentTarget,{fetcherKey:e,method:j,navigate:r,replace:o,state:u,relative:p,preventScrollReset:g,viewTransition:y})};return z.createElement("form",{ref:v,method:C,action:S,onSubmit:a?h:M,...x,"data-discover":!E&&n==="render"?"true":void 0})});ak.displayName="Form";function sk(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function xT(n){let e=z.useContext(xl);return _t(e,sk(n)),e}function ok(n,{target:e,replace:r,state:a,preventScrollReset:o,relative:u,viewTransition:c}={}){let f=Wa(),h=Ai(),p=Tc(n,{relative:u});return z.useCallback(g=>{if(Vj(g,e)){g.preventDefault();let y=r!==void 0?r:oc(h)===oc(p);f(n,{replace:y,state:a,preventScrollReset:o,relative:u,viewTransition:c})}},[h,f,p,r,a,e,n,o,u,c])}var lk=0,uk=()=>`__${String(++lk)}__`;function ck(){let{router:n}=xT("useSubmit"),{basename:e}=z.useContext(or),r=Rj();return z.useCallback(async(a,o={})=>{let{action:u,method:c,encType:f,formData:h,body:p}=Yj(a,e);if(o.navigate===!1){let g=o.fetcherKey||uk();await n.fetch(g,r,o.action||u,{preventScrollReset:o.preventScrollReset,formData:h,body:p,formMethod:o.method||c,formEncType:o.encType||f,flushSync:o.flushSync})}else await n.navigate(o.action||u,{preventScrollReset:o.preventScrollReset,formData:h,body:p,formMethod:o.method||c,formEncType:o.encType||f,replace:o.replace,state:o.state,fromRouteId:r,flushSync:o.flushSync,viewTransition:o.viewTransition})},[n,e,r])}function fk(n,{relative:e}={}){let{basename:r}=z.useContext(or),a=z.useContext(lr);_t(a,"useFormAction must be used inside a RouteContext");let[o]=a.matches.slice(-1),u={...Tc(n||".",{relative:e})},c=Ai();if(n==null){u.search=c.search;let f=new URLSearchParams(u.search),h=f.getAll("index");if(h.some(g=>g==="")){f.delete("index"),h.filter(y=>y).forEach(y=>f.append("index",y));let g=f.toString();u.search=g?`?${g}`:""}}return(!n||n===".")&&o.route.index&&(u.search=u.search?u.search.replace(/^\?/,"?index&"):"?index"),r!=="/"&&(u.pathname=u.pathname==="/"?r:na([r,u.pathname])),oc(u)}function dk(n,e={}){let r=z.useContext(cT);_t(r!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:a}=xT("useViewTransitionState"),o=Tc(n,{relative:e.relative});if(!r.isTransitioning)return!1;let u=sa(r.currentLocation.pathname,a)||r.currentLocation.pathname,c=sa(r.nextLocation.pathname,a)||r.nextLocation.pathname;return qd(o.pathname,c)!=null||qd(o.pathname,u)!=null}new TextEncoder;function Wr(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function bT(n,e){n.prototype=Object.create(e.prototype),n.prototype.constructor=n,n.__proto__=e}/*!
 * GSAP 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var wi={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},lc={duration:.5,overwrite:!1,delay:0},sy,mn,bt,Er=1e8,En=1/Er,H0=Math.PI*2,hk=H0/4,pk=0,_T=Math.sqrt,mk=Math.cos,gk=Math.sin,on=function(e){return typeof e=="string"},Ot=function(e){return typeof e=="function"},oa=function(e){return typeof e=="number"},oy=function(e){return typeof e>"u"},Rr=function(e){return typeof e=="object"},Zn=function(e){return e!==!1},ly=function(){return typeof window<"u"},Yf=function(e){return Ot(e)||on(e)},wT=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Cn=Array.isArray,yk=/random\([^)]+\)/g,vk=/,\s*/g,lw=/(?:-?\.?\d|\.)+/gi,ST=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,qo=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,$m=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,TT=/[+-]=-?[.\d]+/,xk=/[^,'"\[\]\s]+/gi,bk=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,At,gr,Y0,uy,Si={},Fd={},AT,ET=function(e){return(Fd=ul(e,Si))&&ti},cy=function(e,r){return console.warn("Invalid property",e,"set to",r,"Missing plugin? gsap.registerPlugin()")},uc=function(e,r){return!r&&console.warn(e)},CT=function(e,r){return e&&(Si[e]=r)&&Fd&&(Fd[e]=r)||Si},cc=function(){return 0},_k={suppressEvents:!0,isStart:!0,kill:!1},Ad={suppressEvents:!0,kill:!1},wk={suppressEvents:!0},fy={},Ya=[],G0={},RT,gi={},Km={},uw=30,Ed=[],dy="",hy=function(e){var r=e[0],a,o;if(Rr(r)||Ot(r)||(e=[e]),!(a=(r._gsap||{}).harness)){for(o=Ed.length;o--&&!Ed[o].targetTest(r););a=Ed[o]}for(o=e.length;o--;)e[o]&&(e[o]._gsap||(e[o]._gsap=new IT(e[o],a)))||e.splice(o,1);return e},Os=function(e){return e._gsap||hy(qi(e))[0]._gsap},MT=function(e,r,a){return(a=e[r])&&Ot(a)?e[r]():oy(a)&&e.getAttribute&&e.getAttribute(r)||a},Wn=function(e,r){return(e=e.split(",")).forEach(r)||e},Bt=function(e){return Math.round(e*1e5)/1e5||0},Tt=function(e){return Math.round(e*1e7)/1e7||0},Ko=function(e,r){var a=r.charAt(0),o=parseFloat(r.substr(2));return e=parseFloat(e),a==="+"?e+o:a==="-"?e-o:a==="*"?e*o:e/o},Sk=function(e,r){for(var a=r.length,o=0;e.indexOf(r[o])<0&&++o<a;);return o<a},$d=function(){var e=Ya.length,r=Ya.slice(0),a,o;for(G0={},Ya.length=0,a=0;a<e;a++)o=r[a],o&&o._lazy&&(o.render(o._lazy[0],o._lazy[1],!0)._lazy=0)},py=function(e){return!!(e._initted||e._startAt||e.add)},DT=function(e,r,a,o){Ya.length&&!mn&&$d(),e.render(r,a,!!(mn&&r<0&&py(e))),Ya.length&&!mn&&$d()},jT=function(e){var r=parseFloat(e);return(r||r===0)&&(e+"").match(xk).length<2?r:on(e)?e.trim():e},kT=function(e){return e},Ti=function(e,r){for(var a in r)a in e||(e[a]=r[a]);return e},Tk=function(e){return function(r,a){for(var o in a)o in r||o==="duration"&&e||o==="ease"||(r[o]=a[o])}},ul=function(e,r){for(var a in r)e[a]=r[a];return e},cw=function n(e,r){for(var a in r)a!=="__proto__"&&a!=="constructor"&&a!=="prototype"&&(e[a]=Rr(r[a])?n(e[a]||(e[a]={}),r[a]):r[a]);return e},Kd=function(e,r){var a={},o;for(o in e)o in r||(a[o]=e[o]);return a},Bu=function(e){var r=e.parent||At,a=e.keyframes?Tk(Cn(e.keyframes)):Ti;if(Zn(e.inherit))for(;r;)a(e,r.vars.defaults),r=r.parent||r._dp;return e},Ak=function(e,r){for(var a=e.length,o=a===r.length;o&&a--&&e[a]===r[a];);return a<0},OT=function(e,r,a,o,u){var c=e[o],f;if(u)for(f=r[u];c&&c[u]>f;)c=c._prev;return c?(r._next=c._next,c._next=r):(r._next=e[a],e[a]=r),r._next?r._next._prev=r:e[o]=r,r._prev=c,r.parent=r._dp=e,r},gh=function(e,r,a,o){a===void 0&&(a="_first"),o===void 0&&(o="_last");var u=r._prev,c=r._next;u?u._next=c:e[a]===r&&(e[a]=c),c?c._prev=u:e[o]===r&&(e[o]=u),r._next=r._prev=r.parent=null},$a=function(e,r){e.parent&&(!r||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},zs=function(e,r){if(e&&(!r||r._end>e._dur||r._start<0))for(var a=e;a;)a._dirty=1,a=a.parent;return e},Ek=function(e){for(var r=e.parent;r&&r.parent;)r._dirty=1,r.totalDuration(),r=r.parent;return e},X0=function(e,r,a,o){return e._startAt&&(mn?e._startAt.revert(Ad):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(r,!0,o))},Ck=function n(e){return!e||e._ts&&n(e.parent)},fw=function(e){return e._repeat?cl(e._tTime,e=e.duration()+e._rDelay)*e:0},cl=function(e,r){var a=Math.floor(e=Tt(e/r));return e&&a===e?a-1:a},Qd=function(e,r){return(e-r._start)*r._ts+(r._ts>=0?0:r._dirty?r.totalDuration():r._tDur)},yh=function(e){return e._end=Tt(e._start+(e._tDur/Math.abs(e._ts||e._rts||En)||0))},vh=function(e,r){var a=e._dp;return a&&a.smoothChildTiming&&e._ts&&(e._start=Tt(a._time-(e._ts>0?r/e._ts:((e._dirty?e.totalDuration():e._tDur)-r)/-e._ts)),yh(e),a._dirty||zs(a,e)),e},zT=function(e,r){var a;if((r._time||!r._dur&&r._initted||r._start<e._time&&(r._dur||!r.add))&&(a=Qd(e.rawTime(),r),(!r._dur||Ac(0,r.totalDuration(),a)-r._tTime>En)&&r.render(a,!0)),zs(e,r)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(a=e;a._dp;)a.rawTime()>=0&&a.totalTime(a._tTime),a=a._dp;e._zTime=-1e-8}},xr=function(e,r,a,o){return r.parent&&$a(r),r._start=Tt((oa(a)?a:a||e!==At?Yi(e,a,r):e._time)+r._delay),r._end=Tt(r._start+(r.totalDuration()/Math.abs(r.timeScale())||0)),OT(e,r,"_first","_last",e._sort?"_start":0),q0(r)||(e._recent=r),o||zT(e,r),e._ts<0&&vh(e,e._tTime),e},NT=function(e,r){return(Si.ScrollTrigger||cy("scrollTrigger",r))&&Si.ScrollTrigger.create(r,e)},PT=function(e,r,a,o,u){if(gy(e,r,u),!e._initted)return 1;if(!a&&e._pt&&!mn&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&RT!==vi.frame)return Ya.push(e),e._lazy=[u,o],1},Rk=function n(e){var r=e.parent;return r&&r._ts&&r._initted&&!r._lock&&(r.rawTime()<0||n(r))},q0=function(e){var r=e.data;return r==="isFromStart"||r==="isStart"},Mk=function(e,r,a,o){var u=e.ratio,c=r<0||!r&&(!e._start&&Rk(e)&&!(!e._initted&&q0(e))||(e._ts<0||e._dp._ts<0)&&!q0(e))?0:1,f=e._rDelay,h=0,p,g,y;if(f&&e._repeat&&(h=Ac(0,e._tDur,r),g=cl(h,f),e._yoyo&&g&1&&(c=1-c),g!==cl(e._tTime,f)&&(u=1-c,e.vars.repeatRefresh&&e._initted&&e.invalidate())),c!==u||mn||o||e._zTime===En||!r&&e._zTime){if(!e._initted&&PT(e,r,o,a,h))return;for(y=e._zTime,e._zTime=r||(a?En:0),a||(a=r&&!y),e.ratio=c,e._from&&(c=1-c),e._time=0,e._tTime=h,p=e._pt;p;)p.r(c,p.d),p=p._next;r<0&&X0(e,r,a,!0),e._onUpdate&&!a&&bi(e,"onUpdate"),h&&e._repeat&&!a&&e.parent&&bi(e,"onRepeat"),(r>=e._tDur||r<0)&&e.ratio===c&&(c&&$a(e,1),!a&&!mn&&(bi(e,c?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=r)},Dk=function(e,r,a){var o;if(a>r)for(o=e._first;o&&o._start<=a;){if(o.data==="isPause"&&o._start>r)return o;o=o._next}else for(o=e._last;o&&o._start>=a;){if(o.data==="isPause"&&o._start<r)return o;o=o._prev}},fl=function(e,r,a,o){var u=e._repeat,c=Tt(r)||0,f=e._tTime/e._tDur;return f&&!o&&(e._time*=c/e._dur),e._dur=c,e._tDur=u?u<0?1e10:Tt(c*(u+1)+e._rDelay*u):c,f>0&&!o&&vh(e,e._tTime=e._tDur*f),e.parent&&yh(e),a||zs(e.parent,e),e},dw=function(e){return e instanceof Qn?zs(e):fl(e,e._dur)},jk={_start:0,endTime:cc,totalDuration:cc},Yi=function n(e,r,a){var o=e.labels,u=e._recent||jk,c=e.duration()>=Er?u.endTime(!1):e._dur,f,h,p;return on(r)&&(isNaN(r)||r in o)?(h=r.charAt(0),p=r.substr(-1)==="%",f=r.indexOf("="),h==="<"||h===">"?(f>=0&&(r=r.replace(/=/,"")),(h==="<"?u._start:u.endTime(u._repeat>=0))+(parseFloat(r.substr(1))||0)*(p?(f<0?u:a).totalDuration()/100:1)):f<0?(r in o||(o[r]=c),o[r]):(h=parseFloat(r.charAt(f-1)+r.substr(f+1)),p&&a&&(h=h/100*(Cn(a)?a[0]:a).totalDuration()),f>1?n(e,r.substr(0,f-1),a)+h:c+h)):r==null?c:+r},Vu=function(e,r,a){var o=oa(r[1]),u=(o?2:1)+(e<2?0:1),c=r[u],f,h;if(o&&(c.duration=r[1]),c.parent=a,e){for(f=c,h=a;h&&!("immediateRender"in f);)f=h.vars.defaults||{},h=Zn(h.vars.inherit)&&h.parent;c.immediateRender=Zn(f.immediateRender),e<2?c.runBackwards=1:c.startAt=r[u-1]}return new $t(r[0],c,r[u+1])},Ja=function(e,r){return e||e===0?r(e):r},Ac=function(e,r,a){return a<e?e:a>r?r:a},Sn=function(e,r){return!on(e)||!(r=bk.exec(e))?"":r[1]},kk=function(e,r,a){return Ja(a,function(o){return Ac(e,r,o)})},F0=[].slice,LT=function(e,r){return e&&Rr(e)&&"length"in e&&(!r&&!e.length||e.length-1 in e&&Rr(e[0]))&&!e.nodeType&&e!==gr},Ok=function(e,r,a){return a===void 0&&(a=[]),e.forEach(function(o){var u;return on(o)&&!r||LT(o,1)?(u=a).push.apply(u,qi(o)):a.push(o)})||a},qi=function(e,r,a){return bt&&!r&&bt.selector?bt.selector(e):on(e)&&!a&&(Y0||!dl())?F0.call((r||uy).querySelectorAll(e),0):Cn(e)?Ok(e,a):LT(e)?F0.call(e,0):e?[e]:[]},$0=function(e){return e=qi(e)[0]||uc("Invalid scope")||{},function(r){var a=e.current||e.nativeElement||e;return qi(r,a.querySelectorAll?a:a===e?uc("Invalid scope")||uy.createElement("div"):e)}},BT=function(e){return e.sort(function(){return .5-Math.random()})},VT=function(e){if(Ot(e))return e;var r=Rr(e)?e:{each:e},a=Ns(r.ease),o=r.from||0,u=parseFloat(r.base)||0,c={},f=o>0&&o<1,h=isNaN(o)||f,p=r.axis,g=o,y=o;return on(o)?g=y={center:.5,edges:.5,end:1}[o]||0:!f&&h&&(g=o[0],y=o[1]),function(x,v,w){var S=(w||r).length,C=c[S],E,M,R,O,j,P,D,B,G;if(!C){if(G=r.grid==="auto"?0:(r.grid||[1,Er])[1],!G){for(D=-1e8;D<(D=w[G++].getBoundingClientRect().left)&&G<S;);G<S&&G--}for(C=c[S]=[],E=h?Math.min(G,S)*g-.5:o%G,M=G===Er?0:h?S*y/G-.5:o/G|0,D=0,B=Er,P=0;P<S;P++)R=P%G-E,O=M-(P/G|0),C[P]=j=p?Math.abs(p==="y"?O:R):_T(R*R+O*O),j>D&&(D=j),j<B&&(B=j);o==="random"&&BT(C),C.max=D-B,C.min=B,C.v=S=(parseFloat(r.amount)||parseFloat(r.each)*(G>S?S-1:p?p==="y"?S/G:G:Math.max(G,S/G))||0)*(o==="edges"?-1:1),C.b=S<0?u-S:u,C.u=Sn(r.amount||r.each)||0,a=a&&S<0?Fk(a):a}return S=(C[x]-C.min)/C.max||0,Tt(C.b+(a?a(S):S)*C.v)+C.u}},K0=function(e){var r=Math.pow(10,((e+"").split(".")[1]||"").length);return function(a){var o=Tt(Math.round(parseFloat(a)/e)*e*r);return(o-o%1)/r+(oa(a)?0:Sn(a))}},UT=function(e,r){var a=Cn(e),o,u;return!a&&Rr(e)&&(o=a=e.radius||Er,e.values?(e=qi(e.values),(u=!oa(e[0]))&&(o*=o)):e=K0(e.increment)),Ja(r,a?Ot(e)?function(c){return u=e(c),Math.abs(u-c)<=o?u:c}:function(c){for(var f=parseFloat(u?c.x:c),h=parseFloat(u?c.y:0),p=Er,g=0,y=e.length,x,v;y--;)u?(x=e[y].x-f,v=e[y].y-h,x=x*x+v*v):x=Math.abs(e[y]-f),x<p&&(p=x,g=y);return g=!o||p<=o?e[g]:c,u||g===c||oa(c)?g:g+Sn(c)}:K0(e))},HT=function(e,r,a,o){return Ja(Cn(e)?!r:a===!0?!!(a=0):!o,function(){return Cn(e)?e[~~(Math.random()*e.length)]:(a=a||1e-5)&&(o=a<1?Math.pow(10,(a+"").length-2):1)&&Math.floor(Math.round((e-a/2+Math.random()*(r-e+a*.99))/a)*a*o)/o})},zk=function(){for(var e=arguments.length,r=new Array(e),a=0;a<e;a++)r[a]=arguments[a];return function(o){return r.reduce(function(u,c){return c(u)},o)}},Nk=function(e,r){return function(a){return e(parseFloat(a))+(r||Sn(a))}},Pk=function(e,r,a){return GT(e,r,0,1,a)},YT=function(e,r,a){return Ja(a,function(o){return e[~~r(o)]})},Lk=function n(e,r,a){var o=r-e;return Cn(e)?YT(e,n(0,e.length),r):Ja(a,function(u){return(o+(u-e)%o)%o+e})},Bk=function n(e,r,a){var o=r-e,u=o*2;return Cn(e)?YT(e,n(0,e.length-1),r):Ja(a,function(c){return c=(u+(c-e)%u)%u||0,e+(c>o?u-c:c)})},fc=function(e){return e.replace(yk,function(r){var a=r.indexOf("[")+1,o=r.substring(a||7,a?r.indexOf("]"):r.length-1).split(vk);return HT(a?o:+o[0],a?0:+o[1],+o[2]||1e-5)})},GT=function(e,r,a,o,u){var c=r-e,f=o-a;return Ja(u,function(h){return a+((h-e)/c*f||0)})},Vk=function n(e,r,a,o){var u=isNaN(e+r)?0:function(v){return(1-v)*e+v*r};if(!u){var c=on(e),f={},h,p,g,y,x;if(a===!0&&(o=1)&&(a=null),c)e={p:e},r={p:r};else if(Cn(e)&&!Cn(r)){for(g=[],y=e.length,x=y-2,p=1;p<y;p++)g.push(n(e[p-1],e[p]));y--,u=function(w){w*=y;var S=Math.min(x,~~w);return g[S](w-S)},a=r}else o||(e=ul(Cn(e)?[]:{},e));if(!g){for(h in r)my.call(f,e,h,"get",r[h]);u=function(w){return xy(w,f)||(c?e.p:e)}}}return Ja(a,u)},hw=function(e,r,a){var o=e.labels,u=Er,c,f,h;for(c in o)f=o[c]-r,f<0==!!a&&f&&u>(f=Math.abs(f))&&(h=c,u=f);return h},bi=function(e,r,a){var o=e.vars,u=o[r],c=bt,f=e._ctx,h,p,g;if(u)return h=o[r+"Params"],p=o.callbackScope||e,a&&Ya.length&&$d(),f&&(bt=f),g=h?u.apply(p,h):u.call(p),bt=c,g},Au=function(e){return $a(e),e.scrollTrigger&&e.scrollTrigger.kill(!!mn),e.progress()<1&&bi(e,"onInterrupt"),e},Fo,XT=[],qT=function(e){if(e)if(e=!e.name&&e.default||e,ly()||e.headless){var r=e.name,a=Ot(e),o=r&&!a&&e.init?function(){this._props=[]}:e,u={init:cc,render:xy,add:my,kill:n8,modifier:t8,rawVars:0},c={targetTest:0,get:0,getSetter:vy,aliases:{},register:0};if(dl(),e!==o){if(gi[r])return;Ti(o,Ti(Kd(e,u),c)),ul(o.prototype,ul(u,Kd(e,c))),gi[o.prop=r]=o,e.targetTest&&(Ed.push(o),fy[r]=1),r=(r==="css"?"CSS":r.charAt(0).toUpperCase()+r.substr(1))+"Plugin"}CT(r,o),e.register&&e.register(ti,o,Jn)}else XT.push(e)},ut=255,Eu={aqua:[0,ut,ut],lime:[0,ut,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,ut],navy:[0,0,128],white:[ut,ut,ut],olive:[128,128,0],yellow:[ut,ut,0],orange:[ut,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[ut,0,0],pink:[ut,192,203],cyan:[0,ut,ut],transparent:[ut,ut,ut,0]},Qm=function(e,r,a){return e+=e<0?1:e>1?-1:0,(e*6<1?r+(a-r)*e*6:e<.5?a:e*3<2?r+(a-r)*(2/3-e)*6:r)*ut+.5|0},FT=function(e,r,a){var o=e?oa(e)?[e>>16,e>>8&ut,e&ut]:0:Eu.black,u,c,f,h,p,g,y,x,v,w;if(!o){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),Eu[e])o=Eu[e];else if(e.charAt(0)==="#"){if(e.length<6&&(u=e.charAt(1),c=e.charAt(2),f=e.charAt(3),e="#"+u+u+c+c+f+f+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return o=parseInt(e.substr(1,6),16),[o>>16,o>>8&ut,o&ut,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),o=[e>>16,e>>8&ut,e&ut]}else if(e.substr(0,3)==="hsl"){if(o=w=e.match(lw),!r)h=+o[0]%360/360,p=+o[1]/100,g=+o[2]/100,c=g<=.5?g*(p+1):g+p-g*p,u=g*2-c,o.length>3&&(o[3]*=1),o[0]=Qm(h+1/3,u,c),o[1]=Qm(h,u,c),o[2]=Qm(h-1/3,u,c);else if(~e.indexOf("="))return o=e.match(ST),a&&o.length<4&&(o[3]=1),o}else o=e.match(lw)||Eu.transparent;o=o.map(Number)}return r&&!w&&(u=o[0]/ut,c=o[1]/ut,f=o[2]/ut,y=Math.max(u,c,f),x=Math.min(u,c,f),g=(y+x)/2,y===x?h=p=0:(v=y-x,p=g>.5?v/(2-y-x):v/(y+x),h=y===u?(c-f)/v+(c<f?6:0):y===c?(f-u)/v+2:(u-c)/v+4,h*=60),o[0]=~~(h+.5),o[1]=~~(p*100+.5),o[2]=~~(g*100+.5)),a&&o.length<4&&(o[3]=1),o},$T=function(e){var r=[],a=[],o=-1;return e.split(Ga).forEach(function(u){var c=u.match(qo)||[];r.push.apply(r,c),a.push(o+=c.length+1)}),r.c=a,r},pw=function(e,r,a){var o="",u=(e+o).match(Ga),c=r?"hsla(":"rgba(",f=0,h,p,g,y;if(!u)return e;if(u=u.map(function(x){return(x=FT(x,r,1))&&c+(r?x[0]+","+x[1]+"%,"+x[2]+"%,"+x[3]:x.join(","))+")"}),a&&(g=$T(e),h=a.c,h.join(o)!==g.c.join(o)))for(p=e.replace(Ga,"1").split(qo),y=p.length-1;f<y;f++)o+=p[f]+(~h.indexOf(f)?u.shift()||c+"0,0,0,0)":(g.length?g:u.length?u:a).shift());if(!p)for(p=e.split(Ga),y=p.length-1;f<y;f++)o+=p[f]+u[f];return o+p[y]},Ga=function(){var n="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in Eu)n+="|"+e+"\\b";return new RegExp(n+")","gi")}(),Uk=/hsl[a]?\(/,KT=function(e){var r=e.join(" "),a;if(Ga.lastIndex=0,Ga.test(r))return a=Uk.test(r),e[1]=pw(e[1],a),e[0]=pw(e[0],a,$T(e[1])),!0},dc,vi=function(){var n=Date.now,e=500,r=33,a=n(),o=a,u=1e3/240,c=u,f=[],h,p,g,y,x,v,w=function S(C){var E=n()-o,M=C===!0,R,O,j,P;if((E>e||E<0)&&(a+=E-r),o+=E,j=o-a,R=j-c,(R>0||M)&&(P=++y.frame,x=j-y.time*1e3,y.time=j=j/1e3,c+=R+(R>=u?4:u-R),O=1),M||(h=p(S)),O)for(v=0;v<f.length;v++)f[v](j,x,P,C)};return y={time:0,frame:0,tick:function(){w(!0)},deltaRatio:function(C){return x/(1e3/(C||60))},wake:function(){AT&&(!Y0&&ly()&&(gr=Y0=window,uy=gr.document||{},Si.gsap=ti,(gr.gsapVersions||(gr.gsapVersions=[])).push(ti.version),ET(Fd||gr.GreenSockGlobals||!gr.gsap&&gr||{}),XT.forEach(qT)),g=typeof requestAnimationFrame<"u"&&requestAnimationFrame,h&&y.sleep(),p=g||function(C){return setTimeout(C,c-y.time*1e3+1|0)},dc=1,w(2))},sleep:function(){(g?cancelAnimationFrame:clearTimeout)(h),dc=0,p=cc},lagSmoothing:function(C,E){e=C||1/0,r=Math.min(E||33,e)},fps:function(C){u=1e3/(C||240),c=y.time*1e3+u},add:function(C,E,M){var R=E?function(O,j,P,D){C(O,j,P,D),y.remove(R)}:C;return y.remove(C),f[M?"unshift":"push"](R),dl(),R},remove:function(C,E){~(E=f.indexOf(C))&&f.splice(E,1)&&v>=E&&v--},_listeners:f},y}(),dl=function(){return!dc&&vi.wake()},Ge={},Hk=/^[\d.\-M][\d.\-,\s]/,Yk=/["']/g,Gk=function(e){for(var r={},a=e.substr(1,e.length-3).split(":"),o=a[0],u=1,c=a.length,f,h,p;u<c;u++)h=a[u],f=u!==c-1?h.lastIndexOf(","):h.length,p=h.substr(0,f),r[o]=isNaN(p)?p.replace(Yk,"").trim():+p,o=h.substr(f+1).trim();return r},Xk=function(e){var r=e.indexOf("(")+1,a=e.indexOf(")"),o=e.indexOf("(",r);return e.substring(r,~o&&o<a?e.indexOf(")",a+1):a)},qk=function(e){var r=(e+"").split("("),a=Ge[r[0]];return a&&r.length>1&&a.config?a.config.apply(null,~e.indexOf("{")?[Gk(r[1])]:Xk(e).split(",").map(jT)):Ge._CE&&Hk.test(e)?Ge._CE("",e):a},Fk=function(e){return function(r){return 1-e(1-r)}},Ns=function(e,r){return e&&(Ot(e)?e:Ge[e]||qk(e))||r},qs=function(e,r,a,o){a===void 0&&(a=function(h){return 1-r(1-h)}),o===void 0&&(o=function(h){return h<.5?r(h*2)/2:1-r((1-h)*2)/2});var u={easeIn:r,easeOut:a,easeInOut:o},c;return Wn(e,function(f){Ge[f]=Si[f]=u,Ge[c=f.toLowerCase()]=a;for(var h in u)Ge[c+(h==="easeIn"?".in":h==="easeOut"?".out":".inOut")]=Ge[f+"."+h]=u[h]}),u},QT=function(e){return function(r){return r<.5?(1-e(1-r*2))/2:.5+e((r-.5)*2)/2}},Im=function n(e,r,a){var o=r>=1?r:1,u=(a||(e?.3:.45))/(r<1?r:1),c=u/H0*(Math.asin(1/o)||0),f=function(g){return g===1?1:o*Math.pow(2,-10*g)*gk((g-c)*u)+1},h=e==="out"?f:e==="in"?function(p){return 1-f(1-p)}:QT(f);return u=H0/u,h.config=function(p,g){return n(e,p,g)},h},Zm=function n(e,r){r===void 0&&(r=1.70158);var a=function(c){return c?--c*c*((r+1)*c+r)+1:0},o=e==="out"?a:e==="in"?function(u){return 1-a(1-u)}:QT(a);return o.config=function(u){return n(e,u)},o};Wn("Linear,Quad,Cubic,Quart,Quint,Strong",function(n,e){var r=e<5?e+1:e;qs(n+",Power"+(r-1),e?function(a){return Math.pow(a,r)}:function(a){return a},function(a){return 1-Math.pow(1-a,r)},function(a){return a<.5?Math.pow(a*2,r)/2:1-Math.pow((1-a)*2,r)/2})});Ge.Linear.easeNone=Ge.none=Ge.Linear.easeIn;qs("Elastic",Im("in"),Im("out"),Im());(function(n,e){var r=1/e,a=2*r,o=2.5*r,u=function(f){return f<r?n*f*f:f<a?n*Math.pow(f-1.5/e,2)+.75:f<o?n*(f-=2.25/e)*f+.9375:n*Math.pow(f-2.625/e,2)+.984375};qs("Bounce",function(c){return 1-u(1-c)},u)})(7.5625,2.75);qs("Expo",function(n){return Math.pow(2,10*(n-1))*n+n*n*n*n*n*n*(1-n)});qs("Circ",function(n){return-(_T(1-n*n)-1)});qs("Sine",function(n){return n===1?1:-mk(n*hk)+1});qs("Back",Zm("in"),Zm("out"),Zm());Ge.SteppedEase=Ge.steps=Si.SteppedEase={config:function(e,r){e===void 0&&(e=1);var a=1/e,o=e+(r?0:1),u=r?1:0,c=1-En;return function(f){return((o*Ac(0,c,f)|0)+u)*a}}};lc.ease=Ge["quad.out"];Wn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(n){return dy+=n+","+n+"Params,"});var IT=function(e,r){this.id=pk++,e._gsap=this,this.target=e,this.harness=r,this.get=r?r.get:MT,this.set=r?r.getSetter:vy},hc=function(){function n(r){this.vars=r,this._delay=+r.delay||0,(this._repeat=r.repeat===1/0?-2:r.repeat||0)&&(this._rDelay=r.repeatDelay||0,this._yoyo=!!r.yoyo||!!r.yoyoEase),this._ts=1,fl(this,+r.duration,1,1),this.data=r.data,bt&&(this._ctx=bt,bt.data.push(this)),dc||vi.wake()}var e=n.prototype;return e.delay=function(a){return a||a===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+a-this._delay),this._delay=a,this):this._delay},e.duration=function(a){return arguments.length?this.totalDuration(this._repeat>0?a+(a+this._rDelay)*this._repeat:a):this.totalDuration()&&this._dur},e.totalDuration=function(a){return arguments.length?(this._dirty=0,fl(this,this._repeat<0?a:(a-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(a,o){if(dl(),!arguments.length)return this._tTime;var u=this._dp;if(u&&u.smoothChildTiming&&this._ts){for(vh(this,a),!u._dp||u.parent||zT(u,this);u&&u.parent;)u.parent._time!==u._start+(u._ts>=0?u._tTime/u._ts:(u.totalDuration()-u._tTime)/-u._ts)&&u.totalTime(u._tTime,!0),u=u.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&a<this._tDur||this._ts<0&&a>0||!this._tDur&&!a)&&xr(this._dp,this,this._start-this._delay)}return(this._tTime!==a||!this._dur&&!o||this._initted&&Math.abs(this._zTime)===En||!this._initted&&this._dur&&a||!a&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=a),DT(this,a,o)),this},e.time=function(a,o){return arguments.length?this.totalTime(Math.min(this.totalDuration(),a+fw(this))%(this._dur+this._rDelay)||(a?this._dur:0),o):this._time},e.totalProgress=function(a,o){return arguments.length?this.totalTime(this.totalDuration()*a,o):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(a,o){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-a:a)+fw(this),o):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(a,o){var u=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(a-1)*u,o):this._repeat?cl(this._tTime,u)+1:1},e.timeScale=function(a,o){if(!arguments.length)return this._rts===-1e-8?0:this._rts;if(this._rts===a)return this;var u=this.parent&&this._ts?Qd(this.parent._time,this):this._tTime;return this._rts=+a||0,this._ts=this._ps||a===-1e-8?0:this._rts,this.totalTime(Ac(-Math.abs(this._delay),this.totalDuration(),u),o!==!1),yh(this),Ek(this)},e.paused=function(a){return arguments.length?(this._ps!==a&&(this._ps=a,a?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(dl(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==En&&(this._tTime-=En)))),this):this._ps},e.startTime=function(a){if(arguments.length){this._start=Tt(a);var o=this.parent||this._dp;return o&&(o._sort||!this.parent)&&xr(o,this,this._start-this._delay),this}return this._start},e.endTime=function(a){return this._start+(Zn(a)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(a){var o=this.parent||this._dp;return o?a&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Qd(o.rawTime(a),this):this._tTime:this._tTime},e.revert=function(a){a===void 0&&(a=wk);var o=mn;return mn=a,py(this)&&(this.timeline&&this.timeline.revert(a),this.totalTime(-.01,a.suppressEvents)),this.data!=="nested"&&a.kill!==!1&&this.kill(),mn=o,this},e.globalTime=function(a){for(var o=this,u=arguments.length?a:o.rawTime();o;)u=o._start+u/(Math.abs(o._ts)||1),o=o._dp;return!this.parent&&this._sat?this._sat.globalTime(a):u},e.repeat=function(a){return arguments.length?(this._repeat=a===1/0?-2:a,dw(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(a){if(arguments.length){var o=this._time;return this._rDelay=a,dw(this),o?this.time(o):this}return this._rDelay},e.yoyo=function(a){return arguments.length?(this._yoyo=a,this):this._yoyo},e.seek=function(a,o){return this.totalTime(Yi(this,a),Zn(o))},e.restart=function(a,o){return this.play().totalTime(a?-this._delay:0,Zn(o)),this._dur||(this._zTime=-1e-8),this},e.play=function(a,o){return a!=null&&this.seek(a,o),this.reversed(!1).paused(!1)},e.reverse=function(a,o){return a!=null&&this.seek(a||this.totalDuration(),o),this.reversed(!0).paused(!1)},e.pause=function(a,o){return a!=null&&this.seek(a,o),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(a){return arguments.length?(!!a!==this.reversed()&&this.timeScale(-this._rts||(a?-1e-8:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-1e-8,this},e.isActive=function(){var a=this.parent||this._dp,o=this._start,u;return!!(!a||this._ts&&this._initted&&a.isActive()&&(u=a.rawTime(!0))>=o&&u<this.endTime(!0)-En)},e.eventCallback=function(a,o,u){var c=this.vars;return arguments.length>1?(o?(c[a]=o,u&&(c[a+"Params"]=u),a==="onUpdate"&&(this._onUpdate=o)):delete c[a],this):c[a]},e.then=function(a){var o=this,u=o._prom;return new Promise(function(c){var f=Ot(a)?a:kT,h=function(){var g=o.then;o.then=null,u&&u(),Ot(f)&&(f=f(o))&&(f.then||f===o)&&(o.then=g),c(f),o.then=g};o._initted&&o.totalProgress()===1&&o._ts>=0||!o._tTime&&o._ts<0?h():o._prom=h})},e.kill=function(){Au(this)},n}();Ti(hc.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-1e-8,_prom:0,_ps:!1,_rts:1});var Qn=function(n){bT(e,n);function e(a,o){var u;return a===void 0&&(a={}),u=n.call(this,a)||this,u.labels={},u.smoothChildTiming=!!a.smoothChildTiming,u.autoRemoveChildren=!!a.autoRemoveChildren,u._sort=Zn(a.sortChildren),At&&xr(a.parent||At,Wr(u),o),a.reversed&&u.reverse(),a.paused&&u.paused(!0),a.scrollTrigger&&NT(Wr(u),a.scrollTrigger),u}var r=e.prototype;return r.to=function(o,u,c){return Vu(0,arguments,this),this},r.from=function(o,u,c){return Vu(1,arguments,this),this},r.fromTo=function(o,u,c,f){return Vu(2,arguments,this),this},r.set=function(o,u,c){return u.duration=0,u.parent=this,Bu(u).repeatDelay||(u.repeat=0),u.immediateRender=!!u.immediateRender,new $t(o,u,Yi(this,c),1),this},r.call=function(o,u,c){return xr(this,$t.delayedCall(0,o,u),c)},r.staggerTo=function(o,u,c,f,h,p,g){return c.duration=u,c.stagger=c.stagger||f,c.onComplete=p,c.onCompleteParams=g,c.parent=this,new $t(o,c,Yi(this,h)),this},r.staggerFrom=function(o,u,c,f,h,p,g){return c.runBackwards=1,Bu(c).immediateRender=Zn(c.immediateRender),this.staggerTo(o,u,c,f,h,p,g)},r.staggerFromTo=function(o,u,c,f,h,p,g,y){return f.startAt=c,Bu(f).immediateRender=Zn(f.immediateRender),this.staggerTo(o,u,f,h,p,g,y)},r.render=function(o,u,c){var f=this._time,h=this._dirty?this.totalDuration():this._tDur,p=this._dur,g=o<=0?0:Tt(o),y=this._zTime<0!=o<0&&(this._initted||!p),x,v,w,S,C,E,M,R,O,j,P,D;if(this!==At&&g>h&&o>=0&&(g=h),g!==this._tTime||c||y){if(f!==this._time&&p&&(g+=this._time-f,o+=this._time-f),x=g,O=this._start,R=this._ts,E=!R,y&&(p||(f=this._zTime),(o||!u)&&(this._zTime=o)),this._repeat){if(P=this._yoyo,C=p+this._rDelay,this._repeat<-1&&o<0)return this.totalTime(C*100+o,u,c);if(x=Tt(g%C),g===h?(S=this._repeat,x=p):(j=Tt(g/C),S=~~j,S&&S===j&&(x=p,S--),x>p&&(x=p)),j=cl(this._tTime,C),!f&&this._tTime&&j!==S&&this._tTime-j*C-this._dur<=0&&(j=S),P&&S&1&&(x=p-x,D=1),S!==j&&!this._lock){var B=P&&j&1,G=B===(P&&S&1);if(S<j&&(B=!B),f=B?0:g%p?p:g,this._lock=1,this.render(f||(D?0:Tt(S*C)),u,!p)._lock=0,this._tTime=g,!u&&this.parent&&bi(this,"onRepeat"),this.vars.repeatRefresh&&!D&&(this.invalidate()._lock=1,j=S),f&&f!==this._time||E!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(p=this._dur,h=this._tDur,G&&(this._lock=2,f=B?p:-1e-4,this.render(f,!0),this.vars.repeatRefresh&&!D&&this.invalidate()),this._lock=0,!this._ts&&!E)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(M=Dk(this,Tt(f),Tt(x)),M&&(g-=x-(x=M._start))),this._tTime=g,this._time=x,this._act=!!R,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=o,f=0),!f&&g&&p&&!u&&!j&&(bi(this,"onStart"),this._tTime!==g))return this;if(x>=f&&o>=0)for(v=this._first;v;){if(w=v._next,(v._act||x>=v._start)&&v._ts&&M!==v){if(v.parent!==this)return this.render(o,u,c);if(v.render(v._ts>0?(x-v._start)*v._ts:(v._dirty?v.totalDuration():v._tDur)+(x-v._start)*v._ts,u,c),x!==this._time||!this._ts&&!E){M=0,w&&(g+=this._zTime=-1e-8);break}}v=w}else{v=this._last;for(var F=o<0?o:x;v;){if(w=v._prev,(v._act||F<=v._end)&&v._ts&&M!==v){if(v.parent!==this)return this.render(o,u,c);if(v.render(v._ts>0?(F-v._start)*v._ts:(v._dirty?v.totalDuration():v._tDur)+(F-v._start)*v._ts,u,c||mn&&py(v)),x!==this._time||!this._ts&&!E){M=0,w&&(g+=this._zTime=F?-1e-8:En);break}}v=w}}if(M&&!u&&(this.pause(),M.render(x>=f?0:-1e-8)._zTime=x>=f?1:-1,this._ts))return this._start=O,yh(this),this.render(o,u,c);this._onUpdate&&!u&&bi(this,"onUpdate",!0),(g===h&&this._tTime>=this.totalDuration()||!g&&f)&&(O===this._start||Math.abs(R)!==Math.abs(this._ts))&&(this._lock||((o||!p)&&(g===h&&this._ts>0||!g&&this._ts<0)&&$a(this,1),!u&&!(o<0&&!f)&&(g||f||!h)&&(bi(this,g===h&&o>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(g<h&&this.timeScale()>0)&&this._prom())))}return this},r.add=function(o,u){var c=this;if(oa(u)||(u=Yi(this,u,o)),!(o instanceof hc)){if(Cn(o))return o.forEach(function(f){return c.add(f,u)}),this;if(on(o))return this.addLabel(o,u);if(Ot(o))o=$t.delayedCall(0,o);else return this}return this!==o?xr(this,o,u):this},r.getChildren=function(o,u,c,f){o===void 0&&(o=!0),u===void 0&&(u=!0),c===void 0&&(c=!0),f===void 0&&(f=-1e8);for(var h=[],p=this._first;p;)p._start>=f&&(p instanceof $t?u&&h.push(p):(c&&h.push(p),o&&h.push.apply(h,p.getChildren(!0,u,c)))),p=p._next;return h},r.getById=function(o){for(var u=this.getChildren(1,1,1),c=u.length;c--;)if(u[c].vars.id===o)return u[c]},r.remove=function(o){return on(o)?this.removeLabel(o):Ot(o)?this.killTweensOf(o):(o.parent===this&&gh(this,o),o===this._recent&&(this._recent=this._last),zs(this))},r.totalTime=function(o,u){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Tt(vi.time-(this._ts>0?o/this._ts:(this.totalDuration()-o)/-this._ts))),n.prototype.totalTime.call(this,o,u),this._forcing=0,this):this._tTime},r.addLabel=function(o,u){return this.labels[o]=Yi(this,u),this},r.removeLabel=function(o){return delete this.labels[o],this},r.addPause=function(o,u,c){var f=$t.delayedCall(0,u||cc,c);return f.data="isPause",this._hasPause=1,xr(this,f,Yi(this,o))},r.removePause=function(o){var u=this._first;for(o=Yi(this,o);u;)u._start===o&&u.data==="isPause"&&$a(u),u=u._next},r.killTweensOf=function(o,u,c){for(var f=this.getTweensOf(o,c),h=f.length;h--;)La!==f[h]&&f[h].kill(o,u);return this},r.getTweensOf=function(o,u){for(var c=[],f=qi(o),h=this._first,p=oa(u),g;h;)h instanceof $t?Sk(h._targets,f)&&(p?(!La||h._initted&&h._ts)&&h.globalTime(0)<=u&&h.globalTime(h.totalDuration())>u:!u||h.isActive())&&c.push(h):(g=h.getTweensOf(f,u)).length&&c.push.apply(c,g),h=h._next;return c},r.tweenTo=function(o,u){u=u||{};var c=this,f=Yi(c,o),h=u,p=h.startAt,g=h.onStart,y=h.onStartParams,x=h.immediateRender,v,w=$t.to(c,Ti({ease:u.ease||"none",lazy:!1,immediateRender:!1,time:f,overwrite:"auto",duration:u.duration||Math.abs((f-(p&&"time"in p?p.time:c._time))/c.timeScale())||En,onStart:function(){if(c.pause(),!v){var C=u.duration||Math.abs((f-(p&&"time"in p?p.time:c._time))/c.timeScale());w._dur!==C&&fl(w,C,0,1).render(w._time,!0,!0),v=1}g&&g.apply(w,y||[])}},u));return x?w.render(0):w},r.tweenFromTo=function(o,u,c){return this.tweenTo(u,Ti({startAt:{time:Yi(this,o)}},c))},r.recent=function(){return this._recent},r.nextLabel=function(o){return o===void 0&&(o=this._time),hw(this,Yi(this,o))},r.previousLabel=function(o){return o===void 0&&(o=this._time),hw(this,Yi(this,o),1)},r.currentLabel=function(o){return arguments.length?this.seek(o,!0):this.previousLabel(this._time+En)},r.shiftChildren=function(o,u,c){c===void 0&&(c=0);var f=this._first,h=this.labels,p;for(o=Tt(o);f;)f._start>=c&&(f._start+=o,f._end+=o),f=f._next;if(u)for(p in h)h[p]>=c&&(h[p]+=o);return zs(this)},r.invalidate=function(o){var u=this._first;for(this._lock=0;u;)u.invalidate(o),u=u._next;return n.prototype.invalidate.call(this,o)},r.clear=function(o){o===void 0&&(o=!0);for(var u=this._first,c;u;)c=u._next,this.remove(u),u=c;return this._dp&&(this._time=this._tTime=this._pTime=0),o&&(this.labels={}),zs(this)},r.totalDuration=function(o){var u=0,c=this,f=c._last,h=Er,p,g,y;if(arguments.length)return c.timeScale((c._repeat<0?c.duration():c.totalDuration())/(c.reversed()?-o:o));if(c._dirty){for(y=c.parent;f;)p=f._prev,f._dirty&&f.totalDuration(),g=f._start,g>h&&c._sort&&f._ts&&!c._lock?(c._lock=1,xr(c,f,g-f._delay,1)._lock=0):h=g,g<0&&f._ts&&(u-=g,(!y&&!c._dp||y&&y.smoothChildTiming)&&(c._start+=Tt(g/c._ts),c._time-=g,c._tTime-=g),c.shiftChildren(-g,!1,-1/0),h=0),f._end>u&&f._ts&&(u=f._end),f=p;fl(c,c===At&&c._time>u?c._time:u,1,1),c._dirty=0}return c._tDur},e.updateRoot=function(o){if(At._ts&&(DT(At,Qd(o,At)),RT=vi.frame),vi.frame>=uw){uw+=wi.autoSleep||120;var u=At._first;if((!u||!u._ts)&&wi.autoSleep&&vi._listeners.length<2){for(;u&&!u._ts;)u=u._next;u||vi.sleep()}}},e}(hc);Ti(Qn.prototype,{_lock:0,_hasPause:0,_forcing:0});var $k=function(e,r,a,o,u,c,f){var h=new Jn(this._pt,e,r,0,1,n5,null,u),p=0,g=0,y,x,v,w,S,C,E,M;for(h.b=a,h.e=o,a+="",o+="",(E=~o.indexOf("random("))&&(o=fc(o)),c&&(M=[a,o],c(M,e,r),a=M[0],o=M[1]),x=a.match($m)||[];y=$m.exec(o);)w=y[0],S=o.substring(p,y.index),v?v=(v+1)%5:S.substr(-5)==="rgba("&&(v=1),w!==x[g++]&&(C=parseFloat(x[g-1])||0,h._pt={_next:h._pt,p:S||g===1?S:",",s:C,c:w.charAt(1)==="="?Ko(C,w)-C:parseFloat(w)-C,m:v&&v<4?Math.round:0},p=$m.lastIndex);return h.c=p<o.length?o.substring(p,o.length):"",h.fp=f,(TT.test(o)||E)&&(h.e=0),this._pt=h,h},my=function(e,r,a,o,u,c,f,h,p,g){Ot(o)&&(o=o(u||0,e,c));var y=e[r],x=a!=="get"?a:Ot(y)?p?e[r.indexOf("set")||!Ot(e["get"+r.substr(3)])?r:"get"+r.substr(3)](p):e[r]():y,v=Ot(y)?p?Wk:e5:yy,w;if(on(o)&&(~o.indexOf("random(")&&(o=fc(o)),o.charAt(1)==="="&&(w=Ko(x,o)+(Sn(x)||0),(w||w===0)&&(o=w))),!g||x!==o||Q0)return!isNaN(x*o)&&o!==""?(w=new Jn(this._pt,e,r,+x||0,o-(x||0),typeof y=="boolean"?e8:t5,0,v),p&&(w.fp=p),f&&w.modifier(f,this,e),this._pt=w):(!y&&!(r in e)&&cy(r,o),$k.call(this,e,r,x,o,v,h||wi.stringFilter,p))},Kk=function(e,r,a,o,u){if(Ot(e)&&(e=Uu(e,u,r,a,o)),!Rr(e)||e.style&&e.nodeType||Cn(e)||wT(e))return on(e)?Uu(e,u,r,a,o):e;var c={},f;for(f in e)c[f]=Uu(e[f],u,r,a,o);return c},ZT=function(e,r,a,o,u,c){var f,h,p,g;if(gi[e]&&(f=new gi[e]).init(u,f.rawVars?r[e]:Kk(r[e],o,u,c,a),a,o,c)!==!1&&(a._pt=h=new Jn(a._pt,u,e,0,1,f.render,f,0,f.priority),a!==Fo))for(p=a._ptLookup[a._targets.indexOf(u)],g=f._props.length;g--;)p[f._props[g]]=h;return f},La,Q0,gy=function n(e,r,a){var o=e.vars,u=o.ease,c=o.startAt,f=o.immediateRender,h=o.lazy,p=o.onUpdate,g=o.runBackwards,y=o.yoyoEase,x=o.keyframes,v=o.autoRevert,w=e._dur,S=e._startAt,C=e._targets,E=e.parent,M=E&&E.data==="nested"?E.vars.targets:C,R=e._overwrite==="auto"&&!sy,O=e.timeline,j=o.easeReverse||y,P,D,B,G,F,re,J,ye,pe,ge,Y,K,ee;if(O&&(!x||!u)&&(u="none"),e._ease=Ns(u,lc.ease),e._rEase=j&&(Ns(j)||e._ease),e._from=!O&&!!o.runBackwards,e._from&&(e.ratio=1),!O||x&&!o.stagger){if(ye=C[0]?Os(C[0]).harness:0,K=ye&&o[ye.prop],P=Kd(o,fy),S&&(S._zTime<0&&S.progress(1),r<0&&g&&f&&!v?S.render(-1,!0):S.revert(g&&w?Ad:_k),S._lazy=0),c){if($a(e._startAt=$t.set(C,Ti({data:"isStart",overwrite:!1,parent:E,immediateRender:!0,lazy:!S&&Zn(h),startAt:null,delay:0,onUpdate:p&&function(){return bi(e,"onUpdate")},stagger:0},c))),e._startAt._dp=0,e._startAt._sat=e,r<0&&(mn||!f&&!v)&&e._startAt.revert(Ad),f&&w&&r<=0&&a<=0){r&&(e._zTime=r);return}}else if(g&&w&&!S){if(r&&(f=!1),B=Ti({overwrite:!1,data:"isFromStart",lazy:f&&!S&&Zn(h),immediateRender:f,stagger:0,parent:E},P),K&&(B[ye.prop]=K),$a(e._startAt=$t.set(C,B)),e._startAt._dp=0,e._startAt._sat=e,r<0&&(mn?e._startAt.revert(Ad):e._startAt.render(-1,!0)),e._zTime=r,!f)n(e._startAt,En,En);else if(!r)return}for(e._pt=e._ptCache=0,h=w&&Zn(h)||h&&!w,D=0;D<C.length;D++){if(F=C[D],J=F._gsap||hy(C)[D]._gsap,e._ptLookup[D]=ge={},G0[J.id]&&Ya.length&&$d(),Y=M===C?D:M.indexOf(F),ye&&(pe=new ye).init(F,K||P,e,Y,M)!==!1&&(e._pt=G=new Jn(e._pt,F,pe.name,0,1,pe.render,pe,0,pe.priority),pe._props.forEach(function(se){ge[se]=G}),pe.priority&&(re=1)),!ye||K)for(B in P)gi[B]&&(pe=ZT(B,P,e,Y,F,M))?pe.priority&&(re=1):ge[B]=G=my.call(e,F,B,"get",P[B],Y,M,0,o.stringFilter);e._op&&e._op[D]&&e.kill(F,e._op[D]),R&&e._pt&&(La=e,At.killTweensOf(F,ge,e.globalTime(r)),ee=!e.parent,La=0),e._pt&&h&&(G0[J.id]=1)}re&&i5(e),e._onInit&&e._onInit(e)}e._onUpdate=p,e._initted=(!e._op||e._pt)&&!ee,x&&r<=0&&O.render(Er,!0,!0)},Qk=function(e,r,a,o,u,c,f,h){var p=(e._pt&&e._ptCache||(e._ptCache={}))[r],g,y,x,v;if(!p)for(p=e._ptCache[r]=[],x=e._ptLookup,v=e._targets.length;v--;){if(g=x[v][r],g&&g.d&&g.d._pt)for(g=g.d._pt;g&&g.p!==r&&g.fp!==r;)g=g._next;if(!g)return Q0=1,e.vars[r]="+=0",gy(e,f),Q0=0,h?uc(r+" not eligible for reset. Try splitting into individual properties"):1;p.push(g)}for(v=p.length;v--;)y=p[v],g=y._pt||y,g.s=(o||o===0)&&!u?o:g.s+(o||0)+c*g.c,g.c=a-g.s,y.e&&(y.e=Bt(a)+Sn(y.e)),y.b&&(y.b=g.s+Sn(y.b))},Ik=function(e,r){var a=e[0]?Os(e[0]).harness:0,o=a&&a.aliases,u,c,f,h;if(!o)return r;u=ul({},r);for(c in o)if(c in u)for(h=o[c].split(","),f=h.length;f--;)u[h[f]]=u[c];return u},Zk=function(e,r,a,o){var u=r.ease||o||"power1.inOut",c,f;if(Cn(r))f=a[e]||(a[e]=[]),r.forEach(function(h,p){return f.push({t:p/(r.length-1)*100,v:h,e:u})});else for(c in r)f=a[c]||(a[c]=[]),c==="ease"||f.push({t:parseFloat(e),v:r[c],e:u})},Uu=function(e,r,a,o,u){return Ot(e)?e.call(r,a,o,u):on(e)&&~e.indexOf("random(")?fc(e):e},WT=dy+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",JT={};Wn(WT+",id,stagger,delay,duration,paused,scrollTrigger",function(n){return JT[n]=1});var $t=function(n){bT(e,n);function e(a,o,u,c){var f;typeof o=="number"&&(u.duration=o,o=u,u=null),f=n.call(this,c?o:Bu(o))||this;var h=f.vars,p=h.duration,g=h.delay,y=h.immediateRender,x=h.stagger,v=h.overwrite,w=h.keyframes,S=h.defaults,C=h.scrollTrigger,E=o.parent||At,M=(Cn(a)||wT(a)?oa(a[0]):"length"in o)?[a]:qi(a),R,O,j,P,D,B,G,F;if(f._targets=M.length?hy(M):uc("GSAP target "+a+" not found. https://gsap.com",!wi.nullTargetWarn)||[],f._ptLookup=[],f._overwrite=v,w||x||Yf(p)||Yf(g)){o=f.vars;var re=o.easeReverse||o.yoyoEase;if(R=f.timeline=new Qn({data:"nested",defaults:S||{},targets:E&&E.data==="nested"?E.vars.targets:M}),R.kill(),R.parent=R._dp=Wr(f),R._start=0,x||Yf(p)||Yf(g)){if(P=M.length,G=x&&VT(x),Rr(x))for(D in x)~WT.indexOf(D)&&(F||(F={}),F[D]=x[D]);for(O=0;O<P;O++)j=Kd(o,JT),j.stagger=0,re&&(j.easeReverse=re),F&&ul(j,F),B=M[O],j.duration=+Uu(p,Wr(f),O,B,M),j.delay=(+Uu(g,Wr(f),O,B,M)||0)-f._delay,!x&&P===1&&j.delay&&(f._delay=g=j.delay,f._start+=g,j.delay=0),R.to(B,j,G?G(O,B,M):0),R._ease=Ge.none;R.duration()?p=g=0:f.timeline=0}else if(w){Bu(Ti(R.vars.defaults,{ease:"none"})),R._ease=Ns(w.ease||o.ease||"none");var J=0,ye,pe,ge;if(Cn(w))w.forEach(function(Y){return R.to(M,Y,">")}),R.duration();else{j={};for(D in w)D==="ease"||D==="easeEach"||Zk(D,w[D],j,w.easeEach);for(D in j)for(ye=j[D].sort(function(Y,K){return Y.t-K.t}),J=0,O=0;O<ye.length;O++)pe=ye[O],ge={ease:pe.e,duration:(pe.t-(O?ye[O-1].t:0))/100*p},ge[D]=pe.v,R.to(M,ge,J),J+=ge.duration;R.duration()<p&&R.to({},{duration:p-R.duration()})}}p||f.duration(p=R.duration())}else f.timeline=0;return v===!0&&!sy&&(La=Wr(f),At.killTweensOf(M),La=0),xr(E,Wr(f),u),o.reversed&&f.reverse(),o.paused&&f.paused(!0),(y||!p&&!w&&f._start===Tt(E._time)&&Zn(y)&&Ck(Wr(f))&&E.data!=="nested")&&(f._tTime=-1e-8,f.render(Math.max(0,-g)||0)),C&&NT(Wr(f),C),f}var r=e.prototype;return r.render=function(o,u,c){var f=this._time,h=this._tDur,p=this._dur,g=o<0,y=o>h-En&&!g?h:o<En?0:o,x,v,w,S,C,E,M,R;if(!p)Mk(this,o,u,c);else if(y!==this._tTime||!o||c||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==g||this._lazy){if(x=y,R=this.timeline,this._repeat){if(S=p+this._rDelay,this._repeat<-1&&g)return this.totalTime(S*100+o,u,c);if(x=Tt(y%S),y===h?(w=this._repeat,x=p):(C=Tt(y/S),w=~~C,w&&w===C?(x=p,w--):x>p&&(x=p)),E=this._yoyo&&w&1,E&&(x=p-x),C=cl(this._tTime,S),x===f&&!c&&this._initted&&w===C)return this._tTime=y,this;w!==C&&this.vars.repeatRefresh&&!E&&!this._lock&&x!==S&&this._initted&&(this._lock=c=1,this.render(Tt(S*w),!0).invalidate()._lock=0)}if(!this._initted){if(PT(this,g?o:x,c,u,y))return this._tTime=0,this;if(f!==this._time&&!(c&&this.vars.repeatRefresh&&w!==C))return this;if(p!==this._dur)return this.render(o,u,c)}if(this._rEase){var O=x<f;if(O!==this._inv){var j=O?f:p-f;this._inv=O,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=f,this._invRecip=j?(O?-1:1)/j:0,this._invScale=O?-this.ratio:1-this.ratio,this._invEase=O?this._rEase:this._ease}this.ratio=M=this._invRatio+this._invScale*this._invEase((x-this._invTime)*this._invRecip)}else this.ratio=M=this._ease(x/p);if(this._from&&(this.ratio=M=1-M),this._tTime=y,this._time=x,!this._act&&this._ts&&(this._act=1,this._lazy=0),!f&&y&&!u&&!C&&(bi(this,"onStart"),this._tTime!==y))return this;for(v=this._pt;v;)v.r(M,v.d),v=v._next;R&&R.render(o<0?o:R._dur*R._ease(x/this._dur),u,c)||this._startAt&&(this._zTime=o),this._onUpdate&&!u&&(g&&X0(this,o,u,c),bi(this,"onUpdate")),this._repeat&&w!==C&&this.vars.onRepeat&&!u&&this.parent&&bi(this,"onRepeat"),(y===this._tDur||!y)&&this._tTime===y&&(g&&!this._onUpdate&&X0(this,o,!0,!0),(o||!p)&&(y===this._tDur&&this._ts>0||!y&&this._ts<0)&&$a(this,1),!u&&!(g&&!f)&&(y||f||E)&&(bi(this,y===h?"onComplete":"onReverseComplete",!0),this._prom&&!(y<h&&this.timeScale()>0)&&this._prom()))}return this},r.targets=function(){return this._targets},r.invalidate=function(o){return(!o||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(o),n.prototype.invalidate.call(this,o)},r.resetTo=function(o,u,c,f,h){dc||vi.wake(),this._ts||this.play();var p=Math.min(this._dur,(this._dp._time-this._start)*this._ts),g;return this._initted||gy(this,p),g=this._ease(p/this._dur),Qk(this,o,u,c,f,g,p,h)?this.resetTo(o,u,c,f,1):(vh(this,0),this.parent||OT(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},r.kill=function(o,u){if(u===void 0&&(u="all"),!o&&(!u||u==="all"))return this._lazy=this._pt=0,this.parent?Au(this):this.scrollTrigger&&this.scrollTrigger.kill(!!mn),this;if(this.timeline){var c=this.timeline.totalDuration();return this.timeline.killTweensOf(o,u,La&&La.vars.overwrite!==!0)._first||Au(this),this.parent&&c!==this.timeline.totalDuration()&&fl(this,this._dur*this.timeline._tDur/c,0,1),this}var f=this._targets,h=o?qi(o):f,p=this._ptLookup,g=this._pt,y,x,v,w,S,C,E;if((!u||u==="all")&&Ak(f,h))return u==="all"&&(this._pt=0),Au(this);for(y=this._op=this._op||[],u!=="all"&&(on(u)&&(S={},Wn(u,function(M){return S[M]=1}),u=S),u=Ik(f,u)),E=f.length;E--;)if(~h.indexOf(f[E])){x=p[E],u==="all"?(y[E]=u,w=x,v={}):(v=y[E]=y[E]||{},w=u);for(S in w)C=x&&x[S],C&&((!("kill"in C.d)||C.d.kill(S)===!0)&&gh(this,C,"_pt"),delete x[S]),v!=="all"&&(v[S]=1)}return this._initted&&!this._pt&&g&&Au(this),this},e.to=function(o,u){return new e(o,u,arguments[2])},e.from=function(o,u){return Vu(1,arguments)},e.delayedCall=function(o,u,c,f){return new e(u,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:o,onComplete:u,onReverseComplete:u,onCompleteParams:c,onReverseCompleteParams:c,callbackScope:f})},e.fromTo=function(o,u,c){return Vu(2,arguments)},e.set=function(o,u){return u.duration=0,u.repeatDelay||(u.repeat=0),new e(o,u)},e.killTweensOf=function(o,u,c){return At.killTweensOf(o,u,c)},e}(hc);Ti($t.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Wn("staggerTo,staggerFrom,staggerFromTo",function(n){$t[n]=function(){var e=new Qn,r=F0.call(arguments,0);return r.splice(n==="staggerFromTo"?5:4,0,0),e[n].apply(e,r)}});var yy=function(e,r,a){return e[r]=a},e5=function(e,r,a){return e[r](a)},Wk=function(e,r,a,o){return e[r](o.fp,a)},Jk=function(e,r,a){return e.setAttribute(r,a)},vy=function(e,r){return Ot(e[r])?e5:oy(e[r])&&e.setAttribute?Jk:yy},t5=function(e,r){return r.set(r.t,r.p,Math.round((r.s+r.c*e)*1e6)/1e6,r)},e8=function(e,r){return r.set(r.t,r.p,!!(r.s+r.c*e),r)},n5=function(e,r){var a=r._pt,o="";if(!e&&r.b)o=r.b;else if(e===1&&r.e)o=r.e;else{for(;a;)o=a.p+(a.m?a.m(a.s+a.c*e):Math.round((a.s+a.c*e)*1e4)/1e4)+o,a=a._next;o+=r.c}r.set(r.t,r.p,o,r)},xy=function(e,r){for(var a=r._pt;a;)a.r(e,a.d),a=a._next},t8=function(e,r,a,o){for(var u=this._pt,c;u;)c=u._next,u.p===o&&u.modifier(e,r,a),u=c},n8=function(e){for(var r=this._pt,a,o;r;)o=r._next,r.p===e&&!r.op||r.op===e?gh(this,r,"_pt"):r.dep||(a=1),r=o;return!a},i8=function(e,r,a,o){o.mSet(e,r,o.m.call(o.tween,a,o.mt),o)},i5=function(e){for(var r=e._pt,a,o,u,c;r;){for(a=r._next,o=u;o&&o.pr>r.pr;)o=o._next;(r._prev=o?o._prev:c)?r._prev._next=r:u=r,(r._next=o)?o._prev=r:c=r,r=a}e._pt=u},Jn=function(){function n(r,a,o,u,c,f,h,p,g){this.t=a,this.s=u,this.c=c,this.p=o,this.r=f||t5,this.d=h||this,this.set=p||yy,this.pr=g||0,this._next=r,r&&(r._prev=this)}var e=n.prototype;return e.modifier=function(a,o,u){this.mSet=this.mSet||this.set,this.set=i8,this.m=a,this.mt=u,this.tween=o},n}();Wn(dy+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(n){return fy[n]=1});Si.TweenMax=Si.TweenLite=$t;Si.TimelineLite=Si.TimelineMax=Qn;At=new Qn({sortChildren:!1,defaults:lc,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});wi.stringFilter=KT;var Ps=[],Cd={},r8=[],mw=0,a8=0,Wm=function(e){return(Cd[e]||r8).map(function(r){return r()})},I0=function(){var e=Date.now(),r=[];e-mw>2&&(Wm("matchMediaInit"),Ps.forEach(function(a){var o=a.queries,u=a.conditions,c,f,h,p;for(f in o)c=gr.matchMedia(o[f]).matches,c&&(h=1),c!==u[f]&&(u[f]=c,p=1);p&&(a.revert(),h&&r.push(a))}),Wm("matchMediaRevert"),r.forEach(function(a){return a.onMatch(a,function(o){return a.add(null,o)})}),mw=e,Wm("matchMedia"))},r5=function(){function n(r,a){this.selector=a&&$0(a),this.data=[],this._r=[],this.isReverted=!1,this.id=a8++,r&&this.add(r)}var e=n.prototype;return e.add=function(a,o,u){Ot(a)&&(u=o,o=a,a=Ot);var c=this,f=function(){var p=bt,g=c.selector,y;return p&&p!==c&&p.data.push(c),u&&(c.selector=$0(u)),bt=c,y=o.apply(c,arguments),Ot(y)&&c._r.push(y),bt=p,c.selector=g,c.isReverted=!1,y};return c.last=f,a===Ot?f(c,function(h){return c.add(null,h)}):a?c[a]=f:f},e.ignore=function(a){var o=bt;bt=null,a(this),bt=o},e.getTweens=function(){var a=[];return this.data.forEach(function(o){return o instanceof n?a.push.apply(a,o.getTweens()):o instanceof $t&&!(o.parent&&o.parent.data==="nested")&&a.push(o)}),a},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(a,o){var u=this;if(a?function(){for(var f=u.getTweens(),h=u.data.length,p;h--;)p=u.data[h],p.data==="isFlip"&&(p.revert(),p.getChildren(!0,!0,!1).forEach(function(g){return f.splice(f.indexOf(g),1)}));for(f.map(function(g){return{g:g._dur||g._delay||g._sat&&!g._sat.vars.immediateRender?g.globalTime(0):-1/0,t:g}}).sort(function(g,y){return y.g-g.g||-1/0}).forEach(function(g){return g.t.revert(a)}),h=u.data.length;h--;)p=u.data[h],p instanceof Qn?p.data!=="nested"&&(p.scrollTrigger&&p.scrollTrigger.revert(),p.kill()):!(p instanceof $t)&&p.revert&&p.revert(a);u._r.forEach(function(g){return g(a,u)}),u.isReverted=!0}():this.data.forEach(function(f){return f.kill&&f.kill()}),this.clear(),o)for(var c=Ps.length;c--;)Ps[c].id===this.id&&Ps.splice(c,1)},e.revert=function(a){this.kill(a||{})},n}(),s8=function(){function n(r){this.contexts=[],this.scope=r,bt&&bt.data.push(this)}var e=n.prototype;return e.add=function(a,o,u){Rr(a)||(a={matches:a});var c=new r5(0,u||this.scope),f=c.conditions={},h,p,g;bt&&!c.selector&&(c.selector=bt.selector),this.contexts.push(c),o=c.add("onMatch",o),c.queries=a;for(p in a)p==="all"?g=1:(h=gr.matchMedia(a[p]),h&&(Ps.indexOf(c)<0&&Ps.push(c),(f[p]=h.matches)&&(g=1),h.addListener?h.addListener(I0):h.addEventListener("change",I0)));return g&&o(c,function(y){return c.add(null,y)}),this},e.revert=function(a){this.kill(a||{})},e.kill=function(a){this.contexts.forEach(function(o){return o.kill(a,!0)})},n}(),Id={registerPlugin:function(){for(var e=arguments.length,r=new Array(e),a=0;a<e;a++)r[a]=arguments[a];r.forEach(function(o){return qT(o)})},timeline:function(e){return new Qn(e)},getTweensOf:function(e,r){return At.getTweensOf(e,r)},getProperty:function(e,r,a,o){on(e)&&(e=qi(e)[0]);var u=Os(e||{}).get,c=a?kT:jT;return a==="native"&&(a=""),e&&(r?c((gi[r]&&gi[r].get||u)(e,r,a,o)):function(f,h,p){return c((gi[f]&&gi[f].get||u)(e,f,h,p))})},quickSetter:function(e,r,a){if(e=qi(e),e.length>1){var o=e.map(function(g){return ti.quickSetter(g,r,a)}),u=o.length;return function(g){for(var y=u;y--;)o[y](g)}}e=e[0]||{};var c=gi[r],f=Os(e),h=f.harness&&(f.harness.aliases||{})[r]||r,p=c?function(g){var y=new c;Fo._pt=0,y.init(e,a?g+a:g,Fo,0,[e]),y.render(1,y),Fo._pt&&xy(1,Fo)}:f.set(e,h);return c?p:function(g){return p(e,h,a?g+a:g,f,1)}},quickTo:function(e,r,a){var o,u=ti.to(e,Ti((o={},o[r]="+=0.1",o.paused=!0,o.stagger=0,o),a||{})),c=function(h,p,g){return u.resetTo(r,h,p,g)};return c.tween=u,c},isTweening:function(e){return At.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Ns(e.ease,lc.ease)),cw(lc,e||{})},config:function(e){return cw(wi,e||{})},registerEffect:function(e){var r=e.name,a=e.effect,o=e.plugins,u=e.defaults,c=e.extendTimeline;(o||"").split(",").forEach(function(f){return f&&!gi[f]&&!Si[f]&&uc(r+" effect requires "+f+" plugin.")}),Km[r]=function(f,h,p){return a(qi(f),Ti(h||{},u),p)},c&&(Qn.prototype[r]=function(f,h,p){return this.add(Km[r](f,Rr(h)?h:(p=h)&&{},this),p)})},registerEase:function(e,r){Ge[e]=Ns(r)},parseEase:function(e,r){return arguments.length?Ns(e,r):Ge},getById:function(e){return At.getById(e)},exportRoot:function(e,r){e===void 0&&(e={});var a=new Qn(e),o,u;for(a.smoothChildTiming=Zn(e.smoothChildTiming),At.remove(a),a._dp=0,a._time=a._tTime=At._time,o=At._first;o;)u=o._next,(r||!(!o._dur&&o instanceof $t&&o.vars.onComplete===o._targets[0]))&&xr(a,o,o._start-o._delay),o=u;return xr(At,a,0),a},context:function(e,r){return e?new r5(e,r):bt},matchMedia:function(e){return new s8(e)},matchMediaRefresh:function(){return Ps.forEach(function(e){var r=e.conditions,a,o;for(o in r)r[o]&&(r[o]=!1,a=1);a&&e.revert()})||I0()},addEventListener:function(e,r){var a=Cd[e]||(Cd[e]=[]);~a.indexOf(r)||a.push(r)},removeEventListener:function(e,r){var a=Cd[e],o=a&&a.indexOf(r);o>=0&&a.splice(o,1)},utils:{wrap:Lk,wrapYoyo:Bk,distribute:VT,random:HT,snap:UT,normalize:Pk,getUnit:Sn,clamp:kk,splitColor:FT,toArray:qi,selector:$0,mapRange:GT,pipe:zk,unitize:Nk,interpolate:Vk,shuffle:BT},install:ET,effects:Km,ticker:vi,updateRoot:Qn.updateRoot,plugins:gi,globalTimeline:At,core:{PropTween:Jn,globals:CT,Tween:$t,Timeline:Qn,Animation:hc,getCache:Os,_removeLinkedListItem:gh,reverting:function(){return mn},context:function(e){return e&&bt&&(bt.data.push(e),e._ctx=bt),bt},suppressOverwrites:function(e){return sy=e}}};Wn("to,from,fromTo,delayedCall,set,killTweensOf",function(n){return Id[n]=$t[n]});vi.add(Qn.updateRoot);Fo=Id.to({},{duration:0});var o8=function(e,r){for(var a=e._pt;a&&a.p!==r&&a.op!==r&&a.fp!==r;)a=a._next;return a},l8=function(e,r){var a=e._targets,o,u,c;for(o in r)for(u=a.length;u--;)c=e._ptLookup[u][o],c&&(c=c.d)&&(c._pt&&(c=o8(c,o)),c&&c.modifier&&c.modifier(r[o],e,a[u],o))},Jm=function(e,r){return{name:e,headless:1,rawVars:1,init:function(o,u,c){c._onInit=function(f){var h,p;if(on(u)&&(h={},Wn(u,function(g){return h[g]=1}),u=h),r){h={};for(p in u)h[p]=r(u[p]);u=h}l8(f,u)}}}},ti=Id.registerPlugin({name:"attr",init:function(e,r,a,o,u){var c,f,h;this.tween=a;for(c in r)h=e.getAttribute(c)||"",f=this.add(e,"setAttribute",(h||0)+"",r[c],o,u,0,0,c),f.op=c,f.b=h,this._props.push(c)},render:function(e,r){for(var a=r._pt;a;)mn?a.set(a.t,a.p,a.b,a):a.r(e,a.d),a=a._next}},{name:"endArray",headless:1,init:function(e,r){for(var a=r.length;a--;)this.add(e,a,e[a]||0,r[a],0,0,0,0,0,1)}},Jm("roundProps",K0),Jm("modifiers"),Jm("snap",UT))||Id;$t.version=Qn.version=ti.version="3.15.0";AT=1;ly()&&dl();Ge.Power0;Ge.Power1;Ge.Power2;Ge.Power3;Ge.Power4;Ge.Linear;Ge.Quad;Ge.Cubic;Ge.Quart;Ge.Quint;Ge.Strong;Ge.Elastic;Ge.Back;Ge.SteppedEase;Ge.Bounce;Ge.Sine;Ge.Expo;Ge.Circ;/*!
 * CSSPlugin 3.15.0
 * https://gsap.com
 *
 * Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var gw,Ba,Qo,by,Rs,yw,_y,u8=function(){return typeof window<"u"},la={},ws=180/Math.PI,Io=Math.PI/180,Co=Math.atan2,vw=1e8,wy=/([A-Z])/g,c8=/(left|right|width|margin|padding|x)/i,f8=/[\s,\(]\S/,br={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Z0=function(e,r){return r.set(r.t,r.p,Math.round((r.s+r.c*e)*1e4)/1e4+r.u,r)},d8=function(e,r){return r.set(r.t,r.p,e===1?r.e:Math.round((r.s+r.c*e)*1e4)/1e4+r.u,r)},h8=function(e,r){return r.set(r.t,r.p,e?Math.round((r.s+r.c*e)*1e4)/1e4+r.u:r.b,r)},p8=function(e,r){return r.set(r.t,r.p,e===1?r.e:e?Math.round((r.s+r.c*e)*1e4)/1e4+r.u:r.b,r)},m8=function(e,r){var a=r.s+r.c*e;r.set(r.t,r.p,~~(a+(a<0?-.5:.5))+r.u,r)},a5=function(e,r){return r.set(r.t,r.p,e?r.e:r.b,r)},s5=function(e,r){return r.set(r.t,r.p,e!==1?r.b:r.e,r)},g8=function(e,r,a){return e.style[r]=a},y8=function(e,r,a){return e.style.setProperty(r,a)},v8=function(e,r,a){return e._gsap[r]=a},x8=function(e,r,a){return e._gsap.scaleX=e._gsap.scaleY=a},b8=function(e,r,a,o,u){var c=e._gsap;c.scaleX=c.scaleY=a,c.renderTransform(u,c)},_8=function(e,r,a,o,u){var c=e._gsap;c[r]=a,c.renderTransform(u,c)},Ct="transform",ei=Ct+"Origin",w8=function n(e,r){var a=this,o=this.target,u=o.style,c=o._gsap;if(e in la&&u){if(this.tfm=this.tfm||{},e!=="transform")e=br[e]||e,~e.indexOf(",")?e.split(",").forEach(function(f){return a.tfm[f]=Jr(o,f)}):this.tfm[e]=c.x?c[e]:Jr(o,e),e===ei&&(this.tfm.zOrigin=c.zOrigin);else return br.transform.split(",").forEach(function(f){return n.call(a,f,r)});if(this.props.indexOf(Ct)>=0)return;c.svg&&(this.svgo=o.getAttribute("data-svg-origin"),this.props.push(ei,r,"")),e=Ct}(u||r)&&this.props.push(e,r,u[e])},o5=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},S8=function(){var e=this.props,r=this.target,a=r.style,o=r._gsap,u,c;for(u=0;u<e.length;u+=3)e[u+1]?e[u+1]===2?r[e[u]](e[u+2]):r[e[u]]=e[u+2]:e[u+2]?a[e[u]]=e[u+2]:a.removeProperty(e[u].substr(0,2)==="--"?e[u]:e[u].replace(wy,"-$1").toLowerCase());if(this.tfm){for(c in this.tfm)o[c]=this.tfm[c];o.svg&&(o.renderTransform(),r.setAttribute("data-svg-origin",this.svgo||"")),u=_y(),(!u||!u.isStart)&&!a[Ct]&&(o5(a),o.zOrigin&&a[ei]&&(a[ei]+=" "+o.zOrigin+"px",o.zOrigin=0,o.renderTransform()),o.uncache=1)}},l5=function(e,r){var a={target:e,props:[],revert:S8,save:w8};return e._gsap||ti.core.getCache(e),r&&e.style&&e.nodeType&&r.split(",").forEach(function(o){return a.save(o)}),a},u5,W0=function(e,r){var a=Ba.createElementNS?Ba.createElementNS((r||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Ba.createElement(e);return a&&a.style?a:Ba.createElement(e)},_i=function n(e,r,a){var o=getComputedStyle(e);return o[r]||o.getPropertyValue(r.replace(wy,"-$1").toLowerCase())||o.getPropertyValue(r)||!a&&n(e,hl(r)||r,1)||""},xw="O,Moz,ms,Ms,Webkit".split(","),hl=function(e,r,a){var o=r||Rs,u=o.style,c=5;if(e in u&&!a)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);c--&&!(xw[c]+e in u););return c<0?null:(c===3?"ms":c>=0?xw[c]:"")+e},J0=function(){u8()&&window.document&&(gw=window,Ba=gw.document,Qo=Ba.documentElement,Rs=W0("div")||{style:{}},W0("div"),Ct=hl(Ct),ei=Ct+"Origin",Rs.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",u5=!!hl("perspective"),_y=ti.core.reverting,by=1)},bw=function(e){var r=e.ownerSVGElement,a=W0("svg",r&&r.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),o=e.cloneNode(!0),u;o.style.display="block",a.appendChild(o),Qo.appendChild(a);try{u=o.getBBox()}catch{}return a.removeChild(o),Qo.removeChild(a),u},_w=function(e,r){for(var a=r.length;a--;)if(e.hasAttribute(r[a]))return e.getAttribute(r[a])},c5=function(e){var r,a;try{r=e.getBBox()}catch{r=bw(e),a=1}return r&&(r.width||r.height)||a||(r=bw(e)),r&&!r.width&&!r.x&&!r.y?{x:+_w(e,["x","cx","x1"])||0,y:+_w(e,["y","cy","y1"])||0,width:0,height:0}:r},f5=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&c5(e))},Ka=function(e,r){if(r){var a=e.style,o;r in la&&r!==ei&&(r=Ct),a.removeProperty?(o=r.substr(0,2),(o==="ms"||r.substr(0,6)==="webkit")&&(r="-"+r),a.removeProperty(o==="--"?r:r.replace(wy,"-$1").toLowerCase())):a.removeAttribute(r)}},Va=function(e,r,a,o,u,c){var f=new Jn(e._pt,r,a,0,1,c?s5:a5);return e._pt=f,f.b=o,f.e=u,e._props.push(a),f},ww={deg:1,rad:1,turn:1},T8={grid:1,flex:1},Qa=function n(e,r,a,o){var u=parseFloat(a)||0,c=(a+"").trim().substr((u+"").length)||"px",f=Rs.style,h=c8.test(r),p=e.tagName.toLowerCase()==="svg",g=(p?"client":"offset")+(h?"Width":"Height"),y=100,x=o==="px",v=o==="%",w,S,C,E;if(o===c||!u||ww[o]||ww[c])return u;if(c!=="px"&&!x&&(u=n(e,r,a,"px")),E=e.getCTM&&f5(e),(v||c==="%")&&(la[r]||~r.indexOf("adius")))return w=E?e.getBBox()[h?"width":"height"]:e[g],Bt(v?u/w*y:u/100*w);if(f[h?"width":"height"]=y+(x?c:o),S=o!=="rem"&&~r.indexOf("adius")||o==="em"&&e.appendChild&&!p?e:e.parentNode,E&&(S=(e.ownerSVGElement||{}).parentNode),(!S||S===Ba||!S.appendChild)&&(S=Ba.body),C=S._gsap,C&&v&&C.width&&h&&C.time===vi.time&&!C.uncache)return Bt(u/C.width*y);if(v&&(r==="height"||r==="width")){var M=e.style[r];e.style[r]=y+o,w=e[g],M?e.style[r]=M:Ka(e,r)}else(v||c==="%")&&!T8[_i(S,"display")]&&(f.position=_i(e,"position")),S===e&&(f.position="static"),S.appendChild(Rs),w=Rs[g],S.removeChild(Rs),f.position="absolute";return h&&v&&(C=Os(S),C.time=vi.time,C.width=S[g]),Bt(x?w*u/y:w&&u?y/w*u:0)},Jr=function(e,r,a,o){var u;return by||J0(),r in br&&r!=="transform"&&(r=br[r],~r.indexOf(",")&&(r=r.split(",")[0])),la[r]&&r!=="transform"?(u=mc(e,o),u=r!=="transformOrigin"?u[r]:u.svg?u.origin:Wd(_i(e,ei))+" "+u.zOrigin+"px"):(u=e.style[r],(!u||u==="auto"||o||~(u+"").indexOf("calc("))&&(u=Zd[r]&&Zd[r](e,r,a)||_i(e,r)||MT(e,r)||(r==="opacity"?1:0))),a&&!~(u+"").trim().indexOf(" ")?Qa(e,r,u,a)+a:u},A8=function(e,r,a,o){if(!a||a==="none"){var u=hl(r,e,1),c=u&&_i(e,u,1);c&&c!==a?(r=u,a=c):r==="borderColor"&&(a=_i(e,"borderTopColor"))}var f=new Jn(this._pt,e.style,r,0,1,n5),h=0,p=0,g,y,x,v,w,S,C,E,M,R,O,j;if(f.b=a,f.e=o,a+="",o+="",o.substring(0,6)==="var(--"&&(o=_i(e,o.substring(4,o.indexOf(")")))),o==="auto"&&(S=e.style[r],e.style[r]=o,o=_i(e,r)||o,S?e.style[r]=S:Ka(e,r)),g=[a,o],KT(g),a=g[0],o=g[1],x=a.match(qo)||[],j=o.match(qo)||[],j.length){for(;y=qo.exec(o);)C=y[0],M=o.substring(h,y.index),w?w=(w+1)%5:(M.substr(-5)==="rgba("||M.substr(-5)==="hsla(")&&(w=1),C!==(S=x[p++]||"")&&(v=parseFloat(S)||0,O=S.substr((v+"").length),C.charAt(1)==="="&&(C=Ko(v,C)+O),E=parseFloat(C),R=C.substr((E+"").length),h=qo.lastIndex-R.length,R||(R=R||wi.units[r]||O,h===o.length&&(o+=R,f.e+=R)),O!==R&&(v=Qa(e,r,S,R)||0),f._pt={_next:f._pt,p:M||p===1?M:",",s:v,c:E-v,m:w&&w<4||r==="zIndex"?Math.round:0});f.c=h<o.length?o.substring(h,o.length):""}else f.r=r==="display"&&o==="none"?s5:a5;return TT.test(o)&&(f.e=0),this._pt=f,f},Sw={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},E8=function(e){var r=e.split(" "),a=r[0],o=r[1]||"50%";return(a==="top"||a==="bottom"||o==="left"||o==="right")&&(e=a,a=o,o=e),r[0]=Sw[a]||a,r[1]=Sw[o]||o,r.join(" ")},C8=function(e,r){if(r.tween&&r.tween._time===r.tween._dur){var a=r.t,o=a.style,u=r.u,c=a._gsap,f,h,p;if(u==="all"||u===!0)o.cssText="",h=1;else for(u=u.split(","),p=u.length;--p>-1;)f=u[p],la[f]&&(h=1,f=f==="transformOrigin"?ei:Ct),Ka(a,f);h&&(Ka(a,Ct),c&&(c.svg&&a.removeAttribute("transform"),o.scale=o.rotate=o.translate="none",mc(a,1),c.uncache=1,o5(o)))}},Zd={clearProps:function(e,r,a,o,u){if(u.data!=="isFromStart"){var c=e._pt=new Jn(e._pt,r,a,0,0,C8);return c.u=o,c.pr=-10,c.tween=u,e._props.push(a),1}}},pc=[1,0,0,1,0,0],d5={},h5=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},Tw=function(e){var r=_i(e,Ct);return h5(r)?pc:r.substr(7).match(ST).map(Bt)},Sy=function(e,r){var a=e._gsap||Os(e),o=e.style,u=Tw(e),c,f,h,p;return a.svg&&e.getAttribute("transform")?(h=e.transform.baseVal.consolidate().matrix,u=[h.a,h.b,h.c,h.d,h.e,h.f],u.join(",")==="1,0,0,1,0,0"?pc:u):(u===pc&&!e.offsetParent&&e!==Qo&&!a.svg&&(h=o.display,o.display="block",c=e.parentNode,(!c||!e.offsetParent&&!e.getBoundingClientRect().width)&&(p=1,f=e.nextElementSibling,Qo.appendChild(e)),u=Tw(e),h?o.display=h:Ka(e,"display"),p&&(f?c.insertBefore(e,f):c?c.appendChild(e):Qo.removeChild(e))),r&&u.length>6?[u[0],u[1],u[4],u[5],u[12],u[13]]:u)},eg=function(e,r,a,o,u,c){var f=e._gsap,h=u||Sy(e,!0),p=f.xOrigin||0,g=f.yOrigin||0,y=f.xOffset||0,x=f.yOffset||0,v=h[0],w=h[1],S=h[2],C=h[3],E=h[4],M=h[5],R=r.split(" "),O=parseFloat(R[0])||0,j=parseFloat(R[1])||0,P,D,B,G;a?h!==pc&&(D=v*C-w*S)&&(B=O*(C/D)+j*(-S/D)+(S*M-C*E)/D,G=O*(-w/D)+j*(v/D)-(v*M-w*E)/D,O=B,j=G):(P=c5(e),O=P.x+(~R[0].indexOf("%")?O/100*P.width:O),j=P.y+(~(R[1]||R[0]).indexOf("%")?j/100*P.height:j)),o||o!==!1&&f.smooth?(E=O-p,M=j-g,f.xOffset=y+(E*v+M*S)-E,f.yOffset=x+(E*w+M*C)-M):f.xOffset=f.yOffset=0,f.xOrigin=O,f.yOrigin=j,f.smooth=!!o,f.origin=r,f.originIsAbsolute=!!a,e.style[ei]="0px 0px",c&&(Va(c,f,"xOrigin",p,O),Va(c,f,"yOrigin",g,j),Va(c,f,"xOffset",y,f.xOffset),Va(c,f,"yOffset",x,f.yOffset)),e.setAttribute("data-svg-origin",O+" "+j)},mc=function(e,r){var a=e._gsap||new IT(e);if("x"in a&&!r&&!a.uncache)return a;var o=e.style,u=a.scaleX<0,c="px",f="deg",h=getComputedStyle(e),p=_i(e,ei)||"0",g,y,x,v,w,S,C,E,M,R,O,j,P,D,B,G,F,re,J,ye,pe,ge,Y,K,ee,se,T,Q,te,ie,ae,me;return g=y=x=S=C=E=M=R=O=0,v=w=1,a.svg=!!(e.getCTM&&f5(e)),h.translate&&((h.translate!=="none"||h.scale!=="none"||h.rotate!=="none")&&(o[Ct]=(h.translate!=="none"?"translate3d("+(h.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(h.rotate!=="none"?"rotate("+h.rotate+") ":"")+(h.scale!=="none"?"scale("+h.scale.split(" ").join(",")+") ":"")+(h[Ct]!=="none"?h[Ct]:"")),o.scale=o.rotate=o.translate="none"),D=Sy(e,a.svg),a.svg&&(a.uncache?(ee=e.getBBox(),p=a.xOrigin-ee.x+"px "+(a.yOrigin-ee.y)+"px",K=""):K=!r&&e.getAttribute("data-svg-origin"),eg(e,K||p,!!K||a.originIsAbsolute,a.smooth!==!1,D)),j=a.xOrigin||0,P=a.yOrigin||0,D!==pc&&(re=D[0],J=D[1],ye=D[2],pe=D[3],g=ge=D[4],y=Y=D[5],D.length===6?(v=Math.sqrt(re*re+J*J),w=Math.sqrt(pe*pe+ye*ye),S=re||J?Co(J,re)*ws:0,M=ye||pe?Co(ye,pe)*ws+S:0,M&&(w*=Math.abs(Math.cos(M*Io))),a.svg&&(g-=j-(j*re+P*ye),y-=P-(j*J+P*pe))):(me=D[6],ie=D[7],T=D[8],Q=D[9],te=D[10],ae=D[11],g=D[12],y=D[13],x=D[14],B=Co(me,te),C=B*ws,B&&(G=Math.cos(-B),F=Math.sin(-B),K=ge*G+T*F,ee=Y*G+Q*F,se=me*G+te*F,T=ge*-F+T*G,Q=Y*-F+Q*G,te=me*-F+te*G,ae=ie*-F+ae*G,ge=K,Y=ee,me=se),B=Co(-ye,te),E=B*ws,B&&(G=Math.cos(-B),F=Math.sin(-B),K=re*G-T*F,ee=J*G-Q*F,se=ye*G-te*F,ae=pe*F+ae*G,re=K,J=ee,ye=se),B=Co(J,re),S=B*ws,B&&(G=Math.cos(B),F=Math.sin(B),K=re*G+J*F,ee=ge*G+Y*F,J=J*G-re*F,Y=Y*G-ge*F,re=K,ge=ee),C&&Math.abs(C)+Math.abs(S)>359.9&&(C=S=0,E=180-E),v=Bt(Math.sqrt(re*re+J*J+ye*ye)),w=Bt(Math.sqrt(Y*Y+me*me)),B=Co(ge,Y),M=Math.abs(B)>2e-4?B*ws:0,O=ae?1/(ae<0?-ae:ae):0),a.svg&&(K=e.getAttribute("transform"),a.forceCSS=e.setAttribute("transform","")||!h5(_i(e,Ct)),K&&e.setAttribute("transform",K))),Math.abs(M)>90&&Math.abs(M)<270&&(u?(v*=-1,M+=S<=0?180:-180,S+=S<=0?180:-180):(w*=-1,M+=M<=0?180:-180)),r=r||a.uncache,a.x=g-((a.xPercent=g&&(!r&&a.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-g)?-50:0)))?e.offsetWidth*a.xPercent/100:0)+c,a.y=y-((a.yPercent=y&&(!r&&a.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-y)?-50:0)))?e.offsetHeight*a.yPercent/100:0)+c,a.z=x+c,a.scaleX=Bt(v),a.scaleY=Bt(w),a.rotation=Bt(S)+f,a.rotationX=Bt(C)+f,a.rotationY=Bt(E)+f,a.skewX=M+f,a.skewY=R+f,a.transformPerspective=O+c,(a.zOrigin=parseFloat(p.split(" ")[2])||!r&&a.zOrigin||0)&&(o[ei]=Wd(p)),a.xOffset=a.yOffset=0,a.force3D=wi.force3D,a.renderTransform=a.svg?M8:u5?p5:R8,a.uncache=0,a},Wd=function(e){return(e=e.split(" "))[0]+" "+e[1]},e0=function(e,r,a){var o=Sn(r);return Bt(parseFloat(r)+parseFloat(Qa(e,"x",a+"px",o)))+o},R8=function(e,r){r.z="0px",r.rotationY=r.rotationX="0deg",r.force3D=0,p5(e,r)},xs="0deg",xu="0px",bs=") ",p5=function(e,r){var a=r||this,o=a.xPercent,u=a.yPercent,c=a.x,f=a.y,h=a.z,p=a.rotation,g=a.rotationY,y=a.rotationX,x=a.skewX,v=a.skewY,w=a.scaleX,S=a.scaleY,C=a.transformPerspective,E=a.force3D,M=a.target,R=a.zOrigin,O="",j=E==="auto"&&e&&e!==1||E===!0;if(R&&(y!==xs||g!==xs)){var P=parseFloat(g)*Io,D=Math.sin(P),B=Math.cos(P),G;P=parseFloat(y)*Io,G=Math.cos(P),c=e0(M,c,D*G*-R),f=e0(M,f,-Math.sin(P)*-R),h=e0(M,h,B*G*-R+R)}C!==xu&&(O+="perspective("+C+bs),(o||u)&&(O+="translate("+o+"%, "+u+"%) "),(j||c!==xu||f!==xu||h!==xu)&&(O+=h!==xu||j?"translate3d("+c+", "+f+", "+h+") ":"translate("+c+", "+f+bs),p!==xs&&(O+="rotate("+p+bs),g!==xs&&(O+="rotateY("+g+bs),y!==xs&&(O+="rotateX("+y+bs),(x!==xs||v!==xs)&&(O+="skew("+x+", "+v+bs),(w!==1||S!==1)&&(O+="scale("+w+", "+S+bs),M.style[Ct]=O||"translate(0, 0)"},M8=function(e,r){var a=r||this,o=a.xPercent,u=a.yPercent,c=a.x,f=a.y,h=a.rotation,p=a.skewX,g=a.skewY,y=a.scaleX,x=a.scaleY,v=a.target,w=a.xOrigin,S=a.yOrigin,C=a.xOffset,E=a.yOffset,M=a.forceCSS,R=parseFloat(c),O=parseFloat(f),j,P,D,B,G;h=parseFloat(h),p=parseFloat(p),g=parseFloat(g),g&&(g=parseFloat(g),p+=g,h+=g),h||p?(h*=Io,p*=Io,j=Math.cos(h)*y,P=Math.sin(h)*y,D=Math.sin(h-p)*-x,B=Math.cos(h-p)*x,p&&(g*=Io,G=Math.tan(p-g),G=Math.sqrt(1+G*G),D*=G,B*=G,g&&(G=Math.tan(g),G=Math.sqrt(1+G*G),j*=G,P*=G)),j=Bt(j),P=Bt(P),D=Bt(D),B=Bt(B)):(j=y,B=x,P=D=0),(R&&!~(c+"").indexOf("px")||O&&!~(f+"").indexOf("px"))&&(R=Qa(v,"x",c,"px"),O=Qa(v,"y",f,"px")),(w||S||C||E)&&(R=Bt(R+w-(w*j+S*D)+C),O=Bt(O+S-(w*P+S*B)+E)),(o||u)&&(G=v.getBBox(),R=Bt(R+o/100*G.width),O=Bt(O+u/100*G.height)),G="matrix("+j+","+P+","+D+","+B+","+R+","+O+")",v.setAttribute("transform",G),M&&(v.style[Ct]=G)},D8=function(e,r,a,o,u){var c=360,f=on(u),h=parseFloat(u)*(f&&~u.indexOf("rad")?ws:1),p=h-o,g=o+p+"deg",y,x;return f&&(y=u.split("_")[1],y==="short"&&(p%=c,p!==p%(c/2)&&(p+=p<0?c:-360)),y==="cw"&&p<0?p=(p+c*vw)%c-~~(p/c)*c:y==="ccw"&&p>0&&(p=(p-c*vw)%c-~~(p/c)*c)),e._pt=x=new Jn(e._pt,r,a,o,p,d8),x.e=g,x.u="deg",e._props.push(a),x},Aw=function(e,r){for(var a in r)e[a]=r[a];return e},j8=function(e,r,a){var o=Aw({},a._gsap),u="perspective,force3D,transformOrigin,svgOrigin",c=a.style,f,h,p,g,y,x,v,w;o.svg?(p=a.getAttribute("transform"),a.setAttribute("transform",""),c[Ct]=r,f=mc(a,1),Ka(a,Ct),a.setAttribute("transform",p)):(p=getComputedStyle(a)[Ct],c[Ct]=r,f=mc(a,1),c[Ct]=p);for(h in la)p=o[h],g=f[h],p!==g&&u.indexOf(h)<0&&(v=Sn(p),w=Sn(g),y=v!==w?Qa(a,h,p,w):parseFloat(p),x=parseFloat(g),e._pt=new Jn(e._pt,f,h,y,x-y,Z0),e._pt.u=w||0,e._props.push(h));Aw(f,o)};Wn("padding,margin,Width,Radius",function(n,e){var r="Top",a="Right",o="Bottom",u="Left",c=(e<3?[r,a,o,u]:[r+u,r+a,o+a,o+u]).map(function(f){return e<2?n+f:"border"+f+n});Zd[e>1?"border"+n:n]=function(f,h,p,g,y){var x,v;if(arguments.length<4)return x=c.map(function(w){return Jr(f,w,p)}),v=x.join(" "),v.split(x[0]).length===5?x[0]:v;x=(g+"").split(" "),v={},c.forEach(function(w,S){return v[w]=x[S]=x[S]||x[(S-1)/2|0]}),f.init(h,v,y)}});var m5={name:"css",register:J0,targetTest:function(e){return e.style&&e.nodeType},init:function(e,r,a,o,u){var c=this._props,f=e.style,h=a.vars.startAt,p,g,y,x,v,w,S,C,E,M,R,O,j,P,D,B,G;by||J0(),this.styles=this.styles||l5(e),B=this.styles.props,this.tween=a;for(S in r)if(S!=="autoRound"&&(g=r[S],!(gi[S]&&ZT(S,r,a,o,e,u)))){if(v=typeof g,w=Zd[S],v==="function"&&(g=g.call(a,o,e,u),v=typeof g),v==="string"&&~g.indexOf("random(")&&(g=fc(g)),w)w(this,e,S,g,a)&&(D=1);else if(S.substr(0,2)==="--")p=(getComputedStyle(e).getPropertyValue(S)+"").trim(),g+="",Ga.lastIndex=0,Ga.test(p)||(C=Sn(p),E=Sn(g),E?C!==E&&(p=Qa(e,S,p,E)+E):C&&(g+=C)),this.add(f,"setProperty",p,g,o,u,0,0,S),c.push(S),B.push(S,0,f[S]);else if(v!=="undefined"){if(h&&S in h?(p=typeof h[S]=="function"?h[S].call(a,o,e,u):h[S],on(p)&&~p.indexOf("random(")&&(p=fc(p)),Sn(p+"")||p==="auto"||(p+=wi.units[S]||Sn(Jr(e,S))||""),(p+"").charAt(1)==="="&&(p=Jr(e,S))):p=Jr(e,S),x=parseFloat(p),M=v==="string"&&g.charAt(1)==="="&&g.substr(0,2),M&&(g=g.substr(2)),y=parseFloat(g),S in br&&(S==="autoAlpha"&&(x===1&&Jr(e,"visibility")==="hidden"&&y&&(x=0),B.push("visibility",0,f.visibility),Va(this,f,"visibility",x?"inherit":"hidden",y?"inherit":"hidden",!y)),S!=="scale"&&S!=="transform"&&(S=br[S],~S.indexOf(",")&&(S=S.split(",")[0]))),R=S in la,R){if(this.styles.save(S),G=g,v==="string"&&g.substring(0,6)==="var(--"){if(g=_i(e,g.substring(4,g.indexOf(")"))),g.substring(0,5)==="calc("){var F=e.style.perspective;e.style.perspective=g,g=_i(e,"perspective"),F?e.style.perspective=F:Ka(e,"perspective")}y=parseFloat(g)}if(O||(j=e._gsap,j.renderTransform&&!r.parseTransform||mc(e,r.parseTransform),P=r.smoothOrigin!==!1&&j.smooth,O=this._pt=new Jn(this._pt,f,Ct,0,1,j.renderTransform,j,0,-1),O.dep=1),S==="scale")this._pt=new Jn(this._pt,j,"scaleY",j.scaleY,(M?Ko(j.scaleY,M+y):y)-j.scaleY||0,Z0),this._pt.u=0,c.push("scaleY",S),S+="X";else if(S==="transformOrigin"){B.push(ei,0,f[ei]),g=E8(g),j.svg?eg(e,g,0,P,0,this):(E=parseFloat(g.split(" ")[2])||0,E!==j.zOrigin&&Va(this,j,"zOrigin",j.zOrigin,E),Va(this,f,S,Wd(p),Wd(g)));continue}else if(S==="svgOrigin"){eg(e,g,1,P,0,this);continue}else if(S in d5){D8(this,j,S,x,M?Ko(x,M+g):g);continue}else if(S==="smoothOrigin"){Va(this,j,"smooth",j.smooth,g);continue}else if(S==="force3D"){j[S]=g;continue}else if(S==="transform"){j8(this,g,e);continue}}else S in f||(S=hl(S)||S);if(R||(y||y===0)&&(x||x===0)&&!f8.test(g)&&S in f)C=(p+"").substr((x+"").length),y||(y=0),E=Sn(g)||(S in wi.units?wi.units[S]:C),C!==E&&(x=Qa(e,S,p,E)),this._pt=new Jn(this._pt,R?j:f,S,x,(M?Ko(x,M+y):y)-x,!R&&(E==="px"||S==="zIndex")&&r.autoRound!==!1?m8:Z0),this._pt.u=E||0,R&&G!==g?(this._pt.b=p,this._pt.e=G,this._pt.r=p8):C!==E&&E!=="%"&&(this._pt.b=p,this._pt.r=h8);else if(S in f)A8.call(this,e,S,p,M?M+g:g);else if(S in e)this.add(e,S,p||e[S],M?M+g:g,o,u);else if(S!=="parseTransform"){cy(S,g);continue}R||(S in f?B.push(S,0,f[S]):typeof e[S]=="function"?B.push(S,2,e[S]()):B.push(S,1,p||e[S])),c.push(S)}}D&&i5(this)},render:function(e,r){if(r.tween._time||!_y())for(var a=r._pt;a;)a.r(e,a.d),a=a._next;else r.styles.revert()},get:Jr,aliases:br,getSetter:function(e,r,a){var o=br[r];return o&&o.indexOf(",")<0&&(r=o),r in la&&r!==ei&&(e._gsap.x||Jr(e,"x"))?a&&yw===a?r==="scale"?x8:v8:(yw=a||{})&&(r==="scale"?b8:_8):e.style&&!oy(e.style[r])?g8:~r.indexOf("-")?y8:vy(e,r)},core:{_removeProperty:Ka,_getMatrix:Sy}};ti.utils.checkPrefix=hl;ti.core.getStyleSaver=l5;(function(n,e,r,a){var o=Wn(n+","+e+","+r,function(u){la[u]=1});Wn(e,function(u){wi.units[u]="deg",d5[u]=1}),br[o[13]]=n+","+e,Wn(a,function(u){var c=u.split(":");br[c[1]]=o[c[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Wn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(n){wi.units[n]="px"});ti.registerPlugin(m5);var de=ti.registerPlugin(m5)||ti;de.core.Tween;/*!
 * @gsap/react 2.1.2
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/let Ew=typeof document<"u"?z.useLayoutEffect:z.useEffect,Cw=n=>n&&!Array.isArray(n)&&typeof n=="object",Gf=[],k8={},g5=de;const Ei=(n,e=Gf)=>{let r=k8;Cw(n)?(r=n,n=null,e="dependencies"in r?r.dependencies:Gf):Cw(e)&&(r=e,e="dependencies"in r?r.dependencies:Gf),n&&typeof n!="function"&&console.warn("First parameter must be a function or config object");const{scope:a,revertOnUpdate:o}=r,u=z.useRef(!1),c=z.useRef(g5.context(()=>{},a)),f=z.useRef(p=>c.current.add(null,p)),h=e&&e.length&&!o;return h&&Ew(()=>(u.current=!0,()=>c.current.revert()),Gf),Ew(()=>{if(n&&c.current.add(n,a),!h||!u.current)return()=>c.current.revert()},e),{context:c.current,contextSafe:f.current}};Ei.register=n=>{g5=n};Ei.headless=!0;de.registerPlugin(Ei);const O8=V.button`
  display:inline-flex; align-items:center; gap:.7rem; padding:0; border:0; background:transparent;
  cursor:pointer; color:var(--ink); font-family:var(--font-en); text-align:left;
  svg { width:49px; height:46px; flex-shrink:0; overflow:visible; }
  .word { font-size:1.4rem; font-weight:700; letter-spacing:-.04em; }
  @media(max-width:480px) { svg { width:43px; height:40px; } .word { font-size:1.25rem; } }
`;function y5({onClick:n,label:e}){const r=z.useRef(null),a=Wa(),{contextSafe:o}=Ei(()=>{window.matchMedia("(prefers-reduced-motion: reduce)").matches||de.from(".brand-pebble",{opacity:0,y:8,scale:.85,rotation:-12,transformOrigin:"50% 65%",duration:.65,stagger:.09,ease:"back.out(1.4)"})},{scope:r}),u=o(()=>{var f,h;if(window.matchMedia("(prefers-reduced-motion: reduce)").matches)return;const c=(f=r.current)==null?void 0:f.querySelectorAll(".brand-pebble");c&&de.timeline({defaults:{overwrite:"auto"}}).to(c,{y:-3,rotation:5,duration:.2,stagger:.035,ease:"power2.out"}).to(c,{y:0,rotation:0,duration:.4,stagger:.035,ease:"back.out(1.8)"}).to(((h=r.current)==null?void 0:h.querySelectorAll(".brand-eyes"))??[],{scaleY:.16,transformOrigin:"50% 50%",duration:.08,yoyo:!0,repeat:1},.18)});return b.jsxs(O8,{ref:r,type:"button","aria-label":"홈으로 이동",onClick:n??(()=>a("/")),onPointerEnter:u,onFocus:u,children:[b.jsxs("svg",{viewBox:"0 0 54 48","aria-hidden":"true",focusable:"false",children:[b.jsxs("g",{className:"brand-pebble",children:[b.jsx("path",{d:"M3 26C0 15 6 5 17 4c10-2 18 5 18 16 1 11-7 20-17 20C8 42 4 36 3 26Z",fill:"#BFD9CD"}),b.jsx("path",{d:"M7 20C7 12 12 8 19 8",fill:"none",stroke:"#F5FBF7",strokeWidth:"2",strokeLinecap:"round",opacity:".8"}),b.jsxs("g",{className:"brand-eyes",fill:"#3E5149",children:[b.jsx("ellipse",{cx:"16",cy:"24",rx:"1.6",ry:"2.6"}),b.jsx("ellipse",{cx:"23",cy:"24",rx:"1.6",ry:"2.6"})]})]}),b.jsxs("g",{className:"brand-pebble",children:[b.jsx("path",{d:"M27 17c6-8 18-6 23 3 5 9 2 19-7 23-8 3-18-2-20-10-2-6 0-11 4-16Z",fill:"#F3C7B6"}),b.jsx("path",{d:"M30 19c4-4 10-4 14-1",fill:"none",stroke:"#FFF3E3",strokeWidth:"2",strokeLinecap:"round",opacity:".8"}),b.jsxs("g",{className:"brand-eyes",fill:"#3E5149",children:[b.jsx("ellipse",{cx:"34",cy:"29",rx:"1.5",ry:"2.5"}),b.jsx("ellipse",{cx:"41",cy:"29",rx:"1.5",ry:"2.5"})]})]})]}),b.jsx("span",{className:"word",children:e})]})}function z8(n){return b.jsx(y5,{...n,label:"Portfolio"})}function N8(n){return b.jsx(y5,{...n,label:"Portfolio"})}const P8=V.header`
  position: relative;

  width: 100%;

  z-index: 1000;

  background-color: transparent;

  padding:
    1rem
    2rem;

  @media (max-width: 768px) {
    padding:
      0.75rem
      1rem;
  }
`,L8=V.div`
  position: relative;

  width: 100%;
  max-width: 1200px;

  margin: 0 auto;

  display: flex;

  justify-content:
    space-between;

  align-items:
    center;
`,B8=V.nav`
  display: flex;

  align-items:
    center;

  gap: 2rem;

  /* =====================================================
     MOBILE
  ===================================================== */

  @media (max-width: 768px) {
    position: absolute;

    /*
     * HeaderContainer 바로 아래
     */
    top: calc(100% + 0.75rem);

    left: 0;
    right: 0;

    z-index: 1001;

    width: 100%;

    padding:
      0.75rem;

    display: flex;

    flex-direction: column;

    align-items:
      stretch;

    gap: 0.35rem;

    border:
      1px solid
      rgba(133, 129, 133,
        0.16
      );

    border-radius:
      16px;

    background:
      rgba(251, 246, 249,
        0.96
      );

    box-shadow:
      0
      14px
      35px
      rgba(133, 129, 133,
        0.16
      );

    backdrop-filter:
      blur(18px);

    -webkit-backdrop-filter:
      blur(18px);

    /*
     * 닫힘
     */
    opacity:
      ${({$open:n})=>n?1:0};

    visibility:
      ${({$open:n})=>n?"visible":"hidden"};

    transform:
      translateY(
        ${({$open:n})=>n?"0":"-12px"}
      )
      scale(
        ${({$open:n})=>n?"1":"0.98"}
      );

    transform-origin:
      top center;

    pointer-events:
      ${({$open:n})=>n?"auto":"none"};

    transition:
      opacity
        0.24s
        ease,
      transform
        0.24s
        ease,
      visibility
        0.24s
        ease;
  }
`,V8=V(De.button)`
  position: relative;

  padding:
    0.5rem
    1rem;

  border: none;

  background: none;

  color:
    ${({$active:n})=>n?"var(--primary-color)":"var(--gray-100)"};

  font-size: 1rem;

  font-weight:
    ${({$active:n})=>n?"600":"400"};

  cursor: pointer;

  &::after {
    content: "";

    position: absolute;

    left: 50%;
    bottom: 0;

    width:
      ${({$active:n})=>n?"80%":"0%"};

    height: 2px;

    transform:
      translateX(-50%);

    background:
      var(--primary-color);

    border-radius:
      999px;

    transition:
      width
      0.3s
      ease;
  }

  &:hover::after {
    width: 80%;
  }

  /* =====================================================
     MOBILE
  ===================================================== */

  @media (max-width: 768px) {
    width: 100%;

    padding:
      0.85rem
      1rem;

    border-radius:
      11px;

    font-size:
      1rem;

    text-align:
      center;

    transition:
      background
        0.2s
        ease,
      color
        0.2s
        ease;

    background:
      ${({$active:n})=>n?"rgba(133, 129, 133, 0.08)":"transparent"};

    &:hover {
      background:
        rgba(133, 129, 133,
          0.08
        );
    }

    &::after {
      bottom: 5px;

      width:
        ${({$active:n})=>n?"32px":"0"};
    }

    &:hover::after {
      width: 32px;
    }
  }
`,U8=V.button`
  display: none;

  position: relative;

  width: 42px;
  height: 42px;

  padding: 0;

  flex-shrink: 0;

  border:
    1px solid
    ${({$open:n})=>n?"rgba(133, 129, 133, 0.22)":"transparent"};

  border-radius:
    12px;

  background:
    ${({$open:n})=>n?"rgba(133, 129, 133, 0.08)":"transparent"};

  color:
    ${({$open:n})=>n?"var(--primary-color)":"var(--gray-100)"};

  cursor: pointer;

  transition:
    background
      0.2s
      ease,
    color
      0.2s
      ease,
    border
      0.2s
      ease;

  &:hover {
    color:
      var(--primary-color);

    background:
      rgba(133, 129, 133,
        0.08
      );
  }

  &:focus-visible {
    outline:
      2px solid
      var(--primary-color);

    outline-offset:
      3px;
  }

  @media (max-width: 768px) {
    display: flex;

    align-items:
      center;

    justify-content:
      center;
  }

  svg {
    width: 24px;
    height: 24px;

    transition:
      transform
      0.25s
      ease;
  }
`,H8=({open:n})=>n?b.jsxs("svg",{viewBox:"0 0 24 24","aria-hidden":"true",children:[b.jsx("path",{d:"M6 6L18 18",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"}),b.jsx("path",{d:"M18 6L6 18",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"})]}):b.jsxs("svg",{viewBox:"0 0 24 24","aria-hidden":"true",children:[b.jsx("path",{d:"M4 6H20",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"}),b.jsx("path",{d:"M4 12H20",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"}),b.jsx("path",{d:"M4 18H20",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"})]}),Y8=()=>{const n=Wa(),e=Ai(),[r,a]=z.useState(!1),o=[{path:"/",label:"홈"},{path:"/personal",label:"경력"},{path:"/project",label:"포트폴리오"}],u=c=>c==="/"?e.pathname==="/":e.pathname.startsWith(c);return z.useEffect(()=>{a(!1)},[e.pathname]),z.useEffect(()=>{if(!r)return;const c=f=>{f.key==="Escape"&&a(!1)};return window.addEventListener("keydown",c),()=>{window.removeEventListener("keydown",c)}},[r]),z.useEffect(()=>{const c=()=>{window.innerWidth>768&&a(!1)};return window.addEventListener("resize",c),()=>{window.removeEventListener("resize",c)}},[]),b.jsxs(P8,{children:[b.jsxs(L8,{children:[b.jsx(z8,{onClick:()=>{n("/")}}),b.jsx(U8,{type:"button",$open:r,"aria-label":r?"메뉴 닫기":"메뉴 열기","aria-expanded":r,onClick:()=>{a(c=>!c)},children:b.jsx(H8,{open:r})}),b.jsx(B8,{$open:r,children:o.map(c=>b.jsx(V8,{type:"button",$active:u(c.path),onClick:()=>{n(c.path),a(!1)},whileHover:{scale:1.06,y:-2},whileTap:{scale:.95},transition:{type:"spring",stiffness:320,damping:20},children:c.label},c.path))})]}),b.jsx(j2,{})]})},G8="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2048%2048'%20fill='none'%3e%3crect%20x='2'%20y='2'%20width='44'%20height='44'%20rx='15'%20fill='%23E0ECE4'/%3e%3crect%20x='9'%20y='13'%20width='30'%20height='23'%20rx='7'%20fill='%23FFF7EC'%20stroke='%23547362'%20stroke-width='1.5'/%3e%3cpath%20d='m11%2016%2010%208a5%205%200%200%200%206%200l10-8'%20fill='%23F3C7B6'%20stroke='%23547362'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='m11%2033%209-8m17%208-9-8'%20stroke='%23AFC6AA'%20stroke-width='1.5'%20stroke-linecap='round'/%3e%3c/svg%3e",X8=V.footer`
    width: 100%;
    padding: 1rem clamp(1rem,4vw,2rem);
`,q8=V.div`
    width: 100%;
    max-width:1200px;
    min-width:0;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    gap: 1rem;
    padding: 50px 0;
    margin: 0 auto;
`,F8=V.div`
    display: flex;
    align-items: center;
    gap: .75rem;
    min-width:0;
    a { color:var(--ink); overflow-wrap:anywhere; font-size:.9rem; }
    a:hover { text-decoration:underline; text-underline-offset:4px; }
    
    img {
        width: 36px;
        height: auto;
    }
`,$8=()=>b.jsxs(X8,{children:[b.jsx(j2,{}),b.jsxs(q8,{children:[b.jsx(N8,{}),b.jsxs(F8,{children:[b.jsx("img",{src:G8,alt:"","aria-hidden":"true",loading:"lazy"}),b.jsx("a",{href:"mailto:dusen380@gmail.com",children:"dusen380@gmail.com"})]})]})]});function K8(n,e){for(var r=0;r<e.length;r++){var a=e[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(n,a.key,a)}}function Q8(n,e,r){return e&&K8(n.prototype,e),n}/*!
 * Observer 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var pn,Rd,xi,Ua,Ha,Zo,v5,Ss,Wo,x5,ta,ir,b5,_5=function(){return pn||typeof window<"u"&&(pn=window.gsap)&&pn.registerPlugin&&pn},w5=1,$o=[],Le=[],Cr=[],Hu=Date.now,tg=function(e,r){return r},I8=function(){var e=Wo.core,r=e.bridge||{},a=e._scrollers,o=e._proxies;a.push.apply(a,Le),o.push.apply(o,Cr),Le=a,Cr=o,tg=function(c,f){return r[c](f)}},Xa=function(e,r){return~Cr.indexOf(e)&&Cr[Cr.indexOf(e)+1][r]},Yu=function(e){return!!~x5.indexOf(e)},zn=function(e,r,a,o,u){return e.addEventListener(r,a,{passive:o!==!1,capture:!!u})},On=function(e,r,a,o){return e.removeEventListener(r,a,!!o)},Xf="scrollLeft",qf="scrollTop",ng=function(){return ta&&ta.isPressed||Le.cache++},Jd=function(e,r){var a=function o(u){if(u||u===0){w5&&(xi.history.scrollRestoration="manual");var c=ta&&ta.isPressed;u=o.v=Math.round(u)||(ta&&ta.iOS?1:0),e(u),o.cacheID=Le.cache,c&&tg("ss",u)}else(r||Le.cache!==o.cacheID||tg("ref"))&&(o.cacheID=Le.cache,o.v=e());return o.v+o.offset};return a.offset=0,e&&a},Bn={s:Xf,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:Jd(function(n){return arguments.length?xi.scrollTo(n,Jt.sc()):xi.pageXOffset||Ua[Xf]||Ha[Xf]||Zo[Xf]||0})},Jt={s:qf,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:Bn,sc:Jd(function(n){return arguments.length?xi.scrollTo(Bn.sc(),n):xi.pageYOffset||Ua[qf]||Ha[qf]||Zo[qf]||0})},Kn=function(e,r){return(r&&r._ctx&&r._ctx.selector||pn.utils.toArray)(e)[0]||(typeof e=="string"&&pn.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},Z8=function(e,r){for(var a=r.length;a--;)if(r[a]===e||r[a].contains(e))return!0;return!1},Ia=function(e,r){var a=r.s,o=r.sc;Yu(e)&&(e=Ua.scrollingElement||Ha);var u=Le.indexOf(e),c=o===Jt.sc?1:2;!~u&&(u=Le.push(e)-1),Le[u+c]||zn(e,"scroll",ng);var f=Le[u+c],h=f||(Le[u+c]=Jd(Xa(e,a),!0)||(Yu(e)?o:Jd(function(p){return arguments.length?e[a]=p:e[a]})));return h.target=e,f||(h.smooth=pn.getProperty(e,"scrollBehavior")==="smooth"),h},ig=function(e,r,a){var o=e,u=e,c=Hu(),f=c,h=r||50,p=Math.max(500,h*3),g=function(w,S){var C=Hu();S||C-c>h?(u=o,o=w,f=c,c=C):a?o+=w:o=u+(w-u)/(C-f)*(c-f)},y=function(){u=o=a?0:o,f=c=0},x=function(w){var S=f,C=u,E=Hu();return(w||w===0)&&w!==o&&g(w),c===f||E-f>p?0:(o+(a?C:-C))/((a?E:c)-S)*1e3};return{update:g,reset:y,getVelocity:x}},bu=function(e,r){return r&&!e._gsapAllow&&e.cancelable!==!1&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},Rw=function(e){var r=Math.max.apply(Math,e),a=Math.min.apply(Math,e);return Math.abs(r)>=Math.abs(a)?r:a},S5=function(){Wo=pn.core.globals().ScrollTrigger,Wo&&Wo.core&&I8()},T5=function(e){return pn=e||_5(),!Rd&&pn&&typeof document<"u"&&document.body&&(xi=window,Ua=document,Ha=Ua.documentElement,Zo=Ua.body,x5=[xi,Ua,Ha,Zo],pn.utils.clamp,b5=pn.core.context||function(){},Ss="onpointerenter"in Zo?"pointer":"mouse",v5=Vt.isTouch=xi.matchMedia&&xi.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in xi||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,ir=Vt.eventTypes=("ontouchstart"in Ha?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in Ha?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return w5=0},500),Rd=1),Wo||S5(),Rd};Bn.op=Jt;Le.cache=0;var Vt=function(){function n(r){this.init(r)}var e=n.prototype;return e.init=function(a){Rd||T5(pn)||console.warn("Please gsap.registerPlugin(Observer)"),Wo||S5();var o=a.tolerance,u=a.dragMinimum,c=a.type,f=a.target,h=a.lineHeight,p=a.debounce,g=a.preventDefault,y=a.onStop,x=a.onStopDelay,v=a.ignore,w=a.wheelSpeed,S=a.event,C=a.onDragStart,E=a.onDragEnd,M=a.onDrag,R=a.onPress,O=a.onRelease,j=a.onRight,P=a.onLeft,D=a.onUp,B=a.onDown,G=a.onChangeX,F=a.onChangeY,re=a.onChange,J=a.onToggleX,ye=a.onToggleY,pe=a.onHover,ge=a.onHoverEnd,Y=a.onMove,K=a.ignoreCheck,ee=a.isNormalizer,se=a.onGestureStart,T=a.onGestureEnd,Q=a.onWheel,te=a.onEnable,ie=a.onDisable,ae=a.onClick,me=a.scrollSpeed,oe=a.capture,je=a.allowClicks,Te=a.lockAxis,Fe=a.onLockAxis;this.target=f=Kn(f)||Ha,this.vars=a,v&&(v=pn.utils.toArray(v)),o=o||1e-9,u=u||0,w=w||1,me=me||1,c=c||"wheel,touch,pointer",p=p!==!1,h||(h=parseFloat(xi.getComputedStyle(Zo).lineHeight)||22);var gn,pt,it,Be,mt,yn,Rn,$=this,Mn=0,Ci=0,Qi=a.passive||!g&&a.passive!==!1,ot=Ia(f,Bn),Ii=Ia(f,Jt),Zi=ot(),Mr=Ii(),Ut=~c.indexOf("touch")&&!~c.indexOf("pointer")&&ir[0]==="pointerdown",Un=Yu(f),Ye=f.ownerDocument||Ua,Ht=[0,0,0],ct=[0,0,0],Wi=0,es=function(){return Wi=Hu()},Rt=function(ve,Re){return($.event=ve)&&v&&Z8(ve.target,v)||Re&&Ut&&ve.pointerType!=="touch"||K&&K(ve,Re)},Dr=function(){$._vx.reset(),$._vy.reset(),pt.pause(),y&&y($)},Hn=function(){var ve=$.deltaX=Rw(Ht),Re=$.deltaY=Rw(ct),ne=Math.abs(ve)>=o,fe=Math.abs(Re)>=o;re&&(ne||fe)&&re($,ve,Re,Ht,ct),ne&&(j&&$.deltaX>0&&j($),P&&$.deltaX<0&&P($),G&&G($),J&&$.deltaX<0!=Mn<0&&J($),Mn=$.deltaX,Ht[0]=Ht[1]=Ht[2]=0),fe&&(B&&$.deltaY>0&&B($),D&&$.deltaY<0&&D($),F&&F($),ye&&$.deltaY<0!=Ci<0&&ye($),Ci=$.deltaY,ct[0]=ct[1]=ct[2]=0),(Be||it)&&(Y&&Y($),it&&(C&&it===1&&C($),M&&M($),it=0),Be=!1),yn&&!(yn=!1)&&Fe&&Fe($),mt&&(Q($),mt=!1),gn=0},Yn=function(ve,Re,ne){Ht[ne]+=ve,ct[ne]+=Re,$._vx.update(ve),$._vy.update(Re),p?gn||(gn=requestAnimationFrame(Hn)):Hn()},Ji=function(ve,Re){Te&&!Rn&&($.axis=Rn=Math.abs(ve)>Math.abs(Re)?"x":"y",yn=!0),Rn!=="y"&&(Ht[2]+=ve,$._vx.update(ve,!0)),Rn!=="x"&&(ct[2]+=Re,$._vy.update(Re,!0)),p?gn||(gn=requestAnimationFrame(Hn)):Hn()},Gn=function(ve){if(!Rt(ve,1)){ve=bu(ve,g);var Re=ve.clientX,ne=ve.clientY,fe=Re-$.x,ce=ne-$.y,Se=$.isDragging;$.x=Re,$.y=ne,(Se||(fe||ce)&&(Math.abs($.startX-Re)>=u||Math.abs($.startY-ne)>=u))&&(it||(it=Se?2:1),Se||($.isDragging=!0),Ji(fe,ce))}},jr=$.onPress=function(Ae){Rt(Ae,1)||Ae&&Ae.button||($.axis=Rn=null,pt.pause(),$.isPressed=!0,Ae=bu(Ae),Mn=Ci=0,$.startX=$.x=Ae.clientX,$.startY=$.y=Ae.clientY,$._vx.reset(),$._vy.reset(),zn(ee?f:Ye,ir[1],Gn,Qi,!0),$.deltaX=$.deltaY=0,R&&R($))},Ce=$.onRelease=function(Ae){if(!Rt(Ae,1)){On(ee?f:Ye,ir[1],Gn,!0);var ve=!isNaN($.y-$.startY),Re=$.isDragging,ne=Re&&(Math.abs($.x-$.startX)>3||Math.abs($.y-$.startY)>3),fe=bu(Ae);!ne&&ve&&($._vx.reset(),$._vy.reset(),g&&je&&pn.delayedCall(.08,function(){if(Hu()-Wi>300&&!Ae.defaultPrevented){if(Ae.target.click)Ae.target.click();else if(Ye.createEvent){var ce=Ye.createEvent("MouseEvents");ce.initMouseEvent("click",!0,!0,xi,1,fe.screenX,fe.screenY,fe.clientX,fe.clientY,!1,!1,!1,!1,0,null),Ae.target.dispatchEvent(ce)}}})),$.isDragging=$.isGesturing=$.isPressed=!1,y&&Re&&!ee&&pt.restart(!0),it&&Hn(),E&&Re&&E($),O&&O($,ne)}},ur=function(ve){return ve.touches&&ve.touches.length>1&&($.isGesturing=!0)&&se(ve,$.isDragging)},Dn=function(){return($.isGesturing=!1)||T($)},ln=function(ve){if(!Rt(ve)){var Re=ot(),ne=Ii();Yn((Re-Zi)*me,(ne-Mr)*me,1),Zi=Re,Mr=ne,y&&pt.restart(!0)}},ni=function(ve){if(!Rt(ve)){ve=bu(ve,g),Q&&(mt=!0);var Re=(ve.deltaMode===1?h:ve.deltaMode===2?xi.innerHeight:1)*w;Yn(ve.deltaX*Re,ve.deltaY*Re,0),y&&!ee&&pt.restart(!0)}},cr=function(ve){if(!Rt(ve)){var Re=ve.clientX,ne=ve.clientY,fe=Re-$.x,ce=ne-$.y;$.x=Re,$.y=ne,Be=!0,y&&pt.restart(!0),(fe||ce)&&Ji(fe,ce)}},kr=function(ve){$.event=ve,pe($)},ii=function(ve){$.event=ve,ge($)},Or=function(ve){return Rt(ve)||bu(ve,g)&&ae($)};pt=$._dc=pn.delayedCall(x||.25,Dr).pause(),$.deltaX=$.deltaY=0,$._vx=ig(0,50,!0),$._vy=ig(0,50,!0),$.scrollX=ot,$.scrollY=Ii,$.isDragging=$.isGesturing=$.isPressed=!1,b5(this),$.enable=function(Ae){return $.isEnabled||(zn(Un?Ye:f,"scroll",ng),c.indexOf("scroll")>=0&&zn(Un?Ye:f,"scroll",ln,Qi,oe),c.indexOf("wheel")>=0&&zn(f,"wheel",ni,Qi,oe),(c.indexOf("touch")>=0&&v5||c.indexOf("pointer")>=0)&&(zn(f,ir[0],jr,Qi,oe),zn(Ye,ir[2],Ce),zn(Ye,ir[3],Ce),je&&zn(f,"click",es,!0,!0),ae&&zn(f,"click",Or),se&&zn(Ye,"gesturestart",ur),T&&zn(Ye,"gestureend",Dn),pe&&zn(f,Ss+"enter",kr),ge&&zn(f,Ss+"leave",ii),Y&&zn(f,Ss+"move",cr)),$.isEnabled=!0,$.isDragging=$.isGesturing=$.isPressed=Be=it=!1,$._vx.reset(),$._vy.reset(),Zi=ot(),Mr=Ii(),Ae&&Ae.type&&jr(Ae),te&&te($)),$},$.disable=function(){$.isEnabled&&($o.filter(function(Ae){return Ae!==$&&Yu(Ae.target)}).length||On(Un?Ye:f,"scroll",ng),$.isPressed&&($._vx.reset(),$._vy.reset(),On(ee?f:Ye,ir[1],Gn,!0)),On(Un?Ye:f,"scroll",ln,oe),On(f,"wheel",ni,oe),On(f,ir[0],jr,oe),On(Ye,ir[2],Ce),On(Ye,ir[3],Ce),On(f,"click",es,!0),On(f,"click",Or),On(Ye,"gesturestart",ur),On(Ye,"gestureend",Dn),On(f,Ss+"enter",kr),On(f,Ss+"leave",ii),On(f,Ss+"move",cr),$.isEnabled=$.isPressed=$.isDragging=!1,ie&&ie($))},$.kill=$.revert=function(){$.disable();var Ae=$o.indexOf($);Ae>=0&&$o.splice(Ae,1),ta===$&&(ta=0)},$o.push($),ee&&Yu(f)&&(ta=$),$.enable(S)},Q8(n,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),n}();Vt.version="3.15.0";Vt.create=function(n){return new Vt(n)};Vt.register=T5;Vt.getAll=function(){return $o.slice()};Vt.getById=function(n){return $o.filter(function(e){return e.vars.id===n})[0]};_5()&&pn.registerPlugin(Vt);/*!
 * ScrollTrigger 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var le,Lo,Pe,nt,yi,Je,Ty,eh,gc,Gu,Cu,Ff,bn,xh,rg,Pn,Mw,Dw,Bo,A5,t0,E5,Nn,ag,C5,R5,Pa,sg,Ay,Jo,Ey,Xu,og,n0,$f=1,wn=Date.now,i0=wn(),$i=0,Ru=0,jw=function(e,r,a){var o=mi(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return a["_"+r+"Clamp"]=o,o?e.substr(6,e.length-7):e},kw=function(e,r){return r&&(!mi(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},W8=function n(){return Ru&&requestAnimationFrame(n)},Ow=function(){return xh=1},zw=function(){return xh=0},yr=function(e){return e},Mu=function(e){return Math.round(e*1e5)/1e5||0},M5=function(){return typeof window<"u"},D5=function(){return le||M5()&&(le=window.gsap)&&le.registerPlugin&&le},Hs=function(e){return!!~Ty.indexOf(e)},j5=function(e){return(e==="Height"?Ey:Pe["inner"+e])||yi["client"+e]||Je["client"+e]},k5=function(e){return Xa(e,"getBoundingClientRect")||(Hs(e)?function(){return Od.width=Pe.innerWidth,Od.height=Ey,Od}:function(){return ea(e)})},J8=function(e,r,a){var o=a.d,u=a.d2,c=a.a;return(c=Xa(e,"getBoundingClientRect"))?function(){return c()[o]}:function(){return(r?j5(u):e["client"+u])||0}},eO=function(e,r){return!r||~Cr.indexOf(e)?k5(e):function(){return Od}},_r=function(e,r){var a=r.s,o=r.d2,u=r.d,c=r.a;return Math.max(0,(a="scroll"+o)&&(c=Xa(e,a))?c()-k5(e)()[u]:Hs(e)?(yi[a]||Je[a])-j5(o):e[a]-e["offset"+o])},Kf=function(e,r){for(var a=0;a<Bo.length;a+=3)(!r||~r.indexOf(Bo[a+1]))&&e(Bo[a],Bo[a+1],Bo[a+2])},mi=function(e){return typeof e=="string"},Tn=function(e){return typeof e=="function"},Du=function(e){return typeof e=="number"},Ts=function(e){return typeof e=="object"},_u=function(e,r,a){return e&&e.progress(r?0:1)&&a&&e.pause()},Ro=function(e,r,a){if(e.enabled){var o=e._ctx?e._ctx.add(function(){return r(e,a)}):r(e,a);o&&o.totalTime&&(e.callbackAnimation=o)}},Mo=Math.abs,O5="left",z5="top",Cy="right",Ry="bottom",Ls="width",Bs="height",qu="Right",Fu="Left",$u="Top",Ku="Bottom",Ft="padding",Gi="margin",pl="Width",My="Height",Wt="px",Xi=function(e){return Pe.getComputedStyle(e.nodeType===Node.DOCUMENT_NODE?e.scrollingElement:e)},tO=function(e){var r=Xi(e).position;e.style.position=r==="absolute"||r==="fixed"?r:"relative"},Nw=function(e,r){for(var a in r)a in e||(e[a]=r[a]);return e},ea=function(e,r){var a=r&&Xi(e)[rg]!=="matrix(1, 0, 0, 1, 0, 0)"&&le.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),o=e.getBoundingClientRect?e.getBoundingClientRect():e.scrollingElement.getBoundingClientRect();return a&&a.progress(0).kill(),o},th=function(e,r){var a=r.d2;return e["offset"+a]||e["client"+a]||0},N5=function(e){var r=[],a=e.labels,o=e.duration(),u;for(u in a)r.push(a[u]/o);return r},nO=function(e){return function(r){return le.utils.snap(N5(e),r)}},Dy=function(e){var r=le.utils.snap(e),a=Array.isArray(e)&&e.slice(0).sort(function(o,u){return o-u});return a?function(o,u,c){c===void 0&&(c=.001);var f;if(!u)return r(o);if(u>0){for(o-=c,f=0;f<a.length;f++)if(a[f]>=o)return a[f];return a[f-1]}else for(f=a.length,o+=c;f--;)if(a[f]<=o)return a[f];return a[0]}:function(o,u,c){c===void 0&&(c=.001);var f=r(o);return!u||Math.abs(f-o)<c||f-o<0==u<0?f:r(u<0?o-e:o+e)}},iO=function(e){return function(r,a){return Dy(N5(e))(r,a.direction)}},Qf=function(e,r,a,o){return a.split(",").forEach(function(u){return e(r,u,o)})},an=function(e,r,a,o,u){return e.addEventListener(r,a,{passive:!o,capture:!!u})},rn=function(e,r,a,o){return e.removeEventListener(r,a,!!o)},If=function(e,r,a){a=a&&a.wheelHandler,a&&(e(r,"wheel",a),e(r,"touchmove",a))},Pw={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},Zf={toggleActions:"play",anticipatePin:0},nh={top:0,left:0,center:.5,bottom:1,right:1},Md=function(e,r){if(mi(e)){var a=e.indexOf("="),o=~a?+(e.charAt(a-1)+1)*parseFloat(e.substr(a+1)):0;~a&&(e.indexOf("%")>a&&(o*=r/100),e=e.substr(0,a-1)),e=o+(e in nh?nh[e]*r:~e.indexOf("%")?parseFloat(e)*r/100:parseFloat(e)||0)}return e},Wf=function(e,r,a,o,u,c,f,h){var p=u.startColor,g=u.endColor,y=u.fontSize,x=u.indent,v=u.fontWeight,w=nt.createElement("div"),S=Hs(a)||Xa(a,"pinType")==="fixed",C=e.indexOf("scroller")!==-1,E=S?Je:a.tagName==="IFRAME"?a.contentDocument.body:a,M=e.indexOf("start")!==-1,R=M?p:g,O="border-color:"+R+";font-size:"+y+";color:"+R+";font-weight:"+v+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return O+="position:"+((C||h)&&S?"fixed;":"absolute;"),(C||h||!S)&&(O+=(o===Jt?Cy:Ry)+":"+(c+parseFloat(x))+"px;"),f&&(O+="box-sizing:border-box;text-align:left;width:"+f.offsetWidth+"px;"),w._isStart=M,w.setAttribute("class","gsap-marker-"+e+(r?" marker-"+r:"")),w.style.cssText=O,w.innerText=r||r===0?e+"-"+r:e,E.children[0]?E.insertBefore(w,E.children[0]):E.appendChild(w),w._offset=w["offset"+o.op.d2],Dd(w,0,o,M),w},Dd=function(e,r,a,o){var u={display:"block"},c=a[o?"os2":"p2"],f=a[o?"p2":"os2"];e._isFlipped=o,u[a.a+"Percent"]=o?-100:0,u[a.a]=o?"1px":0,u["border"+c+pl]=1,u["border"+f+pl]=0,u[a.p]=r+"px",le.set(e,u)},Oe=[],lg={},yc,Lw=function(){return wn()-$i>34&&(yc||(yc=requestAnimationFrame(ra)))},Do=function(){(!Nn||!Nn.isPressed||Nn.startX>Je.clientWidth)&&(Le.cache++,Nn?yc||(yc=requestAnimationFrame(ra)):ra(),$i||Gs("scrollStart"),$i=wn())},r0=function(){R5=Pe.innerWidth,C5=Pe.innerHeight},ju=function(e){Le.cache++,(e===!0||!bn&&!E5&&!nt.fullscreenElement&&!nt.webkitFullscreenElement&&(!ag||R5!==Pe.innerWidth||Math.abs(Pe.innerHeight-C5)>Pe.innerHeight*.25))&&eh.restart(!0)},Ys={},rO=[],P5=function n(){return rn(ze,"scrollEnd",n)||Ms(!0)},Gs=function(e){return Ys[e]&&Ys[e].map(function(r){return r()})||rO},pi=[],L5=function(e){for(var r=0;r<pi.length;r+=5)(!e||pi[r+4]&&pi[r+4].query===e)&&(pi[r].style.cssText=pi[r+1],pi[r].getBBox&&pi[r].setAttribute("transform",pi[r+2]||""),pi[r+3].uncache=1)},B5=function(){return Le.forEach(function(e){return Tn(e)&&++e.cacheID&&(e.rec=e())})},jy=function(e,r){var a;for(Pn=0;Pn<Oe.length;Pn++)a=Oe[Pn],a&&(!r||a._ctx===r)&&(e?a.kill(1):a.revert(!0,!0));Xu=!0,r&&L5(r),r||Gs("revert")},V5=function(e,r){Le.cache++,(r||!Ln)&&Le.forEach(function(a){return Tn(a)&&a.cacheID++&&(a.rec=0)}),mi(e)&&(Pe.history.scrollRestoration=Ay=e)},Ln,Vs=0,Bw,aO=function(){if(Bw!==Vs){var e=Bw=Vs;requestAnimationFrame(function(){return e===Vs&&Ms(!0)})}},U5=function(){Je.appendChild(Jo),Ey=!Nn&&Jo.offsetHeight||Pe.innerHeight,Je.removeChild(Jo)},Vw=function(e){return gc(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(r){return r.style.display=e?"none":"block"})},Ms=function(e,r){if(yi=nt.documentElement,Je=nt.body,Ty=[Pe,nt,yi,Je],$i&&!e&&!Xu){an(ze,"scrollEnd",P5);return}U5(),Ln=ze.isRefreshing=!0,Xu||B5();var a=Gs("refreshInit");A5&&ze.sort(),r||jy(),Le.forEach(function(o){Tn(o)&&(o.smooth&&(o.target.style.scrollBehavior="auto"),o(0))}),Oe.slice(0).forEach(function(o){return o.refresh()}),Xu=!1,Oe.forEach(function(o){if(o._subPinOffset&&o.pin){var u=o.vars.horizontal?"offsetWidth":"offsetHeight",c=o.pin[u];o.revert(!0,1),o.adjustPinSpacing(o.pin[u]-c),o.refresh()}}),og=1,Vw(!0),Oe.forEach(function(o){var u=_r(o.scroller,o._dir),c=o.vars.end==="max"||o._endClamp&&o.end>u,f=o._startClamp&&o.start>=u;(c||f)&&o.setPositions(f?u-1:o.start,c?Math.max(f?u:o.start+1,u):o.end,!0)}),Vw(!1),og=0,a.forEach(function(o){return o&&o.render&&o.render(-1)}),Le.forEach(function(o){Tn(o)&&(o.smooth&&requestAnimationFrame(function(){return o.target.style.scrollBehavior="smooth"}),o.rec&&o(o.rec))}),V5(Ay,1),eh.pause(),Vs++,Ln=2,ra(2),Oe.forEach(function(o){return Tn(o.vars.onRefresh)&&o.vars.onRefresh(o)}),Ln=ze.isRefreshing=!1,Gs("refresh")},ug=0,jd=1,Qu,ra=function(e){if(e===2||!Ln&&!Xu){ze.isUpdating=!0,Qu&&Qu.update(0);var r=Oe.length,a=wn(),o=a-i0>=50,u=r&&Oe[0].scroll();if(jd=ug>u?-1:1,Ln||(ug=u),o&&($i&&!xh&&a-$i>200&&($i=0,Gs("scrollEnd")),Cu=i0,i0=a),jd<0){for(Pn=r;Pn-- >0;)Oe[Pn]&&Oe[Pn].update(0,o);jd=1}else for(Pn=0;Pn<r;Pn++)Oe[Pn]&&Oe[Pn].update(0,o);ze.isUpdating=!1}yc=0},cg=[O5,z5,Ry,Cy,Gi+Ku,Gi+qu,Gi+$u,Gi+Fu,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],kd=cg.concat([Ls,Bs,"boxSizing","max"+pl,"max"+My,"position",Gi,Ft,Ft+$u,Ft+qu,Ft+Ku,Ft+Fu]),sO=function(e,r,a){el(a);var o=e._gsap;if(o.spacerIsNative)el(o.spacerState);else if(e._gsap.swappedIn){var u=r.parentNode;u&&(u.insertBefore(e,r),u.removeChild(r))}e._gsap.swappedIn=!1},a0=function(e,r,a,o){if(!e._gsap.swappedIn){for(var u=cg.length,c=r.style,f=e.style,h;u--;)h=cg[u],c[h]=a[h];c.position=a.position==="absolute"?"absolute":"relative",a.display==="inline"&&(c.display="inline-block"),f[Ry]=f[Cy]="auto",c.flexBasis=a.flexBasis||"auto",c.overflow="visible",c.boxSizing="border-box",c[Ls]=th(e,Bn)+Wt,c[Bs]=th(e,Jt)+Wt,c[Ft]=f[Gi]=f[z5]=f[O5]="0",el(o),f[Ls]=f["max"+pl]=a[Ls],f[Bs]=f["max"+My]=a[Bs],f[Ft]=a[Ft],e.parentNode!==r&&(e.parentNode.insertBefore(r,e),r.appendChild(e)),e._gsap.swappedIn=!0}},oO=/([A-Z])/g,el=function(e){if(e){var r=e.t.style,a=e.length,o=0,u,c;for((e.t._gsap||le.core.getCache(e.t)).uncache=1;o<a;o+=2)c=e[o+1],u=e[o],c?r[u]=c:r[u]&&r.removeProperty(u.replace(oO,"-$1").toLowerCase())}},Jf=function(e){for(var r=kd.length,a=e.style,o=[],u=0;u<r;u++)o.push(kd[u],a[kd[u]]);return o.t=e,o},lO=function(e,r,a){for(var o=[],u=e.length,c=a?8:0,f;c<u;c+=2)f=e[c],o.push(f,f in r?r[f]:e[c+1]);return o.t=e.t,o},Od={left:0,top:0},Uw=function(e,r,a,o,u,c,f,h,p,g,y,x,v,w){Tn(e)&&(e=e(h)),mi(e)&&e.substr(0,3)==="max"&&(e=x+(e.charAt(4)==="="?Md("0"+e.substr(3),a):0));var S=v?v.time():0,C,E,M;if(v&&v.seek(0),isNaN(e)||(e=+e),Du(e))v&&(e=le.utils.mapRange(v.scrollTrigger.start,v.scrollTrigger.end,0,x,e)),f&&Dd(f,a,o,!0);else{Tn(r)&&(r=r(h));var R=(e||"0").split(" "),O,j,P,D;M=Kn(r,h)||Je,O=ea(M)||{},(!O||!O.left&&!O.top)&&Xi(M).display==="none"&&(D=M.style.display,M.style.display="block",O=ea(M),D?M.style.display=D:M.style.removeProperty("display")),j=Md(R[0],O[o.d]),P=Md(R[1]||"0",a),e=O[o.p]-p[o.p]-g+j+u-P,f&&Dd(f,P,o,a-P<20||f._isStart&&P>20),a-=a-P}if(w&&(h[w]=e||-.001,e<0&&(e=0)),c){var B=e+a,G=c._isStart;C="scroll"+o.d2,Dd(c,B,o,G&&B>20||!G&&(y?Math.max(Je[C],yi[C]):c.parentNode[C])<=B+1),y&&(p=ea(f),y&&(c.style[o.op.p]=p[o.op.p]-o.op.m-c._offset+Wt))}return v&&M&&(C=ea(M),v.seek(x),E=ea(M),v._caScrollDist=C[o.p]-E[o.p],e=e/v._caScrollDist*x),v&&v.seek(S),v?e:Math.round(e)},uO=/(webkit|moz|length|cssText|inset)/i,Hw=function(e,r,a,o){if(e.parentNode!==r){var u=e.style,c,f;if(r===Je){e._stOrig=u.cssText,f=Xi(e);for(c in f)!+c&&!uO.test(c)&&f[c]&&typeof u[c]=="string"&&c!=="0"&&(u[c]=f[c]);u.top=a,u.left=o}else u.cssText=e._stOrig;le.core.getCache(e).uncache=1,r.appendChild(e)}},H5=function(e,r,a){var o=r,u=o;return function(c){var f=Math.round(e());return f!==o&&f!==u&&Math.abs(f-o)>3&&Math.abs(f-u)>3&&(c=f,a&&a()),u=o,o=Math.round(c),o}},ed=function(e,r,a){var o={};o[r.p]="+="+a,le.set(e,o)},Yw=function(e,r){var a=Ia(e,r),o="_scroll"+r.p2,u=function c(f,h,p,g,y){var x=c.tween,v=h.onComplete,w={};p=p||a();var S=H5(a,p,function(){x.kill(),c.tween=0});return y=g&&y||0,g=g||f-p,x&&x.kill(),h[o]=f,h.inherit=!1,h.modifiers=w,w[o]=function(){return S(p+g*x.ratio+y*x.ratio*x.ratio)},h.onUpdate=function(){Le.cache++,c.tween&&ra()},h.onComplete=function(){c.tween=0,v&&v.call(x)},x=c.tween=le.to(e,h),x};return e[o]=a,a.wheelHandler=function(){return u.tween&&u.tween.kill()&&(u.tween=0)},an(e,"wheel",a.wheelHandler),ze.isTouch&&an(e,"touchmove",a.wheelHandler),u},ze=function(){function n(r,a){Lo||n.register(le)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),sg(this),this.init(r,a)}var e=n.prototype;return e.init=function(a,o){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!Ru){this.update=this.refresh=this.kill=yr;return}a=Nw(mi(a)||Du(a)||a.nodeType?{trigger:a}:a,Zf);var u=a,c=u.onUpdate,f=u.toggleClass,h=u.id,p=u.onToggle,g=u.onRefresh,y=u.scrub,x=u.trigger,v=u.pin,w=u.pinSpacing,S=u.invalidateOnRefresh,C=u.anticipatePin,E=u.onScrubComplete,M=u.onSnapComplete,R=u.once,O=u.snap,j=u.pinReparent,P=u.pinSpacer,D=u.containerAnimation,B=u.fastScrollEnd,G=u.preventOverlaps,F=a.horizontal||a.containerAnimation&&a.horizontal!==!1?Bn:Jt,re=!y&&y!==0,J=Kn(a.scroller||Pe),ye=le.core.getCache(J),pe=Hs(J),ge=("pinType"in a?a.pinType:Xa(J,"pinType")||pe&&"fixed")==="fixed",Y=[a.onEnter,a.onLeave,a.onEnterBack,a.onLeaveBack],K=re&&a.toggleActions.split(" "),ee="markers"in a?a.markers:Zf.markers,se=pe?0:parseFloat(Xi(J)["border"+F.p2+pl])||0,T=this,Q=a.onRefreshInit&&function(){return a.onRefreshInit(T)},te=J8(J,pe,F),ie=eO(J,pe),ae=0,me=0,oe=0,je=Ia(J,F),Te,Fe,gn,pt,it,Be,mt,yn,Rn,$,Mn,Ci,Qi,ot,Ii,Zi,Mr,Ut,Un,Ye,Ht,ct,Wi,es,Rt,Dr,Hn,Yn,Ji,Gn,jr,Ce,ur,Dn,ln,ni,cr,kr,ii;if(T._startClamp=T._endClamp=!1,T._dir=F,C*=45,T.scroller=J,T.scroll=D?D.time.bind(D):je,pt=je(),T.vars=a,o=o||a.animation,"refreshPriority"in a&&(A5=1,a.refreshPriority===-9999&&(Qu=T)),ye.tweenScroll=ye.tweenScroll||{top:Yw(J,Jt),left:Yw(J,Bn)},T.tweenTo=Te=ye.tweenScroll[F.p],T.scrubDuration=function(ne){ur=Du(ne)&&ne,ur?Ce?Ce.duration(ne):Ce=le.to(o,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:ur,paused:!0,onComplete:function(){return E&&E(T)}}):(Ce&&Ce.progress(1).kill(),Ce=0)},o&&(o.vars.lazy=!1,o._initted&&!T.isReverted||o.vars.immediateRender!==!1&&a.immediateRender!==!1&&o.duration()&&o.render(0,!0,!0),T.animation=o.pause(),o.scrollTrigger=T,T.scrubDuration(y),Gn=0,h||(h=o.vars.id)),O&&((!Ts(O)||O.push)&&(O={snapTo:O}),"scrollBehavior"in Je.style&&le.set(pe?[Je,yi]:J,{scrollBehavior:"auto"}),Le.forEach(function(ne){return Tn(ne)&&ne.target===(pe?nt.scrollingElement||yi:J)&&(ne.smooth=!1)}),gn=Tn(O.snapTo)?O.snapTo:O.snapTo==="labels"?nO(o):O.snapTo==="labelsDirectional"?iO(o):O.directional!==!1?function(ne,fe){return Dy(O.snapTo)(ne,wn()-me<500?0:fe.direction)}:le.utils.snap(O.snapTo),Dn=O.duration||{min:.1,max:2},Dn=Ts(Dn)?Gu(Dn.min,Dn.max):Gu(Dn,Dn),ln=le.delayedCall(O.delay||ur/2||.1,function(){var ne=je(),fe=wn()-me<500,ce=Te.tween;if((fe||Math.abs(T.getVelocity())<10)&&!ce&&!xh&&ae!==ne){var Se=(ne-Be)/ot,Yt=o&&!re?o.totalProgress():Se,Ve=fe?0:(Yt-jr)/(wn()-Cu)*1e3||0,vt=le.utils.clamp(-Se,1-Se,Mo(Ve/2)*Ve/.185),Mt=Se+(O.inertia===!1?0:vt),ft,Qe,Xe=O,un=Xe.onStart,Ze=Xe.onInterrupt,$e=Xe.onComplete;if(ft=gn(Mt,T),Du(ft)||(ft=Mt),Qe=Math.max(0,Math.round(Be+ft*ot)),ne<=mt&&ne>=Be&&Qe!==ne){if(ce&&!ce._initted&&ce.data<=Mo(Qe-ne))return;O.inertia===!1&&(vt=ft-Se),Te(Qe,{duration:Dn(Mo(Math.max(Mo(Mt-Yt),Mo(ft-Yt))*.185/Ve/.05||0)),ease:O.ease||"power3",data:Mo(Qe-ne),onInterrupt:function(){return ln.restart(!0)&&Ze&&Ro(T,Ze)},onComplete:function(){T.update(),ae=je(),o&&!re&&(Ce?Ce.resetTo("totalProgress",ft,o._tTime/o._tDur):o.progress(ft)),Gn=jr=o&&!re?o.totalProgress():T.progress,M&&M(T),$e&&Ro(T,$e)}},ne,vt*ot,Qe-ne-vt*ot),un&&Ro(T,un,Te.tween)}}else T.isActive&&ae!==ne&&ln.restart(!0)}).pause()),h&&(lg[h]=T),x=T.trigger=Kn(x||v!==!0&&v),ii=x&&x._gsap&&x._gsap.stRevert,ii&&(ii=ii(T)),v=v===!0?x:Kn(v),mi(f)&&(f={targets:x,className:f}),v&&(w===!1||w===Gi||(w=!w&&v.parentNode&&v.parentNode.style&&Xi(v.parentNode).display==="flex"?!1:Ft),T.pin=v,Fe=le.core.getCache(v),Fe.spacer?Ii=Fe.pinState:(P&&(P=Kn(P),P&&!P.nodeType&&(P=P.current||P.nativeElement),Fe.spacerIsNative=!!P,P&&(Fe.spacerState=Jf(P))),Fe.spacer=Ut=P||nt.createElement("div"),Ut.classList.add("pin-spacer"),h&&Ut.classList.add("pin-spacer-"+h),Fe.pinState=Ii=Jf(v)),a.force3D!==!1&&le.set(v,{force3D:!0}),T.spacer=Ut=Fe.spacer,Ji=Xi(v),es=Ji[w+F.os2],Ye=le.getProperty(v),Ht=le.quickSetter(v,F.a,Wt),a0(v,Ut,Ji),Mr=Jf(v)),ee){Ci=Ts(ee)?Nw(ee,Pw):Pw,$=Wf("scroller-start",h,J,F,Ci,0),Mn=Wf("scroller-end",h,J,F,Ci,0,$),Un=$["offset"+F.op.d2];var Or=Kn(Xa(J,"content")||J);yn=this.markerStart=Wf("start",h,Or,F,Ci,Un,0,D),Rn=this.markerEnd=Wf("end",h,Or,F,Ci,Un,0,D),D&&(kr=le.quickSetter([yn,Rn],F.a,Wt)),!ge&&!(Cr.length&&Xa(J,"fixedMarkers")===!0)&&(tO(pe?Je:J),le.set([$,Mn],{force3D:!0}),Dr=le.quickSetter($,F.a,Wt),Yn=le.quickSetter(Mn,F.a,Wt))}if(D){var Ae=D.vars.onUpdate,ve=D.vars.onUpdateParams;D.eventCallback("onUpdate",function(){T.update(0,0,1),Ae&&Ae.apply(D,ve||[])})}if(T.previous=function(){return Oe[Oe.indexOf(T)-1]},T.next=function(){return Oe[Oe.indexOf(T)+1]},T.revert=function(ne,fe){if(!fe)return T.kill(!0);var ce=ne!==!1||!T.enabled,Se=bn;ce!==T.isReverted&&(ce&&(ni=Math.max(je(),T.scroll.rec||0),oe=T.progress,cr=o&&o.progress()),yn&&[yn,Rn,$,Mn].forEach(function(Yt){return Yt.style.display=ce?"none":"block"}),ce&&(bn=T,T.update(ce)),v&&(!j||!T.isActive)&&(ce?sO(v,Ut,Ii):a0(v,Ut,Xi(v),Rt)),ce||T.update(ce),bn=Se,T.isReverted=ce)},T.refresh=function(ne,fe,ce,Se){if(!((bn||!T.enabled)&&!fe)){if(v&&ne&&$i){an(n,"scrollEnd",P5);return}!Ln&&Q&&Q(T),bn=T,Te.tween&&!ce&&(Te.tween.kill(),Te.tween=0),Ce&&Ce.pause(),S&&o&&(o.revert({kill:!1}).invalidate(),o.getChildren?o.getChildren(!0,!0,!1).forEach(function(Di){return Di.vars.immediateRender&&Di.render(0,!0,!0)}):o.vars.immediateRender&&o.render(0,!0,!0)),T.isReverted||T.revert(!0,!0),T._subPinOffset=!1;var Yt=te(),Ve=ie(),vt=D?D.duration():_r(J,F),Mt=ot<=.01||!ot,ft=0,Qe=Se||0,Xe=Ts(ce)?ce.end:a.end,un=a.endTrigger||x,Ze=Ts(ce)?ce.start:a.start||(a.start===0||!x?0:v?"0 0":"0 100%"),$e=T.pinnedContainer=a.pinnedContainer&&Kn(a.pinnedContainer,T),ri=x&&Math.max(0,Oe.indexOf(T))||0,Gt=ri,gt,wt,zr,ts,Qt,zt,jn,ua,Ri,Nr,ai,Mi,ca;for(ee&&Ts(ce)&&(Mi=le.getProperty($,F.p),ca=le.getProperty(Mn,F.p));Gt-- >0;)zt=Oe[Gt],zt.end||zt.refresh(0,1)||(bn=T),jn=zt.pin,jn&&(jn===x||jn===v||jn===$e)&&!zt.isReverted&&(Nr||(Nr=[]),Nr.unshift(zt),zt.revert(!0,!0)),zt!==Oe[Gt]&&(ri--,Gt--);for(Tn(Ze)&&(Ze=Ze(T)),Ze=jw(Ze,"start",T),Be=Uw(Ze,x,Yt,F,je(),yn,$,T,Ve,se,ge,vt,D,T._startClamp&&"_startClamp")||(v?-.001:0),Tn(Xe)&&(Xe=Xe(T)),mi(Xe)&&!Xe.indexOf("+=")&&(~Xe.indexOf(" ")?Xe=(mi(Ze)?Ze.split(" ")[0]:"")+Xe:(ft=Md(Xe.substr(2),Yt),Xe=mi(Ze)?Ze:(D?le.utils.mapRange(0,D.duration(),D.scrollTrigger.start,D.scrollTrigger.end,Be):Be)+ft,un=x)),Xe=jw(Xe,"end",T),mt=Math.max(Be,Uw(Xe||(un?"100% 0":vt),un,Yt,F,je()+ft,Rn,Mn,T,Ve,se,ge,vt,D,T._endClamp&&"_endClamp"))||-.001,ft=0,Gt=ri;Gt--;)zt=Oe[Gt]||{},jn=zt.pin,jn&&zt.start-zt._pinPush<=Be&&!D&&zt.end>0&&(gt=zt.end-(T._startClamp?Math.max(0,zt.start):zt.start),(jn===x&&zt.start-zt._pinPush<Be||jn===$e)&&isNaN(Ze)&&(ft+=gt*(1-zt.progress)),jn===v&&(Qe+=gt));if(Be+=ft,mt+=ft,T._startClamp&&(T._startClamp+=ft),T._endClamp&&!Ln&&(T._endClamp=mt||-.001,mt=Math.min(mt,_r(J,F))),ot=mt-Be||(Be-=.01)&&.001,Mt&&(oe=le.utils.clamp(0,1,le.utils.normalize(Be,mt,ni))),T._pinPush=Qe,yn&&ft&&(gt={},gt[F.a]="+="+ft,$e&&(gt[F.p]="-="+je()),le.set([yn,Rn],gt)),v&&!(og&&T.end>=_r(J,F)))gt=Xi(v),ts=F===Jt,zr=je(),ct=parseFloat(Ye(F.a))+Qe,!vt&&mt>1&&(ai=(pe?nt.scrollingElement||yi:J).style,ai={style:ai,value:ai["overflow"+F.a.toUpperCase()]},pe&&Xi(Je)["overflow"+F.a.toUpperCase()]!=="scroll"&&(ai.style["overflow"+F.a.toUpperCase()]="scroll")),a0(v,Ut,gt),Mr=Jf(v),wt=ea(v,!0),ua=ge&&Ia(J,ts?Bn:Jt)(),w?(Rt=[w+F.os2,ot+Qe+Wt],Rt.t=Ut,Gt=w===Ft?th(v,F)+ot+Qe:0,Gt&&(Rt.push(F.d,Gt+Wt),Ut.style.flexBasis!=="auto"&&(Ut.style.flexBasis=Gt+Wt)),el(Rt),$e&&Oe.forEach(function(Di){Di.pin===$e&&Di.vars.pinSpacing!==!1&&(Di._subPinOffset=!0)}),ge&&je(ni)):(Gt=th(v,F),Gt&&Ut.style.flexBasis!=="auto"&&(Ut.style.flexBasis=Gt+Wt)),ge&&(Qt={top:wt.top+(ts?zr-Be:ua)+Wt,left:wt.left+(ts?ua:zr-Be)+Wt,boxSizing:"border-box",position:"fixed"},Qt[Ls]=Qt["max"+pl]=Math.ceil(wt.width)+Wt,Qt[Bs]=Qt["max"+My]=Math.ceil(wt.height)+Wt,Qt[Gi]=Qt[Gi+$u]=Qt[Gi+qu]=Qt[Gi+Ku]=Qt[Gi+Fu]="0",Qt[Ft]=gt[Ft],Qt[Ft+$u]=gt[Ft+$u],Qt[Ft+qu]=gt[Ft+qu],Qt[Ft+Ku]=gt[Ft+Ku],Qt[Ft+Fu]=gt[Ft+Fu],Zi=lO(Ii,Qt,j),Ln&&je(0)),o?(Ri=o._initted,t0(1),o.render(o.duration(),!0,!0),Wi=Ye(F.a)-ct+ot+Qe,Hn=Math.abs(ot-Wi)>1,ge&&Hn&&Zi.splice(Zi.length-2,2),o.render(0,!0,!0),Ri||o.invalidate(!0),o.parent||o.totalTime(o.totalTime()),t0(0)):Wi=ot,ai&&(ai.value?ai.style["overflow"+F.a.toUpperCase()]=ai.value:ai.style.removeProperty("overflow-"+F.a));else if(x&&je()&&!D)for(wt=x.parentNode;wt&&wt!==Je;)wt._pinOffset&&(Be-=wt._pinOffset,mt-=wt._pinOffset),wt=wt.parentNode;Nr&&Nr.forEach(function(Di){return Di.revert(!1,!0)}),T.start=Be,T.end=mt,pt=it=Ln?ni:je(),!D&&!Ln&&(pt<ni&&je(ni),T.scroll.rec=0),T.revert(!1,!0),me=wn(),ln&&(ae=-1,ln.restart(!0)),bn=0,o&&re&&(o._initted||cr)&&o.progress()!==cr&&o.progress(cr||0,!0).render(o.time(),!0,!0),(Mt||oe!==T.progress||D||S||o&&!o._initted)&&(o&&!re&&(o._initted||oe||o.vars.immediateRender!==!1)&&o.totalProgress(D&&Be<-.001&&!oe?le.utils.normalize(Be,mt,0):oe,!0),T.progress=Mt||(pt-Be)/ot===oe?0:oe),v&&w&&(Ut._pinOffset=Math.round(T.progress*Wi)),Ce&&Ce.invalidate(),isNaN(Mi)||(Mi-=le.getProperty($,F.p),ca-=le.getProperty(Mn,F.p),ed($,F,Mi),ed(yn,F,Mi-(Se||0)),ed(Mn,F,ca),ed(Rn,F,ca-(Se||0))),Mt&&!Ln&&T.update(),g&&!Ln&&!Qi&&(Qi=!0,g(T),Qi=!1)}},T.getVelocity=function(){return(je()-it)/(wn()-Cu)*1e3||0},T.endAnimation=function(){_u(T.callbackAnimation),o&&(Ce?Ce.progress(1):o.paused()?re||_u(o,T.direction<0,1):_u(o,o.reversed()))},T.labelToScroll=function(ne){return o&&o.labels&&(Be||T.refresh()||Be)+o.labels[ne]/o.duration()*ot||0},T.getTrailing=function(ne){var fe=Oe.indexOf(T),ce=T.direction>0?Oe.slice(0,fe).reverse():Oe.slice(fe+1);return(mi(ne)?ce.filter(function(Se){return Se.vars.preventOverlaps===ne}):ce).filter(function(Se){return T.direction>0?Se.end<=Be:Se.start>=mt})},T.update=function(ne,fe,ce){if(!(D&&!ce&&!ne)){var Se=Ln===!0?ni:T.scroll(),Yt=ne?0:(Se-Be)/ot,Ve=Yt<0?0:Yt>1?1:Yt||0,vt=T.progress,Mt,ft,Qe,Xe,un,Ze,$e,ri;if(fe&&(it=pt,pt=D?je():Se,O&&(jr=Gn,Gn=o&&!re?o.totalProgress():Ve)),C&&v&&!bn&&!$f&&$i&&(!Ve&&Be<Se+(Se-it)/(wn()-Cu)*C?Ve=1e-4:Ve===1&&mt>Se+(Se-it)/(wn()-Cu)*C&&(Ve=.9999)),Ve!==vt&&T.enabled){if(Mt=T.isActive=!!Ve&&Ve<1,ft=!!vt&&vt<1,Ze=Mt!==ft,un=Ze||!!Ve!=!!vt,T.direction=Ve>vt?1:-1,T.progress=Ve,un&&!bn&&(Qe=Ve&&!vt?0:Ve===1?1:vt===1?2:3,re&&(Xe=!Ze&&K[Qe+1]!=="none"&&K[Qe+1]||K[Qe],ri=o&&(Xe==="complete"||Xe==="reset"||Xe in o))),G&&(Ze||ri)&&(ri||y||!o)&&(Tn(G)?G(T):T.getTrailing(G).forEach(function(zr){return zr.endAnimation()})),re||(Ce&&!bn&&!$f?(Ce._dp._time-Ce._start!==Ce._time&&Ce.render(Ce._dp._time-Ce._start),Ce.resetTo?Ce.resetTo("totalProgress",Ve,o._tTime/o._tDur):(Ce.vars.totalProgress=Ve,Ce.invalidate().restart())):o&&o.totalProgress(Ve,!!(bn&&(me||ne)))),v){if(ne&&w&&(Ut.style[w+F.os2]=es),!ge)Ht(Mu(ct+Wi*Ve));else if(un){if($e=!ne&&Ve>vt&&mt+1>Se&&Se+1>=_r(J,F),j)if(!ne&&(Mt||$e)){var Gt=ea(v,!0),gt=Se-Be;Hw(v,Je,Gt.top+(F===Jt?gt:0)+Wt,Gt.left+(F===Jt?0:gt)+Wt)}else Hw(v,Ut);el(Mt||$e?Zi:Mr),Hn&&Ve<1&&Mt||Ht(ct+(Ve===1&&!$e?Wi:0))}}O&&!Te.tween&&!bn&&!$f&&ln.restart(!0),f&&(Ze||R&&Ve&&(Ve<1||!n0))&&gc(f.targets).forEach(function(zr){return zr.classList[Mt||R?"add":"remove"](f.className)}),c&&!re&&!ne&&c(T),un&&!bn?(re&&(ri&&(Xe==="complete"?o.pause().totalProgress(1):Xe==="reset"?o.restart(!0).pause():Xe==="restart"?o.restart(!0):o[Xe]()),c&&c(T)),(Ze||!n0)&&(p&&Ze&&Ro(T,p),Y[Qe]&&Ro(T,Y[Qe]),R&&(Ve===1?T.kill(!1,1):Y[Qe]=0),Ze||(Qe=Ve===1?1:3,Y[Qe]&&Ro(T,Y[Qe]))),B&&!Mt&&Math.abs(T.getVelocity())>(Du(B)?B:2500)&&(_u(T.callbackAnimation),Ce?Ce.progress(1):_u(o,Xe==="reverse"?1:!Ve,1))):re&&c&&!bn&&c(T)}if(Yn){var wt=D?Se/D.duration()*(D._caScrollDist||0):Se;Dr(wt+($._isFlipped?1:0)),Yn(wt)}kr&&kr(-Se/D.duration()*(D._caScrollDist||0))}},T.enable=function(ne,fe){T.enabled||(T.enabled=!0,an(J,"resize",ju),pe||an(J,"scroll",Do),Q&&an(n,"refreshInit",Q),ne!==!1&&(T.progress=oe=0,pt=it=ae=je()),fe!==!1&&T.refresh())},T.getTween=function(ne){return ne&&Te?Te.tween:Ce},T.setPositions=function(ne,fe,ce,Se){if(D){var Yt=D.scrollTrigger,Ve=D.duration(),vt=Yt.end-Yt.start;ne=Yt.start+vt*ne/Ve,fe=Yt.start+vt*fe/Ve}T.refresh(!1,!1,{start:kw(ne,ce&&!!T._startClamp),end:kw(fe,ce&&!!T._endClamp)},Se),T.update()},T.adjustPinSpacing=function(ne){if(Rt&&ne){var fe=Rt.indexOf(F.d)+1;Rt[fe]=parseFloat(Rt[fe])+ne+Wt,Rt[1]=parseFloat(Rt[1])+ne+Wt,el(Rt)}},T.disable=function(ne,fe){if(ne!==!1&&T.revert(!0,!0),T.enabled&&(T.enabled=T.isActive=!1,fe||Ce&&Ce.pause(),ni=0,Fe&&(Fe.uncache=1),Q&&rn(n,"refreshInit",Q),ln&&(ln.pause(),Te.tween&&Te.tween.kill()&&(Te.tween=0)),!pe)){for(var ce=Oe.length;ce--;)if(Oe[ce].scroller===J&&Oe[ce]!==T)return;rn(J,"resize",ju),pe||rn(J,"scroll",Do)}},T.kill=function(ne,fe){T.disable(ne,fe),Ce&&!fe&&Ce.kill(),h&&delete lg[h];var ce=Oe.indexOf(T);ce>=0&&Oe.splice(ce,1),ce===Pn&&jd>0&&Pn--,ce=0,Oe.forEach(function(Se){return Se.scroller===T.scroller&&(ce=1)}),ce||Ln||(T.scroll.rec=0),o&&(o.scrollTrigger=null,ne&&o.revert({kill:!1}),fe||o.kill()),yn&&[yn,Rn,$,Mn].forEach(function(Se){return Se.parentNode&&Se.parentNode.removeChild(Se)}),Qu===T&&(Qu=0),v&&(Fe&&(Fe.uncache=1),ce=0,Oe.forEach(function(Se){return Se.pin===v&&ce++}),ce||(Fe.spacer=0)),a.onKill&&a.onKill(T)},Oe.push(T),T.enable(!1,!1),ii&&ii(T),o&&o.add&&!ot){var Re=T.update;T.update=function(){T.update=Re,Le.cache++,Be||mt||T.refresh()},le.delayedCall(.01,T.update),ot=.01,Be=mt=0}else T.refresh();v&&aO()},n.register=function(a){return Lo||(le=a||D5(),M5()&&window.document&&n.enable(),Lo=Ru),Lo},n.defaults=function(a){if(a)for(var o in a)Zf[o]=a[o];return Zf},n.disable=function(a,o){Ru=0,Oe.forEach(function(c){return c[o?"kill":"disable"](a)}),rn(Pe,"wheel",Do),rn(nt,"scroll",Do),clearInterval(Ff),rn(nt,"touchcancel",yr),rn(Je,"touchstart",yr),Qf(rn,nt,"pointerdown,touchstart,mousedown",Ow),Qf(rn,nt,"pointerup,touchend,mouseup",zw),eh.kill(),Kf(rn);for(var u=0;u<Le.length;u+=3)If(rn,Le[u],Le[u+1]),If(rn,Le[u],Le[u+2])},n.enable=function(){if(Pe=window,nt=document,yi=nt.documentElement,Je=nt.body,le){if(gc=le.utils.toArray,Gu=le.utils.clamp,sg=le.core.context||yr,t0=le.core.suppressOverwrites||yr,Ay=Pe.history.scrollRestoration||"auto",ug=Pe.pageYOffset||0,le.core.globals("ScrollTrigger",n),Je){Ru=1,Jo=document.createElement("div"),Jo.style.height="100vh",Jo.style.position="absolute",U5(),W8(),Vt.register(le),n.isTouch=Vt.isTouch,Pa=Vt.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),ag=Vt.isTouch===1,an(Pe,"wheel",Do),Ty=[Pe,nt,yi,Je],le.matchMedia?(n.matchMedia=function(g){var y=le.matchMedia(),x;for(x in g)y.add(x,g[x]);return y},le.addEventListener("matchMediaInit",function(){B5(),jy()}),le.addEventListener("matchMediaRevert",function(){return L5()}),le.addEventListener("matchMedia",function(){Ms(0,1),Gs("matchMedia")}),le.matchMedia().add("(orientation: portrait)",function(){return r0(),r0})):console.warn("Requires GSAP 3.11.0 or later"),r0(),an(nt,"scroll",Do);var a=Je.hasAttribute("style"),o=Je.style,u=o.borderTopStyle,c=le.core.Animation.prototype,f,h;for(c.revert||Object.defineProperty(c,"revert",{value:function(){return this.time(-.01,!0)}}),o.borderTopStyle="solid",f=ea(Je),Jt.m=Math.round(f.top+Jt.sc())||0,Bn.m=Math.round(f.left+Bn.sc())||0,u?o.borderTopStyle=u:o.removeProperty("border-top-style"),a||(Je.setAttribute("style",""),Je.removeAttribute("style")),Ff=setInterval(Lw,250),le.delayedCall(.5,function(){return $f=0}),an(nt,"touchcancel",yr),an(Je,"touchstart",yr),Qf(an,nt,"pointerdown,touchstart,mousedown",Ow),Qf(an,nt,"pointerup,touchend,mouseup",zw),rg=le.utils.checkPrefix("transform"),kd.push(rg),Lo=wn(),eh=le.delayedCall(.2,Ms).pause(),Bo=[nt,"visibilitychange",function(){var g=Pe.innerWidth,y=Pe.innerHeight;nt.hidden?(Mw=g,Dw=y):(Mw!==g||Dw!==y)&&ju()},nt,"DOMContentLoaded",Ms,Pe,"load",Ms,Pe,"resize",ju],Kf(an),Oe.forEach(function(g){return g.enable(0,1)}),h=0;h<Le.length;h+=3)If(rn,Le[h],Le[h+1]),If(rn,Le[h],Le[h+2])}else if(nt){var p=function g(){n.enable(),nt.removeEventListener("DOMContentLoaded",g)};nt.addEventListener("DOMContentLoaded",p)}}},n.config=function(a){"limitCallbacks"in a&&(n0=!!a.limitCallbacks);var o=a.syncInterval;o&&clearInterval(Ff)||(Ff=o)&&setInterval(Lw,o),"ignoreMobileResize"in a&&(ag=n.isTouch===1&&a.ignoreMobileResize),"autoRefreshEvents"in a&&(Kf(rn)||Kf(an,a.autoRefreshEvents||"none"),E5=(a.autoRefreshEvents+"").indexOf("resize")===-1)},n.scrollerProxy=function(a,o){var u=Kn(a),c=Le.indexOf(u),f=Hs(u);~c&&Le.splice(c,f?6:2),o&&(f?Cr.unshift(Pe,o,Je,o,yi,o):Cr.unshift(u,o))},n.clearMatchMedia=function(a){Oe.forEach(function(o){return o._ctx&&o._ctx.query===a&&o._ctx.kill(!0,!0)})},n.isInViewport=function(a,o,u){var c=(mi(a)?Kn(a):a).getBoundingClientRect(),f=c[u?Ls:Bs]*o||0;return u?c.right-f>0&&c.left+f<Pe.innerWidth:c.bottom-f>0&&c.top+f<Pe.innerHeight},n.positionInViewport=function(a,o,u){mi(a)&&(a=Kn(a));var c=a.getBoundingClientRect(),f=c[u?Ls:Bs],h=o==null?f/2:o in nh?nh[o]*f:~o.indexOf("%")?parseFloat(o)*f/100:parseFloat(o)||0;return u?(c.left+h)/Pe.innerWidth:(c.top+h)/Pe.innerHeight},n.killAll=function(a){if(Oe.slice(0).forEach(function(u){return u.vars.id!=="ScrollSmoother"&&u.kill()}),a!==!0){var o=Ys.killAll||[];Ys={},o.forEach(function(u){return u()})}},n}();ze.version="3.15.0";ze.saveStyles=function(n){return n?gc(n).forEach(function(e){if(e&&e.style){var r=pi.indexOf(e);r>=0&&pi.splice(r,5),pi.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),le.core.getCache(e),sg())}}):pi};ze.revert=function(n,e){return jy(!n,e)};ze.create=function(n,e){return new ze(n,e)};ze.refresh=function(n){return n?ju(!0):(Lo||ze.register())&&Ms(!0)};ze.update=function(n){return++Le.cache&&ra(n===!0?2:0)};ze.clearScrollMemory=V5;ze.maxScroll=function(n,e){return _r(n,e?Bn:Jt)};ze.getScrollFunc=function(n,e){return Ia(Kn(n),e?Bn:Jt)};ze.getById=function(n){return lg[n]};ze.getAll=function(){return Oe.filter(function(n){return n.vars.id!=="ScrollSmoother"})};ze.isScrolling=function(){return!!$i};ze.snapDirectional=Dy;ze.addEventListener=function(n,e){var r=Ys[n]||(Ys[n]=[]);~r.indexOf(e)||r.push(e)};ze.removeEventListener=function(n,e){var r=Ys[n],a=r&&r.indexOf(e);a>=0&&r.splice(a,1)};ze.batch=function(n,e){var r=[],a={},o=e.interval||.016,u=e.batchMax||1e9,c=function(p,g){var y=[],x=[],v=le.delayedCall(o,function(){g(y,x),y=[],x=[]}).pause();return function(w){y.length||v.restart(!0),y.push(w.trigger),x.push(w),u<=y.length&&v.progress(1)}},f;for(f in e)a[f]=f.substr(0,2)==="on"&&Tn(e[f])&&f!=="onRefreshInit"?c(f,e[f]):e[f];return Tn(u)&&(u=u(),an(ze,"refresh",function(){return u=e.batchMax()})),gc(n).forEach(function(h){var p={};for(f in a)p[f]=a[f];p.trigger=h,r.push(ze.create(p))}),r};var Gw=function(e,r,a,o){return r>o?e(o):r<0&&e(0),a>o?(o-r)/(a-r):a<0?r/(r-a):1},s0=function n(e,r){r===!0?e.style.removeProperty("touch-action"):e.style.touchAction=r===!0?"auto":r?"pan-"+r+(Vt.isTouch?" pinch-zoom":""):"none",e===yi&&n(Je,r)},td={auto:1,scroll:1},cO=function(e){var r=e.event,a=e.target,o=e.axis,u=(r.changedTouches?r.changedTouches[0]:r).target,c=u._gsap||le.core.getCache(u),f=wn(),h;if(!c._isScrollT||f-c._isScrollT>2e3){for(;u&&u!==Je&&(u.scrollHeight<=u.clientHeight&&u.scrollWidth<=u.clientWidth||!(td[(h=Xi(u)).overflowY]||td[h.overflowX]));)u=u.parentNode;c._isScroll=u&&u!==a&&!Hs(u)&&(td[(h=Xi(u)).overflowY]||td[h.overflowX]),c._isScrollT=f}(c._isScroll||o==="x")&&(r.stopPropagation(),r._gsapAllow=!0)},Y5=function(e,r,a,o){return Vt.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:r,onWheel:o=o&&cO,onPress:o,onDrag:o,onScroll:o,onEnable:function(){return a&&an(nt,Vt.eventTypes[0],qw,!1,!0)},onDisable:function(){return rn(nt,Vt.eventTypes[0],qw,!0)}})},fO=/(input|label|select|textarea)/i,Xw,qw=function(e){var r=fO.test(e.target.tagName);(r||Xw)&&(e._gsapAllow=!0,Xw=r)},dO=function(e){Ts(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var r=e,a=r.normalizeScrollX,o=r.momentum,u=r.allowNestedScroll,c=r.onRelease,f,h,p=Kn(e.target)||yi,g=le.core.globals().ScrollSmoother,y=g&&g.get(),x=Pa&&(e.content&&Kn(e.content)||y&&e.content!==!1&&!y.smooth()&&y.content()),v=Ia(p,Jt),w=Ia(p,Bn),S=1,C=(Vt.isTouch&&Pe.visualViewport?Pe.visualViewport.scale*Pe.visualViewport.width:Pe.outerWidth)/Pe.innerWidth,E=0,M=Tn(o)?function(){return o(f)}:function(){return o||2.8},R,O,j=Y5(p,e.type,!0,u),P=function(){return O=!1},D=yr,B=yr,G=function(){h=_r(p,Jt),B=Gu(Pa?1:0,h),a&&(D=Gu(0,_r(p,Bn))),R=Vs},F=function(){x._gsap.y=Mu(parseFloat(x._gsap.y)+v.offset)+"px",x.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(x._gsap.y)+", 0, 1)",v.offset=v.cacheID=0},re=function(){if(O){requestAnimationFrame(P);var ee=Mu(f.deltaY/2),se=B(v.v-ee);if(x&&se!==v.v+v.offset){v.offset=se-v.v;var T=Mu((parseFloat(x&&x._gsap.y)||0)-v.offset);x.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+T+", 0, 1)",x._gsap.y=T+"px",v.cacheID=Le.cache,ra()}return!0}v.offset&&F(),O=!0},J,ye,pe,ge,Y=function(){G(),J.isActive()&&J.vars.scrollY>h&&(v()>h?J.progress(1)&&v(h):J.resetTo("scrollY",h))};return x&&le.set(x,{y:"+=0"}),e.ignoreCheck=function(K){return Pa&&K.type==="touchmove"&&re()||S>1.05&&K.type!=="touchstart"||f.isGesturing||K.touches&&K.touches.length>1},e.onPress=function(){O=!1;var K=S;S=Mu((Pe.visualViewport&&Pe.visualViewport.scale||1)/C),J.pause(),K!==S&&s0(p,S>1.01?!0:a?!1:"x"),ye=w(),pe=v(),G(),R=Vs},e.onRelease=e.onGestureStart=function(K,ee){if(v.offset&&F(),!ee)ge.restart(!0);else{Le.cache++;var se=M(),T,Q;a&&(T=w(),Q=T+se*.05*-K.velocityX/.227,se*=Gw(w,T,Q,_r(p,Bn)),J.vars.scrollX=D(Q)),T=v(),Q=T+se*.05*-K.velocityY/.227,se*=Gw(v,T,Q,_r(p,Jt)),J.vars.scrollY=B(Q),J.invalidate().duration(se).play(.01),(Pa&&J.vars.scrollY>=h||T>=h-1)&&le.to({},{onUpdate:Y,duration:se})}c&&c(K)},e.onWheel=function(){J._ts&&J.pause(),wn()-E>1e3&&(R=0,E=wn())},e.onChange=function(K,ee,se,T,Q){if(Vs!==R&&G(),ee&&a&&w(D(T[2]===ee?ye+(K.startX-K.x):w()+ee-T[1])),se){v.offset&&F();var te=Q[2]===se,ie=te?pe+K.startY-K.y:v()+se-Q[1],ae=B(ie);te&&ie!==ae&&(pe+=ae-ie),v(ae)}(se||ee)&&ra()},e.onEnable=function(){s0(p,a?!1:"x"),ze.addEventListener("refresh",Y),an(Pe,"resize",Y),v.smooth&&(v.target.style.scrollBehavior="auto",v.smooth=w.smooth=!1),j.enable()},e.onDisable=function(){s0(p,!0),rn(Pe,"resize",Y),ze.removeEventListener("refresh",Y),j.kill()},e.lockAxis=e.lockAxis!==!1,f=new Vt(e),f.iOS=Pa,Pa&&!v()&&v(1),Pa&&le.ticker.add(yr),ge=f._dc,J=le.to(f,{ease:"power4",paused:!0,inherit:!1,scrollX:a?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:H5(v,v(),function(){return J.pause()})},onUpdate:ra,onComplete:ge.vars.onComplete}),f};ze.sort=function(n){if(Tn(n))return Oe.sort(n);var e=Pe.pageYOffset||0;return ze.getAll().forEach(function(r){return r._sortY=r.trigger?e+r.trigger.getBoundingClientRect().top:r.start+Pe.innerHeight}),Oe.sort(n||function(r,a){return(r.vars.refreshPriority||0)*-1e6+(r.vars.containerAnimation?1e6:r._sortY)-((a.vars.containerAnimation?1e6:a._sortY)+(a.vars.refreshPriority||0)*-1e6)})};ze.observe=function(n){return new Vt(n)};ze.normalizeScroll=function(n){if(typeof n>"u")return Nn;if(n===!0&&Nn)return Nn.enable();if(n===!1){Nn&&Nn.kill(),Nn=n;return}var e=n instanceof Vt?n:dO(n);return Nn&&Nn.target===e.target&&Nn.kill(),Hs(e.target)&&(Nn=e),e};ze.core={_getVelocityProp:ig,_inputObserver:Y5,_scrollers:Le,_proxies:Cr,bridge:{ss:function(){$i||Gs("scrollStart"),$i=wn()},ref:function(){return bn}}};D5()&&le.registerPlugin(ze);const hO="/portfolio/assets/clay-bus-C3jrHuUL.png",pO={mint:"var(--clay-mint)",peach:"var(--clay-peach)",blue:"var(--clay-blue)",cream:"var(--clay-cream)"},mO=V.span`
  display:inline-block; position:relative; width:${({$size:n})=>n}px; height:${({$size:n})=>n*.84}px;
  background:${({$tone:n})=>pO[n]};
  border-radius:${({$round:n})=>n?"50% 50% 45% 55% / 55% 45% 55% 45%":"46% 54% 60% 40% / 56% 46% 54% 44%"};
  box-shadow:inset 3px 4px 7px rgba(255,255,255,.65), 3px 5px 9px rgba(85,107,91,.08);
  transform:rotate(-8deg); flex-shrink:0;
  &::before, &::after { content:''; position:absolute; width:7%; height:15%; background:var(--ink); border-radius:50%; top:44%; }
  &::before { left:40%; } &::after { left:56%; }
`;function Us({tone:n="mint",size:e=68,round:r=!1}){return b.jsx(mO,{$tone:n,$size:e,$round:r,"aria-hidden":"true"})}const gO=V.div`
  width:min(680px,100%); position:relative; margin:1rem auto 0; isolation:isolate;
  &::before { content:''; position:absolute; inset:20% 4% 1%; z-index:-1; background:var(--clay-mint); opacity:.65; border-radius:48% 52% 40% 60% / 62% 58% 42% 38%; }
  &::after { content:''; position:absolute; width:100px; height:100px; right:3%; top:8%; z-index:-1; background:var(--clay-peach); border-radius:50%; opacity:.6; }
  img { display:block; width:100%; height:auto; filter:drop-shadow(0 15px 13px rgba(84,98,78,.08)); }
  .friend { position:absolute; right:4%; bottom:9%; transform:scale(.85); }
  @media(max-width:600px) { width:100%; margin-top:.75rem; .friend { display:none; } }
`;function yO(){return b.jsxs(gO,{children:[b.jsx("img",{src:hO,alt:"피치색 차체와 민트색 창문의 둥근 클레이 버스 일러스트",width:1776,height:880,fetchPriority:"high"}),b.jsx("span",{className:"friend",children:b.jsx(Us,{})})]})}const vO="/portfolio/assets/yamiyagi-YZU8s5Rh.png",xO="/portfolio/assets/hojin_main-DctrGh5X.png",bO="/portfolio/assets/hojin_detail-DNvwE2_Y.png",_O="/portfolio/assets/petmung-B03BhRsi.png",wO="/portfolio/assets/portfolio-AHcDy501.png",SO="/portfolio/assets/invitation-BC-lSSMD.png",TO="/portfolio/assets/haetnanyong-CDuK574s.png",AO="/portfolio/assets/hojin_video-C1LpzS2j.mp4",ky=[{id:1,kind:"개인·팀",title:"야미야기",content:"아이들의 상상력으로 만들어지는 동화 웹사이트",mainTab:"back",subTab:"django",tags:["Python","Django","PostgreSQL"],detail:{notion:"https://www.notion.so/teamsparta/IAM-8ad9729b3dfb42e3a25c72c22106a72a",notion_vedio:"https://teamsparta.notion.site/7a49bd323df7456ebd58e9bb32360a8d",blog:[],content:`
            아이들이 원하는 주제로 동화를 만들 수 있는 웹페이지입니다. 
            <br /> ChapGPT 로 주제에 기반한 동화를 생성하고,  
            <br /> Perspective API 로 사용자가 입력한 주제 및 생성된 동화의 폭력성을 검증합니다. 
            <br /> Deepl API 사용하여 생성된 동화를 번역하며, DALL-E API 로 동화 내용의 그림을 생성합니다.
            <br /><br /> 총 인원 6명이 참여했습니다.
            <br /> 저는 구글, 카카오톡, 네이버 소셜 로그인을 가장 크게 담당했고,
            <br /> 최근 조회한 목록, 북마크한 내서재, 내가 생성한 동화 목록을 모아보고
            <br /> 프로필 수정이 가능한 마이페이지를 담당했습니다.   
            `,image:[{type:"image",src:vO}],stack:{back:["Python","Django","DRF(Django REST Framework)","Oauth 2.0"],front:["DTL(Django Template Language)","JavaScript","CSS3"],database:["PostgreSQL"],ai:["ChatGPT API","DALL-E API","DeePL API","Perspective API"]}}},{id:2,kind:"개인·팀",title:"펫뭉",content:"애완동물 용품 쇼핑몰 RESTful API 서버",mainTab:"back",subTab:"fastapi",tags:["Python","FastAPI","MySQL"],detail:{github:"https://github.com/Pet-Mung/Back",blog:[],content:`
            프론트엔드 1명, 백엔드 1명으로 진행한 프로젝트로 저는 백엔드를 맡아 진행했습니다.
            <br/> FastAPI 를 활용하여 로그인, 유저/판매자 구분 회원가입, 상품 crud, 장바구니 및 결제처리를 구현한 사이트입니다.
            <br/> 배포도구로는 Render를 사용했고, DB 는 supabase 를 사용했습니다.
            <br/> Render 설정 조정하여 깃허브 머지 됐을 때 자동으로 빌드되게 설정했습니다.
            `,image:[{type:"image",src:_O}],stack:{back:["Python","FastAPI","Oauth 2.0"],database:["supabase","postgreSQL"],build:["Render"]}}},{id:3,kind:"개인·팀",title:"호진일보",content:"네이버 연애뉴스 모아보기 웹 사이트",mainTab:"front",subTab:"vue",tags:["Vue","Vite","JavaScript"],detail:{github:"https://github.com/HoJin-s/selenium_practice",blog:[],content:`
            매일 네이버 뉴스 연애 기사 랭킹 4위까지 가져오는 크롤링 프로젝트입니다. 
            <br/> 프론트엔드 1명, 백엔드 1명으로 진행한 프로젝트입니다.
            <br/> 이 프로젝트에서 저는 프론트엔드 개발을 맡았으며, 백엔드는 Django로 구현했습니다. 
            <br/> Django 템플릿을 Vue로 빌드한 페이지로 연동하여 프론트와 백엔드를 효과적으로 연결했습니다.
            `,video:AO,image:[{type:"image",src:xO},{type:"image",src:bO}],stack:{back:["Python","Django","DRF(Django REST Framework)","Selenium"],front:["Vue","Vite","JavaScript","CSS3"],database:["supabase","postgreSQL"],build:["Render"]}}},{id:4,kind:"개인·팀",title:"포트폴리오",content:"자기소개 및 프로젝트를 소개하는 사이트",mainTab:"front",subTab:"react",tags:["React","Vite","TypeScript"],detail:{github:"https://github.com/hjzheld/portfolio",blog:[],content:`
            리액트로 만든 프로젝트입니다.
            <br/> 혼자 진행한 프로젝트입니다.
            <br/> GitHub Actions 기반 CI/CD 파이프라인을 구축하여, 
            <br /> 머지 시 자동 빌드와 실서버 배포가 이루어지도록 배포 프로세스를 자동화했습니다.
            <br /> 자기 소개 및 그동안의 경력, 학력과 프로젝트 기록을 확인할 수 있습니다.
            <br /> 특히 경력에서 자세하게 어떤 업무를 맡았고, 어떤 성장으로 했는지 확인할 수 있습니다.
            `,image:[{type:"image",src:wO}],stack:{front:["React","Vite","TypeScript"],build:["Github"]}}},{id:5,kind:"개인·팀",title:"팔순잔치 초대장",content:"모바일 환경에 최적화된 팔순잔치 초대장 웹사이트",mainTab:"front",subTab:"vue",tags:["Vue","Vite","JavaScript"],detail:{site:"https://hjzheld.github.io/birthday/",github:"https://github.com/hjzheld/birthday",blog:[],content:`
            팔순잔치를 위해 직접 기획하고 제작한 모바일 초대장 웹사이트입니다.
            <br/> 행사 소개, 초대글, 날짜 및 시간, 장소와 주차 정보를 한 페이지에서 확인할 수 있도록 구성했습니다.
            <br/> 배경음악을 적용하고 사용자가 직접 음악을 재생하거나 중지할 수 있도록 기능을 구현했습니다.
            <br/> Intersection Observer를 활용하여 스크롤 위치에 따라 콘텐츠가 자연스럽게 나타나는 애니메이션을 구현했습니다.
            <br/> 네이버 지도와 카카오 지도를 연동하여 행사 장소와 주차장까지 바로 길찾기가 가능하도록 구현했습니다.
            <br/> 모바일 환경을 중심으로 반응형 UI를 구성하여 다양한 화면 크기에서도 자연스럽게 표시되도록 작업했습니다.
            <br/> GitHub Actions 기반 CI/CD를 구성하여 main 브랜치에 Push하면 자동으로 빌드 후 GitHub Pages에 배포되도록 구현했습니다.
            `,image:[{type:"image",src:SO}],stack:{front:["Vue","Vite","JavaScript","CSS3"],build:["GitHub Actions","GitHub Pages"]}}},{id:101,title:"교육 플랫폼 · 사용자와 관리자 흐름 구축",content:"프로젝트 설계·Git·환경 연결부터 사용자·관리자 화면과 공통 컴포넌트까지 구축",kind:"실무",mainTab:"front",subTab:"vue",tags:["Vue 3","프로젝트 설계","Git","공통 컴포넌트","REST API","반응형 UI"],detail:{content:"프로젝트 설계·Git·환경 연결부터 사용자·관리자 화면과 공통 컴포넌트까지 구축",image:[],stack:{},sections:[["프로젝트 설계와 개발 환경 구성","교육 플랫폼의 프로젝트 설계부터 Git 저장소 연결, 테스트 서버·운영 서버 연결을 직접 담당했습니다. 초기 라우팅·로그인 상태·API 연동 구조를 구성하고 사용자 사이트와 관리자 화면을 개발했습니다."],["사용자·관리자 기능 구현","로그인·회원가입·수강 신청·마이페이지와 관리자 기수·출석 관리를 담당했습니다. 기수 상태와 접수·얼리버드·강의 일정, 교시별 출석·지각·결석 및 입실·퇴실 시간을 다뤘습니다."],["공통 UI 설계와 구현","Figma 시안을 화면으로 구현하고 버튼·카드·모달 등 여러 화면에서 사용하는 공통 컴포넌트를 작업했습니다. 반복되는 UI와 동작을 재사용할 수 있도록 구성하고 공통 옵션·필터도 정리했습니다."],["상태와 데이터 처리","기수 상태와 날짜 조건을 함께 UI에 반영하고 API 응답을 화면 데이터 형태로 정리했습니다. 출석 상태와 실제 저장 시간을 함께 처리했습니다."],["배포 환경과 운영","테스트 서버와 운영 서버에 프로젝트를 연결하고 각 환경의 빌드·배포를 점검했습니다. PC·태블릿·모바일 반응형 화면을 구현했습니다."]]}},{id:102,title:"Nuxt 서비스 인수 · 인증·결제·권한 개선",content:"기존 코드를 분석하고 운영 기능과 신규 개발을 함께 이어간 경험",kind:"실무",mainTab:"front",subTab:"nuxt",tags:["Nuxt","Vue","인증","결제·권한","Docker · Nginx"],detail:{content:"기존 코드를 분석하고 운영 기능과 신규 개발을 함께 이어간 경험",image:[],stack:{},sections:[["배경과 역할","외주 개발 중이던 Nuxt 프로젝트를 인수해 코드·컴포넌트·API·상태 관리와 실행 구조를 분석했습니다. 기존 기능 유지와 신규 개발, QA와 배포를 담당했습니다."],["인증과 비즈니스 흐름","Access Token 만료 시 Refresh Token 재발급 후 기존 요청을 재처리하는 흐름을 구현했습니다. 패키지·구독·할인·결제 API와 결제 완료 이후 상태 처리를 연결했습니다."],["구조 개선","사용자 구독 상태와 권한 유효기간에 따라 페이지·기능 접근을 제어했습니다. 중복 코드와 UI를 공통 컴포넌트로 분리하고 공통 책임과 서비스별 정책 차이를 정리했습니다."],["운영과 검증 범위","Docker·Nginx 기반 빌드와 배포 버전을 관리하고 QA 과정의 오류를 분석했습니다. 동시 요청 제어나 장애 복구에 관해 확인되지 않은 구현 결과는 추가하지 않았습니다."]]}},{id:103,title:"가상자산 데이터 시각화 · 실시간 화면",content:"API 데이터 가공부터 차트와 반응형 화면까지 구현",kind:"실무",mainTab:"front",subTab:"vue",tags:["Vue · Nuxt","REST API","WebSocket","TradingView","ZingChart"],detail:{content:"API 데이터 가공부터 차트와 반응형 화면까지 구현",image:[],stack:{},sections:[["배경과 담당 범위","가상자산 시세·분석 데이터와 관리자 화면을 개발했습니다. TradingView·ZingChart로 차트 8종과 데이터 리스트 2종을 구현했습니다."],["데이터와 화면 연결","REST API 데이터를 화면 요구사항에 맞춰 가공하고 차트에 연결했습니다. 실무 서비스에서 WebSocket 데이터 수신과 화면 반영, 구매 조건·권한에 따른 접근 제어도 담당했습니다."],["사용 환경 대응","PC·모바일 반응형 UI, Vue I18n 기반 다국어 처리와 Android WebView 연동·디버깅을 경험했습니다."],["검증 범위와 개선 과제","구현 범위와 별개로 처리량·지연 시간·최적화율은 측정 자료가 없어 제시하지 않습니다. 실시간 연결 복구와 데이터 순서의 운영 지표는 추가로 정리할 과제입니다."]]}},{id:106,title:"Android WebView 서비스 · 알림·다국어·권한 UI",content:"앱 내 웹 화면의 알림 설정, 다국어와 구독·권한별 접근 제어 구현",kind:"실무",mainTab:"front",subTab:"vue",tags:["Android WebView","Vue I18n","알림 설정","접근 제어"],detail:{content:"앱 내 웹 화면의 알림 설정, 다국어와 구독·권한별 접근 제어 구현",image:[],stack:{},sections:[["담당 범위","Android WebView에서 사용하는 서비스의 웹 화면을 개발하고 앱 내 환경에서 연동·디버깅을 수행했습니다."],["핵심 구현","알림 활성화와 수신 항목 등록 기능을 개발했습니다. Vue I18n 기반 다국어 환경을 구성하고 구독 상태·사용자 권한에 따라 페이지와 기능 접근을 제어했습니다."],["웹과 앱 환경 대응","모바일 화면을 구현하고 Android WebView에서의 동작을 확인하며 오류를 분석했습니다. 이 사례의 담당 범위는 앱 내 웹 화면과 연동·디버깅이며, 네이티브 앱 전체 개발이나 스토어 출시를 수행한 경력으로 기재하지 않습니다."]]}},{id:104,title:"했냐옹 · 개인 일정과 Slack 알림",content:"Nuxt·TypeScript로 구현하고 실제 환경에서 검증한 일정 관리 서비스",kind:"개인",mainTab:"fullstack",subTab:"nuxt",tags:["Nuxt 4","Vue 3","TypeScript","Nitro","Neon PostgreSQL","Slack API"],detail:{content:"Nuxt·TypeScript로 구현하고 실제 환경에서 검증한 일정 관리 서비스",image:[{type:"image",src:TO}],stack:{front:["Nuxt 4","Vue 3","TypeScript"],back:["Nitro"],database:["Neon PostgreSQL"]},sections:[["문제와 구현 범위","여러 프로젝트와 개인 계획에 흩어진 일정·할 일을 한곳에서 관리하기 위해 만들었습니다. 일정·할 일 CRUD, 완료·프로젝트 보관·복원, 홈 요약·월간 캘린더, 계정 관리와 Slack OAuth·알림 예약을 구현했습니다. 팀원 초대·공유 권한은 구현하지 않았습니다."],["본인 역할과 AI 활용","기능 범위·화면 방향·우선순위를 정하고 외부 계정 설정, 배포와 실제 사용 확인을 직접 진행했습니다. ChatGPT는 기획·구조 검토에, IDE AI 도구는 화면·API·SQL 구현과 오류 분석·검사에 활용했습니다."],["문제 → 판단 → 해결 · 불확실한 알림","예약 결과가 불확실할 때 다시 예약하면 중복될 수 있어 상태를 보존하고 Slack 예약 목록과 재확인하도록 처리했습니다. 예약 접수나 시간 경과를 실제 수신 성공으로 판단하지 않았습니다."],["환경별 UI와 실제 수신 검증","특정 PC에서 언어·테마 선택이 닫히기만 하는 문제는 포커스 목적지가 null일 때 닫는 처리를 보완한 뒤 해당 PC의 실제 마우스로 확인했습니다. 수정 전 이벤트 순서는 기록되지 않아 원인 추정과 결과를 구분했습니다. Slack messages_tab_disabled 응답은 앱 설정 수정 후 테스트 DM·예약 메시지 실제 수신으로 검증했습니다."],["검증과 한계","저장 실패 시 입력을 보존하고 재시도의 프로젝트 중복 생성을 방지했습니다. 보관 조건은 서버에서도 확인하도록 보완했습니다. README에 기록된 모의 API 검사·타입·빌드 통과는 실제 DB 동시 요청·대량 데이터·Slack 장애 검증과 구분합니다."]],site:"https://haetnanyong.vercel.app/",github:"https://github.com/hjzheld/haetnanyong"}},{id:105,title:"Python 거래소 데이터 집계 · 운영 자동화",content:"날짜 구간과 거래소 데이터를 가공하고 외부 연동을 다룬 경험",kind:"자동화",mainTab:"back",subTab:"python",tags:["Python","REST API","Crontab","데이터 가공"],detail:{content:"날짜 구간과 거래소 데이터를 가공하고 외부 연동을 다룬 경험",image:[],stack:{},sections:[["담당 범위","거래소 데이터 조회·가공, 일별 정산 집계·보정과 외부 API 데이터 전송을 수행했습니다. 정기 작업 실행·로그 확인, Slack·Google Sheets 연계 자동화 경험이 있습니다."],["주간 집계 로직","OKX·BingX·DeepCoin·Binance·Gateio를 대상으로 한국 시간 기준 전주 월요일부터 일요일까지의 날짜 구간과 데이터 가공을 Python으로 처리했습니다."],["경험의 범위","서버 데이터 흐름을 이해하고 업무에 필요한 자동화를 수행한 보조 경험입니다. 주간 집계 운영 배포 여부·DB 연결 방식·장애 복구 완성도는 확인되지 않아 기재하지 않았습니다."]]}},{id:107,title:"운영 서비스 리뉴얼 · 권한·결제 구조 개선",content:"서비스 정책 변경에 맞춰 접근 제어와 결제 데이터 흐름을 재정비",kind:"실무",mainTab:"front",subTab:"nuxt",tags:["Nuxt","Refactoring","권한·결제","상태 관리"],detail:{content:"서비스 정책 변경에 맞춰 접근 제어와 결제 데이터 흐름을 재정비",image:[],stack:{},sections:[["배경과 담당 범위","운영 중인 서비스의 권한·결제 시스템을 변경된 정책에 맞춰 재검토하고 리뉴얼했습니다."],["접근 제어 재정비","사용자 구독 상태와 권한 유효기간에 따른 접근 제어를 정리했습니다. 페이지·기능의 이용 조건이 서비스 정책을 따르도록 구조를 변경했습니다."],["결제와 상태 흐름 개선","패키지·결제 시스템의 데이터 흐름과 상태 관리 구조를 변경했습니다. 복잡하게 연결된 권한·결제 로직과 컴포넌트 책임을 분리해 유지보수성을 개선했습니다."],["신규 개발과 다른 판단","기존 운영 코드와 정책의 연결을 분석한 뒤 변경 범위를 정했습니다. 신규 서비스 구축과 구분되는 기존 서비스 리뉴얼 경험이며, 별도로 측정하지 않은 성능·매출 개선 수치는 제시하지 않습니다."]]}},{id:108,title:"관리자 조직도 · 회원 관계 관리",content:"추천·조직 구조와 노드 탐색 기능 구현",kind:"실무",mainTab:"front",subTab:"vue",tags:["관리자 UI","조직도","데이터 관계"],detail:{content:"추천·조직 구조와 노드 탐색 기능 구현",image:[],stack:{},sections:[["담당 범위","회원 추천·조직 구조를 관리하는 관리자 기능을 개발했습니다."],["구현 내용","상위 회원 변경 시 하위 조직이 함께 이동하는 로직을 적용했습니다. 검색·선택 노드 강조·자동 확대 기능을 구현해 관리자가 조직 관계와 선택한 노드를 확인할 수 있도록 했습니다."]]}},{id:109,title:"서비스 컨버팅 · 공통 기능과 정책 분리",content:"기존 Nuxt 서비스를 새로운 서비스 정책에 맞춰 변환",kind:"실무",mainTab:"front",subTab:"nuxt",tags:["Nuxt","컴포넌트 재사용","정책 분리"],detail:{content:"기존 Nuxt 서비스를 새로운 서비스 정책에 맞춰 변환",image:[],stack:{},sections:[["담당 범위","기존 Nuxt 서비스 구조와 기능을 새로운 서비스 정책에 맞게 변환했습니다."],["구현 내용","공통 코드는 재사용하고 UI·권한·결제 정책의 차이는 분리했습니다. 두 서비스를 각각 유지보수할 수 있도록 구조를 구성했습니다."]]}},{id:110,title:"공통 컴포넌트 · 중복 코드 리팩터링",content:"반복 UI와 기능 책임을 정리해 화면 간 일관성 확보",kind:"실무",mainTab:"front",subTab:"vue",tags:["공통 UI","Refactoring","재사용"],detail:{content:"반복 UI와 기능 책임을 정리해 화면 간 일관성 확보",image:[],stack:{},sections:[["담당 범위","여러 프로젝트에서 사용하는 버튼·카드·모달 등의 공통 UI를 작업하고 운영 중인 화면의 중복 코드를 정리했습니다."],["구현 내용","유지보수가 어려운 구조를 개선하고 공통 컴포넌트의 책임과 재사용 범위를 정리했습니다. 여러 화면에 반복되는 UI와 동작을 공통으로 관리하도록 구성했습니다."]]}}],EO=[{title:"전체",type:"all"},{title:"프론트엔드",subTitle:[{title:"Vue",type:"vue",active:!1},{title:"React",type:"react",active:!1}],type:"front"},{title:"백엔드",subTitle:[{title:"Django",type:"django",active:!1},{title:"FastAPI",type:"fastapi",active:!1}],type:"back"},{title:"풀스택",type:"fullstack"}];de.registerPlugin(Ei);const CO=V.section`
  .collection-note { display:inline-block; color:var(--sage); font-family:var(--font-editorial); font-size:1.1rem; font-style:italic; margin-bottom:.75rem; }

  max-width:1200px; margin:2rem auto 4rem; padding:0 1rem;
  h2 { font-size:clamp(1.6rem,4vw,2.4rem); color:var(--gray-100); margin-bottom:1rem; letter-spacing:-.04em; }
  p { line-height:1.8; color:var(--gray-400); }
  nav { display:flex; gap:.5rem; flex-wrap:wrap; margin:2rem 0 1rem; }
  button { cursor:pointer; padding:.65rem 1.15rem; border:1px solid #dfe5d5; border-radius:50px; color:#64736b; background:rgba(255, 251, 253,.5); transition:background .2s; }
  button[aria-pressed=true] { background:var(--clay-mint); border-color:#afc6aa; color:var(--ink); box-shadow:inset 2px 2px 4px rgba(255,255,255,.5); }
  .count { margin-bottom:1.5rem; font-size:.8rem; letter-spacing:.04em; }
`,RO=V.div`
  display:grid; grid-template-columns:repeat(2,minmax(0,1fr)); gap:2.75rem 2.25rem;
  @media(max-width:700px) { grid-template-columns:1fr; gap:1.25rem; }
`,MO=V(ia)`
  .card-title { display:flex; align-items:center; justify-content:space-between; gap:.7rem; }
  && { padding:12px; border:var(--clay-border); border-radius:32px; background:var(--surface-neutral); box-shadow:var(--clay-shadow); }
  &&:nth-child(4n+2) { background:#e1ece5; }
  &&:nth-child(4n+3) { background:#f5ded4; }
  &&:nth-child(4n+4) { background:#dfedf0; }
  && .visual { border-radius:23px; background:#d4e4da; height:230px; box-shadow:inset 3px 3px 8px rgba(94,114,98,.10); }
  && .body { padding:1.5rem .8rem .7rem; }
  && .identity { border-radius:23px; background:transparent; width:100%; }
  && .identity strong { background:var(--surface-neutral); border:var(--clay-border); border-radius:30px; width:82px; height:82px; padding:0; display:grid; place-items:center; box-shadow:var(--clay-shadow); font-family:var(--font-en); font-size:2rem; }
  && .tag { background:rgba(255,250,240,.7); color:#596e61; box-shadow:inset 1px 1px 2px rgba(255,255,255,.8); }
  && .arrow { border:0; background:var(--clay-mint); box-shadow:2px 3px 6px rgba(90,96,78,.12),inset 1px 1px 2px rgba(255,255,255,.8); }

  display:flex; flex-direction:column; min-width:0; overflow:hidden; border:1px solid #dfe5d5;
  border-radius:28px; background:rgba(255, 251, 253,.75); box-shadow:0 10px 35px rgba(78, 81, 85,.04);
  .visual { height:260px; position:relative; overflow:hidden; background:var(--jet-stream); border:0; border-radius:25px 25px 60px 0; }
  .visual::after { display:none; content:''; position:absolute; top:0; right:12px; width:62px; height:23px; background:rgba(220, 236, 248,.7); transform:rotate(7deg); pointer-events:none; }
  &:nth-child(4n+1) { background:#e4eddd; }
  &:nth-child(4n+2) { background:#f7edda; }
  &:nth-child(4n+3) { background:#f7e4dc; }
  &:nth-child(4n+4) { background:#e3eef0; }
  &:nth-child(3n+2) .visual { border-color:#f5e6c8; }

  &:nth-child(3n) .visual { border-color:#e0ead9; }

  img { width:100%; height:100%; object-fit:cover; object-position:top; transition:transform .4s; }
  .identity { border-radius:50% 50% 25% 25%; margin:0 auto; width:90%; height:100%; display:flex; flex-direction:column; justify-content:center; align-items:center; gap:1rem; background:var(--mauve); color:var(--ink); }
  .identity strong { font-family:var(--font-editorial); font-size:3rem; letter-spacing:-.06em; padding:.2rem 1rem; background:var(--lemon-paper); border:1px solid var(--vanilla); }
  .identity span { font-size:.7rem; letter-spacing:.2em; }
  .body { padding:1.6rem; display:flex; flex-direction:column; flex:1; }
  .kind { color:#64736b; font-size:.73rem; letter-spacing:.06em; }
  h3 { color:#3e5149; font-size:1.35rem; margin:.7rem 0; line-height:1.5; letter-spacing:-.035em; }
  .tags { display:flex; flex-wrap:wrap; gap:.4rem; margin:1.25rem 0; }
  .tag { padding:.3rem .6rem; border-radius:50px; background:#e3eef0; color:#64736b; font-size:.72rem; }
  .action { display:flex; justify-content:space-between; align-items:center; padding-top:1rem; margin-top:auto; border-top:1px solid #e7e3d7; color:#3e5149; font-size:.8rem; font-weight:600; }
  .arrow { display:grid; place-items:center; width:30px; height:30px; border:1px solid #dfe5d5; border-radius:50%; }
  &:hover { border-color:#b68172; }
  &:hover img { transform:scale(1.025); }
  @media(max-width:700px) { .visual { height:200px; } .body { padding:1.25rem; } }
`,DO=ky.filter(n=>n.kind==="개인"||n.kind==="개인·팀").sort((n,e)=>+(e.mainTab==="fullstack")-+(n.mainTab==="fullstack")).map(n=>{var e;return{...n,summary:n.content,image:(e=n.detail.image.find(r=>r.type==="image"))==null?void 0:e.src}});function G5({compact:n=!1}){const[e,r]=z.useState("all"),a=z.useRef(null);Ei(()=>{window.matchMedia("(prefers-reduced-motion: reduce)").matches||de.fromTo(".body",{opacity:0,y:14},{opacity:1,y:0,duration:.55,stagger:.06,ease:"power2.out",clearProps:"opacity,transform"})},{scope:a,dependencies:[e],revertOnUpdate:!0});const o=ky.filter(c=>c.kind==="실무").slice(0,3).map(c=>{var f;return{...c,summary:c.content,image:(f=c.detail.image.find(h=>h.type==="image"))==null?void 0:f.src}}),u=n?o:DO.filter(c=>e==="all"||c.mainTab===e);return b.jsxs(CO,{ref:a,"aria-label":n?"대표 실무 경험":"포트폴리오 작품",children:[b.jsx("h2",{children:n?"서비스를 만들고 개선한 경험":"직접 만들며 쌓아온 경험"}),b.jsx("p",{children:n?"회사에서 담당한 서비스 개발과 문제 해결 사례입니다.":"개인 서비스와 팀 프로젝트의 구현 과정, 기술 선택과 결과를 소개합니다."}),!n&&b.jsx("nav",{className:"project-category","aria-label":"포트폴리오 분야",children:EO.map(c=>b.jsx("button",{type:"button","aria-pressed":e===c.type,onClick:()=>r(c.type),children:c.title},c.type))}),b.jsxs("p",{className:"count","aria-live":"polite",children:[u.length,"개 프로젝트"]}),b.jsx(RO,{children:u.map((c,f)=>b.jsxs(MO,{className:"project-card",to:n?`/personal/work/${c.id}`:`/project/${c.id}`,children:[b.jsx("div",{className:"visual",children:c.image?b.jsx("img",{src:c.image,alt:`${c.title} 실제 프로젝트 화면`,loading:"lazy"}):b.jsxs("div",{className:"identity",children:[b.jsx(Us,{tone:f%3===0?"mint":f%3===1?"peach":"blue",size:88,round:f%2===0}),b.jsx("span",{children:c.tags.slice(0,3).join(" / ")})]})}),b.jsxs("div",{className:"body",children:[b.jsxs("div",{className:"card-title",children:[b.jsx("h3",{children:c.title}),!n&&f%3===0&&b.jsx(Us,{tone:"peach",size:34})]}),b.jsx("p",{children:c.summary}),b.jsx("div",{className:"tags",children:c.tags.map(h=>b.jsx("span",{className:"tag",children:h},h))}),b.jsxs("div",{className:"action",children:[n?"담당 역할과 구현 과정":"프로젝트 살펴보기",b.jsx("span",{className:"arrow","aria-hidden":"true",children:"↗"})]})]})]},c.id))}),n&&b.jsx(ia,{to:"/personal",style:{display:"inline-block",marginTop:"1.5rem",color:"#3e5149",fontWeight:600},children:"경력과 전체 실무 경험 보기 →"})]})}V(De.button)`
  padding: 10px 30px;
  border-radius: 50px;
  border: 3px solid;
  border-color: ${({active:n})=>n?"var(--primary-color)":"var(--gray-200)"};
  background: ${({active:n})=>n?"var(--clay-mint)":"var(--surface-neutral)"};
  color: ${({active:n})=>n?"var(--ink)":"var(--gray-100)"};
  font-weight: 400;
  font-size: 1rem;
  white-space: nowrap;
  transition: background .25s ease, border-color .25s ease, box-shadow .25s ease;
  
  @media (max-width: 768px) {
    padding: 8px 24px;
    font-size: 0.9rem;
    border-width: 2.5px;
  }
  
  @media (max-width: 480px) {
    padding: 6px 18px;
    font-size: 0.85rem;
    border-width: 2px;
  }
  
  @media (max-width: 360px) {
    padding: 5px 14px;
    font-size: 0.8rem;
  }
`;V(De.button)`
  width: fit-content;
  margin-top: 1rem;
  padding: 0.25rem 0.5rem;
  border-bottom: ${({active:n})=>n?"2px solid":"none"};
  color: ${({active:n})=>n?"var(--primary-color)":"var(--gray-100)"};
  border-color: var(--primary-color);
  font-weight: ${({active:n})=>n?"600":"400"};
  font-size: 1rem;
  white-space: nowrap;
  transition: background .25s ease, border-color .25s ease, box-shadow .25s ease;
  
  @media (max-width: 768px) {
    font-size: 0.9rem;
    margin-top: 0.75rem;
    padding: 0.2rem 0.4rem;
    border-bottom-width: ${({active:n})=>n?"1.5px":"none"};
  }
  
  @media (max-width: 480px) {
    font-size: 0.85rem;
    margin-top: 0.5rem;
    padding: 0.15rem 0.3rem;
    border-bottom-width: ${({active:n})=>n?"1px":"none"};
  }
  
  @media (max-width: 360px) {
    font-size: 0.8rem;
  }
`;V(De.button)`
  margin: 1rem;
  padding: 10px 30px;
  border-radius: 50px;
  border: 3px solid;
  border-color: var(--gray-200);
  background: transparent;
  color: var(--gray-100);
  font-weight: 400;
  font-size: 1rem;
  white-space: nowrap;
  transition: background .25s ease, border-color .25s ease, box-shadow .25s ease;
  
  @media (max-width: 768px) {
    margin: 0.75rem;
    padding: 8px 24px;
    font-size: 0.9rem;
    border-width: 2.5px;
  }
  
  @media (max-width: 480px) {
    margin: 0.5rem;
    padding: 6px 20px;
    font-size: 0.85rem;
    border-width: 2px;
  }
  
  @media (max-width: 360px) {
    margin: 0.5rem;
    padding: 5px 16px;
    font-size: 0.8rem;
  }
`;const jO=V(De.button)`
  padding: 10px 30px;
  border-radius: 15px;
  border:var(--clay-border);
  position: relative;
  overflow: hidden;
  background:var(--clay-mint);
  background-size: 200% auto;
  box-shadow:var(--clay-shadow);
  transition: background .25s ease, border-color .25s ease, box-shadow .25s ease;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 251, 253, 0.3), transparent);
    transition: left 0.5s ease;
  }
  
  &:hover {
    box-shadow: 0 8px 20px rgba(185, 130, 146, 0.18);
    
    &::before {
      left: 100%;
    }
  }
`,kO=V(De.span)`
  font-size: 1rem;
  font-weight: 600;
  color: var(--coal);
  display: inline-block;
  position: relative;
  z-index: 1;
  text-shadow: none;
`,OO=({children:n,onClick:e,className:r})=>b.jsx(jO,{className:r,onClick:e,whileHover:{scale:1.025,y:-2,boxShadow:"0 8px 16px rgba(84,115,98,.14)",transition:{duration:.3,ease:"easeOut"}},whileTap:{scale:.97,y:0},children:b.jsx(kO,{children:n})}),ku={GradientBtn:OO},Oy=V.div`
    width: 100%;
    height: 100%;
    min-height: 100vh;
    margin: 0 auto;
    padding: 1.2rem 2rem;
    box-sizing: border-box;
    
    @media (max-width: 1200px) {
        padding: 1.2rem 1.5rem;
    }
    
    @media (max-width: 768px) {
        padding: 1rem 1rem;
    }
    
    @media (max-width: 480px) {
        padding: 0.875rem 0.75rem;
    }
    
    @media (max-width: 360px) {
        padding: 0.75rem 0.5rem;
    }
`,zO=V.div`
 display:grid; grid-template-columns:repeat(2,minmax(0,1fr)); gap:2rem;
 h2 { grid-column:1/-1; font-size:2rem; color:var(--gray-100); }
 h3 { display:flex; justify-content:space-between; align-items:center; gap:.7rem; color:var(--gray-100); margin-bottom:.75rem; }
 p { color:var(--gray-400); line-height:1.9; }
 section { border:var(--clay-border); border-radius:26px; padding:1.6rem; background:var(--surface-neutral); box-shadow:var(--clay-shadow); }
 section:nth-of-type(3n+2) { background:#e1ece5; }
 section:nth-of-type(3n) { background:#dfedf0; }
 @media(max-width:640px) { grid-template-columns:1fr; }
`,NO=[["실무 프론트엔드","Vue·Nuxt·JavaScript·SCSS","사용자·관리자 서비스, 인증·결제·권한, 반응형 UI와 공통 컴포넌트"],["API와 데이터","REST API·WebSocket·TradingView·ZingChart","API 응답 가공, 실시간 데이터 화면 반영, 금융 데이터 차트"],["개인 프로젝트에서 확장","TypeScript·Nuxt 4·Nitro·Neon PostgreSQL","했냐옹의 화면·서버·DB와 Slack OAuth·알림 연동. React·TypeScript는 이 포트폴리오에 사용"],["백엔드와 운영 경험","Python·Django·FastAPI / Docker·Nginx·Crontab","Django·FastAPI는 개인·팀 프로젝트, Python 데이터 가공·배치와 Docker·Nginx는 실무 경험"],["협업과 검증","Figma·Git·GitHub·QA","디자인 구현, 요구사항 조율, 일정·업무 분배, 오류 재현과 배포 확인"]],PO=()=>b.jsxs(zO,{children:[b.jsx("h2",{children:"기술과 사용 맥락"}),NO.map(([n,e,r],a)=>b.jsxs("section",{children:[b.jsxs("h3",{children:[n,a%2===0&&b.jsx(Us,{tone:a===0?"mint":"blue",size:32})]}),b.jsx("p",{children:b.jsx("strong",{children:e})}),b.jsx("p",{children:r})]},n))]}),LO=V(De.button)`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    padding: 0;
    background: transparent;
    border: 2px solid rgba(133, 129, 133, 0.3);
    border-radius: 12px;
    transition: all 0.3s ease;
    position: relative;
    margin-right: 1rem;
    flex-shrink: 0;
    
    &::before {
        content: '';
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%) rotate(45deg);
        width: 10px;
        height: 10px;
        border-left: 2.5px solid var(--primary-color);
        border-bottom: 2.5px solid var(--primary-color);
        transition: all 0.3s ease;
    }
    
    &:hover {
        background: rgba(133, 129, 133, 0.1);
        border-color: var(--primary-color);
        transform: translateX(-4px);
        
        &::before {
            transform: translate(-60%, -50%) rotate(45deg);
        }
    }
    
    &:active {
        scale: 0.95;
    }
    
    @media (max-width: 768px) {
        width: 36px;
        height: 36px;
        margin-right: 0.75rem;
        border-radius: 10px;
        border-width: 1.5px;
        
        &::before {
            width: 8px;
            height: 8px;
            border-width: 2px;
        }
    }
    
    @media (max-width: 480px) {
        width: 32px;
        height: 32px;
        margin-right: 0.5rem;
        border-radius: 8px;
        border-width: 1.5px;
        
        &::before {
            width: 7px;
            height: 7px;
            border-width: 2px;
        }
    }
`,BO=V.h1`
    font-size: 2rem;
    font-weight: 600;
    margin: 0;
    color: var(--gray-100);
    line-height: 1.4;
    
    @media (max-width: 1200px) {
        font-size: 1.75rem;
    }
    
    @media (max-width: 768px) {
        font-size: 1.5rem;
    }
    
    @media (max-width: 480px) {
        font-size: 1.25rem;
    }
`,VO=V.div`
    width: 100%;
    padding-top: ${({page:n})=>n=="main"?"5rem":"0px"};
    padding-bottom: ${({page:n})=>n=="main"?"0px":"2rem"};
    font-size: ${({page:n})=>n=="main"?"3rem":"2rem"};
    font-weight: 600;
    display: flex;
    align-items: center;
    justify-content: ${({page:n})=>n=="main"?"center":"start"};
    padding-left: ${({page:n})=>n=="main"?"0px":"5rem"};
    box-sizing: border-box;
    
    @media (max-width: 1200px) {
        padding-top: ${({page:n})=>n=="main"?"4rem":"0px"};
        padding-bottom: ${({page:n})=>n=="main"?"0px":"1.75rem"};
        font-size: ${({page:n})=>n=="main"?"2.5rem":"1.75rem"};
        padding-left: ${({page:n})=>n=="main"?"0px":"4rem"};
    }
    
    @media (max-width: 768px) {
        padding-top: ${({page:n})=>n=="main"?"3rem":"0px"};
        padding-bottom: ${({page:n})=>n=="main"?"0px":"1.5rem"};
        font-size: ${({page:n})=>n=="main"?"2rem":"1.5rem"};
        padding-left: ${({page:n})=>n=="main"?"0px":"2rem"};
    }
    
    @media (max-width: 480px) {
        padding-top: ${({page:n})=>n=="main"?"2.5rem":"0px"};
        padding-bottom: ${({page:n})=>n=="main"?"0px":"1.25rem"};
        font-size: ${({page:n})=>n=="main"?"1.75rem":"1.25rem"};
        padding-left: ${({page:n})=>n=="main"?"0px":"1rem"};
    }
    
    @media (max-width: 360px) {
        font-size: ${({page:n})=>n=="main"?"1.5rem":"1.1rem"};
        padding-left: ${({page:n})=>n=="main"?"0px":"0.75rem"};
    }
`,UO=({title:n,page:e})=>{const r=Wa();return b.jsx(VO,{page:e,children:e==="detail"?b.jsxs(b.Fragment,{children:[b.jsx(LO,{onClick:()=>r(-1),whileTap:{scale:.95},"aria-label":"뒤로가기"}),b.jsx(BO,{children:n})]}):n})},HO=V.div`
    width: 100%;
    font-size: ${({page:n})=>n=="main"?"3rem":"2rem"};
    font-weight: 600;
    display: flex;
    margin-top: 1em;
    justify-content: center;
    box-sizing: border-box;
    
    @media (max-width: 1200px) {
        font-size: ${({page:n})=>n=="main"?"2.5rem":"1.75rem"};
        margin-top: 0.875em;
    }
    
    @media (max-width: 768px) {
        font-size: ${({page:n})=>n=="main"?"2rem":"1.5rem"};
        margin-top: 0.75em;
    }
    
    @media (max-width: 480px) {
        font-size: ${({page:n})=>n=="main"?"1.75rem":"1.25rem"};
        margin-top: 0.625em;
    }
    
    @media (max-width: 360px) {
        font-size: ${({page:n})=>n=="main"?"1.5rem":"1.1rem"};
    }
`,YO=({title:n})=>b.jsx(HO,{children:n}),GO=V(De.div)`
    display: flex;
    justify-content: center;
    gap: 3rem;
    width: 100%;
    max-width: 1000px;
    margin: 3rem auto;
    padding: 0 2rem;
    
    @media (max-width: 768px) {
        padding: 0 1rem;
        gap: 1rem;
        flex-direction: column;
    }
`,XO=V(De.div)`
    background:var(--surface-neutral); border:var(--clay-border); box-shadow:var(--clay-shadow);

    padding: 2.5rem;
    border-radius: 20px;
    color: var(--gray-100);
    display: flex;
    flex-direction: column;
    gap: 1rem;
    position: relative;
    overflow: hidden;
`,qO=V(De.div)`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    border-bottom: 2px solid rgba(133, 129, 133, 0.3);
    padding-bottom: 1rem;
`,FO=V(De.h3)`
    font-size: 1.8rem;
    font-weight: 700;
    margin: 0;
    color: var(--gray-100);

    @media (max-width: 768px) {
        font-size: 1.4rem;
    } 

    @media (max-width: 480px) {
        font-size: 1.2rem;
    }
`,$O=V(De.h4)`
    font-size: 1rem;
    font-weight: 500;
    margin: 0;
    color: var(--gray-400);


    @media (max-width: 480px) {
        font-size: 0.8rem;
    }
`,KO=V(De.p)`
    font-size: 1.1rem;
    font-weight: 500;
    margin: 0;
    color: var(--gray-100);
    padding-top: 0.5rem;


    @media (max-width: 480px) {
        font-size: 1rem;
    }
`,QO=()=>{const n=[{id:1,title:"경동대학교",date:"2016 ~ 2020",content:"치기공학과"},{id:2,title:"호서고등학교",date:"2013 ~ 2016"}],e={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.2,delayChildren:.1}}},r={hidden:{opacity:0,y:50,scale:.95},visible:{opacity:1,y:0,scale:1,transition:{duration:.5,ease:"easeOut"}}},a={hidden:{opacity:0,y:-10},visible:{opacity:1,y:0,transition:{duration:.3,delay:.2}}};return b.jsxs("div",{children:[b.jsx(YO,{title:"학력"}),b.jsx(GO,{variants:e,initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.2},children:n.map(o=>b.jsxs(XO,{variants:r,children:[b.jsxs(qO,{variants:a,children:[b.jsx(FO,{children:o.title}),b.jsx($O,{children:o.date})]}),o.content&&b.jsx(KO,{variants:a,children:o.content})]},o.id))})]})};de.registerPlugin(ze,Ei);const IO=V(Oy)`
  width: 100%;

  padding: 0 1.5rem 6rem;

  overflow-x: hidden;

  @media (max-width: 768px) {
    padding: 0 1rem 4rem;
  }

  @media (max-width: 480px) {
    padding: 0 0.875rem 3rem;
  }
`,ZO=V.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
`,WO=V.section`
  position:relative; isolation:isolate; width:100%; min-height:0;
  display:flex; align-items:center; padding:4rem 1rem 3.5rem;
  &::before, &::after { content:''; position:absolute; z-index:-1; pointer-events:none; }
  &::before {
    width:440px; height:360px; left:7%; top:22%;
    background:var(--pastel-green); opacity:.35;
    border-radius:48% 52% 60% 40% / 54% 45% 55% 46%; transform:rotate(-15deg);
  }
  &::after {
    width:390px; height:360px; right:7%; top:12%;
    background:var(--pastel-pink); opacity:.3;
    border-radius:57% 43% 42% 58% / 46% 58% 42% 54%; transform:rotate(12deg);
  }
  @media(max-width:768px) {
    min-height:580px; padding:4rem 0 4.5rem;
    &::before { width:260px; height:300px; left:-45px; top:25%; }
    &::after { width:240px; height:260px; right:-40px; top:15%; }
  }

`,JO=V.div`
  width:100%; display:flex; justify-content:center; position:relative;

`,e6=V.div`
  width:100%; max-width:900px; display:flex; flex-direction:column;
  align-items:center; text-align:center; gap:1.5rem;
  @media(max-width:768px) { gap:1.25rem; }

`,t6=V.div`
  position: relative;

  width: 100%;
`,n6=V.h1`
  width: 100%;

  color: var(--gray-100);

  font-size: clamp(3rem, 5.25vw, 5rem);

  line-height: 1.12;

  letter-spacing: -0.055em;

  font-weight: 700;

  word-break: keep-all;

  @media (max-width: 1024px) {
    max-width: 850px;

    font-size: clamp(
      3.1rem,
      7vw,
      5rem
    );
  }

  @media (max-width: 768px) {
    font-size: clamp(
      2.6rem,
      9vw,
      4.2rem
    );

    line-height: 1.15;
  }

  @media (max-width: 480px) {
    font-size: clamp(
      2.15rem,
      10vw,
      3.2rem
    );

    line-height: 1.18;

    letter-spacing: -0.045em;
  }
`,i6=V.span`
  display: block;

  overflow: hidden;

  /*
   * GSAP으로 위아래 움직일 때
   * 글자가 잘리지 않도록 여유
   */
  padding-top: 0.13em;
  padding-bottom: 0.13em;

  margin-top: -0.13em;
  margin-bottom: -0.13em;

  .hero-char {
    position: relative;

    display: inline-block;

    transform-origin: 50% 100%;

    will-change:
      transform,
      opacity;
  }

  .accent-char {
    color: var(--primary-color);
  }
`,Fw=({text:n,floatIndexes:e=[],accentIndexes:r=[]})=>b.jsx(i6,{children:[...n].map((a,o)=>{const u=e.includes(o),c=r.includes(o);return b.jsx("span",{className:["hero-char",u?"idle-char":"",c?"accent-char":""].filter(Boolean).join(" "),children:a===" "?" ":a},`${a}-${o}`)})}),r6=V.p`
  width: 100%;
  max-width: 590px;

  color: var(--gray-400);

  font-size: 1rem;

  line-height: 1.85;

  word-break: keep-all;

  strong {
    color: var(--gray-100);

    font-weight: 500;
  }

  @media (max-width: 1024px) {
    max-width: 700px;
  }

  @media (max-width: 768px) {
    max-width: 620px;

    font-size: 0.95rem;

    line-height: 1.8;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;

    line-height: 1.75;

    br {
      display: none;
    }
  }
`,a6=V.div`
  justify-content:center;
  display: flex;
  align-items: center;

  flex-wrap: wrap;

  gap: 0.65rem 1rem;

  width: 100%;
`,nd=V.div`
  display: flex;
  align-items: center;

  gap: 0.45rem;

  color: var(--gray-400);

  font-family: var(--font-en);

  font-size: 0.75rem;

  white-space: nowrap;

  &::before {
    content: "";

    width: 5px;
    height: 5px;

    flex-shrink: 0;

    border-radius: 50%;

    background: var(--primary-color);
  }

  @media (max-width: 480px) {
    font-size: 0.68rem;

    gap: 0.35rem;
  }
`,s6=V.div`
  .mag-zone:nth-child(2) button { background:var(--clay-blue); }

  justify-content:center;
  display: flex;
  align-items: center;

  flex-wrap: wrap;

  gap: 1rem;

  margin-top: 0.35rem;

  @media (max-width: 480px) {
    width: 100%;

    flex-direction: column;

    align-items: stretch;

    gap: 0.75rem;
  }
`,id=V.div`
  display: inline-flex;

  align-items: center;
  justify-content: center;

  padding: 1.4rem;

  margin: -1.4rem;

  @media (max-width: 480px) {
    width: 100%;

    padding: 0;
    margin: 0;
  }
`,rd=V.div`
  display: inline-flex;

  align-items: center;
  justify-content: center;

  will-change: transform;

  @media (max-width: 480px) {
    width: 100%;

    button {
      width: 100%;
    }
  }
`,ad=V.span`
  display: inline-block;

  pointer-events: none;

  will-change: transform;
`,sd=V.section`
  position: relative;

  width: 100%;

  padding: 6rem 0;

  @media (max-width: 1024px) {
    padding: 5rem 0;
  }

  @media (max-width: 768px) {
    padding: 4rem 0;
  }

  @media (max-width: 480px) {
    padding: 3rem 0 0;
  }
`,od=V.div`
  width: 100%;
  height: 1px;

  margin-bottom: 4.5rem;

  background: linear-gradient(
    90deg,
    transparent,
    rgba(249, 220, 229,
      0.42
    ),
    transparent
  );

  transform-origin: left;

  @media (max-width: 768px) {
    margin-bottom: 3rem;
  }

  @media (max-width: 480px) {
    margin-bottom: 2.5rem;
  }
`,o6=V.div`
  display: grid;

  grid-template-columns:
    minmax(0, 1fr)
    minmax(280px, 430px);

  align-items: end;

  gap: 3rem;

  margin-bottom: 3rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;

    gap: 1rem;

    margin-bottom: 2rem;
  }
`,l6=V.div`
  display: flex;
  flex-direction: column;

  gap: 0.6rem;
`,u6=V.h2`
  color: var(--gray-100);

  font-size: clamp(
    2rem,
    4vw,
    3.1rem
  );

  line-height: 1.2;

  letter-spacing: -0.045em;

  word-break: keep-all;

  @media (max-width: 480px) {
    font-size: 1.8rem;
  }
`,c6=V.p`
  color: var(--gray-400);

  font-size: 0.93rem;

  line-height: 1.75;

  word-break: keep-all;

  @media (max-width: 480px) {
    font-size: 0.86rem;
  }
`,f6=V.div`
  display: grid;

  grid-template-columns:
    repeat(
      3,
      minmax(0, 1fr)
    );

  gap: 1.25rem;

  @media (max-width: 900px) {
    grid-template-columns:
      repeat(
        2,
        minmax(0, 1fr)
      );

    /*
     * 세 번째 카드는
     * 태블릿에서 한 줄 전체 사용
     */
    & > :last-child {
      grid-column: 1 / -1;
    }
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;

    & > :last-child {
      grid-column: auto;
    }
  }
`,o0=V.div`
  &&:nth-child(2) { background:var(--clay-mint); }
  &&:nth-child(3) { background:var(--clay-blue); }

  && { border:var(--clay-border); border-radius:30px; background:var(--clay-cream); box-shadow:var(--clay-shadow); backdrop-filter:none; }

  position: relative;

  min-height: 150px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  gap: 2rem;

  padding: 1.8rem;

  overflow: hidden;

  border-radius: 22px;

  border:
    1px solid
    rgba(133, 129, 133,
      0.13
    );

  background: linear-gradient(
    150deg,
    rgba(249, 220, 229,
      0.58
    ),
    rgba(246, 237, 243,
      0.9
    )
  );

  box-shadow:
    var(--box-shadow);

  transition:
    transform 0.25s ease,
    box-shadow 0.25s ease;

  &::after {
    content: "";

    position: absolute;

    width: 110px;
    height: 110px;

    right: -40px;
    top: -40px;

    border-radius: 50%;

    background:
      rgba(255, 251, 253,
        0.25
      );
  }

  &:hover {
    transform:
      translateY(-6px);

    box-shadow:
      0 10px 25px
      rgba(133, 129, 133,
        0.2
      );
  }

  @media (max-width: 768px) {
    min-height: 220px;

    padding: 1.6rem;
  }

  @media (max-width: 480px) {
    min-height: 200px;

    padding: 1.4rem;

    border-radius: 18px;
  }
`,l0=V.div`
  position: relative;
  z-index: 2;

  h3 {
    margin-bottom: 0.65rem;

    color: var(--gray-100);

    font-size: 1.4rem;

    letter-spacing: -0.03em;
  }

  p {
    color: var(--gray-400);

    font-size: 0.88rem;

    line-height: 1.7;

    word-break: keep-all;
  }

  @media (max-width: 480px) {
    h3 {
      font-size: 1.25rem;
    }

    p {
      font-size: 0.84rem;
    }
  }
`,$w=V.div`
  width: 100%;

  padding: 1rem 0;

  overflow: hidden;

  border-radius: 26px;

  @media (max-width: 768px) {
    border-radius: 20px;
  }

  @media (max-width: 480px) {
    padding: 0;
  }
`,Kw=V.div`
  display: flex;

  align-items: flex-end;
  justify-content: space-between;

  gap: 2rem;

  margin-bottom: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;

    align-items: flex-start;

    gap: 0.7rem;
  }
`,Qw=V.p`
  max-width: 440px;

  color: var(--gray-400);

  font-size: 0.9rem;

  line-height: 1.7;

  word-break: keep-all;

  @media (max-width: 480px) {
    font-size: 0.84rem;
  }
`,d6=V.div`
  && { border:var(--clay-border); border-radius:30px; background:var(--clay-cream); box-shadow:var(--clay-shadow); backdrop-filter:none; }

  position: relative;

  width: 100%;

  display: grid;

  grid-template-columns:
    minmax(0, 1fr)
    auto;

  align-items: center;

  gap: 3rem;

  padding: 3.5rem;

  overflow: hidden;

  border-radius: 28px;

  background: linear-gradient(
    135deg,
    rgba(249, 220, 229,
      0.92
    ),
    rgba(220, 236, 248,
      0.86
    )
  );

  box-shadow: var(--box-shadow);

  &::after {
    content: "";

    position: absolute;

    width: 240px;
    height: 240px;

    right: -80px;
    top: -100px;

    border-radius: 50%;

    background:
      rgba(255, 251, 253,
        0.2
      );
  }

  @media (max-width: 850px) {
    grid-template-columns: 1fr;

    gap: 2rem;

    padding: 3rem 2.5rem;
  }

  @media (max-width: 600px) {
    padding: 2.2rem 1.6rem;

    border-radius: 22px;
  }

  @media (max-width: 480px) {
    padding: 1.8rem 1.3rem;

    border-radius: 18px;
  }
`,h6=V.div`
  position: relative;
  z-index: 2;

  h2 {
    max-width: 660px;

    margin-bottom: 0.8rem;

    color: var(--gray-100);

    font-size: clamp(
      1.8rem,
      4vw,
      3rem
    );

    line-height: 1.2;

    letter-spacing: -0.045em;

    word-break: keep-all;
  }

  p {
    max-width: 560px;

    color: var(--gray-400);

    font-size: 0.9rem;

    line-height: 1.75;

    word-break: keep-all;
  }

  @media (max-width: 480px) {
    h2 {
      font-size: 1.65rem;
    }

    p {
      font-size: 0.84rem;
    }
  }
`,p6=V.div`
  button {
    background: var(--coal);
    border: 1px solid rgba(249, 220, 229,.25);
    box-shadow: 0 4px 12px rgba(78,81,85,.12);
  }
  button span { color: var(--mauve); text-shadow: none; }
  button:hover { background: #59575c; }

  position: relative;
  z-index: 2;

  display: flex;
  flex-direction: column;
  align-items: flex-end;

  gap: 0.8rem;

  min-width: 170px;

  @media (max-width: 850px) {
    flex-direction: row;

    min-width: 0;
  }

  @media (max-width: 480px) {
    width: 100%;

    flex-direction: column;

    button {
      width: 100%;
    }
  }
`,m6=()=>{const n=Wa(),e=z.useRef(null);return Ei(()=>{if(window.matchMedia("(prefers-reduced-motion: reduce)").matches)return;de.set(".hero-char",{transformOrigin:"50% 100%"});const a=de.timeline();a.to({},{duration:.4}),a.fromTo(".hero-char",{opacity:0,yPercent:120,rotate:5,scaleY:.9},{opacity:1,yPercent:0,rotate:0,scaleY:1,duration:.7,stagger:{each:.04,from:"start"},ease:"back.out(1.25)",overwrite:"auto"},"-=0.15"),a.to(".hero-char",{y:g=>Math.sin(g*.9)*-4,duration:.2,stagger:{each:.022,from:"start"},ease:"sine.out",overwrite:"auto"},"-=0.18"),a.to(".hero-char",{y:0,duration:.28,stagger:{each:.022,from:"start"},ease:"sine.inOut",overwrite:"auto"},"-=0.08"),a.from(".hero-description",{opacity:0,y:18,duration:.5,ease:"power2.out",overwrite:"auto"},"-=0.22"),a.from(".hero-info-item",{opacity:0,y:8,duration:.35,stagger:.06,ease:"power2.out",overwrite:"auto"},"-=0.25"),a.from(".hero-actions",{opacity:0,y:14,duration:.45,ease:"power2.out",overwrite:"auto"},"-=0.2");const o=de.utils.toArray(".idle-char"),u=[{y:-3,rotation:-.8,duration:2.3},{y:3,rotation:.7,duration:2.8},{y:-4,rotation:1,duration:2.5}];o.forEach((g,y)=>{const x=u[y]??u[0];de.to(g,{y:x.y,rotate:x.rotation,duration:x.duration,repeat:-1,yoyo:!0,ease:"sine.inOut",delay:2.5+y*.2,overwrite:"auto"})});const c=[];return window.matchMedia("(pointer: fine)").matches&&de.utils.toArray(".mag-zone").forEach(y=>{const x=y.querySelector(".mag-target"),v=y.querySelector(".mag-label");if(!x||!v)return;const w=.3,S=.13,C=M=>{const R=y.getBoundingClientRect(),O=de.utils.mapRange(R.left,R.right,-R.width/2,R.width/2,M.clientX),j=de.utils.mapRange(R.top,R.bottom,-R.height/2,R.height/2,M.clientY);de.to(x,{x:O*w,y:j*w,duration:.35,ease:"power2.out",overwrite:"auto"}),de.to(v,{x:O*S,y:j*S,duration:.35,ease:"power2.out",overwrite:"auto"})},E=()=>{de.to(x,{x:0,y:0,duration:.7,ease:"elastic.out(1,0.4)",overwrite:"auto"}),de.to(v,{x:0,y:0,duration:.65,ease:"elastic.out(1,0.4)",overwrite:"auto"})};y.addEventListener("mousemove",C),y.addEventListener("mouseleave",E),c.push(()=>{y.removeEventListener("mousemove",C),y.removeEventListener("mouseleave",E)})}),de.utils.toArray(".main-reveal").forEach(g=>{de.from(g,{opacity:0,y:35,duration:.7,ease:"power2.out",overwrite:"auto",scrollTrigger:{trigger:g,start:"top 88%",toggleActions:"play none none none"}})}),de.from(".about-card",{opacity:0,y:35,scale:.98,duration:.65,stagger:.1,ease:"power2.out",overwrite:"auto",scrollTrigger:{trigger:".about-grid",start:"top 82%"}}),de.utils.toArray(".section-line").forEach(g=>{de.from(g,{scaleX:0,duration:.8,ease:"power2.out",overwrite:"auto",scrollTrigger:{trigger:g,start:"top 92%"}})}),()=>{c.forEach(g=>g())}},{scope:e}),b.jsx(IO,{children:b.jsxs(ZO,{ref:e,children:[b.jsx(WO,{className:"hero-section",children:b.jsx(JO,{children:b.jsxs(e6,{children:[b.jsx(t6,{children:b.jsxs(n6,{children:[b.jsx(Fw,{text:"안녕하세요",floatIndexes:[0,4]}),b.jsx(Fw,{text:"개발자 공혜진입니다",floatIndexes:[6],accentIndexes:[4,5,6]})]})}),b.jsx(r6,{className:"hero-description",children:"Vue·Nuxt 기반으로 사용자·관리자 서비스를 개발하는 공혜진입니다. 인증·결제·권한과 API 데이터를 화면에 연결하고, 기존 서비스 개선부터 QA·배포까지 담당합니다."}),b.jsxs(a6,{children:[b.jsx(nd,{className:"hero-info-item",children:"React / Vue"}),b.jsx(nd,{className:"hero-info-item",children:"Frontend"}),b.jsx(nd,{className:"hero-info-item",children:"API Integration"}),b.jsx(nd,{className:"hero-info-item",children:"Team Lead"})]}),b.jsxs(s6,{className:"hero-actions",children:[b.jsx(id,{className:"mag-zone",children:b.jsx(rd,{className:"mag-target",children:b.jsx(ku.GradientBtn,{onClick:()=>n("/project"),children:b.jsx(ad,{className:"mag-label",children:"포트폴리오 보기 ▶"})})})}),b.jsx(id,{className:"mag-zone",children:b.jsx(rd,{className:"mag-target",children:b.jsx(ku.GradientBtn,{onClick:()=>window.open("https://github.com/hjzheld","_blank","noopener,noreferrer"),children:b.jsx(ad,{className:"mag-label",children:"GitHub ▶"})})})})]}),b.jsx(yO,{})]})})}),b.jsx(G5,{compact:!0}),b.jsxs(sd,{children:[b.jsx(od,{className:"section-line"}),b.jsxs(o6,{className:"main-reveal",children:[b.jsx(l6,{children:b.jsx(u6,{children:"제가 개발할 때 중요하게 보는 것"})}),b.jsx(c6,{children:"한 가지 영역만 바라보기보다 실제 서비스가 어떻게 연결되고 운영되는지를 이해하며 개발하려고 합니다."})]}),b.jsxs(f6,{className:"about-grid",children:[b.jsx(o0,{className:"about-card",children:b.jsxs(l0,{children:[b.jsx("h3",{children:"사용자 화면"}),b.jsx("p",{children:"React와 Vue를 활용해 사용자에게 직접 보이는 화면과 인터랙션을 구현합니다."})]})}),b.jsx(o0,{className:"about-card",children:b.jsxs(l0,{children:[b.jsx("h3",{children:"서비스 흐름"}),b.jsx("p",{children:"API, 사용자 상태, 권한과 데이터 흐름을 이해하고 화면과 자연스럽게 연결합니다."})]})}),b.jsx(o0,{className:"about-card",children:b.jsxs(l0,{children:[b.jsx("h3",{children:"협업과 결과"}),b.jsx("p",{children:"일정과 QA, 유지보수성을 함께 고려하며 팀이 결과를 낼 수 있는 방향을 고민합니다."})]})})]})]}),b.jsxs(sd,{children:[b.jsx(od,{className:"section-line"}),b.jsx(Kw,{className:"main-reveal",children:b.jsx(Qw,{children:"실무와 개인 프로젝트에서 직접 사용한 기술을 중심으로 정리했습니다."})}),b.jsx($w,{className:"main-reveal",children:b.jsx(PO,{})})]}),b.jsxs(sd,{children:[b.jsx(od,{className:"section-line"}),b.jsx(Kw,{className:"main-reveal",children:b.jsx(Qw,{children:"현재까지의 학력입니다."})}),b.jsx($w,{className:"main-reveal",children:b.jsx(QO,{})})]}),b.jsxs(sd,{children:[b.jsx(od,{className:"section-line"}),b.jsxs(d6,{className:"main-reveal",children:[b.jsxs(h6,{children:[b.jsx("h2",{children:"프로젝트에서 더 자세히 보여드릴게요."}),b.jsx("p",{children:"개인 프로젝트와 실제 구현 경험, 사용 기술과 문제 해결 과정을 프로젝트 페이지에 정리해두었습니다."})]}),b.jsxs(p6,{children:[b.jsx(id,{className:"mag-zone",children:b.jsx(rd,{className:"mag-target",children:b.jsx(ku.GradientBtn,{onClick:()=>n("/project"),children:b.jsx(ad,{className:"mag-label",children:"포트폴리오 보기 ▶"})})})}),b.jsx(id,{className:"mag-zone",children:b.jsx(rd,{className:"mag-target",children:b.jsx(ku.GradientBtn,{onClick:()=>n("/personal"),children:b.jsx(ad,{className:"mag-label",children:"경력 보기 ▶"})})})})]})]})]})]})})},g6=V.div`
  margin: 2rem 0;
`,y6=V.div`
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: var(--gray-100);
  line-height: 1.4;
  
  @media (max-width: 768px) {
    font-size: 1.1rem;
    margin-bottom: 0.875rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1rem;
    margin-bottom: 0.75rem;
  }
`,v6=V.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  
  @media (max-width: 480px) {
    gap: 0.625rem;
  }
`,Iw=V(De.a)`
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.875rem 1.25rem;
  background: rgba(133, 129, 133, 0.1);
  border: 1.5px solid rgba(133, 129, 133, 0.3);
  border-radius: 12px;
  font-size: 0.95rem;
  font-weight: 500;
  color: var(--gray-100);
  text-decoration: none;
  transition: all 0.3s ease;
  word-break: break-all;
  overflow-wrap: break-word;
  position: relative;
  overflow: hidden;
  
  &::after {
    content: '→';
    margin-left: 0.5rem;
    opacity: 0.6;
    transition: all 0.3s ease;
  }
  
  &:hover {
    background: rgba(133, 129, 133, 0.2);
    border-color: var(--primary-color);
    transform: translateX(4px);
    
    &::after {
      opacity: 1;
      transform: translateX(4px);
    }
  }
  
  @media (max-width: 768px) {
    padding: 0.75rem 1rem;
    font-size: 0.9rem;
    border-radius: 10px;
  }
  
  @media (max-width: 480px) {
    padding: 0.625rem 0.875rem;
    font-size: 0.85rem;
    border-radius: 8px;
  }
`,ld=({title:n,links:e})=>{const r=()=>typeof e=="string"?b.jsx(Iw,{href:e,target:"_blank",rel:"noopener noreferrer",initial:{opacity:0,x:-20},whileInView:{opacity:1,x:0},viewport:{once:!0},transition:{duration:.3},children:e}):e.map((a,o)=>b.jsx(Iw,{href:a,target:"_blank",rel:"noopener noreferrer",initial:{opacity:0,x:-20},whileInView:{opacity:1,x:0},viewport:{once:!0},transition:{duration:.3,delay:o*.1},children:a},o));return b.jsxs(g6,{children:[b.jsx(y6,{children:n}),b.jsx(v6,{children:r()})]})},x6="/portfolio/assets/video_thumb-CBpaTUEU.png",ud={once:!0,amount:.2},Ir={hidden:{opacity:0,y:40},visible:{opacity:1,y:0,transition:{duration:.55,ease:"easeOut"}}},b6={hidden:{opacity:0,x:-50},visible:{opacity:1,x:0,transition:{duration:.55,ease:"easeOut"}}},u0={hidden:{opacity:0,scale:.75},visible:{opacity:1,scale:1,transition:{type:"spring",stiffness:220,damping:18}}},cd={hidden:{},visible:{transition:{staggerChildren:.12,delayChildren:.1}}},_6=V.article`
  width:100%; max-width:1120px; min-width:0; margin:3rem auto 6rem; padding:0 1.25rem;
  .back { display:inline-flex; align-items:center; gap:.8rem; padding:.7rem 1rem; border:1px solid #dfe5d5; border-radius:50px; color:#3e5149; font-size:.85rem; }
  header { border-radius:30px; box-shadow:var(--clay-shadow); padding:3rem 2rem 2rem; margin-top:2rem; background:var(--lemon-paper); border:1px solid var(--vanilla); border-top:1px solid rgba(255,255,255,.8); }
  .eyebrow { font-family:var(--font-editorial); font-style:italic; }

  .eyebrow { color:#64736b; font-size:.75rem; letter-spacing:.15em; }
  h1 { word-break:keep-all; overflow-wrap:anywhere; max-width:850px; color:#3e5149; font-size:clamp(2rem,5vw,3.5rem); line-height:1.3; margin:1rem 0 1.5rem; letter-spacing:-.05em; }
  h2 { color:#3e5149; font-size:1.4rem; margin:.5rem 0 1.1rem; }
  p { color:var(--gray-400); line-height:1.95; word-break:keep-all; overflow-wrap:anywhere; }
  .tags { display:flex; flex-wrap:wrap; gap:.5rem; margin:1.5rem 0; }
  .tag { max-width:100%; overflow-wrap:anywhere; background:#e0ead9; color:#64736b; padding:.4rem .75rem; border-radius:8px; font-size:.8rem; }
  .layout > * { min-width:0; }
  .layout { display:grid; grid-template-columns:210px minmax(0,1fr); gap:4rem; padding-top:2.5rem; }
  aside nav { position:sticky; top:110px; display:flex; flex-direction:column; gap:1rem; font-size:.8rem; color:#64736b; line-height:1.7; }
  section { padding:0 0 2.5rem; margin:0 0 2.5rem; border-bottom:1px solid #e7e3d7; scroll-margin-top:110px; }
  .number { color:#64736b; font-size:.75rem; letter-spacing:.15em; }
  .links { display:flex; gap:.75rem; flex-wrap:wrap; margin-top:1.5rem; }
  .links a { padding:.7rem 1rem; background:#3e5149; color:white; border-radius:9px; font-size:.85rem; }
  .project-preview { display:block; width:100%; height:auto; margin:2rem 0; border:12px solid var(--paper); outline:1px solid var(--vanilla); }
  footer { margin-top:1rem; }
  a:hover { text-decoration:underline; text-underline-offset:4px; }
  @media(max-width:760px) {
    margin:1.5rem auto 4rem; padding:0 1rem;
    .layout { grid-template-columns:minmax(0,1fr); gap:1.5rem; padding-top:2rem; }
    aside { display:none; }
    header { margin-top:1.5rem; padding:1.5rem 1.25rem; border-radius:24px; }
    h1 { font-size:clamp(1.5rem,6.4vw,2rem); line-height:1.45; margin:0 0 1rem; letter-spacing:-.035em; }
    h2 { font-size:1.2rem; line-height:1.5; word-break:keep-all; overflow-wrap:anywhere; }
    p { font-size:.9rem; line-height:1.9; }
    .tags { margin:1.25rem 0; gap:.4rem; }
    .tag { font-size:.75rem; }
    .project-preview { border-width:8px; margin:1.5rem 0; }
    section { padding-bottom:1.75rem; margin-bottom:1.75rem; }
  }
  @media(max-width:480px) {
    .links { display:grid; grid-template-columns:minmax(0,1fr); gap:.65rem; }
    .links a { text-align:center; padding:.8rem; line-height:1.5; }
    .back { font-size:.8rem; padding:.65rem .85rem; max-width:100%; }
  }
`,w6=V(ia)`
  display:inline-flex; align-items:center; gap:.75rem; padding:.7rem 1rem;
  margin:1rem 0; border:1px solid #dfe5d5; border-radius:50px;
  color:#3e5149; font-size:.85rem; background:rgba(255, 251, 253,.6);
  &:hover { background:#f5e6c8; }
`,S6=V(De.div)`
  font-size: 1.5rem;
  font-weight: 700;

  margin: 2.5rem 0 1.5rem 0;
  padding-bottom: 0.75rem;

  border-bottom:
    3px solid var(--primary-color);

  color: var(--gray-100);

  line-height: 1.4;

  position: relative;

  &::before {
    content: "";

    position: absolute;

    bottom: -3px;
    left: 0;

    width: 60px;
    height: 3px;

    background: var(--primary-light);
  }

  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
`,T6=V(De.div)`
  font-size: 1.2rem;
  font-weight: 600;

  margin: 1.5rem 0 1rem 0;

  color: var(--primary-color);

  display: flex;
  align-items: center;

  gap: 0.5rem;

  &::before {
    content: "";

    width: 4px;
    height: 1.2rem;

    background: var(--primary-color);

    border-radius: 2px;
  }
`,A6=V(De.h4)`
  font-size: 1.8rem;
  font-weight: 600;

  line-height: 1.4;

  margin-bottom: 1rem;
  margin-top: 0;

  @media (max-width: 768px) {
    font-size: 1.4rem;
  }
`,E6=V(De.div)`
  display: flex;
  flex-wrap: wrap;

  gap: 0.75rem;

  margin-bottom: 0.5rem;
`,C6=V(De.div)`
  display: inline-flex;
  align-items: center;

  padding: 0.5rem 1rem;

  background: rgba(133, 129, 133, 0.15);

  border:
    1px solid rgba(133, 129, 133, 0.3);

  border-radius: 20px;

  font-size: 0.9rem;
  font-weight: 500;

  color: var(--gray-100);
`,R6=V(De.div)`
  width: 100%;
`,M6=V(De.div)`
  width: 100%;
`,D6=V.div`
  position: relative;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  overflow: hidden;
  cursor: zoom-in;
`,j6=V(De.img)`
  display: block;
  width: 100%;
  height: auto;
  max-height: 600px;

  object-fit: contain;
  user-select: none;
`,Zw=V.button`
  position: absolute;
  top: 50%;

  ${({$direction:n})=>n==="prev"?"left: 1rem;":"right: 1rem;"}

  z-index: 5;

  width: 44px;
  height: 44px;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0;

  border: 1px solid rgba(185, 130, 146, 0.5);
  border-radius: 50%;

  background: rgba(133, 129, 133, 0.85);

  transform: translateY(-50%);

  transition:
    opacity 0.2s ease,
    background 0.2s ease,
    transform 0.2s ease;

  /* 화살표 */
  &::before {
    content: "";

    width: 10px;
    height: 10px;

    border-top: 2px solid #fff;
    border-right: 2px solid #fff;

    ${({$direction:n})=>n==="prev"?`
          transform: translateX(2px) rotate(-135deg);
        `:`
          transform: translateX(-2px) rotate(45deg);
        `}
  }

  &:hover:not(:disabled) {
    background: rgba(116, 125, 136, 0.95);
  }

  &:disabled {
    opacity: 0.25;
  }

  @media (max-width: 768px) {
    width: 38px;
    height: 38px;

    ${({$direction:n})=>n==="prev"?"left: 0.5rem;":"right: 0.5rem;"}
  }
`,k6=V(De.div)`
  position: fixed;
  inset: 0;

  z-index: 9999;

  display: flex;
  align-items: center;
  justify-content: center;

  overflow: hidden;

  background: rgba(0, 0, 0, 0.78);
  backdrop-filter: blur(6px);
`,O6=V(De.div)`
  position: relative;

  width: min(86vw, 1200px);
  height: min(84vh, 860px);

  display: flex;
  align-items: center;
  justify-content: center;
`,z6=V(De.img)`
  display: block;

  max-width: 100%;
  max-height: 100%;

  width: auto;
  height: auto;

  object-fit: contain;
  user-select: none;
`,Ww=V.button`
  position: absolute;
  top: 50%;

  ${({$direction:n})=>n==="prev"?"left: 32px;":"right: 32px;"}

  z-index: 10001;

  width: 50px;
  height: 50px;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0;
  margin: 0;

  border: 1px solid rgba(185, 130, 146, 0.5);
  border-radius: 50%;

  background: rgba(133, 129, 133, 0.85);
  transform: translateY(-50%);

  transition:
    opacity 0.2s ease,
    background 0.2s ease;

  /* 화살표 직접 그리기 */
  &::before {
    content: "";

    width: 11px;
    height: 11px;

    border-top: 2px solid #fff;
    border-right: 2px solid #fff;

    ${({$direction:n})=>n==="prev"?`
          transform: translateX(2px) rotate(-135deg);
        `:`
          transform: translateX(-2px) rotate(45deg);
        `}
  }

  &:hover:not(:disabled) {
    background: rgba(116, 125, 136, 0.95);
  }

  &:active:not(:disabled) {
    background: rgba(116, 125, 136, 0.95);
  }

  &:disabled {
    opacity: 0.18;
    pointer-events: none;
  }

  @media (max-width: 768px) {
    width: 42px;
    height: 42px;

    ${({$direction:n})=>n==="prev"?"left: 12px;":"right: 12px;"}

    &::before {
      width: 9px;
      height: 9px;
    }
  }
`,N6=V.div`
  position: absolute;
  left: 50%;
  bottom: 24px;

  z-index: 10001;

  transform: translateX(-50%);

  padding: 0.4rem 0.75rem;
  border-radius: 999px;

  background: rgba(0, 0, 0, 0.65);
  color: #fff;

  font-size: 0.85rem;
  pointer-events: none;
`,P6=V.button`
  /*
   * ModalBackdrop 자체가 position: fixed + inset: 0 이므로
   * 그 안에서 absolute로 고정하면 이미지 scale 애니메이션과
   * 아무 상관 없이 우측 상단 위치가 항상 동일함.
   */
  position: absolute;
  top: 20px;
  right: 20px;

  z-index: 10002;

  width: 50px;
  height: 50px;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0;
  margin: 0;

  border: 1px solid rgba(255, 251, 253, 0.35);
  border-radius: 50%;

  background: rgba(0, 0, 0, 0.68);

  /*
   * transform을 transition 대상에서 완전히 제외.
   * hover / active 시 버튼 위치와 크기가 절대 변하지 않음.
   */
  transform: none !important;
  transition:
    background 0.2s ease,
    border-color 0.2s ease;

  &::before,
  &::after {
    content: "";
    position: absolute;

    left: 50%;
    top: 50%;

    width: 22px;
    height: 2px;

    border-radius: 999px;
    background: #fff;

    transform-origin: center;
  }

  &::before {
    transform:
      translate(-50%, -50%)
      rotate(45deg);
  }

  &::after {
    transform:
      translate(-50%, -50%)
      rotate(-45deg);
  }

  &:hover {
    background: rgba(0, 0, 0, 0.88);
    border-color: rgba(255, 251, 253, 0.7);
    transform: none !important;
  }

  &:active {
    background: rgba(0, 0, 0, 0.95);
    transform: none !important;
  }

  @media (max-width: 768px) {
    top: 12px;
    right: 12px;

    width: 44px;
    height: 44px;

    &::before,
    &::after {
      width: 19px;
    }
  }
`,L6={back:"Back-end",front:"Front-end",database:"Database",ai:"AI",build:"Build 도구"},Jw=()=>{var O,j,P;const{id:n}=vj(),e=Ai(),r=ky.find(D=>String(D.id)===n),[a,o]=z.useState(!1),[u,c]=z.useState(0),[f,h]=z.useState(0),p=(r==null?void 0:r.detail.image.length)??0,g=u>0,y=u<p-1,x=f>0,v=f<p-1,w=D=>{h(D),o(!0)},S=()=>{o(!1)},C=()=>{g&&c(D=>D-1)},E=()=>{y&&c(D=>D+1)},M=()=>{x&&h(D=>D-1)},R=()=>{v&&h(D=>D+1)};if(z.useEffect(()=>{if(!a)return;const D=document.body.style.overflow,B=document.documentElement.style.overflow;document.body.style.overflow="hidden",document.documentElement.style.overflow="hidden";const G=F=>{if(F.key==="Escape"){o(!1);return}F.key==="ArrowLeft"&&h(re=>Math.max(re-1,0)),F.key==="ArrowRight"&&h(re=>Math.min(re+1,Math.max(p-1,0)))};return window.addEventListener("keydown",G),()=>{document.body.style.overflow=D,document.documentElement.style.overflow=B,window.removeEventListener("keydown",G)}},[a,p]),(O=r==null?void 0:r.detail.sections)!=null&&O.length){const D=r.detail.image.find(re=>re.type==="image"),B=r.kind==="실무"||r.kind==="자동화";if(B&&e.pathname.startsWith("/project/"))return b.jsx(kj,{to:`/personal/work/${r.id}`,replace:!0});const G=B?"/personal":"/project",F=B?"경력으로 돌아가기":"포트폴리오로 돌아가기";return b.jsxs(_6,{children:[b.jsxs(ia,{className:"back",to:G,children:["← ",F]}),b.jsxs("header",{children:[b.jsx("h1",{children:r.title}),b.jsx("p",{children:r.content}),b.jsx("div",{className:"tags",children:r.tags.map(re=>b.jsx("span",{className:"tag",children:re},re))}),b.jsxs("div",{className:"links",children:[r.detail.site&&b.jsx("a",{href:r.detail.site,target:"_blank",rel:"noreferrer",children:"서비스 방문 ↗"}),r.detail.github&&b.jsx("a",{href:r.detail.github,target:"_blank",rel:"noreferrer",children:"구현·검증 기록 ↗"})]})]}),D&&b.jsx("img",{className:"project-preview",src:D.src,alt:`${r.title} 실제 프로젝트 화면`,loading:"lazy"}),b.jsxs("div",{className:"layout",children:[b.jsx("aside",{children:b.jsx("nav",{"aria-label":"상세 내용 목차",children:r.detail.sections.map(([re],J)=>b.jsxs("a",{href:`#section-${J}`,children:[String(J+1).padStart(2,"0")," / ",re]},re))})}),b.jsx("div",{children:r.detail.sections.map(([re,J],ye)=>b.jsxs("section",{id:`section-${ye}`,children:[b.jsx("span",{className:"number",children:String(ye+1).padStart(2,"0")}),b.jsx("h2",{children:re}),b.jsx("p",{children:J})]},re))})]}),b.jsx("footer",{children:b.jsxs(ia,{className:"back",to:G,children:["← ",F]})})]})}return b.jsxs(Oy,{children:[b.jsx(w6,{to:"/project",children:"← 포트폴리오로 돌아가기"}),r?b.jsxs(b.Fragment,{children:[b.jsxs(De.div,{className:"detail-container",variants:b6,initial:"hidden",animate:"visible",children:[b.jsx(UO,{page:"detail",title:r.title}),b.jsxs(De.div,{className:"detail-content-container",variants:cd,initial:"hidden",animate:"visible",children:[b.jsx(R6,{className:"detail-img-container",variants:u0,children:r.detail.image.length===1?b.jsx(De.img,{src:r.detail.image[0].src,loading:"lazy",alt:"프로젝트 이미지",onClick:()=>w(0),whileHover:{scale:1.04,rotate:.5},whileTap:{scale:.96},transition:{type:"spring",stiffness:250,damping:18}}):b.jsxs(D6,{onClick:()=>w(u),children:[b.jsx(j6,{src:(j=r.detail.image[u])==null?void 0:j.src,loading:"lazy",alt:`${r.title} 프로젝트 이미지 ${u+1}`,initial:{opacity:0},animate:{opacity:1},transition:{duration:.2},draggable:!1},u),b.jsx(Zw,{type:"button",$direction:"prev","aria-label":"이전 이미지",disabled:!g,onClick:D=>{D.stopPropagation(),C()}}),b.jsx(Zw,{type:"button",$direction:"next","aria-label":"다음 이미지",disabled:!y,onClick:D=>{D.stopPropagation(),E()}})]})}),b.jsxs(M6,{className:"detail-content",variants:Ir,children:[b.jsx(A6,{variants:Ir,children:r.content}),b.jsx(De.p,{className:"detail-sub-content",variants:Ir,dangerouslySetInnerHTML:{__html:r.detail.content}}),r.detail.video&&b.jsx(De.div,{className:"video-wrap",variants:u0,initial:"hidden",whileInView:"visible",viewport:ud,children:b.jsx("video",{src:r.detail.video,poster:x6,autoPlay:!0,playsInline:!0,controls:!0,muted:!0,"aria-label":"시연영상"})}),b.jsxs(De.div,{variants:cd,initial:"hidden",whileInView:"visible",viewport:ud,children:[r.detail.github&&b.jsx(De.div,{variants:Ir,children:b.jsx(ld,{title:"GitHub",links:r.detail.github})}),r.detail.notion&&b.jsx(De.div,{variants:Ir,children:b.jsx(ld,{title:"Notion",links:r.detail.notion})}),r.detail.site&&b.jsx(De.div,{variants:Ir,children:b.jsx(ld,{title:"URL",links:r.detail.site})}),r.detail.blog&&r.detail.blog.length>0&&b.jsx(De.div,{variants:Ir,children:b.jsx(ld,{title:"Blog",links:r.detail.blog})})]}),b.jsx(S6,{variants:Ir,initial:"hidden",whileInView:"visible",viewport:ud,children:"기술 스택"}),r.detail.stack&&Object.entries(r.detail.stack??{}).map(([D,B])=>{const G=D,F=B;return F.length===0?null:b.jsxs(De.div,{initial:"hidden",whileInView:"visible",viewport:ud,variants:cd,children:[b.jsx(T6,{variants:Ir,children:L6[G]}),b.jsx(E6,{variants:cd,children:F.map(re=>b.jsx(C6,{variants:u0,whileHover:{scale:1.08,y:-4,background:"rgba(133, 129, 133, 0.25)",borderColor:"var(--primary-color)"},whileTap:{scale:.96},children:re},re))})]},G)})]})]})]}),b.jsx(mC,{children:a&&b.jsxs(k6,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},onClick:S,children:[b.jsx(O6,{initial:{opacity:0,scale:.92},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.96},transition:{duration:.18},onClick:D=>D.stopPropagation(),children:b.jsx(z6,{src:(P=r.detail.image[f])==null?void 0:P.src,alt:`${r.title} 프로젝트 이미지 ${f+1}`,initial:{opacity:0},animate:{opacity:1},transition:{duration:.18},draggable:!1},f)}),p>1&&b.jsxs(b.Fragment,{children:[b.jsx(Ww,{type:"button",$direction:"prev","aria-label":"이전 이미지",disabled:!x,onClick:D=>{D.stopPropagation(),M()}}),b.jsx(Ww,{type:"button",$direction:"next","aria-label":"다음 이미지",disabled:!v,onClick:D=>{D.stopPropagation(),R()}}),b.jsxs(N6,{children:[f+1," / ",p]})]}),b.jsx(P6,{type:"button","aria-label":"이미지 크게 보기 닫기",onClick:D=>{D.stopPropagation(),S()}})]})})]}):b.jsxs("p",{children:["존재하지 않는 프로젝트입니다. ",b.jsx(ia,{to:"/project",children:"프로젝트 목록으로 돌아가기"})]})]})},e2=new Set,t2="portfolio:visited:";function X5(n){const e=z.useRef(null);if(e.current===null){let r=e2.has(n);try{r=r||sessionStorage.getItem(t2+n)==="1"}catch{}e.current=!r}return z.useEffect(()=>{e2.add(n);try{sessionStorage.setItem(t2+n,"1")}catch{}},[n]),e.current}de.registerPlugin(Ei);const B6=V.div`
  position: relative;

  width: 100%;
  min-height: 100vh;

  overflow: visible;
`,V6=V.div`
    position: relative;

    width: 100%;

    /*
     * 프로젝트 화면이
     * transition보다 먼저 보이는 것 방지
     */
    visibility: hidden;

    clip-path:
      circle(
        0%
        at
        50%
        50%
      );

    will-change:
      clip-path;
  `,U6=V.div`
    position: fixed;

    inset: 0;

    z-index: 5000;

    overflow: hidden;

    pointer-events: none;
  `,zy=V.div`
    position: absolute;

    inset: 0;

    width: 100%;
    height: 100%;

    will-change:
      transform;
  `,H6=V(zy)`
  z-index: 1;

  background:
    var(
      --project-transition-blue
    );
`,Y6=V(zy)`
  z-index: 2;

  background:
    var(
      --project-transition-lavender
    );
`,G6=V(zy)`
  z-index: 3;

  background:
    var(
      --project-transition-mist
    );
`,X6=V.div`
    position: absolute;

    inset: 0;

    z-index: 4;

    pointer-events: none;
  `,q6=V.div`
    position: absolute;

    left: 50%;
    top: 50%;

    width: min(
      44vw,
      520px
    );

    aspect-ratio: 1;

    transform:
      translate(
        -50%,
        -50%
      );

    border:
      1px solid
      var(
        --project-transition-line
      );

    border-radius: 50%;

    opacity: 0.75;

    box-shadow:
      0
      20px
      60px
      var(
        --project-transition-shadow
      );

    &::before {
      content: "";

      position: absolute;

      inset: 12%;

      border:
        1px solid
        var(
          --project-transition-line
        );

      border-radius:
        inherit;

      opacity: 0.7;
    }

    &::after {
      content: "";

      position: absolute;

      inset: 27%;

      border:
        1px solid
        var(
          --project-transition-line
        );

      border-radius:
        inherit;

      opacity: 0.5;
    }

    @media (
      max-width:
      768px
    ) {
      width: 72vw;
    }

    @media (
      max-width:
      480px
    ) {
      width: 86vw;
    }
  `,F6=V.div`
    position: absolute;

    left: 50%;
    top: 50%;

    z-index: 5;

    transform:
      translate(
        -50%,
        -50%
      );

    display: flex;

    flex-direction: column;

    align-items:
      center;

    text-align:
      center;

    pointer-events:
      none;
  `,$6=V.span`
    margin-bottom:
      0.75rem;

    color:
      var(
        --project-transition-text
      );

    font-family:
      var(--font-en);

    font-size:
      0.67rem;

    font-weight:
      500;

    letter-spacing:
      0.2em;
  `,K6=V.strong`
    color:
      var(--gray-100);

    font-family:
      var(--font-en);

    font-size:
      clamp(
        2.8rem,
        7vw,
        6rem
      );

    font-weight:
      600;

    line-height:
      0.95;

    letter-spacing:
      -0.06em;

    white-space:
      nowrap;

    @media (
      max-width:
      480px
    ) {
      font-size:
        clamp(
          2.3rem,
          15vw,
          4rem
        );
    }
  `,Q6=V.div`
    width: 52px;
    height: 1px;

    margin-top:
      1.2rem;

    background:
      var(
        --primary-color
      );

    transform-origin:
      center;
  `,I6=V.header`
  &&& { border:var(--clay-border); border-radius:32px; background:var(--surface-neutral); box-shadow:var(--clay-shadow); }

  && { border-radius:32px 32px 90px 32px; padding:3rem 2.5rem; border:1px solid var(--vanilla); background:linear-gradient(0deg,var(--lemon-paper),var(--lemon-paper)) padding-box; position:relative; }
  &&::before { content:''; display:none; height:30px; margin:-2.5rem -2rem 2rem; border-bottom:1px solid var(--vanilla); background:var(--mauve); }
  && span { font-family:var(--font-editorial); font-style:italic; }

  max-width: 1200px; margin: 2.5rem auto 0; padding: 0 1rem;
  span { font-size: .8rem; letter-spacing: .12em; color: var(--gray-400); }
  h1 { margin: .75rem 0 1rem; font-size: clamp(2rem,5vw,3.5rem); line-height: 1.3; }
  p { max-width: 680px; line-height: 1.8; color: var(--gray-400); word-break: keep-all; }
`;function Z6(){const n=X5("projects"),e=z.useRef(null),r=z.useRef(!n),a=z.useRef(!1);return Ei(()=>{var y,x;const o=(y=e.current)==null?void 0:y.querySelector(".project-content"),u=(x=e.current)==null?void 0:x.querySelector(".project-transition");if(!o||!u)return;const c=window.matchMedia("(prefers-reduced-motion: reduce)").matches;if(r.current||c){if(de.set(u,{display:"none"}),de.set(o,{visibility:"visible",clipPath:"none",zIndex:"auto"}),de.set([".project-page-intro",".project-category",".project-card"],{clearProps:"opacity,transform"}),a.current=!0,!c){const v=de.timeline();return v.fromTo(".project-page-intro",{opacity:0,y:22},{opacity:1,y:0,duration:.48,ease:"power3.out",clearProps:"transform,opacity"}).fromTo(".project-category",{opacity:0,y:16},{opacity:1,y:0,duration:.4,ease:"power2.out",clearProps:"transform,opacity"},"-=0.25").fromTo(".project-card",{opacity:0,y:58,scale:.94,rotation:w=>w%2===0?-3.2:3.2,transformOrigin:"50% 100%"},{opacity:1,y:0,scale:1,rotation:0,duration:.72,stagger:{each:.075,from:"start"},ease:"back.out(1.55)",clearProps:"transform,opacity"},"-=0.12"),()=>{v.kill()}}return}a.current=!1;const h=document.body.style.overflow,p=document.documentElement.style.overflow;document.body.style.overflow="hidden",document.documentElement.style.overflow="hidden",de.set(o,{visibility:"hidden",clipPath:"circle(0% at 50% 50%)",zIndex:"auto"}),de.set(".project-page-intro",{opacity:0,y:22}),de.set(".project-category",{opacity:0,y:16}),de.set(".project-card",{opacity:0,y:58,scale:.94,rotation:v=>v%2===0?-3.2:3.2,transformOrigin:"50% 100%"}),de.set(u,{display:"block",visibility:"visible",opacity:1}),de.set(".transition-blue",{xPercent:0}),de.set(".transition-lavender",{xPercent:0}),de.set(".transition-mist",{xPercent:0}),de.set(".transition-circle",{opacity:1,scale:1}),de.set(".transition-content",{opacity:1,scale:1});const g=de.timeline({defaults:{overwrite:"auto"}});return g.from(".transition-circle",{opacity:0,scale:.8,duration:.65,ease:"power3.out"}),g.from(".transition-label",{opacity:0,y:8,duration:.3,ease:"power2.out"},"-=0.38"),g.from(".transition-title",{opacity:0,y:20,scale:.96,duration:.55,ease:"power3.out"},"-=0.25"),g.from(".transition-line",{scaleX:0,duration:.38,ease:"power2.out"},"-=0.25"),g.to(".transition-mist",{xPercent:100,duration:.58,ease:"power3.inOut"},"+=0.08"),g.to(".transition-lavender",{xPercent:-100,duration:.62,ease:"power3.inOut"},"-=0.34"),g.to(".transition-blue",{xPercent:100,duration:.68,ease:"power4.inOut"},"-=0.35"),g.to(".transition-content",{opacity:0,scale:.95,duration:.3,ease:"power2.in"},"-=0.42"),g.to(".transition-circle",{opacity:0,scale:1.15,duration:.35,ease:"power2.in"},"<"),g.set(o,{visibility:"visible",zIndex:5001}),g.to(o,{clipPath:"circle(150% at 50% 50%)",duration:1.05,ease:"power4.inOut"}),g.set(u,{visibility:"hidden"}),g.set(o,{clipPath:"none",zIndex:"auto",visibility:"visible"}),g.to(".project-page-intro",{opacity:1,y:0,duration:.48,ease:"power3.out",clearProps:"transform,opacity"}),g.to(".project-category",{opacity:1,y:0,duration:.4,ease:"power2.out",clearProps:"transform,opacity"},"-=0.25"),g.to(".project-card",{opacity:1,y:0,scale:1,rotation:0,duration:.72,stagger:{each:.075,from:"start"},ease:"back.out(1.55)",clearProps:"transform,opacity"},"-=0.12"),g.call(()=>{a.current=!0,document.body.style.overflow=h,document.documentElement.style.overflow=p}),()=>{g.kill(),document.body.style.overflow=h,document.documentElement.style.overflow=p}},{scope:e}),b.jsxs(B6,{ref:e,children:[b.jsxs(U6,{className:"project-transition",children:[b.jsx(H6,{className:"transition-blue"}),b.jsx(Y6,{className:"transition-lavender"}),b.jsx(G6,{className:"transition-mist"}),b.jsx(X6,{children:b.jsx(q6,{className:"transition-circle"})}),b.jsxs(F6,{className:"transition-content",children:[b.jsx($6,{className:"transition-label",children:"02 / PROJECT"}),b.jsx(K6,{className:"transition-title",children:"PROJECTS"}),b.jsx(Q6,{className:"transition-line"})]})]}),b.jsx(V6,{className:"project-content",children:b.jsxs(Oy,{children:[b.jsxs(I6,{className:"project-page-intro",children:[b.jsx("h1",{children:"포트폴리오"}),b.jsx("p",{children:"직접 기획한 서비스와 팀 프로젝트를 모았습니다. 회사에서 담당한 서비스 개발 사례는 경력에서 확인할 수 있습니다."})]}),b.jsx(G5,{})]})})]})}de.registerPlugin(ze,Ei);const W6=V.svg`
  position: fixed;
  inset: 0;
  z-index: 9998;
  width: 100%;
  height: 100%;
  pointer-events: none;

  .shape-overlays__path {
    will-change: d;
  }
`,J6=V.div`
  position: fixed;
  inset: 0;
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.65rem;
  color: var(--ink);
  font-family: var(--font-en);
  font-size: 0.72rem;
  font-weight: 500;
  letter-spacing: 0.16em;
  pointer-events: none;

  span {
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: var(--primary-color);
  }

  @media (max-width: 480px) {
    font-size: 0.64rem;
  }
`,ez=V.div`
  position: relative;
  width: 100%;
  padding: 1.5rem 0 7rem;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 0.75rem 0 4rem;
  }
`,tz=V.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;

  @media (max-width: 768px) {
    padding: 0 1rem;
  }

  @media (max-width: 480px) {
    padding: 0 0.875rem;
  }
`,jo=V.section`
  padding: 5rem 0 0;

  @media (max-width: 768px) {
    padding-top: 4rem;
  }
`,ko=V.div`
  width: 100%;
  height: 1px;
  margin-bottom: 3.5rem;
  background: linear-gradient(
    90deg,
    rgba(249, 220, 229, 0),
    rgba(249, 220, 229, 0.36),
    rgba(249, 220, 229, 0)
  );
  transform-origin: left;

  @media (max-width: 768px) {
    margin-bottom: 2.5rem;
  }
`,Oo=V.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  align-items: end;
  gap: 1rem;
  margin-bottom: 2.5rem;

  @media (max-width: 768px) {
    grid-template-columns: minmax(0, 1fr);
    gap: 1rem;
    margin-bottom: 2rem;
  }
`,zo=V.div`
  min-width:0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`,No=V.h2`
  min-width:0; word-break:keep-all; overflow-wrap:anywhere;
  @media(max-width:480px) { && { font-size:clamp(1.5rem,6.2vw,1.9rem); line-height:1.4; } }

  color: var(--gray-100);
  font-size: clamp(2rem, 4vw, 3rem);
  line-height: 1.2;
  letter-spacing: -0.045em;
`,Po=V.p`
  color: var(--gray-400);
  font-size: 0.9rem;
  line-height: 1.8;
  word-break: keep-all;

  @media (max-width: 480px) {
    font-size: 0.84rem;
  }
`,nz=V.section`
  &&&& { background:var(--surface-mint); }
  .career-friends { display:flex; justify-content:flex-end; align-items:flex-end; gap:.7rem; margin-top:1rem; margin-bottom:-.5rem; }

  &&& { background:var(--clay-cream); border:var(--clay-border); border-radius:34px; box-shadow:var(--clay-shadow); }

  && { background:var(--lemon-paper); border:1px solid var(--vanilla); border-radius:28px; box-shadow:0 12px 28px rgba(78, 81, 85,.07); }
  &&::before { border-radius:50%; width:180px; height:180px; top:-60px; right:-30px; background:rgba(220, 236, 248,.3); }
  &&::after { display:none; }

  position: relative;
  width: 100%;
  margin-top: 1.5rem;
  padding: clamp(2rem, 5vw, 4.8rem);
  overflow: hidden;
  border: 1px solid rgba(255, 251, 253, 0.65);
  border-radius: 34px;
  background: linear-gradient(
    135deg,
    rgba(255, 251, 253, 0.7),
    rgba(251, 246, 249, 0.58)
  );
  box-shadow:
    0 24px 60px rgba(99, 99, 99, 0.08),
    0 8px 24px rgba(133, 129, 133, 0.12);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);

  &::before,
  &::after {
    content: "";
    position: absolute;
    border-radius: 50%;
    pointer-events: none;
  }

  &::before {
    width: 320px;
    height: 320px;
    right: -110px;
    top: -130px;
    background: rgba(133, 129, 133, 0.13);
  }

  &::after {
    width: 220px;
    height: 220px;
    left: -90px;
    bottom: -120px;
    background: rgba(220, 236, 248, 0.16);
  }

  @media (max-width: 768px) {
    margin-top: 0.75rem;
    padding: 2.3rem 1.5rem;
    border-radius: 26px;
  }

  @media (max-width: 480px) {
    padding: 1.8rem 1.2rem;
    border-radius: 22px;
  }
`,iz=V.h1`
  position: relative;
  z-index: 2;
  max-width: 850px;
  color: var(--gray-100);
  font-size: clamp(1.7rem, 3vw, 3.6rem);
  line-height: 1.08;
  letter-spacing: -0.06em;
  word-break: keep-all;

  strong {
    color: var(--primary-color);
    font-weight: 700;
  }

  @media (max-width: 768px) {
    font-size: clamp(2.35rem, 8.5vw, 4rem);
  }

  @media (max-width: 480px) {
    font-size: clamp(2.05rem, 10vw, 3rem);
    line-height: 1.13;
  }
`,rz=V.p`
  position: relative;
  z-index: 2;
  max-width: 720px;
  margin-top: 1.6rem;
  color: var(--gray-400);
  font-size: 1rem;
  line-height: 1.9;
  word-break: keep-all;

  strong {
    color: var(--gray-100);
    font-weight: 600;
  }

  @media (max-width: 768px) {
    font-size: 0.94rem;
  }

  @media (max-width: 480px) {
    margin-top: 1.25rem;
    font-size: 0.88rem;
    line-height: 1.8;
  }
`,az=V.div`
  position: relative;
  z-index: 2;
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 0.75rem;
  margin-top: 3rem;

  @media (max-width: 850px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 480px) {
    grid-template-columns: minmax(0, 1fr);
    margin-top: 2.2rem;
  }
`,sz=V.div`
  && { background:var(--surface-neutral); border:var(--clay-border); box-shadow:inset 2px 2px 4px rgba(255,255,255,.65),3px 5px 9px rgba(85,100,90,.05); }
  &&:nth-child(2) { background:var(--surface-peach); }
  &&:nth-child(3) { background:var(--surface-blue); }
  &&:nth-child(4) { background:#f2ead9; }

  min-height: 118px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1.5rem;
  padding: 1.2rem 1.25rem;
  border: 1px solid rgba(133, 129, 133, 0.14);
  border-radius: 18px;
  background: rgba(255, 251, 253, 0.46);
  box-shadow: 0 8px 24px rgba(133, 129, 133, 0.08);

  @media (max-width: 480px) {
    min-height: 96px;
    gap: 1rem;
  }
`,oz=V.span`
  color: var(--gray-400);
  font-family: var(--font-en);
  font-size: 0.64rem;
  letter-spacing: 0.11em;
`,lz=V.strong`
  color: var(--gray-100);
  font-size: 1.16rem;
  font-weight: 600;
  letter-spacing: -0.02em;
`,uz=V.section`
  padding: 4.5rem 0 0;

  @media (max-width: 768px) {
    padding-top: 3.5rem;
  }
`,cz=V.div`
  margin-bottom: 1.2rem;
  color: var(--gray-400);
  font-family: var(--font-en);
  font-size: 0.68rem;
  font-weight: 500;
  letter-spacing: 0.13em;
`,fz=V.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
`,dz=V.span`
  padding: 0.58rem 0.9rem;
  border: 1px solid rgba(133, 129, 133, 0.12);
  border-radius: 999px;
  background: rgba(255, 251, 253, 0.38);
  color: var(--gray-400);
  font-size: 0.78rem;
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  transition: 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    color: var(--gray-100);
    border-color: rgba(133, 129, 133, 0.3);
    background: rgba(251, 246, 249, 0.75);
  }
`,_l=V(De.article)`
  min-width:0; max-width:100%; overflow-wrap:anywhere;
  && { border:var(--clay-border); border-radius:28px; background:var(--surface-neutral); box-shadow:var(--clay-shadow); backdrop-filter:none; }

  border: 1px solid rgba(255, 251, 253, 0.72);
  border-radius: 24px;
  background: linear-gradient(
    145deg,
    rgba(255, 251, 253, 0.66),
    rgba(251, 246, 249, 0.46)
  );
  box-shadow:
    0 16px 40px rgba(99, 99, 99, 0.06),
    0 4px 14px rgba(133, 129, 133, 0.08);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
`,fd=V.h3`
  overflow-wrap:anywhere;
  @media(max-width:480px) { && { font-size:1.08rem; line-height:1.55; } }

  color: var(--gray-100);
  font-size: 1.22rem;
  line-height: 1.45;
  letter-spacing: -0.03em;
  word-break: keep-all;
`,c0=V.p`
  margin-top: 0.75rem;
  color: var(--gray-400);
  font-size: 0.86rem;
  line-height: 1.75;
  word-break: keep-all;
`,dd=V.ul`
  display: flex;
  flex-direction: column;
  gap: 0.55rem;
  margin-top: 1rem;
`,hd=V.li`
  position: relative;
  padding-left: 1rem;
  color: var(--gray-100);
  font-size: 0.84rem;
  line-height: 1.7;
  word-break: keep-all;

  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0.68rem;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: rgba(133, 129, 133, 0.9);
  }
`,n2=V.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.45rem;
  margin-top: 1.2rem;
`,i2=V.span`
  padding: 0.4rem 0.65rem;
  border: 1px solid rgba(133, 129, 133, 0.13);
  border-radius: 999px;
  background: rgba(255, 251, 253, 0.45);
  color: var(--gray-400);
  font-family: var(--font-en);
  font-size: 0.67rem;
`,hz=V.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1rem;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 560px) {
    grid-template-columns: minmax(0, 1fr);
  }
`,pz=V(_l)`
  &&&& { background:var(--surface-blue); }
  &&&&:nth-child(3n+2) { background:var(--surface-mint); }
  &&&&:nth-child(3n) { background:var(--surface-peach); }

  min-height: 235px;
  padding: 1.5rem;
  transition: 0.25s ease;

  &:hover {
    transform: translateY(-4px);
    border-color: rgba(133, 129, 133, 0.28);
  }
`,mz=V.span`
  display: block;
  margin-bottom: 2rem;
  color: var(--primary-color);
  font-family: var(--font-en);
  font-size: 0.66rem;
  font-weight: 600;
  letter-spacing: 0.08em;
`,gz=V.h3`
  color: var(--gray-100);
  font-family: var(--font-en);
  font-size: 1rem;
  font-weight: 600;
`,yz=V.p`
  margin-top: 0.55rem;
  color: var(--gray-400);
  font-size: 0.85rem;
  line-height: 1.75;
  word-break: keep-all;
`,vz=V(_l)`
  &&&& { background:var(--surface-blue); }
  &&&&:nth-child(3n+2) { background:var(--surface-mint); }
  &&&&:nth-child(3n) { background:var(--surface-peach); }

  padding: 2.2rem;

  @media (max-width: 560px) {
    padding: 1.4rem;
  }
`,xz=V.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: 2rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid rgba(133, 129, 133, 0.15);

  @media (max-width: 650px) {
    grid-template-columns: minmax(0, 1fr);
    gap: 1rem;
  }
`,bz=V.h3`
  color: var(--gray-100);
  font-size: clamp(1.55rem, 3vw, 2rem);
  letter-spacing: -0.04em;
`,_z=V.p`
  margin-top: 0.45rem;
  color: var(--gray-400);
  font-family: var(--font-en);
  font-size: 0.82rem;
`,wz=V.div`
  text-align: right;
  color: var(--gray-400);
  font-family: var(--font-en);
  font-size: 0.8rem;

  span {
    display: inline-flex;
    margin-top: 0.65rem;
    padding: 0.35rem 0.62rem;
    border-radius: 999px;
    background: rgba(133, 129, 133, 0.1);
    color: var(--primary-color);
    font-size: 0.64rem;
    font-weight: 600;
  }

  @media (max-width: 650px) {
    text-align: left;
  }
`,Sz=V.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: 2rem;
  margin-top: 1.5rem;
`,Tz=V.p`
  color: var(--gray-100);
  font-size: 0.95rem;
  line-height: 1.85;
  word-break: keep-all;
`,Az=V.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0.65rem;
`,pd=V.div`
  padding: 0.9rem;
  border: 1px solid rgba(133, 129, 133, 0.11);
  border-radius: 14px;
  background: rgba(255, 251, 253, 0.4);

  span {
    display: block;
    color: var(--gray-400);
    font-family: var(--font-en);
    font-size: 0.6rem;
    letter-spacing: 0.07em;
  }

  strong {
    display: block;
    margin-top: 0.4rem;
    color: var(--gray-100);
    font-size: 0.86rem;
    line-height: 1.45;
  }
`,Ez=V.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1rem;

  @media (max-width: 800px) {
    grid-template-columns: minmax(0, 1fr);
  }
`,f0=V(ia)`
  min-width:0; line-height:1.6; overflow-wrap:anywhere;
  span { flex-shrink:0; }
  @media(max-width:480px) { &&& { padding:.85rem; font-size:.8rem; } }

  &&& { background:var(--clay-cream); border:var(--clay-border); border-radius:18px; box-shadow:inset 2px 2px 5px rgba(255,255,255,.9),3px 4px 9px rgba(90,96,78,.08); color:var(--ink); }
  &&& span { background:var(--clay-mint); border-radius:50%; box-shadow:inset 1px 1px 3px rgba(255,255,255,.6); }

  && { border-radius:12px; border:1px solid var(--sage); background:transparent; color:var(--ink); }
  &&:hover { background:var(--jet-stream); }
  && span { background:var(--jet-stream); border-radius:3px; }

  display: flex; align-items: center; justify-content: space-between; gap: 1rem;
  margin-top: 1.5rem; padding: 1rem 1.1rem; border: 1px solid rgba(133, 129, 133,.35);
  border-radius: 12px; background: rgba(255, 251, 253,.6); color: #3e5149;
  font-size: .85rem; font-weight: 600; transition: background .2s, border-color .2s;
  span { display:grid; place-items:center; width:30px; height:30px; border-radius:50%; background:#f3d3c9; font-size:1.15rem; }
  &:hover { background:#f5e6c8; border-color:#64736b; }
`,Cz=V(_l)`
  &&&& { background:var(--surface-blue); }
  &&&&:nth-child(4n+2) { background:var(--surface-mint); }
  &&&&:nth-child(4n+3) { background:var(--surface-peach); }
  &&&&:nth-child(4n+4) { background:var(--surface-neutral); }

  &&& { border:var(--clay-border); border-radius:28px; box-shadow:var(--clay-shadow); background:var(--clay-cream); }
  &&&:nth-child(4n+2) { background:#e1ece5; }
  &&&:nth-child(4n+3) { background:#f5ded4; }
  &&&:nth-child(4n+4) { background:#dfedf0; }

  && { border-radius:24px; border:1px solid var(--vanilla); background:var(--paper); box-shadow:0 10px 20px rgba(78, 81, 85,.06); }
  &:nth-child(4n+1) { background:#e4eddd; }
  &:nth-child(4n+2) { background:#f7edda; }
  &:nth-child(4n+3) { background:#f7e4dc; }
  &:nth-child(4n+4) { background:#e3eef0; }

  position: relative;
  padding: 1.7rem;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 1.4rem;
    bottom: 1.4rem;
    width: 2px;
    background: rgba(133, 129, 133, 0.72);
    border-radius: 999px;
  }
`,Rz=V.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1rem;
`,Mz=V.span`
  display:flex; align-items:center; gap:.5rem;
  flex-shrink: 0;
  color: rgba(133, 129, 133, 0.55);
  font-family: var(--font-en);
  font-size: 1.8rem;
  font-weight: 700;
  line-height: 1;
`,Dz=V.div`
  margin-top: 1.25rem;
  padding: 0.95rem 1rem;
  border: 1px solid rgba(133, 129, 133, 0.12);
  border-radius: 14px;
  background: rgba(133, 129, 133, 0.06);
  color: var(--gray-100);
  font-size: 0.8rem;
  font-weight: 600;
  line-height: 1.6;
`,jz=V.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0.9rem;

  @media (max-width: 700px) {
    grid-template-columns: minmax(0, 1fr);
  }
`,kz=V(_l)`
  &&&& { background:var(--surface-blue); }
  &&&&:nth-child(4n+2) { background:var(--surface-mint); }
  &&&&:nth-child(4n+3) { background:var(--surface-peach); }
  &&&&:nth-child(4n+4) { background:var(--surface-neutral); }

  &&& { border:var(--clay-border); border-radius:28px; box-shadow:var(--clay-shadow); background:var(--clay-cream); }
  &&&:nth-child(4n+2) { background:#e1ece5; }
  &&&:nth-child(4n+3) { background:#f5ded4; }
  &&&:nth-child(4n+4) { background:#dfedf0; }

  && { border-radius:24px; border:1px solid var(--vanilla); background:var(--paper); }

  padding: 1.35rem;
`,Oz=V.div`
  display: grid;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  gap: 1rem;

  @media (max-width: 800px) {
    grid-template-columns: minmax(0, 1fr);
  }
`,zz=V(_l)`
  @media(max-width:480px) { && { padding:1.25rem; } }

  &&&& { background:var(--surface-blue); }
  &&&&:nth-child(3n+2) { background:var(--surface-mint); }
  &&&&:nth-child(3n) { background:var(--surface-peach); }

  grid-column: ${({$wide:n})=>n?"1 / -1":"auto"};
  padding: 1.7rem;

  @media (max-width: 800px) {
    grid-column: auto;
  }
`,Nz=V.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.45rem;
  margin-top: 1.2rem;
`,Pz=V.span`
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  color: var(--gray-100);
  font-size: 0.76rem;

  &:not(:last-child)::after {
    content: "→";
    color: rgba(133, 129, 133, 0.65);
  }
`,Lz=V.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1rem;

  @media (max-width: 700px) {
    grid-template-columns: minmax(0, 1fr);
  }
`,Bz=V(_l)`
  &&&& { background:var(--surface-blue); }
  &&&&:nth-child(3n+2) { background:var(--surface-mint); }
  &&&&:nth-child(3n) { background:var(--surface-peach); }

  padding: 1.5rem;
`,Vz=V.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 0.8rem;
  color: var(--gray-400);
  font-family: var(--font-en);
  font-size: 0.72rem;

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 0.3rem;
  }
`,Uz=V.div`
  position: relative;
  margin-top: 5rem;
  padding: 3rem;
  overflow: hidden;
  border: 1px solid rgba(255, 251, 253, 0.65);
  border-radius: 26px;
  background: linear-gradient(
    135deg,
    rgba(255, 251, 253, 0.54),
    rgba(249, 220, 229, 0.58)
  );
  box-shadow:
    0 16px 40px rgba(99, 99, 99, 0.06),
    0 5px 18px rgba(133, 129, 133, 0.09);

  &::after {
    content: "";
    position: absolute;
    width: 210px;
    height: 210px;
    right: -70px;
    top: -100px;
    border-radius: 50%;
    background: rgba(133, 129, 133, 0.12);
  }

  h2,
  p {
    position: relative;
    z-index: 2;
  }

  h2 {
    margin-bottom: 0.8rem;
    color: var(--gray-100);
    font-size: clamp(1.5rem, 3vw, 2.2rem);
    letter-spacing: -0.04em;
  }

  p {
    max-width: 780px;
    color: var(--gray-400);
    font-size: 0.9rem;
    line-height: 1.8;
    word-break: keep-all;
  }

  @media (max-width: 480px) {
    margin-top: 3.5rem;
    padding: 1.8rem 1.35rem;
    border-radius: 20px;
  }
`,Hz=[["EXPERIENCE","2024.01 ~ ing [2+ Years]"],["MAIN ROLE","Frontend"],["SCOPE","Full-cycle"],["TEAM","Lead · QA"]],Yz=["Vue.js","Nuxt.js","React","TypeScript","REST API","WebSocket","TradingView","ZingChart","Android WebView","Figma","Payment / Subscription","Authorization","Docker","Nginx","Team Lead","QA"],Gz=[{name:"Frontend Architecture",description:"신규 프로젝트의 라우팅·인증·API 연동 구조와 공통 컴포넌트를 설계하고, 유지보수와 재사용을 고려해 초기 프론트엔드 구조를 구성합니다."},{name:"Business Logic",description:"인증·결제·구독·할인·권한처럼 사용자 상태와 서비스 정책이 맞물리는 핵심 비즈니스 로직을 화면과 API 흐름에 연결합니다."},{name:"Legacy & Refactoring",description:"외주·기존 프로젝트를 인수해 코드를 분석하고 신규 기능을 안정적으로 추가하며, 복잡한 구조를 기능별 책임으로 분리해 개선합니다."},{name:"Data & Visualization",description:"REST API·WebSocket 데이터를 화면에 연결하고 TradingView·ZingChart 등을 활용해 실시간·금융 데이터를 시각화합니다."},{name:"UI Implementation",description:"별도 퍼블리셔 없이 Figma 시안을 기반으로 직접 UI를 구현하고 PC·Mobile·Android WebView 환경에 맞춰 반응형으로 대응합니다."},{name:"Team Lead & QA",description:"프론트엔드 업무 분배·일정 조율·지연 이슈 대응을 진행하고, 기능 오류와 예외 상황을 직접 확인하며 자체 QA까지 수행합니다."},{name:"Problem Solving & Ownership",description:"문제가 발생했을 때 화면 코드에 한정하지 않고 상태 관리·라우팅·인증·API·데이터 흐름·렌더링 및 개발 환경까지 범위를 넓혀 원인을 추적합니다. 병목과 기능 책임을 구분해 적절한 해결 방법을 선택하고, 필요한 경우 공통 구조 개선과 성능 최적화까지 연결합니다."}],Xz=["Vue.js·Nuxt.js 기반 사용자 및 관리자 페이지 개발","신규 기능 개발 시 상태 관리·라우팅·API 흐름까지 고려해 기능 구조 설계","프로젝트별 초기 구조 설계, Git 저장소 연결과 테스트·운영 환경 구성","버튼·카드·모달 등 재사용 가능한 공통 컴포넌트 설계·구현","결제·구독·할인·사용자 권한 및 접근 제어 로직 구현","REST API·WebSocket 연동 및 금융 데이터 시각화","외주·운영 서비스 인수, 리팩토링, 컨버팅 및 전면 리뉴얼","별도 퍼블리셔 없이 Figma 기반 UI 직접 구현","사용자 로딩 성능과 개발 환경의 병목을 구분해 성능·빌드 환경 개선","Docker·Nginx 기반 빌드·배포와 운영 환경 대응","팀 업무 분배·일정 관리·오류 분석·자체 QA"],fg=[{title:"Nuxt 기반 가상자산 서비스 인수 및 구조 개선",projectId:102,subtitle:"외주 프로젝트 인수 · 인증 · 결제 · 권한 · 운영",bullets:["외주 업체가 개발하던 대규모 Nuxt 프로젝트를 인수해 기존 코드와 실행 구조 분석","Access Token 만료 시 Refresh Token 재발급 후 기존 요청을 재처리하는 인증 흐름 구현","패키지·구독·할인·결제 API 및 결제 완료 이후 상태 처리 개발","사용자 구독 상태·권한 유효기간에 따른 페이지 및 기능 접근 제어 구현","Docker·Nginx 기반 빌드 및 배포 버전 관리"],tags:["Nuxt","Vue","Auth","Payment","Docker","Nginx"],highlight:"기존 코드를 빠르게 파악해 운영 중인 서비스에 신규 기능을 안정적으로 연결한 경험"},{title:"교육 플랫폼 신규 구축 및 프론트엔드 구조 설계",projectId:101,subtitle:"프로젝트 설계 · Git · 테스트/운영 환경 · 공통 UI",bullets:["로그인·회원가입·수강신청·마이페이지 및 관리자 기수·출석 화면 개발","프로젝트 설계부터 Git 저장소 연결, 테스트 서버·운영 서버 연결까지 담당","초기 라우터·로그인 상태·API 연동 구조와 버튼·카드·모달 공통 컴포넌트 구현","별도 퍼블리셔 없이 Figma 디자인 시안을 기준으로 UI 직접 구현","Access/Refresh Token 인증 흐름 및 로그인 상태별 라우터 접근 제어 구성","코드 컨벤션과 Oxfmt 포맷팅 환경을 도입해 코드 작성 기준 정리"],tags:["Vue","프로젝트 설계","Git","공통 컴포넌트","REST API","배포 환경"],highlight:"설계·저장소·테스트/운영 환경 연결부터 공통 UI와 서비스 화면까지 구축"},{title:"가상자산 데이터 시각화 대시보드 개발",projectId:103,subtitle:"TradingView · ZingChart · Responsive Data UI",bullets:["TradingView·ZingChart를 활용해 총 8개의 차트와 2개의 데이터 리스트 구현","API 데이터 구조를 화면 요구사항에 맞춰 가공하고 각 차트에 연결","PC와 모바일 환경을 고려한 반응형 데이터 UI 구성","짧은 일정 안에서 라이브러리 실제 사용 코드를 분석해 필요한 기능을 적용"],tags:["TradingView","ZingChart","REST API","Responsive","Data"],highlight:"Chart 8 · Data List 2 — 결과물이 수치로 명확하게 남는 데이터 시각화 프로젝트"},{title:"운영 서비스 전면 리뉴얼 및 권한·결제 구조 개선",projectId:107,subtitle:"Refactoring · State Flow · Authorization · Payment",bullets:["기존 서비스의 권한 및 결제 시스템을 변경된 정책 기준으로 전면 재검토","사용자 구독 상태·권한 기한에 따른 접근 제어 구조 재정비","패키지·결제 시스템의 데이터 흐름과 상태 관리 구조 변경","복잡하게 연결된 권한·결제 로직과 컴포넌트 책임을 분리해 유지보수성 개선"],tags:["Nuxt","Refactoring","Authorization","Payment","State"],highlight:"신규 개발보다 더 어려운 운영 코드의 구조를 분석하고 정책 변경에 대응하기 쉬운 형태로 개선"}];fg.unshift(...fg.splice(1,1));const qz=[{title:"Android WebView 서비스",projectId:106,bullets:["알림 활성화·수신 항목 등록 기능 개발","Vue I18n 기반 다국어 환경 구성","구독·권한 상태별 페이지 및 기능 접근 제어"]},{title:"관리자 조직도 기능",projectId:108,bullets:["회원 추천·조직 구조 관리 기능 개발","상위 회원 변경 시 하위 조직 이동 로직 적용","검색·선택 노드 강조·자동 확대를 통해 관리자 사용성 개선"]},{title:"서비스 컨버팅",projectId:109,bullets:["기존 Nuxt 서비스 구조와 기능을 새로운 서비스 정책에 맞게 변환","공통 코드는 재사용하고 UI·권한·결제 정책 차이는 분리","두 서비스를 각각 유지보수할 수 있도록 구조화"]},{title:"공통 컴포넌트 리팩토링",projectId:110,bullets:["운영 중 확인된 중복 코드와 유지보수가 어려운 구조 개선","공통 컴포넌트를 세분화하고 재사용 범위를 확대","화면 간 일관성과 이후 개발 효율 향상"]}],Fz=["User Flow","Process Flow","Figma","ERD","API Design","Back-end","Front-end","QA","User Feedback","Improvement"],$z=V.div`
  margin-top: 1.5rem;
  h3 { margin-bottom: 1rem; color: var(--gray-100); font-size: 1.1rem; }
  .table-scroll { width:100%; max-width:100%; min-width:0; overflow-x:auto; }
  table { width: 100%; min-width: 340px; border-collapse: collapse; font-size: .85rem; color: var(--gray-100); }
  th, td { text-align: left; padding: .8rem .6rem; border-bottom: 1px solid rgba(99,99,99,.2); line-height: 1.6; }
  th { font-weight: 700; }
  p { margin-top: 1rem; color: var(--gray-400); font-size: .85rem; line-height: 1.9; }
`,Kz=[{key:"backend",wide:!0,eyebrow:"PRACTICAL BACK-END EXPERIENCE",title:"실무에서 직접 개발한 Back-end & System Integration",text:"프론트엔드를 주 업무로 하면서도 서비스 운영과 외부 시스템 연동에 필요한 백엔드 기능을 실무에서 직접 개발했습니다. 화면에서 끝나는 개발이 아니라 DB부터 외부 API, 자동화 작업까지 이어지는 데이터 흐름을 함께 이해하고 대응할 수 있습니다.",bullets:["DB 데이터를 조회·가공해 외부 업체에서 사용할 수 있는 데이터 구조로 변환","민감한 사용자 정보를 암호화해 외부 시스템으로 전달하는 연동 로직 구현","Crontab 기반 정기 데이터 전송 작업 자동화 및 실행 결과 로그 관리","외부 API에서 전달받은 암호화 데이터를 서버에서 복호화하고 프론트엔드용 데이터로 가공","프론트엔드 API 연동 과정에서 필요한 백엔드 기능 수정 및 오류 원인 분석","Front-end와 Back-end 양쪽 흐름을 확인하며 API·데이터 연동 문제 대응"],tags:["Back-end","DB","API Integration","Encryption","Crontab","Troubleshooting"]},{key:"yummyyagi",eyebrow:"SUB EXPERIENCE / YUMMYYAGI",title:"설계부터 Front-end · Back-end · QA까지 경험한 Full-cycle Project",text:"AI 기반 동화 생성 서비스 ‘야미야기’에서는 서비스 기획·설계부터 Front-end와 Back-end 구현, QA와 사용자 피드백 반영까지 전체 개발 사이클을 경험했습니다. 현업 개발자가 참여한 최종 프로젝트 평가에서 1위를 기록했습니다.",bullets:["사용자 행동과 화면 이동을 기준으로 User Flow 설계","기능별 처리 과정과 시스템 동작을 정리한 Process Flow 설계","Figma 기반 화면 구조와 기능 흐름 구체화","서비스 데이터 구조 정의 및 ERD 설계","Front-end와 Back-end 데이터 흐름을 고려한 REST API 설계","Python·Django 기반 Back-end와 Front-end 개발 모두 참여","Google OAuth 라이브러리 오류를 분석하고 별도 로직으로 소셜 로그인 구현","기능 QA·예외 상황 검증 후 실제 사용자 피드백을 수집하고 개선 사항 반영"],tags:["User Flow","Process Flow","ERD","API Design","Python","Django","QA"]},{key:"performance",eyebrow:"PERFORMANCE & OPTIMIZATION",title:"Vue Router Lazy Loading으로 메인 JS 번들 약 77.9% 감소",text:"Vue 3·Vite 프로젝트에서 500KB 초과 청크 경고를 분석했습니다. 페이지 컴포넌트의 정적 import를 Dynamic Import로 바꾸고, 54개 페이지 및 하위 화면에 Route-level Lazy Loading을 적용해 메인 JS를 1,414.26KB에서 약 312KB로 분리했습니다.",bullets:["Vue Router 페이지 컴포넌트를 () => import(...) 방식으로 변경해 페이지 접근 시 필요한 코드를 비동기 로드","54개 페이지·하위 화면을 코드 분할해 78개 청크로 구성하고 기존 라우팅 경로·리다이렉트·인증 로직 유지","프로덕션 빌드 기준 메인 JS 약 77.9% 감소, 메인 gzip 336.68KB → 75.19KB, 500KB 초과 경고 해소","초기 화면 렌더링에 필요한 핵심 이미지는 우선 로드하고, 즉시 필요하지 않은 이미지는 Lazy Loading으로 분리해 초기 로딩 부담 감소","CRA 기반 프로젝트를 Vite로 전환해 개발 서버 구동과 HMR 환경을 개선하고 반복 개발 시 발생하는 대기 시간 감소","node_modules·.git·빌드 산출물 등 개발에 불필요한 경로를 파일 감시 대상에서 제외해 개발 환경의 리소스 사용 감소","Production Build에서 불필요한 console 코드를 제거해 운영 빌드에 개발용 로그가 포함되지 않도록 정리","단순히 최적화 기법을 적용하는 데 그치지 않고 사용자 로딩과 개발 환경의 병목을 구분한 뒤 각 문제에 맞는 개선 방법 적용"],tags:["Vue 3","Vue Router","Dynamic Import","Code Splitting","Lazy Loading","Vite","HMR","Build Optimization","Performance","Troubleshooting"]},{key:"qa",eyebrow:"QA & USER FEEDBACK",title:"구현 이후 실제 사용성을 다시 검증",text:"기능 구현을 완료로 보지 않고 실제 사용자 흐름에서 오류와 불편을 확인한 뒤 개선까지 연결하는 과정을 경험했습니다.",bullets:["기능 QA 및 예외 상황 검증","주요 사용자 흐름과 사용성 직접 확인","사용자 테스트 및 피드백 수집","피드백을 바탕으로 기능·UI 개선 항목을 정리하고 반영","수정 이후 재검증을 통해 정상 동작과 개선 여부 확인"],tags:["QA","User Test","Feedback","UX Improvement","Iteration"]}],Qz=[{company:"내일배움캠프",role:"Web Development Bootcamp",date:"2023.08 ~ 2023.12",text:"Python·Django를 중심으로 웹 개발을 학습하고 개인·팀 프로젝트를 통해 Figma, ERD, API 설계, Front-end·Back-end 개발까지 웹 서비스 개발 전 과정을 경험했습니다."},{company:"씨인스원보험컨설팅 주식회사",role:"Insurance Administration",date:"2022.01 ~ 2023.04",text:"보험 해지 환급 관련 업무를 담당했습니다."}],Iz={hidden:{opacity:0,y:34,scale:.98},visible:{opacity:1,y:0,scale:1,transition:{duration:.5,ease:"easeOut"}}},r2=typeof navigator<"u"&&/KAKAOTALK/i.test(navigator.userAgent),Zz={variants:Iz,initial:"hidden",animate:r2?"visible":void 0,whileInView:r2?void 0:"visible",viewport:{once:!0,amount:.1}},Wz=()=>{const n=X5("career"),e=z.useRef(null),r=z.useRef(null),a=z.useRef([]),o=z.useRef(null),u=Zz;return Ei(()=>{const c=window.matchMedia("(prefers-reduced-motion: reduce)").matches,f=r.current,h=a.current.filter(y=>!!y);if(c){f&&de.set(f,{autoAlpha:0}),o.current&&de.set(o.current,{autoAlpha:0});return}const p=document.body.style.overflow;if(n||(f&&de.set(f,{autoAlpha:0}),o.current&&de.set(o.current,{autoAlpha:0})),n){document.body.style.overflow="hidden";const y=10,x=h.length,v=.18,w=.12,S=.82,C=Array.from({length:x},()=>Array.from({length:y},()=>({value:100}))),E=()=>{h.forEach((O,j)=>{const P=C[j];let D=`M 0 ${P[0].value} C`;for(let B=0;B<y-1;B+=1){const G=(B+1)/(y-1)*100,F=G-100/(y-1)/2;D+=` ${F} ${P[B].value}`,D+=` ${F} ${P[B+1].value}`,D+=` ${G} ${P[B+1].value}`}D+=" V 0 H 0",O.setAttribute("d",D)})};E(),f&&de.set(f,{autoAlpha:1}),o.current&&de.set(o.current,{autoAlpha:1,y:0});const M=Array.from({length:y},()=>Math.random()*v),R=de.timeline({defaults:{ease:"power2.inOut"},onUpdate:E,onComplete:()=>{document.body.style.overflow=p,f&&de.set(f,{autoAlpha:0}),ze.refresh()}});o.current&&R.to(o.current,{opacity:0,y:-8,duration:.28,ease:"power2.out"},.18),C.forEach((O,j)=>{const P=w*(x-j-1);O.forEach((D,B)=>{R.to(D,{value:0,duration:S,ease:"power2.inOut"},.28+M[B]+P)})})}return de.timeline({delay:n?.82:0,defaults:{ease:"power3.out"}}).to({},{duration:.45}).from(".career-title",{opacity:0,y:38,duration:.75},"-=0.12").from(".career-description",{opacity:0,y:18,duration:.55},"-=0.38").from(".summary-item",{opacity:0,y:18,scale:.98,stagger:.07,duration:.45},"-=0.28"),de.utils.toArray(".section-line").forEach(y=>{de.from(y,{scaleX:0,duration:.9,ease:"power2.out",scrollTrigger:{trigger:y,start:"top 92%"}})}),()=>{document.body.style.overflow=p}},{scope:e}),b.jsxs(ez,{ref:e,children:[b.jsxs(J6,{ref:o,"aria-hidden":"true",style:n?void 0:{display:"none"},children:[b.jsx("span",{}),"경력"]}),b.jsxs(W6,{ref:r,className:"shape-overlays",viewBox:"0 0 100 100",preserveAspectRatio:"none","aria-hidden":"true",children:[b.jsxs("defs",{children:[b.jsxs("linearGradient",{id:"careerOverlayBack",x1:"0%",y1:"0%",x2:"0%",y2:"100%",children:[b.jsx("stop",{offset:"0%",stopColor:"#C3DDE1"}),b.jsx("stop",{offset:"100%",stopColor:"#BFD9CD"})]}),b.jsxs("linearGradient",{id:"careerOverlayFront",x1:"0%",y1:"0%",x2:"0%",y2:"100%",children:[b.jsx("stop",{offset:"0%",stopColor:"#F3C7B6"}),b.jsx("stop",{offset:"100%",stopColor:"#F2D1CC"})]})]}),b.jsx("path",{ref:c=>{a.current[0]=c},className:"shape-overlays__path",fill:"url(#careerOverlayBack)"}),b.jsx("path",{ref:c=>{a.current[1]=c},className:"shape-overlays__path",fill:"url(#careerOverlayFront)"})]}),b.jsxs(tz,{children:[b.jsxs(nz,{children:[b.jsxs(iz,{className:"career-title",children:["서비스 전체 흐름을 이해하며",b.jsx("br",{}),b.jsx("strong",{children:"프론트엔드를 설계하고 개선합니다."})]}),b.jsxs(rz,{className:"career-description",children:["백엔드 개발자로 시작해 프론트엔드로 영역을 확장했고, 현재는 Vue.js·Nuxt.js 기반 서비스 개발을 중심으로 일하고 있습니다. 단순 화면 구현에 그치지 않고 요구사항과 데이터 흐름을 분석해 ",b.jsx("strong",{children:"라우팅·인증·상태 관리·API 연동 구조를 설계"}),"하며, 결제·권한과 같은 비즈니스 로직부터 리팩토링·오류 분석·QA까지 서비스 전체 흐름을 기준으로 문제를 해결합니다."]}),b.jsxs("div",{className:"career-friends",children:[b.jsx(Us,{tone:"blue",size:54,round:!0}),b.jsx(Us,{tone:"peach",size:42})]}),b.jsx(az,{children:Hz.map(([c,f])=>b.jsxs(sz,{className:"summary-item",children:[b.jsx(oz,{children:c}),b.jsx(lz,{children:f})]},`${c}-${f}`))})]}),b.jsxs(uz,{children:[b.jsx(cz,{children:"사용 기술"}),b.jsx(fz,{children:Yz.map(c=>b.jsx(dz,{children:c},c))})]}),b.jsxs(jo,{children:[b.jsx(ko,{className:"section-line"}),b.jsxs(Oo,{children:[b.jsx(zo,{children:b.jsx(No,{children:"핵심 역량"})}),b.jsx(Po,{children:"기술 이름보다 실제 프로젝트에서 반복해서 사용해 온 문제 해결 역량을 중심으로 정리했습니다."})]}),b.jsx(hz,{children:Gz.map((c,f)=>b.jsxs(pz,{...u,children:[b.jsx(mz,{children:String(f+1).padStart(2,"0")}),b.jsx(gz,{children:c.name}),b.jsx(yz,{children:c.description})]},c.name))})]}),b.jsxs(jo,{children:[b.jsx(ko,{className:"section-line"}),b.jsxs(Oo,{children:[b.jsx(zo,{children:b.jsx(No,{children:"경력 요약"})}),b.jsx(Po,{children:"프로젝트 전반에서 반복해 맡은 설계·공통 UI·개발 환경 구성과 운영 역할을 정리했습니다."})]}),b.jsxs(vz,{...u,children:[b.jsxs(xz,{children:[b.jsxs("div",{children:[b.jsx(bz,{children:"블록스퀘어랩스"}),b.jsx(_z,{children:"Frontend Developer · API Integration · QA"})]}),b.jsxs(wz,{children:["2024.01.15 ~ 재직중",b.jsx("br",{}),b.jsx("span",{children:"CURRENT"})]})]}),b.jsxs(Sz,{children:[b.jsxs("div",{children:[b.jsx(Tz,{children:"백엔드 개발자로 입사한 뒤 프론트엔드로 역할을 확장했으며, 현재는 Vue.js·Nuxt.js 기반 서비스의 프론트엔드를 주 업무로 담당하고 있습니다. 사용자·관리자 화면 구현뿐 아니라 프로젝트 초기 구조, 인증·라우팅·상태 관리·API 연동 방식과 공통 컴포넌트의 책임을 설계하며, 결제·구독·권한처럼 여러 상태가 연결되는 비즈니스 로직도 함께 구현합니다. 운영 중 문제가 발생하면 화면 코드에 한정하지 않고 API·데이터·백엔드 흐름까지 확인해 원인을 추적하며, 필요한 경우 구조 개선과 QA까지 이어서 처리합니다."}),b.jsx(dd,{children:Xz.map(c=>b.jsx(hd,{children:c},c))})]}),b.jsxs(Az,{children:[b.jsxs(pd,{children:[b.jsx("span",{children:"PROJECT TYPE"}),b.jsx("strong",{children:"신규 구축 · 인수 · 리뉴얼"})]}),b.jsxs(pd,{children:[b.jsx("span",{children:"PLATFORM"}),b.jsx("strong",{children:"PC · Mobile · WebView"})]}),b.jsxs(pd,{children:[b.jsx("span",{children:"SERVICE LOGIC"}),b.jsx("strong",{children:"Auth · Payment · Permission"})]}),b.jsxs(pd,{children:[b.jsx("span",{children:"COLLABORATION"}),b.jsx("strong",{children:"Lead · Schedule · QA"})]})]})]})]})]}),b.jsxs(jo,{children:[b.jsx(ko,{className:"section-line"}),b.jsxs(Oo,{children:[b.jsx(zo,{children:b.jsx(No,{children:"대표 프로젝트"})}),b.jsx(Po,{children:"회사에서 담당한 실무 프로젝트의 역할과 핵심 구현입니다. 구체적인 내용은 각 프로젝트 상세에서 확인할 수 있습니다."})]}),b.jsx(Ez,{children:fg.map((c,f)=>b.jsxs(Cz,{...u,children:[b.jsxs(Rz,{children:[b.jsxs("div",{children:[b.jsx(fd,{children:c.title}),b.jsx(c0,{children:c.subtitle})]}),b.jsxs(Mz,{children:[b.jsx(Us,{tone:f%2===0?"mint":"peach",size:38}),String(f+1).padStart(2,"0")]})]}),b.jsx(dd,{children:c.bullets.map(h=>b.jsx(hd,{children:h},h))}),b.jsx(Dz,{children:c.highlight}),b.jsxs(f0,{to:`/personal/work/${c.projectId}`,children:["구현 내용과 담당 범위",b.jsx("span",{"aria-hidden":"true",children:"↗"})]}),b.jsx(n2,{children:c.tags.map(h=>b.jsx(i2,{children:h},h))})]},c.title))})]}),b.jsxs(jo,{children:[b.jsx(ko,{className:"section-line"}),b.jsxs(Oo,{children:[b.jsx(zo,{children:b.jsx(No,{children:"그 외 실무 경험"})}),b.jsx(Po,{children:"대표 프로젝트와 겹치지 않으면서 실무 범위를 보여주는 경험은 짧게 묶었습니다."})]}),b.jsx(jz,{children:qz.map(c=>b.jsxs(kz,{...u,children:[b.jsx(fd,{children:c.title}),b.jsx(dd,{children:c.bullets.map(f=>b.jsx(hd,{children:f},f))}),b.jsxs(f0,{to:`/personal/work/${c.projectId}`,children:["구현 내용과 담당 범위",b.jsx("span",{"aria-hidden":"true",children:"↗"})]})]},c.title))})]}),b.jsxs(jo,{children:[b.jsx(ko,{className:"section-line"}),b.jsxs(Oo,{children:[b.jsx(zo,{children:b.jsx(No,{children:"Supporting Experience"})}),b.jsx(Po,{children:"프론트엔드를 중심으로 일하면서 실무에서 직접 수행한 백엔드 경험을 메인으로, Full-cycle 개발·최적화·QA 경험을 함께 정리했습니다."})]}),b.jsx(Oz,{children:Kz.map(c=>b.jsxs(zz,{$wide:c.wide,...u,children:[b.jsx(fd,{children:c.title}),b.jsx(c0,{children:c.text}),b.jsx(dd,{children:c.bullets.map(f=>b.jsx(hd,{children:f},f))}),c.key==="backend"&&b.jsxs(f0,{to:"/personal/work/105",children:["데이터 집계·자동화 사례",b.jsx("span",{"aria-hidden":"true",children:"↗"})]}),c.key==="performance"&&b.jsxs($z,{children:[b.jsx("h3",{children:"페이지 단위 코드 분할 · 빌드 결과 비교"}),b.jsx("div",{className:"table-scroll",role:"region","aria-label":"번들 최적화 결과",tabIndex:0,children:b.jsxs("table",{children:[b.jsx("caption",{style:{textAlign:"left",marginBottom:".75rem"},children:"동일 프로젝트의 개선 전·후 프로덕션 빌드 기준"}),b.jsx("thead",{children:b.jsxs("tr",{children:[b.jsx("th",{scope:"col",children:"항목"}),b.jsx("th",{scope:"col",children:"개선 전"}),b.jsx("th",{scope:"col",children:"개선 후"})]})}),b.jsxs("tbody",{children:[b.jsxs("tr",{children:[b.jsx("th",{scope:"row",children:"메인 JS 번들"}),b.jsx("td",{children:"1,414.26KB"}),b.jsx("td",{children:"약 312KB"})]}),b.jsxs("tr",{children:[b.jsx("th",{scope:"row",children:"메인 gzip"}),b.jsx("td",{children:"336.68KB"}),b.jsx("td",{children:"75.19KB"})]}),b.jsxs("tr",{children:[b.jsx("th",{scope:"row",children:"전체 JS 합계"}),b.jsx("td",{children:"1,414.26KB"}),b.jsx("td",{children:"1,452.70KB"})]}),b.jsxs("tr",{children:[b.jsx("th",{scope:"row",children:"청크 구조"}),b.jsx("td",{children:"대형 번들 중심"}),b.jsx("td",{children:"78개 청크"})]}),b.jsxs("tr",{children:[b.jsx("th",{scope:"row",children:"500KB 초과 경고"}),b.jsx("td",{children:"발생"}),b.jsx("td",{children:"해소"})]})]})]})}),b.jsx("p",{children:"전체 JavaScript 합계가 감소한 결과가 아닙니다. 메인 번들을 페이지별로 나눠 초기 화면에서 내려받는 코드의 부담을 줄였습니다. 실제 LCP와 로딩 시간 개선 수치는 별도로 측정하지 않았습니다."})]}),c.key==="yummyyagi"&&b.jsx(Nz,{"aria-label":"YummyYagi development flow",children:Fz.map(f=>b.jsx(Pz,{children:f},f))}),b.jsx(n2,{children:c.tags.map(f=>b.jsx(i2,{children:f},f))})]},c.key))})]}),b.jsxs(jo,{children:[b.jsx(ko,{className:"section-line"}),b.jsxs(Oo,{children:[b.jsx(zo,{children:b.jsx(No,{children:"이전 경험"})}),b.jsx(Po,{children:"현재 개발 경력으로 이어지기 전의 교육 및 직무 경험은 필요한 내용만 간단히 정리했습니다."})]}),b.jsx(Lz,{children:Qz.map(c=>b.jsxs(Bz,{...u,children:[b.jsxs(Vz,{children:[b.jsx("span",{children:c.role}),b.jsx("span",{children:c.date})]}),b.jsx(fd,{children:c.company}),b.jsx(c0,{children:c.text})]},c.company))})]}),b.jsxs(Uz,{children:[b.jsx("h2",{children:"구현보다 한 단계 더, 문제의 구조와 끝까지 연결되는 흐름을 봅니다."}),b.jsx("p",{children:"주어진 화면을 구현하는 데 그치지 않고 기능이 서비스 안에서 어떻게 동작해야 하는지 판단해 구조를 설계하고, 문제가 발생하면 상태 관리·라우팅·API·데이터 흐름과 운영 환경까지 범위를 넓혀 원인을 추적합니다. 필요한 경우 공통 구조 개선과 성능 최적화, QA까지 연결해 같은 문제가 반복되지 않도록 해결하는 개발을 중요하게 생각합니다."})]})]})]})},Jz="/portfolio/assets/404-C6ZA4VqX.png",e9=V(De.div)`
  width: 60%;

  margin: 5vh auto;

  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;

  gap: 2rem;

  img {
    width: 60%;
    height: auto;
  }
`,a2=()=>{const n=Wa();return b.jsxs(e9,{initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},transition:{duration:.4},children:[b.jsx(De.img,{src:Jz,alt:"404 Icon",loading:"lazy",initial:{y:20,opacity:0},animate:{y:[0,-12,0],opacity:1},transition:{opacity:{duration:.4},y:{duration:2.5,repeat:1/0,ease:"easeInOut"}},whileHover:{rotate:[-2,2,-2,0],scale:1.04}}),b.jsx(De.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.3},whileHover:{scale:1.06},whileTap:{scale:.94},children:b.jsx(ku.GradientBtn,{onClick:()=>n("/"),children:"메인 페이지 ▶"})})]})},t9=V.div`
  position: fixed;
  top: 0;
  left: 0;

  width: ${({$hover:n})=>n?"52px":"32px"};
  height: ${({$hover:n})=>n?"52px":"32px"};

  border-radius: 50%;

  border: 1px solid rgba(133, 129, 133, 0.7);
  background: rgba(133, 129, 133, 0.08);

  pointer-events: none;
  z-index: 99998;

  transform: translate(-50%, -50%);

  transition:
    width 0.2s ease,
    height 0.2s ease,
    background 0.2s ease;
`,n9=()=>{const[n,e]=z.useState(!1),[r,a]=z.useState({x:0,y:0}),[o,u]=z.useState({x:0,y:0}),[c,f]=z.useState(!1);return z.useEffect(()=>{const h=window.matchMedia("(hover: hover) and (pointer: fine)"),p=()=>{e(h.matches)};return p(),h.addEventListener("change",p),()=>{h.removeEventListener("change",p)}},[]),z.useEffect(()=>{if(!n)return;const h=p=>{a({x:p.clientX,y:p.clientY})};return window.addEventListener("mousemove",h),()=>{window.removeEventListener("mousemove",h)}},[n]),z.useEffect(()=>{if(!n)return;let h;const p=()=>{u(g=>({x:g.x+(r.x-g.x)*.15,y:g.y+(r.y-g.y)*.15})),h=requestAnimationFrame(p)};return p(),()=>{cancelAnimationFrame(h)}},[r,n]),z.useEffect(()=>{if(!n)return;const h=p=>{p.target.closest("a, button, [role='button'], input, textarea, select")?f(!0):f(!1)};return document.addEventListener("mouseover",h),()=>{document.removeEventListener("mouseover",h)}},[n]),n?b.jsx(t9,{$hover:c,style:{left:o.x,top:o.y}}):null},i9=V.div`
  position: fixed;
  inset: 0;

  pointer-events: none;
  z-index: 0;

  background: radial-gradient(
    500px circle at var(--mouse-x, 50%) var(--mouse-y, 50%),
    rgba(249, 220, 229, 0.12),
    transparent 65%
  );
`,r9=()=>{const[n,e]=z.useState(!1);return z.useEffect(()=>{const r=window.matchMedia("(hover: hover) and (pointer: fine)"),a=()=>{e(r.matches)};return a(),r.addEventListener("change",a),()=>{r.removeEventListener("change",a)}},[]),z.useEffect(()=>{if(!n)return;const r=a=>{document.documentElement.style.setProperty("--mouse-x",`${a.clientX}px`),document.documentElement.style.setProperty("--mouse-y",`${a.clientY}px`)};return window.addEventListener("mousemove",r),()=>{window.removeEventListener("mousemove",r)}},[n]),n?b.jsx(i9,{}):null},a9=V.div`
  position: fixed;

  right: 2rem;
  bottom: 2rem;

  z-index: 1200;

  width: 60px;
  height: 60px;

  @media (max-width: 768px) {
    right: 1.25rem;

    bottom: calc(
      1.25rem +
      env(safe-area-inset-bottom)
    );

    width: 56px;
    height: 56px;
  }

  @media (max-width: 480px) {
    right: 1rem;

    bottom: calc(
      1rem +
      env(safe-area-inset-bottom)
    );
  }
`,Iu=V.button`
  && { background:${({$active:n})=>n?"var(--clay-mint)":"var(--surface-blue)"}; color:var(--ink); border-color:rgba(255,255,255,.85); box-shadow:var(--clay-shadow); }
  &&:nth-of-type(2) { background:${({$active:n})=>n?"var(--clay-mint)":"var(--surface-peach)"}; }
  &&:nth-of-type(3) { background:${({$active:n})=>n?"var(--clay-mint)":"var(--surface-blue)"}; }
  &&:hover { background:var(--clay-mint); color:var(--ink); border-color:#9fbcaa; }

  position: absolute;

  left: 5px;
  top: 5px;

  width: 50px;
  height: 50px;

  padding: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  border: 1px solid
    ${({$active:n})=>n?"rgba(133, 129, 133, .65)":"rgba(255, 251, 253, .7)"};

  border-radius: 50%;

  background: ${({$active:n})=>n?`
        linear-gradient(
          145deg,
          var(--mauve),
          #b68172
        )
      `:`
        rgba(251, 246, 249,
          .92
        )
      `};

  color: ${({$active:n})=>n?"var(--coal)":"var(--gray-400)"};

  box-shadow: ${({$active:n})=>n?`
        0 8px 22px
        rgba(133, 129, 133,
          .32
        )
      `:`
        0 8px 24px
        rgba(133, 129, 133,
          .16
        ),
        0 2px 5px
        rgba(
          99,
          99,
          99,
          .05
        )
      `};

  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);

  cursor: pointer;

  opacity: 0;

  transform: scale(0);

  will-change:
    transform,
    opacity;

  transition:
    background 0.25s ease,
    color 0.25s ease,
    border 0.25s ease,
    box-shadow 0.25s ease;

  &:hover {
    color: var(--coal);

    background:
      var(--primary-color);

    border-color:
      var(--primary-color);

    box-shadow:
      0 10px 27px
      rgba(133, 129, 133,
        .34
      );
  }

  &:focus-visible {
    outline:
      2px solid
      var(--primary-color);

    outline-offset: 4px;
  }

  svg {
    width: 20px;
    height: 20px;

    fill: none;

    stroke:
      currentColor;

    stroke-width: 1.8;

    stroke-linecap: round;
    stroke-linejoin: round;

    transition:
      transform 0.25s ease;
  }

  &:hover svg {
    transform: scale(1.08);
  }

  @media (max-width: 768px) {
    left: 5px;
    top: 5px;

    width: 46px;
    height: 46px;

    svg {
      width: 18px;
      height: 18px;
    }
  }
`,d0=V.span`
  position: absolute;

  /*
   * 아이콘 정중앙 기준
   */
  left: 50%;
  bottom: calc(100% + 10px);

  /*
   * 기본 상태는 살짝 아래
   */
  transform:
    translateX(-50%)
    translateY(5px);

  padding:
    0.4rem
    0.7rem;

  border:
    1px solid
    rgba(255, 251, 253,
      0.75
    );

  border-radius: 10px;

  background:
    rgba(251, 246, 249,
      0.95
    );

  color:
    var(--gray-400);

  box-shadow:
    0 6px 18px
    rgba(133, 129, 133,
      0.15
    );

  backdrop-filter:
    blur(12px);

  -webkit-backdrop-filter:
    blur(12px);

  font-size: 0.7rem;
  font-weight: 500;

  white-space: nowrap;

  opacity: 0;

  pointer-events: none;

  transition:
    opacity 0.2s ease,
    transform 0.2s ease;

  /*
   * 작은 꼬리
   */
  &::after {
    content: "";

    position: absolute;

    left: 50%;
    top: 100%;

    width: 7px;
    height: 7px;

    background:
      rgba(251, 246, 249,
        0.95
      );

    border-right:
      1px solid
      rgba(255, 251, 253,
        0.75
      );

    border-bottom:
      1px solid
      rgba(255, 251, 253,
        0.75
      );

    transform:
      translate(-50%, -50%)
      rotate(45deg);
  }

  ${Iu}:hover &,
  ${Iu}:focus-visible & {
    opacity: 1;

    transform:
      translateX(-50%)
      translateY(0);
  }

  @media (max-width: 768px) {
    display: none;
  }
`,h0=V.span`
  position: absolute;

  right: 2px;
  top: 2px;

  width: 7px;
  height: 7px;

  border-radius: 50%;

  background:
    var(--coal);

  box-shadow:
    0 0 0 2px
    var(--primary-color);
`,s9=V.button`
  && { background:${({$open:n})=>n?"var(--clay-mint)":"var(--surface-neutral)"}; color:var(--ink); border-color:${({$open:n})=>n?"#9fbcaa":"rgba(255,255,255,.85)"}; box-shadow:var(--clay-shadow); }
  &&:hover { background:${({$open:n})=>n?"#afcdbc":"var(--surface-blue)"}; }
  &&::before { border-color:${({$open:n})=>n?"rgba(84,115,98,.3)":"rgba(84,115,98,.12)"}; }

  position: absolute;

  left: 0;
  top: 0;

  z-index: 5;

  width: 60px;
  height: 60px;

  padding: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  border:
    1px solid
    rgba(255, 251, 253,
      .75
    );

  border-radius: 50%;

  color:
    var(--coal);

  background: linear-gradient(
    145deg,
    var(--mauve),
    var(--desiree)
  );

  box-shadow:
    0 12px 30px
    rgba(85, 100, 90,
      .14
    ),
    0 3px 8px
    rgba(
      99,
      99,
      99,
      .08
    );

  cursor: pointer;

  transition:
    transform 0.25s ease,
    box-shadow 0.25s ease;

  /*
   * 바깥쪽 은은한 링
   */
  &::before {
    content: "";

    position: absolute;

    inset: -6px;

    border:
      1px solid
      rgba(133, 129, 133,
        .18
      );

    border-radius: inherit;

    pointer-events: none;

    transition:
      transform 0.3s ease,
      opacity 0.3s ease;
  }

  &:hover {
    transform: scale(1.03);

    box-shadow:
      0 15px 34px
      rgba(85, 100, 90,
        .18
      );
  }

  &:hover::before {
    transform: scale(1.08);

    opacity: 0.55;
  }

  &:focus-visible {
    outline:
      2px solid
      var(--primary-color);

    outline-offset: 6px;
  }

  svg {
    width: 23px;
    height: 23px;

    fill: none;

    stroke:
      currentColor;

    stroke-width: 2.2;

    stroke-linecap: round;

    will-change: transform;
  }

  @media (max-width: 768px) {
    width: 56px;
    height: 56px;

    svg {
      width: 21px;
      height: 21px;
    }
  }
`,o9=()=>b.jsxs("svg",{viewBox:"0 0 24 24",children:[b.jsx("path",{d:"M3 11.5 12 4l9 7.5"}),b.jsx("path",{d:"M5.5 10v10h13V10"}),b.jsx("path",{d:"M9.5 20v-6h5v6"})]}),l9=()=>b.jsxs("svg",{viewBox:"0 0 24 24",children:[b.jsx("rect",{x:"4",y:"7",width:"16",height:"13",rx:"2"}),b.jsx("path",{d:"M9 7V5.5C9 4.7 9.7 4 10.5 4h3C14.3 4 15 4.7 15 5.5V7"}),b.jsx("path",{d:"M4 12h16"}),b.jsx("path",{d:"M10 12v2h4v-2"})]}),u9=()=>b.jsxs("svg",{viewBox:"0 0 24 24",children:[b.jsx("rect",{x:"3.5",y:"4",width:"17",height:"16",rx:"2"}),b.jsx("path",{d:"M3.5 8.5h17"}),b.jsx("path",{d:"m9.5 12-2 2 2 2"}),b.jsx("path",{d:"m14.5 12 2 2-2 2"})]}),c9=()=>b.jsxs("svg",{className:"fab-plus",viewBox:"0 0 24 24",children:[b.jsx("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),b.jsx("line",{x1:"5",y1:"12",x2:"19",y2:"12"})]}),f9=()=>{const n=Wa(),e=Ai(),r=z.useRef(null),a=z.useRef(null),[o,u]=z.useState(!1),c=z.useRef(!1),f=e.pathname,h=f==="/",p=f.startsWith("/personal"),g=f.startsWith("/project");Ei(()=>{var E;const v=de.utils.toArray(".radial-item"),w=(E=r.current)==null?void 0:E.querySelector(".fab-plus"),S=()=>{a.current&&a.current.kill();const M=window.matchMedia("(max-width: 768px)").matches,R=window.matchMedia("(prefers-reduced-motion: reduce)").matches,O=M?92:120,j=180,D=v.length>1?(270-j)/(v.length-1):0;de.set(v,{x:0,y:0,scale:0,opacity:0,pointerEvents:"none"}),w&&de.set(w,{rotation:0});const B=de.timeline({paused:!0,defaults:{overwrite:"auto"},onReverseComplete:()=>{de.set(v,{pointerEvents:"none"})}});v.forEach((G,F)=>{const re=(j+D*F)*(Math.PI/180),J=Math.cos(re)*O,ye=Math.sin(re)*O;B.to(G,{x:J,y:ye,scale:1,opacity:1,pointerEvents:"auto",duration:R?0:.62,ease:R?"none":"elastic.out(1, 0.5)"},R?0:F*.055)}),w&&B.to(w,{rotation:135,duration:R?0:.35,ease:R?"none":"back.out(1.7)",overwrite:"auto"},0),a.current=B,c.current?B.progress(1):B.progress(0)};S(),de.from(r.current,{opacity:0,y:18,scale:.9,duration:.65,delay:.7,ease:"back.out(1.5)",overwrite:"auto"}),window.addEventListener("resize",S);const C=M=>{var R;M.key==="Escape"&&c.current&&(c.current=!1,u(!1),(R=a.current)==null||R.reverse())};return window.addEventListener("keydown",C),()=>{var M;window.removeEventListener("resize",S),window.removeEventListener("keydown",C),(M=a.current)==null||M.kill()}},{scope:r});const y=()=>{const v=a.current;v&&(c.current?(c.current=!1,u(!1),v.reverse()):(c.current=!0,u(!0),v.play()))},x=v=>{var w;n(v),c.current&&(c.current=!1,u(!1),(w=a.current)==null||w.reverse())};return b.jsxs(a9,{ref:r,"aria-label":"빠른 페이지 이동",children:[b.jsxs(Iu,{type:"button",className:"radial-item",$active:h,onClick:()=>x("/"),"aria-label":"홈으로 이동",tabIndex:o?0:-1,children:[h&&b.jsx(h0,{}),b.jsx(o9,{}),b.jsx(d0,{children:"홈"})]}),b.jsxs(Iu,{type:"button",className:"radial-item",$active:p,onClick:()=>x("/personal"),"aria-label":"경력 페이지로 이동",tabIndex:o?0:-1,children:[p&&b.jsx(h0,{}),b.jsx(l9,{}),b.jsx(d0,{children:"경력"})]}),b.jsxs(Iu,{type:"button",className:"radial-item",$active:g,onClick:()=>x("/project"),"aria-label":"포트폴리오 페이지로 이동",tabIndex:o?0:-1,children:[g&&b.jsx(h0,{}),b.jsx(u9,{}),b.jsx(d0,{children:"포트폴리오"})]}),b.jsx(s9,{$open:o,type:"button",onClick:y,"aria-label":o?"빠른 메뉴 닫기":"빠른 메뉴 열기","aria-expanded":o,children:b.jsx(c9,{})})]})},d9="G-XYQ0NRD2FC";function h9(){const n=Ai();return z.useEffect(()=>{if(!window.gtag)return;const e=n.pathname+n.search+n.hash;window.gtag("config",d9,{page_path:e,page_location:window.location.href,page_title:document.title})},[n]),null}function p9(){const{pathname:n}=Ai();return z.useEffect(()=>{"scrollRestoration"in window.history&&(window.history.scrollRestoration="manual"),window.scrollTo({top:0,left:0,behavior:"smooth"})},[n]),null}function m9(){return b.jsxs(b.Fragment,{children:[b.jsx(n9,{}),b.jsx(r9,{}),b.jsx(p9,{}),b.jsx(h9,{}),b.jsx(Y8,{}),b.jsx(f9,{}),b.jsx("main",{children:b.jsxs(zj,{children:[b.jsx(Na,{path:"/",element:b.jsx(m6,{})}),b.jsx(Na,{path:"/project",element:b.jsx(Z6,{})}),b.jsx(Na,{path:"/project/:id",element:b.jsx(Jw,{})}),b.jsx(Na,{path:"/personal",element:b.jsx(Wz,{})}),b.jsx(Na,{path:"/personal/work/:id",element:b.jsx(Jw,{})}),b.jsx(Na,{path:"/404",element:b.jsx(a2,{})}),b.jsx(Na,{path:"*",element:b.jsx(a2,{})})]})}),b.jsx($8,{})]})}function g9(){return b.jsx(ik,{basename:"/portfolio/",children:b.jsx(m9,{})})}oE.createRoot(document.getElementById("root")).render(b.jsx(tl.StrictMode,{children:b.jsx(g9,{})}));
