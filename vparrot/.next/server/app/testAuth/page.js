(()=>{var e={};e.id=2726,e.ids=[2726],e.modules={53524:e=>{"use strict";e.exports=require("@prisma/client")},67096:e=>{"use strict";e.exports=require("bcrypt")},72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},55403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},94749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},39491:e=>{"use strict";e.exports=require("assert")},14300:e=>{"use strict";e.exports=require("buffer")},6113:e=>{"use strict";e.exports=require("crypto")},82361:e=>{"use strict";e.exports=require("events")},57147:e=>{"use strict";e.exports=require("fs")},13685:e=>{"use strict";e.exports=require("http")},95687:e=>{"use strict";e.exports=require("https")},70612:e=>{"use strict";e.exports=require("node:os")},97742:e=>{"use strict";e.exports=require("node:process")},25997:e=>{"use strict";e.exports=require("node:tty")},71017:e=>{"use strict";e.exports=require("path")},63477:e=>{"use strict";e.exports=require("querystring")},12781:e=>{"use strict";e.exports=require("stream")},76224:e=>{"use strict";e.exports=require("tty")},57310:e=>{"use strict";e.exports=require("url")},73837:e=>{"use strict";e.exports=require("util")},59796:e=>{"use strict";e.exports=require("zlib")},50979:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>a.a,__next_app__:()=>x,originalPathname:()=>d,pages:()=>c,routeModule:()=>h,tree:()=>l});var s=r(73137),i=r(54647),o=r(4183),a=r.n(o),n=r(71775),u={};for(let e in n)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(u[e]=()=>n[e]);r.d(t,u);let p=s.AppPageRouteModule,l=["",{children:["testAuth",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,72687)),"/Users/gabrielkhaldi/Desktop/Studi/Git/Studi/ECF/vparrot/app/testAuth/page.tsx"]}]},{metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,57481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(r.bind(r,17411)),"/Users/gabrielkhaldi/Desktop/Studi/Git/Studi/ECF/vparrot/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,51918,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,57481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],c=["/Users/gabrielkhaldi/Desktop/Studi/Git/Studi/ECF/vparrot/app/testAuth/page.tsx"],d="/testAuth/page",x={require:r,loadChunk:()=>Promise.resolve()},h=new p({definition:{kind:i.x.APP_PAGE,page:"/testAuth/page",pathname:"/testAuth",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:l}})},12041:(e,t,r)=>{Promise.resolve().then(r.bind(r,82763)),Promise.resolve().then(r.bind(r,43492))},43492:(e,t,r)=>{"use strict";r.r(t),r.d(t,{User:()=>o});var s=r(60080),i=r(74284);let o=()=>{let{data:e}=(0,i.useSession)();return console.log("user",e),s.jsx("pre",{children:JSON.stringify(e)})}},72687:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>x});var s=r(48144);r(53830);var i=r(33177),o=r(3471),a=r(17536);let n=(0,a.createProxy)(String.raw`/Users/gabrielkhaldi/Desktop/Studi/Git/Studi/ECF/vparrot/app/user.tsx`),{__esModule:u,$$typeof:p}=n;n.default;let l=n.User;var c=r(20375);async function d(){let e=await (0,o.getServerSession)(i.authOptions);return console.log(e),(0,s.jsxs)(s.Fragment,{children:[s.jsx(c.ZP,{}),s.jsx("p",{children:"SERVER CALL"}),s.jsx("p",{children:"CLIENT CALL"}),s.jsx(l,{})]})}let x=d}};var t=require("../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),s=t.X(0,[7882,5020,3360,6885,3497,5952,6479,1697,3177,2937],()=>r(50979));module.exports=s})();