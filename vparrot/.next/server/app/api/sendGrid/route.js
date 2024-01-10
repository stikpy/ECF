"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/sendGrid/route";
exports.ids = ["app/api/sendGrid/route"];
exports.modules = {

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "assert":
/*!*************************!*\
  !*** external "assert" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("assert");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("stream");

/***/ }),

/***/ "tty":
/*!**********************!*\
  !*** external "tty" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("tty");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("zlib");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2FsendGrid%2Froute&page=%2Fapi%2FsendGrid%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2FsendGrid%2Froute.tsx&appDir=%2FUsers%2Fgabrielkhaldi%2FDesktop%2FStudi%2FGit%2FStudi%2FECF%2Fvparrot%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fgabrielkhaldi%2FDesktop%2FStudi%2FGit%2FStudi%2FECF%2Fvparrot&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2FsendGrid%2Froute&page=%2Fapi%2FsendGrid%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2FsendGrid%2Froute.tsx&appDir=%2FUsers%2Fgabrielkhaldi%2FDesktop%2FStudi%2FGit%2FStudi%2FECF%2Fvparrot%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fgabrielkhaldi%2FDesktop%2FStudi%2FGit%2FStudi%2FECF%2Fvparrot&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   headerHooks: () => (/* binding */ headerHooks),\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage),\n/* harmony export */   staticGenerationBailout: () => (/* binding */ staticGenerationBailout)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_node_polyfill_headers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/node-polyfill-headers */ \"(rsc)/./node_modules/next/dist/server/node-polyfill-headers.js\");\n/* harmony import */ var next_dist_server_node_polyfill_headers__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_node_polyfill_headers__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var _Users_gabrielkhaldi_Desktop_Studi_Git_Studi_ECF_vparrot_app_api_sendGrid_route_tsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/sendGrid/route.tsx */ \"(rsc)/./app/api/sendGrid/route.tsx\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_1__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_2__.RouteKind.APP_ROUTE,\n        page: \"/api/sendGrid/route\",\n        pathname: \"/api/sendGrid\",\n        filename: \"route\",\n        bundlePath: \"app/api/sendGrid/route\"\n    },\n    resolvedPagePath: \"/Users/gabrielkhaldi/Desktop/Studi/Git/Studi/ECF/vparrot/app/api/sendGrid/route.tsx\",\n    nextConfigOutput,\n    userland: _Users_gabrielkhaldi_Desktop_Studi_Git_Studi_ECF_vparrot_app_api_sendGrid_route_tsx__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks, headerHooks, staticGenerationBailout } = routeModule;\nconst originalPathname = \"/api/sendGrid/route\";\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZzZW5kR3JpZCUyRnJvdXRlJnBhZ2U9JTJGYXBpJTJGc2VuZEdyaWQlMkZyb3V0ZSZhcHBQYXRocz0mcGFnZVBhdGg9cHJpdmF0ZS1uZXh0LWFwcC1kaXIlMkZhcGklMkZzZW5kR3JpZCUyRnJvdXRlLnRzeCZhcHBEaXI9JTJGVXNlcnMlMkZnYWJyaWVsa2hhbGRpJTJGRGVza3RvcCUyRlN0dWRpJTJGR2l0JTJGU3R1ZGklMkZFQ0YlMkZ2cGFycm90JTJGYXBwJnBhZ2VFeHRlbnNpb25zPXRzeCZwYWdlRXh0ZW5zaW9ucz10cyZwYWdlRXh0ZW5zaW9ucz1qc3gmcGFnZUV4dGVuc2lvbnM9anMmcm9vdERpcj0lMkZVc2VycyUyRmdhYnJpZWxraGFsZGklMkZEZXNrdG9wJTJGU3R1ZGklMkZHaXQlMkZTdHVkaSUyRkVDRiUyRnZwYXJyb3QmaXNEZXY9dHJ1ZSZ0c2NvbmZpZ1BhdGg9dHNjb25maWcuanNvbiZiYXNlUGF0aD0mYXNzZXRQcmVmaXg9Jm5leHRDb25maWdPdXRwdXQ9JnByZWZlcnJlZFJlZ2lvbj0mbWlkZGxld2FyZUNvbmZpZz1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBZ0Q7QUFDc0Q7QUFDdkM7QUFDaUQ7QUFDaEg7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGdIQUFtQjtBQUMzQztBQUNBLGNBQWMseUVBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFlBQVk7QUFDWixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsUUFBUSx1R0FBdUc7QUFDL0c7QUFDaUo7O0FBRWpKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLz9hNTJjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIm5leHQvZGlzdC9zZXJ2ZXIvbm9kZS1wb2x5ZmlsbC1oZWFkZXJzXCI7XG5pbXBvcnQgeyBBcHBSb3V0ZVJvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLW1vZHVsZXMvYXBwLXJvdXRlL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLWtpbmRcIjtcbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCIvVXNlcnMvZ2FicmllbGtoYWxkaS9EZXNrdG9wL1N0dWRpL0dpdC9TdHVkaS9FQ0YvdnBhcnJvdC9hcHAvYXBpL3NlbmRHcmlkL3JvdXRlLnRzeFwiO1xuLy8gV2UgaW5qZWN0IHRoZSBuZXh0Q29uZmlnT3V0cHV0IGhlcmUgc28gdGhhdCB3ZSBjYW4gdXNlIHRoZW0gaW4gdGhlIHJvdXRlXG4vLyBtb2R1bGUuXG5jb25zdCBuZXh0Q29uZmlnT3V0cHV0ID0gXCJcIlxuY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgQXBwUm91dGVSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuQVBQX1JPVVRFLFxuICAgICAgICBwYWdlOiBcIi9hcGkvc2VuZEdyaWQvcm91dGVcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaS9zZW5kR3JpZFwiLFxuICAgICAgICBmaWxlbmFtZTogXCJyb3V0ZVwiLFxuICAgICAgICBidW5kbGVQYXRoOiBcImFwcC9hcGkvc2VuZEdyaWQvcm91dGVcIlxuICAgIH0sXG4gICAgcmVzb2x2ZWRQYWdlUGF0aDogXCIvVXNlcnMvZ2FicmllbGtoYWxkaS9EZXNrdG9wL1N0dWRpL0dpdC9TdHVkaS9FQ0YvdnBhcnJvdC9hcHAvYXBpL3NlbmRHcmlkL3JvdXRlLnRzeFwiLFxuICAgIG5leHRDb25maWdPdXRwdXQsXG4gICAgdXNlcmxhbmRcbn0pO1xuLy8gUHVsbCBvdXQgdGhlIGV4cG9ydHMgdGhhdCB3ZSBuZWVkIHRvIGV4cG9zZSBmcm9tIHRoZSBtb2R1bGUuIFRoaXMgc2hvdWxkXG4vLyBiZSBlbGltaW5hdGVkIHdoZW4gd2UndmUgbW92ZWQgdGhlIG90aGVyIHJvdXRlcyB0byB0aGUgbmV3IGZvcm1hdC4gVGhlc2Vcbi8vIGFyZSB1c2VkIHRvIGhvb2sgaW50byB0aGUgcm91dGUuXG5jb25zdCB7IHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBoZWFkZXJIb29rcywgc3RhdGljR2VuZXJhdGlvbkJhaWxvdXQgfSA9IHJvdXRlTW9kdWxlO1xuY29uc3Qgb3JpZ2luYWxQYXRobmFtZSA9IFwiL2FwaS9zZW5kR3JpZC9yb3V0ZVwiO1xuZXhwb3J0IHsgcm91dGVNb2R1bGUsIHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBoZWFkZXJIb29rcywgc3RhdGljR2VuZXJhdGlvbkJhaWxvdXQsIG9yaWdpbmFsUGF0aG5hbWUsICB9O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcHAtcm91dGUuanMubWFwIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2FsendGrid%2Froute&page=%2Fapi%2FsendGrid%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2FsendGrid%2Froute.tsx&appDir=%2FUsers%2Fgabrielkhaldi%2FDesktop%2FStudi%2FGit%2FStudi%2FECF%2Fvparrot%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fgabrielkhaldi%2FDesktop%2FStudi%2FGit%2FStudi%2FECF%2Fvparrot&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./app/api/sendGrid/route.tsx":
/*!************************************!*\
  !*** ./app/api/sendGrid/route.tsx ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var _sendgrid_mail__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @sendgrid/mail */ \"(rsc)/./node_modules/@sendgrid/mail/index.js\");\n/* harmony import */ var _sendgrid_mail__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_sendgrid_mail__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/web/exports/next-response */ \"(rsc)/./node_modules/next/dist/server/web/exports/next-response.js\");\n/* harmony import */ var zod__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! zod */ \"(rsc)/./node_modules/zod/lib/index.mjs\");\n\n\n\nconst sendEmailSchema = zod__WEBPACK_IMPORTED_MODULE_2__.object({\n    name: zod__WEBPACK_IMPORTED_MODULE_2__.string(),\n    email: zod__WEBPACK_IMPORTED_MODULE_2__.string().email(),\n    subject: zod__WEBPACK_IMPORTED_MODULE_2__.string(),\n    message: zod__WEBPACK_IMPORTED_MODULE_2__.string()\n});\nasync function sendEmail(data) {\n    const sendgridApiKey = process.env.SENDGRID_API_KEY;\n    if (!sendgridApiKey) {\n        console.error(\"SENDGRID_API_KEY is not defined\");\n        return false;\n    }\n    _sendgrid_mail__WEBPACK_IMPORTED_MODULE_0___default().setApiKey(sendgridApiKey);\n    const msg = {\n        from: \"contact@vparrot.online\",\n        to: \"vincent-parrot@vparrot.online\",\n        templateId: \"d-a6a3e052e5ae411e850a368fd860a093\",\n        dynamic_template_data: {\n            surname: data.name,\n            email: data.email,\n            name: data.subject,\n            content: data.message\n        }\n    };\n    try {\n        await _sendgrid_mail__WEBPACK_IMPORTED_MODULE_0___default().send(msg);\n        return true;\n    } catch (error) {\n        console.error(error);\n        return false;\n    }\n}\nasync function POST(request) {\n    try {\n        const data = await request.json();\n        // Validate data with zod\n        const parsedData = sendEmailSchema.safeParse(data);\n        if (!parsedData.success) {\n            return new next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_1__[\"default\"](JSON.stringify({\n                message: \"Invalid input\"\n            }), {\n                status: 400\n            });\n        }\n        const success = await sendEmail(parsedData.data);\n        if (success) {\n            return new next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_1__[\"default\"](JSON.stringify({\n                message: \"Email sent successfully!\"\n            }), {\n                status: 200\n            });\n        } else {\n            return new next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_1__[\"default\"](JSON.stringify({\n                message: \"Email sending failed\"\n            }), {\n                status: 500\n            });\n        }\n    } catch (err) {\n        return new next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_1__[\"default\"](JSON.stringify({\n            message: \"Internal server error\"\n        }), {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL3NlbmRHcmlkL3JvdXRlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFvQztBQUNvQjtBQUMvQjtBQUV6QixNQUFNRyxrQkFBa0JELHVDQUFRLENBQUM7SUFDL0JHLE1BQU1ILHVDQUFRO0lBQ2RLLE9BQU9MLHVDQUFRLEdBQUdLLEtBQUs7SUFDdkJDLFNBQVNOLHVDQUFRO0lBQ2pCTyxTQUFTUCx1Q0FBUTtBQUNuQjtBQUVBLGVBQWVRLFVBQVVDLElBQXVFO0lBQzlGLE1BQU1DLGlCQUFpQkMsUUFBUUMsR0FBRyxDQUFDQyxnQkFBZ0I7SUFDbkQsSUFBSSxDQUFDSCxnQkFBZ0I7UUFDbkJJLFFBQVFDLEtBQUssQ0FBQztRQUNkLE9BQU87SUFDVDtJQUNBakIsK0RBQWdCLENBQUNZO0lBRWpCLE1BQU1PLE1BQU07UUFDVkMsTUFBTTtRQUNOQyxJQUFJO1FBQ0pDLFlBQVk7UUFDWkMsdUJBQXVCO1lBQ3JCQyxTQUFTYixLQUFLTixJQUFJO1lBQ2xCRSxPQUFPSSxLQUFLSixLQUFLO1lBQ2pCRixNQUFNTSxLQUFLSCxPQUFPO1lBQ2xCaUIsU0FBU2QsS0FBS0YsT0FBTztRQUN2QjtJQUNGO0lBQ0EsSUFBSTtRQUNGLE1BQU1ULDBEQUFXLENBQUNtQjtRQUNsQixPQUFPO0lBQ1QsRUFBRSxPQUFPRixPQUFPO1FBQ2RELFFBQVFDLEtBQUssQ0FBQ0E7UUFDZCxPQUFPO0lBQ1Q7QUFDRjtBQUVPLGVBQWVVLEtBQUtDLE9BQW9CO0lBQzdDLElBQUk7UUFDRixNQUFNakIsT0FBTyxNQUFNaUIsUUFBUUMsSUFBSTtRQUUvQix5QkFBeUI7UUFDekIsTUFBTUMsYUFBYTNCLGdCQUFnQjRCLFNBQVMsQ0FBQ3BCO1FBQzdDLElBQUksQ0FBQ21CLFdBQVdFLE9BQU8sRUFBRTtZQUN2QixPQUFPLElBQUkvQixrRkFBWUEsQ0FBQ2dDLEtBQUtDLFNBQVMsQ0FBQztnQkFBRXpCLFNBQVM7WUFBZ0IsSUFBSTtnQkFBRTBCLFFBQVE7WUFBSTtRQUN0RjtRQUVBLE1BQU1ILFVBQVUsTUFBTXRCLFVBQVVvQixXQUFXbkIsSUFBSTtRQUMvQyxJQUFJcUIsU0FBUztZQUNYLE9BQU8sSUFBSS9CLGtGQUFZQSxDQUFDZ0MsS0FBS0MsU0FBUyxDQUFDO2dCQUFFekIsU0FBUztZQUEyQixJQUFJO2dCQUFFMEIsUUFBUTtZQUFJO1FBQ2pHLE9BQU87WUFDTCxPQUFPLElBQUlsQyxrRkFBWUEsQ0FBQ2dDLEtBQUtDLFNBQVMsQ0FBQztnQkFBRXpCLFNBQVM7WUFBdUIsSUFBSTtnQkFBRTBCLFFBQVE7WUFBSTtRQUM3RjtJQUNGLEVBQUUsT0FBT0MsS0FBSztRQUNaLE9BQU8sSUFBSW5DLGtGQUFZQSxDQUFDZ0MsS0FBS0MsU0FBUyxDQUFDO1lBQUV6QixTQUFTO1FBQXdCLElBQUk7WUFBRTBCLFFBQVE7UUFBSTtJQUM5RjtBQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYXBwL2FwaS9zZW5kR3JpZC9yb3V0ZS50c3g/MDYzZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc2dNYWlsIGZyb20gXCJAc2VuZGdyaWQvbWFpbFwiO1xuaW1wb3J0IHsgTmV4dFJlcXVlc3QsIE5leHRSZXNwb25zZSB9IGZyb20gJ25leHQvc2VydmVyJztcbmltcG9ydCAqIGFzIHogZnJvbSAnem9kJztcblxuY29uc3Qgc2VuZEVtYWlsU2NoZW1hID0gei5vYmplY3Qoe1xuICBuYW1lOiB6LnN0cmluZygpLFxuICBlbWFpbDogei5zdHJpbmcoKS5lbWFpbCgpLFxuICBzdWJqZWN0OiB6LnN0cmluZygpLFxuICBtZXNzYWdlOiB6LnN0cmluZygpLFxufSk7XG5cbmFzeW5jIGZ1bmN0aW9uIHNlbmRFbWFpbChkYXRhOiB7IG5hbWU6IHN0cmluZzsgZW1haWw6IHN0cmluZzsgbWVzc2FnZTogc3RyaW5nOyBzdWJqZWN0OiBzdHJpbmcgfSkge1xuICBjb25zdCBzZW5kZ3JpZEFwaUtleSA9IHByb2Nlc3MuZW52LlNFTkRHUklEX0FQSV9LRVk7XG4gIGlmICghc2VuZGdyaWRBcGlLZXkpIHtcbiAgICBjb25zb2xlLmVycm9yKCdTRU5ER1JJRF9BUElfS0VZIGlzIG5vdCBkZWZpbmVkJyk7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHNnTWFpbC5zZXRBcGlLZXkoc2VuZGdyaWRBcGlLZXkpO1xuXG4gIGNvbnN0IG1zZyA9IHtcbiAgICBmcm9tOiBcImNvbnRhY3RAdnBhcnJvdC5vbmxpbmVcIixcbiAgICB0bzogXCJ2aW5jZW50LXBhcnJvdEB2cGFycm90Lm9ubGluZVwiLFxuICAgIHRlbXBsYXRlSWQ6ICdkLWE2YTNlMDUyZTVhZTQxMWU4NTBhMzY4ZmQ4NjBhMDkzJyxcbiAgICBkeW5hbWljX3RlbXBsYXRlX2RhdGE6IHtcbiAgICAgIHN1cm5hbWU6IGRhdGEubmFtZSxcbiAgICAgIGVtYWlsOiBkYXRhLmVtYWlsLFxuICAgICAgbmFtZTogZGF0YS5zdWJqZWN0LFxuICAgICAgY29udGVudDogZGF0YS5tZXNzYWdlLFxuICAgIH1cbiAgfTtcbiAgdHJ5IHtcbiAgICBhd2FpdCBzZ01haWwuc2VuZChtc2cpO1xuICAgIHJldHVybiB0cnVlO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gUE9TVChyZXF1ZXN0OiBOZXh0UmVxdWVzdCkge1xuICB0cnkge1xuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXF1ZXN0Lmpzb24oKTtcblxuICAgIC8vIFZhbGlkYXRlIGRhdGEgd2l0aCB6b2RcbiAgICBjb25zdCBwYXJzZWREYXRhID0gc2VuZEVtYWlsU2NoZW1hLnNhZmVQYXJzZShkYXRhKTtcbiAgICBpZiAoIXBhcnNlZERhdGEuc3VjY2Vzcykge1xuICAgICAgcmV0dXJuIG5ldyBOZXh0UmVzcG9uc2UoSlNPTi5zdHJpbmdpZnkoeyBtZXNzYWdlOiBcIkludmFsaWQgaW5wdXRcIiB9KSwgeyBzdGF0dXM6IDQwMCB9KTtcbiAgICB9XG5cbiAgICBjb25zdCBzdWNjZXNzID0gYXdhaXQgc2VuZEVtYWlsKHBhcnNlZERhdGEuZGF0YSk7XG4gICAgaWYgKHN1Y2Nlc3MpIHtcbiAgICAgIHJldHVybiBuZXcgTmV4dFJlc3BvbnNlKEpTT04uc3RyaW5naWZ5KHsgbWVzc2FnZTogJ0VtYWlsIHNlbnQgc3VjY2Vzc2Z1bGx5IScgfSksIHsgc3RhdHVzOiAyMDAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBuZXcgTmV4dFJlc3BvbnNlKEpTT04uc3RyaW5naWZ5KHsgbWVzc2FnZTogJ0VtYWlsIHNlbmRpbmcgZmFpbGVkJyB9KSwgeyBzdGF0dXM6IDUwMCB9KTtcbiAgICB9XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIHJldHVybiBuZXcgTmV4dFJlc3BvbnNlKEpTT04uc3RyaW5naWZ5KHsgbWVzc2FnZTogJ0ludGVybmFsIHNlcnZlciBlcnJvcicgfSksIHsgc3RhdHVzOiA1MDAgfSk7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJzZ01haWwiLCJOZXh0UmVzcG9uc2UiLCJ6Iiwic2VuZEVtYWlsU2NoZW1hIiwib2JqZWN0IiwibmFtZSIsInN0cmluZyIsImVtYWlsIiwic3ViamVjdCIsIm1lc3NhZ2UiLCJzZW5kRW1haWwiLCJkYXRhIiwic2VuZGdyaWRBcGlLZXkiLCJwcm9jZXNzIiwiZW52IiwiU0VOREdSSURfQVBJX0tFWSIsImNvbnNvbGUiLCJlcnJvciIsInNldEFwaUtleSIsIm1zZyIsImZyb20iLCJ0byIsInRlbXBsYXRlSWQiLCJkeW5hbWljX3RlbXBsYXRlX2RhdGEiLCJzdXJuYW1lIiwiY29udGVudCIsInNlbmQiLCJQT1NUIiwicmVxdWVzdCIsImpzb24iLCJwYXJzZWREYXRhIiwic2FmZVBhcnNlIiwic3VjY2VzcyIsIkpTT04iLCJzdHJpbmdpZnkiLCJzdGF0dXMiLCJlcnIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./app/api/sendGrid/route.tsx\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/follow-redirects","vendor-chunks/debug","vendor-chunks/ms","vendor-chunks/zod","vendor-chunks/@sendgrid","vendor-chunks/deepmerge"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2FsendGrid%2Froute&page=%2Fapi%2FsendGrid%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2FsendGrid%2Froute.tsx&appDir=%2FUsers%2Fgabrielkhaldi%2FDesktop%2FStudi%2FGit%2FStudi%2FECF%2Fvparrot%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fgabrielkhaldi%2FDesktop%2FStudi%2FGit%2FStudi%2FECF%2Fvparrot&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();