(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _auth_login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth/login/login.component */ "./src/app/auth/login/login.component.ts");
/* harmony import */ var _auth_register_register_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth/register/register.component */ "./src/app/auth/register/register.component.ts");
/* harmony import */ var _pomodoro_pomodoro_pomodoro_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pomodoro/pomodoro/pomodoro.component */ "./src/app/pomodoro/pomodoro/pomodoro.component.ts");







const routes = [
    { path: 'login', component: _auth_login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"], pathMatch: 'full' },
    { path: 'register', component: _auth_register_register_component__WEBPACK_IMPORTED_MODULE_3__["RegisterComponent"], pathMatch: 'full' },
    { path: 'pomodoro', component: _pomodoro_pomodoro_pomodoro_component__WEBPACK_IMPORTED_MODULE_4__["PomodoroComponent"] },
    { path: '', redirectTo: 'login', pathMatch: 'full' }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class AppComponent {
    constructor() {
        this.title = 'pomodoro-app';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 11, vars: 0, consts: [["role", "banner", 1, "toolbar"], ["width", "40", "alt", "Angular Logo", "src", "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg=="], [1, "spacer"], ["aria-label", "Pomodoro application", "target", "_blank", "rel", "noopener", "href", "https://twitter.com/angular", "title", "Twitter"], ["src", "assets/icons/alarm.png", "alt", "alarm logo"], ["role", "main", 1, "content"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Pomodoro");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " \u00A0Pomodoro\u00A0\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */", "[_nghost-%COMP%] {\n        font-family: 'Roboto', sans-serif;\n        font-size: 1rem;\n        color: #333;\n        box-sizing: border-box;\n        -webkit-font-smoothing: antialiased;\n        -moz-osx-font-smoothing: grayscale;\n    }\n    \n    h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%] {\n        margin: 8px 0;\n    }\n    \n    p[_ngcontent-%COMP%] {\n        margin: 0;\n    }\n    \n    .spacer[_ngcontent-%COMP%] {\n        flex: 1;\n    }\n    \n    .toolbar[_ngcontent-%COMP%] {\n        position: absolute;\n        top: 0;\n        left: 0;\n        right: 0;\n        height: 60px;\n        display: flex;\n        align-items: center;\n        background-color: #1976d2;\n        color: white;\n        font-weight: 600;\n    }\n    \n    .toolbar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n        margin: 0 16px;\n    }\n    \n    .toolbar[_ngcontent-%COMP%]   #twitter-logo[_ngcontent-%COMP%] {\n        height: 40px;\n        margin: 0 16px;\n    }\n    \n    .toolbar[_ngcontent-%COMP%]   #twitter-logo[_ngcontent-%COMP%]:hover {\n        opacity: 0.8;\n    }\n    \n    .content[_ngcontent-%COMP%] {\n        display: flex;\n        padding: 0 16px;\n        flex-direction: column;\n        align-items: center;\n        height: calc(100vh - 120px);\n        position: relative;\n        top: 60px;\n        bottom: 60px;\n        overflow-y: auto;\n    }\n    \n    svg.material-icons[_ngcontent-%COMP%] {\n        height: 24px;\n        width: auto;\n    }\n    \n    svg.material-icons[_ngcontent-%COMP%]:not(:last-child) {\n        margin-right: 8px;\n    }\n    \n    .card[_ngcontent-%COMP%]   svg.material-icons[_ngcontent-%COMP%]   path[_ngcontent-%COMP%] {\n        fill: #888;\n    }\n    \n    .card-container[_ngcontent-%COMP%] {\n        display: flex;\n        flex-wrap: wrap;\n        justify-content: center;\n        margin-top: 16px;\n    }\n    \n    \n    .terminal[_ngcontent-%COMP%]::before {\n        content: \"\\2022 \\2022 \\2022\";\n        position: absolute;\n        top: 0;\n        left: 0;\n        height: 4px;\n        background: rgb(58, 58, 58);\n        color: #c2c3c4;\n        width: 100%;\n        font-size: 2rem;\n        line-height: 0;\n        padding: 14px 0;\n        text-indent: 4px;\n    }\n    \n    .terminal[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%] {\n        font-family: SFMono-Regular, Consolas, Liberation Mono, Menlo, monospace;\n        color: white;\n        padding: 0 1rem 1rem;\n        margin: 0;\n    }\n    \n    .circle-link[_ngcontent-%COMP%] {\n        height: 40px;\n        width: 40px;\n        border-radius: 40px;\n        margin: 8px;\n        background-color: white;\n        border: 1px solid #eeeeee;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        cursor: pointer;\n        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n        transition: 1s ease-out;\n    }\n    \n    .circle-link[_ngcontent-%COMP%]:hover {\n        transform: translateY(-0.25rem);\n        box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);\n    }\n    \n    footer[_ngcontent-%COMP%] {\n        position: fixed;\n        left: 0;\n        bottom: 0;\n        width: 100%;\n        height: 60px;\n        display: flex;\n        align-items: center;\n        background-color: #1976d2;\n        color: white;\n        font-weight: 600;\n    }\n    \n    footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n        display: flex;\n        align-items: center;\n    }\n    \n    .github-star-badge[_ngcontent-%COMP%] {\n        color: #24292e;\n        display: flex;\n        align-items: center;\n        font-size: 12px;\n        padding: 3px 10px;\n        border: 1px solid rgba(27, 31, 35, .2);\n        border-radius: 3px;\n        background-image: linear-gradient(-180deg, #fafbfc, #eff3f6 90%);\n        margin-left: 4px;\n        font-weight: 600;\n        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol;\n    }\n    \n    .github-star-badge[_ngcontent-%COMP%]:hover {\n        background-image: linear-gradient(-180deg, #f0f3f6, #e6ebf1 90%);\n        border-color: rgba(27, 31, 35, .35);\n        background-position: -.5em;\n    }\n    \n    .github-star-badge[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n        height: 16px;\n        width: 16px;\n        margin-right: 4px;\n    }\n    \n    svg#clouds[_ngcontent-%COMP%] {\n        position: fixed;\n        bottom: -160px;\n        left: -230px;\n        z-index: -10;\n        width: 1920px;\n    }\n    \n    \n    @media screen and (max-width: 767px) {\n        .card-container[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:not(.circle-link), .terminal[_ngcontent-%COMP%] {\n            width: 100%;\n        }\n        .card[_ngcontent-%COMP%]:not(.highlight-card) {\n            height: 16px;\n            margin: 8px 0;\n        }\n        .card.highlight-card[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n            margin-left: 72px;\n        }\n        svg#rocket-smoke[_ngcontent-%COMP%] {\n            right: 120px;\n            transform: rotate(-5deg);\n        }\n    }\n    \n    @media screen and (max-width: 575px) {\n        svg#rocket-smoke[_ngcontent-%COMP%] {\n            display: none;\n            visibility: hidden;\n        }\n    }"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var _pomodoro_pomodoro_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pomodoro/pomodoro.module */ "./src/app/pomodoro/pomodoro.module.ts");







class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _core_core_module__WEBPACK_IMPORTED_MODULE_4__["CoreModule"],
            _pomodoro_pomodoro_module__WEBPACK_IMPORTED_MODULE_5__["PomodoroModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _core_core_module__WEBPACK_IMPORTED_MODULE_4__["CoreModule"],
        _pomodoro_pomodoro_module__WEBPACK_IMPORTED_MODULE_5__["PomodoroModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _core_core_module__WEBPACK_IMPORTED_MODULE_4__["CoreModule"],
                    _pomodoro_pomodoro_module__WEBPACK_IMPORTED_MODULE_5__["PomodoroModule"],
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/auth/auth.module.ts":
/*!*************************************!*\
  !*** ./src/app/auth/auth.module.ts ***!
  \*************************************/
/*! exports provided: AuthModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthModule", function() { return AuthModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login/login.component */ "./src/app/auth/login/login.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./register/register.component */ "./src/app/auth/register/register.component.ts");
/* harmony import */ var _common_auth_common_auth_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./common-auth/common-auth.component */ "./src/app/auth/common-auth/common-auth.component.ts");






class AuthModule {
}
AuthModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AuthModule });
AuthModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AuthModule_Factory(t) { return new (t || AuthModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AuthModule, { declarations: [_login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"], _register_register_component__WEBPACK_IMPORTED_MODULE_3__["RegisterComponent"], _common_auth_common_auth_component__WEBPACK_IMPORTED_MODULE_4__["CommonAuthComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"], _register_register_component__WEBPACK_IMPORTED_MODULE_3__["RegisterComponent"], _common_auth_common_auth_component__WEBPACK_IMPORTED_MODULE_4__["CommonAuthComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/auth/common-auth/common-auth.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/auth/common-auth/common-auth.component.ts ***!
  \***********************************************************/
/*! exports provided: CommonAuthComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonAuthComponent", function() { return CommonAuthComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


const _c0 = ["*"];
class CommonAuthComponent {
    constructor() {
        this.src = '';
    }
    ngOnInit() {
    }
}
CommonAuthComponent.ɵfac = function CommonAuthComponent_Factory(t) { return new (t || CommonAuthComponent)(); };
CommonAuthComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CommonAuthComponent, selectors: [["app-common-auth"]], inputs: { src: "src" }, ngContentSelectors: _c0, decls: 6, vars: 1, consts: [[1, "login"], [1, "illustration"], ["alt", "illustration-login", 3, "src"], [1, "form-container"], [1, "form"]], template: function CommonAuthComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.src, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    } }, styles: ["[_nghost-%COMP%] {\n  height: 100%;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.login[_ngcontent-%COMP%] {\n  height: 70%;\n  width: 60%;\n  display: flex;\n  border: 1px solid lightgrey;\n  border-radius: 5px;\n  padding: 5px;\n  box-shadow: 12px 12px 2px 1px rgba(177, 177, 177, 0.2);\n}\n\n.login[_ngcontent-%COMP%]   .illustration[_ngcontent-%COMP%] {\n  width: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 10px;\n  border-right: 1px solid lightgray;\n}\n\n.login[_ngcontent-%COMP%]   .illustration[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 70%;\n}\n\n.login[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%] {\n  width: 50%;\n}\n\n.login[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%] {\n  padding-left: 20%;\n  padding-right: 20%;\n  padding-top: 10%;\n}\n\n.login[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .login-input[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n@media only screen and (max-width: 768px) {\n  .login[_ngcontent-%COMP%] {\n    height: 95%;\n    width: 100%;\n    margin-bottom: 5%;\n  }\n  .login[_ngcontent-%COMP%]   .illustration[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .login[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%] {\n    width: 90%;\n  }\n  .login[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%] {\n    padding: 5%;\n  }\n  .login[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .login-input[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9jb21tb24tYXV0aC9jb21tb24tYXV0aC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUFDSjs7QUFFQTtFQUNJLFdBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLDJCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0Esc0RBQUE7QUFDSjs7QUFBSTtFQUNJLFVBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGFBQUE7RUFDQSxpQ0FBQTtBQUVSOztBQURRO0VBQ0ksVUFBQTtBQUdaOztBQUFJO0VBQ0ksVUFBQTtBQUVSOztBQURRO0VBQ0ksaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBR1o7O0FBRlk7RUFDSSxXQUFBO0FBSWhCOztBQUVBO0VBQ0k7SUFDSSxXQUFBO0lBQ0EsV0FBQTtJQUNBLGlCQUFBO0VBQ047RUFBTTtJQUNJLGFBQUE7RUFFVjtFQUFNO0lBQ0ksVUFBQTtFQUVWO0VBRFU7SUFDSSxXQUFBO0VBR2Q7RUFGYztJQUNJLFdBQUE7RUFJbEI7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvY29tbW9uLWF1dGgvY29tbW9uLWF1dGguY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5sb2dpbiB7XHJcbiAgICBoZWlnaHQ6IDcwJTtcclxuICAgIHdpZHRoOiA2MCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmV5O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgYm94LXNoYWRvdzogMTJweCAxMnB4IDJweCAxcHggcmdiYSgxNzcsIDE3NywgMTc3LCAwLjIpO1xyXG4gICAgLmlsbHVzdHJhdGlvbiB7XHJcbiAgICAgICAgd2lkdGg6IDUwJTtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCBsaWdodGdyYXk7XHJcbiAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgd2lkdGg6IDcwJTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuZm9ybS1jb250YWluZXIge1xyXG4gICAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICAgICAgLmZvcm0ge1xyXG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDIwJTtcclxuICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMjAlO1xyXG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogMTAlO1xyXG4gICAgICAgICAgICAubG9naW4taW5wdXQge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgIC5sb2dpbiB7XHJcbiAgICAgICAgaGVpZ2h0OiA5NSU7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNSU7XHJcbiAgICAgICAgLmlsbHVzdHJhdGlvbiB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5mb3JtLWNvbnRhaW5lciB7XHJcbiAgICAgICAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICAgICAgICAgIC5mb3JtIHtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDUlO1xyXG4gICAgICAgICAgICAgICAgLmxvZ2luLWlucHV0IHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CommonAuthComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-common-auth',
                templateUrl: './common-auth.component.html',
                styleUrls: ['./common-auth.component.scss']
            }]
    }], function () { return []; }, { src: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/auth/login/login.component.ts":
/*!***********************************************!*\
  !*** ./src/app/auth/login/login.component.ts ***!
  \***********************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _common_auth_common_auth_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common-auth/common-auth.component */ "./src/app/auth/common-auth/common-auth.component.ts");




class LoginComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    register() {
        this.router.navigate(['/', 'register']);
    }
    login() {
        this.router.navigate(['/', 'pomodoro']);
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 17, vars: 0, consts: [["src", "assets/images/signin.svg"], [1, "heading"], [1, "form-input", "login-input"], ["for", "username"], ["type", "text", "placeholder", "Enter your username", "name", "username"], ["for", "password"], ["type", "password", "placeholder", "Enter your password", "name", "username"], [1, "form-button", "primary", "w-100", 3, "click"], [1, "link"], [3, "click"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-common-auth", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Please enter your login details to continue");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Username");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_11_listener() { return ctx.login(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Sign in");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Don't have an account? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_a_click_15_listener() { return ctx.register(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Sign up for free");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_common_auth_common_auth_component__WEBPACK_IMPORTED_MODULE_2__["CommonAuthComponent"]], styles: ["[_nghost-%COMP%] {\n  height: 100%;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.heading[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n}\n\n.link[_ngcontent-%COMP%] {\n  color: darkgray;\n}\n\n.link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n\n.link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUFDSjs7QUFFQTtFQUNJLGFBQUE7RUFDQSxXQUFBO0FBQ0o7O0FBRUE7RUFDSSxlQUFBO0FBQ0o7O0FBQUk7RUFDSSxpQkFBQTtBQUVSOztBQURRO0VBQ0ksZUFBQTtBQUdaIiwiZmlsZSI6InNyYy9hcHAvYXV0aC9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLmhlYWRpbmcge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4ubGluayB7XHJcbiAgICBjb2xvcjogZGFya2dyYXk7XHJcbiAgICBhIHtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login',
                templateUrl: './login.component.html',
                styleUrls: ['./login.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/auth/register/register.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/auth/register/register.component.ts ***!
  \*****************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _common_auth_common_auth_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common-auth/common-auth.component */ "./src/app/auth/common-auth/common-auth.component.ts");




class RegisterComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() { }
    login() {
        this.router.navigate(['/', 'login']);
    }
}
RegisterComponent.ɵfac = function RegisterComponent_Factory(t) { return new (t || RegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
RegisterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RegisterComponent, selectors: [["app-register"]], decls: 21, vars: 0, consts: [["src", "assets/images/register.svg"], [1, "heading"], [1, "form-input", "login-input"], ["for", "username"], ["type", "text", "placeholder", "Enter your username", "name", "username"], ["for", "email"], ["type", "email", "placeholder", "Enter your email address", "name", "email"], ["for", "password"], ["type", "password", "placeholder", "Enter your password", "name", "username"], [1, "form-button", "primary", "w-100"], [1, "link"], [3, "click"]], template: function RegisterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-common-auth", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Please enter your details to register your account");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Username");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Register");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Already have an account? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RegisterComponent_Template_a_click_19_listener() { return ctx.login(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Sign in to your account");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_common_auth_common_auth_component__WEBPACK_IMPORTED_MODULE_2__["CommonAuthComponent"]], styles: ["[_nghost-%COMP%] {\n  height: 100%;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.heading[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n}\n\n.link[_ngcontent-%COMP%] {\n  color: darkgray;\n}\n\n.link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n\n.link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUFDSjs7QUFFQTtFQUNJLGFBQUE7RUFDQSxXQUFBO0FBQ0o7O0FBRUE7RUFDSSxlQUFBO0FBQ0o7O0FBQUk7RUFDSSxpQkFBQTtBQUVSOztBQURRO0VBQ0ksZUFBQTtBQUdaIiwiZmlsZSI6InNyYy9hcHAvYXV0aC9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLmhlYWRpbmcge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4ubGluayB7XHJcbiAgICBjb2xvcjogZGFya2dyYXk7XHJcbiAgICBhIHtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegisterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-register',
                templateUrl: './register.component.html',
                styleUrls: ['./register.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/core/components/footer/footer.component.ts":
/*!************************************************************!*\
  !*** ./src/app/core/components/footer/footer.component.ts ***!
  \************************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 2, vars: 0, template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "footer works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/core/components/header/header.component.ts":
/*!************************************************************!*\
  !*** ./src/app/core/components/header/header.component.ts ***!
  \************************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class HeaderComponent {
    constructor() { }
    ngOnInit() {
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 2, vars: 0, template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "header works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/core/core.module.ts":
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/*! exports provided: CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/core/components/header/header.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/core/components/footer/footer.component.ts");
/* harmony import */ var _auth_auth_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../auth/auth.module */ "./src/app/auth/auth.module.ts");
/* harmony import */ var ngx_indexed_db__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-indexed-db */ "./node_modules/ngx-indexed-db/__ivy_ngcc__/fesm2015/ngx-indexed-db.js");
/* harmony import */ var _service_task_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./service/task.service */ "./src/app/core/service/task.service.ts");









const dbConfig = {
    name: 'pomodorodb',
    version: 1,
    objectStoresMeta: [
        {
            store: 'tasks', storeConfig: { keyPath: 'id', autoIncrement: true },
            storeSchema: [
                { name: 'title', keypath: 'title', options: { unique: false } },
                { name: 'note', keypath: 'note', options: { unique: false } },
                { name: 'estPomodoro', keypath: 'estPomodoro', options: { unique: false } },
                { name: 'completed', keypath: 'completed', options: { unique: false } }
            ]
        }
    ]
};
class CoreModule {
}
CoreModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CoreModule });
CoreModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function CoreModule_Factory(t) { return new (t || CoreModule)(); }, providers: [{ provide: _service_task_service__WEBPACK_IMPORTED_MODULE_6__["AbstractTaskService"], useValue: _service_task_service__WEBPACK_IMPORTED_MODULE_6__["TaskService"] }], imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _auth_auth_module__WEBPACK_IMPORTED_MODULE_4__["AuthModule"], ngx_indexed_db__WEBPACK_IMPORTED_MODULE_5__["NgxIndexedDBModule"].forRoot(dbConfig)]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CoreModule, { declarations: [_components_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _auth_auth_module__WEBPACK_IMPORTED_MODULE_4__["AuthModule"], ngx_indexed_db__WEBPACK_IMPORTED_MODULE_5__["NgxIndexedDBModule"]], exports: [_components_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CoreModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_components_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]],
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _auth_auth_module__WEBPACK_IMPORTED_MODULE_4__["AuthModule"], ngx_indexed_db__WEBPACK_IMPORTED_MODULE_5__["NgxIndexedDBModule"].forRoot(dbConfig)],
                exports: [_components_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]],
                providers: [{ provide: _service_task_service__WEBPACK_IMPORTED_MODULE_6__["AbstractTaskService"], useValue: _service_task_service__WEBPACK_IMPORTED_MODULE_6__["TaskService"] }]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/core/model/task.model.ts":
/*!******************************************!*\
  !*** ./src/app/core/model/task.model.ts ***!
  \******************************************/
/*! exports provided: Task */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Task", function() { return Task; });
class Task {
    constructor(title, note, estPomodoro = 1, projects) {
        this.title = title;
        this.note = note;
        this.estPomodoro = estPomodoro;
        this.projects = projects;
        this.completed = false;
    }
}


/***/ }),

/***/ "./src/app/core/model/timer.model.ts":
/*!*******************************************!*\
  !*** ./src/app/core/model/timer.model.ts ***!
  \*******************************************/
/*! exports provided: Timer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Timer", function() { return Timer; });
class Timer {
    constructor(timeInMs, interval = 1000, callback, completedCallback) {
        this.completedCallback = completedCallback;
        this.timerInterval = null;
        this.TIME_MS = 1000;
        this.timeInMs = timeInMs;
        this.interval = interval;
        this.callback = callback;
        this.timeInMinutes = timeInMs / (60 * this.TIME_MS);
    }
    hasStarted() {
        return this.timerInterval !== null;
    }
    start() {
        this.timerInterval = setInterval(() => {
            this.timeInMs -= this.interval;
            this === null || this === void 0 ? void 0 : this.callback();
            if (this.timeInMs < 0)
                this.stop();
        }, this.interval);
    }
    stop() {
        clearInterval(this === null || this === void 0 ? void 0 : this.timerInterval);
        this.timerInterval = null;
        this.timeInMs = this.timeInMinutes * 60 * this.TIME_MS;
        this === null || this === void 0 ? void 0 : this.callback();
        this === null || this === void 0 ? void 0 : this.completedCallback();
    }
    getFormattedTime() {
        return (Math.floor((this.timeInMs / this.TIME_MS) / (60))) + ' : ' + (((this.timeInMs / this.TIME_MS) % 60) + '').padStart(2, '0');
    }
}


/***/ }),

/***/ "./src/app/core/service/task.service.ts":
/*!**********************************************!*\
  !*** ./src/app/core/service/task.service.ts ***!
  \**********************************************/
/*! exports provided: AbstractTaskService, TaskService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbstractTaskService", function() { return AbstractTaskService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskService", function() { return TaskService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var ngx_indexed_db__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-indexed-db */ "./node_modules/ngx-indexed-db/__ivy_ngcc__/fesm2015/ngx-indexed-db.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/ngrx-store.js");





class AbstractTaskService {
    notifyTaskDone(task) {
        const notificationMessage = `task with title ${task.title} and details : ${task.note} has been completed`;
        if (!("Notification" in window)) {
            alert("This browser does not support desktop notification");
        }
        else if (Notification.permission === "granted") {
            var notification = new Notification(notificationMessage);
        }
        else if (Notification.permission !== "denied") {
            Notification.requestPermission().then((permission) => {
                if (permission === "granted") {
                    var notification = new Notification(notificationMessage);
                }
            });
        }
    }
}
class TaskService extends AbstractTaskService {
    constructor(dbService, store) {
        super();
        this.dbService = dbService;
        this.store = store;
        this.storeName = 'tasks';
    }
    saveTasks(task) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["from"])(this.dbService.add(this.storeName, task));
    }
    getAllTasks() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["from"])(this.dbService.getAll(this.storeName));
    }
    updateTask(task) {
        const updatedTask = Object.assign(Object.assign({}, task), { completed: true });
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["from"])(this.dbService.update(this.storeName, updatedTask));
    }
    deleteTask(task) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["from"])(this.dbService.delete(this.storeName, task.id));
    }
}
TaskService.ɵfac = function TaskService_Factory(t) { return new (t || TaskService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ngx_indexed_db__WEBPACK_IMPORTED_MODULE_2__["NgxIndexedDBService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"])); };
TaskService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TaskService, factory: TaskService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TaskService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: ngx_indexed_db__WEBPACK_IMPORTED_MODULE_2__["NgxIndexedDBService"] }, { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pomodoro/pomodoro.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pomodoro/pomodoro.module.ts ***!
  \*********************************************/
/*! exports provided: PomodoroModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PomodoroModule", function() { return PomodoroModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _pomodoro_pomodoro_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pomodoro/pomodoro.component */ "./src/app/pomodoro/pomodoro/pomodoro.component.ts");
/* harmony import */ var _timer_timer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./timer/timer.component */ "./src/app/pomodoro/timer/timer.component.ts");
/* harmony import */ var _tasks_tasks_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tasks/tasks.component */ "./src/app/pomodoro/tasks/tasks.component.ts");
/* harmony import */ var _tasks_task_item_task_item_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tasks/task-item/task-item.component */ "./src/app/pomodoro/tasks/task-item/task-item.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/ngrx-store.js");
/* harmony import */ var _pomodoro_store_pomodor_reducer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../pomodoro/store/pomodor.reducer */ "./src/app/pomodoro/store/pomodor.reducer.ts");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/__ivy_ngcc__/fesm2015/ngrx-effects.js");
/* harmony import */ var _store_pomodoro_effects__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./store/pomodoro.effects */ "./src/app/pomodoro/store/pomodoro.effects.ts");














class PomodoroModule {
}
PomodoroModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: PomodoroModule });
PomodoroModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function PomodoroModule_Factory(t) { return new (t || PomodoroModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_7__["StoreModule"].forRoot({ taskList: _pomodoro_store_pomodor_reducer__WEBPACK_IMPORTED_MODULE_8__["TaskReducer"] }), _ngrx_effects__WEBPACK_IMPORTED_MODULE_9__["EffectsModule"].forRoot([_store_pomodoro_effects__WEBPACK_IMPORTED_MODULE_10__["PomodoroEffects"]])]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PomodoroModule, { declarations: [_timer_timer_component__WEBPACK_IMPORTED_MODULE_3__["TimerComponent"], _tasks_tasks_component__WEBPACK_IMPORTED_MODULE_4__["TasksComponent"], _pomodoro_pomodoro_component__WEBPACK_IMPORTED_MODULE_2__["PomodoroComponent"], _tasks_task_item_task_item_component__WEBPACK_IMPORTED_MODULE_5__["TaskItemComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_7__["StoreRootModule"], _ngrx_effects__WEBPACK_IMPORTED_MODULE_9__["EffectsRootModule"]], exports: [_timer_timer_component__WEBPACK_IMPORTED_MODULE_3__["TimerComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PomodoroModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_timer_timer_component__WEBPACK_IMPORTED_MODULE_3__["TimerComponent"], _tasks_tasks_component__WEBPACK_IMPORTED_MODULE_4__["TasksComponent"], _pomodoro_pomodoro_component__WEBPACK_IMPORTED_MODULE_2__["PomodoroComponent"], _tasks_task_item_task_item_component__WEBPACK_IMPORTED_MODULE_5__["TaskItemComponent"]],
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_7__["StoreModule"].forRoot({ taskList: _pomodoro_store_pomodor_reducer__WEBPACK_IMPORTED_MODULE_8__["TaskReducer"] }), _ngrx_effects__WEBPACK_IMPORTED_MODULE_9__["EffectsModule"].forRoot([_store_pomodoro_effects__WEBPACK_IMPORTED_MODULE_10__["PomodoroEffects"]])],
                exports: [_timer_timer_component__WEBPACK_IMPORTED_MODULE_3__["TimerComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pomodoro/pomodoro/pomodoro.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/pomodoro/pomodoro/pomodoro.component.ts ***!
  \*********************************************************/
/*! exports provided: PomodoroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PomodoroComponent", function() { return PomodoroComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _store_pomodoro_action__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store/pomodoro.action */ "./src/app/pomodoro/store/pomodoro.action.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/ngrx-store.js");
/* harmony import */ var src_app_core_service_task_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/service/task.service */ "./src/app/core/service/task.service.ts");
/* harmony import */ var _timer_timer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../timer/timer.component */ "./src/app/pomodoro/timer/timer.component.ts");
/* harmony import */ var _tasks_tasks_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../tasks/tasks.component */ "./src/app/pomodoro/tasks/tasks.component.ts");








class PomodoroComponent {
    constructor(store, taskService) {
        this.store = store;
        this.taskService = taskService;
    }
    ngOnInit() { }
    timerCompleted() {
        this.store.select('taskList').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["take"])(1)).subscribe((state) => {
            const activeTaskIndex = state.tasks.findIndex((task) => task.id === state.activeTask.id);
            this.store.dispatch(new _store_pomodoro_action__WEBPACK_IMPORTED_MODULE_2__["MarkTaskAsDone"]({ activeTask: state.activeTask, index: activeTaskIndex }));
        });
        // this.notifyTaskDone(task);
        // this.store.dispatch(new taskOperations.MarkTaskAsDone());
    }
}
PomodoroComponent.ɵfac = function PomodoroComponent_Factory(t) { return new (t || PomodoroComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_service_task_service__WEBPACK_IMPORTED_MODULE_4__["TaskService"])); };
PomodoroComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PomodoroComponent, selectors: [["app-pomodoro"]], decls: 13, vars: 0, consts: [[1, "heading"], [1, "header", "card", "small"], [1, "report-settings"], [1, "card", "small"], [1, "pomodoro"], [1, "timer"], [3, "timerCompletedEvent"], [1, "tasks", "card-layout"]], template: function PomodoroComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "My Pomodoro");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Report");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "app-pomodoro-timer", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("timerCompletedEvent", function PomodoroComponent_Template_app_pomodoro_timer_timerCompletedEvent_10_listener() { return ctx.timerCompleted(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "app-tasks");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_timer_timer_component__WEBPACK_IMPORTED_MODULE_5__["TimerComponent"], _tasks_tasks_component__WEBPACK_IMPORTED_MODULE_6__["TasksComponent"]], styles: [".card-layout[_ngcontent-%COMP%], .card[_ngcontent-%COMP%] {\n  border-radius: 4px;\n  border: 1px solid #eee;\n  background-color: #fafafa;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  transition: all 0.2s ease-in-out;\n}\n\n.card[_ngcontent-%COMP%] {\n  height: 40px;\n  width: 200px;\n  margin: 0 8px 16px;\n  padding: 16px;\n  line-height: 24px;\n}\n\n.card.small[_ngcontent-%COMP%] {\n  width: 100px;\n  padding: 8px;\n  height: 20px;\n  margin: 0 4px 8px;\n  line-height: 12px;\n}\n\n.card.highlight-card[_ngcontent-%COMP%] {\n  background-color: #1976d2;\n  color: white;\n  font-weight: 600;\n  border: none;\n  width: auto;\n  min-width: 30%;\n  position: relative;\n}\n\n[_nghost-%COMP%] {\n  width: 30%;\n}\n\n@media only screen and (max-width: 768px) {\n  [_nghost-%COMP%] {\n    width: 100%;\n  }\n}\n\n.heading[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n}\n\n.heading[_ngcontent-%COMP%]   .report-settings[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.pomodoro[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.pomodoro[_ngcontent-%COMP%]   .timer[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 300px;\n  margin: 10px;\n}\n\n.pomodoro[_ngcontent-%COMP%]   .tasks[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 350px;\n  margin: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zdHlsZXMvZ2xvYmFsL19jYXJkcy5zY3NzIiwic3JjL2FwcC9wb21vZG9yby9wb21vZG9yby9wb21vZG9yby5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFNQTtFQUxJLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSx5QkFBQTtFQUtBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQ0FBQTtBQ0hKOztBRE1BO0VBRUksWUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtBQ0pKOztBREtJO0VBQ0ksWUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBQ0hSOztBRE9BO0VBQ0kseUJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQ0pKOztBQWpDQTtFQUNJLFVBQUE7QUFvQ0o7O0FBakNBO0VBQ0s7SUFDRyxXQUFBO0VBb0NOO0FBQ0Y7O0FBakNBO0VBQ0ksV0FBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtBQW1DSjs7QUFsQ0k7RUFDSSxhQUFBO0FBb0NSOztBQWhDQTtFQUNJLFdBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBQW1DSjs7QUFsQ0k7RUFDSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7QUFvQ1I7O0FBbENJO0VBQ0ksV0FBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0FBb0NSIiwiZmlsZSI6InNyYy9hcHAvcG9tb2Rvcm8vcG9tb2Rvcm8vcG9tb2Rvcm8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAbWl4aW4gY2FyZC1pdGVtIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNlZWU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYWZhO1xyXG59XHJcblxyXG4uY2FyZC1sYXlvdXQge1xyXG4gICAgQGluY2x1ZGUgY2FyZC1pdGVtO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcclxufVxyXG5cclxuLmNhcmQge1xyXG4gICAgQGV4dGVuZCAuY2FyZC1sYXlvdXQ7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICB3aWR0aDogMjAwcHg7XHJcbiAgICBtYXJnaW46IDAgOHB4IDE2cHg7XHJcbiAgICBwYWRkaW5nOiAxNnB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcbiAgICAmLnNtYWxsIHtcclxuICAgICAgICB3aWR0aDogMTAwcHg7XHJcbiAgICAgICAgcGFkZGluZzogOHB4O1xyXG4gICAgICAgIGhlaWdodDogMjBweDtcclxuICAgICAgICBtYXJnaW46IDAgNHB4IDhweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMTJweDtcclxuICAgIH1cclxufVxyXG5cclxuLmNhcmQuaGlnaGxpZ2h0LWNhcmQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzE5NzZkMjtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICB3aWR0aDogYXV0bztcclxuICAgIG1pbi13aWR0aDogMzAlO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59IiwiLmNhcmQtbGF5b3V0LCAuY2FyZCB7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2VlZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZmFmYTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xufVxuXG4uY2FyZCB7XG4gIGhlaWdodDogNDBweDtcbiAgd2lkdGg6IDIwMHB4O1xuICBtYXJnaW46IDAgOHB4IDE2cHg7XG4gIHBhZGRpbmc6IDE2cHg7XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xufVxuLmNhcmQuc21hbGwge1xuICB3aWR0aDogMTAwcHg7XG4gIHBhZGRpbmc6IDhweDtcbiAgaGVpZ2h0OiAyMHB4O1xuICBtYXJnaW46IDAgNHB4IDhweDtcbiAgbGluZS1oZWlnaHQ6IDEycHg7XG59XG5cbi5jYXJkLmhpZ2hsaWdodC1jYXJkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE5NzZkMjtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXdlaWdodDogNjAwO1xuICBib3JkZXI6IG5vbmU7XG4gIHdpZHRoOiBhdXRvO1xuICBtaW4td2lkdGg6IDMwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG46aG9zdCB7XG4gIHdpZHRoOiAzMCU7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgOmhvc3Qge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59XG4uaGVhZGluZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG4uaGVhZGluZyAucmVwb3J0LXNldHRpbmdzIHtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLnBvbW9kb3JvIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4ucG9tb2Rvcm8gLnRpbWVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMzAwcHg7XG4gIG1hcmdpbjogMTBweDtcbn1cbi5wb21vZG9ybyAudGFza3Mge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAzNTBweDtcbiAgbWFyZ2luOiAxMHB4O1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PomodoroComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-pomodoro',
                templateUrl: './pomodoro.component.html',
                styleUrls: ['./pomodoro.component.scss']
            }]
    }], function () { return [{ type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"] }, { type: src_app_core_service_task_service__WEBPACK_IMPORTED_MODULE_4__["TaskService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pomodoro/store/pomodor.reducer.ts":
/*!***************************************************!*\
  !*** ./src/app/pomodoro/store/pomodor.reducer.ts ***!
  \***************************************************/
/*! exports provided: TaskReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskReducer", function() { return TaskReducer; });
/* harmony import */ var _pomodoro_action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pomodoro.action */ "./src/app/pomodoro/store/pomodoro.action.ts");

const initialTaskState = {
    tasks: [],
    activeTask: undefined
};
function TaskReducer(state = initialTaskState, action) {
    console.log('task reducer action', action);
    switch (action.type) {
        case _pomodoro_action__WEBPACK_IMPORTED_MODULE_0__["TASK_ADDED"]:
            const noTaskYet = state.tasks.length === 0 && action.payload;
            return Object.assign(Object.assign({}, state), { tasks: [...state.tasks, action.payload], activeTask: noTaskYet ? action.payload : state.tasks.find(task => !task.completed) });
        case _pomodoro_action__WEBPACK_IMPORTED_MODULE_0__["UPDATE_TASK"]:
            const taskToUpdate = state.tasks[action.payload.index];
            const updatedTask = Object.assign(Object.assign({}, taskToUpdate), action.payload.task);
            const tasks = [...state.tasks];
            tasks[action.payload.index] = updatedTask;
            return Object.assign(Object.assign({}, state), { tasks: tasks, activeTask: tasks.find(task => !task.completed) });
        case _pomodoro_action__WEBPACK_IMPORTED_MODULE_0__["DELETE_TASK"]:
            const oldtasks = [...state.tasks];
            oldtasks.splice(action.payload, 1);
            return Object.assign(Object.assign({}, state), { tasks: oldtasks, activeTask: state.tasks.find(task => !task.completed) });
        case _pomodoro_action__WEBPACK_IMPORTED_MODULE_0__["TASK_LOADED"]:
            return Object.assign(Object.assign({}, state), { tasks: [...action.payload], activeTask: action.payload.find(task => !task.completed) });
        default:
            return Object.assign({}, state);
    }
}


/***/ }),

/***/ "./src/app/pomodoro/store/pomodoro.action.ts":
/*!***************************************************!*\
  !*** ./src/app/pomodoro/store/pomodoro.action.ts ***!
  \***************************************************/
/*! exports provided: ADD_TASK, TASK_ADDED, UPDATE_TASK, DELETE_TASK, LOAD_TASK, TASK_LOADED, MARK_TASK_AS_DONE, AddTask, TaskAdded, LoadTask, TaskLoaded, UpdateTask, DeleteTask, MarkTaskAsDone */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_TASK", function() { return ADD_TASK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TASK_ADDED", function() { return TASK_ADDED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_TASK", function() { return UPDATE_TASK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_TASK", function() { return DELETE_TASK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_TASK", function() { return LOAD_TASK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TASK_LOADED", function() { return TASK_LOADED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MARK_TASK_AS_DONE", function() { return MARK_TASK_AS_DONE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddTask", function() { return AddTask; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskAdded", function() { return TaskAdded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadTask", function() { return LoadTask; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskLoaded", function() { return TaskLoaded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateTask", function() { return UpdateTask; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteTask", function() { return DeleteTask; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarkTaskAsDone", function() { return MarkTaskAsDone; });
const ADD_TASK = 'ADD_TASK';
const TASK_ADDED = 'TASK_ADDED';
const UPDATE_TASK = 'UPDATE_TASK';
const DELETE_TASK = 'DELETE_TASK';
const LOAD_TASK = 'LOAD_TASK';
const TASK_LOADED = 'TASK_LOADED';
const MARK_TASK_AS_DONE = 'MARK_TASK_AS_DONE';
class AddTask {
    constructor(payload) {
        this.payload = payload;
        this.type = ADD_TASK;
    }
}
class TaskAdded {
    constructor(payload) {
        this.payload = payload;
        this.type = TASK_ADDED;
    }
}
class LoadTask {
    constructor() {
        this.type = LOAD_TASK;
    }
}
class TaskLoaded {
    constructor(payload) {
        this.payload = payload;
        this.type = TASK_LOADED;
    }
}
class UpdateTask {
    constructor(payload) {
        this.payload = payload;
        this.type = UPDATE_TASK;
    }
}
class DeleteTask {
    constructor(payload) {
        this.payload = payload;
        this.type = DELETE_TASK;
    }
}
class MarkTaskAsDone {
    constructor(payload) {
        this.payload = payload;
        this.type = MARK_TASK_AS_DONE;
    }
}


/***/ }),

/***/ "./src/app/pomodoro/store/pomodoro.effects.ts":
/*!****************************************************!*\
  !*** ./src/app/pomodoro/store/pomodoro.effects.ts ***!
  \****************************************************/
/*! exports provided: PomodoroEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PomodoroEffects", function() { return PomodoroEffects; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/__ivy_ngcc__/fesm2015/ngrx-effects.js");
/* harmony import */ var _pomodoro_action__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pomodoro.action */ "./src/app/pomodoro/store/pomodoro.action.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/ngrx-store.js");
/* harmony import */ var src_app_core_service_task_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/service/task.service */ "./src/app/core/service/task.service.ts");










class PomodoroEffects {
    constructor(actions$, store, taskService) {
        this.actions$ = actions$;
        this.store = store;
        this.taskService = taskService;
        this.taskAddedEffect = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_pomodoro_action__WEBPACK_IMPORTED_MODULE_3__["ADD_TASK"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((addTaskAction) => addTaskAction.payload), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])((task) => {
            const res = this.taskService.saveTasks(task);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(Object.assign(Object.assign({}, task), { id: res }));
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])((newTask) => [new _pomodoro_action__WEBPACK_IMPORTED_MODULE_3__["TaskAdded"](newTask)]));
        this.tasksLoadedEffect = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_pomodoro_action__WEBPACK_IMPORTED_MODULE_3__["LOAD_TASK"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(() => this.taskService.getAllTasks()), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])((allTasks) => [new _pomodoro_action__WEBPACK_IMPORTED_MODULE_3__["TaskLoaded"](allTasks)]));
        this.markTaskAsDone = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_pomodoro_action__WEBPACK_IMPORTED_MODULE_3__["MARK_TASK_AS_DONE"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((markTaskAsDoneAction) => markTaskAsDoneAction.payload), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])((payload) => {
            const updatedActiveTask = Object.assign(Object.assign({}, payload.activeTask), { completed: true });
            this.taskService.updateTask(updatedActiveTask);
            this.taskService.notifyTaskDone(updatedActiveTask);
            return [new _pomodoro_action__WEBPACK_IMPORTED_MODULE_3__["UpdateTask"]({ index: payload.index, task: updatedActiveTask })];
        }));
    }
}
PomodoroEffects.ɵfac = function PomodoroEffects_Factory(t) { return new (t || PomodoroEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_6__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](src_app_core_service_task_service__WEBPACK_IMPORTED_MODULE_7__["TaskService"])); };
PomodoroEffects.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: PomodoroEffects, factory: PomodoroEffects.ɵfac, providedIn: 'root' });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])()
], PomodoroEffects.prototype, "taskAddedEffect", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])()
], PomodoroEffects.prototype, "tasksLoadedEffect", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])()
], PomodoroEffects.prototype, "markTaskAsDone", void 0);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](PomodoroEffects, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"] }, { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_6__["Store"] }, { type: src_app_core_service_task_service__WEBPACK_IMPORTED_MODULE_7__["TaskService"] }]; }, { taskAddedEffect: [], tasksLoadedEffect: [], markTaskAsDone: [] }); })();


/***/ }),

/***/ "./src/app/pomodoro/tasks/task-item/task-item.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pomodoro/tasks/task-item/task-item.component.ts ***!
  \*****************************************************************/
/*! exports provided: TaskItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskItemComponent", function() { return TaskItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var src_app_core_model_task_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/model/task.model */ "./src/app/core/model/task.model.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");






function TaskItemComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TaskItemComponent_div_1_Template_div_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.showMoreInfo(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("done", ctx_r0.task.completed);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx_r0.index, " - ", ctx_r0.task.title, "");
} }
function TaskItemComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Note");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TaskItemComponent_div_2_Template_button_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.save(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TaskItemComponent_div_2_Template_button_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.delete(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TaskItemComponent_div_2_Template_button_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.cancel(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx_r1.titleFormControl);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx_r1.noteFormControl);
} }
class TaskItemComponent {
    constructor() {
        this.index = 0;
        this.active = false;
        this.taskUpdated = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.taskDeleted = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.titleFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
        this.noteFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
    }
    ngOnInit() {
        this.titleFormControl.setValue(this.task.title);
        this.noteFormControl.setValue(this.task.note);
    }
    showMoreInfo() {
        this.showMore = !this.showMore;
    }
    save() {
        const updatedTask = new src_app_core_model_task_model__WEBPACK_IMPORTED_MODULE_2__["Task"](this.titleFormControl.value, this.noteFormControl.value);
        updatedTask.id = this.task.id;
        updatedTask.completed = this.task.completed;
        updatedTask.estPomodoro = this.task.estPomodoro;
        this.showMore = !this.showMore;
        this.taskUpdated.emit(updatedTask);
    }
    delete() {
        this.showMore = !this.showMore;
        this.taskDeleted.emit(this.task);
    }
    cancel() {
        this.showMore = !this.showMore;
    }
}
TaskItemComponent.ɵfac = function TaskItemComponent_Factory(t) { return new (t || TaskItemComponent)(); };
TaskItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TaskItemComponent, selectors: [["app-task-item"]], inputs: { task: "task", index: "index", active: "active" }, outputs: { taskUpdated: "taskUpdated", taskDeleted: "taskDeleted" }, decls: 3, vars: 4, consts: [[1, "task-item-container"], ["class", "task-item", 4, "ngIf"], ["class", "more-info", 4, "ngIf"], [1, "task-item"], [1, "action-button", 3, "click"], ["src", "assets/icons/more.png"], [1, "more-info"], [1, "form-input", "login-input", "w-100"], ["for", "txtTaskTitle"], ["type", "text", "placeholder", "Enter task title", "name", "txtTaskTitle", 3, "formControl"], ["for", "txtNote"], ["type", "text", "placeholder", "Enter task note", "name", "txtNote", 3, "formControl"], [1, "btn-container"], [1, "form-button", "primary", "w-25", 3, "click"]], template: function TaskItemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TaskItemComponent_div_1_Template, 5, 4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TaskItemComponent_div_2_Template, 16, 2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx.active);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.showMore);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showMore);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"]], styles: [".card-layout[_ngcontent-%COMP%], .card[_ngcontent-%COMP%] {\n  border-radius: 4px;\n  border: 1px solid #eee;\n  background-color: #fafafa;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  transition: all 0.2s ease-in-out;\n}\n\n.card[_ngcontent-%COMP%] {\n  height: 40px;\n  width: 200px;\n  margin: 0 8px 16px;\n  padding: 16px;\n  line-height: 24px;\n}\n\n.card.small[_ngcontent-%COMP%] {\n  width: 100px;\n  padding: 8px;\n  height: 20px;\n  margin: 0 4px 8px;\n  line-height: 12px;\n}\n\n.card.highlight-card[_ngcontent-%COMP%] {\n  background-color: #1976d2;\n  color: white;\n  font-weight: 600;\n  border: none;\n  width: auto;\n  min-width: 30%;\n  position: relative;\n}\n\n.task-item-container[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  width: 95%;\n  border: 2px solid darkgray;\n  padding: 10px;\n  border-radius: 10px;\n  box-shadow: 0 4px 17px rgba(0, 0, 0, 0.35);\n}\n\n.task-item-container.active[_ngcontent-%COMP%] {\n  border-left: 5px solid black;\n}\n\n.task-item[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.task-item[_ngcontent-%COMP%]   .done[_ngcontent-%COMP%] {\n  text-decoration: line-through;\n}\n\n.task-item[_ngcontent-%COMP%]   .action-button[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n\n.task-item[_ngcontent-%COMP%]   .action-button[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 1.5rem;\n  height: 1.5rem;\n  cursor: pointer;\n}\n\n.task-item[_ngcontent-%COMP%]   .action-button[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:hover {\n  position: relative;\n  left: 1px;\n  top: 1px;\n}\n\n.more-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  padding: 10px;\n}\n\n.btn-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zdHlsZXMvZ2xvYmFsL19jYXJkcy5zY3NzIiwic3JjL2FwcC9wb21vZG9yby90YXNrcy90YXNrLWl0ZW0vdGFzay1pdGVtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU1BO0VBTEksa0JBQUE7RUFDQSxzQkFBQTtFQUNBLHlCQUFBO0VBS0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdDQUFBO0FDSEo7O0FETUE7RUFFSSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0FDSko7O0FES0k7RUFDSSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0FDSFI7O0FET0E7RUFDSSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FDSko7O0FBakNBO0VBQ0ksZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsMEJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSwwQ0FBQTtBQW9DSjs7QUFuQ0k7RUFDSSw0QkFBQTtBQXFDUjs7QUFqQ0E7RUFDSSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtBQW9DSjs7QUFuQ0k7RUFDSSw2QkFBQTtBQXFDUjs7QUFuQ0k7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7QUFxQ1I7O0FBcENRO0VBQ0ksYUFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FBc0NaOztBQXJDWTtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7QUF1Q2hCOztBQWpDQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGFBQUE7QUFvQ0o7O0FBakNBO0VBQ0ksYUFBQTtFQUNBLDhCQUFBO0FBb0NKIiwiZmlsZSI6InNyYy9hcHAvcG9tb2Rvcm8vdGFza3MvdGFzay1pdGVtL3Rhc2staXRlbS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBtaXhpbiBjYXJkLWl0ZW0ge1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2VlZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmYWZhZmE7XHJcbn1cclxuXHJcbi5jYXJkLWxheW91dCB7XHJcbiAgICBAaW5jbHVkZSBjYXJkLWl0ZW07XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xyXG59XHJcblxyXG4uY2FyZCB7XHJcbiAgICBAZXh0ZW5kIC5jYXJkLWxheW91dDtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIHdpZHRoOiAyMDBweDtcclxuICAgIG1hcmdpbjogMCA4cHggMTZweDtcclxuICAgIHBhZGRpbmc6IDE2cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjRweDtcclxuICAgICYuc21hbGwge1xyXG4gICAgICAgIHdpZHRoOiAxMDBweDtcclxuICAgICAgICBwYWRkaW5nOiA4cHg7XHJcbiAgICAgICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgICAgIG1hcmdpbjogMCA0cHggOHB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxMnB4O1xyXG4gICAgfVxyXG59XHJcblxyXG4uY2FyZC5oaWdobGlnaHQtY2FyZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTk3NmQyO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgbWluLXdpZHRoOiAzMCU7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn0iLCIuY2FyZC1sYXlvdXQsIC5jYXJkIHtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjZWVlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYWZhO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XG59XG5cbi5jYXJkIHtcbiAgaGVpZ2h0OiA0MHB4O1xuICB3aWR0aDogMjAwcHg7XG4gIG1hcmdpbjogMCA4cHggMTZweDtcbiAgcGFkZGluZzogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG59XG4uY2FyZC5zbWFsbCB7XG4gIHdpZHRoOiAxMDBweDtcbiAgcGFkZGluZzogOHB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIG1hcmdpbjogMCA0cHggOHB4O1xuICBsaW5lLWhlaWdodDogMTJweDtcbn1cblxuLmNhcmQuaGlnaGxpZ2h0LWNhcmQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTk3NmQyO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGJvcmRlcjogbm9uZTtcbiAgd2lkdGg6IGF1dG87XG4gIG1pbi13aWR0aDogMzAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi50YXNrLWl0ZW0tY29udGFpbmVyIHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgd2lkdGg6IDk1JTtcbiAgYm9yZGVyOiAycHggc29saWQgZGFya2dyYXk7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDE3cHggcmdiYSgwLCAwLCAwLCAwLjM1KTtcbn1cbi50YXNrLWl0ZW0tY29udGFpbmVyLmFjdGl2ZSB7XG4gIGJvcmRlci1sZWZ0OiA1cHggc29saWQgYmxhY2s7XG59XG5cbi50YXNrLWl0ZW0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4udGFzay1pdGVtIC5kb25lIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XG59XG4udGFzay1pdGVtIC5hY3Rpb24tYnV0dG9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi50YXNrLWl0ZW0gLmFjdGlvbi1idXR0b24gaW1nIHtcbiAgd2lkdGg6IDEuNXJlbTtcbiAgaGVpZ2h0OiAxLjVyZW07XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi50YXNrLWl0ZW0gLmFjdGlvbi1idXR0b24gaW1nOmhvdmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBsZWZ0OiAxcHg7XG4gIHRvcDogMXB4O1xufVxuXG4ubW9yZS1pbmZvIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcGFkZGluZzogMTBweDtcbn1cblxuLmJ0bi1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TaskItemComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-task-item',
                templateUrl: './task-item.component.html',
                styleUrls: ['./task-item.component.scss']
            }]
    }], function () { return []; }, { task: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], index: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], active: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], taskUpdated: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], taskDeleted: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/pomodoro/tasks/tasks.component.ts":
/*!***************************************************!*\
  !*** ./src/app/pomodoro/tasks/tasks.component.ts ***!
  \***************************************************/
/*! exports provided: TasksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TasksComponent", function() { return TasksComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _core_model_task_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/model/task.model */ "./src/app/core/model/task.model.ts");
/* harmony import */ var _store_pomodoro_action__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store/pomodoro.action */ "./src/app/pomodoro/store/pomodoro.action.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/ngrx-store.js");
/* harmony import */ var _core_service_task_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/service/task.service */ "./src/app/core/service/task.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _task_item_task_item_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./task-item/task-item.component */ "./src/app/pomodoro/tasks/task-item/task-item.component.ts");








function TasksComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "No tasks present. click on Add Task to add a new task");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TasksComponent_div_8_app_task_item_1_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-task-item", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("taskUpdated", function TasksComponent_div_8_app_task_item_1_Template_app_task_item_taskUpdated_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const i_r4 = ctx.index; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r5.taskUpdated($event, i_r4); })("taskDeleted", function TasksComponent_div_8_app_task_item_1_Template_app_task_item_taskDeleted_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const i_r4 = ctx.index; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r7.taskDeleted($event, i_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r3 = ctx.$implicit;
    const i_r4 = ctx.index;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("active", ctx_r2.isActive(item_r3))("index", i_r4 + 1)("task", item_r3);
} }
function TasksComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TasksComponent_div_8_app_task_item_1_Template, 1, 3, "app-task-item", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.taskItems);
} }
class TasksComponent {
    constructor(store, taskService) {
        this.store = store;
        this.taskService = taskService;
        this.taskItems = [new _core_model_task_model__WEBPACK_IMPORTED_MODULE_1__["Task"]('Fist task', '')];
        this.activeTask = undefined;
    }
    ngOnInit() {
        this.store.dispatch(new _store_pomodoro_action__WEBPACK_IMPORTED_MODULE_2__["LoadTask"]());
        this.store.select('taskList').subscribe((res) => {
            this.taskItems = res.tasks;
            this.activeTask = res.activeTask;
            console.log('all tasks', res.tasks);
        });
    }
    addNewTask() {
        const task = new _core_model_task_model__WEBPACK_IMPORTED_MODULE_1__["Task"]('New task', '');
        this.store.dispatch(new _store_pomodoro_action__WEBPACK_IMPORTED_MODULE_2__["AddTask"](Object.assign({}, task)));
    }
    taskUpdated(task, index) {
        this.taskService.updateTask(task).subscribe((res) => {
            this.store.dispatch(new _store_pomodoro_action__WEBPACK_IMPORTED_MODULE_2__["UpdateTask"]({ index, task }));
        });
    }
    taskDeleted(task, index) {
        this.taskService.deleteTask(task).subscribe((res) => {
            this.store.dispatch(new _store_pomodoro_action__WEBPACK_IMPORTED_MODULE_2__["DeleteTask"](index));
        });
    }
    isActive(task) {
        var _a;
        return ((_a = this.activeTask) === null || _a === void 0 ? void 0 : _a.id) === (task === null || task === void 0 ? void 0 : task.id);
    }
}
TasksComponent.ɵfac = function TasksComponent_Factory(t) { return new (t || TasksComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_service_task_service__WEBPACK_IMPORTED_MODULE_4__["TaskService"])); };
TasksComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TasksComponent, selectors: [["app-tasks"]], decls: 11, vars: 2, consts: [[1, "task", "section"], [1, "header"], ["src", "assets/icons/more.png"], [1, "task-list"], ["class", "no-tasks", 4, "ngIf"], ["class", "task-items", 4, "ngIf"], [1, "new-task", 3, "click"], [1, "no-tasks"], ["src", "assets/images/no-item.svg", "alt", "no-result"], [1, "task-items"], [3, "active", "index", "task", "taskUpdated", "taskDeleted", 4, "ngFor", "ngForOf"], [3, "active", "index", "task", "taskUpdated", "taskDeleted"]], template: function TasksComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Tasks");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, TasksComponent_div_7_Template, 4, 0, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, TasksComponent_div_8_Template, 2, 1, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TasksComponent_Template_div_click_9_listener() { return ctx.addNewTask(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "+ Add Task");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.taskItems.length === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.taskItems.length > 0);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _task_item_task_item_component__WEBPACK_IMPORTED_MODULE_6__["TaskItemComponent"]], styles: ["[_nghost-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n\n.section[_ngcontent-%COMP%] {\n  scrollbar-color: #d4aa70 #e4e4e4;\n  transition: scrollbar-color 0.3s ease-out;\n}\n\n.section[_ngcontent-%COMP%]:hover {\n  scrollbar-color: #5749d2;\n}\n\n.task[_ngcontent-%COMP%] {\n  height: 100%;\n  padding: 1rem;\n  display: flex;\n  flex-direction: column;\n  overflow-y: auto;\n}\n\n.task[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n\n.task[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 1.5rem;\n  height: 1.5rem;\n}\n\n.task[_ngcontent-%COMP%]   .task-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-content: space-around;\n  flex-grow: 0.8;\n}\n\n.task[_ngcontent-%COMP%]   .task-list[_ngcontent-%COMP%]   .no-tasks[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: #706e6e;\n  font-weight: bold;\n}\n\n.task[_ngcontent-%COMP%]   .task-list[_ngcontent-%COMP%]   .no-tasks[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  width: 150px;\n  height: 150px;\n}\n\n.task[_ngcontent-%COMP%]   .new-task[_ngcontent-%COMP%] {\n  cursor: pointer;\n  display: flex;\n  background: lightgrey;\n  color: black;\n  font-weight: bold;\n  justify-content: center;\n  border: 2px dotted darkgray;\n  padding: 10px;\n  margin-top: 5px;\n}\n\n.task[_ngcontent-%COMP%]   .new-task[_ngcontent-%COMP%]:hover {\n  position: relative;\n  left: 1px;\n  top: 1px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9tb2Rvcm8vdGFza3MvdGFza3MuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQUNKOztBQUVBO0VBQ0ksZ0NBQUE7RUFDQSx5Q0FBQTtBQUNKOztBQUVBO0VBQ0ksd0JBQUE7QUFDSjs7QUFFQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7QUFDSjs7QUFBSTtFQUNJLGFBQUE7RUFDQSw4QkFBQTtBQUVSOztBQURRO0VBQ0ksYUFBQTtFQUNBLGNBQUE7QUFHWjs7QUFBSTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDhCQUFBO0VBQ0EsMkJBQUE7RUFDQSxjQUFBO0FBRVI7O0FBRFE7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQUdaOztBQUZZO0VBRUksWUFBQTtFQUNBLGFBQUE7QUFHaEI7O0FBQ0k7RUFDSSxlQUFBO0VBQ0EsYUFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsdUJBQUE7RUFDQSwyQkFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0FBQ1I7O0FBQVE7RUFDSSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0FBRVoiLCJmaWxlIjoic3JjL2FwcC9wb21vZG9yby90YXNrcy90YXNrcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4uc2VjdGlvbiB7XHJcbiAgICBzY3JvbGxiYXItY29sb3I6ICNkNGFhNzAgI2U0ZTRlNDtcclxuICAgIHRyYW5zaXRpb246IHNjcm9sbGJhci1jb2xvciAwLjNzIGVhc2Utb3V0O1xyXG59XHJcblxyXG4uc2VjdGlvbjpob3ZlciB7XHJcbiAgICBzY3JvbGxiYXItY29sb3I6ICM1NzQ5ZDI7XHJcbn1cclxuXHJcbi50YXNrIHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDFyZW07XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgICAuaGVhZGVyIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICB3aWR0aDogMS41cmVtO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEuNXJlbTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAudGFzay1saXN0IHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgIGFsaWduLWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgICAgICBmbGV4LWdyb3c6IDAuODtcclxuICAgICAgICAubm8tdGFza3Mge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgY29sb3I6IHJnYigxMTIsIDExMCwgMTEwKTtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgID4qIHtcclxuICAgICAgICAgICAgICAgIC8vIHNlbGVjdCBhbGwgZGlyZWN0IGNoaWxkcyBvZiBuby10YXNrc1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxNTBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5uZXctdGFzayB7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYmFja2dyb3VuZDogbGlnaHRncmV5O1xyXG4gICAgICAgIGNvbG9yOiBibGFjaztcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBib3JkZXI6IDJweCBkb3R0ZWQgZGFya2dyYXk7XHJcbiAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgbGVmdDogMXB4O1xyXG4gICAgICAgICAgICB0b3A6IDFweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TasksComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-tasks',
                templateUrl: './tasks.component.html',
                styleUrls: ['./tasks.component.scss']
            }]
    }], function () { return [{ type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"] }, { type: _core_service_task_service__WEBPACK_IMPORTED_MODULE_4__["TaskService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pomodoro/timer/timer.component.ts":
/*!***************************************************!*\
  !*** ./src/app/pomodoro/timer/timer.component.ts ***!
  \***************************************************/
/*! exports provided: TimerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimerComponent", function() { return TimerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _core_model_timer_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/model/timer.model */ "./src/app/core/model/timer.model.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




function TimerComponent_button_5_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TimerComponent_button_5_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const timer_r3 = ctx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.setCurrentTimer(timer_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const timer_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", timer_r3.active);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](timer_r3.label);
} }
function TimerComponent_button_9_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TimerComponent_button_9_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.startTimer(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Start");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TimerComponent_button_10_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TimerComponent_button_10_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.timer.stop(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Stop");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class TimerMode {
    constructor(time, label, active = false) {
        this.timeInMins = time;
        this.label = label;
        this.active = active;
    }
}
class TimerComponent {
    constructor() {
        this.currentTime = '';
        this.pomodoroTimers = [];
        this.timerCompletedEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
        this.initialiseTimerModes();
        this.timer = new _core_model_timer_model__WEBPACK_IMPORTED_MODULE_1__["Timer"](this.convertToMs(this.getActiveTimer().timeInMins), 1000, null);
        this.currentTime = this.timer.getFormattedTime();
        console.log(this.currentTime);
    }
    startTimer() {
        const completedCallback = () => this.timerCompleted();
        const tickCallback = () => {
            this.currentTime = this.timer.getFormattedTime();
            console.log('current time is ', this.currentTime);
        };
        this.timer = new _core_model_timer_model__WEBPACK_IMPORTED_MODULE_1__["Timer"](this.convertToMs(this.getActiveTimer().timeInMins), 1000, tickCallback, completedCallback);
        this.timer.start();
    }
    convertToMs(timeInMins) {
        return timeInMins * 60 * 1000;
    }
    timerCompleted() {
        this.timerCompletedEvent.emit(this.timer);
    }
    initialiseTimerModes() {
        this.pomodoroTimers = [];
        this.pomodoroTimers.push(new TimerMode(20, 'Pomodoro', true));
        this.pomodoroTimers.push(new TimerMode(10, 'Short break', false));
        this.pomodoroTimers.push(new TimerMode(25, 'Long break', false));
    }
    setCurrentTimer(timer) {
        this.pomodoroTimers.forEach(timerVal => timerVal.active = false);
        this.pomodoroTimers.filter(timerVal => timerVal.label === timer.label).forEach(timerVal => timerVal.active = true);
        this.timer = new _core_model_timer_model__WEBPACK_IMPORTED_MODULE_1__["Timer"](this.convertToMs(this.getActiveTimer().timeInMins), 1000, null);
        this.currentTime = this.timer.getFormattedTime();
    }
    getActiveTimer() {
        return this.pomodoroTimers.find(timer => timer.active);
    }
}
TimerComponent.ɵfac = function TimerComponent_Factory(t) { return new (t || TimerComponent)(); };
TimerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TimerComponent, selectors: [["app-pomodoro-timer"]], outputs: { timerCompletedEvent: "timerCompletedEvent" }, decls: 13, vars: 4, consts: [[1, "pomodoro-timer"], [1, "previous"], [1, "timer"], [1, "action-buttons"], ["class", "form-button primary", 3, "active", "click", 4, "ngFor", "ngForOf"], [1, "time"], [1, "start-stop"], ["class", "form-button primary", 3, "click", 4, "ngIf"], [1, "next"], [1, "form-button", "primary", 3, "click"]], template: function TimerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "< <");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, TimerComponent_button_5_Template, 2, 3, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, TimerComponent_button_9_Template, 2, 0, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, TimerComponent_button_10_Template, 2, 0, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "> >");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.pomodoroTimers);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.currentTime);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.timer.hasStarted());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.timer.hasStarted());
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], styles: [".card-layout[_ngcontent-%COMP%], .card[_ngcontent-%COMP%] {\n  border-radius: 4px;\n  border: 1px solid #eee;\n  background-color: #fafafa;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  transition: all 0.2s ease-in-out;\n}\n\n.card[_ngcontent-%COMP%] {\n  height: 40px;\n  width: 200px;\n  margin: 0 8px 16px;\n  padding: 16px;\n  line-height: 24px;\n}\n\n.card.small[_ngcontent-%COMP%] {\n  width: 100px;\n  padding: 8px;\n  height: 20px;\n  margin: 0 4px 8px;\n  line-height: 12px;\n}\n\n.card.highlight-card[_ngcontent-%COMP%] {\n  background-color: #1976d2;\n  color: white;\n  font-weight: 600;\n  border: none;\n  width: auto;\n  min-width: 30%;\n  position: relative;\n}\n\n[_nghost-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n\n.previous[_ngcontent-%COMP%], .next[_ngcontent-%COMP%] {\n  width: 10%;\n  background: #e0e0e0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border: 2px solid darkgray;\n  font-weight: bolder;\n  font-size: 1.5rem;\n}\n\n.previous[_ngcontent-%COMP%]:hover, .next[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n\n.pomodoro-timer[_ngcontent-%COMP%] {\n  border-radius: 4px;\n  border: 1px solid #eee;\n  background-color: #fafafa;\n  height: 100%;\n  display: flex;\n  flex-direction: row;\n}\n\n.timer[_ngcontent-%COMP%] {\n  width: 80%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n}\n\n.action-buttons[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  justify-content: space-evenly;\n}\n\n.action-buttons[_ngcontent-%COMP%]   .form-button[_ngcontent-%COMP%] {\n  width: 20%;\n  min-height: 20px;\n}\n\n.time[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 5rem;\n  font-weight: bold;\n}\n\n.start-stop[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.start-stop[_ngcontent-%COMP%]   .form-button[_ngcontent-%COMP%] {\n  width: 40%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zdHlsZXMvZ2xvYmFsL19jYXJkcy5zY3NzIiwic3JjL2FwcC9wb21vZG9yby90aW1lci90aW1lci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFNQTtFQUxJLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSx5QkFBQTtFQUtBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQ0FBQTtBQ0hKOztBRE1BO0VBRUksWUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtBQ0pKOztBREtJO0VBQ0ksWUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBQ0hSOztBRE9BO0VBQ0kseUJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQ0pKOztBQWpDQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FBb0NKOztBQWpDQTs7RUFFSSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLDBCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQW9DSjs7QUFqQ0E7O0VBRUksZUFBQTtBQW9DSjs7QUFqQ0E7RUR0Qkksa0JBQUE7RUFDQSxzQkFBQTtFQUNBLHlCQUFBO0VDc0JBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUFzQ0o7O0FBbkNBO0VBQ0ksVUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSw2QkFBQTtBQXNDSjs7QUFuQ0E7RUFDSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLDZCQUFBO0FBc0NKOztBQXJDSTtFQUNJLFVBQUE7RUFDQSxnQkFBQTtBQXVDUjs7QUFuQ0E7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQXNDSjs7QUFuQ0E7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQXNDSjs7QUFyQ0k7RUFDSSxVQUFBO0FBdUNSIiwiZmlsZSI6InNyYy9hcHAvcG9tb2Rvcm8vdGltZXIvdGltZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAbWl4aW4gY2FyZC1pdGVtIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNlZWU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYWZhO1xyXG59XHJcblxyXG4uY2FyZC1sYXlvdXQge1xyXG4gICAgQGluY2x1ZGUgY2FyZC1pdGVtO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcclxufVxyXG5cclxuLmNhcmQge1xyXG4gICAgQGV4dGVuZCAuY2FyZC1sYXlvdXQ7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICB3aWR0aDogMjAwcHg7XHJcbiAgICBtYXJnaW46IDAgOHB4IDE2cHg7XHJcbiAgICBwYWRkaW5nOiAxNnB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcbiAgICAmLnNtYWxsIHtcclxuICAgICAgICB3aWR0aDogMTAwcHg7XHJcbiAgICAgICAgcGFkZGluZzogOHB4O1xyXG4gICAgICAgIGhlaWdodDogMjBweDtcclxuICAgICAgICBtYXJnaW46IDAgNHB4IDhweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMTJweDtcclxuICAgIH1cclxufVxyXG5cclxuLmNhcmQuaGlnaGxpZ2h0LWNhcmQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzE5NzZkMjtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICB3aWR0aDogYXV0bztcclxuICAgIG1pbi13aWR0aDogMzAlO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59IiwiLmNhcmQtbGF5b3V0LCAuY2FyZCB7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2VlZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZmFmYTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xufVxuXG4uY2FyZCB7XG4gIGhlaWdodDogNDBweDtcbiAgd2lkdGg6IDIwMHB4O1xuICBtYXJnaW46IDAgOHB4IDE2cHg7XG4gIHBhZGRpbmc6IDE2cHg7XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xufVxuLmNhcmQuc21hbGwge1xuICB3aWR0aDogMTAwcHg7XG4gIHBhZGRpbmc6IDhweDtcbiAgaGVpZ2h0OiAyMHB4O1xuICBtYXJnaW46IDAgNHB4IDhweDtcbiAgbGluZS1oZWlnaHQ6IDEycHg7XG59XG5cbi5jYXJkLmhpZ2hsaWdodC1jYXJkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE5NzZkMjtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXdlaWdodDogNjAwO1xuICBib3JkZXI6IG5vbmU7XG4gIHdpZHRoOiBhdXRvO1xuICBtaW4td2lkdGg6IDMwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG46aG9zdCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5wcmV2aW91cyxcbi5uZXh0IHtcbiAgd2lkdGg6IDEwJTtcbiAgYmFja2dyb3VuZDogI2UwZTBlMDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJvcmRlcjogMnB4IHNvbGlkIGRhcmtncmF5O1xuICBmb250LXdlaWdodDogYm9sZGVyO1xuICBmb250LXNpemU6IDEuNXJlbTtcbn1cblxuLnByZXZpb3VzOmhvdmVyLFxuLm5leHQ6aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5wb21vZG9yby10aW1lciB7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2VlZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZmFmYTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xufVxuXG4udGltZXIge1xuICB3aWR0aDogODAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xufVxuXG4uYWN0aW9uLWJ1dHRvbnMge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG59XG4uYWN0aW9uLWJ1dHRvbnMgLmZvcm0tYnV0dG9uIHtcbiAgd2lkdGg6IDIwJTtcbiAgbWluLWhlaWdodDogMjBweDtcbn1cblxuLnRpbWUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZm9udC1zaXplOiA1cmVtO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLnN0YXJ0LXN0b3Age1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5zdGFydC1zdG9wIC5mb3JtLWJ1dHRvbiB7XG4gIHdpZHRoOiA0MCU7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TimerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-pomodoro-timer',
                templateUrl: './timer.component.html',
                styleUrls: ['./timer.component.scss']
            }]
    }], function () { return []; }, { timerCompletedEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! F:\HAIDAR_DEV\PomodoApp\pomodoro-app\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map