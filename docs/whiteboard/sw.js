if(!self.define){let s,e={};const l=(l,i)=>(l=new URL(l+".js",i).href,e[l]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=e,document.head.appendChild(s)}else s=l,importScripts(l),e()})).then((()=>{let s=e[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(i,n)=>{const r=s||("document"in self?document.currentScript.src:"")||location.href;if(e[r])return;let a={};const u=s=>l(s,r),o={module:{uri:r},exports:a,require:u};e[r]=Promise.all(i.map((s=>o[s]||u(s)))).then((s=>(n(...s),a)))}}define(["./workbox-e5b2ea8b"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"assets/_commonjs-dynamic-modules-TDtrdbi3.js",revision:null},{url:"assets/arc-CydDKzIO.js",revision:null},{url:"assets/array-BKyUJesY.js",revision:null},{url:"assets/blockDiagram-91b80b7a-Qw5bI28p.js",revision:null},{url:"assets/bug-issue-template-BID_ABWq.js",revision:null},{url:"assets/c4Diagram-b2a90758-7aOztvyC.js",revision:null},{url:"assets/channel-BgK48cc_.js",revision:null},{url:"assets/classDiagram-30eddba6-D49QikgF.js",revision:null},{url:"assets/classDiagram-v2-f2df5561-BLujKucB.js",revision:null},{url:"assets/clone-Cz3Sucng.js",revision:null},{url:"assets/createText-6b48ae7d-CAEnKWSH.js",revision:null},{url:"assets/directory-open-01563666-DWU9wJ6I.js",revision:null},{url:"assets/directory-open-4ed118d0-BNgAhb94.js",revision:null},{url:"assets/edges-d32062c0-BhVsuLwO.js",revision:null},{url:"assets/erDiagram-47591fe2-BZiPl8x_.js",revision:null},{url:"assets/file-open-002ab408-CQ9a1yTP.js",revision:null},{url:"assets/file-open-7c801643-CD3BRLr1.js",revision:null},{url:"assets/file-save-3189631c-x92wctJd.js",revision:null},{url:"assets/file-save-745eba88-D6MGJDcB.js",revision:null},{url:"assets/flowchart-elk-definition-5fe447d6-bv64ORIG.js",revision:null},{url:"assets/flowDb-4b19a42f-DZ-E3M7H.js",revision:null},{url:"assets/flowDiagram-5540d9b9-D0dU0B0a.js",revision:null},{url:"assets/flowDiagram-v2-3b53844e-DuIoLPTL.js",revision:null},{url:"assets/ganttDiagram-9a3bba1f-PgequBJB.js",revision:null},{url:"assets/gitGraphDiagram-96e6b4ee-H--IeZXF.js",revision:null},{url:"assets/graph-CCcadJLi.js",revision:null},{url:"assets/image-blob-reduce.esm-xKov1Fz_.js",revision:null},{url:"assets/index-ChGp7972.js",revision:null},{url:"assets/index-DEA2_ay6.css",revision:null},{url:"assets/index-DVoUJBX9.js",revision:null},{url:"assets/index-Dx80Vs0q.js",revision:null},{url:"assets/index-fc10efb0-D8fJ6VTi.js",revision:null},{url:"assets/index.esm-3YaDRnyu.js",revision:null},{url:"assets/index.esm-BD2mTKHF.js",revision:null},{url:"assets/index.esm-BWBthhta.js",revision:null},{url:"assets/index.esm-DO9nMFq0.js",revision:null},{url:"assets/infoDiagram-bcd20f53-DZqd1OqW.js",revision:null},{url:"assets/init-Gi6I4Gst.js",revision:null},{url:"assets/journeyDiagram-4fe6b3dc-C2FbiRhp.js",revision:null},{url:"assets/katex-rPiVaalG.js",revision:null},{url:"assets/layout-C7LKTXUS.js",revision:null},{url:"assets/line-Cw1vC2Mf.js",revision:null},{url:"assets/linear-CUVxFMVb.js",revision:null},{url:"assets/mindmap-definition-f354de21-e_wnZi-x.js",revision:null},{url:"assets/ordinal-Cboi1Yqb.js",revision:null},{url:"assets/path-CbwjOpE9.js",revision:null},{url:"assets/pica-CBfxuY6H.js",revision:null},{url:"assets/pieDiagram-79897490-BLKv2axk.js",revision:null},{url:"assets/quadrantDiagram-62f64e94-CLXnu16C.js",revision:null},{url:"assets/random-username.esm-__vdrxyo.js",revision:null},{url:"assets/requirementDiagram-05bf5f74-CilGrxTy.js",revision:null},{url:"assets/roundRect-0PYZxl1G.js",revision:null},{url:"assets/sankeyDiagram-97764748-WW3tKqHb.js",revision:null},{url:"assets/sequenceDiagram-acc0e65c-DxljxK8B.js",revision:null},{url:"assets/stateDiagram-0ff1cf1a-B1fwfBZM.js",revision:null},{url:"assets/stateDiagram-v2-9a9d610d-CGgH2IGA.js",revision:null},{url:"assets/styles-3ed67cfa-B5sN1B3_.js",revision:null},{url:"assets/styles-991ebdfc-CSb6HoEk.js",revision:null},{url:"assets/styles-d20c7d72-C02DfBuH.js",revision:null},{url:"assets/svgDrawCommon-5ccd53ef-snus2wAX.js",revision:null},{url:"assets/Tableau10-B-NsZVaP.js",revision:null},{url:"assets/timeline-definition-fea2a41d-CX4EDfnO.js",revision:null},{url:"assets/workbox-window.prod.es5-D5gOYdM7.js",revision:null},{url:"assets/xychartDiagram-ab372869-BWY1oXpg.js",revision:null},{url:"index.html",revision:"1edee1917bcc665aacdb068ce0393d68"},{url:"android-chrome-192x192.png",revision:"3d005c71b9ea629a8d137916a02ce9af"},{url:"apple-touch-icon.png",revision:"a9b855bc4fa588808a72c126fa9ade00"},{url:"favicon-32x32.png",revision:"1bcbbaf7639d13ce6e4abbd4a785f3dd"},{url:"favicon-16x16.png",revision:"6fc51d9533178efaec96f5c3c1f4c357"},{url:"manifest.webmanifest",revision:"32940221b0f79f23fbd72cc42b202d25"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html"))),s.registerRoute(/\/.+.(ttf|woff2|otf)/,new s.CacheFirst({cacheName:"fonts",plugins:[new s.ExpirationPlugin({maxEntries:50,maxAgeSeconds:7776e3})]}),"GET"),s.registerRoute(/fonts.css/,new s.StaleWhileRevalidate({cacheName:"fonts",plugins:[new s.ExpirationPlugin({maxEntries:50})]}),"GET"),s.registerRoute(/locales\/[^/]+.js/,new s.CacheFirst({cacheName:"locales",plugins:[new s.ExpirationPlugin({maxEntries:50,maxAgeSeconds:2592e3})]}),"GET")}));
//# sourceMappingURL=sw.js.map
