"use strict";
(() => {
var exports = {};
exports.id = 7499;
exports.ids = [7499];
exports.modules = {

/***/ 53524:
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ 22037:
/***/ ((module) => {

module.exports = require("os");

/***/ }),

/***/ 68764:
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

// NAMESPACE OBJECT: ./app/api/cars/[id]/route.tsx
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
;// CONCATENATED MODULE: ./app/api/cars/[id]/route.tsx


const prisma = new client_.PrismaClient();
// GET /api/cars/[id]
const GET = async (request)=>{
    const id = request.url.split("cars/")[1];
    try {
        const car = await prisma.carPosts.findFirst({
            where: {
                id: parseInt(id)
            }
        });
        if (!car) {
            return new next_response/* default */.Z(JSON.stringify({
                message: "Voiture non trouv\xe9e"
            }), {
                status: 404
            });
        }
        console.log("car", car);
        return new next_response/* default */.Z(JSON.stringify(car), {
            status: 200,
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
                "Access-Control-Allow-Headers": "Content-Type, Authorization"
            }
        });
    } catch (err) {
        return new next_response/* default */.Z(JSON.stringify({
            message: "Erreur lors de la r\xe9cup\xe9ration de la voiture"
        }), {
            status: 500
        });
    } finally{
        await prisma.$disconnect();
    }
};
// POST /api/cars
const POST = async (request)=>{
    try {
        const body = await request.json();
        const { title, description, price, imageUrl } = body;
        const car = await prisma.carPosts.create({
            data: {
                title,
                description,
                price,
                imageUrl: imageUrl,
                users: {
                }
            },
            include: {
                users: true
            }
        });
        return new next_response/* default */.Z(JSON.stringify(car), {
            status: 200
        });
    } catch (err) {
        return new next_response/* default */.Z(JSON.stringify({
            message: "Erreur lors de la cr\xe9ation de la voiture"
        }), {
            status: 500
        });
    } finally{
        await prisma.$disconnect();
    }
};
// PUT /api/cars
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
        const updateQuery = {
            where: {
                id: body.id
            },
            data: {
                title: body.title,
                description: body.description,
                price: body.price,
                imageUrl: body.imageUrl,
                slug: body.slug
            },
            include: {
                users: true
            }
        };
        const car = await prisma.carPosts.update(updateQuery);
        return new next_response/* default */.Z(JSON.stringify(car), {
            status: 200
        });
    } catch (err) {
        return new next_response/* default */.Z(JSON.stringify({
            message: "Erreur lors de la mise \xe0 jour de la voiture"
        }), {
            status: 500
        });
    } finally{
        await prisma.$disconnect();
    }
};
// DELETE /api/cars/[id]
const DELETE = async (request)=>{
    try {
        const id = parseInt(request.url.split("carsPosts/")[1]);
        await prisma.carPosts.delete({
            where: {
                id: id
            }
        });
        return new next_response/* default */.Z(JSON.stringify({
            message: "Voiture supprim\xe9e avec succ\xe8s"
        }), {
            status: 200
        });
    } catch (err) {
        return new next_response/* default */.Z(JSON.stringify({
            message: "Erreur lors de la suppression de la voiture"
        }), {
            status: 500
        });
    } finally{
        await prisma.$disconnect();
    }
};

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?page=%2Fapi%2Fcars%2F%5Bid%5D%2Froute&name=app%2Fapi%2Fcars%2F%5Bid%5D%2Froute&pagePath=private-next-app-dir%2Fapi%2Fcars%2F%5Bid%5D%2Froute.tsx&appDir=%2FUsers%2Fgabrielkhaldi%2FDesktop%2FStudi%2FGit%2FStudi%2FECF%2Fvparrot%2Fapp&appPaths=%2Fapi%2Fcars%2F%5Bid%5D%2Froute&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!

// @ts-ignore this need to be imported from next/dist to be external


// @ts-expect-error - replaced by webpack/turbopack loader

const AppRouteRouteModule = app_route_module.AppRouteRouteModule;
// We inject the nextConfigOutput here so that we can use them in the route
// module.
const nextConfigOutput = ""
const routeModule = new AppRouteRouteModule({
    definition: {
        kind: route_kind.RouteKind.APP_ROUTE,
        page: "/api/cars/[id]/route",
        pathname: "/api/cars/[id]",
        filename: "route",
        bundlePath: "app/api/cars/[id]/route"
    },
    resolvedPagePath: "/Users/gabrielkhaldi/Desktop/Studi/Git/Studi/ECF/vparrot/app/api/cars/[id]/route.tsx",
    nextConfigOutput,
    userland: route_namespaceObject
});
// Pull out the exports that we need to expose from the module. This should
// be eliminated when we've moved the other routes to the new format. These
// are used to hook into the route.
const { requestAsyncStorage , staticGenerationAsyncStorage , serverHooks , headerHooks , staticGenerationBailout  } = routeModule;
const originalPathname = "/api/cars/[id]/route";


//# sourceMappingURL=app-route.js.map

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [3587,4937,5501,9335], () => (__webpack_exec__(68764)));
module.exports = __webpack_exports__;

})();