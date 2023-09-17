"use strict";
(() => {
var exports = {};
exports.id = 4305;
exports.ids = [4305];
exports.modules = {

/***/ 53524:
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ 22037:
/***/ ((module) => {

module.exports = require("os");

/***/ }),

/***/ 98023:
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

// NAMESPACE OBJECT: ./app/api/auth/profile/admin/[id]/route.tsx
var route_namespaceObject = {};
__webpack_require__.r(route_namespaceObject);
__webpack_require__.d(route_namespaceObject, {
  DELETE: () => (DELETE),
  GET: () => (GET),
  PUT: () => (PUT)
});

// EXTERNAL MODULE: ./node_modules/.pnpm/next@13.4.19_@babel+core@7.22.20_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/server/node-polyfill-headers.js
var node_polyfill_headers = __webpack_require__(53088);
// EXTERNAL MODULE: ./node_modules/.pnpm/next@13.4.19_@babel+core@7.22.20_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/server/future/route-modules/app-route/module.js
var app_route_module = __webpack_require__(17358);
// EXTERNAL MODULE: ./node_modules/.pnpm/next@13.4.19_@babel+core@7.22.20_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/server/future/route-kind.js
var route_kind = __webpack_require__(19916);
// EXTERNAL MODULE: external "@prisma/client"
var client_ = __webpack_require__(53524);
// EXTERNAL MODULE: ./node_modules/.pnpm/next@13.4.19_@babel+core@7.22.20_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/server/web/exports/next-response.js
var next_response = __webpack_require__(32198);
;// CONCATENATED MODULE: ./app/api/auth/profile/admin/[id]/route.tsx


const prisma = new client_.PrismaClient();
const GET = async (request)=>{
    const id = request.url.split("admin/")[1];
    try {
        const user = await prisma.users.findFirst({
            where: {
                id: parseInt(id)
            }
        });
        console.log("id", id);
        console.log("utilisateur", user);
        if (!user) {
            return new next_response/* default */.Z(JSON.stringify({
                message: "Utilisateur non trouv\xe9"
            }), {
                status: 404
            });
        }
        return new next_response/* default */.Z(JSON.stringify(user), {
            status: 200
        });
    } catch (err) {
        return new next_response/* default */.Z(JSON.stringify({
            message: "Error fetching User"
        }), {
            status: 500
        });
    } finally{
        await prisma.$disconnect();
    }
};
const PUT = async (request)=>{
    const idStr = request.url.split("admin/")[1];
    const id = parseInt(idStr, 10); // Convertir en nombre
    try {
        const data = await request.json(); // Utiliser .json() au lieu de .body
        // Vérifiez que l'ID est fourni et valide
        if (isNaN(id)) {
            return new next_response/* default */.Z(JSON.stringify({
                message: "ID invalide fourni"
            }), {
                status: 400
            });
        }
        const user = await prisma.users.update({
            where: {
                id: id
            },
            data: {
                email: data.email,
                firstname: data.firstname,
                lastname: data.lastname,
                role: data.role
            }
        });
        return new next_response/* default */.Z(JSON.stringify(user), {
            status: 200
        });
    } catch (err) {
        console.error("Erreur lors de la mise \xe0 jour de l'utilisateur:", err);
        return new next_response/* default */.Z(JSON.stringify({
            message: "Erreur lors de la mise \xe0 jour de l'utilisateur"
        }), {
            status: 500
        });
    } finally{
        await prisma.$disconnect();
    }
};
const DELETE = async (request)=>{
    try {
        const id = parseInt(request.url.split("admin/")[1]); // Obtenir l'ID à partir de l'URL
        // Delete the user with the specified ID
        await prisma.users.delete({
            where: {
                id: id
            }
        });
        return new next_response/* default */.Z(JSON.stringify({
            message: "User deleted successfully"
        }), {
            status: 200
        });
    } catch (err) {
        return new next_response/* default */.Z(JSON.stringify({
            message: "Error deleting user"
        }), {
            status: 500
        });
    } finally{
        await prisma.$disconnect();
    }
};

;// CONCATENATED MODULE: ./node_modules/.pnpm/next@13.4.19_@babel+core@7.22.20_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/build/webpack/loaders/next-app-loader.js?page=%2Fapi%2Fauth%2Fprofile%2Fadmin%2F%5Bid%5D%2Froute&name=app%2Fapi%2Fauth%2Fprofile%2Fadmin%2F%5Bid%5D%2Froute&pagePath=private-next-app-dir%2Fapi%2Fauth%2Fprofile%2Fadmin%2F%5Bid%5D%2Froute.tsx&appDir=%2FUsers%2Fgabrielkhaldi%2FDesktop%2FStudi%2FGit%2FStudi%2FECF%2Fvparrot%2Fapp&appPaths=%2Fapi%2Fauth%2Fprofile%2Fadmin%2F%5Bid%5D%2Froute&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!

// @ts-ignore this need to be imported from next/dist to be external


// @ts-expect-error - replaced by webpack/turbopack loader

const AppRouteRouteModule = app_route_module.AppRouteRouteModule;
// We inject the nextConfigOutput here so that we can use them in the route
// module.
const nextConfigOutput = ""
const routeModule = new AppRouteRouteModule({
    definition: {
        kind: route_kind.RouteKind.APP_ROUTE,
        page: "/api/auth/profile/admin/[id]/route",
        pathname: "/api/auth/profile/admin/[id]",
        filename: "route",
        bundlePath: "app/api/auth/profile/admin/[id]/route"
    },
    resolvedPagePath: "/Users/gabrielkhaldi/Desktop/Studi/Git/Studi/ECF/vparrot/app/api/auth/profile/admin/[id]/route.tsx",
    nextConfigOutput,
    userland: route_namespaceObject
});
// Pull out the exports that we need to expose from the module. This should
// be eliminated when we've moved the other routes to the new format. These
// are used to hook into the route.
const { requestAsyncStorage , staticGenerationAsyncStorage , serverHooks , headerHooks , staticGenerationBailout  } = routeModule;
const originalPathname = "/api/auth/profile/admin/[id]/route";


//# sourceMappingURL=app-route.js.map

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [386,6042,7009,2198], () => (__webpack_exec__(98023)));
module.exports = __webpack_exports__;

})();