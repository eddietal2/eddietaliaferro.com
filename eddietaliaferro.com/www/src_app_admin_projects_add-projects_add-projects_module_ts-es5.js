(function () {
  "use strict";

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkeddietaliaferro_com"] = self["webpackChunkeddietaliaferro_com"] || []).push([["src_app_admin_projects_add-projects_add-projects_module_ts"], {
    /***/
    7996:
    /*!****************************************************************************!*\
      !*** ./src/app/admin/projects/add-projects/add-projects-routing.module.ts ***!
      \****************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AddProjectsPageRoutingModule": function AddProjectsPageRoutingModule() {
          return (
            /* binding */
            _AddProjectsPageRoutingModule
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


      var _add_projects_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./add-projects.page */
      36950);

      var routes = [{
        path: '',
        component: _add_projects_page__WEBPACK_IMPORTED_MODULE_0__.AddProjectsPage
      }];

      var _AddProjectsPageRoutingModule = function AddProjectsPageRoutingModule() {
        _classCallCheck(this, AddProjectsPageRoutingModule);
      };

      _AddProjectsPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _AddProjectsPageRoutingModule);
      /***/
    },

    /***/
    55437:
    /*!********************************************************************!*\
      !*** ./src/app/admin/projects/add-projects/add-projects.module.ts ***!
      \********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AddProjectsPageModule": function AddProjectsPageModule() {
          return (
            /* binding */
            _AddProjectsPageModule
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


      var _add_projects_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./add-projects-routing.module */
      7996);
      /* harmony import */


      var _add_projects_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./add-projects.page */
      36950);

      var _AddProjectsPageModule = function AddProjectsPageModule() {
        _classCallCheck(this, AddProjectsPageModule);
      };

      _AddProjectsPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _add_projects_routing_module__WEBPACK_IMPORTED_MODULE_0__.AddProjectsPageRoutingModule],
        declarations: [_add_projects_page__WEBPACK_IMPORTED_MODULE_1__.AddProjectsPage]
      })], _AddProjectsPageModule);
      /***/
    },

    /***/
    36950:
    /*!******************************************************************!*\
      !*** ./src/app/admin/projects/add-projects/add-projects.page.ts ***!
      \******************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AddProjectsPage": function AddProjectsPage() {
          return (
            /* binding */
            _AddProjectsPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! tslib */
      3786);
      /* harmony import */


      var _Users_ferro_Desktop_personal_website_eddietaliaferro_com_node_modules_ngtools_webpack_src_loaders_direct_resource_js_add_projects_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./add-projects.page.html */
      45966);
      /* harmony import */


      var _add_projects_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./add-projects.page.scss */
      4586);
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


      var src_app_services_project_project_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/project/project.service */
      64439);
      /* harmony import */


      var src_app_services_emitters_admin_project_emitter_admin_project_emitter_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/emitters/admin-project-emitter/admin-project-emitter.service */
      6862);
      /* harmony import */


      var src_app_services_pictures_pictures_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/pictures/pictures.service */
      1311);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! rxjs/operators */
      18293);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! rxjs */
      81134);

      var _AddProjectsPage = /*#__PURE__*/function () {
        function AddProjectsPage(router, formBuilder, toastController, projectService, adminProjectEmitterService, picturesService) {
          _classCallCheck(this, AddProjectsPage);

          this.router = router;
          this.formBuilder = formBuilder;
          this.toastController = toastController;
          this.projectService = projectService;
          this.adminProjectEmitterService = adminProjectEmitterService;
          this.picturesService = picturesService;
        }

        _createClass(AddProjectsPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.addProjectForm = this.formBuilder.group({
              title: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
              thumbnail: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
              url: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
              description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]
            });
          }
        }, {
          key: "back",
          value: function back() {
            this.router.navigateByUrl('/admin/projects');
          }
        }, {
          key: "getThumbnailFile",
          value: function getThumbnailFile(event) {
            var _this = this;

            var formElement = document.getElementById('thumbnail');
            var reader = new FileReader();

            if (formElement) {
              reader.readAsDataURL(event.target.files[0]);
            }

            reader.addEventListener('load', function () {
              // Convert image file ot base64 string
              _this.thumbnailDataURL = reader.result;
              console.log(_this.thumbnailDataURL);
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
          } // Toasts

        }, {
          key: "notTitleToast",
          value: function notTitleToast() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var toast;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.toastController.create({
                        message: 'There was no Title',
                        cssClass: 'danger-toast',
                        position: 'top',
                        duration: 2000
                      });

                    case 2:
                      toast = _context.sent;
                      toast.present();

                    case 4:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "notThumbnailToast",
          value: function notThumbnailToast() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var toast;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.toastController.create({
                        message: 'There was no Thumbnail',
                        cssClass: 'danger-toast',
                        position: 'top',
                        duration: 2000
                      });

                    case 2:
                      toast = _context2.sent;
                      toast.present();

                    case 4:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "errorToast",
          value: function errorToast() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var toast;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
                      return this.toastController.create({
                        message: 'There was an Error',
                        cssClass: 'danger-toast',
                        position: 'top',
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
        }, {
          key: "noProjectLinkToast",
          value: function noProjectLinkToast() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var toast;
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      _context4.next = 2;
                      return this.toastController.create({
                        message: 'There was no Blog Toast',
                        cssClass: 'danger-toast',
                        position: 'top',
                        duration: 2000
                      });

                    case 2:
                      toast = _context4.sent;
                      toast.present();

                    case 4:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
          }
        }, {
          key: "noProjectDescriptionToast",
          value: function noProjectDescriptionToast() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              var toast;
              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      _context5.next = 2;
                      return this.toastController.create({
                        message: 'There was no Blog Toast',
                        cssClass: 'danger-toast',
                        position: 'top',
                        duration: 2000
                      });

                    case 2:
                      toast = _context5.sent;
                      toast.present();

                    case 4:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this);
            }));
          }
        }, {
          key: "successfullProjectSubmit",
          value: function successfullProjectSubmit() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
              var toast;
              return regeneratorRuntime.wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      _context6.next = 2;
                      return this.toastController.create({
                        message: 'Successfully added Blog!',
                        cssClass: 'success-toast',
                        position: 'top',
                        duration: 2000
                      });

                    case 2:
                      toast = _context6.sent;
                      toast.present();

                    case 4:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee6, this);
            }));
          }
        }, {
          key: "submitProject",
          value: function submitProject() {
            var _this2 = this;

            console.log('Getting Thumbnail S3 URL');
            var formData = new FormData();
            var thumbnailFile = new File([this.dataURLtoBlob(this.thumbnailDataURL)], 'thumbnail.png');
            formData.append('project-thumbnail', thumbnailFile);
            this.picturesService.projectThumbnailUpload(formData).subscribe(function (pictureURL) {
              _this2.addProjectForm.value.thumbnail = pictureURL['objectUrl'];

              if (!_this2.addProjectForm.value.title) {
                console.log('There was no Title');
                return _this2.notTitleToast();
              }

              if (!_this2.addProjectForm.value.thumbnail) {
                console.log('There was no Thumbnail');
                return _this2.notThumbnailToast();
              }

              if (!_this2.addProjectForm.value.description) {
                console.log('There was no Project Description');
                return _this2.noProjectDescriptionToast();
              }

              if (!_this2.addProjectForm.value.url) {
                console.log('There was no Project Link');
                return _this2.noProjectLinkToast();
              }

              var newProject = {
                title: _this2.addProjectForm.value.title,
                thumbnail: _this2.addProjectForm.value.thumbnail,
                url: _this2.addProjectForm.value.url,
                visible: false,
                description: _this2.addProjectForm.value.description
              };
              console.log(newProject);

              _this2.projectService.submitProject(newProject).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.catchError)(function (error) {
                _this2.errorToast();

                (0, rxjs__WEBPACK_IMPORTED_MODULE_8__.of)("I caught: ".concat(error.error));
                throw Error(error);
              })).subscribe(function (data) {
                return (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(_this2, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
                  return regeneratorRuntime.wrap(function _callee7$(_context7) {
                    while (1) {
                      switch (_context7.prev = _context7.next) {
                        case 0:
                          console.log(data);
                          _context7.next = 3;
                          return this.adminProjectEmitterService.resetAdminProjects();

                        case 3:
                          _context7.next = 5;
                          return this.successfullProjectSubmit();

                        case 5:
                          _context7.next = 7;
                          return this.router.navigateByUrl('admin/projects');

                        case 7:
                          return _context7.abrupt("return");

                        case 8:
                        case "end":
                          return _context7.stop();
                      }
                    }
                  }, _callee7, this);
                }));
              });
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            console.log('Add Project Page destroyed');
          }
        }]);

        return AddProjectsPage;
      }();

      _AddProjectsPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.Router
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.ToastController
        }, {
          type: src_app_services_project_project_service__WEBPACK_IMPORTED_MODULE_2__.ProjectService
        }, {
          type: src_app_services_emitters_admin_project_emitter_admin_project_emitter_service__WEBPACK_IMPORTED_MODULE_3__.AdminProjectEmitterService
        }, {
          type: src_app_services_pictures_pictures_service__WEBPACK_IMPORTED_MODULE_4__.PicturesService
        }];
      };

      _AddProjectsPage.propDecorators = {
        ngOnDestroy: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.HostListener,
          args: ['unloaded']
        }]
      };
      _AddProjectsPage = (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
        selector: 'app-add-projects',
        template: _Users_ferro_Desktop_personal_website_eddietaliaferro_com_node_modules_ngtools_webpack_src_loaders_direct_resource_js_add_projects_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_add_projects_page_scss__WEBPACK_IMPORTED_MODULE_1__]
      })], _AddProjectsPage);
      /***/
    },

    /***/
    45966:
    /*!***********************************************************************************************************************************!*\
      !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/admin/projects/add-projects/add-projects.page.html ***!
      \***********************************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content>\n  <ion-grid>\n    <ion-row style=\"height: 50px;\"></ion-row>\n    <ion-row class=\"ion-justify-content-center\">\n      <ion-col id=\"header-button\" size-lg=\"8\">\n        <ion-toolbar>\n          <ion-title>Add Project</ion-title>\n          <ion-buttons slot=\"end\">\n            <ion-button style=\"--border-radius: 50px;\" class=\"purple-button\" (click)=\"back()\">\n              Back\n            </ion-button>\n          </ion-buttons>\n        </ion-toolbar>\n      </ion-col>\n      <ion-col size-lg=\"8\">\n        <form [formGroup]=\"addProjectForm\" (ngSubmit)=\"submitProject()\">\n\n          <!-- Title -->\n          <h4 style=\"margin-top: 0em;\">Title</h4>\n          <ion-input placeholder=\"Title\" formControlName=\"title\" type=\"text\"></ion-input>\n\n          <!-- Project Link -->\n          <h4>Link</h4>\n          <ion-input placeholder=\"Link URL\" formControlName=\"url\" type=\"text\"></ion-input>\n\n          <!-- Thumbnail -->\n          <h4>Thumbnail</h4>\n          <input id=\"thumbnail\" (change)=\"getThumbnailFile($event)\" placeholder=\"Thumbnail\" formControlName=\"thumbnail\" type=\"file\" />\n          <img height=\"200\" class=\"picture-preview\" *ngIf=\"this.thumbnailDataURL\" src=\"{{this.thumbnailDataURL}}\" alt=\"Project Thumbnail\">\n\n          <!-- Project Description -->\n          <h4>Description</h4>\n          <ion-textarea rows=\"10\" placeholder=\"Description of project\" formControlName=\"description\"></ion-textarea>\n\n          <ion-button style=\"margin: 5em auto 10em auto;\" class=\"green-button\" type=\"submit\" [disabled]=\"addProjectForm.invalid\">\n              Submit\n          </ion-button>\n        </form>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n";
      /***/
    },

    /***/
    4586:
    /*!********************************************************************!*\
      !*** ./src/app/admin/projects/add-projects/add-projects.page.scss ***!
      \********************************************************************/

    /***/
    function _(module) {
      module.exports = "ion-grid {\n  background-image: url('Matrix-Background.svg');\n  background-attachment: fixed;\n  background-size: cover;\n  --color: white;\n  height: auto;\n}\n\n@media only screen and (max-width: 600px) {\n  ion-grid {\n    background-image: url('Matrix-Background-Mobile.svg');\n    background-size: cover;\n    background-repeat: no-repeat;\n  }\n}\n\nform {\n  padding: 1em;\n}\n\nion-toolbar {\n  margin-bottom: 2.5em;\n  --background: none;\n  border-bottom: 1px solid #333;\n}\n\nion-toolbar ion-title {\n  position: relative;\n  left: -20px;\n}\n\n.purple-button {\n  width: 150px;\n  display: block;\n  margin: 30px 0;\n  --background: linear-gradient(360deg, #BC3790 -2%, #87005a, #BC3790);\n  --color: white;\n  --border-radius: 50px;\n  --box-shadow: none;\n}\n\nion-input, ion-textarea {\n  background: #fff;\n  --color: #333;\n  --placeholder-color: #333;\n  margin: 1em 0;\n  border-radius: 5px;\n  box-shadow: 1px 1px 10px #333;\n}\n\nion-input {\n  --padding-start: 0.5em;\n  height: 50px;\n}\n\nh4 {\n  margin-top: 3.5em;\n  color: #d8cca8;\n}\n\n.green-button {\n  margin-top: 3em;\n  margin-bottom: 10em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZC1wcm9qZWN0cy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSw4Q0FBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtBQUNGOztBQUNBO0VBQ0U7SUFDRSxxREFBQTtJQUNBLHNCQUFBO0lBQ0EsNEJBQUE7RUFFRjtBQUNGOztBQUFBO0VBQ0UsWUFBQTtBQUVGOztBQUNBO0VBQ0Usb0JBQUE7RUFDQSxrQkFBQTtFQUNBLDZCQUFBO0FBRUY7O0FBQUU7RUFDRSxrQkFBQTtFQUNBLFdBQUE7QUFFSjs7QUFDQTtFQUNFLFlBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtFQUNBLG9FQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7QUFFRjs7QUFBQTtFQUNFLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0VBRUEsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsNkJBQUE7QUFFRjs7QUFBQTtFQUNFLHNCQUFBO0VBQ0EsWUFBQTtBQUdGOztBQURBO0VBQ0UsaUJBQUE7RUFDQSxjQUFBO0FBSUY7O0FBRkE7RUFDRSxlQUFBO0VBQ0EsbUJBQUE7QUFLRiIsImZpbGUiOiJhZGQtcHJvamVjdHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWdyaWQge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uLy4uL2Fzc2V0cy9pbGx1c3RyYXRpb25zL01hdHJpeC1CYWNrZ3JvdW5kLnN2ZycpO1xuICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAtLWNvbG9yOiB3aGl0ZTtcbiAgaGVpZ2h0OiBhdXRvO1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICBpb24tZ3JpZCB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi8uLi9hc3NldHMvaWxsdXN0cmF0aW9ucy9NYXRyaXgtQmFja2dyb3VuZC1Nb2JpbGUuc3ZnJyk7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICB9XG59XG5mb3JtIHtcbiAgcGFkZGluZzogMWVtO1xufVxuXG5pb24tdG9vbGJhciB7XG4gIG1hcmdpbi1ib3R0b206IDIuNWVtO1xuICAtLWJhY2tncm91bmQ6IG5vbmU7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMzMzO1xuXG4gIGlvbi10aXRsZSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGxlZnQ6IC0yMHB4O1xuICB9XG59XG4ucHVycGxlLWJ1dHRvbiB7XG4gIHdpZHRoOiAxNTBweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogMzBweCAwO1xuICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgzNjBkZWcsICNCQzM3OTAgLTIlLCAjODcwMDVhLCAjQkMzNzkwKTtcbiAgLS1jb2xvcjogd2hpdGU7XG4gIC0tYm9yZGVyLXJhZGl1czogNTBweDtcbiAgLS1ib3gtc2hhZG93OiBub25lO1xufVxuaW9uLWlucHV0LCBpb24tdGV4dGFyZWEge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAtLWNvbG9yOiAjMzMzO1xuICAtLXBsYWNlaG9sZGVyLWNvbG9yOiAjMzMzO1xuICAvLyBwYWRkaW5nOiAwIDAgMCAwLjVlbTtcbiAgbWFyZ2luOiAxZW0gMDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBib3gtc2hhZG93OiAxcHggMXB4IDEwcHggIzMzMztcbn1cbmlvbi1pbnB1dCB7XG4gIC0tcGFkZGluZy1zdGFydDogMC41ZW07XG4gIGhlaWdodDogNTBweDtcbn1cbmg0IHtcbiAgbWFyZ2luLXRvcDogMy41ZW07XG4gIGNvbG9yOiAjZDhjY2E4O1xufVxuLmdyZWVuLWJ1dHRvbiB7XG4gIG1hcmdpbi10b3A6IDNlbTtcbiAgbWFyZ2luLWJvdHRvbTogMTBlbTtcbn0iXX0= */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_admin_projects_add-projects_add-projects_module_ts-es5.js.map