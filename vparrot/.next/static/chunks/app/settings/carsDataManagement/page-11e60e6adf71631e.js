(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[504],{87912:function(e,r,s){"use strict";var t=s(26314);r.Z=void 0;var a=t(s(80984)),n=s(57437),c=(0,a.default)((0,n.jsx)("path",{d:"M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z"}),"DirectionsCar");r.Z=c},82303:function(e,r,s){"use strict";var t=s(26314);r.Z=void 0;var a=t(s(80984)),n=s(57437),c=(0,a.default)((0,n.jsx)("path",{d:"M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"}),"Home");r.Z=c},86668:function(e,r,s){"use strict";var t=s(26314);r.Z=void 0;var a=t(s(80984)),n=s(57437),c=(0,a.default)((0,n.jsx)("path",{d:"M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V8l8 5 8-5v10zm-8-7L4 6h16l-8 5z"}),"MailOutline");r.Z=c},33471:function(e,r,s){"use strict";var t=s(26314);r.Z=void 0;var a=t(s(80984)),n=s(57437),c=(0,a.default)([(0,n.jsx)("circle",{cx:"10",cy:"8",r:"4"},"0"),(0,n.jsx)("path",{d:"M10.67 13.02c-.22-.01-.44-.02-.67-.02-2.42 0-4.68.67-6.61 1.82-.88.52-1.39 1.5-1.39 2.53V20h9.26c-.79-1.13-1.26-2.51-1.26-4 0-1.07.25-2.07.67-2.98zM20.75 16c0-.22-.03-.42-.06-.63l1.14-1.01-1-1.73-1.45.49c-.32-.27-.68-.48-1.08-.63L18 11h-2l-.3 1.49c-.4.15-.76.36-1.08.63l-1.45-.49-1 1.73 1.14 1.01c-.03.21-.06.41-.06.63s.03.42.06.63l-1.14 1.01 1 1.73 1.45-.49c.32.27.68.48 1.08.63L16 21h2l.3-1.49c.4-.15.76-.36 1.08-.63l1.45.49 1-1.73-1.14-1.01c.03-.21.06-.41.06-.63zM17 18c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"},"1")],"ManageAccounts");r.Z=c},42948:function(e,r,s){"use strict";var t=s(26314);r.Z=void 0;var a=t(s(80984)),n=s(57437),c=(0,a.default)((0,n.jsx)("path",{d:"m22 9.24-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4V6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"}),"StarHalf");r.Z=c},2640:function(e,r,s){Promise.resolve().then(s.bind(s,56986))},95433:function(e,r,s){"use strict";s.r(r);var t=s(57437),a=s(2265),n=s(43560),c=s(29222);r.default=()=>{let[e,r]=(0,a.useState)(!1),[s,i]=(0,a.useState)({title:"",description:"",price:0,imageURL:"",subRows:[]}),[l,o]=(0,a.useState)([]);(0,a.useEffect)(()=>{let e=async()=>{try{let e=await c.Z.get("/api/cars");o(e.data)}catch(e){console.error("Erreur lors de la r\xe9cup\xe9ration des donn\xe9es des voitures :",e)}};e()},[]);let d=(0,a.useMemo)(()=>[{accessorKey:"id",header:"ID",size:80},{accessorKey:"title",header:"Titre",size:140},{accessorKey:"description",header:"Description",size:140},{accessorKey:"price",header:"Prix",size:80},{accessorKey:"imageUrl",header:"Image",size:80}],[]);return(0,t.jsx)("div",{children:(0,t.jsx)(n.ZP,{getSubRows:(e,r)=>e.subRows||void 0,displayColumnDefOptions:{"mrt-row-actions":{muiTableHeadCellProps:{align:"center"},size:120}},columns:d,data:l,editingMode:"modal",enableColumnOrdering:!0,enableExpanding:!0})})}},29821:function(e,r,s){"use strict";s.r(r);var t=s(57437),a=s(86668),n=s(82303),c=s(87912),i=s(33471),l=s(42948),o=s(61396),d=s.n(o),u=s(2265),h=s(82749);function m(){for(var e=arguments.length,r=Array(e),s=0;s<e;s++)r[s]=arguments[s];return r.filter(Boolean).join(" ")}r.default=function(e){let{}=e,[r,s]=(0,u.useState)("Dashboard"),o=[{name:"Dashboard",href:"/settings",icon:n.Z,current:!0},{name:"Cars",href:"/settings/carsDataManagement",icon:c.Z,current:!1,submenu:[{name:"Add Car",href:"/settings/carsDataManagement/addCarForm",current:!1}]},{name:"Users",href:"/settings/userProfile",icon:i.Z,current:!1,submenu:[{name:"Add User",href:"/settings/userProfile/addUser",current:!1}]},{name:"Reviews",href:"/settings/testimonailsManagement",icon:l.Z,current:!1,submenu:[{name:"Add Review",href:"/settings/testimonailsManagement/addReview",current:!1}]},{name:"Messages",href:"#",icon:a.Z,current:!1}];return(0,t.jsx)("div",{id:"sidebar",className:" h-screen lg:inset-y-0 lg:flex lg:w-72 lg:flex-col",children:(0,t.jsxs)("div",{className:"flex justify-between grow flex-col gap-y-5 overflow-y-auto bg-white px-6 pb-4  rounded-lg border-r-2",children:[(0,t.jsx)("h1",{className:"text-3-xl font-bold",children:"Logo"}),(0,t.jsx)("nav",{className:" flex flex-col",children:(0,t.jsx)("ul",{role:"list",className:"flex flex-l flex-col gap-y-7",children:(0,t.jsx)("li",{children:(0,t.jsx)("ul",{role:"list",className:"-mx-2 space-y-4",children:o.map(e=>(0,t.jsxs)("li",{className:"px-2",children:[(0,t.jsxs)(d(),{href:"".concat(e.href,"/#sidebar"),className:m(e.current?"bg-gray-100 text-gray-900":"text-gray-600 hover:bg-gray-50 hover:text-gray-900","group flex items-center px-2 py-2 text-sm font-medium rounded-md"),onClick:r=>s(e.name),children:[(0,t.jsx)(e.icon,{className:m(e.current?"text-gray-500":"text-gray-400 group-hover:text-gray-500","mr-3 flex-shrink-0 h-6 w-6"),"aria-hidden":"true"}),e.name]}),e.submenu&&(0,t.jsx)("ul",{className:"pl-6 space-y-2",children:e.submenu.map(e=>(0,t.jsx)("li",{children:(0,t.jsx)(d(),{href:"".concat(e.href,"/#sidebar"),className:m("text-gray-600 hover:bg-gray-50 hover:text-gray-900","group flex items-center px-10 py-1 text-sm font-medium rounded-md"),children:e.name})},e.name))})]},e.name))})})})}),(0,t.jsxs)("div",{children:[(0,t.jsx)("button",{onClick:()=>(0,h.signOut)(),className:"btn bg-red-500 w-1/2  mx-auto text-white p-2 rounded-lg",children:"Sign Out"}),(0,t.jsx)("button",{onClick:()=>(0,h.signIn)(),className:"btn btn-primary w-1/2 mx-auto text-white p-2 rounded-lg",children:"Sign In"})]})]})})}},56986:function(e,r,s){"use strict";s.r(r);var t=s(57437),a=s(2265),n=s(29821),c=s(95433);r.default=()=>{let[e,r]=(0,a.useState)(!1);return(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)("div",{className:"flex",children:[(0,t.jsx)(n.default,{})," ",(0,t.jsxs)("div",{className:"flex flex-col w-full m-4 gap-4 align-center",children:[(0,t.jsx)("h2",{className:"text-center",children:" CAR DATA"}),(0,t.jsx)(c.default,{})]})]})})}}},function(e){e.O(0,[683,750,454,396,341,749,646,971,864,744],function(){return e(e.s=2640)}),_N_E=e.O()}]);