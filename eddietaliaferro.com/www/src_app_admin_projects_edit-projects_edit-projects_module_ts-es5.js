(function () {
  "use strict";

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkeddietaliaferro_com"] = self["webpackChunkeddietaliaferro_com"] || []).push([["src_app_admin_projects_edit-projects_edit-projects_module_ts"], {
    /***/
    95900:
    /*!******************************************************************************!*\
      !*** ./src/app/admin/projects/edit-projects/edit-projects-routing.module.ts ***!
      \******************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "EditProjectsPageRoutingModule": function EditProjectsPageRoutingModule() {
          return (
            /* binding */
            _EditProjectsPageRoutingModule
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


      var _edit_projects_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./edit-projects.page */
      91863);

      var routes = [{
        path: '',
        component: _edit_projects_page__WEBPACK_IMPORTED_MODULE_0__.EditProjectsPage
      }];

      var _EditProjectsPageRoutingModule = function EditProjectsPageRoutingModule() {
        _classCallCheck(this, EditProjectsPageRoutingModule);
      };

      _EditProjectsPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _EditProjectsPageRoutingModule);
      /***/
    },

    /***/
    44885:
    /*!**********************************************************************!*\
      !*** ./src/app/admin/projects/edit-projects/edit-projects.module.ts ***!
      \**********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "EditProjectsPageModule": function EditProjectsPageModule() {
          return (
            /* binding */
            _EditProjectsPageModule
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


      var _edit_projects_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./edit-projects-routing.module */
      95900);
      /* harmony import */


      var _edit_projects_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./edit-projects.page */
      91863);

      var _EditProjectsPageModule = function EditProjectsPageModule() {
        _classCallCheck(this, EditProjectsPageModule);
      };

      _EditProjectsPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _edit_projects_routing_module__WEBPACK_IMPORTED_MODULE_0__.EditProjectsPageRoutingModule],
        declarations: [_edit_projects_page__WEBPACK_IMPORTED_MODULE_1__.EditProjectsPage]
      })], _EditProjectsPageModule);
      /***/
    },

    /***/
    91863:
    /*!********************************************************************!*\
      !*** ./src/app/admin/projects/edit-projects/edit-projects.page.ts ***!
      \********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "EditProjectsPage": function EditProjectsPage() {
          return (
            /* binding */
            _EditProjectsPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! tslib */
      3786);
      /* harmony import */


      var _Users_ferro_Desktop_personal_website_eddietaliaferro_com_node_modules_ngtools_webpack_src_loaders_direct_resource_js_edit_projects_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./edit-projects.page.html */
      67483);
      /* harmony import */


      var _edit_projects_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./edit-projects.page.scss */
      14878);
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


      var src_app_services_emitters_admin_blog_emitter_admin_blog_emitter_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/emitters/admin-blog-emitter/admin-blog-emitter.service */
      97775);
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

      var _EditProjectsPage = /*#__PURE__*/function () {
        function EditProjectsPage(activatedRoute, router, formBuilder, toastController, projectService, adminBlogEmitterService, picturesService) {
          _classCallCheck(this, EditProjectsPage);

          this.activatedRoute = activatedRoute;
          this.router = router;
          this.formBuilder = formBuilder;
          this.toastController = toastController;
          this.projectService = projectService;
          this.adminBlogEmitterService = adminBlogEmitterService;
          this.picturesService = picturesService;
        }

        _createClass(EditProjectsPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            var id = this.activatedRoute.snapshot.paramMap.get('id');
            this.id = id;
            this.editProjectForm = this.formBuilder.group({
              title: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
              thumbnail: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
              url: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
              description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]
            });
            this.projectService.getProjectInfo(id).subscribe(function (projectInfo) {
              console.log(projectInfo);
              var xhr = new Promise(function (res, rej) {
                var request = new XMLHttpRequest();
                request.open('GET', projectInfo['thumbnail'], true);
                request.responseType = 'blob';

                request.onload = function () {
                  var reader = new FileReader();
                  console.log(typeof request.response);
                  reader.readAsDataURL(request.response);

                  reader.onload = function (e) {
                    var convertOctetStreamToPNGImage = e.target.result.toString().replace('data:application/octet-stream', 'data:image/png');
                    res(convertOctetStreamToPNGImage);
                    rej('Something bad happened');
                    return;
                  };

                  return;
                };

                request.send();
              });
              xhr.then(function (data) {
                _this.thumbnailDataURL = data;
              });

              _this.editProjectForm.patchValue({
                title: projectInfo['title'],
                description: projectInfo['description'],
                // thumbnail: projectInfo['thumbnail'],
                url: projectInfo['url']
              });
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
            var _this2 = this;

            this.editProjectForm.value.thumbnail = '';
            var formElement = document.getElementById('thumbnail');
            var reader = new FileReader();

            if (formElement) {
              reader.readAsDataURL(event.target.files[0]);
            }

            reader.addEventListener('load', function () {
              // Convert image file ot base64 string
              _this2.thumbnailDataURL = reader.result;
              console.log(_this2.thumbnailDataURL);
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
          key: "submitEdittedProject",
          value: function submitEdittedProject() {
            var _this3 = this;

            console.log('Getting Thumbnail S3 URL');
            var formData = new FormData();
            var thumbnailFile = new File([this.dataURLtoBlob(this.thumbnailDataURL)], 'thumbnail.png');
            formData.append('blog-thumbnail', thumbnailFile);
            this.picturesService.blogThumbnailUpload(formData).subscribe(function (pictureURL) {
              _this3.thumbnailDataURL = '';
              _this3.editProjectForm.value.thumbnail = pictureURL['objectUrl'];

              if (!_this3.editProjectForm.value.title) {
                console.log('There was no Title');
                return _this3.notTitleToast();
              }

              if (!_this3.editProjectForm.value.thumbnail) {
                console.log('There was no Thumbnail');
                return _this3.notThumbnailToast();
              }

              if (!_this3.editProjectForm.value.description) {
                console.log('There was no Blog Description');
                return _this3.noProjectDescriptionToast();
              }

              if (!_this3.editProjectForm.value.url) {
                console.log('There was no Project Link');
                return _this3.noProjectLinkToast();
              }

              var updatedProject = {
                id: _this3.id,
                title: _this3.editProjectForm.value.title,
                thumbnail: _this3.editProjectForm.value.thumbnail,
                url: _this3.editProjectForm.value.url,
                description: _this3.editProjectForm.value.description
              };
              console.log(updatedProject);

              _this3.projectService.editProject(updatedProject).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.catchError)(function (error) {
                _this3.errorToast();

                (0, rxjs__WEBPACK_IMPORTED_MODULE_8__.of)("I caught: ".concat(error.error));
                throw Error(error);
              })).subscribe(function (data) {
                return (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(_this3, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
                  return regeneratorRuntime.wrap(function _callee7$(_context7) {
                    while (1) {
                      switch (_context7.prev = _context7.next) {
                        case 0:
                          console.log(data);
                          _context7.next = 3;
                          return this.adminBlogEmitterService.resetAdminBlogs();

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
        }]);

        return EditProjectsPage;
      }();

      _EditProjectsPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.ActivatedRoute
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.Router
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.ToastController
        }, {
          type: src_app_services_project_project_service__WEBPACK_IMPORTED_MODULE_2__.ProjectService
        }, {
          type: src_app_services_emitters_admin_blog_emitter_admin_blog_emitter_service__WEBPACK_IMPORTED_MODULE_3__.AdminBlogEmitterService
        }, {
          type: src_app_services_pictures_pictures_service__WEBPACK_IMPORTED_MODULE_4__.PicturesService
        }];
      };

      _EditProjectsPage = (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
        selector: 'app-edit-projects',
        template: _Users_ferro_Desktop_personal_website_eddietaliaferro_com_node_modules_ngtools_webpack_src_loaders_direct_resource_js_edit_projects_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_edit_projects_page_scss__WEBPACK_IMPORTED_MODULE_1__]
      })], _EditProjectsPage);
      /***/
    },

    /***/
    67483:
    /*!*************************************************************************************************************************************!*\
      !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/admin/projects/edit-projects/edit-projects.page.html ***!
      \*************************************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content>\n  <ion-grid>\n    <ion-row style=\"height: 50px;\"></ion-row>\n    <ion-row class=\"ion-justify-content-center\">\n      <ion-col id=\"header-button\" size-lg=\"8\">\n        <ion-toolbar>\n          <ion-title>Edit Project</ion-title>\n          <ion-buttons slot=\"end\">\n            <ion-button style=\"--border-radius: 50px;\" class=\"purple-button\" (click)=\"back()\">\n              Back\n            </ion-button>\n          </ion-buttons>\n        </ion-toolbar>\n      </ion-col>\n      <ion-col size-lg=\"8\">\n        <form [formGroup]=\"editProjectForm\" (ngSubmit)=\"submitEdittedProject()\">\n\n          <!-- Title -->\n          <h4 style=\"margin-top: 0em;\">Title</h4>\n          <ion-input placeholder=\"Title\" formControlName=\"title\" type=\"text\"></ion-input>\n\n          <!-- Project Link -->\n          <h4>Link</h4>\n          <ion-input placeholder=\"Link URL\" formControlName=\"url\" type=\"text\"></ion-input>\n\n          <!-- Thumbnail -->\n          <h4>Thumbnail</h4>\n          <input id=\"thumbnail\" (change)=\"getThumbnailFile($event)\" placeholder=\"Thumbnail\" formControlName=\"thumbnail\" type=\"file\" />\n          <img height=\"200\" class=\"picture-preview\" *ngIf=\"this.thumbnailDataURL\" src=\"{{this.thumbnailDataURL}}\">\n          <img height=\"200\" class=\"picture-preview\" *ngIf=\"this.editProjectForm.value.thumbnail\" src=\"{{this.editProjectForm.value.thumbnail}}\">\n\n          <!-- Project Description -->\n          <h4>Description</h4>\n          <ion-textarea rows=\"10\" placeholder=\"Description of project\" formControlName=\"description\"></ion-textarea>\n\n          <ion-button style=\"margin: 5em auto 10em auto;\" class=\"green-button\" type=\"submit\">\n              Submit\n          </ion-button>\n        </form>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n";
      /***/
    },

    /***/
    14878:
    /*!**********************************************************************!*\
      !*** ./src/app/admin/projects/edit-projects/edit-projects.page.scss ***!
      \**********************************************************************/

    /***/
    function _(module) {
      module.exports = "ion-grid {\n  background-image: url('Matrix-Background.svg');\n  background-attachment: fixed;\n  background-size: cover;\n  --color: white;\n  height: auto;\n}\n\n@media only screen and (max-width: 600px) {\n  ion-grid {\n    background-image: url('Matrix-Background-Mobile.svg');\n    background-size: cover;\n    background-repeat: no-repeat;\n  }\n}\n\nform {\n  padding: 1em;\n}\n\nion-toolbar {\n  margin-bottom: 2.5em;\n  --background: none;\n  border-bottom: 1px solid #333;\n}\n\nion-toolbar ion-title {\n  position: relative;\n  left: -20px;\n}\n\n.purple-button {\n  width: 150px;\n  display: block;\n  margin: 30px 0;\n  --background: linear-gradient(360deg, #BC3790 -2%, #87005a, #BC3790);\n  --color: white;\n  --border-radius: 50px;\n  --box-shadow: none;\n}\n\nion-input, ion-textarea {\n  background: #fff;\n  --color: #333;\n  --placeholder-color: #333;\n  margin: 1em 0;\n  border-radius: 5px;\n  box-shadow: 1px 1px 10px #333;\n}\n\nion-input {\n  --padding-start: 0.5em;\n  height: 50px;\n}\n\nh4 {\n  margin-top: 3.5em;\n  color: #d8cca8;\n}\n\n.green-button {\n  margin-top: 3em;\n  margin-bottom: 10em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVkaXQtcHJvamVjdHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsOENBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7QUFDRjs7QUFDQTtFQUNFO0lBQ0UscURBQUE7SUFDQSxzQkFBQTtJQUNBLDRCQUFBO0VBRUY7QUFDRjs7QUFBQTtFQUNFLFlBQUE7QUFFRjs7QUFDQTtFQUNFLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSw2QkFBQTtBQUVGOztBQUFFO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0FBRUo7O0FBQ0E7RUFDRSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7RUFDQSxvRUFBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0FBRUY7O0FBQUE7RUFDRSxnQkFBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtFQUVBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLDZCQUFBO0FBRUY7O0FBQUE7RUFDRSxzQkFBQTtFQUNBLFlBQUE7QUFHRjs7QUFEQTtFQUNFLGlCQUFBO0VBQ0EsY0FBQTtBQUlGOztBQUZBO0VBQ0UsZUFBQTtFQUNBLG1CQUFBO0FBS0YiLCJmaWxlIjoiZWRpdC1wcm9qZWN0cy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tZ3JpZCB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vLi4vYXNzZXRzL2lsbHVzdHJhdGlvbnMvTWF0cml4LUJhY2tncm91bmQuc3ZnJyk7XG4gIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIC0tY29sb3I6IHdoaXRlO1xuICBoZWlnaHQ6IGF1dG87XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIGlvbi1ncmlkIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uLy4uL2Fzc2V0cy9pbGx1c3RyYXRpb25zL01hdHJpeC1CYWNrZ3JvdW5kLU1vYmlsZS5zdmcnKTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIH1cbn1cbmZvcm0ge1xuICBwYWRkaW5nOiAxZW07XG59XG5cbmlvbi10b29sYmFyIHtcbiAgbWFyZ2luLWJvdHRvbTogMi41ZW07XG4gIC0tYmFja2dyb3VuZDogbm9uZTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMzMzM7XG5cbiAgaW9uLXRpdGxlIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbGVmdDogLTIwcHg7XG4gIH1cbn1cbi5wdXJwbGUtYnV0dG9uIHtcbiAgd2lkdGg6IDE1MHB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiAzMHB4IDA7XG4gIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDM2MGRlZywgI0JDMzc5MCAtMiUsICM4NzAwNWEsICNCQzM3OTApO1xuICAtLWNvbG9yOiB3aGl0ZTtcbiAgLS1ib3JkZXItcmFkaXVzOiA1MHB4O1xuICAtLWJveC1zaGFkb3c6IG5vbmU7XG59XG5pb24taW5wdXQsIGlvbi10ZXh0YXJlYSB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIC0tY29sb3I6ICMzMzM7XG4gIC0tcGxhY2Vob2xkZXItY29sb3I6ICMzMzM7XG4gIC8vIHBhZGRpbmc6IDAgMCAwIDAuNWVtO1xuICBtYXJnaW46IDFlbSAwO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJveC1zaGFkb3c6IDFweCAxcHggMTBweCAjMzMzO1xufVxuaW9uLWlucHV0IHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwLjVlbTtcbiAgaGVpZ2h0OiA1MHB4O1xufVxuaDQge1xuICBtYXJnaW4tdG9wOiAzLjVlbTtcbiAgY29sb3I6ICNkOGNjYTg7XG59XG4uZ3JlZW4tYnV0dG9uIHtcbiAgbWFyZ2luLXRvcDogM2VtO1xuICBtYXJnaW4tYm90dG9tOiAxMGVtO1xufSJdfQ== */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_admin_projects_edit-projects_edit-projects_module_ts-es5.js.map