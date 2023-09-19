"use strict";
exports.id = 8957;
exports.ids = [8957];
exports.modules = {

/***/ 68957:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_icons_material_MailOutline__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(25575);
/* harmony import */ var _mui_icons_material_Home__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(24937);
/* harmony import */ var _mui_icons_material_DirectionsCar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(155);
/* harmony import */ var _mui_icons_material_ManageAccounts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(54279);
/* harmony import */ var _mui_icons_material_StarHalf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(24275);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11440);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
// Sidebar.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 







function className(...classes) {
    return classes.filter(Boolean).join(" ");
}
function Sidebar({}) {
    const [selectedLayoutSegment, setSelectedLayoutSegment] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("Dashboard");
    const sidebarOptions = [
        {
            name: "Dashboard",
            href: "/settings",
            icon: _mui_icons_material_Home__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z,
            current: true
        },
        {
            name: "Cars",
            href: "/settings/carsDataManagement",
            icon: _mui_icons_material_DirectionsCar__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z,
            current: false,
            submenu: [
                {
                    name: "Add Car",
                    href: "/settings/carsDataManagement/addCar",
                    current: false
                }
            ]
        },
        {
            name: "Users",
            href: "/settings/userProfile",
            icon: _mui_icons_material_ManageAccounts__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z,
            current: false,
            submenu: [
                {
                    name: "Add User",
                    href: "/settings/userProfile/addUser",
                    current: false
                }
            ]
        },
        {
            name: "Reviews",
            href: "/settings/testimonailsManagement",
            icon: _mui_icons_material_StarHalf__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z,
            current: false,
            submenu: [
                {
                    name: "Add Review",
                    href: "/settings/testimonailsManagement/addReview",
                    current: false
                }
            ]
        },
        {
            name: "Messages",
            href: "#",
            icon: _mui_icons_material_MailOutline__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z,
            current: false
        }
    ];
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        id: "sidebar",
        className: " h-screen lg:inset-y-0 lg:flex lg:w-72 lg:flex-col",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "flex grow flex-col gap-y-5 overflow-y-auto bg-white px-6 pb-4  rounded-lg border-r-2",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                    className: "text-3-xl font-bold",
                    children: "Logo"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("nav", {
                    className: " flex flex-col",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                        role: "list",
                        className: "flex flex-l flex-col gap-y-7",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                                role: "list",
                                className: "-mx-2 space-y-4",
                                children: sidebarOptions.map((option)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                        className: "px-2",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                                href: `${option.href}/#sidebar`,
                                                className: className(option.current ? "bg-gray-100 text-gray-900" : "text-gray-600 hover:bg-gray-50 hover:text-gray-900", "group flex items-center px-2 py-2 text-sm font-medium rounded-md"),
                                                onClick: (e)=>setSelectedLayoutSegment(option.name),
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(option.icon, {
                                                        className: className(option.current ? "text-gray-500" : "text-gray-400 group-hover:text-gray-500", "mr-3 flex-shrink-0 h-6 w-6"),
                                                        "aria-hidden": "true"
                                                    }),
                                                    option.name
                                                ]
                                            }),
                                            option.submenu && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                                                className: "pl-6 space-y-2",
                                                children: option.submenu.map((subitem)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                                            href: `${subitem.href}/#sidebar`,
                                                            className: className("text-gray-600 hover:bg-gray-50 hover:text-gray-900", "group flex items-center px-10 py-1 text-sm font-medium rounded-md"),
                                                            children: subitem.name
                                                        })
                                                    }, subitem.name))
                                            })
                                        ]
                                    }, option.name))
                            })
                        })
                    })
                })
            ]
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Sidebar);


/***/ })

};
;