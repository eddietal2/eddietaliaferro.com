(function () {
  "use strict";

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkeddietaliaferro_com"] = self["webpackChunkeddietaliaferro_com"] || []).push([["src_app_admin_contact_contact_module_ts"], {
    /***/
    99518:
    /*!*********************************************************!*\
      !*** ./src/app/admin/contact/contact-routing.module.ts ***!
      \*********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ContactPageRoutingModule": function ContactPageRoutingModule() {
          return (
            /* binding */
            _ContactPageRoutingModule
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


      var _contact_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./contact.page */
      83525);

      var routes = [{
        path: '',
        component: _contact_page__WEBPACK_IMPORTED_MODULE_0__.ContactPage
      }];

      var _ContactPageRoutingModule = function ContactPageRoutingModule() {
        _classCallCheck(this, ContactPageRoutingModule);
      };

      _ContactPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _ContactPageRoutingModule);
      /***/
    },

    /***/
    37641:
    /*!*************************************************!*\
      !*** ./src/app/admin/contact/contact.module.ts ***!
      \*************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ContactPageModule": function ContactPageModule() {
          return (
            /* binding */
            _ContactPageModule
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


      var _contact_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./contact-routing.module */
      99518);
      /* harmony import */


      var _contact_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./contact.page */
      83525);

      var _ContactPageModule = function ContactPageModule() {
        _classCallCheck(this, ContactPageModule);
      };

      _ContactPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _contact_routing_module__WEBPACK_IMPORTED_MODULE_0__.ContactPageRoutingModule],
        declarations: [_contact_page__WEBPACK_IMPORTED_MODULE_1__.ContactPage]
      })], _ContactPageModule);
      /***/
    },

    /***/
    83525:
    /*!***********************************************!*\
      !*** ./src/app/admin/contact/contact.page.ts ***!
      \***********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ContactPage": function ContactPage() {
          return (
            /* binding */
            _ContactPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! tslib */
      3786);
      /* harmony import */


      var _Users_ferro_Desktop_personal_website_eddietaliaferro_com_node_modules_ngtools_webpack_src_loaders_direct_resource_js_contact_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./contact.page.html */
      40546);
      /* harmony import */


      var _contact_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./contact.page.scss */
      80835);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      7602);
      /* harmony import */


      var src_app_services_contact_contact_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/contact/contact.service */
      54329);

      var _ContactPage = /*#__PURE__*/function () {
        function ContactPage(router, contactService, alert) {
          _classCallCheck(this, ContactPage);

          this.router = router;
          this.contactService = contactService;
          this.alert = alert;
        }

        _createClass(ContactPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.contactService.getMessages().subscribe(function (messages) {
              console.log(messages);
              _this.allMessages = messages['messages'];
              _this.messageCount = messages['messageCount'];
            });
          }
        }, {
          key: "deleteAlert",
          value: function deleteAlert(id) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this2 = this;

              var alert, _yield$alert$onDidDis, role;

              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.alert.create({
                        cssClass: 'my-custom-class',
                        header: 'Delete Message',
                        message: 'Are you sure you want to Delete this message? It cannot be undone.',
                        buttons: [{
                          text: 'Cancel',
                          role: 'cancel',
                          cssClass: 'secondary',
                          handler: function handler(blah) {
                            console.log('Confirm Cancel: blah');
                          }
                        }, {
                          text: 'Delete',
                          cssClass: 'alert-delete-button',
                          handler: function handler() {
                            console.log('Deleting message ...');

                            _this2.contactService.deleteMessage(id).subscribe(function (data) {
                              console.log(data);
                              _this2.allMessages = data['messages'];
                              _this2.messageCount = data['messageCount'];
                            });
                          }
                        }]
                      });

                    case 2:
                      alert = _context.sent;
                      _context.next = 5;
                      return alert.present();

                    case 5:
                      _context.next = 7;
                      return alert.onDidDismiss();

                    case 7:
                      _yield$alert$onDidDis = _context.sent;
                      role = _yield$alert$onDidDis.role;
                      console.log('onDidDismiss resolved with role', role);

                    case 10:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "reply",
          value: function reply() {
            console.log('Replying to message ...');
            var replyMessage = document.getElementById('reply');
          }
        }, {
          key: "submitReply",
          value: function submitReply() {}
        }]);

        return ContactPage;
      }();

      _ContactPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router
        }, {
          type: src_app_services_contact_contact_service__WEBPACK_IMPORTED_MODULE_2__.ContactService
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.AlertController
        }];
      };

      _ContactPage = (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-contact',
        template: _Users_ferro_Desktop_personal_website_eddietaliaferro_com_node_modules_ngtools_webpack_src_loaders_direct_resource_js_contact_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_contact_page_scss__WEBPACK_IMPORTED_MODULE_1__]
      })], _ContactPage);
      /***/
    },

    /***/
    40546:
    /*!****************************************************************************************************************!*\
      !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/admin/contact/contact.page.html ***!
      \****************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content>\n  <ion-grid>\n    <ion-row class=\"ion-hide-lg-down\" style=\"height: 100px;\"></ion-row>\n    <ion-row class=\"ion-hide-lg-up\" style=\"height: 50px;\"></ion-row>\n    <ion-row class=\"ion-justify-content-center\">\n      <ion-col size-xs=\"11\" size-sm=\"9\" size-md=\"8\" size-lg=\"6\">\n        <h1 id=\"message-count\">Messages ({{this.messageCount}})</h1>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"ion-justify-content-center\">\n      <ion-col style=\"position: relative; top: -32px;\" size-xs=\"11\" size-sm=\"9\" size-md=\"8\" size-lg=\"6\">\n        <div *ngFor=\"let message of this.allMessages\" class=\"message\">\n          <h2>{{message.fullName}}</h2>\n          <h5>{{message.email}}</h5>\n          <p>{{message.message}}</p>\n          <ion-toolbar>\n            <ion-buttons slot=\"end\">\n              <ion-button id=\"delete-message-button\" (click)=\"deleteAlert(message._id)\">\n                Delete\n              </ion-button>\n            </ion-buttons>\n          </ion-toolbar>\n        </div>\n      </ion-col>\n    </ion-row>\n\n    <!-- Mobile Admin Tabbar -->\n    <ion-row class=\"admin-mobile-tab ion-hide-lg-up\">\n      <ion-col class=\"ion-text-center\" size=\"3\">\n        <a routerLink=\"/admin/blogs\" routerLinkActive=\"active-link\">Blogs</a>\n      </ion-col>\n      <ion-col class=\"ion-text-center\" size=\"3\">\n        <a routerLink=\"/admin/projects\" routerLinkActive=\"active-link\">Projects</a>\n      </ion-col>\n      <ion-col class=\"ion-text-center\" size=\"3\">\n        <a routerLink=\"/admin/contact\" routerLinkActive=\"active-link\">Contact</a>\n      </ion-col>\n      <ion-col class=\"ion-text-center\" size=\"3\">\n        <a routerLink=\"/admin/donate\" routerLinkActive=\"active-link\">Donate</a>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n";
      /***/
    },

    /***/
    80835:
    /*!*************************************************!*\
      !*** ./src/app/admin/contact/contact.page.scss ***!
      \*************************************************/

    /***/
    function _(module) {
      module.exports = "ion-grid {\n  background-image: url('Matrix-Background.svg');\n  background-attachment: fixed;\n  background-size: cover;\n  --color: white;\n  min-height: 100vh;\n}\n\n@media only screen and (max-width: 600px) {\n  ion-grid {\n    background-image: url('Matrix-Background.svg');\n    background-size: cover;\n    background-repeat: no-repeat;\n  }\n}\n\n#message-count {\n  color: #3df63d;\n  border-bottom: 1px solid #fff;\n  padding-bottom: 1em;\n}\n\n.reply {\n  height: 0;\n  display: none;\n}\n\n.reply ion-textarea {\n  background: #e1e9ee;\n  margin: 2em auto;\n  border-radius: 5px;\n  padding: 0.3em;\n}\n\n.message {\n  background: linear-gradient(118deg, #320534 1%, rgba(48, 7, 55, 0.5) 25%, #320534 50%, rgba(38, 7, 42, 0.5) 75%, #320534 100%);\n  height: auto;\n  border-radius: 10px;\n  box-shadow: 1px 1px 10px #000;\n  color: white;\n  padding: 1em;\n  margin: 3em auto;\n}\n\n.message h2 {\n  color: #BC3790;\n}\n\n.message h5 {\n  color: white;\n}\n\n.message ion-toolbar {\n  --background: none;\n  border-top: rgba(119, 119, 119, 0.2) solid 1px;\n  margin-top: 2em;\n}\n\n.message ion-toolbar #delete-message-button {\n  --background: linear-gradient(360deg, #D01801 -2%, #810b00, #D01801);\n  --border-radius: 50px;\n  width: 100px;\n  margin: 0 0 0 0.5em;\n  --color: white;\n}\n\n.message ion-toolbar #reply-message-button {\n  --background: linear-gradient(360deg, #00c400 -2%, #005c47, #00c400);\n  --border-radius: 50px;\n  width: 100px;\n  margin: 0 0 0 0.5em;\n  --color: white;\n}\n\n.active-link {\n  color: #3df63d;\n  padding-left: 0.3em;\n  padding-bottom: 4px;\n  font-weight: 600;\n  transition: 0.5s;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhY3QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsOENBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FBQ0Y7O0FBQ0E7RUFDRTtJQUNFLDhDQUFBO0lBQ0Esc0JBQUE7SUFDQSw0QkFBQTtFQUVGO0FBQ0Y7O0FBQUE7RUFDRSxjQUFBO0VBQ0EsNkJBQUE7RUFDQSxtQkFBQTtBQUVGOztBQUNBO0VBQ0UsU0FBQTtFQUNBLGFBQUE7QUFFRjs7QUFERTtFQUNFLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUFHSjs7QUFBQTtFQUNFLDhIQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsNkJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FBR0Y7O0FBREU7RUFDRSxjQUFBO0FBR0o7O0FBREU7RUFDRSxZQUFBO0FBR0o7O0FBREU7RUFDRSxrQkFBQTtFQUNBLDhDQUFBO0VBQ0EsZUFBQTtBQUdKOztBQURJO0VBQ0Usb0VBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUFHTjs7QUFESTtFQUNFLG9FQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FBR047O0FBQ0E7RUFDRSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUFFRiIsImZpbGUiOiJjb250YWN0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1ncmlkIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi9hc3NldHMvaWxsdXN0cmF0aW9ucy9NYXRyaXgtQmFja2dyb3VuZC5zdmcnKTtcbiAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgLS1jb2xvcjogd2hpdGU7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICBpb24tZ3JpZCB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi9hc3NldHMvaWxsdXN0cmF0aW9ucy9NYXRyaXgtQmFja2dyb3VuZC5zdmcnKTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIH1cbn1cbiNtZXNzYWdlLWNvdW50IHtcbiAgY29sb3I6ICMzZGY2M2Q7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZmZmO1xuICBwYWRkaW5nLWJvdHRvbTogMWVtO1xufVxuXG4ucmVwbHkge1xuICBoZWlnaHQ6IDA7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIGlvbi10ZXh0YXJlYSB7XG4gICAgYmFja2dyb3VuZDogI2UxZTllZTtcbiAgICBtYXJnaW46IDJlbSBhdXRvO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBwYWRkaW5nOiAwLjNlbTtcbiAgfVxufVxuLm1lc3NhZ2Uge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTE4ZGVnLCByZ2JhKDUwLDUsNTIsMSkgMSUsIHJnYig0OCA3IDU1IC8gNTAlKSAyNSUsIHJnYmEoNTAsNSw1MiwxKSA1MCUsIHJnYigzOCA3IDQyIC8gNTAlKSA3NSUsIHJnYmEoNTAsNSw1MiwxKSAxMDAlKTs7XG4gIGhlaWdodDogYXV0bztcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYm94LXNoYWRvdzogMXB4IDFweCAxMHB4ICMwMDA7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogMWVtO1xuICBtYXJnaW46IDNlbSBhdXRvO1xuXG4gIGgyIHtcbiAgICBjb2xvcjogI0JDMzc5MDtcbiAgfVxuICBoNSB7XG4gICAgY29sb3I6IHdoaXRlO1xuICB9XG4gIGlvbi10b29sYmFyIHtcbiAgICAtLWJhY2tncm91bmQ6IG5vbmU7XG4gICAgYm9yZGVyLXRvcDogcmdiYSgxMTksIDExOSwgMTE5LCAwLjIpIHNvbGlkIDFweDtcbiAgICBtYXJnaW4tdG9wOiAyZW07XG5cbiAgICAjZGVsZXRlLW1lc3NhZ2UtYnV0dG9uIHtcbiAgICAgIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDM2MGRlZywgI0QwMTgwMSAtMiUsICM4MTBiMDAsICNEMDE4MDEpO1xuICAgICAgLS1ib3JkZXItcmFkaXVzOiA1MHB4O1xuICAgICAgd2lkdGg6IDEwMHB4O1xuICAgICAgbWFyZ2luOiAwIDAgMCAwLjVlbTtcbiAgICAgIC0tY29sb3I6IHdoaXRlO1xuICAgIH1cbiAgICAjcmVwbHktbWVzc2FnZS1idXR0b24ge1xuICAgICAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMzYwZGVnLCAjMDBjNDAwIC0yJSwgIzAwNWM0NywgIzAwYzQwMCk7XG4gICAgICAtLWJvcmRlci1yYWRpdXM6IDUwcHg7XG4gICAgICB3aWR0aDogMTAwcHg7XG4gICAgICBtYXJnaW46IDAgMCAwIDAuNWVtO1xuICAgICAgLS1jb2xvcjogd2hpdGU7XG4gICAgfVxuICB9XG59XG4uYWN0aXZlLWxpbmsge1xuICBjb2xvcjogIzNkZjYzZDtcbiAgcGFkZGluZy1sZWZ0OiAwLjNlbTtcbiAgcGFkZGluZy1ib3R0b206IDRweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgdHJhbnNpdGlvbjogMC41cztcbn0iXX0= */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_admin_contact_contact_module_ts-es5.js.map