(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkeddietaliaferro_com"] = self["webpackChunkeddietaliaferro_com"] || []).push([["main"], {
    /***/
    98255:
    /*!*******************************************************!*\
      !*** ./$_lazy_route_resources/ lazy namespace object ***!
      \*******************************************************/

    /***/
    function _(module) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = 98255;
      module.exports = webpackEmptyAsyncContext;
      /***/
    },

    /***/
    90158:
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "routes": function routes() {
          return (
            /* binding */
            _routes
          );
        },

        /* harmony export */
        "AppRoutingModule": function AppRoutingModule() {
          return (
            /* binding */
            _AppRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      3786);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      71258);

      var _routes = [{
        path: '',
        redirectTo: 'home',
        // redirectTo: 'projects/project-page/616729f4558945605c6ef638',
        // redirectTo: 'blog/blog-page/61846467cef3953a180d948d',
        pathMatch: 'full'
      }, {
        path: 'home',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() */
          [__webpack_require__.e("default-node_modules_date-fns_esm_format_index_js-node_modules_date-fns_esm_parseISO_index_js-3c5c83"), __webpack_require__.e("common"), __webpack_require__.e("src_app_pages_home_home_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
          /*! ./pages/home/home.module */
          57994)).then(function (m) {
            return m.HomePageModule;
          });
        }
      }, {
        path: 'about',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_pages_about_about_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./pages/about/about.module */
          18114)).then(function (m) {
            return m.AboutPageModule;
          });
        }
      }, {
        path: 'blog',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() */
          [__webpack_require__.e("default-node_modules_date-fns_esm_format_index_js-node_modules_date-fns_esm_parseISO_index_js-3c5c83"), __webpack_require__.e("common"), __webpack_require__.e("src_app_pages_blog_blog_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
          /*! ./pages/blog/blog.module */
          86238)).then(function (m) {
            return m.BlogPageModule;
          });
        }
      }, {
        path: 'contact',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() */
          [__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_contact_contact_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
          /*! ./pages/contact/contact.module */
          17213)).then(function (m) {
            return m.ContactPageModule;
          });
        }
      }, {
        path: 'donate',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_pages_donate_donate_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./pages/donate/donate.module */
          88127)).then(function (m) {
            return m.DonatePageModule;
          });
        }
      }, {
        path: 'projects',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() */
          [__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_projects_projects_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
          /*! ./pages/projects/projects.module */
          43206)).then(function (m) {
            return m.ProjectsPageModule;
          });
        }
      }, {
        path: 'admin',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_admin_admin_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./admin/admin.module */
          77095)).then(function (m) {
            return m.AdminPageModule;
          });
        }
      }, {
        path: 'login/:id',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_pages_login_login_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./pages/login/login.module */
          21053)).then(function (m) {
            return m.LoginPageModule;
          });
        }
      }, {
        path: 'register',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() */
          [__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_register_register_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
          /*! ./pages/register/register.module */
          60207)).then(function (m) {
            return m.RegisterPageModule;
          });
        }
      }, {
        path: 'profile',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() */
          [__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_user-profile_user-profile_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
          /*! ./pages/user-profile/user-profile.module */
          71749)).then(function (m) {
            return m.UserProfilePageModule;
          });
        }
      }];

      var _AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      _AppRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forRoot(_routes, {
          preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__.PreloadAllModules
        })],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
      })], _AppRoutingModule);
      /***/
    },

    /***/
    55041:
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AppComponent": function AppComponent() {
          return (
            /* binding */
            _AppComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! tslib */
      3786);
      /* harmony import */


      var _Users_ferro_Desktop_personal_website_eddietaliaferro_com_node_modules_ngtools_webpack_src_loaders_direct_resource_js_app_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./app.component.html */
      75158);
      /* harmony import */


      var _app_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./app.component.scss */
      53040);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic/angular */
      7602);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic-native/splash-screen/ngx */
      64967);
      /* harmony import */


      var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic-native/status-bar/ngx */
      73588);
      /* harmony import */


      var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./services/auth/auth.service */
      51228);
      /* harmony import */


      var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/storage */
      54357);

      var _AppComponent = /*#__PURE__*/function () {
        function AppComponent(platform, splashScreen, statusBar, auth, storage, router, menu, alertController) {
          _classCallCheck(this, AppComponent);

          this.platform = platform;
          this.splashScreen = splashScreen;
          this.statusBar = statusBar;
          this.auth = auth;
          this.storage = storage;
          this.router = router;
          this.menu = menu;
          this.alertController = alertController;
          this.initializeApp();
        }

        _createClass(AppComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.auth.userType.subscribe(function (data) {
              console.log(data);
              _this.userType = data;
              return;
            });
            this.auth.userPicture.subscribe(function (data) {
              _this.userPicture = data;
              return;
            });
          }
        }, {
          key: "initializeApp",
          value: function initializeApp() {
            var _this2 = this;

            this.storage.create();
            this.auth.checkToken();
            this.platform.ready().then(function () {
              _this2.statusBar.styleDefault();

              _this2.splashScreen.hide();
            }); // State for the User. If Authentication State == False, the app reverts back to the landing page

            this.auth.authenticationState.subscribe(function (state) {
              return (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(_this2, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                return regeneratorRuntime.wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        if (state && this.auth.blogID) {
                          this.router.navigate(['/blog/blog-page', this.auth.blogID]);
                        } else if (state) {
                          this.router.navigate(['home']);
                        } else {
                          this.router.navigate(['']);
                        }

                      case 1:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee, this);
              }));
            });
          }
        }, {
          key: "openFirst",
          value: function openFirst() {
            this.menu.enable(true, 'first');
            this.menu.open('first');
          }
        }, {
          key: "closeMenu",
          value: function closeMenu() {
            this.menu.close();
          }
        }, {
          key: "loginDetectFromBlog",
          value: function loginDetectFromBlog() {
            console.clear();
            console.log('Detecting Blog ...');

            if (this.auth.blogID === null) {
              console.log('No Blogs to return to ');
              this.router.navigate(['/login/', 'no-blog-id']);
              this.closeMenu();
              return;
            } else {
              console.log('Blog to return to: ' + this.auth.blogID);
              this.router.navigate(['/login/', this.auth.blogID]);
              this.closeMenu();
              return;
            }
          }
        }, {
          key: "logoutConfirm",
          value: function logoutConfirm() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var _this3 = this;

              var alert;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.alertController.create({
                        cssClass: 'my-custom-class',
                        message: 'Are you sure you want to Logout?',
                        buttons: [{
                          text: 'Cancel',
                          role: 'cancel',
                          cssClass: 'secondary',
                          handler: function handler(blah) {
                            console.log('Confirm Cancel: blah');
                          }
                        }, {
                          text: 'Yes',
                          handler: function handler() {
                            _this3.auth.logout();
                          }
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
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.auth.authenticationState.unsubscribe();
          }
        }]);

        return AppComponent;
      }();

      _AppComponent.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.Platform
        }, {
          type: _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_2__.SplashScreen
        }, {
          type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_3__.StatusBar
        }, {
          type: _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__.AuthService
        }, {
          type: _ionic_storage__WEBPACK_IMPORTED_MODULE_5__.Storage
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.MenuController
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.AlertController
        }];
      };

      _AppComponent.propDecorators = {
        ngOnDestroy: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.HostListener,
          args: ['unloaded']
        }]
      };
      _AppComponent = (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-root',
        template: _Users_ferro_Desktop_personal_website_eddietaliaferro_com_node_modules_ngtools_webpack_src_loaders_direct_resource_js_app_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_1__]
      })], _AppComponent);
      /***/
    },

    /***/
    36747:
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "jwtOptionsFactory": function jwtOptionsFactory() {
          return (
            /* binding */
            _jwtOptionsFactory
          );
        },

        /* harmony export */
        "AppModule": function AppModule() {
          return (
            /* binding */
            _AppModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! tslib */
      3786);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/platform-browser */
      71570);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/common/http */
      53882);
      /* harmony import */


      var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @auth0/angular-jwt */
      21055);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @ionic/angular */
      7602);
      /* harmony import */


      var _ionic_storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @ionic/storage */
      54357);
      /* harmony import */


      var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @ionic/storage-angular */
      90516);
      /* harmony import */


      var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ionic-native/splash-screen/ngx */
      64967);
      /* harmony import */


      var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic-native/status-bar/ngx */
      73588);
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./app.component */
      55041);
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./app-routing.module */
      90158);
      /* harmony import */


      var _components_custom_components_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./components/custom-components.module */
      52719);
      /* harmony import */


      var _angular_service_worker__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/service-worker */
      47334);
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../environments/environment */
      92340); // For JWT


      function _jwtOptionsFactory(storage) {
        return {
          tokenGetter: function tokenGetter() {
            return storage.get('access_token');
          },
          whitelistedDomains: ['localhost:42dfc00']
        };
      }

      var _AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      _AppModule = (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_8__.NgModule)({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__.AppComponent],
        entryComponents: [],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__.BrowserModule, _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_10__.JwtModule.forRoot({
          jwtOptionsProvider: {
            provide: _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_10__.JWT_OPTIONS,
            useFactory: _jwtOptionsFactory,
            deps: [_ionic_storage__WEBPACK_IMPORTED_MODULE_0__.Storage]
          }
        }), _components_custom_components_module__WEBPACK_IMPORTED_MODULE_5__.CustomComponentsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HttpClientModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonicModule.forRoot(), _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_13__.IonicStorageModule.forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_4__.AppRoutingModule, _angular_service_worker__WEBPACK_IMPORTED_MODULE_14__.ServiceWorkerModule.register('ngsw-worker.js', {
          enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_6__.environment.production
        })],
        providers: [_ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_2__.StatusBar, _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_1__.SplashScreen, {
          provide: _angular_router__WEBPACK_IMPORTED_MODULE_15__.RouteReuseStrategy,
          useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonicRouteStrategy
        }],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__.AppComponent]
      })], _AppModule);
      /***/
    },

    /***/
    11822:
    /*!*****************************************************************************!*\
      !*** ./src/app/components/blog-illustration/blog-illustration.component.ts ***!
      \*****************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "BlogIllustrationComponent": function BlogIllustrationComponent() {
          return (
            /* binding */
            _BlogIllustrationComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      3786);
      /* harmony import */


      var _Users_ferro_Desktop_personal_website_eddietaliaferro_com_node_modules_ngtools_webpack_src_loaders_direct_resource_js_blog_illustration_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./blog-illustration.component.html */
      7445);
      /* harmony import */


      var _blog_illustration_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./blog-illustration.component.scss */
      26780);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var _BlogIllustrationComponent = /*#__PURE__*/function () {
        function BlogIllustrationComponent() {
          _classCallCheck(this, BlogIllustrationComponent);
        }

        _createClass(BlogIllustrationComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this4 = this;

            window.onload = function () {
              // Get Pencil SVG Elements
              console.clear();
              _this4.pencil = document.getElementById('Pencil');
              _this4.page = document.getElementById('Page');
              _this4.blogLineOne = document.getElementById('blog-line-1');
              _this4.blogLineTwo = document.getElementById('blog-line-2');
              _this4.blogLineThree = document.getElementById('blog-line-3');
              _this4.blogLineOneLength = _this4.blogLineOne.getTotalLength();
              _this4.blogLineTwoLength = _this4.blogLineTwo.getTotalLength();
              _this4.blogLineThreeLength = _this4.blogLineThree.getTotalLength();
              console.log(_this4.blogLineOne);
              console.log(_this4.blogLineOneLength);
              console.log('\n');
              console.log(_this4.blogLineTwo);
              console.log(_this4.blogLineTwoLength);
              console.log('\n');
              console.log(_this4.blogLineThree);
              console.log(_this4.blogLineThreeLength);
            };
          }
        }]);

        return BlogIllustrationComponent;
      }();

      _BlogIllustrationComponent.ctorParameters = function () {
        return [];
      };

      _BlogIllustrationComponent = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-blog-illustration',
        template: _Users_ferro_Desktop_personal_website_eddietaliaferro_com_node_modules_ngtools_webpack_src_loaders_direct_resource_js_blog_illustration_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_blog_illustration_component_scss__WEBPACK_IMPORTED_MODULE_1__]
      })], _BlogIllustrationComponent);
      /***/
    },

    /***/
    26757:
    /*!***********************************************************************************!*\
      !*** ./src/app/components/contact-illustration/contact-illustration.component.ts ***!
      \***********************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ContactIllustrationComponent": function ContactIllustrationComponent() {
          return (
            /* binding */
            _ContactIllustrationComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      3786);
      /* harmony import */


      var _Users_ferro_Desktop_personal_website_eddietaliaferro_com_node_modules_ngtools_webpack_src_loaders_direct_resource_js_contact_illustration_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./contact-illustration.component.html */
      3744);
      /* harmony import */


      var _contact_illustration_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./contact-illustration.component.scss */
      98508);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var _ContactIllustrationComponent = /*#__PURE__*/function () {
        function ContactIllustrationComponent() {
          _classCallCheck(this, ContactIllustrationComponent);
        }

        _createClass(ContactIllustrationComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return ContactIllustrationComponent;
      }();

      _ContactIllustrationComponent.ctorParameters = function () {
        return [];
      };

      _ContactIllustrationComponent = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-contact-illustration',
        template: _Users_ferro_Desktop_personal_website_eddietaliaferro_com_node_modules_ngtools_webpack_src_loaders_direct_resource_js_contact_illustration_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_contact_illustration_component_scss__WEBPACK_IMPORTED_MODULE_1__]
      })], _ContactIllustrationComponent);
      /***/
    },

    /***/
    52719:
    /*!********************************************************!*\
      !*** ./src/app/components/custom-components.module.ts ***!
      \********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CustomComponentsModule": function CustomComponentsModule() {
          return (
            /* binding */
            _CustomComponentsModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! tslib */
      3786);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @ionic/angular */
      7602);
      /* harmony import */


      var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./navbar/navbar.component */
      33252);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var _header_illustration_header_illustration_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./header-illustration/header-illustration.component */
      62848);
      /* harmony import */


      var _home_illustration_two_home_illustration_two_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./home-illustration-two/home-illustration-two.component */
      24285);
      /* harmony import */


      var _donate_illustration_donate_illustration_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./donate-illustration/donate-illustration.component */
      66943);
      /* harmony import */


      var _contact_illustration_contact_illustration_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./contact-illustration/contact-illustration.component */
      26757);
      /* harmony import */


      var _blog_illustration_blog_illustration_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./blog-illustration/blog-illustration.component */
      11822);
      /* harmony import */


      var _projects_illustration_projects_illustration_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./projects-illustration/projects-illustration.component */
      36602);
      /* harmony import */


      var _design_icon_design_icon_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./design-icon/design-icon.component */
      72284);
      /* harmony import */


      var _development_icon_development_icon_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./development-icon/development-icon.component */
      34039);
      /* harmony import */


      var _instructing_icon_instructing_icon_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./instructing-icon/instructing-icon.component */
      75402);
      /* harmony import */


      var _success_modal_success_modal_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./success-modal/success-modal.component */
      54575);

      var _CustomComponentsModule = function CustomComponentsModule() {
        _classCallCheck(this, CustomComponentsModule);
      };

      _CustomComponentsModule = (0, tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_12__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_14__.RouterModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_15__.IonicModule.forRoot()],
        declarations: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_0__.NavbarComponent, _header_illustration_header_illustration_component__WEBPACK_IMPORTED_MODULE_1__.HeaderIllustrationComponent, _home_illustration_two_home_illustration_two_component__WEBPACK_IMPORTED_MODULE_2__.HomeIllustrationTwoComponent, _donate_illustration_donate_illustration_component__WEBPACK_IMPORTED_MODULE_3__.DonateIllustrationComponent, _contact_illustration_contact_illustration_component__WEBPACK_IMPORTED_MODULE_4__.ContactIllustrationComponent, _blog_illustration_blog_illustration_component__WEBPACK_IMPORTED_MODULE_5__.BlogIllustrationComponent, _projects_illustration_projects_illustration_component__WEBPACK_IMPORTED_MODULE_6__.ProjectsIllustrationComponent, _design_icon_design_icon_component__WEBPACK_IMPORTED_MODULE_7__.DesignIconComponent, _development_icon_development_icon_component__WEBPACK_IMPORTED_MODULE_8__.DevelopmentIconComponent, _instructing_icon_instructing_icon_component__WEBPACK_IMPORTED_MODULE_9__.InstructingIconComponent, _success_modal_success_modal_component__WEBPACK_IMPORTED_MODULE_10__.SuccessModalComponent],
        exports: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_0__.NavbarComponent, _header_illustration_header_illustration_component__WEBPACK_IMPORTED_MODULE_1__.HeaderIllustrationComponent, _home_illustration_two_home_illustration_two_component__WEBPACK_IMPORTED_MODULE_2__.HomeIllustrationTwoComponent, _donate_illustration_donate_illustration_component__WEBPACK_IMPORTED_MODULE_3__.DonateIllustrationComponent, _contact_illustration_contact_illustration_component__WEBPACK_IMPORTED_MODULE_4__.ContactIllustrationComponent, _blog_illustration_blog_illustration_component__WEBPACK_IMPORTED_MODULE_5__.BlogIllustrationComponent, _projects_illustration_projects_illustration_component__WEBPACK_IMPORTED_MODULE_6__.ProjectsIllustrationComponent, _design_icon_design_icon_component__WEBPACK_IMPORTED_MODULE_7__.DesignIconComponent, _development_icon_development_icon_component__WEBPACK_IMPORTED_MODULE_8__.DevelopmentIconComponent, _instructing_icon_instructing_icon_component__WEBPACK_IMPORTED_MODULE_9__.InstructingIconComponent, _success_modal_success_modal_component__WEBPACK_IMPORTED_MODULE_10__.SuccessModalComponent]
      })], _CustomComponentsModule);
      /***/
    },

    /***/
    72284:
    /*!*****************************************************************!*\
      !*** ./src/app/components/design-icon/design-icon.component.ts ***!
      \*****************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "DesignIconComponent": function DesignIconComponent() {
          return (
            /* binding */
            _DesignIconComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      3786);
      /* harmony import */


      var _Users_ferro_Desktop_personal_website_eddietaliaferro_com_node_modules_ngtools_webpack_src_loaders_direct_resource_js_design_icon_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./design-icon.component.html */
      97021);
      /* harmony import */


      var _design_icon_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./design-icon.component.scss */
      81005);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var _DesignIconComponent = /*#__PURE__*/function () {
        function DesignIconComponent() {
          _classCallCheck(this, DesignIconComponent);
        }

        _createClass(DesignIconComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return DesignIconComponent;
      }();

      _DesignIconComponent.ctorParameters = function () {
        return [];
      };

      _DesignIconComponent = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-design-icon',
        template: _Users_ferro_Desktop_personal_website_eddietaliaferro_com_node_modules_ngtools_webpack_src_loaders_direct_resource_js_design_icon_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_design_icon_component_scss__WEBPACK_IMPORTED_MODULE_1__]
      })], _DesignIconComponent);
      /***/
    },

    /***/
    34039:
    /*!***************************************************************************!*\
      !*** ./src/app/components/development-icon/development-icon.component.ts ***!
      \***************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "DevelopmentIconComponent": function DevelopmentIconComponent() {
          return (
            /* binding */
            _DevelopmentIconComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      3786);
      /* harmony import */


      var _Users_ferro_Desktop_personal_website_eddietaliaferro_com_node_modules_ngtools_webpack_src_loaders_direct_resource_js_development_icon_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./development-icon.component.html */
      231);
      /* harmony import */


      var _development_icon_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./development-icon.component.scss */
      71844);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var _DevelopmentIconComponent = /*#__PURE__*/function () {
        function DevelopmentIconComponent() {
          _classCallCheck(this, DevelopmentIconComponent);
        }

        _createClass(DevelopmentIconComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return DevelopmentIconComponent;
      }();

      _DevelopmentIconComponent.ctorParameters = function () {
        return [];
      };

      _DevelopmentIconComponent = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-development-icon',
        template: _Users_ferro_Desktop_personal_website_eddietaliaferro_com_node_modules_ngtools_webpack_src_loaders_direct_resource_js_development_icon_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_development_icon_component_scss__WEBPACK_IMPORTED_MODULE_1__]
      })], _DevelopmentIconComponent);
      /***/
    },

    /***/
    66943:
    /*!*********************************************************************************!*\
      !*** ./src/app/components/donate-illustration/donate-illustration.component.ts ***!
      \*********************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "DonateIllustrationComponent": function DonateIllustrationComponent() {
          return (
            /* binding */
            _DonateIllustrationComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      3786);
      /* harmony import */


      var _Users_ferro_Desktop_personal_website_eddietaliaferro_com_node_modules_ngtools_webpack_src_loaders_direct_resource_js_donate_illustration_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./donate-illustration.component.html */
      14696);
      /* harmony import */


      var _donate_illustration_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./donate-illustration.component.scss */
      60297);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var _DonateIllustrationComponent = /*#__PURE__*/function () {
        function DonateIllustrationComponent() {
          _classCallCheck(this, DonateIllustrationComponent);

          // turn linear-gradient-1 to 401
          // turn linear-gradient-2 to 402
          // turn linear-gradient-3 to 403
          // turn linear-gradient-6 to 404
          // path-4 to 401
          // path-7 to 701
          this.sprite = null;
          this.track = null;
        }

        _createClass(DonateIllustrationComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.init('coin', 'coin-path');
            this.start(1500);
          }
        }, {
          key: "init",
          value: function init(sprite, track) {
            this.sprite = document.getElementById(sprite);
            this.track = document.getElementById(track);
            console.log(this.sprite);
            console.log(this.track);
          }
        }, {
          key: "move",
          value: function move(u) {
            var p = this.track.getPointAtLength(u * this.track.getTotalLength());
            this.sprite.setAttribute("transform", "translate(".concat(p.x, ", ").concat(p.y, ")"));
          }
        }, {
          key: "start",
          value: function start(duration) {
            var _this5 = this;

            this.duration = duration;
            this.tZero = Date.now();
            console.clear();
            console.log('Current moment in time: ');
            console.log(this.tZero);
            requestAnimationFrame(function () {
              return _this5.run();
            });
          }
        }, {
          key: "run",
          value: function run() {
            var _this6 = this;

            var u = Math.min((Date.now() - this.tZero) / this.duration, 1);
            console.log('U: ');
            console.log(u);

            if (u < 1) {
              // Keep requesting frames, till animation is ready
              requestAnimationFrame(function () {
                return _this6.run();
              });
            } else {
              this.onFinish();
            }

            this.move(u);
          }
        }, {
          key: "onFinish",
          value: function onFinish() {
            var _this7 = this;

            // Schedule the animation to restart
            setTimeout(function () {
              return _this7.start(_this7.duration);
            }, 0);
          }
        }]);

        return DonateIllustrationComponent;
      }();

      _DonateIllustrationComponent.ctorParameters = function () {
        return [];
      };

      _DonateIllustrationComponent = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-donate-illustration',
        template: _Users_ferro_Desktop_personal_website_eddietaliaferro_com_node_modules_ngtools_webpack_src_loaders_direct_resource_js_donate_illustration_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_donate_illustration_component_scss__WEBPACK_IMPORTED_MODULE_1__]
      })], _DonateIllustrationComponent);
      /***/
    },

    /***/
    62848:
    /*!*********************************************************************************!*\
      !*** ./src/app/components/header-illustration/header-illustration.component.ts ***!
      \*********************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "HeaderIllustrationComponent": function HeaderIllustrationComponent() {
          return (
            /* binding */
            _HeaderIllustrationComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! tslib */
      3786);
      /* harmony import */


      var _Users_ferro_Desktop_personal_website_eddietaliaferro_com_node_modules_ngtools_webpack_src_loaders_direct_resource_js_header_illustration_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./header-illustration.component.html */
      92504);
      /* harmony import */


      var _header_illustration_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./header-illustration.component.scss */
      47139);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var canvas_confetti__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! canvas-confetti */
      47020);

      var _HeaderIllustrationComponent = /*#__PURE__*/function () {
        function HeaderIllustrationComponent(renderer2, elementRef) {
          _classCallCheck(this, HeaderIllustrationComponent);

          this.renderer2 = renderer2;
          this.elementRef = elementRef;
        }

        _createClass(HeaderIllustrationComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            console.clear();
            this.pillSVGWrapper = document.getElementById('pill-svg').cloneNode;
            this.bugNumbersAnimation();
          }
        }, {
          key: "bugNumbersAnimation",
          value: function bugNumbersAnimation() {
            // The numbers will each rotation up to 10 seconds
            // After 10 seconds, they will all shift up during the pill choice
            var bugOne = document.getElementById('bug-red-1');
            var bugTwo = document.getElementById('bug-red-2');
            var bugThree = document.getElementById('bug-red-3');
            var bugFour = document.getElementById('bug-red-4');
            console.log(bugOne);
            console.log(bugTwo);
            console.log(bugThree);
            console.log(bugFour);
            shiftBugNumbersUp();

            function shiftBugNumbersUp() {
              setTimeout(function () {
                // Add transition to all bug numbers
                bugOne.style.transition = '0.5s';
                bugTwo.style.transition = '0.5s';
                bugThree.style.transition = '0.5s';
                bugFour.style.transition = '0.5s'; // Shift up all numbers

                bugOne.style.animation = 'shift-bug-numbers-up-animation 1s ease forwards';
                bugTwo.style.animation = 'shift-bug-numbers-up-animation 1s ease forwards';
                bugThree.style.animation = 'shift-bug-numbers-up-animation 1s ease forwards';
                bugFour.style.animation = 'shift-bug-numbers-up-animation 1s ease forwards'; // Change their colors at the end of animation

                bugOne.style.fill = 'yellow';
                bugTwo.style.fill = 'yellow';
                bugThree.style.fill = 'yellow';
                bugFour.style.fill = 'yellow';
              }, 10000);
            }
          }
        }, {
          key: "bluePillSelect",
          value: function bluePillSelect() {
            console.clear();
            console.log('User has selected Blue Pill'); // Take Red Pill out of frame

            var redPill = document.getElementById('red-pill');
            redPill.style.transform = 'translateX(1000px)'; // Highlight Blue Pill

            var bluePill = document.getElementById('blue-pill');
            bluePill.style.transform = 'translate(105px, 30px) scale(2)'; // Add shining highlight animation similar to gold name tag
            // Take Select Pill message out of frame

            var selectPillMessage = document.getElementById('select-pill-message');
            selectPillMessage.style.transform = 'cubic-bezier(0.95, 0.05, 0.795, 0.035)';
            selectPillMessage.style.transform = 'translateY(500px)';
            selectPillMessage.style.opacity = '0'; // Add Blue Pill message to frame
            // let bluePillMessage = document.getElementById('blue-pill-message');
            // bluePillMessage.style.opacity = '1';
            // bluePillMessage.style.transition = '0.5s';
            // bluePillMessage.style.transform = 'translate(18px, 330px)';
            // Change color of Tspan/text elements to blue / lightlight
            // First visible row is line 10
            // Destroy lines?

            var bugLineStart = document.getElementById('bug-line-start');
            var bugLineEnd = document.getElementById('bug-line-end');
            var bugLineBinaryStart = bugLineStart.children;
            var bugLineBinaryEnd = bugLineEnd.children;
            var binaryLineTen = document.getElementById('line-10').children;
            var binaryLineEleven = document.getElementById('line-11').children;
            var binaryLineTwelve = document.getElementById('line-12').children;
            var binaryLineThirteen = document.getElementById('line-13').children;
            var binaryLineFourteen = document.getElementById('line-14').children;
            var binaryLineFifthteen = document.getElementById('line-15').children;
            var binaryLineSixteen = document.getElementById('line-16').children;
            var binaryLineSeventeen = document.getElementById('line-17').children;
            var binaryLineEigthteen = document.getElementById('line-18').children;
            var binaryLineNineteen = document.getElementById('line-19').children;
            var binaryLineTwenty = document.getElementById('line-20').children;
            var binaryLineTwentyOne = document.getElementById('line-21').children; // Target every number in the line individually.

            function bluePillCodeDestruction(element, seq) {
              console.log(element);

              for (var i = 0; i < element.length; i++) {
                element[i].style.animation = 'turn-red 1s ease ' + seq * i * 30 + 'ms forwards';
              }
            }

            bluePillCodeDestruction(bugLineBinaryStart, 1);
            bluePillCodeDestruction(bugLineBinaryEnd, 2);
            bluePillCodeDestruction(binaryLineTen, 3);
            bluePillCodeDestruction(binaryLineEleven, 4);
            bluePillCodeDestruction(binaryLineTwelve, 5);
            bluePillCodeDestruction(binaryLineThirteen, 6);
            bluePillCodeDestruction(binaryLineFourteen, 7);
            bluePillCodeDestruction(binaryLineFifthteen, 8);
            bluePillCodeDestruction(binaryLineSixteen, 9);
            bluePillCodeDestruction(binaryLineSeventeen, 10);
            bluePillCodeDestruction(binaryLineEigthteen, 11);
            bluePillCodeDestruction(binaryLineNineteen, 12);
            bluePillCodeDestruction(binaryLineTwenty, 13);
            bluePillCodeDestruction(binaryLineTwentyOne, 14);
            console.clear(); // Get elements parent, then rotate, following by a fall.

            function fallingLines(element) {
              console.log(element);
              element.style.transition = '0.5s';
              console.log(element.getBoundingClientRect());
              var x = element.getBoundingClientRect().x;
              var y = element.getBoundingClientRect().y;
              element.style.transformOrigin = "".concat(x, "+'px '+").concat(y, "+'px'");
              element.style.animation = 'falling-line-rotate 3s ease forwards'; // element.style.animation = 'falling-line-rotate 1s ease forwards';
            }

            setTimeout(function () {
              fallingLines(document.getElementById('line-10'));
            }, 2000);
            setTimeout(function () {
              fallingLines(document.getElementById('line-13'));
            }, 3000);
            setTimeout(function () {
              fallingLines(document.getElementById('line-15'));
            }, 3500); // Change color of background

            console.clear();
            var svg = document.getElementById('pill-svg');
            svg.style.transition = '0.5s';
            svg.style.fill = 'green';
            svg.style.animation = 'svg-wrapper-fall 2s ease 5s forwards'; // remove SVG Wrapper from DOM
            // add game over element to DOM

            setTimeout(function () {
              var gameoverWrapper = document.createElement('div');
              gameOverElementBuild();
              insertAfter(svg, gameoverWrapper);

              function insertAfter(referenceNode, newNode) {
                console.log('Game Over Node added to DOM');
                referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
                setTimeout(function () {
                  svg.remove();
                }, 2000);
              }

              function gameOverElementBuild() {
                var gameOverButton = document.createElement('button');
                gameOverButton.innerHTML = 'Game Over!';
                gameOverButton.style.position = 'relative';
                gameOverButton.style.bottom = '-20%';
                gameOverButton.style.backgroundColor = '#ff000063';
                gameOverButton.style.color = 'white';
                gameOverButton.style.width = '125px';
                gameOverButton.style.height = '40px';
                gameOverButton.style.fontSize = '1em';
                gameOverButton.style.fontWeight = '500';
                gameOverButton.style.border = '3px solid red';
                gameOverButton.style.boxShadow = '1px 1px 5px #000';
                gameOverButton.style.margin = '0 auto';
                gameOverButton.style.padding = '0.5em';
                gameOverButton.style.borderRadius = '5px'; // Make sure picture is 642 x 389

                gameoverWrapper.appendChild(gameOverButton);
                gameoverWrapper.style.width = svg.getBoundingClientRect().width + 'px';
                gameoverWrapper.style.height = svg.getBoundingClientRect().height + 'px'; // Meme Generator
                // https://imgflip.com/memegenerator/Matrix-Morpheus

                gameoverWrapper.style.backgroundImage = "url('https://i.imgflip.com/5t83kk.jpg')";
                gameoverWrapper.style.backgroundSize = 'contain';
                gameoverWrapper.style.backgroundRepeat = 'no-repeat';
                gameoverWrapper.style.margin = '3em auto';
                gameoverWrapper.style.opacity = '0';
                gameoverWrapper.style.animation = 'game-over-slide-up 1s ease 2s forwards';
                gameOverButton.addEventListener('click', function () {
                  window.location.reload();
                });
                var headerWrapper = document.getElementById('landing-page-header');
                headerWrapper.style.transition = '0.5s';
                headerWrapper.style.animation = 'header-background-blue-pill-animation 1s ease 2s forwards';
                headerNameBackgroundAnimation();

                function headerNameBackgroundAnimation() {
                  var headerName = document.getElementById('header-name');
                  var newRedHeaderName = document.createElement('h3');
                  var captions = document.getElementsByClassName('caption');

                  for (var i = 0; i < captions.length; i++) {
                    captions[i]['style'].transition = '0.5s';
                    captions[i]['style'].color = 'red';
                  }

                  newRedHeaderName.innerHTML = 'Exxie Talixferro X';
                  newRedHeaderName.style.color = 'white';
                  newRedHeaderName.style.fontSize = '1.7em';
                  newRedHeaderName.style.margin = '1em auto';
                  newRedHeaderName.style.padding = '6px';
                  newRedHeaderName.style.transition = '500ms';
                  newRedHeaderName.style.borderRadius = '7px';
                  newRedHeaderName.style.marginBottom = '0.5em';
                  newRedHeaderName.style.boxShadow = '1px 1px 3px #0000006e';
                  insertAfter(headerName, newRedHeaderName);

                  function insertAfter(referenceNode, newNode) {
                    console.log('Game Over Node added to DOM');
                    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
                    setTimeout(function () {
                      headerName.remove();
                    }, 10);
                  }

                  var degrees = 180;
                  setInterval(function () {
                    if (degrees === 360) {
                      degrees = 0; // console.log('Going back to 0degs!')
                    }

                    degrees = degrees + 5; // console.log('Rotating Gradient');
                    // console.log(degrees);

                    newRedHeaderName.style.backgroundImage = "linear-gradient(" + degrees + "deg, red, #d01801, red)";
                  }, 50);
                }
              }
            }, 4000);
          }
        }, {
          key: "redPillSelect",
          value: function redPillSelect() {
            var bluePill = document.getElementById('blue-pill');
            var redPill = document.getElementById('red-pill');
            var selectPillMessage = document.getElementById('select-pill-message');
            var svg = document.getElementById('pill-svg');
            var background = document.getElementById('background');
            var headerWrapper = document.getElementById('landing-page-header');
            var bugLineStart = document.getElementById('bug-line-start');
            var bugLineEnd = document.getElementById('bug-line-end');
            var binaryLineTen = document.getElementById('line-10');
            var binaryLineEleven = document.getElementById('line-11');
            var binaryLineTwelve = document.getElementById('line-12');
            var binaryLineThirteen = document.getElementById('line-13');
            var binaryLineFourteen = document.getElementById('line-14');
            var binaryLineFifthteen = document.getElementById('line-15');
            var binaryLineSixteen = document.getElementById('line-16');
            var binaryLineSeventeen = document.getElementById('line-17');
            var binaryLineEigthteen = document.getElementById('line-18');
            var binaryLineNineteen = document.getElementById('line-19');
            var binaryLineTwenty = document.getElementById('line-20');
            var binaryLineTwentyOne = document.getElementById('line-21');

            function transformPills() {
              bluePill.style.transform = 'translateX(-1000px)';
              redPill.style.transform = 'translate(105px, 30px) scale(2)';
              selectPillMessage.style.transform = 'cubic-bezier(0.95, 0.05, 0.795, 0.035)';
              selectPillMessage.style.transform = 'translateY(500px)';
              svg.style.boxShadow = 'none';
              background.style.transition = '0.5s';
              background.style.fill = 'none';
              selectPillMessage.style.opacity = '0';
              headerWrapper.style.transition = '1s';
              headerWrapper.style.animation = 'header-background-red-pill-animation 1s ease-in 2s forwards';
            }

            function addAnimationToLines() {
              bugLineStart.style.animation = 'number-color-animation 0.5s ease 0.1s forwards, number-up 0.5s ease 0.06s forwards';
              bugLineEnd.style.animation = 'number-color-animation 0.5s ease 0.2s forwards, number-up 0.5s ease 0.11s forwards';
              binaryLineTen.style.animation = 'number-color-animation 0.5s ease 0.2s forwards, number-up 0.5s ease 0.16s forwards';
              binaryLineEleven.style.animation = 'number-color-animation 0.5s ease 0.3s forwards, number-up 0.5s ease 0.21s forwards';
              binaryLineTwelve.style.animation = 'number-color-animation 0.5s ease 0.4s forwards, number-up 0.5s ease 0.26s forwards';
              binaryLineThirteen.style.animation = 'number-color-animation 0.5s ease 0.5s forwards, number-up 0.5s ease 0.31s forwards';
              binaryLineFourteen.style.animation = 'number-color-animation 0.5s ease 0.6s forwards, number-up 0.5s ease 0.36s forwards';
              binaryLineFifthteen.style.animation = 'number-color-animation 0.5s ease 0.7s forwards, number-up 0.5s ease 0.41s forwards';
              binaryLineSixteen.style.animation = 'number-color-animation 0.5s ease 0.8s forwards, number-up 0.5s ease 0.46s forwards';
              binaryLineSeventeen.style.animation = 'number-color-animation 0.5s ease 0.9s forwards, number-up 0.5s ease 0.51s forwards';
              binaryLineEigthteen.style.animation = 'number-color-animation 0.5s ease 1s forwards, number-up 0.5s ease 0.56s forwards';
              binaryLineNineteen.style.animation = 'number-color-animation 0.5s ease 1.1s forwards, number-up 0.5s ease 0.61s forwards';
              binaryLineTwenty.style.animation = 'number-color-animation 0.5s ease 1.2s forwards, number-up 0.5s ease 0.66s forwards';
              binaryLineTwentyOne.style.animation = 'number-color-animation 0.5s ease 1.3s forwards, number-up 0.5s ease 0.71s forwards';
            }

            function headerNameBackgroundAnimation() {
              var headerName = document.getElementById('header-name');
              var newRedHeaderName = document.createElement('h3');
              var captions = document.getElementsByClassName('caption');

              for (var i = 0; i < captions.length; i++) {
                captions[i]['style'].transition = '0.5s';
                captions[i]['style'].color = '#3cf63c';
              }

              newRedHeaderName.innerHTML = 'Eddie Taliaferro II';
              newRedHeaderName.style.color = 'white';
              newRedHeaderName.style.fontSize = '1.7em';
              newRedHeaderName.style.margin = '1em auto';
              newRedHeaderName.style.padding = '6px';
              newRedHeaderName.style.transition = '500ms';
              newRedHeaderName.style.borderRadius = '7px';
              newRedHeaderName.style.marginBottom = '0.5em';
              newRedHeaderName.style.boxShadow = '1px 1px 3px #0000006e';
              insertAfter(headerName, newRedHeaderName);

              function insertAfter(referenceNode, newNode) {
                referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
                setTimeout(function () {
                  headerName.remove();
                }, 10);
              }

              var degrees = 180;
              setInterval(function () {
                if (degrees === 360) {
                  degrees = 0; // console.log('Going back to 0degs!')
                }

                degrees = degrees + 5; // console.log('Rotating Gradient');
                // console.log(degrees);

                newRedHeaderName.style.backgroundImage = "linear-gradient(" + degrees + "deg, #3cf63c, #369e2b, #3cf63c)";
              }, 50);
            }

            function confettiGeneration(renderer, elementRef) {
              var confettiOne = renderer.createElement('canvas');
              confettiOne.style.zIndex = '9999';
              confettiOne.style.width = svg.getBoundingClientRect().width + 'px';
              confettiOne.style.height = svg.getBoundingClientRect().height + 'px';
              confettiOne.style.position = 'absolute';
              confettiOne.style.top = '0px';
              confettiOne.style.left = '0px';
              renderer.appendChild(elementRef.nativeElement, confettiOne);
              var confettiTriggerOne = canvas_confetti__WEBPACK_IMPORTED_MODULE_2__.create(confettiOne, {
                resize: true // will fit all screen sizes

              });
              var confettiInterval = setInterval(function () {
                confettiTriggerOne();
                confettiOne.style.top = 100 * Math.random() + 'px';
                confettiOne.style.left = 400 * Math.random() + 'px';
              }, 3000);
              setTimeout(function () {
                clearInterval(confettiInterval);
              }, 50000);
            }

            console.clear();
            transformPills();
            addAnimationToLines();
            headerNameBackgroundAnimation();
            confettiGeneration(this.renderer2, this.elementRef);
          }
        }]);

        return HeaderIllustrationComponent;
      }();

      _HeaderIllustrationComponent.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Renderer2
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ElementRef
        }];
      };

      _HeaderIllustrationComponent = (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-header-illustration',
        template: _Users_ferro_Desktop_personal_website_eddietaliaferro_com_node_modules_ngtools_webpack_src_loaders_direct_resource_js_header_illustration_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_header_illustration_component_scss__WEBPACK_IMPORTED_MODULE_1__]
      })], _HeaderIllustrationComponent);
      /***/
    },

    /***/
    24285:
    /*!*************************************************************************************!*\
      !*** ./src/app/components/home-illustration-two/home-illustration-two.component.ts ***!
      \*************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "HomeIllustrationTwoComponent": function HomeIllustrationTwoComponent() {
          return (
            /* binding */
            _HomeIllustrationTwoComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      3786);
      /* harmony import */


      var _Users_ferro_Desktop_personal_website_eddietaliaferro_com_node_modules_ngtools_webpack_src_loaders_direct_resource_js_home_illustration_two_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./home-illustration-two.component.html */
      67934);
      /* harmony import */


      var _home_illustration_two_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./home-illustration-two.component.scss */
      45031);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var _HomeIllustrationTwoComponent = /*#__PURE__*/function () {
        function HomeIllustrationTwoComponent() {
          _classCallCheck(this, HomeIllustrationTwoComponent);
        }

        _createClass(HomeIllustrationTwoComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            window.onscroll = function () {
              this.scrollRotate();
            };
          }
        }, {
          key: "scrollRotate",
          value: function scrollRotate() {
            console.log(window.scrollY);
            var yin = document.getElementById("yin");
            yin.style.transform = "translateX(" + window.pageYOffset / 2 + "px)";
          }
        }]);

        return HomeIllustrationTwoComponent;
      }();

      _HomeIllustrationTwoComponent.ctorParameters = function () {
        return [];
      };

      _HomeIllustrationTwoComponent = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-home-illustration-two',
        template: _Users_ferro_Desktop_personal_website_eddietaliaferro_com_node_modules_ngtools_webpack_src_loaders_direct_resource_js_home_illustration_two_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_home_illustration_two_component_scss__WEBPACK_IMPORTED_MODULE_1__]
      })], _HomeIllustrationTwoComponent);
      /***/
    },

    /***/
    75402:
    /*!***************************************************************************!*\
      !*** ./src/app/components/instructing-icon/instructing-icon.component.ts ***!
      \***************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "InstructingIconComponent": function InstructingIconComponent() {
          return (
            /* binding */
            _InstructingIconComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      3786);
      /* harmony import */


      var _Users_ferro_Desktop_personal_website_eddietaliaferro_com_node_modules_ngtools_webpack_src_loaders_direct_resource_js_instructing_icon_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./instructing-icon.component.html */
      21004);
      /* harmony import */


      var _instructing_icon_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./instructing-icon.component.scss */
      49185);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var _InstructingIconComponent = /*#__PURE__*/function () {
        function InstructingIconComponent() {
          _classCallCheck(this, InstructingIconComponent);
        }

        _createClass(InstructingIconComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return InstructingIconComponent;
      }();

      _InstructingIconComponent.ctorParameters = function () {
        return [];
      };

      _InstructingIconComponent = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-instructing-icon',
        template: _Users_ferro_Desktop_personal_website_eddietaliaferro_com_node_modules_ngtools_webpack_src_loaders_direct_resource_js_instructing_icon_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_instructing_icon_component_scss__WEBPACK_IMPORTED_MODULE_1__]
      })], _InstructingIconComponent);
      /***/
    },

    /***/
    33252:
    /*!*******************************************************!*\
      !*** ./src/app/components/navbar/navbar.component.ts ***!
      \*******************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "NavbarComponent": function NavbarComponent() {
          return (
            /* binding */
            _NavbarComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! tslib */
      3786);
      /* harmony import */


      var _Users_ferro_Desktop_personal_website_eddietaliaferro_com_node_modules_ngtools_webpack_src_loaders_direct_resource_js_navbar_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./navbar.component.html */
      67653);
      /* harmony import */


      var _navbar_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./navbar.component.scss */
      42138);
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


      var src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/auth/auth.service */
      51228);

      var _NavbarComponent = /*#__PURE__*/function () {
        function NavbarComponent(router, auth, alertController) {
          _classCallCheck(this, NavbarComponent);

          this.router = router;
          this.auth = auth;
          this.alertController = alertController;
        }

        _createClass(NavbarComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this8 = this;

            this.auth.userType.subscribe(function (data) {
              console.log(data);
              _this8.userType = data;
              return;
            });
          }
        }, {
          key: "loginDetectFromBlog",
          value: function loginDetectFromBlog() {
            console.clear();
            console.log('Detecting Blog ...');

            if (this.auth.blogID === null) {
              console.log('No Blogs to return to ');
              this.router.navigate(['/login/', 'no-blog-id']);
            } else {
              console.log('Blog to return to: ' + this.auth.blogID);
              this.router.navigate(['/login/', this.auth.blogID]);
            }
          }
        }, {
          key: "logoutConfirm",
          value: function logoutConfirm() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var _this9 = this;

              var alert;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
                      return this.alertController.create({
                        cssClass: 'my-custom-class',
                        message: 'Are you sure you want to Logout?',
                        buttons: [{
                          text: 'Cancel',
                          role: 'cancel',
                          cssClass: 'secondary',
                          handler: function handler(blah) {
                            console.log('Confirm Cancel: blah');
                          }
                        }, {
                          text: 'Yes',
                          handler: function handler() {
                            _this9.auth.logout();
                          }
                        }]
                      });

                    case 2:
                      alert = _context3.sent;
                      _context3.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }]);

        return NavbarComponent;
      }();

      _NavbarComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router
        }, {
          type: src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.AlertController
        }];
      };

      _NavbarComponent = (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-navbar',
        template: _Users_ferro_Desktop_personal_website_eddietaliaferro_com_node_modules_ngtools_webpack_src_loaders_direct_resource_js_navbar_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_navbar_component_scss__WEBPACK_IMPORTED_MODULE_1__]
      })], _NavbarComponent);
      /***/
    },

    /***/
    36602:
    /*!*************************************************************************************!*\
      !*** ./src/app/components/projects-illustration/projects-illustration.component.ts ***!
      \*************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ProjectsIllustrationComponent": function ProjectsIllustrationComponent() {
          return (
            /* binding */
            _ProjectsIllustrationComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      3786);
      /* harmony import */


      var _Users_ferro_Desktop_personal_website_eddietaliaferro_com_node_modules_ngtools_webpack_src_loaders_direct_resource_js_projects_illustration_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./projects-illustration.component.html */
      42921);
      /* harmony import */


      var _projects_illustration_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./projects-illustration.component.scss */
      92242);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var _ProjectsIllustrationComponent = /*#__PURE__*/function () {
        function ProjectsIllustrationComponent() {
          _classCallCheck(this, ProjectsIllustrationComponent);
        }

        _createClass(ProjectsIllustrationComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return ProjectsIllustrationComponent;
      }();

      _ProjectsIllustrationComponent.ctorParameters = function () {
        return [];
      };

      _ProjectsIllustrationComponent = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-projects-illustration',
        template: _Users_ferro_Desktop_personal_website_eddietaliaferro_com_node_modules_ngtools_webpack_src_loaders_direct_resource_js_projects_illustration_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_projects_illustration_component_scss__WEBPACK_IMPORTED_MODULE_1__]
      })], _ProjectsIllustrationComponent);
      /***/
    },

    /***/
    54575:
    /*!*********************************************************************!*\
      !*** ./src/app/components/success-modal/success-modal.component.ts ***!
      \*********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SuccessModalComponent": function SuccessModalComponent() {
          return (
            /* binding */
            _SuccessModalComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! tslib */
      3786);
      /* harmony import */


      var _Users_ferro_Desktop_personal_website_eddietaliaferro_com_node_modules_ngtools_webpack_src_loaders_direct_resource_js_success_modal_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./success-modal.component.html */
      79290);
      /* harmony import */


      var _success_modal_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./success-modal.component.scss */
      69442);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      7602);

      var _SuccessModalComponent = /*#__PURE__*/function () {
        function SuccessModalComponent(modalController) {
          _classCallCheck(this, SuccessModalComponent);

          this.modalController = modalController;
        }

        _createClass(SuccessModalComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            if (this.page === 'register') {
              this.message = "Thanks for joining my my site, ".concat(this.firstName, ". When you login in, use your email: networkbiz92@gmail.com");
            }

            if (this.page === 'donate') {
              this.message = "Thanks for Donating! I really, really appreciate you for taking the time to do that!";
            }

            if (this.page === 'contact') {
              this.message = "Thanks for contacting me! I will contact you at my earliest convenience at the email you've given me in this form.";
            }
          }
        }, {
          key: "dismiss",
          value: function dismiss() {
            this.modalController.dismiss({
              'dismissed': true
            });
          }
        }]);

        return SuccessModalComponent;
      }();

      _SuccessModalComponent.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.ModalController
        }];
      };

      _SuccessModalComponent.propDecorators = {
        firstName: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
        }],
        picture: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
        }],
        fullName: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
        }],
        email: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
        }],
        page: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
        }]
      };
      _SuccessModalComponent = (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-success-modal',
        template: _Users_ferro_Desktop_personal_website_eddietaliaferro_com_node_modules_ngtools_webpack_src_loaders_direct_resource_js_success_modal_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_success_modal_component_scss__WEBPACK_IMPORTED_MODULE_1__]
      })], _SuccessModalComponent);
      /***/
    },

    /***/
    51228:
    /*!***********************************************!*\
      !*** ./src/app/services/auth/auth.service.ts ***!
      \***********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AuthService": function AuthService() {
          return (
            /* binding */
            _AuthService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! tslib */
      3786);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common/http */
      53882);
      /* harmony import */


      var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @auth0/angular-jwt */
      21055);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var _ionic_storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @ionic/storage */
      54357);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic/angular */
      7602);
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../environments/environment */
      92340);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      98636);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs/operators */
      18293);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      76491);

      var _AuthService = /*#__PURE__*/function () {
        function AuthService(http, storage, alertController, helper, plt, router, toast) {
          var _this10 = this;

          _classCallCheck(this, AuthService);

          this.http = http;
          this.storage = storage;
          this.alertController = alertController;
          this.helper = helper;
          this.plt = plt;
          this.router = router;
          this.toast = toast;
          this.BACKEND_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.url;
          this.blogID = null;
          this.TOKEN_KEY = 'access_token';
          this.user = null;
          this.activeEmail = '';
          this.authenticationState = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject(false);
          this.userType = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject('none');
          this.userFullName = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject('none');
          this.userEmail = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject('none');
          this.userPicture = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject('none'); // Inside the constructor we always check for an existing token so we can automatically log in a user

          this.plt.ready().then(function () {
            _this10.checkToken();
          });
          console.log('Authentication State');
          this.authenticationState.subscribe(console.log);
        }

        _createClass(AuthService, [{
          key: "login",
          value: function login(email, password) {
            var _this11 = this;

            if (email === 'eddielacrosse2@gmail.com') {
              // navigate to admin page?
              this.http.post("".concat(this.BACKEND_URL, "/user/login-user-admin"), {
                email: email,
                password: password
              }).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.tap)(function (res) {
                if (!res) {
                  console.log('There was no response.');
                }

                _this11.storage.set(_this11.TOKEN_KEY, res['token']);

                _this11.user = _this11.helper.decodeToken(res['token']);
                console.log(_this11.user);

                _this11.userType.next('admin');

                _this11.authenticationState.next(true);

                console.log('Active User: ' + _this11.user.email);
              }), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(function (e) {
                console.error(e);

                if (e.error.msg === 'The email and password don\'t match.') {
                  _this11.presentAlert('Incorrect Email/Password', 'The email and password don\'t match.');
                } else if (e.error.msg === 'The user does not exist') {
                  _this11.presentAlert('Nonexistent User Account', 'There is no account with that email address.');
                } else if (e.message.startsWith('Http failure response')) {
                  _this11.presentAlert('Server Connection Error', 'There was a problem connecting to the server. Please try again later.');
                } else {
                  _this11.presentAlert('Email/Password Error', 'Please try again.');
                }

                throw new Error(e);
              })).subscribe(function (data) {
                _this11.userFullName.next(data['fullName']);

                _this11.userPicture.next(data['picture']);

                _this11.userEmail.next(data['email']);
              });
            } // else if () {
            // }
            else {
              this.http.post("".concat(this.BACKEND_URL, "/user/login-user"), {
                email: email,
                password: password
              }).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.tap)(function (res) {
                if (!res) {
                  console.log('There was no response.');
                }

                _this11.storage.set(_this11.TOKEN_KEY, res['token']);

                _this11.user = _this11.helper.decodeToken(res['token']);

                _this11.userType.next('user');

                _this11.authenticationState.next(true);

                console.log('Active User: ' + _this11.user.email);
              }), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(function (e) {
                console.error(e);

                if (e.error.msg === 'The email and password don\'t match.') {
                  _this11.presentAlert('Incorrect Email/Password', 'The email and password don\'t match.');
                } else if (e.error.msg === 'The user does not exist') {
                  _this11.presentAlert('Nonexistent User Account', 'There is no account with that email address.');
                } else if (e.message.startsWith('Http failure response')) {
                  _this11.presentAlert('Server Connection Error', 'There was a problem connecting to the server. Please try again later.');
                } else {
                  _this11.presentAlert('Email/Password Error', 'Please try again.');
                }

                throw new Error(e);
              })).subscribe(function (data) {
                console.log(data);

                _this11.userFullName.next(data['fullName']);

                _this11.userPicture.next(data['picture']);

                _this11.userEmail.next(data['email']);
              });
            }
          }
        }, {
          key: "logout",
          value: function logout() {
            var _this12 = this;

            this.storage.remove(this.TOKEN_KEY).then(function (token) {
              console.log('Logging out...');
              _this12.user = null;

              _this12.authenticationState.next(false);

              _this12.userType.next('none');

              _this12.userFullName.next('none');

              _this12.userPicture.next('none');

              _this12.userEmail.next('none');

              window.location.reload();
            });
          }
        }, {
          key: "register",
          value: function register(fullName, picture, email, password) {
            return this.http.post("".concat(this.BACKEND_URL, "/user/register-user"), {
              fullName: fullName,
              picture: picture,
              email: email,
              password: password
            });
          }
        }, {
          key: "checkEmail",
          value: function checkEmail(email) {
            console.log('Checking to see if user exists with that email' + email);
            return this.http.post("".concat(this.BACKEND_URL, "/user/check-email"), {
              email: email
            });
          }
        }, {
          key: "updateProfile",
          value: function updateProfile(updatedProfile) {
            console.log(updatedProfile);
            return this.http.post("".concat(this.BACKEND_URL, "/user/update-profile-user"), updatedProfile);
          }
        }, {
          key: "changePassword",
          value: function changePassword(email, password, newPassword) {
            return this.http.post("".concat(this.BACKEND_URL, "/user/change-password-user"), {
              email: email,
              oldPassword: password,
              newPassword: newPassword
            });
          }
        }, {
          key: "sendRegistrationCode",
          value: function sendRegistrationCode(email, code) {
            return this.http.post("".concat(this.BACKEND_URL, "/user/send-code"), {
              email: email,
              code: code
            });
          } // looks up our storage for a valid JWT and if found, changes our authenticationState

        }, {
          key: "checkToken",
          value: function checkToken() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var _this13 = this;

              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      this.storage.get(this.TOKEN_KEY).then(function (token) {
                        if (token) {
                          var decoded = _this13.helper.decodeToken(token);

                          var isExpired = _this13.helper.isTokenExpired(token);

                          if (!isExpired) {
                            _this13.user = decoded;
                            console.log('Decoded Token: ' + JSON.stringify(decoded));

                            _this13.authenticationState.next(true);

                            console.log(decoded); // Check to see if the Token is for an admin or user

                            if (decoded.email === 'eddielacrosse2@gmail.com') {
                              _this13.userType.next('admin');

                              _this13.userPicture.next(decoded.picture);

                              _this13.userEmail.next(decoded.email);

                              _this13.userFullName.next(decoded.fullName);
                            } else if (decoded.email !== 'eddielacrosse2@gmail.com' && decoded.email !== '') {
                              _this13.userType.next('user');

                              _this13.userPicture.next(decoded.picture);

                              _this13.userEmail.next(decoded.email);

                              _this13.userFullName.next(decoded.fullName);
                            }
                          } else {
                            console.log('Token Removed from Storage');

                            _this13.storage.remove(_this13.TOKEN_KEY);
                          }
                        }
                      });

                    case 1:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
          }
        }, {
          key: "presentAlert",
          value: function presentAlert(header, msg) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              var alert;
              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      _context5.next = 2;
                      return this.alertController.create({
                        cssClass: 'danger-alert',
                        header: header,
                        message: msg,
                        buttons: [{
                          text: 'OK'
                        }]
                      });

                    case 2:
                      alert = _context5.sent;
                      _context5.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this);
            }));
          }
        }]);

        return AuthService;
      }();

      _AuthService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient
        }, {
          type: _ionic_storage__WEBPACK_IMPORTED_MODULE_0__.Storage
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.AlertController
        }, {
          type: _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_8__.JwtHelperService
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.Platform
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.Router
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ToastController
        }];
      };

      _AuthService = (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_10__.Injectable)({
        providedIn: 'root'
      })], _AuthService);
      /***/
    },

    /***/
    92340:
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "environment": function environment() {
          return (
            /* binding */
            _environment
          );
        }
        /* harmony export */

      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.
      // import 'zone.js/plugins/zone-error';


      var ip = '10.0.1.16';
      var mobileIP = '172.20.10.2';
      var baseUrl = "http://".concat(ip, ":3000");
      var stripeKeyLive = 'pk_live_51JfTbQEo9mAig2o8WBjwlzGV5JPOjLICIj7zGlVqlKFbloDjnXJxw7fauYLTGfYPyGlVDdaN7ThdUg75mwVbXJRY00fP3MSXx6';
      var stripeKeyTest = 'pk_test_51JfTbQEo9mAig2o8V8YUYYdgLtvnvzWvVfnUnnySoAmrCP7AdEvnJ6AGBGbQf6lYGUiKOCMurhKUFf9p6odalfmi00ojrGPFVe';
      var _environment = {
        production: false,
        url: baseUrl,
        stripeKey: stripeKeyTest
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    14431:
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser-dynamic */
      61882);
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./app/app.module */
      36747);
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./environments/environment */
      92340);

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
        (0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
      }

      (0, _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)["catch"](function (err) {
        return console.log(err);
      });
      /***/
    },

    /***/
    50863:
    /*!******************************************************************************************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/ lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
      \******************************************************************************************************************************************/

    /***/
    function _(module, __unused_webpack_exports, __webpack_require__) {
      var map = {
        "./ion-action-sheet.entry.js": [90733, "common", "node_modules_ionic_core_dist_esm_ion-action-sheet_entry_js"],
        "./ion-alert.entry.js": [20985, "common", "node_modules_ionic_core_dist_esm_ion-alert_entry_js"],
        "./ion-app_8.entry.js": [93899, "common", "node_modules_ionic_core_dist_esm_ion-app_8_entry_js"],
        "./ion-avatar_3.entry.js": [5121, "common", "node_modules_ionic_core_dist_esm_ion-avatar_3_entry_js"],
        "./ion-back-button.entry.js": [52960, "common", "node_modules_ionic_core_dist_esm_ion-back-button_entry_js"],
        "./ion-backdrop.entry.js": [45473, "node_modules_ionic_core_dist_esm_ion-backdrop_entry_js"],
        "./ion-button_2.entry.js": [19787, "common", "node_modules_ionic_core_dist_esm_ion-button_2_entry_js"],
        "./ion-card_5.entry.js": [66165, "common", "node_modules_ionic_core_dist_esm_ion-card_5_entry_js"],
        "./ion-checkbox.entry.js": [69569, "common", "node_modules_ionic_core_dist_esm_ion-checkbox_entry_js"],
        "./ion-chip.entry.js": [35119, "common", "node_modules_ionic_core_dist_esm_ion-chip_entry_js"],
        "./ion-col_3.entry.js": [90799, "node_modules_ionic_core_dist_esm_ion-col_3_entry_js"],
        "./ion-datetime_3.entry.js": [68918, "common", "node_modules_ionic_core_dist_esm_ion-datetime_3_entry_js"],
        "./ion-fab_3.entry.js": [94028, "common", "node_modules_ionic_core_dist_esm_ion-fab_3_entry_js"],
        "./ion-img.entry.js": [98107, "node_modules_ionic_core_dist_esm_ion-img_entry_js"],
        "./ion-infinite-scroll_2.entry.js": [72178, "node_modules_ionic_core_dist_esm_ion-infinite-scroll_2_entry_js"],
        "./ion-input.entry.js": [20123, "common", "node_modules_ionic_core_dist_esm_ion-input_entry_js"],
        "./ion-item-option_3.entry.js": [18706, "common", "node_modules_ionic_core_dist_esm_ion-item-option_3_entry_js"],
        "./ion-item_8.entry.js": [12099, "common", "node_modules_ionic_core_dist_esm_ion-item_8_entry_js"],
        "./ion-loading.entry.js": [84868, "common", "node_modules_ionic_core_dist_esm_ion-loading_entry_js"],
        "./ion-menu_3.entry.js": [54377, "common", "node_modules_ionic_core_dist_esm_ion-menu_3_entry_js"],
        "./ion-modal.entry.js": [15678, "common", "node_modules_ionic_core_dist_esm_ion-modal_entry_js"],
        "./ion-nav_2.entry.js": [16735, "common", "node_modules_ionic_core_dist_esm_ion-nav_2_entry_js"],
        "./ion-popover.entry.js": [87686, "common", "node_modules_ionic_core_dist_esm_ion-popover_entry_js"],
        "./ion-progress-bar.entry.js": [48555, "common", "node_modules_ionic_core_dist_esm_ion-progress-bar_entry_js"],
        "./ion-radio_2.entry.js": [30568, "common", "node_modules_ionic_core_dist_esm_ion-radio_2_entry_js"],
        "./ion-range.entry.js": [6231, "common", "node_modules_ionic_core_dist_esm_ion-range_entry_js"],
        "./ion-refresher_2.entry.js": [45772, "common", "node_modules_ionic_core_dist_esm_ion-refresher_2_entry_js"],
        "./ion-reorder_2.entry.js": [14977, "common", "node_modules_ionic_core_dist_esm_ion-reorder_2_entry_js"],
        "./ion-ripple-effect.entry.js": [42886, "node_modules_ionic_core_dist_esm_ion-ripple-effect_entry_js"],
        "./ion-route_4.entry.js": [54990, "common", "node_modules_ionic_core_dist_esm_ion-route_4_entry_js"],
        "./ion-searchbar.entry.js": [13810, "common", "node_modules_ionic_core_dist_esm_ion-searchbar_entry_js"],
        "./ion-segment_2.entry.js": [2446, "common", "node_modules_ionic_core_dist_esm_ion-segment_2_entry_js"],
        "./ion-select_3.entry.js": [47619, "common", "node_modules_ionic_core_dist_esm_ion-select_3_entry_js"],
        "./ion-slide_2.entry.js": [28393, "node_modules_ionic_core_dist_esm_ion-slide_2_entry_js"],
        "./ion-spinner.entry.js": [56281, "common", "node_modules_ionic_core_dist_esm_ion-spinner_entry_js"],
        "./ion-split-pane.entry.js": [35932, "node_modules_ionic_core_dist_esm_ion-split-pane_entry_js"],
        "./ion-tab-bar_2.entry.js": [57970, "common", "node_modules_ionic_core_dist_esm_ion-tab-bar_2_entry_js"],
        "./ion-tab_2.entry.js": [80298, "common", "node_modules_ionic_core_dist_esm_ion-tab_2_entry_js"],
        "./ion-text.entry.js": [71006, "common", "node_modules_ionic_core_dist_esm_ion-text_entry_js"],
        "./ion-textarea.entry.js": [74783, "common", "node_modules_ionic_core_dist_esm_ion-textarea_entry_js"],
        "./ion-toast.entry.js": [62749, "common", "node_modules_ionic_core_dist_esm_ion-toast_entry_js"],
        "./ion-toggle.entry.js": [55404, "common", "node_modules_ionic_core_dist_esm_ion-toggle_entry_js"],
        "./ion-virtual-scroll.entry.js": [39043, "node_modules_ionic_core_dist_esm_ion-virtual-scroll_entry_js"]
      };

      function webpackAsyncContext(req) {
        if (!__webpack_require__.o(map, req)) {
          return Promise.resolve().then(function () {
            var e = new Error("Cannot find module '" + req + "'");
            e.code = 'MODULE_NOT_FOUND';
            throw e;
          });
        }

        var ids = map[req],
            id = ids[0];
        return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function () {
          return __webpack_require__(id);
        });
      }

      webpackAsyncContext.keys = function () {
        return Object.keys(map);
      };

      webpackAsyncContext.id = 50863;
      module.exports = webpackAsyncContext;
      /***/
    },

    /***/
    75158:
    /*!***************************************************************************************************!*\
      !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/app.component.html ***!
      \***************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-app>\n  <app-navbar></app-navbar>\n  <ion-menu side=\"end\" menuId=\"first\" contentId=\"main\">\n    <ion-header>\n      <ion-toolbar>\n        <ion-buttons slot=\"start\">\n          <img id=\"logo\" src=\"../assets/gold-logo.svg\" alt=\"Side menu logo\">\n        </ion-buttons>\n        <ion-buttons (click)=\"closeMenu()\" slot=\"end\">\n          <ion-icon slot=\"start\" name=\"close\"></ion-icon>\n        </ion-buttons>\n      </ion-toolbar>\n    </ion-header>\n    <ion-content>\n      <ion-list>\n        <ion-item (click)=closeMenu() routerLink=\"/home\">\n          <p routerLinkActive=\"active-link\">Home</p>\n        </ion-item>\n        <ion-item (click)=closeMenu() routerLink=\"/about\">\n          <p routerLinkActive=\"active-link\">About</p>\n        </ion-item>\n        <ion-item (click)=closeMenu() routerLink=\"/projects\">\n          <p routerLinkActive=\"active-link\">Projects</p>\n        </ion-item>\n        <ion-item (click)=closeMenu() routerLink=\"/blog\">\n          <p routerLinkActive=\"active-link\">Blog</p>\n        </ion-item>\n        <ion-item (click)=closeMenu() routerLink=\"/contact\">\n          <p routerLinkActive=\"active-link\">Contact</p>\n        </ion-item>\n        <ion-item (click)=closeMenu() routerLink=\"/donate\" >\n          <p routerLinkActive=\"active-link\">Donate</p>\n        </ion-item>\n        <ion-item *ngIf=\"this.userType === 'admin'\"  (click)=closeMenu() routerLink=\"/admin\">\n          <p routerLinkActive=\"active-link\">Admin</p>\n        </ion-item>\n        <ion-item *ngIf=\"this.userType === 'user'\"  (click)=closeMenu() routerLink=\"/profile\">\n          <p routerLinkActive=\"active-link\">Profile</p>\n          <img style=\"margin-left: 1em; border-radius: 100px;\" src=\"{{this.userPicture}}\" height=\"40\" alt=\"User Profile Picture\">\n        </ion-item>\n        <ion-item *ngIf=\"this.userType === 'none'\" (click)=\"loginDetectFromBlog()\">\n          <p routerLinkActive=\"active-link\">Login</p>\n        </ion-item>\n        <ion-item *ngIf=\"this.userType === 'admin' || this.userType === 'user'\" (click)=logoutConfirm()>\n          <p>Logout</p>\n        </ion-item>\n      </ion-list>\n\n      <ion-button id=\"bottom-close-button\"\n        (click)=\"closeMenu()\">\n        Close\n      </ion-button>\n    </ion-content>\n  </ion-menu>\n  <ion-router-outlet id=\"main\"></ion-router-outlet>\n</ion-app>\n";
      /***/
    },

    /***/
    7445:
    /*!**********************************************************************************************************************************************!*\
      !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/components/blog-illustration/blog-illustration.component.html ***!
      \**********************************************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<link rel=\"stylesheet\" href=\"./blog-illustration.component.scss\">\n<svg width=\"500px\" height=\"500px\" viewBox=\"0 0 1050 1050\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\n    <title>Blog-Illustration</title>\n    <defs>\n        <linearGradient x1=\"19.3655756%\" y1=\"1.2504013%\" x2=\"81.0784411%\" y2=\"96.8702998%\" id=\"linearGradient-123\">\n            <stop stop-color=\"#857246\" offset=\"0%\"></stop>\n            <stop stop-color=\"#C2B48E\" offset=\"26.8176755%\"></stop>\n            <stop stop-color=\"#938156\" offset=\"56.0202594%\"></stop>\n            <stop stop-color=\"#C7B994\" offset=\"83.3263814%\"></stop>\n            <stop stop-color=\"#847145\" offset=\"100%\"></stop>\n        </linearGradient>\n        <path d=\"M34.5,6.5 L249.5,6.5\" id=\"path-1000\"></path>\n        <filter x=\"-2.8%\" y=\"-600.0%\" width=\"105.6%\" height=\"1300.0%\" filterUnits=\"objectBoundingBox\" id=\"filter-3\">\n            <feMorphology radius=\"0.5\" operator=\"dilate\" in=\"SourceAlpha\" result=\"shadowSpreadOuter1\"></feMorphology>\n            <feOffset dx=\"0\" dy=\"0\" in=\"shadowSpreadOuter1\" result=\"shadowOffsetOuter1\"></feOffset>\n            <feMorphology radius=\"1\" operator=\"erode\" in=\"SourceAlpha\" result=\"shadowInner\"></feMorphology>\n            <feOffset dx=\"0\" dy=\"0\" in=\"shadowInner\" result=\"shadowInner\"></feOffset>\n            <feComposite in=\"shadowOffsetOuter1\" in2=\"shadowInner\" operator=\"out\" result=\"shadowOffsetOuter1\"></feComposite>\n            <feGaussianBlur stdDeviation=\"2\" in=\"shadowOffsetOuter1\" result=\"shadowBlurOuter1\"></feGaussianBlur>\n            <feColorMatrix values=\"0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.5 0\" type=\"matrix\" in=\"shadowBlurOuter1\"></feColorMatrix>\n        </filter>\n        <linearGradient x1=\"50%\" y1=\"0%\" x2=\"50%\" y2=\"100%\" id=\"linearGradient-456\">\n            <stop stop-color=\"#EEEEEE\" offset=\"0%\"></stop>\n            <stop stop-color=\"#3F3F3F\" offset=\"100%\"></stop>\n        </linearGradient>\n    </defs>\n    <g id=\"Blog-Illustration\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\">\n        <path d=\"M266.82433,168.741789 L758.752291,168.741789 C780.843681,168.741789 798.752291,186.650399 798.752291,208.741789 L798.752291,839.570225 C798.752291,861.661615 780.843681,879.570225 758.752291,879.570225 L266.82433,879.570225 C244.73294,879.570225 226.82433,861.661615 226.82433,839.570225 L226.82433,208.741789 C226.82433,186.650399 244.73294,168.741789 266.82433,168.741789 Z\" id=\"Page\" stroke=\"#847145\" stroke-width=\"4\" fill=\"url(#linearGradient-123)\"></path>\n        <polyline id=\"blog-line-1\" stroke=\"#1D071F\" stroke-width=\"9\" points=\"329.010175 337.77629 412.448778 380.245654 461.160895 337.77629 518.363232 371.94781 717.982402 272.953949\"></polyline>\n        <polyline id=\"blog-line-2\" stroke=\"#1D071F\" stroke-width=\"9\" points=\"329.010175 404.77629 412.448778 447.245654 461.160895 404.77629 518.363232 438.94781 717.982402 339.953949\"></polyline>\n        <polyline id=\"blog-line-3\" stroke=\"#1D071F\" stroke-width=\"9\" points=\"329.010175 458.77629 412.448778 501.245654 461.160895 458.77629 518.363232 492.94781 717.982402 393.953949\"></polyline>\n        <g id=\"Pencil\" transform=\"translate(59.000000, 327.000000)\">\n            <rect id=\"Pencil-Yellow-Wrapper\" fill=\"#E8B923\" x=\"13\" y=\"0\" width=\"245\" height=\"13\"></rect>\n            <path d=\"M4,0 L13,0 L13,0 L13,13 L4,13 C1.790861,13 2.705415e-16,11.209139 0,9 L0,4 C-2.705415e-16,1.790861 1.790861,4.05812251e-16 4,0 Z\" id=\"Eraser\" fill=\"#FF77C3\"></path>\n            <g id=\"Pencil-Shadow\" stroke-linecap=\"square\">\n                <use fill=\"black\" fill-opacity=\"1\" filter=\"url(#filter-3)\" xlink:href=\"#path-1000\"></use>\n                <use stroke-opacity=\"0.0684993717\" stroke=\"#757575\" stroke-width=\"1\" xlink:href=\"#path-1000\"></use>\n            </g>\n            <polygon id=\"Pencil-Wood-Before-Lead\" fill=\"#A18355\" transform=\"translate(264.500000, 6.500000) rotate(90.000000) translate(-264.500000, -6.500000) \" points=\"264.5 0 271 13 258 13\"></polygon>\n            <polygon id=\"Pencil-Lead\" fill=\"#000000\" transform=\"translate(268.500000, 6.500000) rotate(90.000000) translate(-268.500000, -6.500000) \" points=\"268.5 4 271 9 266 9\"></polygon>\n        </g>\n        <path d=\"M458.5,606 C479.210678,606 496,622.789322 496,643.5 C496,646.574409 495.630029,649.562407 494.93218,652.4219 C505.763531,658.996293 513,670.903062 513,684.5 C513,705.210678 496.210678,722 475.5,722 C463.878338,722 453.49144,716.713344 446.612999,708.413725 C439.861363,714.966074 430.651768,719 420.5,719 C399.789322,719 383,702.210678 383,681.5 C383,660.789322 399.789322,644 420.5,644 C420.668358,644 420.836456,644.001109 421.004289,644.003321 L421,643.5 C421,622.789322 437.789322,606 458.5,606 Z\" id=\"bounce-cloud\" fill=\"url(#linearGradient-456)\"></path>\n    </g>\n</svg>";
      /***/
    },

    /***/
    3744:
    /*!****************************************************************************************************************************************************!*\
      !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/components/contact-illustration/contact-illustration.component.html ***!
      \****************************************************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<svg id=\"Contract-Illustration\" width=\"500px\" height=\"500px\" viewBox=\"0 0 1050 1050\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\n    <title>Contact-Illustration</title>\n    <defs>\n        <linearGradient x1=\"50%\" y1=\"0%\" x2=\"50%\" y2=\"100%\" id=\"linearGradient-100\">\n            <stop stop-color=\"#D3B900\" offset=\"0%\"></stop>\n            <stop stop-color=\"#A58100\" offset=\"47.157901%\"></stop>\n            <stop stop-color=\"#F4BE12\" offset=\"100%\"></stop>\n        </linearGradient>\n        <polygon id=\"path-200\" points=\"78 316.07732 525 525.5 972 316.07732 972 735 78 735\"></polygon>\n        <filter x=\"-8.7%\" y=\"-18.0%\" width=\"117.3%\" height=\"137.0%\" filterUnits=\"objectBoundingBox\" id=\"filter-3\">\n            <feOffset dx=\"0\" dy=\"2\" in=\"SourceAlpha\" result=\"shadowOffsetOuter1\"></feOffset>\n            <feGaussianBlur stdDeviation=\"25.5\" in=\"shadowOffsetOuter1\" result=\"shadowBlurOuter1\"></feGaussianBlur>\n            <feColorMatrix values=\"0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.5 0\" type=\"matrix\" in=\"shadowBlurOuter1\"></feColorMatrix>\n        </filter>\n        <linearGradient x1=\"50%\" y1=\"0%\" x2=\"50%\" y2=\"100%\" id=\"linearGradient-4\">\n            <stop stop-color=\"#EEEEEE\" offset=\"0%\"></stop>\n            <stop stop-color=\"#3F3F3F\" offset=\"100%\"></stop>\n        </linearGradient>\n    </defs>\n    <g id=\"Contact-Illustration\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\">\n        <rect id=\"Envelope-Back\" fill=\"#D8D8D8\" x=\"78\" y=\"316\" width=\"894\" height=\"419\"></rect>\n        <rect id=\"Letter\" fill=\"url(#linearGradient-100)\" x=\"78\" y=\"380\" width=\"894\" height=\"355\"></rect>\n        <g id=\"Envelope-Bottom\">\n            <use fill=\"black\" fill-opacity=\"1\" filter=\"url(#filter-3)\" xlink:href=\"#path-200\"></use>\n            <use fill=\"#D8D8D8\" fill-rule=\"evenodd\" xlink:href=\"#path-200\"></use>\n        </g>\n        <polyline id=\"Envelope-Top\" fill=\"#AEAEAE\" points=\"78 316.07732 525 77 972 316.07732\"></polyline>\n    </g>\n</svg>";
      /***/
    },

    /***/
    97021:
    /*!**********************************************************************************************************************************!*\
      !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/components/design-icon/design-icon.component.html ***!
      \**********************************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<svg width=\"100px\" height=\"100px\" viewBox=\"0 0 400 400\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\n    <title>design-icon</title>\n    <g id=\"design-icon\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\">\n        <path d=\"M372.876859,346.817266 L372.876859,92.591571 L372.876859,92.591571 C372.876859,89.395103 370.293959,86.8046626 367.10851,86.8046626 L322.787781,86.8046626 L338.876219,70.664463 L354.385135,55.1048793 C357.706445,51.772883 359.535584,47.3404884 359.535584,42.6277966 C359.535584,37.9151047 357.706445,33.4842503 354.385135,30.1507138 L336.459115,12.16702 C333.137805,8.83502365 328.719625,7 324.022047,7 C319.324469,7 314.907057,8.83502365 311.584979,12.16702 L296.075295,27.7266037 L277.334107,46.5280881 L237.187469,86.8038926 L58.1360547,86.8038926 L58.1360547,29.5546969 C58.1360547,26.3582289 55.5531543,23.7677885 52.3677051,23.7677885 C27.352334,23.7693286 7,44.185603 7,69.2829974 L7,315.07144 C7,315.498817 7.049125,315.914642 7.13662891,316.315067 C7.933375,326.964057 12.5257949,336.858399 20.2008086,344.369445 C28.4046836,352.396422 39.2344434,356.817266 50.6959199,356.817266 L362.876859,356.817266 C368.399707,356.817266 372.876859,352.340113 372.876859,346.817266 Z M319.744334,20.3518569 C322.102334,17.9847303 325.944063,17.9847303 328.302063,20.3518569 L346.22885,38.3363208 C348.588385,40.7026773 348.588385,44.5552259 346.22885,46.9223525 L334.798844,58.3899028 L308.312793,31.8194072 L319.744334,20.3518569 Z M300.154973,40.003474 L326.640256,66.5731996 L316.056121,77.1913872 L289.572373,50.6216617 L300.154973,40.003474 Z M361.339393,348.217808 L50.6966875,345.244989 C33.2020469,345.244989 19.1185234,331.54276 18.564332,314.023405 C18.5973379,312.923777 18.6825391,311.83339 18.819168,310.755323 C18.8199355,310.749162 18.8207031,310.743002 18.8214707,310.736842 C18.8859473,310.22476 18.9634727,309.714988 19.0517441,309.208297 C19.0617227,309.150543 19.0724687,309.09279 19.0824473,309.035036 C19.163043,308.583018 19.2536172,308.13331 19.3526348,307.685143 C19.3802676,307.560395 19.4094355,307.435647 19.4386035,307.311669 C19.5261074,306.932806 19.6205195,306.556253 19.7218398,306.181239 C19.7771055,305.977947 19.8346738,305.776964 19.8937773,305.574442 C19.9782109,305.280284 20.0657148,304.986895 20.1585918,304.696587 C20.2514687,304.40628 20.3504863,304.119052 20.4510391,303.831824 C20.5208887,303.630841 20.5899707,303.429859 20.6651934,303.230417 C20.8056602,302.851553 20.9545703,302.47654 21.1080859,302.104607 C21.1518379,301.99757 21.1948223,301.888994 21.2401094,301.781957 C21.437377,301.319928 21.6423203,300.86329 21.8587773,300.412042 C21.8679883,300.392791 21.8764316,300.37354 21.8856426,300.354289 C26.3974668,290.987428 35.0749375,284.003866 45.4886699,281.836952 C45.5178379,281.830791 45.5470059,281.823861 45.5761738,281.817701 C46.0536074,281.719904 46.5356465,281.635969 47.0207559,281.558194 C47.1013516,281.545104 47.1819473,281.528933 47.2640781,281.516612 C47.7023652,281.449618 48.1452578,281.397254 48.5881504,281.347201 C48.712498,281.333341 48.8360781,281.314089 48.9611934,281.301769 C49.3887344,281.258646 49.8201133,281.230154 50.2514922,281.203202 C50.3881211,281.194732 50.52475,281.180101 50.6613789,281.173171 C51.2263164,281.144679 51.7958594,281.130048 52.3677051,281.130048 C55.5531543,281.130048 58.1360547,278.539607 58.1360547,275.34314 L58.1360547,233.384011 C58.1360547,230.187543 55.5531543,227.597102 52.3677051,227.597102 C49.1822559,227.597102 46.5993555,230.187543 46.5993555,233.384011 L46.5993555,269.920464 C36.8587891,271.15639 27.8174863,275.51486 20.6882207,282.499193 C19.9382969,283.233818 19.2275195,283.997706 18.5351641,284.773914 L18.5351641,69.2829974 C18.5351641,52.5413906 30.6828555,38.5904365 46.5985879,35.8352059 L46.5985879,92.591571 L46.5985879,210.237147 C46.5985879,213.433615 49.1814883,216.024826 52.3669375,216.024826 C55.5523867,216.024826 58.1352871,213.433615 58.1352871,210.237917 L58.1352871,98.3784794 L225.651537,98.3784794 L193.763271,130.369341 C191.51043,132.630201 191.51043,136.293318 193.763271,138.553408 C196.016113,140.812728 199.66825,140.812728 201.920324,138.553408 L243.65585,96.6836045 C243.657385,96.6820644 243.658152,96.6805243 243.659687,96.6797542 L281.413018,58.8049585 L307.896766,85.3754541 L304.789609,88.4926072 L188.472355,205.184864 L161.98784,178.615139 L184.913863,155.615354 C187.166705,153.354494 187.166705,149.691377 184.913863,147.431287 C182.661021,145.171968 179.008885,145.171968 176.756811,147.431287 L149.751109,174.523105 C149.606805,174.667874 149.471711,174.821114 149.345061,174.978204 C149.302844,175.030567 149.265232,175.08678 149.225318,175.141454 C149.143955,175.25003 149.064127,175.359377 148.989672,175.473344 C148.947455,175.539568 148.909076,175.607332 148.869162,175.675867 C148.805453,175.783673 148.744047,175.89302 148.688014,176.004677 C148.65117,176.077062 148.618164,176.150216 148.584391,176.225681 C148.532963,176.338878 148.485373,176.454385 148.441621,176.569892 C148.42627,176.610705 148.406312,176.649207 148.391729,176.69002 L137.153617,208.627748 L129.491652,230.403926 C129.390332,230.693464 129.317412,230.987622 129.262914,231.284091 L110.079602,231.284091 C106.894152,231.284091 104.311252,233.874531 104.311252,237.070999 C104.311252,240.267467 106.894152,242.857908 110.079602,242.857908 L269.823355,242.857908 C273.009572,242.857908 275.591705,240.267467 275.591705,237.070999 C275.591705,233.874531 273.009572,231.284091 269.823355,231.284091 L155.213963,231.284091 L190.392068,218.826259 C190.421236,218.815479 190.448869,218.800848 190.478037,218.790067 C190.614666,218.739244 190.748992,218.68226 190.881783,218.621427 C190.934746,218.596785 190.987709,218.573684 191.039137,218.548272 C191.177301,218.478968 191.313162,218.402733 191.446721,218.321108 C191.489705,218.294926 191.534225,218.271055 191.576441,218.244103 C191.715373,218.154778 191.850467,218.056982 191.983258,217.953795 C192.016264,217.928384 192.050805,217.906052 192.083043,217.879871 C192.243467,217.750503 192.40082,217.611124 192.54973,217.461735 L311.251082,98.3792495 L361.339393,98.3792495 L361.339393,222.007326 L361.339393,348.217808 Z M177.921994,210.967152 L161.399107,216.818745 L150.390502,205.774721 L156.223328,189.198674 L177.921994,210.967152 Z\" id=\"Shape\" fill=\"#D8CCA8\" fill-rule=\"nonzero\"></path>\n        <g id=\"set-square\" transform=\"translate(199.898869, 182.008710)\" stroke=\"#D8CCA8\">\n            <path d=\"M190.907925,0 L190.907925,189.897081 L2,189.897081 C0.8954305,189.897081 0,189.001651 0,187.897081 C0,187.359583 0.216347842,186.844708 0.600269087,186.468532 L190.907925,0 Z M133.651931,98.5339143 L90.6420301,141.544258 L133.651931,141.544258 L133.651931,98.5339143 Z\" id=\"Combined-Shape\" stroke-width=\"9\" fill=\"#000000\"></path>\n            <line x1=\"170.601131\" y1=\"64.4912904\" x2=\"185.601131\" y2=\"64.4912904\" id=\"Line\" stroke-width=\"10\" fill=\"#D8CCA8\" stroke-linecap=\"square\"></line>\n            <line x1=\"170.601131\" y1=\"93.4912904\" x2=\"185.601131\" y2=\"93.4912904\" id=\"Line-Copy\" stroke-width=\"10\" fill=\"#D8CCA8\" stroke-linecap=\"square\"></line>\n            <line x1=\"170.601131\" y1=\"123.49129\" x2=\"185.601131\" y2=\"123.49129\" id=\"Line-Copy-2\" stroke-width=\"10\" fill=\"#D8CCA8\" stroke-linecap=\"square\"></line>\n            <line x1=\"170.601131\" y1=\"152.49129\" x2=\"185.601131\" y2=\"152.49129\" id=\"Line-Copy-3\" stroke-width=\"10\" fill=\"#D8CCA8\" stroke-linecap=\"square\"></line>\n        </g>\n    </g>\n</svg>";
      /***/
    },

    /***/
    231:
    /*!********************************************************************************************************************************************!*\
      !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/components/development-icon/development-icon.component.html ***!
      \********************************************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<svg width=\"100px\" height=\"100px\" viewBox=\"0 0 400 400\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\n  <title>development-icon</title>\n  <g id=\"development-icon\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\">\n      <path d=\"M157.383819,262 C155.871242,262 154.347597,261.504476 153.104331,260.495858 L110.324205,225.795132 C108.84852,224.596738 108,222.846589 108,220.99804 C108,219.153004 108.852209,217.402856 110.324205,216.204462 L153.104331,181.503736 C155.88231,179.247522 160.054811,179.567327 162.423286,182.213636 C164.788072,184.863458 164.456043,188.838192 161.674375,191.090892 L124.808059,220.99804 L161.674375,250.905187 C164.456043,253.161402 164.788072,257.136135 162.423286,259.782444 C161.113615,261.247929 159.254251,262 157.383819,262 Z\" id=\"opening-bracket\" fill=\"#D8CCA8\" fill-rule=\"nonzero\"></path>\n      <path d=\"M236.614552,262 C234.744059,262 232.884634,261.247929 231.578608,259.782444 C229.210055,257.136135 229.545784,253.161402 232.323855,250.905187 L269.191386,220.99804 L232.323855,191.090892 C229.545784,188.838192 229.210055,184.863458 231.578608,182.213636 C233.943472,179.567327 238.119801,179.247522 240.894182,181.503736 L283.675718,216.204462 C285.151452,217.402856 286,219.153004 286,220.99804 C286,222.846589 285.151452,224.596738 283.675718,225.795132 L240.894182,260.495858 C239.650875,261.504476 238.127179,262 236.614552,262 L236.614552,262 Z\" id=\"closing-bracket\" fill=\"#D8CCA8\" fill-rule=\"nonzero\"></path>\n      <path d=\"M180.806368,292 C180.339927,292 179.869694,291.954378 179.395669,291.863132 C175.72482,291.147207 173.373656,287.809735 174.147265,284.412601 L201.553492,163.993343 C202.327099,160.59621 205.929689,158.42036 209.604331,159.136284 C213.27518,159.852209 215.626344,163.186173 214.852735,166.586816 L187.446509,287.006073 C186.771497,289.968037 183.950101,292 180.806368,292 L180.806368,292 Z\" id=\"forward-slash\" fill=\"#D8CCA8\" fill-rule=\"nonzero\"></path>\n      <path d=\"M345.879717,359 L43.120283,359 C19.3453535,359 0,339.669851 0,315.905624 L0,59.0943758 C0,35.3337306 19.3453535,16 43.120283,16 L345.879717,16 C369.654647,16 389,35.3337306 389,59.0943758 L389,315.905624 C389,339.669851 369.654647,359 345.879717,359 Z M43.120283,28.8366226 C26.4269425,28.8366226 12.8443396,42.4110649 12.8443396,59.0943758 L12.8443396,315.905624 C12.8443396,332.588935 26.4269425,346.163377 43.120283,346.163377 L345.879717,346.163377 C362.573057,346.163377 376.15566,332.588935 376.15566,315.905624 L376.15566,59.0943758 C376.15566,42.4110649 362.573057,28.8366226 345.879717,28.8366226 L43.120283,28.8366226 Z\" id=\"screen-outline\" fill=\"#D8CCA8\" fill-rule=\"nonzero\"></path>\n      <path d=\"M382.57783,118 L6.42216981,118 C2.87420724,118 0,115.762276 0,113 C0,110.240513 2.87420724,108 6.42216981,108 L382.57783,108 C386.125793,108 389,110.240513 389,113 C389,115.762276 386.125793,118 382.57783,118 Z\" id=\"inner-screen-outline\" fill=\"#D8CCA8\" fill-rule=\"nonzero\"></path>\n      <path d=\"M107.5,88 C96.1998764,88 87,78.8001238 87,67.5 C87,56.1962616 96.1998764,47 107.5,47 C118.803738,47 128,56.1962616 128,67.5 C128,78.8001238 118.803738,88 107.5,88 Z M107.5,59.9557396 C103.342885,59.9557396 99.9557399,63.3392698 99.9557399,67.5 C99.9557399,71.6607302 103.342885,75.0442604 107.5,75.0442604 C111.66073,75.0442604 115.04426,71.6607302 115.04426,67.5 C115.04426,63.3392698 111.66073,59.9557396 107.5,59.9557396 Z\" id=\"2nd-button\" fill=\"#D8CCA8\" fill-rule=\"nonzero\"></path>\n      <path d=\"M45.5,88 C34.1962618,88 25,78.8037382 25,67.5 C25,56.1962618 34.1962618,47 45.5,47 C56.8037382,47 66,56.1962618 66,67.5 C66,78.8037382 56.8037382,88 45.5,88 Z M45.4999995,59.9557399 C41.3428848,59.9557399 37.9557399,63.3428848 37.9557399,67.4999995 C37.9557399,71.6607298 41.3428848,75.0442601 45.4999995,75.0442601 C49.6607298,75.0442601 53.0442601,71.6607298 53.0442601,67.4999995 C53.0442601,63.3428848 49.6607298,59.9557399 45.4999995,59.9557399 Z\" id=\"1st-button\" fill=\"#D8CCA8\" fill-rule=\"nonzero\"></path>\n      <path d=\"M173.498192,88 C162.197073,88 153,78.8029276 153,67.4981925 C153,56.1970724 162.197073,47 173.498192,47 C184.802927,47 194,56.1970724 194,67.4981925 C194,78.8029276 184.802927,88 173.498192,88 Z M173.498192,59.9532669 C169.340711,59.9532669 165.956882,63.3370954 165.956882,67.4981925 C165.956882,71.6592896 169.340711,75.0431181 173.498192,75.0431181 C177.659289,75.0431181 181.043118,71.6592896 181.043118,67.4981925 C181.043118,63.3370954 177.659289,59.9532669 173.498192,59.9532669 Z\" id=\"3rd-button\" fill=\"#D8CCA8\" fill-rule=\"nonzero\"></path>\n  </g>\n</svg>";
      /***/
    },

    /***/
    14696:
    /*!**************************************************************************************************************************************************!*\
      !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/components/donate-illustration/donate-illustration.component.html ***!
      \**************************************************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<svg width=\"500px\" height=\"500px\" viewBox=\"0 0 1050 1050\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\n    <title>Donate-Illustration</title>\n    <defs>\n        <linearGradient x1=\"2.67870164%\" y1=\"49.7248355%\" x2=\"98.0071754%\" y2=\"50.2645569%\" id=\"linearGradient-401\">\n            <stop stop-color=\"#000000\" offset=\"0%\"></stop>\n            <stop stop-color=\"#C2B48E\" offset=\"26.8176755%\"></stop>\n            <stop stop-color=\"#000000\" offset=\"56.5617488%\"></stop>\n            <stop stop-color=\"#C7B994\" offset=\"83.3263814%\"></stop>\n            <stop stop-color=\"#000000\" offset=\"100%\"></stop>\n        </linearGradient>\n        <radialGradient cx=\"50%\" cy=\"50%\" fx=\"50%\" fy=\"50%\" r=\"100%\" id=\"linearGradient-201\">\n            <stop stop-color=\"#76F173\" offset=\"0%\"></stop>\n            <stop stop-color=\"#6AFF00\" stop-opacity=\"0.131763485\" offset=\"100%\"></stop>\n        </radialGradient>\n        <circle id=\"path-300\" cx=\"43.5\" cy=\"42.5\" r=\"36.5\"></circle>\n        <filter x=\"-13.0%\" y=\"-13.0%\" width=\"126.0%\" height=\"126.0%\" filterUnits=\"objectBoundingBox\" id=\"filter-4\">\n            <feGaussianBlur stdDeviation=\"5\" in=\"SourceAlpha\" result=\"shadowBlurInner1\"></feGaussianBlur>\n            <feOffset dx=\"0\" dy=\"1\" in=\"shadowBlurInner1\" result=\"shadowOffsetInner1\"></feOffset>\n            <feComposite in=\"shadowOffsetInner1\" in2=\"SourceAlpha\" operator=\"arithmetic\" k2=\"-1\" k3=\"1\" result=\"shadowInnerInner1\"></feComposite>\n            <feColorMatrix values=\"0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 1 0\" type=\"matrix\" in=\"shadowInnerInner1\"></feColorMatrix>\n        </filter>\n        <linearGradient x1=\"23.7159145%\" y1=\"1.2504013%\" x2=\"76.6650482%\" y2=\"96.8702998%\" id=\"linearGradient-501\">\n            <stop stop-color=\"#857246\" offset=\"0%\"></stop>\n            <stop stop-color=\"#C2B48E\" offset=\"26.8176755%\"></stop>\n            <stop stop-color=\"#938156\" offset=\"56.0202594%\"></stop>\n            <stop stop-color=\"#C7B994\" offset=\"83.3263814%\"></stop>\n            <stop stop-color=\"#847145\" offset=\"100%\"></stop>\n        </linearGradient>\n        <linearGradient x1=\"2.67870164%\" y1=\"37.3375023%\" x2=\"98.0071754%\" y2=\"62.1743579%\" id=\"linearGradient-601\">\n            <stop stop-color=\"#857246\" offset=\"0%\"></stop>\n            <stop stop-color=\"#C2B48E\" offset=\"26.8176755%\"></stop>\n            <stop stop-color=\"#938156\" offset=\"56.0202594%\"></stop>\n            <stop stop-color=\"#C7B994\" offset=\"83.3263814%\"></stop>\n            <stop stop-color=\"#847145\" offset=\"100%\"></stop>\n        </linearGradient>\n        <rect id=\"path-701\" x=\"399\" y=\"490\" width=\"259\" height=\"132\" rx=\"17\"></rect>\n        <filter x=\"-4.8%\" y=\"-8.0%\" width=\"109.7%\" height=\"118.9%\" filterUnits=\"objectBoundingBox\" id=\"filter-8\">\n            <feMorphology radius=\"2.5\" operator=\"dilate\" in=\"SourceAlpha\" result=\"shadowSpreadOuter1\"></feMorphology>\n            <feOffset dx=\"0\" dy=\"2\" in=\"shadowSpreadOuter1\" result=\"shadowOffsetOuter1\"></feOffset>\n            <feGaussianBlur stdDeviation=\"3\" in=\"shadowOffsetOuter1\" result=\"shadowBlurOuter1\"></feGaussianBlur>\n            <feComposite in=\"shadowBlurOuter1\" in2=\"SourceAlpha\" operator=\"out\" result=\"shadowBlurOuter1\"></feComposite>\n            <feColorMatrix values=\"0 0 0 0 0.439215686   0 0 0 0 0.376470588   0 0 0 0 0.235294118  0 0 0 1 0\" type=\"matrix\" in=\"shadowBlurOuter1\"></feColorMatrix>\n        </filter>\n    </defs>\n    <g id=\"Donate-Illustration\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\">\n        <path d=\"M526.130266,403.722656 C592.796932,403.722656 657.086844,413.389323 719,432.722656 L333,432.722656 C395.086844,413.389323 459.463599,403.722656 526.130266,403.722656 Z\" id=\"top-of-jar\" fill=\"url(#linearGradient-401)\" transform=\"translate(526.000000, 418.222656) scale(1, -1) translate(-526.000000, -418.222656) \"></path>\n        <g id=\"coin\">\n            <use fill=\"url(#linearGradient-201)\" fill-rule=\"evenodd\" xlink:href=\"#path-300\"></use>\n            <use fill=\"black\" fill-opacity=\"1\" filter=\"url(#filter-4)\" xlink:href=\"#path-300\"></use>\n            <use stroke=\"#847145\" stroke-width=\"8\" xlink:href=\"#path-300\"></use>\n        </g>\n        <path d=\"M333,403.722656 L719.000704,403.722656 L719.242985,887.000004 C719.270218,906.329959 703.608042,922.007847 684.278078,922.017538 C684.272229,922.017541 684.26638,922.017542 684.260531,922 L368,922 C348.670034,922 333,906.329966 333,887 L333,403.722656 L333,403.722656 Z\" id=\"jar-wrapper\" stroke=\"#979797\" fill=\"url(#linearGradient-501)\" opacity=\"0.831255232\"></path>\n        <g id=\"tip-text-wrapper\">\n            <use fill=\"black\" fill-opacity=\"1\" filter=\"url(#filter-8)\" xlink:href=\"#path-701\"></use>\n            <use stroke=\"#1D071F\" stroke-width=\"5\" fill=\"url(#linearGradient-601)\" fill-rule=\"evenodd\" xlink:href=\"#path-701\"></use>\n        </g>\n        <text id=\"TIPS\" font-family=\"Trattatello\" font-size=\"65\" font-weight=\"normal\" fill=\"#1D071F\">\n            <tspan x=\"465.5675\" y=\"571\">TIPS</tspan>\n        </text>\n        <path d=\"M1171.04575,556 C871.662985,208.485599 685.538419,37.6767673 612.672047,43.573504 C539.805675,49.4702407 490.852272,162.112406 465.811837,381.5 L452.313273,832.017327\" id=\"coin-path\"></path>\n    </g>\n</svg>";
      /***/
    },

    /***/
    92504:
    /*!**************************************************************************************************************************************************!*\
      !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/components/header-illustration/header-illustration.component.html ***!
      \**************************************************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<link rel=\"stylesheet\" href=\"./header-illustration.component.scss\">\n<svg id=\"pill-svg\" viewBox=\"0 0 500 500\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\n    <title>Header-Artwork</title>\n    <defs>\n        <rect id=\"h-path-1\" x=\"0\" y=\"0\" width=\"72\" height=\"136\" rx=\"36\"></rect>\n        <rect id=\"h-path-3\" x=\"0\" y=\"0\" width=\"72\" height=\"136\" rx=\"36\"></rect>\n        <rect id=\"h-path-5\" x=\"0\" y=\"0\" width=\"72\" height=\"136\" rx=\"36\"></rect>\n        <rect id=\"h-path-7\" x=\"0\" y=\"0\" width=\"72\" height=\"136\" rx=\"36\"></rect>\n        <linearGradient x1=\"2.67870164%\" y1=\"44.7685478%\" x2=\"98.0071754%\" y2=\"55.0297795%\" id=\"linearGradient-999\">\n            <stop stop-color=\"#857246\" offset=\"0%\"></stop>\n            <stop stop-color=\"#C2B48E\" offset=\"26.8176755%\"></stop>\n            <stop stop-color=\"#938156\" offset=\"56.0202594%\"></stop>\n            <stop stop-color=\"#C7B994\" offset=\"83.3263814%\"></stop>\n            <stop stop-color=\"#847145\" offset=\"100%\"></stop>\n        </linearGradient>\n    </defs>\n    <style>\n    </style>\n    <g id=\"Header-Artwork\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\">\n        <rect id=\"background\" fill=\"#000\" x=\"0\" y=\"0\" width=\"500\" height=\"500\"></rect>\n        <text id=\"line-1\">\n            <tspan x=\"0\" y=\"19\">0</tspan>\n            <tspan x=\"16.7\" y=\"19\">1</tspan>\n            <tspan x=\"33.4\" y=\"19\">0</tspan>\n            <tspan x=\"50.1\" y=\"19\">1</tspan>\n            <tspan x=\"66.8\" y=\"19\">0</tspan>\n            <tspan x=\"83.5\" y=\"19\">1</tspan>\n            <tspan x=\"100.2\" y=\"19\">0</tspan>\n            <tspan x=\"116.9\" y=\"19\">1</tspan>\n            <tspan x=\"132\" y=\"19\">0</tspan>\n            <tspan x=\"150.3\" y=\"19\">1</tspan>\n            <tspan x=\"167\" y=\"19\">0</tspan>\n            <tspan x=\"183.5\" y=\"19\">1</tspan>\n            <tspan x=\"200.4\" y=\"19\">0</tspan>\n            <tspan x=\"217.1\" y=\"19\">1</tspan>\n            <tspan x=\"233.8\" y=\"19\">0</tspan>\n            <tspan x=\"250.5\" y=\"19\">1</tspan>\n            <tspan x=\"267.2\" y=\"19\">0</tspan>\n            <tspan x=\"283.9\" y=\"19\">1</tspan>\n            <tspan x=\"300.6\" y=\"19\">0</tspan>\n            <tspan x=\"317.3\" y=\"19\">1</tspan>\n            <tspan x=\"334\" y=\"19\">0</tspan>\n            <tspan x=\"350.7\" y=\"19\">1</tspan>\n            <tspan x=\"367.4\" y=\"19\">0</tspan>\n            <tspan x=\"384.1\" y=\"19\">1</tspan>\n            <tspan x=\"400.8\" y=\"19\">0</tspan>\n            <tspan x=\"417.5\" y=\"19\">1</tspan>\n            <tspan x=\"434.2\" y=\"19\">0</tspan>\n            <tspan x=\"450.9\" y=\"19\">1</tspan>\n            <tspan x=\"467.6\" y=\"19\">0</tspan>\n            <tspan x=\"484.3\" y=\"19\">1</tspan>\n        </text>\n        <text id=\"line-2\">\n            <tspan x=\"0\" y=\"43\">0</tspan>\n            <tspan x=\"16.7\" y=\"43\">1</tspan>\n            <tspan x=\"33.4\" y=\"43\">0</tspan>\n            <tspan x=\"50.1\" y=\"43\">1</tspan>\n            <tspan x=\"66.8\" y=\"43\">0</tspan>\n            <tspan x=\"83.5\" y=\"43\">1</tspan>\n            <tspan x=\"100.2\" y=\"43\">0</tspan>\n            <tspan x=\"116.9\" y=\"43\">1</tspan>\n            <tspan x=\"132\" y=\"43\">0</tspan>\n            <tspan x=\"150.3\" y=\"43\">1</tspan>\n            <tspan x=\"167\" y=\"43\">0</tspan>\n            <tspan x=\"183.5\" y=\"43\">1</tspan>\n            <tspan x=\"200.4\" y=\"43\">0</tspan>\n            <tspan x=\"217.1\" y=\"43\">1</tspan>\n            <tspan x=\"233.8\" y=\"43\">0</tspan>\n            <tspan x=\"250.5\" y=\"43\">1</tspan>\n            <tspan x=\"267.2\" y=\"43\">0</tspan>\n            <tspan x=\"283.9\" y=\"43\">1</tspan>\n            <tspan x=\"300.6\" y=\"43\">0</tspan>\n            <tspan x=\"317.3\" y=\"43\">1</tspan>\n            <tspan x=\"334\" y=\"43\">0</tspan>\n            <tspan x=\"350.7\" y=\"43\">1</tspan>\n            <tspan x=\"367.4\" y=\"43\">0</tspan>\n            <tspan x=\"384.1\" y=\"43\">1</tspan>\n            <tspan x=\"400.8\" y=\"43\">0</tspan>\n            <tspan x=\"417.5\" y=\"43\">1</tspan>\n            <tspan x=\"434.2\" y=\"43\">0</tspan>\n            <tspan x=\"450.9\" y=\"43\">1</tspan>\n            <tspan x=\"467.6\" y=\"43\">0</tspan>\n            <tspan x=\"484.3\" y=\"43\">1</tspan>\n        </text>\n        <text id=\"line-3\">\n            <tspan x=\"0\" y=\"67\">0</tspan>\n            <tspan x=\"16.7\" y=\"67\">1</tspan>\n            <tspan x=\"33.4\" y=\"67\">0</tspan>\n            <tspan x=\"50.1\" y=\"67\">1</tspan>\n            <tspan x=\"66.8\" y=\"67\">0</tspan>\n            <tspan x=\"83.5\" y=\"67\">1</tspan>\n            <tspan x=\"100.2\" y=\"67\">0</tspan>\n            <tspan x=\"116.9\" y=\"67\">1</tspan>\n            <tspan x=\"132\" y=\"67\">0</tspan>\n            <tspan x=\"150.3\" y=\"67\">1</tspan>\n            <tspan x=\"167\" y=\"67\">0</tspan>\n            <tspan x=\"183.5\" y=\"67\">1</tspan>\n            <tspan x=\"200.4\" y=\"67\">0</tspan>\n            <tspan x=\"217.1\" y=\"67\">1</tspan>\n            <tspan x=\"233.8\" y=\"67\">0</tspan>\n            <tspan x=\"250.5\" y=\"67\">1</tspan>\n            <tspan x=\"267.2\" y=\"67\">0</tspan>\n            <tspan x=\"283.9\" y=\"67\">1</tspan>\n            <tspan x=\"300.6\" y=\"67\">0</tspan>\n            <tspan x=\"317.3\" y=\"67\">1</tspan>\n            <tspan x=\"334\" y=\"67\">0</tspan>\n            <tspan x=\"350.7\" y=\"67\">1</tspan>\n            <tspan x=\"367.4\" y=\"67\">0</tspan>\n            <tspan x=\"384.1\" y=\"67\">1</tspan>\n            <tspan x=\"400.8\" y=\"67\">0</tspan>\n            <tspan x=\"417.5\" y=\"67\">1</tspan>\n            <tspan x=\"434.2\" y=\"67\">0</tspan>\n            <tspan x=\"450.9\" y=\"67\">1</tspan>\n            <tspan x=\"467.6\" y=\"67\">0</tspan>\n            <tspan x=\"484.3\" y=\"67\">1</tspan>\n        </text>\n        <text id=\"line-4\">\n            <tspan x=\"0\" y=\"91\">0</tspan>\n            <tspan x=\"16.7\" y=\"91\">1</tspan>\n            <tspan x=\"33.4\" y=\"91\">0</tspan>\n            <tspan x=\"50.1\" y=\"91\">1</tspan>\n            <tspan x=\"66.8\" y=\"91\">0</tspan>\n            <tspan x=\"83.5\" y=\"91\">1</tspan>\n            <tspan x=\"100.2\" y=\"91\">0</tspan>\n            <tspan x=\"116.9\" y=\"91\">1</tspan>\n            <tspan x=\"132\" y=\"91\">0</tspan>\n            <tspan x=\"150.3\" y=\"91\">1</tspan>\n            <tspan x=\"167\" y=\"91\">0</tspan>\n            <tspan x=\"183.5\" y=\"91\">1</tspan>\n            <tspan x=\"200.4\" y=\"91\">0</tspan>\n            <tspan x=\"217.1\" y=\"91\">1</tspan>\n            <tspan x=\"233.8\" y=\"91\">0</tspan>\n            <tspan x=\"250.5\" y=\"91\">1</tspan>\n            <tspan x=\"267.2\" y=\"91\">0</tspan>\n            <tspan x=\"283.9\" y=\"91\">1</tspan>\n            <tspan x=\"300.6\" y=\"91\">0</tspan>\n            <tspan x=\"317.3\" y=\"91\">1</tspan>\n            <tspan x=\"334\" y=\"91\">0</tspan>\n            <tspan x=\"350.7\" y=\"91\">1</tspan>\n            <tspan x=\"367.4\" y=\"91\">0</tspan>\n            <tspan x=\"384.1\" y=\"91\">1</tspan>\n            <tspan x=\"400.8\" y=\"91\">0</tspan>\n            <tspan x=\"417.5\" y=\"91\">1</tspan>\n            <tspan x=\"434.2\" y=\"91\">0</tspan>\n            <tspan x=\"450.9\" y=\"91\">1</tspan>\n            <tspan x=\"467.6\" y=\"91\">0</tspan>\n            <tspan x=\"484.3\" y=\"91\">1</tspan>\n        </text>\n        <text id=\"line-5\">\n            <tspan x=\"0\" y=\"115\">0</tspan>\n            <tspan x=\"16.7\" y=\"115\">1</tspan>\n            <tspan x=\"33.4\" y=\"115\">0</tspan>\n            <tspan x=\"50.1\" y=\"115\">1</tspan>\n            <tspan x=\"66.8\" y=\"115\">0</tspan>\n            <tspan x=\"83.5\" y=\"115\">1</tspan>\n            <tspan x=\"100.2\" y=\"115\">0</tspan>\n            <tspan x=\"116.9\" y=\"115\">1</tspan>\n            <tspan x=\"132\" y=\"115\">0</tspan>\n            <tspan x=\"150.3\" y=\"115\">1</tspan>\n            <tspan x=\"167\" y=\"115\">0</tspan>\n            <tspan x=\"183.5\" y=\"115\">1</tspan>\n            <tspan x=\"200.4\" y=\"115\">0</tspan>\n            <tspan x=\"217.1\" y=\"115\">1</tspan>\n            <tspan x=\"233.8\" y=\"115\">0</tspan>\n            <tspan x=\"250.5\" y=\"115\">1</tspan>\n            <tspan x=\"267.2\" y=\"115\">0</tspan>\n            <tspan x=\"283.9\" y=\"115\">1</tspan>\n            <tspan x=\"300.6\" y=\"115\">0</tspan>\n            <tspan x=\"317.3\" y=\"115\">1</tspan>\n            <tspan x=\"334\" y=\"115\">0</tspan>\n            <tspan x=\"350.7\" y=\"115\">1</tspan>\n            <tspan x=\"367.4\" y=\"115\">0</tspan>\n            <tspan x=\"384.1\" y=\"115\">1</tspan>\n            <tspan x=\"400.8\" y=\"115\">0</tspan>\n            <tspan x=\"417.5\" y=\"115\">1</tspan>\n            <tspan x=\"434.2\" y=\"115\">0</tspan>\n            <tspan x=\"450.9\" y=\"115\">1</tspan>\n            <tspan x=\"467.6\" y=\"115\">0</tspan>\n            <tspan x=\"484.3\" y=\"115\">1</tspan>\n        </text>\n        <text id=\"line-6\">\n            <tspan x=\"0\" y=\"139\">0</tspan>\n            <tspan x=\"16.7\" y=\"139\">1</tspan>\n            <tspan x=\"33.4\" y=\"139\">0</tspan>\n            <tspan x=\"50.1\" y=\"139\">1</tspan>\n            <tspan x=\"66.8\" y=\"139\">0</tspan>\n            <tspan x=\"83.5\" y=\"139\">1</tspan>\n            <tspan x=\"100.2\" y=\"139\">0</tspan>\n            <tspan x=\"116.9\" y=\"139\">1</tspan>\n            <tspan x=\"132\" y=\"139\">0</tspan>\n            <tspan x=\"150.3\" y=\"139\">1</tspan>\n            <tspan x=\"167\" y=\"139\">0</tspan>\n            <tspan x=\"183.5\" y=\"139\">1</tspan>\n            <tspan x=\"200.4\" y=\"139\">0</tspan>\n            <tspan x=\"217.1\" y=\"139\">1</tspan>\n            <tspan x=\"233.8\" y=\"139\">0</tspan>\n            <tspan x=\"250.5\" y=\"139\">1</tspan>\n            <tspan x=\"267.2\" y=\"139\">0</tspan>\n            <tspan x=\"283.9\" y=\"139\">1</tspan>\n            <tspan x=\"300.6\" y=\"139\">0</tspan>\n            <tspan x=\"317.3\" y=\"139\">1</tspan>\n            <tspan x=\"334\" y=\"139\">0</tspan>\n            <tspan x=\"350.7\" y=\"139\">1</tspan>\n            <tspan x=\"367.4\" y=\"139\">0</tspan>\n            <tspan x=\"384.1\" y=\"139\">1</tspan>\n            <tspan x=\"400.8\" y=\"139\">0</tspan>\n            <tspan x=\"417.5\" y=\"139\">1</tspan>\n            <tspan x=\"434.2\" y=\"139\">0</tspan>\n            <tspan x=\"450.9\" y=\"139\">1</tspan>\n            <tspan x=\"467.6\" y=\"139\">0</tspan>\n            <tspan x=\"484.3\" y=\"139\">1</tspan>\n        </text>\n        <text id=\"line-7\">\n            <tspan x=\"0\" y=\"163\">0</tspan>\n            <tspan x=\"16.7\" y=\"163\">1</tspan>\n            <tspan x=\"33.4\" y=\"163\">0</tspan>\n            <tspan x=\"50.1\" y=\"163\">1</tspan>\n            <tspan x=\"66.8\" y=\"163\">0</tspan>\n            <tspan x=\"83.5\" y=\"163\">1</tspan>\n            <tspan x=\"100.2\" y=\"163\">0</tspan>\n            <tspan x=\"116.9\" y=\"163\">1</tspan>\n            <tspan x=\"132\" y=\"163\">0</tspan>\n            <tspan x=\"150.3\" y=\"163\">1</tspan>\n            <tspan x=\"167\" y=\"163\">0</tspan>\n            <tspan x=\"183.5\" y=\"163\">1</tspan>\n            <tspan x=\"200.4\" y=\"163\">0</tspan>\n            <tspan x=\"217.1\" y=\"163\">1</tspan>\n            <tspan x=\"233.8\" y=\"163\">0</tspan>\n            <tspan x=\"250.5\" y=\"163\">1</tspan>\n            <tspan x=\"267.2\" y=\"163\">0</tspan>\n            <tspan x=\"283.9\" y=\"163\">1</tspan>\n            <tspan x=\"300.6\" y=\"163\">0</tspan>\n            <tspan x=\"317.3\" y=\"163\">1</tspan>\n            <tspan x=\"334\" y=\"163\">0</tspan>\n            <tspan x=\"350.7\" y=\"163\">1</tspan>\n            <tspan x=\"367.4\" y=\"163\">0</tspan>\n            <tspan x=\"384.1\" y=\"163\">1</tspan>\n            <tspan x=\"400.8\" y=\"163\">0</tspan>\n            <tspan x=\"417.5\" y=\"163\">1</tspan>\n            <tspan x=\"434.2\" y=\"163\">0</tspan>\n            <tspan x=\"450.9\" y=\"163\">1</tspan>\n            <tspan x=\"467.6\" y=\"163\">0</tspan>\n            <tspan x=\"484.3\" y=\"163\">1</tspan>\n        </text>\n        <text id=\"line-8\">\n            <tspan x=\"0\" y=\"187\">0</tspan>\n            <tspan x=\"16.7\" y=\"187\">1</tspan>\n            <tspan x=\"33.4\" y=\"187\">0</tspan>\n            <tspan x=\"50.1\" y=\"187\">1</tspan>\n            <tspan x=\"66.8\" y=\"187\">0</tspan>\n            <tspan x=\"83.5\" y=\"187\">1</tspan>\n            <tspan x=\"100.2\" y=\"187\">0</tspan>\n            <tspan x=\"116.9\" y=\"187\">1</tspan>\n            <tspan x=\"132\" y=\"187\">0</tspan>\n            <tspan x=\"150.3\" y=\"187\">1</tspan>\n            <tspan x=\"167\" y=\"187\">0</tspan>\n            <tspan x=\"183.5\" y=\"187\">1</tspan>\n            <tspan x=\"200.4\" y=\"187\">0</tspan>\n            <tspan x=\"217.1\" y=\"187\">1</tspan>\n            <tspan x=\"233.8\" y=\"187\">0</tspan>\n            <tspan x=\"250.5\" y=\"187\">1</tspan>\n            <tspan x=\"267.2\" y=\"187\">0</tspan>\n            <tspan x=\"283.9\" y=\"187\">1</tspan>\n            <tspan x=\"300.6\" y=\"187\">0</tspan>\n            <tspan x=\"317.3\" y=\"187\">1</tspan>\n            <tspan x=\"334\" y=\"187\">0</tspan>\n            <tspan x=\"350.7\" y=\"187\">1</tspan>\n            <tspan x=\"367.4\" y=\"187\">0</tspan>\n            <tspan x=\"384.1\" y=\"187\">1</tspan>\n            <tspan x=\"400.8\" y=\"187\">0</tspan>\n            <tspan x=\"417.5\" y=\"187\">1</tspan>\n            <tspan x=\"434.2\" y=\"187\">0</tspan>\n            <tspan x=\"450.9\" y=\"187\">1</tspan>\n            <tspan x=\"467.6\" y=\"187\">0</tspan>\n            <tspan x=\"484.3\" y=\"187\">1</tspan>\n        </text>\n\n        <!-- Bug (Red)-->\n        <text id=\"bug-red-1\">\n            <tspan x=\"233.8\" y=\"211\">1</tspan>\n        </text>\n        <text id=\"bug-red-2\">\n            <tspan x=\"250.5\" y=\"211\">0</tspan>\n        </text>\n        <text id=\"bug-red-3\">\n            <tspan x=\"267.2\" y=\"211\">1</tspan>\n        </text>\n        <text id=\"bug-red-4\">\n            <tspan x=\"283.9\" y=\"211\">0</tspan>\n        </text>\n        <!--  -->\n        <!-- Bug Fix (Green) -->\n        <!-- <text id=\"bug-fix-middle-1\">\n            <tspan x=\"233.8\" y=\"261\">0</tspan>\n        </text>\n        <text id=\"bug-fix-middle-2\">\n            <tspan x=\"250.5\" y=\"261\">1</tspan>\n        </text>\n        <text id=\"bug-fix-middle-3\">\n            <tspan x=\"267.2\" y=\"261\">0</tspan>\n        </text>\n        <text id=\"bug-fix-middle-4\">\n            <tspan x=\"283.9\" y=\"261\">1</tspan>\n        </text> -->\n        <!-- Beginning and End of line with Bug in the middle; Start and End are two different elements -->\n        <text id=\"bug-line-start\">\n            <tspan x=\"0\" y=\"211\">0</tspan>\n            <tspan x=\"16.7\" y=\"211\">1</tspan>\n            <tspan x=\"33.4\" y=\"211\">0</tspan>\n            <tspan x=\"50.1\" y=\"211\">1</tspan>\n            <tspan x=\"66.8\" y=\"211\">0</tspan>\n            <tspan x=\"83.5\" y=\"211\">1</tspan>\n            <tspan x=\"100.2\" y=\"211\">0</tspan>\n            <tspan x=\"116.9\" y=\"211\">1</tspan>\n            <tspan x=\"132\" y=\"211\">0</tspan>\n            <tspan x=\"150.3\" y=\"211\">1</tspan>\n            <tspan x=\"167\" y=\"211\">0</tspan>\n            <tspan x=\"183.5\" y=\"211\">1</tspan>\n            <tspan x=\"200.4\" y=\"211\">0</tspan>\n            <tspan x=\"217.1\" y=\"211\">1</tspan>\n        </text>\n        <text id=\"bug-line-end\">\n            <tspan x=\"300.6\" y=\"211\">0</tspan>\n            <tspan x=\"317.3\" y=\"211\">1</tspan>\n            <tspan x=\"334\" y=\"211\">0</tspan>\n            <tspan x=\"350.7\" y=\"211\">1</tspan>\n            <tspan x=\"367.4\" y=\"211\">0</tspan>\n            <tspan x=\"384.1\" y=\"211\">1</tspan>\n            <tspan x=\"400.8\" y=\"211\">0</tspan>\n            <tspan x=\"417.5\" y=\"211\">1</tspan>\n            <tspan x=\"434.2\" y=\"211\">0</tspan>\n            <tspan x=\"450.9\" y=\"211\">1</tspan>\n            <tspan x=\"467.6\" y=\"211\">0</tspan>\n            <tspan x=\"484.3\" y=\"211\">1</tspan>\n        </text>\n        <!-- Bug Line End // -->\n\n        <text id=\"line-10\">\n          <tspan x=\"0\" y=\"235\">0</tspan>\n              <tspan x=\"16.7\" y=\"235\">1</tspan>\n              <tspan x=\"33.4\" y=\"235\">0</tspan>\n              <tspan x=\"50.1\" y=\"235\">1</tspan>\n              <tspan x=\"66.8\" y=\"235\">0</tspan>\n              <tspan x=\"83.5\" y=\"235\">1</tspan>\n              <tspan x=\"100.2\" y=\"235\">0</tspan>\n              <tspan x=\"116.9\" y=\"235\">1</tspan>\n              <tspan x=\"132\" y=\"235\">0</tspan>\n              <tspan x=\"150.3\" y=\"235\">1</tspan>\n              <tspan x=\"167\" y=\"235\">0</tspan>\n              <tspan x=\"183.5\" y=\"235\">1</tspan>\n              <tspan x=\"200.4\" y=\"235\">0</tspan>\n              <tspan x=\"217.1\" y=\"235\">1</tspan>\n              <tspan x=\"233.8\" y=\"235\">0</tspan>\n              <tspan x=\"250.5\" y=\"235\">1</tspan>\n              <tspan x=\"267.2\" y=\"235\">0</tspan>\n              <tspan x=\"283.9\" y=\"235\">1</tspan>\n              <tspan x=\"300.6\" y=\"235\">0</tspan>\n              <tspan x=\"317.3\" y=\"235\">1</tspan>\n              <tspan x=\"334\" y=\"235\">0</tspan>\n              <tspan x=\"350.7\" y=\"235\">1</tspan>\n              <tspan x=\"367.4\" y=\"235\">0</tspan>\n              <tspan x=\"384.1\" y=\"235\">1</tspan>\n              <tspan x=\"400.8\" y=\"235\">0</tspan>\n              <tspan x=\"417.5\" y=\"235\">1</tspan>\n              <tspan x=\"434.2\" y=\"235\">0</tspan>\n              <tspan x=\"450.9\" y=\"235\">1</tspan>\n              <tspan x=\"467.6\" y=\"235\">0</tspan>\n              <tspan x=\"484.3\" y=\"235\">1</tspan>\n        </text>\n        <text id=\"line-11\">\n          <tspan x=\"0\" y=\"259\">0</tspan>\n          <tspan x=\"16.7\" y=\"259\">1</tspan>\n          <tspan x=\"33.4\" y=\"259\">0</tspan>\n          <tspan x=\"50.1\" y=\"259\">1</tspan>\n          <tspan x=\"66.8\" y=\"259\">0</tspan>\n          <tspan x=\"83.5\" y=\"259\">1</tspan>\n          <tspan x=\"100.2\" y=\"259\">0</tspan>\n          <tspan x=\"116.9\" y=\"259\">1</tspan>\n          <tspan x=\"132\" y=\"259\">0</tspan>\n          <tspan x=\"150.3\" y=\"259\">1</tspan>\n          <tspan x=\"167\" y=\"259\">0</tspan>\n          <tspan x=\"183.5\" y=\"259\">1</tspan>\n          <tspan x=\"200.4\" y=\"259\">0</tspan>\n          <tspan x=\"217.1\" y=\"259\">1</tspan>\n          <tspan x=\"233.8\" y=\"259\">0</tspan>\n          <tspan x=\"250.5\" y=\"259\">1</tspan>\n          <tspan x=\"267.2\" y=\"259\">0</tspan>\n          <tspan x=\"283.9\" y=\"259\">1</tspan>\n          <tspan x=\"300.6\" y=\"259\">0</tspan>\n          <tspan x=\"317.3\" y=\"259\">1</tspan>\n          <tspan x=\"334\" y=\"259\">0</tspan>\n          <tspan x=\"350.7\" y=\"259\">1</tspan>\n          <tspan x=\"367.4\" y=\"259\">0</tspan>\n          <tspan x=\"384.1\" y=\"259\">1</tspan>\n          <tspan x=\"400.8\" y=\"259\">0</tspan>\n          <tspan x=\"417.5\" y=\"259\">1</tspan>\n          <tspan x=\"434.2\" y=\"259\">0</tspan>\n          <tspan x=\"450.9\" y=\"259\">1</tspan>\n          <tspan x=\"467.6\" y=\"259\">0</tspan>\n          <tspan x=\"484.3\" y=\"259\">1</tspan>\n        </text>\n        <text id=\"line-12\">\n          <tspan x=\"0\" y=\"283\">0</tspan>\n          <tspan x=\"16.7\" y=\"283\">1</tspan>\n          <tspan x=\"33.4\" y=\"283\">0</tspan>\n          <tspan x=\"50.1\" y=\"283\">1</tspan>\n          <tspan x=\"66.8\" y=\"283\">0</tspan>\n          <tspan x=\"83.5\" y=\"283\">1</tspan>\n          <tspan x=\"100.2\" y=\"283\">0</tspan>\n          <tspan x=\"116.9\" y=\"283\">1</tspan>\n          <tspan x=\"132\" y=\"283\">0</tspan>\n          <tspan x=\"150.3\" y=\"283\">1</tspan>\n          <tspan x=\"167\" y=\"283\">0</tspan>\n          <tspan x=\"183.5\" y=\"283\">1</tspan>\n          <tspan x=\"200.4\" y=\"283\">0</tspan>\n          <tspan x=\"217.1\" y=\"283\">1</tspan>\n          <tspan x=\"233.8\" y=\"283\">0</tspan>\n          <tspan x=\"250.5\" y=\"283\">1</tspan>\n          <tspan x=\"267.2\" y=\"283\">0</tspan>\n          <tspan x=\"283.9\" y=\"283\">1</tspan>\n          <tspan x=\"300.6\" y=\"283\">0</tspan>\n          <tspan x=\"317.3\" y=\"283\">1</tspan>\n          <tspan x=\"334\" y=\"283\">0</tspan>\n          <tspan x=\"350.7\" y=\"283\">1</tspan>\n          <tspan x=\"367.4\" y=\"283\">0</tspan>\n          <tspan x=\"384.1\" y=\"283\">1</tspan>\n          <tspan x=\"400.8\" y=\"283\">0</tspan>\n          <tspan x=\"417.5\" y=\"283\">1</tspan>\n          <tspan x=\"434.2\" y=\"283\">0</tspan>\n          <tspan x=\"450.9\" y=\"283\">1</tspan>\n          <tspan x=\"467.6\" y=\"283\">0</tspan>\n          <tspan x=\"484.3\" y=\"283\">1</tspan>\n        </text>\n        <text id=\"line-13\">\n          <tspan x=\"0\" y=\"307\">0</tspan>\n          <tspan x=\"16.7\" y=\"307\">1</tspan>\n          <tspan x=\"33.4\" y=\"307\">0</tspan>\n          <tspan x=\"50.1\" y=\"307\">1</tspan>\n          <tspan x=\"66.8\" y=\"307\">0</tspan>\n          <tspan x=\"83.5\" y=\"307\">1</tspan>\n          <tspan x=\"100.2\" y=\"307\">0</tspan>\n          <tspan x=\"116.9\" y=\"307\">1</tspan>\n          <tspan x=\"132\" y=\"307\">0</tspan>\n          <tspan x=\"150.3\" y=\"307\">1</tspan>\n          <tspan x=\"167\" y=\"307\">0</tspan>\n          <tspan x=\"183.5\" y=\"307\">1</tspan>\n          <tspan x=\"200.4\" y=\"307\">0</tspan>\n          <tspan x=\"217.1\" y=\"307\">1</tspan>\n          <tspan x=\"233.8\" y=\"307\">0</tspan>\n          <tspan x=\"250.5\" y=\"307\">1</tspan>\n          <tspan x=\"267.2\" y=\"307\">0</tspan>\n          <tspan x=\"283.9\" y=\"307\">1</tspan>\n          <tspan x=\"300.6\" y=\"307\">0</tspan>\n          <tspan x=\"317.3\" y=\"307\">1</tspan>\n          <tspan x=\"334\" y=\"307\">0</tspan>\n          <tspan x=\"350.7\" y=\"307\">1</tspan>\n          <tspan x=\"367.4\" y=\"307\">0</tspan>\n          <tspan x=\"384.1\" y=\"307\">1</tspan>\n          <tspan x=\"400.8\" y=\"307\">0</tspan>\n          <tspan x=\"417.5\" y=\"307\">1</tspan>\n          <tspan x=\"434.2\" y=\"307\">0</tspan>\n          <tspan x=\"450.9\" y=\"307\">1</tspan>\n          <tspan x=\"467.6\" y=\"307\">0</tspan>\n          <tspan x=\"484.3\" y=\"307\">1</tspan>\n        </text>\n        <text id=\"line-14\">\n          <tspan x=\"0\" y=\"331\">0</tspan>\n          <tspan x=\"16.7\" y=\"331\">1</tspan>\n          <tspan x=\"33.4\" y=\"331\">0</tspan>\n          <tspan x=\"50.1\" y=\"331\">1</tspan>\n          <tspan x=\"66.8\" y=\"331\">0</tspan>\n          <tspan x=\"83.5\" y=\"331\">1</tspan>\n          <tspan x=\"100.2\" y=\"331\">0</tspan>\n          <tspan x=\"116.9\" y=\"331\">1</tspan>\n          <tspan x=\"132\" y=\"331\">0</tspan>\n          <tspan x=\"150.3\" y=\"331\">1</tspan>\n          <tspan x=\"167\" y=\"331\">0</tspan>\n          <tspan x=\"183.5\" y=\"331\">1</tspan>\n          <tspan x=\"200.4\" y=\"331\">0</tspan>\n          <tspan x=\"217.1\" y=\"331\">1</tspan>\n          <tspan x=\"233.8\" y=\"331\">0</tspan>\n          <tspan x=\"250.5\" y=\"331\">1</tspan>\n          <tspan x=\"267.2\" y=\"331\">0</tspan>\n          <tspan x=\"283.9\" y=\"331\">1</tspan>\n          <tspan x=\"300.6\" y=\"331\">0</tspan>\n          <tspan x=\"317.3\" y=\"331\">1</tspan>\n          <tspan x=\"334\" y=\"331\">0</tspan>\n          <tspan x=\"350.7\" y=\"331\">1</tspan>\n          <tspan x=\"367.4\" y=\"331\">0</tspan>\n          <tspan x=\"384.1\" y=\"331\">1</tspan>\n          <tspan x=\"400.8\" y=\"331\">0</tspan>\n          <tspan x=\"417.5\" y=\"331\">1</tspan>\n          <tspan x=\"434.2\" y=\"331\">0</tspan>\n          <tspan x=\"450.9\" y=\"331\">1</tspan>\n          <tspan x=\"467.6\" y=\"331\">0</tspan>\n          <tspan x=\"484.3\" y=\"331\">1</tspan>\n        </text>\n        <text id=\"line-15\">\n          <tspan x=\"0\" y=\"355\">0</tspan>\n          <tspan x=\"16.7\" y=\"355\">1</tspan>\n          <tspan x=\"33.4\" y=\"355\">0</tspan>\n          <tspan x=\"50.1\" y=\"355\">1</tspan>\n          <tspan x=\"66.8\" y=\"355\">0</tspan>\n          <tspan x=\"83.5\" y=\"355\">1</tspan>\n          <tspan x=\"100.2\" y=\"355\">0</tspan>\n          <tspan x=\"116.9\" y=\"355\">1</tspan>\n          <tspan x=\"132\" y=\"355\">0</tspan>\n          <tspan x=\"150.3\" y=\"355\">1</tspan>\n          <tspan x=\"167\" y=\"355\">0</tspan>\n          <tspan x=\"183.5\" y=\"355\">1</tspan>\n          <tspan x=\"200.4\" y=\"355\">0</tspan>\n          <tspan x=\"217.1\" y=\"355\">1</tspan>\n          <tspan x=\"233.8\" y=\"355\">0</tspan>\n          <tspan x=\"250.5\" y=\"355\">1</tspan>\n          <tspan x=\"267.2\" y=\"355\">0</tspan>\n          <tspan x=\"283.9\" y=\"355\">1</tspan>\n          <tspan x=\"300.6\" y=\"355\">0</tspan>\n          <tspan x=\"317.3\" y=\"355\">1</tspan>\n          <tspan x=\"334\" y=\"355\">0</tspan>\n          <tspan x=\"350.7\" y=\"355\">1</tspan>\n          <tspan x=\"367.4\" y=\"355\">0</tspan>\n          <tspan x=\"384.1\" y=\"355\">1</tspan>\n          <tspan x=\"400.8\" y=\"355\">0</tspan>\n          <tspan x=\"417.5\" y=\"355\">1</tspan>\n          <tspan x=\"434.2\" y=\"355\">0</tspan>\n          <tspan x=\"450.9\" y=\"355\">1</tspan>\n          <tspan x=\"467.6\" y=\"355\">0</tspan>\n          <tspan x=\"484.3\" y=\"355\">1</tspan>\n        </text>\n        <text id=\"line-16\">\n          <tspan x=\"0\" y=\"379\">0</tspan>\n          <tspan x=\"16.7\" y=\"379\">1</tspan>\n          <tspan x=\"33.4\" y=\"379\">0</tspan>\n          <tspan x=\"50.1\" y=\"379\">1</tspan>\n          <tspan x=\"66.8\" y=\"379\">0</tspan>\n          <tspan x=\"83.5\" y=\"379\">1</tspan>\n          <tspan x=\"100.2\" y=\"379\">0</tspan>\n          <tspan x=\"116.9\" y=\"379\">1</tspan>\n          <tspan x=\"132\" y=\"379\">0</tspan>\n          <tspan x=\"150.3\" y=\"379\">1</tspan>\n          <tspan x=\"167\" y=\"379\">0</tspan>\n          <tspan x=\"183.5\" y=\"379\">1</tspan>\n          <tspan x=\"200.4\" y=\"379\">0</tspan>\n          <tspan x=\"217.1\" y=\"379\">1</tspan>\n          <tspan x=\"233.8\" y=\"379\">0</tspan>\n          <tspan x=\"250.5\" y=\"379\">1</tspan>\n          <tspan x=\"267.2\" y=\"379\">0</tspan>\n          <tspan x=\"283.9\" y=\"379\">1</tspan>\n          <tspan x=\"300.6\" y=\"379\">0</tspan>\n          <tspan x=\"317.3\" y=\"379\">1</tspan>\n          <tspan x=\"334\" y=\"379\">0</tspan>\n          <tspan x=\"350.7\" y=\"379\">1</tspan>\n          <tspan x=\"367.4\" y=\"379\">0</tspan>\n          <tspan x=\"384.1\" y=\"379\">1</tspan>\n          <tspan x=\"400.8\" y=\"379\">0</tspan>\n          <tspan x=\"417.5\" y=\"379\">1</tspan>\n          <tspan x=\"434.2\" y=\"379\">0</tspan>\n          <tspan x=\"450.9\" y=\"379\">1</tspan>\n          <tspan x=\"467.6\" y=\"379\">0</tspan>\n          <tspan x=\"484.3\" y=\"379\">1</tspan>\n        </text>\n        <text id=\"line-17\">\n          <tspan x=\"0\" y=\"403\">0</tspan>\n          <tspan x=\"16.7\" y=\"403\">1</tspan>\n          <tspan x=\"33.4\" y=\"403\">0</tspan>\n          <tspan x=\"50.1\" y=\"403\">1</tspan>\n          <tspan x=\"66.8\" y=\"403\">0</tspan>\n          <tspan x=\"83.5\" y=\"403\">1</tspan>\n          <tspan x=\"100.2\" y=\"403\">0</tspan>\n          <tspan x=\"116.9\" y=\"403\">1</tspan>\n          <tspan x=\"132\" y=\"403\">0</tspan>\n          <tspan x=\"150.3\" y=\"403\">1</tspan>\n          <tspan x=\"167\" y=\"403\">0</tspan>\n          <tspan x=\"183.5\" y=\"403\">1</tspan>\n          <tspan x=\"200.4\" y=\"403\">0</tspan>\n          <tspan x=\"217.1\" y=\"403\">1</tspan>\n          <tspan x=\"233.8\" y=\"403\">0</tspan>\n          <tspan x=\"250.5\" y=\"403\">1</tspan>\n          <tspan x=\"267.2\" y=\"403\">0</tspan>\n          <tspan x=\"283.9\" y=\"403\">1</tspan>\n          <tspan x=\"300.6\" y=\"403\">0</tspan>\n          <tspan x=\"317.3\" y=\"403\">1</tspan>\n          <tspan x=\"334\" y=\"403\">0</tspan>\n          <tspan x=\"350.7\" y=\"403\">1</tspan>\n          <tspan x=\"367.4\" y=\"403\">0</tspan>\n          <tspan x=\"384.1\" y=\"403\">1</tspan>\n          <tspan x=\"400.8\" y=\"403\">0</tspan>\n          <tspan x=\"417.5\" y=\"403\">1</tspan>\n          <tspan x=\"434.2\" y=\"403\">0</tspan>\n          <tspan x=\"450.9\" y=\"403\">1</tspan>\n          <tspan x=\"467.6\" y=\"403\">0</tspan>\n          <tspan x=\"484.3\" y=\"403\">1</tspan>\n        </text>\n        <text id=\"line-18\">\n          <tspan x=\"0\" y=\"427\">0</tspan>\n          <tspan x=\"16.7\" y=\"427\">1</tspan>\n          <tspan x=\"33.4\" y=\"427\">0</tspan>\n          <tspan x=\"50.1\" y=\"427\">1</tspan>\n          <tspan x=\"66.8\" y=\"427\">0</tspan>\n          <tspan x=\"83.5\" y=\"427\">1</tspan>\n          <tspan x=\"100.2\" y=\"427\">0</tspan>\n          <tspan x=\"116.9\" y=\"427\">1</tspan>\n          <tspan x=\"132\" y=\"427\">0</tspan>\n          <tspan x=\"150.3\" y=\"427\">1</tspan>\n          <tspan x=\"167\" y=\"427\">0</tspan>\n          <tspan x=\"183.5\" y=\"427\">1</tspan>\n          <tspan x=\"200.4\" y=\"427\">0</tspan>\n          <tspan x=\"217.1\" y=\"427\">1</tspan>\n          <tspan x=\"233.8\" y=\"427\">0</tspan>\n          <tspan x=\"250.5\" y=\"427\">1</tspan>\n          <tspan x=\"267.2\" y=\"427\">0</tspan>\n          <tspan x=\"283.9\" y=\"427\">1</tspan>\n          <tspan x=\"300.6\" y=\"427\">0</tspan>\n          <tspan x=\"317.3\" y=\"427\">1</tspan>\n          <tspan x=\"334\" y=\"427\">0</tspan>\n          <tspan x=\"350.7\" y=\"427\">1</tspan>\n          <tspan x=\"367.4\" y=\"427\">0</tspan>\n          <tspan x=\"384.1\" y=\"427\">1</tspan>\n          <tspan x=\"400.8\" y=\"427\">0</tspan>\n          <tspan x=\"417.5\" y=\"427\">1</tspan>\n          <tspan x=\"434.2\" y=\"427\">0</tspan>\n          <tspan x=\"450.9\" y=\"427\">1</tspan>\n          <tspan x=\"467.6\" y=\"427\">0</tspan>\n          <tspan x=\"484.3\" y=\"427\">1</tspan>\n        </text>\n        <text id=\"line-19\">\n          <tspan x=\"0\" y=\"451\">0</tspan>\n          <tspan x=\"16.7\" y=\"451\">1</tspan>\n          <tspan x=\"33.4\" y=\"451\">0</tspan>\n          <tspan x=\"50.1\" y=\"451\">1</tspan>\n          <tspan x=\"66.8\" y=\"451\">0</tspan>\n          <tspan x=\"83.5\" y=\"451\">1</tspan>\n          <tspan x=\"100.2\" y=\"451\">0</tspan>\n          <tspan x=\"116.9\" y=\"451\">1</tspan>\n          <tspan x=\"132\" y=\"451\">0</tspan>\n          <tspan x=\"150.3\" y=\"451\">1</tspan>\n          <tspan x=\"167\" y=\"451\">0</tspan>\n          <tspan x=\"183.5\" y=\"451\">1</tspan>\n          <tspan x=\"200.4\" y=\"451\">0</tspan>\n          <tspan x=\"217.1\" y=\"451\">1</tspan>\n          <tspan x=\"233.8\" y=\"451\">0</tspan>\n          <tspan x=\"250.5\" y=\"451\">1</tspan>\n          <tspan x=\"267.2\" y=\"451\">0</tspan>\n          <tspan x=\"283.9\" y=\"451\">1</tspan>\n          <tspan x=\"300.6\" y=\"451\">0</tspan>\n          <tspan x=\"317.3\" y=\"451\">1</tspan>\n          <tspan x=\"334\" y=\"451\">0</tspan>\n          <tspan x=\"350.7\" y=\"451\">1</tspan>\n          <tspan x=\"367.4\" y=\"451\">0</tspan>\n          <tspan x=\"384.1\" y=\"451\">1</tspan>\n          <tspan x=\"400.8\" y=\"451\">0</tspan>\n          <tspan x=\"417.5\" y=\"451\">1</tspan>\n          <tspan x=\"434.2\" y=\"451\">0</tspan>\n          <tspan x=\"450.9\" y=\"451\">1</tspan>\n          <tspan x=\"467.6\" y=\"451\">0</tspan>\n          <tspan x=\"484.3\" y=\"451\">1</tspan>\n        </text>\n        <text id=\"line-20\">\n          <tspan x=\"0\" y=\"475\">0</tspan>\n          <tspan x=\"16.7\" y=\"475\">1</tspan>\n          <tspan x=\"33.4\" y=\"475\">0</tspan>\n          <tspan x=\"50.1\" y=\"475\">1</tspan>\n          <tspan x=\"66.8\" y=\"475\">0</tspan>\n          <tspan x=\"83.5\" y=\"475\">1</tspan>\n          <tspan x=\"100.2\" y=\"475\">0</tspan>\n          <tspan x=\"116.9\" y=\"475\">1</tspan>\n          <tspan x=\"132\" y=\"475\">0</tspan>\n          <tspan x=\"150.3\" y=\"475\">1</tspan>\n          <tspan x=\"167\" y=\"475\">0</tspan>\n          <tspan x=\"183.5\" y=\"475\">1</tspan>\n          <tspan x=\"200.4\" y=\"475\">0</tspan>\n          <tspan x=\"217.1\" y=\"475\">1</tspan>\n          <tspan x=\"233.8\" y=\"475\">0</tspan>\n          <tspan x=\"250.5\" y=\"475\">1</tspan>\n          <tspan x=\"267.2\" y=\"475\">0</tspan>\n          <tspan x=\"283.9\" y=\"475\">1</tspan>\n          <tspan x=\"300.6\" y=\"475\">0</tspan>\n          <tspan x=\"317.3\" y=\"475\">1</tspan>\n          <tspan x=\"334\" y=\"475\">0</tspan>\n          <tspan x=\"350.7\" y=\"475\">1</tspan>\n          <tspan x=\"367.4\" y=\"475\">0</tspan>\n          <tspan x=\"384.1\" y=\"475\">1</tspan>\n          <tspan x=\"400.8\" y=\"475\">0</tspan>\n          <tspan x=\"417.5\" y=\"475\">1</tspan>\n          <tspan x=\"434.2\" y=\"475\">0</tspan>\n          <tspan x=\"450.9\" y=\"475\">1</tspan>\n          <tspan x=\"467.6\" y=\"475\">0</tspan>\n          <tspan x=\"484.3\" y=\"475\">1</tspan>\n        </text>\n        <text id=\"line-21\">\n          <tspan x=\"0\" y=\"499\">0</tspan>\n          <tspan x=\"16.7\" y=\"499\">1</tspan>\n          <tspan x=\"33.4\" y=\"499\">0</tspan>\n          <tspan x=\"50.1\" y=\"499\">1</tspan>\n          <tspan x=\"66.8\" y=\"499\">0</tspan>\n          <tspan x=\"83.5\" y=\"499\">1</tspan>\n          <tspan x=\"100.2\" y=\"499\">0</tspan>\n          <tspan x=\"116.9\" y=\"499\">1</tspan>\n          <tspan x=\"132\" y=\"499\">0</tspan>\n          <tspan x=\"150.3\" y=\"499\">1</tspan>\n          <tspan x=\"167\" y=\"499\">0</tspan>\n          <tspan x=\"183.5\" y=\"499\">1</tspan>\n          <tspan x=\"200.4\" y=\"499\">0</tspan>\n          <tspan x=\"217.1\" y=\"499\">1</tspan>\n          <tspan x=\"233.8\" y=\"499\">0</tspan>\n          <tspan x=\"250.5\" y=\"499\">1</tspan>\n          <tspan x=\"267.2\" y=\"499\">0</tspan>\n          <tspan x=\"283.9\" y=\"499\">1</tspan>\n          <tspan x=\"300.6\" y=\"499\">0</tspan>\n          <tspan x=\"317.3\" y=\"499\">1</tspan>\n          <tspan x=\"334\" y=\"499\">0</tspan>\n          <tspan x=\"350.7\" y=\"499\">1</tspan>\n          <tspan x=\"367.4\" y=\"499\">0</tspan>\n          <tspan x=\"384.1\" y=\"499\">1</tspan>\n          <tspan x=\"400.8\" y=\"499\">0</tspan>\n          <tspan x=\"417.5\" y=\"499\">1</tspan>\n          <tspan x=\"434.2\" y=\"499\">0</tspan>\n          <tspan x=\"450.9\" y=\"499\">1</tspan>\n          <tspan x=\"467.6\" y=\"499\">0</tspan>\n          <tspan x=\"484.3\" y=\"499\">1</tspan>\n        </text>\n\n        <!-- Pill Wrapper -->\n        <!-- Change IDs to \"Red Bill\" & \"Blue Pill\" -->\n        <g id=\"pill-selection\" transform=\"translate(79.000000, 0.000000)\">\n            <g id=\"Group-Copy\">\n                <rect id=\"Rectangle-Copy\" x=\"0\" y=\"0\" width=\"342\" height=\"220\" rx=\"24\"></rect>\n            </g>\n            <g id=\"blue-pill\" (click)=\"bluePillSelect()\" style=\"opacity: 0; transition: 0.5s;\" transform=\"translate(75.000000, 15.000000)\">\n                <mask id=\"mask-2\" fill=\"white\">\n                    <use xlink:href=\"#h-path-1\"></use>\n                </mask>\n                <use fill=\"#507BFF\" xlink:href=\"#h-path-1\"></use>\n                <mask id=\"mask-4\" fill=\"white\">\n                    <use xlink:href=\"#h-path-3\"></use>\n                </mask>\n                <use fill=\"#507BFF\" xlink:href=\"#h-path-3\"></use>\n                <path d=\"M0.5,41.5 L72,41.5 C79.7800099,31.7014077 78.3300835,21.0074774 67.6502207,9.41820908 C56.9703578,-2.17105923 46.4202843,-7.7657119 36,-7.36574894 C24.6611915,-9.16514272 13.3589778,-4.46688327 2.09335901,6.72902943 C-9.17225979,17.9249421 -9.70337946,29.5152656 0.5,41.5 Z\" id=\"Line\" fill=\"#0600BD\" mask=\"url(#mask-4)\">\n                </path>\n                <!-- Blue Pill Animation -->\n                <animateTransform           attributeName=\"transform\"\n                    type=\"translate\"\n                    time=\"12s\"\n                    delay=\"9s\"\n                    from=\"75 90\"\n                    to=\"75 15\"\n                    begin=\"0s\"\n                    dur=\"1s\"\n                />\n\n                <!-- Up & Down Animation -->\n                <animateTransform           attributeName=\"transform\"\n                    type=\"translate\"\n                    time=\"12s\"\n                    delay=\"9s\"\n                    values=\"75 15; 75 5; 75 15;\"\n                    begin=\"0s\"\n                    dur=\"2s\"\n                    repeatCount=\"indefinite\"\n                />\n                <set attributeName=\"opacity\" to=\"1\" begin=\"9s\"/>\n            </g>\n            <g id=\"red-pill\" (click)=\"redPillSelect()\" style=\"opacity: 0; transition: 0.5s;\" transform=\"translate(196.000000, 15.000000)\">\n                <mask id=\"mask-6\" fill=\"white\">\n                    <use xlink:href=\"#h-path-5\"></use>\n                </mask>\n                <use id=\"Mask\" fill=\"#507BFF\" xlink:href=\"#h-path-5\"></use>\n                <mask id=\"mask-8\" fill=\"white\">\n                    <use xlink:href=\"#h-path-7\"></use>\n                </mask>\n                <use fill=\"#FF5050\" xlink:href=\"#h-path-7\"></use>\n                <path d=\"M0.5,41.5 L72,41.5 C79.7800099,31.7014077 78.3300835,21.0074774 67.6502207,9.41820908 C56.9703578,-2.17105923 46.4202843,-7.7657119 36,-7.36574894 C24.6611915,-9.16514272 13.3589778,-4.46688327 2.09335901,6.72902943 C-9.17225979,17.9249421 -9.70337946,29.5152656 0.5,41.5 Z\" id=\"Line\" fill=\"#BD0000\" mask=\"url(#mask-8)\"></path>\n\n                <!-- Red Pill Animation -->\n                <animateTransform           attributeName=\"transform\"\n                    type=\"translate\"\n                    time=\"12s\"\n                    delay=\"9.5s\"\n                    from=\"196 90\"\n                    to=\"196 15\"\n                    begin=\"0s\"\n                    dur=\"1s\"\n                />\n\n                <!-- Up & Down Animation -->\n                <animateTransform attributeName=\"transform\"\n                    type=\"translate\"\n                    time=\"12s\"\n                    delay=\"9.5s\"\n                    values=\"196 15; 196 5; 196 15;\"\n                    begin=\"0s\"\n                    dur=\"2s\"\n                    repeatCount=\"indefinite\"\n                />\n                <set attributeName=\"opacity\" to=\"1\" begin=\"9.5s\"/>\n            </g>\n        </g>\n        <g id=\"select-pill-message\" style=\"opacity: 0; transition: 0.5s;\" transform=\"translate(18.000000, 252.000000)\">\n            <g id=\"Group\" transform=\"translate(0.000000, 60.000000)\">\n                <rect id=\"Rectangle\" stroke=\"#FF5050\" stroke-width=\"7\" fill=\"#FFF0F0\" x=\"0\" y=\"0\" width=\"464\" height=\"168\" rx=\"6\"></rect>\n                <text id=\"You’ve-encountered-a\" font-family=\"Helvetica\" font-size=\"20\" font-weight=\"normal\" fill=\"#000000\">\n                    <tspan x=\"58.9189453\" y=\"38\">You’ve encountered a bug in the </tspan>\n                    <tspan x=\"350.637695\" y=\"38\" text-decoration=\"line-through\">matrix</tspan>\n                    <tspan x=\"405.081055\" y=\"38\"> </tspan>\n                    <tspan x=\"47.9960938\" y=\"62\">system. You have the choice either fix the </tspan>\n                    <tspan x=\"56.3261719\" y=\"86\">bug, or become the bug and be stuck in </tspan>\n                    <tspan x=\"44.1289062\" y=\"110\">the matrix forever. Do you take the red pill, </tspan>\n                    <tspan x=\"164.177734\" y=\"134\">or the blue pill?</tspan>\n                </text>\n            </g>\n            <g id=\"Group-2\" transform=\"translate(112.000000, 0.000000)\">\n                <path d=\"M10,0 L225,0 C230.522847,-1.01453063e-15 235,4.4771525 235,10 L235,60 L235,60 L0,60 L0,10 C-6.76353751e-16,4.4771525 4.4771525,1.01453063e-15 10,0 Z\" id=\"Rectangle\" fill=\"#FF5050\"></path>\n                <text id=\"Please-select-a-pill\" font-family=\"Helvetica-Bold, Helvetica\" font-size=\"20\" font-weight=\"bold\" fill=\"#FFFFFF\">\n                    <tspan fill=\"white\" x=\"25.6113281\" y=\"34\">Please select a pill</tspan>\n                </text>\n            </g>\n             <!-- Pill Message Animation -->\n             <animateTransform\n                attributeName=\"transform\"\n                keyTimes=\"0 ; 0.5 ; 1\"\n                type=\"translate\"\n                time=\"1s\"\n                delay=\"10s\"\n                from=\"18 600\"\n                to=\"18 0\"\n                begin=\"10s\"\n                dur=\"1s\"\n            />\n         <set attributeName=\"opacity\" to=\"1\" begin=\"10.5s\"/>\n        </g>\n        <g id=\"red-pill-message\" transform=\"translate(18.000000, 312.000000)\">\n            <rect id=\"Rectangle\" stroke=\"#BD0000\" stroke-width=\"7\" fill=\"#BD0000\" x=\"0\" y=\"0\" width=\"464\" height=\"149\" rx=\"6\"></rect>\n            <text id=\"You-selected-the-Red\" font-family=\"Helvetica\" font-size=\"15\" font-weight=\"normal\" fill=\"#FFFFFF\">\n                <tspan x=\"38.9777832\" y=\"34\">You selected the </tspan>\n                <tspan x=\"153.513916\" y=\"34\" font-family=\"Helvetica-Bold, Helvetica\" font-weight=\"bold\">Red Pill</tspan>\n                <tspan x=\"208.526123\" y=\"34\">. You made the </tspan>\n                <tspan x=\"312.786377\" y=\"34\" font-family=\"Helvetica-Bold, Helvetica\" font-weight=\"bold\">right</tspan>\n                <tspan x=\"346.111572\" y=\"34\"> choice. You </tspan>\n                <tspan x=\"50.8503418\" y=\"52\">obviously watched the Matrix … right? </tspan>\n                <tspan x=\"308.465088\" y=\"52\" font-family=\"Helvetica-Bold, Helvetica\" font-weight=\"bold\">Shame on you.</tspan>\n                <tspan x=\"415.149658\" y=\"52\"> </tspan>\n                <tspan x=\"32.8803711\" y=\"70\">Morpehus would shed a tear at your choice of both pills, and </tspan>\n                <tspan x=\"207.160156\" y=\"88\">movies. </tspan>\n            </text>\n        </g>\n        <g id=\"blue-pill-message\" transform=\"translate(18.000000, 312.000000)\">\n            <rect id=\"Rectangle\" stroke=\"#507BFF\" stroke-width=\"7\" fill=\"#EAEFFF\" x=\"0\" y=\"0\" width=\"464\" height=\"149\" rx=\"6\"></rect>\n            <text id=\"You-selected-the-Blu\" font-family=\"Helvetica\" font-size=\"15\" font-weight=\"normal\">\n                <tspan x=\"31.0603027\" y=\"34\" fill=\"#000000\">You selected the </tspan>\n                <tspan x=\"145.596436\" y=\"34\" font-family=\"Helvetica-Bold, Helvetica\" font-weight=\"bold\" fill=\"#0600BD\">Blue Pill</tspan>\n                <tspan x=\"204.776123\" y=\"34\" fill=\"#000000\">. You made the </tspan>\n                <tspan x=\"309.036377\" y=\"34\" font-family=\"Helvetica-Bold, Helvetica\" font-weight=\"bold\" fill=\"#000000\">wrong</tspan>\n                <tspan x=\"354.029053\" y=\"34\" fill=\"#000000\"> choice. You </tspan>\n                <tspan x=\"27.0869141\" y=\"52\" fill=\"#000000\">watched the Matrix … right? </tspan>\n                <tspan x=\"218\" y=\"52\" font-family=\"Helvetica-Bold, Helvetica\" font-weight=\"bold\" fill=\"#000000\">Shame on you.</tspan>\n                <tspan x=\"324.68457\" y=\"52\" fill=\"#000000\"> Morpehus would </tspan>\n                <tspan x=\"62.0710449\" y=\"70\" fill=\"#000000\">shed a tear at your choice of both pills, and movies. </tspan>\n            </text>\n        </g>\n    </g>\n</svg>";
      /***/
    },

    /***/
    67934:
    /*!******************************************************************************************************************************************************!*\
      !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/components/home-illustration-two/home-illustration-two.component.html ***!
      \******************************************************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<svg width=\"1050px\" height=\"1050px\" id=\"yin-yang-wrapper\" viewBox=\"0 0 1050 1050\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\n    <title>home-illustration-2</title>\n    <defs>\n        <linearGradient x1=\"50%\" y1=\"0%\" x2=\"50%\" y2=\"100%\" id=\"linearGradient-1\">\n            <stop stop-color=\"#493A03\" offset=\"0%\"></stop>\n            <stop stop-color=\"#000000\" offset=\"100%\"></stop>\n        </linearGradient>\n        <linearGradient x1=\"50%\" y1=\"0%\" x2=\"50%\" y2=\"100%\" id=\"linearGradient-2\">\n            <stop stop-color=\"#70FB70\" offset=\"0%\"></stop>\n            <stop stop-color=\"#09BF09\" offset=\"100%\"></stop>\n        </linearGradient>\n    </defs>\n    <g id=\"home-illustration-2\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\">\n        <g id=\"yang\" transform=\"translate(167.000000, 167.000000)\">\n            <path d=\"M358,-6.4816208e-14 C465.995732,107.681185 465.995732,227.014519 358,358 C250.004268,488.985481 250.004268,608.318815 358,716 C263.510051,711.984899 180.220897,677.550732 108.132538,612.697496 C101.072428,606.345972 94.3580409,599.802174 87.9893762,593.066104 C33.1857348,530.181441 0,447.966192 0,358 C0,284.659664 22.0535522,216.470211 59.8908793,159.701418 C73.6136334,139.807383 89.6940546,120.88203 108.132538,102.926507 C127.527725,84.0393411 147.733698,67.7502211 168.750457,54.0591474 C223.653569,19.7958853 288.514996,2.27373675e-13 358,2.27373675e-13 Z\" id=\"yang-side\" fill=\"url(#linearGradient-1)\"></path>\n            <circle id=\"yang-circle\" fill=\"#3DF63D\" cx=\"296\" cy=\"173\" r=\"62\"></circle>\n        </g>\n        <g id=\"yin\" transform=\"translate(445.000000, 167.000000)\">\n            <path d=\"M358,-6.4816208e-14 C465.995732,107.681185 465.995732,227.014519 358,358 C250.004268,488.985481 250.004268,608.318815 358,716 C263.510051,711.984899 180.220897,677.550732 108.132538,612.697496 C101.072428,606.345972 94.3580409,599.802174 87.9893762,593.066104 C33.1857348,530.181441 0,447.966192 0,358 C0,284.659664 22.0535522,216.470211 59.8908793,159.701418 C73.6136334,139.807383 89.6940546,120.88203 108.132538,102.926507 C127.527725,84.0393411 147.733698,67.7502211 168.750457,54.0591474 C223.653569,19.7958853 288.514996,4.54747351e-13 358,4.54747351e-13 Z\" id=\"yin-side\" fill=\"url(#linearGradient-2)\" transform=\"translate(219.498399, 358.000000) scale(-1, -1) translate(-219.498399, -358.000000) \"></path>\n            <circle id=\"yin-circle\" fill=\"#231B01\" cx=\"142\" cy=\"546\" r=\"62\"></circle>\n        </g>\n    </g>\n</svg>";
      /***/
    },

    /***/
    21004:
    /*!********************************************************************************************************************************************!*\
      !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/components/instructing-icon/instructing-icon.component.html ***!
      \********************************************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<svg width=\"100px\" height=\"100px\" viewBox=\"0 0 400 400\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\n    <title>instructing-icon</title>\n    <g id=\"instructing-icon\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\">\n        <g id=\"presentation\" transform=\"translate(-4.000000, 21.000000)\" fill=\"#D8CCA8\" fill-rule=\"nonzero\">\n            <path d=\"M180.747472,87 C193.589489,87 204,97.4295748 204,110.295107 C204,123.16064 193.589489,133.590214 180.747472,133.590214 L124.728166,133.590214 C121.93744,133.593435 119.676813,135.860814 119.676815,138.656652 L119.676815,333.504377 C119.599875,347.610127 108.162316,359.003422 94.0821386,359 C93.5636031,359 93.0392414,359 92.520706,358.953304 C85.3505127,358.465195 78.7507797,354.913466 74.3861988,349.227881 C70.0184194,354.925802 63.3979534,358.487098 56.2031107,358.976631 C55.7073422,359 55.1824108,359 54.663312,359 C40.5424814,359.032188 29.0610784,347.641079 29,333.538445 L29.0009777,230.578454 C26.5499441,231.645039 23.8456831,232.237358 21.0035986,232.239828 C15.4898588,232.322426 10.1712309,230.197035 6.22794347,226.33529 C2.28465603,222.473545 0.0428526406,217.194845 0,211.670558 L0,129.370129 C0.025687775,105.980421 18.9457276,87.0257348 42.2926829,87 L180.747472,87 Z M180.729994,98.656309 L42.2926829,98.656309 C25.3704046,98.6724108 11.6589037,112.416856 11.6524819,129.370129 L11.6524819,211.670558 C11.6909572,216.612952 15.7147555,220.591901 20.6481979,220.566008 C22.9461117,220.636704 25.1757977,219.778267 26.8350533,218.184046 C27.8247892,217.233103 28.5619179,216.068063 29.0010603,214.7939 L29,209.825094 C29,209.011321 29.1670849,208.236522 29.4688616,207.533049 L29.4691266,139.07691 C29.4691266,135.853273 32.0776236,133.24 35.2953676,133.24 C38.5131116,133.24 41.1216085,135.853273 41.1216085,139.07691 L41.1216085,212.090815 C41.119919,213.553727 40.9628153,214.980144 40.66595,216.354391 L40.6651418,333.550095 C40.6923801,337.383566 42.3005178,341.03633 45.1106623,343.647759 C47.9208068,346.259188 51.6844595,347.598356 55.5148673,347.349743 C59.4925013,347.041741 63.1264893,344.981563 65.4302379,341.728527 C66.8842759,339.539252 67.724147,337.000742 67.8624199,334.377258 C68.1715462,330.998704 68.3348582,327.561898 68.3348582,324.160043 L68.3348582,230.678931 C68.3348582,228.566708 69.4605245,226.717061 71.1454087,225.695712 C72.1068446,224.995195 73.2902629,224.581802 74.5700577,224.581802 C77.7878017,224.581802 80.3962986,227.195076 80.3962986,230.418712 L80.3962986,324.083604 C80.3962986,327.480686 80.5536071,330.924463 80.8623979,334.321544 C81.0019776,336.950956 81.8429874,339.494731 83.2977666,341.687725 C85.6016394,344.954076 89.2392449,347.021229 93.2198549,347.32618 C97.0358732,347.560101 100.780248,346.213201 103.576174,343.600878 C106.372101,340.988554 107.974034,337.340229 108.006854,333.510214 L108.006854,138.656652 C108.016482,129.41754 115.488466,121.929262 124.710687,121.916395 L180.729994,121.916395 C183.816176,121.910006 186.774956,120.682791 188.962472,118.501802 C191.116985,116.331908 192.318581,113.390695 192.300908,110.330129 C192.311744,107.24487 191.098752,104.281665 188.92878,102.092395 C186.758809,99.9031247 183.809613,98.6671263 180.729994,98.656309 Z M74.5019516,0 C96.8687217,0.00107786467 115,18.1332296 115,40.5 C114.974178,62.8591135 96.853261,80.9774104 74.4941439,81 C52.1273741,80.9967659 33.997844,62.8628664 34,40.4960963 C34.002156,18.1293263 52.1351816,-0.00107786467 74.5019516,0 Z M74.4941439,11.7295398 C58.5957179,11.7327738 45.7098164,24.6230446 45.7119723,40.5214709 C45.7141282,56.4198972 58.6035252,69.3066728 74.5019515,69.305595 C90.4003778,69.3045172 103.288028,56.4159942 103.288028,40.5175677 C103.271883,24.622785 90.3889295,11.7424516 74.4941439,11.7295398 Z\" id=\"instructor\"></path>\n            <path d=\"M402.178458,48 C405.393607,48 408,50.6862915 408,54 C408,57.3137085 405.393607,60 402.178458,60 L395,60 L395,218.40585 C394.999816,218.605296 394.994997,218.80366 394.985644,219.000839 L402.178458,219 C405.393607,219 408,221.686292 408,225 C408,228.313708 405.393607,231 402.178458,231 L296.181,231 L296.181132,256.873477 L370.567533,342.339349 C372.066592,344.061435 372.422262,346.501623 371.477249,348.580755 C370.532236,350.659887 368.460868,351.994423 366.179195,351.994173 L366.179195,352 L330.624346,352 C328.932899,352 327.324754,351.264989 326.218548,349.983965 L266.987627,281.281477 L207.727605,349.983965 C206.621399,351.264989 205.013254,352 203.321807,352 L167.819339,352 C165.535132,352 163.462292,350.661682 162.519254,348.578867 C161.576216,346.496051 161.937349,344.053524 163.442641,342.333522 L237.846503,257.263866 L237.846,231 L132.821542,231 C129.606393,231 127,228.313708 127,225 C127,221.686292 129.606393,219 132.821542,219 L139.014348,219.000657 C139.005001,218.803539 139.000184,218.605236 139,218.40585 L139,128.21191 C139,124.991744 141.612489,122.381285 144.835157,122.381285 C148.057825,122.381285 150.670314,124.991744 150.670314,128.21191 L150.670314,218.40585 C150.66755,218.623631 150.742063,218.834333 150.879019,219.001359 L383.149,219 L383.170154,218.976139 C383.294339,218.81339 383.361501,218.612831 383.358862,218.40585 L383.358,60 L150.67,60 L150.670314,93.3331103 C150.670314,96.5532756 148.057825,99.1637354 144.835157,99.1637354 C141.612489,99.1637354 139,96.5532756 139,93.3331103 L139,60 L132.821542,60 C129.606393,60 127,57.3137085 127,54 C127,50.6862915 129.606393,48 132.821542,48 L402.178458,48 Z M284.517,231 L249.457,231 L249.457556,259.431394 C249.457325,260.844182 248.944377,262.208765 248.014177,263.271182 L180.623508,340.346622 L200.656212,340.346622 L262.581829,268.555989 C263.720299,267.331026 265.316327,266.635213 266.987627,266.635213 C268.658927,266.635213 270.254955,267.331026 271.393425,268.555989 L333.313221,340.346622 L353.380846,340.346622 L285.949437,262.909927 C285.026087,261.848846 284.517521,260.489062 284.517698,259.081792 L284.517,231 Z\" id=\"board\"></path>\n        </g>\n    </g>\n</svg>";
      /***/
    },

    /***/
    67653:
    /*!************************************************************************************************************************!*\
      !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/components/navbar/navbar.component.html ***!
      \************************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header class=\"ion-no-border\">\n  <ion-toolbar class=\"navbar\">\n    <ion-buttons>\n      <ion-button routerLink=\"/home\" slot=\"start\">\n        <img id=\"logo\" src=\"../../../assets/gold-logo.svg\" alt=\"\">\n        <p class=\"ion-hide-sm-down name\"></p>\n      </ion-button>\n    </ion-buttons>\n    <ion-buttons class=\"ion-hide-lg-down\" slot=\"primary\">\n      <a routerLink=\"/home\" routerLinkActive=\"active-link\">Home</a>\n    </ion-buttons>\n    <ion-buttons class=\"ion-hide-lg-down\" slot=\"primary\">\n      <a routerLink=\"/about\" routerLinkActive=\"active-link\">About</a>\n    </ion-buttons>\n    <ion-buttons class=\"ion-hide-lg-down\" slot=\"primary\">\n      <a routerLink=\"/projects\" routerLinkActive=\"active-link\">Projects</a>\n    </ion-buttons>\n    <ion-buttons class=\"ion-hide-lg-down\" slot=\"primary\">\n      <a routerLink=\"/blog\" routerLinkActive=\"active-link\">Blog</a>\n    </ion-buttons>\n    <ion-buttons class=\"ion-hide-lg-down\" slot=\"primary\">\n      <a routerLink=\"/contact\" routerLinkActive=\"active-link\">Contact</a>\n    </ion-buttons>\n    <ion-buttons class=\"ion-hide-lg-down\" slot=\"primary\">\n      <a routerLink=\"/donate\" routerLinkActive=\"active-link\">Donate</a>\n    </ion-buttons>\n    <ion-buttons *ngIf=\"this.userType === 'none'\" class=\"ion-hide-lg-down\" slot=\"primary\">\n      <a (click)=\"loginDetectFromBlog()\" routerLinkActive=\"active-link\">Login</a>\n    </ion-buttons>\n    <ion-buttons *ngIf=\"this.userType === 'user'\" class=\"ion-hide-lg-down\" slot=\"primary\">\n      <a routerLink=\"/profile\" routerLinkActive=\"active-link\">Profile</a>\n    </ion-buttons>\n    <ion-buttons *ngIf=\"this.userType === 'admin'\" class=\"ion-hide-lg-down\" slot=\"primary\">\n      <a routerLink=\"/admin\" routerLinkActive=\"active-link\">Admin</a>\n    </ion-buttons>\n    <ion-buttons *ngIf=\"this.userType === 'admin' || this.userType === 'user'\" class=\"ion-hide-lg-down\" slot=\"primary\">\n      <a (click)=\"this.logoutConfirm()\" routerLinkActive=\"active-link\">Logout</a>\n    </ion-buttons>\n    <!-- <ion-buttons class=\"ion-hide-lg-down\" slot=\"primary\">\n      <a routerLink=\"/login\" routerLinkActive=\"active-link\">Logout</a>\n    </ion-buttons> -->\n    <ion-buttons class=\"ion-hide-lg-up\" slot=\"end\">\n      <ion-button id=\"side-menu-button\">\n        <ion-menu-button style=\"font-size: 2em;\"></ion-menu-button>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>";
      /***/
    },

    /***/
    42921:
    /*!******************************************************************************************************************************************************!*\
      !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/components/projects-illustration/projects-illustration.component.html ***!
      \******************************************************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<link rel=\"stylesheet\" href=\"./projects-illustration.component.scss\">\n<svg width=\"300px\" height=\"300px\" viewBox=\"0 0 1072 1050\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\n    <title>Projects-Illustration</title>\n    <defs>\n        <polygon id=\"path-100\" points=\"201.242496 1050 201.242496 644.75982 354 644.75982 354 1050\"></polygon>\n        <polygon id=\"path-333\" points=\"718.242496 1050 718.242496 644.75982 871 644.75982 871 1050\"></polygon>\n\n        <path d=\"M708.242496,485.189838 C713.765344,485.189838 718.242496,489.66699 718.242496,495.189838 L718.242496,1050.18984 L354,1050.18984 L354,495.189838 C354,489.66699 358.477153,485.189838 364,485.189838 L543,485.189 L543,528 L586,528 L586,485.189 L708.242496,485.189838 Z\" id=\"path-5\"></path>\n    </defs>\n    <g id=\"Projects-Illustration\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\">\n        <g id=\"Left-Building-2\">\n            <use fill=\"black\" fill-opacity=\"1\" xlink:href=\"#path-100\"></use>\n            <use stroke=\"#979797\" stroke-width=\"1\" fill=\"#D8D8D8\" fill-rule=\"evenodd\" xlink:href=\"#path-100\"></use>\n        </g>\n        <g id=\"Right-Building-2\" transform=\"translate(794.621248, 847.379910) scale(-1, 1) translate(-794.621248, -847.379910) \">\n            <use fill=\"black\" fill-opacity=\"1\" xlink:href=\"#path-333\"></use>\n            <use stroke=\"#979797\" stroke-width=\"1\" fill=\"#D8D8D8\" fill-rule=\"evenodd\" xlink:href=\"#path-333\"></use>\n        </g>\n        <rect id=\"Grab-Object-1\" fill=\"#3DF63D\" x=\"256\" y=\"602\" width=\"43\" height=\"43\" rx=\"6\"></rect>\n        <polygon id=\"Crane-Bottom\" fill=\"#847145\" points=\"387.053157 485.189838 387.053157 424.611012 468.445194 424.611012 468.445194 485.189838\"></polygon>\n        <g id=\"Main-Crane\" transform=\"translate(414.000000, 62.000000)\">\n            <g id=\"Crane\">\n                <line x1=\"14.5\" y1=\"41.5698925\" x2=\"14.5\" y2=\"358.430108\" id=\"Crane-Arm-2\" stroke=\"#D8CCA8\" stroke-width=\"11\" stroke-linecap=\"square\"></line>\n                <ellipse id=\"Crane-Claw\" stroke=\"#979797\" fill=\"#D8D8D8\" cx=\"14.5\" cy=\"357\" rx=\"14.5\" ry=\"16\"></ellipse>\n                <polyline id=\"Crane-Arm\" stroke=\"#D8CCA8\" stroke-width=\"11\" points=\"143 353 143 103.13922 14 0 14 321.588537\"></polyline>\n            </g>\n            <g id=\"Crane-Grabber\" transform=\"translate(122.000000, 116.000000)\">\n                <rect id=\"Grab-Object-2\" fill=\"#3DF63D\" x=\"0\" y=\"240\" width=\"42\" height=\"42\" rx=\"6\"></rect>\n                <path d=\"M21.5,0.5 L21.5,253.52509\" id=\"Crane-Arm-2-2\" stroke=\"#D8CCA8\" stroke-width=\"11\" stroke-linecap=\"square\"></path>\n                <ellipse id=\"Crane-Claw\" fill=\"#847145\" cx=\"20.5\" cy=\"247.5\" rx=\"14.5\" ry=\"13.5\"></ellipse>\n            </g>\n        </g>\n        <g id=\"Main-Building-Mask\">\n            <use fill=\"black\" fill-opacity=\"1\" xlink:href=\"#path-5\"></use>\n            <use fill=\"#2B215F\" fill-rule=\"evenodd\" xlink:href=\"#path-5\"></use>\n        </g>\n        <rect id=\"Window\"  x=\"373\" y=\"554\" width=\"56\" height=\"48\" rx=\"2\"></rect>\n        <rect id=\"Window\" fill-opacity=\"0.435416268\" fill=\"#000000\" x=\"463\" y=\"554\" width=\"56\" height=\"48\" rx=\"2\"></rect>\n        <rect id=\"Window\" fill-opacity=\"0.435416268\" fill=\"#000000\" x=\"553\" y=\"554\" width=\"56\" height=\"48\" rx=\"2\"></rect>\n        <rect id=\"Window\" fill-opacity=\"0.435416268\" fill=\"#000000\" x=\"809.054795\" y=\"720.452055\" width=\"47.9452055\" height=\"41.0958904\" rx=\"2\"></rect>\n        <rect id=\"Window\" fill-opacity=\"0.435416268\" fill=\"#000000\" x=\"732\" y=\"780.452055\" width=\"47.9452055\" height=\"41.0958904\" rx=\"2\"></rect>\n        <rect id=\"Window\" fill-opacity=\"0.435416268\" fill=\"#000000\" x=\"809.054795\" y=\"780.452055\" width=\"47.9452055\" height=\"41.0958904\" rx=\"2\"></rect>\n        <rect id=\"Window\" fill-opacity=\"0.435416268\" fill=\"#000000\" x=\"733\" y=\"840.452055\" width=\"47.9452055\" height=\"41.0958904\" rx=\"2\"></rect>\n        <rect id=\"Window\" fill-opacity=\"0.435416268\" fill=\"#000000\" x=\"810.054795\" y=\"840.452055\" width=\"47.9452055\" height=\"41.0958904\" rx=\"2\"></rect>\n        <rect id=\"Window\" fill-opacity=\"0.435416268\" fill=\"#000000\" x=\"733\" y=\"900.452055\" width=\"47.9452055\" height=\"41.0958904\" rx=\"2\"></rect>\n        <rect id=\"Window\" fill-opacity=\"0.435416268\" fill=\"#000000\" x=\"810.054795\" y=\"900.452055\" width=\"47.9452055\" height=\"41.0958904\" rx=\"2\"></rect>\n        <rect id=\"Window\" fill-opacity=\"0.435416268\" fill=\"#000000\" x=\"218\" y=\"664.452055\" width=\"47.9452055\" height=\"41.0958904\" rx=\"2\"></rect>\n        <rect id=\"Window\" fill-opacity=\"0.435416268\" fill=\"#000000\" x=\"295.054795\" y=\"664.452055\" width=\"47.9452055\" height=\"41.0958904\" rx=\"2\"></rect>\n        <rect id=\"Window\" fill-opacity=\"0.435416268\" fill=\"#000000\" x=\"218\" y=\"724.452055\" width=\"47.9452055\" height=\"41.0958904\" rx=\"2\"></rect>\n        <rect id=\"Window\" fill-opacity=\"0.435416268\" fill=\"#000000\" x=\"295.054795\" y=\"724.452055\" width=\"47.9452055\" height=\"41.0958904\" rx=\"2\"></rect>\n        <rect id=\"Window\" fill-opacity=\"0.435416268\" fill=\"#000000\" x=\"218\" y=\"784.452055\" width=\"47.9452055\" height=\"41.0958904\" rx=\"2\"></rect>\n        <rect id=\"Window\" fill-opacity=\"0.435416268\" fill=\"#000000\" x=\"295.054795\" y=\"784.452055\" width=\"47.9452055\" height=\"41.0958904\" rx=\"2\"></rect>\n        <rect id=\"Window\" fill-opacity=\"0.435416268\" fill=\"#000000\" x=\"219\" y=\"844.452055\" width=\"47.9452055\" height=\"41.0958904\" rx=\"2\"></rect>\n        <rect id=\"Window\" fill-opacity=\"0.435416268\" fill=\"#000000\" x=\"296.054795\" y=\"844.452055\" width=\"47.9452055\" height=\"41.0958904\" rx=\"2\"></rect>\n        <rect id=\"Window\" fill-opacity=\"0.435416268\" fill=\"#000000\" x=\"219\" y=\"904.452055\" width=\"47.9452055\" height=\"41.0958904\" rx=\"2\"></rect>\n        <rect id=\"Window\" fill-opacity=\"0.435416268\" fill=\"#000000\" x=\"296.054795\" y=\"904.452055\" width=\"47.9452055\" height=\"41.0958904\" rx=\"2\"></rect>\n        <rect id=\"Window\" fill-opacity=\"0.435416268\" fill=\"#000000\" x=\"373\" y=\"621\" width=\"56\" height=\"48\" rx=\"2\"></rect>\n        <rect id=\"Window\" fill-opacity=\"0.435416268\" fill=\"#000000\" x=\"463\" y=\"621\" width=\"56\" height=\"48\" rx=\"2\"></rect>\n        <rect id=\"Window\" fill-opacity=\"0.435416268\" fill=\"#000000\" x=\"553\" y=\"621\" width=\"56\" height=\"48\" rx=\"2\"></rect>\n        <rect id=\"Window\" fill-opacity=\"0.435416268\" fill=\"#000000\" x=\"643\" y=\"621\" width=\"56\" height=\"48\" rx=\"2\"></rect>\n        <rect id=\"Window\" fill-opacity=\"0.435416268\" fill=\"#000000\" x=\"373\" y=\"688\" width=\"56\" height=\"48\" rx=\"2\"></rect>\n        <rect id=\"Window\" fill-opacity=\"0.435416268\" fill=\"#000000\" x=\"463\" y=\"688\" width=\"56\" height=\"48\" rx=\"2\"></rect>\n        <rect id=\"Window\" fill-opacity=\"0.435416268\" fill=\"#000000\" x=\"553\" y=\"688\" width=\"56\" height=\"48\" rx=\"2\"></rect>\n        <rect id=\"Window\" fill-opacity=\"0.435416268\" fill=\"#000000\" x=\"643\" y=\"688\" width=\"56\" height=\"48\" rx=\"2\"></rect>\n        <rect id=\"Window\" fill-opacity=\"0.435416268\" fill=\"#000000\" x=\"373\" y=\"755\" width=\"56\" height=\"48\" rx=\"2\"></rect>\n        <rect id=\"Window\" fill-opacity=\"0.435416268\" fill=\"#000000\" x=\"463\" y=\"755\" width=\"56\" height=\"48\" rx=\"2\"></rect>\n        <rect id=\"Window\" fill-opacity=\"0.435416268\" fill=\"#000000\" x=\"553\" y=\"755\" width=\"56\" height=\"48\" rx=\"2\"></rect>\n        <rect id=\"Window\" fill-opacity=\"0.435416268\" fill=\"#000000\" x=\"643\" y=\"755\" width=\"56\" height=\"48\" rx=\"2\"></rect>\n        <rect id=\"Window\" fill-opacity=\"0.435416268\" fill=\"#000000\" x=\"373\" y=\"822\" width=\"56\" height=\"48\" rx=\"2\"></rect>\n        <rect id=\"Window\" fill-opacity=\"0.435416268\" fill=\"#000000\" x=\"463\" y=\"822\" width=\"56\" height=\"48\" rx=\"2\"></rect>\n        <rect id=\"Window\" fill-opacity=\"0.435416268\" fill=\"#000000\" x=\"553\" y=\"822\" width=\"56\" height=\"48\" rx=\"2\"></rect>\n        <rect id=\"Window\" fill-opacity=\"0.435416268\" fill=\"#000000\" x=\"643\" y=\"822\" width=\"56\" height=\"48\" rx=\"2\"></rect>\n        <rect id=\"Window\" fill-opacity=\"0.435416268\" fill=\"#000000\" x=\"373\" y=\"889\" width=\"56\" height=\"48\" rx=\"2\"></rect>\n        <rect id=\"Window\" fill-opacity=\"0.435416268\" fill=\"#000000\" x=\"463\" y=\"889\" width=\"56\" height=\"48\" rx=\"2\"></rect>\n        <rect id=\"Window\" fill-opacity=\"0.435416268\" fill=\"#000000\" x=\"553\" y=\"889\" width=\"56\" height=\"48\" rx=\"2\"></rect>\n        <rect id=\"Window\" fill-opacity=\"0.435416268\" fill=\"#000000\" x=\"643\" y=\"889\" width=\"56\" height=\"48\" rx=\"2\"></rect>\n        <rect id=\"Window\" fill-opacity=\"0.435416268\" fill=\"#000000\" x=\"373\" y=\"956\" width=\"56\" height=\"48\" rx=\"2\"></rect>\n        <rect id=\"Window\" fill-opacity=\"0.435416268\" fill=\"#000000\" x=\"643\" y=\"956\" width=\"56\" height=\"48\" rx=\"2\"></rect>\n        <rect id=\"Big-Door\" fill=\"#D8A468\" x=\"468\" y=\"990\" width=\"141\" height=\"57\" rx=\"3\"></rect>\n        <rect id=\"Small-Door\" fill=\"#D8A468\" x=\"767\" y=\"993\" width=\"56\" height=\"57\" rx=\"3\"></rect>\n        <rect id=\"Small-Door\" fill=\"#D8A468\" x=\"249\" y=\"993\" width=\"56\" height=\"57\" rx=\"3\"></rect>\n    </g>\n</svg>";
      /***/
    },

    /***/
    79290:
    /*!**************************************************************************************************************************************!*\
      !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/components/success-modal/success-modal.component.html ***!
      \**************************************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div id=\"wrapper\">\n  <img *ngIf=\"this.page === 'register'\" height=\"200\" src=\"../../../assets/Default-Profile-Picture.svg\" alt=\"\" srcset=\"\">\n  <img *ngIf=\"this.page === 'contact'\" height=\"200\" src=\"../../../assets/gold-logo.svg\" alt=\"\" srcset=\"\">\n  <img *ngIf=\"this.page === 'donate'\" height=\"200\" src=\"../../../assets/gold-logo.svg\" alt=\"\" srcset=\"\">\n  <h5>{{this.message}}\n  </h5>\n  <ion-button expand=\"full\" class=\"green-mobile-button\" (click)=\"dismiss()\">\n    login\n  </ion-button>\n</div>\n";
      /***/
    },

    /***/
    53040:
    /*!************************************!*\
      !*** ./src/app/app.component.scss ***!
      \************************************/

    /***/
    function _(module) {
      "use strict";

      module.exports = "#logo {\n  position: relative;\n  left: 15px;\n  height: 45px;\n}\n\n#bottom-close-button {\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n  --background: #1d071f;\n  --color: #d8cca8;\n}\n\nion-header {\n  box-shadow: 1px 1px 15px #0000009e;\n}\n\nion-toolbar {\n  --background: #1d071f;\n}\n\nion-item {\n  height: 50px;\n}\n\nion-item p {\n  color: #d8cca8;\n  font-size: 1em;\n}\n\nion-item .active-link {\n  color: #3df63d;\n  border-left: 4px solid #3df63d;\n  padding-left: 0.3em;\n  font-weight: 600;\n  transition: 0.5s;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7QUFDRjs7QUFDQTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0FBRUY7O0FBQUE7RUFDRSxrQ0FBQTtBQUdGOztBQURBO0VBQ0UscUJBQUE7QUFJRjs7QUFEQTtFQUNFLFlBQUE7QUFJRjs7QUFGRTtFQUNFLGNBQUE7RUFDQSxjQUFBO0FBSUo7O0FBRkU7RUFDRSxjQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUFJSiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjbG9nbyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbGVmdDogMTVweDtcbiAgaGVpZ2h0OiA0NXB4O1xufVxuI2JvdHRvbS1jbG9zZS1idXR0b24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIC0tYmFja2dyb3VuZDogIzFkMDcxZjtcbiAgLS1jb2xvcjogI2Q4Y2NhODtcbn1cbmlvbi1oZWFkZXIge1xuICBib3gtc2hhZG93OiAxcHggMXB4IDE1cHggIzAwMDAwMDllO1xufVxuaW9uLXRvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6ICMxZDA3MWY7XG59XG5cbmlvbi1pdGVtIHtcbiAgaGVpZ2h0OiA1MHB4O1xuXG4gIHAge1xuICAgIGNvbG9yOiAjZDhjY2E4O1xuICAgIGZvbnQtc2l6ZTogMWVtO1xuICB9XG4gIC5hY3RpdmUtbGluayB7XG4gICAgY29sb3I6ICMzZGY2M2Q7XG4gICAgYm9yZGVyLWxlZnQ6IDRweCBzb2xpZCAjM2RmNjNkO1xuICAgIHBhZGRpbmctbGVmdDogMC4zZW07XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICB0cmFuc2l0aW9uOiAwLjVzO1xuICB9XG59XG4iXX0= */";
      /***/
    },

    /***/
    26780:
    /*!*******************************************************************************!*\
      !*** ./src/app/components/blog-illustration/blog-illustration.component.scss ***!
      \*******************************************************************************/

    /***/
    function _(module) {
      "use strict";

      module.exports = "@media only screen and (max-width: 400px) {\n  svg {\n    height: 200px;\n    width: 200px;\n  }\n}\n@media only screen and (min-width: 400px) {\n  svg {\n    height: 200px;\n    width: 200px;\n  }\n}\n@media only screen and (min-width: 500px) {\n  svg {\n    height: 250px;\n    width: 250px;\n    margin: 5em auto 0 auto;\n  }\n}\n@media only screen and (min-width: 1000px) {\n  svg {\n    height: 250px;\n    width: 250px;\n  }\n}\n#Pencil {\n  -webkit-animation: pencil-animation 5s ease-in infinite;\n          animation: pencil-animation 5s ease-in infinite;\n}\n@-webkit-keyframes pencil-animation {\n  0% {\n    transform: translate(-235px, 337px);\n  }\n  4% {\n    transform: translate(53px, 337px);\n  }\n  8% {\n    transform: translate(136px, 380px);\n  }\n  12% {\n    transform: translate(185px, 337px);\n  }\n  16% {\n    transform: translate(242px, 371px);\n  }\n  20% {\n    transform: translate(441px, 272px);\n  }\n  24% {\n    transform: translate(-235px, 404px);\n  }\n  28% {\n    transform: translate(53px, 404px);\n  }\n  32% {\n    transform: translate(136px, 447px);\n  }\n  36% {\n    transform: translate(185px, 404px);\n  }\n  40% {\n    transform: translate(242px, 438px);\n  }\n  44% {\n    transform: translate(441px, 339px);\n  }\n  48% {\n    transform: translate(-235px, 458px);\n  }\n  52% {\n    transform: translate(53px, 458px);\n  }\n  56% {\n    transform: translate(136px, 501px);\n  }\n  60% {\n    transform: translate(185px, 482px);\n  }\n  64% {\n    transform: translate(242px, 492px);\n  }\n  68% {\n    transform: translate(441px, 393px);\n  }\n  72% {\n    transform: translate(268px, 650px);\n  }\n  86% {\n    transform: rotate(180deg);\n  }\n  100% {\n    transform: translate(268px, -650px);\n  }\n}\n@keyframes pencil-animation {\n  0% {\n    transform: translate(-235px, 337px);\n  }\n  4% {\n    transform: translate(53px, 337px);\n  }\n  8% {\n    transform: translate(136px, 380px);\n  }\n  12% {\n    transform: translate(185px, 337px);\n  }\n  16% {\n    transform: translate(242px, 371px);\n  }\n  20% {\n    transform: translate(441px, 272px);\n  }\n  24% {\n    transform: translate(-235px, 404px);\n  }\n  28% {\n    transform: translate(53px, 404px);\n  }\n  32% {\n    transform: translate(136px, 447px);\n  }\n  36% {\n    transform: translate(185px, 404px);\n  }\n  40% {\n    transform: translate(242px, 438px);\n  }\n  44% {\n    transform: translate(441px, 339px);\n  }\n  48% {\n    transform: translate(-235px, 458px);\n  }\n  52% {\n    transform: translate(53px, 458px);\n  }\n  56% {\n    transform: translate(136px, 501px);\n  }\n  60% {\n    transform: translate(185px, 482px);\n  }\n  64% {\n    transform: translate(242px, 492px);\n  }\n  68% {\n    transform: translate(441px, 393px);\n  }\n  72% {\n    transform: translate(268px, 650px);\n  }\n  86% {\n    transform: rotate(180deg);\n  }\n  100% {\n    transform: translate(268px, -650px);\n  }\n}\n#blog-line-1 {\n  -webkit-animation: blog-line-1-animation 5s ease-in infinite;\n          animation: blog-line-1-animation 5s ease-in infinite;\n}\n@-webkit-keyframes blog-line-1-animation {\n  8% {\n    stroke: white;\n  }\n  20% {\n    stroke: #3cf63c;\n  }\n}\n@keyframes blog-line-1-animation {\n  8% {\n    stroke: white;\n  }\n  20% {\n    stroke: #3cf63c;\n  }\n}\n#blog-line-2 {\n  -webkit-animation: blog-line-2-animation 5s ease-in infinite;\n          animation: blog-line-2-animation 5s ease-in infinite;\n}\n@-webkit-keyframes blog-line-2-animation {\n  40% {\n    stroke: white;\n  }\n  44% {\n    stroke: #3cf63c;\n  }\n}\n@keyframes blog-line-2-animation {\n  40% {\n    stroke: white;\n  }\n  44% {\n    stroke: #3cf63c;\n  }\n}\n#blog-line-3 {\n  -webkit-animation: blog-line-3-animation 5s ease-in infinite;\n          animation: blog-line-3-animation 5s ease-in infinite;\n}\n@-webkit-keyframes blog-line-3-animation {\n  48% {\n    stroke: white;\n  }\n  60% {\n    stroke: #3cf63c;\n  }\n}\n@keyframes blog-line-3-animation {\n  48% {\n    stroke: white;\n  }\n  60% {\n    stroke: #3cf63c;\n  }\n}\n#bounce-cloud {\n  opacity: 0;\n  -webkit-animation: bounce-cloud-animation 5s ease-in infinite;\n          animation: bounce-cloud-animation 5s ease-in infinite;\n}\n@-webkit-keyframes bounce-cloud-animation {\n  68% {\n    opacity: 0;\n  }\n  72% {\n    opacity: 1;\n  }\n  76% {\n    transform: translateX(50px);\n  }\n}\n@keyframes bounce-cloud-animation {\n  68% {\n    opacity: 0;\n  }\n  72% {\n    opacity: 1;\n  }\n  76% {\n    transform: translateX(50px);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJsb2ctaWxsdXN0cmF0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0U7SUFDRSxhQUFBO0lBQ0EsWUFBQTtFQUNGO0FBQ0Y7QUFDQTtFQUNFO0lBQ0UsYUFBQTtJQUNBLFlBQUE7RUFDRjtBQUNGO0FBQ0E7RUFDRTtJQUNFLGFBQUE7SUFDQSxZQUFBO0lBQ0EsdUJBQUE7RUFDRjtBQUNGO0FBQ0E7RUFDRTtJQUNFLGFBQUE7SUFDQSxZQUFBO0VBQ0Y7QUFDRjtBQUNBO0VBQ0UsdURBQUE7VUFBQSwrQ0FBQTtBQUNGO0FBT0E7RUFFRTtJQUNFLG1DQUFBO0VBTEY7RUFPQTtJQUNFLGlDQUFBO0VBTEY7RUFPQTtJQUNFLGtDQUFBO0VBTEY7RUFPQTtJQUNFLGtDQUFBO0VBTEY7RUFPQTtJQUNFLGtDQUFBO0VBTEY7RUFPQTtJQUNFLGtDQUFBO0VBTEY7RUFXQTtJQUNFLG1DQUFBO0VBVEY7RUFXQTtJQUNFLGlDQUFBO0VBVEY7RUFXQTtJQUNFLGtDQUFBO0VBVEY7RUFXQTtJQUNFLGtDQUFBO0VBVEY7RUFXQTtJQUNFLGtDQUFBO0VBVEY7RUFXQTtJQUNFLGtDQUFBO0VBVEY7RUFnQkE7SUFDRSxtQ0FBQTtFQWRGO0VBZ0JBO0lBQ0UsaUNBQUE7RUFkRjtFQWdCQTtJQUNFLGtDQUFBO0VBZEY7RUFnQkE7SUFDRSxrQ0FBQTtFQWRGO0VBZ0JBO0lBQ0Usa0NBQUE7RUFkRjtFQWdCQTtJQUNFLGtDQUFBO0VBZEY7RUFtQkE7SUFDRSxrQ0FBQTtFQWpCRjtFQW1CQTtJQUNFLHlCQUFBO0VBakJGO0VBb0JBO0lBQ0UsbUNBQUE7RUFsQkY7QUFDRjtBQTNEQTtFQUVFO0lBQ0UsbUNBQUE7RUFMRjtFQU9BO0lBQ0UsaUNBQUE7RUFMRjtFQU9BO0lBQ0Usa0NBQUE7RUFMRjtFQU9BO0lBQ0Usa0NBQUE7RUFMRjtFQU9BO0lBQ0Usa0NBQUE7RUFMRjtFQU9BO0lBQ0Usa0NBQUE7RUFMRjtFQVdBO0lBQ0UsbUNBQUE7RUFURjtFQVdBO0lBQ0UsaUNBQUE7RUFURjtFQVdBO0lBQ0Usa0NBQUE7RUFURjtFQVdBO0lBQ0Usa0NBQUE7RUFURjtFQVdBO0lBQ0Usa0NBQUE7RUFURjtFQVdBO0lBQ0Usa0NBQUE7RUFURjtFQWdCQTtJQUNFLG1DQUFBO0VBZEY7RUFnQkE7SUFDRSxpQ0FBQTtFQWRGO0VBZ0JBO0lBQ0Usa0NBQUE7RUFkRjtFQWdCQTtJQUNFLGtDQUFBO0VBZEY7RUFnQkE7SUFDRSxrQ0FBQTtFQWRGO0VBZ0JBO0lBQ0Usa0NBQUE7RUFkRjtFQW1CQTtJQUNFLGtDQUFBO0VBakJGO0VBbUJBO0lBQ0UseUJBQUE7RUFqQkY7RUFvQkE7SUFDRSxtQ0FBQTtFQWxCRjtBQUNGO0FBb0JBO0VBQ0UsNERBQUE7VUFBQSxvREFBQTtBQWxCRjtBQW9CQTtFQU9FO0lBQ0UsYUFBQTtFQXZCRjtFQWlDQTtJQUNFLGVBQUE7RUEvQkY7QUFDRjtBQVdBO0VBT0U7SUFDRSxhQUFBO0VBdkJGO0VBaUNBO0lBQ0UsZUFBQTtFQS9CRjtBQUNGO0FBNEZBO0VBQ0UsNERBQUE7VUFBQSxvREFBQTtBQTFGRjtBQTRGQTtFQThCRTtJQUNFLGFBQUE7RUF0SEY7RUF5SEE7SUFDRSxlQUFBO0VBdkhGO0FBQ0Y7QUFtRkE7RUE4QkU7SUFDRSxhQUFBO0VBdEhGO0VBeUhBO0lBQ0UsZUFBQTtFQXZIRjtBQUNGO0FBZ0tBO0VBQ0UsNERBQUE7VUFBQSxvREFBQTtBQTlKRjtBQWdLQTtFQXlDRTtJQUNFLGFBQUE7RUFyTUY7RUFpTkE7SUFDRSxlQUFBO0VBL01GO0FBQ0Y7QUF1SkE7RUF5Q0U7SUFDRSxhQUFBO0VBck1GO0VBaU5BO0lBQ0UsZUFBQTtFQS9NRjtBQUNGO0FBeU9BO0VBQ0UsVUFBQTtFQUNBLDZEQUFBO1VBQUEscURBQUE7QUF2T0Y7QUF5T0E7RUEwREU7SUFDRSxVQUFBO0VBL1JGO0VBa1NBO0lBQ0UsVUFBQTtFQWhTRjtFQWtTQTtJQUNFLDJCQUFBO0VBaFNGO0FBQ0Y7QUE2TkE7RUEwREU7SUFDRSxVQUFBO0VBL1JGO0VBa1NBO0lBQ0UsVUFBQTtFQWhTRjtFQWtTQTtJQUNFLDJCQUFBO0VBaFNGO0FBQ0YiLCJmaWxlIjoiYmxvZy1pbGx1c3RyYXRpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQwMHB4KSB7XG4gIHN2ZyB7XG4gICAgaGVpZ2h0OiAyMDBweDtcbiAgICB3aWR0aDogIDIwMHB4O1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDQwMHB4KSB7XG4gIHN2ZyB7XG4gICAgaGVpZ2h0OiAyMDBweDtcbiAgICB3aWR0aDogIDIwMHB4O1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDUwMHB4KSB7XG4gIHN2ZyB7XG4gICAgaGVpZ2h0OiAyNTBweDtcbiAgICB3aWR0aDogIDI1MHB4O1xuICAgIG1hcmdpbjogNWVtIGF1dG8gMCBhdXRvO1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMDBweCkge1xuICBzdmcge1xuICAgIGhlaWdodDogMjUwcHg7XG4gICAgd2lkdGg6ICAyNTBweDtcbiAgfVxufVxuI1BlbmNpbCB7XG4gIGFuaW1hdGlvbjogcGVuY2lsLWFuaW1hdGlvbiA1cyBlYXNlLWluIGluZmluaXRlO1xufVxuLy8gUGVuY2lsIFN0YXJ0XG4vLyA1OS4wMDAwMDAsIDMzNy4wMDAwMDBcbi8vIC0xNzZweCBmb3IgaW5pdGlhbCBzdGFydFxuXG4vLyBCbG9nIExpbmUgMVxuLy8gMzI5IDMzNywgNDEyIDM4MCwgNDYxIDMzNywgNTE4IDM3MSwgNzE3IDI3MlxuQGtleWZyYW1lcyBwZW5jaWwtYW5pbWF0aW9uIHtcbiAgLy8gMCBTZWNvbmRzXG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMjM1cHgsIDMzN3B4KVxuICB9XG4gIDQlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSg1M3B4LCAzMzdweClcbiAgfVxuICA4JSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTM2cHgsIDM4MHB4KVxuICB9XG4gIDEyJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTg1cHgsIDMzN3B4KVxuICB9XG4gIDE2JSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMjQycHgsIDM3MXB4KVxuICB9XG4gIDIwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoNDQxcHgsIDI3MnB4KVxuICB9XG5cbiAgLy8gMSBTZWNvbmRzXG4gIC8vIEJsb2cgTGluZSAyXG4gIC8vIDMyOSA0MDQsIDQxMiA0NDcsIDQ2MSA0MDQsIDUxOCA0MzgsIDcxNyAzMzlcbiAgMjQlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMjM1cHgsIDQwNHB4KVxuICB9XG4gIDI4JSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoNTNweCwgNDA0cHgpXG4gIH1cbiAgMzIlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxMzZweCwgNDQ3cHgpXG4gIH1cbiAgMzYlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxODVweCwgNDA0cHgpXG4gIH1cbiAgNDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgyNDJweCwgNDM4cHgpXG4gIH1cbiAgNDQlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSg0NDFweCwgMzM5cHgpXG4gIH1cblxuXG4gIC8vIDIgU2Vjb25kc1xuICAvLyBCbG9nIExpbmUgM1xuICAvLyAzMjkgNDU4LCA0MTIgNTAxLCA0NjEgNDU4LCA1MTggNDkyLCA3MTcgMzkzXG4gIDQ4JSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTIzNXB4LCA0NThweClcbiAgfVxuICA1MiUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDUzcHgsIDQ1OHB4KVxuICB9XG4gIDU2JSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTM2cHgsIDUwMXB4KVxuICB9XG4gIDYwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTg1cHgsIDQ4MnB4KVxuICB9XG4gIDY0JSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMjQycHgsIDQ5MnB4KVxuICB9XG4gIDY4JSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoNDQxcHgsIDM5M3B4KVxuICB9XG5cblxuICAvLyAzIFNlY29uZHNcbiAgNzIlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgyNjhweCwgNjUwcHgpXG4gIH1cbiAgODYlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpXG4gIH1cbiAgLy8gMjY4cHgsIC02NTBweCA9IHBvc2l0aW9uIG9mIGJvdW5jZSBlZmZlY3RcbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMjY4cHgsIC02NTBweClcbiAgfVxufVxuI2Jsb2ctbGluZS0xIHtcbiAgYW5pbWF0aW9uOiBibG9nLWxpbmUtMS1hbmltYXRpb24gNXMgZWFzZS1pbiBpbmZpbml0ZTtcbn1cbkBrZXlmcmFtZXMgYmxvZy1saW5lLTEtYW5pbWF0aW9uIHtcbiAgLy8gMCBTZWNvbmRzXG4gIDAlIHtcbiAgfVxuICA0JSB7XG4gICAgXG4gIH1cbiAgOCUge1xuICAgIHN0cm9rZTogd2hpdGU7XG4gICAgXG4gIH1cbiAgMTIlIHtcbiAgICBcbiAgfVxuICAxNiUge1xuICAgIFxuICB9XG4gIC8vIDEgU2Vjb25kc1xuICAyMCUge1xuICAgIHN0cm9rZTogIzNjZjYzYztcbiAgfVxuXG4gIFxuICAyNCUge1xuICAgIFxuICB9XG4gIDI4JSB7XG4gICAgXG4gIH1cbiAgMzIlIHtcbiAgICBcbiAgfVxuICAzNiUge1xuICAgIFxuICB9XG4gIC8vIDIgU2Vjb25kc1xuICA0MCUge1xuICAgIFxuICB9XG4gIDQ0JSB7XG4gICAgXG4gIH1cblxuICA0OCUge1xuICAgIFxuICB9XG4gIDUyJSB7XG4gICAgXG4gIH1cbiAgNTYlIHtcbiAgICBcbiAgfVxuXG4gIC8vIDMgU2Vjb25kc1xuICA2MCUge1xuICAgIFxuICB9XG4gIDY0JSB7XG4gICAgXG4gIH1cbiAgNjglIHtcbiAgICBcbiAgfVxuXG4gIDcyJSB7XG4gICAgXG4gIH1cbiAgNzYlIHtcbiAgICBcbiAgfVxuXG4gIC8vIDQgU2Vjb25kc1xuICA4MCUge1xuICAgIFxuICB9XG5cbiAgLy8gNSBTZWNvbmRzXG4gIDEwMCUge1xuICAgIFxuICB9XG59XG4jYmxvZy1saW5lLTIge1xuICBhbmltYXRpb246IGJsb2ctbGluZS0yLWFuaW1hdGlvbiA1cyBlYXNlLWluIGluZmluaXRlO1xufVxuQGtleWZyYW1lcyBibG9nLWxpbmUtMi1hbmltYXRpb24ge1xuICAvLyAwIFNlY29uZHNcbiAgMCUge1xuICB9XG4gIDQlIHtcbiAgICBcbiAgfVxuICA4JSB7XG4gICAgXG4gIH1cbiAgMTIlIHtcbiAgICBcbiAgfVxuICAxNiUge1xuICAgIFxuICB9XG4gIC8vIDEgU2Vjb25kc1xuICAyMCUge1xuICB9XG4gIDI0JSB7XG4gIH1cbiAgMjglIHtcbiAgfVxuICAzMiUge1xuICAgIFxuICB9XG4gIDM2JSB7XG4gICAgXG4gIH1cbiAgLy8gMiBTZWNvbmRzXG4gIDQwJSB7XG4gICAgc3Ryb2tlOiB3aGl0ZTtcbiAgICBcbiAgfVxuICA0NCUge1xuICAgIHN0cm9rZTogIzNjZjYzYztcbiAgICBcbiAgfVxuXG4gIDQ4JSB7XG4gICAgXG4gIH1cbiAgNTIlIHtcbiAgICBcbiAgfVxuICA1NiUge1xuICAgIFxuICB9XG5cbiAgLy8gMyBTZWNvbmRzXG4gIDYwJSB7XG4gICAgXG4gIH1cbiAgNjQlIHtcbiAgICBcbiAgfVxuICA2OCUge1xuICAgIFxuICB9XG5cbiAgNzIlIHtcbiAgICBcbiAgfVxuICA3NiUge1xuICAgIFxuICB9XG5cbiAgLy8gNCBTZWNvbmRzXG4gIDgwJSB7XG4gICAgXG4gIH1cblxuICAvLyA1IFNlY29uZHNcbiAgMTAwJSB7XG4gICAgXG4gIH1cbn1cbiNibG9nLWxpbmUtMyB7XG4gIGFuaW1hdGlvbjogYmxvZy1saW5lLTMtYW5pbWF0aW9uIDVzIGVhc2UtaW4gaW5maW5pdGU7XG59XG5Aa2V5ZnJhbWVzIGJsb2ctbGluZS0zLWFuaW1hdGlvbiB7XG4gIC8vIDAgU2Vjb25kc1xuICAvLyBCbG9nIExpbmUgMVxuICAwJSB7XG4gIH1cbiAgNCUge1xuICAgIFxuICB9XG4gIDglIHtcbiAgICBcbiAgfVxuICAxMiUge1xuICAgIFxuICB9XG4gIDE2JSB7XG4gICAgXG4gIH1cbiAgLy8gMSBTZWNvbmRzXG4gIDIwJSB7XG4gIH1cbiAgLy8gQmxvZyBMaW5lIDJcbiAgMjQlIHtcbiAgICBcbiAgfVxuICAyOCUge1xuICAgIFxuICB9XG4gIDMyJSB7XG4gICAgXG4gIH1cbiAgMzYlIHtcbiAgICBcbiAgfVxuICAvLyAyIFNlY29uZHNcbiAgNDAlIHtcbiAgICBcbiAgfVxuICA0NCUge1xuICAgIFxuICB9XG5cbiAgNDglIHtcbiAgICBzdHJva2U6IHdoaXRlO1xuICAgIFxuICB9XG4gIDUyJSB7XG4gICAgXG4gIH1cbiAgNTYlIHtcbiAgICBcbiAgfVxuXG4gIC8vIDMgU2Vjb25kc1xuICAvLyBCbG9nIExpbmUgM1xuICA2MCUge1xuICAgIHN0cm9rZTogIzNjZjYzYztcbiAgICBcbiAgfVxuICA2NCUge1xuICAgIFxuICB9XG4gIDY4JSB7XG4gICAgXG4gIH1cblxuICA3MiUge1xuICAgIFxuICB9XG4gIDc2JSB7XG4gICAgXG4gIH1cblxuICAvLyA0IFNlY29uZHNcbiAgODAlIHtcbiAgICBcbiAgfVxuXG4gIC8vIDUgU2Vjb25kc1xuICAxMDAlIHtcbiAgICBcbiAgfVxufVxuI2JvdW5jZS1jbG91ZCB7XG4gIG9wYWNpdHk6IDA7XG4gIGFuaW1hdGlvbjogYm91bmNlLWNsb3VkLWFuaW1hdGlvbiA1cyBlYXNlLWluIGluZmluaXRlO1xufVxuQGtleWZyYW1lcyBib3VuY2UtY2xvdWQtYW5pbWF0aW9uIHtcbiAgLy8gMCBTZWNvbmRzXG4gIC8vIEJsb2cgTGluZSAxXG4gIDAlIHtcbiAgfVxuICA0JSB7XG4gICAgXG4gIH1cbiAgOCUge1xuICAgIFxuICB9XG4gIDEyJSB7XG4gICAgXG4gIH1cbiAgMTYlIHtcbiAgICBcbiAgfVxuICAvLyAxIFNlY29uZHNcbiAgMjAlIHtcbiAgfVxuICAvLyBCbG9nIExpbmUgMlxuICAyNCUge1xuICAgIFxuICB9XG4gIDI4JSB7XG4gICAgXG4gIH1cbiAgMzIlIHtcbiAgICBcbiAgfVxuICAzNiUge1xuICAgIFxuICB9XG4gIC8vIDIgU2Vjb25kc1xuICA0MCUge1xuICAgIFxuICB9XG4gIDQ0JSB7XG4gICAgXG4gIH1cblxuICA0OCUge1xuICAgIFxuICB9XG4gIDUyJSB7XG4gICAgXG4gIH1cbiAgNTYlIHtcbiAgfVxuXG4gIC8vIDMgU2Vjb25kc1xuICAvLyBCbG9nIExpbmUgM1xuICA2MCUge1xuXG4gIH1cbiAgNjQlIHtcbiAgICBcbiAgfVxuICA2OCUge1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cblxuICA3MiUge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbiAgNzYlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNTBweCk7XG4gICAgXG4gIH1cblxuICAvLyA0IFNlY29uZHNcbiAgODAlIHtcbiAgICBcbiAgfVxuXG4gIC8vIDUgU2Vjb25kc1xuICAxMDAlIHtcbiAgICBcbiAgfVxufSJdfQ== */";
      /***/
    },

    /***/
    98508:
    /*!*************************************************************************************!*\
      !*** ./src/app/components/contact-illustration/contact-illustration.component.scss ***!
      \*************************************************************************************/

    /***/
    function _(module) {
      "use strict";

      module.exports = "@media only screen and (max-width: 400px) {\n  svg {\n    height: 300px;\n    width: 300px;\n  }\n}\n@media only screen and (min-width: 400px) {\n  svg {\n    height: 300px;\n    width: 300px;\n  }\n}\n@media only screen and (min-width: 500px) {\n  svg {\n    height: 300px;\n    width: 300px;\n    margin: 0 auto;\n  }\n}\n@media only screen and (min-width: 1000px) {\n  svg {\n    height: 350px;\n    width: 350px;\n    margin: 0 auto;\n  }\n}\n#clouds-wrapper {\n  position: absolute;\n  top: -50px;\n  left: 140px;\n}\n@-webkit-keyframes clouds-fade-in {\n  0% {\n    opacity: 0;\n    transform: translateX(0px);\n  }\n  25% {\n    opacity: 0;\n    transform: translateX(0px);\n  }\n  55% {\n    opacity: 0;\n    transform: translateX(0px);\n  }\n  65% {\n    opacity: 0;\n    transform: translateX(0px);\n  }\n  85% {\n    opacity: 1;\n    transform: translateX(0px);\n  }\n  95% {\n    opacity: 1;\n    transform: translateX(10px);\n  }\n  100% {\n    opacity: 0;\n    transform: translateX(20px);\n  }\n}\n@keyframes clouds-fade-in {\n  0% {\n    opacity: 0;\n    transform: translateX(0px);\n  }\n  25% {\n    opacity: 0;\n    transform: translateX(0px);\n  }\n  55% {\n    opacity: 0;\n    transform: translateX(0px);\n  }\n  65% {\n    opacity: 0;\n    transform: translateX(0px);\n  }\n  85% {\n    opacity: 1;\n    transform: translateX(0px);\n  }\n  95% {\n    opacity: 1;\n    transform: translateX(10px);\n  }\n  100% {\n    opacity: 0;\n    transform: translateX(20px);\n  }\n}\n#Contact-Illustration {\n  opacity: 0;\n  -webkit-animation: whole-envelope-animation 5s cubic-bezier(0.68, -0.25, 0.265, 1.55) infinite;\n          animation: whole-envelope-animation 5s cubic-bezier(0.68, -0.25, 0.265, 1.55) infinite;\n}\n@-webkit-keyframes whole-envelope-animation {\n  0% {\n    transform: translateX(0px);\n  }\n  25% {\n    opacity: 1;\n    transform: translateX(0px);\n  }\n  50% {\n    opacity: 1;\n    transform: translateX(0px);\n  }\n  55% {\n    opacity: 1;\n    transform: translateX(0px);\n  }\n  90% {\n    opacity: 1;\n    transform: translateX(2000px);\n  }\n  100% {\n    opacity: 1;\n    transform: translateX(2000px);\n  }\n}\n@keyframes whole-envelope-animation {\n  0% {\n    transform: translateX(0px);\n  }\n  25% {\n    opacity: 1;\n    transform: translateX(0px);\n  }\n  50% {\n    opacity: 1;\n    transform: translateX(0px);\n  }\n  55% {\n    opacity: 1;\n    transform: translateX(0px);\n  }\n  90% {\n    opacity: 1;\n    transform: translateX(2000px);\n  }\n  100% {\n    opacity: 1;\n    transform: translateX(2000px);\n  }\n}\n#Envelope-Top {\n  -webkit-animation: envelope-top-animation 5s ease-in infinite;\n          animation: envelope-top-animation 5s ease-in infinite;\n  transform-origin: 78px 316px;\n  opacity: 0;\n  z-index: 999;\n}\n@-webkit-keyframes envelope-top-animation {\n  0% {\n    fill: #AEAEAE;\n    opacity: 0;\n    transform: rotateX(0deg);\n  }\n  25% {\n    transform: rotateX(0deg);\n    opacity: 0;\n  }\n  35% {\n    transform: rotateX(-180deg);\n    opacity: 1;\n  }\n  75% {\n    transform: rotateX(-180deg);\n    opacity: 1;\n  }\n  100% {\n    transform: rotateX(-180deg);\n    opacity: 1;\n  }\n}\n@keyframes envelope-top-animation {\n  0% {\n    fill: #AEAEAE;\n    opacity: 0;\n    transform: rotateX(0deg);\n  }\n  25% {\n    transform: rotateX(0deg);\n    opacity: 0;\n  }\n  35% {\n    transform: rotateX(-180deg);\n    opacity: 1;\n  }\n  75% {\n    transform: rotateX(-180deg);\n    opacity: 1;\n  }\n  100% {\n    transform: rotateX(-180deg);\n    opacity: 1;\n  }\n}\n#Envelope-Bottom {\n  -webkit-animation: envelope-bottom-animation 5s ease-in infinite;\n          animation: envelope-bottom-animation 5s ease-in infinite;\n}\n@-webkit-keyframes envelope-bottom-animation {\n  0% {\n    fill: #D8D8D8;\n  }\n  35% {\n    fill: #3cf63c;\n  }\n  100% {\n    fill: #3cf63c;\n  }\n}\n@keyframes envelope-bottom-animation {\n  0% {\n    fill: #D8D8D8;\n  }\n  35% {\n    fill: #3cf63c;\n  }\n  100% {\n    fill: #3cf63c;\n  }\n}\n#Letter {\n  fill: #3cf63c;\n  -webkit-animation: letter-animation 5s ease-in infinite;\n          animation: letter-animation 5s ease-in infinite;\n}\n@-webkit-keyframes letter-animation {\n  0% {\n    transform: translateY(-500px);\n  }\n  25% {\n    transform: translateY(0px);\n  }\n  50% {\n    transform: translateY(0px);\n  }\n  75% {\n    transform: translateY(0px);\n  }\n  100% {\n    transform: translateY(0px);\n  }\n}\n@keyframes letter-animation {\n  0% {\n    transform: translateY(-500px);\n  }\n  25% {\n    transform: translateY(0px);\n  }\n  50% {\n    transform: translateY(0px);\n  }\n  75% {\n    transform: translateY(0px);\n  }\n  100% {\n    transform: translateY(0px);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhY3QtaWxsdXN0cmF0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0U7SUFDRSxhQUFBO0lBQ0EsWUFBQTtFQUNGO0FBQ0Y7QUFDQTtFQUNFO0lBQ0UsYUFBQTtJQUNBLFlBQUE7RUFDRjtBQUNGO0FBQ0E7RUFDRTtJQUNFLGFBQUE7SUFDQSxZQUFBO0lBQ0EsY0FBQTtFQUNGO0FBQ0Y7QUFDQTtFQUNFO0lBQ0UsYUFBQTtJQUNBLFlBQUE7SUFDQSxjQUFBO0VBQ0Y7QUFDRjtBQUNBO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtBQUNGO0FBQ0E7RUFDRTtJQUNFLFVBQUE7SUFDQSwwQkFBQTtFQUVGO0VBQUE7SUFDRSxVQUFBO0lBQ0EsMEJBQUE7RUFFRjtFQUFBO0lBQ0UsVUFBQTtJQUNBLDBCQUFBO0VBRUY7RUFBQTtJQUNFLFVBQUE7SUFDQSwwQkFBQTtFQUVGO0VBQUE7SUFDRSxVQUFBO0lBQ0EsMEJBQUE7RUFFRjtFQUFBO0lBQ0UsVUFBQTtJQUNBLDJCQUFBO0VBRUY7RUFBQTtJQUNFLFVBQUE7SUFDQSwyQkFBQTtFQUVGO0FBQ0Y7QUE5QkE7RUFDRTtJQUNFLFVBQUE7SUFDQSwwQkFBQTtFQUVGO0VBQUE7SUFDRSxVQUFBO0lBQ0EsMEJBQUE7RUFFRjtFQUFBO0lBQ0UsVUFBQTtJQUNBLDBCQUFBO0VBRUY7RUFBQTtJQUNFLFVBQUE7SUFDQSwwQkFBQTtFQUVGO0VBQUE7SUFDRSxVQUFBO0lBQ0EsMEJBQUE7RUFFRjtFQUFBO0lBQ0UsVUFBQTtJQUNBLDJCQUFBO0VBRUY7RUFBQTtJQUNFLFVBQUE7SUFDQSwyQkFBQTtFQUVGO0FBQ0Y7QUFBQTtFQUNFLFVBQUE7RUFDQSw4RkFBQTtVQUFBLHNGQUFBO0FBRUY7QUFBQTtFQUNFO0lBQ0UsMEJBQUE7RUFHRjtFQURBO0lBQ0UsVUFBQTtJQUNBLDBCQUFBO0VBR0Y7RUFEQTtJQUNFLFVBQUE7SUFDQSwwQkFBQTtFQUdGO0VBREE7SUFDRSxVQUFBO0lBQ0EsMEJBQUE7RUFHRjtFQURBO0lBQ0UsVUFBQTtJQUNBLDZCQUFBO0VBR0Y7RUFEQTtJQUNFLFVBQUE7SUFDQSw2QkFBQTtFQUdGO0FBQ0Y7QUExQkE7RUFDRTtJQUNFLDBCQUFBO0VBR0Y7RUFEQTtJQUNFLFVBQUE7SUFDQSwwQkFBQTtFQUdGO0VBREE7SUFDRSxVQUFBO0lBQ0EsMEJBQUE7RUFHRjtFQURBO0lBQ0UsVUFBQTtJQUNBLDBCQUFBO0VBR0Y7RUFEQTtJQUNFLFVBQUE7SUFDQSw2QkFBQTtFQUdGO0VBREE7SUFDRSxVQUFBO0lBQ0EsNkJBQUE7RUFHRjtBQUNGO0FBQUE7RUFDRSw2REFBQTtVQUFBLHFEQUFBO0VBQ0EsNEJBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtBQUVGO0FBQUE7RUFDRTtJQUNFLGFBQUE7SUFDQSxVQUFBO0lBQ0Esd0JBQUE7RUFHRjtFQURBO0lBQ0Usd0JBQUE7SUFDQSxVQUFBO0VBR0Y7RUFEQTtJQUNFLDJCQUFBO0lBQ0EsVUFBQTtFQUdGO0VBREE7SUFDRSwyQkFBQTtJQUNBLFVBQUE7RUFHRjtFQURBO0lBQ0UsMkJBQUE7SUFDQSxVQUFBO0VBR0Y7QUFDRjtBQXhCQTtFQUNFO0lBQ0UsYUFBQTtJQUNBLFVBQUE7SUFDQSx3QkFBQTtFQUdGO0VBREE7SUFDRSx3QkFBQTtJQUNBLFVBQUE7RUFHRjtFQURBO0lBQ0UsMkJBQUE7SUFDQSxVQUFBO0VBR0Y7RUFEQTtJQUNFLDJCQUFBO0lBQ0EsVUFBQTtFQUdGO0VBREE7SUFDRSwyQkFBQTtJQUNBLFVBQUE7RUFHRjtBQUNGO0FBREE7RUFDRSxnRUFBQTtVQUFBLHdEQUFBO0FBR0Y7QUFEQTtFQUNFO0lBQ0UsYUFBQTtFQUlGO0VBRkE7SUFDRSxhQUFBO0VBSUY7RUFGQTtJQUNFLGFBQUE7RUFJRjtBQUNGO0FBYkE7RUFDRTtJQUNFLGFBQUE7RUFJRjtFQUZBO0lBQ0UsYUFBQTtFQUlGO0VBRkE7SUFDRSxhQUFBO0VBSUY7QUFDRjtBQUNBO0VBQ0UsYUFBQTtFQUNBLHVEQUFBO1VBQUEsK0NBQUE7QUFDRjtBQUNBO0VBQ0U7SUFDRSw2QkFBQTtFQUVGO0VBQUE7SUFDRSwwQkFBQTtFQUVGO0VBQUE7SUFDRSwwQkFBQTtFQUVGO0VBQUE7SUFDRSwwQkFBQTtFQUVGO0VBQUE7SUFDRSwwQkFBQTtFQUVGO0FBQ0Y7QUFqQkE7RUFDRTtJQUNFLDZCQUFBO0VBRUY7RUFBQTtJQUNFLDBCQUFBO0VBRUY7RUFBQTtJQUNFLDBCQUFBO0VBRUY7RUFBQTtJQUNFLDBCQUFBO0VBRUY7RUFBQTtJQUNFLDBCQUFBO0VBRUY7QUFDRiIsImZpbGUiOiJjb250YWN0LWlsbHVzdHJhdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDAwcHgpIHtcbiAgc3ZnIHtcbiAgICBoZWlnaHQ6IDMwMHB4O1xuICAgIHdpZHRoOiAgMzAwcHg7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNDAwcHgpIHtcbiAgc3ZnIHtcbiAgICBoZWlnaHQ6IDMwMHB4O1xuICAgIHdpZHRoOiAgMzAwcHg7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNTAwcHgpIHtcbiAgc3ZnIHtcbiAgICBoZWlnaHQ6IDMwMHB4O1xuICAgIHdpZHRoOiAgMzAwcHg7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAwMHB4KSB7XG4gIHN2ZyB7XG4gICAgaGVpZ2h0OiAzNTBweDtcbiAgICB3aWR0aDogIDM1MHB4O1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICB9XG59XG4jY2xvdWRzLXdyYXBwZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogLTUwcHg7XG4gIGxlZnQ6IDE0MHB4O1xufVxuQGtleWZyYW1lcyBjbG91ZHMtZmFkZS1pbiB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwcHgpO1xuICB9XG4gIDI1JSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMHB4KTtcbiAgfVxuICA1NSUge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDBweCk7XG4gIH1cbiAgNjUlIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwcHgpO1xuICB9XG4gIDg1JSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMHB4KTtcbiAgfVxuICA5NSUge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwcHgpO1xuICB9XG4gIDEwMCUge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDIwcHgpO1xuICB9XG59XG4jQ29udGFjdC1JbGx1c3RyYXRpb24ge1xuICBvcGFjaXR5OiAwO1xuICBhbmltYXRpb246IHdob2xlLWVudmVsb3BlLWFuaW1hdGlvbiA1cyBjdWJpYy1iZXppZXIoMC42OCwgLTAuMjUsIDAuMjY1LCAxLjU1KSBpbmZpbml0ZTtcbn1cbkBrZXlmcmFtZXMgd2hvbGUtZW52ZWxvcGUtYW5pbWF0aW9uIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwcHgpO1xuICB9XG4gIDI1JSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMHB4KTtcbiAgfVxuICA1MCUge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDBweCk7XG4gIH1cbiAgNTUlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMHB4KTtcbiAgfVxuICA5MCUge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDIwMDBweCk7XG4gIH1cbiAgMTAwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjAwMHB4KTtcbiAgfVxufVxuXG4jRW52ZWxvcGUtVG9wIHtcbiAgYW5pbWF0aW9uOiBlbnZlbG9wZS10b3AtYW5pbWF0aW9uIDVzIGVhc2UtaW4gaW5maW5pdGU7XG4gIHRyYW5zZm9ybS1vcmlnaW46IDc4cHggMzE2cHg7XG4gIG9wYWNpdHk6IDA7XG4gIHotaW5kZXg6IDk5OTtcbn1cbkBrZXlmcmFtZXMgZW52ZWxvcGUtdG9wLWFuaW1hdGlvbiB7XG4gIDAlIHtcbiAgICBmaWxsOiAjQUVBRUFFO1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdHJhbnNmb3JtOiByb3RhdGVYKDBkZWcpO1xuICB9XG4gIDI1JSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGVYKDBkZWcpO1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgMzUlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVgoLTE4MGRlZyk7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxuICA3NSUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlWCgtMTgwZGVnKTtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlWCgtMTgwZGVnKTtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG4jRW52ZWxvcGUtQm90dG9tIHtcbiAgYW5pbWF0aW9uOiBlbnZlbG9wZS1ib3R0b20tYW5pbWF0aW9uIDVzIGVhc2UtaW4gaW5maW5pdGU7XG59XG5Aa2V5ZnJhbWVzIGVudmVsb3BlLWJvdHRvbS1hbmltYXRpb24ge1xuICAwJSB7XG4gICAgZmlsbDogI0Q4RDhEODtcbiAgfVxuICAzNSUge1xuICAgIGZpbGw6ICMzY2Y2M2M7XG4gIH1cbiAgMTAwJSB7XG4gICAgZmlsbDogIzNjZjYzYztcbiAgfVxufVxuI0VudmVsb3BlLUJhY2sge1xuXG59XG4jTGV0dGVyIHtcbiAgZmlsbDogIzNjZjYzYztcbiAgYW5pbWF0aW9uOiBsZXR0ZXItYW5pbWF0aW9uIDVzIGVhc2UtaW4gaW5maW5pdGU7XG59XG5Aa2V5ZnJhbWVzIGxldHRlci1hbmltYXRpb24ge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MDBweCk7XG4gIH1cbiAgMjUlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KTtcbiAgfVxuICA1MCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpO1xuICB9XG4gIDc1JSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCk7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCk7XG4gIH1cbn0iXX0= */";
      /***/
    },

    /***/
    81005:
    /*!*******************************************************************!*\
      !*** ./src/app/components/design-icon/design-icon.component.scss ***!
      \*******************************************************************/

    /***/
    function _(module) {
      "use strict";

      module.exports = "svg {\n  margin: 3em auto;\n}\n\n#set-square {\n  transition: 500ms;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlc2lnbi1pY29uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7QUFDRjs7QUFDQTtFQUNFLGlCQUFBO0FBRUYiLCJmaWxlIjoiZGVzaWduLWljb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJzdmcge1xuICBtYXJnaW46IDNlbSBhdXRvO1xufVxuI3NldC1zcXVhcmUge1xuICB0cmFuc2l0aW9uOiA1MDBtcztcbn0iXX0= */";
      /***/
    },

    /***/
    71844:
    /*!*****************************************************************************!*\
      !*** ./src/app/components/development-icon/development-icon.component.scss ***!
      \*****************************************************************************/

    /***/
    function _(module) {
      "use strict";

      module.exports = "svg {\n  margin: 3em auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRldmVsb3BtZW50LWljb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtBQUNGIiwiZmlsZSI6ImRldmVsb3BtZW50LWljb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJzdmcge1xuICBtYXJnaW46IDNlbSBhdXRvO1xufSJdfQ== */";
      /***/
    },

    /***/
    60297:
    /*!***********************************************************************************!*\
      !*** ./src/app/components/donate-illustration/donate-illustration.component.scss ***!
      \***********************************************************************************/

    /***/
    function _(module) {
      "use strict";

      module.exports = "@media only screen and (max-width: 400px) {\n  svg {\n    height: 200px;\n    width: 200px;\n  }\n}\n@media only screen and (min-width: 400px) {\n  svg {\n    height: 200px;\n    width: 200px;\n  }\n}\n@media only screen and (min-width: 500px) {\n  svg {\n    height: 300px;\n    width: 300px;\n    margin: 0 auto;\n  }\n}\n@media only screen and (min-width: 1000px) {\n  svg {\n    height: 350px;\n    width: 350px;\n    margin: 0 auto;\n  }\n}\n@-webkit-keyframes coin-drop {\n  0% {\n    opacity: 0;\n    transform: translate(0px, 0px);\n  }\n  10% {\n    opacity: 0.2;\n    transform: translate(-10px, 300px);\n  }\n  20% {\n    opacity: 1;\n    transform: translate(-20px, 700px);\n  }\n  100% {\n    opacity: 1;\n    transform: translate(-30px, 700px);\n  }\n}\n@keyframes coin-drop {\n  0% {\n    opacity: 0;\n    transform: translate(0px, 0px);\n  }\n  10% {\n    opacity: 0.2;\n    transform: translate(-10px, 300px);\n  }\n  20% {\n    opacity: 1;\n    transform: translate(-20px, 700px);\n  }\n  100% {\n    opacity: 1;\n    transform: translate(-30px, 700px);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRvbmF0ZS1pbGx1c3RyYXRpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRTtJQUNFLGFBQUE7SUFDQSxZQUFBO0VBQ0Y7QUFDRjtBQUNBO0VBQ0U7SUFDRSxhQUFBO0lBQ0EsWUFBQTtFQUNGO0FBQ0Y7QUFDQTtFQUNFO0lBQ0UsYUFBQTtJQUNBLFlBQUE7SUFDQSxjQUFBO0VBQ0Y7QUFDRjtBQUNBO0VBQ0U7SUFDRSxhQUFBO0lBQ0EsWUFBQTtJQUNBLGNBQUE7RUFDRjtBQUNGO0FBR0E7RUFDRTtJQUNFLFVBQUE7SUFDQSw4QkFBQTtFQURGO0VBR0E7SUFDRSxZQUFBO0lBQ0Esa0NBQUE7RUFERjtFQUdBO0lBQ0UsVUFBQTtJQUNBLGtDQUFBO0VBREY7RUFHQTtJQUNFLFVBQUE7SUFDQSxrQ0FBQTtFQURGO0FBQ0Y7QUFmQTtFQUNFO0lBQ0UsVUFBQTtJQUNBLDhCQUFBO0VBREY7RUFHQTtJQUNFLFlBQUE7SUFDQSxrQ0FBQTtFQURGO0VBR0E7SUFDRSxVQUFBO0lBQ0Esa0NBQUE7RUFERjtFQUdBO0lBQ0UsVUFBQTtJQUNBLGtDQUFBO0VBREY7QUFDRiIsImZpbGUiOiJkb25hdGUtaWxsdXN0cmF0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MDBweCkge1xuICBzdmcge1xuICAgIGhlaWdodDogMjAwcHg7XG4gICAgd2lkdGg6ICAyMDBweDtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA0MDBweCkge1xuICBzdmcge1xuICAgIGhlaWdodDogMjAwcHg7XG4gICAgd2lkdGg6ICAyMDBweDtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA1MDBweCkge1xuICBzdmcge1xuICAgIGhlaWdodDogMzAwcHg7XG4gICAgd2lkdGg6ICAzMDBweDtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDAwcHgpIHtcbiAgc3ZnIHtcbiAgICBoZWlnaHQ6IDM1MHB4O1xuICAgIHdpZHRoOiAgMzUwcHg7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gIH1cbn1cbiNjb2luIHtcbn1cbkBrZXlmcmFtZXMgY29pbi1kcm9wIHtcbiAgMCUge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTBweCwwcHgpXG4gIH1cbiAgMTAlIHtcbiAgICBvcGFjaXR5OiAwLjI7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTEwcHgsMzAwcHgpXG4gIH1cbiAgMjAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0yMHB4LDcwMHB4KVxuICB9XG4gIDEwMCUge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTMwcHgsNzAwcHgpXG4gIH1cbn0iXX0= */";
      /***/
    },

    /***/
    47139:
    /*!***********************************************************************************!*\
      !*** ./src/app/components/header-illustration/header-illustration.component.scss ***!
      \***********************************************************************************/

    /***/
    function _(module) {
      "use strict";

      module.exports = "svg {\n  box-shadow: 1px 1px 15px #b9b9b9;\n  border-radius: 5px;\n}\n\n/* Number Lines */\n\n#line-1 {\n  -webkit-animation: number-color-animation 0.5s ease 0.5s forwards, number-up 0.5s ease 0.5s forwards;\n          animation: number-color-animation 0.5s ease 0.5s forwards, number-up 0.5s ease 0.5s forwards;\n  fill: #777;\n}\n\n#line-2 {\n  -webkit-animation: number-color-animation 0.5s ease 1.5s forwards, number-up 0.5s ease 1.5s forwards;\n          animation: number-color-animation 0.5s ease 1.5s forwards, number-up 0.5s ease 1.5s forwards;\n  fill: #777;\n}\n\n#line-3 {\n  -webkit-animation: number-color-animation 0.5s ease 2.5s forwards, number-up 0.5s ease 2.5s forwards;\n          animation: number-color-animation 0.5s ease 2.5s forwards, number-up 0.5s ease 2.5s forwards;\n  fill: #777;\n}\n\n#line-4 {\n  -webkit-animation: number-color-animation 0.5s ease 3.5s forwards, number-up 0.5s ease 3.5s forwards;\n          animation: number-color-animation 0.5s ease 3.5s forwards, number-up 0.5s ease 3.5s forwards;\n  fill: #777;\n}\n\n#line-5 {\n  -webkit-animation: number-color-animation 0.5s ease 4.5s forwards, number-up 0.5s ease 4.5s forwards;\n          animation: number-color-animation 0.5s ease 4.5s forwards, number-up 0.5s ease 4.5s forwards;\n  fill: #777;\n}\n\n#line-6 {\n  -webkit-animation: number-color-animation 0.5s ease 5.5s forwards, number-up 0.5s ease 5.5s forwards;\n          animation: number-color-animation 0.5s ease 5.5s forwards, number-up 0.5s ease 5.5s forwards;\n  fill: #777;\n}\n\n#line-7 {\n  -webkit-animation: number-color-animation 0.5s ease 6.5s forwards, number-up 0.5s ease 6.5s forwards;\n          animation: number-color-animation 0.5s ease 6.5s forwards, number-up 0.5s ease 6.5s forwards;\n  fill: #777;\n}\n\n#line-8 {\n  -webkit-animation: number-color-animation 0.5s ease 7.5s forwards, number-up 0.5s ease 7.5s forwards;\n          animation: number-color-animation 0.5s ease 7.5s forwards, number-up 0.5s ease 7.5s forwards;\n  fill: #777;\n}\n\n#line-10, #line-11, #line-12, #line-13, #line-14, #line-15, #line-16, #line-17, #line-18, #line-19, #line-20, #line-21 {\n  fill: #777;\n}\n\n#bug-line-start {\n  fill: #777;\n  -webkit-animation: number-color-animation-bug 9s ease forwards;\n          animation: number-color-animation-bug 9s ease forwards;\n}\n\n#bug-line-end {\n  fill: #777;\n  -webkit-animation: number-color-animation-bug 9s ease forwards;\n          animation: number-color-animation-bug 9s ease forwards;\n}\n\n#bug-red-1 {\n  fill: red;\n  transform-origin: 235.8px 206px;\n  -webkit-animation: bug-red-number-rotate-animation 3s cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.5s infinite;\n          animation: bug-red-number-rotate-animation 3s cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.5s infinite;\n}\n\n#bug-red-2 {\n  fill: red;\n  transform-origin: 255.5px 206px;\n  -webkit-animation: bug-red-number-rotate-animation 3s cubic-bezier(0.175, 0.885, 0.32, 1.275) 1s infinite;\n          animation: bug-red-number-rotate-animation 3s cubic-bezier(0.175, 0.885, 0.32, 1.275) 1s infinite;\n}\n\n#bug-red-3 {\n  fill: red;\n  transform-origin: 272.2px 206px;\n  -webkit-animation: bug-red-number-rotate-animation 3s cubic-bezier(0.175, 0.885, 0.32, 1.275) 1.5s infinite;\n          animation: bug-red-number-rotate-animation 3s cubic-bezier(0.175, 0.885, 0.32, 1.275) 1.5s infinite;\n}\n\n#bug-red-4 {\n  fill: red;\n  transform-origin: 288.9px 206px;\n  -webkit-animation: bug-red-number-rotate-animation 3s cubic-bezier(0.175, 0.885, 0.32, 1.275) 2s infinite;\n          animation: bug-red-number-rotate-animation 3s cubic-bezier(0.175, 0.885, 0.32, 1.275) 2s infinite;\n}\n\n@-webkit-keyframes bug-red-number-rotate-animation {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes bug-red-number-rotate-animation {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n@-webkit-keyframes shift-bug-numbers-up-animation {\n  0% {\n    transform: rotate(0deg);\n  }\n  30% {\n    transform: translateY(0px);\n  }\n  100% {\n    transform: translateY(-30px);\n  }\n}\n\n@keyframes shift-bug-numbers-up-animation {\n  0% {\n    transform: rotate(0deg);\n  }\n  30% {\n    transform: translateY(0px);\n  }\n  100% {\n    transform: translateY(-30px);\n  }\n}\n\n#bug-fix-middle-1 {\n  opacity: 0;\n  fill: #3df63d;\n  -webkit-animation: bux-fix-up 1s ease 12.5s forwards;\n          animation: bux-fix-up 1s ease 12.5s forwards;\n}\n\n#bug-fix-middle-2 {\n  opacity: 0;\n  fill: #3df63d;\n  -webkit-animation: bux-fix-up 1s ease 13s forwards;\n          animation: bux-fix-up 1s ease 13s forwards;\n}\n\n#bug-fix-middle-3 {\n  opacity: 0;\n  fill: #3df63d;\n  -webkit-animation: bux-fix-up 1s ease 13.5s forwards;\n          animation: bux-fix-up 1s ease 13.5s forwards;\n}\n\n#bug-fix-middle-4 {\n  opacity: 0;\n  fill: #3df63d;\n  -webkit-animation: bux-fix-up 1s ease 14s forwards;\n          animation: bux-fix-up 1s ease 14s forwards;\n}\n\n@-webkit-keyframes falling-line-rotate {\n  0% {\n    transform: translate(0px, 0px) rotate(0deg);\n  }\n  50% {\n    transform-origin: 200px 500px;\n    transform: translate(200px, 0px) rotate(20deg);\n  }\n  100% {\n    transform: translate(220px, 200px) rotate(50deg);\n  }\n}\n\n@keyframes falling-line-rotate {\n  0% {\n    transform: translate(0px, 0px) rotate(0deg);\n  }\n  50% {\n    transform-origin: 200px 500px;\n    transform: translate(200px, 0px) rotate(20deg);\n  }\n  100% {\n    transform: translate(220px, 200px) rotate(50deg);\n  }\n}\n\n@-webkit-keyframes game-over-slide-up {\n  0% {\n    transform: translateY(40px);\n  }\n  100% {\n    opacity: 1;\n    transform: translateY(0px);\n  }\n}\n\n@keyframes game-over-slide-up {\n  0% {\n    transform: translateY(40px);\n  }\n  100% {\n    opacity: 1;\n    transform: translateY(0px);\n  }\n}\n\n#header-name {\n  color: white;\n  font-size: 1.7em;\n  margin: 1em auto;\n  padding: 6px;\n  transition: 500ms;\n  border-radius: 7px;\n  margin-bottom: 0.5em;\n  box-shadow: 1px 1px 3px #0000006e;\n}\n\n@-webkit-keyframes header-background-blue-pill-animation {\n  0% {\n    background-image: linear-gradient(45deg, #ffffffe5, #ffffffe5);\n  }\n  100% {\n    background-image: linear-gradient(180deg, #ffffffe5 72%, #ffb3b3);\n  }\n}\n\n@keyframes header-background-blue-pill-animation {\n  0% {\n    background-image: linear-gradient(45deg, #ffffffe5, #ffffffe5);\n  }\n  100% {\n    background-image: linear-gradient(180deg, #ffffffe5 72%, #ffb3b3);\n  }\n}\n\n@-webkit-keyframes header-background-red-pill-animation {\n  0% {\n    background-image: linear-gradient(45deg, #ffffffe5, #ffffffe5);\n  }\n  100% {\n    background: #1500187a;\n  }\n}\n\n@keyframes header-background-red-pill-animation {\n  0% {\n    background-image: linear-gradient(45deg, #ffffffe5, #ffffffe5);\n  }\n  100% {\n    background: #1500187a;\n  }\n}\n\n@-webkit-keyframes svg-wrapper-fall {\n  0% {\n    transform: translate(0px, 0px) rotate(0deg);\n  }\n  20% {\n    transform-origin: 20px 500px;\n    transform: translate(20px, 0px) rotate(20deg);\n  }\n  98% {\n    opacity: 0;\n    transform: translate(25px, 1000px) rotate(50deg);\n  }\n}\n\n@keyframes svg-wrapper-fall {\n  0% {\n    transform: translate(0px, 0px) rotate(0deg);\n  }\n  20% {\n    transform-origin: 20px 500px;\n    transform: translate(20px, 0px) rotate(20deg);\n  }\n  98% {\n    opacity: 0;\n    transform: translate(25px, 1000px) rotate(50deg);\n  }\n}\n\n@-webkit-keyframes number-color-animation {\n  0% {\n    fill: white;\n  }\n  20% {\n    fill: #E8B923;\n  }\n  100% {\n    fill: #3df63d;\n  }\n}\n\n@keyframes number-color-animation {\n  0% {\n    fill: white;\n  }\n  20% {\n    fill: #E8B923;\n  }\n  100% {\n    fill: #3df63d;\n  }\n}\n\n@-webkit-keyframes number-up {\n  0% {\n    transform: translateY(0px);\n    opacity: 1;\n  }\n  50% {\n    transform: translateY(5px);\n    opacity: 0.8;\n  }\n  100% {\n    transform: translateY(-50px);\n    opacity: 0;\n  }\n}\n\n@keyframes number-up {\n  0% {\n    transform: translateY(0px);\n    opacity: 1;\n  }\n  50% {\n    transform: translateY(5px);\n    opacity: 0.8;\n  }\n  100% {\n    transform: translateY(-50px);\n    opacity: 0;\n  }\n}\n\n@-webkit-keyframes bux-fix-up {\n  0% {\n    transform: translateY(0px);\n    opacity: 0;\n  }\n  100% {\n    transform: translateY(-50px);\n    opacity: 1;\n  }\n}\n\n@keyframes bux-fix-up {\n  0% {\n    transform: translateY(0px);\n    opacity: 0;\n  }\n  100% {\n    transform: translateY(-50px);\n    opacity: 1;\n  }\n}\n\n@-webkit-keyframes turn-red {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    fill: red;\n  }\n}\n\n@keyframes turn-red {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    fill: red;\n  }\n}\n\n#choice-messsage {\n  opacity: 0;\n  -webkit-animation: bug-message-1 1s ease 15s forwards;\n          animation: bug-message-1 1s ease 15s forwards;\n}\n\n#select-pill-messsage {\n  opacity: 0;\n  transform: translate(18px, 600px);\n}\n\n@-webkit-keyframes select-pill-messsage-animation {\n  0% {\n    transform: translateY(500px);\n    opacity: 0;\n  }\n  100% {\n    transform: translateY(0px);\n    opacity: 1;\n  }\n}\n\n@keyframes select-pill-messsage-animation {\n  0% {\n    transform: translateY(500px);\n    opacity: 0;\n  }\n  100% {\n    transform: translateY(0px);\n    opacity: 1;\n  }\n}\n\n#blue-pill-message, #red-pill-message {\n  transform: translate(0px, 600px);\n}\n\n@media only screen and (max-width: 400px) {\n  svg {\n    height: 300px;\n    width: 300px;\n  }\n}\n\n@media only screen and (min-width: 400px) {\n  svg {\n    height: 330px;\n    width: 330px;\n    margin: 5em auto 0 auto;\n  }\n}\n\n@media only screen and (min-width: 500px) {\n  svg {\n    height: 450px;\n    width: 450px;\n    margin: 5em auto 0 auto;\n  }\n}\n\n@media only screen and (min-width: 1000px) {\n  svg {\n    height: 500px;\n    width: 500px;\n    margin: 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci1pbGx1c3RyYXRpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQ0FBQTtFQUNBLGtCQUFBO0FBQ0o7O0FBQ0EsaUJBQUE7O0FBQ0E7RUFDSSxvR0FDSTtVQURKLDRGQUNJO0VBRUEsVUFBQTtBQUFSOztBQUVBO0VBQ0ksb0dBQ0k7VUFESiw0RkFDSTtFQUVBLFVBQUE7QUFEUjs7QUFHQTtFQUNJLG9HQUFBO1VBQUEsNEZBQUE7RUFDQSxVQUFBO0FBQUo7O0FBRUE7RUFDSSxvR0FBQTtVQUFBLDRGQUFBO0VBQ0EsVUFBQTtBQUNKOztBQUNBO0VBQ0ksb0dBQUE7VUFBQSw0RkFBQTtFQUNBLFVBQUE7QUFFSjs7QUFBQTtFQUNJLG9HQUFBO1VBQUEsNEZBQUE7RUFDQSxVQUFBO0FBR0o7O0FBREE7RUFDSSxvR0FBQTtVQUFBLDRGQUFBO0VBQ0EsVUFBQTtBQUlKOztBQUZBO0VBQ0ksb0dBQUE7VUFBQSw0RkFBQTtFQUNBLFVBQUE7QUFLSjs7QUFGQTtFQUNJLFVBQUE7QUFLSjs7QUFEQTtFQUNJLFVBQUE7RUFDQSw4REFBQTtVQUFBLHNEQUFBO0FBSUo7O0FBRkE7RUFDSSxVQUFBO0VBQ0EsOERBQUE7VUFBQSxzREFBQTtBQUtKOztBQUZBO0VBQ0ksU0FBQTtFQUNBLCtCQUFBO0VBQ0EsMkdBQUE7VUFBQSxtR0FBQTtBQUtKOztBQUhBO0VBQ0ksU0FBQTtFQUNBLCtCQUFBO0VBQ0EseUdBQUE7VUFBQSxpR0FBQTtBQU1KOztBQUpBO0VBQ0ksU0FBQTtFQUNBLCtCQUFBO0VBQ0EsMkdBQUE7VUFBQSxtR0FBQTtBQU9KOztBQUxBO0VBQ0ksU0FBQTtFQUNBLCtCQUFBO0VBQ0EseUdBQUE7VUFBQSxpR0FBQTtBQVFKOztBQU5BO0VBQ0c7SUFDSSx1QkFBQTtFQVNMO0VBTkM7SUFDSSx5QkFBQTtFQVFMO0FBQ0Y7O0FBZkE7RUFDRztJQUNJLHVCQUFBO0VBU0w7RUFOQztJQUNJLHlCQUFBO0VBUUw7QUFDRjs7QUFOQTtFQUNHO0lBQ0ksdUJBQUE7RUFRTDtFQU5BO0lBQ0ssMEJBQUE7RUFRTDtFQU5DO0lBQ0ksNEJBQUE7RUFRTDtBQUNGOztBQWpCQTtFQUNHO0lBQ0ksdUJBQUE7RUFRTDtFQU5BO0lBQ0ssMEJBQUE7RUFRTDtFQU5DO0lBQ0ksNEJBQUE7RUFRTDtBQUNGOztBQUxBO0VBQ0ksVUFBQTtFQUNBLGFBQUE7RUFDQSxvREFBQTtVQUFBLDRDQUFBO0FBT0o7O0FBTEE7RUFDSSxVQUFBO0VBQ0EsYUFBQTtFQUNBLGtEQUFBO1VBQUEsMENBQUE7QUFRSjs7QUFOQTtFQUNJLFVBQUE7RUFDQSxhQUFBO0VBQ0Esb0RBQUE7VUFBQSw0Q0FBQTtBQVNKOztBQVBBO0VBQ0ksVUFBQTtFQUNBLGFBQUE7RUFDQSxrREFBQTtVQUFBLDBDQUFBO0FBVUo7O0FBUkE7RUFDSTtJQUNJLDJDQUFBO0VBV047RUFURTtJQUNJLDZCQUFBO0lBQ0EsOENBQUE7RUFXTjtFQVRFO0lBQ0ksZ0RBQUE7RUFXTjtBQUNGOztBQXJCQTtFQUNJO0lBQ0ksMkNBQUE7RUFXTjtFQVRFO0lBQ0ksNkJBQUE7SUFDQSw4Q0FBQTtFQVdOO0VBVEU7SUFDSSxnREFBQTtFQVdOO0FBQ0Y7O0FBVEE7RUFDSTtJQUNJLDJCQUFBO0VBV047RUFSRTtJQUNJLFVBQUE7SUFDQSwwQkFBQTtFQVVOO0FBQ0Y7O0FBbEJBO0VBQ0k7SUFDSSwyQkFBQTtFQVdOO0VBUkU7SUFDSSxVQUFBO0lBQ0EsMEJBQUE7RUFVTjtBQUNGOztBQVJBO0VBQ0ksWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0EsaUNBQUE7QUFVSjs7QUFSQTtFQUNJO0lBQ0ksOERBQUE7RUFXTjtFQVJFO0lBQ0ksaUVBQUE7RUFVTjtBQUNGOztBQWpCQTtFQUNJO0lBQ0ksOERBQUE7RUFXTjtFQVJFO0lBQ0ksaUVBQUE7RUFVTjtBQUNGOztBQVJBO0VBQ0k7SUFDSSw4REFBQTtFQVVOO0VBUEU7SUFDSSxxQkFBQTtFQVNOO0FBQ0Y7O0FBaEJBO0VBQ0k7SUFDSSw4REFBQTtFQVVOO0VBUEU7SUFDSSxxQkFBQTtFQVNOO0FBQ0Y7O0FBUEE7RUFDSTtJQUNJLDJDQUFBO0VBU047RUFQRTtJQUNJLDRCQUFBO0lBQ0EsNkNBQUE7RUFTTjtFQVBFO0lBQ0ksVUFBQTtJQUNBLGdEQUFBO0VBU047QUFDRjs7QUFwQkE7RUFDSTtJQUNJLDJDQUFBO0VBU047RUFQRTtJQUNJLDRCQUFBO0lBQ0EsNkNBQUE7RUFTTjtFQVBFO0lBQ0ksVUFBQTtJQUNBLGdEQUFBO0VBU047QUFDRjs7QUFKQTtFQUNJO0lBQ0ksV0FBQTtFQU1OO0VBSkU7SUFDSSxhQUFBO0VBTU47RUFKRTtJQUNJLGFBQUE7RUFNTjtBQUNGOztBQWZBO0VBQ0k7SUFDSSxXQUFBO0VBTU47RUFKRTtJQUNJLGFBQUE7RUFNTjtFQUpFO0lBQ0ksYUFBQTtFQU1OO0FBQ0Y7O0FBSkE7RUFDSztJQUNHLDBCQUFBO0lBQ0EsVUFBQTtFQU1OO0VBSkU7SUFDSSwwQkFBQTtJQUNBLFlBQUE7RUFNTjtFQUpFO0lBQ0ksNEJBQUE7SUFDQSxVQUFBO0VBTU47QUFDRjs7QUFsQkE7RUFDSztJQUNHLDBCQUFBO0lBQ0EsVUFBQTtFQU1OO0VBSkU7SUFDSSwwQkFBQTtJQUNBLFlBQUE7RUFNTjtFQUpFO0lBQ0ksNEJBQUE7SUFDQSxVQUFBO0VBTU47QUFDRjs7QUFKQTtFQUNLO0lBQ0csMEJBQUE7SUFDQSxVQUFBO0VBTU47RUFKRTtJQUNJLDRCQUFBO0lBQ0EsVUFBQTtFQU1OO0FBQ0Y7O0FBZEE7RUFDSztJQUNHLDBCQUFBO0lBQ0EsVUFBQTtFQU1OO0VBSkU7SUFDSSw0QkFBQTtJQUNBLFVBQUE7RUFNTjtBQUNGOztBQUpBO0VBQ0k7SUFDSSx1QkFBQTtFQU1OO0VBSkU7SUFDSSxTQUFBO0VBTU47QUFDRjs7QUFaQTtFQUNJO0lBQ0ksdUJBQUE7RUFNTjtFQUpFO0lBQ0ksU0FBQTtFQU1OO0FBQ0Y7O0FBRkE7RUFDRSxVQUFBO0VBQ0EscURBQUE7VUFBQSw2Q0FBQTtBQUlGOztBQUZBO0VBR0EsVUFBQTtFQUNBLGlDQUFBO0FBR0E7O0FBREE7RUFDSTtJQUNHLDRCQUFBO0lBQ0EsVUFBQTtFQUlMO0VBRkM7SUFDSSwwQkFBQTtJQUNBLFVBQUE7RUFJTDtBQUNGOztBQVpBO0VBQ0k7SUFDRyw0QkFBQTtJQUNBLFVBQUE7RUFJTDtFQUZDO0lBQ0ksMEJBQUE7SUFDQSxVQUFBO0VBSUw7QUFDRjs7QUFEQTtFQUNJLGdDQUFBO0FBR0o7O0FBQUE7RUFDSTtJQUNFLGFBQUE7SUFDQSxZQUFBO0VBR0o7QUFDRjs7QUFEQTtFQUNJO0lBQ0UsYUFBQTtJQUNBLFlBQUE7SUFDQSx1QkFBQTtFQUdKO0FBQ0Y7O0FBREE7RUFDSTtJQUNFLGFBQUE7SUFDQSxZQUFBO0lBQ0EsdUJBQUE7RUFHSjtBQUNGOztBQURBO0VBQ0k7SUFDRSxhQUFBO0lBQ0EsWUFBQTtJQUNBLFNBQUE7RUFHSjtBQUNGIiwiZmlsZSI6ImhlYWRlci1pbGx1c3RyYXRpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJzdmcge1xuICAgIGJveC1zaGFkb3c6IDFweCAxcHggMTVweCAjYjliOWI5O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cbi8qIE51bWJlciBMaW5lcyAqL1xuI2xpbmUtMSB7XG4gICAgYW5pbWF0aW9uOlxuICAgICAgICBudW1iZXItY29sb3ItYW5pbWF0aW9uIDAuNXMgZWFzZSAwLjVzIGZvcndhcmRzLFxuICAgICAgICBudW1iZXItdXAgMC41cyBlYXNlIDAuNXMgZm9yd2FyZHM7XG4gICAgICAgIGZpbGw6ICM3Nzc7XG59XG4jbGluZS0yIHtcbiAgICBhbmltYXRpb246XG4gICAgICAgIG51bWJlci1jb2xvci1hbmltYXRpb24gMC41cyBlYXNlIDEuNXMgZm9yd2FyZHMsXG4gICAgICAgIG51bWJlci11cCAwLjVzIGVhc2UgMS41cyBmb3J3YXJkcztcbiAgICAgICAgZmlsbDogIzc3Nztcbn1cbiNsaW5lLTMge1xuICAgIGFuaW1hdGlvbjogbnVtYmVyLWNvbG9yLWFuaW1hdGlvbiAwLjVzIGVhc2UgMi41cyBmb3J3YXJkcywgbnVtYmVyLXVwIDAuNXMgZWFzZSAyLjVzIGZvcndhcmRzO1xuICAgIGZpbGw6ICM3Nzc7XG59XG4jbGluZS00IHtcbiAgICBhbmltYXRpb246IG51bWJlci1jb2xvci1hbmltYXRpb24gMC41cyBlYXNlIDMuNXMgZm9yd2FyZHMsIG51bWJlci11cCAwLjVzIGVhc2UgMy41cyBmb3J3YXJkcztcbiAgICBmaWxsOiAjNzc3O1xufVxuI2xpbmUtNSB7XG4gICAgYW5pbWF0aW9uOiBudW1iZXItY29sb3ItYW5pbWF0aW9uIDAuNXMgZWFzZSA0LjVzIGZvcndhcmRzLCBudW1iZXItdXAgMC41cyBlYXNlIDQuNXMgZm9yd2FyZHM7XG4gICAgZmlsbDogIzc3Nztcbn1cbiNsaW5lLTYge1xuICAgIGFuaW1hdGlvbjogbnVtYmVyLWNvbG9yLWFuaW1hdGlvbiAwLjVzIGVhc2UgNS41cyBmb3J3YXJkcywgbnVtYmVyLXVwIDAuNXMgZWFzZSA1LjVzIGZvcndhcmRzO1xuICAgIGZpbGw6ICM3Nzc7XG59XG4jbGluZS03IHtcbiAgICBhbmltYXRpb246IG51bWJlci1jb2xvci1hbmltYXRpb24gMC41cyBlYXNlIDYuNXMgZm9yd2FyZHMsIG51bWJlci11cCAwLjVzIGVhc2UgNi41cyBmb3J3YXJkcztcbiAgICBmaWxsOiAjNzc3O1xufVxuI2xpbmUtOCB7XG4gICAgYW5pbWF0aW9uOiBudW1iZXItY29sb3ItYW5pbWF0aW9uIDAuNXMgZWFzZSA3LjVzIGZvcndhcmRzLCBudW1iZXItdXAgMC41cyBlYXNlIDcuNXMgZm9yd2FyZHM7XG4gICAgZmlsbDogIzc3Nztcbn1cblxuI2xpbmUtMTAsICNsaW5lLTExLCAjbGluZS0xMiwgI2xpbmUtMTMsICNsaW5lLTE0LCAjbGluZS0xNSwgI2xpbmUtMTYsICNsaW5lLTE3LCAjbGluZS0xOCwgI2xpbmUtMTksICNsaW5lLTIwLCAjbGluZS0yMSB7XG4gICAgZmlsbDogIzc3Nztcbn1cblxuLy8gQnVnIE51bWJlcnNcbiNidWctbGluZS1zdGFydCB7XG4gICAgZmlsbDogIzc3NztcbiAgICBhbmltYXRpb246IG51bWJlci1jb2xvci1hbmltYXRpb24tYnVnIDlzIGVhc2UgZm9yd2FyZHM7XG59XG4jYnVnLWxpbmUtZW5kIHtcbiAgICBmaWxsOiAjNzc3O1xuICAgIGFuaW1hdGlvbjogbnVtYmVyLWNvbG9yLWFuaW1hdGlvbi1idWcgOXMgZWFzZSBmb3J3YXJkcztcbn1cbi8vICs1cHggb24geCBhbmQgeSB2YWx1ZXMgZnJvbSBzdmcgZG9jdW1lbnQgdG8gdHJhbnNmcm9tIG9yaWdpblxuI2J1Zy1yZWQtMSB7XG4gICAgZmlsbDogcmVkO1xuICAgIHRyYW5zZm9ybS1vcmlnaW46IDIzNS44cHggMjA2cHg7XG4gICAgYW5pbWF0aW9uOiBidWctcmVkLW51bWJlci1yb3RhdGUtYW5pbWF0aW9uIDNzIGN1YmljLWJlemllcigwLjE3NSwgMC44ODUsIDAuMzIsIDEuMjc1KSAwLjVzIGluZmluaXRlO1xufVxuI2J1Zy1yZWQtMiB7XG4gICAgZmlsbDogcmVkO1xuICAgIHRyYW5zZm9ybS1vcmlnaW46IDI1NS41cHggMjA2cHg7XG4gICAgYW5pbWF0aW9uOiBidWctcmVkLW51bWJlci1yb3RhdGUtYW5pbWF0aW9uIDNzIGN1YmljLWJlemllcigwLjE3NSwgMC44ODUsIDAuMzIsIDEuMjc1KSAxcyBpbmZpbml0ZTtcbn1cbiNidWctcmVkLTMge1xuICAgIGZpbGw6IHJlZDtcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiAyNzIuMnB4IDIwNnB4O1xuICAgIGFuaW1hdGlvbjogYnVnLXJlZC1udW1iZXItcm90YXRlLWFuaW1hdGlvbiAzcyBjdWJpYy1iZXppZXIoMC4xNzUsIDAuODg1LCAwLjMyLCAxLjI3NSkgMS41cyBpbmZpbml0ZTtcbn1cbiNidWctcmVkLTQge1xuICAgIGZpbGw6IHJlZDtcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiAyODguOXB4IDIwNnB4O1xuICAgIGFuaW1hdGlvbjogYnVnLXJlZC1udW1iZXItcm90YXRlLWFuaW1hdGlvbiAzcyBjdWJpYy1iZXppZXIoMC4xNzUsIDAuODg1LCAwLjMyLCAxLjI3NSkgMnMgaW5maW5pdGU7XG59XG5Aa2V5ZnJhbWVzIGJ1Zy1yZWQtbnVtYmVyLXJvdGF0ZS1hbmltYXRpb24ge1xuICAgMCUge1xuICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICAgfVxuXG4gICAxMDAlIHtcbiAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICAgfVxufVxuQGtleWZyYW1lcyBzaGlmdC1idWctbnVtYmVycy11cC1hbmltYXRpb24ge1xuICAgMCUge1xuICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICAgfVxuICAzMCUge1xuICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpO1xuICAgfVxuICAgMTAwJSB7XG4gICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0zMHB4KTtcbiAgIH1cbn1cblxuI2J1Zy1maXgtbWlkZGxlLTEge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgZmlsbDogIzNkZjYzZDtcbiAgICBhbmltYXRpb246IGJ1eC1maXgtdXAgMXMgZWFzZSAxMi41cyBmb3J3YXJkcztcbn1cbiNidWctZml4LW1pZGRsZS0yIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIGZpbGw6ICMzZGY2M2Q7XG4gICAgYW5pbWF0aW9uOiBidXgtZml4LXVwIDFzIGVhc2UgMTNzIGZvcndhcmRzO1xufVxuI2J1Zy1maXgtbWlkZGxlLTMge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgZmlsbDogIzNkZjYzZDtcbiAgICBhbmltYXRpb246IGJ1eC1maXgtdXAgMXMgZWFzZSAxMy41cyBmb3J3YXJkcztcbn1cbiNidWctZml4LW1pZGRsZS00IHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIGZpbGw6ICMzZGY2M2Q7XG4gICAgYW5pbWF0aW9uOiBidXgtZml4LXVwIDFzIGVhc2UgMTRzIGZvcndhcmRzO1xufVxuQGtleWZyYW1lcyBmYWxsaW5nLWxpbmUtcm90YXRlIHtcbiAgICAwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDBweCwgMHB4KSByb3RhdGUoMGRlZyk7XG4gICAgfVxuICAgIDUwJSB7XG4gICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IDIwMHB4IDUwMHB4O1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgyMDBweCwgMHB4KSByb3RhdGUoMjBkZWcpO1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMjIwcHgsIDIwMHB4KSByb3RhdGUoNTBkZWcpO1xuICAgIH1cbn1cbkBrZXlmcmFtZXMgZ2FtZS1vdmVyLXNsaWRlLXVwIHtcbiAgICAwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg0MHB4KTtcbiAgICB9XG5cbiAgICAxMDAlIHtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCk7XG4gICAgfVxufVxuI2hlYWRlci1uYW1lIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1zaXplOiAxLjdlbTtcbiAgICBtYXJnaW46IDFlbSBhdXRvO1xuICAgIHBhZGRpbmc6IDZweDtcbiAgICB0cmFuc2l0aW9uOiA1MDBtcztcbiAgICBib3JkZXItcmFkaXVzOiA3cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMC41ZW07XG4gICAgYm94LXNoYWRvdzogMXB4IDFweCAzcHggIzAwMDAwMDZlO1xuICB9XG5Aa2V5ZnJhbWVzIGhlYWRlci1iYWNrZ3JvdW5kLWJsdWUtcGlsbC1hbmltYXRpb24ge1xuICAgIDAlIHtcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAjZmZmZmZmZTUsICNmZmZmZmZlNSk7XG4gICAgfVxuXG4gICAgMTAwJSB7XG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsICNmZmZmZmZlNSA3MiUsICNmZmIzYjMpO1xuICAgIH1cbn1cbkBrZXlmcmFtZXMgaGVhZGVyLWJhY2tncm91bmQtcmVkLXBpbGwtYW5pbWF0aW9uIHtcbiAgICAwJSB7XG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgI2ZmZmZmZmU1LCAjZmZmZmZmZTUpO1xuICAgIH1cblxuICAgIDEwMCUge1xuICAgICAgICBiYWNrZ3JvdW5kOiAjMTUwMDE4N2E7XG4gICAgfVxufVxuQGtleWZyYW1lcyBzdmctd3JhcHBlci1mYWxsIHtcbiAgICAwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDBweCwgMHB4KSByb3RhdGUoMGRlZyk7XG4gICAgfVxuICAgIDIwJSB7XG4gICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IDIwcHggNTAwcHg7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDIwcHgsIDBweCkgcm90YXRlKDIwZGVnKTtcbiAgICB9XG4gICAgOTglIHtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMjVweCwgMTAwMHB4KSByb3RhdGUoNTBkZWcpO1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgICAgLy8gZGlzcGxheTogbm9uZTtcbiAgICB9XG59XG5Aa2V5ZnJhbWVzIG51bWJlci1jb2xvci1hbmltYXRpb24ge1xuICAgIDAlIHtcbiAgICAgICAgZmlsbDogd2hpdGU7XG4gICAgfVxuICAgIDIwJSB7XG4gICAgICAgIGZpbGw6ICNFOEI5MjM7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgICBmaWxsOiAjM2RmNjNkO1xuICAgIH1cbn1cbkBrZXlmcmFtZXMgbnVtYmVyLXVwIHtcbiAgICAgMCUge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KTtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICB9XG4gICAgNTAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDVweCk7XG4gICAgICAgIG9wYWNpdHk6IDAuODtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTBweCk7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgfVxufVxuQGtleWZyYW1lcyBidXgtZml4LXVwIHtcbiAgICAgMCUge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KTtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTBweCk7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgfVxufVxuQGtleWZyYW1lcyB0dXJuLXJlZHtcbiAgICAwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgICAgZmlsbDogcmVkO1xuICAgIH1cbiB9XG5cbi8vIE1lc3NhZ2VzXG4jY2hvaWNlLW1lc3NzYWdlIHtcbiAgb3BhY2l0eTogMDtcbiAgYW5pbWF0aW9uOiBidWctbWVzc2FnZS0xIDFzIGVhc2UgMTVzIGZvcndhcmRzO1xufVxuI3NlbGVjdC1waWxsLW1lc3NzYWdlIHtcbi8vIEFuaW1hdGlvbiBpcyBpbiBTVkcgRmlsbCBpbnNpZGUgZ3JvdXAuXG4vLyBDYW5ub3QgYW5pbWF0ZSA8Zz4gZWxlbWVudHNcbm9wYWNpdHk6IDA7XG50cmFuc2Zvcm06IHRyYW5zbGF0ZSgxOHB4LCA2MDBweCk7XG59XG5Aa2V5ZnJhbWVzIHNlbGVjdC1waWxsLW1lc3NzYWdlLWFuaW1hdGlvbiB7XG4gICAgMCUge1xuICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg1MDBweCk7XG4gICAgICAgb3BhY2l0eTogMDtcbiAgIH1cbiAgIDEwMCUge1xuICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpO1xuICAgICAgIG9wYWNpdHk6IDE7XG4gICB9XG59XG5cbiNibHVlLXBpbGwtbWVzc2FnZSwgI3JlZC1waWxsLW1lc3NhZ2Uge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDBweCwgNjAwcHgpO1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQwMHB4KSB7XG4gICAgc3ZnIHtcbiAgICAgIGhlaWdodDogMzAwcHg7XG4gICAgICB3aWR0aDogMzAwcHg7XG4gICAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA0MDBweCkge1xuICAgIHN2ZyB7XG4gICAgICBoZWlnaHQ6IDMzMHB4O1xuICAgICAgd2lkdGg6IDMzMHB4O1xuICAgICAgbWFyZ2luOiA1ZW0gYXV0byAwIGF1dG87XG4gICAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA1MDBweCkge1xuICAgIHN2ZyB7XG4gICAgICBoZWlnaHQ6IDQ1MHB4O1xuICAgICAgd2lkdGg6IDQ1MHB4O1xuICAgICAgbWFyZ2luOiA1ZW0gYXV0byAwIGF1dG87XG4gICAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDAwcHgpIHtcbiAgICBzdmcge1xuICAgICAgaGVpZ2h0OiA1MDBweDtcbiAgICAgIHdpZHRoOiA1MDBweDtcbiAgICAgIG1hcmdpbjogMDtcbiAgICB9XG59Il19 */";
      /***/
    },

    /***/
    45031:
    /*!***************************************************************************************!*\
      !*** ./src/app/components/home-illustration-two/home-illustration-two.component.scss ***!
      \***************************************************************************************/

    /***/
    function _(module) {
      "use strict";

      module.exports = "@media only screen and (max-width: 450px) {\n  svg {\n    height: 90%;\n    width: 90%;\n    margin: 0 auto;\n  }\n}\n@media only screen and (max-width: 850px) {\n  svg {\n    height: 70%;\n    width: 70%;\n    margin: 0 auto;\n  }\n}\n@media only screen and (min-width: 1050px) {\n  svg {\n    height: 40%;\n    width: 40%;\n    margin: 0 auto;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUtaWxsdXN0cmF0aW9uLXR3by5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFO0lBQ0UsV0FBQTtJQUNBLFVBQUE7SUFDQSxjQUFBO0VBQ0Y7QUFDRjtBQUNBO0VBQ0U7SUFDRSxXQUFBO0lBQ0EsVUFBQTtJQUNBLGNBQUE7RUFDRjtBQUNGO0FBQ0E7RUFDRTtJQUNFLFdBQUE7SUFDQSxVQUFBO0lBQ0EsY0FBQTtFQUNGO0FBQ0YiLCJmaWxlIjoiaG9tZS1pbGx1c3RyYXRpb24tdHdvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0NTBweCkge1xuICBzdmcge1xuICAgIGhlaWdodDogOTAlO1xuICAgIHdpZHRoOiA5MCU7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogODUwcHgpIHtcbiAgc3ZnIHtcbiAgICBoZWlnaHQ6IDcwJTtcbiAgICB3aWR0aDogNzAlO1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwNTBweCkge1xuICBzdmcge1xuICAgIGhlaWdodDogNDAlO1xuICAgIHdpZHRoOiA0MCU7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gIH1cbn0iXX0= */";
      /***/
    },

    /***/
    49185:
    /*!*****************************************************************************!*\
      !*** ./src/app/components/instructing-icon/instructing-icon.component.scss ***!
      \*****************************************************************************/

    /***/
    function _(module) {
      "use strict";

      module.exports = "svg {\n  margin: 3em auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluc3RydWN0aW5nLWljb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtBQUNGIiwiZmlsZSI6Imluc3RydWN0aW5nLWljb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJzdmcge1xuICBtYXJnaW46IDNlbSBhdXRvO1xufSJdfQ== */";
      /***/
    },

    /***/
    42138:
    /*!*********************************************************!*\
      !*** ./src/app/components/navbar/navbar.component.scss ***!
      \*********************************************************/

    /***/
    function _(module) {
      "use strict";

      module.exports = "#logo {\n  width: 45px;\n}\n\n#side-menu-button {\n  color: white;\n  padding: 0.3em;\n  height: 65px;\n  position: relative;\n  left: 24px;\n}\n\nion-toolbar ion-menu-button {\n  color: white;\n  font-size: 2em;\n}\n\n.navbar {\n  --background: linear-gradient(73.54497825384362deg, #000000, 8.871497304413253%,#1d071f);\n  box-shadow: 1px 1px 9px #000000e8;\n  padding: 0px 30px;\n}\n\n.navbar a {\n  font-weight: 900;\n  font-size: 0.8em;\n  color: white;\n  margin: 0px 10px;\n}\n\n.name {\n  margin-left: 10px;\n  font-family: Ayuthaya;\n  font-weight: 800;\n}\n\nion-buttons .active-link {\n  background: #847145;\n  background: linear-gradient(to bottom, #84714500 0%, #847145 100%);\n  background: -ms-linear-gradient(top, #847145 0%, #847145 100%);\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr=\"#847145\", endColorstr=\"#847145\", GradientType=0);\n  border: 2px solid #B69119;\n  box-shadow: inset 0 1px 0 #E3BE46;\n  box-shadow: 1px 1px 6px #33333387;\n  border-radius: 10px;\n  padding: 8px;\n  font-weight: 600;\n}\n\n@media only screen and (min-width: 1090px) {\n  .navbar {\n    padding: 0px 140px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdmJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7QUFDRjs7QUFDQTtFQUVFLFlBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtBQUNGOztBQUNBO0VBQ0UsWUFBQTtFQUNBLGNBQUE7QUFFRjs7QUFBQTtFQUNFLHdGQUFBO0VBQ0EsaUNBQUE7RUFDQSxpQkFBQTtBQUdGOztBQURJO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQUdOOztBQUNBO0VBQ0UsaUJBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0FBRUY7O0FBQ0U7RUFDRSxtQkFBQTtFQUNBLGtFQUFBO0VBS0EsOERBQUE7RUFDQSxrSEFBQTtFQUNBLHlCQUFBO0VBQ0EsaUNBQUE7RUFHQSxpQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FBRUo7O0FBQ0E7RUFDSTtJQUNFLGtCQUFBO0VBRUo7QUFDRiIsImZpbGUiOiJuYXZiYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjbG9nbyB7XG4gIHdpZHRoOiA0NXB4O1xufVxuI3NpZGUtbWVudS1idXR0b24ge1xuICAvLyAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMTdkZWcsICM4NDcxNDUsICNkOGNjYTgsICM4NDcxNDUpO1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDAuM2VtO1xuICBoZWlnaHQ6IDY1cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbGVmdDogMjRweDtcbn1cbmlvbi10b29sYmFyIGlvbi1tZW51LWJ1dHRvbiB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAyZW07XG59XG4ubmF2YmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNzMuNTQ0OTc4MjUzODQzNjJkZWcsICMwMDAwMDAsIDguODcxNDk3MzA0NDEzMjUzJSwjMWQwNzFmKTtcbiAgYm94LXNoYWRvdzogMXB4IDFweCA5cHggIzAwMDAwMGU4O1xuICBwYWRkaW5nOiAwcHggMzBweDtcblxuICAgIGEge1xuICAgICAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgICAgIGZvbnQtc2l6ZTogMC44ZW07XG4gICAgICBjb2xvcjogd2hpdGU7XG4gICAgICBtYXJnaW46IDBweCAxMHB4O1xuICAgIH1cbn1cblxuLm5hbWUge1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgZm9udC1mYW1pbHk6IEF5dXRoYXlhO1xuICBmb250LXdlaWdodDogODAwO1xufVxuaW9uLWJ1dHRvbnMge1xuICAuYWN0aXZlLWxpbmsge1xuICAgIGJhY2tncm91bmQ6ICM4NDcxNDU7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgIzg0NzE0NTAwIDAlLCAjODQ3MTQ1IDEwMCUpO1xuICAgIGJhY2tncm91bmQ6IC13ZWJraXQtZ3JhZGllbnQobGluZWFyLCBsZWZ0IHRvcCwgbGVmdCBib3R0b20sIGNvbG9yLXN0b3AoMCUsICM4NDcxNDUpLCBjb2xvci1zdG9wKDEwMCUsICM4NDcxNDUpKTtcbiAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0b3AsICM4NDcxNDUgMCUsICM4NDcxNDUgMTAwJSk7XG4gICAgYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQodG9wLCAjODQ3MTQ1IDAlLCAjODQ3MTQ1IDEwMCUpO1xuICAgIGJhY2tncm91bmQ6IC1vLWxpbmVhci1ncmFkaWVudCh0b3AsICM4NDcxNDUgMCUsICM4NDcxNDUgMTAwJSk7XG4gICAgYmFja2dyb3VuZDogLW1zLWxpbmVhci1ncmFkaWVudCh0b3AsICM4NDcxNDUgMCUsICM4NDcxNDUgMTAwJSk7XG4gICAgZmlsdGVyOiBwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuZ3JhZGllbnQoc3RhcnRDb2xvcnN0cj0nIzg0NzE0NScsIGVuZENvbG9yc3RyPScjODQ3MTQ1JywgR3JhZGllbnRUeXBlPTApO1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICNCNjkxMTk7XG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCAxcHggMCAjRTNCRTQ2O1xuICAgIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMCAxcHggMCAjRTNCRTQ2O1xuICAgIC1tb3otYm94LXNoYWRvdzogaW5zZXQgMCAxcHggMCAjRTNCRTQ2O1xuICAgIGJveC1zaGFkb3c6IDFweCAxcHggNnB4ICMzMzMzMzM4NztcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIHBhZGRpbmc6IDhweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwOTBweCkge1xuICAgIC5uYXZiYXIge1xuICAgICAgcGFkZGluZzogMHB4IDE0MHB4O1xuICAgIH1cbn0iXX0= */";
      /***/
    },

    /***/
    92242:
    /*!***************************************************************************************!*\
      !*** ./src/app/components/projects-illustration/projects-illustration.component.scss ***!
      \***************************************************************************************/

    /***/
    function _(module) {
      "use strict";

      module.exports = "@media only screen and (max-width: 400px) {\n  svg {\n    height: 200px;\n    width: 200px;\n  }\n}\n@media only screen and (min-width: 400px) {\n  svg {\n    height: 200px;\n    width: 200px;\n  }\n}\n@media only screen and (min-width: 500px) {\n  svg {\n    height: 200px;\n    width: 200px;\n    margin: 5em auto 0 auto;\n  }\n}\n@media only screen and (min-width: 1000px) {\n  svg {\n    height: 250px;\n    width: 250px;\n  }\n}\n#Main-Crane {\n  transform-origin: 263px, 46px;\n  -webkit-animation: rotateOnY 10s ease infinite;\n          animation: rotateOnY 10s ease infinite;\n}\n@-webkit-keyframes rotateOnY {\n  0% {\n    transform: translate(422px, 46px) rotateY(0turn);\n  }\n  10% {\n    transform: translate(422px, 46px) rotateY(0.5turn);\n  }\n  20% {\n    transform: translate(422px, 46px) rotateY(0.5turn);\n  }\n  30% {\n    transform: translate(422px, 46px) rotateY(0.5turn);\n  }\n  40% {\n    transform: translate(422px, 46px) rotateY(0.5turn);\n  }\n  50% {\n    transform: translate(422px, 46px) rotateY(0.5turn);\n  }\n  60% {\n    transform: translate(422px, 46px) rotateY(0);\n  }\n  70% {\n    transform: translate(422px, 46px) rotateY(0);\n  }\n  80% {\n    transform: translate(422px, 46px) rotateY(0);\n  }\n  90% {\n    transform: translate(422px, 46px) rotateY(0);\n  }\n  100% {\n    transform: translate(422px, 46px) rotateY(0);\n  }\n}\n@keyframes rotateOnY {\n  0% {\n    transform: translate(422px, 46px) rotateY(0turn);\n  }\n  10% {\n    transform: translate(422px, 46px) rotateY(0.5turn);\n  }\n  20% {\n    transform: translate(422px, 46px) rotateY(0.5turn);\n  }\n  30% {\n    transform: translate(422px, 46px) rotateY(0.5turn);\n  }\n  40% {\n    transform: translate(422px, 46px) rotateY(0.5turn);\n  }\n  50% {\n    transform: translate(422px, 46px) rotateY(0.5turn);\n  }\n  60% {\n    transform: translate(422px, 46px) rotateY(0);\n  }\n  70% {\n    transform: translate(422px, 46px) rotateY(0);\n  }\n  80% {\n    transform: translate(422px, 46px) rotateY(0);\n  }\n  90% {\n    transform: translate(422px, 46px) rotateY(0);\n  }\n  100% {\n    transform: translate(422px, 46px) rotateY(0);\n  }\n}\n#Crane-Grabber {\n  -webkit-animation: crane-grab 10s ease-in infinite;\n          animation: crane-grab 10s ease-in infinite;\n}\n@-webkit-keyframes crane-grab {\n  0% {\n    transform: translate(122px, 110px);\n  }\n  10% {\n    transform: translate(122px, 110px);\n  }\n  30% {\n    transform: translate(122px, 320px);\n  }\n  40% {\n    transform: translate(122px, 110px);\n  }\n  50% {\n    transform: translate(122px, 110px);\n  }\n  60% {\n    transform: translate(122px, 110px);\n  }\n  70% {\n    transform: translate(122px, 110px);\n  }\n  80% {\n    transform: translate(122px, 270px);\n  }\n  90% {\n    transform: translate(122px, 110px);\n  }\n  100% {\n    transform: translate(122px, 110px);\n  }\n}\n@keyframes crane-grab {\n  0% {\n    transform: translate(122px, 110px);\n  }\n  10% {\n    transform: translate(122px, 110px);\n  }\n  30% {\n    transform: translate(122px, 320px);\n  }\n  40% {\n    transform: translate(122px, 110px);\n  }\n  50% {\n    transform: translate(122px, 110px);\n  }\n  60% {\n    transform: translate(122px, 110px);\n  }\n  70% {\n    transform: translate(122px, 110px);\n  }\n  80% {\n    transform: translate(122px, 270px);\n  }\n  90% {\n    transform: translate(122px, 110px);\n  }\n  100% {\n    transform: translate(122px, 110px);\n  }\n}\n#Grab-Object-1 {\n  -webkit-animation: grab-object-1-up 10s ease-in infinite;\n          animation: grab-object-1-up 10s ease-in infinite;\n}\n@-webkit-keyframes grab-object-1-up {\n  0% {\n    opacity: 1;\n    transform: translate(0px, 0px);\n  }\n  10% {\n    opacity: 1;\n    transform: translate(0px, 0px);\n  }\n  20% {\n    opacity: 1;\n    transform: translate(0px, 0px);\n  }\n  30% {\n    opacity: 1;\n    transform: translate(0px, 0px);\n  }\n  40% {\n    opacity: 1;\n    transform: translate(0px, -206px);\n  }\n  50% {\n    opacity: 0;\n    transform: translate(0px, -206px);\n  }\n  60% {\n    opacity: 0;\n    transform: translate(0px, 0px);\n  }\n  70% {\n    opacity: 0;\n    transform: translate(0px, 0px);\n  }\n  80% {\n    opacity: 0;\n    transform: translate(0px, 50px);\n  }\n  90% {\n    opacity: 0;\n    transform: translate(0px, 50px);\n  }\n  100% {\n    opacity: 1;\n    transform: translate(0px, 0px);\n  }\n}\n@keyframes grab-object-1-up {\n  0% {\n    opacity: 1;\n    transform: translate(0px, 0px);\n  }\n  10% {\n    opacity: 1;\n    transform: translate(0px, 0px);\n  }\n  20% {\n    opacity: 1;\n    transform: translate(0px, 0px);\n  }\n  30% {\n    opacity: 1;\n    transform: translate(0px, 0px);\n  }\n  40% {\n    opacity: 1;\n    transform: translate(0px, -206px);\n  }\n  50% {\n    opacity: 0;\n    transform: translate(0px, -206px);\n  }\n  60% {\n    opacity: 0;\n    transform: translate(0px, 0px);\n  }\n  70% {\n    opacity: 0;\n    transform: translate(0px, 0px);\n  }\n  80% {\n    opacity: 0;\n    transform: translate(0px, 50px);\n  }\n  90% {\n    opacity: 0;\n    transform: translate(0px, 50px);\n  }\n  100% {\n    opacity: 1;\n    transform: translate(0px, 0px);\n  }\n}\n#Grab-Object-2 {\n  -webkit-animation: grab-object-2-up 10s ease-in infinite;\n          animation: grab-object-2-up 10s ease-in infinite;\n}\n@-webkit-keyframes grab-object-2-up {\n  0% {\n    opacity: 0;\n  }\n  10% {\n    opacity: 0;\n  }\n  20% {\n    opacity: 0;\n  }\n  30% {\n    opacity: 0;\n  }\n  40% {\n    opacity: 0;\n  }\n  50% {\n    opacity: 1;\n  }\n  60% {\n    opacity: 1;\n  }\n  70% {\n    opacity: 1;\n  }\n  80% {\n    opacity: 1;\n  }\n  81% {\n    opacity: 0;\n  }\n  90% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 0;\n  }\n}\n@keyframes grab-object-2-up {\n  0% {\n    opacity: 0;\n  }\n  10% {\n    opacity: 0;\n  }\n  20% {\n    opacity: 0;\n  }\n  30% {\n    opacity: 0;\n  }\n  40% {\n    opacity: 0;\n  }\n  50% {\n    opacity: 1;\n  }\n  60% {\n    opacity: 1;\n  }\n  70% {\n    opacity: 1;\n  }\n  80% {\n    opacity: 1;\n  }\n  81% {\n    opacity: 0;\n  }\n  90% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzLWlsbHVzdHJhdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFO0lBQ0UsYUFBQTtJQUNBLFlBQUE7RUFDRjtBQUNGO0FBQ0E7RUFDRTtJQUNFLGFBQUE7SUFDQSxZQUFBO0VBQ0Y7QUFDRjtBQUNBO0VBQ0U7SUFDRSxhQUFBO0lBQ0EsWUFBQTtJQUNBLHVCQUFBO0VBQ0Y7QUFDRjtBQUNBO0VBQ0U7SUFDRSxhQUFBO0lBQ0EsWUFBQTtFQUNGO0FBQ0Y7QUFFQTtFQUNFLDZCQUFBO0VBQ0EsOENBQUE7VUFBQSxzQ0FBQTtBQUFGO0FBRUU7RUFDQTtJQUNFLGdEQUFBO0VBQ0Y7RUFDQTtJQUNFLGtEQUFBO0VBQ0Y7RUFDQTtJQUNFLGtEQUFBO0VBQ0Y7RUFDQTtJQUNFLGtEQUFBO0VBQ0Y7RUFDQTtJQUNFLGtEQUFBO0VBQ0Y7RUFDQTtJQUNFLGtEQUFBO0VBQ0Y7RUFDQTtJQUNFLDRDQUFBO0VBQ0Y7RUFDQTtJQUNFLDRDQUFBO0VBQ0Y7RUFDQTtJQUNFLDRDQUFBO0VBQ0Y7RUFDQTtJQUNFLDRDQUFBO0VBQ0Y7RUFDQTtJQUNFLDRDQUFBO0VBQ0Y7QUFDRjtBQWxDRTtFQUNBO0lBQ0UsZ0RBQUE7RUFDRjtFQUNBO0lBQ0Usa0RBQUE7RUFDRjtFQUNBO0lBQ0Usa0RBQUE7RUFDRjtFQUNBO0lBQ0Usa0RBQUE7RUFDRjtFQUNBO0lBQ0Usa0RBQUE7RUFDRjtFQUNBO0lBQ0Usa0RBQUE7RUFDRjtFQUNBO0lBQ0UsNENBQUE7RUFDRjtFQUNBO0lBQ0UsNENBQUE7RUFDRjtFQUNBO0lBQ0UsNENBQUE7RUFDRjtFQUNBO0lBQ0UsNENBQUE7RUFDRjtFQUNBO0lBQ0UsNENBQUE7RUFDRjtBQUNGO0FBRUE7RUFDRSxrREFBQTtVQUFBLDBDQUFBO0FBQUY7QUFFQTtFQUNFO0lBQ0Usa0NBQUE7RUFDRjtFQUNBO0lBQ0Usa0NBQUE7RUFDRjtFQUNBO0lBQ0Usa0NBQUE7RUFDRjtFQUNBO0lBQ0Usa0NBQUE7RUFDRjtFQUNBO0lBQ0Usa0NBQUE7RUFDRjtFQUNBO0lBQ0Usa0NBQUE7RUFDRjtFQUNBO0lBQ0Usa0NBQUE7RUFDRjtFQUNBO0lBQ0Usa0NBQUE7RUFDRjtFQUNBO0lBQ0Usa0NBQUE7RUFDRjtFQUNBO0lBQ0Usa0NBQUE7RUFDRjtBQUNGO0FBL0JBO0VBQ0U7SUFDRSxrQ0FBQTtFQUNGO0VBQ0E7SUFDRSxrQ0FBQTtFQUNGO0VBQ0E7SUFDRSxrQ0FBQTtFQUNGO0VBQ0E7SUFDRSxrQ0FBQTtFQUNGO0VBQ0E7SUFDRSxrQ0FBQTtFQUNGO0VBQ0E7SUFDRSxrQ0FBQTtFQUNGO0VBQ0E7SUFDRSxrQ0FBQTtFQUNGO0VBQ0E7SUFDRSxrQ0FBQTtFQUNGO0VBQ0E7SUFDRSxrQ0FBQTtFQUNGO0VBQ0E7SUFDRSxrQ0FBQTtFQUNGO0FBQ0Y7QUFFQTtFQUNFLHdEQUFBO1VBQUEsZ0RBQUE7QUFBRjtBQUVBO0VBQ0U7SUFDRSxVQUFBO0lBQ0EsOEJBQUE7RUFDRjtFQUNBO0lBQ0UsVUFBQTtJQUNBLDhCQUFBO0VBQ0Y7RUFDQTtJQUNFLFVBQUE7SUFDQSw4QkFBQTtFQUNGO0VBQ0E7SUFDRSxVQUFBO0lBQ0EsOEJBQUE7RUFDRjtFQUNBO0lBQ0UsVUFBQTtJQUNBLGlDQUFBO0VBQ0Y7RUFDQTtJQUNFLFVBQUE7SUFDQSxpQ0FBQTtFQUNGO0VBQ0E7SUFDRSxVQUFBO0lBQ0EsOEJBQUE7RUFDRjtFQUNBO0lBQ0UsVUFBQTtJQUNBLDhCQUFBO0VBQ0Y7RUFDQTtJQUNFLFVBQUE7SUFDQSwrQkFBQTtFQUNGO0VBQ0E7SUFDRSxVQUFBO0lBQ0EsK0JBQUE7RUFDRjtFQUNBO0lBQ0UsVUFBQTtJQUNBLDhCQUFBO0VBQ0Y7QUFDRjtBQTdDQTtFQUNFO0lBQ0UsVUFBQTtJQUNBLDhCQUFBO0VBQ0Y7RUFDQTtJQUNFLFVBQUE7SUFDQSw4QkFBQTtFQUNGO0VBQ0E7SUFDRSxVQUFBO0lBQ0EsOEJBQUE7RUFDRjtFQUNBO0lBQ0UsVUFBQTtJQUNBLDhCQUFBO0VBQ0Y7RUFDQTtJQUNFLFVBQUE7SUFDQSxpQ0FBQTtFQUNGO0VBQ0E7SUFDRSxVQUFBO0lBQ0EsaUNBQUE7RUFDRjtFQUNBO0lBQ0UsVUFBQTtJQUNBLDhCQUFBO0VBQ0Y7RUFDQTtJQUNFLFVBQUE7SUFDQSw4QkFBQTtFQUNGO0VBQ0E7SUFDRSxVQUFBO0lBQ0EsK0JBQUE7RUFDRjtFQUNBO0lBQ0UsVUFBQTtJQUNBLCtCQUFBO0VBQ0Y7RUFDQTtJQUNFLFVBQUE7SUFDQSw4QkFBQTtFQUNGO0FBQ0Y7QUFFQTtFQUNFLHdEQUFBO1VBQUEsZ0RBQUE7QUFBRjtBQUVBO0VBQ0U7SUFDRSxVQUFBO0VBQ0Y7RUFDQTtJQUNFLFVBQUE7RUFDRjtFQUNBO0lBQ0UsVUFBQTtFQUNGO0VBQ0E7SUFDRSxVQUFBO0VBQ0Y7RUFDQTtJQUNFLFVBQUE7RUFDRjtFQUNBO0lBQ0UsVUFBQTtFQUNGO0VBQ0E7SUFDRSxVQUFBO0VBQ0Y7RUFDQTtJQUNFLFVBQUE7RUFDRjtFQUNBO0lBQ0UsVUFBQTtFQUNGO0VBQ0E7SUFDRSxVQUFBO0VBQ0Y7RUFDQTtJQUNFLFVBQUE7RUFDRjtFQUNBO0lBQ0UsVUFBQTtFQUNGO0FBQ0Y7QUFyQ0E7RUFDRTtJQUNFLFVBQUE7RUFDRjtFQUNBO0lBQ0UsVUFBQTtFQUNGO0VBQ0E7SUFDRSxVQUFBO0VBQ0Y7RUFDQTtJQUNFLFVBQUE7RUFDRjtFQUNBO0lBQ0UsVUFBQTtFQUNGO0VBQ0E7SUFDRSxVQUFBO0VBQ0Y7RUFDQTtJQUNFLFVBQUE7RUFDRjtFQUNBO0lBQ0UsVUFBQTtFQUNGO0VBQ0E7SUFDRSxVQUFBO0VBQ0Y7RUFDQTtJQUNFLFVBQUE7RUFDRjtFQUNBO0lBQ0UsVUFBQTtFQUNGO0VBQ0E7SUFDRSxVQUFBO0VBQ0Y7QUFDRiIsImZpbGUiOiJwcm9qZWN0cy1pbGx1c3RyYXRpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQwMHB4KSB7XG4gIHN2ZyB7XG4gICAgaGVpZ2h0OiAyMDBweDtcbiAgICB3aWR0aDogIDIwMHB4O1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDQwMHB4KSB7XG4gIHN2ZyB7XG4gICAgaGVpZ2h0OiAyMDBweDtcbiAgICB3aWR0aDogIDIwMHB4O1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDUwMHB4KSB7XG4gIHN2ZyB7XG4gICAgaGVpZ2h0OiAyMDBweDtcbiAgICB3aWR0aDogIDIwMHB4O1xuICAgIG1hcmdpbjogNWVtIGF1dG8gMCBhdXRvO1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMDBweCkge1xuICBzdmcge1xuICAgIGhlaWdodDogMjUwcHg7XG4gICAgd2lkdGg6ICAyNTBweDtcbiAgfVxufVxuXG4jTWFpbi1DcmFuZSB7XG4gIHRyYW5zZm9ybS1vcmlnaW46IDI2M3B4LCA0NnB4O1xuICBhbmltYXRpb246IHJvdGF0ZU9uWSAxMHMgZWFzZSBpbmZpbml0ZTtcbn1cbiAgQGtleWZyYW1lcyByb3RhdGVPblkge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoNDIycHgsIDQ2cHgpIHJvdGF0ZVkoMHR1cm4pO1xuICB9XG4gIDEwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoNDIycHgsIDQ2cHgpIHJvdGF0ZVkoMC41dHVybik7XG4gIH1cbiAgMjAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSg0MjJweCwgNDZweCkgcm90YXRlWSgwLjV0dXJuKTtcbiAgfVxuICAzMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDQyMnB4LCA0NnB4KSByb3RhdGVZKDAuNXR1cm4pO1xuICB9XG4gIDQwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoNDIycHgsIDQ2cHgpIHJvdGF0ZVkoMC41dHVybik7XG4gIH1cbiAgNTAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSg0MjJweCwgNDZweCkgcm90YXRlWSgwLjV0dXJuKTtcbiAgfVxuICA2MCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDQyMnB4LCA0NnB4KSByb3RhdGVZKDApO1xuICB9XG4gIDcwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoNDIycHgsIDQ2cHgpIHJvdGF0ZVkoMCk7XG4gIH1cbiAgODAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSg0MjJweCwgNDZweCkgcm90YXRlWSgwKTtcbiAgfVxuICA5MCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDQyMnB4LCA0NnB4KSByb3RhdGVZKDApO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDQyMnB4LCA0NnB4KSByb3RhdGVZKDApO1xuICB9XG59XG5cbiNDcmFuZS1HcmFiYmVye1xuICBhbmltYXRpb246IGNyYW5lLWdyYWIgMTBzIGVhc2UtaW4gaW5maW5pdGU7XG59XG5Aa2V5ZnJhbWVzIGNyYW5lLWdyYWIge1xuICAwJXtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxMjJweCwgMTEwcHgpO1xuICB9XG4gIDEwJXtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxMjJweCwgMTEwcHgpO1xuICB9XG4gIDMwJXtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxMjJweCwgMzIwcHgpO1xuICB9XG4gIDQwJXtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxMjJweCwgMTEwcHgpO1xuICB9XG4gIDUwJXtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxMjJweCwgMTEwcHgpO1xuICB9XG4gIDYwJXtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxMjJweCwgMTEwcHgpO1xuICB9XG4gIDcwJXtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxMjJweCwgMTEwcHgpO1xuICB9XG4gIDgwJXtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxMjJweCwgMjcwcHgpO1xuICB9XG4gIDkwJXtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxMjJweCwgMTEwcHgpO1xuICB9XG4gIDEwMCV7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTIycHgsIDExMHB4KTtcbiAgfVxufVxuXG4jR3JhYi1PYmplY3QtMXtcbiAgYW5pbWF0aW9uOiBncmFiLW9iamVjdC0xLXVwIDEwcyBlYXNlLWluIGluZmluaXRlO1xufVxuQGtleWZyYW1lcyBncmFiLW9iamVjdC0xLXVwIHtcbiAgMCV7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwcHgsIDBweCk7XG4gIH1cbiAgMTAle1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMHB4LCAwcHgpO1xuICB9XG4gIDIwJXtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDBweCwgMHB4KTtcbiAgfVxuICAzMCV7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwcHgsIDBweCk7XG4gIH1cbiAgNDAle1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMHB4LCAtMjA2cHgpO1xuICB9XG4gIDUwJXtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDBweCwgLTIwNnB4KTtcbiAgfVxuICA2MCV7XG4gICAgb3BhY2l0eTogMDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwcHgsIDBweCk7XG4gIH1cbiAgNzAle1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMHB4LCAwcHgpO1xuICB9XG4gIDgwJXtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDBweCwgNTBweCk7XG4gIH1cbiAgOTAle1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMHB4LCA1MHB4KTtcbiAgfVxuICAxMDAle1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMHB4LCAwcHgpO1xuICB9XG59XG5cbiNHcmFiLU9iamVjdC0ye1xuICBhbmltYXRpb246IGdyYWItb2JqZWN0LTItdXAgMTBzIGVhc2UtaW4gaW5maW5pdGU7XG59XG5Aa2V5ZnJhbWVzIGdyYWItb2JqZWN0LTItdXAge1xuICAwJXtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIDEwJXtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIDIwJXtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIDMwJXtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIDQwJXtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIDUwJXtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG4gIDYwJXtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG4gIDcwJXtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG4gIDgwJXtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG4gIDgxJXtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIDkwJXtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIDEwMCV7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxufVxuXG5cblxuXG4iXX0= */";
      /***/
    },

    /***/
    69442:
    /*!***********************************************************************!*\
      !*** ./src/app/components/success-modal/success-modal.component.scss ***!
      \***********************************************************************/

    /***/
    function _(module) {
      "use strict";

      module.exports = "#wrapper {\n  text-align: center;\n  margin-top: 15%;\n}\n\nion-button {\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n}\n\n@media only screen and (min-width: 700px) {\n  #wrapper {\n    padding: 2em;\n  }\n\n  ion-button {\n    margin: 0 auto;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN1Y2Nlc3MtbW9kYWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLGVBQUE7QUFDRjs7QUFDQTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7QUFFRjs7QUFBQTtFQUNFO0lBQ0UsWUFBQTtFQUdGOztFQURBO0lBQ0UsY0FBQTtFQUlGO0FBQ0YiLCJmaWxlIjoic3VjY2Vzcy1tb2RhbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiN3cmFwcGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAxNSU7XG59XG5pb24tYnV0dG9uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDA7XG4gIHdpZHRoOiAxMDAlO1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3MDBweCkge1xuICAjd3JhcHBlciB7XG4gICAgcGFkZGluZzogMmVtO1xuICB9XG4gIGlvbi1idXR0b24ge1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICB9XG59Il19 */";
      /***/
    }
  },
  /******/
  function (__webpack_require__) {
    // webpackRuntimeModules

    /******/
    var __webpack_exec__ = function __webpack_exec__(moduleId) {
      return __webpack_require__(__webpack_require__.s = moduleId);
    };
    /******/


    __webpack_require__.O(0, ["vendor"], function () {
      return __webpack_exec__(14431);
    });
    /******/


    var __webpack_exports__ = __webpack_require__.O();
    /******/

  }]);
})();
//# sourceMappingURL=main-es5.js.map