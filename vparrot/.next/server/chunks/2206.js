"use strict";
exports.id = 2206;
exports.ids = [2206];
exports.modules = {

/***/ 42206:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ UserTestimonials)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var material_react_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6242);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(17421);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _mui_icons_material_CheckCircle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8349);
/* harmony import */ var _mui_icons_material_ClearOutlined__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(90802);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(93258);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9598);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* __next_internal_client_entry_do_not_use__ default auto */ 







function UserTestimonials() {
    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [selectedRows, setSelectedRows] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [pendingChanges, setPendingChanges] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});
    const handleSaveRowEdits = async ({ cell, values })=>{
        tableData[cell.row.index][cell.column.id] = value;
        //send/receive api updates here, then refetch or update local table data for re-render
        setTableData([
            ...tableData
        ]);
        exitEditingMode(); //required to exit editing mode and close modal
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        fetchData();
    }, []);
    const fetchData = async ()=>{
        try {
            const response = await axios__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z.get("/api/testimonials");
            setData(response.data);
        } catch (error) {
            console.error("Erreur lors de la r\xe9cup\xe9ration des t\xe9moignages:", error);
        }
    };
    const toggleValidation = (row, isValidated)=>{
        setPendingChanges({
            ...pendingChanges,
            [row.id]: {
                ...row,
                isValidated: isValidated
            }
        });
    };
    const handleSelectAll = ()=>{
        setSelectedRows(data.map((row)=>row.id));
    };
    const columns = [
        {
            accessorKey: "id",
            header: "ID",
            size: 80
        },
        {
            accessorKey: "name",
            header: "Nom",
            size: 140
        },
        {
            accessorKey: "date",
            header: "Date",
            Cell: ({ cell })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    children: new Date(cell.getValue()).toLocaleDateString()
                })
        },
        {
            accessorKey: "rating",
            header: "Note",
            size: 80
        },
        {
            accessorKey: "message",
            header: "Commentaire"
        },
        {
            accessorKey: "isValidated",
            header: "Valid\xe9",
            Cell: ({ cell })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    children: cell.getValue() ? "Oui" : "Non"
                })
        },
        {
            accessorKey: "status",
            header: "Statut",
            Cell: ({ cell })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    children: cell.row.original.isValidated ? "En ligne" : "Hors ligne"
                })
        }
    ];
    const applyChanges = async ()=>{
        console.log("Changements en attente avant la mise \xe0 jour:", pendingChanges);
        const updatePromises = Object.values(pendingChanges).map((row)=>{
            const { id, isValidated, status } = row;
            return axios__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z.put(`/api/testimonials/${id}`, {
                id,
                isValidated,
                status
            });
        });
        try {
            await Promise.all(updatePromises);
            console.log("Tous les changements ont \xe9t\xe9 appliqu\xe9s avec succ\xe8s.");
            // Réinitialiser les états
            setSelectedRows([]);
            fetchData();
            setPendingChanges({});
            // Rafraîchir la page
            window.location.reload();
        } catch (error) {
            console.error("Erreur lors de la mise \xe0 jour des t\xe9moignages:", error);
        }
        console.log("Changements en attente apr\xe8s la mise \xe0 jour:", pendingChanges);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(material_react_table__WEBPACK_IMPORTED_MODULE_2__/* .MaterialReactTable */ .P2, {
                columns: columns,
                data: data,
                positionActionsColumn: "last",
                getRowId: (row)=>row.id,
                enableRowActions: true,
                renderRowActions: ({ row })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Box, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.IconButton, {
                                onClick: ()=>toggleValidation(row, true),
                                style: {
                                    backgroundColor: pendingChanges[row.id]?.isValidated ? "lightgrey" : "transparent"
                                },
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_icons_material_CheckCircle__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {})
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.IconButton, {
                                onClick: ()=>toggleValidation(row, false),
                                style: {
                                    backgroundColor: pendingChanges[row.id]?.isValidated === false ? "lightgrey" : "transparent"
                                },
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_icons_material_ClearOutlined__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {})
                            })
                        ]
                    })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Button, {
                className: "btn btn-primary m-4",
                onClick: applyChanges,
                children: "Appliquer les changements"
            })
        ]
    });
}


/***/ })

};
;