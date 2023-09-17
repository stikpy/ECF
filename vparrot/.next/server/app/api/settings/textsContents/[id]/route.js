"use strict";
(() => {
var exports = {};
exports.id = 4930;
exports.ids = [4930];
exports.modules = {

/***/ 53524:
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ 22037:
/***/ ((module) => {

module.exports = require("os");

/***/ }),

/***/ 12658:
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

// NAMESPACE OBJECT: ./app/api/settings/textsContents/[id]/route.ts
var route_namespaceObject = {};
__webpack_require__.r(route_namespaceObject);
__webpack_require__.d(route_namespaceObject, {
  GET: () => (GET),
  PUT: () => (PUT)
});

// EXTERNAL MODULE: ./node_modules/next/dist/server/node-polyfill-headers.js
var node_polyfill_headers = __webpack_require__(42394);
// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-modules/app-route/module.js
var app_route_module = __webpack_require__(69692);
// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-kind.js
var route_kind = __webpack_require__(19513);
// EXTERNAL MODULE: external "@prisma/client"
var client_ = __webpack_require__(53524);
// EXTERNAL MODULE: ./node_modules/next/dist/server/web/exports/next-response.js
var next_response = __webpack_require__(89335);
;// CONCATENATED MODULE: ./app/api/settings/textsContents/[id]/route.ts


const prisma = new client_.PrismaClient();
const GET = async (request)=>{
    const slug = request.url.split("textsContents/")[1];
    try {
        const content = await prisma.textContent.findFirst({
            where: {
                slug: slug
            }
        });
        if (!content) {
            return new next_response/* default */.Z(JSON.stringify({
                message: "Contenu non trouv\xe9"
            }), {
                status: 404
            });
        }
    } catch (err) {
        console.error("Erreur lors de la r\xe9cup\xe9ration du contenu:", err);
        return new next_response/* default */.Z(JSON.stringify({
            message: "Erreur lors de la r\xe9cup\xe9ration du contenu"
        }), {
            status: 500
        });
    } finally{
        await prisma.$disconnect();
    }
};
const PUT = async (request)=>{
    try {
        const body = await request.json();
        console.log("Request body:", body);
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
                content: body.content
            }
        };
        console.log("Requ\xeate de mise \xe0 jour Prisma:", JSON.stringify(updateQuery, null, 2));
        const updatedContent = await prisma.textContent.update(updateQuery);
        await prisma.$disconnect(); // Déconnexion de Prisma après utilisation
        return new next_response/* default */.Z(JSON.stringify(updatedContent), {
            status: 200
        });
    } catch (err) {
        console.error("Erreur lors de la mise \xe0 jour du contenu:", err);
        return new next_response/* default */.Z(JSON.stringify({
            message: "Erreur lors de la mise \xe0 jour du contenu"
        }), {
            status: 500
        });
    }
};

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?page=%2Fapi%2Fsettings%2FtextsContents%2F%5Bid%5D%2Froute&name=app%2Fapi%2Fsettings%2FtextsContents%2F%5Bid%5D%2Froute&pagePath=private-next-app-dir%2Fapi%2Fsettings%2FtextsContents%2F%5Bid%5D%2Froute.ts&appDir=%2FUsers%2Fgabrielkhaldi%2FDesktop%2FStudi%2FGit%2FStudi%2FECF%2Fvparrot%2Fapp&appPaths=%2Fapi%2Fsettings%2FtextsContents%2F%5Bid%5D%2Froute&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!

// @ts-ignore this need to be imported from next/dist to be external


// @ts-expect-error - replaced by webpack/turbopack loader

const AppRouteRouteModule = app_route_module.AppRouteRouteModule;
// We inject the nextConfigOutput here so that we can use them in the route
// module.
const nextConfigOutput = ""
const routeModule = new AppRouteRouteModule({
    definition: {
        kind: route_kind.RouteKind.APP_ROUTE,
        page: "/api/settings/textsContents/[id]/route",
        pathname: "/api/settings/textsContents/[id]",
        filename: "route",
        bundlePath: "app/api/settings/textsContents/[id]/route"
    },
    resolvedPagePath: "/Users/gabrielkhaldi/Desktop/Studi/Git/Studi/ECF/vparrot/app/api/settings/textsContents/[id]/route.ts",
    nextConfigOutput,
    userland: route_namespaceObject
});
// Pull out the exports that we need to expose from the module. This should
// be eliminated when we've moved the other routes to the new format. These
// are used to hook into the route.
const { requestAsyncStorage , staticGenerationAsyncStorage , serverHooks , headerHooks , staticGenerationBailout  } = routeModule;
const originalPathname = "/api/settings/textsContents/[id]/route";


//# sourceMappingURL=app-route.js.map

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [3587,4937,5501,9335], () => (__webpack_exec__(12658)));
module.exports = __webpack_exports__;

})();