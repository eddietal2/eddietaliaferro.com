"use strict";
(self["webpackChunkeddietaliaferro_com"] = self["webpackChunkeddietaliaferro_com"] || []).push([["src_app_pages_register_success_success_module_ts"],{

/***/ 81760:
/*!******************************************************************!*\
  !*** ./src/app/pages/register/success/success-routing.module.ts ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SuccessPageRoutingModule": function() { return /* binding */ SuccessPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _success_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./success.page */ 65510);




const routes = [
    {
        path: '',
        component: _success_page__WEBPACK_IMPORTED_MODULE_0__.SuccessPage
    }
];
let SuccessPageRoutingModule = class SuccessPageRoutingModule {
};
SuccessPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SuccessPageRoutingModule);



/***/ }),

/***/ 10143:
/*!**********************************************************!*\
  !*** ./src/app/pages/register/success/success.module.ts ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SuccessPageModule": function() { return /* binding */ SuccessPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 7602);
/* harmony import */ var _success_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./success-routing.module */ 81760);
/* harmony import */ var _success_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./success.page */ 65510);







let SuccessPageModule = class SuccessPageModule {
};
SuccessPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _success_routing_module__WEBPACK_IMPORTED_MODULE_0__.SuccessPageRoutingModule
        ],
        declarations: [_success_page__WEBPACK_IMPORTED_MODULE_1__.SuccessPage]
    })
], SuccessPageModule);



/***/ }),

/***/ 65510:
/*!********************************************************!*\
  !*** ./src/app/pages/register/success/success.page.ts ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SuccessPage": function() { return /* binding */ SuccessPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _Users_ferro_Desktop_personal_website_eddietaliaferro_com_node_modules_ngtools_webpack_src_loaders_direct_resource_js_success_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./success.page.html */ 47151);
/* harmony import */ var _success_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./success.page.scss */ 42925);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 71258);





let SuccessPage = class SuccessPage {
    constructor(activatedRoute) {
        this.activatedRoute = activatedRoute;
    }
    ngOnInit() {
        this.firstName = this.activatedRoute.snapshot.paramMap.get('firstName');
        this.picture = this.activatedRoute.snapshot.paramMap.get('picture');
    }
};
SuccessPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.ActivatedRoute }
];
SuccessPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-success',
        template: _Users_ferro_Desktop_personal_website_eddietaliaferro_com_node_modules_ngtools_webpack_src_loaders_direct_resource_js_success_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_success_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], SuccessPage);



/***/ }),

/***/ 47151:
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/register/success/success.page.html ***!
  \*************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n  <ion-grid>\n    <ion-row class=\"ion-justify-content-center\">\n      <ion-col style=\"margin-top: 5em;\" class=\"ion-text-center\" size=\"8\">\n        <img width=\"200\" style=\"border-radius: 200px;\" src=\"{{picture}}\" alt=\"\">\n      </ion-col>\n      <ion-col size=\"8\">\n        <p>Thanks {{firstName}} for signing up for my site! I look forward to interacting with you, and I hope you get something out of this site!</p>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>");

/***/ }),

/***/ 42925:
/*!**********************************************************!*\
  !*** ./src/app/pages/register/success/success.page.scss ***!
  \**********************************************************/
/***/ (function(module) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdWNjZXNzLnBhZ2Uuc2NzcyJ9 */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_register_success_success_module_ts-es2015.js.map