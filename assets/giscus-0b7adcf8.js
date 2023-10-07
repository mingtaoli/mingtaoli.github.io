/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const M=window,F=M.ShadowRoot&&(M.ShadyCSS===void 0||M.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Z=Symbol(),Q=new WeakMap;let ct=class{constructor(t,e,s){if(this._$cssResult$=!0,s!==Z)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(F&&t===void 0){const s=e!==void 0&&e.length===1;s&&(t=Q.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&Q.set(e,t))}return t}toString(){return this.cssText}};const ft=i=>new ct(typeof i=="string"?i:i+"",void 0,Z),mt=(i,...t)=>{const e=i.length===1?i[0]:t.reduce((s,n,r)=>s+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(n)+i[r+1],i[0]);return new ct(e,i,Z)},At=(i,t)=>{F?i.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet):t.forEach(e=>{const s=document.createElement("style"),n=M.litNonce;n!==void 0&&s.setAttribute("nonce",n),s.textContent=e.cssText,i.appendChild(s)})},X=F?i=>i:i=>i instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return ft(e)})(i):i;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var G;const x=window,tt=x.trustedTypes,yt=tt?tt.emptyScript:"",et=x.reactiveElementPolyfillSupport,Y={toAttribute(i,t){switch(t){case Boolean:i=i?yt:null;break;case Object:case Array:i=i==null?i:JSON.stringify(i)}return i},fromAttribute(i,t){let e=i;switch(t){case Boolean:e=i!==null;break;case Number:e=i===null?null:Number(i);break;case Object:case Array:try{e=JSON.parse(i)}catch{e=null}}return e}},dt=(i,t)=>t!==i&&(t==t||i==i),D={attribute:!0,type:String,converter:Y,reflect:!1,hasChanged:dt},q="finalized";let S=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(t){var e;this.finalize(),((e=this.h)!==null&&e!==void 0?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((e,s)=>{const n=this._$Ep(s,e);n!==void 0&&(this._$Ev.set(n,s),t.push(n))}),t}static createProperty(t,e=D){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const s=typeof t=="symbol"?Symbol():"__"+t,n=this.getPropertyDescriptor(t,s,e);n!==void 0&&Object.defineProperty(this.prototype,t,n)}}static getPropertyDescriptor(t,e,s){return{get(){return this[e]},set(n){const r=this[t];this[e]=n,this.requestUpdate(t,r,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||D}static finalize(){if(this.hasOwnProperty(q))return!1;this[q]=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),t.h!==void 0&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const e=this.properties,s=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(const n of s)this.createProperty(n,e[n])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const n of s)e.unshift(X(n))}else t!==void 0&&e.push(X(t));return e}static _$Ep(t,e){const s=e.attribute;return s===!1?void 0:typeof s=="string"?s:typeof t=="string"?t.toLowerCase():void 0}_$Eu(){var t;this._$E_=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(t=this.constructor.h)===null||t===void 0||t.forEach(e=>e(this))}addController(t){var e,s;((e=this._$ES)!==null&&e!==void 0?e:this._$ES=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((s=t.hostConnected)===null||s===void 0||s.call(t))}removeController(t){var e;(e=this._$ES)===null||e===void 0||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])})}createRenderRoot(){var t;const e=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return At(e,this.constructor.elementStyles),e}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$ES)===null||t===void 0||t.forEach(e=>{var s;return(s=e.hostConnected)===null||s===void 0?void 0:s.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)===null||t===void 0||t.forEach(e=>{var s;return(s=e.hostDisconnected)===null||s===void 0?void 0:s.call(e)})}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$EO(t,e,s=D){var n;const r=this.constructor._$Ep(t,s);if(r!==void 0&&s.reflect===!0){const o=(((n=s.converter)===null||n===void 0?void 0:n.toAttribute)!==void 0?s.converter:Y).toAttribute(e,s.type);this._$El=t,o==null?this.removeAttribute(r):this.setAttribute(r,o),this._$El=null}}_$AK(t,e){var s;const n=this.constructor,r=n._$Ev.get(t);if(r!==void 0&&this._$El!==r){const o=n.getPropertyOptions(r),a=typeof o.converter=="function"?{fromAttribute:o.converter}:((s=o.converter)===null||s===void 0?void 0:s.fromAttribute)!==void 0?o.converter:Y;this._$El=r,this[r]=a.fromAttribute(e,o.type),this._$El=null}}requestUpdate(t,e,s){let n=!0;t!==void 0&&(((s=s||this.constructor.getPropertyOptions(t)).hasChanged||dt)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),s.reflect===!0&&this._$El!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,s))):n=!1),!this.isUpdatePending&&n&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((n,r)=>this[r]=n),this._$Ei=void 0);let e=!1;const s=this._$AL;try{e=this.shouldUpdate(s),e?(this.willUpdate(s),(t=this._$ES)===null||t===void 0||t.forEach(n=>{var r;return(r=n.hostUpdate)===null||r===void 0?void 0:r.call(n)}),this.update(s)):this._$Ek()}catch(n){throw e=!1,this._$Ek(),n}e&&this._$AE(s)}willUpdate(t){}_$AE(t){var e;(e=this._$ES)===null||e===void 0||e.forEach(s=>{var n;return(n=s.hostUpdated)===null||n===void 0?void 0:n.call(s)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((e,s)=>this._$EO(s,this[s],e)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}};S[q]=!0,S.elementProperties=new Map,S.elementStyles=[],S.shadowRootOptions={mode:"open"},et==null||et({ReactiveElement:S}),((G=x.reactiveElementVersions)!==null&&G!==void 0?G:x.reactiveElementVersions=[]).push("1.6.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var z;const H=window,E=H.trustedTypes,st=E?E.createPolicy("lit-html",{createHTML:i=>i}):void 0,J="$lit$",f=`lit$${(Math.random()+"").slice(9)}$`,ut="?"+f,St=`<${ut}>`,y=document,O=()=>y.createComment(""),P=i=>i===null||typeof i!="object"&&typeof i!="function",pt=Array.isArray,Et=i=>pt(i)||typeof(i==null?void 0:i[Symbol.iterator])=="function",B=`[ 	
\f\r]`,w=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,it=/-->/g,nt=/>/g,m=RegExp(`>|${B}(?:([^\\s"'>=/]+)(${B}*=${B}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),rt=/'/g,ot=/"/g,$t=/^(?:script|style|textarea|title)$/i,bt=i=>(t,...e)=>({_$litType$:i,strings:t,values:e}),Ct=bt(1),b=Symbol.for("lit-noChange"),u=Symbol.for("lit-nothing"),lt=new WeakMap,A=y.createTreeWalker(y,129,null,!1);function _t(i,t){if(!Array.isArray(i)||!i.hasOwnProperty("raw"))throw Error("invalid template strings array");return st!==void 0?st.createHTML(t):t}const wt=(i,t)=>{const e=i.length-1,s=[];let n,r=t===2?"<svg>":"",o=w;for(let a=0;a<e;a++){const l=i[a];let h,c,d=-1,$=0;for(;$<l.length&&(o.lastIndex=$,c=o.exec(l),c!==null);)$=o.lastIndex,o===w?c[1]==="!--"?o=it:c[1]!==void 0?o=nt:c[2]!==void 0?($t.test(c[2])&&(n=RegExp("</"+c[2],"g")),o=m):c[3]!==void 0&&(o=m):o===m?c[0]===">"?(o=n??w,d=-1):c[1]===void 0?d=-2:(d=o.lastIndex-c[2].length,h=c[1],o=c[3]===void 0?m:c[3]==='"'?ot:rt):o===ot||o===rt?o=m:o===it||o===nt?o=w:(o=m,n=void 0);const g=o===m&&i[a+1].startsWith("/>")?" ":"";r+=o===w?l+St:d>=0?(s.push(h),l.slice(0,d)+J+l.slice(d)+f+g):l+f+(d===-2?(s.push(void 0),a):g)}return[_t(i,r+(i[e]||"<?>")+(t===2?"</svg>":"")),s]};class T{constructor({strings:t,_$litType$:e},s){let n;this.parts=[];let r=0,o=0;const a=t.length-1,l=this.parts,[h,c]=wt(t,e);if(this.el=T.createElement(h,s),A.currentNode=this.el.content,e===2){const d=this.el.content,$=d.firstChild;$.remove(),d.append(...$.childNodes)}for(;(n=A.nextNode())!==null&&l.length<a;){if(n.nodeType===1){if(n.hasAttributes()){const d=[];for(const $ of n.getAttributeNames())if($.endsWith(J)||$.startsWith(f)){const g=c[o++];if(d.push($),g!==void 0){const gt=n.getAttribute(g.toLowerCase()+J).split(f),I=/([.?@])?(.*)/.exec(g);l.push({type:1,index:r,name:I[2],strings:gt,ctor:I[1]==="."?Nt:I[1]==="?"?Pt:I[1]==="@"?Tt:L})}else l.push({type:6,index:r})}for(const $ of d)n.removeAttribute($)}if($t.test(n.tagName)){const d=n.textContent.split(f),$=d.length-1;if($>0){n.textContent=E?E.emptyScript:"";for(let g=0;g<$;g++)n.append(d[g],O()),A.nextNode(),l.push({type:2,index:++r});n.append(d[$],O())}}}else if(n.nodeType===8)if(n.data===ut)l.push({type:2,index:r});else{let d=-1;for(;(d=n.data.indexOf(f,d+1))!==-1;)l.push({type:7,index:r}),d+=f.length-1}r++}}static createElement(t,e){const s=y.createElement("template");return s.innerHTML=t,s}}function C(i,t,e=i,s){var n,r,o,a;if(t===b)return t;let l=s!==void 0?(n=e._$Co)===null||n===void 0?void 0:n[s]:e._$Cl;const h=P(t)?void 0:t._$litDirective$;return(l==null?void 0:l.constructor)!==h&&((r=l==null?void 0:l._$AO)===null||r===void 0||r.call(l,!1),h===void 0?l=void 0:(l=new h(i),l._$AT(i,e,s)),s!==void 0?((o=(a=e)._$Co)!==null&&o!==void 0?o:a._$Co=[])[s]=l:e._$Cl=l),l!==void 0&&(t=C(i,l._$AS(i,t.values),l,s)),t}class Ut{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var e;const{el:{content:s},parts:n}=this._$AD,r=((e=t==null?void 0:t.creationScope)!==null&&e!==void 0?e:y).importNode(s,!0);A.currentNode=r;let o=A.nextNode(),a=0,l=0,h=n[0];for(;h!==void 0;){if(a===h.index){let c;h.type===2?c=new R(o,o.nextSibling,this,t):h.type===1?c=new h.ctor(o,h.name,h.strings,this,t):h.type===6&&(c=new Rt(o,this,t)),this._$AV.push(c),h=n[++l]}a!==(h==null?void 0:h.index)&&(o=A.nextNode(),a++)}return A.currentNode=y,r}v(t){let e=0;for(const s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}}class R{constructor(t,e,s,n){var r;this.type=2,this._$AH=u,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=n,this._$Cp=(r=n==null?void 0:n.isConnected)===null||r===void 0||r}get _$AU(){var t,e;return(e=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&e!==void 0?e:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=C(this,t,e),P(t)?t===u||t==null||t===""?(this._$AH!==u&&this._$AR(),this._$AH=u):t!==this._$AH&&t!==b&&this._(t):t._$litType$!==void 0?this.g(t):t.nodeType!==void 0?this.$(t):Et(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==u&&P(this._$AH)?this._$AA.nextSibling.data=t:this.$(y.createTextNode(t)),this._$AH=t}g(t){var e;const{values:s,_$litType$:n}=t,r=typeof n=="number"?this._$AC(t):(n.el===void 0&&(n.el=T.createElement(_t(n.h,n.h[0]),this.options)),n);if(((e=this._$AH)===null||e===void 0?void 0:e._$AD)===r)this._$AH.v(s);else{const o=new Ut(r,this),a=o.u(this.options);o.v(s),this.$(a),this._$AH=o}}_$AC(t){let e=lt.get(t.strings);return e===void 0&&lt.set(t.strings,e=new T(t)),e}T(t){pt(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let s,n=0;for(const r of t)n===e.length?e.push(s=new R(this.k(O()),this.k(O()),this,this.options)):s=e[n],s._$AI(r),n++;n<e.length&&(this._$AR(s&&s._$AB.nextSibling,n),e.length=n)}_$AR(t=this._$AA.nextSibling,e){var s;for((s=this._$AP)===null||s===void 0||s.call(this,!1,!0,e);t&&t!==this._$AB;){const n=t.nextSibling;t.remove(),t=n}}setConnected(t){var e;this._$AM===void 0&&(this._$Cp=t,(e=this._$AP)===null||e===void 0||e.call(this,t))}}class L{constructor(t,e,s,n,r){this.type=1,this._$AH=u,this._$AN=void 0,this.element=t,this.name=e,this._$AM=n,this.options=r,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=u}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,s,n){const r=this.strings;let o=!1;if(r===void 0)t=C(this,t,e,0),o=!P(t)||t!==this._$AH&&t!==b,o&&(this._$AH=t);else{const a=t;let l,h;for(t=r[0],l=0;l<r.length-1;l++)h=C(this,a[s+l],e,l),h===b&&(h=this._$AH[l]),o||(o=!P(h)||h!==this._$AH[l]),h===u?t=u:t!==u&&(t+=(h??"")+r[l+1]),this._$AH[l]=h}o&&!n&&this.j(t)}j(t){t===u?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class Nt extends L{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===u?void 0:t}}const Ot=E?E.emptyScript:"";class Pt extends L{constructor(){super(...arguments),this.type=4}j(t){t&&t!==u?this.element.setAttribute(this.name,Ot):this.element.removeAttribute(this.name)}}class Tt extends L{constructor(t,e,s,n,r){super(t,e,s,n,r),this.type=5}_$AI(t,e=this){var s;if((t=(s=C(this,t,e,0))!==null&&s!==void 0?s:u)===b)return;const n=this._$AH,r=t===u&&n!==u||t.capture!==n.capture||t.once!==n.once||t.passive!==n.passive,o=t!==u&&(n===u||r);r&&this.element.removeEventListener(this.name,this,n),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,s;typeof this._$AH=="function"?this._$AH.call((s=(e=this.options)===null||e===void 0?void 0:e.host)!==null&&s!==void 0?s:this.element,t):this._$AH.handleEvent(t)}}class Rt{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){C(this,t)}}const ht=H.litHtmlPolyfillSupport;ht==null||ht(T,R),((z=H.litHtmlVersions)!==null&&z!==void 0?z:H.litHtmlVersions=[]).push("2.8.0");const It=(i,t,e)=>{var s,n;const r=(s=e==null?void 0:e.renderBefore)!==null&&s!==void 0?s:t;let o=r._$litPart$;if(o===void 0){const a=(n=e==null?void 0:e.renderBefore)!==null&&n!==void 0?n:null;r._$litPart$=o=new R(t.insertBefore(O(),a),a,void 0,e??{})}return o._$AI(i),o};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var j,V;let U=class extends S{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;const s=super.createRenderRoot();return(t=(e=this.renderOptions).renderBefore)!==null&&t!==void 0||(e.renderBefore=s.firstChild),s}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=It(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!1)}render(){return b}};U.finalized=!0,U._$litElement$=!0,(j=globalThis.litElementHydrateSupport)===null||j===void 0||j.call(globalThis,{LitElement:U});const at=globalThis.litElementPolyfillSupport;at==null||at({LitElement:U});((V=globalThis.litElementVersions)!==null&&V!==void 0?V:globalThis.litElementVersions=[]).push("3.3.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Mt=i=>t=>typeof t=="function"?((e,s)=>(customElements.define(e,s),s))(i,t):((e,s)=>{const{kind:n,elements:r}=s;return{kind:n,elements:r,finisher(o){customElements.define(e,o)}}})(i,t);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const xt=(i,t)=>t.kind==="method"&&t.descriptor&&!("value"in t.descriptor)?{...t,finisher(e){e.createProperty(t.key,i)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){typeof t.initializer=="function"&&(this[t.key]=t.initializer.call(this))},finisher(e){e.createProperty(t.key,i)}},Ht=(i,t,e)=>{t.constructor.createProperty(e,i)};function v(i){return(t,e)=>e!==void 0?Ht(i,t,e):xt(i,t)}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var W;((W=window.HTMLSlotElement)===null||W===void 0?void 0:W.prototype.assignedElements)!=null;/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const kt=i=>i.strings===void 0;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Lt={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Gt=i=>(...t)=>({_$litDirective$:i,values:t});let Dt=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,s){this._$Ct=t,this._$AM=e,this._$Ci=s}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const N=(i,t)=>{var e,s;const n=i._$AN;if(n===void 0)return!1;for(const r of n)(s=(e=r)._$AO)===null||s===void 0||s.call(e,t,!1),N(r,t);return!0},k=i=>{let t,e;do{if((t=i._$AM)===void 0)break;e=t._$AN,e.delete(i),i=t}while((e==null?void 0:e.size)===0)},vt=i=>{for(let t;t=i._$AM;i=t){let e=t._$AN;if(e===void 0)t._$AN=e=new Set;else if(e.has(i))break;e.add(i),jt(t)}};function zt(i){this._$AN!==void 0?(k(this),this._$AM=i,vt(this)):this._$AM=i}function Bt(i,t=!1,e=0){const s=this._$AH,n=this._$AN;if(n!==void 0&&n.size!==0)if(t)if(Array.isArray(s))for(let r=e;r<s.length;r++)N(s[r],!1),k(s[r]);else s!=null&&(N(s,!1),k(s));else N(this,i)}const jt=i=>{var t,e,s,n;i.type==Lt.CHILD&&((t=(s=i)._$AP)!==null&&t!==void 0||(s._$AP=Bt),(e=(n=i)._$AQ)!==null&&e!==void 0||(n._$AQ=zt))};class Vt extends Dt{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,e,s){super._$AT(t,e,s),vt(this),this.isConnected=t._$AU}_$AO(t,e=!0){var s,n;t!==this.isConnected&&(this.isConnected=t,t?(s=this.reconnected)===null||s===void 0||s.call(this):(n=this.disconnected)===null||n===void 0||n.call(this)),e&&(N(this,t),k(this))}setValue(t){if(kt(this._$Ct))this._$Ct._$AI(t,this);else{const e=[...this._$Ct._$AH];e[this._$Ci]=t,this._$Ct._$AI(e,this,0)}}disconnected(){}reconnected(){}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Wt=()=>new Kt;class Kt{}const K=new WeakMap,Yt=Gt(class extends Vt{render(i){return u}update(i,[t]){var e;const s=t!==this.G;return s&&this.G!==void 0&&this.ot(void 0),(s||this.rt!==this.lt)&&(this.G=t,this.dt=(e=i.options)===null||e===void 0?void 0:e.host,this.ot(this.lt=i.element)),u}ot(i){var t;if(typeof this.G=="function"){const e=(t=this.dt)!==null&&t!==void 0?t:globalThis;let s=K.get(e);s===void 0&&(s=new WeakMap,K.set(e,s)),s.get(this.G)!==void 0&&this.G.call(this.dt,void 0),s.set(this.G,i),i!==void 0&&this.G.call(this.dt,i)}else this.G.value=i}get rt(){var i,t,e;return typeof this.G=="function"?(t=K.get((i=this.dt)!==null&&i!==void 0?i:globalThis))===null||t===void 0?void 0:t.get(this.G):(e=this.G)===null||e===void 0?void 0:e.value}disconnected(){this.rt===this.lt&&this.ot(void 0)}reconnected(){this.ot(this.lt)}});var qt=Object.defineProperty,Jt=Object.getOwnPropertyDescriptor,_=(i,t,e,s)=>{for(var n=s>1?void 0:s?Jt(t,e):t,r=i.length-1,o;r>=0;r--)(o=i[r])&&(n=(s?o(t,e,n):o(n))||n);return s&&n&&qt(t,e,n),n};function Ft(i){return customElements.get(i)?t=>t:Mt(i)}let p=class extends U{constructor(){super(),this.GISCUS_SESSION_KEY="giscus-session",this.GISCUS_DEFAULT_HOST="https://giscus.app",this.ERROR_SUGGESTION="Please consider reporting this error at https://github.com/giscus/giscus/issues/new.",this.__session="",this._iframeRef=Wt(),this.messageEventHandler=this.handleMessageEvent.bind(this),this.hasLoaded=!1,this.host=this.GISCUS_DEFAULT_HOST,this.strict="0",this.reactionsEnabled="1",this.emitMetadata="0",this.inputPosition="bottom",this.theme="light",this.lang="en",this.loading="eager",this.setupSession(),window.addEventListener("message",this.messageEventHandler)}get iframeRef(){var i;return(i=this._iframeRef)==null?void 0:i.value}get _host(){try{return new URL(this.host),this.host}catch{return this.GISCUS_DEFAULT_HOST}}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("message",this.messageEventHandler)}_formatError(i){return`[giscus] An error occurred. Error message: "${i}".`}setupSession(){const i=location.href,t=new URL(i),e=localStorage.getItem(this.GISCUS_SESSION_KEY),s=t.searchParams.get("giscus")||"";if(this.__session="",s){localStorage.setItem(this.GISCUS_SESSION_KEY,JSON.stringify(s)),this.__session=s,t.searchParams.delete("giscus"),t.hash="",history.replaceState(void 0,document.title,t.toString());return}if(e)try{this.__session=JSON.parse(e)}catch(n){localStorage.removeItem(this.GISCUS_SESSION_KEY),console.warn(`${this._formatError(n==null?void 0:n.message)} Session has been cleared.`)}}signOut(){localStorage.removeItem(this.GISCUS_SESSION_KEY),this.__session="",this.update(new Map)}handleMessageEvent(i){if(i.origin!==this._host)return;const{data:t}=i;if(!(typeof t=="object"&&t.giscus))return;if(this.iframeRef&&t.giscus.resizeHeight&&(this.iframeRef.style.height=`${t.giscus.resizeHeight}px`),t.giscus.signOut){console.log("[giscus] User has logged out. Session has been cleared."),this.signOut();return}if(!t.giscus.error)return;const e=t.giscus.error;if(e.includes("Bad credentials")||e.includes("Invalid state value")||e.includes("State has expired")){if(localStorage.getItem(this.GISCUS_SESSION_KEY)!==null){console.warn(`${this._formatError(e)} Session has been cleared.`),this.signOut();return}console.error(`${this._formatError(e)} No session is stored initially. ${this.ERROR_SUGGESTION}`)}if(e.includes("Discussion not found")){console.warn(`[giscus] ${e}. A new discussion will be created if a comment/reaction is submitted.`);return}console.error(`${this._formatError(e)} ${this.ERROR_SUGGESTION}`)}sendMessage(i){!this.iframeRef||!this.iframeRef.contentWindow||!this.hasLoaded||(console.log({host:this.host,_host:this._host}),this.iframeRef.contentWindow.postMessage({giscus:i},this._host))}updateConfig(){const i={setConfig:{repo:this.repo,repoId:this.repoId,category:this.category,categoryId:this.categoryId,term:this.getTerm(),number:+this.getNumber(),strict:this.strict==="1",reactionsEnabled:this.reactionsEnabled==="1",emitMetadata:this.emitMetadata==="1",inputPosition:this.inputPosition,theme:this.theme,lang:this.lang}};this.sendMessage(i)}firstUpdated(){var i;(i=this.iframeRef)==null||i.addEventListener("load",()=>{var t;(t=this.iframeRef)==null||t.classList.remove("loading"),this.hasLoaded=!0,this.updateConfig()})}requestUpdate(i,t,e){if(!this.hasUpdated||i==="host"){super.requestUpdate(i,t,e);return}this.updateConfig()}getMetaContent(i,t=!1){const e=t?`meta[property='og:${i}'],`:"",s=document.querySelector(e+`meta[name='${i}']`);return s?s.content:""}_getCleanedUrl(){const i=new URL(location.href);return i.searchParams.delete("giscus"),i.hash="",i}getTerm(){switch(this.mapping){case"url":return`${this._getCleanedUrl()}`;case"title":return document.title;case"og:title":return this.getMetaContent("title",!0);case"specific":return this.term||"";case"number":return"";case"pathname":default:return location.pathname.length<2?"index":location.pathname.substring(1).replace(/\.\w+$/,"")}}getNumber(){return this.mapping==="number"&&this.term||""}getIframeSrc(){const i=this._getCleanedUrl().toString(),t=`${i}${this.id?"#"+this.id:""}`,e=this.getMetaContent("description",!0),s=this.getMetaContent("giscus:backlink")||i,n={origin:t,session:this.__session,repo:this.repo,repoId:this.repoId||"",category:this.category||"",categoryId:this.categoryId||"",term:this.getTerm(),number:this.getNumber(),strict:this.strict,reactionsEnabled:this.reactionsEnabled,emitMetadata:this.emitMetadata,inputPosition:this.inputPosition,theme:this.theme,description:e,backLink:s},r=this._host,o=this.lang?`/${this.lang}`:"",a=new URLSearchParams(n);return`${r}${o}/widget?${a}`}render(){return Ct`
      <iframe
        title="Comments"
        scrolling="no"
        class="loading"
        ${Yt(this._iframeRef)}
        src=${this.getIframeSrc()}
        loading=${this.loading}
        allow="clipboard-write"
        part="iframe"
      ></iframe>
    `}};p.styles=mt`
    :host,
    iframe {
      width: 100%;
      border: none;
      min-height: 150px;
      color-scheme: light dark;
    }

    iframe.loading {
      opacity: 0;
    }
  `;_([v({reflect:!0})],p.prototype,"host",2);_([v({reflect:!0})],p.prototype,"repo",2);_([v({reflect:!0})],p.prototype,"repoId",2);_([v({reflect:!0})],p.prototype,"category",2);_([v({reflect:!0})],p.prototype,"categoryId",2);_([v({reflect:!0})],p.prototype,"mapping",2);_([v({reflect:!0})],p.prototype,"term",2);_([v({reflect:!0})],p.prototype,"strict",2);_([v({reflect:!0})],p.prototype,"reactionsEnabled",2);_([v({reflect:!0})],p.prototype,"emitMetadata",2);_([v({reflect:!0})],p.prototype,"inputPosition",2);_([v({reflect:!0})],p.prototype,"theme",2);_([v({reflect:!0})],p.prototype,"lang",2);_([v({reflect:!0})],p.prototype,"loading",2);p=_([Ft("giscus-widget")],p);export{p as GiscusWidget};
