(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-site-policy-site-policy-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/core/features/login/pages/site-policy/site-policy.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/core/features/login/pages/site-policy/site-policy.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n    <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button [text]=\"'core.back' | translate\"></ion-back-button>\r\n        </ion-buttons>\r\n\r\n        <ion-title>\r\n            <h1>{{ 'core.login.policyagreement' | translate }}</h1>\r\n        </ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n    <core-loading [hideUntil]=\"policyLoaded\">\r\n        <ion-list *ngIf=\"sitePolicy\">\r\n            <ion-item class=\"ion-text-wrap\">\r\n                <ion-label>\r\n                    <p>{{ 'core.login.policyagree' | translate }}</p>\r\n                </ion-label>\r\n            </ion-item>\r\n            <ion-item class=\"ion-text-wrap\">\r\n                <ion-label>\r\n                    <p>\r\n                        <a [href]=\"sitePolicy\" core-link [capture]=\"false\">{{ 'core.login.policyagreementclick' | translate }}</a>\r\n                    </p>\r\n                </ion-label>\r\n            </ion-item>\r\n            <ion-card *ngIf=\"showInline\" class=\"core-site-policy-iframe-container\">\r\n                <core-iframe [src]=\"sitePolicy\"></core-iframe>\r\n            </ion-card>\r\n            <ion-button class=\"ion-text-wrap ion-margin-horizontal\" expand=\"block\" (click)=\"accept()\">\r\n                {{ 'core.login.policyacceptmandatory' | translate }}\r\n            </ion-button>\r\n            <ion-button class=\"ion-text-wrap ion-margin-horizontal ion-margin-bottom\" expand=\"block\" fill=\"outline\" (click)=\"cancel()\">\r\n                {{ 'core.login.cancel' | translate }}\r\n            </ion-button>\r\n        </ion-list>\r\n    </core-loading>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/core/features/login/pages/site-policy/site-policy.module.ts":
/*!*************************************************************************!*\
  !*** ./src/core/features/login/pages/site-policy/site-policy.module.ts ***!
  \*************************************************************************/
/*! exports provided: CoreLoginSitePolicyPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreLoginSitePolicyPageModule", function() { return CoreLoginSitePolicyPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _core_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/core/shared.module */ "./src/core/shared.module.ts");
/* harmony import */ var _site_policy__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./site-policy */ "./src/core/features/login/pages/site-policy/site-policy.ts");
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
        component: _site_policy__WEBPACK_IMPORTED_MODULE_4__["CoreLoginSitePolicyPage"],
    },
];
let CoreLoginSitePolicyPageModule = class CoreLoginSitePolicyPageModule {
};
CoreLoginSitePolicyPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
            _core_shared_module__WEBPACK_IMPORTED_MODULE_3__["CoreSharedModule"],
        ],
        declarations: [
            _site_policy__WEBPACK_IMPORTED_MODULE_4__["CoreLoginSitePolicyPage"],
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CoreLoginSitePolicyPageModule);



/***/ }),

/***/ "./src/core/features/login/pages/site-policy/site-policy.scss":
/*!********************************************************************!*\
  !*** ./src/core/features/login/pages/site-policy/site-policy.scss ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host ion-list {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\n:host ion-list ion-item {\n  flex-shrink: 0;\n}\n:host ion-list .core-site-policy-iframe-container {\n  height: 100%;\n}\n:host ion-list .core-site-policy-iframe-container core-iframe {\n  height: 100%;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9jb3JlL2ZlYXR1cmVzL2xvZ2luL3BhZ2VzL3NpdGUtcG9saWN5L3NpdGUtcG9saWN5LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0FBQVI7QUFFUTtFQUNJLGNBQUE7QUFBWjtBQUdRO0VBQ0ksWUFBQTtBQURaO0FBR1k7RUFDSSxZQUFBO0VBQ0EsV0FBQTtBQURoQiIsImZpbGUiOiJzcmMvY29yZS9mZWF0dXJlcy9sb2dpbi9wYWdlcy9zaXRlLXBvbGljeS9zaXRlLXBvbGljeS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gICAgaW9uLWxpc3Qge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcblxyXG4gICAgICAgIGlvbi1pdGVtIHtcclxuICAgICAgICAgICAgZmxleC1zaHJpbms6IDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuY29yZS1zaXRlLXBvbGljeS1pZnJhbWUtY29udGFpbmVyIHtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG5cclxuICAgICAgICAgICAgY29yZS1pZnJhbWUge1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "./src/core/features/login/pages/site-policy/site-policy.ts":
/*!******************************************************************!*\
  !*** ./src/core/features/login/pages/site-policy/site-policy.ts ***!
  \******************************************************************/
/*! exports provided: CoreLoginSitePolicyPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreLoginSitePolicyPage", function() { return CoreLoginSitePolicyPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_sites__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @services/sites */ "./src/core/services/sites.ts");
/* harmony import */ var _services_utils_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @services/utils/dom */ "./src/core/services/utils/dom.ts");
/* harmony import */ var _services_utils_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @services/utils/utils */ "./src/core/services/utils/utils.ts");
/* harmony import */ var _services_utils_mimetype__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @services/utils/mimetype */ "./src/core/services/utils/mimetype.ts");
/* harmony import */ var _features_login_services_login_helper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @features/login/services/login-helper */ "./src/core/features/login/services/login-helper.ts");
/* harmony import */ var _services_navigator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @services/navigator */ "./src/core/services/navigator.ts");
/* harmony import */ var _singletons_events__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @singletons/events */ "./src/core/singletons/events.ts");
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
 * Page to accept a site policy.
 */
let CoreLoginSitePolicyPage = class CoreLoginSitePolicyPage {
    /**
     * @inheritdoc
     */
    ngOnInit() {
        this.siteId = _services_navigator__WEBPACK_IMPORTED_MODULE_7__["CoreNavigator"].getRouteParam('siteId');
        try {
            this.currentSite = _services_sites__WEBPACK_IMPORTED_MODULE_2__["CoreSites"].getRequiredCurrentSite();
        }
        catch (_a) {
            // Not logged in, stop.
            this.cancel();
            return;
        }
        const currentSiteId = this.currentSite.id;
        this.siteId = this.siteId || currentSiteId;
        if (this.siteId != currentSiteId) {
            // Not current site, stop.
            this.cancel();
            return;
        }
        this.fetchSitePolicy();
    }
    /**
     * Fetch the site policy URL.
     *
     * @return Promise resolved when done.
     */
    fetchSitePolicy() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                this.sitePolicy = yield _features_login_services_login_helper__WEBPACK_IMPORTED_MODULE_6__["CoreLoginHelper"].getSitePolicy(this.siteId);
            }
            catch (error) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_3__["CoreDomUtils"].showErrorModalDefault(error, 'Error getting site policy.');
                this.cancel();
                return;
            }
            // Try to get the mime type.
            try {
                const mimeType = yield _services_utils_utils__WEBPACK_IMPORTED_MODULE_4__["CoreUtils"].getMimeTypeFromUrl(this.sitePolicy);
                const extension = _services_utils_mimetype__WEBPACK_IMPORTED_MODULE_5__["CoreMimetypeUtils"].getExtension(mimeType, this.sitePolicy);
                this.showInline = extension == 'html' || extension == 'htm';
            }
            catch (_a) {
                // Unable to get mime type, assume it's not supported.
                this.showInline = false;
            }
            finally {
                this.policyLoaded = true;
            }
        });
    }
    /**
     * Cancel.
     *
     * @return Promise resolved when done.
     */
    cancel() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield _services_utils_utils__WEBPACK_IMPORTED_MODULE_4__["CoreUtils"].ignoreErrors(_services_sites__WEBPACK_IMPORTED_MODULE_2__["CoreSites"].logout());
            yield _services_navigator__WEBPACK_IMPORTED_MODULE_7__["CoreNavigator"].navigate('/login/sites', { reset: true });
        });
    }
    /**
     * Accept the site policy.
     *
     * @return Promise resolved when done.
     */
    accept() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield _services_utils_dom__WEBPACK_IMPORTED_MODULE_3__["CoreDomUtils"].showModalLoading('core.sending', true);
            try {
                yield _features_login_services_login_helper__WEBPACK_IMPORTED_MODULE_6__["CoreLoginHelper"].acceptSitePolicy(this.siteId);
                // Success accepting, go to site initial page.
                // Invalidate cache since some WS don't return error if site policy is not accepted.
                yield _services_utils_utils__WEBPACK_IMPORTED_MODULE_4__["CoreUtils"].ignoreErrors(this.currentSite.invalidateWsCache());
                _singletons_events__WEBPACK_IMPORTED_MODULE_8__["CoreEvents"].trigger(_singletons_events__WEBPACK_IMPORTED_MODULE_8__["CoreEvents"].SITE_POLICY_AGREED, {}, this.siteId);
                yield _services_navigator__WEBPACK_IMPORTED_MODULE_7__["CoreNavigator"].navigateToSiteHome();
            }
            catch (error) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_3__["CoreDomUtils"].showErrorModalDefault(error, 'Error accepting site policy.');
            }
            finally {
                modal.dismiss();
            }
        });
    }
};
CoreLoginSitePolicyPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'page-core-login-site-policy',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./site-policy.html */ "./node_modules/raw-loader/dist/cjs.js!./src/core/features/login/pages/site-policy/site-policy.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./site-policy.scss */ "./src/core/features/login/pages/site-policy/site-policy.scss")).default]
    })
], CoreLoginSitePolicyPage);



/***/ })

}]);
//# sourceMappingURL=pages-site-policy-site-policy-module.js.map