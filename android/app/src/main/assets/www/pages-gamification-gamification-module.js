(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-gamification-gamification-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/core/features/courses/pages/gamification/gamification.page.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/core/features/courses/pages/gamification/gamification.page.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n      <ion-buttons slot=\"start\">\n          <ion-back-button [text]=\"'core.back' | translate\"></ion-back-button>\n      </ion-buttons>\n      <ion-title>\n          <h1 *ngIf=\"!showOnlyEnrolled\">Gamification</h1>\n          <!-- <h1 *ngIf=\"showOnlyEnrolled\">{{ 'core.courses.mycourses' | translate }}</h1> -->\n      </ion-title>\n      <!-- <ion-buttons slot=\"end\">\n          <core-context-menu>\n              <core-context-menu-item *ngIf=\"downloadCourseEnabled || downloadCoursesEnabled\" [priority]=\"1000\"\n                  [content]=\"'core.settings.showdownloadoptions' | translate\" (action)=\"toggleDownload()\" iconAction=\"toggle\"\n                  [(toggle)]=\"downloadEnabled\"></core-context-menu-item>\n              <core-context-menu-item [priority]=\"900\" [content]=\"'core.courses.showonlyenrolled' | translate\" (action)=\"toggleEnrolled()\"\n                  iconAction=\"toggle\" [(toggle)]=\"showOnlyEnrolled\"></core-context-menu-item>\n          </core-context-menu>\n          <core-user-menu-button></core-user-menu-button>\n      </ion-buttons> -->\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <h1>this is gamification page </h1>\n\n</ion-content>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/core/features/mainmenu/pages/gamification/gamification.page.html":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/core/features/mainmenu/pages/gamification/gamification.page.html ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button [text]=\"'core.back' | translate\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>\n      <h1>Gamification Page</h1>\n    </ion-title>\n    <ion-buttons slot=\"end\">\n      <core-user-menu-button></core-user-menu-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content>\n\n  <ng-container *ngFor = \"let d of data\">\n    <h1>level {{ d.level }} </h1>\n    <div class=\"progress-bar\">\n      <div [ngStyle] = \"d.styles\"></div>\n    </div>\n  </ng-container>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/core/features/courses/pages/gamification/gamification-routing.module.ts":
/*!*************************************************************************************!*\
  !*** ./src/core/features/courses/pages/gamification/gamification-routing.module.ts ***!
  \*************************************************************************************/
/*! exports provided: GamificationPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GamificationPageRoutingModule", function() { return GamificationPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _gamification_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./gamification.page */ "./src/core/features/courses/pages/gamification/gamification.page.ts");




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

/***/ "./src/core/features/courses/pages/gamification/gamification.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/core/features/courses/pages/gamification/gamification.module.ts ***!
  \*****************************************************************************/
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
/* harmony import */ var _features_mainmenu_components_components_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @features/mainmenu/components/components.module */ "./src/core/features/mainmenu/components/components.module.ts");
/* harmony import */ var _gamification_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./gamification-routing.module */ "./src/core/features/courses/pages/gamification/gamification-routing.module.ts");
/* harmony import */ var _gamification_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./gamification.page */ "./src/core/features/courses/pages/gamification/gamification.page.ts");











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
            _features_mainmenu_components_components_module__WEBPACK_IMPORTED_MODULE_8__["CoreMainMenuComponentsModule"],
            _features_course_components_components_module__WEBPACK_IMPORTED_MODULE_6__["CoreCourseComponentsModule"],
            _gamification_routing_module__WEBPACK_IMPORTED_MODULE_9__["GamificationPageRoutingModule"],
        ],
        declarations: [_gamification_page__WEBPACK_IMPORTED_MODULE_10__["GamificationPage"]]
    })
], GamificationPageModule);



/***/ }),

/***/ "./src/core/features/courses/pages/gamification/gamification.page.scss":
/*!*****************************************************************************!*\
  !*** ./src/core/features/courses/pages/gamification/gamification.page.scss ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvY29yZS9mZWF0dXJlcy9jb3Vyc2VzL3BhZ2VzL2dhbWlmaWNhdGlvbi9nYW1pZmljYXRpb24ucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/core/features/courses/pages/gamification/gamification.page.ts":
/*!***************************************************************************!*\
  !*** ./src/core/features/courses/pages/gamification/gamification.page.ts ***!
  \***************************************************************************/
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
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./gamification.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/core/features/courses/pages/gamification/gamification.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./gamification.page.scss */ "./src/core/features/courses/pages/gamification/gamification.page.scss")).default]
    })
], GamificationPage);



/***/ }),

/***/ "./src/core/features/mainmenu/pages/gamification/gamification-routing.module.ts":
/*!**************************************************************************************!*\
  !*** ./src/core/features/mainmenu/pages/gamification/gamification-routing.module.ts ***!
  \**************************************************************************************/
/*! exports provided: GamificationPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GamificationPageRoutingModule", function() { return GamificationPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _gamification_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./gamification.page */ "./src/core/features/mainmenu/pages/gamification/gamification.page.ts");




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

/***/ "./src/core/features/mainmenu/pages/gamification/gamification.module.ts":
/*!******************************************************************************!*\
  !*** ./src/core/features/mainmenu/pages/gamification/gamification.module.ts ***!
  \******************************************************************************/
/*! exports provided: GamificationPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GamificationPageModule", function() { return GamificationPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _core_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/core/shared.module */ "./src/core/shared.module.ts");
/* harmony import */ var _core_features_block_components_components_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/core/features/block/components/components.module */ "./src/core/features/block/components/components.module.ts");
/* harmony import */ var _features_course_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @features/course/components/components.module */ "./src/core/features/course/components/components.module.ts");
/* harmony import */ var _features_mainmenu_components_components_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @features/mainmenu/components/components.module */ "./src/core/features/mainmenu/components/components.module.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _gamification_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./gamification-routing.module */ "./src/core/features/mainmenu/pages/gamification/gamification-routing.module.ts");
/* harmony import */ var _gamification_page__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./gamification.page */ "./src/core/features/mainmenu/pages/gamification/gamification.page.ts");












// import { provideFirebaseApp, getApp, initializeApp } from '@angular/fire/app';
// import { provideFirestore,getFirestore } from '@angular/fire/firestore';
// import { provideAuth, getAuth } from '@angular/fire/auth';
let GamificationPageModule = class GamificationPageModule {
};
GamificationPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["IonicModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
            _core_shared_module__WEBPACK_IMPORTED_MODULE_5__["CoreSharedModule"],
            _core_features_block_components_components_module__WEBPACK_IMPORTED_MODULE_6__["CoreBlockComponentsModule"],
            _features_course_components_components_module__WEBPACK_IMPORTED_MODULE_7__["CoreCourseComponentsModule"],
            _features_mainmenu_components_components_module__WEBPACK_IMPORTED_MODULE_8__["CoreMainMenuComponentsModule"],
            _gamification_routing_module__WEBPACK_IMPORTED_MODULE_10__["GamificationPageRoutingModule"],
        ],
        declarations: [_gamification_page__WEBPACK_IMPORTED_MODULE_11__["GamificationPage"]]
    })
], GamificationPageModule);



/***/ }),

/***/ "./src/core/features/mainmenu/pages/gamification/gamification.page.scss":
/*!******************************************************************************!*\
  !*** ./src/core/features/mainmenu/pages/gamification/gamification.page.scss ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".progress-bar {\n  width: 350px;\n  height: 25px;\n  display: flex;\n  align-items: center;\n  border-radius: 10px;\n  background-color: rgba(128, 128, 128, 0.3);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9jb3JlL2ZlYXR1cmVzL21haW5tZW51L3BhZ2VzL2dhbWlmaWNhdGlvbi9nYW1pZmljYXRpb24ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLDBDQUFBO0FBQ0oiLCJmaWxlIjoic3JjL2NvcmUvZmVhdHVyZXMvbWFpbm1lbnUvcGFnZXMvZ2FtaWZpY2F0aW9uL2dhbWlmaWNhdGlvbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJvZ3Jlc3MtYmFye1xuICAgIHdpZHRoOiAzNTBweDtcbiAgICBoZWlnaHQ6IDI1cHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYShncmV5ICwgMC4zKTtcbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/core/features/mainmenu/pages/gamification/gamification.page.ts":
/*!****************************************************************************!*\
  !*** ./src/core/features/mainmenu/pages/gamification/gamification.page.ts ***!
  \****************************************************************************/
/*! exports provided: GamificationPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GamificationPage", function() { return GamificationPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_firebase_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/firebase.service */ "./src/core/features/mainmenu/pages/gamification/services/firebase.service.ts");



let GamificationPage = class GamificationPage {
    constructor(fire) {
        this.fire = fire;
    }
    ngOnInit() {
        this.fire.getTodos().subscribe((res) => {
            this.data = res.map((re) => {
                return Object.assign(Object.assign({}, re), { styles: this.Styler(re.level) });
            });
            console.log(this.data);
        });
    }
    Styler(width) {
        return {
            'width': `${width * 35}px`,
            'height': '20px',
            'background-color': 'red',
            'border-radius': '5px'
        };
    }
};
GamificationPage.ctorParameters = () => [
    { type: _services_firebase_service__WEBPACK_IMPORTED_MODULE_2__["FirebaseService"] }
];
GamificationPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-gamification',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./gamification.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/core/features/mainmenu/pages/gamification/gamification.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./gamification.page.scss */ "./src/core/features/mainmenu/pages/gamification/gamification.page.scss")).default]
    })
], GamificationPage);



/***/ }),

/***/ "./src/core/features/mainmenu/pages/gamification/services/firebase.service.ts":
/*!************************************************************************************!*\
  !*** ./src/core/features/mainmenu/pages/gamification/services/firebase.service.ts ***!
  \************************************************************************************/
/*! exports provided: FirebaseService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirebaseService", function() { return FirebaseService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");



let FirebaseService = class FirebaseService {
    constructor(afs) {
        this.afs = afs;
        this.itemsCollection = afs.collection('moodle-gamification');
        this.items = this.itemsCollection.valueChanges();
    }
    getTodos() {
        return this.items;
    }
};
FirebaseService.ctorParameters = () => [
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] }
];
FirebaseService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], FirebaseService);



/***/ })

}]);
//# sourceMappingURL=pages-gamification-gamification-module.js.map