"use strict";
exports.id = 4978;
exports.ids = [4978];
exports.modules = {

/***/ 40948:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11440);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(52451);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);




function CarCardView({ id, imageUrl, title, description, price, km, year }) {
    const newHref = `/cars/${id}`;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
        href: newHref,
        title: "D\xe9tails de l'annonce",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "card w-full bg-base-100 shadow-xl cursor-pointer",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                    className: "card-title",
                    children: title
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                    className: "card-image",
                    src: imageUrl,
                    alt: title,
                    width: 1200,
                    height: 800,
                    priority: true
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                    className: "mx-2",
                    children: description
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "card-actions flex justify-between items-center m-4",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                            className: "mb-0 underline",
                            children: [
                                price,
                                " €"
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                            className: "mb-0 underline",
                            children: [
                                km,
                                " km"
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: "mb-0 underline",
                            children: year
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            className: "btn btn-primary",
                            children: "Voir la fiche"
                        })
                    ]
                })
            ]
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CarCardView);


/***/ }),

/***/ 24978:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CarFilter)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(93258);
/* harmony import */ var _CarCardView__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(40948);
/* __next_internal_client_entry_do_not_use__ default auto */ 
// CarFilter.tsx



function CarFilter() {
    const [cardData, setCardData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [minPrice, setMinPrice] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [maxPrice, setMaxPrice] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [minYear, setMinYear] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [maxYear, setMaxYear] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [minKm, setMinKm] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [maxKm, setMaxKm] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [filteredCars, setFilteredCars] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const fetchData = async ()=>{
            try {
                const response = await axios__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z.get("/api/cars");
                setCardData(response.data);
                setFilteredCars(response.data);
            } catch (error) {
                console.error("Erreur de r\xe9cup\xe9ration des donn\xe9es:", error);
            }
        };
        fetchData();
    }, []);
    const applyFilters = ()=>{
        const filtered = cardData.filter((data)=>{
            return (minPrice === "" || data.price >= parseFloat(minPrice)) && (maxPrice === "" || data.price <= parseFloat(maxPrice)) && (minYear === "" || data.year >= parseInt(minYear)) && (maxYear === "" || data.year <= parseInt(maxYear)) && (minKm === "" || data.km >= parseFloat(minKm)) && (maxKm === "" || data.km <= parseFloat(maxKm));
        });
        setFilteredCars(filtered);
    };
    const resetFilters = ()=>{
        setMinPrice("");
        setMaxPrice("");
        setMinYear("");
        setMaxYear("");
        setMinKm("");
        setMaxKm("");
        setFilteredCars(cardData);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "m-4",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "collapse collapse-arrow  bg-base-200",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                        type: "checkbox"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: "collapse-title text-2xl hover:scale-125 font-medium",
                        children: "Filtrer les annonces"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "collapse-content",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex flex-col md:flex-row gap-4",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                htmlFor: "minPrice",
                                                children: "Prix Minimum:"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                className: "input input-bordered w-full max-w-xs",
                                                type: "text",
                                                id: "minPrice",
                                                name: "minPrice",
                                                placeholder: "",
                                                value: minPrice,
                                                onChange: (e)=>setMinPrice(e.target.value)
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                htmlFor: "maxPrice",
                                                children: "Prix Maximum:"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                className: "input input-bordered w-full max-w-xs",
                                                type: "text",
                                                id: "maxPrice",
                                                name: "maxPrice",
                                                placeholder: "",
                                                value: maxPrice,
                                                onChange: (e)=>setMaxPrice(e.target.value)
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                htmlFor: "minYear",
                                                children: "Ann\xe9e Minimum:"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                className: "input input-bordered w-full max-w-xs",
                                                type: "text",
                                                id: "minYear",
                                                name: "minYear",
                                                placeholder: "",
                                                value: minYear,
                                                onChange: (e)=>setMinYear(e.target.value)
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                htmlFor: "maxYear",
                                                children: "Ann\xe9e Maximum:"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                className: "input input-bordered w-full max-w-xs",
                                                type: "text",
                                                id: "maxYear",
                                                name: "maxYear",
                                                placeholder: "",
                                                value: maxYear,
                                                onChange: (e)=>setMaxYear(e.target.value)
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                htmlFor: "minKm",
                                                children: "Kilom\xe9trage Minimum:"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                className: "input input-bordered w-full max-w-xs",
                                                type: "text",
                                                id: "minKm",
                                                name: "minKm",
                                                placeholder: "",
                                                value: minKm,
                                                onChange: (e)=>setMinKm(e.target.value)
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                htmlFor: "maxKm",
                                                children: "Kilom\xe9trage Maximum:"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                className: "input input-bordered w-full max-w-xs",
                                                type: "text",
                                                id: "maxKm",
                                                name: "maxKm",
                                                placeholder: "",
                                                value: maxKm,
                                                onChange: (e)=>setMaxKm(e.target.value)
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex m-4 gap-4 justify-center",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                        className: "btn btn-primary",
                                        onClick: applyFilters,
                                        children: "Appliquer les filtres"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                        className: "btn btn-primary",
                                        onClick: resetFilters,
                                        children: "R\xe9initialiser les filtres"
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 text-center justify-center m-4",
                children: filteredCars.map((data)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_CarCardView__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                        id: data.id,
                        imageUrl: data.imageUrl,
                        title: data.title,
                        description: data.description,
                        price: data.price,
                        km: data.km,
                        year: data.year
                    }, data.id))
            })
        ]
    });
}


/***/ })

};
;