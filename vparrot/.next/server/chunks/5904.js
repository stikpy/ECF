"use strict";
exports.id = 5904;
exports.ids = [5904];
exports.modules = {

/***/ 35904:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GET: () => (/* binding */ handler),
/* harmony export */   POST: () => (/* binding */ handler),
/* harmony export */   authOptions: () => (/* binding */ authOptions)
/* harmony export */ });
/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49861);
/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(42446);
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(53524);
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var zod__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7874);




const prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_2__.PrismaClient();
const UserSchema = zod__WEBPACK_IMPORTED_MODULE_3__/* ["default"].object */ .ZP.object({
    email: zod__WEBPACK_IMPORTED_MODULE_3__/* ["default"].string */ .ZP.string().email(),
    password: zod__WEBPACK_IMPORTED_MODULE_3__/* ["default"].string */ .ZP.string().min(4)
});
const authOptions = {
    secret: process.env.NEXTAUTH_SECRET,
    session: {
        strategy: "jwt"
    },
    providers: [
        (0,next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)({
            name: "Email and Password",
            credentials: {
                email: {
                    label: "Email",
                    type: "email",
                    placeholder: "hello@example.com"
                },
                password: {
                    label: "Password",
                    type: "password",
                    placeholder: "********"
                }
            },
            async authorize (credentials) {
                // Validation du schéma
                if (!UserSchema.safeParse(credentials).success) {
                    return null; // Vous pourriez ici envoyer un message d'erreur spécifique
                }
                // Recherche de l'utilisateur
                const user = await prisma.users.findUnique({
                    where: {
                        email: credentials?.email
                    }
                });
                // Si l'utilisateur n'existe pas
                if (!user) {
                    return null; // Vous pourriez ici envoyer un message d'erreur spécifique
                }
                // Vérification du mot de passe
                // const isValidPassword = await bcrypt.compare(credentials.password, user?.password);
                // if (!isValidPassword) {
                //   return null; // Vous pourriez ici envoyer un message d'erreur spécifique
                // }
                return {
                    id: String(user.id),
                    name: user.firstname,
                    email: user.email,
                    role: user.role
                };
            }
        })
    ],
    callbacks: {
        jwt ({ token, user }) {
            if (user) token.role = user.role;
            return token;
        },
        session ({ session, token, user }) {
            if (session?.user) {
                session.user.role = token?.role;
            }
            return session;
        }
    }
};
const handler = next_auth__WEBPACK_IMPORTED_MODULE_0___default()(authOptions);



/***/ })

};
;