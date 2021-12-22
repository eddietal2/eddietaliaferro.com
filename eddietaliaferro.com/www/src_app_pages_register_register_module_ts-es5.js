(function () {
  "use strict";

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkeddietaliaferro_com"] = self["webpackChunkeddietaliaferro_com"] || []).push([["src_app_pages_register_register_module_ts"], {
    /***/
    81557:
    /*!***********************************************************!*\
      !*** ./src/app/pages/register/register-routing.module.ts ***!
      \***********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "RegisterPageRoutingModule": function RegisterPageRoutingModule() {
          return (
            /* binding */
            _RegisterPageRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! tslib */
      3786);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var _register_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./register.page */
      66690);

      var routes = [{
        path: '',
        component: _register_page__WEBPACK_IMPORTED_MODULE_0__.RegisterPage
      }, {
        path: 'success/:firstName/:picture',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_pages_register_success_success_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./success/success.module */
          10143)).then(function (m) {
            return m.SuccessPageModule;
          });
        }
      }];

      var _RegisterPageRoutingModule = function RegisterPageRoutingModule() {
        _classCallCheck(this, RegisterPageRoutingModule);
      };

      _RegisterPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _RegisterPageRoutingModule);
      /***/
    },

    /***/
    60207:
    /*!***************************************************!*\
      !*** ./src/app/pages/register/register.module.ts ***!
      \***************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "RegisterPageModule": function RegisterPageModule() {
          return (
            /* binding */
            _RegisterPageModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      3786);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      7602);
      /* harmony import */


      var _register_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./register-routing.module */
      81557);
      /* harmony import */


      var _register_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./register.page */
      66690);

      var _RegisterPageModule = function RegisterPageModule() {
        _classCallCheck(this, RegisterPageModule);
      };

      _RegisterPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _register_routing_module__WEBPACK_IMPORTED_MODULE_0__.RegisterPageRoutingModule],
        declarations: [_register_page__WEBPACK_IMPORTED_MODULE_1__.RegisterPage]
      })], _RegisterPageModule);
      /***/
    },

    /***/
    66690:
    /*!*************************************************!*\
      !*** ./src/app/pages/register/register.page.ts ***!
      \*************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "RegisterPage": function RegisterPage() {
          return (
            /* binding */
            _RegisterPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! tslib */
      3786);
      /* harmony import */


      var _Users_ferro_Desktop_personal_website_eddietaliaferro_com_node_modules_ngtools_webpack_src_loaders_direct_resource_js_register_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./register.page.html */
      12004);
      /* harmony import */


      var _register_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./register.page.scss */
      39917);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @ionic/angular */
      7602);
      /* harmony import */


      var src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/auth/auth.service */
      51228);
      /* harmony import */


      var src_app_services_pictures_pictures_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/pictures/pictures.service */
      1311);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! rxjs/operators */
      98636);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! rxjs/operators */
      18293);
      /* harmony import */


      var src_app_components_success_modal_success_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/components/success-modal/success-modal.component */
      54575);

      var _RegisterPage = /*#__PURE__*/function () {
        function RegisterPage(router, auth, alertController, modalController, pictureService, formBuilder) {
          _classCallCheck(this, RegisterPage);

          this.router = router;
          this.auth = auth;
          this.alertController = alertController;
          this.modalController = modalController;
          this.pictureService = pictureService;
          this.formBuilder = formBuilder;
          this.passwordShow = false;
          this.validCode = false;
          this.code = '';
          this.validationMessasges = {
            email: [{
              type: 'email',
              message: 'Please enter a valid email address'
            }],
            password: [{
              type: 'password',
              message: 'Please enter a valid password that is at least 6 characters long'
            }]
          };
        }

        _createClass(RegisterPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.registerForm = this.formBuilder.group({
              firstName: ['John', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
              lastName: ['Doe', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
              // picture: ['', [Validators.required]],
              email: ['networkbiz92@gmail.com', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.email]],
              password: ['123456', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]]
            });
            console.log(this.registerForm.valid);
          }
        }, {
          key: "back",
          value: function back() {
            if (!this.auth.blogID) {
              this.router.navigate(['login', '']);
            } else {
              return this.router.navigate(['login', this.auth.blogID]);
            }
          }
        }, {
          key: "register",
          value: function register() {
            var _this = this;

            console.clear();
            console.log('Registering User Data: ');
            console.log(this.registerForm.value);
            this.getPictureS3URL();
            var fullName = this.registerForm.value.firstName + ' ' + this.registerForm.value.lastName;
            var email = this.registerForm.value.email;
            var picture = this.registerForm.value.picture;
            var password = this.registerForm.value.password;
            this.emailCheckSub = this.auth.checkEmail(email).subscribe(function (data) {
              console.log(data);

              if (data['isEmail']) {
                _this.presentAlert('Use different Email', 'There is a user that already exists with this email.\n' + email);

                return;
              } else {
                return _this.codeAlert('6 Digit Code', 'An email has been sent to the email you provided with a 6 digit code. Please Enter the correct code to finish signing up.', fullName, picture, email, password);
              }
            });
          }
        }, {
          key: "passwordShowToggle",
          value: function passwordShowToggle() {
            var passwordInput = document.getElementById('password-input');

            if (!this.passwordShow) {
              passwordInput.setAttribute('type', 'text');
              console.log(passwordInput);
              this.passwordShow = true;
              return;
            } else {
              passwordInput.setAttribute('type', 'password');
              console.log(passwordInput);
              this.passwordShow = false;
              return;
            }
          }
        }, {
          key: "inputFocus",
          value: function inputFocus(e, input) {
            console.clear();
            console.log(e);
            console.log(input);
            var firstNameInput = document.getElementById('first-name-input');
            var lastNameInput = document.getElementById('last-name-input');
            var emailInput = document.getElementById('email-input');
            var passwordInput = document.getElementById('password-input');

            if (input === 'firstName') {
              firstNameInput.style.border = '2px solid #3cf63c';
            }

            if (input === 'lastName') {
              lastNameInput.style.border = '2px solid #3cf63c';
            }

            if (input === 'email') {
              emailInput.style.border = '2px solid #3cf63c';
            }

            if (input === 'password') {
              passwordInput.style.border = '2px solid #3cf63c';
            }
          }
        }, {
          key: "inputBlur",
          value: function inputBlur(e) {
            console.clear();
            console.log(e);
            var firstNameInput = document.getElementById('first-name-input');
            var lastNameInput = document.getElementById('last-name-input');
            var emailInput = document.getElementById('email-input');
            var passwordInput = document.getElementById('password-input');
            firstNameInput.style.border = '2px solid white';
            lastNameInput.style.border = '2px solid white';
            emailInput.style.border = '2px solid white';
            passwordInput.style.border = '2px solid white';
          }
        }, {
          key: "getPictureFile",
          value: function getPictureFile(event) {
            var _this2 = this;

            var pictureOne = document.getElementById('picture-input');
            var reader = new FileReader();

            if (pictureOne) {
              reader.readAsDataURL(event.target.files[0]);
            }

            reader.addEventListener('load', function () {
              // Convert image file ot base64 string
              _this2.pictureDataURL = reader.result;
              console.log(_this2.pictureDataURL);
            }, false);
          }
        }, {
          key: "getPictureS3URL",
          value: function getPictureS3URL() {
            var _this3 = this;

            if (!this.pictureDataURL) {
              this.registerForm.value.picture = 'https://eddietaliaferro-com.s3.us-east-2.amazonaws.com/picture/001001635260303625_picture.png';
              return;
            } else {
              var formData = new FormData();
              var pictureOneFile = new File([this.dataURLtoBlob(this.pictureDataURL)], 'user-profile-picture.png');
              formData.append('user-profile-picture', pictureOneFile);
              this.pictureService.userProfilePictureUpload(formData).subscribe(function (pictureURL) {
                _this3.registerForm.value.picture = pictureURL['objectUrl'];
              });
            }
          }
        }, {
          key: "dataURLtoBlob",
          value: function dataURLtoBlob(dataurl) {
            // console.log(dataurl)
            if (!dataurl) {
              this.registerForm.value.picture = 'https://eddietaliaferro-com.s3.us-east-2.amazonaws.com/picture/001001635260303625_picture.png';
              return;
            }

            var arr = dataurl.split(',');
            var mime = arr[0].match(/:(.*?);/)[1];
            var bstr = atob(arr[1]);
            var n = bstr.length;
            var u8arr = new Uint8Array(n);

            while (n--) {
              u8arr[n] = bstr.charCodeAt(n);
            }

            return new Blob([u8arr], {
              type: mime
            });
          }
        }, {
          key: "noPictureAlert",
          value: function noPictureAlert() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var alert;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.alertController.create({
                        cssClass: 'danger-alert',
                        message: 'Please upload a profile picture!',
                        buttons: [{
                          text: 'OK'
                        }]
                      });

                    case 2:
                      alert = _context.sent;
                      _context.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "presentAlert",
          value: function presentAlert(header, msg) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var alert;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.alertController.create({
                        cssClass: 'danger-alert',
                        header: header,
                        message: msg,
                        buttons: [{
                          text: 'OK'
                        }]
                      });

                    case 2:
                      alert = _context2.sent;
                      _context2.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "codeAlert",
          value: function codeAlert(header, msg, fullName, picture, email, password) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var _this4 = this;

              var alert;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
                      return this.alertController.create({
                        cssClass: 'danger-alert',
                        header: header,
                        message: msg,
                        buttons: [{
                          text: 'Submit',
                          handler: function handler() {
                            console.log('Confirm Okay');

                            if (_this4.validCode) {
                              var emailCheckPromise = new Promise(function (res, rej) {
                                res(_this4.emailCheckSub.unsubscribe());
                                rej(console.log('emialCheckSubPromise Rejected'));
                              });

                              _this4.auth.register(fullName, picture, email, password).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.tap)(function (res) {
                                if (!res) {
                                  console.log('There was no response.');
                                }
                              }), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.catchError)(function (e) {
                                console.error(e);

                                if (e.error.msg === 'The user already exists') {
                                  _this4.presentAlert('Use different Email', 'There is a user that already exists with this email.');
                                } else {
                                  _this4.presentAlert('Server Error', 'There was an error with the server. Please come back later.');
                                }

                                throw new Error(e);
                              })).subscribe(function (data) {
                                console.log(data);
                                return _this4.presentSuccessModal();
                              });
                            } else {}
                          }
                        }, {
                          text: 'Send New Code',
                          handler: function handler() {
                            console.log('Confirm Okay');
                          }
                        }, {
                          text: 'Cancel',
                          role: 'cancel'
                        }],
                        inputs: [{
                          name: 'code',
                          id: 'code',
                          type: 'text',
                          placeholder: 'Enter 6 Digit code'
                        }]
                      });

                    case 2:
                      alert = _context3.sent;
                      _context3.next = 5;
                      return alert.present().then(function (data) {
                        console.clear(); // Create new ion-input

                        // Create new ion-input
                        var newIonicInput = document.createElement('ion-input');
                        var inputValue;
                        newIonicInput.setAttribute('id', 'ion-code');
                        newIonicInput.setAttribute('type', 'text');
                        newIonicInput.setAttribute('maxlength', '6');
                        newIonicInput.setAttribute('placeholder', 'Enter 6 Digit Code: ');
                        console.log(newIonicInput); // Remove Default Ionic-Alert Input

                        // Remove Default Ionic-Alert Input
                        var alertInput = document.getElementById('code');
                        insertAfter(alertInput, newIonicInput);
                        alertInput.remove();

                        function insertAfter(referenceNode, newNode) {
                          referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
                        } // Send Code


                        // Send Code
                        _this4.generateCode(6);

                        _this4.codeSub = _this4.auth.sendRegistrationCode(_this4.registerForm.value.email, _this4.code).subscribe(function (data) {
                          console.log('Code Successfully sent');
                          newIonicInput.addEventListener('ionChange', function (e) {
                            inputValue = e['detail'].value;
                            console.log(inputValue);

                            if (inputValue === _this4.code) {
                              console.log('Congrats');
                              return _this4.validCode = true;
                            } else if (inputValue != _this4.code) {
                              console.log('Wrong Code');
                            }
                          });
                        });
                      });

                    case 5:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "generateCode",
          value: function generateCode(length) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var result, characters, charactersLength, i;
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      result = '';
                      characters = '0123456789';
                      charactersLength = characters.length;

                      for (i = 0; i < length; i++) {
                        result += characters.charAt(Math.floor(Math.random() * charactersLength));
                      }

                      console.log('Generated Code: ' + result);
                      return _context4.abrupt("return", this.code = result);

                    case 6:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
          } // async sendNewCode() {
          // await this.generateCode(6).then(code => {
          //   console.log('Data: ' + code);
          //   this.auth.sendEmailWithCode(code, this.userEmail);
          // });
          // await this.presentNewCodeToast(this.userEmail);
          // }

        }, {
          key: "presentSuccessModal",
          value: function presentSuccessModal() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              var _this5 = this;

              var modal;
              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      _context5.next = 2;
                      return this.modalController.create({
                        component: src_app_components_success_modal_success_modal_component__WEBPACK_IMPORTED_MODULE_4__.SuccessModalComponent,
                        componentProps: {
                          'firstName': this.registerForm.value.firstName,
                          'email': this.registerForm.value.email,
                          'picture': this.registerForm.value.picture,
                          'page': 'register'
                        },
                        cssClass: 'my-custom-class'
                      });

                    case 2:
                      modal = _context5.sent;
                      _context5.next = 5;
                      return modal.present()["catch"](function (e) {
                        throw Error(e);
                      }).then(function () {
                        _this5.router.navigate(['/login', _this5.auth.blogID]);

                        setTimeout(function () {
                          modal.dismiss();
                        }, 5000);
                      });

                    case 5:
                      return _context5.abrupt("return", _context5.sent);

                    case 6:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this);
            }));
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            console.log('Register Page destroyed');
            this.emailCheckSub.unsubscribe();
          }
        }]);

        return RegisterPage;
      }();

      _RegisterPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.Router
        }, {
          type: src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.AlertController
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.ModalController
        }, {
          type: src_app_services_pictures_pictures_service__WEBPACK_IMPORTED_MODULE_3__.PicturesService
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder
        }];
      };

      _RegisterPage.propDecorators = {
        ngOnDestroy: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.HostListener,
          args: ['unloaded']
        }]
      };
      _RegisterPage = (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
        selector: 'app-register',
        template: _Users_ferro_Desktop_personal_website_eddietaliaferro_com_node_modules_ngtools_webpack_src_loaders_direct_resource_js_register_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_register_page_scss__WEBPACK_IMPORTED_MODULE_1__]
      })], _RegisterPage);
      /***/
    },

    /***/
    12004:
    /*!******************************************************************************************************************!*\
      !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/register/register.page.html ***!
      \******************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content>\n  <!-- ion input focus styling is in contact.page.ts via inputFocus & inputBlur -->\n  <ion-grid>\n    <!-- Header -->\n  <ion-row class=\"ion-justify-content-center\" style=\"margin-bottom: 20px;\">\n    <ion-col style=\"margin-top: 5em;\" class=\"ion-text-center\" \n    size-xs=\"11\" size-sm=\"9\" size-md=\"8\" size-lg=\"6\" size-xl=\"5\">\n      <ion-button style=\"width: 100px;\" class=\"grey-button\" (click)=\"back()\">\n        Back\n      </ion-button>\n      <h1 style=\"margin-top: 2em;\"  class=\"page-header\">Register</h1>\n      <div class=\"alert\">\n        <p style=\"font-size: 1em;\">You will need to fill out the entire form to be able to register. You do not need a profile picture.</p>\n      </div>\n    </ion-col>\n  </ion-row>\n\n  <ion-row class=\"ion-justify-content-center\" style=\"margin-bottom: 80px;\">\n    <ion-col size-xs=\"12\" size-sm=\"9\" size-md=\"8\" size-lg=\"6\" size-xl=\"5\">\n      <form [formGroup]=\"registerForm\" (ngSubmit)=\"register()\">\n        <ion-item *ngIf=\"!this.pictureDataURL\" lines=\"none\">\n          <img  id=\"default-profile-picture\" height=\"120px\" src=\"../../../assets/Default-Profile-Picture.svg\" alt=\"Default Profile Picture\">\n        </ion-item>\n        <ion-item *ngIf=\"this.pictureDataURL\"  lines=\"none\">\n          <img id=\"default-profile-picture\" height=\"120px\" src=\"{{this.pictureDataURL}}\" alt=\"Uploaded Profile Picture\">\n        </ion-item>\n        <ion-item lines=\"none\">\n          <label for=\"user-profile-picture\">Profile Picture</label>\n          <input id=\"picture-input\" name=\"user-profile-picture\" (change)=\"getPictureFile($event)\" type=\"file\" placeholder=\"Picture\" />\n        </ion-item>\n        <ion-item lines=\"none\">\n          <ion-input (ionFocus)=\"inputFocus($event, 'firstName')\" (ionBlur)=\"inputBlur($event)\" id=\"first-name-input\" formControlName=\"firstName\" type=\"text\" placeholder=\"First Name\"></ion-input>\n        </ion-item>\n        <ion-item lines=\"none\">\n          <ion-input (ionFocus)=\"inputFocus($event, 'lastName')\" (ionBlur)=\"inputBlur($event)\" id=\"last-name-input\" formControlName=\"lastName\" type=\"text\" placeholder=\"Last Name\"></ion-input>\n        </ion-item>\n        <ion-item lines=\"none\">\n          <ion-input (ionFocus)=\"inputFocus($event, 'email')\" (ionBlur)=\"inputBlur($event)\" id=\"email-input\" formControlName=\"email\" type=\"email\" placeholder=\"Email\"></ion-input>\n        </ion-item>\n        <!-- Email Validation-->\n        <div class=\"validation-errors\">\n          <ng-container *ngFor=\"let validation of validationMessasges.email\">\n            <div class=\"error-message\"\n              *ngIf=\"registerForm\n                .get('email')\n                .hasError(validation.type) && (registerForm.get('email')\n                .dirty || registerForm.get('email').touched)\">\n              {{ validation.message }}\n            </div>\n          </ng-container>\n        </div>\n        <ion-item lines=\"none\">\n          <ion-input (ionFocus)=\"inputFocus($event, 'password')\" (ionBlur)=\"inputBlur($event)\" id=\"password-input\" formControlName=\"password\" type=\"password\" placeholder=\"Password\" minlength=\"6\">\n          </ion-input>\n          <ion-button id=\"show-icon-button\" (click)=\"passwordShowToggle()\">\n            <ion-icon slot=\"end\" name=\"eye\"></ion-icon>\n          </ion-button>\n        </ion-item>\n        <!-- Password Validation-->\n        <div class=\"validation-errors\">\n         <ng-container *ngFor=\"let validation of validationMessasges.password\">\n           <div class=\"error-message\"\n             *ngIf=\"registerForm\n               .get('password')\n               .hasError('pattern') && (registerForm.get('password')\n               .dirty || registerForm.get('password').touched)\">\n             {{ validation.message }}\n           </div>\n         </ng-container>\n        </div>\n      </form>\n      <div class=\"ion-text-center\">\n        <ion-button type=\"submit\" class=\"ion-hide-lg-down green-button\">\n          Register\n        </ion-button>\n      </div>\n    </ion-col>\n  </ion-row>\n  <ion-row>\n    <div [ngClass]=\"this.registerForm.valid ? 'footer-button ion-hide-lg-up' : 'footer-button-inactive ion-hide-lg-up'\"(click)=\"register()\">\n      <p>Register</p>\n    </div>\n  </ion-row>\n  </ion-grid>\n</ion-content>\n";
      /***/
    },

    /***/
    39917:
    /*!***************************************************!*\
      !*** ./src/app/pages/register/register.page.scss ***!
      \***************************************************/

    /***/
    function _(module) {
      module.exports = ".page-sub-header {\n  color: white;\n  margin: 1em 0;\n  line-height: 1.3em;\n  text-align: center;\n}\n\n#show-icon-button {\n  position: absolute;\n  right: 24px;\n  --background: none;\n  box-shadow: none;\n  font-size: 18px;\n  z-index: 100;\n}\n\n.error-message {\n  color: #222;\n  font-size: 1.1em;\n  font-weight: bold;\n  margin-bottom: 20px;\n  padding: 10px;\n  background: rgba(222, 222, 222, 0.5);\n  transition: 0.5s;\n  z-index: 999;\n  opacity: 0;\n  border-top: 3px solid red;\n  -webkit-animation: slide-down 0.5s ease 0.5s forwards;\n          animation: slide-down 0.5s ease 0.5s forwards;\n}\n\n#default-profile-picture {\n  margin: 0 auto;\n  display: block;\n  border-radius: 500px;\n}\n\n#picture-input {\n  opacity: 0;\n  position: absolute;\n  z-index: 1;\n}\n\nlabel {\n  z-index: 9999;\n  cursor: pointer;\n  width: 250px;\n  display: block;\n  margin: 1em auto;\n  padding: 0.5em;\n  text-align: center;\n  background: #D0180194;\n  color: white;\n  border-color: #D01801;\n  border-width: 2px;\n  border-style: solid;\n  border-radius: 5px;\n  box-shadow: none;\n}\n\nform {\n  background: linear-gradient(118deg, #320534 1%, rgba(48, 7, 55, 0.5) 25%, #320534 50%, rgba(38, 7, 42, 0.5) 75%, #320534 100%);\n  border-radius: 5px;\n  padding: 0.7em 1em 2em 1em;\n  box-shadow: 1px 1px 40px #0000001f;\n}\n\n.alert {\n  background-color: #b9b9b961;\n  border-left: solid 4px #3cf63c;\n  margin: 1em auto;\n  padding: 0.9em;\n  font-size: 1em;\n}\n\n.my-custom-class .modal-wrapper {\n  background: #071f06;\n}\n\n@media only screen and (max-width: 600px) {\n  form {\n    padding: 0.3em;\n  }\n}\n\nion-item.sc-ion-input-md-h:not(.item-label), ion-item:not(.item-label) .sc-ion-input-md-h {\n  --padding-start: 8px;\n}\n\n.footer-button {\n  transition: 0.5s;\n  text-align: center;\n  width: 100%;\n  background: #3cf63c;\n  bottom: 0px;\n  opacity: 1;\n}\n\n.footer-button p {\n  color: #1b061c;\n  font-size: 1.5em;\n}\n\n.footer-button-inactive {\n  transition: 0.5s;\n  text-align: center;\n  width: 100%;\n  background: #999999;\n  bottom: 0px;\n  opacity: 0.3;\n}\n\n.footer-button-inactive p {\n  color: #1b061c;\n  font-size: 1.5em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZ2lzdGVyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQUNGOztBQUNBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FBRUY7O0FBQUE7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLG9DQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLHlCQUFBO0VBQ0EscURBQUE7VUFBQSw2Q0FBQTtBQUdGOztBQURBO0VBQ0UsY0FBQTtFQUNBLGNBQUE7RUFDQSxvQkFBQTtBQUlGOztBQUZBO0VBQ0UsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtBQUtGOztBQUhBO0VBQ0UsYUFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQU1GOztBQUpBO0VBQ0UsOEhBQUE7RUFDQSxrQkFBQTtFQUNBLDBCQUFBO0VBQ0Esa0NBQUE7QUFPRjs7QUFMQTtFQUNFLDJCQUFBO0VBQ0EsOEJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0FBUUY7O0FBTkE7RUFDRSxtQkFBQTtBQVNGOztBQU5BO0VBQ0U7SUFDRSxjQUFBO0VBU0Y7QUFDRjs7QUFMQTtFQUNFLG9CQUFBO0FBT0Y7O0FBSEE7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7QUFNRjs7QUFKRTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtBQU1KOztBQUhBO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBTUY7O0FBSEU7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7QUFLSiIsImZpbGUiOiJyZWdpc3Rlci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGFnZS1zdWItaGVhZGVyIHtcbiAgY29sb3I6IHdoaXRlO1xuICBtYXJnaW46IDFlbSAwO1xuICBsaW5lLWhlaWdodDogMS4zZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbiNzaG93LWljb24tYnV0dG9uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMjRweDtcbiAgLS1iYWNrZ3JvdW5kOiBub25lO1xuICBib3gtc2hhZG93OiBub25lO1xuICBmb250LXNpemU6IDE4cHg7XG4gIHotaW5kZXg6IDEwMDtcbn1cbi5lcnJvci1tZXNzYWdlIHtcbiAgY29sb3I6ICMyMjI7XG4gIGZvbnQtc2l6ZTogMS4xZW07XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICBwYWRkaW5nOiAxMHB4O1xuICBiYWNrZ3JvdW5kOiByZ2JhKCRjb2xvcjogI2RlZGVkZSwgJGFscGhhOiAwLjUpO1xuICB0cmFuc2l0aW9uOiAwLjVzO1xuICB6LWluZGV4OiA5OTk7XG4gIG9wYWNpdHk6IDA7XG4gIGJvcmRlci10b3A6IDNweCBzb2xpZCByZWQ7XG4gIGFuaW1hdGlvbjogc2xpZGUtZG93biAwLjVzIGVhc2UgMC41cyBmb3J3YXJkcztcbn1cbiNkZWZhdWx0LXByb2ZpbGUtcGljdHVyZXtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBib3JkZXItcmFkaXVzOiA1MDBweDtcbn1cbiNwaWN0dXJlLWlucHV0IHtcbiAgb3BhY2l0eTogMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAxO1xufVxubGFiZWwge1xuICB6LWluZGV4OiA5OTk5O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHdpZHRoOiAyNTBweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogMWVtIGF1dG87XG4gIHBhZGRpbmc6IDAuNWVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6ICNEMDE4MDE5NDtcbiAgY29sb3I6IHdoaXRlO1xuICBib3JkZXItY29sb3I6ICNEMDE4MDE7XG4gIGJvcmRlci13aWR0aDogMnB4O1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG59XG5mb3JtIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDExOGRlZywgcmdiYSg1MCw1LDUyLDEpIDElLCByZ2IoNDggNyA1NSAvIDUwJSkgMjUlLCByZ2JhKDUwLDUsNTIsMSkgNTAlLCByZ2IoMzggNyA0MiAvIDUwJSkgNzUlLCByZ2JhKDUwLDUsNTIsMSkgMTAwJSk7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgcGFkZGluZzogMC43ZW0gMWVtIDJlbSAxZW07XG4gIGJveC1zaGFkb3c6IDFweCAxcHggNDBweCAjMDAwMDAwMWY7XG59XG4uYWxlcnQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjliOWI5NjE7XG4gIGJvcmRlci1sZWZ0OiBzb2xpZCA0cHggIzNjZjYzYztcbiAgbWFyZ2luOiAxZW0gYXV0bztcbiAgcGFkZGluZzogMC45ZW07XG4gIGZvbnQtc2l6ZTogMWVtO1xufVxuLm15LWN1c3RvbS1jbGFzcyAubW9kYWwtd3JhcHBlciB7XG4gIGJhY2tncm91bmQ6ICMwNzFmMDY7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgZm9ybSB7XG4gICAgcGFkZGluZzogMC4zZW07XG4gIH1cbn1cblxuXG5pb24taXRlbS5zYy1pb24taW5wdXQtbWQtaDpub3QoLml0ZW0tbGFiZWwpLCBpb24taXRlbTpub3QoLml0ZW0tbGFiZWwpIC5zYy1pb24taW5wdXQtbWQtaCB7XG4gIC0tcGFkZGluZy1zdGFydDogOHB4O1xufVxuXG5cbi5mb290ZXItYnV0dG9uIHtcbiAgdHJhbnNpdGlvbjogMC41cztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZDogIzNjZjYzYztcbiAgYm90dG9tOiAwcHg7XG4gIG9wYWNpdHk6IDE7XG5cbiAgcCB7XG4gICAgY29sb3I6ICMxYjA2MWM7XG4gICAgZm9udC1zaXplOiAxLjVlbTtcbiAgfVxufVxuLmZvb3Rlci1idXR0b24taW5hY3RpdmUge1xuICB0cmFuc2l0aW9uOiAwLjVzO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kOiAjOTk5OTk5O1xuICBib3R0b206IDBweDtcbiAgb3BhY2l0eTogMC4zO1xuXG5cbiAgcCB7XG4gICAgY29sb3I6ICMxYjA2MWM7XG4gICAgZm9udC1zaXplOiAxLjVlbTtcbiAgfVxufSJdfQ== */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_register_register_module_ts-es5.js.map