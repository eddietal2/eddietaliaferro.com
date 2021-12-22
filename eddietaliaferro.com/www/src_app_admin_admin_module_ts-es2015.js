"use strict";
(self["webpackChunkeddietaliaferro_com"] = self["webpackChunkeddietaliaferro_com"] || []).push([["src_app_admin_admin_module_ts"],{

/***/ 13176:
/*!***********************************************!*\
  !*** ./src/app/admin/admin-routing.module.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminPageRoutingModule": function() { return /* binding */ AdminPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _admin_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./admin.page */ 60153);




const routes = [
    {
        path: '',
        redirectTo: '/admin/blogs',
        pathMatch: 'full'
    },
    {
        path: '',
        component: _admin_page__WEBPACK_IMPORTED_MODULE_0__.AdminPage,
        children: [
            {
                path: 'blogs',
                pathMatch: '/admin',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_date-fns_esm_format_index_js-node_modules_date-fns_esm_parseISO_index_js-3c5c83"), __webpack_require__.e("common"), __webpack_require__.e("src_app_admin_blogs_blogs_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./blogs/blogs.module */ 23073)).then(m => m.BlogsPageModule)
            },
            {
                path: 'projects',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_admin_projects_projects_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./projects/projects.module */ 93041)).then(m => m.ProjectsPageModule)
            },
            {
                path: 'contact',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_admin_contact_contact_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./contact/contact.module */ 37641)).then(m => m.ContactPageModule)
            },
            {
                path: 'donate',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_admin_donate_donate_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./donate/donate.module */ 37849)).then(m => m.DonatePageModule)
            }
        ]
    },
    {
        path: 'profile',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_admin_profile_profile_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./profile/profile.module */ 82690)).then(m => m.ProfilePageModule)
    },
];
let AdminPageRoutingModule = class AdminPageRoutingModule {
};
AdminPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AdminPageRoutingModule);



/***/ }),

/***/ 77095:
/*!***************************************!*\
  !*** ./src/app/admin/admin.module.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminPageModule": function() { return /* binding */ AdminPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 7602);
/* harmony import */ var _admin_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./admin-routing.module */ 13176);
/* harmony import */ var _admin_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./admin.page */ 60153);







let AdminPageModule = class AdminPageModule {
};
AdminPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _admin_routing_module__WEBPACK_IMPORTED_MODULE_0__.AdminPageRoutingModule
        ],
        declarations: [_admin_page__WEBPACK_IMPORTED_MODULE_1__.AdminPage]
    })
], AdminPageModule);



/***/ }),

/***/ 60153:
/*!*************************************!*\
  !*** ./src/app/admin/admin.page.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminPage": function() { return /* binding */ AdminPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _Users_ferro_Desktop_personal_website_eddietaliaferro_com_node_modules_ngtools_webpack_src_loaders_direct_resource_js_admin_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./admin.page.html */ 16443);
/* harmony import */ var _admin_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./admin.page.scss */ 72149);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);




let AdminPage = class AdminPage {
    constructor() { }
    ngOnInit() {
    }
};
AdminPage.ctorParameters = () => [];
AdminPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-admin',
        template: _Users_ferro_Desktop_personal_website_eddietaliaferro_com_node_modules_ngtools_webpack_src_loaders_direct_resource_js_admin_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_admin_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], AdminPage);



/***/ }),

/***/ 16443:
/*!******************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/admin/admin.page.html ***!
  \******************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n  <ion-split-pane contentId=\"admin\">\n    <!--  the side menu  -->\n    <ion-menu contentId=\"admin\">\n      <ion-list>\n        <ion-item lines=\"none\">\n          <ion-label>\n            <a routerLink=\"/admin/blogs\" routerLinkActive=\"selected\">Blogs</a>\n          </ion-label>\n        </ion-item>\n        <ion-item lines=\"none\">\n          <ion-label>\n            <a routerLink=\"/admin/projects\" routerLinkActive=\"selected\">Projects</a>\n          </ion-label>\n        </ion-item>\n        <ion-item lines=\"none\">\n          <ion-label>\n            <a routerLink=\"/admin/contact\" routerLinkActive=\"selected\">Messages</a>\n          </ion-label>\n        </ion-item>\n        <ion-item lines=\"none\">\n          <ion-label>\n            <a routerLink=\"/admin/donate\" routerLinkActive=\"selected\">Donate</a>\n          </ion-label>\n        </ion-item>\n      </ion-list>\n    </ion-menu>\n    <!-- the main content -->\n    <ion-router-outlet id=\"admin\"></ion-router-outlet>\n  </ion-split-pane>\n</ion-content>\n");

/***/ }),

/***/ 72149:
/*!***************************************!*\
  !*** ./src/app/admin/admin.page.scss ***!
  \***************************************/
/***/ (function(module) {

module.exports = "ion-grid {\n  background-image: url('Matrix-Background.svg');\n  background-attachment: fixed;\n  background-size: cover;\n  --color: white;\n}\n\n@media only screen and (max-width: 600px) {\n  ion-grid {\n    background-image: url('Matrix-Background-Mobile.svg');\n    background-size: cover;\n    background-repeat: no-repeat;\n  }\n}\n\nion-menu {\n  --background: #111;\n  --width: 100px;\n}\n\nion-split-pane {\n  --side-min-width: 200px;\n  --side-max-width: 200px;\n  --side-width: 200px;\n}\n\nion-list {\n  margin: 150px 12px auto 0;\n  background: none;\n}\n\nion-list ion-item {\n  text-align: right;\n  font-size: 1em;\n  --background: none;\n}\n\nion-list ion-item a {\n  color: white;\n}\n\nion-list ion-item .selected {\n  color: #00c400;\n  font-weight: 600;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkbWluLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDhDQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7QUFDRjs7QUFDQTtFQUNFO0lBQ0UscURBQUE7SUFDQSxzQkFBQTtJQUNBLDRCQUFBO0VBRUY7QUFDRjs7QUFBQTtFQUNFLGtCQUFBO0VBQ0EsY0FBQTtBQUVGOztBQUFBO0VBQ0UsdUJBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBR0Y7O0FBREE7RUFDRSx5QkFBQTtFQUNBLGdCQUFBO0FBSUY7O0FBRkU7RUFDRSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQUlKOztBQUZJO0VBQ0UsWUFBQTtBQUlOOztBQUZJO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0FBSU4iLCJmaWxlIjoiYWRtaW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWdyaWQge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uL2Fzc2V0cy9pbGx1c3RyYXRpb25zL01hdHJpeC1CYWNrZ3JvdW5kLnN2ZycpO1xuICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAtLWNvbG9yOiB3aGl0ZTtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgaW9uLWdyaWQge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vYXNzZXRzL2lsbHVzdHJhdGlvbnMvTWF0cml4LUJhY2tncm91bmQtTW9iaWxlLnN2ZycpO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgfVxufVxuaW9uLW1lbnUge1xuICAtLWJhY2tncm91bmQ6ICMxMTE7XG4gIC0td2lkdGg6IDEwMHB4O1xufVxuaW9uLXNwbGl0LXBhbmUge1xuICAtLXNpZGUtbWluLXdpZHRoOiAyMDBweDtcbiAgLS1zaWRlLW1heC13aWR0aDogMjAwcHg7XG4gIC0tc2lkZS13aWR0aDogMjAwcHg7XG59XG5pb24tbGlzdCB7XG4gIG1hcmdpbjogMTUwcHggMTJweCBhdXRvIDA7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG5cbiAgaW9uLWl0ZW0ge1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgIGZvbnQtc2l6ZTogMWVtO1xuICAgIC0tYmFja2dyb3VuZDogbm9uZTtcblxuICAgIGEge1xuICAgICAgY29sb3I6IHdoaXRlO1xuICAgIH1cbiAgICAuc2VsZWN0ZWQge1xuICAgICAgY29sb3I6ICMwMGM0MDA7XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuICAgIH1cbiAgfVxufSJdfQ== */";

/***/ })

}]);
//# sourceMappingURL=src_app_admin_admin_module_ts-es2015.js.map