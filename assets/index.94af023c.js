(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function s(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerpolicy&&(o.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?o.credentials="include":r.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(r){if(r.ep)return;r.ep=!0;const o=s(r);fetch(r.href,o)}})();function Ia(e,t){const s=Object.create(null),a=e.split(",");for(let r=0;r<a.length;r++)s[a[r]]=!0;return t?r=>!!s[r.toLowerCase()]:r=>!!s[r]}const ld="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",id=Ia(ld);function Ac(e){return!!e||e===""}function Je(e){if(ne(e)){const t={};for(let s=0;s<e.length;s++){const a=e[s],r=je(a)?pd(a):Je(a);if(r)for(const o in r)t[o]=r[o]}return t}else{if(je(e))return e;if($e(e))return e}}const cd=/;(?![^(]*\))/g,ud=/:(.+)/;function pd(e){const t={};return e.split(cd).forEach(s=>{if(s){const a=s.split(ud);a.length>1&&(t[a[0].trim()]=a[1].trim())}}),t}function Me(e){let t="";if(je(e))t=e;else if(ne(e))for(let s=0;s<e.length;s++){const a=Me(e[s]);a&&(t+=a+" ")}else if($e(e))for(const s in e)e[s]&&(t+=s+" ");return t.trim()}function Be(e){if(!e)return null;let{class:t,style:s}=e;return t&&!je(t)&&(e.class=Me(t)),s&&(e.style=Je(s)),e}const dd="html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot",fd=Ia(dd),Pn=e=>je(e)?e:e==null?"":ne(e)||$e(e)&&(e.toString===Tc||!oe(e.toString))?JSON.stringify(e,Bc,2):String(e),Bc=(e,t)=>t&&t.__v_isRef?Bc(e,t.value):Yn(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((s,[a,r])=>(s[`${a} =>`]=r,s),{})}:Sc(t)?{[`Set(${t.size})`]:[...t.values()]}:$e(t)&&!ne(t)&&!Pc(t)?String(t):t,Se={},Wn=[],Bt=()=>{},md=()=>!1,hd=/^on[^a-z]/,Na=e=>hd.test(e),xo=e=>e.startsWith("onUpdate:"),st=Object.assign,bo=(e,t)=>{const s=e.indexOf(t);s>-1&&e.splice(s,1)},gd=Object.prototype.hasOwnProperty,he=(e,t)=>gd.call(e,t),ne=Array.isArray,Yn=e=>Ra(e)==="[object Map]",Sc=e=>Ra(e)==="[object Set]",oe=e=>typeof e=="function",je=e=>typeof e=="string",ko=e=>typeof e=="symbol",$e=e=>e!==null&&typeof e=="object",Oc=e=>$e(e)&&oe(e.then)&&oe(e.catch),Tc=Object.prototype.toString,Ra=e=>Tc.call(e),yd=e=>Ra(e).slice(8,-1),Pc=e=>Ra(e)==="[object Object]",Eo=e=>je(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,ma=Ia(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),La=e=>{const t=Object.create(null);return s=>t[s]||(t[s]=e(s))},vd=/-(\w)/g,Lt=La(e=>e.replace(vd,(t,s)=>s?s.toUpperCase():"")),_d=/\B([A-Z])/g,Fn=La(e=>e.replace(_d,"-$1").toLowerCase()),Ha=La(e=>e.charAt(0).toUpperCase()+e.slice(1)),nr=La(e=>e?`on${Ha(e)}`:""),Ns=(e,t)=>!Object.is(e,t),Gn=(e,t)=>{for(let s=0;s<e.length;s++)e[s](t)},ba=(e,t,s)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:s})},Or=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let vl;const xd=()=>vl||(vl=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let ct;class Dc{constructor(t=!1){this.detached=t,this.active=!0,this.effects=[],this.cleanups=[],this.parent=ct,!t&&ct&&(this.index=(ct.scopes||(ct.scopes=[])).push(this)-1)}run(t){if(this.active){const s=ct;try{return ct=this,t()}finally{ct=s}}}on(){ct=this}off(){ct=this.parent}stop(t){if(this.active){let s,a;for(s=0,a=this.effects.length;s<a;s++)this.effects[s].stop();for(s=0,a=this.cleanups.length;s<a;s++)this.cleanups[s]();if(this.scopes)for(s=0,a=this.scopes.length;s<a;s++)this.scopes[s].stop(!0);if(!this.detached&&this.parent&&!t){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this.active=!1}}}function bd(e){return new Dc(e)}function kd(e,t=ct){t&&t.active&&t.effects.push(e)}function $c(){return ct}function Fc(e){ct&&ct.cleanups.push(e)}const wo=e=>{const t=new Set(e);return t.w=0,t.n=0,t},Mc=e=>(e.w&un)>0,jc=e=>(e.n&un)>0,Ed=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=un},wd=e=>{const{deps:t}=e;if(t.length){let s=0;for(let a=0;a<t.length;a++){const r=t[a];Mc(r)&&!jc(r)?r.delete(e):t[s++]=r,r.w&=~un,r.n&=~un}t.length=s}},Tr=new WeakMap;let Es=0,un=1;const Pr=30;let wt;const Bn=Symbol(""),Dr=Symbol("");class Co{constructor(t,s=null,a){this.fn=t,this.scheduler=s,this.active=!0,this.deps=[],this.parent=void 0,kd(this,a)}run(){if(!this.active)return this.fn();let t=wt,s=sn;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=wt,wt=this,sn=!0,un=1<<++Es,Es<=Pr?Ed(this):_l(this),this.fn()}finally{Es<=Pr&&wd(this),un=1<<--Es,wt=this.parent,sn=s,this.parent=void 0,this.deferStop&&this.stop()}}stop(){wt===this?this.deferStop=!0:this.active&&(_l(this),this.onStop&&this.onStop(),this.active=!1)}}function _l(e){const{deps:t}=e;if(t.length){for(let s=0;s<t.length;s++)t[s].delete(e);t.length=0}}let sn=!0;const Ic=[];function ls(){Ic.push(sn),sn=!1}function is(){const e=Ic.pop();sn=e===void 0?!0:e}function ht(e,t,s){if(sn&&wt){let a=Tr.get(e);a||Tr.set(e,a=new Map);let r=a.get(s);r||a.set(s,r=wo()),Nc(r)}}function Nc(e,t){let s=!1;Es<=Pr?jc(e)||(e.n|=un,s=!Mc(e)):s=!e.has(wt),s&&(e.add(wt),wt.deps.push(e))}function Yt(e,t,s,a,r,o){const l=Tr.get(e);if(!l)return;let i=[];if(t==="clear")i=[...l.values()];else if(s==="length"&&ne(e))l.forEach((c,u)=>{(u==="length"||u>=a)&&i.push(c)});else switch(s!==void 0&&i.push(l.get(s)),t){case"add":ne(e)?Eo(s)&&i.push(l.get("length")):(i.push(l.get(Bn)),Yn(e)&&i.push(l.get(Dr)));break;case"delete":ne(e)||(i.push(l.get(Bn)),Yn(e)&&i.push(l.get(Dr)));break;case"set":Yn(e)&&i.push(l.get(Bn));break}if(i.length===1)i[0]&&$r(i[0]);else{const c=[];for(const u of i)u&&c.push(...u);$r(wo(c))}}function $r(e,t){const s=ne(e)?e:[...e];for(const a of s)a.computed&&xl(a);for(const a of s)a.computed||xl(a)}function xl(e,t){(e!==wt||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const Cd=Ia("__proto__,__v_isRef,__isVue"),Rc=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(ko)),Ad=Ao(),Bd=Ao(!1,!0),Sd=Ao(!0),bl=Od();function Od(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...s){const a=_e(this);for(let o=0,l=this.length;o<l;o++)ht(a,"get",o+"");const r=a[t](...s);return r===-1||r===!1?a[t](...s.map(_e)):r}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...s){ls();const a=_e(this)[t].apply(this,s);return is(),a}}),e}function Ao(e=!1,t=!1){return function(a,r,o){if(r==="__v_isReactive")return!e;if(r==="__v_isReadonly")return e;if(r==="__v_isShallow")return t;if(r==="__v_raw"&&o===(e?t?Kd:Uc:t?qc:Vc).get(a))return a;const l=ne(a);if(!e&&l&&he(bl,r))return Reflect.get(bl,r,o);const i=Reflect.get(a,r,o);return(ko(r)?Rc.has(r):Cd(r))||(e||ht(a,"get",r),t)?i:xe(i)?l&&Eo(r)?i:i.value:$e(i)?e?En(i):De(i):i}}const Td=Lc(),Pd=Lc(!0);function Lc(e=!1){return function(s,a,r,o){let l=s[a];if(ts(l)&&xe(l)&&!xe(r))return!1;if(!e&&(!ka(r)&&!ts(r)&&(l=_e(l),r=_e(r)),!ne(s)&&xe(l)&&!xe(r)))return l.value=r,!0;const i=ne(s)&&Eo(a)?Number(a)<s.length:he(s,a),c=Reflect.set(s,a,r,o);return s===_e(o)&&(i?Ns(r,l)&&Yt(s,"set",a,r):Yt(s,"add",a,r)),c}}function Dd(e,t){const s=he(e,t);e[t];const a=Reflect.deleteProperty(e,t);return a&&s&&Yt(e,"delete",t,void 0),a}function $d(e,t){const s=Reflect.has(e,t);return(!ko(t)||!Rc.has(t))&&ht(e,"has",t),s}function Fd(e){return ht(e,"iterate",ne(e)?"length":Bn),Reflect.ownKeys(e)}const Hc={get:Ad,set:Td,deleteProperty:Dd,has:$d,ownKeys:Fd},Md={get:Sd,set(e,t){return!0},deleteProperty(e,t){return!0}},jd=st({},Hc,{get:Bd,set:Pd}),Bo=e=>e,Va=e=>Reflect.getPrototypeOf(e);function aa(e,t,s=!1,a=!1){e=e.__v_raw;const r=_e(e),o=_e(t);s||(t!==o&&ht(r,"get",t),ht(r,"get",o));const{has:l}=Va(r),i=a?Bo:s?To:Rs;if(l.call(r,t))return i(e.get(t));if(l.call(r,o))return i(e.get(o));e!==r&&e.get(t)}function ra(e,t=!1){const s=this.__v_raw,a=_e(s),r=_e(e);return t||(e!==r&&ht(a,"has",e),ht(a,"has",r)),e===r?s.has(e):s.has(e)||s.has(r)}function oa(e,t=!1){return e=e.__v_raw,!t&&ht(_e(e),"iterate",Bn),Reflect.get(e,"size",e)}function kl(e){e=_e(e);const t=_e(this);return Va(t).has.call(t,e)||(t.add(e),Yt(t,"add",e,e)),this}function El(e,t){t=_e(t);const s=_e(this),{has:a,get:r}=Va(s);let o=a.call(s,e);o||(e=_e(e),o=a.call(s,e));const l=r.call(s,e);return s.set(e,t),o?Ns(t,l)&&Yt(s,"set",e,t):Yt(s,"add",e,t),this}function wl(e){const t=_e(this),{has:s,get:a}=Va(t);let r=s.call(t,e);r||(e=_e(e),r=s.call(t,e)),a&&a.call(t,e);const o=t.delete(e);return r&&Yt(t,"delete",e,void 0),o}function Cl(){const e=_e(this),t=e.size!==0,s=e.clear();return t&&Yt(e,"clear",void 0,void 0),s}function la(e,t){return function(a,r){const o=this,l=o.__v_raw,i=_e(l),c=t?Bo:e?To:Rs;return!e&&ht(i,"iterate",Bn),l.forEach((u,p)=>a.call(r,c(u),c(p),o))}}function ia(e,t,s){return function(...a){const r=this.__v_raw,o=_e(r),l=Yn(o),i=e==="entries"||e===Symbol.iterator&&l,c=e==="keys"&&l,u=r[e](...a),p=s?Bo:t?To:Rs;return!t&&ht(o,"iterate",c?Dr:Bn),{next(){const{value:d,done:m}=u.next();return m?{value:d,done:m}:{value:i?[p(d[0]),p(d[1])]:p(d),done:m}},[Symbol.iterator](){return this}}}}function Qt(e){return function(...t){return e==="delete"?!1:this}}function Id(){const e={get(o){return aa(this,o)},get size(){return oa(this)},has:ra,add:kl,set:El,delete:wl,clear:Cl,forEach:la(!1,!1)},t={get(o){return aa(this,o,!1,!0)},get size(){return oa(this)},has:ra,add:kl,set:El,delete:wl,clear:Cl,forEach:la(!1,!0)},s={get(o){return aa(this,o,!0)},get size(){return oa(this,!0)},has(o){return ra.call(this,o,!0)},add:Qt("add"),set:Qt("set"),delete:Qt("delete"),clear:Qt("clear"),forEach:la(!0,!1)},a={get(o){return aa(this,o,!0,!0)},get size(){return oa(this,!0)},has(o){return ra.call(this,o,!0)},add:Qt("add"),set:Qt("set"),delete:Qt("delete"),clear:Qt("clear"),forEach:la(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(o=>{e[o]=ia(o,!1,!1),s[o]=ia(o,!0,!1),t[o]=ia(o,!1,!0),a[o]=ia(o,!0,!0)}),[e,s,t,a]}const[Nd,Rd,Ld,Hd]=Id();function So(e,t){const s=t?e?Hd:Ld:e?Rd:Nd;return(a,r,o)=>r==="__v_isReactive"?!e:r==="__v_isReadonly"?e:r==="__v_raw"?a:Reflect.get(he(s,r)&&r in a?s:a,r,o)}const Vd={get:So(!1,!1)},qd={get:So(!1,!0)},Ud={get:So(!0,!1)},Vc=new WeakMap,qc=new WeakMap,Uc=new WeakMap,Kd=new WeakMap;function zd(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Wd(e){return e.__v_skip||!Object.isExtensible(e)?0:zd(yd(e))}function De(e){return ts(e)?e:Oo(e,!1,Hc,Vd,Vc)}function Yd(e){return Oo(e,!1,jd,qd,qc)}function En(e){return Oo(e,!0,Md,Ud,Uc)}function Oo(e,t,s,a,r){if(!$e(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const o=r.get(e);if(o)return o;const l=Wd(e);if(l===0)return e;const i=new Proxy(e,l===2?a:s);return r.set(e,i),i}function Zn(e){return ts(e)?Zn(e.__v_raw):!!(e&&e.__v_isReactive)}function ts(e){return!!(e&&e.__v_isReadonly)}function ka(e){return!!(e&&e.__v_isShallow)}function Kc(e){return Zn(e)||ts(e)}function _e(e){const t=e&&e.__v_raw;return t?_e(t):e}function qa(e){return ba(e,"__v_skip",!0),e}const Rs=e=>$e(e)?De(e):e,To=e=>$e(e)?En(e):e;function Po(e){sn&&wt&&(e=_e(e),Nc(e.dep||(e.dep=wo())))}function Do(e,t){e=_e(e),e.dep&&$r(e.dep)}function xe(e){return!!(e&&e.__v_isRef===!0)}function L(e){return zc(e,!1)}function Ht(e){return zc(e,!0)}function zc(e,t){return xe(e)?e:new Gd(e,t)}class Gd{constructor(t,s){this.__v_isShallow=s,this.dep=void 0,this.__v_isRef=!0,this._rawValue=s?t:_e(t),this._value=s?t:Rs(t)}get value(){return Po(this),this._value}set value(t){const s=this.__v_isShallow||ka(t)||ts(t);t=s?t:_e(t),Ns(t,this._rawValue)&&(this._rawValue=t,this._value=s?t:Rs(t),Do(this))}}function k(e){return xe(e)?e.value:e}const Zd={get:(e,t,s)=>k(Reflect.get(e,t,s)),set:(e,t,s,a)=>{const r=e[t];return xe(r)&&!xe(s)?(r.value=s,!0):Reflect.set(e,t,s,a)}};function Wc(e){return Zn(e)?e:new Proxy(e,Zd)}class Jd{constructor(t){this.dep=void 0,this.__v_isRef=!0;const{get:s,set:a}=t(()=>Po(this),()=>Do(this));this._get=s,this._set=a}get value(){return this._get()}set value(t){this._set(t)}}function Yc(e){return new Jd(e)}function Qd(e){const t=ne(e)?new Array(e.length):{};for(const s in e)t[s]=ef(e,s);return t}class Xd{constructor(t,s,a){this._object=t,this._key=s,this._defaultValue=a,this.__v_isRef=!0}get value(){const t=this._object[this._key];return t===void 0?this._defaultValue:t}set value(t){this._object[this._key]=t}}function ef(e,t,s){const a=e[t];return xe(a)?a:new Xd(e,t,s)}var Gc;class tf{constructor(t,s,a,r){this._setter=s,this.dep=void 0,this.__v_isRef=!0,this[Gc]=!1,this._dirty=!0,this.effect=new Co(t,()=>{this._dirty||(this._dirty=!0,Do(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=a}get value(){const t=_e(this);return Po(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}Gc="__v_isReadonly";function nf(e,t,s=!1){let a,r;const o=oe(e);return o?(a=e,r=Bt):(a=e.get,r=e.set),new tf(a,r,o||!r,s)}function an(e,t,s,a){let r;try{r=a?e(...a):e()}catch(o){Ua(o,t,s)}return r}function St(e,t,s,a){if(oe(e)){const o=an(e,t,s,a);return o&&Oc(o)&&o.catch(l=>{Ua(l,t,s)}),o}const r=[];for(let o=0;o<e.length;o++)r.push(St(e[o],t,s,a));return r}function Ua(e,t,s,a=!0){const r=t?t.vnode:null;if(t){let o=t.parent;const l=t.proxy,i=s;for(;o;){const u=o.ec;if(u){for(let p=0;p<u.length;p++)if(u[p](e,l,i)===!1)return}o=o.parent}const c=t.appContext.config.errorHandler;if(c){an(c,null,10,[e,l,i]);return}}sf(e,s,r,a)}function sf(e,t,s,a=!0){console.error(e)}let Ls=!1,Fr=!1;const We=[];let jt=0;const Jn=[];let Kt=null,_n=0;const Zc=Promise.resolve();let $o=null;function Ye(e){const t=$o||Zc;return e?t.then(this?e.bind(this):e):t}function af(e){let t=jt+1,s=We.length;for(;t<s;){const a=t+s>>>1;Hs(We[a])<e?t=a+1:s=a}return t}function Fo(e){(!We.length||!We.includes(e,Ls&&e.allowRecurse?jt+1:jt))&&(e.id==null?We.push(e):We.splice(af(e.id),0,e),Jc())}function Jc(){!Ls&&!Fr&&(Fr=!0,$o=Zc.then(Xc))}function rf(e){const t=We.indexOf(e);t>jt&&We.splice(t,1)}function of(e){ne(e)?Jn.push(...e):(!Kt||!Kt.includes(e,e.allowRecurse?_n+1:_n))&&Jn.push(e),Jc()}function Al(e,t=Ls?jt+1:0){for(;t<We.length;t++){const s=We[t];s&&s.pre&&(We.splice(t,1),t--,s())}}function Qc(e){if(Jn.length){const t=[...new Set(Jn)];if(Jn.length=0,Kt){Kt.push(...t);return}for(Kt=t,Kt.sort((s,a)=>Hs(s)-Hs(a)),_n=0;_n<Kt.length;_n++)Kt[_n]();Kt=null,_n=0}}const Hs=e=>e.id==null?1/0:e.id,lf=(e,t)=>{const s=Hs(e)-Hs(t);if(s===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return s};function Xc(e){Fr=!1,Ls=!0,We.sort(lf);const t=Bt;try{for(jt=0;jt<We.length;jt++){const s=We[jt];s&&s.active!==!1&&an(s,null,14)}}finally{jt=0,We.length=0,Qc(),Ls=!1,$o=null,(We.length||Jn.length)&&Xc()}}function cf(e,t,...s){if(e.isUnmounted)return;const a=e.vnode.props||Se;let r=s;const o=t.startsWith("update:"),l=o&&t.slice(7);if(l&&l in a){const p=`${l==="modelValue"?"model":l}Modifiers`,{number:d,trim:m}=a[p]||Se;m&&(r=s.map(g=>g.trim())),d&&(r=s.map(Or))}let i,c=a[i=nr(t)]||a[i=nr(Lt(t))];!c&&o&&(c=a[i=nr(Fn(t))]),c&&St(c,e,6,r);const u=a[i+"Once"];if(u){if(!e.emitted)e.emitted={};else if(e.emitted[i])return;e.emitted[i]=!0,St(u,e,6,r)}}function eu(e,t,s=!1){const a=t.emitsCache,r=a.get(e);if(r!==void 0)return r;const o=e.emits;let l={},i=!1;if(!oe(e)){const c=u=>{const p=eu(u,t,!0);p&&(i=!0,st(l,p))};!s&&t.mixins.length&&t.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}return!o&&!i?($e(e)&&a.set(e,null),null):(ne(o)?o.forEach(c=>l[c]=null):st(l,o),$e(e)&&a.set(e,l),l)}function Ka(e,t){return!e||!Na(t)?!1:(t=t.slice(2).replace(/Once$/,""),he(e,t[0].toLowerCase()+t.slice(1))||he(e,Fn(t))||he(e,t))}let Ge=null,za=null;function Ea(e){const t=Ge;return Ge=e,za=e&&e.type.__scopeId||null,t}function N5(e){za=e}function R5(){za=null}function ee(e,t=Ge,s){if(!t||e._n)return e;const a=(...r)=>{a._d&&Il(-1);const o=Ea(t);let l;try{l=e(...r)}finally{Ea(o),a._d&&Il(1)}return l};return a._n=!0,a._c=!0,a._d=!0,a}function sr(e){const{type:t,vnode:s,proxy:a,withProxy:r,props:o,propsOptions:[l],slots:i,attrs:c,emit:u,render:p,renderCache:d,data:m,setupState:g,ctx:h,inheritAttrs:_}=e;let x,b;const w=Ea(e);try{if(s.shapeFlag&4){const B=r||a;x=Mt(p.call(B,B,d,o,g,m,h)),b=c}else{const B=t;x=Mt(B.length>1?B(o,{attrs:c,slots:i,emit:u}):B(o,null)),b=t.props?c:uf(c)}}catch(B){Bs.length=0,Ua(B,e,1),x=W(pn)}let E=x;if(b&&_!==!1){const B=Object.keys(b),{shapeFlag:$}=E;B.length&&$&7&&(l&&B.some(xo)&&(b=pf(b,l)),E=Dn(E,b))}return s.dirs&&(E=Dn(E),E.dirs=E.dirs?E.dirs.concat(s.dirs):s.dirs),s.transition&&(E.transition=s.transition),x=E,Ea(w),x}const uf=e=>{let t;for(const s in e)(s==="class"||s==="style"||Na(s))&&((t||(t={}))[s]=e[s]);return t},pf=(e,t)=>{const s={};for(const a in e)(!xo(a)||!(a.slice(9)in t))&&(s[a]=e[a]);return s};function df(e,t,s){const{props:a,children:r,component:o}=e,{props:l,children:i,patchFlag:c}=t,u=o.emitsOptions;if(t.dirs||t.transition)return!0;if(s&&c>=0){if(c&1024)return!0;if(c&16)return a?Bl(a,l,u):!!l;if(c&8){const p=t.dynamicProps;for(let d=0;d<p.length;d++){const m=p[d];if(l[m]!==a[m]&&!Ka(u,m))return!0}}}else return(r||i)&&(!i||!i.$stable)?!0:a===l?!1:a?l?Bl(a,l,u):!0:!!l;return!1}function Bl(e,t,s){const a=Object.keys(t);if(a.length!==Object.keys(e).length)return!0;for(let r=0;r<a.length;r++){const o=a[r];if(t[o]!==e[o]&&!Ka(s,o))return!0}return!1}function ff({vnode:e,parent:t},s){for(;t&&t.subTree===e;)(e=t.vnode).el=s,t=t.parent}const tu=e=>e.__isSuspense;function mf(e,t){t&&t.pendingBranch?ne(e)?t.effects.push(...e):t.effects.push(e):of(e)}function pt(e,t){if(Ue){let s=Ue.provides;const a=Ue.parent&&Ue.parent.provides;a===s&&(s=Ue.provides=Object.create(a)),s[e]=t}}function U(e,t,s=!1){const a=Ue||Ge;if(a){const r=a.parent==null?a.vnode.appContext&&a.vnode.appContext.provides:a.parent.provides;if(r&&e in r)return r[e];if(arguments.length>1)return s&&oe(t)?t.call(a.proxy):t}}function cs(e,t){return Mo(e,null,t)}const Sl={};function ce(e,t,s){return Mo(e,t,s)}function Mo(e,t,{immediate:s,deep:a,flush:r,onTrack:o,onTrigger:l}=Se){const i=Ue;let c,u=!1,p=!1;if(xe(e)?(c=()=>e.value,u=ka(e)):Zn(e)?(c=()=>e,a=!0):ne(e)?(p=!0,u=e.some(b=>Zn(b)||ka(b)),c=()=>e.map(b=>{if(xe(b))return b.value;if(Zn(b))return wn(b);if(oe(b))return an(b,i,2)})):oe(e)?t?c=()=>an(e,i,2):c=()=>{if(!(i&&i.isUnmounted))return d&&d(),St(e,i,3,[m])}:c=Bt,t&&a){const b=c;c=()=>wn(b())}let d,m=b=>{d=x.onStop=()=>{an(b,i,4)}};if(qs)return m=Bt,t?s&&St(t,i,3,[c(),p?[]:void 0,m]):c(),Bt;let g=p?[]:Sl;const h=()=>{if(!!x.active)if(t){const b=x.run();(a||u||(p?b.some((w,E)=>Ns(w,g[E])):Ns(b,g)))&&(d&&d(),St(t,i,3,[b,g===Sl?void 0:g,m]),g=b)}else x.run()};h.allowRecurse=!!t;let _;r==="sync"?_=h:r==="post"?_=()=>Ke(h,i&&i.suspense):(h.pre=!0,i&&(h.id=i.uid),_=()=>Fo(h));const x=new Co(c,_);return t?s?h():g=x.run():r==="post"?Ke(x.run.bind(x),i&&i.suspense):x.run(),()=>{x.stop(),i&&i.scope&&bo(i.scope.effects,x)}}function hf(e,t,s){const a=this.proxy,r=je(e)?e.includes(".")?nu(a,e):()=>a[e]:e.bind(a,a);let o;oe(t)?o=t:(o=t.handler,s=t);const l=Ue;ss(this);const i=Mo(r,o.bind(a),s);return l?ss(l):Sn(),i}function nu(e,t){const s=t.split(".");return()=>{let a=e;for(let r=0;r<s.length&&a;r++)a=a[s[r]];return a}}function wn(e,t){if(!$e(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),xe(e))wn(e.value,t);else if(ne(e))for(let s=0;s<e.length;s++)wn(e[s],t);else if(Sc(e)||Yn(e))e.forEach(s=>{wn(s,t)});else if(Pc(e))for(const s in e)wn(e[s],t);return e}function su(e,t){e.shapeFlag&6&&e.component?su(e.component.subTree,t):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function we(e){return oe(e)?{setup:e,name:e.name}:e}const Qn=e=>!!e.type.__asyncLoader,au=e=>e.type.__isKeepAlive,gf={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(e,{slots:t}){const s=Mn(),a=s.ctx;if(!a.renderer)return()=>{const w=t.default&&t.default();return w&&w.length===1?w[0]:w};const r=new Map,o=new Set;let l=null;const i=s.suspense,{renderer:{p:c,m:u,um:p,o:{createElement:d}}}=a,m=d("div");a.activate=(w,E,B,$,F)=>{const I=w.component;u(w,E,B,0,i),c(I.vnode,w,E,B,I,i,$,w.slotScopeIds,F),Ke(()=>{I.isDeactivated=!1,I.a&&Gn(I.a);const J=w.props&&w.props.onVnodeMounted;J&&yt(J,I.parent,w)},i)},a.deactivate=w=>{const E=w.component;u(w,m,null,1,i),Ke(()=>{E.da&&Gn(E.da);const B=w.props&&w.props.onVnodeUnmounted;B&&yt(B,E.parent,w),E.isDeactivated=!0},i)};function g(w){ar(w),p(w,s,i,!0)}function h(w){r.forEach((E,B)=>{const $=Hr(E.type);$&&(!w||!w($))&&_(B)})}function _(w){const E=r.get(w);!l||E.type!==l.type?g(E):l&&ar(l),r.delete(w),o.delete(w)}ce(()=>[e.include,e.exclude],([w,E])=>{w&&h(B=>ws(w,B)),E&&h(B=>!ws(E,B))},{flush:"post",deep:!0});let x=null;const b=()=>{x!=null&&r.set(x,rr(s.subTree))};return us(b),jo(b),Ya(()=>{r.forEach(w=>{const{subTree:E,suspense:B}=s,$=rr(E);if(w.type===$.type){ar($);const F=$.component.da;F&&Ke(F,B);return}g(w)})}),()=>{if(x=null,!t.default)return null;const w=t.default(),E=w[0];if(w.length>1)return l=null,w;if(!ns(E)||!(E.shapeFlag&4)&&!(E.shapeFlag&128))return l=null,E;let B=rr(E);const $=B.type,F=Hr(Qn(B)?B.type.__asyncResolved||{}:$),{include:I,exclude:J,max:ie}=e;if(I&&(!F||!ws(I,F))||J&&F&&ws(J,F))return l=B,E;const ue=B.key==null?$:B.key,ge=r.get(ue);return B.el&&(B=Dn(B),E.shapeFlag&128&&(E.ssContent=B)),x=ue,ge?(B.el=ge.el,B.component=ge.component,B.transition&&su(B,B.transition),B.shapeFlag|=512,o.delete(ue),o.add(ue)):(o.add(ue),ie&&o.size>parseInt(ie,10)&&_(o.values().next().value)),B.shapeFlag|=256,l=B,tu(E.type)?E:B}}},ru=gf;function ws(e,t){return ne(e)?e.some(s=>ws(s,t)):je(e)?e.split(",").includes(t):e.test?e.test(t):!1}function yf(e,t){ou(e,"a",t)}function vf(e,t){ou(e,"da",t)}function ou(e,t,s=Ue){const a=e.__wdc||(e.__wdc=()=>{let r=s;for(;r;){if(r.isDeactivated)return;r=r.parent}return e()});if(Wa(t,a,s),s){let r=s.parent;for(;r&&r.parent;)au(r.parent.vnode)&&_f(a,t,s,r),r=r.parent}}function _f(e,t,s,a){const r=Wa(t,e,a,!0);Ga(()=>{bo(a[t],r)},s)}function ar(e){let t=e.shapeFlag;t&256&&(t-=256),t&512&&(t-=512),e.shapeFlag=t}function rr(e){return e.shapeFlag&128?e.ssContent:e}function Wa(e,t,s=Ue,a=!1){if(s){const r=s[e]||(s[e]=[]),o=t.__weh||(t.__weh=(...l)=>{if(s.isUnmounted)return;ls(),ss(s);const i=St(t,s,e,l);return Sn(),is(),i});return a?r.unshift(o):r.push(o),o}}const Gt=e=>(t,s=Ue)=>(!qs||e==="sp")&&Wa(e,(...a)=>t(...a),s),xf=Gt("bm"),us=Gt("m"),bf=Gt("bu"),jo=Gt("u"),Ya=Gt("bum"),Ga=Gt("um"),kf=Gt("sp"),Ef=Gt("rtg"),wf=Gt("rtc");function Cf(e,t=Ue){Wa("ec",e,t)}function ps(e,t){const s=Ge;if(s===null)return e;const a=Ja(s)||s.proxy,r=e.dirs||(e.dirs=[]);for(let o=0;o<t.length;o++){let[l,i,c,u=Se]=t[o];oe(l)&&(l={mounted:l,updated:l}),l.deep&&wn(i),r.push({dir:l,instance:a,value:i,oldValue:void 0,arg:c,modifiers:u})}return e}function fn(e,t,s,a){const r=e.dirs,o=t&&t.dirs;for(let l=0;l<r.length;l++){const i=r[l];o&&(i.oldValue=o[l].value);let c=i.dir[a];c&&(ls(),St(c,s,8,[e.el,i,e,t]),is())}}const lu="components",Af="directives";function wa(e,t){return iu(lu,e,!0,t)||e}const Bf=Symbol();function Io(e){return iu(Af,e)}function iu(e,t,s=!0,a=!1){const r=Ge||Ue;if(r){const o=r.type;if(e===lu){const i=Hr(o,!1);if(i&&(i===t||i===Lt(t)||i===Ha(Lt(t))))return o}const l=Ol(r[e]||o[e],t)||Ol(r.appContext[e],t);return!l&&a?o:l}}function Ol(e,t){return e&&(e[t]||e[Lt(t)]||e[Ha(Lt(t))])}function Qs(e,t,s,a){let r;const o=s&&s[a];if(ne(e)||je(e)){r=new Array(e.length);for(let l=0,i=e.length;l<i;l++)r[l]=t(e[l],l,void 0,o&&o[l])}else if(typeof e=="number"){r=new Array(e);for(let l=0;l<e;l++)r[l]=t(l+1,l,void 0,o&&o[l])}else if($e(e))if(e[Symbol.iterator])r=Array.from(e,(l,i)=>t(l,i,void 0,o&&o[i]));else{const l=Object.keys(e);r=new Array(l.length);for(let i=0,c=l.length;i<c;i++){const u=l[i];r[i]=t(e[u],u,i,o&&o[i])}}else r=[];return s&&(s[a]=r),r}function Tt(e,t,s={},a,r){if(Ge.isCE||Ge.parent&&Qn(Ge.parent)&&Ge.parent.isCE)return W("slot",t==="default"?null:{name:t},a&&a());let o=e[t];o&&o._c&&(o._d=!1),A();const l=o&&cu(o(s)),i=G(Ee,{key:s.key||l&&l.key||`_${t}`},l||(a?a():[]),l&&e._===1?64:-2);return!r&&i.scopeId&&(i.slotScopeIds=[i.scopeId+"-s"]),o&&o._c&&(o._d=!0),i}function cu(e){return e.some(t=>ns(t)?!(t.type===pn||t.type===Ee&&!cu(t.children)):!0)?e:null}const Mr=e=>e?_u(e)?Ja(e)||e.proxy:Mr(e.parent):null,Ca=st(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Mr(e.parent),$root:e=>Mr(e.root),$emit:e=>e.emit,$options:e=>No(e),$forceUpdate:e=>e.f||(e.f=()=>Fo(e.update)),$nextTick:e=>e.n||(e.n=Ye.bind(e.proxy)),$watch:e=>hf.bind(e)}),Sf={get({_:e},t){const{ctx:s,setupState:a,data:r,props:o,accessCache:l,type:i,appContext:c}=e;let u;if(t[0]!=="$"){const g=l[t];if(g!==void 0)switch(g){case 1:return a[t];case 2:return r[t];case 4:return s[t];case 3:return o[t]}else{if(a!==Se&&he(a,t))return l[t]=1,a[t];if(r!==Se&&he(r,t))return l[t]=2,r[t];if((u=e.propsOptions[0])&&he(u,t))return l[t]=3,o[t];if(s!==Se&&he(s,t))return l[t]=4,s[t];jr&&(l[t]=0)}}const p=Ca[t];let d,m;if(p)return t==="$attrs"&&ht(e,"get",t),p(e);if((d=i.__cssModules)&&(d=d[t]))return d;if(s!==Se&&he(s,t))return l[t]=4,s[t];if(m=c.config.globalProperties,he(m,t))return m[t]},set({_:e},t,s){const{data:a,setupState:r,ctx:o}=e;return r!==Se&&he(r,t)?(r[t]=s,!0):a!==Se&&he(a,t)?(a[t]=s,!0):he(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(o[t]=s,!0)},has({_:{data:e,setupState:t,accessCache:s,ctx:a,appContext:r,propsOptions:o}},l){let i;return!!s[l]||e!==Se&&he(e,l)||t!==Se&&he(t,l)||(i=o[0])&&he(i,l)||he(a,l)||he(Ca,l)||he(r.config.globalProperties,l)},defineProperty(e,t,s){return s.get!=null?e._.accessCache[t]=0:he(s,"value")&&this.set(e,t,s.value,null),Reflect.defineProperty(e,t,s)}};let jr=!0;function Of(e){const t=No(e),s=e.proxy,a=e.ctx;jr=!1,t.beforeCreate&&Tl(t.beforeCreate,e,"bc");const{data:r,computed:o,methods:l,watch:i,provide:c,inject:u,created:p,beforeMount:d,mounted:m,beforeUpdate:g,updated:h,activated:_,deactivated:x,beforeDestroy:b,beforeUnmount:w,destroyed:E,unmounted:B,render:$,renderTracked:F,renderTriggered:I,errorCaptured:J,serverPrefetch:ie,expose:ue,inheritAttrs:ge,components:qe,directives:Le,filters:Fe}=t;if(u&&Tf(u,a,null,e.appContext.config.unwrapInjectedRef),l)for(const K in l){const te=l[K];oe(te)&&(a[K]=te.bind(s))}if(r){const K=r.call(s,s);$e(K)&&(e.data=De(K))}if(jr=!0,o)for(const K in o){const te=o[K],pe=oe(te)?te.bind(s,s):oe(te.get)?te.get.bind(s,s):Bt,be=!oe(te)&&oe(te.set)?te.set.bind(s):Bt,Xe=O({get:pe,set:be});Object.defineProperty(a,K,{enumerable:!0,configurable:!0,get:()=>Xe.value,set:Ie=>Xe.value=Ie})}if(i)for(const K in i)uu(i[K],a,s,K);if(c){const K=oe(c)?c.call(s):c;Reflect.ownKeys(K).forEach(te=>{pt(te,K[te])})}p&&Tl(p,e,"c");function Pe(K,te){ne(te)?te.forEach(pe=>K(pe.bind(s))):te&&K(te.bind(s))}if(Pe(xf,d),Pe(us,m),Pe(bf,g),Pe(jo,h),Pe(yf,_),Pe(vf,x),Pe(Cf,J),Pe(wf,F),Pe(Ef,I),Pe(Ya,w),Pe(Ga,B),Pe(kf,ie),ne(ue))if(ue.length){const K=e.exposed||(e.exposed={});ue.forEach(te=>{Object.defineProperty(K,te,{get:()=>s[te],set:pe=>s[te]=pe})})}else e.exposed||(e.exposed={});$&&e.render===Bt&&(e.render=$),ge!=null&&(e.inheritAttrs=ge),qe&&(e.components=qe),Le&&(e.directives=Le)}function Tf(e,t,s=Bt,a=!1){ne(e)&&(e=Ir(e));for(const r in e){const o=e[r];let l;$e(o)?"default"in o?l=U(o.from||r,o.default,!0):l=U(o.from||r):l=U(o),xe(l)&&a?Object.defineProperty(t,r,{enumerable:!0,configurable:!0,get:()=>l.value,set:i=>l.value=i}):t[r]=l}}function Tl(e,t,s){St(ne(e)?e.map(a=>a.bind(t.proxy)):e.bind(t.proxy),t,s)}function uu(e,t,s,a){const r=a.includes(".")?nu(s,a):()=>s[a];if(je(e)){const o=t[e];oe(o)&&ce(r,o)}else if(oe(e))ce(r,e.bind(s));else if($e(e))if(ne(e))e.forEach(o=>uu(o,t,s,a));else{const o=oe(e.handler)?e.handler.bind(s):t[e.handler];oe(o)&&ce(r,o,e)}}function No(e){const t=e.type,{mixins:s,extends:a}=t,{mixins:r,optionsCache:o,config:{optionMergeStrategies:l}}=e.appContext,i=o.get(t);let c;return i?c=i:!r.length&&!s&&!a?c=t:(c={},r.length&&r.forEach(u=>Aa(c,u,l,!0)),Aa(c,t,l)),$e(t)&&o.set(t,c),c}function Aa(e,t,s,a=!1){const{mixins:r,extends:o}=t;o&&Aa(e,o,s,!0),r&&r.forEach(l=>Aa(e,l,s,!0));for(const l in t)if(!(a&&l==="expose")){const i=Pf[l]||s&&s[l];e[l]=i?i(e[l],t[l]):t[l]}return e}const Pf={data:Pl,props:yn,emits:yn,methods:yn,computed:yn,beforeCreate:et,created:et,beforeMount:et,mounted:et,beforeUpdate:et,updated:et,beforeDestroy:et,beforeUnmount:et,destroyed:et,unmounted:et,activated:et,deactivated:et,errorCaptured:et,serverPrefetch:et,components:yn,directives:yn,watch:$f,provide:Pl,inject:Df};function Pl(e,t){return t?e?function(){return st(oe(e)?e.call(this,this):e,oe(t)?t.call(this,this):t)}:t:e}function Df(e,t){return yn(Ir(e),Ir(t))}function Ir(e){if(ne(e)){const t={};for(let s=0;s<e.length;s++)t[e[s]]=e[s];return t}return e}function et(e,t){return e?[...new Set([].concat(e,t))]:t}function yn(e,t){return e?st(st(Object.create(null),e),t):t}function $f(e,t){if(!e)return t;if(!t)return e;const s=st(Object.create(null),e);for(const a in t)s[a]=et(e[a],t[a]);return s}function Ff(e,t,s,a=!1){const r={},o={};ba(o,Za,1),e.propsDefaults=Object.create(null),pu(e,t,r,o);for(const l in e.propsOptions[0])l in r||(r[l]=void 0);s?e.props=a?r:Yd(r):e.type.props?e.props=r:e.props=o,e.attrs=o}function Mf(e,t,s,a){const{props:r,attrs:o,vnode:{patchFlag:l}}=e,i=_e(r),[c]=e.propsOptions;let u=!1;if((a||l>0)&&!(l&16)){if(l&8){const p=e.vnode.dynamicProps;for(let d=0;d<p.length;d++){let m=p[d];if(Ka(e.emitsOptions,m))continue;const g=t[m];if(c)if(he(o,m))g!==o[m]&&(o[m]=g,u=!0);else{const h=Lt(m);r[h]=Nr(c,i,h,g,e,!1)}else g!==o[m]&&(o[m]=g,u=!0)}}}else{pu(e,t,r,o)&&(u=!0);let p;for(const d in i)(!t||!he(t,d)&&((p=Fn(d))===d||!he(t,p)))&&(c?s&&(s[d]!==void 0||s[p]!==void 0)&&(r[d]=Nr(c,i,d,void 0,e,!0)):delete r[d]);if(o!==i)for(const d in o)(!t||!he(t,d)&&!0)&&(delete o[d],u=!0)}u&&Yt(e,"set","$attrs")}function pu(e,t,s,a){const[r,o]=e.propsOptions;let l=!1,i;if(t)for(let c in t){if(ma(c))continue;const u=t[c];let p;r&&he(r,p=Lt(c))?!o||!o.includes(p)?s[p]=u:(i||(i={}))[p]=u:Ka(e.emitsOptions,c)||(!(c in a)||u!==a[c])&&(a[c]=u,l=!0)}if(o){const c=_e(s),u=i||Se;for(let p=0;p<o.length;p++){const d=o[p];s[d]=Nr(r,c,d,u[d],e,!he(u,d))}}return l}function Nr(e,t,s,a,r,o){const l=e[s];if(l!=null){const i=he(l,"default");if(i&&a===void 0){const c=l.default;if(l.type!==Function&&oe(c)){const{propsDefaults:u}=r;s in u?a=u[s]:(ss(r),a=u[s]=c.call(null,t),Sn())}else a=c}l[0]&&(o&&!i?a=!1:l[1]&&(a===""||a===Fn(s))&&(a=!0))}return a}function du(e,t,s=!1){const a=t.propsCache,r=a.get(e);if(r)return r;const o=e.props,l={},i=[];let c=!1;if(!oe(e)){const p=d=>{c=!0;const[m,g]=du(d,t,!0);st(l,m),g&&i.push(...g)};!s&&t.mixins.length&&t.mixins.forEach(p),e.extends&&p(e.extends),e.mixins&&e.mixins.forEach(p)}if(!o&&!c)return $e(e)&&a.set(e,Wn),Wn;if(ne(o))for(let p=0;p<o.length;p++){const d=Lt(o[p]);Dl(d)&&(l[d]=Se)}else if(o)for(const p in o){const d=Lt(p);if(Dl(d)){const m=o[p],g=l[d]=ne(m)||oe(m)?{type:m}:m;if(g){const h=Ml(Boolean,g.type),_=Ml(String,g.type);g[0]=h>-1,g[1]=_<0||h<_,(h>-1||he(g,"default"))&&i.push(d)}}}const u=[l,i];return $e(e)&&a.set(e,u),u}function Dl(e){return e[0]!=="$"}function $l(e){const t=e&&e.toString().match(/^\s*function (\w+)/);return t?t[1]:e===null?"null":""}function Fl(e,t){return $l(e)===$l(t)}function Ml(e,t){return ne(t)?t.findIndex(s=>Fl(s,e)):oe(t)&&Fl(t,e)?0:-1}const fu=e=>e[0]==="_"||e==="$stable",Ro=e=>ne(e)?e.map(Mt):[Mt(e)],jf=(e,t,s)=>{if(t._n)return t;const a=ee((...r)=>Ro(t(...r)),s);return a._c=!1,a},mu=(e,t,s)=>{const a=e._ctx;for(const r in e){if(fu(r))continue;const o=e[r];if(oe(o))t[r]=jf(r,o,a);else if(o!=null){const l=Ro(o);t[r]=()=>l}}},hu=(e,t)=>{const s=Ro(t);e.slots.default=()=>s},If=(e,t)=>{if(e.vnode.shapeFlag&32){const s=t._;s?(e.slots=_e(t),ba(t,"_",s)):mu(t,e.slots={})}else e.slots={},t&&hu(e,t);ba(e.slots,Za,1)},Nf=(e,t,s)=>{const{vnode:a,slots:r}=e;let o=!0,l=Se;if(a.shapeFlag&32){const i=t._;i?s&&i===1?o=!1:(st(r,t),!s&&i===1&&delete r._):(o=!t.$stable,mu(t,r)),l=t}else t&&(hu(e,t),l={default:1});if(o)for(const i in r)!fu(i)&&!(i in l)&&delete r[i]};function gu(){return{app:null,config:{isNativeTag:md,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Rf=0;function Lf(e,t){return function(a,r=null){oe(a)||(a=Object.assign({},a)),r!=null&&!$e(r)&&(r=null);const o=gu(),l=new Set;let i=!1;const c=o.app={_uid:Rf++,_component:a,_props:r,_container:null,_context:o,_instance:null,version:rm,get config(){return o.config},set config(u){},use(u,...p){return l.has(u)||(u&&oe(u.install)?(l.add(u),u.install(c,...p)):oe(u)&&(l.add(u),u(c,...p))),c},mixin(u){return o.mixins.includes(u)||o.mixins.push(u),c},component(u,p){return p?(o.components[u]=p,c):o.components[u]},directive(u,p){return p?(o.directives[u]=p,c):o.directives[u]},mount(u,p,d){if(!i){const m=W(a,r);return m.appContext=o,p&&t?t(m,u):e(m,u,d),i=!0,c._container=u,u.__vue_app__=c,Ja(m.component)||m.component.proxy}},unmount(){i&&(e(null,c._container),delete c._container.__vue_app__)},provide(u,p){return o.provides[u]=p,c}};return c}}function Rr(e,t,s,a,r=!1){if(ne(e)){e.forEach((m,g)=>Rr(m,t&&(ne(t)?t[g]:t),s,a,r));return}if(Qn(a)&&!r)return;const o=a.shapeFlag&4?Ja(a.component)||a.component.proxy:a.el,l=r?null:o,{i,r:c}=e,u=t&&t.r,p=i.refs===Se?i.refs={}:i.refs,d=i.setupState;if(u!=null&&u!==c&&(je(u)?(p[u]=null,he(d,u)&&(d[u]=null)):xe(u)&&(u.value=null)),oe(c))an(c,i,12,[l,p]);else{const m=je(c),g=xe(c);if(m||g){const h=()=>{if(e.f){const _=m?he(d,c)?d[c]:p[c]:c.value;r?ne(_)&&bo(_,o):ne(_)?_.includes(o)||_.push(o):m?(p[c]=[o],he(d,c)&&(d[c]=p[c])):(c.value=[o],e.k&&(p[e.k]=c.value))}else m?(p[c]=l,he(d,c)&&(d[c]=l)):g&&(c.value=l,e.k&&(p[e.k]=l))};l?(h.id=-1,Ke(h,s)):h()}}}const Ke=mf;function Hf(e){return Vf(e)}function Vf(e,t){const s=xd();s.__VUE__=!0;const{insert:a,remove:r,patchProp:o,createElement:l,createText:i,createComment:c,setText:u,setElementText:p,parentNode:d,nextSibling:m,setScopeId:g=Bt,insertStaticContent:h}=e,_=(y,v,C,S=null,P=null,j=null,q=!1,M=null,N=!!v.dynamicChildren)=>{if(y===v)return;y&&!hs(y,v)&&(S=R(y),Ie(y,P,j,!0),y=null),v.patchFlag===-2&&(N=!1,v.dynamicChildren=null);const{type:D,ref:Q,shapeFlag:z}=v;switch(D){case Ho:x(y,v,C,S);break;case pn:b(y,v,C,S);break;case or:y==null&&w(v,C,S,q);break;case Ee:qe(y,v,C,S,P,j,q,M,N);break;default:z&1?$(y,v,C,S,P,j,q,M,N):z&6?Le(y,v,C,S,P,j,q,M,N):(z&64||z&128)&&D.process(y,v,C,S,P,j,q,M,N,de)}Q!=null&&P&&Rr(Q,y&&y.ref,j,v||y,!v)},x=(y,v,C,S)=>{if(y==null)a(v.el=i(v.children),C,S);else{const P=v.el=y.el;v.children!==y.children&&u(P,v.children)}},b=(y,v,C,S)=>{y==null?a(v.el=c(v.children||""),C,S):v.el=y.el},w=(y,v,C,S)=>{[y.el,y.anchor]=h(y.children,v,C,S,y.el,y.anchor)},E=({el:y,anchor:v},C,S)=>{let P;for(;y&&y!==v;)P=m(y),a(y,C,S),y=P;a(v,C,S)},B=({el:y,anchor:v})=>{let C;for(;y&&y!==v;)C=m(y),r(y),y=C;r(v)},$=(y,v,C,S,P,j,q,M,N)=>{q=q||v.type==="svg",y==null?F(v,C,S,P,j,q,M,N):ie(y,v,P,j,q,M,N)},F=(y,v,C,S,P,j,q,M)=>{let N,D;const{type:Q,props:z,shapeFlag:X,transition:se,dirs:fe}=y;if(N=y.el=l(y.type,j,z&&z.is,z),X&8?p(N,y.children):X&16&&J(y.children,N,null,S,P,j&&Q!=="foreignObject",q,M),fe&&fn(y,null,S,"created"),z){for(const Ae in z)Ae!=="value"&&!ma(Ae)&&o(N,Ae,null,z[Ae],j,y.children,S,P,H);"value"in z&&o(N,"value",null,z.value),(D=z.onVnodeBeforeMount)&&yt(D,S,y)}I(N,y,y.scopeId,q,S),fe&&fn(y,null,S,"beforeMount");const Oe=(!P||P&&!P.pendingBranch)&&se&&!se.persisted;Oe&&se.beforeEnter(N),a(N,v,C),((D=z&&z.onVnodeMounted)||Oe||fe)&&Ke(()=>{D&&yt(D,S,y),Oe&&se.enter(N),fe&&fn(y,null,S,"mounted")},P)},I=(y,v,C,S,P)=>{if(C&&g(y,C),S)for(let j=0;j<S.length;j++)g(y,S[j]);if(P){let j=P.subTree;if(v===j){const q=P.vnode;I(y,q,q.scopeId,q.slotScopeIds,P.parent)}}},J=(y,v,C,S,P,j,q,M,N=0)=>{for(let D=N;D<y.length;D++){const Q=y[D]=M?en(y[D]):Mt(y[D]);_(null,Q,v,C,S,P,j,q,M)}},ie=(y,v,C,S,P,j,q)=>{const M=v.el=y.el;let{patchFlag:N,dynamicChildren:D,dirs:Q}=v;N|=y.patchFlag&16;const z=y.props||Se,X=v.props||Se;let se;C&&mn(C,!1),(se=X.onVnodeBeforeUpdate)&&yt(se,C,v,y),Q&&fn(v,y,C,"beforeUpdate"),C&&mn(C,!0);const fe=P&&v.type!=="foreignObject";if(D?ue(y.dynamicChildren,D,M,C,S,fe,j):q||te(y,v,M,null,C,S,fe,j,!1),N>0){if(N&16)ge(M,v,z,X,C,S,P);else if(N&2&&z.class!==X.class&&o(M,"class",null,X.class,P),N&4&&o(M,"style",z.style,X.style,P),N&8){const Oe=v.dynamicProps;for(let Ae=0;Ae<Oe.length;Ae++){const Ne=Oe[Ae],bt=z[Ne],Rn=X[Ne];(Rn!==bt||Ne==="value")&&o(M,Ne,bt,Rn,P,y.children,C,S,H)}}N&1&&y.children!==v.children&&p(M,v.children)}else!q&&D==null&&ge(M,v,z,X,C,S,P);((se=X.onVnodeUpdated)||Q)&&Ke(()=>{se&&yt(se,C,v,y),Q&&fn(v,y,C,"updated")},S)},ue=(y,v,C,S,P,j,q)=>{for(let M=0;M<v.length;M++){const N=y[M],D=v[M],Q=N.el&&(N.type===Ee||!hs(N,D)||N.shapeFlag&70)?d(N.el):C;_(N,D,Q,null,S,P,j,q,!0)}},ge=(y,v,C,S,P,j,q)=>{if(C!==S){if(C!==Se)for(const M in C)!ma(M)&&!(M in S)&&o(y,M,C[M],null,q,v.children,P,j,H);for(const M in S){if(ma(M))continue;const N=S[M],D=C[M];N!==D&&M!=="value"&&o(y,M,D,N,q,v.children,P,j,H)}"value"in S&&o(y,"value",C.value,S.value)}},qe=(y,v,C,S,P,j,q,M,N)=>{const D=v.el=y?y.el:i(""),Q=v.anchor=y?y.anchor:i("");let{patchFlag:z,dynamicChildren:X,slotScopeIds:se}=v;se&&(M=M?M.concat(se):se),y==null?(a(D,C,S),a(Q,C,S),J(v.children,C,Q,P,j,q,M,N)):z>0&&z&64&&X&&y.dynamicChildren?(ue(y.dynamicChildren,X,C,P,j,q,M),(v.key!=null||P&&v===P.subTree)&&Lo(y,v,!0)):te(y,v,C,Q,P,j,q,M,N)},Le=(y,v,C,S,P,j,q,M,N)=>{v.slotScopeIds=M,y==null?v.shapeFlag&512?P.ctx.activate(v,C,S,q,N):Fe(v,C,S,P,j,q,N):Te(y,v,N)},Fe=(y,v,C,S,P,j,q)=>{const M=y.component=Qf(y,S,P);if(au(y)&&(M.ctx.renderer=de),Xf(M),M.asyncDep){if(P&&P.registerDep(M,Pe),!y.el){const N=M.subTree=W(pn);b(null,N,v,C)}return}Pe(M,y,v,C,P,j,q)},Te=(y,v,C)=>{const S=v.component=y.component;if(df(y,v,C))if(S.asyncDep&&!S.asyncResolved){K(S,v,C);return}else S.next=v,rf(S.update),S.update();else v.el=y.el,S.vnode=v},Pe=(y,v,C,S,P,j,q)=>{const M=()=>{if(y.isMounted){let{next:Q,bu:z,u:X,parent:se,vnode:fe}=y,Oe=Q,Ae;mn(y,!1),Q?(Q.el=fe.el,K(y,Q,q)):Q=fe,z&&Gn(z),(Ae=Q.props&&Q.props.onVnodeBeforeUpdate)&&yt(Ae,se,Q,fe),mn(y,!0);const Ne=sr(y),bt=y.subTree;y.subTree=Ne,_(bt,Ne,d(bt.el),R(bt),y,P,j),Q.el=Ne.el,Oe===null&&ff(y,Ne.el),X&&Ke(X,P),(Ae=Q.props&&Q.props.onVnodeUpdated)&&Ke(()=>yt(Ae,se,Q,fe),P)}else{let Q;const{el:z,props:X}=v,{bm:se,m:fe,parent:Oe}=y,Ae=Qn(v);if(mn(y,!1),se&&Gn(se),!Ae&&(Q=X&&X.onVnodeBeforeMount)&&yt(Q,Oe,v),mn(y,!0),z&&ae){const Ne=()=>{y.subTree=sr(y),ae(z,y.subTree,y,P,null)};Ae?v.type.__asyncLoader().then(()=>!y.isUnmounted&&Ne()):Ne()}else{const Ne=y.subTree=sr(y);_(null,Ne,C,S,y,P,j),v.el=Ne.el}if(fe&&Ke(fe,P),!Ae&&(Q=X&&X.onVnodeMounted)){const Ne=v;Ke(()=>yt(Q,Oe,Ne),P)}(v.shapeFlag&256||Oe&&Qn(Oe.vnode)&&Oe.vnode.shapeFlag&256)&&y.a&&Ke(y.a,P),y.isMounted=!0,v=C=S=null}},N=y.effect=new Co(M,()=>Fo(D),y.scope),D=y.update=()=>N.run();D.id=y.uid,mn(y,!0),D()},K=(y,v,C)=>{v.component=y;const S=y.vnode.props;y.vnode=v,y.next=null,Mf(y,v.props,S,C),Nf(y,v.children,C),ls(),Al(),is()},te=(y,v,C,S,P,j,q,M,N=!1)=>{const D=y&&y.children,Q=y?y.shapeFlag:0,z=v.children,{patchFlag:X,shapeFlag:se}=v;if(X>0){if(X&128){be(D,z,C,S,P,j,q,M,N);return}else if(X&256){pe(D,z,C,S,P,j,q,M,N);return}}se&8?(Q&16&&H(D,P,j),z!==D&&p(C,z)):Q&16?se&16?be(D,z,C,S,P,j,q,M,N):H(D,P,j,!0):(Q&8&&p(C,""),se&16&&J(z,C,S,P,j,q,M,N))},pe=(y,v,C,S,P,j,q,M,N)=>{y=y||Wn,v=v||Wn;const D=y.length,Q=v.length,z=Math.min(D,Q);let X;for(X=0;X<z;X++){const se=v[X]=N?en(v[X]):Mt(v[X]);_(y[X],se,C,null,P,j,q,M,N)}D>Q?H(y,P,j,!0,!1,z):J(v,C,S,P,j,q,M,N,z)},be=(y,v,C,S,P,j,q,M,N)=>{let D=0;const Q=v.length;let z=y.length-1,X=Q-1;for(;D<=z&&D<=X;){const se=y[D],fe=v[D]=N?en(v[D]):Mt(v[D]);if(hs(se,fe))_(se,fe,C,null,P,j,q,M,N);else break;D++}for(;D<=z&&D<=X;){const se=y[z],fe=v[X]=N?en(v[X]):Mt(v[X]);if(hs(se,fe))_(se,fe,C,null,P,j,q,M,N);else break;z--,X--}if(D>z){if(D<=X){const se=X+1,fe=se<Q?v[se].el:S;for(;D<=X;)_(null,v[D]=N?en(v[D]):Mt(v[D]),C,fe,P,j,q,M,N),D++}}else if(D>X)for(;D<=z;)Ie(y[D],P,j,!0),D++;else{const se=D,fe=D,Oe=new Map;for(D=fe;D<=X;D++){const ot=v[D]=N?en(v[D]):Mt(v[D]);ot.key!=null&&Oe.set(ot.key,D)}let Ae,Ne=0;const bt=X-fe+1;let Rn=!1,hl=0;const ms=new Array(bt);for(D=0;D<bt;D++)ms[D]=0;for(D=se;D<=z;D++){const ot=y[D];if(Ne>=bt){Ie(ot,P,j,!0);continue}let Ft;if(ot.key!=null)Ft=Oe.get(ot.key);else for(Ae=fe;Ae<=X;Ae++)if(ms[Ae-fe]===0&&hs(ot,v[Ae])){Ft=Ae;break}Ft===void 0?Ie(ot,P,j,!0):(ms[Ft-fe]=D+1,Ft>=hl?hl=Ft:Rn=!0,_(ot,v[Ft],C,null,P,j,q,M,N),Ne++)}const gl=Rn?qf(ms):Wn;for(Ae=gl.length-1,D=bt-1;D>=0;D--){const ot=fe+D,Ft=v[ot],yl=ot+1<Q?v[ot+1].el:S;ms[D]===0?_(null,Ft,C,yl,P,j,q,M,N):Rn&&(Ae<0||D!==gl[Ae]?Xe(Ft,C,yl,2):Ae--)}}},Xe=(y,v,C,S,P=null)=>{const{el:j,type:q,transition:M,children:N,shapeFlag:D}=y;if(D&6){Xe(y.component.subTree,v,C,S);return}if(D&128){y.suspense.move(v,C,S);return}if(D&64){q.move(y,v,C,de);return}if(q===Ee){a(j,v,C);for(let z=0;z<N.length;z++)Xe(N[z],v,C,S);a(y.anchor,v,C);return}if(q===or){E(y,v,C);return}if(S!==2&&D&1&&M)if(S===0)M.beforeEnter(j),a(j,v,C),Ke(()=>M.enter(j),P);else{const{leave:z,delayLeave:X,afterLeave:se}=M,fe=()=>a(j,v,C),Oe=()=>{z(j,()=>{fe(),se&&se()})};X?X(j,fe,Oe):Oe()}else a(j,v,C)},Ie=(y,v,C,S=!1,P=!1)=>{const{type:j,props:q,ref:M,children:N,dynamicChildren:D,shapeFlag:Q,patchFlag:z,dirs:X}=y;if(M!=null&&Rr(M,null,C,y,!0),Q&256){v.ctx.deactivate(y);return}const se=Q&1&&X,fe=!Qn(y);let Oe;if(fe&&(Oe=q&&q.onVnodeBeforeUnmount)&&yt(Oe,v,y),Q&6)T(y.component,C,S);else{if(Q&128){y.suspense.unmount(C,S);return}se&&fn(y,null,v,"beforeUnmount"),Q&64?y.type.remove(y,v,C,P,de,S):D&&(j!==Ee||z>0&&z&64)?H(D,v,C,!1,!0):(j===Ee&&z&384||!P&&Q&16)&&H(N,v,C),S&&Jt(y)}(fe&&(Oe=q&&q.onVnodeUnmounted)||se)&&Ke(()=>{Oe&&yt(Oe,v,y),se&&fn(y,null,v,"unmounted")},C)},Jt=y=>{const{type:v,el:C,anchor:S,transition:P}=y;if(v===Ee){Nn(C,S);return}if(v===or){B(y);return}const j=()=>{r(C),P&&!P.persisted&&P.afterLeave&&P.afterLeave()};if(y.shapeFlag&1&&P&&!P.persisted){const{leave:q,delayLeave:M}=P,N=()=>q(C,j);M?M(y.el,j,N):N()}else j()},Nn=(y,v)=>{let C;for(;y!==v;)C=m(y),r(y),y=C;r(v)},T=(y,v,C)=>{const{bum:S,scope:P,update:j,subTree:q,um:M}=y;S&&Gn(S),P.stop(),j&&(j.active=!1,Ie(q,y,v,C)),M&&Ke(M,v),Ke(()=>{y.isUnmounted=!0},v),v&&v.pendingBranch&&!v.isUnmounted&&y.asyncDep&&!y.asyncResolved&&y.suspenseId===v.pendingId&&(v.deps--,v.deps===0&&v.resolve())},H=(y,v,C,S=!1,P=!1,j=0)=>{for(let q=j;q<y.length;q++)Ie(y[q],v,C,S,P)},R=y=>y.shapeFlag&6?R(y.component.subTree):y.shapeFlag&128?y.suspense.next():m(y.anchor||y.el),Y=(y,v,C)=>{y==null?v._vnode&&Ie(v._vnode,null,null,!0):_(v._vnode||null,y,v,null,null,null,C),Al(),Qc(),v._vnode=y},de={p:_,um:Ie,m:Xe,r:Jt,mt:Fe,mc:J,pc:te,pbc:ue,n:R,o:e};let ye,ae;return t&&([ye,ae]=t(de)),{render:Y,hydrate:ye,createApp:Lf(Y,ye)}}function mn({effect:e,update:t},s){e.allowRecurse=t.allowRecurse=s}function Lo(e,t,s=!1){const a=e.children,r=t.children;if(ne(a)&&ne(r))for(let o=0;o<a.length;o++){const l=a[o];let i=r[o];i.shapeFlag&1&&!i.dynamicChildren&&((i.patchFlag<=0||i.patchFlag===32)&&(i=r[o]=en(r[o]),i.el=l.el),s||Lo(l,i))}}function qf(e){const t=e.slice(),s=[0];let a,r,o,l,i;const c=e.length;for(a=0;a<c;a++){const u=e[a];if(u!==0){if(r=s[s.length-1],e[r]<u){t[a]=r,s.push(a);continue}for(o=0,l=s.length-1;o<l;)i=o+l>>1,e[s[i]]<u?o=i+1:l=i;u<e[s[o]]&&(o>0&&(t[a]=s[o-1]),s[o]=a)}}for(o=s.length,l=s[o-1];o-- >0;)s[o]=l,l=t[l];return s}const Uf=e=>e.__isTeleport,As=e=>e&&(e.disabled||e.disabled===""),jl=e=>typeof SVGElement<"u"&&e instanceof SVGElement,Lr=(e,t)=>{const s=e&&e.to;return je(s)?t?t(s):null:s},Kf={__isTeleport:!0,process(e,t,s,a,r,o,l,i,c,u){const{mc:p,pc:d,pbc:m,o:{insert:g,querySelector:h,createText:_,createComment:x}}=u,b=As(t.props);let{shapeFlag:w,children:E,dynamicChildren:B}=t;if(e==null){const $=t.el=_(""),F=t.anchor=_("");g($,s,a),g(F,s,a);const I=t.target=Lr(t.props,h),J=t.targetAnchor=_("");I&&(g(J,I),l=l||jl(I));const ie=(ue,ge)=>{w&16&&p(E,ue,ge,r,o,l,i,c)};b?ie(s,F):I&&ie(I,J)}else{t.el=e.el;const $=t.anchor=e.anchor,F=t.target=e.target,I=t.targetAnchor=e.targetAnchor,J=As(e.props),ie=J?s:F,ue=J?$:I;if(l=l||jl(F),B?(m(e.dynamicChildren,B,ie,r,o,l,i),Lo(e,t,!0)):c||d(e,t,ie,ue,r,o,l,i,!1),b)J||ca(t,s,$,u,1);else if((t.props&&t.props.to)!==(e.props&&e.props.to)){const ge=t.target=Lr(t.props,h);ge&&ca(t,ge,null,u,0)}else J&&ca(t,F,I,u,1)}},remove(e,t,s,a,{um:r,o:{remove:o}},l){const{shapeFlag:i,children:c,anchor:u,targetAnchor:p,target:d,props:m}=e;if(d&&o(p),(l||!As(m))&&(o(u),i&16))for(let g=0;g<c.length;g++){const h=c[g];r(h,t,s,!0,!!h.dynamicChildren)}},move:ca,hydrate:zf};function ca(e,t,s,{o:{insert:a},m:r},o=2){o===0&&a(e.targetAnchor,t,s);const{el:l,anchor:i,shapeFlag:c,children:u,props:p}=e,d=o===2;if(d&&a(l,t,s),(!d||As(p))&&c&16)for(let m=0;m<u.length;m++)r(u[m],t,s,2);d&&a(i,t,s)}function zf(e,t,s,a,r,o,{o:{nextSibling:l,parentNode:i,querySelector:c}},u){const p=t.target=Lr(t.props,c);if(p){const d=p._lpa||p.firstChild;if(t.shapeFlag&16)if(As(t.props))t.anchor=u(l(e),t,i(e),s,a,r,o),t.targetAnchor=d;else{t.anchor=l(e);let m=d;for(;m;)if(m=l(m),m&&m.nodeType===8&&m.data==="teleport anchor"){t.targetAnchor=m,p._lpa=t.targetAnchor&&l(t.targetAnchor);break}u(d,t,p,s,a,r,o)}}return t.anchor&&l(t.anchor)}const Wf=Kf,Ee=Symbol(void 0),Ho=Symbol(void 0),pn=Symbol(void 0),or=Symbol(void 0),Bs=[];let Ct=null;function A(e=!1){Bs.push(Ct=e?null:[])}function Yf(){Bs.pop(),Ct=Bs[Bs.length-1]||null}let Vs=1;function Il(e){Vs+=e}function yu(e){return e.dynamicChildren=Vs>0?Ct||Wn:null,Yf(),Vs>0&&Ct&&Ct.push(e),e}function V(e,t,s,a,r,o){return yu(n(e,t,s,a,r,o,!0))}function G(e,t,s,a,r){return yu(W(e,t,s,a,r,!0))}function ns(e){return e?e.__v_isVNode===!0:!1}function hs(e,t){return e.type===t.type&&e.key===t.key}const Za="__vInternal",vu=({key:e})=>e!=null?e:null,ha=({ref:e,ref_key:t,ref_for:s})=>e!=null?je(e)||xe(e)||oe(e)?{i:Ge,r:e,k:t,f:!!s}:e:null;function n(e,t=null,s=null,a=0,r=null,o=e===Ee?0:1,l=!1,i=!1){const c={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&vu(t),ref:t&&ha(t),scopeId:za,slotScopeIds:null,children:s,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:o,patchFlag:a,dynamicProps:r,dynamicChildren:null,appContext:null};return i?(Vo(c,s),o&128&&e.normalize(c)):s&&(c.shapeFlag|=je(s)?8:16),Vs>0&&!l&&Ct&&(c.patchFlag>0||o&6)&&c.patchFlag!==32&&Ct.push(c),c}const W=Gf;function Gf(e,t=null,s=null,a=0,r=null,o=!1){if((!e||e===Bf)&&(e=pn),ns(e)){const i=Dn(e,t,!0);return s&&Vo(i,s),Vs>0&&!o&&Ct&&(i.shapeFlag&6?Ct[Ct.indexOf(e)]=i:Ct.push(i)),i.patchFlag|=-2,i}if(nm(e)&&(e=e.__vccOpts),t){t=Ce(t);let{class:i,style:c}=t;i&&!je(i)&&(t.class=Me(i)),$e(c)&&(Kc(c)&&!ne(c)&&(c=st({},c)),t.style=Je(c))}const l=je(e)?1:tu(e)?128:Uf(e)?64:$e(e)?4:oe(e)?2:0;return n(e,t,s,a,r,l,o,!0)}function Ce(e){return e?Kc(e)||Za in e?st({},e):e:null}function Dn(e,t,s=!1){const{props:a,ref:r,patchFlag:o,children:l}=e,i=t?gt(a||{},t):a;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:i,key:i&&vu(i),ref:t&&t.ref?s&&r?ne(r)?r.concat(ha(t)):[r,ha(t)]:ha(t):r,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:l,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Ee?o===-1?16:o|16:o,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Dn(e.ssContent),ssFallback:e.ssFallback&&Dn(e.ssFallback),el:e.el,anchor:e.anchor}}function f(e=" ",t=0){return W(Ho,null,e,t)}function me(e="",t=!1){return t?(A(),G(pn,null,e)):W(pn,null,e)}function Mt(e){return e==null||typeof e=="boolean"?W(pn):ne(e)?W(Ee,null,e.slice()):typeof e=="object"?en(e):W(Ho,null,String(e))}function en(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Dn(e)}function Vo(e,t){let s=0;const{shapeFlag:a}=e;if(t==null)t=null;else if(ne(t))s=16;else if(typeof t=="object")if(a&65){const r=t.default;r&&(r._c&&(r._d=!1),Vo(e,r()),r._c&&(r._d=!0));return}else{s=32;const r=t._;!r&&!(Za in t)?t._ctx=Ge:r===3&&Ge&&(Ge.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else oe(t)?(t={default:t,_ctx:Ge},s=32):(t=String(t),a&64?(s=16,t=[f(t)]):s=8);e.children=t,e.shapeFlag|=s}function gt(...e){const t={};for(let s=0;s<e.length;s++){const a=e[s];for(const r in a)if(r==="class")t.class!==a.class&&(t.class=Me([t.class,a.class]));else if(r==="style")t.style=Je([t.style,a.style]);else if(Na(r)){const o=t[r],l=a[r];l&&o!==l&&!(ne(o)&&o.includes(l))&&(t[r]=o?[].concat(o,l):l)}else r!==""&&(t[r]=a[r])}return t}function yt(e,t,s,a=null){St(e,t,7,[s,a])}const Zf=gu();let Jf=0;function Qf(e,t,s){const a=e.type,r=(t?t.appContext:e.appContext)||Zf,o={uid:Jf++,vnode:e,type:a,parent:t,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new Dc(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:du(a,r),emitsOptions:eu(a,r),emit:null,emitted:null,propsDefaults:Se,inheritAttrs:a.inheritAttrs,ctx:Se,data:Se,props:Se,attrs:Se,slots:Se,refs:Se,setupState:Se,setupContext:null,suspense:s,suspenseId:s?s.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return o.ctx={_:o},o.root=t?t.root:o,o.emit=cf.bind(null,o),e.ce&&e.ce(o),o}let Ue=null;const Mn=()=>Ue||Ge,ss=e=>{Ue=e,e.scope.on()},Sn=()=>{Ue&&Ue.scope.off(),Ue=null};function _u(e){return e.vnode.shapeFlag&4}let qs=!1;function Xf(e,t=!1){qs=t;const{props:s,children:a}=e.vnode,r=_u(e);Ff(e,s,r,t),If(e,a);const o=r?em(e,t):void 0;return qs=!1,o}function em(e,t){const s=e.type;e.accessCache=Object.create(null),e.proxy=qa(new Proxy(e.ctx,Sf));const{setup:a}=s;if(a){const r=e.setupContext=a.length>1?bu(e):null;ss(e),ls();const o=an(a,e,0,[e.props,r]);if(is(),Sn(),Oc(o)){if(o.then(Sn,Sn),t)return o.then(l=>{Nl(e,l,t)}).catch(l=>{Ua(l,e,0)});e.asyncDep=o}else Nl(e,o,t)}else xu(e,t)}function Nl(e,t,s){oe(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:$e(t)&&(e.setupState=Wc(t)),xu(e,s)}let Rl;function xu(e,t,s){const a=e.type;if(!e.render){if(!t&&Rl&&!a.render){const r=a.template||No(e).template;if(r){const{isCustomElement:o,compilerOptions:l}=e.appContext.config,{delimiters:i,compilerOptions:c}=a,u=st(st({isCustomElement:o,delimiters:i},l),c);a.render=Rl(r,u)}}e.render=a.render||Bt}ss(e),ls(),Of(e),is(),Sn()}function tm(e){return new Proxy(e.attrs,{get(t,s){return ht(e,"get","$attrs"),t[s]}})}function bu(e){const t=a=>{e.exposed=a||{}};let s;return{get attrs(){return s||(s=tm(e))},slots:e.slots,emit:e.emit,expose:t}}function Ja(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(Wc(qa(e.exposed)),{get(t,s){if(s in t)return t[s];if(s in Ca)return Ca[s](e)}}))}function Hr(e,t=!0){return oe(e)?e.displayName||e.name:e.name||t&&e.__name}function nm(e){return oe(e)&&"__vccOpts"in e}const O=(e,t)=>nf(e,t,qs);function sm(){return am().slots}function am(){const e=Mn();return e.setupContext||(e.setupContext=bu(e))}function dt(e,t,s){const a=arguments.length;return a===2?$e(t)&&!ne(t)?ns(t)?W(e,null,[t]):W(e,t):W(e,null,t):(a>3?s=Array.prototype.slice.call(arguments,2):a===3&&ns(s)&&(s=[s]),W(e,t,s))}const rm="3.2.41",om="http://www.w3.org/2000/svg",xn=typeof document<"u"?document:null,Ll=xn&&xn.createElement("template"),lm={insert:(e,t,s)=>{t.insertBefore(e,s||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,s,a)=>{const r=t?xn.createElementNS(om,e):xn.createElement(e,s?{is:s}:void 0);return e==="select"&&a&&a.multiple!=null&&r.setAttribute("multiple",a.multiple),r},createText:e=>xn.createTextNode(e),createComment:e=>xn.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>xn.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,s,a,r,o){const l=s?s.previousSibling:t.lastChild;if(r&&(r===o||r.nextSibling))for(;t.insertBefore(r.cloneNode(!0),s),!(r===o||!(r=r.nextSibling)););else{Ll.innerHTML=a?`<svg>${e}</svg>`:e;const i=Ll.content;if(a){const c=i.firstChild;for(;c.firstChild;)i.appendChild(c.firstChild);i.removeChild(c)}t.insertBefore(i,s)}return[l?l.nextSibling:t.firstChild,s?s.previousSibling:t.lastChild]}};function im(e,t,s){const a=e._vtc;a&&(t=(t?[t,...a]:[...a]).join(" ")),t==null?e.removeAttribute("class"):s?e.setAttribute("class",t):e.className=t}function cm(e,t,s){const a=e.style,r=je(s);if(s&&!r){for(const o in s)Vr(a,o,s[o]);if(t&&!je(t))for(const o in t)s[o]==null&&Vr(a,o,"")}else{const o=a.display;r?t!==s&&(a.cssText=s):t&&e.removeAttribute("style"),"_vod"in e&&(a.display=o)}}const Hl=/\s*!important$/;function Vr(e,t,s){if(ne(s))s.forEach(a=>Vr(e,t,a));else if(s==null&&(s=""),t.startsWith("--"))e.setProperty(t,s);else{const a=um(e,t);Hl.test(s)?e.setProperty(Fn(a),s.replace(Hl,""),"important"):e[a]=s}}const Vl=["Webkit","Moz","ms"],lr={};function um(e,t){const s=lr[t];if(s)return s;let a=Lt(t);if(a!=="filter"&&a in e)return lr[t]=a;a=Ha(a);for(let r=0;r<Vl.length;r++){const o=Vl[r]+a;if(o in e)return lr[t]=o}return t}const ql="http://www.w3.org/1999/xlink";function pm(e,t,s,a,r){if(a&&t.startsWith("xlink:"))s==null?e.removeAttributeNS(ql,t.slice(6,t.length)):e.setAttributeNS(ql,t,s);else{const o=id(t);s==null||o&&!Ac(s)?e.removeAttribute(t):e.setAttribute(t,o?"":s)}}function dm(e,t,s,a,r,o,l){if(t==="innerHTML"||t==="textContent"){a&&l(a,r,o),e[t]=s==null?"":s;return}if(t==="value"&&e.tagName!=="PROGRESS"&&!e.tagName.includes("-")){e._value=s;const c=s==null?"":s;(e.value!==c||e.tagName==="OPTION")&&(e.value=c),s==null&&e.removeAttribute(t);return}let i=!1;if(s===""||s==null){const c=typeof e[t];c==="boolean"?s=Ac(s):s==null&&c==="string"?(s="",i=!0):c==="number"&&(s=0,i=!0)}try{e[t]=s}catch{}i&&e.removeAttribute(t)}function qn(e,t,s,a){e.addEventListener(t,s,a)}function fm(e,t,s,a){e.removeEventListener(t,s,a)}function mm(e,t,s,a,r=null){const o=e._vei||(e._vei={}),l=o[t];if(a&&l)l.value=a;else{const[i,c]=hm(t);if(a){const u=o[t]=vm(a,r);qn(e,i,u,c)}else l&&(fm(e,i,l,c),o[t]=void 0)}}const Ul=/(?:Once|Passive|Capture)$/;function hm(e){let t;if(Ul.test(e)){t={};let a;for(;a=e.match(Ul);)e=e.slice(0,e.length-a[0].length),t[a[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):Fn(e.slice(2)),t]}let ir=0;const gm=Promise.resolve(),ym=()=>ir||(gm.then(()=>ir=0),ir=Date.now());function vm(e,t){const s=a=>{if(!a._vts)a._vts=Date.now();else if(a._vts<=s.attached)return;St(_m(a,s.value),t,5,[a])};return s.value=e,s.attached=ym(),s}function _m(e,t){if(ne(t)){const s=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{s.call(e),e._stopped=!0},t.map(a=>r=>!r._stopped&&a&&a(r))}else return t}const Kl=/^on[a-z]/,xm=(e,t,s,a,r=!1,o,l,i,c)=>{t==="class"?im(e,a,r):t==="style"?cm(e,s,a):Na(t)?xo(t)||mm(e,t,s,a,l):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):bm(e,t,a,r))?dm(e,t,a,o,l,i,c):(t==="true-value"?e._trueValue=a:t==="false-value"&&(e._falseValue=a),pm(e,t,a,r))};function bm(e,t,s,a){return a?!!(t==="innerHTML"||t==="textContent"||t in e&&Kl.test(t)&&oe(s)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||Kl.test(t)&&je(s)?!1:t in e}const zl=e=>{const t=e.props["onUpdate:modelValue"]||!1;return ne(t)?s=>Gn(t,s):t};function km(e){e.target.composing=!0}function Wl(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const Em={created(e,{modifiers:{lazy:t,trim:s,number:a}},r){e._assign=zl(r);const o=a||r.props&&r.props.type==="number";qn(e,t?"change":"input",l=>{if(l.target.composing)return;let i=e.value;s&&(i=i.trim()),o&&(i=Or(i)),e._assign(i)}),s&&qn(e,"change",()=>{e.value=e.value.trim()}),t||(qn(e,"compositionstart",km),qn(e,"compositionend",Wl),qn(e,"change",Wl))},mounted(e,{value:t}){e.value=t==null?"":t},beforeUpdate(e,{value:t,modifiers:{lazy:s,trim:a,number:r}},o){if(e._assign=zl(o),e.composing||document.activeElement===e&&e.type!=="range"&&(s||a&&e.value.trim()===t||(r||e.type==="number")&&Or(e.value)===t))return;const l=t==null?"":t;e.value!==l&&(e.value=l)}},wm={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},Yl=(e,t)=>s=>{if(!("key"in s))return;const a=Fn(s.key);if(t.some(r=>r===a||wm[r]===a))return e(s)},ku={beforeMount(e,{value:t},{transition:s}){e._vod=e.style.display==="none"?"":e.style.display,s&&t?s.beforeEnter(e):gs(e,t)},mounted(e,{value:t},{transition:s}){s&&t&&s.enter(e)},updated(e,{value:t,oldValue:s},{transition:a}){!t!=!s&&(a?t?(a.beforeEnter(e),gs(e,!0),a.enter(e)):a.leave(e,()=>{gs(e,!1)}):gs(e,t))},beforeUnmount(e,{value:t}){gs(e,t)}};function gs(e,t){e.style.display=t?e._vod:"none"}const Cm=st({patchProp:xm},lm);let Gl;function Am(){return Gl||(Gl=Hf(Cm))}const Bm=(...e)=>{const t=Am().createApp(...e),{mount:s}=t;return t.mount=a=>{const r=Sm(a);if(!r)return;const o=t._component;!oe(o)&&!o.render&&!o.template&&(o.template=r.innerHTML),r.innerHTML="";const l=s(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),l},t};function Sm(e){return je(e)?document.querySelector(e):e}var Zl;const Pt=typeof window<"u",Om=e=>typeof e<"u",Tm=Object.prototype.toString,Ba=e=>typeof e=="function",Pm=e=>typeof e=="number",Eu=e=>typeof e=="string",qr=e=>Tm.call(e)==="[object Object]",Ur=()=>+Date.now(),On=()=>{};Pt&&((Zl=window==null?void 0:window.navigator)==null?void 0:Zl.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function ze(e){return typeof e=="function"?e():k(e)}function Dm(e,t){function s(...a){e(()=>t.apply(this,a),{fn:t,thisArg:this,args:a})}return s}const wu=e=>e();function $m(e=wu){const t=L(!0);function s(){t.value=!1}function a(){t.value=!0}return{isActive:t,pause:s,resume:a,eventFilter:(...o)=>{t.value&&e(...o)}}}function Fm(e){return e}function Mm(e,t){var s;if(typeof e=="number")return e+t;const a=((s=e.match(/^-?[0-9]+\.?[0-9]*/))==null?void 0:s[0])||"",r=e.slice(a.length),o=parseFloat(a)+t;return Number.isNaN(o)?e:o+r}function jm(e,t){let s,a,r;const o=L(!0),l=()=>{o.value=!0,r()};ce(e,l,{flush:"sync"});const i=Ba(t)?t:t.get,c=Ba(t)?void 0:t.set,u=Yc((p,d)=>(a=p,r=d,{get(){return o.value&&(s=i(),o.value=!1),a(),s},set(m){c==null||c(m)}}));return Object.isExtensible(u)&&(u.trigger=l),u}function Vt(e){return $c()?(Fc(e),!0):!1}function Im(e){if(!xe(e))return De(e);const t=new Proxy({},{get(s,a,r){return k(Reflect.get(e.value,a,r))},set(s,a,r){return xe(e.value[a])&&!xe(r)?e.value[a].value=r:e.value[a]=r,!0},deleteProperty(s,a){return Reflect.deleteProperty(e.value,a)},has(s,a){return Reflect.has(e.value,a)},ownKeys(){return Object.keys(e.value)},getOwnPropertyDescriptor(){return{enumerable:!0,configurable:!0}}});return De(t)}function Cu(e){return typeof e=="function"?O(e):L(e)}var Nm=Object.defineProperty,Rm=Object.defineProperties,Lm=Object.getOwnPropertyDescriptors,Jl=Object.getOwnPropertySymbols,Hm=Object.prototype.hasOwnProperty,Vm=Object.prototype.propertyIsEnumerable,Ql=(e,t,s)=>t in e?Nm(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,qm=(e,t)=>{for(var s in t||(t={}))Hm.call(t,s)&&Ql(e,s,t[s]);if(Jl)for(var s of Jl(t))Vm.call(t,s)&&Ql(e,s,t[s]);return e},Um=(e,t)=>Rm(e,Lm(t));function Km(e){if(!xe(e))return Qd(e);const t=Array.isArray(e.value)?new Array(e.value.length):{};for(const s in e.value)t[s]=Yc(()=>({get(){return e.value[s]},set(a){if(Array.isArray(e.value)){const r=[...e.value];r[s]=a,e.value=r}else{const r=Um(qm({},e.value),{[s]:a});Object.setPrototypeOf(r,e.value),e.value=r}}}));return t}function qo(e,t=!0){Mn()?us(e):t?e():Ye(e)}function zm(e){Mn()&&Ga(e)}function Wm(e,t=1e3,s={}){const{immediate:a=!0,immediateCallback:r=!1}=s;let o=null;const l=L(!1);function i(){o&&(clearInterval(o),o=null)}function c(){l.value=!1,i()}function u(){k(t)<=0||(l.value=!0,r&&e(),i(),o=setInterval(e,ze(t)))}if(a&&Pt&&u(),xe(t)){const p=ce(t,()=>{l.value&&Pt&&u()});Vt(p)}return Vt(c),{isActive:l,pause:c,resume:u}}function Ym(e,t,s={}){const{immediate:a=!0}=s,r=L(!1);let o=null;function l(){o&&(clearTimeout(o),o=null)}function i(){r.value=!1,l()}function c(...u){l(),r.value=!0,o=setTimeout(()=>{r.value=!1,o=null,e(...u)},ze(t))}return a&&(r.value=!0,Pt&&c()),Vt(i),{isPending:r,start:c,stop:i}}function Au(e=!1,t={}){const{truthyValue:s=!0,falsyValue:a=!1}=t,r=xe(e),o=L(e);function l(i){if(arguments.length)return o.value=i,o.value;{const c=ze(s);return o.value=o.value===c?ze(a):c,o.value}}return r?l:[o,l]}var Xl=Object.getOwnPropertySymbols,Gm=Object.prototype.hasOwnProperty,Zm=Object.prototype.propertyIsEnumerable,Jm=(e,t)=>{var s={};for(var a in e)Gm.call(e,a)&&t.indexOf(a)<0&&(s[a]=e[a]);if(e!=null&&Xl)for(var a of Xl(e))t.indexOf(a)<0&&Zm.call(e,a)&&(s[a]=e[a]);return s};function Qm(e,t,s={}){const a=s,{eventFilter:r=wu}=a,o=Jm(a,["eventFilter"]);return ce(e,Dm(r,t),o)}var Xm=Object.defineProperty,eh=Object.defineProperties,th=Object.getOwnPropertyDescriptors,Sa=Object.getOwnPropertySymbols,Bu=Object.prototype.hasOwnProperty,Su=Object.prototype.propertyIsEnumerable,ei=(e,t,s)=>t in e?Xm(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,nh=(e,t)=>{for(var s in t||(t={}))Bu.call(t,s)&&ei(e,s,t[s]);if(Sa)for(var s of Sa(t))Su.call(t,s)&&ei(e,s,t[s]);return e},sh=(e,t)=>eh(e,th(t)),ah=(e,t)=>{var s={};for(var a in e)Bu.call(e,a)&&t.indexOf(a)<0&&(s[a]=e[a]);if(e!=null&&Sa)for(var a of Sa(e))t.indexOf(a)<0&&Su.call(e,a)&&(s[a]=e[a]);return s};function rh(e,t,s={}){const a=s,{eventFilter:r}=a,o=ah(a,["eventFilter"]),{eventFilter:l,pause:i,resume:c,isActive:u}=$m(r);return{stop:Qm(e,t,sh(nh({},o),{eventFilter:l})),pause:i,resume:c,isActive:u}}var Ou="usehead",ti="head:count",cr="data-head-attrs",Tu="data-meta-body",oh=(e,t)=>{const s=a=>{if(a.props.renderPriority)return a.props.renderPriority;switch(a.tag){case"base":return-1;case"meta":return a.props.charset?-2:a.props["http-equiv"]==="content-security-policy"?0:10;default:return 10}};return s(e)-s(t)},lh=e=>{if(!["meta","base","script","link","title"].includes(e.tag))return!1;const{props:t,tag:s}=e;if(s==="base"||s==="title")return s;if(s==="link"&&t.rel==="canonical")return"canonical";if(t.charset)return"charset";const a=["key","id","name","property","http-equiv"];for(const r of a){let o;if(typeof t.getAttribute=="function"&&t.hasAttribute(r)?o=t.getAttribute(r):o=t[r],o!==void 0)return`${s}-${r}-${o}`}return!1};function Kr(e){const t=ze(e);return!e||!t?t:Array.isArray(t)?t.map(Kr):typeof t=="object"?Object.fromEntries(Object.entries(t).map(([s,a])=>s==="titleTemplate"?[s,k(a)]:[s,Kr(a)])):t}function ih(e){return{...e,input:Kr(e.input)}}function ni(e,t){if(e instanceof HTMLElement&&t instanceof HTMLElement){const s=t.getAttribute("nonce");if(s&&!e.getAttribute("nonce")){const a=t.cloneNode(!0);return a.setAttribute("nonce",""),a.nonce=s,s===e.nonce&&e.isEqualNode(a)}}return e.isEqualNode(t)}var si=(e,t)=>{const s=e.getAttribute(cr);if(s)for(const r of s.split(","))r in t||e.removeAttribute(r);const a=[];for(const r in t){const o=t[r];o!=null&&(o===!1?e.removeAttribute(r):e.setAttribute(r,o),a.push(r))}a.length?e.setAttribute(cr,a.join(",")):e.removeAttribute(cr)},ch=(e,t,s)=>{const a=s.createElement(e);for(const r of Object.keys(t))if(r==="body"&&t.body===!0)a.setAttribute(Tu,"true");else{const o=t[r];if(r==="renderPriority"||r==="key"||o===!1)continue;r==="children"||r==="textContent"?a.textContent=o:r==="innerHTML"?a.innerHTML=o:a.setAttribute(r,o)}return a},uh=(e=window.document,t,s)=>{var a,r;const o=e.head,l=e.body;let i=o.querySelector(`meta[name="${ti}"]`);const c=l.querySelectorAll(`[${Tu}]`),u=i?Number(i.getAttribute("content")):0,p=[],d=[];if(c)for(let g=0;g<c.length;g++)c[g]&&((a=c[g].tagName)==null?void 0:a.toLowerCase())===t&&d.push(c[g]);if(i)for(let g=0,h=i.previousElementSibling;g<u;g++,h=(h==null?void 0:h.previousElementSibling)||null)((r=h==null?void 0:h.tagName)==null?void 0:r.toLowerCase())===t&&p.push(h);else i=e.createElement("meta"),i.setAttribute("name",ti),i.setAttribute("content","0"),o.append(i);let m=s.map(g=>{var h;return{element:ch(g.tag,g.props,e),body:(h=g.props.body)!=null?h:!1}});m=m.filter(g=>{for(let h=0;h<p.length;h++){const _=p[h];if(ni(_,g.element))return p.splice(h,1),!1}for(let h=0;h<d.length;h++){const _=d[h];if(ni(_,g.element))return d.splice(h,1),!1}return!0}),d.forEach(g=>{var h;return(h=g.parentNode)==null?void 0:h.removeChild(g)}),p.forEach(g=>{var h;return(h=g.parentNode)==null?void 0:h.removeChild(g)}),m.forEach(g=>{g.body===!0?l.insertAdjacentElement("beforeend",g.element):o.insertBefore(g.element,i)}),i.setAttribute("content",`${u-p.length+m.filter(g=>!g.body).length}`)},ph=({domCtx:e,document:t,previousTags:s})=>{t||(t=window.document),e.title!==void 0&&(t.title=e.title),si(t.documentElement,e.htmlAttrs),si(t.body,e.bodyAttrs);const a=new Set([...Object.keys(e.actualTags),...s]);for(const r of a)uh(t,r,e.actualTags[r]||[]);s.clear(),Object.keys(e.actualTags).forEach(r=>s.add(r))},dh=()=>{const e=U(Ou);if(!e)throw new Error("You may forget to apply app.use(head)");return e},fh=["title","meta","link","base","style","script","noscript","htmlAttrs","bodyAttrs"],mh=(e,t)=>e==null?"":typeof e=="function"?e(t):e.replace("%s",t!=null?t:""),hh=e=>{const t=[],s=Object.keys(e),a=r=>(r.hid&&(r.key=r.hid,delete r.hid),r.vmid&&(r.key=r.vmid,delete r.vmid),r);for(const r of s)if(e[r]!=null)switch(r){case"title":t.push({tag:r,props:{textContent:e[r]}});break;case"titleTemplate":break;case"base":t.push({tag:r,props:{key:"default",...e[r]}});break;default:if(fh.includes(r)){const o=e[r];Array.isArray(o)?o.forEach(l=>{const i=a(l);t.push({tag:r,props:i})}):o&&t.push({tag:r,props:a(o)})}break}return t},gh=e=>{let t=[];const s=new Set;let a=0;const r=[],o=[];e&&t.push({input:e});let l=null,i;const c={install(u){u.config.globalProperties.$head=c,u.provide(Ou,c)},hookBeforeDomUpdate:r,hookTagsResolved:o,get headTags(){const u=[],p={},d=t.map(ih),m=d.map(h=>h.input.titleTemplate).reverse().find(h=>h!=null);d.forEach((h,_)=>{hh(h.input).forEach((b,w)=>{var E;if(b._position=_*1e4+w,b._options&&delete b._options,h.options&&(b._options=h.options),m&&b.tag==="title"&&(b.props.textContent=mh(m,b.props.textContent)),!((E=b._options)!=null&&E.raw)){for(const $ in b.props)$.startsWith("on")&&(console.warn("[@vueuse/head] Warning, you must use `useHeadRaw` to set event listeners. See https://github.com/vueuse/head/pull/118",b),delete b.props[$]);b.props.innerHTML&&(console.warn("[@vueuse/head] Warning, you must use `useHeadRaw` to use `innerHTML`",b),delete b.props.innerHTML)}const B=lh(b);B?p[B]=b:u.push(b)})}),u.push(...Object.values(p));const g=u.sort((h,_)=>h._position-_._position);return c.hookTagsResolved.forEach(h=>h(g)),g},addHeadObjs(u,p){const d={input:u,options:p,id:a++};return t.push(d),()=>{t=t.filter(m=>m.id!==d.id)}},removeHeadObjs(u){t=t.filter(p=>p.input!==u)},updateDOM:(u,p)=>{i={title:void 0,htmlAttrs:{},bodyAttrs:{},actualTags:{}};for(const m of c.headTags.sort(oh)){if(m.tag==="title"){i.title=m.props.textContent;continue}if(m.tag==="htmlAttrs"||m.tag==="bodyAttrs"){Object.assign(i[m.tag],m.props);continue}i.actualTags[m.tag]=i.actualTags[m.tag]||[],i.actualTags[m.tag].push(m)}const d=()=>{l=null;for(const m in c.hookBeforeDomUpdate)if(c.hookBeforeDomUpdate[m](i.actualTags)===!1)return;ph({domCtx:i,document:u,previousTags:s})};if(p){d();return}l=l||Ye(()=>d())}};return c},yh=typeof window<"u",vh=(e,t={})=>{const s=dh(),a=s.addHeadObjs(e,t);yh&&(cs(()=>{s.updateDOM()}),Ya(()=>{a(),s.updateDOM()}))},_h=e=>{vh(e)};const Ss=Symbol("v-click-clicks"),bn=Symbol("v-click-clicks-elements"),zr=Symbol("v-click-clicks-order-map"),Os=Symbol("v-click-clicks-disabled"),Pu=Symbol("slidev-slide-scale"),Z=Symbol("slidev-slidev-context"),xh=Symbol("slidev-route"),bh=Symbol("slidev-slide-context"),vn="slidev-vclick-target",ur="slidev-vclick-hidden",kh="slidev-vclick-fade",pr="slidev-vclick-hidden-explicitly",ys="slidev-vclick-current",ua="slidev-vclick-prior";function Wr(e,t){if(!e)return!1;const s=e.indexOf(t);return s>=0?(e.splice(s,1),!0):!1}function Eh(...e){let t,s,a;e.length===1?(t=0,a=1,[s]=e):[t,s,a=1]=e;const r=[];let o=t;for(;o<s;)r.push(o),o+=a||1;return r}function wh(e){return e!=null}function Ch(e,t){return Object.fromEntries(Object.entries(e).map(([s,a])=>t(s,a)).filter(wh))}const Cs={theme:"default",title:"Materi 08 - PBO",titleTemplate:"%s",addons:[],remoteAssets:!1,monaco:"dev",download:!0,info:`<h1>Materi 8 - PBO</h1>
<p>[Error and Exception Handling]</p>
<blockquote>
<p>Asisten Praktikum Pemrograman Berbasis Objek 2022</p>
</blockquote>
`,highlighter:"shiki",lineNumbers:!1,colorSchema:"auto",routerMode:"history",aspectRatio:1.7777777777777777,canvasWidth:980,exportFilename:"materi-pbo-08",selectable:!1,themeConfig:{},fonts:{sans:['"Avenir Next"','"Nunito Sans"',"ui-sans-serif","system-ui","-apple-system","BlinkMacSystemFont",'"Segoe UI"',"Roboto",'"Helvetica Neue"',"Arial",'"Noto Sans"',"sans-serif",'"Apple Color Emoji"','"Segoe UI Emoji"','"Segoe UI Symbol"','"Noto Color Emoji"'],serif:["ui-serif","Georgia","Cambria",'"Times New Roman"',"Times","serif"],mono:['"Fira Code"',"ui-monospace","SFMono-Regular","Menlo","Monaco","Consolas",'"Liberation Mono"','"Courier New"',"monospace"],webfonts:["Avenir Next","Nunito Sans","Fira Code"],provider:"google",local:["Avenir Next"],italic:!1,weights:["200","400","600"]},favicon:"https://cdn.jsdelivr.net/gh/slidevjs/slidev/assets/favicon.png",drawings:{enabled:!0,persist:!1,presenterOnly:!1,syncAll:!0},plantUmlServer:"https://www.plantuml.com/plantuml",codeCopy:!0,record:"dev",css:"unocss"},ve=Cs;var wc;const rn=(wc=ve.aspectRatio)!=null?wc:16/9;var Cc;const on=(Cc=ve.canvasWidth)!=null?Cc:980,Uo=Math.ceil(on/rn),Du=O(()=>Ch(ve.themeConfig||{},(e,t)=>[`--slidev-theme-${e}`,t]));function _t(e,t,s){Object.defineProperty(e,t,{value:s,writable:!0,enumerable:!1})}const jn=De({page:0,clicks:0});let Ah=[],Bh=[];_t(jn,"$syncUp",!0);_t(jn,"$syncDown",!0);_t(jn,"$paused",!1);_t(jn,"$onSet",e=>Ah.push(e));_t(jn,"$onPatch",e=>Bh.push(e));_t(jn,"$patch",async()=>!1);function $u(e,t,s=!1){const a=[];let r=!1,o=!1,l,i;const c=De(t);function u(g){a.push(g)}function p(g,h){clearTimeout(l),r=!0,c[g]=h,l=setTimeout(()=>r=!1,0)}function d(g){r||(clearTimeout(i),o=!0,Object.entries(g).forEach(([h,_])=>{c[h]=_}),i=setTimeout(()=>o=!1,0))}function m(g){let h;s?s&&window.addEventListener("storage",x=>{x&&x.key===g&&x.newValue&&d(JSON.parse(x.newValue))}):(h=new BroadcastChannel(g),h.addEventListener("message",x=>d(x.data)));function _(){!s&&h&&!o?h.postMessage(_e(c)):s&&!o&&window.localStorage.setItem(g,JSON.stringify(c)),r||a.forEach(x=>x(c))}if(ce(c,_,{deep:!0}),s){const x=window.localStorage.getItem(g);x&&d(JSON.parse(x))}}return{init:m,onPatch:u,patch:p,state:c}}const{init:Sh,onPatch:Oh,patch:ai,state:dr}=$u(jn,{page:1,clicks:0}),In=De({});let Th=[],Ph=[];_t(In,"$syncUp",!0);_t(In,"$syncDown",!0);_t(In,"$paused",!1);_t(In,"$onSet",e=>Th.push(e));_t(In,"$onPatch",e=>Ph.push(e));_t(In,"$patch",async()=>!1);const{init:Dh,onPatch:$h,patch:Fu,state:Oa}=$u(In,{},!1),Fh="modulepreload",Mh=function(e){return"/materi-PBO-08/"+e},ri={},$n=function(t,s,a){if(!s||s.length===0)return t();const r=document.getElementsByTagName("link");return Promise.all(s.map(o=>{if(o=Mh(o),o in ri)return;ri[o]=!0;const l=o.endsWith(".css"),i=l?'[rel="stylesheet"]':"";if(!!a)for(let p=r.length-1;p>=0;p--){const d=r[p];if(d.href===o&&(!l||d.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${o}"]${i}`))return;const u=document.createElement("link");if(u.rel=l?"stylesheet":Fh,l||(u.as="script",u.crossOrigin=""),u.href=o,document.head.appendChild(u),l)return new Promise((p,d)=>{u.addEventListener("load",p),u.addEventListener("error",()=>d(new Error(`Unable to preload CSS for ${o}`)))})})).then(()=>t())};function At(e){var t;const s=ze(e);return(t=s==null?void 0:s.$el)!=null?t:s}const Qe=Pt?window:void 0,Mu=Pt?window.document:void 0,jh=Pt?window.navigator:void 0;function le(...e){let t,s,a,r;if(Eu(e[0])?([s,a,r]=e,t=Qe):[t,s,a,r]=e,!t)return On;let o=On;const l=ce(()=>At(t),c=>{o(),c&&(c.addEventListener(s,a,r),o=()=>{c.removeEventListener(s,a,r),o=On})},{immediate:!0,flush:"post"}),i=()=>{l(),o()};return Vt(i),i}function Ih(e,t,s={}){const{window:a=Qe,ignore:r,capture:o=!0,detectIframe:l=!1}=s;if(!a)return;const i=L(!0);let c;const u=g=>{a.clearTimeout(c);const h=At(e);!h||h===g.target||g.composedPath().includes(h)||!i.value||t(g)},p=g=>r&&r.some(h=>{const _=At(h);return _&&(g.target===_||g.composedPath().includes(_))}),d=[le(a,"click",u,{passive:!0,capture:o}),le(a,"pointerdown",g=>{const h=At(e);i.value=!!h&&!g.composedPath().includes(h)&&!p(g)},{passive:!0}),le(a,"pointerup",g=>{if(g.button===0){const h=g.composedPath();g.composedPath=()=>h,c=a.setTimeout(()=>u(g),50)}},{passive:!0}),l&&le(a,"blur",g=>{var h;const _=At(e);((h=document.activeElement)==null?void 0:h.tagName)==="IFRAME"&&!(_!=null&&_.contains(document.activeElement))&&t(g)})].filter(Boolean);return()=>d.forEach(g=>g())}const Nh=e=>typeof e=="function"?e:typeof e=="string"?t=>t.key===e:Array.isArray(e)?t=>e.includes(t.key):()=>!0;function Rh(...e){let t,s,a={};e.length===3?(t=e[0],s=e[1],a=e[2]):e.length===2?typeof e[1]=="object"?(t=!0,s=e[0],a=e[1]):(t=e[0],s=e[1]):(t=!0,s=e[0]);const{target:r=Qe,eventName:o="keydown",passive:l=!1}=a,i=Nh(t);return le(r,o,u=>{i(u)&&s(u)},l)}function Lh(e={}){const{window:t=Qe}=e,s=jm(()=>null,()=>t==null?void 0:t.document.activeElement);return t&&(le(t,"blur",s.trigger,!0),le(t,"focus",s.trigger,!0)),s}function Xs(e,t=!1){const s=L(),a=()=>s.value=Boolean(e());return a(),qo(a,t),s}function Un(e,t={}){const{window:s=Qe}=t,a=Xs(()=>s&&"matchMedia"in s&&typeof s.matchMedia=="function");let r;const o=L(!1),l=()=>{!r||("removeEventListener"in r?r.removeEventListener("change",i):r.removeListener(i))},i=()=>{!a.value||(l(),r=s.matchMedia(Cu(e).value),o.value=r.matches,"addEventListener"in r?r.addEventListener("change",i):r.addListener(i))};return cs(i),Vt(()=>l()),o}const Hh={sm:640,md:768,lg:1024,xl:1280,"2xl":1536};var Vh=Object.defineProperty,oi=Object.getOwnPropertySymbols,qh=Object.prototype.hasOwnProperty,Uh=Object.prototype.propertyIsEnumerable,li=(e,t,s)=>t in e?Vh(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,Kh=(e,t)=>{for(var s in t||(t={}))qh.call(t,s)&&li(e,s,t[s]);if(oi)for(var s of oi(t))Uh.call(t,s)&&li(e,s,t[s]);return e};function zh(e,t={}){function s(i,c){let u=e[i];return c!=null&&(u=Mm(u,c)),typeof u=="number"&&(u=`${u}px`),u}const{window:a=Qe}=t;function r(i){return a?a.matchMedia(i).matches:!1}const o=i=>Un(`(min-width: ${s(i)})`,t),l=Object.keys(e).reduce((i,c)=>(Object.defineProperty(i,c,{get:()=>o(c),enumerable:!0,configurable:!0}),i),{});return Kh({greater(i){return Un(`(min-width: ${s(i,.1)})`,t)},greaterOrEqual:o,smaller(i){return Un(`(max-width: ${s(i,-.1)})`,t)},smallerOrEqual(i){return Un(`(max-width: ${s(i)})`,t)},between(i,c){return Un(`(min-width: ${s(i)}) and (max-width: ${s(c,-.1)})`,t)},isGreater(i){return r(`(min-width: ${s(i,.1)})`)},isGreaterOrEqual(i){return r(`(min-width: ${s(i)})`)},isSmaller(i){return r(`(max-width: ${s(i,-.1)})`)},isSmallerOrEqual(i){return r(`(max-width: ${s(i)})`)},isInBetween(i,c){return r(`(min-width: ${s(i)}) and (max-width: ${s(c,-.1)})`)}},l)}function Wh(e={}){const{navigator:t=jh,read:s=!1,source:a,copiedDuring:r=1500,legacy:o=!1}=e,l=["copy","cut"],i=Xs(()=>t&&"clipboard"in t),c=O(()=>i.value||o),u=L(""),p=L(!1),d=Ym(()=>p.value=!1,r);function m(){i.value?t.clipboard.readText().then(x=>{u.value=x}):u.value=_()}if(c.value&&s)for(const x of l)le(x,m);async function g(x=ze(a)){c.value&&x!=null&&(i.value?await t.clipboard.writeText(x):h(x),u.value=x,p.value=!0,d.start())}function h(x){const b=document.createElement("textarea");b.value=x!=null?x:"",b.style.position="absolute",b.style.opacity="0",document.body.appendChild(b),b.select(),document.execCommand("copy"),b.remove()}function _(){var x,b,w;return(w=(b=(x=document==null?void 0:document.getSelection)==null?void 0:x.call(document))==null?void 0:b.toString())!=null?w:""}return{isSupported:c,text:u,copied:p,copy:g}}function Yh(e){return JSON.parse(JSON.stringify(e))}const Yr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Gr="__vueuse_ssr_handlers__";Yr[Gr]=Yr[Gr]||{};const Gh=Yr[Gr];function Zh(e,t){return Gh[e]||t}function Jh(e){return e==null?"any":e instanceof Set?"set":e instanceof Map?"map":e instanceof Date?"date":typeof e=="boolean"?"boolean":typeof e=="string"?"string":typeof e=="object"||Array.isArray(e)?"object":Number.isNaN(e)?"any":"number"}var Qh=Object.defineProperty,ii=Object.getOwnPropertySymbols,Xh=Object.prototype.hasOwnProperty,eg=Object.prototype.propertyIsEnumerable,ci=(e,t,s)=>t in e?Qh(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,ui=(e,t)=>{for(var s in t||(t={}))Xh.call(t,s)&&ci(e,s,t[s]);if(ii)for(var s of ii(t))eg.call(t,s)&&ci(e,s,t[s]);return e};const tg={boolean:{read:e=>e==="true",write:e=>String(e)},object:{read:e=>JSON.parse(e),write:e=>JSON.stringify(e)},number:{read:e=>Number.parseFloat(e),write:e=>String(e)},any:{read:e=>e,write:e=>String(e)},string:{read:e=>e,write:e=>String(e)},map:{read:e=>new Map(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e.entries()))},set:{read:e=>new Set(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e))},date:{read:e=>new Date(e),write:e=>e.toISOString()}};function $t(e,t,s,a={}){var r;const{flush:o="pre",deep:l=!0,listenToStorageChanges:i=!0,writeDefaults:c=!0,mergeDefaults:u=!1,shallow:p,window:d=Qe,eventFilter:m,onError:g=I=>{console.error(I)}}=a,h=(p?Ht:L)(t);if(!s)try{s=Zh("getDefaultStorage",()=>{var I;return(I=Qe)==null?void 0:I.localStorage})()}catch(I){g(I)}if(!s)return h;const _=ze(t),x=Jh(_),b=(r=a.serializer)!=null?r:tg[x],{pause:w,resume:E}=rh(h,()=>B(h.value),{flush:o,deep:l,eventFilter:m});return d&&i&&le(d,"storage",F),F(),h;function B(I){try{I==null?s.removeItem(e):s.setItem(e,b.write(I))}catch(J){g(J)}}function $(I){w();try{const J=I?I.newValue:s.getItem(e);if(J==null)return c&&_!==null&&s.setItem(e,b.write(_)),_;if(!I&&u){const ie=b.read(J);return Ba(u)?u(ie,_):x==="object"&&!Array.isArray(ie)?ui(ui({},_),ie):ie}else return typeof J!="string"?J:b.read(J)}catch(J){g(J)}finally{E()}}function F(I){if(!(I&&I.storageArea!==s)){if(I&&I.key===null){h.value=_;return}I&&I.key!==e||(h.value=$(I))}}}function ng(e){return Un("(prefers-color-scheme: dark)",e)}var sg=Object.defineProperty,ag=Object.defineProperties,rg=Object.getOwnPropertyDescriptors,pi=Object.getOwnPropertySymbols,og=Object.prototype.hasOwnProperty,lg=Object.prototype.propertyIsEnumerable,di=(e,t,s)=>t in e?sg(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,ig=(e,t)=>{for(var s in t||(t={}))og.call(t,s)&&di(e,s,t[s]);if(pi)for(var s of pi(t))lg.call(t,s)&&di(e,s,t[s]);return e},cg=(e,t)=>ag(e,rg(t));function L5(e,t={}){var s,a,r;const o=(s=t.draggingElement)!=null?s:Qe,l=(a=t.handle)!=null?a:e,i=L((r=ze(t.initialValue))!=null?r:{x:0,y:0}),c=L(),u=h=>t.pointerTypes?t.pointerTypes.includes(h.pointerType):!0,p=h=>{ze(t.preventDefault)&&h.preventDefault(),ze(t.stopPropagation)&&h.stopPropagation()},d=h=>{var _;if(!u(h)||ze(t.exact)&&h.target!==ze(e))return;const x=ze(e).getBoundingClientRect(),b={x:h.pageX-x.left,y:h.pageY-x.top};((_=t.onStart)==null?void 0:_.call(t,b,h))!==!1&&(c.value=b,p(h))},m=h=>{var _;!u(h)||!c.value||(i.value={x:h.pageX-c.value.x,y:h.pageY-c.value.y},(_=t.onMove)==null||_.call(t,i.value,h),p(h))},g=h=>{var _;!u(h)||!c.value||(c.value=void 0,(_=t.onEnd)==null||_.call(t,i.value,h),p(h))};return Pt&&(le(l,"pointerdown",d,!0),le(o,"pointermove",m,!0),le(o,"pointerup",g,!0)),cg(ig({},Km(i)),{position:i,isDragging:O(()=>!!c.value),style:O(()=>`left:${i.value.x}px;top:${i.value.y}px;`)})}var fi=Object.getOwnPropertySymbols,ug=Object.prototype.hasOwnProperty,pg=Object.prototype.propertyIsEnumerable,dg=(e,t)=>{var s={};for(var a in e)ug.call(e,a)&&t.indexOf(a)<0&&(s[a]=e[a]);if(e!=null&&fi)for(var a of fi(e))t.indexOf(a)<0&&pg.call(e,a)&&(s[a]=e[a]);return s};function fg(e,t,s={}){const a=s,{window:r=Qe}=a,o=dg(a,["window"]);let l;const i=Xs(()=>r&&"ResizeObserver"in r),c=()=>{l&&(l.disconnect(),l=void 0)},u=ce(()=>At(e),d=>{c(),i.value&&r&&d&&(l=new ResizeObserver(t),l.observe(d,o))},{immediate:!0,flush:"post"}),p=()=>{c(),u()};return Vt(p),{isSupported:i,stop:p}}function mg(e,t={}){const{immediate:s=!0,window:a=Qe}=t,r=L(!1);let o=null;function l(){!r.value||!a||(e(),o=a.requestAnimationFrame(l))}function i(){!r.value&&a&&(r.value=!0,l())}function c(){r.value=!1,o!=null&&a&&(a.cancelAnimationFrame(o),o=null)}return s&&i(),Vt(c),{isActive:r,pause:c,resume:i}}function hg(e,t={width:0,height:0},s={}){const{box:a="content-box"}=s,r=L(t.width),o=L(t.height);return fg(e,([l])=>{const i=a==="border-box"?l.borderBoxSize:a==="content-box"?l.contentBoxSize:l.devicePixelContentBoxSize;i?(r.value=i.reduce((c,{inlineSize:u})=>c+u,0),o.value=i.reduce((c,{blockSize:u})=>c+u,0)):(r.value=l.contentRect.width,o.value=l.contentRect.height)},s),ce(()=>At(e),l=>{r.value=l?t.width:0,o.value=l?t.height:0}),{width:r,height:o}}const mi=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]];function gg(e,t={}){const{document:s=Mu,autoExit:a=!1}=t,r=e||(s==null?void 0:s.querySelector("html")),o=L(!1);let l=mi[0];const i=Xs(()=>{if(s){for(const _ of mi)if(_[1]in s)return l=_,!0}else return!1;return!1}),[c,u,p,,d]=l;async function m(){!i.value||(s!=null&&s[p]&&await s[u](),o.value=!1)}async function g(){if(!i.value)return;await m();const _=At(r);_&&(await _[c](),o.value=!0)}async function h(){o.value?await m():await g()}return s&&le(s,d,()=>{o.value=!!(s!=null&&s[p])},!1),a&&Vt(m),{isSupported:i,isFullscreen:o,enter:g,exit:m,toggle:h}}function yg(e,t,s={}){const{root:a,rootMargin:r="0px",threshold:o=.1,window:l=Qe}=s,i=Xs(()=>l&&"IntersectionObserver"in l);let c=On;const u=i.value?ce(()=>({el:At(e),root:At(a)}),({el:d,root:m})=>{if(c(),!d)return;const g=new IntersectionObserver(t,{root:m,rootMargin:r,threshold:o});g.observe(d),c=()=>{g.disconnect(),c=On}},{immediate:!0,flush:"post"}):On,p=()=>{c(),u()};return Vt(p),{isSupported:i,stop:p}}const vg={ctrl:"control",command:"meta",cmd:"meta",option:"alt",up:"arrowup",down:"arrowdown",left:"arrowleft",right:"arrowright"};function _g(e={}){const{reactive:t=!1,target:s=Qe,aliasMap:a=vg,passive:r=!0,onEventFired:o=On}=e,l=De(new Set),i={toJSON(){return{}},current:l},c=t?De(i):i,u=new Set,p=new Set;function d(_,x){_ in c&&(t?c[_]=x:c[_].value=x)}function m(){for(const _ of p)d(_,!1)}function g(_,x){var b,w;const E=(b=_.key)==null?void 0:b.toLowerCase(),$=[(w=_.code)==null?void 0:w.toLowerCase(),E].filter(Boolean);E&&(x?l.add(E):l.delete(E));for(const F of $)p.add(F),d(F,x);E==="meta"&&!x?(u.forEach(F=>{l.delete(F),d(F,!1)}),u.clear()):typeof _.getModifierState=="function"&&_.getModifierState("Meta")&&x&&[...l,...$].forEach(F=>u.add(F))}le(s,"keydown",_=>(g(_,!0),o(_)),{passive:r}),le(s,"keyup",_=>(g(_,!1),o(_)),{passive:r}),le("blur",m,{passive:!0}),le("focus",m,{passive:!0});const h=new Proxy(c,{get(_,x,b){if(typeof x!="string")return Reflect.get(_,x,b);if(x=x.toLowerCase(),x in a&&(x=a[x]),!(x in c))if(/[+_-]/.test(x)){const E=x.split(/[+_-]/g).map(B=>B.trim());c[x]=O(()=>E.every(B=>k(h[B])))}else c[x]=L(!1);const w=Reflect.get(_,x,b);return t?k(w):w}});return h}function H5(e={}){const{type:t="page",touch:s=!0,resetOnTouchEnds:a=!1,initialValue:r={x:0,y:0},window:o=Qe,eventFilter:l}=e,i=L(r.x),c=L(r.y),u=L(null),p=_=>{t==="page"?(i.value=_.pageX,c.value=_.pageY):t==="client"&&(i.value=_.clientX,c.value=_.clientY),u.value="mouse"},d=()=>{i.value=r.x,c.value=r.y},m=_=>{if(_.touches.length>0){const x=_.touches[0];t==="page"?(i.value=x.pageX,c.value=x.pageY):t==="client"&&(i.value=x.clientX,c.value=x.clientY),u.value="touch"}},g=_=>l===void 0?p(_):l(()=>p(_),{}),h=_=>l===void 0?m(_):l(()=>m(_),{});return o&&(le(o,"mousemove",g,{passive:!0}),le(o,"dragover",g,{passive:!0}),s&&(le(o,"touchstart",h,{passive:!0}),le(o,"touchmove",h,{passive:!0}),a&&le(o,"touchend",d,{passive:!0}))),{x:i,y:c,sourceType:u}}var Wt;(function(e){e.UP="UP",e.RIGHT="RIGHT",e.DOWN="DOWN",e.LEFT="LEFT",e.NONE="NONE"})(Wt||(Wt={}));function xg(e,t={}){const s=Cu(e),{threshold:a=50,onSwipe:r,onSwipeEnd:o,onSwipeStart:l}=t,i=De({x:0,y:0}),c=(F,I)=>{i.x=F,i.y=I},u=De({x:0,y:0}),p=(F,I)=>{u.x=F,u.y=I},d=O(()=>i.x-u.x),m=O(()=>i.y-u.y),{max:g,abs:h}=Math,_=O(()=>g(h(d.value),h(m.value))>=a),x=L(!1),b=L(!1),w=O(()=>_.value?h(d.value)>h(m.value)?d.value>0?Wt.LEFT:Wt.RIGHT:m.value>0?Wt.UP:Wt.DOWN:Wt.NONE),E=F=>t.pointerTypes?t.pointerTypes.includes(F.pointerType):!0,B=[le(e,"pointerdown",F=>{var I,J;if(!E(F))return;b.value=!0,(J=(I=s.value)==null?void 0:I.style)==null||J.setProperty("touch-action","none");const ie=F.target;ie==null||ie.setPointerCapture(F.pointerId);const{clientX:ue,clientY:ge}=F;c(ue,ge),p(ue,ge),l==null||l(F)}),le(e,"pointermove",F=>{if(!E(F)||!b.value)return;const{clientX:I,clientY:J}=F;p(I,J),!x.value&&_.value&&(x.value=!0),x.value&&(r==null||r(F))}),le(e,"pointerup",F=>{var I,J;!E(F)||(x.value&&(o==null||o(F,w.value)),b.value=!1,x.value=!1,(J=(I=s.value)==null?void 0:I.style)==null||J.setProperty("touch-action","initial"))})],$=()=>B.forEach(F=>F());return{isSwiping:En(x),direction:En(w),posStart:En(i),posEnd:En(u),distanceX:d,distanceY:m,stop:$}}let bg=0;function V5(e,t={}){const s=L(!1),{document:a=Mu,immediate:r=!0,manual:o=!1,id:l=`vueuse_styletag_${++bg}`}=t,i=L(e);let c=()=>{};const u=()=>{if(!a)return;const d=a.getElementById(l)||a.createElement("style");d.type="text/css",d.id=l,t.media&&(d.media=t.media),a.head.appendChild(d),!s.value&&(c=ce(i,m=>{d.innerText=m},{immediate:!0}),s.value=!0)},p=()=>{!a||!s.value||(c(),a.head.removeChild(a.getElementById(l)),s.value=!1)};return r&&!o&&qo(u),o||Vt(p),{id:l,css:i,unload:p,load:u,isLoaded:En(s)}}var kg=Object.defineProperty,hi=Object.getOwnPropertySymbols,Eg=Object.prototype.hasOwnProperty,wg=Object.prototype.propertyIsEnumerable,gi=(e,t,s)=>t in e?kg(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,Cg=(e,t)=>{for(var s in t||(t={}))Eg.call(t,s)&&gi(e,s,t[s]);if(hi)for(var s of hi(t))wg.call(t,s)&&gi(e,s,t[s]);return e};function q5(e={}){const{controls:t=!1,offset:s=0,immediate:a=!0,interval:r="requestAnimationFrame",callback:o}=e,l=L(Ur()+s),i=()=>l.value=Ur()+s,c=o?()=>{i(),o(l.value)}:i,u=r==="requestAnimationFrame"?mg(c,{immediate:a}):Wm(c,r,{immediate:a});return t?Cg({timestamp:l},u):l}var Ag=Object.defineProperty,yi=Object.getOwnPropertySymbols,Bg=Object.prototype.hasOwnProperty,Sg=Object.prototype.propertyIsEnumerable,vi=(e,t,s)=>t in e?Ag(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,Og=(e,t)=>{for(var s in t||(t={}))Bg.call(t,s)&&vi(e,s,t[s]);if(yi)for(var s of yi(t))Sg.call(t,s)&&vi(e,s,t[s]);return e};const Tg={easeInSine:[.12,0,.39,0],easeOutSine:[.61,1,.88,1],easeInOutSine:[.37,0,.63,1],easeInQuad:[.11,0,.5,0],easeOutQuad:[.5,1,.89,1],easeInOutQuad:[.45,0,.55,1],easeInCubic:[.32,0,.67,0],easeOutCubic:[.33,1,.68,1],easeInOutCubic:[.65,0,.35,1],easeInQuart:[.5,0,.75,0],easeOutQuart:[.25,1,.5,1],easeInOutQuart:[.76,0,.24,1],easeInQuint:[.64,0,.78,0],easeOutQuint:[.22,1,.36,1],easeInOutQuint:[.83,0,.17,1],easeInExpo:[.7,0,.84,0],easeOutExpo:[.16,1,.3,1],easeInOutExpo:[.87,0,.13,1],easeInCirc:[.55,0,1,.45],easeOutCirc:[0,.55,.45,1],easeInOutCirc:[.85,0,.15,1],easeInBack:[.36,0,.66,-.56],easeOutBack:[.34,1.56,.64,1],easeInOutBack:[.68,-.6,.32,1.6]};Og({linear:Fm},Tg);function Nt(e,t,s,a={}){var r,o,l;const{clone:i=!1,passive:c=!1,eventName:u,deep:p=!1,defaultValue:d}=a,m=Mn(),g=s||(m==null?void 0:m.emit)||((r=m==null?void 0:m.$emit)==null?void 0:r.bind(m))||((l=(o=m==null?void 0:m.proxy)==null?void 0:o.$emit)==null?void 0:l.bind(m==null?void 0:m.proxy));let h=u;t||(t="modelValue"),h=u||h||`update:${t.toString()}`;const _=b=>i?Ba(i)?i(b):Yh(b):b,x=()=>Om(e[t])?_(e[t]):d;if(c){const b=x(),w=L(b);return ce(()=>e[t],E=>w.value=_(E)),ce(w,E=>{(E!==e[t]||p)&&g(h,E)},{deep:p}),w}else return O({get(){return x()},set(b){g(h,b)}})}function U5({window:e=Qe}={}){if(!e)return L(!1);const t=L(e.document.hasFocus());return le(e,"blur",()=>{t.value=!1}),le(e,"focus",()=>{t.value=!0}),t}function Pg(e={}){const{window:t=Qe,initialWidth:s=1/0,initialHeight:a=1/0,listenOrientation:r=!0,includeScrollbar:o=!0}=e,l=L(s),i=L(a),c=()=>{t&&(o?(l.value=t.innerWidth,i.value=t.innerHeight):(l.value=t.document.documentElement.clientWidth,i.value=t.document.documentElement.clientHeight))};return c(),qo(c),le("resize",c,{passive:!0}),r&&le("orientationchange",c,{passive:!0}),{width:l,height:i}}/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const Kn=typeof window<"u";function Dg(e){return e.__esModule||e[Symbol.toStringTag]==="Module"}const ke=Object.assign;function fr(e,t){const s={};for(const a in t){const r=t[a];s[a]=Dt(r)?r.map(e):e(r)}return s}const Ts=()=>{},Dt=Array.isArray,$g=/\/$/,Fg=e=>e.replace($g,"");function mr(e,t,s="/"){let a,r={},o="",l="";const i=t.indexOf("#");let c=t.indexOf("?");return i<c&&i>=0&&(c=-1),c>-1&&(a=t.slice(0,c),o=t.slice(c+1,i>-1?i:t.length),r=e(o)),i>-1&&(a=a||t.slice(0,i),l=t.slice(i,t.length)),a=Ng(a!=null?a:t,s),{fullPath:a+(o&&"?")+o+l,path:a,query:r,hash:l}}function Mg(e,t){const s=t.query?e(t.query):"";return t.path+(s&&"?")+s+(t.hash||"")}function _i(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function jg(e,t,s){const a=t.matched.length-1,r=s.matched.length-1;return a>-1&&a===r&&as(t.matched[a],s.matched[r])&&ju(t.params,s.params)&&e(t.query)===e(s.query)&&t.hash===s.hash}function as(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function ju(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const s in e)if(!Ig(e[s],t[s]))return!1;return!0}function Ig(e,t){return Dt(e)?xi(e,t):Dt(t)?xi(t,e):e===t}function xi(e,t){return Dt(t)?e.length===t.length&&e.every((s,a)=>s===t[a]):e.length===1&&e[0]===t}function Ng(e,t){if(e.startsWith("/"))return e;if(!e)return t;const s=t.split("/"),a=e.split("/");let r=s.length-1,o,l;for(o=0;o<a.length;o++)if(l=a[o],l!==".")if(l==="..")r>1&&r--;else break;return s.slice(0,r).join("/")+"/"+a.slice(o-(o===a.length?1:0)).join("/")}var Us;(function(e){e.pop="pop",e.push="push"})(Us||(Us={}));var Ps;(function(e){e.back="back",e.forward="forward",e.unknown=""})(Ps||(Ps={}));function Rg(e){if(!e)if(Kn){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),Fg(e)}const Lg=/^[^#]+#/;function Hg(e,t){return e.replace(Lg,"#")+t}function Vg(e,t){const s=document.documentElement.getBoundingClientRect(),a=e.getBoundingClientRect();return{behavior:t.behavior,left:a.left-s.left-(t.left||0),top:a.top-s.top-(t.top||0)}}const Qa=()=>({left:window.pageXOffset,top:window.pageYOffset});function qg(e){let t;if("el"in e){const s=e.el,a=typeof s=="string"&&s.startsWith("#"),r=typeof s=="string"?a?document.getElementById(s.slice(1)):document.querySelector(s):s;if(!r)return;t=Vg(r,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.pageXOffset,t.top!=null?t.top:window.pageYOffset)}function bi(e,t){return(history.state?history.state.position-t:-1)+e}const Zr=new Map;function Ug(e,t){Zr.set(e,t)}function Kg(e){const t=Zr.get(e);return Zr.delete(e),t}let zg=()=>location.protocol+"//"+location.host;function Iu(e,t){const{pathname:s,search:a,hash:r}=t,o=e.indexOf("#");if(o>-1){let i=r.includes(e.slice(o))?e.slice(o).length:1,c=r.slice(i);return c[0]!=="/"&&(c="/"+c),_i(c,"")}return _i(s,e)+a+r}function Wg(e,t,s,a){let r=[],o=[],l=null;const i=({state:m})=>{const g=Iu(e,location),h=s.value,_=t.value;let x=0;if(m){if(s.value=g,t.value=m,l&&l===h){l=null;return}x=_?m.position-_.position:0}else a(g);r.forEach(b=>{b(s.value,h,{delta:x,type:Us.pop,direction:x?x>0?Ps.forward:Ps.back:Ps.unknown})})};function c(){l=s.value}function u(m){r.push(m);const g=()=>{const h=r.indexOf(m);h>-1&&r.splice(h,1)};return o.push(g),g}function p(){const{history:m}=window;!m.state||m.replaceState(ke({},m.state,{scroll:Qa()}),"")}function d(){for(const m of o)m();o=[],window.removeEventListener("popstate",i),window.removeEventListener("beforeunload",p)}return window.addEventListener("popstate",i),window.addEventListener("beforeunload",p),{pauseListeners:c,listen:u,destroy:d}}function ki(e,t,s,a=!1,r=!1){return{back:e,current:t,forward:s,replaced:a,position:window.history.length,scroll:r?Qa():null}}function Yg(e){const{history:t,location:s}=window,a={value:Iu(e,s)},r={value:t.state};r.value||o(a.value,{back:null,current:a.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function o(c,u,p){const d=e.indexOf("#"),m=d>-1?(s.host&&document.querySelector("base")?e:e.slice(d))+c:zg()+e+c;try{t[p?"replaceState":"pushState"](u,"",m),r.value=u}catch(g){console.error(g),s[p?"replace":"assign"](m)}}function l(c,u){const p=ke({},t.state,ki(r.value.back,c,r.value.forward,!0),u,{position:r.value.position});o(c,p,!0),a.value=c}function i(c,u){const p=ke({},r.value,t.state,{forward:c,scroll:Qa()});o(p.current,p,!0);const d=ke({},ki(a.value,c,null),{position:p.position+1},u);o(c,d,!1),a.value=c}return{location:a,state:r,push:i,replace:l}}function Gg(e){e=Rg(e);const t=Yg(e),s=Wg(e,t.state,t.location,t.replace);function a(o,l=!0){l||s.pauseListeners(),history.go(o)}const r=ke({location:"",base:e,go:a,createHref:Hg.bind(null,e)},t,s);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>t.state.value}),r}function Zg(e){return typeof e=="string"||e&&typeof e=="object"}function Nu(e){return typeof e=="string"||typeof e=="symbol"}const Xt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Ru=Symbol("");var Ei;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(Ei||(Ei={}));function rs(e,t){return ke(new Error,{type:e,[Ru]:!0},t)}function qt(e,t){return e instanceof Error&&Ru in e&&(t==null||!!(e.type&t))}const wi="[^/]+?",Jg={sensitive:!1,strict:!1,start:!0,end:!0},Qg=/[.+*?^${}()[\]/\\]/g;function Xg(e,t){const s=ke({},Jg,t),a=[];let r=s.start?"^":"";const o=[];for(const u of e){const p=u.length?[]:[90];s.strict&&!u.length&&(r+="/");for(let d=0;d<u.length;d++){const m=u[d];let g=40+(s.sensitive?.25:0);if(m.type===0)d||(r+="/"),r+=m.value.replace(Qg,"\\$&"),g+=40;else if(m.type===1){const{value:h,repeatable:_,optional:x,regexp:b}=m;o.push({name:h,repeatable:_,optional:x});const w=b||wi;if(w!==wi){g+=10;try{new RegExp(`(${w})`)}catch(B){throw new Error(`Invalid custom RegExp for param "${h}" (${w}): `+B.message)}}let E=_?`((?:${w})(?:/(?:${w}))*)`:`(${w})`;d||(E=x&&u.length<2?`(?:/${E})`:"/"+E),x&&(E+="?"),r+=E,g+=20,x&&(g+=-8),_&&(g+=-20),w===".*"&&(g+=-50)}p.push(g)}a.push(p)}if(s.strict&&s.end){const u=a.length-1;a[u][a[u].length-1]+=.7000000000000001}s.strict||(r+="/?"),s.end?r+="$":s.strict&&(r+="(?:/|$)");const l=new RegExp(r,s.sensitive?"":"i");function i(u){const p=u.match(l),d={};if(!p)return null;for(let m=1;m<p.length;m++){const g=p[m]||"",h=o[m-1];d[h.name]=g&&h.repeatable?g.split("/"):g}return d}function c(u){let p="",d=!1;for(const m of e){(!d||!p.endsWith("/"))&&(p+="/"),d=!1;for(const g of m)if(g.type===0)p+=g.value;else if(g.type===1){const{value:h,repeatable:_,optional:x}=g,b=h in u?u[h]:"";if(Dt(b)&&!_)throw new Error(`Provided param "${h}" is an array but it is not repeatable (* or + modifiers)`);const w=Dt(b)?b.join("/"):b;if(!w)if(x)m.length<2&&(p.endsWith("/")?p=p.slice(0,-1):d=!0);else throw new Error(`Missing required param "${h}"`);p+=w}}return p||"/"}return{re:l,score:a,keys:o,parse:i,stringify:c}}function ey(e,t){let s=0;for(;s<e.length&&s<t.length;){const a=t[s]-e[s];if(a)return a;s++}return e.length<t.length?e.length===1&&e[0]===40+40?-1:1:e.length>t.length?t.length===1&&t[0]===40+40?1:-1:0}function ty(e,t){let s=0;const a=e.score,r=t.score;for(;s<a.length&&s<r.length;){const o=ey(a[s],r[s]);if(o)return o;s++}if(Math.abs(r.length-a.length)===1){if(Ci(a))return 1;if(Ci(r))return-1}return r.length-a.length}function Ci(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const ny={type:0,value:""},sy=/[a-zA-Z0-9_]/;function ay(e){if(!e)return[[]];if(e==="/")return[[ny]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(g){throw new Error(`ERR (${s})/"${u}": ${g}`)}let s=0,a=s;const r=[];let o;function l(){o&&r.push(o),o=[]}let i=0,c,u="",p="";function d(){!u||(s===0?o.push({type:0,value:u}):s===1||s===2||s===3?(o.length>1&&(c==="*"||c==="+")&&t(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),o.push({type:1,value:u,regexp:p,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):t("Invalid state to consume buffer"),u="")}function m(){u+=c}for(;i<e.length;){if(c=e[i++],c==="\\"&&s!==2){a=s,s=4;continue}switch(s){case 0:c==="/"?(u&&d(),l()):c===":"?(d(),s=1):m();break;case 4:m(),s=a;break;case 1:c==="("?s=2:sy.test(c)?m():(d(),s=0,c!=="*"&&c!=="?"&&c!=="+"&&i--);break;case 2:c===")"?p[p.length-1]=="\\"?p=p.slice(0,-1)+c:s=3:p+=c;break;case 3:d(),s=0,c!=="*"&&c!=="?"&&c!=="+"&&i--,p="";break;default:t("Unknown state");break}}return s===2&&t(`Unfinished custom RegExp for param "${u}"`),d(),l(),r}function ry(e,t,s){const a=Xg(ay(e.path),s),r=ke(a,{record:e,parent:t,children:[],alias:[]});return t&&!r.record.aliasOf==!t.record.aliasOf&&t.children.push(r),r}function oy(e,t){const s=[],a=new Map;t=Si({strict:!1,end:!0,sensitive:!1},t);function r(p){return a.get(p)}function o(p,d,m){const g=!m,h=ly(p);h.aliasOf=m&&m.record;const _=Si(t,p),x=[h];if("alias"in p){const E=typeof p.alias=="string"?[p.alias]:p.alias;for(const B of E)x.push(ke({},h,{components:m?m.record.components:h.components,path:B,aliasOf:m?m.record:h}))}let b,w;for(const E of x){const{path:B}=E;if(d&&B[0]!=="/"){const $=d.record.path,F=$[$.length-1]==="/"?"":"/";E.path=d.record.path+(B&&F+B)}if(b=ry(E,d,_),m?m.alias.push(b):(w=w||b,w!==b&&w.alias.push(b),g&&p.name&&!Bi(b)&&l(p.name)),h.children){const $=h.children;for(let F=0;F<$.length;F++)o($[F],b,m&&m.children[F])}m=m||b,(b.record.components&&Object.keys(b.record.components).length||b.record.name||b.record.redirect)&&c(b)}return w?()=>{l(w)}:Ts}function l(p){if(Nu(p)){const d=a.get(p);d&&(a.delete(p),s.splice(s.indexOf(d),1),d.children.forEach(l),d.alias.forEach(l))}else{const d=s.indexOf(p);d>-1&&(s.splice(d,1),p.record.name&&a.delete(p.record.name),p.children.forEach(l),p.alias.forEach(l))}}function i(){return s}function c(p){let d=0;for(;d<s.length&&ty(p,s[d])>=0&&(p.record.path!==s[d].record.path||!Lu(p,s[d]));)d++;s.splice(d,0,p),p.record.name&&!Bi(p)&&a.set(p.record.name,p)}function u(p,d){let m,g={},h,_;if("name"in p&&p.name){if(m=a.get(p.name),!m)throw rs(1,{location:p});_=m.record.name,g=ke(Ai(d.params,m.keys.filter(w=>!w.optional).map(w=>w.name)),p.params&&Ai(p.params,m.keys.map(w=>w.name))),h=m.stringify(g)}else if("path"in p)h=p.path,m=s.find(w=>w.re.test(h)),m&&(g=m.parse(h),_=m.record.name);else{if(m=d.name?a.get(d.name):s.find(w=>w.re.test(d.path)),!m)throw rs(1,{location:p,currentLocation:d});_=m.record.name,g=ke({},d.params,p.params),h=m.stringify(g)}const x=[];let b=m;for(;b;)x.unshift(b.record),b=b.parent;return{name:_,path:h,params:g,matched:x,meta:cy(x)}}return e.forEach(p=>o(p)),{addRoute:o,resolve:u,removeRoute:l,getRoutes:i,getRecordMatcher:r}}function Ai(e,t){const s={};for(const a of t)a in e&&(s[a]=e[a]);return s}function ly(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:iy(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function iy(e){const t={},s=e.props||!1;if("component"in e)t.default=s;else for(const a in e.components)t[a]=typeof s=="boolean"?s:s[a];return t}function Bi(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function cy(e){return e.reduce((t,s)=>ke(t,s.meta),{})}function Si(e,t){const s={};for(const a in e)s[a]=a in t?t[a]:e[a];return s}function Lu(e,t){return t.children.some(s=>s===e||Lu(e,s))}const Hu=/#/g,uy=/&/g,py=/\//g,dy=/=/g,fy=/\?/g,Vu=/\+/g,my=/%5B/g,hy=/%5D/g,qu=/%5E/g,gy=/%60/g,Uu=/%7B/g,yy=/%7C/g,Ku=/%7D/g,vy=/%20/g;function Ko(e){return encodeURI(""+e).replace(yy,"|").replace(my,"[").replace(hy,"]")}function _y(e){return Ko(e).replace(Uu,"{").replace(Ku,"}").replace(qu,"^")}function Jr(e){return Ko(e).replace(Vu,"%2B").replace(vy,"+").replace(Hu,"%23").replace(uy,"%26").replace(gy,"`").replace(Uu,"{").replace(Ku,"}").replace(qu,"^")}function xy(e){return Jr(e).replace(dy,"%3D")}function by(e){return Ko(e).replace(Hu,"%23").replace(fy,"%3F")}function ky(e){return e==null?"":by(e).replace(py,"%2F")}function Ta(e){try{return decodeURIComponent(""+e)}catch{}return""+e}function Ey(e){const t={};if(e===""||e==="?")return t;const a=(e[0]==="?"?e.slice(1):e).split("&");for(let r=0;r<a.length;++r){const o=a[r].replace(Vu," "),l=o.indexOf("="),i=Ta(l<0?o:o.slice(0,l)),c=l<0?null:Ta(o.slice(l+1));if(i in t){let u=t[i];Dt(u)||(u=t[i]=[u]),u.push(c)}else t[i]=c}return t}function Oi(e){let t="";for(let s in e){const a=e[s];if(s=xy(s),a==null){a!==void 0&&(t+=(t.length?"&":"")+s);continue}(Dt(a)?a.map(o=>o&&Jr(o)):[a&&Jr(a)]).forEach(o=>{o!==void 0&&(t+=(t.length?"&":"")+s,o!=null&&(t+="="+o))})}return t}function wy(e){const t={};for(const s in e){const a=e[s];a!==void 0&&(t[s]=Dt(a)?a.map(r=>r==null?null:""+r):a==null?a:""+a)}return t}const Cy=Symbol(""),Ti=Symbol(""),zo=Symbol(""),zu=Symbol(""),Qr=Symbol("");function vs(){let e=[];function t(a){return e.push(a),()=>{const r=e.indexOf(a);r>-1&&e.splice(r,1)}}function s(){e=[]}return{add:t,list:()=>e,reset:s}}function tn(e,t,s,a,r){const o=a&&(a.enterCallbacks[r]=a.enterCallbacks[r]||[]);return()=>new Promise((l,i)=>{const c=d=>{d===!1?i(rs(4,{from:s,to:t})):d instanceof Error?i(d):Zg(d)?i(rs(2,{from:t,to:d})):(o&&a.enterCallbacks[r]===o&&typeof d=="function"&&o.push(d),l())},u=e.call(a&&a.instances[r],t,s,c);let p=Promise.resolve(u);e.length<3&&(p=p.then(c)),p.catch(d=>i(d))})}function hr(e,t,s,a){const r=[];for(const o of e)for(const l in o.components){let i=o.components[l];if(!(t!=="beforeRouteEnter"&&!o.instances[l]))if(Ay(i)){const u=(i.__vccOpts||i)[t];u&&r.push(tn(u,s,a,o,l))}else{let c=i();r.push(()=>c.then(u=>{if(!u)return Promise.reject(new Error(`Couldn't resolve component "${l}" at "${o.path}"`));const p=Dg(u)?u.default:u;o.components[l]=p;const m=(p.__vccOpts||p)[t];return m&&tn(m,s,a,o,l)()}))}}return r}function Ay(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function Pi(e){const t=U(zo),s=U(zu),a=O(()=>t.resolve(k(e.to))),r=O(()=>{const{matched:c}=a.value,{length:u}=c,p=c[u-1],d=s.matched;if(!p||!d.length)return-1;const m=d.findIndex(as.bind(null,p));if(m>-1)return m;const g=Di(c[u-2]);return u>1&&Di(p)===g&&d[d.length-1].path!==g?d.findIndex(as.bind(null,c[u-2])):m}),o=O(()=>r.value>-1&&Ty(s.params,a.value.params)),l=O(()=>r.value>-1&&r.value===s.matched.length-1&&ju(s.params,a.value.params));function i(c={}){return Oy(c)?t[k(e.replace)?"replace":"push"](k(e.to)).catch(Ts):Promise.resolve()}return{route:a,href:O(()=>a.value.href),isActive:o,isExactActive:l,navigate:i}}const By=we({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Pi,setup(e,{slots:t}){const s=De(Pi(e)),{options:a}=U(zo),r=O(()=>({[$i(e.activeClass,a.linkActiveClass,"router-link-active")]:s.isActive,[$i(e.exactActiveClass,a.linkExactActiveClass,"router-link-exact-active")]:s.isExactActive}));return()=>{const o=t.default&&t.default(s);return e.custom?o:dt("a",{"aria-current":s.isExactActive?e.ariaCurrentValue:null,href:s.href,onClick:s.navigate,class:r.value},o)}}}),Sy=By;function Oy(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function Ty(e,t){for(const s in t){const a=t[s],r=e[s];if(typeof a=="string"){if(a!==r)return!1}else if(!Dt(r)||r.length!==a.length||a.some((o,l)=>o!==r[l]))return!1}return!0}function Di(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const $i=(e,t,s)=>e!=null?e:t!=null?t:s,Py=we({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:s}){const a=U(Qr),r=O(()=>e.route||a.value),o=U(Ti,0),l=O(()=>{let u=k(o);const{matched:p}=r.value;let d;for(;(d=p[u])&&!d.components;)u++;return u}),i=O(()=>r.value.matched[l.value]);pt(Ti,O(()=>l.value+1)),pt(Cy,i),pt(Qr,r);const c=L();return ce(()=>[c.value,i.value,e.name],([u,p,d],[m,g,h])=>{p&&(p.instances[d]=u,g&&g!==p&&u&&u===m&&(p.leaveGuards.size||(p.leaveGuards=g.leaveGuards),p.updateGuards.size||(p.updateGuards=g.updateGuards))),u&&p&&(!g||!as(p,g)||!m)&&(p.enterCallbacks[d]||[]).forEach(_=>_(u))},{flush:"post"}),()=>{const u=r.value,p=e.name,d=i.value,m=d&&d.components[p];if(!m)return Fi(s.default,{Component:m,route:u});const g=d.props[p],h=g?g===!0?u.params:typeof g=="function"?g(u):g:null,x=dt(m,ke({},h,t,{onVnodeUnmounted:b=>{b.component.isUnmounted&&(d.instances[p]=null)},ref:c}));return Fi(s.default,{Component:x,route:u})||x}}});function Fi(e,t){if(!e)return null;const s=e(t);return s.length===1?s[0]:s}const Dy=Py;function $y(e){const t=oy(e.routes,e),s=e.parseQuery||Ey,a=e.stringifyQuery||Oi,r=e.history,o=vs(),l=vs(),i=vs(),c=Ht(Xt);let u=Xt;Kn&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const p=fr.bind(null,T=>""+T),d=fr.bind(null,ky),m=fr.bind(null,Ta);function g(T,H){let R,Y;return Nu(T)?(R=t.getRecordMatcher(T),Y=H):Y=T,t.addRoute(Y,R)}function h(T){const H=t.getRecordMatcher(T);H&&t.removeRoute(H)}function _(){return t.getRoutes().map(T=>T.record)}function x(T){return!!t.getRecordMatcher(T)}function b(T,H){if(H=ke({},H||c.value),typeof T=="string"){const y=mr(s,T,H.path),v=t.resolve({path:y.path},H),C=r.createHref(y.fullPath);return ke(y,v,{params:m(v.params),hash:Ta(y.hash),redirectedFrom:void 0,href:C})}let R;if("path"in T)R=ke({},T,{path:mr(s,T.path,H.path).path});else{const y=ke({},T.params);for(const v in y)y[v]==null&&delete y[v];R=ke({},T,{params:d(T.params)}),H.params=d(H.params)}const Y=t.resolve(R,H),de=T.hash||"";Y.params=p(m(Y.params));const ye=Mg(a,ke({},T,{hash:_y(de),path:Y.path})),ae=r.createHref(ye);return ke({fullPath:ye,hash:de,query:a===Oi?wy(T.query):T.query||{}},Y,{redirectedFrom:void 0,href:ae})}function w(T){return typeof T=="string"?mr(s,T,c.value.path):ke({},T)}function E(T,H){if(u!==T)return rs(8,{from:H,to:T})}function B(T){return I(T)}function $(T){return B(ke(w(T),{replace:!0}))}function F(T){const H=T.matched[T.matched.length-1];if(H&&H.redirect){const{redirect:R}=H;let Y=typeof R=="function"?R(T):R;return typeof Y=="string"&&(Y=Y.includes("?")||Y.includes("#")?Y=w(Y):{path:Y},Y.params={}),ke({query:T.query,hash:T.hash,params:"path"in Y?{}:T.params},Y)}}function I(T,H){const R=u=b(T),Y=c.value,de=T.state,ye=T.force,ae=T.replace===!0,y=F(R);if(y)return I(ke(w(y),{state:typeof y=="object"?ke({},de,y.state):de,force:ye,replace:ae}),H||R);const v=R;v.redirectedFrom=H;let C;return!ye&&jg(a,Y,R)&&(C=rs(16,{to:v,from:Y}),be(Y,Y,!0,!1)),(C?Promise.resolve(C):ie(v,Y)).catch(S=>qt(S)?qt(S,2)?S:pe(S):K(S,v,Y)).then(S=>{if(S){if(qt(S,2))return I(ke({replace:ae},w(S.to),{state:typeof S.to=="object"?ke({},de,S.to.state):de,force:ye}),H||v)}else S=ge(v,Y,!0,ae,de);return ue(v,Y,S),S})}function J(T,H){const R=E(T,H);return R?Promise.reject(R):Promise.resolve()}function ie(T,H){let R;const[Y,de,ye]=Fy(T,H);R=hr(Y.reverse(),"beforeRouteLeave",T,H);for(const y of Y)y.leaveGuards.forEach(v=>{R.push(tn(v,T,H))});const ae=J.bind(null,T,H);return R.push(ae),Ln(R).then(()=>{R=[];for(const y of o.list())R.push(tn(y,T,H));return R.push(ae),Ln(R)}).then(()=>{R=hr(de,"beforeRouteUpdate",T,H);for(const y of de)y.updateGuards.forEach(v=>{R.push(tn(v,T,H))});return R.push(ae),Ln(R)}).then(()=>{R=[];for(const y of T.matched)if(y.beforeEnter&&!H.matched.includes(y))if(Dt(y.beforeEnter))for(const v of y.beforeEnter)R.push(tn(v,T,H));else R.push(tn(y.beforeEnter,T,H));return R.push(ae),Ln(R)}).then(()=>(T.matched.forEach(y=>y.enterCallbacks={}),R=hr(ye,"beforeRouteEnter",T,H),R.push(ae),Ln(R))).then(()=>{R=[];for(const y of l.list())R.push(tn(y,T,H));return R.push(ae),Ln(R)}).catch(y=>qt(y,8)?y:Promise.reject(y))}function ue(T,H,R){for(const Y of i.list())Y(T,H,R)}function ge(T,H,R,Y,de){const ye=E(T,H);if(ye)return ye;const ae=H===Xt,y=Kn?history.state:{};R&&(Y||ae?r.replace(T.fullPath,ke({scroll:ae&&y&&y.scroll},de)):r.push(T.fullPath,de)),c.value=T,be(T,H,R,ae),pe()}let qe;function Le(){qe||(qe=r.listen((T,H,R)=>{if(!Nn.listening)return;const Y=b(T),de=F(Y);if(de){I(ke(de,{replace:!0}),Y).catch(Ts);return}u=Y;const ye=c.value;Kn&&Ug(bi(ye.fullPath,R.delta),Qa()),ie(Y,ye).catch(ae=>qt(ae,12)?ae:qt(ae,2)?(I(ae.to,Y).then(y=>{qt(y,20)&&!R.delta&&R.type===Us.pop&&r.go(-1,!1)}).catch(Ts),Promise.reject()):(R.delta&&r.go(-R.delta,!1),K(ae,Y,ye))).then(ae=>{ae=ae||ge(Y,ye,!1),ae&&(R.delta&&!qt(ae,8)?r.go(-R.delta,!1):R.type===Us.pop&&qt(ae,20)&&r.go(-1,!1)),ue(Y,ye,ae)}).catch(Ts)}))}let Fe=vs(),Te=vs(),Pe;function K(T,H,R){pe(T);const Y=Te.list();return Y.length?Y.forEach(de=>de(T,H,R)):console.error(T),Promise.reject(T)}function te(){return Pe&&c.value!==Xt?Promise.resolve():new Promise((T,H)=>{Fe.add([T,H])})}function pe(T){return Pe||(Pe=!T,Le(),Fe.list().forEach(([H,R])=>T?R(T):H()),Fe.reset()),T}function be(T,H,R,Y){const{scrollBehavior:de}=e;if(!Kn||!de)return Promise.resolve();const ye=!R&&Kg(bi(T.fullPath,0))||(Y||!R)&&history.state&&history.state.scroll||null;return Ye().then(()=>de(T,H,ye)).then(ae=>ae&&qg(ae)).catch(ae=>K(ae,T,H))}const Xe=T=>r.go(T);let Ie;const Jt=new Set,Nn={currentRoute:c,listening:!0,addRoute:g,removeRoute:h,hasRoute:x,getRoutes:_,resolve:b,options:e,push:B,replace:$,go:Xe,back:()=>Xe(-1),forward:()=>Xe(1),beforeEach:o.add,beforeResolve:l.add,afterEach:i.add,onError:Te.add,isReady:te,install(T){const H=this;T.component("RouterLink",Sy),T.component("RouterView",Dy),T.config.globalProperties.$router=H,Object.defineProperty(T.config.globalProperties,"$route",{enumerable:!0,get:()=>k(c)}),Kn&&!Ie&&c.value===Xt&&(Ie=!0,B(r.location).catch(de=>{}));const R={};for(const de in Xt)R[de]=O(()=>c.value[de]);T.provide(zo,H),T.provide(zu,De(R)),T.provide(Qr,c);const Y=T.unmount;Jt.add(T),T.unmount=function(){Jt.delete(T),Jt.size<1&&(u=Xt,qe&&qe(),qe=null,c.value=Xt,Ie=!1,Pe=!1),Y()}}};return Nn}function Ln(e){return e.reduce((t,s)=>t.then(()=>s()),Promise.resolve())}function Fy(e,t){const s=[],a=[],r=[],o=Math.max(t.matched.length,e.matched.length);for(let l=0;l<o;l++){const i=t.matched[l];i&&(e.matched.find(u=>as(u,i))?a.push(i):s.push(i));const c=e.matched[l];c&&(t.matched.find(u=>as(u,c))||r.push(c))}return[s,a,r]}const gr=L(!1),Ds=L(!1),zn=L(!1),My=L(!0),Xr=zh({xs:460,...Hh}),Tn=Pg(),Wu=_g(),jy=O(()=>Tn.height.value-Tn.width.value/rn>180),Yu=gg(Pt?document.body:null),Xn=Lh(),Iy=O(()=>{var e,t;return["INPUT","TEXTAREA"].includes(((e=Xn.value)==null?void 0:e.tagName)||"")||((t=Xn.value)==null?void 0:t.classList.contains("CodeMirror-code"))}),Ny=O(()=>{var e;return["BUTTON","A"].includes(((e=Xn.value)==null?void 0:e.tagName)||"")});$t("slidev-camera","default");$t("slidev-mic","default");const ga=$t("slidev-scale",0),tt=$t("slidev-show-overview",!1),yr=$t("slidev-presenter-cursor",!0),Mi=$t("slidev-show-editor",!1);$t("slidev-editor-width",Pt?window.innerWidth*.4:100);const Gu=Au(tt);function ji(e,t,s,a=r=>r){return e*a(.5-t*(.5-s))}function Ry(e){return[-e[0],-e[1]]}function Et(e,t){return[e[0]+t[0],e[1]+t[1]]}function vt(e,t){return[e[0]-t[0],e[1]-t[1]]}function kt(e,t){return[e[0]*t,e[1]*t]}function Ly(e,t){return[e[0]/t,e[1]/t]}function _s(e){return[e[1],-e[0]]}function Ii(e,t){return e[0]*t[0]+e[1]*t[1]}function Hy(e,t){return e[0]===t[0]&&e[1]===t[1]}function Vy(e){return Math.hypot(e[0],e[1])}function qy(e){return e[0]*e[0]+e[1]*e[1]}function Ni(e,t){return qy(vt(e,t))}function Zu(e){return Ly(e,Vy(e))}function Uy(e,t){return Math.hypot(e[1]-t[1],e[0]-t[0])}function xs(e,t,s){let a=Math.sin(s),r=Math.cos(s),o=e[0]-t[0],l=e[1]-t[1],i=o*r-l*a,c=o*a+l*r;return[i+t[0],c+t[1]]}function eo(e,t,s){return Et(e,kt(vt(t,e),s))}function Ri(e,t,s){return Et(e,kt(t,s))}var{min:Hn,PI:Ky}=Math,Li=.275,bs=Ky+1e-4;function zy(e,t={}){let{size:s=16,smoothing:a=.5,thinning:r=.5,simulatePressure:o=!0,easing:l=K=>K,start:i={},end:c={},last:u=!1}=t,{cap:p=!0,easing:d=K=>K*(2-K)}=i,{cap:m=!0,easing:g=K=>--K*K*K+1}=c;if(e.length===0||s<=0)return[];let h=e[e.length-1].runningLength,_=i.taper===!1?0:i.taper===!0?Math.max(s,h):i.taper,x=c.taper===!1?0:c.taper===!0?Math.max(s,h):c.taper,b=Math.pow(s*a,2),w=[],E=[],B=e.slice(0,10).reduce((K,te)=>{let pe=te.pressure;if(o){let be=Hn(1,te.distance/s),Xe=Hn(1,1-be);pe=Hn(1,K+(Xe-K)*(be*Li))}return(K+pe)/2},e[0].pressure),$=ji(s,r,e[e.length-1].pressure,l),F,I=e[0].vector,J=e[0].point,ie=J,ue=J,ge=ie,qe=!1;for(let K=0;K<e.length;K++){let{pressure:te}=e[K],{point:pe,vector:be,distance:Xe,runningLength:Ie}=e[K];if(K<e.length-1&&h-Ie<3)continue;if(r){if(o){let ye=Hn(1,Xe/s),ae=Hn(1,1-ye);te=Hn(1,B+(ae-B)*(ye*Li))}$=ji(s,r,te,l)}else $=s/2;F===void 0&&(F=$);let Jt=Ie<_?d(Ie/_):1,Nn=h-Ie<x?g((h-Ie)/x):1;$=Math.max(.01,$*Math.min(Jt,Nn));let T=(K<e.length-1?e[K+1]:e[K]).vector,H=K<e.length-1?Ii(be,T):1,R=Ii(be,I)<0&&!qe,Y=H!==null&&H<0;if(R||Y){let ye=kt(_s(I),$);for(let ae=1/13,y=0;y<=1;y+=ae)ue=xs(vt(pe,ye),pe,bs*y),w.push(ue),ge=xs(Et(pe,ye),pe,bs*-y),E.push(ge);J=ue,ie=ge,Y&&(qe=!0);continue}if(qe=!1,K===e.length-1){let ye=kt(_s(be),$);w.push(vt(pe,ye)),E.push(Et(pe,ye));continue}let de=kt(_s(eo(T,be,H)),$);ue=vt(pe,de),(K<=1||Ni(J,ue)>b)&&(w.push(ue),J=ue),ge=Et(pe,de),(K<=1||Ni(ie,ge)>b)&&(E.push(ge),ie=ge),B=te,I=be}let Le=e[0].point.slice(0,2),Fe=e.length>1?e[e.length-1].point.slice(0,2):Et(e[0].point,[1,1]),Te=[],Pe=[];if(e.length===1){if(!(_||x)||u){let K=Ri(Le,Zu(_s(vt(Le,Fe))),-(F||$)),te=[];for(let pe=1/13,be=pe;be<=1;be+=pe)te.push(xs(K,Le,bs*2*be));return te}}else{if(!(_||x&&e.length===1))if(p)for(let te=1/13,pe=te;pe<=1;pe+=te){let be=xs(E[0],Le,bs*pe);Te.push(be)}else{let te=vt(w[0],E[0]),pe=kt(te,.5),be=kt(te,.51);Te.push(vt(Le,pe),vt(Le,be),Et(Le,be),Et(Le,pe))}let K=_s(Ry(e[e.length-1].vector));if(x||_&&e.length===1)Pe.push(Fe);else if(m){let te=Ri(Fe,K,$);for(let pe=1/29,be=pe;be<1;be+=pe)Pe.push(xs(te,Fe,bs*3*be))}else Pe.push(Et(Fe,kt(K,$)),Et(Fe,kt(K,$*.99)),vt(Fe,kt(K,$*.99)),vt(Fe,kt(K,$)))}return w.concat(Pe,E.reverse(),Te)}function Wy(e,t={}){var s;let{streamline:a=.5,size:r=16,last:o=!1}=t;if(e.length===0)return[];let l=.15+(1-a)*.85,i=Array.isArray(e[0])?e:e.map(({x:g,y:h,pressure:_=.5})=>[g,h,_]);if(i.length===2){let g=i[1];i=i.slice(0,-1);for(let h=1;h<5;h++)i.push(eo(i[0],g,h/4))}i.length===1&&(i=[...i,[...Et(i[0],[1,1]),...i[0].slice(2)]]);let c=[{point:[i[0][0],i[0][1]],pressure:i[0][2]>=0?i[0][2]:.25,vector:[1,1],distance:0,runningLength:0}],u=!1,p=0,d=c[0],m=i.length-1;for(let g=1;g<i.length;g++){let h=o&&g===m?i[g].slice(0,2):eo(d.point,i[g],l);if(Hy(d.point,h))continue;let _=Uy(h,d.point);if(p+=_,g<m&&!u){if(p<r)continue;u=!0}d={point:h,pressure:i[g][2]>=0?i[g][2]:.5,vector:Zu(vt(d.point,h)),distance:_,runningLength:p},c.push(d)}return c[0].vector=((s=c[1])==null?void 0:s.vector)||[0,0],c}function Yy(e,t={}){return zy(Wy(e,t),t)}var Gy=()=>({events:{},emit(e,...t){let s=this.events[e]||[];for(let a=0,r=s.length;a<r;a++)s[a](...t)},on(e,t){var s;return(s=this.events[e])!=null&&s.push(t)||(this.events[e]=[t]),()=>{var a;this.events[e]=(a=this.events[e])==null?void 0:a.filter(r=>t!==r)}}});function Pa(e,t){return e-t}function Zy(e){return e<0?-1:1}function Da(e){return[Math.abs(e),Zy(e)]}function Ju(){const e=()=>((1+Math.random())*65536|0).toString(16).substring(1);return`${e()+e()}-${e()}-${e()}-${e()}-${e()}${e()}${e()}`}var Jy=2,zt=Jy,ds=class{constructor(e){this.drauu=e,this.event=void 0,this.point=void 0,this.start=void 0,this.el=null}onSelected(e){}onUnselected(){}onStart(e){}onMove(e){return!1}onEnd(e){}get brush(){return this.drauu.brush}get shiftPressed(){return this.drauu.shiftPressed}get altPressed(){return this.drauu.altPressed}get svgElement(){return this.drauu.el}getMousePosition(e){var r;var t;const s=this.drauu.el,a=(r=this.drauu.options.coordinateScale)!=null?r:1;if(this.drauu.options.coordinateTransform===!1){const o=this.drauu.el.getBoundingClientRect();return{x:(e.pageX-o.left)*a,y:(e.pageY-o.top)*a,pressure:e.pressure}}else{const o=this.drauu.svgPoint;o.x=e.clientX,o.y=e.clientY;const l=o.matrixTransform((t=s.getScreenCTM())==null?void 0:t.inverse());return{x:l.x*a,y:l.y*a,pressure:e.pressure}}}createElement(e,t){var r;const s=document.createElementNS("http://www.w3.org/2000/svg",e),a=t?{...this.brush,...t}:this.brush;return s.setAttribute("fill",(r=a.fill)!=null?r:"transparent"),s.setAttribute("stroke",a.color),s.setAttribute("stroke-width",a.size.toString()),s.setAttribute("stroke-linecap","round"),a.dasharray&&s.setAttribute("stroke-dasharray",a.dasharray),s}attr(e,t){this.el.setAttribute(e,typeof t=="string"?t:t.toFixed(zt))}_setEvent(e){this.event=e,this.point=this.getMousePosition(e)}_eventDown(e){return this._setEvent(e),this.start=this.point,this.onStart(this.point)}_eventMove(e){return this._setEvent(e),this.onMove(this.point)}_eventUp(e){return this._setEvent(e),this.onEnd(this.point)}},Qy=class extends ds{constructor(){super(...arguments),this.points=[]}onStart(e){return this.el=document.createElementNS("http://www.w3.org/2000/svg","path"),this.points=[e],this.attr("fill",this.brush.color),this.attr("d",this.getSvgData(this.points)),this.el}onMove(e){return this.el||this.onStart(e),this.points[this.points.length-1]!==e&&this.points.push(e),this.attr("d",this.getSvgData(this.points)),!0}onEnd(){const e=this.el;return this.el=null,!!e}getSvgData(e){const t=Yy(e,{size:this.brush.size*2,thinning:.9,simulatePressure:!1,start:{taper:5},end:{taper:5},...this.brush.stylusOptions});if(!t.length)return"";const s=t.reduce((a,[r,o],l,i)=>{const[c,u]=i[(l+1)%i.length];return a.push(r,o,(r+c)/2,(o+u)/2),a},["M",...t[0],"Q"]);return s.push("Z"),s.map(a=>typeof a=="number"?a.toFixed(2):a).join(" ")}},Xy=class extends ds{onStart(e){return this.el=this.createElement("ellipse"),this.attr("cx",e.x),this.attr("cy",e.y),this.el}onMove(e){if(!this.el||!this.start)return!1;let[t,s]=Da(e.x-this.start.x),[a,r]=Da(e.y-this.start.y);if(this.shiftPressed){const o=Math.min(t,a);t=o,a=o}if(this.altPressed)this.attr("cx",this.start.x),this.attr("cy",this.start.y),this.attr("rx",t),this.attr("ry",a);else{const[o,l]=[this.start.x,this.start.x+t*s].sort(Pa),[i,c]=[this.start.y,this.start.y+a*r].sort(Pa);this.attr("cx",(o+l)/2),this.attr("cy",(i+c)/2),this.attr("rx",(l-o)/2),this.attr("ry",(c-i)/2)}return!0}onEnd(){const e=this.el;return this.el=null,!(!e||!e.getTotalLength())}};function Qu(e,t){const s=document.createElementNS("http://www.w3.org/2000/svg","defs"),a=document.createElementNS("http://www.w3.org/2000/svg","marker"),r=document.createElementNS("http://www.w3.org/2000/svg","path");return r.setAttribute("fill",t),a.setAttribute("id",e),a.setAttribute("viewBox","0 -5 10 10"),a.setAttribute("refX","5"),a.setAttribute("refY","0"),a.setAttribute("markerWidth","4"),a.setAttribute("markerHeight","4"),a.setAttribute("orient","auto"),r.setAttribute("d","M0,-5L10,0L0,5"),a.appendChild(r),s.appendChild(a),s}var ev=class extends ds{onStart(e){if(this.el=this.createElement("line",{fill:"transparent"}),this.attr("x1",e.x),this.attr("y1",e.y),this.attr("x2",e.x),this.attr("y2",e.y),this.brush.arrowEnd){const t=Ju(),s=document.createElementNS("http://www.w3.org/2000/svg","g");return s.append(Qu(t,this.brush.color)),s.append(this.el),this.attr("marker-end",`url(#${t})`),s}return this.el}onMove(e){if(!this.el)return!1;let{x:t,y:s}=e;if(this.shiftPressed){const a=e.x-this.start.x,r=e.y-this.start.y;if(r!==0){let o=a/r;o=Math.round(o),Math.abs(o)<=1?(t=this.start.x+r*o,s=this.start.y+r):(t=this.start.x+a,s=this.start.y)}}return this.altPressed?(this.attr("x1",this.start.x*2-t),this.attr("y1",this.start.y*2-s),this.attr("x2",t),this.attr("y2",s)):(this.attr("x1",this.start.x),this.attr("y1",this.start.y),this.attr("x2",t),this.attr("y2",s)),!0}onEnd(){const e=this.el;return this.el=null,!(!e||e.getTotalLength()<5)}},tv=class extends ds{onStart(e){return this.el=this.createElement("rect"),this.brush.cornerRadius&&(this.attr("rx",this.brush.cornerRadius),this.attr("ry",this.brush.cornerRadius)),this.attr("x",e.x),this.attr("y",e.y),this.el}onMove(e){if(!this.el||!this.start)return!1;let[t,s]=Da(e.x-this.start.x),[a,r]=Da(e.y-this.start.y);if(this.shiftPressed){const o=Math.min(t,a);t=o,a=o}if(this.altPressed)this.attr("x",this.start.x-t),this.attr("y",this.start.y-a),this.attr("width",t*2),this.attr("height",a*2);else{const[o,l]=[this.start.x,this.start.x+t*s].sort(Pa),[i,c]=[this.start.y,this.start.y+a*r].sort(Pa);this.attr("x",o),this.attr("y",i),this.attr("width",l-o),this.attr("height",c-i)}return!0}onEnd(){const e=this.el;return this.el=null,!(!e||!e.getTotalLength())}};function nv(e,t){const s=e.x-t.x,a=e.y-t.y;return s*s+a*a}function sv(e,t,s){let a=t.x,r=t.y,o=s.x-a,l=s.y-r;if(o!==0||l!==0){const i=((e.x-a)*o+(e.y-r)*l)/(o*o+l*l);i>1?(a=s.x,r=s.y):i>0&&(a+=o*i,r+=l*i)}return o=e.x-a,l=e.y-r,o*o+l*l}function av(e,t){let s=e[0];const a=[s];let r;for(let o=1,l=e.length;o<l;o++)r=e[o],nv(r,s)>t&&(a.push(r),s=r);return s!==r&&r&&a.push(r),a}function to(e,t,s,a,r){let o=a,l=0;for(let i=t+1;i<s;i++){const c=sv(e[i],e[t],e[s]);c>o&&(l=i,o=c)}o>a&&(l-t>1&&to(e,t,l,a,r),r.push(e[l]),s-l>1&&to(e,l,s,a,r))}function rv(e,t){const s=e.length-1,a=[e[0]];return to(e,0,s,t,a),a.push(e[s]),a}function Hi(e,t,s=!1){if(e.length<=2)return e;const a=t!==void 0?t*t:1;return e=s?e:av(e,a),e=rv(e,a),e}var ov=class extends ds{constructor(){super(...arguments),this.points=[],this.count=0}onStart(e){if(this.el=this.createElement("path",{fill:"transparent"}),this.points=[e],this.brush.arrowEnd){this.arrowId=Ju();const t=Qu(this.arrowId,this.brush.color);this.el.appendChild(t)}return this.el}onMove(e){return this.el||this.onStart(e),this.points[this.points.length-1]!==e&&(this.points.push(e),this.count+=1),this.count>5&&(this.points=Hi(this.points,1,!0),this.count=0),this.attr("d",qi(this.points)),!0}onEnd(){const e=this.el;return this.el=null,!(!e||(e.setAttribute("d",qi(Hi(this.points,1,!0))),!e.getTotalLength()))}};function lv(e,t){const s=t.x-e.x,a=t.y-e.y;return{length:Math.sqrt(s**2+a**2),angle:Math.atan2(a,s)}}function Vi(e,t,s,a){const r=t||e,o=s||e,l=.2,i=lv(r,o),c=i.angle+(a?Math.PI:0),u=i.length*l,p=e.x+Math.cos(c)*u,d=e.y+Math.sin(c)*u;return{x:p,y:d}}function iv(e,t,s){const a=Vi(s[t-1],s[t-2],e),r=Vi(e,s[t-1],s[t+1],!0);return`C ${a.x.toFixed(zt)},${a.y.toFixed(zt)} ${r.x.toFixed(zt)},${r.y.toFixed(zt)} ${e.x.toFixed(zt)},${e.y.toFixed(zt)}`}function qi(e){return e.reduce((t,s,a,r)=>a===0?`M ${s.x.toFixed(zt)},${s.y.toFixed(zt)}`:`${t} ${iv(s,a,r)}`,"")}var cv=class extends ds{constructor(){super(...arguments),this.pathSubFactor=20,this.pathFragments=[]}onSelected(e){const t=(s,a)=>{if(s&&s.length)for(let r=0;r<s.length;r++){const o=s[r];if(o.getTotalLength){const l=o.getTotalLength();for(let i=0;i<this.pathSubFactor;i++){const c=o.getPointAtLength(l*i/this.pathSubFactor),u=o.getPointAtLength(l*(i+1)/this.pathSubFactor);this.pathFragments.push({x1:c.x,x2:u.x,y1:c.y,y2:u.y,segment:i,element:a||o})}}else o.children&&t(o.children,o)}};e&&t(e.children)}onUnselected(){this.pathFragments=[]}onStart(e){this.svgPointPrevious=this.svgElement.createSVGPoint(),this.svgPointPrevious.x=e.x,this.svgPointPrevious.y=e.y}onMove(e){this.svgPointCurrent=this.svgElement.createSVGPoint(),this.svgPointCurrent.x=e.x,this.svgPointCurrent.y=e.y;const t=this.checkAndEraseElement();return this.svgPointPrevious=this.svgPointCurrent,t}onEnd(){return this.svgPointPrevious=void 0,this.svgPointCurrent=void 0,!0}checkAndEraseElement(){const e=[];if(this.pathFragments.length)for(let t=0;t<this.pathFragments.length;t++){const s=this.pathFragments[t],a={x1:this.svgPointPrevious.x,x2:this.svgPointCurrent.x,y1:this.svgPointPrevious.y,y2:this.svgPointCurrent.y};this.lineLineIntersect(s,a)&&(s.element.remove(),e.push(t))}return e.length&&(this.pathFragments=this.pathFragments.filter((t,s)=>!e.includes(s))),e.length>0}lineLineIntersect(e,t){const s=e.x1,a=e.x2,r=t.x1,o=t.x2,l=e.y1,i=e.y2,c=t.y1,u=t.y2,p=(s-a)*(c-u)-(l-i)*(r-o),d=(s*i-l*a)*(r-o)-(s-a)*(r*u-c*o),m=(s*i-l*a)*(c-u)-(l-i)*(r*u-c*o),g=(h,_,x)=>h>=_&&h<=x?!0:h>=x&&h<=_;if(p===0)return!1;{const h={x:d/p,y:m/p};return g(h.x,s,a)&&g(h.y,l,i)&&g(h.x,r,o)&&g(h.y,c,u)}}};function uv(e){return{draw:new ov(e),stylus:new Qy(e),line:new ev(e),rectangle:new tv(e),ellipse:new Xy(e),eraseLine:new cv(e)}}var pv=class{constructor(e={}){this.options=e,this.el=null,this.svgPoint=null,this.eventEl=null,this.shiftPressed=!1,this.altPressed=!1,this.drawing=!1,this._emitter=Gy(),this._models=uv(this),this._undoStack=[],this._disposables=[],this.options.brush||(this.options.brush={color:"black",size:3,mode:"stylus"}),e.el&&this.mount(e.el,e.eventTarget)}get model(){return this._models[this.mode]}get mounted(){return!!this.el}get mode(){return this.options.brush.mode||"stylus"}set mode(e){this._models[this.mode].onUnselected(),this.options.brush.mode=e,this.model.onSelected(this.el)}get brush(){return this.options.brush}set brush(e){this.options.brush=e}resolveSelector(e){return typeof e=="string"?document.querySelector(e):e||null}mount(e,t){if(this.el)throw new Error("[drauu] already mounted, unmount previous target first");if(this.el=this.resolveSelector(e),!this.el)throw new Error("[drauu] target element not found");if(this.el.tagName.toLocaleLowerCase()!=="svg")throw new Error("[drauu] can only mount to a SVG element");if(!this.el.createSVGPoint)throw new Error("[drauu] SVG element must be create by document.createElementNS('http://www.w3.org/2000/svg', 'svg')");this.svgPoint=this.el.createSVGPoint();const s=this.resolveSelector(t)||this.el,a=this.eventStart.bind(this),r=this.eventMove.bind(this),o=this.eventEnd.bind(this),l=this.eventKeyboard.bind(this);s.addEventListener("pointerdown",a,{passive:!1}),window.addEventListener("pointermove",r,{passive:!1}),window.addEventListener("pointerup",o,{passive:!1}),window.addEventListener("pointercancel",o,{passive:!1}),window.addEventListener("keydown",l,!1),window.addEventListener("keyup",l,!1),this._disposables.push(()=>{s.removeEventListener("pointerdown",a),window.removeEventListener("pointermove",r),window.removeEventListener("pointerup",o),window.removeEventListener("pointercancel",o),window.removeEventListener("keydown",l,!1),window.removeEventListener("keyup",l,!1)}),this._emitter.emit("mounted")}unmount(){this._disposables.forEach(e=>e()),this._disposables.length=0,this.el=null,this._emitter.emit("unmounted")}on(e,t){return this._emitter.on(e,t)}undo(){const e=this.el;return e.lastElementChild?(this._undoStack.push(e.lastElementChild.cloneNode(!0)),e.lastElementChild.remove(),this._emitter.emit("changed"),!0):!1}redo(){return this._undoStack.length?(this.el.appendChild(this._undoStack.pop()),this._emitter.emit("changed"),!0):!1}canRedo(){return!!this._undoStack.length}canUndo(){var e;return!!((e=this.el)!=null&&e.lastElementChild)}eventMove(e){!this.acceptsInput(e)||!this.drawing||this.model._eventMove(e)&&(e.stopPropagation(),e.preventDefault(),this._emitter.emit("changed"))}eventStart(e){!this.acceptsInput(e)||(e.stopPropagation(),e.preventDefault(),this._currentNode&&this.cancel(),this.drawing=!0,this._emitter.emit("start"),this._currentNode=this.model._eventDown(e),this._currentNode&&this.mode!=="eraseLine"&&this.el.appendChild(this._currentNode),this._emitter.emit("changed"))}eventEnd(e){if(!this.acceptsInput(e)||!this.drawing)return;const t=this.model._eventUp(e);t?(t instanceof Element&&t!==this._currentNode&&(this._currentNode=t),this.commit()):this.cancel(),this.drawing=!1,this._emitter.emit("end"),this._emitter.emit("changed")}acceptsInput(e){return!this.options.acceptsInputTypes||this.options.acceptsInputTypes.includes(e.pointerType)}eventKeyboard(e){this.shiftPressed===e.shiftKey&&this.altPressed===e.altKey||(this.shiftPressed=e.shiftKey,this.altPressed=e.altKey,this.model.point&&this.model.onMove(this.model.point)&&this._emitter.emit("changed"))}commit(){this._undoStack.length=0;const e=this._currentNode;this._currentNode=void 0,this._emitter.emit("committed",e)}clear(){this._undoStack.length=0,this.cancel(),this.el.innerHTML="",this._emitter.emit("changed")}cancel(){this._currentNode&&(this.el.removeChild(this._currentNode),this._currentNode=void 0,this._emitter.emit("canceled"))}dump(){return this.el.innerHTML}load(e){this.clear(),this.el.innerHTML=e}};function dv(e){return new pv(e)}const no=["#ff595e","#ffca3a","#8ac926","#1982c4","#6a4c93","#ffffff","#000000"],Rt=$t("slidev-drawing-enabled",!1),K5=$t("slidev-drawing-pinned",!1),fv=L(!1),mv=L(!1),hv=L(!1),Ks=L(!1),Cn=Im($t("slidev-drawing-brush",{color:no[0],size:4,mode:"stylus"})),Ui=L("stylus"),Xu=O(()=>ve.drawings.syncAll||It.value);let zs=!1;const ks=O({get(){return Ui.value},set(e){Ui.value=e,e==="arrow"?(Cn.mode="line",Cn.arrowEnd=!0):(Cn.mode=e,Cn.arrowEnd=!1)}}),gv=De({brush:Cn,acceptsInputTypes:O(()=>Rt.value?void 0:["pen"]),coordinateTransform:!1}),nt=qa(dv(gv));function yv(){nt.clear(),Xu.value&&Fu(Re.value,"")}function ep(){var e;mv.value=nt.canRedo(),fv.value=nt.canUndo(),hv.value=!!((e=nt.el)!=null&&e.children.length)}function vv(e){zs=!0;const t=Oa[e||Re.value];t!=null?nt.load(t):nt.clear(),zs=!1}nt.on("changed",()=>{if(ep(),!zs){const e=nt.dump(),t=Re.value;(Oa[t]||"")!==e&&Xu.value&&Fu(t,nt.dump())}});$h(e=>{zs=!0,e[Re.value]!=null&&nt.load(e[Re.value]||""),zs=!1,ep()});Ye(()=>{ce(Re,()=>{!nt.mounted||vv()},{immediate:!0})});nt.on("start",()=>Ks.value=!0);nt.on("end",()=>Ks.value=!1);window.addEventListener("keydown",e=>{if(!Rt.value)return;const t=!e.ctrlKey&&!e.altKey&&!e.shiftKey&&!e.metaKey;let s=!0;e.code==="KeyZ"&&(e.ctrlKey||e.metaKey)?e.shiftKey?nt.redo():nt.undo():e.code==="Escape"?Rt.value=!1:e.code==="KeyL"&&t?ks.value="line":e.code==="KeyA"&&t?ks.value="arrow":e.code==="KeyS"&&t?ks.value="stylus":e.code==="KeyR"&&t?ks.value="rectangle":e.code==="KeyE"&&t?ks.value="ellipse":e.code==="KeyC"&&t?yv():e.code.startsWith("Digit")&&t&&+e.code[5]<=no.length?Cn.color=no[+e.code[5]-1]:s=!1,s&&(e.preventDefault(),e.stopPropagation())},!1);function He(...e){return O(()=>e.every(t=>ze(t)))}function it(e){return O(()=>!ze(e))}const Ki=ng(),vr=$t("slidev-color-schema","auto"),so=O(()=>ve.colorSchema!=="auto"),Wo=O({get(){return so.value?ve.colorSchema==="dark":vr.value==="auto"?Ki.value:vr.value==="dark"},set(e){so.value||(vr.value=e===Ki.value?"auto":e?"dark":"light")}}),tp=Au(Wo);Pt&&ce(Wo,e=>{const t=document.querySelector("html");t.classList.toggle("dark",e),t.classList.toggle("light",!e)},{immediate:!0});const ya=L(1),va=O(()=>Ve.length-1),ft=L(0),Yo=L(0);function _v(){ft.value>ya.value&&(ft.value-=1)}function xv(){ft.value<va.value&&(ft.value+=1)}function bv(){if(ft.value>ya.value){let e=ft.value-Yo.value;e<ya.value&&(e=ya.value),ft.value=e}}function kv(){if(ft.value<va.value){let e=ft.value+Yo.value;e>va.value&&(e=va.value),ft.value=e}}function Ev(){const{escape:e,space:t,shift:s,left:a,right:r,up:o,down:l,enter:i,d:c,g:u,o:p}=Wu;let d=[{name:"next_space",key:He(t,it(s)),fn:ln,autoRepeat:!0},{name:"prev_space",key:He(t,s),fn:cn,autoRepeat:!0},{name:"next_right",key:He(r,it(s),it(tt)),fn:ln,autoRepeat:!0},{name:"prev_left",key:He(a,it(s),it(tt)),fn:cn,autoRepeat:!0},{name:"next_page_key",key:"pageDown",fn:ln,autoRepeat:!0},{name:"prev_page_key",key:"pageUp",fn:cn,autoRepeat:!0},{name:"next_down",key:He(l,it(tt)),fn:Ys,autoRepeat:!0},{name:"prev_up",key:He(o,it(tt)),fn:()=>Gs(!1),autoRepeat:!0},{name:"next_shift",key:He(r,s),fn:Ys,autoRepeat:!0},{name:"prev_shift",key:He(a,s),fn:()=>Gs(!1),autoRepeat:!0},{name:"toggle_dark",key:He(c,it(Rt)),fn:tp},{name:"toggle_overview",key:He(p,it(Rt)),fn:Gu},{name:"hide_overview",key:He(e,it(Rt)),fn:()=>tt.value=!1},{name:"goto",key:He(u,it(Rt)),fn:()=>zn.value=!zn.value},{name:"next_overview",key:He(r,tt),fn:xv},{name:"prev_overview",key:He(a,tt),fn:_v},{name:"up_overview",key:He(o,tt),fn:bv},{name:"down_overview",key:He(l,tt),fn:kv},{name:"goto_from_overview",key:He(i,tt),fn:()=>{os(ft.value),tt.value=!1}}];const m=new Set(d.map(h=>h.name));if(d.filter(h=>h.name&&m.has(h.name)).length===0){const h=["========== WARNING ==========","defineShortcutsSetup did not return any of the base shortcuts.","See https://sli.dev/custom/config-shortcuts.html for migration.",'If it is intentional, return at least one shortcut with one of the base names (e.g. name:"goto").'].join(`

`);alert(h),console.warn(h)}return d}const np=He(it(Iy),it(Ny),My);function wv(e,t,s=!1){typeof e=="string"&&(e=Wu[e]);const a=He(e,np);let r=0,o;const l=()=>{if(clearTimeout(o),!a.value){r=0;return}s&&(o=setTimeout(l,Math.max(1e3-r*250,150)),r++),t()};return ce(a,l,{flush:"sync"})}function Cv(e,t){return Rh(e,s=>{!np.value||s.repeat||t()})}function Av(){const e=Ev();new Map(e.map(s=>[s.key,s])).forEach(s=>{s.fn&&wv(s.key,s.fn,s.autoRepeat)}),Cv("f",()=>Yu.toggle())}const Bv={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Sv=n("path",{fill:"currentColor",d:"M24 9.4L22.6 8L16 14.6L9.4 8L8 9.4l6.6 6.6L8 22.6L9.4 24l6.6-6.6l6.6 6.6l1.4-1.4l-6.6-6.6L24 9.4z"},null,-1),Ov=[Sv];function Tv(e,t){return A(),V("svg",Bv,Ov)}const Pv={name:"carbon-close",render:Tv};function Go(e){var s,a;const t=(a=(s=e==null?void 0:e.meta)==null?void 0:s.slide)==null?void 0:a.no;return t!=null?`slidev-page-${t}`:""}const sp=we({__name:"SlideContainer",props:{width:{type:Number},meta:{default:()=>({})},scale:{type:[Number,String]}},setup(e){const t=e;U(Z);const s=L(),a=hg(s),r=O(()=>t.width?t.width:a.width.value),o=O(()=>t.width?t.width/rn:a.height.value);t.width&&cs(()=>{s.value&&(s.value.style.width=`${r.value}px`,s.value.style.height=`${o.value}px`)});const l=O(()=>r.value/o.value),i=O(()=>t.scale?t.scale:l.value<rn?r.value/on:o.value*rn/on),c=O(()=>({height:`${Uo}px`,width:`${on}px`,transform:`translate(-50%, -50%) scale(${i.value})`})),u=O(()=>({"select-none":!ve.selectable,"slidev-code-line-numbers":ve.lineNumbers}));return pt(Pu,i),(p,d)=>(A(),V("div",{id:"slide-container",ref_key:"root",ref:s,class:Me(k(u))},[n("div",{id:"slide-content",style:Je(k(c))},[Tt(p.$slots,"default")],4),Tt(p.$slots,"controls")],2))}});const Zo=we({props:{clicks:{type:[Number,String],default:0},clicksElements:{type:Array,default:()=>[]},clicksOrderMap:{type:Map,default:()=>new Map},clicksDisabled:{type:Boolean,default:!1},context:{type:String,default:"main"},is:{type:Object,default:void 0},route:{type:Object,default:void 0}},setup(e,{emit:t}){const s=Nt(e,"clicks",t),a=Nt(e,"clicksElements",t),r=Nt(e,"clicksDisabled",t),o=Nt(e,"clicksOrderMap",t);a.value.length=0,pt(xh,e.route),pt(bh,e.context),pt(Ss,s),pt(Os,r),pt(bn,a),pt(zr,o)},render(){var e,t;return this.$props.is?dt(this.$props.is):(t=(e=this.$slots)==null?void 0:e.default)==null?void 0:t.call(e)}}),Dv=["innerHTML"],$v=we({__name:"DrawingPreview",props:{page:null},setup(e){return U(Z),(t,s)=>k(Oa)[e.page]?(A(),V("svg",{key:0,ref:"svg",class:"w-full h-full absolute top-0 pointer-events-none",innerHTML:k(Oa)[e.page]},null,8,Dv)):me("v-if",!0)}}),Fv={class:"slides-overview bg-main !bg-opacity-75 p-16 overflow-y-auto"},Mv=["onClick"],jv=we({__name:"SlidesOverview",props:{modelValue:{type:Boolean}},emits:[],setup(e,{emit:t}){const s=e;U(Z);const a=Nt(s,"modelValue",t);function r(){a.value=!1}function o(g){os(g),r()}function l(g){return g===ft.value}const i=Xr.smaller("xs"),c=Xr.smaller("sm"),u=4*16*2,p=2*16,d=O(()=>i.value?Tn.width.value-u:c.value?(Tn.width.value-u-p)/2:300),m=O(()=>Math.floor((Tn.width.value-u)/(d.value+p)));return cs(()=>{ft.value=Re.value,Yo.value=m.value}),(g,h)=>{const _=Pv;return A(),V(Ee,null,[ps(n("div",Fv,[n("div",{class:"grid gap-y-4 gap-x-8 w-full",style:Je(`grid-template-columns: repeat(auto-fit,minmax(${k(d)}px,1fr))`)},[(A(!0),V(Ee,null,Qs(k(Ve).slice(0,-1),(x,b)=>(A(),V("div",{key:x.path,class:"relative"},[n("div",{class:Me(["inline-block border border-gray-400 rounded border-opacity-50 overflow-hidden bg-main hover:border-$slidev-theme-primary",{"border-$slidev-theme-primary":l(b+1)}]),onClick:w=>o(+x.path)},[(A(),G(sp,{key:x.path,width:k(d),"clicks-disabled":!0,class:"pointer-events-none"},{default:ee(()=>[W(k(Zo),{is:x==null?void 0:x.component,"clicks-disabled":!0,class:Me(k(Go)(x)),route:x,context:"overview"},null,8,["is","class","route"]),W($v,{page:+x.path},null,8,["page"])]),_:2},1032,["width"]))],10,Mv),n("div",{class:"absolute top-0 opacity-50",style:Je(`left: ${k(d)+5}px`)},Pn(b+1),5)]))),128))],4)],512),[[ku,k(a)]]),k(a)?(A(),V("button",{key:0,class:"fixed text-2xl top-4 right-4 icon-btn text-gray-400",onClick:r},[W(_)])):me("v-if",!0)],64)}}});const Iv="/materi-PBO-08/assets/logo.b72bde5d.png",Nv={key:0,class:"fixed top-0 bottom-0 left-0 right-0 grid z-20"},Rv=we({__name:"Modal",props:{modelValue:{default:!1},class:{default:""}},emits:["modelValue"],setup(e,{emit:t}){const s=e;U(Z);const a=Nt(s,"modelValue",t);function r(){a.value=!1}return(o,l)=>(A(),G(ru,null,[k(a)?(A(),V("div",Nv,[n("div",{bg:"black opacity-80",class:"absolute top-0 bottom-0 left-0 right-0 -z-1",onClick:l[0]||(l[0]=i=>r())}),n("div",{class:Me(["m-auto rounded-md bg-main shadow",s.class]),"dark:border":"~ gray-400 opacity-10"},[Tt(o.$slots,"default")],2)])):me("v-if",!0)],1024))}}),Lv={class:"slidev-info-dialog slidev-layout flex flex-col gap-4 text-base"},Hv=["innerHTML"],Vv=n("a",{href:"https://github.com/slidevjs/slidev",target:"_blank",class:"!opacity-100 !border-none !text-current"},[n("div",{class:"flex gap-1 children:my-auto"},[n("div",{class:"opacity-50 text-sm mr-2"},"Powered by"),n("img",{class:"w-5 h-5",src:Iv,alt:"Slidev"}),n("div",{style:{color:"#2082A6"}},[n("b",null,"Sli"),f("dev ")])])],-1),qv=we({__name:"InfoDialog",props:{modelValue:{default:!1}},emits:["modelValue"],setup(e,{emit:t}){const s=e;U(Z);const a=Nt(s,"modelValue",t),r=O(()=>typeof ve.info=="string");return(o,l)=>(A(),G(Rv,{modelValue:k(a),"onUpdate:modelValue":l[0]||(l[0]=i=>xe(a)?a.value=i:null),class:"px-6 py-4"},{default:ee(()=>[n("div",Lv,[k(r)?(A(),V("div",{key:0,class:"mb-4",innerHTML:k(ve).info},null,8,Hv)):me("v-if",!0),Vv])]),_:1},8,["modelValue"]))}});const Uv=["disabled","onKeydown"],Kv=we({__name:"Goto",setup(e){U(Z);const t=L(),s=L(""),a=O(()=>{if(s.value.startsWith("/"))return!!Ve.find(l=>l.path===s.value.substring(1));{const l=+s.value;return!isNaN(l)&&l>0&&l<=hp.value}});function r(){a.value&&(s.value.startsWith("/")?os(s.value.substring(1)):os(+s.value)),o()}function o(){zn.value=!1}return ce(zn,async l=>{var i,c;l?(await Ye(),s.value="",(i=t.value)==null||i.focus()):(c=t.value)==null||c.blur()}),ce(s,l=>{l.match(/^[^0-9/]/)&&(s.value=s.value.substring(1))}),(l,i)=>(A(),V("div",{id:"slidev-goto-dialog",class:Me(["fixed right-5 bg-main transform transition-all",k(zn)?"top-5":"-top-20"]),shadow:"~",p:"x-4 y-2",border:"~ transparent rounded dark:gray-400 dark:opacity-25"},[ps(n("input",{ref_key:"input",ref:t,"onUpdate:modelValue":i[0]||(i[0]=c=>s.value=c),type:"text",disabled:!k(zn),class:Me(["outline-none bg-transparent",{"text-red-400":!k(a)&&s.value}]),placeholder:"Goto...",onKeydown:[Yl(r,["enter"]),Yl(o,["escape"])],onBlur:o},null,42,Uv),[[Em,s.value]])],2))}}),zv=we({__name:"Controls",setup(e){U(Z);const t=Ht(),s=Ht();return(a,r)=>(A(),V(Ee,null,[W(jv,{modelValue:k(tt),"onUpdate:modelValue":r[0]||(r[0]=o=>xe(tt)?tt.value=o:null)},null,8,["modelValue"]),W(Kv),k(t)?(A(),G(k(t),{key:0})):me("v-if",!0),k(s)?(A(),G(k(s),{key:1,modelValue:k(gr),"onUpdate:modelValue":r[1]||(r[1]=o=>xe(gr)?gr.value=o:null)},null,8,["modelValue"])):me("v-if",!0),k(ve).info?(A(),G(qv,{key:2,modelValue:k(Ds),"onUpdate:modelValue":r[2]||(r[2]=o=>xe(Ds)?Ds.value=o:null)},null,8,["modelValue"])):me("v-if",!0)],64))}}),Wv={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Yv=n("path",{fill:"currentColor",d:"M30 8h-4.1c-.5-2.3-2.5-4-4.9-4s-4.4 1.7-4.9 4H2v2h14.1c.5 2.3 2.5 4 4.9 4s4.4-1.7 4.9-4H30V8zm-9 4c-1.7 0-3-1.3-3-3s1.3-3 3-3s3 1.3 3 3s-1.3 3-3 3zM2 24h4.1c.5 2.3 2.5 4 4.9 4s4.4-1.7 4.9-4H30v-2H15.9c-.5-2.3-2.5-4-4.9-4s-4.4 1.7-4.9 4H2v2zm9-4c1.7 0 3 1.3 3 3s-1.3 3-3 3s-3-1.3-3-3s1.3-3 3-3z"},null,-1),Gv=[Yv];function Zv(e,t){return A(),V("svg",Wv,Gv)}const Jv={name:"carbon-settings-adjust",render:Zv},Qv={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Xv=n("path",{fill:"currentColor",d:"M17 22v-8h-4v2h2v6h-3v2h8v-2h-3zM16 8a1.5 1.5 0 1 0 1.5 1.5A1.5 1.5 0 0 0 16 8z"},null,-1),e0=n("path",{fill:"currentColor",d:"M16 30a14 14 0 1 1 14-14a14 14 0 0 1-14 14Zm0-26a12 12 0 1 0 12 12A12 12 0 0 0 16 4Z"},null,-1),t0=[Xv,e0];function n0(e,t){return A(),V("svg",Qv,t0)}const s0={name:"carbon-information",render:n0},a0={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},r0=n("path",{fill:"currentColor",d:"M26 24v4H6v-4H4v4a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2v-4zm0-10l-1.41-1.41L17 20.17V2h-2v18.17l-7.59-7.58L6 14l10 10l10-10z"},null,-1),o0=[r0];function l0(e,t){return A(),V("svg",a0,o0)}const i0={name:"carbon-download",render:l0},c0={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},u0=n("path",{fill:"currentColor",d:"M29.415 19L27.7 17.285A2.97 2.97 0 0 0 28 16a3 3 0 1 0-3 3a2.97 2.97 0 0 0 1.286-.3L28 20.414V28h-6v-3a7.008 7.008 0 0 0-7-7H9a7.008 7.008 0 0 0-7 7v5h28v-9.586A1.988 1.988 0 0 0 29.415 19ZM4 25a5.006 5.006 0 0 1 5-5h6a5.006 5.006 0 0 1 5 5v3H4Z"},null,-1),p0=n("path",{fill:"currentColor",d:"M12 4a5 5 0 1 1-5 5a5 5 0 0 1 5-5m0-2a7 7 0 1 0 7 7a7 7 0 0 0-7-7Z"},null,-1),d0=[u0,p0];function f0(e,t){return A(),V("svg",c0,d0)}const m0={name:"carbon-user-speaker",render:f0},h0={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},g0=n("path",{fill:"currentColor",d:"M15 10h2v8h-2zm5 4h2v4h-2zm-10-2h2v6h-2z"},null,-1),y0=n("path",{fill:"currentColor",d:"M25 4h-8V2h-2v2H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8v6h-4v2h10v-2h-4v-6h8a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 16H7V6h18Z"},null,-1),v0=[g0,y0];function _0(e,t){return A(),V("svg",h0,v0)}const x0={name:"carbon-presentation-file",render:_0},b0={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},k0=n("path",{fill:"currentColor",d:"M27.307 6.107L30 3.414L28.586 2l-2.693 2.693L24.8 3.6a1.933 1.933 0 0 0-2.8 0l-18 18V28h6.4l18-18a1.933 1.933 0 0 0 0-2.8ZM9.6 26H6v-3.6L23.4 5L27 8.6ZM9 11.586L16.586 4L18 5.414L10.414 13z"},null,-1),E0=[k0];function w0(e,t){return A(),V("svg",b0,E0)}const C0={name:"carbon-pen",render:w0},A0={class:"slidev-icon",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},B0=n("path",{fill:"currentColor",d:"m38.2 48.5l58.2 155.2a8 8 0 0 0 15-.1l23.3-64.1a8.1 8.1 0 0 1 4.8-4.8l64.1-23.3a8 8 0 0 0 .1-15L48.5 38.2a8 8 0 0 0-10.3 10.3Z",opacity:".2"},null,-1),S0=n("path",{fill:"currentColor",d:"m150.5 139.2l55.9-20.3a16 16 0 0 0 .1-30L51.3 30.7a16 16 0 0 0-20.6 20.6l58.2 155.2a15.9 15.9 0 0 0 15 10.4h.1a15.9 15.9 0 0 0 14.9-10.5l20.3-55.9l63.1 63.2a8.5 8.5 0 0 0 5.7 2.3a8.3 8.3 0 0 0 5.7-2.3a8.1 8.1 0 0 0 0-11.4Zm-46.6 61.7L45.7 45.7l155.2 58.2l-64.1 23.3a15.7 15.7 0 0 0-9.6 9.6Z"},null,-1),O0=[B0,S0];function T0(e,t){return A(),V("svg",A0,O0)}const P0={name:"ph-cursor-duotone",render:T0},D0={class:"slidev-icon",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},$0=n("path",{fill:"currentColor",d:"M213.7 202.3a8.1 8.1 0 0 1 0 11.4a8.3 8.3 0 0 1-5.7 2.3a8.5 8.5 0 0 1-5.7-2.3l-63.1-63.2l-20.3 55.9a15.9 15.9 0 0 1-14.9 10.5h-.1a15.9 15.9 0 0 1-15-10.4L30.7 51.3a16 16 0 0 1 20.6-20.6l155.2 58.2a16 16 0 0 1-.1 30l-55.9 20.3Z"},null,-1),F0=[$0];function M0(e,t){return A(),V("svg",D0,F0)}const ap={name:"ph-cursor-fill",render:M0},j0={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},I0=n("path",{fill:"currentColor",d:"M16 12.005a4 4 0 1 1-4 4a4.005 4.005 0 0 1 4-4m0-2a6 6 0 1 0 6 6a6 6 0 0 0-6-6ZM5.394 6.813L6.81 5.399l3.505 3.506L8.9 10.319zM2 15.005h5v2H2zm3.394 10.193L8.9 21.692l1.414 1.414l-3.505 3.506zM15 25.005h2v5h-2zm6.687-1.9l1.414-1.414l3.506 3.506l-1.414 1.414zm3.313-8.1h5v2h-5zm-3.313-6.101l3.506-3.506l1.414 1.414l-3.506 3.506zM15 2.005h2v5h-2z"},null,-1),N0=[I0];function R0(e,t){return A(),V("svg",j0,N0)}const L0={name:"carbon-sun",render:R0},H0={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},V0=n("path",{fill:"currentColor",d:"M13.502 5.414a15.075 15.075 0 0 0 11.594 18.194a11.113 11.113 0 0 1-7.975 3.39c-.138 0-.278.005-.418 0a11.094 11.094 0 0 1-3.2-21.584M14.98 3a1.002 1.002 0 0 0-.175.016a13.096 13.096 0 0 0 1.825 25.981c.164.006.328 0 .49 0a13.072 13.072 0 0 0 10.703-5.555a1.01 1.01 0 0 0-.783-1.565A13.08 13.08 0 0 1 15.89 4.38A1.015 1.015 0 0 0 14.98 3Z"},null,-1),q0=[V0];function U0(e,t){return A(),V("svg",H0,q0)}const K0={name:"carbon-moon",render:U0},z0={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},W0=n("path",{fill:"currentColor",d:"M8 4v4H4V4Zm2-2H2v8h8Zm8 2v4h-4V4Zm2-2h-8v8h8Zm8 2v4h-4V4Zm2-2h-8v8h8ZM8 14v4H4v-4Zm2-2H2v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8ZM8 24v4H4v-4Zm2-2H2v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8Z"},null,-1),Y0=[W0];function G0(e,t){return A(),V("svg",z0,Y0)}const Z0={name:"carbon-apps",render:G0},J0={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Q0=n("path",{fill:"currentColor",d:"m18 6l-1.43 1.393L24.15 15H4v2h20.15l-7.58 7.573L18 26l10-10L18 6z"},null,-1),X0=[Q0];function e1(e,t){return A(),V("svg",J0,X0)}const t1={name:"carbon-arrow-right",render:e1},n1={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},s1=n("path",{fill:"currentColor",d:"m14 26l1.41-1.41L7.83 17H28v-2H7.83l7.58-7.59L14 6L4 16l10 10z"},null,-1),a1=[s1];function r1(e,t){return A(),V("svg",n1,a1)}const o1={name:"carbon-arrow-left",render:r1},l1={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},i1=n("path",{fill:"currentColor",d:"M20 2v2h6.586L18 12.582L19.414 14L28 5.414V12h2V2H20zm-6 17.416L12.592 18L4 26.586V20H2v10h10v-2H5.414L14 19.416z"},null,-1),c1=[i1];function u1(e,t){return A(),V("svg",l1,c1)}const p1={name:"carbon-maximize",render:u1},d1={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},f1=n("path",{fill:"currentColor",d:"M4 18v2h6.586L2 28.582L3.414 30L12 21.414V28h2V18H4zM30 3.416L28.592 2L20 10.586V4h-2v10h10v-2h-6.586L30 3.416z"},null,-1),m1=[f1];function h1(e,t){return A(),V("svg",d1,m1)}const g1={name:"carbon-minimize",render:h1},y1={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},v1=n("path",{fill:"currentColor",d:"m13 24l-9-9l1.414-1.414L13 21.171L26.586 7.586L28 9L13 24z"},null,-1),_1=[v1];function x1(e,t){return A(),V("svg",y1,_1)}const b1={name:"carbon-checkmark",render:x1},k1={class:"select-list"},E1={class:"title"},w1={class:"items"},C1=["onClick"],A1=we({__name:"SelectList",props:{modelValue:{type:[Object,String,Number]},title:{type:String},items:{type:Array}},setup(e,{emit:t}){const s=e;U(Z);const a=Nt(s,"modelValue",t,{passive:!0});return(r,o)=>{const l=b1;return A(),V("div",k1,[n("div",E1,Pn(e.title),1),n("div",w1,[(A(!0),V(Ee,null,Qs(e.items,i=>(A(),V("div",{key:i.value,class:Me(["item",{active:k(a)===i.value}]),onClick:()=>{var c;a.value=i.value,(c=i.onClick)==null||c.call(i)}},[W(l,{class:Me(["text-green-500",{"opacity-0":k(a)!==i.value}])},null,8,["class"]),f(" "+Pn(i.display||i.value),1)],10,C1))),128))])])}}});const rp=(e,t)=>{const s=e.__vccOpts||e;for(const[a,r]of t)s[a]=r;return s},B1=rp(A1,[["__scopeId","data-v-7dd0eaca"]]),S1={class:"text-sm"},O1=we({__name:"Settings",setup(e){U(Z);const t=[{display:"Fit",value:0},{display:"1:1",value:1}];return(s,a)=>(A(),V("div",S1,[W(B1,{modelValue:k(ga),"onUpdate:modelValue":a[0]||(a[0]=r=>xe(ga)?ga.value=r:null),title:"Scale",items:t},null,8,["modelValue"])]))}}),T1={key:0,class:"rounded-md bg-main shadow absolute bottom-10 left-0 z-20","dark:border":"~ gray-400 opacity-10"},P1=we({__name:"MenuButton",props:{modelValue:{default:!1},disabled:{default:!1}},setup(e,{emit:t}){const s=e;U(Z);const a=Nt(s,"modelValue",t,{passive:!0}),r=L();return Ih(r,()=>{a.value=!1}),(o,l)=>(A(),V("div",{ref_key:"el",ref:r,class:"flex relative"},[n("button",{class:Me({disabled:e.disabled}),onClick:l[0]||(l[0]=i=>a.value=!k(a))},[Tt(o.$slots,"button",{class:Me({disabled:e.disabled})})],2),(A(),G(ru,null,[k(a)?(A(),V("div",T1,[Tt(o.$slots,"menu")])):me("v-if",!0)],1024))],512))}}),D1={class:"w-1px opacity-10 bg-current m-1 lg:m-2"},pa={__name:"VerticalDivider",setup(e){return U(Z),(t,s)=>(A(),V("div",D1))}},$1={render(){return[]}},F1={class:"icon-btn"},M1={class:"h-40px flex",p:"l-1 t-0.5 r-2",text:"sm leading-2"},j1={class:"my-auto"},I1={class:"opacity-50"},N1=we({__name:"NavControls",props:{persist:{default:!1}},setup(e){const t=e;U(Z);const s=Xr.smaller("md"),{isFullscreen:a,toggle:r}=Yu,o=O(()=>ro.value?`?password=${ro.value}`:""),l=O(()=>`/presenter/${Re.value}${o.value}`),i=O(()=>`/${Re.value}${o.value}`),c=L(),u=()=>{c.value&&Xn.value&&c.value.contains(Xn.value)&&Xn.value.blur()},p=O(()=>t.persist?"text-$slidev-controls-foreground bg-transparent":"rounded-md bg-main shadow dark:border dark:border-gray-400 dark:border-opacity-10"),d=Ht(),m=Ht();return $n(()=>import("./DrawingControls.2fdc3a87.js"),["assets/DrawingControls.2fdc3a87.js","assets/DrawingControls.vue_vue_type_script_setup_true_lang.318c0db2.js"]).then(g=>m.value=g.default),(g,h)=>{const _=g1,x=p1,b=o1,w=t1,E=Z0,B=K0,$=L0,F=ap,I=P0,J=C0,ie=x0,ue=wa("RouterLink"),ge=m0,qe=i0,Le=s0,Fe=Jv;return A(),V("nav",{ref_key:"root",ref:c,class:"flex flex-col"},[n("div",{class:Me(["flex flex-wrap-reverse text-xl gap-0.5 p-1 lg:gap-1 lg:p-2",k(p)]),onMouseleave:u},[k(Ut)?me("v-if",!0):(A(),V("button",{key:0,class:"icon-btn",onClick:h[0]||(h[0]=(...Te)=>k(r)&&k(r)(...Te))},[k(a)?(A(),G(_,{key:0})):(A(),G(x,{key:1}))])),n("button",{class:Me(["icon-btn",{disabled:!k(p8)}]),onClick:h[1]||(h[1]=(...Te)=>k(cn)&&k(cn)(...Te))},[W(b)],2),n("button",{class:Me(["icon-btn",{disabled:!k(u8)}]),title:"Next",onClick:h[2]||(h[2]=(...Te)=>k(ln)&&k(ln)(...Te))},[W(w)],2),k(Ut)?me("v-if",!0):(A(),V("button",{key:1,class:"icon-btn",title:"Slides overview",onClick:h[3]||(h[3]=Te=>k(Gu)())},[W(E)])),k(so)?me("v-if",!0):(A(),V("button",{key:2,class:"icon-btn",title:"Toggle dark mode",onClick:h[4]||(h[4]=Te=>k(tp)())},[k(Wo)?(A(),G(B,{key:0})):(A(),G($,{key:1}))])),W(pa),k(Ut)?me("v-if",!0):(A(),V(Ee,{key:3},[!k(It)&&!k(s)&&k(d)?(A(),V(Ee,{key:0},[W(k(d)),W(pa)],64)):me("v-if",!0),k(It)?(A(),V("button",{key:1,class:"icon-btn",title:"Show presenter cursor",onClick:h[5]||(h[5]=Te=>yr.value=!k(yr))},[k(yr)?(A(),G(F,{key:0})):(A(),G(I,{key:1,class:"opacity-50"}))])):me("v-if",!0)],64)),!k(ve).drawings.presenterOnly&&!k(Ut)?(A(),V(Ee,{key:4},[n("button",{class:"icon-btn relative",title:"Drawing",onClick:h[6]||(h[6]=Te=>Rt.value=!k(Rt))},[W(J),k(Rt)?(A(),V("div",{key:0,class:"absolute left-1 right-1 bottom-0 h-0.7 rounded-full",style:Je({background:k(Cn).color})},null,4)):me("v-if",!0)]),W(pa)],64)):me("v-if",!0),k(Ut)?me("v-if",!0):(A(),V(Ee,{key:5},[k(It)?(A(),G(ue,{key:0,to:k(i),class:"icon-btn",title:"Play Mode"},{default:ee(()=>[W(ie)]),_:1},8,["to"])):me("v-if",!0),k(l8)?(A(),G(ue,{key:1,to:k(l),class:"icon-btn",title:"Presenter Mode"},{default:ee(()=>[W(ge)]),_:1},8,["to"])):me("v-if",!0),me("v-if",!0)],64)),(A(),V(Ee,{key:6},[k(ve).download?(A(),V("button",{key:0,class:"icon-btn",onClick:h[8]||(h[8]=(...Te)=>k(oo)&&k(oo)(...Te))},[W(qe)])):me("v-if",!0)],64)),!k(It)&&k(ve).info&&!k(Ut)?(A(),V("button",{key:7,class:"icon-btn",onClick:h[9]||(h[9]=Te=>Ds.value=!k(Ds))},[W(Le)])):me("v-if",!0),!k(It)&&!k(Ut)?(A(),G(P1,{key:8},{button:ee(()=>[n("button",F1,[W(Fe)])]),menu:ee(()=>[W(O1)]),_:1})):me("v-if",!0),k(Ut)?me("v-if",!0):(A(),G(pa,{key:9})),n("div",M1,[n("div",j1,[f(Pn(k(Re))+" ",1),n("span",I1,"/ "+Pn(k(hp)),1)])]),W(k($1))],34)],512)}}}),op={render(){return[]}},lp={render(){return[]}},R1={key:0,class:"absolute top-0 left-0 right-0 bottom-0 pointer-events-none text-xl"},L1=we({__name:"PresenterMouse",setup(e){return U(Z),(t,s)=>{const a=ap;return k(dr).cursor?(A(),V("div",R1,[W(a,{class:"absolute",style:Je({left:`${k(dr).cursor.x}%`,top:`${k(dr).cursor.y}%`})},null,8,["style"])])):me("v-if",!0)}}}),H1=we({__name:"SlidesShow",props:{context:null},setup(e){U(Z),ce(ut,()=>{var s,a;((s=ut.value)==null?void 0:s.meta)&&ut.value.meta.preload!==!1&&(ut.value.meta.__preloaded=!0),((a=_r.value)==null?void 0:a.meta)&&_r.value.meta.preload!==!1&&(_r.value.meta.__preloaded=!0)},{immediate:!0});const t=Ht();return $n(()=>import("./DrawingLayer.f91d8bb7.js"),[]).then(s=>t.value=s.default),(s,a)=>(A(),V(Ee,null,[me(" Global Bottom "),W(k(lp)),me(" Slides "),(A(!0),V(Ee,null,Qs(k(Ve),r=>{var o,l;return A(),V(Ee,{key:r.path},[((o=r.meta)==null?void 0:o.__preloaded)||r===k(ut)?ps((A(),G(k(Zo),{key:0,is:r==null?void 0:r.component,clicks:r===k(ut)?k(Ot):0,"clicks-elements":((l=r.meta)==null?void 0:l.__clicksElements)||[],"clicks-disabled":!1,class:Me(k(Go)(r)),route:r,context:e.context},null,8,["is","clicks","clicks-elements","class","route","context"])),[[ku,r===k(ut)]]):me("v-if",!0)],64)}),128)),me(" Global Top "),W(k(op)),k(t)?(A(),G(k(t),{key:0})):me("v-if",!0),k(It)?me("v-if",!0):(A(),G(L1,{key:1}))],64))}}),V1=we({__name:"Play",setup(e){U(Z),Av();const t=L();function s(o){var l;Mi.value||((l=o.target)==null?void 0:l.id)==="slide-container"&&(o.screenX/window.innerWidth>.6?ln():cn())}m8(t);const a=O(()=>jy.value||Mi.value);Ht();const r=Ht();return $n(()=>import("./DrawingControls.2fdc3a87.js"),["assets/DrawingControls.2fdc3a87.js","assets/DrawingControls.vue_vue_type_script_setup_true_lang.318c0db2.js"]).then(o=>r.value=o.default),(o,l)=>(A(),V(Ee,null,[n("div",{id:"page-root",ref_key:"root",ref:t,class:"grid grid-cols-[1fr_max-content]",style:Je(k(Du))},[W(sp,{class:"w-full h-full",style:Je({background:"var(--slidev-slide-container-background, black)"}),width:k(Xo)?k(Tn).width.value:void 0,scale:k(ga),onPointerdown:s},{default:ee(()=>[W(H1,{context:"slide"})]),controls:ee(()=>[n("div",{class:Me(["absolute bottom-0 left-0 transition duration-300 opacity-0 hover:opacity-100",[k(a)?"opacity-100 right-0":"opacity-0 p-2",k(Ks)?"pointer-events-none":""]])},[W(N1,{class:"m-auto",persist:k(a)},null,8,["persist"])],2),!k(ve).drawings.presenterOnly&&!k(Ut)&&k(r)?(A(),G(k(r),{key:0,class:"ml-0"})):me("v-if",!0)]),_:1},8,["style","width","scale"]),me("v-if",!0)],4),W(zv)],64))}});function ip(e){const t=O(()=>e.value.path),s=O(()=>Ve.length-1),a=O(()=>parseInt(t.value.split(/\//g).slice(-1)[0])||1),r=O(()=>Xa(a.value)),o=O(()=>Ve.find(m=>m.path===`${a.value}`)),l=O(()=>{var m,g,h;return(h=(g=(m=o.value)==null?void 0:m.meta)==null?void 0:g.slide)==null?void 0:h.id}),i=O(()=>{var m,g;return((g=(m=o.value)==null?void 0:m.meta)==null?void 0:g.layout)||(a.value===1?"cover":"default")}),c=O(()=>Ve.find(m=>m.path===`${Math.min(Ve.length,a.value+1)}`)),u=O(()=>Ve.filter(m=>{var g,h;return(h=(g=m.meta)==null?void 0:g.slide)==null?void 0:h.title}).reduce((m,g)=>(el(m,g),m),[])),p=O(()=>tl(u.value,o.value)),d=O(()=>nl(p.value));return{route:e,path:t,total:s,currentPage:a,currentPath:r,currentRoute:o,currentSlideId:l,currentLayout:i,nextRoute:c,rawTree:u,treeWithActiveStatuses:p,tree:d}}function cp(e,t,s){const a=L(0);Ye(()=>{mt.afterEach(async()=>{await Ye(),a.value+=1})});const r=O(()=>{var c,u;return a.value,((u=(c=t.value)==null?void 0:c.meta)==null?void 0:u.__clicksElements)||[]}),o=O(()=>{var c,u,p;return+((p=(u=(c=t.value)==null?void 0:c.meta)==null?void 0:u.clicks)!=null?p:r.value.length)}),l=O(()=>s.value<Ve.length-1||e.value<o.value),i=O(()=>s.value>1||e.value>0);return{clicks:e,clicksElements:r,clicksTotal:o,hasNext:l,hasPrev:i}}const q1=["id"],zi=we({__name:"PrintSlideClick",props:{clicks:null,clicksElements:null,nav:null,route:null},emits:["update:clicksElements"],setup(e,{emit:t}){const s=e,a=Nt(s,"clicksElements",t),r=O(()=>({height:`${Uo}px`,width:`${on}px`})),o=Ht();$n(()=>import("./DrawingPreview.00cb32c2.js"),[]).then(u=>o.value=u.default);const l=O(()=>s.clicks),i=cp(l,s.nav.currentRoute,s.nav.currentPage),c=O(()=>`${s.route.path.toString().padStart(3,"0")}-${(l.value+1).toString().padStart(2,"0")}`);return pt(Z,De({nav:{...s.nav,...i},configs:ve,themeConfigs:O(()=>ve.themeConfig)})),(u,p)=>{var d;return A(),V("div",{id:k(c),class:"slide-container",style:Je(k(r))},[W(k(lp)),W(k(Zo),{is:(d=e.route)==null?void 0:d.component,"clicks-elements":k(a),"onUpdate:clicks-elements":p[0]||(p[0]=m=>xe(a)?a.value=m:null),clicks:k(l),"clicks-disabled":!1,class:Me(k(Go)(e.route)),route:e.route},null,8,["is","clicks-elements","clicks","class","route"]),k(o)?(A(),G(k(o),{key:0,page:+e.route.path},null,8,["page"])):me("v-if",!0),W(k(op))],12,q1)}}}),U1=we({__name:"PrintSlide",props:{route:null},setup(e){var o;const t=e;U(Z);const s=De(((o=t.route.meta)==null?void 0:o.__clicksElements)||[]),a=O(()=>t.route),r=ip(a);return(l,i)=>(A(),V(Ee,null,[W(zi,{"clicks-elements":s,"onUpdate:clicks-elements":i[0]||(i[0]=c=>xe(s)?s.value=c:null),clicks:0,nav:k(r),route:k(a)},null,8,["clicks-elements","nav","route"]),k($s)?me("v-if",!0):(A(!0),V(Ee,{key:0},Qs(s.length,c=>(A(),G(zi,{key:c,clicks:c,nav:k(r),route:k(a)},null,8,["clicks","nav","route"]))),128))],64))}}),K1={id:"print-content"},z1=we({__name:"PrintContainer",props:{width:null},setup(e){const t=e;U(Z);const s=O(()=>t.width),a=O(()=>t.width/rn),r=O(()=>s.value/a.value),o=O(()=>r.value<rn?s.value/on:a.value*rn/on),l=Ve.slice(0,-1),i=O(()=>({"select-none":!ve.selectable,"slidev-code-line-numbers":ve.lineNumbers}));return pt(Pu,o),(c,u)=>(A(),V("div",{id:"print-container",class:Me(k(i))},[n("div",K1,[(A(!0),V(Ee,null,Qs(k(l),p=>(A(),G(U1,{key:p.path,route:p},null,8,["route"]))),128))]),Tt(c.$slots,"controls")],2))}});const W1=we({__name:"Print",setup(e){U(Z);function t(s,{slots:a}){if(a.default)return dt("style",a.default())}return cs(()=>{Xo?document.body.parentNode.classList.add("print"):document.body.parentNode.classList.remove("print")}),(s,a)=>(A(),V(Ee,null,[W(t,null,{default:ee(()=>[f(" @page { size: "+Pn(k(on))+"px "+Pn(k(Uo))+"px; margin: 0px; } ",1)]),_:1}),n("div",{id:"page-root",class:"grid grid-cols-[1fr_max-content]",style:Je(k(Du))},[W(z1,{class:"w-full h-full",style:Je({background:"var(--slidev-slide-container-background, black)"}),width:k(Tn).width.value},null,8,["style","width"])],4)],64))}});const Y1={class:"slidev-layout end"},G1={__name:"end",setup(e){return U(Z),(t,s)=>(A(),V("div",Y1," END "))}},Z1=rp(G1,[["__scopeId","data-v-ab32435f"]]);function Wi(e){return e.startsWith("/")?"/materi-PBO-08/"+e.slice(1):e}function J1(e,t=!1){const s=e&&["#","rgb","hsl"].some(r=>e.indexOf(r)===0),a={background:s?e:void 0,color:e&&!s?"white":void 0,backgroundImage:s?void 0:e?t?`linear-gradient(#0005, #0008), url(${Wi(e)})`:`url("${Wi(e)}")`:void 0,backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"cover"};return a.background||delete a.background,a}const Q1={class:"my-auto w-full"},X1=we({__name:"cover",props:{background:{default:""}},setup(e){const t=e;U(Z);const s=O(()=>J1(t.background,!0));return(a,r)=>(A(),V("div",{class:"slidev-layout cover",style:Je(k(s))},[n("div",Q1,[Tt(a.$slots,"default")])],4))}}),e_=n("h1",null,[f("Praktikum"),n("br"),f("Pemrograman"),n("br"),f("Berbasis Objek")],-1),t_=n("p",null,[n("strong",null,"Pertemuan 8")],-1),n_={__name:"1",setup(e){const t={theme:"default",highlighter:"shiki",titleTemplate:"%s",info:`# Materi 8 - PBO
[Error and Exception Handling]

> Asisten Praktikum Pemrograman Berbasis Objek 2022  
`,lineNumbers:!1,drawings:{persist:!1},download:!0,exportFilename:"materi-pbo-08",css:"unocss"};return U(Z),(s,a)=>(A(),G(X1,Be(Ce(t)),{default:ee(()=>[e_,t_]),_:1},16))}},s_={class:"slidev-layout intro"},a_={class:"my-auto"},r_={__name:"intro",setup(e){return U(Z),(t,s)=>(A(),V("div",s_,[n("div",a_,[Tt(t.$slots,"default")])]))}},o_=n("h1",null,"Review Time \u{1F552}",-1),l_=n("div",{class:"p-4 text-lg"},[n("span",{class:"text-orange"},"1."),f(" Type Wrapper "),n("br"),n("span",{class:"text-orange"},"2."),f(" Enum Class "),n("br"),n("span",{class:"text-orange"},"3."),f(" Inner Class "),n("br"),n("span",{class:"text-orange"},"4."),f(" Anonymous Class "),n("br"),n("span",{class:"text-orange"},"5."),f(" UTS "),n("br")],-1),i_={__name:"2",setup(e){const t={layout:"intro",srcSequence:"./pages/02_Review.md"};return U(Z),(s,a)=>(A(),G(r_,Be(Ce(t)),{default:ee(()=>[o_,l_]),_:1},16))}},c_={class:"slidev-layout center h-full grid place-content-center"},u_={class:"my-auto"},rt={__name:"center",setup(e){return U(Z),(t,s)=>(A(),V("div",c_,[n("div",u_,[Tt(t.$slots,"default")])]))}},p_=n("h1",null,"Materi Pertemuan 8",-1),d_=n("p",null,"Gambaran Materi Pembelajaran Hari Ini",-1),f_={__name:"3",setup(e){const t={layout:"center",class:"text-center",srcSequence:"./pages/03_Cover Materi Pertemuan.md"};return U(Z),(s,a)=>(A(),G(rt,Be(Ce(t)),{default:ee(()=>[p_,d_]),_:1},16))}},m_={class:"slidev-layout default"},xt={__name:"default",setup(e){return U(Z),(t,s)=>(A(),V("div",m_,[Tt(t.$slots,"default")]))}},h_=n("h1",null,"Materi Pertemuan 8",-1),g_=n("div",{class:"grid grid-cols-2 gap-y-10 gap-x-6 mt-16"},[n("div",{class:"flex-row"},[n("div",{class:"text-orange text-4xl font-extrabold"},"01"),n("div",{class:"font-bold text-xl"},"Exception & Error Class"),n("div",{class:"font-light text-sm"},"Mengenal Exception & Error beserta class yang ada")]),n("div",{class:"flex-row"},[n("div",{class:"text-orange text-4xl font-extrabold"},"02"),n("div",{class:"font-bold text-xl"},"Exception Handling: Try-Catch"),n("div",{class:"font-light text-sm"},"Mengenal cara Exception Handling menggunakan Try-Catch")]),n("div",{class:"flex-row"},[n("div",{class:"text-orange text-4xl font-extrabold"},"03"),n("div",{class:"font-bold text-xl"},"Exception Handling: Throw & Throws"),n("div",{class:"font-light text-sm"},"Mengenal cara melempar Exception menggunakan Throw & Throws")]),n("div",{class:"flex-row"},[n("div",{class:"text-orange text-4xl font-extrabold"},"04"),n("div",{class:"font-bold text-xl"},"Custom Exception Class"),n("div",{class:"font-light text-sm"},"Mengenal cara membuat Exception Class secara custom")])],-1),y_={__name:"4",setup(e){const t={srcSequence:"./pages/04_Materi Pertemuan 08.md"};return U(Z),(s,a)=>(A(),G(xt,Be(Ce(t)),{default:ee(()=>[h_,g_]),_:1},16))}},v_=n("span",{class:"text-6xl font-extrabold color-orange p-4 border border-solid border-orange rounded-lg"}," 01 ",-1),__=n("h1",{class:"font-bold mt-12"}," Exception & Error Class ",-1),x_={__name:"5",setup(e){const t={layout:"center",class:"text-center",srcSequence:"./pages/05_Cover Exception and Error Class.md"};return U(Z),(s,a)=>(A(),G(rt,Be(Ce(t)),{default:ee(()=>[v_,__]),_:1},16))}},b_=n("h1",null,"Exception & Error Class",-1),k_=n("br",null,null,-1),E_=n("p",null,[n("strong",null,"Exception"),f(" & "),n("strong",null,"Error"),f(" merupakan sebuah "),n("strong",null,"kondisi abnormal"),f(" yang terjadi saat menjalankan suatu program. Keduanya merupakan subclass dari "),n("strong",null,"Throwable class"),f(".")],-1),w_=n("p",null,"Perbedaannya adalah :",-1),C_=n("ul",null,[n("li",null,[n("strong",null,"Error"),f(" diakibatkan oleh "),n("strong",null,"lack of system"),f(" (kecacatan sistem) sehingga kita sulit untuk mendeteksi maupun menangani error tersebut.")]),n("li",null,[n("strong",null,"Exception"),f(" diakibatkan oleh "),n("strong",null,"kesalahan kode"),f(" yg ditulis oleh "),n("strong",null,"developer"),f(". Exception mudah ditangani dan dideteksi.")])],-1),A_={__name:"6",setup(e){const t={srcSequence:"./pages/06_Exception and Error Class.md"};return U(Z),(s,a)=>(A(),G(xt,Be(Ce(t)),{default:ee(()=>[b_,k_,E_,w_,C_]),_:1},16))}},B_="/materi-PBO-08/img/diagram.png",S_=n("h1",null,"Exception & Error Class",-1),O_=n("p",null,"Berikut adalah contoh perbedaan lebih lanjut dari Error dan Exception:",-1),T_=n("div",{class:"grid grid-cols-2 gap-y-10 gap-x-6 mt-8"},[n("div",{class:"flex-row"},[n("div",{class:"text-xl"},[n("span",{class:"text-red"},"VirtualMachineError"),f(" mengindikasikan "),n("strong",null,"VM Java"),f(" yang "),n("strong",null,"rusak"),f(" dan "),n("strong",null,"kekurangan sumber daya"),f(" untuk beroperasi. Error seperti ini sebaiknya "),n("strong",null,"tidak ditangani"),f(" atau "),n("strong",null,"di-handle"),f(". ")]),n("br"),n("div",{class:"text-xl"},[n("span",{class:"text-blue"},"ArithmeticException"),f(" mengindikasikan adanya "),n("strong",null,"kondisi aritmatika"),f(" yang "),n("strong",null,"diluar penalaran"),f(". "),n("strong",null,"Exception"),f(" seperti ini sebaiknya "),n("strong",null,"ditangani"),f(" atau "),n("strong",null,"di-handle"),f(" sehingga program dapat terus beroperasi. ")])]),n("div",{class:"flex-row"},[n("img",{src:B_})])],-1),P_={__name:"7",setup(e){const t={srcSequence:"./pages/07_Diagram and Example.md"};return U(Z),(s,a)=>(A(),G(xt,Be(Ce(t)),{default:ee(()=>[S_,O_,T_]),_:1},16))}},D_=n("h1",null,"Exception Class",-1),$_=n("div",{class:"mt-8"},[n("p",null,[f("Merupakan class berbentuk "),n("strong",null,"Throwable"),f(" yang mengindikasikan suatu "),n("strong",null,"kondisi abnormal"),f(" yang terjadi saat menjalankan program yang diakibatkan oleh kesalahan developer.")]),n("div",{class:"mt-12"},[n("p",null,"Exception dibagi menjadi 2 :"),n("ul",null,[n("li",null,[n("h4",null,"Checked Exception")])]),n("p",null,[f("Merupakan exception yang "),n("strong",null,"dicek saat compile time"),f(". Jika tidak ditangani, maka akan menimbulkan error ketika pertama kali dijalankan.")]),n("ul",null,[n("li",null,[n("h4",null,"Unchecked Exception")])]),n("p",null,[f("Merupakan exception yang "),n("strong",null,"tidak dicek saat compile time"),f(". Jika tidak ditangani, maka tidak akan menimbulkan error ketika pertama kali dijalankan.")])])],-1),F_={__name:"8",setup(e){const t={srcSequence:"./pages/08_Exception Class.md"};return U(Z),(s,a)=>(A(),G(xt,Be(Ce(t)),{default:ee(()=>[D_,$_]),_:1},16))}},M_={class:"slidev-icon",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},j_=n("path",{fill:"currentColor",d:"M200 32h-36.3a47.8 47.8 0 0 0-71.4 0H56a16 16 0 0 0-16 16v168a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16Zm-72 0a32.1 32.1 0 0 1 32 32H96a32.1 32.1 0 0 1 32-32Zm72 184H56V48h26.8A47.2 47.2 0 0 0 80 64v8a8 8 0 0 0 8 8h80a8 8 0 0 0 8-8v-8a47.2 47.2 0 0 0-2.8-16H200Z"},null,-1),I_=[j_];function N_(e,t){return A(),V("svg",M_,I_)}const R_={name:"ph-clipboard",render:N_},L_={class:"slidev-icon",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},H_=n("path",{fill:"currentColor",d:"M177.8 98.5a8 8 0 0 1-.3 11.3l-58.6 56a8.1 8.1 0 0 1-5.6 2.2a7.9 7.9 0 0 1-5.5-2.2l-29.3-28a8 8 0 1 1 11-11.6l23.8 22.7l53.2-50.7a8 8 0 0 1 11.3.3ZM232 128A104 104 0 1 1 128 24a104.2 104.2 0 0 1 104 104Zm-16 0a88 88 0 1 0-88 88a88.1 88.1 0 0 0 88-88Z"},null,-1),V_=[H_];function q_(e,t){return A(),V("svg",L_,V_)}const U_={name:"ph-check-circle",render:q_};/*! js-yaml 4.1.0 https://github.com/nodeca/js-yaml @license MIT */function up(e){return typeof e>"u"||e===null}function K_(e){return typeof e=="object"&&e!==null}function z_(e){return Array.isArray(e)?e:up(e)?[]:[e]}function W_(e,t){var s,a,r,o;if(t)for(o=Object.keys(t),s=0,a=o.length;s<a;s+=1)r=o[s],e[r]=t[r];return e}function Y_(e,t){var s="",a;for(a=0;a<t;a+=1)s+=e;return s}function G_(e){return e===0&&Number.NEGATIVE_INFINITY===1/e}var Z_=up,J_=K_,Q_=z_,X_=Y_,ex=G_,tx=W_,Jo={isNothing:Z_,isObject:J_,toArray:Q_,repeat:X_,isNegativeZero:ex,extend:tx};function pp(e,t){var s="",a=e.reason||"(unknown reason)";return e.mark?(e.mark.name&&(s+='in "'+e.mark.name+'" '),s+="("+(e.mark.line+1)+":"+(e.mark.column+1)+")",!t&&e.mark.snippet&&(s+=`

`+e.mark.snippet),a+" "+s):a}function Ws(e,t){Error.call(this),this.name="YAMLException",this.reason=e,this.mark=t,this.message=pp(this,!1),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack||""}Ws.prototype=Object.create(Error.prototype);Ws.prototype.constructor=Ws;Ws.prototype.toString=function(t){return this.name+": "+pp(this,t)};var kn=Ws,nx=["kind","multi","resolve","construct","instanceOf","predicate","represent","representName","defaultStyle","styleAliases"],sx=["scalar","sequence","mapping"];function ax(e){var t={};return e!==null&&Object.keys(e).forEach(function(s){e[s].forEach(function(a){t[String(a)]=s})}),t}function rx(e,t){if(t=t||{},Object.keys(t).forEach(function(s){if(nx.indexOf(s)===-1)throw new kn('Unknown option "'+s+'" is met in definition of "'+e+'" YAML type.')}),this.options=t,this.tag=e,this.kind=t.kind||null,this.resolve=t.resolve||function(){return!0},this.construct=t.construct||function(s){return s},this.instanceOf=t.instanceOf||null,this.predicate=t.predicate||null,this.represent=t.represent||null,this.representName=t.representName||null,this.defaultStyle=t.defaultStyle||null,this.multi=t.multi||!1,this.styleAliases=ax(t.styleAliases||null),sx.indexOf(this.kind)===-1)throw new kn('Unknown kind "'+this.kind+'" is specified for "'+e+'" YAML type.')}var Ze=rx;function Yi(e,t){var s=[];return e[t].forEach(function(a){var r=s.length;s.forEach(function(o,l){o.tag===a.tag&&o.kind===a.kind&&o.multi===a.multi&&(r=l)}),s[r]=a}),s}function ox(){var e={scalar:{},sequence:{},mapping:{},fallback:{},multi:{scalar:[],sequence:[],mapping:[],fallback:[]}},t,s;function a(r){r.multi?(e.multi[r.kind].push(r),e.multi.fallback.push(r)):e[r.kind][r.tag]=e.fallback[r.tag]=r}for(t=0,s=arguments.length;t<s;t+=1)arguments[t].forEach(a);return e}function ao(e){return this.extend(e)}ao.prototype.extend=function(t){var s=[],a=[];if(t instanceof Ze)a.push(t);else if(Array.isArray(t))a=a.concat(t);else if(t&&(Array.isArray(t.implicit)||Array.isArray(t.explicit)))t.implicit&&(s=s.concat(t.implicit)),t.explicit&&(a=a.concat(t.explicit));else throw new kn("Schema.extend argument should be a Type, [ Type ], or a schema definition ({ implicit: [...], explicit: [...] })");s.forEach(function(o){if(!(o instanceof Ze))throw new kn("Specified list of YAML types (or a single Type object) contains a non-Type object.");if(o.loadKind&&o.loadKind!=="scalar")throw new kn("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.");if(o.multi)throw new kn("There is a multi type in the implicit list of a schema. Multi tags can only be listed as explicit.")}),a.forEach(function(o){if(!(o instanceof Ze))throw new kn("Specified list of YAML types (or a single Type object) contains a non-Type object.")});var r=Object.create(ao.prototype);return r.implicit=(this.implicit||[]).concat(s),r.explicit=(this.explicit||[]).concat(a),r.compiledImplicit=Yi(r,"implicit"),r.compiledExplicit=Yi(r,"explicit"),r.compiledTypeMap=ox(r.compiledImplicit,r.compiledExplicit),r};var lx=ao,ix=new Ze("tag:yaml.org,2002:str",{kind:"scalar",construct:function(e){return e!==null?e:""}}),cx=new Ze("tag:yaml.org,2002:seq",{kind:"sequence",construct:function(e){return e!==null?e:[]}}),ux=new Ze("tag:yaml.org,2002:map",{kind:"mapping",construct:function(e){return e!==null?e:{}}}),px=new lx({explicit:[ix,cx,ux]});function dx(e){if(e===null)return!0;var t=e.length;return t===1&&e==="~"||t===4&&(e==="null"||e==="Null"||e==="NULL")}function fx(){return null}function mx(e){return e===null}var hx=new Ze("tag:yaml.org,2002:null",{kind:"scalar",resolve:dx,construct:fx,predicate:mx,represent:{canonical:function(){return"~"},lowercase:function(){return"null"},uppercase:function(){return"NULL"},camelcase:function(){return"Null"},empty:function(){return""}},defaultStyle:"lowercase"});function gx(e){if(e===null)return!1;var t=e.length;return t===4&&(e==="true"||e==="True"||e==="TRUE")||t===5&&(e==="false"||e==="False"||e==="FALSE")}function yx(e){return e==="true"||e==="True"||e==="TRUE"}function vx(e){return Object.prototype.toString.call(e)==="[object Boolean]"}var _x=new Ze("tag:yaml.org,2002:bool",{kind:"scalar",resolve:gx,construct:yx,predicate:vx,represent:{lowercase:function(e){return e?"true":"false"},uppercase:function(e){return e?"TRUE":"FALSE"},camelcase:function(e){return e?"True":"False"}},defaultStyle:"lowercase"});function xx(e){return 48<=e&&e<=57||65<=e&&e<=70||97<=e&&e<=102}function bx(e){return 48<=e&&e<=55}function kx(e){return 48<=e&&e<=57}function Ex(e){if(e===null)return!1;var t=e.length,s=0,a=!1,r;if(!t)return!1;if(r=e[s],(r==="-"||r==="+")&&(r=e[++s]),r==="0"){if(s+1===t)return!0;if(r=e[++s],r==="b"){for(s++;s<t;s++)if(r=e[s],r!=="_"){if(r!=="0"&&r!=="1")return!1;a=!0}return a&&r!=="_"}if(r==="x"){for(s++;s<t;s++)if(r=e[s],r!=="_"){if(!xx(e.charCodeAt(s)))return!1;a=!0}return a&&r!=="_"}if(r==="o"){for(s++;s<t;s++)if(r=e[s],r!=="_"){if(!bx(e.charCodeAt(s)))return!1;a=!0}return a&&r!=="_"}}if(r==="_")return!1;for(;s<t;s++)if(r=e[s],r!=="_"){if(!kx(e.charCodeAt(s)))return!1;a=!0}return!(!a||r==="_")}function wx(e){var t=e,s=1,a;if(t.indexOf("_")!==-1&&(t=t.replace(/_/g,"")),a=t[0],(a==="-"||a==="+")&&(a==="-"&&(s=-1),t=t.slice(1),a=t[0]),t==="0")return 0;if(a==="0"){if(t[1]==="b")return s*parseInt(t.slice(2),2);if(t[1]==="x")return s*parseInt(t.slice(2),16);if(t[1]==="o")return s*parseInt(t.slice(2),8)}return s*parseInt(t,10)}function Cx(e){return Object.prototype.toString.call(e)==="[object Number]"&&e%1===0&&!Jo.isNegativeZero(e)}var Ax=new Ze("tag:yaml.org,2002:int",{kind:"scalar",resolve:Ex,construct:wx,predicate:Cx,represent:{binary:function(e){return e>=0?"0b"+e.toString(2):"-0b"+e.toString(2).slice(1)},octal:function(e){return e>=0?"0o"+e.toString(8):"-0o"+e.toString(8).slice(1)},decimal:function(e){return e.toString(10)},hexadecimal:function(e){return e>=0?"0x"+e.toString(16).toUpperCase():"-0x"+e.toString(16).toUpperCase().slice(1)}},defaultStyle:"decimal",styleAliases:{binary:[2,"bin"],octal:[8,"oct"],decimal:[10,"dec"],hexadecimal:[16,"hex"]}}),Bx=new RegExp("^(?:[-+]?(?:[0-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$");function Sx(e){return!(e===null||!Bx.test(e)||e[e.length-1]==="_")}function Ox(e){var t,s;return t=e.replace(/_/g,"").toLowerCase(),s=t[0]==="-"?-1:1,"+-".indexOf(t[0])>=0&&(t=t.slice(1)),t===".inf"?s===1?Number.POSITIVE_INFINITY:Number.NEGATIVE_INFINITY:t===".nan"?NaN:s*parseFloat(t,10)}var Tx=/^[-+]?[0-9]+e/;function Px(e,t){var s;if(isNaN(e))switch(t){case"lowercase":return".nan";case"uppercase":return".NAN";case"camelcase":return".NaN"}else if(Number.POSITIVE_INFINITY===e)switch(t){case"lowercase":return".inf";case"uppercase":return".INF";case"camelcase":return".Inf"}else if(Number.NEGATIVE_INFINITY===e)switch(t){case"lowercase":return"-.inf";case"uppercase":return"-.INF";case"camelcase":return"-.Inf"}else if(Jo.isNegativeZero(e))return"-0.0";return s=e.toString(10),Tx.test(s)?s.replace("e",".e"):s}function Dx(e){return Object.prototype.toString.call(e)==="[object Number]"&&(e%1!==0||Jo.isNegativeZero(e))}var $x=new Ze("tag:yaml.org,2002:float",{kind:"scalar",resolve:Sx,construct:Ox,predicate:Dx,represent:Px,defaultStyle:"lowercase"}),Fx=px.extend({implicit:[hx,_x,Ax,$x]}),Mx=Fx,dp=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"),fp=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$");function jx(e){return e===null?!1:dp.exec(e)!==null||fp.exec(e)!==null}function Ix(e){var t,s,a,r,o,l,i,c=0,u=null,p,d,m;if(t=dp.exec(e),t===null&&(t=fp.exec(e)),t===null)throw new Error("Date resolve error");if(s=+t[1],a=+t[2]-1,r=+t[3],!t[4])return new Date(Date.UTC(s,a,r));if(o=+t[4],l=+t[5],i=+t[6],t[7]){for(c=t[7].slice(0,3);c.length<3;)c+="0";c=+c}return t[9]&&(p=+t[10],d=+(t[11]||0),u=(p*60+d)*6e4,t[9]==="-"&&(u=-u)),m=new Date(Date.UTC(s,a,r,o,l,i,c)),u&&m.setTime(m.getTime()-u),m}function Nx(e){return e.toISOString()}var Rx=new Ze("tag:yaml.org,2002:timestamp",{kind:"scalar",resolve:jx,construct:Ix,instanceOf:Date,represent:Nx});function Lx(e){return e==="<<"||e===null}var Hx=new Ze("tag:yaml.org,2002:merge",{kind:"scalar",resolve:Lx}),Qo=`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=
\r`;function Vx(e){if(e===null)return!1;var t,s,a=0,r=e.length,o=Qo;for(s=0;s<r;s++)if(t=o.indexOf(e.charAt(s)),!(t>64)){if(t<0)return!1;a+=6}return a%8===0}function qx(e){var t,s,a=e.replace(/[\r\n=]/g,""),r=a.length,o=Qo,l=0,i=[];for(t=0;t<r;t++)t%4===0&&t&&(i.push(l>>16&255),i.push(l>>8&255),i.push(l&255)),l=l<<6|o.indexOf(a.charAt(t));return s=r%4*6,s===0?(i.push(l>>16&255),i.push(l>>8&255),i.push(l&255)):s===18?(i.push(l>>10&255),i.push(l>>2&255)):s===12&&i.push(l>>4&255),new Uint8Array(i)}function Ux(e){var t="",s=0,a,r,o=e.length,l=Qo;for(a=0;a<o;a++)a%3===0&&a&&(t+=l[s>>18&63],t+=l[s>>12&63],t+=l[s>>6&63],t+=l[s&63]),s=(s<<8)+e[a];return r=o%3,r===0?(t+=l[s>>18&63],t+=l[s>>12&63],t+=l[s>>6&63],t+=l[s&63]):r===2?(t+=l[s>>10&63],t+=l[s>>4&63],t+=l[s<<2&63],t+=l[64]):r===1&&(t+=l[s>>2&63],t+=l[s<<4&63],t+=l[64],t+=l[64]),t}function Kx(e){return Object.prototype.toString.call(e)==="[object Uint8Array]"}var zx=new Ze("tag:yaml.org,2002:binary",{kind:"scalar",resolve:Vx,construct:qx,predicate:Kx,represent:Ux}),Wx=Object.prototype.hasOwnProperty,Yx=Object.prototype.toString;function Gx(e){if(e===null)return!0;var t=[],s,a,r,o,l,i=e;for(s=0,a=i.length;s<a;s+=1){if(r=i[s],l=!1,Yx.call(r)!=="[object Object]")return!1;for(o in r)if(Wx.call(r,o))if(!l)l=!0;else return!1;if(!l)return!1;if(t.indexOf(o)===-1)t.push(o);else return!1}return!0}function Zx(e){return e!==null?e:[]}var Jx=new Ze("tag:yaml.org,2002:omap",{kind:"sequence",resolve:Gx,construct:Zx}),Qx=Object.prototype.toString;function Xx(e){if(e===null)return!0;var t,s,a,r,o,l=e;for(o=new Array(l.length),t=0,s=l.length;t<s;t+=1){if(a=l[t],Qx.call(a)!=="[object Object]"||(r=Object.keys(a),r.length!==1))return!1;o[t]=[r[0],a[r[0]]]}return!0}function eb(e){if(e===null)return[];var t,s,a,r,o,l=e;for(o=new Array(l.length),t=0,s=l.length;t<s;t+=1)a=l[t],r=Object.keys(a),o[t]=[r[0],a[r[0]]];return o}var tb=new Ze("tag:yaml.org,2002:pairs",{kind:"sequence",resolve:Xx,construct:eb}),nb=Object.prototype.hasOwnProperty;function sb(e){if(e===null)return!0;var t,s=e;for(t in s)if(nb.call(s,t)&&s[t]!==null)return!1;return!0}function ab(e){return e!==null?e:{}}var rb=new Ze("tag:yaml.org,2002:set",{kind:"mapping",resolve:sb,construct:ab});Mx.extend({implicit:[Rx,Hx],explicit:[zx,Jx,tb,rb]});function Gi(e){return e===48?"\0":e===97?"\x07":e===98?"\b":e===116||e===9?"	":e===110?`
`:e===118?"\v":e===102?"\f":e===114?"\r":e===101?"\x1B":e===32?" ":e===34?'"':e===47?"/":e===92?"\\":e===78?"\x85":e===95?"\xA0":e===76?"\u2028":e===80?"\u2029":""}var ob=new Array(256),lb=new Array(256);for(var Vn=0;Vn<256;Vn++)ob[Vn]=Gi(Vn)?1:0,lb[Vn]=Gi(Vn);function ib(e){return Array.from(new Set(e))}function Zi(...e){let t,s,a;e.length===1?(t=0,a=1,[s]=e):[t,s,a=1]=e;const r=[];let o=t;for(;o<s;)r.push(o),o+=a||1;return r}function cb(e,t){if(!t||t==="all"||t==="*")return Zi(1,e+1);const s=[];for(const a of t.split(/[,;]/g))if(!a.includes("-"))s.push(+a);else{const[r,o]=a.split("-",2);s.push(...Zi(+r,o?+o+1:e+1))}return ib(s).filter(a=>a<=e).sort((a,r)=>a-r)}const ub=["title"],dn=we({__name:"CodeBlockWrapper",props:{ranges:{default:()=>[]},at:{type:Number,default:void 0},maxHeight:{type:String,default:void 0}},setup(e){const t=e;U(Z);const s=U(Ss),a=U(bn),r=U(Os);function o(d=5){const m=[],g="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",h=g.length;for(let _=0;_<d;_++)m.push(g.charAt(Math.floor(Math.random()*h)));return m.join("")}const l=L(),i=Mn();us(()=>{const d=t.at==null?a==null?void 0:a.value.length:t.at,m=O(()=>r!=null&&r.value?t.ranges.length-1:Math.min(Math.max(0,((s==null?void 0:s.value)||0)-(d||0)),t.ranges.length-1)),g=O(()=>t.ranges[m.value]||"");if(t.ranges.length>=2&&!(r!=null&&r.value)){const h=o(),_=Eh(t.ranges.length-1).map(x=>h+x);a!=null&&a.value&&(a.value.push(..._),Ga(()=>_.forEach(x=>Wr(a.value,x)),i))}cs(()=>{if(!l.value)return;const _=l.value.querySelector(".shiki-dark")?Array.from(l.value.querySelectorAll(".shiki")):[l.value];for(const x of _){const b=Array.from(x.querySelectorAll(".line")),w=cb(b.length,g.value);if(b.forEach((E,B)=>{const $=w.includes(B+1);E.classList.toggle(vn,!0),E.classList.toggle("highlighted",$),E.classList.toggle("dishonored",!$)}),t.maxHeight){const E=x.querySelector(".line.highlighted");E&&E.scrollIntoView({behavior:"smooth",block:"center"})}}})});const{copied:c,copy:u}=Wh();function p(){var m,g;const d=(g=(m=l.value)==null?void 0:m.querySelector(".slidev-code"))==null?void 0:g.textContent;d&&u(d)}return(d,m)=>{const g=U_,h=R_;return A(),V("div",{ref_key:"el",ref:l,class:"slidev-code-wrapper relative group",style:Je({"max-height":t.maxHeight,"overflow-y":t.maxHeight?"scroll":void 0})},[Tt(d.$slots,"default"),k(ve).codeCopy?(A(),V("button",{key:0,class:"slidev-code-copy absolute top-0 right-0 transition opacity-0 group-hover:opacity-20 hover:!opacity-100",title:k(c)?"Copied":"Copy",onClick:m[0]||(m[0]=_=>p())},[k(c)?(A(),G(g,{key:0,class:"p-2 w-8 h-8"})):(A(),G(h,{key:1,class:"p-2 w-8 h-8"}))],8,ub)):me("v-if",!0)],4)}}}),pb=n("h1",null,[f("Contoh "),n("strong",null,"Checked"),f(" Exception")],-1),db={class:"grid grid-cols-2 gap-y-10 gap-x-6 mt-8"},fb={class:"flex-row"},mb=n("pre",{class:"shiki-container"},[n("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[n("code",null,[n("span",{class:"line"},[n("span",{style:{color:"#4D9375"}},"import"),n("span",{style:{color:"#DBD7CA"}}," java"),n("span",{style:{color:"#858585"}},"."),n("span",{style:{color:"#DBD7CA"}},"io"),n("span",{style:{color:"#858585"}},"."),n("span",{style:{color:"#D4976C"}},"*"),n("span",{style:{color:"#858585"}},";")]),f(`
`),n("span",{class:"line"}),f(`
`),n("span",{class:"line"},[n("span",{style:{color:"#CB7676"}},"class"),n("span",{style:{color:"#DBD7CA"}}," "),n("span",{style:{color:"#A1B567"}},"CheckedException"),n("span",{style:{color:"#DBD7CA"}}," "),n("span",{style:{color:"#858585"}},"{")]),f(`
`),n("span",{class:"line"},[n("span",{style:{color:"#DBD7CA"}},"    "),n("span",{style:{color:"#CB7676"}},"public"),n("span",{style:{color:"#DBD7CA"}}," "),n("span",{style:{color:"#CB7676"}},"static"),n("span",{style:{color:"#DBD7CA"}}," "),n("span",{style:{color:"#CB7676"}},"void"),n("span",{style:{color:"#DBD7CA"}}," "),n("span",{style:{color:"#A1B567"}},"main"),n("span",{style:{color:"#858585"}},"("),n("span",{style:{color:"#CB7676"}},"String"),n("span",{style:{color:"#858585"}},"[]"),n("span",{style:{color:"#DBD7CA"}}," "),n("span",{style:{color:"#B8A965"}},"args"),n("span",{style:{color:"#858585"}},"){")]),f(`
`),n("span",{class:"line"},[n("span",{style:{color:"#DBD7CA"}},"        "),n("span",{style:{color:"#758575"}},"/*")]),f(`
`),n("span",{class:"line"},[n("span",{style:{color:"#758575"}},"        * File 'C:\\\\test\\\\a.txt' tidak ada. ")]),f(`
`),n("span",{class:"line"},[n("span",{style:{color:"#758575"}},"        * Maka program tidak akan bisa dijalankan.")]),f(`
`),n("span",{class:"line"},[n("span",{style:{color:"#758575"}},"        * Program akan mengeluarkan FileNotFoundException ")]),f(`
`),n("span",{class:"line"},[n("span",{style:{color:"#758575"}},"        * yang mana merupakan child dari IOException")]),f(`
`),n("span",{class:"line"},[n("span",{style:{color:"#758575"}},"        * IOException merupakan Checked exception")]),f(`
`),n("span",{class:"line"},[n("span",{style:{color:"#758575"}},"        */")]),f(`
`),n("span",{class:"line"},[n("span",{style:{color:"#DBD7CA"}},"        FileReader"),n("span",{style:{color:"#D4976C"}}," "),n("span",{style:{color:"#B8A965"}},"file"),n("span",{style:{color:"#D4976C"}}," "),n("span",{style:{color:"#CB7676"}},"="),n("span",{style:{color:"#DBD7CA"}}," "),n("span",{style:{color:"#4D9375"}},"new"),n("span",{style:{color:"#DBD7CA"}}," "),n("span",{style:{color:"#A1B567"}},"FileReader"),n("span",{style:{color:"#858585"}},"("),n("span",{style:{color:"#C98A7D"}},'"C:'),n("span",{style:{color:"#D4976C"}},"\\\\"),n("span",{style:{color:"#C98A7D"}},"test"),n("span",{style:{color:"#D4976C"}},"\\\\"),n("span",{style:{color:"#C98A7D"}},'a.txt"'),n("span",{style:{color:"#858585"}},");")]),f(`
`),n("span",{class:"line"},[n("span",{style:{color:"#DBD7CA"}},"        BufferedReader"),n("span",{style:{color:"#D4976C"}}," "),n("span",{style:{color:"#B8A965"}},"fileInput"),n("span",{style:{color:"#D4976C"}}," "),n("span",{style:{color:"#CB7676"}},"="),n("span",{style:{color:"#DBD7CA"}}," "),n("span",{style:{color:"#4D9375"}},"new"),n("span",{style:{color:"#DBD7CA"}}," "),n("span",{style:{color:"#A1B567"}},"BufferedReader"),n("span",{style:{color:"#858585"}},"("),n("span",{style:{color:"#DBD7CA"}},"file"),n("span",{style:{color:"#858585"}},");")]),f(`
`),n("span",{class:"line"}),f(`
`),n("span",{class:"line"},[n("span",{style:{color:"#DBD7CA"}},"        "),n("span",{style:{color:"#4D9375"}},"for"),n("span",{style:{color:"#858585"}},"("),n("span",{style:{color:"#CB7676"}},"int"),n("span",{style:{color:"#D4976C"}}," "),n("span",{style:{color:"#B8A965"}},"counter"),n("span",{style:{color:"#D4976C"}}," "),n("span",{style:{color:"#CB7676"}},"="),n("span",{style:{color:"#DBD7CA"}}," "),n("span",{style:{color:"#6394BF"}},"0"),n("span",{style:{color:"#858585"}},";"),n("span",{style:{color:"#DBD7CA"}}," counter "),n("span",{style:{color:"#CB7676"}},"<"),n("span",{style:{color:"#DBD7CA"}}," "),n("span",{style:{color:"#6394BF"}},"3"),n("span",{style:{color:"#858585"}},";"),n("span",{style:{color:"#DBD7CA"}}," counter"),n("span",{style:{color:"#CB7676"}},"++"),n("span",{style:{color:"#858585"}},"){")]),f(`
`),n("span",{class:"line"},[n("span",{style:{color:"#DBD7CA"}},"            "),n("span",{style:{color:"#B8A965"}},"System"),n("span",{style:{color:"#858585"}},"."),n("span",{style:{color:"#B8A965"}},"out"),n("span",{style:{color:"#858585"}},"."),n("span",{style:{color:"#A1B567"}},"println"),n("span",{style:{color:"#858585"}},"("),n("span",{style:{color:"#B8A965"}},"fileInput"),n("span",{style:{color:"#858585"}},"."),n("span",{style:{color:"#A1B567"}},"readLine"),n("span",{style:{color:"#858585"}},"());")]),f(`
`),n("span",{class:"line"},[n("span",{style:{color:"#DBD7CA"}},"        "),n("span",{style:{color:"#858585"}},"}")]),f(`
`),n("span",{class:"line"}),f(`
`),n("span",{class:"line"},[n("span",{style:{color:"#DBD7CA"}},"        "),n("span",{style:{color:"#B8A965"}},"fileInput"),n("span",{style:{color:"#858585"}},"."),n("span",{style:{color:"#A1B567"}},"close"),n("span",{style:{color:"#858585"}},"();")]),f(`
`),n("span",{class:"line"},[n("span",{style:{color:"#DBD7CA"}},"    "),n("span",{style:{color:"#858585"}},"}")]),f(`
`),n("span",{class:"line"},[n("span",{style:{color:"#858585"}},"}")])])]),n("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[n("code",null,[n("span",{class:"line"},[n("span",{style:{color:"#1C6B48"}},"import"),n("span",{style:{color:"#393A34"}}," java"),n("span",{style:{color:"#8E8F8B"}},"."),n("span",{style:{color:"#393A34"}},"io"),n("span",{style:{color:"#8E8F8B"}},"."),n("span",{style:{color:"#A65E2B"}},"*"),n("span",{style:{color:"#8E8F8B"}},";")]),f(`
`),n("span",{class:"line"}),f(`
`),n("span",{class:"line"},[n("span",{style:{color:"#AB5959"}},"class"),n("span",{style:{color:"#393A34"}}," "),n("span",{style:{color:"#6C7834"}},"CheckedException"),n("span",{style:{color:"#393A34"}}," "),n("span",{style:{color:"#8E8F8B"}},"{")]),f(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393A34"}},"    "),n("span",{style:{color:"#AB5959"}},"public"),n("span",{style:{color:"#393A34"}}," "),n("span",{style:{color:"#AB5959"}},"static"),n("span",{style:{color:"#393A34"}}," "),n("span",{style:{color:"#AB5959"}},"void"),n("span",{style:{color:"#393A34"}}," "),n("span",{style:{color:"#6C7834"}},"main"),n("span",{style:{color:"#8E8F8B"}},"("),n("span",{style:{color:"#AB5959"}},"String"),n("span",{style:{color:"#8E8F8B"}},"[]"),n("span",{style:{color:"#393A34"}}," "),n("span",{style:{color:"#8C862B"}},"args"),n("span",{style:{color:"#8E8F8B"}},"){")]),f(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393A34"}},"        "),n("span",{style:{color:"#A0ADA0"}},"/*")]),f(`
`),n("span",{class:"line"},[n("span",{style:{color:"#A0ADA0"}},"        * File 'C:\\\\test\\\\a.txt' tidak ada. ")]),f(`
`),n("span",{class:"line"},[n("span",{style:{color:"#A0ADA0"}},"        * Maka program tidak akan bisa dijalankan.")]),f(`
`),n("span",{class:"line"},[n("span",{style:{color:"#A0ADA0"}},"        * Program akan mengeluarkan FileNotFoundException ")]),f(`
`),n("span",{class:"line"},[n("span",{style:{color:"#A0ADA0"}},"        * yang mana merupakan child dari IOException")]),f(`
`),n("span",{class:"line"},[n("span",{style:{color:"#A0ADA0"}},"        * IOException merupakan Checked exception")]),f(`
`),n("span",{class:"line"},[n("span",{style:{color:"#A0ADA0"}},"        */")]),f(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393A34"}},"        FileReader"),n("span",{style:{color:"#A65E2B"}}," "),n("span",{style:{color:"#8C862B"}},"file"),n("span",{style:{color:"#A65E2B"}}," "),n("span",{style:{color:"#AB5959"}},"="),n("span",{style:{color:"#393A34"}}," "),n("span",{style:{color:"#1C6B48"}},"new"),n("span",{style:{color:"#393A34"}}," "),n("span",{style:{color:"#6C7834"}},"FileReader"),n("span",{style:{color:"#8E8F8B"}},"("),n("span",{style:{color:"#B56959"}},'"C:'),n("span",{style:{color:"#A65E2B"}},"\\\\"),n("span",{style:{color:"#B56959"}},"test"),n("span",{style:{color:"#A65E2B"}},"\\\\"),n("span",{style:{color:"#B56959"}},'a.txt"'),n("span",{style:{color:"#8E8F8B"}},");")]),f(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393A34"}},"        BufferedReader"),n("span",{style:{color:"#A65E2B"}}," "),n("span",{style:{color:"#8C862B"}},"fileInput"),n("span",{style:{color:"#A65E2B"}}," "),n("span",{style:{color:"#AB5959"}},"="),n("span",{style:{color:"#393A34"}}," "),n("span",{style:{color:"#1C6B48"}},"new"),n("span",{style:{color:"#393A34"}}," "),n("span",{style:{color:"#6C7834"}},"BufferedReader"),n("span",{style:{color:"#8E8F8B"}},"("),n("span",{style:{color:"#393A34"}},"file"),n("span",{style:{color:"#8E8F8B"}},");")]),f(`
`),n("span",{class:"line"}),f(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393A34"}},"        "),n("span",{style:{color:"#1C6B48"}},"for"),n("span",{style:{color:"#8E8F8B"}},"("),n("span",{style:{color:"#AB5959"}},"int"),n("span",{style:{color:"#A65E2B"}}," "),n("span",{style:{color:"#8C862B"}},"counter"),n("span",{style:{color:"#A65E2B"}}," "),n("span",{style:{color:"#AB5959"}},"="),n("span",{style:{color:"#393A34"}}," "),n("span",{style:{color:"#296AA3"}},"0"),n("span",{style:{color:"#8E8F8B"}},";"),n("span",{style:{color:"#393A34"}}," counter "),n("span",{style:{color:"#AB5959"}},"<"),n("span",{style:{color:"#393A34"}}," "),n("span",{style:{color:"#296AA3"}},"3"),n("span",{style:{color:"#8E8F8B"}},";"),n("span",{style:{color:"#393A34"}}," counter"),n("span",{style:{color:"#AB5959"}},"++"),n("span",{style:{color:"#8E8F8B"}},"){")]),f(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393A34"}},"            "),n("span",{style:{color:"#8C862B"}},"System"),n("span",{style:{color:"#8E8F8B"}},"."),n("span",{style:{color:"#8C862B"}},"out"),n("span",{style:{color:"#8E8F8B"}},"."),n("span",{style:{color:"#6C7834"}},"println"),n("span",{style:{color:"#8E8F8B"}},"("),n("span",{style:{color:"#8C862B"}},"fileInput"),n("span",{style:{color:"#8E8F8B"}},"."),n("span",{style:{color:"#6C7834"}},"readLine"),n("span",{style:{color:"#8E8F8B"}},"());")]),f(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393A34"}},"        "),n("span",{style:{color:"#8E8F8B"}},"}")]),f(`
`),n("span",{class:"line"}),f(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393A34"}},"        "),n("span",{style:{color:"#8C862B"}},"fileInput"),n("span",{style:{color:"#8E8F8B"}},"."),n("span",{style:{color:"#6C7834"}},"close"),n("span",{style:{color:"#8E8F8B"}},"();")]),f(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393A34"}},"    "),n("span",{style:{color:"#8E8F8B"}},"}")]),f(`
`),n("span",{class:"line"},[n("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),hb={class:"flex-row"},gb=n("pre",{class:"shiki-container"},[n("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[n("code",null,[n("span",{class:"line"},[n("span",{style:{color:"#dbd7ca"}},"./CheckedException.java:11: error: ")]),f(`
`),n("span",{class:"line"},[n("span",{style:{color:"#dbd7ca"}},"unreported exception FileNotFoundException; ")]),f(`
`),n("span",{class:"line"},[n("span",{style:{color:"#dbd7ca"}},"must be caught or declared to be thrown")]),f(`
`),n("span",{class:"line"},[n("span",{style:{color:"#dbd7ca"}},'    FileReader file = new FileReader("C:\\\\test\\\\a.txt");')]),f(`
`),n("span",{class:"line"},[n("span",{style:{color:"#dbd7ca"}},"                      ^")])])]),n("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[n("code",null,[n("span",{class:"line"},[n("span",{style:{color:"#393a34"}},"./CheckedException.java:11: error: ")]),f(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393a34"}},"unreported exception FileNotFoundException; ")]),f(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393a34"}},"must be caught or declared to be thrown")]),f(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393a34"}},'    FileReader file = new FileReader("C:\\\\test\\\\a.txt");')]),f(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393a34"}},"                      ^")])])])],-1),yb=[gb],vb={__name:"9",setup(e){const t={clicks:2,srcSequence:"./pages/09_Contoh Checked Exception.md"};return U(Z),(s,a)=>{const r=dn,o=Io("click");return A(),G(xt,Be(Ce(t)),{default:ee(()=>[pb,n("div",db,[n("div",fb,[W(r,gt({},{ranges:["all","12","all"]}),{default:ee(()=>[mb]),_:1},16)]),ps((A(),V("div",hb,yb)),[[o,1]])])]),_:1},16)}}},_b=n("h1",null,[f("Contoh "),n("strong",null,"Unchecked"),f(" Exception")],-1),xb={class:"grid grid-cols-2 gap-y-10 gap-x-6 mt-8"},bb={class:"flex-row"},kb=n("pre",{class:"shiki-container"},[n("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[n("code",null,[n("span",{class:"line"},[n("span",{style:{color:"#4D9375"}},"import"),n("span",{style:{color:"#DBD7CA"}}," java"),n("span",{style:{color:"#858585"}},"."),n("span",{style:{color:"#DBD7CA"}},"util"),n("span",{style:{color:"#858585"}},"."),n("span",{style:{color:"#DBD7CA"}},"Scanner"),n("span",{style:{color:"#858585"}},";")]),f(`
`),n("span",{class:"line"}),f(`
`),n("span",{class:"line"},[n("span",{style:{color:"#CB7676"}},"class"),n("span",{style:{color:"#DBD7CA"}}," "),n("span",{style:{color:"#A1B567"}},"UnheckedException"),n("span",{style:{color:"#DBD7CA"}}," "),n("span",{style:{color:"#858585"}},"{")]),f(`
`),n("span",{class:"line"},[n("span",{style:{color:"#DBD7CA"}},"    "),n("span",{style:{color:"#CB7676"}},"public"),n("span",{style:{color:"#DBD7CA"}}," "),n("span",{style:{color:"#CB7676"}},"static"),n("span",{style:{color:"#DBD7CA"}}," "),n("span",{style:{color:"#CB7676"}},"void"),n("span",{style:{color:"#DBD7CA"}}," "),n("span",{style:{color:"#A1B567"}},"main"),n("span",{style:{color:"#858585"}},"("),n("span",{style:{color:"#CB7676"}},"String"),n("span",{style:{color:"#858585"}},"[]"),n("span",{style:{color:"#DBD7CA"}}," "),n("span",{style:{color:"#B8A965"}},"args"),n("span",{style:{color:"#858585"}},"){")]),f(`
`),n("span",{class:"line"},[n("span",{style:{color:"#DBD7CA"}},"        Scanner"),n("span",{style:{color:"#D4976C"}}," "),n("span",{style:{color:"#B8A965"}},"input"),n("span",{style:{color:"#D4976C"}}," "),n("span",{style:{color:"#CB7676"}},"="),n("span",{style:{color:"#DBD7CA"}}," "),n("span",{style:{color:"#4D9375"}},"new"),n("span",{style:{color:"#DBD7CA"}}," "),n("span",{style:{color:"#A1B567"}},"Scanner"),n("span",{style:{color:"#858585"}},"("),n("span",{style:{color:"#B8A965"}},"System"),n("span",{style:{color:"#858585"}},"."),n("span",{style:{color:"#B8A965"}},"in"),n("span",{style:{color:"#858585"}},");")]),f(`
`),n("span",{class:"line"}),f(`
`),n("span",{class:"line"},[n("span",{style:{color:"#DBD7CA"}},"        "),n("span",{style:{color:"#CB7676"}},"int"),n("span",{style:{color:"#D4976C"}}," "),n("span",{style:{color:"#B8A965"}},"x"),n("span",{style:{color:"#D4976C"}}," "),n("span",{style:{color:"#CB7676"}},"="),n("span",{style:{color:"#DBD7CA"}}," "),n("span",{style:{color:"#6394BF"}},"0"),n("span",{style:{color:"#858585"}},";")]),f(`
`),n("span",{class:"line"},[n("span",{style:{color:"#DBD7CA"}},"        "),n("span",{style:{color:"#CB7676"}},"int"),n("span",{style:{color:"#D4976C"}}," "),n("span",{style:{color:"#B8A965"}},"y"),n("span",{style:{color:"#D4976C"}}," "),n("span",{style:{color:"#CB7676"}},"="),n("span",{style:{color:"#DBD7CA"}}," "),n("span",{style:{color:"#6394BF"}},"10"),n("span",{style:{color:"#858585"}},";")]),f(`
`),n("span",{class:"line"}),f(`
`),n("span",{class:"line"},[n("span",{style:{color:"#DBD7CA"}},"        "),n("span",{style:{color:"#B8A965"}},"System"),n("span",{style:{color:"#858585"}},"."),n("span",{style:{color:"#B8A965"}},"out"),n("span",{style:{color:"#858585"}},"."),n("span",{style:{color:"#A1B567"}},"println"),n("span",{style:{color:"#858585"}},"("),n("span",{style:{color:"#C98A7D"}},'"ENTER untuk lanjutkan"'),n("span",{style:{color:"#858585"}},");")]),f(`
`),n("span",{class:"line"},[n("span",{style:{color:"#DBD7CA"}},"        "),n("span",{style:{color:"#B8A965"}},"input"),n("span",{style:{color:"#858585"}},"."),n("span",{style:{color:"#A1B567"}},"nextLine"),n("span",{style:{color:"#858585"}},"();")]),f(`
`),n("span",{class:"line"}),f(`
`),n("span",{class:"line"},[n("span",{style:{color:"#DBD7CA"}},"        "),n("span",{style:{color:"#CB7676"}},"int"),n("span",{style:{color:"#D4976C"}}," "),n("span",{style:{color:"#B8A965"}},"z"),n("span",{style:{color:"#D4976C"}}," "),n("span",{style:{color:"#CB7676"}},"="),n("span",{style:{color:"#DBD7CA"}}," y "),n("span",{style:{color:"#CB7676"}},"/"),n("span",{style:{color:"#DBD7CA"}}," x"),n("span",{style:{color:"#858585"}},";")]),f(`
`),n("span",{class:"line"},[n("span",{style:{color:"#858585"}},"        "),n("span",{style:{color:"#758575"}},"// ArithmeticException. ")]),f(`
`),n("span",{class:"line"},[n("span",{style:{color:"#858585"}},"        "),n("span",{style:{color:"#758575"}},"// Suatu bilangan tidak boleh dibagi dengan 0")]),f(`
`),n("span",{class:"line"}),f(`
`),n("span",{class:"line"},[n("span",{style:{color:"#DBD7CA"}},"        "),n("span",{style:{color:"#B8A965"}},"System"),n("span",{style:{color:"#858585"}},"."),n("span",{style:{color:"#B8A965"}},"out"),n("span",{style:{color:"#858585"}},"."),n("span",{style:{color:"#A1B567"}},"println"),n("span",{style:{color:"#858585"}},"("),n("span",{style:{color:"#C98A7D"}},'"Hasil z = "'),n("span",{style:{color:"#DBD7CA"}}," "),n("span",{style:{color:"#CB7676"}},"+"),n("span",{style:{color:"#DBD7CA"}}," z"),n("span",{style:{color:"#858585"}},");")]),f(`
`),n("span",{class:"line"},[n("span",{style:{color:"#DBD7CA"}},"    "),n("span",{style:{color:"#858585"}},"}")]),f(`
`),n("span",{class:"line"},[n("span",{style:{color:"#858585"}},"}")])])]),n("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[n("code",null,[n("span",{class:"line"},[n("span",{style:{color:"#1C6B48"}},"import"),n("span",{style:{color:"#393A34"}}," java"),n("span",{style:{color:"#8E8F8B"}},"."),n("span",{style:{color:"#393A34"}},"util"),n("span",{style:{color:"#8E8F8B"}},"."),n("span",{style:{color:"#393A34"}},"Scanner"),n("span",{style:{color:"#8E8F8B"}},";")]),f(`
`),n("span",{class:"line"}),f(`
`),n("span",{class:"line"},[n("span",{style:{color:"#AB5959"}},"class"),n("span",{style:{color:"#393A34"}}," "),n("span",{style:{color:"#6C7834"}},"UnheckedException"),n("span",{style:{color:"#393A34"}}," "),n("span",{style:{color:"#8E8F8B"}},"{")]),f(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393A34"}},"    "),n("span",{style:{color:"#AB5959"}},"public"),n("span",{style:{color:"#393A34"}}," "),n("span",{style:{color:"#AB5959"}},"static"),n("span",{style:{color:"#393A34"}}," "),n("span",{style:{color:"#AB5959"}},"void"),n("span",{style:{color:"#393A34"}}," "),n("span",{style:{color:"#6C7834"}},"main"),n("span",{style:{color:"#8E8F8B"}},"("),n("span",{style:{color:"#AB5959"}},"String"),n("span",{style:{color:"#8E8F8B"}},"[]"),n("span",{style:{color:"#393A34"}}," "),n("span",{style:{color:"#8C862B"}},"args"),n("span",{style:{color:"#8E8F8B"}},"){")]),f(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393A34"}},"        Scanner"),n("span",{style:{color:"#A65E2B"}}," "),n("span",{style:{color:"#8C862B"}},"input"),n("span",{style:{color:"#A65E2B"}}," "),n("span",{style:{color:"#AB5959"}},"="),n("span",{style:{color:"#393A34"}}," "),n("span",{style:{color:"#1C6B48"}},"new"),n("span",{style:{color:"#393A34"}}," "),n("span",{style:{color:"#6C7834"}},"Scanner"),n("span",{style:{color:"#8E8F8B"}},"("),n("span",{style:{color:"#8C862B"}},"System"),n("span",{style:{color:"#8E8F8B"}},"."),n("span",{style:{color:"#8C862B"}},"in"),n("span",{style:{color:"#8E8F8B"}},");")]),f(`
`),n("span",{class:"line"}),f(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393A34"}},"        "),n("span",{style:{color:"#AB5959"}},"int"),n("span",{style:{color:"#A65E2B"}}," "),n("span",{style:{color:"#8C862B"}},"x"),n("span",{style:{color:"#A65E2B"}}," "),n("span",{style:{color:"#AB5959"}},"="),n("span",{style:{color:"#393A34"}}," "),n("span",{style:{color:"#296AA3"}},"0"),n("span",{style:{color:"#8E8F8B"}},";")]),f(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393A34"}},"        "),n("span",{style:{color:"#AB5959"}},"int"),n("span",{style:{color:"#A65E2B"}}," "),n("span",{style:{color:"#8C862B"}},"y"),n("span",{style:{color:"#A65E2B"}}," "),n("span",{style:{color:"#AB5959"}},"="),n("span",{style:{color:"#393A34"}}," "),n("span",{style:{color:"#296AA3"}},"10"),n("span",{style:{color:"#8E8F8B"}},";")]),f(`
`),n("span",{class:"line"}),f(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393A34"}},"        "),n("span",{style:{color:"#8C862B"}},"System"),n("span",{style:{color:"#8E8F8B"}},"."),n("span",{style:{color:"#8C862B"}},"out"),n("span",{style:{color:"#8E8F8B"}},"."),n("span",{style:{color:"#6C7834"}},"println"),n("span",{style:{color:"#8E8F8B"}},"("),n("span",{style:{color:"#B56959"}},'"ENTER untuk lanjutkan"'),n("span",{style:{color:"#8E8F8B"}},");")]),f(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393A34"}},"        "),n("span",{style:{color:"#8C862B"}},"input"),n("span",{style:{color:"#8E8F8B"}},"."),n("span",{style:{color:"#6C7834"}},"nextLine"),n("span",{style:{color:"#8E8F8B"}},"();")]),f(`
`),n("span",{class:"line"}),f(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393A34"}},"        "),n("span",{style:{color:"#AB5959"}},"int"),n("span",{style:{color:"#A65E2B"}}," "),n("span",{style:{color:"#8C862B"}},"z"),n("span",{style:{color:"#A65E2B"}}," "),n("span",{style:{color:"#AB5959"}},"="),n("span",{style:{color:"#393A34"}}," y "),n("span",{style:{color:"#AB5959"}},"/"),n("span",{style:{color:"#393A34"}}," x"),n("span",{style:{color:"#8E8F8B"}},";")]),f(`
`),n("span",{class:"line"},[n("span",{style:{color:"#8E8F8B"}},"        "),n("span",{style:{color:"#A0ADA0"}},"// ArithmeticException. ")]),f(`
`),n("span",{class:"line"},[n("span",{style:{color:"#8E8F8B"}},"        "),n("span",{style:{color:"#A0ADA0"}},"// Suatu bilangan tidak boleh dibagi dengan 0")]),f(`
`),n("span",{class:"line"}),f(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393A34"}},"        "),n("span",{style:{color:"#8C862B"}},"System"),n("span",{style:{color:"#8E8F8B"}},"."),n("span",{style:{color:"#8C862B"}},"out"),n("span",{style:{color:"#8E8F8B"}},"."),n("span",{style:{color:"#6C7834"}},"println"),n("span",{style:{color:"#8E8F8B"}},"("),n("span",{style:{color:"#B56959"}},'"Hasil z = "'),n("span",{style:{color:"#393A34"}}," "),n("span",{style:{color:"#AB5959"}},"+"),n("span",{style:{color:"#393A34"}}," z"),n("span",{style:{color:"#8E8F8B"}},");")]),f(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393A34"}},"    "),n("span",{style:{color:"#8E8F8B"}},"}")]),f(`
`),n("span",{class:"line"},[n("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),Eb={class:"flex-row"},wb=n("pre",{class:"shiki-container"},[n("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[n("code",null,[n("span",{class:"line"},[n("span",{style:{color:"#dbd7ca"}},"ENTER untuk lanjutkan")]),f(`
`),n("span",{class:"line"},[n("span",{style:{color:"#dbd7ca"}})]),f(`
`),n("span",{class:"line"},[n("span",{style:{color:"#dbd7ca"}},'Exception in thread "main" ')]),f(`
`),n("span",{class:"line"},[n("span",{style:{color:"#dbd7ca"}},"java.lang.ArithmeticException: / by zero")]),f(`
`),n("span",{class:"line"},[n("span",{style:{color:"#dbd7ca"}},"    at UnheckedException.main(Main.java:13)")])])]),n("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[n("code",null,[n("span",{class:"line"},[n("span",{style:{color:"#393a34"}},"ENTER untuk lanjutkan")]),f(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393a34"}})]),f(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393a34"}},'Exception in thread "main" ')]),f(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393a34"}},"java.lang.ArithmeticException: / by zero")]),f(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393a34"}},"    at UnheckedException.main(Main.java:13)")])])])],-1),Cb=[wb],Ab={__name:"10",setup(e){const t={clicks:2,srcSequence:"./pages/10_Contoh Unhecked Exception.md"};return U(Z),(s,a)=>{const r=dn,o=Io("click");return A(),G(xt,Be(Ce(t)),{default:ee(()=>[_b,n("div",xb,[n("div",bb,[W(r,gt({},{ranges:["all","13","all"]}),{default:ee(()=>[kb]),_:1},16)]),ps((A(),V("div",Eb,Cb)),[[o,1]])])]),_:1},16)}}},Bb=n("span",{class:"text-6xl font-extrabold color-orange p-4 border border-solid border-orange rounded-lg"}," 02 ",-1),Sb=n("h1",{class:"font-bold mt-12"},[n("p",null,[f("Exception Handling:"),n("br"),n("br"),f(" Try-Catch")])],-1),Ob={__name:"11",setup(e){const t={layout:"center",class:"text-center",srcSequence:"./pages/11_Cover Try-Catch.md"};return U(Z),(s,a)=>(A(),G(rt,Be(Ce(t)),{default:ee(()=>[Bb,Sb]),_:1},16))}},Tb=n("h1",null,"Try-Catch",-1),Pb={class:"grid grid-cols-2 gap-y-10 gap-x-6 mt-8"},Db=n("div",{class:"flex-row"},[n("p",null,[n("strong",null,"Try-catch"),f(" merupakan salah satu cara "),n("strong",null,"penanganan class exception"),f(" yang muncul akibat kondisi abnormal. Statement ini terdiri dari "),n("strong",null,"blok try"),f(" dan "),n("strong",null,"blok catch"),f(".")]),n("p",null,[n("strong",null,"Blok try"),f(" berisikan "),n("strong",null,"kode"),f(" yang berkemungkinan "),n("strong",null,"memunculkan suatu exception"),f(". Kode dalam blok ini akan dieksekusi "),n("strong",null,"hingga muncul suatu exception"),f(".")]),n("p",null,[n("strong",null,"Block catch"),f(" berisikan "),n("strong",null,"kode"),f(" yang dieksekusi apabila "),n("strong",null,"muncul suatu exception"),f(" dalam blok try sebelumnya. Blok catch memiliki "),n("strong",null,"parameter class exception"),f(" yang "),n("strong",null,"ingin ditangani.")])],-1),$b={class:"flex-row"},Fb=n("pre",{class:"shiki-container"},[n("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[n("code",null,[n("span",{class:"line"},[n("span",{style:{color:"#4D9375"}},"try"),n("span",{style:{color:"#DBD7CA"}}," "),n("span",{style:{color:"#858585"}},"{")]),f(`
`),n("span",{class:"line"},[n("span",{style:{color:"#858585"}},"  "),n("span",{style:{color:"#758575"}},"//  Block of code to try")]),f(`
`),n("span",{class:"line"}),f(`
`),n("span",{class:"line"},[n("span",{style:{color:"#858585"}},"}"),n("span",{style:{color:"#DBD7CA"}}," "),n("span",{style:{color:"#4D9375"}},"catch"),n("span",{style:{color:"#858585"}},"("),n("span",{style:{color:"#DBD7CA"}},"Exception "),n("span",{style:{color:"#B8A965"}},"e"),n("span",{style:{color:"#858585"}},")"),n("span",{style:{color:"#DBD7CA"}}," "),n("span",{style:{color:"#858585"}},"{")]),f(`
`),n("span",{class:"line"},[n("span",{style:{color:"#858585"}},"  "),n("span",{style:{color:"#758575"}},"//  Block of code to handle errors")]),f(`
`),n("span",{class:"line"},[n("span",{style:{color:"#DBD7CA"}},"  ")]),f(`
`),n("span",{class:"line"},[n("span",{style:{color:"#858585"}},"}")])])]),n("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[n("code",null,[n("span",{class:"line"},[n("span",{style:{color:"#1C6B48"}},"try"),n("span",{style:{color:"#393A34"}}," "),n("span",{style:{color:"#8E8F8B"}},"{")]),f(`
`),n("span",{class:"line"},[n("span",{style:{color:"#8E8F8B"}},"  "),n("span",{style:{color:"#A0ADA0"}},"//  Block of code to try")]),f(`
`),n("span",{class:"line"}),f(`
`),n("span",{class:"line"},[n("span",{style:{color:"#8E8F8B"}},"}"),n("span",{style:{color:"#393A34"}}," "),n("span",{style:{color:"#1C6B48"}},"catch"),n("span",{style:{color:"#8E8F8B"}},"("),n("span",{style:{color:"#393A34"}},"Exception "),n("span",{style:{color:"#8C862B"}},"e"),n("span",{style:{color:"#8E8F8B"}},")"),n("span",{style:{color:"#393A34"}}," "),n("span",{style:{color:"#8E8F8B"}},"{")]),f(`
`),n("span",{class:"line"},[n("span",{style:{color:"#8E8F8B"}},"  "),n("span",{style:{color:"#A0ADA0"}},"//  Block of code to handle errors")]),f(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393A34"}},"  ")]),f(`
`),n("span",{class:"line"},[n("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),Mb={__name:"12",setup(e){const t={srcSequence:"./pages/12_Try-Catch.md"};return U(Z),(s,a)=>{const r=dn;return A(),G(xt,Be(Ce(t)),{default:ee(()=>[Tb,n("div",Pb,[Db,n("div",$b,[W(r,gt({},{ranges:[""]}),{default:ee(()=>[Fb]),_:1},16)])])]),_:1},16)}}},jb=n("h1",null,"Contoh Try-Catch",-1),Ib=n("pre",{class:"shiki-container"},[n("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[n("code",null,[n("span",{class:"line"},[n("span",{style:{color:"#4D9375"}},"import"),n("span",{style:{color:"#DBD7CA"}}," java"),n("span",{style:{color:"#858585"}},"."),n("span",{style:{color:"#DBD7CA"}},"io"),n("span",{style:{color:"#858585"}},"."),n("span",{style:{color:"#D4976C"}},"*"),n("span",{style:{color:"#858585"}},";")]),f(`
`),n("span",{class:"line"}),f(`
`),n("span",{class:"line"},[n("span",{style:{color:"#CB7676"}},"class"),n("span",{style:{color:"#DBD7CA"}}," "),n("span",{style:{color:"#A1B567"}},"CheckedExceptionHandling"),n("span",{style:{color:"#DBD7CA"}}," "),n("span",{style:{color:"#858585"}},"{")]),f(`
`),n("span",{class:"line"},[n("span",{style:{color:"#DBD7CA"}},"    "),n("span",{style:{color:"#CB7676"}},"public"),n("span",{style:{color:"#DBD7CA"}}," "),n("span",{style:{color:"#CB7676"}},"static"),n("span",{style:{color:"#DBD7CA"}}," "),n("span",{style:{color:"#CB7676"}},"void"),n("span",{style:{color:"#DBD7CA"}}," "),n("span",{style:{color:"#A1B567"}},"main"),n("span",{style:{color:"#858585"}},"("),n("span",{style:{color:"#CB7676"}},"String"),n("span",{style:{color:"#858585"}},"[]"),n("span",{style:{color:"#DBD7CA"}}," "),n("span",{style:{color:"#B8A965"}},"args"),n("span",{style:{color:"#858585"}},"){")]),f(`
`),n("span",{class:"line"},[n("span",{style:{color:"#DBD7CA"}},"        "),n("span",{style:{color:"#4D9375"}},"try"),n("span",{style:{color:"#858585"}},"{")]),f(`
`),n("span",{class:"line"},[n("span",{style:{color:"#DBD7CA"}},"            FileReader"),n("span",{style:{color:"#D4976C"}}," "),n("span",{style:{color:"#B8A965"}},"file"),n("span",{style:{color:"#D4976C"}}," "),n("span",{style:{color:"#CB7676"}},"="),n("span",{style:{color:"#DBD7CA"}}," "),n("span",{style:{color:"#4D9375"}},"new"),n("span",{style:{color:"#DBD7CA"}}," "),n("span",{style:{color:"#A1B567"}},"FileReader"),n("span",{style:{color:"#858585"}},"("),n("span",{style:{color:"#C98A7D"}},'"C:'),n("span",{style:{color:"#D4976C"}},"\\\\"),n("span",{style:{color:"#C98A7D"}},"test"),n("span",{style:{color:"#D4976C"}},"\\\\"),n("span",{style:{color:"#C98A7D"}},'a.txt"'),n("span",{style:{color:"#858585"}},");")]),f(`
`),n("span",{class:"line"},[n("span",{style:{color:"#DBD7CA"}},"            BufferedReader"),n("span",{style:{color:"#D4976C"}}," "),n("span",{style:{color:"#B8A965"}},"fileInput"),n("span",{style:{color:"#D4976C"}}," "),n("span",{style:{color:"#CB7676"}},"="),n("span",{style:{color:"#DBD7CA"}}," "),n("span",{style:{color:"#4D9375"}},"new"),n("span",{style:{color:"#DBD7CA"}}," "),n("span",{style:{color:"#A1B567"}},"BufferedReader"),n("span",{style:{color:"#858585"}},"("),n("span",{style:{color:"#DBD7CA"}},"file"),n("span",{style:{color:"#858585"}},");")]),f(`
`),n("span",{class:"line"}),f(`
`),n("span",{class:"line"},[n("span",{style:{color:"#DBD7CA"}},"            "),n("span",{style:{color:"#4D9375"}},"for"),n("span",{style:{color:"#858585"}},"("),n("span",{style:{color:"#CB7676"}},"int"),n("span",{style:{color:"#D4976C"}}," "),n("span",{style:{color:"#B8A965"}},"counter"),n("span",{style:{color:"#D4976C"}}," "),n("span",{style:{color:"#CB7676"}},"="),n("span",{style:{color:"#DBD7CA"}}," "),n("span",{style:{color:"#6394BF"}},"0"),n("span",{style:{color:"#858585"}},";"),n("span",{style:{color:"#DBD7CA"}}," counter "),n("span",{style:{color:"#CB7676"}},"<"),n("span",{style:{color:"#DBD7CA"}}," "),n("span",{style:{color:"#6394BF"}},"3"),n("span",{style:{color:"#858585"}},";"),n("span",{style:{color:"#DBD7CA"}}," counter"),n("span",{style:{color:"#CB7676"}},"++"),n("span",{style:{color:"#858585"}},"){")]),f(`
`),n("span",{class:"line"},[n("span",{style:{color:"#DBD7CA"}},"                "),n("span",{style:{color:"#B8A965"}},"System"),n("span",{style:{color:"#858585"}},"."),n("span",{style:{color:"#B8A965"}},"out"),n("span",{style:{color:"#858585"}},"."),n("span",{style:{color:"#A1B567"}},"println"),n("span",{style:{color:"#858585"}},"("),n("span",{style:{color:"#B8A965"}},"fileInput"),n("span",{style:{color:"#858585"}},"."),n("span",{style:{color:"#A1B567"}},"readLine"),n("span",{style:{color:"#858585"}},"());")]),f(`
`),n("span",{class:"line"},[n("span",{style:{color:"#DBD7CA"}},"            "),n("span",{style:{color:"#858585"}},"}")]),f(`
`),n("span",{class:"line"}),f(`
`),n("span",{class:"line"},[n("span",{style:{color:"#DBD7CA"}},"            "),n("span",{style:{color:"#B8A965"}},"fileInput"),n("span",{style:{color:"#858585"}},"."),n("span",{style:{color:"#A1B567"}},"close"),n("span",{style:{color:"#858585"}},"();")]),f(`
`),n("span",{class:"line"},[n("span",{style:{color:"#DBD7CA"}},"        "),n("span",{style:{color:"#858585"}},"}"),n("span",{style:{color:"#DBD7CA"}}," "),n("span",{style:{color:"#4D9375"}},"catch"),n("span",{style:{color:"#858585"}},"("),n("span",{style:{color:"#DBD7CA"}},"IOException "),n("span",{style:{color:"#B8A965"}},"e"),n("span",{style:{color:"#858585"}},")"),n("span",{style:{color:"#DBD7CA"}}," "),n("span",{style:{color:"#858585"}},"{")]),f(`
`),n("span",{class:"line"},[n("span",{style:{color:"#DBD7CA"}},"            "),n("span",{style:{color:"#B8A965"}},"System"),n("span",{style:{color:"#858585"}},"."),n("span",{style:{color:"#B8A965"}},"out"),n("span",{style:{color:"#858585"}},"."),n("span",{style:{color:"#A1B567"}},"println"),n("span",{style:{color:"#858585"}},"("),n("span",{style:{color:"#C98A7D"}},'"Terjadi suatu error : "'),n("span",{style:{color:"#DBD7CA"}}," "),n("span",{style:{color:"#CB7676"}},"+"),n("span",{style:{color:"#DBD7CA"}}," "),n("span",{style:{color:"#B8A965"}},"e"),n("span",{style:{color:"#858585"}},"."),n("span",{style:{color:"#A1B567"}},"getMessage"),n("span",{style:{color:"#858585"}},"());")]),f(`
`),n("span",{class:"line"},[n("span",{style:{color:"#DBD7CA"}},"        "),n("span",{style:{color:"#858585"}},"}"),n("span",{style:{color:"#DBD7CA"}},"     ")]),f(`
`),n("span",{class:"line"},[n("span",{style:{color:"#DBD7CA"}},"    "),n("span",{style:{color:"#858585"}},"}")]),f(`
`),n("span",{class:"line"},[n("span",{style:{color:"#858585"}},"}")])])]),n("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[n("code",null,[n("span",{class:"line"},[n("span",{style:{color:"#1C6B48"}},"import"),n("span",{style:{color:"#393A34"}}," java"),n("span",{style:{color:"#8E8F8B"}},"."),n("span",{style:{color:"#393A34"}},"io"),n("span",{style:{color:"#8E8F8B"}},"."),n("span",{style:{color:"#A65E2B"}},"*"),n("span",{style:{color:"#8E8F8B"}},";")]),f(`
`),n("span",{class:"line"}),f(`
`),n("span",{class:"line"},[n("span",{style:{color:"#AB5959"}},"class"),n("span",{style:{color:"#393A34"}}," "),n("span",{style:{color:"#6C7834"}},"CheckedExceptionHandling"),n("span",{style:{color:"#393A34"}}," "),n("span",{style:{color:"#8E8F8B"}},"{")]),f(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393A34"}},"    "),n("span",{style:{color:"#AB5959"}},"public"),n("span",{style:{color:"#393A34"}}," "),n("span",{style:{color:"#AB5959"}},"static"),n("span",{style:{color:"#393A34"}}," "),n("span",{style:{color:"#AB5959"}},"void"),n("span",{style:{color:"#393A34"}}," "),n("span",{style:{color:"#6C7834"}},"main"),n("span",{style:{color:"#8E8F8B"}},"("),n("span",{style:{color:"#AB5959"}},"String"),n("span",{style:{color:"#8E8F8B"}},"[]"),n("span",{style:{color:"#393A34"}}," "),n("span",{style:{color:"#8C862B"}},"args"),n("span",{style:{color:"#8E8F8B"}},"){")]),f(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393A34"}},"        "),n("span",{style:{color:"#1C6B48"}},"try"),n("span",{style:{color:"#8E8F8B"}},"{")]),f(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393A34"}},"            FileReader"),n("span",{style:{color:"#A65E2B"}}," "),n("span",{style:{color:"#8C862B"}},"file"),n("span",{style:{color:"#A65E2B"}}," "),n("span",{style:{color:"#AB5959"}},"="),n("span",{style:{color:"#393A34"}}," "),n("span",{style:{color:"#1C6B48"}},"new"),n("span",{style:{color:"#393A34"}}," "),n("span",{style:{color:"#6C7834"}},"FileReader"),n("span",{style:{color:"#8E8F8B"}},"("),n("span",{style:{color:"#B56959"}},'"C:'),n("span",{style:{color:"#A65E2B"}},"\\\\"),n("span",{style:{color:"#B56959"}},"test"),n("span",{style:{color:"#A65E2B"}},"\\\\"),n("span",{style:{color:"#B56959"}},'a.txt"'),n("span",{style:{color:"#8E8F8B"}},");")]),f(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393A34"}},"            BufferedReader"),n("span",{style:{color:"#A65E2B"}}," "),n("span",{style:{color:"#8C862B"}},"fileInput"),n("span",{style:{color:"#A65E2B"}}," "),n("span",{style:{color:"#AB5959"}},"="),n("span",{style:{color:"#393A34"}}," "),n("span",{style:{color:"#1C6B48"}},"new"),n("span",{style:{color:"#393A34"}}," "),n("span",{style:{color:"#6C7834"}},"BufferedReader"),n("span",{style:{color:"#8E8F8B"}},"("),n("span",{style:{color:"#393A34"}},"file"),n("span",{style:{color:"#8E8F8B"}},");")]),f(`
`),n("span",{class:"line"}),f(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393A34"}},"            "),n("span",{style:{color:"#1C6B48"}},"for"),n("span",{style:{color:"#8E8F8B"}},"("),n("span",{style:{color:"#AB5959"}},"int"),n("span",{style:{color:"#A65E2B"}}," "),n("span",{style:{color:"#8C862B"}},"counter"),n("span",{style:{color:"#A65E2B"}}," "),n("span",{style:{color:"#AB5959"}},"="),n("span",{style:{color:"#393A34"}}," "),n("span",{style:{color:"#296AA3"}},"0"),n("span",{style:{color:"#8E8F8B"}},";"),n("span",{style:{color:"#393A34"}}," counter "),n("span",{style:{color:"#AB5959"}},"<"),n("span",{style:{color:"#393A34"}}," "),n("span",{style:{color:"#296AA3"}},"3"),n("span",{style:{color:"#8E8F8B"}},";"),n("span",{style:{color:"#393A34"}}," counter"),n("span",{style:{color:"#AB5959"}},"++"),n("span",{style:{color:"#8E8F8B"}},"){")]),f(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393A34"}},"                "),n("span",{style:{color:"#8C862B"}},"System"),n("span",{style:{color:"#8E8F8B"}},"."),n("span",{style:{color:"#8C862B"}},"out"),n("span",{style:{color:"#8E8F8B"}},"."),n("span",{style:{color:"#6C7834"}},"println"),n("span",{style:{color:"#8E8F8B"}},"("),n("span",{style:{color:"#8C862B"}},"fileInput"),n("span",{style:{color:"#8E8F8B"}},"."),n("span",{style:{color:"#6C7834"}},"readLine"),n("span",{style:{color:"#8E8F8B"}},"());")]),f(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393A34"}},"            "),n("span",{style:{color:"#8E8F8B"}},"}")]),f(`
`),n("span",{class:"line"}),f(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393A34"}},"            "),n("span",{style:{color:"#8C862B"}},"fileInput"),n("span",{style:{color:"#8E8F8B"}},"."),n("span",{style:{color:"#6C7834"}},"close"),n("span",{style:{color:"#8E8F8B"}},"();")]),f(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393A34"}},"        "),n("span",{style:{color:"#8E8F8B"}},"}"),n("span",{style:{color:"#393A34"}}," "),n("span",{style:{color:"#1C6B48"}},"catch"),n("span",{style:{color:"#8E8F8B"}},"("),n("span",{style:{color:"#393A34"}},"IOException "),n("span",{style:{color:"#8C862B"}},"e"),n("span",{style:{color:"#8E8F8B"}},")"),n("span",{style:{color:"#393A34"}}," "),n("span",{style:{color:"#8E8F8B"}},"{")]),f(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393A34"}},"            "),n("span",{style:{color:"#8C862B"}},"System"),n("span",{style:{color:"#8E8F8B"}},"."),n("span",{style:{color:"#8C862B"}},"out"),n("span",{style:{color:"#8E8F8B"}},"."),n("span",{style:{color:"#6C7834"}},"println"),n("span",{style:{color:"#8E8F8B"}},"("),n("span",{style:{color:"#B56959"}},'"Terjadi suatu error : "'),n("span",{style:{color:"#393A34"}}," "),n("span",{style:{color:"#AB5959"}},"+"),n("span",{style:{color:"#393A34"}}," "),n("span",{style:{color:"#8C862B"}},"e"),n("span",{style:{color:"#8E8F8B"}},"."),n("span",{style:{color:"#6C7834"}},"getMessage"),n("span",{style:{color:"#8E8F8B"}},"());")]),f(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393A34"}},"        "),n("span",{style:{color:"#8E8F8B"}},"}"),n("span",{style:{color:"#393A34"}},"     ")]),f(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393A34"}},"    "),n("span",{style:{color:"#8E8F8B"}},"}")]),f(`
`),n("span",{class:"line"},[n("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),Nb=n("div",null,[n("pre",{class:"shiki-container"},[n("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[n("code",null,[n("span",{class:"line"},[n("span",{style:{color:"#dbd7ca"}},"Terjadi suatu error : C:\\test\\a.txt (No such file or directory)")])])]),n("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[n("code",null,[n("span",{class:"line"},[n("span",{style:{color:"#393a34"}},"Terjadi suatu error : C:\\test\\a.txt (No such file or directory)")])])])])],-1),Rb={__name:"13",setup(e){const t={srcSequence:"./pages/13_Contoh Try-Catch.md"};return U(Z),(s,a)=>{const r=dn;return A(),G(xt,Be(Ce(t)),{default:ee(()=>[jb,W(r,gt({},{ranges:[""]}),{default:ee(()=>[Ib]),_:1},16),Nb]),_:1},16)}}},Lb=n("span",{class:"text-6xl font-extrabold color-orange p-4 border border-solid border-orange rounded-lg"}," 03 ",-1),Hb=n("h1",{class:"font-bold mt-12"},[n("p",null,[f("Exception Handling:"),n("br"),n("br"),f(" Throw & Throws")])],-1),Vb={__name:"14",setup(e){const t={layout:"center",class:"text-center",srcSequence:"./pages/14_Cover Throw and Throws.md"};return U(Z),(s,a)=>(A(),G(rt,Be(Ce(t)),{default:ee(()=>[Lb,Hb]),_:1},16))}},qb=n("h1",null,"Throw & Throws",-1),Ub=n("br",null,null,-1),Kb=n("div",{class:"text-2xl mt-12"},[n("p",null,[n("strong",null,"Throw"),f(" merupakan statement yang digunakan untuk "),n("strong",null,"melemparkan"),f(" suatu "),n("strong",null,"exception"),f(" dalam blok kode. Hal ini berguna untuk "),n("strong",null,"melempar custom exception"),f(".")]),n("br"),n("p",null,[n("strong",null,"Throws"),f(" merupakan "),n("strong",null,"tanda"),f(" untuk suatu "),n("strong",null,"method"),f(" yang dapat "),n("strong",null,"melemparkan"),f(" suatu "),n("strong",null,"exception"),f(" didalamnya. Hal ini berguna untuk "),n("strong",null,"tidak menangani exception"),f(" dalam method itu sendiri namun dalam kode yang memanggil "),n("strong",null,"method"),f(" tersebut.")])],-1),zb={__name:"15",setup(e){const t={srcSequence:"./pages/15_Throw and Throws.md"};return U(Z),(s,a)=>(A(),G(xt,Be(Ce(t)),{default:ee(()=>[qb,Ub,Kb]),_:1},16))}},Wb=n("h1",null,"Contoh Throw & Throws",-1),Yb=n("pre",{class:"shiki-container"},[n("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[n("code",null,[n("span",{class:"line"},[n("span",{style:{color:"#4D9375"}},"import"),n("span",{style:{color:"#DBD7CA"}}," java"),n("span",{style:{color:"#858585"}},"."),n("span",{style:{color:"#DBD7CA"}},"io"),n("span",{style:{color:"#858585"}},"."),n("span",{style:{color:"#D4976C"}},"*"),n("span",{style:{color:"#858585"}},";")]),f(`
`),n("span",{class:"line"}),f(`
`),n("span",{class:"line"},[n("span",{style:{color:"#CB7676"}},"class"),n("span",{style:{color:"#DBD7CA"}}," "),n("span",{style:{color:"#A1B567"}},"Throws"),n("span",{style:{color:"#DBD7CA"}}," "),n("span",{style:{color:"#858585"}},"{")]),f(`
`),n("span",{class:"line"},[n("span",{style:{color:"#DBD7CA"}},"    "),n("span",{style:{color:"#CB7676"}},"public"),n("span",{style:{color:"#DBD7CA"}}," "),n("span",{style:{color:"#CB7676"}},"static"),n("span",{style:{color:"#DBD7CA"}}," "),n("span",{style:{color:"#CB7676"}},"void"),n("span",{style:{color:"#DBD7CA"}}," "),n("span",{style:{color:"#A1B567"}},"bacaFile"),n("span",{style:{color:"#858585"}},"()"),n("span",{style:{color:"#DBD7CA"}}," "),n("span",{style:{color:"#CB7676"}},"throws"),n("span",{style:{color:"#DBD7CA"}}," FileNotFoundException "),n("span",{style:{color:"#858585"}},"{")]),f(`
`),n("span",{class:"line"},[n("span",{style:{color:"#DBD7CA"}},"        "),n("span",{style:{color:"#4D9375"}},"throw"),n("span",{style:{color:"#DBD7CA"}}," "),n("span",{style:{color:"#4D9375"}},"new"),n("span",{style:{color:"#DBD7CA"}}," "),n("span",{style:{color:"#A1B567"}},"FileNotFoundException"),n("span",{style:{color:"#858585"}},"("),n("span",{style:{color:"#C98A7D"}},'"File tidak ditemukan"'),n("span",{style:{color:"#858585"}},");")]),f(`
`),n("span",{class:"line"},[n("span",{style:{color:"#DBD7CA"}},"    "),n("span",{style:{color:"#858585"}},"}")]),f(`
`),n("span",{class:"line"}),f(`
`),n("span",{class:"line"},[n("span",{style:{color:"#DBD7CA"}},"    "),n("span",{style:{color:"#CB7676"}},"public"),n("span",{style:{color:"#DBD7CA"}}," "),n("span",{style:{color:"#CB7676"}},"static"),n("span",{style:{color:"#DBD7CA"}}," "),n("span",{style:{color:"#CB7676"}},"void"),n("span",{style:{color:"#DBD7CA"}}," "),n("span",{style:{color:"#A1B567"}},"main"),n("span",{style:{color:"#858585"}},"("),n("span",{style:{color:"#CB7676"}},"String"),n("span",{style:{color:"#858585"}},"[]"),n("span",{style:{color:"#DBD7CA"}}," "),n("span",{style:{color:"#B8A965"}},"args"),n("span",{style:{color:"#858585"}},"){")]),f(`
`),n("span",{class:"line"},[n("span",{style:{color:"#DBD7CA"}},"        "),n("span",{style:{color:"#4D9375"}},"try"),n("span",{style:{color:"#858585"}},"{")]),f(`
`),n("span",{class:"line"},[n("span",{style:{color:"#DBD7CA"}},"            "),n("span",{style:{color:"#A1B567"}},"bacaFile"),n("span",{style:{color:"#858585"}},"();")]),f(`
`),n("span",{class:"line"},[n("span",{style:{color:"#DBD7CA"}},"        "),n("span",{style:{color:"#858585"}},"}"),n("span",{style:{color:"#DBD7CA"}}," "),n("span",{style:{color:"#4D9375"}},"catch"),n("span",{style:{color:"#858585"}},"("),n("span",{style:{color:"#DBD7CA"}},"IOException "),n("span",{style:{color:"#B8A965"}},"e"),n("span",{style:{color:"#858585"}},")"),n("span",{style:{color:"#DBD7CA"}}," "),n("span",{style:{color:"#858585"}},"{")]),f(`
`),n("span",{class:"line"},[n("span",{style:{color:"#DBD7CA"}},"            "),n("span",{style:{color:"#B8A965"}},"System"),n("span",{style:{color:"#858585"}},"."),n("span",{style:{color:"#B8A965"}},"out"),n("span",{style:{color:"#858585"}},"."),n("span",{style:{color:"#A1B567"}},"println"),n("span",{style:{color:"#858585"}},"("),n("span",{style:{color:"#C98A7D"}},'"Terjadi suatu error : "'),n("span",{style:{color:"#DBD7CA"}}," "),n("span",{style:{color:"#CB7676"}},"+"),n("span",{style:{color:"#DBD7CA"}}," "),n("span",{style:{color:"#B8A965"}},"e"),n("span",{style:{color:"#858585"}},"."),n("span",{style:{color:"#A1B567"}},"getMessage"),n("span",{style:{color:"#858585"}},"());")]),f(`
`),n("span",{class:"line"},[n("span",{style:{color:"#DBD7CA"}},"        "),n("span",{style:{color:"#858585"}},"}"),n("span",{style:{color:"#DBD7CA"}},"     ")]),f(`
`),n("span",{class:"line"},[n("span",{style:{color:"#DBD7CA"}},"    "),n("span",{style:{color:"#858585"}},"}")]),f(`
`),n("span",{class:"line"},[n("span",{style:{color:"#858585"}},"}")])])]),n("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[n("code",null,[n("span",{class:"line"},[n("span",{style:{color:"#1C6B48"}},"import"),n("span",{style:{color:"#393A34"}}," java"),n("span",{style:{color:"#8E8F8B"}},"."),n("span",{style:{color:"#393A34"}},"io"),n("span",{style:{color:"#8E8F8B"}},"."),n("span",{style:{color:"#A65E2B"}},"*"),n("span",{style:{color:"#8E8F8B"}},";")]),f(`
`),n("span",{class:"line"}),f(`
`),n("span",{class:"line"},[n("span",{style:{color:"#AB5959"}},"class"),n("span",{style:{color:"#393A34"}}," "),n("span",{style:{color:"#6C7834"}},"Throws"),n("span",{style:{color:"#393A34"}}," "),n("span",{style:{color:"#8E8F8B"}},"{")]),f(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393A34"}},"    "),n("span",{style:{color:"#AB5959"}},"public"),n("span",{style:{color:"#393A34"}}," "),n("span",{style:{color:"#AB5959"}},"static"),n("span",{style:{color:"#393A34"}}," "),n("span",{style:{color:"#AB5959"}},"void"),n("span",{style:{color:"#393A34"}}," "),n("span",{style:{color:"#6C7834"}},"bacaFile"),n("span",{style:{color:"#8E8F8B"}},"()"),n("span",{style:{color:"#393A34"}}," "),n("span",{style:{color:"#AB5959"}},"throws"),n("span",{style:{color:"#393A34"}}," FileNotFoundException "),n("span",{style:{color:"#8E8F8B"}},"{")]),f(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393A34"}},"        "),n("span",{style:{color:"#1C6B48"}},"throw"),n("span",{style:{color:"#393A34"}}," "),n("span",{style:{color:"#1C6B48"}},"new"),n("span",{style:{color:"#393A34"}}," "),n("span",{style:{color:"#6C7834"}},"FileNotFoundException"),n("span",{style:{color:"#8E8F8B"}},"("),n("span",{style:{color:"#B56959"}},'"File tidak ditemukan"'),n("span",{style:{color:"#8E8F8B"}},");")]),f(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393A34"}},"    "),n("span",{style:{color:"#8E8F8B"}},"}")]),f(`
`),n("span",{class:"line"}),f(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393A34"}},"    "),n("span",{style:{color:"#AB5959"}},"public"),n("span",{style:{color:"#393A34"}}," "),n("span",{style:{color:"#AB5959"}},"static"),n("span",{style:{color:"#393A34"}}," "),n("span",{style:{color:"#AB5959"}},"void"),n("span",{style:{color:"#393A34"}}," "),n("span",{style:{color:"#6C7834"}},"main"),n("span",{style:{color:"#8E8F8B"}},"("),n("span",{style:{color:"#AB5959"}},"String"),n("span",{style:{color:"#8E8F8B"}},"[]"),n("span",{style:{color:"#393A34"}}," "),n("span",{style:{color:"#8C862B"}},"args"),n("span",{style:{color:"#8E8F8B"}},"){")]),f(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393A34"}},"        "),n("span",{style:{color:"#1C6B48"}},"try"),n("span",{style:{color:"#8E8F8B"}},"{")]),f(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393A34"}},"            "),n("span",{style:{color:"#6C7834"}},"bacaFile"),n("span",{style:{color:"#8E8F8B"}},"();")]),f(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393A34"}},"        "),n("span",{style:{color:"#8E8F8B"}},"}"),n("span",{style:{color:"#393A34"}}," "),n("span",{style:{color:"#1C6B48"}},"catch"),n("span",{style:{color:"#8E8F8B"}},"("),n("span",{style:{color:"#393A34"}},"IOException "),n("span",{style:{color:"#8C862B"}},"e"),n("span",{style:{color:"#8E8F8B"}},")"),n("span",{style:{color:"#393A34"}}," "),n("span",{style:{color:"#8E8F8B"}},"{")]),f(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393A34"}},"            "),n("span",{style:{color:"#8C862B"}},"System"),n("span",{style:{color:"#8E8F8B"}},"."),n("span",{style:{color:"#8C862B"}},"out"),n("span",{style:{color:"#8E8F8B"}},"."),n("span",{style:{color:"#6C7834"}},"println"),n("span",{style:{color:"#8E8F8B"}},"("),n("span",{style:{color:"#B56959"}},'"Terjadi suatu error : "'),n("span",{style:{color:"#393A34"}}," "),n("span",{style:{color:"#AB5959"}},"+"),n("span",{style:{color:"#393A34"}}," "),n("span",{style:{color:"#8C862B"}},"e"),n("span",{style:{color:"#8E8F8B"}},"."),n("span",{style:{color:"#6C7834"}},"getMessage"),n("span",{style:{color:"#8E8F8B"}},"());")]),f(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393A34"}},"        "),n("span",{style:{color:"#8E8F8B"}},"}"),n("span",{style:{color:"#393A34"}},"     ")]),f(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393A34"}},"    "),n("span",{style:{color:"#8E8F8B"}},"}")]),f(`
`),n("span",{class:"line"},[n("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),Gb=n("div",null,[n("pre",{class:"shiki-container"},[n("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[n("code",null,[n("span",{class:"line"},[n("span",{style:{color:"#dbd7ca"}},"Terjadi suatu error : File tidak ditemukan")])])]),n("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[n("code",null,[n("span",{class:"line"},[n("span",{style:{color:"#393a34"}},"Terjadi suatu error : File tidak ditemukan")])])])])],-1),Zb={__name:"16",setup(e){const t={srcSequence:"./pages/16_Contoh Throw and Throws.md"};return U(Z),(s,a)=>{const r=dn;return A(),G(xt,Be(Ce(t)),{default:ee(()=>[Wb,W(r,gt({},{ranges:[""]}),{default:ee(()=>[Yb]),_:1},16),Gb]),_:1},16)}}},Jb=n("span",{class:"text-6xl font-extrabold color-orange p-4 border border-solid border-orange rounded-lg"}," 04 ",-1),Qb=n("h1",{class:"font-bold mt-12"},[n("p",null,"Custom Exception Class")],-1),Xb={__name:"17",setup(e){const t={layout:"center",class:"text-center",srcSequence:"./pages/17_Cover Custom Exception Class.md"};return U(Z),(s,a)=>(A(),G(rt,Be(Ce(t)),{default:ee(()=>[Jb,Qb]),_:1},16))}},ek=n("h1",null,"Contoh Custom Exception Class",-1),tk={class:"grid grid-cols-12 gap-y-10 gap-x-4"},nk={class:"flex-row col-span-4"},sk=n("p",null,[f("Membuat "),n("strong",null,"custom exception class"),f(" dapat dilakukan dengan membuat class seperti biasa lalu "),n("strong",null,"mewarisi class Exception"),f(" dengan menggunakan "),n("strong",null,"extends"),f(".")],-1),ak=n("p",null,"Tujuannya adalah apabila ada kondisi abnormal lainnya yang ingin dibuat.",-1),rk={class:"mt-12"},ok=n("pre",{class:"shiki-container"},[n("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[n("code",null,[n("span",{class:"line"},[n("span",{style:{color:"#dbd7ca"}},"Terjadi error : ")]),f(`
`),n("span",{class:"line"},[n("span",{style:{color:"#dbd7ca"}},"Angka yang dimasukkan melanggar ketentuan")])])]),n("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[n("code",null,[n("span",{class:"line"},[n("span",{style:{color:"#393a34"}},"Terjadi error : ")]),f(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393a34"}},"Angka yang dimasukkan melanggar ketentuan")])])])],-1),lk=[ok],ik={class:"flex-row col-span-8"},ck=n("pre",{class:"shiki-container"},[n("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[n("code",null,[n("span",{class:"line"},[n("span",{style:{color:"#CB7676"}},"class"),n("span",{style:{color:"#DBD7CA"}}," "),n("span",{style:{color:"#A1B567"}},"InvalidNumberException"),n("span",{style:{color:"#DBD7CA"}}," "),n("span",{style:{color:"#CB7676"}},"extends"),n("span",{style:{color:"#DBD7CA"}}," "),n("span",{style:{color:"#A1B567"}},"Exception"),n("span",{style:{color:"#DBD7CA"}}," "),n("span",{style:{color:"#858585"}},"{")]),f(`
`),n("span",{class:"line"},[n("span",{style:{color:"#DBD7CA"}},"    "),n("span",{style:{color:"#CB7676"}},"public"),n("span",{style:{color:"#DBD7CA"}}," "),n("span",{style:{color:"#A1B567"}},"InvalidNumberException"),n("span",{style:{color:"#858585"}},"(){")]),f(`
`),n("span",{class:"line"},[n("span",{style:{color:"#DBD7CA"}},"        "),n("span",{style:{color:"#D4976C"}},"super"),n("span",{style:{color:"#858585"}},"("),n("span",{style:{color:"#C98A7D"}},'"Angka yang dimasukkan melanggar ketentuan"'),n("span",{style:{color:"#858585"}},");")]),f(`
`),n("span",{class:"line"},[n("span",{style:{color:"#DBD7CA"}},"    "),n("span",{style:{color:"#858585"}},"}")]),f(`
`),n("span",{class:"line"},[n("span",{style:{color:"#858585"}},"}")]),f(`
`),n("span",{class:"line"}),f(`
`),n("span",{class:"line"},[n("span",{style:{color:"#CB7676"}},"public"),n("span",{style:{color:"#DBD7CA"}}," "),n("span",{style:{color:"#CB7676"}},"class"),n("span",{style:{color:"#DBD7CA"}}," "),n("span",{style:{color:"#A1B567"}},"CustomException"),n("span",{style:{color:"#DBD7CA"}}," "),n("span",{style:{color:"#858585"}},"{")]),f(`
`),n("span",{class:"line"},[n("span",{style:{color:"#DBD7CA"}},"    "),n("span",{style:{color:"#CB7676"}},"public"),n("span",{style:{color:"#DBD7CA"}}," "),n("span",{style:{color:"#CB7676"}},"static"),n("span",{style:{color:"#DBD7CA"}}," "),n("span",{style:{color:"#CB7676"}},"boolean"),n("span",{style:{color:"#DBD7CA"}}," "),n("span",{style:{color:"#A1B567"}},"cekAngka"),n("span",{style:{color:"#858585"}},"("),n("span",{style:{color:"#CB7676"}},"int"),n("span",{style:{color:"#DBD7CA"}}," "),n("span",{style:{color:"#B8A965"}},"angka"),n("span",{style:{color:"#858585"}},")"),n("span",{style:{color:"#DBD7CA"}}," "),n("span",{style:{color:"#CB7676"}},"throws"),n("span",{style:{color:"#DBD7CA"}}," InvalidNumberException"),n("span",{style:{color:"#858585"}},"{")]),f(`
`),n("span",{class:"line"},[n("span",{style:{color:"#DBD7CA"}},"        "),n("span",{style:{color:"#4D9375"}},"if"),n("span",{style:{color:"#858585"}},"("),n("span",{style:{color:"#DBD7CA"}},"angka "),n("span",{style:{color:"#CB7676"}},"<"),n("span",{style:{color:"#DBD7CA"}}," "),n("span",{style:{color:"#6394BF"}},"0"),n("span",{style:{color:"#DBD7CA"}}," "),n("span",{style:{color:"#CB7676"}},"||"),n("span",{style:{color:"#DBD7CA"}}," angka "),n("span",{style:{color:"#CB7676"}},">"),n("span",{style:{color:"#DBD7CA"}}," "),n("span",{style:{color:"#6394BF"}},"20"),n("span",{style:{color:"#858585"}},")")]),f(`
`),n("span",{class:"line"},[n("span",{style:{color:"#DBD7CA"}},"            "),n("span",{style:{color:"#4D9375"}},"return"),n("span",{style:{color:"#DBD7CA"}}," "),n("span",{style:{color:"#D4976C"}},"true"),n("span",{style:{color:"#858585"}},";")]),f(`
`),n("span",{class:"line"},[n("span",{style:{color:"#DBD7CA"}},"        "),n("span",{style:{color:"#4D9375"}},"else"),n("span",{style:{color:"#DBD7CA"}}," ")]),f(`
`),n("span",{class:"line"},[n("span",{style:{color:"#DBD7CA"}},"            "),n("span",{style:{color:"#4D9375"}},"throw"),n("span",{style:{color:"#DBD7CA"}}," "),n("span",{style:{color:"#4D9375"}},"new"),n("span",{style:{color:"#DBD7CA"}}," "),n("span",{style:{color:"#A1B567"}},"InvalidNumberException"),n("span",{style:{color:"#858585"}},"();")]),f(`
`),n("span",{class:"line"},[n("span",{style:{color:"#DBD7CA"}},"    "),n("span",{style:{color:"#858585"}},"}")]),f(`
`),n("span",{class:"line"}),f(`
`),n("span",{class:"line"},[n("span",{style:{color:"#DBD7CA"}},"    "),n("span",{style:{color:"#CB7676"}},"public"),n("span",{style:{color:"#DBD7CA"}}," "),n("span",{style:{color:"#CB7676"}},"static"),n("span",{style:{color:"#DBD7CA"}}," "),n("span",{style:{color:"#CB7676"}},"void"),n("span",{style:{color:"#DBD7CA"}}," "),n("span",{style:{color:"#A1B567"}},"main"),n("span",{style:{color:"#858585"}},"("),n("span",{style:{color:"#CB7676"}},"String"),n("span",{style:{color:"#858585"}},"[]"),n("span",{style:{color:"#DBD7CA"}}," "),n("span",{style:{color:"#B8A965"}},"args"),n("span",{style:{color:"#858585"}},"){")]),f(`
`),n("span",{class:"line"},[n("span",{style:{color:"#DBD7CA"}},"        "),n("span",{style:{color:"#4D9375"}},"try"),n("span",{style:{color:"#858585"}},"{")]),f(`
`),n("span",{class:"line"},[n("span",{style:{color:"#DBD7CA"}},"            "),n("span",{style:{color:"#A1B567"}},"cekAngka"),n("span",{style:{color:"#858585"}},"("),n("span",{style:{color:"#6394BF"}},"20"),n("span",{style:{color:"#858585"}},");")]),f(`
`),n("span",{class:"line"},[n("span",{style:{color:"#DBD7CA"}},"        "),n("span",{style:{color:"#858585"}},"}"),n("span",{style:{color:"#DBD7CA"}}," "),n("span",{style:{color:"#4D9375"}},"catch"),n("span",{style:{color:"#DBD7CA"}}," "),n("span",{style:{color:"#858585"}},"("),n("span",{style:{color:"#DBD7CA"}},"Exception "),n("span",{style:{color:"#B8A965"}},"e"),n("span",{style:{color:"#858585"}},")"),n("span",{style:{color:"#DBD7CA"}}," "),n("span",{style:{color:"#858585"}},"{")]),f(`
`),n("span",{class:"line"},[n("span",{style:{color:"#DBD7CA"}},"            "),n("span",{style:{color:"#B8A965"}},"System"),n("span",{style:{color:"#858585"}},"."),n("span",{style:{color:"#B8A965"}},"out"),n("span",{style:{color:"#858585"}},"."),n("span",{style:{color:"#A1B567"}},"println"),n("span",{style:{color:"#858585"}},"("),n("span",{style:{color:"#C98A7D"}},'"Terjadi error : '),n("span",{style:{color:"#D4976C"}},"\\n"),n("span",{style:{color:"#C98A7D"}},'"'),n("span",{style:{color:"#DBD7CA"}}," "),n("span",{style:{color:"#CB7676"}},"+"),n("span",{style:{color:"#DBD7CA"}}," "),n("span",{style:{color:"#B8A965"}},"e"),n("span",{style:{color:"#858585"}},"."),n("span",{style:{color:"#A1B567"}},"getMessage"),n("span",{style:{color:"#858585"}},"());")]),f(`
`),n("span",{class:"line"},[n("span",{style:{color:"#DBD7CA"}},"        "),n("span",{style:{color:"#858585"}},"}")]),f(`
`),n("span",{class:"line"},[n("span",{style:{color:"#DBD7CA"}},"    "),n("span",{style:{color:"#858585"}},"}")]),f(`
`),n("span",{class:"line"},[n("span",{style:{color:"#858585"}},"}")])])]),n("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[n("code",null,[n("span",{class:"line"},[n("span",{style:{color:"#AB5959"}},"class"),n("span",{style:{color:"#393A34"}}," "),n("span",{style:{color:"#6C7834"}},"InvalidNumberException"),n("span",{style:{color:"#393A34"}}," "),n("span",{style:{color:"#AB5959"}},"extends"),n("span",{style:{color:"#393A34"}}," "),n("span",{style:{color:"#6C7834"}},"Exception"),n("span",{style:{color:"#393A34"}}," "),n("span",{style:{color:"#8E8F8B"}},"{")]),f(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393A34"}},"    "),n("span",{style:{color:"#AB5959"}},"public"),n("span",{style:{color:"#393A34"}}," "),n("span",{style:{color:"#6C7834"}},"InvalidNumberException"),n("span",{style:{color:"#8E8F8B"}},"(){")]),f(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393A34"}},"        "),n("span",{style:{color:"#A65E2B"}},"super"),n("span",{style:{color:"#8E8F8B"}},"("),n("span",{style:{color:"#B56959"}},'"Angka yang dimasukkan melanggar ketentuan"'),n("span",{style:{color:"#8E8F8B"}},");")]),f(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393A34"}},"    "),n("span",{style:{color:"#8E8F8B"}},"}")]),f(`
`),n("span",{class:"line"},[n("span",{style:{color:"#8E8F8B"}},"}")]),f(`
`),n("span",{class:"line"}),f(`
`),n("span",{class:"line"},[n("span",{style:{color:"#AB5959"}},"public"),n("span",{style:{color:"#393A34"}}," "),n("span",{style:{color:"#AB5959"}},"class"),n("span",{style:{color:"#393A34"}}," "),n("span",{style:{color:"#6C7834"}},"CustomException"),n("span",{style:{color:"#393A34"}}," "),n("span",{style:{color:"#8E8F8B"}},"{")]),f(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393A34"}},"    "),n("span",{style:{color:"#AB5959"}},"public"),n("span",{style:{color:"#393A34"}}," "),n("span",{style:{color:"#AB5959"}},"static"),n("span",{style:{color:"#393A34"}}," "),n("span",{style:{color:"#AB5959"}},"boolean"),n("span",{style:{color:"#393A34"}}," "),n("span",{style:{color:"#6C7834"}},"cekAngka"),n("span",{style:{color:"#8E8F8B"}},"("),n("span",{style:{color:"#AB5959"}},"int"),n("span",{style:{color:"#393A34"}}," "),n("span",{style:{color:"#8C862B"}},"angka"),n("span",{style:{color:"#8E8F8B"}},")"),n("span",{style:{color:"#393A34"}}," "),n("span",{style:{color:"#AB5959"}},"throws"),n("span",{style:{color:"#393A34"}}," InvalidNumberException"),n("span",{style:{color:"#8E8F8B"}},"{")]),f(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393A34"}},"        "),n("span",{style:{color:"#1C6B48"}},"if"),n("span",{style:{color:"#8E8F8B"}},"("),n("span",{style:{color:"#393A34"}},"angka "),n("span",{style:{color:"#AB5959"}},"<"),n("span",{style:{color:"#393A34"}}," "),n("span",{style:{color:"#296AA3"}},"0"),n("span",{style:{color:"#393A34"}}," "),n("span",{style:{color:"#AB5959"}},"||"),n("span",{style:{color:"#393A34"}}," angka "),n("span",{style:{color:"#AB5959"}},">"),n("span",{style:{color:"#393A34"}}," "),n("span",{style:{color:"#296AA3"}},"20"),n("span",{style:{color:"#8E8F8B"}},")")]),f(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393A34"}},"            "),n("span",{style:{color:"#1C6B48"}},"return"),n("span",{style:{color:"#393A34"}}," "),n("span",{style:{color:"#A65E2B"}},"true"),n("span",{style:{color:"#8E8F8B"}},";")]),f(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393A34"}},"        "),n("span",{style:{color:"#1C6B48"}},"else"),n("span",{style:{color:"#393A34"}}," ")]),f(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393A34"}},"            "),n("span",{style:{color:"#1C6B48"}},"throw"),n("span",{style:{color:"#393A34"}}," "),n("span",{style:{color:"#1C6B48"}},"new"),n("span",{style:{color:"#393A34"}}," "),n("span",{style:{color:"#6C7834"}},"InvalidNumberException"),n("span",{style:{color:"#8E8F8B"}},"();")]),f(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393A34"}},"    "),n("span",{style:{color:"#8E8F8B"}},"}")]),f(`
`),n("span",{class:"line"}),f(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393A34"}},"    "),n("span",{style:{color:"#AB5959"}},"public"),n("span",{style:{color:"#393A34"}}," "),n("span",{style:{color:"#AB5959"}},"static"),n("span",{style:{color:"#393A34"}}," "),n("span",{style:{color:"#AB5959"}},"void"),n("span",{style:{color:"#393A34"}}," "),n("span",{style:{color:"#6C7834"}},"main"),n("span",{style:{color:"#8E8F8B"}},"("),n("span",{style:{color:"#AB5959"}},"String"),n("span",{style:{color:"#8E8F8B"}},"[]"),n("span",{style:{color:"#393A34"}}," "),n("span",{style:{color:"#8C862B"}},"args"),n("span",{style:{color:"#8E8F8B"}},"){")]),f(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393A34"}},"        "),n("span",{style:{color:"#1C6B48"}},"try"),n("span",{style:{color:"#8E8F8B"}},"{")]),f(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393A34"}},"            "),n("span",{style:{color:"#6C7834"}},"cekAngka"),n("span",{style:{color:"#8E8F8B"}},"("),n("span",{style:{color:"#296AA3"}},"20"),n("span",{style:{color:"#8E8F8B"}},");")]),f(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393A34"}},"        "),n("span",{style:{color:"#8E8F8B"}},"}"),n("span",{style:{color:"#393A34"}}," "),n("span",{style:{color:"#1C6B48"}},"catch"),n("span",{style:{color:"#393A34"}}," "),n("span",{style:{color:"#8E8F8B"}},"("),n("span",{style:{color:"#393A34"}},"Exception "),n("span",{style:{color:"#8C862B"}},"e"),n("span",{style:{color:"#8E8F8B"}},")"),n("span",{style:{color:"#393A34"}}," "),n("span",{style:{color:"#8E8F8B"}},"{")]),f(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393A34"}},"            "),n("span",{style:{color:"#8C862B"}},"System"),n("span",{style:{color:"#8E8F8B"}},"."),n("span",{style:{color:"#8C862B"}},"out"),n("span",{style:{color:"#8E8F8B"}},"."),n("span",{style:{color:"#6C7834"}},"println"),n("span",{style:{color:"#8E8F8B"}},"("),n("span",{style:{color:"#B56959"}},'"Terjadi error : '),n("span",{style:{color:"#A65E2B"}},"\\n"),n("span",{style:{color:"#B56959"}},'"'),n("span",{style:{color:"#393A34"}}," "),n("span",{style:{color:"#AB5959"}},"+"),n("span",{style:{color:"#393A34"}}," "),n("span",{style:{color:"#8C862B"}},"e"),n("span",{style:{color:"#8E8F8B"}},"."),n("span",{style:{color:"#6C7834"}},"getMessage"),n("span",{style:{color:"#8E8F8B"}},"());")]),f(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393A34"}},"        "),n("span",{style:{color:"#8E8F8B"}},"}")]),f(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393A34"}},"    "),n("span",{style:{color:"#8E8F8B"}},"}")]),f(`
`),n("span",{class:"line"},[n("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),uk={__name:"18",setup(e){const t={srcSequence:"./pages/18_Custom Exception Class.md"};return U(Z),(s,a)=>{const r=dn,o=Io("click");return A(),G(xt,Be(Ce(t)),{default:ee(()=>[ek,n("div",tk,[n("div",nk,[sk,ak,ps((A(),V("div",rk,lk)),[[o,3]])]),n("div",ik,[W(r,gt({},{ranges:["all","1-5","12","all"]}),{default:ee(()=>[ck]),_:1},16)])])]),_:1},16)}}},pk=n("h1",null,"Exercise!",-1),dk=n("p",null,"Semua bisa karena terbiasa",-1),fk={__name:"19",setup(e){const t={layout:"center",class:"text-center",srcSequence:"./pages/19_Cover Exercise.md"};return U(Z),(s,a)=>(A(),G(rt,Be(Ce(t)),{default:ee(()=>[pk,dk]),_:1},16))}},mk=n("h1",null,[f("Exercise "),n("kbd",null,[n("span",{class:"text-teal"},"IllegalGradeException.java & Test.java")])],-1),hk={class:"grid grid-cols-2 gap-2"},gk=n("div",{class:"text-sm"},[n("p",null,[f("Buatlah "),n("kbd",null,"custom exception class"),f(),n("code",null,"IllegalGradeException"),f(" yang meng-extend "),n("code",null,"Exception"),f(" dengan message "),n("code",null,"Nilai tidak valid!"),f(".")]),n("p",null,[f("Buat juga class "),n("code",null,"Test"),f(" yang berisi method main dari program pada file "),n("code",null,"Test.java"),f(" berisi input nilai.")]),n("p",null,[f("Buatlah baris try-catch untuk menampilkan "),n("code",null,"IllegalGradeException"),f(" ketika nilai kurang dari 0 atau lebih besar dari 100. Tampilkan "),n("code",null,"Nilai anda adalah [NILAI]"),f(" ketika nilai tidak melanggar aturan tadi.")])],-1),yk={class:"mt-6 grid grid-cols-[0.2fr_1.5fr] items-center text-sm gap-3"},vk=n("span",{class:"text-xs text-white font-extrabold uppercase text-yellow"},"Input",-1),_k=n("span",null,"Nilai berupa integer",-1),xk=n("span",{class:"text-xs text-white font-extrabold uppercase text-yellow"},"Output",-1),bk={class:"mt-4 flex flex-col mb-2 gap-0"},kk=n("pre",{class:"shiki-container"},[n("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[n("code",null,[n("span",{class:"line"},[n("span",{style:{color:"#758575"}},"# ketika try-catch menemukan exception")]),f(`
`),n("span",{class:"line"},[n("span",{style:{color:"#DBD7CA"}},"InvalidGradeException: Nilai tidak valid"),n("span",{style:{color:"#CB7676"}},"!")]),f(`
`),n("span",{class:"line"},[n("span",{style:{color:"#DBD7CA"}},"    at Test.main"),n("span",{style:{color:"#858585"}},"("),n("span",{style:{color:"#DBD7CA"}},"blablabla"),n("span",{style:{color:"#858585"}},")")]),f(`
`),n("span",{class:"line"}),f(`
`),n("span",{class:"line"},[n("span",{style:{color:"#758575"}},"# ketika tidak ada exception")]),f(`
`),n("span",{class:"line"},[n("span",{style:{color:"#DBD7CA"}},"Nilai anda adalah 80")])])]),n("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[n("code",null,[n("span",{class:"line"},[n("span",{style:{color:"#A0ADA0"}},"# ketika try-catch menemukan exception")]),f(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393A34"}},"InvalidGradeException: Nilai tidak valid"),n("span",{style:{color:"#AB5959"}},"!")]),f(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393A34"}},"    at Test.main"),n("span",{style:{color:"#8E8F8B"}},"("),n("span",{style:{color:"#393A34"}},"blablabla"),n("span",{style:{color:"#8E8F8B"}},")")]),f(`
`),n("span",{class:"line"}),f(`
`),n("span",{class:"line"},[n("span",{style:{color:"#A0ADA0"}},"# ketika tidak ada exception")]),f(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393A34"}},"Nilai anda adalah 80")])])])],-1),Ek={__name:"20",setup(e){const t={layout:"center",srcSequence:"./pages/20_Exercise.md"};return U(Z),(s,a)=>{const r=dn;return A(),G(rt,Be(Ce(t)),{default:ee(()=>[mk,n("div",hk,[gk,n("div",yk,[vk,_k,xk,n("div",bk,[W(r,gt({},{ranges:[""]}),{default:ee(()=>[kk]),_:1},16)])])])]),_:1},16)}}},wk=n("h1",null,"Assignment!",-1),Ck=n("p",null,"Seperti biasa, setiap selesai praktikum pasti ada tugas",-1),Ak={__name:"21",setup(e){const t={layout:"center",class:"text-center",srcSequence:"./pages/21_Cover Assignment.md"};return U(Z),(s,a)=>(A(),G(rt,Be(Ce(t)),{default:ee(()=>[wk,Ck]),_:1},16))}},Bk=n("h1",null,[f("Assignment 8 Soal 1 "),n("kbd",null,[f("Simpan di folder "),n("span",{class:"text-yellow"},"soal01"),f(" hingga "),n("span",{class:"text-yellow"},"soal04")])],-1),Sk=n("div",{class:"center row"},[n("p",null,"Pilih 4 buah unchecked exception dari list dibawah, dan cari tahu:"),n("div",{class:"grid grid-cols-2 gap-y-10 gap-x-16 mb-4"},[n("div",null,[n("ul",null,[n("li",null,"InterruptedIOException"),n("li",null,"UnsupportedEncodingException"),n("li",null,"UTFDataFormatException"),n("li",null,"ObjectStreamException"),n("li",null,"InvalidClassException")])]),n("div",null,[n("ul",null,[n("li",null,"InvalidObjectException"),n("li",null,"NotSerializableException"),n("li",null,"StreamCorruptedException"),n("li",null,"WriteAbortedException")])])]),n("hr"),n("p",null,[f("Jelaskan secara deskriptif tentang "),n("kbd",null,"Class"),f(" tersebut (tulis dalam bentuk comment) serta berikan contoh kode yang mengeluarkan keempat "),n("kbd",null,"Exception"),f(" tersebut!")]),n("p",null,[n("span",{class:"text-xs"},"PS: Kode harus mengeluarkan Exception dan tidak perlu berhasil compile")])],-1),Ok={__name:"22",setup(e){const t={layout:"center",srcSequence:"./pages/22_Assignment1.md"};return U(Z),(s,a)=>(A(),G(rt,Be(Ce(t)),{default:ee(()=>[Bk,Sk]),_:1},16))}},Tk=n("h1",null,[f("Assignment 8 Soal 2 "),n("kbd",null,[f("Simpan di folder "),n("span",{class:"text-yellow"},"soal05"),f(" hingga "),n("span",{class:"text-yellow"},"soal08")])],-1),Pk=n("div",{class:"center row"},[n("p",null,"Pilih 4 buah unchecked exception dari list dibawah, dan cari tahu:"),n("div",{class:"grid grid-cols-2 gap-y-10 gap-x-16 mb-4"},[n("div",null,[n("ul",null,[n("li",null,"ArithmeticException"),n("li",null,"ArrayIndexOutOfBoundsException"),n("li",null,"ArrayStoreException"),n("li",null,"ClassCastException"),n("li",null,"EnumConstantNotPresentException")])]),n("div",null,[n("ul",null,[n("li",null,"NumberFormatException"),n("li",null,"NegativeArraySizeException"),n("li",null,"NullPointerException"),n("li",null,"TypeNotPresentException"),n("li",null,"UnsupportedOperationException")])])]),n("hr"),n("p",null,[f("Jelaskan secara deskriptif tentang "),n("kbd",null,"Class"),f(" tersebut (tulis dalam bentuk comment) serta berikan contoh kode yang mengeluarkan keempat "),n("kbd",null,"Exception"),f(" tersebut!")]),n("p",null,[f("Kemudian wrap ke dalam "),n("span",{class:"text-yellow"},"blok try-catch"),f(" untuk menampilkan pesan "),n("kbd",null,"Exception"),f("!")])],-1),Dk={__name:"23",setup(e){const t={layout:"center",srcSequence:"./pages/23_Assignment2.md"};return U(Z),(s,a)=>(A(),G(rt,Be(Ce(t)),{default:ee(()=>[Tk,Pk]),_:1},16))}},$k=n("h1",null,[f("Assignment 8 Soal 3 "),n("kbd",null,[f("Simpan di folder "),n("span",{class:"text-yellow"},"soal09")])],-1),Fk=n("div",{class:"center"},[n("p",null,[f("Buat "),n("span",{class:"text-orange"},"Custom Exception"),f(" class ala kalian sendiri dengan meng-extend class "),n("kbd",null,"Exception"),f("!")]),n("p",null,"Penamaan kelas dibebaskan asal representatif dengan error yang dikeluarkan!"),n("p",null,"Buat isi pesan Exception sejelas mungkin!"),n("p",null,"Jenis exception tidak boleh sama dengan yang sudah dijelaskan!"),n("hr"),n("p",null,[f("Buat class "),n("kbd",null,"TestException.java"),f(" untuk testing dan juga method yang dapat melempar class "),n("kbd",null,"Exception"),f(" yang telah anda buat!")]),n("p",null,"Test method tersebut dan wrap dalam blok try-catch, kemudian tampilkan pesan errornya!")],-1),Mk={__name:"24",setup(e){const t={layout:"center",srcSequence:"./pages/24_Assignment3.md"};return U(Z),(s,a)=>(A(),G(rt,Be(Ce(t)),{default:ee(()=>[$k,Fk]),_:1},16))}},jk=n("h1",null,"Teknis Pengumpulan",-1),Ik=n("p",null,[f("Pengerjaan dan pengumpulan tugas akan dilakukan di "),n("strong",null,"Github Classroom")],-1),Nk=n("div",{grid:"~ cols-2 gap-2",style:{"margin-top":"48px"}},[n("div",null,[n("h4",null,"Kelas A:"),n("p",null,[n("a",{href:"https://classroom.github.com/a/7QgLV9vd",target:"_blank",rel:"noopener"},"Link Tugas Kelas A")])]),n("div",null,[n("h4",null,"Kelas B:"),n("p",null,[n("a",{href:"https://classroom.github.com/a/4MPEyNHW",target:"_blank",rel:"noopener"},"Link Tugas Kelas B")])])],-1),Rk=n("br",null,null,-1),Lk={__name:"25",setup(e){const t={layout:"center",class:"text-center",srcSequence:"./pages/25_Teknis Pengumpulan 1.md"};return U(Z),(s,a)=>(A(),G(rt,Be(Ce(t)),{default:ee(()=>[jk,Ik,Nk,Rk,f(" Accept assignment terlebih dahulu lalu link akun Github dengan slot nama yang sesuai di Github Classroom ")]),_:1},16))}},Hk=n("h1",null,"Teknis Pengumpulan",-1),Vk=n("div",null,[n("p",null,[f("Format setiap file "),n("code",null,".java"),f(" didahulukan dengan Nama, NPM, Kelas, Tanggal, dan Deskripsi")])],-1),qk=n("p",null,"Cara menambah comment di java",-1),Uk=n("pre",{class:"shiki-container"},[n("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[n("code",null,[n("span",{class:"line"},[n("span",{style:{color:"#758575"}},"// untuk single line")]),f(`
`),n("span",{class:"line"},[n("span",{style:{color:"#758575"}},"/* untuk multiple line */")])])]),n("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[n("code",null,[n("span",{class:"line"},[n("span",{style:{color:"#A0ADA0"}},"// untuk single line")]),f(`
`),n("span",{class:"line"},[n("span",{style:{color:"#A0ADA0"}},"/* untuk multiple line */")])])])],-1),Kk=n("p",null,"Contoh Format",-1),zk=n("pre",{class:"shiki-container"},[n("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[n("code",null,[n("span",{class:"line"},[n("span",{style:{color:"#758575"}},"/*")]),f(`
`),n("span",{class:"line"},[n("span",{style:{color:"#758575"}},"  Nama	: Jane Doe")]),f(`
`),n("span",{class:"line"},[n("span",{style:{color:"#758575"}},"  NPM		: 99")]),f(`
`),n("span",{class:"line"},[n("span",{style:{color:"#758575"}},"  Kelas		: A")]),f(`
`),n("span",{class:"line"},[n("span",{style:{color:"#758575"}},"  Tanggal	: 1 September 2021")]),f(`
`),n("span",{class:"line"},[n("span",{style:{color:"#758575"}},"  Deskripsi	: Class jawaban exercise-01 soal-01")]),f(`
`),n("span",{class:"line"},[n("span",{style:{color:"#758575"}},"*/")])])]),n("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[n("code",null,[n("span",{class:"line"},[n("span",{style:{color:"#A0ADA0"}},"/*")]),f(`
`),n("span",{class:"line"},[n("span",{style:{color:"#A0ADA0"}},"  Nama	: Jane Doe")]),f(`
`),n("span",{class:"line"},[n("span",{style:{color:"#A0ADA0"}},"  NPM		: 99")]),f(`
`),n("span",{class:"line"},[n("span",{style:{color:"#A0ADA0"}},"  Kelas		: A")]),f(`
`),n("span",{class:"line"},[n("span",{style:{color:"#A0ADA0"}},"  Tanggal	: 1 September 2021")]),f(`
`),n("span",{class:"line"},[n("span",{style:{color:"#A0ADA0"}},"  Deskripsi	: Class jawaban exercise-01 soal-01")]),f(`
`),n("span",{class:"line"},[n("span",{style:{color:"#A0ADA0"}},"*/")])])])],-1),Wk={__name:"26",setup(e){const t={srcSequence:"./pages/26_Teknis Pengumpulan 2.md"};return U(Z),(s,a)=>{const r=dn;return A(),G(xt,Be(Ce(t)),{default:ee(()=>[Hk,Vk,qk,W(r,gt({},{ranges:["all"]}),{default:ee(()=>[Uk]),_:1},16),Kk,W(r,gt({},{ranges:["all"]}),{default:ee(()=>[zk]),_:1},16)]),_:1},16)}}},Yk=n("h1",null,"Deadline Pengumpulan \u231A",-1),Gk=n("div",{grid:"~ cols-2 gap-32",style:{"margin-top":"48px"}},[n("div",null,[n("h4",null,"Kelas A:"),n("p",null,"7 November 2022, 23:59 WIB")]),n("div",null,[n("h4",null,"Kelas B:"),n("p",null,"8 November 2022, 23:59 WIB")])],-1),Zk=n("br",null,null,-1),Jk=n("p",null,[n("strong",null,"Waktu yang dilihat adalah waktu last commit."),n("br"),f(" Jika ada yang commit melewati deadline walaupun sudah commit sebelumnya akan dianggap telat")],-1),Qk={__name:"27",setup(e){const t={layout:"center",class:"text-center",srcSequence:"./pages/27_Deadline.md"};return U(Z),(s,a)=>(A(),G(rt,Be(Ce(t)),{default:ee(()=>[Yk,Gk,Zk,Jk]),_:1},16))}},Xk=n("h1",null,"Terima Kasih!",-1),e8=n("p",null,"Do you have any questions? Please use respective class discussion channel on Discord.",-1),t8=n("p",null,"Semangat terus menjalani kuilahnya!! \u{1F525}\u{1F525}\u{1F525}",-1),n8={__name:"28",setup(e){const t={layout:"center",class:"text-center",srcSequence:"./pages/28_Terima Kasih.md"};return U(Z),(s,a)=>(A(),G(rt,Be(Ce(t)),{default:ee(()=>[Xk,e8,t8]),_:1},16))}},s8=[{path:"1",name:"page-1",component:n_,meta:{theme:"default",highlighter:"shiki",title:"Materi 08 - PBO",titleTemplate:"%s",info:`# Materi 8 - PBO
[Error and Exception Handling]

> Asisten Praktikum Pemrograman Berbasis Objek 2022  
`,lineNumbers:!1,drawings:{persist:!1},download:!0,exportFilename:"materi-pbo-08",css:"unocss",slide:{raw:`---
theme: default
highlighter: shiki
#> Slide info
# ganti N jadi nomor pertemuan
title: Materi 08 - PBO
titleTemplate: '%s'
info: |
  # Materi 8 - PBO
  [Error and Exception Handling]

  > Asisten Praktikum Pemrograman Berbasis Objek 2022  

#> Slide settings
lineNumbers: false
drawings:
  persist: false
download: true
exportFilename: 'materi-pbo-08' # ganti N jadi nomor pertemuan
css: unocss
---

# Praktikum<br>Pemrograman<br>Berbasis Objek

**Pertemuan 8**
`,title:"Materi 08 - PBO",level:1,content:`# Praktikum<br>Pemrograman<br>Berbasis Objek

**Pertemuan 8**`,frontmatter:{theme:"default",highlighter:"shiki",title:"Materi 08 - PBO",titleTemplate:"%s",info:`# Materi 8 - PBO
[Error and Exception Handling]

> Asisten Praktikum Pemrograman Berbasis Objek 2022  
`,lineNumbers:!1,drawings:{persist:!1},download:!0,exportFilename:"materi-pbo-08",css:"unocss"},index:0,start:0,end:26,notesHTML:"",filepath:"/home/runner/work/materi-PBO-08/materi-PBO-08/slides.md",id:0,no:1},__clicksElements:[],__preloaded:!1}},{path:"2",name:"page-2",component:i_,meta:{layout:"intro",title:"Review Time \u{1F552}",srcSequence:"./pages/02_Review.md",slide:{raw:null,title:"Review Time \u{1F552}",level:1,content:`# Review Time \u{1F552}

<div class='p-4 text-lg'>
<span class='text-orange'>1.</span> Type Wrapper <br>
<span class='text-orange'>2.</span> Enum Class <br>
<span class='text-orange'>3.</span> Inner Class <br>
<span class='text-orange'>4.</span> Anonymous Class <br>
<span class='text-orange'>5.</span> UTS <br>
</div>`,frontmatter:{layout:"intro",title:"Review Time \u{1F552}",srcSequence:"./pages/02_Review.md"},index:1,start:0,end:14,source:{filepath:"/home/runner/work/materi-PBO-08/materi-PBO-08/pages/02_Review.md",raw:`---
layout: intro
---

# Review Time \u{1F552}

<div class='p-4 text-lg'>
<span class='text-orange'>1.</span> Type Wrapper <br>
<span class='text-orange'>2.</span> Enum Class <br>
<span class='text-orange'>3.</span> Inner Class <br>
<span class='text-orange'>4.</span> Anonymous Class <br>
<span class='text-orange'>5.</span> UTS <br>
</div>
`,title:"Review Time \u{1F552}",level:1,content:`# Review Time \u{1F552}

<div class='p-4 text-lg'>
<span class='text-orange'>1.</span> Type Wrapper <br>
<span class='text-orange'>2.</span> Enum Class <br>
<span class='text-orange'>3.</span> Inner Class <br>
<span class='text-orange'>4.</span> Anonymous Class <br>
<span class='text-orange'>5.</span> UTS <br>
</div>`,frontmatter:{layout:"intro",title:"Review Time \u{1F552}"},index:0,start:0,end:14},inline:{raw:`---
src: ./pages/02_Review.md 
---
`,content:"",frontmatter:{},index:1,start:26,end:30},filepath:"/home/runner/work/materi-PBO-08/materi-PBO-08/pages/02_Review.md",notesHTML:"",id:1,no:2},__clicksElements:[],__preloaded:!1}},{path:"3",name:"page-3",component:f_,meta:{layout:"center",class:"text-center",title:"Materi Pertemuan 8",srcSequence:"./pages/03_Cover Materi Pertemuan.md",slide:{raw:null,title:"Materi Pertemuan 8",level:1,content:`# Materi Pertemuan 8

Gambaran Materi Pembelajaran Hari Ini`,frontmatter:{layout:"center",class:"text-center",title:"Materi Pertemuan 8",srcSequence:"./pages/03_Cover Materi Pertemuan.md"},index:2,start:0,end:9,source:{filepath:"/home/runner/work/materi-PBO-08/materi-PBO-08/pages/03_Cover Materi Pertemuan.md",raw:`---
layout: center
class: text-center
---

# Materi Pertemuan 8

Gambaran Materi Pembelajaran Hari Ini
`,title:"Materi Pertemuan 8",level:1,content:`# Materi Pertemuan 8

Gambaran Materi Pembelajaran Hari Ini`,frontmatter:{layout:"center",class:"text-center",title:"Materi Pertemuan 8"},index:0,start:0,end:9},inline:{raw:`---
src: ./pages/03_Cover Materi Pertemuan.md 
---
`,content:"",frontmatter:{},index:2,start:30,end:34},filepath:"/home/runner/work/materi-PBO-08/materi-PBO-08/pages/03_Cover Materi Pertemuan.md",notesHTML:"",id:2,no:3},__clicksElements:[],__preloaded:!1}},{path:"4",name:"page-4",component:y_,meta:{title:"Materi Pertemuan 8",srcSequence:"./pages/04_Materi Pertemuan 08.md",slide:{raw:null,title:"Materi Pertemuan 8",level:1,content:`# Materi Pertemuan 8

<div class="grid grid-cols-2 gap-y-10 gap-x-6 mt-16">
<div class='flex-row'>
<div class='text-orange text-4xl font-extrabold'>01</div>
<div class='font-bold text-xl'>Exception & Error Class</div>
<div class='font-light text-sm'>Mengenal Exception & Error beserta class yang ada</div>
</div>
<div class='flex-row'>
<div class='text-orange text-4xl font-extrabold'>02</div>
<div class='font-bold text-xl'>Exception Handling: Try-Catch</div>
<div class='font-light text-sm'>Mengenal cara Exception Handling menggunakan Try-Catch</div>
</div>
<div class='flex-row'>
<div class='text-orange text-4xl font-extrabold'>03</div>
<div class='font-bold text-xl'>Exception Handling: Throw & Throws</div>
<div class='font-light text-sm'>Mengenal cara melempar Exception menggunakan Throw & Throws</div>
</div>
<div class='flex-row'>
<div class='text-orange text-4xl font-extrabold'>04</div>
<div class='font-bold text-xl'>Custom Exception Class</div>
<div class='font-light text-sm'>Mengenal cara membuat Exception Class secara custom</div>
</div>
</div>`,frontmatter:{title:"Materi Pertemuan 8",srcSequence:"./pages/04_Materi Pertemuan 08.md"},index:3,start:0,end:25,source:{filepath:"/home/runner/work/materi-PBO-08/materi-PBO-08/pages/04_Materi Pertemuan 08.md",raw:`# Materi Pertemuan 8

<div class="grid grid-cols-2 gap-y-10 gap-x-6 mt-16">
<div class='flex-row'>
<div class='text-orange text-4xl font-extrabold'>01</div>
<div class='font-bold text-xl'>Exception & Error Class</div>
<div class='font-light text-sm'>Mengenal Exception & Error beserta class yang ada</div>
</div>
<div class='flex-row'>
<div class='text-orange text-4xl font-extrabold'>02</div>
<div class='font-bold text-xl'>Exception Handling: Try-Catch</div>
<div class='font-light text-sm'>Mengenal cara Exception Handling menggunakan Try-Catch</div>
</div>
<div class='flex-row'>
<div class='text-orange text-4xl font-extrabold'>03</div>
<div class='font-bold text-xl'>Exception Handling: Throw & Throws</div>
<div class='font-light text-sm'>Mengenal cara melempar Exception menggunakan Throw & Throws</div>
</div>
<div class='flex-row'>
<div class='text-orange text-4xl font-extrabold'>04</div>
<div class='font-bold text-xl'>Custom Exception Class</div>
<div class='font-light text-sm'>Mengenal cara membuat Exception Class secara custom</div>
</div>
</div>
`,title:"Materi Pertemuan 8",level:1,content:`# Materi Pertemuan 8

<div class="grid grid-cols-2 gap-y-10 gap-x-6 mt-16">
<div class='flex-row'>
<div class='text-orange text-4xl font-extrabold'>01</div>
<div class='font-bold text-xl'>Exception & Error Class</div>
<div class='font-light text-sm'>Mengenal Exception & Error beserta class yang ada</div>
</div>
<div class='flex-row'>
<div class='text-orange text-4xl font-extrabold'>02</div>
<div class='font-bold text-xl'>Exception Handling: Try-Catch</div>
<div class='font-light text-sm'>Mengenal cara Exception Handling menggunakan Try-Catch</div>
</div>
<div class='flex-row'>
<div class='text-orange text-4xl font-extrabold'>03</div>
<div class='font-bold text-xl'>Exception Handling: Throw & Throws</div>
<div class='font-light text-sm'>Mengenal cara melempar Exception menggunakan Throw & Throws</div>
</div>
<div class='flex-row'>
<div class='text-orange text-4xl font-extrabold'>04</div>
<div class='font-bold text-xl'>Custom Exception Class</div>
<div class='font-light text-sm'>Mengenal cara membuat Exception Class secara custom</div>
</div>
</div>`,frontmatter:{title:"Materi Pertemuan 8"},index:0,start:0,end:25},inline:{raw:`---
src: ./pages/04_Materi Pertemuan 08.md 
---
`,content:"",frontmatter:{},index:3,start:34,end:38},filepath:"/home/runner/work/materi-PBO-08/materi-PBO-08/pages/04_Materi Pertemuan 08.md",notesHTML:"",id:3,no:4},__clicksElements:[],__preloaded:!1}},{path:"5",name:"page-5",component:x_,meta:{layout:"center",class:"text-center",srcSequence:"./pages/05_Cover Exception and Error Class.md",slide:{raw:null,content:`<span class='text-6xl font-extrabold color-orange p-4 border border-solid border-orange rounded-lg'>
01
</span>

<h1 class='font-bold mt-12'>
Exception & Error Class
</h1>`,frontmatter:{layout:"center",class:"text-center",srcSequence:"./pages/05_Cover Exception and Error Class.md"},index:4,start:0,end:13,source:{filepath:"/home/runner/work/materi-PBO-08/materi-PBO-08/pages/05_Cover Exception and Error Class.md",raw:`---
layout: center
class: text-center
---

<span class='text-6xl font-extrabold color-orange p-4 border border-solid border-orange rounded-lg'>
01
</span>

<h1 class='font-bold mt-12'>
Exception & Error Class
</h1>
`,content:`<span class='text-6xl font-extrabold color-orange p-4 border border-solid border-orange rounded-lg'>
01
</span>

<h1 class='font-bold mt-12'>
Exception & Error Class
</h1>`,frontmatter:{layout:"center",class:"text-center"},index:0,start:0,end:13},inline:{raw:`---
src: ./pages/05_Cover Exception and Error Class.md 
---
`,content:"",frontmatter:{},index:4,start:38,end:42},filepath:"/home/runner/work/materi-PBO-08/materi-PBO-08/pages/05_Cover Exception and Error Class.md",notesHTML:"",id:4,no:5},__clicksElements:[],__preloaded:!1}},{path:"6",name:"page-6",component:A_,meta:{title:"Exception & Error Class",srcSequence:"./pages/06_Exception and Error Class.md",slide:{raw:null,title:"Exception & Error Class",level:1,content:`# Exception & Error Class

 <br>

**Exception** & **Error** merupakan sebuah **kondisi abnormal** yang terjadi saat menjalankan suatu program. Keduanya merupakan subclass dari **Throwable class**.

Perbedaannya adalah :
- **Error** diakibatkan oleh **lack of system** (kecacatan sistem) sehingga kita sulit untuk mendeteksi maupun menangani error tersebut.
- **Exception** diakibatkan oleh **kesalahan kode** yg ditulis oleh **developer**. Exception mudah ditangani dan dideteksi.`,frontmatter:{title:"Exception & Error Class",srcSequence:"./pages/06_Exception and Error Class.md"},index:5,start:0,end:10,source:{filepath:"/home/runner/work/materi-PBO-08/materi-PBO-08/pages/06_Exception and Error Class.md",raw:`# Exception & Error Class

 <br>

**Exception** & **Error** merupakan sebuah **kondisi abnormal** yang terjadi saat menjalankan suatu program. Keduanya merupakan subclass dari **Throwable class**.

Perbedaannya adalah :
- **Error** diakibatkan oleh **lack of system** (kecacatan sistem) sehingga kita sulit untuk mendeteksi maupun menangani error tersebut.
- **Exception** diakibatkan oleh **kesalahan kode** yg ditulis oleh **developer**. Exception mudah ditangani dan dideteksi.
`,title:"Exception & Error Class",level:1,content:`# Exception & Error Class

 <br>

**Exception** & **Error** merupakan sebuah **kondisi abnormal** yang terjadi saat menjalankan suatu program. Keduanya merupakan subclass dari **Throwable class**.

Perbedaannya adalah :
- **Error** diakibatkan oleh **lack of system** (kecacatan sistem) sehingga kita sulit untuk mendeteksi maupun menangani error tersebut.
- **Exception** diakibatkan oleh **kesalahan kode** yg ditulis oleh **developer**. Exception mudah ditangani dan dideteksi.`,frontmatter:{title:"Exception & Error Class"},index:0,start:0,end:10},inline:{raw:`---
src: ./pages/06_Exception and Error Class.md 
---
`,content:"",frontmatter:{},index:5,start:42,end:46},filepath:"/home/runner/work/materi-PBO-08/materi-PBO-08/pages/06_Exception and Error Class.md",notesHTML:"",id:5,no:6},__clicksElements:[],__preloaded:!1}},{path:"7",name:"page-7",component:P_,meta:{title:"Exception & Error Class",srcSequence:"./pages/07_Diagram and Example.md",slide:{raw:null,title:"Exception & Error Class",level:1,content:`# Exception & Error Class
Berikut adalah contoh perbedaan lebih lanjut dari Error dan Exception:

<div class="grid grid-cols-2 gap-y-10 gap-x-6 mt-8">
<div class='flex-row'>
<div class='text-xl'>
<span class='text-red'>VirtualMachineError</span> mengindikasikan <strong>VM Java</strong> yang <strong>rusak</strong> dan <strong>kekurangan sumber daya</strong> untuk beroperasi. Error seperti ini sebaiknya <strong>tidak ditangani</strong> atau <strong>di-handle</strong>.
</div>
<br>
<div class='text-xl'>
<span class='text-blue'>ArithmeticException</span> mengindikasikan adanya <strong>kondisi aritmatika</strong> yang <strong>diluar penalaran</strong>. <strong>Exception</strong> seperti ini sebaiknya <strong>ditangani</strong> atau <strong>di-handle</strong> sehingga program dapat terus beroperasi.
</div>
</div>
<div class='flex-row'>
<img src="/img/diagram.png">
</div>
</div>`,frontmatter:{title:"Exception & Error Class",srcSequence:"./pages/07_Diagram and Example.md"},index:6,start:0,end:17,source:{filepath:"/home/runner/work/materi-PBO-08/materi-PBO-08/pages/07_Diagram and Example.md",raw:`# Exception & Error Class
Berikut adalah contoh perbedaan lebih lanjut dari Error dan Exception:

<div class="grid grid-cols-2 gap-y-10 gap-x-6 mt-8">
<div class='flex-row'>
<div class='text-xl'>
<span class='text-red'>VirtualMachineError</span> mengindikasikan <strong>VM Java</strong> yang <strong>rusak</strong> dan <strong>kekurangan sumber daya</strong> untuk beroperasi. Error seperti ini sebaiknya <strong>tidak ditangani</strong> atau <strong>di-handle</strong>.
</div>
<br>
<div class='text-xl'>
<span class='text-blue'>ArithmeticException</span> mengindikasikan adanya <strong>kondisi aritmatika</strong> yang <strong>diluar penalaran</strong>. <strong>Exception</strong> seperti ini sebaiknya <strong>ditangani</strong> atau <strong>di-handle</strong> sehingga program dapat terus beroperasi.
</div>
</div>
<div class='flex-row'>
<img src="/img/diagram.png">
</div>
</div>`,title:"Exception & Error Class",level:1,content:`# Exception & Error Class
Berikut adalah contoh perbedaan lebih lanjut dari Error dan Exception:

<div class="grid grid-cols-2 gap-y-10 gap-x-6 mt-8">
<div class='flex-row'>
<div class='text-xl'>
<span class='text-red'>VirtualMachineError</span> mengindikasikan <strong>VM Java</strong> yang <strong>rusak</strong> dan <strong>kekurangan sumber daya</strong> untuk beroperasi. Error seperti ini sebaiknya <strong>tidak ditangani</strong> atau <strong>di-handle</strong>.
</div>
<br>
<div class='text-xl'>
<span class='text-blue'>ArithmeticException</span> mengindikasikan adanya <strong>kondisi aritmatika</strong> yang <strong>diluar penalaran</strong>. <strong>Exception</strong> seperti ini sebaiknya <strong>ditangani</strong> atau <strong>di-handle</strong> sehingga program dapat terus beroperasi.
</div>
</div>
<div class='flex-row'>
<img src="/img/diagram.png">
</div>
</div>`,frontmatter:{title:"Exception & Error Class"},index:0,start:0,end:17},inline:{raw:`---
src: ./pages/07_Diagram and Example.md 
---
`,content:"",frontmatter:{},index:6,start:46,end:50},filepath:"/home/runner/work/materi-PBO-08/materi-PBO-08/pages/07_Diagram and Example.md",notesHTML:"",id:6,no:7},__clicksElements:[],__preloaded:!1}},{path:"8",name:"page-8",component:F_,meta:{title:"Exception Class",srcSequence:"./pages/08_Exception Class.md",slide:{raw:null,title:"Exception Class",level:1,content:`# Exception Class

<div class="mt-8">

Merupakan class berbentuk **Throwable** yang mengindikasikan suatu **kondisi abnormal** yang terjadi saat menjalankan program yang diakibatkan oleh kesalahan developer.

<div class="mt-12">

Exception dibagi menjadi 2 :
- #### Checked Exception
Merupakan exception yang **dicek saat compile time**. Jika tidak ditangani, maka akan menimbulkan error ketika pertama kali dijalankan.
- #### Unchecked Exception
Merupakan exception yang **tidak dicek saat compile time**. Jika tidak ditangani, maka tidak akan menimbulkan error ketika pertama kali dijalankan.

</div>
</div>`,frontmatter:{title:"Exception Class",srcSequence:"./pages/08_Exception Class.md"},index:7,start:0,end:17,source:{filepath:"/home/runner/work/materi-PBO-08/materi-PBO-08/pages/08_Exception Class.md",raw:`# Exception Class

<div class="mt-8">

Merupakan class berbentuk **Throwable** yang mengindikasikan suatu **kondisi abnormal** yang terjadi saat menjalankan program yang diakibatkan oleh kesalahan developer.

<div class="mt-12">

Exception dibagi menjadi 2 :
- #### Checked Exception
Merupakan exception yang **dicek saat compile time**. Jika tidak ditangani, maka akan menimbulkan error ketika pertama kali dijalankan.
- #### Unchecked Exception
Merupakan exception yang **tidak dicek saat compile time**. Jika tidak ditangani, maka tidak akan menimbulkan error ketika pertama kali dijalankan.

</div>
</div>
`,title:"Exception Class",level:1,content:`# Exception Class

<div class="mt-8">

Merupakan class berbentuk **Throwable** yang mengindikasikan suatu **kondisi abnormal** yang terjadi saat menjalankan program yang diakibatkan oleh kesalahan developer.

<div class="mt-12">

Exception dibagi menjadi 2 :
- #### Checked Exception
Merupakan exception yang **dicek saat compile time**. Jika tidak ditangani, maka akan menimbulkan error ketika pertama kali dijalankan.
- #### Unchecked Exception
Merupakan exception yang **tidak dicek saat compile time**. Jika tidak ditangani, maka tidak akan menimbulkan error ketika pertama kali dijalankan.

</div>
</div>`,frontmatter:{title:"Exception Class"},index:0,start:0,end:17},inline:{raw:`---
src: ./pages/08_Exception Class.md 
---
`,content:"",frontmatter:{},index:7,start:50,end:54},filepath:"/home/runner/work/materi-PBO-08/materi-PBO-08/pages/08_Exception Class.md",notesHTML:"",id:7,no:8},__clicksElements:[],__preloaded:!1}},{path:"9",name:"page-9",component:vb,meta:{clicks:2,title:"Contoh **Checked** Exception",srcSequence:"./pages/09_Contoh Checked Exception.md",slide:{raw:null,title:"Contoh **Checked** Exception",level:1,content:`# Contoh **Checked** Exception

<div class="grid grid-cols-2 gap-y-10 gap-x-6 mt-8">
<div class='flex-row'>

\`\`\`java {all|12|all}
import java.io.*;

class CheckedException {
    public static void main(String[] args){
        /*
        * File 'C:\\\\test\\\\a.txt' tidak ada. 
        * Maka program tidak akan bisa dijalankan.
        * Program akan mengeluarkan FileNotFoundException 
        * yang mana merupakan child dari IOException
        * IOException merupakan Checked exception
        */
        FileReader file = new FileReader("C:\\\\test\\\\a.txt");
        BufferedReader fileInput = new BufferedReader(file);

        for(int counter = 0; counter < 3; counter++){
            System.out.println(fileInput.readLine());
        }

        fileInput.close();
    }
}
\`\`\`

</div>
<div class='flex-row' v-click=1>

\`\`\`
./CheckedException.java:11: error: 
unreported exception FileNotFoundException; 
must be caught or declared to be thrown
    FileReader file = new FileReader("C:\\\\test\\\\a.txt");
                      ^
\`\`\`

</div>
</div>`,frontmatter:{clicks:2,title:"Contoh **Checked** Exception",srcSequence:"./pages/09_Contoh Checked Exception.md"},index:8,start:0,end:46,source:{filepath:"/home/runner/work/materi-PBO-08/materi-PBO-08/pages/09_Contoh Checked Exception.md",raw:`---
clicks: 2
---

# Contoh **Checked** Exception

<div class="grid grid-cols-2 gap-y-10 gap-x-6 mt-8">
<div class='flex-row'>

\`\`\`java {all|12|all}
import java.io.*;

class CheckedException {
    public static void main(String[] args){
        /*
        * File 'C:\\\\test\\\\a.txt' tidak ada. 
        * Maka program tidak akan bisa dijalankan.
        * Program akan mengeluarkan FileNotFoundException 
        * yang mana merupakan child dari IOException
        * IOException merupakan Checked exception
        */
        FileReader file = new FileReader("C:\\\\test\\\\a.txt");
        BufferedReader fileInput = new BufferedReader(file);

        for(int counter = 0; counter < 3; counter++){
            System.out.println(fileInput.readLine());
        }

        fileInput.close();
    }
}
\`\`\`

</div>
<div class='flex-row' v-click=1>

\`\`\`
./CheckedException.java:11: error: 
unreported exception FileNotFoundException; 
must be caught or declared to be thrown
    FileReader file = new FileReader("C:\\\\test\\\\a.txt");
                      ^
\`\`\`

</div>
</div>`,title:"Contoh **Checked** Exception",level:1,content:`# Contoh **Checked** Exception

<div class="grid grid-cols-2 gap-y-10 gap-x-6 mt-8">
<div class='flex-row'>

\`\`\`java {all|12|all}
import java.io.*;

class CheckedException {
    public static void main(String[] args){
        /*
        * File 'C:\\\\test\\\\a.txt' tidak ada. 
        * Maka program tidak akan bisa dijalankan.
        * Program akan mengeluarkan FileNotFoundException 
        * yang mana merupakan child dari IOException
        * IOException merupakan Checked exception
        */
        FileReader file = new FileReader("C:\\\\test\\\\a.txt");
        BufferedReader fileInput = new BufferedReader(file);

        for(int counter = 0; counter < 3; counter++){
            System.out.println(fileInput.readLine());
        }

        fileInput.close();
    }
}
\`\`\`

</div>
<div class='flex-row' v-click=1>

\`\`\`
./CheckedException.java:11: error: 
unreported exception FileNotFoundException; 
must be caught or declared to be thrown
    FileReader file = new FileReader("C:\\\\test\\\\a.txt");
                      ^
\`\`\`

</div>
</div>`,frontmatter:{clicks:2,title:"Contoh **Checked** Exception"},index:0,start:0,end:46},inline:{raw:`---
src: ./pages/09_Contoh Checked Exception.md 
---
`,content:"",frontmatter:{},index:8,start:54,end:58},filepath:"/home/runner/work/materi-PBO-08/materi-PBO-08/pages/09_Contoh Checked Exception.md",notesHTML:"",id:8,no:9},__clicksElements:[],__preloaded:!1}},{path:"10",name:"page-10",component:Ab,meta:{clicks:2,title:"Contoh **Unchecked** Exception",srcSequence:"./pages/10_Contoh Unhecked Exception.md",slide:{raw:null,title:"Contoh **Unchecked** Exception",level:1,content:`# Contoh **Unchecked** Exception

<div class="grid grid-cols-2 gap-y-10 gap-x-6 mt-8">
<div class='flex-row'>

\`\`\`java {all|13|all}
import java.util.Scanner;

class UnheckedException {
    public static void main(String[] args){
        Scanner input = new Scanner(System.in);

        int x = 0;
        int y = 10;

        System.out.println("ENTER untuk lanjutkan");
        input.nextLine();

        int z = y / x;
        // ArithmeticException. 
        // Suatu bilangan tidak boleh dibagi dengan 0

        System.out.println("Hasil z = " + z);
    }
}
\`\`\`

</div>
<div class='flex-row' v-click=1>

\`\`\`
ENTER untuk lanjutkan

Exception in thread "main" 
java.lang.ArithmeticException: / by zero
    at UnheckedException.main(Main.java:13)
\`\`\`

</div>
</div>`,frontmatter:{clicks:2,title:"Contoh **Unchecked** Exception",srcSequence:"./pages/10_Contoh Unhecked Exception.md"},index:9,start:0,end:44,source:{filepath:"/home/runner/work/materi-PBO-08/materi-PBO-08/pages/10_Contoh Unhecked Exception.md",raw:`---
clicks: 2
---

# Contoh **Unchecked** Exception

<div class="grid grid-cols-2 gap-y-10 gap-x-6 mt-8">
<div class='flex-row'>

\`\`\`java {all|13|all}
import java.util.Scanner;

class UnheckedException {
    public static void main(String[] args){
        Scanner input = new Scanner(System.in);

        int x = 0;
        int y = 10;

        System.out.println("ENTER untuk lanjutkan");
        input.nextLine();

        int z = y / x;
        // ArithmeticException. 
        // Suatu bilangan tidak boleh dibagi dengan 0

        System.out.println("Hasil z = " + z);
    }
}
\`\`\`

</div>
<div class='flex-row' v-click=1>

\`\`\`
ENTER untuk lanjutkan

Exception in thread "main" 
java.lang.ArithmeticException: / by zero
    at UnheckedException.main(Main.java:13)
\`\`\`

</div>
</div>`,title:"Contoh **Unchecked** Exception",level:1,content:`# Contoh **Unchecked** Exception

<div class="grid grid-cols-2 gap-y-10 gap-x-6 mt-8">
<div class='flex-row'>

\`\`\`java {all|13|all}
import java.util.Scanner;

class UnheckedException {
    public static void main(String[] args){
        Scanner input = new Scanner(System.in);

        int x = 0;
        int y = 10;

        System.out.println("ENTER untuk lanjutkan");
        input.nextLine();

        int z = y / x;
        // ArithmeticException. 
        // Suatu bilangan tidak boleh dibagi dengan 0

        System.out.println("Hasil z = " + z);
    }
}
\`\`\`

</div>
<div class='flex-row' v-click=1>

\`\`\`
ENTER untuk lanjutkan

Exception in thread "main" 
java.lang.ArithmeticException: / by zero
    at UnheckedException.main(Main.java:13)
\`\`\`

</div>
</div>`,frontmatter:{clicks:2,title:"Contoh **Unchecked** Exception"},index:0,start:0,end:44},inline:{raw:`---
src: ./pages/10_Contoh Unhecked Exception.md 
---
`,content:"",frontmatter:{},index:9,start:58,end:62},filepath:"/home/runner/work/materi-PBO-08/materi-PBO-08/pages/10_Contoh Unhecked Exception.md",notesHTML:"",id:9,no:10},__clicksElements:[],__preloaded:!1}},{path:"11",name:"page-11",component:Ob,meta:{layout:"center",class:"text-center",srcSequence:"./pages/11_Cover Try-Catch.md",slide:{raw:null,content:`<span class='text-6xl font-extrabold color-orange p-4 border border-solid border-orange rounded-lg'>
02
</span>

<h1 class='font-bold mt-12'>

Exception Handling:  
<br>
Try-Catch

</h1>`,frontmatter:{layout:"center",class:"text-center",srcSequence:"./pages/11_Cover Try-Catch.md"},index:10,start:0,end:17,source:{filepath:"/home/runner/work/materi-PBO-08/materi-PBO-08/pages/11_Cover Try-Catch.md",raw:`---
layout: center
class: text-center
---

<span class='text-6xl font-extrabold color-orange p-4 border border-solid border-orange rounded-lg'>
02
</span>

<h1 class='font-bold mt-12'>

Exception Handling:  
<br>
Try-Catch

</h1>
`,content:`<span class='text-6xl font-extrabold color-orange p-4 border border-solid border-orange rounded-lg'>
02
</span>

<h1 class='font-bold mt-12'>

Exception Handling:  
<br>
Try-Catch

</h1>`,frontmatter:{layout:"center",class:"text-center"},index:0,start:0,end:17},inline:{raw:`---
src: ./pages/11_Cover Try-Catch.md 
---
`,content:"",frontmatter:{},index:10,start:62,end:66},filepath:"/home/runner/work/materi-PBO-08/materi-PBO-08/pages/11_Cover Try-Catch.md",notesHTML:"",id:10,no:11},__clicksElements:[],__preloaded:!1}},{path:"12",name:"page-12",component:Mb,meta:{title:"Try-Catch",srcSequence:"./pages/12_Try-Catch.md",slide:{raw:null,title:"Try-Catch",level:1,content:`# Try-Catch

<div class="grid grid-cols-2 gap-y-10 gap-x-6 mt-8">
<div class='flex-row'>

**Try-catch** merupakan salah satu cara **penanganan class exception** yang muncul akibat kondisi abnormal. Statement ini terdiri dari **blok try** dan **blok catch**.

**Blok try** berisikan **kode** yang berkemungkinan **memunculkan suatu exception**. Kode dalam blok ini akan dieksekusi **hingga muncul suatu exception**.

**Block catch** berisikan **kode** yang dieksekusi apabila **muncul suatu exception** dalam blok try sebelumnya. Blok catch memiliki **parameter class exception** yang **ingin ditangani.**

</div>
<div class='flex-row'>

\`\`\`java
try {
  //  Block of code to try

} catch(Exception e) {
  //  Block of code to handle errors
  
}
\`\`\`

</div>
</div>`,frontmatter:{title:"Try-Catch",srcSequence:"./pages/12_Try-Catch.md"},index:11,start:0,end:27,source:{filepath:"/home/runner/work/materi-PBO-08/materi-PBO-08/pages/12_Try-Catch.md",raw:`# Try-Catch

<div class="grid grid-cols-2 gap-y-10 gap-x-6 mt-8">
<div class='flex-row'>

**Try-catch** merupakan salah satu cara **penanganan class exception** yang muncul akibat kondisi abnormal. Statement ini terdiri dari **blok try** dan **blok catch**.

**Blok try** berisikan **kode** yang berkemungkinan **memunculkan suatu exception**. Kode dalam blok ini akan dieksekusi **hingga muncul suatu exception**.

**Block catch** berisikan **kode** yang dieksekusi apabila **muncul suatu exception** dalam blok try sebelumnya. Blok catch memiliki **parameter class exception** yang **ingin ditangani.**

</div>
<div class='flex-row'>

\`\`\`java
try {
  //  Block of code to try

} catch(Exception e) {
  //  Block of code to handle errors
  
}
\`\`\`

</div>
</div>
`,title:"Try-Catch",level:1,content:`# Try-Catch

<div class="grid grid-cols-2 gap-y-10 gap-x-6 mt-8">
<div class='flex-row'>

**Try-catch** merupakan salah satu cara **penanganan class exception** yang muncul akibat kondisi abnormal. Statement ini terdiri dari **blok try** dan **blok catch**.

**Blok try** berisikan **kode** yang berkemungkinan **memunculkan suatu exception**. Kode dalam blok ini akan dieksekusi **hingga muncul suatu exception**.

**Block catch** berisikan **kode** yang dieksekusi apabila **muncul suatu exception** dalam blok try sebelumnya. Blok catch memiliki **parameter class exception** yang **ingin ditangani.**

</div>
<div class='flex-row'>

\`\`\`java
try {
  //  Block of code to try

} catch(Exception e) {
  //  Block of code to handle errors
  
}
\`\`\`

</div>
</div>`,frontmatter:{title:"Try-Catch"},index:0,start:0,end:27},inline:{raw:`---
src: ./pages/12_Try-Catch.md 
---
`,content:"",frontmatter:{},index:11,start:66,end:70},filepath:"/home/runner/work/materi-PBO-08/materi-PBO-08/pages/12_Try-Catch.md",notesHTML:"",id:11,no:12},__clicksElements:[],__preloaded:!1}},{path:"13",name:"page-13",component:Rb,meta:{title:"Contoh Try-Catch",srcSequence:"./pages/13_Contoh Try-Catch.md",slide:{raw:null,title:"Contoh Try-Catch",level:1,content:`# Contoh Try-Catch

\`\`\`java
import java.io.*;

class CheckedExceptionHandling {
    public static void main(String[] args){
        try{
            FileReader file = new FileReader("C:\\\\test\\\\a.txt");
            BufferedReader fileInput = new BufferedReader(file);

            for(int counter = 0; counter < 3; counter++){
                System.out.println(fileInput.readLine());
            }

            fileInput.close();
        } catch(IOException e) {
            System.out.println("Terjadi suatu error : " + e.getMessage());
        }     
    }
}
\`\`\`

<div>

\`\`\`
Terjadi suatu error : C:\\test\\a.txt (No such file or directory)
\`\`\`

</div>`,frontmatter:{title:"Contoh Try-Catch",srcSequence:"./pages/13_Contoh Try-Catch.md"},index:12,start:0,end:30,source:{filepath:"/home/runner/work/materi-PBO-08/materi-PBO-08/pages/13_Contoh Try-Catch.md",raw:`# Contoh Try-Catch

\`\`\`java
import java.io.*;

class CheckedExceptionHandling {
    public static void main(String[] args){
        try{
            FileReader file = new FileReader("C:\\\\test\\\\a.txt");
            BufferedReader fileInput = new BufferedReader(file);

            for(int counter = 0; counter < 3; counter++){
                System.out.println(fileInput.readLine());
            }

            fileInput.close();
        } catch(IOException e) {
            System.out.println("Terjadi suatu error : " + e.getMessage());
        }     
    }
}
\`\`\`

<div>

\`\`\`
Terjadi suatu error : C:\\test\\a.txt (No such file or directory)
\`\`\`

</div>`,title:"Contoh Try-Catch",level:1,content:`# Contoh Try-Catch

\`\`\`java
import java.io.*;

class CheckedExceptionHandling {
    public static void main(String[] args){
        try{
            FileReader file = new FileReader("C:\\\\test\\\\a.txt");
            BufferedReader fileInput = new BufferedReader(file);

            for(int counter = 0; counter < 3; counter++){
                System.out.println(fileInput.readLine());
            }

            fileInput.close();
        } catch(IOException e) {
            System.out.println("Terjadi suatu error : " + e.getMessage());
        }     
    }
}
\`\`\`

<div>

\`\`\`
Terjadi suatu error : C:\\test\\a.txt (No such file or directory)
\`\`\`

</div>`,frontmatter:{title:"Contoh Try-Catch"},index:0,start:0,end:30},inline:{raw:`---
src: ./pages/13_Contoh Try-Catch.md 
---
`,content:"",frontmatter:{},index:12,start:70,end:74},filepath:"/home/runner/work/materi-PBO-08/materi-PBO-08/pages/13_Contoh Try-Catch.md",notesHTML:"",id:12,no:13},__clicksElements:[],__preloaded:!1}},{path:"14",name:"page-14",component:Vb,meta:{layout:"center",class:"text-center",srcSequence:"./pages/14_Cover Throw and Throws.md",slide:{raw:null,content:`<span class='text-6xl font-extrabold color-orange p-4 border border-solid border-orange rounded-lg'>
03
</span>

<h1 class='font-bold mt-12'>

Exception Handling:  
<br>
Throw & Throws

</h1>`,frontmatter:{layout:"center",class:"text-center",srcSequence:"./pages/14_Cover Throw and Throws.md"},index:13,start:0,end:16,source:{filepath:"/home/runner/work/materi-PBO-08/materi-PBO-08/pages/14_Cover Throw and Throws.md",raw:`---
layout: center
class: text-center
---

<span class='text-6xl font-extrabold color-orange p-4 border border-solid border-orange rounded-lg'>
03
</span>

<h1 class='font-bold mt-12'>

Exception Handling:  
<br>
Throw & Throws

</h1>`,content:`<span class='text-6xl font-extrabold color-orange p-4 border border-solid border-orange rounded-lg'>
03
</span>

<h1 class='font-bold mt-12'>

Exception Handling:  
<br>
Throw & Throws

</h1>`,frontmatter:{layout:"center",class:"text-center"},index:0,start:0,end:16},inline:{raw:`---
src: ./pages/14_Cover Throw and Throws.md 
---
`,content:"",frontmatter:{},index:13,start:74,end:78},filepath:"/home/runner/work/materi-PBO-08/materi-PBO-08/pages/14_Cover Throw and Throws.md",notesHTML:"",id:13,no:14},__clicksElements:[],__preloaded:!1}},{path:"15",name:"page-15",component:zb,meta:{title:"Throw & Throws",srcSequence:"./pages/15_Throw and Throws.md",slide:{raw:null,title:"Throw & Throws",level:1,content:`# Throw & Throws

<br>

<div class="text-2xl mt-12">

**Throw** merupakan statement yang digunakan untuk **melemparkan** suatu **exception** dalam blok kode. Hal ini berguna untuk **melempar custom exception**.

<br>

**Throws** merupakan **tanda** untuk suatu **method** yang dapat **melemparkan** suatu **exception** didalamnya. Hal ini berguna untuk **tidak menangani exception** dalam method itu sendiri namun dalam kode yang memanggil **method** tersebut.

</div>`,frontmatter:{title:"Throw & Throws",srcSequence:"./pages/15_Throw and Throws.md"},index:14,start:0,end:13,source:{filepath:"/home/runner/work/materi-PBO-08/materi-PBO-08/pages/15_Throw and Throws.md",raw:`# Throw & Throws

<br>

<div class="text-2xl mt-12">

**Throw** merupakan statement yang digunakan untuk **melemparkan** suatu **exception** dalam blok kode. Hal ini berguna untuk **melempar custom exception**.

<br>

**Throws** merupakan **tanda** untuk suatu **method** yang dapat **melemparkan** suatu **exception** didalamnya. Hal ini berguna untuk **tidak menangani exception** dalam method itu sendiri namun dalam kode yang memanggil **method** tersebut.

</div>`,title:"Throw & Throws",level:1,content:`# Throw & Throws

<br>

<div class="text-2xl mt-12">

**Throw** merupakan statement yang digunakan untuk **melemparkan** suatu **exception** dalam blok kode. Hal ini berguna untuk **melempar custom exception**.

<br>

**Throws** merupakan **tanda** untuk suatu **method** yang dapat **melemparkan** suatu **exception** didalamnya. Hal ini berguna untuk **tidak menangani exception** dalam method itu sendiri namun dalam kode yang memanggil **method** tersebut.

</div>`,frontmatter:{title:"Throw & Throws"},index:0,start:0,end:13},inline:{raw:`---
src: ./pages/15_Throw and Throws.md 
---
`,content:"",frontmatter:{},index:14,start:78,end:82},filepath:"/home/runner/work/materi-PBO-08/materi-PBO-08/pages/15_Throw and Throws.md",notesHTML:"",id:14,no:15},__clicksElements:[],__preloaded:!1}},{path:"16",name:"page-16",component:Zb,meta:{title:"Contoh Throw & Throws",srcSequence:"./pages/16_Contoh Throw and Throws.md",slide:{raw:null,title:"Contoh Throw & Throws",level:1,content:`# Contoh Throw & Throws

\`\`\`java
import java.io.*;

class Throws {
    public static void bacaFile() throws FileNotFoundException {
        throw new FileNotFoundException("File tidak ditemukan");
    }

    public static void main(String[] args){
        try{
            bacaFile();
        } catch(IOException e) {
            System.out.println("Terjadi suatu error : " + e.getMessage());
        }     
    }
}
\`\`\`

<div>

\`\`\`
Terjadi suatu error : File tidak ditemukan
\`\`\`

</div>`,frontmatter:{title:"Contoh Throw & Throws",srcSequence:"./pages/16_Contoh Throw and Throws.md"},index:15,start:0,end:27,source:{filepath:"/home/runner/work/materi-PBO-08/materi-PBO-08/pages/16_Contoh Throw and Throws.md",raw:`# Contoh Throw & Throws

\`\`\`java
import java.io.*;

class Throws {
    public static void bacaFile() throws FileNotFoundException {
        throw new FileNotFoundException("File tidak ditemukan");
    }

    public static void main(String[] args){
        try{
            bacaFile();
        } catch(IOException e) {
            System.out.println("Terjadi suatu error : " + e.getMessage());
        }     
    }
}
\`\`\`

<div>

\`\`\`
Terjadi suatu error : File tidak ditemukan
\`\`\`

</div>`,title:"Contoh Throw & Throws",level:1,content:`# Contoh Throw & Throws

\`\`\`java
import java.io.*;

class Throws {
    public static void bacaFile() throws FileNotFoundException {
        throw new FileNotFoundException("File tidak ditemukan");
    }

    public static void main(String[] args){
        try{
            bacaFile();
        } catch(IOException e) {
            System.out.println("Terjadi suatu error : " + e.getMessage());
        }     
    }
}
\`\`\`

<div>

\`\`\`
Terjadi suatu error : File tidak ditemukan
\`\`\`

</div>`,frontmatter:{title:"Contoh Throw & Throws"},index:0,start:0,end:27},inline:{raw:`---
src: ./pages/16_Contoh Throw and Throws.md 
---
`,content:"",frontmatter:{},index:15,start:82,end:86},filepath:"/home/runner/work/materi-PBO-08/materi-PBO-08/pages/16_Contoh Throw and Throws.md",notesHTML:"",id:15,no:16},__clicksElements:[],__preloaded:!1}},{path:"17",name:"page-17",component:Xb,meta:{layout:"center",class:"text-center",srcSequence:"./pages/17_Cover Custom Exception Class.md",slide:{raw:null,content:`<span class='text-6xl font-extrabold color-orange p-4 border border-solid border-orange rounded-lg'>
04
</span>

<h1 class='font-bold mt-12'>

Custom Exception Class

</h1>`,frontmatter:{layout:"center",class:"text-center",srcSequence:"./pages/17_Cover Custom Exception Class.md"},index:16,start:0,end:14,source:{filepath:"/home/runner/work/materi-PBO-08/materi-PBO-08/pages/17_Cover Custom Exception Class.md",raw:`---
layout: center
class: text-center
---

<span class='text-6xl font-extrabold color-orange p-4 border border-solid border-orange rounded-lg'>
04
</span>

<h1 class='font-bold mt-12'>

Custom Exception Class

</h1>`,content:`<span class='text-6xl font-extrabold color-orange p-4 border border-solid border-orange rounded-lg'>
04
</span>

<h1 class='font-bold mt-12'>

Custom Exception Class

</h1>`,frontmatter:{layout:"center",class:"text-center"},index:0,start:0,end:14},inline:{raw:`---
src: ./pages/17_Cover Custom Exception Class.md 
---
`,content:"",frontmatter:{},index:16,start:86,end:90},filepath:"/home/runner/work/materi-PBO-08/materi-PBO-08/pages/17_Cover Custom Exception Class.md",notesHTML:"",id:16,no:17},__clicksElements:[],__preloaded:!1}},{path:"18",name:"page-18",component:uk,meta:{title:"Contoh Custom Exception Class",srcSequence:"./pages/18_Custom Exception Class.md",slide:{raw:null,title:"Contoh Custom Exception Class",level:1,content:`# Contoh Custom Exception Class

<div class="grid grid-cols-12 gap-y-10 gap-x-4">
<div class='flex-row col-span-4'>

Membuat **custom exception class** dapat dilakukan dengan membuat class seperti biasa lalu **mewarisi class Exception** dengan menggunakan **extends**. 

Tujuannya adalah apabila ada kondisi abnormal lainnya yang ingin dibuat.

<div class="mt-12" v-click=3>

\`\`\`
Terjadi error : 
Angka yang dimasukkan melanggar ketentuan
\`\`\`

</div>

</div>

<div class='flex-row col-span-8'>

\`\`\`java {all|1-5|12|all}
class InvalidNumberException extends Exception {
    public InvalidNumberException(){
        super("Angka yang dimasukkan melanggar ketentuan");
    }
}

public class CustomException {
    public static boolean cekAngka(int angka) throws InvalidNumberException{
        if(angka < 0 || angka > 20)
            return true;
        else 
            throw new InvalidNumberException();
    }

    public static void main(String[] args){
        try{
            cekAngka(20);
        } catch (Exception e) {
            System.out.println("Terjadi error : \\n" + e.getMessage());
        }
    }
}
\`\`\`
</div>

</div>`,frontmatter:{title:"Contoh Custom Exception Class",srcSequence:"./pages/18_Custom Exception Class.md"},index:17,start:0,end:49,source:{filepath:"/home/runner/work/materi-PBO-08/materi-PBO-08/pages/18_Custom Exception Class.md",raw:`# Contoh Custom Exception Class

<div class="grid grid-cols-12 gap-y-10 gap-x-4">
<div class='flex-row col-span-4'>

Membuat **custom exception class** dapat dilakukan dengan membuat class seperti biasa lalu **mewarisi class Exception** dengan menggunakan **extends**. 

Tujuannya adalah apabila ada kondisi abnormal lainnya yang ingin dibuat.

<div class="mt-12" v-click=3>

\`\`\`
Terjadi error : 
Angka yang dimasukkan melanggar ketentuan
\`\`\`

</div>

</div>

<div class='flex-row col-span-8'>

\`\`\`java {all|1-5|12|all}
class InvalidNumberException extends Exception {
    public InvalidNumberException(){
        super("Angka yang dimasukkan melanggar ketentuan");
    }
}

public class CustomException {
    public static boolean cekAngka(int angka) throws InvalidNumberException{
        if(angka < 0 || angka > 20)
            return true;
        else 
            throw new InvalidNumberException();
    }

    public static void main(String[] args){
        try{
            cekAngka(20);
        } catch (Exception e) {
            System.out.println("Terjadi error : \\n" + e.getMessage());
        }
    }
}
\`\`\`
</div>

</div>`,title:"Contoh Custom Exception Class",level:1,content:`# Contoh Custom Exception Class

<div class="grid grid-cols-12 gap-y-10 gap-x-4">
<div class='flex-row col-span-4'>

Membuat **custom exception class** dapat dilakukan dengan membuat class seperti biasa lalu **mewarisi class Exception** dengan menggunakan **extends**. 

Tujuannya adalah apabila ada kondisi abnormal lainnya yang ingin dibuat.

<div class="mt-12" v-click=3>

\`\`\`
Terjadi error : 
Angka yang dimasukkan melanggar ketentuan
\`\`\`

</div>

</div>

<div class='flex-row col-span-8'>

\`\`\`java {all|1-5|12|all}
class InvalidNumberException extends Exception {
    public InvalidNumberException(){
        super("Angka yang dimasukkan melanggar ketentuan");
    }
}

public class CustomException {
    public static boolean cekAngka(int angka) throws InvalidNumberException{
        if(angka < 0 || angka > 20)
            return true;
        else 
            throw new InvalidNumberException();
    }

    public static void main(String[] args){
        try{
            cekAngka(20);
        } catch (Exception e) {
            System.out.println("Terjadi error : \\n" + e.getMessage());
        }
    }
}
\`\`\`
</div>

</div>`,frontmatter:{title:"Contoh Custom Exception Class"},index:0,start:0,end:49},inline:{raw:`---
src: ./pages/18_Custom Exception Class.md 
---

`,content:"",frontmatter:{},index:17,start:90,end:95},filepath:"/home/runner/work/materi-PBO-08/materi-PBO-08/pages/18_Custom Exception Class.md",notesHTML:"",id:17,no:18},__clicksElements:[],__preloaded:!1}},{path:"19",name:"page-19",component:fk,meta:{layout:"center",class:"text-center",title:"Exercise!",srcSequence:"./pages/19_Cover Exercise.md",slide:{raw:null,title:"Exercise!",level:1,content:`# Exercise!
Semua bisa karena terbiasa`,frontmatter:{layout:"center",class:"text-center",title:"Exercise!",srcSequence:"./pages/19_Cover Exercise.md"},index:18,start:0,end:7,source:{filepath:"/home/runner/work/materi-PBO-08/materi-PBO-08/pages/19_Cover Exercise.md",raw:`---
layout: center
class: text-center
---

# Exercise!
Semua bisa karena terbiasa`,title:"Exercise!",level:1,content:`# Exercise!
Semua bisa karena terbiasa`,frontmatter:{layout:"center",class:"text-center",title:"Exercise!"},index:0,start:0,end:7},inline:{raw:`---
src: ./pages/19_Cover Exercise.md 
---
`,content:"",frontmatter:{},index:18,start:95,end:99},filepath:"/home/runner/work/materi-PBO-08/materi-PBO-08/pages/19_Cover Exercise.md",notesHTML:"",id:18,no:19},__clicksElements:[],__preloaded:!1}},{path:"20",name:"page-20",component:Ek,meta:{layout:"center",title:"Exercise <kbd><span class='text-teal'>IllegalGradeException.java & Test.java</span></kbd>",srcSequence:"./pages/20_Exercise.md",slide:{raw:null,title:"Exercise <kbd><span class='text-teal'>IllegalGradeException.java & Test.java</span></kbd>",level:1,content:`# Exercise <kbd><span class='text-teal'>IllegalGradeException.java & Test.java</span></kbd>

<div class="grid grid-cols-2 gap-2">

<div class="text-sm">

Buatlah <kbd>custom exception class</kbd> \`IllegalGradeException\` yang meng-extend \`Exception\` dengan message \`Nilai tidak valid!\`.

Buat juga class \`Test\` yang berisi method main dari program pada file \`Test.java\` berisi input nilai.

Buatlah baris try-catch untuk menampilkan \`IllegalGradeException\` ketika nilai kurang dari 0 atau lebih besar dari 100. Tampilkan \`Nilai anda adalah [NILAI]\` ketika nilai tidak melanggar aturan tadi.

</div>

<div class='mt-6 grid grid-cols-[0.2fr_1.5fr] items-center text-sm gap-3'>
<span class='text-xs text-white font-extrabold uppercase text-yellow'>Input</span>
<span>Nilai berupa integer</span>
<span class='text-xs text-white font-extrabold uppercase text-yellow'>Output</span>
<div class='mt-4 flex flex-col mb-2 gap-0'>

\`\`\`bash
# ketika try-catch menemukan exception
InvalidGradeException: Nilai tidak valid!
    at Test.main(blablabla)

# ketika tidak ada exception
Nilai anda adalah 80
\`\`\`

</div>
</div>
</div>`,frontmatter:{layout:"center",title:"Exercise <kbd><span class='text-teal'>IllegalGradeException.java & Test.java</span></kbd>",srcSequence:"./pages/20_Exercise.md"},index:19,start:0,end:37,source:{filepath:"/home/runner/work/materi-PBO-08/materi-PBO-08/pages/20_Exercise.md",raw:`---
layout: center
---

# Exercise <kbd><span class='text-teal'>IllegalGradeException.java & Test.java</span></kbd>

<div class="grid grid-cols-2 gap-2">

<div class="text-sm">

Buatlah <kbd>custom exception class</kbd> \`IllegalGradeException\` yang meng-extend \`Exception\` dengan message \`Nilai tidak valid!\`.

Buat juga class \`Test\` yang berisi method main dari program pada file \`Test.java\` berisi input nilai.

Buatlah baris try-catch untuk menampilkan \`IllegalGradeException\` ketika nilai kurang dari 0 atau lebih besar dari 100. Tampilkan \`Nilai anda adalah [NILAI]\` ketika nilai tidak melanggar aturan tadi.

</div>

<div class='mt-6 grid grid-cols-[0.2fr_1.5fr] items-center text-sm gap-3'>
<span class='text-xs text-white font-extrabold uppercase text-yellow'>Input</span>
<span>Nilai berupa integer</span>
<span class='text-xs text-white font-extrabold uppercase text-yellow'>Output</span>
<div class='mt-4 flex flex-col mb-2 gap-0'>

\`\`\`bash
# ketika try-catch menemukan exception
InvalidGradeException: Nilai tidak valid!
    at Test.main(blablabla)

# ketika tidak ada exception
Nilai anda adalah 80
\`\`\`

</div>
</div>
</div>
`,title:"Exercise <kbd><span class='text-teal'>IllegalGradeException.java & Test.java</span></kbd>",level:1,content:`# Exercise <kbd><span class='text-teal'>IllegalGradeException.java & Test.java</span></kbd>

<div class="grid grid-cols-2 gap-2">

<div class="text-sm">

Buatlah <kbd>custom exception class</kbd> \`IllegalGradeException\` yang meng-extend \`Exception\` dengan message \`Nilai tidak valid!\`.

Buat juga class \`Test\` yang berisi method main dari program pada file \`Test.java\` berisi input nilai.

Buatlah baris try-catch untuk menampilkan \`IllegalGradeException\` ketika nilai kurang dari 0 atau lebih besar dari 100. Tampilkan \`Nilai anda adalah [NILAI]\` ketika nilai tidak melanggar aturan tadi.

</div>

<div class='mt-6 grid grid-cols-[0.2fr_1.5fr] items-center text-sm gap-3'>
<span class='text-xs text-white font-extrabold uppercase text-yellow'>Input</span>
<span>Nilai berupa integer</span>
<span class='text-xs text-white font-extrabold uppercase text-yellow'>Output</span>
<div class='mt-4 flex flex-col mb-2 gap-0'>

\`\`\`bash
# ketika try-catch menemukan exception
InvalidGradeException: Nilai tidak valid!
    at Test.main(blablabla)

# ketika tidak ada exception
Nilai anda adalah 80
\`\`\`

</div>
</div>
</div>`,frontmatter:{layout:"center",title:"Exercise <kbd><span class='text-teal'>IllegalGradeException.java & Test.java</span></kbd>"},index:0,start:0,end:37},inline:{raw:`---
src: ./pages/20_Exercise.md 
---
`,content:"",frontmatter:{},index:19,start:99,end:103},filepath:"/home/runner/work/materi-PBO-08/materi-PBO-08/pages/20_Exercise.md",notesHTML:"",id:19,no:20},__clicksElements:[],__preloaded:!1}},{path:"21",name:"page-21",component:Ak,meta:{layout:"center",class:"text-center",title:"Assignment!",srcSequence:"./pages/21_Cover Assignment.md",slide:{raw:null,title:"Assignment!",level:1,content:`# Assignment!

Seperti biasa, setiap selesai praktikum pasti ada tugas`,frontmatter:{layout:"center",class:"text-center",title:"Assignment!",srcSequence:"./pages/21_Cover Assignment.md"},index:20,start:0,end:9,source:{filepath:"/home/runner/work/materi-PBO-08/materi-PBO-08/pages/21_Cover Assignment.md",raw:`---
layout: center
class: text-center
---

# Assignment!

Seperti biasa, setiap selesai praktikum pasti ada tugas
`,title:"Assignment!",level:1,content:`# Assignment!

Seperti biasa, setiap selesai praktikum pasti ada tugas`,frontmatter:{layout:"center",class:"text-center",title:"Assignment!"},index:0,start:0,end:9},inline:{raw:`---
src: ./pages/21_Cover Assignment.md 
---
`,content:"",frontmatter:{},index:20,start:103,end:107},filepath:"/home/runner/work/materi-PBO-08/materi-PBO-08/pages/21_Cover Assignment.md",notesHTML:"",id:20,no:21},__clicksElements:[],__preloaded:!1}},{path:"22",name:"page-22",component:Ok,meta:{layout:"center",title:"Assignment 8 Soal 1 <kbd>Simpan di folder <span class='text-yellow'>soal01</span> hingga <span class='text-yellow'>soal04</span></kbd>",srcSequence:"./pages/22_Assignment1.md",slide:{raw:null,title:"Assignment 8 Soal 1 <kbd>Simpan di folder <span class='text-yellow'>soal01</span> hingga <span class='text-yellow'>soal04</span></kbd>",level:1,content:`# Assignment 8 Soal 1 <kbd>Simpan di folder <span class='text-yellow'>soal01</span> hingga <span class='text-yellow'>soal04</span></kbd>

<div class='center row'>

Pilih 4 buah unchecked exception dari list dibawah, dan cari tahu:

<div class="grid grid-cols-2 gap-y-10 gap-x-16 mb-4">
<div>

- InterruptedIOException
- UnsupportedEncodingException
- UTFDataFormatException
- ObjectStreamException
- InvalidClassException

</div>
<div>

- InvalidObjectException
- NotSerializableException
- StreamCorruptedException
- WriteAbortedException

</div>

</div>

<hr>

Jelaskan secara deskriptif tentang <kbd>Class</kbd> tersebut (tulis dalam bentuk comment) serta berikan contoh kode yang mengeluarkan keempat <kbd>Exception</kbd> tersebut!

<span class='text-xs'>PS: Kode harus mengeluarkan Exception dan tidak perlu berhasil compile</span>

</div>`,frontmatter:{layout:"center",title:"Assignment 8 Soal 1 <kbd>Simpan di folder <span class='text-yellow'>soal01</span> hingga <span class='text-yellow'>soal04</span></kbd>",srcSequence:"./pages/22_Assignment1.md"},index:21,start:0,end:39,source:{filepath:"/home/runner/work/materi-PBO-08/materi-PBO-08/pages/22_Assignment1.md",raw:`---
layout: center
---

# Assignment 8 Soal 1 <kbd>Simpan di folder <span class='text-yellow'>soal01</span> hingga <span class='text-yellow'>soal04</span></kbd>

<div class='center row'>

Pilih 4 buah unchecked exception dari list dibawah, dan cari tahu:

<div class="grid grid-cols-2 gap-y-10 gap-x-16 mb-4">
<div>

- InterruptedIOException
- UnsupportedEncodingException
- UTFDataFormatException
- ObjectStreamException
- InvalidClassException

</div>
<div>

- InvalidObjectException
- NotSerializableException
- StreamCorruptedException
- WriteAbortedException

</div>

</div>

<hr>

Jelaskan secara deskriptif tentang <kbd>Class</kbd> tersebut (tulis dalam bentuk comment) serta berikan contoh kode yang mengeluarkan keempat <kbd>Exception</kbd> tersebut!

<span class='text-xs'>PS: Kode harus mengeluarkan Exception dan tidak perlu berhasil compile</span>

</div>
`,title:"Assignment 8 Soal 1 <kbd>Simpan di folder <span class='text-yellow'>soal01</span> hingga <span class='text-yellow'>soal04</span></kbd>",level:1,content:`# Assignment 8 Soal 1 <kbd>Simpan di folder <span class='text-yellow'>soal01</span> hingga <span class='text-yellow'>soal04</span></kbd>

<div class='center row'>

Pilih 4 buah unchecked exception dari list dibawah, dan cari tahu:

<div class="grid grid-cols-2 gap-y-10 gap-x-16 mb-4">
<div>

- InterruptedIOException
- UnsupportedEncodingException
- UTFDataFormatException
- ObjectStreamException
- InvalidClassException

</div>
<div>

- InvalidObjectException
- NotSerializableException
- StreamCorruptedException
- WriteAbortedException

</div>

</div>

<hr>

Jelaskan secara deskriptif tentang <kbd>Class</kbd> tersebut (tulis dalam bentuk comment) serta berikan contoh kode yang mengeluarkan keempat <kbd>Exception</kbd> tersebut!

<span class='text-xs'>PS: Kode harus mengeluarkan Exception dan tidak perlu berhasil compile</span>

</div>`,frontmatter:{layout:"center",title:"Assignment 8 Soal 1 <kbd>Simpan di folder <span class='text-yellow'>soal01</span> hingga <span class='text-yellow'>soal04</span></kbd>"},index:0,start:0,end:39},inline:{raw:`---
src: ./pages/22_Assignment1.md 
---
`,content:"",frontmatter:{},index:21,start:107,end:111},filepath:"/home/runner/work/materi-PBO-08/materi-PBO-08/pages/22_Assignment1.md",notesHTML:"",id:21,no:22},__clicksElements:[],__preloaded:!1}},{path:"23",name:"page-23",component:Dk,meta:{layout:"center",title:"Assignment 8 Soal 2 <kbd>Simpan di folder <span class='text-yellow'>soal05</span> hingga <span class='text-yellow'>soal08</span></kbd>",srcSequence:"./pages/23_Assignment2.md",slide:{raw:null,title:"Assignment 8 Soal 2 <kbd>Simpan di folder <span class='text-yellow'>soal05</span> hingga <span class='text-yellow'>soal08</span></kbd>",level:1,content:`# Assignment 8 Soal 2 <kbd>Simpan di folder <span class='text-yellow'>soal05</span> hingga <span class='text-yellow'>soal08</span></kbd>

<div class='center row'>

Pilih 4 buah unchecked exception dari list dibawah, dan cari tahu:

<div class="grid grid-cols-2 gap-y-10 gap-x-16 mb-4">
<div>

- ArithmeticException
- ArrayIndexOutOfBoundsException
- ArrayStoreException
- ClassCastException
- EnumConstantNotPresentException

</div>
<div>

- NumberFormatException
- NegativeArraySizeException
- NullPointerException
- TypeNotPresentException
- UnsupportedOperationException

</div>

</div>

<hr>

Jelaskan secara deskriptif tentang <kbd>Class</kbd> tersebut (tulis dalam bentuk comment) serta berikan contoh kode yang mengeluarkan keempat <kbd>Exception</kbd> tersebut!

Kemudian wrap ke dalam <span class='text-yellow'>blok try-catch</span> untuk menampilkan pesan <kbd>Exception</kbd>!

</div>`,frontmatter:{layout:"center",title:"Assignment 8 Soal 2 <kbd>Simpan di folder <span class='text-yellow'>soal05</span> hingga <span class='text-yellow'>soal08</span></kbd>",srcSequence:"./pages/23_Assignment2.md"},index:22,start:0,end:40,source:{filepath:"/home/runner/work/materi-PBO-08/materi-PBO-08/pages/23_Assignment2.md",raw:`---
layout: center
---

# Assignment 8 Soal 2 <kbd>Simpan di folder <span class='text-yellow'>soal05</span> hingga <span class='text-yellow'>soal08</span></kbd>

<div class='center row'>

Pilih 4 buah unchecked exception dari list dibawah, dan cari tahu:

<div class="grid grid-cols-2 gap-y-10 gap-x-16 mb-4">
<div>

- ArithmeticException
- ArrayIndexOutOfBoundsException
- ArrayStoreException
- ClassCastException
- EnumConstantNotPresentException

</div>
<div>

- NumberFormatException
- NegativeArraySizeException
- NullPointerException
- TypeNotPresentException
- UnsupportedOperationException

</div>

</div>

<hr>

Jelaskan secara deskriptif tentang <kbd>Class</kbd> tersebut (tulis dalam bentuk comment) serta berikan contoh kode yang mengeluarkan keempat <kbd>Exception</kbd> tersebut!

Kemudian wrap ke dalam <span class='text-yellow'>blok try-catch</span> untuk menampilkan pesan <kbd>Exception</kbd>!

</div>
`,title:"Assignment 8 Soal 2 <kbd>Simpan di folder <span class='text-yellow'>soal05</span> hingga <span class='text-yellow'>soal08</span></kbd>",level:1,content:`# Assignment 8 Soal 2 <kbd>Simpan di folder <span class='text-yellow'>soal05</span> hingga <span class='text-yellow'>soal08</span></kbd>

<div class='center row'>

Pilih 4 buah unchecked exception dari list dibawah, dan cari tahu:

<div class="grid grid-cols-2 gap-y-10 gap-x-16 mb-4">
<div>

- ArithmeticException
- ArrayIndexOutOfBoundsException
- ArrayStoreException
- ClassCastException
- EnumConstantNotPresentException

</div>
<div>

- NumberFormatException
- NegativeArraySizeException
- NullPointerException
- TypeNotPresentException
- UnsupportedOperationException

</div>

</div>

<hr>

Jelaskan secara deskriptif tentang <kbd>Class</kbd> tersebut (tulis dalam bentuk comment) serta berikan contoh kode yang mengeluarkan keempat <kbd>Exception</kbd> tersebut!

Kemudian wrap ke dalam <span class='text-yellow'>blok try-catch</span> untuk menampilkan pesan <kbd>Exception</kbd>!

</div>`,frontmatter:{layout:"center",title:"Assignment 8 Soal 2 <kbd>Simpan di folder <span class='text-yellow'>soal05</span> hingga <span class='text-yellow'>soal08</span></kbd>"},index:0,start:0,end:40},inline:{raw:`---
src: ./pages/23_Assignment2.md 
---
`,content:"",frontmatter:{},index:22,start:111,end:115},filepath:"/home/runner/work/materi-PBO-08/materi-PBO-08/pages/23_Assignment2.md",notesHTML:"",id:22,no:23},__clicksElements:[],__preloaded:!1}},{path:"24",name:"page-24",component:Mk,meta:{layout:"center",title:"Assignment 8 Soal 3 <kbd>Simpan di folder <span class='text-yellow'>soal09</span></kbd>",srcSequence:"./pages/24_Assignment3.md",slide:{raw:null,title:"Assignment 8 Soal 3 <kbd>Simpan di folder <span class='text-yellow'>soal09</span></kbd>",level:1,content:`# Assignment 8 Soal 3 <kbd>Simpan di folder <span class='text-yellow'>soal09</span></kbd>

<div class='center'>

Buat <span class='text-orange'>Custom Exception</span> class ala kalian sendiri dengan meng-extend class <kbd>Exception</kbd>!

Penamaan kelas dibebaskan asal representatif dengan error yang dikeluarkan!

Buat isi pesan Exception sejelas mungkin!

Jenis exception tidak boleh sama dengan yang sudah dijelaskan!

<hr>

Buat class <kbd>TestException.java</kbd> untuk testing dan juga method yang dapat melempar class <kbd>Exception</kbd> yang telah anda buat!

Test method tersebut dan wrap dalam blok try-catch, kemudian tampilkan pesan errornya!

</div>`,frontmatter:{layout:"center",title:"Assignment 8 Soal 3 <kbd>Simpan di folder <span class='text-yellow'>soal09</span></kbd>",srcSequence:"./pages/24_Assignment3.md"},index:23,start:0,end:24,source:{filepath:"/home/runner/work/materi-PBO-08/materi-PBO-08/pages/24_Assignment3.md",raw:`---
layout: center
---

# Assignment 8 Soal 3 <kbd>Simpan di folder <span class='text-yellow'>soal09</span></kbd>

<div class='center'>

Buat <span class='text-orange'>Custom Exception</span> class ala kalian sendiri dengan meng-extend class <kbd>Exception</kbd>!

Penamaan kelas dibebaskan asal representatif dengan error yang dikeluarkan!

Buat isi pesan Exception sejelas mungkin!

Jenis exception tidak boleh sama dengan yang sudah dijelaskan!

<hr>

Buat class <kbd>TestException.java</kbd> untuk testing dan juga method yang dapat melempar class <kbd>Exception</kbd> yang telah anda buat!

Test method tersebut dan wrap dalam blok try-catch, kemudian tampilkan pesan errornya!

</div>
`,title:"Assignment 8 Soal 3 <kbd>Simpan di folder <span class='text-yellow'>soal09</span></kbd>",level:1,content:`# Assignment 8 Soal 3 <kbd>Simpan di folder <span class='text-yellow'>soal09</span></kbd>

<div class='center'>

Buat <span class='text-orange'>Custom Exception</span> class ala kalian sendiri dengan meng-extend class <kbd>Exception</kbd>!

Penamaan kelas dibebaskan asal representatif dengan error yang dikeluarkan!

Buat isi pesan Exception sejelas mungkin!

Jenis exception tidak boleh sama dengan yang sudah dijelaskan!

<hr>

Buat class <kbd>TestException.java</kbd> untuk testing dan juga method yang dapat melempar class <kbd>Exception</kbd> yang telah anda buat!

Test method tersebut dan wrap dalam blok try-catch, kemudian tampilkan pesan errornya!

</div>`,frontmatter:{layout:"center",title:"Assignment 8 Soal 3 <kbd>Simpan di folder <span class='text-yellow'>soal09</span></kbd>"},index:0,start:0,end:24},inline:{raw:`---
src: ./pages/24_Assignment3.md 
---
`,content:"",frontmatter:{},index:23,start:115,end:119},filepath:"/home/runner/work/materi-PBO-08/materi-PBO-08/pages/24_Assignment3.md",notesHTML:"",id:23,no:24},__clicksElements:[],__preloaded:!1}},{path:"25",name:"page-25",component:Lk,meta:{layout:"center",class:"text-center",title:"Teknis Pengumpulan",srcSequence:"./pages/25_Teknis Pengumpulan 1.md",slide:{raw:null,title:"Teknis Pengumpulan",level:1,content:`# Teknis Pengumpulan

Pengerjaan dan pengumpulan tugas akan dilakukan di **Github Classroom**

<div grid="~ cols-2 gap-2" style="margin-top: 48px">
  <div>

#### Kelas A:

[Link Tugas Kelas A](https://classroom.github.com/a/7QgLV9vd)

  </div>
  <div>

#### Kelas B:

[Link Tugas Kelas B](https://classroom.github.com/a/4MPEyNHW)

  </div>
</div>

<br>
Accept assignment terlebih dahulu lalu link akun Github dengan slot nama yang sesuai di Github Classroom`,frontmatter:{layout:"center",class:"text-center",title:"Teknis Pengumpulan",srcSequence:"./pages/25_Teknis Pengumpulan 1.md"},index:24,start:0,end:29,source:{filepath:"/home/runner/work/materi-PBO-08/materi-PBO-08/pages/25_Teknis Pengumpulan 1.md",raw:`---
layout: center
class: text-center
---

# Teknis Pengumpulan

Pengerjaan dan pengumpulan tugas akan dilakukan di **Github Classroom**

<div grid="~ cols-2 gap-2" style="margin-top: 48px">
  <div>

#### Kelas A:

[Link Tugas Kelas A](https://classroom.github.com/a/7QgLV9vd)

  </div>
  <div>

#### Kelas B:

[Link Tugas Kelas B](https://classroom.github.com/a/4MPEyNHW)

  </div>
</div>

<br>
Accept assignment terlebih dahulu lalu link akun Github dengan slot nama yang sesuai di Github Classroom
`,title:"Teknis Pengumpulan",level:1,content:`# Teknis Pengumpulan

Pengerjaan dan pengumpulan tugas akan dilakukan di **Github Classroom**

<div grid="~ cols-2 gap-2" style="margin-top: 48px">
  <div>

#### Kelas A:

[Link Tugas Kelas A](https://classroom.github.com/a/7QgLV9vd)

  </div>
  <div>

#### Kelas B:

[Link Tugas Kelas B](https://classroom.github.com/a/4MPEyNHW)

  </div>
</div>

<br>
Accept assignment terlebih dahulu lalu link akun Github dengan slot nama yang sesuai di Github Classroom`,frontmatter:{layout:"center",class:"text-center",title:"Teknis Pengumpulan"},index:0,start:0,end:29},inline:{raw:`---
src: ./pages/25_Teknis Pengumpulan 1.md 
---
`,content:"",frontmatter:{},index:24,start:119,end:123},filepath:"/home/runner/work/materi-PBO-08/materi-PBO-08/pages/25_Teknis Pengumpulan 1.md",notesHTML:"",id:24,no:25},__clicksElements:[],__preloaded:!1}},{path:"26",name:"page-26",component:Wk,meta:{title:"Teknis Pengumpulan",srcSequence:"./pages/26_Teknis Pengumpulan 2.md",slide:{raw:null,title:"Teknis Pengumpulan",level:1,content:`# Teknis Pengumpulan

<div>

Format setiap file \`.java\` didahulukan dengan Nama, NPM, Kelas, Tanggal, dan Deskripsi

</div>

Cara menambah comment di java

\`\`\`java {all}
// untuk single line
/* untuk multiple line */
\`\`\`

Contoh Format

\`\`\`java {all}
/*
  Nama	: Jane Doe
  NPM		: 99
  Kelas		: A
  Tanggal	: 1 September 2021
  Deskripsi	: Class jawaban exercise-01 soal-01
*/

\`\`\``,frontmatter:{title:"Teknis Pengumpulan",srcSequence:"./pages/26_Teknis Pengumpulan 2.md"},index:25,start:0,end:28,source:{filepath:"/home/runner/work/materi-PBO-08/materi-PBO-08/pages/26_Teknis Pengumpulan 2.md",raw:`# Teknis Pengumpulan

<div>

Format setiap file \`.java\` didahulukan dengan Nama, NPM, Kelas, Tanggal, dan Deskripsi

</div>

Cara menambah comment di java

\`\`\`java {all}
// untuk single line
/* untuk multiple line */
\`\`\`

Contoh Format

\`\`\`java {all}
/*
  Nama	: Jane Doe
  NPM		: 99
  Kelas		: A
  Tanggal	: 1 September 2021
  Deskripsi	: Class jawaban exercise-01 soal-01
*/

\`\`\`
`,title:"Teknis Pengumpulan",level:1,content:`# Teknis Pengumpulan

<div>

Format setiap file \`.java\` didahulukan dengan Nama, NPM, Kelas, Tanggal, dan Deskripsi

</div>

Cara menambah comment di java

\`\`\`java {all}
// untuk single line
/* untuk multiple line */
\`\`\`

Contoh Format

\`\`\`java {all}
/*
  Nama	: Jane Doe
  NPM		: 99
  Kelas		: A
  Tanggal	: 1 September 2021
  Deskripsi	: Class jawaban exercise-01 soal-01
*/

\`\`\``,frontmatter:{title:"Teknis Pengumpulan"},index:0,start:0,end:28},inline:{raw:`---
src: ./pages/26_Teknis Pengumpulan 2.md 
---
`,content:"",frontmatter:{},index:25,start:123,end:127},filepath:"/home/runner/work/materi-PBO-08/materi-PBO-08/pages/26_Teknis Pengumpulan 2.md",notesHTML:"",id:25,no:26},__clicksElements:[],__preloaded:!1}},{path:"27",name:"page-27",component:Qk,meta:{layout:"center",class:"text-center",title:"Deadline Pengumpulan \u231A",srcSequence:"./pages/27_Deadline.md",slide:{raw:null,title:"Deadline Pengumpulan \u231A",level:1,content:`# Deadline Pengumpulan \u231A

<div grid="~ cols-2 gap-32" style="margin-top: 48px">
<div>

#### Kelas A:

7 November 2022, 23:59 WIB

</div>
<div>

#### Kelas B:

8 November 2022, 23:59 WIB

</div>
</div>

<br>

**Waktu yang dilihat adalah waktu last commit.**<br> Jika ada yang commit melewati deadline walaupun sudah commit sebelumnya akan dianggap telat`,frontmatter:{layout:"center",class:"text-center",title:"Deadline Pengumpulan \u231A",srcSequence:"./pages/27_Deadline.md"},index:26,start:0,end:28,source:{filepath:"/home/runner/work/materi-PBO-08/materi-PBO-08/pages/27_Deadline.md",raw:`---
layout: center
class: text-center
---

# Deadline Pengumpulan \u231A

<div grid="~ cols-2 gap-32" style="margin-top: 48px">
<div>

#### Kelas A:

7 November 2022, 23:59 WIB

</div>
<div>

#### Kelas B:

8 November 2022, 23:59 WIB

</div>
</div>

<br>

**Waktu yang dilihat adalah waktu last commit.**<br> Jika ada yang commit melewati deadline walaupun sudah commit sebelumnya akan dianggap telat
`,title:"Deadline Pengumpulan \u231A",level:1,content:`# Deadline Pengumpulan \u231A

<div grid="~ cols-2 gap-32" style="margin-top: 48px">
<div>

#### Kelas A:

7 November 2022, 23:59 WIB

</div>
<div>

#### Kelas B:

8 November 2022, 23:59 WIB

</div>
</div>

<br>

**Waktu yang dilihat adalah waktu last commit.**<br> Jika ada yang commit melewati deadline walaupun sudah commit sebelumnya akan dianggap telat`,frontmatter:{layout:"center",class:"text-center",title:"Deadline Pengumpulan \u231A"},index:0,start:0,end:28},inline:{raw:`---
src: ./pages/27_Deadline.md 
---
`,content:"",frontmatter:{},index:26,start:127,end:131},filepath:"/home/runner/work/materi-PBO-08/materi-PBO-08/pages/27_Deadline.md",notesHTML:"",id:26,no:27},__clicksElements:[],__preloaded:!1}},{path:"28",name:"page-28",component:n8,meta:{layout:"center",class:"text-center",title:"Terima Kasih!",srcSequence:"./pages/28_Terima Kasih.md",slide:{raw:null,title:"Terima Kasih!",level:1,content:`# Terima Kasih!

Do you have any questions?
Please use respective class discussion channel on Discord.

Semangat terus menjalani kuilahnya!! \u{1F525}\u{1F525}\u{1F525}`,frontmatter:{layout:"center",class:"text-center",title:"Terima Kasih!",srcSequence:"./pages/28_Terima Kasih.md"},index:27,start:0,end:12,source:{filepath:"/home/runner/work/materi-PBO-08/materi-PBO-08/pages/28_Terima Kasih.md",raw:`---
layout: center
class: text-center
---

# Terima Kasih!

Do you have any questions?
Please use respective class discussion channel on Discord.

Semangat terus menjalani kuilahnya!! \u{1F525}\u{1F525}\u{1F525}
`,title:"Terima Kasih!",level:1,content:`# Terima Kasih!

Do you have any questions?
Please use respective class discussion channel on Discord.

Semangat terus menjalani kuilahnya!! \u{1F525}\u{1F525}\u{1F525}`,frontmatter:{layout:"center",class:"text-center",title:"Terima Kasih!"},index:0,start:0,end:12},inline:{raw:`---
src: ./pages/28_Terima Kasih.md 
---`,content:"",frontmatter:{},index:27,start:131,end:134},filepath:"/home/runner/work/materi-PBO-08/materi-PBO-08/pages/28_Terima Kasih.md",notesHTML:"",id:27,no:28},__clicksElements:[],__preloaded:!1}},{path:"29",component:Z1,meta:{layout:"end"}}],Ve=s8,a8=[{name:"play",path:"/",component:V1,children:[...Ve]},{name:"print",path:"/print",component:W1},{path:"",redirect:{path:"/1"}},{path:"/:pathMatch(.*)",redirect:{path:"/1"}},{path:"/presenter/print",component:()=>$n(()=>import("./PresenterPrint.051a68bc.js"),["assets/PresenterPrint.051a68bc.js","assets/NoteViewer.vue_vue_type_script_setup_true_lang.e13677ad.js"])},{name:"presenter",path:"/presenter/:no",component:()=>$n(()=>import("./Presenter.07dd9633.js"),["assets/Presenter.07dd9633.js","assets/NoteViewer.vue_vue_type_script_setup_true_lang.e13677ad.js","assets/DrawingControls.vue_vue_type_script_setup_true_lang.318c0db2.js","assets/Presenter.e29290d2.css"]),beforeEnter:e=>{if(!Cs.remote||Cs.remote===e.query.password)return!0;if(Cs.remote&&e.query.password===void 0){const t=prompt("Enter password");if(Cs.remote===t)return!0}return e.params.no?{path:`/${e.params.no}`}:{path:""}}},{path:"/presenter",redirect:{path:"/presenter/1"}}],mt=$y({history:Gg("/materi-PBO-08/"),routes:a8});function r8(e,t,{mode:s="replace"}={}){return O({get(){const a=mt.currentRoute.value.query[e];return a==null?t!=null?t:null:Array.isArray(a)?a.filter(Boolean):a},set(a){Ye(()=>{mt[k(s)]({query:{...mt.currentRoute.value.query,[e]:a}})})}})}const mp=L(0);Ye(()=>{mt.afterEach(async()=>{await Ye(),mp.value+=1})});const Zt=O(()=>mt.currentRoute.value),Xo=O(()=>Zt.value.query.print!==void 0),o8=O(()=>Zt.value.query.print==="clicks"),Ut=O(()=>Zt.value.query.embedded!==void 0),It=O(()=>Zt.value.path.startsWith("/presenter")),$s=O(()=>Xo.value&&!o8.value),ro=O(()=>Zt.value.query.password),l8=O(()=>!It.value&&(!ve.remote||ro.value===ve.remote)),Ji=r8("clicks","0"),hp=O(()=>Ve.length-1),i8=O(()=>Zt.value.path),Re=O(()=>parseInt(i8.value.split(/\//g).slice(-1)[0])||1);O(()=>Xa(Re.value));const ut=O(()=>Ve.find(e=>e.path===`${Re.value}`));O(()=>{var e,t,s;return(s=(t=(e=ut.value)==null?void 0:e.meta)==null?void 0:t.slide)==null?void 0:s.id});O(()=>{var e,t;return((t=(e=ut.value)==null?void 0:e.meta)==null?void 0:t.layout)||(Re.value===1?"cover":"default")});const _r=O(()=>Ve.find(e=>e.path===`${Math.min(Ve.length,Re.value+1)}`)),c8=O(()=>{var e,t;return mp.value,((t=(e=ut.value)==null?void 0:e.meta)==null?void 0:t.__clicksElements)||[]}),Ot=O({get(){if($s.value)return 99999;let e=+(Ji.value||0);return isNaN(e)&&(e=0),e},set(e){Ji.value=e.toString()}}),$a=O(()=>{var e,t,s;return+((s=(t=(e=ut.value)==null?void 0:e.meta)==null?void 0:t.clicks)!=null?s:c8.value.length)}),u8=O(()=>Re.value<Ve.length-1||Ot.value<$a.value),p8=O(()=>Re.value>1||Ot.value>0),d8=O(()=>Ve.filter(e=>{var t,s;return(s=(t=e.meta)==null?void 0:t.slide)==null?void 0:s.title}).reduce((e,t)=>(el(e,t),e),[])),f8=O(()=>tl(d8.value,ut.value));O(()=>nl(f8.value));function ln(){$a.value<=Ot.value?Ys():Ot.value+=1}async function cn(){Ot.value<=0?await Gs():Ot.value-=1}function Xa(e){return It.value?`/presenter/${e}`:`/${e}`}function Ys(){const e=Math.min(Ve.length,Re.value+1);return os(e)}async function Gs(e=!0){const t=Math.max(1,Re.value-1);await os(t),e&&$a.value&&mt.replace({query:{...Zt.value.query,clicks:$a.value}})}function os(e,t){return mt.push({path:Xa(e),query:{...Zt.value.query,clicks:t}})}function m8(e){const t=L(0),{direction:s,distanceX:a,distanceY:r}=xg(e,{onSwipeStart(o){o.pointerType==="touch"&&(Ks.value||(t.value=Ur()))},onSwipeEnd(o){if(o.pointerType!=="touch"||!t.value||Ks.value)return;const l=Math.abs(a.value),i=Math.abs(r.value);l/window.innerWidth>.3||l>100?s.value===Wt.LEFT?ln():cn():(i/window.innerHeight>.4||i>200)&&(s.value===Wt.DOWN?Gs():Ys())}})}async function oo(){const{saveAs:e}=await $n(()=>import("./FileSaver.min.7f56e709.js").then(t=>t.F),[]);e(Eu(ve.download)?ve.download:ve.exportFilename?`${ve.exportFilename}.pdf`:"/materi-PBO-08/slidev-exported.pdf",`${ve.title}.pdf`)}async function h8(e){var t,s;if(e==null){const a=(s=(t=ut.value)==null?void 0:t.meta)==null?void 0:s.slide;if(!(a!=null&&a.filepath))return!1;e=`${a.filepath}:${a.start}`}return await fetch(`/__open-in-editor?file=${encodeURIComponent(e)}`),!0}function el(e,t,s=1){var r,o,l,i,c;const a=(o=(r=t.meta)==null?void 0:r.slide)==null?void 0:o.level;a&&a>s&&e.length>0?el(e[e.length-1].children,t,s+1):e.push({children:[],level:s,path:t.path,hideInToc:Boolean((l=t.meta)==null?void 0:l.hideInToc),title:(c=(i=t.meta)==null?void 0:i.slide)==null?void 0:c.title})}function tl(e,t,s=!1,a){return e.map(r=>{const o={...r,active:r.path===(t==null?void 0:t.path),hasActiveParent:s};return o.children.length>0&&(o.children=tl(o.children,t,o.active||o.hasActiveParent,o)),a&&(o.active||o.activeParent)&&(a.activeParent=!0),o})}function nl(e,t=1){return e.filter(s=>!s.hideInToc).map(s=>({...s,children:nl(s.children,t+1)}))}function g8(){const e=ve.titleTemplate.replace("%s",ve.title||"Slidev");_h({title:e}),Sh(`${e} - shared`),Dh(`${e} - drawings`);function t(){It.value&&(ai("page",+Re.value),ai("clicks",Ot.value))}mt.afterEach(t),ce(Ot,t),Oh(s=>{(+s.page!=+Re.value||Ot.value!==s.clicks)&&mt.replace({path:Xa(s.page),query:{...mt.currentRoute.value.query,clicks:s.clicks||0}})})}const y8=we({__name:"App",setup(e){return U(Z),g8(),(t,s)=>{const a=wa("RouterView"),r=wa("StarportCarrier");return A(),V(Ee,null,[W(a),W(r)],64)}}});function xr(e){return e!==null&&typeof e=="object"}function lo(e,t,s=".",a){if(!xr(t))return lo(e,{},s,a);const r=Object.assign({},t);for(const o in e){if(o==="__proto__"||o==="constructor")continue;const l=e[o];l!=null&&(a&&a(r,o,l,s)||(Array.isArray(l)&&Array.isArray(r[o])?r[o]=l.concat(r[o]):xr(l)&&xr(r[o])?r[o]=lo(l,r[o],(s?`${s}.`:"")+o.toString(),a):r[o]=l))}return r}function v8(e){return(...t)=>t.reduce((s,a)=>lo(s,a,"",e),{})}const _8=v8(),gp=1/60*1e3,x8=typeof performance<"u"?()=>performance.now():()=>Date.now(),yp=typeof window<"u"?e=>window.requestAnimationFrame(e):e=>setTimeout(()=>e(x8()),gp);function b8(e){let t=[],s=[],a=0,r=!1,o=!1;const l=new WeakSet,i={schedule:(c,u=!1,p=!1)=>{const d=p&&r,m=d?t:s;return u&&l.add(c),m.indexOf(c)===-1&&(m.push(c),d&&r&&(a=t.length)),c},cancel:c=>{const u=s.indexOf(c);u!==-1&&s.splice(u,1),l.delete(c)},process:c=>{if(r){o=!0;return}if(r=!0,[t,s]=[s,t],s.length=0,a=t.length,a)for(let u=0;u<a;u++){const p=t[u];p(c),l.has(p)&&(i.schedule(p),e())}r=!1,o&&(o=!1,i.process(c))}};return i}const k8=40;let io=!0,Zs=!1,co=!1;const es={delta:0,timestamp:0},ea=["read","update","preRender","render","postRender"],er=ea.reduce((e,t)=>(e[t]=b8(()=>Zs=!0),e),{}),uo=ea.reduce((e,t)=>{const s=er[t];return e[t]=(a,r=!1,o=!1)=>(Zs||C8(),s.schedule(a,r,o)),e},{}),E8=ea.reduce((e,t)=>(e[t]=er[t].cancel,e),{});ea.reduce((e,t)=>(e[t]=()=>er[t].process(es),e),{});const w8=e=>er[e].process(es),vp=e=>{Zs=!1,es.delta=io?gp:Math.max(Math.min(e-es.timestamp,k8),1),es.timestamp=e,co=!0,ea.forEach(w8),co=!1,Zs&&(io=!1,yp(vp))},C8=()=>{Zs=!0,io=!0,co||yp(vp)},_p=()=>es;function xp(e,t){var s={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(s[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(s[a[r]]=e[a[r]]);return s}var A8=function(){},Qi=function(){};const po=(e,t,s)=>Math.min(Math.max(s,e),t),br=.001,B8=.01,Xi=10,S8=.05,O8=1;function T8({duration:e=800,bounce:t=.25,velocity:s=0,mass:a=1}){let r,o;A8(e<=Xi*1e3);let l=1-t;l=po(S8,O8,l),e=po(B8,Xi,e/1e3),l<1?(r=u=>{const p=u*l,d=p*e,m=p-s,g=fo(u,l),h=Math.exp(-d);return br-m/g*h},o=u=>{const d=u*l*e,m=d*s+s,g=Math.pow(l,2)*Math.pow(u,2)*e,h=Math.exp(-d),_=fo(Math.pow(u,2),l);return(-r(u)+br>0?-1:1)*((m-g)*h)/_}):(r=u=>{const p=Math.exp(-u*e),d=(u-s)*e+1;return-br+p*d},o=u=>{const p=Math.exp(-u*e),d=(s-u)*(e*e);return p*d});const i=5/e,c=D8(r,o,i);if(e=e*1e3,isNaN(c))return{stiffness:100,damping:10,duration:e};{const u=Math.pow(c,2)*a;return{stiffness:u,damping:l*2*Math.sqrt(a*u),duration:e}}}const P8=12;function D8(e,t,s){let a=s;for(let r=1;r<P8;r++)a=a-e(a)/t(a);return a}function fo(e,t){return e*Math.sqrt(1-t*t)}const $8=["duration","bounce"],F8=["stiffness","damping","mass"];function ec(e,t){return t.some(s=>e[s]!==void 0)}function M8(e){let t=Object.assign({velocity:0,stiffness:100,damping:10,mass:1,isResolvedFromDuration:!1},e);if(!ec(e,F8)&&ec(e,$8)){const s=T8(e);t=Object.assign(Object.assign(Object.assign({},t),s),{velocity:0,mass:1}),t.isResolvedFromDuration=!0}return t}function sl(e){var{from:t=0,to:s=1,restSpeed:a=2,restDelta:r}=e,o=xp(e,["from","to","restSpeed","restDelta"]);const l={done:!1,value:t};let{stiffness:i,damping:c,mass:u,velocity:p,duration:d,isResolvedFromDuration:m}=M8(o),g=tc,h=tc;function _(){const x=p?-(p/1e3):0,b=s-t,w=c/(2*Math.sqrt(i*u)),E=Math.sqrt(i/u)/1e3;if(r===void 0&&(r=Math.min(Math.abs(s-t)/100,.4)),w<1){const B=fo(E,w);g=$=>{const F=Math.exp(-w*E*$);return s-F*((x+w*E*b)/B*Math.sin(B*$)+b*Math.cos(B*$))},h=$=>{const F=Math.exp(-w*E*$);return w*E*F*(Math.sin(B*$)*(x+w*E*b)/B+b*Math.cos(B*$))-F*(Math.cos(B*$)*(x+w*E*b)-B*b*Math.sin(B*$))}}else if(w===1)g=B=>s-Math.exp(-E*B)*(b+(x+E*b)*B);else{const B=E*Math.sqrt(w*w-1);g=$=>{const F=Math.exp(-w*E*$),I=Math.min(B*$,300);return s-F*((x+w*E*b)*Math.sinh(I)+B*b*Math.cosh(I))/B}}}return _(),{next:x=>{const b=g(x);if(m)l.done=x>=d;else{const w=h(x)*1e3,E=Math.abs(w)<=a,B=Math.abs(s-b)<=r;l.done=E&&B}return l.value=l.done?s:b,l},flipTarget:()=>{p=-p,[t,s]=[s,t],_()}}}sl.needsInterpolation=(e,t)=>typeof e=="string"||typeof t=="string";const tc=e=>0,bp=(e,t,s)=>{const a=t-e;return a===0?1:(s-e)/a},al=(e,t,s)=>-s*e+s*t+e,kp=(e,t)=>s=>Math.max(Math.min(s,t),e),Fs=e=>e%1?Number(e.toFixed(5)):e,Js=/(-)?([\d]*\.?[\d])+/g,mo=/(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,j8=/^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;function ta(e){return typeof e=="string"}const na={test:e=>typeof e=="number",parse:parseFloat,transform:e=>e},Ms=Object.assign(Object.assign({},na),{transform:kp(0,1)}),da=Object.assign(Object.assign({},na),{default:1}),rl=e=>({test:t=>ta(t)&&t.endsWith(e)&&t.split(" ").length===1,parse:parseFloat,transform:t=>`${t}${e}`}),hn=rl("deg"),js=rl("%"),re=rl("px"),nc=Object.assign(Object.assign({},js),{parse:e=>js.parse(e)/100,transform:e=>js.transform(e*100)}),ol=(e,t)=>s=>Boolean(ta(s)&&j8.test(s)&&s.startsWith(e)||t&&Object.prototype.hasOwnProperty.call(s,t)),Ep=(e,t,s)=>a=>{if(!ta(a))return a;const[r,o,l,i]=a.match(Js);return{[e]:parseFloat(r),[t]:parseFloat(o),[s]:parseFloat(l),alpha:i!==void 0?parseFloat(i):1}},An={test:ol("hsl","hue"),parse:Ep("hue","saturation","lightness"),transform:({hue:e,saturation:t,lightness:s,alpha:a=1})=>"hsla("+Math.round(e)+", "+js.transform(Fs(t))+", "+js.transform(Fs(s))+", "+Fs(Ms.transform(a))+")"},I8=kp(0,255),kr=Object.assign(Object.assign({},na),{transform:e=>Math.round(I8(e))}),nn={test:ol("rgb","red"),parse:Ep("red","green","blue"),transform:({red:e,green:t,blue:s,alpha:a=1})=>"rgba("+kr.transform(e)+", "+kr.transform(t)+", "+kr.transform(s)+", "+Fs(Ms.transform(a))+")"};function N8(e){let t="",s="",a="",r="";return e.length>5?(t=e.substr(1,2),s=e.substr(3,2),a=e.substr(5,2),r=e.substr(7,2)):(t=e.substr(1,1),s=e.substr(2,1),a=e.substr(3,1),r=e.substr(4,1),t+=t,s+=s,a+=a,r+=r),{red:parseInt(t,16),green:parseInt(s,16),blue:parseInt(a,16),alpha:r?parseInt(r,16)/255:1}}const ho={test:ol("#"),parse:N8,transform:nn.transform},at={test:e=>nn.test(e)||ho.test(e)||An.test(e),parse:e=>nn.test(e)?nn.parse(e):An.test(e)?An.parse(e):ho.parse(e),transform:e=>ta(e)?e:e.hasOwnProperty("red")?nn.transform(e):An.transform(e)},wp="${c}",Cp="${n}";function R8(e){var t,s,a,r;return isNaN(e)&&ta(e)&&((s=(t=e.match(Js))===null||t===void 0?void 0:t.length)!==null&&s!==void 0?s:0)+((r=(a=e.match(mo))===null||a===void 0?void 0:a.length)!==null&&r!==void 0?r:0)>0}function Ap(e){typeof e=="number"&&(e=`${e}`);const t=[];let s=0;const a=e.match(mo);a&&(s=a.length,e=e.replace(mo,wp),t.push(...a.map(at.parse)));const r=e.match(Js);return r&&(e=e.replace(Js,Cp),t.push(...r.map(na.parse))),{values:t,numColors:s,tokenised:e}}function Bp(e){return Ap(e).values}function Sp(e){const{values:t,numColors:s,tokenised:a}=Ap(e),r=t.length;return o=>{let l=a;for(let i=0;i<r;i++)l=l.replace(i<s?wp:Cp,i<s?at.transform(o[i]):Fs(o[i]));return l}}const L8=e=>typeof e=="number"?0:e;function H8(e){const t=Bp(e);return Sp(e)(t.map(L8))}const sa={test:R8,parse:Bp,createTransformer:Sp,getAnimatableNone:H8},V8=new Set(["brightness","contrast","saturate","opacity"]);function q8(e){let[t,s]=e.slice(0,-1).split("(");if(t==="drop-shadow")return e;const[a]=s.match(Js)||[];if(!a)return e;const r=s.replace(a,"");let o=V8.has(t)?1:0;return a!==s&&(o*=100),t+"("+o+r+")"}const U8=/([a-z-]*)\(.*?\)/g,go=Object.assign(Object.assign({},sa),{getAnimatableNone:e=>{const t=e.match(U8);return t?t.map(q8).join(" "):e}});function Er(e,t,s){return s<0&&(s+=1),s>1&&(s-=1),s<1/6?e+(t-e)*6*s:s<1/2?t:s<2/3?e+(t-e)*(2/3-s)*6:e}function sc({hue:e,saturation:t,lightness:s,alpha:a}){e/=360,t/=100,s/=100;let r=0,o=0,l=0;if(!t)r=o=l=s;else{const i=s<.5?s*(1+t):s+t-s*t,c=2*s-i;r=Er(c,i,e+1/3),o=Er(c,i,e),l=Er(c,i,e-1/3)}return{red:Math.round(r*255),green:Math.round(o*255),blue:Math.round(l*255),alpha:a}}const K8=(e,t,s)=>{const a=e*e,r=t*t;return Math.sqrt(Math.max(0,s*(r-a)+a))},z8=[ho,nn,An],ac=e=>z8.find(t=>t.test(e)),Op=(e,t)=>{let s=ac(e),a=ac(t),r=s.parse(e),o=a.parse(t);s===An&&(r=sc(r),s=nn),a===An&&(o=sc(o),a=nn);const l=Object.assign({},r);return i=>{for(const c in l)c!=="alpha"&&(l[c]=K8(r[c],o[c],i));return l.alpha=al(r.alpha,o.alpha,i),s.transform(l)}},W8=e=>typeof e=="number",Y8=(e,t)=>s=>t(e(s)),Tp=(...e)=>e.reduce(Y8);function Pp(e,t){return W8(e)?s=>al(e,t,s):at.test(e)?Op(e,t):$p(e,t)}const Dp=(e,t)=>{const s=[...e],a=s.length,r=e.map((o,l)=>Pp(o,t[l]));return o=>{for(let l=0;l<a;l++)s[l]=r[l](o);return s}},G8=(e,t)=>{const s=Object.assign(Object.assign({},e),t),a={};for(const r in s)e[r]!==void 0&&t[r]!==void 0&&(a[r]=Pp(e[r],t[r]));return r=>{for(const o in a)s[o]=a[o](r);return s}};function rc(e){const t=sa.parse(e),s=t.length;let a=0,r=0,o=0;for(let l=0;l<s;l++)a||typeof t[l]=="number"?a++:t[l].hue!==void 0?o++:r++;return{parsed:t,numNumbers:a,numRGB:r,numHSL:o}}const $p=(e,t)=>{const s=sa.createTransformer(t),a=rc(e),r=rc(t);return a.numHSL===r.numHSL&&a.numRGB===r.numRGB&&a.numNumbers>=r.numNumbers?Tp(Dp(a.parsed,r.parsed),s):l=>`${l>0?t:e}`},Z8=(e,t)=>s=>al(e,t,s);function J8(e){if(typeof e=="number")return Z8;if(typeof e=="string")return at.test(e)?Op:$p;if(Array.isArray(e))return Dp;if(typeof e=="object")return G8}function Q8(e,t,s){const a=[],r=s||J8(e[0]),o=e.length-1;for(let l=0;l<o;l++){let i=r(e[l],e[l+1]);if(t){const c=Array.isArray(t)?t[l]:t;i=Tp(c,i)}a.push(i)}return a}function X8([e,t],[s]){return a=>s(bp(e,t,a))}function eE(e,t){const s=e.length,a=s-1;return r=>{let o=0,l=!1;if(r<=e[0]?l=!0:r>=e[a]&&(o=a-1,l=!0),!l){let c=1;for(;c<s&&!(e[c]>r||c===a);c++);o=c-1}const i=bp(e[o],e[o+1],r);return t[o](i)}}function Fp(e,t,{clamp:s=!0,ease:a,mixer:r}={}){const o=e.length;Qi(o===t.length),Qi(!a||!Array.isArray(a)||a.length===o-1),e[0]>e[o-1]&&(e=[].concat(e),t=[].concat(t),e.reverse(),t.reverse());const l=Q8(t,a,r),i=o===2?X8(e,l):eE(e,l);return s?c=>i(po(e[0],e[o-1],c)):i}const tr=e=>t=>1-e(1-t),ll=e=>t=>t<=.5?e(2*t)/2:(2-e(2*(1-t)))/2,tE=e=>t=>Math.pow(t,e),Mp=e=>t=>t*t*((e+1)*t-e),nE=e=>{const t=Mp(e);return s=>(s*=2)<1?.5*t(s):.5*(2-Math.pow(2,-10*(s-1)))},jp=1.525,sE=4/11,aE=8/11,rE=9/10,Ip=e=>e,il=tE(2),oE=tr(il),Np=ll(il),Rp=e=>1-Math.sin(Math.acos(e)),Lp=tr(Rp),lE=ll(Lp),cl=Mp(jp),iE=tr(cl),cE=ll(cl),uE=nE(jp),pE=4356/361,dE=35442/1805,fE=16061/1805,Fa=e=>{if(e===1||e===0)return e;const t=e*e;return e<sE?7.5625*t:e<aE?9.075*t-9.9*e+3.4:e<rE?pE*t-dE*e+fE:10.8*e*e-20.52*e+10.72},mE=tr(Fa),hE=e=>e<.5?.5*(1-Fa(1-e*2)):.5*Fa(e*2-1)+.5;function gE(e,t){return e.map(()=>t||Np).splice(0,e.length-1)}function yE(e){const t=e.length;return e.map((s,a)=>a!==0?a/(t-1):0)}function vE(e,t){return e.map(s=>s*t)}function _a({from:e=0,to:t=1,ease:s,offset:a,duration:r=300}){const o={done:!1,value:e},l=Array.isArray(t)?t:[e,t],i=vE(a&&a.length===l.length?a:yE(l),r);function c(){return Fp(i,l,{ease:Array.isArray(s)?s:gE(l,s)})}let u=c();return{next:p=>(o.value=u(p),o.done=p>=r,o),flipTarget:()=>{l.reverse(),u=c()}}}function _E({velocity:e=0,from:t=0,power:s=.8,timeConstant:a=350,restDelta:r=.5,modifyTarget:o}){const l={done:!1,value:t};let i=s*e;const c=t+i,u=o===void 0?c:o(c);return u!==c&&(i=u-t),{next:p=>{const d=-i*Math.exp(-p/a);return l.done=!(d>r||d<-r),l.value=l.done?u:u+d,l},flipTarget:()=>{}}}const oc={keyframes:_a,spring:sl,decay:_E};function xE(e){if(Array.isArray(e.to))return _a;if(oc[e.type])return oc[e.type];const t=new Set(Object.keys(e));return t.has("ease")||t.has("duration")&&!t.has("dampingRatio")?_a:t.has("dampingRatio")||t.has("stiffness")||t.has("mass")||t.has("damping")||t.has("restSpeed")||t.has("restDelta")?sl:_a}function Hp(e,t,s=0){return e-t-s}function bE(e,t,s=0,a=!0){return a?Hp(t+-e,t,s):t-(e-t)+s}function kE(e,t,s,a){return a?e>=t+s:e<=-s}const EE=e=>{const t=({delta:s})=>e(s);return{start:()=>uo.update(t,!0),stop:()=>E8.update(t)}};function Vp(e){var t,s,{from:a,autoplay:r=!0,driver:o=EE,elapsed:l=0,repeat:i=0,repeatType:c="loop",repeatDelay:u=0,onPlay:p,onStop:d,onComplete:m,onRepeat:g,onUpdate:h}=e,_=xp(e,["from","autoplay","driver","elapsed","repeat","repeatType","repeatDelay","onPlay","onStop","onComplete","onRepeat","onUpdate"]);let{to:x}=_,b,w=0,E=_.duration,B,$=!1,F=!0,I;const J=xE(_);!((s=(t=J).needsInterpolation)===null||s===void 0)&&s.call(t,a,x)&&(I=Fp([0,100],[a,x],{clamp:!1}),a=0,x=100);const ie=J(Object.assign(Object.assign({},_),{from:a,to:x}));function ue(){w++,c==="reverse"?(F=w%2===0,l=bE(l,E,u,F)):(l=Hp(l,E,u),c==="mirror"&&ie.flipTarget()),$=!1,g&&g()}function ge(){b.stop(),m&&m()}function qe(Fe){if(F||(Fe=-Fe),l+=Fe,!$){const Te=ie.next(Math.max(0,l));B=Te.value,I&&(B=I(B)),$=F?Te.done:l<=0}h==null||h(B),$&&(w===0&&(E!=null||(E=l)),w<i?kE(l,E,u,F)&&ue():ge())}function Le(){p==null||p(),b=o(qe),b.start()}return r&&Le(),{stop:()=>{d==null||d(),b.stop()}}}function qp(e,t){return t?e*(1e3/t):0}function wE({from:e=0,velocity:t=0,min:s,max:a,power:r=.8,timeConstant:o=750,bounceStiffness:l=500,bounceDamping:i=10,restDelta:c=1,modifyTarget:u,driver:p,onUpdate:d,onComplete:m,onStop:g}){let h;function _(E){return s!==void 0&&E<s||a!==void 0&&E>a}function x(E){return s===void 0?a:a===void 0||Math.abs(s-E)<Math.abs(a-E)?s:a}function b(E){h==null||h.stop(),h=Vp(Object.assign(Object.assign({},E),{driver:p,onUpdate:B=>{var $;d==null||d(B),($=E.onUpdate)===null||$===void 0||$.call(E,B)},onComplete:m,onStop:g}))}function w(E){b(Object.assign({type:"spring",stiffness:l,damping:i,restDelta:c},E))}if(_(e))w({from:e,velocity:t,to:x(e)});else{let E=r*t+e;typeof u<"u"&&(E=u(E));const B=x(E),$=B===s?-1:1;let F,I;const J=ie=>{F=I,I=ie,t=qp(ie-F,_p().delta),($===1&&ie>B||$===-1&&ie<B)&&w({from:ie,to:B,velocity:t})};b({type:"decay",from:e,velocity:t,timeConstant:o,power:r,restDelta:c,modifyTarget:u,onUpdate:_(E)?J:void 0})}return{stop:()=>h==null?void 0:h.stop()}}const Up=(e,t)=>1-3*t+3*e,Kp=(e,t)=>3*t-6*e,zp=e=>3*e,Ma=(e,t,s)=>((Up(t,s)*e+Kp(t,s))*e+zp(t))*e,Wp=(e,t,s)=>3*Up(t,s)*e*e+2*Kp(t,s)*e+zp(t),CE=1e-7,AE=10;function BE(e,t,s,a,r){let o,l,i=0;do l=t+(s-t)/2,o=Ma(l,a,r)-e,o>0?s=l:t=l;while(Math.abs(o)>CE&&++i<AE);return l}const SE=8,OE=.001;function TE(e,t,s,a){for(let r=0;r<SE;++r){const o=Wp(t,s,a);if(o===0)return t;const l=Ma(t,s,a)-e;t-=l/o}return t}const xa=11,fa=1/(xa-1);function PE(e,t,s,a){if(e===t&&s===a)return Ip;const r=new Float32Array(xa);for(let l=0;l<xa;++l)r[l]=Ma(l*fa,e,s);function o(l){let i=0,c=1;const u=xa-1;for(;c!==u&&r[c]<=l;++c)i+=fa;--c;const p=(l-r[c])/(r[c+1]-r[c]),d=i+p*fa,m=Wp(d,e,s);return m>=OE?TE(l,d,e,s):m===0?d:BE(l,i,i+fa,e,s)}return l=>l===0||l===1?l:Ma(o(l),t,a)}const wr={};class DE{constructor(){this.subscriptions=new Set}add(t){return this.subscriptions.add(t),()=>this.subscriptions.delete(t)}notify(t,s,a){if(!!this.subscriptions.size)for(const r of this.subscriptions)r(t,s,a)}clear(){this.subscriptions.clear()}}const lc=e=>!isNaN(parseFloat(e));class $E{constructor(t){this.timeDelta=0,this.lastUpdated=0,this.updateSubscribers=new DE,this.canTrackVelocity=!1,this.updateAndNotify=s=>{this.prev=this.current,this.current=s;const{delta:a,timestamp:r}=_p();this.lastUpdated!==r&&(this.timeDelta=a,this.lastUpdated=r),uo.postRender(this.scheduleVelocityCheck),this.updateSubscribers.notify(this.current)},this.scheduleVelocityCheck=()=>uo.postRender(this.velocityCheck),this.velocityCheck=({timestamp:s})=>{this.canTrackVelocity||(this.canTrackVelocity=lc(this.current)),s!==this.lastUpdated&&(this.prev=this.current)},this.prev=this.current=t,this.canTrackVelocity=lc(this.current)}onChange(t){return this.updateSubscribers.add(t)}clearListeners(){this.updateSubscribers.clear()}set(t){this.updateAndNotify(t)}get(){return this.current}getPrevious(){return this.prev}getVelocity(){return this.canTrackVelocity?qp(parseFloat(this.current)-parseFloat(this.prev),this.timeDelta):0}start(t){return this.stop(),new Promise(s=>{const{stop:a}=t(s);this.stopAnimation=a}).then(()=>this.clearAnimation())}stop(){this.stopAnimation&&this.stopAnimation(),this.clearAnimation()}isAnimating(){return!!this.stopAnimation}clearAnimation(){this.stopAnimation=null}destroy(){this.updateSubscribers.clear(),this.stop()}}function FE(e){return new $E(e)}const{isArray:ME}=Array;function jE(){const e=L({}),t=a=>{const r=o=>{!e.value[o]||(e.value[o].stop(),e.value[o].destroy(),delete e.value[o])};a?ME(a)?a.forEach(r):r(a):Object.keys(e.value).forEach(r)},s=(a,r,o)=>{if(e.value[a])return e.value[a];const l=FE(r);return l.onChange(i=>o[a]=i),e.value[a]=l,l};return zm(t),{motionValues:e,get:s,stop:t}}const IE=e=>Array.isArray(e),gn=()=>({type:"spring",stiffness:500,damping:25,restDelta:.5,restSpeed:10}),Cr=e=>({type:"spring",stiffness:550,damping:e===0?2*Math.sqrt(550):30,restDelta:.01,restSpeed:10}),NE=e=>({type:"spring",stiffness:550,damping:e===0?100:30,restDelta:.01,restSpeed:10}),Ar=()=>({type:"keyframes",ease:"linear",duration:300}),RE=e=>({type:"keyframes",duration:800,values:e}),ic={default:NE,x:gn,y:gn,z:gn,rotate:gn,rotateX:gn,rotateY:gn,rotateZ:gn,scaleX:Cr,scaleY:Cr,scale:Cr,backgroundColor:Ar,color:Ar,opacity:Ar},Yp=(e,t)=>{let s;return IE(t)?s=RE:s=ic[e]||ic.default,{to:t,...s(t)}},cc={...na,transform:Math.round},Gp={color:at,backgroundColor:at,outlineColor:at,fill:at,stroke:at,borderColor:at,borderTopColor:at,borderRightColor:at,borderBottomColor:at,borderLeftColor:at,borderWidth:re,borderTopWidth:re,borderRightWidth:re,borderBottomWidth:re,borderLeftWidth:re,borderRadius:re,radius:re,borderTopLeftRadius:re,borderTopRightRadius:re,borderBottomRightRadius:re,borderBottomLeftRadius:re,width:re,maxWidth:re,height:re,maxHeight:re,size:re,top:re,right:re,bottom:re,left:re,padding:re,paddingTop:re,paddingRight:re,paddingBottom:re,paddingLeft:re,margin:re,marginTop:re,marginRight:re,marginBottom:re,marginLeft:re,rotate:hn,rotateX:hn,rotateY:hn,rotateZ:hn,scale:da,scaleX:da,scaleY:da,scaleZ:da,skew:hn,skewX:hn,skewY:hn,distance:re,translateX:re,translateY:re,translateZ:re,x:re,y:re,z:re,perspective:re,transformPerspective:re,opacity:Ms,originX:nc,originY:nc,originZ:re,zIndex:cc,filter:go,WebkitFilter:go,fillOpacity:Ms,strokeOpacity:Ms,numOctaves:cc},ul=e=>Gp[e],Zp=(e,t)=>t&&typeof e=="number"&&t.transform?t.transform(e):e;function LE(e,t){let s=ul(e);return s!==go&&(s=sa),s.getAnimatableNone?s.getAnimatableNone(t):void 0}const HE={linear:Ip,easeIn:il,easeInOut:Np,easeOut:oE,circIn:Rp,circInOut:lE,circOut:Lp,backIn:cl,backInOut:cE,backOut:iE,anticipate:uE,bounceIn:mE,bounceInOut:hE,bounceOut:Fa},uc=e=>{if(Array.isArray(e)){const[t,s,a,r]=e;return PE(t,s,a,r)}else if(typeof e=="string")return HE[e];return e},VE=e=>Array.isArray(e)&&typeof e[0]!="number",pc=(e,t)=>e==="zIndex"?!1:!!(typeof t=="number"||Array.isArray(t)||typeof t=="string"&&sa.test(t)&&!t.startsWith("url("));function qE(e){return Array.isArray(e.to)&&e.to[0]===null&&(e.to=[...e.to],e.to[0]=e.from),e}function UE({ease:e,times:t,delay:s,...a}){const r={...a};return t&&(r.offset=t),e&&(r.ease=VE(e)?e.map(uc):uc(e)),s&&(r.elapsed=-s),r}function KE(e,t,s){return Array.isArray(t.to)&&(e.duration||(e.duration=800)),qE(t),zE(e)||(e={...e,...Yp(s,t.to)}),{...t,...UE(e)}}function zE({delay:e,repeat:t,repeatType:s,repeatDelay:a,from:r,...o}){return!!Object.keys(o).length}function WE(e,t){return e[t]||e.default||e}function YE(e,t,s,a,r){const o=WE(a,e);let l=o.from===null||o.from===void 0?t.get():o.from;const i=pc(e,s);l==="none"&&i&&typeof s=="string"&&(l=LE(e,s));const c=pc(e,l);function u(d){const m={from:l,to:s,velocity:a.velocity?a.velocity:t.getVelocity(),onUpdate:g=>t.set(g)};return o.type==="inertia"||o.type==="decay"?wE({...m,...o}):Vp({...KE(o,m,e),onUpdate:g=>{m.onUpdate(g),o.onUpdate&&o.onUpdate(g)},onComplete:()=>{a.onComplete&&a.onComplete(),r&&r(),d&&d()}})}function p(d){return t.set(s),a.onComplete&&a.onComplete(),r&&r(),d&&d(),{stop:()=>{}}}return!c||!i||o.type===!1?p:u}function GE(){const{motionValues:e,stop:t,get:s}=jE();return{motionValues:e,stop:t,push:(r,o,l,i={},c)=>{const u=l[r],p=s(r,u,l);if(i&&i.immediate){p.set(o);return}const d=YE(r,p,o,i,c);p.start(d)}}}function ZE(e,t={},{motionValues:s,push:a,stop:r}=GE()){const o=k(t),l=L(!1);ce(s,d=>{l.value=Object.values(d).filter(m=>m.isAnimating()).length>0},{immediate:!0,deep:!0});const i=d=>{if(!o||!o[d])throw new Error(`The variant ${d} does not exist.`);return o[d]},c=d=>(typeof d=="string"&&(d=i(d)),Promise.all(Object.entries(d).map(([m,g])=>{if(m!=="transition")return new Promise(h=>a(m,g,e,d.transition||Yp(m,d[m]),h))}).filter(Boolean)));return{isAnimating:l,apply:c,set:d=>{const m=qr(d)?d:i(d);Object.entries(m).forEach(([g,h])=>{g!=="transition"&&a(g,h,e,{immediate:!0})})},leave:async d=>{let m;if(o&&(o.leave&&(m=o.leave),!o.leave&&o.initial&&(m=o.initial)),!m){d();return}await c(m),d()},stop:r}}const pl=typeof window<"u",JE=()=>pl&&window.onpointerdown===null,QE=()=>pl&&window.ontouchstart===null,XE=()=>pl&&window.onmousedown===null;function ew({target:e,state:t,variants:s,apply:a}){const r=k(s),o=L(!1),l=L(!1),i=L(!1),c=O(()=>{let p=[];return r&&(r.hovered&&(p=[...p,...Object.keys(r.hovered)]),r.tapped&&(p=[...p,...Object.keys(r.tapped)]),r.focused&&(p=[...p,...Object.keys(r.focused)])),p}),u=O(()=>{const p={};Object.assign(p,t.value),o.value&&r.hovered&&Object.assign(p,r.hovered),l.value&&r.tapped&&Object.assign(p,r.tapped),i.value&&r.focused&&Object.assign(p,r.focused);for(const d in p)c.value.includes(d)||delete p[d];return p});r.hovered&&(le(e,"mouseenter",()=>o.value=!0),le(e,"mouseleave",()=>{o.value=!1,l.value=!1}),le(e,"mouseout",()=>{o.value=!1,l.value=!1})),r.tapped&&(XE()&&(le(e,"mousedown",()=>l.value=!0),le(e,"mouseup",()=>l.value=!1)),JE()&&(le(e,"pointerdown",()=>l.value=!0),le(e,"pointerup",()=>l.value=!1)),QE()&&(le(e,"touchstart",()=>l.value=!0),le(e,"touchend",()=>l.value=!1))),r.focused&&(le(e,"focus",()=>i.value=!0),le(e,"blur",()=>i.value=!1)),ce(u,a)}function tw({set:e,target:t,apply:s,variants:a,variant:r}){const o=k(a);ce(()=>t,()=>{!o||(o.initial&&e("initial"),o.enter&&(r.value="enter"))},{immediate:!0,flush:"pre"})}function nw({state:e,apply:t}){ce(e,s=>{s&&t(s)},{immediate:!0})}function sw({target:e,variants:t,variant:s}){const a=k(t);a&&(a.visible||a.visibleOnce)&&yg(e,([{isIntersecting:r}])=>{a.visible?r?s.value="visible":s.value="initial":a.visibleOnce&&(r&&s.value!=="visibleOnce"?s.value="visibleOnce":s.value||(s.value="initial"))})}function aw(e,t={syncVariants:!0,lifeCycleHooks:!0,visibilityHooks:!0,eventListeners:!0}){t.lifeCycleHooks&&tw(e),t.syncVariants&&nw(e),t.visibilityHooks&&sw(e),t.eventListeners&&ew(e)}function Jp(e={}){const t=De({...e}),s=L({});return ce(t,()=>{const a={};for(const[r,o]of Object.entries(t)){const l=ul(r),i=Zp(o,l);a[r]=i}s.value=a},{immediate:!0,deep:!0}),{state:t,style:s}}function dl(e,t){ce(()=>At(e),s=>{!s||t(s)},{immediate:!0})}const rw={x:"translateX",y:"translateY",z:"translateZ"};function Qp(e={},t=!0){const s=De({...e}),a=L("");return ce(s,r=>{let o="",l=!1;if(t&&(r.x||r.y||r.z)){const i=[r.x||0,r.y||0,r.z||0].map(re.transform).join(",");o+=`translate3d(${i}) `,l=!0}for(const[i,c]of Object.entries(r)){if(t&&(i==="x"||i==="y"||i==="z"))continue;const u=ul(i),p=Zp(c,u);o+=`${rw[i]||i}(${p}) `}t&&!l&&(o+="translateZ(0px) "),a.value=o.trim()},{immediate:!0,deep:!0}),{state:s,transform:a}}const ow=["","X","Y","Z"],lw=["perspective","translate","scale","rotate","skew"],Xp=["transformPerspective","x","y","z"];lw.forEach(e=>{ow.forEach(t=>{const s=e+t;Xp.push(s)})});const iw=new Set(Xp);function fl(e){return iw.has(e)}const cw=new Set(["originX","originY","originZ"]);function ed(e){return cw.has(e)}function uw(e){const t={},s={};return Object.entries(e).forEach(([a,r])=>{fl(a)||ed(a)?t[a]=r:s[a]=r}),{transform:t,style:s}}function td(e){const{transform:t,style:s}=uw(e),{transform:a}=Qp(t),{style:r}=Jp(s);return a.value&&(r.value.transform=a.value),r.value}function pw(e,t){let s,a;const{state:r,style:o}=Jp();return dl(e,l=>{a=l;for(const i of Object.keys(Gp))l.style[i]===null||l.style[i]===""||fl(i)||ed(i)||(r[i]=l.style[i]);s&&Object.entries(s).forEach(([i,c])=>l.style[i]=c),t&&t(r)}),ce(o,l=>{if(!a){s=l;return}for(const i in l)a.style[i]=l[i]},{immediate:!0}),{style:r}}function dw(e){const t=e.trim().split(/\) |\)/);if(t.length===1)return{};const s=a=>a.endsWith("px")||a.endsWith("deg")?parseFloat(a):isNaN(Number(a))?Number(a):a;return t.reduce((a,r)=>{if(!r)return a;const[o,l]=r.split("("),c=l.split(",").map(p=>s(p.endsWith(")")?p.replace(")",""):p.trim())),u=c.length===1?c[0]:c;return{...a,[o]:u}},{})}function fw(e,t){Object.entries(dw(t)).forEach(([s,a])=>{const r=["x","y","z"];if(s==="translate3d"){if(a===0){r.forEach(o=>e[o]=0);return}a.forEach((o,l)=>e[r[l]]=o);return}if(a=parseFloat(a),s==="translateX"){e.x=a;return}if(s==="translateY"){e.y=a;return}if(s==="translateZ"){e.z=a;return}e[s]=a})}function mw(e,t){let s,a;const{state:r,transform:o}=Qp();return dl(e,l=>{a=l,l.style.transform&&fw(r,l.style.transform),s&&(l.style.transform=s),t&&t(r)}),ce(o,l=>{if(!a){s=l;return}a.style.transform=l},{immediate:!0}),{transform:r}}function hw(e,t){const s=De({}),a=l=>Object.entries(l).forEach(([i,c])=>s[i]=c),{style:r}=pw(e,a),{transform:o}=mw(e,a);return ce(s,l=>{Object.entries(l).forEach(([i,c])=>{const u=fl(i)?o:r;u[i]&&u[i]===c||(u[i]=c)})},{immediate:!0,deep:!0}),dl(e,()=>t&&a(t)),{motionProperties:s,style:r,transform:o}}function gw(e={}){const t=k(e),s=L();return{state:O(()=>{if(!!s.value)return t[s.value]}),variant:s}}function nd(e,t={},s){const{motionProperties:a}=hw(e),{variant:r,state:o}=gw(t),l=ZE(a,t),i={target:e,variant:r,variants:t,state:o,motionProperties:a,...l};return aw(i,s),i}const yw=["initial","enter","leave","visible","visible-once","hovered","tapped","focused","delay"],vw=(e,t)=>{const s=e.props?e.props:e.data&&e.data.attrs?e.data.attrs:{};s&&(s.variants&&qr(s.variants)&&(t.value={...t.value,...s.variants}),yw.forEach(a=>{if(a==="delay"){if(s&&s[a]&&Pm(s[a])){const r=s[a];t&&t.value&&(t.value.enter&&(t.value.enter.transition||(t.value.enter.transition={}),t.value.enter.transition={delay:r,...t.value.enter.transition}),t.value.visible&&(t.value.visible.transition||(t.value.visible.transition={}),t.value.visible.transition={delay:r,...t.value.visible.transition}),t.value.visibleOnce&&(t.value.visibleOnce.transition||(t.value.visibleOnce.transition={}),t.value.visibleOnce.transition={delay:r,...t.value.visibleOnce.transition}))}return}a==="visible-once"&&(a="visibleOnce"),s&&s[a]&&qr(s[a])&&(t.value[a]=s[a])}))},Br=e=>({created:(s,a,r)=>{const o=a.value&&typeof a.value=="string"?a.value:r.key;o&&wr[o]&&wr[o].stop();const l=L(e||{});typeof a.value=="object"&&(l.value=a.value),vw(r,l);const i=nd(s,l);s.motionInstance=i,o&&(wr[o]=i)},getSSRProps(s,a){let{initial:r}=s.value||a&&(a==null?void 0:a.props)||{};r=k(r);const o=_8((e==null?void 0:e.initial)||{},r||{});return!o||Object.keys(o).length===0?void 0:{style:td(o)}}}),_w={initial:{opacity:0},enter:{opacity:1}},xw={initial:{opacity:0},visible:{opacity:1}},bw={initial:{opacity:0},visibleOnce:{opacity:1}},kw={initial:{scale:0,opacity:0},enter:{scale:1,opacity:1}},Ew={initial:{scale:0,opacity:0},visible:{scale:1,opacity:1}},ww={initial:{scale:0,opacity:0},visibleOnce:{scale:1,opacity:1}},Cw={initial:{x:-100,rotate:90,opacity:0},enter:{x:0,rotate:0,opacity:1}},Aw={initial:{x:-100,rotate:90,opacity:0},visible:{x:0,rotate:0,opacity:1}},Bw={initial:{x:-100,rotate:90,opacity:0},visibleOnce:{x:0,rotate:0,opacity:1}},Sw={initial:{x:100,rotate:-90,opacity:0},enter:{x:0,rotate:0,opacity:1}},Ow={initial:{x:100,rotate:-90,opacity:0},visible:{x:0,rotate:0,opacity:1}},Tw={initial:{x:100,rotate:-90,opacity:0},visibleOnce:{x:0,rotate:0,opacity:1}},Pw={initial:{y:-100,rotate:-90,opacity:0},enter:{y:0,rotate:0,opacity:1}},Dw={initial:{y:-100,rotate:-90,opacity:0},visible:{y:0,rotate:0,opacity:1}},$w={initial:{y:-100,rotate:-90,opacity:0},visibleOnce:{y:0,rotate:0,opacity:1}},Fw={initial:{y:100,rotate:90,opacity:0},enter:{y:0,rotate:0,opacity:1}},Mw={initial:{y:100,rotate:90,opacity:0},visible:{y:0,rotate:0,opacity:1}},jw={initial:{y:100,rotate:90,opacity:0},visibleOnce:{y:0,rotate:0,opacity:1}},Iw={initial:{x:-100,opacity:0},enter:{x:0,opacity:1}},Nw={initial:{x:-100,opacity:0},visible:{x:0,opacity:1}},Rw={initial:{x:-100,opacity:0},visibleOnce:{x:0,opacity:1}},Lw={initial:{x:100,opacity:0},enter:{x:0,opacity:1}},Hw={initial:{x:100,opacity:0},visible:{x:0,opacity:1}},Vw={initial:{x:100,opacity:0},visibleOnce:{x:0,opacity:1}},qw={initial:{y:-100,opacity:0},enter:{y:0,opacity:1}},Uw={initial:{y:-100,opacity:0},visible:{y:0,opacity:1}},Kw={initial:{y:-100,opacity:0},visibleOnce:{y:0,opacity:1}},zw={initial:{y:100,opacity:0},enter:{y:0,opacity:1}},Ww={initial:{y:100,opacity:0},visible:{y:0,opacity:1}},Yw={initial:{y:100,opacity:0},visibleOnce:{y:0,opacity:1}},yo={__proto__:null,fade:_w,fadeVisible:xw,fadeVisibleOnce:bw,pop:kw,popVisible:Ew,popVisibleOnce:ww,rollBottom:Fw,rollLeft:Cw,rollRight:Sw,rollTop:Pw,rollVisibleBottom:Mw,rollVisibleLeft:Aw,rollVisibleRight:Ow,rollVisibleTop:Dw,rollVisibleOnceBottom:jw,rollVisibleOnceLeft:Bw,rollVisibleOnceRight:Tw,rollVisibleOnceTop:$w,slideBottom:zw,slideLeft:Iw,slideRight:Lw,slideTop:qw,slideVisibleBottom:Ww,slideVisibleLeft:Nw,slideVisibleRight:Hw,slideVisibleTop:Uw,slideVisibleOnceBottom:Yw,slideVisibleOnceLeft:Rw,slideVisibleOnceRight:Vw,slideVisibleOnceTop:Kw},Gw=we({props:{is:{type:[String,Object],required:!1},preset:{type:String,required:!1},instance:{type:Object,required:!1},variants:{type:Object,required:!1},initial:{type:Object,required:!1},enter:{type:Object,required:!1},leave:{type:Object,required:!1},visible:{type:Object,required:!1},visibleOnce:{type:Object,required:!1},hovered:{type:Object,required:!1},tapped:{type:Object,required:!1},focused:{type:Object,required:!1},delay:{type:[Number,String],required:!1}},setup(e){var i;const t=sm(),s=De({});if(!e.is&&!t.default)return()=>dt("div",{});const a=O(()=>{let c;return e.preset&&(c=yo[e.preset]),c}),r=O(()=>({initial:e.initial,enter:e.enter,leave:e.leave,visible:e.visible,visibleOnce:e.visibleOnce,hovered:e.hovered,tapped:e.tapped,focused:e.focused})),o=O(()=>{const c={...r.value,...a.value||{},...e.variants||{}};return e.delay&&(c.enter.transition={...c.enter.transition},c.enter.transition.delay=parseInt(e.delay)),c}),l=O(()=>{if(!e.is)return;let c=e.is;return typeof l.value=="string"&&!fd(c)&&(c=wa(c)),c});if(((i=process==null?void 0:process.env)==null?void 0:i.NODE_ENV)==="development"||(process==null?void 0:process.dev)){const c=u=>{var p;(p=u.variants)!=null&&p.initial&&u.set("initial"),setTimeout(()=>{var d,m,g;(d=u.variants)!=null&&d.enter&&u.apply("enter"),(m=u.variants)!=null&&m.visible&&u.apply("visible"),(g=u.variants)!=null&&g.visibleOnce&&u.apply("visibleOnce")},10)};jo(()=>Object.entries(s).forEach(([u,p])=>c(p)))}return{slots:t,component:l,motionConfig:o,instances:s}},render({slots:e,motionConfig:t,instances:s,component:a}){var i;const r=td(t.initial||{}),o=(c,u)=>(c.props||(c.props={}),c.props.style=r,c.props.onVnodeMounted=({el:p})=>{const d=nd(p,t);s[u]=d},c);if(a){const c=dt(a,void 0,e);return o(c,0),c}return(((i=e.default)==null?void 0:i.call(e))||[]).map((c,u)=>o(c,u))}});function Zw(e){const t="\xE0\xE1\xE2\xE4\xE6\xE3\xE5\u0101\u0103\u0105\xE7\u0107\u010D\u0111\u010F\xE8\xE9\xEA\xEB\u0113\u0117\u0119\u011B\u011F\u01F5\u1E27\xEE\xEF\xED\u012B\u012F\xEC\u0142\u1E3F\xF1\u0144\u01F9\u0148\xF4\xF6\xF2\xF3\u0153\xF8\u014D\xF5\u0151\u1E55\u0155\u0159\xDF\u015B\u0161\u015F\u0219\u0165\u021B\xFB\xFC\xF9\xFA\u016B\u01D8\u016F\u0171\u0173\u1E83\u1E8D\xFF\xFD\u017E\u017A\u017C\xB7/_,:;",s="aaaaaaaaaacccddeeeeeeeegghiiiiiilmnnnnoooooooooprrsssssttuuuuuuuuuwxyyzzz------",a=new RegExp(t.split("").join("|"),"g");return e.toString().replace(/[A-Z]/g,r=>`-${r}`).toLowerCase().replace(/\s+/g,"-").replace(a,r=>s.charAt(t.indexOf(r))).replace(/&/g,"-and-").replace(/[^\w\-]+/g,"").replace(/\-\-+/g,"-").replace(/^-+/,"").replace(/-+$/,"")}const Jw={install(e,t){if(e.directive("motion",Br()),e.component("Motion",Gw),!t||t&&!t.excludePresets)for(const s in yo){const a=yo[s];e.directive(`motion-${Zw(s)}`,Br(a))}if(t&&t.directives)for(const s in t.directives){const a=t.directives[s];a.initial,e.directive(`motion-${s}`,Br(a))}}};var dc;const Is=typeof window<"u",Qw=Object.prototype.toString,Xw=e=>Qw.call(e)==="[object Object]";Is&&((dc=window==null?void 0:window.navigator)==null?void 0:dc.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function e5(e){return $c()?(Fc(e),!0):!1}function t5(e){var t;const s=k(e);return(t=s==null?void 0:s.$el)!=null?t:s}const n5=Is?window:void 0,vo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},_o="__vueuse_ssr_handlers__";vo[_o]=vo[_o]||{};vo[_o];function s5(e,t={}){const{immediate:s=!0,window:a=n5}=t,r=L(!1);let o=null;function l(){!r.value||!a||(e(),o=a.requestAnimationFrame(l))}function i(){!r.value&&a&&(r.value=!0,l())}function c(){r.value=!1,o!=null&&a&&(a.cancelAnimationFrame(o),o=null)}return s&&i(),e5(c),{isActive:r,pause:c,resume:i}}var fc;(function(e){e.UP="UP",e.RIGHT="RIGHT",e.DOWN="DOWN",e.LEFT="LEFT",e.NONE="NONE"})(fc||(fc={}));const ml="vue-starport-injection",sd="vue-starport-options",a5={duration:800,easing:"cubic-bezier(0.45, 0, 0.55, 1)",keepAlive:!1},ad={port:{type:String,required:!0},duration:{type:Number,required:!1},easing:{type:String,required:!1},keepAlive:{type:Boolean,required:!1,default:void 0},mountedProps:{type:Object,required:!1},initialProps:{type:Object,required:!1}};var r5=Object.defineProperty,ja=Object.getOwnPropertySymbols,rd=Object.prototype.hasOwnProperty,od=Object.prototype.propertyIsEnumerable,mc=(e,t,s)=>t in e?r5(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,o5=(e,t)=>{for(var s in t||(t={}))rd.call(t,s)&&mc(e,s,t[s]);if(ja)for(var s of ja(t))od.call(t,s)&&mc(e,s,t[s]);return e},hc=(e,t)=>{var s={};for(var a in e)rd.call(e,a)&&t.indexOf(a)<0&&(s[a]=e[a]);if(e!=null&&ja)for(var a of ja(e))t.indexOf(a)<0&&od.call(e,a)&&(s[a]=e[a]);return s};const l5=we({name:"StarportProxy",props:o5({props:{type:Object,default:()=>({})},component:{type:Object,required:!0}},ad),setup(e,t){const s=U(ml),a=O(()=>s.getInstance(e.port,e.component)),r=L(),o=a.value.generateId(),l=L(!1);return a.value.isVisible||(a.value.land(),l.value=!0),us(async()=>{a.value.el||(a.value.el=r.value,await Ye(),l.value=!0,a.value.rect.update())}),Ya(async()=>{a.value.rect.update(),a.value.liftOff(),a.value.el=void 0,l.value=!1,!a.value.options.keepAlive&&(await Ye(),await Ye(),!a.value.el&&s.dispose(a.value.port))}),ce(()=>e,async()=>{a.value.props&&await Ye();const i=e,{props:c}=i,u=hc(i,["props"]);a.value.props=c||{},a.value.setLocalOptions(u)},{deep:!0,immediate:!0}),()=>{const i=e,{initialProps:c,mountedProps:u}=i,p=hc(i,["initialProps","mountedProps"]),d=gt(p,(l.value?u:c)||{});return dt("div",gt(d,{id:o,ref:r,"data-starport-proxy":a.value.componentId,"data-starport-landed":a.value.isLanded?"true":void 0,"data-starport-floating":a.value.isLanded?void 0:"true"}),t.slots.default?dt(t.slots.default):void 0)}}});var i5=Object.defineProperty,c5=Object.defineProperties,u5=Object.getOwnPropertyDescriptors,gc=Object.getOwnPropertySymbols,p5=Object.prototype.hasOwnProperty,d5=Object.prototype.propertyIsEnumerable,yc=(e,t,s)=>t in e?i5(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,f5=(e,t)=>{for(var s in t||(t={}))p5.call(t,s)&&yc(e,s,t[s]);if(gc)for(var s of gc(t))d5.call(t,s)&&yc(e,s,t[s]);return e},m5=(e,t)=>c5(e,u5(t));const h5=we({name:"Starport",inheritAttrs:!0,props:ad,setup(e,t){const s=L(!1);return us(()=>{s.value=!0}),()=>{var l,i;const a=(i=(l=t.slots).default)==null?void 0:i.call(l);if(!a)throw new Error("[Vue Starport] Slot is required to use <Starport>");if(a.length!==1)throw new Error(`[Vue Starport] <Starport> requires exactly one slot, but got ${a.length}`);const r=a[0];let o=r.type;return(!Xw(o)||ns(o))&&(o={render(){return a}}),dt(l5,m5(f5({},e),{key:e.port,component:qa(o),props:r.props}))}}});function g5(e){const t=De({height:0,width:0,left:0,top:0,update:a,listen:o,pause:l,margin:"0px",padding:"0px"}),s=Is?document.documentElement||document.body:void 0;function a(){if(!Is)return;const i=t5(e);if(!i)return;const{height:c,width:u,left:p,top:d}=i.getBoundingClientRect(),m=window.getComputedStyle(i),g=m.margin,h=m.padding;Object.assign(t,{height:c,width:u,left:p,top:s.scrollTop+d,margin:g,padding:h})}const r=s5(a,{immediate:!1});function o(){!Is||(a(),r.resume())}function l(){r.pause()}return t}let y5=(e,t=21)=>(s=t)=>{let a="",r=s;for(;r--;)a+=e[Math.random()*e.length|0];return a};const vc=y5("abcdefghijklmnopqrstuvwxyz",5);function _c(e){return e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase().replace(/[^\w\d_-]/g,"")}function v5(e){var t;return e.name||((t=e.__file)==null?void 0:t.split(/[\/\\.]/).slice(-2)[0])||""}var _5=Object.defineProperty,xc=Object.getOwnPropertySymbols,x5=Object.prototype.hasOwnProperty,b5=Object.prototype.propertyIsEnumerable,bc=(e,t,s)=>t in e?_5(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,Sr=(e,t)=>{for(var s in t||(t={}))x5.call(t,s)&&bc(e,s,t[s]);if(xc)for(var s of xc(t))b5.call(t,s)&&bc(e,s,t[s]);return e};function k5(e,t,s={}){const a=v5(t),r=_c(a)||vc(),o=L(),l=L(null),i=L(!1),c=L(!1),u=bd(!0),p=L({}),d=O(()=>Sr(Sr(Sr({},a5),s),p.value)),m=L(0);let g;u.run(()=>{g=g5(o),ce(o,async b=>{b&&(c.value=!0),await Ye(),o.value||(c.value=!1)})});const h=_c(e);function _(){return`starport-${r}-${h}-${vc()}`}const x=_();return De({el:o,id:x,port:e,props:l,rect:g,scope:u,isLanded:i,isVisible:c,options:d,liftOffTime:m,component:t,componentName:a,componentId:r,generateId:_,setLocalOptions(b={}){p.value=JSON.parse(JSON.stringify(b))},elRef(){return o},liftOff(){!i.value||(i.value=!1,m.value=Date.now(),g.listen())},land(){i.value||(i.value=!0,g.pause())}})}function E5(e){const t=De(new Map);function s(r,o){let l=t.get(r);return l||(l=k5(r,o,e),t.set(r,l)),l.component=o,l}function a(r){var o;(o=t.get(r))==null||o.scope.stop(),t.delete(r)}return{portMap:t,dispose:a,getInstance:s}}var w5=Object.defineProperty,C5=Object.defineProperties,A5=Object.getOwnPropertyDescriptors,kc=Object.getOwnPropertySymbols,B5=Object.prototype.hasOwnProperty,S5=Object.prototype.propertyIsEnumerable,Ec=(e,t,s)=>t in e?w5(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,O5=(e,t)=>{for(var s in t||(t={}))B5.call(t,s)&&Ec(e,s,t[s]);if(kc)for(var s of kc(t))S5.call(t,s)&&Ec(e,s,t[s]);return e},T5=(e,t)=>C5(e,A5(t));const P5=we({name:"StarportCraft",props:{port:{type:String,required:!0},component:{type:Object,required:!0}},setup(e){const t=U(ml);if(!t)throw new Error("[Vue Starport] Failed to find the carrier, all Starport components must be wrapped in a <StarportCarrier> component.");const s=O(()=>t.getInstance(e.port,e.component)),a=O(()=>{var l;return((l=s.value.el)==null?void 0:l.id)||s.value.id}),r=O(()=>{const l=Date.now()-s.value.liftOffTime,i=Math.max(0,s.value.options.duration-l),c=s.value.rect,u={position:"absolute",left:0,top:0,width:`${c.width}px`,height:`${c.height}px`,margin:c.margin,padding:c.padding,transform:`translate3d(${c.left}px,${c.top}px,0px)`};return!s.value.isVisible||!s.value.el?T5(O5({},u),{zIndex:-1,display:"none"}):(s.value.isLanded?u.display="none":Object.assign(u,{transitionProperty:"all",transitionDuration:`${i}ms`,transitionTimingFunction:s.value.options.easing}),u)}),o={};return()=>{const l=!!(s.value.isLanded&&s.value.el);return dt("div",{style:r.value,"data-starport-craft":s.value.componentId,"data-starport-landed":s.value.isLanded?"true":void 0,"data-starport-floating":s.value.isLanded?void 0:"true",onTransitionend:s.value.land},dt(Wf,{to:l?`#${a.value}`:"body",disabled:!l},dt(s.value.component,gt(o,s.value.props))))}}}),D5=we({name:"StarportCarrier",setup(e,{slots:t}){const s=E5(U(sd,{}));return Mn().appContext.app.provide(ml,s),()=>{var r;return[(r=t.default)==null?void 0:r.call(t),Array.from(s.portMap.entries()).map(([o,{component:l}])=>dt(P5,{key:o,port:o,component:l}))]}}});function $5(e={}){return{install(t){t.provide(sd,e),t.component("Starport",h5),t.component("StarportCarrier",D5)}}}function F5(e){function t(){document.documentElement.style.setProperty("--vh",`${window.innerHeight*.01}px`)}t(),window.addEventListener("resize",t),e.app.use(Jw),e.app.use($5({keepAlive:!0}))}function lt(e,t,s){var a,r;return(r=((a=e.instance)==null?void 0:a.$).provides[t])!=null?r:s}function M5(){return{install(e){e.directive("click",{name:"v-click",mounted(t,s){var p,d,m,g;if($s.value||((p=lt(s,Os))==null?void 0:p.value))return;const a=lt(s,bn),r=lt(s,Ss),o=lt(s,zr),l=s.modifiers.hide!==!1&&s.modifiers.hide!=null,i=s.modifiers.fade!==!1&&s.modifiers.fade!=null,c=((d=a==null?void 0:a.value)==null?void 0:d.length)||0,u=i?kh:ur;if(a&&!((m=a==null?void 0:a.value)!=null&&m.includes(t))&&a.value.push(t),s.value==null&&(s.value=a==null?void 0:a.value.length),!(o!=null&&o.value.has(s.value)))o==null||o.value.set(s.value,[t]);else if(!((g=o==null?void 0:o.value.get(s.value))!=null&&g.includes(t))){const h=(o==null?void 0:o.value.get(s.value))||[];o==null||o.value.set(s.value,[t].concat(h))}t==null||t.classList.toggle(vn,!0),r&&ce(r,()=>{var b;const h=(b=r==null?void 0:r.value)!=null?b:0,_=s.value!=null?h>=s.value:h>c;t.classList.contains(pr)||t.classList.toggle(u,!_),l!==!1&&l!==void 0&&t.classList.toggle(u,_),t.classList.toggle(ys,!1);const x=o==null?void 0:o.value.get(h);x==null||x.forEach((w,E)=>{w.classList.toggle(ua,!1),E===x.length-1?w.classList.toggle(ys,!0):w.classList.toggle(ua,!0)}),t.classList.contains(ys)||t.classList.toggle(ua,_)},{immediate:!0})},unmounted(t,s){t==null||t.classList.toggle(vn,!1);const a=lt(s,bn);a!=null&&a.value&&Wr(a.value,t)}}),e.directive("after",{name:"v-after",mounted(t,s){var i,c;if($s.value||((i=lt(s,Os))==null?void 0:i.value))return;const a=lt(s,bn),r=lt(s,Ss),o=lt(s,zr),l=a==null?void 0:a.value.length;s.value==null&&(s.value=a==null?void 0:a.value.length),o!=null&&o.value.has(s.value)?(c=o==null?void 0:o.value.get(s.value))==null||c.push(t):o==null||o.value.set(s.value,[t]),t==null||t.classList.toggle(vn,!0),r&&ce(r,()=>{var p,d,m;const u=((p=r.value)!=null?p:0)>=((m=(d=s.value)!=null?d:l)!=null?m:0);t.classList.contains(pr)||t.classList.toggle(ur,!u),t.classList.toggle(ys,!1),t.classList.contains(ys)||t.classList.toggle(ua,u)},{immediate:!0})},unmounted(t){t==null||t.classList.toggle(vn,!0)}}),e.directive("click-hide",{name:"v-click-hide",mounted(t,s){var l,i,c;if($s.value||((l=lt(s,Os))==null?void 0:l.value))return;const a=lt(s,bn),r=lt(s,Ss),o=((i=a==null?void 0:a.value)==null?void 0:i.length)||0;a&&!((c=a==null?void 0:a.value)!=null&&c.includes(t))&&a.value.push(t),t==null||t.classList.toggle(vn,!0),r&&ce(r,()=>{var d;const u=(d=r==null?void 0:r.value)!=null?d:0,p=s.value!=null?u>=s.value:u>o;t.classList.toggle(ur,p),t.classList.toggle(pr,p)},{immediate:!0})},unmounted(t,s){t==null||t.classList.toggle(vn,!1);const a=lt(s,bn);a!=null&&a.value&&Wr(a.value,t)}})}}}function j5(e,t){const s=ip(e),a=cp(t,s.currentRoute,s.currentPage);return{nav:{...s,...a,downloadPDF:oo,next:ln,nextSlide:Ys,openInEditor:h8,prev:cn,prevSlide:Gs},configs:ve,themeConfigs:O(()=>ve.themeConfig)}}function I5(){return{install(e){const t=j5(Zt,Ot);e.provide(Z,De(t))}}}const fs=Bm(y8);fs.use(mt);fs.use(gh());fs.use(M5());fs.use(I5());F5({app:fs,router:mt});fs.mount("#app");export{Kv as $,Av as A,m8 as B,us as C,De as D,H5 as E,Ee as F,U5 as G,ce as H,ee as I,xe as J,tt as K,jv as L,N5 as M,R5 as N,Ot as O,$a as P,u8 as Q,_r as R,dr as S,Ks as T,yr as U,H1 as V,Go as W,Zo as X,N1 as Y,Re as Z,sp as _,Z as a,rp as a0,$t as a1,L5 as a2,Tt as a3,ks as a4,pa as a5,Cn as a6,Rt as a7,no as a8,fv as a9,mv as aa,hv as ab,yv as ac,ps as ad,ku as ae,K5 as af,nt as ag,C0 as ah,Pu as ai,vv as aj,Ya as ak,$v as al,_h as b,ve as c,we as d,nf as e,V as f,n as g,k as h,U as i,Ve as j,hp as k,f as l,W as m,Je as n,A as o,me as p,Du as q,Qs as r,Me as s,Pn as t,V5 as u,L as v,q5 as w,O as x,ut as y,G as z};
