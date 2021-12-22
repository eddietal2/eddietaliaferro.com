"use strict";
(self["webpackChunkeddietaliaferro_com"] = self["webpackChunkeddietaliaferro_com"] || []).push([["src_app_pages_login_login_module_ts"],{

/***/ 73403:
/*!*****************************************************!*\
  !*** ./src/app/pages/login/login-routing.module.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageRoutingModule": function() { return /* binding */ LoginPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.page */ 3058);




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_0__.LoginPage
    }
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], LoginPageRoutingModule);



/***/ }),

/***/ 21053:
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.module.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageModule": function() { return /* binding */ LoginPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 7602);
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login-routing.module */ 73403);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page */ 3058);







let LoginPageModule = class LoginPageModule {
};
LoginPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _login_routing_module__WEBPACK_IMPORTED_MODULE_0__.LoginPageRoutingModule
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_1__.LoginPage]
    })
], LoginPageModule);



/***/ }),

/***/ 3058:
/*!*******************************************!*\
  !*** ./src/app/pages/login/login.page.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPage": function() { return /* binding */ LoginPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _Users_ferro_Desktop_personal_website_eddietaliaferro_com_node_modules_ngtools_webpack_src_loaders_direct_resource_js_login_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./login.page.html */ 57230);
/* harmony import */ var _login_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page.scss */ 12032);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth/auth.service */ 51228);








let LoginPage = class LoginPage {
    constructor(router, activatedRoute, auth, formBuilder) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.auth = auth;
        this.formBuilder = formBuilder;
        this.BACKEND_URL = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.url;
    }
    ngOnInit() {
        this.blogID = this.activatedRoute.snapshot.paramMap.get('id');
        console.log('From Blog Page: ' + this.blogID);
        this.loginForm = this.formBuilder.group({
            email: ['eddielacrosse2@gmail.com', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
            password: ['Et061792!', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required,]]
        });
    }
    login() {
        if (this.blogID === 'no-blog-id') {
            this.auth.login(this.loginForm.value.email, this.loginForm.value.password);
        }
        else if (this.blogID) {
            console.log(this.blogID + '...!!!');
            this.auth.login(this.loginForm.value.email, this.loginForm.value.password);
            this.router.navigate(['/blog/blog-page', this.blogID]);
        }
    }
    register() {
        this.router.navigateByUrl('register');
    }
    inputFocus(e, input) {
        console.clear();
        console.log(e);
        console.log(input);
        let emailInput = document.getElementById('email-input');
        let passwordInput = document.getElementById('password-input');
        if (input === 'email') {
            emailInput.style.border = '2px solid #3cf63c';
        }
        if (input === 'password') {
            passwordInput.style.border = '2px solid #3cf63c';
        }
    }
    inputBlur(e) {
        console.clear();
        console.log(e);
        let emailInput = document.getElementById('email-input');
        let passwordInput = document.getElementById('password-input');
        passwordInput.style.border = '2px solid white';
        emailInput.style.border = '2px solid white';
    }
};
LoginPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute },
    { type: src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder }
];
LoginPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-login',
        template: _Users_ferro_Desktop_personal_website_eddietaliaferro_com_node_modules_ngtools_webpack_src_loaders_direct_resource_js_login_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_login_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], LoginPage);



/***/ }),

/***/ 57230:
/*!************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/login/login.page.html ***!
  \************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n  <!-- ion input focus styling is in contact.page.ts via inputFocus & inputBlur -->\n  <ion-grid>\n    <!-- Blog Header and Search Bar -->\n  <ion-row class=\"ion-justify-content-center\" style=\"margin-bottom: 20px;\">\n    <ion-col class=\"ion-text-center\" size-xs=\"11\" size-sm=\"8\" size-lg=\"6\">\n      <h1 class=\"page-header\">Login</h1>\n    </ion-col>\n  </ion-row>\n\n  <ion-row class=\"ion-justify-content-center\" style=\"margin-bottom: 80px;\">\n    <ion-col size-xs=\"12\" size-sm=\"8\" size-lg=\"6\">\n      <form [formGroup]=\"loginForm\" (ngSubmit)=\"login()\">\n        <ion-item lines=\"none\">\n          <h5 class=\"alert\">Login to make comments and replies on blog posts! You can also opt in to recieve email updates for new posts.</h5>\n        </ion-item>\n        <ion-item lines=\"none\">\n          <ion-input (ionFocus)=\"inputFocus($event, 'email')\" (ionBlur)=\"inputBlur($event)\" formControlName=\"email\" type=\"email\" placeholder=\"Email\" id=\"email-input\"></ion-input>\n        </ion-item>\n        <ion-item lines=\"none\">\n          <ion-input (ionFocus)=\"inputFocus($event, 'password')\" (ionBlur)=\"inputBlur($event)\" formControlName=\"password\" type=\"password\" placeholder=\"Password\" id=\"password-input\"></ion-input>\n        </ion-item>\n        <ion-button (click)=\"login()\" class=\"gold-button\" style=\"margin: 3em auto\">\n            Login\n        </ion-button>\n      </form>\n      <div class=\"ion-text-center\">\n        <ion-button (click)=\"register()\" class=\"green-button ion-hide-lg-down\">\n          Register\n        </ion-button>\n      </div>\n    <ion-footer class=\"ion-hide-lg-up\" (click)=\"register()\">\n      <p>Register</p>\n    </ion-footer>\n    </ion-col>\n  </ion-row>\n  </ion-grid>\n</ion-content>\n");

/***/ }),

/***/ 12032:
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.page.scss ***!
  \*********************************************/
/***/ (function(module) {

module.exports = ".alert {\n  background-color: #b9b9b961;\n  border-left: solid 4px #3cf63c;\n  margin: 1em auto;\n  padding: 0.9em;\n  font-size: 1em;\n}\n\n.page-header {\n  margin-top: 5rem;\n}\n\nform {\n  background: linear-gradient(118deg, #320534 1%, rgba(48, 7, 55, 0.5) 25%, #320534 50%, rgba(38, 7, 42, 0.5) 75%, #320534 100%);\n  padding: 0.5em;\n  border-radius: 10px;\n  box-shadow: 1px 1px 40px #0000001f;\n}\n\n@media only screen and (max-width: 600px) {\n  form {\n    padding: 0.3em;\n  }\n}\n\nion-item.sc-ion-input-md-h:not(.item-label), ion-item:not(.item-label) .sc-ion-input-md-h {\n  --padding-start: 8px;\n}\n\nion-item {\n  margin: 1em;\n}\n\nion-input, ion-textarea {\n  margin-top: 1em;\n}\n\nion-footer {\n  text-align: center;\n  background: #3cf63c;\n  height: 60px;\n  position: fixed;\n  bottom: 0;\n}\n\nion-footer p {\n  color: #1b061c;\n  font-size: 1.5em;\n  position: relative;\n  top: -6px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDJCQUFBO0VBQ0EsOEJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxnQkFBQTtBQUVGOztBQUFBO0VBQ0UsOEhBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQ0FBQTtBQUdGOztBQURBO0VBQ0U7SUFDRSxjQUFBO0VBSUY7QUFDRjs7QUFGQTtFQUNFLG9CQUFBO0FBSUY7O0FBRkE7RUFDRSxXQUFBO0FBS0Y7O0FBSEE7RUFDRSxlQUFBO0FBTUY7O0FBSkE7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxTQUFBO0FBT0Y7O0FBTEU7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7QUFPSiIsImZpbGUiOiJsb2dpbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWxlcnQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjliOWI5NjE7XG4gIGJvcmRlci1sZWZ0OiBzb2xpZCA0cHggIzNjZjYzYztcbiAgbWFyZ2luOiAxZW0gYXV0bztcbiAgcGFkZGluZzogMC45ZW07XG4gIGZvbnQtc2l6ZTogMWVtO1xufVxuLnBhZ2UtaGVhZGVyIHtcbiAgbWFyZ2luLXRvcDogNXJlbTtcbn1cbmZvcm0ge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTE4ZGVnLCByZ2JhKDUwLDUsNTIsMSkgMSUsIHJnYig0OCA3IDU1IC8gNTAlKSAyNSUsIHJnYmEoNTAsNSw1MiwxKSA1MCUsIHJnYigzOCA3IDQyIC8gNTAlKSA3NSUsIHJnYmEoNTAsNSw1MiwxKSAxMDAlKTtcbiAgcGFkZGluZzogMC41ZW07XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJveC1zaGFkb3c6IDFweCAxcHggNDBweCAjMDAwMDAwMWY7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIGZvcm0ge1xuICAgIHBhZGRpbmc6IDAuM2VtO1xuICB9XG59XG5pb24taXRlbS5zYy1pb24taW5wdXQtbWQtaDpub3QoLml0ZW0tbGFiZWwpLCBpb24taXRlbTpub3QoLml0ZW0tbGFiZWwpIC5zYy1pb24taW5wdXQtbWQtaCB7XG4gIC0tcGFkZGluZy1zdGFydDogOHB4O1xufVxuaW9uLWl0ZW0ge1xuICBtYXJnaW46IDFlbTtcbn1cbmlvbi1pbnB1dCwgaW9uLXRleHRhcmVhIHtcbiAgbWFyZ2luLXRvcDogMWVtO1xufVxuaW9uLWZvb3RlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogIzNjZjYzYztcbiAgaGVpZ2h0OiA2MHB4O1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvdHRvbTogMDtcblxuICBwIHtcbiAgICBjb2xvcjogIzFiMDYxYztcbiAgICBmb250LXNpemU6IDEuNWVtO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0b3A6IC02cHg7XG4gIH1cbn0iXX0= */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_login_login_module_ts-es2015.js.map