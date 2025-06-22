var gh=(r,t)=>()=>(t||r((t={exports:{}}).exports,t),t.exports);import{a as He,O as xs,L as bs,E as yh,B as xh,b as bh}from"./constants-kQ1x9rLg.js";var qx=gh(($x,ph)=>{/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */var Tu=function(r,t){return(Tu=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var o in n)n.hasOwnProperty(o)&&(e[o]=n[o])})(r,t)};function kt(r,t){function e(){this.constructor=r}Tu(r,t),r.prototype=t===null?Object.create(t):(e.prototype=t.prototype,new e)}function X(r,t,e,n){return new(e||(e=Promise))(function(o,i){function a(c){try{u(n.next(c))}catch(l){i(l)}}function s(c){try{u(n.throw(c))}catch(l){i(l)}}function u(c){c.done?o(c.value):new e(function(l){l(c.value)}).then(a,s)}u((n=n.apply(r,[])).next())})}function $(r,t){var e,n,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},typeof Symbol=="function"&&(i[Symbol.iterator]=function(){return this}),i;function s(u){return function(c){return function(l){if(e)throw new TypeError("Generator is already executing.");for(;a;)try{if(e=1,n&&(o=2&l[0]?n.return:l[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,l[1])).done)return o;switch(n=0,o&&(l=[2&l[0],o.value]),l[0]){case 0:case 1:o=l;break;case 4:return a.label++,{value:l[1],done:!1};case 5:a.label++,n=l[1],l=[0];continue;case 7:l=a.ops.pop(),a.trys.pop();continue;default:if(!(o=(o=a.trys).length>0&&o[o.length-1])&&(l[0]===6||l[0]===2)){a=0;continue}if(l[0]===3&&(!o||l[1]>o[0]&&l[1]<o[3])){a.label=l[1];break}if(l[0]===6&&a.label<o[1]){a.label=o[1],o=l;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(l);break}o[2]&&a.ops.pop(),a.trys.pop();continue}l=t.call(r,a)}catch(h){l=[6,h],n=0}finally{e=o=0}if(5&l[0])throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}([u,c])}}}var wh=function(){function r(t){this.global=t,this.flags={},this.flagRegistry={},this.urlFlags={},this.populateURLFlags()}return r.prototype.setPlatform=function(t,e){this.platform!=null&&console.warn("Platform "+this.platformName+" has already been set. Overwriting the platform with "+e+"."),this.platformName=t,this.platform=e},r.prototype.registerFlag=function(t,e,n){if(this.flagRegistry[t]={evaluationFn:e,setHook:n},this.urlFlags[t]!=null){var o=this.urlFlags[t];console.warn("Setting feature override from URL "+t+": "+o+"."),this.set(t,o)}},r.prototype.get=function(t){return t in this.flags?this.flags[t]:(this.flags[t]=this.evaluateFlag(t),this.flags[t])},r.prototype.getNumber=function(t){return this.get(t)},r.prototype.getBool=function(t){return this.get(t)},r.prototype.getFlags=function(){return this.flags},Object.defineProperty(r.prototype,"features",{get:function(){return this.flags},enumerable:!0,configurable:!0}),r.prototype.set=function(t,e){if(this.flagRegistry[t]==null)throw new Error("Cannot set flag "+t+" as it has not been registered.");this.flags[t]=e,this.flagRegistry[t].setHook!=null&&this.flagRegistry[t].setHook(e)},r.prototype.evaluateFlag=function(t){if(this.flagRegistry[t]==null)throw new Error("Cannot evaluate flag '"+t+"': no evaluation function found.");return this.flagRegistry[t].evaluationFn()},r.prototype.setFlags=function(t){this.flags=Object.assign({},t)},r.prototype.reset=function(){this.flags={},this.urlFlags={},this.populateURLFlags()},r.prototype.populateURLFlags=function(){var t=this;if(this.global!==void 0&&this.global.location!==void 0&&this.global.location.search!==void 0){var e,n,o=(e=this.global.location.search,n={},e.replace(/[?&]([^=?&]+)(?:=([^&]*))?/g,function(i){for(var a=[],s=1;s<arguments.length;s++)a[s-1]=arguments[s];return _h(n,a[0],a[1]),a.join("=")}),n);"tfjsflags"in o&&o.tfjsflags.split(",").forEach(function(i){var a=i.split(":"),s=a[0],u=a[1];t.urlFlags[s]=function(c,l){if((l=l.toLowerCase())==="true"||l==="false")return l==="true";if(""+ +l===l)return+l;throw new Error("Could not parse value flag value "+l+" for flag "+c+".")}(s,u)})}},r}();function _h(r,t,e){r[decodeURIComponent(t)]=decodeURIComponent(e||"")}function L(){return Du}var Du=null,uo=new Map,Fi=new Map;function Nu(r,t){var e=Pu(r,t);return uo.get(e)}function Ch(r){return Fi.get(r)}function ws(r){for(var t=uo.entries(),e=[];;){var n=t.next(),o=n.done,i=n.value;if(o)break;var a=i[0],s=i[1];a.split("_")[0]===r&&e.push(s)}return e}function Fu(r){var t=r.kernelName,e=r.backendName,n=Pu(t,e);if(uo.has(n))throw new Error("The kernel '"+t+"' for backend '"+e+"' is already registered");uo.set(n,r)}function Eh(r){var t=r.kernelName;Fi.has(t)&&console.warn("Overriding the gradient for '"+t+"'"),Fi.set(t,r)}function Pu(r,t){return t+"_"+r}function Pi(r,t,e){return Math.max(r,Math.min(t,e))}function Ou(r){return r%2==0?r:r+1}function Rh(r){for(var t=0,e=0;e<r.length;e++)t+=r[e];return t}function k(r,t){if(!r)throw new Error(typeof t=="string"?t:t())}function be(r,t,e){e===void 0&&(e=""),k(ze(r,t),function(){return e+" Shapes "+r+" and "+t+" must match"})}function ar(r){k(r!=null,function(){return"The input to the tensor constructor must be a non-null value."})}function nr(r,t,e){if(t===void 0&&(t=[]),e===void 0&&(e=!1),t==null&&(t=[]),Array.isArray(r)||Bt(r)&&!e)for(var n=0;n<r.length;++n)nr(r[n],t,e);else t.push(r);return t}function Y(r){if(r.length===0)return 1;for(var t=r[0],e=1;e<r.length;e++)t*=r[e];return t}function ze(r,t){if(r===t)return!0;if(r==null||t==null||r.length!==t.length)return!1;for(var e=0;e<r.length;e++)if(r[e]!==t[e])return!1;return!0}function Ne(r){return r%1==0}function kh(r){if(Math.tanh!=null)return Math.tanh(r);if(r===1/0)return 1;if(r===-1/0)return-1;var t=Math.exp(2*r);return(t-1)/(t+1)}function Oi(r){var t=Math.ceil(Math.sqrt(r));return[t,Math.ceil(r/t)]}function $n(r,t){return t<=r.length?r:r+" ".repeat(t-r.length)}function _s(r,t,e){return t===void 0&&(t=function(n){return 0}),new Promise(function(n,o){var i=0,a=function(){if(r())n();else{i++;var s=t(i);e!=null&&i>=e?o():setTimeout(a,s)}};a()})}function Ih(r,t){for(var e=1,n=-1,o=0;o<r.length;++o)if(r[o]>=0)e*=r[o];else if(r[o]===-1){if(n!==-1)throw Error("Shapes can only have 1 implicit size. Found -1 at dim "+n+" and dim "+o);n=o}else if(r[o]<0)throw Error("Shapes can not be < 0. Found "+r[o]+" at dim "+o);if(n===-1){if(t>0&&t!==e)throw Error("Size("+t+") must match the product of shape "+r);return r}if(e===0)throw Error("Cannot infer the missing size in ["+r+"] when there are 0 elements");if(t%e!=0)throw Error("The implicit shape can't be a fractional number. Got "+t+" / "+e);var i=r.slice();return i[n]=t/e,i}function Ue(r,t){var e=t.length;return k((r=r==null?t.map(function(n,o){return o}):[].concat(r)).every(function(n){return n>=-e&&n<e}),function(){return"All values in axis param must be in range [-"+e+", "+e+") but got axis "+r}),k(r.every(function(n){return Ne(n)}),function(){return"All values in axis param must be integers but got axis "+r}),r.map(function(n){return n<0?e+n:n})}function kn(r,t){for(var e=[],n=[],o=t!=null&&Array.isArray(t)&&t.length===0,i=t==null||o?null:Ue(t,r).sort(),a=0,s=0;s<r.length;++s){if(i!=null){if(i[a]===s&&r[s]!==1)throw new Error("Can't squeeze axis "+s+" since its dim '"+r[s]+"' is not 1");(i[a]==null||i[a]>s)&&r[s]===1&&(e.push(r[s]),n.push(s)),i[a]<=s&&a++}r[s]!==1&&(e.push(r[s]),n.push(s))}return{newShape:e,keptDims:n}}function yr(r,t){var e=null;if(r==null||r==="float32")e=new Float32Array(t);else if(r==="int32")e=new Int32Array(t);else{if(r!=="bool")throw new Error("Unknown data type "+r);e=new Uint8Array(t)}return e}function co(r,t){var e=null;if(r==null||r==="float32")e=new Float32Array(t);else if(r==="int32")e=new Int32Array(t);else if(r==="bool")e=new Uint8Array(t);else{if(r!=="string")throw new Error("Unknown data type "+r);e=new Array(t)}return e}function Sh(r,t){for(var e=0;e<r.length;e++){var n=r[e];if(isNaN(n)||!isFinite(n))throw Error("A tensor of type "+t+" being uploaded contains "+n+".")}}function Ah(r){return r==="bool"||r==="complex64"||r==="float32"||r==="int32"||r==="string"}function Th(r,t){return t!=="complex64"&&(t!=="float32"||r==="complex64")&&(t!=="int32"||r==="float32"||r==="complex64")&&(t!=="bool"||r!=="bool")}function Bt(r){return r instanceof Float32Array||r instanceof Int32Array||r instanceof Uint8Array}function Mu(r){if(r==="float32"||r==="int32")return 4;if(r==="complex64")return 8;if(r==="bool")return 1;throw new Error("Unknown dtype "+r)}function Dh(r){if(r==null)return 0;var t=0;return r.forEach(function(e){return t+=e.length}),t}function ua(r){return typeof r=="string"||r instanceof String}function Nh(r){return typeof r=="boolean"}function Fh(r){return typeof r=="number"}function Sr(r){return Array.isArray(r)?Sr(r[0]):r instanceof Float32Array?"float32":r instanceof Int32Array||r instanceof Uint8Array?"int32":Fh(r)?"float32":ua(r)?"string":Nh(r)?"bool":"float32"}function Mi(r){return!!(r&&r.constructor&&r.call&&r.apply)}function Bi(r,t){for(var e=t;e<r;++e)if(r%e==0)return e;return r}function Lt(r){var t=r.length;if(t<2)return[];var e=new Array(t-1);e[t-2]=r[t-1];for(var n=t-3;n>=0;--n)e[n]=e[n+1]*r[n+1];return e}function Bu(r,t,e){if(t==="string")throw new Error("Cannot convert a string[] to a TypedArray");if(Array.isArray(r)&&(r=nr(r)),e&&Sh(r,t),function(i,a){return i instanceof Float32Array&&a==="float32"||i instanceof Int32Array&&a==="int32"||i instanceof Uint8Array&&a==="bool"}(r,t))return r;if(t==null||t==="float32"||t==="complex64")return new Float32Array(r);if(t==="int32")return new Int32Array(r);if(t==="bool"){for(var n=new Uint8Array(r.length),o=0;o<n.length;++o)Math.round(r[o])!==0&&(n[o]=1);return n}throw new Error("Unknown data type "+t)}function Cs(r,t){if(r.length===0)return t[0];var e=r.reduce(function(n,o){return n*o});if(e===0)return[];if(e!==t.length)throw new Error("["+r+"] does not match the input size.");return function n(o,i,a){var s=new Array;if(i.length===1)for(var u=i[0],c=0;c<u;c++)s[c]=a[o+c];else{u=i[0];var l=i.slice(1),h=l.reduce(function(f,p){return f*p});for(c=0;c<u;c++)s[c]=n(o+c*h,l,a)}return s}(0,r,t)}function Lu(r,t){for(var e=Ar(r,t),n=0;n<e.length;n++)e[n]=1;return e}function Ar(r,t){if(t==null||t==="float32"||t==="complex64")return new Float32Array(r);if(t==="int32")return new Int32Array(r);if(t==="bool")return new Uint8Array(r);throw new Error("Unknown data type "+t)}function Ft(){return L().platform.now()}function Wu(r){r.forEach(function(t){k(Number.isInteger(t)&&t>=0,function(){return"Tensor must have a shape comprised of positive integers but got shape ["+r+"]."})})}function Ph(r,t){return t===void 0&&(t="utf-8"),t=t||"utf-8",L().platform.encode(r,t)}function lo(r,t){return t===void 0&&(t="utf-8"),t=t||"utf-8",L().platform.decode(r,t)}function Es(r,t,e){if(t===0)return 0;if(t===1)return r[0];for(var n=r[r.length-1],o=0;o<r.length-1;++o)n+=e[o]*r[o];return n}function Oh(r,t,e){if(t===0)return[];if(t===1)return[r];for(var n=new Array(t),o=0;o<n.length-1;++o)n[o]=Math.floor(r/e[o]),r-=n[o]*e[o];return n[n.length-1]=r,n}var Mh=function(){function r(t,e){this.backendTimer=t,this.logger=e,e==null&&(this.logger=new Bh)}return r.prototype.profileKernel=function(t,e,n){var o,i=this,a=this.backendTimer.time(function(){o=n()});return o.forEach(function(s){s.data().then(function(u){(function(c,l,h){if(l!=="float32")return!1;for(var f=0;f<c.length;f++){var p=c[f];if(isNaN(p)||!isFinite(p))return console.warn("Found "+p+" in the result of '"+h+"'"),!0}})(u,s.dtype,t),a.then(function(c){var l="";c.getExtraProfileInfo!=null&&(l=c.getExtraProfileInfo()),i.logger.logKernelProfile(t,s,u,c.kernelMs,e,l)})})}),o},r}(),Bh=function(){function r(){}return r.prototype.logKernelProfile=function(t,e,n,o,i,a){var s=typeof o=="number"?$n(o+"ms",9):o.error,u=$n(t,25),c=e.rank,l=e.size,h=$n(e.shape.toString(),14),f="";for(var p in i){var d=i[p].shape||e.shape,m=d.length;f+=p+": "+m+"D "+(m>0?d:"")+" "}console.log("%c"+u+"	%c"+s+"	%c"+c+"D "+h+"	%c"+l+"	%c"+f+"	%c"+a,"font-weight:bold","color:red","color:blue","color: orange","color: green","color: steelblue")},r}(),Rs=20,cr=3,ti=7;function Lh(r,t,e,n){var o=Lt(t),i=function(c,l,h,f){var p=Y(l),d=f[f.length-1],m=new Array(d).fill(0),v=l.length,g=h==="complex64"?hr(c):c;if(v>1)for(var x=0;x<p/d;x++)for(var b=x*d,y=0;y<d;y++)m[y]=Math.max(m[y],lr(g[b+y],0,h).length);return m}(r,t,e,o),a=t.length,s=function c(l,h,f,p,d,m){m===void 0&&(m=!0);var v=f==="complex64"?2:1,g=h[0],x=h.length;if(x===0)return f==="complex64"?[lr(hr(l)[0],0,f)]:f==="bool"?[Uu(l[0])]:[l[0].toString()];if(x===1){if(g>Rs){var b=cr*v,y=Array.from(l.slice(0,b)),w=Array.from(l.slice((g-cr)*v,g*v));return f==="complex64"&&(y=hr(y),w=hr(w)),["["+y.map(function(B,V){return lr(B,d[V],f)}).join(", ")+", ..., "+w.map(function(B,V){return lr(B,d[g-cr+V],f)}).join(", ")+"]"]}return["["+(f==="complex64"?hr(l):Array.from(l)).map(function(B,V){return lr(B,d[V],f)}).join(", ")+"]"]}var _=h.slice(1),S=p.slice(1),I=p[0]*v,E=[];if(g>Rs){for(var R=0;R<cr;R++){var D=(A=R*I)+I;E.push.apply(E,c(l.slice(A,D),_,f,S,d,!1))}for(E.push("..."),R=g-cr;R<g;R++)D=(A=R*I)+I,E.push.apply(E,c(l.slice(A,D),_,f,S,d,R===g-1))}else for(R=0;R<g;R++){var A;D=(A=R*I)+I,E.push.apply(E,c(l.slice(A,D),_,f,S,d,R===g-1))}var M=x===2?",":"";for(E[0]="["+E[0]+M,R=1;R<E.length-1;R++)E[R]=" "+E[R]+M;var O=`,
`;for(R=2;R<x;R++)O+=`
`;return E[E.length-1]=" "+E[E.length-1]+"]"+(m?"":O),E}(r,t,e,o,i),u=["Tensor"];return n&&(u.push("  dtype: "+e),u.push("  rank: "+a),u.push("  shape: ["+t+"]"),u.push("  values:")),u.push(s.map(function(c){return"    "+c}).join(`
`)),u.join(`
`)}function lr(r,t,e){return $n(Array.isArray(r)?parseFloat(r[0].toFixed(ti))+" + "+parseFloat(r[1].toFixed(ti))+"j":ua(r)?"'"+r+"'":e==="bool"?Uu(r):parseFloat(r.toFixed(ti)).toString(),t)}function Uu(r){return r===0?"false":"true"}function hr(r){for(var t=[],e=0;e<r.length;e+=2)t.push([r[e],r[e+1]]);return t}var xr=function(){function r(t,e,n){var o=this;if(this.dtype=e,this.shape=t.slice(),this.size=Y(t),n!=null){var i=n.length;k(i===this.size,function(){return"Length of values '"+i+"' does not match the size inferred by the shape '"+o.size+"'."})}if(e==="complex64")throw new Error("complex64 dtype TensorBuffers are not supported. Please create a TensorBuffer for the real and imaginary parts separately and call tf.complex(real, imag).");this.values=n||co(e,this.size),this.strides=Lt(t)}return r.prototype.set=function(t){for(var e=this,n=[],o=1;o<arguments.length;o++)n[o-1]=arguments[o];n.length===0&&(n=[0]),k(n.length===this.rank,function(){return"The number of provided coordinates ("+n.length+") must match the rank ("+e.rank+")"});var i=this.locToIndex(n);this.values[i]=t},r.prototype.get=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];t.length===0&&(t=[0]);for(var n=0,o=0,i=t;o<i.length;o++){var a=i[o];if(a<0||a>=this.shape[n]){var s="Requested out of range element at "+t+".   Buffer shape="+this.shape;throw new Error(s)}n++}for(var u=t[t.length-1],c=0;c<t.length-1;++c)u+=this.strides[c]*t[c];return this.values[u]},r.prototype.locToIndex=function(t){if(this.rank===0)return 0;if(this.rank===1)return t[0];for(var e=t[t.length-1],n=0;n<t.length-1;++n)e+=this.strides[n]*t[n];return e},r.prototype.indexToLoc=function(t){if(this.rank===0)return[];if(this.rank===1)return[t];for(var e=new Array(this.shape.length),n=0;n<e.length-1;++n)e[n]=Math.floor(t/this.strides[n]),t-=e[n]*this.strides[n];return e[e.length-1]=t,e},Object.defineProperty(r.prototype,"rank",{get:function(){return this.shape.length},enumerable:!0,configurable:!0}),r.prototype.toTensor=function(){return Pt().makeTensor(this.values,this.shape,this.dtype)},r}(),Pt=null,P=null,Vu=null,ke=function(){function r(t,e,n,o){this.kept=!1,this.isDisposedInternal=!1,this.shape=t.slice(),this.dtype=e||"float32",this.size=Y(t),this.strides=Lt(t),this.dataId=n,this.id=o,this.rankType=this.rank<5?this.rank.toString():"higher"}return r.prototype.flatten=function(){return this.throwIfDisposed(),this.as1D()},r.prototype.asScalar=function(){return this.throwIfDisposed(),k(this.size===1,function(){return"The array must have only 1 element."}),this.reshape([])},r.prototype.as1D=function(){return this.throwIfDisposed(),this.reshape([this.size])},r.prototype.as2D=function(t,e){return this.throwIfDisposed(),this.reshape([t,e])},r.prototype.as3D=function(t,e,n){return this.throwIfDisposed(),this.reshape([t,e,n])},r.prototype.as4D=function(t,e,n,o){return this.throwIfDisposed(),this.reshape([t,e,n,o])},r.prototype.as5D=function(t,e,n,o,i){return this.throwIfDisposed(),this.reshape([t,e,n,o,i])},r.prototype.asType=function(t){return this.throwIfDisposed(),P.cast(this,t)},Object.defineProperty(r.prototype,"rank",{get:function(){return this.shape.length},enumerable:!0,configurable:!0}),r.prototype.buffer=function(){return X(this,void 0,void 0,function(){var t;return $(this,function(e){switch(e.label){case 0:return[4,this.data()];case 1:return t=e.sent(),[2,P.buffer(this.shape,this.dtype,t)]}})})},r.prototype.bufferSync=function(){return P.buffer(this.shape,this.dtype,this.dataSync())},r.prototype.array=function(){return X(this,void 0,void 0,function(){var t;return $(this,function(e){switch(e.label){case 0:return[4,this.data()];case 1:return t=e.sent(),[2,Cs(this.shape,t)]}})})},r.prototype.arraySync=function(){return Cs(this.shape,this.dataSync())},r.prototype.data=function(){return X(this,void 0,void 0,function(){var t,e;return $(this,function(n){switch(n.label){case 0:return this.throwIfDisposed(),t=Pt().read(this.dataId),this.dtype!=="string"?[3,2]:[4,t];case 1:e=n.sent();try{return[2,e.map(function(o){return lo(o)})]}catch{throw new Error("Failed to decode the string bytes into utf-8. To get the original bytes, call tensor.bytes().")}n.label=2;case 2:return[2,t]}})})},r.prototype.dataSync=function(){this.throwIfDisposed();var t=Pt().readSync(this.dataId);if(this.dtype==="string")try{return t.map(function(e){return lo(e)})}catch{throw new Error("Failed to decode the string bytes into utf-8. To get the original bytes, call tensor.bytes().")}return t},r.prototype.bytes=function(){return X(this,void 0,void 0,function(){var t;return $(this,function(e){switch(e.label){case 0:return this.throwIfDisposed(),[4,Pt().read(this.dataId)];case 1:return t=e.sent(),this.dtype==="string"?[2,t]:[2,new Uint8Array(t.buffer)]}})})},r.prototype.dispose=function(){this.isDisposed||(Pt().disposeTensor(this),this.isDisposedInternal=!0)},Object.defineProperty(r.prototype,"isDisposed",{get:function(){return this.isDisposedInternal},enumerable:!0,configurable:!0}),r.prototype.throwIfDisposed=function(){if(this.isDisposed)throw new Error("Tensor is disposed.")},r.prototype.toFloat=function(){return this.asType("float32")},r.prototype.toInt=function(){return this.asType("int32")},r.prototype.toBool=function(){return this.asType("bool")},r.prototype.print=function(t){return t===void 0&&(t=!1),P.print(this,t)},r.prototype.reshape=function(t){return this.throwIfDisposed(),P.reshape(this,t)},r.prototype.reshapeAs=function(t){return this.throwIfDisposed(),this.reshape(t.shape)},r.prototype.expandDims=function(t){return t===void 0&&(t=0),P.expandDims(this,t)},r.prototype.cumsum=function(t,e,n){return t===void 0&&(t=0),e===void 0&&(e=!1),n===void 0&&(n=!1),P.cumsum(this,t,e,n)},r.prototype.squeeze=function(t){return this.throwIfDisposed(),P.squeeze(this,t)},r.prototype.clone=function(){return this.throwIfDisposed(),P.clone(this)},r.prototype.oneHot=function(t,e,n){return this.throwIfDisposed(),P.oneHot(this,t,e,n)},r.prototype.toString=function(t){return t===void 0&&(t=!1),Lh(this.dataSync(),this.shape,this.dtype,t)},r.prototype.tile=function(t){return this.throwIfDisposed(),P.tile(this,t)},r.prototype.gather=function(t,e){return e===void 0&&(e=0),this.throwIfDisposed(),P.gather(this,t,e)},r.prototype.matMul=function(t,e,n){return e===void 0&&(e=!1),n===void 0&&(n=!1),this.throwIfDisposed(),P.matMul(this,t,e,n)},r.prototype.dot=function(t){return this.throwIfDisposed(),P.dot(this,t)},r.prototype.norm=function(t,e,n){return t===void 0&&(t="euclidean"),e===void 0&&(e=null),n===void 0&&(n=!1),this.throwIfDisposed(),P.norm(this,t,e,n)},r.prototype.slice=function(t,e){return this.throwIfDisposed(),P.slice(this,t,e)},r.prototype.reverse=function(t){return this.throwIfDisposed(),P.reverse(this,t)},r.prototype.concat=function(t,e){return e===void 0&&(e=0),this.throwIfDisposed(),t instanceof r&&(t=[t]),P.concat([this].concat(t),e)},r.prototype.split=function(t,e){return e===void 0&&(e=0),this.throwIfDisposed(),P.split(this,t,e)},r.prototype.stack=function(t,e){return e===void 0&&(e=0),P.stack([this,t],e)},r.prototype.unstack=function(t){return t===void 0&&(t=0),P.unstack(this,t)},r.prototype.pad=function(t,e){return e===void 0&&(e=0),P.pad(this,t,e)},r.prototype.batchNormalization=function(t,e,n,o,i){return n===void 0&&(n=.001),Vu("tf.batchNormalization() is going away. Use tf.batchNorm() instead, and note the positional argument change of scale, offset, and varianceEpsilon"),this.batchNorm(t,e,i,o,n)},r.prototype.batchNorm=function(t,e,n,o,i){return i===void 0&&(i=.001),this.throwIfDisposed(),P.batchNorm(this,t,e,n,o,i)},r.prototype.all=function(t,e){return t===void 0&&(t=null),e===void 0&&(e=!1),this.throwIfDisposed(),P.all(this,t,e)},r.prototype.any=function(t,e){return t===void 0&&(t=null),e===void 0&&(e=!1),this.throwIfDisposed(),P.any(this,t,e)},r.prototype.logSumExp=function(t,e){return t===void 0&&(t=null),e===void 0&&(e=!1),this.throwIfDisposed(),P.logSumExp(this,t,e)},r.prototype.sum=function(t,e){return t===void 0&&(t=null),e===void 0&&(e=!1),this.throwIfDisposed(),P.sum(this,t,e)},r.prototype.prod=function(t,e){return t===void 0&&(t=null),e===void 0&&(e=!1),this.throwIfDisposed(),P.prod(this,t,e)},r.prototype.mean=function(t,e){return t===void 0&&(t=null),e===void 0&&(e=!1),this.throwIfDisposed(),P.mean(this,t,e)},r.prototype.min=function(t,e){return t===void 0&&(t=null),e===void 0&&(e=!1),this.throwIfDisposed(),P.min(this,t,e)},r.prototype.max=function(t,e){return t===void 0&&(t=null),e===void 0&&(e=!1),this.throwIfDisposed(),P.max(this,t,e)},r.prototype.argMin=function(t){return t===void 0&&(t=null),this.throwIfDisposed(),P.argMin(this,t)},r.prototype.argMax=function(t){return t===void 0&&(t=null),this.throwIfDisposed(),P.argMax(this,t)},r.prototype.cast=function(t){return this.throwIfDisposed(),P.cast(this,t)},r.prototype.add=function(t){return this.throwIfDisposed(),P.add(this,t)},r.prototype.addStrict=function(t){return this.throwIfDisposed(),P.addStrict(this,t)},r.prototype.atan2=function(t){return this.throwIfDisposed(),P.atan2(this,t)},r.prototype.sub=function(t){return this.throwIfDisposed(),P.sub(this,t)},r.prototype.subStrict=function(t){return this.throwIfDisposed(),P.subStrict(this,t)},r.prototype.pow=function(t){return this.throwIfDisposed(),P.pow(this,t)},r.prototype.powStrict=function(t){return this.throwIfDisposed(),P.powStrict(this,t)},r.prototype.mul=function(t){return this.throwIfDisposed(),P.mul(this,t)},r.prototype.mulStrict=function(t){return this.throwIfDisposed(),P.mulStrict(this,t)},r.prototype.div=function(t){return this.throwIfDisposed(),P.div(this,t)},r.prototype.divNoNan=function(t){return this.throwIfDisposed(),P.divNoNan(this,t)},r.prototype.floorDiv=function(t){return this.throwIfDisposed(),P.floorDiv(this,t)},r.prototype.divStrict=function(t){return this.throwIfDisposed(),P.divStrict(this,t)},r.prototype.minimum=function(t){return this.throwIfDisposed(),P.minimum(this,t)},r.prototype.minimumStrict=function(t){return this.throwIfDisposed(),P.minimumStrict(this,t)},r.prototype.maximum=function(t){return this.throwIfDisposed(),P.maximum(this,t)},r.prototype.maximumStrict=function(t){return this.throwIfDisposed(),P.maximumStrict(this,t)},r.prototype.mod=function(t){return this.throwIfDisposed(),P.mod(this,t)},r.prototype.modStrict=function(t){return this.throwIfDisposed(),P.modStrict(this,t)},r.prototype.squaredDifferenceStrict=function(t){return this.throwIfDisposed(),P.squaredDifferenceStrict(this,t)},r.prototype.transpose=function(t){return this.throwIfDisposed(),P.transpose(this,t)},r.prototype.notEqual=function(t){return this.throwIfDisposed(),P.notEqual(this,t)},r.prototype.notEqualStrict=function(t){return this.throwIfDisposed(),P.notEqualStrict(this,t)},r.prototype.less=function(t){return this.throwIfDisposed(),P.less(this,t)},r.prototype.lessStrict=function(t){return this.throwIfDisposed(),P.lessStrict(this,t)},r.prototype.equal=function(t){return this.throwIfDisposed(),P.equal(this,t)},r.prototype.equalStrict=function(t){return this.throwIfDisposed(),P.equalStrict(this,t)},r.prototype.lessEqual=function(t){return this.throwIfDisposed(),P.lessEqual(this,t)},r.prototype.lessEqualStrict=function(t){return this.throwIfDisposed(),P.lessEqualStrict(this,t)},r.prototype.greater=function(t){return this.throwIfDisposed(),P.greater(this,t)},r.prototype.greaterStrict=function(t){return this.throwIfDisposed(),P.greaterStrict(this,t)},r.prototype.greaterEqual=function(t){return this.throwIfDisposed(),P.greaterEqual(this,t)},r.prototype.greaterEqualStrict=function(t){return this.throwIfDisposed(),P.greaterEqualStrict(this,t)},r.prototype.logicalAnd=function(t){return this.throwIfDisposed(),P.logicalAnd(this,t)},r.prototype.logicalOr=function(t){return this.throwIfDisposed(),P.logicalOr(this,t)},r.prototype.logicalNot=function(){return this.throwIfDisposed(),P.logicalNot(this)},r.prototype.logicalXor=function(t){return this.throwIfDisposed(),P.logicalXor(this,t)},r.prototype.where=function(t,e){return this.throwIfDisposed(),P.where(t,this,e)},r.prototype.neg=function(){return this.throwIfDisposed(),P.neg(this)},r.prototype.ceil=function(){return this.throwIfDisposed(),P.ceil(this)},r.prototype.floor=function(){return this.throwIfDisposed(),P.floor(this)},r.prototype.sign=function(){return this.throwIfDisposed(),P.sign(this)},r.prototype.isNaN=function(){return this.throwIfDisposed(),P.isNaN(this)},r.prototype.isInf=function(){return this.throwIfDisposed(),P.isInf(this)},r.prototype.isFinite=function(){return this.throwIfDisposed(),P.isFinite(this)},r.prototype.exp=function(){return this.throwIfDisposed(),P.exp(this)},r.prototype.expm1=function(){return this.throwIfDisposed(),P.expm1(this)},r.prototype.log=function(){return this.throwIfDisposed(),P.log(this)},r.prototype.log1p=function(){return this.throwIfDisposed(),P.log1p(this)},r.prototype.sqrt=function(){return this.throwIfDisposed(),P.sqrt(this)},r.prototype.rsqrt=function(){return this.throwIfDisposed(),P.rsqrt(this)},r.prototype.square=function(){return this.throwIfDisposed(),P.square(this)},r.prototype.reciprocal=function(){return this.throwIfDisposed(),P.reciprocal(this)},r.prototype.abs=function(){return this.throwIfDisposed(),P.abs(this)},r.prototype.clipByValue=function(t,e){return this.throwIfDisposed(),P.clipByValue(this,t,e)},r.prototype.relu=function(){return this.throwIfDisposed(),P.relu(this)},r.prototype.relu6=function(){return this.throwIfDisposed(),P.relu6(this)},r.prototype.elu=function(){return this.throwIfDisposed(),P.elu(this)},r.prototype.selu=function(){return this.throwIfDisposed(),P.selu(this)},r.prototype.leakyRelu=function(t){return t===void 0&&(t=.2),this.throwIfDisposed(),P.leakyRelu(this,t)},r.prototype.prelu=function(t){return this.throwIfDisposed(),P.prelu(this,t)},r.prototype.sigmoid=function(){return this.throwIfDisposed(),P.sigmoid(this)},r.prototype.logSigmoid=function(){return this.throwIfDisposed(),P.logSigmoid(this)},r.prototype.softplus=function(){return this.throwIfDisposed(),P.softplus(this)},r.prototype.zerosLike=function(){return this.throwIfDisposed(),P.zerosLike(this)},r.prototype.onesLike=function(){return this.throwIfDisposed(),P.onesLike(this)},r.prototype.sin=function(){return this.throwIfDisposed(),P.sin(this)},r.prototype.cos=function(){return this.throwIfDisposed(),P.cos(this)},r.prototype.tan=function(){return this.throwIfDisposed(),P.tan(this)},r.prototype.asin=function(){return this.throwIfDisposed(),P.asin(this)},r.prototype.acos=function(){return this.throwIfDisposed(),P.acos(this)},r.prototype.atan=function(){return this.throwIfDisposed(),P.atan(this)},r.prototype.sinh=function(){return this.throwIfDisposed(),P.sinh(this)},r.prototype.cosh=function(){return this.throwIfDisposed(),P.cosh(this)},r.prototype.tanh=function(){return this.throwIfDisposed(),P.tanh(this)},r.prototype.asinh=function(){return this.throwIfDisposed(),P.asinh(this)},r.prototype.acosh=function(){return this.throwIfDisposed(),P.acosh(this)},r.prototype.atanh=function(){return this.throwIfDisposed(),P.atanh(this)},r.prototype.erf=function(){return this.throwIfDisposed(),P.erf(this)},r.prototype.round=function(){return this.throwIfDisposed(),P.round(this)},r.prototype.step=function(t){return t===void 0&&(t=0),this.throwIfDisposed(),P.step(this,t)},r.prototype.softmax=function(t){return t===void 0&&(t=-1),this.throwIfDisposed(),P.softmax(this,t)},r.prototype.logSoftmax=function(t){return t===void 0&&(t=-1),this.throwIfDisposed(),P.logSoftmax(this,t)},r.prototype.resizeBilinear=function(t,e){return e===void 0&&(e=!1),this.throwIfDisposed(),P.image.resizeBilinear(this,t,e)},r.prototype.resizeNearestNeighbor=function(t,e){return e===void 0&&(e=!1),this.throwIfDisposed(),P.image.resizeNearestNeighbor(this,t,e)},r.prototype.conv1d=function(t,e,n,o,i,a){return o===void 0&&(o="NWC"),i===void 0&&(i=1),this.throwIfDisposed(),P.conv1d(this,t,e,n,o,i,a)},r.prototype.conv2d=function(t,e,n,o,i,a){return o===void 0&&(o="NHWC"),i===void 0&&(i=[1,1]),this.throwIfDisposed(),P.conv2d(this,t,e,n,o,i,a)},r.prototype.conv2dTranspose=function(t,e,n,o,i){return this.throwIfDisposed(),P.conv2dTranspose(this,t,e,n,o,i)},r.prototype.depthwiseConv2D=function(t,e,n,o,i,a){return o===void 0&&(o="NHWC"),i===void 0&&(i=[1,1]),this.throwIfDisposed(),P.depthwiseConv2d(this,t,e,n,o,i,a)},r.prototype.separableConv2d=function(t,e,n,o,i,a){return i===void 0&&(i=[1,1]),a===void 0&&(a="NHWC"),this.throwIfDisposed(),P.separableConv2d(this,t,e,n,o,i,a)},r.prototype.avgPool=function(t,e,n,o){return this.throwIfDisposed(),P.avgPool(this,t,e,n,o)},r.prototype.maxPool=function(t,e,n,o){return this.throwIfDisposed(),P.maxPool(this,t,e,n,o)},r.prototype.localResponseNormalization=function(t,e,n,o){return t===void 0&&(t=5),e===void 0&&(e=1),n===void 0&&(n=1),o===void 0&&(o=.5),P.localResponseNormalization(this,t,e,n,o)},r.prototype.pool=function(t,e,n,o,i){return this.throwIfDisposed(),P.pool(this,t,e,n,o,i)},r.prototype.variable=function(t,e,n){return t===void 0&&(t=!0),this.throwIfDisposed(),Pt().makeVariable(this,t,e,n)},r.prototype.unsortedSegmentSum=function(t,e){return this.throwIfDisposed(),P.unsortedSegmentSum(this,t,e)},r.prototype.batchToSpaceND=function(t,e){return this.throwIfDisposed(),P.batchToSpaceND(this,t,e)},r.prototype.spaceToBatchND=function(t,e){return this.throwIfDisposed(),P.spaceToBatchND(this,t,e)},r.prototype.topk=function(t,e){return t===void 0&&(t=1),e===void 0&&(e=!0),this.throwIfDisposed(),P.topk(this,t,e)},r.prototype.stridedSlice=function(t,e,n,o,i,a,s,u){return o===void 0&&(o=0),i===void 0&&(i=0),a===void 0&&(a=0),s===void 0&&(s=0),u===void 0&&(u=0),this.throwIfDisposed(),P.stridedSlice(this,t,e,n,o,i,a,s,u)},r.prototype.depthToSpace=function(t,e){return this.throwIfDisposed(),P.depthToSpace(this,t,e)},r.prototype.fft=function(){return this.throwIfDisposed(),P.spectral.fft(this)},r.prototype.ifft=function(){return this.throwIfDisposed(),P.spectral.ifft(this)},r.prototype.rfft=function(){return this.throwIfDisposed(),P.spectral.rfft(this)},r.prototype.irfft=function(){return this.throwIfDisposed(),P.spectral.irfft(this)},r}();Object.defineProperty(ke,Symbol.hasInstance,{value:function(r){return!!r&&r.dataId!=null&&r.shape!=null&&r.dtype!=null}});var ks,Li,Wi,Ui,Vi,rr=function(r){function t(e,n,o,i){var a=r.call(this,e.shape,e.dtype,e.dataId,i)||this;return a.trainable=n,a.name=o,a}return kt(t,r),t.prototype.assign=function(e){if(e.dtype!==this.dtype)throw new Error("dtype of the new value ("+e.dtype+") and previous value ("+this.dtype+") must match");if(!ze(e.shape,this.shape))throw new Error("shape of the new value ("+e.shape+") and previous value ("+this.shape+") must match");Pt().disposeTensor(this),this.dataId=e.dataId,Pt().incRef(this,null)},t.prototype.dispose=function(){Pt().disposeVariable(this),this.isDisposedInternal=!0},t}(ke);Object.defineProperty(rr,Symbol.hasInstance,{value:function(r){return r instanceof ke&&r.assign!=null&&r.assign instanceof Function}}),function(r){r.R0="R0",r.R1="R1",r.R2="R2",r.R3="R3",r.R4="R4",r.R5="R5",r.R6="R6"}(ks||(ks={})),function(r){r.float32="float32",r.int32="int32",r.bool="int32",r.complex64="complex64"}(Li||(Li={})),function(r){r.float32="float32",r.int32="int32",r.bool="bool",r.complex64="complex64"}(Wi||(Wi={})),function(r){r.float32="float32",r.int32="float32",r.bool="float32",r.complex64="complex64"}(Ui||(Ui={})),function(r){r.float32="complex64",r.int32="complex64",r.bool="complex64",r.complex64="complex64"}(Vi||(Vi={}));var Wh={float32:Ui,int32:Li,bool:Wi,complex64:Vi};function je(r,t){if(r==="string"||t==="string"){if(r==="string"&&t==="string")return"string";throw new Error("Can not upcast "+r+" with "+t)}return Wh[r][t]}function ni(r){return je(r,"int32")}function Se(r,t){if(r.dtype===t.dtype)return[r,t];var e=je(r.dtype,t.dtype);return[r.cast(e),t.cast(e)]}function Uh(r,t){k(r.dtype===t.dtype,function(){return"The dtypes of the first("+r.dtype+") and second("+t.dtype+") input must match"})}function zu(r){var t=[];return function e(n,o,i){if(n!=null){if(n instanceof ke)return void o.push(n);if(a=n,!(!Array.isArray(a)&&typeof a!="object")){var a,s=n;for(var u in s){var c=s[u];i.has(c)||(i.add(c),e(c,o,i))}}}}(r,t,new Set),t}var ri,Is=function(){function r(){this.registeredVariables={},this.nextTapeNodeId=0,this.numBytes=0,this.numTensors=0,this.numStringTensors=0,this.numDataBuffers=0,this.gradientDepth=0,this.kernelDepth=0,this.scopeStack=[],this.numDataMovesStack=[],this.nextScopeId=0,this.tensorInfo=new WeakMap,this.profiling=!1,this.activeProfile={newBytes:0,newTensors:0,peakBytes:0,kernels:[],result:null}}return r.prototype.dispose=function(){for(var t in this.registeredVariables)this.registeredVariables[t].dispose()},r}(),Vh=function(){function r(t){this.ENV=t,this.registry={},this.registryFactory={},this.pendingBackendInitId=0,this.state=new Is}return r.prototype.ready=function(){return X(this,void 0,void 0,function(){var t,e,n;return $(this,function(o){switch(o.label){case 0:if(this.pendingBackendInit!=null)return[2,this.pendingBackendInit.then(function(){})];if(this.backendInstance!=null)return[2];t=this.getSortedBackends(),e=0,o.label=1;case 1:return e<t.length?(n=t[e],[4,this.initializeBackend(n).success]):[3,5];case 2:return o.sent()?[4,this.setBackend(n)]:[3,4];case 3:return o.sent(),[2];case 4:return e++,[3,1];case 5:throw new Error("Could not initialize any backends, all backend initializations failed.")}})})},Object.defineProperty(r.prototype,"backend",{get:function(){if(this.pendingBackendInit!=null)throw new Error("Backend '"+this.backendName+"' has not yet been initialized. Make sure to await tf.ready() or await tf.setBackend() before calling other methods");if(this.backendInstance==null){var t=this.initializeBackendsAndReturnBest(),e=t.name;if(t.asyncInit)throw new Error("The highest priority backend '"+e+"' has not yet been initialized. Make sure to await tf.ready() or await tf.setBackend() before calling other methods");this.setBackend(e)}return this.backendInstance},enumerable:!0,configurable:!0}),r.prototype.backendNames=function(){return Object.keys(this.registryFactory)},r.prototype.findBackend=function(t){return!(t in this.registry)&&(!(t in this.registryFactory)||this.initializeBackend(t).asyncInit)?null:this.registry[t]},r.prototype.findBackendFactory=function(t){return t in this.registryFactory?this.registryFactory[t].factory:null},r.prototype.registerBackend=function(t,e,n){return n===void 0&&(n=1),t in this.registryFactory?(console.warn(t+" backend was already registered. Reusing existing backend factory."),!1):(this.registryFactory[t]={factory:e,priority:n},!0)},r.prototype.setBackend=function(t){return X(this,void 0,void 0,function(){var e,n,o;return $(this,function(i){switch(i.label){case 0:if(this.registryFactory[t]==null)throw new Error("Backend name '"+t+"' not found in registry");return this.backendName=t,this.registry[t]!=null?[3,4]:(this.backendInstance=null,e=this.initializeBackend(t),n=e.success,e.asyncInit?[4,n]:[3,2]);case 1:return o=i.sent(),[3,3];case 2:o=n,i.label=3;case 3:if(!o)return[2,!1];i.label=4;case 4:return this.backendInstance=this.registry[t],this.setupRegisteredKernels(),this.profiler=new Mh(this.backendInstance),[2,!0]}})})},r.prototype.setupRegisteredKernels=function(){var t=this;ws(this.backendName).forEach(function(e){e.setupFunc!=null&&e.setupFunc(t.backendInstance)})},r.prototype.disposeRegisteredKernels=function(t){var e=this;ws(t).forEach(function(n){n.disposeFunc!=null&&n.disposeFunc(e.registry[t])})},r.prototype.initializeBackend=function(t){var e=this,n=this.registryFactory[t];if(n==null)throw new Error("Cannot initialize backend "+t+", no registration found.");try{var o=n.factory();if(Promise.resolve(o)===o){var i=++this.pendingBackendInitId,a=o.then(function(s){return!(i<e.pendingBackendInitId)&&(e.registry[t]=s,e.pendingBackendInit=null,!0)}).catch(function(s){return!(i<e.pendingBackendInitId)&&(e.pendingBackendInit=null,console.warn("Initialization of backend "+t+" failed"),console.warn(s.stack||s.message),!1)});return this.pendingBackendInit=a,{success:a,asyncInit:!0}}return this.registry[t]=o,{success:!0,asyncInit:!1}}catch(s){return console.warn("Initialization of backend "+t+" failed"),console.warn(s.stack||s.message),{success:!1,asyncInit:!1}}},r.prototype.removeBackend=function(t){if(!(t in this.registryFactory))throw new Error(t+" backend not found in registry");this.backendName===t&&this.pendingBackendInit!=null&&this.pendingBackendInitId++,t in this.registry&&(this.disposeRegisteredKernels(t),this.registry[t].dispose(),delete this.registry[t]),delete this.registryFactory[t],this.backendName===t&&(this.pendingBackendInit=null,this.backendName=null,this.backendInstance=null)},r.prototype.getSortedBackends=function(){var t=this;if(Object.keys(this.registryFactory).length===0)throw new Error("No backend found in registry.");return Object.keys(this.registryFactory).sort(function(e,n){return t.registryFactory[n].priority-t.registryFactory[e].priority})},r.prototype.initializeBackendsAndReturnBest=function(){for(var t=this.getSortedBackends(),e=0;e<t.length;e++){var n=t[e],o=this.initializeBackend(n),i=o.success,a=o.asyncInit;if(a||i)return{name:n,asyncInit:a}}throw new Error("Could not initialize any backends, all backend initializations failed.")},r.prototype.moveData=function(t,e){var n=this.state.tensorInfo.get(e),o=n.backend,i=this.readSync(e);o.disposeData(e),n.backend=t,t.move(e,i,n.shape,n.dtype),this.shouldCheckForMemLeaks()&&this.state.numDataMovesStack[this.state.numDataMovesStack.length-1]++},r.prototype.tidy=function(t,e){var n,o=this,i=null;if(e==null){if(typeof t!="function")throw new Error("Please provide a function to tidy()");e=t}else{if(typeof t!="string"&&!(t instanceof String))throw new Error("When calling with two arguments, the first argument to tidy() must be a string");if(typeof e!="function")throw new Error("When calling with two arguments, the 2nd argument to tidy() must be a function");i=t}return this.scopedRun(function(){return o.startScope(i)},function(){return o.endScope(n)},function(){return(n=e())instanceof Promise&&console.error("Cannot return a Promise inside of tidy."),n})},r.prototype.scopedRun=function(t,e,n){t();try{var o=n();return e(),o}catch(i){throw e(),i}},r.prototype.nextTensorId=function(){return r.nextTensorId++},r.prototype.nextVariableId=function(){return r.nextVariableId++},r.prototype.clone=function(t){var e=this.makeTensorFromDataId(t.dataId,t.shape,t.dtype),n={x:t};return this.addTapeNode(this.state.activeScope.name,n,[e],function(o){return{x:function(){return o.toFloat()}}},[]),e},r.prototype.runKernel=function(t,e,n,o,i){return this.runKernelFunc(null,e,null,t,n,o,i)},r.prototype.shouldCheckForMemLeaks=function(){return this.ENV.getBool("IS_TEST")},r.prototype.checkKernelForMemLeak=function(t,e,n){var o=this.backend.numDataIds(),i=0;n.forEach(function(u){i+=u.dtype==="complex64"?3:1});var a=this.state.numDataMovesStack[this.state.numDataMovesStack.length-1],s=o-e-i-a;if(s>0)throw new Error("Backend '"+this.backendName+"' has an internal memory leak ("+s+" data ids) after running '"+t+"'")},r.prototype.runKernelFunc=function(t,e,n,o,i,a,s){var u,c=this;a===void 0&&(a=[]),s===void 0&&(s=[]);var l=[],h=this.isTapeOn();o==null&&(o=this.state.activeScope!=null?this.state.activeScope.name:"");var f,p=function(x){h&&(l=x.map(function(b){return c.keep(c.clone(b))}))},d=this.state.numBytes,m=this.state.numTensors;this.shouldCheckForMemLeaks()&&this.state.numDataMovesStack.push(0);var v,g=Nu(o,this.backendName);return f=g!=null?function(){var x=c.backend.numDataIds();v=g.kernelFunc({inputs:e,attrs:i,backend:c.backend});var b=Array.isArray(v)?v:[v];c.shouldCheckForMemLeaks()&&c.checkKernelForMemLeak(o,x,b);var y=b.map(function(_){var S=_.dataId,I=_.shape,E=_.dtype;return c.makeTensorFromDataId(S,I,E)}),w=y.filter(function(_,S){return s[S]});return p((a||[]).slice().concat(w)),y}:function(){var x=c.backend.numDataIds();v=c.tidy(function(){return t(c.backend,p)});var b=Array.isArray(v)?v:[v];return c.shouldCheckForMemLeaks()&&c.checkKernelForMemLeak(o,x,b),b},this.scopedRun(function(){return c.state.kernelDepth++},function(){return c.state.kernelDepth--},function(){u=c.ENV.getBool("DEBUG")?c.profiler.profileKernel(o,e,function(){return f()}):f()}),h&&this.addTapeNode(o,e,u,n,l),this.state.profiling&&this.state.activeProfile.kernels.push({name:o,bytesAdded:this.state.numBytes-d,totalBytesSnapshot:this.state.numBytes,tensorsAdded:this.state.numTensors-m,totalTensorsSnapshot:this.state.numTensors,inputShapes:Object.keys(e).map(function(x){return e[x].shape}),outputShapes:u.map(function(x){return x.shape})}),Array.isArray(v)?u:u[0]},r.prototype.makeTensor=function(t,e,n,o){if(t==null)throw new Error("Values passed to engine.makeTensor() are null");n=n||"float32",o=o||this.backend;var i=t;n==="string"&&ua(t[0])&&(i=t.map(function(l){return Ph(l)}));var a=o.write(i,e,n),s=new ke(e,n,a,this.nextTensorId());if(this.incRef(s,o),n==="string"){var u=this.state.tensorInfo.get(a),c=Dh(i);this.state.numBytes+=c-u.bytes,u.bytes=c}return s},r.prototype.makeTensorFromDataId=function(t,e,n,o){var i=new ke(e,n=n||"float32",t,this.nextTensorId());return this.incRef(i,o),i},r.prototype.makeVariable=function(t,e,n,o){e===void 0&&(e=!0),n=n||this.nextVariableId().toString(),o!=null&&o!==t.dtype&&(t=t.asType(o));var i=new rr(t,e,n,this.nextTensorId());if(this.state.registeredVariables[i.name]!=null)throw new Error("Variable with name "+i.name+" was already registered");return this.state.registeredVariables[i.name]=i,this.incRef(i,this.backend),i},r.prototype.incRef=function(t,e){var n=this.state.tensorInfo.has(t.dataId)?this.state.tensorInfo.get(t.dataId).refCount:0;if(this.state.numTensors++,t.dtype==="string"&&this.state.numStringTensors++,n===0){this.state.numDataBuffers++;var o=0;t.dtype!=="complex64"&&t.dtype!=="string"&&(o=t.size*Mu(t.dtype)),this.state.tensorInfo.set(t.dataId,{backend:e||this.backend,dtype:t.dtype,shape:t.shape,bytes:o,refCount:0}),this.state.numBytes+=o}this.state.tensorInfo.get(t.dataId).refCount++,t instanceof rr||this.track(t)},r.prototype.disposeTensor=function(t){if(this.state.tensorInfo.has(t.dataId)){this.state.numTensors--,t.dtype==="string"&&this.state.numStringTensors--;var e=this.state.tensorInfo.get(t.dataId);e.refCount<=1?(t.dtype!=="complex64"&&(this.state.numBytes-=e.bytes),this.state.numDataBuffers--,e.backend.disposeData(t.dataId),this.state.tensorInfo.delete(t.dataId)):this.state.tensorInfo.get(t.dataId).refCount--}},r.prototype.disposeVariables=function(){for(var t in this.state.registeredVariables){var e=this.state.registeredVariables[t];this.disposeVariable(e)}},r.prototype.disposeVariable=function(t){this.disposeTensor(t),this.state.registeredVariables[t.name]!=null&&delete this.state.registeredVariables[t.name]},r.prototype.memory=function(){var t=this.backend.memory();return t.numTensors=this.state.numTensors,t.numDataBuffers=this.state.numDataBuffers,t.numBytes=this.state.numBytes,this.state.numStringTensors>0&&(t.unreliable=!0,t.reasons==null&&(t.reasons=[]),t.reasons.push("Memory usage by string tensors is approximate (2 bytes per character)")),t},r.prototype.profile=function(t){return X(this,void 0,void 0,function(){var e,n;return $(this,function(o){return this.state.profiling=!0,e=this.state.numBytes,n=this.state.numTensors,this.state.activeProfile.kernels=[],this.state.activeProfile.result=t(),this.state.profiling=!1,this.state.activeProfile.peakBytes=Math.max.apply(Math,this.state.activeProfile.kernels.map(function(i){return i.totalBytesSnapshot})),this.state.activeProfile.newBytes=this.state.numBytes-e,this.state.activeProfile.newTensors=this.state.numTensors-n,[2,this.state.activeProfile]})})},r.prototype.isTapeOn=function(){return this.state.gradientDepth>0&&this.state.kernelDepth===0},r.prototype.addTapeNode=function(t,e,n,o,i){var a=this,s={id:this.state.nextTapeNodeId++,kernelName:t,inputs:e,outputs:n,saved:i},u=Ch(t);u!=null&&(o=u.gradFunc),o!=null&&(s.gradient=function(c){return c=c.map(function(l,h){if(l==null){var f=n[h],p=Ar(f.size,f.dtype);return a.makeTensor(p,f.shape,f.dtype)}return l}),o(c.length>1?c:c[0],i)}),this.state.activeTape.push(s)},r.prototype.keep=function(t){return t.kept=!0,t},r.prototype.startTape=function(){this.state.gradientDepth===0&&(this.state.activeTape=[]),this.state.gradientDepth++},r.prototype.endTape=function(){this.state.gradientDepth--},r.prototype.startScope=function(t){var e={track:[],name:"unnamed scope",id:this.state.nextScopeId++};t&&(e.name=t),this.state.scopeStack.push(e),this.state.activeScope=e},r.prototype.endScope=function(t){for(var e=this,n=zu(t),o=new Set(n.map(function(u){return u.id})),i=0;i<this.state.activeScope.track.length;i++){var a=this.state.activeScope.track[i];a.kept||o.has(a.id)||a.dispose()}var s=this.state.scopeStack.pop();this.state.activeScope=this.state.scopeStack.length===0?null:this.state.scopeStack[this.state.scopeStack.length-1],n.forEach(function(u){u.kept||u.scopeId!==s.id||e.track(u)})},r.prototype.gradients=function(t,e,n,o){var i=this;if(o===void 0&&(o=!1),k(e.length>0,function(){return"gradients() received an empty list of xs."}),n!=null&&n.dtype!=="float32")throw new Error("dy must have 'float32' dtype, but has '"+n.dtype+"'");var a=this.scopedRun(function(){return i.startTape()},function(){return i.endTape()},function(){return i.tidy("forward",t)});k(a instanceof ke,function(){return"The result y returned by f() must be a tensor."});var s=function(u,c,l){for(var h={},f={},p=0;p<c.length;p++)h[c[p].id]=!0;for(p=0;p<u.length;p++){var d=(_=u[p]).inputs;for(var m in d){for(var v=d[m],g=!1,x=0;x<c.length;x++)if(h[v.id]){_.outputs.forEach(function(R){return h[R.id]=!0}),g=!0,f[_.id]=!0;break}if(g)break}}var b={};b[l.id]=!0;var y={};for(p=u.length-1;p>=0;p--)for(d=(_=u[p]).inputs,x=0;x<_.outputs.length;x++)if(b[_.outputs[x].id]){for(var m in d)b[d[m].id]=!0,y[_.id]=!0;break}var w=[];for(p=0;p<u.length;p++){var _;if(f[(_=u[p]).id]&&y[_.id]){var S={};for(var m in _.inputs){var I=_.inputs[m];h[I.id]&&(S[m]=I)}var E=Object.assign({},_);E.inputs=S,E.outputs=_.outputs,w.push(E)}}return w}(this.state.activeTape,e,a);if(!o&&s.length===0&&e.length>0)throw new Error("Cannot compute gradient of y=f(x) with respect to x. Make sure that the f you passed encloses all operations that lead from x to y.");return this.tidy("backward",function(){var u,c,l={};l[a.id]=n??(u=a.shape,c=Lu(Y(u),"float32"),N.makeTensor(c,u,"float32")),function(f,p,d){for(var m=function(g){var x=p[g],b=[];if(x.outputs.forEach(function(S){var I=f[S.id];I!=null?b.push(I):b.push(null)}),x.gradient==null)throw new Error("Cannot compute gradient: gradient function not found for "+x.kernelName+".");var y=x.gradient(b),w=function(S){if(!(S in y))throw new Error("Cannot backprop through input "+S+". Available gradients found: "+Object.keys(y)+".");var I=d(function(){return y[S]()});if(I.dtype!=="float32")throw new Error("Error in gradient for op "+x.kernelName+". The gradient of input "+S+" must have 'float32' dtype, but has '"+I.dtype+"'");var E=x.inputs[S];if(!ze(I.shape,E.shape))throw new Error("Error in gradient for op "+x.kernelName+". The gradient of input '"+S+"' has shape '"+I.shape+"', which does not match the shape of the input '"+E.shape+"'");if(f[E.id]==null)f[E.id]=I;else{var R=f[E.id];f[E.id]=R.add(I),R.dispose()}};for(var _ in x.inputs)w(_)},v=p.length-1;v>=0;v--)m(v)}(l,s,function(f){return i.tidy(f)});var h=e.map(function(f){return l[f.id]});return i.state.gradientDepth===0&&(i.state.activeTape.forEach(function(f){for(var p=0,d=f.saved;p<d.length;p++)d[p].dispose()}),i.state.activeTape=null),{value:a,grads:h}})},r.prototype.customGrad=function(t){var e=this;return k(Mi(t),function(){return"The f passed in customGrad(f) must be a function."}),function(){for(var n,o=[],i=0;i<arguments.length;i++)o[i]=arguments[i];k(o.every(function(s){return s instanceof ke}),function(){return"The args passed in customGrad(f)(x1, x2,...) must all be tensors"});var a={};return o.forEach(function(s,u){a[u]=s}),e.runKernelFunc(function(s,u){return k((n=t.apply(void 0,o.concat([u]))).value instanceof ke,function(){return"The function f passed in customGrad(f) must return an object where `obj.value` is a tensor"}),k(Mi(n.gradFunc),function(){return"The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function."}),n.value},a,function(s,u){var c=n.gradFunc(s,u),l=Array.isArray(c)?c:[c];k(l.length===o.length,function(){return"The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function that returns the same number of tensors as inputs passed to f(...)."}),k(l.every(function(f){return f instanceof ke}),function(){return"The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function that returns a list of only tensors."});var h={};return l.forEach(function(f,p){h[p]=function(){return f}}),h})}},r.prototype.readSync=function(t){return this.state.tensorInfo.get(t).backend.readSync(t)},r.prototype.read=function(t){return this.state.tensorInfo.get(t).backend.read(t)},r.prototype.time=function(t){return X(this,void 0,void 0,function(){var e,n;return $(this,function(o){switch(o.label){case 0:return e=Ft(),[4,this.backend.time(t)];case 1:return(n=o.sent()).wallMs=Ft()-e,[2,n]}})})},r.prototype.track=function(t){return this.state.activeScope!=null&&(t.scopeId=this.state.activeScope.id,this.state.activeScope.track.push(t)),t},Object.defineProperty(r.prototype,"registeredVariables",{get:function(){return this.state.registeredVariables},enumerable:!0,configurable:!0}),r.prototype.reset=function(){for(var t in this.pendingBackendInitId++,this.state.dispose(),this.ENV.reset(),this.state=new Is,this.registry)this.disposeRegisteredKernels(t),this.registry[t].dispose(),delete this.registry[t];this.backendName=null,this.backendInstance=null,this.pendingBackendInit=null},r.nextTensorId=0,r.nextVariableId=0,r}(),N=function(){var r=function(){if(ri==null){var e=void 0;if(typeof window<"u")e=window;else if(typeof global<"u")e=global;else if(typeof process<"u")e=process;else{if(typeof self>"u")throw new Error("Could not find a global object");e=self}ri=e}return ri}();if(r._tfengine==null){var t=new wh(r);r._tfengine=new Vh(t)}return function(e){Du=e}(r._tfengine.ENV),Pt=function(){return r._tfengine},r._tfengine}();function Gu(){return typeof window<"u"&&window.document!=null||typeof WorkerGlobalScope<"u"}var Yt=L();Yt.registerFlag("DEBUG",function(){return!1},function(r){r&&console.warn("Debugging mode is ON. The output of every math call will be downloaded to CPU and checked for NaNs. This significantly impacts performance.")}),Yt.registerFlag("IS_BROWSER",function(){return Gu()}),Yt.registerFlag("IS_NODE",function(){return typeof process<"u"&&process.versions!==void 0&&process.versions.node!==void 0}),Yt.registerFlag("IS_CHROME",function(){return typeof navigator<"u"&&navigator!=null&&navigator.userAgent!=null&&/Chrome/.test(navigator.userAgent)&&/Google Inc/.test(navigator.vendor)}),Yt.registerFlag("PROD",function(){return!1}),Yt.registerFlag("TENSORLIKE_CHECK_SHAPE_CONSISTENCY",function(){return Yt.getBool("DEBUG")}),Yt.registerFlag("DEPRECATION_WARNINGS_ENABLED",function(){return!0}),Yt.registerFlag("IS_TEST",function(){return!1});var br,ft,ht,En={},oi={alpha:!1,antialias:!1,premultipliedAlpha:!1,preserveDrawingBuffer:!1,depth:!1,stencil:!1,failIfMajorPerformanceCaveat:!0};function zh(r,t){En[r]=t}function Ht(r){r in En||(En[r]=function(e){if(e!==1&&e!==2)throw new Error("Cannot get WebGL rendering context, WebGL is disabled.");var n=function(o){if(typeof OffscreenCanvas<"u"&&o===2)return new OffscreenCanvas(300,150);if(typeof document<"u")return document.createElement("canvas");throw new Error("Cannot create a canvas in this context")}(e);return n.addEventListener("webglcontextlost",function(o){o.preventDefault(),delete En[e]},!1),e===1?n.getContext("webgl",oi)||n.getContext("experimental-webgl",oi):n.getContext("webgl2",oi)}(r));var t=En[r];return t.isContextLost()?(delete En[r],Ht(r)):(t.disable(t.DEPTH_TEST),t.disable(t.STENCIL_TEST),t.disable(t.BLEND),t.disable(t.DITHER),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SAMPLE_COVERAGE),t.enable(t.SCISSOR_TEST),t.enable(t.CULL_FACE),t.cullFace(t.BACK),En[r])}function Do(r,t){return[t,r]}function vr(r){var t=Y(r);return Oi(Math.ceil(t/4))}function Tr(r,t){return[Math.max(1,Math.ceil(t/2)),Math.max(1,Math.ceil(r/2))]}function ca(r,t){var e,n,o,i,a,s,u,c,l,h=r;return L().getNumber("WEBGL_VERSION")===2?(e=h.R32F,n=h.R16F,o=h.RGBA16F,i=h.RGBA32F,a=h.RED,s=4,u=1,c=h.HALF_FLOAT,l=h.FLOAT):(e=r.RGBA,n=r.RGBA,o=r.RGBA,i=h.RGBA,a=r.RGBA,s=4,u=4,c=t!=null?t.HALF_FLOAT_OES:null,l=r.FLOAT),{internalFormatFloat:e,internalFormatHalfFloat:n,internalFormatPackedHalfFloat:o,internalFormatPackedFloat:i,textureFormatFloat:a,downloadTextureFormat:r.RGBA,downloadUnpackNumChannels:s,defaultNumChannels:u,textureTypeHalfFloat:c,textureTypeFloat:l}}function J(r,t,e){var n=e();return t&&function(o){var i=o.getError();if(i!==o.NO_ERROR)throw new Error("WebGL Error: "+jh(o,i))}(r),n}(function(r){r[r.DENSE=0]="DENSE",r[r.SHARED_BATCH=1]="SHARED_BATCH"})(br||(br={})),function(r){r[r.RENDER=0]="RENDER",r[r.UPLOAD=1]="UPLOAD",r[r.PIXELS=2]="PIXELS",r[r.DOWNLOAD=3]="DOWNLOAD"}(ft||(ft={})),function(r){r[r.UNPACKED_FLOAT16=0]="UNPACKED_FLOAT16",r[r.UNPACKED_FLOAT32=1]="UNPACKED_FLOAT32",r[r.PACKED_4X1_UNSIGNED_BYTE=2]="PACKED_4X1_UNSIGNED_BYTE",r[r.PACKED_2X2_FLOAT32=3]="PACKED_2X2_FLOAT32",r[r.PACKED_2X2_FLOAT16=4]="PACKED_2X2_FLOAT16"}(ht||(ht={}));var Gh=596e-10,Hh=65504;function qh(r){return!!(L().getBool("WEBGL_RENDER_FLOAT32_ENABLED")||r===0||Gh<Math.abs(r)&&Math.abs(r)<Hh)}function jh(r,t){switch(t){case r.NO_ERROR:return"NO_ERROR";case r.INVALID_ENUM:return"INVALID_ENUM";case r.INVALID_VALUE:return"INVALID_VALUE";case r.INVALID_OPERATION:return"INVALID_OPERATION";case r.INVALID_FRAMEBUFFER_OPERATION:return"INVALID_FRAMEBUFFER_OPERATION";case r.OUT_OF_MEMORY:return"OUT_OF_MEMORY";case r.CONTEXT_LOST_WEBGL:return"CONTEXT_LOST_WEBGL";default:return"Unknown error code "+t}}function Lr(r,t,e){return tn(r,t,function(){return r.getExtension(e)},'Extension "'+e+'" not supported on this browser.')}function Kh(r,t,e){var n=tn(r,t,function(){return r.createShader(r.VERTEX_SHADER)},"Unable to create vertex WebGLShader.");if(J(r,t,function(){return r.shaderSource(n,e)}),J(r,t,function(){return r.compileShader(n)}),r.getShaderParameter(n,r.COMPILE_STATUS)===!1)throw console.log(r.getShaderInfoLog(n)),new Error("Failed to compile vertex shader.");return n}function Xh(r,t,e){var n=tn(r,t,function(){return r.createShader(r.FRAGMENT_SHADER)},"Unable to create fragment WebGLShader.");if(J(r,t,function(){return r.shaderSource(n,e)}),J(r,t,function(){return r.compileShader(n)}),r.getShaderParameter(n,r.COMPILE_STATUS)===!1)throw function(o,i){var a=$h.exec(i);if(a==null)return console.log("Couldn't parse line number in error: "+i),void console.log(o);for(var s=+a[1],u=o.split(`
`),c=u.length.toString().length+2,l=u.map(function(v,g){return $n((g+1).toString(),c)+v}),h=0,f=0;f<l.length;f++)h=Math.max(l[f].length,h);var p=l.slice(0,s-1),d=l.slice(s-1,s),m=l.slice(s);console.log(p.join(`
`)),console.log(i.split(`
`)[0]),console.log("%c "+$n(d[0],h),"border:1px solid red; background-color:#e3d2d2; color:#a61717"),console.log(m.join(`
`))}(e,r.getShaderInfoLog(n)),new Error("Failed to compile fragment shader.");return n}var ii,ai,$h=/ERROR: [0-9]+:([0-9]+):/g;function Yh(r,t){return tn(r,t,function(){return r.createProgram()},"Unable to create WebGLProgram.")}function Jh(r,t,e){if(J(r,t,function(){return r.linkProgram(e)}),r.getProgramParameter(e,r.LINK_STATUS)===!1)throw console.log(r.getProgramInfoLog(e)),new Error("Failed to link vertex and fragment shaders.")}function si(r,t,e){if(J(r,t,function(){return r.validateProgram(e)}),r.getProgramParameter(e,r.VALIDATE_STATUS)===!1)throw console.log(r.getProgramInfoLog(e)),new Error("Shader program validation failed.")}function Qh(r,t,e){var n=tn(r,t,function(){return r.createBuffer()},"Unable to create WebGLBuffer");return J(r,t,function(){return r.bindBuffer(r.ARRAY_BUFFER,n)}),J(r,t,function(){return r.bufferData(r.ARRAY_BUFFER,e,r.STATIC_DRAW)}),n}function Zh(r,t,e){var n=tn(r,t,function(){return r.createBuffer()},"Unable to create WebGLBuffer");return J(r,t,function(){return r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,n)}),J(r,t,function(){return r.bufferData(r.ELEMENT_ARRAY_BUFFER,e,r.STATIC_DRAW)}),n}function ef(r,t){return tn(r,t,function(){return r.createTexture()},"Unable to create WebGLTexture.")}function tf(r,t){var e=L().getNumber("WEBGL_MAX_TEXTURE_SIZE");if(r<=0||t<=0){var n="["+r+"x"+t+"]";throw new Error("Requested texture size "+n+" is invalid.")}if(r>e||t>e)throw n="["+r+"x"+t+"]",new Error("Requested texture size "+n+" greater than WebGL maximum on this browser / GPU "+("["+e+"x"+e+"]")+".")}function nf(r,t){return tn(r,t,function(){return r.createFramebuffer()},"Unable to create WebGLFramebuffer.")}function Ss(r,t,e,n,o,i,a,s){var u=r.getAttribLocation(e,n);return u!==-1&&(J(r,t,function(){return r.bindBuffer(r.ARRAY_BUFFER,o)}),J(r,t,function(){return r.vertexAttribPointer(u,i,r.FLOAT,!1,a,s)}),J(r,t,function(){return r.enableVertexAttribArray(u)}),!0)}function rf(r,t,e,n){cf(r,n),J(r,t,function(){return r.activeTexture(r.TEXTURE0+n)}),J(r,t,function(){return r.bindTexture(r.TEXTURE_2D,e)})}function of(r,t,e,n){return tn(r,t,function(){return r.getUniformLocation(e,n)},'uniform "'+n+'" not present in program.')}function af(r,t,e){return r.getUniformLocation(t,e)}function sf(r,t,e,n,o,i){J(r,t,function(){return rf(r,t,n,i)}),J(r,t,function(){return r.uniform1i(o,i)})}function ui(r,t,e,n){J(r,t,function(){return r.bindFramebuffer(r.FRAMEBUFFER,n)}),J(r,t,function(){return r.framebufferTexture2D(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,e,0)})}function As(r,t,e){J(r,t,function(){return r.bindFramebuffer(r.FRAMEBUFFER,e)}),J(r,t,function(){return r.framebufferTexture2D(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,null,0)})}function Wr(r){var t=r.checkFramebufferStatus(r.FRAMEBUFFER);if(t!==r.FRAMEBUFFER_COMPLETE)throw new Error("Error binding framebuffer: "+uf(r,t))}function uf(r,t){switch(t){case r.FRAMEBUFFER_INCOMPLETE_ATTACHMENT:return"FRAMEBUFFER_INCOMPLETE_ATTACHMENT";case r.FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT:return"FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT";case r.FRAMEBUFFER_INCOMPLETE_DIMENSIONS:return"FRAMEBUFFER_INCOMPLETE_DIMENSIONS";case r.FRAMEBUFFER_UNSUPPORTED:return"FRAMEBUFFER_UNSUPPORTED";default:return"unknown error "+t}}function tn(r,t,e,n){var o=J(r,t,function(){return e()});if(o==null)throw new Error(n);return o}function cf(r,t){var e=r.MAX_COMBINED_TEXTURE_IMAGE_UNITS-1,n=t+r.TEXTURE0;if(n<r.TEXTURE0||n>e)throw new Error("textureUnit must be in "+("[gl.TEXTURE0, gl.TEXTURE"+e+"]")+".")}function ho(r,t){return t===void 0&&(t=2),Y(r.slice(0,r.length-t))}function fo(r){if(r.length===0)throw Error("Cannot get rows and columns of an empty shape array.");return[r.length>1?r[r.length-2]:1,r[r.length-1]]}function ci(r){var t=[1,1,1];return r.length===0||r.length===1&&r[0]===1||(t=[ho(r)].concat(fo(r))),t}function lf(r,t){var e;t===void 0&&(t=!1);var n=L().getNumber("WEBGL_MAX_TEXTURE_SIZE");if(t&&(n*=2,(r=r.map(function(c,l){return l>=r.length-2?Ou(r[l]):r[l]})).length===1&&(r=[2,r[0]])),r.length!==2){var o=kn(r);r=o.newShape}var i=Y(r);if(r.length<=1&&i<=n)return[1,i];if(r.length===2&&r[0]<=n&&r[1]<=n)return r;if(r.length===3&&r[0]*r[1]<=n&&r[2]<=n)return[r[0]*r[1],r[2]];if(r.length===3&&r[0]<=n&&r[1]*r[2]<=n)return[r[0],r[1]*r[2]];if(r.length===4&&r[0]*r[1]*r[2]<=n&&r[3]<=n)return[r[0]*r[1]*r[2],r[3]];if(r.length===4&&r[0]<=n&&r[1]*r[2]*r[3]<=n)return[r[0],r[1]*r[2]*r[3]];if(t){var a=ho(r),s=2,u=2;return r.length&&(s=(e=fo(r))[0],u=e[1]),Oi(i=a*(s/2)*(u/2)).map(function(c){return 2*c})}return Oi(i)}function Ur(r){return r%2==0}function Vr(r,t){if(ze(r=r.slice(-2),t=t.slice(-2))||!r.length||!t.length||r[0]===0||r[1]===0||t[0]===0||t[1]===0)return!0;if(r.length!==t.length){var e=r.slice(-1)[0],n=t.slice(-1)[0];if(e===n||Ur(e)&&Ur(n)&&(r[0]===1||t[0]===1))return!0}return r[1]===t[1]&&Ur(r[0])&&Ur(t[0])}function hf(r){if(ii==null){var t=Ht(r);ii=t.getParameter(t.MAX_TEXTURE_SIZE)}return ii}function ff(r){if(ai==null){var t=Ht(r);ai=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS)}return Math.min(16,ai)}function pf(r){if(r===0)return 0;var t=Ht(r);return bt(t,"EXT_disjoint_timer_query_webgl2")&&r===2?2:bt(t,"EXT_disjoint_timer_query")?1:0}function bt(r,t){return r.getExtension(t)!=null}function Ts(r){try{if(Ht(r)!=null)return!0}catch{return!1}return!1}function df(r){if(r===0)return!1;var t=Ht(r);if(r===1){if(!bt(t,"OES_texture_float"))return!1}else if(!bt(t,"EXT_color_buffer_float"))return!1;return zi(t)}function vf(r){if(r===0)return!1;var t=Ht(r);if(r!==1){if(bt(t,"EXT_color_buffer_float"))return zi(t);if(bt(t,"EXT_color_buffer_half_float")){var e=t.getExtension("EXT_color_buffer_half_float");return function(n,o){var i=ca(n,o),a=n.createTexture();n.bindTexture(n.TEXTURE_2D,a),n.texImage2D(n.TEXTURE_2D,0,i.internalFormatHalfFloat,1,1,0,i.textureFormatFloat,i.textureTypeHalfFloat,null);var s=n.createFramebuffer();n.bindFramebuffer(n.FRAMEBUFFER,s),n.framebufferTexture2D(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,a,0);var u=n.checkFramebufferStatus(n.FRAMEBUFFER)===n.FRAMEBUFFER_COMPLETE;return n.bindTexture(n.TEXTURE_2D,null),n.bindFramebuffer(n.FRAMEBUFFER,null),n.deleteTexture(a),n.deleteFramebuffer(s),u}(t,e)}return!1}return!!bt(t,"OES_texture_float")&&!!bt(t,"WEBGL_color_buffer_float")&&zi(t)}function zi(r){var t=ca(r),e=r.createTexture();r.bindTexture(r.TEXTURE_2D,e),r.texImage2D(r.TEXTURE_2D,0,t.internalFormatFloat,1,1,0,t.textureFormatFloat,t.textureTypeFloat,null);var n=r.createFramebuffer();r.bindFramebuffer(r.FRAMEBUFFER,n),r.framebufferTexture2D(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,e,0);var o=r.checkFramebufferStatus(r.FRAMEBUFFER)===r.FRAMEBUFFER_COMPLETE;return r.bindTexture(r.TEXTURE_2D,null),r.bindFramebuffer(r.FRAMEBUFFER,null),r.deleteTexture(e),r.deleteFramebuffer(n),o}function mf(r){return r===2&&Ht(r).fenceSync!=null}var ne=L();function Hu(r){L().getBool("DEPRECATION_WARNINGS_ENABLED")&&console.warn(r+" You can disable deprecation warnings with tf.disableDeprecationWarnings().")}function K(r,t){return N.tidy(r,t)}function it(r){zu(r).forEach(function(t){return t.dispose()})}function gf(r){return N.keep(r)}function po(){for(var r=[],t=0;t<arguments.length;t++)r[t]=arguments[t];L().getBool("IS_TEST")||console.warn.apply(console,r)}function xn(r,t){var e=r;if(Bt(r))return t==="string"?[]:[r.length];if(!Array.isArray(r))return[];for(var n=[];Array.isArray(e)||Bt(e)&&t!=="string";)n.push(e.length),e=e[0];return Array.isArray(r)&&L().getBool("TENSORLIKE_CHECK_SHAPE_CONSISTENCY")&&function o(i,a,s){if(s=s||[],!Array.isArray(i)&&!Bt(i))return void k(a.length===0,function(){return"Element arr["+s.join("][")+"] is a primitive, but should be an array/TypedArray of "+a[0]+" elements"});k(a.length>0,function(){return"Element arr["+s.join("][")+"] should be a primitive, but is an array of "+i.length+" elements"}),k(i.length===a[0],function(){return"Element arr["+s.join("][")+"] should have "+a[0]+" elements, but has "+i.length+" elements"});for(var u=a.slice(1),c=0;c<i.length;++c)o(i[c],u,s.concat(c))}(r,n,[]),n}function Ds(r,t,e,n){if(r!=null&&(r!=="numeric"&&r!==t||r==="numeric"&&t==="string"))throw new Error("Argument '"+e+"' passed to '"+n+"' must be "+r+" tensor, but got "+t+" tensor")}function C(r,t,e,n){if(n===void 0&&(n="numeric"),r instanceof ke)return Ds(n,r.dtype,t,e),r;var o=Sr(r);if(o!=="string"&&["bool","int32","float32"].indexOf(n)>=0&&(o=n),Ds(n,o,t,e),r==null||!Bt(r)&&!Array.isArray(r)&&typeof r!="number"&&typeof r!="boolean"&&typeof r!="string"){var i=r==null?"null":r.constructor.name;throw new Error("Argument '"+t+"' passed to '"+e+"' must be a Tensor or TensorLike, but got '"+i+"'")}var a=xn(r,o);Bt(r)||Array.isArray(r)||(r=[r]);var s=o!=="string"?Bu(r,o,L().getBool("DEBUG")):nr(r,[],!0);return N.makeTensor(s,a,o)}function vo(r,t,e,n){if(n===void 0&&(n="numeric"),!Array.isArray(r))throw new Error("Argument "+t+" passed to "+e+" must be a `Tensor[]` or `TensorLike[]`");return r.map(function(o,i){return C(o,t+"["+i+"]",e)},n)}function qu(r,t){for(var e=0;e<r.length;++e)if(r[r.length-e-1]!==t-1-e)return!1;return!0}function yf(r,t,e){for(var n=r.length+t.length,o=[],i=0,a=0,s=0;s<n;s++)e.indexOf(s)===-1?o.push(r[i++]):o.push(t[a++]);return o}function $e(r,t){for(var e=[],n=r.length,o=0;o<n;o++)t.indexOf(o)===-1&&e.push(r[o]);return[e,t.map(function(i){return r[i]})]}function at(r,t){return yf(r,t.map(function(e){return 1}),t)}function lt(r,t,e){k(qu(t,e),function(){return r+" supports only inner-most axes for now. Got axes "+t+" and rank-"+e+" input."})}function qt(r,t){if(qu(r,t))return null;for(var e=[],n=0;n<t;++n)r.indexOf(n)===-1&&e.push(n);return r.forEach(function(o){return e.push(o)}),e}function la(r){return r.map(function(t,e){return[e,t]}).sort(function(t,e){return t[1]-e[1]}).map(function(t){return t[0]})}function jt(r,t){for(var e=[],n=t-r;n<t;++n)e.push(n);return e}function xf(r,t){var e=r[0].length;r.forEach(function(o,i){k(o.length===e,function(){return"Error in concat"+e+"D: rank of tensors["+i+"] must be the same as the rank of the rest ("+e+")"})}),k(t>=0&&t<e,function(){return"Error in concat"+e+"D: axis must be between 0 and "+(e-1)+"."});var n=r[0];r.forEach(function(o,i){for(var a=0;a<e;a++)k(a===t||o[a]===n[a],function(){return"Error in concat"+e+"D: Shape of tensors["+i+"] ("+o+") does not match the shape of the rest ("+n+") along the non-concatenated axis "+i+"."})})}function or(r,t){for(var e=r[0].slice(),n=1;n<r.length;n++)e[t]+=r[n][t];return e}function T(r){var t=Object.keys(r);if(t.length!==1)throw new Error("Please provide an object with a single key (operation name) mapping to a function. Got an object with "+t.length+" keys.");var e=t[0],n=r[e];e.endsWith("_")&&(e=e.substring(0,e.length-1));var o=function(){for(var i=[],a=0;a<arguments.length;a++)i[a]=arguments[a];N.startScope(e);try{var s=n.apply(void 0,i);return s instanceof Promise&&console.error("Cannot return a Promise inside of tidy."),N.endScope(s),s}catch(u){throw N.endScope(null),u}};return Object.defineProperty(o,"name",{value:e,configurable:!0}),o}ne.registerFlag("HAS_WEBGL",function(){return ne.getNumber("WEBGL_VERSION")>0}),ne.registerFlag("WEBGL_VERSION",function(){return Ts(2)?2:Ts(1)?1:0}),ne.registerFlag("WEBGL_BUFFER_SUPPORTED",function(){return ne.get("WEBGL_VERSION")===2}),ne.registerFlag("WEBGL_CPU_FORWARD",function(){return!0}),ne.registerFlag("WEBGL_FORCE_F16_TEXTURES",function(){return!1}),ne.registerFlag("WEBGL_PACK",function(){return ne.getBool("HAS_WEBGL")}),ne.registerFlag("WEBGL_PACK_NORMALIZATION",function(){return ne.getBool("WEBGL_PACK")}),ne.registerFlag("WEBGL_PACK_CLIP",function(){return ne.getBool("WEBGL_PACK")}),ne.registerFlag("WEBGL_PACK_DEPTHWISECONV",function(){return!1}),ne.registerFlag("WEBGL_PACK_BINARY_OPERATIONS",function(){return ne.getBool("WEBGL_PACK")}),ne.registerFlag("WEBGL_PACK_UNARY_OPERATIONS",function(){return ne.getBool("WEBGL_PACK")}),ne.registerFlag("WEBGL_PACK_ARRAY_OPERATIONS",function(){return ne.getBool("WEBGL_PACK")}),ne.registerFlag("WEBGL_PACK_IMAGE_OPERATIONS",function(){return ne.getBool("WEBGL_PACK")}),ne.registerFlag("WEBGL_PACK_REDUCE",function(){return ne.getBool("WEBGL_PACK")}),ne.registerFlag("WEBGL_LAZILY_UNPACK",function(){return ne.getBool("WEBGL_PACK")}),ne.registerFlag("WEBGL_CONV_IM2COL",function(){return ne.getBool("WEBGL_PACK")}),ne.registerFlag("WEBGL_MAX_TEXTURE_SIZE",function(){return hf(ne.getNumber("WEBGL_VERSION"))}),ne.registerFlag("WEBGL_MAX_TEXTURES_IN_SHADER",function(){return ff(ne.getNumber("WEBGL_VERSION"))}),ne.registerFlag("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION",function(){var r=ne.getNumber("WEBGL_VERSION");return r===0?0:pf(r)}),ne.registerFlag("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE",function(){return ne.getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")>0&&(r=navigator.userAgent||navigator.vendor||window.opera,!(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(r)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(r.substr(0,4))));var r}),ne.registerFlag("WEBGL_RENDER_FLOAT32_CAPABLE",function(){return df(ne.getNumber("WEBGL_VERSION"))}),ne.registerFlag("WEBGL_RENDER_FLOAT32_ENABLED",function(){return!ne.getBool("WEBGL_FORCE_F16_TEXTURES")&&ne.getBool("WEBGL_RENDER_FLOAT32_CAPABLE")}),ne.registerFlag("WEBGL_DOWNLOAD_FLOAT_ENABLED",function(){return vf(ne.getNumber("WEBGL_VERSION"))}),ne.registerFlag("WEBGL_FENCE_API_ENABLED",function(){return mf(ne.getNumber("WEBGL_VERSION"))}),ne.registerFlag("WEBGL_SIZE_UPLOAD_UNIFORM",function(){return ne.getBool("WEBGL_RENDER_FLOAT32_ENABLED")?4:0}),Vu=Hu;var qe=T({complex_:function(r,t){var e=C(r,"real","complex"),n=C(t,"imag","complex");return be(e.shape,n.shape,"real and imag shapes, "+e.shape+" and "+n.shape+", must match in call to tf.complex()."),N.runKernelFunc(function(o){return o.complex(e,n)},{$real:e,$imag:n})}}),xt=T({real_:function(r){var t=C(r,"input","real");return N.runKernelFunc(function(e){return e.real(t)},{$input:t})}}),Ot=T({imag_:function(r){var t=C(r,"input","imag");return N.runKernelFunc(function(e){return e.imag(t)},{$input:t})}});function Ke(r,t,e){return bn(r,t,xn(r,e),e)}function bn(r,t,e,n){if(n==null&&(n=Sr(r)),n==="complex64")throw new Error("Cannot construct a complex64 tensor directly. Please use tf.complex(real, imag).");if(!Bt(r)&&!Array.isArray(r)&&typeof r!="number"&&typeof r!="boolean"&&typeof r!="string")throw new Error("values passed to tensor(values) must be a number/boolean/string or an array of numbers/booleans/strings, or a TypedArray");if(t!=null){Wu(t);var o=Y(t),i=Y(e);k(o===i,function(){return"Based on the provided shape, ["+t+"], the tensor should have "+o+" values but has "+i});for(var a=0;a<e.length;++a){var s=e[a],u=a!==e.length-1||s!==Y(t.slice(a));k(e[a]===t[a]||!u,function(){return"Error creating a new Tensor. Inferred shape ("+e+") does not match the provided shape ("+t+"). "})}}return Bt(r)||Array.isArray(r)||(r=[r]),t=t||e,r=n!=="string"?Bu(r,n,L().getBool("DEBUG")):nr(r,[],!0),N.makeTensor(r,t,n)}function q(r,t){if((Bt(r)&&t!=="string"||Array.isArray(r))&&t!=="complex64")throw new Error("Error creating a new Scalar: value must be a primitive (number|boolean|string)");if(t==="string"&&Bt(r)&&!(r instanceof Uint8Array))throw new Error("When making a scalar from encoded string, the value must be `Uint8Array`.");return bn(r,[],[],t)}function Fe(r,t){ar(r);var e=xn(r,t);if(e.length!==1)throw new Error("tensor1d() requires values to be a flat/TypedArray");return bn(r,null,e,t)}function dn(r,t,e){if(ar(r),t!=null&&t.length!==2)throw new Error("tensor2d() requires shape to have two numbers");var n=xn(r,e);if(n.length!==2&&n.length!==1)throw new Error("tensor2d() requires values to be number[][] or flat/TypedArray");if(n.length===1&&t==null)throw new Error("tensor2d() requires shape to be provided when `values` are a flat/TypedArray");return bn(r,t,n,e)}function ha(r,t,e){if(ar(r),t!=null&&t.length!==3)throw new Error("tensor3d() requires shape to have three numbers");var n=xn(r,e);if(n.length!==3&&n.length!==1)throw new Error("tensor3d() requires values to be number[][][] or flat/TypedArray");if(n.length===1&&t==null)throw new Error("tensor3d() requires shape to be provided when `values` are a flat array");return bn(r,t,n,e)}function nt(r,t,e){if(ar(r),t!=null&&t.length!==4)throw new Error("tensor4d() requires shape to have four numbers");var n=xn(r,e);if(n.length!==4&&n.length!==1)throw new Error("tensor4d() requires values to be number[][][][] or flat/TypedArray");if(n.length===1&&t==null)throw new Error("tensor4d() requires shape to be provided when `values` are a flat array");return bn(r,t,n,e)}function bf(r,t,e){if(ar(r),t!=null&&t.length!==5)throw new Error("tensor5d() requires shape to have five numbers");var n=xn(r,e);if(n.length!==5&&n.length!==1)throw new Error("tensor5d() requires values to be number[][][][][] or flat/TypedArray");if(n.length===1&&t==null)throw new Error("tensor5d() requires shape to be provided when `values` are a flat array");return bn(r,t,n,e)}function wf(r,t,e){if(ar(r),t!=null&&t.length!==6)throw new Error("tensor6d() requires shape to have six numbers");var n=xn(r,e);if(n.length!==6&&n.length!==1)throw new Error("tensor6d() requires values to be number[][][][][][] or flat/TypedArray");if(n.length===1&&t==null)throw new Error("tensor6d() requires shape to be provided when `values` are a flat array");return bn(r,t=t||n,n,e)}function _f(r,t,e,n){return t===void 0&&(t=!0),N.makeVariable(r,t,e,n)}function sr(r,t){if(t===void 0&&(t="float32"),t==="complex64"){var e=sr(r,"float32"),n=Ce(r,"float32");return qe(e,n)}var o=Lu(Y(r),t);return N.makeTensor(o,r,t)}function Ce(r,t){if(t===void 0&&(t="float32"),t==="complex64"){var e=Ce(r,"float32"),n=Ce(r,"float32");return qe(e,n)}var o=Ar(Y(r),t);return N.makeTensor(o,r,t)}function Wt(r,t,e){return N.runKernelFunc(function(n){return n.fill(r,t,e)},{})}function Cf(r,t,e){if(e<=0)throw new Error("The number of values should be positive.");return N.runKernelFunc(function(n){return n.linspace(r,t,e)},{})}function mo(r,t,e,n){if(e===void 0&&(e=1),n===void 0&&(n="float32"),e===0)throw new Error("Cannot have a step of zero");if(r===t||r<t&&e<0||t<r&&e>1)return Ce([0],n);var o=Ar(Math.abs(Math.ceil((t-r)/e)),n);t<r&&e===1&&(e=-1),o[0]=r;for(var i=1;i<o.length;i++)o[i]=o[i-1]+e;return Fe(o,n)}var ju=T({onesLike_:function(r){var t=C(r,"x","onesLike");if(t.dtype==="complex64"){var e=ju(xt(t)),n=me(Ot(t));return qe(e,n)}return N.runKernelFunc(function(o){return o.onesLike(t)},{$x:t},function(o,i){return{$x:function(){return me(o)}}})}}),me=T({zerosLike_:function(r){var t=C(r,"x","zerosLike");return N.runKernelFunc(function(e){return e.zerosLike(t)},{$x:t},function(e,n){return{$x:function(){return me(e)}}})}}),Me=T({concat_:function(r,t){t===void 0&&(t=0),k(r.length>=1,function(){return"Pass at least one tensor to concat"});var e=vo(r,"tensors","concat");e[0].dtype==="complex64"&&e.forEach(function(s){if(s.dtype!=="complex64")throw new Error(`Cannot concatenate complex64 tensors with a tensor
          with dtype `+s.dtype+". ")}),t=Ue(t,e[0].shape)[0];var n=or(e.map(function(s){return s.shape}),t);if(Y(n)===0)return Ke([],n);if((e=e.filter(function(s){return s.size>0})).length===1)return e[0];var o=e.map(function(s){return s.shape});xf(o,t);var i=e,a={axis:t};return N.runKernelFunc(function(s){return s.concat(e,t)},i,function(s){var u=o.map(function(c){return c[t]});return fa(s,u,t).map(function(c){return function(){return c}})},"Concat",a)}}),Ef=T({concat1d_:function(r){return Me(r,0)}}),Rf=T({concat2d_:function(r,t){return Me(r,t)}}),kf=T({concat3d_:function(r,t){return Me(r,t)}}),If=T({concat4d_:function(r,t){return Me(r,t)}}),fa=T({split_:function(r,t,e){e===void 0&&(e=0);var n,o=C(r,"x","split");return e=Ue(e,o.shape)[0],typeof t=="number"?(k(o.shape[e]%t==0,function(){return"Number of splits must evenly divide the axis."}),n=new Array(t).fill(o.shape[e]/t)):(k(o.shape[e]===t.reduce(function(i,a){return i+a}),function(){return"The sum of sizes must match the size of the axis dimension."}),n=t),N.runKernelFunc(function(i){return i.split(o,n,e)},{$x:o},function(i){return{$x:function(){return Me(i,e)}}})}});function Nn(r,t){return r(t={exports:{}},t.exports),t.exports}var Sf=Nn(function(r){(function(t,e,n){function o(s){var u,c=this,l=(u=4022871197,function(h){h=h.toString();for(var f=0;f<h.length;f++){var p=.02519603282416938*(u+=h.charCodeAt(f));p-=u=p>>>0,u=(p*=u)>>>0,u+=4294967296*(p-=u)}return 23283064365386963e-26*(u>>>0)});c.next=function(){var h=2091639*c.s0+23283064365386963e-26*c.c;return c.s0=c.s1,c.s1=c.s2,c.s2=h-(c.c=0|h)},c.c=1,c.s0=l(" "),c.s1=l(" "),c.s2=l(" "),c.s0-=l(s),c.s0<0&&(c.s0+=1),c.s1-=l(s),c.s1<0&&(c.s1+=1),c.s2-=l(s),c.s2<0&&(c.s2+=1),l=null}function i(s,u){return u.c=s.c,u.s0=s.s0,u.s1=s.s1,u.s2=s.s2,u}function a(s,u){var c=new o(s),l=u&&u.state,h=c.next;return h.int32=function(){return 4294967296*c.next()|0},h.double=function(){return h()+11102230246251565e-32*(2097152*h()|0)},h.quick=h,l&&(typeof l=="object"&&i(l,c),h.state=function(){return i(c,{})}),h}e&&e.exports?e.exports=a:this.alea=a})(0,r)}),Af=Nn(function(r){(function(t,e,n){function o(s){var u=this,c="";u.x=0,u.y=0,u.z=0,u.w=0,u.next=function(){var h=u.x^u.x<<11;return u.x=u.y,u.y=u.z,u.z=u.w,u.w^=u.w>>>19^h^h>>>8},s===(0|s)?u.x=s:c+=s;for(var l=0;l<c.length+64;l++)u.x^=0|c.charCodeAt(l),u.next()}function i(s,u){return u.x=s.x,u.y=s.y,u.z=s.z,u.w=s.w,u}function a(s,u){var c=new o(s),l=u&&u.state,h=function(){return(c.next()>>>0)/4294967296};return h.double=function(){do var f=((c.next()>>>11)+(c.next()>>>0)/4294967296)/2097152;while(f===0);return f},h.int32=c.next,h.quick=h,l&&(typeof l=="object"&&i(l,c),h.state=function(){return i(c,{})}),h}e&&e.exports?e.exports=a:this.xor128=a})(0,r)}),Tf=Nn(function(r){(function(t,e,n){function o(s){var u=this,c="";u.next=function(){var h=u.x^u.x>>>2;return u.x=u.y,u.y=u.z,u.z=u.w,u.w=u.v,(u.d=u.d+362437|0)+(u.v=u.v^u.v<<4^h^h<<1)|0},u.x=0,u.y=0,u.z=0,u.w=0,u.v=0,s===(0|s)?u.x=s:c+=s;for(var l=0;l<c.length+64;l++)u.x^=0|c.charCodeAt(l),l==c.length&&(u.d=u.x<<10^u.x>>>4),u.next()}function i(s,u){return u.x=s.x,u.y=s.y,u.z=s.z,u.w=s.w,u.v=s.v,u.d=s.d,u}function a(s,u){var c=new o(s),l=u&&u.state,h=function(){return(c.next()>>>0)/4294967296};return h.double=function(){do var f=((c.next()>>>11)+(c.next()>>>0)/4294967296)/2097152;while(f===0);return f},h.int32=c.next,h.quick=h,l&&(typeof l=="object"&&i(l,c),h.state=function(){return i(c,{})}),h}e&&e.exports?e.exports=a:this.xorwow=a})(0,r)}),Df=Nn(function(r){(function(t,e,n){function o(s){var u=this;u.next=function(){var c,l,h=u.x,f=u.i;return c=h[f],l=(c^=c>>>7)^c<<24,l^=(c=h[f+1&7])^c>>>10,l^=(c=h[f+3&7])^c>>>3,l^=(c=h[f+4&7])^c<<7,c=h[f+7&7],l^=(c^=c<<13)^c<<9,h[f]=l,u.i=f+1&7,l},function(c,l){var h,f=[];if(l===(0|l))f[0]=l;else for(l=""+l,h=0;h<l.length;++h)f[7&h]=f[7&h]<<15^l.charCodeAt(h)+f[h+1&7]<<13;for(;f.length<8;)f.push(0);for(h=0;h<8&&f[h]===0;++h);for(h==8?f[7]=-1:f[h],c.x=f,c.i=0,h=256;h>0;--h)c.next()}(u,s)}function i(s,u){return u.x=s.x.slice(),u.i=s.i,u}function a(s,u){s==null&&(s=+new Date);var c=new o(s),l=u&&u.state,h=function(){return(c.next()>>>0)/4294967296};return h.double=function(){do var f=((c.next()>>>11)+(c.next()>>>0)/4294967296)/2097152;while(f===0);return f},h.int32=c.next,h.quick=h,l&&(l.x&&i(l,c),h.state=function(){return i(c,{})}),h}e&&e.exports?e.exports=a:this.xorshift7=a})(0,r)}),Nf=Nn(function(r){(function(t,e,n){function o(s){var u=this;u.next=function(){var c,l,h=u.w,f=u.X,p=u.i;return u.w=h=h+1640531527|0,l=f[p+34&127],c=f[p=p+1&127],l^=l<<13,c^=c<<17,l^=l>>>15,c^=c>>>12,l=f[p]=l^c,u.i=p,l+(h^h>>>16)|0},function(c,l){var h,f,p,d,m,v=[],g=128;for(l===(0|l)?(f=l,l=null):(l+="\0",f=0,g=Math.max(g,l.length)),p=0,d=-32;d<g;++d)l&&(f^=l.charCodeAt((d+32)%l.length)),d===0&&(m=f),f^=f<<10,f^=f>>>15,f^=f<<4,f^=f>>>13,d>=0&&(m=m+1640531527|0,p=(h=v[127&d]^=f+m)==0?p+1:0);for(p>=128&&(v[127&(l&&l.length||0)]=-1),p=127,d=512;d>0;--d)f=v[p+34&127],h=v[p=p+1&127],f^=f<<13,h^=h<<17,f^=f>>>15,h^=h>>>12,v[p]=f^h;c.w=m,c.X=v,c.i=p}(u,s)}function i(s,u){return u.i=s.i,u.w=s.w,u.X=s.X.slice(),u}function a(s,u){s==null&&(s=+new Date);var c=new o(s),l=u&&u.state,h=function(){return(c.next()>>>0)/4294967296};return h.double=function(){do var f=((c.next()>>>11)+(c.next()>>>0)/4294967296)/2097152;while(f===0);return f},h.int32=c.next,h.quick=h,l&&(l.X&&i(l,c),h.state=function(){return i(c,{})}),h}e&&e.exports?e.exports=a:this.xor4096=a})(0,r)}),Ff=Nn(function(r){(function(t,e,n){function o(s){var u=this,c="";u.next=function(){var h=u.b,f=u.c,p=u.d,d=u.a;return h=h<<25^h>>>7^f,f=f-p|0,p=p<<24^p>>>8^d,d=d-h|0,u.b=h=h<<20^h>>>12^f,u.c=f=f-p|0,u.d=p<<16^f>>>16^d,u.a=d-h|0},u.a=0,u.b=0,u.c=-1640531527,u.d=1367130551,s===Math.floor(s)?(u.a=s/4294967296|0,u.b=0|s):c+=s;for(var l=0;l<c.length+20;l++)u.b^=0|c.charCodeAt(l),u.next()}function i(s,u){return u.a=s.a,u.b=s.b,u.c=s.c,u.d=s.d,u}function a(s,u){var c=new o(s),l=u&&u.state,h=function(){return(c.next()>>>0)/4294967296};return h.double=function(){do var f=((c.next()>>>11)+(c.next()>>>0)/4294967296)/2097152;while(f===0);return f},h.int32=c.next,h.quick=h,l&&(typeof l=="object"&&i(l,c),h.state=function(){return i(c,{})}),h}e&&e.exports?e.exports=a:this.tychei=a})(0,r)}),Rn=Nn(function(r){(function(t,e){var n,o=this,i=256,a=6,s="random",u=e.pow(i,a),c=e.pow(2,52),l=2*c,h=i-1;function f(g,x,b){var y=[],w=m(function I(E,R){var D,A=[],M=typeof E;if(R&&M=="object")for(D in E)try{A.push(I(E[D],R-1))}catch{}return A.length?A:M=="string"?E:E+"\0"}((x=x==1?{entropy:!0}:x||{}).entropy?[g,v(t)]:g??function(){try{var I;return n&&(I=n.randomBytes)?I=I(i):(I=new Uint8Array(i),(o.crypto||o.msCrypto).getRandomValues(I)),v(I)}catch{var E=o.navigator,R=E&&E.plugins;return[+new Date,o,R,o.screen,v(t)]}}(),3),y),_=new p(y),S=function(){for(var I=_.g(a),E=u,R=0;I<c;)I=(I+R)*i,E*=i,R=_.g(1);for(;I>=l;)I/=2,E/=2,R>>>=1;return(I+R)/E};return S.int32=function(){return 0|_.g(4)},S.quick=function(){return _.g(4)/4294967296},S.double=S,m(v(_.S),t),(x.pass||b||function(I,E,R,D){return D&&(D.S&&d(D,_),I.state=function(){return d(_,{})}),R?(e[s]=I,E):I})(S,w,"global"in x?x.global:this==e,x.state)}function p(g){var x,b=g.length,y=this,w=0,_=y.i=y.j=0,S=y.S=[];for(b||(g=[b++]);w<i;)S[w]=w++;for(w=0;w<i;w++)S[w]=S[_=h&_+g[w%b]+(x=S[w])],S[_]=x;(y.g=function(I){for(var E,R=0,D=y.i,A=y.j,M=y.S;I--;)E=M[D=h&D+1],R=R*i+M[h&(M[D]=M[A=h&A+E])+(M[A]=E)];return y.i=D,y.j=A,R})(i)}function d(g,x){return x.i=g.i,x.j=g.j,x.S=g.S.slice(),x}function m(g,x){for(var b,y=g+"",w=0;w<y.length;)x[h&w]=h&(b^=19*x[h&w])+y.charCodeAt(w++);return v(x)}function v(g){return String.fromCharCode.apply(0,g)}if(e["seed"+s]=f,m(e.random(),t),r.exports){r.exports=f;try{n=require("crypto")}catch{}}})([],Math)});Rn.alea=Sf,Rn.xor128=Af,Rn.xorwow=Tf,Rn.xorshift7=Df,Rn.xor4096=Nf,Rn.tychei=Ff;var No=Rn.alea,pa=function(){function r(t,e,n,o,i){this.mean=t,this.stdDev=e,this.dtype=n,this.nextVal=NaN,this.truncated=o,this.truncated&&(this.upper=this.mean+2*this.stdDev,this.lower=this.mean-2*this.stdDev);var a=i||Math.random();this.random=No(a.toString())}return r.prototype.nextValue=function(){if(!isNaN(this.nextVal)){var t=this.nextVal;return this.nextVal=NaN,t}for(var e,n,o=!1;!o;){var i=void 0,a=void 0,s=void 0;do s=(i=2*this.random()-1)*i+(a=2*this.random()-1)*a;while(s>=1||s===0);var u=Math.sqrt(-2*Math.log(s)/s);e=this.mean+this.stdDev*i*u,n=this.mean+this.stdDev*a*u,this.truncated&&!this.isValidTruncated(e)||(o=!0)}return this.truncated&&!this.isValidTruncated(n)||(this.nextVal=this.convertValue(n)),this.convertValue(e)},r.prototype.convertValue=function(t){return this.dtype==null||this.dtype==="float32"?t:Math.round(t)},r.prototype.isValidTruncated=function(t){return t<=this.upper&&t>=this.lower},r}(),Pf=function(){function r(t,e,n,o){this.alpha=t,this.beta=1/e,this.dtype=n;var i=o||Math.random();this.randu=No(i.toString()),this.randn=new pa(0,1,n,!1,this.randu()),this.d=t<1?t+2/3:t-1/3,this.c=1/Math.sqrt(9*this.d)}return r.prototype.nextValue=function(){for(var t,e,n,o,i,a;;){do o=this.randn.nextValue(),a=1+this.c*o;while(a<=0);if(a*=a*a,e=1-.331*(t=o*o)*t,n=.5*t+this.d*(1-a+Math.log(a)),(i=this.randu())<e||Math.log(i)<n)break}return a=1/this.beta*this.d*a,this.alpha<1&&(a*=Math.pow(this.randu(),1/this.alpha)),this.convertValue(a)},r.prototype.convertValue=function(t){return this.dtype==="float32"?t:Math.round(t)},r}(),Of=function(){function r(t,e,n,o){var i=this;if(t===void 0&&(t=0),e===void 0&&(e=1),this.canReturnFloat=function(){return i.dtype==null||i.dtype==="float32"},this.min=t,this.range=e-t,this.dtype=n,o==null&&(o=Math.random()),typeof o=="number"&&(o=o.toString()),!this.canReturnFloat()&&this.range<=1)throw new Error("The difference between "+t+" - "+e+" <= 1 and dtype is not float");this.random=No(o)}return r.prototype.convertValue=function(t){return this.canReturnFloat()?t:Math.round(t)},r.prototype.nextValue=function(){return this.convertValue(this.min+this.range*this.random())},r}();function oe(r,t,e){return t===void 0&&(t="float32"),t=t||"float32",Wu(r),new xr(r,t,e)}function Mf(r,t){t===void 0&&(t=!1),console.log(r.toString(t))}var Ku=T({batchToSpaceND_:function(r,t,e){var n=C(r,"x","batchToSpaceND"),o=t.reduce(function(i,a){return i*a});return k(n.rank>=1+t.length,function(){return"input rank is "+n.rank+" but should be > than blockShape.length "+t.length}),k(e.length===t.length,function(){return"crops.length is "+e.length+" but should be equal to blockShape.length  "+t.length}),k(n.shape[0]%o==0,function(){return"input tensor batch is "+n.shape[0]+" but is not divisible by the product of the elements of blockShape "+t.join(" * ")+" === "+o}),N.runKernelFunc(function(i){return i.batchToSpaceND(n,t,e)},{$x:n},function(i){return{$x:function(){return i.spaceToBatchND(t,e)}}})}}),Bf=T({broadcastTo_:function(r,t){var e=C(r,"broadcastTo","x"),n=e.shape;if(t.some(function(u){return!(u>0)||u%1!=0}))throw new Error("broadcastTo(): Invalid broadcast shape ["+t+"].");if(t.length<e.rank)throw new Error("broadcastTo(): shape.length="+t.length+" < input.rank="+e.rank+".");if(t.length>e.rank){for(var o=e.shape.slice();o.length<t.length;)o.unshift(1);e=e.reshape(o)}for(var i=Array.from(t),a=t.length-1;a>=0;a--)if(e.shape[a]===t[a])i[a]=1;else if(e.shape[a]!==1)throw new Error("broadcastTo(): ["+n+"] cannot be broadcast to ["+t+"].");var s=i.map(function(u,c){return u>1?c:-1}).filter(function(u){return u>=0});return s.length===0?e.clone():N.runKernelFunc(function(u){return u.tile(e,i)},{input:e},function(u){return{input:function(){return u.sum(s,!0)}}})}}),Lf=T({cast_:function(r,t){var e=C(r,"x","cast");if(!Ah(t))throw new Error("Failed to cast to unknown dtype "+t);if(t==="string"&&e.dtype!=="string"||t!=="string"&&e.dtype==="string")throw new Error("Only strings can be casted to strings");var n={dtype:t};return N.runKernelFunc(function(o){return o.cast(e,t)},{x:e},function(o){return{x:function(){return o.clone()}}},"Cast",n)}}),Wf=T({clone_:function(r){var t=C(r,"x","clone",null);return N.runKernelFunc(function(){return N.makeTensorFromDataId(t.dataId,t.shape,t.dtype)},{$x:t},function(e){return{$x:function(){return e.toFloat()}}})}}),Uf=T({cumsum_:function(r,t,e,n){t===void 0&&(t=0),e===void 0&&(e=!1),n===void 0&&(n=!1);var o=C(r,"x","cumsum"),i=qt([t|=0],o.rank),a=o;i!=null&&(a=o.transpose(i));var s=jt(1,o.rank)[0],u=N.runKernelFunc(function(c){return c.cumsum(a,s,e,n)},{permutedX:a},function(c){return{permutedX:function(){return c.cumsum(t,e,!n)}}});return i!=null&&(u=u.transpose(i)),u}}),Vf=T({depthToSpace_:function(r,t,e){e===void 0&&(e="NHWC");var n=C(r,"x","depthToSpace"),o=e==="NHWC"?n.shape[1]:n.shape[2],i=e==="NHWC"?n.shape[2]:n.shape[3],a=e==="NHWC"?n.shape[3]:n.shape[1];return k(o*t>=0,function(){return`Negative dimension size caused by overflow when multiplying
      `+o+" and "+t+`  for depthToSpace with input shape
      `+n.shape}),k(i*t>=0,function(){return`Negative dimension size caused by overflow when multiplying
      `+i+" and "+t+` for depthToSpace with input shape
          `+n.shape}),k(a%(t*t)==0,function(){return"Dimension size must be evenly divisible by "+t*t+" but is "+a+" for depthToSpace with input shape "+n.shape}),N.runKernelFunc(function(s){return s.depthToSpace(n,t,e)},{$x:n})}}),gt=T({expandDims_:function(r,t){t===void 0&&(t=0);var e=C(r,"x","expandDims",null);k(t<=e.rank,function(){return"Axis must be <= rank of the tensor"});var n=e.shape.slice();return t<0&&(k(-(e.rank+1)<=t,function(){return"Axis must be in the interval ["+-(e.rank+1)+", "+e.rank+"]"}),t=e.rank+t+1),n.splice(t,0,1),Et(e,n)}}),Xu=T({eye_:function(r,t,e,n){n===void 0&&(n="float32"),t==null&&(t=r);for(var o=oe([r,t],n),i=r<=t?r:t,a=0;a<i;++a)o.set(1,a,a);var s=o.toTensor().as2D(r,t);if(e==null)return s;if(e.length===1)return Yn(gt(s,0),[e[0],1,1]);if(e.length===2)return Yn(gt(gt(s,0),0),[e[0],e[1],1,1]);if(e.length===3)return Yn(gt(gt(gt(s,0),0),0),[e[0],e[1],e[2],1,1]);throw new Error("eye() currently supports only 1D and 2D batchShapes, but received "+e.length+"D.")}}),zf=T({multinomial_:function(r,t,e,n){n===void 0&&(n=!1);var o=C(r,"logits","multinomial"),i=o.size,a=o.rank;if(i<2)throw new Error("Error in multinomial: you need at least 2 outcomes, but got "+i+".");if(a>2)throw new Error("Rank of probabilities must be 1 or 2, but is "+a);e=e||Math.random();var s=a===1?o.as2D(1,-1):o,u=N.runKernelFunc(function(c){return c.multinomial(s,n,t,e)},{logits2D:s});return a===1?u.as1D():u}}),Gi=T({oneHot_:function(r,t,e,n){if(e===void 0&&(e=1),n===void 0&&(n=0),t<2)throw new Error("Error in oneHot: depth must be >=2, but it is "+t);var o=C(r,"indices","oneHot","int32"),i=o.shape.concat([t]);return o=o.flatten(),N.runKernelFunc(function(a){return a.oneHot(o,t,e,n)},{$indices:o},function(a){return{$indices:function(){return Ce(o.shape,"float32")}}}).reshape(i)}}),Fn=T({pad_:function(r,t,e){e===void 0&&(e=0);var n=C(r,"x","pad");if(n.rank===0)throw new Error("pad(scalar) is not defined. Pass non-scalar to pad");var o={paddings:t,constantValue:e};return N.runKernelFunc(function(i){return i.pad(n,t,e)},{x:n},function(i){var a=t.map(function(s){return s[0]});return{x:function(){return i.slice(a,n.shape)}}},"PadV2",o)}}),Gf=T({pad1d_:function(r,t,e){return e===void 0&&(e=0),k(t.length===2,function(){return"Invalid number of paddings. Must be length of 2."}),Fn(r,[t],e)}}),Hf=T({pad2d_:function(r,t,e){return e===void 0&&(e=0),k(t.length===2&&t[0].length===2&&t[1].length===2,function(){return"Invalid number of paddings. Must be length of 2 each."}),Fn(r,t,e)}}),qf=T({pad3d_:function(r,t,e){return e===void 0&&(e=0),k(t.length===3&&t[0].length===2&&t[1].length===2&&t[2].length===2,function(){return"Invalid number of paddings. Must be length of 2 each."}),Fn(r,t,e)}}),jf=T({pad4d_:function(r,t,e){return e===void 0&&(e=0),k(t.length===4&&t[0].length===2&&t[1].length===2&&t[2].length===2&&t[3].length===2,function(){return"Invalid number of paddings. Must be length of 2 each."}),Fn(r,t,e)}}),Kf=T({rand_:function(r,t,e){var n=Y(r),o=null;if(e==null||e==="float32")o=new Float32Array(n);else if(e==="int32")o=new Int32Array(n);else{if(e!=="bool")throw new Error("Unknown data type "+e);o=new Uint8Array(n)}for(var i=0;i<n;i++)o[i]=t();return N.makeTensor(o,r,e)}}),Xf=T({randomNormal_:function(r,t,e,n,o){if(t===void 0&&(t=0),e===void 0&&(e=1),n!=null&&n==="bool")throw new Error("Unsupported data type "+n);for(var i=new pa(t,e,n,!1,o),a=oe(r,n),s=0;s<a.values.length;s++)a.values[s]=i.nextValue();return a.toTensor()}}),$f=T({randomGamma_:function(r,t,e,n,o){if(e===void 0&&(e=1),n===void 0&&(n="float32"),e==null&&(e=1),n==null&&(n="float32"),n!=="float32"&&n!=="int32")throw new Error("Unsupported data type "+n);for(var i=new Pf(t,e,n,o),a=oe(r,n),s=0;s<a.values.length;s++)a.values[s]=i.nextValue();return a.toTensor()}}),$u=T({randomUniform_:function(r,t,e,n,o){t===void 0&&(t=0),e===void 0&&(e=1),n===void 0&&(n="float32");for(var i=oe(r,n),a=new Of(t,e,null,o),s=0;s<i.values.length;s++)i.values[s]=a.nextValue();return i.toTensor()}}),Et=T({reshape_:function(r,t){var e=C(r,"x","reshape",null);t=Ih(t,e.size),k(e.size===Y(t),function(){return"new shape and old shape must have the same number of elements."});var n={shape:t};return N.runKernelFunc(function(o){return o.reshape(e,t)},{x:e},function(o){return{x:function(){return o.reshape(e.shape)}}},"Reshape",n)}}),Yu=T({spaceToBatchND_:function(r,t,e){var n=C(r,"x","spaceToBatchND");return k(n.rank>=1+t.length,function(){return"input rank "+n.rank+" should be > than [blockShape] "+t.length}),k(e.length===t.length,function(){return"paddings.shape[0] "+e.length+" must be equal to [blockShape] "+t.length}),k(n.shape.reduce(function(o,i,a){return a>0&&a<=t.length?o&&(i+e[a-1][0]+e[a-1][1])%t[a-1]==0:o},!0),function(){return"input spatial dimensions "+n.shape.slice(1)+" with paddings "+e.toString()+" must be divisible by blockShapes "+t.toString()}),N.runKernelFunc(function(o){return o.spaceToBatchND(n,t,e)},{$x:n},function(o){return{$x:function(){return o.batchToSpaceND(t,e)}}})}}),Ju=T({squeeze_:function(r,t){var e=C(r,"x","squeeze");return Et(e,kn(e.shape,t).newShape)}}),vt=T({stack_:function(r,t){t===void 0&&(t=0);var e=vo(r,"tensors","stack");if(k(e.length>=1,function(){return"Pass at least one tensor to tf.stack"}),e.length===1)return e[0].expandDims(t);var n=e[0].rank,o=e[0].shape,i=e[0].dtype;k(t<=n,function(){return"Axis must be <= rank of the tensor"}),e.forEach(function(s){be(o,s.shape,"All tensors passed to stack must have matching shapes")}),e.forEach(function(s){k(i===s.dtype,function(){return"All tensors passed to stack must have matching dtypes"})});var a=e.map(function(s){return s.expandDims(t)});return Me(a,t)}}),Yn=T({tile_:function(r,t){var e=C(r,"x","tile",null);k(e.rank===t.length,function(){return"Error in transpose: rank of input "+e.rank+" must match length of reps "+t+"."});var n=[e],o={reps:t};return N.runKernelFunc(function(i,a){var s=i.tile(e,t);return a([e]),s},{x:e},function(i,a){var s=a[0];return{x:function(){var u=me(s);if(s.rank===1)for(var c=0;c<t[0];++c)u=u.add(i.slice([c*s.shape[0]],[s.shape[0]]));else if(s.rank===2)for(c=0;c<t[0];++c)for(var l=0;l<t[1];++l)u=u.add(i.slice([c*s.shape[0],l*s.shape[1]],[s.shape[0],s.shape[1]]));else if(s.rank===3)for(c=0;c<t[0];++c)for(l=0;l<t[1];++l)for(var h=0;h<t[2];++h)u=u.add(i.slice([c*s.shape[0],l*s.shape[1],h*s.shape[2]],[s.shape[0],s.shape[1],s.shape[2]]));else{if(s.rank!==4)throw new Error("Gradient for tile operation is not implemented for rank-"+s.rank+" tensors yet.");for(c=0;c<t[0];++c)for(l=0;l<t[1];++l)for(h=0;h<t[2];++h)for(var f=0;f<t[3];++f)u=u.add(i.slice([c*s.shape[0],l*s.shape[1],h*s.shape[2],f*s.shape[3]],[s.shape[0],s.shape[1],s.shape[2],s.shape[3]]))}return u}}},"Tile",o,n)}}),Yf=T({truncatedNormal_:function(r,t,e,n,o){if(t===void 0&&(t=0),e===void 0&&(e=1),n!=null&&n==="bool")throw new Error("Unsupported data type "+n);for(var i=new pa(t,e,n,!0,o),a=oe(r,n),s=0;s<a.values.length;s++)a.values[s]=i.nextValue();return a.toTensor()}}),Be=T({unstack_:function(r,t){t===void 0&&(t=0),t=t||0;var e=C(r,"x","unstack");k(t>=-e.shape.length&&t<e.shape.length,function(){return"Axis = "+t+" is not in [-"+e.shape.length+", "+e.shape.length+")"}),t<0&&(t+=e.shape.length);var n={axis:t};return N.runKernelFunc(function(o){return o.unstack(e,t)},{x:e},function(o){return{x:function(){return vt(o,t)}}},"Unpack",n)}}),Jf=function(r,t){return X(this,void 0,void 0,function(){var e,n,o,i,a,s,u,c,l,h;return $(this,function(f){switch(f.label){case 0:return e=C(r,"x","setdiff1d"),n=C(t,"y","setdiff1d"),k(e.dtype===n.dtype,function(){return"x and y should have the same dtype, but got x ("+e.dtype+") and y ("+n.dtype+")."}),k(e.rank===1,function(){return"x should be 1D tensor, but got x ("+e.shape+")."}),k(n.rank===1,function(){return"y should be 1D tensor, but got y ("+n.shape+")."}),[4,e.data()];case 1:return o=f.sent(),[4,n.data()];case 2:for(i=f.sent(),a=new Set(i),s=0,l=0;l<o.length;l++)a.has(o[l])||s++;for(u=new xr([s],e.dtype),c=new xr([s],"int32"),l=0,h=0;l<o.length;l++)a.has(o[l])||(u.values[h]=o[l],c.values[h]=l,h++);return[2,[u.toTensor(),c.toTensor()]]}})})};function go(r,t,e,n){n===void 0&&(n=!0);var o=[];if(n)(o=o.concat(t.slice(0))).push(r[0]/e),o=o.concat(r.slice(1));else{o=o.concat(r[0]);for(var i=t.length,a=0;a<i;++a)o=o.concat([r[a+1]/t[a],t[a]]);o=o.concat(r.slice(i+1))}return o}function yo(r,t,e){e===void 0&&(e=!0);var n=[];if(e){n.push(t);for(var o=t+1;o<r;++o)o<=2*t?(n.push(o),n.push(o-(t+1))):n.push(o)}else{var i=[],a=[];for(o=1;o<r;++o)o>=2*t+1||o%2==1?a.push(o):i.push(o);n.push.apply(n,i),n.push(0),n.push.apply(n,a)}return n}function xo(r,t,e,n){n===void 0&&(n=!0);var o=[];n?o.push(r[0]/e):o.push(r[0]*e);for(var i=1;i<r.length;++i)i<=t.length?n?o.push(t[i-1]*r[i]):o.push(r[i]/t[i-1]):o.push(r[i]);return o}function Qu(r,t){for(var e=[0],n=0;n<t;++n)e.push(r[n][0]);return e}function Zu(r,t,e){for(var n=r.slice(0,1),o=0;o<e;++o)n.push(r[o+1]-t[o][0]-t[o][1]);return n}function ec(r,t){if(r.rank<1)throw new Error("tf.gatherND() expects the input to be rank 1 or higher, but the rank was "+r.rank+".");if(t.rank<1)throw new Error("tf.gatherND() expects the indices to be rank 1 or higher, but the rank was "+t.rank+".");if(t.dtype!=="int32")throw new Error("tf.gatherND() expects the indices to be int32 type, but the dtype was "+t.dtype+".");if(t.shape[t.rank-1]>r.rank)throw new Error("index innermost dimension length must be <= tensor rank; saw: "+t.shape[t.rank-1]+" vs. "+r.rank);if(r.size===0)throw new Error("Requested more than 0 entries, but input is empty. Input shape: "+r.shape+".");for(var e=t.shape,n=e[e.length-1],o=1,i=0;i<e.length-1;++i)o*=e[i];var a=r.shape,s=e.slice();s.pop();var u=1;for(i=n;i<r.rank;++i)u*=a[i],s.push(a[i]);var c=Lt(r.shape).map(function(l){return l/u}).concat([1]).slice(0,n);return[s,o,u,c]}var tc=30;function li(r){return r<=tc?r:Bi(r,Math.floor(Math.sqrt(r)))}function Qf(r,t,e){var n=t.rank>1?t.shape[t.rank-1]:1,o=t.rank>1?t.rank-1:1,i="Must have updates.shape = indices.shape[:batchDim] + shape[sliceDim:], got updates.shape: "+e.shape+", indices.shape: "+t.shape+", shape: "+r+", sliceDim: "+n+", and batchDim: "+o+".";if(e.rank<o)throw new Error(i+" update.rank < "+o+". ");if(r.length<n+(e.rank-o))throw new Error(i+" Output shape length < "+(n+(e.rank-o)));if(e.rank!==o+r.length-n)throw new Error(i+" update.rank != "+(o+r.length-n));for(var a=0;a<o;++a)if(e.shape[a]!==t.shape[a])throw new Error(i+" updates.shape["+a+"] ("+e.shape[a]+") != indices.shape["+a+"] ("+t.shape[a]+").");for(a=0;a<e.rank-o;++a)if(e.shape[a+o]!==r[a+n])throw new Error(i+" updates.shape["+(a+o)+"] ("+e.shape[a+o]+") != shape["+(a+o)+"] ("+r[a+o]+")")}function Zf(r,t,e){if(t.rank<1)throw new Error("tf.scatterND() expects the indices to be rank 1 or higher, but the rank was "+t.rank+".");if(r.rank<1)throw new Error("tf.scatterND() expects the updates to be rank 1 or higher, but the rank was "+r.rank+".");if(t.dtype!=="int32")throw new Error("The dtype of 'indices' should be int32, but got dtype: "+t.dtype);if(e.length<1)throw new Error("Output rank must be greater or equal to 1, but got shape: "+e);if(e.length===0){if(t.size===0)throw new Error("Indices specified for empty output. indices shape: "+t.shape);if(r.size===0)throw new Error("Updates specified for empty output. updates shape: "+r.shape)}Qf(e,t,r)}function bo(r,t,e){for(var n=t.shape.length,o=n>1?t.shape[n-1]:1,i=e.length,a=1,s=o;s<i;++s)a*=e[s];var u=o<1?1:o;return{sliceRank:o,numUpdates:Y(t.shape)/u,sliceSize:a,strides:Lt(e.slice(0,o)).concat([1]),outputSize:Y(e)}}function ep(r,t,e){k(r.rank===t.length,function(){return"Error in slice"+r.rank+"D: Length of begin "+t+" must match the rank of the array ("+r.rank+")."}),k(r.rank===e.length,function(){return"Error in slice"+r.rank+"D: Length of size "+e+" must match the rank of the array ("+r.rank+")."});for(var n=function(i){k(t[i]+e[i]<=r.shape[i],function(){return"Error in slice"+r.rank+"D: begin["+i+"] + size["+i+"] ("+(t[i]+e[i])+") would overflow input.shape["+i+"] ("+r.shape[i]+")"})},o=0;o<r.rank;++o)n(o)}function Ns(r){for(var t=[],e=0;r>0;)1&r&&t.push(e),r/=2,e++;return t}function da(r,t,e){for(var n=[],o=0;o<r.length;o++)n[o]=Math.ceil((t[o]-r[o])/e[o]);return n}function tp(r,t,e,n,o){var i=t[o],a=e[o]||1;(r&1<<o||i==null)&&(i=a>0?Number.MIN_SAFE_INTEGER:Number.MAX_SAFE_INTEGER);var s=n[o];return i<0&&(i+=s),i=Pi(0,i,s-1)}function np(r,t,e,n,o){var i=t[o],a=e[o]||1;(r&1<<o||i==null)&&(i=a>0?Number.MAX_SAFE_INTEGER:Number.MIN_SAFE_INTEGER);var s=n[o];return i<0&&(i+=s),i=a>0?Pi(0,i,s):Pi(-1,i,s-1)}function nc(r,t,e){for(var n=e.length,o=0;o<e.length;o++)if(e[o]>1){n=o;break}for(o=n+1;o<e.length;o++)if(t[o]>0||e[o]!==r[o])return!1;return!0}function rc(r,t){for(var e=r.length>0?r[r.length-1]:1,n=0;n<r.length-1;n++)e+=r[n]*t[n];return e}function rp(r,t){k(Mi(r),function(){return"The f passed in variableGrads(f) must be a function"}),k(t==null||Array.isArray(t)&&t.every(function(l){return l instanceof rr}),function(){return"The varList passed in variableGrads(f, varList) must be an array of variables"});var e=t!=null;if(!e)for(var n in t=[],N.registeredVariables)t.push(N.registeredVariables[n]);var o=e?t.filter(function(l){return!l.trainable}):null,i=t.length;k((t=t.filter(function(l){return l.trainable})).length>0,function(){return"variableGrads() expects at least one of the input variables to be trainable, but none of the "+i+" variables is trainable."});var a=N.gradients(r,t,null,!0),s=a.value,u=a.grads;k(u.some(function(l){return l!=null}),function(){return"Cannot find a connection between any variable and the result of the loss function y=f(x). Please make sure the operations that use variables are inside the function f passed to minimize()."}),k(s.rank===0,function(){return"The f passed in variableGrads(f) must return a scalar, but it returned a rank-"+s.rank+" tensor"});var c={};return t.forEach(function(l,h){u[h]!=null&&(c[l.name]=u[h])}),o!=null&&o.forEach(function(l){return c[l.name]=null}),{value:s,grads:c}}function Fo(r){return N.customGrad(r)}var nn=T({softmax_:function(r,t){t===void 0&&(t=-1);var e=C(r,"logits","softmax","float32");if(t===-1&&(t=e.rank-1),t!==e.rank-1)throw Error("Softmax along a non-last dimension is not yet supported. Logits was rank "+e.rank+" and dim was "+t);return N.runKernelFunc(function(n,o){var i=n.softmax(e,t);return o([i]),i},{logits:e},function(n,o){var i=o[0],a=n.mul(i);return{logits:function(){return a.sub(a.sum([t],!0).mul(i))}}},"Softmax",{dim:t},[],[!0])}}),op=T({logSoftmax_:function(r,t){t===void 0&&(t=-1);var e=C(r,"logits","logSoftmax");if(t===-1&&(t=e.rank-1),t!==e.rank-1)throw Error("Log Softmax along a non-last dimension is not yet supported. Logits was rank "+e.rank+" and axis was "+t);return Fo(function(n,o){var i=n.max(t,!0),a=n.sub(i),s=a.toFloat().sub(a.exp().sum(t,!0).log());return o([s]),{value:s,gradFunc:function(u,c){var l=c[0].exp();return u.sub(u.sum(t,!0).mul(l))}}})(e)}}),oc=function(){function r(t,e){this.backend=t,this.dataMover=e,this.data=new WeakMap,this.dataIdsCount=0}return r.prototype.get=function(t){return this.data.has(t)||this.dataMover.moveData(this.backend,t),this.data.get(t)},r.prototype.set=function(t,e){this.dataIdsCount++,this.data.set(t,e)},r.prototype.has=function(t){return this.data.has(t)},r.prototype.delete=function(t){return this.dataIdsCount--,this.data.delete(t)},r.prototype.numDataIds=function(){return this.dataIdsCount},r}(),ic=function(){function r(){}return r.prototype.time=function(t){return F("time")},r.prototype.read=function(t){return F("read")},r.prototype.readSync=function(t){return F("readSync")},r.prototype.numDataIds=function(){return F("numDataIds")},r.prototype.disposeData=function(t){return F("disposeData")},r.prototype.write=function(t,e,n){return F("write")},r.prototype.move=function(t,e,n,o){return F("move")},r.prototype.memory=function(){return F("memory")},r.prototype.floatPrecision=function(){return F("floatPrecision")},r.prototype.epsilon=function(){return this.floatPrecision()===32?1e-7:1e-4},r.prototype.batchMatMul=function(t,e,n,o){return F("batchMatMul")},r.prototype.fusedBatchMatMul=function(t){return t.a,t.b,t.transposeA,t.transposeB,t.bias,t.activation,t.preluActivationWeights,F("fusedBatchMatMul")},r.prototype.slice=function(t,e,n){return F("slice")},r.prototype.stridedSlice=function(t,e,n,o){return F("stridedSlice")},r.prototype.unstack=function(t,e){return F("unstack")},r.prototype.reverse=function(t,e){return F("reverse")},r.prototype.concat=function(t,e){return F("concat")},r.prototype.neg=function(t){return F("neg")},r.prototype.add=function(t,e){return F("add")},r.prototype.addN=function(t){return F("addN")},r.prototype.subtract=function(t,e){return F("subtract")},r.prototype.multiply=function(t,e){return F("multiply")},r.prototype.realDivide=function(t,e){return F("realDivide")},r.prototype.floorDiv=function(t,e){return F("floorDiv")},r.prototype.sum=function(t,e){return F("sum")},r.prototype.prod=function(t,e){return F("prod")},r.prototype.unsortedSegmentSum=function(t,e,n){return F("unsortedSegmentSum")},r.prototype.argMin=function(t,e){return F("argMin")},r.prototype.argMax=function(t,e){return F("argMax")},r.prototype.equal=function(t,e){return F("equal")},r.prototype.notEqual=function(t,e){return F("notEqual")},r.prototype.less=function(t,e){return F("less")},r.prototype.lessEqual=function(t,e){return F("lessEqual")},r.prototype.greater=function(t,e){return F("greater")},r.prototype.greaterEqual=function(t,e){return F("greaterEqual")},r.prototype.logicalNot=function(t){return F("logicalNot")},r.prototype.logicalAnd=function(t,e){return F("logicalAnd")},r.prototype.logicalOr=function(t,e){return F("logicalOr")},r.prototype.where=function(t){return F("where")},r.prototype.select=function(t,e,n){return F("select")},r.prototype.topk=function(t,e,n){return F("topk")},r.prototype.min=function(t,e){return F("min")},r.prototype.minimum=function(t,e){return F("minimum")},r.prototype.mod=function(t,e){return F("mod")},r.prototype.max=function(t,e){return F("max")},r.prototype.maximum=function(t,e){return F("maximum")},r.prototype.all=function(t,e){return F("all")},r.prototype.any=function(t,e){return F("any")},r.prototype.squaredDifference=function(t,e){return F("squaredDifference")},r.prototype.ceil=function(t){return F("ceil")},r.prototype.floor=function(t){return F("floor")},r.prototype.round=function(t){return F("round")},r.prototype.sign=function(t){return F("sign")},r.prototype.isNaN=function(t){return F("isNaN")},r.prototype.isInf=function(t){return F("isInf")},r.prototype.isFinite=function(t){return F("isFinite")},r.prototype.pow=function(t,e){return F("pow")},r.prototype.exp=function(t){return F("exp")},r.prototype.expm1=function(t){return F("expm1")},r.prototype.softmax=function(t,e){return F("softmax")},r.prototype.log=function(t){return F("log")},r.prototype.log1p=function(t){return F("log1p")},r.prototype.sqrt=function(t){return F("sqrt")},r.prototype.rsqrt=function(t){return F("rsqrt")},r.prototype.square=function(t){return F("square")},r.prototype.reciprocal=function(t){return F("reciprocal")},r.prototype.relu=function(t){return F("relu")},r.prototype.relu6=function(t){return F("relu6")},r.prototype.prelu=function(t,e){return F("prelu")},r.prototype.elu=function(t){return F("elu")},r.prototype.eluDer=function(t,e){return F("eluDer")},r.prototype.selu=function(t){return F("selu")},r.prototype.int=function(t){return F("int")},r.prototype.clip=function(t,e,n){return F("clip")},r.prototype.abs=function(t){return F("abs")},r.prototype.complexAbs=function(t){return F("complexAbs")},r.prototype.sigmoid=function(t){return F("sigmoid")},r.prototype.softplus=function(t){return F("softplus")},r.prototype.sin=function(t){return F("sin")},r.prototype.cos=function(t){return F("cos")},r.prototype.tan=function(t){return F("tan")},r.prototype.asin=function(t){return F("asin")},r.prototype.acos=function(t){return F("acos")},r.prototype.atan=function(t){return F("atan")},r.prototype.atan2=function(t,e){return F("atan2")},r.prototype.sinh=function(t){return F("sinh")},r.prototype.cosh=function(t){return F("cosh")},r.prototype.tanh=function(t){return F("tanh")},r.prototype.asinh=function(t){return F("asinh")},r.prototype.acosh=function(t){return F("acosh")},r.prototype.atanh=function(t){return F("atanh")},r.prototype.erf=function(t){return F("erf")},r.prototype.step=function(t,e){return F("step")},r.prototype.fusedConv2d=function(t){return t.input,t.filter,t.convInfo,t.bias,t.activation,t.preluActivationWeights,F("fusedConv2d")},r.prototype.conv2d=function(t,e,n){return F("conv2d")},r.prototype.conv2dDerInput=function(t,e,n){return F("conv2dDerInput")},r.prototype.conv2dDerFilter=function(t,e,n){return F("conv2dDerFilter")},r.prototype.fusedDepthwiseConv2D=function(t){return t.input,t.filter,t.convInfo,t.bias,t.activation,t.preluActivationWeights,F("fusedDepthwiseConv2D")},r.prototype.depthwiseConv2D=function(t,e,n){return F("depthwiseConv2D")},r.prototype.depthwiseConv2DDerInput=function(t,e,n){return F("depthwiseConv2DDerInput")},r.prototype.depthwiseConv2DDerFilter=function(t,e,n){return F("depthwiseConv2DDerFilter")},r.prototype.conv3d=function(t,e,n){return F("conv3d")},r.prototype.conv3dDerInput=function(t,e,n){return F("conv3dDerInput")},r.prototype.conv3dDerFilter=function(t,e,n){return F("conv3dDerFilter")},r.prototype.maxPool=function(t,e){return F("maxPool")},r.prototype.maxPoolBackprop=function(t,e,n,o){return F("maxPoolBackprop")},r.prototype.avgPool=function(t,e){return F("avgPool")},r.prototype.avgPoolBackprop=function(t,e,n){return F("avgPoolBackprop")},r.prototype.avgPool3d=function(t,e){return F("avgPool3d")},r.prototype.avgPool3dBackprop=function(t,e,n){return F("avgPool3dBackprop")},r.prototype.maxPool3d=function(t,e){return F("maxPool3d")},r.prototype.maxPool3dBackprop=function(t,e,n,o){return F("maxPool3dBackprop")},r.prototype.reshape=function(t,e){return F("reshape")},r.prototype.cast=function(t,e){return F("cast")},r.prototype.tile=function(t,e){return F("tile")},r.prototype.pad=function(t,e,n){return F("pad")},r.prototype.transpose=function(t,e){return F("transpose")},r.prototype.gather=function(t,e,n){return F("gather")},r.prototype.gatherND=function(t,e){return F("gatherND")},r.prototype.scatterND=function(t,e,n){return F("scatterND")},r.prototype.batchToSpaceND=function(t,e,n){return F("batchToSpaceND")},r.prototype.spaceToBatchND=function(t,e,n){return F("spaceToBatchND")},r.prototype.resizeBilinear=function(t,e,n,o){return F("resizeBilinear")},r.prototype.resizeBilinearBackprop=function(t,e,n){return F("resizeBilinearBackprop")},r.prototype.resizeNearestNeighbor=function(t,e,n,o){return F("resizeNearestNeighbor")},r.prototype.resizeNearestNeighborBackprop=function(t,e,n){return F("resizeNearestNeighborBackprop")},r.prototype.batchNormalization=function(t,e,n,o,i,a){return F("batchNormalization")},r.prototype.localResponseNormalization4D=function(t,e,n,o,i){return F("localResponseNormalization4D")},r.prototype.LRNGrad=function(t,e,n,o,i,a,s){return F("LRNGrad")},r.prototype.multinomial=function(t,e,n,o){return F("multinomial")},r.prototype.oneHot=function(t,e,n,o){return F("oneHot")},r.prototype.cumsum=function(t,e,n,o){return F("cumsum")},r.prototype.nonMaxSuppression=function(t,e,n,o,i){return F("nonMaxSuppression")},r.prototype.fft=function(t){return F("fft")},r.prototype.ifft=function(t){return F("ifft")},r.prototype.complex=function(t,e){return F("complex")},r.prototype.real=function(t){return F("real")},r.prototype.imag=function(t){return F("imag")},r.prototype.cropAndResize=function(t,e,n,o,i,a){return F("cropAndResize")},r.prototype.depthToSpace=function(t,e,n){return F("depthToSpace")},r.prototype.split=function(t,e,n){return F("split")},r.prototype.sparseToDense=function(t,e,n,o){return F("sparseToDense")},r.prototype.diag=function(t){return F("diag")},r.prototype.fill=function(t,e,n){return F("fill")},r.prototype.onesLike=function(t){return F("onesLike")},r.prototype.zerosLike=function(t){return F("zerosLike")},r.prototype.linspace=function(t,e,n){return F("linspace")},r.prototype.dispose=function(){return F("dispose")},r}();function F(r){throw new Error("'"+r+"' not yet implemented or not found in the registry. Did you forget to import the kernel?")}function hn(r,t){for(var e=r.length,n=[],o=0;o<e;o++){var i=e-1-o,a=r[i]||1;(t[t.length-1-o]||1)>1&&a===1&&n.unshift(i)}return n}function Le(r,t){for(var e=[],n=0;n<t.length;n++){var o=r[r.length-n-1],i=t.length-n-1,a=t[i];(o==null||o===1&&a>1)&&e.unshift(i)}return e}function le(r,t){for(var e=[],n=Math.max(r.length,t.length),o=0;o<n;o++){var i=r[r.length-o-1];i==null&&(i=1);var a=t[t.length-o-1];if(a==null&&(a=1),i===1)e.unshift(a);else if(a===1)e.unshift(i);else{if(i!==a)throw Error("Operands could not be broadcast together with shapes "+r+" and "+t+".");e.unshift(i)}}return e}function wr(r,t,e,n,o,i,a){a===void 0&&(a="channelsLast");var s,u=Co(t),c=u[0],l=u[1];if(a==="channelsLast")s=[c,l,r[3],r[3]];else{if(a!=="channelsFirst")throw new Error("Unknown dataFormat "+a);s=[c,l,r[1],r[1]]}return Pn(r,s,e,n,o,i,!1,a)}function wo(r,t,e,n,o,i,a){a===void 0&&(a="NDHWC");var s,u,c=Hi(t),l=c[0],h=c[1],f=c[2];if(a==="NDHWC")u="channelsLast",s=[l,h,f,r[4],r[4]];else{if(a!=="NCDHW")throw new Error("Unknown dataFormat "+a);u="channelsFirst",s=[l,h,f,r[1],r[1]]}return _o(r,s,e,n,o,!1,u,i)}function Pn(r,t,e,n,o,i,a,s){a===void 0&&(a=!1),s===void 0&&(s="channelsLast");var u=[-1,-1,-1,-1],c=u[0],l=u[1],h=u[2],f=u[3];if(s==="channelsLast")c=r[0],l=r[1],h=r[2],f=r[3];else{if(s!=="channelsFirst")throw new Error("Unknown dataFormat "+s);c=r[0],f=r[1],l=r[2],h=r[3]}var p,d=t[0],m=t[1],v=t[3],g=Co(e),x=g[0],b=g[1],y=Co(n),w=y[0],_=y[1],S=Jn(d,w),I=Jn(m,_),E=function(O,B,V,U,W,G,H,j){var ee,te,ae;if(typeof O=="number"){ee={top:O,bottom:O,left:O,right:O,type:O===0?"VALID":"NUMBER"};var se=function(fe,we,ye,Ae,Ee){Ae==null&&(Ae=ac(fe,we,ye));var Re=fe[0],St=fe[1],At=mr((Re-we+2*Ae)/ye+1,Ee);k(Ne(At),function(){return"The output # of rows ("+At+") must be an integer. Change the stride and/or zero pad parameters"});var ut=mr((St-we+2*Ae)/ye+1,Ee);return k(Ne(ut),function(){return"The output # of columns ("+ut+") must be an integer. Change the stride and/or zero pad parameters"}),[At,ut]}([B,V],G,U,O,j);te=se[0],ae=se[1]}else if(O==="same"){te=Math.ceil(B/U),ae=Math.ceil(V/W);var ce=Math.max(0,(te-1)*U+G-B),de=Math.max(0,(ae-1)*W+H-V),he=Math.floor(ce/2),ve=ce-he,De=Math.floor(de/2);ee={top:he,bottom:ve,left:De,right:de-De,type:"SAME"}}else{if(O!=="valid")throw Error("Unknown padding parameter: "+O);ee={top:0,bottom:0,left:0,right:0,type:"VALID"},te=Math.ceil((B-G+1)/U),ae=Math.ceil((V-H+1)/W)}return{padInfo:ee,outHeight:te,outWidth:ae}}(o,l,h,x,b,S,I,i),R=E.padInfo,D=E.outHeight,A=E.outWidth,M=a?v*f:v;return s==="channelsFirst"?p=[c,M,D,A]:s==="channelsLast"&&(p=[c,D,A,M]),{batchSize:c,dataFormat:s,inHeight:l,inWidth:h,inChannels:f,outHeight:D,outWidth:A,outChannels:M,padInfo:R,strideHeight:x,strideWidth:b,filterHeight:d,filterWidth:m,effectiveFilterHeight:S,effectiveFilterWidth:I,dilationHeight:w,dilationWidth:_,inShape:r,outShape:p,filterShape:t}}function _o(r,t,e,n,o,i,a,s){i===void 0&&(i=!1),a===void 0&&(a="channelsLast");var u=[-1,-1,-1,-1,-1],c=u[0],l=u[1],h=u[2],f=u[3],p=u[4];if(a==="channelsLast")c=r[0],l=r[1],h=r[2],f=r[3],p=r[4];else{if(a!=="channelsFirst")throw new Error("Unknown dataFormat "+a);c=r[0],p=r[1],l=r[2],h=r[3],f=r[4]}var d,m=t[0],v=t[1],g=t[2],x=t[4],b=Hi(e),y=b[0],w=b[1],_=b[2],S=Hi(n),I=S[0],E=S[1],R=S[2],D=Jn(m,I),A=Jn(v,E),M=Jn(g,R),O=function(H,j,ee,te,ae,se,ce,de,he,ve,De){var fe,we,ye,Ae;if(typeof H=="number"){fe={top:H,bottom:H,left:H,right:H,front:H,back:H,type:H===0?"VALID":"NUMBER"};var Ee=function(Ln,$t,Yo,Wn,Tt,Jo){Tt==null&&(Tt=ac(Ln,$t,Wn));var dh=Ln[0],vh=Ln[1],mh=Ln[2],Qo=mr((dh-$t+2*Tt)/Wn+1,Jo);k(Ne(Qo),function(){return"The output # of depths ("+Qo+") must be an integer. Change the stride and/or zero pad parameters"});var Zo=mr((vh-$t+2*Tt)/Wn+1,Jo);k(Ne(Zo),function(){return"The output # of rows ("+Zo+") must be an integer. Change the stride and/or zero pad parameters"});var ei=mr((mh-$t+2*Tt)/Wn+1,Jo);return k(Ne(ei),function(){return"The output # of columns ("+ei+") must be an integer. Change the stride and/or zero pad parameters"}),[Qo,Zo,ei,Yo]}([j,ee,te,1],de,1,ae,H,De);we=Ee[0],ye=Ee[1],Ae=Ee[2]}else if(H==="same"){we=Math.ceil(j/ae),ye=Math.ceil(ee/se),Ae=Math.ceil(te/ce);var Re=(we-1)*ae+de-j,St=(ye-1)*se+he-ee,At=(Ae-1)*ce+ve-te,ut=Math.floor(Re/2),Bn=Re-ut,Kt=Math.floor(St/2),un=St-Kt,Xt=Math.floor(At/2);fe={top:Kt,bottom:un,left:Xt,right:At-Xt,front:ut,back:Bn,type:"SAME"}}else{if(H!=="valid")throw Error("Unknown padding parameter: "+H);fe={top:0,bottom:0,left:0,right:0,front:0,back:0,type:"VALID"},we=Math.ceil((j-de+1)/ae),ye=Math.ceil((ee-he+1)/se),Ae=Math.ceil((te-ve+1)/ce)}return{padInfo:fe,outDepth:we,outHeight:ye,outWidth:Ae}}(o,l,h,f,y,w,_,D,A,M,s),B=O.padInfo,V=O.outDepth,U=O.outHeight,W=O.outWidth,G=i?x*p:x;return a==="channelsFirst"?d=[c,G,V,U,W]:a==="channelsLast"&&(d=[c,V,U,W,G]),{batchSize:c,dataFormat:a,inDepth:l,inHeight:h,inWidth:f,inChannels:p,outDepth:V,outHeight:U,outWidth:W,outChannels:G,padInfo:B,strideDepth:y,strideHeight:w,strideWidth:_,filterDepth:m,filterHeight:v,filterWidth:g,effectiveFilterDepth:D,effectiveFilterHeight:A,effectiveFilterWidth:M,dilationDepth:I,dilationHeight:E,dilationWidth:R,inShape:r,outShape:d,filterShape:t}}function ac(r,t,e,n){n===void 0&&(n=1);var o=Jn(t,n);return Math.floor((r[0]*(e-1)-e+o)/2)}function Co(r){return typeof r=="number"?[r,r,r]:r.length===2?[r[0],r[1],1]:r}function Hi(r){return typeof r=="number"?[r,r,r]:r}function Jn(r,t){return t<=1?r:r+(r-1)*(t-1)}function mr(r,t){if(!t)return r;switch(t){case"round":return Math.round(r);case"ceil":return Math.ceil(r);case"floor":return Math.floor(r);default:throw new Error("Unknown roundingMode "+t)}}function ir(r){var t=Co(r),e=t[0],n=t[1],o=t[2];return e===1&&n===1&&o===1}function st(r,t){return ir(r)||ir(t)}function va(r){if(r==="NHWC")return"channelsLast";if(r==="NCHW")return"channelsFirst";throw new Error("Unknown dataFormat "+r)}function sc(r,t,e){if(t==="complex64"){if(r.dtype==="complex64")return r.clone();var n=Ce(r.shape),o=r.toFloat(),i=e.complex(o,n);return n.dispose(),o.dispose(),i}if(!Th(r.dtype,t))return N.makeTensorFromDataId(r.dataId,r.shape,t);if(r.dtype==="complex64"){var a=e.real(r);return i=a.cast(t),a.dispose(),i}if(t==="int32")return e.int(r);if(t==="bool"){var s=q(0,r.dtype);return i=e.notEqual(r,s),s.dispose(),i}throw new Error("Error in Cast: failed to cast "+r.dtype+" to "+t)}function qi(r,t){return N.makeTensorFromDataId(r.dataId,t,r.dtype)}function uc(r,t,e){var n=(t-r)/(e-1),o=Ar(e,"float32");o[0]=r;for(var i=1;i<o.length;i++)o[i]=o[i-1]+n;return Fe(o,"float32")}function ji(r,t){if(r.length!==t.length)throw new Error("Cannot merge real and imag arrays of different lengths. real:"+r.length+", imag: "+t.length+".");for(var e=new Float32Array(2*r.length),n=0;n<e.length;n+=2)e[n]=r[n/2],e[n+1]=t[n/2];return e}function Fs(r,t){return{real:r[2*t],imag:r[2*t+1]}}function ip(r,t,e,n){r[2*n]=t,r[2*n+1]=e}function ap(r,t,e){var n=(e?2:-2)*Math.PI*(r/t);return{real:Math.cos(n),imag:Math.sin(n)}}function sp(r,t,e){var n=function(i,a,s){return function(u,c,l){for(var h=0,f=u.length,p=0,d=!1;h<f;){var m=l(c,u[p=h+(f-h>>>1)]);m>0?h=p+1:(f=p,d=!m)}return d?h:-h-1}(i,a,s||up)}(r,t,e),o=n<0?-(n+1):n;r.splice(o,0,t)}function up(r,t){return r>t?1:r<t?-1:0}function ma(r,t,e,n,o){return cc(r,t,e,n,o,0).selectedIndices}function ga(r,t,e,n,o,i){var a=cc(r,t,e,n,o,i);return a.numValidOutputs.dispose(),{selectedIndices:a.selectedIndices,selectedScores:a.selectedScores}}function cc(r,t,e,n,o,i,a,s){s===void 0&&(s=!1);for(var u=Array.from(t).map(function(y,w){return{score:y,boxIndex:w,suppressBeginIndex:0}}).filter(function(y){return y.score>o}).sort(Ps),c=i>0?-.5/i:0,l=[],h=[];l.length<e&&u.length>0;){var f=u.pop(),p=f.score,d=f.boxIndex,m=f.suppressBeginIndex;if(p<o)break;for(var v=!1,g=l.length-1;g>=m;--g){var x=cp(r,d,l[g]);if(x>=n){v=!0;break}if(f.score=f.score*lp(n,c,x),f.score<=o)break}f.suppressBeginIndex=l.length,v||(f.score===p?(l.push(d),h.push(f.score)):f.score>o&&sp(u,f,Ps))}var b=l.length;return s&&(l.fill(0,b),h.fill(0,b)),{selectedIndices:Fe(l,"int32"),selectedScores:Fe(h,"float32"),numValidOutputs:q(b,"int32")}}function cp(r,t,e){var n=r.subarray(4*t,4*t+4),o=r.subarray(4*e,4*e+4),i=Math.min(n[0],n[2]),a=Math.min(n[1],n[3]),s=Math.max(n[0],n[2]),u=Math.max(n[1],n[3]),c=Math.min(o[0],o[2]),l=Math.min(o[1],o[3]),h=Math.max(o[0],o[2]),f=Math.max(o[1],o[3]),p=(s-i)*(u-a),d=(h-c)*(f-l);if(p<=0||d<=0)return 0;var m=Math.max(i,c),v=Math.max(a,l),g=Math.min(s,h),x=Math.min(u,f),b=Math.max(g-m,0)*Math.max(x-v,0);return b/(p+d-b)}function lp(r,t,e){var n=Math.exp(t*e*e);return e<=r?n:0}function Ps(r,t){return r.score-t.score||r.score===t.score&&t.boxIndex-r.boxIndex}function lc(r,t,e){var n=new Array(r.rank).fill(0),o=r.shape.slice();return t.map(function(i){o[e]=i;var a=r.slice(n,o);return n[e]+=i,a})}function hc(r,t){for(var e=new Array(r.rank),n=0;n<e.length;n++)e[n]=r.shape[n]*t[n];var o=oe(e,r.dtype);for(n=0;n<o.values.length;++n){for(var i=o.indexToLoc(n),a=new Array(r.rank),s=0;s<a.length;s++)a[s]=i[s]%r.shape[s];var u=r.locToIndex(a);o.values[n]=r.values[u]}return o.toTensor()}function fc(r,t,e,n,o){for(var i=t[t.length-1],a=[r.length/i,i],s=a[0],u=a[1],c=yr(e,s*n),l=yr("int32",s*n),h=0;h<s;h++){for(var f=h*u,p=r.subarray(f,f+u),d=[],m=0;m<p.length;m++)d.push({value:p[m],index:m});d.sort(function(y,w){return w.value-y.value});var v=h*n,g=c.subarray(v,v+n),x=l.subarray(v,v+n);for(m=0;m<n;m++)g[m]=d[m].value,x[m]=d[m].index}var b=t.slice();return b[b.length-1]=n,[Ke(c,b,e),Ke(l,b,"int32")]}function ya(r,t){for(var e=[],n=0;n<t.length;n++)t[n]&&e.push(n);var o=oe(r,"int32"),i=oe([e.length,r.length],"int32");for(n=0;n<e.length;n++){var a=o.indexToLoc(e[n]),s=n*r.length;i.values.set(a,s)}return i.toTensor()}var hp=function(r,t){this.outputShape=[],this.outputShape=r,this.variableNames=t.map(function(o,i){return"T"+i});var e=[];this.variableNames.forEach(function(o){e.push("float v"+o+" = get"+o+"AtOutCoords();")});var n=this.variableNames.map(function(o){return"v"+o}).join(" + ");this.userCode=`
      void main() {
        `+e.join(`
        `)+`

        float result = `+n+`;
        setOutput(result);
      }
    `},fp=function(r,t){this.outputShape=[],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=r,this.variableNames=t.map(function(o,i){return"T"+i});var e=[];this.variableNames.forEach(function(o){e.push("vec4 v"+o+" = get"+o+"AtOutCoords();")});var n=this.variableNames.map(function(o){return"v"+o}).join(" + ");this.userCode=`
      void main() {
        `+e.join(`
        `)+`

        vec4 result = `+n+`;
        setOutput(result);
      }
    `},pp=function(r,t,e){this.variableNames=["A"];var n=r.windowSize,o=r.batchSize,i=r.inSize,a=Math.ceil(i/n);e||this.variableNames.push("bestIndicesA"),this.outputShape=[o,a];var s=t==="max"?">":"<",u=e?"inOffset + i;":"round(getBestIndicesA(batch, inOffset + i));";this.userCode=`
      void main() {
        ivec2 coords = getOutputCoords();
        int batch = coords[0];
        int outIdx = coords[1];
        int inOffset = outIdx * `+n+`;

        int bestIndex = inOffset;
        float bestValue = getA(batch, bestIndex);

        for (int i = 0; i < `+n+`; i++) {
          int inIdx = `+u+`;
          float candidate = getA(batch, inIdx);
          if (candidate `+s+` bestValue) {
            bestValue = candidate;
            bestIndex = inIdx;
          }
        }
        setOutput(float(bestIndex));
      }
    `};function pc(r,t){return["x","y","z","w","u","v"].slice(0,t).map(function(e){return r+"."+e})}function rt(r,t){return t===1?[r]:pc(r,t)}function Je(){var r,t,e,n,o,i,a,s,u,c;return L().getNumber("WEBGL_VERSION")===2?(r="#version 300 es",t="in",e="out",n="in",o="texture",i="outputColor",a="out vec4 outputColor;",s=`
      bool isnan_custom(float val) {
        return (val > 0.0 || val < 0.0) ? false : val != 0.0;
      }

      bvec4 isnan_custom(vec4 val) {
        return bvec4(isnan_custom(val.x),
          isnan_custom(val.y), isnan_custom(val.z), isnan_custom(val.w));
      }

      #define isnan(value) isnan_custom(value)
    `,u="",c=`
      #define round(value) newRound(value)
      int newRound(float value) {
        return int(floor(value + 0.5));
      }

      ivec4 newRound(vec4 value) {
        return ivec4(floor(value + vec4(0.5)));
      }
    `):(r="",t="attribute",e="varying",n="varying",o="texture2D",i="gl_FragColor",a="",s=`
      #define isnan(value) isnan_custom(value)
      bool isnan_custom(float val) {
        return (val > 0. || val < 1. || val == 0.) ? false : true;
      }
      bvec4 isnan_custom(vec4 val) {
        return bvec4(isnan(val.x), isnan(val.y), isnan(val.z), isnan(val.w));
      }
    `,u=`
      uniform float INFINITY;

      bool isinf(float val) {
        return abs(val) == INFINITY;
      }
      bvec4 isinf(vec4 val) {
        return equal(abs(val), vec4(INFINITY));
      }
    `,c=`
      int round(float value) {
        return int(floor(value + 0.5));
      }

      ivec4 round(vec4 value) {
        return ivec4(floor(value + vec4(0.5)));
      }
    `),{version:r,attribute:t,varyingVs:e,varyingFs:n,texture2D:o,output:i,defineOutput:a,defineSpecialNaN:s,defineSpecialInf:u,defineRound:c}}function In(r,t,e){e===void 0&&(e="index");var n=Lt(t);return n.map(function(o,i){return"int "+r[i]+" = "+e+" / "+o+"; "+(i===n.length-1?"int "+r[i+1]+" = "+e+" - "+r[i]+" * "+o:"index -= "+r[i]+" * "+o)+";"}).join("")}function xa(r){var t=Lt(r).map(function(e){return e.toString()});return`
  int getFlatIndex(ivec3 coords) {
    return coords.x * `+t[0]+" + coords.y * "+t[1]+` + coords.z;
  }
`}var dc=`
  const float FLOAT_MAX = 1.70141184e38;
  const float FLOAT_MIN = 1.17549435e-38;

  lowp vec4 encode_float(highp float v) {
    if (isnan(v)) {
      return vec4(255, 255, 255, 255);
    }

    highp float av = abs(v);

    if(av < FLOAT_MIN) {
      return vec4(0.0, 0.0, 0.0, 0.0);
    } else if(v > FLOAT_MAX) {
      return vec4(0.0, 0.0, 128.0, 127.0) / 255.0;
    } else if(v < -FLOAT_MAX) {
      return vec4(0.0, 0.0,  128.0, 255.0) / 255.0;
    }

    highp vec4 c = vec4(0,0,0,0);

    highp float e = floor(log2(av));
    highp float m = exp2(fract(log2(av))) - 1.0;

    c[2] = floor(128.0 * m);
    m -= c[2] / 128.0;
    c[1] = floor(32768.0 * m);
    m -= c[1] / 32768.0;
    c[0] = floor(8388608.0 * m);

    highp float ebias = e + 127.0;
    c[3] = floor(ebias / 2.0);
    ebias -= c[3] * 2.0;
    c[2] += floor(ebias) * 128.0;

    c[3] += 128.0 * step(0.0, -v);

    return c / 255.0;
  }
`;function dp(r,t,e,n){var o=[];r.forEach(function(p){var d=Y(p.shapeInfo.logicalShape);p.shapeInfo.isUniform?o.push("uniform float "+p.name+(d>1?"["+d+"]":"")+";"):(o.push("uniform sampler2D "+p.name+";"),o.push("uniform int offset"+p.name+";"))});var i,a,s=o.join(`
`),u=r.map(function(p){return function(d,m,v){v===void 0&&(v=!1);var g="";g+=v?vc(d):qn(d);var x=d.shapeInfo.logicalShape,b=m.logicalShape;return x.length<=b.length&&(g+=v?function(y,w){var _,S=y.name,I=S.charAt(0).toUpperCase()+S.slice(1),E="get"+I+"AtOutCoords",R=y.shapeInfo.logicalShape.length,D=w.logicalShape.length,A=hn(y.shapeInfo.logicalShape,w.logicalShape),M=_e(D),O=D-R,B=["x","y","z","w","u","v"];_=R===0?"":D<2&&A.length>=1?"coords = 0;":A.map(function(ee){return"coords."+B[ee+O]+" = 0;"}).join(`
`);var V="";V=D<2&&R>0?"coords":y.shapeInfo.logicalShape.map(function(ee,te){return"coords."+B[te+O]}).join(", ");var U="return outputValue;",W=Y(y.shapeInfo.logicalShape)===1,G=Y(w.logicalShape)===1;if(R!==1||W||G){if(W&&!G)U=D===1?`
        return vec4(outputValue.x, outputValue.x, 0., 0.);
      `:`
        return vec4(outputValue.x);
      `;else if(A.length){var H=R-2,j=R-1;A.indexOf(H)>-1&&A.indexOf(j)>-1?U="return vec4(outputValue.x);":A.indexOf(H)>-1?U="return vec4(outputValue.x, outputValue.y, outputValue.x, outputValue.y);":A.indexOf(j)>-1&&(U="return vec4(outputValue.xx, outputValue.zz);")}}else U=`
      return vec4(outputValue.xy, outputValue.xy);
    `;return`
    vec4 `+E+`() {
      `+M+` coords = getOutputCoords();
      `+_+`
      vec4 outputValue = get`+I+"("+V+`);
      `+U+`
    }
  `}(d,m):function(y,w){var _=y.name,S=_.charAt(0).toUpperCase()+_.slice(1),I="get"+S+"AtOutCoords",E=w.texShape,R=y.shapeInfo.texShape,D=y.shapeInfo.logicalShape.length,A=w.logicalShape.length;if(!y.shapeInfo.isUniform&&D===A&&y.shapeInfo.flatOffset==null&&ze(R,E))return`
      float `+I+`() {
        return sampleTexture(`+_+`, resultUV);
      }
    `;var M,O=_e(A),B=hn(y.shapeInfo.logicalShape,w.logicalShape),V=A-D,U=["x","y","z","w","u","v"];M=D===0?"":A<2&&B.length>=1?"coords = 0;":B.map(function(G){return"coords."+U[G+V]+" = 0;"}).join(`
`);var W="";return W=A<2&&D>0?"coords":y.shapeInfo.logicalShape.map(function(G,H){return"coords."+U[H+V]}).join(", "),`
    float `+I+`() {
      `+O+` coords = getOutputCoords();
      `+M+`
      return get`+S+"("+W+`);
    }
  `}(d,m)),g}(p,t,n)}).join(`
`),c=t.texShape,l=Je(),h=function(p){return`
    float sampleTexture(sampler2D textureSampler, vec2 uv) {
      return `+p.texture2D+`(textureSampler, uv).r;
    }
  `}(l),f=function(p){return p.version+`
    precision highp float;
    precision highp int;
    precision highp sampler2D;
    `+p.varyingFs+` vec2 resultUV;
    `+p.defineOutput+`
    const vec2 halfCR = vec2(0.5, 0.5);

    struct ivec5
    {
      int x;
      int y;
      int z;
      int w;
      int u;
    };

    struct ivec6
    {
      int x;
      int y;
      int z;
      int w;
      int u;
      int v;
    };

    uniform float NAN;
    `+p.defineSpecialNaN+`
    `+p.defineSpecialInf+`
    `+p.defineRound+`

    int imod(int x, int y) {
      return x - y * (x / y);
    }

    int idiv(int a, int b, float sign) {
      int res = a / b;
      int mod = imod(a, b);
      if (sign < 0. && mod != 0) {
        res -= 1;
      }
      return res;
    }

    //Based on the work of Dave Hoskins
    //https://www.shadertoy.com/view/4djSRW
    #define HASHSCALE1 443.8975
    float random(float seed){
      vec2 p = resultUV * seed;
      vec3 p3  = fract(vec3(p.xyx) * HASHSCALE1);
      p3 += dot(p3, p3.yzx + 19.19);
      return fract((p3.x + p3.y) * p3.z);
    }

    `+vp+`
    `+mp+`
    `+gp+`
  `}(l);return t.isPacked?(i=function(p,d){switch(p.length){case 0:return`
    int getOutputCoords() {
      return 0;
    }
  `;case 1:return function(y,w){var _=[Math.ceil(w[0]/2),Math.ceil(w[1]/2)];return _[0]===1?`
      int getOutputCoords() {
        return 2 * int(resultUV.x * `+_[1]+`.0);
      }
    `:_[1]===1?`
      int getOutputCoords() {
        return 2 * int(resultUV.y * `+_[0]+`.0);
      }
    `:`
    int getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(`+_[0]+", "+_[1]+`));
      return 2 * (resTexRC.x * `+_[1]+` + resTexRC.y);
    }
  `}(0,d);case 2:return function(y,w){var _=[Math.ceil(w[0]/2),Math.ceil(w[1]/2)];if(ze(y,w))return`
      ivec2 getOutputCoords() {
        return 2 * ivec2(resultUV.yx * vec2(`+_[0]+", "+_[1]+`));
      }
    `;var S=Math.ceil(y[1]/2);return`
    ivec2 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(`+_[0]+", "+_[1]+`));

      int index = resTexRC.x * `+_[1]+` + resTexRC.y;
      int r = 2 * (index / `+S+`);
      int c = imod(index, `+S+`) * 2;

      return ivec2(r, c);
    }
  `}(p,d);case 3:return m=p,v=d,g=[Math.ceil(v[0]/2),Math.ceil(v[1]/2)],x=Math.ceil(m[2]/2),b=x*Math.ceil(m[1]/2),`
    ivec3 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(`+g[0]+", "+g[1]+`));
      int index = resTexRC.x * `+g[1]+` + resTexRC.y;

      int b = index / `+b+`;
      index -= b * `+b+`;

      int r = 2 * (index / `+x+`);
      int c = imod(index, `+x+`) * 2;

      return ivec3(b, r, c);
    }
  `;default:return function(y,w){for(var _=[Math.ceil(w[0]/2),Math.ceil(w[1]/2)],S=Math.ceil(y[y.length-1]/2),I=S*Math.ceil(y[y.length-2]/2),E=I,R="",D="b, r, c",A=2;A<y.length-1;A++)E*=y[y.length-A-1],R=`
      int b`+A+" = index / "+E+`;
      index -= b`+A+" * "+E+`;
    `+R,D="b"+A+", "+D;return`
    ivec`+y.length+` getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(`+_[0]+", "+_[1]+`));
      int index = resTexRC.x * `+_[1]+` + resTexRC.y;

      `+R+`

      int b = index / `+I+`;
      index -= b * `+I+`;

      int r = 2 * (index / `+S+`);
      int c = imod(index, `+S+`) * 2;

      return ivec`+y.length+"("+D+`);
    }
  `}(p,d)}var m,v,g,x,b}(t.logicalShape,c),a=function(p){return`
    void setOutput(vec4 val) {
      `+p.output+` = val;
    }
  `}(l)):(i=function(p,d){switch(p.length){case 0:return`
    int getOutputCoords() {
      return 0;
    }
  `;case 1:return function(g,x){return x[0]===1?`
      int getOutputCoords() {
        return int(resultUV.x * `+x[1]+`.0);
      }
    `:x[1]===1?`
      int getOutputCoords() {
        return int(resultUV.y * `+x[0]+`.0);
      }
    `:`
    int getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(`+x[0]+", "+x[1]+`));
      return resTexRC.x * `+x[1]+` + resTexRC.y;
    }
  `}(0,d);case 2:return function(g,x){return ze(g,x)?`
      ivec2 getOutputCoords() {
        return ivec2(resultUV.yx * vec2(`+x[0]+", "+x[1]+`));
      }
    `:g[1]===1?`
      ivec2 getOutputCoords() {
        ivec2 resTexRC = ivec2(resultUV.yx *
                               vec2(`+x[0]+", "+x[1]+`));
        int index = resTexRC.x * `+x[1]+` + resTexRC.y;
        return ivec2(index, 0);
      }
    `:g[0]===1?`
      ivec2 getOutputCoords() {
        ivec2 resTexRC = ivec2(resultUV.yx *
                               vec2(`+x[0]+", "+x[1]+`));
        int index = resTexRC.x * `+x[1]+` + resTexRC.y;
        return ivec2(0, index);
      }
    `:`
    ivec2 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(`+x[0]+", "+x[1]+`));
      int index = resTexRC.x * `+x[1]+` + resTexRC.y;
      int r = index / `+g[1]+`;
      int c = index - r * `+g[1]+`;
      return ivec2(r, c);
    }
  `}(p,d);case 3:return m=d,v=In(["r","c","d"],p),`
    ivec3 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(`+m[0]+", "+m[1]+`));
      int index = resTexRC.x * `+m[1]+` + resTexRC.y;
      `+v+`
      return ivec3(r, c, d);
    }
  `;case 4:return function(g,x){var b=In(["r","c","d","d2"],g);return`
    ivec4 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
        vec2(`+x[0]+", "+x[1]+`));
      int index = resTexRC.x * `+x[1]+` + resTexRC.y;
      `+b+`
      return ivec4(r, c, d, d2);
    }
  `}(p,d);case 5:return function(g,x){var b=In(["r","c","d","d2","d3"],g);return`
    ivec5 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx * vec2(`+x[0]+`,
                             `+x[1]+`));

      int index = resTexRC.x * `+x[1]+` + resTexRC.y;

      `+b+`

      ivec5 outShape = ivec5(r, c, d, d2, d3);
      return outShape;
    }
  `}(p,d);case 6:return function(g,x){var b=In(["r","c","d","d2","d3","d4"],g);return`
    ivec6 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
        vec2(`+x[0]+", "+x[1]+`));
      int index = resTexRC.x * `+x[1]+` + resTexRC.y;

      `+b+`

      ivec6 result = ivec6(r, c, d, d2, d3, d4);
      return result;
    }
  `}(p,d);default:throw new Error(p.length+"-D output sampling is not yet supported")}var m,v}(t.logicalShape,c),a=function(p){return`
    void setOutput(float val) {
      `+p.output+` = vec4(val, 0, 0, 0);
    }
  `}(l)),n&&(f+=yp),[f,h,a,s,i,u,e].join(`
`)}function qn(r){var t=r.shapeInfo.logicalShape;switch(t.length){case 0:return function(e){var n=e.name,o="get"+n.charAt(0).toUpperCase()+n.slice(1);if(e.shapeInfo.isUniform)return"float "+o+"() {return "+n+";}";var i=e.shapeInfo.texShape,a=i[0],s=i[1];if(a===1&&s===1)return`
      float `+o+`() {
        return sampleTexture(`+n+`, halfCR);
      }
    `;var u=e.shapeInfo.texShape,c=u[0],l=u[1],h=_n(n);return`
    float `+o+`() {
      vec2 uv = uvFromFlat(`+c+", "+l+", "+h+`);
      return sampleTexture(`+n+`, uv);
    }
  `}(r);case 1:return function(e){var n=e.name,o="get"+n.charAt(0).toUpperCase()+n.slice(1);if(e.shapeInfo.isUniform)return`
      float `+o+`(int index) {
        `+Un(e)+`
      }
    `;var i=e.shapeInfo.texShape,a=i[0],s=i[1];if(s===1&&a===1)return`
      float `+o+`(int index) {
        return sampleTexture(`+n+`, halfCR);
      }
    `;var u=_n(n);return s===1?`
      float `+o+`(int index) {
        vec2 uv = vec2(0.5, (float(index + `+u+") + 0.5) / "+a+`.0);
        return sampleTexture(`+n+`, uv);
      }
    `:a===1?`
      float `+o+`(int index) {
        vec2 uv = vec2((float(index + `+u+") + 0.5) / "+s+`.0, 0.5);
        return sampleTexture(`+n+`, uv);
      }
    `:`
    float `+o+`(int index) {
      vec2 uv = uvFromFlat(`+a+", "+s+", index + "+u+`);
      return sampleTexture(`+n+`, uv);
    }
  `}(r);case 2:return function(e){var n=e.shapeInfo.logicalShape,o=e.name,i="get"+o.charAt(0).toUpperCase()+o.slice(1),a=e.shapeInfo.texShape;if(a!=null&&ze(n,a)){var s=a[0],u=a[1];return`
    float `+i+`(int row, int col) {
      vec2 uv = (vec2(col, row) + halfCR) / vec2(`+u+".0, "+s+`.0);
      return sampleTexture(`+o+`, uv);
    }
  `}var c=kn(n),l=c.newShape,h=c.keptDims,f=l;if(f.length<n.length){var p=jn(e,f);return`
      `+qn(p)+`
      float `+i+`(int row, int col) {
        return `+i+"("+Kn(["row","col"],h)+`);
      }
    `}if(e.shapeInfo.isUniform)return`
      float `+i+`(int row, int col) {
        int index = round(dot(vec2(row, col), vec2(`+n[1]+`, 1)));
        `+Un(e)+`
      }
    `;var d=a[0],m=a[1],v=_n(o);return m===1?`
    float `+i+`(int row, int col) {
      float index = dot(vec3(row, col, `+v+"), vec3("+n[1]+`, 1, 1));
      vec2 uv = vec2(0.5, (index + 0.5) / `+d+`.0);
      return sampleTexture(`+o+`, uv);
    }
  `:d===1?`
    float `+i+`(int row, int col) {
      float index = dot(vec3(row, col, `+v+"), vec3("+n[1]+`, 1, 1));
      vec2 uv = vec2((index + 0.5) / `+m+`.0, 0.5);
      return sampleTexture(`+o+`, uv);
    }
  `:`
  float `+i+`(int row, int col) {
    // Explicitly use integer operations as dot() only works on floats.
    int index = row * `+n[1]+" + col + "+v+`;
    vec2 uv = uvFromFlat(`+d+", "+m+`, index);
    return sampleTexture(`+o+`, uv);
  }
`}(r);case 3:return function(e){var n=e.shapeInfo.logicalShape,o=e.name,i="get"+o.charAt(0).toUpperCase()+o.slice(1),a=n[1]*n[2],s=n[2],u=kn(n),c=u.newShape,l=u.keptDims,h=c;if(h.length<n.length){var f=jn(e,h);return`
        `+qn(f)+`
        float `+i+`(int row, int col, int depth) {
          return `+i+"("+Kn(["row","col","depth"],l)+`);
        }
      `}if(e.shapeInfo.isUniform)return`
      float `+i+`(int row, int col, int depth) {
        int index = round(dot(vec3(row, col, depth),
                          vec3(`+a+", "+s+`, 1)));
        `+Un(e)+`
      }
    `;var p=e.shapeInfo.texShape,d=p[0],m=p[1],v=e.shapeInfo.flatOffset;if(m===a&&v==null)return`
        float `+i+`(int row, int col, int depth) {
          float texR = float(row);
          float texC = dot(vec2(col, depth), vec2(`+s+`, 1));
          vec2 uv = (vec2(texC, texR) + halfCR) /
                     vec2(`+m+".0, "+d+`.0);
          return sampleTexture(`+o+`, uv);
        }
      `;if(m===s&&v==null)return`
    float `+i+`(int row, int col, int depth) {
      float texR = dot(vec2(row, col), vec2(`+n[1]+`, 1));
      float texC = float(depth);
      vec2 uv = (vec2(texC, texR) + halfCR) / vec2(`+m+".0, "+d+`.0);
      return sampleTexture(`+o+`, uv);
    }
  `;var g=_n(o);return`
      float `+i+`(int row, int col, int depth) {
        // Explicitly use integer operations as dot() only works on floats.
        int index = row * `+a+" + col * "+s+" + depth + "+g+`;
        vec2 uv = uvFromFlat(`+d+", "+m+`, index);
        return sampleTexture(`+o+`, uv);
      }
  `}(r);case 4:return function(e){var n=e.shapeInfo.logicalShape,o=e.name,i="get"+o.charAt(0).toUpperCase()+o.slice(1),a=n[3],s=n[2]*a,u=n[1]*s,c=kn(n),l=c.newShape,h=c.keptDims;if(l.length<n.length){var f=jn(e,l);return`
      `+qn(f)+`
      float `+i+`(int row, int col, int depth, int depth2) {
        return `+i+"("+Kn(["row","col","depth","depth2"],h)+`);
      }
    `}if(e.shapeInfo.isUniform)return`
      float `+i+`(int row, int col, int depth, int depth2) {
        int index = round(dot(vec4(row, col, depth, depth2),
                          vec4(`+u+", "+s+", "+a+`, 1)));
        `+Un(e)+`
      }
    `;var p=e.shapeInfo.flatOffset,d=e.shapeInfo.texShape,m=d[0],v=d[1];if(v===u&&p==null)return`
      float `+i+`(int row, int col, int depth, int depth2) {
        float texR = float(row);
        float texC =
            dot(vec3(col, depth, depth2),
                vec3(`+s+", "+a+`, 1));
        vec2 uv = (vec2(texC, texR) + halfCR) /
                   vec2(`+v+".0, "+m+`.0);
        return sampleTexture(`+o+`, uv);
      }
    `;if(v===a&&p==null)return`
      float `+i+`(int row, int col, int depth, int depth2) {
        float texR = dot(vec3(row, col, depth),
                         vec3(`+n[1]*n[2]+", "+n[2]+`, 1));
        float texC = float(depth2);
        vec2 uv = (vec2(texC, texR) + halfCR) /
                  vec2(`+v+".0, "+m+`.0);
        return sampleTexture(`+o+`, uv);
      }
    `;var g=_n(o);return`
    float `+i+`(int row, int col, int depth, int depth2) {
      // Explicitly use integer operations as dot() only works on floats.
      int index = row * `+u+" + col * "+s+` +
          depth * `+a+` + depth2;
      vec2 uv = uvFromFlat(`+m+", "+v+", index + "+g+`);
      return sampleTexture(`+o+`, uv);
    }
  `}(r);case 5:return function(e){var n=e.shapeInfo.logicalShape,o=e.name,i="get"+o.charAt(0).toUpperCase()+o.slice(1),a=n[4],s=n[3]*a,u=n[2]*s,c=n[1]*u,l=kn(n),h=l.newShape,f=l.keptDims;if(h.length<n.length){var p=jn(e,h);return`
      `+qn(p)+`
      float `+i+`(int row, int col, int depth, int depth2, int depth3) {
        return `+i+"("+Kn(["row","col","depth","depth2","depth3"],f)+`);
      }
    `}if(e.shapeInfo.isUniform)return`
      float `+i+`(int row, int col, int depth, int depth2, int depth3) {
        float index = dot(
          vec4(row, col, depth, depth2),
          vec4(`+c+", "+u+", "+s+", "+a+`)) +
          depth3;
        `+Un(e)+`
      }
    `;var d=e.shapeInfo.flatOffset,m=e.shapeInfo.texShape,v=m[0],g=m[1];if(g===c&&d==null)return`
      float `+i+`(int row, int col, int depth, int depth2, int depth3) {
        int texR = row;
        float texC = dot(vec4(col, depth, depth2, depth3),
                         vec4(`+u+", "+s+", "+a+`, 1));
        vec2 uv = (vec2(texC, texR) + halfCR) /
                   vec2(`+g+".0, "+v+`.0);
        return sampleTexture(`+o+`, uv);
      }
    `;if(g===a&&d==null)return`
      float `+i+`(int row, int col, int depth, int depth2, int depth3) {
        float texR = dot(
          vec4(row, col, depth, depth2),
          vec4(`+n[1]*n[2]*n[3]+`,
               `+n[2]*n[3]+", "+n[3]+`, 1));
        int texC = depth3;
        vec2 uv = (vec2(texC, texR) + halfCR) /
                  vec2(`+g+".0, "+v+`.0);
        return sampleTexture(`+o+`, uv);
      }
    `;var x=_n(o);return`
    float `+i+`(int row, int col, int depth, int depth2, int depth3) {
      // Explicitly use integer operations as dot() only works on floats.
      int index = row * `+c+" + col * "+u+" + depth * "+s+` +
          depth2 * `+a+" + depth3 + "+x+`;
      vec2 uv = uvFromFlat(`+v+", "+g+`, index);
      return sampleTexture(`+o+`, uv);
    }
  `}(r);case 6:return function(e){var n=e.shapeInfo.logicalShape,o=e.name,i="get"+o.charAt(0).toUpperCase()+o.slice(1),a=kn(n),s=a.newShape,u=a.keptDims;if(s.length<n.length){var c=jn(e,s);return`
      `+qn(c)+`
      float `+i+`(int row, int col, int depth,
                    int depth2, int depth3, int depth4) {
        return `+i+"("+Kn(["row","col","depth","depth2","depth3","depth4"],u)+`);
      }
    `}var l=n[5],h=n[4]*l,f=n[3]*h,p=n[2]*f,d=n[1]*p;if(e.shapeInfo.isUniform)return`
      float `+i+`(int row, int col, int depth,
                  int depth2, int depth3, int depth4) {
        int index = round(dot(
          vec4(row, col, depth, depth2),
          vec4(`+d+", "+p+", "+f+", "+h+`)) +
          dot(
            vec2(depth3, depth4),
            vec2(`+l+`, 1)));
        `+Un(e)+`
      }
    `;var m=e.shapeInfo.flatOffset,v=e.shapeInfo.texShape,g=v[0],x=v[1];if(x===d&&m==null)return`
      float `+i+`(int row, int col, int depth,
                    int depth2, int depth3, int depth4) {
        int texR = row;
        float texC = dot(vec4(col, depth, depth2, depth3),
          vec4(`+p+", "+f+", "+h+", "+l+`)) +
               float(depth4);
        vec2 uv = (vec2(texC, texR) + halfCR) /
                   vec2(`+x+".0, "+g+`.0);
        return sampleTexture(`+o+`, uv);
      }
    `;if(x===l&&m==null)return`
      float `+i+`(int row, int col, int depth,
                    int depth2, int depth3, int depth4) {
        float texR = dot(vec4(row, col, depth, depth2),
          vec4(`+n[1]*n[2]*n[3]*n[4]+`,
               `+n[2]*n[3]*n[4]+`,
               `+n[3]*n[4]+`,
               `+n[4]+`)) + float(depth3);
        int texC = depth4;
        vec2 uv = (vec2(texC, texR) + halfCR) /
                  vec2(`+x+".0, "+g+`.0);
        return sampleTexture(`+o+`, uv);
      }
    `;var b=_n(o);return`
    float `+i+`(int row, int col, int depth,
                  int depth2, int depth3, int depth4) {
      // Explicitly use integer operations as dot() only works on floats.
      int index = row * `+d+" + col * "+p+" + depth * "+f+` +
          depth2 * `+h+" + depth3 * "+l+" + depth4 + "+b+`;
      vec2 uv = uvFromFlat(`+g+", "+x+`, index);
      return sampleTexture(`+o+`, uv);
    }
  `}(r);default:throw new Error(t.length+"-D input sampling is not yet supported")}}function vc(r){var t,e,n;switch(r.shapeInfo.logicalShape.length){case 0:return t=r.name,e="get"+t.charAt(0).toUpperCase()+t.slice(1),n=Je(),`
    vec4 `+e+`() {
      return `+n.texture2D+"("+t+`, halfCR);
    }
  `;case 1:return function(o){var i=o.name,a="get"+i.charAt(0).toUpperCase()+i.slice(1),s=o.shapeInfo.texShape,u=[Math.ceil(s[0]/2),Math.ceil(s[1]/2)],c=Je();return`
    vec4 `+a+`(int index) {
      vec2 uv = packedUVfrom1D(
        `+u[0]+", "+u[1]+`, index);
      return `+c.texture2D+"("+i+`, uv);
    }
  `}(r);case 2:return function(o){var i=o.shapeInfo.logicalShape,a=o.name,s="get"+a.charAt(0).toUpperCase()+a.slice(1),u=o.shapeInfo.texShape,c=u[0],l=u[1],h=Je();if(u!=null&&ze(i,u))return`
      vec4 `+s+`(int row, int col) {
        vec2 uv = (vec2(col, row) + halfCR) / vec2(`+l+".0, "+c+`.0);

        return `+h.texture2D+"("+a+`, uv);
      }
    `;var f=[Math.ceil(u[0]/2),Math.ceil(u[1]/2)],p=Math.ceil(i[1]/2);return`
    vec4 `+s+`(int row, int col) {
      vec2 uv = packedUVfrom2D(`+p+", "+f[0]+", "+f[1]+`, row, col);
      return `+h.texture2D+"("+a+`, uv);
    }
  `}(r);case 3:return function(o){var i=o.shapeInfo.logicalShape,a=o.name,s="get"+a.charAt(0).toUpperCase()+a.slice(1),u=o.shapeInfo.texShape,c=[Math.ceil(u[0]/2),Math.ceil(u[1]/2)];if(i[0]===1){var l=i.slice(1),h=jn(o,l);return`
        `+vc(h)+`
        vec4 `+s+`(int b, int row, int col) {
          return `+s+"("+Kn(["b","row","col"],[1,2])+`);
        }
      `}var f=c[0],p=c[1],d=Math.ceil(i[2]/2),m=d*Math.ceil(i[1]/2),v=Je();return`
    vec4 `+s+`(int b, int row, int col) {
      vec2 uv = packedUVfrom3D(
        `+f+", "+p+", "+m+", "+d+`, b, row, col);
      return `+v.texture2D+"("+a+`, uv);
    }
  `}(r);default:return function(o){for(var i=o.shapeInfo.logicalShape,a=i.length,s=o.name,u="get"+s.charAt(0).toUpperCase()+s.slice(1),c=o.shapeInfo.texShape,l=[Math.ceil(c[0]/2),Math.ceil(c[1]/2)],h=l[0],f=l[1],p=Math.ceil(i[a-1]/2),d=p*Math.ceil(i[a-2]/2),m="int b, int row, int col",v="b * "+d+" + (row / 2) * "+p+" + (col / 2)",g=2;g<a-1;g++)m="int b"+g+", "+m,d*=i[a-g-1],v="b"+g+" * "+d+" + "+v;var x=Je();return`
    vec4 `+u+"("+m+`) {
      int index = `+v+`;
      int texR = index / `+f+`;
      int texC = index - texR * `+f+`;
      vec2 uv = (vec2(texC, texR) + halfCR) / vec2(`+f+", "+h+`);
      return `+x.texture2D+"("+s+`, uv);
    }
  `}(r)}}var vp=`
vec2 uvFromFlat(int texNumR, int texNumC, int index) {
  int texR = index / texNumC;
  int texC = index - texR * texNumC;
  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);
}
vec2 packedUVfrom1D(int texNumR, int texNumC, int index) {
  int texelIndex = index / 2;
  int texR = texelIndex / texNumC;
  int texC = texelIndex - texR * texNumC;
  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);
}
`,mp=`
vec2 packedUVfrom2D(int texelsInLogicalRow, int texNumR,
  int texNumC, int row, int col) {
  int texelIndex = (row / 2) * texelsInLogicalRow + (col / 2);
  int texR = texelIndex / texNumC;
  int texC = texelIndex - texR * texNumC;
  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);
}
`,gp=`
vec2 packedUVfrom3D(int texNumR, int texNumC,
    int texelsInBatch, int texelsInLogicalRow, int b,
    int row, int col) {
  int index = b * texelsInBatch + (row / 2) * texelsInLogicalRow + (col / 2);
  int texR = index / texNumC;
  int texC = index - texR * texNumC;
  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);
}
`,yp=`
  float getChannel(vec4 frag, vec2 innerDims) {
    vec2 modCoord = mod(innerDims, 2.);
    return modCoord.x == 0. ?
      (modCoord.y == 0. ? frag.r : frag.g) :
      (modCoord.y == 0. ? frag.b : frag.a);
  }
  float getChannel(vec4 frag, int dim) {
    float modCoord = mod(float(dim), 2.);
    return modCoord == 0. ? frag.r : frag.g;
  }
`;function _n(r){return"offset"+r}function Un(r){var t=r.name,e=Y(r.shapeInfo.logicalShape);return e<2?"return "+t+";":`
    for (int i = 0; i < `+e+`; i++) {
      if (i == index) {
        return `+t+`[i];
      }
    }
  `}function _e(r){if(r<=1)return"int";if(r===2)return"ivec2";if(r===3)return"ivec3";if(r===4)return"ivec4";if(r===5)return"ivec5";if(r===6)return"ivec6";throw Error("GPU for rank "+r+" is not yet supported")}function jn(r,t){var e=JSON.parse(JSON.stringify(r));return e.shapeInfo.logicalShape=t,e}function Kn(r,t){return t.map(function(e){return r[e]}).join(", ")}var xp=function(r,t,e,n){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,k(r.length>2,function(){return"Packed arg"+(e.charAt(0).toUpperCase()+e.slice(1))+" supports only inputs with rank above 2."});var o=r[r.length-1],i=Math.ceil(o/t);this.outputShape=r.slice(0,-1),i>1&&this.outputShape.push(i),n||this.variableNames.push("bestIndicesA");var a,s,u=this.outputShape,c=u.length,l=_e(c),h=rt("coords",c);if(i===1){var f=_e(s=c+1);a=`
        `+f+" sourceLocR = "+f+"("+h.join()+`, 0);
        ++`+h[c-1]+`;
        `+f+" sourceLocG = "+f+"("+h.join()+`, 0);
        ++`+h[c-2]+`;
        `+f+" sourceLocA = "+f+"("+h.join()+`, 0);
        --`+h[c-1]+`;
        `+f+" sourceLocB = "+f+"("+h.join()+`, 0);
        --`+h[c-2]+";"}else s=c,a=`
        `+l+` sourceLocR = coords;
        ++`+h[c-1]+`;
        `+l+` sourceLocG = coords;
        ++`+h[c-2]+`;
        `+l+` sourceLocA = coords;
        --`+h[c-1]+`;
        `+l+` sourceLocB = coords;
        --`+h[c-2]+";";var p=["x","y","z","w","u","v"].slice(0,s),d="."+p[s-1],m=p.map(function(I){return"int "+I}),v=rt("sourceLocR",s-1).concat("inIdx.r"),g=rt("sourceLocG",s-1).concat("inIdx.g"),x=rt("sourceLocB",s-1).concat("inIdx.b"),b=rt("sourceLocA",s-1).concat("inIdx.a"),y=e==="max"?"greaterThan":"lessThan",w=n?"":`
          inIdx = round(vec4(getBestIndicesAChannel(`+v.join()+`),
                             getBestIndicesAChannel(`+g.join()+`),
                             getBestIndicesAChannel(`+x.join()+`),
                             getBestIndicesAChannel(`+b.join()+")));",_=`vec4(
            getAChannel(`+v.join()+`),
            hasNextCol ? getAChannel(`+g.join()+`) : 0.,
            hasNextRow ? getAChannel(`+x.join()+`) : 0.,
            hasNextRow && hasNextCol ? getAChannel(`+b.join()+") : 0.)",S=n?"":`
      float getBestIndicesAChannel(`+m.join()+`) {
        return getChannel(getBestIndicesA(`+p.join()+`),
                                          vec2(`+p.slice(-2).join()+`));
      }`;this.userCode=`
      float getAChannel(`+m.join()+`) {
        return getChannel(getA(`+p.join()+`),
                               vec2(`+p.slice(-2).join()+`));
      }
      `+S+`
      void main() {
        `+l+` coords = getOutputCoords();
        bool hasNextCol = `+h[c-1]+" < "+(u[c-1]-1)+`;
        bool hasNextRow = `+h[c-2]+" < "+(u[c-2]-1)+`;
        `+a+`
        ivec4 srcIdx = ivec4(sourceLocR`+d+", sourceLocG"+d+`,
          sourceLocB`+d+", sourceLocA"+d+") * "+t+`;
        ivec4 inIdx = srcIdx;
        vec4 bestIndex = vec4(inIdx);
        vec4 bestValue = `+_+`;

        for (int i = 0; i < `+t+`; i++) {
          inIdx = srcIdx;
          `+w+`
          vec4 candidate = `+_+`;
          bvec4 nan = isnan(candidate);
          bvec4 replace = bvec4(
            vec4(`+y+`(candidate, bestValue)) * (vec4(1.0) - vec4(nan)));

          bestValue = vec4(replace.x  ? candidate.x : bestValue.x,
                           replace.y  ? candidate.y : bestValue.y,
                           replace.z  ? candidate.z : bestValue.z,
                           replace.w  ? candidate.w : bestValue.w);
          bestIndex = mix(bestIndex, vec4(inIdx), vec4(replace));
          srcIdx++;
        }
        setOutput(bestIndex);
      }
    `},bp=function(r){this.variableNames=["dy"],this.outputShape=r.inShape;var t=r.filterHeight,e=r.filterWidth,n=r.strideHeight,o=r.strideWidth,i=r.dilationHeight,a=r.dilationWidth,s=r.effectiveFilterHeight,u=r.effectiveFilterWidth,c=s-1-r.padInfo.top,l=u-1-r.padInfo.left,h=1/(t*e);this.userCode=`
      const ivec2 pads = ivec2(`+c+", "+l+`);
      const float avgMultiplier = float(`+h+`);

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];

        ivec2 dyRCCorner = coords.yz - pads;
        int dyRCorner = dyRCCorner.x;
        int dyCCorner = dyRCCorner.y;

        // Convolve dy(?, ?, d) with pos mask(:, :, d) to get dx(xR, xC, d).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;
        for (int wR = 0; wR < `+s+`;
            wR += `+i+`) {
          float dyR = float(dyRCorner + wR) / `+n+`.0;

          if (dyR < 0.0 || dyR >= `+r.outHeight+`.0 || fract(dyR) > 0.0) {
            continue;
          }
          int idyR = int(dyR);

          for (int wC = 0; wC < `+u+`;
            wC+= `+a+`) {
            float dyC = float(dyCCorner + wC) / `+o+`.0;

            if (dyC < 0.0 || dyC >= `+r.outWidth+`.0 ||
                fract(dyC) > 0.0) {
              continue;
            }
            int idyC = int(dyC);

            float dyValue = getDy(b, idyR, idyC, d);

            dotProd += dyValue * avgMultiplier;
          }
        }
        setOutput(dotProd);
      }
    `},wp=function(r){this.variableNames=["dy"],this.outputShape=r.inShape;var t=r.filterDepth,e=r.filterHeight,n=r.filterWidth,o=r.strideDepth,i=r.strideHeight,a=r.strideWidth,s=r.dilationDepth,u=r.dilationHeight,c=r.dilationWidth,l=r.effectiveFilterDepth,h=r.effectiveFilterHeight,f=r.effectiveFilterWidth,p=l-1-r.padInfo.front,d=h-1-r.padInfo.top,m=f-1-r.padInfo.left,v=1/(t*e*n);this.userCode=`
      const ivec3 pads = ivec3(`+p+", "+d+", "+m+`);
      const float avgMultiplier = float(`+v+`);

      void main() {
        ivec5 coords = getOutputCoords();
        int batch = coords.x;
        int ch = coords.u;

        ivec3 dyCorner = ivec3(coords.y, coords.z, coords.w) - pads;
        int dyDCorner = dyCorner.x;
        int dyRCorner = dyCorner.y;
        int dyCCorner = dyCorner.z;

        // Convolve dy(?, ?, ?, d) with pos mask(:, :, :, ch) to get
        // dx(xD, xR, xC, ch).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;

        for (int wD = 0; wD < `+l+`;
            wD += `+s+`) {
          float dyD = float(dyDCorner + wD) / `+o+`.0;

          if (dyD < 0.0 || dyD >= `+r.outDepth+`.0 || fract(dyD) > 0.0) {
            continue;
          }
          int idyD = int(dyD);

          for (int wR = 0; wR < `+h+`;
              wR += `+u+`) {
            float dyR = float(dyRCorner + wR) / `+i+`.0;

            if (dyR < 0.0 || dyR >= `+r.outHeight+`.0 ||
                fract(dyR) > 0.0) {
              continue;
            }
            int idyR = int(dyR);

            for (int wC = 0; wC < `+f+`;
                wC += `+c+`) {
              float dyC = float(dyCCorner + wC) / `+a+`.0;

              if (dyC < 0.0 || dyC >= `+r.outWidth+`.0 ||
                  fract(dyC) > 0.0) {
                continue;
              }
              int idyC = int(dyC);

              float dyValue = getDy(batch, idyD, idyR, idyC, ch);

              dotProd += dyValue * avgMultiplier;
            }
          }
        }
        setOutput(dotProd);
      }
    `},_p=function(r,t,e,n,o,i){this.outputShape=[],this.variableNames=["x","mean","variance"],le(r,t),le(r,e);var a="0.0";n!=null&&(le(r,n),this.variableNames.push("offset"),a="getOffsetAtOutCoords()");var s="1.0";o!=null&&(le(r,o),this.variableNames.push("scale"),s="getScaleAtOutCoords()"),this.outputShape=r,this.userCode=`
      void main() {
        float x = getXAtOutCoords();
        float mean = getMeanAtOutCoords();
        float variance = getVarianceAtOutCoords();
        float offset = `+a+`;
        float scale = `+s+`;
        float inv = scale * inversesqrt(variance + float(`+i+`));
        setOutput(dot(vec3(x, -mean, offset), vec3(inv, inv, 1)));
      }
    `},Cp=function(r,t,e,n,o,i){this.packedInputs=!0,this.packedOutput=!0,this.variableNames=["x","mean","variance"],le(r,t),le(r,e);var a="vec4(0.0)";n!=null&&(le(r,n),this.variableNames.push("offset"),a="getOffsetAtOutCoords()");var s="vec4(1.0)";o!=null&&(le(r,o),this.variableNames.push("scale"),s="getScaleAtOutCoords()"),this.outputShape=r,this.userCode=`
      void main() {
        vec4 offset = `+a+`;
        vec4 scale = `+s+`;

        vec4 x = getXAtOutCoords();
        vec4 mean = getMeanAtOutCoords();
        vec4 variance = getVarianceAtOutCoords();

        vec4 inv = scale * inversesqrt(variance + vec4(`+i+`));

        setOutput((x - mean) * inv + offset);
      }
    `},Ep="return areal * breal - aimag * bimag;",Rp="return areal * bimag + aimag * breal;",Os=function(r,t,e){this.variableNames=["AReal","AImag","BReal","BImag"],this.outputShape=le(t,e),this.userCode=`
      float binaryOpComplex(
          float areal, float aimag, float breal, float bimag) {
        `+r+`
      }

      void main() {
        float areal = getARealAtOutCoords();
        float aimag = getAImagAtOutCoords();
        float breal = getBRealAtOutCoords();
        float bimag = getBImagAtOutCoords();
        setOutput(binaryOpComplex(areal, aimag, breal, bimag));
      }
    `},hi="return a + b;",fi="return a - b;",Ms="return a * b;",mc="return (a < 0.) ? b * a : a;",Te=function(r,t,e){this.variableNames=["A","B"],this.outputShape=le(t,e),this.userCode=`
      float binaryOperation(float a, float b) {
        `+r+`
      }

      void main() {
        float a = getAAtOutCoords();
        float b = getBAtOutCoords();
        setOutput(binaryOperation(a, b));
      }
    `},gc=`
  vec4 aLessThanZero = vec4(lessThan(a, vec4(0.)));
  return (aLessThanZero * (b * a)) + ((vec4(1.0) - aLessThanZero) * a);
`,Qt=function(r,t,e,n){n===void 0&&(n=!1),this.variableNames=["A","B"],this.supportsBroadcasting=!0,this.packedInputs=!0,this.packedOutput=!0,this.outputShape=le(t,e);var o=this.outputShape.length,i="";if(n)if(o===0||Y(this.outputShape)===1)i=`
          result.y = 0.;
          result.z = 0.;
          result.w = 0.;
        `;else if(i=`
          `+_e(o)+` coords = getOutputCoords();
        `,o===1)i+=`
            result.y = (coords + 1) >= `+this.outputShape[0]+` ? 0. : result.y;
            result.z = 0.;
            result.w = 0.;
          `;else{var a=rt("coords",o);i+=`
            bool nextRowOutOfBounds =
              (`+a[o-2]+" + 1) >= "+this.outputShape[o-2]+`;
            bool nextColOutOfBounds =
              (`+a[o-1]+" + 1) >= "+this.outputShape[o-1]+`;
            result.y = nextColOutOfBounds ? 0. : result.y;
            result.z = nextRowOutOfBounds ? 0. : result.z;
            result.w = nextColOutOfBounds || nextRowOutOfBounds ? 0. : result.w;
          `}this.userCode=`
      vec4 binaryOperation(vec4 a, vec4 b) {
        `+r+`
      }

      void main() {
        vec4 a = getAAtOutCoords();
        vec4 b = getBAtOutCoords();

        vec4 result = binaryOperation(a, b);
        `+i+`

        setOutput(result);
      }
    `},kp=function(){function r(t){this.variableNames=["A"],this.outputShape=t,this.userCode=`
      uniform float minVal;
      uniform float maxVal;

      void main() {
        float value = getAAtOutCoords();
        if (isnan(value)) {
          setOutput(value);
          return;
        }

        setOutput(clamp(value, minVal, maxVal));
      }
    `}return r.prototype.getCustomSetupFunc=function(t,e){var n=this;return function(o,i){n.minLoc==null&&(n.minLoc=o.getUniformLocationNoThrow(i,"minVal"),n.maxLoc=o.getUniformLocationNoThrow(i,"maxVal")),o.gl.uniform1f(n.minLoc,t),o.gl.uniform1f(n.maxLoc,e)}},r}(),Ip=function(){function r(t){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=t,this.userCode=`
      uniform float minVal;
      uniform float maxVal;

      void main() {
        vec4 value = getAAtOutCoords();

        if (any(isnan(value))) {
          setOutput(value);
          return;
        }

        setOutput(clamp(value, vec4(minVal), vec4(maxVal)));
      }
    `}return r.prototype.getCustomSetupFunc=function(t,e){var n=this;return function(o,i){n.minLoc==null&&(n.minLoc=o.getUniformLocationNoThrow(i,"minVal"),n.maxLoc=o.getUniformLocationNoThrow(i,"maxVal")),o.gl.uniform1f(n.minLoc,t),o.gl.uniform1f(n.maxLoc,e)}},r}(),Sp=function(r){this.variableNames=["real","imag"],this.outputShape=r,this.userCode=`
      void main() {
        float re = abs(getRealAtOutCoords());
        float im = abs(getImagAtOutCoords());
        float mx = max(re, im);

        // sadly the length function in glsl is not underflow-safe
        // (at least not on Intel GPUs). So the safe solution is
        // to ensure underflow-safety in all cases.
        setOutput(
          mx == 0.0 ? 0.0 : mx * length(vec2(1, min(re, im)/mx))
        );
      }
    `},Ap=function(r){this.outputShape=[],this.outputShape=or(r,1),this.variableNames=r.map(function(s,u){return"T"+u});var t=new Array(r.length-1);t[0]=r[0][1];for(var e=1;e<t.length;e++)t[e]=t[e-1]+r[e][1];var n=["if (yC < "+t[0]+") setOutput(getT0(yR, yC));"];for(e=1;e<t.length;e++){var o=t[e-1];n.push("else if (yC < "+t[e]+") setOutput(getT"+e+"(yR, yC-"+o+"));")}var i=t.length,a=t[t.length-1];n.push("else setOutput(getT"+i+"(yR, yC-"+a+"));"),this.userCode=`
      void main() {
        ivec2 coords = getOutputCoords();
        int yR = coords.x;
        int yC = coords.y;

        `+n.join(`
        `)+`
      }
    `},Tp=function(r,t){this.packedInputs=!0,this.packedOutput=!0,this.outputShape=[],this.outputShape=or(r,t);var e=this.outputShape,n=e.length,o=_e(n),i=rt("coords",n),a=["x","y","z","w","u","v"].slice(0,n);this.variableNames=r.map(function(v,g){return"T"+g});var s=new Array(r.length-1);s[0]=r[0][t];for(var u=1;u<s.length;u++)s[u]=s[u-1]+r[u][t];var c=a[t],l=a.slice(-2),h=a.join(),f="if ("+c+" < "+s[0]+`) {
        return getChannel(
            getT0(`+h+"), vec2("+l.join()+`));
        }`;for(u=1;u<s.length;u++){var p=s[u-1];f+=`
        if (`+c+" < "+s[u]+"  && "+c+" >= "+s[u-1]+`) {
          return getChannel(
            getT`+u+"("+zr(a,c,p)+`),
            vec2(`+zr(l,c,p)+`));
        }`}var d=s.length,m=s[s.length-1];f+=`
        return getChannel(
          getT`+d+"("+zr(a,c,m)+`),
          vec2(`+zr(l,c,m)+"));",this.userCode=`
      float getValue(`+a.map(function(v){return"int "+v})+`) {
        `+f+`
      }

      void main() {
        `+o+` coords = getOutputCoords();
        vec4 result = vec4(getValue(`+i+`), 0., 0., 0.);

        `+i[n-1]+" = "+i[n-1]+` + 1;
        if (`+i[n-1]+" < "+e[n-1]+`) {
          result.g = getValue(`+i+`);
        }

        `+i[n-2]+" = "+i[n-2]+` + 1;
        if (`+i[n-2]+" < "+e[n-2]+`) {
          result.a = getValue(`+i+`);
        }

        `+i[n-1]+" = "+i[n-1]+` - 1;
        if (`+i[n-2]+" < "+e[n-2]+` &&
            `+i[n-1]+" < "+e[n-1]+`) {
          result.b = getValue(`+i+`);
        }
        setOutput(result);
      }
    `};function zr(r,t,e){var n=r.indexOf(t);return r.map(function(o,i){return i===n?o+" - "+e:o}).join()}var Dp=function(r){this.variableNames=["x","dy"],this.outputShape=r.filterShape;var t=r.strideHeight,e=r.strideWidth,n=r.padInfo.top,o=r.padInfo.left,i=r.dataFormat==="channelsLast";this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int wR = coords.x;
        int wC = coords.y;
        int d1 = coords.z;
        int d2 = coords.w;

        // Convolve x(?, ?, d1) with dy(:, :, d2) to get dw(wR, wC, d1, d2).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;

        for (int b = 0; b < `+r.batchSize+`; b++) {
          for (int yR = 0; yR < `+r.outHeight+`; yR++) {
            int xR = wR + yR * `+t+" - "+n+`;

            if (xR < 0 || xR >= `+r.inHeight+`) {
              continue;
            }

            for (int yC = 0; yC < `+r.outWidth+`; yC++) {
              int xC = wC + yC * `+e+" - "+o+`;

              if (xC < 0 || xC >= `+r.inWidth+`) {
                continue;
              }

              if (`+i+`) {
                float dyValue = getDy(b, yR, yC, d2);
                float xValue = getX(b, xR, xC, d1);
                dotProd += (xValue * dyValue);
              } else {
                float dyValue = getDy(b, d2, yR, yC);
                float xValue = getX(b, d1, xR, xC);
                dotProd += (xValue * dyValue);
              }

            }
          }
        }
        setOutput(dotProd);
      }
    `},Np=function(r){this.variableNames=["dy","W"],this.outputShape=r.inShape;var t=r.filterHeight,e=r.filterWidth,n=r.strideHeight,o=r.strideWidth,i=r.dataFormat==="channelsLast",a=t-1-r.padInfo.top,s=e-1-r.padInfo.left,u=i?1:2,c=i?2:3,l=i?3:1;this.userCode=`
      const ivec2 pads = ivec2(`+a+", "+s+`);

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords[0];
        int d1 = coords[`+l+`];

        ivec2 dyCorner = ivec2(coords[`+u+"], coords["+c+`]) - pads;
        int dyRCorner = dyCorner.x;
        int dyCCorner = dyCorner.y;

        // Convolve dy(?, ?, d2) with w(:, :, d1, d2) to compute dx(xR, xC, d1).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;
        for (int wR = 0; wR < `+t+`; wR++) {
          float dyR = float(dyRCorner + wR) / `+n+`.0;

          if (dyR < 0.0 || dyR >= `+r.outHeight+`.0 || fract(dyR) > 0.0) {
            continue;
          }
          int idyR = int(dyR);

          int wRPerm = `+t+` - 1 - wR;

          for (int wC = 0; wC < `+e+`; wC++) {
            float dyC = float(dyCCorner + wC) / `+o+`.0;

            if (dyC < 0.0 || dyC >= `+r.outWidth+`.0 ||
                fract(dyC) > 0.0) {
              continue;
            }
            int idyC = int(dyC);

            int wCPerm = `+e+` - 1 - wC;

            for (int d2 = 0; d2 < `+r.outChannels+`; d2++) {

              if (`+i+`) {
                float xValue = getDy(batch, idyR, idyC, d2);
                float wValue = getW(wRPerm, wCPerm, d1, d2);
                dotProd += xValue * wValue;
              } else {
                float xValue = getDy(batch, d2, idyR, idyC);
                float wValue = getW(wRPerm, wCPerm, d1, d2);
                dotProd += xValue * wValue;
              }

            }
          }
        }
        setOutput(dotProd);
      }
    `},Fp=function(r){this.variableNames=["x","dy"],this.outputShape=r.filterShape;var t=r.strideDepth,e=r.strideHeight,n=r.strideWidth,o=r.padInfo.front,i=r.padInfo.top,a=r.padInfo.left;this.userCode=`
      void main() {
        ivec5 coords = getOutputCoords();
        int wF = coords.x;
        int wR = coords.y;
        int wC = coords.z;
        int d1 = coords.w;
        int d2 = coords.u;

        float dotProd = 0.0;

        for (int b = 0; b < `+r.batchSize+`; b++) {
          for (int yF = 0; yF < `+r.outDepth+`; yF++) {
            int xF = wF + yF * `+t+" - "+o+`;

            if (xF < 0 || xF >= `+r.inDepth+`) {
              continue;
            }

            for (int yR = 0; yR < `+r.outHeight+`; yR++) {
              int xR = wR + yR * `+e+" - "+i+`;

              if (xR < 0 || xR >= `+r.inHeight+`) {
                continue;
              }

              for (int yC = 0; yC < `+r.outWidth+`; yC++) {
                int xC = wC + yC * `+n+" - "+a+`;

                if (xC < 0 || xC >= `+r.inWidth+`) {
                  continue;
                }

                float dyValue = getDy(b, yF, yR, yC, d2);
                float xValue = getX(b, xF, xR, xC, d1);
                dotProd += (xValue * dyValue);
              }
            }
          }
        }
        setOutput(dotProd);
      }
    `},Pp=function(r){this.variableNames=["dy","W"],this.outputShape=r.inShape;var t=r.filterDepth,e=r.filterHeight,n=r.filterWidth,o=r.strideDepth,i=r.strideHeight,a=r.strideWidth,s=t-1-r.padInfo.front,u=e-1-r.padInfo.top,c=n-1-r.padInfo.left;this.userCode=`
      const ivec3 pads = ivec3(`+s+", "+u+", "+c+`);

      void main() {
        ivec5 coords = getOutputCoords();
        int batch = coords.x;
        int d1 = coords.u;


        ivec3 dyCorner = ivec3(coords.y, coords.z, coords.w) - pads;
        int dyFCorner = dyCorner.x;
        int dyRCorner = dyCorner.y;
        int dyCCorner = dyCorner.z;

        float dotProd = 0.0;
        for (int wF = 0; wF < `+t+`; wF++) {
          float dyF = float(dyFCorner + wF) / `+o+`.0;

          if (dyF < 0.0 || dyF >= `+r.outDepth+`.0 || fract(dyF) > 0.0) {
            continue;
          }
          int idyF = int(dyF);

          int wFPerm = `+t+` - 1 - wF;

          for (int wR = 0; wR < `+e+`; wR++) {
            float dyR = float(dyRCorner + wR) / `+i+`.0;

            if (dyR < 0.0 || dyR >= `+r.outHeight+`.0 ||
              fract(dyR) > 0.0) {
              continue;
            }
            int idyR = int(dyR);

            int wRPerm = `+e+` - 1 - wR;

            for (int wC = 0; wC < `+n+`; wC++) {
              float dyC = float(dyCCorner + wC) / `+a+`.0;

              if (dyC < 0.0 || dyC >= `+r.outWidth+`.0 ||
                  fract(dyC) > 0.0) {
                continue;
              }
              int idyC = int(dyC);

              int wCPerm = `+n+` - 1 - wC;

              for (int d2 = 0; d2 < `+r.outChannels+`; d2++) {
                float xValue = getDy(batch, idyF, idyR, idyC, d2);
                float wValue = getW(wFPerm, wRPerm, wCPerm, d1, d2);
                dotProd += xValue * wValue;
              }
            }
          }
        }
        setOutput(dotProd);
      }
    `},Op=function(r){this.variableNames=["x","dy"],this.outputShape=r.filterShape;var t=r.strideHeight,e=r.strideWidth,n=r.padInfo.top,o=r.padInfo.left,i=r.outChannels/r.inChannels;this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int wR = coords.x;
        int wC = coords.y;
        int d1 = coords.z;
        int dm = coords.w;
        int d2 = d1 * `+i+` + dm;

        float dotProd = 0.0;

        // TO DO: Vec4 over the batch size
        for (int b = 0; b < `+r.batchSize+`; b++) {
          for (int yR = 0; yR < `+r.outHeight+`; yR++) {
            int xR = wR + yR * `+t+" - "+n+`;

            if (xR < 0 || xR >= `+r.inHeight+`) {
              continue;
            }

            for (int yC = 0; yC < `+r.outWidth+`; yC++) {
              int xC = wC + yC * `+e+" - "+o+`;

              if (xC < 0 || xC >= `+r.inWidth+`) {
                continue;
              }

              float dyValue = getDy(b, yR, yC, d2);
              float xValue = getX(b, xR, xC, d1);
              dotProd += (xValue * dyValue);
            }
          }
        }
        setOutput(dotProd);
      }
    `},Mp=function(r){this.variableNames=["dy","W"],this.outputShape=r.inShape;var t=r.filterHeight,e=r.filterWidth,n=r.strideHeight,o=r.strideWidth,i=t-1-r.padInfo.top,a=e-1-r.padInfo.left,s=r.outChannels/r.inChannels;this.userCode=`
      const ivec2 pads = ivec2(`+i+", "+a+`);

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords[0];
        int d1 = coords[3];
        ivec2 dyCorner = coords.yz - pads;
        int dyRCorner = dyCorner.x;
        int dyCCorner = dyCorner.y;

        float dotProd = 0.0;

        for (int wR = 0; wR < `+t+`; wR++) {
          float dyR = float(dyRCorner + wR) / `+n+`.0;

          if (dyR < 0.0 || dyR >= `+r.outHeight+`.0 || fract(dyR) > 0.0) {
            continue;
          }
          int idyR = int(dyR);

          int wRPerm = `+t+` - 1 - wR;

          for (int wC = 0; wC < `+e+`; wC++) {
            float dyC = float(dyCCorner + wC) / `+o+`.0;

            if (dyC < 0.0 || dyC >= `+r.outWidth+`.0 ||
                fract(dyC) > 0.0) {
              continue;
            }
            int idyC = int(dyC);

            int wCPerm = `+e+` - 1 - wC;

            // TO DO: Vec4 over the channelMul
            for (int dm = 0; dm < `+s+`; dm++) {
              int d2 = d1 * `+s+` + dm;
              float xValue = getDy(batch, idyR, idyC, d2);
              float wValue = getW(wRPerm, wCPerm, d1, dm);
              dotProd += xValue * wValue;
            }
          }
        }
        setOutput(dotProd);
      }
    `},Bs=function(r,t,e,n){t===void 0&&(t=!1),e===void 0&&(e=null),n===void 0&&(n=!1),this.variableNames=["x","W"],this.outputShape=r.outShape;var o=r.padInfo.top,i=r.padInfo.left,a=r.strideHeight,s=r.strideWidth,u=r.dilationHeight,c=r.dilationWidth,l=r.filterHeight,h=r.filterWidth,f=4*Math.floor(r.inChannels/4),p=r.inChannels%4,d=r.dataFormat==="channelsLast",m=d?1:2,v=d?2:3,g=d?3:1,x="",b="";e&&(x=n?`float activation(float a) {
          float b = getPreluActivationWeightsAtOutCoords();
          `+e+`
        }`:`
          float activation(float x) {
            `+e+`
          }
        `,b="result = activation(result);");var y=t?"result += getBiasAtOutCoords();":"";t&&this.variableNames.push("bias"),n&&this.variableNames.push("preluActivationWeights"),this.userCode=`
      `+x+`

      const ivec2 strides = ivec2(`+a+", "+s+`);
      const ivec2 pads = ivec2(`+o+", "+i+`);

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords[0];
        int d2 = coords[`+g+`];

        ivec2 xRCCorner =
            ivec2(coords[`+m+"], coords["+v+`]) * strides - pads;
        int xRCorner = xRCCorner.x;
        int xCCorner = xRCCorner.y;

        // Convolve x(?, ?, d1) with w(:, :, d1, d2) to get y(yR, yC, d2).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;
        for (int wR = 0; wR < `+l+`; wR++) {
          int xR = xRCorner + wR * `+u+`;

          if (xR < 0 || xR >= `+r.inHeight+`) {
            continue;
          }

          for (int wC = 0; wC < `+h+`; wC++) {
            int xC = xCCorner + wC * `+c+`;

            if (xC < 0 || xC >= `+r.inWidth+`) {
              continue;
            }

            for (int d1 = 0; d1 < `+f+`; d1 += 4) {
              vec4 wValues = vec4(
                getW(wR, wC, d1, d2),
                getW(wR, wC, d1 + 1, d2),
                getW(wR, wC, d1 + 2, d2),
                getW(wR, wC, d1 + 3, d2)
              );

              if (`+d+`) {
                vec4 xValues = vec4(
                  getX(batch, xR, xC, d1),
                  getX(batch, xR, xC, d1 + 1),
                  getX(batch, xR, xC, d1 + 2),
                  getX(batch, xR, xC, d1 + 3)
                );
                dotProd += dot(xValues, wValues);
              } else {
                vec4 xValues = vec4(
                  getX(batch, d1, xR, xC),
                  getX(batch, d1 + 1, xR, xC),
                  getX(batch, d1 + 2, xR, xC),
                  getX(batch, d1 + 3, xR, xC)
                );
                dotProd += dot(xValues, wValues);
              }
            }

            if (`+(p===1)+`) {

              if (`+d+`) {
                dotProd +=
                    getX(batch, xR, xC, `+f+`) *
                    getW(wR, wC, `+f+`, d2);
              } else {
                dotProd +=
                    getX(batch, `+f+`, xR, xC) *
                    getW(wR, wC, `+f+`, d2);
              }

            } else if (`+(p===2)+`) {
              vec2 wValues = vec2(
                getW(wR, wC, `+f+`, d2),
                getW(wR, wC, `+f+` + 1, d2)
              );

              if (`+d+`) {
                vec2 xValues = vec2(
                  getX(batch, xR, xC, `+f+`),
                  getX(batch, xR, xC, `+f+` + 1)
                );
                dotProd += dot(xValues, wValues);
              } else {
                vec2 xValues = vec2(
                  getX(batch, `+f+`, xR, xC),
                  getX(batch, `+f+` + 1, xR, xC)
                );
                dotProd += dot(xValues, wValues);
              }

            } else if (`+(p===3)+`) {
              vec3 wValues = vec3(
                getW(wR, wC, `+f+`, d2),
                getW(wR, wC, `+f+` + 1, d2),
                getW(wR, wC, `+f+` + 2, d2)
              );

              if (`+d+`) {
                vec3 xValues = vec3(
                  getX(batch, xR, xC, `+f+`),
                  getX(batch, xR, xC, `+f+` + 1),
                  getX(batch, xR, xC, `+f+` + 2)
                );
                dotProd += dot(xValues, wValues);
              } else {
                vec3 xValues = vec3(
                  getX(batch, `+f+`, xR, xC),
                  getX(batch, `+f+` + 1, xR, xC),
                  getX(batch, `+f+` + 2, xR, xC)
                );
                dotProd += dot(xValues, wValues);
              }

            }
          }
        }

        float result = dotProd;
        `+y+`
        `+b+`
        setOutput(result);
      }
    `},Bp=function(r){this.variableNames=["x","W"],this.outputShape=r.outShape;var t=r.padInfo.front,e=r.padInfo.top,n=r.padInfo.left,o=r.strideDepth,i=r.strideHeight,a=r.strideWidth,s=r.dilationDepth,u=r.dilationHeight,c=r.dilationWidth,l=r.filterDepth,h=r.filterHeight,f=r.filterWidth,p=4*Math.floor(r.inChannels/4),d=r.inChannels%4;this.userCode=`
      const ivec3 strides = ivec3(`+o+", "+i+", "+a+`);
      const ivec3 pads = ivec3(`+t+", "+e+", "+n+`);

      void main() {
        ivec5 coords = getOutputCoords();
        int batch = coords.x;
        int d2 = coords.u;

        ivec3 xFRCCorner = ivec3(coords.y, coords.z, coords.w) * strides - pads;
        int xFCorner = xFRCCorner.x;
        int xRCorner = xFRCCorner.y;
        int xCCorner = xFRCCorner.z;

        // Convolve x(?, ?, ?, d1) with w(:, :, :, d1, d2) to get
        // y(yF, yR, yC, d2). ? = to be determined. : = across all
        // values in that axis.
        float dotProd = 0.0;
        for (int wF = 0; wF < `+l+`; wF++) {
          int xF = xFCorner + wF * `+s+`;

          if (xF < 0 || xF >= `+r.inDepth+`) {
            continue;
          }

          for (int wR = 0; wR < `+h+`; wR++) {
            int xR = xRCorner + wR * `+u+`;

            if (xR < 0 || xR >= `+r.inHeight+`) {
              continue;
            }

            for (int wC = 0; wC < `+f+`; wC++) {
              int xC = xCCorner + wC * `+c+`;

              if (xC < 0 || xC >= `+r.inWidth+`) {
                continue;
              }

              for (int d1 = 0; d1 < `+p+`; d1 += 4) {
                vec4 xValues = vec4(
                  getX(batch, xF, xR, xC, d1),
                  getX(batch, xF, xR, xC, d1 + 1),
                  getX(batch, xF, xR, xC, d1 + 2),
                  getX(batch, xF, xR, xC, d1 + 3)
                );
                vec4 wValues = vec4(
                  getW(wF, wR, wC, d1, d2),
                  getW(wF, wR, wC, d1 + 1, d2),
                  getW(wF, wR, wC, d1 + 2, d2),
                  getW(wF, wR, wC, d1 + 3, d2)
                );

                dotProd += dot(xValues, wValues);
              }

              if (`+(d===1)+`) {
                dotProd +=
                  getX(batch, xF, xR, xC, `+p+`) *
                  getW(wF, wR, wC, `+p+`, d2);
              } else if (`+(d===2)+`) {
                vec2 xValues = vec2(
                  getX(batch, xF, xR, xC, `+p+`),
                  getX(batch, xF, xR, xC, `+p+` + 1)
                );
                vec2 wValues = vec2(
                  getW(wF, wR, wC, `+p+`, d2),
                  getW(wF, wR, wC, `+p+` + 1, d2)
                );
                dotProd += dot(xValues, wValues);
              } else if (`+(d===3)+`) {
                vec3 xValues = vec3(
                  getX(batch, xF, xR, xC, `+p+`),
                  getX(batch, xF, xR, xC, `+p+` + 1),
                  getX(batch, xF, xR, xC, `+p+` + 2)
                );
                vec3 wValues = vec3(
                  getW(wF, wR, wC, `+p+`, d2),
                  getW(wF, wR, wC, `+p+` + 1, d2),
                  getW(wF, wR, wC, `+p+` + 2, d2)
                );
                dotProd += dot(xValues, wValues);
              }
            }
          }
        }
        setOutput(dotProd);
      }
    `},Ls=function(r,t,e,n){t===void 0&&(t=!1),e===void 0&&(e=null),n===void 0&&(n=!1),this.variableNames=["x","W"],this.outputShape=r.outShape;var o=r.inHeight,i=r.inWidth,a=r.padInfo.top,s=r.padInfo.left,u=r.strideHeight,c=r.strideWidth,l=r.dilationHeight,h=r.dilationWidth,f=r.filterHeight,p=r.filterWidth,d=r.outChannels/r.inChannels,m="",v="";e&&(m=n?`float activation(float a) {
          float b = getPreluActivationWeightsAtOutCoords();
          `+e+`
        }`:`
          float activation(float x) {
            `+e+`
          }
        `,v="result = activation(result);");var g=t?"result += getBiasAtOutCoords();":"";t&&this.variableNames.push("bias"),n&&this.variableNames.push("preluActivationWeights"),this.userCode=`
      `+m+`

      const ivec2 strides = ivec2(`+u+", "+c+`);
      const ivec2 pads = ivec2(`+a+", "+s+`);

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords.x;
        ivec2 xRCCorner = coords.yz * strides - pads;
        int d2 = coords.w;
        int d1 = d2 / `+d+`;
        int q = d2 - d1 * `+d+`;

        int xRCorner = xRCCorner.x;
        int xCCorner = xRCCorner.y;

        // Convolve x(?, ?, d1) with w(:, :, d1, q) to get y(yR, yC, d2).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;
        // TO DO(dsmilkov): Flatten the two for loops and vec4 the operations.
        for (int wR = 0; wR < `+f+`; wR++) {
          int xR = xRCorner + wR * `+l+`;

          if (xR < 0 || xR >= `+o+`) {
            continue;
          }

          for (int wC = 0; wC < `+p+`; wC++) {
            int xC = xCCorner + wC * `+h+`;

            if (xC < 0 || xC >= `+i+`) {
              continue;
            }

            float xVal = getX(batch, xR, xC, d1);
            float wVal = getW(wR, wC, d1, q);
            dotProd += xVal * wVal;
          }
        }

        float result = dotProd;
        `+g+`
        `+v+`
        setOutput(result);
      }
    `},Ws=function(r,t,e,n){t===void 0&&(t=!1),e===void 0&&(e=null),n===void 0&&(n=!1),this.variableNames=["x","W"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=r.outShape;for(var o=r.inHeight,i=r.inWidth,a=r.padInfo.top,s=r.padInfo.left,u=r.strideHeight,c=r.strideWidth,l=r.dilationHeight,h=r.dilationWidth,f=r.filterHeight,p=r.filterWidth,d=p,m="int xR; int xC; int xCOffset;",v=0;v<f;v++)for(var g=0;g<p;g++)m+=`
          vec4 xTexelR`+v+"C"+2*g+` = vec4(0.);
          vec4 wR`+v+"C"+g+` = vec4(0.);
          vec4 xR`+v+"C"+g+" = vec4(0.);";for(v=0;v<f;v++)for(var x=0;x<d;x++){if(m+=`
          xR = xRCorner + `+v*l+`;
          xC = xCCorner + `+(g=2*x)*h+`;
        `,c===1){if(g<p&&(m+=s%2==1?`
                xCOffset = xC + 1;
                if(xR >= 0 && xR < `+o+" && xCOffset >= 0 && xCOffset < "+i+`) {
                  xTexelR`+v+"C"+g+` = getX(batch, xR, xCOffset, d1);

                  // Need to manually clear unused channels in case
                  // we're reading from recycled texture.
                  if(xCOffset + 1 >= `+i+`) {
                    xTexelR`+v+"C"+g+`.zw = vec2(0.);
                  }
                } else {
                  xTexelR`+v+"C"+g+` = vec4(0.);
                }

                xCOffset = xC + 1 - 2;
                if(xR >= 0 && xR < `+o+" && xCOffset >= 0 && xCOffset < "+i+`) {
                  vec4 previous = getX(batch, xR, xCOffset, d1);

                  // Need to manually clear unused channels in case
                  // we're reading from recycled texture.
                  if(xCOffset + 1 >= `+i+`) {
                    previous.zw = vec2(0.);
                  }

                  xR`+v+"C"+g+" = vec4(previous.zw, xTexelR"+v+"C"+g+`.xy);
                } else {
                  xR`+v+"C"+g+" = vec4(0, 0, xTexelR"+v+"C"+g+`.xy);
                }
              `:`
                if(xR >= 0 && xR < `+o+" && xC >= 0 && xC < "+i+`) {
                  xTexelR`+v+"C"+g+` = getX(batch, xR, xC, d1);
                } else {
                  xTexelR`+v+"C"+g+` = vec4(0.);
                }

                xR`+v+"C"+g+" = xTexelR"+v+"C"+g+`;
              `,g+1<p)){var b=s%2==0?Ou(h):h;h%2==0&&s%2==1||h%2!=0&&s%2!=1?(m+=`
                  xCOffset = xC + `+s%2+" + "+b+`;

                  if(xR >= 0 && xR < `+o+` &&
                    xCOffset >= 0 && xCOffset < `+i+`) {
                    xTexelR`+v+"C"+(g+2)+` = getX(batch, xR, xCOffset, d1);
                  }
                `,h>1&&(m+=`
                    xCOffset -= 2;
                    if(xR >= 0 && xR < `+o+` &&
                      xCOffset >= 0 && xCOffset < `+i+`) {
                      xTexelR`+v+"C"+g+` = getX(batch, xR, xCOffset, d1);
                    } else {
                      xTexelR`+v+"C"+g+` = vec4(0.);
                    }
                  `),m+=`
                  xR`+v+"C"+(g+1)+` = vec4(
                    xTexelR`+v+"C"+g+".zw, xTexelR"+v+"C"+(g+2)+`.xy);
                `):m+=`
                  xCOffset = xC + `+b+`;

                  if(xR >= 0 && xR < `+o+` &&
                    xCOffset >= 0 && xCOffset < `+i+`) {
                    xTexelR`+v+"C"+(g+2)+` = getX(batch, xR, xCOffset, d1);
                  }

                  xR`+v+"C"+(g+1)+" = xTexelR"+v+"C"+(g+2)+`;
                `}}else g<p&&(m+=`
              if(xR >= 0 && xR < `+o+`) {
            `,s%2==1?(m+=`
                xCOffset = xC + 1 - `+c+`;
                if(xCOffset >= 0 && xCOffset < `+i+`) {
                  xTexelR`+v+"C"+g+` = getX(batch, xR, xCOffset, d1);
                } else {
                  xTexelR`+v+"C"+g+` = vec4(0.);
                }

                if(xC + 1 >= 0 && xC + 1 < `+i+`) {
                  xTexelR`+v+"C"+(g+2)+` = getX(batch, xR, xC + 1, d1);
                } else {
                  xTexelR`+v+"C"+(g+2)+` = vec4(0.);
                }

                xR`+v+"C"+g+` = vec4(
                  xTexelR`+v+"C"+g+".zw, xTexelR"+v+"C"+(g+2)+`.zw);
              `,g+1<p&&(m+=`
                  vec4 final = vec4(0.);
                  xCOffset = xC + 1 + `+c+`;
                  if(xCOffset >= 0 && xCOffset < `+i+`) {
                    final = getX(batch, xR, xCOffset, d1);
                  }
                  xR`+v+"C"+(g+1)+" = vec4(xTexelR"+v+"C"+(g+2)+`.xy, final.xy);
                `)):(m+=`
                if(xC >= 0 && xC < `+i+`) {
                  xTexelR`+v+"C"+g+` = getX(batch, xR, xC, d1);
                } else {
                  xTexelR`+v+"C"+g+` = vec4(0.);
                }

                xCOffset = xC + `+c+`;
                if(xCOffset >= 0 && xCOffset < `+i+`) {
                  xTexelR`+v+"C"+(g+2)+` = getX(batch, xR, xCOffset, d1);
                } else {
                  xTexelR`+v+"C"+(g+2)+` = vec4(0.);
                }

                xR`+v+"C"+g+` = vec4(
                  xTexelR`+v+"C"+g+".xy, xTexelR"+v+"C"+(g+2)+`.xy);
              `,g+1<p&&(m+=`
                  xR`+v+"C"+(g+1)+` = vec4(
                    xTexelR`+v+"C"+g+".zw, xTexelR"+v+"C"+(g+2)+`.zw);
                `)),m+="}");g<p&&(m+=`
            vec4 wTexelR`+v+"C"+g+" = getW("+v+", "+g+`, d1, q);
            wR`+v+"C"+g+" = vec4(wTexelR"+v+"C"+g+".xz, wTexelR"+v+"C"+g+`.xz);
          `,g+1<p&&(m+=`
              vec4 wTexelR`+v+"C"+(g+1)+" = getW("+v+", "+(g+1)+`, d1, q);
              wR`+v+"C"+(g+1)+` =
                vec4(wTexelR`+v+"C"+(g+1)+".xz, wTexelR"+v+"C"+(g+1)+".xz);"))}for(v=0;v<f;v++)for(g=0;g<p;g++)m+="dotProd += xR"+v+"C"+g+" * wR"+v+"C"+g+";";var y="",w="";e&&(y=n?`vec4 activation(vec4 a) {
          vec4 b = getPreluActivationWeightsAtOutCoords();
          `+e+`
        }`:`vec4 activation(vec4 x) {
          `+e+`
        }`,w="result = activation(result);");var _=t?"result += getBiasAtOutCoords();":"";t&&this.variableNames.push("bias"),n&&this.variableNames.push("preluActivationWeights"),this.userCode=`
      `+y+`

      const ivec2 strides = ivec2(`+u+", "+c+`);
      const ivec2 pads = ivec2(`+a+", "+s+`);

      void main() {

        ivec4 coords = getOutputCoords();
        int batch = coords.x;
        ivec2 xRCCorner = coords.yz * strides - pads;
        int d2 = coords.w;
        int d1 = d2;
        int q = 0;
        int xRCorner = xRCCorner.x;
        int xCCorner = xRCCorner.y;

        vec4 dotProd = vec4(0.);

        `+m+`

        vec4 result = dotProd;
        `+_+`
        `+w+`
        setOutput(result);
      }
    `},Lp=function(r,t,e,n,o){this.variableNames=["Image","Boxes","BoxInd"],this.outputShape=[];var i=r[0],a=r[1],s=r[2],u=r[3],c=t[0],l=e[0],h=e[1];this.outputShape=[c,l,h,u];var f=n==="bilinear"?1:0,p=[a-1+".0",s-1+".0"],d=p[0],m=p[1],v=l>1?[""+(a-1)/(l-1),"(y2-y1) * height_ratio","y1*"+d+" + float(y)*(height_scale)"]:["0.0","0.0","0.5 * (y1+y2) * "+d],g=v[0],x=v[1],b=v[2],y=h>1?[""+(s-1)/(h-1),"(x2-x1) * width_ratio","x1*"+m+" + float(x)*(width_scale)"]:["0.0","0.0","0.5 * (x1+x2) * "+m],w=y[0],_=y[1],S=y[2];this.userCode=`
      const float height_ratio = float(`+g+`);
      const float width_ratio = float(`+w+`);
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int y = coords[1];
        int x = coords[2];
        int d = coords[3];

        // get box vals
        float y1 = getBoxes(b,0);
        float x1 = getBoxes(b,1);
        float y2 = getBoxes(b,2);
        float x2 = getBoxes(b,3);

        // get image in batch index
        int bInd = round(getBoxInd(b));
        if(bInd < 0 || bInd >= `+i+`) {
          return;
        }

        float height_scale = `+x+`;
        float width_scale = `+_+`;

        float in_y = `+b+`;
        if( in_y < 0.0 || in_y > `+d+` ) {
          setOutput(float(`+o+`));
          return;
        }
        float in_x = `+S+`;
        if( in_x < 0.0 || in_x > `+m+` ) {
          setOutput(float(`+o+`));
          return;
        }

        vec2 sourceFracIndexCR = vec2(in_x,in_y);
        if(`+f+` == 1) {
          // Compute the four integer indices.
          ivec2 sourceFloorCR = ivec2(sourceFracIndexCR);
          ivec2 sourceCeilCR = ivec2(ceil(sourceFracIndexCR));

          float topLeft = getImage(b, sourceFloorCR.y, sourceFloorCR.x, d);
          float bottomLeft = getImage(b, sourceCeilCR.y, sourceFloorCR.x, d);
          float topRight = getImage(b, sourceFloorCR.y, sourceCeilCR.x, d);
          float bottomRight = getImage(b, sourceCeilCR.y, sourceCeilCR.x, d);

          vec2 fracCR = sourceFracIndexCR - vec2(sourceFloorCR);

          float top = topLeft + (topRight - topLeft) * fracCR.x;
          float bottom = bottomLeft + (bottomRight - bottomLeft) * fracCR.x;
          float newValue = top + (bottom - top) * fracCR.y;
          setOutput(newValue);
        } else {
          // Compute the coordinators of nearest neighbor point.
          ivec2 sourceNearestCR = ivec2(floor(
            sourceFracIndexCR + vec2(0.5,0.5)));
          float newValue = getImage(b, sourceNearestCR.y, sourceNearestCR.x, d);
          setOutput(newValue);
        }
      }
    `},Wp=function(r,t,e){this.variableNames=["x"],this.outputShape=r;var n=r.length,o=r[r.length-1],i=e?"<":">";this.userCode=`
      int getIndex(int i) {
        `+(e?"return "+o+" -i - 1;":"return i;")+`
      }

      void main() {
        `+_e(n)+` coords = getOutputCoords();
        int end = `+Us(n,"coords")+`;
        float val = 0.0;
        for (int i = `+o+` - 1; i >= 0; i -= 1) {
          int idx = getIndex(i);
          if (idx `+i+` end) {
            continue;
          }
          if (idx == end && `+t+`) {
            continue;
          }
          `+Us(n,"coords")+` = idx;
          val += getX(`+function(a,s){if(a===1)return""+s;if(a===2)return s+".x, "+s+".y";if(a===3)return s+".x, "+s+".y, "+s+".z";if(a===4)return s+".x, "+s+".y, "+s+".z, "+s+".w";throw Error("Cumulative sum for rank "+a+" is not yet supported")}(n,"coords")+`);
        }
        setOutput(val);
      }
    `};function Us(r,t){if(r===1)return""+t;if(r===2)return t+".y";if(r===3)return t+".z";if(r===4)return t+".w";throw Error("Cumulative sum for rank "+r+" is not yet supported")}var Up=function(r){this.variableNames=["A"],this.packedInputs=!1,this.packedOutput=!0,this.outPackingScheme=br.DENSE;var t=vr(r),e=Je();this.outputShape=r,this.userCode=`
      ivec3 outCoordsFromFlatIndex(int index) {
        `+In(["r","c","d"],r)+`
        return ivec3(r, c, d);
      }

      void main() {
        ivec2 resTexRC = ivec2(resultUV.yx *
          vec2(`+t[0]+", "+t[1]+`));
        int index = 4 * (resTexRC.x * `+t[1]+` + resTexRC.y);

        vec4 result = vec4(0.);

        for (int i=0; i<4; i++) {
          int flatIndex = index + i;
          ivec3 rc = outCoordsFromFlatIndex(flatIndex);
          result[i] = getA(rc.x, rc.y, rc.z);
        }

        `+e.output+` = result;
      }
    `},Vp=function(r){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.outPackingScheme=br.DENSE;var t=vr(r),e=Je();this.outputShape=r,this.userCode=`
      ivec3 outCoordsFromFlatIndex(int index) {
        `+In(["r","c","d"],r)+`
        return ivec3(r, c, d);
      }

      void main() {
        ivec2 resTexRC = ivec2(resultUV.yx *
          vec2(`+t[0]+", "+t[1]+`));
        int index = 4 * (resTexRC.x * `+t[1]+` + resTexRC.y);

        vec4 result = vec4(0.);

        for (int i=0; i<4; i++) {
          int flatIndex = index + i;
          ivec3 rc = outCoordsFromFlatIndex(flatIndex);
          result[i] = getChannel(getA(rc.x, rc.y, rc.z), vec2(rc.y, rc.z));
        }

        `+e.output+` = result;
      }
    `},zp=function(){function r(t,e,n){this.variableNames=["x"],this.outputShape=[],this.outputShape=t,this.blockSize=e,this.dataFormat=n,this.userCode=`
    void main() {
      ivec4 coords = getOutputCoords();
      int b = coords[0];
      int h = `+this.getHeightCoordString()+`;
      int w = `+this.getWidthCoordString()+`;
      int d = `+this.getDepthCoordString()+`;

      int in_h = h / `+e+`;
      int offset_h = imod(h, `+e+`);
      int in_w = w / `+e+`;
      int offset_w = imod(w, `+e+`);
      int offset_d = (offset_h * `+e+` + offset_w) *
        `+this.getOutputDepthSize()+`;
      int in_d = d + offset_d;

      float result = `+this.getInputSamplingString()+`;
      setOutput(result);
    }
  `}return r.prototype.getHeightCoordString=function(){return this.dataFormat==="NHWC"?"coords[1]":"coords[2]"},r.prototype.getWidthCoordString=function(){return this.dataFormat==="NHWC"?"coords[2]":"coords[3]"},r.prototype.getDepthCoordString=function(){return this.dataFormat==="NHWC"?"coords[3]":"coords[1]"},r.prototype.getOutputDepthSize=function(){return this.dataFormat==="NHWC"?this.outputShape[3]:this.outputShape[1]},r.prototype.getInputSamplingString=function(){return this.dataFormat==="NHWC"?"getX(b, in_h, in_w, in_d)":"getX(b, in_d, in_h, in_w)"},r}(),Gp=function(r){this.variableNames=["X"],this.outputShape=[r,r],this.userCode=`
      void main() {
          ivec2 coords = getOutputCoords();
          float val = coords[0] == coords[1] ? getX(coords[0]) : 0.0;
          setOutput(val);
      }
    `},Hp=function(r){this.variableNames=["A"],this.outTexUsage=ft.DOWNLOAD;var t=Je();this.outputShape=r,this.userCode=`
      `+dc+`

      void main() {
        float x = getAAtOutCoords();
        `+t.output+` = encode_float(x);
      }
    `},qp=function(r){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!1,this.outTexUsage=ft.DOWNLOAD;var t=Je();this.outputShape=r,this.userCode=`
      `+dc+`

      void main() {
        ivec3 coords = getOutputCoords();
        float x = getChannel(getAAtOutCoords(), vec2(coords.y, coords.z));
        `+t.output+` = encode_float(x);
      }
    `},jp=function(r,t,e){e===void 0&&(e=!1),this.variableNames=["A"];var n=Je(),o=t[0],i=t[1];this.outputShape=r;var a="result";e&&(a="floor(result * 255. + 0.5)"),this.userCode=`
      `+xa(r)+`

      void main() {
        ivec3 coords = getOutputCoords();

        int flatIndex = getFlatIndex(coords);
        int offset = imod(flatIndex, 4);

        flatIndex = idiv(flatIndex, 4, 1.);
        
        int r = flatIndex / `+i+`;
        int c = imod(flatIndex, `+i+`);
        vec2 uv = (vec2(c, r) + halfCR) / vec2(`+i+".0, "+o+`.0);
        vec4 values = `+n.texture2D+`(A, uv);

        float result;

        if(offset == 0) {
          result = values[0];
        } else if(offset == 1) {
          result = values[1];
        } else if(offset == 2) {
          result = values[2];
        } else {
          result = values[3];
        }

        `+n.output+" = vec4("+a+`, 0., 0., 0.);
      }
    `},Kp=function(r,t,e){e===void 0&&(e=!1),this.variableNames=["A"],this.packedInputs=!1,this.packedOutput=!0;var n=Je(),o=t[0],i=t[1];this.outputShape=r;var a="",s="result";e&&(s="floor(result * 255. + 0.5)");for(var u=0;u<=1;u++)for(var c=0;c<=1;c++){var l=2*u+c;a+=`
          localCoords = coords;
          if(localCoords[2] + `+c+" < "+r[2]+`) {
            localCoords[2] += `+c+`;
            if(localCoords[1] + `+u+" < "+r[1]+`) {
              localCoords[1] += `+u+`;

              flatIndex = getFlatIndex(localCoords);
              offset = imod(flatIndex, 4);

              flatIndex = idiv(flatIndex, 4, 1.);

              r = flatIndex / `+i+`;
              c = imod(flatIndex, `+i+`);
              uv = (vec2(c, r) + halfCR) / vec2(`+i+".0, "+o+`.0);
              values = `+n.texture2D+`(A, uv);

              if(offset == 0) {
                result[`+l+`] = values[0];
              } else if(offset == 1) {
                result[`+l+`] = values[1];
              } else if(offset == 2) {
                result[`+l+`] = values[2];
              } else {
                result[`+l+`] = values[3];
              }
            }
          }
        `}this.userCode=`
      `+xa(r)+`

      void main() {
        ivec3 coords = getOutputCoords();

        vec4 result = vec4(0.);
        int flatIndex, r, c, offset;
        ivec3 localCoords;
        vec2 uv;
        vec4 values;

        `+a+`

        `+n.output+" = "+s+`;
      }
    `},Xp="return real * expR - imag * expI;",$p="return real * expI + imag * expR;",Vs=function(r,t,e){this.variableNames=["real","imag"];var n=t[1];this.outputShape=t;var o=e?"2.0 * "+Math.PI:"-2.0 * "+Math.PI,i=e?n+".0":"1.0";this.userCode=`
      const float exponentMultiplier = `+o+`;

      float unaryOpComplex(float real, float expR, float imag, float expI) {
        `+r+`
      }

      float mulMatDFT(int batch, int index) {
        float indexRatio = float(index) / float(`+n+`);
        float exponentMultiplierTimesIndexRatio =
            exponentMultiplier * indexRatio;

        float result = 0.0;

        for (int i = 0; i < `+n+`; i++) {
          // x = (-2|2 * PI / N) * index * i;
          float x = exponentMultiplierTimesIndexRatio * float(i);
          float expR = cos(x);
          float expI = sin(x);
          float real = getReal(batch, i);
          float imag = getImag(batch, i);

          result +=
              unaryOpComplex(real, expR, imag, expI) / `+i+`;
        }

        return result;
      }

      void main() {
        ivec2 coords = getOutputCoords();
        setOutput(mulMatDFT(coords[0], coords[1]));
      }
    `},Yp=function(){function r(t,e){this.outputShape=[],this.variableNames=["x"],this.outputShape=t,this.userCode=`
      uniform float value;
      void main() {
        // Input can be obtained from uniform value.
        setOutput(value);
      }
    `}return r.prototype.getCustomSetupFunc=function(t){var e=this;return function(n,o){e.valueLoc==null&&(e.valueLoc=n.getUniformLocationNoThrow(o,"value")),n.gl.uniform1f(e.valueLoc,t)}},r}(),Jp=function(r,t,e){this.variableNames=["A","indices"];var n=r.slice();n[e]=t,this.outputShape=n,this.rank=n.length;var o=_e(this.rank),i=function(a,s){var u=a.length;if(u>4)throw Error("Gather for rank "+u+" is not yet supported");if(u===1)return"int(getIndices(resRC))";for(var c=["resRC.x","resRC.y","resRC.z","resRC.w"],l=[],h=0;h<a.length;h++)h===s?l.push("int(getIndices("+c[h]+"))"):l.push(""+c[h]);return l.join()}(r,e);this.userCode=`
      void main() {
        `+o+` resRC = getOutputCoords();
        setOutput(getA(`+i+`));
      }
    `},Qp=function(r,t,e){this.sliceDim=r,this.strides=t,this.variableNames=["x","indices"],this.outputShape=e;var n=_e(t.length),o=_e(e.length),i=this.sliceDim>1?"strides[j]":"strides";this.userCode=`
        `+n+" strides = "+n+"("+this.strides+`);
         void main() {
          `+o+` coords = getOutputCoords();
          int flattenIndex = 0;
          for (int j = 0; j < `+this.sliceDim+`; j++) {
            int index = round(getIndices(coords[0], j));
            flattenIndex += index * `+i+`;
          }
          setOutput(getX(flattenIndex, coords[1]));
        }
      `};function Zp(r,t){var e=Je();return Kh(r,t,e.version+`
    precision highp float;
    `+e.attribute+` vec3 clipSpacePos;
    `+e.attribute+` vec2 uv;
    `+e.varyingVs+` vec2 resultUV;

    void main() {
      gl_Position = vec4(clipSpacePos, 1);
      resultUV = uv;
    }`)}function ed(r,t){return Qh(r,t,new Float32Array([-1,1,0,0,1,-1,-1,0,0,0,1,1,0,1,1,1,-1,0,1,0]))}function td(r,t){return Zh(r,t,new Uint16Array([0,1,2,2,1,3]))}function Dr(r,t,e,n,o,i,a){tf(e,n);var s=ef(r,t),u=r.TEXTURE_2D;return J(r,t,function(){return r.bindTexture(u,s)}),J(r,t,function(){return r.texParameteri(u,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE)}),J(r,t,function(){return r.texParameteri(u,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE)}),J(r,t,function(){return r.texParameteri(u,r.TEXTURE_MIN_FILTER,r.NEAREST)}),J(r,t,function(){return r.texParameteri(u,r.TEXTURE_MAG_FILTER,r.NEAREST)}),J(r,t,function(){return r.texImage2D(u,0,o,e,n,0,i,a,null)}),J(r,t,function(){return r.bindTexture(r.TEXTURE_2D,null)}),s}function nd(r,t,e,n,o){var i=Do(e,n);return Dr(r,t,i[0],i[1],o.internalFormatFloat,o.textureFormatFloat,r.FLOAT)}function rd(r,t,e,n,o){var i=Do(e,n);return Dr(r,t,i[0],i[1],o.internalFormatHalfFloat,o.textureFormatFloat,o.textureTypeHalfFloat)}function od(r,t,e,n,o){var i=Do(e,n);return Dr(r,t,i[0],i[1],r.RGBA,r.RGBA,r.UNSIGNED_BYTE)}function id(r,t,e,n,o){var i=Tr(e,n);return Dr(r,t,i[0],i[1],o.internalFormatPackedFloat,r.RGBA,r.FLOAT)}function ad(r,t,e,n,o){var i=Tr(e,n);return Dr(r,t,i[0],i[1],o.internalFormatPackedHalfFloat,r.RGBA,o.textureTypeHalfFloat)}function sd(r,t,e,n){return J(r,t,function(){return r.bindBuffer(r.ARRAY_BUFFER,n)}),Ss(r,t,e,"clipSpacePos",n,3,20,0)&&Ss(r,t,e,"uv",n,2,20,12)}function ud(r,t,e,n,o,i,a){var s,u,c;J(r,t,function(){return r.bindTexture(r.TEXTURE_2D,e)}),i instanceof Uint8Array?(s=new Uint8Array(n*o*4),u=r.UNSIGNED_BYTE,c=r.RGBA):(s=new Float32Array(n*o*4),u=r.FLOAT,c=a.internalFormatPackedFloat),s.set(i),J(r,t,function(){return r.texImage2D(r.TEXTURE_2D,0,c,n,o,0,r.RGBA,u,s)}),J(r,t,function(){return r.bindTexture(r.TEXTURE_2D,null)})}function cd(r,t,e,n){J(r,t,function(){return r.bindTexture(r.TEXTURE_2D,e)}),n.data instanceof Uint8Array?J(r,t,function(){return r.texImage2D(r.TEXTURE_2D,0,r.RGBA,n.width,n.height,0,r.RGBA,r.UNSIGNED_BYTE,n.data)}):J(r,t,function(){return r.texImage2D(r.TEXTURE_2D,0,r.RGBA,r.RGBA,r.UNSIGNED_BYTE,n)}),J(r,t,function(){return r.bindTexture(r.TEXTURE_2D,null)})}function ld(r,t,e,n,o){var i=r.createBuffer();J(r,t,function(){return r.bindBuffer(r.PIXEL_PACK_BUFFER,i)});var a=16*e*n;return J(r,t,function(){return r.bufferData(r.PIXEL_PACK_BUFFER,a,r.STREAM_READ)}),J(r,t,function(){return r.readPixels(0,0,n,e,r.RGBA,r.FLOAT,0)}),J(r,t,function(){return r.bindBuffer(r.PIXEL_PACK_BUFFER,null)}),i}function hd(r,t,e){var n=r,o=new Float32Array(e);return n.bindBuffer(n.PIXEL_PACK_BUFFER,t),n.getBufferSubData(n.PIXEL_PACK_BUFFER,0,o),n.bindBuffer(n.PIXEL_PACK_BUFFER,null),o}function fd(r,t,e,n,o){var i=Do(e,n),a=i[0],s=i[1],u=new Uint8Array(e*n*4);return J(r,t,function(){return r.readPixels(0,0,a,s,o.downloadTextureFormat,r.UNSIGNED_BYTE,u)}),new Float32Array(u.buffer)}function pd(r,t,e,n,o,i,a,s){var u=r,c=new Float32Array(function(l,h){var f=Tr(l,h);return f[0]*f[1]*4}(i,a));return u.bindBuffer(u.PIXEL_PACK_BUFFER,t),u.getBufferSubData(u.PIXEL_PACK_BUFFER,0,c),u.bindBuffer(u.PIXEL_PACK_BUFFER,null),c}function dd(r,t,e,n){var o=new Float32Array(e*n*4);return J(r,t,function(){return r.readPixels(0,0,n,e,r.RGBA,r.FLOAT,o)}),o}var vd=function(){function r(t){this.outputTexture=null,this.program=null,this.disposed=!1,this.vertexAttrsAreBound=!1,this.itemsToPoll=[];var e=L().getNumber("WEBGL_VERSION");t!=null?(this.gl=t,zh(e,t)):this.gl=Ht(e);var n="WEBGL_color_buffer_float";if(L().getNumber("WEBGL_VERSION")===1){if(this.textureFloatExtension=Lr(this.gl,this.debug,"OES_texture_float"),bt(this.gl,"OES_texture_half_float"))this.textureHalfFloatExtension=Lr(this.gl,this.debug,"OES_texture_half_float");else if(L().get("WEBGL_FORCE_F16_TEXTURES"))throw new Error("GL context does not support half float textures, yet the environment flag WEBGL_FORCE_F16_TEXTURES is set to true.");if(this.colorBufferFloatExtension=this.gl.getExtension(n),bt(this.gl,"EXT_color_buffer_half_float"))this.colorBufferHalfFloatExtension=Lr(this.gl,this.debug,"EXT_color_buffer_half_float");else if(L().get("WEBGL_FORCE_F16_TEXTURES"))throw new Error("GL context does not support color renderable half floats, yet the environment flag WEBGL_FORCE_F16_TEXTURES is set to true.")}else if(n="EXT_color_buffer_float",bt(this.gl,n))this.colorBufferFloatExtension=this.gl.getExtension(n);else{if(!bt(this.gl,"EXT_color_buffer_half_float"))throw new Error("GL context does not support color renderable floats");this.colorBufferHalfFloatExtension=this.gl.getExtension("EXT_color_buffer_half_float")}this.vertexBuffer=ed(this.gl,this.debug),this.indexBuffer=td(this.gl,this.debug),this.framebuffer=nf(this.gl,this.debug),this.textureConfig=ca(this.gl,this.textureHalfFloatExtension)}return Object.defineProperty(r.prototype,"debug",{get:function(){return L().getBool("DEBUG")},enumerable:!0,configurable:!0}),r.prototype.dispose=function(){var t=this;if(!this.disposed){this.program!=null&&console.warn("Disposing a GPGPUContext that still has a bound WebGLProgram. This is probably a resource leak, delete the program with GPGPUContext.deleteProgram before disposing."),this.outputTexture!=null&&console.warn("Disposing a GPGPUContext that still has a bound output matrix texture.  This is probably a resource leak, delete the output matrix texture with GPGPUContext.deleteMatrixTexture before disposing.");var e=this.gl;J(e,this.debug,function(){return e.finish()}),J(e,this.debug,function(){return e.bindFramebuffer(e.FRAMEBUFFER,null)}),J(e,this.debug,function(){return e.deleteFramebuffer(t.framebuffer)}),J(e,this.debug,function(){return e.bindBuffer(e.ARRAY_BUFFER,null)}),J(e,this.debug,function(){return e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,null)}),J(e,this.debug,function(){return e.deleteBuffer(t.indexBuffer)}),this.disposed=!0}},r.prototype.createFloat32MatrixTexture=function(t,e){return this.throwIfDisposed(),nd(this.gl,this.debug,t,e,this.textureConfig)},r.prototype.createFloat16MatrixTexture=function(t,e){return this.throwIfDisposed(),rd(this.gl,this.debug,t,e,this.textureConfig)},r.prototype.createUnsignedBytesMatrixTexture=function(t,e){return this.throwIfDisposed(),od(this.gl,this.debug,t,e,this.textureConfig)},r.prototype.uploadPixelDataToTexture=function(t,e){this.throwIfDisposed(),cd(this.gl,this.debug,t,e)},r.prototype.uploadDenseMatrixToTexture=function(t,e,n,o){this.throwIfDisposed(),ud(this.gl,this.debug,t,e,n,o,this.textureConfig)},r.prototype.createFloat16PackedMatrixTexture=function(t,e){return this.throwIfDisposed(),ad(this.gl,this.debug,t,e,this.textureConfig)},r.prototype.createPackedMatrixTexture=function(t,e){return this.throwIfDisposed(),id(this.gl,this.debug,t,e,this.textureConfig)},r.prototype.deleteMatrixTexture=function(t){var e=this;this.throwIfDisposed(),this.outputTexture===t&&(As(this.gl,this.debug,this.framebuffer),this.outputTexture=null),J(this.gl,this.debug,function(){return e.gl.deleteTexture(t)})},r.prototype.downloadByteEncodedFloatMatrixFromOutputTexture=function(t,e,n){var o=this;return this.downloadMatrixDriver(t,function(){return fd(o.gl,o.debug,e,n,o.textureConfig)})},r.prototype.downloadPackedMatrixFromBuffer=function(t,e,n,o,i,a){return pd(this.gl,t,0,0,0,i,a,this.textureConfig)},r.prototype.downloadFloat32MatrixFromBuffer=function(t,e){return hd(this.gl,t,e)},r.prototype.createBufferFromTexture=function(t,e,n){this.bindTextureToFrameBuffer(t);var o=ld(this.gl,this.debug,e,n,this.textureConfig);return this.unbindTextureToFrameBuffer(),o},r.prototype.createAndWaitForFence=function(){var t=this.createFence(this.gl);return this.pollFence(t)},r.prototype.createFence=function(t){var e,n,o=this;if(L().getBool("WEBGL_FENCE_API_ENABLED")){var i=t,a=i.fenceSync(i.SYNC_GPU_COMMANDS_COMPLETE,0);t.flush(),n=function(){var s=i.clientWaitSync(a,0,0);return s===i.ALREADY_SIGNALED||s===i.CONDITION_SATISFIED},e=a}else L().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")>0?(e=this.beginQuery(),this.endQuery(),n=function(){return o.isQueryAvailable(e,L().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION"))}):n=function(){return!0};return{query:e,isFencePassed:n}},r.prototype.downloadMatrixFromPackedTexture=function(t,e,n){var o=this;return this.downloadMatrixDriver(t,function(){return dd(o.gl,o.debug,e,n)})},r.prototype.createProgram=function(t){this.throwIfDisposed();var e=this.gl,n=Xh(e,this.debug,t),o=Zp(e,this.debug),i=Yh(e,this.debug);return J(e,this.debug,function(){return e.attachShader(i,o)}),J(e,this.debug,function(){return e.attachShader(i,n)}),Jh(e,this.debug,i),this.debug&&si(e,this.debug,i),this.vertexAttrsAreBound||(this.setProgram(i),this.vertexAttrsAreBound=sd(e,this.debug,this.program,this.vertexBuffer)),i},r.prototype.deleteProgram=function(t){var e=this;this.throwIfDisposed(),t===this.program&&(this.program=null),t!=null&&J(this.gl,this.debug,function(){return e.gl.deleteProgram(t)})},r.prototype.setProgram=function(t){var e=this;this.throwIfDisposed(),this.program=t,this.program!=null&&this.debug&&si(this.gl,this.debug,this.program),J(this.gl,this.debug,function(){return e.gl.useProgram(t)})},r.prototype.getUniformLocation=function(t,e,n){return n===void 0&&(n=!0),this.throwIfDisposed(),n?of(this.gl,this.debug,t,e):af(this.gl,t,e)},r.prototype.getAttributeLocation=function(t,e){var n=this;return this.throwIfDisposed(),J(this.gl,this.debug,function(){return n.gl.getAttribLocation(t,e)})},r.prototype.getUniformLocationNoThrow=function(t,e){return this.throwIfDisposed(),this.gl.getUniformLocation(t,e)},r.prototype.setInputMatrixTexture=function(t,e,n){this.throwIfDisposed(),this.throwIfNoProgram(),sf(this.gl,this.debug,this.program,t,e,n)},r.prototype.setOutputMatrixTexture=function(t,e,n){this.setOutputMatrixTextureDriver(t,n,e)},r.prototype.setOutputPackedMatrixTexture=function(t,e,n){this.throwIfDisposed();var o=Tr(e,n),i=o[0],a=o[1];this.setOutputMatrixTextureDriver(t,i,a)},r.prototype.setOutputMatrixWriteRegion=function(t,e,n,o){this.setOutputMatrixWriteRegionDriver(n,t,o,e)},r.prototype.setOutputPackedMatrixWriteRegion=function(t,e,n,o){throw new Error("setOutputPackedMatrixWriteRegion not implemented.")},r.prototype.debugValidate=function(){this.program!=null&&si(this.gl,this.debug,this.program),Wr(this.gl)},r.prototype.executeProgram=function(){this.throwIfDisposed(),this.throwIfNoProgram();var t=this.gl;this.debug&&this.debugValidate(),J(t,this.debug,function(){return t.drawElements(t.TRIANGLES,6,t.UNSIGNED_SHORT,0)})},r.prototype.blockUntilAllProgramsCompleted=function(){var t=this;this.throwIfDisposed(),J(this.gl,this.debug,function(){return t.gl.finish()})},r.prototype.getQueryTimerExtension=function(){return this.disjointQueryTimerExtension==null&&(this.disjointQueryTimerExtension=Lr(this.gl,this.debug,L().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")===2?"EXT_disjoint_timer_query_webgl2":"EXT_disjoint_timer_query")),this.disjointQueryTimerExtension},r.prototype.getQueryTimerExtensionWebGL2=function(){return this.getQueryTimerExtension()},r.prototype.getQueryTimerExtensionWebGL1=function(){return this.getQueryTimerExtension()},r.prototype.beginQuery=function(){if(L().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")===2){var t=this.gl,e=this.getQueryTimerExtensionWebGL2(),n=t.createQuery();return t.beginQuery(e.TIME_ELAPSED_EXT,n),n}var o=this.getQueryTimerExtensionWebGL1(),i=o.createQueryEXT();return o.beginQueryEXT(o.TIME_ELAPSED_EXT,i),i},r.prototype.endQuery=function(){if(L().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")!==2){var t=this.getQueryTimerExtensionWebGL1();t.endQueryEXT(t.TIME_ELAPSED_EXT)}else{var e=this.gl,n=this.getQueryTimerExtensionWebGL2();e.endQuery(n.TIME_ELAPSED_EXT)}},r.prototype.waitForQueryAndGetTime=function(t){return X(this,void 0,void 0,function(){var e=this;return $(this,function(n){switch(n.label){case 0:return[4,_s(function(){return e.disposed||e.isQueryAvailable(t,L().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION"))})];case 1:return n.sent(),[2,this.getQueryTime(t,L().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION"))]}})})},r.prototype.getQueryTime=function(t,e){if(e===0)return null;if(e===2){var n=this.gl;return n.getQueryParameter(t,n.QUERY_RESULT)/1e6}var o=this.getQueryTimerExtensionWebGL1();return o.getQueryObjectEXT(t,o.QUERY_RESULT_EXT)/1e6},r.prototype.isQueryAvailable=function(t,e){if(e===0)return!0;if(e===2){var n=this.gl,o=this.getQueryTimerExtensionWebGL2(),i=n.getQueryParameter(t,n.QUERY_RESULT_AVAILABLE);return this.disjoint==null&&(this.disjoint=this.gl.getParameter(o.GPU_DISJOINT_EXT)),i&&!this.disjoint}return i=(o=this.getQueryTimerExtensionWebGL1()).getQueryObjectEXT(t,o.QUERY_RESULT_AVAILABLE_EXT),this.disjoint==null&&(this.disjoint=this.gl.getParameter(o.GPU_DISJOINT_EXT)),i&&!this.disjoint},r.prototype.pollFence=function(t){var e=this;return new Promise(function(n){e.addItemToPoll(function(){return t.isFencePassed()},function(){return n()})})},r.prototype.pollItems=function(){for(var t=function(n){for(var o=0;o<n.length&&n[o]();++o);return o-1}(this.itemsToPoll.map(function(n){return n.isDoneFn})),e=0;e<=t;++e)(0,this.itemsToPoll[e].resolveFn)();this.itemsToPoll=this.itemsToPoll.slice(t+1)},r.prototype.addItemToPoll=function(t,e){var n=this;this.itemsToPoll.push({isDoneFn:t,resolveFn:e}),this.itemsToPoll.length>1||_s(function(){return n.pollItems(),n.itemsToPoll.length===0})},r.prototype.bindTextureToFrameBuffer=function(t){this.throwIfDisposed(),ui(this.gl,this.debug,t,this.framebuffer),this.debug&&Wr(this.gl)},r.prototype.unbindTextureToFrameBuffer=function(){this.outputTexture!=null?(ui(this.gl,this.debug,this.outputTexture,this.framebuffer),this.debug&&Wr(this.gl)):As(this.gl,this.debug,this.framebuffer)},r.prototype.downloadMatrixDriver=function(t,e){this.bindTextureToFrameBuffer(t);var n=e();return this.unbindTextureToFrameBuffer(),n},r.prototype.setOutputMatrixTextureDriver=function(t,e,n){this.throwIfDisposed();var o=this.gl;ui(o,this.debug,t,this.framebuffer),this.debug&&Wr(o),this.outputTexture=t,J(o,this.debug,function(){return o.viewport(0,0,e,n)}),J(o,this.debug,function(){return o.scissor(0,0,e,n)})},r.prototype.setOutputMatrixWriteRegionDriver=function(t,e,n,o){var i=this;this.throwIfDisposed(),J(this.gl,this.debug,function(){return i.gl.scissor(t,e,n,o)})},r.prototype.throwIfDisposed=function(){if(this.disposed)throw new Error("Attempted to use disposed GPGPUContext.")},r.prototype.throwIfNoProgram=function(){if(this.program==null)throw new Error("No GPU program is currently set.")},r}();function zs(r,t){if(r.length!==t.length)throw Error("Binary was compiled with "+r.length+" inputs, but was executed with "+t.length+" inputs");r.forEach(function(e,n){var o=e.logicalShape,i=t[n],a=i.shape;if(!ze(o,a))throw Error("Binary was compiled with different shapes than the current args. Shapes "+o+" and "+a+" must match");if(!e.isUniform||!i.isUniform){var s=e.texShape,u=i.isUniform?null:i.texData.texShape;if(!ze(s,u))throw Error("Binary was compiled with different texture shapes than the current args. Shape "+s+" and "+u+" must match")}})}var md=function(r,t,e){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=r;for(var n=e.filterWidth,o=e.inChannels,i=e.strideWidth,a=e.strideHeight,s=e.padInfo,u=e.outWidth,c=e.dilationWidth,l=e.dilationHeight,h=e.dataFormat,f=s.left,p=s.top,d=o*n,m=Je(),v=h==="channelsLast",g=v?0:1,x=v?1:2,b="",y=0;y<=1;y++)for(var w=0;w<=1;w++)b+=`
          blockIndex = rc.y + `+w+`;
          pos = rc.x + `+y+`;

          if(blockIndex < `+r[1]+" && pos < "+r[0]+`) {
            offsetY = int(blockIndex / (`+u+")) * "+a+" - "+p+`;
            d0 = offsetY + `+l+" * (pos / "+d+`);

            if(d0 < `+t[g]+` && d0 >= 0) {

              offsetX = int(mod(float(blockIndex), `+u+".) * "+i+". - "+f+`.);
              d1 = offsetX + `+c+" * (int(mod(float(pos), "+d+".) / "+o+`.));

              if(d1 < `+t[x]+` && d1 >= 0) {

                ch = int(mod(float(pos), `+o+`.));

                if (`+v+`) {
                  innerDims = vec2(d1, ch);
                  result[`+(2*y+w)+`] = getChannel(
                    getA(d0, int(innerDims.x),
                    int(innerDims.y)), innerDims);
                } else {
                  innerDims = vec2(d0, d1);
                  result[`+(2*y+w)+`] = getChannel(
                    getA(ch, int(innerDims.x),
                    int(innerDims.y)), innerDims);
                }
              }
            }
          }
        `;this.userCode=`
      void main() {
        ivec2 rc = getOutputCoords();

        vec4 result = vec4(0);

        int blockIndex, pos, offsetY, d0, offsetX, d1, ch;
        vec2 innerDims;

        `+b+`

        `+m.output+` = result;
      }
    `},gd=function(r,t,e,n,o){this.variableNames=["x"],this.outputShape=[];var i,a=t,s=r[3]-1;this.outputShape=r;var u="float("+e+") + float("+n+") * sum";i=o===.5?"inversesqrt("+u+")":o===1?"1.0/("+u+")":"exp(log("+u+") * float(-"+o+"));",this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int r = coords[1];
        int c = coords[2];
        int d = coords[3];
        float x = getX(b, r, c, d);
        float sum = 0.0;
        for (int j = -`+a+"; j <= "+a+`; j++) {
          int idx = d + j;
          if (idx >= 0 && idx <=  `+s+`) {
            float z = getX(b, r, c, idx);
            sum += z * z;
          }
        }
        float val = x * `+i+`;
        setOutput(val);
      }
    `},yd=function(r,t,e,n,o){this.variableNames=["inputImage","outputImage","dy"],this.outputShape=[],this.outputShape=r,this.depth=r[3],this.depthRadius=t,this.bias=e,this.alpha=n,this.beta=o,this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int r = coords[1];
        int c = coords[2];

        float result = 0.0;
        for (int d = 0; d < `+this.depth+`; ++d) {
          int depthBegin = int(max(0.0, float(d - `+t+`)));
          int depthEnd = int(min(float(`+this.depth+`),
              float(d + `+t+` + 1)));

          const int MIN_DEPTH_BEGIN = 0;
          const int MAX_DEPTH_END = `+this.depth+`;

          float norm = 0.0;
          for (int k = MIN_DEPTH_BEGIN; k < MAX_DEPTH_END; ++k) {
            if (k < depthBegin){
              continue;
            }
            else if (k >= depthBegin && k < depthEnd) {
              norm += getInputImage(b, r, c, k) * getInputImage(b, r, c, k);
            }
            else {
              break;
            }
          }

          norm = float(`+n+") * norm + float("+e+`);

          for(int k = MIN_DEPTH_BEGIN; k < MAX_DEPTH_END; ++k){
            if (k < depthBegin){
              continue;
            }
            else if (k >= depthBegin && k < depthEnd){
              float dyi = -2.0 * float(`+n+`)
                * float(`+o+`)
                * getInputImage(b ,r ,c, k) * getOutputImage(b, r, c, d)
                / norm;
              if (k == d) {
                dyi += pow(norm, -1.0 * `+o+`);
              }
              if (k == coords[3]) {
                dyi *= getDy(b, r, c, d);
                result += dyi;
              }
            }
            else {
              break;
            }
          }
      }
      setOutput(result);
      }
    `},xd=function(r,t,e,n,o){this.variableNames=["x"],this.outputShape=[],this.packedInputs=!0,this.packedOutput=!0;var i,a=t,s=r[3]-1;this.outputShape=r;var u="float("+e+") + float("+n+") * sum";i=o===.5?"inversesqrt("+u+")":o===1?"1.0/("+u+")":"exp(log("+u+") * float(-"+o+"));",this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords.x;
        int r = coords.y;
        int c = coords.z;
        int d = coords.w;

        bool hasNextCol = d < `+this.outputShape[3]+`;
        bool hasNextRow = c < `+this.outputShape[2]+`;

        vec4 sum = vec4(0.);
        vec4 xFragAtOutputCoords = getX(b, r, c, d);

        vec4 xAtOutputCoords = vec4(
          getChannel(xFragAtOutputCoords, vec2(c, d)),
          hasNextCol ?
            getChannel(xFragAtOutputCoords, vec2(c, d + 1)) : 0.0,
          hasNextRow ?
            getChannel(xFragAtOutputCoords , vec2(c + 1, d)) : 0.0,
          (hasNextRow && hasNextCol) ?
            getChannel(xFragAtOutputCoords, vec2(c + 1, d + 1)) : 0.0
        );

        int firstChannel = d - `+a+`;
        vec2 cache = vec2(0.);
        if(firstChannel >= 0){
          vec4 firstChannelFrag = getX(b, r, c, firstChannel);
          cache.x = getChannel(firstChannelFrag, vec2(c, firstChannel));
            if(hasNextRow){
              cache.y = getChannel(firstChannelFrag, vec2(c + 1, firstChannel));
            }
        }

        ivec2 depth = ivec2(d, d + 1);
        for (int j = - `+a+"; j <= "+a+`; j++) {
          ivec2 idx = depth + j;
          bvec2 aboveLowerBound = greaterThanEqual(idx, ivec2(0));
          bvec2 belowUpperBound = lessThanEqual(idx, ivec2(`+s+`));

          bool depthInRange = aboveLowerBound.x && belowUpperBound.x;
          bool depthPlusOneInRange = aboveLowerBound.y && belowUpperBound.y;

          if(depthInRange || depthPlusOneInRange){
            vec4 z = vec4(0.);
            vec4 xFragAtCurrentDepth;
            z.xz = cache.xy;
            if(depthPlusOneInRange && hasNextCol){
              xFragAtCurrentDepth = idx.y != d ?
                getX(b, r, c, idx.y) : xFragAtOutputCoords;
              z.y = getChannel(xFragAtCurrentDepth, vec2(c, idx.y));
              if(hasNextRow){
                z.w = getChannel(xFragAtCurrentDepth, vec2(c + 1, idx.y));
              }
            }
            cache.xy = z.yw;
            sum += z * z;
          }
        }
        vec4 result = xAtOutputCoords * `+i+`;
        setOutput(result);
      }
    `},bd=function(r){this.variableNames=["dy","maxPos"],this.outputShape=r.inShape;var t=r.strideHeight,e=r.strideWidth,n=r.dilationHeight,o=r.effectiveFilterHeight,i=r.effectiveFilterWidth,a=o-1-r.padInfo.top,s=i-1-r.padInfo.left,u=o*i-1;this.userCode=`
      const ivec2 pads = ivec2(`+a+", "+s+`);

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];

        ivec2 dyRCCorner = coords.yz - pads;
        int dyRCorner = dyRCCorner.x;
        int dyCCorner = dyRCCorner.y;

        // Convolve dy(?, ?, d) with pos mask(:, :, d) to get dx(xR, xC, d).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;
        for (int wR = 0; wR < `+o+`;
          wR += `+n+`) {
          float dyR = float(dyRCorner + wR) / `+t+`.0;

          if (dyR < 0.0 || dyR >= `+r.outHeight+`.0 || fract(dyR) > 0.0) {
            continue;
          }
          int idyR = int(dyR);

          for (int wC = 0; wC < `+i+`; wC++) {
            float dyC = float(dyCCorner + wC) / `+e+`.0;

            if (dyC < 0.0 || dyC >= `+r.outWidth+`.0 ||
                fract(dyC) > 0.0) {
              continue;
            }
            int idyC = int(dyC);

            float dyValue = getDy(b, idyR, idyC, d);
            int maxPosValue = `+u+` - int(getMaxPos(b, idyR, idyC, d));

            // Get the current value, check it against the value from the
            // position matrix.
            int curPosValue = wR * `+i+` + wC;
            float mask = float(maxPosValue == curPosValue ? 1.0 : 0.0);

            dotProd += dyValue * mask;
          }
        }
        setOutput(dotProd);
      }
    `},wd=function(r){this.variableNames=["dy","maxPos"],this.outputShape=r.inShape;var t=r.strideDepth,e=r.strideHeight,n=r.strideWidth,o=r.dilationDepth,i=r.dilationHeight,a=r.dilationWidth,s=r.effectiveFilterDepth,u=r.effectiveFilterHeight,c=r.effectiveFilterWidth,l=s-1-r.padInfo.front,h=u-1-r.padInfo.top,f=c-1-r.padInfo.left,p=s*u*c-1;this.userCode=`
      const ivec3 pads = ivec3(`+l+", "+h+", "+f+`);

      void main() {
        ivec5 coords = getOutputCoords();
        int batch = coords.x;
        int ch = coords.u;

        ivec3 dyCorner = ivec3(coords.y, coords.z, coords.w) - pads;
        int dyDCorner = dyCorner.x;
        int dyRCorner = dyCorner.y;
        int dyCCorner = dyCorner.z;

        // Convolve dy(?, ?, ?, ch) with pos mask(:, :, :, d) to get
        // dx(xD, xR, xC, ch).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;

        for (int wD = 0; wD < `+s+`;
           wD += `+o+`) {
          float dyD = float(dyDCorner + wD) / `+t+`.0;

          if (dyD < 0.0 || dyD >= `+r.outDepth+`.0 || fract(dyD) > 0.0) {
            continue;
          }
          int idyD = int(dyD);

          for (int wR = 0; wR < `+u+`;
              wR += `+i+`) {
            float dyR = float(dyRCorner + wR) / `+e+`.0;

            if (dyR < 0.0 || dyR >= `+r.outHeight+`.0 ||
                fract(dyR) > 0.0) {
              continue;
            }
            int idyR = int(dyR);

            for (int wC = 0; wC < `+c+`;
                wC += `+a+`) {
              float dyC = float(dyCCorner + wC) / `+n+`.0;

              if (dyC < 0.0 || dyC >= `+r.outWidth+`.0 ||
                  fract(dyC) > 0.0) {
                continue;
              }
              int idyC = int(dyC);

              float dyValue = getDy(batch, idyD, idyR, idyC, ch);
              int maxPosValue = `+p+` -
                  int(getMaxPos(batch, idyD, idyR, idyC, ch));

              // Get the current value, check it against the value from the
              // position matrix.
              int curPosValue =
                  wD * `+u+" * "+c+` +
                  wR * `+c+` + wC;
              float mask = float(maxPosValue == curPosValue ? 1.0 : 0.0);

              dotProd += dyValue * mask;
            }
          }
        }
        setOutput(dotProd);
      }
    `},pi=function(r,t,e,n,o,i,a){e===void 0&&(e=!1),n===void 0&&(n=!1),o===void 0&&(o=!1),i===void 0&&(i=null),a===void 0&&(a=!1),this.variableNames=["matrixA","matrixB"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=t;var s=e?r[1]:r[2],u=Math.ceil(s/2),c=e?"i * 2, rc.y":"rc.y, i * 2",l=n?"rc.z, i * 2":"i * 2, rc.z",h=e?["a.xxyy","a.zzww"]:["a.xxzz","a.yyww"],f=n?["b.xzxz","b.ywyw"]:["b.xyxy","b.zwzw"],p="",d="";i&&(p=a?`vec4 activation(vec4 a) {
          vec4 b = getPreluActivationWeightsAtOutCoords();
          `+i+`
        }`:`vec4 activation(vec4 x) {
          `+i+`
        }`,d="result = activation(result);");var m=o?"result += getBiasAtOutCoords();":"";o&&this.variableNames.push("bias"),a&&this.variableNames.push("preluActivationWeights"),this.userCode=`
      `+p+`

      const float sharedDimension = `+u+`.0;

      vec4 dot2x2ARowBCol(ivec3 rc) {
        vec4 result = vec4(0);
        for (int i = 0; i < `+u+`; i++) {
          vec4 a = getMatrixA(rc.x, `+c+`);
          vec4 b = getMatrixB(rc.x, `+l+`);

          // These swizzled products need to be separately added.
          // See: https://github.com/tensorflow/tfjs/issues/1735
          result += (`+h[0]+" * "+f[0]+`);
          result += (`+h[1]+" * "+f[1]+`);
        }
        return result;
      }

      void main() {
        ivec3 rc = getOutputCoords();
        vec4 result = dot2x2ARowBCol(rc);

        `+m+`

        `+d+`

        setOutput(result);
      }
    `},_d=function(){function r(t,e,n){this.variableNames=["probs"],this.outputShape=[t,n],this.userCode=`
      uniform float seed;

      void main() {
        ivec2 coords = getOutputCoords();
        int batch = coords[0];

        float r = random(seed);
        float cdf = 0.0;

        for (int i = 0; i < `+(e-1)+`; i++) {
          cdf += getProbs(batch, i);

          if (r < cdf) {
            setOutput(float(i));
            return;
          }
        }

        // If no other event happened, last event happened.
        setOutput(float(`+(e-1)+`));
      }
    `}return r.prototype.getCustomSetupFunc=function(t){var e=this;return function(n,o){e.seedLoc==null&&(e.seedLoc=n.getUniformLocation(o,"seed")),n.gl.uniform1f(e.seedLoc,t)}},r}(),Cd=function(r,t,e,n){this.variableNames=["indices"],this.outputShape=[r,t],this.userCode=`
      void main() {
        ivec2 coords = getOutputCoords();
        int index = round(getIndices(coords.x));
        setOutput(mix(float(`+n+"), float("+e+`),
                      float(index == coords.y)));
      }
    `},Ed=function(r){this.variableNames=["A"],this.packedInputs=!1,this.packedOutput=!0,this.outputShape=r;var t=r.length;if(t===0)this.userCode=`
        void main() {
          setOutput(vec4(getA(), 0., 0., 0.));
        }
      `;else{var e=rt("rc",t),n=_e(t),o=function(s,u,c){if(s===1)return"rc > "+u[0];for(var l="",h=s-2;h<s;h++)l+=c[h]+" >= "+u[h],h<s-1&&(l+="||");return l}(t,r,e),i=function(s,u,c,l){if(s===1)return"";var h=l.slice(-2);return`
    int r = `+h[0]+`;
    int c = `+h[1]+`;
    int rp1 = r + 1;
    int cp1 = c + 1;

    bool cEdge = cp1 >= `+u+`;
    bool rEdge = rp1 >= `+c+`;
  `}(t,r[r.length-1],r[r.length-2],e),a=function(s,u){var c=s.length,l=function(h,f){for(var p=[],d=0;d<=1;d++)for(var m=0;m<=1;m++){for(var v=(d===0?"r":"rp1")+", "+(m===0?"c":"cp1"),g=2;g<h;g++)v=f[f.length-1-g]+","+v;p.push(v)}return p}(c,u);return c===1?`getA(rc),
            rc + 1 >= `+s[0]+` ? 0. : getA(rc + 1),
            0, 0`:"getA("+l[0]+`),
          cEdge ? 0. : getA(`+l[1]+`),
          rEdge ? 0. : getA(`+l[2]+`),
          rEdge || cEdge ? 0. : getA(`+l[3]+")"}(r,e);this.userCode=`
        void main() {
          `+n+` rc = getOutputCoords();

          if(`+o+`) {
            setOutput(vec4(0));
          } else {
            `+i+`

            setOutput(vec4(`+a+`));
          }
        }
      `}},Rd=function(r,t,e){this.variableNames=["x"],this.outputShape=t.map(function(u,c){return u[0]+r[c]+u[1]});var n=r.length,o=_e(n),i=t.map(function(u){return u[0]}).join(","),a=t.map(function(u,c){return u[0]+r[c]}).join(","),s=["coords[0]","coords[1]","coords[2]","coords[3]"].slice(0,n);this.userCode=n!==1?`
      `+o+" start = "+o+"("+i+`);
      `+o+" end = "+o+"("+a+`);

      void main() {
        `+o+` outC = getOutputCoords();
        if (any(lessThan(outC, start)) || any(greaterThanEqual(outC, end))) {
          setOutput(float(`+e+`));
        } else {
          `+o+` coords = outC - start;
          setOutput(getX(`+s+`));
        }
      }
    `:`
        int start = `+i+`;
        int end = `+a+`;

        void main() {
          int outC = getOutputCoords();
          if (outC < start || outC >= end) {
            setOutput(float(`+e+`));
          } else {
            setOutput(getX(outC - start));
          }
        }
      `},kd=function(r,t,e){this.variableNames=["x"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=t.map(function(v,g){return v[0]+r[g]+v[1]});for(var n=r.length,o=_e(n),i=t.map(function(v){return v[0]}).join(","),a=t.map(function(v,g){return v[0]+r[g]}).join(","),s=rt("rc",n),u=rt("source",n),c=s[n-1]+" < "+this.outputShape[n-1],l=n===1?"source":"vec2("+u.slice(-2).join()+")",h=[o+" rc = outputLoc;",s[n-1]+` += 1;
       if(`+c+`) {
      `,n===1?"":`}
       rc = outputLoc;
       `+s[n-2]+` += 1;
       if(`+s[n-2]+" < "+this.outputShape[n-2]+") {",n===1?"":"  "+s[n-1]+` += 1;
         if(`+c+") {"],f=n===1?"rc < start || rc >= end":"any(lessThan(rc, start)) || any(greaterThanEqual(rc, end))",p="",d=0,m=n===1?2:4;d<m;d++)p+=`
        `+h[d]+`
        if (`+f+`) {
          result[`+d+"] = float("+e+`);
        } else {
          `+o+` source = rc - start;
          result[`+d+"] = getChannel(getX("+u.join()+"), "+l+`);
        }
      `;p+=n===1?"} ":"}}",this.userCode=`
      const `+o+" start = "+o+"("+i+`);
      const `+o+" end = "+o+"("+a+`);

      void main() {
        `+o+` outputLoc = getOutputCoords();
        vec4 result = vec4(0.);
        `+p+`
        setOutput(result);
      }
    `},di=function(r,t,e){if(this.variableNames=["x"],t==="avg"&&e)throw new Error("Cannot compute positions for average pool.");var n=r.filterWidth,o=r.strideHeight,i=r.strideWidth,a=r.dilationHeight,s=r.dilationWidth,u=r.effectiveFilterHeight,c=r.effectiveFilterWidth,l=r.padInfo.top,h=r.padInfo.left;this.outputShape=r.outShape;var f=t==="avg",p="0.0";if(f||(p="-1.0 / 1e-20"),e)this.userCode=`
        const ivec2 strides = ivec2(`+o+", "+i+`);
        const ivec2 pads = ivec2(`+l+", "+h+`);

        void main() {
          ivec4 coords = getOutputCoords();
          int batch = coords[0];
          int d = coords[3];

          ivec2 xRCCorner = coords.yz * strides - pads;
          int xRCorner = xRCCorner.x;
          int xCCorner = xRCCorner.y;

          // max/min x(?, ?, d) to get y(yR, yC, d).
          // ? = to be determined
          float minMaxValue = 0.0;
          float minMaxValueFound = 0.0;
          int minMaxPosition = 0;
          float avgValue = 0.0;

          for (int wR = 0; wR < `+u+`;
              wR += `+a+`) {
            int xR = xRCorner + wR;

            if (xR < 0 || xR >= `+r.inHeight+`) {
              continue;
            }

            for (int wC = 0; wC < `+c+`;
                wC += `+s+`) {
              int xC = xCCorner + wC;

              if (xC < 0 || xC >= `+r.inWidth+`) {
                continue;
              }

              float value = getX(batch, xR, xC, d);

              // If a min / max value has already been found, use it. If not,
              // use the current value.
              float currMinMaxValue = mix(
                  value, minMaxValue, minMaxValueFound);
              if (value >= currMinMaxValue) {
                minMaxValue = value;
                minMaxValueFound = 1.0;
                minMaxPosition = wR * `+c+` + wC;
              }
            }
          }
          setOutput(float(minMaxPosition));
        }
      `;else{var d=t+"("+t+"("+t+"(minMaxValue[0], minMaxValue[1]), minMaxValue[2]), minMaxValue[3])";t==="avg"&&(d="avgValue / count");var m=4*Math.floor(n/4),v=n%4,g=`
      if (`+f+`) {
        avgValue += dot(values, ones);
      } else {
        minMaxValue = max(values, minMaxValue);
      }
    `;this.userCode=`
      const ivec2 strides = ivec2(`+o+", "+i+`);
      const ivec2 pads = ivec2(`+l+", "+h+`);
      const float initializationValue = `+p+`;
      const vec4 ones = vec4(1.0, 1.0, 1.0, 1.0);

      float count = 0.0;

      float getValue(int batch, int xR, int xC, int d) {
        if (xC < 0 || xC >= `+r.inWidth+`) {
          return initializationValue;
        }
        count += 1.0;
        return getX(batch, xR, xC, d);
      }

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords[0];
        int d = coords[3];

        ivec2 xRCCorner = coords.yz * strides - pads;
        int xRCorner = xRCCorner.x;
        int xCCorner = xRCCorner.y;

        // max/min x(?, ?, d) to get y(yR, yC, d).
        // ? = to be determined
        vec4 minMaxValue = vec4(`+p+`);
        float avgValue = 0.0;
        count = 0.0;

        for (int wR = 0; wR < `+u+`;
            wR += `+a+`) {
          int xR = xRCorner + wR;

          if (xR < 0 || xR >= `+r.inHeight+`) {
            continue;
          }

          for (int wC = 0; wC < `+m+`; wC += 4) {
            int xC = xCCorner + wC * `+s+`;

            vec4 values = vec4(
              getValue(batch, xR, xC, d),
              getValue(batch, xR, xC + `+s+`, d),
              getValue(batch, xR, xC + 2 * `+s+`, d),
              getValue(batch, xR, xC + 3 * `+s+`, d)
            );

            `+g+`
          }

          int xC = xCCorner + `+m+`;
          if (`+(v===1)+`) {
            vec4 values = vec4(
              getValue(batch, xR, xC, d),
              initializationValue,
              initializationValue,
              initializationValue
            );

            `+g+`
          } else if (`+(v===2)+`) {
            vec4 values = vec4(
              getValue(batch, xR, xC, d),
              getValue(batch, xR, xC + `+s+`, d),
              initializationValue,
              initializationValue
            );

            `+g+`
          } else if (`+(v===3)+`) {
            vec4 values = vec4(
              getValue(batch, xR, xC, d),
              getValue(batch, xR, xC + `+s+`, d),
              getValue(batch, xR, xC + 2 * `+s+`, d),
              initializationValue
            );

            `+g+`
          }
        }
        setOutput(`+d+`);
      }
    `}},vi=function(r,t,e){if(this.variableNames=["x"],t==="avg"&&e)throw new Error("Cannot compute positions for average pool.");var n=r.filterWidth,o=r.strideDepth,i=r.strideHeight,a=r.strideWidth,s=r.dilationDepth,u=r.dilationHeight,c=r.dilationWidth,l=r.effectiveFilterDepth,h=r.effectiveFilterHeight,f=r.effectiveFilterWidth,p=r.padInfo.front,d=r.padInfo.top,m=r.padInfo.left;this.outputShape=r.outShape;var v=t==="avg",g="0.0";if(v||(g="-1.0 / 1e-20"),e)this.userCode=`
        const ivec3 strides =
            ivec3(`+o+", "+i+", "+a+`);
        const ivec3 pads = ivec3(`+p+", "+d+", "+m+`);

        void main() {
          ivec5 coords = getOutputCoords();
          int batch = coords.x;
          int ch = coords.u;

          ivec3 xCorner = ivec3(coords.y, coords.z, coords.w) * strides - pads;
          int xDCorner = xCorner.x;
          int xRCorner = xCorner.y;
          int xCCorner = xCorner.z;

          // max/min x(?, ?, ?, ch) to get y(yD, yR, yC, ch).
          // ? = to be determined
          float minMaxValue = 0.0;
          float minMaxValueFound = 0.0;
          int minMaxPosition = 0;

          for (int wD = 0; wD < `+l+`;
              wD += `+s+`) {
            int xD = xDCorner + wD;

            if (xD < 0 || xD >= `+r.inDepth+`) {
              continue;
            }

            for (int wR = 0; wR < `+h+`;
                wR += `+u+`) {
              int xR = xRCorner + wR;

              if (xR < 0 || xR >= `+r.inHeight+`) {
                continue;
              }

              for (int wC = 0; wC < `+f+`;
                  wC += `+c+`) {
                int xC = xCCorner + wC;

                if (xC < 0 || xC >= `+r.inWidth+`) {
                  continue;
                }

                float value = getX(batch, xD, xR, xC, ch);

                // If a min / max value has already been found, use it. If not,
                // use the current value.
                float currMinMaxValue = mix(
                    value, minMaxValue, minMaxValueFound);
                if (value >= currMinMaxValue) {
                  minMaxValue = value;
                  minMaxValueFound = 1.0;
                  minMaxPosition =
                      wD * `+h+" * "+f+` +
                      wR * `+f+` + wC;;
                }
              }
            }
          }
          setOutput(float(minMaxPosition));
        }
      `;else{var x=t+"("+t+"("+t+"(minMaxValue[0], minMaxValue[1]), minMaxValue[2]), minMaxValue[3])";t==="avg"&&(x="avgValue / count");var b=4*Math.floor(n/4),y=n%4,w=`
      if (`+v+`) {
        avgValue += dot(values, ones);
      } else {
        minMaxValue = max(values, minMaxValue);
      }
    `;this.userCode=`
      const ivec3 strides =
        ivec3(`+o+", "+i+", "+a+`);
      const ivec3 pads = ivec3(`+p+", "+d+", "+m+`);
      const float initializationValue = `+g+`;
      const vec4 ones = vec4(1.0, 1.0, 1.0, 1.0);

      float count = 0.0;

      float getValue(int batch, int xD, int xR, int xC, int ch) {
        if (xC < 0 || xC >= `+r.inWidth+`) {
          return initializationValue;
        }
        count += 1.0;
        return getX(batch, xD, xR, xC, ch);
      }

      void main() {
        ivec5 coords = getOutputCoords();
        int batch = coords.x;
        int ch = coords.u;

        ivec3 xCorner = ivec3(coords.y, coords.z, coords.w) * strides - pads;
        int xDCorner = xCorner.x;
        int xRCorner = xCorner.y;
        int xCCorner = xCorner.z;

        // max/min x(?, ?, ?, d) to get y(yD, yR, yC, ch).
        // ? = to be determined
        vec4 minMaxValue = vec4(`+g+`);
        float avgValue = 0.0;
        count = 0.0;

        for (int wD = 0; wD < `+l+`;
            wD += `+s+`) {
          int xD = xDCorner + wD;

          if (xD < 0 || xD >= `+r.inDepth+`) {
            continue;
          }

          for (int wR = 0; wR < `+h+`;
            wR += `+u+`) {
            int xR = xRCorner + wR;

            if (xR < 0 || xR >= `+r.inHeight+`) {
              continue;
            }

            for (int wC = 0; wC < `+b+`; wC += 4) {
              int xC = xCCorner + wC * `+c+`;

              vec4 values = vec4(
                getValue(batch, xD, xR, xC, ch),
                getValue(batch, xD, xR, xC + `+c+`, ch),
                getValue(batch, xD, xR, xC + 2 * `+c+`, ch),
                getValue(batch, xD, xR, xC + 3 * `+c+`, ch)
              );

              `+w+`
            }

            int xC = xCCorner + `+b+`;
            if (`+(y===1)+`) {
              vec4 values = vec4(
                getValue(batch, xD, xR, xC, ch),
                initializationValue,
                initializationValue,
                initializationValue
              );

              `+w+`
            } else if (`+(y===2)+`) {
              vec4 values = vec4(
                getValue(batch, xD, xR, xC, ch),
                getValue(batch, xD, xR, xC + `+c+`, ch),
                initializationValue,
                initializationValue
              );

              `+w+`
            } else if (`+(y===3)+`) {
              vec4 values = vec4(
                getValue(batch, xD, xR, xC, ch),
                getValue(batch, xD, xR, xC + `+c+`, ch),
                getValue(batch, xD, xR, xC + 2 * `+c+`, ch),
                initializationValue
              );

              `+w+`
            }
          }
          setOutput(`+x+`);
        }
      }
    `}},Id=function(r,t){this.variableNames=["x"];var e=r.windowSize,n=r.batchSize,o=r.inSize,i=Math.ceil(o/e);this.outputShape=[n,i];var a="0.0",s="";t==="prod"?a="1.0":t==="min"?(a="1.0 / 1e-20",s="min"):t==="max"&&(a="-1.0 / 1e-20",s="max");var u=t+"("+t+"("+t+"(minMaxValue[0], minMaxValue[1]), minMaxValue[2]), minMaxValue[3])";t==="sum"?u="sumValue":t==="prod"?u="prodValue":t==="all"?u="allValue":t==="any"&&(u="anyValue");var c=4*Math.floor(e/4),l=e%4,h=`
      if (`+(t==="sum")+`) {
        sumValue += dot(values, ones);
      } else if (`+(t==="prod")+`) {
        vec2 tmp = vec2(values[0], values[1]) * vec2(values[2], values[3]);
        prodValue *= tmp[0] * tmp[1];
      } else {
        minMaxValue = `+s+`(values, minMaxValue);
      }
    `,f="vec4";t==="all"?(a="1.0",h=`
        bool reducedAllValue = all(values);
        float floatedReducedAllValue = float(reducedAllValue);
        allValue = float(allValue >= 1.0 && floatedReducedAllValue >= 1.0);
      `,f="bvec4"):t==="any"&&(a="0.0",h=`
        bool reducedAnyValue = any(values);
        float floatedReducedAnyValue = float(reducedAnyValue);
        anyValue = float(anyValue >= 1.0 || floatedReducedAnyValue >= 1.0);
      `,f="bvec4");var p="";o%e>0&&(p=`
        if (inIdx < 0 || inIdx >= `+o+`) {
          return initializationValue;
        }
      `),this.userCode=`
      const float initializationValue = `+a+`;
      const vec4 ones = vec4(1.0, 1.0, 1.0, 1.0);

      float getValue(int batch, int inIdx) {
        `+p+`
        return getX(batch, inIdx);
      }

      void main() {
        ivec2 coords = getOutputCoords();
        int batch = coords[0];
        int outIdx = coords[1];
        int inOffset = outIdx * `+e+`;

        vec4 minMaxValue = vec4(`+a+`);
        float prodValue = 1.0;
        float sumValue = 0.0;
        float allValue = 1.0;
        float anyValue = 0.0;

        for (int i = 0; i < `+c+`; i += 4) {
          int inIdx = inOffset + i;
          `+f+" values = "+f+`(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            getValue(batch, inIdx + 2),
            getValue(batch, inIdx + 3)
          );

          `+h+`
        }

        int inIdx = inOffset + `+c+`;
        if (`+(l===1)+`) {
          `+f+" values = "+f+`(
            getValue(batch, inIdx),
            initializationValue,
            initializationValue,
            initializationValue
          );

          `+h+`
        } else if (`+(l===2)+`) {
          `+f+" values = "+f+`(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            initializationValue,
            initializationValue
          );

          `+h+`
        } else if (`+(l===3)+`) {
          `+f+" values = "+f+`(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            getValue(batch, inIdx + 2),
            initializationValue
          );

          `+h+`
        }
        setOutput(`+u+`);
      }
    `},Sd=function(r,t){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=r;for(var e="",n=0;n<4;n++){var o="thisRC = rc;";n%2==1&&(o+="thisRC.z += 1;"),n>1&&(o+="thisRC.y += 1;"),e+=`
        `+o+`
        `+(n>0?"if(thisRC.y < rows && thisRC.z < cols){":"")+`
          int flatIndex = getFlatIndex(thisRC);

          ivec3 inputRC = inputCoordsFromReshapedOutCoords(flatIndex);
          vec2 inputRCInnerDims = vec2(float(inputRC.y),float(inputRC.z));

          result[`+n+`] =
            getChannel(getA(inputRC.x, inputRC.y, inputRC.z), inputRCInnerDims);
        `+(n>0?"}":"")+`
      `}this.userCode=`
      
    ivec3 inputCoordsFromReshapedOutCoords(int index) {
      `+In(["r","c","d"],t)+`
      return ivec3(r, c, d);
    }
  
      `+xa(r)+`

      void main() {
        ivec3 rc = getOutputCoords();

        vec4 result = vec4(0.);

        ivec3 thisRC;
        int rows = `+r[1]+`;
        int cols = `+r[2]+`;

        `+e+`

        setOutput(result);
      }
    `},Ad=function(r,t,e){this.variableNames=["dy"],this.outputShape=[],this.outputShape=t.shape;var n=t.shape,o=n[1],i=n[2],a=r.shape,s=a[1],u=a[2],c=[e&&s>1?o-1:o,e&&u>1?i-1:i],l=[e&&s>1?s-1:s,e&&u>1?u-1:u],h=c[0]/l[0],f=c[1]/l[1],p=1/h,d=1/f,m=2*Math.ceil(p)+2,v=2*Math.ceil(d)+2;this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        int r = coords[1];
        int c = coords[2];

        float accumulator = 0.0;

        const float heightScale = float(`+h+`);
        const float widthScale = float(`+f+`);

        const float invHeightScale = float(`+p+`);
        const float invWidthScale = float(`+d+`);

        const int winHeight = int(`+m+`);
        const int winWidth = int(`+v+`);

        // Compute bounds for where in dy we will look
        float startRLerp = floor(float(r) * invHeightScale);
        int startDyR = int(startRLerp - float(winHeight / 2));

        float startCLerp = floor(float(c) * invWidthScale);
        int startDyC = int(startCLerp - float(winWidth / 2));

        // Loop over dy
        for (int dyROffset = 0; dyROffset < winHeight; dyROffset++) {
          int dyR = dyROffset + startDyR;

          // Guard against the window exceeding the bounds of dy
          if (dyR < 0 || dyR >= `+s+`) {
            continue;
          }

          for (int dyCOffset = 0; dyCOffset < winWidth; dyCOffset++) {
            int dyC = dyCOffset + startDyC;

            // Guard against the window exceeding the bounds of dy
            if (dyC < 0 || dyC >= `+u+`) {
              continue;
            }

            float dxR = float(dyR) * heightScale;
            int topDxRIndex = int(floor(dxR));
            int bottomDxRIndex = int(min(ceil(dxR), `+(o-1)+`.0));
            float dxRLerp = dxR - float(topDxRIndex);
            float inverseDxRLerp = 1.0 - dxRLerp;

            float dxC = float(dyC) * widthScale;
            int leftDxCIndex = int(floor(dxC));
            int rightDxCIndex = int(min(ceil(dxC), `+(i-1)+`.0));
            float dxCLerp = dxC - float(leftDxCIndex);
            float inverseDxCLerp = 1.0 - dxCLerp;

            if (r == topDxRIndex && c == leftDxCIndex) {
              // topLeft
              accumulator +=
                getDy(b, dyR, dyC, d) * inverseDxRLerp * inverseDxCLerp;
            }

            if (r == topDxRIndex && c == rightDxCIndex) {
              // topRight
              accumulator += getDy(b, dyR, dyC, d) * inverseDxRLerp * dxCLerp;
            }

            if (r == bottomDxRIndex && c == leftDxCIndex) {
              // bottomLeft
              accumulator += getDy(b, dyR, dyC, d) * dxRLerp * inverseDxCLerp;
            }

            if (r == bottomDxRIndex && c == rightDxCIndex) {
              // bottomRight
              accumulator += getDy(b, dyR, dyC, d) * dxRLerp * dxCLerp;
            }
          }
        }
        // End loop over dy

        setOutput(accumulator);
      }
    `},Td=function(r,t,e,n){this.variableNames=["A"],this.outputShape=[];var o=r[0],i=r[1],a=r[2],s=r[3];this.outputShape=[o,t,e,s];var u=[n&&t>1?i-1:i,n&&e>1?a-1:a],c=[n&&t>1?t-1:t,n&&e>1?e-1:e];this.userCode=`
      const vec2 effectiveInputOverOutputRatioRC = vec2(
          `+u[0]/c[0]+`,
          `+u[1]/c[1]+`);
      const vec2 inputShapeRC = vec2(`+i+".0, "+a+`.0);

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        ivec2 yRC = coords.yz;

        // Fractional source index.
        vec2 sourceFracIndexRC = vec2(yRC) * effectiveInputOverOutputRatioRC;

        // Compute the four integer indices.
        ivec2 sourceFloorRC = ivec2(sourceFracIndexRC);
        ivec2 sourceCeilRC = ivec2(
          min(inputShapeRC - 1.0, ceil(sourceFracIndexRC)));

        float topLeft = getA(b, sourceFloorRC.x, sourceFloorRC.y, d);
        float bottomLeft = getA(b, sourceCeilRC.x, sourceFloorRC.y, d);
        float topRight = getA(b, sourceFloorRC.x, sourceCeilRC.y, d);
        float bottomRight = getA(b, sourceCeilRC.x, sourceCeilRC.y, d);

        vec2 fracRC = sourceFracIndexRC - vec2(sourceFloorRC);

        float top = topLeft + (topRight - topLeft) * fracRC.y;
        float bottom = bottomLeft + (bottomRight - bottomLeft) * fracRC.y;
        float newValue = top + (bottom - top) * fracRC.x;

        setOutput(newValue);
      }
    `},Dd=function(r,t,e,n){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=[];var o=r[0],i=r[1],a=r[2],s=r[3];this.outputShape=[o,t,e,s];var u=[n&&t>1?i-1:i,n&&e>1?a-1:a],c=[n&&t>1?t-1:t,n&&e>1?e-1:e];this.userCode=`
      const vec3 effectiveInputOverOutputRatioRC = vec3(
          `+u[0]/c[0]+`,
          `+u[1]/c[1]+`,
          `+u[1]/c[1]+`);
      const vec3 inputShapeRC = vec3(`+i+".0, "+a+`.0,
                                     `+a+`.0);

      float getAValue(int b, int r, int c, int d) {
        return getChannel(getA(b, r, c, d), vec2(c, d));
      }

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        // Calculate values for next column in yRC.z.
        ivec3 yRC = coords.yzz + ivec3(0, 0, 1);

        // Fractional source index.
        vec3 sourceFracIndexRC = vec3(yRC) * effectiveInputOverOutputRatioRC;

        // Compute the four integer indices.
        ivec3 sourceFloorRC = ivec3(sourceFracIndexRC);
        ivec3 sourceCeilRC = ivec3(
          min(inputShapeRC - 1.0, ceil(sourceFracIndexRC)));

        // Should we calculate next column and row elements in 2x2 packed cell.
        bool hasNextCol = d < `+(s-1)+`;
        bool hasNextRow = coords.z < `+(e-1)+`;

        // In parallel, construct four corners for all four components in
        // packed 2x2 cell.
        vec4 topLeft = vec4(
          getAValue(b, sourceFloorRC.x, sourceFloorRC.y, d),
          hasNextCol ? getAValue(b, sourceFloorRC.x, sourceFloorRC.y, d + 1)
                     : 0.0,
          hasNextRow ? getAValue(b, sourceFloorRC.x, sourceFloorRC.z, d)
                     : 0.0,
          (hasNextRow && hasNextCol) ?
            getAValue(b, sourceFloorRC.x, sourceFloorRC.z, d + 1) : 0.0);

        vec4 bottomLeft = vec4(
          getAValue(b, sourceCeilRC.x, sourceFloorRC.y, d),
          hasNextCol ? getAValue(b, sourceCeilRC.x, sourceFloorRC.y, d + 1)
                     : 0.0,
          hasNextRow ? getAValue(b, sourceCeilRC.x, sourceFloorRC.z, d)
                     : 0.0,
          (hasNextRow && hasNextCol) ?
            getAValue(b, sourceCeilRC.x, sourceFloorRC.z, d + 1) : 0.0);

        vec4 topRight = vec4(
          getAValue(b, sourceFloorRC.x, sourceCeilRC.y, d),
          hasNextCol ? getAValue(b, sourceFloorRC.x, sourceCeilRC.y, d + 1)
                     : 0.0,
          hasNextRow ? getAValue(b, sourceFloorRC.x, sourceCeilRC.z, d)
                     : 0.0,
          (hasNextRow && hasNextCol) ?
            getAValue(b, sourceFloorRC.x, sourceCeilRC.z, d + 1) : 0.0);

        vec4 bottomRight = vec4(
          getAValue(b, sourceCeilRC.x, sourceCeilRC.y, d),
          hasNextCol ? getAValue(b, sourceCeilRC.x, sourceCeilRC.y, d + 1)
                     : 0.0,
          hasNextRow ? getAValue(b, sourceCeilRC.x, sourceCeilRC.z, d)
                     : 0.0,
          (hasNextRow && hasNextCol) ?
            getAValue(b, sourceCeilRC.x, sourceCeilRC.z, d + 1) : 0.0);

        vec3 fracRC = sourceFracIndexRC - vec3(sourceFloorRC);

        vec4 top = mix(topLeft, topRight, fracRC.yyzz);
        vec4 bottom = mix(bottomLeft, bottomRight, fracRC.yyzz);
        vec4 newValue = mix(top, bottom, fracRC.x);

        setOutput(newValue);
      }
    `},Nd=function(r,t,e){this.variableNames=["dy"],this.outputShape=[],this.outputShape=t.shape;var n=t.shape,o=n[1],i=n[2],a=r.shape,s=a[1],u=a[2],c=[e&&s>1?o-1:o,e&&u>1?i-1:i],l=[e&&s>1?s-1:s,e&&u>1?u-1:u],h=c[0]/l[0],f=c[1]/l[1],p=1/h,d=1/f,m=2*Math.ceil(p)+2,v=2*Math.ceil(d)+2;this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        int r = coords[1];
        int c = coords[2];

        float accumulator = 0.0;

        const float heightScale = float(`+h+`);
        const float widthScale = float(`+f+`);

        const float invHeightScale = float(`+p+`);
        const float invWidthScale = float(`+d+`);

        const int winHeight = int(`+m+`);
        const int winWidth = int(`+v+`);

        // Compute bounds for where in dy we will look
        float startRLerp = floor(float(r) * invHeightScale);
        int startDyR = int(floor(startRLerp - float(winHeight / 2)));

        float startCLerp = floor(float(c) * invWidthScale);
        int startDyC = int(floor(startCLerp - float(winWidth / 2)));

        // Loop over dy
        for (int dyROffset = 0; dyROffset < winHeight; dyROffset++) {
          int dyR = dyROffset + startDyR;

          // Guard against the window exceeding the bounds of dy
          if (dyR < 0 || dyR >= `+s+`) {
            continue;
          }

          for (int dyCOffset = 0; dyCOffset < winWidth; dyCOffset++) {
            int dyC = dyCOffset + startDyC;

            // Guard against the window exceeding the bounds of dy
            if (dyC < 0 || dyC >= `+u+`) {
              continue;
            }

            float sourceFracRow =
              float(`+c[0]+`) *
                (float(dyR) / float(`+l[0]+`));

            float sourceFracCol =
                float(`+c[1]+`) *
                  (float(dyC) / float(`+l[1]+`));

            int sourceNearestRow = int(min(
                float(int(`+o+`) - 1),
                `+e+` ? float(round(sourceFracRow)) :
                                  float(floor(sourceFracRow))));

            int sourceNearestCol = int(min(
                float(int(`+i+`) - 1),
                `+e+` ? float(round(sourceFracCol)) :
                                  float(floor(sourceFracCol))));

            if (r == sourceNearestRow && c == sourceNearestCol) {
              accumulator += getDy(b, dyR, dyC, d);
            }
          }
        }
        // End loop over dy

        setOutput(accumulator);
      }
    `},Fd=function(r,t,e,n){this.variableNames=["A"],this.outputShape=[];var o=r[0],i=r[1],a=r[2],s=r[3];this.outputShape=[o,t,e,s];var u=[n&&t>1?i-1:i,n&&e>1?a-1:a],c=[n&&t>1?t-1:t,n&&e>1?e-1:e],l=n?"0.5":"0.0";this.userCode=`
      const vec2 effectiveInputOverOutputRatioRC = vec2(
          `+u[0]/c[0]+`,
          `+u[1]/c[1]+`);
      const vec2 inputShapeRC = vec2(`+i+".0, "+a+`.0);

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        ivec2 yRC = coords.yz;

        // Fractional source index.
        vec2 sourceFracIndexRC = vec2(yRC) * effectiveInputOverOutputRatioRC;

        // Compute the coordinators of nearest neighbor point.
        ivec2 sourceNearestRC = ivec2(
          min(inputShapeRC - 1.0, floor(sourceFracIndexRC + `+l+`)));

        float newValue = getA(b, sourceNearestRC.x, sourceNearestRC.y, d);

        setOutput(newValue);
      }
    `},Pd=function(r,t){this.variableNames=["x"];var e=r.length;if(e>4)throw new Error("WebGL backend: Reverse of rank-"+e+" tensor is not yet supported");if(this.outputShape=r,e!==1){var n=r.map(function(i,a){return function(s){return t.indexOf(s)!==-1&&r[s]!==1?r[s]+" - coords["+s+"] - 1":"coords["+s+"]"}(a)}).join(","),o=_e(e);this.userCode=`
      void main() {
        `+o+` coords = getOutputCoords();
        setOutput(getX(`+n+`));
      }
    `}else this.userCode=`
        void main() {
          int coord = getOutputCoords();
          setOutput(getX(`+r[0]+` - coord - 1));
        }
      `},Od=function(r,t){this.variableNames=["x"],this.packedInputs=!0,this.packedOutput=!0;var e=r.length;if(e>4)throw new Error("WebGL backend: Reverse of rank-"+e+" tensor is not yet supported");this.outputShape=r;var n=rt("rc",e),o=n[e-1]+" + 1 < "+this.outputShape[e-1],i=n[e-2]+" + 1 < "+this.outputShape[e-2],a=_e(e);function s(u){var c=r.map(function(l,h){return function(f,p){return t.indexOf(f)!==-1&&r[f]!==1?r[f]+" - "+p[f]+" - 1":""+p[f]}(h,u)});return"getChannel(getX("+c.join(",")+"), vec2("+c.slice(-2).join(",")+"))"}this.userCode=e===1?`
        void main(){
          int rc = getOutputCoords();
          vec4 result = vec4(0.);
          result.r = getChannel(getX(`+r[0]+` - rc - 1),
            `+r[0]+` - rc - 1);
          if(`+o+`){
              result.g = getChannel(getX(`+r[0]+` - (rc  + 1) - 1),
                `+r[0]+` - (rc  + 1) - 1);
          }
          setOutput(result);
        }
      `:`
        void main() {
          `+a+` rc = getOutputCoords();
          vec4 result = vec4(0.);
          result.r = `+function(u){return s(u)}(n.slice())+`;
          if(`+o+`){
            result.g = `+function(u){return u[e-1]="("+u[e-1]+" + 1)",s(u)}(n.slice())+`;
          }
          if(`+i+`) {
            result.b = `+function(u){return u[e-2]="("+u[e-2]+" + 1)",s(u)}(n.slice())+`;
            if(`+o+`) {
              result.a = `+function(u){return u[e-1]="("+u[e-1]+" + 1)",u[e-2]="("+u[e-2]+" + 1)",s(u)}(n.slice())+`;
            }
          }
          setOutput(result);
        }
    `},Gs=function(r,t,e,n,o,i,a){this.variableNames=["updates","indices","defaultValue"],this.outputShape=i;var s=_e(o.length),u=_e(i.length),c="";e===1?c="i":e===2&&(c="i, j");var l="getIndices("+c+")",h="";n===1?h="i":n===2&&(h="i, coords[1]");var f="getUpdates("+h+")",p=t>1?"strides[j]":"strides";this.userCode=`
        `+s+" strides = "+s+"("+o+`);

        void main() {
          `+u+` coords = getOutputCoords();
          float sum = 0.0;
          bool found = false;
          for (int i = 0; i < `+r+`; i++) {
            int flattenedIndex = 0;
            for (int j = 0; j < `+t+`; j++) {
              int index = round(`+l+`);
              flattenedIndex += index * `+p+`;
            }
            if (flattenedIndex == coords[0]) {
              sum += `+f+`;
              found = true;
            }
          }
          setOutput(mix(getDefaultValue(), sum, float(found)));
        }
      `},Md=function(r,t){this.variableNames=["x","segmentIds"];var e=r.windowSize,n=r.batchSize,o=r.inSize,i=r.numSegments,a=i*Math.ceil(o/e);this.outputShape=[n,a];var s=4*Math.floor(e/4),u=e%4,c=`
        sumValue += dot(values, segFilter);
    `,l="";o%e>0&&(l=`
        if (inIdx < 0 || inIdx >= `+o+`) {
          return initializationValue;
        }
      `);var h="";o%e>0&&(h=`
        if (inIdx < 0 || inIdx >= `+o+`) {
          return -1.0;
        }
      `),this.userCode=`
      const float initializationValue = 0.0;

      float getValue(int batch, int inIdx) {
        `+l+`
        return getX(batch, inIdx);
      }

      float getSegmentIdAtIndex(int inIdx) {
        `+h+`
        return getSegmentIds(inIdx);
      }

      void main() {
        ivec2 coords = getOutputCoords();
        int batch = coords[0];
        int outIdx = coords[1];
        int inOffset = int(floor(float(outIdx) / float(
          `+i+")) * float("+e+`));
        int currentSeg = int(mod(float(outIdx), float(`+i+`)));

        float sumValue = 0.0;

        for (int i = 0; i < `+s+`; i += 4) {
          int inIdx = inOffset + i;
          vec4 values = vec4(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            getValue(batch, inIdx + 2),
            getValue(batch, inIdx + 3)
          );

          vec4 segFilter = vec4(
            int(getSegmentIdAtIndex(inIdx)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 1)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 2)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 3)) == currentSeg ? 1 : 0
          );

          `+c+`
        }

        int inIdx = inOffset + `+s+`;
        if (`+(u===1)+`) {
          vec4 values = vec4(
            getValue(batch, inIdx),
            initializationValue,
            initializationValue,
            initializationValue
          );

          int inIdxSeg = int(getSegmentIdAtIndex(inIdx));

          vec4 segFilter = vec4(
            int(getSegmentIdAtIndex(inIdx)) == currentSeg ? 1 : 0,
            0,
            0,
            0
          );

          `+c+`
        } else if (`+(u===2)+`) {
          vec4 values = vec4(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            initializationValue,
            initializationValue
          );

          vec4 segFilter = vec4(
            int(getSegmentIdAtIndex(inIdx)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 1)) == currentSeg ? 1 : 0,
              0,
              0
          );

          `+c+`
        } else if (`+(u===3)+`) {
          vec4 values = vec4(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            getValue(batch, inIdx + 2),
            initializationValue
          );

          vec4 segFilter = vec4(
            int(getSegmentIdAtIndex(inIdx)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 1)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 2)) == currentSeg ? 1 : 0,
            0
          );

          `+c+`
        }
        setOutput(sumValue);
      }
    `},Bd=function(r,t,e){var n,o;if(this.variableNames=["c","a","b"],this.outputShape=t,e>4)throw Error("Where for rank "+e+" is not yet supported");if(e===1)o="resRC",n="resRC";else{for(var i=["resRC.x","resRC.y","resRC.z","resRC.w"],a=[],s=[],u=0;u<t.length;u++)s.push(""+i[u]),u<r&&a.push(""+i[u]);n=a.join(),o=s.join()}var c=_e(e);this.userCode=`
      void main() {
        `+c+` resRC = getOutputCoords();
        float cVal = getC(`+n+`);
        if (cVal >= 1.0) {
          setOutput(getA(`+o+`));
        } else {
          setOutput(getB(`+o+`));
        }
      }
    `},Ld=function(){function r(t){this.variableNames=["source"],this.outputShape=t,this.rank=t.length;var e,n=_e(this.rank),o="uniform int start["+this.rank+"];",i=function(a){if(a===1)return"sourceLoc";if(a<=6)return mi.slice(0,a).map(function(s){return"sourceLoc."+s}).join(",");throw Error("Slicing for rank "+a+" is not yet supported")}(this.rank);e=`
        `+n+` sourceLoc;
        `+n+` coords = getOutputCoords();
        `+t.map(function(a,s){return"sourceLoc."+mi[s]+" = start["+s+"] + coords."+mi[s]+";"}).join(`
`)+`
      `,this.userCode=`
      `+o+`
      void main() {
        `+e+`
        setOutput(getSource(`+i+`));
      }
    `}return r.prototype.getCustomSetupFunc=function(t){var e=this;if(t.length!==this.rank)throw Error("The rank ("+this.rank+") of the program must match the length of start ("+t.length+")");return function(n,o){e.startLoc==null&&(e.startLoc=n.getUniformLocationNoThrow(o,"start"),e.startLoc==null)||n.gl.uniform1iv(e.startLoc,t)}},r}(),mi=["x","y","z","w","u","v"],Wd=function(){function r(t){this.variableNames=["source"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=t,this.rank=t.length;var e=_e(this.rank),n=rt("coords",this.rank),o=rt("sourceLoc",this.rank),i=this.rank===1?"sourceLoc":"vec2("+o.slice(-2).join()+")",a="getChannel(getSource("+o.join()+"), "+i+")",s=`
      result.x = `+a+`;
      if (++`+n[this.rank-1]+" < "+t[this.rank-1]+`) {
        ++`+o[this.rank-1]+`;
        result.y = `+a+`;
        --`+o[this.rank-1]+`;
      }
    `,u=this.rank===1?"":`
      --`+n[this.rank-1]+`;
      if (++`+n[this.rank-2]+" < "+t[this.rank-2]+`) {
        ++`+o[this.rank-2]+`;
        result.z = `+a+`;
        if (++`+n[this.rank-1]+" < "+t[this.rank-1]+`) {
          ++`+o[this.rank-1]+`;
          result.w = `+a+`;
        }
      }
    `,c=this.rank<=4?`sourceLoc = coords +
            `+e+"("+t.map(function(l,h){return"start["+h+"]"}).join()+");":t.map(function(l,h){return o[h]+" = "+n[h]+" + start["+h+"];"}).join(`
`);this.userCode=`
      uniform int start[`+this.rank+`];
      void main() {
        `+e+` coords = getOutputCoords();
        `+e+` sourceLoc;
        `+c+`
        vec4 result = vec4(0.);
        `+s+`
        `+u+`
        setOutput(result);
      }
    `}return r.prototype.getCustomSetupFunc=function(t){var e=this;if(t.length!==this.rank)throw Error("The rank ("+this.rank+") of the program must match the length of start ("+t.length+")");return function(n,o){e.startLoc==null&&(e.startLoc=n.getUniformLocationNoThrow(o,"start"),e.startLoc==null)||n.gl.uniform1iv(e.startLoc,t)}},r}(),Ud=function(r,t,e){this.variableNames=["x"],this.outputShape=e;var n=e.length,o=_e(e.length),i=_e(e.length),a="";if(n===1)a="coords * strides + begin";else{var s=0;a=e.map(function(u,c){return s++,e.length===1?"coords * strides["+c+"] + begin["+c+"]":"coords["+(s-1)+"] * strides["+c+"] + begin["+c+"]"}).join(",")}this.userCode=`
      `+o+" begin = "+o+"("+r+`);
      `+o+" strides = "+o+"("+t+`);

      void main() {
        `+i+` coords = getOutputCoords();
        setOutput(getX(`+a+`));
      }
    `},Vd=function(){function r(t){this.gpgpu=t,this.numUsedTextures=0,this.numFreeTextures=0,this.freeTextures={},this.logEnabled=!1,this.usedTextures={}}return r.prototype.acquireTexture=function(t,e,n){var o,i=Hs(e,n),a=qs(t,i,n);if(a in this.freeTextures||(this.freeTextures[a]=[]),a in this.usedTextures||(this.usedTextures[a]=[]),this.freeTextures[a].length>0){this.numFreeTextures--,this.numUsedTextures++,this.log();var s=this.freeTextures[a].shift();return this.usedTextures[a].push(s),s}return this.numUsedTextures++,this.log(),i===ht.PACKED_2X2_FLOAT32?o=this.gpgpu.createPackedMatrixTexture(t[0],t[1]):i===ht.PACKED_2X2_FLOAT16?o=this.gpgpu.createFloat16PackedMatrixTexture(t[0],t[1]):i===ht.UNPACKED_FLOAT32?o=this.gpgpu.createFloat32MatrixTexture(t[0],t[1]):i===ht.UNPACKED_FLOAT16?o=this.gpgpu.createFloat16MatrixTexture(t[0],t[1]):i===ht.PACKED_4X1_UNSIGNED_BYTE&&(o=this.gpgpu.createUnsignedBytesMatrixTexture(t[0],t[1])),this.usedTextures[a].push(o),o},r.prototype.releaseTexture=function(t,e,n,o){if(this.freeTextures!=null){var i=qs(e,Hs(n,o),o);i in this.freeTextures||(this.freeTextures[i]=[]),this.freeTextures[i].push(t),this.numFreeTextures++,this.numUsedTextures--;var a=this.usedTextures[i],s=a.indexOf(t);if(s<0)throw new Error("Cannot release a texture that was never provided by this texture manager");a.splice(s,1),this.log()}},r.prototype.log=function(){if(this.logEnabled){var t=this.numFreeTextures+this.numUsedTextures;console.log("Free/Used",this.numFreeTextures+" / "+this.numUsedTextures,"("+t+")")}},r.prototype.getNumUsedTextures=function(){return this.numUsedTextures},r.prototype.getNumFreeTextures=function(){return this.numFreeTextures},r.prototype.dispose=function(){var t=this;if(this.freeTextures!=null){for(var e in this.freeTextures)this.freeTextures[e].forEach(function(n){t.gpgpu.deleteMatrixTexture(n)});for(var e in this.usedTextures)this.usedTextures[e].forEach(function(o){t.gpgpu.deleteMatrixTexture(o)});this.freeTextures=null,this.usedTextures=null,this.numUsedTextures=0,this.numFreeTextures=0}},r}();function Hs(r,t){if(r===ft.UPLOAD)return ht.PACKED_2X2_FLOAT32;if(r===ft.RENDER||r==null)return function(e){return L().getBool("WEBGL_RENDER_FLOAT32_ENABLED")?e?ht.PACKED_2X2_FLOAT32:ht.UNPACKED_FLOAT32:e?ht.PACKED_2X2_FLOAT16:ht.UNPACKED_FLOAT16}(t);if(r===ft.DOWNLOAD||r===ft.PIXELS)return ht.PACKED_4X1_UNSIGNED_BYTE;throw new Error("Unknown logical texture type "+r)}function qs(r,t,e){return r[0]+"_"+r[1]+"_"+t+"_"+e}var zd=function(r,t){this.variableNames=["A"];for(var e=new Array(r.length),n=0;n<e.length;n++)e[n]=r[n]*t[n];this.outputShape=e,this.rank=e.length;var o=_e(this.rank),i=function(a){var s=a.length;if(s>5)throw Error("Tile for rank "+s+" is not yet supported");if(s===1)return"imod(resRC, "+a[0]+")";for(var u=["resRC.x","resRC.y","resRC.z","resRC.w","resRC.u"],c=[],l=0;l<a.length;l++)c.push("imod("+u[l]+", "+a[l]+")");return c.join()}(r);this.userCode=`
      void main() {
        `+o+` resRC = getOutputCoords();
        setOutput(getA(`+i+`));
      }
    `},Gd=function(r,t){this.variableNames=["A"];for(var e=new Array(r.length),n=0;n<e.length;n++)e[n]=r[t[n]];this.outputShape=e,this.rank=e.length;var o=_e(this.rank),i=function(a){var s=a.length;if(s>6)throw Error("Transpose for rank "+s+" is not yet supported");for(var u=["resRC.x","resRC.y","resRC.z","resRC.w","resRC.u","resRC.v"],c=new Array(s),l=0;l<a.length;l++)c[a[l]]=u[l];return c.join()}(t);this.userCode=`
    void main() {
      `+o+` resRC = getOutputCoords();
      setOutput(getA(`+i+`));
    }
    `},Hd=function(r,t){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0;for(var e=new Array(r.length),n=0;n<e.length;n++)e[n]=r[t[n]];if(this.outputShape=e,this.rank=e.length,this.rank>6)throw Error("Packed transpose for rank "+this.rank+" is not yet supported.");var o=_e(this.rank),i=pc("rc",this.rank),a=new Array(this.rank);for(n=0;n<t.length;n++)a[t[n]]=i[n];var s="vec2("+a.slice(-2).join()+")",u="++"+i[this.rank-1]+" < "+e[this.rank-1],c="getChannel(getA("+a.join()+"), "+s+")";this.userCode=`
    void main() {
      `+o+` rc = getOutputCoords();
      vec4 result = vec4(0.);
      result[0] = `+c+`;
      if(`+u+`) {
        result[1] = `+c+`;
      }
      --`+i[this.rank-1]+`;
      if(++`+i[this.rank-2]+" < "+e[this.rank-2]+`) {
        result[2] = `+c+`;
        if(`+u+`) {
          result[3] = `+c+`;
        }
      }
      setOutput(result);
    }
    `},ba=1.7580993408473768,wa=1.0507009873554805,ie=function(r,t){this.variableNames=["A"],this.outputShape=r,this.userCode=`
      float unaryOperation(float x) {
        `+t+`
      }

      void main() {
        float x = getAAtOutCoords();
        float y = unaryOperation(x);

        setOutput(y);
      }
    `},It="if (isnan(x)) return x;",qd="return x;",js="return abs(x);",yc=It+`
  return (x < 0.0) ? 0.0 : x;
`,xc=It+`
  return (x < 0.0) ? 0.0 : min(6.0, x);
`,bc="return (x >= 0.0) ? x : (exp(x) - 1.0);",jd=`
  // Stable and Attracting Fixed Point (0, 1) for Normalized Weights.
  // see: https://arxiv.org/abs/1706.02515
  float scaleAlpha = `+ba+`;
  float scale = `+wa+`;
  return (x >= 0.0) ? scale * x : scaleAlpha * (exp(x) - 1.0);
`,Ks="return -x;",Xs="return ceil(x);",$s="return floor(x);",Ys="return exp(x);",Js="return exp(x) - 1.0;",Kd=It+`
  return sin(x);
`,Xd=It+`
  return cos(x);
`,$d=It+`
  if (abs(x) > 1.) {
    return NAN;
  }
  return asin(x);
`,Yd=It+`
  if (abs(x) > 1.) {
    return NAN;
  }
  return acos(x);
`,Jd=It+`
  return atan(x);
`,Qd=It+"return log(x + sqrt(x * x + 1.0));",Zd=It+`
  if (x < 1.0) return NAN;
  return log(x + sqrt(x * x - 1.0));`,ev=It+`
  if ((x < -1.0) || (x > 1.0)) return NAN;
  return (log(1.0 + x) - log(1.0 - x)) / 2.0;`,Gr="return x;",tv="return x;",wc=`
  vec4 result = x * vec4(greaterThanEqual(x, vec4(0.0)));
  bvec4 isNaN = isnan(x);

  result.r = isNaN.r ? x.r : result.r;
  result.g = isNaN.g ? x.g : result.g;
  result.b = isNaN.b ? x.b : result.b;
  result.a = isNaN.a ? x.a : result.a;

  return result;
`,_c=`
  vec4 result = min(x, vec4(6.)) * vec4(greaterThanEqual(x, vec4(0.0)));
  bvec4 isNaN = isnan(x);

  result.r = isNaN.r ? x.r : result.r;
  result.g = isNaN.g ? x.g : result.g;
  result.b = isNaN.b ? x.b : result.b;
  result.a = isNaN.a ? x.a : result.a;

  return result;
`,Cc=`
  vec4 result;

  result.r = (x.r >= 0.0) ? x.r : (exp(x.r) - 1.0);
  result.g = (x.g >= 0.0) ? x.g : (exp(x.g) - 1.0);
  result.b = (x.b >= 0.0) ? x.b : (exp(x.b) - 1.0);
  result.a = (x.a >= 0.0) ? x.a : (exp(x.a) - 1.0);

  return result;
`,fr=function(r,t){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=r,this.userCode=`
      vec4 unaryOperation(vec4 x) {
        `+t+`
      }

      void main() {
        vec4 x = getAAtOutCoords();
        vec4 y = unaryOperation(x);

        setOutput(y);
      }
    `},nv=function(r){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!1,this.outputShape=r;var t=r.length,e=rt("rc",t),n=_e(t),o=function(s,u){if(s===1)return"rc";for(var c="",l=0;l<s;l++)c+=u[l],l<s-1&&(c+=",");return c}(t,e),i=e.slice(-2),a=t<=1?"rc":"vec2("+i.join(",")+")";this.userCode=`
      void main() {
        `+n+` rc = getOutputCoords();
        vec4 packedInput = getA(`+o+`);

        setOutput(getChannel(packedInput, `+a+`));
      }
    `},Hr={};function qr(r,t){if(t===void 0&&(t=!1),r==="linear")return t?tv:qd;if(r==="relu")return t?wc:yc;if(r==="elu")return t?Cc:bc;if(r==="relu6")return t?_c:xc;if(r==="prelu")return t?gc:mc;throw new Error("Activation "+r+" has not been implemented for the WebGL backend.")}var rv=600,ov=function(r){function t(e){var n,o=r.call(this)||this;if(o.pendingRead=new WeakMap,o.pendingDisposal=new WeakSet,o.dataRefCount=new WeakMap,o.numBytesInGPU=0,o.uploadWaitMs=0,o.downloadWaitMs=0,o.warnedAboutMemory=!1,o.pendingDeletes=0,o.disposed=!1,!L().getBool("HAS_WEBGL"))throw new Error("WebGL is not supported on this device");if(e==null){var i=Ht(L().getNumber("WEBGL_VERSION"));o.binaryCache=((n=L().getNumber("WEBGL_VERSION"))in Hr||(Hr[n]={}),Hr[n]),o.gpgpu=new vd(i),o.canvas=i.canvas,o.gpgpuCreatedLocally=!0}else o.gpgpu=e,o.binaryCache={},o.gpgpuCreatedLocally=!1,o.canvas=e.gl.canvas;return o.textureManager=new Vd(o.gpgpu),o.numMBBeforeWarning=L().global.screen==null?1024:L().global.screen.height*L().global.screen.width*window.devicePixelRatio*rv/1024/1024,o.texData=new oc(o,N),o}return kt(t,r),t.prototype.numDataIds=function(){return this.texData.numDataIds()+(this.cpuBackend?this.cpuBackend.numDataIds():0)-this.pendingDeletes},t.prototype.write=function(e,n,o){if(L().getBool("DEBUG")&&this.checkNumericalProblems(e),o==="complex64"&&e!=null)throw new Error("Cannot write to a complex64 dtype. Please use tf.complex(real, imag).");var i={};return this.texData.set(i,{shape:n,dtype:o,values:e,usage:ft.UPLOAD}),i},t.prototype.move=function(e,n,o,i){if(L().getBool("DEBUG")&&this.checkNumericalProblems(n),i==="complex64")throw new Error("Cannot write to a complex64 dtype. Please use tf.complex(real, imag).");this.texData.set(e,{shape:o,dtype:i,values:n,usage:ft.UPLOAD})},t.prototype.readSync=function(e){var n=this.texData.get(e),o=n.values,i=n.dtype,a=n.complexTensors,s=n.slice,u=n.shape,c=n.isPacked;if(s!=null){var l=void 0;l=c?new fr(u,Gr):new ie(u,Gr);var h=this.runWebGLProgram(l,[{dataId:e,shape:u,dtype:i}],i),f=this.readSync(h.dataId);return this.disposeData(h.dataId),f}if(o!=null)return this.convertAndCacheOnCPU(e);if(i==="string")return o;var p,d,m=this.activeTimers!=null;return m&&(p=Ft()),i==="complex64"?d=ji(a.real.dataSync(),a.imag.dataSync()):d=this.getValuesFromTexture(e),m&&(this.downloadWaitMs+=Ft()-p),this.convertAndCacheOnCPU(e,d)},t.prototype.read=function(e){return X(this,void 0,void 0,function(){var n,o,i,a,s,u,c,l,h,f,p,d,m,v,g,x,b,y,w,_,S,I;return $(this,function(E){switch(E.label){case 0:if(this.pendingRead.has(e))return n=this.pendingRead.get(e),[2,new Promise(function(R){return n.push(R)})];if(o=this.texData.get(e),i=o.values,a=o.shape,s=o.slice,u=o.dtype,c=o.complexTensors,l=o.isPacked,s!=null)return h=void 0,h=l?new fr(a,Gr):new ie(a,Gr),f=this.runWebGLProgram(h,[{dataId:e,shape:a,dtype:u}],u),p=this.read(f.dataId),this.disposeData(f.dataId),[2,p];if(i!=null)return[2,this.convertAndCacheOnCPU(e)];if(!L().getBool("WEBGL_DOWNLOAD_FLOAT_ENABLED")&&L().getNumber("WEBGL_VERSION")===2)throw new Error("tensor.data() with WEBGL_DOWNLOAD_FLOAT_ENABLED=false and WEBGL_VERSION=2 not yet supported.");return d=null,u!=="complex64"&&L().get("WEBGL_BUFFER_SUPPORTED")&&(m=this.decode(e),v=this.texData.get(m.dataId),d=(I=this.gpgpu).createBufferFromTexture.apply(I,[v.texture].concat(vr(a)))),this.pendingRead.set(e,[]),u==="complex64"?[3,2]:[4,this.gpgpu.createAndWaitForFence()];case 1:E.sent(),E.label=2;case 2:return u!=="complex64"?[3,4]:[4,Promise.all([c.real.data(),c.imag.data()])];case 3:return x=E.sent(),b=x[0],y=x[1],g=ji(b,y),[3,5];case 4:d==null?g=this.getValuesFromTexture(e):(w=Y(a),g=this.gpgpu.downloadFloat32MatrixFromBuffer(d,w)),E.label=5;case 5:return m!=null&&this.disposeData(m.dataId),_=this.convertAndCacheOnCPU(e,g),S=this.pendingRead.get(e),this.pendingRead.delete(e),S.forEach(function(R){return R(_)}),this.pendingDisposal.has(e)&&(this.pendingDisposal.delete(e),this.disposeData(e),this.pendingDeletes--),[2,_]}})})},t.prototype.checkNumericalProblems=function(e){if(e!=null)for(var n=0;n<e.length;n++){var o=e[n];if(!qh(o))throw L().getBool("WEBGL_RENDER_FLOAT32_CAPABLE")?Error("The value "+o+" cannot be represented with your current settings. Consider enabling float32 rendering: 'tf.env().set('WEBGL_RENDER_FLOAT32_ENABLED', true);'"):Error("The value "+o+" cannot be represented on this device.")}},t.prototype.getValuesFromTexture=function(e){var n,o=this.texData.get(e),i=o.shape,a=o.dtype,s=o.isPacked,u=Y(i);if(L().getBool("WEBGL_DOWNLOAD_FLOAT_ENABLED")){var c=this.decode(e),l=this.texData.get(c.dataId),h=(n=this.gpgpu).downloadMatrixFromPackedTexture.apply(n,[l.texture].concat(vr(i))).subarray(0,u);return this.disposeData(c.dataId),h}var f=L().getBool("WEBGL_PACK")&&s===!0,p=f?ci(i):i,d=f?new qp(p):new Hp(p),m=this.runWebGLProgram(d,[{shape:p,dtype:a,dataId:e}],"float32"),v=this.texData.get(m.dataId),g=this.gpgpu.downloadByteEncodedFloatMatrixFromOutputTexture(v.texture,v.texShape[0],v.texShape[1]).subarray(0,u);return this.disposeData(m.dataId),g},t.prototype.time=function(e){return X(this,void 0,void 0,function(){var n,o,i,a,s,u,c;return $(this,function(l){switch(l.label){case 0:return n=this.activeTimers,o=[],i=!1,this.programTimersStack==null?(this.programTimersStack=o,i=!0):this.activeTimers.push(o),this.activeTimers=o,e(),a=nr(this.activeTimers.map(function(h){return h.query})).filter(function(h){return h!=null}),s=nr(this.activeTimers.map(function(h){return h.name})).filter(function(h){return h!=null}),this.activeTimers=n,i&&(this.programTimersStack=null),u={uploadWaitMs:this.uploadWaitMs,downloadWaitMs:this.downloadWaitMs,kernelMs:null,wallMs:null},L().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE")>0?[4,Promise.all(a)]:[3,2];case 1:return c=l.sent(),u.kernelMs=Rh(c),u.getExtraProfileInfo=function(){return c.map(function(h,f){return{name:s[f],ms:h}}).map(function(h){return h.name+": "+h.ms}).join(", ")},[3,3];case 2:u.kernelMs={error:"WebGL query timers are not supported in this environment."},l.label=3;case 3:return this.uploadWaitMs=0,this.downloadWaitMs=0,[2,u]}})})},t.prototype.memory=function(){return{unreliable:!1,numBytesInGPU:this.numBytesInGPU}},t.prototype.startTimer=function(){return L().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE")>0?this.gpgpu.beginQuery():{startMs:Ft(),endMs:null}},t.prototype.endTimer=function(e){return L().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE")>0?(this.gpgpu.endQuery(),e):(e.endMs=Ft(),e)},t.prototype.getQueryTime=function(e){return X(this,void 0,void 0,function(){var n;return $(this,function(o){return L().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE")>0?[2,this.gpgpu.waitForQueryAndGetTime(e)]:[2,(n=e).endMs-n.startMs]})})},t.prototype.disposeData=function(e){if(!this.pendingDisposal.has(e)){if(this.pendingRead.has(e))return this.pendingDisposal.add(e),void this.pendingDeletes++;if(this.texData.has(e)){this.releaseGPUData(e);var n=this.texData.get(e).complexTensors;n!=null&&(n.real.dispose(),n.imag.dispose()),this.texData.delete(e)}}},t.prototype.releaseGPUData=function(e){var n=this.texData.get(e),o=n.texture,i=n.dtype,a=n.texShape,s=n.usage,u=n.isPacked,c=n.slice,l=c&&c.origDataId||e,h=this.dataRefCount.get(l);h>1?this.dataRefCount.set(l,h-1):(this.dataRefCount.delete(l),o!=null&&(this.numBytesInGPU-=this.computeBytes(a,i),this.textureManager.releaseTexture(o,a,s,u)));var f=this.texData.get(e);f.texture=null,f.texShape=null,f.isPacked=!1,f.slice=null},t.prototype.getTexture=function(e){return this.uploadToGPU(e),this.texData.get(e).texture},t.prototype.getDataInfo=function(e){return this.texData.get(e)},t.prototype.getCPUBackend=function(){return L().getBool("WEBGL_CPU_FORWARD")?(this.cpuBackend==null&&(this.cpuBackend=N.findBackend("cpu")),this.cpuBackend):null},t.prototype.shouldExecuteOnCPU=function(e,n){var o=this;return n===void 0&&(n=128),this.getCPUBackend()!=null&&e.every(function(i){return o.texData.get(i.dataId).texture==null&&i.size<n})},t.prototype.getGPGPUContext=function(){return this.gpgpu},t.prototype.complex=function(e,n){var o=this.makeOutput(e.shape,"complex64");return this.texData.get(o.dataId).complexTensors={real:N.keep(e.clone()),imag:N.keep(n.clone())},o},t.prototype.real=function(e){return this.texData.get(e.dataId).complexTensors.real.clone()},t.prototype.imag=function(e){return this.texData.get(e.dataId).complexTensors.imag.clone()},t.prototype.slice=function(e,n,o){if(this.shouldExecuteOnCPU([e]))return this.cpuBackend.slice(e,n,o);if(Y(o)===0)return Ke([],o,e.dtype);var i=this.texData.get(e.dataId).isPacked,a=nc(e.shape,n,o);if(i||!a){var s=L().getBool("WEBGL_PACK_ARRAY_OPERATIONS")?new Wd(o):new Ld(o),u=s.getCustomSetupFunc(n);return this.compileAndRun(s,[e],null,u)}return this.uploadToGPU(e.dataId),this.shallowSlice(e,n,o)},t.prototype.shallowSlice=function(e,n,o){var i=this.texData.get(e.dataId),a=this.makeOutput(o,e.dtype),s=this.texData.get(a.dataId);Object.assign(s,i),s.shape=o,s.dtype=e.dtype;var u=rc(n,e.strides);i.slice&&(u+=i.slice.flatOffset),s.slice={flatOffset:u,origDataId:i.slice&&i.slice.origDataId||e.dataId};var c=this.dataRefCount.get(s.slice.origDataId)||1;return this.dataRefCount.set(s.slice.origDataId,c+1),a},t.prototype.stridedSlice=function(e,n,o,i){if(this.shouldExecuteOnCPU([e]))return this.cpuBackend.stridedSlice(e,n,o,i);var a=da(n,o,i);if(a.some(function(u){return u===0}))return Ke([],a);var s=new Ud(n,i,a);return this.compileAndRun(s,[e])},t.prototype.reverse=function(e,n){var o=L().getBool("WEBGL_PACK_ARRAY_OPERATIONS")?new Od(e.shape,n):new Pd(e.shape,n);return this.compileAndRun(o,[e])},t.prototype.concat=function(e,n){if(e[0].dtype==="complex64"){var o=e.map(function(p){return xt(p)}),i=e.map(function(p){return Ot(p)});return qe(this.concat(o,n),this.concat(i,n))}if(this.shouldExecuteOnCPU(e))return this.cpuBackend.concat(e,n);if(e.length===1)return e[0];if(e.length>L().getNumber("WEBGL_MAX_TEXTURES_IN_SHADER")){var a=Math.floor(e.length/2),s=this.concat(e.slice(0,a),n),u=this.concat(e.slice(a),n);return this.concat([s,u],n)}if(L().getBool("WEBGL_PACK_ARRAY_OPERATIONS")&&e[0].rank>1){var c=new Tp(e.map(function(p){return p.shape}),n);return this.compileAndRun(c,e)}var l=or(e.map(function(p){return p.shape}),n),h=e.map(function(p){return p.as2D(-1,Y(p.shape.slice(n)))}),f=new Ap(h.map(function(p){return p.shape}));return this.compileAndRun(f,h).reshape(l)},t.prototype.neg=function(e){if(this.shouldExecuteOnCPU([e]))return this.cpuBackend.neg(e);if(L().getBool("WEBGL_PACK_UNARY_OPERATIONS"))return this.packedUnaryOp(e,Ks,e.dtype);var n=new ie(e.shape,Ks);return this.compileAndRun(n,[e])},t.prototype.batchMatMul=function(e,n,o,i){var a=o?e.shape[2]:e.shape[1],s=i?n.shape[1]:n.shape[2],u=o?e.shape[1]:e.shape[2],c=e.shape[0];if((a===1||s===1)&&u>1e3){o&&(e=e.transpose([0,2,1])),i&&(n=n.transpose([0,2,1]));var l=s===1?e:e.as3D(c,u,1),h=s===1?2:1,f=s===1?n.as3D(c,1,u):n;return this.multiply(l,f).sum(h,!0)}var p=je(e.dtype,n.dtype),d=new pi(e.shape,[c,a,s],o,i);return this.compileAndRun(d,[e,n],p)},t.prototype.fusedBatchMatMul=function(e){var n=e.a,o=e.b,i=e.transposeA,a=e.transposeB,s=e.bias,u=e.activation,c=e.preluActivationWeights,l=i?n.shape[2]:n.shape[1],h=a?o.shape[1]:o.shape[2],f=n.shape[0],p=je(n.dtype,o.dtype),d=s!=null,m=c!=null,v=u?qr(u,!0):null,g=new pi(n.shape,[f,l,h],i,a,d,v,m),x=[n,o];return s&&x.push(s),c&&x.push(c),this.compileAndRun(g,x,p)},t.prototype.multiply=function(e,n){if(e.dtype==="complex64"){var o=this.texData.get(e.dataId),i=this.texData.get(n.dataId),a=new Os(Ep,e.shape,n.shape),s=new Os(Rp,e.shape,n.shape),u=[this.makeComplexComponentTensorInfo(e,o.complexTensors.real),this.makeComplexComponentTensorInfo(e,o.complexTensors.imag),this.makeComplexComponentTensorInfo(n,i.complexTensors.real),this.makeComplexComponentTensorInfo(n,i.complexTensors.imag)],c=this.compileAndRun(a,u),l=this.compileAndRun(s,u),h=this.complex(c,l);return c.dispose(),l.dispose(),h}if(this.shouldExecuteOnCPU([e,n]))return this.cpuBackend.multiply(e,n);if(L().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(e,n,Ms,e.dtype);var f=new Te(Ms,e.shape,n.shape);return this.compileAndRun(f,[e,n],e.dtype)},t.prototype.batchNormalization=function(e,n,o,i,a,s){var u=[e,n,o],c=null;s!=null&&(c=s.shape,u.push(s));var l=null;if(a!=null&&(l=a.shape,u.push(a)),L().getBool("WEBGL_PACK_NORMALIZATION")){var h=new Cp(e.shape,n.shape,o.shape,c,l,i);return this.compileAndRun(h,u)}var f=new _p(e.shape,n.shape,o.shape,c,l,i);return this.compileAndRun(f,u)},t.prototype.localResponseNormalization4D=function(e,n,o,i,a){var s=L().getBool("WEBGL_PACK_NORMALIZATION")?new xd(e.shape,n,o,i,a):new gd(e.shape,n,o,i,a);return this.compileAndRun(s,[e])},t.prototype.LRNGrad=function(e,n,o,i,a,s,u){var c=new yd(n.shape,i,a,s,u);return this.compileAndRun(c,[n,o,e])},t.prototype.tile=function(e,n){if(e.dtype==="string"){var o=this.readSync(e.dataId).map(function(a){return lo(a)});return hc(oe(e.shape,e.dtype,o),n)}var i=new zd(e.shape,n);return this.compileAndRun(i,[e])},t.prototype.pad=function(e,n,o){var i=L().getBool("WEBGL_PACK_ARRAY_OPERATIONS")?new kd(e.shape,n,o):new Rd(e.shape,n,o);return this.compileAndRun(i,[e])},t.prototype.transpose=function(e,n){if(this.shouldExecuteOnCPU([e]))return this.cpuBackend.transpose(e,n);var o=L().getBool("WEBGL_PACK_ARRAY_OPERATIONS")?new Hd(e.shape,n):new Gd(e.shape,n);return this.compileAndRun(o,[e])},t.prototype.gather=function(e,n,o){if(this.shouldExecuteOnCPU([e,n]))return this.cpuBackend.gather(e,n,o);var i=new Jp(e.shape,n.size,o);return this.compileAndRun(i,[e,n])},t.prototype.batchToSpaceND=function(e,n,o){k(e.rank<=4,function(){return"batchToSpaceND for rank > 4 with a WebGL backend not implemented yet"});var i=n.reduce(function(h,f){return h*f}),a=go(e.shape,n,i),s=yo(a.length,n.length),u=xo(e.shape,n,i),c=Qu(o,n.length),l=Zu(u,o,n.length);return e.reshape(a).transpose(s).reshape(u).slice(c,l)},t.prototype.spaceToBatchND=function(e,n,o){k(e.rank<=4,function(){return"spaceToBatchND for rank > 4 with a WebGL backend not implemented yet"});var i=n.reduce(function(f,p){return f*p}),a=[[0,0]];a.push.apply(a,o);for(var s=1+n.length;s<e.shape.length;++s)a.push([0,0]);var u=e.pad(a),c=go(u.shape,n,i,!1),l=yo(c.length,n.length,!1),h=xo(u.shape,n,i,!1);return u.reshape(c).transpose(l).reshape(h)},t.prototype.reduce=function(e,n,o){var i=e.shape[0],a=e.shape[1],s=li(a),u=new Id({windowSize:s,inSize:a,batchSize:i},n),c=this.compileAndRun(u,[e],o);return c.shape[1]===1?c:this.reduce(c,n,o)},t.prototype.argReduce=function(e,n,o){o===void 0&&(o=null);var i=e.shape[0],a=e.shape[1];o!=null&&(i=o.shape[0],a=o.shape[1]);var s=li(a),u=new pp({windowSize:s,inSize:a,batchSize:i},n,o==null),c=[e];o!=null&&c.push(o);var l=this.compileAndRun(u,c,"int32");return l.shape[1]===1?l:this.argReduce(e,n,l)},t.prototype.argReducePacked=function(e,n,o){o===void 0&&(o=null);var i=o!=null?o.shape:e.shape,a=li(i[i.length-1]),s=new xp(i,a,n,o==null),u=o==null?[e]:[e,o],c=this.compileAndRun(s,u,"int32");return c.rank===e.rank?this.argReducePacked(e,n,c):c},t.prototype.sum=function(e,n){lt("sum",n,e.rank);var o=$e(e.shape,n),i=o[0],a=Y(o[1]),s=e.as2D(-1,a),u=ni(e.dtype);return this.reduce(s,"sum",u).reshape(i)},t.prototype.prod=function(e,n){if(this.shouldExecuteOnCPU([e]))return this.cpuBackend.prod(e,n);var o=$e(e.shape,n),i=o[0],a=Y(o[1]),s=e.as2D(-1,a),u=ni(e.dtype);return this.reduce(s,"prod",u).reshape(i)},t.prototype.unsortedSegmentSum=function(e,n,o){var i=0,a=qt([i],e.rank),s=e;a!=null&&(s=e.transpose(a),i=jt(1,e.rank)[0]);var u=function(p,d,m){for(var v=[],g=p.length,x=0;x<g;x++)x!==d?v.push(p[x]):v.push(m);return v}(s.shape,i,o),c=Y([s.shape[i]]),l=s.as2D(-1,c),h=ni(e.dtype),f=this.segOpCompute(l,"unsortedSegmentSum",n,h,o).reshape(u);return a!=null&&(f=f.transpose(la(a))),f},t.prototype.segOpCompute=function(e,n,o,i,a){var s=e.shape[0],u=e.shape[1],c=function(f,p){var d,m=!1;for(f<=tc?(d=f,m=!0):d=Bi(f,Math.floor(Math.sqrt(f)));!m;)d>p||d===f?m=!0:d=Bi(f,d+1);return d}(u,a),l=new Md({windowSize:c,inSize:u,batchSize:s,numSegments:a}),h=this.compileAndRun(l,[e,o],i);return h.shape[1]===a?h:(o=mo(0,a).tile([u/c]),this.segOpCompute(h,n,o,i,a))},t.prototype.argMinMaxReduce=function(e,n,o){var i=[n];if(lt("arg"+o.charAt(0).toUpperCase()+o.slice(1),i,e.rank),!L().getBool("WEBGL_PACK_REDUCE")||e.rank<=2){var a=$e(e.shape,i),s=a[0],u=Y(a[1]),c=e.as2D(-1,u);return this.argReduce(c,o).reshape(s)}return this.argReducePacked(e,o)},t.prototype.argMin=function(e,n){return this.argMinMaxReduce(e,n,"min")},t.prototype.argMax=function(e,n){return this.argMinMaxReduce(e,n,"max")},t.prototype.cumsum=function(e,n,o,i){if(n!==e.rank-1)throw new Error("WebGL cumsum shader expects an inner-most axis="+(e.rank-1)+" but got axis="+n);var a=new Wp(e.shape,o,i);return this.compileAndRun(a,[e])},t.prototype.equal=function(e,n){if(L().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(e,n,`
  return vec4(equal(a, b));
`,"bool");var o=new Te("return float(a == b);",e.shape,n.shape);return this.compileAndRun(o,[e,n],"bool")},t.prototype.notEqual=function(e,n){if(L().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(e,n,`
  return vec4(notEqual(a, b));
`,"bool");var o=new Te("return float(a != b);",e.shape,n.shape);return this.compileAndRun(o,[e,n],"bool")},t.prototype.less=function(e,n){if(this.shouldExecuteOnCPU([e,n]))return this.cpuBackend.less(e,n);if(L().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(e,n,`
  return vec4(lessThan(a, b));
`,"bool");var o=new Te("return float(a < b);",e.shape,n.shape);return this.compileAndRun(o,[e,n],"bool")},t.prototype.lessEqual=function(e,n){if(L().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(e,n,`
  return vec4(lessThanEqual(a, b));
`,"bool");var o=new Te("return float(a <= b);",e.shape,n.shape);return this.compileAndRun(o,[e,n],"bool")},t.prototype.greater=function(e,n){if(this.shouldExecuteOnCPU([e,n]))return this.cpuBackend.greater(e,n);if(L().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(e,n,`
  return vec4(greaterThan(a, b));
`,"bool");var o=new Te("return float(a > b);",e.shape,n.shape);return this.compileAndRun(o,[e,n],"bool")},t.prototype.greaterEqual=function(e,n){if(L().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(e,n,`
  return vec4(greaterThanEqual(a, b));
`,"bool");var o=new Te("return float(a >= b);",e.shape,n.shape);return this.compileAndRun(o,[e,n],"bool")},t.prototype.logicalNot=function(e){var n=new ie(e.shape,"return float(!(x >= 1.0));");return this.compileAndRun(n,[e])},t.prototype.logicalAnd=function(e,n){if(L().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(e,n,`
  return vec4(
    vec4(greaterThanEqual(a, vec4(1.0))) *
    vec4(greaterThanEqual(b, vec4(1.0))));
`,"bool");var o=new Te("return float(a >= 1.0 && b >= 1.0);",e.shape,n.shape);return this.compileAndRun(o,[e,n],"bool")},t.prototype.logicalOr=function(e,n){if(L().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(e,n,`
  return min(
    vec4(greaterThanEqual(a, vec4(1.0))) +
    vec4(greaterThanEqual(b, vec4(1.0))),
    vec4(1.0));
`,"bool");var o=new Te("return float(a >= 1.0 || b >= 1.0);",e.shape,n.shape);return this.compileAndRun(o,[e,n],"bool")},t.prototype.select=function(e,n,o){var i=new Bd(e.rank,n.shape,n.rank);return this.compileAndRun(i,[e,n,o],je(n.dtype,o.dtype))},t.prototype.where=function(e){po("tf.where() in webgl locks the UI thread. Call tf.whereAsync() instead");var n=e.dataSync();return ya(e.shape,n)},t.prototype.topk=function(e,n,o){return fc(e.dataSync(),e.shape,e.dtype,n)},t.prototype.min=function(e,n){lt("min",n,e.rank);var o=$e(e.shape,n),i=o[0],a=Y(o[1]),s=e.as2D(-1,a);return this.reduce(s,"min",s.dtype).reshape(i)},t.prototype.minimum=function(e,n){if(this.shouldExecuteOnCPU([e,n]))return this.cpuBackend.minimum(e,n);var o=L().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new Qt(`
  vec4 result = vec4(min(a, b));
  vec4 isNaN = min(vec4(isnan(a)) + vec4(isnan(b)), vec4(1.0));
  
  result.r = isNaN.r > 0. ? NAN : result.r;
  result.g = isNaN.g > 0. ? NAN : result.g;
  result.b = isNaN.b > 0. ? NAN : result.b;
  result.a = isNaN.a > 0. ? NAN : result.a;

  return result;
`,e.shape,n.shape):new Te(`
  if (isnan(a)) return a;
  if (isnan(b)) return b;

  return min(a, b);
`,e.shape,n.shape);return this.compileAndRun(o,[e,n])},t.prototype.mod=function(e,n){var o=L().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new Qt(`
  vec4 result = mod(a, b);
  vec4 isNaN = vec4(equal(b, vec4(0.0)));
  
  result.r = isNaN.r > 0. ? NAN : result.r;
  result.g = isNaN.g > 0. ? NAN : result.g;
  result.b = isNaN.b > 0. ? NAN : result.b;
  result.a = isNaN.a > 0. ? NAN : result.a;

  return result;
`,e.shape,n.shape):new Te(`if (b == 0.0) return NAN;
  return mod(a, b);`,e.shape,n.shape);return this.compileAndRun(o,[e,n])},t.prototype.max=function(e,n){if(this.shouldExecuteOnCPU([e]))return this.cpuBackend.max(e,n);lt("max",n,e.rank);var o=$e(e.shape,n),i=o[0],a=Y(o[1]),s=e.as2D(-1,a);return this.reduce(s,"max",s.dtype).reshape(i)},t.prototype.maximum=function(e,n){if(this.shouldExecuteOnCPU([e,n]))return this.cpuBackend.maximum(e,n);var o=L().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new Qt(`
  vec4 result = vec4(max(a, b));
  vec4 isNaN = min(vec4(isnan(a)) + vec4(isnan(b)), vec4(1.0));
  
  result.r = isNaN.r > 0. ? NAN : result.r;
  result.g = isNaN.g > 0. ? NAN : result.g;
  result.b = isNaN.b > 0. ? NAN : result.b;
  result.a = isNaN.a > 0. ? NAN : result.a;

  return result;
`,e.shape,n.shape):new Te(`
  if (isnan(a)) return a;
  if (isnan(b)) return b;

  return max(a, b);
`,e.shape,n.shape);return this.compileAndRun(o,[e,n])},t.prototype.all=function(e,n){lt("all",n,e.rank);var o=$e(e.shape,n),i=o[0],a=Y(o[1]),s=e.as2D(-1,a);return this.reduce(s,"all",s.dtype).reshape(i)},t.prototype.any=function(e,n){lt("any",n,e.rank);var o=$e(e.shape,n),i=o[0],a=Y(o[1]),s=e.as2D(-1,a);return this.reduce(s,"any",s.dtype).reshape(i)},t.prototype.realDivide=function(e,n){if(L().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(e,n,`
  // vec4 one = vec4(equal(a, b));
  // return one + (vec4(1.0) - one) * a / b;
  vec4 result = a / b;
  if(a.x == b.x) {
    result.x = 1.;
  }
  if(a.y == b.y) {
    result.y = 1.;
  }
  if(a.z == b.z) {
    result.z = 1.;
  }
  if(a.w == b.w) {
    result.w = 1.;
  }

  return result;
`,"float32",!0);var o=new Te(`
if (a == b) {
  return 1.0;
};
return a / b;`,e.shape,n.shape);return this.compileAndRun(o,[e,n],"float32")},t.prototype.floorDiv=function(e,n){if(L().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(e,n,`
  ivec4 ia = round(a);
  ivec4 ib = round(b);
  bvec4 cond = notEqual(ib, ivec4(0));
  ivec4 result = ivec4(0);
  vec4 s = sign(a) * sign(b);

  // Windows (D3D) wants guaranteed non-zero int division at compile-time.
  if (cond[0]) {
    result[0] = idiv(ia[0], ib[0], s[0]);
  }
  if (cond[1]) {
    result[1] = idiv(ia[1], ib[1], s[1]);
  }
  if (cond[2]) {
    result[2] = idiv(ia[2], ib[2], s[2]);
  }
  if (cond[3]) {
    result[3] = idiv(ia[3], ib[3], s[3]);
  }
  return vec4(result);
`,"int32");var o=new Te(`
  float s = sign(a) * sign(b);
  int ia = round(a);
  int ib = round(b);
  if (ib != 0) {
    // Windows (D3D) wants guaranteed non-zero int division at compile-time.
    return float(idiv(ia, ib, s));
  } else {
    return NAN;
  }
`,e.shape,n.shape);return this.compileAndRun(o,[e,n],"int32")},t.prototype.add=function(e,n){if(e.dtype==="complex64"&&n.dtype==="complex64")return this.complexSeparableBinaryOp(e,n,hi);if(this.shouldExecuteOnCPU([e,n]))return this.cpuBackend.add(e,n);var o=je(e.dtype,n.dtype);if(L().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(e,n,hi,o);var i=new Te(hi,e.shape,n.shape);return this.compileAndRun(i,[e,n],o)},t.prototype.packedUnaryOp=function(e,n,o){var i=new fr(e.shape,n);return this.compileAndRun(i,[e],o)},t.prototype.packedBinaryOp=function(e,n,o,i,a){a===void 0&&(a=!1);var s=new Qt(o,e.shape,n.shape,a);return this.compileAndRun(s,[e,n],i)},t.prototype.complexSeparableBinaryOp=function(e,n,o){var i=this,a=this.texData.get(e.dataId),s=this.texData.get(n.dataId),u=[[a.complexTensors.real,s.complexTensors.real],[a.complexTensors.imag,s.complexTensors.imag]].map(function(f){var p=f[0],d=f[1],m=i.makeComplexComponentTensorInfo(e,p),v=i.makeComplexComponentTensorInfo(n,d),g=new Te(o,e.shape,n.shape);return i.compileAndRun(g,[m,v],je(p.dtype,d.dtype))}),c=u[0],l=u[1],h=this.complex(c,l);return c.dispose(),l.dispose(),h},t.prototype.makeComplexComponentTensorInfo=function(e,n){return{dataId:n.dataId,dtype:n.dtype,shape:e.shape}},t.prototype.addN=function(e){if(e.length===1)return e[0];if(e.length>L().get("WEBGL_MAX_TEXTURES_IN_SHADER")){var n=Math.floor(e.length/2),o=this.addN(e.slice(0,n)),i=this.addN(e.slice(n));return this.addN([o,i])}var a=e.map(function(c){return c.dtype}).reduce(function(c,l){return je(c,l)}),s=e.map(function(c){return c.shape}),u=L().getBool("WEBGL_PACK")?new fp(e[0].shape,s):new hp(e[0].shape,s);return this.compileAndRun(u,e,a)},t.prototype.subtract=function(e,n){if(e.dtype==="complex64"&&n.dtype==="complex64")return this.complexSeparableBinaryOp(e,n,fi);if(this.shouldExecuteOnCPU([e,n]))return this.cpuBackend.subtract(e,n);var o=je(e.dtype,n.dtype);if(L().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(e,n,fi,e.dtype);var i=new Te(fi,e.shape,n.shape);return this.compileAndRun(i,[e,n],o)},t.prototype.pow=function(e,n){var o=L().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new Qt(`
  // isModRound1 has 1 for components with round(mod(b, 2.0)) == 1, 0 otherwise.
  vec4 isModRound1 = vec4(equal(round(mod(b, 2.0)), ivec4(1)));
  vec4 multiplier = sign(a) * isModRound1 + (vec4(1.0) - isModRound1);
  vec4 result = multiplier * pow(abs(a), b);

  // Ensure that a^0 = 1, including 0^0 = 1 as this correspond to TF and JS
  bvec4 isExpZero = equal(b, vec4(0.0));
  result.r = isExpZero.r ? 1.0 : result.r;
  result.g = isExpZero.g ? 1.0 : result.g;
  result.b = isExpZero.b ? 1.0 : result.b;
  result.a = isExpZero.a ? 1.0 : result.a;

  vec4 isNaN = vec4(lessThan(a, vec4(0.0))) * vec4(lessThan(floor(b), b));
  
  result.r = isNaN.r > 0. ? NAN : result.r;
  result.g = isNaN.g > 0. ? NAN : result.g;
  result.b = isNaN.b > 0. ? NAN : result.b;
  result.a = isNaN.a > 0. ? NAN : result.a;

  return result;
`,e.shape,n.shape):new Te(`
if(a < 0.0 && floor(b) < b){
  return NAN;
}
if (b == 0.0) {
  return 1.0;
}
return (round(mod(b, 2.0)) != 1) ?
    pow(abs(a), b) : sign(a) * pow(abs(a), b);
`,e.shape,n.shape),i=je(e.dtype,n.dtype);return this.compileAndRun(o,[e,n],i)},t.prototype.ceil=function(e){if(this.shouldExecuteOnCPU([e]))return this.cpuBackend.ceil(e);if(L().getBool("WEBGL_PACK_UNARY_OPERATIONS"))return this.packedUnaryOp(e,Xs,e.dtype);var n=new ie(e.shape,Xs);return this.compileAndRun(n,[e])},t.prototype.floor=function(e){if(this.shouldExecuteOnCPU([e]))return this.cpuBackend.floor(e);if(L().getBool("WEBGL_PACK_UNARY_OPERATIONS"))return this.packedUnaryOp(e,$s,e.dtype);var n=new ie(e.shape,$s);return this.compileAndRun(n,[e])},t.prototype.sign=function(e){var n=new ie(e.shape,`
  if (isnan(x)) { return 0.0; }
  return sign(x);
`);return this.compileAndRun(n,[e])},t.prototype.isNaN=function(e){var n=new ie(e.shape,"return float(isnan(x));");return this.compileAndRun(n,[e],"bool")},t.prototype.isInf=function(e){var n=new ie(e.shape,"return float(isinf(x));");return this.compileAndRun(n,[e],"bool")},t.prototype.isFinite=function(e){var n=new ie(e.shape,"return float(!isnan(x) && !isinf(x));");return this.compileAndRun(n,[e],"bool")},t.prototype.round=function(e){var n=new ie(e.shape,`
  // OpenGL ES does not support round function.
  // The algorithm is based on banker's rounding.
  float base = floor(x);
  if ((x - base) < 0.5) {
    return floor(x);
  } else if ((x - base) > 0.5) {
    return ceil(x);
  } else {
    if (mod(base, 2.0) == 0.0) {
      return base;
    } else {
      return base + 1.0;
    }
  }
`);return this.compileAndRun(n,[e])},t.prototype.exp=function(e){if(this.shouldExecuteOnCPU([e]))return this.cpuBackend.exp(e);if(L().getBool("WEBGL_PACK_UNARY_OPERATIONS"))return this.packedUnaryOp(e,Ys,e.dtype);var n=new ie(e.shape,Ys);return this.compileAndRun(n,[e])},t.prototype.expm1=function(e){if(this.shouldExecuteOnCPU([e]))return this.cpuBackend.expm1(e);if(L().getBool("WEBGL_PACK_UNARY_OPERATIONS"))return this.packedUnaryOp(e,Js,e.dtype);var n=new ie(e.shape,Js);return this.compileAndRun(n,[e])},t.prototype.softmax=function(e,n){var o=Ue([n],e.shape),i=this.max(e,o),a=at(i.shape,o),s=this.subtract(e,i.reshape(a)),u=this.exp(s),c=this.sum(u,o).reshape(a);return this.realDivide(u,c)},t.prototype.log=function(e){if(this.shouldExecuteOnCPU([e]))return this.cpuBackend.log(e);if(L().getBool("WEBGL_PACK_UNARY_OPERATIONS"))return this.packedUnaryOp(e,`
  vec4 result = log(x);
  vec4 isNaN = vec4(lessThan(x, vec4(0.0)));
  result.r = isNaN.r == 1.0 ? NAN : result.r;
  result.g = isNaN.g == 1.0 ? NAN : result.g;
  result.b = isNaN.b == 1.0 ? NAN : result.b;
  result.a = isNaN.a == 1.0 ? NAN : result.a;

  return result;
`,e.dtype);var n=new ie(e.shape,`if (x < 0.0) return NAN;
  return log(x);`);return this.compileAndRun(n,[e])},t.prototype.log1p=function(e){var n=new ie(e.shape,"return log(1.0 + x);");return this.compileAndRun(n,[e])},t.prototype.sqrt=function(e){var n=new ie(e.shape,"return sqrt(x);");return this.compileAndRun(n,[e])},t.prototype.rsqrt=function(e){if(this.shouldExecuteOnCPU([e]))return this.cpuBackend.rsqrt(e);var n=new ie(e.shape,"return inversesqrt(x);");return this.compileAndRun(n,[e])},t.prototype.reciprocal=function(e){var n=new ie(e.shape,"return 1.0 / x;");return this.compileAndRun(n,[e])},t.prototype.relu=function(e){var n;return n=L().getBool("WEBGL_PACK")?new fr(e.shape,wc):new ie(e.shape,yc),this.compileAndRun(n,[e])},t.prototype.relu6=function(e){var n;return n=L().getBool("WEBGL_PACK")?new fr(e.shape,_c):new ie(e.shape,xc),this.compileAndRun(n,[e])},t.prototype.prelu=function(e,n){var o=L().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new Qt(gc,e.shape,n.shape):new Te(mc,e.shape,n.shape);return this.compileAndRun(o,[e,n])},t.prototype.elu=function(e){if(L().getBool("WEBGL_PACK_UNARY_OPERATIONS"))return this.packedUnaryOp(e,Cc,e.dtype);var n=new ie(e.shape,bc);return this.compileAndRun(n,[e])},t.prototype.eluDer=function(e,n){var o=L().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new Qt(`
  vec4 bGTEZero = vec4(greaterThanEqual(b, vec4(0.)));
  return (bGTEZero * a) + ((vec4(1.0) - bGTEZero) * (a * (b + vec4(1.0))));
`,e.shape,n.shape):new Te("return (b >= 1.0) ? a : a * (b + 1.0);",e.shape,n.shape);return this.compileAndRun(o,[e,n])},t.prototype.selu=function(e){var n=new ie(e.shape,jd);return this.compileAndRun(n,[e])},t.prototype.int=function(e){var n=new ie(e.shape,"return float(int(x));");return this.compileAndRun(n,[e],"int32")},t.prototype.clip=function(e,n,o){var i,a=(i=L().getBool("WEBGL_PACK_CLIP")?new Ip(e.shape):new kp(e.shape)).getCustomSetupFunc(n,o);return this.compileAndRun(i,[e],null,a)},t.prototype.abs=function(e){if(this.shouldExecuteOnCPU([e]))return this.cpuBackend.abs(e);if(L().getBool("WEBGL_PACK_UNARY_OPERATIONS"))return this.packedUnaryOp(e,js,e.dtype);var n=new ie(e.shape,js);return this.compileAndRun(n,[e])},t.prototype.complexAbs=function(e){var n=this.texData.get(e.dataId),o=new Sp(e.shape),i=[this.makeComplexComponentTensorInfo(e,n.complexTensors.real),this.makeComplexComponentTensorInfo(e,n.complexTensors.imag)];return this.compileAndRun(o,i)},t.prototype.sigmoid=function(e){var n=new ie(e.shape,"return 1.0 / (1.0 + exp(-1.0 * x));");return this.compileAndRun(n,[e])},t.prototype.softplus=function(e){var n=new ie(e.shape,`
  float epsilon = 1.1920928955078125e-7;
  float threshold = log(epsilon) + 2.0;

  bool too_large = x > -threshold;
  bool too_small = x < threshold;

  float result;
  float exp_x = exp(x);

  if (too_large){
    result = x;
  }
  else if (too_small){
    result = exp_x;
  }
  else{
    result = log(exp_x + 1.0);
  }
  return result;
`);return this.compileAndRun(n,[e])},t.prototype.sin=function(e){var n=new ie(e.shape,Kd);return this.compileAndRun(n,[e])},t.prototype.cos=function(e){var n=new ie(e.shape,Xd);return this.compileAndRun(n,[e])},t.prototype.tan=function(e){var n=new ie(e.shape,"return tan(x);");return this.compileAndRun(n,[e])},t.prototype.asin=function(e){var n=new ie(e.shape,$d);return this.compileAndRun(n,[e])},t.prototype.acos=function(e){var n=new ie(e.shape,Yd);return this.compileAndRun(n,[e])},t.prototype.atan=function(e){var n=new ie(e.shape,Jd);return this.compileAndRun(n,[e])},t.prototype.atan2=function(e,n){var o=L().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new Qt(`
  vec4 result = atan(a, b);
  vec4 isNaN = min(vec4(isnan(a)) + vec4(isnan(b)), vec4(1.0));
  
  result.r = isNaN.r > 0. ? NAN : result.r;
  result.g = isNaN.g > 0. ? NAN : result.g;
  result.b = isNaN.b > 0. ? NAN : result.b;
  result.a = isNaN.a > 0. ? NAN : result.a;

  return result;
`,e.shape,n.shape):new Te(`
  if (isnan(a)) return a;
  if (isnan(b)) return b;

  return atan(a, b);
`,e.shape,n.shape);return this.compileAndRun(o,[e,n])},t.prototype.sinh=function(e){var n=new ie(e.shape,`
  float e2x = exp(x);
  return (e2x - 1.0 / e2x) / 2.0;
`);return this.compileAndRun(n,[e])},t.prototype.cosh=function(e){var n=new ie(e.shape,`
  float e2x = exp(-x);
  return (e2x + 1.0 / e2x) / 2.0;
`);return this.compileAndRun(n,[e])},t.prototype.tanh=function(e){var n=new ie(e.shape,`
  float e2x = exp(-2.0 * abs(x));
  return sign(x) * (1.0 - e2x) / (1.0 + e2x);
`);return this.compileAndRun(n,[e])},t.prototype.asinh=function(e){var n=new ie(e.shape,Qd);return this.compileAndRun(n,[e])},t.prototype.acosh=function(e){var n=new ie(e.shape,Zd);return this.compileAndRun(n,[e])},t.prototype.atanh=function(e){var n=new ie(e.shape,ev);return this.compileAndRun(n,[e])},t.prototype.erf=function(e){var n=new ie(e.shape,`
  // Error function is calculated approximately with elementary function.
  // See "Handbook of Mathematical Functions with Formulas,
  // Graphs, and Mathematical Tables", Abramowitz and Stegun.
  float p = 0.3275911;
  float a1 = 0.254829592;
  float a2 = -0.284496736;
  float a3 = 1.421413741;
  float a4 = -1.453152027;
  float a5 = 1.061405429;

  float sign = sign(x);
  x = abs(x);
  float t = 1.0 / (1.0 + p * x);
  return sign * (1.0 - (((((a5*t + a4)*t) + a3)*t + a2)*t + a1)*t*exp(-x*x));
`);return this.compileAndRun(n,[e])},t.prototype.step=function(e,n){var o=new ie(e.shape,function(i){return i===void 0&&(i=0),It+`
    return x > 0.0 ? 1.0 : float(`+i+`);
  `}(n));return this.compileAndRun(o,[e])},t.prototype.conv2dByMatMul=function(e,n,o,i,a,s){var u=e.shape,c=this.texData.get(e.dataId),l=o.inChannels,h=u[0]*u[1]*u[2],f=o.outChannels,p=o.dataFormat==="channelsLast",d=(h===1||f===1)&&l>1e3,m=u[2]%2!=0&&!!c.isPacked;if(d||!L().getBool("WEBGL_LAZILY_UNPACK")||!L().getBool("WEBGL_PACK_BINARY_OPERATIONS")||!m){var v=p?u[0]*u[1]*u[2]:u[0]*u[2]*u[3],g=this.reshape(e,[1,v,o.inChannels]),x=this.reshape(n,[1,o.inChannels,o.outChannels]);return this.reshape(this.fusedBatchMatMul({a:g,b:x,transposeA:!1,transposeB:!1,bias:i,activation:a,preluActivationWeights:s}),o.outShape)}var b=p?u[0]*u[1]*(u[2]+1):u[0]*u[2]*(u[3]+1),y={dataId:e.dataId,shape:[1,b,o.inChannels],dtype:e.dtype},w=c.shape;c.shape=c.shape.slice(),c.shape[c.shape.length-2]++,k(Vr(c.shape,y.shape),function(){return"packed reshape "+c.shape+" to "+y.shape+" isn't free"});var _=this.reshape(n,[1,o.inChannels,o.outChannels]),S=this.fusedBatchMatMul({a:y,b:_,transposeA:!1,transposeB:!1,bias:i,activation:a,preluActivationWeights:s}),I=this.texData.get(S.dataId);return k(I.isPacked,function(){return"batchMatMul result is expected to be packed"}),c.shape=w,I.shape=o.outShape,N.makeTensorFromDataId(S.dataId,o.outShape,S.dtype)},t.prototype.conv2dWithIm2Row=function(e,n,o,i,a,s){var u=o.filterWidth,c=o.filterHeight,l=o.inChannels,h=o.outWidth,f=o.outHeight,p=o.dataFormat==="channelsLast",d=u*c*l,m=f*h,v=[d,m],g=e.squeeze([0]),x=n.reshape([1,d,-1]),b=new md(v,g.shape,o),y=this.compileAndRun(b,[g]).reshape([1,v[0],v[1]]),w=i!=null,_=s!=null,S=a?qr(a,!0):null,I=new pi(y.shape,[1,m,o.outChannels],!0,!1,w,S,_),E=[y,x];i&&E.push(i),_&&E.push(s);var R=this.compileAndRun(I,E);return p?R.reshape([1,f,h,o.outChannels]):R.reshape([1,o.outChannels,f,h])},t.prototype.fusedConv2d=function(e){var n=e.input,o=e.filter,i=e.convInfo,a=e.bias,s=e.activation,u=e.preluActivationWeights;if(i.filterHeight===1&&i.filterWidth===1&&i.dilationHeight===1&&i.dilationWidth===1&&i.strideHeight===1&&i.strideWidth===1&&(i.padInfo.type==="SAME"||i.padInfo.type==="VALID"))return this.conv2dByMatMul(n,o,i,a,s,u);if(L().getBool("WEBGL_CONV_IM2COL")&&n.shape[0]===1)return this.conv2dWithIm2Row(n,o,i,a,s,u);var c=a!=null,l=u!=null,h=s?qr(s,!1):null,f=new Bs(i,c,h,l),p=[n,o];return a&&p.push(a),u&&p.push(u),this.compileAndRun(f,p)},t.prototype.conv2d=function(e,n,o){if(o.filterHeight===1&&o.filterWidth===1&&o.dilationHeight===1&&o.dilationWidth===1&&o.strideHeight===1&&o.strideWidth===1&&(o.padInfo.type==="SAME"||o.padInfo.type==="VALID"))return this.conv2dByMatMul(e,n,o);if(L().getBool("WEBGL_CONV_IM2COL")&&e.shape[0]===1)return this.conv2dWithIm2Row(e,n,o);var i=new Bs(o);return this.compileAndRun(i,[e,n])},t.prototype.conv2dDerInput=function(e,n,o){var i=new Np(o);return this.compileAndRun(i,[e,n])},t.prototype.conv2dDerFilter=function(e,n,o){var i=new Dp(o);return this.compileAndRun(i,[e,n])},t.prototype.fusedDepthwiseConv2D=function(e){var n,o=e.input,i=e.filter,a=e.convInfo,s=e.bias,u=e.activation,c=e.preluActivationWeights,l=L().getBool("WEBGL_PACK_DEPTHWISECONV")&&a.strideWidth<=2&&a.outChannels/a.inChannels==1,h=u?qr(u,l):null,f=[o,i],p=s!=null,d=c!=null;return p&&f.push(s),d&&f.push(c),l?(n=new Ws(a,p,h,d),this.compileAndRun(n,f)):(n=new Ls(a,p,h,d),this.compileAndRun(n,f))},t.prototype.depthwiseConv2D=function(e,n,o){var i;return L().getBool("WEBGL_PACK_DEPTHWISECONV")&&o.strideWidth<=2&&o.outChannels/o.inChannels==1?(i=new Ws(o),this.compileAndRun(i,[e,n])):(i=new Ls(o),this.compileAndRun(i,[e,n]))},t.prototype.depthwiseConv2DDerInput=function(e,n,o){var i=new Mp(o);return this.compileAndRun(i,[e,n])},t.prototype.depthwiseConv2DDerFilter=function(e,n,o){var i=new Op(o);return this.compileAndRun(i,[e,n])},t.prototype.conv3d=function(e,n,o){var i=new Bp(o);return this.compileAndRun(i,[e,n])},t.prototype.conv3dDerInput=function(e,n,o){var i=new Pp(o);return this.compileAndRun(i,[e,n])},t.prototype.conv3dDerFilter=function(e,n,o){var i=new Fp(o);return this.compileAndRun(i,[e,n])},t.prototype.maxPool=function(e,n){var o=new di(n,"max",!1);return this.compileAndRun(o,[e])},t.prototype.avgPool=function(e,n){var o=new di(n,"avg",!1);return this.compileAndRun(o,[e],"float32")},t.prototype.maxPoolBackprop=function(e,n,o,i){var a=new di(i,"max",!0),s=this.compileAndRun(a,[n]),u=new bd(i),c=this.compileAndRun(u,[e,s],n.dtype);return s.dispose(),c},t.prototype.avgPoolBackprop=function(e,n,o){var i=new bp(o);return this.compileAndRun(i,[e],n.dtype)},t.prototype.cast=function(e,n){return sc(e,n,this)},t.prototype.unstack=function(e,n){for(var o=e.shape[n],i=new Array(e.rank-1),a=0,s=0;s<e.rank;s++)s!==n&&(i[a++]=e.shape[s]);var u=new Array(e.rank).fill(0),c=e.shape.slice();c[n]=1;var l=new Array(o);for(s=0;s<l.length;s++)u[n]=s,l[s]=this.slice(e,u,c).reshape(i);return l},t.prototype.avgPool3d=function(e,n){var o=new vi(n,"avg",!1);return this.compileAndRun(o,[e],"float32")},t.prototype.avgPool3dBackprop=function(e,n,o){var i=new wp(o);return this.compileAndRun(i,[e],n.dtype)},t.prototype.maxPool3d=function(e,n){var o=new vi(n,"max",!1);return this.compileAndRun(o,[e],"float32")},t.prototype.maxPool3dBackprop=function(e,n,o,i){var a=new vi(i,"max",!0),s=this.compileAndRun(a,[n]),u=new wd(i),c=this.compileAndRun(u,[e,s],n.dtype);return s.dispose(),c},t.prototype.reshape=function(e,n){var o=this.texData.get(e.dataId);if(o.isPacked&&!Vr(e.shape,n)&&(o.texture===null||!Vr(o.shape,n))){var i=this.packedReshape(e,n);return N.makeTensorFromDataId(i.dataId,i.shape,i.dtype)}return qi(e,n)},t.prototype.resizeBilinear=function(e,n,o,i){var a=L().getBool("WEBGL_PACK_IMAGE_OPERATIONS")?new Dd(e.shape,n,o,i):new Td(e.shape,n,o,i);return this.compileAndRun(a,[e],"float32")},t.prototype.resizeBilinearBackprop=function(e,n,o){var i=new Ad(e,n,o);return this.compileAndRun(i,[e])},t.prototype.resizeNearestNeighbor=function(e,n,o,i){var a=new Fd(e.shape,n,o,i);return this.compileAndRun(a,[e])},t.prototype.resizeNearestNeighborBackprop=function(e,n,o){var i=new Nd(e,n,o);return this.compileAndRun(i,[e])},t.prototype.multinomial=function(e,n,o,i){var a=n?e:nn(e),s=a.shape[0],u=a.shape[1],c=new _d(s,u,o),l=c.getCustomSetupFunc(i);return this.compileAndRun(c,[a],"int32",l)},t.prototype.oneHot=function(e,n,o,i){var a=new Cd(e.size,n,o,i);return this.compileAndRun(a,[e])},t.prototype.diag=function(e){var n=new Gp(e.size);return this.compileAndRun(n,[e])},t.prototype.nonMaxSuppression=function(e,n,o,i,a){return po("tf.nonMaxSuppression() in webgl locks the UI thread. Call tf.nonMaxSuppressionAsync() instead"),ma(e.dataSync(),n.dataSync(),o,i,a)},t.prototype.cropAndResize=function(e,n,o,i,a,s){var u=new Lp(e.shape,n.shape,i,a,s);return this.compileAndRun(u,[e,n,o],"float32")},t.prototype.depthToSpace=function(e,n,o){k(n>1,function(){return"blockSize should be > 1 for depthToSpace, but was: "+n});var i=e.shape[0],a=o==="NHWC"?e.shape[1]:e.shape[2],s=o==="NHWC"?e.shape[2]:e.shape[3],u=o==="NHWC"?e.shape[3]:e.shape[1],c=a*n,l=s*n,h=u/(n*n),f=new zp(o==="NHWC"?[i,c,l,h]:[i,h,c,l],n,o);return this.compileAndRun(f,[e])},t.prototype.split=function(e,n,o){return lc(e,n,o)},t.prototype.scatterND=function(e,n,o){var i=bo(0,e,o),a=i.sliceRank,s=i.numUpdates,u=i.sliceSize,c=i.strides,l=i.outputSize,h=[l/u,u],f=e.reshape([s,a]),p=n.reshape([s,u]);if(l===0)return qi(Ke([]),o);var d=q(0),m=new Gs(s,a,f.rank,p.rank,c,h);return this.compileAndRun(m,[p,f,d]).reshape(o)},t.prototype.sparseToDense=function(e,n,o,i){var a=bo(0,e,o),s=a.sliceRank,u=a.numUpdates,c=a.strides,l=a.outputSize,h=new Gs(u,s,e.rank,n.rank,c,[l,1]);return this.compileAndRun(h,[n,e,i]).reshape(o)},t.prototype.fft=function(e){return this.fftImpl(e,!1)},t.prototype.ifft=function(e){return this.fftImpl(e,!0)},t.prototype.fftImpl=function(e,n){var o=this.texData.get(e.dataId),i=new Vs(Xp,e.shape,n),a=new Vs($p,e.shape,n),s=[this.makeComplexComponentTensorInfo(e,o.complexTensors.real),this.makeComplexComponentTensorInfo(e,o.complexTensors.imag)],u=this.compileAndRun(i,s),c=this.compileAndRun(a,s),l=this.complex(u,c).as2D(e.shape[0],e.shape[1]);return u.dispose(),c.dispose(),l},t.prototype.gatherND=function(e,n){var o=n.shape,i=o[o.length-1],a=ec(e,n),s=a[0],u=a[1],c=a[2],l=a[3],h=n.reshape([u,i]),f=e.reshape([e.size/c,c]),p=new Qp(i,l,[u,c]);return this.compileAndRun(p,[f,h]).reshape(s)},t.prototype.fill=function(e,n,o){if((o=o||Sr(n))==="string"){var i=co(o,Y(e));return i.fill(n),N.makeTensor(i,e,o,this)}var a=new Yp(e,n),s=a.getCustomSetupFunc(n);return this.compileAndRun(a,[],o,s)},t.prototype.onesLike=function(e){if(e.dtype==="string")throw new Error("onesLike is not supported under string dtype");return this.fill(e.shape,1,e.dtype)},t.prototype.zerosLike=function(e){return this.fill(e.shape,e.dtype==="string"?"":0,e.dtype)},t.prototype.linspace=function(e,n,o){return uc(e,n,o)},t.prototype.makeTensorInfo=function(e,n){var o=this.write(null,e,n);return this.texData.get(o).usage=null,{dataId:o,shape:e,dtype:n}},t.prototype.makeOutput=function(e,n){var o=this.makeTensorInfo(e,n).dataId;return N.makeTensorFromDataId(o,e,n,this)},t.prototype.unpackTensor=function(e){var n=new nv(e.shape);return this.runWebGLProgram(n,[e],e.dtype)},t.prototype.packTensor=function(e){var n=new Ed(e.shape);return this.runWebGLProgram(n,[e],e.dtype,null,!0)},t.prototype.packedReshape=function(e,n){var o=[ho(e.shape)].concat(fo(e.shape)),i={dtype:e.dtype,shape:o,dataId:e.dataId},a=[ho(n)].concat(fo(n)),s=new Sd(a,o),u=this.runWebGLProgram(s,[i],e.dtype,null,!0);return{dataId:u.dataId,shape:n,dtype:u.dtype}},t.prototype.decode=function(e){var n,o=this.texData.get(e),i=o.isPacked,a=o.shape,s=o.dtype,u=ci(a);return n=i?new Vp(u):new Up(u),{dtype:s,shape:a,dataId:this.runWebGLProgram(n,[{shape:u,dtype:s,dataId:e}],s,null,!0).dataId}},t.prototype.runWebGLProgram=function(e,n,o,i,a){var s=this;a===void 0&&(a=!1);var u=this.makeTensorInfo(e.outputShape,o),c=this.texData.get(u.dataId);if(e.packedOutput&&(c.isPacked=!0),e.outPackingScheme===br.DENSE){var l=vr(e.outputShape);c.texShape=l.map(function(b){return 2*b})}if(e.outTexUsage!=null&&(c.usage=e.outTexUsage),Y(u.shape)===0)return c.values=yr(u.dtype,0),u;var h=[],f=n.map(function(b){if(b.dtype==="complex64")throw new Error("GPGPUProgram does not support complex64 input. For complex64 dtypes, please separate the program into real and imaginary parts.");var y=s.texData.get(b.dataId);if(y.texture==null){if(!e.packedInputs&&Y(b.shape)<=L().getNumber("WEBGL_SIZE_UPLOAD_UNIFORM"))return{shape:b.shape,texData:null,isUniform:!0,uniformValues:y.values};e.packedInputs&&(y.isPacked=!0,y.shape=b.shape)}else if(!!y.isPacked!=!!e.packedInputs)b=y.isPacked?s.unpackTensor(b):s.packTensor(b),h.push(b),y=s.texData.get(b.dataId);else if(y.isPacked&&!Vr(y.shape,b.shape)){var w=b,_=b.shape;b.shape=y.shape,b=s.packedReshape(b,_),h.push(b),y=s.texData.get(b.dataId),w.shape=_}return s.uploadToGPU(b.dataId),{shape:b.shape,texData:y,isUniform:!1}});this.uploadToGPU(u.dataId);var p,d={shape:u.shape,texData:c,isUniform:!1},m=function(b,y,w){var _="";y.concat(w).forEach(function(E){var R=E.texData!=null&&E.texData.slice!=null&&E.texData.slice.flatOffset>0,D=E.isUniform?"uniform":E.texData.texShape;_+=E.shape+"_"+D+"_"+R});var S=b.userCode,I=b.constructor.name;return I+="_"+_+"_"+S}(e,f,d),v=this.getAndSaveBinary(m,function(){return function(b,y,w,_){var S=y.userCode,I=w.map(function(W,G){var H={logicalShape:W.shape,texShape:W.isUniform?null:W.texData.texShape,isUniform:W.isUniform,isPacked:!W.isUniform&&W.texData.isPacked,flatOffset:null};return W.texData!=null&&W.texData.slice!=null&&W.texData.slice.flatOffset>0&&(H.flatOffset=W.texData.slice.flatOffset),{name:y.variableNames[G],shapeInfo:H}}),E=I.map(function(W){return W.shapeInfo}),R={logicalShape:_.shape,texShape:_.texData.texShape,isUniform:!1,isPacked:_.texData.isPacked,flatOffset:null},D=dp(I,R,S,y.packedInputs),A=b.createProgram(D),M=null,O=b.getUniformLocation(A,"NAN",!1);L().getNumber("WEBGL_VERSION")===1&&(M=b.getUniformLocation(A,"INFINITY",!1));for(var B={},V=0;V<y.variableNames.length;V++){var U=y.variableNames[V];B[U]=b.getUniformLocation(A,U,!1),B["offset"+U]=b.getUniformLocation(A,"offset"+U,!1)}return{program:y,source:D,webGLProgram:A,uniformLocations:B,inShapeInfos:E,outShapeInfo:R,infLoc:M,nanLoc:O}}(s.gpgpu,e,f,d)}),g=this.activeTimers!=null;if(g&&(p=this.startTimer()),function(b,y,w,_,S){zs(y.inShapeInfos,w),zs([y.outShapeInfo],[_]);var I=_.texData.texture,E=_.texData.texShape;_.texData.isPacked?b.setOutputPackedMatrixTexture(I,E[0],E[1]):b.setOutputMatrixTexture(I,E[0],E[1]),b.setProgram(y.webGLProgram),L().getNumber("WEBGL_VERSION")===1&&y.infLoc!==null&&b.gl.uniform1f(y.infLoc,1/0),y.nanLoc!==null&&b.gl.uniform1f(y.nanLoc,NaN),w.forEach(function(R,D){var A=y.program.variableNames[D],M=y.uniformLocations[A],O=y.uniformLocations["offset"+A];if(M!=null)if(R.isUniform)if(Y(R.shape)<2)b.gl.uniform1f(M,R.uniformValues[0]);else{var B=R.uniformValues;B instanceof Float32Array||(B=new Float32Array(B)),b.gl.uniform1fv(M,B)}else R.texData.slice!=null&&O!=null&&b.gl.uniform1i(O,R.texData.slice.flatOffset),b.setInputMatrixTexture(R.texData.texture,M,D)}),S!=null&&S(b,y.webGLProgram),b.executeProgram()}(this.gpgpu,v,f,d,i),h.forEach(function(b){return s.disposeData(b.dataId)}),g&&(p=this.endTimer(p),this.activeTimers.push({name:e.constructor.name,query:this.getQueryTime(p)})),!L().getBool("WEBGL_LAZILY_UNPACK")&&c.isPacked&&a===!1){var x=this.unpackTensor(u);return this.disposeData(u.dataId),x}return u},t.prototype.compileAndRun=function(e,n,o,i,a){a===void 0&&(a=!1),o=o||n[0].dtype;var s=this.runWebGLProgram(e,n,o,i,a);return N.makeTensorFromDataId(s.dataId,s.shape,s.dtype)},t.prototype.getAndSaveBinary=function(e,n){return e in this.binaryCache||(this.binaryCache[e]=n()),this.binaryCache[e]},t.prototype.getTextureManager=function(){return this.textureManager},t.prototype.dispose=function(){var e=this;this.disposed||(L().getBool("IS_TEST")||Object.keys(this.binaryCache).forEach(function(n){e.gpgpu.deleteProgram(e.binaryCache[n].webGLProgram),delete e.binaryCache[n]}),this.textureManager.dispose(),this.canvas!=null&&typeof HTMLCanvasElement<"u"&&this.canvas instanceof HTMLCanvasElement?this.canvas.remove():this.canvas=null,this.gpgpuCreatedLocally&&(this.gpgpu.program=null,this.gpgpu.dispose()),this.disposed=!0)},t.prototype.floatPrecision=function(){var e=this;return this.floatPrecisionValue==null&&(this.floatPrecisionValue=K(function(){if(!L().get("WEBGL_RENDER_FLOAT32_ENABLED")){var n=L().getBool("DEBUG");L().set("DEBUG",!1);var o=e.abs(q(1e-8)).dataSync()[0];if(L().set("DEBUG",n),o>0)return 32}return 16})),this.floatPrecisionValue},t.prototype.epsilon=function(){return this.floatPrecision()===32?1e-7:1e-4},t.prototype.uploadToGPU=function(e){var n,o=this.texData.get(e),i=o.shape,a=o.dtype,s=o.values,u=o.texture,c=o.usage,l=o.isPacked;if(u==null){var h,f=this.activeTimers!=null;f&&(h=Ft());var p=o.texShape;if(p==null&&(p=lf(i,l),o.texShape=p),s!=null){var d=ci(i),m=void 0,v=p[1],g=p[0],x=s instanceof Uint8Array;l?(v=(n=Tr(p[0],p[1]))[0],g=n[1],m=new Kp(d,[g,v],x)):m=new jp(d,[g,v],x);var b=this.makeTensorInfo([g,v],a);this.texData.get(b.dataId).usage=x?ft.PIXELS:ft.UPLOAD,this.gpgpu.uploadDenseMatrixToTexture(this.getTexture(b.dataId),v,g,s);var y=this.runWebGLProgram(m,[b],a,null,!0),w=this.texData.get(y.dataId);o.texture=w.texture,o.texShape=w.texShape,o.isPacked=w.isPacked,o.usage=w.usage,this.disposeData(b.dataId),this.texData.delete(y.dataId),o.values=null,f&&(this.uploadWaitMs+=Ft()-h)}else{var _=this.acquireTexture(p,c,a,l);o.texture=_}}},t.prototype.convertAndCacheOnCPU=function(e,n){var o=this.texData.get(e),i=o.dtype;return this.releaseGPUData(e),n!=null&&(o.values=function(a,s){if(s==="float32"||s==="complex64")return a;if(s==="int32"||s==="bool"){for(var u=s==="int32"?new Int32Array(a.length):new Uint8Array(a.length),c=0;c<u.length;++c)u[c]=Math.round(a[c]);return u}throw new Error("Unknown dtype "+s)}(n,i)),o.values},t.prototype.acquireTexture=function(e,n,o,i){if(this.numBytesInGPU+=this.computeBytes(e,o),!this.warnedAboutMemory&&this.numBytesInGPU>1024*this.numMBBeforeWarning*1024){var a=(this.numBytesInGPU/1024/1024).toFixed(2);this.warnedAboutMemory=!0,console.warn("High memory usage in GPU: "+a+" MB, most likely due to a memory leak")}return this.textureManager.acquireTexture(e,n,i)},t.prototype.computeBytes=function(e,n){return e[0]*e[1]*Mu(n)},t}(ic);Gu()&&N.registerBackend("webgl",function(){return new ov},2);var iv=T({square_:function(r){var t=C(r,"x","square"),e=[t];return N.runKernelFunc(function(n,o){return o([t]),n.square(t)},{x:t},null,"Square",{},e,[])}}),_r="SquaredDifference",Ec=T({squaredDifference_:function(r,t){var e,n=C(r,"a","squaredDifference"),o=C(t,"b","squaredDifference");e=Se(n,o),n=e[0],o=e[1],le(n.shape,o.shape);var i={a:n,b:o},a=[n,o];return N.runKernelFunc(function(s,u){var c=s.squaredDifference(n,o);return u([n,o]),c},i,function(s,u){var c=u[0],l=u[1],h=q(2);return{a:function(){return s.mul(c.sub(l).mul(h))},b:function(){return s.mul(l.sub(c).mul(h))}}},_r,{},a,[])}}),av=T({abs_:function(r){var t=C(r,"x","abs");return t.dtype==="complex64"?N.runKernelFunc(function(e){return e.complexAbs(t)},{$x:t}):N.runKernelFunc(function(e,n){var o=e.abs(t);return n([t]),o},{x:t},function(e,n){var o=n[0];return{x:function(){return e.mul(o.toFloat().step(-1))}}},"Abs")}}),sv=T({acos_:function(r){var t=C(r,"x","acos");return N.runKernelFunc(function(e,n){var o=e.acos(t);return n([t]),o},{$x:t},function(e,n){var o=n[0];return{$x:function(){return e.divStrict(q(1).sub(o.toFloat().square()).sqrt()).neg()}}})}}),uv=T({acosh_:function(r){var t=C(r,"x","acosh");return N.runKernelFunc(function(e,n){var o=e.acosh(t);return n([t]),o},{$x:t},function(e,n){var o=n[0];return{$x:function(){return e.divStrict(o.toFloat().square().sub(1).sqrt())}}})}}),cv=T({asin_:function(r){var t=C(r,"x","asin");return N.runKernelFunc(function(e,n){var o=e.asin(t);return n([t]),o},{$x:t},function(e,n){var o=n[0];return{$x:function(){return e.divStrict(q(1).sub(o.toFloat().square()).sqrt())}}})}}),lv=T({asinh_:function(r){var t=C(r,"x","asinh");return N.runKernelFunc(function(e,n){var o=e.asinh(t);return n([t]),o},{$x:t},function(e,n){var o=n[0];return{$x:function(){return e.divStrict(q(1).add(o.toFloat().square()).sqrt())}}})}}),hv=T({atan_:function(r){var t=C(r,"x","atan");return N.runKernelFunc(function(e,n){var o=e.atan(t);return n([t]),o},{$x:t},function(e,n){var o=n[0];return{$x:function(){return e.div(o.toFloat().square().add(1))}}})}}),fv=T({atanh_:function(r){var t=C(r,"x","atanh");return N.runKernelFunc(function(e,n){var o=e.atanh(t);return n([t]),o},{$x:t},function(e,n){var o=n[0];return{$x:function(){return e.div(q(1).sub(o.toFloat().square()))}}})}}),pv=T({ceil_:function(r){var t=C(r,"x","ceil");return N.runKernelFunc(function(e){return e.ceil(t)},{$x:t},function(e){return{$x:function(){return me(e)}}})}}),_a=T({clipByValue_:function(r,t,e){var n=C(r,"x","clipByValue");k(t<=e,function(){return"Error in clip: min ("+t+") must be less than or equal to max ("+e+")."});var o=[n],i={min:t,max:e};return N.runKernelFunc(function(a,s){var u=a.clip(n,t,e);return s([n]),u},{x:n},function(a,s){var u=s[0];return{x:function(){return a.where(u.greaterEqual(t).logicalAnd(u.lessEqual(e)),me(a))}}},"ClipByValue",i,o)}}),dv=T({cos_:function(r){var t=C(r,"x","cos"),e=[t];return N.runKernelFunc(function(n,o){var i=n.cos(t);return o([t]),i},{x:t},function(n,o){var i=o[0];return{x:function(){return i.toFloat().sin().neg().mul(n)}}},"Cos",{},e)}}),vv=T({cosh_:function(r){var t=C(r,"x","cosh");return N.runKernelFunc(function(e,n){var o=e.cosh(t);return n([t]),o},{$x:t},function(e,n){var o=n[0];return{$x:function(){return o.toFloat().sinh().mulStrict(e)}}})}}),mv=T({erf_:function(r){var t=C(r,"x","erf");return k(t.dtype==="int32"||t.dtype==="float32",function(){return"Input dtype must be `int32` or `float32`."}),t.dtype==="int32"&&(t=t.toFloat()),N.runKernelFunc(function(e,n){var o=e.erf(t);return n([t]),o},{$x:t},function(e,n){var o=n[0];return{$x:function(){return e.mul(o.square().neg().exp().mul(2/Math.sqrt(Math.PI)))}}})}}),Ki=T({exp_:function(r){var t=C(r,"x","exp");return N.runKernelFunc(function(e,n){var o=e.exp(t);return n([o]),o},{x:t},function(e,n){return{x:function(){return e.mulStrict(n[0])}}},"Exp",{},[],[!0])}}),gv=T({expm1_:function(r){var t=C(r,"x","expm1");return N.runKernelFunc(function(e,n){var o=e.expm1(t);return n([t]),o},{$x:t},function(e,n){var o=n[0];return{$x:function(){return e.mul(o.exp())}}})}}),yv=T({floor_:function(r){var t=C(r,"x","floor");return N.runKernelFunc(function(e){return e.floor(t)},{$x:t},function(e){return{$x:function(){return me(e)}}})}}),xv=T({log_:function(r){var t=C(r,"x","log"),e=[t];return N.runKernelFunc(function(n,o){var i=n.log(t);return o([t]),i},{x:t},function(n,o){var i=o[0];return{x:function(){return n.div(i.toFloat())}}},"Log",{},e)}}),bv=T({log1p_:function(r){var t=C(r,"x","log1p");return N.runKernelFunc(function(e,n){var o=e.log1p(t);return n([t]),o},{$x:t},function(e,n){var o=n[0];return{$x:function(){return e.div(o.add(1))}}})}}),wv=T({logSigmoid_:function(r){var t=C(r,"x","logSigmoid");return N.runKernelFunc(function(e,n){var o=e.softplus(t.neg()).neg();return n([t]),o},{$x:t},function(e,n){var o=n[0];return{$x:function(){return e.mul(o.neg().sigmoid())}}})}}),Eo=T({neg_:function(r){var t=C(r,"x","neg"),e=[t];return N.runKernelFunc(function(n){return n.neg(t)},{x:t},function(n){return{x:function(){return n.neg()}}},"Neg",{},e)}}),_v=T({reciprocal_:function(r){var t=C(r,"x","reciprocal");return N.runKernelFunc(function(e,n){var o=e.reciprocal(t);return n([t]),o},{$x:t},function(e,n){var o=n[0];return{$x:function(){return e.div(o.square().neg())}}})}}),Cv=T({round_:function(r){var t=C(r,"x","round");return N.runKernelFunc(function(e){return e.round(t)},{$x:t},function(e){return{$x:function(){return me(e)}}})}}),Rc=T({rsqrt_:function(r){var t=C(r,"x","rsqrt"),e=[t];return N.runKernelFunc(function(n,o){var i=n.rsqrt(t);return o([t]),i},{x:t},function(n,o){var i=o[0];return{x:function(){return n.div(i.pow(1.5).mul(2)).neg()}}},"Rsqrt",{},e)}}),kc=T({sigmoid_:function(r){var t=C(r,"x","sigmoid");return N.runKernelFunc(function(e,n){var o=e.sigmoid(t);return n([o]),o},{x:t},function(e,n){var o=n[0];return{x:function(){return e.mul(o.mul(q(1).sub(o)))}}},"Sigmoid")}}),Ev=T({sign_:function(r){var t=C(r,"x","sign");return N.runKernelFunc(function(e){return e.sign(t)},{$x:t},function(e){return{$x:function(){return me(e)}}})}}),Rv=T({isNaN_:function(r){var t=C(r,"x","isNaN");return N.runKernelFunc(function(e){return e.isNaN(t)},{$x:t},function(e){return{$x:function(){return me(e)}}})}}),kv=T({isInf_:function(r){var t=C(r,"x","isInf");return N.runKernelFunc(function(e){return e.isInf(t)},{$x:t},function(e){return{$x:function(){return me(e)}}})}}),Iv=T({isFinite_:function(r){var t=C(r,"x","isFinite");return N.runKernelFunc(function(e){return e.isFinite(t)},{$x:t},function(e){return{$x:function(){return me(e)}}})}}),Sv=T({sin_:function(r){var t=C(r,"x","sin"),e=[t];return N.runKernelFunc(function(n,o){var i=n.sin(t);return o([t]),i},{x:t},function(n,o){var i=o[0];return{x:function(){return i.toFloat().cos().mul(n)}}},"Sin",{},e)}}),Av=T({sinh_:function(r){var t=C(r,"x","sinh");return N.runKernelFunc(function(e,n){var o=e.sinh(t);return n([t]),o},{$x:t},function(e,n){var o=n[0];return{$x:function(){return o.toFloat().cosh().mulStrict(e)}}})}}),Tv=T({softplus_:function(r){var t=C(r,"x","softplus");return N.runKernelFunc(function(e,n){var o=e.softplus(t);return n([t]),o},{$x:t},function(e,n){var o=n[0];return{$x:function(){return e.mul(o.sigmoid())}}})}}),Dv=T({sqrt_:function(r){var t=C(r,"x","sqrt");return N.runKernelFunc(function(e,n){var o=e.sqrt(t);return n([t]),o},{$x:t},function(e,n){var o=n[0];return{$x:function(){return e.div(o.toFloat().sqrt().mul(2))}}})}}),Nv=T({step_:function(r,t){t===void 0&&(t=0);var e=C(r,"x","step");return N.runKernelFunc(function(n){return n.step(e,t)},{$x:e},function(n){return{$x:function(){return me(n)}}})}}),Fv=T({tan_:function(r){var t=C(r,"x","tan");return N.runKernelFunc(function(e,n){var o=e.tan(t);return n([t]),o},{$x:t},function(e,n){var o=n[0];return{$x:function(){return e.div(o.cos().square())}}})}}),Pv=T({tanh_:function(r){var t=C(r,"x","tanh");return N.runKernelFunc(function(e,n){var o=e.tanh(t);return n([o]),o},{x:t},function(e,n){var o=n[0];return{x:function(){return q(1).sub(o.square()).mulStrict(e)}}},"Tanh",{},null,[!0])}});function Ic(r,t,e,n,o,i){var a,s,u=C(r,"x","batchNorm"),c=C(t,"mean","batchNorm"),l=C(e,"variance","batchNorm");return o!=null&&(a=C(o,"scale","batchNorm")),n!=null&&(s=C(n,"offset","batchNorm")),k(u.rank===2,function(){return"Error in batchNorm3D: x must be rank 3 but got rank "+u.rank+"."}),k(c.rank===2||c.rank===1,function(){return"Error in batchNorm2D: mean must be rank 2 or rank 1 but got rank "+c.rank+"."}),k(l.rank===2||l.rank===1,function(){return"Error in batchNorm2D: variance must be rank 2 or rank 1 but got rank "+l.rank+"."}),a!=null&&k(a.rank===2||a.rank===1,function(){return"Error in batchNorm2D: scale must be rank 2 or rank 1 but got rank "+a.rank+"."}),s!=null&&k(s.rank===2||s.rank===1,function(){return"Error in batchNorm2D: offset must be rank 2 or rank 1 but got rank "+s.rank+"."}),Nr(u,c,l,s,a,i)}function Sc(r,t,e,n,o,i){var a,s,u=C(r,"x","batchNorm"),c=C(t,"mean","batchNorm"),l=C(e,"variance","batchNorm");return o!=null&&(a=C(o,"scale","batchNorm")),n!=null&&(s=C(n,"offset","batchNorm")),k(u.rank===3,function(){return"Error in batchNorm3D: x must be rank 3 but got rank "+u.rank+"."}),k(c.rank===3||c.rank===1,function(){return"Error in batchNorm3D: mean must be rank 3 or rank 1 but got rank "+c.rank+"."}),k(l.rank===3||l.rank===1,function(){return"Error in batchNorm3D: variance must be rank 3 or rank 1 but got rank "+l.rank+"."}),a!=null&&k(a.rank===3||a.rank===1,function(){return"Error in batchNorm3D: scale must be rank 3 or rank 1 but got rank "+a.rank+"."}),s!=null&&k(s.rank===3||s.rank===1,function(){return"Error in batchNorm3D: offset must be rank 3 or rank 1 but got rank "+s.rank+"."}),Nr(u,c,l,s,a,i)}function Ac(r,t,e,n,o,i){var a,s,u=C(r,"x","batchNorm"),c=C(t,"mean","batchNorm"),l=C(e,"variance","batchNorm");return o!=null&&(a=C(o,"scale","batchNorm")),n!=null&&(s=C(n,"offset","batchNorm")),k(u.rank===4,function(){return"Error in batchNorm4D: x must be rank 4 but got rank "+u.rank+"."}),k(c.rank===4||c.rank===1,function(){return"Error in batchNorm4D: mean must be rank 4 or rank 1 but got rank "+c.rank+"."}),k(l.rank===4||l.rank===1,function(){return"Error in batchNorm4D: variance must be rank 4 or rank 1 but got rank "+l.rank+"."}),a!=null&&k(a.rank===4||a.rank===1,function(){return"Error in batchNorm4D: scale must be rank 4 or rank 1 but got rank "+a.rank+"."}),s!=null&&k(s.rank===4||s.rank===1,function(){return"Error in batchNorm4D: offset must be rank 4 or rank 1 but got rank "+s.rank+"."}),Nr(u,c,l,s,a,i)}function Nr(r,t,e,n,o,i){i==null&&(i=.001);var a,s,u,c=C(r,"x","batchNorm"),l=C(t,"mean","batchNorm"),h=C(e,"variance","batchNorm");o!=null&&(a=C(o,"scale","batchNorm")),n!=null&&(s=C(n,"offset","batchNorm")),k(l.rank===h.rank,function(){return"Batch normalization gradient requires mean and variance to have equal ranks."}),k(s==null||l.rank===s.rank,function(){return"Batch normalization gradient requires mean and offset to have equal ranks."}),k(a==null||l.rank===a.rank,function(){return"Batch normalization gradient requires mean and scale to have equal ranks."}),u=c.rank===0||c.rank===1?c.as4D(1,1,1,c.size):c.rank===2?c.as4D(1,1,c.shape[0],c.shape[1]):c.rank===3?c.as4D(1,c.shape[0],c.shape[1],c.shape[2]):c;var f=[c,l,h,a];return N.runKernelFunc(function(p,d){var m=p.batchNormalization(u,jr(l),jr(h),i,jr(a),jr(s));return d([c,l,h,a]),m},{x:c,mean:l,variance:h,scale:a,offset:s},function(p,d){var m=d,v=m[0],g=m[1],x=m[2],b=m[3],y=b??q(1),w=Le(g.shape,u.shape),_=[];if(g.rank===1){for(var S=0;S<u.shape.length-1;++S)_.push(u.shape[S]);_.push(1)}var I=v.sub(g),E=p.mul(y),R=Rc(x.add(q(i))),D=R.mul(R).mul(R).mul(q(-.5));return{x:function(){return g.rank===1?p.mul(Yn(R.as4D(1,1,1,g.shape[0]),_)).mul(y).reshape(v.shape):p.mul(R).mul(y).reshape(v.shape)},mean:function(){var A=R.mul(q(-1)).mul(E);return g.rank===1&&(A=A.sum(w)),A.reshape(g.shape)},variance:function(){var A=D.mul(I).mul(E);return g.rank===1&&(A=A.sum(w)),A.reshape(g.shape)},scale:function(){var A=I.mul(R),M=p.mul(A);return g.rank===1&&(M=M.sum(w)),M.reshape(g.shape)},offset:function(){var A=p;return g.rank===1&&(A=A.sum(w)),A.reshape(g.shape)}}},"BatchNormalization",{varianceEpsilon:i},f).reshape(c.shape)}function jr(r){return r==null?null:r.rank===0?r.as1D():r.rank===1?r:r.rank===2?r.as4D(1,1,r.shape[0],r.shape[1]):r.rank===3?r.as4D(1,r.shape[0],r.shape[1],r.shape[2]):r}function Po(){Hu("tf.batchNormalization() is going away. Use tf.batchNorm() instead, and note the positional argument change of scale, offset, and varianceEpsilon")}var Ov=T({batchNormalization2d_:function(r,t,e,n,o,i){return n===void 0&&(n=.001),Po(),Ic(r,t,e,i,o,n)}}),Mv=T({batchNormalization3d_:function(r,t,e,n,o,i){return n===void 0&&(n=.001),Po(),Sc(r,t,e,i,o,n)}}),Bv=T({batchNormalization4d_:function(r,t,e,n,o,i){return n===void 0&&(n=.001),Po(),Ac(r,t,e,i,o,n)}}),Lv=T({batchNormalization_:function(r,t,e,n,o,i){return n===void 0&&(n=.001),Po(),Nr(r,t,e,i,o,n)}}),Tc=T({batchNorm_:Nr}),Wv=T({batchNorm2d_:Ic}),Uv=T({batchNorm3d_:Sc}),Vv=T({batchNorm4d_:Ac}),Oo=T({logicalAnd_:function(r,t){var e=C(r,"a","logicalAnd","bool"),n=C(t,"b","logicalAnd","bool");return le(e.shape,n.shape),N.runKernelFunc(function(o){return o.logicalAnd(e,n)},{a:e,b:n},null,"LogicalAnd")}}),zv=T({logicalNot_:function(r){var t=C(r,"x","logicalNot","bool");return N.runKernelFunc(function(e){return e.logicalNot(t)},{$x:t})}}),Dc=T({logicalOr_:function(r,t){var e=C(r,"a","logicalOr","bool"),n=C(t,"b","logicalOr","bool");return le(e.shape,n.shape),N.runKernelFunc(function(o){return o.logicalOr(e,n)},{$a:e,$b:n})}}),Gv=T({logicalXor_:function(r,t){var e=C(r,"a","logicalXor","bool"),n=C(t,"b","logicalXor","bool");return le(e.shape,n.shape),Dc(r,t).logicalAnd(Oo(r,t).logicalNot())}}),Dn=T({where_:function(r,t,e){var n=C(t,"a","where"),o=C(e,"b","where"),i=C(r,"condition","where","bool");return be(n.shape,o.shape,"Error in where: "),i.rank===1?k(i.shape[0]===n.shape[0],function(){return"The first dimension of `a` must match the size of `condition`."}):be(i.shape,o.shape,"Error in where: "),N.runKernelFunc(function(a,s){var u=a.select(i,n,o);return s([i]),u},{$condition:i,$a:n,$b:o},function(a,s){var u=s[0];return{$condition:function(){return me(u).toFloat()},$a:function(){return a.mul(u.cast(a.dtype))},$b:function(){return a.mul(u.logicalNot().cast(a.dtype))}}})}}),Nc=function(r){return X(this,void 0,void 0,function(){var t,e,n;return $(this,function(o){switch(o.label){case 0:return[4,(t=C(r,"condition","whereAsync","bool")).data()];case 1:return e=o.sent(),n=ya(t.shape,e),r!==t&&t.dispose(),[2,n]}})})},ue=T({add_:function(r,t){var e,n=C(r,"a","add"),o=C(t,"b","add");e=Se(n,o),n=e[0],o=e[1];var i=le(n.shape,o.shape);return N.runKernelFunc(function(a){return a.add(n,o)},{a:n,b:o},function(a){return{a:function(){var s=a,u=Le(n.shape,i);return u.length>0&&(s=s.sum(u)),s.reshape(n.shape)},b:function(){var s=a,u=Le(o.shape,i);return u.length>0&&(s=s.sum(u)),s.reshape(o.shape)}}},"Add")}}),Hv=T({addN_:function(r){k(Array.isArray(r),function(){return"The argument passed to tf.addN() must be a list of tensors"}),k(r.length>=1,function(){return"Must pass at least one tensor to tf.addN(), but got "+r.length});var t=r.map(function(o,i){return C(o,"tensors"+i,"addN")}),e=t[0];t.forEach(function(o){if(o.dtype!==e.dtype)throw new Error("All tensors passed to tf.addN() must have the same dtype")}),t.forEach(function(o){if(!ze(o.shape,e.shape))throw new Error("All tensors passed to tf.addN() must have the same shape")});var n=t;return N.runKernelFunc(function(o){return o.addN(t)},n,function(o){var i={};return t.forEach(function(a,s){i[s]=function(){return o.clone()}}),i},"AddN")}}),qv=T({addStrict_:function(r,t){var e=C(r,"a","addStrict"),n=C(t,"b","addStrict");return be(e.shape,n.shape,"Error in addStrict: "),e.add(n)}}),jv=T({atan2_:function(r,t){var e,n=C(r,"a","atan2"),o=C(t,"b","atan2");e=Se(n,o),n=e[0],o=e[1];var i=le(n.shape,o.shape);return N.runKernelFunc(function(a,s){var u=a.atan2(n,o);return s([n,o]),u},{$a:n,$b:o},function(a,s){var u=s[0],c=s[1];return{$a:function(){var l=ue(u.square(),c.square()),h=a.mul(c.div(l)),f=Le(u.shape,i);return f.length>0&&(h=h.sum(f)),h.reshape(u.shape)},$b:function(){var l=ue(u.square(),c.square()),h=Eo(a.mul(u.div(l))),f=Le(c.shape,i);return f.length>0&&(h=h.sum(f)),h.reshape(c.shape)}}})}}),Ct=T({div_:function(r,t){var e,n=C(r,"a","div"),o=C(t,"b","div");if(e=Se(n,o),n=e[0],o=e[1],n.dtype==="int32"&&o.dtype==="int32")return Fc(n,o);var i=le(n.shape,o.shape);return N.runKernelFunc(function(a,s){var u=a.realDivide(n,o);return s([n,o]),u},{a:n,b:o},function(a,s){var u=s[0],c=s[1];return{a:function(){var l=a.div(c.toFloat()),h=Le(u.shape,i);return h.length>0?l.sum(h).reshape(u.shape):l},b:function(){var l=a.mul(u.toFloat()),h=Le(c.shape,i);h.length>0&&(l=l.sum(h).reshape(c.shape));var f=c.square();return l.div(f.toFloat()).neg()}}},"Div")}}),Kv=T({divNoNan_:function(r,t){var e,n=C(r,"a","div"),o=C(t,"b","div");n=(e=Se(n,o))[0],o=e[1];var i=Ct(n,o),a=me(i),s=o.equal(a);return Dn(s,a,i)}}),Xv=T({divStrict_:function(r,t){var e=C(r,"a","div"),n=C(t,"b","div");return be(e.shape,n.shape,"Error in divideStrict: "),e.div(n)}}),Fc=T({floorDiv_:function(r,t){var e,n=C(r,"a","floorDiv"),o=C(t,"b","floorDiv");e=Se(n,o),n=e[0],o=e[1];var i=le(n.shape,o.shape);return N.runKernelFunc(function(a,s){var u=a.floorDiv(n,o);return s([n,o]),u},{a:n,b:o},function(a,s){var u=s[0],c=s[1];return{a:function(){var l=a.div(c.toFloat()),h=Le(u.shape,i);return h.length>0?l.sum(h).reshape(u.shape):l},b:function(){var l=a.mul(u.toFloat()),h=Le(c.shape,i);h.length>0&&(l=l.sum(h).reshape(c.shape));var f=c.square();return l.div(f.toFloat()).neg()}}},"FloorDiv")}}),Ca=T({maximum_:function(r,t){var e,n=C(r,"a","maximum"),o=C(t,"b","maximum");return e=Se(n,o),n=e[0],o=e[1],n.dtype==="bool"&&(n=n.toInt(),o=o.toInt()),le(n.shape,o.shape),N.runKernelFunc(function(i,a){var s=i.maximum(n,o);return a([n,o]),s},{a:n,b:o},function(i,a){var s=a[0],u=a[1];return{a:function(){return i.mul(s.greaterEqual(u).toFloat())},b:function(){return i.mul(s.less(u).toFloat())}}},"Maximum")}}),$v=T({maximumStrict_:function(r,t){var e=C(r,"a","maximumStrict"),n=C(t,"b","maximumStrict");return be(e.shape,n.shape,"Error in maximumStrict: "),e.maximum(n)}}),Pc=T({minimum_:function(r,t){var e,n=C(r,"a","minimum"),o=C(t,"b","minimum");return e=Se(n,o),n=e[0],o=e[1],n.dtype==="bool"&&(n=n.toInt(),o=o.toInt()),le(n.shape,o.shape),N.runKernelFunc(function(i,a){var s=i.minimum(n,o);return a([n,o]),s},{a:n,b:o},function(i,a){var s=a[0],u=a[1];return{a:function(){return i.mul(s.lessEqual(u).toFloat())},b:function(){return i.mul(s.greater(u).toFloat())}}},"Minimum")}}),Yv=T({minimumStrict_:function(r,t){var e=C(r,"a","minimumStrict"),n=C(t,"b","minimumStrict");return be(e.shape,n.shape,"Error in minimumStrict: "),e.minimum(n)}}),Jv=T({mod_:function(r,t){var e,n=C(r,"a","mod"),o=C(t,"b","mod");e=Se(n,o),n=e[0],o=e[1];var i=le(n.shape,o.shape);return N.runKernelFunc(function(a,s){var u=a.mod(n,o);return s([n,o]),u},{$a:n,$b:o},function(a,s){var u=s[0],c=s[1];return{$a:function(){var l=Le(u.shape,i);return l.length>0?a.sum(l).reshape(u.shape):a},$b:function(){var l=a.mul(u.div(c).floor().neg()),h=Le(c.shape,i);return h.length>0?l.sum(h).reshape(c.shape):l}}})}}),Qv=T({modStrict_:function(r,t){var e=C(r,"a","modStrict"),n=C(t,"b","modStrict");return be(e.shape,n.shape,"Error in modStrict: "),e.mod(n)}}),Ze=T({mul_:function(r,t){var e,n=C(r,"a","mul"),o=C(t,"b","mul");e=Se(n,o),n=e[0],o=e[1];var i=le(n.shape,o.shape);return N.runKernelFunc(function(a,s){var u=a.multiply(n,o);return s([n,o]),u},{a:n,b:o},function(a,s){var u=s[0],c=s[1];return{a:function(){var l=a.mul(c.toFloat()),h=Le(u.shape,i);return h.length>0?l.sum(h).reshape(u.shape):l},b:function(){var l=a.mul(u.toFloat()),h=Le(c.shape,i);return h.length>0?l.sum(h).reshape(c.shape):l}}},"Mul")}}),Zv=T({mulStrict_:function(r,t){var e=C(r,"a","mul"),n=C(t,"b","mul");return be(e.shape,n.shape,"Error in multiplyStrict: "),e.mul(n)}}),Ro=T({pow_:function(r,t){var e,n=C(r,"base","pow"),o=C(t,"exp","pow");e=Se(n,o),n=e[0],o=e[1];var i=le(n.shape,o.shape),a=[n,o];return N.runKernelFunc(function(s,u){var c=s.pow(n,o);return u([n,o,c]),c},{a:n,b:o},function(s,u){var c=u[0],l=u[1],h=u[2];return{a:function(){var f=l.toFloat(),p=s.mul(f.mul(c.pow(f.sub(q(1))))),d=Le(c.shape,i);return d.length>0&&(p=p.sum(d)),p.reshape(c.shape)},b:function(){var f=c.greater(0),p=c.log().where(f,me(c)),d=s.mul(h.mul(p)),m=Le(l.shape,i);return m.length>0&&(d=d.sum(m)),d.reshape(l.shape)}}},"Pow",{},a,[!0])}}),em=T({powStrict_:function(r,t){return be(r.shape,t.shape,"Error in powStrict: "),r.pow(t)}}),tm=T({squaredDifferenceStrict_:function(r,t){var e=C(r,"a","squaredDifferenceStrict"),n=C(t,"b","squaredDifferenceStrict");return be(e.shape,n.shape,"Error in squaredDifferenceStrict: "),e.squaredDifference(n)}}),We=T({sub_:function(r,t){var e,n=C(r,"a","sub"),o=C(t,"b","sub");e=Se(n,o),n=e[0],o=e[1];var i=le(n.shape,o.shape);return N.runKernelFunc(function(a){return a.subtract(n,o)},{a:n,b:o},function(a){return{a:function(){var s=a,u=Le(n.shape,i);return u.length>0&&(s=s.sum(u)),s.reshape(n.shape)},b:function(){var s=a,u=Le(o.shape,i);return u.length>0&&(s=s.sum(u)),s.neg().reshape(o.shape)}}},"Sub")}}),nm=T({subStrict_:function(r,t){var e=C(r,"a","subStrict"),n=C(t,"b","subStrict");return be(e.shape,n.shape,"Error in subStrict: "),e.sub(n)}}),Oc=T({equal_:function(r,t){var e,n=C(r,"a","equal"),o=C(t,"b","equal");return e=Se(n,o),n=e[0],o=e[1],le(n.shape,o.shape),N.runKernelFunc(function(i){return i.equal(n,o)},{$a:n,$b:o})}}),rm=T({equalStrict_:function(r,t){var e=C(r,"a","equalStrict"),n=C(t,"b","equalStrict");return be(e.shape,n.shape,"Error in equalStrict: "),e.equal(n)}}),om=T({greater_:function(r,t){var e,n=C(r,"a","greater"),o=C(t,"b","greater");return e=Se(n,o),n=e[0],o=e[1],le(n.shape,o.shape),N.runKernelFunc(function(i){return i.greater(n,o)},{a:n,b:o},null,"Greater")}}),Mc=T({greaterEqual_:function(r,t){var e,n=C(r,"a","greaterEqual"),o=C(t,"b","greaterEqual");return e=Se(n,o),n=e[0],o=e[1],le(n.shape,o.shape),N.runKernelFunc(function(i,a){var s=i.greaterEqual(n,o);return a([n,o]),s},{a:n,b:o},function(i,a){var s=a[0],u=a[1];return{a:function(){return me(s)},b:function(){return me(u)}}},"GreaterEqual")}}),im=T({greaterEqualStrict_:function(r,t){var e=C(r,"a","greaterEqualStrict"),n=C(t,"b","greaterEqualStrict");return be(e.shape,n.shape,"Error in greaterEqualStrict: "),e.greaterEqual(n)}}),am=T({greaterStrict_:function(r,t){var e=C(r,"a","greaterStrict"),n=C(t,"b","greaterStrict");return be(e.shape,n.shape,"Error in greaterStrict: "),e.greater(n)}}),sm=T({less_:function(r,t){var e,n=C(r,"a","less"),o=C(t,"b","less");return e=Se(n,o),n=e[0],o=e[1],le(n.shape,o.shape),N.runKernelFunc(function(i){return i.less(n,o)},{a:n,b:o},null,"Less")}}),um=T({lessEqual_:function(r,t){var e,n=C(r,"a","lessEqual"),o=C(t,"b","lessEqual");return e=Se(n,o),n=e[0],o=e[1],le(n.shape,o.shape),N.runKernelFunc(function(i,a){var s=i.lessEqual(n,o);return a([n,o]),s},{a:n,b:o},null,"LessEqual")}}),cm=T({lessEqualStrict_:function(r,t){var e=C(r,"a","lessEqualStrict"),n=C(t,"b","lessEqualStrict");return be(e.shape,n.shape,"Error in lessEqualStrict: "),e.lessEqual(n)}}),lm=T({lessStrict_:function(r,t){var e=C(r,"a","lessStrict"),n=C(t,"b","lessStrict");return be(e.shape,n.shape,"Error in lessStrict: "),e.less(n)}}),hm=T({notEqual_:function(r,t){var e,n=C(r,"a","notEqual"),o=C(t,"b","notEqual");return e=Se(n,o),n=e[0],o=e[1],le(n.shape,o.shape),N.runKernelFunc(function(i){return i.notEqual(n,o)},{a:n,b:o},null,"NotEqual")}}),fm=T({notEqualStrict_:function(r,t){var e=C(r,"a","notEqualStrict"),n=C(t,"b","notEqualStrict");return be(e.shape,n.shape,"Error in notEqualStrict: "),e.notEqual(n)}});function Qs(r,t){for(var e=[],n=r;n<t;++n)e.push(n);return e}function Zs(r){for(var t=[],e=0;e<r.length;++e)for(var n=0;n<r[e].length;++n)t.push(r[e][n]);return t}var Ea=T({gather_:function(r,t,e){e===void 0&&(e=0);var n=C(r,"x","gather"),o=C(t,"indices","gather","int32");e=Ue(e,n.shape)[0];var i=function(a,s,u){for(var c=a.shape[u],l=[],h=1,f=1,p=0;p<u;p++)l.push(a.shape[p]),h*=a.shape[p];for(p=0;p<s.rank;p++)l.push(s.shape[p]);for(p=u+1;p<a.rank;p++)l.push(a.shape[p]),f*=a.shape[p];return{batchSize:h,sliceSize:f,dimSize:c,outputShape:l}}(n,o,e);return N.runKernelFunc(function(a,s){var u=a.gather(n,o.flatten(),e);return s([o]),u},{x:n,indices:o},function(a,s){var u=s[0];return{x:function(){var c=n.shape,l=u.size,h=c.slice(0,e),f=h.length,p=c.slice(e,c.length).slice(1),d=p.length,m=Qs(0,f),v=Qs(f+1,f+1+d),g=Zs([h,[l],p]),x=a.reshape(g),b=u.reshape([l]),y=Zs([[f],m,v]),w=x.transpose(y),_=Bc(w,b,n.shape[e]),S=la(y);return _=_.transpose(S)},indices:function(){return u}}},"Gather",{axis:e}).reshape(i.outputShape)}}),Bc=T({unsortedSegmentSum_:function(r,t,e){var n=C(r,"x","unsortedSegmentSum"),o=C(t,"segmentIds","unsortedSegmentSum","int32");return k(Ne(e),function(){return"numSegments must be of dtype int"}),N.runKernelFunc(function(i,a){var s=i.unsortedSegmentSum(n,o,e);return a([o]),s},{$x:n},function(i,a){var s=a[0];return{$x:function(){return function(u,c){for(var l=Ca(c,me(c)),h=Ea(u,l),f=Mc(c,q(0,"int32")),p=h.rank-f.rank,d=0;d<p;++d)f=gt(f,d+1);f=Oo(f,sr(h.shape,"bool"));var m=me(h);return Dn(f,h,m)}(i,s)}}})}}),pm=function(r,t,e){return X(this,void 0,void 0,function(){var n,o,i,a,s,u,c,l,h,f,p,d,m;return $(this,function(v){switch(v.label){case 0:for(n=C(r,"tensor","boolMask"),o=C(t,"mask","boolMask","bool"),i=e??0,a=o.rank,s=n.shape,k(a>0,function(){return"mask cannot be scalar"}),be(s.slice(i,i+a),o.shape,"mask's shape must match the first K dimensions of tensor's shape,"),u=1,c=i;c<i+a;c++)u*=s[c];return l=s.slice(0,i).concat([u],s.slice(i+a)),h=n.reshape(l),f=o.reshape([-1]),[4,Nc(f)];case 1:return p=v.sent(),d=p.squeeze([1]),m=Ea(h,d,i),r!==n&&n.dispose(),t!==o&&o.dispose(),d.dispose(),h.dispose(),f.dispose(),p.dispose(),[2,m]}})})};function Lc(r,t,e,n,o,i,a){i===void 0&&(i="NHWC"),k(r.length===t.rank,function(){return"Length of inShape ("+r.length+") and rank of dy ("+t.rank+") must match"});var s=r,u=t,c=!1;t.rank===3&&(c=!0,u=t.as4D(1,t.shape[0],t.shape[1],t.shape[2]),s=[1,r[0],r[1],r[2]]),k(s.length===4,function(){return"Error in conv2dDerInput: inShape must be length 4, but got length "+s.length+"."}),k(u.rank===4,function(){return"Error in conv2dDerInput: dy must be rank 4, but got rank "+u.rank}),k(e.rank===4,function(){return"Error in conv2dDerInput: filter must be rank 4, but got rank "+e.rank});var l=i==="NHWC"?s[3]:s[1],h=i==="NHWC"?u.shape[3]:u.shape[1];k(l===e.shape[2],function(){return"Error in conv2dDerInput: depth of input ("+l+") must match input depth for filter "+e.shape[2]+"."}),k(h===e.shape[3],function(){return"Error in conv2dDerInput: depth of output ("+h+") must match output depth for filter "+e.shape[3]+"."}),a!=null&&k(Ne(o),function(){return"Error in conv2dDerInput: pad must be an integer when using, dimRoundingMode "+a+" but got pad "+o+"."});var f=va(i),p=Pn(s,e.shape,n,1,o,a,!1,f),d=N.runKernelFunc(function(m,v){var g=m.conv2dDerInput(u,e,p);return v([e,u]),g},{dy4D:u,filter:e},function(m,v){var g=v[0],x=v[1];return{dy4D:function(){return wt(m,g,n,o,i,1,a)},filter:function(){return Ra(m,x,g.shape,n,o,i,a)}}});return c?d.as3D(d.shape[1],d.shape[2],d.shape[3]):d}function gi(r){var t=function(i){return typeof i=="number"?[i,i,i]:i.length===2?[i[0],i[1],1]:i}(r),e=t[0],n=t[1],o=t[2];return e===1&&n===1&&o===1}function Wc(r,t,e,n,o){k(r.length===t.rank,function(){return"Length of inShape ("+r.length+") and rank of dy ("+t.rank+") must match"});var i=r,a=t,s=!1;t.rank===4&&(s=!0,a=t.as5D(1,t.shape[0],t.shape[1],t.shape[2],t.shape[3]),i=[1,r[0],r[1],r[2],r[3]]);var u=i[4],c=a.shape[4];k(i.length===5,function(){return"Error in conv3dDerInput: inShape must be length 5, but got length "+i.length+"."}),k(a.rank===5,function(){return"Error in conv3dDerInput: dy must be rank 5, but got rank "+a.rank}),k(e.rank===5,function(){return"Error in conv3dDerInput: filter must be rank 5, but got rank "+e.rank}),k(u===e.shape[3],function(){return"Error in conv3dDerInput: depth of input ("+u+") must match input depth for filter "+e.shape[3]+"."}),k(c===e.shape[4],function(){return"Error in conv3dDerInput: depth of output ("+c+") must match output depth for filter "+e.shape[4]+"."});var l=_o(i,e.shape,n,1,o),h=N.runKernelFunc(function(f){return f.conv3dDerInput(a,e,l)},{dy5D:a});return s?h.as4D(h.shape[1],h.shape[2],h.shape[3],h.shape[4]):h}var dm=T({conv1d_:function(r,t,e,n,o,i,a){o===void 0&&(o="NWC"),i===void 0&&(i=1);var s=C(r,"x","conv1d"),u=C(t,"filter","conv1d"),c=s,l=!1;s.rank===2&&(l=!0,c=s.as3D(1,s.shape[0],s.shape[1])),k(c.rank===3,function(){return"Error in conv1d: input must be rank 3, but got rank "+c.rank+"."}),k(u.rank===3,function(){return"Error in conv1d: filter must be rank 3, but got rank "+u.rank+"."}),a!=null&&k(Ne(n),function(){return"Error in conv1d: pad must be an integer when using, dimRoundingMode "+a+" but got pad "+n+"."}),k(c.shape[2]===u.shape[1],function(){return"Error in conv1d: depth of input ("+c.shape[2]+") must match input depth for filter "+u.shape[1]+"."}),k(st(e,i),function(){return"Error in conv1D: Either stride or dilation must be 1. Got stride "+e+" and dilation '"+i+"'"}),k(o==="NWC",function(){return"Error in conv1d: got dataFormat of "+o+" but only NWC is currently supported."});var h=u.as4D(1,u.shape[0],u.shape[1],u.shape[2]),f=c.as4D(c.shape[0],1,c.shape[1],c.shape[2]),p=wt(f,h,[1,e],n,"NHWC",[1,i],a);return l?p.as2D(p.shape[2],p.shape[3]):p.as3D(p.shape[0],p.shape[2],p.shape[3])}}),wt=T({conv2d_:function(r,t,e,n,o,i,a){o===void 0&&(o="NHWC"),i===void 0&&(i=[1,1]);var s=C(r,"x","conv2d"),u=C(t,"filter","conv2d"),c=s,l=!1;s.rank===3&&(l=!0,c=s.as4D(1,s.shape[0],s.shape[1],s.shape[2])),k(c.rank===4,function(){return"Error in conv2d: input must be rank 4, but got rank "+c.rank+"."}),k(u.rank===4,function(){return"Error in conv2d: filter must be rank 4, but got rank "+u.rank+"."}),a!=null&&k(Ne(n),function(){return"Error in conv2d: pad must be an integer when using, dimRoundingMode "+a+" but got pad "+n+"."});var h=o==="NHWC"?c.shape[3]:c.shape[1];k(h===u.shape[2],function(){return"Error in conv2d: depth of input ("+h+") must match input depth for filter "+u.shape[2]+"."}),k(st(e,i),function(){return"Error in conv2D: Either strides or dilations must be 1. Got strides "+e+" and dilations '"+i+"'"});var f=va(o),p=Pn(c.shape,u.shape,e,i,n,a,!1,f),d=[u,c],m=N.runKernelFunc(function(v,g){var x=v.conv2d(c,u,p);return g([u,c]),x},{x:c,filter:u},function(v,g){var x=g,b=x[0],y=x[1];return k(ir(i),function(){return"Error in gradient of conv2D: dilation rates greater than 1 are not yet supported in gradients. Got dilations '"+i+"'"}),{x:function(){return Uc(y.shape,v,b,e,n,o)},filter:function(){return Ra(y,v,b.shape,e,n,o)}}},"Conv2D",p,d);return l?m.as3D(m.shape[1],m.shape[2],m.shape[3]):m}}),vm=T({conv3d_:function(r,t,e,n,o,i){o===void 0&&(o="NDHWC"),i===void 0&&(i=[1,1,1]);var a=C(r,"x","conv3d"),s=C(t,"filter","conv3d"),u=a,c=!1;a.rank===4&&(c=!0,u=a.as5D(1,a.shape[0],a.shape[1],a.shape[2],a.shape[3])),k(u.rank===5,function(){return"Error in conv3d: input must be rank 5, but got rank "+u.rank+"."}),k(s.rank===5,function(){return"Error in conv3d: filter must be rank 5, but got rank "+s.rank+"."}),k(u.shape[4]===s.shape[3],function(){return"Error in conv3d: depth of input ("+u.shape[4]+") must match input depth for filter "+s.shape[3]+"."}),k(function(f,p){return gi(f)||gi(p)}(e,i),function(){return"Error in conv3D: Either strides or dilations must be 1. Got strides "+e+" and dilations '"+i+"'"}),k(o==="NDHWC",function(){return"Error in conv3d: got dataFormat of "+o+" but only NDHWC is currently supported."});var l=_o(u.shape,s.shape,e,i,n),h=N.runKernelFunc(function(f,p){var d=f.conv3d(u,s,l);return p([u,s]),d},{x:u,$filter:s},function(f,p){k(gi(i),function(){return"Error in gradient of conv3D: dilation rates greater than 1 are not yet supported in gradients. Got dilations '"+i+"'"});var d=p[0],m=p[1];return{x:function(){return Wc(d.shape,f,m,e,n)},$filter:function(){return function(v,g,x,b,y){var w=v;v.rank===4&&(w=v.as5D(1,v.shape[0],v.shape[1],v.shape[2],v.shape[3]));var _=g;_.rank===4&&(_=g.as5D(1,g.shape[0],g.shape[1],g.shape[2],g.shape[3])),k(w.rank===5,function(){return"Error in conv3dDerFilter: input must be rank 5, but got shape "+w.shape+"."}),k(_.rank===5,function(){return"Error in conv3dDerFilter: dy must be rank 5, but got shape "+_.shape+"."}),k(x.length===5,function(){return"Error in conv3dDerFilter: filterShape must be length 5, but got "+x+"."}),k(w.shape[4]===x[3],function(){return"Error in conv3dDerFilter: depth of input "+w.shape[4]+") must match input depth in filter ("+x[3]+"."}),k(_.shape[4]===x[4],function(){return"Error in conv3dDerFilter: depth of dy ("+_.shape[4]+") must match output depth for filter ("+x[4]+")."});var S=_o(w.shape,x,b,1,y);return N.runKernelFunc(function(I){return I.conv3dDerFilter(w,_,S)},{x5D:w,dy5D:_})}(d,f,m.shape,e,n)}}});return c?h.as4D(h.shape[1],h.shape[2],h.shape[3],h.shape[4]):h}}),Ra=T({conv2dDerFilter_:function(r,t,e,n,o,i,a){i===void 0&&(i="NHWC");var s=r;r.rank===3&&(s=r.as4D(1,r.shape[0],r.shape[1],r.shape[2]));var u=t;u.rank===3&&(u=t.as4D(1,t.shape[0],t.shape[1],t.shape[2])),k(s.rank===4,function(){return"Error in conv2dDerFilter: input must be rank 4, but got shape "+s.shape+"."}),k(u.rank===4,function(){return"Error in conv2dDerFilter: dy must be rank 4, but got shape "+u.shape+"."}),k(e.length===4,function(){return"Error in conv2dDerFilter: filterShape must be length 4, but got "+e+"."});var c=i==="NHWC"?s.shape[3]:s.shape[1],l=i==="NHWC"?u.shape[3]:u.shape[1];k(c===e[2],function(){return"Error in conv2dDerFilter: depth of input "+c+") must match input depth in filter ("+e[2]+"."}),k(l===e[3],function(){return"Error in conv2dDerFilter: depth of dy ("+l+") must match output depth for filter ("+e[3]+")."}),a!=null&&k(Ne(o),function(){return"Error in conv2dDerFilter: pad must be an integer when using, dimRoundingMode "+a+" but got pad "+o+"."});var h=va(i),f=Pn(s.shape,e,n,1,o,a,!1,h);return N.runKernelFunc(function(p){return p.conv2dDerFilter(s,u,f)},{x4D:s,dy4D:u})}}),Uc=T({conv2dDerInput_:Lc}),Mo=T({depthwiseConv2d_:function(r,t,e,n,o,i,a){i===void 0&&(i=[1,1]);var s=C(r,"x","depthwiseConv2d"),u=C(t,"filter","depthwiseConv2d"),c=s,l=!1;s.rank===3&&(l=!0,c=s.as4D(1,s.shape[0],s.shape[1],s.shape[2])),k(c.rank===4,function(){return"Error in depthwiseConv2d: input must be rank 4, but got rank "+c.rank+"."}),k(u.rank===4,function(){return"Error in depthwiseConv2d: filter must be rank 4, but got rank "+u.rank+"."}),k(c.shape[3]===u.shape[2],function(){return"Error in depthwiseConv2d: number of input channels ("+c.shape[3]+") must match the inChannels dimension in filter "+u.shape[2]+"."}),i==null&&(i=[1,1]),k(st(e,i),function(){return"Error in depthwiseConv2d: Either strides or dilations must be 1. Got strides "+e+" and dilations '"+i+"'"}),a!=null&&k(Ne(n),function(){return"Error in depthwiseConv2d: pad must be an integer when using, dimRoundingMode "+a+" but got pad "+n+"."});var h=Pn(c.shape,u.shape,e,i,n,a,!0),f=[c,u],p=N.runKernelFunc(function(d,m){var v=d.depthwiseConv2D(c,u,h);return m([c,u]),v},{x:c,filter:u},function(d,m){k(ir(i),function(){return"Error in gradient of depthwiseConv2d: dilation rates greater than 1 are not yet supported. Got dilations '"+i+"'"});var v=m[0],g=m[1];return{x:function(){return Vc(v.shape,d,g,h)},filter:function(){return zc(v,d,g.shape,h)}}},"DepthwiseConv2dNative",h,f);return l?p.as3D(p.shape[1],p.shape[2],p.shape[3]):p}}),Vc=T({depthwiseConv2dDerInput_:function(r,t,e,n){var o=t,i=!1;t.rank===3&&(i=!0,o=t.as4D(1,t.shape[0],t.shape[1],t.shape[2]));var a=N.runKernelFunc(function(s){return s.depthwiseConv2DDerInput(o,e,n)},{dy4D:o});return i?a.as3D(a.shape[1],a.shape[2],a.shape[3]):a}}),zc=T({depthwiseConv2dDerFilter_:function(r,t,e,n){var o=r;r.rank===3&&(o=r.as4D(1,r.shape[0],r.shape[1],r.shape[2]));var i=t;return i.rank===3&&(i=t.as4D(1,t.shape[0],t.shape[1],t.shape[2])),N.runKernelFunc(function(a){return a.depthwiseConv2DDerFilter(o,i,n)},{x4D:o,dy4D:i})}}),ka=T({separableConv2d_:function(r,t,e,n,o,i,a){i===void 0&&(i=[1,1]),a===void 0&&(a="NHWC");var s=C(r,"x","separableConv2d"),u=C(t,"depthwiseFilter","separableConv2d"),c=C(e,"pointwiseFilter","separableConv2d"),l=s,h=!1;if(s.rank===3&&(h=!0,l=s.as4D(1,s.shape[0],s.shape[1],s.shape[2])),a==="NCHW")throw new Error("separableConv2d currently does not support dataFormat NCHW; only NHWC is supported");k(l.rank===4,function(){return"Error in separableConv2d: input must be rank 4, but got rank "+l.rank+"."}),k(u.rank===4,function(){return"Error in separableConv2d: depthwise filter must be rank 4, but got rank "+u.rank+"."}),k(c.rank===4,function(){return"Error in separableConv2d: pointwise filter must be rank 4, but got rank "+u.rank+"."}),k(c.shape[0]===1,function(){return"Error in separableConv2d: the first dimension of pointwise filter  must be 1, but got "+c.shape[0]+"."}),k(c.shape[1]===1,function(){return"Error in separableConv2d: the second dimension of pointwise filter must be 1, but got "+c.shape[1]+"."});var f=u.shape[2],p=u.shape[3];k(c.shape[2]===f*p,function(){return"Error in separableConv2d: the third dimension of pointwise filter must be "+f*p+", but got "+c.shape[2]+"."});var d=Mo(l,u,n,o,a,i),m=wt(d,c,1,"valid",a);return h?m.as3D(m.shape[1],m.shape[2],m.shape[3]):m}}),mm=T({conv2dTranspose_:function(r,t,e,n,o,i){return Lc(e,C(r,"x","conv2dTranspose"),C(t,"filter","conv2dTranspose"),n,o,"NHWC",i)}}),gm=T({conv3dTranspose_:function(r,t,e,n,o){return Wc(e,C(r,"x","conv3dTranspose"),C(t,"filter","conv3dTranspose"),n,o)}}),Bo=T({matMul_:function(r,t,e,n){var o;e===void 0&&(e=!1),n===void 0&&(n=!1);var i=C(r,"a","matMul"),a=C(t,"b","matMul");o=Se(i,a),i=o[0],a=o[1];var s=e?i.shape[i.rank-2]:i.shape[i.rank-1],u=n?a.shape[a.rank-1]:a.shape[a.rank-2],c=e?i.shape[i.rank-1]:i.shape[i.rank-2],l=n?a.shape[a.rank-2]:a.shape[a.rank-1],h=i.shape.slice(0,-2),f=a.shape.slice(0,-2),p=Y(h),d=Y(f);k(i.rank>=2&&a.rank>=2&&i.rank===a.rank,function(){return"Error in matMul: inputs must have the same rank of at least 2, got ranks "+i.rank+" and "+a.rank+"."}),k(ze(h,f),function(){return"Error in matMul: outer dimensions ("+h+") and ("+f+") of Tensors with shapes "+i.shape+" and "+a.shape+" must match."}),k(s===u,function(){return"Error in matMul: inner shapes ("+s+") and ("+u+") of Tensors with shapes "+i.shape+" and "+a.shape+" and transposeA="+e+" and transposeB="+n+" must match."});var m=i.shape.slice(0,-2).concat([c,l]),v=e?i.as3D(p,s,c):i.as3D(p,c,s),g=n?a.as3D(d,l,u):a.as3D(d,u,l),x={transposeA:e,transposeB:n};return N.runKernelFunc(function(b,y){var w=b.batchMatMul(v,g,e,n);return y([v,g]),w},{a:v,b:g},function(b,y){var w=y,_=w[0],S=w[1];return e||n?!e&&n?{a:function(){return b.matMul(S,!1,!1)},b:function(){return b.matMul(_,!0,!1)}}:e&&!n?{a:function(){return S.matMul(b,!1,!0)},b:function(){return _.matMul(b,!1,!1)}}:{a:function(){return S.matMul(b,!0,!0)},b:function(){return b.matMul(_,!0,!0)}}:{a:function(){return b.matMul(S,!1,!0)},b:function(){return _.matMul(b,!0,!1)}}},"BatchMatMul",x).reshape(m)}}),ym=T({dot_:function(r,t){var e=C(r,"t1","dot"),n=C(t,"t2","dot");k(!(e.rank!==1&&e.rank!==2||n.rank!==1&&n.rank!==2),function(){return"Error in dot: inputs must all be rank 1 or 2, but got ranks "+e.rank+" and "+n.rank+"."});var o=e.rank===1?e.size:e.shape[1],i=n.rank===1?n.size:n.shape[0];return k(o===i,function(){return"Error in dot: inner dimensions of inputs must match, but got "+o+" and "+i+"."}),e.rank===1&&n.rank===1?e.as2D(1,-1).matMul(n.as2D(-1,1)).asScalar():e.rank===1&&n.rank===2?e.as2D(1,-1).matMul(n.as2D(n.shape[0],n.shape[1])).as1D():e.rank===2&&n.rank===1?e.matMul(n.as2D(-1,1)).as1D():e.matMul(n.as2D(n.shape[0],n.shape[1]))}}),xm=T({outerProduct_:function(r,t){var e=C(r,"v1","outerProduct"),n=C(t,"v2","outerProduct");return k(e.rank===1&&n.rank===1,function(){return"Error in outerProduct: inputs must be rank 1, but got ranks "+e.rank+" and "+n.rank+"."}),e.as2D(-1,1).matMul(n.as2D(1,-1))}}),Fr=T({reverse_:function(r,t){var e=C(r,"x","reverse");if(e.rank===0)return e.clone();var n=Ue(t,e.shape);return N.runKernelFunc(function(o){return o.reverse(e,n)},{$x:e},function(o){return{$x:function(){return o.reverse(n)}}}).reshapeAs(e)}}),bm=T({reverse1d_:function(r){var t=C(r,"x","reverse");return k(t.rank===1,function(){return"Error in reverse1D: x must be rank 1 but got rank "+t.rank+"."}),Fr(t,0)}}),wm=T({reverse2d_:function(r,t){var e=C(r,"x","reverse");return k(e.rank===2,function(){return"Error in reverse2D: x must be rank 2 but got rank "+e.rank+"."}),Fr(e,t)}}),_m=T({reverse3d_:function(r,t){var e=C(r,"x","reverse");return k(e.rank===3,function(){return"Error in reverse3D: x must be rank 3 but got rank "+e.rank+"."}),Fr(e,t)}}),Cm=T({reverse4d_:function(r,t){var e=C(r,"x","reverse");return k(e.rank===4,function(){return"Error in reverse4D: x must be rank 4 but got rank "+e.rank+"."}),Fr(e,t)}});function Gc(r,t,e,n,o,i){var a=C(r,"x","maxPool"),s=a,u=!1;a.rank===3&&(u=!0,s=a.as4D(1,a.shape[0],a.shape[1],a.shape[2])),k(s.rank===4,function(){return"Error in maxPool: input must be rank 4 but got rank "+s.rank+"."}),k(st(e,n),function(){return"Error in maxPool: Either strides or dilations must be 1. Got strides "+e+" and dilations '"+n+"'"}),i!=null&&k(Ne(o),function(){return"Error in maxPool: pad must be an integer when using, dimRoundingMode "+i+" but got pad "+o+"."});var c=wr(s.shape,t,e,n,o,i);if(c.filterWidth===1&&c.filterHeight===1&&ze(c.inShape,c.outShape))return a.clone();var l=[s],h=N.runKernelFunc(function(f,p){var d=f.maxPool(s,c);return p([s,d]),d},{x:s},function(f,p){var d=p[0],m=p[1];return{x:function(){return function(v,g,x,b,y,w,_,S){var I=C(v,"dy","maxPoolBackprop"),E=C(g,"input","maxPoolBackprop"),R=C(x,"output","maxPoolBackprop");k(E.rank===I.rank,function(){return"Rank of input ("+E.rank+") does not match rank of dy ("+I.rank+")"}),k(st(y,w),function(){return"Error in maxPoolBackProp: Either strides or dilations must be 1. Got strides "+y+" and dilations '"+w+"'"}),k(I.rank===4,function(){return"Error in maxPoolBackprop: dy must be rank 4 but got rank "+I.rank+"."}),k(E.rank===4,function(){return"Error in maxPoolBackprop: input must be rank 4 but got rank "+E.rank+"."});var D=wr(E.shape,b,y,w,_,S);return N.runKernelFunc(function(A){return A.maxPoolBackprop(I,E,R,D)},{$dy:I,$input:E})}(f,d,m,t,e,n,o)}}},"MaxPool",c,l);return u?h.as3D(h.shape[1],h.shape[2],h.shape[3]):h}function Hc(r,t,e,n,o,i){var a=C(r,"x","avgPool","float32");k(st(e,n),function(){return"Error in avgPool: Either strides or dilations must be 1. Got strides "+e+" and dilations '"+n+"'"});var s=a,u=!1;a.rank===3&&(u=!0,s=a.as4D(1,a.shape[0],a.shape[1],a.shape[2])),k(s.rank===4,function(){return"Error in avgPool: x must be rank 4 but got rank "+s.rank+"."}),i!=null&&k(Ne(o),function(){return"Error in avgPool: pad must be an integer when using, dimRoundingMode "+i+" but got pad "+o+"."});var c=wr(s.shape,t,e,n,o,i);if(c.filterWidth===1&&c.filterHeight===1&&ze(c.inShape,c.outShape))return a.clone();var l=N.runKernelFunc(function(h){return h.avgPool(s,c)},{x:s},function(h){return{x:function(){return function(f,p,d,m,v,g){var x=C(f,"dy","avgPoolBackprop"),b=C(p,"input","avgPoolBackprop");k(b.rank===x.rank,function(){return"Rank of input ("+b.rank+") does not match rank of dy ("+x.rank+")"}),k(st(m,v),function(){return"Error in avgPoolBackprop: Either strides or dilations must be 1. Got strides "+m+" and dilations '"+v+"'"});var y=b,w=x,_=!1;b.rank===3&&(_=!0,y=b.as4D(1,b.shape[0],b.shape[1],b.shape[2]),w=x.as4D(1,x.shape[0],x.shape[1],x.shape[2])),k(w.rank===4,function(){return"Error in avgPoolBackprop: dy must be rank 4 but got rank "+w.rank+"."}),k(y.rank===4,function(){return"Error in avgPoolBackprop: input must be rank 4 but got rank "+y.rank+"."});var S=wr(y.shape,d,m,v,g),I=N.runKernelFunc(function(E){return E.avgPoolBackprop(w,y,S)},{dy4D:w,input4D:y});return _?I.as3D(I.shape[1],I.shape[2],I.shape[3]):I}(h,s,t,e,n,o)}}},"AvgPool",c);return l=l.cast(a.dtype),u?l.as3D(l.shape[1],l.shape[2],l.shape[3]):l}var Ve=T({maxPool_:function(r,t,e,n,o){return Gc(r,t,e,1,n,o)}}),Pr=T({avgPool_:function(r,t,e,n,o){return Hc(r,t,e,1,n,o)}}),Em=T({pool_:function(r,t,e,n,o,i){o==null&&(o=[1,1]),i==null&&(i=1),n===0&&(n="valid");var a=C(r,"x","maxPool"),s=a,u=!1;a.rank===3&&(u=!0,s=a.as4D(1,a.shape[0],a.shape[1],a.shape[2])),k(st(i,o),function(){return"Error in pool: Either strides or dilations must be 1. Got strides "+i+" and dilations '"+o+"'"});var c,l=wr(s.shape,t,i,o,n),h=[l.dilationHeight,l.dilationWidth];c=n==="same"?function(y,w){var _=y.map(function(E,R){return E+(E-1)*(w[R]-1)}).map(function(E){return E-1}),S=_.map(function(E){return Math.floor(E/2)}),I=_.map(function(E,R){return E-S[R]});return _.map(function(E,R){return[S[R],I[R]]})}([l.filterHeight,l.filterWidth],h):[[0,0],[0,0]];var f=h[0]===1&&h[1]===1,p=function(y,w,_){var S=_.map(function(O){return O[0]}),I=_.map(function(O){return O[1]}),E=y.concat(S,I),R=w.map(function(O,B){return(O-E[B]%O)%O}),D=I.map(function(O,B){return O+R[B]}),A=w.map(function(O,B){return[S[B],D[B]]}),M=w.map(function(O,B){return[0,R[B]]});return[A,M]}([l.inHeight,l.inWidth],h,c),d=p[0],m=p[1],v=f?n:"valid",g=f?s:Yu(s,h,d),x=(e==="avg"?function(){return Hc(g,t,i,1,v)}:function(){return Gc(g,t,i,1,v)})(),b=f?x:Ku(x,h,m);return u?b.as3D(b.shape[1],b.shape[2],b.shape[3]):b}}),Rm=T({maxPool3d_:function(r,t,e,n,o,i,a){i===void 0&&(i="NDHWC");var s=C(r,"x","maxPool3d"),u=s,c=!1;s.rank===4&&(c=!0,u=s.as5D(1,s.shape[0],s.shape[1],s.shape[2],s.shape[3])),a==null&&(a=[1,1,1]),k(u.rank===5,function(){return"Error in maxPool3d: x must be rank 5 but got rank "+u.rank+"."}),k(i==="NDHWC",function(){return"Error in maxPool3d: Only NDHWC is currently supported, but got dataFormat of "+i}),k(st(e,a),function(){return"Error in maxPool3d: Either strides or dilations must be 1. Got strides "+e+" and dilations '"+a+"'"}),o!=null&&k(Ne(n),function(){return"Error in maxPool3d: pad must be an integer when using, dimRoundingMode "+o+" but got pad "+n+"."});var l=wo(u.shape,t,e,a,n,o,i),h=N.runKernelFunc(function(f,p){var d=f.maxPool3d(u,l);return p([u,d]),d},{x:u},function(f,p){var d=p[0],m=p[1];return{x:function(){return function(v,g,x,b,y,w,_,S){var I=C(v,"dy","maxPool3dBackprop"),E=C(g,"input","maxPool3dBackprop"),R=C(x,"output","maxPool3dBackprop"),D=I,A=E,M=R,O=!1;E.rank===4&&(O=!0,D=I.as5D(1,I.shape[0],I.shape[1],I.shape[2],I.shape[3]),A=E.as5D(1,E.shape[0],E.shape[1],E.shape[2],E.shape[3]),M=R.as5D(1,R.shape[0],R.shape[1],R.shape[2],R.shape[3])),k(D.rank===5,function(){return"Error in maxPool3dBackprop: dy must be rank 5 but got rank "+D.rank+"."}),k(A.rank===5,function(){return"Error in maxPool3dBackprop: input must be rank 5 but got rank "+A.rank+"."}),k(M.rank===5,function(){return"Error in maxPool3dBackprop: output must be rank 5 but got rank "+M.rank+"."}),w==null&&(w=[1,1,1]),k(st(y,w),function(){return"Error in maxPool3dBackprop: Either strides or dilations must be 1. Got strides "+y+" and dilations '"+w+"'"}),S!=null&&k(Ne(_),function(){return"Error in maxPool3dBackprop: pad must be an integer when using, dimRoundingMode "+S+" but got pad "+_+"."});var B=wo(A.shape,b,y,w,_,S),V=N.runKernelFunc(function(U){return U.maxPool3dBackprop(D,A,M,B)},{dy5D:D,input5D:A});return O?V.as4D(V.shape[1],V.shape[2],V.shape[3],V.shape[4]):V}(f,d,m,t,e,a,n,o)}}});return c?h.as4D(h.shape[1],h.shape[2],h.shape[3],h.shape[4]):h}}),km=T({avgPool3d_:function(r,t,e,n,o,i,a){i===void 0&&(i="NDHWC");var s=C(r,"x","avgPool3d","float32"),u=s,c=!1;s.rank===4&&(c=!0,u=s.as5D(1,s.shape[0],s.shape[1],s.shape[2],s.shape[3])),a==null&&(a=[1,1,1]),k(u.rank===5,function(){return"Error in avgPool3d: x must be rank 5 but got rank "+u.rank+"."}),k(i==="NDHWC",function(){return"Error in avgPool3d: Only NDHWC is currently supported, but got dataFormat of "+i}),k(st(e,a),function(){return"Error in avgPool3d: Either strides or dilations must be 1. Got strides "+e+" and dilations '"+a+"'"}),o!=null&&k(Ne(n),function(){return"Error in avgPool3d: pad must be an integer when using, dimRoundingMode "+o+" but got pad "+n+"."});var l=wo(u.shape,t,e,a,n,o,i),h=N.runKernelFunc(function(f){return f.avgPool3d(u,l)},{x:u},function(f){return{x:function(){return function(p,d,m,v,g,x,b){var y=C(p,"dy","avgPool3dBackprop"),w=C(d,"input","avgPool3dBackprop"),_=y,S=w,I=!1;w.rank===4&&(I=!0,_=y.as5D(1,y.shape[0],y.shape[1],y.shape[2],y.shape[3]),S=w.as5D(1,w.shape[0],w.shape[1],w.shape[2],w.shape[3])),k(_.rank===5,function(){return"Error in avgPool3dBackprop: dy must be rank 5 but got rank "+_.rank+"."}),k(S.rank===5,function(){return"Error in avgPool3dBackprop: input must be rank 5 but got rank "+S.rank+"."}),g==null&&(g=[1,1,1]),k(st(v,g),function(){return"Error in avgPool3dBackprop: Either strides or dilations must be 1. Got strides "+v+" and dilations '"+g+"'"}),b!=null&&k(Ne(x),function(){return"Error in maxPool3dBackprop: pad must be an integer when using, dimRoundingMode "+b+" but got pad "+x+"."});var E=wo(S.shape,m,v,g,x,b),R=N.runKernelFunc(function(D){return D.avgPool3dBackprop(_,S,E)},{dy5D:_,input5D:S});return I?R.as4D(R.shape[1],R.shape[2],R.shape[3],R.shape[4]):R}(f,u,t,e,a,n,o)}}});return h=h.cast(u.dtype),c?h.as4D(h.shape[1],h.shape[2],h.shape[3],h.shape[4]):h}}),Vt=T({slice_:function(r,t,e){var n,o,i=C(r,"x","slice");if(i.rank===0)throw new Error("Slicing scalar is not possible");(n=typeof t=="number"?[t].concat(new Array(i.rank-1).fill(0)):t.length<i.rank?t.concat(new Array(i.rank-t.length).fill(0)):t.slice()).forEach(function(u){k(u!==-1,function(){return"slice() does not support negative begin indexing."})}),o=(o=e==null?new Array(i.rank).fill(-1):typeof e=="number"?[e].concat(new Array(i.rank-1).fill(-1)):e.length<i.rank?e.concat(new Array(i.rank-e.length).fill(-1)):e).map(function(u,c){return u>=0?u:(k(u===-1,function(){return"Negative size values should be exactly -1 but got "+u+" for the slice() size at index "+c+"."}),i.shape[c]-n[c])}),ep(i,n,o);var a=i.shape,s={begin:n,size:o};return N.runKernelFunc(function(u){return u.slice(i,n,o)},{x:i},function(u){for(var c=[],l=0;l<u.rank;l++)c.push([n[l],a[l]-n[l]-o[l]]);return{x:function(){return u.pad(c)}}},"Slice",s)}}),Im=T({slice1d_:function(r,t,e){var n=C(r,"x","slice1d");return k(n.rank===1,function(){return"slice1d expects a rank-1 tensor, but got a rank-"+n.rank+" tensor"}),Vt(n,[t],[e])}}),Sm=T({slice2d_:function(r,t,e){var n=C(r,"x","slice2d");return k(n.rank===2,function(){return"slice2d expects a rank-2 tensor, but got a rank-"+n.rank+" tensor"}),Vt(n,t,e)}}),qc=T({slice3d_:function(r,t,e){var n=C(r,"x","slice3d");return k(n.rank===3,function(){return"slice3d expects a rank-3 tensor, but got a rank-"+n.rank+" tensor"}),Vt(n,t,e)}}),Am=T({slice4d_:function(r,t,e){var n=C(r,"x","slice4d");return k(n.rank===4,function(){return"slice4d expects a rank-4 tensor, but got a rank-"+n.rank+" tensor"}),Vt(n,t,e)}});function jc(r,t,e,n,o){return t.rank<e.rank&&(t=t.reshape(at(t.shape,n))),r.rank<e.rank&&(r=r.reshape(at(r.shape,n))),{x:function(){var i=r.mul(e.equal(t).cast(r.dtype));return o==null?i:i.transpose(o)}}}var Tm=T({all_:function(r,t,e){t===void 0&&(t=null),e===void 0&&(e=!1);var n=C(r,"x","all","bool"),o=Ue(t,n.shape),i=o,a=qt(i,n.rank);a!=null&&(n=n.transpose(a),i=jt(i.length,n.rank));var s=N.runKernelFunc(function(c){return c.all(n,i)},{$x:n});if(e){var u=at(s.shape,o);return s.reshape(u)}return s}}),Dm=T({any_:function(r,t,e){t===void 0&&(t=null),e===void 0&&(e=!1);var n=C(r,"x","any","bool"),o=Ue(t,n.shape),i=o,a=qt(i,n.rank);a!=null&&(n=n.transpose(a),i=jt(i.length,n.rank));var s=N.runKernelFunc(function(c){return c.any(n,i)},{$x:n});if(e){var u=at(s.shape,o);return s.reshape(u)}return s}}),Nm=T({argMax_:function(r,t){t===void 0&&(t=0);var e=C(r,"x","argMax");t==null&&(t=0);var n=Ue(t,e.shape),o=qt(n,e.rank);o!=null&&(e=e.transpose(o),n=jt(n.length,e.rank));var i={axis:n[0]},a=[e];return N.runKernelFunc(function(s,u){var c=s.argMax(e,n[0]);return u([e]),c},{x:e},function(s,u){var c=u[0];return{x:function(){return me(c)}}},"ArgMax",i,a)}}),Fm=T({argMin_:function(r,t){t===void 0&&(t=0);var e=C(r,"x","argMin");t==null&&(t=0);var n=Ue(t,e.shape),o=qt(n,e.rank);return o!=null&&(e=e.transpose(o),n=jt(n.length,e.rank)),N.runKernelFunc(function(i,a){var s=i.argMin(e,n[0]);return a([e]),s},{$x:e},function(i,a){var s=a[0];return{$x:function(){return me(s)}}})}}),Pm=T({logSumExp_:function(r,t,e){t===void 0&&(t=null),e===void 0&&(e=!1);var n=C(r,"x","logSumExp"),o=Ue(t,n.shape),i=n.max(o,!0),a=n.sub(i).exp().sum(o).log(),s=i.reshape(a.shape).add(a);if(e){var u=at(s.shape,o);return s.reshape(u)}return s}}),Lo=T({max_:function(r,t,e){t===void 0&&(t=null),e===void 0&&(e=!1);var n=C(r,"x","max"),o=n,i=Ue(t,n.shape),a=i,s=qt(a,n.rank);s!=null&&(n=n.transpose(s),a=jt(a.length,n.rank));var u=[n],c=N.runKernelFunc(function(h,f){var p=h.max(n,a);return f([o,p]),p},{x:n},function(h,f){return jc(h,f[1],f[0],i,s)},"Max",{axes:a},u,[!0]);if(e){var l=at(c.shape,i);c=c.reshape(l)}return c}}),Om=T({mean_:function(r,t,e){t===void 0&&(t=null),e===void 0&&(e=!1);var n=C(r,"x","mean"),o=Ue(t,n.shape),i=Y($e(n.shape,o)[1]);return Fo(function(a){var s=q(i);return{value:(s.dtype===a.dtype?a:a.cast(s.dtype)).div(s).sum(t,e),gradFunc:function(u){var c=a.shape.slice();return o.forEach(function(l){c[l]=1}),u.reshape(c).mul(sr(a.shape,"float32")).div(i)}}})(n)}}),Mm=T({min_:function(r,t,e){t===void 0&&(t=null),e===void 0&&(e=!1);var n=C(r,"x","min"),o=n,i=Ue(t,n.shape),a=i,s=qt(a,n.rank);s!=null&&(n=n.transpose(s),a=jt(a.length,n.rank));var u=[n],c=N.runKernelFunc(function(h,f){var p=h.min(n,a);return f([o,p]),p},{x:n},function(h,f){return jc(h,f[1],f[0],i,s)},"Min",{axes:a},u,[!0]);if(e){var l=at(c.shape,i);c=c.reshape(l)}return c}}),Bm=T({moments_:function(r,t,e){t===void 0&&(t=null),e===void 0&&(e=!1);var n=Ue(t,(r=C(r,"x","moments")).shape),o=r.mean(n,e),i=o.shape;e||(i=at(o.shape,n));var a=r.toFloat().sub(o.reshape(i)).square();return{mean:o,variance:a.mean(n,e)}}}),Kc=T({sum_:function(r,t,e){t===void 0&&(t=null),e===void 0&&(e=!1);var n=C(r,"x","sum");n.dtype==="bool"&&(n=n.toInt());var o=Ue(t,n.shape);return Fo(function(i){var a=qt(o,i.rank),s=o,u=i;a!=null&&(u=i.transpose(a),s=jt(s.length,i.rank));var c=function(p){var d=i.shape.slice();return o.forEach(function(m){d[m]=1}),p.reshape(d).mul(sr(i.shape,"float32"))},l={axes:s},h=N.runKernelFunc(function(p){return p.sum(u,s)},{x:u},function(p){return{x:function(){return c(p)}}},"Sum",l);if(e){var f=at(h.shape,o);h=h.reshape(f)}return{value:h,gradFunc:c}})(n)}}),Lm=T({prod_:function(r,t,e){t===void 0&&(t=null),e===void 0&&(e=!1);var n=C(r,"x","prod");n.dtype==="bool"&&(n=n.toInt());var o=Ue(t,n.shape),i=qt(o,n.rank),a=o,s=n;i!=null&&(s=n.transpose(i),a=jt(a.length,n.rank));var u=N.runKernelFunc(function(l){return l.prod(s,a)},{permutedX:s});if(e){var c=at(u.shape,o);u=u.reshape(c)}return u}}),Xc=T({elu_:function(r){var t=C(r,"x","elu");return N.runKernelFunc(function(e,n){var o=e.elu(t);return n([o]),o},{$x:t},function(e,n){var o=n[0];return{$x:function(){return N.runKernelFunc(function(i){return i.eluDer(e,o)},{dy:e,y:o})}}})}}),Wm=T({leakyRelu_:function(r,t){t===void 0&&(t=.2);var e=C(r,"x","leakyRelu");return Ca(q(t).mul(e),e)}}),$c=T({prelu_:function(r,t){var e=C(r,"x","prelu"),n=C(t,"alpha","prelu");return N.runKernelFunc(function(o,i){var a=o.prelu(e,n);return i([e,n]),a},{x:e,alpha:n},function(o,i){var a=i[0],s=i[1],u=a.greater(0);return{x:function(){return Dn(u,o,o.mul(s))},alpha:function(){var c=Dn(u,me(o),o.mul(a)),l=Le(s.shape,o.shape);return l.length>0&&(c=c.sum(l)),c.reshape(s.shape)}}},"Prelu")}}),Ie=T({relu_:function(r){var t=C(r,"x","relu");return t.dtype==="bool"?t.toInt():N.runKernelFunc(function(e,n){var o=e.relu(t);return n([t]),o},{x:t},function(e,n){var o=n[0];return{x:function(){return e.mulStrict(o.step().toFloat())}}},"Relu")}}),Yc=T({relu6_:function(r){var t=C(r,"x","relu6");return t.dtype==="bool"?t.toInt():N.runKernelFunc(function(e,n){var o=e.relu6(t);return n([t]),o},{x:t},function(e,n){var o=n[0],i=o.lessEqual(6).mul(o.step());return{x:function(){return e.mulStrict(i.toFloat())}}},"Relu6")}}),Um=T({selu_:function(r){var t=C(r,"x","selu");return N.runKernelFunc(function(e,n){var o=e.selu(t);return n([t]),o},{$x:t},function(e,n){var o=n[0];return{$x:function(){var i=o.greater(q(0)),a=q(ba),s=q(wa),u=e.mul(s),c=e.mul(a).mul(o.toFloat().exp());return Dn(i,u,c)}}})}}),yn=T({transpose_:function(r,t){var e=C(r,"x","transpose");if(t==null&&(t=e.shape.map(function(o,i){return i}).reverse()),k(e.rank===t.length,function(){return"Error in transpose: rank of input "+e.rank+" must match length of perm "+t+"."}),t.forEach(function(o){k(o>=0&&o<e.rank,function(){return"All entries in 'perm' must be between 0 and "+(e.rank-1)+" but got "+t})}),e.rank<=1)return e.clone();var n={perm:t};return N.runKernelFunc(function(o){return o.transpose(e,t)},{x:e},function(o){var i=la(t);return{x:function(){return o.transpose(i)}}},"Transpose",n)}}),Vm=T({localResponseNormalization_:function(r,t,e,n,o){t===void 0&&(t=5),e===void 0&&(e=1),n===void 0&&(n=1),o===void 0&&(o=.5);var i=C(r,"x","localResponseNormalization");k(i.rank===4||i.rank===3,function(){return`Error in localResponseNormalization: x must be rank 3 or 4 but got
               rank `+i.rank+"."}),k(Ne(t),function(){return"Error in localResponseNormalization: depthRadius must be an integer but got depthRadius "+t+"."});var a=i,s=!1;i.rank===3&&(s=!0,a=i.as4D(1,i.shape[0],i.shape[1],i.shape[2]));var u=N.runKernelFunc(function(c,l){var h=c.localResponseNormalization4D(a,t,e,n,o);return l([a,h]),h},{x4D:a},function(c,l){var h=l[0],f=l[1];return{x4D:function(){return N.runKernelFunc(function(p){return p.LRNGrad(c,h,f,t,e,n,o)},{})}}});return s?u.as3D(u.shape[1],u.shape[2],u.shape[3]):u}}),Jc=T({norm_:function(r,t,e,n){t===void 0&&(t="euclidean"),e===void 0&&(e=null),n===void 0&&(n=!1);var o=function s(u,c,l){if(l===void 0&&(l=null),u.rank===0)return u.abs();if(u.rank!==1&&l===null)return s(u.reshape([-1]),c,l);if(u.rank===1||typeof l=="number"||Array.isArray(l)&&l.length===1){if(c===1)return u.abs().sum(l);if(c===1/0)return u.abs().max(l);if(c===-1/0)return u.abs().min(l);if(c==="euclidean"||c===2)return u.abs().pow(q(2,"int32")).sum(l).sqrt();throw new Error("Error in norm: invalid ord value: "+c)}if(Array.isArray(l)&&l.length===2){if(c===1)return u.abs().sum(l[0]).max(l[1]-1);if(c===1/0)return u.abs().sum(l[1]).max(l[0]);if(c===-1/0)return u.abs().sum(l[1]).min(l[0]);if(c==="fro"||c==="euclidean")return u.square().sum(l).sqrt();throw new Error("Error in norm: invalid ord value: "+c)}throw new Error("Error in norm: invalid axis: "+l)}(r=C(r,"x","norm"),t,e),i=o.shape;if(n){var a=Ue(e,r.shape);i=at(o.shape,a)}return o.reshape(i)}}),zm=T({basicLSTMCell_:function(r,t,e,n,o,i){var a=C(r,"forgetBias","basicLSTMCell"),s=C(t,"lstmKernel","basicLSTMCell"),u=C(e,"lstmBias","basicLSTMCell"),c=C(n,"data","basicLSTMCell"),l=C(o,"c","basicLSTMCell"),h=C(i,"h","basicLSTMCell"),f=c.concat(h,1).matMul(s).add(u),p=f.shape[0],d=f.shape[1]/4,m=[p,d],v=f.slice([0,0],m),g=f.slice([0,d],m),x=f.slice([0,2*d],m),b=f.slice([0,3*d],m),y=v.sigmoid().mulStrict(g.tanh()).addStrict(l.mulStrict(a.add(x).sigmoid())),w=y.tanh().mulStrict(b.sigmoid());return[y,w]}}),Gm=T({multiRNNCell_:function(r,t,e,n){for(var o=C(t,"data","multiRNNCell"),i=vo(e,"c","multiRNNCell"),a=vo(n,"h","multiRNNCell"),s=o,u=[],c=0;c<r.length;c++){var l=r[c](s,i[c],a[c]);u.push(l[0]),u.push(l[1]),s=l[1]}var h=[],f=[];for(c=0;c<u.length;c+=2)h.push(u[c]),f.push(u[c+1]);return[h,f]}}),Hm=T({movingAverage_:function(r,t,e,n,o){o===void 0&&(o=!0);var i=C(r,"v","movingAverage"),a=C(t,"x","movingAverage"),s=C(e,"decay","movingAverage");Uh(i,a),k(ze(i.shape,a.shape),function(){return"Shape mismatch in v and x"});var u=q(1),c=u.sub(s),l=a.sub(i).mul(c);if(o){k(n!=null,function(){return"When using zeroDebias: true, step is required."});var h=C(n,"step","movingAverage");l=l.div(u.sub(Ro(s,h)))}return i.add(l)}}),qm=T({stridedSlice_:function(r,t,e,n,o,i,a,s,u){if(o===void 0&&(o=0),i===void 0&&(i=0),a===void 0&&(a=0),s===void 0&&(s=0),u===void 0&&(u=0),n==null&&(n=new Array(t.length)),a!==0)throw new Error("ellipsis mask is not yet supported");var c=C(r,"x","stridedSlice"),l=Ns(s),h=c.shape.slice();l.forEach(function(v){t[v]=0,e[v]=1,h.splice(v,0,1)}),c=c.reshape(h);for(var f=0;f<c.rank;f++)t[f]=tp(o,t,n,c.shape,f),e[f]=np(i,e,n,c.shape,f),n[f]=n[f]||1;var p=Ns(u);p.forEach(function(v){e[v]=t[v]+1,n[v]=1});var d=da(t,e,n),m=d.filter(function(v,g){return p.indexOf(g)===-1});return n.every(function(v){return v===1})?Vt(c,t,d).reshape(m):N.runKernelFunc(function(v){return v.stridedSlice(c,t,e,n)},{$x:c}).reshape(m)}}),jm=T({topk_:function(r,t,e){t===void 0&&(t=1),e===void 0&&(e=!0);var n=C(r,"x","topk");if(n.rank===0)throw new Error("topk() expects the input to be of rank 1 or higher");var o=n.shape[n.shape.length-1];if(t>o)throw new Error("'k' passed to topk() must be <= the last dimension ("+o+") but got "+t);var i=N.runKernelFunc(function(a){return a.topk(n,t,e)},{$x:n});return{values:i[0],indices:i[1]}}}),Km=T({scatterND_:function(r,t,e){var n=C(r,"indices","scatterND","int32"),o=C(t,"updates","scatterND");return Zf(o,n,e),N.runKernelFunc(function(i){return i.scatterND(n,o,e)},{indices:n,updates:o},null,"ScatterNd",{shape:e})}}),Ia=T({fft_:function(r){k(r.dtype==="complex64",function(){return"The dtype for tf.spectral.fft() must be complex64 but got "+r.dtype+"."});var t=r.shape[r.shape.length-1],e=r.size/t,n=r.as2D(e,t);return N.runKernelFunc(function(o){return o.fft(n)},{input:r}).reshape(r.shape)}}),ko=T({ifft_:function(r){k(r.dtype==="complex64",function(){return"The dtype for tf.spectral.ifft() must be complex64 but got "+r.dtype+"."});var t=r.shape[r.shape.length-1],e=r.size/t,n=r.as2D(e,t);return N.runKernelFunc(function(o){return o.ifft(n)},{input:r}).reshape(r.shape)}}),Sa=T({rfft_:function(r,t){k(r.dtype==="float32",function(){return"The dtype for rfft() must be real value but got "+r.dtype});var e,n=r.shape[r.shape.length-1],o=r.size/n;if(t!=null&&t<n){var i=r.shape.map(function(g){return 0}),a=r.shape.map(function(g){return g});a[r.shape.length-1]=t,e=r.slice(i,a),n=t}else if(t!=null&&t>n){var s=r.shape.map(function(g){return g});s[r.shape.length-1]=t-n,e=r.concat(Ce(s),r.shape.length-1),n=t}else e=r;var u=e.zerosLike(),c=qe(e,u).as2D(o,n),l=Ia(c),h=Math.floor(n/2)+1,f=xt(l),p=Ot(l),d=f.split([h,n-h],f.shape.length-1),m=p.split([h,n-h],p.shape.length-1),v=e.shape.slice();return v[e.shape.length-1]=h,qe(d[0],m[0]).reshape(v)}}),Qc=T({irfft_:function(r){var t=r.shape[r.shape.length-1],e=r.size/t;if(t<=2){var n=r.as2D(e,t),o=ko(n);return xt(o)}var i=[e,2*(t-1)],a=xt(r).as2D(e,t),s=Ot(r).as2D(e,t),u=a.slice([0,1],[e,t-2]).reverse(1),c=s.slice([0,1],[e,t-2]).reverse(1).mul(q(-1)),l=a.concat(u,1),h=s.concat(c,1);return n=qe(l,h).as2D(i[0],i[1]),o=ko(n),xt(o)}}),Xm=Object.freeze({fft:Ia,ifft:ko,rfft:Sa,irfft:Qc}),$m=T({sparseToDense_:function(r,t,e,n){n===void 0&&(n=0);var o=C(r,"sparseIndices","sparseToDense","int32"),i=C(t,"sparseValues","sparseToDense"),a=C(n,"defaultValue","sparseToDense",i.dtype);return function(s,u,c,l){if(s.dtype!=="int32")throw new Error("tf.sparseToDense() expects the indices to be int32 type, but the dtype was "+s.dtype+".");if(s.rank>2)throw new Error("sparseIndices should be a scalar, vector, or matrix, but got shape "+s.shape+".");var h=s.rank>0?s.shape[0]:1,f=s.rank>1?s.shape[1]:1;if(c.length!==f)throw new Error("outputShape has incorrect number of elements:, "+c.length+", should be: "+f+".");var p=u.size;if(u.rank!==0&&(u.rank!==1||p!==h))throw new Error("sparseValues has incorrect shape "+u.shape+", should be [] or ["+h+"]");if(u.dtype!==l.dtype)throw new Error("sparseValues.dtype must match defaultValues.dtype")}(o,i,e,a),N.runKernelFunc(function(s){return s.sparseToDense(o,i,e,a)},{$sparseIndices:o,$sparseValues:i,$defaultValue:a})}}),Ym=T({gatherND_:function(r,t){var e=C(t,"indices","gatherND","int32"),n=C(r,"x","gatherND");return N.runKernelFunc(function(o){return o.gatherND(n,e)},{x:n,indices:e},null,"GatherNd")}}),Jm=T({diag_:function(r){var t=C(r,"x","diag").flatten(),e=r.shape.concat(r.shape);return N.runKernelFunc(function(n){return n.diag(t)},{$x:t}).reshape(e)}}),Qm=T({dropout_:function(r,t,e,n){var o=C(r,"x","dropout");if(k(o.dtype==="float32",function(){return"x has to be a floating point tensor since it's going to be scaled, but got a "+o.dtype+" tensor instead."}),k(t>=0&&t<1,function(){return"rate must be a float in the range [0, 1), but got "+t+"."}),t===0)return r instanceof ke?o.clone():o;var i=function(u,c){if(c==null)return u.shape.slice();if(ze(u.shape,c))return c;if(u.shape.length===c.length){for(var l=[],h=0;h<u.shape.length;h++)c[h]==null&&u.shape[h]!=null?l.push(u.shape[h]):l.push(c[h]);return l}return c}(o,e),a=1-t,s=$u(i,0,1,"float32",n).add(a).floor().div(a);return o.mul(s)}});function Zc(r,t,e){for(var n=1-r%2,o=new Float32Array(r),i=0;i<r;++i){var a=2*Math.PI*i/(r+n-1);o[i]=t-e*Math.cos(a)}return Fe(o,"float32")}var Aa=T({hannWindow_:function(r){return Zc(r,.5,.5)}}),el=T({hammingWindow_:function(r){return Zc(r,.54,.46)}}),Ta=T({frame_:function(r,t,e,n,o){n===void 0&&(n=!1),o===void 0&&(o=0);for(var i=0,a=[];i+t<=r.size;)a.push(Vt(r,i,t)),i+=e;if(n)for(;i<r.size;){var s=i+t-r.size,u=Me([Vt(r,i,t-s),Wt([s],o)]);a.push(u),i+=e}return a.length===0?dn([],[0,t]):Me(a).as2D(a.length,t)}}),tl=T({stft_:function(r,t,e,n,o){var i;o===void 0&&(o=Aa),n==null&&(i=t,n=Math.floor(Math.pow(2,Math.ceil(Math.log(i)/Math.log(2)))));for(var a=Ta(r,t,e),s=Ze(a,o(t)),u=[],c=0;c<a.shape[0];c++)u.push(Sa(s.slice([c,0],[1,t]),n));return Me(u)}}),Zm=Object.freeze({hannWindow:Aa,hammingWindow:el,frame:Ta,stft:tl}),Qe,eg=function(r,t,e){return e===void 0&&(e=1),X(this,void 0,void 0,function(){var n,o,i,a,s,u,c,l,h,f,p,d,m,v;return $(this,function(g){switch(g.label){case 0:return n=C(r,"predictions","inTopK"),o=C(t,"targets","inTopK"),k(n.rank>1,function(){return"inTopK() expects the predictions to be of rank 2 or higher, but got "+n.rank}),k(n.rank-1===o.rank,function(){return"predictions rank should be 1 larger than targets rank, but got predictions rank "+n.rank+" and targets rank "+o.rank}),be(n.shape.slice(0,n.shape.length-1),o.shape,"predictions's shape should be align with the targets' shape, except the last dimension."),i=n.shape[n.shape.length-1],k(e>0&&e<=i,function(){return"'k' passed to inTopK() must be > 0 && <= the predictions last dimension ("+i+"), but got "+e}),[4,n.data()];case 1:return a=g.sent(),[4,o.data()];case 2:for(s=g.sent(),u=[a.length/i,i],l=u[1],h=yr("bool",c=u[0]),f=0;f<c;f++){for(p=f*l,d=a.subarray(p,p+l),m=[],v=0;v<d.length;v++)m.push({value:d[v],index:v});for(m.sort(function(x,b){return b.value-x.value}),h[f]=0,v=0;v<e;v++)if(m[v].index===s[f]){h[f]=1;break}}return r!==n&&n.dispose(),t!==o&&o.dispose(),[2,Ke(h,o.shape,"bool")]}})})};(function(r){r[r.NONE=0]="NONE",r[r.MEAN=1]="MEAN",r[r.SUM=2]="SUM",r[r.SUM_BY_NONZERO_WEIGHTS=3]="SUM_BY_NONZERO_WEIGHTS"})(Qe||(Qe={}));var tg=T({absoluteDifference_:function(r,t,e,n){n===void 0&&(n=Qe.SUM_BY_NONZERO_WEIGHTS);var o=C(r,"labels","absoluteDifference"),i=C(t,"predictions","absoluteDifference"),a=null;e!=null&&(a=C(e,"weights","absoluteDifference")),be(o.shape,i.shape,"Error in absoluteDifference: ");var s=o.sub(i).abs();return rn(s,a,n)}}),rn=T({computeWeightedLoss_:function(r,t,e){e===void 0&&(e=Qe.SUM_BY_NONZERO_WEIGHTS);var n=C(r,"losses","computeWeightedLoss"),o=null;t!=null&&(o=C(t,"weights","computeWeightedLoss"));var i=o==null?n:n.mul(o);if(e===Qe.NONE)return i;if(e===Qe.SUM)return i.sum();if(e===Qe.MEAN){if(o==null)return i.mean();var a=n.size/o.size,s=i.sum().div(o.sum());return a>1?s.div(q(a)):s}if(e===Qe.SUM_BY_NONZERO_WEIGHTS){if(o==null)return i.sum().div(q(n.size));var u=o.mul(sr(n.shape)).notEqual(q(0)).sum().toFloat();return i.sum().div(u)}throw Error("Unknown reduction: "+e)}}),ng=T({cosineDistance_:function(r,t,e,n,o){o===void 0&&(o=Qe.SUM_BY_NONZERO_WEIGHTS);var i=C(r,"labels","cosineDistance"),a=C(t,"predictions","cosineDistance"),s=null;n!=null&&(s=C(n,"weights","cosineDistance")),be(i.shape,a.shape,"Error in cosineDistance: ");var u=q(1).sub(i.mul(a).sum(e,!0));return rn(u,s,o)}}),rg=T({hingeLoss_:function(r,t,e,n){n===void 0&&(n=Qe.SUM_BY_NONZERO_WEIGHTS);var o=C(r,"labels","hingeLoss"),i=C(t,"predictions","hingeLoss"),a=null;e!=null&&(a=C(e,"weights","hingeLoss")),be(o.shape,i.shape,"Error in hingeLoss: ");var s=q(1);o=q(2).mul(o).sub(s);var u=s.sub(o.mul(i)).relu();return rn(u,a,n)}}),og=T({huberLoss_:function(r,t,e,n,o){n===void 0&&(n=1),o===void 0&&(o=Qe.SUM_BY_NONZERO_WEIGHTS);var i=C(r,"labels","huberLoss"),a=C(t,"predictions","huberLoss"),s=null;e!=null&&(s=C(e,"weights","huberLoss")),be(i.shape,a.shape,"Error in huberLoss: ");var u=q(n),c=a.sub(i).abs(),l=Pc(c,u),h=c.sub(l),f=q(.5).mul(l.square()).add(u.mul(h));return rn(f,s,o)}}),ig=T({logLoss_:function(r,t,e,n,o){n===void 0&&(n=1e-7),o===void 0&&(o=Qe.SUM_BY_NONZERO_WEIGHTS);var i=C(r,"labels","logLoss"),a=C(t,"predictions","logLoss"),s=null;e!=null&&(s=C(e,"weights","logLoss")),be(i.shape,a.shape,"Error in logLoss: ");var u=q(1),c=q(n),l=i.mul(a.add(c).log()).neg().sub(u.sub(i).mul(u.sub(a).add(c).log()));return rn(l,s,o)}}),ag=T({meanSquaredError_:function(r,t,e,n){n===void 0&&(n=Qe.SUM_BY_NONZERO_WEIGHTS);var o=C(r,"labels","meanSquaredError"),i=C(t,"predictions","meanSquaredError"),a=null;e!=null&&(a=C(e,"weights","meanSquaredError")),be(o.shape,i.shape,"Error in meanSquaredError: ");var s=o.squaredDifference(i);return rn(s,a,n)}}),sg=T({sigmoidCrossEntropy_:function(r,t,e,n,o){n===void 0&&(n=0),o===void 0&&(o=Qe.SUM_BY_NONZERO_WEIGHTS);var i=C(r,"multiClassLabels","sigmoidCrossEntropy"),a=C(t,"logits","sigmoidCrossEntropy"),s=null;if(e!=null&&(s=C(e,"weights","sigmoidCrossEntropy")),be(i.shape,a.shape,"Error in sigmoidCrossEntropy: "),n>0){var u=q(n),c=q(1),l=q(.5);i=i.mul(c.sub(u)).add(l.mul(u))}var h=function(f,p){var d=C(f,"labels","sigmoidCrossEntropyWithLogits"),m=C(p,"logits","sigmoidCrossEntropyWithLogits");be(d.shape,m.shape,"Error in sigmoidCrossEntropyWithLogits: ");var v=m.relu(),g=m.mul(d),x=m.abs().neg().exp().log1p();return v.sub(g).add(x)}(i,a);return rn(h,s,o)}}),ug=T({softmaxCrossEntropy_:function(r,t,e,n,o){n===void 0&&(n=0),o===void 0&&(o=Qe.SUM_BY_NONZERO_WEIGHTS);var i=C(r,"onehotLabels","softmaxCrossEntropy"),a=C(t,"logits","softmaxCrossEntropy"),s=null;if(e!=null&&(s=C(e,"weights","softmaxCrossEntropy")),be(i.shape,a.shape,"Error in softmaxCrossEntropy: "),n>0){var u=q(n),c=q(1),l=q(i.shape[1]);i=i.mul(c.sub(u)).add(u.div(l))}var h=function(f,p,d){if(d===void 0&&(d=-1),d===-1&&(d=p.rank-1),d!==p.rank-1)throw Error("Softmax cross entropy along a non-last dimension is not yet supported. Labels / logits was rank "+p.rank+" and dim was "+d);return Fo(function(m,v,g){var x=v.logSumExp([d],!0),b=v.toFloat().sub(x);return g([m,b]),{value:b.mul(m).neg().sum([d]),gradFunc:function(y,w){var _=w[0],S=w[1],I=at(y.shape,[d]);return[y.reshape(I).mul(_.toFloat().sub(S.exp())),y.reshape(I).mul(S.exp().sub(_.toFloat()))]}}})(f,p)}(i,a);return rn(h,s,o)}}),cg=Object.freeze({get Reduction(){return Qe},absoluteDifference:tg,computeWeightedLoss:rn,cosineDistance:ng,hingeLoss:rg,huberLoss:og,logLoss:ig,meanSquaredError:ag,sigmoidCrossEntropy:sg,softmaxCrossEntropy:ug});function eu(r,t){return t===void 0&&(t=!1),N.tidy(function(){if(r.shape.length!==2)throw new Error("qr2d() requires a 2D Tensor, but got a "+r.shape.length+"D Tensor.");for(var e=r.shape[0],n=r.shape[1],o=Xu(e),i=r.clone(),a=dn([[1]],[1,1]),s=a.clone(),u=e>=n?n:e,c=function(h){var f,p=i,d=s,m=o;f=N.tidy(function(){var v=i.slice([h,h],[e-h,1]),g=v.norm(),x=i.slice([h,h],[1,1]),b=dn([[-1]]).where(x.greater(0),dn([[1]])),y=x.sub(b.mul(g)),w=v.div(y);s=w.shape[0]===1?a.clone():a.concat(w.slice([1,0],[w.shape[0]-1,w.shape[1]]),0);var _=b.matMul(y).div(g).neg(),S=i.slice([h,0],[e-h,n]),I=_.mul(s);if(h===0)i=S.sub(I.matMul(s.transpose().matMul(S)));else{var E=S.sub(I.matMul(s.transpose().matMul(S)));i=i.slice([0,0],[h,n]).concat(E,0)}var R=o.slice([0,h],[e,o.shape[1]-h]);if(h===0)o=R.sub(R.matMul(s).matMul(I.transpose()));else{var D=R.sub(R.matMul(s).matMul(I.transpose()));o=o.slice([0,0],[e,h]).concat(D,1)}return[s,i,o]}),s=f[0],i=f[1],o=f[2],it([p,d,m])},l=0;l<u;++l)c(l);return!t&&e>n&&(o=o.slice([0,0],[e,n]),i=i.slice([0,0],[n,n])),[o,i]})}var lg=T({bandPart_:function(r,t,e){if(t%1!=0)throw new Error("bandPart(): numLower must be an integer, got "+t+".");if(e%1!=0)throw new Error("bandPart(): numUpper must be an integer, got "+e+".");var n=C(r,"a","bandPart");if(n.rank<2)throw new Error("bandPart(): Rank must be at least 2, got "+n.rank+".");var o=n.shape,i=n.shape.slice(-2),a=i[0],s=i[1];if(!(t<=a))throw new Error("bandPart(): numLower ("+t+") must not be greater than the number of rows ("+a+").");if(!(e<=s))throw new Error("bandPart(): numUpper ("+e+") must not be greater than the number of columns ("+s+").");t<0&&(t=a),e<0&&(e=s);var u=mo(0,a,1,"int32").reshape([-1,1]),c=mo(0,s,1,"int32"),l=We(u,c),h=Oo(l.lessEqual(q(+t,"int32")),l.greaterEqual(q(-e,"int32"))),f=Ce([a,s],n.dtype);return vt(Be(n.reshape([-1,a,s])).map(function(p){return Dn(h,p,f)})).reshape(o)}}),hg=T({gramSchmidt_:function(r){var t;if(Array.isArray(r)){t=!1,k(r!=null&&r.length>0,function(){return"Gram-Schmidt process: input must not be null, undefined, or empty"});for(var e=r[0].shape[0],n=function(u){k(r[u].shape[0]===e,function(){return"Gram-Schmidt: Non-unique lengths found in the input vectors: ("+r[u].shape[0]+" vs. "+e+")"})},o=1;o<r.length;++o)n(o)}else t=!0,r=fa(r,r.shape[0],0).map(function(u){return Ju(u,[0])});k(r.length<=r[0].shape[0],function(){return"Gram-Schmidt: Number of vectors ("+r.length+") exceeds number of dimensions ("+r[0].shape[0]+")."});var i=[],a=r,s=function(u){i.push(N.tidy(function(){var c=a[u];if(u>0)for(var l=0;l<u;++l){var h=Kc(i[l].mulStrict(c)).mul(i[l]);c=c.sub(h)}return c.div(Jc(c,"euclidean"))}))};for(o=0;o<r.length;++o)s(o);return t?vt(i,0):i}}),fg=T({qr_:function(r,t){if(t===void 0&&(t=!1),r.rank<2)throw new Error("qr() requires input tensor to have a rank >= 2, but got rank "+r.rank);if(r.rank===2)return eu(r,t);var e=r.shape.slice(0,r.shape.length-2).reduce(function(a,s){return a*s}),n=Be(r.reshape([e,r.shape[r.shape.length-2],r.shape[r.shape.length-1]]),0),o=[],i=[];return n.forEach(function(a){var s=eu(a,t),u=s[0],c=s[1];o.push(u),i.push(c)}),[vt(o,0).reshape(r.shape),vt(i,0).reshape(r.shape)]}}),pg=Object.freeze({bandPart:lg,gramSchmidt:hg,qr:fg});function Wo(r,t,e,n,o,i){n==null&&(n=.5),o==null&&(o=Number.NEGATIVE_INFINITY),i==null&&(i=0);var a=r.shape[0];return e=Math.min(e,a),k(0<=n&&n<=1,function(){return"iouThreshold must be in [0, 1], but was '"+n+"'"}),k(r.rank===2,function(){return"boxes must be a 2D tensor, but was of rank '"+r.rank+"'"}),k(r.shape[1]===4,function(){return"boxes must have 4 columns, but 2nd dimension was "+r.shape[1]}),k(t.rank===1,function(){return"scores must be a 1D tensor"}),k(t.shape[0]===a,function(){return"scores has incompatible shape with boxes. Expected "+a+", but was "+t.shape[0]}),k(0<=i&&i<=1,function(){return"softNmsSigma must be in [0, 1], but was '"+i+"'"}),{maxOutputSize:e,iouThreshold:n,scoreThreshold:o,softNmsSigma:i}}var dg=T({resizeBilinear_:function(r,t,e){e===void 0&&(e=!1);var n=C(r,"images","resizeBilinear");k(n.rank===3||n.rank===4,function(){return"Error in resizeBilinear: x must be rank 3 or 4, but got rank "+n.rank+"."}),k(t.length===2,function(){return"Error in resizeBilinear: new shape must 2D, but got shape "+t+"."});var o=n,i=!1;n.rank===3&&(i=!0,o=n.as4D(1,n.shape[0],n.shape[1],n.shape[2]));var a=t[0],s=t[1],u=N.runKernelFunc(function(c,l){return l([o]),c.resizeBilinear(o,a,s,e)},{x:o},function(c,l){return{x:function(){return N.runKernelFunc(function(h){return h.resizeBilinearBackprop(c,l[0],e)},{})}}},"ResizeBilinear",{alignCorners:e,newHeight:a,newWidth:s});return i?u.as3D(u.shape[1],u.shape[2],u.shape[3]):u}}),vg=T({resizeNearestNeighbor_:function(r,t,e){e===void 0&&(e=!1);var n=C(r,"images","resizeNearestNeighbor");k(n.rank===3||n.rank===4,function(){return"Error in resizeNearestNeighbor: x must be rank 3 or 4, but got rank "+n.rank+"."}),k(t.length===2,function(){return"Error in resizeNearestNeighbor: new shape must 2D, but got shape "+t+"."}),k(n.dtype==="float32"||n.dtype==="int32",function(){return"`images` must have `int32` or `float32` as dtype"});var o=n,i=!1;n.rank===3&&(i=!0,o=n.as4D(1,n.shape[0],n.shape[1],n.shape[2]));var a=t[0],s=t[1],u=N.runKernelFunc(function(c,l){return l([o]),c.resizeNearestNeighbor(o,a,s,e)},{batchImages:o},function(c,l){return{batchImages:function(){return N.runKernelFunc(function(h){return h.resizeNearestNeighborBackprop(c,l[0],e)},{})}}});return i?u.as3D(u.shape[1],u.shape[2],u.shape[3]):u}}),mg=T({nonMaxSuppression_:function(r,t,e,n,o){n===void 0&&(n=.5),o===void 0&&(o=Number.NEGATIVE_INFINITY);var i=C(r,"boxes","nonMaxSuppression"),a=C(t,"scores","nonMaxSuppression"),s=Wo(i,a,e,n,o);e=s.maxOutputSize,n=s.iouThreshold,o=s.scoreThreshold;var u={maxOutputSize:e,iouThreshold:n,scoreThreshold:o};return N.runKernelFunc(function(c){return c.nonMaxSuppression(i,a,e,n,o)},{boxes:i,scores:a},null,"NonMaxSuppressionV3",u)}}),gg=function(r,t,e,n,o){return n===void 0&&(n=.5),o===void 0&&(o=Number.NEGATIVE_INFINITY),X(this,void 0,void 0,function(){var i,a,s,u,c,l,h;return $(this,function(f){switch(f.label){case 0:return i=C(r,"boxes","nonMaxSuppressionAsync"),a=C(t,"scores","nonMaxSuppressionAsync"),s=Wo(i,a,e,n,o),e=s.maxOutputSize,n=s.iouThreshold,o=s.scoreThreshold,[4,Promise.all([i.data(),a.data()])];case 1:return u=f.sent(),c=u[0],l=u[1],h=ma(c,l,e,n,o),i!==r&&i.dispose(),a!==t&&a.dispose(),[2,h]}})})},yg=T({nonMaxSuppressionWithScore_:function(r,t,e,n,o,i){n===void 0&&(n=.5),o===void 0&&(o=Number.NEGATIVE_INFINITY),i===void 0&&(i=0);var a=C(r,"boxes","nonMaxSuppression"),s=C(t,"scores","nonMaxSuppression"),u=Wo(a,s,e,n,o,i),c={maxOutputSize:e=u.maxOutputSize,iouThreshold:n=u.iouThreshold,scoreThreshold:o=u.scoreThreshold,softNmsSigma:i=u.softNmsSigma},l=N.runKernel("NonMaxSuppressionV5",{boxes:a,scores:s},c);return{selectedIndices:l[0],selectedScores:l[1]}}}),xg=function(r,t,e,n,o,i){return n===void 0&&(n=.5),o===void 0&&(o=Number.NEGATIVE_INFINITY),i===void 0&&(i=0),X(this,void 0,void 0,function(){var a,s,u,c,l,h,f;return $(this,function(p){switch(p.label){case 0:return a=C(r,"boxes","nonMaxSuppressionAsync"),s=C(t,"scores","nonMaxSuppressionAsync"),u=Wo(a,s,e,n,o,i),e=u.maxOutputSize,n=u.iouThreshold,o=u.scoreThreshold,i=u.softNmsSigma,[4,Promise.all([a.data(),s.data()])];case 1:return c=p.sent(),l=c[0],h=c[1],f=ga(l,h,e,n,o,i),a!==r&&a.dispose(),s!==t&&s.dispose(),[2,f]}})})},bg=T({cropAndResize_:function(r,t,e,n,o,i){var a=C(r,"image","cropAndResize"),s=C(t,"boxes","cropAndResize","float32"),u=C(e,"boxInd","cropAndResize","int32");o=o||"bilinear",i=i||0;var c=s.shape[0];return k(a.rank===4,function(){return"Error in cropAndResize: image must be rank 4,but got rank "+a.rank+"."}),k(s.rank===2&&s.shape[1]===4,function(){return"Error in cropAndResize: boxes must be have size ["+c+",4] but had shape "+s.shape+"."}),k(u.rank===1&&u.shape[0]===c,function(){return"Error in cropAndResize: boxInd must be have size ["+c+"] but had shape "+s.shape+"."}),k(n.length===2,function(){return"Error in cropAndResize: cropSize must be of length 2, but got length "+n.length+"."}),k(n[0]>=1&&n[1]>=1,function(){return"cropSize must be atleast [1,1], but was "+n}),k(o==="bilinear"||o==="nearest",function(){return"method must be bilinear or nearest, but was "+o}),N.runKernelFunc(function(l,h){return l.cropAndResize(a,s,u,n,o,i)},{images:a,boxes:s,boxInd:u},null,"CropAndResize",{method:o,extrapolationValue:i,cropSize:n})}}),Da=Object.freeze({resizeBilinear:dg,resizeNearestNeighbor:vg,nonMaxSuppression:mg,nonMaxSuppressionAsync:gg,nonMaxSuppressionWithScore:yg,nonMaxSuppressionWithScoreAsync:xg,cropAndResize:bg}),Na=function(r,t){return!(r>0)||t==="linear"},Fa=function(r,t,e){if(e==null||e==="linear")return r;if(e==="relu")return r.mul(t.step());throw new Error("Gradient for activation "+e+" has not been implemented yet.")},Pa=function(r,t){var e=t,n=Le(r.shape,t.shape);return n.length>0&&(e=e.sum(n)),e.reshape(r.shape)},Oa=function(r,t,e){if(t==="linear")return r;if(t==="relu")return Ie(r);if(t==="elu")return Xc(r);if(t==="relu6")return Yc(r);if(t==="prelu")return $c(r,e);throw new Error("Unknown fused activation "+t+".")},wg=T({fusedMatMul_:function(r){var t,e=r.a,n=r.b,o=r.transposeA,i=o!==void 0&&o,a=r.transposeB,s=a!==void 0&&a,u=r.bias,c=r.activation,l=c===void 0?"linear":c,h=r.preluActivationWeights;if(Na(N.state.gradientDepth,l)===!1){var f=Bo(e,n,i,s);return u!=null&&(f=ue(f,u)),Oa(f,l,h)}var p=C(e,"a","fused matMul"),d=C(n,"b","fused matMul");t=Se(p,d),p=t[0],d=t[1];var m=i?p.shape[p.rank-2]:p.shape[p.rank-1],v=s?d.shape[d.rank-1]:d.shape[d.rank-2],g=i?p.shape[p.rank-1]:p.shape[p.rank-2],x=s?d.shape[d.rank-2]:d.shape[d.rank-1],b=p.shape.slice(0,-2),y=d.shape.slice(0,-2),w=Y(b),_=Y(y);k(p.rank>=2&&d.rank>=2&&p.rank===d.rank,function(){return"Error in fused matMul: inputs must have the same rank of at least 2, got ranks "+p.rank+" and "+d.rank+"."}),k(ze(b,y),function(){return"Error in fused matMul: outer dimensions ("+b+") and ("+y+") of Tensors with shapes "+p.shape+" and "+d.shape+" must match."}),k(m===v,function(){return"Error in fused matMul: inner shapes ("+m+") and ("+v+") of Tensors with shapes "+p.shape+" and "+d.shape+" and transposeA="+i+" and transposeB="+s+" must match."});var S,I,E=p.shape.slice(0,-2).concat([g,x]),R=i?p.as3D(w,m,g):p.as3D(w,g,m),D=s?d.as3D(_,x,v):d.as3D(_,v,x);u!=null&&le(E,(S=Se(S=C(u,"bias","fused matMul"),p)[0]).shape),h!=null&&(I=C(h,"prelu weights","fused matMul"));var A={a:R,b:D};u!=null&&(A.bias=S),h!=null&&(A.preluActivationWeights=I);var M=[R,D];return N.runKernelFunc(function(O,B){var V=O.fusedBatchMatMul({a:R,b:D,transposeA:i,transposeB:s,bias:S,activation:l,preluActivationWeights:I});return B([R,D,V]),V},A,function(O,B){var V=B[0],U=B[1],W=B[2],G=Fa(O,W,l),H={};return u!=null&&(H={bias:function(){return Pa(S,G)}}),Object.assign(i||s?!i&&s?{a:function(){return G.matMul(U,!1,!1)},b:function(){return G.matMul(V,!0,!1)}}:i&&!s?{a:function(){return U.matMul(G,!1,!0)},b:function(){return V.matMul(G,!1,!1)}}:{a:function(){return U.matMul(G,!0,!0)},b:function(){return G.matMul(V,!0,!0)}}:{a:function(){return G.matMul(U,!1,!0)},b:function(){return V.matMul(G,!0,!1)}},H)},"_FusedMatMul",{transposeA:i,transposeB:s,activation:l},M,[!0]).reshape(E)}}),_g=T({fusedConv2d_:function(r){var t=r.x,e=r.filter,n=r.strides,o=r.pad,i=r.dataFormat,a=i===void 0?"NHWC":i,s=r.dilations,u=s===void 0?[1,1]:s,c=r.dimRoundingMode,l=r.bias,h=r.activation,f=h===void 0?"linear":h,p=r.preluActivationWeights;if(f=f||"linear",Na(N.state.gradientDepth,f)===!1){var d=wt(t,e,n,o,a,u,c);return l!=null&&(d=ue(d,l)),Oa(d,f,p)}var m=C(t,"x","conv2d"),v=C(e,"filter","conv2d"),g=m,x=!1;m.rank===3&&(x=!0,g=m.as4D(1,m.shape[0],m.shape[1],m.shape[2])),k(g.rank===4,function(){return"Error in fused conv2d: input must be rank 4, but got rank "+g.rank+"."}),k(v.rank===4,function(){return"Error in fused conv2d: filter must be rank 4, but got rank "+v.rank+"."}),c!=null&&k(Ne(o),function(){return"Error in fused conv2d: pad must be an integer when using, dimRoundingMode "+c+" but got pad "+o+"."}),k(g.shape[3]===v.shape[2],function(){return"Error in conv2d: depth of input ("+g.shape[3]+") must match input depth for filter "+v.shape[2]+"."}),k(st(n,u),function(){return"Error in conv2D: Either strides or dilations must be 1. Got strides "+n+" and dilations '"+u+"'"}),k(a==="NHWC",function(){return"Error in conv2d: got dataFormat of "+a+" but only NHWC is currently supported."});var b,y,w=Pn(g.shape,v.shape,n,u,o,c);l!=null&&(b=Se(b=C(l,"bias","fused conv2d"),m)[0],le(w.outShape,b.shape)),p!=null&&(y=C(p,"prelu weights","fused conv2d"));var _={x:g,filter:v};l!=null&&(_.bias=b),p!=null&&(_.preluActivationWeights=y);var S=[v,g],I=N.runKernelFunc(function(E,R){var D=E.fusedConv2d({input:g,filter:v,convInfo:w,bias:b,activation:f,preluActivationWeights:y});return R([v,g,D]),D},_,function(E,R){var D=R,A=D[0],M=D[1],O=D[2],B=Fa(E,O,f);k(ir(u),function(){return"Error in gradient of fused conv2D: dilation rates greater than 1 are not yet supported in gradients. Got dilations '"+u+"'"});var V={};return l!=null&&(V={bias:function(){return Pa(b,B)}}),Object.assign({x:function(){return Uc(M.shape,B,A,n,o)},filter:function(){return Ra(M,B,A.shape,n,o)}},V)},"FusedConv2D",{convInfo:w,activation:f},S,[!0]);return x?I.as3D(I.shape[1],I.shape[2],I.shape[3]):I}}),Cg=T({fusedDepthwiseConv2d_:function(r){var t=r.x,e=r.filter,n=r.strides,o=r.pad,i=r.dataFormat,a=i===void 0?"NHWC":i,s=r.dilations,u=s===void 0?[1,1]:s,c=r.dimRoundingMode,l=r.bias,h=r.activation,f=h===void 0?"linear":h,p=r.preluActivationWeights;if(Na(N.state.gradientDepth,f)===!1){var d=Mo(t,e,n,o,a,u,c);return l!=null&&(d=ue(d,l)),Oa(d,f,p)}var m=C(t,"x","depthwiseConv2d"),v=C(e,"filter","depthwiseConv2d"),g=m,x=!1;m.rank===3&&(x=!0,g=m.as4D(1,m.shape[0],m.shape[1],m.shape[2])),k(g.rank===4,function(){return"Error in fused depthwiseConv2d: input must be rank 4, but got rank "+g.rank+"."}),k(v.rank===4,function(){return"Error in fused depthwiseConv2d: filter must be rank 4, but got rank "+v.rank+"."}),k(g.shape[3]===v.shape[2],function(){return"Error in fused depthwiseConv2d: number of input channels ("+g.shape[3]+") must match the inChannels dimension in filter "+v.shape[2]+"."}),u==null&&(u=[1,1]),k(st(n,u),function(){return"Error in fused depthwiseConv2d: Either strides or dilations must be 1. Got strides "+n+" and dilations '"+u+"'"}),c!=null&&k(Ne(o),function(){return"Error in fused depthwiseConv2d: pad must be an integer when using dimRoundingMode "+c+" but got pad "+o+"."});var b,y,w=Pn(g.shape,v.shape,n,u,o,c,!0);l!=null&&(b=Se(b=C(l,"bias","fused conv2d"),m)[0],le(w.outShape,b.shape)),p!=null&&(y=C(p,"prelu weights","fused depthwiseConv2d"));var _={x:g,filter:v};l!=null&&(_.bias=b),p!=null&&(_.preluActivationWeights=y);var S=[v,g],I=N.runKernelFunc(function(E,R){var D=E.fusedDepthwiseConv2D({input:g,filter:v,convInfo:w,bias:b,activation:f,preluActivationWeights:y});return R([v,g,D]),D},_,function(E,R){k(ir(u),function(){return"Error in gradient of fused depthwiseConv2d: dilation rates greater than 1 are not yet supported. Got dilations '"+u+"'"});var D=R[0],A=R[1],M=R[2],O=Fa(E,M,f),B={};return l!=null&&(B={bias:function(){return Pa(b,O)}}),Object.assign({x:function(){return Vc(A.shape,O,D,w)},filter:function(){return zc(A,O,D.shape,w)}},B)},"FusedDepthwiseConv2D",{convInfo:w,activation:f},S,[!0]);return x?I.as3D(I.shape[1],I.shape[2],I.shape[3]):I}}),Eg=Object.freeze({matMul:wg,conv2d:_g,depthwiseConv2d:Cg}),Rg=Object.freeze({image:Da,linalg:pg,losses:cg,spectral:Xm,fused:Eg,signal:Zm,square:iv,squaredDifference:Ec,conv1d:dm,conv2d:wt,conv3d:vm,depthwiseConv2d:Mo,separableConv2d:ka,conv2dTranspose:mm,conv3dTranspose:gm,op:T,batchNormalization2d:Ov,batchNormalization3d:Mv,batchNormalization4d:Bv,batchNormalization:Lv,batchNorm:Tc,batchNorm2d:Wv,batchNorm3d:Uv,batchNorm4d:Vv,booleanMaskAsync:pm,complex:qe,real:xt,imag:Ot,concat:Me,concat1d:Ef,concat2d:Rf,concat3d:kf,concat4d:If,split:fa,matMul:Bo,dot:ym,outerProduct:xm,reverse:Fr,reverse1d:bm,reverse2d:wm,reverse3d:_m,reverse4d:Cm,maxPool:Ve,avgPool:Pr,pool:Em,maxPool3d:Rm,avgPool3d:km,slice:Vt,slice1d:Im,slice2d:Sm,slice3d:qc,slice4d:Am,abs:av,acos:sv,acosh:uv,asin:cv,asinh:lv,atan:hv,atanh:fv,ceil:pv,clipByValue:_a,cos:dv,cosh:vv,erf:mv,exp:Ki,expm1:gv,floor:yv,log:xv,log1p:bv,logSigmoid:wv,neg:Eo,reciprocal:_v,round:Cv,rsqrt:Rc,sigmoid:kc,sign:Ev,isNaN:Rv,isInf:kv,isFinite:Iv,sin:Sv,sinh:Av,softplus:Tv,sqrt:Dv,step:Nv,tan:Fv,tanh:Pv,all:Tm,any:Dm,argMax:Nm,argMin:Fm,logSumExp:Pm,max:Lo,mean:Om,min:Mm,moments:Bm,sum:Kc,prod:Lm,equal:Oc,equalStrict:rm,greater:om,greaterEqual:Mc,greaterEqualStrict:im,greaterStrict:am,less:sm,lessEqual:um,lessEqualStrict:cm,lessStrict:lm,notEqual:hm,notEqualStrict:fm,add:ue,addN:Hv,addStrict:qv,atan2:jv,div:Ct,divNoNan:Kv,divStrict:Xv,floorDiv:Fc,maximum:Ca,maximumStrict:$v,minimum:Pc,minimumStrict:Yv,mod:Jv,modStrict:Qv,mul:Ze,mulStrict:Zv,pow:Ro,powStrict:em,squaredDifferenceStrict:tm,sub:We,subStrict:nm,elu:Xc,leakyRelu:Wm,prelu:$c,relu:Ie,relu6:Yc,selu:Um,logicalAnd:Oo,logicalNot:zv,logicalOr:Dc,logicalXor:Gv,where:Dn,whereAsync:Nc,buffer:oe,print:Mf,batchToSpaceND:Ku,broadcastTo:Bf,cast:Lf,clone:Wf,cumsum:Uf,depthToSpace:Vf,expandDims:gt,eye:Xu,multinomial:zf,oneHot:Gi,pad:Fn,pad1d:Gf,pad2d:Hf,pad3d:qf,pad4d:jf,rand:Kf,randomNormal:Xf,randomGamma:$f,randomUniform:$u,reshape:Et,spaceToBatchND:Yu,squeeze:Ju,stack:vt,tile:Yn,truncatedNormal:Yf,unstack:Be,setdiff1dAsync:Jf,fill:Wt,linspace:Cf,ones:sr,range:mo,scalar:q,tensor:Ke,tensor1d:Fe,tensor2d:dn,tensor3d:ha,tensor4d:nt,tensor5d:bf,tensor6d:wf,variable:_f,zeros:Ce,onesLike:ju,zerosLike:me,transpose:yn,softmax:nn,logSoftmax:op,localResponseNormalization:Vm,norm:Jc,gather:Ea,unsortedSegmentSum:Bc,basicLSTMCell:zm,multiRNNCell:Gm,movingAverage:Hm,stridedSlice:qm,topk:jm,scatterND:Km,fft:Ia,ifft:ko,rfft:Sa,irfft:Qc,sparseToDense:$m,gatherND:Ym,diag:Jm,dropout:Qm,hannWindow:Aa,hammingWindow:el,frame:Ta,stft:tl,inTopKAsync:eg});function z(r,t){Array.isArray(r)||(r=[r]),r.forEach(function(e){e!=null&&k(e.dtype!=="complex64",function(){return t+" does not support complex64 tensors."})})}function yi(r,t,e,n){if(e==="linear")return r.linear(t);if(e==="relu")return r.relu(t);if(e==="elu")return r.elu(t);if(e==="relu6")return r.relu6(t);if(e==="prelu")return r.prelu(t,n);throw new Error("Activation "+e+" has not been implemented for the CPU backend.")}var kg=function(r){function t(){var e=r.call(this)||this;return e.blockSize=48,e.firstUse=!0,e.data=new oc(e,N),e}return kt(t,r),t.prototype.write=function(e,n,o){this.firstUse&&(this.firstUse=!1,L().get("IS_NODE")&&po(`
============================
Hi there 👋. Looks like you are running TensorFlow.js in Node.js. To speed things up dramatically, install our node backend, which binds to TensorFlow C++, by running npm i @tensorflow/tfjs-node, or npm i @tensorflow/tfjs-node-gpu if you have CUDA. Then call require('@tensorflow/tfjs-node'); (-gpu suffix for CUDA) at the start of your program. Visit https://github.com/tensorflow/tfjs-node for more details.
============================`));var i={};return this.data.set(i,{values:e,dtype:o}),i},t.prototype.move=function(e,n,o,i){this.data.set(e,{values:n,dtype:i})},t.prototype.numDataIds=function(){return this.data.numDataIds()},t.prototype.read=function(e){return X(this,void 0,void 0,function(){return $(this,function(n){return[2,this.readSync(e)]})})},t.prototype.readSync=function(e){var n=this.data.get(e),o=n.dtype,i=n.complexTensors;return o==="complex64"?ji(this.readSync(i.real.dataId),this.readSync(i.imag.dataId)):this.data.get(e).values},t.prototype.bufferSync=function(e){var n=this.readSync(e.dataId),o=n;if(e.dtype==="string")try{o=n.map(function(i){return lo(i)})}catch{throw new Error("Failed to decode encoded string bytes into utf-8")}return oe(e.shape,e.dtype,o)},t.prototype.makeOutput=function(e,n,o){var i=this.write(e,n,o);return N.makeTensorFromDataId(i,n,o,this)},t.prototype.disposeData=function(e){if(this.data.has(e)){var n=this.data.get(e).complexTensors;n!=null&&(n.real.dispose(),n.imag.dispose()),this.data.delete(e)}},t.prototype.time=function(e){return X(this,void 0,void 0,function(){var n;return $(this,function(o){return n=Ft(),e(),[2,{kernelMs:Ft()-n}]})})},t.prototype.memory=function(){return{unreliable:!0,reasons:["The reported memory is an upper bound. Due to automatic garbage collection, the true allocated memory may be less."]}},t.prototype.complex=function(e,n){var o=this.makeOutput(null,e.shape,"complex64");return this.data.get(o.dataId).complexTensors={real:N.keep(e.clone()),imag:N.keep(n.clone())},o},t.prototype.real=function(e){return this.data.get(e.dataId).complexTensors.real.clone()},t.prototype.imag=function(e){return this.data.get(e.dataId).complexTensors.imag.clone()},t.prototype.slice=function(e,n,o){if(z(e,"slice"),nc(e.shape,n,o)){var i=rc(n,e.strides),a=Y(o);return Ke(this.readSync(e.dataId).subarray(i,i+a),o,e.dtype)}for(var s=oe(o,e.dtype),u=this.bufferSync(e),c=0;c<s.size;++c){var l=s.indexToLoc(c).map(function(h,f){return h+n[f]});s.values[c]=u.get.apply(u,l)}return s.toTensor()},t.prototype.stridedSlice=function(e,n,o,i){z(e,"stridedSlice");var a=da(n,o,i);if(a.some(function(p){return p===0}))return Ke([],a);for(var s=oe(a,e.dtype),u=this.bufferSync(e),c=0;c<s.size;c++){for(var l=s.indexToLoc(c),h=new Array(l.length),f=0;f<h.length;f++)h[f]=l[f]*i[f]+n[f];s.set.apply(s,[u.get.apply(u,h)].concat(l))}return s.toTensor()},t.prototype.diag=function(e){for(var n=this.readSync(e.dataId),o=oe([e.size,e.size],e.dtype),i=o.values,a=0;a<n.length;a++)i[a*e.size+a]=n[a];return o.toTensor()},t.prototype.unstack=function(e,n){for(var o=e.shape[n],i=new Array(e.rank-1),a=0,s=0;s<e.rank;s++)s!==n&&(i[a++]=e.shape[s]);var u=new Array(e.rank).fill(0),c=e.shape.slice();c[n]=1;var l=new Array(o);for(s=0;s<l.length;s++)u[n]=s,l[s]=this.slice(e,u,c).reshape(i);return l},t.prototype.reverse=function(e,n){z(e,"reverse");for(var o=oe(e.shape,e.dtype),i=this.bufferSync(e),a=function(u){var c=o.indexToLoc(u),l=c.slice();n.forEach(function(h){return l[h]=e.shape[h]-1-l[h]}),o.set.apply(o,[i.get.apply(i,l)].concat(c))},s=0;s<o.size;s++)a(s);return o.toTensor()},t.prototype.concat=function(e,n){var o=this;if(e[0].dtype==="complex64"){var i=e.map(function(p){return xt(p)}),a=e.map(function(p){return Ot(p)});return qe(this.concat(i,n),this.concat(a,n))}var s=e.map(function(p){var d=Y(p.shape.slice(n));return p.as2D(-1,d)}),u=or(s.map(function(p){return p.shape}),1),c=oe(u,e[0].dtype).values;if(s[0].shape[0]===1){var l=0;s.forEach(function(p){c.set(o.readSync(p.dataId),l),l+=p.size})}else{var h=0;s.forEach(function(p){for(var d=o.readSync(p.dataId),m=0,v=0;v<p.shape[0];++v)for(var g=v*u[1]+h,x=0;x<p.shape[1];++x)c[g+x]=d[m++];h+=p.shape[1]})}var f=or(e.map(function(p){return p.shape}),n);return Ke(c,f,e[0].dtype)},t.prototype.neg=function(e){return z(e,"neg"),this.multiply(q(-1),e)},t.prototype.add=function(e,n){return e.dtype==="complex64"||n.dtype==="complex64"?this.broadcastedBinaryComplexOp(e.cast("complex64"),n.cast("complex64"),function(o,i,a,s){return{real:o+a,imag:i+s}}):this.broadcastedBinaryOp(e,n,je(e.dtype,n.dtype),function(o,i){return o+i})},t.prototype.addN=function(e){var n=this;z(e,"addN");for(var o=e.map(function(l){return n.readSync(l.dataId)}),i=oe(e[0].shape,e[0].dtype),a=i.values,s=0;s<e.length;s++)for(var u=o[s],c=0;c<a.length;c++)a[c]+=u[c];return i.toTensor()},t.prototype.softmax=function(e,n){var o=Ue([n],e.shape),i=this.max(e,o),a=at(i.shape,o),s=this.subtract(e,i.reshape(a)),u=this.exp(s),c=this.sum(u,o).reshape(a);return this.realDivide(u,c)},t.prototype.subtract=function(e,n){return e.dtype==="complex64"||n.dtype==="complex64"?this.broadcastedBinaryComplexOp(e.cast("complex64"),n.cast("complex64"),function(o,i,a,s){return{real:o-a,imag:i-s}}):this.broadcastedBinaryOp(e,n,je(e.dtype,n.dtype),function(o,i){return o-i})},t.prototype.pow=function(e,n){return z([e,n],"pow"),this.broadcastedBinaryOp(e,n,e.dtype,function(o,i){return Math.pow(o,i)})},t.prototype.batchMatMul=function(e,n,o,i){z([e,n],"matMul");for(var a=o?e.shape[1]:e.shape[2],s=o?e.shape[2]:e.shape[1],u=i?n.shape[1]:n.shape[2],c=e.shape[0],l=this.readSync(e.dataId),h=this.readSync(n.dataId),f=o?[e.strides[0],1,e.strides[1]]:[e.strides[0],e.strides[1],1],p=f[0],d=f[1],m=f[2],v=i?[1,n.strides[1],n.strides[0]]:[n.strides[1],1,n.strides[0]],g=v[0],x=v[1],b=v[2],y=s*u,w=oe([c,s,u],e.dtype),_=w.values,S=this.blockSize,I=0;I<c;I++)for(var E=0;E<s;E+=S)for(var R=0;R<u;R+=S)for(var D=0;D<a;D+=S)for(var A=Math.min(E+S,s),M=Math.min(R+S,u),O=Math.min(D+S,a),B=E;B<A;B++)for(var V=R;V<M;V++){for(var U=0,W=D;W<O;W++)U+=l[I*p+B*d+W*m]*h[W*g+V*x+I*b];_[I*y+(B*u+V)]+=U}return w.toTensor()},t.prototype.fusedBatchMatMul=function(e){var n=e.a,o=e.b,i=e.transposeA,a=e.transposeB,s=e.bias,u=e.activation,c=e.preluActivationWeights,l=this.batchMatMul(n,o,i,a);return s&&(l=this.add(l,s)),u&&(l=yi(this,l,u,c)),l},t.prototype.multiply=function(e,n){return e.dtype==="complex64"||n.dtype==="complex64"?this.broadcastedBinaryComplexOp(e.cast("complex64"),n.cast("complex64"),function(o,i,a,s){return{real:o*a-i*s,imag:o*s+i*a}}):this.broadcastedBinaryOp(e,n,je(e.dtype,n.dtype),function(o,i){return o*i})},t.prototype.realDivide=function(e,n){return z([e,n],"realDivide"),this.broadcastedBinaryOp(e,n,"float32",function(o,i){return o/i})},t.prototype.floorDiv=function(e,n){return z([e,n],"floorDiv"),this.broadcastedBinaryOp(e,n,"int32",function(o,i){return Math.floor(o/i)})},t.prototype.sum=function(e,n){z(e,"sum"),lt("sum",n,e.rank);for(var o=$e(e.shape,n),i=o[0],a=o[1],s=Ce(i,je(e.dtype,"int32")),u=Y(a),c=this.readSync(s.dataId),l=this.readSync(e.dataId),h=0;h<c.length;++h){for(var f=h*u,p=0,d=0;d<u;++d)p+=l[f+d];c[h]=p}return s},t.prototype.prod=function(e,n){z(e,"sum");for(var o=$e(e.shape,n),i=o[0],a=o[1],s=Ce(i,je(e.dtype,"int32")),u=Y(a),c=this.readSync(s.dataId),l=this.readSync(e.dataId),h=0;h<c.length;++h){for(var f=h*u,p=1,d=0;d<u;++d)p*=l[f+d];c[h]=p}return s},t.prototype.unsortedSegmentSum=function(e,n,o){z(e,"unsortedSegmentSum");for(var i=[],a=e.rank-n.rank,s=0;s<a;++s)n=n.expandDims(s+1);for(s=0;s<o;++s){var u=q(s,"int32"),c=Oc(u,n).asType("float32").mul(e).sum(0);i.push(c)}return vt(i)},t.prototype.argMin=function(e,n){z(e,"argMin");var o=[n];lt("argMin",o,e.rank);for(var i=$e(e.shape,o),a=i[0],s=i[1],u=Ce(a,"int32"),c=Y(s),l=this.readSync(u.dataId),h=this.readSync(e.dataId),f=0;f<l.length;++f){for(var p=f*c,d=h[p],m=0,v=0;v<c;++v){var g=h[p+v];g<d&&(d=g,m=v)}l[f]=m}return u},t.prototype.argMax=function(e,n){z(e,"argMax");var o=[n];lt("argMax",o,e.rank);for(var i=$e(e.shape,o),a=i[0],s=i[1],u=Ce(a,"int32"),c=Y(s),l=this.readSync(u.dataId),h=this.readSync(e.dataId),f=0;f<l.length;++f){for(var p=f*c,d=h[p],m=0,v=0;v<c;++v){var g=h[p+v];g>d&&(d=g,m=v)}l[f]=m}return u},t.prototype.cumsum=function(e,n,o,i){if(z(e,"cumsum"),n!==e.rank-1)throw new Error("backend.cumsum in CPU expects an inner-most axis="+(e.rank-1)+" but got axis="+n);for(var a=je(e.dtype,"int32"),s=Ce(e.shape,a),u=this.readSync(s.dataId),c=this.readSync(e.dataId),l=e.shape[e.rank-1],h=i?function(v,g){return v+l-g-1}:function(v,g){return v+g},f=0;f<c.length;f+=l)for(var p=0;p<l;p++){var d=h(f,p);if(p===0)u[d]=o?0:c[d];else{var m=h(f,p-1);u[d]=o?c[m]+u[m]:c[d]+u[m]}}return s},t.prototype.equal=function(e,n){return z([e,n],"equal"),this.broadcastedBinaryOp(e,n,"bool",function(o,i){return o===i?1:0})},t.prototype.notEqual=function(e,n){return z([e,n],"notEqual"),this.broadcastedBinaryOp(e,n,"bool",function(o,i){return o!==i?1:0})},t.prototype.less=function(e,n){return z([e,n],"less"),this.broadcastedBinaryOp(e,n,"bool",function(o,i){return o<i?1:0})},t.prototype.lessEqual=function(e,n){return z([e,n],"lessEqual"),this.broadcastedBinaryOp(e,n,"bool",function(o,i){return o<=i?1:0})},t.prototype.greater=function(e,n){return z([e,n],"greater"),this.broadcastedBinaryOp(e,n,"bool",function(o,i){return o>i?1:0})},t.prototype.greaterEqual=function(e,n){return z([e,n],"greaterEqual"),this.broadcastedBinaryOp(e,n,"bool",function(o,i){return o>=i?1:0})},t.prototype.logicalNot=function(e){z(e,"logicalNot");for(var n=this.readSync(e.dataId),o=new Uint8Array(n.length),i=0;i<n.length;++i)o[i]=n[i]?0:1;return this.makeOutput(o,e.shape,"bool")},t.prototype.logicalAnd=function(e,n){return z([e,n],"logicalAnd"),this.broadcastedBinaryOp(e,n,"bool",function(o,i){return o&&i})},t.prototype.logicalOr=function(e,n){return z([e,n],"logicalOr"),this.broadcastedBinaryOp(e,n,"bool",function(o,i){return o||i})},t.prototype.select=function(e,n,o){z([e,n,o],"select");for(var i=this.readSync(e.dataId),a=this.readSync(n.dataId),s=this.readSync(o.dataId),u=Ce(n.shape,je(n.dtype,o.dtype)),c=this.readSync(u.dataId),l=0,h=e.rank===0||e.rank>1||n.rank===1?1:Y(n.shape.slice(1)),f=0;f<i.length;f++)for(var p=0;p<h;p++)i[f]===1?c[l++]=a[f]:c[l++]=s[f];return u},t.prototype.where=function(e){z([e],"where");var n=this.readSync(e.dataId);return ya(e.shape,n)},t.prototype.topk=function(e,n,o){return z(e,"topk"),fc(this.readSync(e.dataId),e.shape,e.dtype,n)},t.prototype.min=function(e,n){z(e,"min"),lt("min",n,e.rank);for(var o=$e(e.shape,n),i=o[0],a=o[1],s=Ce(i,e.dtype),u=Y(a),c=this.readSync(s.dataId),l=this.readSync(e.dataId),h=0;h<c.length;++h){for(var f=h*u,p=l[f],d=0;d<u;++d){var m=l[f+d];m<p&&(p=m)}c[h]=p}return s},t.prototype.minimum=function(e,n){return z([e,n],"minimum"),this.broadcastedBinaryOp(e,n,e.dtype,function(o,i){return Math.min(o,i)})},t.prototype.mod=function(e,n){return z([e,n],"mod"),this.broadcastedBinaryOp(e,n,e.dtype,function(o,i){var a=o%i;return o<0&&i<0||o>=0&&i>=0?a:(a+i)%i})},t.prototype.max=function(e,n){z(e,"max"),lt("max",n,e.rank);for(var o=$e(e.shape,n),i=o[0],a=o[1],s=Ce(i,e.dtype),u=Y(a),c=this.readSync(s.dataId),l=this.readSync(e.dataId),h=0;h<c.length;++h){for(var f=h*u,p=l[f],d=0;d<u;++d){var m=l[f+d];m>p&&(p=m)}c[h]=p}return s},t.prototype.maximum=function(e,n){return z([e,n],"maximum"),this.broadcastedBinaryOp(e,n,e.dtype,function(o,i){return Math.max(o,i)})},t.prototype.all=function(e,n){z(e,"all"),lt("all",n,e.rank);for(var o=$e(e.shape,n),i=o[0],a=o[1],s=Ce(i,e.dtype),u=Y(a),c=this.readSync(s.dataId),l=this.readSync(e.dataId),h=0;h<c.length;++h){for(var f=h*u,p=l[f],d=0;d<u;++d){var m=l[f+d];p=p&&m}c[h]=p}return s},t.prototype.any=function(e,n){z(e,"any"),lt("any",n,e.rank);for(var o=$e(e.shape,n),i=o[0],a=o[1],s=Ce(i,e.dtype),u=Y(a),c=this.readSync(s.dataId),l=this.readSync(e.dataId),h=0;h<c.length;++h){for(var f=h*u,p=l[f],d=0;d<u;++d){var m=l[f+d];p=p||m}c[h]=p}return s},t.prototype.squaredDifference=function(e,n){return z([e,n],"squaredDifference"),this.broadcastedBinaryOp(e,n,e.dtype,function(o,i){var a=o-i;return a*a})},t.prototype.ceil=function(e){z(e,"ceil");for(var n=this.readSync(e.dataId),o=new Float32Array(n.length),i=0;i<n.length;++i)o[i]=Math.ceil(n[i]);return this.makeOutput(o,e.shape,"float32")},t.prototype.floor=function(e){z(e,"floor");for(var n=this.readSync(e.dataId),o=new Float32Array(n.length),i=0;i<n.length;++i)o[i]=Math.floor(n[i]);return this.makeOutput(o,e.shape,"float32")},t.prototype.sign=function(e){z(e,"x");for(var n=this.readSync(e.dataId),o=new Float32Array(n.length),i=0;i<n.length;++i)n[i]<0?o[i]=-1:n[i]>0?o[i]=1:o[i]=0;return this.makeOutput(o,e.shape,"float32")},t.prototype.isNaN=function(e){z(e,"x");for(var n=this.readSync(e.dataId),o=new Uint8Array(n.length),i=0;i<n.length;++i)Number.isNaN(n[i])&&(o[i]=1);return this.makeOutput(o,e.shape,"bool")},t.prototype.isInf=function(e){z(e,"x");for(var n=this.readSync(e.dataId),o=new Uint8Array(n.length),i=0;i<n.length;++i)Math.abs(n[i])===1/0&&(o[i]=1);return this.makeOutput(o,e.shape,"bool")},t.prototype.isFinite=function(e){z(e,"x");for(var n=this.readSync(e.dataId),o=new Uint8Array(n.length),i=0;i<n.length;++i)Number.isFinite(n[i])&&(o[i]=1);return this.makeOutput(o,e.shape,"bool")},t.prototype.round=function(e){z(e,"round");for(var n=this.readSync(e.dataId),o=new Float32Array(n.length),i=0;i<n.length;++i){var a=Math.floor(n[i]);n[i]-a<.5?o[i]=Math.floor(n[i]):n[i]-a>.5?o[i]=Math.ceil(n[i]):o[i]=a%2==0?a:a+1}return this.makeOutput(o,e.shape,"float32")},t.prototype.exp=function(e){z(e,"exp");for(var n=this.readSync(e.dataId),o=new Float32Array(n.length),i=0;i<n.length;++i)o[i]=Math.exp(n[i]);return this.makeOutput(o,e.shape,"float32")},t.prototype.expm1=function(e){z(e,"expm1");for(var n=this.readSync(e.dataId),o=new Float32Array(n.length),i=0;i<n.length;++i)o[i]=Math.expm1(n[i]);return this.makeOutput(o,e.shape,"float32")},t.prototype.log=function(e){z(e,"log");for(var n=this.readSync(e.dataId),o=new Float32Array(n.length),i=0;i<n.length;++i){var a=n[i];o[i]=Math.log(a)}return this.makeOutput(o,e.shape,"float32")},t.prototype.log1p=function(e){z(e,"log1p");for(var n=this.readSync(e.dataId),o=new Float32Array(n.length),i=0;i<n.length;++i){var a=n[i];o[i]=Math.log1p(a)}return this.makeOutput(o,e.shape,"float32")},t.prototype.sqrt=function(e){z(e,"sqrt");for(var n=this.readSync(e.dataId),o=new Float32Array(n.length),i=0;i<n.length;++i){var a=n[i];o[i]=Math.sqrt(a)}return this.makeOutput(o,e.shape,"float32")},t.prototype.rsqrt=function(e){z(e,"rsqrt");for(var n=this.readSync(e.dataId),o=new Float32Array(n.length),i=0;i<n.length;++i){var a=n[i];o[i]=1/Math.sqrt(a)}return this.makeOutput(o,e.shape,"float32")},t.prototype.reciprocal=function(e){z(e,"reciprocal");for(var n=this.readSync(e.dataId),o=new Float32Array(n.length),i=0;i<n.length;++i)o[i]=1/n[i];return this.makeOutput(o,e.shape,"float32")},t.prototype.linear=function(e){return e},t.prototype.relu=function(e){z(e,"relu");for(var n=Ce(e.shape,e.dtype),o=this.readSync(n.dataId),i=this.readSync(e.dataId),a=0;a<i.length;++a)o[a]=Math.max(0,i[a]);return n},t.prototype.relu6=function(e){z(e,"relu");for(var n=Ce(e.shape,e.dtype),o=this.readSync(n.dataId),i=this.readSync(e.dataId),a=0;a<i.length;++a)o[a]=Math.min(Math.max(0,i[a]),6);return n},t.prototype.prelu=function(e,n){return z([e,n],"prelu"),this.broadcastedBinaryOp(e,n,e.dtype,function(o,i){return o<0?i*o:o})},t.prototype.elu=function(e){z(e,"elu");for(var n=new Float32Array(e.size),o=this.readSync(e.dataId),i=0;i<o.length;++i){var a=o[i];n[i]=a>=0?a:Math.exp(a)-1}return this.makeOutput(n,e.shape,"float32")},t.prototype.eluDer=function(e,n){z([e,n],"eluDer");for(var o=new Float32Array(n.size),i=this.readSync(n.dataId),a=this.readSync(e.dataId),s=0;s<i.length;++s){var u=i[s];o[s]=u>=1?a[s]:a[s]*(u+1)}return this.makeOutput(o,n.shape,"float32")},t.prototype.selu=function(e){z(e,"selu");for(var n=ba,o=wa,i=new Float32Array(e.size),a=this.readSync(e.dataId),s=0;s<a.length;++s){var u=a[s];i[s]=u>=0?o*u:n*(Math.exp(u)-1)}return this.makeOutput(i,e.shape,"float32")},t.prototype.clip=function(e,n,o){z(e,"clip");for(var i=new Float32Array(e.size),a=this.readSync(e.dataId),s=0;s<a.length;++s){var u=a[s];i[s]=u>o?o:u<n?n:u}return this.makeOutput(i,e.shape,"float32")},t.prototype.abs=function(e){for(var n=new Float32Array(e.size),o=this.readSync(e.dataId),i=0;i<o.length;++i)n[i]=Math.abs(o[i]);return this.makeOutput(n,e.shape,"float32")},t.prototype.complexAbs=function(e){for(var n=new Float32Array(e.size),o=this.readSync(e.dataId),i=0;i<e.size;++i){var a=o[2*i],s=o[2*i+1];n[i]=Math.hypot(a,s)}return this.makeOutput(n,e.shape,"float32")},t.prototype.int=function(e){z(e,"int");for(var n=new Int32Array(e.size),o=this.readSync(e.dataId),i=0;i<o.length;++i)n[i]=o[i];return this.makeOutput(n,e.shape,"int32")},t.prototype.sigmoid=function(e){z(e,"sigmoid");for(var n=new Float32Array(e.size),o=this.readSync(e.dataId),i=0;i<o.length;++i)n[i]=1/(1+Math.exp(-o[i]));return this.makeOutput(n,e.shape,"float32")},t.prototype.softplus=function(e){z(e,"softplus");for(var n=Math.log(11920928955078125e-23)+2,o=new Float32Array(e.size),i=this.readSync(e.dataId),a=0;a<i.length;++a){var s=i[a]>-n,u=i[a]<n,c=Math.exp(i[a]),l=void 0;l=u?c:s?i[a]:Math.log(1+c),o[a]=l}return this.makeOutput(o,e.shape,"float32")},t.prototype.sin=function(e){z(e,"sin");for(var n=new Float32Array(e.size),o=this.readSync(e.dataId),i=0;i<o.length;++i)n[i]=Math.sin(o[i]);return this.makeOutput(n,e.shape,"float32")},t.prototype.cos=function(e){z(e,"cos");for(var n=new Float32Array(e.size),o=this.readSync(e.dataId),i=0;i<o.length;++i)n[i]=Math.cos(o[i]);return this.makeOutput(n,e.shape,"float32")},t.prototype.tan=function(e){z(e,"tan");for(var n=new Float32Array(e.size),o=this.readSync(e.dataId),i=0;i<o.length;++i)n[i]=Math.tan(o[i]);return this.makeOutput(n,e.shape,"float32")},t.prototype.asin=function(e){z(e,"asin");for(var n=new Float32Array(e.size),o=this.readSync(e.dataId),i=0;i<o.length;++i)n[i]=Math.asin(o[i]);return this.makeOutput(n,e.shape,"float32")},t.prototype.acos=function(e){z(e,"acos");for(var n=new Float32Array(e.size),o=this.readSync(e.dataId),i=0;i<o.length;++i)n[i]=Math.acos(o[i]);return this.makeOutput(n,e.shape,"float32")},t.prototype.atan=function(e){z(e,"atan");for(var n=new Float32Array(e.size),o=this.readSync(e.dataId),i=0;i<o.length;++i)n[i]=Math.atan(o[i]);return this.makeOutput(n,e.shape,"float32")},t.prototype.atan2=function(e,n){return z([e,n],"atan2"),this.broadcastedBinaryOp(e,n,e.dtype,function(o,i){return Math.atan2(o,i)})},t.prototype.sinh=function(e){z(e,"sinh");for(var n=new Float32Array(e.size),o=this.readSync(e.dataId),i=0;i<o.length;++i)n[i]=Math.sinh(o[i]);return this.makeOutput(n,e.shape,"float32")},t.prototype.cosh=function(e){z(e,"cosh");for(var n=new Float32Array(e.size),o=this.readSync(e.dataId),i=0;i<o.length;++i)n[i]=Math.cosh(o[i]);return this.makeOutput(n,e.shape,"float32")},t.prototype.tanh=function(e){z(e,"tanh");for(var n=new Float32Array(e.size),o=this.readSync(e.dataId),i=0;i<o.length;++i)n[i]=kh(o[i]);return this.makeOutput(n,e.shape,"float32")},t.prototype.asinh=function(e){z(e,"asinh");for(var n=new Float32Array(e.size),o=this.readSync(e.dataId),i=0;i<o.length;++i)n[i]=Math.asinh(o[i]);return this.makeOutput(n,e.shape,"float32")},t.prototype.acosh=function(e){z(e,"acosh");for(var n=new Float32Array(e.size),o=this.readSync(e.dataId),i=0;i<o.length;++i)n[i]=Math.acosh(o[i]);return this.makeOutput(n,e.shape,"float32")},t.prototype.atanh=function(e){z(e,"atanh");for(var n=new Float32Array(e.size),o=this.readSync(e.dataId),i=0;i<o.length;++i)n[i]=Math.atanh(o[i]);return this.makeOutput(n,e.shape,"float32")},t.prototype.erf=function(e){z(e,"erf");for(var n=new Float32Array(e.size),o=this.readSync(e.dataId),i=0;i<o.length;++i){var a=Math.sign(o[i]),s=Math.abs(o[i]),u=1/(1+.3275911*s);n[i]=a*(1-((((1.061405429*u-1.453152027)*u+1.421413741)*u-.284496736)*u+.254829592)*u*Math.exp(-s*s))}return this.makeOutput(n,e.shape,"float32")},t.prototype.step=function(e,n){n===void 0&&(n=0),z(e,"step");for(var o=new Float32Array(e.size),i=this.readSync(e.dataId),a=0;a<i.length;++a){var s=i[a];isNaN(s)?o[a]=NaN:o[a]=s>0?1:n}return this.makeOutput(o,e.shape,"float32")},t.prototype.fusedConv2d=function(e){var n=e.input,o=e.filter,i=e.convInfo,a=e.bias,s=e.activation,u=e.preluActivationWeights,c=this.conv2d(n,o,i);return a&&(c=this.add(c,a)),s&&(c=yi(this,c,s,u)),c},t.prototype.conv2d=function(e,n,o){z([e,n],"conv2d");for(var i=o.filterHeight,a=o.filterWidth,s=o.dilationHeight,u=o.dilationWidth,c=o.padInfo.left,l=o.padInfo.top,h=o.dataFormat==="channelsLast",f=oe(o.outShape,e.dtype),p=e.strides[0],d=h?e.strides[1]:e.strides[2],m=h?e.strides[2]:1,v=h?1:e.strides[1],g=f.strides[0],x=h?f.strides[1]:f.strides[2],b=h?f.strides[2]:1,y=h?1:f.strides[1],w=this.readSync(e.dataId),_=this.readSync(n.dataId),S=f.values,I=0;I<o.batchSize;++I)for(var E=I*p,R=I*g,D=0;D<o.outHeight;++D)for(var A=R+D*x,M=D*o.strideHeight-l,O=0;O<i;O++){var B=M+O*s;if(!(B<0||B>=o.inHeight))for(var V=O*n.strides[0],U=E+B*d,W=0;W<o.outWidth;++W)for(var G=A+W*b,H=W*o.strideWidth-c,j=0;j<a;j++){var ee=H+j*u;if(!(ee<0||ee>=o.inWidth))for(var te=U+ee*m,ae=V+j*n.strides[1],se=0;se<o.inChannels;++se){for(var ce=w[te+se*v],de=0;de<o.outChannels;++de)S[G+de*y]+=ce*_[ae+de];ae+=o.outChannels}}}return f.toTensor()},t.prototype.conv3d=function(e,n,o){for(var i=o.filterDepth,a=o.filterHeight,s=o.filterWidth,u=o.dilationDepth,c=o.dilationHeight,l=o.dilationWidth,h=o.padInfo.front,f=o.padInfo.left,p=o.padInfo.top,d=oe(o.outShape,e.dtype),m=this.readSync(e.dataId),v=this.readSync(n.dataId),g=d.values,x=0;x<o.batchSize;++x)for(var b=x*e.strides[0],y=x*d.strides[0],w=0;w<o.outDepth;++w)for(var _=y+w*d.strides[1],S=w*o.strideDepth-h,I=0;I<i;I++){var E=S+I*u;if(!(E<0||E>=o.inDepth))for(var R=I*n.strides[0],D=b+E*e.strides[1],A=0;A<o.outHeight;++A)for(var M=_+A*d.strides[2],O=A*o.strideHeight-p,B=0;B<a;B++){var V=O+B*c;if(!(V<0||V>=o.inHeight))for(var U=R+B*n.strides[1],W=D+V*e.strides[2],G=0;G<o.outWidth;++G)for(var H=M+G*o.outChannels,j=G*o.strideWidth-f,ee=0;ee<s;ee++){var te=j+ee*l;if(!(te<0||te>=o.inWidth))for(var ae=U+ee*n.strides[2],se=W+te*o.inChannels,ce=ae,de=0;de<o.inChannels;++de){for(var he=m[se+de],ve=0;ve<o.outChannels;++ve)g[H+ve]+=he*v[ce+ve];ce+=o.outChannels}}}}return d.toTensor()},t.prototype.conv2dDerInput=function(e,n,o){z([e,n],"conv2dDerInput");for(var i=oe(o.inShape,"float32"),a=i.values,s=this.readSync(e.dataId),u=this.readSync(n.dataId),c=n.strides,l=c[0],h=c[1],f=c[2],p=o.batchSize,d=o.filterHeight,m=o.filterWidth,v=o.inChannels,g=o.inHeight,x=o.inWidth,b=o.outChannels,y=o.outHeight,w=o.outWidth,_=o.strideHeight,S=o.strideWidth,I=o.dataFormat,E=d-1-o.padInfo.top,R=m-1-o.padInfo.left,D=I==="channelsLast",A=i.strides[0],M=D?i.strides[1]:i.strides[2],O=D?i.strides[2]:1,B=D?1:i.strides[1],V=e.strides[0],U=D?e.strides[1]:e.strides[2],W=D?e.strides[2]:1,G=D?1:e.strides[1],H=0;H<p;++H)for(var j=0;j<v;++j)for(var ee=0;ee<g;++ee)for(var te=ee-E,ae=Math.max(0,Math.ceil(te/_)),se=Math.min(y,(d+te)/_),ce=0;ce<x;++ce){for(var de=ce-R,he=Math.max(0,Math.ceil(de/S)),ve=Math.min(w,(m+de)/S),De=0,fe=ae;fe<se;++fe)for(var we=fe*_-te,ye=he;ye<ve;++ye)for(var Ae=V*H+U*fe+W*ye,Ee=l*(d-1-we)+h*(m-1-(ye*S-de))+f*j,Re=0;Re<b;++Re)De+=s[Ae+G*Re]*u[Ee+Re];a[A*H+M*ee+O*ce+B*j]=De}return i.toTensor()},t.prototype.conv3dDerInput=function(e,n,o){for(var i=oe(o.inShape,"float32"),a=i.values,s=i.strides,u=s[0],c=s[1],l=s[2],h=s[3],f=this.readSync(e.dataId),p=e.strides,d=p[0],m=p[1],v=p[2],g=p[3],x=this.readSync(n.dataId),b=n.strides,y=b[0],w=b[1],_=b[2],S=b[3],I=o.batchSize,E=o.filterDepth,R=o.filterHeight,D=o.filterWidth,A=o.inChannels,M=o.inDepth,O=o.inHeight,B=o.inWidth,V=o.outChannels,U=o.outDepth,W=o.outHeight,G=o.outWidth,H=o.strideDepth,j=o.strideHeight,ee=o.strideWidth,te=E-1-o.padInfo.front,ae=R-1-o.padInfo.top,se=D-1-o.padInfo.left,ce=0;ce<I;++ce)for(var de=0;de<A;++de)for(var he=0;he<M;++he)for(var ve=he-te,De=Math.max(0,Math.ceil(ve/H)),fe=Math.min(U,(E+ve)/H),we=0;we<O;++we)for(var ye=we-ae,Ae=Math.max(0,Math.ceil(ye/j)),Ee=Math.min(W,(R+ye)/j),Re=0;Re<B;++Re){for(var St=Re-se,At=Math.max(0,Math.ceil(St/ee)),ut=Math.min(G,(D+St)/ee),Bn=0,Kt=De;Kt<fe;++Kt)for(var un=Kt*H-ve,Xt=Ae;Xt<Ee;++Xt)for(var Ln=Xt*j-ye,$t=At;$t<ut;++$t)for(var Yo=d*ce+m*Kt+v*Xt+g*$t,Wn=y*(E-1-un)+w*(R-1-Ln)+_*(D-1-($t*ee-St))+S*de,Tt=0;Tt<V;++Tt)Bn+=f[Yo+Tt]*x[Wn+Tt];a[u*ce+c*he+l*we+h*Re+de]=Bn}return i.toTensor()},t.prototype.conv2dDerFilter=function(e,n,o){z([e,n],"conv2dDerFilter");for(var i=o.strideHeight,a=o.strideWidth,s=o.filterHeight,u=o.filterWidth,c=o.dataFormat==="channelsLast",l=oe(o.filterShape,"float32"),h=o.padInfo.left,f=o.padInfo.top,p=this.bufferSync(e),d=this.bufferSync(n),m=0;m<s;++m)for(var v=Math.max(0,Math.ceil((f-m)/i)),g=Math.min(o.outHeight,(o.inHeight+f-m)/i),x=0;x<u;++x)for(var b=Math.max(0,Math.ceil((h-x)/a)),y=Math.min(o.outWidth,(o.inWidth+h-x)/a),w=0;w<o.inChannels;++w)for(var _=0;_<o.outChannels;++_){for(var S=0,I=0;I<o.batchSize;++I)for(var E=v;E<g;++E)for(var R=m+E*i-f,D=b;D<y;++D){var A=x+D*a-h;S+=c?p.get(I,R,A,w)*d.get(I,E,D,_):p.get(I,w,R,A)*d.get(I,_,E,D)}l.set(S,m,x,w,_)}return l.toTensor()},t.prototype.conv3dDerFilter=function(e,n,o){for(var i=o.strideDepth,a=o.strideHeight,s=o.strideWidth,u=o.filterDepth,c=o.filterHeight,l=o.filterWidth,h=oe(o.filterShape,"float32"),f=h.values,p=h.strides,d=p[0],m=p[1],v=p[2],g=p[3],x=this.readSync(n.dataId),b=n.strides,y=b[0],w=b[1],_=b[2],S=b[3],I=this.readSync(e.dataId),E=e.strides,R=E[0],D=E[1],A=E[2],M=E[3],O=o.padInfo.front,B=o.padInfo.left,V=o.padInfo.top,U=0;U<u;++U)for(var W=Math.max(0,Math.ceil((O-U)/i)),G=Math.min(o.outDepth,(o.inDepth+O-U)/i),H=U*d,j=0;j<c;++j)for(var ee=Math.max(0,Math.ceil((V-j)/a)),te=Math.min(o.outHeight,(o.inHeight+V-j)/a),ae=j*m+H,se=0;se<l;++se)for(var ce=Math.max(0,Math.ceil((B-se)/s)),de=Math.min(o.outWidth,(o.inWidth+B-se)/s),he=se*v+ae,ve=0;ve<o.inChannels;++ve)for(var De=ve*g+he,fe=0;fe<o.outChannels;++fe){for(var we=0,ye=0;ye<o.batchSize;++ye)for(var Ae=ye*R,Ee=ye*y,Re=W;Re<G;++Re)for(var St=(U+Re*i-O)*D+Ae,At=Re*w+Ee,ut=ee;ut<te;++ut)for(var Bn=(j+ut*a-V)*A+St,Kt=ut*_+At,un=ce;un<de;++un){var Xt=un*S+Kt;we+=I[(se+un*s-B)*M+Bn+ve]*x[Xt+fe]}f[De+fe]=we}return h.toTensor()},t.prototype.fusedDepthwiseConv2D=function(e){var n=e.input,o=e.filter,i=e.convInfo,a=e.bias,s=e.activation,u=e.preluActivationWeights,c=this.depthwiseConv2D(n,o,i);return a&&(c=this.add(c,a)),s&&(c=yi(this,c,s,u)),c},t.prototype.depthwiseConv2D=function(e,n,o){z([e,n],"depthwiseConv2D");for(var i=o.filterHeight,a=o.filterWidth,s=o.dilationHeight,u=o.dilationWidth,c=o.padInfo.left,l=o.padInfo.top,h=o.outChannels/o.inChannels,f=oe(o.outShape,e.dtype),p=this.readSync(e.dataId),d=this.readSync(n.dataId),m=f.values,v=0;v<o.batchSize;++v)for(var g=v*e.strides[0],x=v*f.strides[0],b=0;b<o.outHeight;++b)for(var y=x+b*f.strides[1],w=b*o.strideHeight-c,_=0;_<i;++_){var S=w+_*s;if(!(S<0||S>=o.inHeight))for(var I=_*n.strides[0],E=g+S*e.strides[1],R=0;R<o.outWidth;++R)for(var D=y+R*f.strides[2],A=R*o.strideWidth-l,M=0;M<a;++M){var O=A+M*u;if(!(O<0||O>=o.inWidth))for(var B=I+M*n.strides[1],V=E+O*o.inChannels,U=D,W=B,G=0;G<o.inChannels;++G){for(var H=p[V+G],j=0;j<h;++j)m[U+j]+=H*d[W+j];U+=h,W+=h}}}return f.toTensor()},t.prototype.depthwiseConv2DDerInput=function(e,n,o){z([e,n],"depthwiseConv2DDerInput");for(var i=oe(o.inShape,"float32"),a=i.values,s=i.strides,u=s[0],c=s[1],l=s[2],h=this.readSync(e.dataId),f=e.strides,p=f[0],d=f[1],m=f[2],v=this.readSync(n.dataId),g=n.strides,x=g[0],b=g[1],y=g[2],w=o.batchSize,_=o.filterHeight,S=o.filterWidth,I=o.inChannels,E=o.inHeight,R=o.inWidth,D=o.outChannels,A=o.outHeight,M=o.outWidth,O=o.strideHeight,B=o.strideWidth,V=_-1-o.padInfo.top,U=S-1-o.padInfo.left,W=D/I,G=0;G<w;++G)for(var H=0;H<I;++H)for(var j=0;j<E;++j)for(var ee=j-V,te=Math.max(0,Math.ceil(ee/O)),ae=Math.min(A,(_+ee)/O),se=0;se<R;++se){for(var ce=se-U,de=Math.max(0,Math.ceil(ce/B)),he=Math.min(M,(S+ce)/B),ve=0,De=te;De<ae;++De)for(var fe=De*O-ee,we=de;we<he;++we)for(var ye=p*G+d*De+m*we,Ae=x*(_-1-fe)+b*(S-1-(we*B-ce))+y*H,Ee=0;Ee<W;++Ee)ve+=h[ye+(H*W+Ee)]*v[Ae+Ee];a[u*G+c*j+l*se+H]=ve}return i.toTensor()},t.prototype.depthwiseConv2DDerFilter=function(e,n,o){z([e,n],"depthwiseConv2DDerFilter");for(var i=o.strideHeight,a=o.strideWidth,s=o.filterHeight,u=o.filterWidth,c=oe(o.filterShape,"float32"),l=o.padInfo.left,h=o.padInfo.top,f=o.outChannels/o.inChannels,p=this.bufferSync(e),d=this.bufferSync(n),m=0;m<s;++m)for(var v=Math.max(0,Math.ceil((h-m)/i)),g=Math.min(o.outHeight,(o.inHeight+h-m)/i),x=0;x<u;++x)for(var b=Math.max(0,Math.ceil((l-x)/a)),y=Math.min(o.outWidth,(o.inWidth+l-x)/a),w=0;w<o.outChannels;++w){for(var _=Math.trunc(w/f),S=w%f,I=0,E=0;E<o.batchSize;++E)for(var R=v;R<g;++R)for(var D=m+R*i-h,A=b;A<y;++A){var M=x+A*a-l;I+=p.get(E,D,M,_)*d.get(E,R,A,w)}c.set(I,m,x,_,S)}return c.toTensor()},t.prototype.tile=function(e,n){return z(e,"tile"),hc(this.bufferSync(e),n)},t.prototype.pad=function(e,n,o){z(e,"pad");var i=n.map(function(f,p){return f[0]+e.shape[p]+f[1]}),a=n.map(function(f){return f[0]}),s=this.bufferSync(e),u=oe(i,e.dtype);o!==0&&u.values.fill(o);for(var c=0;c<e.size;c++){var l=s.indexToLoc(c),h=l.map(function(f,p){return f+a[p]});u.set.apply(u,[s.get.apply(s,l)].concat(h))}return u.toTensor()},t.prototype.transpose=function(e,n){z(e,"transpose");for(var o=new Array(e.rank),i=0;i<o.length;i++)o[i]=e.shape[n[i]];var a=this.readSync(e.dataId),s=oe(o,e.dtype),u=this.bufferSync(e);for(i=0;i<e.size;++i){for(var c=u.indexToLoc(i),l=new Array(c.length),h=0;h<l.length;h++)l[h]=c[n[h]];var f=s.locToIndex(l);s.values[f]=a[i]}return s.toTensor()},t.prototype.gather=function(e,n,o){z([e,n],"gather");var i=e.shape.slice(),a=this.readSync(n.dataId);i[o]=a.length;for(var s=oe(i,e.dtype),u=this.bufferSync(e),c=0;c<s.size;++c){var l=s.indexToLoc(c),h=l.slice();h[o]=a[l[o]];var f=u.locToIndex(h);s.values[c]=u.values[f]}return s.toTensor()},t.prototype.batchToSpaceND=function(e,n,o){z([e],"batchToSpaceND");var i=n.reduce(function(h,f){return h*f}),a=go(e.shape,n,i),s=yo(a.length,n.length),u=xo(e.shape,n,i),c=Qu(o,n.length),l=Zu(u,o,n.length);return e.reshape(a).transpose(s).reshape(u).slice(c,l)},t.prototype.spaceToBatchND=function(e,n,o){z([e],"spaceToBatchND");var i=n.reduce(function(f,p){return f*p}),a=[[0,0]];a.push.apply(a,o);for(var s=1+n.length;s<e.shape.length;++s)a.push([0,0]);var u=e.pad(a),c=go(u.shape,n,i,!1),l=yo(c.length,n.length,!1),h=xo(u.shape,n,i,!1);return u.reshape(c).transpose(l).reshape(h)},t.prototype.pool=function(e,n,o){z(e,"pool");for(var i=n.strideHeight,a=n.strideWidth,s=n.dilationHeight,u=n.dilationWidth,c=n.effectiveFilterHeight,l=n.effectiveFilterWidth,h=n.padInfo.top,f=n.padInfo.left,p=o==="max"?Number.NEGATIVE_INFINITY:Number.POSITIVE_INFINITY,d=this.readSync(e.dataId),m=oe(n.outShape,e.dtype),v=m.values,g=n.outShape[1]*n.outShape[2]*n.outShape[3],x=n.outShape[2]*n.outShape[3],b=n.outShape[3],y=0;y<n.batchSize;++y)for(var w=y*g,_=y*e.strides[0],S=0;S<n.inChannels;++S)for(var I=0;I<n.outHeight;++I)for(var E=I*i-h,R=Math.max(0,E),D=Math.min(n.inHeight,c+E),A=w+I*x,M=0;M<n.outWidth;++M){for(var O=M*a-f,B=Math.max(0,O),V=Math.min(n.inWidth,l+O),U=p,W=0,G=0,H=R;H<D;H+=s){for(var j=_+H*e.strides[1],ee=B;ee<V;ee+=u){var te=d[j+ee*e.strides[2]+S];o==="max"&&te>U?U=te:o==="avg"&&(W+=te,G++)}if(isNaN(U))break}v[A+M*b+S]=o==="avg"?W/G:U}return m.toTensor()},t.prototype.maxPool=function(e,n){return this.pool(e,n,"max")},t.prototype.maxPoolPositions=function(e,n){for(var o=oe(n.outShape,"int32"),i=n.strideHeight,a=n.strideWidth,s=n.dilationHeight,u=n.dilationWidth,c=n.effectiveFilterHeight,l=n.effectiveFilterWidth,h=n.padInfo.top,f=n.padInfo.left,p=this.bufferSync(e),d=0;d<n.batchSize;++d)for(var m=0;m<n.inChannels;++m)for(var v=0;v<n.outHeight;++v){for(var g=v*i-h,x=g;x<0;)x+=s;for(var b=Math.min(n.inHeight,c+g),y=0;y<n.outWidth;++y){for(var w=y*a-f,_=w;_<0;)_+=u;for(var S=Math.min(n.inWidth,l+w),I=Number.NEGATIVE_INFINITY,E=-1,R=x;R<b;R+=s)for(var D=R-g,A=_;A<S;A+=u){var M=A-w,O=p.get(d,R,A,m);O>I&&(I=O,E=D*l+M)}o.set(E,d,v,y,m)}}return o.toTensor()},t.prototype.maxPoolBackprop=function(e,n,o,i){z([n,o],"maxPoolBackprop");for(var a=this.maxPoolPositions(n,i),s=i.strideHeight,u=i.strideWidth,c=i.dilationHeight,l=i.dilationWidth,h=i.effectiveFilterHeight,f=i.effectiveFilterWidth,p=f-1-i.padInfo.left,d=h-1-i.padInfo.top,m=oe(n.shape,"float32"),v=this.bufferSync(a),g=this.bufferSync(e),x=0;x<i.batchSize;++x)for(var b=0;b<i.inChannels;++b)for(var y=0;y<i.inHeight;++y)for(var w=0;w<i.inWidth;++w){for(var _=y-d,S=w-p,I=0,E=0;E<h;E+=c){var R=(_+E)/s;if(!(R<0||R>=i.outHeight||Math.floor(R)!==R))for(var D=0;D<f;D+=l){var A=(S+D)/u;if(!(A<0||A>=i.outWidth||Math.floor(A)!==A)){var M=h*f-1-v.get(x,R,A,b)===E*f+D?1:0;M!==0&&(I+=g.get(x,R,A,b)*M)}}}m.set(I,x,y,w,b)}return m.toTensor()},t.prototype.avgPoolBackprop=function(e,n,o){z([e,n],"avgPoolBackprop");for(var i=o.strideHeight,a=o.strideWidth,s=o.filterHeight,u=o.filterWidth,c=o.dilationHeight,l=o.dilationWidth,h=o.effectiveFilterHeight,f=o.effectiveFilterWidth,p=f-1-o.padInfo.left,d=h-1-o.padInfo.top,m=oe(n.shape,"float32"),v=1/(s*u),g=this.bufferSync(e),x=0;x<o.batchSize;++x)for(var b=0;b<o.inChannels;++b)for(var y=0;y<o.inHeight;++y)for(var w=0;w<o.inWidth;++w){for(var _=y-d,S=w-p,I=0,E=0;E<h;E+=c){var R=(_+E)/i;if(!(R<0||R>=o.outHeight||Math.floor(R)!==R))for(var D=0;D<f;D+=l){var A=(S+D)/a;A<0||A>=o.outWidth||Math.floor(A)!==A||(I+=g.get(x,R,A,b))}}m.set(I*v,x,y,w,b)}return m.toTensor()},t.prototype.pool3d=function(e,n,o){z(e,"pool3d");for(var i=n.strideDepth,a=n.strideHeight,s=n.strideWidth,u=n.dilationDepth,c=n.dilationHeight,l=n.dilationWidth,h=n.effectiveFilterDepth,f=n.effectiveFilterHeight,p=n.effectiveFilterWidth,d=n.padInfo.front,m=n.padInfo.top,v=n.padInfo.left,g=o==="max"?Number.NEGATIVE_INFINITY:Number.POSITIVE_INFINITY,x=this.readSync(e.dataId),b=oe(n.outShape,e.dtype),y=b.values,w=n.outShape[1]*n.outShape[2]*n.outShape[3]*n.outShape[4],_=n.outShape[2]*n.outShape[3]*n.outShape[4],S=n.outShape[3]*n.outShape[4],I=n.outShape[4],E=0;E<n.batchSize;++E)for(var R=E*w,D=E*e.strides[0],A=0;A<n.inChannels;++A)for(var M=0;M<n.outDepth;++M){for(var O=M*i-d,B=O;B<0;)B+=u;for(var V=Math.min(n.inDepth,h+O),U=R+M*_,W=0;W<n.outHeight;++W){for(var G=W*a-m,H=G;H<0;)H+=c;for(var j=Math.min(n.inHeight,f+G),ee=U+W*S,te=0;te<n.outWidth;++te){for(var ae=te*s-v,se=ae;se<0;)se+=l;for(var ce=Math.min(n.inWidth,p+ae),de=ee+te*I,he=g,ve=0,De=0,fe=B;fe<V;fe+=u){for(var we=D+fe*e.strides[1],ye=H;ye<j;ye+=c){for(var Ae=we+ye*e.strides[2],Ee=se;Ee<ce;Ee+=l){var Re=x[Ae+Ee*e.strides[3]+A];if(o==="max"&&Re>he?he=Re:o==="avg"&&(ve+=Re,De++),isNaN(he))break}if(isNaN(he))break}if(isNaN(he))break}y[de+A]=o==="avg"?ve/De:he}}}return b.toTensor()},t.prototype.avgPool3d=function(e,n){return z(e,"avgPool3d"),this.pool3d(e,n,"avg").toFloat()},t.prototype.avgPool3dBackprop=function(e,n,o){z([e,n],"avgPool3dBackprop");for(var i=o.strideDepth,a=o.strideHeight,s=o.strideWidth,u=o.filterDepth,c=o.filterHeight,l=o.filterWidth,h=o.dilationDepth,f=o.dilationHeight,p=o.dilationWidth,d=o.effectiveFilterDepth,m=o.effectiveFilterHeight,v=o.effectiveFilterWidth,g=d-1-o.padInfo.front,x=v-1-o.padInfo.left,b=m-1-o.padInfo.top,y=oe(n.shape,"float32"),w=1/(u*c*l),_=this.bufferSync(e),S=0;S<o.batchSize;++S)for(var I=0;I<o.inChannels;++I)for(var E=0;E<o.inDepth;++E)for(var R=0;R<o.inHeight;++R)for(var D=0;D<o.inWidth;++D){for(var A=E-g,M=R-b,O=D-x,B=0,V=0;V<d;V+=h){var U=(A+V)/i;if(!(U<0||U>=o.outDepth||Math.floor(U)!==U))for(var W=0;W<m;W+=f){var G=(M+W)/a;if(!(G<0||G>=o.outHeight||Math.floor(G)!==G))for(var H=0;H<v;H+=p){var j=(O+H)/s;j<0||j>=o.outWidth||Math.floor(j)!==j||(B+=_.get(S,U,G,j,I))}}}y.set(B*w,S,E,R,D,I)}return y.toTensor()},t.prototype.maxPool3d=function(e,n){return z(e,"maxPool3d"),this.pool3d(e,n,"max").toFloat()},t.prototype.maxPool3dPositions=function(e,n){for(var o=oe(n.outShape,"int32"),i=n.strideDepth,a=n.strideHeight,s=n.strideWidth,u=n.dilationDepth,c=n.dilationHeight,l=n.dilationWidth,h=n.effectiveFilterDepth,f=n.effectiveFilterHeight,p=n.effectiveFilterWidth,d=n.padInfo.front,m=n.padInfo.top,v=n.padInfo.left,g=this.bufferSync(e),x=0;x<n.batchSize;++x)for(var b=0;b<n.inChannels;++b)for(var y=0;y<n.outDepth;++y){for(var w=y*i-d,_=w;_<0;)_+=u;for(var S=Math.min(n.inDepth,h+w),I=0;I<n.outHeight;++I){for(var E=I*a-m,R=E;R<0;)R+=c;for(var D=Math.min(n.inHeight,f+E),A=0;A<n.outWidth;++A){for(var M=A*s-v,O=M;O<0;)O+=l;for(var B=Math.min(n.inWidth,p+M),V=Number.NEGATIVE_INFINITY,U=-1,W=_;W<S;W+=u)for(var G=W-w,H=R;H<D;H+=c)for(var j=H-E,ee=O;ee<B;ee+=l){var te=ee-M,ae=g.get(x,W,H,ee,b);ae>=V&&(V=ae,U=G*f*p+j*f+te)}o.set(U,x,y,I,A,b)}}}return o.toTensor()},t.prototype.maxPool3dBackprop=function(e,n,o,i){z([n,o],"maxPool3dBackprop");for(var a=this.maxPool3dPositions(n,i),s=i.strideDepth,u=i.strideHeight,c=i.strideWidth,l=i.dilationDepth,h=i.dilationHeight,f=i.dilationWidth,p=i.effectiveFilterDepth,d=i.effectiveFilterHeight,m=i.effectiveFilterWidth,v=p-1-i.padInfo.front,g=m-1-i.padInfo.left,x=d-1-i.padInfo.top,b=oe(n.shape,"float32"),y=this.bufferSync(a),w=this.bufferSync(e),_=0;_<i.batchSize;++_)for(var S=0;S<i.inChannels;++S)for(var I=0;I<i.inDepth;++I)for(var E=0;E<i.inHeight;++E)for(var R=0;R<i.inWidth;++R){for(var D=I-v,A=E-x,M=R-g,O=0,B=0;B<p;B+=l){var V=(D+B)/s;if(!(V<0||V>=i.outDepth||Math.floor(V)!==V))for(var U=0;U<d;U+=h){var W=(A+U)/u;if(!(W<0||W>=i.outHeight||Math.floor(W)!==W))for(var G=0;G<m;G+=f){var H=(M+G)/c;if(!(H<0||H>=i.outWidth||Math.floor(H)!==H)){var j=p*d*m-1-y.get(_,V,W,H,S)===B*d*m+U*m+G?1:0;j!==0&&(O+=w.get(_,V,W,H,S)*j)}}}}b.set(O,_,I,E,R,S)}return b.toTensor()},t.prototype.cast=function(e,n){return sc(e,n,this)},t.prototype.reshape=function(e,n){return qi(e,n)},t.prototype.avgPool=function(e,n){return z(e,"avgPool"),this.pool(e,n,"avg").toFloat()},t.prototype.resizeBilinear=function(e,n,o,i){z(e,"resizeBilinear");for(var a=e.shape,s=a[0],u=a[1],c=a[2],l=a[3],h=this.readSync(e.dataId),f=new Float32Array(Y([s,n,o,l])),p=[i&&n>1?u-1:u,i&&o>1?c-1:c],d=[i&&n>1?n-1:n,i&&o>1?o-1:o],m=0,v=p[0]/d[0],g=p[1]/d[1],x=0;x<s;x++)for(var b=0;b<n;b++)for(var y=v*b,w=Math.floor(y),_=y-w,S=Math.min(u-1,Math.ceil(y)),I=x*e.strides[0]+w*e.strides[1],E=x*e.strides[0]+S*e.strides[1],R=0;R<o;R++)for(var D=g*R,A=Math.floor(D),M=D-A,O=Math.min(c-1,Math.ceil(D)),B=I+A*e.strides[2],V=E+A*e.strides[2],U=I+O*e.strides[2],W=E+O*e.strides[2],G=0;G<l;G++){var H=h[B+G],j=h[V+G],ee=H+(h[U+G]-H)*M,te=ee+(j+(h[W+G]-j)*M-ee)*_;f[m++]=te}return Ke(f,[s,n,o,l])},t.prototype.resizeBilinearBackprop=function(e,n,o){z([e,n],"resizeBilinearBackprop");for(var i=n.shape,a=i[0],s=i[1],u=i[2],c=i[3],l=e.shape,h=l[1],f=l[2],p=new Float32Array(a*s*u*c),d=[o&&h>1?s-1:s,o&&f>1?u-1:u],m=[o&&h>1?h-1:h,o&&f>1?f-1:f],v=d[0]/m[0],g=d[1]/m[1],x=this.readSync(e.dataId),b=0,y=0;y<a;y++)for(var w=y*n.strides[0],_=0;_<h;_++)for(var S=_*v,I=Math.floor(S),E=Math.min(Math.ceil(S),s-1),R=w+I*n.strides[1],D=w+E*n.strides[1],A=S-I,M=1-A,O=0;O<f;O++)for(var B=O*g,V=Math.floor(B),U=Math.min(Math.ceil(B),u-1),W=B-V,G=1-W,H=R+V*n.strides[2],j=R+U*n.strides[2],ee=D+V*n.strides[2],te=D+U*n.strides[2],ae=M*G,se=M*W,ce=A*G,de=A*W,he=0;he<c;he++){var ve=x[b++];p[H+he]+=ve*ae,p[j+he]+=ve*se,p[ee+he]+=ve*ce,p[te+he]+=ve*de}return nt(p,[a,u,s,c],n.dtype)},t.prototype.resizeNearestNeighbor=function(e,n,o,i){z(e,"resizeNearestNeighbor");for(var a=e.shape,s=a[0],u=a[1],c=a[2],l=a[3],h=this.readSync(e.dataId),f=new Float32Array(s*n*o*l),p=[i&&n>1?u-1:u,i&&o>1?c-1:c],d=[i&&n>1?n-1:n,i&&o>1?o-1:o],m=p[0]/d[0],v=p[1]/d[1],g=0,x=0;x<s;x++)for(var b=x*e.strides[0],y=0;y<n;y++)for(var w=m*y,_=b+Math.min(u-1,i?Math.round(w):Math.floor(w))*e.strides[1],S=0;S<o;S++)for(var I=v*S,E=_+Math.min(c-1,i?Math.round(I):Math.floor(I))*e.strides[2],R=0;R<l;R++){var D=h[E+R];f[g++]=D}return Ke(f,[s,n,o,l],e.dtype)},t.prototype.resizeNearestNeighborBackprop=function(e,n,o){z([e,n],"resizeNearestNeighborBackprop");for(var i=n.shape,a=i[0],s=i[1],u=i[2],c=i[3],l=e.shape,h=l[1],f=l[2],p=new Float32Array(a*s*u*c),d=this.readSync(e.dataId),m=[o&&h>1?s-1:s,o&&f>1?u-1:u],v=[o&&h>1?h-1:h,o&&f>1?f-1:f],g=m[0]/v[0],x=m[1]/v[1],b=1/g,y=1/x,w=2*Math.ceil(b)+2,_=2*Math.ceil(y)+2,S=0;S<a;S++)for(var I=S*n.strides[0],E=0;E<s;E++)for(var R=I+E*n.strides[1],D=Math.floor(E*b),A=Math.floor(D-w/2),M=0;M<u;M++)for(var O=R+M*n.strides[2],B=Math.floor(M*y),V=Math.floor(B-_/2),U=0;U<c;U++){for(var W=0,G=0;G<w;G++){var H=G+A;if(!(H<0||H>=h)){var j=I+H*e.strides[1],ee=H*g;if(E===Math.min(s-1,o?Math.round(ee):Math.floor(ee)))for(var te=0;te<_;te++){var ae=te+V;if(!(ae<0||ae>=f)){var se=j+ae*e.strides[2],ce=ae*x;M===Math.min(u-1,o?Math.round(ce):Math.floor(ce))&&(W+=d[se+U])}}}}p[O+U]=W}return nt(p,n.shape,n.dtype)},t.prototype.batchNormalization=function(e,n,o,i,a,s){z([e,n,o,a,s],"batchNorm");for(var u=this.readSync(e.dataId),c=this.readSync(n.dataId),l=this.readSync(o.dataId),h=a?this.readSync(a.dataId):new Float32Array([1]),f=s?this.readSync(s.dataId):new Float32Array([0]),p=new Float32Array(u.length),d=f.length,m=h.length,v=l.length,g=c.length,x=0,b=0,y=0,w=0,_=0;_<u.length;++_)p[_]=f[x++]+(u[_]-c[b++])*h[y++]/Math.sqrt(l[w++]+i),x>=d&&(x=0),b>=g&&(b=0),y>=m&&(y=0),w>=v&&(w=0);return nt(p,e.shape)},t.prototype.localResponseNormalization4D=function(e,n,o,i,a){z(e,"localResponseNormalization4D");var s=e.shape[3],u=s-1,c=this.readSync(e.dataId),l=e.size,h=new Float32Array(l);function f(v){for(var g=v%s,x=v-g+Math.max(0,g-n),b=v-g+Math.min(g+n,u),y=0;x<=b;x++){var w=c[x];y+=w*w}return y}for(var p=0;p<l;p++){var d=f(p),m=c[p]*Math.pow(o+i*d,-a);h[p]=m}return nt(h,e.shape)},t.prototype.LRNGrad=function(e,n,o,i,a,s,u){z(e,"LRNGrad");for(var c=e.shape[3],l=this.readSync(e.dataId),h=this.readSync(n.dataId),f=this.readSync(o.dataId),p=new Float32Array(e.size),d=e.size,m=0;m<d;m++){for(var v=m%c,g=m-v+Math.max(0,v-i),x=m-v+Math.min(c,v+i+1),b=0,y=g;y<x;y++)b+=Math.pow(h[y],2);for(b=s*b+a,y=g;y<x;y++){var w=-2*s*u*h[y]*f[m]/b;m===y&&(w+=Math.pow(b,-u)),w*=l[m],p[y]+=w}}return nt(p,e.shape)},t.prototype.multinomial=function(e,n,o,i){z(e,"multinomial");for(var a=n?e:nn(e),s=a.shape[0],u=a.shape[1],c=Ce([s,o],"int32"),l=this.readSync(c.dataId),h=this.readSync(a.dataId),f=0;f<s;++f){var p=f*u,d=new Float32Array(u-1);d[0]=h[p];for(var m=1;m<d.length;++m)d[m]=d[m-1]+h[p+m];for(var v=No(i.toString()),g=f*o,x=0;x<o;++x){var b=v();l[g+x]=d.length;for(var y=0;y<d.length;y++)if(b<d[y]){l[g+x]=y;break}}}return c},t.prototype.oneHot=function(e,n,o,i){z(e,"oneHot");var a=new Float32Array(e.size*n);a.fill(i);for(var s=this.readSync(e.dataId),u=0;u<e.size;++u)s[u]>=0&&s[u]<n&&(a[u*n+s[u]]=o);return dn(a,[e.size,n],"int32")},t.prototype.nonMaxSuppression=function(e,n,o,i,a){return z(e,"nonMaxSuppression"),ma(this.readSync(e.dataId),this.readSync(n.dataId),o,i,a)},t.prototype.fft=function(e){return this.fftBatch(e,!1)},t.prototype.ifft=function(e){return this.fftBatch(e,!0)},t.prototype.fftBatch=function(e,n){for(var o=e.shape[0],i=e.shape[1],a=oe(e.shape,"float32"),s=oe(e.shape,"float32"),u=xt(e).as2D(o,i),c=Ot(e).as2D(o,i),l=0;l<o;l++)for(var h=u.slice([l,0],[1,i]),f=c.slice([l,0],[1,i]),p=qe(h,f),d=this.readSync(this.fftImpl(p,n).dataId),m=0;m<i;m++){var v=Fs(d,m);a.values[l*i+m]=v.real,s.values[l*i+m]=v.imag}return qe(a.toTensor(),s.toTensor()).as2D(o,i)},t.prototype.fftImpl=function(e,n){var o=e.as1D(),i=o.size;if(this.isExponentOf2(i)){var a=this.fftRadix2(o,i,n).as2D(e.shape[0],e.shape[1]);return n&&(a=qe(xt(a).div(q(i)),Ot(a).div(q(i)))),a}var s=this.readSync(e.dataId),u=function(c){for(var l=new Float32Array(c.length/2),h=new Float32Array(c.length/2),f=0;f<c.length;f+=2)l[f/2]=c[f],h[f/2]=c[f+1];return{real:l,imag:h}}(this.fourierTransformByMatmul(s,i,n));return qe(u.real,u.imag).as2D(e.shape[0],e.shape[1])},t.prototype.isExponentOf2=function(e){return(e&e-1)==0},t.prototype.fftRadix2=function(e,n,o){if(n===1)return e;var i=this.readSync(e.dataId),a=n/2,s=function(g){for(var x=Math.ceil(g.length/4),b=new Float32Array(x),y=new Float32Array(x),w=0;w<g.length;w+=4)b[Math.floor(w/4)]=g[w],y[Math.floor(w/4)]=g[w+1];return{real:b,imag:y}}(i),u=qe(s.real,s.imag).as1D(),c=function(g){for(var x=Math.floor(g.length/4),b=new Float32Array(x),y=new Float32Array(x),w=2;w<g.length;w+=4)b[Math.floor(w/4)]=g[w],y[Math.floor(w/4)]=g[w+1];return{real:b,imag:y}}(i),l=qe(c.real,c.imag).as1D();u=this.fftRadix2(u,a,o),l=this.fftRadix2(l,a,o);var h=function(g,x){for(var b=new Float32Array(g/2),y=new Float32Array(g/2),w=0;w<Math.ceil(g/2);w++){var _=(x?2:-2)*Math.PI*(w/g);b[w]=Math.cos(_),y[w]=Math.sin(_)}return{real:b,imag:y}}(n,o),f=qe(h.real,h.imag).mul(l),p=u.add(f),d=u.sub(f),m=xt(p).concat(xt(d)),v=Ot(p).concat(Ot(d));return qe(m,v).as1D()},t.prototype.fourierTransformByMatmul=function(e,n,o){for(var i=new Float32Array(2*n),a=0;a<n;a++){for(var s=0,u=0,c=0;c<n;c++){var l=ap(a*c,n,o),h=Fs(e,c);s+=h.real*l.real-h.imag*l.imag,u+=h.real*l.imag+h.imag*l.real}o&&(s/=n,u/=n),ip(i,s,u,a)}return i},t.prototype.depthToSpace=function(e,n,o){k(o==="NHWC",function(){return"Only NHWC dataFormat supported on CPU for depthToSpace. Got "+o}),k(n>1,function(){return"blockSize should be > 1 for depthToSpace, but was: "+n});for(var i=e.shape[0],a=e.shape[1],s=e.shape[2],u=e.shape[3],c=a*n,l=s*n,h=u/(n*n),f=this.readSync(e.dataId),p=new Float32Array(i*c*l*h),d=0,m=0;m<i;++m)for(var v=0;v<c;++v)for(var g=Math.floor(v/n),x=v%n,b=0;b<l;++b)for(var y=Math.floor(b/n),w=(x*n+b%n)*h,_=0;_<h;++_){var S=_+w+u*(y+s*(g+a*m));p[d++]=f[S]}return nt(p,[i,c,l,h])},t.prototype.broadcastedBinaryOp=function(e,n,o,i){var a=le(e.shape,n.shape),s=oe(a,o),u=this.readSync(e.dataId),c=this.readSync(n.dataId),l=hn(e.shape,a),h=hn(n.shape,a),f=s.values;if(l.length+h.length===0)for(var p=0;p<f.length;++p)f[p]=i(u[p%u.length],c[p%c.length]);else{var d=this.bufferSync(e),m=this.bufferSync(n),v=function(g){var x=s.indexToLoc(g),b=x.slice(-e.rank);l.forEach(function(S){return b[S]=0});var y=d.locToIndex(b),w=x.slice(-n.rank);h.forEach(function(S){return w[S]=0});var _=m.locToIndex(w);f[g]=i(u[y],c[_])};for(p=0;p<f.length;++p)v(p)}return s.toTensor()},t.prototype.broadcastedBinaryComplexOp=function(e,n,o){var i=le(e.shape,n.shape),a=oe(i,"float32"),s=oe(i,"float32"),u=this.readSync(e.dataId),c=this.readSync(n.dataId),l=hn(e.shape,i),h=hn(n.shape,i),f=a.values,p=s.values;if(l.length+h.length===0)for(var d=0;d<f.length;d++){var m=d%u.length,v=d%c.length,g=o(u[2*m],u[2*m+1],c[2*v],c[2*v+1]);f[d]=g.real,p[d]=g.imag}else{var x=this.bufferSync(this.data.get(e.dataId).complexTensors.real),b=this.bufferSync(this.data.get(n.dataId).complexTensors.real),y=function(w){var _=a.indexToLoc(w),S=_.slice(-e.rank);l.forEach(function(A){return S[A]=0});var I=x.locToIndex(S),E=_.slice(-n.rank);h.forEach(function(A){return E[A]=0});var R=b.locToIndex(E),D=o(u[2*I],u[2*I+1],c[2*R],c[2*R+1]);f[w]=D.real,p[w]=D.imag};for(d=0;d<f.length;d++)y(d)}return this.complex(a.toTensor(),s.toTensor())},t.prototype.split=function(e,n,o){return lc(e,n,o)},t.prototype.dispose=function(){},t.prototype.floatPrecision=function(){return 32},t.prototype.epsilon=function(){return 1e-7},t.prototype.cropAndResize=function(e,n,o,i,a,s){for(var u=e.shape,c=u[0],l=u[1],h=u[2],f=u[3],p=n.shape[0],d=i[0],m=i[1],v=oe([p,d,m,f],"float32"),g=this.readSync(n.dataId),x=this.readSync(o.dataId),b=this.readSync(e.dataId),y=e.strides,w=v.strides,_=0;_<p;_++){var S=4*_,I=g[S],E=g[S+1],R=g[S+2],D=g[S+3],A=x[_];if(!(A>=c))for(var M=d>1?(R-I)*(l-1)/(d-1):0,O=m>1?(D-E)*(h-1)/(m-1):0,B=0;B<d;B++){var V=d>1?I*(l-1)+B*M:.5*(I+R)*(l-1);if(V<0||V>l-1)for(var U=0;U<m;U++)for(var W=0;W<f;W++){var G=W+U*w[2]+B*w[1]+_*w[0];v.values[G]=s}else if(a==="bilinear"){var H=Math.floor(V),j=Math.ceil(V),ee=V-H;for(U=0;U<m;U++)if((fe=m>1?E*(h-1)+U*O:.5*(E+D)*(h-1))<0||fe>h-1)for(W=0;W<f;W++)G=W+U*w[2]+B*w[1]+_*w[0],v.values[G]=s;else{var te=Math.floor(fe),ae=Math.ceil(fe),se=fe-te;for(W=0;W<f;W++){var ce=b[G=W+te*y[2]+H*y[1]+A*y[0]],de=b[G=W+ae*y[2]+H*y[1]+A*y[0]],he=b[G=W+te*y[2]+j*y[1]+A*y[0]],ve=ce+(de-ce)*se,De=he+(b[G=W+ae*y[2]+j*y[1]+A*y[0]]-he)*se;G=W+U*w[2]+B*w[1]+_*w[0],v.values[G]=ve+(De-ve)*ee}}}else for(U=0;U<m;++U){var fe;if((fe=m>1?E*(h-1)+U*O:.5*(E+D)*(h-1))<0||fe>h-1)for(W=0;W<f;W++)G=W+U*w[2]+B*w[1]+_*w[0],v.values[G]=s;else{var we=Math.round(fe),ye=Math.round(V);for(W=0;W<f;W++){var Ae=W+we*y[2]+ye*y[1]+A*y[0],Ee=W+U*w[2]+B*w[1]+_*w[0];v.values[Ee]=b[Ae]}}}}}return v.toTensor()},t.prototype.sparseToDense=function(e,n,o,i){var a=bo(0,e,o),s=a.sliceRank,u=a.numUpdates,c=a.sliceSize,l=a.strides,h=a.outputSize;return this.scatter(e,n,o,h,c,u,s,l,i,!1)},t.prototype.gatherND=function(e,n){var o=n.shape,i=o[o.length-1],a=ec(e,n),s=a[0],u=a[1],c=a[2],l=a[3];if(u===0)return Ke([],s,e.dtype);for(var h=new xr([u,c],e.dtype),f=this.readSync(n.dataId),p=this.readSync(e.dataId),d=0;d<u;d++){for(var m=[],v=0,g=0;g<i;g++){var x=f[d*i+g];v+=x*l[g],m.push(x)}if(v<0||v>=e.size/c)throw new Error("Invalid indices: "+m+" does not index into "+e.shape);for(var b=0;b<c;b++)h.values[d*c+b]=p[v*c+b]}return h.toTensor().reshape(s)},t.prototype.scatterND=function(e,n,o){var i=bo(0,e,o),a=i.sliceRank,s=i.numUpdates,u=i.sliceSize,c=i.strides,l=i.outputSize,h=q(0);return this.scatter(e,n,o,l,u,s,a,c,h,!0)},t.prototype.fill=function(e,n,o){var i=co(o=o||Sr(n),Y(e));return i.fill(n),N.makeTensor(i,e,o,this)},t.prototype.onesLike=function(e){if(e.dtype==="string")throw new Error("onesLike is not supported for string tensors");return this.fill(e.shape,1,e.dtype)},t.prototype.zerosLike=function(e){var n=co(e.dtype,Y(e.shape));return this.makeOutput(n,e.shape,e.dtype)},t.prototype.linspace=function(e,n,o){return uc(e,n,o)},t.prototype.scatter=function(e,n,o,i,a,s,u,c,l,h){var f=[i/a,a],p=this.readSync(e.dataId),d=this.readSync(n.dataId);if(i===0)return Ke([],o,n.dtype);var m=new xr(f,n.dtype);m.values.fill(this.readSync(l.dataId)[0]);for(var v=0;v<s;v++){for(var g=[],x=0,b=0;b<u;b++){var y=p[v*u+b];g.push(y),x+=y*c[b]}if(x<0||x>=i/a)throw new Error("Invalid indices: "+g+" does not index into "+o);for(var w=0;w<a;w++)h?m.values[x*a+w]+=d[v*a+w]:m.values[x*a+w]=n.rank===0?d[0]:d[v*a+w]}return m.toTensor().reshape(o)},t}(ic);N.registerBackend("cpu",function(){return new kg},1);for(var xi=0,tu=[{kernelName:"NonMaxSuppressionV5",backendName:"cpu",kernelFunc:function(r){var t=r.inputs,e=r.backend,n=r.attrs,o=t,i=o.boxes,a=o.scores,s=n,u=s.maxOutputSize,c=s.iouThreshold,l=s.scoreThreshold,h=s.softNmsSigma,f=e;z(i,"NonMaxSuppressionWithScore");var p=ga(f.data.get(i.dataId).values,f.data.get(a.dataId).values,u,c,l,h);return[p.selectedIndices,p.selectedScores]}},{kernelName:"Square",backendName:"cpu",kernelFunc:function(r){var t=r.inputs,e=r.backend,n=t.x,o=e;z(n,"square");for(var i=o.data.get(n.dataId).values,a=new Float32Array(i.length),s=0;s<i.length;++s){var u=i[s];a[s]=u*u}return{dataId:o.write(a,n.shape,n.dtype),shape:n.shape,dtype:n.dtype}}},{kernelName:_r,backendName:"cpu",kernelFunc:function(r){var t=r.inputs,e=r.backend,n=t,o=n.a,i=n.b,a=e;z([o,i],_r);var s=a.data.get(o.dataId).values,u=a.data.get(i.dataId).values,c=function(f,p,d,m,v,g){var x=le(f,p),b=x.length,y=Lt(x),w=yr(v,Y(x)),_=f.length,S=p.length,I=Lt(f),E=Lt(p),R=hn(f,x),D=hn(p,x);if(R.length+D.length===0)for(var A=0;A<w.length;++A)w[A]=g(d[A%d.length],m[A%m.length]);else{var M=function(O){var B=Oh(O,b,y),V=B.slice(-_);R.forEach(function(H){return V[H]=0});var U=Es(V,_,I),W=B.slice(-S);D.forEach(function(H){return W[H]=0});var G=Es(W,S,E);w[O]=g(d[U],m[G])};for(A=0;A<w.length;++A)M(A)}return[w,x]}(o.shape,i.shape,s,u,o.dtype,function(f,p){var d=f-p;return d*d}),l=c[0],h=c[1];return{dataId:a.write(l,h,o.dtype),shape:h,dtype:o.dtype}}}];xi<tu.length;xi++)Fu(tu[xi]);var Vn,Ig=function(r){this.variableNames=["A"];var t=Je(),e=r[0],n=r[1];this.outputShape=r,this.userCode=`
      void main() {
        ivec3 coords = getOutputCoords();
        int texR = coords[0];
        int texC = coords[1];
        int depth = coords[2];
        vec2 uv = (vec2(texC, texR) + halfCR) / vec2(`+n+".0, "+e+`.0);

        vec4 values = `+t.texture2D+`(A, uv);
        float value;
        if (depth == 0) {
          value = values.r;
        } else if (depth == 1) {
          value = values.g;
        } else if (depth == 2) {
          value = values.b;
        } else if (depth == 3) {
          value = values.a;
        }

        setOutput(floor(value * 255.0 + 0.5));
      }
    `},Sg=function(r){this.variableNames=["A"],this.packedInputs=!1,this.packedOutput=!0;var t=Je(),e=r[0],n=r[1];this.outputShape=r,this.userCode=`
      void main() {
        ivec3 coords = getOutputCoords();
        int texR = coords[0];
        int texC = coords[1];
        int depth = coords[2];

        vec4 result = vec4(0.);

        for(int row=0; row<=1; row++) {
          for(int col=0; col<=1; col++) {
            texC = coords[1] + row;
            depth = coords[2] + col;

            vec2 uv = (vec2(texC, texR) + halfCR) /
                       vec2(`+n+".0, "+e+`.0);
            vec4 values = `+t.texture2D+`(A, uv);
            float value;
            if (depth == 0) {
              value = values.r;
            } else if (depth == 1) {
              value = values.g;
            } else if (depth == 2) {
              value = values.b;
            } else if (depth == 3) {
              value = values.a;
            }

            result[row * 2 + col] = floor(value * 255.0 + 0.5);
          }
        }

        `+t.output+` = result;
      }
    `};for(var bi=0,nu=[{kernelName:"FromPixels",backendName:"webgl",kernelFunc:function(r){var t=r.inputs,e=r.backend,n=r.attrs,o=t.pixels,i=n.numChannels,a=typeof HTMLVideoElement<"u"&&o instanceof HTMLVideoElement,s=typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement,u=a?[o.videoWidth,o.videoHeight]:[o.width,o.height],c=u[0],l=u[1],h=[l,c],f=[l,c,i];(s||a)&&(Vn==null&&(Vn=document.createElement("canvas").getContext("2d")),Vn.canvas.width=c,Vn.canvas.height=l,Vn.drawImage(o,0,0,c,l),o=Vn.canvas);var p=e.makeTensorInfo(h,"int32");e.texData.get(p.dataId).usage=ft.PIXELS,e.gpgpu.uploadPixelDataToTexture(e.getTexture(p.dataId),o);var d=L().getBool("WEBGL_PACK")?new Sg(f):new Ig(f),m=e.runWebGLProgram(d,[p],"int32");return e.disposeData(p.dataId),m}},{kernelName:"NonMaxSuppressionV5",backendName:"webgl",kernelFunc:function(r){var t=r.inputs,e=r.backend,n=r.attrs;po("tf.nonMaxSuppression() in webgl locks the UI thread. Call tf.nonMaxSuppressionAsync() instead");var o=t,i=o.boxes,a=o.scores,s=n,u=s.maxOutputSize,c=s.iouThreshold,l=s.scoreThreshold,h=s.softNmsSigma,f=e,p=ga(f.readSync(i.dataId),f.readSync(a.dataId),u,c,l,h);return[p.selectedIndices,p.selectedScores]}},{kernelName:"Square",backendName:"webgl",kernelFunc:function(r){var t=r.inputs,e=r.backend,n=t.x,o=e,i=new ie(n.shape,"return x * x;");return o.runWebGLProgram(i,[n],n.dtype)}},{kernelName:_r,backendName:"webgl",kernelFunc:function(r){var t=r.inputs,e=r.backend,n=t,o=n.a,i=n.b,a=e,s=L().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new Qt("return (a - b) * (a - b);",o.shape,i.shape):new Te("return (a - b) * (a - b);",o.shape,i.shape);return a.compileAndRun(s,[o,i])}}];bi<nu.length;bi++)Fu(nu[bi]);for(var wi=0,ru=[{kernelName:"Square",gradFunc:function(r,t){var e=t[0];return{x:function(){return r.mul(e.toFloat().mul(2))}}}},{kernelName:_r,gradFunc:function(r,t){var e=t[0],n=t[1],o=q(2);return{a:function(){return Ze(r,Ze(o,We(e,n)))},b:function(){return Ze(r,Ze(o,We(n,e)))}}}}];wi<ru.length;wi++)Eh(ru[wi]);var Ag=function(){function r(){}return r.prototype.fetch=function(t,e){return fetch(t,e)},r.prototype.now=function(){return performance.now()},r.prototype.encode=function(t,e){if(e!=="utf-8"&&e!=="utf8")throw new Error("Browser's encoder only supports utf-8, but got "+e);return this.textEncoder==null&&(this.textEncoder=new TextEncoder),this.textEncoder.encode(t)},r.prototype.decode=function(t,e){return new TextDecoder(e).decode(t)},r}();L().get("IS_BROWSER")&&L().setPlatform("browser",new Ag);var _i,Tg=function(){return require("node-fetch")},Dg=function(){function r(){this.util=require("util"),this.textEncoder=new this.util.TextEncoder}return r.prototype.fetch=function(t,e){return L().global.fetch!=null?L().global.fetch(t,e):(_i==null&&(_i=Tg()),_i(t,e))},r.prototype.now=function(){var t=process.hrtime();return 1e3*t[0]+t[1]/1e6},r.prototype.encode=function(t,e){if(e!=="utf-8"&&e!=="utf8")throw new Error("Node built-in encoder only supports utf-8, but got "+e);return this.textEncoder.encode(t)},r.prototype.decode=function(t,e){return t.length===0?"":new this.util.TextDecoder(e).decode(t)},r}();L().get("IS_NODE")&&L().setPlatform("node",new Dg);var Xi={float32:4,int32:4,uint16:2,uint8:1,bool:1},Io=4;function nl(r,t){for(var e={},n=0,o=function(s){var u=s.name,c=s.dtype,l=s.shape,h=Y(l),f=void 0;if("quantization"in s){var p=s.quantization;if(p.dtype!=="uint8"&&p.dtype!=="uint16")throw new Error("Weight "+s.name+" has unknown quantization dtype "+p.dtype+". Supported quantization dtypes are: 'uint8' and 'uint16'.");var d=Xi[p.dtype],m=r.slice(n,n+h*d),v=p.dtype==="uint8"?new Uint8Array(m):new Uint16Array(m);if(c==="float32")f=Float32Array.from(v,function(_){return _*p.scale+p.min});else{if(c!=="int32")throw new Error("Unsupported dtype in weight '"+u+"': "+c);f=Int32Array.from(v,function(_){return Math.round(_*p.scale+p.min)})}n+=h*d}else if(c==="string"){var g=Y(s.shape);f=[];for(var x=0;x<g;x++){var b=new Uint32Array(r.slice(n,n+Io))[0];n+=Io;var y=new Uint8Array(r.slice(n,n+b));f.push(y),n+=b}}else{var w=Xi[c];if(m=r.slice(n,n+h*w),c==="float32")f=new Float32Array(m);else if(c==="int32")f=new Int32Array(m);else{if(c!=="bool")throw new Error("Unsupported dtype in weight '"+u+"': "+c);f=new Uint8Array(m)}n+=h*w}e[u]=Ke(f,l,c)},i=0,a=t;i<a.length;i++)o(a[i]);return e}function Ng(r){if(r===null)throw new Error("Invalid input value: "+JSON.stringify(r));var t=0,e=[];r.forEach(function(i){if(t+=i.byteLength,e.push(i.byteLength===i.buffer.byteLength?i:new i.constructor(i)),!(i instanceof Float32Array||i instanceof Int32Array||i instanceof Uint8Array))throw new Error("Unsupported TypedArray subtype: "+i.constructor.name)});var n=new Uint8Array(t),o=0;return e.forEach(function(i){n.set(new Uint8Array(i.buffer),o),o+=i.byteLength}),n.buffer}var $i=typeof Buffer<"u"&&(typeof Blob>"u"||typeof atob>"u"||typeof btoa>"u");function ou(r){return $i?Buffer.byteLength(r):new Blob([r]).size}function Ma(r){var t=0;r.forEach(function(o){t+=o.byteLength});var e=new Uint8Array(t),n=0;return r.forEach(function(o){e.set(new Uint8Array(o),n),n+=o.byteLength}),e.buffer}function iu(r){for(r=r.trim();r.endsWith("/");)r=r.slice(0,r.length-1);var t=r.split("/");return t[t.length-1]}function Or(r){if(r.modelTopology instanceof ArrayBuffer)throw new Error("Expected JSON model topology, received ArrayBuffer.");return{dateSaved:new Date,modelTopologyType:"JSON",modelTopologyBytes:r.modelTopology==null?0:ou(JSON.stringify(r.modelTopology)),weightSpecsBytes:r.weightSpecs==null?0:ou(JSON.stringify(r.weightSpecs)),weightDataBytes:r.weightData==null?0:r.weightData.byteLength}}var pt=function(){function r(){this.saveRouters=[],this.loadRouters=[]}return r.getInstance=function(){return r.instance==null&&(r.instance=new r),r.instance},r.registerSaveRouter=function(t){r.getInstance().saveRouters.push(t)},r.registerLoadRouter=function(t){r.getInstance().loadRouters.push(t)},r.getSaveHandlers=function(t){return r.getHandlers(t,"save")},r.getLoadHandlers=function(t,e){return r.getHandlers(t,"load",e)},r.getHandlers=function(t,e,n){var o=[];return(e==="load"?r.getInstance().loadRouters:r.getInstance().saveRouters).forEach(function(i){var a=i(t,n);a!==null&&o.push(a)}),o},r}(),Qn="://",vn=function(){function r(){this.managers={}}return r.getInstance=function(){return r.instance==null&&(r.instance=new r),r.instance},r.registerManager=function(t,e){k(t!=null,function(){return"scheme must not be undefined or null."}),t.endsWith(Qn)&&(t=t.slice(0,t.indexOf(Qn))),k(t.length>0,function(){return"scheme must not be an empty string."});var n=r.getInstance();k(n.managers[t]==null,function(){return"A model store manager is already registered for scheme '"+t+"'."}),n.managers[t]=e},r.getManager=function(t){var e=this.getInstance().managers[t];if(e==null)throw new Error("Cannot find model manager for scheme '"+t+"'");return e},r.getSchemes=function(){return Object.keys(this.getInstance().managers)},r}();function ro(r){if(r.indexOf(Qn)===-1)throw new Error("The url string provided does not contain a scheme. Supported schemes are: "+vn.getSchemes().join(","));return{scheme:r.split(Qn)[0],path:r.split(Qn)[1]}}function au(r,t,e){return e===void 0&&(e=!1),X(this,void 0,void 0,function(){var n,o,i,a,s,u,c,l,h;return $(this,function(f){switch(f.label){case 0:return k(r!==t,function(){return"Old path and new path are the same: '"+r+"'"}),k((n=pt.getLoadHandlers(r)).length>0,function(){return"Copying failed because no load handler is found for source URL "+r+"."}),k(n.length<2,function(){return"Copying failed because more than one ("+n.length+") load handlers for source URL "+r+"."}),o=n[0],k((i=pt.getSaveHandlers(t)).length>0,function(){return"Copying failed because no save handler is found for destination URL "+t+"."}),k(i.length<2,function(){return"Copying failed because more than one ("+n.length+") save handlers for destination URL "+t+"."}),a=i[0],s=ro(r).scheme,u=ro(r).path,c=s===ro(r).scheme,[4,o.load()];case 1:return l=f.sent(),e&&c?[4,vn.getManager(s).removeModel(u)]:[3,3];case 2:f.sent(),f.label=3;case 3:return[4,a.save(l)];case 4:return h=f.sent(),!e||c?[3,6]:[4,vn.getManager(s).removeModel(u)];case 5:f.sent(),f.label=6;case 6:return[2,h.modelArtifactsInfo]}})})}var Sn="models_store",fn="model_info_store";function rl(){if(!L().getBool("IS_BROWSER"))throw new Error("Failed to obtain IndexedDB factory because the current environmentis not a web browser.");var r=window||self,t=r.indexedDB||r.mozIndexedDB||r.webkitIndexedDB||r.msIndexedDB||r.shimIndexedDB;if(t==null)throw new Error("The current browser does not appear to support IndexedDB.");return t}function Yi(r){var t=r.result;t.createObjectStore(Sn,{keyPath:"modelPath"}),t.createObjectStore(fn,{keyPath:"modelPath"})}var Zn=function(){function r(t){if(this.indexedDB=rl(),t==null||!t)throw new Error("For IndexedDB, modelPath must not be null, undefined or empty.");this.modelPath=t}return r.prototype.save=function(t){return X(this,void 0,void 0,function(){return $(this,function(e){if(t.modelTopology instanceof ArrayBuffer)throw new Error("BrowserLocalStorage.save() does not support saving model topology in binary formats yet.");return[2,this.databaseAction(this.modelPath,t)]})})},r.prototype.load=function(){return X(this,void 0,void 0,function(){return $(this,function(t){return[2,this.databaseAction(this.modelPath)]})})},r.prototype.databaseAction=function(t,e){var n=this;return new Promise(function(o,i){var a=n.indexedDB.open("tensorflowjs",1);a.onupgradeneeded=function(){return Yi(a)},a.onsuccess=function(){var s=a.result;if(e==null){var u=s.transaction(Sn,"readonly"),c=u.objectStore(Sn).get(n.modelPath);c.onsuccess=function(){if(c.result==null)return s.close(),i(new Error("Cannot find model with path '"+n.modelPath+"' in IndexedDB."));o(c.result.modelArtifacts)},c.onerror=function(m){return s.close(),i(c.error)},u.oncomplete=function(){return s.close()}}else{var l,h=Or(e),f=s.transaction(fn,"readwrite"),p=f.objectStore(fn),d=p.put({modelPath:n.modelPath,modelArtifactsInfo:h});d.onsuccess=function(){var m=(l=s.transaction(Sn,"readwrite")).objectStore(Sn).put({modelPath:n.modelPath,modelArtifacts:e,modelArtifactsInfo:h});m.onsuccess=function(){return o({modelArtifactsInfo:h})},m.onerror=function(v){var g=(p=f.objectStore(fn)).delete(n.modelPath);g.onsuccess=function(){return s.close(),i(m.error)},g.onerror=function(x){return s.close(),i(m.error)}}},d.onerror=function(m){return s.close(),i(d.error)},f.oncomplete=function(){l==null?s.close():l.oncomplete=function(){return s.close()}}}},a.onerror=function(s){return i(a.error)}})},r.URL_SCHEME="indexeddb://",r}(),su=function(r){return L().getBool("IS_BROWSER")&&!Array.isArray(r)&&r.startsWith(Zn.URL_SCHEME)?(t=r.slice(Zn.URL_SCHEME.length),new Zn(t)):null;var t};pt.registerSaveRouter(su),pt.registerLoadRouter(su);var Fg=function(){function r(){this.indexedDB=rl()}return r.prototype.listModels=function(){return X(this,void 0,void 0,function(){var t=this;return $(this,function(e){return[2,new Promise(function(n,o){var i=t.indexedDB.open("tensorflowjs",1);i.onupgradeneeded=function(){return Yi(i)},i.onsuccess=function(){var a=i.result,s=a.transaction(fn,"readonly"),u=s.objectStore(fn).getAll();u.onsuccess=function(){for(var c={},l=0,h=u.result;l<h.length;l++){var f=h[l];c[f.modelPath]=f.modelArtifactsInfo}n(c)},u.onerror=function(c){return a.close(),o(u.error)},s.oncomplete=function(){return a.close()}},i.onerror=function(a){return o(i.error)}})]})})},r.prototype.removeModel=function(t){return X(this,void 0,void 0,function(){var e=this;return $(this,function(n){var o;return t=(o=t).startsWith(Zn.URL_SCHEME)?o.slice(Zn.URL_SCHEME.length):o,[2,new Promise(function(i,a){var s=e.indexedDB.open("tensorflowjs",1);s.onupgradeneeded=function(){return Yi(s)},s.onsuccess=function(){var u,c=s.result,l=c.transaction(fn,"readwrite"),h=l.objectStore(fn),f=h.get(t);f.onsuccess=function(){if(f.result==null)return c.close(),a(new Error("Cannot find model with path '"+t+"' in IndexedDB."));var p=h.delete(t),d=function(){var m=(u=c.transaction(Sn,"readwrite")).objectStore(Sn).delete(t);m.onsuccess=function(){return i(f.result.modelArtifactsInfo)},m.onerror=function(v){return a(f.error)}};p.onsuccess=d,p.onerror=function(m){return d(),c.close(),a(f.error)}},f.onerror=function(p){return c.close(),a(f.error)},l.oncomplete=function(){u==null?c.close():u.oncomplete=function(){return c.close()}}},s.onerror=function(u){return a(s.error)}})]})})},r}();if(L().getBool("IS_BROWSER"))try{vn.registerManager(Zn.URL_SCHEME,new Fg)}catch{}var Zt="/",Xn="tensorflowjs_models",ol="info",Pg="model_topology",Og="weight_specs",Mg="weight_data",Bg="model_metadata";function il(r){return{info:[Xn,r,ol].join(Zt),topology:[Xn,r,Pg].join(Zt),weightSpecs:[Xn,r,Og].join(Zt),weightData:[Xn,r,Mg].join(Zt),modelMetadata:[Xn,r,Bg].join(Zt)}}function Lg(r){var t=r.split(Zt);if(t.length<3)throw new Error("Invalid key format: "+r);return t.slice(1,t.length-1).join(Zt)}var er=function(){function r(t){if(!L().getBool("IS_BROWSER")||typeof window>"u"||window.localStorage===void 0)throw new Error("The current environment does not support local storage.");if(this.LS=window.localStorage,t==null||!t)throw new Error("For local storage, modelPath must not be null, undefined or empty.");this.modelPath=t,this.keys=il(this.modelPath)}return r.prototype.save=function(t){return X(this,void 0,void 0,function(){var e,n,o;return $(this,function(i){if(t.modelTopology instanceof ArrayBuffer)throw new Error("BrowserLocalStorage.save() does not support saving model topology in binary formats yet.");e=JSON.stringify(t.modelTopology),n=JSON.stringify(t.weightSpecs),o=Or(t);try{return this.LS.setItem(this.keys.info,JSON.stringify(o)),this.LS.setItem(this.keys.topology,e),this.LS.setItem(this.keys.weightSpecs,n),this.LS.setItem(this.keys.weightData,function(a){if($i)return Buffer.from(a).toString("base64");for(var s=new Uint8Array(a),u="",c=0,l=s.length;c<l;c++)u+=String.fromCharCode(s[c]);return btoa(u)}(t.weightData)),this.LS.setItem(this.keys.modelMetadata,JSON.stringify({format:t.format,generatedBy:t.generatedBy,convertedBy:t.convertedBy,userDefinedMetadata:t.userDefinedMetadata})),[2,{modelArtifactsInfo:o}]}catch{throw this.LS.removeItem(this.keys.info),this.LS.removeItem(this.keys.topology),this.LS.removeItem(this.keys.weightSpecs),this.LS.removeItem(this.keys.weightData),this.LS.removeItem(this.keys.modelMetadata),new Error("Failed to save model '"+this.modelPath+"' to local storage: size quota being exceeded is a possible cause of this failure: modelTopologyBytes="+o.modelTopologyBytes+", weightSpecsBytes="+o.weightSpecsBytes+", weightDataBytes="+o.weightDataBytes+".")}return[2]})})},r.prototype.load=function(){return X(this,void 0,void 0,function(){var t,e,n,o,i,a,s;return $(this,function(u){if((t=JSON.parse(this.LS.getItem(this.keys.info)))==null)throw new Error("In local storage, there is no model with name '"+this.modelPath+"'");if(t.modelTopologyType!=="JSON")throw new Error("BrowserLocalStorage does not support loading non-JSON model topology yet.");if(e={},(n=JSON.parse(this.LS.getItem(this.keys.topology)))==null)throw new Error("In local storage, the topology of model '"+this.modelPath+"' is missing.");if(e.modelTopology=n,(o=JSON.parse(this.LS.getItem(this.keys.weightSpecs)))==null)throw new Error("In local storage, the weight specs of model '"+this.modelPath+"' are missing.");if(e.weightSpecs=o,(i=this.LS.getItem(this.keys.modelMetadata))!=null&&(a=JSON.parse(i),e.format=a.format,e.generatedBy=a.generatedBy,e.convertedBy=a.convertedBy,e.userDefinedMetadata=a.userDefinedMetadata),(s=this.LS.getItem(this.keys.weightData))==null)throw new Error("In local storage, the binary weight values of model '"+this.modelPath+"' are missing.");return e.weightData=function(c){if($i){var l=Buffer.from(c,"base64");return l.buffer.slice(l.byteOffset,l.byteOffset+l.byteLength)}for(var h=atob(c),f=new Uint8Array(h.length),p=0;p<h.length;++p)f.set([h.charCodeAt(p)],p);return f.buffer}(s),[2,e]})})},r.URL_SCHEME="localstorage://",r}(),uu=function(r){return L().getBool("IS_BROWSER")&&!Array.isArray(r)&&r.startsWith(er.URL_SCHEME)?(t=r.slice(er.URL_SCHEME.length),new er(t)):null;var t};pt.registerSaveRouter(uu),pt.registerLoadRouter(uu);var Wg=function(){function r(){k(L().getBool("IS_BROWSER"),function(){return"Current environment is not a web browser"}),k(typeof window>"u"||window.localStorage!==void 0,function(){return"Current browser does not appear to support localStorage"}),this.LS=window.localStorage}return r.prototype.listModels=function(){return X(this,void 0,void 0,function(){var t,e,n,o,i,a;return $(this,function(s){for(t={},e=Xn+Zt,n=Zt+ol,o=0;o<this.LS.length;++o)(i=this.LS.key(o)).startsWith(e)&&i.endsWith(n)&&(a=Lg(i),t[a]=JSON.parse(this.LS.getItem(i)));return[2,t]})})},r.prototype.removeModel=function(t){return X(this,void 0,void 0,function(){var e,n;return $(this,function(o){var i;if(t=(i=t).startsWith(er.URL_SCHEME)?i.slice(er.URL_SCHEME.length):i,e=il(t),this.LS.getItem(e.info)==null)throw new Error("Cannot find model at path '"+t+"'");return n=JSON.parse(this.LS.getItem(e.info)),this.LS.removeItem(e.info),this.LS.removeItem(e.topology),this.LS.removeItem(e.weightSpecs),this.LS.removeItem(e.weightData),[2,n]})})},r}();if(L().getBool("IS_BROWSER"))try{vn.registerManager(er.URL_SCHEME,new Wg)}catch{}var Ug="model",Vg=".json",zg=".weights.bin";function cu(r){return new Promise(function(t){return setTimeout(t)}).then(r)}var Ci=function(){function r(t){if(!L().getBool("IS_BROWSER"))throw new Error("browserDownloads() cannot proceed because the current environment is not a browser.");t.startsWith(r.URL_SCHEME)&&(t=t.slice(r.URL_SCHEME.length)),t!=null&&t.length!==0||(t=Ug),this.modelTopologyFileName=t+Vg,this.weightDataFileName=t+zg}return r.prototype.save=function(t){return X(this,void 0,void 0,function(){var e,n,o,i,a,s;return $(this,function(u){switch(u.label){case 0:if(typeof document>"u")throw new Error("Browser downloads are not supported in this environment since `document` is not present");if(e=window.URL.createObjectURL(new Blob([t.weightData],{type:"application/octet-stream"})),!(t.modelTopology instanceof ArrayBuffer))return[3,1];throw new Error("BrowserDownloads.save() does not support saving model topology in binary formats yet.");case 1:return n=[{paths:["./"+this.weightDataFileName],weights:t.weightSpecs}],o={modelTopology:t.modelTopology,format:t.format,generatedBy:t.generatedBy,convertedBy:t.convertedBy,weightsManifest:n},i=window.URL.createObjectURL(new Blob([JSON.stringify(o)],{type:"application/json"})),(a=this.jsonAnchor==null?document.createElement("a"):this.jsonAnchor).download=this.modelTopologyFileName,a.href=i,[4,cu(function(){return a.dispatchEvent(new MouseEvent("click"))})];case 2:return u.sent(),t.weightData==null?[3,4]:((s=this.weightDataAnchor==null?document.createElement("a"):this.weightDataAnchor).download=this.weightDataFileName,s.href=e,[4,cu(function(){return s.dispatchEvent(new MouseEvent("click"))})]);case 3:u.sent(),u.label=4;case 4:return[2,{modelArtifactsInfo:Or(t)}]}})})},r.URL_SCHEME="downloads://",r}(),Gg=function(){function r(t){if(t==null||t.length<1)throw new Error("When calling browserFiles, at least 1 file is required, but received "+t);this.files=t}return r.prototype.load=function(){return X(this,void 0,void 0,function(){var t,e,n=this;return $(this,function(o){return t=this.files[0],e=this.files.slice(1),[2,new Promise(function(i,a){var s=new FileReader;s.onload=function(u){var c=JSON.parse(u.target.result),l=c.modelTopology;if(l!=null){e.length===0&&i({modelTopology:l});var h=c.weightsManifest;if(h!=null){var f;try{f=n.checkManifestAndWeightFiles(h,e)}catch(v){return void a(v)}var p=[],d=[],m=[];h.forEach(function(v){v.paths.forEach(function(g){d.push(g),m.push(null)}),p.push.apply(p,v.weights)}),h.forEach(function(v){v.paths.forEach(function(g){var x=new FileReader;x.onload=function(b){var y=b.target.result,w=d.indexOf(g);m[w]=y,m.indexOf(null)===-1&&i({modelTopology:l,weightSpecs:p,weightData:Ma(m),format:c.format,generatedBy:c.generatedBy,convertedBy:c.convertedBy,userDefinedMetadata:c.userDefinedMetadata})},x.onerror=function(b){return a("Failed to weights data from file of path '"+g+"'.")},x.readAsArrayBuffer(f[g])})})}else a(new Error("weightManifest field is missing from file "+t.name))}else a(new Error("modelTopology field is missing from file "+t.name))},s.onerror=function(u){return a("Failed to read model topology and weights manifest JSON from file '"+t.name+"'. BrowserFiles supports loading Keras-style tf.Model artifacts only.")},s.readAsText(t)})]})})},r.prototype.checkManifestAndWeightFiles=function(t,e){for(var n=[],o=e.map(function(u){return iu(u.name)}),i={},a=0,s=t;a<s.length;a++)s[a].paths.forEach(function(u){var c=iu(u);if(n.indexOf(c)!==-1)throw new Error("Duplicate file basename found in weights manifest: '"+c+"'");if(n.push(c),o.indexOf(c)===-1)throw new Error("Weight file with basename '"+c+"' is not provided.");i[u]=e[o.indexOf(c)]});if(n.length!==e.length)throw new Error("Mismatch in the number of files in weights manifest ("+n.length+") and the number of weight files provided ("+e.length+").");return i},r}();function lu(r,t,e,n){(function(i){k(i!=null&&Array.isArray(i)&&i.length>0,function(){return"promises must be a none empty array"})})(r),function(i,a){k(i>=0&&i<=1,function(){return"Progress fraction must be in range [0, 1], but got startFraction "+i}),k(a>=0&&a<=1,function(){return"Progress fraction must be in range [0, 1], but got endFraction "+a}),k(a>=i,function(){return"startFraction must be no more than endFraction, but got startFraction "+i+" and endFraction "+a})}(e=e??0,n=n??1);var o=0;return Promise.all(r.map(function(i){return i.then(function(a){var s=e+ ++o/r.length*(n-e);return t(s),a}),i}))}function al(r,t){return X(this,void 0,void 0,function(){var e,n,o,i,a,s,u,c,l;return $(this,function(h){switch(h.label){case 0:return t==null&&(t={}),e=t.fetchFunc==null?L().platform.fetch:t.fetchFunc,n=r.map(function(f){return e(f,t.requestInit,{isBinary:!0})}),o=0,i=.5,t.onProgress!=null?[3,2]:[4,Promise.all(n)];case 1:return a=h.sent(),[3,4];case 2:return[4,lu(n,t.onProgress,o,i)];case 3:a=h.sent(),h.label=4;case 4:return s=a.map(function(f){return f.arrayBuffer()}),u=.5,c=1,t.onProgress!=null?[3,6]:[4,Promise.all(s)];case 5:return l=h.sent(),[3,8];case 6:return[4,lu(s,t.onProgress,u,c)];case 7:l=h.sent(),h.label=8;case 8:return[2,l]}})})}function hu(r){var t=this;return function(e,n,o){return n===void 0&&(n=""),X(t,void 0,void 0,function(){var i,a,s,u,c,l,h,f,p,d;return $(this,function(m){switch(m.label){case 0:if(i=e.map(function(){return!1}),a={},s=o!=null?o.map(function(){return!1}):[],u=[],e.forEach(function(v,g){var x=0;v.weights.forEach(function(b){var y="quantization"in b?b.quantization.dtype:b.dtype,w=Xi[y]*Y(b.shape),_=function(){i[g]=!0,a[g]==null&&(a[g]=[]),a[g].push({manifestEntry:b,groupOffset:x,sizeBytes:w})};o!=null?o.forEach(function(S,I){S===b.name&&(_(),s[I]=!0)}):_(),u.push(b.name),x+=w})}),!s.every(function(v){return v}))throw c=o.filter(function(v,g){return!s[g]}),new Error("Could not find weights in manifest with names: "+c.join(", ")+`. 
Manifest JSON has weights with names: `+u.join(", ")+".");return l=i.reduce(function(v,g,x){return g&&v.push(x),v},[]),h=[],l.forEach(function(v){e[v].paths.forEach(function(g){var x=n+(n.endsWith("/")?"":"/")+g;h.push(x)})}),[4,r(h)];case 1:return f=m.sent(),p={},d=0,l.forEach(function(v){for(var g=e[v].paths.length,x=0,b=0;b<g;b++)x+=f[d+b].byteLength;for(var y=new ArrayBuffer(x),w=new Uint8Array(y),_=0,S=0;S<g;S++){var I=new Uint8Array(f[d+S]);w.set(I,_),_+=I.byteLength}a[v].forEach(function(E){var R=nl(y.slice(E.groupOffset,E.groupOffset+E.sizeBytes),[E.manifestEntry]);for(var D in R)p[D]=R[D]}),d+=g}),[2,p]}})})}}pt.registerSaveRouter(function(r){return L().getBool("IS_BROWSER")&&!Array.isArray(r)&&r.startsWith(Ci.URL_SCHEME)?function(t){return t===void 0&&(t="model"),new Ci(t)}(r.slice(Ci.URL_SCHEME.length)):null});var sl=function(){function r(t,e){if(this.DEFAULT_METHOD="POST",e==null&&(e={}),this.weightPathPrefix=e.weightPathPrefix,this.onProgress=e.onProgress,e.fetchFunc!=null?(k(typeof e.fetchFunc=="function",function(){return"Must pass a function that matches the signature of `fetch` (see https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)"}),this.fetch=e.fetchFunc):this.fetch=L().platform.fetch,k(t!=null&&t.length>0,function(){return"URL path for http must not be null, undefined or empty."}),Array.isArray(t)&&k(t.length===2,function(){return"URL paths for http must have a length of 2, (actual length is "+t.length+")."}),this.path=t,e.requestInit!=null&&e.requestInit.body!=null)throw new Error("requestInit is expected to have no pre-existing body, but has one.");this.requestInit=e.requestInit||{}}return r.prototype.save=function(t){return X(this,void 0,void 0,function(){var e,n,o,i;return $(this,function(a){switch(a.label){case 0:if(t.modelTopology instanceof ArrayBuffer)throw new Error("BrowserHTTPRequest.save() does not support saving model topology in binary formats yet.");return(e=Object.assign({method:this.DEFAULT_METHOD},this.requestInit)).body=new FormData,n=[{paths:["./model.weights.bin"],weights:t.weightSpecs}],o={modelTopology:t.modelTopology,format:t.format,generatedBy:t.generatedBy,convertedBy:t.convertedBy,userDefinedMetadata:t.userDefinedMetadata,weightsManifest:n},e.body.append("model.json",new Blob([JSON.stringify(o)],{type:"application/json"}),"model.json"),t.weightData!=null&&e.body.append("model.weights.bin",new Blob([t.weightData],{type:"application/octet-stream"}),"model.weights.bin"),[4,this.fetch(this.path,e)];case 1:if((i=a.sent()).ok)return[2,{modelArtifactsInfo:Or(t),responses:[i]}];throw new Error("BrowserHTTPRequest.save() failed due to HTTP response status "+i.status+".")}})})},r.prototype.load=function(){return X(this,void 0,void 0,function(){var t,e,n,o,i,a,s,u,c,l,h,f;return $(this,function(p){switch(p.label){case 0:return[4,this.fetch(this.path,this.requestInit)];case 1:if(!(t=p.sent()).ok)throw new Error("Request to "+this.path+" failed with status code "+t.status+". Please verify this URL points to the model JSON of the model to load.");p.label=2;case 2:return p.trys.push([2,4,,5]),[4,t.json()];case 3:return e=p.sent(),[3,5];case 4:throw p.sent(),n="Failed to parse model JSON of response from "+this.path+".",this.path.endsWith(".pb")?n+=" Your path contains a .pb file extension. Support for .pb models have been removed in TensorFlow.js 1.0 in favor of .json models. You can re-convert your Python TensorFlow model using the TensorFlow.js 1.0 conversion scripts or you can convert your.pb models with the 'pb2json'NPM script in the tensorflow/tfjs-converter repository.":n+=" Please make sure the server is serving valid JSON for this request.",new Error(n);case 5:if(o=e.modelTopology,i=e.weightsManifest,a=e.generatedBy,s=e.convertedBy,u=e.format,c=e.userDefinedMetadata,o==null&&i==null)throw new Error("The JSON from HTTP path "+this.path+" contains neither model topology or manifest for weights.");return i==null?[3,7]:[4,this.loadWeights(i)];case 6:f=p.sent(),l=f[0],h=f[1],p.label=7;case 7:return[2,{modelTopology:o,weightSpecs:l,weightData:h,userDefinedMetadata:c,generatedBy:a,convertedBy:s,format:u}]}})})},r.prototype.loadWeights=function(t){return X(this,void 0,void 0,function(){var e,n,o,i,a,s,u,c,l,h,f;return $(this,function(p){switch(p.label){case 0:for(e=Array.isArray(this.path)?this.path[1]:this.path,n=function(d){var m=d.lastIndexOf("/"),v=d.lastIndexOf("?"),g=d.substring(0,m),x=v>m?d.substring(v):"";return[g+"/",x]}(e),o=n[0],i=n[1],a=this.weightPathPrefix||o,s=[],u=0,c=t;u<c.length;u++)l=c[u],s.push.apply(s,l.weights);return h=[],t.forEach(function(d){d.paths.forEach(function(m){h.push(a+m+i)})}),[4,al(h,{requestInit:this.requestInit,fetchFunc:this.fetch,onProgress:this.onProgress})];case 1:return f=p.sent(),[2,[s,Ma(f)]]}})})},r.URL_SCHEME_REGEX=/^https?:\/\//,r}();function Ji(r){return r.match(sl.URL_SCHEME_REGEX)!=null}var fu=function(r,t){return typeof fetch>"u"?null:(Array.isArray(r)?r.every(function(e){return Ji(e)}):Ji(r))?Qi(r,{onProgress:t}):null};function Qi(r,t){return new sl(r,t)}pt.registerSaveRouter(fu),pt.registerLoadRouter(fu);var Ei=function(){function r(t){this.modelArtifacts=t}return r.prototype.load=function(){return X(this,void 0,void 0,function(){return $(this,function(t){return[2,this.modelArtifacts]})})},r}(),Hg=function(){function r(t){this.saveHandler=t}return r.prototype.save=function(t){return X(this,void 0,void 0,function(){return $(this,function(e){return[2,this.saveHandler(t)]})})},r}(),ul=Object.freeze({browserFiles:function(r){return new Gg(r)},browserHTTPRequest:function(r,t){return Qi(r,t)},concatenateArrayBuffers:Ma,decodeWeights:nl,encodeWeights:function(r,t){return X(this,void 0,void 0,function(){var e,n,o,i,a,s=this;return $(this,function(u){switch(u.label){case 0:for(e=[],n=[],o=Array.isArray(r)?r.map(function(c){return c.name}):Object.keys(r),i=function(c){var l=o[c],h=Array.isArray(r)?r[c].tensor:r[l];if(h.dtype!=="float32"&&h.dtype!=="int32"&&h.dtype!=="bool"&&h.dtype!=="string")throw new Error("Unsupported dtype in weight '"+l+"': "+h.dtype);var f={name:l,shape:h.shape,dtype:h.dtype};if(h.dtype==="string"){var p=new Promise(function(d){return X(s,void 0,void 0,function(){var m,v,g,x,b,y,w;return $(this,function(_){switch(_.label){case 0:return[4,h.bytes()];case 1:for(m=_.sent(),v=m.reduce(function(S,I){return S+I.length},0)+Io*m.length,g=new Uint8Array(v),x=0,b=0;b<m.length;b++)y=m[b],w=new Uint8Array(new Uint32Array([y.length]).buffer),g.set(w,x),x+=Io,g.set(y,x),x+=y.length;return d(g),[2]}})})});n.push(p)}else n.push(h.data());t!=null&&(f.group=t),e.push(f)},a=0;a<o.length;++a)i(a);return[4,Promise.all(n)];case 1:return[2,{data:Ng(u.sent()),specs:e}]}})})},fromMemory:function(r,t,e,n){return arguments.length===1?r.modelTopology!=null||r.weightSpecs!=null?new Ei(r):(console.warn("Please call tf.io.fromMemory() with only one argument. The argument should be of type ModelArtifacts. The multi-argument signature of tf.io.fromMemory() has been deprecated and will be removed in a future release."),new Ei({modelTopology:r})):(console.warn("Please call tf.io.fromMemory() with only one argument. The argument should be of type ModelArtifacts. The multi-argument signature of tf.io.fromMemory() has been deprecated and will be removed in a future release."),new Ei({modelTopology:r,weightSpecs:t,weightData:e,trainingConfig:n}))},getLoadHandlers:function(r,t){return pt.getLoadHandlers(r,t)},getModelArtifactsInfoForJSON:Or,getSaveHandlers:function(r){return pt.getSaveHandlers(r)},http:Qi,isHTTPScheme:Ji,loadWeights:function(r,t,e,n){return t===void 0&&(t=""),X(this,void 0,void 0,function(){return $(this,function(o){return[2,hu(function(i){return al(i,{requestInit:n})})(r,t,e)]})})},registerLoadRouter:function(r){return pt.registerLoadRouter(r)},registerSaveRouter:function(r){return pt.registerSaveRouter(r)},weightsLoaderFactory:hu,withSaveHandler:function(r){return new Hg(r)},copyModel:function(r,t){return X(this,void 0,void 0,function(){return $(this,function(e){return[2,au(r,t,!1)]})})},listModels:function(){return X(this,void 0,void 0,function(){var r,t,e,n,o,i,a;return $(this,function(s){switch(s.label){case 0:r=vn.getSchemes(),t={},e=0,n=r,s.label=1;case 1:return e<n.length?(o=n[e],[4,vn.getManager(o).listModels()]):[3,4];case 2:for(a in i=s.sent())t[o+Qn+a]=i[a];s.label=3;case 3:return e++,[3,1];case 4:return[2,t]}})})},moveModel:function(r,t){return X(this,void 0,void 0,function(){return $(this,function(e){return[2,au(r,t,!0)]})})},removeModel:function(r){return X(this,void 0,void 0,function(){var t;return $(this,function(e){return t=ro(r),[2,vn.getManager(t.scheme).removeModel(t.path)]})})}}),zn;T({confusionMatrix_:function(r,t,e){var n=C(r,"labels","confusionMatrix"),o=C(t,"predictions","confusionMatrix");k(e==null||e>0&&Number.isInteger(e),function(){return"If provided, numClasses must be a positive integer, but got "+e}),k(n.rank===1,function(){return"Expected the rank of labels to be 1, but got "+n.rank}),k(o.rank===1,function(){return"Expected the rank of predictions to be 1, but got "+o.rank}),k(n.shape[0]===o.shape[0],function(){return"Mismatch in the number of examples: "+n.shape[0]+" vs. "+o.shape[0]+". Labels and predictions should have the same number of elements."}),k(e>0&&Number.isInteger(e),function(){return"numClasses is required to be a positive integer, but got "+e});var i=Gi(n.asType("int32"),e),a=Gi(o.asType("int32"),e);return i.transpose().matMul(a).asType("int32")}});var qg=T({fromPixels_:function(r,t){if(t===void 0&&(t=3),t>4)throw new Error("Cannot construct Tensor with more than 4 channels from pixels.");if(r==null)throw new Error("pixels passed to tf.browser.fromPixels() can not be null");var e=!1,n=!1,o=!1,i=!1,a=!1;if(r.data instanceof Uint8Array)e=!0;else if(typeof ImageData<"u"&&r instanceof ImageData)n=!0;else if(typeof HTMLVideoElement<"u"&&r instanceof HTMLVideoElement)o=!0;else if(typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement)i=!0;else{if(r.getContext==null)throw new Error("pixels passed to tf.browser.fromPixels() must be either an HTMLVideoElement, HTMLImageElement, HTMLCanvasElement, ImageData in browser, or OffscreenCanvas, ImageData in webworker or {data: Uint32Array, width: number, height: number}, but was "+r.constructor.name);a=!0}if(o&&o&&r.readyState<2)throw new Error("The video element has not loaded data yet. Please wait for `loadeddata` event on the <video> element.");if(Nu("FromPixels",N.backendName)!=null)return N.runKernel("FromPixels",{pixels:r},{numChannels:t});var s,u,c=o?[r.videoWidth,r.videoHeight]:[r.width,r.height],l=c[0],h=c[1];if(a?s=r.getContext("2d").getImageData(0,0,l,h).data:n||e?s=r.data:(i||o)&&(zn==null&&(zn=document.createElement("canvas").getContext("2d")),zn.canvas.width=l,zn.canvas.height=h,zn.drawImage(r,0,0,l,h),s=zn.getImageData(0,0,l,h).data),t===4)u=new Int32Array(s);else{var f=l*h;u=new Int32Array(f*t);for(var p=0;p<f;p++)for(var d=0;d<t;++d)u[p*t+d]=s[4*p+d]}return ha(u,[h,l,t],"int32")}}),Ba=Object.freeze({toPixels:function(r,t){return X(this,void 0,void 0,function(){var e,n,o,i,a,s,u,c,l,h,f,p,d,m,v,g,x,b,y,w,_,S,I;return $(this,function(E){switch(E.label){case 0:if(e=C(r,"img","toPixels"),r instanceof ke||(e=e.toInt()),e.rank!==2&&e.rank!==3)throw new Error("toPixels only supports rank 2 or 3 tensors, got rank "+e.rank+".");if(n=e.shape.slice(0,2),o=n[0],i=n[1],(a=e.rank===2?1:e.shape[2])>4||a===2)throw new Error("toPixels only supports depth of size 1, 3 or 4 but got "+a);return[4,e.data()];case 1:return s=E.sent(),u=e.min(),c=e.max(),[4,Promise.all([u.data(),c.data()])];case 2:if(l=E.sent(),h=l[0],f=l[1],p=h[0],d=f[0],u.dispose(),c.dispose(),e.dtype==="float32"){if(p<0||d>1)throw new Error("Tensor values for a float32 Tensor must be in the range [0 - 1] but got range ["+p+" - "+d+"].")}else{if(e.dtype!=="int32")throw new Error("Unsupported type for toPixels: "+e.dtype+". Please use float32 or int32 tensors.");if(p<0||d>255)throw new Error("Tensor values for a int32 Tensor must be in the range [0 - 255] but got range ["+p+" - "+d+"].")}for(m=e.dtype==="float32"?255:1,v=new Uint8ClampedArray(i*o*4),g=0;g<o*i;++g)x=void 0,b=void 0,y=void 0,w=void 0,a===1?(x=s[g]*m,b=s[g]*m,y=s[g]*m,w=255):a===3?(x=s[3*g]*m,b=s[3*g+1]*m,y=s[3*g+2]*m,w=255):a===4&&(x=s[4*g]*m,b=s[4*g+1]*m,y=s[4*g+2]*m,w=s[4*g+3]*m),v[(_=4*g)+0]=Math.round(x),v[_+1]=Math.round(b),v[_+2]=Math.round(y),v[_+3]=Math.round(w);return t!=null&&(t.width=i,t.height=o,S=t.getContext("2d"),I=new ImageData(v,i,o),S.putImageData(I,0,0)),e!==r&&e.dispose(),[2,v]}})})},fromPixels:qg}),jg=function(){function r(){}return r.prototype.getClassName=function(){return this.constructor.className},r.fromConfig=function(t,e){return new t(e)},r}(),Kg=function(){function r(){this.classNameMap={}}return r.getMap=function(){return r.instance==null&&(r.instance=new r),r.instance},r.register=function(t){r.getMap().classNameMap[t.className]=[t,t.fromConfig]},r}();function On(r){k(r.className!=null,function(){return"Class being registered does not have the static className property defined."}),k(typeof r.className=="string",function(){return"className is required to be a string, but got type "+typeof r.className}),k(r.className.length>0,function(){return"Class being registered has an empty-string as its className, which is disallowed."}),Kg.register(r)}var Mn=function(r){function t(){return r!==null&&r.apply(this,arguments)||this}return kt(t,r),t.prototype.minimize=function(e,n,o){n===void 0&&(n=!1);var i=this.computeGradients(e,o),a=i.value,s=i.grads;if(o!=null){var u=o.map(function(c){return{name:c.name,tensor:s[c.name]}});this.applyGradients(u)}else this.applyGradients(s);return it(s),n?a:(a.dispose(),null)},Object.defineProperty(t.prototype,"iterations",{get:function(){return this.iterations_==null&&(this.iterations_=0),this.iterations_},enumerable:!0,configurable:!0}),t.prototype.incrementIterations=function(){this.iterations_=this.iterations+1},t.prototype.computeGradients=function(e,n){return rp(e,n)},t.prototype.dispose=function(){this.iterations_!=null&&it(this.iterations_)},t.prototype.saveIterations=function(){return X(this,void 0,void 0,function(){return $(this,function(e){return this.iterations_==null&&(this.iterations_=0),[2,{name:"iter",tensor:q(this.iterations_,"int32")}]})})},t.prototype.getWeights=function(){return X(this,void 0,void 0,function(){return $(this,function(e){throw new Error("getWeights() is not implemented for this optimizer yet.")})})},t.prototype.setWeights=function(e){return X(this,void 0,void 0,function(){return $(this,function(n){throw new Error("setWeights() is not implemented for this optimizer class "+this.getClassName())})})},t.prototype.extractIterations=function(e){return X(this,void 0,void 0,function(){var n;return $(this,function(o){switch(o.label){case 0:return n=this,[4,e[0].tensor.data()];case 1:return n.iterations_=o.sent()[0],[2,e.slice(1)]}})})},t}(jg);Object.defineProperty(Mn,Symbol.hasInstance,{value:function(r){return r.minimize!=null&&r.computeGradients!=null&&r.applyGradients!=null}});var Xg=function(r){function t(e,n,o){o===void 0&&(o=null);var i=r.call(this)||this;return i.learningRate=e,i.rho=n,i.epsilon=o,i.accumulatedGrads=[],i.accumulatedUpdates=[],o==null&&(i.epsilon=N.backend.epsilon()),i}return kt(t,r),t.prototype.applyGradients=function(e){var n=this;(Array.isArray(e)?e.map(function(o){return o.name}):Object.keys(e)).forEach(function(o,i){var a=N.registeredVariables[o];n.accumulatedGrads[i]==null&&(n.accumulatedGrads[i]={originalName:o+"/accum_grad",variable:K(function(){return me(a).variable(!1)})}),n.accumulatedUpdates[i]==null&&(n.accumulatedUpdates[i]={originalName:o+"/accum_var",variable:K(function(){return me(a).variable(!1)})});var s=Array.isArray(e)?e[i].tensor:e[o];if(s!=null){var u=n.accumulatedGrads[i].variable,c=n.accumulatedUpdates[i].variable;K(function(){var l=u.mul(n.rho).add(s.square().mul(1-n.rho)),h=c.add(n.epsilon).sqrt().div(u.add(n.epsilon).sqrt()).mul(s),f=c.mul(n.rho).add(h.square().mul(1-n.rho));u.assign(l),c.assign(f);var p=h.mul(-n.learningRate).add(a);a.assign(p)})}}),this.incrementIterations()},t.prototype.dispose=function(){this.accumulatedUpdates!=null&&(it(this.accumulatedGrads.map(function(e){return e.variable})),it(this.accumulatedUpdates.map(function(e){return e.variable})))},t.prototype.getWeights=function(){return X(this,void 0,void 0,function(){var e;return $(this,function(n){switch(n.label){case 0:return e=this.accumulatedGrads.concat(this.accumulatedUpdates),[4,this.saveIterations()];case 1:return[2,[n.sent()].concat(e.map(function(o){return{name:o.originalName,tensor:o.variable}}))]}})})},t.prototype.setWeights=function(e){return X(this,void 0,void 0,function(){var n;return $(this,function(o){switch(o.label){case 0:return[4,this.extractIterations(e)];case 1:return e=o.sent(),n=e.length/2,this.accumulatedGrads=e.slice(0,n).map(function(i){return{originalName:i.name,variable:i.tensor.variable(!1)}}),this.accumulatedUpdates=e.slice(n,2*n).map(function(i){return{originalName:i.name,variable:i.tensor.variable(!1)}}),[2]}})})},t.prototype.getConfig=function(){return{learningRate:this.learningRate,rho:this.rho,epsilon:this.epsilon}},t.fromConfig=function(e,n){return new e(n.learningRate,n.rho,n.epsilon)},t.className="Adadelta",t}(Mn);On(Xg);var $g=function(r){function t(e,n){n===void 0&&(n=.1);var o=r.call(this)||this;return o.learningRate=e,o.initialAccumulatorValue=n,o.accumulatedGrads=[],o}return kt(t,r),t.prototype.applyGradients=function(e){var n=this;(Array.isArray(e)?e.map(function(o){return o.name}):Object.keys(e)).forEach(function(o,i){var a=N.registeredVariables[o];n.accumulatedGrads[i]==null&&(n.accumulatedGrads[i]={originalName:o+"/accumulator",variable:K(function(){return Wt(a.shape,n.initialAccumulatorValue).variable(!1)})});var s=Array.isArray(e)?e[i].tensor:e[o];if(s!=null){var u=n.accumulatedGrads[i].variable;K(function(){var c=u.add(s.square());u.assign(c);var l=s.div(c.add(N.backend.epsilon()).sqrt()).mul(-n.learningRate).add(a);a.assign(l)})}}),this.incrementIterations()},t.prototype.dispose=function(){this.accumulatedGrads!=null&&it(this.accumulatedGrads.map(function(e){return e.variable}))},t.prototype.getWeights=function(){return X(this,void 0,void 0,function(){return $(this,function(e){switch(e.label){case 0:return[4,this.saveIterations()];case 1:return[2,[e.sent()].concat(this.accumulatedGrads.map(function(n){return{name:n.originalName,tensor:n.variable}}))]}})})},t.prototype.setWeights=function(e){return X(this,void 0,void 0,function(){return $(this,function(n){switch(n.label){case 0:return[4,this.extractIterations(e)];case 1:return e=n.sent(),this.accumulatedGrads=e.map(function(o){return{originalName:o.name,variable:o.tensor.variable(!1)}}),[2]}})})},t.prototype.getConfig=function(){return{learningRate:this.learningRate,initialAccumulatorValue:this.initialAccumulatorValue}},t.fromConfig=function(e,n){return new e(n.learningRate,n.initialAccumulatorValue)},t.className="Adagrad",t}(Mn);On($g);var Yg=function(r){function t(e,n,o,i){i===void 0&&(i=null);var a=r.call(this)||this;return a.learningRate=e,a.beta1=n,a.beta2=o,a.epsilon=i,a.accumulatedFirstMoment=[],a.accumulatedSecondMoment=[],K(function(){a.accBeta1=q(n).variable(),a.accBeta2=q(o).variable()}),i==null&&(a.epsilon=N.backend.epsilon()),a}return kt(t,r),t.prototype.applyGradients=function(e){var n=this,o=Array.isArray(e)?e.map(function(i){return i.name}):Object.keys(e);K(function(){var i=We(1,n.accBeta1),a=We(1,n.accBeta2);o.forEach(function(s,u){var c=N.registeredVariables[s];n.accumulatedFirstMoment[u]==null&&(n.accumulatedFirstMoment[u]={originalName:s+"/m",variable:K(function(){return me(c).variable(!1)})}),n.accumulatedSecondMoment[u]==null&&(n.accumulatedSecondMoment[u]={originalName:s+"/v",variable:K(function(){return me(c).variable(!1)})});var l=Array.isArray(e)?e[u].tensor:e[s];if(l!=null){var h=n.accumulatedFirstMoment[u].variable,f=n.accumulatedSecondMoment[u].variable,p=h.mul(n.beta1).add(l.mul(1-n.beta1)),d=f.mul(n.beta2).add(l.square().mul(1-n.beta2)),m=p.div(i),v=d.div(a);h.assign(p),f.assign(d);var g=m.div(v.sqrt().add(n.epsilon)).mul(-n.learningRate).add(c);c.assign(g)}}),n.accBeta1.assign(n.accBeta1.mul(n.beta1)),n.accBeta2.assign(n.accBeta2.mul(n.beta2))}),this.incrementIterations()},t.prototype.dispose=function(){this.accBeta1.dispose(),this.accBeta2.dispose(),this.accumulatedFirstMoment!=null&&it(this.accumulatedFirstMoment.map(function(e){return e.variable})),this.accumulatedSecondMoment!=null&&it(this.accumulatedSecondMoment.map(function(e){return e.variable}))},t.prototype.getWeights=function(){return X(this,void 0,void 0,function(){var e;return $(this,function(n){switch(n.label){case 0:return e=this.accumulatedFirstMoment.concat(this.accumulatedSecondMoment),[4,this.saveIterations()];case 1:return[2,[n.sent()].concat(e.map(function(o){return{name:o.originalName,tensor:o.variable}}))]}})})},t.prototype.setWeights=function(e){return X(this,void 0,void 0,function(){var n,o=this;return $(this,function(i){switch(i.label){case 0:return[4,this.extractIterations(e)];case 1:return e=i.sent(),K(function(){o.accBeta1.assign(Ro(o.beta1,o.iterations_+1)),o.accBeta2.assign(Ro(o.beta2,o.iterations_+1))}),n=e.length/2,this.accumulatedFirstMoment=e.slice(0,n).map(function(a){return{originalName:a.name,variable:a.tensor.variable(!1)}}),this.accumulatedSecondMoment=e.slice(n,2*n).map(function(a){return{originalName:a.name,variable:a.tensor.variable(!1)}}),[2]}})})},t.prototype.getConfig=function(){return{learningRate:this.learningRate,beta1:this.beta1,beta2:this.beta2,epsilon:this.epsilon}},t.fromConfig=function(e,n){return new e(n.learningRate,n.beta1,n.beta2,n.epsilon)},t.className="Adam",t}(Mn);On(Yg);var Jg=function(r){function t(e,n,o,i,a){i===void 0&&(i=null),a===void 0&&(a=0);var s=r.call(this)||this;return s.learningRate=e,s.beta1=n,s.beta2=o,s.epsilon=i,s.decay=a,s.accumulatedFirstMoment=[],s.accumulatedWeightedInfNorm=[],K(function(){s.iteration=q(0).variable(),s.accBeta1=q(n).variable()}),i==null&&(s.epsilon=N.backend.epsilon()),s}return kt(t,r),t.prototype.applyGradients=function(e){var n=this,o=Array.isArray(e)?e.map(function(i){return i.name}):Object.keys(e);K(function(){var i=We(1,n.accBeta1),a=Ct(-n.learningRate,n.iteration.mul(n.decay).add(1));o.forEach(function(s,u){var c=N.registeredVariables[s];n.accumulatedFirstMoment[u]==null&&(n.accumulatedFirstMoment[u]={originalName:s+"/m",variable:me(c).variable(!1)}),n.accumulatedWeightedInfNorm[u]==null&&(n.accumulatedWeightedInfNorm[u]={originalName:s+"/v",variable:me(c).variable(!1)});var l=Array.isArray(e)?e[u].tensor:e[s];if(l!=null){var h=n.accumulatedFirstMoment[u].variable,f=n.accumulatedWeightedInfNorm[u].variable,p=h.mul(n.beta1).add(l.mul(1-n.beta1)),d=f.mul(n.beta2),m=l.abs(),v=d.maximum(m);h.assign(p),f.assign(v);var g=a.div(i).mul(p.div(v.add(n.epsilon))).add(c);c.assign(g)}}),n.iteration.assign(n.iteration.add(1)),n.accBeta1.assign(n.accBeta1.mul(n.beta1))}),this.incrementIterations()},t.prototype.dispose=function(){this.accBeta1.dispose(),this.iteration.dispose(),this.accumulatedFirstMoment!=null&&it(this.accumulatedFirstMoment.map(function(e){return e.variable})),this.accumulatedWeightedInfNorm!=null&&it(this.accumulatedWeightedInfNorm.map(function(e){return e.variable}))},t.prototype.getWeights=function(){return X(this,void 0,void 0,function(){return $(this,function(e){throw new Error("getWeights() is not implemented for Adamax yet.")})})},t.prototype.setWeights=function(e){return X(this,void 0,void 0,function(){return $(this,function(n){throw new Error("setWeights() is not implemented for Adamax yet.")})})},t.prototype.getConfig=function(){return{learningRate:this.learningRate,beta1:this.beta1,beta2:this.beta2,epsilon:this.epsilon,decay:this.decay}},t.fromConfig=function(e,n){return new e(n.learningRate,n.beta1,n.beta2,n.epsilon,n.decay)},t.className="Adamax",t}(Mn);On(Jg);var cl=function(r){function t(e){var n=r.call(this)||this;return n.learningRate=e,n.setLearningRate(e),n}return kt(t,r),t.prototype.applyGradients=function(e){var n=this;(Array.isArray(e)?e.map(function(o){return o.name}):Object.keys(e)).forEach(function(o,i){var a=Array.isArray(e)?e[i].tensor:e[o];if(a!=null){var s=N.registeredVariables[o];K(function(){var u=n.c.mul(a).add(s);s.assign(u)})}}),this.incrementIterations()},t.prototype.setLearningRate=function(e){this.learningRate=e,this.c!=null&&this.c.dispose(),this.c=gf(q(-e))},t.prototype.dispose=function(){this.c.dispose()},t.prototype.getWeights=function(){return X(this,void 0,void 0,function(){return $(this,function(e){switch(e.label){case 0:return[4,this.saveIterations()];case 1:return[2,[e.sent()]]}})})},t.prototype.setWeights=function(e){return X(this,void 0,void 0,function(){return $(this,function(n){switch(n.label){case 0:return[4,this.extractIterations(e)];case 1:if((e=n.sent()).length!==0)throw new Error("SGD optimizer does not have settable weights.");return[2]}})})},t.prototype.getConfig=function(){return{learningRate:this.learningRate}},t.fromConfig=function(e,n){return new e(n.learningRate)},t.className="SGD",t}(Mn);On(cl);var Qg=function(r){function t(e,n,o){o===void 0&&(o=!1);var i=r.call(this,e)||this;return i.learningRate=e,i.momentum=n,i.useNesterov=o,i.accumulations=[],i.m=q(i.momentum),i}return kt(t,r),t.prototype.applyGradients=function(e){var n=this;(Array.isArray(e)?e.map(function(o){return o.name}):Object.keys(e)).forEach(function(o,i){var a=N.registeredVariables[o];n.accumulations[i]==null&&(n.accumulations[i]={originalName:o+"/momentum",variable:K(function(){return me(a).variable(!1)})});var s=n.accumulations[i].variable,u=Array.isArray(e)?e[i].tensor:e[o];u!=null&&K(function(){var c,l=n.m.mul(s).add(u);c=n.useNesterov?n.c.mul(u.add(l.mul(n.m))).add(a):n.c.mul(l).add(a),s.assign(l),a.assign(c)})}),this.incrementIterations()},t.prototype.dispose=function(){this.m.dispose(),this.accumulations!=null&&it(this.accumulations.map(function(e){return e.variable}))},t.prototype.setMomentum=function(e){this.momentum=e},t.prototype.getWeights=function(){return X(this,void 0,void 0,function(){return $(this,function(e){switch(e.label){case 0:return[4,this.saveIterations()];case 1:return[2,[e.sent()].concat(this.accumulations.map(function(n){return{name:n.originalName,tensor:n.variable}}))]}})})},t.prototype.setWeights=function(e){return X(this,void 0,void 0,function(){return $(this,function(n){switch(n.label){case 0:return[4,this.extractIterations(e)];case 1:return e=n.sent(),this.accumulations=e.map(function(o){return{originalName:o.name,variable:o.tensor.variable(!1)}}),[2]}})})},t.prototype.getConfig=function(){return{learningRate:this.learningRate,momentum:this.momentum,useNesterov:this.useNesterov}},t.fromConfig=function(e,n){return new e(n.learningRate,n.momentum,n.useNesterov)},t.className="Momentum",t}(cl);On(Qg);var Zg=function(r){function t(e,n,o,i,a){n===void 0&&(n=.9),o===void 0&&(o=0),i===void 0&&(i=null),a===void 0&&(a=!1);var s=r.call(this)||this;if(s.learningRate=e,s.decay=n,s.momentum=o,s.epsilon=i,s.accumulatedMeanSquares=[],s.accumulatedMoments=[],s.accumulatedMeanGrads=[],s.centered=a,i==null&&(s.epsilon=N.backend.epsilon()),e==null)throw new Error("learningRate for RMSPropOptimizer must be defined.");return s}return kt(t,r),t.prototype.applyGradients=function(e){var n=this;(Array.isArray(e)?e.map(function(o){return o.name}):Object.keys(e)).forEach(function(o,i){var a=N.registeredVariables[o];n.accumulatedMeanSquares[i]==null&&(n.accumulatedMeanSquares[i]={originalName:o+"/rms",variable:K(function(){return me(a).variable(!1)})}),n.accumulatedMoments[i]==null&&(n.accumulatedMoments[i]={originalName:o+"/momentum",variable:K(function(){return me(a).variable(!1)})}),n.accumulatedMeanGrads[i]==null&&n.centered&&(n.accumulatedMeanGrads[i]={originalName:o+"/mg",variable:K(function(){return me(a).variable(!1)})});var s=Array.isArray(e)?e[i].tensor:e[o];if(s!=null){var u=n.accumulatedMeanSquares[i].variable,c=n.accumulatedMoments[i].variable;K(function(){var l=u.mul(n.decay).add(s.square().mul(1-n.decay));if(n.centered){var h=n.accumulatedMeanGrads[i].variable,f=h.mul(n.decay).add(s.mul(1-n.decay)),p=c.mul(n.momentum).add(s.mul(n.learningRate).div(l.sub(f.square().add(n.epsilon)).sqrt()));u.assign(l),h.assign(f),c.assign(p);var d=a.sub(p);a.assign(d)}else{var m=u.mul(n.decay).add(s.square().mul(1-n.decay));p=c.mul(n.momentum).add(s.mul(n.learningRate).div(m.add(n.epsilon).sqrt())),u.assign(m),c.assign(p),d=a.sub(p),a.assign(d)}})}}),this.incrementIterations()},t.prototype.dispose=function(){this.accumulatedMeanSquares!=null&&it(this.accumulatedMeanSquares.map(function(e){return e.variable})),this.accumulatedMeanGrads!=null&&this.centered&&it(this.accumulatedMeanGrads.map(function(e){return e.variable})),this.accumulatedMoments!=null&&it(this.accumulatedMoments.map(function(e){return e.variable}))},t.prototype.getWeights=function(){return X(this,void 0,void 0,function(){var e;return $(this,function(n){switch(n.label){case 0:return e=this.accumulatedMeanSquares.concat(this.accumulatedMoments),this.centered&&e.push.apply(e,this.accumulatedMeanGrads),[4,this.saveIterations()];case 1:return[2,[n.sent()].concat(e.map(function(o){return{name:o.originalName,tensor:o.variable}}))]}})})},t.prototype.setWeights=function(e){return X(this,void 0,void 0,function(){var n;return $(this,function(o){switch(o.label){case 0:return[4,this.extractIterations(e)];case 1:return e=o.sent(),n=this.centered?e.length/3:e.length/2,this.accumulatedMeanSquares=e.slice(0,n).map(function(i){return{originalName:i.name,variable:i.tensor.variable(!1)}}),this.accumulatedMoments=e.slice(n,2*n).map(function(i){return{originalName:i.name,variable:i.tensor.variable(!1)}}),this.centered&&(this.accumulatedMeanGrads=e.slice(2*n,3*n).map(function(i){return{originalName:i.name,variable:i.tensor.variable(!1)}})),[2]}})})},t.prototype.getConfig=function(){return{learningRate:this.learningRate,decay:this.decay,momentum:this.momentum,epsilon:this.epsilon,centered:this.centered}},t.fromConfig=function(e,n){return new e(n.learningRate,n.decay,n.momentum,n.epsilon,n.centered)},t.className="RMSProp",t}(Mn);On(Zg);ke.prototype.squaredDifference=function(r){return Ec(this,r)},P=Rg;/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var Zi=function(r,t){return Zi=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var o in n)n.hasOwnProperty(o)&&(e[o]=n[o])},Zi(r,t)};function re(r,t){Zi(r,t);function e(){this.constructor=r}r.prototype=t===null?Object.create(t):(e.prototype=t.prototype,new e)}var Ye=function(){return Ye=Object.assign||function(t){for(var e,n=1,o=arguments.length;n<o;n++){e=arguments[n];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])}return t},Ye.apply(this,arguments)};function Q(r,t,e,n){function o(i){return i instanceof e?i:new e(function(a){a(i)})}return new(e||(e=Promise))(function(i,a){function s(l){try{c(n.next(l))}catch(h){a(h)}}function u(l){try{c(n.throw(l))}catch(h){a(h)}}function c(l){l.done?i(l.value):o(l.value).then(s,u)}c((n=n.apply(r,[])).next())})}function Z(r,t){var e={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},n,o,i,a;return a={next:s(0),throw:s(1),return:s(2)},typeof Symbol=="function"&&(a[Symbol.iterator]=function(){return this}),a;function s(c){return function(l){return u([c,l])}}function u(c){if(n)throw new TypeError("Generator is already executing.");for(;e;)try{if(n=1,o&&(i=c[0]&2?o.return:c[0]?o.throw||((i=o.return)&&i.call(o),0):o.next)&&!(i=i.call(o,c[1])).done)return i;switch(o=0,i&&(c=[c[0]&2,i.value]),c[0]){case 0:case 1:i=c;break;case 4:return e.label++,{value:c[1],done:!1};case 5:e.label++,o=c[1],c=[0];continue;case 7:c=e.ops.pop(),e.trys.pop();continue;default:if(i=e.trys,!(i=i.length>0&&i[i.length-1])&&(c[0]===6||c[0]===2)){e=0;continue}if(c[0]===3&&(!i||c[1]>i[0]&&c[1]<i[3])){e.label=c[1];break}if(c[0]===6&&e.label<i[1]){e.label=i[1],i=c;break}if(i&&e.label<i[2]){e.label=i[2],e.ops.push(c);break}i[2]&&e.ops.pop(),e.trys.pop();continue}c=t.call(r,e)}catch(l){c=[6,l],o=0}finally{n=i=0}if(c[0]&5)throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}}function gr(){for(var r=0,t=0,e=arguments.length;t<e;t++)r+=arguments[t].length;for(var n=Array(r),o=0,t=0;t<e;t++)for(var i=arguments[t],a=0,s=i.length;a<s;a++,o++)n[o]=i[a];return n}var An=function(){function r(t,e){if(!Tn(t)||!Tn(e))throw new Error("Dimensions.constructor - expected width and height to be valid numbers, instead have "+JSON.stringify({width:t,height:e}));this._width=t,this._height=e}return Object.defineProperty(r.prototype,"width",{get:function(){return this._width},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"height",{get:function(){return this._height},enumerable:!0,configurable:!0}),r.prototype.reverse=function(){return new r(1/this.width,1/this.height)},r}();function Uo(r,t){return r instanceof ke&&r.shape.length===t}function ey(r){return Uo(r,2)}function Vo(r){return Uo(r,3)}function mn(r){return Uo(r,4)}function ty(r){return r%1!==0}function pu(r){return r%2===0}function La(r,t){t===void 0&&(t=2);var e=Math.pow(10,t);return Math.floor(r*e)/e}function du(r){return r&&r.width&&r.height}function ny(r,t){var e=r.width,n=r.height,o=t/Math.max(n,e);return new An(Math.round(e*o),Math.round(n*o))}function Wa(r){return r.reduce(function(t,e){return t.add(e)},new ge(0,0)).div(new ge(r.length,r.length))}function Cr(r,t,e){return Array(r).fill(0).map(function(n,o){return t+o*e})}function Tn(r){return!!r&&r!==1/0&&r!==-1/0&&!isNaN(r)||r===0}function vu(r){return Tn(r)&&0<=r&&r<=1}var ge=function(){function r(t,e){this._x=t,this._y=e}return Object.defineProperty(r.prototype,"x",{get:function(){return this._x},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"y",{get:function(){return this._y},enumerable:!0,configurable:!0}),r.prototype.add=function(t){return new r(this.x+t.x,this.y+t.y)},r.prototype.sub=function(t){return new r(this.x-t.x,this.y-t.y)},r.prototype.mul=function(t){return new r(this.x*t.x,this.y*t.y)},r.prototype.div=function(t){return new r(this.x/t.x,this.y/t.y)},r.prototype.abs=function(){return new r(Math.abs(this.x),Math.abs(this.y))},r.prototype.magnitude=function(){return Math.sqrt(Math.pow(this.x,2)+Math.pow(this.y,2))},r.prototype.floor=function(){return new r(Math.floor(this.x),Math.floor(this.y))},r}(),zt=function(){function r(t,e){e===void 0&&(e=!0);var n=t||{},o=[n.left,n.top,n.right,n.bottom].every(Tn),i=[n.x,n.y,n.width,n.height].every(Tn);if(!i&&!o)throw new Error("Box.constructor - expected box to be IBoundingBox | IRect, instead have "+JSON.stringify(n));var a=i?[n.x,n.y,n.width,n.height]:[n.left,n.top,n.right-n.left,n.bottom-n.top],s=a[0],u=a[1],c=a[2],l=a[3];r.assertIsValidBox({x:s,y:u,width:c,height:l},"Box.constructor",e),this._x=s,this._y=u,this._width=c,this._height=l}return r.isRect=function(t){return!!t&&[t.x,t.y,t.width,t.height].every(Tn)},r.assertIsValidBox=function(t,e,n){if(n===void 0&&(n=!1),!r.isRect(t))throw new Error(e+" - invalid box: "+JSON.stringify(t)+", expected object with properties x, y, width, height");if(!n&&(t.width<0||t.height<0))throw new Error(e+" - width ("+t.width+") and height ("+t.height+") must be positive numbers")},Object.defineProperty(r.prototype,"x",{get:function(){return this._x},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"y",{get:function(){return this._y},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"width",{get:function(){return this._width},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"height",{get:function(){return this._height},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"left",{get:function(){return this.x},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"top",{get:function(){return this.y},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"right",{get:function(){return this.x+this.width},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"bottom",{get:function(){return this.y+this.height},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"area",{get:function(){return this.width*this.height},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"topLeft",{get:function(){return new ge(this.left,this.top)},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"topRight",{get:function(){return new ge(this.right,this.top)},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"bottomLeft",{get:function(){return new ge(this.left,this.bottom)},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"bottomRight",{get:function(){return new ge(this.right,this.bottom)},enumerable:!0,configurable:!0}),r.prototype.round=function(){var t=[this.x,this.y,this.width,this.height].map(function(a){return Math.round(a)}),e=t[0],n=t[1],o=t[2],i=t[3];return new r({x:e,y:n,width:o,height:i})},r.prototype.floor=function(){var t=[this.x,this.y,this.width,this.height].map(function(a){return Math.floor(a)}),e=t[0],n=t[1],o=t[2],i=t[3];return new r({x:e,y:n,width:o,height:i})},r.prototype.toSquare=function(){var t=this,e=t.x,n=t.y,o=t.width,i=t.height,a=Math.abs(o-i);return o<i&&(e-=a/2,o+=a),i<o&&(n-=a/2,i+=a),new r({x:e,y:n,width:o,height:i})},r.prototype.rescale=function(t){var e=du(t)?t.width:t,n=du(t)?t.height:t;return new r({x:this.x*e,y:this.y*n,width:this.width*e,height:this.height*n})},r.prototype.pad=function(t,e){var n=[this.x-t/2,this.y-e/2,this.width+t,this.height+e],o=n[0],i=n[1],a=n[2],s=n[3];return new r({x:o,y:i,width:a,height:s})},r.prototype.clipAtImageBorders=function(t,e){var n=this,o=n.x,i=n.y,a=n.right,s=n.bottom,u=Math.max(o,0),c=Math.max(i,0),l=a-u,h=s-c,f=Math.min(l,t-u),p=Math.min(h,e-c);return new r({x:u,y:c,width:f,height:p}).floor()},r.prototype.shift=function(t,e){var n=this,o=n.width,i=n.height,a=this.x+t,s=this.y+e;return new r({x:a,y:s,width:o,height:i})},r.prototype.padAtBorders=function(t,e){var n=this.width+1,o=this.height+1,i=1,a=1,s=n,u=o,c=this.left,l=this.top,h=this.right,f=this.bottom;return h>e&&(s=-h+e+n,h=e),f>t&&(u=-f+t+o,f=t),c<1&&(u=2-c,c=1),l<1&&(u=2-l,l=1),{dy:a,edy:u,dx:i,edx:s,y:l,ey:f,x:c,ex:h,w:n,h:o}},r.prototype.calibrate=function(t){return new r({left:this.left+t.left*this.width,top:this.top+t.top*this.height,right:this.right+t.right*this.width,bottom:this.bottom+t.bottom*this.height}).toSquare().round()},r}(),zo=function(r){re(t,r);function t(e,n,o,i,a){return a===void 0&&(a=!1),r.call(this,{left:e,top:n,right:o,bottom:i},a)||this}return t}(zt),ll=function(){function r(t,e,n,o,i){this._imageDims=new An(i.width,i.height),this._score=t,this._classScore=e,this._className=n,this._box=new zt(o).rescale(this._imageDims)}return Object.defineProperty(r.prototype,"score",{get:function(){return this._score},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"classScore",{get:function(){return this._classScore},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"className",{get:function(){return this._className},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"box",{get:function(){return this._box},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"imageDims",{get:function(){return this._imageDims},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"imageWidth",{get:function(){return this.imageDims.width},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"imageHeight",{get:function(){return this.imageDims.height},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"relativeBox",{get:function(){return new zt(this._box).rescale(this.imageDims.reverse())},enumerable:!0,configurable:!0}),r.prototype.forSize=function(t,e){return new r(this.score,this.classScore,this.className,this.relativeBox,{width:t,height:e})},r}(),mt=function(r){re(t,r);function t(e,n,o){return r.call(this,e,e,"",n,o)||this}return t.prototype.forSize=function(e,n){var o=r.prototype.forSize.call(this,e,n),i=o.score,a=o.relativeBox,s=o.imageDims;return new t(i,a,s)},t}(ll);function ry(r,t,e){e===void 0&&(e=!0);var n=Math.max(0,Math.min(r.right,t.right)-Math.max(r.left,t.left)),o=Math.max(0,Math.min(r.bottom,t.bottom)-Math.max(r.top,t.top)),i=n*o;return e?i/(r.area+t.area-i):i/Math.min(r.area,t.area)}function oy(r){var t=r.map(function(s){return s.x}),e=r.map(function(s){return s.y}),n=t.reduce(function(s,u){return u<s?u:s},1/0),o=e.reduce(function(s,u){return u<s?u:s},1/0),i=t.reduce(function(s,u){return s<u?u:s},0),a=e.reduce(function(s,u){return s<u?u:s},0);return new zo(n,o,i,a)}function Er(r,t,e,n){n===void 0&&(n=!0);for(var o=t.map(function(s,u){return{score:s,boxIndex:u}}).sort(function(s,u){return s.score-u.score}).map(function(s){return s.boxIndex}),i=[],a=function(){var s=o.pop();i.push(s);for(var u=o,c=[],l=0;l<u.length;l++){var h=u[l],f=r[s],p=r[h];c.push(ry(f,p,n))}o=o.filter(function(d,m){return c[m]<=e})};o.length>0;)a();return i}function Mr(r,t){return K(function(){var e=t[0],n=t[1],o=t[2],i=Wt(gr(r.shape.slice(0,3),[1]),e),a=Wt(gr(r.shape.slice(0,3),[1]),n),s=Wt(gr(r.shape.slice(0,3),[1]),o),u=Me([i,a,s],3);return We(r,u)})}function iy(r,t){return t===void 0&&(t=!1),K(function(){var e=r.shape.slice(1),n=e[0],o=e[1];if(n===o)return r;var i=Math.abs(n-o),a=Math.round(i*(t?.5:1)),s=n>o?2:1,u=function(p){var d=r.shape.slice();return d[s]=p,Wt(d,0)},c=u(a),l=i-c.shape[s],h=t&&l?u(l):null,f=[h,r,c].filter(function(p){return!!p}).map(function(p){return p.toFloat()});return Me(f,s)})}function Ri(r){return 1/(1+Math.exp(-r))}var Ua=function(r){re(t,r);function t(e,n,o,i,a){return a===void 0&&(a=!1),r.call(this,{x:e,y:n,width:o,height:i},a)||this}return t}(zt),ay=.5,sy=.43,uy=.45,Rr=function(){function r(t,e,n){n===void 0&&(n=new ge(0,0));var o=e.width,i=e.height;this._imgDims=new An(o,i),this._shift=n,this._positions=t.map(function(a){return a.mul(new ge(o,i)).add(n)})}return Object.defineProperty(r.prototype,"shift",{get:function(){return new ge(this._shift.x,this._shift.y)},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"imageWidth",{get:function(){return this._imgDims.width},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"imageHeight",{get:function(){return this._imgDims.height},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"positions",{get:function(){return this._positions},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"relativePositions",{get:function(){var t=this;return this._positions.map(function(e){return e.sub(t._shift).div(new ge(t.imageWidth,t.imageHeight))})},enumerable:!0,configurable:!0}),r.prototype.forSize=function(t,e){return new this.constructor(this.relativePositions,{width:t,height:e})},r.prototype.shiftBy=function(t,e){return new this.constructor(this.relativePositions,this._imgDims,new ge(t,e))},r.prototype.shiftByPoint=function(t){return this.shiftBy(t.x,t.y)},r.prototype.align=function(t,e){if(e===void 0&&(e={}),t){var n=t instanceof mt?t.box.floor():new zt(t);return this.shiftBy(n.x,n.y).align(null,e)}var o=Object.assign({},{useDlibAlignment:!1,minBoxPadding:.2},e),i=o.useDlibAlignment,a=o.minBoxPadding;return i?this.alignDlib():this.alignMinBbox(a)},r.prototype.alignDlib=function(){var t=this.getRefPointsForAlignment(),e=t[0],n=t[1],o=t[2],i=function(h){return o.sub(h).magnitude()},a=(i(e)+i(n))/2,s=Math.floor(a/uy),u=Wa(t),c=Math.floor(Math.max(0,u.x-ay*s)),l=Math.floor(Math.max(0,u.y-sy*s));return new Ua(c,l,Math.min(s,this.imageWidth+c),Math.min(s,this.imageHeight+l))},r.prototype.alignMinBbox=function(t){var e=oy(this.positions);return e.pad(e.width*t,e.height*t)},r.prototype.getRefPointsForAlignment=function(){throw new Error("getRefPointsForAlignment not implemented by base class")},r}(),cy=function(r){re(t,r);function t(){return r!==null&&r.apply(this,arguments)||this}return t.prototype.getRefPointsForAlignment=function(){var e=this.positions;return[e[0],e[1],Wa([e[3],e[4]])]},t}(Rr),ly=function(r){re(t,r);function t(){return r!==null&&r.apply(this,arguments)||this}return t.prototype.getJawOutline=function(){return this.positions.slice(0,17)},t.prototype.getLeftEyeBrow=function(){return this.positions.slice(17,22)},t.prototype.getRightEyeBrow=function(){return this.positions.slice(22,27)},t.prototype.getNose=function(){return this.positions.slice(27,36)},t.prototype.getLeftEye=function(){return this.positions.slice(36,42)},t.prototype.getRightEye=function(){return this.positions.slice(42,48)},t.prototype.getMouth=function(){return this.positions.slice(48,68)},t.prototype.getRefPointsForAlignment=function(){return[this.getLeftEye(),this.getRightEye(),this.getMouth()].map(Wa)},t}(Rr),mu=function(){function r(t,e){this._label=t,this._distance=e}return Object.defineProperty(r.prototype,"label",{get:function(){return this._label},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"distance",{get:function(){return this._distance},enumerable:!0,configurable:!0}),r.prototype.toString=function(t){return t===void 0&&(t=!0),""+this.label+(t?" ("+La(this.distance)+")":"")},r}(),gu=function(r){re(t,r);function t(e,n){var o=r.call(this,e)||this;return o._label=n,o}return t.assertIsValidLabeledBox=function(e,n){if(zt.assertIsValidBox(e,n),!Tn(e.label))throw new Error(n+" - expected property label ("+e.label+") to be a number")},Object.defineProperty(t.prototype,"label",{get:function(){return this._label},enumerable:!0,configurable:!0}),t}(zt),Kr=function(){function r(t,e){if(typeof t!="string")throw new Error("LabeledFaceDescriptors - constructor expected label to be a string");if(!Array.isArray(e)||e.some(function(n){return!(n instanceof Float32Array)}))throw new Error("LabeledFaceDescriptors - constructor expected descriptors to be an array of Float32Array");this._label=t,this._descriptors=e}return Object.defineProperty(r.prototype,"label",{get:function(){return this._label},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"descriptors",{get:function(){return this._descriptors},enumerable:!0,configurable:!0}),r.prototype.toJSON=function(){return{label:this.label,descriptors:this.descriptors.map(function(t){return Array.from(t)})}},r.fromJSON=function(t){var e=t.descriptors.map(function(n){return new Float32Array(n)});return new r(t.label,e)},r}();(function(r){re(t,r);function t(e,n,o,i){var a=r.call(this,e,n)||this;return a._score=o,a._classScore=i,a}return t.assertIsValidPredictedBox=function(e,n){if(gu.assertIsValidLabeledBox(e,n),!vu(e.score)||!vu(e.classScore))throw new Error(n+" - expected properties score ("+e.score+") and ("+e.classScore+") to be a number between [0, 1]")},Object.defineProperty(t.prototype,"score",{get:function(){return this._score},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"classScore",{get:function(){return this._classScore},enumerable:!0,configurable:!0}),t})(gu);function kr(r){return r.detection instanceof mt}function Ir(r,t){var e={detection:t};return Object.assign({},r,e)}function hl(){var r=window.fetch||function(){throw new Error("fetch - missing fetch implementation for browser environment")},t=function(){throw new Error("readFile - filesystem not available for browser environment")};return{Canvas:HTMLCanvasElement,CanvasRenderingContext2D,Image:HTMLImageElement,ImageData,Video:HTMLVideoElement,createCanvasElement:function(){return document.createElement("canvas")},createImageElement:function(){return document.createElement("img")},fetch:r,readFile:t}}function fl(r){var t="";if(!r)try{r=require("fs")}catch(n){t=n.toString()}var e=r?function(n){return new Promise(function(o,i){r.readFile(n,function(a,s){return a?i(a):o(s)})})}:function(){throw new Error("readFile - failed to require fs in nodejs environment with error: "+t)};return{readFile:e}}function pl(){var r=global.Canvas||global.HTMLCanvasElement,t=global.Image||global.HTMLImageElement,e=function(){if(r)return new r;throw new Error("createCanvasElement - missing Canvas implementation for nodejs environment")},n=function(){if(t)return new t;throw new Error("createImageElement - missing Image implementation for nodejs environment")},o=global.fetch||function(){throw new Error("fetch - missing fetch implementation for nodejs environment")},i=fl();return Ye({Canvas:r||function(){function a(){}return a}(),CanvasRenderingContext2D:global.CanvasRenderingContext2D||function(){function a(){}return a}(),Image:t||function(){function a(){}return a}(),ImageData:global.ImageData||function(){function a(){}return a}(),Video:global.HTMLVideoElement||function(){function a(){}return a}(),createCanvasElement:e,createImageElement:n,fetch:o},i)}function dl(){return typeof window=="object"&&typeof document<"u"&&typeof HTMLImageElement<"u"&&typeof HTMLCanvasElement<"u"&&typeof HTMLVideoElement<"u"&&typeof ImageData<"u"&&typeof CanvasRenderingContext2D<"u"}function vl(){return typeof global=="object"&&typeof require=="function"&&typeof ph<"u"&&typeof process<"u"&&!!process.version}var Oe;function hy(){if(!Oe)throw new Error("getEnv - environment is not defined, check isNodejs() and isBrowser()");return Oe}function ea(r){Oe=r}function Va(){dl()&&ea(hl()),vl()&&ea(pl())}function fy(r){if(Oe||Va(),!Oe)throw new Error("monkeyPatch - environment is not defined, check isNodejs() and isBrowser()");var t=r.Canvas,e=t===void 0?Oe.Canvas:t,n=r.Image,o=n===void 0?Oe.Image:n;Oe.Canvas=e,Oe.Image=o,Oe.createCanvasElement=r.createCanvasElement||function(){return new e},Oe.createImageElement=r.createImageElement||function(){return new o},Oe.ImageData=r.ImageData||Oe.ImageData,Oe.Video=r.Video||Oe.Video,Oe.fetch=r.fetch||Oe.fetch,Oe.readFile=r.readFile||Oe.readFile}var et={getEnv:hy,setEnv:ea,initialize:Va,createBrowserEnv:hl,createFileSystem:fl,createNodejsEnv:pl,monkeyPatch:fy,isBrowser:dl,isNodejs:vl};Va();function za(r){return!et.isNodejs()&&typeof r=="string"?document.getElementById(r):r}function en(r){var t=et.getEnv(),e=t.Canvas,n=t.CanvasRenderingContext2D;if(r instanceof n)return r;var o=za(r);if(!(o instanceof e))throw new Error("resolveContext2d - expected canvas to be of instance of Canvas");var i=o.getContext("2d");if(!i)throw new Error("resolveContext2d - canvas 2d context is null");return i}var pn;(function(r){r.TOP_LEFT="TOP_LEFT",r.TOP_RIGHT="TOP_RIGHT",r.BOTTOM_LEFT="BOTTOM_LEFT",r.BOTTOM_RIGHT="BOTTOM_RIGHT"})(pn||(pn={}));var ml=function(){function r(t){t===void 0&&(t={});var e=t.anchorPosition,n=t.backgroundColor,o=t.fontColor,i=t.fontSize,a=t.fontStyle,s=t.padding;this.anchorPosition=e||pn.TOP_LEFT,this.backgroundColor=n||"rgba(0, 0, 0, 0.5)",this.fontColor=o||"rgba(255, 255, 255, 1)",this.fontSize=i||14,this.fontStyle=a||"Georgia",this.padding=s||4}return r}(),gl=function(){function r(t,e,n){n===void 0&&(n={}),this.text=typeof t=="string"?[t]:t instanceof r?t.text:t,this.anchor=e,this.options=new ml(n)}return r.prototype.measureWidth=function(t){var e=this.options.padding;return this.text.map(function(n){return t.measureText(n).width}).reduce(function(n,o){return n<o?o:n},0)+2*e},r.prototype.measureHeight=function(){var t=this.options,e=t.fontSize,n=t.padding;return this.text.length*e+2*n},r.prototype.getUpperLeft=function(t,e){var n=this.options.anchorPosition,o=n===pn.BOTTOM_RIGHT||n===pn.TOP_RIGHT,i=n===pn.BOTTOM_LEFT||n===pn.BOTTOM_RIGHT,a=this.measureWidth(t),s=this.measureHeight(),u=o?this.anchor.x-a:this.anchor.x,c=i?this.anchor.y-s:this.anchor.y;if(e){var l=e.width,h=e.height,f=Math.max(Math.min(u,l-a),0),p=Math.max(Math.min(c,h-s),0);return{x:f,y:p}}return{x:u,y:c}},r.prototype.draw=function(t){var e=za(t),n=en(e),o=this.options,i=o.backgroundColor,a=o.fontColor,s=o.fontSize,u=o.fontStyle,c=o.padding;n.font=s+"px "+u;var l=this.measureWidth(n),h=this.measureHeight();n.fillStyle=i;var f=this.getUpperLeft(n,e);n.fillRect(f.x,f.y,l,h),n.fillStyle=a,this.text.forEach(function(p,d){var m=c+f.x,v=c+f.y+(d+1)*s;n.fillText(p,m,v)})},r}(),py=function(){function r(t){t===void 0&&(t={});var e=t.boxColor,n=t.lineWidth,o=t.label,i=t.drawLabelOptions;this.boxColor=e||"rgba(0, 0, 255, 1)",this.lineWidth=n||2,this.label=o;var a={anchorPosition:pn.BOTTOM_LEFT,backgroundColor:this.boxColor};this.drawLabelOptions=new ml(Object.assign({},a,i))}return r}(),dy=function(){function r(t,e){e===void 0&&(e={}),this.box=new zt(t),this.options=new py(e)}return r.prototype.draw=function(t){var e=en(t),n=this.options,o=n.boxColor,i=n.lineWidth,a=this.box,s=a.x,u=a.y,c=a.width,l=a.height;e.strokeStyle=o,e.lineWidth=i,e.strokeRect(s,u,c,l);var h=this.options.label;h&&new gl([h],{x:s-i/2,y:u},this.options.drawLabelOptions).draw(t)},r}();function vy(r,t){var e=Array.isArray(t)?t:[t];e.forEach(function(n){var o=n instanceof mt?n.score:kr(n)?n.detection.score:void 0,i=n instanceof mt?n.box:kr(n)?n.detection.box:new zt(n),a=o?""+La(o):void 0;new dy(i,{label:a}).draw(r)})}function yl(r){var t=et.getEnv(),e=t.Image,n=t.Video;return r instanceof e&&r.complete||r instanceof n&&r.readyState>=3}function my(r){return new Promise(function(t,e){if(r instanceof et.getEnv().Canvas||yl(r))return t();function n(i){i.currentTarget&&(i.currentTarget.removeEventListener("load",n),i.currentTarget.removeEventListener("error",o),t(i))}function o(i){i.currentTarget&&(i.currentTarget.removeEventListener("load",n),i.currentTarget.removeEventListener("error",o),e(i))}r.addEventListener("load",n),r.addEventListener("error",o)})}function Ga(r){var t=et.getEnv(),e=t.Image,n=t.Video;return r instanceof e?new An(r.naturalWidth,r.naturalHeight):r instanceof n?new An(r.videoWidth,r.videoHeight):new An(r.width,r.height)}function Go(r){var t=r.width,e=r.height,n=et.getEnv().createCanvasElement,o=n();return o.width=t,o.height=e,o}function Ha(r,t){var e=et.getEnv().ImageData;if(!(r instanceof e)&&!yl(r))throw new Error("createCanvasFromMedia - media has not finished loading yet");var n=Ga(r),o=n.width,i=n.height,a=Go({width:o,height:i});return r instanceof e?en(a).putImageData(r,0,0):en(a).drawImage(r,0,0,o,i),a}function gy(r,t){return Q(this,void 0,void 0,function(){var e,n,o,i,a,s;return Z(this,function(u){switch(u.label){case 0:return e=et.getEnv().createCanvasElement(),n=r.shape.slice(mn(r)?1:0),o=n[0],i=n[1],a=n[2],s=K(function(){return r.as3D(o,i,a).toInt()}),[4,Ba.toPixels(s,e)];case 1:return u.sent(),s.dispose(),[2,e]}})})}function yu(r){var t=et.getEnv(),e=t.Image,n=t.Canvas,o=t.Video;return r instanceof e||r instanceof n||r instanceof o}function yy(r,t,e){e===void 0&&(e=!1);var n=et.getEnv(),o=n.Image,i=n.Canvas;if(!(r instanceof o||r instanceof i))throw new Error("imageToSquare - expected arg0 to be HTMLImageElement | HTMLCanvasElement");var a=Ga(r),s=t/Math.max(a.height,a.width),u=s*a.width,c=s*a.height,l=Go({width:t,height:t}),h=r instanceof i?r:Ha(r),f=Math.abs(u-c)/2,p=e&&u<c?f:0,d=e&&c<u?f:0;return en(l).drawImage(h,p,d,u,c),l}var So=function(){function r(t,e){var n=this;if(e===void 0&&(e=!1),this._imageTensors=[],this._canvases=[],this._treatAsBatchInput=!1,this._inputDimensions=[],!Array.isArray(t))throw new Error("NetInput.constructor - expected inputs to be an Array of TResolvedNetInput or to be instanceof tf.Tensor4D, instead have "+t);this._treatAsBatchInput=e,this._batchSize=t.length,t.forEach(function(o,i){if(Vo(o)){n._imageTensors[i]=o,n._inputDimensions[i]=o.shape;return}if(mn(o)){var a=o.shape[0];if(a!==1)throw new Error("NetInput - tf.Tensor4D with batchSize "+a+" passed, but not supported in input array");n._imageTensors[i]=o,n._inputDimensions[i]=o.shape.slice(1);return}var s=o instanceof et.getEnv().Canvas?o:Ha(o);n._canvases[i]=s,n._inputDimensions[i]=[s.height,s.width,3]})}return Object.defineProperty(r.prototype,"imageTensors",{get:function(){return this._imageTensors},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"canvases",{get:function(){return this._canvases},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"isBatchInput",{get:function(){return this.batchSize>1||this._treatAsBatchInput},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"batchSize",{get:function(){return this._batchSize},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"inputDimensions",{get:function(){return this._inputDimensions},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"inputSize",{get:function(){return this._inputSize},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"reshapedInputDimensions",{get:function(){var t=this;return Cr(this.batchSize,0,1).map(function(e,n){return t.getReshapedInputDimensions(n)})},enumerable:!0,configurable:!0}),r.prototype.getInput=function(t){return this.canvases[t]||this.imageTensors[t]},r.prototype.getInputDimensions=function(t){return this._inputDimensions[t]},r.prototype.getInputHeight=function(t){return this._inputDimensions[t][0]},r.prototype.getInputWidth=function(t){return this._inputDimensions[t][1]},r.prototype.getReshapedInputDimensions=function(t){if(typeof this.inputSize!="number")throw new Error("getReshapedInputDimensions - inputSize not set, toBatchTensor has not been called yet");var e=this.getInputWidth(t),n=this.getInputHeight(t);return ny({width:e,height:n},this.inputSize)},r.prototype.toBatchTensor=function(t,e){var n=this;return e===void 0&&(e=!0),this._inputSize=t,K(function(){var o=Cr(n.batchSize,0,1).map(function(a){var s=n.getInput(a);if(s instanceof ke){var u=mn(s)?s:s.expandDims();return u=iy(u,e),(u.shape[1]!==t||u.shape[2]!==t)&&(u=Da.resizeBilinear(u,[t,t])),u.as3D(t,t,3)}if(s instanceof et.getEnv().Canvas)return Ba.fromPixels(yy(s,t,e));throw new Error("toBatchTensor - at batchIdx "+a+", expected input to be instanceof tf.Tensor or instanceof HTMLCanvasElement, instead have "+s)}),i=vt(o.map(function(a){return a.toFloat()})).as4D(n.batchSize,t,t,3);return i})},r}();function Ge(r){return Q(this,void 0,void 0,function(){var t,e,n;return Z(this,function(o){switch(o.label){case 0:if(r instanceof So)return[2,r];if(t=Array.isArray(r)?r:[r],!t.length)throw new Error("toNetInput - empty array passed as input");return e=function(i){return Array.isArray(r)?" at input index "+i+":":""},n=t.map(za),n.forEach(function(i,a){if(!yu(i)&&!Vo(i)&&!mn(i))throw typeof t[a]=="string"?new Error("toNetInput -"+e(a)+" string passed, but could not resolve HTMLElement for element id "+t[a]):new Error("toNetInput -"+e(a)+" expected media to be of type HTMLImageElement | HTMLVideoElement | HTMLCanvasElement | tf.Tensor3D, or to be an element id");if(mn(i)){var s=i.shape[0];if(s!==1)throw new Error("toNetInput -"+e(a)+" tf.Tensor4D with batchSize "+s+" passed, but not supported in input array")}}),[4,Promise.all(n.map(function(i){return yu(i)&&my(i)}))];case 1:return o.sent(),[2,new So(n,Array.isArray(r))]}})})}function qa(r,t){return Q(this,void 0,void 0,function(){var e,n,o,i,a,s,u;return Z(this,function(c){switch(c.label){case 0:return e=et.getEnv().Canvas,n=r,r instanceof e?[3,5]:[4,Ge(r)];case 1:if(o=c.sent(),o.batchSize>1)throw new Error("extractFaces - batchSize > 1 not supported");return i=o.getInput(0),i instanceof e?(a=i,[3,4]):[3,2];case 2:return[4,gy(i)];case 3:a=c.sent(),c.label=4;case 4:n=a,c.label=5;case 5:return s=en(n),u=t.map(function(l){return l instanceof mt?l.forSize(n.width,n.height).box.floor():l}).map(function(l){return l.clipAtImageBorders(n.width,n.height)}),[2,u.map(function(l){var h=l.x,f=l.y,p=l.width,d=l.height,m=Go({width:p,height:d});return en(m).putImageData(s.getImageData(h,f,p,d),0,0),m})]}})})}function ja(r,t){return Q(this,void 0,void 0,function(){return Z(this,function(e){if(!Vo(r)&&!mn(r))throw new Error("extractFaceTensors - expected image tensor to be 3D or 4D");if(mn(r)&&r.shape[0]>1)throw new Error("extractFaceTensors - batchSize > 1 not supported");return[2,K(function(){var n=r.shape.slice(mn(r)?1:0),o=n[0],i=n[1],a=n[2],s=t.map(function(c){return c instanceof mt?c.forSize(i,o).box:c}).map(function(c){return c.clipAtImageBorders(i,o)}),u=s.map(function(c){var l=c.x,h=c.y,f=c.width,p=c.height;return qc(r.as3D(o,i,a),[h,l,0],[p,f,a])});return u})]})})}function xy(r,t){return Q(this,void 0,void 0,function(){var e,n;return Z(this,function(o){switch(o.label){case 0:return e=et.getEnv().fetch,[4,e(r,t)];case 1:if(n=o.sent(),!(n.status<400))throw new Error("failed to fetch: ("+n.status+") "+n.statusText+", from url: "+n.url);return[2,n]}})})}function by(r){return Q(this,void 0,void 0,function(){return Z(this,function(t){switch(t.label){case 0:return[4,xy(r)];case 1:return[2,t.sent().json()]}})})}function xl(r,t){var e=t+"-weights_manifest.json";if(!r)return{modelBaseUri:"",manifestUri:e};if(r==="/")return{modelBaseUri:"/",manifestUri:"/"+e};var n=r.startsWith("http://")?"http://":r.startsWith("https://")?"https://":"";r=r.replace(n,"");var o=r.split("/").filter(function(s){return s}),i=r.endsWith(".json")?o[o.length-1]:e,a=n+(r.endsWith(".json")?o.slice(0,o.length-1):o).join("/");return a=r.startsWith("/")?"/"+a:a,{modelBaseUri:a,manifestUri:a==="/"?"/"+i:a+"/"+i}}function wy(r,t){return Q(this,void 0,void 0,function(){var e,n,o,i;return Z(this,function(a){switch(a.label){case 0:return e=xl(r,t),n=e.manifestUri,o=e.modelBaseUri,[4,by(n)];case 1:return i=a.sent(),[2,ul.loadWeights(i,o)]}})})}function _y(r,t,e){e===void 0&&(e=!1);var n=e?Ga(t):t,o=n.width,i=n.height;return r.width=o,r.height=i,{width:o,height:i}}var on=function(){function r(t){this._name=t,this._params=void 0,this._paramMappings=[]}return Object.defineProperty(r.prototype,"params",{get:function(){return this._params},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"paramMappings",{get:function(){return this._paramMappings},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"isLoaded",{get:function(){return!!this.params},enumerable:!0,configurable:!0}),r.prototype.getParamFromPath=function(t){var e=this.traversePropertyPath(t),n=e.obj,o=e.objProp;return n[o]},r.prototype.reassignParamFromPath=function(t,e){var n=this.traversePropertyPath(t),o=n.obj,i=n.objProp;o[i].dispose(),o[i]=e},r.prototype.getParamList=function(){var t=this;return this._paramMappings.map(function(e){var n=e.paramPath;return{path:n,tensor:t.getParamFromPath(n)}})},r.prototype.getTrainableParams=function(){return this.getParamList().filter(function(t){return t.tensor instanceof rr})},r.prototype.getFrozenParams=function(){return this.getParamList().filter(function(t){return!(t.tensor instanceof rr)})},r.prototype.variable=function(){var t=this;this.getFrozenParams().forEach(function(e){var n=e.path,o=e.tensor;t.reassignParamFromPath(n,o.variable())})},r.prototype.freeze=function(){var t=this;this.getTrainableParams().forEach(function(e){var n=e.path,o=e.tensor,i=Ke(o.dataSync());o.dispose(),t.reassignParamFromPath(n,i)})},r.prototype.dispose=function(t){t===void 0&&(t=!0),this.getParamList().forEach(function(e){if(t&&e.tensor.isDisposed)throw new Error("param tensor has already been disposed for path "+e.path);e.tensor.dispose()}),this._params=void 0},r.prototype.serializeParams=function(){return new Float32Array(this.getParamList().map(function(t){var e=t.tensor;return Array.from(e.dataSync())}).reduce(function(t,e){return t.concat(e)}))},r.prototype.load=function(t){return Q(this,void 0,void 0,function(){return Z(this,function(e){switch(e.label){case 0:return t instanceof Float32Array?(this.extractWeights(t),[2]):[4,this.loadFromUri(t)];case 1:return e.sent(),[2]}})})},r.prototype.loadFromUri=function(t){return Q(this,void 0,void 0,function(){var e;return Z(this,function(n){switch(n.label){case 0:if(t&&typeof t!="string")throw new Error(this._name+".loadFromUri - expected model uri");return[4,wy(t,this.getDefaultModelName())];case 1:return e=n.sent(),this.loadFromWeightMap(e),[2]}})})},r.prototype.loadFromDisk=function(t){return Q(this,void 0,void 0,function(){var e,n,o,i,a,s,u,c,l,h;return Z(this,function(f){switch(f.label){case 0:if(t&&typeof t!="string")throw new Error(this._name+".loadFromDisk - expected model file path");return e=et.getEnv().readFile,n=xl(t,this.getDefaultModelName()),o=n.manifestUri,i=n.modelBaseUri,a=function(p){return Promise.all(p.map(function(d){return e(d).then(function(m){return m.buffer})}))},s=ul.weightsLoaderFactory(a),l=(c=JSON).parse,[4,e(o)];case 1:return u=l.apply(c,[f.sent().toString()]),[4,s(u,i)];case 2:return h=f.sent(),this.loadFromWeightMap(h),[2]}})})},r.prototype.loadFromWeightMap=function(t){var e=this.extractParamsFromWeigthMap(t),n=e.paramMappings,o=e.params;this._paramMappings=n,this._params=o},r.prototype.extractWeights=function(t){var e=this.extractParams(t),n=e.paramMappings,o=e.params;this._paramMappings=n,this._params=o},r.prototype.traversePropertyPath=function(t){if(!this.params)throw new Error("traversePropertyPath - model has no loaded params");var e=t.split("/").reduce(function(i,a){if(!i.nextObj.hasOwnProperty(a))throw new Error("traversePropertyPath - object does not have property "+a+", for path "+t);return{obj:i.nextObj,objProp:a,nextObj:i.nextObj[a]}},{nextObj:this.params}),n=e.obj,o=e.objProp;if(!n||!o||!(n[o]instanceof ke))throw new Error("traversePropertyPath - parameter is not a tensor, for path "+t);return{obj:n,objProp:o}},r}();function dt(r,t,e){return K(function(){var n=ka(r,t.depthwise_filter,t.pointwise_filter,e,"same");return n=ue(n,t.bias),n})}function ki(r,t,e){return e===void 0&&(e=!1),K(function(){var n=Ie(e?ue(wt(r,t.conv0.filters,[2,2],"same"),t.conv0.bias):dt(r,t.conv0,[2,2])),o=dt(n,t.conv1,[1,1]),i=Ie(ue(n,o)),a=dt(i,t.conv2,[1,1]);return Ie(ue(n,ue(o,a)))})}function Xr(r,t,e,n){return e===void 0&&(e=!1),n===void 0&&(n=!0),K(function(){var o=Ie(e?ue(wt(r,t.conv0.filters,n?[2,2]:[1,1],"same"),t.conv0.bias):dt(r,t.conv0,n?[2,2]:[1,1])),i=dt(o,t.conv1,[1,1]),a=Ie(ue(o,i)),s=dt(a,t.conv2,[1,1]),u=Ie(ue(o,ue(i,s))),c=dt(u,t.conv3,[1,1]);return Ie(ue(o,ue(i,ue(s,c))))})}function Rt(r,t,e,n){return e===void 0&&(e="same"),n===void 0&&(n=!1),K(function(){var o=ue(wt(r,t.filters,[1,1],e),t.bias);return n?Ie(o):o})}function an(r,t){Object.keys(r).forEach(function(e){t.some(function(n){return n.originalPath===e})||r[e].dispose()})}function Ho(r,t){return function(e,n,o,i){var a=nt(r(e*n*o*o),[o,o,e,n]),s=Fe(r(n));return t.push({paramPath:i+"/filters"},{paramPath:i+"/bias"}),{filters:a,bias:s}}}function Ka(r,t){return function(e,n,o){var i=dn(r(e*n),[e,n]),a=Fe(r(n));return t.push({paramPath:o+"/weights"},{paramPath:o+"/bias"}),{weights:i,bias:a}}}var bl=function(){function r(t,e,n){this.depthwise_filter=t,this.pointwise_filter=e,this.bias=n}return r}();function Xa(r,t){return function(e,n,o){var i=nt(r(9*e),[3,3,e,1]),a=nt(r(e*n),[1,1,e,n]),s=Fe(r(n));return t.push({paramPath:o+"/depthwise_filter"},{paramPath:o+"/pointwise_filter"},{paramPath:o+"/bias"}),new bl(i,a,s)}}function $a(r){return function(t){var e=r(t+"/depthwise_filter",4),n=r(t+"/pointwise_filter",4),o=r(t+"/bias",1);return new bl(e,n,o)}}function wn(r,t){return function(e,n,o){var i=r[e];if(!Uo(i,n))throw new Error("expected weightMap["+e+"] to be a Tensor"+n+"D, instead have "+i);return t.push({originalPath:e,paramPath:o||e}),i}}function sn(r){var t=r;function e(o){var i=t.slice(0,o);return t=t.slice(o),i}function n(){return t}return{extractWeights:e,getRemainingWeights:n}}function wl(r,t){var e=Ho(r,t),n=Xa(r,t);function o(a,s,u,c){c===void 0&&(c=!1);var l=c?e(a,s,3,u+"/conv0"):n(a,s,u+"/conv0"),h=n(s,s,u+"/conv1"),f=n(s,s,u+"/conv2");return{conv0:l,conv1:h,conv2:f}}function i(a,s,u,c){c===void 0&&(c=!1);var l=o(a,s,u,c),h=l.conv0,f=l.conv1,p=l.conv2,d=n(s,s,u+"/conv3");return{conv0:h,conv1:f,conv2:p,conv3:d}}return{extractDenseBlock3Params:o,extractDenseBlock4Params:i}}function Cy(r){var t=[],e=sn(r),n=e.extractWeights,o=e.getRemainingWeights,i=wl(n,t).extractDenseBlock4Params,a=i(3,32,"dense0",!0),s=i(32,64,"dense1"),u=i(64,128,"dense2"),c=i(128,256,"dense3");if(o().length!==0)throw new Error("weights remaing after extract: "+o().length);return{paramMappings:t,params:{dense0:a,dense1:s,dense2:u,dense3:c}}}function _l(r){return function(t){var e=r(t+"/filters",4),n=r(t+"/bias",1);return{filters:e,bias:n}}}function Cl(r,t){var e=wn(r,t),n=_l(e),o=$a(e);function i(s,u){u===void 0&&(u=!1);var c=u?n(s+"/conv0"):o(s+"/conv0"),l=o(s+"/conv1"),h=o(s+"/conv2");return{conv0:c,conv1:l,conv2:h}}function a(s,u){u===void 0&&(u=!1);var c=u?n(s+"/conv0"):o(s+"/conv0"),l=o(s+"/conv1"),h=o(s+"/conv2"),f=o(s+"/conv3");return{conv0:c,conv1:l,conv2:h,conv3:f}}return{extractDenseBlock3Params:i,extractDenseBlock4Params:a}}function Ey(r){var t=[],e=Cl(r,t).extractDenseBlock4Params,n={dense0:e("dense0",!0),dense1:e("dense1"),dense2:e("dense2"),dense3:e("dense3")};return an(r,t),{params:n,paramMappings:t}}var El=function(r){re(t,r);function t(){return r.call(this,"FaceFeatureExtractor")||this}return t.prototype.forwardInput=function(e){var n=this.params;if(!n)throw new Error("FaceFeatureExtractor - load model before inference");return K(function(){var o=e.toBatchTensor(112,!0),i=[122.782,117.001,104.298],a=Mr(o,i).div(q(255)),s=Xr(a,n.dense0,!0);return s=Xr(s,n.dense1),s=Xr(s,n.dense2),s=Xr(s,n.dense3),s=Pr(s,[7,7],[2,2],"valid"),s})},t.prototype.forward=function(e){return Q(this,void 0,void 0,function(){var n;return Z(this,function(o){switch(o.label){case 0:return n=this.forwardInput,[4,Ge(e)];case 1:return[2,n.apply(this,[o.sent()])]}})})},t.prototype.getDefaultModelName=function(){return"face_feature_extractor_model"},t.prototype.extractParamsFromWeigthMap=function(e){return Ey(e)},t.prototype.extractParams=function(e){return Cy(e)},t}(on);function Mt(r,t){return K(function(){return ue(Bo(r,t.weights),t.bias)})}function Ry(r,t,e){var n=[],o=sn(r),i=o.extractWeights,a=o.getRemainingWeights,s=Ka(i,n),u=s(t,e,"fc");if(a().length!==0)throw new Error("weights remaing after extract: "+a().length);return{paramMappings:n,params:{fc:u}}}function ky(r){var t=[],e=wn(r,t);function n(i){var a=e(i+"/weights",2),s=e(i+"/bias",1);return{weights:a,bias:s}}var o={fc:n("fc")};return an(r,t),{params:o,paramMappings:t}}function Rl(r){var t={},e={};return Object.keys(r).forEach(function(n){var o=n.startsWith("fc")?e:t;o[n]=r[n]}),{featureExtractorMap:t,classifierMap:e}}var kl=function(r){re(t,r);function t(e,n){var o=r.call(this,e)||this;return o._faceFeatureExtractor=n,o}return Object.defineProperty(t.prototype,"faceFeatureExtractor",{get:function(){return this._faceFeatureExtractor},enumerable:!0,configurable:!0}),t.prototype.runNet=function(e){var n=this,o=this.params;if(!o)throw new Error(this._name+" - load model before inference");return K(function(){var i=e instanceof So?n.faceFeatureExtractor.forwardInput(e):e;return Mt(i.as2D(i.shape[0],-1),o.fc)})},t.prototype.dispose=function(e){e===void 0&&(e=!0),this.faceFeatureExtractor.dispose(e),r.prototype.dispose.call(this,e)},t.prototype.loadClassifierParams=function(e){var n=this.extractClassifierParams(e),o=n.params,i=n.paramMappings;this._params=o,this._paramMappings=i},t.prototype.extractClassifierParams=function(e){return Ry(e,this.getClassifierChannelsIn(),this.getClassifierChannelsOut())},t.prototype.extractParamsFromWeigthMap=function(e){var n=Rl(e),o=n.featureExtractorMap,i=n.classifierMap;return this.faceFeatureExtractor.loadFromWeightMap(o),ky(i)},t.prototype.extractParams=function(e){var n=this.getClassifierChannelsIn(),o=this.getClassifierChannelsOut(),i=o*n+o,a=e.slice(0,e.length-i),s=e.slice(e.length-i);return this.faceFeatureExtractor.extractWeights(a),this.extractClassifierParams(s)},t}(on),xu=["neutral","happy","sad","angry","fearful","disgusted","surprised"],Ya=function(){function r(t){var e=this;if(t.length!==7)throw new Error("FaceExpressions.constructor - expected probabilities.length to be 7, have: "+t.length);xu.forEach(function(n,o){e[n]=t[o]})}return r.prototype.asSortedArray=function(){var t=this;return xu.map(function(e){return{expression:e,probability:t[e]}}).sort(function(e,n){return n.probability-e.probability})},r}(),Iy=function(r){re(t,r);function t(e){return e===void 0&&(e=new El),r.call(this,"FaceExpressionNet",e)||this}return t.prototype.forwardInput=function(e){var n=this;return K(function(){return nn(n.runNet(e))})},t.prototype.forward=function(e){return Q(this,void 0,void 0,function(){var n;return Z(this,function(o){switch(o.label){case 0:return n=this.forwardInput,[4,Ge(e)];case 1:return[2,n.apply(this,[o.sent()])]}})})},t.prototype.predictExpressions=function(e){return Q(this,void 0,void 0,function(){var n,o,i,a,s=this;return Z(this,function(u){switch(u.label){case 0:return[4,Ge(e)];case 1:return n=u.sent(),[4,this.forwardInput(n)];case 2:return o=u.sent(),[4,Promise.all(Be(o).map(function(c){return Q(s,void 0,void 0,function(){var l;return Z(this,function(h){switch(h.label){case 0:return[4,c.data()];case 1:return l=h.sent(),c.dispose(),[2,l]}})})}))];case 3:return i=u.sent(),o.dispose(),a=i.map(function(c){return new Ya(c)}),[2,n.isBatchInput?a:a[0]]}})})},t.prototype.getDefaultModelName=function(){return"face_expression_model"},t.prototype.getClassifierChannelsIn=function(){return 256},t.prototype.getClassifierChannelsOut=function(){return 7},t}(kl);function Sy(r){return r.expressions instanceof Ya}function Il(r,t){var e={expressions:t};return Object.assign({},r,e)}function Ay(r,t,e,n){var o=Array.isArray(t)?t:[t];o.forEach(function(i){var a=i instanceof Ya?i:Sy(i)?i.expressions:void 0;if(!a)throw new Error("drawFaceExpressions - expected faceExpressions to be FaceExpressions | WithFaceExpressions<{}> or array thereof");var s=a.asSortedArray(),u=s.filter(function(h){return h.probability>e}),c=kr(i)?i.detection.box.bottomLeft:new ge(0,0),l=new gl(u.map(function(h){return h.expression+" ("+La(h.probability)+")"}),c);l.draw(r)})}function Sl(r){return kr(r)&&r.landmarks instanceof Rr&&r.unshiftedLandmarks instanceof Rr&&r.alignedRect instanceof mt}function qo(r,t){var e=r.detection.box,n=t.shiftBy(e.x,e.y),o=n.align(),i=r.detection.imageDims,a=new mt(r.detection.score,o.rescale(i.reverse()),i),s={landmarks:n,unshiftedLandmarks:t,alignedRect:a};return Object.assign({},r,s)}function Ty(r,t){var e=Ho(r,t),n=Xa(r,t);function o(a,s,u){var c=n(a,s,u+"/separable_conv0"),l=n(s,s,u+"/separable_conv1"),h=e(a,s,1,u+"/expansion_conv");return{separable_conv0:c,separable_conv1:l,expansion_conv:h}}function i(a,s){var u=n(a,a,s+"/separable_conv0"),c=n(a,a,s+"/separable_conv1"),l=n(a,a,s+"/separable_conv2");return{separable_conv0:u,separable_conv1:c,separable_conv2:l}}return{extractConvParams:e,extractSeparableConvParams:n,extractReductionBlockParams:o,extractMainBlockParams:i}}function Dy(r,t){var e=[],n=sn(r),o=n.extractWeights,i=n.getRemainingWeights,a=Ty(o,e),s=a.extractConvParams,u=a.extractSeparableConvParams,c=a.extractReductionBlockParams,l=a.extractMainBlockParams,h=s(3,32,3,"entry_flow/conv_in"),f=c(32,64,"entry_flow/reduction_block_0"),p=c(64,128,"entry_flow/reduction_block_1"),d={conv_in:h,reduction_block_0:f,reduction_block_1:p},m={};Cr(t,0,1).forEach(function(b){m["main_block_"+b]=l(128,"middle_flow/main_block_"+b)});var v=c(128,256,"exit_flow/reduction_block"),g=u(256,512,"exit_flow/separable_conv"),x={reduction_block:v,separable_conv:g};if(i().length!==0)throw new Error("weights remaing after extract: "+i().length);return{paramMappings:e,params:{entry_flow:d,middle_flow:m,exit_flow:x}}}function Ny(r,t){var e=wn(r,t),n=_l(e),o=$a(e);function i(s){var u=o(s+"/separable_conv0"),c=o(s+"/separable_conv1"),l=n(s+"/expansion_conv");return{separable_conv0:u,separable_conv1:c,expansion_conv:l}}function a(s){var u=o(s+"/separable_conv0"),c=o(s+"/separable_conv1"),l=o(s+"/separable_conv2");return{separable_conv0:u,separable_conv1:c,separable_conv2:l}}return{extractConvParams:n,extractSeparableConvParams:o,extractReductionBlockParams:i,extractMainBlockParams:a}}function Fy(r,t){var e=[],n=Ny(r,e),o=n.extractConvParams,i=n.extractSeparableConvParams,a=n.extractReductionBlockParams,s=n.extractMainBlockParams,u=o("entry_flow/conv_in"),c=a("entry_flow/reduction_block_0"),l=a("entry_flow/reduction_block_1"),h={conv_in:u,reduction_block_0:c,reduction_block_1:l},f={};Cr(t,0,1).forEach(function(v){f["main_block_"+v]=s("middle_flow/main_block_"+v)});var p=a("exit_flow/reduction_block"),d=i("exit_flow/separable_conv"),m={reduction_block:p,separable_conv:d};return an(r,e),{params:{entry_flow:h,middle_flow:f,exit_flow:m},paramMappings:e}}function Al(r,t,e){return ue(wt(r,t.filters,e,"same"),t.bias)}function Ii(r,t,e){e===void 0&&(e=!0);var n=e?Ie(r):r;return n=dt(n,t.separable_conv0,[1,1]),n=dt(Ie(n),t.separable_conv1,[1,1]),n=Ve(n,[3,3],[2,2],"same"),n=ue(n,Al(r,t.expansion_conv,[2,2])),n}function Py(r,t){var e=dt(Ie(r),t.separable_conv0,[1,1]);return e=dt(Ie(e),t.separable_conv1,[1,1]),e=dt(Ie(e),t.separable_conv2,[1,1]),e=ue(e,r),e}var Oy=function(r){re(t,r);function t(e){var n=r.call(this,"TinyXception")||this;return n._numMainBlocks=e,n}return t.prototype.forwardInput=function(e){var n=this,o=this.params;if(!o)throw new Error("TinyXception - load model before inference");return K(function(){var i=e.toBatchTensor(112,!0),a=[122.782,117.001,104.298],s=Mr(i,a).div(q(256)),u=Ie(Al(s,o.entry_flow.conv_in,[2,2]));return u=Ii(u,o.entry_flow.reduction_block_0,!1),u=Ii(u,o.entry_flow.reduction_block_1),Cr(n._numMainBlocks,0,1).forEach(function(c){u=Py(u,o.middle_flow["main_block_"+c])}),u=Ii(u,o.exit_flow.reduction_block),u=Ie(dt(u,o.exit_flow.separable_conv,[1,1])),u})},t.prototype.forward=function(e){return Q(this,void 0,void 0,function(){var n;return Z(this,function(o){switch(o.label){case 0:return n=this.forwardInput,[4,Ge(e)];case 1:return[2,n.apply(this,[o.sent()])]}})})},t.prototype.getDefaultModelName=function(){return"tiny_xception_model"},t.prototype.extractParamsFromWeigthMap=function(e){return Fy(e,this._numMainBlocks)},t.prototype.extractParams=function(e){return Dy(e,this._numMainBlocks)},t}(on);function My(r){var t=[],e=sn(r),n=e.extractWeights,o=e.getRemainingWeights,i=Ka(n,t),a=i(512,1,"fc/age"),s=i(512,2,"fc/gender");if(o().length!==0)throw new Error("weights remaing after extract: "+o().length);return{paramMappings:t,params:{fc:{age:a,gender:s}}}}function By(r){var t=[],e=wn(r,t);function n(i){var a=e(i+"/weights",2),s=e(i+"/bias",1);return{weights:a,bias:s}}var o={fc:{age:n("fc/age"),gender:n("fc/gender")}};return an(r,t),{params:o,paramMappings:t}}var Ao;(function(r){r.FEMALE="female",r.MALE="male"})(Ao||(Ao={}));var Ly=function(r){re(t,r);function t(e){e===void 0&&(e=new Oy(2));var n=r.call(this,"AgeGenderNet")||this;return n._faceFeatureExtractor=e,n}return Object.defineProperty(t.prototype,"faceFeatureExtractor",{get:function(){return this._faceFeatureExtractor},enumerable:!0,configurable:!0}),t.prototype.runNet=function(e){var n=this,o=this.params;if(!o)throw new Error(this._name+" - load model before inference");return K(function(){var i=e instanceof So?n.faceFeatureExtractor.forwardInput(e):e,a=Pr(i,[7,7],[2,2],"valid").as2D(i.shape[0],-1),s=Mt(a,o.fc.age).as1D(),u=Mt(a,o.fc.gender);return{age:s,gender:u}})},t.prototype.forwardInput=function(e){var n=this;return K(function(){var o=n.runNet(e),i=o.age,a=o.gender;return{age:i,gender:nn(a)}})},t.prototype.forward=function(e){return Q(this,void 0,void 0,function(){var n;return Z(this,function(o){switch(o.label){case 0:return n=this.forwardInput,[4,Ge(e)];case 1:return[2,n.apply(this,[o.sent()])]}})})},t.prototype.predictAgeAndGender=function(e){return Q(this,void 0,void 0,function(){var n,o,i,a,s,u,c=this;return Z(this,function(l){switch(l.label){case 0:return[4,Ge(e)];case 1:return n=l.sent(),[4,this.forwardInput(n)];case 2:return o=l.sent(),i=Be(o.age),a=Be(o.gender),s=i.map(function(h,f){return{ageTensor:h,genderTensor:a[f]}}),[4,Promise.all(s.map(function(h){var f=h.ageTensor,p=h.genderTensor;return Q(c,void 0,void 0,function(){var d,m,v,g,x;return Z(this,function(b){switch(b.label){case 0:return[4,f.data()];case 1:return d=b.sent()[0],[4,p.data()];case 2:return m=b.sent()[0],v=m>.5,g=v?Ao.MALE:Ao.FEMALE,x=v?m:1-m,f.dispose(),p.dispose(),[2,{age:d,gender:g,genderProbability:x}]}})})}))];case 3:return u=l.sent(),o.age.dispose(),o.gender.dispose(),[2,n.isBatchInput?u:u[0]]}})})},t.prototype.getDefaultModelName=function(){return"age_gender_model"},t.prototype.dispose=function(e){e===void 0&&(e=!0),this.faceFeatureExtractor.dispose(e),r.prototype.dispose.call(this,e)},t.prototype.loadClassifierParams=function(e){var n=this.extractClassifierParams(e),o=n.params,i=n.paramMappings;this._params=o,this._paramMappings=i},t.prototype.extractClassifierParams=function(e){return My(e)},t.prototype.extractParamsFromWeigthMap=function(e){var n=Rl(e),o=n.featureExtractorMap,i=n.classifierMap;return this.faceFeatureExtractor.loadFromWeightMap(o),By(i)},t.prototype.extractParams=function(e){var n=1539,o=e.slice(0,e.length-n),i=e.slice(e.length-n);return this.faceFeatureExtractor.extractWeights(o),this.extractClassifierParams(i)},t}(on),Tl=function(r){re(t,r);function t(){return r!==null&&r.apply(this,arguments)||this}return t.prototype.postProcess=function(e,n,o){var i=o.map(function(s){var u=s.width,c=s.height,l=n/Math.max(c,u);return{width:u*l,height:c*l}}),a=i.length;return K(function(){var s=function(f,p){return vt([Wt([68],f),Wt([68],p)],1).as2D(1,136).as1D()},u=function(f,p){var d=i[f],m=d.width,v=d.height;return p(m,v)?Math.abs(m-v)/2:0},c=function(f){return u(f,function(p,d){return p<d})},l=function(f){return u(f,function(p,d){return d<p})},h=e.mul(Wt([a,136],n)).sub(vt(Array.from(Array(a),function(f,p){return s(c(p),l(p))}))).div(vt(Array.from(Array(a),function(f,p){return s(i[p].width,i[p].height)})));return h})},t.prototype.forwardInput=function(e){var n=this;return K(function(){var o=n.runNet(e);return n.postProcess(o,e.inputSize,e.inputDimensions.map(function(i){var a=i[0],s=i[1];return{height:a,width:s}}))})},t.prototype.forward=function(e){return Q(this,void 0,void 0,function(){var n;return Z(this,function(o){switch(o.label){case 0:return n=this.forwardInput,[4,Ge(e)];case 1:return[2,n.apply(this,[o.sent()])]}})})},t.prototype.detectLandmarks=function(e){return Q(this,void 0,void 0,function(){var n,o,i,a=this;return Z(this,function(s){switch(s.label){case 0:return[4,Ge(e)];case 1:return n=s.sent(),o=K(function(){return Be(a.forwardInput(n))}),[4,Promise.all(o.map(function(u,c){return Q(a,void 0,void 0,function(){var l,h,f,p,d;return Z(this,function(m){switch(m.label){case 0:return f=(h=Array).from,[4,u.data()];case 1:return l=f.apply(h,[m.sent()]),p=l.filter(function(v,g){return pu(g)}),d=l.filter(function(v,g){return!pu(g)}),[2,new ly(Array(68).fill(0).map(function(v,g){return new ge(p[g],d[g])}),{height:n.getInputHeight(c),width:n.getInputWidth(c)})]}})})}))];case 2:return i=s.sent(),o.forEach(function(u){return u.dispose()}),[2,n.isBatchInput?i:i[0]]}})})},t.prototype.getClassifierChannelsOut=function(){return 136},t}(kl),Dl=function(r){re(t,r);function t(e){return e===void 0&&(e=new El),r.call(this,"FaceLandmark68Net",e)||this}return t.prototype.getDefaultModelName=function(){return"face_landmark_68_model"},t.prototype.getClassifierChannelsIn=function(){return 256},t}(Tl);function Wy(r){var t=[],e=Cl(r,t).extractDenseBlock3Params,n={dense0:e("dense0",!0),dense1:e("dense1"),dense2:e("dense2")};return an(r,t),{params:n,paramMappings:t}}function Uy(r){var t=[],e=sn(r),n=e.extractWeights,o=e.getRemainingWeights,i=wl(n,t).extractDenseBlock3Params,a=i(3,32,"dense0",!0),s=i(32,64,"dense1"),u=i(64,128,"dense2");if(o().length!==0)throw new Error("weights remaing after extract: "+o().length);return{paramMappings:t,params:{dense0:a,dense1:s,dense2:u}}}var Vy=function(r){re(t,r);function t(){return r.call(this,"TinyFaceFeatureExtractor")||this}return t.prototype.forwardInput=function(e){var n=this.params;if(!n)throw new Error("TinyFaceFeatureExtractor - load model before inference");return K(function(){var o=e.toBatchTensor(112,!0),i=[122.782,117.001,104.298],a=Mr(o,i).div(q(255)),s=ki(a,n.dense0,!0);return s=ki(s,n.dense1),s=ki(s,n.dense2),s=Pr(s,[14,14],[2,2],"valid"),s})},t.prototype.forward=function(e){return Q(this,void 0,void 0,function(){var n;return Z(this,function(o){switch(o.label){case 0:return n=this.forwardInput,[4,Ge(e)];case 1:return[2,n.apply(this,[o.sent()])]}})})},t.prototype.getDefaultModelName=function(){return"face_feature_extractor_tiny_model"},t.prototype.extractParamsFromWeigthMap=function(e){return Wy(e)},t.prototype.extractParams=function(e){return Uy(e)},t}(on),zy=function(r){re(t,r);function t(e){return e===void 0&&(e=new Vy),r.call(this,"FaceLandmark68TinyNet",e)||this}return t.prototype.getDefaultModelName=function(){return"face_landmark_68_tiny_model"},t.prototype.getClassifierChannelsIn=function(){return 128},t}(Tl);(function(r){re(t,r);function t(){return r!==null&&r.apply(this,arguments)||this}return t})(Dl);function Gy(r,t){return ue(Ze(r,t.weights),t.biases)}function Ja(r,t,e,n,o){o===void 0&&(o="same");var i=t.conv,a=i.filters,s=i.bias,u=wt(r,a,e,o);return u=ue(u,s),u=Gy(u,t.scale),n?Ie(u):u}function Hy(r,t){return Ja(r,t,[1,1],!0)}function Nl(r,t){return Ja(r,t,[1,1],!1)}function Fl(r,t){return Ja(r,t,[2,2],!0,"valid")}function qy(r,t){function e(s,u,c){var l=r(s),h=l.length/(u*c*c);if(ty(h))throw new Error("depth has to be an integer: "+h+", weights.length: "+l.length+", numFilters: "+u+", filterSize: "+c);return K(function(){return yn(nt(l,[u,h,c,c]),[2,3,1,0])})}function n(s,u,c,l){var h=e(s,u,c),f=Fe(r(u));return t.push({paramPath:l+"/filters"},{paramPath:l+"/bias"}),{filters:h,bias:f}}function o(s,u){var c=Fe(r(s)),l=Fe(r(s));return t.push({paramPath:u+"/weights"},{paramPath:u+"/biases"}),{weights:c,biases:l}}function i(s,u,c,l){var h=n(s,u,c,l+"/conv"),f=o(u,l+"/scale");return{conv:h,scale:f}}function a(s,u,c,l,h){h===void 0&&(h=!1);var f=i((h?.5:1)*s,u,c,l+"/conv1"),p=i(s,u,c,l+"/conv2");return{conv1:f,conv2:p}}return{extractConvLayerParams:i,extractResidualLayerParams:a}}function jy(r){var t=sn(r),e=t.extractWeights,n=t.getRemainingWeights,o=[],i=qy(e,o),a=i.extractConvLayerParams,s=i.extractResidualLayerParams,u=a(4704,32,7,"conv32_down"),c=s(9216,32,3,"conv32_1"),l=s(9216,32,3,"conv32_2"),h=s(9216,32,3,"conv32_3"),f=s(36864,64,3,"conv64_down",!0),p=s(36864,64,3,"conv64_1"),d=s(36864,64,3,"conv64_2"),m=s(36864,64,3,"conv64_3"),v=s(147456,128,3,"conv128_down",!0),g=s(147456,128,3,"conv128_1"),x=s(147456,128,3,"conv128_2"),b=s(589824,256,3,"conv256_down",!0),y=s(589824,256,3,"conv256_1"),w=s(589824,256,3,"conv256_2"),_=s(589824,256,3,"conv256_down_out"),S=K(function(){return yn(dn(e(256*128),[128,256]),[1,0])});if(o.push({paramPath:"fc"}),n().length!==0)throw new Error("weights remaing after extract: "+n().length);var I={conv32_down:u,conv32_1:c,conv32_2:l,conv32_3:h,conv64_down:f,conv64_1:p,conv64_2:d,conv64_3:m,conv128_down:v,conv128_1:g,conv128_2:x,conv256_down:b,conv256_1:y,conv256_2:w,conv256_down_out:_,fc:S};return{params:I,paramMappings:o}}function Ky(r,t){var e=wn(r,t);function n(a){var s=e(a+"/scale/weights",1),u=e(a+"/scale/biases",1);return{weights:s,biases:u}}function o(a){var s=e(a+"/conv/filters",4),u=e(a+"/conv/bias",1),c=n(a);return{conv:{filters:s,bias:u},scale:c}}function i(a){return{conv1:o(a+"/conv1"),conv2:o(a+"/conv2")}}return{extractConvLayerParams:o,extractResidualLayerParams:i}}function Xy(r){var t=[],e=Ky(r,t),n=e.extractConvLayerParams,o=e.extractResidualLayerParams,i=n("conv32_down"),a=o("conv32_1"),s=o("conv32_2"),u=o("conv32_3"),c=o("conv64_down"),l=o("conv64_1"),h=o("conv64_2"),f=o("conv64_3"),p=o("conv128_down"),d=o("conv128_1"),m=o("conv128_2"),v=o("conv256_down"),g=o("conv256_1"),x=o("conv256_2"),b=o("conv256_down_out"),y=r.fc;if(t.push({originalPath:"fc",paramPath:"fc"}),!ey(y))throw new Error("expected weightMap[fc] to be a Tensor2D, instead have "+y);var w={conv32_down:i,conv32_1:a,conv32_2:s,conv32_3:u,conv64_down:c,conv64_1:l,conv64_2:h,conv64_3:f,conv128_down:p,conv128_1:d,conv128_2:m,conv256_down:v,conv256_1:g,conv256_2:x,conv256_down_out:b,fc:y};return an(r,t),{params:w,paramMappings:t}}function Dt(r,t){var e=Hy(r,t.conv1);return e=Nl(e,t.conv2),e=ue(e,r),e=Ie(e),e}function $r(r,t){var e=Fl(r,t.conv1);e=Nl(e,t.conv2);var n=Pr(r,2,2,"valid"),o=Ce(n.shape),i=n.shape[3]!==e.shape[3],a=n.shape[1]!==e.shape[1]||n.shape[2]!==e.shape[2];if(a){var s=gr(e.shape);s[1]=1;var u=Ce(s);e=Me([e,u],1);var c=gr(e.shape);c[2]=1;var l=Ce(c);e=Me([e,l],2)}return n=i?Me([n,o],3):n,e=ue(n,e),e=Ie(e),e}var $y=function(r){re(t,r);function t(){return r.call(this,"FaceRecognitionNet")||this}return t.prototype.forwardInput=function(e){var n=this.params;if(!n)throw new Error("FaceRecognitionNet - load model before inference");return K(function(){var o=e.toBatchTensor(150,!0).toFloat(),i=[122.782,117.001,104.298],a=Mr(o,i).div(q(256)),s=Fl(a,n.conv32_down);s=Ve(s,3,2,"valid"),s=Dt(s,n.conv32_1),s=Dt(s,n.conv32_2),s=Dt(s,n.conv32_3),s=$r(s,n.conv64_down),s=Dt(s,n.conv64_1),s=Dt(s,n.conv64_2),s=Dt(s,n.conv64_3),s=$r(s,n.conv128_down),s=Dt(s,n.conv128_1),s=Dt(s,n.conv128_2),s=$r(s,n.conv256_down),s=Dt(s,n.conv256_1),s=Dt(s,n.conv256_2),s=$r(s,n.conv256_down_out);var u=s.mean([1,2]),c=Bo(u,n.fc);return c})},t.prototype.forward=function(e){return Q(this,void 0,void 0,function(){var n;return Z(this,function(o){switch(o.label){case 0:return n=this.forwardInput,[4,Ge(e)];case 1:return[2,n.apply(this,[o.sent()])]}})})},t.prototype.computeFaceDescriptor=function(e){return Q(this,void 0,void 0,function(){var n,o,i,a=this;return Z(this,function(s){switch(s.label){case 0:return[4,Ge(e)];case 1:return n=s.sent(),o=K(function(){return Be(a.forwardInput(n))}),[4,Promise.all(o.map(function(u){return u.data()}))];case 2:return i=s.sent(),o.forEach(function(u){return u.dispose()}),[2,n.isBatchInput?i:i[0]]}})})},t.prototype.getDefaultModelName=function(){return"face_recognition_model"},t.prototype.extractParamsFromWeigthMap=function(e){return Xy(e)},t.prototype.extractParams=function(e){return jy(e)},t}(on);function Pl(r,t){var e={descriptor:t};return Object.assign({},r,e)}function Ol(r,t){var e={age:t};return Object.assign({},r,e)}function Ml(r,t,e){var n={gender:t,genderProbability:e};return Object.assign({},r,n)}var Bl=function(){function r(t){var e=t===void 0?{}:t,n=e.minFaceSize,o=e.scaleFactor,i=e.maxNumScales,a=e.scoreThresholds,s=e.scaleSteps;if(this._name="MtcnnOptions",this._minFaceSize=n||20,this._scaleFactor=o||.709,this._maxNumScales=i||10,this._scoreThresholds=a||[.6,.7,.7],this._scaleSteps=s,typeof this._minFaceSize!="number"||this._minFaceSize<0)throw new Error(this._name+" - expected minFaceSize to be a number > 0");if(typeof this._scaleFactor!="number"||this._scaleFactor<=0||this._scaleFactor>=1)throw new Error(this._name+" - expected scaleFactor to be a number between 0 and 1");if(typeof this._maxNumScales!="number"||this._maxNumScales<0)throw new Error(this._name+" - expected maxNumScales to be a number > 0");if(!Array.isArray(this._scoreThresholds)||this._scoreThresholds.length!==3||this._scoreThresholds.some(function(u){return typeof u!="number"}))throw new Error(this._name+" - expected scoreThresholds to be an array of numbers of length 3");if(this._scaleSteps&&(!Array.isArray(this._scaleSteps)||this._scaleSteps.some(function(u){return typeof u!="number"})))throw new Error(this._name+" - expected scaleSteps to be an array of numbers")}return Object.defineProperty(r.prototype,"minFaceSize",{get:function(){return this._minFaceSize},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"scaleFactor",{get:function(){return this._scaleFactor},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"maxNumScales",{get:function(){return this._maxNumScales},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"scoreThresholds",{get:function(){return this._scoreThresholds},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"scaleSteps",{get:function(){return this._scaleSteps},enumerable:!0,configurable:!0}),r}();function Yy(r,t){function e(u,c){var l=nt(r(9*u),[3,3,u,1]),h=Fe(r(u)),f=Fe(r(u)),p=Fe(r(u)),d=Fe(r(u));return t.push({paramPath:c+"/filters"},{paramPath:c+"/batch_norm_scale"},{paramPath:c+"/batch_norm_offset"},{paramPath:c+"/batch_norm_mean"},{paramPath:c+"/batch_norm_variance"}),{filters:l,batch_norm_scale:h,batch_norm_offset:f,batch_norm_mean:p,batch_norm_variance:d}}function n(u,c,l,h,f){var p=nt(r(u*c*l*l),[l,l,u,c]),d=Fe(r(c));return t.push({paramPath:h+"/filters"},{paramPath:h+"/"+(f?"batch_norm_offset":"bias")}),{filters:p,bias:d}}function o(u,c,l,h){var f=n(u,c,l,h,!0),p=f.filters,d=f.bias;return{filters:p,batch_norm_offset:d}}function i(u,c,l){var h=e(u,l+"/depthwise_conv"),f=o(u,c,1,l+"/pointwise_conv");return{depthwise_conv:h,pointwise_conv:f}}function a(){var u=o(3,32,3,"mobilenetv1/conv_0"),c=i(32,64,"mobilenetv1/conv_1"),l=i(64,128,"mobilenetv1/conv_2"),h=i(128,128,"mobilenetv1/conv_3"),f=i(128,256,"mobilenetv1/conv_4"),p=i(256,256,"mobilenetv1/conv_5"),d=i(256,512,"mobilenetv1/conv_6"),m=i(512,512,"mobilenetv1/conv_7"),v=i(512,512,"mobilenetv1/conv_8"),g=i(512,512,"mobilenetv1/conv_9"),x=i(512,512,"mobilenetv1/conv_10"),b=i(512,512,"mobilenetv1/conv_11"),y=i(512,1024,"mobilenetv1/conv_12"),w=i(1024,1024,"mobilenetv1/conv_13");return{conv_0:u,conv_1:c,conv_2:l,conv_3:h,conv_4:f,conv_5:p,conv_6:d,conv_7:m,conv_8:v,conv_9:g,conv_10:x,conv_11:b,conv_12:y,conv_13:w}}function s(){var u=o(1024,256,1,"prediction_layer/conv_0"),c=o(256,512,3,"prediction_layer/conv_1"),l=o(512,128,1,"prediction_layer/conv_2"),h=o(128,256,3,"prediction_layer/conv_3"),f=o(256,128,1,"prediction_layer/conv_4"),p=o(128,256,3,"prediction_layer/conv_5"),d=o(256,64,1,"prediction_layer/conv_6"),m=o(64,128,3,"prediction_layer/conv_7"),v=n(512,12,1,"prediction_layer/box_predictor_0/box_encoding_predictor"),g=n(512,9,1,"prediction_layer/box_predictor_0/class_predictor"),x=n(1024,24,1,"prediction_layer/box_predictor_1/box_encoding_predictor"),b=n(1024,18,1,"prediction_layer/box_predictor_1/class_predictor"),y=n(512,24,1,"prediction_layer/box_predictor_2/box_encoding_predictor"),w=n(512,18,1,"prediction_layer/box_predictor_2/class_predictor"),_=n(256,24,1,"prediction_layer/box_predictor_3/box_encoding_predictor"),S=n(256,18,1,"prediction_layer/box_predictor_3/class_predictor"),I=n(256,24,1,"prediction_layer/box_predictor_4/box_encoding_predictor"),E=n(256,18,1,"prediction_layer/box_predictor_4/class_predictor"),R=n(128,24,1,"prediction_layer/box_predictor_5/box_encoding_predictor"),D=n(128,18,1,"prediction_layer/box_predictor_5/class_predictor"),A={box_encoding_predictor:v,class_predictor:g},M={box_encoding_predictor:x,class_predictor:b},O={box_encoding_predictor:y,class_predictor:w},B={box_encoding_predictor:_,class_predictor:S},V={box_encoding_predictor:I,class_predictor:E},U={box_encoding_predictor:R,class_predictor:D};return{conv_0:u,conv_1:c,conv_2:l,conv_3:h,conv_4:f,conv_5:p,conv_6:d,conv_7:m,box_predictor_0:A,box_predictor_1:M,box_predictor_2:O,box_predictor_3:B,box_predictor_4:V,box_predictor_5:U}}return{extractMobilenetV1Params:a,extractPredictionLayerParams:s}}function Jy(r){var t=[],e=sn(r),n=e.extractWeights,o=e.getRemainingWeights,i=Yy(n,t),a=i.extractMobilenetV1Params,s=i.extractPredictionLayerParams,u=a(),c=s(),l=ha(n(5118*4),[1,5118,4]),h={extra_dim:l};if(t.push({paramPath:"output_layer/extra_dim"}),o().length!==0)throw new Error("weights remaing after extract: "+o().length);return{params:{mobilenetv1:u,prediction_layer:c,output_layer:h},paramMappings:t}}function Qy(r,t){var e=wn(r,t);function n(c,l,h){var f=e(c+"/Conv2d_"+l+"_pointwise/weights",4,h+"/filters"),p=e(c+"/Conv2d_"+l+"_pointwise/convolution_bn_offset",1,h+"/batch_norm_offset");return{filters:f,batch_norm_offset:p}}function o(c){var l="mobilenetv1/conv_"+c,h="MobilenetV1/Conv2d_"+c+"_depthwise",f=l+"/depthwise_conv",p=l+"/pointwise_conv",d=e(h+"/depthwise_weights",4,f+"/filters"),m=e(h+"/BatchNorm/gamma",1,f+"/batch_norm_scale"),v=e(h+"/BatchNorm/beta",1,f+"/batch_norm_offset"),g=e(h+"/BatchNorm/moving_mean",1,f+"/batch_norm_mean"),x=e(h+"/BatchNorm/moving_variance",1,f+"/batch_norm_variance");return{depthwise_conv:{filters:d,batch_norm_scale:m,batch_norm_offset:v,batch_norm_mean:g,batch_norm_variance:x},pointwise_conv:n("MobilenetV1",c,p)}}function i(){return{conv_0:n("MobilenetV1",0,"mobilenetv1/conv_0"),conv_1:o(1),conv_2:o(2),conv_3:o(3),conv_4:o(4),conv_5:o(5),conv_6:o(6),conv_7:o(7),conv_8:o(8),conv_9:o(9),conv_10:o(10),conv_11:o(11),conv_12:o(12),conv_13:o(13)}}function a(c,l){var h=e(c+"/weights",4,l+"/filters"),f=e(c+"/biases",1,l+"/bias");return{filters:h,bias:f}}function s(c){var l=a("Prediction/BoxPredictor_"+c+"/BoxEncodingPredictor","prediction_layer/box_predictor_"+c+"/box_encoding_predictor"),h=a("Prediction/BoxPredictor_"+c+"/ClassPredictor","prediction_layer/box_predictor_"+c+"/class_predictor");return{box_encoding_predictor:l,class_predictor:h}}function u(){return{conv_0:n("Prediction",0,"prediction_layer/conv_0"),conv_1:n("Prediction",1,"prediction_layer/conv_1"),conv_2:n("Prediction",2,"prediction_layer/conv_2"),conv_3:n("Prediction",3,"prediction_layer/conv_3"),conv_4:n("Prediction",4,"prediction_layer/conv_4"),conv_5:n("Prediction",5,"prediction_layer/conv_5"),conv_6:n("Prediction",6,"prediction_layer/conv_6"),conv_7:n("Prediction",7,"prediction_layer/conv_7"),box_predictor_0:s(0),box_predictor_1:s(1),box_predictor_2:s(2),box_predictor_3:s(3),box_predictor_4:s(4),box_predictor_5:s(5)}}return{extractMobilenetV1Params:i,extractPredictionLayerParams:u}}function Zy(r){var t=[],e=Qy(r,t),n=e.extractMobilenetV1Params,o=e.extractPredictionLayerParams,i=r["Output/extra_dim"];if(t.push({originalPath:"Output/extra_dim",paramPath:"output_layer/extra_dim"}),!Vo(i))throw new Error("expected weightMap['Output/extra_dim'] to be a Tensor3D, instead have "+i);var a={mobilenetv1:n(),prediction_layer:o(),output_layer:{extra_dim:i}};return an(r,t),{params:a,paramMappings:t}}function Nt(r,t,e){return K(function(){var n=wt(r,t.filters,e,"same");return n=ue(n,t.batch_norm_offset),_a(n,0,6)})}var e0=.0010000000474974513;function t0(r,t,e){return K(function(){var n=Mo(r,t.filters,e,"same");return n=Tc(n,t.batch_norm_mean,t.batch_norm_variance,t.batch_norm_offset,t.batch_norm_scale,e0),_a(n,0,6)})}function n0(r){return[2,4,6,12].some(function(t){return t===r})?[2,2]:[1,1]}function r0(r,t){return K(function(){var e=null,n=Nt(r,t.conv_0,[2,2]),o=[t.conv_1,t.conv_2,t.conv_3,t.conv_4,t.conv_5,t.conv_6,t.conv_7,t.conv_8,t.conv_9,t.conv_10,t.conv_11,t.conv_12,t.conv_13];if(o.forEach(function(i,a){var s=a+1,u=n0(s);n=t0(n,i.depthwise_conv,u),n=Nt(n,i.pointwise_conv,[1,1]),s===11&&(e=n)}),e===null)throw new Error("mobileNetV1 - output of conv layer 11 is null");return{out:n,conv11:e}})}function o0(r,t,e,n,o){var i=r.shape[0],a=Math.min(e,i),s=t.map(function(l,h){return{score:l,boxIndex:h}}).filter(function(l){return l.score>o}).sort(function(l,h){return h.score-l.score}),u=function(l){return l<=n?1:0},c=[];return s.forEach(function(l){if(!(c.length>=a)){for(var h=l.score,f=c.length-1;f>=0;--f){var p=i0(r,l.boxIndex,c[f]);if(p!==0&&(l.score*=u(p),l.score<=o))break}h===l.score&&c.push(l.boxIndex)}}),c}function i0(r,t,e){var n=r.arraySync(),o=Math.min(n[t][0],n[t][2]),i=Math.min(n[t][1],n[t][3]),a=Math.max(n[t][0],n[t][2]),s=Math.max(n[t][1],n[t][3]),u=Math.min(n[e][0],n[e][2]),c=Math.min(n[e][1],n[e][3]),l=Math.max(n[e][0],n[e][2]),h=Math.max(n[e][1],n[e][3]),f=(a-o)*(s-i),p=(l-u)*(h-c);if(f<=0||p<=0)return 0;var d=Math.max(o,u),m=Math.max(i,c),v=Math.min(a,l),g=Math.min(s,h),x=Math.max(v-d,0)*Math.max(g-m,0);return x/(f+p-x)}function a0(r){var t=Be(yn(r,[1,0])),e=[We(t[2],t[0]),We(t[3],t[1])],n=[ue(t[0],Ct(e[0],q(2))),ue(t[1],Ct(e[1],q(2)))];return{sizes:e,centers:n}}function s0(r,t){var e=a0(r),n=e.sizes,o=e.centers,i=Be(yn(t,[1,0])),a=Ct(Ze(Ki(Ct(i[2],q(5))),n[0]),q(2)),s=ue(Ze(Ct(i[0],q(10)),n[0]),o[0]),u=Ct(Ze(Ki(Ct(i[3],q(5))),n[1]),q(2)),c=ue(Ze(Ct(i[1],q(10)),n[1]),o[1]);return yn(vt([We(s,a),We(c,u),ue(s,a),ue(c,u)]),[1,0])}function u0(r,t,e){return K(function(){var n=r.shape[0],o=s0(Et(Yn(e.extra_dim,[n,1,1]),[-1,4]),Et(r,[-1,4]));o=Et(o,[n,o.shape[0]/n,4]);var i=kc(Vt(t,[0,0,1],[-1,-1,-1])),a=Vt(i,[0,0,0],[-1,-1,1]);a=Et(a,[n,a.shape[1]]);var s=Be(o),u=Be(a);return{boxes:s,scores:u}})}function Gn(r,t){return K(function(){var e=r.shape[0],n=Et(Rt(r,t.box_encoding_predictor),[e,-1,1,4]),o=Et(Rt(r,t.class_predictor),[e,-1,3]);return{boxPredictionEncoding:n,classPrediction:o}})}function c0(r,t,e){return K(function(){var n=Nt(r,e.conv_0,[1,1]),o=Nt(n,e.conv_1,[2,2]),i=Nt(o,e.conv_2,[1,1]),a=Nt(i,e.conv_3,[2,2]),s=Nt(a,e.conv_4,[1,1]),u=Nt(s,e.conv_5,[2,2]),c=Nt(u,e.conv_6,[1,1]),l=Nt(c,e.conv_7,[2,2]),h=Gn(t,e.box_predictor_0),f=Gn(r,e.box_predictor_1),p=Gn(o,e.box_predictor_2),d=Gn(a,e.box_predictor_3),m=Gn(u,e.box_predictor_4),v=Gn(l,e.box_predictor_5),g=Me([h.boxPredictionEncoding,f.boxPredictionEncoding,p.boxPredictionEncoding,d.boxPredictionEncoding,m.boxPredictionEncoding,v.boxPredictionEncoding],1),x=Me([h.classPrediction,f.classPrediction,p.classPrediction,d.classPrediction,m.classPrediction,v.classPrediction],1);return{boxPredictions:g,classPredictions:x}})}var jo=function(){function r(t){var e=t===void 0?{}:t,n=e.minConfidence,o=e.maxResults;if(this._name="SsdMobilenetv1Options",this._minConfidence=n||.5,this._maxResults=o||100,typeof this._minConfidence!="number"||this._minConfidence<=0||this._minConfidence>=1)throw new Error(this._name+" - expected minConfidence to be a number between 0 and 1");if(typeof this._maxResults!="number")throw new Error(this._name+" - expected maxResults to be a number")}return Object.defineProperty(r.prototype,"minConfidence",{get:function(){return this._minConfidence},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"maxResults",{get:function(){return this._maxResults},enumerable:!0,configurable:!0}),r}(),Ll=function(r){re(t,r);function t(){return r.call(this,"SsdMobilenetv1")||this}return t.prototype.forwardInput=function(e){var n=this.params;if(!n)throw new Error("SsdMobilenetv1 - load model before inference");return K(function(){var o=e.toBatchTensor(512,!1).toFloat(),i=We(Ze(o,q(.007843137718737125)),q(1)),a=r0(i,n.mobilenetv1),s=c0(a.out,a.conv11,n.prediction_layer),u=s.boxPredictions,c=s.classPredictions;return u0(u,c,n.output_layer)})},t.prototype.forward=function(e){return Q(this,void 0,void 0,function(){var n;return Z(this,function(o){switch(o.label){case 0:return n=this.forwardInput,[4,Ge(e)];case 1:return[2,n.apply(this,[o.sent()])]}})})},t.prototype.locateFaces=function(e,n){return n===void 0&&(n={}),Q(this,void 0,void 0,function(){var o,i,a,s,u,c,l,h,f,p,d,m,v,g,x,b,y,w,_,S,I;return Z(this,function(E){switch(E.label){case 0:return o=new jo(n),i=o.maxResults,a=o.minConfidence,[4,Ge(e)];case 1:for(s=E.sent(),u=this.forwardInput(s),c=u.boxes,l=u.scores,h=c[0],f=l[0],p=1;p<c.length;p++)c[p].dispose(),l[p].dispose();return v=(m=Array).from,[4,f.data()];case 2:return d=v.apply(m,[E.sent()]),g=.5,x=o0(h,d,i,g,a),b=s.getReshapedInputDimensions(0),y=s.inputSize,w=y/b.width,_=y/b.height,S=h.arraySync(),I=x.map(function(R){var D=[Math.max(0,S[R][0]),Math.min(1,S[R][2])].map(function(U){return U*_}),A=D[0],M=D[1],O=[Math.max(0,S[R][1]),Math.min(1,S[R][3])].map(function(U){return U*w}),B=O[0],V=O[1];return new mt(d[R],new Ua(B,A,V-B,M-A),{height:s.getInputHeight(0),width:s.getInputWidth(0)})}),h.dispose(),f.dispose(),[2,I]}})})},t.prototype.getDefaultModelName=function(){return"ssd_mobilenetv1_model"},t.prototype.extractParamsFromWeigthMap=function(e){return Zy(e)},t.prototype.extractParams=function(e){return Jy(e)},t}(on);(function(r){re(t,r);function t(){return r!==null&&r.apply(this,arguments)||this}return t})(Ll);var l0=.4,h0=[new ge(.738768,.874946),new ge(2.42204,2.65704),new ge(4.30971,7.04493),new ge(10.246,4.59428),new ge(12.6868,11.8741)],f0=[new ge(1.603231,2.094468),new ge(6.041143,7.080126),new ge(2.882459,3.518061),new ge(4.266906,5.178857),new ge(9.041765,10.66308)],p0=[117.001,114.697,97.404],d0="tiny_yolov2_model",v0="tiny_yolov2_separable_conv_model",Yr=function(r){return typeof r=="number"};function m0(r){if(!r)throw new Error("invalid config: "+r);if(typeof r.withSeparableConvs!="boolean")throw new Error("config.withSeparableConvs has to be a boolean, have: "+r.withSeparableConvs);if(!Yr(r.iouThreshold)||r.iouThreshold<0||r.iouThreshold>1)throw new Error("config.iouThreshold has to be a number between [0, 1], have: "+r.iouThreshold);if(!Array.isArray(r.classes)||!r.classes.length||!r.classes.every(function(t){return typeof t=="string"}))throw new Error("config.classes has to be an array class names: string[], have: "+JSON.stringify(r.classes));if(!Array.isArray(r.anchors)||!r.anchors.length||!r.anchors.map(function(t){return t||{}}).every(function(t){return Yr(t.x)&&Yr(t.y)}))throw new Error("config.anchors has to be an array of { x: number, y: number }, have: "+JSON.stringify(r.anchors));if(r.meanRgb&&(!Array.isArray(r.meanRgb)||r.meanRgb.length!==3||!r.meanRgb.every(Yr)))throw new Error("config.meanRgb has to be an array of shape [number, number, number], have: "+JSON.stringify(r.meanRgb))}function Qa(r){return K(function(){var t=Ze(r,q(.10000000149011612));return ue(Ie(We(r,t)),t)})}function cn(r,t){return K(function(){var e=Fn(r,[[0,0],[1,1],[1,1],[0,0]]);return e=wt(e,t.conv.filters,[1,1],"valid"),e=We(e,t.bn.sub),e=Ze(e,t.bn.truediv),e=ue(e,t.conv.bias),Qa(e)})}function ln(r,t){return K(function(){var e=Fn(r,[[0,0],[1,1],[1,1],[0,0]]);return e=ka(e,t.depthwise_filter,t.pointwise_filter,[1,1],"valid"),e=ue(e,t.bias),Qa(e)})}function g0(r,t){var e=Ho(r,t);function n(a,s){var u=Fe(r(a)),c=Fe(r(a));return t.push({paramPath:s+"/sub"},{paramPath:s+"/truediv"}),{sub:u,truediv:c}}function o(a,s,u){var c=e(a,s,3,u+"/conv"),l=n(s,u+"/bn");return{conv:c,bn:l}}var i=Xa(r,t);return{extractConvParams:e,extractConvWithBatchNormParams:o,extractSeparableConvParams:i}}function y0(r,t,e,n){var o=sn(r),i=o.extractWeights,a=o.getRemainingWeights,s=[],u=g0(i,s),c=u.extractConvParams,l=u.extractConvWithBatchNormParams,h=u.extractSeparableConvParams,f;if(t.withSeparableConvs){var p=n[0],d=n[1],m=n[2],v=n[3],g=n[4],x=n[5],b=n[6],y=n[7],w=n[8],_=t.isFirstLayerConv2d?c(p,d,3,"conv0"):h(p,d,"conv0"),S=h(d,m,"conv1"),I=h(m,v,"conv2"),E=h(v,g,"conv3"),R=h(g,x,"conv4"),D=h(x,b,"conv5"),A=y?h(b,y,"conv6"):void 0,M=w?h(y,w,"conv7"):void 0,O=c(w||y||b,5*e,1,"conv8");f={conv0:_,conv1:S,conv2:I,conv3:E,conv4:R,conv5:D,conv6:A,conv7:M,conv8:O}}else{var p=n[0],d=n[1],m=n[2],v=n[3],g=n[4],x=n[5],b=n[6],y=n[7],w=n[8],_=l(p,d,"conv0"),S=l(d,m,"conv1"),I=l(m,v,"conv2"),E=l(v,g,"conv3"),R=l(g,x,"conv4"),D=l(x,b,"conv5"),A=l(b,y,"conv6"),M=l(y,w,"conv7"),O=c(w,5*e,1,"conv8");f={conv0:_,conv1:S,conv2:I,conv3:E,conv4:R,conv5:D,conv6:A,conv7:M,conv8:O}}if(a().length!==0)throw new Error("weights remaing after extract: "+a().length);return{params:f,paramMappings:s}}function x0(r,t){var e=wn(r,t);function n(s){var u=e(s+"/sub",1),c=e(s+"/truediv",1);return{sub:u,truediv:c}}function o(s){var u=e(s+"/filters",4),c=e(s+"/bias",1);return{filters:u,bias:c}}function i(s){var u=o(s+"/conv"),c=n(s+"/bn");return{conv:u,bn:c}}var a=$a(e);return{extractConvParams:o,extractConvWithBatchNormParams:i,extractSeparableConvParams:a}}function b0(r,t){var e=[],n=x0(r,e),o=n.extractConvParams,i=n.extractConvWithBatchNormParams,a=n.extractSeparableConvParams,s;if(t.withSeparableConvs){var u=t.filterSizes&&t.filterSizes.length||9;s={conv0:t.isFirstLayerConv2d?o("conv0"):a("conv0"),conv1:a("conv1"),conv2:a("conv2"),conv3:a("conv3"),conv4:a("conv4"),conv5:a("conv5"),conv6:u>7?a("conv6"):void 0,conv7:u>8?a("conv7"):void 0,conv8:o("conv8")}}else s={conv0:i("conv0"),conv1:i("conv1"),conv2:i("conv2"),conv3:i("conv3"),conv4:i("conv4"),conv5:i("conv5"),conv6:i("conv6"),conv7:i("conv7"),conv8:o("conv8")};return an(r,e),{params:s,paramMappings:e}}var bu;(function(r){r[r.XS=224]="XS",r[r.SM=320]="SM",r[r.MD=416]="MD",r[r.LG=608]="LG"})(bu||(bu={}));var Za=function(){function r(t){var e=t===void 0?{}:t,n=e.inputSize,o=e.scoreThreshold;if(this._name="TinyYolov2Options",this._inputSize=n||416,this._scoreThreshold=o||.5,typeof this._inputSize!="number"||this._inputSize%32!==0)throw new Error(this._name+" - expected inputSize to be a number divisible by 32");if(typeof this._scoreThreshold!="number"||this._scoreThreshold<=0||this._scoreThreshold>=1)throw new Error(this._name+" - expected scoreThreshold to be a number between 0 and 1")}return Object.defineProperty(r.prototype,"inputSize",{get:function(){return this._inputSize},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"scoreThreshold",{get:function(){return this._scoreThreshold},enumerable:!0,configurable:!0}),r}(),Wl=function(r){re(t,r);function t(e){var n=r.call(this,"TinyYolov2")||this;return m0(e),n._config=e,n}return Object.defineProperty(t.prototype,"config",{get:function(){return this._config},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"withClassScores",{get:function(){return this.config.withClassScores||this.config.classes.length>1},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"boxEncodingSize",{get:function(){return 5+(this.withClassScores?this.config.classes.length:0)},enumerable:!0,configurable:!0}),t.prototype.runTinyYolov2=function(e,n){var o=cn(e,n.conv0);return o=Ve(o,[2,2],[2,2],"same"),o=cn(o,n.conv1),o=Ve(o,[2,2],[2,2],"same"),o=cn(o,n.conv2),o=Ve(o,[2,2],[2,2],"same"),o=cn(o,n.conv3),o=Ve(o,[2,2],[2,2],"same"),o=cn(o,n.conv4),o=Ve(o,[2,2],[2,2],"same"),o=cn(o,n.conv5),o=Ve(o,[2,2],[1,1],"same"),o=cn(o,n.conv6),o=cn(o,n.conv7),Rt(o,n.conv8,"valid",!1)},t.prototype.runMobilenet=function(e,n){var o=this.config.isFirstLayerConv2d?Qa(Rt(e,n.conv0,"valid",!1)):ln(e,n.conv0);return o=Ve(o,[2,2],[2,2],"same"),o=ln(o,n.conv1),o=Ve(o,[2,2],[2,2],"same"),o=ln(o,n.conv2),o=Ve(o,[2,2],[2,2],"same"),o=ln(o,n.conv3),o=Ve(o,[2,2],[2,2],"same"),o=ln(o,n.conv4),o=Ve(o,[2,2],[2,2],"same"),o=ln(o,n.conv5),o=Ve(o,[2,2],[1,1],"same"),o=n.conv6?ln(o,n.conv6):o,o=n.conv7?ln(o,n.conv7):o,Rt(o,n.conv8,"valid",!1)},t.prototype.forwardInput=function(e,n){var o=this,i=this.params;if(!i)throw new Error("TinyYolov2 - load model before inference");return K(function(){var a=e.toBatchTensor(n,!1).toFloat();return a=o.config.meanRgb?Mr(a,o.config.meanRgb):a,a=a.div(q(256)),o.config.withSeparableConvs?o.runMobilenet(a,i):o.runTinyYolov2(a,i)})},t.prototype.forward=function(e,n){return Q(this,void 0,void 0,function(){var o;return Z(this,function(i){switch(i.label){case 0:return o=this.forwardInput,[4,Ge(e)];case 1:return[4,o.apply(this,[i.sent(),n])];case 2:return[2,i.sent()]}})})},t.prototype.detect=function(e,n){return n===void 0&&(n={}),Q(this,void 0,void 0,function(){var o,i,a,s,u,c,l,h,f,p,d,m,v,g,x=this;return Z(this,function(b){switch(b.label){case 0:return o=new Za(n),i=o.inputSize,a=o.scoreThreshold,[4,Ge(e)];case 1:return s=b.sent(),[4,this.forwardInput(s,i)];case 2:return u=b.sent(),c=K(function(){return Be(u)[0].expandDims()}),l={width:s.getInputWidth(0),height:s.getInputHeight(0)},[4,this.extractBoxes(c,s.getReshapedInputDimensions(0),a)];case 3:return h=b.sent(),u.dispose(),c.dispose(),f=h.map(function(y){return y.box}),p=h.map(function(y){return y.score}),d=h.map(function(y){return y.classScore}),m=h.map(function(y){return x.config.classes[y.label]}),v=Er(f.map(function(y){return y.rescale(i)}),p,this.config.iouThreshold,!0),g=v.map(function(y){return new ll(p[y],d[y],m[y],f[y],l)}),[2,g]}})})},t.prototype.getDefaultModelName=function(){return""},t.prototype.extractParamsFromWeigthMap=function(e){return b0(e,this.config)},t.prototype.extractParams=function(e){var n=this.config.filterSizes||t.DEFAULT_FILTER_SIZES,o=n?n.length:void 0;if(o!==7&&o!==8&&o!==9)throw new Error("TinyYolov2 - expected 7 | 8 | 9 convolutional filters, but found "+o+" filterSizes in config");return y0(e,this.config,this.boxEncodingSize,n)},t.prototype.extractBoxes=function(e,n,o){return Q(this,void 0,void 0,function(){var i,a,s,u,c,l,h,f,p,d,m,v,g,x,b,y,w,_,S,I,E,R,D,A,M,O,B,V,U,W=this;return Z(this,function(G){switch(G.label){case 0:return i=n.width,a=n.height,s=Math.max(i,a),u=s/i,c=s/a,l=e.shape[1],h=this.config.anchors.length,f=K(function(){var H=e.reshape([l,l,h,W.boxEncodingSize]),j=H.slice([0,0,0,0],[l,l,h,4]),ee=H.slice([0,0,0,4],[l,l,h,1]),te=W.withClassScores?nn(H.slice([0,0,0,5],[l,l,h,W.config.classes.length]),3):q(0);return[j,ee,te]}),p=f[0],d=f[1],m=f[2],v=[],[4,d.array()];case 1:return g=G.sent(),[4,p.array()];case 2:x=G.sent(),b=0,G.label=3;case 3:if(!(b<l))return[3,12];y=0,G.label=4;case 4:if(!(y<l))return[3,11];w=0,G.label=5;case 5:return w<h?(_=Ri(g[b][y][w][0]),!o||_>o?(S=(y+Ri(x[b][y][w][0]))/l*u,I=(b+Ri(x[b][y][w][1]))/l*c,E=Math.exp(x[b][y][w][2])*this.config.anchors[w].x/l*u,R=Math.exp(x[b][y][w][3])*this.config.anchors[w].y/l*c,D=S-E/2,A=I-R/2,M={row:b,col:y,anchor:w},this.withClassScores?[4,this.extractPredictedClass(m,M)]:[3,7]):[3,9]):[3,10];case 6:return U=G.sent(),[3,8];case 7:U={classScore:1,label:0},G.label=8;case 8:O=U,B=O.classScore,V=O.label,v.push(Ye({box:new zo(D,A,D+E,A+R),score:_,classScore:_*B,label:V},M)),G.label=9;case 9:return w++,[3,5];case 10:return y++,[3,4];case 11:return b++,[3,3];case 12:return p.dispose(),d.dispose(),m.dispose(),[2,v]}})})},t.prototype.extractPredictedClass=function(e,n){return Q(this,void 0,void 0,function(){var o,i,a,s;return Z(this,function(u){switch(u.label){case 0:return o=n.row,i=n.col,a=n.anchor,[4,e.array()];case 1:return s=u.sent(),[2,Array(this.config.classes.length).fill(0).map(function(c,l){return s[o][i][a][l]}).map(function(c,l){return{classScore:c,label:l}}).reduce(function(c,l){return c.classScore>l.classScore?c:l})]}})})},t.DEFAULT_FILTER_SIZES=[3,16,32,64,128,256,512,1024,1024],t}(on),w0=function(r){re(t,r);function t(e){e===void 0&&(e=!0);var n=this,o=Object.assign({},{withSeparableConvs:e,iouThreshold:l0,classes:["face"]},e?{anchors:f0,meanRgb:p0}:{anchors:h0,withClassScores:!0});return n=r.call(this,o)||this,n}return Object.defineProperty(t.prototype,"withSeparableConvs",{get:function(){return this.config.withSeparableConvs},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"anchors",{get:function(){return this.config.anchors},enumerable:!0,configurable:!0}),t.prototype.locateFaces=function(e,n){return Q(this,void 0,void 0,function(){var o;return Z(this,function(i){switch(i.label){case 0:return[4,this.detect(e,n)];case 1:return o=i.sent(),[2,o.map(function(a){return new mt(a.score,a.relativeBox,{width:a.imageWidth,height:a.imageHeight})})]}})})},t.prototype.getDefaultModelName=function(){return this.withSeparableConvs?v0:d0},t.prototype.extractParamsFromWeigthMap=function(e){return r.prototype.extractParamsFromWeigthMap.call(this,e)},t}(Wl),es=function(r){re(t,r);function t(){var e=r!==null&&r.apply(this,arguments)||this;return e._name="TinyFaceDetectorOptions",e}return t}(Za),Br=function(){function r(){}return r.prototype.then=function(t){return Q(this,void 0,void 0,function(){var e;return Z(this,function(n){switch(n.label){case 0:return e=t,[4,this.run()];case 1:return[2,e.apply(void 0,[n.sent()])]}})})},r.prototype.run=function(){return Q(this,void 0,void 0,function(){return Z(this,function(t){throw new Error("ComposableTask - run is not implemented")})})},r}();function Ko(r,t,e,n,o){return o===void 0&&(o=function(i){var a=i.alignedRect;return a}),Q(this,void 0,void 0,function(){var i,a,s,u,c;return Z(this,function(l){switch(l.label){case 0:return i=r.map(function(h){return Sl(h)?o(h):h.detection}),s=n,s?[3,5]:t instanceof ke?[4,ja(t,i)]:[3,2];case 1:return u=l.sent(),[3,4];case 2:return[4,qa(t,i)];case 3:u=l.sent(),l.label=4;case 4:s=u,l.label=5;case 5:return a=s,[4,e(a)];case 6:return c=l.sent(),a.forEach(function(h){return h instanceof ke&&h.dispose()}),[2,c]}})})}function ts(r,t,e,n,o){return Q(this,void 0,void 0,function(){var i=this;return Z(this,function(a){return[2,Ko([r],t,function(s){return Q(i,void 0,void 0,function(){return Z(this,function(u){return[2,e(s[0])]})})},n,o)]})})}function _0(r){return K(function(){return vt(Be(r,3).reverse(),3)})}var Jr=2,To=12;function C0(r,t){var e=Ho(r,t),n=Ka(r,t);function o(c,l){var h=Fe(r(c));return t.push({paramPath:l}),h}function i(c,l,h){h===void 0&&(h=!1);var f=e(c[0],c[1],3,l+"/conv1"),p=o(c[1],l+"/prelu1_alpha"),d=e(c[1],c[2],3,l+"/conv2"),m=o(c[2],l+"/prelu2_alpha"),v=e(c[2],c[3],h?2:3,l+"/conv3"),g=o(c[3],l+"/prelu3_alpha");return{conv1:f,prelu1_alpha:p,conv2:d,prelu2_alpha:m,conv3:v,prelu3_alpha:g}}function a(){var c=i([3,10,16,32],"pnet"),l=e(32,2,1,"pnet/conv4_1"),h=e(32,4,1,"pnet/conv4_2");return Ye(Ye({},c),{conv4_1:l,conv4_2:h})}function s(){var c=i([3,28,48,64],"rnet",!0),l=n(576,128,"rnet/fc1"),h=o(128,"rnet/prelu4_alpha"),f=n(128,2,"rnet/fc2_1"),p=n(128,4,"rnet/fc2_2");return Ye(Ye({},c),{fc1:l,prelu4_alpha:h,fc2_1:f,fc2_2:p})}function u(){var c=i([3,32,64,64],"onet"),l=e(64,128,2,"onet/conv4"),h=o(128,"onet/prelu4_alpha"),f=n(1152,256,"onet/fc1"),p=o(256,"onet/prelu5_alpha"),d=n(256,2,"onet/fc2_1"),m=n(256,4,"onet/fc2_2"),v=n(256,10,"onet/fc2_3");return Ye(Ye({},c),{conv4:l,prelu4_alpha:h,fc1:f,prelu5_alpha:p,fc2_1:d,fc2_2:m,fc2_3:v})}return{extractPNetParams:a,extractRNetParams:s,extractONetParams:u}}function E0(r){var t=sn(r),e=t.extractWeights,n=t.getRemainingWeights,o=[],i=C0(e,o),a=i.extractPNetParams,s=i.extractRNetParams,u=i.extractONetParams,c=a(),l=s(),h=u();if(n().length!==0)throw new Error("weights remaing after extract: "+n().length);return{params:{pnet:c,rnet:l,onet:h},paramMappings:o}}function R0(r,t){var e=wn(r,t);function n(l){var h=e(l+"/weights",4,l+"/filters"),f=e(l+"/bias",1);return{filters:h,bias:f}}function o(l){var h=e(l+"/weights",2),f=e(l+"/bias",1);return{weights:h,bias:f}}function i(l){return e(l,1)}function a(l){var h=n(l+"/conv1"),f=i(l+"/prelu1_alpha"),p=n(l+"/conv2"),d=i(l+"/prelu2_alpha"),m=n(l+"/conv3"),v=i(l+"/prelu3_alpha");return{conv1:h,prelu1_alpha:f,conv2:p,prelu2_alpha:d,conv3:m,prelu3_alpha:v}}function s(){var l=a("pnet"),h=n("pnet/conv4_1"),f=n("pnet/conv4_2");return Ye(Ye({},l),{conv4_1:h,conv4_2:f})}function u(){var l=a("rnet"),h=o("rnet/fc1"),f=i("rnet/prelu4_alpha"),p=o("rnet/fc2_1"),d=o("rnet/fc2_2");return Ye(Ye({},l),{fc1:h,prelu4_alpha:f,fc2_1:p,fc2_2:d})}function c(){var l=a("onet"),h=n("onet/conv4"),f=i("onet/prelu4_alpha"),p=o("onet/fc1"),d=i("onet/prelu5_alpha"),m=o("onet/fc2_1"),v=o("onet/fc2_2"),g=o("onet/fc2_3");return Ye(Ye({},l),{conv4:h,prelu4_alpha:f,fc1:p,prelu5_alpha:d,fc2_1:m,fc2_2:v,fc2_3:g})}return{extractPNetParams:s,extractRNetParams:u,extractONetParams:c}}function k0(r){var t=[],e=R0(r,t),n=e.extractPNetParams,o=e.extractRNetParams,i=e.extractONetParams,a=n(),s=o(),u=i();return an(r,t),{params:{pnet:a,rnet:s,onet:u},paramMappings:t}}function ta(r,t){var e=t[0],n=t[1];return{height:Math.floor(e*r),width:Math.floor(n*r)}}function I0(r,t,e){for(var n=e[0],o=e[1],i=To/r,a=[],s=Math.min(n,o)*i,u=0;s>=12;)a.push(i*Math.pow(t,u)),s=s*t,u+=1;return a}var ns=function(r){re(t,r);function t(e,n,o,i){return r.call(this,{left:e,top:n,right:o,bottom:i},!0)||this}return t}(zt);function Ul(r){return K(function(){return Ze(We(r,q(127.5)),q(.0078125))})}function tr(r,t){return K(function(){return ue(Ie(r),Ze(t,Eo(Ie(Eo(r)))))})}function rs(r,t,e){return e===void 0&&(e=!1),K(function(){var n=Rt(r,t.conv1,"valid");return n=tr(n,t.prelu1_alpha),n=Ve(n,e?[2,2]:[3,3],[2,2],"same"),n=Rt(n,t.conv2,"valid"),n=tr(n,t.prelu2_alpha),n=e?n:Ve(n,[3,3],[2,2],"valid"),n=Rt(n,t.conv3,"valid"),n=tr(n,t.prelu3_alpha),n})}function S0(r,t){return K(function(){var e=rs(r,t,!0),n=Rt(e,t.conv4_1,"valid"),o=gt(Lo(n,3),3),i=nn(We(n,o),3),a=Rt(e,t.conv4_2,"valid");return{prob:i,regions:a}})}function A0(r,t){return K(function(){var e=ta(t,r.shape.slice(1)),n=e.height,o=e.width,i=Da.resizeBilinear(r,[n,o]),a=Ul(i);return yn(a,[0,2,1,3])})}function T0(r,t,e,n){for(var o=[],i=r.arraySync(),a=0;a<r.shape[0];a++)for(var s=0;s<r.shape[1];s++)i[a][s]>=n&&o.push(new ge(s,a));var u=o.map(function(c){var l=new zo(Math.round((c.y*Jr+1)/e),Math.round((c.x*Jr+1)/e),Math.round((c.y*Jr+To)/e),Math.round((c.x*Jr+To)/e)),h=i[c.y][c.x],f=t.arraySync(),p=new ns(f[c.y][c.x][0],f[c.y][c.x][1],f[c.y][c.x][2],f[c.y][c.x][3]);return{cell:l,score:h,region:p}});return u}function D0(r,t,e,n,o){o.stage1=[];var i=t.map(function(f){return K(function(){var p={scale:f},d=A0(r,f),m=Date.now(),v=S0(d,n),g=v.prob,x=v.regions;p.pnet=Date.now()-m;var b=Be(Be(g,3)[1])[0],y=Be(x)[0];return{scoresTensor:b,regionsTensor:y,scale:f,statsForScale:p}})}),a=i.map(function(f){var p=f.scoresTensor,d=f.regionsTensor,m=f.scale,v=f.statsForScale,g=T0(p,d,m,e);if(p.dispose(),d.dispose(),!g.length)return o.stage1.push(v),[];var x=Date.now(),b=Er(g.map(function(y){return y.cell}),g.map(function(y){return y.score}),.5);return v.nms=Date.now()-x,v.numBoxes=b.length,o.stage1.push(v),b.map(function(y){return g[y]})}),s=a.reduce(function(f,p){return f.concat(p)},[]),u=[],c=[];if(s.length>0){var l=Date.now(),h=Er(s.map(function(f){return f.cell}),s.map(function(f){return f.score}),.7);o.stage1_nms=Date.now()-l,c=h.map(function(f){return s[f].score}),u=h.map(function(f){return s[f]}).map(function(f){var p=f.cell,d=f.region;return new zo(p.left+d.left*p.width,p.top+d.top*p.height,p.right+d.right*p.width,p.bottom+d.bottom*p.height).toSquare().round()})}return{boxes:u,scores:c}}function Vl(r,t,e){var n=e.width,o=e.height;return Q(this,void 0,void 0,function(){var i,a,s,u=this;return Z(this,function(c){switch(c.label){case 0:return i=en(r),[4,Promise.all(t.map(function(l){return Q(u,void 0,void 0,function(){var h,f,p,d,m,v,g,x;return Z(this,function(b){return h=l.padAtBorders(r.height,r.width),f=h.y,p=h.ey,d=h.x,m=h.ex,v=d-1,g=f-1,x=i.getImageData(v,g,m-v,p-g),[2,et.isNodejs()?Ha(x):createImageBitmap(x)]})})}))];case 1:return a=c.sent(),s=[],a.forEach(function(l){var h=Go({width:n,height:o}),f=en(h);f.drawImage(l,0,0,n,o);for(var p=f.getImageData(0,0,n,o).data,d=[],m=0;m<p.length;m+=4)d.push(p[m+2]),d.push(p[m+1]),d.push(p[m]);s.push(d)}),[2,s.map(function(l){var h=K(function(){var f=yn(nt(l,[1,n,o,3]),[0,2,1,3]).toFloat();return Ul(f)});return h})]}})})}function N0(r,t){return K(function(){var e=rs(r,t),n=Et(e,[e.shape[0],t.fc1.weights.shape[0]]),o=Mt(n,t.fc1),i=tr(o,t.prelu4_alpha),a=Mt(i,t.fc2_1),s=gt(Lo(a,1),1),u=nn(We(a,s),1),c=Mt(i,t.fc2_2),l=Be(u,1)[1];return{scores:l,regions:c}})}function F0(r,t,e,n,o){return Q(this,void 0,void 0,function(){var i,a,s,u,c,l,h,f,p,d,m,v,g,x;return Z(this,function(b){switch(b.label){case 0:return i=Date.now(),[4,Vl(r,t,{width:24,height:24})];case 1:return a=b.sent(),o.stage2_extractImagePatches=Date.now()-i,i=Date.now(),s=a.map(function(y){var w=N0(y,n);return y.dispose(),w}),o.stage2_rnet=Date.now()-i,u=s.length>1?Me(s.map(function(y){return y.scores})):s[0].scores,h=(l=Array).from,[4,u.data()];case 2:return c=h.apply(l,[b.sent()]),u.dispose(),f=c.map(function(y,w){return{score:y,idx:w}}).filter(function(y){return y.score>e}).map(function(y){var w=y.idx;return w}),p=f.map(function(y){return t[y]}),d=f.map(function(y){return c[y]}),m=[],v=[],p.length>0&&(i=Date.now(),g=Er(p,d,.7),o.stage2_nms=Date.now()-i,x=g.map(function(y){var w=s[f[y]].regions.arraySync();return new ns(w[0][0],w[0][1],w[0][2],w[0][3])}),v=g.map(function(y){return d[y]}),m=g.map(function(y,w){return p[y].calibrate(x[w])})),s.forEach(function(y){y.regions.dispose(),y.scores.dispose()}),[2,{boxes:m,scores:v}]}})})}function P0(r,t){return K(function(){var e=rs(r,t);e=Ve(e,[2,2],[2,2],"same"),e=Rt(e,t.conv4,"valid"),e=tr(e,t.prelu4_alpha);var n=Et(e,[e.shape[0],t.fc1.weights.shape[0]]),o=Mt(n,t.fc1),i=tr(o,t.prelu5_alpha),a=Mt(i,t.fc2_1),s=gt(Lo(a,1),1),u=nn(We(a,s),1),c=Mt(i,t.fc2_2),l=Mt(i,t.fc2_3),h=Be(u,1)[1];return{scores:h,regions:c,points:l}})}function O0(r,t,e,n,o){return Q(this,void 0,void 0,function(){var i,a,s,u,c,l,h,f,p,d,m,v,g,x,b;return Z(this,function(y){switch(y.label){case 0:return i=Date.now(),[4,Vl(r,t,{width:48,height:48})];case 1:return a=y.sent(),o.stage3_extractImagePatches=Date.now()-i,i=Date.now(),s=a.map(function(w){var _=P0(w,n);return w.dispose(),_}),o.stage3_onet=Date.now()-i,u=s.length>1?Me(s.map(function(w){return w.scores})):s[0].scores,h=(l=Array).from,[4,u.data()];case 2:return c=h.apply(l,[y.sent()]),u.dispose(),f=c.map(function(w,_){return{score:w,idx:_}}).filter(function(w){return w.score>e}).map(function(w){var _=w.idx;return _}),p=f.map(function(w){var _=s[w].regions.arraySync();return new ns(_[0][0],_[0][1],_[0][2],_[0][3])}),d=f.map(function(w,_){return t[w].calibrate(p[_])}),m=f.map(function(w){return c[w]}),v=[],g=[],x=[],d.length>0&&(i=Date.now(),b=Er(d,m,.7,!1),o.stage3_nms=Date.now()-i,v=b.map(function(w){return d[w]}),g=b.map(function(w){return m[w]}),x=b.map(function(w,_){return Array(5).fill(0).map(function(S,I){var E=s[w].points.arraySync();return new ge(E[0][I]*(v[_].width+1)+v[_].left,E[0][I+5]*(v[_].height+1)+v[_].top)})})),s.forEach(function(w){w.regions.dispose(),w.scores.dispose(),w.points.dispose()}),[2,{boxes:v,scores:g,points:x}]}})})}var M0=function(r){re(t,r);function t(){return r.call(this,"Mtcnn")||this}return t.prototype.load=function(e){return Q(this,void 0,void 0,function(){return Z(this,function(n){return console.warn("mtcnn is deprecated and will be removed soon"),[2,r.prototype.load.call(this,e)]})})},t.prototype.loadFromDisk=function(e){return Q(this,void 0,void 0,function(){return Z(this,function(n){return console.warn("mtcnn is deprecated and will be removed soon"),[2,r.prototype.loadFromDisk.call(this,e)]})})},t.prototype.forwardInput=function(e,n){return n===void 0&&(n={}),Q(this,void 0,void 0,function(){var o,i,a,s,u,c,l,h,f,p,d,m,v,g,x,b,y,w,_,S,I;return Z(this,function(E){switch(E.label){case 0:if(o=this.params,!o)throw new Error("Mtcnn - load model before inference");if(i=e.canvases[0],!i)throw new Error("Mtcnn - inputCanvas is not defined, note that passing tensors into Mtcnn.forwardInput is not supported yet.");return a={},s=Date.now(),u=K(function(){return _0(gt(Ba.fromPixels(i)).toFloat())}),c=function(R){return u.dispose(),a.total=Date.now()-s,R},l=u.shape.slice(1),h=l[0],f=l[1],p=new Bl(n),d=p.minFaceSize,m=p.scaleFactor,v=p.maxNumScales,g=p.scoreThresholds,x=p.scaleSteps,b=(x||I0(d,m,[h,f])).filter(function(R){var D=ta(R,[h,f]);return Math.min(D.width,D.height)>To}).slice(0,v),a.scales=b,a.pyramid=b.map(function(R){return ta(R,[h,f])}),y=Date.now(),[4,D0(u,b,g[0],o.pnet,a)];case 1:return w=E.sent(),a.total_stage1=Date.now()-y,w.boxes.length?(a.stage2_numInputBoxes=w.boxes.length,y=Date.now(),[4,F0(i,w.boxes,g[1],o.rnet,a)]):[2,c({results:[],stats:a})];case 2:return _=E.sent(),a.total_stage2=Date.now()-y,_.boxes.length?(a.stage3_numInputBoxes=_.boxes.length,y=Date.now(),[4,O0(i,_.boxes,g[2],o.onet,a)]):[2,c({results:[],stats:a})];case 3:return S=E.sent(),a.total_stage3=Date.now()-y,I=S.boxes.map(function(R,D){return qo(Ir({},new mt(S.scores[D],new Ua(R.left/f,R.top/h,R.width/f,R.height/h),{height:h,width:f})),new cy(S.points[D].map(function(A){return A.sub(new ge(R.left,R.top)).div(new ge(R.width,R.height))}),{width:R.width,height:R.height}))}),[2,c({results:I,stats:a})]}})})},t.prototype.forward=function(e,n){return n===void 0&&(n={}),Q(this,void 0,void 0,function(){var o;return Z(this,function(i){switch(i.label){case 0:return o=this.forwardInput,[4,Ge(e)];case 1:return[4,o.apply(this,[i.sent(),n])];case 2:return[2,i.sent().results]}})})},t.prototype.forwardWithStats=function(e,n){return n===void 0&&(n={}),Q(this,void 0,void 0,function(){var o;return Z(this,function(i){switch(i.label){case 0:return o=this.forwardInput,[4,Ge(e)];case 1:return[2,o.apply(this,[i.sent(),n])]}})})},t.prototype.getDefaultModelName=function(){return"mtcnn_model"},t.prototype.extractParamsFromWeigthMap=function(e){return k0(e)},t.prototype.extractParams=function(e){return E0(e)},t}(on),B0=.4,L0=[new ge(1.603231,2.094468),new ge(6.041143,7.080126),new ge(2.882459,3.518061),new ge(4.266906,5.178857),new ge(9.041765,10.66308)],W0=[117.001,114.697,97.404],U0=function(r){re(t,r);function t(){var e=this,n={withSeparableConvs:!0,iouThreshold:B0,classes:["face"],anchors:L0,meanRgb:W0,isFirstLayerConv2d:!0,filterSizes:[3,16,32,64,128,256,512]};return e=r.call(this,n)||this,e}return Object.defineProperty(t.prototype,"anchors",{get:function(){return this.config.anchors},enumerable:!0,configurable:!0}),t.prototype.locateFaces=function(e,n){return Q(this,void 0,void 0,function(){var o;return Z(this,function(i){switch(i.label){case 0:return[4,this.detect(e,n)];case 1:return o=i.sent(),[2,o.map(function(a){return new mt(a.score,a.relativeBox,{width:a.imageWidth,height:a.imageHeight})})]}})})},t.prototype.getDefaultModelName=function(){return"tiny_face_detector_model"},t.prototype.extractParamsFromWeigthMap=function(e){return r.prototype.extractParamsFromWeigthMap.call(this,e)},t}(Wl),ot={ssdMobilenetv1:new Ll,tinyFaceDetector:new U0,tinyYolov2:new w0,mtcnn:new M0,faceLandmark68Net:new Dl,faceLandmark68TinyNet:new zy,faceRecognitionNet:new $y,faceExpressionNet:new Iy,ageGenderNet:new Ly},V0=function(r){return ot.tinyFaceDetector.load(r)},z0=function(r){return ot.faceExpressionNet.load(r)},zl=function(r){re(t,r);function t(e,n,o){var i=r.call(this)||this;return i.parentTask=e,i.input=n,i.extractedFaces=o,i}return t}(Br),os=function(r){re(t,r);function t(){return r!==null&&r.apply(this,arguments)||this}return t.prototype.run=function(){return Q(this,void 0,void 0,function(){var e,n,o=this;return Z(this,function(i){switch(i.label){case 0:return[4,this.parentTask];case 1:return e=i.sent(),[4,Ko(e,this.input,function(a){return Q(o,void 0,void 0,function(){return Z(this,function(s){switch(s.label){case 0:return[4,Promise.all(a.map(function(u){return ot.faceExpressionNet.predictExpressions(u)}))];case 1:return[2,s.sent()]}})})},this.extractedFaces)];case 2:return n=i.sent(),[2,e.map(function(a,s){return Il(a,n[s])})]}})})},t.prototype.withAgeAndGender=function(){return new us(this,this.input)},t}(zl),is=function(r){re(t,r);function t(){return r!==null&&r.apply(this,arguments)||this}return t.prototype.run=function(){return Q(this,void 0,void 0,function(){var e,n;return Z(this,function(o){switch(o.label){case 0:return[4,this.parentTask];case 1:return e=o.sent(),e?[4,ts(e,this.input,function(i){return ot.faceExpressionNet.predictExpressions(i)},this.extractedFaces)]:[2];case 2:return n=o.sent(),[2,Il(e,n)]}})})},t.prototype.withAgeAndGender=function(){return new cs(this,this.input)},t}(zl),as=function(r){re(t,r);function t(){return r!==null&&r.apply(this,arguments)||this}return t.prototype.withAgeAndGender=function(){return new ls(this,this.input)},t.prototype.withFaceDescriptors=function(){return new fs(this,this.input)},t}(os),ss=function(r){re(t,r);function t(){return r!==null&&r.apply(this,arguments)||this}return t.prototype.withAgeAndGender=function(){return new hs(this,this.input)},t.prototype.withFaceDescriptor=function(){return new ps(this,this.input)},t}(is),Gl=function(r){re(t,r);function t(e,n,o){var i=r.call(this)||this;return i.parentTask=e,i.input=n,i.extractedFaces=o,i}return t}(Br),us=function(r){re(t,r);function t(){return r!==null&&r.apply(this,arguments)||this}return t.prototype.run=function(){return Q(this,void 0,void 0,function(){var e,n,o=this;return Z(this,function(i){switch(i.label){case 0:return[4,this.parentTask];case 1:return e=i.sent(),[4,Ko(e,this.input,function(a){return Q(o,void 0,void 0,function(){return Z(this,function(s){switch(s.label){case 0:return[4,Promise.all(a.map(function(u){return ot.ageGenderNet.predictAgeAndGender(u)}))];case 1:return[2,s.sent()]}})})},this.extractedFaces)];case 2:return n=i.sent(),[2,e.map(function(a,s){var u=n[s],c=u.age,l=u.gender,h=u.genderProbability;return Ol(Ml(a,l,h),c)})]}})})},t.prototype.withFaceExpressions=function(){return new os(this,this.input)},t}(Gl),cs=function(r){re(t,r);function t(){return r!==null&&r.apply(this,arguments)||this}return t.prototype.run=function(){return Q(this,void 0,void 0,function(){var e,n,o,i,a;return Z(this,function(s){switch(s.label){case 0:return[4,this.parentTask];case 1:return e=s.sent(),e?[4,ts(e,this.input,function(u){return ot.ageGenderNet.predictAgeAndGender(u)},this.extractedFaces)]:[2];case 2:return n=s.sent(),o=n.age,i=n.gender,a=n.genderProbability,[2,Ol(Ml(e,i,a),o)]}})})},t.prototype.withFaceExpressions=function(){return new is(this,this.input)},t}(Gl),ls=function(r){re(t,r);function t(){return r!==null&&r.apply(this,arguments)||this}return t.prototype.withFaceExpressions=function(){return new as(this,this.input)},t.prototype.withFaceDescriptors=function(){return new fs(this,this.input)},t}(us),hs=function(r){re(t,r);function t(){return r!==null&&r.apply(this,arguments)||this}return t.prototype.withFaceExpressions=function(){return new ss(this,this.input)},t.prototype.withFaceDescriptor=function(){return new ps(this,this.input)},t}(cs),Hl=function(r){re(t,r);function t(e,n){var o=r.call(this)||this;return o.parentTask=e,o.input=n,o}return t}(Br),fs=function(r){re(t,r);function t(){return r!==null&&r.apply(this,arguments)||this}return t.prototype.run=function(){return Q(this,void 0,void 0,function(){var e,n;return Z(this,function(o){switch(o.label){case 0:return[4,this.parentTask];case 1:return e=o.sent(),[4,Ko(e,this.input,function(i){return Promise.all(i.map(function(a){return ot.faceRecognitionNet.computeFaceDescriptor(a)}))},null,function(i){return i.landmarks.align(null,{useDlibAlignment:!0})})];case 2:return n=o.sent(),[2,n.map(function(i,a){return Pl(e[a],i)})]}})})},t.prototype.withFaceExpressions=function(){return new as(this,this.input)},t.prototype.withAgeAndGender=function(){return new ls(this,this.input)},t}(Hl),ps=function(r){re(t,r);function t(){return r!==null&&r.apply(this,arguments)||this}return t.prototype.run=function(){return Q(this,void 0,void 0,function(){var e,n;return Z(this,function(o){switch(o.label){case 0:return[4,this.parentTask];case 1:return e=o.sent(),e?[4,ts(e,this.input,function(i){return ot.faceRecognitionNet.computeFaceDescriptor(i)},null,function(i){return i.landmarks.align(null,{useDlibAlignment:!0})})]:[2];case 2:return n=o.sent(),[2,Pl(e,n)]}})})},t.prototype.withFaceExpressions=function(){return new ss(this,this.input)},t.prototype.withAgeAndGender=function(){return new hs(this,this.input)},t}(Hl),ql=function(r){re(t,r);function t(e,n,o){var i=r.call(this)||this;return i.parentTask=e,i.input=n,i.useTinyLandmarkNet=o,i}return Object.defineProperty(t.prototype,"landmarkNet",{get:function(){return this.useTinyLandmarkNet?ot.faceLandmark68TinyNet:ot.faceLandmark68Net},enumerable:!0,configurable:!0}),t}(Br),G0=function(r){re(t,r);function t(){return r!==null&&r.apply(this,arguments)||this}return t.prototype.run=function(){return Q(this,void 0,void 0,function(){var e,n,o,i,a,s=this;return Z(this,function(u){switch(u.label){case 0:return[4,this.parentTask];case 1:return e=u.sent(),n=e.map(function(c){return c.detection}),this.input instanceof ke?[4,ja(this.input,n)]:[3,3];case 2:return i=u.sent(),[3,5];case 3:return[4,qa(this.input,n)];case 4:i=u.sent(),u.label=5;case 5:return o=i,[4,Promise.all(o.map(function(c){return s.landmarkNet.detectLandmarks(c)}))];case 6:return a=u.sent(),o.forEach(function(c){return c instanceof ke&&c.dispose()}),[2,e.map(function(c,l){return qo(c,a[l])})]}})})},t.prototype.withFaceExpressions=function(){return new as(this,this.input)},t.prototype.withAgeAndGender=function(){return new ls(this,this.input)},t.prototype.withFaceDescriptors=function(){return new fs(this,this.input)},t}(ql),H0=function(r){re(t,r);function t(){return r!==null&&r.apply(this,arguments)||this}return t.prototype.run=function(){return Q(this,void 0,void 0,function(){var e,n,o,i,a;return Z(this,function(s){switch(s.label){case 0:return[4,this.parentTask];case 1:return e=s.sent(),e?(n=e.detection,this.input instanceof ke?[4,ja(this.input,[n])]:[3,3]):[2];case 2:return i=s.sent(),[3,5];case 3:return[4,qa(this.input,[n])];case 4:i=s.sent(),s.label=5;case 5:return o=i,[4,this.landmarkNet.detectLandmarks(o[0])];case 6:return a=s.sent(),o.forEach(function(u){return u instanceof ke&&u.dispose()}),[2,qo(e,a)]}})})},t.prototype.withFaceExpressions=function(){return new ss(this,this.input)},t.prototype.withAgeAndGender=function(){return new hs(this,this.input)},t.prototype.withFaceDescriptor=function(){return new ps(this,this.input)},t}(ql),jl=function(r){re(t,r);function t(e,n){n===void 0&&(n=new jo);var o=r.call(this)||this;return o.input=e,o.options=n,o}return t}(Br),Kl=function(r){re(t,r);function t(){return r!==null&&r.apply(this,arguments)||this}return t.prototype.run=function(){return Q(this,void 0,void 0,function(){var e,n,o,i;return Z(this,function(a){switch(a.label){case 0:return e=this,n=e.input,o=e.options,o instanceof Bl?[4,ot.mtcnn.forward(n,o)]:[3,2];case 1:return[2,a.sent().map(function(s){return s.detection})];case 2:if(i=o instanceof es?function(s){return ot.tinyFaceDetector.locateFaces(s,o)}:o instanceof jo?function(s){return ot.ssdMobilenetv1.locateFaces(s,o)}:o instanceof Za?function(s){return ot.tinyYolov2.locateFaces(s,o)}:null,!i)throw new Error("detectFaces - expected options to be instance of TinyFaceDetectorOptions | SsdMobilenetv1Options | MtcnnOptions | TinyYolov2Options");return[2,i(n)]}})})},t.prototype.runAndExtendWithFaceDetections=function(){var e=this;return new Promise(function(n){return Q(e,void 0,void 0,function(){var o;return Z(this,function(i){switch(i.label){case 0:return[4,this.run()];case 1:return o=i.sent(),[2,n(o.map(function(a){return Ir({},a)}))]}})})})},t.prototype.withFaceLandmarks=function(e){return e===void 0&&(e=!1),new G0(this.runAndExtendWithFaceDetections(),this.input,e)},t.prototype.withFaceExpressions=function(){return new os(this.runAndExtendWithFaceDetections(),this.input)},t.prototype.withAgeAndGender=function(){return new us(this.runAndExtendWithFaceDetections(),this.input)},t}(jl);(function(r){re(t,r);function t(){return r!==null&&r.apply(this,arguments)||this}return t.prototype.run=function(){return Q(this,void 0,void 0,function(){var e,n;return Z(this,function(o){switch(o.label){case 0:return[4,new Kl(this.input,this.options)];case 1:return e=o.sent(),n=e[0],e.forEach(function(i){i.score>n.score&&(n=i)}),[2,n]}})})},t.prototype.runAndExtendWithFaceDetection=function(){var e=this;return new Promise(function(n){return Q(e,void 0,void 0,function(){var o;return Z(this,function(i){switch(i.label){case 0:return[4,this.run()];case 1:return o=i.sent(),[2,n(o?Ir({},o):void 0)]}})})})},t.prototype.withFaceLandmarks=function(e){return e===void 0&&(e=!1),new H0(this.runAndExtendWithFaceDetection(),this.input,e)},t.prototype.withFaceExpressions=function(){return new is(this.runAndExtendWithFaceDetection(),this.input)},t.prototype.withAgeAndGender=function(){return new cs(this.runAndExtendWithFaceDetection(),this.input)},t})(jl);function Xl(r,t){return t===void 0&&(t=new jo),new Kl(r,t)}function q0(r,t){if(r.length!==t.length)throw new Error("euclideanDistance: arr1.length !== arr2.length");var e=Array.from(r),n=Array.from(t);return Math.sqrt(e.map(function(o,i){return o-n[i]}).reduce(function(o,i){return o+Math.pow(i,2)},0))}(function(){function r(t,e){e===void 0&&(e=.6),this._distanceThreshold=e;var n=Array.isArray(t)?t:[t];if(!n.length)throw new Error("FaceRecognizer.constructor - expected atleast one input");var o=1,i=function(){return"person "+o++};this._labeledDescriptors=n.map(function(a){if(a instanceof Kr)return a;if(a instanceof Float32Array)return new Kr(i(),[a]);if(a.descriptor&&a.descriptor instanceof Float32Array)return new Kr(i(),[a.descriptor]);throw new Error("FaceRecognizer.constructor - expected inputs to be of type LabeledFaceDescriptors | WithFaceDescriptor<any> | Float32Array | Array<LabeledFaceDescriptors | WithFaceDescriptor<any> | Float32Array>")})}return Object.defineProperty(r.prototype,"labeledDescriptors",{get:function(){return this._labeledDescriptors},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"distanceThreshold",{get:function(){return this._distanceThreshold},enumerable:!0,configurable:!0}),r.prototype.computeMeanDistance=function(t,e){return e.map(function(n){return q0(n,t)}).reduce(function(n,o){return n+o},0)/(e.length||1)},r.prototype.matchDescriptor=function(t){var e=this;return this.labeledDescriptors.map(function(n){var o=n.descriptors,i=n.label;return new mu(i,e.computeMeanDistance(t,o))}).reduce(function(n,o){return n.distance<o.distance?n:o})},r.prototype.findBestMatch=function(t){var e=this.matchDescriptor(t);return e.distance<this.distanceThreshold?e:new mu("unknown",e.distance)},r.prototype.toJSON=function(){return{distanceThreshold:this.distanceThreshold,labeledDescriptors:this.labeledDescriptors.map(function(t){return t.toJSON()})}},r.fromJSON=function(t){var e=t.labeledDescriptors.map(function(n){return Kr.fromJSON(n)});return new r(e,t.distanceThreshold)},r})();function $l(r,t){var e=new An(t.width,t.height),n=e.width,o=e.height;if(n<=0||o<=0)throw new Error("resizeResults - invalid dimensions: "+JSON.stringify({width:n,height:o}));if(Array.isArray(r))return r.map(function(s){return $l(s,{width:n,height:o})});if(Sl(r)){var i=r.detection.forSize(n,o),a=r.unshiftedLandmarks.forSize(i.box.width,i.box.height);return qo(Ir(r,i),a)}return kr(r)?Ir(r,r.detection.forSize(n,o)):r instanceof Rr||r instanceof mt?r.forSize(n,o):r}const Gt=Object.create(null);Gt.open="0";Gt.close="1";Gt.ping="2";Gt.pong="3";Gt.message="4";Gt.upgrade="5";Gt.noop="6";const oo=Object.create(null);Object.keys(Gt).forEach(r=>{oo[Gt[r]]=r});const na={type:"error",data:"parser error"},Yl=typeof Blob=="function"||typeof Blob<"u"&&Object.prototype.toString.call(Blob)==="[object BlobConstructor]",Jl=typeof ArrayBuffer=="function",Ql=r=>typeof ArrayBuffer.isView=="function"?ArrayBuffer.isView(r):r&&r.buffer instanceof ArrayBuffer,ds=({type:r,data:t},e,n)=>Yl&&t instanceof Blob?e?n(t):wu(t,n):Jl&&(t instanceof ArrayBuffer||Ql(t))?e?n(t):wu(new Blob([t]),n):n(Gt[r]+(t||"")),wu=(r,t)=>{const e=new FileReader;return e.onload=function(){const n=e.result.split(",")[1];t("b"+(n||""))},e.readAsDataURL(r)};function _u(r){return r instanceof Uint8Array?r:r instanceof ArrayBuffer?new Uint8Array(r):new Uint8Array(r.buffer,r.byteOffset,r.byteLength)}let Si;function j0(r,t){if(Yl&&r.data instanceof Blob)return r.data.arrayBuffer().then(_u).then(t);if(Jl&&(r.data instanceof ArrayBuffer||Ql(r.data)))return t(_u(r.data));ds(r,!1,e=>{Si||(Si=new TextEncoder),t(Si.encode(e))})}const Cu="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",dr=typeof Uint8Array>"u"?[]:new Uint8Array(256);for(let r=0;r<Cu.length;r++)dr[Cu.charCodeAt(r)]=r;const K0=r=>{let t=r.length*.75,e=r.length,n,o=0,i,a,s,u;r[r.length-1]==="="&&(t--,r[r.length-2]==="="&&t--);const c=new ArrayBuffer(t),l=new Uint8Array(c);for(n=0;n<e;n+=4)i=dr[r.charCodeAt(n)],a=dr[r.charCodeAt(n+1)],s=dr[r.charCodeAt(n+2)],u=dr[r.charCodeAt(n+3)],l[o++]=i<<2|a>>4,l[o++]=(a&15)<<4|s>>2,l[o++]=(s&3)<<6|u&63;return c},X0=typeof ArrayBuffer=="function",vs=(r,t)=>{if(typeof r!="string")return{type:"message",data:Zl(r,t)};const e=r.charAt(0);return e==="b"?{type:"message",data:$0(r.substring(1),t)}:oo[e]?r.length>1?{type:oo[e],data:r.substring(1)}:{type:oo[e]}:na},$0=(r,t)=>{if(X0){const e=K0(r);return Zl(e,t)}else return{base64:!0,data:r}},Zl=(r,t)=>{switch(t){case"blob":return r instanceof Blob?r:new Blob([r]);case"arraybuffer":default:return r instanceof ArrayBuffer?r:r.buffer}},eh="",Y0=(r,t)=>{const e=r.length,n=new Array(e);let o=0;r.forEach((i,a)=>{ds(i,!1,s=>{n[a]=s,++o===e&&t(n.join(eh))})})},J0=(r,t)=>{const e=r.split(eh),n=[];for(let o=0;o<e.length;o++){const i=vs(e[o],t);if(n.push(i),i.type==="error")break}return n};function Q0(){return new TransformStream({transform(r,t){j0(r,e=>{const n=e.length;let o;if(n<126)o=new Uint8Array(1),new DataView(o.buffer).setUint8(0,n);else if(n<65536){o=new Uint8Array(3);const i=new DataView(o.buffer);i.setUint8(0,126),i.setUint16(1,n)}else{o=new Uint8Array(9);const i=new DataView(o.buffer);i.setUint8(0,127),i.setBigUint64(1,BigInt(n))}r.data&&typeof r.data!="string"&&(o[0]|=128),t.enqueue(o),t.enqueue(e)})}})}let Ai;function Qr(r){return r.reduce((t,e)=>t+e.length,0)}function Zr(r,t){if(r[0].length===t)return r.shift();const e=new Uint8Array(t);let n=0;for(let o=0;o<t;o++)e[o]=r[0][n++],n===r[0].length&&(r.shift(),n=0);return r.length&&n<r[0].length&&(r[0]=r[0].slice(n)),e}function Z0(r,t){Ai||(Ai=new TextDecoder);const e=[];let n=0,o=-1,i=!1;return new TransformStream({transform(a,s){for(e.push(a);;){if(n===0){if(Qr(e)<1)break;const u=Zr(e,1);i=(u[0]&128)===128,o=u[0]&127,o<126?n=3:o===126?n=1:n=2}else if(n===1){if(Qr(e)<2)break;const u=Zr(e,2);o=new DataView(u.buffer,u.byteOffset,u.length).getUint16(0),n=3}else if(n===2){if(Qr(e)<8)break;const u=Zr(e,8),c=new DataView(u.buffer,u.byteOffset,u.length),l=c.getUint32(0);if(l>Math.pow(2,21)-1){s.enqueue(na);break}o=l*Math.pow(2,32)+c.getUint32(4),n=3}else{if(Qr(e)<o)break;const u=Zr(e,o);s.enqueue(vs(i?u:Ai.decode(u),t)),n=0}if(o===0||o>r){s.enqueue(na);break}}}})}const th=4;function Pe(r){if(r)return ex(r)}function ex(r){for(var t in Pe.prototype)r[t]=Pe.prototype[t];return r}Pe.prototype.on=Pe.prototype.addEventListener=function(r,t){return this._callbacks=this._callbacks||{},(this._callbacks["$"+r]=this._callbacks["$"+r]||[]).push(t),this};Pe.prototype.once=function(r,t){function e(){this.off(r,e),t.apply(this,arguments)}return e.fn=t,this.on(r,e),this};Pe.prototype.off=Pe.prototype.removeListener=Pe.prototype.removeAllListeners=Pe.prototype.removeEventListener=function(r,t){if(this._callbacks=this._callbacks||{},arguments.length==0)return this._callbacks={},this;var e=this._callbacks["$"+r];if(!e)return this;if(arguments.length==1)return delete this._callbacks["$"+r],this;for(var n,o=0;o<e.length;o++)if(n=e[o],n===t||n.fn===t){e.splice(o,1);break}return e.length===0&&delete this._callbacks["$"+r],this};Pe.prototype.emit=function(r){this._callbacks=this._callbacks||{};for(var t=new Array(arguments.length-1),e=this._callbacks["$"+r],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(e){e=e.slice(0);for(var n=0,o=e.length;n<o;++n)e[n].apply(this,t)}return this};Pe.prototype.emitReserved=Pe.prototype.emit;Pe.prototype.listeners=function(r){return this._callbacks=this._callbacks||{},this._callbacks["$"+r]||[]};Pe.prototype.hasListeners=function(r){return!!this.listeners(r).length};const Xo=typeof Promise=="function"&&typeof Promise.resolve=="function"?t=>Promise.resolve().then(t):(t,e)=>e(t,0),yt=typeof self<"u"?self:typeof window<"u"?window:Function("return this")(),tx="arraybuffer";function nh(r,...t){return t.reduce((e,n)=>(r.hasOwnProperty(n)&&(e[n]=r[n]),e),{})}const nx=yt.setTimeout,rx=yt.clearTimeout;function $o(r,t){t.useNativeTimers?(r.setTimeoutFn=nx.bind(yt),r.clearTimeoutFn=rx.bind(yt)):(r.setTimeoutFn=yt.setTimeout.bind(yt),r.clearTimeoutFn=yt.clearTimeout.bind(yt))}const ox=1.33;function ix(r){return typeof r=="string"?ax(r):Math.ceil((r.byteLength||r.size)*ox)}function ax(r){let t=0,e=0;for(let n=0,o=r.length;n<o;n++)t=r.charCodeAt(n),t<128?e+=1:t<2048?e+=2:t<55296||t>=57344?e+=3:(n++,e+=4);return e}function rh(){return Date.now().toString(36).substring(3)+Math.random().toString(36).substring(2,5)}function sx(r){let t="";for(let e in r)r.hasOwnProperty(e)&&(t.length&&(t+="&"),t+=encodeURIComponent(e)+"="+encodeURIComponent(r[e]));return t}function ux(r){let t={},e=r.split("&");for(let n=0,o=e.length;n<o;n++){let i=e[n].split("=");t[decodeURIComponent(i[0])]=decodeURIComponent(i[1])}return t}class cx extends Error{constructor(t,e,n){super(t),this.description=e,this.context=n,this.type="TransportError"}}class ms extends Pe{constructor(t){super(),this.writable=!1,$o(this,t),this.opts=t,this.query=t.query,this.socket=t.socket,this.supportsBinary=!t.forceBase64}onError(t,e,n){return super.emitReserved("error",new cx(t,e,n)),this}open(){return this.readyState="opening",this.doOpen(),this}close(){return(this.readyState==="opening"||this.readyState==="open")&&(this.doClose(),this.onClose()),this}send(t){this.readyState==="open"&&this.write(t)}onOpen(){this.readyState="open",this.writable=!0,super.emitReserved("open")}onData(t){const e=vs(t,this.socket.binaryType);this.onPacket(e)}onPacket(t){super.emitReserved("packet",t)}onClose(t){this.readyState="closed",super.emitReserved("close",t)}pause(t){}createUri(t,e={}){return t+"://"+this._hostname()+this._port()+this.opts.path+this._query(e)}_hostname(){const t=this.opts.hostname;return t.indexOf(":")===-1?t:"["+t+"]"}_port(){return this.opts.port&&(this.opts.secure&&+(this.opts.port!==443)||!this.opts.secure&&Number(this.opts.port)!==80)?":"+this.opts.port:""}_query(t){const e=sx(t);return e.length?"?"+e:""}}class lx extends ms{constructor(){super(...arguments),this._polling=!1}get name(){return"polling"}doOpen(){this._poll()}pause(t){this.readyState="pausing";const e=()=>{this.readyState="paused",t()};if(this._polling||!this.writable){let n=0;this._polling&&(n++,this.once("pollComplete",function(){--n||e()})),this.writable||(n++,this.once("drain",function(){--n||e()}))}else e()}_poll(){this._polling=!0,this.doPoll(),this.emitReserved("poll")}onData(t){const e=n=>{if(this.readyState==="opening"&&n.type==="open"&&this.onOpen(),n.type==="close")return this.onClose({description:"transport closed by the server"}),!1;this.onPacket(n)};J0(t,this.socket.binaryType).forEach(e),this.readyState!=="closed"&&(this._polling=!1,this.emitReserved("pollComplete"),this.readyState==="open"&&this._poll())}doClose(){const t=()=>{this.write([{type:"close"}])};this.readyState==="open"?t():this.once("open",t)}write(t){this.writable=!1,Y0(t,e=>{this.doWrite(e,()=>{this.writable=!0,this.emitReserved("drain")})})}uri(){const t=this.opts.secure?"https":"http",e=this.query||{};return this.opts.timestampRequests!==!1&&(e[this.opts.timestampParam]=rh()),!this.supportsBinary&&!e.sid&&(e.b64=1),this.createUri(t,e)}}let oh=!1;try{oh=typeof XMLHttpRequest<"u"&&"withCredentials"in new XMLHttpRequest}catch{}const hx=oh;function fx(){}class px extends lx{constructor(t){if(super(t),typeof location<"u"){const e=location.protocol==="https:";let n=location.port;n||(n=e?"443":"80"),this.xd=typeof location<"u"&&t.hostname!==location.hostname||n!==t.port}}doWrite(t,e){const n=this.request({method:"POST",data:t});n.on("success",e),n.on("error",(o,i)=>{this.onError("xhr post error",o,i)})}doPoll(){const t=this.request();t.on("data",this.onData.bind(this)),t.on("error",(e,n)=>{this.onError("xhr poll error",e,n)}),this.pollXhr=t}}class Ut extends Pe{constructor(t,e,n){super(),this.createRequest=t,$o(this,n),this._opts=n,this._method=n.method||"GET",this._uri=e,this._data=n.data!==void 0?n.data:null,this._create()}_create(){var t;const e=nh(this._opts,"agent","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","autoUnref");e.xdomain=!!this._opts.xd;const n=this._xhr=this.createRequest(e);try{n.open(this._method,this._uri,!0);try{if(this._opts.extraHeaders){n.setDisableHeaderCheck&&n.setDisableHeaderCheck(!0);for(let o in this._opts.extraHeaders)this._opts.extraHeaders.hasOwnProperty(o)&&n.setRequestHeader(o,this._opts.extraHeaders[o])}}catch{}if(this._method==="POST")try{n.setRequestHeader("Content-type","text/plain;charset=UTF-8")}catch{}try{n.setRequestHeader("Accept","*/*")}catch{}(t=this._opts.cookieJar)===null||t===void 0||t.addCookies(n),"withCredentials"in n&&(n.withCredentials=this._opts.withCredentials),this._opts.requestTimeout&&(n.timeout=this._opts.requestTimeout),n.onreadystatechange=()=>{var o;n.readyState===3&&((o=this._opts.cookieJar)===null||o===void 0||o.parseCookies(n.getResponseHeader("set-cookie"))),n.readyState===4&&(n.status===200||n.status===1223?this._onLoad():this.setTimeoutFn(()=>{this._onError(typeof n.status=="number"?n.status:0)},0))},n.send(this._data)}catch(o){this.setTimeoutFn(()=>{this._onError(o)},0);return}typeof document<"u"&&(this._index=Ut.requestsCount++,Ut.requests[this._index]=this)}_onError(t){this.emitReserved("error",t,this._xhr),this._cleanup(!0)}_cleanup(t){if(!(typeof this._xhr>"u"||this._xhr===null)){if(this._xhr.onreadystatechange=fx,t)try{this._xhr.abort()}catch{}typeof document<"u"&&delete Ut.requests[this._index],this._xhr=null}}_onLoad(){const t=this._xhr.responseText;t!==null&&(this.emitReserved("data",t),this.emitReserved("success"),this._cleanup())}abort(){this._cleanup()}}Ut.requestsCount=0;Ut.requests={};if(typeof document<"u"){if(typeof attachEvent=="function")attachEvent("onunload",Eu);else if(typeof addEventListener=="function"){const r="onpagehide"in yt?"pagehide":"unload";addEventListener(r,Eu,!1)}}function Eu(){for(let r in Ut.requests)Ut.requests.hasOwnProperty(r)&&Ut.requests[r].abort()}const dx=function(){const r=ih({xdomain:!1});return r&&r.responseType!==null}();class vx extends px{constructor(t){super(t);const e=t&&t.forceBase64;this.supportsBinary=dx&&!e}request(t={}){return Object.assign(t,{xd:this.xd},this.opts),new Ut(ih,this.uri(),t)}}function ih(r){const t=r.xdomain;try{if(typeof XMLHttpRequest<"u"&&(!t||hx))return new XMLHttpRequest}catch{}if(!t)try{return new yt[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP")}catch{}}const ah=typeof navigator<"u"&&typeof navigator.product=="string"&&navigator.product.toLowerCase()==="reactnative";class mx extends ms{get name(){return"websocket"}doOpen(){const t=this.uri(),e=this.opts.protocols,n=ah?{}:nh(this.opts,"agent","perMessageDeflate","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","localAddress","protocolVersion","origin","maxPayload","family","checkServerIdentity");this.opts.extraHeaders&&(n.headers=this.opts.extraHeaders);try{this.ws=this.createSocket(t,e,n)}catch(o){return this.emitReserved("error",o)}this.ws.binaryType=this.socket.binaryType,this.addEventListeners()}addEventListeners(){this.ws.onopen=()=>{this.opts.autoUnref&&this.ws._socket.unref(),this.onOpen()},this.ws.onclose=t=>this.onClose({description:"websocket connection closed",context:t}),this.ws.onmessage=t=>this.onData(t.data),this.ws.onerror=t=>this.onError("websocket error",t)}write(t){this.writable=!1;for(let e=0;e<t.length;e++){const n=t[e],o=e===t.length-1;ds(n,this.supportsBinary,i=>{try{this.doWrite(n,i)}catch{}o&&Xo(()=>{this.writable=!0,this.emitReserved("drain")},this.setTimeoutFn)})}}doClose(){typeof this.ws<"u"&&(this.ws.onerror=()=>{},this.ws.close(),this.ws=null)}uri(){const t=this.opts.secure?"wss":"ws",e=this.query||{};return this.opts.timestampRequests&&(e[this.opts.timestampParam]=rh()),this.supportsBinary||(e.b64=1),this.createUri(t,e)}}const Ti=yt.WebSocket||yt.MozWebSocket;class gx extends mx{createSocket(t,e,n){return ah?new Ti(t,e,n):e?new Ti(t,e):new Ti(t)}doWrite(t,e){this.ws.send(e)}}class yx extends ms{get name(){return"webtransport"}doOpen(){try{this._transport=new WebTransport(this.createUri("https"),this.opts.transportOptions[this.name])}catch(t){return this.emitReserved("error",t)}this._transport.closed.then(()=>{this.onClose()}).catch(t=>{this.onError("webtransport error",t)}),this._transport.ready.then(()=>{this._transport.createBidirectionalStream().then(t=>{const e=Z0(Number.MAX_SAFE_INTEGER,this.socket.binaryType),n=t.readable.pipeThrough(e).getReader(),o=Q0();o.readable.pipeTo(t.writable),this._writer=o.writable.getWriter();const i=()=>{n.read().then(({done:s,value:u})=>{s||(this.onPacket(u),i())}).catch(s=>{})};i();const a={type:"open"};this.query.sid&&(a.data=`{"sid":"${this.query.sid}"}`),this._writer.write(a).then(()=>this.onOpen())})})}write(t){this.writable=!1;for(let e=0;e<t.length;e++){const n=t[e],o=e===t.length-1;this._writer.write(n).then(()=>{o&&Xo(()=>{this.writable=!0,this.emitReserved("drain")},this.setTimeoutFn)})}}doClose(){var t;(t=this._transport)===null||t===void 0||t.close()}}const xx={websocket:gx,webtransport:yx,polling:vx},bx=/^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,wx=["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"];function ra(r){if(r.length>8e3)throw"URI too long";const t=r,e=r.indexOf("["),n=r.indexOf("]");e!=-1&&n!=-1&&(r=r.substring(0,e)+r.substring(e,n).replace(/:/g,";")+r.substring(n,r.length));let o=bx.exec(r||""),i={},a=14;for(;a--;)i[wx[a]]=o[a]||"";return e!=-1&&n!=-1&&(i.source=t,i.host=i.host.substring(1,i.host.length-1).replace(/;/g,":"),i.authority=i.authority.replace("[","").replace("]","").replace(/;/g,":"),i.ipv6uri=!0),i.pathNames=_x(i,i.path),i.queryKey=Cx(i,i.query),i}function _x(r,t){const e=/\/{2,9}/g,n=t.replace(e,"/").split("/");return(t.slice(0,1)=="/"||t.length===0)&&n.splice(0,1),t.slice(-1)=="/"&&n.splice(n.length-1,1),n}function Cx(r,t){const e={};return t.replace(/(?:^|&)([^&=]*)=?([^&]*)/g,function(n,o,i){o&&(e[o]=i)}),e}const oa=typeof addEventListener=="function"&&typeof removeEventListener=="function",io=[];oa&&addEventListener("offline",()=>{io.forEach(r=>r())},!1);class gn extends Pe{constructor(t,e){if(super(),this.binaryType=tx,this.writeBuffer=[],this._prevBufferLen=0,this._pingInterval=-1,this._pingTimeout=-1,this._maxPayload=-1,this._pingTimeoutTime=1/0,t&&typeof t=="object"&&(e=t,t=null),t){const n=ra(t);e.hostname=n.host,e.secure=n.protocol==="https"||n.protocol==="wss",e.port=n.port,n.query&&(e.query=n.query)}else e.host&&(e.hostname=ra(e.host).host);$o(this,e),this.secure=e.secure!=null?e.secure:typeof location<"u"&&location.protocol==="https:",e.hostname&&!e.port&&(e.port=this.secure?"443":"80"),this.hostname=e.hostname||(typeof location<"u"?location.hostname:"localhost"),this.port=e.port||(typeof location<"u"&&location.port?location.port:this.secure?"443":"80"),this.transports=[],this._transportsByName={},e.transports.forEach(n=>{const o=n.prototype.name;this.transports.push(o),this._transportsByName[o]=n}),this.opts=Object.assign({path:"/engine.io",agent:!1,withCredentials:!1,upgrade:!0,timestampParam:"t",rememberUpgrade:!1,addTrailingSlash:!0,rejectUnauthorized:!0,perMessageDeflate:{threshold:1024},transportOptions:{},closeOnBeforeunload:!1},e),this.opts.path=this.opts.path.replace(/\/$/,"")+(this.opts.addTrailingSlash?"/":""),typeof this.opts.query=="string"&&(this.opts.query=ux(this.opts.query)),oa&&(this.opts.closeOnBeforeunload&&(this._beforeunloadEventListener=()=>{this.transport&&(this.transport.removeAllListeners(),this.transport.close())},addEventListener("beforeunload",this._beforeunloadEventListener,!1)),this.hostname!=="localhost"&&(this._offlineEventListener=()=>{this._onClose("transport close",{description:"network connection lost"})},io.push(this._offlineEventListener))),this.opts.withCredentials&&(this._cookieJar=void 0),this._open()}createTransport(t){const e=Object.assign({},this.opts.query);e.EIO=th,e.transport=t,this.id&&(e.sid=this.id);const n=Object.assign({},this.opts,{query:e,socket:this,hostname:this.hostname,secure:this.secure,port:this.port},this.opts.transportOptions[t]);return new this._transportsByName[t](n)}_open(){if(this.transports.length===0){this.setTimeoutFn(()=>{this.emitReserved("error","No transports available")},0);return}const t=this.opts.rememberUpgrade&&gn.priorWebsocketSuccess&&this.transports.indexOf("websocket")!==-1?"websocket":this.transports[0];this.readyState="opening";const e=this.createTransport(t);e.open(),this.setTransport(e)}setTransport(t){this.transport&&this.transport.removeAllListeners(),this.transport=t,t.on("drain",this._onDrain.bind(this)).on("packet",this._onPacket.bind(this)).on("error",this._onError.bind(this)).on("close",e=>this._onClose("transport close",e))}onOpen(){this.readyState="open",gn.priorWebsocketSuccess=this.transport.name==="websocket",this.emitReserved("open"),this.flush()}_onPacket(t){if(this.readyState==="opening"||this.readyState==="open"||this.readyState==="closing")switch(this.emitReserved("packet",t),this.emitReserved("heartbeat"),t.type){case"open":this.onHandshake(JSON.parse(t.data));break;case"ping":this._sendPacket("pong"),this.emitReserved("ping"),this.emitReserved("pong"),this._resetPingTimeout();break;case"error":const e=new Error("server error");e.code=t.data,this._onError(e);break;case"message":this.emitReserved("data",t.data),this.emitReserved("message",t.data);break}}onHandshake(t){this.emitReserved("handshake",t),this.id=t.sid,this.transport.query.sid=t.sid,this._pingInterval=t.pingInterval,this._pingTimeout=t.pingTimeout,this._maxPayload=t.maxPayload,this.onOpen(),this.readyState!=="closed"&&this._resetPingTimeout()}_resetPingTimeout(){this.clearTimeoutFn(this._pingTimeoutTimer);const t=this._pingInterval+this._pingTimeout;this._pingTimeoutTime=Date.now()+t,this._pingTimeoutTimer=this.setTimeoutFn(()=>{this._onClose("ping timeout")},t),this.opts.autoUnref&&this._pingTimeoutTimer.unref()}_onDrain(){this.writeBuffer.splice(0,this._prevBufferLen),this._prevBufferLen=0,this.writeBuffer.length===0?this.emitReserved("drain"):this.flush()}flush(){if(this.readyState!=="closed"&&this.transport.writable&&!this.upgrading&&this.writeBuffer.length){const t=this._getWritablePackets();this.transport.send(t),this._prevBufferLen=t.length,this.emitReserved("flush")}}_getWritablePackets(){if(!(this._maxPayload&&this.transport.name==="polling"&&this.writeBuffer.length>1))return this.writeBuffer;let e=1;for(let n=0;n<this.writeBuffer.length;n++){const o=this.writeBuffer[n].data;if(o&&(e+=ix(o)),n>0&&e>this._maxPayload)return this.writeBuffer.slice(0,n);e+=2}return this.writeBuffer}_hasPingExpired(){if(!this._pingTimeoutTime)return!0;const t=Date.now()>this._pingTimeoutTime;return t&&(this._pingTimeoutTime=0,Xo(()=>{this._onClose("ping timeout")},this.setTimeoutFn)),t}write(t,e,n){return this._sendPacket("message",t,e,n),this}send(t,e,n){return this._sendPacket("message",t,e,n),this}_sendPacket(t,e,n,o){if(typeof e=="function"&&(o=e,e=void 0),typeof n=="function"&&(o=n,n=null),this.readyState==="closing"||this.readyState==="closed")return;n=n||{},n.compress=n.compress!==!1;const i={type:t,data:e,options:n};this.emitReserved("packetCreate",i),this.writeBuffer.push(i),o&&this.once("flush",o),this.flush()}close(){const t=()=>{this._onClose("forced close"),this.transport.close()},e=()=>{this.off("upgrade",e),this.off("upgradeError",e),t()},n=()=>{this.once("upgrade",e),this.once("upgradeError",e)};return(this.readyState==="opening"||this.readyState==="open")&&(this.readyState="closing",this.writeBuffer.length?this.once("drain",()=>{this.upgrading?n():t()}):this.upgrading?n():t()),this}_onError(t){if(gn.priorWebsocketSuccess=!1,this.opts.tryAllTransports&&this.transports.length>1&&this.readyState==="opening")return this.transports.shift(),this._open();this.emitReserved("error",t),this._onClose("transport error",t)}_onClose(t,e){if(this.readyState==="opening"||this.readyState==="open"||this.readyState==="closing"){if(this.clearTimeoutFn(this._pingTimeoutTimer),this.transport.removeAllListeners("close"),this.transport.close(),this.transport.removeAllListeners(),oa&&(this._beforeunloadEventListener&&removeEventListener("beforeunload",this._beforeunloadEventListener,!1),this._offlineEventListener)){const n=io.indexOf(this._offlineEventListener);n!==-1&&io.splice(n,1)}this.readyState="closed",this.id=null,this.emitReserved("close",t,e),this.writeBuffer=[],this._prevBufferLen=0}}}gn.protocol=th;class Ex extends gn{constructor(){super(...arguments),this._upgrades=[]}onOpen(){if(super.onOpen(),this.readyState==="open"&&this.opts.upgrade)for(let t=0;t<this._upgrades.length;t++)this._probe(this._upgrades[t])}_probe(t){let e=this.createTransport(t),n=!1;gn.priorWebsocketSuccess=!1;const o=()=>{n||(e.send([{type:"ping",data:"probe"}]),e.once("packet",h=>{if(!n)if(h.type==="pong"&&h.data==="probe"){if(this.upgrading=!0,this.emitReserved("upgrading",e),!e)return;gn.priorWebsocketSuccess=e.name==="websocket",this.transport.pause(()=>{n||this.readyState!=="closed"&&(l(),this.setTransport(e),e.send([{type:"upgrade"}]),this.emitReserved("upgrade",e),e=null,this.upgrading=!1,this.flush())})}else{const f=new Error("probe error");f.transport=e.name,this.emitReserved("upgradeError",f)}}))};function i(){n||(n=!0,l(),e.close(),e=null)}const a=h=>{const f=new Error("probe error: "+h);f.transport=e.name,i(),this.emitReserved("upgradeError",f)};function s(){a("transport closed")}function u(){a("socket closed")}function c(h){e&&h.name!==e.name&&i()}const l=()=>{e.removeListener("open",o),e.removeListener("error",a),e.removeListener("close",s),this.off("close",u),this.off("upgrading",c)};e.once("open",o),e.once("error",a),e.once("close",s),this.once("close",u),this.once("upgrading",c),this._upgrades.indexOf("webtransport")!==-1&&t!=="webtransport"?this.setTimeoutFn(()=>{n||e.open()},200):e.open()}onHandshake(t){this._upgrades=this._filterUpgrades(t.upgrades),super.onHandshake(t)}_filterUpgrades(t){const e=[];for(let n=0;n<t.length;n++)~this.transports.indexOf(t[n])&&e.push(t[n]);return e}}let Rx=class extends Ex{constructor(t,e={}){const n=typeof t=="object"?t:e;(!n.transports||n.transports&&typeof n.transports[0]=="string")&&(n.transports=(n.transports||["polling","websocket","webtransport"]).map(o=>xx[o]).filter(o=>!!o)),super(t,n)}};function kx(r,t="",e){let n=r;e=e||typeof location<"u"&&location,r==null&&(r=e.protocol+"//"+e.host),typeof r=="string"&&(r.charAt(0)==="/"&&(r.charAt(1)==="/"?r=e.protocol+r:r=e.host+r),/^(https?|wss?):\/\//.test(r)||(typeof e<"u"?r=e.protocol+"//"+r:r="https://"+r),n=ra(r)),n.port||(/^(http|ws)$/.test(n.protocol)?n.port="80":/^(http|ws)s$/.test(n.protocol)&&(n.port="443")),n.path=n.path||"/";const i=n.host.indexOf(":")!==-1?"["+n.host+"]":n.host;return n.id=n.protocol+"://"+i+":"+n.port+t,n.href=n.protocol+"://"+i+(e&&e.port===n.port?"":":"+n.port),n}const Ix=typeof ArrayBuffer=="function",Sx=r=>typeof ArrayBuffer.isView=="function"?ArrayBuffer.isView(r):r.buffer instanceof ArrayBuffer,sh=Object.prototype.toString,Ax=typeof Blob=="function"||typeof Blob<"u"&&sh.call(Blob)==="[object BlobConstructor]",Tx=typeof File=="function"||typeof File<"u"&&sh.call(File)==="[object FileConstructor]";function gs(r){return Ix&&(r instanceof ArrayBuffer||Sx(r))||Ax&&r instanceof Blob||Tx&&r instanceof File}function ao(r,t){if(!r||typeof r!="object")return!1;if(Array.isArray(r)){for(let e=0,n=r.length;e<n;e++)if(ao(r[e]))return!0;return!1}if(gs(r))return!0;if(r.toJSON&&typeof r.toJSON=="function"&&arguments.length===1)return ao(r.toJSON(),!0);for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e)&&ao(r[e]))return!0;return!1}function Dx(r){const t=[],e=r.data,n=r;return n.data=ia(e,t),n.attachments=t.length,{packet:n,buffers:t}}function ia(r,t){if(!r)return r;if(gs(r)){const e={_placeholder:!0,num:t.length};return t.push(r),e}else if(Array.isArray(r)){const e=new Array(r.length);for(let n=0;n<r.length;n++)e[n]=ia(r[n],t);return e}else if(typeof r=="object"&&!(r instanceof Date)){const e={};for(const n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=ia(r[n],t));return e}return r}function Nx(r,t){return r.data=aa(r.data,t),delete r.attachments,r}function aa(r,t){if(!r)return r;if(r&&r._placeholder===!0){if(typeof r.num=="number"&&r.num>=0&&r.num<t.length)return t[r.num];throw new Error("illegal attachments")}else if(Array.isArray(r))for(let e=0;e<r.length;e++)r[e]=aa(r[e],t);else if(typeof r=="object")for(const e in r)Object.prototype.hasOwnProperty.call(r,e)&&(r[e]=aa(r[e],t));return r}const Fx=["connect","connect_error","disconnect","disconnecting","newListener","removeListener"],Px=5;var pe;(function(r){r[r.CONNECT=0]="CONNECT",r[r.DISCONNECT=1]="DISCONNECT",r[r.EVENT=2]="EVENT",r[r.ACK=3]="ACK",r[r.CONNECT_ERROR=4]="CONNECT_ERROR",r[r.BINARY_EVENT=5]="BINARY_EVENT",r[r.BINARY_ACK=6]="BINARY_ACK"})(pe||(pe={}));class Ox{constructor(t){this.replacer=t}encode(t){return(t.type===pe.EVENT||t.type===pe.ACK)&&ao(t)?this.encodeAsBinary({type:t.type===pe.EVENT?pe.BINARY_EVENT:pe.BINARY_ACK,nsp:t.nsp,data:t.data,id:t.id}):[this.encodeAsString(t)]}encodeAsString(t){let e=""+t.type;return(t.type===pe.BINARY_EVENT||t.type===pe.BINARY_ACK)&&(e+=t.attachments+"-"),t.nsp&&t.nsp!=="/"&&(e+=t.nsp+","),t.id!=null&&(e+=t.id),t.data!=null&&(e+=JSON.stringify(t.data,this.replacer)),e}encodeAsBinary(t){const e=Dx(t),n=this.encodeAsString(e.packet),o=e.buffers;return o.unshift(n),o}}function Ru(r){return Object.prototype.toString.call(r)==="[object Object]"}class ys extends Pe{constructor(t){super(),this.reviver=t}add(t){let e;if(typeof t=="string"){if(this.reconstructor)throw new Error("got plaintext data when reconstructing a packet");e=this.decodeString(t);const n=e.type===pe.BINARY_EVENT;n||e.type===pe.BINARY_ACK?(e.type=n?pe.EVENT:pe.ACK,this.reconstructor=new Mx(e),e.attachments===0&&super.emitReserved("decoded",e)):super.emitReserved("decoded",e)}else if(gs(t)||t.base64)if(this.reconstructor)e=this.reconstructor.takeBinaryData(t),e&&(this.reconstructor=null,super.emitReserved("decoded",e));else throw new Error("got binary data when not reconstructing a packet");else throw new Error("Unknown type: "+t)}decodeString(t){let e=0;const n={type:Number(t.charAt(0))};if(pe[n.type]===void 0)throw new Error("unknown packet type "+n.type);if(n.type===pe.BINARY_EVENT||n.type===pe.BINARY_ACK){const i=e+1;for(;t.charAt(++e)!=="-"&&e!=t.length;);const a=t.substring(i,e);if(a!=Number(a)||t.charAt(e)!=="-")throw new Error("Illegal attachments");n.attachments=Number(a)}if(t.charAt(e+1)==="/"){const i=e+1;for(;++e&&!(t.charAt(e)===","||e===t.length););n.nsp=t.substring(i,e)}else n.nsp="/";const o=t.charAt(e+1);if(o!==""&&Number(o)==o){const i=e+1;for(;++e;){const a=t.charAt(e);if(a==null||Number(a)!=a){--e;break}if(e===t.length)break}n.id=Number(t.substring(i,e+1))}if(t.charAt(++e)){const i=this.tryParse(t.substr(e));if(ys.isPayloadValid(n.type,i))n.data=i;else throw new Error("invalid payload")}return n}tryParse(t){try{return JSON.parse(t,this.reviver)}catch{return!1}}static isPayloadValid(t,e){switch(t){case pe.CONNECT:return Ru(e);case pe.DISCONNECT:return e===void 0;case pe.CONNECT_ERROR:return typeof e=="string"||Ru(e);case pe.EVENT:case pe.BINARY_EVENT:return Array.isArray(e)&&(typeof e[0]=="number"||typeof e[0]=="string"&&Fx.indexOf(e[0])===-1);case pe.ACK:case pe.BINARY_ACK:return Array.isArray(e)}}destroy(){this.reconstructor&&(this.reconstructor.finishedReconstruction(),this.reconstructor=null)}}class Mx{constructor(t){this.packet=t,this.buffers=[],this.reconPack=t}takeBinaryData(t){if(this.buffers.push(t),this.buffers.length===this.reconPack.attachments){const e=Nx(this.reconPack,this.buffers);return this.finishedReconstruction(),e}return null}finishedReconstruction(){this.reconPack=null,this.buffers=[]}}const Bx=Object.freeze(Object.defineProperty({__proto__:null,Decoder:ys,Encoder:Ox,get PacketType(){return pe},protocol:Px},Symbol.toStringTag,{value:"Module"}));function _t(r,t,e){return r.on(t,e),function(){r.off(t,e)}}const Lx=Object.freeze({connect:1,connect_error:1,disconnect:1,disconnecting:1,newListener:1,removeListener:1});class uh extends Pe{constructor(t,e,n){super(),this.connected=!1,this.recovered=!1,this.receiveBuffer=[],this.sendBuffer=[],this._queue=[],this._queueSeq=0,this.ids=0,this.acks={},this.flags={},this.io=t,this.nsp=e,n&&n.auth&&(this.auth=n.auth),this._opts=Object.assign({},n),this.io._autoConnect&&this.open()}get disconnected(){return!this.connected}subEvents(){if(this.subs)return;const t=this.io;this.subs=[_t(t,"open",this.onopen.bind(this)),_t(t,"packet",this.onpacket.bind(this)),_t(t,"error",this.onerror.bind(this)),_t(t,"close",this.onclose.bind(this))]}get active(){return!!this.subs}connect(){return this.connected?this:(this.subEvents(),this.io._reconnecting||this.io.open(),this.io._readyState==="open"&&this.onopen(),this)}open(){return this.connect()}send(...t){return t.unshift("message"),this.emit.apply(this,t),this}emit(t,...e){var n,o,i;if(Lx.hasOwnProperty(t))throw new Error('"'+t.toString()+'" is a reserved event name');if(e.unshift(t),this._opts.retries&&!this.flags.fromQueue&&!this.flags.volatile)return this._addToQueue(e),this;const a={type:pe.EVENT,data:e};if(a.options={},a.options.compress=this.flags.compress!==!1,typeof e[e.length-1]=="function"){const l=this.ids++,h=e.pop();this._registerAckCallback(l,h),a.id=l}const s=(o=(n=this.io.engine)===null||n===void 0?void 0:n.transport)===null||o===void 0?void 0:o.writable,u=this.connected&&!(!((i=this.io.engine)===null||i===void 0)&&i._hasPingExpired());return this.flags.volatile&&!s||(u?(this.notifyOutgoingListeners(a),this.packet(a)):this.sendBuffer.push(a)),this.flags={},this}_registerAckCallback(t,e){var n;const o=(n=this.flags.timeout)!==null&&n!==void 0?n:this._opts.ackTimeout;if(o===void 0){this.acks[t]=e;return}const i=this.io.setTimeoutFn(()=>{delete this.acks[t];for(let s=0;s<this.sendBuffer.length;s++)this.sendBuffer[s].id===t&&this.sendBuffer.splice(s,1);e.call(this,new Error("operation has timed out"))},o),a=(...s)=>{this.io.clearTimeoutFn(i),e.apply(this,s)};a.withError=!0,this.acks[t]=a}emitWithAck(t,...e){return new Promise((n,o)=>{const i=(a,s)=>a?o(a):n(s);i.withError=!0,e.push(i),this.emit(t,...e)})}_addToQueue(t){let e;typeof t[t.length-1]=="function"&&(e=t.pop());const n={id:this._queueSeq++,tryCount:0,pending:!1,args:t,flags:Object.assign({fromQueue:!0},this.flags)};t.push((o,...i)=>n!==this._queue[0]?void 0:(o!==null?n.tryCount>this._opts.retries&&(this._queue.shift(),e&&e(o)):(this._queue.shift(),e&&e(null,...i)),n.pending=!1,this._drainQueue())),this._queue.push(n),this._drainQueue()}_drainQueue(t=!1){if(!this.connected||this._queue.length===0)return;const e=this._queue[0];e.pending&&!t||(e.pending=!0,e.tryCount++,this.flags=e.flags,this.emit.apply(this,e.args))}packet(t){t.nsp=this.nsp,this.io._packet(t)}onopen(){typeof this.auth=="function"?this.auth(t=>{this._sendConnectPacket(t)}):this._sendConnectPacket(this.auth)}_sendConnectPacket(t){this.packet({type:pe.CONNECT,data:this._pid?Object.assign({pid:this._pid,offset:this._lastOffset},t):t})}onerror(t){this.connected||this.emitReserved("connect_error",t)}onclose(t,e){this.connected=!1,delete this.id,this.emitReserved("disconnect",t,e),this._clearAcks()}_clearAcks(){Object.keys(this.acks).forEach(t=>{if(!this.sendBuffer.some(n=>String(n.id)===t)){const n=this.acks[t];delete this.acks[t],n.withError&&n.call(this,new Error("socket has been disconnected"))}})}onpacket(t){if(t.nsp===this.nsp)switch(t.type){case pe.CONNECT:t.data&&t.data.sid?this.onconnect(t.data.sid,t.data.pid):this.emitReserved("connect_error",new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));break;case pe.EVENT:case pe.BINARY_EVENT:this.onevent(t);break;case pe.ACK:case pe.BINARY_ACK:this.onack(t);break;case pe.DISCONNECT:this.ondisconnect();break;case pe.CONNECT_ERROR:this.destroy();const n=new Error(t.data.message);n.data=t.data.data,this.emitReserved("connect_error",n);break}}onevent(t){const e=t.data||[];t.id!=null&&e.push(this.ack(t.id)),this.connected?this.emitEvent(e):this.receiveBuffer.push(Object.freeze(e))}emitEvent(t){if(this._anyListeners&&this._anyListeners.length){const e=this._anyListeners.slice();for(const n of e)n.apply(this,t)}super.emit.apply(this,t),this._pid&&t.length&&typeof t[t.length-1]=="string"&&(this._lastOffset=t[t.length-1])}ack(t){const e=this;let n=!1;return function(...o){n||(n=!0,e.packet({type:pe.ACK,id:t,data:o}))}}onack(t){const e=this.acks[t.id];typeof e=="function"&&(delete this.acks[t.id],e.withError&&t.data.unshift(null),e.apply(this,t.data))}onconnect(t,e){this.id=t,this.recovered=e&&this._pid===e,this._pid=e,this.connected=!0,this.emitBuffered(),this.emitReserved("connect"),this._drainQueue(!0)}emitBuffered(){this.receiveBuffer.forEach(t=>this.emitEvent(t)),this.receiveBuffer=[],this.sendBuffer.forEach(t=>{this.notifyOutgoingListeners(t),this.packet(t)}),this.sendBuffer=[]}ondisconnect(){this.destroy(),this.onclose("io server disconnect")}destroy(){this.subs&&(this.subs.forEach(t=>t()),this.subs=void 0),this.io._destroy(this)}disconnect(){return this.connected&&this.packet({type:pe.DISCONNECT}),this.destroy(),this.connected&&this.onclose("io client disconnect"),this}close(){return this.disconnect()}compress(t){return this.flags.compress=t,this}get volatile(){return this.flags.volatile=!0,this}timeout(t){return this.flags.timeout=t,this}onAny(t){return this._anyListeners=this._anyListeners||[],this._anyListeners.push(t),this}prependAny(t){return this._anyListeners=this._anyListeners||[],this._anyListeners.unshift(t),this}offAny(t){if(!this._anyListeners)return this;if(t){const e=this._anyListeners;for(let n=0;n<e.length;n++)if(t===e[n])return e.splice(n,1),this}else this._anyListeners=[];return this}listenersAny(){return this._anyListeners||[]}onAnyOutgoing(t){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.push(t),this}prependAnyOutgoing(t){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.unshift(t),this}offAnyOutgoing(t){if(!this._anyOutgoingListeners)return this;if(t){const e=this._anyOutgoingListeners;for(let n=0;n<e.length;n++)if(t===e[n])return e.splice(n,1),this}else this._anyOutgoingListeners=[];return this}listenersAnyOutgoing(){return this._anyOutgoingListeners||[]}notifyOutgoingListeners(t){if(this._anyOutgoingListeners&&this._anyOutgoingListeners.length){const e=this._anyOutgoingListeners.slice();for(const n of e)n.apply(this,t.data)}}}function ur(r){r=r||{},this.ms=r.min||100,this.max=r.max||1e4,this.factor=r.factor||2,this.jitter=r.jitter>0&&r.jitter<=1?r.jitter:0,this.attempts=0}ur.prototype.duration=function(){var r=this.ms*Math.pow(this.factor,this.attempts++);if(this.jitter){var t=Math.random(),e=Math.floor(t*this.jitter*r);r=Math.floor(t*10)&1?r+e:r-e}return Math.min(r,this.max)|0};ur.prototype.reset=function(){this.attempts=0};ur.prototype.setMin=function(r){this.ms=r};ur.prototype.setMax=function(r){this.max=r};ur.prototype.setJitter=function(r){this.jitter=r};class sa extends Pe{constructor(t,e){var n;super(),this.nsps={},this.subs=[],t&&typeof t=="object"&&(e=t,t=void 0),e=e||{},e.path=e.path||"/socket.io",this.opts=e,$o(this,e),this.reconnection(e.reconnection!==!1),this.reconnectionAttempts(e.reconnectionAttempts||1/0),this.reconnectionDelay(e.reconnectionDelay||1e3),this.reconnectionDelayMax(e.reconnectionDelayMax||5e3),this.randomizationFactor((n=e.randomizationFactor)!==null&&n!==void 0?n:.5),this.backoff=new ur({min:this.reconnectionDelay(),max:this.reconnectionDelayMax(),jitter:this.randomizationFactor()}),this.timeout(e.timeout==null?2e4:e.timeout),this._readyState="closed",this.uri=t;const o=e.parser||Bx;this.encoder=new o.Encoder,this.decoder=new o.Decoder,this._autoConnect=e.autoConnect!==!1,this._autoConnect&&this.open()}reconnection(t){return arguments.length?(this._reconnection=!!t,t||(this.skipReconnect=!0),this):this._reconnection}reconnectionAttempts(t){return t===void 0?this._reconnectionAttempts:(this._reconnectionAttempts=t,this)}reconnectionDelay(t){var e;return t===void 0?this._reconnectionDelay:(this._reconnectionDelay=t,(e=this.backoff)===null||e===void 0||e.setMin(t),this)}randomizationFactor(t){var e;return t===void 0?this._randomizationFactor:(this._randomizationFactor=t,(e=this.backoff)===null||e===void 0||e.setJitter(t),this)}reconnectionDelayMax(t){var e;return t===void 0?this._reconnectionDelayMax:(this._reconnectionDelayMax=t,(e=this.backoff)===null||e===void 0||e.setMax(t),this)}timeout(t){return arguments.length?(this._timeout=t,this):this._timeout}maybeReconnectOnOpen(){!this._reconnecting&&this._reconnection&&this.backoff.attempts===0&&this.reconnect()}open(t){if(~this._readyState.indexOf("open"))return this;this.engine=new Rx(this.uri,this.opts);const e=this.engine,n=this;this._readyState="opening",this.skipReconnect=!1;const o=_t(e,"open",function(){n.onopen(),t&&t()}),i=s=>{this.cleanup(),this._readyState="closed",this.emitReserved("error",s),t?t(s):this.maybeReconnectOnOpen()},a=_t(e,"error",i);if(this._timeout!==!1){const s=this._timeout,u=this.setTimeoutFn(()=>{o(),i(new Error("timeout")),e.close()},s);this.opts.autoUnref&&u.unref(),this.subs.push(()=>{this.clearTimeoutFn(u)})}return this.subs.push(o),this.subs.push(a),this}connect(t){return this.open(t)}onopen(){this.cleanup(),this._readyState="open",this.emitReserved("open");const t=this.engine;this.subs.push(_t(t,"ping",this.onping.bind(this)),_t(t,"data",this.ondata.bind(this)),_t(t,"error",this.onerror.bind(this)),_t(t,"close",this.onclose.bind(this)),_t(this.decoder,"decoded",this.ondecoded.bind(this)))}onping(){this.emitReserved("ping")}ondata(t){try{this.decoder.add(t)}catch(e){this.onclose("parse error",e)}}ondecoded(t){Xo(()=>{this.emitReserved("packet",t)},this.setTimeoutFn)}onerror(t){this.emitReserved("error",t)}socket(t,e){let n=this.nsps[t];return n?this._autoConnect&&!n.active&&n.connect():(n=new uh(this,t,e),this.nsps[t]=n),n}_destroy(t){const e=Object.keys(this.nsps);for(const n of e)if(this.nsps[n].active)return;this._close()}_packet(t){const e=this.encoder.encode(t);for(let n=0;n<e.length;n++)this.engine.write(e[n],t.options)}cleanup(){this.subs.forEach(t=>t()),this.subs.length=0,this.decoder.destroy()}_close(){this.skipReconnect=!0,this._reconnecting=!1,this.onclose("forced close")}disconnect(){return this._close()}onclose(t,e){var n;this.cleanup(),(n=this.engine)===null||n===void 0||n.close(),this.backoff.reset(),this._readyState="closed",this.emitReserved("close",t,e),this._reconnection&&!this.skipReconnect&&this.reconnect()}reconnect(){if(this._reconnecting||this.skipReconnect)return this;const t=this;if(this.backoff.attempts>=this._reconnectionAttempts)this.backoff.reset(),this.emitReserved("reconnect_failed"),this._reconnecting=!1;else{const e=this.backoff.duration();this._reconnecting=!0;const n=this.setTimeoutFn(()=>{t.skipReconnect||(this.emitReserved("reconnect_attempt",t.backoff.attempts),!t.skipReconnect&&t.open(o=>{o?(t._reconnecting=!1,t.reconnect(),this.emitReserved("reconnect_error",o)):t.onreconnect()}))},e);this.opts.autoUnref&&n.unref(),this.subs.push(()=>{this.clearTimeoutFn(n)})}}onreconnect(){const t=this.backoff.attempts;this._reconnecting=!1,this.backoff.reset(),this.emitReserved("reconnect",t)}}const pr={};function so(r,t){typeof r=="object"&&(t=r,r=void 0),t=t||{};const e=kx(r,t.path||"/socket.io"),n=e.source,o=e.id,i=e.path,a=pr[o]&&i in pr[o].nsps,s=t.forceNew||t["force new connection"]||t.multiplex===!1||a;let u;return s?u=new sa(n,t):(pr[o]||(pr[o]=new sa(n,t)),u=pr[o]),e.query&&!t.query&&(t.query=e.queryKey),u.socket(e.path,t)}Object.assign(so,{Manager:sa,Socket:uh,io:so,connect:so});const ku="https://raw.githubusercontent.com/justadudewhohacks/face-api.js/master/weights",eo=yh,ch=xh,Cn=bh;let tt,Xe,lh,ct;const hh=document.createElement("style");hh.textContent=`
  .toggle-camera-btn {
    position: fixed;
    bottom: 20px;
    left: 20px;
    z-index: 10000;
    padding: 10px;
    background: #2196F3;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
    box-shadow: 0 2px 5px rgba(0,0,0,0.2);
    width: 45px;
    height: 45px;
    transition: all 0.3s ease;
    overflow: hidden;
    white-space: nowrap;
    /* Center icon */
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .toggle-camera-btn:hover {
    background: #1976D2;
    width: 180px;
    justify-content: flex-start;
  }
  .toggle-camera-btn:hover::after {
    content: " Show Face Detector";
    margin-left: 5px;
  }
`;document.head.appendChild(hh);const Wx=async()=>{const r=document.createElement("button");return r.className="toggle-camera-btn",r.style.marginBottom="10px",r.innerHTML="📷",document.body.appendChild(r),await Promise.all([navigator.mediaDevices.getUserMedia({video:!0}).then(t=>{console.log("stream");const e=document.createElement("div");e.id="cameraDiv",e.style.display="none",tt=document.createElement("video"),tt.id="videoRecognition",Xe=document.createElement("canvas"),lh=Xe.getContext("2d"),ct=document.createElement("canvas"),e.style.position="fixed",e.style.width="auto",e.style.zIndex=99,e.style.cursor="move",Xe.style.position=ct.style.position="absolute",Xe.style.top=Xe.style.left=ct.style.top=ct.style.left=0;const n=650;Xe.width=Xe.height=ct.width=ct.height=n,tt.width=tt.height=n,Xe.style.visibility="hidden",tt.style.width=`${n}px`,tt.style.height="100%",ct.style.pointerEvents="none",tt.autoplay=!0,tt.srcObject=t,r.addEventListener("click",()=>{const s=e.style.display==="none";e.style.display=s?"block":"none",s?(r.style.width="160px",r.innerHTML="Hide Face Detector",Ux(tt,ct)):(r.style.width="45px",r.innerHTML="📷")}),document.body.appendChild(e),e.appendChild(tt),e.appendChild(Xe),e.appendChild(ct);let o=!1,i=0,a=0;e.addEventListener("mousedown",s=>{o=!0,i=s.clientX-e.getBoundingClientRect().left,a=s.clientY-e.getBoundingClientRect().top}),window.addEventListener("mousemove",s=>{o&&(e.style.right="auto",e.style.bottom="auto",e.style.left=`${s.clientX-i}px`,e.style.top=`${s.clientY-a}px`)}),window.addEventListener("mouseup",()=>{o=!1})}),V0(ku),z0(ku)]),{video:tt,canvas:Xe,canvas2:ct}};function Ux(r,t){const e=t.getContext("2d");async function n(){if(r.readyState===4){const o=await Xl(r,new es).withFaceExpressions();e.clearRect(0,0,t.width,t.height),o&&o.length>0&&o.forEach(i=>{const a=i.detection.box;if(e.strokeStyle="#0051ff",e.lineWidth=2,e.strokeRect(a.x,a.y,a.width,a.height),i.expressions){const s=i.expressions;let u=Object.keys(s).reduce((h,f)=>s[h]>s[f]?h:f);e.fillStyle="rgba(0, 0, 0, 0.7)";const c=`${u}: ${Math.round(s[u]*100)}%`,l=e.measureText(c).width;e.fillRect(a.x,a.y-20,l+8,20),e.fillStyle="white",e.font="16px Arial",e.fillText(c,a.x+4,a.y-5)}})}requestAnimationFrame(n)}n()}const Vx=()=>{const r=document.getElementById("cameraDiv");r&&r.remove(),Wx()};let Di=!1;function Hn(r,t=5e3){if(!Di){Di=!0;var e=document.createElement("div");e.className="toast",e.textContent=r,e.style.position="absolute",e.style.top="20px",e.style.left="50%",e.style.transform="translateX(-50%)",e.style.minWidth="250px",e.style.backgroundColor="#4CAF50",e.style.color="#fff",e.style.textAlign="center",e.style.borderRadius="8px",e.style.padding="10px",e.style.zIndex="9999",e.style.fontSize="18px",e.style.transition=`opacity ${t}ms linear`,e.style.opacity="1",document.body.appendChild(e),setTimeout(()=>{e.style.opacity="0"},t),setTimeout(()=>{e.parentNode.removeChild(e),Di=!1},t*2)}}let xe=null,Jt=null,Ni="",Iu=null;function fh(r="https://media.giphy.com/media/3o6Zt6MLC5bXgRvlIs/giphy.gif",t=!0,e=1e4){if(r===Ni)return;if(Ni=r,!xe){xe=document.createElement("div"),xe.id="gifAlertContainer",xe.style.position="fixed",xe.style.bottom="0",xe.style.right="0",xe.style.width="250px",xe.style.height="200px",xe.style.zIndex="9999",xe.style.borderRadius="30px",xe.style.cursor="move",Jt=document.createElement("img"),Jt.id="gifAlert",Jt.style.width="100%",Jt.style.height="100%",Jt.style.objectFit="cover",Jt.style.borderRadius="10px",xe.appendChild(Jt),document.body.appendChild(xe);let o=!1,i=!1,a=0,s=0;xe.addEventListener("mousedown",c=>{c.offsetX>xe.offsetWidth-10&&c.offsetY>xe.offsetHeight-10?i=!0:o=!0,a=c.clientX-xe.getBoundingClientRect().left,s=c.clientY-xe.getBoundingClientRect().top,c.preventDefault()});const u=c=>{o?(xe.style.right="auto",xe.style.bottom="auto",xe.style.left=`${c.clientX-a}px`,xe.style.top=`${c.clientY-s}px`):i&&(xe.style.width=`${c.clientX-xe.getBoundingClientRect().left}px`,xe.style.height=`${c.clientY-xe.getBoundingClientRect().top}px`)};window.addEventListener("mousemove",c=>{requestAnimationFrame(()=>u(c))}),window.addEventListener("mouseup",()=>{o=!1,i=!1})}const n=new Image;if(n.src=r,n.onload=()=>{Jt.src=r},!t)return setTimeout(()=>{xe.style.display="none",xe=null,Jt=null,Ni=""},e),xe.style.display="block",xe}function to(r){clearTimeout(debounceTimer),debounceTimer=setTimeout(()=>{zx(r)},1e3)}function zx(r){He.get(`${ch}/facial-interventions/emotion`,{params:{emotion:r,gender:state.agent}}).then(t=>{const e=t.data.data.url;fh(e,!0)})}const Gx=async()=>{const r=await chrome.storage.sync.get(),t=r.isStart;console.log("state",r);const e=r.isStartTextIntervention;await chrome.storage.sync.set({isStart:r.isStart??!1,isStartTextIntervention:r.isStartTextIntervention??!1,user:r.user||{},meetingCode:r.meetingCode||null}),chrome.storage.sync.get().then(n=>{console.log("FER:: Chrome storage",n)}).then(()=>{console.log("FER:: State",r),Su()}),Su(),(t||e||r.isStartFacialIntervention||r.isStartOpenAiIntervention||r.isStartLlamaAiIntervention)&&Vx()},Su=async()=>{const t=(await chrome.storage.sync.get()).meetingCode,e=so("http://localhost:8080");e.on("connect",()=>{console.log("FER:: Connected to socket io",t),e.emit("join",`student-${t}`),chrome.storage.sync.set({isSocketConnected:!0})}),e.on("WELCOME_MESSAGE",n=>{console.log(n)}),e.on("join",n=>{console.log("FER:: Joined room:",n)}),e.onAny((n,...o)=>{console.log(`FER:: Received event: ${n}`,o)}),e.on("connect_error",n=>{console.log("FER:: Connection error",n),console.log("FER:: Error description",n.description),console.log("err context",n.context)}),e.on("RECOGNITION_STATUS",async n=>{console.log("FER:: Recognition status",n),n==="started"&&Hx(n)})},Hx=async r=>{console.log("FER:: Predict called with status:",r);const t=await chrome.storage.sync.get();await chrome.storage.local.get(),t.meetingCode;const e=await chrome.storage.local.get("user-storage"),n=JSON.parse(e["user-storage"]),o=n.state.profile,i=t.reinforcementType,a=t.meetingName,s=t.meetingSubject,u=o.fullname.split(" ")[0],c=n.state.accessToken;if(t.isStart||t.isStartTextIntervention||t.isStartOpenAiIntervention||t.isStartLlamaAiIntervention||t.isStartFacialIntervention){const l=await Xl(tt,new es).withFaceExpressions();if(console.log("FER:: Face API Result",l),!l.length)console.log("FER:: Face not detected");else{lh.drawImage(tt,0,0,Xe.width,Xe.height),_y(ct,tt);const h=$l(l,tt),f=.05;vy(ct,h),Ay(ct,h,f),`${t.user.token}`;let p;const d=t.meetingCode;p={...no(l[0].expressions),predict:Au(l[0].expressions),meetingCode:d};let m={},v=null,g=null;if(t.isStartTextIntervention){m=no(l[0].expressions);const x=["angry","disgusted","fearful","sad"],b=w=>w.charAt(0).toUpperCase()+w.slice(1),y=.5;if(t.selectedRecognitionModel==="EMOVALARO")He.post(eo,{image:Xe.toDataURL("image/jpeg").split(",")[1]},{headers:{Authorization:`Bearer ${c}`}}).then(({data:w})=>{const{emotion:_}=w;console.log("valaro emotion",_);const S=["Anger","Disgust","Fear","Sadness"];for(const E of S)if(_===E){const R=b(E);if(R===v&&g)continue;let D=R.toLowerCase();D==="sadness"?D="sad":D==="fearful"?D="fear":D==="anger"&&(D="angry"),He.get(`${Cn}/affective-intervention-text/random`,{params:{emotion:D,category:i.toLowerCase(),name:u,emotionValue:w.emotion_perc,meetingCode:t.meetingCode},headers:{Authorization:`Bearer ${c}`}}).then(A=>{console.log("res intervention",A);const M=A.data.text,O=M.length>80?1e4:5e3;Hn(M,O),v=R,g&&clearTimeout(g),g=setTimeout(()=>{v=null},3e4)})}const I={arousal:w.arousal,valence:w.valence,emotion:w.emotion,emotionPercentages:w.emotion_perc,meetingCode:t.meetingCode,userId:o==null?void 0:o.id};He.post(`${Cn}/valence-arousal/create`,I,{headers:{Authorization:`Bearer ${n.state.accessToken}`}}),console.log("valaroBodyPayload",I),to(_)});else for(const w of x)if(m[w]>y){const _=w==="disgusted"?"Disgust":w==="fearful"?"Fear":w;if(_===v&&g)continue;He.get(`${Cn}/affective-intervention-text/random`,{params:{emotion:_.toLowerCase(),category:i.toLowerCase(),name:u,emotionValue:m[w],meetingCode:t.meetingCode},headers:{Authorization:`Bearer ${c}`}}).then(S=>{console.log("res intervention",S);const I=S.data.text,E=I.length>80?1e4:5e3;Hn(I,E),v=_,g&&clearTimeout(g),g=setTimeout(()=>{v=null},6e4)})}}if(t.isStartOpenAiIntervention){m=no(l[0].expressions);const x=["angry","disgusted","fearful","sad","happy","surprised"],b=["attention","relevance","confidence","satisfaction"],y=_=>_.charAt(0).toUpperCase()+_.slice(1),w=.5;if(t.selectedRecognitionModel==="EMOVALARO")He.post(eo,{image:Xe.toDataURL("image/jpeg").split(",")[1]},{headers:{Authorization:`Bearer ${c}`}}).then(({data:_})=>{const{emotion:S}=_;console.log("valaro emotion",S);const I=["Anger","Disgust","Fear","Sadness","Happy","Surprised"];for(const R of I)if(S===R){const D=y(R);if(D===v&&g)continue;let A=D.toLowerCase();A==="sadness"?A="sad":A==="fearful"?A="fear":A==="anger"&&(A="angry"),He.get(`${xs}`,{params:{emotion:A,classname:a,username:u,subject:s,arcsmodel:b[Math.floor(Math.random()*b.length)],reinforcement:i.toLowerCase()},headers:{Authorization:`Bearer ${c}`}}).then(M=>{const O=M.data.response,B=O.length>80?1e4:5e3;Hn(O,B),v=D,g&&clearTimeout(g),g=setTimeout(()=>{v=null},B)}).catch(M=>{console.error("OpenAI API call failed",M)})}const E={arousal:_.arousal,valence:_.valence,emotion:_.emotion,emotionPercentages:_.emotion_perc,meetingCode:t.meetingCode,userId:o==null?void 0:o.id};He.post(`${Cn}/valence-arousal/create`,E,{headers:{Authorization:`Bearer ${n.state.accessToken}`}}),console.log("valaroBodyPayload",E),to(S)});else for(const _ of x)if(m[_]>w){const S=y(_);if(S===v&&g)continue;He.get(`${xs}`,{params:{emotion:S.toLowerCase(),classname:a,username:u,subject:s,arcsmodel:b[Math.floor(Math.random()*b.length)],reinforcement:i.toLowerCase()},headers:{Authorization:`Bearer ${c}`}}).then(I=>{const E=I.data.response,R=E.length>80?1e4:5e3;Hn(E,R),v=S,g&&clearTimeout(g),g=setTimeout(()=>{v=null},R)}).catch(I=>{console.error("OpenAI API call failed",I)})}}if(t.isStartLlamaAiIntervention){m=no(l[0].expressions);const x=["angry","disgusted","fearful","sad","happy","surprised"],b=["attention","relevance","confidence","satisfaction"],y=_=>_.charAt(0).toUpperCase()+_.slice(1),w=.5;if(t.selectedRecognitionModel==="EMOVALARO")He.post(eo,{image:Xe.toDataURL("image/jpeg").split(",")[1]},{headers:{Authorization:`Bearer ${c}`}}).then(({data:_})=>{const{emotion:S}=_;console.log("valaro emotion",S);const I=["Anger","Disgust","Fear","Sadness","Happy","Surprised"];for(const R of I)if(S===R){const D=y(R);if(D===v&&g)continue;let A=D.toLowerCase();A==="sadness"?A="sad":A==="fearful"?A="fear":A==="anger"&&(A="angry"),He.post(`${bs}`,{emosi:A,penguatan:i.toLowerCase(),pendekatan:b[Math.floor(Math.random()*b.length)]},{headers:{Authorization:`Bearer ${c}`}}).then(M=>{const O=M.data.response,B=O.length>80?1e4:5e3;Hn(O,B),v=D,g&&clearTimeout(g),g=setTimeout(()=>{v=null},B)}).catch(M=>{console.error("OpenAI API call failed",M)})}const E={arousal:_.arousal,valence:_.valence,emotion:_.emotion,emotionPercentages:_.emotion_perc,meetingCode:t.meetingCode,userId:o==null?void 0:o.id};He.post(`${Cn}/valence-arousal/create`,E,{headers:{Authorization:`Bearer ${n.state.accessToken}`}}),console.log("valaroBodyPayload",E),to(S)});else for(const _ of x)if(m[_]>w){const S=y(_);if(S===v&&g)continue;He.post(`${bs}`,{emosi:mappedEmotion,penguatan:i.toLowerCase(),pendekatan:b[Math.floor(Math.random()*b.length)]},{headers:{Authorization:`Bearer ${c}`}}).then(I=>{const E=I.data.result;console.log("res intervention",I);const R=E.length>80?1e4:5e3;Hn(E,R),v=S,g&&clearTimeout(g),g=setTimeout(()=>{v=null},R)}).catch(I=>{console.error("OpenAI API call failed",I)})}}if(t.isStartFacialIntervention){const x={angry:"Anger2Neutral",disgusted:"Disgusted2Neutral",fearful:"Fearful2Neutral",sad:"Sad2Happy"},b={happy:"Happy",surprised:"Neutral2Surprised",neutral:"Neutral"},y=Au(l[0].expressions),w=x[y],_=b[y],S=t.agent;console.log("selectedAgent",S);let I=w||_;console.log("mappedEmotion",I),I&&(clearTimeout(Iu),Iu=setTimeout(()=>{He.get(`${ch}/facial-interventions/emotion`,{params:{emotion:I,gender:S}}).then(E=>{const R=E.data.data.url;fh(R,!0)})},800))}t.selectedRecognitionModel==="FACE_API"?(!t.isStartTextIntervention||!t.isStartFacialIntervention)&&He.post(`${Cn}/recognition/create`,p,{headers:{Authorization:`Bearer ${c}`}}):t.selectedRecognitionModel==="EMOVALARO"&&!t.isStartTextIntervention&&!t.isStartFacialIntervention&&He.post(eo,{image:Xe.toDataURL("image/jpeg").split(",")[1]},{headers:{Authorization:`Bearer ${c}`}}).then(({data:x})=>{const{emotion:b}=x,y={arousal:x.arousal,valence:x.valence,emotion:x.emotion,emotionPercentages:x.emotion_perc,meetingCode:t.meetingCode,userId:o==null?void 0:o.id};He.post(`${Cn}/valence-arousal/create`,y,{headers:{Authorization:`Bearer ${n.state.accessToken}`}}),console.log("valaroBodyPayload",y),to(b)})}}},Au=r=>{const t=Math.max(...Object.values(r));return Object.keys(r).find(e=>r[e]===t)},no=r=>Object.assign(...Object.entries(r).map(t=>({[t[0]]:Number(t[1].toFixed(2))})));location.pathname.includes("_")?location.pathname.substring(7):location.pathname.substring(1);Gx()});export default qx();
