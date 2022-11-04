(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-site-site-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/core/features/login/pages/site/site.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/core/features/login/pages/site/site.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n    <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button [text]=\"'core.back' | translate\"></ion-back-button>\r\n        </ion-buttons>\r\n\r\n        <ion-title>\r\n            <h1>{{ 'core.login.connecttomoodle' | translate }}</h1>\r\n        </ion-title>\r\n\r\n        <ion-buttons slot=\"end\">\r\n            <ion-button fill=\"clear\" (click)=\"openSettings()\" [attr.aria-label]=\"'core.settings.appsettings' | translate\">\r\n                <ion-icon slot=\"icon-only\" name=\"fas-cog\" aria-hidden=\"true\"></ion-icon>\r\n            </ion-button>\r\n        </ion-buttons>\r\n    </ion-toolbar>\r\n</ion-header>\r\n<ion-content class=\"ion-padding\">\r\n    <div class=\"list-item-limited-width\">\r\n        <div class=\"ion-text-center ion-padding ion-margin-bottom core-login-site-logo\" [class.hidden]=\"hasSites || enteredSiteUrl\">\r\n            <img src=\"assets/img/login_logo.png\" class=\"avatar-full login-logo\" role=\"presentation\" alt=\"\">\r\n        </div>\r\n        <form [formGroup]=\"siteForm\" (ngSubmit)=\"connect($event, siteForm.value.siteUrl)\" *ngIf=\"!fixedSites\" #siteFormEl>\r\n            <!-- Form to input the site URL if there are no fixed sites. -->\r\n            <ng-container *ngIf=\" siteSelector=='url'\">\r\n                <ion-item>\r\n                    <ion-label position=\" stacked\">\r\n                        <h2>{{ 'core.login.siteaddress' | translate }}</h2>\r\n                    </ion-label>\r\n                    <ion-input name=\"url\" type=\"url\" placeholder=\"{{ 'core.login.siteaddressplaceholder' | translate }}\"\r\n                        formControlName=\"siteUrl\" [core-auto-focus]=\"showKeyboard && !showScanQR\">\r\n                    </ion-input>\r\n                </ion-item>\r\n            </ng-container>\r\n            <ng-container *ngIf=\"siteSelector != 'url'\">\r\n                <ion-item>\r\n                    <ion-label position=\"stacked\">\r\n                        <h2>{{ 'core.login.siteaddress' | translate }}</h2>\r\n                    </ion-label>\r\n                    <ion-input name=\"url\" placeholder=\"{{ 'core.login.siteaddressplaceholder' | translate }}\" formControlName=\"siteUrl\"\r\n                        [core-auto-focus]=\"showKeyboard && !showScanQR\" (ionChange)=\"searchSite($event, siteForm.value.siteUrl)\">\r\n                    </ion-input>\r\n                </ion-item>\r\n\r\n                <ion-list [class.hidden]=\"!hasSites && !enteredSiteUrl\" class=\"core-login-site-list\">\r\n                    <ion-item class=\"core-login-site-list-title\">\r\n                        <ion-label>\r\n                            <h2 class=\"item-heading\">{{ 'core.login.selectsite' | translate }}</h2>\r\n                        </ion-label>\r\n                    </ion-item>\r\n                    <ion-item button *ngIf=\"enteredSiteUrl\" (click)=\"connect($event, enteredSiteUrl.url)\"\r\n                        [attr.aria-label]=\"'core.login.connect' | translate\" detail=\"true\" class=\"core-login-entered-site\">\r\n                        <ion-thumbnail slot=\"start\" aria-hidden=\"true\">\r\n                            <ion-icon name=\"fas-pen\" aria-hidden=\"true\"></ion-icon>\r\n                        </ion-thumbnail>\r\n                        <ion-label>\r\n                            <h2 class=\"ion-text-wrap\">{{ 'core.login.yourenteredsite' | translate }}</h2>\r\n                            <p>{{enteredSiteUrl.noProtocolUrl}}</p>\r\n                        </ion-label>\r\n                    </ion-item>\r\n\r\n                    <div class=\"core-login-site-list-found\" [class.hidden]=\"!hasSites\" [class.dimmed]=\"loadingSites\">\r\n                        <div *ngIf=\"loadingSites\" class=\"core-login-site-list-loading\">\r\n                            <ion-spinner [attr.aria-label]=\"'core.loading' | translate\"></ion-spinner>\r\n                        </div>\r\n                        <ng-container *ngFor=\"let site of sites\">\r\n                            <ng-container *ngTemplateOutlet=\"sitelisting; context: {site: site}\"></ng-container>\r\n                        </ng-container>\r\n                    </div>\r\n                </ion-list>\r\n\r\n                <div *ngIf=\"!hasSites && loadingSites\" class=\"core-login-site-nolist-loading\">\r\n                    <ion-spinner [attr.aria-label]=\"'core.loading' | translate\"></ion-spinner>\r\n                </div>\r\n            </ng-container>\r\n\r\n            <ion-item *ngIf=\"siteSelector == 'url'\">\r\n                <ion-label>\r\n                    <ion-button expand=\"block\" [disabled]=\"!siteForm.valid\" class=\"ion-text-wrap\" type=\"submit\">\r\n                        {{ 'core.login.connect' | translate }}\r\n                    </ion-button>\r\n                </ion-label>\r\n            </ion-item>\r\n        </form>\r\n\r\n        <ng-container *ngIf=\"fixedSites\">\r\n            <!-- Pick the site from a list of fixed sites. -->\r\n            <ion-list *ngIf=\"siteSelector == 'list'\">\r\n                <ion-item>\r\n                    <ion-label>\r\n                        <h2 class=\"item-heading\">{{ 'core.login.selectsite' | translate }}</h2>\r\n                    </ion-label>\r\n                </ion-item>\r\n                <ion-searchbar *ngIf=\"fixedSites.length > 4\" [(ngModel)]=\"filter\" (ionInput)=\"filterChanged($event)\"\r\n                    (ionCancel)=\"filterChanged()\" [placeholder]=\"'core.login.findyoursite' | translate\">\r\n                </ion-searchbar>\r\n                <ng-container *ngFor=\"let site of filteredSites\">\r\n                    <ng-container *ngTemplateOutlet=\"sitelisting; context: {site: site}\"></ng-container>\r\n                </ng-container>\r\n            </ion-list>\r\n        </ng-container>\r\n\r\n        <ng-container *ngIf=\"showScanQR && !hasSites && !enteredSiteUrl\">\r\n            <div class=\"ion-text-center ion-padding ion-margin-top core-login-site-qrcode-separator\">{{ 'core.login.or' | translate }}</div>\r\n            <ion-button expand=\"block\" fill=\"outline\" class=\"ion-margin core-login-site-qrcode\" (click)=\"showInstructionsAndScanQR()\"\r\n                aria-haspopup=\"dialog\">\r\n                <ion-icon slot=\"start\" name=\"fas-qrcode\" aria-hidden=\"true\"></ion-icon>\r\n                {{ 'core.scanqr' | translate }}\r\n            </ion-button>\r\n        </ng-container>\r\n\r\n        <!-- Help. -->\r\n        <ion-button class=\"ion-margin-top core-login-need-help core-button-as-link ion-text-wrap\" (click)=\"showHelp()\"\r\n            aria-haspopup=\"dialog\" expand=\"block\" fill=\"clear\">\r\n            {{ 'core.needhelp' | translate }}\r\n        </ion-button>\r\n    </div>\r\n</ion-content>\r\n\r\n<!-- Template site selector. -->\r\n<ng-template #sitelisting let-site=\"site\">\r\n    <ion-item button (click)=\"connect($event, site.url, site)\" [attr.aria-label]=\"site.name\" detail=\"true\">\r\n        <ion-thumbnail *ngIf=\"siteFinderSettings.displayimage\" slot=\"start\">\r\n            <img [src]=\"site.imageurl\" *ngIf=\"site.imageurl\" onError=\"this.src='assets/icon/icon.png'\" alt=\"\" role=\"presentation\">\r\n            <img src=\"assets/icon/icon.png\" *ngIf=\"!site.imageurl\" class=\"core-login-default-icon\" alt=\"\" role=\"presentation\">\r\n        </ion-thumbnail>\r\n        <ion-label>\r\n            <p *ngIf=\"site.title\" class=\"item-heading ion-text-wrap\">{{site.title}}</p>\r\n            <p *ngIf=\"site.noProtocolUrl\">{{site.noProtocolUrl}}</p>\r\n            <p *ngIf=\"site.location\">{{site.location}}</p>\r\n        </ion-label>\r\n    </ion-item>\r\n</ng-template>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/core/features/settings/pages/site/site.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/core/features/settings/pages/site/site.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n    <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button [text]=\"'core.back' | translate\"></ion-back-button>\r\n        </ion-buttons>\r\n        <ion-title>\r\n            <h1>{{ 'core.settings.preferences' | translate}}</h1>\r\n        </ion-title>\r\n        <ion-buttons slot=\"end\">\r\n        </ion-buttons>\r\n    </ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n    <core-split-view>\r\n        <ion-refresher slot=\"fixed\" [disabled]=\"!handlers.loaded\" (ionRefresh)=\"refreshData($event.target)\">\r\n            <ion-refresher-content pullingText=\"{{ 'core.pulltorefresh' | translate }}\"></ion-refresher-content>\r\n        </ion-refresher>\r\n        <core-loading [hideUntil]=\"handlers.loaded\">\r\n            <ion-list>\r\n                <ion-item *ngFor=\"let handler of handlerItems\" class=\"core-settings-handler\" [ngClass]=\"handler.class\"\r\n                    [attr.aria-label]=\"handler.title | translate\" (click)=\"!handler.toggle && handlers.select(handler)\"\r\n                    [button]=\"!handler.toggle\" [detail]=\"!handler.toggle\" [attr.aria-current]=\"handlers.getItemAriaCurrent(handler)\">\r\n                    <ion-icon [name]=\"handler.icon\" slot=\"start\" *ngIf=\"handler.icon\" aria-hidden=\"true\">\r\n                    </ion-icon>\r\n                    <ion-label>\r\n                        <p class=\"item-heading\">{{ handler.title | translate}}</p>\r\n                    </ion-label>\r\n                    <ion-toggle *ngIf=\"handler.toggle\" [(ngModel)]=\"handler.toggleChecked\"\r\n                        (ionChange)=\"handler.toggle($event.detail.checked)\">\r\n                    </ion-toggle>\r\n                </ion-item>\r\n            </ion-list>\r\n\r\n            <ion-card>\r\n                <ion-item class=\"ion-text-wrap\">\r\n                    <ion-label>\r\n                        <p class=\"item-heading\">{{ 'core.settings.synchronizenow' | translate }}</p>\r\n                        <p>\r\n                            {{ 'core.settings.synchronizenowhelp' | translate }}\r\n                        </p>\r\n                    </ion-label>\r\n                    <core-button-with-spinner [loading]=\"isSynchronizing()\" slot=\"end\">\r\n                        <ion-button fill=\"clear\" (click)=\"synchronize()\" [attr.aria-label]=\"'core.settings.synchronizenow' | translate\"\r\n                            [disabled]=\"!isOnline || (dataSaver && limitedConnection)\">\r\n                            <ion-icon name=\"fas-sync-alt\" slot=\"icon-only\" aria-hidden=\"true\"></ion-icon>\r\n                        </ion-button>\r\n                    </core-button-with-spinner>\r\n                </ion-item>\r\n                <ion-item class=\"core-warning-item ion-text-wrap\" *ngIf=\"!isOnline || (dataSaver && limitedConnection)\">\r\n                    <ion-icon name=\"fas-exclamation-triangle\" slot=\"start\" aria-hidden=\"true\"></ion-icon>\r\n                    <ion-label>\r\n                        <ng-container *ngIf=\"isOnline && dataSaver && limitedConnection\">\r\n                            {{ 'core.settings.connectwifitosync' | translate }}</ng-container>\r\n                        <ng-container *ngIf=\"!isOnline\">{{ 'core.settings.connecttosync' | translate }}</ng-container>\r\n                    </ion-label>\r\n                </ion-item>\r\n            </ion-card>\r\n        </core-loading>\r\n    </core-split-view>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/core/features/login/pages/site/site.module.ts":
/*!***********************************************************!*\
  !*** ./src/core/features/login/pages/site/site.module.ts ***!
  \***********************************************************/
/*! exports provided: CoreLoginSitePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreLoginSitePageModule", function() { return CoreLoginSitePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _core_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/core/shared.module */ "./src/core/shared.module.ts");
/* harmony import */ var _site__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./site */ "./src/core/features/login/pages/site/site.ts");
// (C) Copyright 2015 Moodle Pty Ltd.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.





const routes = [
    {
        path: '',
        component: _site__WEBPACK_IMPORTED_MODULE_4__["CoreLoginSitePage"],
    },
];
let CoreLoginSitePageModule = class CoreLoginSitePageModule {
};
CoreLoginSitePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
            _core_shared_module__WEBPACK_IMPORTED_MODULE_3__["CoreSharedModule"],
        ],
        declarations: [
            _site__WEBPACK_IMPORTED_MODULE_4__["CoreLoginSitePage"],
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CoreLoginSitePageModule);



/***/ }),

/***/ "./src/core/features/login/pages/site/site.scss":
/*!******************************************************!*\
  !*** ./src/core/features/login/pages/site/site.scss ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/**\n * App Global variables SCSS\n * ----------------------------------------------------------------------------\n * Place here the different files you should import to use global variables.\n */\n/**\n * Imported ionic string functions for SCSS\n * ----------------------------------------------------------------------------\n * Extracted from\n * https://github.com/ionic-team/ionic-framework/blob/master/core/src/themes/ionic.functions.string.scss\n */\n/**\n * Imported ionic color functions for SCSS\n * ----------------------------------------------------------------------------\n * Extracted from\n * https://github.com/ionic-team/ionic-framework/blob/master/core/src/themes/ionic.functions.color.scss\n */\n/**\n * Imported ionic mixins for SCSS\n * ----------------------------------------------------------------------------\n * Extracted from\n * https://github.com/ionic-team/ionic-framework/blob/master/core/src/themes/ionic.mixins.scss\n */\n/**\n * Imported ionic mixins for SCSS from different components\n * ----------------------------------------------------------------------------\n * Extracted from\n * https://github.com/ionic-team/ionic-framework/blob/master/core/src/components/grid/grid.mixins.scss\n * https://github.com/ionic-team/ionic-framework/blob/master/core/src/components/item/item.mixins.scss\n */\n/**\n * App custom mixins for SCSS\n * ----------------------------------------------------------------------------\n * Place here our custom mixins.\n */\n/**\n * Same as item-push-svg-url but admits flip-rtl\n */\n/*\n * App Custom App variables SCSS\n * ----------------------------------------------------------------------------\n * Place here all custom app variables.\n */\n/*\n * App Global variables SCSS\n * ----------------------------------------------------------------------------\n * Place here all global variables.\n */\n/**\n * Layout Breakpoints\n *\n * https://ionicframework.com/docs/layout/grid#default-breakpoints\n */\n:host {\n  --list-item-max-width: 600px;\n}\n.item-input:last-child {\n  margin-bottom: 20px;\n}\n.core-login-site-connect {\n  margin-top: 1.4rem;\n}\n.item ion-thumbnail {\n  min-width: 50px;\n  min-height: 50px;\n  width: 50px;\n  height: 50px;\n  border-radius: 20%;\n  box-shadow: 0 0 4px var(--gray-200);\n  text-align: center;\n  overflow: hidden;\n}\n.item ion-thumbnail img {\n  max-height: 50px;\n  max-width: -webkit-fit-content;\n  max-width: fit-content;\n  width: auto;\n  height: auto;\n  margin: 0 auto;\n  margin-left: 50%;\n  transform: translate3d(-50%,  0,  0);\n  object-fit: cover;\n  object-position: 50% 50%;\n}\n[dir=rtl] .item ion-thumbnail img, :host-context([dir=rtl]) .item ion-thumbnail img {\n  transform: translate3d(calc(-1 * -50%),  0,  0);\n}\n.item ion-thumbnail ion-icon {\n  margin: 0 auto;\n  font-size: 35px;\n  height: 50px;\n}\n:host-context([dir=rtl]) .item ion-thumbnail img {\n  margin-left: 0;\n  margin-right: 50%;\n}\n.core-login-site-logo,\n.core-login-site-list,\n.core-login-site-list-found {\n  transition-delay: 0s;\n  visibility: visible;\n  opacity: 1;\n  transition: all 0.7s ease-in-out;\n  max-height: 9999px;\n}\n.core-login-site-logo.hidden,\n.core-login-site-list.hidden,\n.core-login-site-list-found.hidden {\n  opacity: 0;\n  visibility: hidden;\n  margin-top: 0;\n  margin-bottom: 0;\n  padding: 0;\n  max-height: 0;\n}\n.core-login-site-list-found.dimmed {\n  pointer-events: none;\n  position: relative;\n}\n.core-login-site-list-loading {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-content: center;\n  align-items: center;\n  background-color: rgba(255, 255, 255, 0.5);\n  z-index: 1;\n}\n.core-login-site-list-loading ion-spinner {\n  margin: 0 auto;\n}\n.core-login-site-nolist-loading {\n  margin-top: 16px;\n  text-align: center;\n}\n.item.core-login-site-list-title ion-label, .item.core-login-site-list-title ion-label h2.item-heading {\n  margin-top: 0;\n}\n@media (min-width: 768px) {\n  ion-content .core-login-site-logo {\n    margin-top: 20%;\n  }\n  ion-content .core-login-site-logo.hidden {\n    margin-top: 0;\n  }\n}\n.core-login-entered-site {\n  background-color: var(--light);\n}\n.core-login-entered-site ion-thumbnail {\n  box-shadow: 0 0 4px var(--gray-300);\n}\n.core-login-default-icon {\n  filter: grayscale(100%);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy90aGVtZS9nbG9iYWxzLnNjc3MiLCJzcmMvdGhlbWUvaGVscGVycy9pb25pYy5mdW5jdGlvbnMuc3RyaW5nLnNjc3MiLCJzcmMvdGhlbWUvaGVscGVycy9pb25pYy5mdW5jdGlvbnMuY29sb3Iuc2NzcyIsInNyYy90aGVtZS9oZWxwZXJzL2lvbmljLm1peGlucy5zY3NzIiwic3JjL3RoZW1lL2hlbHBlcnMvaW9uaWMuY29tcG9uZW50cy5taXhpbnMuc2NzcyIsInNyYy90aGVtZS9oZWxwZXJzL2N1c3RvbS5taXhpbnMuc2NzcyIsInNyYy90aGVtZS9nbG9iYWxzLmN1c3RvbS5zY3NzIiwic3JjL3RoZW1lL2dsb2JhbHMudmFyaWFibGVzLnNjc3MiLCJzcmMvY29yZS9mZWF0dXJlcy9sb2dpbi9wYWdlcy9zaXRlL3NpdGUuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztFQUFBO0FDQUE7Ozs7O0VBQUE7QUNBQTs7Ozs7RUFBQTtBQ0FBOzs7OztFQUFBO0FDQUE7Ozs7OztFQUFBO0FDRUE7Ozs7RUFBQTtBQWdHQTs7RUFBQTtBQ2xHQTs7OztFQUFBO0FDQUE7Ozs7RUFBQTtBQStEQTs7OztFQUFBO0FDN0RBO0VBQ0ksNEJBQUE7QUFvREo7QUFqREE7RUFDSSxtQkFBQTtBQW9ESjtBQWpEQTtFQUNJLGtCQUFBO0FBb0RKO0FBakRBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLG1DQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQW9ESjtBQWxESTtFQUNJLGdCQUFBO0VBQ0EsOEJBQUE7RUFBQSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VMd2ZGLG9DQUFBO0VLdGZFLGlCQUFBO0VBQ0Esd0JBQUE7QUFvRFI7QUxzSFc7RUErVUwsK0NBQUE7QUtsY047QUFyREk7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUF3RFI7QUFsREk7RUFDSSxjQUFBO0VBQ0EsaUJBQUE7QUFxRFI7QUFoREE7OztFQUdJLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0VBQ0EsZ0NBQUE7RUFDQSxrQkFBQTtBQW1ESjtBQWpESTs7O0VBQ0ksVUFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7QUFxRFI7QUFqREE7RUFDSSxvQkFBQTtFQUNBLGtCQUFBO0FBb0RKO0FBakRBO0VBQ0ksa0JBQUE7RUFDQSxNQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLDBDQUFBO0VBQ0EsVUFBQTtBQW9ESjtBQW5ESTtFQUNJLGNBQUE7QUFxRFI7QUFqREE7RUFDSSxnQkFBQTtFQUNBLGtCQUFBO0FBb0RKO0FBaERJO0VBQ0ksYUFBQTtBQW1EUjtBTGxCSTtFSzVCQTtJQUNJLGVBQUE7RUFrRE47RUFqRE07SUFDSSxhQUFBO0VBbURWO0FBQ0Y7QUEvQ0E7RUFDSSw4QkFBQTtBQWlESjtBQS9DSTtFQUNJLG1DQUFBO0FBaURSO0FBN0NBO0VBQ0ksdUJBQUE7QUFnREoiLCJmaWxlIjoic3JjL2NvcmUvZmVhdHVyZXMvbG9naW4vcGFnZXMvc2l0ZS9zaXRlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQXBwIEdsb2JhbCB2YXJpYWJsZXMgU0NTU1xyXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAqIFBsYWNlIGhlcmUgdGhlIGRpZmZlcmVudCBmaWxlcyB5b3Ugc2hvdWxkIGltcG9ydCB0byB1c2UgZ2xvYmFsIHZhcmlhYmxlcy5cclxuICovXHJcblxyXG4kZm9udC1wYXRoOiBcIi4uL2Fzc2V0cy9mb250c1wiO1xyXG4kYXNzZXRzLXBhdGg6IFwiLi4vYXNzZXRzXCI7XHJcblxyXG5AaW1wb3J0IFwiLi9oZWxwZXJzL2hlbHBlcnMuc2Nzc1wiO1xyXG5AaW1wb3J0IFwiLi9nbG9iYWxzLmN1c3RvbS5zY3NzXCI7XHJcbkBpbXBvcnQgXCIuL2dsb2JhbHMudmFyaWFibGVzLnNjc3NcIjtcclxuIiwiLyoqXHJcbiAqIEltcG9ydGVkIGlvbmljIHN0cmluZyBmdW5jdGlvbnMgZm9yIFNDU1NcclxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gKiBFeHRyYWN0ZWQgZnJvbVxyXG4gKiBodHRwczovL2dpdGh1Yi5jb20vaW9uaWMtdGVhbS9pb25pYy1mcmFtZXdvcmsvYmxvYi9tYXN0ZXIvY29yZS9zcmMvdGhlbWVzL2lvbmljLmZ1bmN0aW9ucy5zdHJpbmcuc2Nzc1xyXG4gKi9cclxuXHJcblxyXG4vLyBTdHJpbmcgVXRpbGl0eSBGdW5jdGlvbnNcclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbi8vIFN0cmluZyBSZXBsYWNlIEZ1bmN0aW9uXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5AZnVuY3Rpb24gc3RyLXJlcGxhY2UoJHN0cmluZywgJHNlYXJjaCwgJHJlcGxhY2U6IFwiXCIpIHtcclxuICAkaW5kZXg6IHN0ci1pbmRleCgkc3RyaW5nLCAkc2VhcmNoKTtcclxuXHJcbiAgQGlmICRpbmRleCB7XHJcbiAgICBAcmV0dXJuIHN0ci1zbGljZSgkc3RyaW5nLCAxLCAkaW5kZXggLSAxKSArICRyZXBsYWNlICsgc3RyLXJlcGxhY2Uoc3RyLXNsaWNlKCRzdHJpbmcsICRpbmRleCArIHN0ci1sZW5ndGgoJHNlYXJjaCkpLCAkc2VhcmNoLCAkcmVwbGFjZSk7XHJcbiAgfVxyXG5cclxuICBAcmV0dXJuICRzdHJpbmc7XHJcbn1cclxuXHJcbi8vIFN0cmluZyBTcGxpdCBGdW5jdGlvblxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuXHJcbkBmdW5jdGlvbiBzdHItc3BsaXQoJHN0cmluZywgJHNlcGFyYXRvcikge1xyXG4gIC8vIGVtcHR5IGFycmF5L2xpc3RcclxuICAkc3BsaXQtYXJyOiAoKTtcclxuICAvLyBmaXJzdCBpbmRleCBvZiBzZXBhcmF0b3IgaW4gc3RyaW5nXHJcbiAgJGluZGV4OiBzdHItaW5kZXgoJHN0cmluZywgJHNlcGFyYXRvcik7XHJcbiAgLy8gbG9vcCB0aHJvdWdoIHN0cmluZ1xyXG4gIEB3aGlsZSAkaW5kZXggIT0gbnVsbCB7XHJcbiAgICAvLyBnZXQgdGhlIHN1YnN0cmluZyBmcm9tIHRoZSBmaXJzdCBjaGFyYWN0ZXIgdG8gdGhlIHNlcGFyYXRvclxyXG4gICAgJGl0ZW06IHN0ci1zbGljZSgkc3RyaW5nLCAxLCAkaW5kZXggLSAxKTtcclxuICAgIC8vIHB1c2ggaXRlbSB0byBhcnJheVxyXG4gICAgJHNwbGl0LWFycjogYXBwZW5kKCRzcGxpdC1hcnIsICRpdGVtKTtcclxuICAgIC8vIHJlbW92ZSBpdGVtIGFuZCBzZXBhcmF0b3IgZnJvbSBzdHJpbmdcclxuICAgICRzdHJpbmc6IHN0ci1zbGljZSgkc3RyaW5nLCAkaW5kZXggKyAxKTtcclxuICAgIC8vIGZpbmQgbmV3IGluZGV4IG9mIHNlcGFyYXRvclxyXG4gICAgJGluZGV4OiBzdHItaW5kZXgoJHN0cmluZywgJHNlcGFyYXRvcik7XHJcbiAgfVxyXG4gIC8vIGFkZCB0aGUgcmVtYWluaW5nIHN0cmluZyB0byBsaXN0ICh0aGUgbGFzdCBpdGVtKVxyXG4gICRzcGxpdC1hcnI6IGFwcGVuZCgkc3BsaXQtYXJyLCAkc3RyaW5nKTtcclxuXHJcbiAgQHJldHVybiAkc3BsaXQtYXJyO1xyXG59XHJcblxyXG5cclxuLy8gU3RyaW5nIEV4dHJhY3QgRnVuY3Rpb25cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbkBmdW5jdGlvbiBzdHItZXh0cmFjdCgkc3RyaW5nLCAkc3RhcnQsICRlbmQpIHtcclxuICAkc3RhcnQtaW5kZXg6IHN0ci1pbmRleCgkc3RyaW5nLCAkc3RhcnQpO1xyXG5cclxuICBAaWYgJHN0YXJ0LWluZGV4IHtcclxuICAgICRwb3N0OiBzdHItc2xpY2UoJHN0cmluZywgJHN0YXJ0LWluZGV4ICsgc3RyLWxlbmd0aCgkc3RhcnQpKTtcclxuICAgICRlbmQtaW5kZXg6IHN0ci1pbmRleCgkcG9zdCwgJGVuZCk7XHJcblxyXG4gICAgQGlmICRlbmQtaW5kZXgge1xyXG4gICAgICBAcmV0dXJuIHN0ci1zbGljZSgkcG9zdCwgMSwgJGVuZC1pbmRleCAtIDEpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgQHJldHVybiBudWxsO1xyXG59XHJcblxyXG5cclxuLy8gU3RyaW5nIENvbnRhaW5zIEZ1bmN0aW9uXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5AZnVuY3Rpb24gc3RyLWNvbnRhaW5zKCRzdHJpbmcsICRuZWVkbGUpIHtcclxuICBAaWYgKHR5cGUtb2YoJHN0cmluZykgPT0gc3RyaW5nKSB7XHJcbiAgICBAcmV0dXJuIHN0ci1pbmRleCgkc3RyaW5nLCAkbmVlZGxlKSAhPSBudWxsO1xyXG4gIH1cclxuXHJcbiAgQHJldHVybiBmYWxzZTtcclxufVxyXG5cclxuXHJcbi8vIFVSTCBFbmNvZGUgRnVuY3Rpb25cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbkBmdW5jdGlvbiB1cmwtZW5jb2RlKCR2YWwpIHtcclxuICAkc3BhY2VzOiBzdHItcmVwbGFjZSgkdmFsLCBcIiBcIiwgXCIlMjBcIik7XHJcbiAgJGVuY29kZWQ6IHN0ci1yZXBsYWNlKCRzcGFjZXMsIFwiI1wiLCBcIiUyM1wiKTtcclxuICBAcmV0dXJuICRlbmNvZGVkO1xyXG59XHJcblxyXG5cclxuLy8gQWRkIFJvb3QgU2VsZWN0b3JcclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gQWRkcyBhIHJvb3Qgc2VsZWN0b3IgdXNpbmcgaG9zdC1jb250ZXh0IGJhc2VkIG9uIHRoZSBzZWxlY3RvciBwYXNzZWRcclxuLy9cclxuLy8gRXhhbXBsZXNcclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gQGluY2x1ZGUgYWRkLXJvb3Qtc2VsZWN0b3IoXCJbZGlyPXJ0bF1cIiwgXCI6aG9zdFwiKVxyXG4vLyAtLT4gOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pXHJcbi8vXHJcbi8vIEBpbmNsdWRlIGFkZC1yb290LXNlbGVjdG9yKFwiW2Rpcj1ydGxdXCIsIFwiOmhvc3QoLmZpeGVkKVwiKVxyXG4vLyAtLT4gOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pOmhvc3QoLmZpeGVkKVxyXG4vLyAtLT4gOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pLmZpeGVkXHJcbi8vXHJcbi8vIEBpbmNsdWRlIGFkZC1yb290LXNlbGVjdG9yKFwiW2Rpcj1ydGxdXCIsIFwiOmhvc3QoLnRhYi1sYXlvdXQtaWNvbi1oaWRlKSA6OnNsb3R0ZWQoaW9uLWJhZGdlKVwiKVxyXG4vLyAtLT4gOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pLnRhYi1sYXlvdXQtaWNvbi1oaWRlIDo6c2xvdHRlZChpb24tYmFkZ2UpXHJcbi8vXHJcbi8vIEBpbmNsdWRlIGFkZC1yb290LXNlbGVjdG9yKFwiW2Rpcj1ydGxdXCIsIFwiLnNoYWRvd1wiKVxyXG4vLyAtLT4gW2Rpcj1ydGxdIC5zaGFkb3dcclxuLy8gLS0+IDpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKSAuc2hhZG93XHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5AZnVuY3Rpb24gYWRkLXJvb3Qtc2VsZWN0b3IoJHJvb3QsICRhZGRIb3N0U2VsZWN0b3IpIHtcclxuICAkc2VsZWN0b3JzOiBzdHItc3BsaXQoJHJvb3QsIFwiLFwiKTtcclxuXHJcbiAgJGxpc3Q6ICgpO1xyXG5cclxuICBAZWFjaCAkc2VsZWN0b3IgaW4gJHNlbGVjdG9ycyB7XHJcbiAgICAvLyBJZiB0aGUgc2VsZWN0b3IgY29udGFpbnMgOmhvc3QoIGl0IG1lYW5zIGl0IGlzIHRhcmdldGluZyBhIGNsYXNzIG9uIHRoZSBob3N0XHJcbiAgICAvLyBlbGVtZW50IHNvIHdlIG5lZWQgdG8gY2hhbmdlIGhvdyB3ZSB0YXJnZXQgaXRcclxuICAgIEBpZiBzdHItY29udGFpbnMoJHNlbGVjdG9yLCBcIjpob3N0KFwiKSB7XHJcbiAgICAgICRzaGFkb3ctZWxlbWVudDogc3RyLXJlcGxhY2UoJHNlbGVjdG9yLCBcIjpob3N0KFwiLCBcIjpob3N0LWNvbnRleHQoI3skYWRkSG9zdFNlbGVjdG9yfSk6aG9zdChcIik7XHJcbiAgICAgICRsaXN0OiBhcHBlbmQoJGxpc3QsICRzaGFkb3ctZWxlbWVudCwgY29tbWEpO1xyXG5cclxuICAgICAgJG5ldy1lbGVtZW50OiAoKTtcclxuICAgICAgJGVsZW1lbnRzOiBzdHItc3BsaXQoJHNlbGVjdG9yLCBcIiBcIik7XHJcblxyXG4gICAgICBAZWFjaCAkZWxlbWVudCBpbiAkZWxlbWVudHMge1xyXG4gICAgICAgIEBpZiBzdHItY29udGFpbnMoJGVsZW1lbnQsIFwiOmhvc3QoXCIpIHtcclxuICAgICAgICAgICRzY29wZWQtZWxlbWVudDogJGVsZW1lbnQ7XHJcblxyXG4gICAgICAgICAgQGlmIHN0ci1jb250YWlucygkZWxlbWVudCwgXCIpKVwiKSB7XHJcbiAgICAgICAgICAgICRzY29wZWQtZWxlbWVudDogc3RyLXJlcGxhY2UoJHNjb3BlZC1lbGVtZW50LCBcIikpXCIsIFwiKVwiKTtcclxuICAgICAgICAgIH0gQGVsc2Uge1xyXG4gICAgICAgICAgICAkc2NvcGVkLWVsZW1lbnQ6IHN0ci1yZXBsYWNlKCRzY29wZWQtZWxlbWVudCwgXCIpXCIsIFwiXCIpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgJHNjb3BlZC1lbGVtZW50OiBzdHItcmVwbGFjZSgkc2NvcGVkLWVsZW1lbnQsIFwiOmhvc3QoXCIsIFwiOmhvc3QtY29udGV4dCgjeyRhZGRIb3N0U2VsZWN0b3J9KVwiKTtcclxuXHJcbiAgICAgICAgICAkbmV3LWVsZW1lbnQ6IGFwcGVuZCgkbmV3LWVsZW1lbnQsICRzY29wZWQtZWxlbWVudCwgc3BhY2UpO1xyXG4gICAgICAgIH0gQGVsc2Uge1xyXG4gICAgICAgICAgJG5ldy1lbGVtZW50OiBhcHBlbmQoJG5ldy1lbGVtZW50LCAkZWxlbWVudCwgc3BhY2UpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgJGxpc3Q6IGFwcGVuZCgkbGlzdCwgJG5ldy1lbGVtZW50LCBjb21tYSk7XHJcbiAgICAvLyBJZiB0aGUgc2VsZWN0b3IgY29udGFpbnMgOmhvc3QgaXQgbWVhbnMgaXQgaXMgdGFyZ2V0aW5nIGp1c3QgdGhlIGhvc3RcclxuICAgIC8vIGVsZW1lbnQgc28gd2UgY2FuIGNoYW5nZSBpdCB0byBsb29rIGZvciBob3N0LWNvbnRleHRcclxuICAgIH0gQGVsc2UgaWYgc3RyLWNvbnRhaW5zKCRzZWxlY3RvciwgXCI6aG9zdFwiKSB7XHJcbiAgICAgICRzaGFkb3ctZWxlbWVudDogc3RyLXJlcGxhY2UoJHNlbGVjdG9yLCBcIjpob3N0XCIsIFwiOmhvc3QtY29udGV4dCgjeyRhZGRIb3N0U2VsZWN0b3J9KVwiKTtcclxuICAgICAgJGxpc3Q6IGFwcGVuZCgkbGlzdCwgJHNoYWRvdy1lbGVtZW50LCBjb21tYSk7XHJcbiAgICAgIC8vIElmIHRoZSBzZWxlY3RvciBkb2VzIG5vdCBjb250YWluIGhvc3QgYXQgYWxsIGl0IGlzIGVpdGhlciBhIHNoYWRvd1xyXG4gICAgICAvLyBvciBub3JtYWwgZWxlbWVudCBzbyBhcHBlbmQgYm90aCB0aGUgZGlyIGNoZWNrIGFuZCBob3N0LWNvbnRleHRcclxuICAgIH0gQGVsc2Uge1xyXG4gICAgICAkbGlzdDogYXBwZW5kKCRsaXN0LCBcIiN7JGFkZEhvc3RTZWxlY3Rvcn0gI3skc2VsZWN0b3J9XCIsIGNvbW1hKTtcclxuICAgICAgJGxpc3Q6IGFwcGVuZCgkbGlzdCwgXCI6aG9zdC1jb250ZXh0KCN7JGFkZEhvc3RTZWxlY3Rvcn0pICN7JHNlbGVjdG9yfVwiLCBjb21tYSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBAcmV0dXJuICRsaXN0O1xyXG59XHJcbiIsIi8qKlxyXG4gKiBJbXBvcnRlZCBpb25pYyBjb2xvciBmdW5jdGlvbnMgZm9yIFNDU1NcclxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gKiBFeHRyYWN0ZWQgZnJvbVxyXG4gKiBodHRwczovL2dpdGh1Yi5jb20vaW9uaWMtdGVhbS9pb25pYy1mcmFtZXdvcmsvYmxvYi9tYXN0ZXIvY29yZS9zcmMvdGhlbWVzL2lvbmljLmZ1bmN0aW9ucy5jb2xvci5zY3NzXHJcbiAqL1xyXG5cclxuLy8gR2V0cyB0aGUgYWN0aXZlIGNvbG9yJ3MgY3NzIHZhcmlhYmxlIGZyb20gYSB2YXJpYXRpb24uIEFscGhhIGlzIG9wdGlvbmFsLlxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyBFeGFtcGxlIHVzYWdlOlxyXG4vLyBjdXJyZW50LWNvbG9yKGJhc2UpID0+IHZhcigtLWlvbi1jb2xvci1iYXNlKVxyXG4vLyBjdXJyZW50LWNvbG9yKGNvbnRyYXN0LCAwLjEpID0+IHJnYmEodmFyKC0taW9uLWNvbG9yLWNvbnRyYXN0LXJnYiksIDAuMSlcclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuQGZ1bmN0aW9uIGN1cnJlbnQtY29sb3IoJHZhcmlhdGlvbiwgJGFscGhhOiBudWxsKSB7XHJcbiAgQGlmICRhbHBoYSA9PSBudWxsIHtcclxuICAgIEByZXR1cm4gdmFyKC0taW9uLWNvbG9yLSN7JHZhcmlhdGlvbn0pO1xyXG4gIH0gQGVsc2Uge1xyXG4gICAgQHJldHVybiByZ2JhKHZhcigtLWlvbi1jb2xvci0jeyR2YXJpYXRpb259LXJnYiksICN7JGFscGhhfSk7XHJcbiAgfVxyXG59XHJcblxyXG4vLyBHZXRzIHRoZSBzcGVjaWZpYyBjb2xvcidzIGNzcyB2YXJpYWJsZSBmcm9tIHRoZSBuYW1lIGFuZCB2YXJpYXRpb24uIEFscGhhL3JnYiBhcmUgb3B0aW9uYWwuXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vIEV4YW1wbGUgdXNhZ2U6XHJcbi8vIGlvbi1jb2xvcihwcmltYXJ5LCBiYXNlKSA9PiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSwgIzM4ODBmZilcclxuLy8gaW9uLWNvbG9yKHNlY29uZGFyeSwgY29udHJhc3QpID0+IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnktY29udHJhc3QpXHJcbi8vIGlvbi1jb2xvcihwcmltYXJ5LCBiYXNlLCAwLjUpID0+IHJnYmEodmFyKC0taW9uLWNvbG9yLXByaW1hcnktcmdiLCA1NiwgMTI4LCAyNTUpLCAwLjUpXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbkBmdW5jdGlvbiBpb24tY29sb3IoJG5hbWUsICR2YXJpYXRpb24sICRhbHBoYTogbnVsbCwgJHJnYjogbnVsbCkge1xyXG4gICR2YWx1ZXM6IG1hcC1nZXQoJGNvbG9ycywgJG5hbWUpO1xyXG4gICR2YWx1ZTogbWFwLWdldCgkdmFsdWVzLCAkdmFyaWF0aW9uKTtcclxuICAkdmFyaWFibGU6IC0taW9uLWNvbG9yLSN7JG5hbWV9LSN7JHZhcmlhdGlvbn07XHJcblxyXG4gIEBpZiAoJHZhcmlhdGlvbiA9PSBiYXNlKSB7XHJcbiAgICAkdmFyaWFibGU6IC0taW9uLWNvbG9yLSN7JG5hbWV9O1xyXG4gIH1cclxuXHJcbiAgQGlmICgkYWxwaGEpIHtcclxuICAgICR2YWx1ZTogY29sb3ItdG8tcmdiLWxpc3QoJHZhbHVlKTtcclxuICAgIEByZXR1cm4gcmdiYSh2YXIoI3skdmFyaWFibGV9LXJnYiwgJHZhbHVlKSwgJGFscGhhKTtcclxuICB9XHJcbiAgQGlmICgkcmdiKSB7XHJcbiAgICAkdmFsdWU6IGNvbG9yLXRvLXJnYi1saXN0KCR2YWx1ZSk7XHJcbiAgICAkdmFyaWFibGU6ICN7JHZhcmlhYmxlfS1yZ2I7XHJcbiAgfVxyXG5cclxuICBAcmV0dXJuIHZhcigjeyR2YXJpYWJsZX0sICR2YWx1ZSk7XHJcbn1cclxuXHJcbi8vIE1peGVzIGEgY29sb3Igd2l0aCBibGFjayB0byBjcmVhdGUgaXRzIHNoYWRlLlxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5AZnVuY3Rpb24gZ2V0LWNvbG9yLXNoYWRlKCRjb2xvcikge1xyXG4gIEByZXR1cm4gbWl4KCMwMDAsICRjb2xvciwgMTIlKTtcclxufVxyXG5cclxuLy8gTWl4ZXMgYSBjb2xvciB3aXRoIHdoaXRlIHRvIGNyZWF0ZSBpdHMgdGludC5cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuQGZ1bmN0aW9uIGdldC1jb2xvci10aW50KCRjb2xvcikge1xyXG4gIEByZXR1cm4gbWl4KCNmZmYsICRjb2xvciwgMTAlKTtcclxufVxyXG5cclxuLy8gQ29udmVydHMgYSBjb2xvciB0byBhIGNvbW1hIHNlcGFyYXRlZCByZ2IuXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbkBmdW5jdGlvbiBjb2xvci10by1yZ2ItbGlzdCgkY29sb3IpIHtcclxuICBAcmV0dXJuICN7cmVkKCRjb2xvcil9LCN7Z3JlZW4oJGNvbG9yKX0sI3tibHVlKCRjb2xvcil9O1xyXG59XHJcbiIsIi8qKlxyXG4gKiBJbXBvcnRlZCBpb25pYyBtaXhpbnMgZm9yIFNDU1NcclxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gKiBFeHRyYWN0ZWQgZnJvbVxyXG4gKiBodHRwczovL2dpdGh1Yi5jb20vaW9uaWMtdGVhbS9pb25pYy1mcmFtZXdvcmsvYmxvYi9tYXN0ZXIvY29yZS9zcmMvdGhlbWVzL2lvbmljLm1peGlucy5zY3NzXHJcbiAqL1xyXG5cclxuQG1peGluIGlucHV0LWNvdmVyKCkge1xyXG4gIEBpbmNsdWRlIHBvc2l0aW9uKDAsIG51bGwsIG51bGwsIDApO1xyXG4gIEBpbmNsdWRlIG1hcmdpbigwKTtcclxuXHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG5cclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcblxyXG4gIGJvcmRlcjogMDtcclxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gIGFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuXHJcbiAgJjo6LW1vei1mb2N1cy1pbm5lciB7XHJcbiAgICBib3JkZXI6IDA7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gdmlzdWFsbHktaGlkZGVuKCkge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG5cclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcblxyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG5cclxuICBib3JkZXI6IDA7XHJcbiAgb3V0bGluZTogMDtcclxuICBjbGlwOiByZWN0KDAgMCAwIDApO1xyXG5cclxuICBvcGFjaXR5OiAwO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcblxyXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcclxuICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XHJcbn1cclxuXHJcbkBtaXhpbiB0ZXh0LWluaGVyaXQoKSB7XHJcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XHJcbiAgZm9udC1zaXplOiBpbmhlcml0O1xyXG4gIGZvbnQtc3R5bGU6IGluaGVyaXQ7XHJcbiAgZm9udC13ZWlnaHQ6IGluaGVyaXQ7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IGluaGVyaXQ7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBpbmhlcml0O1xyXG4gIHRleHQtaW5kZW50OiBpbmhlcml0O1xyXG4gIHRleHQtb3ZlcmZsb3c6IGluaGVyaXQ7XHJcbiAgdGV4dC10cmFuc2Zvcm06IGluaGVyaXQ7XHJcbiAgdGV4dC1hbGlnbjogaW5oZXJpdDtcclxuICB3aGl0ZS1zcGFjZTogaW5oZXJpdDtcclxuICBjb2xvcjogaW5oZXJpdDtcclxufVxyXG5cclxuQG1peGluIGJ1dHRvbi1zdGF0ZSgpIHtcclxuICBAaW5jbHVkZSBwb3NpdGlvbigwLCAwLCAwLCAwKTtcclxuXHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG5cclxuICBjb250ZW50OiBcIlwiO1xyXG5cclxuICBvcGFjaXR5OiAwO1xyXG59XHJcblxyXG4vLyBGb250IHNtb290aGluZ1xyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuQG1peGluIGZvbnQtc21vb3RoaW5nKCkge1xyXG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XHJcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XHJcbn1cclxuXHJcbi8vIEdldCB0aGUga2V5IGZyb20gYSBtYXAgYmFzZWQgb24gdGhlIGluZGV4XHJcbkBmdW5jdGlvbiBpbmRleC10by1rZXkoJG1hcCwgJGluZGV4KSB7XHJcbiAgJGtleXM6IG1hcC1rZXlzKCRtYXApO1xyXG5cclxuICBAcmV0dXJuIG50aCgka2V5cywgJGluZGV4KTtcclxufVxyXG5cclxuXHJcbi8vIEJyZWFrcG9pbnQgTWl4aW5zXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuLy8gQnJlYWtwb2ludCB2aWV3cG9ydCBzaXplcyBhbmQgbWVkaWEgcXVlcmllcy5cclxuLy9cclxuLy8gQnJlYWtwb2ludHMgYXJlIGRlZmluZWQgYXMgYSBtYXAgb2YgKG5hbWU6IG1pbmltdW0gd2lkdGgpLCBvcmRlciBmcm9tIHNtYWxsIHRvIGxhcmdlOlxyXG4vL1xyXG4vLyAgICAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpXHJcbi8vXHJcbi8vIFRoZSBtYXAgZGVmaW5lZCBpbiB0aGUgYCRzY3JlZW4tYnJlYWtwb2ludHNgIGdsb2JhbCB2YXJpYWJsZSBpcyB1c2VkIGFzIHRoZSBgJGJyZWFrcG9pbnRzYCBhcmd1bWVudCBieSBkZWZhdWx0LlxyXG5cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG4vLyBNaW5pbXVtIGJyZWFrcG9pbnQgd2lkdGguIE51bGwgZm9yIHRoZSBzbWFsbGVzdCAoZmlyc3QpIGJyZWFrcG9pbnQuXHJcbi8vXHJcbi8vICAgID4+IGJyZWFrcG9pbnQtbWluKHNtLCAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpKVxyXG4vLyAgICA1NzZweFxyXG5AZnVuY3Rpb24gYnJlYWtwb2ludC1taW4oJG5hbWUsICRicmVha3BvaW50czogJHNjcmVlbi1icmVha3BvaW50cykge1xyXG4gICRtaW46IG1hcC1nZXQoJGJyZWFrcG9pbnRzLCAkbmFtZSk7XHJcblxyXG4gIEByZXR1cm4gaWYoJG5hbWUgIT0gaW5kZXgtdG8ta2V5KCRicmVha3BvaW50cywgMSksICRtaW4sIG51bGwpO1xyXG59XHJcblxyXG4vLyBSZXR1cm5zIGEgYmxhbmsgc3RyaW5nIGlmIHNtYWxsZXN0IGJyZWFrcG9pbnQsIG90aGVyd2lzZSByZXR1cm5zIHRoZSBuYW1lIHdpdGggYSBkYXNoIGluZnJvbnQuXHJcbi8vIFVzZWZ1bCBmb3IgbWFraW5nIHJlc3BvbnNpdmUgdXRpbGl0aWVzLlxyXG4vL1xyXG4vLyAgICA+PiBicmVha3BvaW50LWluZml4KHhzLCAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpKVxyXG4vLyAgICBcIlwiICAoUmV0dXJucyBhIGJsYW5rIHN0cmluZylcclxuLy8gICAgPj4gYnJlYWtwb2ludC1pbmZpeChzbSwgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KSlcclxuLy8gICAgXCItc21cIlxyXG5AZnVuY3Rpb24gYnJlYWtwb2ludC1pbmZpeCgkbmFtZSwgJGJyZWFrcG9pbnRzOiAkc2NyZWVuLWJyZWFrcG9pbnRzKSB7XHJcbiAgQHJldHVybiBpZihicmVha3BvaW50LW1pbigkbmFtZSwgJGJyZWFrcG9pbnRzKSA9PSBudWxsLCBcIlwiLCBcIi0jeyRuYW1lfVwiKTtcclxufVxyXG5cclxuLy8gTWVkaWEgb2YgYXQgbGVhc3QgdGhlIG1pbmltdW0gYnJlYWtwb2ludCB3aWR0aC4gTm8gcXVlcnkgZm9yIHRoZSBzbWFsbGVzdCBicmVha3BvaW50LlxyXG4vLyBNYWtlcyB0aGUgQGNvbnRlbnQgYXBwbHkgdG8gdGhlIGdpdmVuIGJyZWFrcG9pbnQgYW5kIHdpZGVyLlxyXG5AbWl4aW4gbWVkaWEtYnJlYWtwb2ludC11cCgkbmFtZSwgJGJyZWFrcG9pbnRzOiAkc2NyZWVuLWJyZWFrcG9pbnRzKSB7XHJcbiAgJG1pbjogYnJlYWtwb2ludC1taW4oJG5hbWUsICRicmVha3BvaW50cyk7XHJcbiAgQGlmICRtaW4ge1xyXG4gICAgQG1lZGlhIChtaW4td2lkdGg6ICRtaW4pIHtcclxuICAgICAgQGNvbnRlbnQ7XHJcbiAgICB9XHJcbiAgfSBAZWxzZSB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuXHJcbi8vIE5hbWUgb2YgdGhlIG5leHQgYnJlYWtwb2ludCwgb3IgbnVsbCBmb3IgdGhlIGxhc3QgYnJlYWtwb2ludC5cclxuLy9cclxuLy8gICAgPj4gYnJlYWtwb2ludC1uZXh0KHNtKVxyXG4vLyAgICBtZFxyXG4vLyAgICA+PiBicmVha3BvaW50LW5leHQoc20sICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweCkpXHJcbi8vICAgIG1kXHJcbi8vICAgID4+IGJyZWFrcG9pbnQtbmV4dChzbSwgJGJyZWFrcG9pbnQtbmFtZXM6ICh4cyBzbSBtZCBsZyB4bCkpXHJcbi8vICAgIG1kXHJcbkBmdW5jdGlvbiBicmVha3BvaW50LW5leHQoJG5hbWUsICRicmVha3BvaW50czogJHNjcmVlbi1icmVha3BvaW50cywgJGJyZWFrcG9pbnQtbmFtZXM6IG1hcC1rZXlzKCRicmVha3BvaW50cykpIHtcclxuICAkbjogaW5kZXgoJGJyZWFrcG9pbnQtbmFtZXMsICRuYW1lKTtcclxuICBAcmV0dXJuIGlmKCRuIDwgbGVuZ3RoKCRicmVha3BvaW50LW5hbWVzKSwgbnRoKCRicmVha3BvaW50LW5hbWVzLCAkbiArIDEpLCBudWxsKTtcclxufVxyXG5cclxuLy8gTWF4aW11bSBicmVha3BvaW50IHdpZHRoLiBOdWxsIGZvciB0aGUgc21hbGxlc3QgKGZpcnN0KSBicmVha3BvaW50LlxyXG4vLyBUaGUgbWF4aW11bSB2YWx1ZSBpcyByZWR1Y2VkIGJ5IDAuMDJweCB0byB3b3JrIGFyb3VuZCB0aGUgbGltaXRhdGlvbnMgb2ZcclxuLy8gYG1pbi1gIGFuZCBgbWF4LWAgcHJlZml4ZXMgYW5kIHZpZXdwb3J0cyB3aXRoIGZyYWN0aW9uYWwgd2lkdGhzLlxyXG4vL1xyXG4vLyBTZWUgaHR0cHM6Ly93d3cudzMub3JnL1RSL21lZGlhcXVlcmllcy00LyNtcS1taW4tbWF4XHJcbi8vIFVzZXMgMC4wMnB4IHJhdGhlciB0aGFuIDAuMDFweCB0byB3b3JrIGFyb3VuZCBhIGN1cnJlbnQgcm91bmRpbmcgYnVnIGluIFNhZmFyaS5cdC8vIFVzZXMgMC4wMnB4IHJhdGhlciB0aGFuIDAuMDFweCB0byB3b3JrIGFyb3VuZCBhIGN1cnJlbnQgcm91bmRpbmcgYnVnIGluIFNhZmFyaS5cclxuLy8gU2VlIGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD0xNzgyNjFcdC8vIFNlZSBodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTc4MjYxXHJcbi8vXHJcbi8vICAgID4+IGJyZWFrcG9pbnQtbWF4KG1kLCAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpKVxyXG4vLyAgICA3NjcuOThweFxyXG5AZnVuY3Rpb24gYnJlYWtwb2ludC1tYXgoJG5hbWUsICRicmVha3BvaW50czogJHNjcmVlbi1icmVha3BvaW50cykge1xyXG4gICRtYXg6IG1hcC1nZXQoJGJyZWFrcG9pbnRzLCAkbmFtZSk7XHJcbiAgQHJldHVybiBpZigkbWF4IGFuZCAkbWF4ID4gMCwgJG1heCAtIC4wMiwgbnVsbCk7XHJcbn1cclxuXHJcbi8vIE1lZGlhIG9mIGF0IG1vc3QgdGhlIG1heGltdW0gYnJlYWtwb2ludCB3aWR0aC4gTm8gcXVlcnkgZm9yIHRoZSBsYXJnZXN0IGJyZWFrcG9pbnQuXHJcbi8vIE1ha2VzIHRoZSBAY29udGVudCBhcHBseSB0byB0aGUgZ2l2ZW4gYnJlYWtwb2ludCBhbmQgbmFycm93ZXIuXHJcbkBtaXhpbiBtZWRpYS1icmVha3BvaW50LWRvd24oJG5hbWUsICRicmVha3BvaW50czogJHNjcmVlbi1icmVha3BvaW50cykge1xyXG4gICRtYXg6IGJyZWFrcG9pbnQtbWF4KCRuYW1lLCAkYnJlYWtwb2ludHMpO1xyXG4gIEBpZiAkbWF4IHtcclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAkbWF4KSB7XHJcbiAgICAgIEBjb250ZW50O1xyXG4gICAgfVxyXG4gIH0gQGVsc2Uge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuLy8gVGV4dCBEaXJlY3Rpb24gLSBsdHIgLyBydGxcclxuLy9cclxuLy8gQ1NTIGRlZmF1bHRzIHRvIHVzZSB0aGUgbHRyIGNzcywgYW5kIGFkZHMgW2Rpcj1ydGxdIHNlbGVjdG9yc1xyXG4vLyB0byBvdmVycmlkZSBsdHIgZGVmYXVsdHMuXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbkBtaXhpbiBtdWx0aS1kaXIoKSB7XHJcbiAgQGNvbnRlbnQ7XHJcblxyXG4gIC8vICRyb290OiAjeyZ9O1xyXG4gIC8vIEBhdC1yb290IFtkaXJdIHtcclxuICAvLyAgICN7JHJvb3R9IHtcclxuICAvLyAgICAgQGNvbnRlbnQ7XHJcbiAgLy8gICB9XHJcbiAgLy8gfVxyXG59XHJcblxyXG5AbWl4aW4gcnRsKCkge1xyXG4gICRyb290OiAjeyZ9O1xyXG5cclxuICBAYXQtcm9vdCAje2FkZC1yb290LXNlbGVjdG9yKCRyb290LCBcIltkaXI9cnRsXVwiKX0ge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gbHRyKCkge1xyXG4gIEBjb250ZW50O1xyXG59XHJcblxyXG5cclxuLy8gU1ZHIEJhY2tncm91bmQgSW1hZ2UgTWl4aW5cclxuLy8gQHBhcmFtIHtzdHJpbmd9ICRzdmdcclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5AbWl4aW4gc3ZnLWJhY2tncm91bmQtaW1hZ2UoJHN2ZywgJGZsaXAtcnRsOiBmYWxzZSkge1xyXG4gICR1cmw6IHVybC1lbmNvZGUoJHN2Zyk7XHJcbiAgJHZpZXdCb3g6IHN0ci1zcGxpdChzdHItZXh0cmFjdCgkc3ZnLCBcInZpZXdCb3g9J1wiLCBcIidcIiksIFwiIFwiKTtcclxuXHJcbiAgQGlmICRmbGlwLXJ0bCAhPSB0cnVlIG9yICR2aWV3Qm94ID09IG51bGwge1xyXG4gICAgQGluY2x1ZGUgbXVsdGktZGlyKCkge1xyXG4gICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWw7Y2hhcnNldD11dGYtOCwjeyR1cmx9XCIpO1xyXG4gICAgfVxyXG4gIH0gQGVsc2Uge1xyXG4gICAgJHRyYW5zZm9ybTogXCJ0cmFuc2Zvcm09J3RyYW5zbGF0ZSgje250aCgkdmlld0JveCwgMyl9LCAwKSBzY2FsZSgtMSwgMSknXCI7XHJcbiAgICAkZmxpcHBlZC11cmw6ICRzdmc7XHJcbiAgICAkZmxpcHBlZC11cmw6IHN0ci1yZXBsYWNlKCRmbGlwcGVkLXVybCwgXCI8cGF0aFwiLCBcIjxwYXRoICN7JHRyYW5zZm9ybX1cIik7XHJcbiAgICAkZmxpcHBlZC11cmw6IHN0ci1yZXBsYWNlKCRmbGlwcGVkLXVybCwgXCI8bGluZVwiLCBcIjxsaW5lICN7JHRyYW5zZm9ybX1cIik7XHJcbiAgICAkZmxpcHBlZC11cmw6IHN0ci1yZXBsYWNlKCRmbGlwcGVkLXVybCwgXCI8cG9seWdvblwiLCBcIjxwb2x5Z29uICN7JHRyYW5zZm9ybX1cIik7XHJcbiAgICAkZmxpcHBlZC11cmw6IHVybC1lbmNvZGUoJGZsaXBwZWQtdXJsKTtcclxuXHJcbiAgICBAaW5jbHVkZSBsdHIgKCkge1xyXG4gICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWw7Y2hhcnNldD11dGYtOCwjeyR1cmx9XCIpO1xyXG4gICAgfVxyXG4gICAgQGluY2x1ZGUgcnRsKCkge1xyXG4gICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWw7Y2hhcnNldD11dGYtOCwjeyRmbGlwcGVkLXVybH1cIik7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4vLyBBZGQgcHJvcGVydHkgaG9yaXpvbnRhbFxyXG4vLyBAcGFyYW0ge3N0cmluZ30gJHN0YXJ0XHJcbi8vIEBwYXJhbSB7c3RyaW5nfSAkZW5kXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuQG1peGluIHByb3BlcnR5LWhvcml6b250YWwoJHByb3AsICRzdGFydCwgJGVuZDogJHN0YXJ0KSB7XHJcbiAgQGlmICRzdGFydCA9PSAwIGFuZCAkZW5kID09IDAge1xyXG4gICAgI3skcHJvcH0tbGVmdDogJHN0YXJ0O1xyXG4gICAgI3skcHJvcH0tcmlnaHQ6ICRlbmQ7XHJcblxyXG4gIH0gQGVsc2Uge1xyXG4gICAgI3skcHJvcH0tbGVmdDogJHN0YXJ0O1xyXG4gICAgI3skcHJvcH0tcmlnaHQ6ICRlbmQ7XHJcblxyXG4gICAgQGF0LXJvb3Qge1xyXG4gICAgICBAc3VwcG9ydHMgKChtYXJnaW4taW5saW5lLXN0YXJ0OiAwKSBvciAoLXdlYmtpdC1tYXJnaW4tc3RhcnQ6IDApKSB7XHJcbiAgICAgICAgJiB7XHJcbiAgICAgICAgICBAaWYgJHN0YXJ0ICE9IG51bGwge1xyXG4gICAgICAgICAgICAjeyRwcm9wfS1sZWZ0OiB1bnNldDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIEBpZiAkZW5kICE9IG51bGwge1xyXG4gICAgICAgICAgICAjeyRwcm9wfS1yaWdodDogdW5zZXQ7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLXdlYmtpdC0jeyRwcm9wfS1zdGFydDogJHN0YXJ0O1xyXG4gICAgICAgICAgI3skcHJvcH0taW5saW5lLXN0YXJ0OiAkc3RhcnQ7XHJcbiAgICAgICAgICAtd2Via2l0LSN7JHByb3B9LWVuZDogJGVuZDtcclxuICAgICAgICAgICN7JHByb3B9LWlubGluZS1lbmQ6ICRlbmQ7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4vLyBBZGQgcHJvcGVydHkgZm9yIGFsbCBkaXJlY3Rpb25zXHJcbi8vIEBwYXJhbSB7c3RyaW5nfSAkcHJvcFxyXG4vLyBAcGFyYW0ge3N0cmluZ30gJHRvcFxyXG4vLyBAcGFyYW0ge3N0cmluZ30gJGVuZFxyXG4vLyBAcGFyYW0ge3N0cmluZ30gJGJvdHRvbVxyXG4vLyBAcGFyYW0ge3N0cmluZ30gJHN0YXJ0XHJcbi8vIEBwYXJhbSB7Ym9vbGVhbn0gJGNvbnRlbnQgaW5jbHVkZSBjb250ZW50IG9yIHVzZSBkZWZhdWx0XHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuQG1peGluIHByb3BlcnR5KCRwcm9wLCAkdG9wLCAkZW5kOiAkdG9wLCAkYm90dG9tOiAkdG9wLCAkc3RhcnQ6ICRlbmQpIHtcclxuICBAaW5jbHVkZSBwcm9wZXJ0eS1ob3Jpem9udGFsKCRwcm9wLCAkc3RhcnQsICRlbmQpO1xyXG4gICN7JHByb3B9LXRvcDogJHRvcDtcclxuICAjeyRwcm9wfS1ib3R0b206ICRib3R0b207XHJcbn1cclxuXHJcbi8vIEFkZCBwYWRkaW5nIGhvcml6b250YWxcclxuLy8gQHBhcmFtIHtzdHJpbmd9ICRzdGFydFxyXG4vLyBAcGFyYW0ge3N0cmluZ30gJGVuZFxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbkBtaXhpbiBwYWRkaW5nLWhvcml6b250YWwoJHN0YXJ0LCAkZW5kOiAkc3RhcnQpIHtcclxuICBAaW5jbHVkZSBwcm9wZXJ0eS1ob3Jpem9udGFsKHBhZGRpbmcsICRzdGFydCwgJGVuZCk7XHJcbn1cclxuXHJcbi8vIEFkZCBwYWRkaW5nIGZvciBhbGwgZGlyZWN0aW9uc1xyXG4vLyBAcGFyYW0ge3N0cmluZ30gJHRvcFxyXG4vLyBAcGFyYW0ge3N0cmluZ30gJGVuZFxyXG4vLyBAcGFyYW0ge3N0cmluZ30gJGJvdHRvbVxyXG4vLyBAcGFyYW0ge3N0cmluZ30gJHN0YXJ0XHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuQG1peGluIHBhZGRpbmcoJHRvcCwgJGVuZDogJHRvcCwgJGJvdHRvbTogJHRvcCwgJHN0YXJ0OiAkZW5kKSB7XHJcbiAgQGluY2x1ZGUgcHJvcGVydHkocGFkZGluZywgJHRvcCwgJGVuZCwgJGJvdHRvbSwgJHN0YXJ0KTtcclxufVxyXG5cclxuLy8gQWRkIG1hcmdpbiBob3Jpem9udGFsXHJcbi8vIEBwYXJhbSB7c3RyaW5nfSAkc3RhcnRcclxuLy8gQHBhcmFtIHtzdHJpbmd9ICRlbmRcclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5AbWl4aW4gbWFyZ2luLWhvcml6b250YWwoJHN0YXJ0LCAkZW5kOiAkc3RhcnQpIHtcclxuICBAaW5jbHVkZSBwcm9wZXJ0eS1ob3Jpem9udGFsKG1hcmdpbiwgJHN0YXJ0LCAkZW5kKTtcclxufVxyXG5cclxuLy8gQWRkIG1hcmdpbiBmb3IgYWxsIGRpcmVjdGlvbnNcclxuLy8gQHBhcmFtIHtzdHJpbmd9ICR0b3BcclxuLy8gQHBhcmFtIHtzdHJpbmd9ICRlbmRcclxuLy8gQHBhcmFtIHtzdHJpbmd9ICRib3R0b21cclxuLy8gQHBhcmFtIHtzdHJpbmd9ICRzdGFydFxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbkBtaXhpbiBtYXJnaW4oJHRvcCwgJGVuZDogJHRvcCwgJGJvdHRvbTogJHRvcCwgJHN0YXJ0OiAkZW5kKSB7XHJcbiAgQGluY2x1ZGUgcHJvcGVydHkobWFyZ2luLCAkdG9wLCAkZW5kLCAkYm90dG9tLCAkc3RhcnQpO1xyXG59XHJcblxyXG4vLyBBZGQgcG9zaXRpb24gaG9yaXpvbnRhbFxyXG4vLyBAcGFyYW0ge3N0cmluZ30gJHN0YXJ0IC0gYW1vdW50IHRvIHBvc2l0aW9uIHN0YXJ0XHJcbi8vIEBwYXJhbSB7c3RyaW5nfSAkZW5kIC0gYW1vdW50IHRvIGxlZnQ6IDA7IGVuZFxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbkBtaXhpbiBwb3NpdGlvbi1ob3Jpem9udGFsKCRzdGFydDogbnVsbCwgJGVuZDogbnVsbCkge1xyXG4gIEBpZiAkc3RhcnQgPT0gJGVuZCB7XHJcbiAgICBAaW5jbHVkZSBtdWx0aS1kaXIoKSB7XHJcbiAgICAgIGxlZnQ6ICRzdGFydDtcclxuICAgICAgcmlnaHQ6ICRlbmQ7XHJcbiAgICB9XHJcbiAgfSBAZWxzZSB7XHJcbiAgICBAaW5jbHVkZSBsdHIoKSB7XHJcbiAgICAgIGxlZnQ6ICRzdGFydDtcclxuICAgICAgcmlnaHQ6ICRlbmQ7XHJcbiAgICB9XHJcbiAgICBAaW5jbHVkZSBydGwoKSB7XHJcbiAgICAgIGxlZnQ6IHVuc2V0O1xyXG4gICAgICByaWdodDogdW5zZXQ7XHJcblxyXG4gICAgICBsZWZ0OiAkZW5kO1xyXG4gICAgICByaWdodDogJHN0YXJ0O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLy8gQWRkIHBvc2l0aW9uIGZvciBhbGwgZGlyZWN0aW9uc1xyXG4vLyBAcGFyYW0ge3N0cmluZ30gJHRvcFxyXG4vLyBAcGFyYW0ge3N0cmluZ30gJGVuZFxyXG4vLyBAcGFyYW0ge3N0cmluZ30gJGJvdHRvbVxyXG4vLyBAcGFyYW0ge3N0cmluZ30gJHN0YXJ0XHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuQG1peGluIHBvc2l0aW9uKCR0b3A6IG51bGwsICRlbmQ6IG51bGwsICRib3R0b206IG51bGwsICRzdGFydDogbnVsbCkge1xyXG4gIEBpbmNsdWRlIHBvc2l0aW9uLWhvcml6b250YWwoJHN0YXJ0LCAkZW5kKTtcclxuICB0b3A6ICR0b3A7XHJcbiAgYm90dG9tOiAkYm90dG9tO1xyXG59XHJcblxyXG4vLyBBZGQgYm9yZGVyIGZvciBhbGwgZGlyZWN0aW9uc1xyXG4vLyBAcGFyYW0ge3N0cmluZ30gJHRvcFxyXG4vLyBAcGFyYW0ge3N0cmluZ30gJGVuZFxyXG4vLyBAcGFyYW0ge3N0cmluZ30gJGJvdHRvbVxyXG4vLyBAcGFyYW0ge3N0cmluZ30gJHN0YXJ0XHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuQG1peGluIGJvcmRlcigkdG9wLCAkZW5kOiAkdG9wLCAkYm90dG9tOiAkdG9wLCAkc3RhcnQ6ICRlbmQpIHtcclxuICBAaW5jbHVkZSBwcm9wZXJ0eShib3JkZXIsICR0b3AsICRlbmQsICRib3R0b20sICRzdGFydCk7XHJcbn1cclxuXHJcbi8vIEFkZCBib3JkZXIgcmFkaXVzIGZvciBhbGwgZGlyZWN0aW9uc1xyXG4vLyBAcGFyYW0ge3N0cmluZ30gJHRvcC1zdGFydFxyXG4vLyBAcGFyYW0ge3N0cmluZ30gJHRvcC1lbmRcclxuLy8gQHBhcmFtIHtzdHJpbmd9ICRib3R0b20tZW5kXHJcbi8vIEBwYXJhbSB7c3RyaW5nfSAkYm90dG9tLXN0YXJ0XHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuQG1peGluIGJvcmRlci1yYWRpdXMoJHRvcC1zdGFydCwgJHRvcC1lbmQ6ICR0b3Atc3RhcnQsICRib3R0b20tZW5kOiAkdG9wLXN0YXJ0LCAkYm90dG9tLXN0YXJ0OiAkdG9wLWVuZCkge1xyXG4gIEBpZiAkdG9wLXN0YXJ0ID09ICR0b3AtZW5kIGFuZCAkdG9wLXN0YXJ0ID09ICRib3R0b20tZW5kIGFuZCAkdG9wLXN0YXJ0ID09ICRib3R0b20tc3RhcnQge1xyXG4gICAgQGluY2x1ZGUgbXVsdGktZGlyKCkge1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAkdG9wLXN0YXJ0O1xyXG4gICAgfVxyXG4gIH0gQGVsc2Uge1xyXG4gICAgQGluY2x1ZGUgbHRyKCkge1xyXG4gICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAkdG9wLXN0YXJ0O1xyXG4gICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogJHRvcC1lbmQ7XHJcbiAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAkYm90dG9tLWVuZDtcclxuICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogJGJvdHRvbS1zdGFydDtcclxuICAgIH1cclxuXHJcbiAgICBAaW5jbHVkZSBydGwoKSB7XHJcbiAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6ICR0b3AtZW5kO1xyXG4gICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogJHRvcC1zdGFydDtcclxuICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6ICRib3R0b20tc3RhcnQ7XHJcbiAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6ICRib3R0b20tZW5kO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLy8gQWRkIGRpcmVjdGlvbiBmb3IgYWxsIGRpcmVjdGlvbnNcclxuLy8gQHBhcmFtIHtzdHJpbmd9ICRkaXIgLSBEaXJlY3Rpb24gb24gTFRSXHJcbkBtaXhpbiBkaXJlY3Rpb24oJGRpcikge1xyXG4gICRvdGhlci1kaXI6IG51bGw7XHJcblxyXG4gIEBpZiAkZGlyID09IGx0ciB7XHJcbiAgICAkb3RoZXItZGlyOiBydGw7XHJcbiAgfSBAZWxzZSB7XHJcbiAgICAkb3RoZXItZGlyOiBsdHI7XHJcbiAgfVxyXG5cclxuICBAaW5jbHVkZSBsdHIoKSB7XHJcbiAgICBkaXJlY3Rpb246ICRkaXI7XHJcbiAgfVxyXG4gIEBpbmNsdWRlIHJ0bCgpIHtcclxuICAgIGRpcmVjdGlvbjogJG90aGVyLWRpcjtcclxuICB9XHJcbn1cclxuXHJcbi8vIEFkZCBmbG9hdCBmb3IgYWxsIGRpcmVjdGlvbnNcclxuLy8gQHBhcmFtIHtzdHJpbmd9ICRzaWRlXHJcbi8vIEBwYXJhbSB7c3RyaW5nfSAkZGVjb3JhdG9yIC0gIWltcG9ydGFudFxyXG5AbWl4aW4gZmxvYXQoJHNpZGUsICRkZWNvcmF0b3I6IG51bGwpIHtcclxuICBAaWYgJHNpZGUgPT0gc3RhcnQge1xyXG4gICAgQGluY2x1ZGUgbHRyKCkge1xyXG4gICAgICBmbG9hdDogbGVmdCAkZGVjb3JhdG9yO1xyXG4gICAgfVxyXG4gICAgQGluY2x1ZGUgcnRsKCkge1xyXG4gICAgICBmbG9hdDogcmlnaHQgJGRlY29yYXRvcjtcclxuICAgIH1cclxuICB9IEBlbHNlIGlmICRzaWRlID09IGVuZCB7XHJcbiAgICBAaW5jbHVkZSBsdHIoKSB7XHJcbiAgICAgIGZsb2F0OiByaWdodCAkZGVjb3JhdG9yO1xyXG4gICAgfVxyXG4gICAgQGluY2x1ZGUgcnRsKCkge1xyXG4gICAgICBmbG9hdDogbGVmdCAkZGVjb3JhdG9yO1xyXG4gICAgfVxyXG4gIH0gQGVsc2Uge1xyXG4gICAgQGluY2x1ZGUgbXVsdGktZGlyKCkge1xyXG4gICAgICBmbG9hdDogJHNpZGUgJGRlY29yYXRvcjtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBiYWNrZ3JvdW5kLXBvc2l0aW9uKCRob3Jpem9udGFsLCAkaG9yaXpvbnRhbC1hbW91bnQ6IG51bGwsICR2ZXJ0aWNhbDogbnVsbCwgJHZlcnRpY2FsLWFtb3VudDogbnVsbCkge1xyXG4gIEBpZiAkaG9yaXpvbnRhbCA9PSBzdGFydCBvciAkaG9yaXpvbnRhbCA9PSBlbmQge1xyXG4gICAgJGhvcml6b250YWwtbHRyOiBudWxsO1xyXG4gICAgJGhvcml6b250YWwtcnRsOiBudWxsO1xyXG4gICAgQGlmICRob3Jpem9udGFsID09IHN0YXJ0IHtcclxuICAgICAgJGhvcml6b250YWwtbHRyOiBsZWZ0O1xyXG4gICAgICAkaG9yaXpvbnRhbC1ydGw6IHJpZ2h0O1xyXG4gICAgfSBAZWxzZSB7XHJcbiAgICAgICRob3Jpem9udGFsLWx0cjogcmlnaHQ7XHJcbiAgICAgICRob3Jpem9udGFsLXJ0bDogbGVmdDtcclxuICAgIH1cclxuXHJcbiAgICBAaW5jbHVkZSBsdHIoKSB7XHJcbiAgICAgIGJhY2tncm91bmQtcG9zaXRpb246ICRob3Jpem9udGFsLWx0ciAkaG9yaXpvbnRhbC1hbW91bnQgJHZlcnRpY2FsICR2ZXJ0aWNhbC1hbW91bnQ7XHJcbiAgICB9XHJcbiAgICBAaW5jbHVkZSBydGwoKSB7XHJcbiAgICAgIGJhY2tncm91bmQtcG9zaXRpb246ICRob3Jpem9udGFsLXJ0bCAkaG9yaXpvbnRhbC1hbW91bnQgJHZlcnRpY2FsICR2ZXJ0aWNhbC1hbW91bnQ7XHJcbiAgICB9XHJcbiAgfSBAZWxzZSB7XHJcbiAgICBAaW5jbHVkZSBtdWx0aS1kaXIoKSB7XHJcbiAgICAgIGJhY2tncm91bmQtcG9zaXRpb246ICRob3Jpem9udGFsICRob3Jpem9udGFsLWFtb3VudCAkdmVydGljYWwgJHZlcnRpY2FsLWFtb3VudDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiB0cmFuc2Zvcm0tb3JpZ2luKCR4LWF4aXMsICR5LWF4aXM6IG51bGwpIHtcclxuICBAaWYgJHgtYXhpcyA9PSBzdGFydCB7XHJcbiAgICBAaW5jbHVkZSBsdHIoKSB7XHJcbiAgICAgIHRyYW5zZm9ybS1vcmlnaW46IGxlZnQgJHktYXhpcztcclxuICAgIH1cclxuICAgIEBpbmNsdWRlIHJ0bCgpIHtcclxuICAgICAgdHJhbnNmb3JtLW9yaWdpbjogcmlnaHQgJHktYXhpcztcclxuICAgIH1cclxuICB9IEBlbHNlIGlmICR4LWF4aXMgPT0gZW5kIHtcclxuICAgIEBpbmNsdWRlIGx0cigpIHtcclxuICAgICAgdHJhbnNmb3JtLW9yaWdpbjogcmlnaHQgJHktYXhpcztcclxuICAgIH1cclxuICAgIEBpbmNsdWRlIHJ0bCgpIHtcclxuICAgICAgdHJhbnNmb3JtLW9yaWdpbjogbGVmdCAkeS1heGlzO1xyXG4gICAgfVxyXG4gIH0gQGVsc2UgaWYgJHgtYXhpcyA9PSBsZWZ0IG9yICR4LWF4aXMgPT0gcmlnaHQge1xyXG4gICAgQGluY2x1ZGUgbXVsdGktZGlyKCkge1xyXG4gICAgICB0cmFuc2Zvcm0tb3JpZ2luOiAkeC1heGlzICR5LWF4aXM7XHJcbiAgICB9XHJcbiAgfSBAZWxzZSB7XHJcbiAgICBAaW5jbHVkZSBsdHIoKSB7XHJcbiAgICAgIHRyYW5zZm9ybS1vcmlnaW46ICR4LWF4aXMgJHktYXhpcztcclxuICAgIH1cclxuICAgIEBpbmNsdWRlIHJ0bCgpIHtcclxuICAgICAgdHJhbnNmb3JtLW9yaWdpbjogY2FsYygxMDAlIC0gI3skeC1heGlzfSkgJHktYXhpcztcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8vIEFkZCB0cmFuc2Zvcm0gZm9yIGFsbCBkaXJlY3Rpb25zXHJcbi8vIEBwYXJhbSB7c3RyaW5nfSAkdHJhbnNmb3JtcyAtIGNvbW1hIHNlcGFyYXRlZCBsaXN0IG9mIHRyYW5zZm9ybXNcclxuQG1peGluIHRyYW5zZm9ybSgkdHJhbnNmb3Jtcy4uLikge1xyXG4gICRleHRyYTogbnVsbDtcclxuXHJcbiAgJHg6IG51bGw7XHJcbiAgJGx0ci10cmFuc2xhdGU6IG51bGw7XHJcbiAgJHJ0bC10cmFuc2xhdGU6IG51bGw7XHJcblxyXG4gIEBlYWNoICR0cmFuc2Zvcm0gaW4gJHRyYW5zZm9ybXMge1xyXG4gICAgQGlmIChzdHItaW5kZXgoJHRyYW5zZm9ybSwgdHJhbnNsYXRlM2QpKSB7XHJcbiAgICAgICR0cmFuc2Zvcm06IHN0ci1yZXBsYWNlKCR0cmFuc2Zvcm0sICd0cmFuc2xhdGUzZCgnKTtcclxuICAgICAgJHRyYW5zZm9ybTogc3RyLXJlcGxhY2UoJHRyYW5zZm9ybSwgJyknKTtcclxuXHJcbiAgICAgICRjb29yZGluYXRlczogc3RyLXNwbGl0KCR0cmFuc2Zvcm0sICcsJyk7XHJcblxyXG4gICAgICAkeDogbnRoKCRjb29yZGluYXRlcywgMSk7XHJcbiAgICAgICR5OiBudGgoJGNvb3JkaW5hdGVzLCAyKTtcclxuICAgICAgJHo6IG50aCgkY29vcmRpbmF0ZXMsIDMpO1xyXG5cclxuICAgICAgJGx0ci10cmFuc2xhdGU6IHRyYW5zbGF0ZTNkKCR4LCAkeSwgJHopO1xyXG4gICAgICAkcnRsLXRyYW5zbGF0ZTogdHJhbnNsYXRlM2QoY2FsYygtMSAqICN7JHh9KSwgJHksICR6KTtcclxuICAgIH0gQGVsc2Uge1xyXG4gICAgICBAaWYgJGV4dHJhID09IG51bGwge1xyXG4gICAgICAgICRleHRyYTogJHRyYW5zZm9ybTtcclxuICAgICAgfSBAZWxzZSB7XHJcbiAgICAgICAgJGV4dHJhOiAkZXh0cmEgJHRyYW5zZm9ybTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgQGlmICR4ID09ICcwJyBvciAkeCA9PSBudWxsIHtcclxuICAgIEBpbmNsdWRlIG11bHRpLWRpcigpIHtcclxuICAgICAgdHJhbnNmb3JtOiAkbHRyLXRyYW5zbGF0ZSAkZXh0cmE7XHJcbiAgICB9XHJcbiAgfSBAZWxzZSB7XHJcbiAgICBAaW5jbHVkZSBsdHIoKSB7XHJcbiAgICAgIHRyYW5zZm9ybTogJGx0ci10cmFuc2xhdGUgJGV4dHJhO1xyXG4gICAgfVxyXG5cclxuICAgIEBpbmNsdWRlIHJ0bCgpIHtcclxuICAgICAgdHJhbnNmb3JtOiAkcnRsLXRyYW5zbGF0ZSAkZXh0cmE7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIi8qKlxyXG4gKiBJbXBvcnRlZCBpb25pYyBtaXhpbnMgZm9yIFNDU1MgZnJvbSBkaWZmZXJlbnQgY29tcG9uZW50c1xyXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAqIEV4dHJhY3RlZCBmcm9tXHJcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9pb25pYy10ZWFtL2lvbmljLWZyYW1ld29yay9ibG9iL21hc3Rlci9jb3JlL3NyYy9jb21wb25lbnRzL2dyaWQvZ3JpZC5taXhpbnMuc2Nzc1xyXG4gKiBodHRwczovL2dpdGh1Yi5jb20vaW9uaWMtdGVhbS9pb25pYy1mcmFtZXdvcmsvYmxvYi9tYXN0ZXIvY29yZS9zcmMvY29tcG9uZW50cy9pdGVtL2l0ZW0ubWl4aW5zLnNjc3NcclxuICovXHJcblxyXG4vLyBSZXNwb25zaXZlIE1peGluc1xyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuXHJcbi8vIENyZWF0ZXMgYSBmaXhlZCB3aWR0aCBmb3IgdGhlIGdyaWQgYmFzZWQgb24gdGhlIHNjcmVlbiBzaXplXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuQG1peGluIG1ha2UtZ3JpZC13aWR0aHMoJHdpZHRoczogJGdyaWQtd2lkdGhzLCAkYnJlYWtwb2ludHM6ICRzY3JlZW4tYnJlYWtwb2ludHMpIHtcclxuICBAZWFjaCAkYnJlYWtwb2ludCwgJHdpZHRoIGluICR3aWR0aHMge1xyXG4gICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC11cCgkYnJlYWtwb2ludCwgJGJyZWFrcG9pbnRzKSB7XHJcbiAgICAgIHdpZHRoOiAkd2lkdGg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBtYXgtd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcblxyXG4vLyBBZGRzIHBhZGRpbmcgdG8gdGhlIGVsZW1lbnQgYmFzZWQgb24gYnJlYWtwb2ludHNcclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5AbWl4aW4gbWFrZS1icmVha3BvaW50LXBhZGRpbmcoJHBhZGRpbmdzKSB7XHJcbiAgQGVhY2ggJGJyZWFrcG9pbnQgaW4gbWFwLWtleXMoJHBhZGRpbmdzKSB7XHJcbiAgICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LXVwKCRicmVha3BvaW50KSB7XHJcbiAgICAgICRwYWRkaW5nOiBtYXAtZ2V0KCRwYWRkaW5ncywgJGJyZWFrcG9pbnQpO1xyXG5cclxuICAgICAgQGluY2x1ZGUgcGFkZGluZygkcGFkZGluZyk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5cclxuLy8gSXRlbSBNaXhpbnNcclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbkBtaXhpbiBpdGVtLXB1c2gtc3ZnLXVybCgkZmlsbCkge1xyXG4gICRpdGVtLWRldGFpbC1wdXNoLXN2ZzogXCI8c3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDEyIDIwJz48cGF0aCBkPSdNMiwyMGwtMi0ybDgtOEwwLDJsMi0ybDEwLDEwTDIsMjB6JyBmaWxsPScjeyRmaWxsfScvPjwvc3ZnPlwiO1xyXG5cclxuICBAaW5jbHVkZSBzdmctYmFja2dyb3VuZC1pbWFnZSgkaXRlbS1kZXRhaWwtcHVzaC1zdmcsIHRydWUpO1xyXG59XHJcbiIsIkB1c2UgXCJzYXNzOm1hdGhcIiBhcyBtYXRoO1xyXG5cclxuLyoqXHJcbiAqIEFwcCBjdXN0b20gbWl4aW5zIGZvciBTQ1NTXHJcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICogUGxhY2UgaGVyZSBvdXIgY3VzdG9tIG1peGlucy5cclxuICovXHJcblxyXG4vLyBNaXhlcyBhIGNvbG9yIHdpdGggYmxhY2sgdG8gY3JlYXRlIGl0cyBzaGFkZS5cclxuLy8gRGVmYXVsdCB0byBib290c3RyYXAgbGV2ZWwgNi5cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuQGZ1bmN0aW9uIGdldC1jb2xvci1zaGFkZS1wZXJjZW50KCRjb2xvciwgJHBlcmNlbnQ6IDQ4JSkge1xyXG4gICAgQHJldHVybiBtaXgoIzAwMCwgJGNvbG9yLCAkcGVyY2VudCk7XHJcbiAgfVxyXG5cclxuICAvLyBNaXhlcyBhIGNvbG9yIHdpdGggd2hpdGUgdG8gY3JlYXRlIGl0cyB0aW50LlxyXG4gIC8vIERlZmF1bHQgdG8gYm9vdHN0cmFwIGxldmVsIC0xMC5cclxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gIEBmdW5jdGlvbiBnZXQtY29sb3ItdGludC1wZXJjZW50KCRjb2xvciwgJHBlcmNlbnQ6IDgwJSkge1xyXG4gICAgQHJldHVybiBtaXgoI2ZmZiwgJGNvbG9yLCAkcGVyY2VudCk7XHJcbiAgfVxyXG5cclxuICAvLyBJb25pYyBDb2xvcnNcclxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gIC8vIEdlbmVyYXRlcyB0aGUgY29sb3IgY2xhc3NlcyBhbmQgdmFyaWFibGVzIGJhc2VkIG9uIHRoZVxyXG4gIC8vIGNvbG9ycyBtYXBcclxuXHJcbiAgQG1peGluIGdlbmVyYXRlLWNvbG9yKCRjb2xvci1uYW1lLCAkY29sb3JzLCAkdGhlbWUpIHtcclxuICAgICAgJGNvbG9yLXRoZW1lczogbWFwLWdldCgkY29sb3JzLCAkY29sb3ItbmFtZSk7XHJcbiAgICAgICRiYXNlOiBtYXAtZ2V0KCRjb2xvci10aGVtZXMsICR0aGVtZSk7XHJcblxyXG4gICAgICBAaWYgJHRoZW1lID09ICdkYXJrJyB7XHJcbiAgICAgICAgICAkYmFzZTogbWl4KG1hcC1nZXQoJGNvbG9yLXRoZW1lcywgJ2xpZ2h0JyksIHdoaXRlLCA4MCUpICFkZWZhdWx0O1xyXG4gICAgICB9XHJcblxyXG4gICAgICBAaW5jbHVkZSBnZW5lcmF0ZS1jb2xvci12YXJpYW50cygkY29sb3ItbmFtZSwgJGJhc2UpO1xyXG4gIH1cclxuXHJcbiAgQG1peGluIGdlbmVyYXRlLWNvbG9yLXZhcmlhbnRzKCRjb2xvci1uYW1lLCAkYmFzZSkge1xyXG4gICAgICAkY29udHJhc3Q6IGdldF9jb250cmFzdF9jb2xvcigkYmFzZSk7XHJcbiAgICAgICRzaGFkZTogZ2V0LWNvbG9yLXNoYWRlLXBlcmNlbnQoJGJhc2UpO1xyXG4gICAgICAkdGludDogZ2V0LWNvbG9yLXRpbnQtcGVyY2VudCgkYmFzZSk7XHJcblxyXG4gICAgICAtLSN7JGNvbG9yLW5hbWV9OiAjeyRiYXNlfTtcclxuICAgICAgLS0jeyRjb2xvci1uYW1lfS1zaGFkZTogI3skc2hhZGV9O1xyXG4gICAgICAtLSN7JGNvbG9yLW5hbWV9LXRpbnQ6ICN7JHRpbnR9O1xyXG4gICAgICAtLSN7JGNvbG9yLW5hbWV9LWNvbnRyYXN0OiAjeyRjb250cmFzdH07XHJcblxyXG4gICAgICAvLyBJbnRlcm5hbCBpb25pYyB1c2Ugb25seS5cclxuICAgICAgLS1pb24tY29sb3ItI3skY29sb3ItbmFtZX06IHZhcigtLSN7JGNvbG9yLW5hbWV9KTtcclxuICAgICAgLS1pb24tY29sb3ItI3skY29sb3ItbmFtZX0tYmFzZTogdmFyKC0taW9uLWNvbG9yLSN7JGNvbG9yLW5hbWV9KTtcclxuICAgICAgLS1pb24tY29sb3ItI3skY29sb3ItbmFtZX0tcmdiOiAje2NvbG9yLXRvLXJnYi1saXN0KCRiYXNlKX07XHJcbiAgICAgIC0taW9uLWNvbG9yLSN7JGNvbG9yLW5hbWV9LWNvbnRyYXN0OiAjeyRjb250cmFzdH07XHJcbiAgICAgIC0taW9uLWNvbG9yLSN7JGNvbG9yLW5hbWV9LWNvbnRyYXN0LXJnYjogI3tjb2xvci10by1yZ2ItbGlzdCgkY29udHJhc3QpfTtcclxuICAgICAgLS1pb24tY29sb3ItI3skY29sb3ItbmFtZX0tc2hhZGU6ICN7JHNoYWRlfTtcclxuICAgICAgLS1pb24tY29sb3ItI3skY29sb3ItbmFtZX0tdGludDogI3skdGludH07XHJcblxyXG4gICAgICAuaW9uLWNvbG9yLSN7JGNvbG9yLW5hbWV9IHtcclxuICAgICAgICAgIC0taW9uLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItI3skY29sb3ItbmFtZX0pO1xyXG4gICAgICAgICAgLS1pb24tY29sb3ItYmFzZTogdmFyKC0taW9uLWNvbG9yLSN7JGNvbG9yLW5hbWV9LWJhc2UpO1xyXG4gICAgICAgICAgLS1pb24tY29sb3ItcmdiOiB2YXIoLS1pb24tY29sb3ItI3skY29sb3ItbmFtZX0tcmdiKTtcclxuICAgICAgICAgIC0taW9uLWNvbG9yLWNvbnRyYXN0OiB2YXIoLS1pb24tY29sb3ItI3skY29sb3ItbmFtZX0tY29udHJhc3QpO1xyXG4gICAgICAgICAgLS1pb24tY29sb3ItY29udHJhc3QtcmdiOiB2YXIoLS1pb24tY29sb3ItI3skY29sb3ItbmFtZX0tY29udHJhc3QtcmdiKTtcclxuICAgICAgICAgIC0taW9uLWNvbG9yLXNoYWRlOiB2YXIoLS1pb24tY29sb3ItI3skY29sb3ItbmFtZX0tc2hhZGUpO1xyXG4gICAgICAgICAgLS1pb24tY29sb3ItdGludDogdmFyKC0taW9uLWNvbG9yLSN7JGNvbG9yLW5hbWV9LXRpbnQpO1xyXG4gICAgICB9XHJcbiAgfVxyXG5cclxuXHJcbiBAbWl4aW4gY29yZS1mb2N1cygpIHtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAmOjphZnRlciB7XHJcbiAgICAgICAgQGluY2x1ZGUgcG9zaXRpb24oMCwgMCwgMCwgMCk7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICB6LWluZGV4OiAxO1xyXG4gICAgICAgIEBpbmNsdWRlIGNvcmUtZm9jdXMtc3R5bGUoKTtcclxuICAgIH1cclxuIH1cclxuXHJcbiBAbWl4aW4gY29yZS1mb2N1cy1zdHlsZSgpIHtcclxuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMCB2YXIoLS1hMTF5LWZvY3VzLXdpZHRoKSAxcHggdmFyKC0tYTExeS1mb2N1cy1jb2xvcik7XHJcbiAgICAvLyBUaGlja2VyIG9wdGlvbjpcclxuICAgIC8vIGJvcmRlcjogdmFyKC0tYTExeS1mb2N1cy13aWR0aCkgc29saWQgdmFyKC0tYTExeS1mb2N1cy1jb2xvcik7XHJcbn1cclxuXHJcbkBtaXhpbiBjb3JlLXRyYW5zaXRpb24oJHByb3BlcnRpZXM6IGFsbCwgJGR1cmF0aW9uOiA1MDBtcywgJHRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQpIHtcclxuICAgICR0cmFuc2l0aW9uczogKCk7XHJcbiAgICBAZWFjaCAkcHJvcGVydHkgaW4gJHByb3BlcnRpZXMge1xyXG4gICAgICAkdHJhbnNpdGlvbnM6IGFwcGVuZCgkdHJhbnNpdGlvbnMsICRwcm9wZXJ0eSAkZHVyYXRpb24gJHRpbWluZy1mdW5jdGlvbiwgY29tbWEpO1xyXG4gICAgfVxyXG5cclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogJHRyYW5zaXRpb25zO1xyXG4gICAgdHJhbnNpdGlvbjogJHRyYW5zaXRpb25zO1xyXG59XHJcblxyXG4vKipcclxuICogU2FtZSBhcyBpdGVtLXB1c2gtc3ZnLXVybCBidXQgYWRtaXRzIGZsaXAtcnRsXHJcbiAqL1xyXG5AbWl4aW4gcHVzaC1hcnJvdy1jb2xvcigkZmlsbDogNjI2MjYyLCAkZmxpcC1ydGw6IGZhbHNlKSB7XHJcbiAgICAkaXRlbS1kZXRhaWwtcHVzaC1zdmc6IFwiPHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCAxMiAyMCc+PHBhdGggZD0nTTIsMjBsLTItMmw4LThMMCwybDItMmwxMCwxMEwyLDIweicgZmlsbD0nI3skZmlsbH0nLz48L3N2Zz5cIjtcclxuXHJcbiAgICBAaW5jbHVkZSBzdmctYmFja2dyb3VuZC1pbWFnZSgkaXRlbS1kZXRhaWwtcHVzaC1zdmcsICRmbGlwLXJ0bCk7XHJcbn1cclxuXHJcbkBtaXhpbiBib3JkZXItc3RhcnQoJHB4LCAkdHlwZTogbnVsbCwgJGNvbG9yOiBudWxsKSB7XHJcbiAgICBAaW5jbHVkZSBwcm9wZXJ0eS1ob3Jpem9udGFsKGJvcmRlciwgJHB4ICR0eXBlICRjb2xvciwgbnVsbCk7XHJcbn1cclxuXHJcbkBtaXhpbiBib3JkZXItZW5kKCRweCwgJHR5cGU6IG51bGwsICRjb2xvcjogbnVsbCkge1xyXG4gICAgQGluY2x1ZGUgcHJvcGVydHktaG9yaXpvbnRhbChib3JkZXIsIG51bGwsICRweCAkdHlwZSAkY29sb3IpO1xyXG59XHJcblxyXG5AbWl4aW4gc2FmZS1hcmVhLWJvcmRlci1zdGFydCgkcHgsICR0eXBlLCAkY29sb3IpIHtcclxuICAgICRzYWZlLWFyZWEtcG9zaXRpb246IGNhbGModmFyKC0taW9uLXNhZmUtYXJlYS1sZWZ0KSArICN7JHB4fSk7XHJcblxyXG4gICAgQGluY2x1ZGUgYm9yZGVyLXN0YXJ0KCRzYWZlLWFyZWEtcG9zaXRpb24sICR0eXBlLCAkY29sb3IpO1xyXG59XHJcblxyXG5AbWl4aW4gc2FmZS1hcmVhLWJvcmRlci1lbmQoJHB4LCAkdHlwZSwgJGNvbG9yKSB7XHJcbiAgICAkc2FmZS1hcmVhLXBvc2l0aW9uOiBjYWxjKHZhcigtLWlvbi1zYWZlLWFyZWEtcmlnaHQpICsgI3skcHh9KTtcclxuXHJcbiAgICBAaW5jbHVkZSBib3JkZXItZW5kKCRzYWZlLWFyZWEtcG9zaXRpb24sICR0eXBlLCAkY29sb3IpO1xyXG59XHJcblxyXG5AbWl4aW4gc2FmZS1hcmVhLW1hcmdpbi1ob3Jpem9udGFsKCRzdGFydCwgJGVuZDogJHN0YXJ0KSB7XHJcbiAgICAkc2FmZS1hcmVhLWVuZDogbnVsbDtcclxuICAgICRzYWZlLWFyZWEtc3RhcnQ6IG51bGw7XHJcblxyXG4gICAgQGlmICgkZW5kKSB7XHJcbiAgICAgICAgJHNhZmUtYXJlYS1lbmQ6IGNhbGModmFyKC0taW9uLXNhZmUtYXJlYS1yaWdodCkgKyAjeyRlbmR9KTtcclxuICAgIH1cclxuICAgIEBpZiAoJHN0YXJ0KSB7XHJcbiAgICAgICAgJHNhZmUtYXJlYS1zdGFydDogY2FsYyh2YXIoLS1pb24tc2FmZS1hcmVhLWxlZnQpICsgI3skc3RhcnR9KTtcclxuICAgIH1cclxuXHJcbiAgICBAaW5jbHVkZSBtYXJnaW4taG9yaXpvbnRhbCgkc2FmZS1hcmVhLXN0YXJ0LCAkc2FmZS1hcmVhLWVuZCk7XHJcbn1cclxuXHJcbkBtaXhpbiBzYWZlLWFyZWEtbWFyZ2luLXN0YXJ0KCRzdGFydCwgJGVuZCkge1xyXG4gICAgJHNhZmUtYXJlYS1zdGFydDogY2FsYyh2YXIoLS1pb24tc2FmZS1hcmVhLWxlZnQpICsgI3skc3RhcnR9KTtcclxuXHJcbiAgICBAaW5jbHVkZSBtYXJnaW4taG9yaXpvbnRhbCgkc2FmZS1hcmVhLXN0YXJ0LCAkZW5kKTtcclxufVxyXG5cclxuQG1peGluIHNhZmUtYXJlYS1tYXJnaW4tZW5kKCRzdGFydCwgJGVuZCkge1xyXG4gICAgJHNhZmUtYXJlYS1lbmQ6IGNhbGModmFyKC0taW9uLXNhZmUtYXJlYS1yaWdodCkgKyAjeyRlbmR9KTtcclxuXHJcbiAgICBAaW5jbHVkZSBtYXJnaW4taG9yaXpvbnRhbCgkc3RhcnQsICRzYWZlLWFyZWEtZW5kKTtcclxufVxyXG5cclxuQG1peGluIHNhZmUtYXJlYS1wYWRkaW5nLWhvcml6b250YWwoJHN0YXJ0LCAkZW5kOiAkc3RhcnQpIHtcclxuICAgICRzYWZlLWFyZWEtZW5kOiBudWxsO1xyXG4gICAgJHNhZmUtYXJlYS1zdGFydDogbnVsbDtcclxuXHJcbiAgICBAaWYgKCRlbmQpIHtcclxuICAgICAgICAkc2FmZS1hcmVhLWVuZDogY2FsYyh2YXIoLS1pb24tc2FmZS1hcmVhLXJpZ2h0KSArICN7JGVuZH0pO1xyXG4gICAgfVxyXG4gICAgQGlmICgkc3RhcnQpIHtcclxuICAgICAgICAkc2FmZS1hcmVhLXN0YXJ0OiBjYWxjKHZhcigtLWlvbi1zYWZlLWFyZWEtbGVmdCkgKyAjeyRzdGFydH0pO1xyXG4gICAgfVxyXG5cclxuICAgIEBpbmNsdWRlIHBhZGRpbmctaG9yaXpvbnRhbCgkc2FmZS1hcmVhLXN0YXJ0LCAkc2FmZS1hcmVhLWVuZCk7XHJcbn1cclxuXHJcbkBtaXhpbiBzYWZlLWFyZWEtcGFkZGluZy1zdGFydCgkc3RhcnQsICRlbmQpIHtcclxuICAgICRzYWZlLWFyZWEtc3RhcnQ6IGNhbGModmFyKC0taW9uLXNhZmUtYXJlYS1sZWZ0KSArICN7JHN0YXJ0fSk7XHJcblxyXG4gICAgQGluY2x1ZGUgcGFkZGluZy1ob3Jpem9udGFsKCRzYWZlLWFyZWEtc3RhcnQsICRlbmQpO1xyXG59XHJcblxyXG5AbWl4aW4gc2FmZS1hcmVhLXBhZGRpbmctZW5kKCRzdGFydCwgJGVuZCkge1xyXG4gICAgJHNhZmUtYXJlYS1lbmQ6IGNhbGModmFyKC0taW9uLXNhZmUtYXJlYS1yaWdodCkgKyAjeyRlbmR9KTtcclxuXHJcbiAgICBAaW5jbHVkZSBwYWRkaW5nLWhvcml6b250YWwoJHN0YXJ0LCAkc2FmZS1hcmVhLWVuZCk7XHJcbn1cclxuXHJcbkBtaXhpbiBzYWZlLWFyZWEtcG9zaXRpb24oJHRvcDogbnVsbCwgJGVuZDogbnVsbCwgJGJvdHRvbTogbnVsbCwgJHN0YXJ0OiBudWxsKSB7XHJcbiAgICAkc2FmZS1hcmVhLXN0YXJ0OiBjYWxjKHZhcigtLWlvbi1zYWZlLWFyZWEtbGVmdCkgKyAjeyRzdGFydH0pO1xyXG4gICAgJHNhZmUtYXJlYS1lbmQ6IGNhbGModmFyKC0taW9uLXNhZmUtYXJlYS1yaWdodCkgKyAjeyRlbmR9KTtcclxuXHJcbiAgICBAaW5jbHVkZSBwb3NpdGlvbigkdG9wLCAkc2FmZS1hcmVhLWVuZCwgJGJvdHRvbSwgJHNhZmUtYXJlYS1zdGFydCk7XHJcbn1cclxuXHJcbkBtaXhpbiBjb3JlLWhlYWRpbmdzKCkge1xyXG4gICAgaDEge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjZweDtcclxuICAgIH1cclxuICAgIGgyLCAuaXRlbS1oZWFkaW5nIHtcclxuICAgICAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICB9XHJcbiAgICBoMyB7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgfVxyXG4gICAgaDQge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIH1cclxuICAgIGg1IHtcclxuICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICB9XHJcbiAgICBoNiB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWl4aW4gZGFya21vZGUoKSB7XHJcbiAgICAkcm9vdDogI3smfTtcclxuXHJcbiAgICBAYXQtcm9vdCAje2FkZC1yb290LXNlbGVjdG9yKCRyb290LCBcImh0bWwuZGFya1wiKX0ge1xyXG4gICAgICAgIEBjb250ZW50O1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWl4aW4gaG9yaXpvbnRhbF9zY3JvbGxfaXRlbSgkd2lkdGgsICRtaW4td2lkdGgsICRtYXgtd2lkdGgpIHtcclxuICAgIGZsZXg6IDAgMCAkd2lkdGg7XHJcbiAgICBtaW4td2lkdGg6ICRtaW4td2lkdGg7XHJcbiAgICBtYXgtd2lkdGg6ICRtYXgtd2lkdGg7XHJcbiAgICBhbGlnbi1zZWxmOiBzdHJldGNoO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcblxyXG4gICAgaW9uLWNhcmQge1xyXG4gICAgICAgIC0tdmVydGljYWwtbWFyZ2luOiAxMHB4O1xyXG4gICAgICAgIC0taG9yaXpvbnRhbC1tYXJnaW46IDEwcHg7XHJcblxyXG4gICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSB2YXIoLS1ob3Jpem9udGFsLW1hcmdpbikgLSB2YXIoLS1ob3Jpem9udGFsLW1hcmdpbikpO1xyXG4gICAgICAgIGhlaWdodDogY2FsYygxMDAlIC0gdmFyKC0tdmVydGljYWwtbWFyZ2luKSAtIHZhcigtLXZlcnRpY2FsLW1hcmdpbikpO1xyXG4gICAgICAgIG1hcmdpbjogdmFyKC0tdmVydGljYWwtbWFyZ2luKSB2YXIoLS1ob3Jpem9udGFsLW1hcmdpbik7XHJcblxyXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAzNjBweCkge1xyXG4gICAgICAgICAgICAtLWhvcml6b250YWwtbWFyZ2luOiA2cHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4vLyBDb2xvciBtaXhpbnMuXHJcbkBmdW5jdGlvbiBnZXRfYnJpZ2h0bmVzcygkY29sb3IpIHtcclxuICAgIEByZXR1cm4gKHJlZCgkY29sb3IpICsgZ3JlZW4oJGNvbG9yKSArIGJsdWUoJGNvbG9yKSkgLyAzO1xyXG59XHJcblxyXG4vLyBHZXQgdGhlIGJldHRlciBjb2xvciBjb250cmFzdCB1c2luZyBXQ0FHIGFsZ29yeXRobS5cclxuQGZ1bmN0aW9uIGdldF9jb250cmFzdF9jb2xvcigkY29sb3IpIHtcclxuICAgICRsdW1pYW5jZTogbHVtaW5hbmNlKCRjb2xvcik7XHJcblxyXG4gICAgLy8gV2hpdGUgbHVtaWFuY2UgaXMgMS5cclxuICAgICR3aGl0ZUNvbnRyYXN0OiAoJGx1bWlhbmNlICsgMC4wNSkgLyAoMSArIDAuMDUpO1xyXG4gICAgLy8gV2hpdGUgbHVtaWFuY2UgaXMgMC5cclxuICAgICRibGFja0NvbnRyYXN0OiAoMC4wNSkgLyAoJGx1bWlhbmNlICsgMC4wNSk7XHJcblxyXG4gICAgQHJldHVybiBpZigkd2hpdGVDb250cmFzdCA8ICRibGFja0NvbnRyYXN0LCB3aGl0ZSwgYmxhY2spO1xyXG59XHJcblxyXG4vLyBDb2xvciBjb250cmFzdCB1c2luZyB5aXEgYXByb3hpbWF0aW9uIHdpdGggMTUwIHRocmVzaG9sZC5cclxuQGZ1bmN0aW9uIGdldF9jb250cmFzdF9jb2xvcl95aXEoJGNvbG9yLCAkZGFyazogYmxhY2ssICRsaWdodDogd2hpdGUpIHtcclxuICAgICRyOiByZWQoJGNvbG9yKTtcclxuICAgICRnOiBncmVlbigkY29sb3IpO1xyXG4gICAgJGI6IGJsdWUoJGNvbG9yKTtcclxuXHJcbiAgICAkeWlxOiAoKCRyICogMjk5KSArICgkZyAqIDU4NykgKyAoJGIgKiAxMTQpKSAvIDEwMDA7XHJcblxyXG4gICAgQHJldHVybiBpZigkeWlxID49IDEyOCwgJGRhcmssICRsaWdodCk7XHJcbn1cclxuXHJcbi8vIFdDQUcgY29udHJhc3QgYWxnb3J5dGhtXHJcbkBmdW5jdGlvbiBjaGVjay1jb250cmFzdCgkZm9yZWdyb3VuZCwgJGJhY2tncm91bmQpIHtcclxuICAgICRmb3JlZ3JvdW5kTHVtaWFuY2U6IGx1bWluYW5jZSgkZm9yZWdyb3VuZCk7XHJcbiAgICAkYmFja2dyb3VuZEx1bWluYW5jZTogbHVtaW5hbmNlKCRiYWNrZ3JvdW5kKTtcclxuXHJcbiAgICBAaWYgKCRiYWNrZ3JvdW5kTHVtaW5hbmNlIDwgJGZvcmVncm91bmRMdW1pYW5jZSkge1xyXG4gICAgICAgIEByZXR1cm4gKCRiYWNrZ3JvdW5kTHVtaW5hbmNlICsgMC4wNSkgLyAoJGZvcmVncm91bmRMdW1pYW5jZSArIDAuMDUpO1xyXG4gICAgfSBAZWxzZSB7XHJcbiAgICAgICAgQHJldHVybiAoJGZvcmVncm91bmRMdW1pYW5jZSArIDAuMDUpIC8gKCRiYWNrZ3JvdW5kTHVtaW5hbmNlICsgMC4wNSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBmdW5jdGlvbiBsdW1pbmFuY2UoJGNvbG9yKSB7XHJcbiAgICAkcjogcmVkKCRjb2xvcik7XHJcbiAgICAkZzogZ3JlZW4oJGNvbG9yKTtcclxuICAgICRiOiBibHVlKCRjb2xvcik7XHJcblxyXG4gICAgJHI6IGNvbXBvbmVudC1sdW1pbmFuY2UoJHIpO1xyXG4gICAgJGc6IGNvbXBvbmVudC1sdW1pbmFuY2UoJGcpO1xyXG4gICAgJGI6IGNvbXBvbmVudC1sdW1pbmFuY2UoJGIpO1xyXG5cclxuICAgIEByZXR1cm4gJHIgKiAwLjIxMjYgKyAkZyAqIDAuNzE1MiArICRiICogMC4wNzIyO1xyXG59XHJcblxyXG5AZnVuY3Rpb24gY29tcG9uZW50LWx1bWluYW5jZSgkdmFsdWUpIHtcclxuICAgICR2YWx1ZTogJHZhbHVlIC8gMjU1O1xyXG5cclxuICAgIEBpZiAoJHZhbHVlIDw9IDAuMDM5MjgpIHtcclxuICAgICAgICBAcmV0dXJuICR2YWx1ZSAvIDEyLjkyO1xyXG4gICAgfSBAZWxzZSB7XHJcbiAgICAgICAgQHJldHVybiBtYXRoLnBvdygoJHZhbHVlICsgMC4wNTUpIC8gMS4wNTUsIDIuNCk7XHJcbiAgICB9XHJcbn1cclxuIiwiLypcclxuICogQXBwIEN1c3RvbSBBcHAgdmFyaWFibGVzIFNDU1NcclxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gKiBQbGFjZSBoZXJlIGFsbCBjdXN0b20gYXBwIHZhcmlhYmxlcy5cclxuICovXHJcbiIsIi8qXHJcbiAqIEFwcCBHbG9iYWwgdmFyaWFibGVzIFNDU1NcclxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gKiBQbGFjZSBoZXJlIGFsbCBnbG9iYWwgdmFyaWFibGVzLlxyXG4gKi9cclxuXHJcbiR3aGl0ZTogICAgICAgI2ZmZmZmZiAhZGVmYXVsdDtcclxuJGdyYXktMTAwOiAgICAjZjhmOWZhICFkZWZhdWx0O1xyXG4kZ3JheS0yMDA6ICAgICNlOWVjZWYgIWRlZmF1bHQ7XHJcbiRncmF5LTMwMDogICAgI2RlZTJlNiAhZGVmYXVsdDsgLy8gU3Ryb2tlXHJcbiRncmF5LTQwMDogICAgI2NlZDRkYSAhZGVmYXVsdDtcclxuJGdyYXktNTAwOiAgICAjOGY5NTllICFkZWZhdWx0OyAvLyBTdHJva2Ugb24gaW5wdXRzXHJcbiRncmF5LTYwMDogICAgIzZhNzM3YiAhZGVmYXVsdDtcclxuJGdyYXktNzAwOiAgICAjNDk1MDU3ICFkZWZhdWx0O1xyXG4kZ3JheS04MDA6ICAgICMzNDNhNDAgIWRlZmF1bHQ7XHJcbiRncmF5LTkwMDogICAgIzFkMjEyNSAhZGVmYXVsdDsgLy8gQ29weSB0ZXh0XHJcbiRibGFjazogICAgICAgIzAwMDAwMCAhZGVmYXVsdDsgLy8gQXZvaWQgdXNhZ2VcclxuXHJcbiRibHVlOiAgICAgICAgIzBmNmNiZiAhZGVmYXVsdDtcclxuJGN5YW46ICAgICAgICAjMDA4MTk2ICFkZWZhdWx0OyAvLyBOb3QgdXNlZC5cclxuJGdyZWVuOiAgICAgICAjMzU3YTMyICFkZWZhdWx0O1xyXG4kcmVkOiAgICAgICAgICNjYTMxMjAgIWRlZmF1bHQ7XHJcbiR5ZWxsb3c6ICAgICAgI2YwYWQ0ZSAhZGVmYXVsdDtcclxuXHJcbiRicmFuZC1jb2xvcjogI2ZmNzUxOCAhZGVmYXVsdDtcclxuXHJcbiR0ZXh0LWNvbG9yOiAgICAgICAgICAgICAgICRncmF5LTkwMCAhZGVmYXVsdDtcclxuJHRleHQtY29sb3ItcmdiOiAgICAgICAgICAgY29sb3ItdG8tcmdiLWxpc3QoJHRleHQtY29sb3IpICFkZWZhdWx0O1xyXG4kdGV4dC1jb2xvci1kYXJrOiAgICAgICAgICAkd2hpdGUgIWRlZmF1bHQ7XHJcbiR0ZXh0LWNvbG9yLWRhcmstcmdiOiAgICAgIGNvbG9yLXRvLXJnYi1saXN0KCR0ZXh0LWNvbG9yLWRhcmspICFkZWZhdWx0O1xyXG5cclxuJGJhY2tncm91bmQtY29sb3I6ICAgICAgICAgICR3aGl0ZSAhZGVmYXVsdDtcclxuJGJhY2tncm91bmQtY29sb3ItcmdiOiAgICAgIGNvbG9yLXRvLXJnYi1saXN0KCRiYWNrZ3JvdW5kLWNvbG9yKSAhZGVmYXVsdDtcclxuJGJhY2tncm91bmQtY29sb3ItZGFyazogICAgICRncmF5LTkwMCAhZGVmYXVsdDsgLy8gIzFhMWExYVxyXG4kYmFja2dyb3VuZC1jb2xvci1kYXJrLXJnYjogY29sb3ItdG8tcmdiLWxpc3QoJGJhY2tncm91bmQtY29sb3ItZGFyaykgIWRlZmF1bHQ7XHJcblxyXG4kaW9uLWl0ZW0tYmFja2dyb3VuZDogICAgICAkd2hpdGUgIWRlZmF1bHQ7XHJcbiRpb24taXRlbS1iYWNrZ3JvdW5kLXJnYjogIGNvbG9yLXRvLXJnYi1saXN0KCRpb24taXRlbS1iYWNrZ3JvdW5kKSAhZGVmYXVsdDtcclxuJGlvbi1pdGVtLWJhY2tncm91bmQtZGFyazogJGdyYXktOTAwICFkZWZhdWx0O1xyXG4kaW9uLWl0ZW0tYmFja2dyb3VuZC1kYXJrLXJnYjogY29sb3ItdG8tcmdiLWxpc3QoJGlvbi1pdGVtLWJhY2tncm91bmQtZGFyaykgIWRlZmF1bHQ7XHJcblxyXG4kcHJpbWFyeTogICAgJGJyYW5kLWNvbG9yICFkZWZhdWx0O1xyXG4kc2Vjb25kYXJ5OiAgJGdyYXktMzAwICFkZWZhdWx0O1xyXG4kZGFuZ2VyOiAgICAgJHJlZCAhZGVmYXVsdDtcclxuJHdhcm5pbmc6ICAgICR5ZWxsb3cgIWRlZmF1bHQ7XHJcbiRzdWNjZXNzOiAgICAkZ3JlZW4gIWRlZmF1bHQ7XHJcbiRpbmZvOiAgICAgICAkYmx1ZSAhZGVmYXVsdDtcclxuJGxpZ2h0OiAgICAgICRncmF5LTEwMCAhZGVmYXVsdDtcclxuJG1lZGl1bTogICAgICRncmF5LTcwMCAhZGVmYXVsdDtcclxuJGRhcms6ICAgICAgICRncmF5LTkwMCAhZGVmYXVsdDtcclxuXHJcbiRjb2xvcnM6ICAoXHJcbiAgICBwcmltYXJ5OiAobGlnaHQ6ICRwcmltYXJ5LCBkYXJrOiAkcHJpbWFyeSksXHJcbiAgICBzZWNvbmRhcnk6IChsaWdodDogJHNlY29uZGFyeSwgZGFyazogJGdyYXktNzAwKSxcclxuICAgIHN1Y2Nlc3M6IChsaWdodDogJHN1Y2Nlc3MpLFxyXG4gICAgd2FybmluZzogKGxpZ2h0OiAkd2FybmluZyksXHJcbiAgICBkYW5nZXI6ICAobGlnaHQ6ICRkYW5nZXIpLFxyXG4gICAgaW5mbzogKGxpZ2h0OiAkaW5mbyksXHJcbiAgICBsaWdodDogKGxpZ2h0OiAkbGlnaHQsIGRhcms6ICRkYXJrKSxcclxuICAgIG1lZGl1bTogKGxpZ2h0OiAkbWVkaXVtLCBkYXJrOiAkZ3JheS0yMDApLFxyXG4gICAgZGFyazogKGxpZ2h0OiAkZGFyaywgZGFyazogJGxpZ2h0KSxcclxuKSAhZGVmYXVsdDtcclxuXHJcbi8qKlxyXG4gKiBMYXlvdXQgQnJlYWtwb2ludHNcclxuICpcclxuICogaHR0cHM6Ly9pb25pY2ZyYW1ld29yay5jb20vZG9jcy9sYXlvdXQvZ3JpZCNkZWZhdWx0LWJyZWFrcG9pbnRzXHJcbiAqL1xyXG5cclxuLy8gVGhlIG1pbmltdW0gZGltZW5zaW9ucyBhdCB3aGljaCB5b3VyIGxheW91dCB3aWxsIGNoYW5nZSxcclxuLy8gYWRhcHRpbmcgdG8gZGlmZmVyZW50IHNjcmVlbiBzaXplcywgZm9yIHVzZSBpbiBtZWRpYSBxdWVyaWVzXHJcbiRzY3JlZW4tYnJlYWtwb2ludHM6IChcclxuICAgIHhzOiAwLFxyXG4gICAgc206IDU3NnB4LFxyXG4gICAgbWQ6IDc2OHB4LFxyXG4gICAgbGc6IDk5MnB4LFxyXG4gICAgdGFibGV0OiA5OTJweCxcclxuICAgIHhsOiAxMjAwcHhcclxuKSAhZGVmYXVsdDtcclxuXHJcbiRjb3JlLWNvdXJzZS1pbWFnZS1iYWNrZ3JvdW5kOiAjODFlY2VjLCAjNzRiOWZmLCAjYTI5YmZlLCAjZGZlNmU5LCAjMDBiODk0LCAjMDk4NGUzLCAjYjJiZWMzLCAjZmRjYjZlLCAjZmQ3OWE4LCAjNmM1Y2U3ICFkZWZhdWx0O1xyXG4kY29yZS1kZC1xdWVzdGlvbi1jb2xvcnM6ICNGRkZGRkYsICNCMEM0REUsICNEQ0RDREMsICNEOEJGRDgsICM4N0NFRkEsICNEQUE1MjAsICNGRkQ3MDAsICNGMEU2OEMgIWRlZmF1bHQ7XHJcbiRjb3JlLXRleHQtaGlnaHRsaWdodC1iYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGVuKCRibHVlLCA0MCUpICFkZWZhdWx0O1xyXG5cclxuJGNvcmUtZml4ZWQtdXJsOiBmYWxzZSAhZGVmYXVsdDtcclxuJGNvcmUtZGFzaGJvYXJkLWxvZ286IGZhbHNlICFkZWZhdWx0O1xyXG4kY29yZS1hbHdheXMtc2hvdy1tYWluLW1lbnU6IGZhbHNlICFkZWZhdWx0O1xyXG4kY29yZS1mb3JtYXQtdGV4dC1uZXZlci1zaG9ydGVuOiBmYWxzZSAhZGVmYXVsdDtcclxuXHJcbiRjb3JlLWhpZGUtY291cnNlaW1hZ2Utb24tY291cnNlOiBmYWxzZSAhZGVmYXVsdDtcclxuJGNvcmUtaGlkZS1wcm9ncmVzcy1vbi1jb3Vyc2U6IGZhbHNlICFkZWZhdWx0O1xyXG4kY29yZS1oaWRlLXByb2dyZXNzLW9uLXNlY3Rpb24tc2VsZWN0b3I6IGZhbHNlICFkZWZhdWx0O1xyXG5cclxuJGNvcmUtY291cnNlLWhpZGUtdGh1bWItb24tY2FyZHM6IGZhbHNlICFkZWZhdWx0O1xyXG4kY29yZS1jb3Vyc2UtdGh1bWItb24tY2FyZHMtYmFja2dyb3VuZDogbnVsbCAhZGVmYXVsdDtcclxuJGNvcmUtY291cnNlLWhpZGUtcHJvZ3Jlc3Mtb24tY2FyZHM6IGZhbHNlICFkZWZhdWx0O1xyXG5cclxuLy8gQ29uZmlndXJhdGlvbiBvcHRpb25zIGZvciBsb2dpbiBwYWdlLlxyXG4kY29yZS1sb2dpbi1idXR0b24tb3V0bGluZTogZmFsc2UgIWRlZmF1bHQ7XHJcbiRjb3JlLWxvZ2luLWJ1dHRvbi1vdXRsaW5lLWRhcms6ICRjb3JlLWxvZ2luLWJ1dHRvbi1vdXRsaW5lICFkZWZhdWx0O1xyXG4kY29yZS1sb2dpbi1sb2FkaW5nLWNvbG9yOiBmYWxzZSAhZGVmYXVsdDtcclxuJGNvcmUtbG9naW4tbG9hZGluZy1jb2xvci1kYXJrOiAkdGV4dC1jb2xvci1kYXJrICFkZWZhdWx0O1xyXG4kY29yZS1sb2dpbi1oaWRlLWZvcmdvdC1wYXNzd29yZDogZmFsc2UgIWRlZmF1bHQ7XHJcbiRjb3JlLWxvZ2luLWhpZGUtbmVlZC1oZWxwOiBmYWxzZSAhZGVmYXVsdDtcclxuJGNvcmUtbG9naW4taGlkZS1xcmNvZGU6IGZhbHNlICFkZWZhdWx0O1xyXG5cclxuLy8gQ29uZmlndXJhdGlvbiBvcHRpb25zIGZvciBtb3JlIHBhZ2UuIChkZXByZWNhdGVkIG9uIDQuMClcclxuJGNvcmUtbW9yZS1oaWRlLXNpdGVpbmZvOiBmYWxzZSAhZGVmYXVsdDtcclxuJGNvcmUtbW9yZS1oaWRlLXNpdGVuYW1lOiBmYWxzZSAhZGVmYXVsdDtcclxuJGNvcmUtbW9yZS1oaWRlLXNpdGV1cmw6IGZhbHNlICFkZWZhdWx0O1xyXG5cclxuLy8gQ29uZmlndXJhdGlvbiBvcHRpb25zIGZvciB1c2VyIHBhZ2UuXHJcbiRjb3JlLXVzZXItaGlkZS1zaXRlaW5mbzogJGNvcmUtbW9yZS1oaWRlLXNpdGVpbmZvICFkZWZhdWx0O1xyXG4kY29yZS11c2VyLWhpZGUtc2l0ZW5hbWU6ICRjb3JlLW1vcmUtaGlkZS1zaXRlbmFtZSAhZGVmYXVsdDtcclxuJGNvcmUtdXNlci1oaWRlLXNpdGV1cmw6ICRjb3JlLW1vcmUtaGlkZS1zaXRldXJsICFkZWZhdWx0O1xyXG5cclxuLy8gQWN0aXZpdHkgaWNvbiBiYWNrZ3JvdW5kIGNvbG9ycy5cclxuJGFjdGl2aXR5LWljb24tY29sb3JzOiAoXHJcbiAgICBhZG1pbmlzdHJhdGlvbjogIzVkNjNmNixcclxuICAgIGFzc2Vzc21lbnQ6ICNlYjY2YTIsXHJcbiAgICBjb2xsYWJvcmF0aW9uOiAjZjc2MzRkLFxyXG4gICAgY29tbXVuaWNhdGlvbjogIzExYTY3NixcclxuICAgIGNvbnRlbnQ6ICMzOTliZTIsXHJcbiAgICBpbnRlcmZhY2U6ICNhMzc4ZmZcclxuKSAhZGVmYXVsdDtcclxuXHJcbi8vIENhbGVuZGFyIGV2ZW50IGNhdGVnb3J5IGJhY2tncm91bmQgY29sb3JzLlxyXG4kY2FsZW5kYXItZXZlbnQtY2F0ZWdvcnktY29sb3JzOiAoXHJcbiAgICBjYXRlZ29yeTogIzhlMjRhYSxcclxuICAgIGNvdXJzZTogJHJlZCxcclxuICAgIGdyb3VwOiAkeWVsbG93LFxyXG4gICAgdXNlcjogJGJsdWUsXHJcbiAgICBzaXRlOiAkZ3JlZW5cclxuKSAhZGVmYXVsdDtcclxuIiwiQGltcG9ydCBcIn50aGVtZS9nbG9iYWxzXCI7XHJcblxyXG46aG9zdCB7XHJcbiAgICAtLWxpc3QtaXRlbS1tYXgtd2lkdGg6IDYwMHB4O1xyXG59XHJcblxyXG4uaXRlbS1pbnB1dDpsYXN0LWNoaWxkIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuXHJcbi5jb3JlLWxvZ2luLXNpdGUtY29ubmVjdCB7XHJcbiAgICBtYXJnaW4tdG9wOiAxLjRyZW07XHJcbn1cclxuXHJcbi5pdGVtIGlvbi10aHVtYm5haWwge1xyXG4gICAgbWluLXdpZHRoOiA1MHB4O1xyXG4gICAgbWluLWhlaWdodDogNTBweDtcclxuICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjAlO1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDRweCB2YXIoLS1ncmF5LTIwMCk7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG5cclxuICAgIGltZyB7XHJcbiAgICAgICAgbWF4LWhlaWdodDogNTBweDtcclxuICAgICAgICBtYXgtd2lkdGg6IGZpdC1jb250ZW50O1xyXG4gICAgICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgICBtYXJnaW4tbGVmdDogNTAlO1xyXG4gICAgICAgIEBpbmNsdWRlIHRyYW5zZm9ybSh0cmFuc2xhdGUzZCgtNTAlLDAsMCkpO1xyXG4gICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgICAgIG9iamVjdC1wb3NpdGlvbjogNTAlIDUwJTtcclxuICAgIH1cclxuICAgIGlvbi1pY29uIHtcclxuICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgICBmb250LXNpemU6IDM1cHg7XHJcbiAgICAgICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG46aG9zdC1jb250ZXh0KFtkaXI9XCJydGxcIl0pIHtcclxuXHJcbiAgICAuaXRlbSBpb24tdGh1bWJuYWlsIGltZyB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA1MCU7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG4uY29yZS1sb2dpbi1zaXRlLWxvZ28sXHJcbi5jb3JlLWxvZ2luLXNpdGUtbGlzdCxcclxuLmNvcmUtbG9naW4tc2l0ZS1saXN0LWZvdW5kIHtcclxuICAgIHRyYW5zaXRpb24tZGVsYXk6IDBzO1xyXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC43cyBlYXNlLWluLW91dDtcclxuICAgIG1heC1oZWlnaHQ6IDk5OTlweDtcclxuXHJcbiAgICAmLmhpZGRlbiB7XHJcbiAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgbWF4LWhlaWdodDogMDtcclxuICAgIH1cclxufVxyXG5cclxuLmNvcmUtbG9naW4tc2l0ZS1saXN0LWZvdW5kLmRpbW1lZCB7XHJcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLmNvcmUtbG9naW4tc2l0ZS1saXN0LWxvYWRpbmcge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICBpb24tc3Bpbm5lciB7XHJcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICB9XHJcbn1cclxuXHJcbi5jb3JlLWxvZ2luLXNpdGUtbm9saXN0LWxvYWRpbmcge1xyXG4gICAgbWFyZ2luLXRvcDogMTZweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLml0ZW0uY29yZS1sb2dpbi1zaXRlLWxpc3QtdGl0bGUge1xyXG4gICAgaW9uLWxhYmVsLCBpb24tbGFiZWwgaDIuaXRlbS1oZWFkaW5nIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgfVxyXG59XHJcblxyXG5AaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LXVwKG1kKSB7XHJcbiAgICBpb24tY29udGVudCAuY29yZS1sb2dpbi1zaXRlLWxvZ28ge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDIwJTtcclxuICAgICAgICAmLmhpZGRlbiB7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4uY29yZS1sb2dpbi1lbnRlcmVkLXNpdGUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQpO1xyXG5cclxuICAgIGlvbi10aHVtYm5haWwge1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDAgMCA0cHggdmFyKC0tZ3JheS0zMDApO1xyXG4gICAgfVxyXG59XHJcblxyXG4uY29yZS1sb2dpbi1kZWZhdWx0LWljb24ge1xyXG4gICAgZmlsdGVyOiBncmF5c2NhbGUoMTAwJSk7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "./src/core/features/login/pages/site/site.ts":
/*!****************************************************!*\
  !*** ./src/core/features/login/pages/site/site.ts ***!
  \****************************************************/
/*! exports provided: CoreLoginSitePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreLoginSitePage", function() { return CoreLoginSitePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _services_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @services/app */ "./src/core/services/app.ts");
/* harmony import */ var _services_network__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @services/network */ "./src/core/services/network.ts");
/* harmony import */ var _services_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @services/config */ "./src/core/services/config.ts");
/* harmony import */ var _services_sites__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @services/sites */ "./src/core/services/sites.ts");
/* harmony import */ var _services_utils_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @services/utils/utils */ "./src/core/services/utils/utils.ts");
/* harmony import */ var _services_utils_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @services/utils/dom */ "./src/core/services/utils/dom.ts");
/* harmony import */ var _features_login_services_login_helper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @features/login/services/login-helper */ "./src/core/features/login/services/login-helper.ts");
/* harmony import */ var _classes_site__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @classes/site */ "./src/core/classes/site.ts");
/* harmony import */ var _classes_errors_error__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @classes/errors/error */ "./src/core/classes/errors/error.ts");
/* harmony import */ var _core_constants__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @/core/constants */ "./src/core/constants.ts");
/* harmony import */ var _singletons__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @singletons */ "./src/core/singletons/index.ts");
/* harmony import */ var _singletons_url__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @singletons/url */ "./src/core/singletons/url.ts");
/* harmony import */ var _services_utils_url__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @services/utils/url */ "./src/core/services/utils/url.ts");
/* harmony import */ var _features_login_components_site_help_site_help__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @features/login/components/site-help/site-help */ "./src/core/features/login/components/site-help/site-help.ts");
/* harmony import */ var _features_login_components_site_onboarding_site_onboarding__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @features/login/components/site-onboarding/site-onboarding */ "./src/core/features/login/components/site-onboarding/site-onboarding.ts");
/* harmony import */ var _services_navigator__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @services/navigator */ "./src/core/services/navigator.ts");
/* harmony import */ var _services_urlschemes__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @services/urlschemes */ "./src/core/services/urlschemes.ts");
/* harmony import */ var _services_utils_text__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @services/utils/text */ "./src/core/services/utils/text.ts");
/* harmony import */ var _singletons_form__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @singletons/form */ "./src/core/singletons/form.ts");
// (C) Copyright 2015 Moodle Pty Ltd.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.






















/**
 * Site (url) chooser when adding a new site.
 */
let CoreLoginSitePage = class CoreLoginSitePage {
    constructor(formBuilder) {
        this.formBuilder = formBuilder;
        this.siteSelector = 'sitefinder';
        this.showKeyboard = false;
        this.filter = '';
        this.sites = [];
        this.hasSites = false;
        this.loadingSites = false;
        let url = '';
        this.siteSelector = _core_constants__WEBPACK_IMPORTED_MODULE_12__["CoreConstants"].CONFIG.multisitesdisplay;
        const siteFinderSettings = _core_constants__WEBPACK_IMPORTED_MODULE_12__["CoreConstants"].CONFIG.sitefindersettings || {};
        this.siteFinderSettings = Object.assign({ displaysitename: true, displayimage: true, displayalias: true, displaycity: true, displaycountry: true, displayurl: true }, siteFinderSettings);
        // Load fixed sites if they're set.
        if (_features_login_services_login_helper__WEBPACK_IMPORTED_MODULE_9__["CoreLoginHelper"].hasSeveralFixedSites()) {
            url = this.initSiteSelector();
        }
        else if (_core_constants__WEBPACK_IMPORTED_MODULE_12__["CoreConstants"].CONFIG.enableonboarding && !_services_app__WEBPACK_IMPORTED_MODULE_3__["CoreApp"].isIOS()) {
            this.initOnboarding();
        }
        this.showScanQR = _features_login_services_login_helper__WEBPACK_IMPORTED_MODULE_9__["CoreLoginHelper"].displayQRInSiteScreen();
        this.siteForm = this.formBuilder.group({
            siteUrl: [url, this.moodleUrlValidator()],
        });
        this.searchFunction = _services_utils_utils__WEBPACK_IMPORTED_MODULE_7__["CoreUtils"].debounce((search) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            search = search.trim();
            if (search.length >= 3) {
                // Update the sites list.
                const sites = yield _services_sites__WEBPACK_IMPORTED_MODULE_6__["CoreSites"].findSites(search);
                // Add UI tweaks.
                this.sites = this.extendCoreLoginSiteInfo(sites);
                this.hasSites = !!this.sites.length;
            }
            else {
                // Not reseting the array to allow animation to be displayed.
                this.hasSites = false;
            }
            this.loadingSites = false;
        }), 1000);
    }
    /**
     * Initialize the component.
     */
    ngOnInit() {
        this.showKeyboard = !!_services_navigator__WEBPACK_IMPORTED_MODULE_18__["CoreNavigator"].getRouteBooleanParam('showKeyboard');
    }
    /**
     * Initialize the site selector.
     *
     * @return URL of the first site.
     */
    initSiteSelector() {
        this.fixedSites = this.extendCoreLoginSiteInfo(_features_login_services_login_helper__WEBPACK_IMPORTED_MODULE_9__["CoreLoginHelper"].getFixedSites());
        this.siteSelector = 'list'; // In case it's not defined
        // Do not show images if none are set.
        if (!this.fixedSites.some((site) => !!site.imageurl)) {
            this.siteFinderSettings.displayimage = false;
        }
        this.filteredSites = this.fixedSites;
        return this.fixedSites[0].url;
    }
    /**
     * Initialize and show onboarding if needed.
     *
     * @return Promise resolved when done.
     */
    initOnboarding() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const onboardingDone = yield _services_config__WEBPACK_IMPORTED_MODULE_5__["CoreConfig"].get(_features_login_services_login_helper__WEBPACK_IMPORTED_MODULE_9__["CoreLoginHelperProvider"].ONBOARDING_DONE, false);
            if (!onboardingDone) {
                // Check onboarding.
                this.showOnboarding();
            }
        });
    }
    /**
     * Extend info of Login Site Info to get UI tweaks.
     *
     * @param sites Sites list.
     * @return Sites list with extended info.
     */
    extendCoreLoginSiteInfo(sites) {
        return sites.map((site) => {
            site.noProtocolUrl = this.siteFinderSettings.displayurl && site.url ? _singletons_url__WEBPACK_IMPORTED_MODULE_14__["CoreUrl"].removeProtocol(site.url) : '';
            const name = this.siteFinderSettings.displaysitename ? site.name : '';
            const alias = this.siteFinderSettings.displayalias && site.alias ? site.alias : '';
            // Set title with parenthesis if both name and alias are present.
            site.title = name && alias ? name + ' (' + alias + ')' : name + alias;
            const country = this.siteFinderSettings.displaycountry && site.countrycode ?
                _services_utils_utils__WEBPACK_IMPORTED_MODULE_7__["CoreUtils"].getCountryName(site.countrycode) : '';
            const city = this.siteFinderSettings.displaycity && site.city ?
                site.city : '';
            // Separate location with hiphen if both country and city are present.
            site.location = city && country ? city + ' - ' + country : city + country;
            if (_services_sites__WEBPACK_IMPORTED_MODULE_6__["CoreSites"].hasDefaultImage(site) && this.siteFinderSettings.defaultimageurl) {
                site.imageurl = this.siteFinderSettings.defaultimageurl;
            }
            return site;
        });
    }
    /**
     * Validate Url.
     *
     * @return {ValidatorFn} Validation results.
     */
    moodleUrlValidator() {
        return (control) => {
            const value = control.value.trim();
            let valid = value.length >= 3 && _singletons_url__WEBPACK_IMPORTED_MODULE_14__["CoreUrl"].isValidMoodleUrl(value);
            if (!valid) {
                const demo = !!_services_sites__WEBPACK_IMPORTED_MODULE_6__["CoreSites"].getDemoSiteData(value);
                if (demo) {
                    valid = true;
                }
            }
            return valid ? null : { siteUrl: { value: control.value } };
        };
    }
    /**
     * Show a help modal.
     */
    showHelp() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield _services_utils_dom__WEBPACK_IMPORTED_MODULE_8__["CoreDomUtils"].openModal({
                component: _features_login_components_site_help_site_help__WEBPACK_IMPORTED_MODULE_16__["CoreLoginSiteHelpComponent"],
                cssClass: 'core-modal-fullscreen',
            });
        });
    }
    /**
     * Show an onboarding modal.
     */
    showOnboarding() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield _services_utils_dom__WEBPACK_IMPORTED_MODULE_8__["CoreDomUtils"].openModal({
                component: _features_login_components_site_onboarding_site_onboarding__WEBPACK_IMPORTED_MODULE_17__["CoreLoginSiteOnboardingComponent"],
                cssClass: 'core-modal-fullscreen',
            });
        });
    }
    /**
     * Try to connect to a site.
     *
     * @param e Event.
     * @param url The URL to connect to.
     * @param foundSite The site clicked, if any, from the found sites list.
     * @return Promise resolved when done.
     */
    connect(e, url, foundSite) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            e.preventDefault();
            e.stopPropagation();
            _services_app__WEBPACK_IMPORTED_MODULE_3__["CoreApp"].closeKeyboard();
            if (!url) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_8__["CoreDomUtils"].showErrorModal('core.login.siteurlrequired', true);
                return;
            }
            if (!_services_network__WEBPACK_IMPORTED_MODULE_4__["CoreNetwork"].isOnline()) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_8__["CoreDomUtils"].showErrorModal('core.networkerrormsg', true);
                return;
            }
            url = url.trim();
            if (url.match(/^(https?:\/\/)?campus\.example\.edu/)) {
                this.showLoginIssue(null, new _classes_errors_error__WEBPACK_IMPORTED_MODULE_11__["CoreError"](_singletons__WEBPACK_IMPORTED_MODULE_13__["Translate"].instant('core.login.errorexampleurl')));
                return;
            }
            const siteData = _services_sites__WEBPACK_IMPORTED_MODULE_6__["CoreSites"].getDemoSiteData(url);
            if (siteData) {
                // It's a demo site.
                yield this.loginDemoSite(siteData);
            }
            else {
                // Not a demo site.
                const modal = yield _services_utils_dom__WEBPACK_IMPORTED_MODULE_8__["CoreDomUtils"].showModalLoading();
                let checkResult;
                try {
                    checkResult = yield _services_sites__WEBPACK_IMPORTED_MODULE_6__["CoreSites"].checkSite(url);
                }
                catch (error) {
                    // Attempt guessing the domain if the initial check failed
                    const domain = _singletons_url__WEBPACK_IMPORTED_MODULE_14__["CoreUrl"].guessMoodleDomain(url);
                    if (domain && domain != url) {
                        try {
                            checkResult = yield _services_sites__WEBPACK_IMPORTED_MODULE_6__["CoreSites"].checkSite(domain);
                        }
                        catch (secondError) {
                            // Try to use the first error.
                            modal.dismiss();
                            return this.showLoginIssue(url, error || secondError);
                        }
                    }
                    else {
                        modal.dismiss();
                        return this.showLoginIssue(url, error);
                    }
                }
                yield this.login(checkResult, foundSite);
                modal.dismiss();
            }
        });
    }
    /**
     * Authenticate in a demo site.
     *
     * @param siteData Site data.
     * @return Promise resolved when done.
     */
    loginDemoSite(siteData) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield _services_utils_dom__WEBPACK_IMPORTED_MODULE_8__["CoreDomUtils"].showModalLoading();
            try {
                const data = yield _services_sites__WEBPACK_IMPORTED_MODULE_6__["CoreSites"].getUserToken(siteData.url, siteData.username, siteData.password);
                yield _services_sites__WEBPACK_IMPORTED_MODULE_6__["CoreSites"].newSite(data.siteUrl, data.token, data.privateToken);
                _singletons_form__WEBPACK_IMPORTED_MODULE_21__["CoreForms"].triggerFormSubmittedEvent(this.formElement, true);
                yield _services_navigator__WEBPACK_IMPORTED_MODULE_18__["CoreNavigator"].navigateToSiteHome();
                return;
            }
            catch (error) {
                _features_login_services_login_helper__WEBPACK_IMPORTED_MODULE_9__["CoreLoginHelper"].treatUserTokenError(siteData.url, error, siteData.username, siteData.password);
                if (error.loggedout) {
                    _services_navigator__WEBPACK_IMPORTED_MODULE_18__["CoreNavigator"].navigate('/login/sites', { reset: true });
                }
            }
            finally {
                modal.dismiss();
            }
        });
    }
    /**
     * Process login to a site.
     *
     * @param response Response obtained from the site check request.
     * @param foundSite The site clicked, if any, from the found sites list.
     *
     * @return Promise resolved after logging in.
     */
    login(response, foundSite) {
        var _a;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                yield _services_sites__WEBPACK_IMPORTED_MODULE_6__["CoreSites"].checkApplication(response.config);
                _singletons_form__WEBPACK_IMPORTED_MODULE_21__["CoreForms"].triggerFormSubmittedEvent(this.formElement, true);
                if (_features_login_services_login_helper__WEBPACK_IMPORTED_MODULE_9__["CoreLoginHelper"].isSSOLoginNeeded(response.code)) {
                    // SSO. User needs to authenticate in a browser.
                    _features_login_services_login_helper__WEBPACK_IMPORTED_MODULE_9__["CoreLoginHelper"].confirmAndOpenBrowserForSSOLogin(response.siteUrl, response.code, response.service, (_a = response.config) === null || _a === void 0 ? void 0 : _a.launchurl);
                }
                else {
                    const pageParams = { siteUrl: response.siteUrl, siteConfig: response.config };
                    if (foundSite && !this.fixedSites) {
                        pageParams['siteName'] = foundSite.name;
                        pageParams['logoUrl'] = foundSite.imageurl;
                    }
                    _services_navigator__WEBPACK_IMPORTED_MODULE_18__["CoreNavigator"].navigate('/login/credentials', {
                        params: pageParams,
                    });
                }
            }
            catch (_b) {
                // Ignore errors.
            }
        });
    }
    /**
     * Show an error that aims people to solve the issue.
     *
     * @param url The URL the user was trying to connect to.
     * @param error Error to display.
     */
    showLoginIssue(url, error) {
        let errorMessage = _services_utils_dom__WEBPACK_IMPORTED_MODULE_8__["CoreDomUtils"].getErrorMessage(error);
        if (errorMessage == _singletons__WEBPACK_IMPORTED_MODULE_13__["Translate"].instant('core.cannotconnecttrouble')) {
            const found = this.sites.find((site) => site.url == url);
            if (!found) {
                errorMessage += ' ' + _singletons__WEBPACK_IMPORTED_MODULE_13__["Translate"].instant('core.cannotconnectverify');
            }
        }
        let message = '<p>' + errorMessage + '</p>';
        if (url) {
            const fullUrl = _services_utils_url__WEBPACK_IMPORTED_MODULE_15__["CoreUrlUtils"].isAbsoluteURL(url) ? url : 'https://' + url;
            message += '<p padding><a href="' + fullUrl + '" core-link>' + url + '</a></p>';
        }
        const buttons = [
            {
                text: _singletons__WEBPACK_IMPORTED_MODULE_13__["Translate"].instant('core.needhelp'),
                cssClass: 'core-login-need-help',
                handler: () => {
                    this.showHelp();
                },
            },
            {
                text: _singletons__WEBPACK_IMPORTED_MODULE_13__["Translate"].instant('core.tryagain'),
                role: 'cancel',
            },
        ];
        // @TODO: Remove CoreSite.MINIMUM_MOODLE_VERSION, not used on translations since 3.9.0.
        _services_utils_dom__WEBPACK_IMPORTED_MODULE_8__["CoreDomUtils"].showAlertWithOptions({
            header: _singletons__WEBPACK_IMPORTED_MODULE_13__["Translate"].instant('core.cannotconnect', { $a: _classes_site__WEBPACK_IMPORTED_MODULE_10__["CoreSite"].MINIMUM_MOODLE_VERSION }),
            message,
            buttons,
        });
    }
    /**
     * The filter has changed.
     *
     * @param event Received Event.
     */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    filterChanged(event) {
        var _a;
        const newValue = (_a = event === null || event === void 0 ? void 0 : event.target.value) === null || _a === void 0 ? void 0 : _a.trim().toLowerCase();
        if (!newValue || !this.fixedSites) {
            this.filteredSites = this.fixedSites;
        }
        else {
            this.filteredSites = this.fixedSites.filter((site) => site.title.toLowerCase().indexOf(newValue) > -1 || site.noProtocolUrl.toLowerCase().indexOf(newValue) > -1 ||
                site.location.toLowerCase().indexOf(newValue) > -1);
        }
    }
    /**
     * Find a site on the backend.
     *
     * @param e Event.
     * @param search Text to search.
     */
    searchSite(e, search) {
        this.loadingSites = true;
        search = search.trim();
        if (this.siteForm.valid && search.length >= 3) {
            this.enteredSiteUrl = {
                url: search,
                name: 'connect',
                title: '',
                location: '',
                noProtocolUrl: _singletons_url__WEBPACK_IMPORTED_MODULE_14__["CoreUrl"].removeProtocol(search),
            };
        }
        else {
            this.enteredSiteUrl = undefined;
        }
        this.searchFunction(search.trim());
    }
    /**
     * Show instructions and scan QR code.
     *
     * @return Promise resolved when done.
     */
    showInstructionsAndScanQR() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                yield _features_login_services_login_helper__WEBPACK_IMPORTED_MODULE_9__["CoreLoginHelper"].showScanQRInstructions();
                yield this.scanQR();
            }
            catch (_a) {
                // Ignore errors.
            }
        });
    }
    /**
     * Scan a QR code and put its text in the URL input.
     *
     * @return Promise resolved when done.
     */
    scanQR() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // Scan for a QR code.
            const text = yield _services_utils_utils__WEBPACK_IMPORTED_MODULE_7__["CoreUtils"].scanQR();
            if (!text) {
                return;
            }
            if (_services_urlschemes__WEBPACK_IMPORTED_MODULE_19__["CoreCustomURLSchemes"].isCustomURL(text)) {
                try {
                    yield _services_urlschemes__WEBPACK_IMPORTED_MODULE_19__["CoreCustomURLSchemes"].handleCustomURL(text);
                }
                catch (error) {
                    if (error && error.data && error.data.isAuthenticationURL && error.data.siteUrl) {
                        // An error ocurred, but it's an authentication URL and we have the site URL.
                        this.treatErrorInAuthenticationCustomURL(text, error);
                    }
                    else {
                        _services_urlschemes__WEBPACK_IMPORTED_MODULE_19__["CoreCustomURLSchemes"].treatHandleCustomURLError(error);
                    }
                }
                return;
            }
            // Not a custom URL scheme, check if it's a URL scheme to another app.
            const scheme = _services_utils_url__WEBPACK_IMPORTED_MODULE_15__["CoreUrlUtils"].getUrlProtocol(text);
            if (scheme && scheme != 'http' && scheme != 'https') {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_8__["CoreDomUtils"].showErrorModal(_singletons__WEBPACK_IMPORTED_MODULE_13__["Translate"].instant('core.errorurlschemeinvalidscheme', { $a: text }));
                return;
            }
            const allowed = yield _features_login_services_login_helper__WEBPACK_IMPORTED_MODULE_9__["CoreLoginHelper"].isSiteUrlAllowed(text);
            if (allowed) {
                // Put the text in the field (if present).
                this.siteForm.controls.siteUrl.setValue(text);
                this.connect(new Event('click'), text);
            }
            else {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_8__["CoreDomUtils"].showErrorModal('core.errorurlschemeinvalidsite', true);
            }
        });
    }
    /**
     * Treat an error while handling a custom URL meant to perform an authentication.
     * If the site doesn't use SSO, the user will be sent to the credentials screen.
     *
     * @param customURL Custom URL handled.
     * @param error Error data.
     * @return Promise resolved when done.
     */
    treatErrorInAuthenticationCustomURL(customURL, error) {
        var _a;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const siteUrl = ((_a = error.data) === null || _a === void 0 ? void 0 : _a.siteUrl) || '';
            const modal = yield _services_utils_dom__WEBPACK_IMPORTED_MODULE_8__["CoreDomUtils"].showModalLoading();
            // Set the site URL in the input.
            this.siteForm.controls.siteUrl.setValue(siteUrl);
            try {
                // Check if site uses SSO.
                const response = yield _services_sites__WEBPACK_IMPORTED_MODULE_6__["CoreSites"].checkSite(siteUrl);
                yield _services_sites__WEBPACK_IMPORTED_MODULE_6__["CoreSites"].checkApplication(response.config);
                if (!_features_login_services_login_helper__WEBPACK_IMPORTED_MODULE_9__["CoreLoginHelper"].isSSOLoginNeeded(response.code)) {
                    // No SSO, go to credentials page.
                    yield _services_navigator__WEBPACK_IMPORTED_MODULE_18__["CoreNavigator"].navigate('/login/credentials', {
                        params: {
                            siteUrl: response.siteUrl,
                            siteConfig: response.config,
                        },
                    });
                }
            }
            catch (_b) {
                // Ignore errors.
            }
            finally {
                modal.dismiss();
            }
            // Now display the error.
            error.error = _services_utils_text__WEBPACK_IMPORTED_MODULE_20__["CoreTextUtils"].addTextToError(error.error, '<br><br>' + _singletons__WEBPACK_IMPORTED_MODULE_13__["Translate"].instant('core.login.youcanstillconnectwithcredentials'));
            _services_urlschemes__WEBPACK_IMPORTED_MODULE_19__["CoreCustomURLSchemes"].treatHandleCustomURLError(error);
        });
    }
    /**
     * Open settings page.
     */
    openSettings() {
        _services_navigator__WEBPACK_IMPORTED_MODULE_18__["CoreNavigator"].navigate('/settings');
    }
};
CoreLoginSitePage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
];
CoreLoginSitePage.propDecorators = {
    formElement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['siteFormEl',] }]
};
CoreLoginSitePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'page-core-login-site',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./site.html */ "./node_modules/raw-loader/dist/cjs.js!./src/core/features/login/pages/site/site.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./site.scss */ "./src/core/features/login/pages/site/site.scss")).default, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ../../login.scss */ "./src/core/features/login/login.scss")).default]
    })
], CoreLoginSitePage);



/***/ }),

/***/ "./src/core/features/settings/classes/settings-handlers-source.ts":
/*!************************************************************************!*\
  !*** ./src/core/features/settings/classes/settings-handlers-source.ts ***!
  \************************************************************************/
/*! exports provided: CoreSettingsHandlersSource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreSettingsHandlersSource", function() { return CoreSettingsHandlersSource; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _classes_items_management_routed_items_manager_source__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @classes/items-management/routed-items-manager-source */ "./src/core/classes/items-management/routed-items-manager-source.ts");
/* harmony import */ var _services_settings_delegate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/settings-delegate */ "./src/core/features/settings/services/settings-delegate.ts");
// (C) Copyright 2015 Moodle Pty Ltd.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.



/**
 * Provides a collection of site settings.
 */
class CoreSettingsHandlersSource extends _classes_items_management_routed_items_manager_source__WEBPACK_IMPORTED_MODULE_1__["CoreRoutedItemsManagerSource"] {
    constructor() {
        super(...arguments);
        this.handlers = [];
    }
    /**
     * @inheritdoc
     */
    loadPageItems() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.handlers = _services_settings_delegate__WEBPACK_IMPORTED_MODULE_2__["CoreSettingsDelegate"].getHandlers();
            return {
                items: this.handlers.filter((handler) => 'page' in handler),
            };
        });
    }
    /**
     * @inheritdoc
     */
    getItemPath(handler) {
        return handler.page;
    }
    /**
     * @inheritdoc
     */
    getItemQueryParams(handler) {
        return handler.params || {};
    }
}


/***/ }),

/***/ "./src/core/features/settings/pages/site/site.module.ts":
/*!**************************************************************!*\
  !*** ./src/core/features/settings/pages/site/site.module.ts ***!
  \**************************************************************/
/*! exports provided: CoreSitePreferencesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreSitePreferencesPageModule", function() { return CoreSitePreferencesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _core_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/core/shared.module */ "./src/core/shared.module.ts");
/* harmony import */ var _site__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./site */ "./src/core/features/settings/pages/site/site.ts");
/* harmony import */ var _app_app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/app/app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _site_routing__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./site-routing */ "./src/core/features/settings/pages/site/site-routing.ts");
/* harmony import */ var _services_screen__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @services/screen */ "./src/core/services/screen.ts");
// (C) Copyright 2015 Moodle Pty Ltd.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.








function buildRoutes(injector) {
    const routes = Object(_app_app_routing_module__WEBPACK_IMPORTED_MODULE_5__["resolveModuleRoutes"])(injector, _site_routing__WEBPACK_IMPORTED_MODULE_6__["SITE_PREFERENCES_ROUTES"]);
    const mobileRoutes = [
        {
            path: '',
            component: _site__WEBPACK_IMPORTED_MODULE_4__["CoreSitePreferencesPage"],
        },
        ...routes.siblings,
    ];
    const tabletRoutes = [
        {
            path: '',
            component: _site__WEBPACK_IMPORTED_MODULE_4__["CoreSitePreferencesPage"],
            children: routes.siblings,
        },
    ];
    return [
        ...Object(_app_app_routing_module__WEBPACK_IMPORTED_MODULE_5__["conditionalRoutes"])(mobileRoutes, () => _services_screen__WEBPACK_IMPORTED_MODULE_7__["CoreScreen"].isMobile),
        ...Object(_app_app_routing_module__WEBPACK_IMPORTED_MODULE_5__["conditionalRoutes"])(tabletRoutes, () => _services_screen__WEBPACK_IMPORTED_MODULE_7__["CoreScreen"].isTablet),
    ];
}
let CoreSitePreferencesPageModule = class CoreSitePreferencesPageModule {
};
CoreSitePreferencesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        providers: [
            { provide: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ROUTES"], multi: true, useFactory: buildRoutes, deps: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]] },
        ],
        declarations: [
            _site__WEBPACK_IMPORTED_MODULE_4__["CoreSitePreferencesPage"],
        ],
        imports: [
            _core_shared_module__WEBPACK_IMPORTED_MODULE_3__["CoreSharedModule"],
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CoreSitePreferencesPageModule);



/***/ }),

/***/ "./src/core/features/settings/pages/site/site.ts":
/*!*******************************************************!*\
  !*** ./src/core/features/settings/pages/site/site.ts ***!
  \*******************************************************/
/*! exports provided: CoreSitePreferencesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreSitePreferencesPage", function() { return CoreSitePreferencesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _singletons_events__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @singletons/events */ "./src/core/singletons/events.ts");
/* harmony import */ var _services_sites__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @services/sites */ "./src/core/services/sites.ts");
/* harmony import */ var _services_navigator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @services/navigator */ "./src/core/services/navigator.ts");
/* harmony import */ var _components_split_view_split_view__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @components/split-view/split-view */ "./src/core/components/split-view/split-view.ts");
/* harmony import */ var _classes_items_management_list_items_manager__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @classes/items-management/list-items-manager */ "./src/core/classes/items-management/list-items-manager.ts");
/* harmony import */ var _classes_items_management_routed_items_manager_sources_tracker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @classes/items-management/routed-items-manager-sources-tracker */ "./src/core/classes/items-management/routed-items-manager-sources-tracker.ts");
/* harmony import */ var _features_settings_services_settings_helper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @features/settings/services/settings-helper */ "./src/core/features/settings/services/settings-helper.ts");
/* harmony import */ var _services_utils_dom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @services/utils/dom */ "./src/core/services/utils/dom.ts");
/* harmony import */ var _services_network__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @services/network */ "./src/core/services/network.ts");
/* harmony import */ var _singletons__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @singletons */ "./src/core/singletons/index.ts");
/* harmony import */ var _core_constants__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @/core/constants */ "./src/core/constants.ts");
/* harmony import */ var _services_config__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @services/config */ "./src/core/services/config.ts");
/* harmony import */ var _features_settings_classes_settings_handlers_source__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @features/settings/classes/settings-handlers-source */ "./src/core/features/settings/classes/settings-handlers-source.ts");
// (C) Copyright 2015 Moodle Pty Ltd.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
var CoreSitePreferencesPage_1;















/**
 * Page that displays the list of site settings pages.
 */
let CoreSitePreferencesPage = CoreSitePreferencesPage_1 = class CoreSitePreferencesPage {
    constructor() {
        this.dataSaver = false;
        this.limitedConnection = false;
        this.isOnline = true;
        this.isDestroyed = false;
        this.siteId = _services_sites__WEBPACK_IMPORTED_MODULE_3__["CoreSites"].getCurrentSiteId();
        const source = _classes_items_management_routed_items_manager_sources_tracker__WEBPACK_IMPORTED_MODULE_7__["CoreRoutedItemsManagerSourcesTracker"].getOrCreateSource(_features_settings_classes_settings_handlers_source__WEBPACK_IMPORTED_MODULE_14__["CoreSettingsHandlersSource"], []);
        this.handlers = new _classes_items_management_list_items_manager__WEBPACK_IMPORTED_MODULE_6__["CoreListItemsManager"](source, CoreSitePreferencesPage_1);
        this.sitesObserver = _singletons_events__WEBPACK_IMPORTED_MODULE_2__["CoreEvents"].on(_singletons_events__WEBPACK_IMPORTED_MODULE_2__["CoreEvents"].SITE_UPDATED, () => {
            this.refreshData();
        }, this.siteId);
        this.isOnline = _services_network__WEBPACK_IMPORTED_MODULE_10__["CoreNetwork"].isOnline();
        this.limitedConnection = this.isOnline && _services_network__WEBPACK_IMPORTED_MODULE_10__["CoreNetwork"].isNetworkAccessLimited();
        this.networkObserver = _services_network__WEBPACK_IMPORTED_MODULE_10__["CoreNetwork"].onChange().subscribe(() => {
            // Execute the callback in the Angular zone, so change detection doesn't stop working.
            _singletons__WEBPACK_IMPORTED_MODULE_11__["NgZone"].run(() => {
                this.isOnline = _services_network__WEBPACK_IMPORTED_MODULE_10__["CoreNetwork"].isOnline();
                this.limitedConnection = this.isOnline && _services_network__WEBPACK_IMPORTED_MODULE_10__["CoreNetwork"].isNetworkAccessLimited();
            });
        });
    }
    get handlerItems() {
        return this.handlers.getSource().handlers;
    }
    /**
     * @inheritdoc
     */
    ngAfterViewInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.dataSaver = yield _services_config__WEBPACK_IMPORTED_MODULE_13__["CoreConfig"].get(_core_constants__WEBPACK_IMPORTED_MODULE_12__["CoreConstants"].SETTINGS_SYNC_ONLY_ON_WIFI, true);
            const pageToOpen = _services_navigator__WEBPACK_IMPORTED_MODULE_4__["CoreNavigator"].getRouteParam('page');
            try {
                yield this.fetchData();
            }
            finally {
                const handler = pageToOpen ? this.handlers.items.find(handler => handler.page == pageToOpen) : undefined;
                if (handler) {
                    this.handlers.watchSplitViewOutlet(this.splitView);
                    yield this.handlers.select(handler);
                }
                else {
                    yield this.handlers.start(this.splitView);
                }
            }
        });
    }
    /**
     * Fetch Data.
     */
    fetchData() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.handlers.load();
        });
    }
    /**
     * Syncrhonizes the site.
     */
    synchronize() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                // Using syncOnlyOnWifi false to force manual sync.
                yield _features_settings_services_settings_helper__WEBPACK_IMPORTED_MODULE_8__["CoreSettingsHelper"].synchronizeSite(false, this.siteId);
            }
            catch (error) {
                if (this.isDestroyed) {
                    return;
                }
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_9__["CoreDomUtils"].showErrorModalDefault(error, 'core.settings.sitesyncfailed', true);
            }
        });
    }
    /**
     * Returns true if site is beeing synchronized.
     *
     * @return True if site is beeing synchronized, false otherwise.
     */
    isSynchronizing() {
        return !!_features_settings_services_settings_helper__WEBPACK_IMPORTED_MODULE_8__["CoreSettingsHelper"].getSiteSyncPromise(this.siteId);
    }
    /**
     * Refresh the data.
     *
     * @param refresher Refresher.
     */
    refreshData(refresher) {
        this.handlers.getSource().setDirty(true);
        this.fetchData().finally(() => {
            refresher === null || refresher === void 0 ? void 0 : refresher.complete();
        });
    }
    /**
     * @inheritdoc
     */
    ngOnDestroy() {
        this.isDestroyed = true;
        this.sitesObserver.off();
        this.networkObserver.unsubscribe();
        this.handlers.destroy();
    }
};
CoreSitePreferencesPage.ctorParameters = () => [];
CoreSitePreferencesPage.propDecorators = {
    splitView: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: [_components_split_view_split_view__WEBPACK_IMPORTED_MODULE_5__["CoreSplitViewComponent"],] }]
};
CoreSitePreferencesPage = CoreSitePreferencesPage_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'page-core-site-preferences',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./site.html */ "./node_modules/raw-loader/dist/cjs.js!./src/core/features/settings/pages/site/site.html")).default,
    })
], CoreSitePreferencesPage);



/***/ })

}]);
//# sourceMappingURL=pages-site-site-module.js.map