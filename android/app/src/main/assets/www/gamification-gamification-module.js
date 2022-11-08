(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["gamification-gamification-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/gamification/gamification.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/gamification/gamification.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<core-navbar-buttons slot=\"end\" prepend>\n  <ion-button *ngIf=\"searchEnabled\" (click)=\"openSearch()\" [attr.aria-label]=\"'core.courses.searchcourses' | translate\">\n      <ion-icon name=\"fas-search\" slot=\"icon-only\" aria-hidden=\"true\"></ion-icon>\n  </ion-button>\n</core-navbar-buttons>\n<ion-fab vertical = \"top\" horizontal = \"start\" no-margin>\n  <!-- <ion-fab-button color = \"light\" (click) = \"goBack()\"> -->\n    <button class=\"arrow\" (click) = \"goBack()\">\n      <ion-icon name = \"arrow-back-outline\" >\n      </ion-icon>\n    </button>\n\n  <!-- </ion-fab-button> -->\n</ion-fab>\n<ion-header>\n  <ion-toolbar>\n    <ion-title>Gamification</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <h1>this is gamification page </h1>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/gamification/gamification-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/gamification/gamification-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: GamificationPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GamificationPageRoutingModule", function() { return GamificationPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _gamification_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./gamification.page */ "./src/app/gamification/gamification.page.ts");




const routes = [
    {
        path: '',
        component: _gamification_page__WEBPACK_IMPORTED_MODULE_3__["GamificationPage"]
    }
];
let GamificationPageRoutingModule = class GamificationPageRoutingModule {
};
GamificationPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], GamificationPageRoutingModule);



/***/ }),

/***/ "./src/app/gamification/gamification.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/gamification/gamification.module.ts ***!
  \*****************************************************/
/*! exports provided: GamificationPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GamificationPageModule", function() { return GamificationPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _core_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/core/shared.module */ "./src/core/shared.module.ts");
/* harmony import */ var _core_features_block_components_components_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/core/features/block/components/components.module */ "./src/core/features/block/components/components.module.ts");
/* harmony import */ var _features_course_components_components_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @features/course/components/components.module */ "./src/core/features/course/components/components.module.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _gamification_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./gamification-routing.module */ "./src/app/gamification/gamification-routing.module.ts");
/* harmony import */ var _gamification_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./gamification.page */ "./src/app/gamification/gamification.page.ts");










let GamificationPageModule = class GamificationPageModule {
};
GamificationPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonicModule"],
            _core_shared_module__WEBPACK_IMPORTED_MODULE_4__["CoreSharedModule"],
            _core_features_block_components_components_module__WEBPACK_IMPORTED_MODULE_5__["CoreBlockComponentsModule"],
            _features_course_components_components_module__WEBPACK_IMPORTED_MODULE_6__["CoreCourseComponentsModule"],
            _gamification_routing_module__WEBPACK_IMPORTED_MODULE_8__["GamificationPageRoutingModule"]
        ],
        declarations: [_gamification_page__WEBPACK_IMPORTED_MODULE_9__["GamificationPage"]]
    })
], GamificationPageModule);



/***/ }),

/***/ "./src/app/gamification/gamification.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/gamification/gamification.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dhbWlmaWNhdGlvbi9nYW1pZmljYXRpb24ucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/gamification/gamification.page.ts":
/*!***************************************************!*\
  !*** ./src/app/gamification/gamification.page.ts ***!
  \***************************************************/
/*! exports provided: GamificationPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GamificationPage", function() { return GamificationPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



let GamificationPage = class GamificationPage {
    constructor(loc) {
        this.loc = loc;
    }
    ngOnInit() {
    }
    goBack() {
        this.loc.back();
    }
};
GamificationPage.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"] }
];
GamificationPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-gamification',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./gamification.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/gamification/gamification.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./gamification.page.scss */ "./src/app/gamification/gamification.page.scss")).default]
    })
], GamificationPage);



/***/ })

}]);
//# sourceMappingURL=gamification-gamification-module.js.map