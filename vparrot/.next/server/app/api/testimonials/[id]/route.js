"use strict";(()=>{var t={};t.id=9407,t.ids=[9407],t.modules={53524:t=>{t.exports=require("@prisma/client")},30517:t=>{t.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},70276:(t,e,i)=>{i.r(e),i.d(e,{headerHooks:()=>S,originalPathname:()=>O,requestAsyncStorage:()=>y,routeModule:()=>p,serverHooks:()=>f,staticGenerationAsyncStorage:()=>w,staticGenerationBailout:()=>h});var s={};i.r(s),i.d(s,{DELETE:()=>m,GET:()=>u,POST:()=>d,PUT:()=>g}),i(95655);var a=i(83323),n=i(54647),r=i(66886),o=i(53524);let l=new o.PrismaClient,u=async t=>{let e=t.url.split("testimonials/")[1];try{let t=await l.testimonials.findFirst({where:{id:parseInt(e)}});if(console.log("id",e),console.log("testimonial",t),!t)return new r.Z(JSON.stringify({message:"T\xe9moignage non trouv\xe9"}),{status:404});return new r.Z(JSON.stringify(t),{status:200})}catch(t){return new r.Z(JSON.stringify({message:"Error fetching testimonial"}),{status:500})}finally{await l.$disconnect()}},d=async t=>{try{let e=await t.json();console.log("Request body:",e);let{name:i,date:s,rating:a,message:n,isValidated:o,status:u}=e,d=await l.testimonials.create({data:{name:i,date:s,rating:a,message:n,isValidated:void 0!==o&&o,status:u||"hors ligne"}});return await l.$disconnect(),new r.Z(JSON.stringify(d),{status:200})}catch(t){return console.log("Error creating testimonial:",t),new r.Z(JSON.stringify({message:"Error creating testimonial"}),{status:500})}},g=async t=>{try{let e=await t.json();if(console.log("Request body:",e),"number"!=typeof e.id)return new r.Z(JSON.stringify({message:"Invalid ID provided"}),{status:400});let i={where:{id:e.id},data:{name:e.name,date:e.date,rating:e.rating,message:e.message,isValidated:e.isValidated,status:e.status}};console.log("Prisma Update Query:",JSON.stringify(i,null,2));let s=await l.testimonials.update(i);return await l.$disconnect(),new r.Z(JSON.stringify(s),{status:200})}catch(t){return console.log("Error updating testimonial:",t),new r.Z(JSON.stringify({message:"Error updating testimonial"}),{status:500})}},m=async t=>{try{let e=parseInt(t.url.split("testimonials/")[1]);return await l.testimonials.delete({where:{id:e}}),new r.Z(JSON.stringify({message:"Testimonial deleted successfully"}),{status:200})}catch(t){return new r.Z(JSON.stringify({message:"Error deleting testimonial"}),{status:500})}finally{await l.$disconnect()}},c=a.AppRouteRouteModule,p=new c({definition:{kind:n.x.APP_ROUTE,page:"/api/testimonials/[id]/route",pathname:"/api/testimonials/[id]",filename:"route",bundlePath:"app/api/testimonials/[id]/route"},resolvedPagePath:"/Users/gabrielkhaldi/Desktop/Studi/Git/Studi/ECF/vparrot/app/api/testimonials/[id]/route.ts",nextConfigOutput:"",userland:s}),{requestAsyncStorage:y,staticGenerationAsyncStorage:w,serverHooks:f,headerHooks:S,staticGenerationBailout:h}=p,O="/api/testimonials/[id]/route"}};var e=require("../../../../webpack-runtime.js");e.C(t);var i=t=>e(e.s=t),s=e.X(0,[7882,3497,9727,6886],()=>i(70276));module.exports=s})();