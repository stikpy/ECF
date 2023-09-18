"use strict";
(() => {
var exports = {};
exports.id = 9407;
exports.ids = [9407];
exports.modules = {

/***/ 53524:
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ 22037:
/***/ ((module) => {

module.exports = require("os");

/***/ }),

/***/ 43627:
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

// NAMESPACE OBJECT: ./app/api/testimonials/[id]/route.ts
var route_namespaceObject = {};
__webpack_require__.r(route_namespaceObject);
__webpack_require__.d(route_namespaceObject, {
  DELETE: () => (DELETE),
  GET: () => (GET),
  POST: () => (POST),
  PUT: () => (PUT)
});

// EXTERNAL MODULE: ./node_modules/.pnpm/next@13.4.19_@babel+core@7.22.20_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/server/node-polyfill-headers.js
var node_polyfill_headers = __webpack_require__(53088);
// EXTERNAL MODULE: ./node_modules/.pnpm/next@13.4.19_@babel+core@7.22.20_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/server/future/route-modules/app-route/module.js
var app_route_module = __webpack_require__(17358);
// EXTERNAL MODULE: ./node_modules/.pnpm/next@13.4.19_@babel+core@7.22.20_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/server/future/route-kind.js
var route_kind = __webpack_require__(19916);
// EXTERNAL MODULE: ./node_modules/.pnpm/next@13.4.19_@babel+core@7.22.20_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/server/web/exports/next-response.js
var next_response = __webpack_require__(32198);
// EXTERNAL MODULE: external "@prisma/client"
var client_ = __webpack_require__(53524);
;// CONCATENATED MODULE: ./app/api/testimonials/[id]/route.ts


const prisma = new client_.PrismaClient();
const GET = async (request)=>{
    const id = request.url.split("testimonials/")[1];
    try {
        const testimonial = await prisma.testimonials.findFirst({
            where: {
                id: parseInt(id)
            }
        });
        console.log("id", id);
        console.log("testimonial", testimonial);
        if (!testimonial) {
            return new next_response/* default */.Z(JSON.stringify({
                message: "T\xe9moignage non trouv\xe9"
            }), {
                status: 404
            });
        }
        return new next_response/* default */.Z(JSON.stringify(testimonial), {
            status: 200
        });
    } catch (err) {
        return new next_response/* default */.Z(JSON.stringify({
            message: "Error fetching testimonial"
        }), {
            status: 500
        });
    } finally{
        await prisma.$disconnect();
    }
};
// POST /api/testimonials
const POST = async (request)=>{
    try {
        const body = await request.json();
        console.log("Request body:", body);
        // Utiliser les valeurs par défaut pour isValidated et status si non fournies
        const { name, date, rating, message, isValidated, status } = body;
        const isValidatedValue = isValidated !== undefined ? isValidated : false;
        const statusValue = status || "hors ligne";
        const testimonial = await prisma.testimonials.create({
            data: {
                name,
                date,
                rating,
                message,
                isValidated: isValidatedValue,
                status: statusValue
            }
        });
        await prisma.$disconnect();
        return new next_response/* default */.Z(JSON.stringify(testimonial), {
            status: 200
        });
    } catch (err) {
        console.log("Error creating testimonial:", err);
        return new next_response/* default */.Z(JSON.stringify({
            message: "Error creating testimonial"
        }), {
            status: 500
        });
    }
};
const PUT = async (request)=>{
    try {
        const body = await request.json();
        console.log("Request body:", body);
        if (typeof body.id !== "number") {
            return new next_response/* default */.Z(JSON.stringify({
                message: "Invalid ID provided"
            }), {
                status: 400
            });
        }
        const updateQuery = {
            where: {
                id: body.id
            },
            data: {
                name: body.name,
                date: body.date,
                rating: body.rating,
                message: body.message,
                isValidated: body.isValidated,
                status: body.status
            }
        };
        console.log("Prisma Update Query:", JSON.stringify(updateQuery, null, 2));
        const testimonial = await prisma.testimonials.update(updateQuery);
        await prisma.$disconnect(); // Déconnexion de Prisma après utilisation
        return new next_response/* default */.Z(JSON.stringify(testimonial), {
            status: 200
        });
    } catch (err) {
        console.log("Error updating testimonial:", err);
        return new next_response/* default */.Z(JSON.stringify({
            message: "Error updating testimonial"
        }), {
            status: 500
        });
    }
};
const DELETE = async (request)=>{
    try {
        const id = parseInt(request.url.split("testimonials/")[1]); // Obtenir l'ID à partir de l'URL
        // Delete the testimonial with the specified ID
        await prisma.testimonials.delete({
            where: {
                id: id
            }
        });
        return new next_response/* default */.Z(JSON.stringify({
            message: "Testimonial deleted successfully"
        }), {
            status: 200
        });
    } catch (err) {
        return new next_response/* default */.Z(JSON.stringify({
            message: "Error deleting testimonial"
        }), {
            status: 500
        });
    } finally{
        await prisma.$disconnect();
    }
};

;// CONCATENATED MODULE: ./node_modules/.pnpm/next@13.4.19_@babel+core@7.22.20_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/build/webpack/loaders/next-app-loader.js?page=%2Fapi%2Ftestimonials%2F%5Bid%5D%2Froute&name=app%2Fapi%2Ftestimonials%2F%5Bid%5D%2Froute&pagePath=private-next-app-dir%2Fapi%2Ftestimonials%2F%5Bid%5D%2Froute.ts&appDir=%2FUsers%2Fgabrielkhaldi%2FDesktop%2FStudi%2FGit%2FStudi%2FECF%2Fvparrot%2Fapp&appPaths=%2Fapi%2Ftestimonials%2F%5Bid%5D%2Froute&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!

// @ts-ignore this need to be imported from next/dist to be external


// @ts-expect-error - replaced by webpack/turbopack loader

const AppRouteRouteModule = app_route_module.AppRouteRouteModule;
// We inject the nextConfigOutput here so that we can use them in the route
// module.
const nextConfigOutput = ""
const routeModule = new AppRouteRouteModule({
    definition: {
        kind: route_kind.RouteKind.APP_ROUTE,
        page: "/api/testimonials/[id]/route",
        pathname: "/api/testimonials/[id]",
        filename: "route",
        bundlePath: "app/api/testimonials/[id]/route"
    },
    resolvedPagePath: "/Users/gabrielkhaldi/Desktop/Studi/Git/Studi/ECF/vparrot/app/api/testimonials/[id]/route.ts",
    nextConfigOutput,
    userland: route_namespaceObject
});
// Pull out the exports that we need to expose from the module. This should
// be eliminated when we've moved the other routes to the new format. These
// are used to hook into the route.
const { requestAsyncStorage , staticGenerationAsyncStorage , serverHooks , headerHooks , staticGenerationBailout  } = routeModule;
const originalPathname = "/api/testimonials/[id]/route";


//# sourceMappingURL=app-route.js.map

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [386,6042,7009,2198], () => (__webpack_exec__(43627)));
module.exports = __webpack_exports__;

})();