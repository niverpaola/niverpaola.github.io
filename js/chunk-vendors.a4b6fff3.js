(self["webpackChunkgameparty"]=self["webpackChunkgameparty"]||[]).push([[998],{9662:function(t,e,n){var r=n(614),i=n(6330),o=TypeError;t.exports=function(t){if(r(t))return t;throw o(i(t)+" is not a function")}},6077:function(t,e,n){var r=n(614),i=String,o=TypeError;t.exports=function(t){if("object"==typeof t||r(t))return t;throw o("Can't set "+i(t)+" as a prototype")}},1223:function(t,e,n){var r=n(5112),i=n(30),o=n(3070).f,s=r("unscopables"),a=Array.prototype;void 0==a[s]&&o(a,s,{configurable:!0,value:i(null)}),t.exports=function(t){a[s][t]=!0}},5787:function(t,e,n){var r=n(7976),i=TypeError;t.exports=function(t,e){if(r(e,t))return t;throw i("Incorrect invocation")}},9670:function(t,e,n){var r=n(111),i=String,o=TypeError;t.exports=function(t){if(r(t))return t;throw o(i(t)+" is not an object")}},4019:function(t){t.exports="undefined"!=typeof ArrayBuffer&&"undefined"!=typeof DataView},260:function(t,e,n){"use strict";var r,i,o,s=n(4019),a=n(9781),c=n(7854),l=n(614),u=n(111),h=n(2597),d=n(648),f=n(6330),p=n(8880),g=n(8052),m=n(3070).f,_=n(7976),v=n(9518),y=n(7674),b=n(5112),w=n(9289),C=n(9909),E=C.enforce,T=C.get,I=c.Int8Array,S=I&&I.prototype,k=c.Uint8ClampedArray,x=k&&k.prototype,R=I&&v(I),A=S&&v(S),P=Object.prototype,N=c.TypeError,O=b("toStringTag"),D=w("TYPED_ARRAY_TAG"),L="TypedArrayConstructor",M=s&&!!y&&"Opera"!==d(c.opera),F=!1,j={Int8Array:1,Uint8Array:1,Uint8ClampedArray:1,Int16Array:2,Uint16Array:2,Int32Array:4,Uint32Array:4,Float32Array:4,Float64Array:8},U={BigInt64Array:8,BigUint64Array:8},$=function(t){if(!u(t))return!1;var e=d(t);return"DataView"===e||h(j,e)||h(U,e)},q=function(t){var e=v(t);if(u(e)){var n=T(e);return n&&h(n,L)?n[L]:q(e)}},B=function(t){if(!u(t))return!1;var e=d(t);return h(j,e)||h(U,e)},V=function(t){if(B(t))return t;throw N("Target is not a typed array")},H=function(t){if(l(t)&&(!y||_(R,t)))return t;throw N(f(t)+" is not a typed array constructor")},W=function(t,e,n,r){if(a){if(n)for(var i in j){var o=c[i];if(o&&h(o.prototype,t))try{delete o.prototype[t]}catch(s){try{o.prototype[t]=e}catch(l){}}}A[t]&&!n||g(A,t,n?e:M&&S[t]||e,r)}},z=function(t,e,n){var r,i;if(a){if(y){if(n)for(r in j)if(i=c[r],i&&h(i,t))try{delete i[t]}catch(o){}if(R[t]&&!n)return;try{return g(R,t,n?e:M&&R[t]||e)}catch(o){}}for(r in j)i=c[r],!i||i[t]&&!n||g(i,t,e)}};for(r in j)i=c[r],o=i&&i.prototype,o?E(o)[L]=i:M=!1;for(r in U)i=c[r],o=i&&i.prototype,o&&(E(o)[L]=i);if((!M||!l(R)||R===Function.prototype)&&(R=function(){throw N("Incorrect invocation")},M))for(r in j)c[r]&&y(c[r],R);if((!M||!A||A===P)&&(A=R.prototype,M))for(r in j)c[r]&&y(c[r].prototype,A);if(M&&v(x)!==A&&y(x,A),a&&!h(A,O))for(r in F=!0,m(A,O,{get:function(){return u(this)?this[D]:void 0}}),j)c[r]&&p(c[r],D,r);t.exports={NATIVE_ARRAY_BUFFER_VIEWS:M,TYPED_ARRAY_TAG:F&&D,aTypedArray:V,aTypedArrayConstructor:H,exportTypedArrayMethod:W,exportTypedArrayStaticMethod:z,getTypedArrayConstructor:q,isView:$,isTypedArray:B,TypedArray:R,TypedArrayPrototype:A}},1318:function(t,e,n){var r=n(5656),i=n(1400),o=n(6244),s=function(t){return function(e,n,s){var a,c=r(e),l=o(c),u=i(s,l);if(t&&n!=n){while(l>u)if(a=c[u++],a!=a)return!0}else for(;l>u;u++)if((t||u in c)&&c[u]===n)return t||u||0;return!t&&-1}};t.exports={includes:s(!0),indexOf:s(!1)}},9671:function(t,e,n){var r=n(9974),i=n(8361),o=n(7908),s=n(6244),a=function(t){var e=1==t;return function(n,a,c){var l,u,h=o(n),d=i(h),f=r(a,c),p=s(d);while(p-- >0)if(l=d[p],u=f(l,p,h),u)switch(t){case 0:return l;case 1:return p}return e?-1:void 0}};t.exports={findLast:a(0),findLastIndex:a(1)}},4326:function(t,e,n){var r=n(1702),i=r({}.toString),o=r("".slice);t.exports=function(t){return o(i(t),8,-1)}},648:function(t,e,n){var r=n(1694),i=n(614),o=n(4326),s=n(5112),a=s("toStringTag"),c=Object,l="Arguments"==o(function(){return arguments}()),u=function(t,e){try{return t[e]}catch(n){}};t.exports=r?o:function(t){var e,n,r;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=u(e=c(t),a))?n:l?o(e):"Object"==(r=o(e))&&i(e.callee)?"Arguments":r}},7741:function(t,e,n){var r=n(1702),i=Error,o=r("".replace),s=function(t){return String(i(t).stack)}("zxcasd"),a=/\n\s*at [^:]*:[^\n]*/,c=a.test(s);t.exports=function(t,e){if(c&&"string"==typeof t&&!i.prepareStackTrace)while(e--)t=o(t,a,"");return t}},9920:function(t,e,n){var r=n(2597),i=n(3887),o=n(1236),s=n(3070);t.exports=function(t,e,n){for(var a=i(e),c=s.f,l=o.f,u=0;u<a.length;u++){var h=a[u];r(t,h)||n&&r(n,h)||c(t,h,l(e,h))}}},8544:function(t,e,n){var r=n(7293);t.exports=!r((function(){function t(){}return t.prototype.constructor=null,Object.getPrototypeOf(new t)!==t.prototype}))},8880:function(t,e,n){var r=n(9781),i=n(3070),o=n(9114);t.exports=r?function(t,e,n){return i.f(t,e,o(1,n))}:function(t,e,n){return t[e]=n,t}},9114:function(t){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},8052:function(t,e,n){var r=n(614),i=n(3070),o=n(6339),s=n(3072);t.exports=function(t,e,n,a){a||(a={});var c=a.enumerable,l=void 0!==a.name?a.name:e;if(r(n)&&o(n,l,a),a.global)c?t[e]=n:s(e,n);else{try{a.unsafe?t[e]&&(c=!0):delete t[e]}catch(u){}c?t[e]=n:i.f(t,e,{value:n,enumerable:!1,configurable:!a.nonConfigurable,writable:!a.nonWritable})}return t}},3072:function(t,e,n){var r=n(7854),i=Object.defineProperty;t.exports=function(t,e){try{i(r,t,{value:e,configurable:!0,writable:!0})}catch(n){r[t]=e}return e}},9781:function(t,e,n){var r=n(7293);t.exports=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},317:function(t,e,n){var r=n(7854),i=n(111),o=r.document,s=i(o)&&i(o.createElement);t.exports=function(t){return s?o.createElement(t):{}}},3678:function(t){t.exports={IndexSizeError:{s:"INDEX_SIZE_ERR",c:1,m:1},DOMStringSizeError:{s:"DOMSTRING_SIZE_ERR",c:2,m:0},HierarchyRequestError:{s:"HIERARCHY_REQUEST_ERR",c:3,m:1},WrongDocumentError:{s:"WRONG_DOCUMENT_ERR",c:4,m:1},InvalidCharacterError:{s:"INVALID_CHARACTER_ERR",c:5,m:1},NoDataAllowedError:{s:"NO_DATA_ALLOWED_ERR",c:6,m:0},NoModificationAllowedError:{s:"NO_MODIFICATION_ALLOWED_ERR",c:7,m:1},NotFoundError:{s:"NOT_FOUND_ERR",c:8,m:1},NotSupportedError:{s:"NOT_SUPPORTED_ERR",c:9,m:1},InUseAttributeError:{s:"INUSE_ATTRIBUTE_ERR",c:10,m:1},InvalidStateError:{s:"INVALID_STATE_ERR",c:11,m:1},SyntaxError:{s:"SYNTAX_ERR",c:12,m:1},InvalidModificationError:{s:"INVALID_MODIFICATION_ERR",c:13,m:1},NamespaceError:{s:"NAMESPACE_ERR",c:14,m:1},InvalidAccessError:{s:"INVALID_ACCESS_ERR",c:15,m:1},ValidationError:{s:"VALIDATION_ERR",c:16,m:0},TypeMismatchError:{s:"TYPE_MISMATCH_ERR",c:17,m:1},SecurityError:{s:"SECURITY_ERR",c:18,m:1},NetworkError:{s:"NETWORK_ERR",c:19,m:1},AbortError:{s:"ABORT_ERR",c:20,m:1},URLMismatchError:{s:"URL_MISMATCH_ERR",c:21,m:1},QuotaExceededError:{s:"QUOTA_EXCEEDED_ERR",c:22,m:1},TimeoutError:{s:"TIMEOUT_ERR",c:23,m:1},InvalidNodeTypeError:{s:"INVALID_NODE_TYPE_ERR",c:24,m:1},DataCloneError:{s:"DATA_CLONE_ERR",c:25,m:1}}},8113:function(t,e,n){var r=n(5005);t.exports=r("navigator","userAgent")||""},7392:function(t,e,n){var r,i,o=n(7854),s=n(8113),a=o.process,c=o.Deno,l=a&&a.versions||c&&c.version,u=l&&l.v8;u&&(r=u.split("."),i=r[0]>0&&r[0]<4?1:+(r[0]+r[1])),!i&&s&&(r=s.match(/Edge\/(\d+)/),(!r||r[1]>=74)&&(r=s.match(/Chrome\/(\d+)/),r&&(i=+r[1]))),t.exports=i},748:function(t){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},2914:function(t,e,n){var r=n(7293),i=n(9114);t.exports=!r((function(){var t=Error("a");return!("stack"in t)||(Object.defineProperty(t,"stack",i(1,7)),7!==t.stack)}))},2109:function(t,e,n){var r=n(7854),i=n(1236).f,o=n(8880),s=n(8052),a=n(3072),c=n(9920),l=n(4705);t.exports=function(t,e){var n,u,h,d,f,p,g=t.target,m=t.global,_=t.stat;if(u=m?r:_?r[g]||a(g,{}):(r[g]||{}).prototype,u)for(h in e){if(f=e[h],t.dontCallGetSet?(p=i(u,h),d=p&&p.value):d=u[h],n=l(m?h:g+(_?".":"#")+h,t.forced),!n&&void 0!==d){if(typeof f==typeof d)continue;c(f,d)}(t.sham||d&&d.sham)&&o(f,"sham",!0),s(u,h,f,t)}}},7293:function(t){t.exports=function(t){try{return!!t()}catch(e){return!0}}},2104:function(t,e,n){var r=n(4374),i=Function.prototype,o=i.apply,s=i.call;t.exports="object"==typeof Reflect&&Reflect.apply||(r?s.bind(o):function(){return s.apply(o,arguments)})},9974:function(t,e,n){var r=n(1702),i=n(9662),o=n(4374),s=r(r.bind);t.exports=function(t,e){return i(t),void 0===e?t:o?s(t,e):function(){return t.apply(e,arguments)}}},4374:function(t,e,n){var r=n(7293);t.exports=!r((function(){var t=function(){}.bind();return"function"!=typeof t||t.hasOwnProperty("prototype")}))},6916:function(t,e,n){var r=n(4374),i=Function.prototype.call;t.exports=r?i.bind(i):function(){return i.apply(i,arguments)}},6530:function(t,e,n){var r=n(9781),i=n(2597),o=Function.prototype,s=r&&Object.getOwnPropertyDescriptor,a=i(o,"name"),c=a&&"something"===function(){}.name,l=a&&(!r||r&&s(o,"name").configurable);t.exports={EXISTS:a,PROPER:c,CONFIGURABLE:l}},1702:function(t,e,n){var r=n(4374),i=Function.prototype,o=i.bind,s=i.call,a=r&&o.bind(s,s);t.exports=r?function(t){return t&&a(t)}:function(t){return t&&function(){return s.apply(t,arguments)}}},5005:function(t,e,n){var r=n(7854),i=n(614),o=function(t){return i(t)?t:void 0};t.exports=function(t,e){return arguments.length<2?o(r[t]):r[t]&&r[t][e]}},8173:function(t,e,n){var r=n(9662);t.exports=function(t,e){var n=t[e];return null==n?void 0:r(n)}},7854:function(t,e,n){var r=function(t){return t&&t.Math==Math&&t};t.exports=r("object"==typeof globalThis&&globalThis)||r("object"==typeof window&&window)||r("object"==typeof self&&self)||r("object"==typeof n.g&&n.g)||function(){return this}()||Function("return this")()},2597:function(t,e,n){var r=n(1702),i=n(7908),o=r({}.hasOwnProperty);t.exports=Object.hasOwn||function(t,e){return o(i(t),e)}},3501:function(t){t.exports={}},490:function(t,e,n){var r=n(5005);t.exports=r("document","documentElement")},4664:function(t,e,n){var r=n(9781),i=n(7293),o=n(317);t.exports=!r&&!i((function(){return 7!=Object.defineProperty(o("div"),"a",{get:function(){return 7}}).a}))},8361:function(t,e,n){var r=n(1702),i=n(7293),o=n(4326),s=Object,a=r("".split);t.exports=i((function(){return!s("z").propertyIsEnumerable(0)}))?function(t){return"String"==o(t)?a(t,""):s(t)}:s},9587:function(t,e,n){var r=n(614),i=n(111),o=n(7674);t.exports=function(t,e,n){var s,a;return o&&r(s=e.constructor)&&s!==n&&i(a=s.prototype)&&a!==n.prototype&&o(t,a),t}},2788:function(t,e,n){var r=n(1702),i=n(614),o=n(5465),s=r(Function.toString);i(o.inspectSource)||(o.inspectSource=function(t){return s(t)}),t.exports=o.inspectSource},8340:function(t,e,n){var r=n(111),i=n(8880);t.exports=function(t,e){r(e)&&"cause"in e&&i(t,"cause",e.cause)}},9909:function(t,e,n){var r,i,o,s=n(8536),a=n(7854),c=n(1702),l=n(111),u=n(8880),h=n(2597),d=n(5465),f=n(6200),p=n(3501),g="Object already initialized",m=a.TypeError,_=a.WeakMap,v=function(t){return o(t)?i(t):r(t,{})},y=function(t){return function(e){var n;if(!l(e)||(n=i(e)).type!==t)throw m("Incompatible receiver, "+t+" required");return n}};if(s||d.state){var b=d.state||(d.state=new _),w=c(b.get),C=c(b.has),E=c(b.set);r=function(t,e){if(C(b,t))throw new m(g);return e.facade=t,E(b,t,e),e},i=function(t){return w(b,t)||{}},o=function(t){return C(b,t)}}else{var T=f("state");p[T]=!0,r=function(t,e){if(h(t,T))throw new m(g);return e.facade=t,u(t,T,e),e},i=function(t){return h(t,T)?t[T]:{}},o=function(t){return h(t,T)}}t.exports={set:r,get:i,has:o,enforce:v,getterFor:y}},614:function(t){t.exports=function(t){return"function"==typeof t}},4705:function(t,e,n){var r=n(7293),i=n(614),o=/#|\.prototype\./,s=function(t,e){var n=c[a(t)];return n==u||n!=l&&(i(e)?r(e):!!e)},a=s.normalize=function(t){return String(t).replace(o,".").toLowerCase()},c=s.data={},l=s.NATIVE="N",u=s.POLYFILL="P";t.exports=s},111:function(t,e,n){var r=n(614);t.exports=function(t){return"object"==typeof t?null!==t:r(t)}},1913:function(t){t.exports=!1},2190:function(t,e,n){var r=n(5005),i=n(614),o=n(7976),s=n(3307),a=Object;t.exports=s?function(t){return"symbol"==typeof t}:function(t){var e=r("Symbol");return i(e)&&o(e.prototype,a(t))}},6244:function(t,e,n){var r=n(7466);t.exports=function(t){return r(t.length)}},6339:function(t,e,n){var r=n(7293),i=n(614),o=n(2597),s=n(9781),a=n(6530).CONFIGURABLE,c=n(2788),l=n(9909),u=l.enforce,h=l.get,d=Object.defineProperty,f=s&&!r((function(){return 8!==d((function(){}),"length",{value:8}).length})),p=String(String).split("String"),g=t.exports=function(t,e,n){"Symbol("===String(e).slice(0,7)&&(e="["+String(e).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),n&&n.getter&&(e="get "+e),n&&n.setter&&(e="set "+e),(!o(t,"name")||a&&t.name!==e)&&(s?d(t,"name",{value:e,configurable:!0}):t.name=e),f&&n&&o(n,"arity")&&t.length!==n.arity&&d(t,"length",{value:n.arity});try{n&&o(n,"constructor")&&n.constructor?s&&d(t,"prototype",{writable:!1}):t.prototype&&(t.prototype=void 0)}catch(i){}var r=u(t);return o(r,"source")||(r.source=p.join("string"==typeof e?e:"")),t};Function.prototype.toString=g((function(){return i(this)&&h(this).source||c(this)}),"toString")},4758:function(t){var e=Math.ceil,n=Math.floor;t.exports=Math.trunc||function(t){var r=+t;return(r>0?n:e)(r)}},133:function(t,e,n){var r=n(7392),i=n(7293);t.exports=!!Object.getOwnPropertySymbols&&!i((function(){var t=Symbol();return!String(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&r&&r<41}))},8536:function(t,e,n){var r=n(7854),i=n(614),o=n(2788),s=r.WeakMap;t.exports=i(s)&&/native code/.test(o(s))},6277:function(t,e,n){var r=n(1340);t.exports=function(t,e){return void 0===t?arguments.length<2?"":e:r(t)}},30:function(t,e,n){var r,i=n(9670),o=n(6048),s=n(748),a=n(3501),c=n(490),l=n(317),u=n(6200),h=">",d="<",f="prototype",p="script",g=u("IE_PROTO"),m=function(){},_=function(t){return d+p+h+t+d+"/"+p+h},v=function(t){t.write(_("")),t.close();var e=t.parentWindow.Object;return t=null,e},y=function(){var t,e=l("iframe"),n="java"+p+":";return e.style.display="none",c.appendChild(e),e.src=String(n),t=e.contentWindow.document,t.open(),t.write(_("document.F=Object")),t.close(),t.F},b=function(){try{r=new ActiveXObject("htmlfile")}catch(e){}b="undefined"!=typeof document?document.domain&&r?v(r):y():v(r);var t=s.length;while(t--)delete b[f][s[t]];return b()};a[g]=!0,t.exports=Object.create||function(t,e){var n;return null!==t?(m[f]=i(t),n=new m,m[f]=null,n[g]=t):n=b(),void 0===e?n:o.f(n,e)}},6048:function(t,e,n){var r=n(9781),i=n(3353),o=n(3070),s=n(9670),a=n(5656),c=n(1956);e.f=r&&!i?Object.defineProperties:function(t,e){s(t);var n,r=a(e),i=c(e),l=i.length,u=0;while(l>u)o.f(t,n=i[u++],r[n]);return t}},3070:function(t,e,n){var r=n(9781),i=n(4664),o=n(3353),s=n(9670),a=n(4948),c=TypeError,l=Object.defineProperty,u=Object.getOwnPropertyDescriptor,h="enumerable",d="configurable",f="writable";e.f=r?o?function(t,e,n){if(s(t),e=a(e),s(n),"function"===typeof t&&"prototype"===e&&"value"in n&&f in n&&!n[f]){var r=u(t,e);r&&r[f]&&(t[e]=n.value,n={configurable:d in n?n[d]:r[d],enumerable:h in n?n[h]:r[h],writable:!1})}return l(t,e,n)}:l:function(t,e,n){if(s(t),e=a(e),s(n),i)try{return l(t,e,n)}catch(r){}if("get"in n||"set"in n)throw c("Accessors not supported");return"value"in n&&(t[e]=n.value),t}},1236:function(t,e,n){var r=n(9781),i=n(6916),o=n(5296),s=n(9114),a=n(5656),c=n(4948),l=n(2597),u=n(4664),h=Object.getOwnPropertyDescriptor;e.f=r?h:function(t,e){if(t=a(t),e=c(e),u)try{return h(t,e)}catch(n){}if(l(t,e))return s(!i(o.f,t,e),t[e])}},8006:function(t,e,n){var r=n(6324),i=n(748),o=i.concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,o)}},5181:function(t,e){e.f=Object.getOwnPropertySymbols},9518:function(t,e,n){var r=n(2597),i=n(614),o=n(7908),s=n(6200),a=n(8544),c=s("IE_PROTO"),l=Object,u=l.prototype;t.exports=a?l.getPrototypeOf:function(t){var e=o(t);if(r(e,c))return e[c];var n=e.constructor;return i(n)&&e instanceof n?n.prototype:e instanceof l?u:null}},7976:function(t,e,n){var r=n(1702);t.exports=r({}.isPrototypeOf)},6324:function(t,e,n){var r=n(1702),i=n(2597),o=n(5656),s=n(1318).indexOf,a=n(3501),c=r([].push);t.exports=function(t,e){var n,r=o(t),l=0,u=[];for(n in r)!i(a,n)&&i(r,n)&&c(u,n);while(e.length>l)i(r,n=e[l++])&&(~s(u,n)||c(u,n));return u}},1956:function(t,e,n){var r=n(6324),i=n(748);t.exports=Object.keys||function(t){return r(t,i)}},5296:function(t,e){"use strict";var n={}.propertyIsEnumerable,r=Object.getOwnPropertyDescriptor,i=r&&!n.call({1:2},1);e.f=i?function(t){var e=r(this,t);return!!e&&e.enumerable}:n},7674:function(t,e,n){var r=n(1702),i=n(9670),o=n(6077);t.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var t,e=!1,n={};try{t=r(Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set),t(n,[]),e=n instanceof Array}catch(s){}return function(n,r){return i(n),o(r),e?t(n,r):n.__proto__=r,n}}():void 0)},2140:function(t,e,n){var r=n(6916),i=n(614),o=n(111),s=TypeError;t.exports=function(t,e){var n,a;if("string"===e&&i(n=t.toString)&&!o(a=r(n,t)))return a;if(i(n=t.valueOf)&&!o(a=r(n,t)))return a;if("string"!==e&&i(n=t.toString)&&!o(a=r(n,t)))return a;throw s("Can't convert object to primitive value")}},3887:function(t,e,n){var r=n(5005),i=n(1702),o=n(8006),s=n(5181),a=n(9670),c=i([].concat);t.exports=r("Reflect","ownKeys")||function(t){var e=o.f(a(t)),n=s.f;return n?c(e,n(t)):e}},2626:function(t,e,n){var r=n(3070).f;t.exports=function(t,e,n){n in t||r(t,n,{configurable:!0,get:function(){return e[n]},set:function(t){e[n]=t}})}},4488:function(t){var e=TypeError;t.exports=function(t){if(void 0==t)throw e("Can't call method on "+t);return t}},6200:function(t,e,n){var r=n(2309),i=n(9289),o=r("keys");t.exports=function(t){return o[t]||(o[t]=i(t))}},5465:function(t,e,n){var r=n(7854),i=n(3072),o="__core-js_shared__",s=r[o]||i(o,{});t.exports=s},2309:function(t,e,n){var r=n(1913),i=n(5465);(t.exports=function(t,e){return i[t]||(i[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.23.3",mode:r?"pure":"global",copyright:"© 2014-2022 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.23.3/LICENSE",source:"https://github.com/zloirock/core-js"})},1400:function(t,e,n){var r=n(9303),i=Math.max,o=Math.min;t.exports=function(t,e){var n=r(t);return n<0?i(n+e,0):o(n,e)}},5656:function(t,e,n){var r=n(8361),i=n(4488);t.exports=function(t){return r(i(t))}},9303:function(t,e,n){var r=n(4758);t.exports=function(t){var e=+t;return e!==e||0===e?0:r(e)}},7466:function(t,e,n){var r=n(9303),i=Math.min;t.exports=function(t){return t>0?i(r(t),9007199254740991):0}},7908:function(t,e,n){var r=n(4488),i=Object;t.exports=function(t){return i(r(t))}},4590:function(t,e,n){var r=n(3002),i=RangeError;t.exports=function(t,e){var n=r(t);if(n%e)throw i("Wrong offset");return n}},3002:function(t,e,n){var r=n(9303),i=RangeError;t.exports=function(t){var e=r(t);if(e<0)throw i("The argument can't be less than 0");return e}},7593:function(t,e,n){var r=n(6916),i=n(111),o=n(2190),s=n(8173),a=n(2140),c=n(5112),l=TypeError,u=c("toPrimitive");t.exports=function(t,e){if(!i(t)||o(t))return t;var n,c=s(t,u);if(c){if(void 0===e&&(e="default"),n=r(c,t,e),!i(n)||o(n))return n;throw l("Can't convert object to primitive value")}return void 0===e&&(e="number"),a(t,e)}},4948:function(t,e,n){var r=n(7593),i=n(2190);t.exports=function(t){var e=r(t,"string");return i(e)?e:e+""}},1694:function(t,e,n){var r=n(5112),i=r("toStringTag"),o={};o[i]="z",t.exports="[object z]"===String(o)},1340:function(t,e,n){var r=n(648),i=String;t.exports=function(t){if("Symbol"===r(t))throw TypeError("Cannot convert a Symbol value to a string");return i(t)}},6330:function(t){var e=String;t.exports=function(t){try{return e(t)}catch(n){return"Object"}}},9289:function(t,e,n){var r=n(1702),i=0,o=Math.random(),s=r(1..toString);t.exports=function(t){return"Symbol("+(void 0===t?"":t)+")_"+s(++i+o,36)}},3307:function(t,e,n){var r=n(133);t.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},3353:function(t,e,n){var r=n(9781),i=n(7293);t.exports=r&&i((function(){return 42!=Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}))},5112:function(t,e,n){var r=n(7854),i=n(2309),o=n(2597),s=n(9289),a=n(133),c=n(3307),l=i("wks"),u=r.Symbol,h=u&&u["for"],d=c?u:u&&u.withoutSetter||s;t.exports=function(t){if(!o(l,t)||!a&&"string"!=typeof l[t]){var e="Symbol."+t;a&&o(u,t)?l[t]=u[t]:l[t]=c&&h?h(e):d(e)}return l[t]}},9191:function(t,e,n){"use strict";var r=n(5005),i=n(2597),o=n(8880),s=n(7976),a=n(7674),c=n(9920),l=n(2626),u=n(9587),h=n(6277),d=n(8340),f=n(7741),p=n(2914),g=n(9781),m=n(1913);t.exports=function(t,e,n,_){var v="stackTraceLimit",y=_?2:1,b=t.split("."),w=b[b.length-1],C=r.apply(null,b);if(C){var E=C.prototype;if(!m&&i(E,"cause")&&delete E.cause,!n)return C;var T=r("Error"),I=e((function(t,e){var n=h(_?e:t,void 0),r=_?new C(t):new C;return void 0!==n&&o(r,"message",n),p&&o(r,"stack",f(r.stack,2)),this&&s(E,this)&&u(r,this,I),arguments.length>y&&d(r,arguments[y]),r}));if(I.prototype=E,"Error"!==w?a?a(I,T):c(I,T,{name:!0}):g&&v in C&&(l(I,C,v),l(I,C,"prepareStackTrace")),c(I,C),!m)try{E.name!==w&&o(E,"name",w),E.constructor=I}catch(S){}return I}}},2262:function(t,e,n){"use strict";var r=n(2109),i=n(7908),o=n(6244),s=n(9303),a=n(1223);r({target:"Array",proto:!0},{at:function(t){var e=i(this),n=o(e),r=s(t),a=r>=0?r:n+r;return a<0||a>=n?void 0:e[a]}}),a("at")},6699:function(t,e,n){"use strict";var r=n(2109),i=n(1318).includes,o=n(7293),s=n(1223),a=o((function(){return!Array(1).includes()}));r({target:"Array",proto:!0,forced:a},{includes:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}}),s("includes")},1703:function(t,e,n){var r=n(2109),i=n(7854),o=n(2104),s=n(9191),a="WebAssembly",c=i[a],l=7!==Error("e",{cause:7}).cause,u=function(t,e){var n={};n[t]=s(t,e,l),r({global:!0,constructor:!0,arity:1,forced:l},n)},h=function(t,e){if(c&&c[t]){var n={};n[t]=s(a+"."+t,e,l),r({target:a,stat:!0,constructor:!0,arity:1,forced:l},n)}};u("Error",(function(t){return function(e){return o(t,this,arguments)}})),u("EvalError",(function(t){return function(e){return o(t,this,arguments)}})),u("RangeError",(function(t){return function(e){return o(t,this,arguments)}})),u("ReferenceError",(function(t){return function(e){return o(t,this,arguments)}})),u("SyntaxError",(function(t){return function(e){return o(t,this,arguments)}})),u("TypeError",(function(t){return function(e){return o(t,this,arguments)}})),u("URIError",(function(t){return function(e){return o(t,this,arguments)}})),h("CompileError",(function(t){return function(e){return o(t,this,arguments)}})),h("LinkError",(function(t){return function(e){return o(t,this,arguments)}})),h("RuntimeError",(function(t){return function(e){return o(t,this,arguments)}}))},4506:function(t,e,n){"use strict";var r=n(2109),i=n(1702),o=n(4488),s=n(9303),a=n(1340),c=n(7293),l=i("".charAt),u=c((function(){return"\ud842"!=="𠮷".at(-2)}));r({target:"String",proto:!0,forced:u},{at:function(t){var e=a(o(this)),n=e.length,r=s(t),i=r>=0?r:n+r;return i<0||i>=n?void 0:l(e,i)}})},8675:function(t,e,n){"use strict";var r=n(260),i=n(6244),o=n(9303),s=r.aTypedArray,a=r.exportTypedArrayMethod;a("at",(function(t){var e=s(this),n=i(e),r=o(t),a=r>=0?r:n+r;return a<0||a>=n?void 0:e[a]}))},2958:function(t,e,n){"use strict";var r=n(260),i=n(9671).findLastIndex,o=r.aTypedArray,s=r.exportTypedArrayMethod;s("findLastIndex",(function(t){return i(o(this),t,arguments.length>1?arguments[1]:void 0)}))},3408:function(t,e,n){"use strict";var r=n(260),i=n(9671).findLast,o=r.aTypedArray,s=r.exportTypedArrayMethod;s("findLast",(function(t){return i(o(this),t,arguments.length>1?arguments[1]:void 0)}))},3462:function(t,e,n){"use strict";var r=n(7854),i=n(6916),o=n(260),s=n(6244),a=n(4590),c=n(7908),l=n(7293),u=r.RangeError,h=r.Int8Array,d=h&&h.prototype,f=d&&d.set,p=o.aTypedArray,g=o.exportTypedArrayMethod,m=!l((function(){var t=new Uint8ClampedArray(2);return i(f,t,{length:1,0:3},1),3!==t[1]})),_=m&&o.NATIVE_ARRAY_BUFFER_VIEWS&&l((function(){var t=new h(2);return t.set(1),t.set("2",1),0!==t[0]||2!==t[1]}));g("set",(function(t){p(this);var e=a(arguments.length>1?arguments[1]:void 0,1),n=c(t);if(m)return i(f,this,n,e);var r=this.length,o=s(n),l=0;if(o+e>r)throw u("Wrong length");while(l<o)this[e+l]=n[l++]}),!m||_)},1118:function(t,e,n){n(2958)},7380:function(t,e,n){n(3408)},2801:function(t,e,n){"use strict";var r=n(2109),i=n(5005),o=n(9114),s=n(3070).f,a=n(2597),c=n(5787),l=n(9587),u=n(6277),h=n(3678),d=n(7741),f=n(1913),p="DOMException",g=i("Error"),m=i(p),_=function(){c(this,v);var t=arguments.length,e=u(t<1?void 0:arguments[0]),n=u(t<2?void 0:arguments[1],"Error"),r=new m(e,n),i=g(e);return i.name=p,s(r,"stack",o(1,d(i.stack,1))),l(r,this,_),r},v=_.prototype=m.prototype,y="stack"in g(p),b="stack"in new m(1,2),w=y&&!b;r({global:!0,constructor:!0,forced:f||w},{DOMException:w?_:m});var C=i(p),E=C.prototype;if(E.constructor!==C)for(var T in f||s(E,"constructor",o(1,C)),h)if(a(h,T)){var I=h[T],S=I.s;a(C,S)||s(C,S,o(6,I.c))}},223:function(t,e,n){"use strict";n.d(e,{BH:function(){return g},DV:function(){return O},GJ:function(){return P},L:function(){return u},LL:function(){return T},Pz:function(){return x},UI:function(){return L},US:function(){return c},Yr:function(){return y},ZR:function(){return E},b$:function(){return v},cI:function(){return k},dS:function(){return q},eu:function(){return w},g5:function(){return o},gK:function(){return $},gQ:function(){return U},h$:function(){return l},hl:function(){return b},hu:function(){return i},m9:function(){return V},p$:function(){return d},r3:function(){return N},uI:function(){return _},ug:function(){return B},vZ:function(){return M},w9:function(){return A},xO:function(){return j},xb:function(){return D}});n(1703),n(2801),n(6699);
/**
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
 */
const r={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"},i=function(t,e){if(!t)throw o(e)},o=function(t){return new Error("Firebase Database ("+r.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)},s=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=63&i|128):55296===(64512&i)&&r+1<t.length&&56320===(64512&t.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&t.charCodeAt(++r)),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=63&i|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=63&i|128)}return e},a=function(t){const e=[];let n=0,r=0;while(n<t.length){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=t[n++];e[r++]=String.fromCharCode((31&i)<<6|63&o)}else if(i>239&&i<365){const o=t[n++],s=t[n++],a=t[n++],c=((7&i)<<18|(63&o)<<12|(63&s)<<6|63&a)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(1023&c))}else{const o=t[n++],s=t[n++];e[r++]=String.fromCharCode((15&i)<<12|(63&o)<<6|63&s)}}return e.join("")},c={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"===typeof atob,encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const e=t[i],o=i+1<t.length,s=o?t[i+1]:0,a=i+2<t.length,c=a?t[i+2]:0,l=e>>2,u=(3&e)<<4|s>>4;let h=(15&s)<<2|c>>6,d=63&c;a||(d=64,o||(h=64)),r.push(n[l],n[u],n[h],n[d])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(s(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):a(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const e=n[t.charAt(i++)],o=i<t.length,s=o?n[t.charAt(i)]:0;++i;const a=i<t.length,c=a?n[t.charAt(i)]:64;++i;const l=i<t.length,u=l?n[t.charAt(i)]:64;if(++i,null==e||null==s||null==c||null==u)throw Error();const h=e<<2|s>>4;if(r.push(h),64!==c){const t=s<<4&240|c>>2;if(r.push(t),64!==u){const t=c<<6&192|u;r.push(t)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},l=function(t){const e=s(t);return c.encodeByteArray(e,!0)},u=function(t){return l(t).replace(/\./g,"")},h=function(t){try{return c.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
/**
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
 */
/**
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
 */
function d(t){return f(void 0,t)}function f(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:void 0===t&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)e.hasOwnProperty(n)&&p(n)&&(t[n]=f(t[n],e[n]));return t}function p(t){return"__proto__"!==t}
/**
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
 */class g{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}wrapCallback(t){return(e,n)=>{e?this.reject(e):this.resolve(n),"function"===typeof t&&(this.promise.catch((()=>{})),1===t.length?t(e):t(e,n))}}}
/**
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
 */
/**
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
 */
function m(){return"undefined"!==typeof navigator&&"string"===typeof navigator["userAgent"]?navigator["userAgent"]:""}function _(){return"undefined"!==typeof window&&!!(window["cordova"]||window["phonegap"]||window["PhoneGap"])&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(m())}function v(){return"object"===typeof navigator&&"ReactNative"===navigator["product"]}function y(){return!0===r.NODE_CLIENT||!0===r.NODE_ADMIN}function b(){return"object"===typeof indexedDB}function w(){return new Promise(((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var t;e((null===(t=i.error)||void 0===t?void 0:t.message)||"")}}catch(n){e(n)}}))}
/**
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
 */
const C="FirebaseError";class E extends Error{constructor(t,e,n){super(e),this.code=t,this.customData=n,this.name=C,Object.setPrototypeOf(this,E.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,T.prototype.create)}}class T{constructor(t,e,n){this.service=t,this.serviceName=e,this.errors=n}create(t,...e){const n=e[0]||{},r=`${this.service}/${t}`,i=this.errors[t],o=i?I(i,n):"Error",s=`${this.serviceName}: ${o} (${r}).`,a=new E(r,s,n);return a}}function I(t,e){return t.replace(S,((t,n)=>{const r=e[n];return null!=r?String(r):`<${n}?>`}))}const S=/\{\$([^}]+)}/g;
/**
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
 */function k(t){return JSON.parse(t)}function x(t){return JSON.stringify(t)}
/**
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
 */const R=function(t){let e={},n={},r={},i="";try{const o=t.split(".");e=k(h(o[0])||""),n=k(h(o[1])||""),i=o[2],r=n["d"]||{},delete n["d"]}catch(o){}return{header:e,claims:n,data:r,signature:i}},A=function(t){const e=R(t),n=e.claims;return!!n&&"object"===typeof n&&n.hasOwnProperty("iat")},P=function(t){const e=R(t).claims;return"object"===typeof e&&!0===e["admin"]};
/**
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
 */
function N(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function O(t,e){return Object.prototype.hasOwnProperty.call(t,e)?t[e]:void 0}function D(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function L(t,e,n){const r={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=e.call(n,t[i],i,t));return r}function M(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const n=t[i],o=e[i];if(F(n)&&F(o)){if(!M(n,o))return!1}else if(n!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function F(t){return null!==t&&"object"===typeof t}
/**
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
 */function j(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach((t=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(t))})):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}
/**
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
 */
class U{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=64,this.pad_[0]=128;for(let t=1;t<this.blockSize;++t)this.pad_[t]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(t,e){e||(e=0);const n=this.W_;if("string"===typeof t)for(let u=0;u<16;u++)n[u]=t.charCodeAt(e)<<24|t.charCodeAt(e+1)<<16|t.charCodeAt(e+2)<<8|t.charCodeAt(e+3),e+=4;else for(let u=0;u<16;u++)n[u]=t[e]<<24|t[e+1]<<16|t[e+2]<<8|t[e+3],e+=4;for(let u=16;u<80;u++){const t=n[u-3]^n[u-8]^n[u-14]^n[u-16];n[u]=4294967295&(t<<1|t>>>31)}let r,i,o=this.chain_[0],s=this.chain_[1],a=this.chain_[2],c=this.chain_[3],l=this.chain_[4];for(let u=0;u<80;u++){u<40?u<20?(r=c^s&(a^c),i=1518500249):(r=s^a^c,i=1859775393):u<60?(r=s&a|c&(s|a),i=2400959708):(r=s^a^c,i=3395469782);const t=(o<<5|o>>>27)+r+l+i+n[u]&4294967295;l=c,c=a,a=4294967295&(s<<30|s>>>2),s=o,o=t}this.chain_[0]=this.chain_[0]+o&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+a&4294967295,this.chain_[3]=this.chain_[3]+c&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(t,e){if(null==t)return;void 0===e&&(e=t.length);const n=e-this.blockSize;let r=0;const i=this.buf_;let o=this.inbuf_;while(r<e){if(0===o)while(r<=n)this.compress_(t,r),r+=this.blockSize;if("string"===typeof t){while(r<e)if(i[o]=t.charCodeAt(r),++o,++r,o===this.blockSize){this.compress_(i),o=0;break}}else while(r<e)if(i[o]=t[r],++o,++r,o===this.blockSize){this.compress_(i),o=0;break}}this.inbuf_=o,this.total_+=e}digest(){const t=[];let e=8*this.total_;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let r=this.blockSize-1;r>=56;r--)this.buf_[r]=255&e,e/=256;this.compress_(this.buf_);let n=0;for(let r=0;r<5;r++)for(let e=24;e>=0;e-=8)t[n]=this.chain_[r]>>e&255,++n;return t}}function $(t,e){return`${t} failed: ${e} argument `}
/**
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
 */
const q=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let o=t.charCodeAt(r);if(o>=55296&&o<=56319){const e=o-55296;r++,i(r<t.length,"Surrogate pair missing trail surrogate.");const n=t.charCodeAt(r)-56320;o=65536+(e<<10)+n}o<128?e[n++]=o:o<2048?(e[n++]=o>>6|192,e[n++]=63&o|128):o<65536?(e[n++]=o>>12|224,e[n++]=o>>6&63|128,e[n++]=63&o|128):(e[n++]=o>>18|240,e[n++]=o>>12&63|128,e[n++]=o>>6&63|128,e[n++]=63&o|128)}return e},B=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};
/**
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
 */
function V(t){return t&&t._delegate?t._delegate:t}},8005:function(t,e,n){"use strict";function r(){return i().__VUE_DEVTOOLS_GLOBAL_HOOK__}function i(){return"undefined"!==typeof navigator&&"undefined"!==typeof window?window:"undefined"!==typeof n.g?n.g:{}}n.d(e,{F1:function(){return f}});const o="function"===typeof Proxy,s="devtools-plugin:setup",a="plugin:settings:set";n(6699);let c,l;function u(){var t;return void 0!==c||("undefined"!==typeof window&&window.performance?(c=!0,l=window.performance):"undefined"!==typeof n.g&&(null===(t=n.g.perf_hooks)||void 0===t?void 0:t.performance)?(c=!0,l=n.g.perf_hooks.performance):c=!1),c}function h(){return u()?l.now():Date.now()}class d{constructor(t,e){this.target=null,this.targetQueue=[],this.onQueue=[],this.plugin=t,this.hook=e;const n={};if(t.settings)for(const s in t.settings){const e=t.settings[s];n[s]=e.defaultValue}const r=`__vue-devtools-plugin-settings__${t.id}`;let i=Object.assign({},n);try{const t=localStorage.getItem(r),e=JSON.parse(t);Object.assign(i,e)}catch(o){}this.fallbacks={getSettings(){return i},setSettings(t){try{localStorage.setItem(r,JSON.stringify(t))}catch(o){}i=t},now(){return h()}},e&&e.on(a,((t,e)=>{t===this.plugin.id&&this.fallbacks.setSettings(e)})),this.proxiedOn=new Proxy({},{get:(t,e)=>this.target?this.target.on[e]:(...t)=>{this.onQueue.push({method:e,args:t})}}),this.proxiedTarget=new Proxy({},{get:(t,e)=>this.target?this.target[e]:"on"===e?this.proxiedOn:Object.keys(this.fallbacks).includes(e)?(...t)=>(this.targetQueue.push({method:e,args:t,resolve:()=>{}}),this.fallbacks[e](...t)):(...t)=>new Promise((n=>{this.targetQueue.push({method:e,args:t,resolve:n})}))})}async setRealTarget(t){this.target=t;for(const e of this.onQueue)this.target.on[e.method](...e.args);for(const e of this.targetQueue)e.resolve(await this.target[e.method](...e.args))}}function f(t,e){const n=t,a=i(),c=r(),l=o&&n.enableEarlyProxy;if(!c||!a.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__&&l){const t=l?new d(n,c):null,r=a.__VUE_DEVTOOLS_PLUGINS__=a.__VUE_DEVTOOLS_PLUGINS__||[];r.push({pluginDescriptor:n,setupFn:e,proxy:t}),t&&e(t.proxiedTarget)}else c.emit(s,t,e)}},4870:function(t,e,n){"use strict";n.d(e,{Bj:function(){return o},Fl:function(){return Vt},IU:function(){return xt},Jd:function(){return E},PG:function(){return Tt},SU:function(){return Ut},Um:function(){return wt},WL:function(){return qt},X$:function(){return k},X3:function(){return kt},XI:function(){return Mt},Xl:function(){return Rt},dq:function(){return Dt},iH:function(){return Lt},j:function(){return I},lk:function(){return T},qj:function(){return bt},qq:function(){return y},yT:function(){return St}});var r=n(7139);let i;class o{constructor(t=!1){this.active=!0,this.effects=[],this.cleanups=[],!t&&i&&(this.parent=i,this.index=(i.scopes||(i.scopes=[])).push(this)-1)}run(t){if(this.active){const e=i;try{return i=this,t()}finally{i=e}}else 0}on(){i=this}off(){i=this.parent}stop(t){if(this.active){let e,n;for(e=0,n=this.effects.length;e<n;e++)this.effects[e].stop();for(e=0,n=this.cleanups.length;e<n;e++)this.cleanups[e]();if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].stop(!0);if(this.parent&&!t){const t=this.parent.scopes.pop();t&&t!==this&&(this.parent.scopes[this.index]=t,t.index=this.index)}this.active=!1}}}function s(t,e=i){e&&e.active&&e.effects.push(t)}const a=t=>{const e=new Set(t);return e.w=0,e.n=0,e},c=t=>(t.w&p)>0,l=t=>(t.n&p)>0,u=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=p},h=t=>{const{deps:e}=t;if(e.length){let n=0;for(let r=0;r<e.length;r++){const i=e[r];c(i)&&!l(i)?i.delete(t):e[n++]=i,i.w&=~p,i.n&=~p}e.length=n}},d=new WeakMap;let f=0,p=1;const g=30;let m;const _=Symbol(""),v=Symbol("");class y{constructor(t,e=null,n){this.fn=t,this.scheduler=e,this.active=!0,this.deps=[],this.parent=void 0,s(this,n)}run(){if(!this.active)return this.fn();let t=m,e=w;while(t){if(t===this)return;t=t.parent}try{return this.parent=m,m=this,w=!0,p=1<<++f,f<=g?u(this):b(this),this.fn()}finally{f<=g&&h(this),p=1<<--f,m=this.parent,w=e,this.parent=void 0,this.deferStop&&this.stop()}}stop(){m===this?this.deferStop=!0:this.active&&(b(this),this.onStop&&this.onStop(),this.active=!1)}}function b(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let w=!0;const C=[];function E(){C.push(w),w=!1}function T(){const t=C.pop();w=void 0===t||t}function I(t,e,n){if(w&&m){let e=d.get(t);e||d.set(t,e=new Map);let r=e.get(n);r||e.set(n,r=a());const i=void 0;S(r,i)}}function S(t,e){let n=!1;f<=g?l(t)||(t.n|=p,n=!c(t)):n=!t.has(m),n&&(t.add(m),m.deps.push(t))}function k(t,e,n,i,o,s){const c=d.get(t);if(!c)return;let l=[];if("clear"===e)l=[...c.values()];else if("length"===n&&(0,r.kJ)(t))c.forEach(((t,e)=>{("length"===e||e>=i)&&l.push(t)}));else switch(void 0!==n&&l.push(c.get(n)),e){case"add":(0,r.kJ)(t)?(0,r.S0)(n)&&l.push(c.get("length")):(l.push(c.get(_)),(0,r._N)(t)&&l.push(c.get(v)));break;case"delete":(0,r.kJ)(t)||(l.push(c.get(_)),(0,r._N)(t)&&l.push(c.get(v)));break;case"set":(0,r._N)(t)&&l.push(c.get(_));break}if(1===l.length)l[0]&&x(l[0]);else{const t=[];for(const e of l)e&&t.push(...e);x(a(t))}}function x(t,e){const n=(0,r.kJ)(t)?t:[...t];for(const r of n)r.computed&&R(r,e);for(const r of n)r.computed||R(r,e)}function R(t,e){(t!==m||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const A=(0,r.fY)("__proto__,__v_isRef,__isVue"),P=new Set(Object.getOwnPropertyNames(Symbol).filter((t=>"arguments"!==t&&"caller"!==t)).map((t=>Symbol[t])).filter(r.yk)),N=F(),O=F(!1,!0),D=F(!0),L=M();function M(){const t={};return["includes","indexOf","lastIndexOf"].forEach((e=>{t[e]=function(...t){const n=xt(this);for(let e=0,i=this.length;e<i;e++)I(n,"get",e+"");const r=n[e](...t);return-1===r||!1===r?n[e](...t.map(xt)):r}})),["push","pop","shift","unshift","splice"].forEach((e=>{t[e]=function(...t){E();const n=xt(this)[e].apply(this,t);return T(),n}})),t}function F(t=!1,e=!1){return function(n,i,o){if("__v_isReactive"===i)return!t;if("__v_isReadonly"===i)return t;if("__v_isShallow"===i)return e;if("__v_raw"===i&&o===(t?e?_t:mt:e?gt:pt).get(n))return n;const s=(0,r.kJ)(n);if(!t&&s&&(0,r.RI)(L,i))return Reflect.get(L,i,o);const a=Reflect.get(n,i,o);return((0,r.yk)(i)?P.has(i):A(i))?a:(t||I(n,"get",i),e?a:Dt(a)?s&&(0,r.S0)(i)?a:a.value:(0,r.Kn)(a)?t?Ct(a):bt(a):a)}}const j=$(),U=$(!0);function $(t=!1){return function(e,n,i,o){let s=e[n];if(It(s)&&Dt(s)&&!Dt(i))return!1;if(!t&&!It(i)&&(St(i)||(i=xt(i),s=xt(s)),!(0,r.kJ)(e)&&Dt(s)&&!Dt(i)))return s.value=i,!0;const a=(0,r.kJ)(e)&&(0,r.S0)(n)?Number(n)<e.length:(0,r.RI)(e,n),c=Reflect.set(e,n,i,o);return e===xt(o)&&(a?(0,r.aU)(i,s)&&k(e,"set",n,i,s):k(e,"add",n,i)),c}}function q(t,e){const n=(0,r.RI)(t,e),i=t[e],o=Reflect.deleteProperty(t,e);return o&&n&&k(t,"delete",e,void 0,i),o}function B(t,e){const n=Reflect.has(t,e);return(0,r.yk)(e)&&P.has(e)||I(t,"has",e),n}function V(t){return I(t,"iterate",(0,r.kJ)(t)?"length":_),Reflect.ownKeys(t)}const H={get:N,set:j,deleteProperty:q,has:B,ownKeys:V},W={get:D,set(t,e){return!0},deleteProperty(t,e){return!0}},z=(0,r.l7)({},H,{get:O,set:U}),G=t=>t,K=t=>Reflect.getPrototypeOf(t);function Y(t,e,n=!1,r=!1){t=t["__v_raw"];const i=xt(t),o=xt(e);n||(e!==o&&I(i,"get",e),I(i,"get",o));const{has:s}=K(i),a=r?G:n?Pt:At;return s.call(i,e)?a(t.get(e)):s.call(i,o)?a(t.get(o)):void(t!==i&&t.get(e))}function J(t,e=!1){const n=this["__v_raw"],r=xt(n),i=xt(t);return e||(t!==i&&I(r,"has",t),I(r,"has",i)),t===i?n.has(t):n.has(t)||n.has(i)}function X(t,e=!1){return t=t["__v_raw"],!e&&I(xt(t),"iterate",_),Reflect.get(t,"size",t)}function Q(t){t=xt(t);const e=xt(this),n=K(e),r=n.has.call(e,t);return r||(e.add(t),k(e,"add",t,t)),this}function Z(t,e){e=xt(e);const n=xt(this),{has:i,get:o}=K(n);let s=i.call(n,t);s||(t=xt(t),s=i.call(n,t));const a=o.call(n,t);return n.set(t,e),s?(0,r.aU)(e,a)&&k(n,"set",t,e,a):k(n,"add",t,e),this}function tt(t){const e=xt(this),{has:n,get:r}=K(e);let i=n.call(e,t);i||(t=xt(t),i=n.call(e,t));const o=r?r.call(e,t):void 0,s=e.delete(t);return i&&k(e,"delete",t,void 0,o),s}function et(){const t=xt(this),e=0!==t.size,n=void 0,r=t.clear();return e&&k(t,"clear",void 0,void 0,n),r}function nt(t,e){return function(n,r){const i=this,o=i["__v_raw"],s=xt(o),a=e?G:t?Pt:At;return!t&&I(s,"iterate",_),o.forEach(((t,e)=>n.call(r,a(t),a(e),i)))}}function rt(t,e,n){return function(...i){const o=this["__v_raw"],s=xt(o),a=(0,r._N)(s),c="entries"===t||t===Symbol.iterator&&a,l="keys"===t&&a,u=o[t](...i),h=n?G:e?Pt:At;return!e&&I(s,"iterate",l?v:_),{next(){const{value:t,done:e}=u.next();return e?{value:t,done:e}:{value:c?[h(t[0]),h(t[1])]:h(t),done:e}},[Symbol.iterator](){return this}}}}function it(t){return function(...e){return"delete"!==t&&this}}function ot(){const t={get(t){return Y(this,t)},get size(){return X(this)},has:J,add:Q,set:Z,delete:tt,clear:et,forEach:nt(!1,!1)},e={get(t){return Y(this,t,!1,!0)},get size(){return X(this)},has:J,add:Q,set:Z,delete:tt,clear:et,forEach:nt(!1,!0)},n={get(t){return Y(this,t,!0)},get size(){return X(this,!0)},has(t){return J.call(this,t,!0)},add:it("add"),set:it("set"),delete:it("delete"),clear:it("clear"),forEach:nt(!0,!1)},r={get(t){return Y(this,t,!0,!0)},get size(){return X(this,!0)},has(t){return J.call(this,t,!0)},add:it("add"),set:it("set"),delete:it("delete"),clear:it("clear"),forEach:nt(!0,!0)},i=["keys","values","entries",Symbol.iterator];return i.forEach((i=>{t[i]=rt(i,!1,!1),n[i]=rt(i,!0,!1),e[i]=rt(i,!1,!0),r[i]=rt(i,!0,!0)})),[t,n,e,r]}const[st,at,ct,lt]=ot();function ut(t,e){const n=e?t?lt:ct:t?at:st;return(e,i,o)=>"__v_isReactive"===i?!t:"__v_isReadonly"===i?t:"__v_raw"===i?e:Reflect.get((0,r.RI)(n,i)&&i in e?n:e,i,o)}const ht={get:ut(!1,!1)},dt={get:ut(!1,!0)},ft={get:ut(!0,!1)};const pt=new WeakMap,gt=new WeakMap,mt=new WeakMap,_t=new WeakMap;function vt(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function yt(t){return t["__v_skip"]||!Object.isExtensible(t)?0:vt((0,r.W7)(t))}function bt(t){return It(t)?t:Et(t,!1,H,ht,pt)}function wt(t){return Et(t,!1,z,dt,gt)}function Ct(t){return Et(t,!0,W,ft,mt)}function Et(t,e,n,i,o){if(!(0,r.Kn)(t))return t;if(t["__v_raw"]&&(!e||!t["__v_isReactive"]))return t;const s=o.get(t);if(s)return s;const a=yt(t);if(0===a)return t;const c=new Proxy(t,2===a?i:n);return o.set(t,c),c}function Tt(t){return It(t)?Tt(t["__v_raw"]):!(!t||!t["__v_isReactive"])}function It(t){return!(!t||!t["__v_isReadonly"])}function St(t){return!(!t||!t["__v_isShallow"])}function kt(t){return Tt(t)||It(t)}function xt(t){const e=t&&t["__v_raw"];return e?xt(e):t}function Rt(t){return(0,r.Nj)(t,"__v_skip",!0),t}const At=t=>(0,r.Kn)(t)?bt(t):t,Pt=t=>(0,r.Kn)(t)?Ct(t):t;function Nt(t){w&&m&&(t=xt(t),S(t.dep||(t.dep=a())))}function Ot(t,e){t=xt(t),t.dep&&x(t.dep)}function Dt(t){return!(!t||!0!==t.__v_isRef)}function Lt(t){return Ft(t,!1)}function Mt(t){return Ft(t,!0)}function Ft(t,e){return Dt(t)?t:new jt(t,e)}class jt{constructor(t,e){this.__v_isShallow=e,this.dep=void 0,this.__v_isRef=!0,this._rawValue=e?t:xt(t),this._value=e?t:At(t)}get value(){return Nt(this),this._value}set value(t){t=this.__v_isShallow?t:xt(t),(0,r.aU)(t,this._rawValue)&&(this._rawValue=t,this._value=this.__v_isShallow?t:At(t),Ot(this,t))}}function Ut(t){return Dt(t)?t.value:t}const $t={get:(t,e,n)=>Ut(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const i=t[e];return Dt(i)&&!Dt(n)?(i.value=n,!0):Reflect.set(t,e,n,r)}};function qt(t){return Tt(t)?t:new Proxy(t,$t)}class Bt{constructor(t,e,n,r){this._setter=e,this.dep=void 0,this.__v_isRef=!0,this._dirty=!0,this.effect=new y(t,(()=>{this._dirty||(this._dirty=!0,Ot(this))})),this.effect.computed=this,this.effect.active=this._cacheable=!r,this["__v_isReadonly"]=n}get value(){const t=xt(this);return Nt(t),!t._dirty&&t._cacheable||(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}function Vt(t,e,n=!1){let i,o;const s=(0,r.mf)(t);s?(i=t,o=r.dG):(i=t.get,o=t.set);const a=new Bt(i,o,s||!o,n);return a}},3396:function(t,e,n){"use strict";n.d(e,{$d:function(){return s},FN:function(){return _n},Fl:function(){return On},HY:function(){return Le},JJ:function(){return Y},Ko:function(){return Vt},P$:function(){return at},Q6:function(){return ft},U2:function(){return lt},Us:function(){return Re},Wm:function(){return tn},Y3:function(){return C},Y8:function(){return it},YP:function(){return Z},_:function(){return Ze},aZ:function(){return pt},f3:function(){return J},h:function(){return Dn},iD:function(){return ze},ic:function(){return Rt},j4:function(){return Ge},kq:function(){return an},m0:function(){return X},nK:function(){return dt},uE:function(){return sn},up:function(){return Ut},wg:function(){return qe},wy:function(){return Mt}});n(6699),n(1703);var r=n(4870),i=n(7139);function o(t,e,n,r){let i;try{i=r?t(...r):t()}catch(o){a(o,e,n)}return i}function s(t,e,n,r){if((0,i.mf)(t)){const s=o(t,e,n,r);return s&&(0,i.tI)(s)&&s.catch((t=>{a(t,e,n)})),s}const c=[];for(let i=0;i<t.length;i++)c.push(s(t[i],e,n,r));return c}function a(t,e,n,r=!0){const i=e?e.vnode:null;if(e){let r=e.parent;const i=e.proxy,s=n;while(r){const e=r.ec;if(e)for(let n=0;n<e.length;n++)if(!1===e[n](t,i,s))return;r=r.parent}const a=e.appContext.config.errorHandler;if(a)return void o(a,null,10,[t,i,s])}c(t,n,i,r)}function c(t,e,n,r=!0){console.error(t)}let l=!1,u=!1;const h=[];let d=0;const f=[];let p=null,g=0;const m=[];let _=null,v=0;const y=Promise.resolve();let b=null,w=null;function C(t){const e=b||y;return t?e.then(this?t.bind(this):t):e}function E(t){let e=d+1,n=h.length;while(e<n){const r=e+n>>>1,i=N(h[r]);i<t?e=r+1:n=r}return e}function T(t){h.length&&h.includes(t,l&&t.allowRecurse?d+1:d)||t===w||(null==t.id?h.push(t):h.splice(E(t.id),0,t),I())}function I(){l||u||(u=!0,b=y.then(O))}function S(t){const e=h.indexOf(t);e>d&&h.splice(e,1)}function k(t,e,n,r){(0,i.kJ)(t)?n.push(...t):e&&e.includes(t,t.allowRecurse?r+1:r)||n.push(t),I()}function x(t){k(t,p,f,g)}function R(t){k(t,_,m,v)}function A(t,e=null){if(f.length){for(w=e,p=[...new Set(f)],f.length=0,g=0;g<p.length;g++)p[g]();p=null,g=0,w=null,A(t,e)}}function P(t){if(A(),m.length){const t=[...new Set(m)];if(m.length=0,_)return void _.push(...t);for(_=t,_.sort(((t,e)=>N(t)-N(e))),v=0;v<_.length;v++)_[v]();_=null,v=0}}const N=t=>null==t.id?1/0:t.id;function O(t){u=!1,l=!0,A(t),h.sort(((t,e)=>N(t)-N(e)));i.dG;try{for(d=0;d<h.length;d++){const t=h[d];t&&!1!==t.active&&o(t,null,14)}}finally{d=0,h.length=0,P(t),l=!1,b=null,(h.length||f.length||m.length)&&O(t)}}new Set;new Map;function D(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||i.kT;let o=n;const a=e.startsWith("update:"),c=a&&e.slice(7);if(c&&c in r){const t=`${"modelValue"===c?"model":c}Modifiers`,{number:e,trim:s}=r[t]||i.kT;s&&(o=n.map((t=>t.trim()))),e&&(o=n.map(i.He))}let l;let u=r[l=(0,i.hR)(e)]||r[l=(0,i.hR)((0,i._A)(e))];!u&&a&&(u=r[l=(0,i.hR)((0,i.rs)(e))]),u&&s(u,t,6,o);const h=r[l+"Once"];if(h){if(t.emitted){if(t.emitted[l])return}else t.emitted={};t.emitted[l]=!0,s(h,t,6,o)}}function L(t,e,n=!1){const r=e.emitsCache,o=r.get(t);if(void 0!==o)return o;const s=t.emits;let a={},c=!1;if(!(0,i.mf)(t)){const r=t=>{const n=L(t,e,!0);n&&(c=!0,(0,i.l7)(a,n))};!n&&e.mixins.length&&e.mixins.forEach(r),t.extends&&r(t.extends),t.mixins&&t.mixins.forEach(r)}return s||c?((0,i.kJ)(s)?s.forEach((t=>a[t]=null)):(0,i.l7)(a,s),r.set(t,a),a):(r.set(t,null),null)}function M(t,e){return!(!t||!(0,i.F7)(e))&&(e=e.slice(2).replace(/Once$/,""),(0,i.RI)(t,e[0].toLowerCase()+e.slice(1))||(0,i.RI)(t,(0,i.rs)(e))||(0,i.RI)(t,e))}let F=null,j=null;function U(t){const e=F;return F=t,j=t&&t.type.__scopeId||null,e}function $(t,e=F,n){if(!e)return t;if(t._n)return t;const r=(...n)=>{r._d&&He(-1);const i=U(e),o=t(...n);return U(i),r._d&&He(1),o};return r._n=!0,r._c=!0,r._d=!0,r}function q(t){const{type:e,vnode:n,proxy:r,withProxy:o,props:s,propsOptions:[c],slots:l,attrs:u,emit:h,render:d,renderCache:f,data:p,setupState:g,ctx:m,inheritAttrs:_}=t;let v,y;const b=U(t);try{if(4&n.shapeFlag){const t=o||r;v=cn(d.call(t,t,f,s,g,p,m)),y=u}else{const t=e;0,v=cn(t.length>1?t(s,{attrs:u,slots:l,emit:h}):t(s,null)),y=e.props?u:B(u)}}catch(C){Ue.length=0,a(C,t,1),v=tn(Fe)}let w=v;if(y&&!1!==_){const t=Object.keys(y),{shapeFlag:e}=w;t.length&&7&e&&(c&&t.some(i.tR)&&(y=V(y,c)),w=rn(w,y))}return n.dirs&&(w=rn(w),w.dirs=w.dirs?w.dirs.concat(n.dirs):n.dirs),n.transition&&(w.transition=n.transition),v=w,U(b),v}const B=t=>{let e;for(const n in t)("class"===n||"style"===n||(0,i.F7)(n))&&((e||(e={}))[n]=t[n]);return e},V=(t,e)=>{const n={};for(const r in t)(0,i.tR)(r)&&r.slice(9)in e||(n[r]=t[r]);return n};function H(t,e,n){const{props:r,children:i,component:o}=t,{props:s,children:a,patchFlag:c}=e,l=o.emitsOptions;if(e.dirs||e.transition)return!0;if(!(n&&c>=0))return!(!i&&!a||a&&a.$stable)||r!==s&&(r?!s||W(r,s,l):!!s);if(1024&c)return!0;if(16&c)return r?W(r,s,l):!!s;if(8&c){const t=e.dynamicProps;for(let e=0;e<t.length;e++){const n=t[e];if(s[n]!==r[n]&&!M(l,n))return!0}}return!1}function W(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let i=0;i<r.length;i++){const o=r[i];if(e[o]!==t[o]&&!M(n,o))return!0}return!1}function z({vnode:t,parent:e},n){while(e&&e.subTree===t)(t=e.vnode).el=n,e=e.parent}const G=t=>t.__isSuspense;function K(t,e){e&&e.pendingBranch?(0,i.kJ)(t)?e.effects.push(...t):e.effects.push(t):R(t)}function Y(t,e){if(mn){let n=mn.provides;const r=mn.parent&&mn.parent.provides;r===n&&(n=mn.provides=Object.create(r)),n[t]=e}else 0}function J(t,e,n=!1){const r=mn||F;if(r){const o=null==r.parent?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(o&&t in o)return o[t];if(arguments.length>1)return n&&(0,i.mf)(e)?e.call(r.proxy):e}else 0}function X(t,e){return tt(t,null,e)}const Q={};function Z(t,e,n){return tt(t,e,n)}function tt(t,e,{immediate:n,deep:a,flush:c,onTrack:l,onTrigger:u}=i.kT){const h=mn;let d,f,p=!1,g=!1;if((0,r.dq)(t)?(d=()=>t.value,p=(0,r.yT)(t)):(0,r.PG)(t)?(d=()=>t,a=!0):(0,i.kJ)(t)?(g=!0,p=t.some((t=>(0,r.PG)(t)||(0,r.yT)(t))),d=()=>t.map((t=>(0,r.dq)(t)?t.value:(0,r.PG)(t)?rt(t):(0,i.mf)(t)?o(t,h,2):void 0))):d=(0,i.mf)(t)?e?()=>o(t,h,2):()=>{if(!h||!h.isUnmounted)return f&&f(),s(t,h,3,[m])}:i.dG,e&&a){const t=d;d=()=>rt(t())}let m=t=>{f=b.onStop=()=>{o(t,h,4)}};if(En)return m=i.dG,e?n&&s(e,h,3,[d(),g?[]:void 0,m]):d(),i.dG;let _=g?[]:Q;const v=()=>{if(b.active)if(e){const t=b.run();(a||p||(g?t.some(((t,e)=>(0,i.aU)(t,_[e]))):(0,i.aU)(t,_)))&&(f&&f(),s(e,h,3,[t,_===Q?void 0:_,m]),_=t)}else b.run()};let y;v.allowRecurse=!!e,y="sync"===c?v:"post"===c?()=>xe(v,h&&h.suspense):()=>x(v);const b=new r.qq(d,y);return e?n?v():_=b.run():"post"===c?xe(b.run.bind(b),h&&h.suspense):b.run(),()=>{b.stop(),h&&h.scope&&(0,i.Od)(h.scope.effects,b)}}function et(t,e,n){const r=this.proxy,o=(0,i.HD)(t)?t.includes(".")?nt(r,t):()=>r[t]:t.bind(r,r);let s;(0,i.mf)(e)?s=e:(s=e.handler,n=e);const a=mn;vn(this);const c=tt(o,s.bind(r),n);return a?vn(a):yn(),c}function nt(t,e){const n=e.split(".");return()=>{let e=t;for(let t=0;t<n.length&&e;t++)e=e[n[t]];return e}}function rt(t,e){if(!(0,i.Kn)(t)||t["__v_skip"])return t;if(e=e||new Set,e.has(t))return t;if(e.add(t),(0,r.dq)(t))rt(t.value,e);else if((0,i.kJ)(t))for(let n=0;n<t.length;n++)rt(t[n],e);else if((0,i.DM)(t)||(0,i._N)(t))t.forEach((t=>{rt(t,e)}));else if((0,i.PO)(t))for(const n in t)rt(t[n],e);return t}function it(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return kt((()=>{t.isMounted=!0})),At((()=>{t.isUnmounting=!0})),t}const ot=[Function,Array],st={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:ot,onEnter:ot,onAfterEnter:ot,onEnterCancelled:ot,onBeforeLeave:ot,onLeave:ot,onAfterLeave:ot,onLeaveCancelled:ot,onBeforeAppear:ot,onAppear:ot,onAfterAppear:ot,onAppearCancelled:ot},setup(t,{slots:e}){const n=_n(),i=it();let o;return()=>{const s=e.default&&ft(e.default(),!0);if(!s||!s.length)return;let a=s[0];if(s.length>1){let t=!1;for(const e of s)if(e.type!==Fe){0,a=e,t=!0;break}}const c=(0,r.IU)(t),{mode:l}=c;if(i.isLeaving)return ut(a);const u=ht(a);if(!u)return ut(a);const h=lt(u,c,i,n);dt(u,h);const d=n.subTree,f=d&&ht(d);let p=!1;const{getTransitionKey:g}=u.type;if(g){const t=g();void 0===o?o=t:t!==o&&(o=t,p=!0)}if(f&&f.type!==Fe&&(!Ye(u,f)||p)){const t=lt(f,c,i,n);if(dt(f,t),"out-in"===l)return i.isLeaving=!0,t.afterLeave=()=>{i.isLeaving=!1,n.update()},ut(a);"in-out"===l&&u.type!==Fe&&(t.delayLeave=(t,e,n)=>{const r=ct(i,f);r[String(f.key)]=f,t._leaveCb=()=>{e(),t._leaveCb=void 0,delete h.delayedLeave},h.delayedLeave=n})}return a}}},at=st;function ct(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function lt(t,e,n,r){const{appear:o,mode:a,persisted:c=!1,onBeforeEnter:l,onEnter:u,onAfterEnter:h,onEnterCancelled:d,onBeforeLeave:f,onLeave:p,onAfterLeave:g,onLeaveCancelled:m,onBeforeAppear:_,onAppear:v,onAfterAppear:y,onAppearCancelled:b}=e,w=String(t.key),C=ct(n,t),E=(t,e)=>{t&&s(t,r,9,e)},T=(t,e)=>{const n=e[1];E(t,e),(0,i.kJ)(t)?t.every((t=>t.length<=1))&&n():t.length<=1&&n()},I={mode:a,persisted:c,beforeEnter(e){let r=l;if(!n.isMounted){if(!o)return;r=_||l}e._leaveCb&&e._leaveCb(!0);const i=C[w];i&&Ye(t,i)&&i.el._leaveCb&&i.el._leaveCb(),E(r,[e])},enter(t){let e=u,r=h,i=d;if(!n.isMounted){if(!o)return;e=v||u,r=y||h,i=b||d}let s=!1;const a=t._enterCb=e=>{s||(s=!0,E(e?i:r,[t]),I.delayedLeave&&I.delayedLeave(),t._enterCb=void 0)};e?T(e,[t,a]):a()},leave(e,r){const i=String(t.key);if(e._enterCb&&e._enterCb(!0),n.isUnmounting)return r();E(f,[e]);let o=!1;const s=e._leaveCb=n=>{o||(o=!0,r(),E(n?m:g,[e]),e._leaveCb=void 0,C[i]===t&&delete C[i])};C[i]=t,p?T(p,[e,s]):s()},clone(t){return lt(t,e,n,r)}};return I}function ut(t){if(mt(t))return t=rn(t),t.children=null,t}function ht(t){return mt(t)?t.children?t.children[0]:void 0:t}function dt(t,e){6&t.shapeFlag&&t.component?dt(t.component.subTree,e):128&t.shapeFlag?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function ft(t,e=!1,n){let r=[],i=0;for(let o=0;o<t.length;o++){let s=t[o];const a=null==n?s.key:String(n)+String(null!=s.key?s.key:o);s.type===Le?(128&s.patchFlag&&i++,r=r.concat(ft(s.children,e,a))):(e||s.type!==Fe)&&r.push(null!=a?rn(s,{key:a}):s)}if(i>1)for(let o=0;o<r.length;o++)r[o].patchFlag=-2;return r}function pt(t){return(0,i.mf)(t)?{setup:t,name:t.name}:t}const gt=t=>!!t.type.__asyncLoader;const mt=t=>t.type.__isKeepAlive;RegExp,RegExp;function _t(t,e){return(0,i.kJ)(t)?t.some((t=>_t(t,e))):(0,i.HD)(t)?t.split(",").includes(e):!!t.test&&t.test(e)}function vt(t,e){bt(t,"a",e)}function yt(t,e){bt(t,"da",e)}function bt(t,e,n=mn){const r=t.__wdc||(t.__wdc=()=>{let e=n;while(e){if(e.isDeactivated)return;e=e.parent}return t()});if(Tt(e,r,n),n){let t=n.parent;while(t&&t.parent)mt(t.parent.vnode)&&wt(r,e,n,t),t=t.parent}}function wt(t,e,n,r){const o=Tt(e,t,r,!0);Pt((()=>{(0,i.Od)(r[e],o)}),n)}function Ct(t){let e=t.shapeFlag;256&e&&(e-=256),512&e&&(e-=512),t.shapeFlag=e}function Et(t){return 128&t.shapeFlag?t.ssContent:t}function Tt(t,e,n=mn,i=!1){if(n){const o=n[t]||(n[t]=[]),a=e.__weh||(e.__weh=(...i)=>{if(n.isUnmounted)return;(0,r.Jd)(),vn(n);const o=s(e,n,t,i);return yn(),(0,r.lk)(),o});return i?o.unshift(a):o.push(a),a}}const It=t=>(e,n=mn)=>(!En||"sp"===t)&&Tt(t,e,n),St=It("bm"),kt=It("m"),xt=It("bu"),Rt=It("u"),At=It("bum"),Pt=It("um"),Nt=It("sp"),Ot=It("rtg"),Dt=It("rtc");function Lt(t,e=mn){Tt("ec",t,e)}function Mt(t,e){const n=F;if(null===n)return t;const r=An(n)||n.proxy,o=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[t,n,a,c=i.kT]=e[s];(0,i.mf)(t)&&(t={mounted:t,updated:t}),t.deep&&rt(n),o.push({dir:t,instance:r,value:n,oldValue:void 0,arg:a,modifiers:c})}return t}function Ft(t,e,n,i){const o=t.dirs,a=e&&e.dirs;for(let c=0;c<o.length;c++){const l=o[c];a&&(l.oldValue=a[c].value);let u=l.dir[i];u&&((0,r.Jd)(),s(u,n,8,[t.el,l,t,e]),(0,r.lk)())}}const jt="components";function Ut(t,e){return qt(jt,t,!0,e)||t}const $t=Symbol();function qt(t,e,n=!0,r=!1){const o=F||mn;if(o){const n=o.type;if(t===jt){const t=Pn(n,!1);if(t&&(t===e||t===(0,i._A)(e)||t===(0,i.kC)((0,i._A)(e))))return n}const s=Bt(o[t]||n[t],e)||Bt(o.appContext[t],e);return!s&&r?n:s}}function Bt(t,e){return t&&(t[e]||t[(0,i._A)(e)]||t[(0,i.kC)((0,i._A)(e))])}function Vt(t,e,n,r){let o;const s=n&&n[r];if((0,i.kJ)(t)||(0,i.HD)(t)){o=new Array(t.length);for(let n=0,r=t.length;n<r;n++)o[n]=e(t[n],n,void 0,s&&s[n])}else if("number"===typeof t){0,o=new Array(t);for(let n=0;n<t;n++)o[n]=e(n+1,n,void 0,s&&s[n])}else if((0,i.Kn)(t))if(t[Symbol.iterator])o=Array.from(t,((t,n)=>e(t,n,void 0,s&&s[n])));else{const n=Object.keys(t);o=new Array(n.length);for(let r=0,i=n.length;r<i;r++){const i=n[r];o[r]=e(t[i],i,r,s&&s[r])}}else o=[];return n&&(n[r]=o),o}const Ht=t=>t?bn(t)?An(t)||t.proxy:Ht(t.parent):null,Wt=(0,i.l7)(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Ht(t.parent),$root:t=>Ht(t.root),$emit:t=>t.emit,$options:t=>Qt(t),$forceUpdate:t=>t.f||(t.f=()=>T(t.update)),$nextTick:t=>t.n||(t.n=C.bind(t.proxy)),$watch:t=>et.bind(t)}),zt={get({_:t},e){const{ctx:n,setupState:o,data:s,props:a,accessCache:c,type:l,appContext:u}=t;let h;if("$"!==e[0]){const r=c[e];if(void 0!==r)switch(r){case 1:return o[e];case 2:return s[e];case 4:return n[e];case 3:return a[e]}else{if(o!==i.kT&&(0,i.RI)(o,e))return c[e]=1,o[e];if(s!==i.kT&&(0,i.RI)(s,e))return c[e]=2,s[e];if((h=t.propsOptions[0])&&(0,i.RI)(h,e))return c[e]=3,a[e];if(n!==i.kT&&(0,i.RI)(n,e))return c[e]=4,n[e];Gt&&(c[e]=0)}}const d=Wt[e];let f,p;return d?("$attrs"===e&&(0,r.j)(t,"get",e),d(t)):(f=l.__cssModules)&&(f=f[e])?f:n!==i.kT&&(0,i.RI)(n,e)?(c[e]=4,n[e]):(p=u.config.globalProperties,(0,i.RI)(p,e)?p[e]:void 0)},set({_:t},e,n){const{data:r,setupState:o,ctx:s}=t;return o!==i.kT&&(0,i.RI)(o,e)?(o[e]=n,!0):r!==i.kT&&(0,i.RI)(r,e)?(r[e]=n,!0):!(0,i.RI)(t.props,e)&&(("$"!==e[0]||!(e.slice(1)in t))&&(s[e]=n,!0))},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:o,propsOptions:s}},a){let c;return!!n[a]||t!==i.kT&&(0,i.RI)(t,a)||e!==i.kT&&(0,i.RI)(e,a)||(c=s[0])&&(0,i.RI)(c,a)||(0,i.RI)(r,a)||(0,i.RI)(Wt,a)||(0,i.RI)(o.config.globalProperties,a)},defineProperty(t,e,n){return null!=n.get?t._.accessCache[e]=0:(0,i.RI)(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};let Gt=!0;function Kt(t){const e=Qt(t),n=t.proxy,o=t.ctx;Gt=!1,e.beforeCreate&&Jt(e.beforeCreate,t,"bc");const{data:s,computed:a,methods:c,watch:l,provide:u,inject:h,created:d,beforeMount:f,mounted:p,beforeUpdate:g,updated:m,activated:_,deactivated:v,beforeDestroy:y,beforeUnmount:b,destroyed:w,unmounted:C,render:E,renderTracked:T,renderTriggered:I,errorCaptured:S,serverPrefetch:k,expose:x,inheritAttrs:R,components:A,directives:P,filters:N}=e,O=null;if(h&&Yt(h,o,O,t.appContext.config.unwrapInjectedRef),c)for(const r in c){const t=c[r];(0,i.mf)(t)&&(o[r]=t.bind(n))}if(s){0;const e=s.call(n,n);0,(0,i.Kn)(e)&&(t.data=(0,r.qj)(e))}if(Gt=!0,a)for(const r in a){const t=a[r],e=(0,i.mf)(t)?t.bind(n,n):(0,i.mf)(t.get)?t.get.bind(n,n):i.dG;0;const s=!(0,i.mf)(t)&&(0,i.mf)(t.set)?t.set.bind(n):i.dG,c=On({get:e,set:s});Object.defineProperty(o,r,{enumerable:!0,configurable:!0,get:()=>c.value,set:t=>c.value=t})}if(l)for(const r in l)Xt(l[r],o,n,r);if(u){const t=(0,i.mf)(u)?u.call(n):u;Reflect.ownKeys(t).forEach((e=>{Y(e,t[e])}))}function D(t,e){(0,i.kJ)(e)?e.forEach((e=>t(e.bind(n)))):e&&t(e.bind(n))}if(d&&Jt(d,t,"c"),D(St,f),D(kt,p),D(xt,g),D(Rt,m),D(vt,_),D(yt,v),D(Lt,S),D(Dt,T),D(Ot,I),D(At,b),D(Pt,C),D(Nt,k),(0,i.kJ)(x))if(x.length){const e=t.exposed||(t.exposed={});x.forEach((t=>{Object.defineProperty(e,t,{get:()=>n[t],set:e=>n[t]=e})}))}else t.exposed||(t.exposed={});E&&t.render===i.dG&&(t.render=E),null!=R&&(t.inheritAttrs=R),A&&(t.components=A),P&&(t.directives=P)}function Yt(t,e,n=i.dG,o=!1){(0,i.kJ)(t)&&(t=re(t));for(const s in t){const n=t[s];let a;a=(0,i.Kn)(n)?"default"in n?J(n.from||s,n.default,!0):J(n.from||s):J(n),(0,r.dq)(a)&&o?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>a.value,set:t=>a.value=t}):e[s]=a}}function Jt(t,e,n){s((0,i.kJ)(t)?t.map((t=>t.bind(e.proxy))):t.bind(e.proxy),e,n)}function Xt(t,e,n,r){const o=r.includes(".")?nt(n,r):()=>n[r];if((0,i.HD)(t)){const n=e[t];(0,i.mf)(n)&&Z(o,n)}else if((0,i.mf)(t))Z(o,t.bind(n));else if((0,i.Kn)(t))if((0,i.kJ)(t))t.forEach((t=>Xt(t,e,n,r)));else{const r=(0,i.mf)(t.handler)?t.handler.bind(n):e[t.handler];(0,i.mf)(r)&&Z(o,r,t)}else 0}function Qt(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:i,optionsCache:o,config:{optionMergeStrategies:s}}=t.appContext,a=o.get(e);let c;return a?c=a:i.length||n||r?(c={},i.length&&i.forEach((t=>Zt(c,t,s,!0))),Zt(c,e,s)):c=e,o.set(e,c),c}function Zt(t,e,n,r=!1){const{mixins:i,extends:o}=e;o&&Zt(t,o,n,!0),i&&i.forEach((e=>Zt(t,e,n,!0)));for(const s in e)if(r&&"expose"===s);else{const r=te[s]||n&&n[s];t[s]=r?r(t[s],e[s]):e[s]}return t}const te={data:ee,props:oe,emits:oe,methods:oe,computed:oe,beforeCreate:ie,created:ie,beforeMount:ie,mounted:ie,beforeUpdate:ie,updated:ie,beforeDestroy:ie,beforeUnmount:ie,destroyed:ie,unmounted:ie,activated:ie,deactivated:ie,errorCaptured:ie,serverPrefetch:ie,components:oe,directives:oe,watch:se,provide:ee,inject:ne};function ee(t,e){return e?t?function(){return(0,i.l7)((0,i.mf)(t)?t.call(this,this):t,(0,i.mf)(e)?e.call(this,this):e)}:e:t}function ne(t,e){return oe(re(t),re(e))}function re(t){if((0,i.kJ)(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function ie(t,e){return t?[...new Set([].concat(t,e))]:e}function oe(t,e){return t?(0,i.l7)((0,i.l7)(Object.create(null),t),e):e}function se(t,e){if(!t)return e;if(!e)return t;const n=(0,i.l7)(Object.create(null),t);for(const r in e)n[r]=ie(t[r],e[r]);return n}function ae(t,e,n,o=!1){const s={},a={};(0,i.Nj)(a,Je,1),t.propsDefaults=Object.create(null),le(t,e,s,a);for(const r in t.propsOptions[0])r in s||(s[r]=void 0);n?t.props=o?s:(0,r.Um)(s):t.type.props?t.props=s:t.props=a,t.attrs=a}function ce(t,e,n,o){const{props:s,attrs:a,vnode:{patchFlag:c}}=t,l=(0,r.IU)(s),[u]=t.propsOptions;let h=!1;if(!(o||c>0)||16&c){let r;le(t,e,s,a)&&(h=!0);for(const o in l)e&&((0,i.RI)(e,o)||(r=(0,i.rs)(o))!==o&&(0,i.RI)(e,r))||(u?!n||void 0===n[o]&&void 0===n[r]||(s[o]=ue(u,l,o,void 0,t,!0)):delete s[o]);if(a!==l)for(const t in a)e&&(0,i.RI)(e,t)||(delete a[t],h=!0)}else if(8&c){const n=t.vnode.dynamicProps;for(let r=0;r<n.length;r++){let o=n[r];if(M(t.emitsOptions,o))continue;const c=e[o];if(u)if((0,i.RI)(a,o))c!==a[o]&&(a[o]=c,h=!0);else{const e=(0,i._A)(o);s[e]=ue(u,l,e,c,t,!1)}else c!==a[o]&&(a[o]=c,h=!0)}}h&&(0,r.X$)(t,"set","$attrs")}function le(t,e,n,o){const[s,a]=t.propsOptions;let c,l=!1;if(e)for(let r in e){if((0,i.Gg)(r))continue;const u=e[r];let h;s&&(0,i.RI)(s,h=(0,i._A)(r))?a&&a.includes(h)?(c||(c={}))[h]=u:n[h]=u:M(t.emitsOptions,r)||r in o&&u===o[r]||(o[r]=u,l=!0)}if(a){const e=(0,r.IU)(n),o=c||i.kT;for(let r=0;r<a.length;r++){const c=a[r];n[c]=ue(s,e,c,o[c],t,!(0,i.RI)(o,c))}}return l}function ue(t,e,n,r,o,s){const a=t[n];if(null!=a){const t=(0,i.RI)(a,"default");if(t&&void 0===r){const t=a.default;if(a.type!==Function&&(0,i.mf)(t)){const{propsDefaults:i}=o;n in i?r=i[n]:(vn(o),r=i[n]=t.call(null,e),yn())}else r=t}a[0]&&(s&&!t?r=!1:!a[1]||""!==r&&r!==(0,i.rs)(n)||(r=!0))}return r}function he(t,e,n=!1){const r=e.propsCache,o=r.get(t);if(o)return o;const s=t.props,a={},c=[];let l=!1;if(!(0,i.mf)(t)){const r=t=>{l=!0;const[n,r]=he(t,e,!0);(0,i.l7)(a,n),r&&c.push(...r)};!n&&e.mixins.length&&e.mixins.forEach(r),t.extends&&r(t.extends),t.mixins&&t.mixins.forEach(r)}if(!s&&!l)return r.set(t,i.Z6),i.Z6;if((0,i.kJ)(s))for(let h=0;h<s.length;h++){0;const t=(0,i._A)(s[h]);de(t)&&(a[t]=i.kT)}else if(s){0;for(const t in s){const e=(0,i._A)(t);if(de(e)){const n=s[t],r=a[e]=(0,i.kJ)(n)||(0,i.mf)(n)?{type:n}:n;if(r){const t=ge(Boolean,r.type),n=ge(String,r.type);r[0]=t>-1,r[1]=n<0||t<n,(t>-1||(0,i.RI)(r,"default"))&&c.push(e)}}}}const u=[a,c];return r.set(t,u),u}function de(t){return"$"!==t[0]}function fe(t){const e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:null===t?"null":""}function pe(t,e){return fe(t)===fe(e)}function ge(t,e){return(0,i.kJ)(e)?e.findIndex((e=>pe(e,t))):(0,i.mf)(e)&&pe(e,t)?0:-1}const me=t=>"_"===t[0]||"$stable"===t,_e=t=>(0,i.kJ)(t)?t.map(cn):[cn(t)],ve=(t,e,n)=>{if(e._n)return e;const r=$(((...t)=>_e(e(...t))),n);return r._c=!1,r},ye=(t,e,n)=>{const r=t._ctx;for(const o in t){if(me(o))continue;const n=t[o];if((0,i.mf)(n))e[o]=ve(o,n,r);else if(null!=n){0;const t=_e(n);e[o]=()=>t}}},be=(t,e)=>{const n=_e(e);t.slots.default=()=>n},we=(t,e)=>{if(32&t.vnode.shapeFlag){const n=e._;n?(t.slots=(0,r.IU)(e),(0,i.Nj)(e,"_",n)):ye(e,t.slots={})}else t.slots={},e&&be(t,e);(0,i.Nj)(t.slots,Je,1)},Ce=(t,e,n)=>{const{vnode:r,slots:o}=t;let s=!0,a=i.kT;if(32&r.shapeFlag){const t=e._;t?n&&1===t?s=!1:((0,i.l7)(o,e),n||1!==t||delete o._):(s=!e.$stable,ye(e,o)),a=e}else e&&(be(t,e),a={default:1});if(s)for(const i in o)me(i)||i in a||delete o[i]};function Ee(){return{app:null,config:{isNativeTag:i.NO,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Te=0;function Ie(t,e){return function(n,r=null){(0,i.mf)(n)||(n=Object.assign({},n)),null==r||(0,i.Kn)(r)||(r=null);const o=Ee(),s=new Set;let a=!1;const c=o.app={_uid:Te++,_component:n,_props:r,_container:null,_context:o,_instance:null,version:Ln,get config(){return o.config},set config(t){0},use(t,...e){return s.has(t)||(t&&(0,i.mf)(t.install)?(s.add(t),t.install(c,...e)):(0,i.mf)(t)&&(s.add(t),t(c,...e))),c},mixin(t){return o.mixins.includes(t)||o.mixins.push(t),c},component(t,e){return e?(o.components[t]=e,c):o.components[t]},directive(t,e){return e?(o.directives[t]=e,c):o.directives[t]},mount(i,s,l){if(!a){0;const u=tn(n,r);return u.appContext=o,s&&e?e(u,i):t(u,i,l),a=!0,c._container=i,i.__vue_app__=c,An(u.component)||u.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(t,e){return o.provides[t]=e,c}};return c}}function Se(t,e,n,s,a=!1){if((0,i.kJ)(t))return void t.forEach(((t,r)=>Se(t,e&&((0,i.kJ)(e)?e[r]:e),n,s,a)));if(gt(s)&&!a)return;const c=4&s.shapeFlag?An(s.component)||s.component.proxy:s.el,l=a?null:c,{i:u,r:h}=t;const d=e&&e.r,f=u.refs===i.kT?u.refs={}:u.refs,p=u.setupState;if(null!=d&&d!==h&&((0,i.HD)(d)?(f[d]=null,(0,i.RI)(p,d)&&(p[d]=null)):(0,r.dq)(d)&&(d.value=null)),(0,i.mf)(h))o(h,u,12,[l,f]);else{const e=(0,i.HD)(h),o=(0,r.dq)(h);if(e||o){const r=()=>{if(t.f){const n=e?f[h]:h.value;a?(0,i.kJ)(n)&&(0,i.Od)(n,c):(0,i.kJ)(n)?n.includes(c)||n.push(c):e?(f[h]=[c],(0,i.RI)(p,h)&&(p[h]=f[h])):(h.value=[c],t.k&&(f[t.k]=h.value))}else e?(f[h]=l,(0,i.RI)(p,h)&&(p[h]=l)):o&&(h.value=l,t.k&&(f[t.k]=l))};l?(r.id=-1,xe(r,n)):r()}else 0}}function ke(){}const xe=K;function Re(t){return Ae(t)}function Ae(t,e){ke();const n=(0,i.E9)();n.__VUE__=!0;const{insert:o,remove:s,patchProp:a,createElement:c,createText:l,createComment:u,setText:h,setElementText:d,parentNode:f,nextSibling:p,setScopeId:g=i.dG,cloneNode:m,insertStaticContent:_}=t,v=(t,e,n,r=null,i=null,o=null,s=!1,a=null,c=!!e.dynamicChildren)=>{if(t===e)return;t&&!Ye(t,e)&&(r=Z(t),K(t,i,o,!0),t=null),-2===e.patchFlag&&(c=!1,e.dynamicChildren=null);const{type:l,ref:u,shapeFlag:h}=e;switch(l){case Me:y(t,e,n,r);break;case Fe:b(t,e,n,r);break;case je:null==t&&w(e,n,r,s);break;case Le:L(t,e,n,r,i,o,s,a,c);break;default:1&h?I(t,e,n,r,i,o,s,a,c):6&h?M(t,e,n,r,i,o,s,a,c):(64&h||128&h)&&l.process(t,e,n,r,i,o,s,a,c,et)}null!=u&&i&&Se(u,t&&t.ref,o,e||t,!e)},y=(t,e,n,r)=>{if(null==t)o(e.el=l(e.children),n,r);else{const n=e.el=t.el;e.children!==t.children&&h(n,e.children)}},b=(t,e,n,r)=>{null==t?o(e.el=u(e.children||""),n,r):e.el=t.el},w=(t,e,n,r)=>{[t.el,t.anchor]=_(t.children,e,n,r,t.el,t.anchor)},C=({el:t,anchor:e},n,r)=>{let i;while(t&&t!==e)i=p(t),o(t,n,r),t=i;o(e,n,r)},E=({el:t,anchor:e})=>{let n;while(t&&t!==e)n=p(t),s(t),t=n;s(e)},I=(t,e,n,r,i,o,s,a,c)=>{s=s||"svg"===e.type,null==t?k(e,n,r,i,o,s,a,c):N(t,e,i,o,s,a,c)},k=(t,e,n,r,s,l,u,h)=>{let f,p;const{type:g,props:_,shapeFlag:v,transition:y,patchFlag:b,dirs:w}=t;if(t.el&&void 0!==m&&-1===b)f=t.el=m(t.el);else{if(f=t.el=c(t.type,l,_&&_.is,_),8&v?d(f,t.children):16&v&&R(t.children,f,null,r,s,l&&"foreignObject"!==g,u,h),w&&Ft(t,null,r,"created"),_){for(const e in _)"value"===e||(0,i.Gg)(e)||a(f,e,null,_[e],l,t.children,r,s,Q);"value"in _&&a(f,"value",null,_.value),(p=_.onVnodeBeforeMount)&&dn(p,r,t)}x(f,t,t.scopeId,u,r)}w&&Ft(t,null,r,"beforeMount");const C=(!s||s&&!s.pendingBranch)&&y&&!y.persisted;C&&y.beforeEnter(f),o(f,e,n),((p=_&&_.onVnodeMounted)||C||w)&&xe((()=>{p&&dn(p,r,t),C&&y.enter(f),w&&Ft(t,null,r,"mounted")}),s)},x=(t,e,n,r,i)=>{if(n&&g(t,n),r)for(let o=0;o<r.length;o++)g(t,r[o]);if(i){let n=i.subTree;if(e===n){const e=i.vnode;x(t,e,e.scopeId,e.slotScopeIds,i.parent)}}},R=(t,e,n,r,i,o,s,a,c=0)=>{for(let l=c;l<t.length;l++){const c=t[l]=a?ln(t[l]):cn(t[l]);v(null,c,e,n,r,i,o,s,a)}},N=(t,e,n,r,o,s,c)=>{const l=e.el=t.el;let{patchFlag:u,dynamicChildren:h,dirs:f}=e;u|=16&t.patchFlag;const p=t.props||i.kT,g=e.props||i.kT;let m;n&&Pe(n,!1),(m=g.onVnodeBeforeUpdate)&&dn(m,n,e,t),f&&Ft(e,t,n,"beforeUpdate"),n&&Pe(n,!0);const _=o&&"foreignObject"!==e.type;if(h?O(t.dynamicChildren,h,l,n,r,_,s):c||B(t,e,l,null,n,r,_,s,!1),u>0){if(16&u)D(l,e,p,g,n,r,o);else if(2&u&&p.class!==g.class&&a(l,"class",null,g.class,o),4&u&&a(l,"style",p.style,g.style,o),8&u){const i=e.dynamicProps;for(let e=0;e<i.length;e++){const s=i[e],c=p[s],u=g[s];u===c&&"value"!==s||a(l,s,c,u,o,t.children,n,r,Q)}}1&u&&t.children!==e.children&&d(l,e.children)}else c||null!=h||D(l,e,p,g,n,r,o);((m=g.onVnodeUpdated)||f)&&xe((()=>{m&&dn(m,n,e,t),f&&Ft(e,t,n,"updated")}),r)},O=(t,e,n,r,i,o,s)=>{for(let a=0;a<e.length;a++){const c=t[a],l=e[a],u=c.el&&(c.type===Le||!Ye(c,l)||70&c.shapeFlag)?f(c.el):n;v(c,l,u,null,r,i,o,s,!0)}},D=(t,e,n,r,o,s,c)=>{if(n!==r){for(const l in r){if((0,i.Gg)(l))continue;const u=r[l],h=n[l];u!==h&&"value"!==l&&a(t,l,h,u,c,e.children,o,s,Q)}if(n!==i.kT)for(const l in n)(0,i.Gg)(l)||l in r||a(t,l,n[l],null,c,e.children,o,s,Q);"value"in r&&a(t,"value",n.value,r.value)}},L=(t,e,n,r,i,s,a,c,u)=>{const h=e.el=t?t.el:l(""),d=e.anchor=t?t.anchor:l("");let{patchFlag:f,dynamicChildren:p,slotScopeIds:g}=e;g&&(c=c?c.concat(g):g),null==t?(o(h,n,r),o(d,n,r),R(e.children,n,d,i,s,a,c,u)):f>0&&64&f&&p&&t.dynamicChildren?(O(t.dynamicChildren,p,n,i,s,a,c),(null!=e.key||i&&e===i.subTree)&&Ne(t,e,!0)):B(t,e,n,d,i,s,a,c,u)},M=(t,e,n,r,i,o,s,a,c)=>{e.slotScopeIds=a,null==t?512&e.shapeFlag?i.ctx.activate(e,n,r,s,c):F(e,n,r,i,o,s,c):j(t,e,c)},F=(t,e,n,r,i,o,s)=>{const a=t.component=gn(t,r,i);if(mt(t)&&(a.ctx.renderer=et),Tn(a),a.asyncDep){if(i&&i.registerDep(a,U),!t.el){const t=a.subTree=tn(Fe);b(null,t,e,n)}}else U(a,t,e,n,i,o,s)},j=(t,e,n)=>{const r=e.component=t.component;if(H(t,e,n)){if(r.asyncDep&&!r.asyncResolved)return void $(r,e,n);r.next=e,S(r.update),r.update()}else e.el=t.el,r.vnode=e},U=(t,e,n,o,s,a,c)=>{const l=()=>{if(t.isMounted){let e,{next:n,bu:r,u:o,parent:l,vnode:u}=t,h=n;0,Pe(t,!1),n?(n.el=u.el,$(t,n,c)):n=u,r&&(0,i.ir)(r),(e=n.props&&n.props.onVnodeBeforeUpdate)&&dn(e,l,n,u),Pe(t,!0);const d=q(t);0;const p=t.subTree;t.subTree=d,v(p,d,f(p.el),Z(p),t,s,a),n.el=d.el,null===h&&z(t,d.el),o&&xe(o,s),(e=n.props&&n.props.onVnodeUpdated)&&xe((()=>dn(e,l,n,u)),s)}else{let r;const{el:c,props:l}=e,{bm:u,m:h,parent:d}=t,f=gt(e);if(Pe(t,!1),u&&(0,i.ir)(u),!f&&(r=l&&l.onVnodeBeforeMount)&&dn(r,d,e),Pe(t,!0),c&&rt){const n=()=>{t.subTree=q(t),rt(c,t.subTree,t,s,null)};f?e.type.__asyncLoader().then((()=>!t.isUnmounted&&n())):n()}else{0;const r=t.subTree=q(t);0,v(null,r,n,o,t,s,a),e.el=r.el}if(h&&xe(h,s),!f&&(r=l&&l.onVnodeMounted)){const t=e;xe((()=>dn(r,d,t)),s)}(256&e.shapeFlag||d&&gt(d.vnode)&&256&d.vnode.shapeFlag)&&t.a&&xe(t.a,s),t.isMounted=!0,e=n=o=null}},u=t.effect=new r.qq(l,(()=>T(h)),t.scope),h=t.update=()=>u.run();h.id=t.uid,Pe(t,!0),h()},$=(t,e,n)=>{e.component=t;const i=t.vnode.props;t.vnode=e,t.next=null,ce(t,e.props,i,n),Ce(t,e.children,n),(0,r.Jd)(),A(void 0,t.update),(0,r.lk)()},B=(t,e,n,r,i,o,s,a,c=!1)=>{const l=t&&t.children,u=t?t.shapeFlag:0,h=e.children,{patchFlag:f,shapeFlag:p}=e;if(f>0){if(128&f)return void W(l,h,n,r,i,o,s,a,c);if(256&f)return void V(l,h,n,r,i,o,s,a,c)}8&p?(16&u&&Q(l,i,o),h!==l&&d(n,h)):16&u?16&p?W(l,h,n,r,i,o,s,a,c):Q(l,i,o,!0):(8&u&&d(n,""),16&p&&R(h,n,r,i,o,s,a,c))},V=(t,e,n,r,o,s,a,c,l)=>{t=t||i.Z6,e=e||i.Z6;const u=t.length,h=e.length,d=Math.min(u,h);let f;for(f=0;f<d;f++){const r=e[f]=l?ln(e[f]):cn(e[f]);v(t[f],r,n,null,o,s,a,c,l)}u>h?Q(t,o,s,!0,!1,d):R(e,n,r,o,s,a,c,l,d)},W=(t,e,n,r,o,s,a,c,l)=>{let u=0;const h=e.length;let d=t.length-1,f=h-1;while(u<=d&&u<=f){const r=t[u],i=e[u]=l?ln(e[u]):cn(e[u]);if(!Ye(r,i))break;v(r,i,n,null,o,s,a,c,l),u++}while(u<=d&&u<=f){const r=t[d],i=e[f]=l?ln(e[f]):cn(e[f]);if(!Ye(r,i))break;v(r,i,n,null,o,s,a,c,l),d--,f--}if(u>d){if(u<=f){const t=f+1,i=t<h?e[t].el:r;while(u<=f)v(null,e[u]=l?ln(e[u]):cn(e[u]),n,i,o,s,a,c,l),u++}}else if(u>f)while(u<=d)K(t[u],o,s,!0),u++;else{const p=u,g=u,m=new Map;for(u=g;u<=f;u++){const t=e[u]=l?ln(e[u]):cn(e[u]);null!=t.key&&m.set(t.key,u)}let _,y=0;const b=f-g+1;let w=!1,C=0;const E=new Array(b);for(u=0;u<b;u++)E[u]=0;for(u=p;u<=d;u++){const r=t[u];if(y>=b){K(r,o,s,!0);continue}let i;if(null!=r.key)i=m.get(r.key);else for(_=g;_<=f;_++)if(0===E[_-g]&&Ye(r,e[_])){i=_;break}void 0===i?K(r,o,s,!0):(E[i-g]=u+1,i>=C?C=i:w=!0,v(r,e[i],n,null,o,s,a,c,l),y++)}const T=w?Oe(E):i.Z6;for(_=T.length-1,u=b-1;u>=0;u--){const t=g+u,i=e[t],d=t+1<h?e[t+1].el:r;0===E[u]?v(null,i,n,d,o,s,a,c,l):w&&(_<0||u!==T[_]?G(i,n,d,2):_--)}}},G=(t,e,n,r,i=null)=>{const{el:s,type:a,transition:c,children:l,shapeFlag:u}=t;if(6&u)return void G(t.component.subTree,e,n,r);if(128&u)return void t.suspense.move(e,n,r);if(64&u)return void a.move(t,e,n,et);if(a===Le){o(s,e,n);for(let t=0;t<l.length;t++)G(l[t],e,n,r);return void o(t.anchor,e,n)}if(a===je)return void C(t,e,n);const h=2!==r&&1&u&&c;if(h)if(0===r)c.beforeEnter(s),o(s,e,n),xe((()=>c.enter(s)),i);else{const{leave:t,delayLeave:r,afterLeave:i}=c,a=()=>o(s,e,n),l=()=>{t(s,(()=>{a(),i&&i()}))};r?r(s,a,l):l()}else o(s,e,n)},K=(t,e,n,r=!1,i=!1)=>{const{type:o,props:s,ref:a,children:c,dynamicChildren:l,shapeFlag:u,patchFlag:h,dirs:d}=t;if(null!=a&&Se(a,null,n,t,!0),256&u)return void e.ctx.deactivate(t);const f=1&u&&d,p=!gt(t);let g;if(p&&(g=s&&s.onVnodeBeforeUnmount)&&dn(g,e,t),6&u)X(t.component,n,r);else{if(128&u)return void t.suspense.unmount(n,r);f&&Ft(t,null,e,"beforeUnmount"),64&u?t.type.remove(t,e,n,i,et,r):l&&(o!==Le||h>0&&64&h)?Q(l,e,n,!1,!0):(o===Le&&384&h||!i&&16&u)&&Q(c,e,n),r&&Y(t)}(p&&(g=s&&s.onVnodeUnmounted)||f)&&xe((()=>{g&&dn(g,e,t),f&&Ft(t,null,e,"unmounted")}),n)},Y=t=>{const{type:e,el:n,anchor:r,transition:i}=t;if(e===Le)return void J(n,r);if(e===je)return void E(t);const o=()=>{s(n),i&&!i.persisted&&i.afterLeave&&i.afterLeave()};if(1&t.shapeFlag&&i&&!i.persisted){const{leave:e,delayLeave:r}=i,s=()=>e(n,o);r?r(t.el,o,s):s()}else o()},J=(t,e)=>{let n;while(t!==e)n=p(t),s(t),t=n;s(e)},X=(t,e,n)=>{const{bum:r,scope:o,update:s,subTree:a,um:c}=t;r&&(0,i.ir)(r),o.stop(),s&&(s.active=!1,K(a,t,e,n)),c&&xe(c,e),xe((()=>{t.isUnmounted=!0}),e),e&&e.pendingBranch&&!e.isUnmounted&&t.asyncDep&&!t.asyncResolved&&t.suspenseId===e.pendingId&&(e.deps--,0===e.deps&&e.resolve())},Q=(t,e,n,r=!1,i=!1,o=0)=>{for(let s=o;s<t.length;s++)K(t[s],e,n,r,i)},Z=t=>6&t.shapeFlag?Z(t.component.subTree):128&t.shapeFlag?t.suspense.next():p(t.anchor||t.el),tt=(t,e,n)=>{null==t?e._vnode&&K(e._vnode,null,null,!0):v(e._vnode||null,t,e,null,null,null,n),P(),e._vnode=t},et={p:v,um:K,m:G,r:Y,mt:F,mc:R,pc:B,pbc:O,n:Z,o:t};let nt,rt;return e&&([nt,rt]=e(et)),{render:tt,hydrate:nt,createApp:Ie(tt,nt)}}function Pe({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function Ne(t,e,n=!1){const r=t.children,o=e.children;if((0,i.kJ)(r)&&(0,i.kJ)(o))for(let i=0;i<r.length;i++){const t=r[i];let e=o[i];1&e.shapeFlag&&!e.dynamicChildren&&((e.patchFlag<=0||32===e.patchFlag)&&(e=o[i]=ln(o[i]),e.el=t.el),n||Ne(t,e))}}function Oe(t){const e=t.slice(),n=[0];let r,i,o,s,a;const c=t.length;for(r=0;r<c;r++){const c=t[r];if(0!==c){if(i=n[n.length-1],t[i]<c){e[r]=i,n.push(r);continue}o=0,s=n.length-1;while(o<s)a=o+s>>1,t[n[a]]<c?o=a+1:s=a;c<t[n[o]]&&(o>0&&(e[r]=n[o-1]),n[o]=r)}}o=n.length,s=n[o-1];while(o-- >0)n[o]=s,s=e[s];return n}const De=t=>t.__isTeleport;const Le=Symbol(void 0),Me=Symbol(void 0),Fe=Symbol(void 0),je=Symbol(void 0),Ue=[];let $e=null;function qe(t=!1){Ue.push($e=t?null:[])}function Be(){Ue.pop(),$e=Ue[Ue.length-1]||null}let Ve=1;function He(t){Ve+=t}function We(t){return t.dynamicChildren=Ve>0?$e||i.Z6:null,Be(),Ve>0&&$e&&$e.push(t),t}function ze(t,e,n,r,i,o){return We(Ze(t,e,n,r,i,o,!0))}function Ge(t,e,n,r,i){return We(tn(t,e,n,r,i,!0))}function Ke(t){return!!t&&!0===t.__v_isVNode}function Ye(t,e){return t.type===e.type&&t.key===e.key}const Je="__vInternal",Xe=({key:t})=>null!=t?t:null,Qe=({ref:t,ref_key:e,ref_for:n})=>null!=t?(0,i.HD)(t)||(0,r.dq)(t)||(0,i.mf)(t)?{i:F,r:t,k:e,f:!!n}:t:null;function Ze(t,e=null,n=null,r=0,o=null,s=(t===Le?0:1),a=!1,c=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Xe(e),ref:e&&Qe(e),scopeId:j,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:r,dynamicProps:o,dynamicChildren:null,appContext:null};return c?(un(l,n),128&s&&t.normalize(l)):n&&(l.shapeFlag|=(0,i.HD)(n)?8:16),Ve>0&&!a&&$e&&(l.patchFlag>0||6&s)&&32!==l.patchFlag&&$e.push(l),l}const tn=en;function en(t,e=null,n=null,o=0,s=null,a=!1){if(t&&t!==$t||(t=Fe),Ke(t)){const r=rn(t,e,!0);return n&&un(r,n),Ve>0&&!a&&$e&&(6&r.shapeFlag?$e[$e.indexOf(t)]=r:$e.push(r)),r.patchFlag|=-2,r}if(Nn(t)&&(t=t.__vccOpts),e){e=nn(e);let{class:t,style:n}=e;t&&!(0,i.HD)(t)&&(e.class=(0,i.C_)(t)),(0,i.Kn)(n)&&((0,r.X3)(n)&&!(0,i.kJ)(n)&&(n=(0,i.l7)({},n)),e.style=(0,i.j5)(n))}const c=(0,i.HD)(t)?1:G(t)?128:De(t)?64:(0,i.Kn)(t)?4:(0,i.mf)(t)?2:0;return Ze(t,e,n,o,s,c,a,!0)}function nn(t){return t?(0,r.X3)(t)||Je in t?(0,i.l7)({},t):t:null}function rn(t,e,n=!1){const{props:r,ref:o,patchFlag:s,children:a}=t,c=e?hn(r||{},e):r,l={__v_isVNode:!0,__v_skip:!0,type:t.type,props:c,key:c&&Xe(c),ref:e&&e.ref?n&&o?(0,i.kJ)(o)?o.concat(Qe(e)):[o,Qe(e)]:Qe(e):o,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Le?-1===s?16:16|s:s,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&rn(t.ssContent),ssFallback:t.ssFallback&&rn(t.ssFallback),el:t.el,anchor:t.anchor};return l}function on(t=" ",e=0){return tn(Me,null,t,e)}function sn(t,e){const n=tn(je,null,t);return n.staticCount=e,n}function an(t="",e=!1){return e?(qe(),Ge(Fe,null,t)):tn(Fe,null,t)}function cn(t){return null==t||"boolean"===typeof t?tn(Fe):(0,i.kJ)(t)?tn(Le,null,t.slice()):"object"===typeof t?ln(t):tn(Me,null,String(t))}function ln(t){return null===t.el||t.memo?t:rn(t)}function un(t,e){let n=0;const{shapeFlag:r}=t;if(null==e)e=null;else if((0,i.kJ)(e))n=16;else if("object"===typeof e){if(65&r){const n=e.default;return void(n&&(n._c&&(n._d=!1),un(t,n()),n._c&&(n._d=!0)))}{n=32;const r=e._;r||Je in e?3===r&&F&&(1===F.slots._?e._=1:(e._=2,t.patchFlag|=1024)):e._ctx=F}}else(0,i.mf)(e)?(e={default:e,_ctx:F},n=32):(e=String(e),64&r?(n=16,e=[on(e)]):n=8);t.children=e,t.shapeFlag|=n}function hn(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const t in r)if("class"===t)e.class!==r.class&&(e.class=(0,i.C_)([e.class,r.class]));else if("style"===t)e.style=(0,i.j5)([e.style,r.style]);else if((0,i.F7)(t)){const n=e[t],o=r[t];!o||n===o||(0,i.kJ)(n)&&n.includes(o)||(e[t]=n?[].concat(n,o):o)}else""!==t&&(e[t]=r[t])}return e}function dn(t,e,n,r=null){s(t,e,7,[n,r])}const fn=Ee();let pn=0;function gn(t,e,n){const o=t.type,s=(e?e.appContext:t.appContext)||fn,a={uid:pn++,vnode:t,type:o,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new r.Bj(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:he(o,s),emitsOptions:L(o,s),emit:null,emitted:null,propsDefaults:i.kT,inheritAttrs:o.inheritAttrs,ctx:i.kT,data:i.kT,props:i.kT,attrs:i.kT,slots:i.kT,refs:i.kT,setupState:i.kT,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return a.ctx={_:a},a.root=e?e.root:a,a.emit=D.bind(null,a),t.ce&&t.ce(a),a}let mn=null;const _n=()=>mn||F,vn=t=>{mn=t,t.scope.on()},yn=()=>{mn&&mn.scope.off(),mn=null};function bn(t){return 4&t.vnode.shapeFlag}let wn,Cn,En=!1;function Tn(t,e=!1){En=e;const{props:n,children:r}=t.vnode,i=bn(t);ae(t,n,i,e),we(t,r);const o=i?In(t,e):void 0;return En=!1,o}function In(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=(0,r.Xl)(new Proxy(t.ctx,zt));const{setup:s}=n;if(s){const n=t.setupContext=s.length>1?Rn(t):null;vn(t),(0,r.Jd)();const c=o(s,t,0,[t.props,n]);if((0,r.lk)(),yn(),(0,i.tI)(c)){if(c.then(yn,yn),e)return c.then((n=>{Sn(t,n,e)})).catch((e=>{a(e,t,0)}));t.asyncDep=c}else Sn(t,c,e)}else kn(t,e)}function Sn(t,e,n){(0,i.mf)(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:(0,i.Kn)(e)&&(t.setupState=(0,r.WL)(e)),kn(t,n)}function kn(t,e,n){const o=t.type;if(!t.render){if(!e&&wn&&!o.render){const e=o.template;if(e){0;const{isCustomElement:n,compilerOptions:r}=t.appContext.config,{delimiters:s,compilerOptions:a}=o,c=(0,i.l7)((0,i.l7)({isCustomElement:n,delimiters:s},r),a);o.render=wn(e,c)}}t.render=o.render||i.dG,Cn&&Cn(t)}vn(t),(0,r.Jd)(),Kt(t),(0,r.lk)(),yn()}function xn(t){return new Proxy(t.attrs,{get(e,n){return(0,r.j)(t,"get","$attrs"),e[n]}})}function Rn(t){const e=e=>{t.exposed=e||{}};let n;return{get attrs(){return n||(n=xn(t))},slots:t.slots,emit:t.emit,expose:e}}function An(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy((0,r.WL)((0,r.Xl)(t.exposed)),{get(e,n){return n in e?e[n]:n in Wt?Wt[n](t):void 0}}))}function Pn(t,e=!0){return(0,i.mf)(t)?t.displayName||t.name:t.name||e&&t.__name}function Nn(t){return(0,i.mf)(t)&&"__vccOpts"in t}const On=(t,e)=>(0,r.Fl)(t,e,En);function Dn(t,e,n){const r=arguments.length;return 2===r?(0,i.Kn)(e)&&!(0,i.kJ)(e)?Ke(e)?tn(t,null,[e]):tn(t,e):tn(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):3===r&&Ke(n)&&(n=[n]),tn(t,e,n))}Symbol("");const Ln="3.2.37"},9242:function(t,e,n){"use strict";n.d(e,{nr:function(){return nt},ri:function(){return st}});n(6699);var r=n(7139),i=n(3396);n(4870);const o="http://www.w3.org/2000/svg",s="undefined"!==typeof document?document:null,a=s&&s.createElement("template"),c={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const i=e?s.createElementNS(o,t):s.createElement(t,n?{is:n}:void 0);return"select"===t&&r&&null!=r.multiple&&i.setAttribute("multiple",r.multiple),i},createText:t=>s.createTextNode(t),createComment:t=>s.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>s.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},cloneNode(t){const e=t.cloneNode(!0);return"_value"in t&&(e._value=t._value),e},insertStaticContent(t,e,n,r,i,o){const s=n?n.previousSibling:e.lastChild;if(i&&(i===o||i.nextSibling)){while(1)if(e.insertBefore(i.cloneNode(!0),n),i===o||!(i=i.nextSibling))break}else{a.innerHTML=r?`<svg>${t}</svg>`:t;const i=a.content;if(r){const t=i.firstChild;while(t.firstChild)i.appendChild(t.firstChild);i.removeChild(t)}e.insertBefore(i,n)}return[s?s.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function l(t,e,n){const r=t._vtc;r&&(e=(e?[e,...r]:[...r]).join(" ")),null==e?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function u(t,e,n){const i=t.style,o=(0,r.HD)(n);if(n&&!o){for(const t in n)d(i,t,n[t]);if(e&&!(0,r.HD)(e))for(const t in e)null==n[t]&&d(i,t,"")}else{const r=i.display;o?e!==n&&(i.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(i.display=r)}}const h=/\s*!important$/;function d(t,e,n){if((0,r.kJ)(n))n.forEach((n=>d(t,e,n)));else if(null==n&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const i=g(t,e);h.test(n)?t.setProperty((0,r.rs)(i),n.replace(h,""),"important"):t[i]=n}}const f=["Webkit","Moz","ms"],p={};function g(t,e){const n=p[e];if(n)return n;let i=(0,r._A)(e);if("filter"!==i&&i in t)return p[e]=i;i=(0,r.kC)(i);for(let r=0;r<f.length;r++){const n=f[r]+i;if(n in t)return p[e]=n}return e}const m="http://www.w3.org/1999/xlink";function _(t,e,n,i,o){if(i&&e.startsWith("xlink:"))null==n?t.removeAttributeNS(m,e.slice(6,e.length)):t.setAttributeNS(m,e,n);else{const i=(0,r.Pq)(e);null==n||i&&!(0,r.yA)(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function v(t,e,n,i,o,s,a){if("innerHTML"===e||"textContent"===e)return i&&a(i,o,s),void(t[e]=null==n?"":n);if("value"===e&&"PROGRESS"!==t.tagName&&!t.tagName.includes("-")){t._value=n;const r=null==n?"":n;return t.value===r&&"OPTION"!==t.tagName||(t.value=r),void(null==n&&t.removeAttribute(e))}let c=!1;if(""===n||null==n){const i=typeof t[e];"boolean"===i?n=(0,r.yA)(n):null==n&&"string"===i?(n="",c=!0):"number"===i&&(n=0,c=!0)}try{t[e]=n}catch(l){0}c&&t.removeAttribute(e)}const[y,b]=(()=>{let t=Date.now,e=!1;if("undefined"!==typeof window){Date.now()>document.createEvent("Event").timeStamp&&(t=performance.now.bind(performance));const n=navigator.userAgent.match(/firefox\/(\d+)/i);e=!!(n&&Number(n[1])<=53)}return[t,e]})();let w=0;const C=Promise.resolve(),E=()=>{w=0},T=()=>w||(C.then(E),w=y());function I(t,e,n,r){t.addEventListener(e,n,r)}function S(t,e,n,r){t.removeEventListener(e,n,r)}function k(t,e,n,r,i=null){const o=t._vei||(t._vei={}),s=o[e];if(r&&s)s.value=r;else{const[n,a]=R(e);if(r){const s=o[e]=A(r,i);I(t,n,s,a)}else s&&(S(t,n,s,a),o[e]=void 0)}}const x=/(?:Once|Passive|Capture)$/;function R(t){let e;if(x.test(t)){let n;e={};while(n=t.match(x))t=t.slice(0,t.length-n[0].length),e[n[0].toLowerCase()]=!0}return[(0,r.rs)(t.slice(2)),e]}function A(t,e){const n=t=>{const r=t.timeStamp||y();(b||r>=n.attached-1)&&(0,i.$d)(P(t,n.value),e,5,[t])};return n.value=t,n.attached=T(),n}function P(t,e){if((0,r.kJ)(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map((t=>e=>!e._stopped&&t&&t(e)))}return e}const N=/^on[a-z]/,O=(t,e,n,i,o=!1,s,a,c,h)=>{"class"===e?l(t,i,o):"style"===e?u(t,n,i):(0,r.F7)(e)?(0,r.tR)(e)||k(t,e,n,i,a):("."===e[0]?(e=e.slice(1),1):"^"===e[0]?(e=e.slice(1),0):D(t,e,i,o))?v(t,e,i,s,a,c,h):("true-value"===e?t._trueValue=i:"false-value"===e&&(t._falseValue=i),_(t,e,i,o))};function D(t,e,n,i){return i?"innerHTML"===e||"textContent"===e||!!(e in t&&N.test(e)&&(0,r.mf)(n)):"spellcheck"!==e&&"draggable"!==e&&"translate"!==e&&("form"!==e&&(("list"!==e||"INPUT"!==t.tagName)&&(("type"!==e||"TEXTAREA"!==t.tagName)&&((!N.test(e)||!(0,r.HD)(n))&&e in t))))}"undefined"!==typeof HTMLElement&&HTMLElement;const L="transition",M="animation",F=(t,{slots:e})=>(0,i.h)(i.P$,q(t),e);F.displayName="Transition";const j={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},U=(F.props=(0,r.l7)({},i.P$.props,j),(t,e=[])=>{(0,r.kJ)(t)?t.forEach((t=>t(...e))):t&&t(...e)}),$=t=>!!t&&((0,r.kJ)(t)?t.some((t=>t.length>1)):t.length>1);function q(t){const e={};for(const r in t)r in j||(e[r]=t[r]);if(!1===t.css)return e;const{name:n="v",type:i,duration:o,enterFromClass:s=`${n}-enter-from`,enterActiveClass:a=`${n}-enter-active`,enterToClass:c=`${n}-enter-to`,appearFromClass:l=s,appearActiveClass:u=a,appearToClass:h=c,leaveFromClass:d=`${n}-leave-from`,leaveActiveClass:f=`${n}-leave-active`,leaveToClass:p=`${n}-leave-to`}=t,g=B(o),m=g&&g[0],_=g&&g[1],{onBeforeEnter:v,onEnter:y,onEnterCancelled:b,onLeave:w,onLeaveCancelled:C,onBeforeAppear:E=v,onAppear:T=y,onAppearCancelled:I=b}=e,S=(t,e,n)=>{W(t,e?h:c),W(t,e?u:a),n&&n()},k=(t,e)=>{t._isLeaving=!1,W(t,d),W(t,p),W(t,f),e&&e()},x=t=>(e,n)=>{const r=t?T:y,o=()=>S(e,t,n);U(r,[e,o]),z((()=>{W(e,t?l:s),H(e,t?h:c),$(r)||K(e,i,m,o)}))};return(0,r.l7)(e,{onBeforeEnter(t){U(v,[t]),H(t,s),H(t,a)},onBeforeAppear(t){U(E,[t]),H(t,l),H(t,u)},onEnter:x(!1),onAppear:x(!0),onLeave(t,e){t._isLeaving=!0;const n=()=>k(t,e);H(t,d),Q(),H(t,f),z((()=>{t._isLeaving&&(W(t,d),H(t,p),$(w)||K(t,i,_,n))})),U(w,[t,n])},onEnterCancelled(t){S(t,!1),U(b,[t])},onAppearCancelled(t){S(t,!0),U(I,[t])},onLeaveCancelled(t){k(t),U(C,[t])}})}function B(t){if(null==t)return null;if((0,r.Kn)(t))return[V(t.enter),V(t.leave)];{const e=V(t);return[e,e]}}function V(t){const e=(0,r.He)(t);return e}function H(t,e){e.split(/\s+/).forEach((e=>e&&t.classList.add(e))),(t._vtc||(t._vtc=new Set)).add(e)}function W(t,e){e.split(/\s+/).forEach((e=>e&&t.classList.remove(e)));const{_vtc:n}=t;n&&(n.delete(e),n.size||(t._vtc=void 0))}function z(t){requestAnimationFrame((()=>{requestAnimationFrame(t)}))}let G=0;function K(t,e,n,r){const i=t._endId=++G,o=()=>{i===t._endId&&r()};if(n)return setTimeout(o,n);const{type:s,timeout:a,propCount:c}=Y(t,e);if(!s)return r();const l=s+"end";let u=0;const h=()=>{t.removeEventListener(l,d),o()},d=e=>{e.target===t&&++u>=c&&h()};setTimeout((()=>{u<c&&h()}),a+1),t.addEventListener(l,d)}function Y(t,e){const n=window.getComputedStyle(t),r=t=>(n[t]||"").split(", "),i=r(L+"Delay"),o=r(L+"Duration"),s=J(i,o),a=r(M+"Delay"),c=r(M+"Duration"),l=J(a,c);let u=null,h=0,d=0;e===L?s>0&&(u=L,h=s,d=o.length):e===M?l>0&&(u=M,h=l,d=c.length):(h=Math.max(s,l),u=h>0?s>l?L:M:null,d=u?u===L?o.length:c.length:0);const f=u===L&&/\b(transform|all)(,|$)/.test(n[L+"Property"]);return{type:u,timeout:h,propCount:d,hasTransform:f}}function J(t,e){while(t.length<e.length)t=t.concat(t);return Math.max(...e.map(((e,n)=>X(e)+X(t[n]))))}function X(t){return 1e3*Number(t.slice(0,-1).replace(",","."))}function Q(){return document.body.offsetHeight}new WeakMap,new WeakMap;const Z=t=>{const e=t.props["onUpdate:modelValue"]||!1;return(0,r.kJ)(e)?t=>(0,r.ir)(e,t):e};function tt(t){t.target.composing=!0}function et(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const nt={created(t,{modifiers:{lazy:e,trim:n,number:i}},o){t._assign=Z(o);const s=i||o.props&&"number"===o.props.type;I(t,e?"change":"input",(e=>{if(e.target.composing)return;let i=t.value;n&&(i=i.trim()),s&&(i=(0,r.He)(i)),t._assign(i)})),n&&I(t,"change",(()=>{t.value=t.value.trim()})),e||(I(t,"compositionstart",tt),I(t,"compositionend",et),I(t,"change",et))},mounted(t,{value:e}){t.value=null==e?"":e},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:i,number:o}},s){if(t._assign=Z(s),t.composing)return;if(document.activeElement===t&&"range"!==t.type){if(n)return;if(i&&t.value.trim()===e)return;if((o||"number"===t.type)&&(0,r.He)(t.value)===e)return}const a=null==e?"":e;t.value!==a&&(t.value=a)}};const rt=(0,r.l7)({patchProp:O},c);let it;function ot(){return it||(it=(0,i.Us)(rt))}const st=(...t)=>{const e=ot().createApp(...t);const{mount:n}=e;return e.mount=t=>{const i=at(t);if(!i)return;const o=e._component;(0,r.mf)(o)||o.render||o.template||(o.template=i.innerHTML),i.innerHTML="";const s=n(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),s},e};function at(t){if((0,r.HD)(t)){const e=document.querySelector(t);return e}return t}},7139:function(t,e,n){"use strict";function r(t,e){const n=Object.create(null),r=t.split(",");for(let i=0;i<r.length;i++)n[r[i]]=!0;return e?t=>!!n[t.toLowerCase()]:t=>!!n[t]}n.d(e,{C_:function(){return f},DM:function(){return N},E9:function(){return rt},F7:function(){return T},Gg:function(){return H},HD:function(){return L},He:function(){return et},Kn:function(){return F},NO:function(){return C},Nj:function(){return tt},Od:function(){return k},PO:function(){return B},Pq:function(){return a},RI:function(){return R},S0:function(){return V},W7:function(){return q},WV:function(){return g},Z6:function(){return b},_A:function(){return G},_N:function(){return P},aU:function(){return Q},dG:function(){return w},e1:function(){return o},fY:function(){return r},hR:function(){return X},hq:function(){return m},ir:function(){return Z},j5:function(){return l},kC:function(){return J},kJ:function(){return A},kT:function(){return y},l7:function(){return S},mf:function(){return D},rs:function(){return Y},tI:function(){return j},tR:function(){return I},yA:function(){return c},yk:function(){return M},zw:function(){return _}});const i="Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt",o=r(i);const s="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",a=r(s);function c(t){return!!t||""===t}function l(t){if(A(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],i=L(r)?d(r):l(r);if(i)for(const t in i)e[t]=i[t]}return e}return L(t)||F(t)?t:void 0}const u=/;(?![^(]*\))/g,h=/:(.+)/;function d(t){const e={};return t.split(u).forEach((t=>{if(t){const n=t.split(h);n.length>1&&(e[n[0].trim()]=n[1].trim())}})),e}function f(t){let e="";if(L(t))e=t;else if(A(t))for(let n=0;n<t.length;n++){const r=f(t[n]);r&&(e+=r+" ")}else if(F(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}function p(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=g(t[r],e[r]);return n}function g(t,e){if(t===e)return!0;let n=O(t),r=O(e);if(n||r)return!(!n||!r)&&t.getTime()===e.getTime();if(n=M(t),r=M(e),n||r)return t===e;if(n=A(t),r=A(e),n||r)return!(!n||!r)&&p(t,e);if(n=F(t),r=F(e),n||r){if(!n||!r)return!1;const i=Object.keys(t).length,o=Object.keys(e).length;if(i!==o)return!1;for(const n in t){const r=t.hasOwnProperty(n),i=e.hasOwnProperty(n);if(r&&!i||!r&&i||!g(t[n],e[n]))return!1}}return String(t)===String(e)}function m(t,e){return t.findIndex((t=>g(t,e)))}const _=t=>L(t)?t:null==t?"":A(t)||F(t)&&(t.toString===U||!D(t.toString))?JSON.stringify(t,v,2):String(t),v=(t,e)=>e&&e.__v_isRef?v(t,e.value):P(e)?{[`Map(${e.size})`]:[...e.entries()].reduce(((t,[e,n])=>(t[`${e} =>`]=n,t)),{})}:N(e)?{[`Set(${e.size})`]:[...e.values()]}:!F(e)||A(e)||B(e)?e:String(e),y={},b=[],w=()=>{},C=()=>!1,E=/^on[^a-z]/,T=t=>E.test(t),I=t=>t.startsWith("onUpdate:"),S=Object.assign,k=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},x=Object.prototype.hasOwnProperty,R=(t,e)=>x.call(t,e),A=Array.isArray,P=t=>"[object Map]"===$(t),N=t=>"[object Set]"===$(t),O=t=>"[object Date]"===$(t),D=t=>"function"===typeof t,L=t=>"string"===typeof t,M=t=>"symbol"===typeof t,F=t=>null!==t&&"object"===typeof t,j=t=>F(t)&&D(t.then)&&D(t.catch),U=Object.prototype.toString,$=t=>U.call(t),q=t=>$(t).slice(8,-1),B=t=>"[object Object]"===$(t),V=t=>L(t)&&"NaN"!==t&&"-"!==t[0]&&""+parseInt(t,10)===t,H=r(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),W=t=>{const e=Object.create(null);return n=>{const r=e[n];return r||(e[n]=t(n))}},z=/-(\w)/g,G=W((t=>t.replace(z,((t,e)=>e?e.toUpperCase():"")))),K=/\B([A-Z])/g,Y=W((t=>t.replace(K,"-$1").toLowerCase())),J=W((t=>t.charAt(0).toUpperCase()+t.slice(1))),X=W((t=>t?`on${J(t)}`:"")),Q=(t,e)=>!Object.is(t,e),Z=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},tt=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},et=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let nt;const rt=()=>nt||(nt="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self?self:"undefined"!==typeof window?window:"undefined"!==typeof n.g?n.g:{})},4275:function(t,e,n){"use strict";n.d(e,{ZF:function(){return r.ZF}});var r=n(1804),i="firebase",o="9.8.4";
/**
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
 */
(0,r.KN)(i,o,"app")},1178:function(t,e,n){"use strict";n.d(e,{N8:function(){return la},jM:function(){return ea},VF:function(){return Ys},iH:function(){return Gs},t8:function(){return Js},Vx:function(){return Xs}});n(1703);var r=n(1804),i=n(7142),o=n(223),s=n(5168);const a="@firebase/database",c="0.13.2";
/**
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
 */let l="";function u(t){l=t}
/**
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
 */class h{constructor(t){this.domStorage_=t,this.prefix_="firebase:"}set(t,e){null==e?this.domStorage_.removeItem(this.prefixedName_(t)):this.domStorage_.setItem(this.prefixedName_(t),(0,o.Pz)(e))}get(t){const e=this.domStorage_.getItem(this.prefixedName_(t));return null==e?null:(0,o.cI)(e)}remove(t){this.domStorage_.removeItem(this.prefixedName_(t))}prefixedName_(t){return this.prefix_+t}toString(){return this.domStorage_.toString()}}
/**
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
 */class d{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(t,e){null==e?delete this.cache_[t]:this.cache_[t]=e}get(t){return(0,o.r3)(this.cache_,t)?this.cache_[t]:null}remove(t){delete this.cache_[t]}}
/**
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
 */const f=function(t){try{if("undefined"!==typeof window&&"undefined"!==typeof window[t]){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new h(e)}}catch(e){}return new d},p=f("localStorage"),g=f("sessionStorage"),m=new s.Yd("@firebase/database"),_=function(){let t=1;return function(){return t++}}(),v=function(t){const e=(0,o.dS)(t),n=new o.gQ;n.update(e);const r=n.digest();return o.US.encodeByteArray(r)},y=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&"object"===typeof r&&"number"===typeof r.length?e+=y.apply(null,r):e+="object"===typeof r?(0,o.Pz)(r):r,e+=" "}return e};let b=null,w=!0;const C=function(t,e){(0,o.hu)(!e||!0===t||!1===t,"Can't turn on custom loggers persistently."),!0===t?(m.logLevel=s["in"].VERBOSE,b=m.log.bind(m),e&&g.set("logging_enabled",!0)):"function"===typeof t?b=t:(b=null,g.remove("logging_enabled"))},E=function(...t){if(!0===w&&(w=!1,null===b&&!0===g.get("logging_enabled")&&C(!0)),b){const e=y.apply(null,t);b(e)}},T=function(t){return function(...e){E(t,...e)}},I=function(...t){const e="FIREBASE INTERNAL ERROR: "+y(...t);m.error(e)},S=function(...t){const e=`FIREBASE FATAL ERROR: ${y(...t)}`;throw m.error(e),new Error(e)},k=function(...t){const e="FIREBASE WARNING: "+y(...t);m.warn(e)},x=function(){"undefined"!==typeof window&&window.location&&window.location.protocol&&-1!==window.location.protocol.indexOf("https:")&&k("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},R=function(t){return"number"===typeof t&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},A=function(t){if((0,o.Yr)()||"complete"===document.readyState)t();else{let e=!1;const n=function(){document.body?e||(e=!0,t()):setTimeout(n,Math.floor(10))};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",(()=>{"complete"===document.readyState&&n()})),window.attachEvent("onload",n))}},P="[MIN_NAME]",N="[MAX_NAME]",O=function(t,e){if(t===e)return 0;if(t===P||e===N)return-1;if(e===P||t===N)return 1;{const n=z(t),r=z(e);return null!==n?null!==r?n-r===0?t.length-e.length:n-r:-1:null!==r?1:t<e?-1:1}},D=function(t,e){return t===e?0:t<e?-1:1},L=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+(0,o.Pz)(e))},M=function(t){if("object"!==typeof t||null===t)return(0,o.Pz)(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)0!==r&&(n+=","),n+=(0,o.Pz)(e[r]),n+=":",n+=M(t[e[r]]);return n+="}",n},F=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let i=0;i<n;i+=e)i+e>n?r.push(t.substring(i,n)):r.push(t.substring(i,i+e));return r};function j(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const U=function(t){(0,o.hu)(!R(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let i,s,a,c,l;0===t?(s=0,a=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(c=Math.min(Math.floor(Math.log(t)/Math.LN2),r),s=c+r,a=Math.round(t*Math.pow(2,n-c)-Math.pow(2,n))):(s=0,a=Math.round(t/Math.pow(2,1-r-n))));const u=[];for(l=n;l;l-=1)u.push(a%2?1:0),a=Math.floor(a/2);for(l=e;l;l-=1)u.push(s%2?1:0),s=Math.floor(s/2);u.push(i?1:0),u.reverse();const h=u.join("");let d="";for(l=0;l<64;l+=8){let t=parseInt(h.substr(l,8),2).toString(16);1===t.length&&(t="0"+t),d+=t}return d.toLowerCase()},$=function(){return!("object"!==typeof window||!window["chrome"]||!window["chrome"]["extension"]||/^chrome/.test(window.location.href))},q=function(){return"object"===typeof Windows&&"object"===typeof Windows.UI};function B(t,e){let n="Unknown Error";"too_big"===t?n="The data requested exceeds the maximum size that can be accessed with a single request.":"permission_denied"===t?n="Client doesn't have permission to access the desired data.":"unavailable"===t&&(n="The service is unavailable");const r=new Error(t+" at "+e._path.toString()+": "+n);return r.code=t.toUpperCase(),r}const V=new RegExp("^-?(0*)\\d{1,10}$"),H=-2147483648,W=2147483647,z=function(t){if(V.test(t)){const e=Number(t);if(e>=H&&e<=W)return e}return null},G=function(t){try{t()}catch(e){setTimeout((()=>{const t=e.stack||"";throw k("Exception was thrown by user callback.",t),e}),Math.floor(0))}},K=function(){const t="object"===typeof window&&window["navigator"]&&window["navigator"]["userAgent"]||"";return t.search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Y=function(t,e){const n=setTimeout(t,e);return"object"===typeof n&&n["unref"]&&n["unref"](),n};
/**
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
 */
class J{constructor(t,e){this.appName_=t,this.appCheckProvider=e,this.appCheck=null===e||void 0===e?void 0:e.getImmediate({optional:!0}),this.appCheck||null===e||void 0===e||e.get().then((t=>this.appCheck=t))}getToken(t){return this.appCheck?this.appCheck.getToken(t):new Promise(((e,n)=>{setTimeout((()=>{this.appCheck?this.getToken(t).then(e,n):e(null)}),0)}))}addTokenChangeListener(t){var e;null===(e=this.appCheckProvider)||void 0===e||e.get().then((e=>e.addTokenListener(t)))}notifyForInvalidToken(){k(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}
/**
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
 */class X{constructor(t,e,n){this.appName_=t,this.firebaseOptions_=e,this.authProvider_=n,this.auth_=null,this.auth_=n.getImmediate({optional:!0}),this.auth_||n.onInit((t=>this.auth_=t))}getToken(t){return this.auth_?this.auth_.getToken(t).catch((t=>t&&"auth/token-not-initialized"===t.code?(E("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t))):new Promise(((e,n)=>{setTimeout((()=>{this.auth_?this.getToken(t).then(e,n):e(null)}),0)}))}addTokenChangeListener(t){this.auth_?this.auth_.addAuthTokenListener(t):this.authProvider_.get().then((e=>e.addAuthTokenListener(t)))}removeTokenChangeListener(t){this.authProvider_.get().then((e=>e.removeAuthTokenListener(t)))}notifyForInvalidToken(){let t='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?t+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?t+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':t+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',k(t)}}class Q{constructor(t){this.accessToken=t}getToken(t){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(t){t(this.accessToken)}removeTokenChangeListener(t){}notifyForInvalidToken(){}}Q.OWNER="owner";
/**
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
 */
const Z="5",tt="v",et="s",nt="r",rt="f",it=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,ot="ls",st="p",at="ac",ct="websocket",lt="long_polling";
/**
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
 */
class ut{constructor(t,e,n,r,i=!1,o="",s=!1){this.secure=e,this.namespace=n,this.webSocketOnly=r,this.nodeAdmin=i,this.persistenceKey=o,this.includeNamespaceInQueryParams=s,this._host=t.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=p.get("host:"+t)||this._host}isCacheableHost(){return"s-"===this.internalHost.substr(0,2)}isCustomHost(){return"firebaseio.com"!==this._domain&&"firebaseio-demo.com"!==this._domain}get host(){return this._host}set host(t){t!==this.internalHost&&(this.internalHost=t,this.isCacheableHost()&&p.set("host:"+this._host,this.internalHost))}toString(){let t=this.toURLString();return this.persistenceKey&&(t+="<"+this.persistenceKey+">"),t}toURLString(){const t=this.secure?"https://":"http://",e=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${t}${this.host}/${e}`}}function ht(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function dt(t,e,n){let r;if((0,o.hu)("string"===typeof e,"typeof type must == string"),(0,o.hu)("object"===typeof n,"typeof params must == object"),e===ct)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else{if(e!==lt)throw new Error("Unknown connection type: "+e);r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?"}ht(t)&&(n["ns"]=t.namespace);const i=[];return j(n,((t,e)=>{i.push(t+"="+e)})),r+i.join("&")}
/**
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
 */class ft{constructor(){this.counters_={}}incrementCounter(t,e=1){(0,o.r3)(this.counters_,t)||(this.counters_[t]=0),this.counters_[t]+=e}get(){return(0,o.p$)(this.counters_)}}
/**
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
 */const pt={},gt={};function mt(t){const e=t.toString();return pt[e]||(pt[e]=new ft),pt[e]}function _t(t,e){const n=t.toString();return gt[n]||(gt[n]=e()),gt[n]}
/**
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
 */class vt{constructor(t){this.onMessage_=t,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(t,e){this.closeAfterResponse=t,this.onClose=e,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(t,e){this.pendingResponses[t]=e;while(this.pendingResponses[this.currentResponseNum]){const t=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let e=0;e<t.length;++e)t[e]&&G((()=>{this.onMessage_(t[e])}));if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}
/**
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
 */const yt="start",bt="close",wt="pLPCommand",Ct="pRTLPCB",Et="id",Tt="pw",It="ser",St="cb",kt="seg",xt="ts",Rt="d",At="dframe",Pt=1870,Nt=30,Ot=Pt-Nt,Dt=25e3,Lt=3e4;class Mt{constructor(t,e,n,r,i,o,s){this.connId=t,this.repoInfo=e,this.applicationId=n,this.appCheckToken=r,this.authToken=i,this.transportSessionId=o,this.lastSessionId=s,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=T(t),this.stats_=mt(e),this.urlFn=t=>(this.appCheckToken&&(t[at]=this.appCheckToken),dt(e,lt,t))}open(t,e){this.curSegmentNum=0,this.onDisconnect_=e,this.myPacketOrderer=new vt(t),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout((()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null}),Math.floor(Lt)),A((()=>{if(this.isClosed_)return;this.scriptTagHolder=new Ft(((...t)=>{const[e,n,r,i,o]=t;if(this.incrementIncomingBytes_(t),this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,e===yt)this.id=n,this.password=r;else{if(e!==bt)throw new Error("Unrecognized command received: "+e);n?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(n,(()=>{this.onClosed_()}))):this.onClosed_()}}),((...t)=>{const[e,n]=t;this.incrementIncomingBytes_(t),this.myPacketOrderer.handleResponse(e,n)}),(()=>{this.onClosed_()}),this.urlFn);const t={};t[yt]="t",t[It]=Math.floor(1e8*Math.random()),this.scriptTagHolder.uniqueCallbackIdentifier&&(t[St]=this.scriptTagHolder.uniqueCallbackIdentifier),t[tt]=Z,this.transportSessionId&&(t[et]=this.transportSessionId),this.lastSessionId&&(t[ot]=this.lastSessionId),this.applicationId&&(t[st]=this.applicationId),this.appCheckToken&&(t[at]=this.appCheckToken),"undefined"!==typeof location&&location.hostname&&it.test(location.hostname)&&(t[nt]=rt);const e=this.urlFn(t);this.log_("Connecting via long-poll to "+e),this.scriptTagHolder.addTag(e,(()=>{}))}))}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Mt.forceAllow_=!0}static forceDisallow(){Mt.forceDisallow_=!0}static isAvailable(){return!(0,o.Yr)()&&(!!Mt.forceAllow_||!Mt.forceDisallow_&&"undefined"!==typeof document&&null!=document.createElement&&!$()&&!q())}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(t){const e=(0,o.Pz)(t);this.bytesSent+=e.length,this.stats_.incrementCounter("bytes_sent",e.length);const n=(0,o.h$)(e),r=F(n,Ot);for(let i=0;i<r.length;i++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,r.length,r[i]),this.curSegmentNum++}addDisconnectPingFrame(t,e){if((0,o.Yr)())return;this.myDisconnFrame=document.createElement("iframe");const n={};n[At]="t",n[Et]=t,n[Tt]=e,this.myDisconnFrame.src=this.urlFn(n),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(t){const e=(0,o.Pz)(t).length;this.bytesReceived+=e,this.stats_.incrementCounter("bytes_received",e)}}class Ft{constructor(t,e,n,r){if(this.onDisconnect=n,this.urlFn=r,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(1e8*Math.random()),this.sendNewPolls=!0,(0,o.Yr)())this.commandCB=t,this.onMessageCB=e;else{this.uniqueCallbackIdentifier=_(),window[wt+this.uniqueCallbackIdentifier]=t,window[Ct+this.uniqueCallbackIdentifier]=e,this.myIFrame=Ft.createIFrame_();let n="";if(this.myIFrame.src&&"javascript:"===this.myIFrame.src.substr(0,"javascript:".length)){const t=document.domain;n='<script>document.domain="'+t+'";<\/script>'}const r="<html><body>"+n+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(r),this.myIFrame.doc.close()}catch(i){E("frame writing exception"),i.stack&&E(i.stack),E(i)}}}static createIFrame_(){const t=document.createElement("iframe");if(t.style.display="none",!document.body)throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";document.body.appendChild(t);try{const e=t.contentWindow.document;e||E("No IE domain setting required")}catch(e){const n=document.domain;t.src="javascript:void((function(){document.open();document.domain='"+n+"';document.close();})())"}return t.contentDocument?t.doc=t.contentDocument:t.contentWindow?t.doc=t.contentWindow.document:t.document&&(t.doc=t.document),t}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.innerHTML="",setTimeout((()=>{null!==this.myIFrame&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)}),Math.floor(0)));const t=this.onDisconnect;t&&(this.onDisconnect=null,t())}startLongPoll(t,e){this.myID=t,this.myPW=e,this.alive=!0;while(this.newRequest_());}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const t={};t[Et]=this.myID,t[Tt]=this.myPW,t[It]=this.currentSerial;let e=this.urlFn(t),n="",r=0;while(this.pendingSegs.length>0){const t=this.pendingSegs[0];if(!(t.d.length+Nt+n.length<=Pt))break;{const t=this.pendingSegs.shift();n=n+"&"+kt+r+"="+t.seg+"&"+xt+r+"="+t.ts+"&"+Rt+r+"="+t.d,r++}}return e+=n,this.addLongPollTag_(e,this.currentSerial),!0}return!1}enqueueSegment(t,e,n){this.pendingSegs.push({seg:t,ts:e,d:n}),this.alive&&this.newRequest_()}addLongPollTag_(t,e){this.outstandingRequests.add(e);const n=()=>{this.outstandingRequests.delete(e),this.newRequest_()},r=setTimeout(n,Math.floor(Dt)),i=()=>{clearTimeout(r),n()};this.addTag(t,i)}addTag(t,e){(0,o.Yr)()?this.doNodeLongPoll(t,e):setTimeout((()=>{try{if(!this.sendNewPolls)return;const n=this.myIFrame.doc.createElement("script");n.type="text/javascript",n.async=!0,n.src=t,n.onload=n.onreadystatechange=function(){const t=n.readyState;t&&"loaded"!==t&&"complete"!==t||(n.onload=n.onreadystatechange=null,n.parentNode&&n.parentNode.removeChild(n),e())},n.onerror=()=>{E("Long-poll script failed to load: "+t),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(n)}catch(n){}}),Math.floor(1))}}
/**
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
 */const jt=16384,Ut=45e3;let $t=null;"undefined"!==typeof MozWebSocket?$t=MozWebSocket:"undefined"!==typeof WebSocket&&($t=WebSocket);class qt{constructor(t,e,n,r,i,o,s){this.connId=t,this.applicationId=n,this.appCheckToken=r,this.authToken=i,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=T(this.connId),this.stats_=mt(e),this.connURL=qt.connectionURL_(e,o,s,r,n),this.nodeAdmin=e.nodeAdmin}static connectionURL_(t,e,n,r,i){const s={};return s[tt]=Z,!(0,o.Yr)()&&"undefined"!==typeof location&&location.hostname&&it.test(location.hostname)&&(s[nt]=rt),e&&(s[et]=e),n&&(s[ot]=n),r&&(s[at]=r),i&&(s[st]=i),dt(t,ct,s)}open(t,e){this.onDisconnect=e,this.onMessage=t,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,p.set("previous_websocket_failure",!0);try{let t;if((0,o.Yr)()){const t=this.nodeAdmin?"AdminNode":"Node",e={headers:{"User-Agent":`Firebase/${Z}/${l}/${process.platform}/${t}`,"X-Firebase-GMPID":this.applicationId||""}};this.authToken&&(e.headers["Authorization"]=`Bearer ${this.authToken}`),this.appCheckToken&&(e.headers["X-Firebase-AppCheck"]=this.appCheckToken);const n={NODE_ENV:"production",VUE_APP_API_KEY:"AIzaSyCxS6Oo_sOPgOe1_6lxX6pt-MkZ6DRyogc",VUE_APP_AUTH_DOMAIN:"teste-56da2.firebaseapp.com",VUE_APP_DATABASE_URL:"https://teste-56da2.firebaseio.com",VUE_APP_PROJECT_ID:"teste-56da2",VUE_APP_STORAGE_BUCKET:"teste-56da2.appspot.com",VUE_APP_MESSAGING_SENDER_ID:"116490922695",VUE_APP_APP_ID:"1:116490922695:web:2f25ab1346ca0c179c6ce2",BASE_URL:"/"},r=0===this.connURL.indexOf("wss://")?n["HTTPS_PROXY"]||n["https_proxy"]:n["HTTP_PROXY"]||n["http_proxy"];r&&(e["proxy"]={origin:r})}this.mySock=new $t(this.connURL,[],t)}catch(n){this.log_("Error instantiating WebSocket.");const t=n.message||n.data;return t&&this.log_(t),void this.onClosed_()}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=t=>{this.handleIncomingFrame(t)},this.mySock.onerror=t=>{this.log_("WebSocket error.  Closing connection.");const e=t.message||t.data;e&&this.log_(e),this.onClosed_()}}start(){}static forceDisallow(){qt.forceDisallow_=!0}static isAvailable(){let t=!1;if("undefined"!==typeof navigator&&navigator.userAgent){const e=/Android ([0-9]{0,}\.[0-9]{0,})/,n=navigator.userAgent.match(e);n&&n.length>1&&parseFloat(n[1])<4.4&&(t=!0)}return!t&&null!==$t&&!qt.forceDisallow_}static previouslyFailed(){return p.isInMemoryStorage||!0===p.get("previous_websocket_failure")}markConnectionHealthy(){p.remove("previous_websocket_failure")}appendFrame_(t){if(this.frames.push(t),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const e=(0,o.cI)(t);this.onMessage(e)}}handleNewFrameCount_(t){this.totalFrames=t,this.frames=[]}extractFrameCount_(t){if((0,o.hu)(null===this.frames,"We already have a frame buffer"),t.length<=6){const e=Number(t);if(!isNaN(e))return this.handleNewFrameCount_(e),null}return this.handleNewFrameCount_(1),t}handleIncomingFrame(t){if(null===this.mySock)return;const e=t["data"];if(this.bytesReceived+=e.length,this.stats_.incrementCounter("bytes_received",e.length),this.resetKeepAlive(),null!==this.frames)this.appendFrame_(e);else{const t=this.extractFrameCount_(e);null!==t&&this.appendFrame_(t)}}send(t){this.resetKeepAlive();const e=(0,o.Pz)(t);this.bytesSent+=e.length,this.stats_.incrementCounter("bytes_sent",e.length);const n=F(e,jt);n.length>1&&this.sendString_(String(n.length));for(let r=0;r<n.length;r++)this.sendString_(n[r])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval((()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()}),Math.floor(Ut))}sendString_(t){try{this.mySock.send(t)}catch(e){this.log_("Exception thrown from WebSocket.send():",e.message||e.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}qt.responsesRequiredToBeHealthy=2,qt.healthyTimeout=3e4;
/**
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
 */
class Bt{constructor(t){this.initTransports_(t)}static get ALL_TRANSPORTS(){return[Mt,qt]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(t){const e=qt&&qt["isAvailable"]();let n=e&&!qt.previouslyFailed();if(t.webSocketOnly&&(e||k("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),n=!0),n)this.transports_=[qt];else{const t=this.transports_=[];for(const e of Bt.ALL_TRANSPORTS)e&&e["isAvailable"]()&&t.push(e);Bt.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Bt.globalTransportInitialized_=!1;
/**
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
 */
const Vt=6e4,Ht=5e3,Wt=10240,zt=102400,Gt="t",Kt="d",Yt="s",Jt="r",Xt="e",Qt="o",Zt="a",te="n",ee="p",ne="h";class re{constructor(t,e,n,r,i,o,s,a,c,l){this.id=t,this.repoInfo_=e,this.applicationId_=n,this.appCheckToken_=r,this.authToken_=i,this.onMessage_=o,this.onReady_=s,this.onDisconnect_=a,this.onKill_=c,this.lastSessionId=l,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=T("c:"+this.id+":"),this.transportManager_=new Bt(e),this.log_("Connection created"),this.start_()}start_(){const t=this.transportManager_.initialTransport();this.conn_=new t(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=t["responsesRequiredToBeHealthy"]||0;const e=this.connReceiver_(this.conn_),n=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout((()=>{this.conn_&&this.conn_.open(e,n)}),Math.floor(0));const r=t["healthyTimeout"]||0;r>0&&(this.healthyTimeout_=Y((()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>zt?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>Wt?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))}),Math.floor(r)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(t){return e=>{t===this.conn_?this.onConnectionLost_(e):t===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(t){return e=>{2!==this.state_&&(t===this.rx_?this.onPrimaryMessageReceived_(e):t===this.secondaryConn_?this.onSecondaryMessageReceived_(e):this.log_("message on old connection"))}}sendRequest(t){const e={t:"d",d:t};this.sendData_(e)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(t){if(Gt in t){const e=t[Gt];e===Zt?this.upgradeIfSecondaryHealthy_():e===Jt?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),this.tx_!==this.secondaryConn_&&this.rx_!==this.secondaryConn_||this.close()):e===Qt&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(t){const e=L("t",t),n=L("d",t);if("c"===e)this.onSecondaryControl_(n);else{if("d"!==e)throw new Error("Unknown protocol layer: "+e);this.pendingDataMessages.push(n)}}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:ee,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Zt,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:te,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(t){const e=L("t",t),n=L("d",t);"c"===e?this.onControl_(n):"d"===e&&this.onDataMessage_(n)}onDataMessage_(t){this.onPrimaryResponse_(),this.onMessage_(t)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(t){const e=L(Gt,t);if(Kt in t){const n=t[Kt];if(e===ne)this.onHandshake_(n);else if(e===te){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let t=0;t<this.pendingDataMessages.length;++t)this.onDataMessage_(this.pendingDataMessages[t]);this.pendingDataMessages=[],this.tryCleanupConnection()}else e===Yt?this.onConnectionShutdown_(n):e===Jt?this.onReset_(n):e===Xt?I("Server Error: "+n):e===Qt?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):I("Unknown control packet command: "+e)}}onHandshake_(t){const e=t.ts,n=t.v,r=t.h;this.sessionId=t.s,this.repoInfo_.host=r,0===this.state_&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,e),Z!==n&&k("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const t=this.transportManager_.upgradeTransport();t&&this.startUpgrade_(t)}startUpgrade_(t){this.secondaryConn_=new t(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=t["responsesRequiredToBeHealthy"]||0;const e=this.connReceiver_(this.secondaryConn_),n=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(e,n),Y((()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())}),Math.floor(Vt))}onReset_(t){this.log_("Reset packet received.  New host: "+t),this.repoInfo_.host=t,1===this.state_?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(t,e){this.log_("Realtime connection established."),this.conn_=t,this.state_=1,this.onReady_&&(this.onReady_(e,this.sessionId),this.onReady_=null),0===this.primaryResponsesRequired_?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Y((()=>{this.sendPingOnPrimaryIfNecessary_()}),Math.floor(Ht))}sendPingOnPrimaryIfNecessary_(){this.isHealthy_||1!==this.state_||(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:ee,d:{}}}))}onSecondaryConnectionLost_(){const t=this.secondaryConn_;this.secondaryConn_=null,this.tx_!==t&&this.rx_!==t||this.close()}onConnectionLost_(t){this.conn_=null,t||0!==this.state_?1===this.state_&&this.log_("Realtime connection lost."):(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(p.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)),this.close()}onConnectionShutdown_(t){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(t),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(t){if(1!==this.state_)throw"Connection is not connected";this.tx_.send(t)}close(){2!==this.state_&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}
/**
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
 */class ie{put(t,e,n,r){}merge(t,e,n,r){}refreshAuthToken(t){}refreshAppCheckToken(t){}onDisconnectPut(t,e,n){}onDisconnectMerge(t,e,n){}onDisconnectCancel(t,e){}reportStats(t){}}
/**
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
 */class oe{constructor(t){this.allowedEvents_=t,this.listeners_={},(0,o.hu)(Array.isArray(t)&&t.length>0,"Requires a non-empty array")}trigger(t,...e){if(Array.isArray(this.listeners_[t])){const n=[...this.listeners_[t]];for(let t=0;t<n.length;t++)n[t].callback.apply(n[t].context,e)}}on(t,e,n){this.validateEventType_(t),this.listeners_[t]=this.listeners_[t]||[],this.listeners_[t].push({callback:e,context:n});const r=this.getInitialEvent(t);r&&e.apply(n,r)}off(t,e,n){this.validateEventType_(t);const r=this.listeners_[t]||[];for(let i=0;i<r.length;i++)if(r[i].callback===e&&(!n||n===r[i].context))return void r.splice(i,1)}validateEventType_(t){(0,o.hu)(this.allowedEvents_.find((e=>e===t)),"Unknown event: "+t)}}
/**
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
 */class se extends oe{constructor(){super(["online"]),this.online_=!0,"undefined"===typeof window||"undefined"===typeof window.addEventListener||(0,o.uI)()||(window.addEventListener("online",(()=>{this.online_||(this.online_=!0,this.trigger("online",!0))}),!1),window.addEventListener("offline",(()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))}),!1))}static getInstance(){return new se}getInitialEvent(t){return(0,o.hu)("online"===t,"Unknown event type: "+t),[this.online_]}currentlyOnline(){return this.online_}}
/**
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
 */const ae=32,ce=768;class le{constructor(t,e){if(void 0===e){this.pieces_=t.split("/");let e=0;for(let t=0;t<this.pieces_.length;t++)this.pieces_[t].length>0&&(this.pieces_[e]=this.pieces_[t],e++);this.pieces_.length=e,this.pieceNum_=0}else this.pieces_=t,this.pieceNum_=e}toString(){let t="";for(let e=this.pieceNum_;e<this.pieces_.length;e++)""!==this.pieces_[e]&&(t+="/"+this.pieces_[e]);return t||"/"}}function ue(){return new le("")}function he(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function de(t){return t.pieces_.length-t.pieceNum_}function fe(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new le(t.pieces_,e)}function pe(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function ge(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)""!==t.pieces_[n]&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function me(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function _e(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new le(e,0)}function ve(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof le)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const t=e.split("/");for(let e=0;e<t.length;e++)t[e].length>0&&n.push(t[e])}return new le(n,0)}function ye(t){return t.pieceNum_>=t.pieces_.length}function be(t,e){const n=he(t),r=he(e);if(null===n)return e;if(n===r)return be(fe(t),fe(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function we(t,e){const n=me(t,0),r=me(e,0);for(let i=0;i<n.length&&i<r.length;i++){const t=O(n[i],r[i]);if(0!==t)return t}return n.length===r.length?0:n.length<r.length?-1:1}function Ce(t,e){if(de(t)!==de(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function Ee(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(de(t)>de(e))return!1;while(n<t.pieces_.length){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class Te{constructor(t,e){this.errorPrefix_=e,this.parts_=me(t,0),this.byteLength_=Math.max(1,this.parts_.length);for(let n=0;n<this.parts_.length;n++)this.byteLength_+=(0,o.ug)(this.parts_[n]);ke(this)}}function Ie(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=(0,o.ug)(e),ke(t)}function Se(t){const e=t.parts_.pop();t.byteLength_-=(0,o.ug)(e),t.parts_.length>0&&(t.byteLength_-=1)}function ke(t){if(t.byteLength_>ce)throw new Error(t.errorPrefix_+"has a key path longer than "+ce+" bytes ("+t.byteLength_+").");if(t.parts_.length>ae)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+ae+") or object contains a cycle "+xe(t))}function xe(t){return 0===t.parts_.length?"":"in property '"+t.parts_.join(".")+"'"}
/**
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
 */class Re extends oe{constructor(){let t,e;super(["visible"]),"undefined"!==typeof document&&"undefined"!==typeof document.addEventListener&&("undefined"!==typeof document["hidden"]?(e="visibilitychange",t="hidden"):"undefined"!==typeof document["mozHidden"]?(e="mozvisibilitychange",t="mozHidden"):"undefined"!==typeof document["msHidden"]?(e="msvisibilitychange",t="msHidden"):"undefined"!==typeof document["webkitHidden"]&&(e="webkitvisibilitychange",t="webkitHidden")),this.visible_=!0,e&&document.addEventListener(e,(()=>{const e=!document[t];e!==this.visible_&&(this.visible_=e,this.trigger("visible",e))}),!1)}static getInstance(){return new Re}getInitialEvent(t){return(0,o.hu)("visible"===t,"Unknown event type: "+t),[this.visible_]}}
/**
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
 */const Ae=1e3,Pe=3e5,Ne=3e3,Oe=3e4,De=1.3,Le=3e4,Me="server_kill",Fe=3;class je extends ie{constructor(t,e,n,r,i,s,a,c){if(super(),this.repoInfo_=t,this.applicationId_=e,this.onDataUpdate_=n,this.onConnectStatus_=r,this.onServerInfoUpdate_=i,this.authTokenProvider_=s,this.appCheckTokenProvider_=a,this.authOverride_=c,this.id=je.nextPersistentConnectionId_++,this.log_=T("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Ae,this.maxReconnectDelay_=Pe,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,c&&!(0,o.Yr)())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Re.getInstance().on("visible",this.onVisible_,this),-1===t.host.indexOf("fblocal")&&se.getInstance().on("online",this.onOnline_,this)}sendRequest(t,e,n){const r=++this.requestNumber_,i={r:r,a:t,b:e};this.log_((0,o.Pz)(i)),(0,o.hu)(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(i),n&&(this.requestCBHash_[r]=n)}get(t){this.initConnection_();const e=new o.BH,n={p:t._path.toString(),q:t._queryObject},r={action:"g",request:n,onComplete:t=>{const n=t["d"];"ok"===t["s"]?e.resolve(n):e.reject(n)}};this.outstandingGets_.push(r),this.outstandingGetCount_++;const i=this.outstandingGets_.length-1;return this.connected_||setTimeout((()=>{const t=this.outstandingGets_[i];void 0!==t&&r===t&&(delete this.outstandingGets_[i],this.outstandingGetCount_--,0===this.outstandingGetCount_&&(this.outstandingGets_=[]),this.log_("get "+i+" timed out on connection"),e.reject(new Error("Client is offline.")))}),Ne),this.connected_&&this.sendGet_(i),e.promise}listen(t,e,n,r){this.initConnection_();const i=t._queryIdentifier,s=t._path.toString();this.log_("Listen called for "+s+" "+i),this.listens.has(s)||this.listens.set(s,new Map),(0,o.hu)(t._queryParams.isDefault()||!t._queryParams.loadsAllData(),"listen() called for non-default but complete query"),(0,o.hu)(!this.listens.get(s).has(i),"listen() called twice for same path/queryId.");const a={onComplete:r,hashFn:e,query:t,tag:n};this.listens.get(s).set(i,a),this.connected_&&this.sendListen_(a)}sendGet_(t){const e=this.outstandingGets_[t];this.sendRequest("g",e.request,(n=>{delete this.outstandingGets_[t],this.outstandingGetCount_--,0===this.outstandingGetCount_&&(this.outstandingGets_=[]),e.onComplete&&e.onComplete(n)}))}sendListen_(t){const e=t.query,n=e._path.toString(),r=e._queryIdentifier;this.log_("Listen on "+n+" for "+r);const i={p:n},o="q";t.tag&&(i["q"]=e._queryObject,i["t"]=t.tag),i["h"]=t.hashFn(),this.sendRequest(o,i,(i=>{const o=i["d"],s=i["s"];je.warnOnListenWarnings_(o,e);const a=this.listens.get(n)&&this.listens.get(n).get(r);a===t&&(this.log_("listen response",i),"ok"!==s&&this.removeListen_(n,r),t.onComplete&&t.onComplete(s,o))}))}static warnOnListenWarnings_(t,e){if(t&&"object"===typeof t&&(0,o.r3)(t,"w")){const n=(0,o.DV)(t,"w");if(Array.isArray(n)&&~n.indexOf("no_index")){const t='".indexOn": "'+e._queryParams.getIndex().toString()+'"',n=e._path.toString();k(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${t} at ${n} to your security rules for better performance.`)}}}refreshAuthToken(t){this.authToken_=t,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},(()=>{})),this.reduceReconnectDelayIfAdminCredential_(t)}reduceReconnectDelayIfAdminCredential_(t){const e=t&&40===t.length;(e||(0,o.GJ)(t))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Oe)}refreshAppCheckToken(t){this.appCheckToken_=t,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},(()=>{}))}tryAuth(){if(this.connected_&&this.authToken_){const t=this.authToken_,e=(0,o.w9)(t)?"auth":"gauth",n={cred:t};null===this.authOverride_?n["noauth"]=!0:"object"===typeof this.authOverride_&&(n["authvar"]=this.authOverride_),this.sendRequest(e,n,(e=>{const n=e["s"],r=e["d"]||"error";this.authToken_===t&&("ok"===n?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(n,r))}))}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},(t=>{const e=t["s"],n=t["d"]||"error";"ok"===e?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(e,n)}))}unlisten(t,e){const n=t._path.toString(),r=t._queryIdentifier;this.log_("Unlisten called for "+n+" "+r),(0,o.hu)(t._queryParams.isDefault()||!t._queryParams.loadsAllData(),"unlisten() called for non-default but complete query");const i=this.removeListen_(n,r);i&&this.connected_&&this.sendUnlisten_(n,r,t._queryObject,e)}sendUnlisten_(t,e,n,r){this.log_("Unlisten on "+t+" for "+e);const i={p:t},o="n";r&&(i["q"]=n,i["t"]=r),this.sendRequest(o,i)}onDisconnectPut(t,e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",t,e,n):this.onDisconnectRequestQueue_.push({pathString:t,action:"o",data:e,onComplete:n})}onDisconnectMerge(t,e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",t,e,n):this.onDisconnectRequestQueue_.push({pathString:t,action:"om",data:e,onComplete:n})}onDisconnectCancel(t,e){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",t,null,e):this.onDisconnectRequestQueue_.push({pathString:t,action:"oc",data:null,onComplete:e})}sendOnDisconnect_(t,e,n,r){const i={p:e,d:n};this.log_("onDisconnect "+t,i),this.sendRequest(t,i,(t=>{r&&setTimeout((()=>{r(t["s"],t["d"])}),Math.floor(0))}))}put(t,e,n,r){this.putInternal("p",t,e,n,r)}merge(t,e,n,r){this.putInternal("m",t,e,n,r)}putInternal(t,e,n,r,i){this.initConnection_();const o={p:e,d:n};void 0!==i&&(o["h"]=i),this.outstandingPuts_.push({action:t,request:o,onComplete:r}),this.outstandingPutCount_++;const s=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(s):this.log_("Buffering put: "+e)}sendPut_(t){const e=this.outstandingPuts_[t].action,n=this.outstandingPuts_[t].request,r=this.outstandingPuts_[t].onComplete;this.outstandingPuts_[t].queued=this.connected_,this.sendRequest(e,n,(n=>{this.log_(e+" response",n),delete this.outstandingPuts_[t],this.outstandingPutCount_--,0===this.outstandingPutCount_&&(this.outstandingPuts_=[]),r&&r(n["s"],n["d"])}))}reportStats(t){if(this.connected_){const e={c:t};this.log_("reportStats",e),this.sendRequest("s",e,(t=>{const e=t["s"];if("ok"!==e){const e=t["d"];this.log_("reportStats","Error sending stats: "+e)}}))}}onDataMessage_(t){if("r"in t){this.log_("from server: "+(0,o.Pz)(t));const e=t["r"],n=this.requestCBHash_[e];n&&(delete this.requestCBHash_[e],n(t["b"]))}else{if("error"in t)throw"A server-side error has occurred: "+t["error"];"a"in t&&this.onDataPush_(t["a"],t["b"])}}onDataPush_(t,e){this.log_("handleServerMessage",t,e),"d"===t?this.onDataUpdate_(e["p"],e["d"],!1,e["t"]):"m"===t?this.onDataUpdate_(e["p"],e["d"],!0,e["t"]):"c"===t?this.onListenRevoked_(e["p"],e["q"]):"ac"===t?this.onAuthRevoked_(e["s"],e["d"]):"apc"===t?this.onAppCheckRevoked_(e["s"],e["d"]):"sd"===t?this.onSecurityDebugPacket_(e):I("Unrecognized action received from server: "+(0,o.Pz)(t)+"\nAre you using the latest client?")}onReady_(t,e){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=(new Date).getTime(),this.handleTimestamp_(t),this.lastSessionId=e,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(t){(0,o.hu)(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout((()=>{this.establishConnectionTimer_=null,this.establishConnection_()}),Math.floor(t))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(t){t&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Ae,this.realtime_||this.scheduleConnect_(0)),this.visible_=t}onOnline_(t){t?(this.log_("Browser went online."),this.reconnectDelay_=Ae,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){if(this.visible_){if(this.lastConnectionEstablishedTime_){const t=(new Date).getTime()-this.lastConnectionEstablishedTime_;t>Le&&(this.reconnectDelay_=Ae),this.lastConnectionEstablishedTime_=null}}else this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=(new Date).getTime();const t=(new Date).getTime()-this.lastConnectionAttemptTime_;let e=Math.max(0,this.reconnectDelay_-t);e=Math.random()*e,this.log_("Trying to reconnect in "+e+"ms"),this.scheduleConnect_(e),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*De)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=(new Date).getTime(),this.lastConnectionEstablishedTime_=null;const t=this.onDataMessage_.bind(this),e=this.onReady_.bind(this),n=this.onRealtimeDisconnect_.bind(this),r=this.id+":"+je.nextConnectionId_++,i=this.lastSessionId;let s=!1,a=null;const c=function(){a?a.close():(s=!0,n())},l=function(t){(0,o.hu)(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(t)};this.realtime_={close:c,sendRequest:l};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[o,c]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);s?E("getToken() completed but was canceled"):(E("getToken() completed. Creating connection."),this.authToken_=o&&o.accessToken,this.appCheckToken_=c&&c.token,a=new re(r,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,t,e,n,(t=>{k(t+" ("+this.repoInfo_.toString()+")"),this.interrupt(Me)}),i))}catch(I){this.log_("Failed to get token: "+I),s||(this.repoInfo_.nodeAdmin&&k(I),c())}}}interrupt(t){E("Interrupting connection for reason: "+t),this.interruptReasons_[t]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(t){E("Resuming connection for reason: "+t),delete this.interruptReasons_[t],(0,o.xb)(this.interruptReasons_)&&(this.reconnectDelay_=Ae,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(t){const e=t-(new Date).getTime();this.onServerInfoUpdate_({serverTimeOffset:e})}cancelSentTransactions_(){for(let t=0;t<this.outstandingPuts_.length;t++){const e=this.outstandingPuts_[t];e&&"h"in e.request&&e.queued&&(e.onComplete&&e.onComplete("disconnect"),delete this.outstandingPuts_[t],this.outstandingPutCount_--)}0===this.outstandingPutCount_&&(this.outstandingPuts_=[])}onListenRevoked_(t,e){let n;n=e?e.map((t=>M(t))).join("$"):"default";const r=this.removeListen_(t,n);r&&r.onComplete&&r.onComplete("permission_denied")}removeListen_(t,e){const n=new le(t).toString();let r;if(this.listens.has(n)){const t=this.listens.get(n);r=t.get(e),t.delete(e),0===t.size&&this.listens.delete(n)}else r=void 0;return r}onAuthRevoked_(t,e){E("Auth token revoked: "+t+"/"+e),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),"invalid_token"!==t&&"permission_denied"!==t||(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Fe&&(this.reconnectDelay_=Oe,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(t,e){E("App check token revoked: "+t+"/"+e),this.appCheckToken_=null,this.forceTokenRefresh_=!0,"invalid_token"!==t&&"permission_denied"!==t||(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Fe&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(t){this.securityDebugCallback_?this.securityDebugCallback_(t):"msg"in t&&console.log("FIREBASE: "+t["msg"].replace("\n","\nFIREBASE: "))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const t of this.listens.values())for(const e of t.values())this.sendListen_(e);for(let t=0;t<this.outstandingPuts_.length;t++)this.outstandingPuts_[t]&&this.sendPut_(t);while(this.onDisconnectRequestQueue_.length){const t=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(t.action,t.pathString,t.data,t.onComplete)}for(let t=0;t<this.outstandingGets_.length;t++)this.outstandingGets_[t]&&this.sendGet_(t)}sendConnectStats_(){const t={};let e="js";(0,o.Yr)()&&(e=this.repoInfo_.nodeAdmin?"admin_node":"node"),t["sdk."+e+"."+l.replace(/\./g,"-")]=1,(0,o.uI)()?t["framework.cordova"]=1:(0,o.b$)()&&(t["framework.reactnative"]=1),this.reportStats(t)}shouldReconnect_(){const t=se.getInstance().currentlyOnline();return(0,o.xb)(this.interruptReasons_)&&t}}je.nextPersistentConnectionId_=0,je.nextConnectionId_=0;
/**
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
 */
class Ue{constructor(t,e){this.name=t,this.node=e}static Wrap(t,e){return new Ue(t,e)}}
/**
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
 */class $e{getCompare(){return this.compare.bind(this)}indexedValueChanged(t,e){const n=new Ue(P,t),r=new Ue(P,e);return 0!==this.compare(n,r)}minPost(){return Ue.MIN}}
/**
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
 */let qe;class Be extends $e{static get __EMPTY_NODE(){return qe}static set __EMPTY_NODE(t){qe=t}compare(t,e){return O(t.name,e.name)}isDefinedOn(t){throw(0,o.g5)("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(t,e){return!1}minPost(){return Ue.MIN}maxPost(){return new Ue(N,qe)}makePost(t,e){return(0,o.hu)("string"===typeof t,"KeyIndex indexValue must always be a string."),new Ue(t,qe)}toString(){return".key"}}const Ve=new Be;
/**
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
 */class He{constructor(t,e,n,r,i=null){this.isReverse_=r,this.resultGenerator_=i,this.nodeStack_=[];let o=1;while(!t.isEmpty())if(o=e?n(t.key,e):1,r&&(o*=-1),o<0)t=this.isReverse_?t.left:t.right;else{if(0===o){this.nodeStack_.push(t);break}this.nodeStack_.push(t),t=this.isReverse_?t.right:t.left}}getNext(){if(0===this.nodeStack_.length)return null;let t,e=this.nodeStack_.pop();if(t=this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value},this.isReverse_){e=e.left;while(!e.isEmpty())this.nodeStack_.push(e),e=e.right}else{e=e.right;while(!e.isEmpty())this.nodeStack_.push(e),e=e.left}return t}hasNext(){return this.nodeStack_.length>0}peek(){if(0===this.nodeStack_.length)return null;const t=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(t.key,t.value):{key:t.key,value:t.value}}}class We{constructor(t,e,n,r,i){this.key=t,this.value=e,this.color=null!=n?n:We.RED,this.left=null!=r?r:Ge.EMPTY_NODE,this.right=null!=i?i:Ge.EMPTY_NODE}copy(t,e,n,r,i){return new We(null!=t?t:this.key,null!=e?e:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=i?i:this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||!!t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let r=this;const i=n(t,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(t,e,n),null):0===i?r.copy(null,e,null,null,null):r.copy(null,null,null,null,r.right.insert(t,e,n)),r.fixUp_()}removeMin_(){if(this.left.isEmpty())return Ge.EMPTY_NODE;let t=this;return t.left.isRed_()||t.left.left.isRed_()||(t=t.moveRedLeft_()),t=t.copy(null,null,null,t.left.removeMin_(),null),t.fixUp_()}remove(t,e){let n,r;if(n=this,e(t,n.key)<0)n.left.isEmpty()||n.left.isRed_()||n.left.left.isRed_()||(n=n.moveRedLeft_()),n=n.copy(null,null,null,n.left.remove(t,e),null);else{if(n.left.isRed_()&&(n=n.rotateRight_()),n.right.isEmpty()||n.right.isRed_()||n.right.left.isRed_()||(n=n.moveRedRight_()),0===e(t,n.key)){if(n.right.isEmpty())return Ge.EMPTY_NODE;r=n.right.min_(),n=n.copy(r.key,r.value,null,null,n.right.removeMin_())}n=n.copy(null,null,null,null,n.right.remove(t,e))}return n.fixUp_()}isRed_(){return this.color}fixUp_(){let t=this;return t.right.isRed_()&&!t.left.isRed_()&&(t=t.rotateLeft_()),t.left.isRed_()&&t.left.left.isRed_()&&(t=t.rotateRight_()),t.left.isRed_()&&t.right.isRed_()&&(t=t.colorFlip_()),t}moveRedLeft_(){let t=this.colorFlip_();return t.right.left.isRed_()&&(t=t.copy(null,null,null,null,t.right.rotateRight_()),t=t.rotateLeft_(),t=t.colorFlip_()),t}moveRedRight_(){let t=this.colorFlip_();return t.left.left.isRed_()&&(t=t.rotateRight_(),t=t.colorFlip_()),t}rotateLeft_(){const t=this.copy(null,null,We.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight_(){const t=this.copy(null,null,We.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip_(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth_(){const t=this.check_();return Math.pow(2,t)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const t=this.left.check_();if(t!==this.right.check_())throw new Error("Black depths differ");return t+(this.isRed_()?0:1)}}We.RED=!0,We.BLACK=!1;class ze{copy(t,e,n,r,i){return this}insert(t,e,n){return new We(t,e,null)}remove(t,e){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Ge{constructor(t,e=Ge.EMPTY_NODE){this.comparator_=t,this.root_=e}insert(t,e){return new Ge(this.comparator_,this.root_.insert(t,e,this.comparator_).copy(null,null,We.BLACK,null,null))}remove(t){return new Ge(this.comparator_,this.root_.remove(t,this.comparator_).copy(null,null,We.BLACK,null,null))}get(t){let e,n=this.root_;while(!n.isEmpty()){if(e=this.comparator_(t,n.key),0===e)return n.value;e<0?n=n.left:e>0&&(n=n.right)}return null}getPredecessorKey(t){let e,n=this.root_,r=null;while(!n.isEmpty()){if(e=this.comparator_(t,n.key),0===e){if(n.left.isEmpty())return r?r.key:null;n=n.left;while(!n.right.isEmpty())n=n.right;return n.key}e<0?n=n.left:e>0&&(r=n,n=n.right)}throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(t){return this.root_.inorderTraversal(t)}reverseTraversal(t){return this.root_.reverseTraversal(t)}getIterator(t){return new He(this.root_,null,this.comparator_,!1,t)}getIteratorFrom(t,e){return new He(this.root_,t,this.comparator_,!1,e)}getReverseIteratorFrom(t,e){return new He(this.root_,t,this.comparator_,!0,e)}getReverseIterator(t){return new He(this.root_,null,this.comparator_,!0,t)}}
/**
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
 */
function Ke(t,e){return O(t.name,e.name)}function Ye(t,e){return O(t,e)}
/**
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
 */let Je;function Xe(t){Je=t}Ge.EMPTY_NODE=new ze;const Qe=function(t){return"number"===typeof t?"number:"+U(t):"string:"+t},Ze=function(t){if(t.isLeafNode()){const e=t.val();(0,o.hu)("string"===typeof e||"number"===typeof e||"object"===typeof e&&(0,o.r3)(e,".sv"),"Priority must be a string or number.")}else(0,o.hu)(t===Je||t.isEmpty(),"priority of unexpected type.");(0,o.hu)(t===Je||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};
/**
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
 */
let tn,en,nn;class rn{constructor(t,e=rn.__childrenNodeConstructor.EMPTY_NODE){this.value_=t,this.priorityNode_=e,this.lazyHash_=null,(0,o.hu)(void 0!==this.value_&&null!==this.value_,"LeafNode shouldn't be created with null/undefined value."),Ze(this.priorityNode_)}static set __childrenNodeConstructor(t){tn=t}static get __childrenNodeConstructor(){return tn}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(t){return new rn(this.value_,t)}getImmediateChild(t){return".priority"===t?this.priorityNode_:rn.__childrenNodeConstructor.EMPTY_NODE}getChild(t){return ye(t)?this:".priority"===he(t)?this.priorityNode_:rn.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(t,e){return null}updateImmediateChild(t,e){return".priority"===t?this.updatePriority(e):e.isEmpty()&&".priority"!==t?this:rn.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(t,e).updatePriority(this.priorityNode_)}updateChild(t,e){const n=he(t);return null===n?e:e.isEmpty()&&".priority"!==n?this:((0,o.hu)(".priority"!==n||1===de(t),".priority must be the last token in a path"),this.updateImmediateChild(n,rn.__childrenNodeConstructor.EMPTY_NODE.updateChild(fe(t),e)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(t,e){return!1}val(t){return t&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(null===this.lazyHash_){let t="";this.priorityNode_.isEmpty()||(t+="priority:"+Qe(this.priorityNode_.val())+":");const e=typeof this.value_;t+=e+":",t+="number"===e?U(this.value_):this.value_,this.lazyHash_=v(t)}return this.lazyHash_}getValue(){return this.value_}compareTo(t){return t===rn.__childrenNodeConstructor.EMPTY_NODE?1:t instanceof rn.__childrenNodeConstructor?-1:((0,o.hu)(t.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(t))}compareToLeafNode_(t){const e=typeof t.value_,n=typeof this.value_,r=rn.VALUE_TYPE_ORDER.indexOf(e),i=rn.VALUE_TYPE_ORDER.indexOf(n);return(0,o.hu)(r>=0,"Unknown leaf type: "+e),(0,o.hu)(i>=0,"Unknown leaf type: "+n),r===i?"object"===n?0:this.value_<t.value_?-1:this.value_===t.value_?0:1:i-r}withIndex(){return this}isIndexed(){return!0}equals(t){if(t===this)return!0;if(t.isLeafNode()){const e=t;return this.value_===e.value_&&this.priorityNode_.equals(e.priorityNode_)}return!1}}function on(t){en=t}function sn(t){nn=t}rn.VALUE_TYPE_ORDER=["object","boolean","number","string"];class an extends $e{compare(t,e){const n=t.node.getPriority(),r=e.node.getPriority(),i=n.compareTo(r);return 0===i?O(t.name,e.name):i}isDefinedOn(t){return!t.getPriority().isEmpty()}indexedValueChanged(t,e){return!t.getPriority().equals(e.getPriority())}minPost(){return Ue.MIN}maxPost(){return new Ue(N,new rn("[PRIORITY-POST]",nn))}makePost(t,e){const n=en(t);return new Ue(e,new rn("[PRIORITY-POST]",n))}toString(){return".priority"}}const cn=new an,ln=Math.log(2);
/**
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
 */class un{constructor(t){const e=t=>parseInt(Math.log(t)/ln,10),n=t=>parseInt(Array(t+1).join("1"),2);this.count=e(t+1),this.current_=this.count-1;const r=n(this.count);this.bits_=t+1&r}nextBitIsOne(){const t=!(this.bits_&1<<this.current_);return this.current_--,t}}const hn=function(t,e,n,r){t.sort(e);const i=function(e,r){const o=r-e;let s,a;if(0===o)return null;if(1===o)return s=t[e],a=n?n(s):s,new We(a,s.node,We.BLACK,null,null);{const c=parseInt(o/2,10)+e,l=i(e,c),u=i(c+1,r);return s=t[c],a=n?n(s):s,new We(a,s.node,We.BLACK,l,u)}},o=function(e){let r=null,o=null,s=t.length;const a=function(e,r){const o=s-e,a=s;s-=e;const l=i(o+1,a),u=t[o],h=n?n(u):u;c(new We(h,u.node,r,null,l))},c=function(t){r?(r.left=t,r=t):(o=t,r=t)};for(let t=0;t<e.count;++t){const n=e.nextBitIsOne(),r=Math.pow(2,e.count-(t+1));n?a(r,We.BLACK):(a(r,We.BLACK),a(r,We.RED))}return o},s=new un(t.length),a=o(s);return new Ge(r||e,a)};
/**
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
 */let dn;const fn={};class pn{constructor(t,e){this.indexes_=t,this.indexSet_=e}static get Default(){return(0,o.hu)(fn&&cn,"ChildrenNode.ts has not been loaded"),dn=dn||new pn({".priority":fn},{".priority":cn}),dn}get(t){const e=(0,o.DV)(this.indexes_,t);if(!e)throw new Error("No index defined for "+t);return e instanceof Ge?e:null}hasIndex(t){return(0,o.r3)(this.indexSet_,t.toString())}addIndex(t,e){(0,o.hu)(t!==Ve,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const n=[];let r=!1;const i=e.getIterator(Ue.Wrap);let s,a=i.getNext();while(a)r=r||t.isDefinedOn(a.node),n.push(a),a=i.getNext();s=r?hn(n,t.getCompare()):fn;const c=t.toString(),l=Object.assign({},this.indexSet_);l[c]=t;const u=Object.assign({},this.indexes_);return u[c]=s,new pn(u,l)}addToIndexes(t,e){const n=(0,o.UI)(this.indexes_,((n,r)=>{const i=(0,o.DV)(this.indexSet_,r);if((0,o.hu)(i,"Missing index implementation for "+r),n===fn){if(i.isDefinedOn(t.node)){const n=[],r=e.getIterator(Ue.Wrap);let o=r.getNext();while(o)o.name!==t.name&&n.push(o),o=r.getNext();return n.push(t),hn(n,i.getCompare())}return fn}{const r=e.get(t.name);let i=n;return r&&(i=i.remove(new Ue(t.name,r))),i.insert(t,t.node)}}));return new pn(n,this.indexSet_)}removeFromIndexes(t,e){const n=(0,o.UI)(this.indexes_,(n=>{if(n===fn)return n;{const r=e.get(t.name);return r?n.remove(new Ue(t.name,r)):n}}));return new pn(n,this.indexSet_)}}
/**
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
 */let gn;class mn{constructor(t,e,n){this.children_=t,this.priorityNode_=e,this.indexMap_=n,this.lazyHash_=null,this.priorityNode_&&Ze(this.priorityNode_),this.children_.isEmpty()&&(0,o.hu)(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return gn||(gn=new mn(new Ge(Ye),null,pn.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||gn}updatePriority(t){return this.children_.isEmpty()?this:new mn(this.children_,t,this.indexMap_)}getImmediateChild(t){if(".priority"===t)return this.getPriority();{const e=this.children_.get(t);return null===e?gn:e}}getChild(t){const e=he(t);return null===e?this:this.getImmediateChild(e).getChild(fe(t))}hasChild(t){return null!==this.children_.get(t)}updateImmediateChild(t,e){if((0,o.hu)(e,"We should always be passing snapshot nodes"),".priority"===t)return this.updatePriority(e);{const n=new Ue(t,e);let r,i;e.isEmpty()?(r=this.children_.remove(t),i=this.indexMap_.removeFromIndexes(n,this.children_)):(r=this.children_.insert(t,e),i=this.indexMap_.addToIndexes(n,this.children_));const o=r.isEmpty()?gn:this.priorityNode_;return new mn(r,o,i)}}updateChild(t,e){const n=he(t);if(null===n)return e;{(0,o.hu)(".priority"!==he(t)||1===de(t),".priority must be the last token in a path");const r=this.getImmediateChild(n).updateChild(fe(t),e);return this.updateImmediateChild(n,r)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(t){if(this.isEmpty())return null;const e={};let n=0,r=0,i=!0;if(this.forEachChild(cn,((o,s)=>{e[o]=s.val(t),n++,i&&mn.INTEGER_REGEXP_.test(o)?r=Math.max(r,Number(o)):i=!1})),!t&&i&&r<2*n){const t=[];for(const n in e)t[n]=e[n];return t}return t&&!this.getPriority().isEmpty()&&(e[".priority"]=this.getPriority().val()),e}hash(){if(null===this.lazyHash_){let t="";this.getPriority().isEmpty()||(t+="priority:"+Qe(this.getPriority().val())+":"),this.forEachChild(cn,((e,n)=>{const r=n.hash();""!==r&&(t+=":"+e+":"+r)})),this.lazyHash_=""===t?"":v(t)}return this.lazyHash_}getPredecessorChildName(t,e,n){const r=this.resolveIndex_(n);if(r){const n=r.getPredecessorKey(new Ue(t,e));return n?n.name:null}return this.children_.getPredecessorKey(t)}getFirstChildName(t){const e=this.resolveIndex_(t);if(e){const t=e.minKey();return t&&t.name}return this.children_.minKey()}getFirstChild(t){const e=this.getFirstChildName(t);return e?new Ue(e,this.children_.get(e)):null}getLastChildName(t){const e=this.resolveIndex_(t);if(e){const t=e.maxKey();return t&&t.name}return this.children_.maxKey()}getLastChild(t){const e=this.getLastChildName(t);return e?new Ue(e,this.children_.get(e)):null}forEachChild(t,e){const n=this.resolveIndex_(t);return n?n.inorderTraversal((t=>e(t.name,t.node))):this.children_.inorderTraversal(e)}getIterator(t){return this.getIteratorFrom(t.minPost(),t)}getIteratorFrom(t,e){const n=this.resolveIndex_(e);if(n)return n.getIteratorFrom(t,(t=>t));{const n=this.children_.getIteratorFrom(t.name,Ue.Wrap);let r=n.peek();while(null!=r&&e.compare(r,t)<0)n.getNext(),r=n.peek();return n}}getReverseIterator(t){return this.getReverseIteratorFrom(t.maxPost(),t)}getReverseIteratorFrom(t,e){const n=this.resolveIndex_(e);if(n)return n.getReverseIteratorFrom(t,(t=>t));{const n=this.children_.getReverseIteratorFrom(t.name,Ue.Wrap);let r=n.peek();while(null!=r&&e.compare(r,t)>0)n.getNext(),r=n.peek();return n}}compareTo(t){return this.isEmpty()?t.isEmpty()?0:-1:t.isLeafNode()||t.isEmpty()?1:t===vn?-1:0}withIndex(t){if(t===Ve||this.indexMap_.hasIndex(t))return this;{const e=this.indexMap_.addIndex(t,this.children_);return new mn(this.children_,this.priorityNode_,e)}}isIndexed(t){return t===Ve||this.indexMap_.hasIndex(t)}equals(t){if(t===this)return!0;if(t.isLeafNode())return!1;{const e=t;if(this.getPriority().equals(e.getPriority())){if(this.children_.count()===e.children_.count()){const t=this.getIterator(cn),n=e.getIterator(cn);let r=t.getNext(),i=n.getNext();while(r&&i){if(r.name!==i.name||!r.node.equals(i.node))return!1;r=t.getNext(),i=n.getNext()}return null===r&&null===i}return!1}return!1}}resolveIndex_(t){return t===Ve?null:this.indexMap_.get(t.toString())}}mn.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class _n extends mn{constructor(){super(new Ge(Ye),mn.EMPTY_NODE,pn.Default)}compareTo(t){return t===this?0:1}equals(t){return t===this}getPriority(){return this}getImmediateChild(t){return mn.EMPTY_NODE}isEmpty(){return!1}}const vn=new _n;Object.defineProperties(Ue,{MIN:{value:new Ue(P,mn.EMPTY_NODE)},MAX:{value:new Ue(N,vn)}}),Be.__EMPTY_NODE=mn.EMPTY_NODE,rn.__childrenNodeConstructor=mn,Xe(vn),sn(vn);
/**
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
 */
const yn=!0;function bn(t,e=null){if(null===t)return mn.EMPTY_NODE;if("object"===typeof t&&".priority"in t&&(e=t[".priority"]),(0,o.hu)(null===e||"string"===typeof e||"number"===typeof e||"object"===typeof e&&".sv"in e,"Invalid priority type found: "+typeof e),"object"===typeof t&&".value"in t&&null!==t[".value"]&&(t=t[".value"]),"object"!==typeof t||".sv"in t){const n=t;return new rn(n,bn(e))}if(t instanceof Array||!yn){let n=mn.EMPTY_NODE;return j(t,((e,r)=>{if((0,o.r3)(t,e)&&"."!==e.substring(0,1)){const t=bn(r);!t.isLeafNode()&&t.isEmpty()||(n=n.updateImmediateChild(e,t))}})),n.updatePriority(bn(e))}{const n=[];let r=!1;const i=t;if(j(i,((t,e)=>{if("."!==t.substring(0,1)){const i=bn(e);i.isEmpty()||(r=r||!i.getPriority().isEmpty(),n.push(new Ue(t,i)))}})),0===n.length)return mn.EMPTY_NODE;const o=hn(n,Ke,(t=>t.name),Ye);if(r){const t=hn(n,cn.getCompare());return new mn(o,bn(e),new pn({".priority":t},{".priority":cn}))}return new mn(o,bn(e),pn.Default)}}on(bn);
/**
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
 */
class wn extends $e{constructor(t){super(),this.indexPath_=t,(0,o.hu)(!ye(t)&&".priority"!==he(t),"Can't create PathIndex with empty path or .priority key")}extractChild(t){return t.getChild(this.indexPath_)}isDefinedOn(t){return!t.getChild(this.indexPath_).isEmpty()}compare(t,e){const n=this.extractChild(t.node),r=this.extractChild(e.node),i=n.compareTo(r);return 0===i?O(t.name,e.name):i}makePost(t,e){const n=bn(t),r=mn.EMPTY_NODE.updateChild(this.indexPath_,n);return new Ue(e,r)}maxPost(){const t=mn.EMPTY_NODE.updateChild(this.indexPath_,vn);return new Ue(N,t)}toString(){return me(this.indexPath_,0).join("/")}}
/**
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
 */class Cn extends $e{compare(t,e){const n=t.node.compareTo(e.node);return 0===n?O(t.name,e.name):n}isDefinedOn(t){return!0}indexedValueChanged(t,e){return!t.equals(e)}minPost(){return Ue.MIN}maxPost(){return Ue.MAX}makePost(t,e){const n=bn(t);return new Ue(e,n)}toString(){return".value"}}const En=new Cn,Tn="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",In=function(){let t=0;const e=[];return function(n){const r=n===t;let i;t=n;const s=new Array(8);for(i=7;i>=0;i--)s[i]=Tn.charAt(n%64),n=Math.floor(n/64);(0,o.hu)(0===n,"Cannot push at time == 0");let a=s.join("");if(r){for(i=11;i>=0&&63===e[i];i--)e[i]=0;e[i]++}else for(i=0;i<12;i++)e[i]=Math.floor(64*Math.random());for(i=0;i<12;i++)a+=Tn.charAt(e[i]);return(0,o.hu)(20===a.length,"nextPushId: Length should be 20."),a}}();
/**
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
 */
/**
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
 */
function Sn(t){return{type:"value",snapshotNode:t}}function kn(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function xn(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function Rn(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function An(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}
/**
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
 */class Pn{constructor(t){this.index_=t}updateChild(t,e,n,r,i,s){(0,o.hu)(t.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=t.getImmediateChild(e);return a.getChild(r).equals(n.getChild(r))&&a.isEmpty()===n.isEmpty()?t:(null!=s&&(n.isEmpty()?t.hasChild(e)?s.trackChildChange(xn(e,a)):(0,o.hu)(t.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?s.trackChildChange(kn(e,n)):s.trackChildChange(Rn(e,n,a))),t.isLeafNode()&&n.isEmpty()?t:t.updateImmediateChild(e,n).withIndex(this.index_))}updateFullNode(t,e,n){return null!=n&&(t.isLeafNode()||t.forEachChild(cn,((t,r)=>{e.hasChild(t)||n.trackChildChange(xn(t,r))})),e.isLeafNode()||e.forEachChild(cn,((e,r)=>{if(t.hasChild(e)){const i=t.getImmediateChild(e);i.equals(r)||n.trackChildChange(Rn(e,r,i))}else n.trackChildChange(kn(e,r))}))),e.withIndex(this.index_)}updatePriority(t,e){return t.isEmpty()?mn.EMPTY_NODE:t.updatePriority(e)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}
/**
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
 */class Nn{constructor(t){this.indexedFilter_=new Pn(t.getIndex()),this.index_=t.getIndex(),this.startPost_=Nn.getStartPost_(t),this.endPost_=Nn.getEndPost_(t)}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(t){return this.index_.compare(this.getStartPost(),t)<=0&&this.index_.compare(t,this.getEndPost())<=0}updateChild(t,e,n,r,i,o){return this.matches(new Ue(e,n))||(n=mn.EMPTY_NODE),this.indexedFilter_.updateChild(t,e,n,r,i,o)}updateFullNode(t,e,n){e.isLeafNode()&&(e=mn.EMPTY_NODE);let r=e.withIndex(this.index_);r=r.updatePriority(mn.EMPTY_NODE);const i=this;return e.forEachChild(cn,((t,e)=>{i.matches(new Ue(t,e))||(r=r.updateImmediateChild(t,mn.EMPTY_NODE))})),this.indexedFilter_.updateFullNode(t,r,n)}updatePriority(t,e){return t}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(t){if(t.hasStart()){const e=t.getIndexStartName();return t.getIndex().makePost(t.getIndexStartValue(),e)}return t.getIndex().minPost()}static getEndPost_(t){if(t.hasEnd()){const e=t.getIndexEndName();return t.getIndex().makePost(t.getIndexEndValue(),e)}return t.getIndex().maxPost()}}
/**
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
 */class On{constructor(t){this.rangedFilter_=new Nn(t),this.index_=t.getIndex(),this.limit_=t.getLimit(),this.reverse_=!t.isViewFromLeft()}updateChild(t,e,n,r,i,o){return this.rangedFilter_.matches(new Ue(e,n))||(n=mn.EMPTY_NODE),t.getImmediateChild(e).equals(n)?t:t.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(t,e,n,r,i,o):this.fullLimitUpdateChild_(t,e,n,i,o)}updateFullNode(t,e,n){let r;if(e.isLeafNode()||e.isEmpty())r=mn.EMPTY_NODE.withIndex(this.index_);else if(2*this.limit_<e.numChildren()&&e.isIndexed(this.index_)){let t;r=mn.EMPTY_NODE.withIndex(this.index_),t=this.reverse_?e.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):e.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let n=0;while(t.hasNext()&&n<this.limit_){const e=t.getNext();let i;if(i=this.reverse_?this.index_.compare(this.rangedFilter_.getStartPost(),e)<=0:this.index_.compare(e,this.rangedFilter_.getEndPost())<=0,!i)break;r=r.updateImmediateChild(e.name,e.node),n++}}else{let t,n,i,o;if(r=e.withIndex(this.index_),r=r.updatePriority(mn.EMPTY_NODE),this.reverse_){o=r.getReverseIterator(this.index_),t=this.rangedFilter_.getEndPost(),n=this.rangedFilter_.getStartPost();const e=this.index_.getCompare();i=(t,n)=>e(n,t)}else o=r.getIterator(this.index_),t=this.rangedFilter_.getStartPost(),n=this.rangedFilter_.getEndPost(),i=this.index_.getCompare();let s=0,a=!1;while(o.hasNext()){const e=o.getNext();!a&&i(t,e)<=0&&(a=!0);const c=a&&s<this.limit_&&i(e,n)<=0;c?s++:r=r.updateImmediateChild(e.name,mn.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(t,r,n)}updatePriority(t,e){return t}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(t,e,n,r,i){let s;if(this.reverse_){const t=this.index_.getCompare();s=(e,n)=>t(n,e)}else s=this.index_.getCompare();const a=t;(0,o.hu)(a.numChildren()===this.limit_,"");const c=new Ue(e,n),l=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),u=this.rangedFilter_.matches(c);if(a.hasChild(e)){const t=a.getImmediateChild(e);let o=r.getChildAfterChild(this.index_,l,this.reverse_);while(null!=o&&(o.name===e||a.hasChild(o.name)))o=r.getChildAfterChild(this.index_,o,this.reverse_);const h=null==o?1:s(o,c),d=u&&!n.isEmpty()&&h>=0;if(d)return null!=i&&i.trackChildChange(Rn(e,n,t)),a.updateImmediateChild(e,n);{null!=i&&i.trackChildChange(xn(e,t));const n=a.updateImmediateChild(e,mn.EMPTY_NODE),r=null!=o&&this.rangedFilter_.matches(o);return r?(null!=i&&i.trackChildChange(kn(o.name,o.node)),n.updateImmediateChild(o.name,o.node)):n}}return n.isEmpty()?t:u&&s(l,c)>=0?(null!=i&&(i.trackChildChange(xn(l.name,l.node)),i.trackChildChange(kn(e,n))),a.updateImmediateChild(e,n).updateImmediateChild(l.name,mn.EMPTY_NODE)):t}}
/**
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
 */class Dn{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=cn}hasStart(){return this.startSet_}hasStartAfter(){return this.startAfterSet_}hasEndBefore(){return this.endBeforeSet_}isViewFromLeft(){return""===this.viewFrom_?this.startSet_:"l"===this.viewFrom_}getIndexStartValue(){return(0,o.hu)(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return(0,o.hu)(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:P}hasEnd(){return this.endSet_}getIndexEndValue(){return(0,o.hu)(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return(0,o.hu)(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:N}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&""!==this.viewFrom_}getLimit(){return(0,o.hu)(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===cn}copy(){const t=new Dn;return t.limitSet_=this.limitSet_,t.limit_=this.limit_,t.startSet_=this.startSet_,t.indexStartValue_=this.indexStartValue_,t.startNameSet_=this.startNameSet_,t.indexStartName_=this.indexStartName_,t.endSet_=this.endSet_,t.indexEndValue_=this.indexEndValue_,t.endNameSet_=this.endNameSet_,t.indexEndName_=this.indexEndName_,t.index_=this.index_,t.viewFrom_=this.viewFrom_,t}}function Ln(t){return t.loadsAllData()?new Pn(t.getIndex()):t.hasLimit()?new On(t):new Nn(t)}function Mn(t){const e={};if(t.isDefault())return e;let n;return t.index_===cn?n="$priority":t.index_===En?n="$value":t.index_===Ve?n="$key":((0,o.hu)(t.index_ instanceof wn,"Unrecognized index type!"),n=t.index_.toString()),e["orderBy"]=(0,o.Pz)(n),t.startSet_&&(e["startAt"]=(0,o.Pz)(t.indexStartValue_),t.startNameSet_&&(e["startAt"]+=","+(0,o.Pz)(t.indexStartName_))),t.endSet_&&(e["endAt"]=(0,o.Pz)(t.indexEndValue_),t.endNameSet_&&(e["endAt"]+=","+(0,o.Pz)(t.indexEndName_))),t.limitSet_&&(t.isViewFromLeft()?e["limitToFirst"]=t.limit_:e["limitToLast"]=t.limit_),e}function Fn(t){const e={};if(t.startSet_&&(e["sp"]=t.indexStartValue_,t.startNameSet_&&(e["sn"]=t.indexStartName_)),t.endSet_&&(e["ep"]=t.indexEndValue_,t.endNameSet_&&(e["en"]=t.indexEndName_)),t.limitSet_){e["l"]=t.limit_;let n=t.viewFrom_;""===n&&(n=t.isViewFromLeft()?"l":"r"),e["vf"]=n}return t.index_!==cn&&(e["i"]=t.index_.toString()),e}
/**
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
 */class jn extends ie{constructor(t,e,n,r){super(),this.repoInfo_=t,this.onDataUpdate_=e,this.authTokenProvider_=n,this.appCheckTokenProvider_=r,this.log_=T("p:rest:"),this.listens_={}}reportStats(t){throw new Error("Method not implemented.")}static getListenId_(t,e){return void 0!==e?"tag$"+e:((0,o.hu)(t._queryParams.isDefault(),"should have a tag if it's not a default query."),t._path.toString())}listen(t,e,n,r){const i=t._path.toString();this.log_("Listen called for "+i+" "+t._queryIdentifier);const s=jn.getListenId_(t,n),a={};this.listens_[s]=a;const c=Mn(t._queryParams);this.restRequest_(i+".json",c,((t,e)=>{let c=e;if(404===t&&(c=null,t=null),null===t&&this.onDataUpdate_(i,c,!1,n),(0,o.DV)(this.listens_,s)===a){let e;e=t?401===t?"permission_denied":"rest_error:"+t:"ok",r(e,null)}}))}unlisten(t,e){const n=jn.getListenId_(t,e);delete this.listens_[n]}get(t){const e=Mn(t._queryParams),n=t._path.toString(),r=new o.BH;return this.restRequest_(n+".json",e,((t,e)=>{let i=e;404===t&&(i=null,t=null),null===t?(this.onDataUpdate_(n,i,!1,null),r.resolve(i)):r.reject(new Error(i))})),r.promise}refreshAuthToken(t){}restRequest_(t,e={},n){return e["format"]="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then((([r,i])=>{r&&r.accessToken&&(e["auth"]=r.accessToken),i&&i.token&&(e["ac"]=i.token);const s=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+t+"?ns="+this.repoInfo_.namespace+(0,o.xO)(e);this.log_("Sending REST request for "+s);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(n&&4===a.readyState){this.log_("REST Response for "+s+" received. status:",a.status,"response:",a.responseText);let e=null;if(a.status>=200&&a.status<300){try{e=(0,o.cI)(a.responseText)}catch(t){k("Failed to parse JSON response for "+s+": "+a.responseText)}n(null,e)}else 401!==a.status&&404!==a.status&&k("Got unsuccessful REST response for "+s+" Status: "+a.status),n(a.status);n=null}},a.open("GET",s,!0),a.send()}))}}
/**
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
 */class Un{constructor(){this.rootNode_=mn.EMPTY_NODE}getNode(t){return this.rootNode_.getChild(t)}updateSnapshot(t,e){this.rootNode_=this.rootNode_.updateChild(t,e)}}
/**
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
 */function $n(){return{value:null,children:new Map}}function qn(t,e,n){if(ye(e))t.value=n,t.children.clear();else if(null!==t.value)t.value=t.value.updateChild(e,n);else{const r=he(e);t.children.has(r)||t.children.set(r,$n());const i=t.children.get(r);e=fe(e),qn(i,e,n)}}function Bn(t,e,n){null!==t.value?n(e,t.value):Vn(t,((t,r)=>{const i=new le(e.toString()+"/"+t);Bn(r,i,n)}))}function Vn(t,e){t.children.forEach(((t,n)=>{e(n,t)}))}
/**
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
 */class Hn{constructor(t){this.collection_=t,this.last_=null}get(){const t=this.collection_.get(),e=Object.assign({},t);return this.last_&&j(this.last_,((t,n)=>{e[t]=e[t]-n})),this.last_=t,e}}
/**
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
 */const Wn=1e4,zn=3e4,Gn=3e5;class Kn{constructor(t,e){this.server_=e,this.statsToReport_={},this.statsListener_=new Hn(t);const n=Wn+(zn-Wn)*Math.random();Y(this.reportStats_.bind(this),Math.floor(n))}reportStats_(){const t=this.statsListener_.get(),e={};let n=!1;j(t,((t,r)=>{r>0&&(0,o.r3)(this.statsToReport_,t)&&(e[t]=r,n=!0)})),n&&this.server_.reportStats(e),Y(this.reportStats_.bind(this),Math.floor(2*Math.random()*Gn))}}
/**
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
 */var Yn;function Jn(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Xn(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Qn(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}
/**
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
 */(function(t){t[t["OVERWRITE"]=0]="OVERWRITE",t[t["MERGE"]=1]="MERGE",t[t["ACK_USER_WRITE"]=2]="ACK_USER_WRITE",t[t["LISTEN_COMPLETE"]=3]="LISTEN_COMPLETE"})(Yn||(Yn={}));class Zn{constructor(t,e,n){this.path=t,this.affectedTree=e,this.revert=n,this.type=Yn.ACK_USER_WRITE,this.source=Jn()}operationForChild(t){if(ye(this.path)){if(null!=this.affectedTree.value)return(0,o.hu)(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const e=this.affectedTree.subtree(new le(t));return new Zn(ue(),e,this.revert)}}return(0,o.hu)(he(this.path)===t,"operationForChild called for unrelated child."),new Zn(fe(this.path),this.affectedTree,this.revert)}}
/**
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
 */class tr{constructor(t,e){this.source=t,this.path=e,this.type=Yn.LISTEN_COMPLETE}operationForChild(t){return ye(this.path)?new tr(this.source,ue()):new tr(this.source,fe(this.path))}}
/**
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
 */class er{constructor(t,e,n){this.source=t,this.path=e,this.snap=n,this.type=Yn.OVERWRITE}operationForChild(t){return ye(this.path)?new er(this.source,ue(),this.snap.getImmediateChild(t)):new er(this.source,fe(this.path),this.snap)}}
/**
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
 */class nr{constructor(t,e,n){this.source=t,this.path=e,this.children=n,this.type=Yn.MERGE}operationForChild(t){if(ye(this.path)){const e=this.children.subtree(new le(t));return e.isEmpty()?null:e.value?new er(this.source,ue(),e.value):new nr(this.source,ue(),e)}return(0,o.hu)(he(this.path)===t,"Can't get a merge for a child not on the path of the operation"),new nr(this.source,fe(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}
/**
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
 */class rr{constructor(t,e,n){this.node_=t,this.fullyInitialized_=e,this.filtered_=n}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(t){if(ye(t))return this.isFullyInitialized()&&!this.filtered_;const e=he(t);return this.isCompleteForChild(e)}isCompleteForChild(t){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(t)}getNode(){return this.node_}}
/**
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
 */class ir{constructor(t){this.query_=t,this.index_=this.query_._queryParams.getIndex()}}function or(t,e,n,r){const i=[],o=[];return e.forEach((e=>{"child_changed"===e.type&&t.index_.indexedValueChanged(e.oldSnap,e.snapshotNode)&&o.push(An(e.childName,e.snapshotNode))})),sr(t,i,"child_removed",e,r,n),sr(t,i,"child_added",e,r,n),sr(t,i,"child_moved",o,r,n),sr(t,i,"child_changed",e,r,n),sr(t,i,"value",e,r,n),i}function sr(t,e,n,r,i,o){const s=r.filter((t=>t.type===n));s.sort(((e,n)=>cr(t,e,n))),s.forEach((n=>{const r=ar(t,n,o);i.forEach((i=>{i.respondsTo(n.type)&&e.push(i.createEvent(r,t.query_))}))}))}function ar(t,e,n){return"value"===e.type||"child_removed"===e.type||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function cr(t,e,n){if(null==e.childName||null==n.childName)throw(0,o.g5)("Should only compare child_ events.");const r=new Ue(e.childName,e.snapshotNode),i=new Ue(n.childName,n.snapshotNode);return t.index_.compare(r,i)}
/**
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
 */function lr(t,e){return{eventCache:t,serverCache:e}}function ur(t,e,n,r){return lr(new rr(e,n,r),t.serverCache)}function hr(t,e,n,r){return lr(t.eventCache,new rr(e,n,r))}function dr(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function fr(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}
/**
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
 */let pr;const gr=()=>(pr||(pr=new Ge(D)),pr);class mr{constructor(t,e=gr()){this.value=t,this.children=e}static fromObject(t){let e=new mr(null);return j(t,((t,n)=>{e=e.set(new le(t),n)})),e}isEmpty(){return null===this.value&&this.children.isEmpty()}findRootMostMatchingPathAndValue(t,e){if(null!=this.value&&e(this.value))return{path:ue(),value:this.value};if(ye(t))return null;{const n=he(t),r=this.children.get(n);if(null!==r){const i=r.findRootMostMatchingPathAndValue(fe(t),e);if(null!=i){const t=ve(new le(n),i.path);return{path:t,value:i.value}}return null}return null}}findRootMostValueAndPath(t){return this.findRootMostMatchingPathAndValue(t,(()=>!0))}subtree(t){if(ye(t))return this;{const e=he(t),n=this.children.get(e);return null!==n?n.subtree(fe(t)):new mr(null)}}set(t,e){if(ye(t))return new mr(e,this.children);{const n=he(t),r=this.children.get(n)||new mr(null),i=r.set(fe(t),e),o=this.children.insert(n,i);return new mr(this.value,o)}}remove(t){if(ye(t))return this.children.isEmpty()?new mr(null):new mr(null,this.children);{const e=he(t),n=this.children.get(e);if(n){const r=n.remove(fe(t));let i;return i=r.isEmpty()?this.children.remove(e):this.children.insert(e,r),null===this.value&&i.isEmpty()?new mr(null):new mr(this.value,i)}return this}}get(t){if(ye(t))return this.value;{const e=he(t),n=this.children.get(e);return n?n.get(fe(t)):null}}setTree(t,e){if(ye(t))return e;{const n=he(t),r=this.children.get(n)||new mr(null),i=r.setTree(fe(t),e);let o;return o=i.isEmpty()?this.children.remove(n):this.children.insert(n,i),new mr(this.value,o)}}fold(t){return this.fold_(ue(),t)}fold_(t,e){const n={};return this.children.inorderTraversal(((r,i)=>{n[r]=i.fold_(ve(t,r),e)})),e(t,this.value,n)}findOnPath(t,e){return this.findOnPath_(t,ue(),e)}findOnPath_(t,e,n){const r=!!this.value&&n(e,this.value);if(r)return r;if(ye(t))return null;{const r=he(t),i=this.children.get(r);return i?i.findOnPath_(fe(t),ve(e,r),n):null}}foreachOnPath(t,e){return this.foreachOnPath_(t,ue(),e)}foreachOnPath_(t,e,n){if(ye(t))return this;{this.value&&n(e,this.value);const r=he(t),i=this.children.get(r);return i?i.foreachOnPath_(fe(t),ve(e,r),n):new mr(null)}}foreach(t){this.foreach_(ue(),t)}foreach_(t,e){this.children.inorderTraversal(((n,r)=>{r.foreach_(ve(t,n),e)})),this.value&&e(t,this.value)}foreachChild(t){this.children.inorderTraversal(((e,n)=>{n.value&&t(e,n.value)}))}}
/**
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
 */class _r{constructor(t){this.writeTree_=t}static empty(){return new _r(new mr(null))}}function vr(t,e,n){if(ye(e))return new _r(new mr(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(null!=r){const i=r.path;let o=r.value;const s=be(i,e);return o=o.updateChild(s,n),new _r(t.writeTree_.set(i,o))}{const r=new mr(n),i=t.writeTree_.setTree(e,r);return new _r(i)}}}function yr(t,e,n){let r=t;return j(n,((t,n)=>{r=vr(r,ve(e,t),n)})),r}function br(t,e){if(ye(e))return _r.empty();{const n=t.writeTree_.setTree(e,new mr(null));return new _r(n)}}function wr(t,e){return null!=Cr(t,e)}function Cr(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return null!=n?t.writeTree_.get(n.path).getChild(be(n.path,e)):null}function Er(t){const e=[],n=t.writeTree_.value;return null!=n?n.isLeafNode()||n.forEachChild(cn,((t,n)=>{e.push(new Ue(t,n))})):t.writeTree_.children.inorderTraversal(((t,n)=>{null!=n.value&&e.push(new Ue(t,n.value))})),e}function Tr(t,e){if(ye(e))return t;{const n=Cr(t,e);return new _r(null!=n?new mr(n):t.writeTree_.subtree(e))}}function Ir(t){return t.writeTree_.isEmpty()}function Sr(t,e){return kr(ue(),t.writeTree_,e)}function kr(t,e,n){if(null!=e.value)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal(((e,i)=>{".priority"===e?((0,o.hu)(null!==i.value,"Priority writes must always be leaf nodes"),r=i.value):n=kr(ve(t,e),i,n)})),n.getChild(t).isEmpty()||null===r||(n=n.updateChild(ve(t,".priority"),r)),n}}
/**
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
 */function xr(t,e){return Xr(e,t)}function Rr(t,e,n,r,i){(0,o.hu)(r>t.lastWriteId,"Stacking an older write on top of newer ones"),void 0===i&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:i}),i&&(t.visibleWrites=vr(t.visibleWrites,e,n)),t.lastWriteId=r}function Ar(t,e,n,r){(0,o.hu)(r>t.lastWriteId,"Stacking an older merge on top of newer ones"),t.allWrites.push({path:e,children:n,writeId:r,visible:!0}),t.visibleWrites=yr(t.visibleWrites,e,n),t.lastWriteId=r}function Pr(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function Nr(t,e){const n=t.allWrites.findIndex((t=>t.writeId===e));(0,o.hu)(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let i=r.visible,s=!1,a=t.allWrites.length-1;while(i&&a>=0){const e=t.allWrites[a];e.visible&&(a>=n&&Or(e,r.path)?i=!1:Ee(r.path,e.path)&&(s=!0)),a--}if(i){if(s)return Dr(t),!0;if(r.snap)t.visibleWrites=br(t.visibleWrites,r.path);else{const e=r.children;j(e,(e=>{t.visibleWrites=br(t.visibleWrites,ve(r.path,e))}))}return!0}return!1}function Or(t,e){if(t.snap)return Ee(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&Ee(ve(t.path,n),e))return!0;return!1}function Dr(t){t.visibleWrites=Mr(t.allWrites,Lr,ue()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function Lr(t){return t.visible}function Mr(t,e,n){let r=_r.empty();for(let i=0;i<t.length;++i){const s=t[i];if(e(s)){const t=s.path;let e;if(s.snap)Ee(n,t)?(e=be(n,t),r=vr(r,e,s.snap)):Ee(t,n)&&(e=be(t,n),r=vr(r,ue(),s.snap.getChild(e)));else{if(!s.children)throw(0,o.g5)("WriteRecord should have .snap or .children");if(Ee(n,t))e=be(n,t),r=yr(r,e,s.children);else if(Ee(t,n))if(e=be(t,n),ye(e))r=yr(r,ue(),s.children);else{const t=(0,o.DV)(s.children,he(e));if(t){const n=t.getChild(fe(e));r=vr(r,ue(),n)}}}}}return r}function Fr(t,e,n,r,i){if(r||i){const o=Tr(t.visibleWrites,e);if(!i&&Ir(o))return n;if(i||null!=n||wr(o,ue())){const o=function(t){return(t.visible||i)&&(!r||!~r.indexOf(t.writeId))&&(Ee(t.path,e)||Ee(e,t.path))},s=Mr(t.allWrites,o,e),a=n||mn.EMPTY_NODE;return Sr(s,a)}return null}{const r=Cr(t.visibleWrites,e);if(null!=r)return r;{const r=Tr(t.visibleWrites,e);if(Ir(r))return n;if(null!=n||wr(r,ue())){const t=n||mn.EMPTY_NODE;return Sr(r,t)}return null}}}function jr(t,e,n){let r=mn.EMPTY_NODE;const i=Cr(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(cn,((t,e)=>{r=r.updateImmediateChild(t,e)})),r;if(n){const i=Tr(t.visibleWrites,e);return n.forEachChild(cn,((t,e)=>{const n=Sr(Tr(i,new le(t)),e);r=r.updateImmediateChild(t,n)})),Er(i).forEach((t=>{r=r.updateImmediateChild(t.name,t.node)})),r}{const n=Tr(t.visibleWrites,e);return Er(n).forEach((t=>{r=r.updateImmediateChild(t.name,t.node)})),r}}function Ur(t,e,n,r,i){(0,o.hu)(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=ve(e,n);if(wr(t.visibleWrites,s))return null;{const e=Tr(t.visibleWrites,s);return Ir(e)?i.getChild(n):Sr(e,i.getChild(n))}}function $r(t,e,n,r){const i=ve(e,n),o=Cr(t.visibleWrites,i);if(null!=o)return o;if(r.isCompleteForChild(n)){const e=Tr(t.visibleWrites,i);return Sr(e,r.getNode().getImmediateChild(n))}return null}function qr(t,e){return Cr(t.visibleWrites,e)}function Br(t,e,n,r,i,o,s){let a;const c=Tr(t.visibleWrites,e),l=Cr(c,ue());if(null!=l)a=l;else{if(null==n)return[];a=Sr(c,n)}if(a=a.withIndex(s),a.isEmpty()||a.isLeafNode())return[];{const t=[],e=s.getCompare(),n=o?a.getReverseIteratorFrom(r,s):a.getIteratorFrom(r,s);let c=n.getNext();while(c&&t.length<i)0!==e(c,r)&&t.push(c),c=n.getNext();return t}}function Vr(){return{visibleWrites:_r.empty(),allWrites:[],lastWriteId:-1}}function Hr(t,e,n,r){return Fr(t.writeTree,t.treePath,e,n,r)}function Wr(t,e){return jr(t.writeTree,t.treePath,e)}function zr(t,e,n,r){return Ur(t.writeTree,t.treePath,e,n,r)}function Gr(t,e){return qr(t.writeTree,ve(t.treePath,e))}function Kr(t,e,n,r,i,o){return Br(t.writeTree,t.treePath,e,n,r,i,o)}function Yr(t,e,n){return $r(t.writeTree,t.treePath,e,n)}function Jr(t,e){return Xr(ve(t.treePath,e),t.writeTree)}function Xr(t,e){return{treePath:t,writeTree:e}}
/**
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
 */class Qr{constructor(){this.changeMap=new Map}trackChildChange(t){const e=t.type,n=t.childName;(0,o.hu)("child_added"===e||"child_changed"===e||"child_removed"===e,"Only child changes supported for tracking"),(0,o.hu)(".priority"!==n,"Only non-priority child changes can be tracked.");const r=this.changeMap.get(n);if(r){const i=r.type;if("child_added"===e&&"child_removed"===i)this.changeMap.set(n,Rn(n,t.snapshotNode,r.snapshotNode));else if("child_removed"===e&&"child_added"===i)this.changeMap.delete(n);else if("child_removed"===e&&"child_changed"===i)this.changeMap.set(n,xn(n,r.oldSnap));else if("child_changed"===e&&"child_added"===i)this.changeMap.set(n,kn(n,t.snapshotNode));else{if("child_changed"!==e||"child_changed"!==i)throw(0,o.g5)("Illegal combination of changes: "+t+" occurred after "+r);this.changeMap.set(n,Rn(n,t.snapshotNode,r.oldSnap))}}else this.changeMap.set(n,t)}getChanges(){return Array.from(this.changeMap.values())}}
/**
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
 */class Zr{getCompleteChild(t){return null}getChildAfterChild(t,e,n){return null}}const ti=new Zr;class ei{constructor(t,e,n=null){this.writes_=t,this.viewCache_=e,this.optCompleteServerCache_=n}getCompleteChild(t){const e=this.viewCache_.eventCache;if(e.isCompleteForChild(t))return e.getNode().getImmediateChild(t);{const e=null!=this.optCompleteServerCache_?new rr(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Yr(this.writes_,t,e)}}getChildAfterChild(t,e,n){const r=null!=this.optCompleteServerCache_?this.optCompleteServerCache_:fr(this.viewCache_),i=Kr(this.writes_,r,e,1,n,t);return 0===i.length?null:i[0]}}
/**
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
 */function ni(t){return{filter:t}}function ri(t,e){(0,o.hu)(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),(0,o.hu)(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function ii(t,e,n,r,i){const s=new Qr;let a,c;if(n.type===Yn.OVERWRITE){const l=n;l.source.fromUser?a=ci(t,e,l.path,l.snap,r,i,s):((0,o.hu)(l.source.fromServer,"Unknown source."),c=l.source.tagged||e.serverCache.isFiltered()&&!ye(l.path),a=ai(t,e,l.path,l.snap,r,i,c,s))}else if(n.type===Yn.MERGE){const l=n;l.source.fromUser?a=ui(t,e,l.path,l.children,r,i,s):((0,o.hu)(l.source.fromServer,"Unknown source."),c=l.source.tagged||e.serverCache.isFiltered(),a=di(t,e,l.path,l.children,r,i,c,s))}else if(n.type===Yn.ACK_USER_WRITE){const o=n;a=o.revert?gi(t,e,o.path,r,i,s):fi(t,e,o.path,o.affectedTree,r,i,s)}else{if(n.type!==Yn.LISTEN_COMPLETE)throw(0,o.g5)("Unknown operation type: "+n.type);a=pi(t,e,n.path,r,s)}const l=s.getChanges();return oi(e,a,l),{viewCache:a,changes:l}}function oi(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),o=dr(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!r.getNode().equals(o)||!r.getNode().getPriority().equals(o.getPriority()))&&n.push(Sn(dr(e)))}}function si(t,e,n,r,i,s){const a=e.eventCache;if(null!=Gr(r,n))return e;{let c,l;if(ye(n))if((0,o.hu)(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const n=fr(e),i=n instanceof mn?n:mn.EMPTY_NODE,o=Wr(r,i);c=t.filter.updateFullNode(e.eventCache.getNode(),o,s)}else{const n=Hr(r,fr(e));c=t.filter.updateFullNode(e.eventCache.getNode(),n,s)}else{const u=he(n);if(".priority"===u){(0,o.hu)(1===de(n),"Can't have a priority with additional path components");const i=a.getNode();l=e.serverCache.getNode();const s=zr(r,n,i,l);c=null!=s?t.filter.updatePriority(i,s):a.getNode()}else{const o=fe(n);let h;if(a.isCompleteForChild(u)){l=e.serverCache.getNode();const t=zr(r,n,a.getNode(),l);h=null!=t?a.getNode().getImmediateChild(u).updateChild(o,t):a.getNode().getImmediateChild(u)}else h=Yr(r,u,e.serverCache);c=null!=h?t.filter.updateChild(a.getNode(),u,h,o,i,s):a.getNode()}}return ur(e,c,a.isFullyInitialized()||ye(n),t.filter.filtersNodes())}}function ai(t,e,n,r,i,o,s,a){const c=e.serverCache;let l;const u=s?t.filter:t.filter.getIndexedFilter();if(ye(n))l=u.updateFullNode(c.getNode(),r,null);else if(u.filtersNodes()&&!c.isFiltered()){const t=c.getNode().updateChild(n,r);l=u.updateFullNode(c.getNode(),t,null)}else{const t=he(n);if(!c.isCompleteForPath(n)&&de(n)>1)return e;const i=fe(n),o=c.getNode().getImmediateChild(t),s=o.updateChild(i,r);l=".priority"===t?u.updatePriority(c.getNode(),s):u.updateChild(c.getNode(),t,s,i,ti,null)}const h=hr(e,l,c.isFullyInitialized()||ye(n),u.filtersNodes()),d=new ei(i,h,o);return si(t,h,n,i,d,a)}function ci(t,e,n,r,i,o,s){const a=e.eventCache;let c,l;const u=new ei(i,e,o);if(ye(n))l=t.filter.updateFullNode(e.eventCache.getNode(),r,s),c=ur(e,l,!0,t.filter.filtersNodes());else{const i=he(n);if(".priority"===i)l=t.filter.updatePriority(e.eventCache.getNode(),r),c=ur(e,l,a.isFullyInitialized(),a.isFiltered());else{const o=fe(n),l=a.getNode().getImmediateChild(i);let h;if(ye(o))h=r;else{const t=u.getCompleteChild(i);h=null!=t?".priority"===pe(o)&&t.getChild(_e(o)).isEmpty()?t:t.updateChild(o,r):mn.EMPTY_NODE}if(l.equals(h))c=e;else{const n=t.filter.updateChild(a.getNode(),i,h,o,u,s);c=ur(e,n,a.isFullyInitialized(),t.filter.filtersNodes())}}}return c}function li(t,e){return t.eventCache.isCompleteForChild(e)}function ui(t,e,n,r,i,o,s){let a=e;return r.foreach(((r,c)=>{const l=ve(n,r);li(e,he(l))&&(a=ci(t,a,l,c,i,o,s))})),r.foreach(((r,c)=>{const l=ve(n,r);li(e,he(l))||(a=ci(t,a,l,c,i,o,s))})),a}function hi(t,e,n){return n.foreach(((t,n)=>{e=e.updateChild(t,n)})),e}function di(t,e,n,r,i,o,s,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let c,l=e;c=ye(n)?r:new mr(null).setTree(n,r);const u=e.serverCache.getNode();return c.children.inorderTraversal(((n,r)=>{if(u.hasChild(n)){const c=e.serverCache.getNode().getImmediateChild(n),u=hi(t,c,r);l=ai(t,l,new le(n),u,i,o,s,a)}})),c.children.inorderTraversal(((n,r)=>{const c=!e.serverCache.isCompleteForChild(n)&&void 0===r.value;if(!u.hasChild(n)&&!c){const c=e.serverCache.getNode().getImmediateChild(n),u=hi(t,c,r);l=ai(t,l,new le(n),u,i,o,s,a)}})),l}function fi(t,e,n,r,i,o,s){if(null!=Gr(i,n))return e;const a=e.serverCache.isFiltered(),c=e.serverCache;if(null!=r.value){if(ye(n)&&c.isFullyInitialized()||c.isCompleteForPath(n))return ai(t,e,n,c.getNode().getChild(n),i,o,a,s);if(ye(n)){let r=new mr(null);return c.getNode().forEachChild(Ve,((t,e)=>{r=r.set(new le(t),e)})),di(t,e,n,r,i,o,a,s)}return e}{let l=new mr(null);return r.foreach(((t,e)=>{const r=ve(n,t);c.isCompleteForPath(r)&&(l=l.set(t,c.getNode().getChild(r)))})),di(t,e,n,l,i,o,a,s)}}function pi(t,e,n,r,i){const o=e.serverCache,s=hr(e,o.getNode(),o.isFullyInitialized()||ye(n),o.isFiltered());return si(t,s,n,r,ti,i)}function gi(t,e,n,r,i,s){let a;if(null!=Gr(r,n))return e;{const c=new ei(r,e,i),l=e.eventCache.getNode();let u;if(ye(n)||".priority"===he(n)){let n;if(e.serverCache.isFullyInitialized())n=Hr(r,fr(e));else{const t=e.serverCache.getNode();(0,o.hu)(t instanceof mn,"serverChildren would be complete if leaf node"),n=Wr(r,t)}u=t.filter.updateFullNode(l,n,s)}else{const i=he(n);let o=Yr(r,i,e.serverCache);null==o&&e.serverCache.isCompleteForChild(i)&&(o=l.getImmediateChild(i)),u=null!=o?t.filter.updateChild(l,i,o,fe(n),c,s):e.eventCache.getNode().hasChild(i)?t.filter.updateChild(l,i,mn.EMPTY_NODE,fe(n),c,s):l,u.isEmpty()&&e.serverCache.isFullyInitialized()&&(a=Hr(r,fr(e)),a.isLeafNode()&&(u=t.filter.updateFullNode(u,a,s)))}return a=e.serverCache.isFullyInitialized()||null!=Gr(r,ue()),ur(e,u,a,t.filter.filtersNodes())}}
/**
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
 */class mi{constructor(t,e){this.query_=t,this.eventRegistrations_=[];const n=this.query_._queryParams,r=new Pn(n.getIndex()),i=Ln(n);this.processor_=ni(i);const o=e.serverCache,s=e.eventCache,a=r.updateFullNode(mn.EMPTY_NODE,o.getNode(),null),c=i.updateFullNode(mn.EMPTY_NODE,s.getNode(),null),l=new rr(a,o.isFullyInitialized(),r.filtersNodes()),u=new rr(c,s.isFullyInitialized(),i.filtersNodes());this.viewCache_=lr(u,l),this.eventGenerator_=new ir(this.query_)}get query(){return this.query_}}function _i(t){return t.viewCache_.serverCache.getNode()}function vi(t,e){const n=fr(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!ye(e)&&!n.getImmediateChild(he(e)).isEmpty())?n.getChild(e):null}function yi(t){return 0===t.eventRegistrations_.length}function bi(t,e){t.eventRegistrations_.push(e)}function wi(t,e,n){const r=[];if(n){(0,o.hu)(null==e,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach((t=>{const e=t.createCancelEvent(n,i);e&&r.push(e)}))}if(e){let n=[];for(let r=0;r<t.eventRegistrations_.length;++r){const i=t.eventRegistrations_[r];if(i.matches(e)){if(e.hasAnyCallback()){n=n.concat(t.eventRegistrations_.slice(r+1));break}}else n.push(i)}t.eventRegistrations_=n}else t.eventRegistrations_=[];return r}function Ci(t,e,n,r){e.type===Yn.MERGE&&null!==e.source.queryId&&((0,o.hu)(fr(t.viewCache_),"We should always have a full cache before handling merges"),(0,o.hu)(dr(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,s=ii(t.processor_,i,e,n,r);return ri(t.processor_,s.viewCache),(0,o.hu)(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,Ti(t,s.changes,s.viewCache.eventCache.getNode(),null)}function Ei(t,e){const n=t.viewCache_.eventCache,r=[];if(!n.getNode().isLeafNode()){const t=n.getNode();t.forEachChild(cn,((t,e)=>{r.push(kn(t,e))}))}return n.isFullyInitialized()&&r.push(Sn(n.getNode())),Ti(t,r,n.getNode(),e)}function Ti(t,e,n,r){const i=r?[r]:t.eventRegistrations_;return or(t.eventGenerator_,e,n,i)}
/**
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
 */let Ii,Si;class ki{constructor(){this.views=new Map}}function xi(t){(0,o.hu)(!Ii,"__referenceConstructor has already been defined"),Ii=t}function Ri(){return(0,o.hu)(Ii,"Reference.ts has not been loaded"),Ii}function Ai(t){return 0===t.views.size}function Pi(t,e,n,r){const i=e.source.queryId;if(null!==i){const s=t.views.get(i);return(0,o.hu)(null!=s,"SyncTree gave us an op for an invalid query."),Ci(s,e,n,r)}{let i=[];for(const o of t.views.values())i=i.concat(Ci(o,e,n,r));return i}}function Ni(t,e,n,r,i){const o=e._queryIdentifier,s=t.views.get(o);if(!s){let t=Hr(n,i?r:null),o=!1;t?o=!0:r instanceof mn?(t=Wr(n,r),o=!1):(t=mn.EMPTY_NODE,o=!1);const s=lr(new rr(t,o,!1),new rr(r,i,!1));return new mi(e,s)}return s}function Oi(t,e,n,r,i,o){const s=Ni(t,e,r,i,o);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,s),bi(s,n),Ei(s,n)}function Di(t,e,n,r){const i=e._queryIdentifier,o=[];let s=[];const a=Ui(t);if("default"===i)for(const[c,l]of t.views.entries())s=s.concat(wi(l,n,r)),yi(l)&&(t.views.delete(c),l.query._queryParams.loadsAllData()||o.push(l.query));else{const e=t.views.get(i);e&&(s=s.concat(wi(e,n,r)),yi(e)&&(t.views.delete(i),e.query._queryParams.loadsAllData()||o.push(e.query)))}return a&&!Ui(t)&&o.push(new(Ri())(e._repo,e._path)),{removed:o,events:s}}function Li(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function Mi(t,e){let n=null;for(const r of t.views.values())n=n||vi(r,e);return n}function Fi(t,e){const n=e._queryParams;if(n.loadsAllData())return $i(t);{const n=e._queryIdentifier;return t.views.get(n)}}function ji(t,e){return null!=Fi(t,e)}function Ui(t){return null!=$i(t)}function $i(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}
/**
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
 */function qi(t){(0,o.hu)(!Si,"__referenceConstructor has already been defined"),Si=t}function Bi(){return(0,o.hu)(Si,"Reference.ts has not been loaded"),Si}let Vi=1;class Hi{constructor(t){this.listenProvider_=t,this.syncPointTree_=new mr(null),this.pendingWriteTree_=Vr(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Wi(t,e,n,r,i){return Rr(t.pendingWriteTree_,e,n,r,i),i?io(t,new er(Jn(),e,n)):[]}function zi(t,e,n,r){Ar(t.pendingWriteTree_,e,n,r);const i=mr.fromObject(n);return io(t,new nr(Jn(),e,i))}function Gi(t,e,n=!1){const r=Pr(t.pendingWriteTree_,e),i=Nr(t.pendingWriteTree_,e);if(i){let e=new mr(null);return null!=r.snap?e=e.set(ue(),!0):j(r.children,(t=>{e=e.set(new le(t),!0)})),io(t,new Zn(r.path,e,n))}return[]}function Ki(t,e,n){return io(t,new er(Xn(),e,n))}function Yi(t,e,n){const r=mr.fromObject(n);return io(t,new nr(Xn(),e,r))}function Ji(t,e){return io(t,new tr(Xn(),e))}function Xi(t,e,n){const r=uo(t,n);if(r){const n=ho(r),i=n.path,o=n.queryId,s=be(i,e),a=new tr(Qn(o),s);return fo(t,i,a)}return[]}function Qi(t,e,n,r){const i=e._path,o=t.syncPointTree_.get(i);let s=[];if(o&&("default"===e._queryIdentifier||ji(o,e))){const a=Di(o,e,n,r);Ai(o)&&(t.syncPointTree_=t.syncPointTree_.remove(i));const c=a.removed;s=a.events;const l=-1!==c.findIndex((t=>t._queryParams.loadsAllData())),u=t.syncPointTree_.findOnPath(i,((t,e)=>Ui(e)));if(l&&!u){const e=t.syncPointTree_.subtree(i);if(!e.isEmpty()){const n=po(e);for(let e=0;e<n.length;++e){const r=n[e],i=r.query,o=ao(t,r);t.listenProvider_.startListening(go(i),co(t,i),o.hashFn,o.onComplete)}}}if(!u&&c.length>0&&!r)if(l){const n=null;t.listenProvider_.stopListening(go(e),n)}else c.forEach((e=>{const n=t.queryToTagMap.get(lo(e));t.listenProvider_.stopListening(go(e),n)}));mo(t,c)}return s}function Zi(t,e,n,r){const i=uo(t,r);if(null!=i){const r=ho(i),o=r.path,s=r.queryId,a=be(o,e),c=new er(Qn(s),a,n);return fo(t,o,c)}return[]}function to(t,e,n,r){const i=uo(t,r);if(i){const r=ho(i),o=r.path,s=r.queryId,a=be(o,e),c=mr.fromObject(n),l=new nr(Qn(s),a,c);return fo(t,o,l)}return[]}function eo(t,e){const n=t._path;let r=null,i=!1;e.syncPointTree_.foreachOnPath(n,((t,e)=>{const o=be(t,n);r=r||Mi(e,o),i=i||Ui(e)}));let s,a=e.syncPointTree_.get(n);if(a?(i=i||Ui(a),r=r||Mi(a,ue())):(a=new ki,e.syncPointTree_=e.syncPointTree_.set(n,a)),null!=r)s=!0;else{s=!1,r=mn.EMPTY_NODE;const t=e.syncPointTree_.subtree(n);t.foreachChild(((t,e)=>{const n=Mi(e,ue());n&&(r=r.updateImmediateChild(t,n))}))}const c=ji(a,t);if(!c&&!t._queryParams.loadsAllData()){const n=lo(t);(0,o.hu)(!e.queryToTagMap.has(n),"View does not exist, but we have a tag");const r=_o();e.queryToTagMap.set(n,r),e.tagToQueryMap.set(r,n)}const l=xr(e.pendingWriteTree_,n);return{syncPoint:a,writesCache:l,serverCache:r,serverCacheComplete:s,foundAncestorDefaultView:i,viewAlreadyExists:c}}function no(t,e,n){const{syncPoint:r,serverCache:i,writesCache:o,serverCacheComplete:s,viewAlreadyExists:a,foundAncestorDefaultView:c}=eo(e,t);let l=Oi(r,e,n,o,i,s);if(!a&&!c){const n=Fi(r,e);l=l.concat(vo(t,e,n))}return l}function ro(t,e,n){const r=!0,i=t.pendingWriteTree_,o=t.syncPointTree_.findOnPath(e,((t,n)=>{const r=be(t,e),i=Mi(n,r);if(i)return i}));return Fr(i,e,o,n,r)}function io(t,e){return oo(e,t.syncPointTree_,null,xr(t.pendingWriteTree_,ue()))}function oo(t,e,n,r){if(ye(t.path))return so(t,e,n,r);{const i=e.get(ue());null==n&&null!=i&&(n=Mi(i,ue()));let o=[];const s=he(t.path),a=t.operationForChild(s),c=e.children.get(s);if(c&&a){const t=n?n.getImmediateChild(s):null,e=Jr(r,s);o=o.concat(oo(a,c,t,e))}return i&&(o=o.concat(Pi(i,t,r,n))),o}}function so(t,e,n,r){const i=e.get(ue());null==n&&null!=i&&(n=Mi(i,ue()));let o=[];return e.children.inorderTraversal(((e,i)=>{const s=n?n.getImmediateChild(e):null,a=Jr(r,e),c=t.operationForChild(e);c&&(o=o.concat(so(c,i,s,a)))})),i&&(o=o.concat(Pi(i,t,r,n))),o}function ao(t,e){const n=e.query,r=co(t,n);return{hashFn:()=>{const t=_i(e)||mn.EMPTY_NODE;return t.hash()},onComplete:e=>{if("ok"===e)return r?Xi(t,n._path,r):Ji(t,n._path);{const r=B(e,n);return Qi(t,n,null,r)}}}}function co(t,e){const n=lo(e);return t.queryToTagMap.get(n)}function lo(t){return t._path.toString()+"$"+t._queryIdentifier}function uo(t,e){return t.tagToQueryMap.get(e)}function ho(t){const e=t.indexOf("$");return(0,o.hu)(-1!==e&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new le(t.substr(0,e))}}function fo(t,e,n){const r=t.syncPointTree_.get(e);(0,o.hu)(r,"Missing sync point for query tag that we're tracking");const i=xr(t.pendingWriteTree_,e);return Pi(r,n,i,null)}function po(t){return t.fold(((t,e,n)=>{if(e&&Ui(e)){const t=$i(e);return[t]}{let t=[];return e&&(t=Li(e)),j(n,((e,n)=>{t=t.concat(n)})),t}}))}function go(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(Bi())(t._repo,t._path):t}function mo(t,e){for(let n=0;n<e.length;++n){const r=e[n];if(!r._queryParams.loadsAllData()){const e=lo(r),n=t.queryToTagMap.get(e);t.queryToTagMap.delete(e),t.tagToQueryMap.delete(n)}}}function _o(){return Vi++}function vo(t,e,n){const r=e._path,i=co(t,e),s=ao(t,n),a=t.listenProvider_.startListening(go(e),i,s.hashFn,s.onComplete),c=t.syncPointTree_.subtree(r);if(i)(0,o.hu)(!Ui(c.value),"If we're adding a query, it shouldn't be shadowed");else{const e=c.fold(((t,e,n)=>{if(!ye(t)&&e&&Ui(e))return[$i(e).query];{let t=[];return e&&(t=t.concat(Li(e).map((t=>t.query)))),j(n,((e,n)=>{t=t.concat(n)})),t}}));for(let n=0;n<e.length;++n){const r=e[n];t.listenProvider_.stopListening(go(r),co(t,r))}}return a}
/**
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
 */class yo{constructor(t){this.node_=t}getImmediateChild(t){const e=this.node_.getImmediateChild(t);return new yo(e)}node(){return this.node_}}class bo{constructor(t,e){this.syncTree_=t,this.path_=e}getImmediateChild(t){const e=ve(this.path_,t);return new bo(this.syncTree_,e)}node(){return ro(this.syncTree_,this.path_)}}const wo=function(t){return t=t||{},t["timestamp"]=t["timestamp"]||(new Date).getTime(),t},Co=function(t,e,n){return t&&"object"===typeof t?((0,o.hu)(".sv"in t,"Unexpected leaf node or priority contents"),"string"===typeof t[".sv"]?Eo(t[".sv"],e,n):"object"===typeof t[".sv"]?To(t[".sv"],e):void(0,o.hu)(!1,"Unexpected server value: "+JSON.stringify(t,null,2))):t},Eo=function(t,e,n){switch(t){case"timestamp":return n["timestamp"];default:(0,o.hu)(!1,"Unexpected server value: "+t)}},To=function(t,e,n){t.hasOwnProperty("increment")||(0,o.hu)(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t["increment"];"number"!==typeof r&&(0,o.hu)(!1,"Unexpected increment value: "+r);const i=e.node();if((0,o.hu)(null!==i&&"undefined"!==typeof i,"Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const s=i,a=s.getValue();return"number"!==typeof a?r:a+r},Io=function(t,e,n,r){return ko(e,new bo(n,t),r)},So=function(t,e,n){return ko(t,new yo(e),n)};function ko(t,e,n){const r=t.getPriority().val(),i=Co(r,e.getImmediateChild(".priority"),n);let o;if(t.isLeafNode()){const r=t,o=Co(r.getValue(),e,n);return o!==r.getValue()||i!==r.getPriority().val()?new rn(o,bn(i)):t}{const r=t;return o=r,i!==r.getPriority().val()&&(o=o.updatePriority(new rn(i))),r.forEachChild(cn,((t,r)=>{const i=ko(r,e.getImmediateChild(t),n);i!==r&&(o=o.updateImmediateChild(t,i))})),o}}
/**
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
 */class xo{constructor(t="",e=null,n={children:{},childCount:0}){this.name=t,this.parent=e,this.node=n}}function Ro(t,e){let n=e instanceof le?e:new le(e),r=t,i=he(n);while(null!==i){const t=(0,o.DV)(r.node.children,i)||{children:{},childCount:0};r=new xo(i,r,t),n=fe(n),i=he(n)}return r}function Ao(t){return t.node.value}function Po(t,e){t.node.value=e,jo(t)}function No(t){return t.node.childCount>0}function Oo(t){return void 0===Ao(t)&&!No(t)}function Do(t,e){j(t.node.children,((n,r)=>{e(new xo(n,t,r))}))}function Lo(t,e,n,r){n&&!r&&e(t),Do(t,(t=>{Lo(t,e,!0,r)})),n&&r&&e(t)}function Mo(t,e,n){let r=n?t:t.parent;while(null!==r){if(e(r))return!0;r=r.parent}return!1}function Fo(t){return new le(null===t.parent?t.name:Fo(t.parent)+"/"+t.name)}function jo(t){null!==t.parent&&Uo(t.parent,t.name,t)}function Uo(t,e,n){const r=Oo(n),i=(0,o.r3)(t.node.children,e);r&&i?(delete t.node.children[e],t.node.childCount--,jo(t)):r||i||(t.node.children[e]=n.node,t.node.childCount++,jo(t))}
/**
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
 */const $o=/[\[\].#$\/\u0000-\u001F\u007F]/,qo=/[\[\].#$\u0000-\u001F\u007F]/,Bo=10485760,Vo=function(t){return"string"===typeof t&&0!==t.length&&!$o.test(t)},Ho=function(t){return"string"===typeof t&&0!==t.length&&!qo.test(t)},Wo=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),Ho(t)},zo=function(t){return null===t||"string"===typeof t||"number"===typeof t&&!R(t)||t&&"object"===typeof t&&(0,o.r3)(t,".sv")},Go=function(t,e,n,r){r&&void 0===e||Ko((0,o.gK)(t,"value"),e,n)},Ko=function(t,e,n){const r=n instanceof le?new Te(n,t):n;if(void 0===e)throw new Error(t+"contains undefined "+xe(r));if("function"===typeof e)throw new Error(t+"contains a function "+xe(r)+" with contents = "+e.toString());if(R(e))throw new Error(t+"contains "+e.toString()+" "+xe(r));if("string"===typeof e&&e.length>Bo/3&&(0,o.ug)(e)>Bo)throw new Error(t+"contains a string greater than "+Bo+" utf8 bytes "+xe(r)+" ('"+e.substring(0,50)+"...')");if(e&&"object"===typeof e){let n=!1,i=!1;if(j(e,((e,o)=>{if(".value"===e)n=!0;else if(".priority"!==e&&".sv"!==e&&(i=!0,!Vo(e)))throw new Error(t+" contains an invalid key ("+e+") "+xe(r)+'.  Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"');Ie(r,e),Ko(t,o,r),Se(r)})),n&&i)throw new Error(t+' contains ".value" child '+xe(r)+" in addition to actual children.")}},Yo=function(t,e){let n,r;for(n=0;n<e.length;n++){r=e[n];const i=me(r);for(let e=0;e<i.length;e++)if(".priority"===i[e]&&e===i.length-1);else if(!Vo(i[e]))throw new Error(t+"contains an invalid key ("+i[e]+") in path "+r.toString()+'. Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"')}e.sort(we);let i=null;for(n=0;n<e.length;n++){if(r=e[n],null!==i&&Ee(i,r))throw new Error(t+"contains a path "+i.toString()+" that is ancestor of another path "+r.toString());i=r}},Jo=function(t,e,n,r){if(r&&void 0===e)return;const i=(0,o.gK)(t,"values");if(!e||"object"!==typeof e||Array.isArray(e))throw new Error(i+" must be an object containing the children to replace.");const s=[];j(e,((t,e)=>{const r=new le(t);if(Ko(i,e,ve(n,r)),".priority"===pe(r)&&!zo(e))throw new Error(i+"contains an invalid value for '"+r.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");s.push(r)})),Yo(i,s)},Xo=function(t,e,n,r){if((!r||void 0!==n)&&!Ho(n))throw new Error((0,o.gK)(t,e)+'was an invalid path = "'+n+'". Paths must be non-empty strings and can\'t contain ".", "#", "$", "[", or "]"')},Qo=function(t,e,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),Xo(t,e,n,r)},Zo=function(t,e){if(".info"===he(e))throw new Error(t+" failed = Can't modify data under /.info/")},ts=function(t,e){const n=e.path.toString();if("string"!==typeof e.repoInfo.host||0===e.repoInfo.host.length||!Vo(e.repoInfo.namespace)&&"localhost"!==e.repoInfo.host.split(":")[0]||0!==n.length&&!Wo(n))throw new Error((0,o.gK)(t,"url")+'must be a valid firebase URL and the path can\'t contain ".", "#", "$", "[", or "]".')};
/**
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
 */
class es{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function ns(t,e){let n=null;for(let r=0;r<e.length;r++){const i=e[r],o=i.getPath();null===n||Ce(o,n.path)||(t.eventLists_.push(n),n=null),null===n&&(n={events:[],path:o}),n.events.push(i)}n&&t.eventLists_.push(n)}function rs(t,e,n){ns(t,n),os(t,(t=>Ce(t,e)))}function is(t,e,n){ns(t,n),os(t,(t=>Ee(t,e)||Ee(e,t)))}function os(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const i=t.eventLists_[r];if(i){const o=i.path;e(o)?(ss(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function ss(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(null!==n){t.events[e]=null;const r=n.getEventRunner();b&&E("event: "+n.toString()),G(r)}}}
/**
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
 */const as="repo_interrupt",cs=25;class ls{constructor(t,e,n,r){this.repoInfo_=t,this.forceRestClient_=e,this.authTokenProvider_=n,this.appCheckProvider_=r,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new es,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=$n(),this.transactionQueueTree_=new xo,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function us(t,e,n){if(t.stats_=mt(t.repoInfo_),t.forceRestClient_||K())t.server_=new jn(t.repoInfo_,((e,n,r,i)=>{fs(t,e,n,r,i)}),t.authTokenProvider_,t.appCheckProvider_),setTimeout((()=>ps(t,!0)),0);else{if("undefined"!==typeof n&&null!==n){if("object"!==typeof n)throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{(0,o.Pz)(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new je(t.repoInfo_,e,((e,n,r,i)=>{fs(t,e,n,r,i)}),(e=>{ps(t,e)}),(e=>{gs(t,e)}),t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener((e=>{t.server_.refreshAuthToken(e)})),t.appCheckProvider_.addTokenChangeListener((e=>{t.server_.refreshAppCheckToken(e.token)})),t.statsReporter_=_t(t.repoInfo_,(()=>new Kn(t.stats_,t.server_))),t.infoData_=new Un,t.infoSyncTree_=new Hi({startListening:(e,n,r,i)=>{let o=[];const s=t.infoData_.getNode(e._path);return s.isEmpty()||(o=Ki(t.infoSyncTree_,e._path,s),setTimeout((()=>{i("ok")}),0)),o},stopListening:()=>{}}),ms(t,"connected",!1),t.serverSyncTree_=new Hi({startListening:(e,n,r,i)=>(t.server_.listen(e,r,n,((n,r)=>{const o=i(n,r);is(t.eventQueue_,e._path,o)})),[]),stopListening:(e,n)=>{t.server_.unlisten(e,n)}})}function hs(t){const e=t.infoData_.getNode(new le(".info/serverTimeOffset")),n=e.val()||0;return(new Date).getTime()+n}function ds(t){return wo({timestamp:hs(t)})}function fs(t,e,n,r,i){t.dataUpdateCount++;const s=new le(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let a=[];if(i)if(r){const e=(0,o.UI)(n,(t=>bn(t)));a=to(t.serverSyncTree_,s,e,i)}else{const e=bn(n);a=Zi(t.serverSyncTree_,s,e,i)}else if(r){const e=(0,o.UI)(n,(t=>bn(t)));a=Yi(t.serverSyncTree_,s,e)}else{const e=bn(n);a=Ki(t.serverSyncTree_,s,e)}let c=s;a.length>0&&(c=Rs(t,s)),is(t.eventQueue_,c,a)}function ps(t,e){ms(t,"connected",e),!1===e&&bs(t)}function gs(t,e){j(e,((e,n)=>{ms(t,e,n)}))}function ms(t,e,n){const r=new le("/.info/"+e),i=bn(n);t.infoData_.updateSnapshot(r,i);const o=Ki(t.infoSyncTree_,r,i);is(t.eventQueue_,r,o)}function _s(t){return t.nextWriteId_++}function vs(t,e,n,r,i){Ts(t,"set",{path:e.toString(),value:n,priority:r});const o=ds(t),s=bn(n,r),a=ro(t.serverSyncTree_,e),c=So(s,a,o),l=_s(t),u=Wi(t.serverSyncTree_,e,c,l,!0);ns(t.eventQueue_,u),t.server_.put(e.toString(),s.val(!0),((n,r)=>{const o="ok"===n;o||k("set at "+e+" failed: "+n);const s=Gi(t.serverSyncTree_,l,!o);is(t.eventQueue_,e,s),Is(t,i,n,r)}));const h=Ls(t,e);Rs(t,h),is(t.eventQueue_,h,[])}function ys(t,e,n,r){Ts(t,"update",{path:e.toString(),value:n});let i=!0;const o=ds(t),s={};if(j(n,((n,r)=>{i=!1,s[n]=Io(ve(e,n),bn(r),t.serverSyncTree_,o)})),i)E("update() called with empty data.  Don't do anything."),Is(t,r,"ok",void 0);else{const i=_s(t),o=zi(t.serverSyncTree_,e,s,i);ns(t.eventQueue_,o),t.server_.merge(e.toString(),n,((n,o)=>{const s="ok"===n;s||k("update at "+e+" failed: "+n);const a=Gi(t.serverSyncTree_,i,!s),c=a.length>0?Rs(t,e):e;is(t.eventQueue_,c,a),Is(t,r,n,o)})),j(n,(n=>{const r=Ls(t,ve(e,n));Rs(t,r)})),is(t.eventQueue_,e,[])}}function bs(t){Ts(t,"onDisconnectEvents");const e=ds(t),n=$n();Bn(t.onDisconnect_,ue(),((r,i)=>{const o=Io(r,i,t.serverSyncTree_,e);qn(n,r,o)}));let r=[];Bn(n,ue(),((e,n)=>{r=r.concat(Ki(t.serverSyncTree_,e,n));const i=Ls(t,e);Rs(t,i)})),t.onDisconnect_=$n(),is(t.eventQueue_,ue(),r)}function ws(t,e,n){let r;r=".info"===he(e._path)?no(t.infoSyncTree_,e,n):no(t.serverSyncTree_,e,n),rs(t.eventQueue_,e._path,r)}function Cs(t,e,n){let r;r=".info"===he(e._path)?Qi(t.infoSyncTree_,e,n):Qi(t.serverSyncTree_,e,n),rs(t.eventQueue_,e._path,r)}function Es(t){t.persistentConnection_&&t.persistentConnection_.interrupt(as)}function Ts(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),E(n,...e)}function Is(t,e,n,r){e&&G((()=>{if("ok"===n)e(null);else{const t=(n||"error").toUpperCase();let i=t;r&&(i+=": "+r);const o=new Error(i);o.code=t,e(o)}}))}function Ss(t,e,n){return ro(t.serverSyncTree_,e,n)||mn.EMPTY_NODE}function ks(t,e=t.transactionQueueTree_){if(e||Ds(t,e),Ao(e)){const n=Ns(t,e);(0,o.hu)(n.length>0,"Sending zero length transaction queue");const r=n.every((t=>0===t.status));r&&xs(t,Fo(e),n)}else No(e)&&Do(e,(e=>{ks(t,e)}))}function xs(t,e,n){const r=n.map((t=>t.currentWriteId)),i=Ss(t,e,r);let s=i;const a=i.hash();for(let u=0;u<n.length;u++){const t=n[u];(0,o.hu)(0===t.status,"tryToSendTransactionQueue_: items in queue should all be run."),t.status=1,t.retryCount++;const r=be(e,t.path);s=s.updateChild(r,t.currentOutputSnapshotRaw)}const c=s.val(!0),l=e;t.server_.put(l.toString(),c,(r=>{Ts(t,"transaction put response",{path:l.toString(),status:r});let i=[];if("ok"===r){const r=[];for(let e=0;e<n.length;e++)n[e].status=2,i=i.concat(Gi(t.serverSyncTree_,n[e].currentWriteId)),n[e].onComplete&&r.push((()=>n[e].onComplete(null,!0,n[e].currentOutputSnapshotResolved))),n[e].unwatcher();Ds(t,Ro(t.transactionQueueTree_,e)),ks(t,t.transactionQueueTree_),is(t.eventQueue_,e,i);for(let t=0;t<r.length;t++)G(r[t])}else{if("datastale"===r)for(let t=0;t<n.length;t++)3===n[t].status?n[t].status=4:n[t].status=0;else{k("transaction at "+l.toString()+" failed: "+r);for(let t=0;t<n.length;t++)n[t].status=4,n[t].abortReason=r}Rs(t,e)}}),a)}function Rs(t,e){const n=Ps(t,e),r=Fo(n),i=Ns(t,n);return As(t,i,r),r}function As(t,e,n){if(0===e.length)return;const r=[];let i=[];const s=e.filter((t=>0===t.status)),a=s.map((t=>t.currentWriteId));for(let c=0;c<e.length;c++){const s=e[c],l=be(n,s.path);let u,h=!1;if((0,o.hu)(null!==l,"rerunTransactionsUnderNode_: relativePath should not be null."),4===s.status)h=!0,u=s.abortReason,i=i.concat(Gi(t.serverSyncTree_,s.currentWriteId,!0));else if(0===s.status)if(s.retryCount>=cs)h=!0,u="maxretry",i=i.concat(Gi(t.serverSyncTree_,s.currentWriteId,!0));else{const n=Ss(t,s.path,a);s.currentInputSnapshot=n;const r=e[c].update(n.val());if(void 0!==r){Ko("transaction failed: Data returned ",r,s.path);let e=bn(r);const c="object"===typeof r&&null!=r&&(0,o.r3)(r,".priority");c||(e=e.updatePriority(n.getPriority()));const l=s.currentWriteId,u=ds(t),h=So(e,n,u);s.currentOutputSnapshotRaw=e,s.currentOutputSnapshotResolved=h,s.currentWriteId=_s(t),a.splice(a.indexOf(l),1),i=i.concat(Wi(t.serverSyncTree_,s.path,h,s.currentWriteId,s.applyLocally)),i=i.concat(Gi(t.serverSyncTree_,l,!0))}else h=!0,u="nodata",i=i.concat(Gi(t.serverSyncTree_,s.currentWriteId,!0))}is(t.eventQueue_,n,i),i=[],h&&(e[c].status=2,function(t){setTimeout(t,Math.floor(0))}(e[c].unwatcher),e[c].onComplete&&("nodata"===u?r.push((()=>e[c].onComplete(null,!1,e[c].currentInputSnapshot))):r.push((()=>e[c].onComplete(new Error(u),!1,null)))))}Ds(t,t.transactionQueueTree_);for(let o=0;o<r.length;o++)G(r[o]);ks(t,t.transactionQueueTree_)}function Ps(t,e){let n,r=t.transactionQueueTree_;n=he(e);while(null!==n&&void 0===Ao(r))r=Ro(r,n),e=fe(e),n=he(e);return r}function Ns(t,e){const n=[];return Os(t,e,n),n.sort(((t,e)=>t.order-e.order)),n}function Os(t,e,n){const r=Ao(e);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);Do(e,(e=>{Os(t,e,n)}))}function Ds(t,e){const n=Ao(e);if(n){let t=0;for(let e=0;e<n.length;e++)2!==n[e].status&&(n[t]=n[e],t++);n.length=t,Po(e,n.length>0?n:void 0)}Do(e,(e=>{Ds(t,e)}))}function Ls(t,e){const n=Fo(Ps(t,e)),r=Ro(t.transactionQueueTree_,e);return Mo(r,(e=>{Ms(t,e)})),Ms(t,r),Lo(r,(e=>{Ms(t,e)})),n}function Ms(t,e){const n=Ao(e);if(n){const r=[];let i=[],s=-1;for(let e=0;e<n.length;e++)3===n[e].status||(1===n[e].status?((0,o.hu)(s===e-1,"All SENT items should be at beginning of queue."),s=e,n[e].status=3,n[e].abortReason="set"):((0,o.hu)(0===n[e].status,"Unexpected transaction status in abort"),n[e].unwatcher(),i=i.concat(Gi(t.serverSyncTree_,n[e].currentWriteId,!0)),n[e].onComplete&&r.push(n[e].onComplete.bind(null,new Error("set"),!1,null))));-1===s?Po(e,void 0):n.length=s+1,is(t.eventQueue_,Fo(e),i);for(let t=0;t<r.length;t++)G(r[t])}}
/**
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
 */function Fs(t){let e="";const n=t.split("/");for(let i=0;i<n.length;i++)if(n[i].length>0){let t=n[i];try{t=decodeURIComponent(t.replace(/\+/g," "))}catch(r){}e+="/"+t}return e}function js(t){const e={};"?"===t.charAt(0)&&(t=t.substring(1));for(const n of t.split("&")){if(0===n.length)continue;const r=n.split("=");2===r.length?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):k(`Invalid query segment '${n}' in query '${t}'`)}return e}const Us=function(t,e){const n=$s(t),r=n.namespace;"firebase.com"===n.domain&&S(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),r&&"undefined"!==r||"localhost"===n.domain||S("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||x();const i="ws"===n.scheme||"wss"===n.scheme;return{repoInfo:new ut(n.host,n.secure,r,i,e,"",r!==n.subdomain),path:new le(n.pathString)}},$s=function(t){let e="",n="",r="",i="",o="",s=!0,a="https",c=443;if("string"===typeof t){let l=t.indexOf("//");l>=0&&(a=t.substring(0,l-1),t=t.substring(l+2));let u=t.indexOf("/");-1===u&&(u=t.length);let h=t.indexOf("?");-1===h&&(h=t.length),e=t.substring(0,Math.min(u,h)),u<h&&(i=Fs(t.substring(u,h)));const d=js(t.substring(Math.min(t.length,h)));l=e.indexOf(":"),l>=0?(s="https"===a||"wss"===a,c=parseInt(e.substring(l+1),10)):l=e.length;const f=e.slice(0,l);if("localhost"===f.toLowerCase())n="localhost";else if(f.split(".").length<=2)n=f;else{const t=e.indexOf(".");r=e.substring(0,t).toLowerCase(),n=e.substring(t+1),o=r}"ns"in d&&(o=d["ns"])}return{host:e,port:c,domain:n,subdomain:r,secure:s,scheme:a,pathString:i,namespace:o}};
/**
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
 */
class qs{constructor(t,e,n,r){this.eventType=t,this.eventRegistration=e,this.snapshot=n,this.prevName=r}getPath(){const t=this.snapshot.ref;return"value"===this.eventType?t._path:t.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+(0,o.Pz)(this.snapshot.exportVal())}}class Bs{constructor(t,e,n){this.eventRegistration=t,this.error=e,this.path=n}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}
/**
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
 */class Vs{constructor(t,e){this.snapshotCallback=t,this.cancelCallback=e}onValue(t,e){this.snapshotCallback.call(null,t,e)}onCancel(t){return(0,o.hu)(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,t)}get hasCancelCallback(){return!!this.cancelCallback}matches(t){return this.snapshotCallback===t.snapshotCallback||void 0!==this.snapshotCallback.userCallback&&this.snapshotCallback.userCallback===t.snapshotCallback.userCallback&&this.snapshotCallback.context===t.snapshotCallback.context}}
/**
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
 */
/**
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
 */
class Hs{constructor(t,e,n,r){this._repo=t,this._path=e,this._queryParams=n,this._orderByCalled=r}get key(){return ye(this._path)?null:pe(this._path)}get ref(){return new Ws(this._repo,this._path)}get _queryIdentifier(){const t=Fn(this._queryParams),e=M(t);return"{}"===e?"default":e}get _queryObject(){return Fn(this._queryParams)}isEqual(t){if(t=(0,o.m9)(t),!(t instanceof Hs))return!1;const e=this._repo===t._repo,n=Ce(this._path,t._path),r=this._queryIdentifier===t._queryIdentifier;return e&&n&&r}toJSON(){return this.toString()}toString(){return this._repo.toString()+ge(this._path)}}class Ws extends Hs{constructor(t,e){super(t,e,new Dn,!1)}get parent(){const t=_e(this._path);return null===t?null:new Ws(this._repo,t)}get root(){let t=this;while(null!==t.parent)t=t.parent;return t}}class zs{constructor(t,e,n){this._node=t,this.ref=e,this._index=n}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(t){const e=new le(t),n=Ks(this.ref,t);return new zs(this._node.getChild(e),n,cn)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(t){if(this._node.isLeafNode())return!1;const e=this._node;return!!e.forEachChild(this._index,((e,n)=>t(new zs(n,Ks(this.ref,e),cn))))}hasChild(t){const e=new le(t);return!this._node.getChild(e).isEmpty()}hasChildren(){return!this._node.isLeafNode()&&!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Gs(t,e){return t=(0,o.m9)(t),t._checkNotDeleted("ref"),void 0!==e?Ks(t._root,e):t._root}function Ks(t,e){return t=(0,o.m9)(t),null===he(t._path)?Qo("child","path",e,!1):Xo("child","path",e,!1),new Ws(t._repo,ve(t._path,e))}function Ys(t,e){t=(0,o.m9)(t),Zo("push",t._path),Go("push",e,t._path,!0);const n=hs(t._repo),r=In(n),i=Ks(t,r),s=Ks(t,r);let a;return a=null!=e?Js(s,e).then((()=>s)):Promise.resolve(s),i.then=a.then.bind(a),i.catch=a.then.bind(a,void 0),i}function Js(t,e){t=(0,o.m9)(t),Zo("set",t._path),Go("set",e,t._path,!1);const n=new o.BH;return vs(t._repo,t._path,e,null,n.wrapCallback((()=>{}))),n.promise}function Xs(t,e){Jo("update",e,t._path,!1);const n=new o.BH;return ys(t._repo,t._path,e,n.wrapCallback((()=>{}))),n.promise}class Qs{constructor(t){this.callbackContext=t}respondsTo(t){return"value"===t}createEvent(t,e){const n=e._queryParams.getIndex();return new qs("value",this,new zs(t.snapshotNode,new Ws(e._repo,e._path),n))}getEventRunner(t){return"cancel"===t.getEventType()?()=>this.callbackContext.onCancel(t.error):()=>this.callbackContext.onValue(t.snapshot,null)}createCancelEvent(t,e){return this.callbackContext.hasCancelCallback?new Bs(this,t,e):null}matches(t){return t instanceof Qs&&(!t.callbackContext||!this.callbackContext||t.callbackContext.matches(this.callbackContext))}hasAnyCallback(){return null!==this.callbackContext}}class Zs{constructor(t,e){this.eventType=t,this.callbackContext=e}respondsTo(t){let e="children_added"===t?"child_added":t;return e="children_removed"===e?"child_removed":e,this.eventType===e}createCancelEvent(t,e){return this.callbackContext.hasCancelCallback?new Bs(this,t,e):null}createEvent(t,e){(0,o.hu)(null!=t.childName,"Child events should have a childName.");const n=Ks(new Ws(e._repo,e._path),t.childName),r=e._queryParams.getIndex();return new qs(t.type,this,new zs(t.snapshotNode,n,r),t.prevName)}getEventRunner(t){return"cancel"===t.getEventType()?()=>this.callbackContext.onCancel(t.error):()=>this.callbackContext.onValue(t.snapshot,t.prevName)}matches(t){return t instanceof Zs&&(this.eventType===t.eventType&&(!this.callbackContext||!t.callbackContext||this.callbackContext.matches(t.callbackContext)))}hasAnyCallback(){return!!this.callbackContext}}function ta(t,e,n,r,i){let o;if("object"===typeof r&&(o=void 0,i=r),"function"===typeof r&&(o=r),i&&i.onlyOnce){const e=n,r=(n,r)=>{Cs(t._repo,t,a),e(n,r)};r.userCallback=n.userCallback,r.context=n.context,n=r}const s=new Vs(n,o||void 0),a="value"===e?new Qs(s):new Zs(e,s);return ws(t._repo,t,a),()=>Cs(t._repo,t,a)}function ea(t,e,n,r){return ta(t,"value",e,n,r)}xi(Ws),qi(Ws);
/**
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
 */
const na="FIREBASE_DATABASE_EMULATOR_HOST",ra={};let ia=!1;function oa(t,e,n,r,i){let o=r||t.options.databaseURL;void 0===o&&(t.options.projectId||S("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),E("Using default host for project ",t.options.projectId),o=`${t.options.projectId}-default-rtdb.firebaseio.com`);let s,a,c=Us(o,i),l=c.repoInfo;"undefined"!==typeof process&&(a={NODE_ENV:"production",VUE_APP_API_KEY:"AIzaSyCxS6Oo_sOPgOe1_6lxX6pt-MkZ6DRyogc",VUE_APP_AUTH_DOMAIN:"teste-56da2.firebaseapp.com",VUE_APP_DATABASE_URL:"https://teste-56da2.firebaseio.com",VUE_APP_PROJECT_ID:"teste-56da2",VUE_APP_STORAGE_BUCKET:"teste-56da2.appspot.com",VUE_APP_MESSAGING_SENDER_ID:"116490922695",VUE_APP_APP_ID:"1:116490922695:web:2f25ab1346ca0c179c6ce2",BASE_URL:"/"}[na]),a?(s=!0,o=`http://${a}?ns=${l.namespace}`,c=Us(o,i),l=c.repoInfo):s=!c.repoInfo.secure;const u=i&&s?new Q(Q.OWNER):new X(t.name,t.options,e);ts("Invalid Firebase Database URL",c),ye(c.path)||S("Database URL must point to the root of a Firebase Database (not including a child path).");const h=aa(l,t,u,new J(t.name,n));return new ca(h,t)}function sa(t,e){const n=ra[e];n&&n[t.key]===t||S(`Database ${e}(${t.repoInfo_}) has already been deleted.`),Es(t),delete n[t.key]}function aa(t,e,n,r){let i=ra[e.name];i||(i={},ra[e.name]=i);let o=i[t.toURLString()];return o&&S("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),o=new ls(t,ia,n,r),i[t.toURLString()]=o,o}class ca{constructor(t,e){this._repoInternal=t,this.app=e,this["type"]="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(us(this._repoInternal,this.app.options.appId,this.app.options["databaseAuthVariableOverride"]),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Ws(this._repo,ue())),this._rootInternal}_delete(){return null!==this._rootInternal&&(sa(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(t){null===this._rootInternal&&S("Cannot call "+t+" on a deleted database.")}}function la(t=(0,r.Mq)(),e){return(0,r.qX)(t,"database").getImmediate({identifier:e})}
/**
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
 */
function ua(t){u(r.Jn),(0,r.Xd)(new i.wA("database",((t,{instanceIdentifier:e})=>{const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return oa(n,r,i,e)}),"PUBLIC").setMultipleInstances(!0)),(0,r.KN)(a,c,t),(0,r.KN)(a,c,"esm2017")}
/**
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
 */je.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)},je.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};ua()},6035:function(t,e,n){"use strict";n(1703),n(8675),n(3462),n(7380),n(1118),n(2801),n(2262),n(4506),n(6699);var r,i=n(1804),o=n(7142),s=n(5168),a=n(223),c="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof n.g?n.g:"undefined"!==typeof self?self:{},l={},u=u||{},h=c||self;function d(){}function f(t){var e=typeof t;return e="object"!=e?e:t?Array.isArray(t)?"array":e:"null","array"==e||"object"==e&&"number"==typeof t.length}function p(t){var e=typeof t;return"object"==e&&null!=t||"function"==e}function g(t){return Object.prototype.hasOwnProperty.call(t,m)&&t[m]||(t[m]=++_)}var m="closure_uid_"+(1e9*Math.random()>>>0),_=0;function v(t,e,n){return t.call.apply(t.bind,arguments)}function y(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,r),t.apply(e,n)}}return function(){return t.apply(e,arguments)}}function b(t,e,n){return b=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?v:y,b.apply(null,arguments)}function w(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var e=n.slice();return e.push.apply(e,arguments),t.apply(this,e)}}function C(t,e){function n(){}n.prototype=e.prototype,t.Z=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Vb=function(t,n,r){for(var i=Array(arguments.length-2),o=2;o<arguments.length;o++)i[o-2]=arguments[o];return e.prototype[n].apply(t,i)}}function E(){this.s=this.s,this.o=this.o}var T=0,I={};E.prototype.s=!1,E.prototype.na=function(){if(!this.s&&(this.s=!0,this.M(),0!=T)){var t=g(this);delete I[t]}},E.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const S=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if("string"===typeof t)return"string"!==typeof e||1!=e.length?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1},k=Array.prototype.forEach?function(t,e,n){Array.prototype.forEach.call(t,e,n)}:function(t,e,n){const r=t.length,i="string"===typeof t?t.split(""):t;for(let o=0;o<r;o++)o in i&&e.call(n,i[o],o,t)};function x(t){t:{var e=zn;const n=t.length,r="string"===typeof t?t.split(""):t;for(let i=0;i<n;i++)if(i in r&&e.call(void 0,r[i],i,t)){e=i;break t}e=-1}return 0>e?null:"string"===typeof t?t.charAt(e):t[e]}function R(t){return Array.prototype.concat.apply([],arguments)}function A(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function P(t){return/^[\s\xa0]*$/.test(t)}var N,O=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function D(t,e){return-1!=t.indexOf(e)}function L(t,e){return t<e?-1:t>e?1:0}t:{var M=h.navigator;if(M){var F=M.userAgent;if(F){N=F;break t}}N=""}function j(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function U(t){const e={};for(const n in t)e[n]=t[n];return e}var $="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function q(t,e){let n,r;for(let i=1;i<arguments.length;i++){for(n in r=arguments[i],r)t[n]=r[n];for(let e=0;e<$.length;e++)n=$[e],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function B(t){return B[" "](t),t}function V(t){var e=nt;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}B[" "]=d;var H,W=D(N,"Opera"),z=D(N,"Trident")||D(N,"MSIE"),G=D(N,"Edge"),K=G||z,Y=D(N,"Gecko")&&!(D(N.toLowerCase(),"webkit")&&!D(N,"Edge"))&&!(D(N,"Trident")||D(N,"MSIE"))&&!D(N,"Edge"),J=D(N.toLowerCase(),"webkit")&&!D(N,"Edge");function X(){var t=h.document;return t?t.documentMode:void 0}t:{var Q="",Z=function(){var t=N;return Y?/rv:([^\);]+)(\)|;)/.exec(t):G?/Edge\/([\d\.]+)/.exec(t):z?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t):J?/WebKit\/(\S+)/.exec(t):W?/(?:Version)[ \/]?(\S+)/.exec(t):void 0}();if(Z&&(Q=Z?Z[1]:""),z){var tt=X();if(null!=tt&&tt>parseFloat(Q)){H=String(tt);break t}}H=Q}var et,nt={};function rt(){return V((function(){let t=0;const e=O(String(H)).split("."),n=O("9").split("."),r=Math.max(e.length,n.length);for(let s=0;0==t&&s<r;s++){var i=e[s]||"",o=n[s]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],o=/(\d*)(\D*)(.*)/.exec(o)||["","","",""],0==i[0].length&&0==o[0].length)break;t=L(0==i[1].length?0:parseInt(i[1],10),0==o[1].length?0:parseInt(o[1],10))||L(0==i[2].length,0==o[2].length)||L(i[2],o[2]),i=i[3],o=o[3]}while(0==t)}return 0<=t}))}if(h.document&&z){var it=X();et=it||(parseInt(H,10)||void 0)}else et=void 0;var ot=et,st=function(){if(!h.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{h.addEventListener("test",d,e),h.removeEventListener("test",d,e)}catch(n){}return t}();function at(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}function ct(t,e){if(at.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(Y){t:{try{B(e.nodeName);var i=!0;break t}catch(o){}i=!1}i||(e=null)}}else"mouseover"==n?e=t.fromElement:"mouseout"==n&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=void 0!==r.clientX?r.clientX:r.pageX,this.clientY=void 0!==r.clientY?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=void 0!==t.clientX?t.clientX:t.pageX,this.clientY=void 0!==t.clientY?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType="string"===typeof t.pointerType?t.pointerType:lt[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&ct.Z.h.call(this)}}at.prototype.h=function(){this.defaultPrevented=!0},C(ct,at);var lt={2:"touch",3:"pen",4:"mouse"};ct.prototype.h=function(){ct.Z.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var ut="closure_listenable_"+(1e6*Math.random()|0),ht=0;function dt(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.ia=i,this.key=++ht,this.ca=this.fa=!1}function ft(t){t.ca=!0,t.listener=null,t.proxy=null,t.src=null,t.ia=null}function pt(t){this.src=t,this.g={},this.h=0}function gt(t,e){var n=e.type;if(n in t.g){var r,i=t.g[n],o=S(i,e);(r=0<=o)&&Array.prototype.splice.call(i,o,1),r&&(ft(e),0==t.g[n].length&&(delete t.g[n],t.h--))}}function mt(t,e,n,r){for(var i=0;i<t.length;++i){var o=t[i];if(!o.ca&&o.listener==e&&o.capture==!!n&&o.ia==r)return i}return-1}pt.prototype.add=function(t,e,n,r,i){var o=t.toString();t=this.g[o],t||(t=this.g[o]=[],this.h++);var s=mt(t,e,r,i);return-1<s?(e=t[s],n||(e.fa=!1)):(e=new dt(e,this.src,o,!!r,i),e.fa=n,t.push(e)),e};var _t="closure_lm_"+(1e6*Math.random()|0),vt={};function yt(t,e,n,r,i){if(r&&r.once)return Ct(t,e,n,r,i);if(Array.isArray(e)){for(var o=0;o<e.length;o++)yt(t,e[o],n,r,i);return null}return n=Rt(n),t&&t[ut]?t.N(e,n,p(r)?!!r.capture:!!r,i):bt(t,e,n,!1,r,i)}function bt(t,e,n,r,i,o){if(!e)throw Error("Invalid event type");var s=p(i)?!!i.capture:!!i,a=kt(t);if(a||(t[_t]=a=new pt(t)),n=a.add(e,n,r,s,o),n.proxy)return n;if(r=wt(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)st||(i=s),void 0===i&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(It(e.toString()),r);else{if(!t.addListener||!t.removeListener)throw Error("addEventListener and attachEvent are unavailable.");t.addListener(r)}return n}function wt(){function t(n){return e.call(t.src,t.listener,n)}var e=St;return t}function Ct(t,e,n,r,i){if(Array.isArray(e)){for(var o=0;o<e.length;o++)Ct(t,e[o],n,r,i);return null}return n=Rt(n),t&&t[ut]?t.O(e,n,p(r)?!!r.capture:!!r,i):bt(t,e,n,!0,r,i)}function Et(t,e,n,r,i){if(Array.isArray(e))for(var o=0;o<e.length;o++)Et(t,e[o],n,r,i);else r=p(r)?!!r.capture:!!r,n=Rt(n),t&&t[ut]?(t=t.i,e=String(e).toString(),e in t.g&&(o=t.g[e],n=mt(o,n,r,i),-1<n&&(ft(o[n]),Array.prototype.splice.call(o,n,1),0==o.length&&(delete t.g[e],t.h--)))):t&&(t=kt(t))&&(e=t.g[e.toString()],t=-1,e&&(t=mt(e,n,r,i)),(n=-1<t?e[t]:null)&&Tt(n))}function Tt(t){if("number"!==typeof t&&t&&!t.ca){var e=t.src;if(e&&e[ut])gt(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(It(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=kt(e))?(gt(n,t),0==n.h&&(n.src=null,e[_t]=null)):ft(t)}}}function It(t){return t in vt?vt[t]:vt[t]="on"+t}function St(t,e){if(t.ca)t=!0;else{e=new ct(e,this);var n=t.listener,r=t.ia||t.src;t.fa&&Tt(t),t=n.call(r,e)}return t}function kt(t){return t=t[_t],t instanceof pt?t:null}var xt="__closure_events_fn_"+(1e9*Math.random()>>>0);function Rt(t){return"function"===typeof t?t:(t[xt]||(t[xt]=function(e){return t.handleEvent(e)}),t[xt])}function At(){E.call(this),this.i=new pt(this),this.P=this,this.I=null}function Pt(t,e){var n,r=t.I;if(r)for(n=[];r;r=r.I)n.push(r);if(t=t.P,r=e.type||e,"string"===typeof e)e=new at(e,t);else if(e instanceof at)e.target=e.target||t;else{var i=e;e=new at(r,t),q(e,i)}if(i=!0,n)for(var o=n.length-1;0<=o;o--){var s=e.g=n[o];i=Nt(s,r,!0,e)&&i}if(s=e.g=t,i=Nt(s,r,!0,e)&&i,i=Nt(s,r,!1,e)&&i,n)for(o=0;o<n.length;o++)s=e.g=n[o],i=Nt(s,r,!1,e)&&i}function Nt(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,o=0;o<e.length;++o){var s=e[o];if(s&&!s.ca&&s.capture==n){var a=s.listener,c=s.ia||s.src;s.fa&&gt(t.i,s),i=!1!==a.call(c,r)&&i}}return i&&!r.defaultPrevented}C(At,E),At.prototype[ut]=!0,At.prototype.removeEventListener=function(t,e,n,r){Et(this,t,e,n,r)},At.prototype.M=function(){if(At.Z.M.call(this),this.i){var t,e=this.i;for(t in e.g){for(var n=e.g[t],r=0;r<n.length;r++)ft(n[r]);delete e.g[t],e.h--}}this.I=null},At.prototype.N=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)},At.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};var Ot=h.JSON.stringify;function Dt(){var t=Vt;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class Lt{constructor(){this.h=this.g=null}add(t,e){const n=Ft.get();n.set(t,e),this.h?this.h.next=n:this.g=n,this.h=n}}var Mt,Ft=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}((()=>new jt),(t=>t.reset()));class jt{constructor(){this.next=this.g=this.h=null}set(t,e){this.h=t,this.g=e,this.next=null}reset(){this.next=this.g=this.h=null}}function Ut(t){h.setTimeout((()=>{throw t}),0)}function $t(t,e){Mt||qt(),Bt||(Mt(),Bt=!0),Vt.add(t,e)}function qt(){var t=h.Promise.resolve(void 0);Mt=function(){t.then(Ht)}}var Bt=!1,Vt=new Lt;function Ht(){for(var t;t=Dt();){try{t.h.call(t.g)}catch(n){Ut(n)}var e=Ft;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Bt=!1}function Wt(t,e){At.call(this),this.h=t||1,this.g=e||h,this.j=b(this.kb,this),this.l=Date.now()}function zt(t){t.da=!1,t.S&&(t.g.clearTimeout(t.S),t.S=null)}function Gt(t,e,n){if("function"===typeof t)n&&(t=b(t,n));else{if(!t||"function"!=typeof t.handleEvent)throw Error("Invalid listener argument");t=b(t.handleEvent,t)}return 2147483647<Number(e)?-1:h.setTimeout(t,e||0)}function Kt(t){t.g=Gt((()=>{t.g=null,t.i&&(t.i=!1,Kt(t))}),t.j);const e=t.h;t.h=null,t.m.apply(null,e)}C(Wt,At),r=Wt.prototype,r.da=!1,r.S=null,r.kb=function(){if(this.da){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-t):(this.S&&(this.g.clearTimeout(this.S),this.S=null),Pt(this,"tick"),this.da&&(zt(this),this.start()))}},r.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())},r.M=function(){Wt.Z.M.call(this),zt(this),delete this.g};class Yt extends E{constructor(t,e){super(),this.m=t,this.j=e,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:Kt(this)}M(){super.M(),this.g&&(h.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Jt(t){E.call(this),this.h=t,this.g={}}C(Jt,E);var Xt=[];function Qt(t,e,n,r){Array.isArray(n)||(n&&(Xt[0]=n.toString()),n=Xt);for(var i=0;i<n.length;i++){var o=yt(e,n[i],r||t.handleEvent,!1,t.h||t);if(!o)break;t.g[o.key]=o}}function Zt(t){j(t.g,(function(t,e){this.g.hasOwnProperty(e)&&Tt(t)}),t),t.g={}}function te(){this.g=!0}function ee(t,e,n,r,i,o){t.info((function(){if(t.g)if(o)for(var s="",a=o.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var h=u.split("_");s=2<=h.length&&"type"==h[1]?s+(u+"=")+l+"&":s+(u+"=redacted&")}}else s=null;else s=o;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+"\n"+n+"\n"+s}))}function ne(t,e,n,r,i,o,s){t.info((function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+"\n"+n+"\n"+o+" "+s}))}function re(t,e,n,r){t.info((function(){return"XMLHTTP TEXT ("+e+"): "+oe(t,n)+(r?" "+r:"")}))}function ie(t,e){t.info((function(){return"TIMEOUT: "+e}))}function oe(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n)for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var o=i[0];if("noop"!=o&&"stop"!=o&&"close"!=o)for(var s=1;s<i.length;s++)i[s]=""}}}return Ot(n)}catch(a){return e}}Jt.prototype.M=function(){Jt.Z.M.call(this),Zt(this)},Jt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},te.prototype.Aa=function(){this.g=!1},te.prototype.info=function(){};var se={},ae=null;function ce(){return ae=ae||new At}function le(t){at.call(this,se.Ma,t)}function ue(t){const e=ce();Pt(e,new le(e,t))}function he(t,e){at.call(this,se.STAT_EVENT,t),this.stat=e}function de(t){const e=ce();Pt(e,new he(e,t))}function fe(t,e){at.call(this,se.Na,t),this.size=e}function pe(t,e){if("function"!==typeof t)throw Error("Fn must not be null and must be a function");return h.setTimeout((function(){t()}),e)}se.Ma="serverreachability",C(le,at),se.STAT_EVENT="statevent",C(he,at),se.Na="timingevent",C(fe,at);var ge={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},me={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function _e(){}function ve(t){return t.h||(t.h=t.i())}function ye(){}_e.prototype.h=null;var be,we={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function Ce(){at.call(this,"d")}function Ee(){at.call(this,"c")}function Te(){}function Ie(t,e,n,r){this.l=t,this.j=e,this.m=n,this.X=r||1,this.V=new Jt(this),this.P=ke,t=K?125:void 0,this.W=new Wt(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new Se}function Se(){this.i=null,this.g="",this.h=!1}C(Ce,at),C(Ee,at),C(Te,_e),Te.prototype.g=function(){return new XMLHttpRequest},Te.prototype.i=function(){return{}},be=new Te;var ke=45e3,xe={},Re={};function Ae(t,e,n){t.K=1,t.v=en(Ye(e)),t.s=n,t.U=!0,Pe(t,null)}function Pe(t,e){t.F=Date.now(),Le(t),t.A=Ye(t.v);var n=t.A,r=t.X;Array.isArray(r)||(r=[String(r)]),_n(n.h,"t",r),t.C=0,n=t.l.H,t.h=new Se,t.g=Er(t.l,n?e:null,!t.s),0<t.O&&(t.L=new Yt(b(t.Ia,t,t.g),t.O)),Qt(t.V,t.g,"readystatechange",t.gb),e=t.H?U(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.A,t.u,t.s,e)):(t.u="GET",t.g.ea(t.A,t.u,null,e)),ue(1),ee(t.j,t.u,t.A,t.m,t.X,t.s)}function Ne(t){return!!t.g&&("GET"==t.u&&2!=t.K&&t.l.Ba)}function Oe(t,e,n){let r,i=!0;for(;!t.I&&t.C<n.length;){if(r=De(t,n),r==Re){4==e&&(t.o=4,de(14),i=!1),re(t.j,t.m,null,"[Incomplete Response]");break}if(r==xe){t.o=4,de(15),re(t.j,t.m,n,"[Invalid Chunk]"),i=!1;break}re(t.j,t.m,r,null),$e(t,r)}Ne(t)&&r!=Re&&r!=xe&&(t.h.g="",t.C=0),4!=e||0!=n.length||t.h.h||(t.o=1,de(16),i=!1),t.i=t.i&&i,i?0<n.length&&!t.aa&&(t.aa=!0,e=t.l,e.g==t&&e.$&&!e.L&&(e.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),gr(e),e.L=!0,de(11))):(re(t.j,t.m,n,"[Invalid Chunked Response]"),Ue(t),je(t))}function De(t,e){var n=t.C,r=e.indexOf("\n",n);return-1==r?Re:(n=Number(e.substring(n,r)),isNaN(n)?xe:(r+=1,r+n>e.length?Re:(e=e.substr(r,n),t.C=r+n,e)))}function Le(t){t.Y=Date.now()+t.P,Me(t,t.P)}function Me(t,e){if(null!=t.B)throw Error("WatchDog timer not null");t.B=pe(b(t.eb,t),e)}function Fe(t){t.B&&(h.clearTimeout(t.B),t.B=null)}function je(t){0==t.l.G||t.I||vr(t.l,t)}function Ue(t){Fe(t);var e=t.L;e&&"function"==typeof e.na&&e.na(),t.L=null,zt(t.W),Zt(t.V),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function $e(t,e){try{var n=t.l;if(0!=n.G&&(n.g==t||In(n.i,t)))if(n.I=t.N,!t.J&&In(n.i,t)&&3==n.G){try{var r=n.Ca.g.parse(e)}catch(l){r=null}if(Array.isArray(r)&&3==r.length){var i=r;if(0==i[0]){t:if(!n.u){if(n.g){if(!(n.g.F+3e3<t.F))break t;_r(n),or(n)}pr(n),de(18)}}else n.ta=i[1],0<n.ta-n.U&&37500>i[2]&&n.N&&0==n.A&&!n.v&&(n.v=pe(b(n.ab,n),6e3));if(1>=Tn(n.i)&&n.ka){try{n.ka()}catch(l){}n.ka=void 0}}else br(n,11)}else if((t.J||n.g==t)&&_r(n),!P(e))for(i=n.Ca.g.parse(e),e=0;e<i.length;e++){let l=i[e];if(n.U=l[0],l=l[1],2==n.G)if("c"==l[0]){n.J=l[1],n.la=l[2];const e=l[3];null!=e&&(n.ma=e,n.h.info("VER="+n.ma));const i=l[4];null!=i&&(n.za=i,n.h.info("SVER="+n.za));const u=l[5];null!=u&&"number"===typeof u&&0<u&&(r=1.5*u,n.K=r,n.h.info("backChannelRequestTimeoutMs_="+r)),r=n;const h=t.g;if(h){const t=h.g?h.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(t){var o=r.i;!o.g&&(D(t,"spdy")||D(t,"quic")||D(t,"h2"))&&(o.j=o.l,o.g=new Set,o.h&&(Sn(o,o.h),o.h=null))}if(r.D){const t=h.g?h.g.getResponseHeader("X-HTTP-Session-Id"):null;t&&(r.sa=t,tn(r.F,r.D,t))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-t.F,n.h.info("Handshake RTT: "+n.O+"ms")),r=n;var s=t;if(r.oa=Cr(r,r.H?r.la:null,r.W),s.J){kn(r.i,s);var a=s,c=r.K;c&&a.setTimeout(c),a.B&&(Fe(a),Le(a)),r.g=s}else fr(r);0<n.l.length&&cr(n)}else"stop"!=l[0]&&"close"!=l[0]||br(n,7);else 3==n.G&&("stop"==l[0]||"close"==l[0]?"stop"==l[0]?br(n,7):ir(n):"noop"!=l[0]&&n.j&&n.j.wa(l),n.A=0)}ue(4)}catch(l){}}function qe(t){if(t.R&&"function"==typeof t.R)return t.R();if("string"===typeof t)return t.split("");if(f(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}for(r in e=[],n=0,t)e[n++]=t[r];return e}function Be(t,e){if(t.forEach&&"function"==typeof t.forEach)t.forEach(e,void 0);else if(f(t)||"string"===typeof t)k(t,e,void 0);else{if(t.T&&"function"==typeof t.T)var n=t.T();else if(t.R&&"function"==typeof t.R)n=void 0;else if(f(t)||"string"===typeof t){n=[];for(var r=t.length,i=0;i<r;i++)n.push(i)}else for(i in n=[],r=0,t)n[r++]=i;r=qe(t),i=r.length;for(var o=0;o<i;o++)e.call(void 0,r[o],n&&n[o],t)}}function Ve(t,e){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var r=0;r<n;r+=2)this.set(arguments[r],arguments[r+1])}else if(t)if(t instanceof Ve)for(n=t.T(),r=0;r<n.length;r++)this.set(n[r],t.get(n[r]));else for(r in t)this.set(r,t[r])}function He(t){if(t.i!=t.g.length){for(var e=0,n=0;e<t.g.length;){var r=t.g[e];We(t.h,r)&&(t.g[n++]=r),e++}t.g.length=n}if(t.i!=t.g.length){var i={};for(n=e=0;e<t.g.length;)r=t.g[e],We(i,r)||(t.g[n++]=r,i[r]=1),e++;t.g.length=n}}function We(t,e){return Object.prototype.hasOwnProperty.call(t,e)}r=Ie.prototype,r.setTimeout=function(t){this.P=t},r.gb=function(t){t=t.target;const e=this.L;e&&3==Qn(t)?e.l():this.Ia(t)},r.Ia=function(t){try{if(t==this.g)t:{const u=Qn(this.g);var e=this.g.Da();const d=this.g.ba();if(!(3>u)&&(3!=u||K||this.g&&(this.h.h||this.g.ga()||Zn(this.g)))){this.I||4!=u||7==e||ue(8==e||0>=d?3:2),Fe(this);var n=this.g.ba();this.N=n;e:if(Ne(this)){var r=Zn(this.g);t="";var i=r.length,o=4==Qn(this.g);if(!this.h.i){if("undefined"===typeof TextDecoder){Ue(this),je(this);var s="";break e}this.h.i=new h.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:o&&e==i-1});r.splice(0,i),this.h.g+=t,this.C=0,s=this.h.g}else s=this.g.ga();if(this.i=200==n,ne(this.j,this.u,this.A,this.m,this.X,u,n),this.i){if(this.$&&!this.J){e:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!P(a)){var l=a;break e}}l=null}if(!(n=l)){this.i=!1,this.o=3,de(12),Ue(this),je(this);break t}re(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,$e(this,n)}this.U?(Oe(this,u,s),K&&this.i&&3==u&&(Qt(this.V,this.W,"tick",this.fb),this.W.start())):(re(this.j,this.m,s,null),$e(this,s)),4==u&&Ue(this),this.i&&!this.I&&(4==u?vr(this.l,this):(this.i=!1,Le(this)))}else 400==n&&0<s.indexOf("Unknown SID")?(this.o=3,de(12)):(this.o=0,de(13)),Ue(this),je(this)}}}catch(u){}},r.fb=function(){if(this.g){var t=Qn(this.g),e=this.g.ga();this.C<e.length&&(Fe(this),Oe(this,t,e),this.i&&4!=t&&Le(this))}},r.cancel=function(){this.I=!0,Ue(this)},r.eb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(ie(this.j,this.A),2!=this.K&&(ue(3),de(17)),Ue(this),this.o=2,je(this)):Me(this,this.Y-t)},r=Ve.prototype,r.R=function(){He(this);for(var t=[],e=0;e<this.g.length;e++)t.push(this.h[this.g[e]]);return t},r.T=function(){return He(this),this.g.concat()},r.get=function(t,e){return We(this.h,t)?this.h[t]:e},r.set=function(t,e){We(this.h,t)||(this.i++,this.g.push(t)),this.h[t]=e},r.forEach=function(t,e){for(var n=this.T(),r=0;r<n.length;r++){var i=n[r],o=this.get(i);t.call(e,o,i,this)}};var ze=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function Ge(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var o=t[n].substring(0,r);i=t[n].substring(r+1)}else o=t[n];e(o,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Ke(t,e){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,t instanceof Ke){this.g=void 0!==e?e:t.g,Je(this,t.j),this.s=t.s,Xe(this,t.i),Qe(this,t.m),this.l=t.l,e=t.h;var n=new fn;n.i=e.i,e.g&&(n.g=new Ve(e.g),n.h=e.h),Ze(this,n),this.o=t.o}else t&&(n=String(t).match(ze))?(this.g=!!e,Je(this,n[1]||"",!0),this.s=on(n[2]||""),Xe(this,n[3]||"",!0),Qe(this,n[4]),this.l=on(n[5]||"",!0),Ze(this,n[6]||"",!0),this.o=on(n[7]||"")):(this.g=!!e,this.h=new fn(null,this.g))}function Ye(t){return new Ke(t)}function Je(t,e,n){t.j=n?on(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Xe(t,e,n){t.i=n?on(e,!0):e}function Qe(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Ze(t,e,n){e instanceof fn?(t.h=e,yn(t.h,t.g)):(n||(e=sn(e,hn)),t.h=new fn(e,t.g))}function tn(t,e,n){t.h.set(e,n)}function en(t){return tn(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function nn(t){return t instanceof Ke?Ye(t):new Ke(t,void 0)}function rn(t,e,n,r){var i=new Ke(null,void 0);return t&&Je(i,t),e&&Xe(i,e),n&&Qe(i,n),r&&(i.l=r),i}function on(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function sn(t,e,n){return"string"===typeof t?(t=encodeURI(t).replace(e,an),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function an(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(15&t).toString(16)}Ke.prototype.toString=function(){var t=[],e=this.j;e&&t.push(sn(e,cn,!0),":");var n=this.i;return(n||"file"==e)&&(t.push("//"),(e=this.s)&&t.push(sn(e,cn,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,null!=n&&t.push(":",String(n))),(n=this.l)&&(this.i&&"/"!=n.charAt(0)&&t.push("/"),t.push(sn(n,"/"==n.charAt(0)?un:ln,!0))),(n=this.h.toString())&&t.push("?",n),(n=this.o)&&t.push("#",sn(n,dn)),t.join("")};var cn=/[#\/\?@]/g,ln=/[#\?:]/g,un=/[#\?]/g,hn=/[#\?@]/g,dn=/#/g;function fn(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function pn(t){t.g||(t.g=new Ve,t.h=0,t.i&&Ge(t.i,(function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)})))}function gn(t,e){pn(t),e=vn(t,e),We(t.g.h,e)&&(t.i=null,t.h-=t.g.get(e).length,t=t.g,We(t.h,e)&&(delete t.h[e],t.i--,t.g.length>2*t.i&&He(t)))}function mn(t,e){return pn(t),e=vn(t,e),We(t.g.h,e)}function _n(t,e,n){gn(t,e),0<n.length&&(t.i=null,t.g.set(vn(t,e),A(n)),t.h+=n.length)}function vn(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function yn(t,e){e&&!t.j&&(pn(t),t.i=null,t.g.forEach((function(t,e){var n=e.toLowerCase();e!=n&&(gn(this,e),_n(this,n,t))}),t)),t.j=e}r=fn.prototype,r.add=function(t,e){pn(this),this.i=null,t=vn(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this},r.forEach=function(t,e){pn(this),this.g.forEach((function(n,r){k(n,(function(n){t.call(e,n,r,this)}),this)}),this)},r.T=function(){pn(this);for(var t=this.g.R(),e=this.g.T(),n=[],r=0;r<e.length;r++)for(var i=t[r],o=0;o<i.length;o++)n.push(e[r]);return n},r.R=function(t){pn(this);var e=[];if("string"===typeof t)mn(this,t)&&(e=R(e,this.g.get(vn(this,t))));else{t=this.g.R();for(var n=0;n<t.length;n++)e=R(e,t[n])}return e},r.set=function(t,e){return pn(this),this.i=null,t=vn(this,t),mn(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this},r.get=function(t,e){return t?(t=this.R(t),0<t.length?String(t[0]):e):e},r.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var t=[],e=this.g.T(),n=0;n<e.length;n++){var r=e[n],i=encodeURIComponent(String(r));r=this.R(r);for(var o=0;o<r.length;o++){var s=i;""!==r[o]&&(s+="="+encodeURIComponent(String(r[o]))),t.push(s)}}return this.i=t.join("&")};var bn=class{constructor(t,e){this.h=t,this.g=e}};function wn(t){this.l=t||Cn,h.PerformanceNavigationTiming?(t=h.performance.getEntriesByType("navigation"),t=0<t.length&&("hq"==t[0].nextHopProtocol||"h2"==t[0].nextHopProtocol)):t=!!(h.g&&h.g.Ea&&h.g.Ea()&&h.g.Ea().Zb),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Cn=10;function En(t){return!!t.h||!!t.g&&t.g.size>=t.j}function Tn(t){return t.h?1:t.g?t.g.size:0}function In(t,e){return t.h?t.h==e:!!t.g&&t.g.has(e)}function Sn(t,e){t.g?t.g.add(e):t.h=e}function kn(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}function xn(t){if(null!=t.h)return t.i.concat(t.h.D);if(null!=t.g&&0!==t.g.size){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return A(t.i)}function Rn(){}function An(){this.g=new Rn}function Pn(t,e,n){const r=n||"";try{Be(t,(function(t,n){let i=t;p(t)&&(i=Ot(t)),e.push(r+n+"="+encodeURIComponent(i))}))}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function Nn(t,e){const n=new te;if(h.Image){const r=new Image;r.onload=w(On,n,r,"TestLoadImage: loaded",!0,e),r.onerror=w(On,n,r,"TestLoadImage: error",!1,e),r.onabort=w(On,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=w(On,n,r,"TestLoadImage: timeout",!1,e),h.setTimeout((function(){r.ontimeout&&r.ontimeout()}),1e4),r.src=t}else e(!1)}function On(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch(o){}}function Dn(t){this.l=t.$b||null,this.j=t.ib||!1}function Ln(t,e){At.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=Mn,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}wn.prototype.cancel=function(){if(this.i=xn(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const t of this.g.values())t.cancel();this.g.clear()}},Rn.prototype.stringify=function(t){return h.JSON.stringify(t,void 0)},Rn.prototype.parse=function(t){return h.JSON.parse(t,void 0)},C(Dn,_e),Dn.prototype.g=function(){return new Ln(this.l,this.j)},Dn.prototype.i=function(t){return function(){return t}}({}),C(Ln,At);var Mn=0;function Fn(t){t.j.read().then(t.Sa.bind(t)).catch(t.ha.bind(t))}function jn(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Un(t)}function Un(t){t.onreadystatechange&&t.onreadystatechange.call(t)}r=Ln.prototype,r.open=function(t,e){if(this.readyState!=Mn)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Un(this)},r.send=function(t){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||h).fetch(new Request(this.B,e)).then(this.Va.bind(this),this.ha.bind(this))},r.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,jn(this)),this.readyState=Mn},r.Va=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Un(this)),this.g&&(this.readyState=3,Un(this),this.g)))if("arraybuffer"===this.responseType)t.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if("undefined"!==typeof h.ReadableStream&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Fn(this)}else t.text().then(this.Ua.bind(this),this.ha.bind(this))},r.Sa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?jn(this):Un(this),3==this.readyState&&Fn(this)}},r.Ua=function(t){this.g&&(this.response=this.responseText=t,jn(this))},r.Ta=function(t){this.g&&(this.response=t,jn(this))},r.ha=function(){this.g&&jn(this)},r.setRequestHeader=function(t,e){this.v.append(t,e)},r.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join("\r\n")},Object.defineProperty(Ln.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(t){this.m=t?"include":"same-origin"}});var $n=h.JSON.parse;function qn(t){At.call(this),this.headers=new Ve,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Bn,this.K=this.L=!1}C(qn,At);var Bn="",Vn=/^https?$/i,Hn=["POST","PUT"];function Wn(t){return z&&rt()&&"number"===typeof t.timeout&&void 0!==t.ontimeout}function zn(t){return"content-type"==t.toLowerCase()}function Gn(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Kn(t),Jn(t)}function Kn(t){t.D||(t.D=!0,Pt(t,"complete"),Pt(t,"error"))}function Yn(t){if(t.h&&"undefined"!=typeof u&&(!t.C[1]||4!=Qn(t)||2!=t.ba()))if(t.v&&4==Qn(t))Gt(t.Fa,0,t);else if(Pt(t,"readystatechange"),4==Qn(t)){t.h=!1;try{const c=t.ba();t:switch(c){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break t;default:e=!1}var n;if(!(n=e)){var r;if(r=0===c){var i=String(t.H).match(ze)[1]||null;if(!i&&h.self&&h.self.location){var o=h.self.location.protocol;i=o.substr(0,o.length-1)}r=!Vn.test(i?i.toLowerCase():"")}n=r}if(n)Pt(t,"complete"),Pt(t,"success");else{t.m=6;try{var s=2<Qn(t)?t.g.statusText:""}catch(a){s=""}t.j=s+" ["+t.ba()+"]",Kn(t)}}finally{Jn(t)}}}function Jn(t,e){if(t.g){Xn(t);const r=t.g,i=t.C[0]?d:null;t.g=null,t.C=null,e||Pt(t,"ready");try{r.onreadystatechange=i}catch(n){}}}function Xn(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(h.clearTimeout(t.A),t.A=null)}function Qn(t){return t.g?t.g.readyState:0}function Zn(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case Bn:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch(e){return null}}function tr(t){let e="";return j(t,(function(t,n){e+=n,e+=":",e+=t,e+="\r\n"})),e}function er(t,e,n){t:{for(r in n){var r=!1;break t}r=!0}r||(n=tr(n),"string"===typeof t?null!=n&&encodeURIComponent(String(n)):tn(t,e,n))}function nr(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function rr(t){this.za=0,this.l=[],this.h=new te,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=nr("failFast",!1,t),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=nr("baseRetryDelayMs",5e3,t),this.$a=nr("retryDelaySeedMs",1e4,t),this.Ya=nr("forwardChannelMaxRetries",2,t),this.ra=nr("forwardChannelRequestTimeoutMs",2e4,t),this.qa=t&&t.xmlHttpFactory||void 0,this.Ba=t&&t.Yb||!1,this.K=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.J="",this.i=new wn(t&&t.concurrentRequestLimit),this.Ca=new An,this.ja=t&&t.fastHandshake||!1,this.Ra=t&&t.Wb||!1,t&&t.Aa&&this.h.Aa(),t&&t.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&t&&t.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!t||!1!==t.Xb}function ir(t){if(sr(t),3==t.G){var e=t.V++,n=Ye(t.F);tn(n,"SID",t.J),tn(n,"RID",e),tn(n,"TYPE","terminate"),hr(t,n),e=new Ie(t,t.h,e,void 0),e.K=2,e.v=en(Ye(n)),n=!1,h.navigator&&h.navigator.sendBeacon&&(n=h.navigator.sendBeacon(e.v.toString(),"")),!n&&h.Image&&((new Image).src=e.v,n=!0),n||(e.g=Er(e.l,null),e.g.ea(e.v)),e.F=Date.now(),Le(e)}wr(t)}function or(t){t.g&&(gr(t),t.g.cancel(),t.g=null)}function sr(t){or(t),t.u&&(h.clearTimeout(t.u),t.u=null),_r(t),t.i.cancel(),t.m&&("number"===typeof t.m&&h.clearTimeout(t.m),t.m=null)}function ar(t,e){t.l.push(new bn(t.Za++,e)),3==t.G&&cr(t)}function cr(t){En(t.i)||t.m||(t.m=!0,$t(t.Ha,t),t.C=0)}function lr(t,e){return!(Tn(t.i)>=t.i.j-(t.m?1:0))&&(t.m?(t.l=e.D.concat(t.l),!0):!(1==t.G||2==t.G||t.C>=(t.Xa?0:t.Ya))&&(t.m=pe(b(t.Ha,t,e),yr(t,t.C)),t.C++,!0))}function ur(t,e){var n;n=e?e.m:t.V++;const r=Ye(t.F);tn(r,"SID",t.J),tn(r,"RID",n),tn(r,"AID",t.U),hr(t,r),t.o&&t.s&&er(r,t.o,t.s),n=new Ie(t,t.h,n,t.C+1),null===t.o&&(n.H=t.s),e&&(t.l=e.D.concat(t.l)),e=dr(t,n,1e3),n.setTimeout(Math.round(.5*t.ra)+Math.round(.5*t.ra*Math.random())),Sn(t.i,n),Ae(n,r,e)}function hr(t,e){t.j&&Be({},(function(t,n){tn(e,n,t)}))}function dr(t,e,n){n=Math.min(t.l.length,n);var r=t.j?b(t.j.Oa,t.j,t):null;t:{var i=t.l;let e=-1;for(;;){const t=["count="+n];-1==e?0<n?(e=i[0].h,t.push("ofs="+e)):e=0:t.push("ofs="+e);let o=!0;for(let s=0;s<n;s++){let n=i[s].h;const a=i[s].g;if(n-=e,0>n)e=Math.max(0,i[s].h-100),o=!1;else try{Pn(a,t,"req"+n+"_")}catch(Ur){r&&r(a)}}if(o){r=t.join("&");break t}}}return t=t.l.splice(0,n),e.D=t,r}function fr(t){t.g||t.u||(t.Y=1,$t(t.Ga,t),t.A=0)}function pr(t){return!(t.g||t.u||3<=t.A)&&(t.Y++,t.u=pe(b(t.Ga,t),yr(t,t.A)),t.A++,!0)}function gr(t){null!=t.B&&(h.clearTimeout(t.B),t.B=null)}function mr(t){t.g=new Ie(t,t.h,"rpc",t.Y),null===t.o&&(t.g.H=t.s),t.g.O=0;var e=Ye(t.oa);tn(e,"RID","rpc"),tn(e,"SID",t.J),tn(e,"CI",t.N?"0":"1"),tn(e,"AID",t.U),hr(t,e),tn(e,"TYPE","xmlhttp"),t.o&&t.s&&er(e,t.o,t.s),t.K&&t.g.setTimeout(t.K);var n=t.g;t=t.la,n.K=1,n.v=en(Ye(e)),n.s=null,n.U=!0,Pe(n,t)}function _r(t){null!=t.v&&(h.clearTimeout(t.v),t.v=null)}function vr(t,e){var n=null;if(t.g==e){_r(t),gr(t),t.g=null;var r=2}else{if(!In(t.i,e))return;n=e.D,kn(t.i,e),r=1}if(t.I=e.N,0!=t.G)if(e.i)if(1==r){n=e.s?e.s.length:0,e=Date.now()-e.F;var i=t.C;r=ce(),Pt(r,new fe(r,n,e,i)),cr(t)}else fr(t);else if(i=e.o,3==i||0==i&&0<t.I||!(1==r&&lr(t,e)||2==r&&pr(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),i){case 1:br(t,5);break;case 4:br(t,10);break;case 3:br(t,6);break;default:br(t,2)}}function yr(t,e){let n=t.Pa+Math.floor(Math.random()*t.$a);return t.j||(n*=2),n*e}function br(t,e){if(t.h.info("Error code "+e),2==e){var n=null;t.j&&(n=null);var r=b(t.jb,t);n||(n=new Ke("//www.google.com/images/cleardot.gif"),h.location&&"http"==h.location.protocol||Je(n,"https"),en(n)),Nn(n.toString(),r)}else de(2);t.G=0,t.j&&t.j.va(e),wr(t),sr(t)}function wr(t){t.G=0,t.I=-1,t.j&&(0==xn(t.i).length&&0==t.l.length||(t.i.i.length=0,A(t.l),t.l.length=0),t.j.ua())}function Cr(t,e,n){let r=nn(n);if(""!=r.i)e&&Xe(r,e+"."+r.i),Qe(r,r.m);else{const t=h.location;r=rn(t.protocol,e?e+"."+t.hostname:t.hostname,+t.port,n)}return t.aa&&j(t.aa,(function(t,e){tn(r,e,t)})),e=t.D,n=t.sa,e&&n&&tn(r,e,n),tn(r,"VER",t.ma),hr(t,r),r}function Er(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ba&&!t.qa?new qn(new Dn({ib:!0})):new qn(t.qa),e.L=t.H,e}function Tr(){}function Ir(){if(z&&!(10<=Number(ot)))throw Error("Environmental error: no available transport.")}function Sr(t,e){At.call(this),this.g=new rr(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.P=t,(t=e&&e.httpHeadersOverwriteParam)&&!P(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!P(e)&&(this.g.D=e,t=this.h,null!==t&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Rr(this)}function kr(t){Ce.call(this);var e=t.__sm__;if(e){t:{for(const n in e){t=n;break t}t=void 0}(this.i=t)&&(t=this.i,e=null!==e&&t in e?e[t]:void 0),this.data=e}else this.data=t}function xr(){Ee.call(this),this.status=1}function Rr(t){this.g=t}r=qn.prototype,r.ea=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():be.g(),this.C=this.u?ve(this.u):ve(be),this.g.onreadystatechange=b(this.Fa,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(o){return void Gn(this,o)}t=n||"";const i=new Ve(this.headers);r&&Be(r,(function(t,e){i.set(e,t)})),r=x(i.T()),n=h.FormData&&t instanceof h.FormData,!(0<=S(Hn,e))||r||n||i.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),i.forEach((function(t,e){this.g.setRequestHeader(e,t)}),this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Xn(this),0<this.B&&((this.K=Wn(this.g))?(this.g.timeout=this.B,this.g.ontimeout=b(this.pa,this)):this.A=Gt(this.pa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(o){Gn(this,o)}},r.pa=function(){"undefined"!=typeof u&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Pt(this,"timeout"),this.abort(8))},r.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Pt(this,"complete"),Pt(this,"abort"),Jn(this))},r.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Jn(this,!0)),qn.Z.M.call(this)},r.Fa=function(){this.s||(this.F||this.v||this.l?Yn(this):this.cb())},r.cb=function(){Yn(this)},r.ba=function(){try{return 2<Qn(this)?this.g.status:-1}catch(t){return-1}},r.ga=function(){try{return this.g?this.g.responseText:""}catch(t){return""}},r.Qa=function(t){if(this.g){var e=this.g.responseText;return t&&0==e.indexOf(t)&&(e=e.substring(t.length)),$n(e)}},r.Da=function(){return this.m},r.La=function(){return"string"===typeof this.j?this.j:String(this.j)},r=rr.prototype,r.ma=8,r.G=1,r.hb=function(t){try{this.h.info("Origin Trials invoked: "+t)}catch(e){}},r.Ha=function(t){if(this.m)if(this.m=null,1==this.G){if(!t){this.V=Math.floor(1e5*Math.random()),t=this.V++;const i=new Ie(this,this.h,t,void 0);let o=this.s;if(this.P&&(o?(o=U(o),q(o,this.P)):o=this.P),null===this.o&&(i.H=o),this.ja)t:{for(var e=0,n=0;n<this.l.length;n++){var r=this.l[n];if(r="__data__"in r.g&&(r=r.g.__data__,"string"===typeof r)?r.length:void 0,void 0===r)break;if(e+=r,4096<e){e=n;break t}if(4096===e||n===this.l.length-1){e=n+1;break t}}e=1e3}else e=1e3;e=dr(this,i,e),n=Ye(this.F),tn(n,"RID",t),tn(n,"CVER",22),this.D&&tn(n,"X-HTTP-Session-Id",this.D),hr(this,n),this.o&&o&&er(n,this.o,o),Sn(this.i,i),this.Ra&&tn(n,"TYPE","init"),this.ja?(tn(n,"$req",e),tn(n,"SID","null"),i.$=!0,Ae(i,n,null)):Ae(i,n,e),this.G=2}}else 3==this.G&&(t?ur(this,t):0==this.l.length||En(this.i)||ur(this))},r.Ga=function(){if(this.u=null,mr(this),this.$&&!(this.L||null==this.g||0>=this.O)){var t=2*this.O;this.h.info("BP detection timer enabled: "+t),this.B=pe(b(this.bb,this),t)}},r.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,de(10),or(this),mr(this))},r.ab=function(){null!=this.v&&(this.v=null,or(this),pr(this),de(19))},r.jb=function(t){t?(this.h.info("Successfully pinged google.com"),de(2)):(this.h.info("Failed to ping google.com"),de(1))},r=Tr.prototype,r.xa=function(){},r.wa=function(){},r.va=function(){},r.ua=function(){},r.Oa=function(){},Ir.prototype.g=function(t,e){return new Sr(t,e)},C(Sr,At),Sr.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;t.Wa&&(t.h.info("Origin Trials enabled."),$t(b(t.hb,t,e))),de(0),t.W=e,t.aa=n||{},t.N=t.X,t.F=Cr(t,null,t.W),cr(t)},Sr.prototype.close=function(){ir(this.g)},Sr.prototype.u=function(t){if("string"===typeof t){var e={};e.__data__=t,ar(this.g,e)}else this.v?(e={},e.__data__=Ot(t),ar(this.g,e)):ar(this.g,t)},Sr.prototype.M=function(){this.g.j=null,delete this.j,ir(this.g),delete this.g,Sr.Z.M.call(this)},C(kr,Ce),C(xr,Ee),C(Rr,Tr),Rr.prototype.xa=function(){Pt(this.g,"a")},Rr.prototype.wa=function(t){Pt(this.g,new kr(t))},Rr.prototype.va=function(t){Pt(this.g,new xr(t))},Rr.prototype.ua=function(){Pt(this.g,"b")},Ir.prototype.createWebChannel=Ir.prototype.g,Sr.prototype.send=Sr.prototype.u,Sr.prototype.open=Sr.prototype.m,Sr.prototype.close=Sr.prototype.close,ge.NO_ERROR=0,ge.TIMEOUT=8,ge.HTTP_ERROR=6,me.COMPLETE="complete",ye.EventType=we,we.OPEN="a",we.CLOSE="b",we.ERROR="c",we.MESSAGE="d",At.prototype.listen=At.prototype.N,qn.prototype.listenOnce=qn.prototype.O,qn.prototype.getLastError=qn.prototype.La,qn.prototype.getLastErrorCode=qn.prototype.Da,qn.prototype.getStatus=qn.prototype.ba,qn.prototype.getResponseJson=qn.prototype.Qa,qn.prototype.getResponseText=qn.prototype.ga,qn.prototype.send=qn.prototype.ea;l.createWebChannelTransport=function(){return new Ir},l.getStatEventTarget=function(){return ce()},l.ErrorCode=ge,l.EventType=me,l.Event=se,l.Stat={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},l.FetchXmlHttpFactory=Dn,l.WebChannel=ye,l.XhrIo=qn;const Ar="@firebase/firestore";
/**
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
 */class Pr{constructor(t){this.uid=t}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}Pr.UNAUTHENTICATED=new Pr(null),Pr.GOOGLE_CREDENTIALS=new Pr("google-credentials-uid"),Pr.FIRST_PARTY=new Pr("first-party-uid"),Pr.MOCK_USER=new Pr("mock-user");
/**
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
 */
let Nr="9.8.4";
/**
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
 */const Or=new s.Yd("@firebase/firestore");function Dr(t,...e){if(Or.logLevel<=s["in"].DEBUG){const n=e.map(Mr);Or.debug(`Firestore (${Nr}): ${t}`,...n)}}function Lr(t,...e){if(Or.logLevel<=s["in"].ERROR){const n=e.map(Mr);Or.error(`Firestore (${Nr}): ${t}`,...n)}}function Mr(t){if("string"==typeof t)return t;try{return e=t,JSON.stringify(e)}catch(e){return t}
/**
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
 */var e}
/**
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
 */function Fr(t="Unexpected state"){const e=`FIRESTORE (${Nr}) INTERNAL ASSERTION FAILED: `+t;throw Lr(e),new Error(e)}function jr(t,e){t||Fr()}
/**
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
 */
const Ur={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class $r extends a.ZR{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
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
 */class qr{constructor(){this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}}
/**
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
 */class Br{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class Vr{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable((()=>e(Pr.UNAUTHENTICATED)))}shutdown(){}}class Hr{constructor(t){this.t=t,this.currentUser=Pr.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){let n=this.i;const r=t=>this.i!==n?(n=this.i,e(t)):Promise.resolve();let i=new qr;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new qr,t.enqueueRetryable((()=>r(this.currentUser)))};const o=()=>{const e=i;t.enqueueRetryable((async()=>{await e.promise,await r(this.currentUser)}))},s=t=>{Dr("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=t,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit((t=>s(t))),setTimeout((()=>{if(!this.auth){const t=this.t.getImmediate({optional:!0});t?s(t):(Dr("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new qr)}}),0),o()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then((e=>this.i!==t?(Dr("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):e?(jr("string"==typeof e.accessToken),new Br(e.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return jr(null===t||"string"==typeof t),new Pr(t)}}class Wr{constructor(t,e,n){this.type="FirstParty",this.user=Pr.FIRST_PARTY,this.headers=new Map,this.headers.set("X-Goog-AuthUser",e);const r=t.auth.getAuthHeaderValueForFirstParty([]);r&&this.headers.set("Authorization",r),n&&this.headers.set("X-Goog-Iam-Authorization-Token",n)}}class zr{constructor(t,e,n){this.h=t,this.l=e,this.m=n}getToken(){return Promise.resolve(new Wr(this.h,this.l,this.m))}start(t,e){t.enqueueRetryable((()=>e(Pr.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Gr{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Kr{constructor(t){this.g=t,this.forceRefresh=!1,this.appCheck=null,this.p=null}start(t,e){const n=t=>{null!=t.error&&Dr("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${t.error.message}`);const n=t.token!==this.p;return this.p=t.token,Dr("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?e(t.token):Promise.resolve()};this.o=e=>{t.enqueueRetryable((()=>n(e)))};const r=t=>{Dr("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=t,this.appCheck.addTokenListener(this.o)};this.g.onInit((t=>r(t))),setTimeout((()=>{if(!this.appCheck){const t=this.g.getImmediate({optional:!0});t?r(t):Dr("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then((t=>t?(jr("string"==typeof t.token),this.p=t.token,new Gr(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}
/**
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
 */
function Yr(t){const e="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&"function"==typeof e.getRandomValues)e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}
/**
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
 */class Jr{static I(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let n="";for(;n.length<20;){const r=Yr(40);for(let i=0;i<r.length;++i)n.length<20&&r[i]<e&&(n+=t.charAt(r[i]%t.length))}return n}}function Xr(t,e){return t<e?-1:t>e?1:0}
/**
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
 */
class Qr{constructor(t,e,n){void 0===e?e=0:e>t.length&&Fr(),void 0===n?n=t.length-e:n>t.length-e&&Fr(),this.segments=t,this.offset=e,this.len=n}get length(){return this.len}isEqual(t){return 0===Qr.comparator(this,t)}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof Qr?t.forEach((t=>{e.push(t)})):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=void 0===t?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return 0===this.length}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const n=t.get(r),i=e.get(r);if(n<i)return-1;if(n>i)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class Zr extends Qr{construct(t,e,n){return new Zr(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const e=[];for(const n of t){if(n.indexOf("//")>=0)throw new $r(Ur.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter((t=>t.length>0)))}return new Zr(e)}static emptyPath(){return new Zr([])}}
/**
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
 */
class ti{constructor(t){this.path=t}static fromPath(t){return new ti(Zr.fromString(t))}static fromName(t){return new ti(Zr.fromString(t).popFirst(5))}static empty(){return new ti(Zr.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return null!==t&&0===Zr.comparator(this.path,t.path)}toString(){return this.path.toString()}static comparator(t,e){return Zr.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new ti(new Zr(t.slice()))}}
/**
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
 */class ei{constructor(t,e,n,r){this.indexId=t,this.collectionGroup=e,this.fields=n,this.indexState=r}}ei.UNKNOWN_ID=-1;function ni(t){return"IndexedDbTransactionError"===t.name}
/**
 * @license
 * Copyright 2018 Google LLC
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
 */
class ri{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=t=>this.it(t),this.rt=t=>e.writeSequenceNumber(t))}it(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.rt&&this.rt(t),t}}
/**
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
 */
/**
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
 */
ri.ot=-1;class ii{constructor(t,e){this.comparator=t,this.root=e||si.EMPTY}insert(t,e){return new ii(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,si.BLACK,null,null))}remove(t){return new ii(this.comparator,this.root.remove(t,this.comparator).copy(null,null,si.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const n=this.comparator(t,e.key);if(0===n)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}indexOf(t){let e=0,n=this.root;for(;!n.isEmpty();){const r=this.comparator(t,n.key);if(0===r)return e+n.left.size;r<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal(((e,n)=>(t(e,n),!1)))}toString(){const t=[];return this.inorderTraversal(((e,n)=>(t.push(`${e}:${n}`),!1))),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new oi(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new oi(this.root,t,this.comparator,!1)}getReverseIterator(){return new oi(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new oi(this.root,t,this.comparator,!0)}}class oi{constructor(t,e,n,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!t.isEmpty();)if(i=e?n(t.key,e):1,e&&r&&(i*=-1),i<0)t=this.isReverse?t.left:t.right;else{if(0===i){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class si{constructor(t,e,n,r,i){this.key=t,this.value=e,this.color=null!=n?n:si.RED,this.left=null!=r?r:si.EMPTY,this.right=null!=i?i:si.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,n,r,i){return new si(null!=t?t:this.key,null!=e?e:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=i?i:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let r=this;const i=n(t,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(t,e,n),null):0===i?r.copy(null,e,null,null,null):r.copy(null,null,null,null,r.right.insert(t,e,n)),r.fixUp()}removeMin(){if(this.left.isEmpty())return si.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let n,r=this;if(e(t,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(t,e),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),0===e(t,r.key)){if(r.right.isEmpty())return si.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(t,e))}return r.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,si.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,si.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Fr();if(this.right.isRed())throw Fr();const t=this.left.check();if(t!==this.right.check())throw Fr();return t+(this.isRed()?0:1)}}si.EMPTY=null,si.RED=!0,si.BLACK=!1,si.EMPTY=new class{constructor(){this.size=0}get key(){throw Fr()}get value(){throw Fr()}get color(){throw Fr()}get left(){throw Fr()}get right(){throw Fr()}copy(t,e,n,r,i){return this}insert(t,e,n){return new si(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
/**
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
 */
class ai{constructor(t){this.comparator=t,this.data=new ii(this.comparator)}has(t){return null!==this.data.get(t)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal(((e,n)=>(t(e),!1)))}forEachInRange(t,e){const n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){const r=n.getNext();if(this.comparator(r.key,t[1])>=0)return;e(r.key)}}forEachWhile(t,e){let n;for(n=void 0!==e?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new ci(this.data.getIterator())}getIteratorFrom(t){return new ci(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach((t=>{e=e.add(t)})),e}isEqual(t){if(!(t instanceof ai))return!1;if(this.size!==t.size)return!1;const e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){const t=e.getNext().key,r=n.getNext().key;if(0!==this.comparator(t,r))return!1}return!0}toArray(){const t=[];return this.forEach((e=>{t.push(e)})),t}toString(){const t=[];return this.forEach((e=>t.push(e))),"SortedSet("+t.toString()+")"}copy(t){const e=new ai(this.comparator);return e.data=t,e}}class ci{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
/**
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
 */
class li{constructor(t){this.binaryString=t}static fromBase64String(t){const e=atob(t);return new li(e)}static fromUint8Array(t){const e=function(t){let e="";for(let n=0;n<t.length;++n)e+=String.fromCharCode(t[n]);return e}(t);return new li(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return t=this.binaryString,btoa(t);var t}toUint8Array(){return function(t){const e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}
/**
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
 */(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return Xr(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}li.EMPTY_BYTE_STRING=new li("");function ui(t){return"number"==typeof t?t:"string"==typeof t?Number(t):0}function hi(t){return"string"==typeof t?li.fromBase64String(t):li.fromUint8Array(t)}
/**
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
 */
/**
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
 */
class di{constructor(t,e,n,r,i,o,s,a){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=r,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=s,this.useFetchStreams=a}}class fi{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new fi("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(t){return t instanceof fi&&t.projectId===this.projectId&&t.database===this.database}}
/**
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
 */function pi(t){return 0===t&&1/t==-1/0}function gi(t){return"__max__"===(((t.mapValue||{}).fields||{}).__type__||{}).stringValue}
/**
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
 */
var mi,_i;(_i=mi||(mi={}))[_i.OK=0]="OK",_i[_i.CANCELLED=1]="CANCELLED",_i[_i.UNKNOWN=2]="UNKNOWN",_i[_i.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",_i[_i.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",_i[_i.NOT_FOUND=5]="NOT_FOUND",_i[_i.ALREADY_EXISTS=6]="ALREADY_EXISTS",_i[_i.PERMISSION_DENIED=7]="PERMISSION_DENIED",_i[_i.UNAUTHENTICATED=16]="UNAUTHENTICATED",_i[_i.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",_i[_i.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",_i[_i.ABORTED=10]="ABORTED",_i[_i.OUT_OF_RANGE=11]="OUT_OF_RANGE",_i[_i.UNIMPLEMENTED=12]="UNIMPLEMENTED",_i[_i.INTERNAL=13]="INTERNAL",_i[_i.UNAVAILABLE=14]="UNAVAILABLE",_i[_i.DATA_LOSS=15]="DATA_LOSS";
/**
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
 */
new ii(ti.comparator);new ii(ti.comparator);new ii(ti.comparator),new ai(ti.comparator);new ai(Xr);
/**
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
 */
(()=>{const t={asc:"ASCENDING",desc:"DESCENDING"}})(),(()=>{const t={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}})();const vi=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],yi=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],bi=yi;
/**
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
 */
/**
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
 */class wi{constructor(){}re(t,e){this.oe(t,e),e.ue()}oe(t,e){if("nullValue"in t)this.ce(e,5);else if("booleanValue"in t)this.ce(e,10),e.ae(t.booleanValue?1:0);else if("integerValue"in t)this.ce(e,15),e.ae(ui(t.integerValue));else if("doubleValue"in t){const n=ui(t.doubleValue);isNaN(n)?this.ce(e,13):(this.ce(e,15),pi(n)?e.ae(0):e.ae(n))}else if("timestampValue"in t){const n=t.timestampValue;this.ce(e,20),"string"==typeof n?e.he(n):(e.he(`${n.seconds||""}`),e.ae(n.nanos||0))}else if("stringValue"in t)this.le(t.stringValue,e),this.fe(e);else if("bytesValue"in t)this.ce(e,30),e.de(hi(t.bytesValue)),this.fe(e);else if("referenceValue"in t)this._e(t.referenceValue,e);else if("geoPointValue"in t){const n=t.geoPointValue;this.ce(e,45),e.ae(n.latitude||0),e.ae(n.longitude||0)}else"mapValue"in t?gi(t)?this.ce(e,Number.MAX_SAFE_INTEGER):(this.we(t.mapValue,e),this.fe(e)):"arrayValue"in t?(this.me(t.arrayValue,e),this.fe(e)):Fr()}le(t,e){this.ce(e,25),this.ge(t,e)}ge(t,e){e.he(t)}we(t,e){const n=t.fields||{};this.ce(e,55);for(const r of Object.keys(n))this.le(r,e),this.oe(n[r],e)}me(t,e){const n=t.values||[];this.ce(e,50);for(const r of n)this.oe(r,e)}_e(t,e){this.ce(e,37),ti.fromName(t).path.forEach((t=>{this.ce(e,60),this.ge(t,e)}))}ce(t,e){t.ae(e)}fe(t){t.ae(2)}}wi.ye=new wi;
/**
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
 */
new Uint8Array(0);class Ci{constructor(t,e,n){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=n}static withCacheSize(t){return new Ci(t,Ci.DEFAULT_COLLECTION_PERCENTILE,Ci.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}
/**
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
 */
/**
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
 */Ci.DEFAULT_COLLECTION_PERCENTILE=10,Ci.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Ci.DEFAULT=new Ci(41943040,Ci.DEFAULT_COLLECTION_PERCENTILE,Ci.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Ci.DISABLED=new Ci(-1,0,0);function Ei(){return"undefined"!=typeof document?document:null}
/**
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
 */class Ti{constructor(t,e,n=1e3,r=1.5,i=6e4){this.js=t,this.timerId=e,this.lo=n,this.fo=r,this._o=i,this.wo=0,this.mo=null,this.yo=Date.now(),this.reset()}reset(){this.wo=0}po(){this.wo=this._o}Io(t){this.cancel();const e=Math.floor(this.wo+this.To()),n=Math.max(0,Date.now()-this.yo),r=Math.max(0,e-n);r>0&&Dr("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.wo} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.mo=this.js.enqueueAfterDelay(this.timerId,r,(()=>(this.yo=Date.now(),t()))),this.wo*=this.fo,this.wo<this.lo&&(this.wo=this.lo),this.wo>this._o&&(this.wo=this._o)}Eo(){null!==this.mo&&(this.mo.skipDelay(),this.mo=null)}cancel(){null!==this.mo&&(this.mo.cancel(),this.mo=null)}To(){return(Math.random()-.5)*this.wo}}
/**
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
 */
/**
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
 */
class Ii{constructor(t,e,n,r,i){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=r,this.removalCallback=i,this.deferred=new qr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((t=>{}))}static createAndSchedule(t,e,n,r,i){const o=Date.now()+n,s=new Ii(t,e,o,r,i);return s.start(n),s}start(t){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new $r(Ur.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((t=>this.deferred.resolve(t)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Si(t,e){if(Lr("AsyncQueue",`${e}: ${t}`),ni(t))return new $r(Ur.UNAVAILABLE,`${e}: ${t}`);throw t}
/**
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
 */
/**
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
 */
class ki{constructor(t,e,n,r){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=n,this.databaseInfo=r,this.user=Pr.UNAUTHENTICATED,this.clientId=Jr.I(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,(async t=>{Dr("FirestoreClient","Received user=",t.uid),await this.authCredentialListener(t),this.user=t})),this.appCheckCredentials.start(n,(t=>(Dr("FirestoreClient","Received new app check token=",t),this.appCheckCredentialListener(t,this.user))))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new $r(Ur.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new qr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const n=Si(e,"Failed to shutdown persistence");t.reject(n)}})),t.promise}}const xi=new Map;
/**
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
 */function Ri(t,e,n,r){if(!0===e&&!0===r)throw new $r(Ur.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}
/**
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
 */
class Ai{constructor(t){var e;if(void 0===t.host){if(void 0!==t.ssl)throw new $r(Ur.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=null===(e=t.ssl)||void 0===e||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,void 0===t.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==t.cacheSizeBytes&&t.cacheSizeBytes<1048576)throw new $r(Ur.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.useFetchStreams=!!t.useFetchStreams,Ri("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling)}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}
/**
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
 */class Pi{constructor(t,e,n){this._authCredentials=e,this._appCheckCredentials=n,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Ai({}),this._settingsFrozen=!1,t instanceof fi?this._databaseId=t:(this._app=t,this._databaseId=function(t){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new $r(Ur.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new fi(t.options.projectId)}(t))}get app(){if(!this._app)throw new $r(Ur.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(t){if(this._settingsFrozen)throw new $r(Ur.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Ai(t),void 0!==t.credentials&&(this._authCredentials=function(t){if(!t)return new Vr;switch(t.type){case"gapi":const e=t.client;return jr(!("object"!=typeof e||null===e||!e.auth||!e.auth.getAuthHeaderValueForFirstParty)),new zr(e,t.sessionIndex||"0",t.iamToken||null);case"provider":return t.client;default:throw new $r(Ur.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const e=xi.get(t);e&&(Dr("ComponentProvider","Removing Datastore"),xi.delete(t),e.terminate())}(this),Promise.resolve()}}
/**
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
 */
class Ni{constructor(){this.Oc=Promise.resolve(),this.Mc=[],this.Fc=!1,this.$c=[],this.Bc=null,this.Lc=!1,this.Uc=!1,this.qc=[],this.So=new Ti(this,"async_queue_retry"),this.Kc=()=>{const t=Ei();t&&Dr("AsyncQueue","Visibility state changed to "+t.visibilityState),this.So.Eo()};const t=Ei();t&&"function"==typeof t.addEventListener&&t.addEventListener("visibilitychange",this.Kc)}get isShuttingDown(){return this.Fc}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Gc(),this.Qc(t)}enterRestrictedMode(t){if(!this.Fc){this.Fc=!0,this.Uc=t||!1;const e=Ei();e&&"function"==typeof e.removeEventListener&&e.removeEventListener("visibilitychange",this.Kc)}}enqueue(t){if(this.Gc(),this.Fc)return new Promise((()=>{}));const e=new qr;return this.Qc((()=>this.Fc&&this.Uc?Promise.resolve():(t().then(e.resolve,e.reject),e.promise))).then((()=>e.promise))}enqueueRetryable(t){this.enqueueAndForget((()=>(this.Mc.push(t),this.jc())))}async jc(){if(0!==this.Mc.length){try{await this.Mc[0](),this.Mc.shift(),this.So.reset()}catch(C){if(!ni(C))throw C;Dr("AsyncQueue","Operation failed with retryable error: "+C)}this.Mc.length>0&&this.So.Io((()=>this.jc()))}}Qc(t){const e=this.Oc.then((()=>(this.Lc=!0,t().catch((t=>{this.Bc=t,this.Lc=!1;const e=function(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+"\n"+t.stack),e}
/**
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
 */(t);throw Lr("INTERNAL UNHANDLED ERROR: ",e),t})).then((t=>(this.Lc=!1,t))))));return this.Oc=e,e}enqueueAfterDelay(t,e,n){this.Gc(),this.qc.indexOf(t)>-1&&(e=0);const r=Ii.createAndSchedule(this,t,e,n,(t=>this.Wc(t)));return this.$c.push(r),r}Gc(){this.Bc&&Fr()}verifyOperationInProgress(){}async zc(){let t;do{t=this.Oc,await t}while(t!==this.Oc)}Hc(t){for(const e of this.$c)if(e.timerId===t)return!0;return!1}Jc(t){return this.zc().then((()=>{this.$c.sort(((t,e)=>t.targetTimeMs-e.targetTimeMs));for(const e of this.$c)if(e.skipDelay(),"all"!==t&&e.timerId===t)break;return this.zc()}))}Yc(t){this.qc.push(t)}Wc(t){const e=this.$c.indexOf(t);this.$c.splice(e,1)}}class Oi extends Pi{constructor(t,e,n){super(t,e,n),this.type="firestore",this._queue=new Ni,this._persistenceKey="name"in t?t.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||Di(this),this._firestoreClient.terminate()}}function Di(t){var e;const n=t._freezeSettings(),r=function(t,e,n,r){return new di(t,e,n,r.host,r.ssl,r.experimentalForceLongPolling,r.experimentalAutoDetectLongPolling,r.useFetchStreams)}(t._databaseId,(null===(e=t._app)||void 0===e?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new ki(t._authCredentials,t._appCheckCredentials,t._queue,r)}!function(t,e=!0){!function(t){Nr=t}(i.Jn),(0,i.Xd)(new o.wA("firestore",((t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=new Oi(r,new Hr(t.getProvider("auth-internal")),new Kr(t.getProvider("app-check-internal")));return n=Object.assign({useFetchStreams:e},n),i._setSettings(n),i}),"PUBLIC")),(0,i.KN)(Ar,"3.4.11",t),(0,i.KN)(Ar,"3.4.11","esm2017")}()},5431:function(t,e,n){"use strict";n.d(e,{z:function(){return o}});n(1703);var r,i=function(){return Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/))};function o(t,e){void 0===e&&(e={});var n=e.registrationOptions;void 0===n&&(n={}),delete e.registrationOptions;var o=function(t){var n=[],r=arguments.length-1;while(r-- >0)n[r]=arguments[r+1];e&&e[t]&&e[t].apply(e,n)};"serviceWorker"in navigator&&r.then((function(){i()?(c(t,o,n),navigator.serviceWorker.ready.then((function(t){o("ready",t)})).catch((function(t){return s(o,t)}))):(a(t,o,n),navigator.serviceWorker.ready.then((function(t){o("ready",t)})).catch((function(t){return s(o,t)})))}))}function s(t,e){navigator.onLine||t("offline"),t("error",e)}function a(t,e,n){navigator.serviceWorker.register(t,n).then((function(t){e("registered",t),t.waiting?e("updated",t):t.onupdatefound=function(){e("updatefound",t);var n=t.installing;n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?e("updated",t):e("cached",t))}}})).catch((function(t){return s(e,t)}))}function c(t,e,n){fetch(t).then((function(r){404===r.status?(e("error",new Error("Service worker not found at "+t)),l()):-1===r.headers.get("content-type").indexOf("javascript")?(e("error",new Error("Expected "+t+" to have javascript content-type, but received "+r.headers.get("content-type"))),l()):a(t,e,n)})).catch((function(t){return s(e,t)}))}function l(){"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){return s(emit,t)}))}"undefined"!==typeof window&&(r="undefined"!==typeof Promise?new Promise((function(t){return window.addEventListener("load",t)})):{then:function(t){return window.addEventListener("load",t)}})},89:function(t,e){"use strict";e.Z=(t,e)=>{const n=t.__vccOpts||t;for(const[r,i]of e)n[r]=i;return n}},6866:function(t,e,n){"use strict";n.d(e,{PO:function(){return q},p7:function(){return Pe}});n(6699),n(1703);var r=n(3396),i=n(4870),o=n(8005);
/*!
  * vue-router v4.1.0
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */
const s="undefined"!==typeof window;function a(t){return t.__esModule||"Module"===t[Symbol.toStringTag]}const c=Object.assign;function l(t,e){const n={};for(const r in e){const i=e[r];n[r]=h(i)?i.map(t):t(i)}return n}const u=()=>{},h=Array.isArray;function d(t){const e=Array.from(arguments).slice(1);console.warn.apply(console,["[Vue Router warn]: "+t].concat(e))}const f=/\/$/,p=t=>t.replace(f,"");function g(t,e,n="/"){let r,i={},o="",s="";const a=e.indexOf("#");let c=e.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(r=e.slice(0,c),o=e.slice(c+1,a>-1?a:e.length),i=t(o)),a>-1&&(r=r||e.slice(0,a),s=e.slice(a,e.length)),r=E(null!=r?r:e,n),{fullPath:r+(o&&"?")+o+s,path:r,query:i,hash:s}}function m(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function _(t,e){return e&&t.toLowerCase().startsWith(e.toLowerCase())?t.slice(e.length)||"/":t}function v(t,e,n){const r=e.matched.length-1,i=n.matched.length-1;return r>-1&&r===i&&y(e.matched[r],n.matched[i])&&b(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function y(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function b(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!w(t[n],e[n]))return!1;return!0}function w(t,e){return h(t)?C(t,e):h(e)?C(e,t):t===e}function C(t,e){return h(e)?t.length===e.length&&t.every(((t,n)=>t===e[n])):1===t.length&&t[0]===e}function E(t,e){if(t.startsWith("/"))return t;if(!e.startsWith("/"))return d(`Cannot resolve a relative location without an absolute path. Trying to resolve "${t}" from "${e}". It should look like "/${e}".`),t;if(!t)return e;const n=e.split("/"),r=t.split("/");let i,o,s=n.length-1;for(i=0;i<r.length;i++)if(o=r[i],"."!==o){if(".."!==o)break;s>1&&s--}return n.slice(0,s).join("/")+"/"+r.slice(i-(i===r.length?1:0)).join("/")}var T,I;(function(t){t["pop"]="pop",t["push"]="push"})(T||(T={})),function(t){t["back"]="back",t["forward"]="forward",t["unknown"]=""}(I||(I={}));function S(t){if(!t)if(s){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return"/"!==t[0]&&"#"!==t[0]&&(t="/"+t),p(t)}const k=/^[^#]+#/;function x(t,e){return t.replace(k,"#")+e}function R(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const A=()=>({left:window.pageXOffset,top:window.pageYOffset});function P(t){let e;if("el"in t){const r=t.el,i="string"===typeof r&&r.startsWith("#");if("string"===typeof t.el&&(!i||!document.getElementById(t.el.slice(1))))try{const e=document.querySelector(t.el);if(i&&e)return void d(`The selector "${t.el}" should be passed as "el: document.querySelector('${t.el}')" because it starts with "#".`)}catch(n){return void d(`The selector "${t.el}" is invalid. If you are using an id selector, make sure to escape it. You can find more information about escaping characters in selectors at https://mathiasbynens.be/notes/css-escapes or use CSS.escape (https://developer.mozilla.org/en-US/docs/Web/API/CSS/escape).`)}const o="string"===typeof r?i?document.getElementById(r.slice(1)):document.querySelector(r):r;if(!o)return void d(`Couldn't find element using selector "${t.el}" returned by scrollBehavior.`);e=R(o,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(null!=e.left?e.left:window.pageXOffset,null!=e.top?e.top:window.pageYOffset)}function N(t,e){const n=history.state?history.state.position-e:-1;return n+t}const O=new Map;function D(t,e){O.set(t,e)}function L(t){const e=O.get(t);return O.delete(t),e}let M=()=>location.protocol+"//"+location.host;function F(t,e){const{pathname:n,search:r,hash:i}=e,o=t.indexOf("#");if(o>-1){let e=i.includes(t.slice(o))?t.slice(o).length:1,n=i.slice(e);return"/"!==n[0]&&(n="/"+n),_(n,"")}const s=_(n,t);return s+r+i}function j(t,e,n,r){let i=[],o=[],s=null;const a=({state:o})=>{const a=F(t,location),c=n.value,l=e.value;let u=0;if(o){if(n.value=a,e.value=o,s&&s===c)return void(s=null);u=l?o.position-l.position:0}else r(a);i.forEach((t=>{t(n.value,c,{delta:u,type:T.pop,direction:u?u>0?I.forward:I.back:I.unknown})}))};function l(){s=n.value}function u(t){i.push(t);const e=()=>{const e=i.indexOf(t);e>-1&&i.splice(e,1)};return o.push(e),e}function h(){const{history:t}=window;t.state&&t.replaceState(c({},t.state,{scroll:A()}),"")}function d(){for(const t of o)t();o=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",h)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",h),{pauseListeners:l,listen:u,destroy:d}}function U(t,e,n,r=!1,i=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:i?A():null}}function $(t){const{history:e,location:n}=window,r={value:F(t,n)},i={value:e.state};function o(r,o,s){const a=t.indexOf("#"),c=a>-1?(n.host&&document.querySelector("base")?t:t.slice(a))+r:M()+t+r;try{e[s?"replaceState":"pushState"](o,"",c),i.value=o}catch(l){d("Error with push/replace State",l),n[s?"replace":"assign"](c)}}function s(t,n){const s=c({},e.state,U(i.value.back,t,i.value.forward,!0),n,{position:i.value.position});o(t,s,!0),r.value=t}function a(t,n){const s=c({},i.value,e.state,{forward:t,scroll:A()});e.state||d("history.state seems to have been manually replaced without preserving the necessary values. Make sure to preserve existing history state if you are manually calling history.replaceState:\n\nhistory.replaceState(history.state, '', url)\n\nYou can find more information at https://next.router.vuejs.org/guide/migration/#usage-of-history-state."),o(s.current,s,!0);const a=c({},U(r.value,t,null),{position:s.position+1},n);o(t,a,!1),r.value=t}return i.value||o(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0),{location:r,state:i,push:a,replace:s}}function q(t){t=S(t);const e=$(t),n=j(t,e.state,e.location,e.replace);function r(t,e=!0){e||n.pauseListeners(),history.go(t)}const i=c({location:"",base:t,go:r,createHref:x.bind(null,t)},e,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>e.state.value}),i}function B(t){return"string"===typeof t||t&&"object"===typeof t}function V(t){return"string"===typeof t||"symbol"===typeof t}const H={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},W=Symbol("navigation failure");var z;(function(t){t[t["aborted"]=4]="aborted",t[t["cancelled"]=8]="cancelled",t[t["duplicated"]=16]="duplicated"})(z||(z={}));const G={[1]({location:t,currentLocation:e}){return`No match for\n ${JSON.stringify(t)}${e?"\nwhile being at\n"+JSON.stringify(e):""}`},[2]({from:t,to:e}){return`Redirected from "${t.fullPath}" to "${X(e)}" via a navigation guard.`},[4]({from:t,to:e}){return`Navigation aborted from "${t.fullPath}" to "${e.fullPath}" via a navigation guard.`},[8]({from:t,to:e}){return`Navigation cancelled from "${t.fullPath}" to "${e.fullPath}" with a new navigation.`},[16]({from:t,to:e}){return`Avoided redundant navigation to current location: "${t.fullPath}".`}};function K(t,e){return c(new Error(G[t](e)),{type:t,[W]:!0},e)}function Y(t,e){return t instanceof Error&&W in t&&(null==e||!!(t.type&e))}const J=["params","query","hash"];function X(t){if("string"===typeof t)return t;if("path"in t)return t.path;const e={};for(const n of J)n in t&&(e[n]=t[n]);return JSON.stringify(e,null,2)}const Q="[^/]+?",Z={sensitive:!1,strict:!1,start:!0,end:!0},tt=/[.+*?^${}()[\]/\\]/g;function et(t,e){const n=c({},Z,e),r=[];let i=n.start?"^":"";const o=[];for(const c of t){const t=c.length?[]:[90];n.strict&&!c.length&&(i+="/");for(let e=0;e<c.length;e++){const r=c[e];let s=40+(n.sensitive?.25:0);if(0===r.type)e||(i+="/"),i+=r.value.replace(tt,"\\$&"),s+=40;else if(1===r.type){const{value:t,repeatable:n,optional:a,regexp:l}=r;o.push({name:t,repeatable:n,optional:a});const h=l||Q;if(h!==Q){s+=10;try{new RegExp(`(${h})`)}catch(u){throw new Error(`Invalid custom RegExp for param "${t}" (${h}): `+u.message)}}let d=n?`((?:${h})(?:/(?:${h}))*)`:`(${h})`;e||(d=a&&c.length<2?`(?:/${d})`:"/"+d),a&&(d+="?"),i+=d,s+=20,a&&(s+=-8),n&&(s+=-20),".*"===h&&(s+=-50)}t.push(s)}r.push(t)}if(n.strict&&n.end){const t=r.length-1;r[t][r[t].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&(i+="(?:/|$)");const s=new RegExp(i,n.sensitive?"":"i");function a(t){const e=t.match(s),n={};if(!e)return null;for(let r=1;r<e.length;r++){const t=e[r]||"",i=o[r-1];n[i.name]=t&&i.repeatable?t.split("/"):t}return n}function l(e){let n="",r=!1;for(const i of t){r&&n.endsWith("/")||(n+="/"),r=!1;for(const o of i)if(0===o.type)n+=o.value;else if(1===o.type){const{value:s,repeatable:a,optional:c}=o,l=s in e?e[s]:"";if(h(l)&&!a)throw new Error(`Provided param "${s}" is an array but it is not repeatable (* or + modifiers)`);const u=h(l)?l.join("/"):l;if(!u){if(!c)throw new Error(`Missing required param "${s}"`);i.length<2&&t.length>1&&(n.endsWith("/")?n=n.slice(0,-1):r=!0)}n+=u}}return n}return{re:s,score:r,keys:o,parse:a,stringify:l}}function nt(t,e){let n=0;while(n<t.length&&n<e.length){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?1===t.length&&80===t[0]?-1:1:t.length>e.length?1===e.length&&80===e[0]?1:-1:0}function rt(t,e){let n=0;const r=t.score,i=e.score;while(n<r.length&&n<i.length){const t=nt(r[n],i[n]);if(t)return t;n++}if(1===Math.abs(i.length-r.length)){if(it(r))return 1;if(it(i))return-1}return i.length-r.length}function it(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const ot={type:0,value:""},st=/[a-zA-Z0-9_]/;function at(t){if(!t)return[[]];if("/"===t)return[[ot]];if(!t.startsWith("/"))throw new Error(`Route paths should start with a "/": "${t}" should be "/${t}".`);function e(t){throw new Error(`ERR (${n})/"${l}": ${t}`)}let n=0,r=n;const i=[];let o;function s(){o&&i.push(o),o=[]}let a,c=0,l="",u="";function h(){l&&(0===n?o.push({type:0,value:l}):1===n||2===n||3===n?(o.length>1&&("*"===a||"+"===a)&&e(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),o.push({type:1,value:l,regexp:u,repeatable:"*"===a||"+"===a,optional:"*"===a||"?"===a})):e("Invalid state to consume buffer"),l="")}function d(){l+=a}while(c<t.length)if(a=t[c++],"\\"!==a||2===n)switch(n){case 0:"/"===a?(l&&h(),s()):":"===a?(h(),n=1):d();break;case 4:d(),n=r;break;case 1:"("===a?n=2:st.test(a)?d():(h(),n=0,"*"!==a&&"?"!==a&&"+"!==a&&c--);break;case 2:")"===a?"\\"==u[u.length-1]?u=u.slice(0,-1)+a:n=3:u+=a;break;case 3:h(),n=0,"*"!==a&&"?"!==a&&"+"!==a&&c--,u="";break;default:e("Unknown state");break}else r=n,n=4;return 2===n&&e(`Unfinished custom RegExp for param "${l}"`),h(),s(),i}function ct(t,e,n){const r=et(at(t.path),n);{const e=new Set;for(const n of r.keys)e.has(n.name)&&d(`Found duplicated params with name "${n.name}" for path "${t.path}". Only the last one will be available on "$route.params".`),e.add(n.name)}const i=c(r,{record:t,parent:e,children:[],alias:[]});return e&&!i.record.aliasOf===!e.record.aliasOf&&e.children.push(i),i}function lt(t,e){const n=[],r=new Map;function i(t){return r.get(t)}function o(t,n,r){const i=!r,a=ht(t);vt(a,n),a.aliasOf=r&&r.record;const h=gt(e,t),d=[a];if("alias"in t){const e="string"===typeof t.alias?[t.alias]:t.alias;for(const t of e)d.push(c({},a,{components:r?r.record.components:a.components,path:t,aliasOf:r?r.record:a}))}let f,p;for(const e of d){const{path:c}=e;if(n&&"/"!==c[0]){const t=n.record.path,r="/"===t[t.length-1]?"":"/";e.path=n.record.path+(c&&r+c)}if("*"===e.path)throw new Error('Catch all routes ("*") must now be defined using a param with a custom regexp.\nSee more at https://next.router.vuejs.org/guide/migration/#removed-star-or-catch-all-routes.');if(f=ct(e,n,h),n&&"/"===c[0]&&yt(f,n),r?(r.alias.push(f),_t(r,f)):(p=p||f,p!==f&&p.alias.push(f),i&&t.name&&!ft(f)&&s(t.name)),"children"in a){const t=a.children;for(let e=0;e<t.length;e++)o(t[e],f,r&&r.children[e])}r=r||f,l(f)}return p?()=>{s(p)}:u}function s(t){if(V(t)){const e=r.get(t);e&&(r.delete(t),n.splice(n.indexOf(e),1),e.children.forEach(s),e.alias.forEach(s))}else{const e=n.indexOf(t);e>-1&&(n.splice(e,1),t.record.name&&r.delete(t.record.name),t.children.forEach(s),t.alias.forEach(s))}}function a(){return n}function l(t){let e=0;while(e<n.length&&rt(t,n[e])>=0&&(t.record.path!==n[e].record.path||!bt(t,n[e])))e++;n.splice(e,0,t),t.record.name&&!ft(t)&&r.set(t.record.name,t)}function h(t,e){let i,o,s,a={};if("name"in t&&t.name){if(i=r.get(t.name),!i)throw K(1,{location:t});s=i.record.name,a=c(ut(e.params,i.keys.filter((t=>!t.optional)).map((t=>t.name))),t.params),o=i.stringify(a)}else if("path"in t)o=t.path,o.startsWith("/")||d(`The Matcher cannot resolve relative paths but received "${o}". Unless you directly called \`matcher.resolve("${o}")\`, this is probably a bug in vue-router. Please open an issue at https://new-issue.vuejs.org/?repo=vuejs/router.`),i=n.find((t=>t.re.test(o))),i&&(a=i.parse(o),s=i.record.name);else{if(i=e.name?r.get(e.name):n.find((t=>t.re.test(e.path))),!i)throw K(1,{location:t,currentLocation:e});s=i.record.name,a=c({},e.params,t.params),o=i.stringify(a)}const l=[];let u=i;while(u)l.unshift(u.record),u=u.parent;return{name:s,path:o,params:a,matched:l,meta:pt(l)}}return e=gt({strict:!1,end:!0,sensitive:!1},e),t.forEach((t=>o(t))),{addRoute:o,resolve:h,removeRoute:s,getRoutes:a,getRecordMatcher:i}}function ut(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function ht(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:dt(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function dt(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]="boolean"===typeof n?n:n[r];return e}function ft(t){while(t){if(t.record.aliasOf)return!0;t=t.parent}return!1}function pt(t){return t.reduce(((t,e)=>c(t,e.meta)),{})}function gt(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function mt(t,e){return t.name===e.name&&t.optional===e.optional&&t.repeatable===e.repeatable}function _t(t,e){for(const n of t.keys)if(!n.optional&&!e.keys.find(mt.bind(null,n)))return d(`Alias "${e.record.path}" and the original record: "${t.record.path}" should have the exact same param named "${n.name}"`);for(const n of e.keys)if(!n.optional&&!t.keys.find(mt.bind(null,n)))return d(`Alias "${e.record.path}" and the original record: "${t.record.path}" should have the exact same param named "${n.name}"`)}function vt(t,e){e&&e.record.name&&!t.name&&!t.path&&d(`The route named "${String(e.record.name)}" has a child without a name and an empty path. Using that name won't render the empty path child so you probably want to move the name to the child instead. If this is intentional, add a name to the child route to remove the warning.`)}function yt(t,e){for(const n of e.keys)if(!t.keys.find(mt.bind(null,n)))return d(`Absolute path "${t.record.path}" should have the exact same param named "${n.name}" as its parent "${e.record.path}".`)}function bt(t,e){return e.children.some((e=>e===t||bt(t,e)))}const wt=/#/g,Ct=/&/g,Et=/\//g,Tt=/=/g,It=/\?/g,St=/\+/g,kt=/%5B/g,xt=/%5D/g,Rt=/%5E/g,At=/%60/g,Pt=/%7B/g,Nt=/%7C/g,Ot=/%7D/g,Dt=/%20/g;function Lt(t){return encodeURI(""+t).replace(Nt,"|").replace(kt,"[").replace(xt,"]")}function Mt(t){return Lt(t).replace(Pt,"{").replace(Ot,"}").replace(Rt,"^")}function Ft(t){return Lt(t).replace(St,"%2B").replace(Dt,"+").replace(wt,"%23").replace(Ct,"%26").replace(At,"`").replace(Pt,"{").replace(Ot,"}").replace(Rt,"^")}function jt(t){return Ft(t).replace(Tt,"%3D")}function Ut(t){return Lt(t).replace(wt,"%23").replace(It,"%3F")}function $t(t){return null==t?"":Ut(t).replace(Et,"%2F")}function qt(t){try{return decodeURIComponent(""+t)}catch(e){d(`Error decoding "${t}". Using original value`)}return""+t}function Bt(t){const e={};if(""===t||"?"===t)return e;const n="?"===t[0],r=(n?t.slice(1):t).split("&");for(let i=0;i<r.length;++i){const t=r[i].replace(St," "),n=t.indexOf("="),o=qt(n<0?t:t.slice(0,n)),s=n<0?null:qt(t.slice(n+1));if(o in e){let t=e[o];h(t)||(t=e[o]=[t]),t.push(s)}else e[o]=s}return e}function Vt(t){let e="";for(let n in t){const r=t[n];if(n=jt(n),null==r){void 0!==r&&(e+=(e.length?"&":"")+n);continue}const i=h(r)?r.map((t=>t&&Ft(t))):[r&&Ft(r)];i.forEach((t=>{void 0!==t&&(e+=(e.length?"&":"")+n,null!=t&&(e+="="+t))}))}return e}function Ht(t){const e={};for(const n in t){const r=t[n];void 0!==r&&(e[n]=h(r)?r.map((t=>null==t?null:""+t)):null==r?r:""+r)}return e}const Wt=Symbol("router view location matched"),zt=Symbol("router view depth"),Gt=Symbol("router"),Kt=Symbol("route location"),Yt=Symbol("router view location");function Jt(){let t=[];function e(e){return t.push(e),()=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function Xt(t,e,n,r,i){const o=r&&(r.enterCallbacks[i]=r.enterCallbacks[i]||[]);return()=>new Promise(((s,a)=>{const c=t=>{!1===t?a(K(4,{from:n,to:e})):t instanceof Error?a(t):B(t)?a(K(2,{from:e,to:t})):(o&&r.enterCallbacks[i]===o&&"function"===typeof t&&o.push(t),s())},l=t.call(r&&r.instances[i],e,n,Qt(c,e,n));let u=Promise.resolve(l);if(t.length<3&&(u=u.then(c)),t.length>2){const e=`The "next" callback was never called inside of ${t.name?'"'+t.name+'"':""}:\n${t.toString()}\n. If you are returning a value instead of calling "next", make sure to remove the "next" parameter from your function.`;if("object"===typeof l&&"then"in l)u=u.then((t=>c._called?t:(d(e),Promise.reject(new Error("Invalid navigation guard")))));else if(void 0!==l&&!c._called)return d(e),void a(new Error("Invalid navigation guard"))}u.catch((t=>a(t)))}))}function Qt(t,e,n){let r=0;return function(){1===r++&&d(`The "next" callback was called more than once in one navigation guard when going from "${n.fullPath}" to "${e.fullPath}". It should be called exactly one time in each navigation guard. This will fail in production.`),t._called=!0,1===r&&t.apply(null,arguments)}}function Zt(t,e,n,r){const i=[];for(const o of t){o.components||o.children.length||d(`Record with path "${o.path}" is either missing a "component(s)" or "children" property.`);for(const t in o.components){let s=o.components[t];if(!s||"object"!==typeof s&&"function"!==typeof s)throw d(`Component "${t}" in record with path "${o.path}" is not a valid component. Received "${String(s)}".`),new Error("Invalid route component");if("then"in s){d(`Component "${t}" in record with path "${o.path}" is a Promise instead of a function that returns a Promise. Did you write "import('./MyPage.vue')" instead of "() => import('./MyPage.vue')" ? This will break in production if not fixed.`);const e=s;s=()=>e}else s.__asyncLoader&&!s.__warnedDefineAsync&&(s.__warnedDefineAsync=!0,d(`Component "${t}" in record with path "${o.path}" is defined using "defineAsyncComponent()". Write "() => import('./MyPage.vue')" instead of "defineAsyncComponent(() => import('./MyPage.vue'))".`));if("beforeRouteEnter"===e||o.instances[t])if(te(s)){const a=s.__vccOpts||s,c=a[e];c&&i.push(Xt(c,n,r,o,t))}else{let c=s();"catch"in c||(d(`Component "${t}" in record with path "${o.path}" is a function that does not return a Promise. If you were passing a functional component, make sure to add a "displayName" to the component. This will break in production if not fixed.`),c=Promise.resolve(c)),i.push((()=>c.then((i=>{if(!i)return Promise.reject(new Error(`Couldn't resolve component "${t}" at "${o.path}"`));const s=a(i)?i.default:i;o.components[t]=s;const c=s.__vccOpts||s,l=c[e];return l&&Xt(l,n,r,o,t)()}))))}}}return i}function te(t){return"object"===typeof t||"displayName"in t||"props"in t||"__vccOpts"in t}function ee(t){const e=(0,r.f3)(Gt),n=(0,r.f3)(Kt),o=(0,r.Fl)((()=>e.resolve((0,i.SU)(t.to)))),a=(0,r.Fl)((()=>{const{matched:t}=o.value,{length:e}=t,r=t[e-1],i=n.matched;if(!r||!i.length)return-1;const s=i.findIndex(y.bind(null,r));if(s>-1)return s;const a=se(t[e-2]);return e>1&&se(r)===a&&i[i.length-1].path!==a?i.findIndex(y.bind(null,t[e-2])):s})),c=(0,r.Fl)((()=>a.value>-1&&oe(n.params,o.value.params))),l=(0,r.Fl)((()=>a.value>-1&&a.value===n.matched.length-1&&b(n.params,o.value.params)));function h(n={}){return ie(n)?e[(0,i.SU)(t.replace)?"replace":"push"]((0,i.SU)(t.to)).catch(u):Promise.resolve()}if(s){const t=(0,r.FN)();if(t){const e={route:o.value,isActive:c.value,isExactActive:l.value};t.__vrl_devtools=t.__vrl_devtools||[],t.__vrl_devtools.push(e),(0,r.m0)((()=>{e.route=o.value,e.isActive=c.value,e.isExactActive=l.value}),{flush:"post"})}}return{route:o,href:(0,r.Fl)((()=>o.value.href)),isActive:c,isExactActive:l,navigate:h}}const ne=(0,r.aZ)({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:ee,setup(t,{slots:e}){const n=(0,i.qj)(ee(t)),{options:o}=(0,r.f3)(Gt),s=(0,r.Fl)((()=>({[ae(t.activeClass,o.linkActiveClass,"router-link-active")]:n.isActive,[ae(t.exactActiveClass,o.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive})));return()=>{const i=e.default&&e.default(n);return t.custom?i:(0,r.h)("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),re=ne;function ie(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&(void 0===t.button||0===t.button)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function oe(t,e){for(const n in e){const r=e[n],i=t[n];if("string"===typeof r){if(r!==i)return!1}else if(!h(i)||i.length!==r.length||r.some(((t,e)=>t!==i[e])))return!1}return!0}function se(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const ae=(t,e,n)=>null!=t?t:null!=e?e:n,ce=(0,r.aZ)({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){he();const o=(0,r.f3)(Yt),a=(0,r.Fl)((()=>t.route||o.value)),l=(0,r.f3)(zt,0),u=(0,r.Fl)((()=>{let t=(0,i.SU)(l);const{matched:e}=a.value;let n;while((n=e[t])&&!n.components)t++;return t})),d=(0,r.Fl)((()=>a.value.matched[u.value]));(0,r.JJ)(zt,(0,r.Fl)((()=>u.value+1))),(0,r.JJ)(Wt,d),(0,r.JJ)(Yt,a);const f=(0,i.iH)();return(0,r.YP)((()=>[f.value,d.value,t.name]),(([t,e,n],[r,i,o])=>{e&&(e.instances[n]=t,i&&i!==e&&t&&t===r&&(e.leaveGuards.size||(e.leaveGuards=i.leaveGuards),e.updateGuards.size||(e.updateGuards=i.updateGuards))),!t||!e||i&&y(e,i)&&r||(e.enterCallbacks[n]||[]).forEach((e=>e(t)))}),{flush:"post"}),()=>{const i=a.value,o=d.value,l=o&&o.components[t.name],p=t.name;if(!l)return le(n.default,{Component:l,route:i});const g=o.props[t.name],m=g?!0===g?i.params:"function"===typeof g?g(i):g:null,_=t=>{t.component.isUnmounted&&(o.instances[p]=null)},v=(0,r.h)(l,c({},m,e,{onVnodeUnmounted:_,ref:f}));if(s&&v.ref){const t={depth:u.value,name:o.name,path:o.path,meta:o.meta},e=h(v.ref)?v.ref.map((t=>t.i)):[v.ref.i];e.forEach((e=>{e.__vrv_devtools=t}))}return le(n.default,{Component:v,route:i})||v}}});function le(t,e){if(!t)return null;const n=t(e);return 1===n.length?n[0]:n}const ue=ce;function he(){const t=(0,r.FN)(),e=t.parent&&t.parent.type.name;if(e&&("KeepAlive"===e||e.includes("Transition"))){const t="KeepAlive"===e?"keep-alive":"transition";d(`<router-view> can no longer be used directly inside <transition> or <keep-alive>.\nUse slot props instead:\n\n<router-view v-slot="{ Component }">\n  <${t}>\n    <component :is="Component" />\n  </${t}>\n</router-view>`)}}function de(t,e){const n=c({},t,{matched:t.matched.map((t=>Ae(t,["instances","children","aliasOf"])))});return{_custom:{type:null,readOnly:!0,display:t.fullPath,tooltip:e,value:n}}}function fe(t){return{_custom:{display:t}}}let pe=0;function ge(t,e,n){if(e.__hasDevtools)return;e.__hasDevtools=!0;const i=pe++;(0,o.F1)({id:"org.vuejs.router"+(i?"."+i:""),label:"Vue Router",packageName:"vue-router",homepage:"https://router.vuejs.org",logo:"https://router.vuejs.org/logo.png",componentStateTypes:["Routing"],app:t},(o=>{"function"!==typeof o.now&&console.warn("[Vue Router]: You seem to be using an outdated version of Vue Devtools. Are you still using the Beta release instead of the stable one? You can find the links at https://devtools.vuejs.org/guide/installation.html."),o.on.inspectComponent(((t,n)=>{t.instanceData&&t.instanceData.state.push({type:"Routing",key:"$route",editable:!1,value:de(e.currentRoute.value,"Current Route")})})),o.on.visitComponentTree((({treeNode:t,componentInstance:e})=>{if(e.__vrv_devtools){const n=e.__vrv_devtools;t.tags.push({label:(n.name?`${n.name.toString()}: `:"")+n.path,textColor:0,tooltip:"This component is rendered by &lt;router-view&gt;",backgroundColor:ve})}h(e.__vrl_devtools)&&(e.__devtoolsApi=o,e.__vrl_devtools.forEach((e=>{let n=Ce,r="";e.isExactActive?(n=be,r="This is exactly active"):e.isActive&&(n=ye,r="This link is active"),t.tags.push({label:e.route.path,textColor:0,tooltip:r,backgroundColor:n})})))})),(0,r.YP)(e.currentRoute,(()=>{l(),o.notifyComponentUpdate(),o.sendInspectorTree(c),o.sendInspectorState(c)}));const s="router:navigations:"+i;o.addTimelineLayer({id:s,label:`Router${i?" "+i:""} Navigations`,color:4237508}),e.onError(((t,e)=>{o.addTimelineEvent({layerId:s,event:{title:"Error during Navigation",subtitle:e.fullPath,logType:"error",time:o.now(),data:{error:t},groupId:e.meta.__navigationId}})}));let a=0;e.beforeEach(((t,e)=>{const n={guard:fe("beforeEach"),from:de(e,"Current Location during this navigation"),to:de(t,"Target location")};Object.defineProperty(t.meta,"__navigationId",{value:a++}),o.addTimelineEvent({layerId:s,event:{time:o.now(),title:"Start of navigation",subtitle:t.fullPath,data:n,groupId:t.meta.__navigationId}})})),e.afterEach(((t,e,n)=>{const r={guard:fe("afterEach")};n?(r.failure={_custom:{type:Error,readOnly:!0,display:n?n.message:"",tooltip:"Navigation Failure",value:n}},r.status=fe("❌")):r.status=fe("✅"),r.from=de(e,"Current Location during this navigation"),r.to=de(t,"Target location"),o.addTimelineEvent({layerId:s,event:{title:"End of navigation",subtitle:t.fullPath,time:o.now(),data:r,logType:n?"warning":"default",groupId:t.meta.__navigationId}})}));const c="router-inspector:"+i;function l(){if(!u)return;const t=u;let r=n.getRoutes().filter((t=>!t.parent));r.forEach(xe),t.filter&&(r=r.filter((e=>Re(e,t.filter.toLowerCase())))),r.forEach((t=>ke(t,e.currentRoute.value))),t.rootNodes=r.map(Te)}let u;o.addInspector({id:c,label:"Routes"+(i?" "+i:""),icon:"book",treeFilterPlaceholder:"Search routes"}),o.on.getInspectorTree((e=>{u=e,e.app===t&&e.inspectorId===c&&l()})),o.on.getInspectorState((e=>{if(e.app===t&&e.inspectorId===c){const t=n.getRoutes(),r=t.find((t=>t.record.__vd_id===e.nodeId));r&&(e.state={options:_e(r)})}})),o.sendInspectorTree(c),o.sendInspectorState(c)}))}function me(t){return t.optional?t.repeatable?"*":"?":t.repeatable?"+":""}function _e(t){const{record:e}=t,n=[{editable:!1,key:"path",value:e.path}];return null!=e.name&&n.push({editable:!1,key:"name",value:e.name}),n.push({editable:!1,key:"regexp",value:t.re}),t.keys.length&&n.push({editable:!1,key:"keys",value:{_custom:{type:null,readOnly:!0,display:t.keys.map((t=>`${t.name}${me(t)}`)).join(" "),tooltip:"Param keys",value:t.keys}}}),null!=e.redirect&&n.push({editable:!1,key:"redirect",value:e.redirect}),t.alias.length&&n.push({editable:!1,key:"aliases",value:t.alias.map((t=>t.record.path))}),Object.keys(t.record.meta).length&&n.push({editable:!1,key:"meta",value:t.record.meta}),n.push({key:"score",editable:!1,value:{_custom:{type:null,readOnly:!0,display:t.score.map((t=>t.join(", "))).join(" | "),tooltip:"Score used to sort routes",value:t.score}}}),n}const ve=15485081,ye=2450411,be=8702998,we=2282478,Ce=16486972,Ee=6710886;function Te(t){const e=[],{record:n}=t;null!=n.name&&e.push({label:String(n.name),textColor:0,backgroundColor:we}),n.aliasOf&&e.push({label:"alias",textColor:0,backgroundColor:Ce}),t.__vd_match&&e.push({label:"matches",textColor:0,backgroundColor:ve}),t.__vd_exactActive&&e.push({label:"exact",textColor:0,backgroundColor:be}),t.__vd_active&&e.push({label:"active",textColor:0,backgroundColor:ye}),n.redirect&&e.push({label:"string"===typeof n.redirect?`redirect: ${n.redirect}`:"redirects",textColor:16777215,backgroundColor:Ee});let r=n.__vd_id;return null==r&&(r=String(Ie++),n.__vd_id=r),{id:r,label:n.path,tags:e,children:t.children.map(Te)}}let Ie=0;const Se=/^\/(.*)\/([a-z]*)$/;function ke(t,e){const n=e.matched.length&&y(e.matched[e.matched.length-1],t.record);t.__vd_exactActive=t.__vd_active=n,n||(t.__vd_active=e.matched.some((e=>y(e,t.record)))),t.children.forEach((t=>ke(t,e)))}function xe(t){t.__vd_match=!1,t.children.forEach(xe)}function Re(t,e){const n=String(t.re).match(Se);if(t.__vd_match=!1,!n||n.length<3)return!1;const r=new RegExp(n[1].replace(/\$$/,""),n[2]);if(r.test(e))return t.children.forEach((t=>Re(t,e))),("/"!==t.record.path||"/"===e)&&(t.__vd_match=t.re.test(e),!0);const i=t.record.path.toLowerCase(),o=qt(i);return!(e.startsWith("/")||!o.includes(e)&&!i.includes(e))||(!(!o.startsWith(e)&&!i.startsWith(e))||(!(!t.record.name||!String(t.record.name).includes(e))||t.children.some((t=>Re(t,e)))))}function Ae(t,e){const n={};for(const r in t)e.includes(r)||(n[r]=t[r]);return n}function Pe(t){const e=lt(t.routes,t),n=t.parseQuery||Bt,o=t.stringifyQuery||Vt,a=t.history;if(!a)throw new Error('Provide the "history" option when calling "createRouter()": https://next.router.vuejs.org/api/#history.');const f=Jt(),p=Jt(),_=Jt(),y=(0,i.XI)(H);let b=H;s&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const w=l.bind(null,(t=>""+t)),C=l.bind(null,$t),E=l.bind(null,qt);function I(t,n){let r,i;return V(t)?(r=e.getRecordMatcher(t),i=n):i=t,e.addRoute(i,r)}function S(t){const n=e.getRecordMatcher(t);n?e.removeRoute(n):d(`Cannot remove non-existent route "${String(t)}"`)}function k(){return e.getRoutes().map((t=>t.record))}function x(t){return!!e.getRecordMatcher(t)}function R(t,r){if(r=c({},r||y.value),"string"===typeof t){const i=g(n,t,r.path),o=e.resolve({path:i.path},r),s=a.createHref(i.fullPath);return s.startsWith("//")?d(`Location "${t}" resolved to "${s}". A resolved location cannot start with multiple slashes.`):o.matched.length||d(`No match found for location with path "${t}"`),c(i,o,{params:E(o.params),hash:qt(i.hash),redirectedFrom:void 0,href:s})}let i;if("path"in t)"params"in t&&!("name"in t)&&Object.keys(t.params).length&&d(`Path "${t.path}" was passed with params but they will be ignored. Use a named route alongside params instead.`),i=c({},t,{path:g(n,t.path,r.path).path});else{const e=c({},t.params);for(const t in e)null==e[t]&&delete e[t];i=c({},t,{params:C(t.params)}),r.params=C(r.params)}const s=e.resolve(i,r),l=t.hash||"";l&&!l.startsWith("#")&&d(`A \`hash\` should always start with the character "#". Replace "${l}" with "#${l}".`),s.params=w(E(s.params));const u=m(o,c({},t,{hash:Mt(l),path:s.path})),h=a.createHref(u);return h.startsWith("//")?d(`Location "${t}" resolved to "${h}". A resolved location cannot start with multiple slashes.`):s.matched.length||d(`No match found for location with path "${"path"in t?t.path:t}"`),c({fullPath:u,hash:l,query:o===Vt?Ht(t.query):t.query||{}},s,{redirectedFrom:void 0,href:h})}function O(t){return"string"===typeof t?g(n,t,y.value.path):c({},t)}function M(t,e){if(b!==t)return K(8,{from:e,to:t})}function F(t){return $(t)}function j(t){return F(c(O(t),{replace:!0}))}function U(t){const e=t.matched[t.matched.length-1];if(e&&e.redirect){const{redirect:n}=e;let r="function"===typeof n?n(t):n;if("string"===typeof r&&(r=r.includes("?")||r.includes("#")?r=O(r):{path:r},r.params={}),!("path"in r)&&!("name"in r))throw d(`Invalid redirect found:\n${JSON.stringify(r,null,2)}\n when navigating to "${t.fullPath}". A redirect must contain a name or path. This will break in production.`),new Error("Invalid redirect");return c({query:t.query,hash:t.hash,params:"path"in r?{}:t.params},r)}}function $(t,e){const n=b=R(t),r=y.value,i=t.state,s=t.force,a=!0===t.replace,l=U(n);if(l)return $(c(O(l),{state:i,force:s,replace:a}),e||n);const u=n;let h;return u.redirectedFrom=e,!s&&v(o,r,n)&&(h=K(16,{to:u,from:r}),rt(r,r,!0,!1)),(h?Promise.resolve(h):B(u,r)).catch((t=>Y(t)?Y(t,2)?t:nt(t):tt(t,u,r))).then((t=>{if(t){if(Y(t,2))return v(o,R(t.to),u)&&e&&(e._count=e._count?e._count+1:1)>10?(d(`Detected an infinite redirection in a navigation guard when going from "${r.fullPath}" to "${u.fullPath}". Aborting to avoid a Stack Overflow. This will break in production if not fixed.`),Promise.reject(new Error("Infinite redirect in navigation guard"))):$(c(O(t.to),{state:i,force:s,replace:a}),e||u)}else t=z(u,r,!0,a,i);return W(u,r,t),t}))}function q(t,e){const n=M(t,e);return n?Promise.reject(n):Promise.resolve()}function B(t,e){let n;const[r,i,o]=Oe(t,e);n=Zt(r.reverse(),"beforeRouteLeave",t,e);for(const a of r)a.leaveGuards.forEach((r=>{n.push(Xt(r,t,e))}));const s=q.bind(null,t,e);return n.push(s),Ne(n).then((()=>{n=[];for(const r of f.list())n.push(Xt(r,t,e));return n.push(s),Ne(n)})).then((()=>{n=Zt(i,"beforeRouteUpdate",t,e);for(const r of i)r.updateGuards.forEach((r=>{n.push(Xt(r,t,e))}));return n.push(s),Ne(n)})).then((()=>{n=[];for(const r of t.matched)if(r.beforeEnter&&!e.matched.includes(r))if(h(r.beforeEnter))for(const i of r.beforeEnter)n.push(Xt(i,t,e));else n.push(Xt(r.beforeEnter,t,e));return n.push(s),Ne(n)})).then((()=>(t.matched.forEach((t=>t.enterCallbacks={})),n=Zt(o,"beforeRouteEnter",t,e),n.push(s),Ne(n)))).then((()=>{n=[];for(const r of p.list())n.push(Xt(r,t,e));return n.push(s),Ne(n)})).catch((t=>Y(t,8)?t:Promise.reject(t)))}function W(t,e,n){for(const r of _.list())r(t,e,n)}function z(t,e,n,r,i){const o=M(t,e);if(o)return o;const l=e===H,u=s?history.state:{};n&&(r||l?a.replace(t.fullPath,c({scroll:l&&u&&u.scroll},i)):a.push(t.fullPath,i)),y.value=t,rt(t,e,n,l),nt()}let G;function J(){G||(G=a.listen(((t,e,n)=>{if(!at.listening)return;const r=R(t),i=U(r);if(i)return void $(c(i,{replace:!0}),r).catch(u);b=r;const o=y.value;s&&D(N(o.fullPath,n.delta),A()),B(r,o).catch((t=>Y(t,12)?t:Y(t,2)?($(t.to,r).then((t=>{Y(t,20)&&!n.delta&&n.type===T.pop&&a.go(-1,!1)})).catch(u),Promise.reject()):(n.delta&&a.go(-n.delta,!1),tt(t,r,o)))).then((t=>{t=t||z(r,o,!1),t&&(n.delta?a.go(-n.delta,!1):n.type===T.pop&&Y(t,20)&&a.go(-1,!1)),W(r,o,t)})).catch(u)})))}let X,Q=Jt(),Z=Jt();function tt(t,e,n){nt(t);const r=Z.list();return r.length?r.forEach((r=>r(t,e,n))):(d("uncaught error during route navigation:"),console.error(t)),Promise.reject(t)}function et(){return X&&y.value!==H?Promise.resolve():new Promise(((t,e)=>{Q.add([t,e])}))}function nt(t){return X||(X=!t,J(),Q.list().forEach((([e,n])=>t?n(t):e())),Q.reset()),t}function rt(e,n,i,o){const{scrollBehavior:a}=t;if(!s||!a)return Promise.resolve();const c=!i&&L(N(e.fullPath,0))||(o||!i)&&history.state&&history.state.scroll||null;return(0,r.Y3)().then((()=>a(e,n,c))).then((t=>t&&P(t))).catch((t=>tt(t,e,n)))}const it=t=>a.go(t);let ot;const st=new Set,at={currentRoute:y,listening:!0,addRoute:I,removeRoute:S,hasRoute:x,getRoutes:k,resolve:R,options:t,push:F,replace:j,go:it,back:()=>it(-1),forward:()=>it(1),beforeEach:f.add,beforeResolve:p.add,afterEach:_.add,onError:Z.add,isReady:et,install(t){const n=this;t.component("RouterLink",re),t.component("RouterView",ue),t.config.globalProperties.$router=n,Object.defineProperty(t.config.globalProperties,"$route",{enumerable:!0,get:()=>(0,i.SU)(y)}),s&&!ot&&y.value===H&&(ot=!0,F(a.location).catch((t=>{d("Unexpected error when starting the router:",t)})));const o={};for(const e in H)o[e]=(0,r.Fl)((()=>y.value[e]));t.provide(Gt,n),t.provide(Kt,(0,i.qj)(o)),t.provide(Yt,y);const c=t.unmount;st.add(t),t.unmount=function(){st.delete(t),st.size<1&&(b=H,G&&G(),G=null,y.value=H,ot=!1,X=!1),c()},s&&ge(t,n,e)}};return at}function Ne(t){return t.reduce(((t,e)=>t.then((()=>e()))),Promise.resolve())}function Oe(t,e){const n=[],r=[],i=[],o=Math.max(e.matched.length,t.matched.length);for(let s=0;s<o;s++){const o=e.matched[s];o&&(t.matched.find((t=>y(t,o)))?r.push(o):n.push(o));const a=t.matched[s];a&&(e.matched.find((t=>y(t,a)))||i.push(a))}return[n,r,i]}},6623:function(t,e,n){"use strict";n.d(e,{MT:function(){return H},Se:function(){return G}});n(1703),n(6699);var r=n(3396),i=n(4870),o=n(8005),s="store";function a(t,e){Object.keys(t).forEach((function(n){return e(t[n],n)}))}function c(t){return null!==t&&"object"===typeof t}function l(t){return t&&"function"===typeof t.then}function u(t,e){return function(){return t(e)}}function h(t,e,n){return e.indexOf(t)<0&&(n&&n.prepend?e.unshift(t):e.push(t)),function(){var n=e.indexOf(t);n>-1&&e.splice(n,1)}}function d(t,e){t._actions=Object.create(null),t._mutations=Object.create(null),t._wrappedGetters=Object.create(null),t._modulesNamespaceMap=Object.create(null);var n=t.state;p(t,n,[],t._modules.root,!0),f(t,n,e)}function f(t,e,n){var r=t._state;t.getters={},t._makeLocalGettersCache=Object.create(null);var o=t._wrappedGetters,s={};a(o,(function(e,n){s[n]=u(e,t),Object.defineProperty(t.getters,n,{get:function(){return s[n]()},enumerable:!0})})),t._state=(0,i.qj)({data:e}),t.strict&&b(t),r&&n&&t._withCommit((function(){r.data=null}))}function p(t,e,n,r,i){var o=!n.length,s=t._modules.getNamespace(n);if(r.namespaced&&(t._modulesNamespaceMap[s],t._modulesNamespaceMap[s]=r),!o&&!i){var a=w(e,n.slice(0,-1)),c=n[n.length-1];t._withCommit((function(){a[c]=r.state}))}var l=r.context=g(t,s,n);r.forEachMutation((function(e,n){var r=s+n;_(t,r,e,l)})),r.forEachAction((function(e,n){var r=e.root?n:s+n,i=e.handler||e;v(t,r,i,l)})),r.forEachGetter((function(e,n){var r=s+n;y(t,r,e,l)})),r.forEachChild((function(r,o){p(t,e,n.concat(o),r,i)}))}function g(t,e,n){var r=""===e,i={dispatch:r?t.dispatch:function(n,r,i){var o=C(n,r,i),s=o.payload,a=o.options,c=o.type;return a&&a.root||(c=e+c),t.dispatch(c,s)},commit:r?t.commit:function(n,r,i){var o=C(n,r,i),s=o.payload,a=o.options,c=o.type;a&&a.root||(c=e+c),t.commit(c,s,a)}};return Object.defineProperties(i,{getters:{get:r?function(){return t.getters}:function(){return m(t,e)}},state:{get:function(){return w(t.state,n)}}}),i}function m(t,e){if(!t._makeLocalGettersCache[e]){var n={},r=e.length;Object.keys(t.getters).forEach((function(i){if(i.slice(0,r)===e){var o=i.slice(r);Object.defineProperty(n,o,{get:function(){return t.getters[i]},enumerable:!0})}})),t._makeLocalGettersCache[e]=n}return t._makeLocalGettersCache[e]}function _(t,e,n,r){var i=t._mutations[e]||(t._mutations[e]=[]);i.push((function(e){n.call(t,r.state,e)}))}function v(t,e,n,r){var i=t._actions[e]||(t._actions[e]=[]);i.push((function(e){var i=n.call(t,{dispatch:r.dispatch,commit:r.commit,getters:r.getters,state:r.state,rootGetters:t.getters,rootState:t.state},e);return l(i)||(i=Promise.resolve(i)),t._devtoolHook?i.catch((function(e){throw t._devtoolHook.emit("vuex:error",e),e})):i}))}function y(t,e,n,r){t._wrappedGetters[e]||(t._wrappedGetters[e]=function(t){return n(r.state,r.getters,t.state,t.getters)})}function b(t){(0,r.YP)((function(){return t._state.data}),(function(){0}),{deep:!0,flush:"sync"})}function w(t,e){return e.reduce((function(t,e){return t[e]}),t)}function C(t,e,n){return c(t)&&t.type&&(n=e,e=t,t=t.type),{type:t,payload:e,options:n}}var E="vuex bindings",T="vuex:mutations",I="vuex:actions",S="vuex",k=0;function x(t,e){(0,o.F1)({id:"org.vuejs.vuex",app:t,label:"Vuex",homepage:"https://next.vuex.vuejs.org/",logo:"https://vuejs.org/images/icons/favicon-96x96.png",packageName:"vuex",componentStateTypes:[E]},(function(n){n.addTimelineLayer({id:T,label:"Vuex Mutations",color:R}),n.addTimelineLayer({id:I,label:"Vuex Actions",color:R}),n.addInspector({id:S,label:"Vuex",icon:"storage",treeFilterPlaceholder:"Filter stores..."}),n.on.getInspectorTree((function(n){if(n.app===t&&n.inspectorId===S)if(n.filter){var r=[];L(r,e._modules.root,n.filter,""),n.rootNodes=r}else n.rootNodes=[D(e._modules.root,"")]})),n.on.getInspectorState((function(n){if(n.app===t&&n.inspectorId===S){var r=n.nodeId;m(e,r),n.state=M(j(e._modules,r),"root"===r?e.getters:e._makeLocalGettersCache,r)}})),n.on.editInspectorState((function(n){if(n.app===t&&n.inspectorId===S){var r=n.nodeId,i=n.path;"root"!==r&&(i=r.split("/").filter(Boolean).concat(i)),e._withCommit((function(){n.set(e._state.data,i,n.state.value)}))}})),e.subscribe((function(t,e){var r={};t.payload&&(r.payload=t.payload),r.state=e,n.notifyComponentUpdate(),n.sendInspectorTree(S),n.sendInspectorState(S),n.addTimelineEvent({layerId:T,event:{time:Date.now(),title:t.type,data:r}})})),e.subscribeAction({before:function(t,e){var r={};t.payload&&(r.payload=t.payload),t._id=k++,t._time=Date.now(),r.state=e,n.addTimelineEvent({layerId:I,event:{time:t._time,title:t.type,groupId:t._id,subtitle:"start",data:r}})},after:function(t,e){var r={},i=Date.now()-t._time;r.duration={_custom:{type:"duration",display:i+"ms",tooltip:"Action duration",value:i}},t.payload&&(r.payload=t.payload),r.state=e,n.addTimelineEvent({layerId:I,event:{time:Date.now(),title:t.type,groupId:t._id,subtitle:"end",data:r}})}})}))}var R=8702998,A=6710886,P=16777215,N={label:"namespaced",textColor:P,backgroundColor:A};function O(t){return t&&"root"!==t?t.split("/").slice(-2,-1)[0]:"Root"}function D(t,e){return{id:e||"root",label:O(e),tags:t.namespaced?[N]:[],children:Object.keys(t._children).map((function(n){return D(t._children[n],e+n+"/")}))}}function L(t,e,n,r){r.includes(n)&&t.push({id:r||"root",label:r.endsWith("/")?r.slice(0,r.length-1):r||"Root",tags:e.namespaced?[N]:[]}),Object.keys(e._children).forEach((function(i){L(t,e._children[i],n,r+i+"/")}))}function M(t,e,n){e="root"===n?e:e[n];var r=Object.keys(e),i={state:Object.keys(t.state).map((function(e){return{key:e,editable:!0,value:t.state[e]}}))};if(r.length){var o=F(e);i.getters=Object.keys(o).map((function(t){return{key:t.endsWith("/")?O(t):t,editable:!1,value:U((function(){return o[t]}))}}))}return i}function F(t){var e={};return Object.keys(t).forEach((function(n){var r=n.split("/");if(r.length>1){var i=e,o=r.pop();r.forEach((function(t){i[t]||(i[t]={_custom:{value:{},display:t,tooltip:"Module",abstract:!0}}),i=i[t]._custom.value})),i[o]=U((function(){return t[n]}))}else e[n]=U((function(){return t[n]}))})),e}function j(t,e){var n=e.split("/").filter((function(t){return t}));return n.reduce((function(t,r,i){var o=t[r];if(!o)throw new Error('Missing module "'+r+'" for path "'+e+'".');return i===n.length-1?o:o._children}),"root"===e?t:t.root._children)}function U(t){try{return t()}catch(e){return e}}var $=function(t,e){this.runtime=e,this._children=Object.create(null),this._rawModule=t;var n=t.state;this.state=("function"===typeof n?n():n)||{}},q={namespaced:{configurable:!0}};q.namespaced.get=function(){return!!this._rawModule.namespaced},$.prototype.addChild=function(t,e){this._children[t]=e},$.prototype.removeChild=function(t){delete this._children[t]},$.prototype.getChild=function(t){return this._children[t]},$.prototype.hasChild=function(t){return t in this._children},$.prototype.update=function(t){this._rawModule.namespaced=t.namespaced,t.actions&&(this._rawModule.actions=t.actions),t.mutations&&(this._rawModule.mutations=t.mutations),t.getters&&(this._rawModule.getters=t.getters)},$.prototype.forEachChild=function(t){a(this._children,t)},$.prototype.forEachGetter=function(t){this._rawModule.getters&&a(this._rawModule.getters,t)},$.prototype.forEachAction=function(t){this._rawModule.actions&&a(this._rawModule.actions,t)},$.prototype.forEachMutation=function(t){this._rawModule.mutations&&a(this._rawModule.mutations,t)},Object.defineProperties($.prototype,q);var B=function(t){this.register([],t,!1)};function V(t,e,n){if(e.update(n),n.modules)for(var r in n.modules){if(!e.getChild(r))return void 0;V(t.concat(r),e.getChild(r),n.modules[r])}}B.prototype.get=function(t){return t.reduce((function(t,e){return t.getChild(e)}),this.root)},B.prototype.getNamespace=function(t){var e=this.root;return t.reduce((function(t,n){return e=e.getChild(n),t+(e.namespaced?n+"/":"")}),"")},B.prototype.update=function(t){V([],this.root,t)},B.prototype.register=function(t,e,n){var r=this;void 0===n&&(n=!0);var i=new $(e,n);if(0===t.length)this.root=i;else{var o=this.get(t.slice(0,-1));o.addChild(t[t.length-1],i)}e.modules&&a(e.modules,(function(e,i){r.register(t.concat(i),e,n)}))},B.prototype.unregister=function(t){var e=this.get(t.slice(0,-1)),n=t[t.length-1],r=e.getChild(n);r&&r.runtime&&e.removeChild(n)},B.prototype.isRegistered=function(t){var e=this.get(t.slice(0,-1)),n=t[t.length-1];return!!e&&e.hasChild(n)};function H(t){return new W(t)}var W=function(t){var e=this;void 0===t&&(t={});var n=t.plugins;void 0===n&&(n=[]);var r=t.strict;void 0===r&&(r=!1);var i=t.devtools;this._committing=!1,this._actions=Object.create(null),this._actionSubscribers=[],this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new B(t),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._makeLocalGettersCache=Object.create(null),this._devtools=i;var o=this,s=this,a=s.dispatch,c=s.commit;this.dispatch=function(t,e){return a.call(o,t,e)},this.commit=function(t,e,n){return c.call(o,t,e,n)},this.strict=r;var l=this._modules.root.state;p(this,l,[],this._modules.root),f(this,l),n.forEach((function(t){return t(e)}))},z={state:{configurable:!0}};W.prototype.install=function(t,e){t.provide(e||s,this),t.config.globalProperties.$store=this;var n=void 0!==this._devtools&&this._devtools;n&&x(t,this)},z.state.get=function(){return this._state.data},z.state.set=function(t){0},W.prototype.commit=function(t,e,n){var r=this,i=C(t,e,n),o=i.type,s=i.payload,a=(i.options,{type:o,payload:s}),c=this._mutations[o];c&&(this._withCommit((function(){c.forEach((function(t){t(s)}))})),this._subscribers.slice().forEach((function(t){return t(a,r.state)})))},W.prototype.dispatch=function(t,e){var n=this,r=C(t,e),i=r.type,o=r.payload,s={type:i,payload:o},a=this._actions[i];if(a){try{this._actionSubscribers.slice().filter((function(t){return t.before})).forEach((function(t){return t.before(s,n.state)}))}catch(l){0}var c=a.length>1?Promise.all(a.map((function(t){return t(o)}))):a[0](o);return new Promise((function(t,e){c.then((function(e){try{n._actionSubscribers.filter((function(t){return t.after})).forEach((function(t){return t.after(s,n.state)}))}catch(l){0}t(e)}),(function(t){try{n._actionSubscribers.filter((function(t){return t.error})).forEach((function(e){return e.error(s,n.state,t)}))}catch(l){0}e(t)}))}))}},W.prototype.subscribe=function(t,e){return h(t,this._subscribers,e)},W.prototype.subscribeAction=function(t,e){var n="function"===typeof t?{before:t}:t;return h(n,this._actionSubscribers,e)},W.prototype.watch=function(t,e,n){var i=this;return(0,r.YP)((function(){return t(i.state,i.getters)}),e,Object.assign({},n))},W.prototype.replaceState=function(t){var e=this;this._withCommit((function(){e._state.data=t}))},W.prototype.registerModule=function(t,e,n){void 0===n&&(n={}),"string"===typeof t&&(t=[t]),this._modules.register(t,e),p(this,this.state,t,this._modules.get(t),n.preserveState),f(this,this.state)},W.prototype.unregisterModule=function(t){var e=this;"string"===typeof t&&(t=[t]),this._modules.unregister(t),this._withCommit((function(){var n=w(e.state,t.slice(0,-1));delete n[t[t.length-1]]})),d(this)},W.prototype.hasModule=function(t){return"string"===typeof t&&(t=[t]),this._modules.isRegistered(t)},W.prototype.hotUpdate=function(t){this._modules.update(t),d(this,!0)},W.prototype._withCommit=function(t){var e=this._committing;this._committing=!0,t(),this._committing=e},Object.defineProperties(W.prototype,z);J((function(t,e){var n={};return K(e).forEach((function(e){var r=e.key,i=e.val;n[r]=function(){var e=this.$store.state,n=this.$store.getters;if(t){var r=X(this.$store,"mapState",t);if(!r)return;e=r.context.state,n=r.context.getters}return"function"===typeof i?i.call(this,e,n):e[i]},n[r].vuex=!0})),n})),J((function(t,e){var n={};return K(e).forEach((function(e){var r=e.key,i=e.val;n[r]=function(){var e=[],n=arguments.length;while(n--)e[n]=arguments[n];var r=this.$store.commit;if(t){var o=X(this.$store,"mapMutations",t);if(!o)return;r=o.context.commit}return"function"===typeof i?i.apply(this,[r].concat(e)):r.apply(this.$store,[i].concat(e))}})),n}));var G=J((function(t,e){var n={};return K(e).forEach((function(e){var r=e.key,i=e.val;i=t+i,n[r]=function(){if(!t||X(this.$store,"mapGetters",t))return this.$store.getters[i]},n[r].vuex=!0})),n}));J((function(t,e){var n={};return K(e).forEach((function(e){var r=e.key,i=e.val;n[r]=function(){var e=[],n=arguments.length;while(n--)e[n]=arguments[n];var r=this.$store.dispatch;if(t){var o=X(this.$store,"mapActions",t);if(!o)return;r=o.context.dispatch}return"function"===typeof i?i.apply(this,[r].concat(e)):r.apply(this.$store,[i].concat(e))}})),n}));function K(t){return Y(t)?Array.isArray(t)?t.map((function(t){return{key:t,val:t}})):Object.keys(t).map((function(e){return{key:e,val:t[e]}})):[]}function Y(t){return Array.isArray(t)||c(t)}function J(t){return function(e,n){return"string"!==typeof e?(n=e,e=""):"/"!==e.charAt(e.length-1)&&(e+="/"),t(e,n)}}function X(t,e,n){var r=t._modulesNamespaceMap[n];return r}},1804:function(t,e,n){"use strict";n.d(e,{Jn:function(){return gt},qX:function(){return ht},Xd:function(){return ut},Mq:function(){return _t},ZF:function(){return mt},KN:function(){return vt}});var r=n(7142),i=n(5168),o=n(223);n(6699),n(2801);const s=(t,e)=>e.some((e=>t instanceof e));let a,c;function l(){return a||(a=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function u(){return c||(c=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const h=new WeakMap,d=new WeakMap,f=new WeakMap,p=new WeakMap,g=new WeakMap;function m(t){const e=new Promise(((e,n)=>{const r=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{e(C(t.result)),r()},o=()=>{n(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",o)}));return e.then((e=>{e instanceof IDBCursor&&h.set(e,t)})).catch((()=>{})),g.set(e,t),e}function _(t){if(d.has(t))return;const e=new Promise(((e,n)=>{const r=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{e(),r()},o=()=>{n(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)}));d.set(t,e)}let v={get(t,e,n){if(t instanceof IDBTransaction){if("done"===e)return d.get(t);if("objectStoreNames"===e)return t.objectStoreNames||f.get(t);if("store"===e)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return C(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&("done"===e||"store"===e)||e in t}};function y(t){v=t(v)}function b(t){return t!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?u().includes(t)?function(...e){return t.apply(E(this),e),C(h.get(this))}:function(...e){return C(t.apply(E(this),e))}:function(e,...n){const r=t.call(E(this),e,...n);return f.set(r,e.sort?e.sort():[e]),C(r)}}function w(t){return"function"===typeof t?b(t):(t instanceof IDBTransaction&&_(t),s(t,l())?new Proxy(t,v):t)}function C(t){if(t instanceof IDBRequest)return m(t);if(p.has(t))return p.get(t);const e=w(t);return e!==t&&(p.set(t,e),g.set(e,t)),e}const E=t=>g.get(t);function T(t,e,{blocked:n,upgrade:r,blocking:i,terminated:o}={}){const s=indexedDB.open(t,e),a=C(s);return r&&s.addEventListener("upgradeneeded",(t=>{r(C(s.result),t.oldVersion,t.newVersion,C(s.transaction))})),n&&s.addEventListener("blocked",(()=>n())),a.then((t=>{o&&t.addEventListener("close",(()=>o())),i&&t.addEventListener("versionchange",(()=>i()))})).catch((()=>{})),a}const I=["get","getKey","getAll","getAllKeys","count"],S=["put","add","delete","clear"],k=new Map;function x(t,e){if(!(t instanceof IDBDatabase)||e in t||"string"!==typeof e)return;if(k.get(e))return k.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=S.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!i&&!I.includes(n))return;const o=async function(t,...e){const o=this.transaction(t,i?"readwrite":"readonly");let s=o.store;return r&&(s=s.index(e.shift())),(await Promise.all([s[n](...e),i&&o.done]))[0]};return k.set(e,o),o}y((t=>({...t,get:(e,n,r)=>x(e,n)||t.get(e,n,r),has:(e,n)=>!!x(e,n)||t.has(e,n)})));
/**
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
 */
class R{constructor(t){this.container=t}getPlatformInfoString(){const t=this.container.getProviders();return t.map((t=>{if(A(t)){const e=t.getImmediate();return`${e.library}/${e.version}`}return null})).filter((t=>t)).join(" ")}}function A(t){const e=t.getComponent();return"VERSION"===(null===e||void 0===e?void 0:e.type)}const P="@firebase/app",N="0.7.27",O=new i.Yd("@firebase/app"),D="@firebase/app-compat",L="@firebase/analytics-compat",M="@firebase/analytics",F="@firebase/app-check-compat",j="@firebase/app-check",U="@firebase/auth",$="@firebase/auth-compat",q="@firebase/database",B="@firebase/database-compat",V="@firebase/functions",H="@firebase/functions-compat",W="@firebase/installations",z="@firebase/installations-compat",G="@firebase/messaging",K="@firebase/messaging-compat",Y="@firebase/performance",J="@firebase/performance-compat",X="@firebase/remote-config",Q="@firebase/remote-config-compat",Z="@firebase/storage",tt="@firebase/storage-compat",et="@firebase/firestore",nt="@firebase/firestore-compat",rt="firebase",it="9.8.4",ot="[DEFAULT]",st={[P]:"fire-core",[D]:"fire-core-compat",[M]:"fire-analytics",[L]:"fire-analytics-compat",[j]:"fire-app-check",[F]:"fire-app-check-compat",[U]:"fire-auth",[$]:"fire-auth-compat",[q]:"fire-rtdb",[B]:"fire-rtdb-compat",[V]:"fire-fn",[H]:"fire-fn-compat",[W]:"fire-iid",[z]:"fire-iid-compat",[G]:"fire-fcm",[K]:"fire-fcm-compat",[Y]:"fire-perf",[J]:"fire-perf-compat",[X]:"fire-rc",[Q]:"fire-rc-compat",[Z]:"fire-gcs",[tt]:"fire-gcs-compat",[et]:"fire-fst",[nt]:"fire-fst-compat","fire-js":"fire-js",[rt]:"fire-js-all"},at=new Map,ct=new Map;function lt(t,e){try{t.container.addComponent(e)}catch(n){O.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ut(t){const e=t.name;if(ct.has(e))return O.debug(`There were multiple attempts to register component ${e}.`),!1;ct.set(e,t);for(const n of at.values())lt(n,t);return!0}function ht(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}
/**
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
 */
const dt={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["storage-open"]:"Error thrown when opening storage. Original error: {$originalErrorMessage}.",["storage-get"]:"Error thrown when reading from storage. Original error: {$originalErrorMessage}.",["storage-set"]:"Error thrown when writing to storage. Original error: {$originalErrorMessage}.",["storage-delete"]:"Error thrown when deleting from storage. Original error: {$originalErrorMessage}."},ft=new o.LL("app","Firebase",dt);
/**
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
 */
class pt{constructor(t,e,n){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new r.wA("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw ft.create("app-deleted",{appName:this._name})}}
/**
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
 */const gt=it;function mt(t,e={}){if("object"!==typeof e){const t=e;e={name:t}}const n=Object.assign({name:ot,automaticDataCollectionEnabled:!1},e),i=n.name;if("string"!==typeof i||!i)throw ft.create("bad-app-name",{appName:String(i)});const s=at.get(i);if(s){if((0,o.vZ)(t,s.options)&&(0,o.vZ)(n,s.config))return s;throw ft.create("duplicate-app",{appName:i})}const a=new r.H0(i);for(const r of ct.values())a.addComponent(r);const c=new pt(t,n,a);return at.set(i,c),c}function _t(t=ot){const e=at.get(t);if(!e)throw ft.create("no-app",{appName:t});return e}function vt(t,e,n){var i;let o=null!==(i=st[t])&&void 0!==i?i:t;n&&(o+=`-${n}`);const s=o.match(/\s|\//),a=e.match(/\s|\//);if(s||a){const t=[`Unable to register library "${o}" with version "${e}":`];return s&&t.push(`library name "${o}" contains illegal characters (whitespace or "/")`),s&&a&&t.push("and"),a&&t.push(`version name "${e}" contains illegal characters (whitespace or "/")`),void O.warn(t.join(" "))}ut(new r.wA(`${o}-version`,(()=>({library:o,version:e})),"VERSION"))}
/**
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
 */
const yt="firebase-heartbeat-database",bt=1,wt="firebase-heartbeat-store";let Ct=null;function Et(){return Ct||(Ct=T(yt,bt,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(wt)}}}).catch((t=>{throw ft.create("storage-open",{originalErrorMessage:t.message})}))),Ct}async function Tt(t){var e;try{const e=await Et();return e.transaction(wt).objectStore(wt).get(St(t))}catch(n){throw ft.create("storage-get",{originalErrorMessage:null===(e=n)||void 0===e?void 0:e.message})}}async function It(t,e){var n;try{const n=await Et(),r=n.transaction(wt,"readwrite"),i=r.objectStore(wt);return await i.put(e,St(t)),r.done}catch(r){throw ft.create("storage-set",{originalErrorMessage:null===(n=r)||void 0===n?void 0:n.message})}}function St(t){return`${t.name}!${t.options.appId}`}
/**
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
 */const kt=1024,xt=2592e6;class Rt{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new Nt(e),this._heartbeatsCachePromise=this._storage.read().then((t=>(this._heartbeatsCache=t,t)))}async triggerHeartbeat(){const t=this.container.getProvider("platform-logger").getImmediate(),e=t.getPlatformInfoString(),n=At();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==n&&!this._heartbeatsCache.heartbeats.some((t=>t.date===n)))return this._heartbeatsCache.heartbeats.push({date:n,agent:e}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((t=>{const e=new Date(t.date).valueOf(),n=Date.now();return n-e<=xt})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const t=At(),{heartbeatsToSend:e,unsentEntries:n}=Pt(this._heartbeatsCache.heartbeats),r=(0,o.L)(JSON.stringify({version:2,heartbeats:e}));return this._heartbeatsCache.lastSentHeartbeatDate=t,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function At(){const t=new Date;return t.toISOString().substring(0,10)}function Pt(t,e=kt){const n=[];let r=t.slice();for(const i of t){const t=n.find((t=>t.agent===i.agent));if(t){if(t.dates.push(i.date),Ot(n)>e){t.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Ot(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Nt{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!(0,o.hl)()&&(0,o.eu)().then((()=>!0)).catch((()=>!1))}async read(){const t=await this._canUseIndexedDBPromise;if(t){const t=await Tt(this.app);return t||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(t){var e;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return It(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:t.heartbeats})}}async add(t){var e;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return It(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...t.heartbeats]})}}}function Ot(t){return(0,o.L)(JSON.stringify({version:2,heartbeats:t})).length}
/**
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
 */function Dt(t){ut(new r.wA("platform-logger",(t=>new R(t)),"PRIVATE")),ut(new r.wA("heartbeat",(t=>new Rt(t)),"PRIVATE")),vt(P,N,t),vt(P,N,"esm2017"),vt("fire-js","")}Dt("")},7142:function(t,e,n){"use strict";n.d(e,{H0:function(){return l},wA:function(){return i}});n(1703);var r=n(223);class i{constructor(t,e,n){this.name=t,this.instanceFactory=e,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}
/**
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
 */const o="[DEFAULT]";
/**
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
 */class s{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const t=new r.BH;if(this.instancesDeferred.set(e,t),this.isInitialized(e)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:e});n&&t.resolve(n)}catch(n){}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const n=this.normalizeInstanceIdentifier(null===t||void 0===t?void 0:t.identifier),r=null!==(e=null===t||void 0===t?void 0:t.optional)&&void 0!==e&&e;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,this.shouldAutoInitialize()){if(c(t))try{this.getOrInitializeService({instanceIdentifier:o})}catch(e){}for(const[t,n]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(t);try{const t=this.getOrInitializeService({instanceIdentifier:r});n.resolve(t)}catch(e){}}}}clearInstance(t=o){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter((t=>"INTERNAL"in t)).map((t=>t.INTERNAL.delete())),...t.filter((t=>"_delete"in t)).map((t=>t._delete()))])}isComponentSet(){return null!=this.component}isInitialized(t=o){return this.instances.has(t)}getOptions(t=o){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,n=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:e});for(const[i,o]of this.instancesDeferred.entries()){const t=this.normalizeInstanceIdentifier(i);n===t&&o.resolve(r)}return r}onInit(t,e){var n;const r=this.normalizeInstanceIdentifier(e),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(t),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&t(o,r),()=>{i.delete(t)}}invokeOnInitCallbacks(t,e){const n=this.onInitCallbacks.get(e);if(n)for(const i of n)try{i(t,e)}catch(r){}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let n=this.instances.get(t);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:a(t),options:e}),this.instances.set(t,n),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(n,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,n)}catch(r){}return n||null}normalizeInstanceIdentifier(t=o){return this.component?this.component.multipleInstances?t:o:t}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}function a(t){return t===o?void 0:t}function c(t){return"EAGER"===t.instantiationMode}
/**
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
 */class l{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){const e=this.getProvider(t.name);e.isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new s(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}},5168:function(t,e,n){"use strict";n.d(e,{Yd:function(){return l},in:function(){return i}});n(1703);
/**
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
 */const r=[];var i;(function(t){t[t["DEBUG"]=0]="DEBUG",t[t["VERBOSE"]=1]="VERBOSE",t[t["INFO"]=2]="INFO",t[t["WARN"]=3]="WARN",t[t["ERROR"]=4]="ERROR",t[t["SILENT"]=5]="SILENT"})(i||(i={}));const o={debug:i.DEBUG,verbose:i.VERBOSE,info:i.INFO,warn:i.WARN,error:i.ERROR,silent:i.SILENT},s=i.INFO,a={[i.DEBUG]:"log",[i.VERBOSE]:"log",[i.INFO]:"info",[i.WARN]:"warn",[i.ERROR]:"error"},c=(t,e,...n)=>{if(e<t.logLevel)return;const r=(new Date).toISOString(),i=a[e];if(!i)throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`);console[i](`[${r}]  ${t.name}:`,...n)};class l{constructor(t){this.name=t,this._logLevel=s,this._logHandler=c,this._userLogHandler=null,r.push(this)}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in i))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel="string"===typeof t?o[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if("function"!==typeof t)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,i.DEBUG,...t),this._logHandler(this,i.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,i.VERBOSE,...t),this._logHandler(this,i.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,i.INFO,...t),this._logHandler(this,i.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,i.WARN,...t),this._logHandler(this,i.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,i.ERROR,...t),this._logHandler(this,i.ERROR,...t)}}}}]);
//# sourceMappingURL=chunk-vendors.a4b6fff3.js.map