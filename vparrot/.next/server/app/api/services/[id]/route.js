"use strict";
(() => {
var exports = {};
exports.id = 692;
exports.ids = [692];
exports.modules = {

/***/ 53524:
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ 22037:
/***/ ((module) => {

module.exports = require("os");

/***/ }),

/***/ 38274:
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

// NAMESPACE OBJECT: ./app/api/services/[id]/route.ts
var route_namespaceObject = {};
__webpack_require__.r(route_namespaceObject);
__webpack_require__.d(route_namespaceObject, {
  DELETE: () => (DELETE),
  GET: () => (GET),
  POST: () => (POST),
  PUT: () => (PUT)
});

// EXTERNAL MODULE: ./node_modules/next/dist/server/node-polyfill-headers.js
var node_polyfill_headers = __webpack_require__(42394);
// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-modules/app-route/module.js
var app_route_module = __webpack_require__(69692);
// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-kind.js
var route_kind = __webpack_require__(19513);
// EXTERNAL MODULE: ./node_modules/next/dist/server/web/exports/next-response.js
var next_response = __webpack_require__(89335);
// EXTERNAL MODULE: external "@prisma/client"
var client_ = __webpack_require__(53524);
;// CONCATENATED MODULE: ./app/api/services/[id]/route.ts


const prisma = new client_.PrismaClient();
// GET /api/services/[id]
const GET = async (request)=>{
    const id = request.url.split("services/")[1];
    try {
        const service = await prisma.services.findFirst({
            where: {
                id: parseInt(id)
            }
        });
        if (!service) {
            return new next_response/* default */.Z(JSON.stringify({
                message: "Service non trouv\xe9"
            }), {
                status: 404
            });
        }
        return new next_response/* default */.Z(JSON.stringify(service), {
            status: 200
        });
    } catch (err) {
        return new next_response/* default */.Z(JSON.stringify({
            message: "Erreur lors de la r\xe9cup\xe9ration du service"
        }), {
            status: 500
        });
    } finally{
        await prisma.$disconnect();
    }
};
// POST /api/services
const POST = async (request)=>{
    try {
        const body = await request.json();
        const { title, description, price } = body;
        const service = await prisma.services.create({
            data: {
                title,
                description
            }
        });
        return new next_response/* default */.Z(JSON.stringify(service), {
            status: 200
        });
    } catch (err) {
        return new next_response/* default */.Z(JSON.stringify({
            message: "Erreur lors de la cr\xe9ation du service"
        }), {
            status: 500
        });
    } finally{
        await prisma.$disconnect();
    }
};
// PUT /api/services
const PUT = async (request)=>{
    try {
        const body = await request.json();
        if (typeof body.id !== "number") {
            return new next_response/* default */.Z(JSON.stringify({
                message: "ID invalide fourni"
            }), {
                status: 400
            });
        }
        const service = await prisma.services.update({
            where: {
                id: body.id
            },
            data: {
                title: body.title,
                description: body.description
            }
        });
        return new next_response/* default */.Z(JSON.stringify(service), {
            status: 200
        });
    } catch (err) {
        return new next_response/* default */.Z(JSON.stringify({
            message: "Erreur lors de la mise \xe0 jour du service"
        }), {
            status: 500
        });
    } finally{
        await prisma.$disconnect();
    }
};
// DELETE /api/services/[id]
const DELETE = async (request)=>{
    try {
        const id = parseInt(request.url.split("services/")[1]);
        await prisma.services.delete({
            where: {
                id: id
            }
        });
        return new next_response/* default */.Z(JSON.stringify({
            message: "Service supprim\xe9 avec succ\xe8s"
        }), {
            status: 200
        });
    } catch (err) {
        return new next_response/* default */.Z(JSON.stringify({
            message: "Erreur lors de la suppression du service"
        }), {
            status: 500
        });
    } finally{
        await prisma.$disconnect();
    }
};

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?page=%2Fapi%2Fservices%2F%5Bid%5D%2Froute&name=app%2Fapi%2Fservices%2F%5Bid%5D%2Froute&pagePath=private-next-app-dir%2Fapi%2Fservices%2F%5Bid%5D%2Froute.ts&appDir=%2FUsers%2Fgabrielkhaldi%2FDesktop%2FStudi%2FGit%2FStudi%2FECF%2Fvparrot%2Fapp&appPaths=%2Fapi%2Fservices%2F%5Bid%5D%2Froute&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!

// @ts-ignore this need to be imported from next/dist to be external


// @ts-expect-error - replaced by webpack/turbopack loader

const AppRouteRouteModule = app_route_module.AppRouteRouteModule;
// We inject the nextConfigOutput here so that we can use them in the route
// module.
const nextConfigOutput = ""
const routeModule = new AppRouteRouteModule({
    definition: {
        kind: route_kind.RouteKind.APP_ROUTE,
        page: "/api/services/[id]/route",
        pathname: "/api/services/[id]",
        filename: "route",
        bundlePath: "app/api/services/[id]/route"
    },
    resolvedPagePath: "/Users/gabrielkhaldi/Desktop/Studi/Git/Studi/ECF/vparrot/app/api/services/[id]/route.ts",
    nextConfigOutput,
    userland: route_namespaceObject
});
// Pull out the exports that we need to expose from the module. This should
// be eliminated when we've moved the other routes to the new format. These
// are used to hook into the route.
const { requestAsyncStorage , staticGenerationAsyncStorage , serverHooks , headerHooks , staticGenerationBailout  } = routeModule;
const originalPathname = "/api/services/[id]/route";


//# sourceMappingURL=app-route.js.map

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [3587,4937,5501,9335], () => (__webpack_exec__(38274)));
module.exports = __webpack_exports__;

})();