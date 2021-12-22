"use strict";
(self["webpackChunkeddietaliaferro_com"] = self["webpackChunkeddietaliaferro_com"] || []).push([["src_app_pages_contact_contact_module_ts"],{

/***/ 92388:
/*!*********************************************************!*\
  !*** ./src/app/pages/contact/contact-routing.module.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContactPageRoutingModule": function() { return /* binding */ ContactPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _contact_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contact.page */ 13256);




const routes = [
    {
        path: '',
        component: _contact_page__WEBPACK_IMPORTED_MODULE_0__.ContactPage
    }
];
let ContactPageRoutingModule = class ContactPageRoutingModule {
};
ContactPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ContactPageRoutingModule);



/***/ }),

/***/ 17213:
/*!*************************************************!*\
  !*** ./src/app/pages/contact/contact.module.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContactPageModule": function() { return /* binding */ ContactPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 7602);
/* harmony import */ var _contact_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contact-routing.module */ 92388);
/* harmony import */ var _contact_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contact.page */ 13256);
/* harmony import */ var src_app_components_custom_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/custom-components.module */ 52719);








let ContactPageModule = class ContactPageModule {
};
ContactPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _contact_routing_module__WEBPACK_IMPORTED_MODULE_0__.ContactPageRoutingModule,
            src_app_components_custom_components_module__WEBPACK_IMPORTED_MODULE_2__.CustomComponentsModule
        ],
        declarations: [_contact_page__WEBPACK_IMPORTED_MODULE_1__.ContactPage]
    })
], ContactPageModule);



/***/ }),

/***/ 13256:
/*!***********************************************!*\
  !*** ./src/app/pages/contact/contact.page.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContactPage": function() { return /* binding */ ContactPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _Users_ferro_Desktop_personal_website_eddietaliaferro_com_node_modules_ngtools_webpack_src_loaders_direct_resource_js_contact_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./contact.page.html */ 28606);
/* harmony import */ var _contact_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contact.page.scss */ 16086);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 7602);
/* harmony import */ var src_app_services_contact_contact_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/contact/contact.service */ 54329);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 98636);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 18293);
/* harmony import */ var src_app_components_success_modal_success_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/components/success-modal/success-modal.component */ 54575);










let ContactPage = class ContactPage {
    constructor(formBuilder, modalController, alertController, contact, router) {
        this.formBuilder = formBuilder;
        this.modalController = modalController;
        this.alertController = alertController;
        this.contact = contact;
        this.router = router;
        this.validationMessasges = {
            email: [
                { type: 'email', message: 'Please enter a valid email address' }
            ],
        };
    }
    ngOnInit() {
        this.contactForm = this.formBuilder.group({
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
            message: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required,]]
        });
    }
    sendMessage(data) {
        console.log(this.contactForm.controls);
        if (!this.contactForm.controls.name.touched) {
            this.presentAlert('No Name provided in form', 'Please enter your name.');
            return;
        }
        if (!this.contactForm.controls.email.touched) {
            this.presentAlert('No Email provided in form', 'Please enter your email.');
            return;
        }
        if (!this.contactForm.controls.message.touched) {
            this.presentAlert('No Message provided in form', 'Please enter a message.');
            return;
        }
        if (!this.contactForm.controls.name.valid) {
            this.presentAlert('Please enter a valid Name', 'Please make sure your name is valid');
            return;
        }
        if (!this.contactForm.controls.email.valid) {
            this.presentAlert('Please enter a valid email', 'Make sure you have a correctly formatted email address.');
            return;
        }
        if (!this.contactForm.controls.message.valid) {
            this.presentAlert('Please enter a valid message', 'There was an issue with your message.');
            return;
        }
        this.contact.sendMessage(data)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.tap)(res => {
            if (!res) {
                console.log('There was no response.');
            }
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.catchError)(e => {
            console.error(e);
            if (e.error.msg === 'There was no message that saved.') {
                this.presentAlert('Error', 'There was an error with sending the message. Please try again later');
            }
            if (e.error.msg === 'Message does not have all properties!') {
                this.presentAlert('Form incomplete', 'The form needs all fields to be complete.');
            }
            else {
                this.presentAlert('Server Error', 'There was an error with the server. Please come back later.');
            }
            throw new Error(e);
        }))
            .subscribe(data => {
            console.log(data);
            this.contactForm.reset();
            this.presentSuccessModal();
        });
    }
    presentAlert(header, msg) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'success-alert',
                header,
                message: msg,
                buttons: [{
                        text: 'OK'
                    }]
            });
            yield alert.present();
        });
    }
    presentSuccessModal() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: src_app_components_success_modal_success_modal_component__WEBPACK_IMPORTED_MODULE_3__.SuccessModalComponent,
                componentProps: {
                    'fullName': this.contactForm.value.name,
                    'email': this.contactForm.value.email,
                    'page': 'contact',
                },
                cssClass: 'my-custom-class'
            });
            return yield modal.present()
                .catch((e) => {
                throw Error(e);
            })
                .then(() => {
                this.router.navigateByUrl('/contact');
                setTimeout(() => {
                    modal.dismiss();
                }, 5000);
            });
        });
    }
    donatePage() {
    }
    inputFocus(e, input) {
        console.clear();
        console.log(e);
        console.log(input);
        let fullnameInput = document.getElementById('full-name-input');
        let emailInput = document.getElementById('email-input');
        let messageInput = document.getElementById('message-input');
        if (input === 'full-name') {
            fullnameInput.style.border = '2px solid #3cf63c';
        }
        if (input === 'email') {
            emailInput.style.border = '2px solid #3cf63c';
        }
        if (input === 'message') {
            messageInput.style.border = '2px solid #3cf63c';
        }
    }
    inputBlur(e) {
        console.clear();
        console.log(e);
        let fullnameInput = document.getElementById('full-name-input');
        let emailInput = document.getElementById('email-input');
        let messageInput = document.getElementById('message-input');
        fullnameInput.style.border = '2px solid white';
        emailInput.style.border = '2px solid white';
        messageInput.style.border = '2px solid white';
    }
};
ContactPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ModalController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.AlertController },
    { type: src_app_services_contact_contact_service__WEBPACK_IMPORTED_MODULE_2__.ContactService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.Router }
];
ContactPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-contact',
        template: _Users_ferro_Desktop_personal_website_eddietaliaferro_com_node_modules_ngtools_webpack_src_loaders_direct_resource_js_contact_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_contact_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], ContactPage);



/***/ }),

/***/ 28606:
/*!****************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/contact/contact.page.html ***!
  \****************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n  <ion-grid>\n    <!-- Contact Illustration -->\n    <ion-row class=\"ion-justify-content-center\">\n      <ion-col class=\"ion-text-center\" size-xs=\"11\" size-sm=\"8\" size-lg=\"6\">\n        <app-contact-illustration></app-contact-illustration>\n        <svg style=\"position: absolute; top: -50px; left: 140px; animation: clouds-fade-in 5s ease-in infinite;\" width=\"300px\" height=\"300px\" viewBox=\"0 0 1050 1050\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\n          <path d=\"M197,665 C237.316787,665 270,697.683213 270,738 C270,743.559735 269.378471,748.974304 268.201105,754.178016 C289.633294,766.895133 304,790.269804 304,817 C304,857.316787 271.316787,890 231,890 C208.351534,890 188.112051,879.68592 174.722339,863.498548 C161.590125,876.191023 143.707004,884 124,884 C83.6832133,884 51,851.316787 51,811 C51,770.683213 83.6832133,738 124,738 L124,738 L124.00978,736.792812 C124.654428,697.032817 157.086381,665 197,665 Z\" id=\"Smoke-cloud-2\" fill=\"url(#linearGradient-4)\"></path>\n      </svg>\n        <svg style=\"position: absolute; top: -50px; left: 140px; animation: clouds-fade-in 5s ease-in 0.5s infinite;\" width=\"300px\" height=\"300px\" viewBox=\"0 0 1050 1050\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\n          <path d=\"M175,799 C215.316787,799 248,831.683213 248,872 C248,877.559735 247.378471,882.974304 246.201105,888.178016 C267.633294,900.895133 282,924.269804 282,951 C282,991.316787 249.316787,1024 209,1024 C186.351534,1024 166.112051,1013.68592 152.722339,997.498548 C139.590125,1010.19102 121.707004,1018 102,1018 C61.6832133,1018 29,985.316787 29,945 C29,904.683213 61.6832133,872 102,872 L102,872 L102.00978,870.792812 C102.654428,831.032817 135.086381,799 175,799 Z\" id=\"Smoke-cloud-1\" fill=\"url(#linearGradient-4)\"></path>\n      </svg>\n      </ion-col>\n    </ion-row>\n    <!-- Blog Header and Search Bar -->\n  <ion-row class=\"ion-justify-content-center\" style=\"margin-bottom: 20px;\">\n    <ion-col class=\"ion-text-center\" size-xs=\"11\" size-sm=\"8\" size-lg=\"6\">\n      <h1 class=\"page-header\">Contact Me</h1>\n    </ion-col>\n  </ion-row>\n\n\n  <ion-row class=\"ion-justify-content-center\">\n    <ion-col style=\"margin-bottom: 3em\"  size-xs=\"12\" size-sm=\"8\" size-lg=\"6\">\n      <form [formGroup]=\"contactForm\" (ngSubmit)=\"sendMessage(this.contactForm.value)\">\n        <ion-item lines=\"none\">\n          <p class=\"alert\">Have a question? Found a bug? Want to do business? Just have something nice to say? Leave me a message!</p>\n        </ion-item>\n        <ion-item lines=\"none\">\n          <ion-input (ionFocus)=\"inputFocus($event, 'full-name')\" (ionBlur)=\"inputBlur($event)\" id=\"full-name-input\" formControlName=\"name\" type=\"text\" placeholder=\"First & Last name\"></ion-input>\n        </ion-item>\n        <ion-item lines=\"none\">\n          <ion-input (ionFocus)=\"inputFocus($event, 'email')\" (ionBlur)=\"inputBlur($event)\" id=\"email-input\" formControlName=\"email\" type=\"email\" placeholder=\"Email address\"></ion-input>\n        </ion-item>\n        <!-- Email Validation-->\n        <div class=\"validation-errors\">\n          <ng-container *ngFor=\"let validation of validationMessasges.email\">\n            <div class=\"error-message\"\n              *ngIf=\"contactForm\n                .get('email')\n                .hasError(validation.type) && (contactForm.get('email')\n                .dirty || contactForm.get('email').touched)\">\n              {{ validation.message }}\n            </div>\n          </ng-container>\n        </div>\n        <ion-item lines=\"none\">\n          <ion-textarea (ionFocus)=\"inputFocus($event, 'message')\" (ionBlur)=\"inputBlur($event)\"\n          id=\"message-input\"\n          style=\"padding-left: 0.5em;\"\n          formControlName=\"message\"\n          class=\"contact-message\"\n          rows=\"15\" cols=\"20\"\n          placeholder=\"Please enter your message here\"></ion-textarea>\n        </ion-item>\n        <ion-item class=\"ion-text-center\" lines=\"none\">\n          <ion-button type=\"submit\" class=\"green-button ion-hide-lg-down\">\n            Send\n          </ion-button>\n        </ion-item>\n      </form>\n    </ion-col>\n  </ion-row>\n\n  </ion-grid>\n</ion-content>\n");

/***/ }),

/***/ 16086:
/*!*************************************************!*\
  !*** ./src/app/pages/contact/contact.page.scss ***!
  \*************************************************/
/***/ (function(module) {

module.exports = "#Smoke-cloud-1, #Smoke-cloud-2 {\n  opacity: 0;\n  -webkit-animation: clouds-fade-in 5s ease-in infinite;\n          animation: clouds-fade-in 5s ease-in infinite;\n}\n\n@-webkit-keyframes clouds-fade-in {\n  0% {\n    opacity: 0;\n    transform: translateX(0px);\n  }\n  25% {\n    opacity: 0;\n    transform: translateX(0px);\n  }\n  55% {\n    opacity: 0;\n    transform: translateX(0px);\n  }\n  65% {\n    opacity: 1;\n    transform: translateX(-10px);\n  }\n  85% {\n    opacity: 1;\n    transform: translateX(0px);\n  }\n  95% {\n    opacity: 1;\n    transform: translateX(10px);\n  }\n  100% {\n    opacity: 0;\n    transform: translateX(20px);\n  }\n}\n\n@keyframes clouds-fade-in {\n  0% {\n    opacity: 0;\n    transform: translateX(0px);\n  }\n  25% {\n    opacity: 0;\n    transform: translateX(0px);\n  }\n  55% {\n    opacity: 0;\n    transform: translateX(0px);\n  }\n  65% {\n    opacity: 1;\n    transform: translateX(-10px);\n  }\n  85% {\n    opacity: 1;\n    transform: translateX(0px);\n  }\n  95% {\n    opacity: 1;\n    transform: translateX(10px);\n  }\n  100% {\n    opacity: 0;\n    transform: translateX(20px);\n  }\n}\n\n.alert {\n  background-color: #b9b9b961;\n  border-left: solid 4px #3cf63c;\n  margin: 1em auto;\n  padding: 0.9em;\n  font-size: 1em;\n}\n\nform {\n  background: linear-gradient(118deg, #320534 1%, rgba(48, 7, 55, 0.5) 25%, #320534 50%, rgba(38, 7, 42, 0.5) 75%, #320534 100%);\n  padding: 1em;\n  border-radius: 10px;\n  box-shadow: 1px 1px 40px #0000001f;\n}\n\n@media only screen and (max-width: 600px) {\n  form {\n    padding: 0.3em;\n  }\n}\n\nion-item.sc-ion-input-md-h:not(.item-label), ion-item:not(.item-label) .sc-ion-input-md-h {\n  --padding-start: 8px;\n}\n\nion-input, ion-textarea {\n  margin-top: 1em;\n}\n\nion-footer {\n  margin-top: 10em;\n  text-align: center;\n  background: #3cf63c;\n  height: 60px;\n}\n\nion-footer p {\n  color: #1b061c;\n  font-size: 1.5em;\n  position: relative;\n  top: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhY3QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsVUFBQTtFQUNBLHFEQUFBO1VBQUEsNkNBQUE7QUFDRjs7QUFDQTtFQUNFO0lBQ0UsVUFBQTtJQUNBLDBCQUFBO0VBRUY7RUFBQTtJQUNFLFVBQUE7SUFDQSwwQkFBQTtFQUVGO0VBQUE7SUFDRSxVQUFBO0lBQ0EsMEJBQUE7RUFFRjtFQUFBO0lBQ0UsVUFBQTtJQUNBLDRCQUFBO0VBRUY7RUFBQTtJQUNFLFVBQUE7SUFDQSwwQkFBQTtFQUVGO0VBQUE7SUFDRSxVQUFBO0lBQ0EsMkJBQUE7RUFFRjtFQUFBO0lBQ0UsVUFBQTtJQUNBLDJCQUFBO0VBRUY7QUFDRjs7QUE5QkE7RUFDRTtJQUNFLFVBQUE7SUFDQSwwQkFBQTtFQUVGO0VBQUE7SUFDRSxVQUFBO0lBQ0EsMEJBQUE7RUFFRjtFQUFBO0lBQ0UsVUFBQTtJQUNBLDBCQUFBO0VBRUY7RUFBQTtJQUNFLFVBQUE7SUFDQSw0QkFBQTtFQUVGO0VBQUE7SUFDRSxVQUFBO0lBQ0EsMEJBQUE7RUFFRjtFQUFBO0lBQ0UsVUFBQTtJQUNBLDJCQUFBO0VBRUY7RUFBQTtJQUNFLFVBQUE7SUFDQSwyQkFBQTtFQUVGO0FBQ0Y7O0FBQUE7RUFDRSwyQkFBQTtFQUNBLDhCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtBQUVGOztBQUFBO0VBQ0UsOEhBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQ0FBQTtBQUdGOztBQURBO0VBQ0U7SUFDRSxjQUFBO0VBSUY7QUFDRjs7QUFGQTtFQUNFLG9CQUFBO0FBSUY7O0FBRkE7RUFDRSxlQUFBO0FBS0Y7O0FBSEE7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FBTUY7O0FBSkU7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7QUFNSiIsImZpbGUiOiJjb250YWN0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNTbW9rZS1jbG91ZC0xLCAjU21va2UtY2xvdWQtMiB7XG4gIG9wYWNpdHk6IDA7XG4gIGFuaW1hdGlvbjogY2xvdWRzLWZhZGUtaW4gNXMgZWFzZS1pbiBpbmZpbml0ZTtcbn1cbkBrZXlmcmFtZXMgY2xvdWRzLWZhZGUtaW4ge1xuICAwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMHB4KTtcbiAgfVxuICAyNSUge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDBweCk7XG4gIH1cbiAgNTUlIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwcHgpO1xuICB9XG4gIDY1JSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwcHgpO1xuICB9XG4gIDg1JSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMHB4KTtcbiAgfVxuICA5NSUge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwcHgpO1xuICB9XG4gIDEwMCUge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDIwcHgpO1xuICB9XG59XG4uYWxlcnQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjliOWI5NjE7XG4gIGJvcmRlci1sZWZ0OiBzb2xpZCA0cHggIzNjZjYzYztcbiAgbWFyZ2luOiAxZW0gYXV0bztcbiAgcGFkZGluZzogMC45ZW07XG4gIGZvbnQtc2l6ZTogMWVtO1xufVxuZm9ybSB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMThkZWcsIHJnYmEoNTAsNSw1MiwxKSAxJSwgcmdiKDQ4IDcgNTUgLyA1MCUpIDI1JSwgcmdiYSg1MCw1LDUyLDEpIDUwJSwgcmdiKDM4IDcgNDIgLyA1MCUpIDc1JSwgcmdiYSg1MCw1LDUyLDEpIDEwMCUpO1xuICBwYWRkaW5nOiAxZW07XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJveC1zaGFkb3c6IDFweCAxcHggNDBweCAjMDAwMDAwMWY7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIGZvcm0ge1xuICAgIHBhZGRpbmc6IDAuM2VtO1xuICB9XG59XG5pb24taXRlbS5zYy1pb24taW5wdXQtbWQtaDpub3QoLml0ZW0tbGFiZWwpLCBpb24taXRlbTpub3QoLml0ZW0tbGFiZWwpIC5zYy1pb24taW5wdXQtbWQtaCB7XG4gIC0tcGFkZGluZy1zdGFydDogOHB4O1xufVxuaW9uLWlucHV0LCBpb24tdGV4dGFyZWEge1xuICBtYXJnaW4tdG9wOiAxZW07XG59XG5pb24tZm9vdGVyIHtcbiAgbWFyZ2luLXRvcDogMTBlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiAjM2NmNjNjO1xuICBoZWlnaHQ6IDYwcHg7XG5cbiAgcCB7XG4gICAgY29sb3I6ICMxYjA2MWM7XG4gICAgZm9udC1zaXplOiAxLjVlbTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdG9wOiAxNXB4O1xuICB9XG59Il19 */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_contact_contact_module_ts-es2015.js.map