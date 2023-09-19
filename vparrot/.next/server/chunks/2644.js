"use strict";
exports.id = 2644;
exports.ids = [2644];
exports.modules = {

/***/ 32644:
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
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(93258);
/* __next_internal_client_entry_do_not_use__ default auto */ 






const CarAds = ()=>{
    const [open, setOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [formData, setFormData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        title: "",
        description: "",
        price: "",
        imageURL: ""
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
    const handleSubmit = async ()=>{
        // Envoyez les données du formulaire au backend via une requête axios ou autre
        try {
            const response = await axios__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z.post("/api/cars", formData); // Assurez-vous d'avoir une route pour la création d'annonces de voiture ("/api/cars" dans cet exemple)
            console.log("Annonce de voiture cr\xe9\xe9e avec succ\xe8s :", response.data);
            handleCloseDialog();
        // Réinitialisez les champs du formulaire ou effectuez d'autres actions nécessaires
        } catch (error) {
            console.error("Erreur lors de la cr\xe9ation de l'annonce de voiture :", error);
        }
    };
    const fetchCarData = async ()=>{
        try {
            const response = await axios__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z.get("/api/auth/profile"); // Assurez-vous d'avoir une route pour récupérer les données des voitures ("/api/cars" dans cet exemple)
            setCarData(response.data);
        } catch (error) {
            console.error("Erreur lors de la r\xe9cup\xe9ration des donn\xe9es des voitures :", error);
        }
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        fetchCarData();
    }, []); // Assurez-vous d'appeler fetchCarData une fois que le composant est monté
    const columns = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>[
            {
                accessorKey: "email",
                header: "Email",
                size: 140
            },
            {
                accessorKey: "lastname",
                header: "Nom",
                size: 140
            },
            {
                accessorKey: "firstname",
                header: "Pr\xe9nom",
                size: 80
            },
            {
                accessorKey: "role",
                header: "Role",
                size: 80
            }
        ], []);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(material_react_table__WEBPACK_IMPORTED_MODULE_2__/* .MaterialReactTable */ .P2, {
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
            editingMode: "modal" //default
            ,
            enableColumnOrdering: true
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CarAds);


/***/ })

};
;