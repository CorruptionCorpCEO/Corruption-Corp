(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}})();const Bu="modulepreload",Du=function(t){return"/pinball/"+t},ba={},ql=function(e,n,s){let i=Promise.resolve();if(n&&n.length>0){let o=function(c){return Promise.all(c.map(d=>Promise.resolve(d).then(u=>({status:"fulfilled",value:u}),u=>({status:"rejected",reason:u}))))};document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),l=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));i=o(n.map(c=>{if(c=Du(c),c in ba)return;ba[c]=!0;const d=c.endsWith(".css"),u=d?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${u}`))return;const f=document.createElement("link");if(f.rel=d?"stylesheet":Bu,d||(f.as="script"),f.crossOrigin="",f.href=c,l&&f.setAttribute("nonce",l),document.head.appendChild(f),d)return new Promise((h,p)=>{f.addEventListener("load",h),f.addEventListener("error",()=>p(new Error(`Unable to preload CSS for ${c}`)))})}))}function r(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return i.then(o=>{for(const a of o||[])a.status==="rejected"&&r(a.reason);return e().catch(r)})},Ou=()=>{};var wa={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kl=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Nu=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const i=t[n++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=t[n++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(l>>10)),e[s++]=String.fromCharCode(56320+(l&1023))}else{const r=t[n++],o=t[n++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},Jl={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<t.length;i+=3){const r=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,c=l?t[i+2]:0,d=r>>2,u=(r&3)<<4|a>>4;let f=(a&15)<<2|c>>6,h=c&63;l||(h=64,o||(f=64)),s.push(n[d],n[u],n[f],n[h])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Kl(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Nu(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<t.length;){const r=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const u=i<t.length?n[t.charAt(i)]:64;if(++i,r==null||a==null||c==null||u==null)throw new Uu;const f=r<<2|a>>4;if(s.push(f),c!==64){const h=a<<4&240|c>>2;if(s.push(h),u!==64){const p=c<<6&192|u;s.push(p)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Uu extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Fu=function(t){const e=Kl(t);return Jl.encodeByteArray(e,!0)},_i=function(t){return Fu(t).replace(/\./g,"")},Ql=function(t){try{return Jl.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hu(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $u=()=>Hu().__FIREBASE_DEFAULTS__,Wu=()=>{if(typeof process>"u"||typeof wa>"u")return;const t=wa.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Vu=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Ql(t[1]);return e&&JSON.parse(e)},rr=()=>{try{return Ou()||$u()||Wu()||Vu()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Zl=t=>{var e,n;return(n=(e=rr())==null?void 0:e.emulatorHosts)==null?void 0:n[t]},Ay=t=>{const e=Zl(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},ec=()=>{var t;return(t=rr())==null?void 0:t.config},tc=t=>{var e;return(e=rr())==null?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yu{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ly(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",i=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}},...t};return[_i(JSON.stringify(n)),_i(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _e(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Xu(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(_e())}function nc(){var e;const t=(e=rr())==null?void 0:e.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function zu(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Gu(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function ju(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function qu(){const t=_e();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function My(){return!nc()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Py(){return!nc()&&!!navigator.userAgent&&(navigator.userAgent.includes("Safari")||navigator.userAgent.includes("WebKit"))&&!navigator.userAgent.includes("Chrome")}function Ku(){try{return typeof indexedDB=="object"}catch{return!1}}function Ju(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var r;e(((r=i.error)==null?void 0:r.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qu="FirebaseError";class qt extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=Qu,Object.setPrototypeOf(this,qt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ys.prototype.create)}}class Ys{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?Zu(r,s):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new qt(i,a,s)}}function Zu(t,e){return t.replace(ef,(n,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const ef=/\{\$([^}]+)}/g;function tf(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function qn(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const i of n){if(!s.includes(i))return!1;const r=t[i],o=e[i];if(va(r)&&va(o)){if(!qn(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function va(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xs(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function nf(t,e){const n=new sf(t,e);return n.subscribe.bind(n)}class sf{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let i;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");rf(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:s},i.next===void 0&&(i.next=Ir),i.error===void 0&&(i.error=Ir),i.complete===void 0&&(i.complete=Ir);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function rf(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Ir(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kt(t){return t&&t._delegate?t._delegate:t}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function To(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function of(t){return(await fetch(t,{credentials:"include"})).ok}class Kn{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class af{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new Yu;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(e==null?void 0:e.optional)??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(cf(e))try{this.getOrInitializeService({instanceIdentifier:tn})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=tn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=tn){return this.instances.has(e)}getOptions(e=tn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);s===a&&o.resolve(i)}return i}onInit(e,n){const s=this.normalizeInstanceIdentifier(n),i=this.onInitCallbacks.get(s)??new Set;i.add(e),this.onInitCallbacks.set(s,i);const r=this.instances.get(s);return r&&e(r,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const i of s)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:lf(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=tn){return this.component?this.component.multipleInstances?e:tn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function lf(t){return t===tn?void 0:t}function cf(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class df{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new af(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var V;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(V||(V={}));const uf={debug:V.DEBUG,verbose:V.VERBOSE,info:V.INFO,warn:V.WARN,error:V.ERROR,silent:V.SILENT},ff=V.INFO,hf={[V.DEBUG]:"log",[V.VERBOSE]:"log",[V.INFO]:"info",[V.WARN]:"warn",[V.ERROR]:"error"},pf=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),i=hf[e];if(i)console[i](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class sc{constructor(e){this.name=e,this._logLevel=ff,this._logHandler=pf,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in V))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?uf[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,V.DEBUG,...e),this._logHandler(this,V.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,V.VERBOSE,...e),this._logHandler(this,V.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,V.INFO,...e),this._logHandler(this,V.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,V.WARN,...e),this._logHandler(this,V.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,V.ERROR,...e),this._logHandler(this,V.ERROR,...e)}}const mf=(t,e)=>e.some(n=>t instanceof n);let Ia,Ea;function gf(){return Ia||(Ia=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function yf(){return Ea||(Ea=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const ic=new WeakMap,Dr=new WeakMap,rc=new WeakMap,Er=new WeakMap,Ao=new WeakMap;function bf(t){const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(Ot(t.result)),i()},o=()=>{s(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&ic.set(n,t)}).catch(()=>{}),Ao.set(e,t),e}function wf(t){if(Dr.has(t))return;const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),i()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});Dr.set(t,e)}let Or={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Dr.get(t);if(e==="objectStoreNames")return t.objectStoreNames||rc.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Ot(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function vf(t){Or=t(Or)}function If(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(_r(this),e,...n);return rc.set(s,e.sort?e.sort():[e]),Ot(s)}:yf().includes(t)?function(...e){return t.apply(_r(this),e),Ot(ic.get(this))}:function(...e){return Ot(t.apply(_r(this),e))}}function Ef(t){return typeof t=="function"?If(t):(t instanceof IDBTransaction&&wf(t),mf(t,gf())?new Proxy(t,Or):t)}function Ot(t){if(t instanceof IDBRequest)return bf(t);if(Er.has(t))return Er.get(t);const e=Ef(t);return e!==t&&(Er.set(t,e),Ao.set(e,t)),e}const _r=t=>Ao.get(t);function _f(t,e,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(t,e),a=Ot(o);return s&&o.addEventListener("upgradeneeded",l=>{s(Ot(o.result),l.oldVersion,l.newVersion,Ot(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{r&&l.addEventListener("close",()=>r()),i&&l.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const Sf=["get","getKey","getAll","getAllKeys","count"],kf=["put","add","delete","clear"],Sr=new Map;function _a(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Sr.get(e))return Sr.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,i=kf.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||Sf.includes(n)))return;const r=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let c=l.store;return s&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&l.done]))[0]};return Sr.set(e,r),r}vf(t=>({...t,get:(e,n,s)=>_a(e,n)||t.get(e,n,s),has:(e,n)=>!!_a(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xf{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Cf(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function Cf(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Nr="@firebase/app",Sa="0.15.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bt=new sc("@firebase/app"),Tf="@firebase/app-compat",Af="@firebase/analytics-compat",Lf="@firebase/analytics",Mf="@firebase/app-check-compat",Pf="@firebase/app-check",Rf="@firebase/auth",Bf="@firebase/auth-compat",Df="@firebase/database",Of="@firebase/data-connect",Nf="@firebase/database-compat",Uf="@firebase/functions",Ff="@firebase/functions-compat",Hf="@firebase/installations",$f="@firebase/installations-compat",Wf="@firebase/messaging",Vf="@firebase/messaging-compat",Yf="@firebase/performance",Xf="@firebase/performance-compat",zf="@firebase/remote-config",Gf="@firebase/remote-config-compat",jf="@firebase/storage",qf="@firebase/storage-compat",Kf="@firebase/firestore",Jf="@firebase/ai",Qf="@firebase/firestore-compat",Zf="firebase",eh="12.15.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Si="[DEFAULT]",th={[Nr]:"fire-core",[Tf]:"fire-core-compat",[Lf]:"fire-analytics",[Af]:"fire-analytics-compat",[Pf]:"fire-app-check",[Mf]:"fire-app-check-compat",[Rf]:"fire-auth",[Bf]:"fire-auth-compat",[Df]:"fire-rtdb",[Of]:"fire-data-connect",[Nf]:"fire-rtdb-compat",[Uf]:"fire-fn",[Ff]:"fire-fn-compat",[Hf]:"fire-iid",[$f]:"fire-iid-compat",[Wf]:"fire-fcm",[Vf]:"fire-fcm-compat",[Yf]:"fire-perf",[Xf]:"fire-perf-compat",[zf]:"fire-rc",[Gf]:"fire-rc-compat",[jf]:"fire-gcs",[qf]:"fire-gcs-compat",[Kf]:"fire-fst",[Qf]:"fire-fst-compat",[Jf]:"fire-vertex","fire-js":"fire-js",[Zf]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ki=new Map,nh=new Map,Ur=new Map;function ka(t,e){try{t.container.addComponent(e)}catch(n){bt.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Ps(t){const e=t.name;if(Ur.has(e))return bt.debug(`There were multiple attempts to register component ${e}.`),!1;Ur.set(e,t);for(const n of ki.values())ka(n,t);for(const n of nh.values())ka(n,t);return!0}function Lo(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Ry(t,e,n=Si){Lo(t,e).clearInstance(n)}function lt(t){return t==null?!1:t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sh={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Nt=new Ys("app","Firebase",sh);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ih{constructor(e,n,s){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Kn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Nt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zs=eh;function oc(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s={name:Si,automaticDataCollectionEnabled:!0,...e},i=s.name;if(typeof i!="string"||!i)throw Nt.create("bad-app-name",{appName:String(i)});if(n||(n=ec()),!n)throw Nt.create("no-options");const r=ki.get(i);if(r){if(qn(n,r.options)&&qn(s,r.config))return r;throw Nt.create("duplicate-app",{appName:i})}const o=new df(i);for(const l of Ur.values())o.addComponent(l);const a=new ih(n,s,o);return ki.set(i,a),a}function rh(t=Si){const e=ki.get(t);if(!e&&t===Si&&ec())return oc();if(!e)throw Nt.create("no-app",{appName:t});return e}function Fn(t,e,n){let s=th[t]??t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),r=e.match(/\s|\//);if(i||r){const o=[`Unable to register library "${s}" with version "${e}":`];i&&o.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&r&&o.push("and"),r&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),bt.warn(o.join(" "));return}Ps(new Kn(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oh="firebase-heartbeat-database",ah=1,Rs="firebase-heartbeat-store";let kr=null;function ac(){return kr||(kr=_f(oh,ah,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Rs)}catch(n){console.warn(n)}}}}).catch(t=>{throw Nt.create("idb-open",{originalErrorMessage:t.message})})),kr}async function lh(t){try{const n=(await ac()).transaction(Rs),s=await n.objectStore(Rs).get(lc(t));return await n.done,s}catch(e){if(e instanceof qt)bt.warn(e.message);else{const n=Nt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});bt.warn(n.message)}}}async function xa(t,e){try{const s=(await ac()).transaction(Rs,"readwrite");await s.objectStore(Rs).put(e,lc(t)),await s.done}catch(n){if(n instanceof qt)bt.warn(n.message);else{const s=Nt.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});bt.warn(s.message)}}}function lc(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ch=1024,dh=30;class uh{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new hh(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Ca();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(o=>o.date===r))return;if(this._heartbeatsCache.heartbeats.push({date:r,agent:i}),this._heartbeatsCache.heartbeats.length>dh){const o=ph(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){bt.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Ca(),{heartbeatsToSend:s,unsentEntries:i}=fh(this._heartbeatsCache.heartbeats),r=_i(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}catch(n){return bt.warn(n),""}}}function Ca(){return new Date().toISOString().substring(0,10)}function fh(t,e=ch){const n=[];let s=t.slice();for(const i of t){const r=n.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),Ta(n)>e){r.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Ta(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class hh{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Ku()?Ju().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await lh(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return xa(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return xa(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Ta(t){return _i(JSON.stringify({version:2,heartbeats:t})).length}function ph(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let s=1;s<t.length;s++)t[s].date<n&&(n=t[s].date,e=s);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mh(t){Ps(new Kn("platform-logger",e=>new xf(e),"PRIVATE")),Ps(new Kn("heartbeat",e=>new uh(e),"PRIVATE")),Fn(Nr,Sa,t),Fn(Nr,Sa,"esm2020"),Fn("fire-js","")}mh("");var gh="firebase",yh="12.15.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Fn(gh,yh,"app");function cc(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const bh=cc,dc=new Ys("auth","Firebase",cc());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xi=new sc("@firebase/auth");function wh(t,...e){xi.logLevel<=V.WARN&&xi.warn(`Auth (${zs}): ${t}`,...e)}function ui(t,...e){xi.logLevel<=V.ERROR&&xi.error(`Auth (${zs}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wt(t,...e){throw Mo(t,...e)}function Je(t,...e){return Mo(t,...e)}function uc(t,e,n){const s={...bh(),[e]:n};return new Ys("auth","Firebase",s).create(e,{appName:t.name})}function hn(t){return uc(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Mo(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return dc.create(t,...e)}function L(t,e,...n){if(!t)throw Mo(e,...n)}function ut(t){const e="INTERNAL ASSERTION FAILED: "+t;throw ui(e),new Error(e)}function vt(t,e){t||ut(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fr(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.href)||""}function vh(){return Aa()==="http:"||Aa()==="https:"}function Aa(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ih(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(vh()||Gu()||"connection"in navigator)?navigator.onLine:!0}function Eh(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gs{constructor(e,n){this.shortDelay=e,this.longDelay=n,vt(n>e,"Short delay should be less than long delay!"),this.isMobile=Xu()||ju()}get(){return Ih()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Po(t,e){vt(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fc{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;ut("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;ut("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;ut("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _h={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sh=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],kh=new Gs(3e4,6e4);function Ro(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function is(t,e,n,s,i={}){return hc(t,i,async()=>{let r={},o={};s&&(e==="GET"?o=s:r={body:JSON.stringify(s)});const a=Xs({...o,key:t.config.apiKey}).slice(1),l=await t._getAdditionalHeaders();l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode);const c={method:e,headers:l,...r};return zu()||(c.referrerPolicy="strict-origin-when-cross-origin"),t.emulatorConfig&&To(t.emulatorConfig.host)&&(c.credentials="include"),fc.fetch()(await pc(t,t.config.apiHost,n,a),c)})}async function hc(t,e,n){t._canInitEmulator=!1;const s={..._h,...e};try{const i=new Ch(t),r=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw ni(t,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const a=r.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw ni(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw ni(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw ni(t,"user-disabled",o);const d=s[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw uc(t,d,c);wt(t,d)}}catch(i){if(i instanceof qt)throw i;wt(t,"network-request-failed",{message:String(i)})}}async function xh(t,e,n,s,i={}){const r=await is(t,e,n,s,i);return"mfaPendingCredential"in r&&wt(t,"multi-factor-auth-required",{_serverResponse:r}),r}async function pc(t,e,n,s){const i=`${e}${n}?${s}`,r=t,o=r.config.emulator?Po(t.config,i):`${t.config.apiScheme}://${i}`;return Sh.includes(n)&&(await r._persistenceManagerAvailable,r._getPersistenceType()==="COOKIE")?r._getPersistence()._getFinalTarget(o).toString():o}class Ch{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(Je(this.auth,"network-request-failed")),kh.get())})}}function ni(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const i=Je(t,e,s);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Th(t,e){return is(t,"POST","/v1/accounts:delete",e)}async function Ci(t,e){return is(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Is(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Ah(t,e=!1){const n=Kt(t),s=await n.getIdToken(e),i=Bo(s);L(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const r=typeof i.firebase=="object"?i.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:i,token:s,authTime:Is(xr(i.auth_time)),issuedAtTime:Is(xr(i.iat)),expirationTime:Is(xr(i.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function xr(t){return Number(t)*1e3}function Bo(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return ui("JWT malformed, contained fewer than 3 sections"),null;try{const i=Ql(n);return i?JSON.parse(i):(ui("Failed to decode base64 JWT payload"),null)}catch(i){return ui("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function La(t){const e=Bo(t);return L(e,"internal-error"),L(typeof e.exp<"u","internal-error"),L(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Bs(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof qt&&Lh(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function Lh({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mh{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const s=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hr{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Is(this.lastLoginAt),this.creationTime=Is(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ti(t){var u;const e=t.auth,n=await t.getIdToken(),s=await Bs(t,Ci(e,{idToken:n}));L(s==null?void 0:s.users.length,e,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const r=(u=i.providerUserInfo)!=null&&u.length?mc(i.providerUserInfo):[],o=Rh(t.providerData,r),a=t.isAnonymous,l=!(t.email&&i.passwordHash)&&!(o!=null&&o.length),c=a?l:!1,d={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:o,metadata:new Hr(i.createdAt,i.lastLoginAt),isAnonymous:c};Object.assign(t,d)}async function Ph(t){const e=Kt(t);await Ti(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Rh(t,e){return[...t.filter(s=>!e.some(i=>i.providerId===s.providerId)),...e]}function mc(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Bh(t,e){const n=await hc(t,{},async()=>{const s=Xs({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:r}=t.config,o=await pc(t,i,"/v1/token",`key=${r}`),a=await t._getAdditionalHeaders();a["Content-Type"]="application/x-www-form-urlencoded";const l={method:"POST",headers:a,body:s};return t.emulatorConfig&&To(t.emulatorConfig.host)&&(l.credentials="include"),fc.fetch()(o,l)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function Dh(t,e){return is(t,"POST","/v2/accounts:revokeToken",Ro(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){L(e.idToken,"internal-error"),L(typeof e.idToken<"u","internal-error"),L(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):La(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){L(e.length!==0,"internal-error");const n=La(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(L(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:i,expiresIn:r}=await Bh(e,n);this.updateTokensAndExpiration(s,i,Number(r))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:i,expirationTime:r}=n,o=new Hn;return s&&(L(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),i&&(L(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),r&&(L(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Hn,this.toJSON())}_performRefresh(){return ut("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xt(t,e){L(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Ge{constructor({uid:e,auth:n,stsTokenManager:s,...i}){this.providerId="firebase",this.proactiveRefresh=new Mh(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Hr(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Bs(this,this.stsTokenManager.getToken(this.auth,e));return L(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Ah(this,e)}reload(){return Ph(this)}_assign(e){this!==e&&(L(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Ge({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){L(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await Ti(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(lt(this.auth.app))return Promise.reject(hn(this.auth));const e=await this.getIdToken();return await Bs(this,Th(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const s=n.displayName??void 0,i=n.email??void 0,r=n.phoneNumber??void 0,o=n.photoURL??void 0,a=n.tenantId??void 0,l=n._redirectEventId??void 0,c=n.createdAt??void 0,d=n.lastLoginAt??void 0,{uid:u,emailVerified:f,isAnonymous:h,providerData:p,stsTokenManager:I}=n;L(u&&I,e,"internal-error");const y=Hn.fromJSON(this.name,I);L(typeof u=="string",e,"internal-error"),xt(s,e.name),xt(i,e.name),L(typeof f=="boolean",e,"internal-error"),L(typeof h=="boolean",e,"internal-error"),xt(r,e.name),xt(o,e.name),xt(a,e.name),xt(l,e.name),xt(c,e.name),xt(d,e.name);const v=new Ge({uid:u,auth:e,email:i,emailVerified:f,displayName:s,isAnonymous:h,photoURL:o,phoneNumber:r,tenantId:a,stsTokenManager:y,createdAt:c,lastLoginAt:d});return p&&Array.isArray(p)&&(v.providerData=p.map(m=>({...m}))),l&&(v._redirectEventId=l),v}static async _fromIdTokenResponse(e,n,s=!1){const i=new Hn;i.updateFromServerResponse(n);const r=new Ge({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:s});return await Ti(r),r}static async _fromGetAccountInfoResponse(e,n,s){const i=n.users[0];L(i.localId!==void 0,"internal-error");const r=i.providerUserInfo!==void 0?mc(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(r!=null&&r.length),a=new Hn;a.updateFromIdToken(s);const l=new Ge({uid:i.localId,auth:e,stsTokenManager:a,isAnonymous:o}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:r,metadata:new Hr(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(r!=null&&r.length)};return Object.assign(l,c),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ma=new Map;function ft(t){vt(t instanceof Function,"Expected a class definition");let e=Ma.get(t);return e?(vt(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Ma.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gc{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}gc.type="NONE";const Pa=gc;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fi(t,e,n){return`firebase:${t}:${e}:${n}`}class $n{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:i,name:r}=this.auth;this.fullUserKey=fi(this.userKey,i.apiKey,r),this.fullPersistenceKey=fi("persistence",i.apiKey,r),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await Ci(this.auth,{idToken:e}).catch(()=>{});return n?Ge._fromGetAccountInfoResponse(this.auth,n,e):null}return Ge._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new $n(ft(Pa),e,s);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let r=i[0]||ft(Pa);const o=fi(s,e.config.apiKey,e.name);let a=null;for(const c of n)try{const d=await c._get(o);if(d){let u;if(typeof d=="string"){const f=await Ci(e,{idToken:d}).catch(()=>{});if(!f)break;u=await Ge._fromGetAccountInfoResponse(e,f,d)}else u=Ge._fromJSON(e,d);c!==r&&(a=u),r=c;break}}catch{}const l=i.filter(c=>c._shouldAllowMigration);return!r._shouldAllowMigration||!l.length?new $n(r,e,s):(r=l[0],a&&await r._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==r)try{await c._remove(o)}catch{}})),new $n(r,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ra(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(vc(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(yc(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Ec(e))return"Blackberry";if(_c(e))return"Webos";if(bc(e))return"Safari";if((e.includes("chrome/")||wc(e))&&!e.includes("edge/"))return"Chrome";if(Ic(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function yc(t=_e()){return/firefox\//i.test(t)}function bc(t=_e()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function wc(t=_e()){return/crios\//i.test(t)}function vc(t=_e()){return/iemobile/i.test(t)}function Ic(t=_e()){return/android/i.test(t)}function Ec(t=_e()){return/blackberry/i.test(t)}function _c(t=_e()){return/webos/i.test(t)}function Do(t=_e()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Oh(t=_e()){var e;return Do(t)&&!!((e=window.navigator)!=null&&e.standalone)}function Nh(){return qu()&&document.documentMode===10}function Sc(t=_e()){return Do(t)||Ic(t)||_c(t)||Ec(t)||/windows phone/i.test(t)||vc(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kc(t,e=[]){let n;switch(t){case"Browser":n=Ra(_e());break;case"Worker":n=`${Ra(_e())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${zs}/${s}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uh{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=r=>new Promise((o,a)=>{try{const l=e(r);o(l)}catch(l){a(l)}});s.onAbort=n,this.queue.push(s);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fh(t,e={}){return is(t,"GET","/v2/passwordPolicy",Ro(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hh=6;class $h{constructor(e){var s;const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??Hh,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((s=e.allowedNonAlphanumericCharacters)==null?void 0:s.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const s=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;s&&(n.meetsMinPasswordLength=e.length>=s),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let s;for(let i=0;i<e.length;i++)s=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,n,s,i,r){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wh{constructor(e,n,s,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Ba(this),this.idTokenSubscription=new Ba(this),this.beforeStateQueue=new Uh(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=dc,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(r=>this._resolvePersistenceManagerAvailable=r)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=ft(n)),this._initializationPromise=this.queue(async()=>{var s,i,r;if(!this._deleted&&(this.persistenceManager=await $n.create(this,e),(s=this._resolvePersistenceManagerAvailable)==null||s.call(this),!this._deleted)){if((i=this._popupRedirectResolver)!=null&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((r=this.currentUser)==null?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Ci(this,{idToken:e}),s=await Ge._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(s)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var r;if(lt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let s=n,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(r=this.redirectUser)==null?void 0:r._redirectEventId,a=s==null?void 0:s._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(s=l.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return L(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Ti(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Eh()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(lt(this.app))return Promise.reject(hn(this));const n=e?Kt(e):null;return n&&L(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&L(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return lt(this.app)?Promise.reject(hn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return lt(this.app)?Promise.reject(hn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(ft(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Fh(this),n=new $h(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Ys("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(s.tenantId=this.tenantId),await Dh(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&ft(e)||this._popupRedirectResolver;L(n,this,"argument-error"),this.redirectPersistenceManager=await $n.create(this,[ft(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)==null?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)==null?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((n=this.currentUser)==null?void 0:n.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,i){if(this._deleted)return()=>{};const r=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(L(a,this,"internal-error"),a.then(()=>{o||r(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,s,i);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return L(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=kc(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var i;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await((i=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:i.getHeartbeatsHeader());n&&(e["X-Firebase-Client"]=n);const s=await this._getAppCheckToken();return s&&(e["X-Firebase-AppCheck"]=s),e}async _getAppCheckToken(){var n;if(lt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((n=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:n.getToken());return e!=null&&e.error&&wh(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function Oo(t){return Kt(t)}class Ba{constructor(e){this.auth=e,this.observer=null,this.addObserver=nf(n=>this.observer=n)}get next(){return L(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let No={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Vh(t){No=t}function Yh(t){return No.loadJS(t)}function Xh(){return No.gapiScript}function zh(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gh(t,e){const n=Lo(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),r=n.getOptions();if(qn(r,e??{}))return i;wt(i,"already-initialized")}return n.initialize({options:e})}function jh(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(ft);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function qh(t,e,n){const s=Oo(t);L(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const i=!1,r=xc(e),{host:o,port:a}=Kh(e),l=a===null?"":`:${a}`,c={url:`${r}//${o}${l}/`},d=Object.freeze({host:o,port:a,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!s._canInitEmulator){L(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),L(qn(c,s.config.emulator)&&qn(d,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=c,s.emulatorConfig=d,s.settings.appVerificationDisabledForTesting=!0,To(o)?of(`${r}//${o}${l}`):Jh()}function xc(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function Kh(t){const e=xc(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(s);if(i){const r=i[1];return{host:r,port:Da(s.substr(r.length+1))}}else{const[r,o]=s.split(":");return{host:r,port:Da(o)}}}function Da(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function Jh(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cc{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return ut("not implemented")}_getIdTokenResponse(e){return ut("not implemented")}_linkToIdToken(e,n){return ut("not implemented")}_getReauthenticationResolver(e){return ut("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wn(t,e){return xh(t,"POST","/v1/accounts:signInWithIdp",Ro(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qh="http://localhost";class In extends Cc{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new In(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):wt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:i,...r}=n;if(!s||!i)return null;const o=new In(s,i);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Wn(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,Wn(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Wn(e,n)}buildRequest(){const e={requestUri:Qh,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Xs(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tc{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class js extends Tc{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lt extends js{constructor(){super("facebook.com")}static credential(e){return In._fromParams({providerId:Lt.PROVIDER_ID,signInMethod:Lt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Lt.credentialFromTaggedObject(e)}static credentialFromError(e){return Lt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Lt.credential(e.oauthAccessToken)}catch{return null}}}Lt.FACEBOOK_SIGN_IN_METHOD="facebook.com";Lt.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mt extends js{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return In._fromParams({providerId:Mt.PROVIDER_ID,signInMethod:Mt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Mt.credentialFromTaggedObject(e)}static credentialFromError(e){return Mt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return Mt.credential(n,s)}catch{return null}}}Mt.GOOGLE_SIGN_IN_METHOD="google.com";Mt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pt extends js{constructor(){super("github.com")}static credential(e){return In._fromParams({providerId:Pt.PROVIDER_ID,signInMethod:Pt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Pt.credentialFromTaggedObject(e)}static credentialFromError(e){return Pt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Pt.credential(e.oauthAccessToken)}catch{return null}}}Pt.GITHUB_SIGN_IN_METHOD="github.com";Pt.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rt extends js{constructor(){super("twitter.com")}static credential(e,n){return In._fromParams({providerId:Rt.PROVIDER_ID,signInMethod:Rt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Rt.credentialFromTaggedObject(e)}static credentialFromError(e){return Rt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return Rt.credential(n,s)}catch{return null}}}Rt.TWITTER_SIGN_IN_METHOD="twitter.com";Rt.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,i=!1){const r=await Ge._fromIdTokenResponse(e,s,i),o=Oa(s);return new Jn({user:r,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const i=Oa(s);return new Jn({user:e,providerId:i,_tokenResponse:s,operationType:n})}}function Oa(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ai extends qt{constructor(e,n,s,i){super(n.code,n.message),this.operationType=s,this.user=i,Object.setPrototypeOf(this,Ai.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,i){return new Ai(e,n,s,i)}}function Ac(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?Ai._fromErrorAndOperation(t,r,e,s):r})}async function Zh(t,e,n=!1){const s=await Bs(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Jn._forOperation(t,"link",s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ep(t,e,n=!1){const{auth:s}=t;if(lt(s.app))return Promise.reject(hn(s));const i="reauthenticate";try{const r=await Bs(t,Ac(s,i,e,t),n);L(r.idToken,s,"internal-error");const o=Bo(r.idToken);L(o,s,"internal-error");const{sub:a}=o;return L(t.uid===a,s,"user-mismatch"),Jn._forOperation(t,i,r)}catch(r){throw(r==null?void 0:r.code)==="auth/user-not-found"&&wt(s,"user-mismatch"),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tp(t,e,n=!1){if(lt(t.app))return Promise.reject(hn(t));const s="signIn",i=await Ac(t,s,e),r=await Jn._fromIdTokenResponse(t,s,i);return n||await t._updateCurrentUser(r.user),r}function np(t,e,n,s){return Kt(t).onIdTokenChanged(e,n,s)}function sp(t,e,n){return Kt(t).beforeAuthStateChanged(e,n)}function ip(t,e,n,s){return Kt(t).onAuthStateChanged(e,n,s)}function rp(t){return Kt(t).signOut()}const Li="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lc{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Li,"1"),this.storage.removeItem(Li),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const op=1e3,ap=10;class Mc extends Lc{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Sc(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),i=this.localCache[n];s!==i&&e(n,i,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const s=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},r=this.storage.getItem(s);Nh()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,ap):i()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},op)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Mc.type="LOCAL";const lp=Mc;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pc extends Lc{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Pc.type="SESSION";const Rc=Pc;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cp(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class or{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const s=new or(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:i,data:r}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:i});const a=Array.from(o).map(async c=>c(n.origin,r)),l=await cp(a);n.ports[0].postMessage({status:"done",eventId:s,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}or.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uo(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dp{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let r,o;return new Promise((a,l)=>{const c=Uo("",20);i.port1.start();const d=setTimeout(()=>{l(new Error("unsupported_event"))},s);o={messageChannel:i,onMessage(u){const f=u;if(f.data.eventId===c)switch(f.data.status){case"ack":clearTimeout(d),r=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),a(f.data.response);break;default:clearTimeout(d),clearTimeout(r),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qe(){return window}function up(t){Qe().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bc(){return typeof Qe().WorkerGlobalScope<"u"&&typeof Qe().importScripts=="function"}async function fp(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function hp(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)==null?void 0:t.controller)||null}function pp(){return Bc()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dc="firebaseLocalStorageDb",mp=1,Mi="firebaseLocalStorage",Oc="fbase_key";class qs{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function ar(t,e){return t.transaction([Mi],e?"readwrite":"readonly").objectStore(Mi)}function gp(){const t=indexedDB.deleteDatabase(Dc);return new qs(t).toPromise()}function Nc(){const t=indexedDB.open(Dc,mp);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(Mi,{keyPath:Oc})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(Mi)?e(s):(s.close(),await gp(),e(await Nc()))})})}async function Na(t,e,n){const s=ar(t,!0).put({[Oc]:e,value:n});return new qs(s).toPromise()}async function yp(t,e){const n=ar(t,!1).get(e),s=await new qs(n).toPromise();return s===void 0?null:s.value}function Ua(t,e){const n=ar(t,!0).delete(e);return new qs(n).toPromise()}const bp=800,wp=3;class Uc{constructor(){this.type="LOCAL",this.dbPromise=null,this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.dbPromise?this.dbPromise:(this.dbPromise=Nc(),this.dbPromise.catch(()=>{this.dbPromise=null}),this.dbPromise)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>wp)throw s;this.dbPromise&&((await this.dbPromise).close(),this.dbPromise=null)}}async initializeServiceWorkerMessaging(){return Bc()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=or._getInstance(pp()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var n,s;if(this.activeServiceWorker=await fp(),!this.activeServiceWorker)return;this.sender=new dp(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(n=e[0])!=null&&n.fulfilled&&(s=e[0])!=null&&s.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||hp()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{return indexedDB?(await this._withRetries(async e=>{await Na(e,Li,"1"),await Ua(e,Li)}),!0):!1}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>Na(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>yp(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Ua(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const r=ar(i,!1).getAll();return new qs(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;if(e.length!==0)for(const{fbase_key:i,value:r}of e)s.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(r)&&(this.notifyListeners(i,r),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!s.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),bp)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Uc.type="LOCAL";const vp=Uc;new Gs(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ip(t,e){return e?ft(e):(L(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fo extends Cc{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Wn(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Wn(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Wn(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Ep(t){return tp(t.auth,new Fo(t),t.bypassAuthState)}function _p(t){const{auth:e,user:n}=t;return L(n,e,"internal-error"),ep(n,new Fo(t),t.bypassAuthState)}async function Sp(t){const{auth:e,user:n}=t;return L(n,e,"internal-error"),Zh(n,new Fo(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fc{constructor(e,n,s,i,r=!1){this.auth=e,this.resolver=s,this.user=i,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:i,tenantId:r,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:s,tenantId:r||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Ep;case"linkViaPopup":case"linkViaRedirect":return Sp;case"reauthViaPopup":case"reauthViaRedirect":return _p;default:wt(this.auth,"internal-error")}}resolve(e){vt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){vt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kp=new Gs(2e3,1e4);class Mn extends Fc{constructor(e,n,s,i,r){super(e,n,i,r),this.provider=s,this.authWindow=null,this.pollId=null,Mn.currentPopupAction&&Mn.currentPopupAction.cancel(),Mn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return L(e,this.auth,"internal-error"),e}async onExecution(){vt(this.filter.length===1,"Popup operations only handle one event");const e=Uo();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Je(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(Je(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Mn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if((s=(n=this.authWindow)==null?void 0:n.window)!=null&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Je(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,kp.get())};e()}}Mn.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xp="pendingRedirect",hi=new Map;class Cp extends Fc{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=hi.get(this.auth._key());if(!e){try{const s=await Tp(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}hi.set(this.auth._key(),e)}return this.bypassAuthState||hi.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Tp(t,e){const n=Mp(e),s=Lp(t);if(!await s._isAvailable())return!1;const i=await s._get(n)==="true";return await s._remove(n),i}function Ap(t,e){hi.set(t._key(),e)}function Lp(t){return ft(t._redirectPersistence)}function Mp(t){return fi(xp,t.config.apiKey,t.name)}async function Pp(t,e,n=!1){if(lt(t.app))return Promise.reject(hn(t));const s=Oo(t),i=Ip(s,e),o=await new Cp(s,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rp=600*1e3;class Bp{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Dp(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!Hc(e)){const i=((s=e.error.code)==null?void 0:s.split("auth/")[1])||"internal-error";n.onError(Je(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Rp&&this.cachedEventUids.clear(),this.cachedEventUids.has(Fa(e))}saveEventToCache(e){this.cachedEventUids.add(Fa(e)),this.lastProcessedEventTime=Date.now()}}function Fa(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Hc({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Dp(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Hc(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Op(t,e={}){return is(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Np=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Up=/^https?/;async function Fp(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Op(t);for(const n of e)try{if(Hp(n))return}catch{}wt(t,"unauthorized-domain")}function Hp(t){const e=Fr(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!Up.test(n))return!1;if(Np.test(t))return s===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(s)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $p=new Gs(3e4,6e4);function Ha(){const t=Qe().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function Wp(t){return new Promise((e,n)=>{var i,r,o;function s(){Ha(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Ha(),n(Je(t,"network-request-failed"))},timeout:$p.get()})}if((r=(i=Qe().gapi)==null?void 0:i.iframes)!=null&&r.Iframe)e(gapi.iframes.getContext());else if((o=Qe().gapi)!=null&&o.load)s();else{const a=zh("iframefcb");return Qe()[a]=()=>{gapi.load?s():n(Je(t,"network-request-failed"))},Yh(`${Xh()}?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw pi=null,e})}let pi=null;function Vp(t){return pi=pi||Wp(t),pi}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yp=new Gs(5e3,15e3),Xp="__/auth/iframe",zp="emulator/auth/iframe",Gp={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},jp=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function qp(t){const e=t.config;L(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Po(e,zp):`https://${t.config.authDomain}/${Xp}`,s={apiKey:e.apiKey,appName:t.name,v:zs},i=jp.get(t.config.apiHost);i&&(s.eid=i);const r=t._getFrameworks();return r.length&&(s.fw=r.join(",")),`${n}?${Xs(s).slice(1)}`}async function Kp(t){const e=await Vp(t),n=Qe().gapi;return L(n,t,"internal-error"),e.open({where:document.body,url:qp(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Gp,dontclear:!0},s=>new Promise(async(i,r)=>{await s.restyle({setHideOnLeave:!1});const o=Je(t,"network-request-failed"),a=Qe().setTimeout(()=>{r(o)},Yp.get());function l(){Qe().clearTimeout(a),i(s)}s.ping(l).then(l,()=>{r(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jp={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Qp=500,Zp=600,e0="_blank",t0="http://localhost";class $a{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function n0(t,e,n,s=Qp,i=Zp){const r=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const l={...Jp,width:s.toString(),height:i.toString(),top:r,left:o},c=_e().toLowerCase();n&&(a=wc(c)?e0:n),yc(c)&&(e=e||t0,l.scrollbars="yes");const d=Object.entries(l).reduce((f,[h,p])=>`${f}${h}=${p},`,"");if(Oh(c)&&a!=="_self")return s0(e||"",a),new $a(null);const u=window.open(e||"",a,d);L(u,t,"popup-blocked");try{u.focus()}catch{}return new $a(u)}function s0(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const i0="__/auth/handler",r0="emulator/auth/handler",o0=encodeURIComponent("fac");async function Wa(t,e,n,s,i,r){L(t.config.authDomain,t,"auth-domain-config-required"),L(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:zs,eventId:i};if(e instanceof Tc){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",tf(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,u]of Object.entries({}))o[d]=u}if(e instanceof js){const d=e.getScopes().filter(u=>u!=="");d.length>0&&(o.scopes=d.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const d of Object.keys(a))a[d]===void 0&&delete a[d];const l=await t._getAppCheckToken(),c=l?`#${o0}=${encodeURIComponent(l)}`:"";return`${a0(t)}?${Xs(a).slice(1)}${c}`}function a0({config:t}){return t.emulator?Po(t,r0):`https://${t.authDomain}/${i0}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cr="webStorageSupport";class l0{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Rc,this._completeRedirectFn=Pp,this._overrideRedirectResult=Ap}async _openPopup(e,n,s,i){var o;vt((o=this.eventManagers[e._key()])==null?void 0:o.manager,"_initialize() not called before _openPopup()");const r=await Wa(e,n,s,Fr(),i);return n0(e,r,Uo())}async _openRedirect(e,n,s,i){await this._originValidation(e);const r=await Wa(e,n,s,Fr(),i);return up(r),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:r}=this.eventManagers[n];return i?Promise.resolve(i):(vt(r,"If manager is not set, promise should be"),r)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await Kp(e),s=new Bp(e);return n.register("authEvent",i=>(L(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:s.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Cr,{type:Cr},i=>{var o;const r=(o=i==null?void 0:i[0])==null?void 0:o[Cr];r!==void 0&&n(!!r),wt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Fp(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Sc()||bc()||Do()}}const c0=l0;var Va="@firebase/auth",Ya="1.13.3";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d0{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){L(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function u0(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function f0(t){Ps(new Kn("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),r=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=s.options;L(o&&!o.includes(":"),"invalid-api-key",{appName:s.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:kc(t)},c=new Wh(s,i,r,l);return jh(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),Ps(new Kn("auth-internal",e=>{const n=Oo(e.getProvider("auth").getImmediate());return(s=>new d0(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Fn(Va,Ya,u0(t)),Fn(Va,Ya,"esm2020")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const h0=300,p0=tc("authIdTokenMaxAge")||h0;let Xa=null;const m0=t=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>p0)return;const i=n==null?void 0:n.token;Xa!==i&&(Xa=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function g0(t=rh()){const e=Lo(t,"auth");if(e.isInitialized())return e.getImmediate();const n=Gh(t,{popupRedirectResolver:c0,persistence:[vp,lp,Rc]}),s=tc("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const r=new URL(s,location.origin);if(location.origin===r.origin){const o=m0(r.toString());sp(n,o,()=>o(n.currentUser)),np(n,a=>o(a))}}const i=Zl("auth");return i&&qh(n,`http://${i}`),n}function y0(){var t;return((t=document.getElementsByTagName("head"))==null?void 0:t[0])??document}Vh({loadJS(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=i=>{const r=Je("internal-error");r.customData=i,n(r)},s.type="text/javascript",s.charset="UTF-8",y0().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});f0("Browser");const b0="gen-lang-client-0197721509",w0="1:159490676088:web:87afe27b355205f9aa648d",v0="AIzaSyCt62QC8ktwAAIQ1hLVMz0F-_vHQU2Qi7o",I0="gen-lang-client-0197721509.firebaseapp.com",E0="ai-studio-14a34af2-5f53-4321-8fef-998076e9e002",_0="gen-lang-client-0197721509.firebasestorage.app",S0="159490676088",k0="",$c={projectId:b0,appId:w0,apiKey:v0,authDomain:I0,firestoreDatabaseId:E0,storageBucket:_0,messagingSenderId:S0,measurementId:k0},Wc=oc($c),x0=$c,Vc=g0(Wc);let ds=null;function ie(){return ds||(ds=ql(()=>import("./firestore-BfXZT4DC.js"),[]).then(t=>({...t,db:t.getFirestore(Wc,x0.firestoreDatabaseId)})),ds.catch(()=>{ds=null})),ds}function C0(){ie().catch(()=>{})}const Q="/pinball/",Ut="data:image/svg+xml,"+encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40"><rect width="40" height="40" fill="#202020"/><circle cx="20" cy="15" r="7" fill="#3a3a3a"/><path d="M6 40a14 14 0 0 1 28 0z" fill="#3a3a3a"/></svg>'),Yc="data:image/svg+xml,"+encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 533"><rect width="300" height="533" fill="#111"/><circle cx="150" cy="266" r="40" fill="none" stroke="#3a3a3a" stroke-width="6"/></svg>'),It=document.getElementById("game-container"),st=document.getElementById("board"),Re=document.getElementById("flipper-left"),Be=document.getElementById("flipper-right"),Se=document.getElementById("plunger"),G=document.getElementById("ball"),T0=document.getElementById("ball-pos"),$=document.getElementById("game-inner");let en=null,za=null;function Xc(){return en||(en=document.createElement("canvas"),za=en.getContext("2d",{willReadFrequently:!0})),(en.width!==S||en.height!==C)&&(en.width=S,en.height=C),za}const $r=document.createElement("canvas"),rt=$r.getContext("2d",{willReadFrequently:!0}),q=document.getElementById("walls-canvas"),ee=q.getContext("2d"),Qn=document.getElementById("editor-canvas"),w=Qn.getContext("2d"),zc=document.getElementById("onion-canvas"),at=zc.getContext("2d"),Gc=document.getElementById("glow-canvas"),le=Gc.getContext("2d"),Pi=document.getElementById("btn-select"),jc=document.getElementById("btn-merge"),Ri=document.getElementById("btn-pen"),Ho=document.getElementById("btn-bumper"),$o=document.getElementById("btn-point"),Wo=document.getElementById("btn-grabber"),Vo=document.getElementById("btn-boss"),Bi=document.getElementById("btn-classic"),Di=document.getElementById("btn-fantasies"),Vn=document.getElementById("btn-exit-fantasies"),Yn=document.getElementById("btn-exit-classic"),Oi=document.getElementById("btn-onion"),se=document.getElementById("app-container"),Xe=document.getElementById("score-container"),F=document.getElementById("game-container"),si=document.getElementById("score-display");function lr(){const t=F.getBoundingClientRect(),e=se.getBoundingClientRect();se.style.setProperty("--rail-top",`${Math.round(t.top-e.top)}px`),se.style.setProperty("--rail-h",`${Math.round(t.height)}px`),ra()}const Tr=document.getElementById("left-column");function Wr(){const t=document.getElementById("logo-rectangle");if(!t||!Tr||!t.offsetParent)return;const e=parseFloat(getComputedStyle(Tr).gap)||0,n=F.getBoundingClientRect().top-Tr.getBoundingClientRect().top-e;n>0&&(t.style.height=`${n}px`)}let Vr=!1;const Yr=[];function qc(t){Vr?t():Yr.push(t)}function Ga(){if(!Vr)for(Vr=!0;Yr.length;)try{Yr.shift()()}catch(t){console.warn("post-splash task failed",t)}}const ja=Q+"ui/pinballa-lit-logo.webp",ii=document.getElementById("logo-rectangle");if(ii){qc(()=>{new Image().src=ja});let t=null;ii.addEventListener("click",()=>{t||(t=document.createElement("img"),t.id="logo-lit",t.alt="",t.draggable=!1,t.src=ja,ii.appendChild(t)),ii.classList.toggle("lit")})}const Kc=new ResizeObserver(t=>{window.requestAnimationFrame(()=>{if(!(!Array.isArray(t)||!t.length))for(let e of t)e.target===F&&(window.matchMedia("(max-width: 900px)").matches&&!se.classList.contains("classic-mode")&&!se.classList.contains("fantasies-mode")?Xe.style.width="":se.classList.contains("classic-mode")&&Z.angle>0||(Xe.style.width=`${F.offsetWidth}px`),Us=null,lr(),Wr(),br(),St(),Qs&&Pd()),e.target===Xe&&Wr()})});Kc.observe(F);Kc.observe(Xe);const Jc=document.getElementById("btn-mirror"),mi=document.getElementById("btn-grid"),A0=document.getElementById("btn-undo"),L0=document.getElementById("btn-redo"),Qc=document.getElementById("leaderboard-overlay"),an=document.getElementById("leaderboard-list"),Ar=document.getElementById("score-entry"),M0=document.getElementById("final-score-display"),qa=document.getElementById("score-entry-note"),Xr=document.getElementById("btn-score-login"),P0=document.getElementById("btn-reset-game");function pn(t){if(t==null)return null;if(typeof t=="number")return t;if(typeof t.toMillis=="function")return t.toMillis();if(typeof t.seconds=="number")return t.seconds*1e3;const e=Date.parse(t);return Number.isNaN(e)?null:e}const Ka=2e3;function Zc(t,e){const n=pn(t),s=pn(e);return n!=null&&s!=null&&n-s>Ka?r=>{const o=pn(r&&r.machineVersion);return o==null||o<n-Ka}:()=>!1}function R0(){const t=document.createElement("span");return t.className="lb-dated",t.textContent="OLD",t.title="Set on an earlier version of this machine",t}async function B0(){if(!O||!Ie||ce<=0)return{posted:!1};const{db:t,doc:e,getDoc:n,setDoc:s,serverTimestamp:i}=await ie(),r=e(t,"scores",`${Ie}_${O.uid}`);try{const o=await n(r),a=o.exists()?o.data().score:-1;return ce<=a?{posted:!1}:(await s(r,{machineId:Ie,userId:O.uid,username:et.username||"No Name",photoURL:et.photoURL||null,nameColor:et.nameColor||null,score:ce,updatedAt:i(),machineVersion:fr}),hs=null,{posted:!0})}catch(o){return console.error("score submit failed",o),{posted:!1,error:!0}}}async function D0(){const{db:t,collection:e,getDocs:n,query:s,where:i}=await ie(),r=await n(s(e(t,"scores"),i("machineId","==",Ie))),o=[];return r.forEach(a=>o.push(a.data())),o.sort((a,l)=>l.score-a.score),o.slice(0,5)}async function O0(){Qc.style.display="block";const t=document.querySelector("#leaderboard-overlay h2");if(!window.isExclusivePlay||!Ie){t.textContent="GAME OVER",t.style.marginBottom="20px",an.style.display="none",Ar.style.display="none";return}if(t.textContent="HIGH SCORES",t.style.marginBottom="0",an.style.display="flex",an.innerHTML='<div style="text-align: center; color: var(--text-dim); padding: 20px 0;">Loading…</div>',ce>0){if(M0.textContent=ce.toLocaleString(),O){const e=await B0();qa.textContent=e.error?"Could not post your score — check your connection.":e.posted?"Posted to the leaderboard as "+(et.username||"you")+"!":"Your previous best on this machine still stands.",Xr.style.display="none"}else qa.textContent="Log in to post scores to the leaderboard.",Xr.style.display="block";Ar.style.display="block"}else Ar.style.display="none";try{N0(await D0())}catch(e){console.error("leaderboard load failed",e),an.innerHTML='<div style="text-align: center; color: var(--text-dim); padding: 20px 0;">Could not load scores.</div>'}}function N0(t){if(Ie){if(an.innerHTML="",t.length===0){an.innerHTML='<div style="text-align: center; color: var(--text-dim); padding: 20px 0;">No high scores yet.<br>Be the first!</div>';return}Zc(fr,hd),t.forEach((e,n)=>{const s=document.createElement("div");s.style.display="flex",s.style.alignItems="center",s.style.gap="8px",s.style.padding="6px 10px",s.style.background=n%2===0?"rgba(255, 255, 255, 0.07)":"transparent",s.style.borderRadius="6px",O&&e.userId===O.uid&&(s.style.outline="1px solid var(--line-strong)");const i=document.createElement("span");i.textContent=n+1+".",i.style.color="var(--text-dim)",i.style.width="22px",i.style.flexShrink="0";const r=document.createElement("img");r.src=e.photoURL||Ut,r.alt="",r.style.width="24px",r.style.height="24px",r.style.borderRadius="50%",r.style.objectFit="cover",r.style.flexShrink="0";const o=document.createElement("span");o.textContent=e.username||"No Name",o.style.fontWeight="bold",o.style.flex="1",o.style.overflow="hidden",o.style.textOverflow="ellipsis",o.style.whiteSpace="nowrap",o.style.padding="0 3px",hr(o,e.userId,e.nameColor);const a=document.createElement("span");a.textContent=(e.score??0).toLocaleString(),s.appendChild(i),s.appendChild(r),s.appendChild(o),s.appendChild(a),an.appendChild(s)})}}Xr.onclick=()=>window.open(Zo,"_blank","noopener");P0.onclick=()=>{Qc.style.display="none",dn=3,ce=0,X="message",on="3 BALLS LEFT",Dn=60,je(!1),me("backgroundMusic",!0),On=()=>{X="playing"}};const ed=document.getElementById("dd-cosmetics"),td=document.getElementById("dd-save"),U0=document.getElementById("btn-dd-cosmetics"),F0=document.getElementById("btn-dd-save");function Ja(t,e){t.classList.toggle("open",e);const n=t.querySelector(".dd-header");n&&n.setAttribute("aria-expanded",String(e))}function nd(t,e){const n=!t.classList.contains("open");Ja(t,n),n&&Ja(e,!1)}U0.onclick=()=>nd(ed,td);F0.onclick=()=>nd(td,ed);function sd(t,e){const n=document.getElementById(t),s=document.getElementById(e);!n||!s||n.addEventListener("click",()=>{const i=s.classList.toggle("open");n.setAttribute("aria-expanded",String(i))})}sd("btn-dd-skins","skins-body");sd("btn-dd-sounds","sounds-body");const Ds=document.getElementById("profile-modal"),H0=document.getElementById("btn-close-profile");H0.onclick=()=>{Yo()};Ds.onclick=t=>{t.target===Ds&&Yo()};function Yo(){Ds.style.display="none",Ui.style.display="none"}const zr=document.getElementById("panel-profile-card"),Gr=document.getElementById("panel-profile-login"),Qa=document.getElementById("panel-profile-pic"),Os=document.getElementById("panel-profile-name");let Za=null,hs=null;async function $0(){if(!O)return;const t=O.uid;if(Za===t&&hs!==null){ps.textContent=hs;return}ps.textContent="…";try{const{db:e,collection:n,getDocs:s,query:i,where:r}=await ie(),o=await s(i(n(e,"scores"),r("userId","==",t))),a=[...new Set(o.docs.map(c=>c.data().machineId))];let l=0;for(const c of a)(await s(i(n(e,"scores"),r("machineId","==",c)))).docs.map(f=>f.data()).sort((f,h)=>h.score-f.score).slice(0,10).some(f=>f.userId===t)&&l++;Za=t,hs=String(l),O&&O.uid===t&&(ps.textContent=hs)}catch(e){console.error("top-10 stat failed",e),ps.textContent="—"}}zr.onclick=()=>{Ds.style.display="flex",$0()};Gr.onclick=()=>kt("Log in or register to save, publish & add custom skins.");const Xo=document.getElementById("welcome-modal"),cr=document.getElementById("welcome-home"),dr=document.getElementById("welcome-guide"),W0=document.getElementById("welcome-dont-show"),id="pinballa_welcome_seen",jr="pinballa_session_v1";let zo=!1;function V0(){return{machine:{id:Ie,authorId:ln,name:De.value,desc:rs.value,polygons:x,polygonTypes:D,polygonLayers:H,skins:{overlay:Y.dataset.skinUrl||null,plunger:Se.dataset.skinUrl||null,flipperL:Re.dataset.skinUrl||null,flipperR:Be.dataset.skinUrl||null,ball:G.dataset.skinUrl||null},skinsHidden:la(),sounds:Ee,invisibleComponents:tt.checked,hideMainWall:He.checked},view:se.classList.contains("classic-mode")?"classic":se.classList.contains("fantasies-mode")?"fantasies":Ze.style.display==="flex"?ei?"arcade-public":"arcade-shop":"editor",exclusive:!!window.isExclusivePlay,lastViewed:window.lastViewedMachine||null,playtested:vr}}window.addEventListener("beforeunload",()=>{try{const t=V0();try{sessionStorage.setItem(jr,JSON.stringify(t))}catch{t.machine.skins=null,t.machine.sounds=null,t.lastViewed=null,sessionStorage.setItem(jr,JSON.stringify(t))}}catch{}});function Y0(){let t=null;try{t=JSON.parse(sessionStorage.getItem(jr)||"null")}catch{}if(!(!t||!t.machine)){if(zo=!0,Ei(t.machine),vr=t.playtested||null,window.isExclusivePlay=!!t.exclusive,t.lastViewed&&(window.lastViewedMachine=t.lastViewed),t.view==="classic")Bi.click();else if(t.view==="fantasies")Di.click();else if(t.view==="arcade-public")os.click();else if(t.view==="arcade-shop"){let e=0;const n=setInterval(()=>{O?(clearInterval(n),fd.click()):++e>20&&clearInterval(n)},250)}}}const Go=location.pathname+location.hash;let ht="",mn=!1,qr=!1;const rd="pinballa";function od(t){return t?t.slug?String(t.slug).toLowerCase():t.name?qd(t.name):String(t.id||"").toLowerCase():""}function el(t){return location.pathname.startsWith("/pinball/")?"/"+rd+"/"+encodeURIComponent(t):Go.split("#")[0]+"?machine="+encodeURIComponent(t)}function jo(){const t=(new URLSearchParams(location.search).get("machine")||"").trim().toLowerCase();if(t)return t;const e=decodeURIComponent(location.pathname).replace(/^\/+|\/+$/g,"").toLowerCase().split("/");return e[0]===rd&&e[1]?e[1]:""}function X0(t,e){const n=e?"":od(t);n!==ht&&(n?jo()===n||qr?(window.history.replaceState({machine:n},"",el(n)),mn=!1):(window.history.pushState({machine:n},"",el(n)),mn=!0):ht&&(window.history.replaceState(null,"",Go),mn=!1),ht=n)}function ad(){ht&&(ht="",mn?(mn=!1,window.history.back()):window.history.replaceState(null,"",Go))}function Pn(t){document.getElementById("arcade-detail-modal").style.display=t?"block":"none";const e=document.getElementById("btn-close-arcade");e&&e.classList.toggle("behind-detail",t)}const Kr=["profile-modal","welcome-modal","arcade-modal","arcade-detail-modal","public-profile-modal"].map(t=>document.getElementById(t)).filter(Boolean);function ld(){const t=Kr.filter(e=>getComputedStyle(e).display!=="none");t.sort((e,n)=>{const s=parseInt(getComputedStyle(e).zIndex,10)||0,i=parseInt(getComputedStyle(n).zIndex,10)||0;return s!==i?s-i:e.compareDocumentPosition(n)&Node.DOCUMENT_POSITION_FOLLOWING?-1:1}),Kr.forEach(e=>{const n=t.indexOf(e);e.toggleAttribute("inert",n!==-1&&n<t.length-1)})}const z0=new MutationObserver(ld);Kr.forEach(t=>z0.observe(t,{attributes:!0,attributeFilter:["style"]}));ld();function cd(){Pn(!1)}function qo(){cd(),ad()}window.addEventListener("popstate",()=>{const t=jo();if(t){if(t===ht)return;ht=t,mn=!1,dd(t)}else ht="",mn=!1,cd()});async function dd(t){if(!t)return!1;try{const{db:e,collection:n,getDocs:s,query:i,where:r}=await ie();let o=null;const a=await s(i(n(e,"machines"),r("slug","==",t)));if(!a.empty)o=a.docs[0].data();else{const d=(await s(n(e,"machines"))).docs.map(u=>u.data()).sort((u,f)=>(u.createdAt&&u.createdAt.seconds||0)-(f.createdAt&&f.createdAt.seconds||0));if(o=d.find(u=>od(u)===t)||null,o||(o=d.find(u=>String(u.id||"").toLowerCase()===t)||null),!o)return!1}ei=!0,Ze.style.display="flex";const l=document.getElementById("arcade-modal-title");l.textContent="PUBLIC PINBALL MACHINES",l.classList.remove("accent-blue"),l.classList.add("accent-red"),gt.length||os.click(),qr=!0;try{Cn(o,!1,0)}finally{qr=!1}return!0}catch(e){return console.error("deep-link machine load failed",e),!1}}function G0(){zo||localStorage.getItem(id)||(cr.style.display="block",dr.style.display="none",Xo.style.display="flex")}function ud(){Xo.style.display="none",W0.checked&&localStorage.setItem(id,"1")}document.getElementById("btn-welcome-exit").onclick=ud;document.getElementById("btn-close-welcome").onclick=ud;document.getElementById("btn-open-guide").onclick=()=>{cr.style.display="none",dr.style.display="flex"};document.getElementById("btn-guide-back").onclick=()=>{dr.style.display="none",cr.style.display="block"};document.getElementById("btn-open-guide-profile").onclick=()=>{Yo(),cr.style.display="none",dr.style.display="flex",Xo.style.display="flex"};const fd=document.getElementById("btn-arcade"),ne=document.getElementById("btn-save-machine"),De=document.getElementById("machine-name"),rs=document.getElementById("machine-desc"),Ze=document.getElementById("arcade-modal"),j0=document.getElementById("btn-close-arcade"),ur=document.getElementById("btn-new-machine"),Ft=document.getElementById("arcade-list"),Ni=document.getElementById("arcade-filter"),he=document.getElementById("btn-publish-machine"),os=document.getElementById("btn-open-arcade-public"),tl=document.getElementById("auth-unlogged"),nl=document.getElementById("auth-logged"),Ui=document.getElementById("auth-prompt"),q0=document.getElementById("btn-open-cc-login"),K0=document.getElementById("btn-edit-profile"),Jr=document.getElementById("btn-logout"),sl=document.getElementById("profile-picture"),Qr=document.getElementById("profile-username"),J0=document.getElementById("stat-joined"),ps=document.getElementById("stat-top10"),il=document.getElementById("btn-dd-site"),Q0=document.getElementById("site-settings-body");il.onclick=()=>{const t=Q0.classList.toggle("open");il.setAttribute("aria-expanded",t)};const Z0=document.getElementById("site-bg-upload"),En=document.getElementById("site-bg-style"),rl=document.getElementById("site-bg-size-container"),ze=document.getElementById("site-bg-size"),Zn=document.getElementById("site-bg-size-val"),qe=document.getElementById("site-bg-opacity"),es=document.getElementById("site-bg-opacity-val"),em=document.getElementById("btn-clear-bg");let O=null,Ie=null,ln=null,fr=null,hd=null,_n=!1;const tm=`${Q}ui/default-background.webp`,Zr="repeat",Fi="100",Hi="35",nm="linear-gradient(to top, #404040, #bfbfbf)";let cn=null;const sm="pinballa-bg",Sn="bg",Ko="image";function Jo(){return new Promise((t,e)=>{const n=indexedDB.open(sm,1);n.onupgradeneeded=()=>n.result.createObjectStore(Sn),n.onsuccess=()=>t(n.result),n.onerror=()=>e(n.error)})}function im(){return Jo().then(t=>new Promise((e,n)=>{const s=t.transaction(Sn,"readonly").objectStore(Sn).get(Ko);s.onsuccess=()=>e(s.result||null),s.onerror=()=>n(s.error)})).catch(()=>null)}function pd(t){return Jo().then(e=>new Promise((n,s)=>{const i=e.transaction(Sn,"readwrite").objectStore(Sn).put(t,Ko);i.onsuccess=()=>n(),i.onerror=()=>s(i.error)}))}function rm(){return Jo().then(t=>new Promise(e=>{const n=t.transaction(Sn,"readwrite").objectStore(Sn).delete(Ko);n.onsuccess=n.onerror=()=>e()})).catch(()=>{})}function Qo(t){cn&&cn!==t&&URL.revokeObjectURL(cn),cn=t}const md=localStorage.getItem("site_bg_style")||Zr,ol=localStorage.getItem("site_bg_size")||Fi,al=localStorage.getItem("site_bg_opacity")||Hi;ze&&(ze.value=ol,Zn&&(Zn.textContent=ol));qe&&(qe.value=al,es&&(es.textContent=al));function Ks(){const t=cn||tm,e=parseInt(qe?qe.value:Hi,10),n=(1-(isNaN(e)?100:e)/100).toFixed(3);cn?(document.body.style.backgroundImage=`linear-gradient(rgba(0,0,0,${n}), rgba(0,0,0,${n})), url("${t}")`,document.body.style.backgroundBlendMode="normal"):(document.body.style.backgroundImage=`${nm}, linear-gradient(rgba(0,0,0,${n}), rgba(0,0,0,${n})), url("${t}")`,document.body.style.backgroundBlendMode="hard-light, normal, normal")}En.value=md;Ks();as(md);(async()=>{let t=await im();if(!t){const e=localStorage.getItem("site_bg_image");if(e){try{t=await(await fetch(e)).blob(),await pd(t)}catch{t=null}localStorage.removeItem("site_bg_image")}}t&&(Qo(URL.createObjectURL(t)),Ks(),as(En.value))})();function as(t){rl&&(rl.style.display=t==="repeat"?"flex":"none");let e,n,s;if(t==="contain")e="contain",n="no-repeat",s="center";else if(t==="repeat"){const o=ze?ze.value:Fi;e=`${o}px ${o}px`,n="repeat",s="top left"}else t==="stretch"?(e="100% 100%",n="no-repeat",s="top left"):(e="cover",n="no-repeat",s="center");const r=!cn?["auto, ","no-repeat, ","top left, "]:["","",""];document.body.style.backgroundSize=`${r[0]}${e}, ${e}`,document.body.style.backgroundRepeat=`${r[1]}${n}, ${n}`,document.body.style.backgroundPosition=`${r[2]}${s}, ${s}`}En.addEventListener("change",()=>{const t=En.value;localStorage.setItem("site_bg_style",t),as(t)});ze&&(ze.addEventListener("input",()=>{Zn&&(Zn.textContent=ze.value),En.value==="repeat"&&as("repeat")}),ze.addEventListener("change",()=>{localStorage.setItem("site_bg_size",ze.value)}));qe&&qe.addEventListener("input",()=>{es&&(es.textContent=qe.value),localStorage.setItem("site_bg_opacity",qe.value),Ks()});Z0.addEventListener("change",t=>{const e=t.target.files[0];e&&(Qo(URL.createObjectURL(e)),Ks(),as(En.value),pd(e).catch(n=>console.error("background save failed",n)),t.target.value="")});em.onclick=()=>{rm(),Qo(null),localStorage.removeItem("site_bg_image"),localStorage.removeItem("site_bg_style"),localStorage.removeItem("site_bg_size"),localStorage.removeItem("site_bg_opacity"),En.value=Zr,ze&&(ze.value=Fi,Zn&&(Zn.textContent=Fi)),qe&&(qe.value=Hi,es&&(es.textContent=Hi)),Ks(),as(Zr)};let ri=null,Lr=0,et={username:"",photoURL:null,description:"",nameColor:null};const gd=["#dc0701","#dab100","#00db4b","#01dce6","#0108dc","#2e3087","#e70090"],eo="#dab100";function Js(t){return gd.includes(t)?t:eo}const $i=document.getElementById("name-swatches");function Ns(t,e){if(!t)return;const n=Js(e);t.style.color="#fff",t.style.textShadow=`-1px -1px 0 #000, 0 -1px 0 #000, 1px -1px 0 #000, 1px 0 0 #000, 1px 1px 0 #000, 0 1px 0 #000, -1px 1px 0 #000, -1px 0 0 #000, -2px -2px 0 ${n}, 0 -2px 0 ${n}, 2px -2px 0 ${n}, 2px 0 0 ${n}, 2px 2px 0 ${n}, 0 2px 0 ${n}, -2px 2px 0 ${n}, -2px 0 0 ${n}`}const Es={};async function om(t){if(!t)return eo;if(Es[t]!==void 0)return Es[t];let e=eo;try{const{db:n,doc:s,getDoc:i}=await ie(),r=await i(s(n,"users",t));r.exists()&&(e=Js(r.data().nameColor))}catch{}return Es[t]=e,e}function hr(t,e,n){Ns(t,n),e&&om(e).then(s=>Ns(t,s))}function to(){const t=Js(et.nameColor);if(Ns(Qr,t),Ns(Os,t),$i)for(const e of $i.children)e.classList.toggle("selected",e.dataset.color===t)}const am=26,lm=.24;function Wi(){const t=Os.parentElement;if(!t||!t.classList.contains("panel-profile-nameclip"))return;t.classList.remove("scrolling");const e=Os.scrollWidth-t.clientWidth;if(e<=1){t.style.removeProperty("--pp-scroll"),t.style.removeProperty("--pp-scroll-ms");return}t.style.setProperty("--pp-scroll",`${-e}px`),t.style.setProperty("--pp-scroll-ms",`${Math.round(e/am*1e3/(1-lm))}ms`),t.classList.add("scrolling")}document.fonts&&document.fonts.ready&&document.fonts.ready.then(Wi).catch(()=>{});window.addEventListener("resize",Wi);async function cm(t){if(et.nameColor=t,O&&(Es[O.uid]=Js(t)),to(),!!O)try{const{db:e,doc:n,setDoc:s}=await ie();await s(n(e,"users",O.uid),{userId:O.uid,username:et.username||O.displayName||"No Name",nameColor:t},{merge:!0})}catch(e){console.error("name colour save failed",e)}}$i&&gd.forEach(t=>{const e=document.createElement("button");e.type="button",e.className="name-swatch",e.dataset.color=t,e.style.background=t,e.setAttribute("aria-label","Set name colour "+t),e.onclick=()=>cm(t),$i.appendChild(e)});let yd;const dm=new Promise(t=>{yd=t});ip(Vc,t=>{t&&t.isAnonymous&&(t=null),O=t;const e=++Lr;ri&&(ri(),ri=null),t?(et={username:t.displayName||"No Name",photoURL:t.photoURL||null,description:"",nameColor:null},tl.style.display="none",nl.style.display="flex",Jr.style.display="",Ui.style.display="none",Qr.textContent=t.displayName||"No Name",sl.src=t.photoURL||Ut,to(),J0.textContent=t.metadata&&t.metadata.creationTime?new Date(t.metadata.creationTime).toLocaleDateString(void 0,{day:"numeric",month:"short",year:"numeric"}):"—",ps.textContent="—",zr.style.display="flex",Gr.style.display="none",Os.textContent=t.displayName||"No Name",Qa.src=t.photoURL||Ut,Wi(),ie().then(({db:n,doc:s,onSnapshot:i})=>{if(e!==Lr)return;const r=i(s(n,"users",t.uid),o=>{if(!o.exists())return;const a=o.data(),l=a.username||t.displayName||"No Name",c=a.photoURL||t.photoURL||Ut;et={username:l,photoURL:a.photoURL||t.photoURL||null,description:a.description||"",nameColor:a.nameColor||null},Qr.textContent=l,sl.src=c,Os.textContent=l,Qa.src=c,to(),Wi()},o=>console.error("profile sync failed",o));if(e!==Lr){r();return}ri=r}).catch(n=>console.error("profile sync unavailable",n))):(et={username:"",photoURL:null,description:"",nameColor:null},tl.style.display="block",nl.style.display="none",Jr.style.display="none",zr.style.display="none",Gr.style.display="flex"),yd()});function kt(t){return O?!0:(Ui.textContent=t,Ui.style.display="block",Ds.style.display="flex",!1)}const Zo="/account";q0.onclick=()=>window.open(Zo,"_blank","noopener");K0.onclick=()=>window.open(Zo,"_blank","noopener");Jr.onclick=()=>rp(Vc);const um=document.getElementById("btn-dl-overlay"),gn=document.getElementById("btn-up-overlay"),yn=document.getElementById("btn-del-overlay"),bd=document.getElementById("file-overlay"),Y=document.getElementById("overlay-skin"),fm=document.getElementById("btn-dl-plunger"),Vi=document.getElementById("btn-up-plunger"),Yi=document.getElementById("btn-del-plunger"),hm=document.getElementById("file-plunger"),pm=document.getElementById("btn-dl-flipper-l"),Xi=document.getElementById("btn-up-flipper-l"),zi=document.getElementById("btn-del-flipper-l"),mm=document.getElementById("file-flipper-l"),gm=document.getElementById("btn-dl-flipper-r"),Gi=document.getElementById("btn-up-flipper-r"),ji=document.getElementById("btn-del-flipper-r"),ym=document.getElementById("file-flipper-r"),bm=document.getElementById("btn-dl-ball"),qi=document.getElementById("btn-up-ball"),Ki=document.getElementById("btn-del-ball"),wm=document.getElementById("file-ball"),tt=document.getElementById("toggle-drawn-components"),pr=[{id:"plungerCharge",label:"Plunger Charge"},{id:"plungerRelease",label:"Plunger Release"},{id:"wallBounce",label:"Wall Bounce"},{id:"bumperTrigger",label:"Bumper Trigger"},{id:"grabberTrigger",label:"Grabber Trigger"},{id:"pointTrigger",label:"Point Trigger"},{id:"boss1st",label:"Boss 1st Trigger"},{id:"boss2nd",label:"Boss 2nd Trigger"},{id:"boss3rd",label:"Boss 3rd Trigger"},{id:"boss4th",label:"Boss 4th Trigger (Pre-Jackpot)"},{id:"jackpot",label:"Jackpot"},{id:"gameOver",label:"Game Over"},{id:"backgroundMusic",label:"Background Music"}],vm='<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 14V3m0 0 4.5 4.5M12 3 7.5 7.5" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M4 16v3a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-3" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>',ll=document.getElementById("sounds-list-container");ll&&pr.forEach(t=>{const e=document.createElement("div");e.className="skin-option",e.innerHTML=`
            <span>${t.label}</span>
            <div class="skin-buttons">
                <input type="file" id="file-${t.id}" accept="audio/*" style="display:none;">
                <button type="button" id="btn-up-${t.id}" class="btn-skin-icon" aria-label="Upload sound" title="Upload sound">${vm}</button>
                <button id="btn-del-${t.id}" class="btn-delete-skin" style="display:none;">Delete</button>
            </div>
        `,ll.appendChild(e);const n=e.querySelector(`#btn-up-${t.id}`),s=e.querySelector(`#btn-del-${t.id}`),i=e.querySelector(`#file-${t.id}`);n.onclick=()=>{kt("Log in or register to add custom sounds.")&&i.click()},s.onclick=()=>{Ee[t.id]=null,n.style.display="",s.style.display="none",ke()},i.onchange=r=>{const o=r.target.files[0];if(o){const a=new FileReader;a.onload=l=>{Ee[t.id]=l.target.result,gr(Ee[t.id]),n.style.display="none",s.style.display="block",ke()},a.readAsDataURL(o)}}});function wd(){pr.forEach(t=>{const e=document.getElementById(`btn-up-${t.id}`),n=document.getElementById(`btn-del-${t.id}`);if(!e||!n)return;const s=!!Ee[t.id];e.style.display=s?"none":"",n.style.display=s?"block":"none"})}function Im(){Ee={plungerCharge:null,plungerRelease:null,wallBounce:null,bumperTrigger:null,grabberTrigger:null,pointTrigger:null,boss1st:null,boss2nd:null,boss3rd:null,boss4th:null,jackpot:null,gameOver:null,backgroundMusic:null},wd()}const vd=[[0,0,1,1,1,1,1,0,0],[0,1,0,0,0,0,0,1,0],[0,1,0,0,0,0,0,1,0],[0,1,0,0,0,0,0,1,0],[0,0,1,1,1,1,1,0,0],[0,0,0,0,0,0,0,0,0]],Em=[[0,1,0,0,0,1,0,0,0],[0,1,0,0,0,0,1,0,0],[0,1,1,1,1,1,1,1,0],[0,1,0,0,0,0,0,0,0],[0,1,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0]],_m=[[0,1,0,0,0,0,1,0,0],[0,1,1,0,0,0,0,1,0],[0,1,0,1,0,0,0,1,0],[0,1,0,0,1,0,0,1,0],[0,1,0,0,0,1,1,0,0],[0,0,0,0,0,0,0,0,0]],Sm=[[0,0,1,0,0,0,1,0,0],[0,1,0,0,1,0,0,1,0],[0,1,0,0,1,0,0,1,0],[0,1,0,0,1,0,0,1,0],[0,0,1,1,0,1,1,0,0],[0,0,0,0,0,0,0,0,0]],km=[[0,0,0,0,1,1,1,1,0],[0,0,0,0,1,0,0,0,0],[0,0,0,0,1,0,0,0,0],[0,1,1,1,1,1,1,0,0],[0,0,0,0,1,0,0,0,0],[0,0,0,0,0,0,0,0,0]],xm=[[0,0,1,0,0,1,1,1,0],[0,1,0,0,0,1,0,1,0],[0,1,0,0,0,1,0,1,0],[0,1,0,0,0,1,0,1,0],[0,0,1,1,1,0,0,1,0],[0,0,0,0,0,0,0,0,0]],Cm=[[0,0,1,1,1,1,1,0,0],[0,1,0,0,1,0,0,1,0],[0,1,0,0,1,0,0,1,0],[0,1,0,0,1,0,0,1,0],[0,0,1,1,0,0,1,0,0],[0,0,0,0,0,0,0,0,0]],Tm=[[0,0,0,0,0,0,0,1,0],[0,1,1,1,0,0,0,1,0],[0,0,0,1,1,0,0,1,0],[0,0,0,0,1,1,0,1,0],[0,0,0,0,0,1,1,1,0],[0,0,0,0,0,0,0,0,0]],Am=[[0,0,1,1,0,1,1,0,0],[0,1,0,0,1,0,0,1,0],[0,1,0,0,1,0,0,1,0],[0,1,0,0,1,0,0,1,0],[0,0,1,1,0,1,1,0,0],[0,0,0,0,0,0,0,0,0]],Lm=[[0,0,1,0,0,1,1,0,0],[0,1,0,0,1,0,0,1,0],[0,1,0,0,1,0,0,1,0],[0,1,0,0,1,0,0,1,0],[0,0,1,1,1,1,1,0,0],[0,0,0,0,0,0,0,0,0]],Id=[[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0]],Mm=[[0,0,1,1,0,0,0,0,0],[0,1,0,0,0,0,0,0,0],[0,1,0,0,0,0,0,0,0],[0,1,0,0,0,0,0,0,0],[0,1,1,1,1,1,1,1,0],[0,0,0,0,0,0,0,0,0]],Pm=[[0,1,1,1,1,1,1,0,0],[0,0,0,0,1,0,0,1,0],[0,0,0,0,1,0,0,1,0],[0,0,0,0,1,0,0,1,0],[0,1,1,1,1,1,1,0,0],[0,0,0,0,0,0,0,0,0]],Rm=[[0,1,1,1,1,1,1,1,0],[0,1,0,0,0,0,0,1,0],[0,1,0,0,0,0,0,1,0],[0,1,0,0,0,0,0,1,0],[0,0,1,0,0,0,1,0,0],[0,0,0,0,0,0,0,0,0]],Bm=[[0,1,1,1,1,1,1,1,0],[0,0,0,0,1,0,0,0,0],[0,0,0,1,0,1,0,0,0],[0,0,1,0,0,0,1,0,0],[0,1,0,0,0,0,0,1,0],[0,0,0,0,0,0,0,0,0]],Dm=[[0,1,1,1,1,1,1,1,0],[0,0,0,0,1,0,0,1,0],[0,0,0,0,1,0,0,1,0],[0,0,0,0,1,0,0,1,0],[0,0,0,0,0,1,1,0,0],[0,0,0,0,0,0,0,0,0]],Om=vd,Nm=[[0,0,0,0,0,0,0,1,0],[0,0,0,0,0,0,0,1,0],[0,1,1,1,1,1,1,1,0],[0,0,0,0,0,0,0,1,0],[0,0,0,0,0,0,0,1,0],[0,0,0,0,0,0,0,0,0]],Um=[[0,0,0,0,0,0,1,1,0],[0,0,0,0,0,1,0,0,0],[0,1,1,1,1,0,0,0,0],[0,0,0,0,0,1,0,0,0],[0,0,0,0,0,0,1,1,0],[0,0,0,0,0,0,0,0,0]],Fm=[[0,0,1,1,1,1,1,1,0],[0,1,0,0,0,0,0,0,0],[0,1,0,0,0,0,0,0,0],[0,1,0,0,0,0,0,0,0],[0,0,1,1,1,1,1,1,0],[0,0,0,0,0,0,0,0,0]],Hm=[[0,1,1,1,1,1,1,1,0],[0,1,0,0,0,0,0,1,0],[0,1,0,0,0,0,0,1,0],[0,0,1,0,0,0,1,0,0],[0,0,0,1,1,1,0,0,0],[0,0,0,0,0,0,0,0,0]],$m=[[0,1,0,0,0,0,0,1,0],[0,1,0,0,0,0,0,1,0],[0,1,1,1,1,1,1,1,0],[0,1,0,0,0,0,0,1,0],[0,1,0,0,0,0,0,1,0],[0,0,0,0,0,0,0,0,0]],Wm=[[0,1,1,1,1,1,1,1,0],[0,1,0,0,1,0,0,1,0],[0,1,0,0,1,0,0,1,0],[0,1,0,0,1,0,0,1,0],[0,1,0,0,1,0,0,1,0],[0,0,0,0,0,0,0,0,0]],Vm=[[0,1,1,1,1,1,1,1,0],[0,1,0,0,0,0,0,0,0],[0,1,0,0,0,0,0,0,0],[0,1,0,0,0,0,0,0,0],[0,1,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0]],Ym=[[0,1,1,1,1,1,1,1,0],[0,1,0,0,1,0,0,1,0],[0,1,0,0,1,0,0,1,0],[0,1,0,0,1,0,0,1,0],[0,0,1,1,0,1,1,0,0],[0,0,0,0,0,0,0,0,0]],Xm=[[0,1,0,0,0,1,1,0,0],[0,1,0,0,1,0,0,1,0],[0,1,0,0,1,0,0,1,0],[0,1,0,0,1,0,0,1,0],[0,0,1,1,0,0,0,1,0],[0,0,0,0,0,0,0,0,0]],zm=[[0,1,1,1,1,1,1,1,0],[0,0,0,0,1,0,0,1,0],[0,0,0,0,1,0,0,1,0],[0,0,0,0,1,0,0,1,0],[0,0,0,0,0,0,0,1,0],[0,0,0,0,0,0,0,0,0]],Gm=[[0,1,1,1,1,1,1,1,0],[0,0,0,0,0,0,1,0,0],[0,0,0,0,0,1,0,0,0],[0,0,0,0,1,0,0,0,0],[0,1,1,1,1,1,1,1,0],[0,0,0,0,0,0,0,0,0]],jm=[[0,1,1,1,1,1,1,1,0],[0,0,0,0,0,0,1,0,0],[0,0,0,0,0,1,0,0,0],[0,0,0,0,0,0,1,0,0],[0,1,1,1,1,1,1,1,0],[0,0,0,0,0,0,0,0,0]],qm=[[0,0,0,0,0,1,1,1,0],[0,0,0,1,1,0,0,0,0],[0,1,1,0,0,0,0,0,0],[0,0,0,1,1,0,0,0,0],[0,0,0,0,0,1,1,1,0],[0,0,0,0,0,0,0,0,0]],Km=[[0,1,1,1,1,1,1,1,0],[0,0,0,0,1,0,0,1,0],[0,0,0,0,1,0,0,1,0],[0,0,0,1,1,0,0,1,0],[0,1,1,0,0,1,1,0,0],[0,0,0,0,0,0,0,0,0]],Jm=[[0,0,1,1,1,1,1,0,0],[0,1,0,0,0,0,0,1,0],[0,1,0,0,0,0,0,1,0],[0,1,0,1,0,0,0,1,0],[0,0,1,1,1,0,0,1,0],[0,0,0,0,0,0,0,0,0]],Qm=[[0,0,1,1,1,1,1,1,0],[0,1,0,0,0,0,0,0,0],[0,0,0,1,1,1,0,0,0],[0,1,0,0,0,0,0,0,0],[0,0,1,1,1,1,1,1,0],[0,0,0,0,0,0,0,0,0]],Zm=[[0,1,1,1,1,1,1,1,0],[0,0,0,0,1,0,0,0,0],[0,0,0,0,1,0,0,0,0],[0,0,0,0,1,0,0,0,0],[0,1,1,1,1,1,1,1,0],[0,0,0,0,0,0,0,0,0]],eg=[[0,1,1,0,0,0,0,1,0],[0,1,0,1,0,0,0,1,0],[0,1,0,0,1,0,0,1,0],[0,1,0,0,0,1,0,1,0],[0,1,0,0,0,0,1,1,0],[0,0,0,0,0,0,0,0,0]],tg=[[0,0,1,1,1,1,1,0,0],[0,1,0,0,0,0,0,1,0],[0,1,0,1,0,0,0,1,0],[0,1,1,0,0,0,0,1,0],[0,0,1,1,1,1,1,0,0],[0,0,0,0,0,0,0,0,0]],ng=[[0,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0,0],[0,1,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0]],sg=[[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,1,1,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0]],ig=[[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,1,0,0,1,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0]],rg=[[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,1,1,1,1,1,0,0],[0,1,0,0,0,0,0,1,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0]],og=[[0,0,0,0,0,0,0,0,0],[0,0,0,0,1,0,0,0,0],[0,0,0,1,1,1,0,0,0],[0,0,0,0,1,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0]],ag=[[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,1,0,1,1,1,1,1,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0]],lg=[[0,1,1,0,0,0,1,1,0],[0,0,0,1,0,1,0,0,0],[0,0,0,0,1,0,0,0,0],[0,0,0,1,0,1,0,0,0],[0,1,1,0,0,0,1,1,0],[0,0,0,0,0,0,0,0,0]],cg={0:vd,1:Em,2:_m,3:Sm,4:km,5:xm,6:Cm,7:Tm,8:Am,9:Lm," ":Id,J:Mm,A:Pm,C:Rm,K:Bm,P:Dm,O:Om,T:Nm,Y:Um,U:Fm,D:Hm,I:$m,E:Wm,L:Vm,B:Ym,S:Xm,F:zm,N:Gm,M:jm,V:qm,R:Km,G:Jm,W:Qm,H:Zm,Z:eg,Q:tg,X:lg,",":ng,"'":sg,":":ig,"(":rg,"+":og,"!":ag},cl=["","DOUBLE ","TRIPLE ","QUAD ","PENTA ","HEXA ","HEPTA ","OCTA ","NONA ","DECA "];function dg(t){return t<=cl.length?cl[t-1]+"JACKPOT":"JACKPOT X"+t}const dl=["YOU SUCK, MAN","DAMN, YOU'RE REALLY BAD","LOLMAO","GGEZ","PHYSICS DIFF",":(:(:(:(:(:(:(:(:(","YO, PRESS ALT+F4 RL QUICK","GAME OVER, MAN!","GET A JOB","NICE ONE NUMNUTS","YAWN"];let Us=null;function Fe(t){const e=t.toString();if(e===Us)return;Us=e;const n="*";let s="";for(let i=8;i>-1;i--){for(let r=0;r<e.length;r++){const o=e.charAt(r),a=i;for(let l=0;l<6;l++){const c=l;(cg[o]||Id)[c][a]===0?s+="&nbsp;":s+=n}}s+="<br/>"}si.innerHTML=s,requestAnimationFrame(()=>{si.style.transform="none";const i=Xe.clientWidth-20,r=si.scrollWidth;if(r>i&&r>0&&i>0){const o=i/r;si.style.transform=`scale(${o})`}})}let x=[],D=[],H=[],ge=[];const ug=60;let ve=-1,A=[],Oe=!1,ue=null,pt=null;const fg=10;let T="none";const no=()=>T==="pen"||T==="bumper"||T==="point"||T==="grabber"||T==="boss";let so=!1;const Ct=Math.SQRT1_2,hg=[[1,0],[Ct,Ct],[0,1],[-Ct,Ct],[-1,0],[-Ct,-Ct],[0,-1],[Ct,-Ct]];function pg(t,e,n){const s=e-t.x,i=n-t.y,r=Math.hypot(s,i);if(r===0)return{x:e,y:n};const o=(Math.round(Math.atan2(i,s)/(Math.PI/4))%8+8)%8,[a,l]=hg[o];return{x:t.x+a*r,y:t.y+l*r}}function Ed(t,e){return!so||Oe||Xt||A.length===0?{x:t,y:e}:pg(A[A.length-1],t,e)}let Ce=0,Te=0,gi=!1,M=new Set,mt=!1,Ee={plungerCharge:null,plungerRelease:null,wallBounce:null,bumperTrigger:null,grabberTrigger:null,pointTrigger:null,boss1st:null,boss2nd:null,boss3rd:null,boss4th:null,jackpot:null,gameOver:null,backgroundMusic:null};const ea={};pr.forEach(t=>{ea[t.id]=`${Q}sounds/${t.id}.mp3`});let we=null,oi=null,Xn=null,zn=null;const ms=new Map,Mr=new Map,io={};let ai=!1;function _d(t){let e=parseFloat(localStorage.getItem(t));return isNaN(e)&&(e=parseFloat(localStorage.getItem("pinball_volume"))),isNaN(e)?.5:Math.max(0,Math.min(1,e))}let _s=_d("pinball_music_vol"),Ss=_d("pinball_sfx_vol");function mr(){if(we)return;we=new(window.AudioContext||window.webkitAudioContext),Xn=we.createGain(),zn=we.createGain(),Xn.gain.value=_s,zn.gain.value=Ss,oi=we.createGain();const t=we.createDynamicsCompressor();t.threshold.value=-12,t.knee.value=12,t.ratio.value=12,t.attack.value=.003,t.release.value=.25,Xn.connect(oi),zn.connect(oi),oi.connect(t),t.connect(we.destination)}function mg(t){_s=Math.max(0,Math.min(1,t)),localStorage.setItem("pinball_music_vol",String(_s)),Xn&&(Xn.gain.value=_s)}function gg(t){Ss=Math.max(0,Math.min(1,t)),localStorage.setItem("pinball_sfx_vol",String(Ss)),zn&&(zn.gain.value=Ss)}function gr(t){if(!t)return Promise.resolve(null);if(ms.has(t))return Promise.resolve(ms.get(t));if(Mr.has(t))return Mr.get(t);mr();const e=fetch(t).then(n=>{if(!n.ok)throw new Error("missing");return n.arrayBuffer()}).then(n=>we.decodeAudioData(n)).then(n=>(ms.set(t,n),n)).catch(()=>(ms.set(t,null),null));return Mr.set(t,e),e}const ul={wallBounce:.6};function Gn(t){const e=io[t];if(e){try{e.stop()}catch{}io[t]=null}}function fl(t,e,n,s){const i=we.createBufferSource();i.buffer=n,i.loop=s;const r=we.createGain(),o=ul[t]!=null?ul[t]:1;r.gain.value=o,i.connect(r),r.connect(t==="backgroundMusic"?Xn:zn),i.start(),(s||t==="plungerCharge")&&(Gn(t),io[t]=i)}function me(t,e=!1){const n=Ee[t]||ea[t];if(!n)return;mr(),we.state==="suspended"&&we.resume();const s=ms.get(n);if(s){fl(t,n,s,e);return}s!==null&&gr(n).then(i=>{i&&fl(t,n,i,e)})}function yg(){Object.keys(Ee).forEach(t=>{Ee[t]&&gr(Ee[t])})}let hl=!1;function Sd(){hl||(hl=!0,mr(),we.state==="suspended"&&we.resume(),pr.forEach(t=>gr(Ee[t.id]||ea[t.id])))}window.addEventListener("pointerdown",Sd,{once:!0});window.addEventListener("keydown",Sd,{once:!0});function kd(t,e,n,s){const i=document.getElementById(t),r=document.getElementById(e);if(!i)return;const o=Math.round(n*100);i.value=o,r&&(r.textContent=o),i.addEventListener("input",()=>{const a=parseInt(i.value,10);r&&(r.textContent=a),s(a/100)})}kd("music-volume","music-vol-val",_s,mg);kd("sfx-volume","sfx-vol-val",Ss,gg);let Xt=!1,ts=!1,We={x:0,y:0},Dt={x:0,y:0},zt=!1,it=!1,Gt=null,ks=0,xs=0,Fs=null,Ke=[],jn=!1,ro=!1,Ht="none",pe={x:0,y:0},xd=0,ta=[],Et=0,_t=0,j=1,Ne=0,Ue=0,$t=!1,gs=0,yi=0,Hs=!1;const Cd=30,$s=.45;let Rn=!1;const Td=()=>S/16;let Wt=null,Vt=null;const bg=300;let pl=null;function bn(t){return x.length+t<=bg?!0:(Ad("PART LIMIT"),!1)}function Ad(t){Fe(t),clearTimeout(pl),pl=setTimeout(()=>Fe(ce),1500)}let ml=null,ce=0,oo=new Set,Bn=0,ct=-1,rn=-1,ys=0;const wg=20;let bs=0,ot=0,ao=0,be=!1,dn=3,X="playing",Dn=0,on="",On=null,na=!1,gl=0;const yl=1e4,vg=5,Ig=.5,Eg="#888";let Ln=[],Ae=[],dt=new Set,un=0,bl=-1,ws=!1;const Ld=20,wl=Math.ceil(Ld*1.6);let Tt=null,Nn=0,Cs=0,Un=0,Ts=0;function _g(t){for(let e=0;e<t.length;e++){const n=t[e];n.x<Nn&&(Nn=n.x),n.x>Un&&(Un=n.x),n.y<Cs&&(Cs=n.y),n.y>Ts&&(Ts=n.y)}}let lo=[],co=[],S,C,Qs=!1,Ve=null,uo=!0,bi=!0,W=!0;const Le={mode:"rest",x:0,y:0,scale:1,angle:0};let fo="",ho="";function yr(){fo="",ho=""}let nn=null;function br(){nn=null}window.addEventListener("resize",br);const g={x:0,y:0,vx:0,vy:0,radius:0,cssWidth:.045},re={angle:0,omega:0,cssLeft:.24,cssBottom:.12,cssWidth:.16,origX:.2,origY:.25},oe={angle:0,omega:0,cssLeft:.5,cssBottom:.12,cssWidth:.16,origX:.8,origY:.25},J={scale:1,cssLeft:.907,cssBottom:.035,cssWidth:.07,origX:.5,origY:1},N={ArrowLeft:!1,ArrowRight:!1,Space:!1,ArrowDown:!1,KeyC:!1};document.addEventListener("keydown",t=>{if(!t.ctrlKey&&!t.metaKey&&N.hasOwnProperty(t.code)){const e=document.activeElement;if(e&&(e.tagName==="INPUT"||e.tagName==="TEXTAREA"||e.isContentEditable))return;e&&e!==document.body&&e.blur&&e.blur(),N[t.code]=!0,t.code==="Space"&&t.preventDefault()}});document.addEventListener("keyup",t=>{N.hasOwnProperty(t.code)&&(N[t.code]=!1)});function sa(t){t!==so&&(so=t,A.length>0&&(W=!0))}document.addEventListener("keydown",t=>sa(t.shiftKey));document.addEventListener("keyup",t=>sa(t.shiftKey));window.addEventListener("blur",()=>sa(!1));qc(C0);const Sg=6e3;function kg(){const t=document.getElementById("pinballa-splash");if(!t){Ga();return}const e=[];for(const n of document.querySelectorAll("img[src]"))n.complete||n.getClientRects().length&&e.push(new Promise(s=>{n.addEventListener("load",s,{once:!0}),n.addEventListener("error",s,{once:!0})}));document.fonts&&document.fonts.ready&&e.push(document.fonts.ready.catch(()=>{})),e.push(dm),e.push(new Promise(n=>setTimeout(n,Sg))),Promise.race([Promise.all(e.slice(0,-1)),e[e.length-1]]).then(()=>{const n=()=>{t.classList.add("splash-hide"),setTimeout(()=>t.remove(),800),Ga()};document.hidden?n():requestAnimationFrame(()=>requestAnimationFrame(n))})}const xg=3,Cg=.25;var Xl,zl,Gl;const Md=(((Xl=window.matchMedia)==null?void 0:Xl.call(window,"(pointer: coarse)").matches)??!1)&&Math.min(((zl=window.screen)==null?void 0:zl.width)||window.innerWidth,((Gl=window.screen)==null?void 0:Gl.height)||window.innerHeight)<=900,vl=Md?.6:1,Tg=.2;let wi=1;const Ag=()=>[[q,ee],[Gc,le],[zc,at],[Qn,w]];function Lg(){const t=F.clientWidth||window.innerWidth||0;if(!t||!S)return vl;const e=Math.min(window.devicePixelRatio||1,xg),n=t*e*j/S;return Math.min(vl,Math.max(Cg,n))}function po(t){const e=Lg();if(!t&&Math.abs(e-wi)<Tg*wi)return;wi=e;const n=Math.max(1,Math.round(S*e)),s=Math.max(1,Math.round(C*e));for(const[i,r]of Ag())i.width=n,i.height=s,r.setTransform(e,0,0,e,0,0);ra(),W=!0,ws=!0,Tt=null}let vi=0;function ia(){if(!vi){const t=q.getBoundingClientRect();vi=t.width?S/t.width:1}return vi}function ra(){vi=0}const At={marquee:2,dash:[7,5],knobR:9,knobRing:2,stem:22,grab:13};let Il=null;function Pd(){clearTimeout(Il),Il=setTimeout(()=>po(),180)}function El(){S=st.naturalWidth||600,C=st.naturalHeight||1066,$r.width=S,$r.height=C,po(!0),[0,120,400,900].forEach(t=>setTimeout(()=>po(!0),t)),ye(),ae(),g.radius=S*g.cssWidth/2,je(),Qs=!0,requestAnimationFrame(xo),kg(),setTimeout(()=>{const t=jo();t?(zo=!0,ht=t,dd(t)):Y0(),G0()},0)}function je(t=!0){g.x=S*(1-.0375)-g.radius,g.y=C*(1-.16)-g.radius,g.vx=0,g.vy=0,jn=!1,G.classList.remove("held"),oo.clear(),dt.clear(),Ae=[],un++,Bn=0,ct=-1,rn=-1,ys=0,bs=0,ot=0,ao=0,t&&(ce=0),Fe(ce)}st.complete?El():st.onload=El;Pi.onclick=()=>Qt("select");jc.onclick=()=>ay();Ri.onclick=()=>Qt("pen");Ho.onclick=()=>Qt("bumper");$o.onclick=()=>Qt("point");Wo.onclick=()=>Qt("grabber");Vo.onclick=()=>Qt("boss");var jl;const Rd=((jl=window.matchMedia)==null?void 0:jl.call(window,"(hover: hover) and (pointer: fine)").matches)??!0;function Mg(){document.querySelectorAll("[data-chip]").forEach(e=>{const n=e.querySelector(".chip-tilt"),s=e.querySelector(".chip-flip");if(!(!n||!s)){if(Rd){e.addEventListener("pointermove",r=>{const o=e.getBoundingClientRect(),a=(r.clientX-o.left)/o.width-.5,c=-((r.clientY-o.top)/o.height-.5)*14*2,d=a*14*2;n.style.transition="none",n.style.transform=`rotateX(${c.toFixed(2)}deg) rotateY(${d.toFixed(2)}deg)`});const i=()=>{n.style.transition="",n.style.transform=""};e.addEventListener("pointerleave",i),e.addEventListener("blur",i)}e.addEventListener("click",()=>{s.classList.remove("flipping"),s.offsetWidth,s.classList.add("flipping")}),s.addEventListener("animationend",()=>s.classList.remove("flipping"))}})}Mg();function Pg(){document.querySelectorAll("[data-chip]").forEach(t=>{const e=()=>t.classList.toggle("glowing",t.classList.contains("active"));e(),new MutationObserver(e).observe(t,{attributes:!0,attributeFilter:["class"]})})}Pg();function Rg(){if(!Rd)return;const t=6;document.querySelectorAll("[data-tilt]").forEach(e=>{const n=i=>{const r=e.getBoundingClientRect(),o=(i.clientX-r.left)/r.width-.5,l=-((i.clientY-r.top)/r.height-.5)*t*2,c=o*t*2,d=i.buttons&1?.98:1.02;e.style.transition="none",e.style.transform=`perspective(600px) rotateX(${l.toFixed(2)}deg) rotateY(${c.toFixed(2)}deg) scale(${d})`};e.addEventListener("pointermove",n),e.addEventListener("pointerdown",n),e.addEventListener("pointerup",n);const s=()=>{e.style.transition="",e.style.transform=""};e.addEventListener("pointerleave",s),e.addEventListener("blur",s)})}Rg();const Bt=document.createElement("div");Bt.className="chip-tooltip";document.body.appendChild(Bt);let As=null;function _l(){clearTimeout(As),As=null,Bt.classList.remove("show")}document.querySelectorAll("#editor-panel [data-chip]").forEach(t=>{const e=t.getAttribute("aria-label");if(!e)return;const n=()=>{As||Bt.classList.contains("show")||(As=setTimeout(()=>{As=null;const s=t.getBoundingClientRect();Bt.textContent=e,Bt.style.left=`${s.left+s.width/2}px`,Bt.style.top=`${s.top-8}px`,Bt.classList.add("show")},600))};t.addEventListener("pointerenter",n),t.addEventListener("pointerleave",_l),t.addEventListener("pointerdown",_l)});const Bg={"btn-select":"S","btn-pen":"W","btn-onion":"G","btn-mirror":"M","btn-merge":"F","btn-grid":"L","btn-undo":"Ctrl+Z","btn-redo":"Ctrl+Y","btn-bumper":"1","btn-grabber":"2","btn-point":"3","btn-boss":"4"},wn=document.createElement("div");wn.className="keytip-layer";document.body.appendChild(wn);let Ws=!1,Ji=[];function Bd(){const t=mo.getBoundingClientRect();for(const{chip:e,tip:n}of Ji){const s=e.getBoundingClientRect(),i=s.width>0&&s.bottom>t.top&&s.top<t.bottom;n.style.display=i?"":"none",i&&(n.style.left=`${s.left+s.width/2}px`,n.style.top=`${s.bottom-6}px`)}}function Dg(){if(!Ws){Ws=!0,wn.innerHTML="",Ji=[];for(const[t,e]of Object.entries(Bg)){const n=document.getElementById(t);if(!n)continue;const s=document.createElement("div");s.className="keytip",s.textContent=e,wn.appendChild(s),Ji.push({chip:n,tip:s})}Bd(),wn.classList.add("show")}}function oa(){Ws&&(Ws=!1,wn.classList.remove("show"),wn.innerHTML="",Ji=[])}const mo=document.getElementById("editor-panel");mo&&mo.addEventListener("scroll",()=>{Ws&&Bd()},{passive:!0});window.addEventListener("keydown",t=>{t.key==="Alt"&&!t.repeat&&(t.preventDefault(),Dg())});window.addEventListener("keyup",t=>{t.key==="Alt"&&oa()});window.addEventListener("blur",oa);window.addEventListener("pointerdown",oa);const Dd=()=>se.classList.contains("classic-mode")||se.classList.contains("fantasies-mode");function Od(t){na=t,Oi.classList.toggle("active",t),t||(Ln=[],at.clearRect(0,0,S,C))}Oi.onclick=()=>{Oi.blur(),!Dd()&&Od(!na)};const An=document.getElementById("panel-profile-home");if(An){let e=!1,n=null;const s=()=>{e=!1,An.classList.remove("confirming"),An.setAttribute("aria-label","Back to Corruption Corp"),clearTimeout(n)};An.addEventListener("click",i=>{i.ctrlKey||i.metaKey||i.shiftKey||i.altKey||e||(i.preventDefault(),e=!0,An.classList.add("confirming"),An.setAttribute("aria-label","Press again to leave Pinballa"),clearTimeout(n),n=setTimeout(s,3e3))})}function Nd(){T!=="none"&&Qt(T),Od(!1)}Bi.onclick=()=>{Bi.blur(),Nd(),be=!0,se.classList.add("classic-mode"),Yn.style.display="flex",Yn.title=window.isExclusivePlay?"Close game":"Exit Classic",requestAnimationFrame(St),setTimeout(St,300),j=1,Ne=0,Ue=0,W=!0,dn=3,ce=0,je(!1),X="fantasies_intro",document.getElementById("btn-fantasies-start").style.display="block",ls(),me("backgroundMusic",!0)};Yn.onclick=()=>{Yn.blur(),be=!1,se.classList.remove("classic-mode"),Yn.style.display="none",document.getElementById("btn-fantasies-start").style.display="none",Gn("backgroundMusic"),fn.classList.remove("open"),$.style.transformOrigin="",yr(),ls(),Hd(),window.isExclusivePlay&&(window.isExclusivePlay=!1,ur.click(),window.lastViewedMachine&&!window.lastViewedMachine.isLocal&&(gt.length||os.click(),document.getElementById("arcade-modal").style.display="flex",Cn(window.lastViewedMachine.machine,window.lastViewedMachine.isLocal,window.lastViewedMachine.index))),Zt(),W=!0,X="playing",document.getElementById("leaderboard-overlay").style.display="none",je(!0)};Di.onclick=()=>{Di.blur(),Nd(),be=!0,se.classList.add("fantasies-mode"),br(),Vn.style.display="flex",Vn.title=window.isExclusivePlay?"Close game":"Exit Fantasies",requestAnimationFrame(St),setTimeout(St,300),j=1,Ne=0,Ue=0,W=!0,dn=3,ce=0,je(!1),X="fantasies_intro",document.getElementById("btn-fantasies-start").style.display="block",window.fantasiesIntroPanDir=1,ls(),me("backgroundMusic",!0)};Vn.onclick=()=>{Vn.blur(),be=!1,se.classList.remove("fantasies-mode"),br(),Vn.style.display="none",document.getElementById("btn-fantasies-start").style.display="none",Gn("backgroundMusic"),fn.classList.remove("open"),$.style.transformOrigin="",yr(),ls(),Hd(),window.isExclusivePlay&&(window.isExclusivePlay=!1,ur.click(),window.lastViewedMachine&&!window.lastViewedMachine.isLocal&&(gt.length||os.click(),document.getElementById("arcade-modal").style.display="flex",Cn(window.lastViewedMachine.machine,window.lastViewedMachine.isLocal,window.lastViewedMachine.index))),Zt(),W=!0,X="playing",document.getElementById("leaderboard-overlay").style.display="none",je(!0)};document.getElementById("btn-fantasies-start").onclick=()=>{document.getElementById("btn-fantasies-start").style.display="none",X="message",on="3 BALLS LEFT",Dn=60,je(!1),On=()=>{X="playing"}};const Z=(()=>{try{return{crt:0,mosaic:0,angle:0,...JSON.parse(localStorage.getItem("pinball_tv")||"{}")}}catch{return{crt:0,mosaic:0,angle:0}}})();Z.mosaic=Math.max(0,Math.min(20,Z.mosaic));const Ls=document.getElementById("btn-tv"),fn=document.getElementById("tv-panel"),go=document.getElementById("crt-overlay"),Sl=document.getElementById("tv-filter-layer");function Qi(){return Z.mosaic>0?3+2*Math.round(Z.mosaic/20*3):0}function ls(){if(go.style.opacity=String(Z.crt/100),be&&Qi()>0){const t=Qi(),e=(t-1)/2,n=document.getElementById("tv-mosaic-filter"),s=n.querySelector("feFlood"),i=n.querySelector("feComposite"),r=n.querySelector("feMorphology");s.setAttribute("x",e),s.setAttribute("y",e),i.setAttribute("width",t),i.setAttribute("height",t),r.setAttribute("radius",e),Sl.style.filter="url(#tv-mosaic-filter)"}else Sl.style.filter="";Fd(),wu(),W=!0}const Ud=900;function Fd(){if(!(se.classList.contains("classic-mode")&&Z.angle>0)){F.style.width="",F.style.height="",F.style.aspectRatio="",F.style.background="",F.style.boxShadow="",F.style.margin="",$.style.background="",$.style.position="",$.style.left="",$.style.bottom="",$.style.width="",$.style.height="",$.style.transformStyle="",$.style.transform="",$.style.transformOrigin="",F.style.overflow="",go.style.clipPath="";const h=F.offsetWidth;if(h){const p=h+"px";Xe.style.width!==p&&(Xe.style.width=p,Us=null)}St();return}const n=document.getElementById("game-wrapper").clientHeight-Xe.offsetHeight-10,s=Mu.clientWidth;F.style.width="",F.style.height="",F.style.aspectRatio="",F.style.margin="";const i=F.getBoundingClientRect().width,r=Z.angle*Math.PI/180,o=Ud;F.style.aspectRatio="auto",F.style.background="transparent",F.style.boxShadow="none",F.style.overflow="visible",F.style.height=n+"px",$.style.background="#d3d3d3",$.style.position="absolute",$.style.left="0",$.style.bottom="0",$.style.transformStyle="preserve-3d",$.style.transformOrigin="50% 100%",$.style.transform=`perspective(${o}px) rotateX(${Z.angle}deg)`,yr();let a=s,l=n;for(let h=0;h<6&&(F.style.width=a+"px",$.style.width=a+"px",$.style.height=a*3240/1920+"px",l=$.getBoundingClientRect().height,l>n);h++)a*=n/l;const c=a*3240/1920;$.style.width=a+"px",$.style.height=c+"px",l=$.getBoundingClientRect().height,F.style.width=a+"px",F.style.height=l+"px",F.style.margin="auto 0";const u=((1-o/(o+c*Math.sin(r)))/2*100).toFixed(2);go.style.clipPath=`polygon(${u}% 0, ${100-u}% 0, 100% 100%, 0 100%)`;const f=Math.round(i)+"px";Xe.style.width!==f&&(Xe.style.width=f,Us=null),St()}window.addEventListener("resize",Fd);function Hd(){se.classList.add("mode-return"),setTimeout(()=>se.classList.remove("mode-return"),80)}function aa(t,e){const n=document.getElementById(t),s=document.getElementById(t+"-val");n.value=Z[e],s.textContent=Z[e],n.addEventListener("input",()=>{Z[e]=parseInt(n.value,10)||0,s.textContent=Z[e],localStorage.setItem("pinball_tv",JSON.stringify(Z)),ls()})}aa("tv-crt","crt");aa("tv-mosaic","mosaic");aa("tv-angle","angle");function $d(){Z.crt=0,Z.mosaic=0,Z.angle=0,localStorage.setItem("pinball_tv",JSON.stringify(Z)),["tv-crt","tv-mosaic","tv-angle"].forEach(t=>{const e=document.getElementById(t),n=document.getElementById(t+"-val");e&&(e.value=0),n&&(n.textContent="0")}),ls()}function St(){if(!se.classList.contains("classic-mode")&&!se.classList.contains("fantasies-mode"))return;const t=Xe.getBoundingClientRect();if(!t.width)return;const n=(Ls.offsetWidth||30)*.62+4,s=o=>Math.min(Math.max(o,n),window.innerWidth-n);for(const o of[Yn,Vn])o.style.left=s(t.right)+"px",o.style.top=t.bottom+"px";const i=s(t.left);Ls.style.left=i+"px",Ls.style.top=t.bottom+"px";const r=fn.offsetWidth||220;fn.style.left=Math.min(i,Math.max(8,window.innerWidth-r-8))+"px",fn.style.top=t.bottom+20+"px",fn.style.right="auto"}window.addEventListener("resize",St);Ls.onclick=()=>{Ls.blur(),St(),fn.classList.toggle("open")};Jc.onclick=()=>sy();mi.onclick=()=>{mi.blur(),Rn=!Rn,mi.classList.toggle("active",Rn),Rn||(Wt=null,Vt=null),W=!0};A0.onclick=iu;L0.onclick=ru;function ke(){_n||(_n=!0,Jt())}function Jt(){const t=De.value.trim();let e=JSON.parse(localStorage.getItem("pinball_arcade")||"[]"),n=-1;t&&(n=e.findIndex(i=>i.name===t));let s=!1;if(n>=0&&e[n].publishedId&&(s=e[n].publishNeeded===!1),_n?(ne.disabled=!1,ne.style.opacity="1",he.disabled=!1,he.style.opacity="1"):(ne.disabled=!0,ne.style.opacity="0.5",s?(he.disabled=!0,he.style.opacity="0.5"):(he.disabled=!1,he.style.opacity="1")),!t){ne.textContent!=="SURE?"&&ne.textContent!=="Saved!"&&(ne.textContent="Save");return}ne.textContent!=="SURE?"&&ne.textContent!=="Saved!"&&(n>=0?ne.textContent="Overwrite":ne.textContent="Save")}Jt();De.addEventListener("input",()=>{ke()});rs.addEventListener("input",()=>{ke()});const Og=600,Ng=300;function Wd(){const t=document.createElement("canvas");t.width=S,t.height=C;const e=t.getContext("2d");e.fillStyle="#d3d3d3",e.fillRect(0,0,S,C),e.drawImage(st,0,0,S,C),e.drawImage(q,0,0,S,C),Y.style.display!=="none"&&Y.src&&e.drawImage(Y,0,0,S,C);const n=(o,a,l,c,d,u,f,h=1)=>{yu(e,o,a,l,c,d,u,f,h)};n(Re,re.cssLeft,re.cssBottom,re.cssWidth,re.origX,re.origY,re.angle),n(Be,oe.cssLeft,oe.cssBottom,oe.cssWidth,oe.origX,oe.origY,oe.angle),n(Se,J.cssLeft,J.cssBottom,J.cssWidth,J.origX,J.origY,0,J.scale);const s=S*g.cssWidth;if(e.fillStyle=G.style.backgroundColor||"#888",e.beginPath(),e.arc(Math.max(g.x,s),Math.max(g.y,s),s/2,0,Math.PI*2),e.fill(),G.style.backgroundImage&&G.style.backgroundImage!=="none"){const o=G.style.backgroundImage.slice(4,-1).replace(/"/g,"");if(o){let a=new Image;a.src=o,a.complete&&e.drawImage(a,g.x-s/2,g.y-s/2,s,s)}}const i=o=>{const a=document.createElement("canvas");a.width=o,a.height=Math.round(C*(o/S));const l=a.getContext("2d");return l.imageSmoothingEnabled=!0,l.imageSmoothingQuality="high",l.drawImage(t,0,0,a.width,a.height),a},r=i(Og).toDataURL("image/webp",.9);return r.startsWith("data:image/webp")?r:i(Ng).toDataURL("image/jpeg",.9)}um.onclick=()=>{const t=document.createElement("canvas");t.width=S,t.height=C;const e=t.getContext("2d");e.fillStyle="#d3d3d3",e.fillRect(0,0,S,C),e.drawImage(st,0,0,S,C),e.drawImage(q,0,0,S,C);const n=document.createElement("a"),s=De.value.trim()||"overlay-template";n.download=`${s}.png`,n.href=t.toDataURL("image/png"),n.click()};gn.onclick=()=>{kt("Log in or register to add custom skins.")&&bd.click()};yn.onclick=()=>{Y.src="",Y.dataset.skinUrl="",Y.dataset.skinHidden="",Y.style.display="none",gn.style.display="",yn.style.display="none",xn("overlay"),ke()};bd.onchange=t=>{const e=t.target.files[0];if(!e)return;const n=new FileReader;n.onload=s=>{const i=s.target.result;Y.src=i,Y.dataset.skinUrl=i,Y.dataset.skinHidden="",Y.style.display="block",gn.style.display="none",yn.style.display="block",Zs(),xn("overlay"),ke()},n.readAsDataURL(e)};tt.onchange=()=>{Zs(),ke()};function Zs(){const t=tt.checked;q.style.opacity=t?"0":"1",Qn.style.opacity=t?"0":"1"}const He=document.getElementById("toggle-main-wall");He.onchange=()=>{st.style.opacity=He.checked?"0":"1",ke()};const yo=document.getElementById("btn-eye-drawn"),bo=document.getElementById("btn-eye-wall");function Zi(t,e){t.classList.toggle("eye-off",e.checked),t.setAttribute("aria-pressed",e.checked?"false":"true"),t.title=e.checked?"Hidden — click to show":"Visible — click to hide"}yo.onclick=()=>{tt.checked=!tt.checked,Zs(),Zi(yo,tt),ke()};bo.onclick=()=>{He.checked=!He.checked,st.style.opacity=He.checked?"0":"1",Zi(bo,He),ke()};function Vd(t){tt.checked=!!(t&&t.invisibleComponents),He.checked=!!(t&&t.hideMainWall),Zs(),st.style.opacity=He.checked?"0":"1",Zi(yo,tt),Zi(bo,He)}function wr(t,e,n,s,i,r=!1,o=null,a=null){!r&&!n.style.aspectRatio&&n.naturalWidth&&(n.style.aspectRatio=`${n.naturalWidth} / ${n.naturalHeight}`),s.onclick=()=>{const l=document.createElement("a");l.download=i.split("/").pop();let c=n.dataset.skinUrl||i;l.href=c,l.click()},t.onclick=()=>{kt("Log in or register to add custom skins.")&&e.click()},o&&(o.onclick=()=>{r?(n.style.backgroundImage=`url("${i}")`,n.style.backgroundColor="transparent"):n.src=i,n.dataset.skinUrl="",n.dataset.skinHidden="",t.style.display="",o.style.display="none",a&&xn(a),ke()}),e.onchange=l=>{const c=l.target.files[0];if(!c)return;const d=new FileReader;d.onload=u=>{const f=u.target.result;r?(n.style.backgroundImage=`url("${f}")`,n.style.backgroundColor="transparent",n.dataset.skinUrl=f):(n.onload=()=>{!n.style.aspectRatio&&n.naturalWidth&&(n.style.aspectRatio=`${n.naturalWidth} / ${n.naturalHeight}`),n.onload=null},n.src=f,n.dataset.skinUrl=f),n.dataset.skinHidden="",a&&xn(a),o&&(t.style.display="none",o.style.display="block"),ke()},d.readAsDataURL(c)}}wr(Vi,hm,Se,fm,Q+"board/plunger.png",!1,Yi,"plunger");wr(Xi,mm,Re,pm,Q+"board/flipper_left.png",!1,zi,"flipperL");wr(Gi,ym,Be,gm,Q+"board/flipper_right.png",!1,ji,"flipperR");wr(qi,wm,G,bm,Q+"board/ball.png",!0,Ki,"ball");const kn={overlay:{el:Y,def:null,isOverlay:!0},plunger:{el:Se,def:Q+"board/plunger.png"},flipperL:{el:Re,def:Q+"board/flipper_left.png"},flipperR:{el:Be,def:Q+"board/flipper_right.png"},ball:{el:G,def:Q+"board/ball.png",isBg:!0}},wo={overlay:document.getElementById("btn-eye-overlay"),plunger:document.getElementById("btn-eye-plunger"),flipperL:document.getElementById("btn-eye-flipper-l"),flipperR:document.getElementById("btn-eye-flipper-r"),ball:document.getElementById("btn-eye-ball")};function Yd(t){const e=kn[t],n=e.el.dataset.skinUrl||"",s=e.el.dataset.skinHidden==="1",i=!!n&&!s;e.isOverlay?(e.el.style.display=i?"block":"none",i&&(e.el.src=n),Zs()):e.isBg?(e.el.style.backgroundImage=`url("${i?n:e.def}")`,e.el.style.backgroundColor="transparent"):e.el.src=i?n:e.def}function xn(t){const e=wo[t];if(!e)return;const n=kn[t].el,s=!!n.dataset.skinUrl,i=n.dataset.skinHidden==="1";e.disabled=!s,e.classList.toggle("eye-off",i),e.setAttribute("aria-pressed",i?"false":"true"),e.title=s?i?"Show custom skin":"Hide custom skin":"Upload a skin to toggle it"}Object.keys(wo).forEach(t=>{const e=wo[t];e&&(e.onclick=()=>{const n=kn[t].el;n.dataset.skinUrl&&(n.dataset.skinHidden=n.dataset.skinHidden==="1"?"":"1",Yd(t),xn(t),ke())},xn(t))});function la(){const t={};for(const e of Object.keys(kn))t[e]=kn[e].el.dataset.skinHidden==="1";return t}function Xd(t){for(const e of Object.keys(kn))kn[e].el.dataset.skinHidden=t&&t[e]?"1":"",Yd(e),xn(e)}function ca(){G.style.backgroundImage=`url("${Q}board/ball.png")`,G.style.backgroundColor="transparent"}ca();function da(t,e,n,s){let i=!1,r;t.onclick=()=>{if(!t.disabled&&!(n&&!n())){if(!i){i=!0;const o=t.textContent;t.textContent="SURE?",s&&s(!0),clearTimeout(r),r=setTimeout(()=>{i=!1,t.textContent==="SURE?"&&(t.textContent=o),s&&s(!1),Jt()},3e3);return}clearTimeout(r),i=!1,s&&s(!1),e()}}}const li=49e4,kl=19e4,ci=document.getElementById("publish-note");function Yt(t,e){ci&&(ci.textContent=t||"",ci.style.display=t?"block":"none",ci.style.color=e?"var(--danger)":"var(--text-dim)")}let vr=null;function zd(){const t=JSON.stringify({polygons:x,polygonTypes:D,polygonLayers:H});let e=5381;for(let n=0;n<t.length;n++)e=(e<<5)+e+t.charCodeAt(n)|0;return t.length+":"+e}function Gd(){return vr===zd()?!0:(Yt("Playtest required: finish a full game (to GAME OVER) in Classic or Fantasies with this exact layout, then publish.",!0),!1)}function sn(t){let e=t.length;for(let n=t.length-1;n>=0;n--){const s=t.charCodeAt(n);s>127&&s<=2047?e++:s>=2048&&s<=65535&&(e+=2)}return e}function Ug(t,e,n){const s=t.toDataURL("image/webp",e);return s.startsWith("data:image/webp")?s:n?t.toDataURL("image/png"):t.toDataURL("image/jpeg",e)}function er(t,e,n){return new Promise(s=>{if(!t||typeof t!="string"||!t.startsWith("data:image"))return s(t);const i=new Image;i.onload=()=>{const r=Math.min(1,e/Math.max(i.naturalWidth,i.naturalHeight)),o=Math.max(1,Math.round(i.naturalWidth*r)),a=Math.max(1,Math.round(i.naturalHeight*r)),l=document.createElement("canvas");l.width=o,l.height=a;const c=l.getContext("2d");c.drawImage(i,0,0,o,a);let d=!1;if(t.startsWith("data:image/png"))try{const f=c.getImageData(0,0,o,a).data;for(let h=3;h<f.length;h+=4)if(f[h]<255){d=!0;break}}catch{d=!0}let u;try{u=Ug(l,n,d)}catch{u=t}s(u&&u.length<t.length?u:t)},i.onerror=()=>s(t),i.src=t})}async function Fg(t,e,n,s){let i=t,r=!1;const o=[{dim:1012,q:.8},{dim:820,q:.72},{dim:640,q:.6},{dim:506,q:.5},{dim:400,q:.42}];for(let f=0;f<o.length&&sn(i)>kl;f++)i=await er(t,o[f].dim,o[f].q),r=!0;let a=e,l=n,c=s(a,l);const d=[{dim:1024,q:.82},{dim:768,q:.72},{dim:512,q:.62},{dim:384,q:.5},{dim:256,q:.42}];for(let f=0;f<d.length&&sn(c)>li;f++){const h=d[f],p={};for(const I of Object.keys(e))p[I]=e[I]?await er(e[I],h.dim,h.q):null;a=p,c=s(a,l),r=!0}return sn(c)>li&&(l=(await jd(n,h=>sn(s(a,h)),li)).sounds,c=s(a,l),r=!0),{ok:sn(i)<=kl&&sn(c)<=li,thumb:i,machineData:c,changed:r}}function Hg(t){return new Promise((e,n)=>{const s=new FileReader;s.onload=()=>e(s.result),s.onerror=n,s.readAsDataURL(t)})}async function $g(t,e,n){try{if(typeof t!="string"||!t.startsWith("data:"))return t;mr();const s=await(await fetch(t)).arrayBuffer(),i=await we.decodeAudioData(s.slice(0)),r=Math.max(1,Math.ceil(i.duration*e)),o=window.OfflineAudioContext||window.webkitOfflineAudioContext,a=new o(1,r,e),l=a.createBufferSource();l.buffer=i,l.connect(a.destination),l.start();const d=(await a.startRendering()).getChannelData(0),u=new Int16Array(d.length);for(let m=0;m<d.length;m++){const b=Math.max(-1,Math.min(1,d[m]));u[m]=b<0?b*32768:b*32767}const{Mp3Encoder:f}=await ql(async()=>{const{Mp3Encoder:m}=await import("./lamejs-CegDX3Wq.js");return{Mp3Encoder:m}},[]),h=new f(1,e,n),p=[],I=1152;for(let m=0;m<u.length;m+=I){const b=h.encodeBuffer(u.subarray(m,m+I));b.length>0&&p.push(new Uint8Array(b))}const y=h.flush();y.length>0&&p.push(new Uint8Array(y));const v=await Hg(new Blob(p,{type:"audio/mpeg"}));return v&&v.length<t.length?v:t}catch(s){return console.warn("audio recompress failed",s),t}}async function jd(t,e,n){const s=[{rate:22050,kbps:64},{rate:22050,kbps:48},{rate:16e3,kbps:32},{rate:12e3,kbps:24},{rate:8e3,kbps:16}];let i=t;for(const r of s){const o={};for(const a of Object.keys(t))o[a]=t[a]?await $g(t[a],r.rate,r.kbps):t[a]||null;if(i=o,e(o)<=n)return{ok:!0,sounds:o}}return{ok:!1,sounds:i}}function ua(){const t=De.value.trim(),e=rs.value.trim();if(!t){De.style.borderColor="#dc0701",setTimeout(()=>De.style.borderColor="",2e3);return}const n=Wd(),s={overlay:Y.dataset.skinUrl||null,plunger:Se.dataset.skinUrl||null,flipperL:Re.dataset.skinUrl||null,flipperR:Be.dataset.skinUrl||null,ball:G.dataset.skinUrl||null},i=la();let r=Ie;(!r||ln&&O&&ln!==O.uid)&&(r=crypto.randomUUID(),Ie=r,ln=O?O.uid:null);const o={id:r,authorId:ln,name:t,desc:e,polygons:x,polygonTypes:D,polygonLayers:H,thumbnail:n,skins:s,skinsHidden:i,sounds:Ee,invisibleComponents:tt.checked,hideMainWall:He.checked};let a=JSON.parse(localStorage.getItem("pinball_arcade")||"[]"),l=a.findIndex(c=>c.id===r);l<0&&(l=a.findIndex(c=>c.name===t)),o.savedAt=l>=0&&a[l].savedAt||Date.now(),l>=0&&a[l].publishedId&&(o.publishedId=a[l].publishedId),o.publishNeeded=!0,l>=0?a[l]=o:a.push(o);try{localStorage.setItem("pinball_arcade",JSON.stringify(a))}catch{ne.textContent="Compressing…",Wg(o,a,l>=0?l:a.length-1);return}_n=!1,ne.textContent,ne.textContent="Saved!",setTimeout(()=>{ne.textContent==="Saved!"&&(ne.textContent="Save"),Jt()},2e3)}da(ne,ua,()=>kt("Log in or register to save machines."));async function Wg(t,e,n){const s=r=>{ne.textContent=r,setTimeout(()=>{ne.textContent===r&&(ne.textContent="Save"),Jt()},2500)},i=()=>{e[n]=t;try{return localStorage.setItem("pinball_arcade",JSON.stringify(e)),!0}catch{return!1}};try{t.thumbnail=await er(t.thumbnail,300,.8);const r=[{dim:1024,q:.82},{dim:768,q:.72},{dim:512,q:.62},{dim:384,q:.5},{dim:256,q:.42}],o=t.skins;let a=i();for(let l=0;l<r.length&&!a;l++){const c=r[l],d={};for(const u of Object.keys(o))d[u]=o[u]?await er(o[u],c.dim,c.q):null;t.skins=d,a=i()}if(!a&&t.sounds){const l=await jd(t.sounds,c=>(e[n]={...t,sounds:c},sn(JSON.stringify(e))),45e5);t.sounds=l.sounds,a=i()}a?(_n=!1,Yt("Compressed custom media to fit this device's storage (the editor keeps full quality).",!1),s("Saved!")):(Yt("Not enough device storage even after compressing — delete some Machine Shop machines or remove custom media, then save again.",!0),s("Too large"))}catch(r){console.error("compressed save failed",r),Yt("Saving failed — see the console for details.",!0),s("Error")}}function qd(t){return(t||"").normalize("NFD").replace(/[̀-ͯ]/g,"").toLowerCase().replace(/[^a-z0-9]/g,"")||"machine"}async function Vg(t){const{db:e,doc:n,runTransaction:s}=await ie(),i=n(e,"slugCounters",t);return await s(e,async r=>{const o=await r.get(i),a=o.exists()&&o.data().count||0;return r.set(i,{base:t,count:a+1},{merge:!0}),a===0?t:t+a})}async function Yg(t,e){const{db:n,collection:s,doc:i,getDoc:r,getDocs:o,query:a,where:l}=await ie(),c=qd(t);try{const f=await r(i(n,"machines",e)),h=f.exists()?f.data().slug:null;if(h&&(h===c||h.startsWith(c)&&/^[0-9]+$/.test(h.slice(c.length))))return h}catch{}try{return await Vg(c)}catch(f){console.warn("slug counter unavailable — falling back to a scan",f)}let d=!1,u=0;try{(await o(a(s(n,"machines"),l("slug",">=",c),l("slug","<=",c+"")))).forEach(h=>{const p=h.data().slug;if(!p)return;if(p===c){d=!0;return}const I=p.slice(c.length);/^[0-9]+$/.test(I)&&(u=Math.max(u,parseInt(I,10)))})}catch{}return!d&&u===0?c:c+(u+1)}async function Kd(){if(!kt("Log in or register to publish machines.")||!Gd())return;const t=De.value.trim(),e=rs.value.trim();if(!t){De.style.borderColor="#dc0701",setTimeout(()=>De.style.borderColor="",2e3);return}ua();let n=JSON.parse(localStorage.getItem("pinball_arcade")||"[]"),s=n.findIndex(i=>i.id===Ie);s<0&&(s=n.findIndex(i=>i.name===t)),he.textContent="Publishing...",he.disabled=!0;try{const{db:i,doc:r,getDoc:o,setDoc:a,serverTimestamp:l}=await ie(),c=Wd(),d={overlay:Y.dataset.skinUrl||null,plunger:Se.dataset.skinUrl||null,flipperL:Re.dataset.skinUrl||null,flipperR:Be.dataset.skinUrl||null,ball:G.dataset.skinUrl||null};let u=O.displayName||"No Name";try{const m=await o(r(i,"users",O.uid));m.exists()&&m.data().username&&(u=m.data().username)}catch{}const f=Ie;let h=l();try{const m=await o(r(i,"machines",f));m.exists()&&m.data().createdAt&&(h=m.data().createdAt)}catch{}let p="";try{p=await Yg(t,f)}catch{}const I=(m,b)=>JSON.stringify({polygons:x,polygonTypes:D,polygonLayers:H,skins:m,skinsHidden:la(),sounds:b,invisibleComponents:tt.checked,hideMainWall:He.checked}),y=(m,b)=>{const E={id:f,name:t,authorId:O.uid,thumbnail:m,machineData:b,createdAt:h,updatedAt:l()};return e&&(E.desc=e),u&&(E.authorUsername=u),p&&(E.slug=p),E},v=await Fg(c,d,Ee,I);if(!v.ok)Yt("Still too large after compressing everything — remove some custom sounds or skins and try again.",!0),he.textContent="Too large";else{await a(r(i,"machines",f),y(v.thumb,v.machineData));const m=p?`${location.origin}/pinballa/${p}`:"";Yt((v.changed?"Compressed custom media to fit the arcade's limit. ":"")+(m?"Share it at "+m:""),!1),s>=0&&(n[s].publishedId=f,n[s].publishNeeded=!1,localStorage.setItem("pinball_arcade",JSON.stringify(n))),he.textContent="Published!"}}catch(i){console.error(i),i&&(/exceeds the maximum allowed size/i.test(i.message||"")||i.code==="permission-denied")?(Yt("Too large to publish. Remove some custom sounds or skins and try again.",!0),he.textContent="Too large"):he.textContent="Error"}setTimeout(()=>{["Published!","Error","Too large"].includes(he.textContent)&&(he.textContent="Publish"),Jt()},2500)}function Xg(){if(!Ie)return!1;if(fr!=null)return!0;try{return JSON.parse(localStorage.getItem("pinball_arcade")||"[]").some(e=>e.id===Ie&&e.publishedId)}catch{return!1}}da(he,Kd,()=>kt("Log in or register to publish machines.")&&Gd(),t=>{t&&Xg()&&Yt("This replaces the public copy. Existing high scores stay on the leaderboard but will be marked OLD, since they were not set on this version of the machine.",!1)});let ei=!1,gt=[],yt={},vn={},vo="new";fd.onclick=()=>{if(!kt("Log in to open your Machine Shop — machines are saved to your account."))return;ei=!1,Ni.style.display="none";const t=document.getElementById("arcade-modal-title");t.textContent="PERSONAL PINBALL MACHINES",t.classList.remove("accent-red"),t.classList.add("accent-blue"),Ze.style.display="flex",su()};os.onclick=async()=>{ei=!0,Ni.style.display="flex";const t=document.getElementById("arcade-modal-title");t.textContent="PUBLIC PINBALL MACHINES",t.classList.remove("accent-blue"),t.classList.add("accent-red"),Ze.style.display="flex",Ft.innerHTML='<p style="text-align:center;grid-column:1/-1;">Loading...</p>';try{const{db:e,collection:n,getDocs:s,query:i,orderBy:r}=await ie(),[o,a,l]=await Promise.all([s(i(n(e,"machines"),r("createdAt","desc"))),s(n(e,"votes")).catch(()=>null),s(n(e,"scores")).catch(()=>null)]);gt=[],o.forEach(c=>gt.push(c.data())),yt={},a&&a.forEach(c=>{const d=c.data(),u=d.value===1?1:d.value===-1?-1:0;yt[d.machineId]=(yt[d.machineId]||0)+u}),vn={},l&&l.forEach(c=>{const d=c.data().machineId;d&&(vn[d]=(vn[d]||0)+1)}),ha(gt)}catch(e){Ft.innerHTML='<p style="text-align:center;color:#dc0701;grid-column:1/-1;">Error loading machines.</p>',console.error(e)}};function Cn(t,e,n){document.getElementById("detail-preview").src=t.thumbnail||Yc,document.getElementById("detail-title").textContent=t.name||"Untitled",document.getElementById("detail-desc").textContent=t.desc||"No description provided for this machine.";const s=document.getElementById("detail-author-img"),i=document.getElementById("detail-author-name");t.authorUsername?(s.src=t.authorPhotoURL||Ut,s.style.display="block",i.textContent=t.authorUsername,hr(i,t.authorId,null),!t.authorPhotoURL&&t.authorId&&Kg(t.authorId).then(y=>{y&&(s.src=y)})):(s.style.display="none",i.textContent="Local Machine",i.style.color="",i.style.textShadow="");const r=document.querySelector(".detail-author-row");!e&&t.authorId?(r.classList.add("clickable"),r.onclick=()=>Jg(t.authorId,t.authorUsername,t.authorPhotoURL)):(r.classList.remove("clickable"),r.onclick=null);const o=++Io;!e&&t.id?(Pe.wrap.style.display="flex",te={machineId:t.id,up:0,down:0,mine:0},Pe.score.textContent="…",Pe.up.classList.remove("voted","flipped"),Pe.down.classList.remove("voted"),Jd(t.id).then(y=>{te.machineId===t.id&&(te={machineId:t.id,...y},yt[t.id]=y.up-y.down,tr())}).catch(y=>{console.error("votes load failed",y),te.machineId===t.id&&tr()}),qg(t.id,o,t)):(Pe.wrap.style.display="none",te={machineId:null,up:0,down:0,mine:0},Zd.style.display="none");const a=document.getElementById("detail-published-status");e&&t.publishedId?a.style.display="block":a.style.display="none";const l=document.getElementById("btn-detail-play"),c=document.getElementById("btn-detail-delete"),d=document.getElementById("btn-detail-edit"),u=document.getElementById("mode-selection-overlay"),f=document.getElementById("btn-mode-classic"),h=document.getElementById("btn-mode-fantasies"),p=document.getElementById("btn-mode-back");window.lastViewedMachine={machine:t,isLocal:e,index:n},u.style.display="none",l.textContent=e?"EDIT":"PLAY",l.onclick=()=>{e?(Ei(t),Pn(!1),Ze.style.display="none",window.isExclusivePlay=!1):u.style.display="flex"},p.onclick=()=>{u.style.display="none"};const I=y=>{let v=t;e||(v={name:t.name,desc:t.desc,id:t.id,updatedAt:t.updatedAt,createdAt:t.createdAt,...JSON.parse(t.machineData)}),Ei(v),u.style.display="none",Pn(!1),Ze.style.display="none",window.isExclusivePlay=!0,y==="fantasies"?Di.click():Bi.click()};if(f.onclick=()=>I("classic"),h.onclick=()=>I("fantasies"),d){const y=!e&&O&&O.uid===t.authorId;d.style.display=y?"block":"none",d.onclick=()=>{const v={name:t.name,desc:t.desc,id:t.id,authorId:t.authorId,updatedAt:t.updatedAt,createdAt:t.createdAt,...JSON.parse(t.machineData)};Ei(v),Pn(!1),Ze.style.display="none",window.isExclusivePlay=!1,ad()}}e||O&&O.uid===t.authorId?(c.style.display="block",c.textContent="DELETE",da(c,async()=>{if(e){let y=JSON.parse(localStorage.getItem("pinball_arcade")||"[]");const v=!!(t.id||t.savedAt),m=_=>!!_&&(t.id&&_.id===t.id||t.savedAt&&_.savedAt===t.savedAt);let b=v?m(y[n])?n:y.findIndex(m):n<y.length?n:-1;const E=b>=0?y[b]:null;if(b>=0&&y.splice(b,1),localStorage.setItem("pinball_arcade",JSON.stringify(y)),su(),E&&E.publishedId&&O)try{const{db:_,doc:k,deleteDoc:U}=await ie();await U(k(_,"machines",E.publishedId))}catch{}}else try{const{db:y,doc:v,deleteDoc:m}=await ie();await m(v(y,"machines",t.id)),os.click()}catch(y){console.error("Delete error",y)}qo(),e&&De.value.trim()===t.name&&ur.click()})):c.style.display="none",Pn(!0),X0(t,e)}document.getElementById("btn-close-detail").onclick=qo;function fa(t,{showStats:e=!1,onClick:n}={}){const s=document.createElement("div");s.className="arcade-item";const i=document.createElement("img");if(i.src=t.thumbnail||Yc,i.className="arcade-item-thumbnail",s.appendChild(i),e){const r=yt[t.id]||0,o=vn[t.id]||0,a=document.createElement("div");a.className="arcade-card-caption";const l=document.createElement("span");l.className="cap-likes"+(r<0?" negative":""),l.textContent=(r<0?"▼ ":"▲ ")+(r>0?"+"+r:r);const c=document.createElement("span");c.className="cap-plays",c.textContent="▶ "+o,a.appendChild(l),a.appendChild(c),s.appendChild(a)}return n&&(s.onclick=n),s}function zg(t){const e=[...t],n=s=>s.createdAt&&s.createdAt.seconds?s.createdAt.seconds:0;return vo==="liked"?e.sort((s,i)=>(yt[i.id]||0)-(yt[s.id]||0)||n(i)-n(s)):vo==="popular"?e.sort((s,i)=>(vn[i.id]||0)-(vn[s.id]||0)||n(i)-n(s)):e.sort((s,i)=>n(i)-n(s)),e}function ha(t){if(Ft.innerHTML="",!t.length){Ft.innerHTML='<p style="text-align:center;grid-column:1/-1;">No public machines yet.</p>';return}zg(t).forEach(e=>{Ft.appendChild(fa(e,{showStats:!0,onClick:()=>Cn(e,!1)}))})}Ni.querySelectorAll(".arcade-filter-btn").forEach(t=>{t.onclick=()=>{vo=t.dataset.sort,Ni.querySelectorAll(".arcade-filter-btn").forEach(e=>e.classList.toggle("active",e===t)),ha(gt)}});const Pe={wrap:document.getElementById("detail-votes"),up:document.getElementById("btn-upvote"),down:document.getElementById("btn-downvote"),score:document.getElementById("vote-score")};let te={machineId:null,up:0,down:0,mine:0};async function Jd(t){const{db:e,collection:n,getDocs:s,query:i,where:r}=await ie(),o=await s(i(n(e,"votes"),r("machineId","==",t)));let a=0,l=0,c=0;return o.forEach(d=>{const u=d.data();u.value===1?a++:u.value===-1&&l++,O&&u.userId===O.uid&&(c=u.value)}),{up:a,down:l,mine:c}}function tr(){const t=te.up-te.down;Pe.score.textContent=t>0?"+"+t:String(t),Pe.up.classList.toggle("voted",te.mine===1),Pe.down.classList.toggle("voted",te.mine===-1),Pe.up.classList.toggle("flipped",t<0)}async function Qd(t){if(!te.machineId||!kt("Log in or register to vote on machines."))return;const e=te.machineId,n=te.mine,s=n===t?0:t;n===1?te.up--:n===-1&&te.down--,s===1?te.up++:s===-1&&te.down++,te.mine=s,tr(),yt[e]=te.up-te.down;const{db:i,doc:r,setDoc:o,deleteDoc:a,serverTimestamp:l}=await ie(),c=r(i,"votes",`${e}_${O.uid}`);try{s===0?await a(c):await o(c,{machineId:e,userId:O.uid,value:s,updatedAt:l()})}catch(d){console.error("vote failed",d);const u=await Jd(e).catch(()=>null);u&&te.machineId===e&&(te={machineId:e,...u},yt[e]=u.up-u.down,tr())}ei&&gt.length&&ha(gt)}Pe.up&&(Pe.up.onclick=()=>Qd(1));Pe.down&&(Pe.down.onclick=()=>Qd(-1));const Zd=document.getElementById("detail-leaderboard"),Ms=document.getElementById("detail-lb-list"),xl=document.getElementById("detail-lb-count");let Io=0;async function Gg(t,e){const{db:n,collection:s,getDocs:i,query:r,where:o}=await ie(),a=await i(r(s(n,"scores"),o("machineId","==",t))),l=[];return a.forEach(c=>l.push(c.data())),l.sort((c,d)=>(d.score||0)-(c.score||0)),{rows:l.slice(0,e),total:l.length}}function jg(t,e=()=>!1){if(Ms.innerHTML="",!t.length){Ms.innerHTML='<div class="detail-lb-empty">No scores yet — be the first to play!</div>';return}t.forEach((n,s)=>{const i=document.createElement("div");i.className="detail-lb-row"+(O&&n.userId===O.uid?" mine":"");const r=document.createElement("span");r.className="detail-lb-rank",r.textContent=s+1+".";const o=document.createElement("img");o.className="detail-lb-pic",o.src=n.photoURL||Ut,o.alt="";const a=document.createElement("span");a.className="detail-lb-name",a.textContent=n.username||"No Name",hr(a,n.userId,n.nameColor);const l=document.createElement("span");l.className="detail-lb-score",l.textContent=(n.score??0).toLocaleString(),i.append(r,o,a),e(n)&&i.append(R0()),i.append(l),Ms.appendChild(i)})}async function qg(t,e,n){Zd.style.display="block",xl.textContent="",Ms.innerHTML='<div class="detail-lb-empty">Loading…</div>';try{const{rows:s,total:i}=await Gg(t,10);if(e!==Io)return;vn[t]=i,xl.textContent=i?`${i.toLocaleString()} play${i===1?"":"s"}`:"",jg(s,Zc(n&&n.updatedAt,n&&n.createdAt))}catch(s){console.error("leaderboard load failed",s),e===Io&&(Ms.innerHTML='<div class="detail-lb-empty">Could not load scores.</div>')}}const Pr={};async function Kg(t){if(!t)return null;if(Pr[t]!==void 0)return Pr[t];try{const{db:e,doc:n,getDoc:s}=await ie(),i=await s(n(e,"users",t)),r=i.exists()&&i.data().photoURL?i.data().photoURL:null;return Pr[t]=r,r}catch{return null}}async function eu(t){const{db:e,collection:n,getDocs:s,query:i,where:r}=await ie();return(await s(i(n(e,"votes"),r("userId","==",t)))).docs.map(a=>a.data()).filter(a=>a.value===1).map(a=>a.machineId)}async function tu(t){const{db:e,doc:n,getDoc:s}=await ie(),i=[];for(const r of t)try{const o=await s(n(e,"machines",r));o.exists()&&i.push(o.data())}catch{}return i}function vs(t,e,n){if(t.innerHTML="",!e.length){const s=document.createElement("div");s.className="pp-empty",s.textContent=n,t.appendChild(s);return}e.forEach(s=>{t.appendChild(fa(s,{onClick:()=>Cn(s,!1)}))})}const nr=document.getElementById("public-profile-modal");let Ii=null;function nu(){if(nr.style.display="none",Ii){const t=Ii;Ii=null,Cn(t.machine,t.isLocal,t.index)}}document.getElementById("btn-close-public-profile").onclick=nu;nr.onclick=t=>{t.target===nr&&nu()};async function Jg(t,e,n){if(!t)return;const s=document.getElementById("pp-name"),i=document.getElementById("pp-avatar"),r=document.getElementById("pp-published"),o=document.getElementById("pp-upvoted");s.textContent=e||"Player",hr(s,t,null),i.src=n||Ut,r.innerHTML='<div class="pp-empty">Loading…</div>',o.innerHTML='<div class="pp-empty">Loading…</div>',Ii=window.lastViewedMachine||null,Pn(!1),nr.style.display="flex";const{db:a,collection:l,doc:c,getDoc:d,getDocs:u,query:f,where:h}=await ie();try{const p=await d(c(a,"users",t));p.exists()&&(s.textContent=p.data().username||e||"Player",Ns(s,p.data().nameColor),Es[t]=Js(p.data().nameColor),i.src=p.data().photoURL||n||Ut)}catch{}try{const I=(await u(f(l(a,"machines"),h("authorId","==",t)))).docs.map(y=>y.data()).sort((y,v)=>(v.createdAt&&v.createdAt.seconds||0)-(y.createdAt&&y.createdAt.seconds||0));vs(r,I,"No published machines yet.")}catch(p){console.error("published load failed",p),vs(r,[],"Could not load machines.")}try{const p=await eu(t),I=await tu(p);vs(o,I,"No upvoted machines yet.")}catch(p){console.error("upvoted load failed",p),vs(o,[],"Could not load machines.")}}const Cl=document.getElementById("btn-dd-upvoted"),Qg=document.getElementById("my-upvoted-body"),di=document.getElementById("my-upvoted-grid");async function Zg(){if(!O){di.innerHTML='<div class="pp-empty">Log in to see your upvoted machines.</div>';return}di.innerHTML='<div class="pp-empty">Loading…</div>';try{const t=await eu(O.uid),e=await tu(t);vs(di,e,"You haven't upvoted any machines yet.")}catch(t){console.error("my upvoted load failed",t),di.innerHTML='<div class="pp-empty">Could not load your upvoted machines.</div>'}}Cl.onclick=()=>{const t=Qg.classList.toggle("open");Cl.setAttribute("aria-expanded",String(t)),t&&Zg()};const Tl=document.getElementById("btn-dd-userinfo"),ey=document.getElementById("user-info-body");Tl.onclick=()=>{const t=ey.classList.toggle("open");Tl.setAttribute("aria-expanded",String(t))};j0.onclick=()=>{Ze.style.display="none",qo(),document.getElementById("mode-selection-overlay").style.display="none"};ur.onclick=()=>{x=[],D=[],H=[],dt.clear(),Ae=Ae.filter(t=>!t.isBoss),un++,De.value="",rs.value="",Ie=null,ln=null,Y.src="",Y.dataset.skinUrl="",Y.style.display="none",gn.style.display="",yn.style.display="none",Se.src=Q+"board/plunger.png",Se.dataset.skinUrl="",Vi.style.display="",Yi.style.display="none",Re.src=Q+"board/flipper_left.png",Re.dataset.skinUrl="",Xi.style.display="",zi.style.display="none",Be.src=Q+"board/flipper_right.png",Be.dataset.skinUrl="",Gi.style.display="",ji.style.display="none",ca(),G.dataset.skinUrl="",qi.style.display="",Ki.style.display="none",Im(),Xd(null),Vd(null),$d(),ge=[],ve=-1,ye(),ae(),W=!0,Ze.style.display="none",_n=!1,Jt()};function Ei(t){if(x=t.polygons||[],D=t.polygonTypes||[],H=t.polygonLayers||[],De.value=t.name||"",rs.value=t.desc||"",Ie=t.id||null,ln=t.authorId||null,fr=pn(t.updatedAt),hd=pn(t.createdAt),t.sounds?Ee={...t.sounds}:Ee={plungerCharge:null,plungerRelease:null,wallBounce:null,bumperTrigger:null,grabberTrigger:null,pointTrigger:null,boss1st:null,boss2nd:null,boss3rd:null,boss4th:null,jackpot:null,gameOver:null,backgroundMusic:null},yg(),wd(),t.skins){t.skins.overlay?(Y.src=t.skins.overlay,Y.dataset.skinUrl=t.skins.overlay,Y.style.display="block",gn.style.display="none",yn.style.display="block"):(Y.src="",Y.dataset.skinUrl="",Y.style.display="none",gn.style.display="",yn.style.display="none");const e=(n,s,i,r=!1,o,a)=>{s?(r?(n.style.backgroundImage=`url("${s}")`,n.style.backgroundColor="transparent"):(n.onload=()=>{!n.style.aspectRatio&&n.naturalWidth&&(n.style.aspectRatio=`${n.naturalWidth} / ${n.naturalHeight}`),n.onload=null},n.src=s),n.dataset.skinUrl=s,o&&a&&(o.style.display="none",a.style.display="block")):(r?(n.style.backgroundImage=`url("${i}")`,n.style.backgroundColor="transparent"):n.src=i,n.dataset.skinUrl="",o&&a&&(o.style.display="",a.style.display="none"))};e(Se,t.skins.plunger,Q+"board/plunger.png",!1,Vi,Yi),e(Re,t.skins.flipperL,Q+"board/flipper_left.png",!1,Xi,zi),e(Be,t.skins.flipperR,Q+"board/flipper_right.png",!1,Gi,ji),e(G,t.skins.ball,Q+"board/ball.png",!0,qi,Ki)}else Y.src="",Y.dataset.skinUrl="",Y.style.display="none",gn.style.display="",yn.style.display="none",Se.src=Q+"board/plunger.png",Se.dataset.skinUrl="",Vi.style.display="",Yi.style.display="none",Re.src=Q+"board/flipper_left.png",Re.dataset.skinUrl="",Xi.style.display="",zi.style.display="none",Be.src=Q+"board/flipper_right.png",Be.dataset.skinUrl="",Gi.style.display="",ji.style.display="none",ca(),G.dataset.skinUrl="",qi.style.display="",Ki.style.display="none";Xd(t.skins?t.skinsHidden:null),Vd(t),$d(),ge=[],ve=-1,ye(),ae(),W=!0,Ze.style.display="none",_n=!1,Jt(),X==="playing"&&je()}function ty(t){return t.map((e,n)=>({machine:e,index:n})).sort((e,n)=>{const s=pn(e.machine.savedAt),i=pn(n.machine.savedAt);return s!=null&&i!=null?i-s:s!=null?-1:i!=null?1:n.index-e.index})}function su(){Ft.innerHTML="";let t=JSON.parse(localStorage.getItem("pinball_arcade")||"[]");if(t.length===0){Ft.innerHTML='<p style="text-align:center;grid-column:1/-1;">No machines saved yet.</p>';return}ty(t).forEach(({machine:e,index:n})=>{Ft.appendChild(fa(e,{onClick:()=>Cn(e,!0,n)}))})}function ye(){ke(),ve<ge.length-1&&(ge=ge.slice(0,ve+1));const t=x.map(e=>e.map(n=>({x:n.x,y:n.y})));ge.push({polys:t,types:[...D],layers:[...H]}),ge.length>ug&&ge.shift(),ve=ge.length-1}function ny(){return Oe||Xt||A.length===0?!1:(A.pop(),Vs=!1,W=!0,$e(),!0)}function iu(){ny()||ve>0&&(ve--,x=ge[ve].polys.map(t=>t.map(e=>({x:e.x,y:e.y}))),D=[...ge[ve].types],H=[...ge[ve].layers],M.clear(),ae())}function ru(){ve<ge.length-1&&(ve++,x=ge[ve].polys.map(t=>t.map(e=>({x:e.x,y:e.y}))),D=[...ge[ve].types],H=[...ge[ve].layers],M.clear(),ae())}function Al(t,e){return e+"|"+t.map(n=>n.x.toFixed(1)+","+n.y.toFixed(1)).sort().join(";")}function sy(){if(M.size===0)return;const t=S*$s,e=[];for(let r of M){const o=x[r].map(a=>({x:t+(t-a.x),y:a.y}));o.reverse(),e.push({poly:o,type:D[r],layer:H[r]})}const n=new Set(x.map((r,o)=>Al(r,D[o]))),s=[];for(const r of e){const o=Al(r.poly,r.type);n.has(o)||(n.add(o),s.push(r))}if(s.length===0){Ad("MOVE IT FIRST");return}if(!bn(s.length))return;const i=new Set;for(const r of s)x.push(r.poly),D.push(r.type),H.push(r.layer),i.add(x.length-1);M=i,ye(),ae()}const Me=2,sr=4;function Eo(t){let e=1/0,n=1/0,s=-1/0,i=-1/0;for(const r of t)e=Math.min(e,r.x),n=Math.min(n,r.y),s=Math.max(s,r.x),i=Math.max(i,r.y);return{minX:e,minY:n,maxX:s,maxY:i}}function ou(t,e,n,s){t.beginPath(),t.moveTo((e[0].x-n)/Me,(e[0].y-s)/Me);for(let i=1;i<e.length;i++)t.lineTo((e[i].x-n)/Me,(e[i].y-s)/Me);t.closePath()}function Ll(t,e,n,s,i){const r=document.createElement("canvas");r.width=s,r.height=i;const o=r.getContext("2d",{willReadFrequently:!0});return o.lineWidth=sr/Me,ou(o,t,e,n),o.fill(),o.stroke(),r}function iy(t,e){const n=Eo(t),s=Eo(e),i=sr,r=Math.max(n.minX,s.minX)-i,o=Math.min(n.maxX,s.maxX)+i,a=Math.max(n.minY,s.minY)-i,l=Math.min(n.maxY,s.maxY)+i;if(r>=o||a>=l)return!1;const c=Math.max(2,Math.ceil((o-r)/Me)),d=Math.max(2,Math.ceil((l-a)/Me)),u=Ll(t,r,a,c,d),f=Ll(e,r,a,c,d),h=u.getContext("2d");h.globalCompositeOperation="source-in",h.drawImage(f,0,0);const p=h.getImageData(0,0,c,d).data;for(let I=3;I<p.length;I+=4)if(p[I])return!0;return!1}function ry(t,e,n){const s=[[1,0],[1,1],[0,1],[-1,1],[-1,0],[-1,-1],[0,-1],[1,-1]],i=(o,a)=>o>=0&&a>=0&&o<e&&a<n&&t[a*e+o]!==0,r=[];for(let o=0;o<n;o++)for(let a=0;a<e;a++){if(!i(a,o))continue;const l=[];let c=a,d=o,u=0;do{l.push({x:c,y:d});let h=!1;for(let p=0;p<8;p++){const I=(u+6+p)%8,y=c+s[I][0],v=d+s[I][1];if(i(y,v)){c=y,d=v,u=I,h=!0;break}}if(!h)break}while((c!==a||d!==o)&&l.length<e*n);r.push(l);const f=[o*e+a];for(t[o*e+a]=0;f.length;){const h=f.pop(),p=h%e,I=h/e|0;for(const[y,v]of s){const m=p+y,b=I+v;m>=0&&b>=0&&m<e&&b<n&&t[b*e+m]&&(t[b*e+m]=0,f.push(b*e+m))}}}return r}function oy(t,e){if(t.length<3)return t.slice();const n=new Uint8Array(t.length);n[0]=n[t.length-1]=1;const s=[[0,t.length-1]];for(;s.length;){const[i,r]=s.pop(),o=t[i].x,a=t[i].y,l=t[r].x,c=t[r].y,d=l-o,u=c-a,f=Math.hypot(d,u);let h=-1,p=-1;for(let I=i+1;I<r;I++){const y=f===0?Math.hypot(t[I].x-o,t[I].y-a):Math.abs(u*t[I].x-d*t[I].y+l*a-c*o)/f;y>h&&(h=y,p=I)}h>e&&(n[p]=1,s.push([i,p],[p,r]))}return t.filter((i,r)=>n[r])}function ay(){if(T!=="select"||M.size<2)return;const t=new Map;for(const l of M){const c=D[l];t.has(c)||t.set(c,[]),t.get(c).push(l)}const e=new Set,n=[];for(const[l,c]of t){if(c.length<2)continue;const d=c.map((h,p)=>p),u=h=>{for(;d[h]!==h;)d[h]=d[d[h]],h=d[h];return h};for(let h=0;h<c.length;h++)for(let p=h+1;p<c.length;p++)u(h)!==u(p)&&iy(x[c[h]],x[c[p]])&&(d[u(h)]=u(p));const f=new Map;for(let h=0;h<c.length;h++){const p=u(h);f.has(p)||f.set(p,[]),f.get(p).push(c[h])}for(const h of f.values()){if(h.length<2)continue;let p=1/0,I=1/0,y=-1/0,v=-1/0;for(const P of h){const z=Eo(x[P]);p=Math.min(p,z.minX),I=Math.min(I,z.minY),y=Math.max(y,z.maxX),v=Math.max(v,z.maxY)}const m=sr*2;p-=m,I-=m,y+=m,v+=m;const b=Math.max(2,Math.ceil((y-p)/Me)),E=Math.max(2,Math.ceil((v-I)/Me)),_=document.createElement("canvas");_.width=b,_.height=E;const k=_.getContext("2d",{willReadFrequently:!0});k.lineWidth=sr/Me;for(const P of h)ou(k,x[P],p,I),k.fill(),k.stroke();const U=k.getImageData(0,0,b,E).data,R=new Uint8Array(b*E);for(let P=0;P<b*E;P++)R[P]=U[P*4+3]?1:0;const B=H[h[0]];for(const P of ry(R,b,E)){if(P.length<3)continue;const z=oy(P,3/Me).map(K=>({x:p+K.x*Me,y:I+K.y*Me}));z.length>=3&&n.push({points:z,type:l,layer:B})}for(const P of h)e.add(P)}}if(n.length===0)return;const s=[],i=[],r=[],o=new Set([...M].filter(l=>!e.has(l))),a=new Set;for(let l=0;l<x.length;l++)e.has(l)||(s.push(x[l]),i.push(D[l]),r.push(H[l]),o.has(l)&&a.add(s.length-1));for(const l of n)s.push(l.points),i.push(l.type),r.push(l.layer),a.add(s.length-1);x=s,D=i,H=r,M=a,ye(),ae(),W=!0}function Qt(t){T=T===t?"none":t,A=[],T!=="select"&&M.clear(),Pi.classList.toggle("active",T==="select"),Ri.classList.toggle("active",T==="pen"),Ho.classList.toggle("active",T==="bumper"),$o.classList.toggle("active",T==="point"),Wo.classList.toggle("active",T==="grabber"),Vo.classList.toggle("active",T==="boss"),q.style.cursor="default"}function Ml(t,e,n){const s=Td();let i=null;for(const r of[-e,0,e]){const o=t+r,a=n+Math.round((o-n)/s)*s,l=a-o;Math.abs(l)<Cd&&(!i||Math.abs(l)<Math.abs(i.delta))&&(i={delta:l,line:a})}return i?{center:t+i.delta,line:i.line}:null}function au(t,e){const n=ee.getTransform();return{x:t*n.a+e*n.c+n.e,y:t*n.b+e*n.d+n.f}}function Pl(t,e){const n=au(t,e);for(let s=0;s<4;s++)for(let i=x.length-1;i>=0;i--){if(H[i]!==s)continue;const r=x[i];if(r.length){ee.beginPath(),ee.moveTo(r[0].x,r[0].y);for(let o=1;o<r.length;o++)ee.lineTo(r[o].x,r[o].y);if(ee.closePath(),ee.isPointInPath(n.x,n.y))return i}}return-1}const Rl=30,ly=8;function lu(){const t=ns(),e=ia(),n=Rl*e,s=12*e;let i=t.maxX+s,r=t.minX-s-n;return i+n>S?(i=Math.max(0,t.minX-s-n),r=Math.min(S-n,t.maxX+s)):r<0&&(r=0),{b:t,size:n,step:(Rl+ly)*e,layersX:i,deleteX:r}}function cu(){if(M.size===0)return[];const{b:t,size:e,step:n,layersX:s}=lu(),i=[];for(let r=0;r<4;r++)i.push({layer:r,x:s,y:t.minY+r*n,size:e});return i}function cy(t,e){for(const n of cu())if(t>=n.x&&t<=n.x+n.size&&e>=n.y&&e<=n.y+n.size)return n.layer;return-1}function du(){if(M.size===0)return null;const{b:t,size:e,deleteX:n}=lu();return{x:n,y:t.minY,size:e}}function dy(t,e){const n=du();return!!n&&t>=n.x&&t<=n.x+n.size&&e>=n.y&&e<=n.y+n.size}function _o(){if(M.size===0)return;const t=Array.from(M).sort((e,n)=>n-e);for(const e of t)x.splice(e,1),D.splice(e,1),H.splice(e,1);M.clear(),ye(),ae()}function uy(t){let e=!1;for(const n of M)H[n]!==t&&(H[n]=t,e=!0);e&&(ye(),ae()),W=!0}function ns(t=x){let e=1/0,n=1/0,s=-1/0,i=-1/0;for(let r of M)for(let o of t[r])e=Math.min(e,o.x),n=Math.min(n,o.y),s=Math.max(s,o.x),i=Math.max(i,o.y);return{minX:e,minY:n,maxX:s,maxY:i}}function Rr(){ta=x.map(t=>t.map(e=>({x:e.x,y:e.y})))}function So(t){for(let e of M)for(let n=0;n<x[e].length;n++)t(x[e][n],ta[e][n])}window.addEventListener("pointermove",t=>{if(it){(Gt===null||t.pointerId===Gt)&&(ks=t.clientX,xs=t.clientY,pa(t.clientX,t.clientY));return}zt&&(Ne+=t.clientX-Et,Ue+=t.clientY-_t,Et=t.clientX,_t=t.clientY,Zt())});window.addEventListener("pointerdown",t=>{jt||T==="select"&&t.target!==q&&t.target!==Qn&&!t.target.closest("#editor-panel")&&!t.target.closest("#arcade-panel")&&(M.clear(),W=!0)});q.addEventListener("pointermove",t=>{if(nt&&(clearTimeout(nt),nt=null),W=!0,jt||zt)return;const e=q.getBoundingClientRect(),n=S/e.width,s=C/e.height;if(Ce=(t.clientX-e.left)*n,Te=(t.clientY-e.top)*s,!it&&!be&&t.pointerType!=="touch"&&!mt&&!Oe&&A.length===0){const i=uu(Ce,Te,t.pointerType);i!==ro&&(ro=i,q.style.cursor=i?"grab":"default")}if(ue&&t.pointerId===ue.pointerId&&Math.hypot(t.clientX-ue.clientX,t.clientY-ue.clientY)>fg&&(Oe=!0,pt=t.pointerId,A=[{x:ue.x,y:ue.y}],ue=null,$e()),Oe&&A.length>0){if(pt!==null&&t.pointerId!==pt)return;const i=A[A.length-1];Math.hypot(Ce-i.x,Te-i.y)>10&&(A.push({x:Ce,y:Te}),$e());return}if(T==="select"&&ts){Dt={x:Ce,y:Te};return}if(T==="select"&&mt&&M.size>0){if($t=!0,Ht==="move"){const i=Ce-Et,r=Te-_t;gs+=i,yi+=r;const o=ns(),a=(o.minX+o.maxX)/2,l=(o.minY+o.maxY)/2;let c=gs,d=yi;if(Hs=!1,Wt=null,Vt=null,Rn){const h=Ml(gs,(o.maxX-o.minX)/2,S*$s);h&&(c=h.center,Wt=h.line);const p=Ml(yi,(o.maxY-o.minY)/2,C/2);p&&(d=p.center,Vt=p.line)}else{const h=S*$s,p=Math.abs(gs-h)<Cd;p&&(c=h),Hs=p}const u=c-a,f=d-l;for(let h of M)for(let p of x[h])p.x+=u,p.y+=f;Et=Ce,_t=Te}else if(Ht==="rotate"){const r=Math.atan2(Te-pe.y,Ce-pe.x)-xd;So((o,a)=>{const l=a.x-pe.x,c=a.y-pe.y;o.x=pe.x+l*Math.cos(r)-c*Math.sin(r),o.y=pe.y+l*Math.sin(r)+c*Math.cos(r)})}else if(Ht==="resize"){const i=ns(ta),r=i.maxX-pe.x,o=i.maxY-pe.y;if(r>0&&o>0){let a=(Ce-pe.x)/r,l=(Te-pe.y)/o;if(t.shiftKey){const c=Math.max(Math.abs(a),Math.abs(l));a=a<0?-c:c,l=l<0?-c:c}So((c,d)=>{c.x=pe.x+(d.x-pe.x)*a,c.y=pe.y+(d.y-pe.y)*l})}}ae()}});q.addEventListener("contextmenu",t=>t.preventDefault());let nt=null;function uu(t,e,n){const s=g.radius*(n==="touch"?2.4:1.5);return Math.hypot(t-g.x,e-g.y)<=s}function pa(t,e){const n=q.getBoundingClientRect(),s=(t-n.left)*(S/n.width),i=(e-n.top)*(C/n.height);g.x=Math.max(g.radius,Math.min(S-g.radius,s)),g.y=Math.max(g.radius,Math.min(C-g.radius,i)),g.vx=0,g.vy=0,it&&hy(),W=!0}const fy=120;function hy(){const t=performance.now();for(Ke.push({x:g.x,y:g.y,t});Ke.length>1&&t-Ke[0].t>fy;)Ke.shift()}const Bl=.75;function py(){if(Ke.length<2)return;const t=Ke[0],e=Ke[Ke.length-1],n=e.t-t.t;if(n<=0)return;let s=(e.x-t.x)*(1e3/60)/n*Bl,i=(e.y-t.y)*(1e3/60)/n*Bl;const r=Math.hypot(s,i);if(r<2)return;const o=95;r>o&&(s*=o/r,i*=o/r),g.vx=s,g.vy=i}function fu(t,e){if(gu(),!Ve)return!0;const n=g.radius*.5,s=Math.max(0,Math.floor(t-n)),i=Math.max(0,Math.floor(e-n)),r=Math.min(S,Math.ceil(t+n)),o=Math.min(C,Math.ceil(e+n)),a=n*n;for(let l=i;l<o;l++)for(let c=s;c<r;c++){if(Ve[l*S+c]===0)continue;const d=c-t,u=l-e;if(d*d+u*u<=a)return!1}return!0}function hu(){if(it){if(j>1){const n=It.getBoundingClientRect(),s=ks-Math.max(n.left,0),i=Math.min(n.right,window.innerWidth)-ks,r=xs-Math.max(n.top,0),o=Math.min(n.bottom,window.innerHeight)-xs;let a=0,l=0;s<48?a=(48-s)/48:i<48&&(a=-(48-i)/48),r<48?l=(48-r)/48:o<48&&(l=-(48-o)/48),(a||l)&&(Ne+=a*14,Ue+=l*14,Zt())}pa(ks,xs),Fs=requestAnimationFrame(hu)}}function my(t){it=!0,jn=!1,Ke.length=0,Gt=t.pointerId,ks=t.clientX,xs=t.clientY,ct!==-1&&(rn=ct),Bn=0,ct=-1,q.style.cursor="grabbing",G.classList.add("held"),pa(t.clientX,t.clientY),cancelAnimationFrame(Fs),Fs=requestAnimationFrame(hu)}function pu(){it=!1,Gt=null,performance.now(),cancelAnimationFrame(Fs),Fs=null,q.style.cursor=ro?"grab":"default",fu(g.x,g.y)?(G.classList.remove("held"),py()):jn=!0,Ke.length=0}q.addEventListener("pointerdown",t=>{if(W=!0,jt||be)return;if(t.button===1){t.preventDefault(),zt=!0,Et=t.clientX,_t=t.clientY,q.style.cursor="grabbing";return}if(t.button===2){if(no()){Oe=!0,pt=t.pointerId;const o=q.getBoundingClientRect(),a=S/o.width,l=C/o.height,c=(t.clientX-o.left)*a,d=(t.clientY-o.top)*l;A=[{x:c,y:d}],$e()}return}const e=q.getBoundingClientRect(),n=S/e.width,s=C/e.height,i=(t.clientX-e.left)*n,r=(t.clientY-e.top)*s;if(Ce=i,Te=r,gi=t.pointerType==="touch",uu(i,r,t.pointerType)&&A.length===0&&!Oe&&!ue){my(t);return}if(T==="none"){if(t.pointerType==="touch"||Pl(i,r)===-1)return;Qt("select")}if(t.pointerType==="touch"&&no()){!ue&&!Oe&&(ue={pointerId:t.pointerId,x:i,y:r,clientX:t.clientX,clientY:t.clientY});return}if(T==="pen"||T==="bumper"||T==="point"||T==="grabber"||T==="boss"){if(N.KeyC){A.length===0&&(Xt=!0,A=[{x:i,y:r}],$e());return}if(A.length>0){const o=A[0];if(Math.hypot(i-o.x,r-o.y)<20){if(!bn(1)){A=[];return}x.push([...A]),D.push(T==="bumper"?"bumper":T==="point"?"point":T==="grabber"?"grabber":T==="boss"?"boss":"wall"),H.push(0),A=[],ye(),ae();return}}A.push(Ed(i,r))}else if(T==="select"){if(M.size>0){if(dy(i,r)){_o();return}const a=cy(i,r);if(a!==-1){uy(a);return}const{minX:l,minY:c,maxX:d,maxY:u}=ns(),f=(l+d)/2,h=(c+u)/2,p=ia(),I=At.grab*p;if(Math.hypot(i-f,r-(c-At.stem*p))<I){Ht="rotate",pe={x:f,y:h},xd=Math.atan2(r-h,i-f),Rr(),mt=!0,$t=!1;return}if(Math.hypot(i-d,r-u)<I){Ht="resize",pe={x:l,y:c},Rr(),mt=!0,$t=!1;return}}const o=Pl(i,r);if(o!==-1){if(t.shiftKey?M.has(o)?M.delete(o):M.add(o):M.has(o)||(M.clear(),M.add(o)),t.altKey&&bn(M.size)){const l=new Set;M.forEach(c=>{x.push(x[c].map(d=>({x:d.x,y:d.y}))),D.push(D[c]),H.push(H[c]),l.add(x.length-1)}),M.clear(),l.forEach(c=>M.add(c)),ye(),ae()}t.pointerType==="touch"&&(nt=setTimeout(()=>{if(!bn(M.size))return;const l=new Set;M.forEach(c=>{x.push(x[c].map(d=>({x:d.x,y:d.y}))),D.push(D[c]),H.push(H[c]),l.add(x.length-1)}),M.clear(),l.forEach(c=>M.add(c)),ye(),ae(),navigator.vibrate&&navigator.vibrate(50)},600)),Ht="move",Rr(),mt=!0,$t=!1,Et=i,_t=r;const a=ns();gs=(a.minX+a.maxX)/2,yi=(a.minY+a.maxY)/2}else M.clear(),ts=!0,We={x:i,y:r},Dt={x:i,y:r}}});window.addEventListener("pointerdown",t=>{if(!(t.target!==q&&t.target!==Qn&&t.target!==document.getElementById("game-inner"))&&!be&&t.button===1){t.preventDefault(),zt=!0,Et=t.clientX,_t=t.clientY,(t.target===q||t.target===Qn)&&(t.target.style.cursor="grabbing");return}});window.addEventListener("pointermove",t=>{if(zt){const e=t.clientX-Et,n=t.clientY-_t;Ne+=e/j,Ue+=n/j,Et=t.clientX,_t=t.clientY,Zt(),W=!0}});function mu(){if(Oe=!1,pt=null,A.length>2&&bn(1)){x.push([...A]);let t="wall";T==="bumper"&&(t="bumper"),T==="point"&&(t="point"),T==="grabber"&&(t="grabber"),T==="boss"&&(t="boss"),D.push(t),H.push(0),ye()}A=[],ae(),$e()}window.addEventListener("pointerup",t=>{if(it&&(Gt===null||t.pointerId===Gt)){pu();return}if(!jt){if(Oe&&(t.button===2||t.pointerType==="touch")&&(pt===null||t.pointerId===pt)){mu();return}if(ue&&t.pointerId===ue.pointerId){const{x:e,y:n}=ue;if(ue=null,W=!0,Ce=e,Te=n,no()){if(A.length>0){const s=A[0];if(Math.hypot(e-s.x,n-s.y)<20){if(Vs=!1,!bn(1)){A=[],$e();return}x.push([...A]),D.push(T==="bumper"?"bumper":T==="point"?"point":T==="grabber"?"grabber":T==="boss"?"boss":"wall"),H.push(0),A=[],ye(),ae(),$e();return}}A.push({x:e,y:n}),Vs=!0,$e()}return}if(nt&&(clearTimeout(nt),nt=null),W=!0,ts){ts=!1;const e=Math.min(We.x,Dt.x),n=Math.max(We.x,Dt.x),s=Math.min(We.y,Dt.y),i=Math.max(We.y,Dt.y);for(let r=0;r<x.length;r++){const o=x[r];let a=!1;for(let l of o)if(l.x>=e&&l.x<=n&&l.y>=s&&l.y<=i){a=!0;break}a&&M.add(r)}return}if(zt){zt=!1,q.style.cursor="default";return}if(Xt){Xt=!1;const e=q.getBoundingClientRect(),n=S/e.width,s=C/e.height,i=(t.clientX-e.left)*n,r=(t.clientY-e.top)*s,o=A[0],a=Math.hypot(i-o.x,r-o.y);if(a>5&&bn(1)){const l=[],c=Math.max(16,Math.floor(a*Math.PI/10));for(let d=0;d<c;d++){const u=d/c*Math.PI*2;l.push({x:o.x+Math.cos(u)*a,y:o.y+Math.sin(u)*a})}x.push(l),D.push(T==="bumper"?"bumper":T==="point"?"point":T==="grabber"?"grabber":T==="boss"?"boss":"wall"),H.push(0),ye(),ae()}A=[],$e();return}mt&&(mt=!1,Ht="none",Hs=!1,Wt=null,Vt=null,$t&&ye(),$t=!1,ae())}});window.addEventListener("pointercancel",t=>{it&&(Gt===null||t.pointerId===Gt)&&pu(),ue&&t.pointerId===ue.pointerId&&(ue=null),Oe&&t.pointerId===pt&&mu()});window.addEventListener("keyup",t=>{document.activeElement.tagName==="INPUT"||document.activeElement.tagName==="TEXTAREA"||document.activeElement.isContentEditable||!t.ctrlKey&&!t.metaKey&&!t.altKey&&((t.key==="z"||t.key==="Z")&&(N.ArrowLeft=!1),t.key==="/"&&(t.preventDefault(),N.ArrowRight=!1))});window.addEventListener("keydown",t=>{if(!(document.activeElement.tagName==="INPUT"||document.activeElement.tagName==="TEXTAREA"||document.activeElement.isContentEditable)){if(Dd()){!t.ctrlKey&&!t.metaKey&&!t.altKey&&((t.key==="z"||t.key==="Z")&&(N.ArrowLeft=!0),t.key==="/"&&(t.preventDefault(),N.ArrowRight=!0));return}if(t.ctrlKey&&t.key==="z"){t.preventDefault(),iu();return}if(t.ctrlKey&&t.key==="y"){t.preventDefault(),ru();return}if((t.ctrlKey||t.metaKey)&&t.key==="s"){t.preventDefault(),ne.disabled||ua();return}if((t.ctrlKey||t.metaKey)&&t.key==="p"){t.preventDefault(),he.style.display!=="none"&&!he.disabled&&Kd();return}if((t.ctrlKey||t.metaKey)&&M.size>0&&(t.key==="ArrowLeft"||t.key==="ArrowRight"||t.key==="ArrowUp"||t.key==="ArrowDown")){t.preventDefault();const e=t.key==="ArrowLeft"?-1:t.key==="ArrowRight"?1:0,n=t.key==="ArrowUp"?-1:t.key==="ArrowDown"?1:0;for(let s of M)for(let i of x[s])i.x+=e,i.y+=n;ae(),clearTimeout(ml),ml=setTimeout(ye,400);return}if(!t.ctrlKey&&!t.metaKey&&!t.altKey){if(t.key==="s"||t.key==="S"){t.preventDefault(),Pi.click();return}if(t.key==="w"||t.key==="W"){t.preventDefault(),Ri.click();return}if(t.key==="g"||t.key==="G"){t.preventDefault(),Oi.click();return}if(t.key==="1"){t.preventDefault(),Ho.click();return}if(t.key==="2"){t.preventDefault(),Wo.click();return}if(t.key==="3"){t.preventDefault(),$o.click();return}if(t.key==="4"){t.preventDefault(),Vo.click();return}if((t.key==="z"||t.key==="Z")&&(N.ArrowLeft=!0),t.key==="/"&&(t.preventDefault(),N.ArrowRight=!0),t.key==="m"||t.key==="M"){Jc.click();return}if(t.key==="f"||t.key==="F"){jc.click();return}if((t.key==="x"||t.key==="X")&&T==="select"&&M.size>0){_o();return}if(t.key==="p"||t.key==="P"){Ri.click();return}if(t.key==="v"||t.key==="V"){Pi.click();return}if(t.key==="l"||t.key==="L"){mi.click();return}}if(T==="select"&&M.size>0){if(t.key==="Delete"||t.key==="Backspace")_o();else if(t.key==="["||t.key==="]"){let e=!1;for(let n of M)t.key==="["?H[n]<3&&(H[n]++,e=!0):t.key==="]"&&H[n]>0&&(H[n]--,e=!0);e&&(ye(),ae())}}}});function Zt(){const t=It.clientWidth,e=It.clientHeight,n=t*(j-1)/2,s=e*(j-1)/2;Ne=Math.max(-n,Math.min(n,Ne)),Ue=Math.max(-s,Math.min(s,Ue)),$.style.transformOrigin="0 0",$.style.transform=`translate(${Ne+t*(1-j)/2}px, ${Ue+e*(1-j)/2}px) scale(${j})`,yr(),ra(),Pd()}It.addEventListener("wheel",t=>{if(t.preventDefault(),be)return;const e=t.deltaY>0?-.1:.1;j=Math.max(1,j+e),j===1&&(Ne=0,Ue=0),Zt(),W=!0},{passive:!1});function ae(){W=!0,lo=[],co=[],uo=!0,(dt.size||Ae.length)&&(dt.clear(),Ae=[],un++)}function gu(){uo&&(uo=!1,gy())}function gy(){rt.clearRect(0,0,S,C),rt.drawImage(st,0,0,S,C);for(let n=3;n>=0;n--)for(let s=0;s<x.length;s++){if(H[s]!==n||D[s]==="point"||D[s]==="grabber"||D[s]==="boss")continue;const i=x[s];if(rt.fillStyle=D[s]==="bumper"?"#00ff00":"black",rt.beginPath(),i.length>0){rt.moveTo(i[0].x,i[0].y);for(let r=1;r<i.length;r++)rt.lineTo(i[r].x,i[r].y)}rt.closePath(),rt.fill()}const t=rt.getImageData(0,0,S,C);!Ve||Ve.length!==S*C?Ve=new Uint8Array(S*C):Ve.fill(0);const e=t.data;for(let n=0;n<S*C;n++){const s=n*4,i=e[s],r=e[s+1],o=e[s+2];if(e[s+3]>128){const l=i>200&&r>200&&o<50,c=i>100&&i<150&&r<50&&o>100&&o<150;!l&&!c&&(Ve[n]=1,r>150&&i<100&&o<100&&(Ve[n]=2))}}}function us(t,e,n,s){const i=S*e,r=C*(1-n),o=S*s*2.5,a=t.x-i,l=t.y-r;return a*a+l*l<o*o}function yu(t,e,n,s,i,r,o,a,l=1){const c=S*i;let d;e.naturalWidth&&e.naturalHeight?d=c*(e.naturalHeight/e.naturalWidth):(d=c*2.5,e.id.includes("flipper")&&(d=c*.4));const u=S*n,f=C*(1-s)-d,h=u+c*r,p=f+d*o;return t.save(),t.translate(h,p),t.rotate(a*Math.PI/180),t.scale(1,l),t.drawImage(e,-c*r,-d*o,c,d),t.restore(),{x:h,y:p,h:d}}let ko=null;function Dl(t,e,n,s,i,r){const o=Xc();o.save(),o.beginPath(),o.rect(n,s,i,r),o.clip(),o.clearRect(n,s,i,r),ko=yu(o,t,e.cssLeft,e.cssBottom,e.cssWidth,e.origX,e.origY,e.angle),o.restore()}const Br=4;function yy(t,e){if(e<=Br)return 0;const n=Math.min(1,(e-Br)/Br);return t*Math.max(.4,1-e/100)*n}function bu(t,e,n,s,i,r,o,a,l,c,d,u){const f=t.radius*t.radius;let h=0;if(a===0){const p=l,I=c;for(let y=n;y<i;y++)for(let v=e;v<s;v++){if(p[y*I+v]===0)continue;const m=v-t.x,b=y-t.y,E=m*m+b*b;if(E>f)continue;const _=m*r+b*o;if(_>=0)continue;const k=f-(E-_*_);if(k<=0)continue;const U=_+Math.sqrt(k);U>h&&(h=U)}}else{const p=l,I=c,y=d,v=u;for(let m=n;m<i;m++)for(let b=e;b<s;b++){if(b<I||b>=I+v||m<y)continue;const E=((m-y)*v+(b-I))*4;if(E<0||E>=p.length||p[E+3]<=128)continue;const _=b-t.x,k=m-t.y,U=_*_+k*k;if(U>f)continue;const R=_*r+k*o;if(R>=0)continue;const B=f-(U-R*R);if(B<=0)continue;const P=R+Math.sqrt(B);P>h&&(h=P)}}return h}function by(t,e,n,s){const i=s*s;for(let r=0,o=t.length;r<o;r++){const a=t[r],l=t[(r+1)%o],c=l.x-a.x,d=l.y-a.y,u=c*c+d*d;let f=u>0?((e-a.x)*c+(n-a.y)*d)/u:0;f<0?f=0:f>1&&(f=1);const h=e-(a.x+c*f),p=n-(a.y+d*f);if(h*h+p*p<=i)return!0}return!1}function wy(t,e){if(gu(),!Ve)return!1;const n=Math.max(0,Math.floor(t.x-t.radius)),s=Math.max(0,Math.floor(t.y-t.radius)),i=Math.min(S,Math.ceil(t.x+t.radius)),r=Math.min(C,Math.ceil(t.y+t.radius)),o=i-n,a=r-s;if(o<=0||a<=0)return!1;const l=S;let c=0,d=0,u=0,f=0;const h=t.radius*t.radius;for(let I=s;I<r;I++)for(let y=n;y<i;y++){const v=Ve[I*l+y];if(v>0){const m=y-t.x,b=I-t.y;m*m+b*b<=h&&(c++,d+=y,u+=I,v===2&&f++)}}let p=!1;if(c>0){const I=d/c,y=u/c,v=f>0;v&&(p=!0);let m=t.x-I,b=t.y-y;const E=Math.sqrt(m*m+b*b);E===0?(m=0,b=-1):(m/=E,b/=E);const _=bu(t,n,s,i,r,m,b,0,Ve,l);_>0&&(t.x+=m*_,t.y+=b*_);const k=t.vx*m+t.vy*b;if(k>0)return p;const U=Math.abs(k);!v&&U>1&&me("wallBounce");let B=-(1+yy(e,U))*k;v&&(B=Math.max(B*2,45)),t.vx+=B*m,t.vy+=B*b,t.vx*=.998,t.vy*=.998}return p}function Ol(t,e,n,s,i,r,o,a,l,c,d){if(!e)return;const u=Math.max(0,Math.floor(t.x-t.radius)),f=Math.max(0,Math.floor(t.y-t.radius)),h=Math.min(S,Math.ceil(t.x+t.radius)),p=Math.min(C,Math.ceil(t.y+t.radius));let I=0,y=0,v=0;const m=t.radius*t.radius;for(let b=f;b<p;b++)for(let E=u;E<h;E++){if(E<n||E>=n+i||b<s)continue;const _=((b-s)*i+(E-n))*4;if(_<0||_>=e.length||e[_+3]<=128)continue;const k=E-t.x,U=b-t.y;k*k+U*U<=m&&(I++,y+=E,v+=b)}if(I>0){const b=y/I,E=v/I;let _=t.x-b,k=t.y-E;const U=Math.sqrt(_*_+k*k);U===0?(_=0,k=-1):(_/=U,k/=U);const R=bu(t,u,f,h,p,_,k,1,e,n,s,i);R>0&&(t.x+=_*R,t.y+=k*R);let B=0,P=0;if(c!==0){const Pu=b-a,Ru=E-l;B=-c*Ru,P=c*Pu}const z=t.vx-B,K=t.vy-P,xe=z*_+K*k;if(xe>0)return;const de=Math.abs(xe);de>3&&me("wallBounce");let Tn=-(1+r*Math.max(.4,1-de/100))*xe;t.vx+=Tn*_,t.vy+=Tn*k,t.vx*=.998,t.vy*=.998}}let fs=0;function xo(t){if(!Qs)return requestAnimationFrame(xo);requestAnimationFrame(xo),ma(t)}const Nl=1e3/60,Ul=Md?300:900;function ma(t){if(fs===0){fs=t;return}let e=Math.floor((t-fs)/Nl);if(!(e<=0)){e>Ul?(fs=t,e=Ul):fs+=e*Nl;for(let n=0;n<e;n++)bi=n===e-1,Iy();vy()}}let Fl="";function wu(){const t=se.classList.contains("classic-mode")&&Z.angle>0?`rotateX(${-Z.angle}deg)`:"";t!==Fl&&(G.classList.toggle("billboard",!!t),G.style.transformOrigin=t?"50% 100%":"",G.style.transform=t,Fl=t)}let Hl=!1,$l="",Wl="",Vl="",Yl="";function vy(){Hl||(G.style.right="auto",G.style.bottom="auto",G.style.left="0",G.style.top="0",Hl=!0);const t=`rotate(${re.angle}deg)`;t!==$l&&(Re.style.transform=t,$l=t);const e=`rotate(${oe.angle}deg)`;e!==Wl&&(Be.style.transform=e,Wl=e);const n=`scaleY(${J.scale})`;n!==Vl&&(Se.style.transform=n,Vl=n);const s=`translate(${(g.x-g.radius)/S*100}%, ${(g.y-g.radius)/C*100}%)`;if(s!==Yl&&(T0.style.transform=s,Yl=s),wu(),be){let i,r;Le.mode==="follow"?(i="0 0",r=`translate(${Le.x}px, ${Le.y}px) scale(${Le.scale})`):Le.mode==="tilt"?(i="50% 100%",r=`perspective(${Ud}px) rotateX(${Le.angle}deg)`):(i="0 0",r="translate(0px, 0px) scale(1)"),i!==ho&&($.style.transformOrigin=i,ho=i),r!==fo&&($.style.transform=r,fo=r)}}setInterval(()=>{document.hidden&&Qs&&ma(performance.now())},500);document.addEventListener("visibilitychange",()=>{Qs&&ma(performance.now()),document.hidden&&vu()});window.addEventListener("blur",vu);function vu(){for(const t in N)N[t]=!1}function Iy(){const t=X==="playing"||X==="message",e=t&&N.ArrowLeft?-50:0,n=re.angle;re.angle+=(e-re.angle)*.4,re.omega=(re.angle-n)*Math.PI/180;const s=t&&N.ArrowRight?50:0,i=oe.angle;oe.angle+=(s-oe.angle)*.4,oe.omega=(oe.angle-i)*Math.PI/180;const r=J.scale;t&&(N.Space||N.ArrowDown)?(ai||(me("plungerCharge"),ai=!0),J.scale=Math.max(.2,J.scale-.0066),J.scale<=.2&&Gn("plungerCharge")):(ai&&(Gn("plungerCharge"),me("plungerRelease"),ai=!1),J.scale+=(1-J.scale)*.8);const o=us(g,re.cssLeft,re.cssBottom,re.cssWidth),a=us(g,oe.cssLeft,oe.cssBottom,oe.cssWidth);let l=null,c=null,d=null,u=null,f=0,h=0,p=0,I=0;if(o||a){f=Math.max(0,Math.floor(g.x-g.radius-Math.abs(g.vx)-10)),h=Math.max(0,Math.floor(g.y-g.radius-Math.abs(g.vy)-10));const y=Math.min(S,Math.ceil(g.x+g.radius+Math.abs(g.vx)+10)),v=Math.min(C,Math.ceil(g.y+g.radius+Math.abs(g.vy)+10));p=y-f,I=v-h;const m=p>0&&I>0?Xc():null;m&&(o&&(Dl(Re,re,f,h,p,I),l=ko,d=m.getImageData(f,h,p,I).data),a&&(Dl(Be,oe,f,h,p,I),c=ko,u=m.getImageData(f,h,p,I).data)),m&&m.clearRect(f,h,p,I)}if(X==="fantasies_intro"?Fe("PRESS PLAY"):X==="message"?(Dn--,Fe(on),Dn<=0&&On&&On()):X==="gameover"&&Fe("GAME OVER"),X!=="fantasies_intro")if(bs>0&&bs--,ys>0&&ys--,ot>0&&(ot--,ot===0&&Fe(ce)),it)g.vx=0,g.vy=0;else if(jn)g.vx=0,g.vy=0,fu(g.x,g.y)&&(jn=!1,G.classList.remove("held"));else if(Bn>0){Bn--;const y=x[ct];if(y){let v=y[0].x,m=y[0].y;for(let b of y)b.y>m&&(m=b.y,v=b.x);g.x=v,g.y=m,g.vx=0,g.vy=0}Bn===0&&(rn=ct,ct=-1,ys=wg)}else for(let v=0;v<4;v++){g.vy+=.95/4;const m=95,b=Math.sqrt(g.vx*g.vx+g.vy*g.vy);if(b>m){const _=m/b;g.vx*=_,g.vy*=_}if(g.x+=g.vx/4,g.y+=g.vy/4,g.y>C+g.radius*2){if(!be){je();break}dn--,me("gameOver"),dn>0?(X="message",on=dl[Math.floor(Math.random()*dl.length)],Dn=60,je(!1),On=()=>{on=dn===1?"FINAL BALL":dn+" BALLS LEFT",Dn=60,On=()=>{X="playing"}}):(X="gameover",vr=zd(),je(!1),Gn("backgroundMusic"),on="GAME OVER",Fe(on),O0());break}if(wy(g,.25)&&bs===0&&(me("bumperTrigger"),ce+=3e3,Fe(ce),bs=15),d&&us(g,re.cssLeft,re.cssBottom,re.cssWidth)&&Ol(g,d,f,h,p,.4,!0,l.x,l.y,re.omega),u&&us(g,oe.cssLeft,oe.cssBottom,oe.cssWidth)&&Ol(g,u,f,h,p,.4,!0,c.x,c.y,oe.omega),us(g,J.cssLeft,J.cssBottom,J.cssWidth)){const _=S*J.cssWidth,k=_*(Se.naturalHeight/Se.naturalWidth||2.5),U=S*J.cssLeft+_*J.origX,R=C*(1-J.cssBottom),B=R-k*J.scale,P=-(J.scale-r)*k;if(g.x>U-S*.05&&g.x<U+S*.05&&g.y+g.radius>B&&g.y-g.radius<R)if(g.y=B-g.radius,P<-1){const z=-.64*k;let K=P/z;K=Math.max(0,Math.min(1,K)),g.vy=-m*K}else g.vy>0&&(g.vy*=-.1)}}if(!it&&!jn){let y=new Set,v=new Set,m=!1;for(let b=0;b<x.length;b++)if(D[b]==="point"||D[b]==="grabber"||D[b]==="boss"){const E=x[b];if(E.length===0)continue;let _=co[b];if(!_){let k=1/0,U=1/0,R=-1/0,B=-1/0;for(let P of E)k=Math.min(k,P.x),U=Math.min(U,P.y),R=Math.max(R,P.x),B=Math.max(B,P.y);_={minX:k,minY:U,maxX:R,maxY:B},co[b]=_}if(g.x+g.radius>_.minX&&g.x-g.radius<_.maxX&&g.y+g.radius>_.minY&&g.y-g.radius<_.maxY){let k=lo[b];if(!k){k=new Path2D,k.moveTo(E[0].x,E[0].y);for(let R=1;R<E.length;R++)k.lineTo(E[R].x,E[R].y);k.closePath(),lo[b]=k}const U=au(g.x,g.y);if(by(E,g.x,g.y,g.radius)||ee.isPointInPath(k,U.x,U.y)){if(D[b]==="point")y.add(b),oo.has(b)||(me("pointTrigger"),ce+=1e3,Fe(ce),Ae.push({polyIndex:b,timer:60}));else if(D[b]==="boss"){if(!m&&!dt.has(b)&&ot<=0){m=!0,dt.add(b),Ae.push({polyIndex:b,timer:1/0,isBoss:!0}),un++;let R=0;for(let B of D)B==="boss"&&R++;if(R>0&&dt.size>=R)me("jackpot"),ce+=1e6,ot=180,ao++,Fe(dg(ao)),dt.clear(),Ae=Ae.filter(B=>!B.isBoss),un++;else{let B=dt.size;me(B===1?"boss1st":B===2?"boss2nd":B===3?"boss3rd":"boss4th")}}}else if(D[b]==="grabber"&&(v.add(b),ct===-1&&rn!==b&&ys===0)){me("grabberTrigger"),ct=b,Bn=60,ce+=1e4,Fe(ce);let R=E[0].x,B=E[0].y;for(let P of E)P.y>B&&(B=P.y,R=P.x);g.x=R,g.y=B,g.vx=0,g.vy=0}}}}oo=y,rn!==-1&&!v.has(rn)&&(rn=-1)}if(na){const y=performance.now();gl%vg===0&&Ln.push({x:g.x,y:g.y,t:y}),gl++;const v=y-yl;for(;Ln.length&&Ln[0].t<=v;)Ln.shift();if(bi){at.clearRect(0,0,S,C),at.fillStyle=Eg;for(const m of Ln)at.globalAlpha=Ig*(1-(y-m.t)/yl),at.beginPath(),at.arc(m.x,m.y,g.radius,0,Math.PI*2),at.fill();at.globalAlpha=1}}ot>0&&(ws=!0);for(let y=Ae.length-1;y>=0;y--){const v=Ae[y];v.isBoss||(ws=!0,v.timer--,v.timer<=0&&Ae.splice(y,1))}if(bi&&(ws||un!==bl||W)){ws=!1,bl=un,Tt&&(le.clearRect(Tt.x,Tt.y,Tt.w,Tt.h),Tt=null),Nn=1/0,Cs=1/0,Un=-1/0,Ts=-1/0;const y=new Map,v=new Map;if(ot>0&&ot%10<5)for(let m=0;m<x.length;m++)D[m]==="boss"&&(y.set(m,.8),v.set(m,.8));for(const m of Ae){const b=m.isBoss?.5:m.timer/60*.5;b>(y.get(m.polyIndex)||0)&&(y.set(m.polyIndex,b),v.set(m.polyIndex,.5))}if(y.size){const m=E=>{le.beginPath(),le.moveTo(E[0].x,E[0].y);for(let _=1;_<E.length;_++)le.lineTo(E[_].x,E[_].y);le.closePath()};let b=!1;for(let E=3;E>=0;E--)for(let _=0;_<x.length;_++){if(H[_]!==E)continue;const k=x[_];if(!k||k.length===0)continue;if(b){const R=wl;let B=1/0,P=1/0,z=-1/0,K=-1/0;for(let xe=0;xe<k.length;xe++){const de=k[xe];de.x<B&&(B=de.x),de.x>z&&(z=de.x),de.y<P&&(P=de.y),de.y>K&&(K=de.y)}z<Nn-R||B>Un+R||K<Cs-R||P>Ts+R||(le.globalCompositeOperation="destination-out",le.shadowColor="transparent",le.shadowBlur=0,le.fillStyle="#000",m(k),le.fill())}const U=y.get(_);U>0&&(_g(k),le.globalCompositeOperation="source-over",le.shadowBlur=Ld*wi,le.shadowColor=`rgba(255, 245, 220, ${v.get(_)})`,le.fillStyle=`rgba(255, 245, 220, ${U})`,m(k),le.fill(),b=!0)}le.globalCompositeOperation="source-over",le.shadowBlur=0,le.shadowColor="transparent"}if(Un>Nn){const m=wl,b=Math.max(0,Math.floor(Nn-m)),E=Math.max(0,Math.floor(Cs-m));Tt={x:b,y:E,w:Math.min(S,Math.ceil(Un+m))-b,h:Math.min(C,Math.ceil(Ts+m))-E}}}if(bi&&W&&($e(),W=!1),be)if(se.classList.contains("classic-mode"))Z.angle>0?(Le.mode="tilt",Le.angle=Z.angle):Le.mode="rest";else{nn||(nn={cw:It.clientWidth,ch:It.clientHeight,iw:$.clientWidth,ih:$.clientHeight});const y=nn.cw,v=nn.ch,m=nn.iw,b=nn.ih;window.fantasiesCamX===void 0&&(window.fantasiesCamX=0,window.fantasiesCamY=0,window.fantasiesCamScale=1);let E,_,k;if(X==="fantasies_intro"){k=y/m,E=(y-m*k)/2;const P=b*k,z=v-P,K=0;window.fantasiesIntroPanY===void 0&&(window.fantasiesIntroPanY=K,window.fantasiesIntroPanDir=-1.5),window.fantasiesIntroPanY+=window.fantasiesIntroPanDir,window.fantasiesIntroPanY>=K?(window.fantasiesIntroPanY=K,window.fantasiesIntroPanDir=-1.5):window.fantasiesIntroPanY<=z&&(window.fantasiesIntroPanY=z,window.fantasiesIntroPanDir=1.5),_=window.fantasiesIntroPanY}else{k=1;const P=g.x/S*m,z=g.y/C*b;E=y/2-P,_=v/2-z;const K=y-m;E=Math.max(K,Math.min(0,E));const de=v-b;_=Math.max(de,Math.min(0,_))}if(window.fantasiesCamScale+=(k-window.fantasiesCamScale)*.1,Qi()>0&&(window.fantasiesCamScale=k),window.fantasiesCamX+=(E-window.fantasiesCamX)*.1,window.fantasiesCamY+=(_-window.fantasiesCamY)*.1,X!=="fantasies_intro"){const P=g.y/C*b*window.fantasiesCamScale,z=v*.15;-window.fantasiesCamY+v-z<P&&(window.fantasiesCamY=-(P-v+z)),-window.fantasiesCamY+z>P&&(window.fantasiesCamY=-(P-z));const K=b*window.fantasiesCamScale;if(K<v)window.fantasiesCamY=(v-K)/2;else{const Tn=v-K;window.fantasiesCamY=Math.max(Tn,Math.min(0,window.fantasiesCamY))}const xe=g.x/S*m*window.fantasiesCamScale,de=y*.15;-window.fantasiesCamX+y-de<xe&&(window.fantasiesCamX=-(xe-y+de)),-window.fantasiesCamX+de>xe&&(window.fantasiesCamX=-(xe-de));const cs=m*window.fantasiesCamScale;if(cs<y)window.fantasiesCamX=(y-cs)/2;else{const Tn=y-cs;window.fantasiesCamX=Math.max(Tn,Math.min(0,window.fantasiesCamX))}}let U=window.fantasiesCamX,R=window.fantasiesCamY;const B=Qi();B>0&&(U=Math.round(U/B)*B,R=Math.round(R/B)*B),Le.mode="follow",Le.x=U,Le.y=R,Le.scale=window.fantasiesCamScale}}function $e(){ee.clearRect(0,0,S,C),w.clearRect(0,0,S,C);for(let t=3;t>=0;t--)for(let e=0;e<x.length;e++){if(H[e]!==t)continue;const n=x[e];ee.fillStyle=D[e]==="bumper"?"#00db4b":D[e]==="point"?"#dab100":D[e]==="grabber"?"#e70090":D[e]==="boss"?"#dc0701":"black",ee.beginPath();let s=1/0,i=-1/0,r=1/0,o=-1/0;if(n.length>0){ee.moveTo(n[0].x,n[0].y),s=i=n[0].x,r=o=n[0].y;for(let a=1;a<n.length;a++)ee.lineTo(n[a].x,n[a].y),s=Math.min(s,n[a].x),i=Math.max(i,n[a].x),r=Math.min(r,n[a].y),o=Math.max(o,n[a].y)}if(ee.closePath(),ee.fill(),D[e]!=="wall"&&i>s&&o>r){const a=(s+i)/2,l=(r+o)/2,c=Math.hypot(i-a,o-l),d=ee.createRadialGradient(a,l,0,a,l,c);d.addColorStop(0,"rgba(255, 255, 255, 0.5)"),d.addColorStop(1,"rgba(0, 0, 0, 0.5)"),ee.save(),ee.globalCompositeOperation="soft-light",ee.fillStyle=d,ee.fill(),ee.restore()}}if(!be){if(Rn){const t=Td(),e=S*$s,n=(i,r,o,a,l)=>{w.strokeStyle=l?"rgba(0, 120, 255, 0.6)":"rgba(0, 120, 255, 0.25)",w.lineWidth=l?2:1,w.beginPath(),w.moveTo(i,r),w.lineTo(o,a),w.stroke()};for(let i=e-Math.floor(e/t)*t;i<=S;i+=t)n(i,0,i,C,Math.abs(i-e)<1);const s=C/2;for(let i=s-Math.floor(s/t)*t;i<=C;i+=t)n(0,i,S,i,!1);w.strokeStyle="#e70090",w.lineWidth=2,w.setLineDash([14,10]),Wt!==null&&(w.beginPath(),w.moveTo(Wt,0),w.lineTo(Wt,C),w.stroke()),Vt!==null&&(w.beginPath(),w.moveTo(0,Vt),w.lineTo(S,Vt),w.stroke()),w.setLineDash([])}if(ts){w.strokeStyle="rgba(0, 120, 255, 0.8)",w.lineWidth=1,w.fillStyle="rgba(0, 120, 255, 0.2)";const t=Dt.x-We.x,e=Dt.y-We.y;w.fillRect(We.x,We.y,t,e),w.strokeRect(We.x,We.y,t,e)}if(T==="select"&&M.size>0){const{minX:t,minY:e,maxX:n,maxY:s}=ns(),i=(t+n)/2,r=ia(),o=At.stem*r;w.strokeStyle="grey",w.lineWidth=At.marquee*r,w.lineJoin="round",w.lineCap="round",w.setLineDash([At.dash[0]*r,At.dash[1]*r]),w.strokeRect(t,e,n-t,s-e),w.setLineDash([]);const a=At.knobR*r;w.beginPath(),w.moveTo(i,e),w.lineTo(i,e-o),w.stroke(),w.fillStyle="white",w.strokeStyle="#333",w.lineWidth=At.knobRing*r,w.beginPath(),w.arc(i,e-o,a,0,Math.PI*2),w.fill(),w.stroke(),w.beginPath(),w.arc(n,s,a,0,Math.PI*2),w.fill(),w.stroke();const l=H[Array.from(M)[0]],c=cu();w.textAlign="center",w.textBaseline="middle",w.lineJoin="miter";for(const u of c){const f=u.layer===l;w.fillStyle=f?"rgba(255, 255, 255, 0.95)":"rgba(0, 0, 0, 0.6)",w.fillRect(u.x,u.y,u.size,u.size),w.strokeStyle=f?"#000":"rgba(255, 255, 255, 0.85)",w.lineWidth=Math.max(1,u.size*.07),w.strokeRect(u.x,u.y,u.size,u.size),w.fillStyle=f?"#000":"#fff",w.font=`bold ${Math.round(u.size*.58)}px Arial`,w.fillText(String(u.layer+1),u.x+u.size/2,u.y+u.size/2+u.size*.03)}const d=du();if(d){w.save(),w.fillStyle="rgba(220, 7, 1, 0.92)",w.fillRect(d.x,d.y,d.size,d.size),w.strokeStyle="rgba(255, 255, 255, 0.85)",w.lineWidth=Math.max(1,d.size*.07),w.strokeRect(d.x,d.y,d.size,d.size);const u=d.size*.3;w.strokeStyle="#fff",w.lineWidth=Math.max(1,d.size*.12),w.lineCap="round",w.beginPath(),w.moveTo(d.x+u,d.y+u),w.lineTo(d.x+d.size-u,d.y+d.size-u),w.moveTo(d.x+d.size-u,d.y+u),w.lineTo(d.x+u,d.y+d.size-u),w.stroke(),w.restore()}w.lineJoin="round"}if(Hs){const t=S*$s;w.strokeStyle="#e70090",w.lineWidth=2,w.setLineDash([14,10]),w.beginPath(),w.moveTo(t,0),w.lineTo(t,C),w.stroke(),w.setLineDash([])}if(A.length>0){w.strokeStyle="#dc0701",w.lineWidth=(gi?16:12)/j,w.lineJoin="round",w.lineCap="round";const t=(gi?14:9)/j;if(w.beginPath(),Xt){const e=A[0],n=Math.hypot(Ce-e.x,Te-e.y);w.arc(e.x,e.y,n,0,Math.PI*2),w.stroke(),w.fillStyle="#dc0701",w.beginPath(),w.arc(e.x,e.y,t,0,Math.PI*2),w.fill()}else{w.moveTo(A[0].x,A[0].y);for(let e=1;e<A.length;e++)w.lineTo(A[e].x,A[e].y);if(!gi){const e=Ed(Ce,Te);w.lineTo(e.x,e.y)}w.stroke(),w.fillStyle="#dc0701",w.beginPath(),w.arc(A[0].x,A[0].y,t,0,Math.PI*2),w.fill()}}}}const ir=new Set;let jt=!1;const Ey=320,_y=40,Sy=8,ky=.006;let Iu=0,Eu=0,_u=0,Ye=null,Vs=!1;function xy(){ue=null,Oe&&(Oe=!1,pt=null,A=[]),Xt&&(Xt=!1,A=[]),nt&&(clearTimeout(nt),nt=null),ts=!1,mt&&($t&&(So((t,e)=>{t.x=e.x,t.y=e.y}),ae()),mt=!1,Ht="none",$t=!1,Hs=!1,Wt=null,Vt=null),zt=!1,W=!0,$e()}function Su(t){const e=t.target;return!e||!e.closest?!1:!e.closest("#mobile-controls")&&!e.closest("#left-column")&&!e.closest("#mobile-modebar")&&!e.closest("#mobile-topbar")&&!e.closest("#right-column")&&!e.closest("#editor-panel")&&!e.closest("#settings-panel")&&!e.closest("#arcade-panel")}function ku(t){jt||(jt=!0,Ye=null,t&&Vs&&A.length>0&&A.pop(),Vs=!1,xy())}window.addEventListener("pointerdown",t=>{if(t.pointerType!=="touch"||(ir.add(t.pointerId),!Su(t)))return;if(ir.size>=2)return ku();performance.now()-Iu<Ey&&Math.hypot(t.clientX-Eu,t.clientY-_u)<_y&&(Ye={pointerId:t.pointerId,y:t.clientY,zoom:j})},{capture:!0});window.addEventListener("pointermove",t=>{if(t.pointerType!=="touch"||!Ye||t.pointerId!==Ye.pointerId)return;const e=t.clientY-Ye.y;!jt&&Math.abs(e)<Sy||(ku(!0),Ye||(Ye={pointerId:t.pointerId,y:t.clientY-e,zoom:j}),j=Cu(Ye.zoom-e*ky),j===1&&(Ne=0,Ue=0),Zt(),W=!0)},{capture:!0});const xu=t=>{t.pointerType==="touch"&&(ir.delete(t.pointerId),Ye&&t.pointerId===Ye.pointerId&&(Ye=null),ir.size===0&&(jt=!1,Iu=performance.now(),Eu=t.clientX,_u=t.clientY))};window.addEventListener("pointerup",xu);window.addEventListener("pointercancel",xu);const Cy=6,Cu=t=>Math.max(1,Math.min(Cy,t));let fe=null;function Tu(t){const e=It.getBoundingClientRect();return{x:(t.touches[0].clientX+t.touches[1].clientX)/2-e.left,y:(t.touches[0].clientY+t.touches[1].clientY)/2-e.top}}function Au(t){return Math.hypot(t.touches[0].clientX-t.touches[1].clientX,t.touches[0].clientY-t.touches[1].clientY)}document.body.addEventListener("touchstart",t=>{if(t.touches.length===2&&Su(t)){const e=Tu(t);fe={dist:Math.max(1,Au(t)),zoom:j,panX:Ne,panY:Ue,midX:e.x,midY:e.y,cw:It.clientWidth,ch:It.clientHeight}}},{passive:!0});document.body.addEventListener("touchmove",t=>{if(t.touches.length!==2||!fe)return;t.cancelable&&t.preventDefault();const e=Cu(fe.zoom*(Au(t)/fe.dist)),n=Tu(t),s=(fe.midX-fe.panX-fe.cw*(1-fe.zoom)/2)/fe.zoom,i=(fe.midY-fe.panY-fe.ch*(1-fe.zoom)/2)/fe.zoom;Ne=n.x-fe.cw*(1-e)/2-s*e,Ue=n.y-fe.ch*(1-e)/2-i*e,j=e,j===1&&(Ne=0,Ue=0),Zt(),W=!0},{passive:!1});document.body.addEventListener("touchend",t=>{t.touches.length<2&&(fe=null)});const ss=()=>window.matchMedia("(max-width: 900px)").matches,ga=()=>document.body.classList.contains("show-right"),ti=()=>document.body.classList.remove("show-right");document.body.classList.add("rail-open");lr();window.addEventListener("load",lr);window.addEventListener("load",Wr);document.getElementById("mobile-logo-btn").addEventListener("click",t=>{t.stopPropagation(),ti(),document.body.classList.toggle("rail-open"),lr()});document.querySelectorAll("[data-proxy]").forEach(t=>{t.addEventListener("click",e=>{var n;e.stopPropagation(),(n=document.getElementById(t.dataset.proxy))==null||n.click()})});document.getElementById("mobile-menu-btn").addEventListener("click",t=>{t.stopPropagation();const e=document.body.classList.contains("show-right");ti(),e||document.body.classList.add("show-right")});function ya(t,e){const n=s=>e.forEach(i=>{N[i]=s});t.addEventListener("pointerdown",s=>{s.preventDefault(),n(!0);try{t.setPointerCapture(s.pointerId)}catch{}}),t.addEventListener("pointerup",()=>n(!1)),t.addEventListener("pointercancel",()=>n(!1)),t.addEventListener("contextmenu",s=>s.preventDefault())}ya(document.getElementById("mc-flip-left"),["ArrowLeft"]);ya(document.getElementById("mc-flip-right"),["ArrowRight"]);ya(document.getElementById("mc-plunger"),["Space","ArrowDown"]);let Co=!1,Lu=0;const Ty=".modal-backdrop, #arcade-modal, #arcade-detail-modal";document.addEventListener("pointerdown",t=>{!ss()||!ga()||t.target.closest("#right-column")||t.target.closest("#mobile-menu-btn")||t.target.closest(Ty)||(ti(),Co=!0,Lu=performance.now(),t.stopPropagation())},!0);document.addEventListener("click",t=>{Co&&(Co=!1,!(performance.now()-Lu>700)&&(t.stopPropagation(),t.preventDefault()))},!0);const Mu=document.getElementById("game-area");Mu.addEventListener("click",t=>{ss()&&ga()&&!t.target.closest("#score-container")&&ti()});F.addEventListener("touchstart",t=>{if(ss()&&ga()){ti();return}if(!ss()&&!(!be&&T!=="none")&&(X==="playing"||X==="message")){if(document.activeElement&&(document.activeElement.tagName==="INPUT"||document.activeElement.tagName==="TEXTAREA"))return;t.preventDefault();for(let n=0;n<t.changedTouches.length;n++){const s=t.changedTouches[n],i=F.getBoundingClientRect(),r=s.clientX-i.left;s.clientY-i.top>i.height*.7?(N.Space=!0,N.ArrowDown=!0):r<i.width/2?N.ArrowLeft=!0:N.ArrowRight=!0}}},{passive:!1});F.addEventListener("touchend",t=>{if(!ss()&&!(!be&&T!=="none")&&(X==="playing"||X==="message")){t.preventDefault(),N.Space=!1,N.ArrowDown=!1,N.ArrowLeft=!1,N.ArrowRight=!1;for(let e=0;e<t.touches.length;e++){const n=t.touches[e],s=F.getBoundingClientRect(),i=n.clientX-s.left;n.clientY-s.top>s.height*.7?(N.Space=!0,N.ArrowDown=!0):i<s.width/2?N.ArrowLeft=!0:N.ArrowRight=!0}}},{passive:!1});F.addEventListener("touchcancel",t=>{if(!ss()&&!(!be&&T!=="none")&&(X==="playing"||X==="message")){t.preventDefault(),N.Space=!1,N.ArrowDown=!1,N.ArrowLeft=!1,N.ArrowRight=!1;for(let e=0;e<t.touches.length;e++){const n=t.touches[e],s=F.getBoundingClientRect(),i=n.clientX-s.left;n.clientY-s.top>s.height*.7?(N.Space=!0,N.ArrowDown=!0):i<s.width/2?N.ArrowLeft=!0:N.ArrowRight=!0}}},{passive:!1});export{Kn as C,qt as F,sc as L,zs as S,Lo as _,V as a,rh as b,Ly as c,qn as d,Ay as e,Ry as f,Kt as g,Hu as h,To as i,Ku as j,_e as k,My as l,Py as m,lt as n,Ps as o,of as p,Fn as r};
