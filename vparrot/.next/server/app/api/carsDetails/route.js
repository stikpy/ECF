"use strict";
(() => {
var exports = {};
exports.id = 9874;
exports.ids = [9874];
exports.modules = {

/***/ 53524:
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ 22037:
/***/ ((module) => {

module.exports = require("os");

/***/ }),

/***/ 84520:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  headerHooks: () => (/* binding */ headerHooks),
  originalPathname: () => (/* binding */ originalPathname),
  requestAsyncStorage: () => (/* binding */ requestAsyncStorage),
  routeModule: () => (/* binding */ routeModule),
  serverHooks: () => (/* binding */ serverHooks),
  staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage),
  staticGenerationBailout: () => (/* binding */ staticGenerationBailout)
});

// NAMESPACE OBJECT: ./app/api/carsDetails/route.ts
var route_namespaceObject = {};
__webpack_require__.r(route_namespaceObject);

// EXTERNAL MODULE: ./node_modules/next/dist/server/node-polyfill-headers.js
var node_polyfill_headers = __webpack_require__(42394);
// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-modules/app-route/module.js
var app_route_module = __webpack_require__(69692);
// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-kind.js
var route_kind = __webpack_require__(19513);
// EXTERNAL MODULE: external "@prisma/client"
var client_ = __webpack_require__(53524);
;// CONCATENATED MODULE: ./app/api/carsDetails/route.ts

const prisma = new client_.PrismaClient(); // export async function GET(request: NextRequest) {
 //     try {
 //         const cardetailsWithRelations = await  prisma.cardetails.findMany({
 //             include: {
 //                 gearbox: true,
 //                 carPosts: true,
 //                 exteriorcolor: true,
 //                 critair: true,
 //                 emissionco2: true,
 //                 energy: true,
 //                 eurostandard: true,
 //                 origin: true,
 //                 upholstery: true,
 //             }
 //         });
 //         return new NextResponse(JSON.stringify(cardetailsWithRelations), { status: 200 });
 //     } catch (err) {
 //         console.error('Error fetching car details:', err);
 //         return new NextResponse(JSON.stringify({ message: 'Error fetching car details' }), { status: 500 });
 //     } finally {
 //         await prisma.$disconnect();
 //     }
 // };

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?page=%2Fapi%2FcarsDetails%2Froute&name=app%2Fapi%2FcarsDetails%2Froute&pagePath=private-next-app-dir%2Fapi%2FcarsDetails%2Froute.ts&appDir=%2FUsers%2Fgabrielkhaldi%2FDesktop%2FStudi%2FGit%2FStudi%2FECF%2Fvparrot%2Fapp&appPaths=%2Fapi%2FcarsDetails%2Froute&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!

// @ts-ignore this need to be imported from next/dist to be external


// @ts-expect-error - replaced by webpack/turbopack loader

const AppRouteRouteModule = app_route_module.AppRouteRouteModule;
// We inject the nextConfigOutput here so that we can use them in the route
// module.
const nextConfigOutput = ""
const routeModule = new AppRouteRouteModule({
    definition: {
        kind: route_kind.RouteKind.APP_ROUTE,
        page: "/api/carsDetails/route",
        pathname: "/api/carsDetails",
        filename: "route",
        bundlePath: "app/api/carsDetails/route"
    },
    resolvedPagePath: "/Users/gabrielkhaldi/Desktop/Studi/Git/Studi/ECF/vparrot/app/api/carsDetails/route.ts",
    nextConfigOutput,
    userland: route_namespaceObject
});
// Pull out the exports that we need to expose from the module. This should
// be eliminated when we've moved the other routes to the new format. These
// are used to hook into the route.
const { requestAsyncStorage , staticGenerationAsyncStorage , serverHooks , headerHooks , staticGenerationBailout  } = routeModule;
const originalPathname = "/api/carsDetails/route";


//# sourceMappingURL=app-route.js.map

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [3587,4937,5501], () => (__webpack_exec__(84520)));
module.exports = __webpack_exports__;

})();