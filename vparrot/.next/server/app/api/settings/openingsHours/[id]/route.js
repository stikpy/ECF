"use strict";(()=>{var e={};e.id=8450,e.ids=[8450],e.modules={53524:e=>{e.exports=require("@prisma/client")},30517:e=>{e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},31454:(e,t,s)=>{s.r(t),s.d(t,{headerHooks:()=>m,originalPathname:()=>h,requestAsyncStorage:()=>y,routeModule:()=>c,serverHooks:()=>f,staticGenerationAsyncStorage:()=>w,staticGenerationBailout:()=>S});var r={};s.r(r),s.d(r,{DELETE:()=>g,GET:()=>d,PUT:()=>p}),s(95655);var i=s(83323),n=s(54647),a=s(66886),o=s(53524);let u=new o.PrismaClient,d=async e=>{let t=e.url.split("openingsHours/")[1];try{let e=await u.openingHours.findFirst({where:{id:parseInt(t)}});if(!e)return new a.Z(JSON.stringify({message:"Creneau non trouv\xe9"}),{status:404});return new a.Z(JSON.stringify(e),{status:200})}catch(e){return new a.Z(JSON.stringify({message:"Error fetching openingsHours"}),{status:500})}finally{await u.$disconnect()}},p=async e=>{try{let t=await e.json();if(console.log("Request body:",t),"number"!=typeof t.id)return new a.Z(JSON.stringify({message:"Invalid ID provided"}),{status:400});let s={where:{id:t.id},data:{day:t.day,timeSlots:t.timeSlots}};console.log("Prisma Update Query:",JSON.stringify(s,null,2));let r=await u.openingHours.update(s);return await u.$disconnect(),new a.Z(JSON.stringify(r),{status:200})}catch(e){return console.log("Error updating hours:",e),new a.Z(JSON.stringify({message:"Error updating openingHours"}),{status:500})}},g=async e=>{try{let t=parseInt(e.url.split("openingsHours/")[1]);return await u.openingHours.delete({where:{id:t}}),new a.Z(JSON.stringify({message:"Day deleted successfully"}),{status:200})}catch(e){return new a.Z(JSON.stringify({message:"Error deleting day"}),{status:500})}finally{await u.$disconnect()}},l=i.AppRouteRouteModule,c=new l({definition:{kind:n.x.APP_ROUTE,page:"/api/settings/openingsHours/[id]/route",pathname:"/api/settings/openingsHours/[id]",filename:"route",bundlePath:"app/api/settings/openingsHours/[id]/route"},resolvedPagePath:"/Users/gabrielkhaldi/Desktop/Studi/Git/Studi/ECF/vparrot/app/api/settings/openingsHours/[id]/route.ts",nextConfigOutput:"",userland:r}),{requestAsyncStorage:y,staticGenerationAsyncStorage:w,serverHooks:f,headerHooks:m,staticGenerationBailout:S}=c,h="/api/settings/openingsHours/[id]/route"}};var t=require("../../../../../webpack-runtime.js");t.C(e);var s=e=>t(t.s=e),r=t.X(0,[7882,3497,9727,6886],()=>s(31454));module.exports=r})();