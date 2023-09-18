"use strict";
(() => {
var exports = {};
exports.id = 190;
exports.ids = [190];
exports.modules = {

/***/ 39491:
/***/ ((module) => {

module.exports = require("assert");

/***/ }),

/***/ 57147:
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ 13685:
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ 95687:
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ 22037:
/***/ ((module) => {

module.exports = require("os");

/***/ }),

/***/ 71017:
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ 12781:
/***/ ((module) => {

module.exports = require("stream");

/***/ }),

/***/ 76224:
/***/ ((module) => {

module.exports = require("tty");

/***/ }),

/***/ 57310:
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ 73837:
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ 59796:
/***/ ((module) => {

module.exports = require("zlib");

/***/ }),

/***/ 98205:
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

// NAMESPACE OBJECT: ./app/api/sendGrid/route.tsx
var route_namespaceObject = {};
__webpack_require__.r(route_namespaceObject);
__webpack_require__.d(route_namespaceObject, {
  POST: () => (POST)
});

// EXTERNAL MODULE: ./node_modules/.pnpm/next@13.4.19_@babel+core@7.22.20_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/server/node-polyfill-headers.js
var node_polyfill_headers = __webpack_require__(53088);
// EXTERNAL MODULE: ./node_modules/.pnpm/next@13.4.19_@babel+core@7.22.20_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/server/future/route-modules/app-route/module.js
var app_route_module = __webpack_require__(17358);
// EXTERNAL MODULE: ./node_modules/.pnpm/next@13.4.19_@babel+core@7.22.20_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/server/future/route-kind.js
var route_kind = __webpack_require__(19916);
// EXTERNAL MODULE: ./node_modules/.pnpm/@sendgrid+mail@7.7.0_debug@4.3.4/node_modules/@sendgrid/mail/index.js
var mail = __webpack_require__(27773);
var mail_default = /*#__PURE__*/__webpack_require__.n(mail);
// EXTERNAL MODULE: ./node_modules/.pnpm/next@13.4.19_@babel+core@7.22.20_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/server/web/exports/next-response.js
var next_response = __webpack_require__(32198);
// EXTERNAL MODULE: ./node_modules/.pnpm/zod@3.22.2/node_modules/zod/lib/index.mjs
var lib = __webpack_require__(95408);
;// CONCATENATED MODULE: ./app/api/sendGrid/route.tsx



const sendEmailSchema = lib/* object */.Ry({
    name: lib/* string */.Z_(),
    email: lib/* string */.Z_().email(),
    subject: lib/* string */.Z_(),
    message: lib/* string */.Z_()
});
async function sendEmail(data) {
    const sendgridApiKey = "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";
    mail_default().setApiKey(sendgridApiKey);
    // const msg = {
    //   from: "contact@vparrot.online",
    //   to: "gabriel.khaldi@gmail.com",
    //   subject: `Message from ${data.name}`,
    //   html: `<strong>From:</strong> ${data.name} <br/><strong>Email:</strong> ${data.email}   <br/><strong>Sujet:</strong>${data.subject} <br/><strong>Message:</strong>${data.message}`,
    // };
    const msg = {
        from: "contact@vparrot.online",
        to: "gabriel.khaldi@gmail.com",
        templateId: "d-a6a3e052e5ae411e850a368fd860a093",
        dynamic_template_data: {
            surname: data.name,
            email: data.email,
            name: data.subject,
            content: data.message
        }
    };
    try {
        await mail_default().send(msg);
        return true;
    } catch (error) {
        console.error(error);
        return false;
    }
}
async function POST(request) {
    try {
        const data = await request.json();
        // Validate data with zod
        const parsedData = sendEmailSchema.safeParse(data);
        if (!parsedData.success) {
            return new next_response/* default */.Z(JSON.stringify({
                message: "Invalid input"
            }), {
                status: 400
            });
        }
        const success = await sendEmail(parsedData.data);
        if (success) {
            return new next_response/* default */.Z(JSON.stringify({
                message: "Email sent successfully!"
            }), {
                status: 200
            });
        } else {
            return new next_response/* default */.Z(JSON.stringify({
                message: "Email sending failed"
            }), {
                status: 500
            });
        }
    } catch (err) {
        return new next_response/* default */.Z(JSON.stringify({
            message: "Internal server error"
        }), {
            status: 500
        });
    }
}

;// CONCATENATED MODULE: ./node_modules/.pnpm/next@13.4.19_@babel+core@7.22.20_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/build/webpack/loaders/next-app-loader.js?page=%2Fapi%2FsendGrid%2Froute&name=app%2Fapi%2FsendGrid%2Froute&pagePath=private-next-app-dir%2Fapi%2FsendGrid%2Froute.tsx&appDir=%2FUsers%2Fgabrielkhaldi%2FDesktop%2FStudi%2FGit%2FStudi%2FECF%2Fvparrot%2Fapp&appPaths=%2Fapi%2FsendGrid%2Froute&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!

// @ts-ignore this need to be imported from next/dist to be external


// @ts-expect-error - replaced by webpack/turbopack loader

const AppRouteRouteModule = app_route_module.AppRouteRouteModule;
// We inject the nextConfigOutput here so that we can use them in the route
// module.
const nextConfigOutput = ""
const routeModule = new AppRouteRouteModule({
    definition: {
        kind: route_kind.RouteKind.APP_ROUTE,
        page: "/api/sendGrid/route",
        pathname: "/api/sendGrid",
        filename: "route",
        bundlePath: "app/api/sendGrid/route"
    },
    resolvedPagePath: "/Users/gabrielkhaldi/Desktop/Studi/Git/Studi/ECF/vparrot/app/api/sendGrid/route.tsx",
    nextConfigOutput,
    userland: route_namespaceObject
});
// Pull out the exports that we need to expose from the module. This should
// be eliminated when we've moved the other routes to the new format. These
// are used to hook into the route.
const { requestAsyncStorage , staticGenerationAsyncStorage , serverHooks , headerHooks , staticGenerationBailout  } = routeModule;
const originalPathname = "/api/sendGrid/route";


//# sourceMappingURL=app-route.js.map

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [386,6042,7009,2198,5408,7773], () => (__webpack_exec__(98205)));
module.exports = __webpack_exports__;

})();