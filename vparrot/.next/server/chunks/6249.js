"use strict";
exports.id = 6249;
exports.ids = [6249];
exports.modules = {

/***/ 30237:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var __webpack_unused_export__;

"use client";

var _interopRequireDefault = __webpack_require__(92439);
__webpack_unused_export__ = ({
  value: true
});
exports.Z = void 0;
var _createSvgIcon = _interopRequireDefault(__webpack_require__(64271));
var _jsxRuntime = __webpack_require__(56786);
var _default = (0, _createSvgIcon.default)( /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
  d: "M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"
}), 'Delete');
exports.Z = _default;

/***/ }),

/***/ 26249:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var material_react_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6242);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(17421);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mui_icons_material_Delete__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(30237);
/* harmony import */ var _mui_icons_material_Edit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(15922);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(93258);
/* __next_internal_client_entry_do_not_use__ default auto */ 








const CarAds = ()=>{
    const [open, setOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [formData, setFormData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        title: "",
        description: "",
        price: 0,
        imageURL: "",
        subRows: []
    });
    const [carData, setCarData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const handleOpenDialog = ()=>{
        setOpen(true);
    };
    const handleCloseDialog = ()=>{
        setOpen(false);
    };
    const handleChange = (e)=>{
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };
    const resetForm = ()=>{
        setFormData({
            title: "",
            description: "",
            price: 0,
            imageURL: "",
            subRows: []
        });
    };
    const handleSubmit = async ()=>{
        try {
            const response = await axios__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z.post("/api/cars", formData);
            console.log("Annonce de voiture cr\xe9\xe9e avec succ\xe8s :", response.data);
            handleCloseDialog();
            resetForm();
            fetchCarData();
        } catch (error) {
            console.error("Erreur lors de la cr\xe9ation de l'annonce de voiture :", error);
        }
    };
    const fetchCarData = async ()=>{
        try {
            const response = await axios__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z.get("/api/cars");
            setCarData(response.data);
        } catch (error) {
            console.error("Erreur lors de la r\xe9cup\xe9ration des donn\xe9es des voitures :", error);
        }
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const fetchData = async ()=>{
            try {
                const response = await axios__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z.get("/api/cars");
                setCarData(response.data);
            } catch (error) {
                console.error("Erreur lors de la r\xe9cup\xe9ration des donn\xe9es des voitures :", error);
            }
        };
        fetchData();
    }, []);
    const columns = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>[
            {
                accessorKey: "id",
                header: "ID",
                enableColumnOrdering: false,
                enableEditing: true,
                enableSorting: true,
                size: 80
            },
            {
                accessorKey: "title",
                header: "Titre",
                size: 140
            },
            {
                accessorKey: "description",
                header: "Description",
                size: 140
            },
            {
                accessorKey: "price",
                header: "Prix",
                size: 80
            },
            {
                accessorKey: "imageURL",
                header: "Image",
                size: 80
            },
            {
                accessorKey: "subRows",
                header: "",
                size: 40
            }
        ], []);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(material_react_table__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .ZP, {
            getSubRows: (originalRow, index)=>originalRow.subRows || undefined,
            displayColumnDefOptions: {
                "mrt-row-actions": {
                    muiTableHeadCellProps: {
                        align: "center"
                    },
                    size: 120
                }
            },
            columns: columns,
            data: carData,
            editingMode: "modal",
            enableColumnOrdering: true,
            enableEditing: true,
            onEditingRowSave: ()=>{},
            onEditingRowCancel: ()=>{},
            renderRowActions: ({ row, table })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {
                    sx: {
                        display: "flex",
                        gap: "1rem"
                    },
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Tooltip, {
                            arrow: true,
                            placement: "left",
                            title: "Edit",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.IconButton, {
                                onClick: ()=>table.setEditingRow(row),
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_icons_material_Edit__WEBPACK_IMPORTED_MODULE_5__["default"], {})
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Tooltip, {
                            arrow: true,
                            placement: "right",
                            title: "Delete",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.IconButton, {
                                color: "error",
                                onClick: ()=>{},
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_icons_material_Delete__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {})
                            })
                        })
                    ]
                }),
            renderTopToolbarCustomActions: ()=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Button, {
                    color: "secondary",
                    onClick: handleOpenDialog,
                    variant: "contained",
                    children: "Cr\xe9er une annonce de voiture"
                }),
            enableExpanding: true
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CarAds);


/***/ })

};
;