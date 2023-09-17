"use strict";
(() => {
var exports = {};
exports.id = 657;
exports.ids = [657];
exports.modules = {

/***/ 53524:
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ 22037:
/***/ ((module) => {

module.exports = require("os");

/***/ }),

/***/ 98920:
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

// NAMESPACE OBJECT: ./app/api/auth/profile/admin/route.tsx
var route_namespaceObject = {};
__webpack_require__.r(route_namespaceObject);
__webpack_require__.d(route_namespaceObject, {
  DELETE: () => (DELETE),
  GET: () => (GET),
  POST: () => (POST)
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
;// CONCATENATED MODULE: ./app/api/auth/profile/admin/route.tsx


const prisma = new client_.PrismaClient();
async function getUsers() {
    const users = await prisma.users.findMany();
    return users;
}
async function GET(request) {
    try {
        const users = await getUsers();
        return new next_response/* default */.Z(JSON.stringify(users), {
            status: 200
        });
    } catch (err) {
        return new next_response/* default */.Z(JSON.stringify({
            message: "Error fetching users"
        }), {
            status: 500
        });
    }
}
async function POST(request) {
    try {
        const data = await request.json();
        console.log("Data re\xe7ue:", data);
        const user = await prisma.users.create({
            data: {
                email: data.email,
                firstname: data.name,
                lastname: data.lastname,
                password: data.password,
                role: data.role
            }
        });
        return new next_response/* default */.Z(JSON.stringify(user), {
            status: 200
        });
    } catch (err) {
        console.error("Erreur lors de la cr\xe9ation de l'utilisateur:", err);
        return new next_response/* default */.Z(JSON.stringify({
            message: "Error creating user"
        }), {
            status: 500
        });
    }
}
async function DELETE(request) {
    try {
        const data = await request.json();
        const user = await prisma.users.delete({
            where: {
                id: data.id
            }
        });
        return new next_response/* default */.Z(JSON.stringify(user), {
            status: 200
        });
    } catch (err) {
        return new next_response/* default */.Z(JSON.stringify({
            message: "Error deleting user"
        }), {
            status: 500
        });
    }
}

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?page=%2Fapi%2Fauth%2Fprofile%2Fadmin%2Froute&name=app%2Fapi%2Fauth%2Fprofile%2Fadmin%2Froute&pagePath=private-next-app-dir%2Fapi%2Fauth%2Fprofile%2Fadmin%2Froute.tsx&appDir=%2FUsers%2Fgabrielkhaldi%2FDesktop%2FStudi%2FGit%2FStudi%2FECF%2Fvparrot%2Fapp&appPaths=%2Fapi%2Fauth%2Fprofile%2Fadmin%2Froute&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!

// @ts-ignore this need to be imported from next/dist to be external


// @ts-expect-error - replaced by webpack/turbopack loader

const AppRouteRouteModule = app_route_module.AppRouteRouteModule;
// We inject the nextConfigOutput here so that we can use them in the route
// module.
const nextConfigOutput = ""
const routeModule = new AppRouteRouteModule({
    definition: {
        kind: route_kind.RouteKind.APP_ROUTE,
        page: "/api/auth/profile/admin/route",
        pathname: "/api/auth/profile/admin",
        filename: "route",
        bundlePath: "app/api/auth/profile/admin/route"
    },
    resolvedPagePath: "/Users/gabrielkhaldi/Desktop/Studi/Git/Studi/ECF/vparrot/app/api/auth/profile/admin/route.tsx",
    nextConfigOutput,
    userland: route_namespaceObject
});
// Pull out the exports that we need to expose from the module. This should
// be eliminated when we've moved the other routes to the new format. These
// are used to hook into the route.
const { requestAsyncStorage , staticGenerationAsyncStorage , serverHooks , headerHooks , staticGenerationBailout  } = routeModule;
const originalPathname = "/api/auth/profile/admin/route";


//# sourceMappingURL=app-route.js.map

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [3587,4937,5501,9335], () => (__webpack_exec__(98920)));
module.exports = __webpack_exports__;

})();