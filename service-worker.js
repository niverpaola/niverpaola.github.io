if(!self.define){let i,l={};const e=(e,n)=>(e=new URL(e+".js",n).href,l[e]||new Promise((l=>{if("document"in self){const i=document.createElement("script");i.src=e,i.onload=l,document.head.appendChild(i)}else i=e,importScripts(e),l()})).then((()=>{let i=l[e];if(!i)throw new Error(`Module ${e} didn’t register its module`);return i})));self.define=(n,r)=>{const u=i||("document"in self?document.currentScript.src:"")||location.href;if(l[u])return;let s={};const o=i=>e(i,u),g={module:{uri:u},exports:s,require:o};l[u]=Promise.all(n.map((i=>g[i]||o(i)))).then((i=>(r(...i),s)))}}define(["./workbox-2d118ab0"],(function(i){"use strict";i.setCacheNameDetails({prefix:"gameparty"}),self.addEventListener("message",(i=>{i.data&&"SKIP_WAITING"===i.data.type&&self.skipWaiting()})),i.precacheAndRoute([{url:"/css/app.2a1a917d.css",revision:null},{url:"/fonts/font-black.eea11147.woff",revision:null},{url:"/fonts/font-light.d9a3b8eb.woff",revision:null},{url:"/fonts/font-regular.091c35d7.woff",revision:null},{url:"/img/1.0623c2bd.jpeg",revision:null},{url:"/img/10.94a5333b.jpeg",revision:null},{url:"/img/11.21df260a.jpeg",revision:null},{url:"/img/12.3d615e01.jpeg",revision:null},{url:"/img/13.ee3a23bf.jpeg",revision:null},{url:"/img/14.5540cc7d.jpeg",revision:null},{url:"/img/15.5cf49cb1.jpeg",revision:null},{url:"/img/16.5c401dfd.jpeg",revision:null},{url:"/img/17.8bbe5f96.jpeg",revision:null},{url:"/img/18.8f6ce56a.jpeg",revision:null},{url:"/img/19.44b4f5e6.jpeg",revision:null},{url:"/img/2.b5df2524.jpeg",revision:null},{url:"/img/20.e6adc227.jpeg",revision:null},{url:"/img/21.00ea831a.jpeg",revision:null},{url:"/img/22.e9ab4da7.jpeg",revision:null},{url:"/img/23.dc7dff6e.jpeg",revision:null},{url:"/img/24.22c70515.jpeg",revision:null},{url:"/img/25.2380f647.jpeg",revision:null},{url:"/img/26.a2c83811.jpeg",revision:null},{url:"/img/27.0c2aa029.jpeg",revision:null},{url:"/img/28.04b56873.jpeg",revision:null},{url:"/img/29.e5b7eb19.jpeg",revision:null},{url:"/img/3.b41eff1e.jpeg",revision:null},{url:"/img/30.c5a60198.jpeg",revision:null},{url:"/img/31.25e4e450.jpeg",revision:null},{url:"/img/32.d40d6107.jpeg",revision:null},{url:"/img/4.9f515c87.jpeg",revision:null},{url:"/img/5.c6c1f247.jpeg",revision:null},{url:"/img/6.63fc08f5.jpeg",revision:null},{url:"/img/7.d7d44b4d.jpeg",revision:null},{url:"/img/8.21292cb2.jpeg",revision:null},{url:"/img/9.2e449227.jpeg",revision:null},{url:"/img/arrow.1683ba44.svg",revision:null},{url:"/img/branca.b1383dc9.svg",revision:null},{url:"/img/cerveja.85ffe708.svg",revision:null},{url:"/img/cloud1.a96f1cc6.svg",revision:null},{url:"/img/cloud2.884aa962.svg",revision:null},{url:"/img/diabinho.d613c7ac.svg",revision:null},{url:"/img/fire.cb721a61.svg",revision:null},{url:"/img/fofo.444c7d9a.svg",revision:null},{url:"/img/hand.476a3cf4.svg",revision:null},{url:"/img/loading.5485b216.svg",revision:null},{url:"/img/paola.6c304b09.jpeg",revision:null},{url:"/img/pointer-down.021aa37f.svg",revision:null},{url:"/img/pointer.ecbff88d.svg",revision:null},{url:"/img/roleta.421050c2.svg",revision:null},{url:"/img/stars.8dc21680.svg",revision:null},{url:"/index.html",revision:"c49cd15a5e4fe2684971345bfd4f94a9"},{url:"/js/app.3de2022e.js",revision:null},{url:"/js/chunk-vendors.95a96ed0.js",revision:null},{url:"/manifest.json",revision:"894732ccdeb559fac288b26951eead11"},{url:"/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
