(function () {
  "use strict";

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkeddietaliaferro_com"] = self["webpackChunkeddietaliaferro_com"] || []).push([["src_app_pages_user-profile_user-profile_module_ts"], {
    /***/
    23376:
    /*!*******************************************************************!*\
      !*** ./src/app/pages/user-profile/user-profile-routing.module.ts ***!
      \*******************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "UserProfilePageRoutingModule": function UserProfilePageRoutingModule() {
          return (
            /* binding */
            _UserProfilePageRoutingModule
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


      var _user_profile_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./user-profile.page */
      41553);

      var routes = [{
        path: '',
        component: _user_profile_page__WEBPACK_IMPORTED_MODULE_0__.UserProfilePage
      }];

      var _UserProfilePageRoutingModule = function UserProfilePageRoutingModule() {
        _classCallCheck(this, UserProfilePageRoutingModule);
      };

      _UserProfilePageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _UserProfilePageRoutingModule);
      /***/
    },

    /***/
    71749:
    /*!***********************************************************!*\
      !*** ./src/app/pages/user-profile/user-profile.module.ts ***!
      \***********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "UserProfilePageModule": function UserProfilePageModule() {
          return (
            /* binding */
            _UserProfilePageModule
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


      var _user_profile_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./user-profile-routing.module */
      23376);
      /* harmony import */


      var _user_profile_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./user-profile.page */
      41553);

      var _UserProfilePageModule = function UserProfilePageModule() {
        _classCallCheck(this, UserProfilePageModule);
      };

      _UserProfilePageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule, _user_profile_routing_module__WEBPACK_IMPORTED_MODULE_0__.UserProfilePageRoutingModule],
        declarations: [_user_profile_page__WEBPACK_IMPORTED_MODULE_1__.UserProfilePage]
      })], _UserProfilePageModule);
      /***/
    },

    /***/
    41553:
    /*!*********************************************************!*\
      !*** ./src/app/pages/user-profile/user-profile.page.ts ***!
      \*********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "UserProfilePage": function UserProfilePage() {
          return (
            /* binding */
            _UserProfilePage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! tslib */
      3786);
      /* harmony import */


      var _Users_ferro_Desktop_personal_website_eddietaliaferro_com_node_modules_ngtools_webpack_src_loaders_direct_resource_js_user_profile_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./user-profile.page.html */
      35699);
      /* harmony import */


      var _user_profile_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./user-profile.page.scss */
      61639);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/auth/auth.service */
      51228);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var src_app_services_pictures_pictures_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/pictures/pictures.service */
      1311);
      /* harmony import */


      var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/storage */
      54357);
      /* harmony import */


      var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @auth0/angular-jwt */
      21055);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic/angular */
      7602);

      var _UserProfilePage = /*#__PURE__*/function () {
        function UserProfilePage(auth, storage, pictureService, formBuilder, alertController, toastController, helper) {
          _classCallCheck(this, UserProfilePage);

          this.auth = auth;
          this.storage = storage;
          this.pictureService = pictureService;
          this.formBuilder = formBuilder;
          this.alertController = alertController;
          this.toastController = toastController;
          this.helper = helper;
          this.TOKEN_KEY = 'access_token';
        }

        _createClass(UserProfilePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.storage.get(this.TOKEN_KEY).then(function (token) {
              var decoded = _this.helper.decodeToken(token);

              console.clear();
              console.log(decoded);
            });
            this.userFullName = this.auth.userFullName.subscribe(function (data) {
              _this.userFirstName = data.split(" ")[0];
              _this.userLastName = data.split(" ")[1];
              console.log(_this.userFirstName);
              console.log(_this.userLastName);
            });
            this.auth.userPicture.subscribe(function (data) {
              console.log(data);
              _this.userPicture = data;
            });
            this.auth.userEmail.subscribe(function (data) {
              console.log(data);
              return _this.userEmail = data;
            });
            this.userProfileForm = this.formBuilder.group({
              firstName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
              lastName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
              picture: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
              email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
              oldEmail: [this.userEmail, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
              password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]]
            });
            this.userProfileForm.patchValue({
              firstName: this.userFirstName,
              lastName: this.userLastName,
              email: this.userEmail
            });
          }
        }, {
          key: "editProfile",
          value: function editProfile() {
            var _this2 = this;

            // If Password Input is Empty
            if (this.userProfileForm.value.password === '') {
              return this.wrongPasswordAlert('You forgot to enter a password!');
            } // If currenty Email is remaining the same.


            if (this.userProfileForm.value.email === this.userEmail) {
              console.log('There emails were the same!');

              if (!this.pictureDataURL) {
                var updatedProfile = {
                  fullName: this.userProfileForm.value.firstName + ' ' + this.userProfileForm.value.lastName,
                  oldEmail: this.userEmail,
                  newEmail: this.userProfileForm.value.email,
                  password: this.userProfileForm.value.password,
                  picture: this.userPicture
                };
                this.auth.updateProfile(updatedProfile).subscribe(function (data) {
                  // console.clear()
                  console.log('Change Picture Update Profile Data: ');
                  console.log(data);

                  if (data['isMatch'] === true) {
                    _this2.storage.remove(_this2.TOKEN_KEY);

                    _this2.auth.userFullName.next(data['fullName']);

                    _this2.auth.userEmail.next(data['newEmail']);

                    _this2.auth.userPicture.next(data['picture']);

                    _this2.successToast('You have successfully updated your profile!');

                    _this2.userProfileForm.patchValue({
                      password: ''
                    });
                  }
                });
              }

              console.log('Getting Thumbnail S3 URL');
              var formData = new FormData();
              var pictureFile = new File([this.dataURLtoBlob(this.pictureDataURL)], 'user-profile-picture.png');
              formData.append('user-profile-picture', pictureFile);
              this.pictureService.userProfilePictureUpload(formData).subscribe(function (pictureURL) {
                _this2.userProfileForm.value.picture = pictureURL['objectUrl'];
                console.clear();
                console.log('USER EMAIL');
                console.log(_this2.userEmail);
                var updatedProfile = {
                  fullName: _this2.userProfileForm.value.firstName + ' ' + _this2.userProfileForm.value.lastName,
                  oldEmail: _this2.userEmail,
                  newEmail: _this2.userProfileForm.value.email,
                  password: _this2.userProfileForm.value.password,
                  picture: _this2.userProfileForm.value.picture
                };

                _this2.auth.updateProfile(updatedProfile).subscribe(function (data) {
                  console.log(data);

                  if (data['isMatch'] === true) {
                    _this2.storage.remove(_this2.TOKEN_KEY);

                    _this2.auth.userFullName.next(data['fullName']);

                    _this2.auth.userEmail.next(data['newEmail']);

                    _this2.auth.userPicture.next(data['picture']);

                    _this2.successToast('You have successfully updated your profile!');

                    _this2.userProfileForm.patchValue({
                      password: ''
                    });
                  }
                });
              });
            } // If current email is being changed via the email input
            else {
              console.log('The emails were not the same');
              this.auth.checkEmail(this.userProfileForm.value.email).subscribe(function (data) {
                if (!data['isEmail']) {
                  console.log('No one else has this email!'); // If the user does NOT change their profile picture

                  if (!_this2.pictureDataURL) {
                    var _updatedProfile = {
                      fullName: _this2.userProfileForm.value.firstName + ' ' + _this2.userProfileForm.value.lastName,
                      oldEmail: _this2.userEmail,
                      newEmail: _this2.userProfileForm.value.email,
                      password: _this2.userProfileForm.value.password,
                      picture: _this2.userPicture
                    };
                    console.log(_updatedProfile);

                    _this2.auth.updateProfile(_updatedProfile).subscribe(function (data) {
                      console.log(data);

                      if (data['isMatch'] === true) {
                        _this2.auth.userFullName.next(data['fullName']);

                        _this2.auth.userEmail.next(data['email']);

                        _this2.auth.userPicture.next(data['picture']);

                        _this2.successToast('You have successfully updated your profile!');

                        _this2.userProfileForm.value.password = '';
                      }
                    });
                  } // If user uploads a new Profile Picture
                  else {
                    console.log('Getting Thumbnail S3 URL');

                    var _formData = new FormData();

                    var _pictureFile = new File([_this2.dataURLtoBlob(_this2.pictureDataURL)], 'user-profile-picture.png');

                    _formData.append('user-profile-picture', _pictureFile);

                    _this2.pictureService.userProfilePictureUpload(_formData).subscribe(function (pictureURL) {
                      _this2.userProfileForm.value.picture = pictureURL['objectUrl'];
                      var updatedProfile = {
                        fullName: _this2.userProfileForm.value.firstName + ' ' + _this2.userProfileForm.value.lastName,
                        oldEmail: _this2.userEmail,
                        newEmail: _this2.userProfileForm.value.email,
                        password: _this2.userProfileForm.value.password,
                        picture: _this2.userProfileForm.value.picture
                      };

                      _this2.auth.updateProfile(updatedProfile).subscribe(function (data) {
                        console.log(data);

                        if (data['isMatch'] === true) {
                          _this2.auth.userFullName.next(data['fullName']);

                          _this2.auth.userEmail.next(data['email']);

                          _this2.auth.userPicture.next(data['picture']);

                          _this2.successToast('You have successfully updated your profile!');

                          _this2.userProfileForm.value.password = '';
                        }
                      });
                    });
                  }
                } else {
                  console.log('SOMEONE HAS THIS EMAIL! Retry');
                }
              });
            }
          }
        }, {
          key: "getPictureFile",
          value: function getPictureFile(event) {
            var _this3 = this;

            var userCurrentPicture = document.getElementById('user-current-picture');
            userCurrentPicture.style.display = 'none';
            console.log(event);
            var pictureOne = document.getElementById('user-profile-picture');
            var reader = new FileReader();

            if (pictureOne) {
              reader.readAsDataURL(event.target.files[0]);
            }

            reader.addEventListener('load', function () {
              // Convert image file ot base64 string
              _this3.pictureDataURL = reader.result;
              console.log(_this3.pictureDataURL);
            }, false);
          }
        }, {
          key: "dataURLtoBlob",
          value: function dataURLtoBlob(dataurl) {
            // console.log(dataurl)
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
          key: "changePassword",
          value: function changePassword() {}
        }, {
          key: "presentAlertPrompt",
          value: function presentAlertPrompt(email) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this4 = this;

              var alert;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.alertController.create({
                        cssClass: 'change-password-alert',
                        header: 'Change Password',
                        inputs: [{
                          name: 'current-password',
                          id: 'current-password',
                          type: 'password',
                          placeholder: 'Password'
                        }, {
                          name: 'new-password',
                          id: 'new-password',
                          type: 'password',
                          placeholder: 'New Password'
                        }, {
                          name: 'retype-new-password',
                          id: 'retype-new-password',
                          type: 'password',
                          placeholder: 'Re-Type New Password'
                        }],
                        buttons: [{
                          text: 'Cancel',
                          role: 'cancel',
                          cssClass: 'secondary',
                          handler: function handler() {
                            console.log('Confirm Cancel');
                          }
                        }, {
                          text: 'Ok',
                          handler: function handler(e) {
                            console.log(e);
                            var currentPassword = e['current-password'];
                            var newPassword = e['new-password'];
                            var reTypeNewPassword = e['retype-new-password'];

                            if (currentPassword == newPassword) {
                              console.log('New password cannot be the same as old password');
                              return false;
                            } else if (newPassword != reTypeNewPassword) {
                              console.log('New Passwords do not match!');

                              _this4.wrongPasswordAlert('New passwords do not match. Please double check both entries.');

                              ;
                              return false;
                            }

                            _this4.auth.changePassword(email, currentPassword, newPassword).subscribe(function (data) {
                              if (!data) {
                                console.log(data);

                                _this4.wrongPasswordAlert('The password was wrong. Please end your current password again.');

                                return;
                              }

                              if (data) {
                                _this4.successToast('You have successfully changed your password');

                                _this4.alertController.dismiss();

                                return;
                              }
                            });

                            return false;
                          }
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
          key: "wrongPasswordAlert",
          value: function wrongPasswordAlert(msg) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var alert, _yield$alert$onDidDis, role;

              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.alertController.create({
                        cssClass: 'my-custom-class',
                        header: 'Wrong Password!',
                        message: msg,
                        buttons: ['OK']
                      });

                    case 2:
                      alert = _context2.sent;
                      _context2.next = 5;
                      return alert.present();

                    case 5:
                      _context2.next = 7;
                      return alert.onDidDismiss();

                    case 7:
                      _yield$alert$onDidDis = _context2.sent;
                      role = _yield$alert$onDidDis.role;
                      console.log('onDidDismiss resolved with role', role);

                    case 10:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "successToast",
          value: function successToast(msg) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var toast;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
                      return this.toastController.create({
                        message: msg,
                        // cssClass: 'success-toast',
                        duration: 2000
                      });

                    case 2:
                      toast = _context3.sent;
                      toast.present();

                    case 4:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }]);

        return UserProfilePage;
      }();

      _UserProfilePage.ctorParameters = function () {
        return [{
          type: src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService
        }, {
          type: _ionic_storage__WEBPACK_IMPORTED_MODULE_4__.Storage
        }, {
          type: src_app_services_pictures_pictures_service__WEBPACK_IMPORTED_MODULE_3__.PicturesService
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.AlertController
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ToastController
        }, {
          type: _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_8__.JwtHelperService
        }];
      };

      _UserProfilePage = (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-user-profile',
        template: _Users_ferro_Desktop_personal_website_eddietaliaferro_com_node_modules_ngtools_webpack_src_loaders_direct_resource_js_user_profile_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_user_profile_page_scss__WEBPACK_IMPORTED_MODULE_1__]
      })], _UserProfilePage);
      /***/
    },

    /***/
    35699:
    /*!**************************************************************************************************************************!*\
      !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/user-profile/user-profile.page.html ***!
      \**************************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content>\n  <ion-grid>\n    <ion-row class=\"ion-justify-content-center\">\n      <ion-col class=\"page-wrapper ion-text-center\" size-xs=\"11\" size-sm=\"9\" size-md=\"8\" size-lg=\"6\" size-xl=\"5\">\n            <input type=\"file\" (change)=\"getPictureFile($event)\"  name=\"user-profile-picture\" id=\"user-profile-picture\" class=\"purple-button\" style=\"margin: 3em auto;\">\n            <img id=\"user-current-picture\" *ngIf=\"userPicture\" width=\"200\" style=\"border-radius: 200px;\" src=\"{{userPicture}}\" alt=\"User Profile Picture\">\n            <img id=\"user-new-picture\" *ngIf=\"pictureDataURL\" width=\"200\" style=\"border-radius: 200px;\" src=\"{{pictureDataURL}}\" alt=\"User Profile Picture\">\n            <label for=\"user-profile-picture\">Change Profile Picture</label>\n            <ion-button class=\"red-button\" style=\"width: 200px; margin: 3em auto;\" (click)=\"presentAlertPrompt(this.userEmail)\">\n              Change Password\n            </ion-button>\n      </ion-col>\n      <ion-col class=\"ion-text-center\" size-xs=\"11\" size-sm=\"9\" size-md=\"8\" size-lg=\"5\" size-xl=\"4\">\n        <div class=\"alert\">\n          <p>You can update your profile here! Make sure all your information is correct before making any changes.</p>\n        </div>\n        <form [formGroup]=\"userProfileForm\" (ngSubmit)=\"editProfile()\">\n              <ion-item lines=\"none\">\n                <ion-input formControlName=\"firstName\" type=\"text\" placeholder=\"First Name\"></ion-input>\n              </ion-item>\n              <ion-item lines=\"none\">\n                <ion-input formControlName=\"lastName\" type=\"text\" placeholder=\"Last Name\"></ion-input>\n              </ion-item>\n              <ion-item lines=\"none\">\n                <ion-input formControlName=\"email\" type=\"email\" placeholder=\"Email\"></ion-input>\n              </ion-item>\n              <ion-item lines=\"none\">\n                <ion-input formControlName=\"password\" type=\"password\" placeholder=\"Password\"></ion-input>\n              </ion-item>\n              <!-- Alert or Modal popus up with Password Change. -->\n              <!-- Have the user log back in with their new password -->\n              <ion-button class=\"green-button\" type=\"submit\" style=\"margin: 3em auto;\">\n                Edit Profile\n              </ion-button>\n        </form>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>";
      /***/
    },

    /***/
    61639:
    /*!***********************************************************!*\
      !*** ./src/app/pages/user-profile/user-profile.page.scss ***!
      \***********************************************************/

    /***/
    function _(module) {
      module.exports = ".danger-toast {\n  font-weight: 600;\n  font-size: 21px;\n  width: 100%;\n  --background: #FF443B;\n  position: relative;\n  top: 150px;\n  color: white;\n}\n\n.success-toast {\n  font-weight: 600;\n  font-size: 21px;\n  width: 100%;\n  --background: #3df63d;\n  position: relative;\n  top: 150px;\n  color: white;\n}\n\nlabel {\n  cursor: pointer;\n  display: block;\n  background: linear-gradient(360deg, #777777 -2%, #333, #777777);\n  width: 264px;\n  height: 38px;\n  padding: 0.7em;\n  margin: 2.8em auto 1em auto;\n  border-radius: 100px;\n  font-size: 0.9em;\n  font-weight: 500;\n  text-transform: uppercase;\n}\n\n.page-wrapper {\n  padding-top: 6em;\n}\n\n@media only screen and (max-width: 800px) {\n  .page-wrapper {\n    padding-top: 8em;\n  }\n}\n\nform {\n  background: #1805199e;\n  padding: 2em;\n  border-radius: 5px;\n  box-shadow: 1px 1px 10px #000;\n}\n\n#user-profile-picture {\n  opacity: 0;\n  position: absolute;\n  z-index: -1;\n}\n\n.alert {\n  background-color: #333;\n  border: solid 2px #3cf63c;\n  border-radius: 5px;\n  margin: 1em auto;\n  padding: 0.5em;\n}\n\n.alert p {\n  font-size: 1em;\n}\n\n.green-button {\n  --background: linear-gradient(360deg, #3df63d -2%, #00b400, #3df63d);\n}\n\n.red-button {\n  --background: linear-gradient(360deg, #D01801 -2%, #810b00, #D01801);\n}\n\nion-item {\n  margin: 1em auto;\n  --highlight-color-focused: #00c400;\n}\n\nion-item:focus {\n  margin: 1em auto;\n}\n\nion-input {\n  border-radius: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXItcHJvZmlsZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0FBRUY7O0FBQUE7RUFDRSxlQUFBO0VBQ0EsY0FBQTtFQUNBLCtEQUFBO0VBRUEsWUFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsMkJBQUE7RUFDQSxvQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtBQUVGOztBQUFBO0VBQ0UsZ0JBQUE7QUFHRjs7QUFEQTtFQUNFO0lBQ0UsZ0JBQUE7RUFJRjtBQUNGOztBQUZBO0VBQ0UscUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSw2QkFBQTtBQUlGOztBQUZBO0VBQ0UsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQUtGOztBQUhBO0VBQ0Usc0JBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBTUY7O0FBTEU7RUFDRSxjQUFBO0FBT0o7O0FBSkE7RUFDRSxvRUFBQTtBQU9GOztBQUxBO0VBQ0Usb0VBQUE7QUFRRjs7QUFOQTtFQUNFLGdCQUFBO0VBQ0Esa0NBQUE7QUFTRjs7QUFQQTtFQUNFLGdCQUFBO0FBVUY7O0FBUkE7RUFDRSxtQkFBQTtBQVdGIiwiZmlsZSI6InVzZXItcHJvZmlsZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGFuZ2VyLXRvYXN0IHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAyMXB4O1xuICB3aWR0aDogMTAwJTtcbiAgLS1iYWNrZ3JvdW5kOiAjRkY0NDNCO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMTUwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi5zdWNjZXNzLXRvYXN0IHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAyMXB4O1xuICB3aWR0aDogMTAwJTtcbiAgLS1iYWNrZ3JvdW5kOiAjM2RmNjNkO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMTUwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbmxhYmVsIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBkaXNwbGF5OiBibG9jaztcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxuMzYwZGVnLCAjNzc3Nzc3IC0yJSwgIzMzMywgIzc3Nzc3Nyk7XG4gIHdpZHRoOiAyNjRweDtcbiAgaGVpZ2h0OiAzOHB4O1xuICBwYWRkaW5nOiAwLjdlbTtcbiAgbWFyZ2luOiAyLjhlbSBhdXRvIDFlbSBhdXRvO1xuICBib3JkZXItcmFkaXVzOiAxMDBweDtcbiAgZm9udC1zaXplOiAwLjllbTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cbi5wYWdlLXdyYXBwZXIge1xuICBwYWRkaW5nLXRvcDogNmVtO1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MDBweCkge1xuICAucGFnZS13cmFwcGVyIHtcbiAgICBwYWRkaW5nLXRvcDogOGVtO1xuICB9XG59XG5mb3JtIHtcbiAgYmFja2dyb3VuZDogIzE4MDUxOTllO1xuICBwYWRkaW5nOiAyZW07XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm94LXNoYWRvdzogMXB4IDFweCAxMHB4ICMwMDA7XG59XG4jdXNlci1wcm9maWxlLXBpY3R1cmUge1xuICBvcGFjaXR5OiAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IC0xO1xufVxuLmFsZXJ0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcbiAgYm9yZGVyOiBzb2xpZCAycHggIzNjZjYzYztcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBtYXJnaW46IDFlbSBhdXRvO1xuICBwYWRkaW5nOiAwLjVlbTtcbiAgcCB7XG4gICAgZm9udC1zaXplOiAxZW07XG4gIH1cbn1cbi5ncmVlbi1idXR0b24ge1xuICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgzNjBkZWcsICMzZGY2M2QgLTIlLCAjMDBiNDAwLCAjM2RmNjNkKTtcbn1cbi5yZWQtYnV0dG9uIHtcbiAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMzYwZGVnLCAjRDAxODAxIC0yJSwgIzgxMGIwMCwgI0QwMTgwMSk7XG59XG5pb24taXRlbSB7XG4gIG1hcmdpbjogMWVtIGF1dG87XG4gIC0taGlnaGxpZ2h0LWNvbG9yLWZvY3VzZWQ6ICMwMGM0MDA7XG59XG5pb24taXRlbTpmb2N1cyB7XG4gIG1hcmdpbjogMWVtIGF1dG87XG59XG5pb24taW5wdXQge1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufSJdfQ== */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_user-profile_user-profile_module_ts-es5.js.map