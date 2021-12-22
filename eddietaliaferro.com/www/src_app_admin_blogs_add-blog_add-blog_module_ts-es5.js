(function () {
  "use strict";

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkeddietaliaferro_com"] = self["webpackChunkeddietaliaferro_com"] || []).push([["src_app_admin_blogs_add-blog_add-blog_module_ts"], {
    /***/
    80066:
    /*!*****************************************************************!*\
      !*** ./src/app/admin/blogs/add-blog/add-blog-routing.module.ts ***!
      \*****************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AddBlogPageRoutingModule": function AddBlogPageRoutingModule() {
          return (
            /* binding */
            _AddBlogPageRoutingModule
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


      var _add_blog_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./add-blog.page */
      59122);

      var routes = [{
        path: '',
        component: _add_blog_page__WEBPACK_IMPORTED_MODULE_0__.AddBlogPage
      }];

      var _AddBlogPageRoutingModule = function AddBlogPageRoutingModule() {
        _classCallCheck(this, AddBlogPageRoutingModule);
      };

      _AddBlogPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _AddBlogPageRoutingModule);
      /***/
    },

    /***/
    57288:
    /*!*********************************************************!*\
      !*** ./src/app/admin/blogs/add-blog/add-blog.module.ts ***!
      \*********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AddBlogPageModule": function AddBlogPageModule() {
          return (
            /* binding */
            _AddBlogPageModule
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


      var _add_blog_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./add-blog-routing.module */
      80066);
      /* harmony import */


      var _add_blog_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./add-blog.page */
      59122);

      var _AddBlogPageModule = function AddBlogPageModule() {
        _classCallCheck(this, AddBlogPageModule);
      };

      _AddBlogPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _add_blog_routing_module__WEBPACK_IMPORTED_MODULE_0__.AddBlogPageRoutingModule],
        declarations: [_add_blog_page__WEBPACK_IMPORTED_MODULE_1__.AddBlogPage]
      })], _AddBlogPageModule);
      /***/
    },

    /***/
    59122:
    /*!*******************************************************!*\
      !*** ./src/app/admin/blogs/add-blog/add-blog.page.ts ***!
      \*******************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AddBlogPage": function AddBlogPage() {
          return (
            /* binding */
            _AddBlogPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! tslib */
      3786);
      /* harmony import */


      var _Users_ferro_Desktop_personal_website_eddietaliaferro_com_node_modules_ngtools_webpack_src_loaders_direct_resource_js_add_blog_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./add-blog.page.html */
      88060);
      /* harmony import */


      var _add_blog_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./add-blog.page.scss */
      25071);
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


      var src_app_services_blog_blog_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/blog/blog.service */
      22036);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! rxjs/operators */
      18293);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! rxjs */
      81134);
      /* harmony import */


      var src_app_services_pictures_pictures_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/pictures/pictures.service */
      1311);
      /* harmony import */


      var src_app_services_emitters_admin_blog_emitter_admin_blog_emitter_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/emitters/admin-blog-emitter/admin-blog-emitter.service */
      97775);

      var _AddBlogPage = /*#__PURE__*/function () {
        function AddBlogPage(router, formBuilder, toastController, blogService, adminBlogEmitterService, picturesService) {
          _classCallCheck(this, AddBlogPage);

          this.router = router;
          this.formBuilder = formBuilder;
          this.toastController = toastController;
          this.blogService = blogService;
          this.adminBlogEmitterService = adminBlogEmitterService;
          this.picturesService = picturesService;
          this.picturesSection = false;
          this.codeSection = false;
          this.pictureOneTag = '<< picture-1 >>';
          this.pictureTwoTag = '<< picture-2 >>';
          this.pictureThreeTag = '<< picture-3 >>';
          this.pictureFourTag = '<< picture-4 >>';
          this.pictureFiveTag = '<< picture-5 >>';
        }

        _createClass(AddBlogPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.addBlogForm = this.formBuilder.group({
              title: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
              thumbnail: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
              hashtag_1: [''],
              hashtag_2: [''],
              hashtag_3: [''],
              hashtag_4: [''],
              hashtag_5: [''],
              code_1: [''],
              code_2: [''],
              code_3: [''],
              code_4: [''],
              code_5: [''],
              picture_1: [''],
              picture_2: [''],
              picture_3: [''],
              picture_4: [''],
              picture_5: [''],
              post: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]]
            }); // this.addBlogForm.valueChanges.subscribe(
            //   data => {
            //     console.log(data);
            //   });
          }
        }, {
          key: "back",
          value: function back() {
            this.router.navigateByUrl('/admin/blogs');
          }
        }, {
          key: "picturesSectionChange",
          value: function picturesSectionChange(e) {
            console.log(e.detail);

            if (e.detail.checked) {
              this.picturesSection = true;
            } else {
              this.picturesSection = false;
            }
          }
        }, {
          key: "codeSectionChange",
          value: function codeSectionChange(e) {
            console.log(e.detail);

            if (e.detail.checked) {
              this.codeSection = true;
            } else {
              this.codeSection = false;
            }
          } // Pictures
          // For each picture, get the DataURL of the file FIRST
          // When the blog is ready to be submitted, add them to S3 bucket
          // and get their links before adding the blog to the database

        }, {
          key: "getPictureOneFile",
          value: function getPictureOneFile(event) {
            var _this = this;

            var pictureOne = document.getElementById('picture-1');
            var reader = new FileReader();

            if (pictureOne) {
              reader.readAsDataURL(event.target.files[0]);
            }

            reader.addEventListener('load', function () {
              // Convert image file ot base64 string
              _this.pictureOneDataURL = reader.result;
              console.log(_this.pictureOneDataURL);
            }, false);
          }
        }, {
          key: "getPictureOneS3URL",
          value: function getPictureOneS3URL() {
            var _this2 = this;

            console.clear();
            console.log('Converting picture 1 to s3 link');
            var formData = new FormData();
            var pictureOneFile = new File([this.dataURLtoBlob(this.pictureOneDataURL)], 'picture-1.png');
            formData.append('blog-picture', pictureOneFile);
            this.picturesService.blogPictureUpload(formData).subscribe(function (pictureURL) {
              console.log(pictureURL);
              return _this2.addBlogForm.value.picture_1 = pictureURL['objectUrl'];
            });
          }
        }, {
          key: "getPictureTwoFile",
          value: function getPictureTwoFile(event) {
            var _this3 = this;

            var pictureTwo = document.getElementById('picture-2');
            var reader = new FileReader();

            if (pictureTwo) {
              reader.readAsDataURL(event.target.files[0]);
            }

            reader.addEventListener('load', function () {
              // Convert image file ot base64 string
              _this3.pictureTwoDataURL = reader.result;
              console.log(_this3.pictureTwoDataURL);
            }, false);
          }
        }, {
          key: "getPictureTwoS3URL",
          value: function getPictureTwoS3URL() {
            var _this4 = this;

            var formData = new FormData();
            var pictureTwoFile = new File([this.dataURLtoBlob(this.pictureTwoDataURL)], 'picture-2.png');
            formData.append('blog-picture', pictureTwoFile);
            this.picturesService.blogPictureUpload(formData).subscribe(function (pictureURL) {
              return _this4.addBlogForm.value.picture_2 = pictureURL['objectUrl'];
            });
          }
        }, {
          key: "getPictureThreeFile",
          value: function getPictureThreeFile(event) {
            var _this5 = this;

            var pictureThree = document.getElementById('picture-3');
            var reader = new FileReader();

            if (pictureThree) {
              reader.readAsDataURL(event.target.files[0]);
            }

            reader.addEventListener('load', function () {
              // Convert image file ot base64 string
              _this5.pictureThreeDataURL = reader.result;
              console.log(_this5.pictureThreeDataURL);
            }, false);
          }
        }, {
          key: "getPictureThreeS3URL",
          value: function getPictureThreeS3URL() {
            var _this6 = this;

            var formData = new FormData();
            var pictureThreeFile = new File([this.dataURLtoBlob(this.pictureThreeDataURL)], 'picture-3.png');
            formData.append('blog-picture', pictureThreeFile);
            this.picturesService.blogPictureUpload(formData).subscribe(function (pictureURL) {
              return _this6.addBlogForm.value.picture_3 = pictureURL['objectUrl'];
            });
          }
        }, {
          key: "getPictureFourFile",
          value: function getPictureFourFile(event) {
            var _this7 = this;

            var pictureFour = document.getElementById('picture-4');
            var reader = new FileReader();

            if (pictureFour) {
              reader.readAsDataURL(event.target.files[0]);
            }

            reader.addEventListener('load', function () {
              // Convert image file ot base64 string
              _this7.pictureFourDataURL = reader.result;
              console.log(_this7.pictureFourDataURL);
            }, false);
          }
        }, {
          key: "getPictureFourS3URL",
          value: function getPictureFourS3URL() {
            var _this8 = this;

            var formData = new FormData();
            var pictureFourFile = new File([this.dataURLtoBlob(this.pictureFourDataURL)], 'picture-4.png');
            formData.append('blog-picture', pictureFourFile);
            this.picturesService.blogPictureUpload(formData).subscribe(function (pictureURL) {
              return _this8.addBlogForm.value.picture_4 = pictureURL['objectUrl'];
            });
          }
        }, {
          key: "getPictureFiveFile",
          value: function getPictureFiveFile(event) {
            var _this9 = this;

            var pictureFive = document.getElementById('picture-5');
            var reader = new FileReader();

            if (pictureFive) {
              reader.readAsDataURL(event.target.files[0]);
            }

            reader.addEventListener('load', function () {
              // Convert image file ot base64 string
              _this9.pictureFiveDataURL = reader.result;
              console.log(_this9.pictureFiveDataURL);
            }, false);
          }
        }, {
          key: "getPictureFiveS3URL",
          value: function getPictureFiveS3URL() {
            var _this10 = this;

            var formData = new FormData();
            var pictureFiveFile = new File([this.dataURLtoBlob(this.pictureFiveDataURL)], 'picture-5.png');
            formData.append('blog-picture', pictureFiveFile);
            this.picturesService.blogPictureUpload(formData).subscribe(function (pictureURL) {
              return _this10.addBlogForm.value.picture_5 = pictureURL['objectUrl'];
            });
          }
        }, {
          key: "getThumbnailFile",
          value: function getThumbnailFile(event) {
            var _this11 = this;

            var formElement = document.getElementById('thumbnail');
            var reader = new FileReader();

            if (formElement) {
              reader.readAsDataURL(event.target.files[0]);
            }

            reader.addEventListener('load', function () {
              // Convert image file ot base64 string
              _this11.thumbnailDataURL = reader.result;
              console.log(_this11.thumbnailDataURL);
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
          } // Code Conversion
          // Toasts

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
          key: "notBlogContentToast",
          value: function notBlogContentToast() {
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
          key: "successfulBlogSubmit",
          value: function successfulBlogSubmit() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              var toast;
              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      _context5.next = 2;
                      return this.toastController.create({
                        message: 'Successfully added Blog!',
                        cssClass: 'success-toast',
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
          key: "submitBlogPost",
          value: function submitBlogPost() {
            var _this12 = this;

            // For each picture that is added, get a link for that photo
            if (this.pictureOneDataURL) {
              this.getPictureOneS3URL();
            }

            if (this.pictureTwoDataURL) {
              this.getPictureTwoS3URL();
            }

            if (this.pictureThreeDataURL) {
              this.getPictureThreeS3URL();
            }

            if (this.pictureFourDataURL) {
              this.getPictureFourS3URL();
            }

            if (this.pictureFiveDataURL) {
              this.getPictureFiveS3URL();
            }

            console.log('Getting Thumbnail S3 URL');
            var formData = new FormData();
            var thumbnailFile = new File([this.dataURLtoBlob(this.thumbnailDataURL)], 'thumbnail.png');
            formData.append('blog-thumbnail', thumbnailFile);
            this.picturesService.blogThumbnailUpload(formData).subscribe(function (pictureURL) {
              _this12.addBlogForm.value.thumbnail = pictureURL['objectUrl'];

              if (!_this12.addBlogForm.value.title) {
                console.log('There was no Title');
                return _this12.notTitleToast();
              }

              if (!_this12.addBlogForm.value.thumbnail) {
                console.log('There was no Thumbnail');
                return _this12.notThumbnailToast();
              }

              if (!_this12.addBlogForm.value.post) {
                console.log('There was no Blog Content');
                return _this12.notBlogContentToast();
              }

              var formattedHashtags = [_this12.addBlogForm.value.hashtag_1, _this12.addBlogForm.value.hashtag_2, _this12.addBlogForm.value.hashtag_3, _this12.addBlogForm.value.hashtag_4, _this12.addBlogForm.value.hashtag_5];
              var newBlog = {
                title: _this12.addBlogForm.value.title,
                thumbnail: _this12.addBlogForm.value.thumbnail,
                visible: false,
                hashtags: formattedHashtags.filter(function (item) {
                  return item;
                }),
                post: _this12.addBlogForm.value.post,
                code_1: _this12.addBlogForm.value.code_1,
                code_2: _this12.addBlogForm.value.code_2,
                code_3: _this12.addBlogForm.value.code_3,
                code_4: _this12.addBlogForm.value.code_4,
                code_5: _this12.addBlogForm.value.code_5,
                picture_1: _this12.addBlogForm.value.picture_1,
                picture_2: _this12.addBlogForm.value.picture_2,
                picture_3: _this12.addBlogForm.value.picture_3,
                picture_4: _this12.addBlogForm.value.picture_4,
                picture_5: _this12.addBlogForm.value.picture_5
              };
              console.log(newBlog);

              _this12.blogService.submitBlog(newBlog).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.catchError)(function (error) {
                _this12.errorToast();

                (0, rxjs__WEBPACK_IMPORTED_MODULE_8__.of)("I caught: ".concat(error.error));
                throw Error(error);
              })).subscribe(function (data) {
                return (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(_this12, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
                  return regeneratorRuntime.wrap(function _callee6$(_context6) {
                    while (1) {
                      switch (_context6.prev = _context6.next) {
                        case 0:
                          console.log(data);
                          _context6.next = 3;
                          return this.adminBlogEmitterService.resetAdminBlogs();

                        case 3:
                          _context6.next = 5;
                          return this.successfulBlogSubmit();

                        case 5:
                          _context6.next = 7;
                          return this.router.navigateByUrl('admin/blogs');

                        case 7:
                          return _context6.abrupt("return");

                        case 8:
                        case "end":
                          return _context6.stop();
                      }
                    }
                  }, _callee6, this);
                }));
              });
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            console.log('Add Blog Page destroyed');
          }
        }]);

        return AddBlogPage;
      }();

      _AddBlogPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.Router
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.ToastController
        }, {
          type: src_app_services_blog_blog_service__WEBPACK_IMPORTED_MODULE_2__.BlogService
        }, {
          type: src_app_services_emitters_admin_blog_emitter_admin_blog_emitter_service__WEBPACK_IMPORTED_MODULE_4__.AdminBlogEmitterService
        }, {
          type: src_app_services_pictures_pictures_service__WEBPACK_IMPORTED_MODULE_3__.PicturesService
        }];
      };

      _AddBlogPage.propDecorators = {
        ngOnDestroy: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.HostListener,
          args: ['unloaded']
        }]
      };
      _AddBlogPage = (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
        selector: 'app-add-blog',
        template: _Users_ferro_Desktop_personal_website_eddietaliaferro_com_node_modules_ngtools_webpack_src_loaders_direct_resource_js_add_blog_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_add_blog_page_scss__WEBPACK_IMPORTED_MODULE_1__]
      })], _AddBlogPage);
      /***/
    },

    /***/
    88060:
    /*!************************************************************************************************************************!*\
      !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/admin/blogs/add-blog/add-blog.page.html ***!
      \************************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content>\n  <ion-grid>\n    <ion-row style=\"height: 50px;\"></ion-row>\n    <ion-row class=\"ion-justify-content-center\">\n      <ion-col id=\"header-button\" size-lg=\"8\">\n        <ion-toolbar>\n          <ion-title>Add Blog</ion-title>\n          <ion-buttons slot=\"end\">\n            <ion-button id=\"back-button\" style=\"--border-radius: 50px;\" class=\"purple-button\" (click)=\"back()\">\n              Back\n            </ion-button>\n          </ion-buttons>\n        </ion-toolbar>\n      </ion-col>\n      <ion-col size-lg=\"8\">\n        <form [formGroup]=\"addBlogForm\" (ngSubmit)=\"submitBlogPost()\">\n          <!-- Title -->\n          <h4 style=\"margin-top: 0em;\">Title</h4>\n          <ion-input placeholder=\"Title\" required formControlName=\"title\" type=\"text\"></ion-input>\n\n          <!-- Thumbnail -->\n          <h4>Thumbnail</h4>\n          <input *ngIf=\"!this.thumbnailDataURL\" id=\"thumbnail\" (change)=\"getThumbnailFile($event)\" name=\"blog-thumbnail\" placeholder=\"Title\"  type=\"file\"/><br>\n          <img height=\"200\" class=\"picture-preview\" *ngIf=\"this.thumbnailDataURL\" src=\"{{this.thumbnailDataURL}}\">\n\n\n          <!-- Hashtags -->\n          <h4>Hashtags</h4>\n          <ion-input style=\"width: 250px;\"  placeholder=\"Hashtag 1\" formControlName=\"hashtag_1\" type=\"text\"></ion-input>\n          <ion-input style=\"width: 250px;\"  placeholder=\"Hashtag 2\" formControlName=\"hashtag_2\" type=\"text\"></ion-input>\n          <ion-input style=\"width: 250px;\"  placeholder=\"Hashtag 3\" formControlName=\"hashtag_3\" type=\"text\"></ion-input>\n          <ion-input style=\"width: 250px;\"  placeholder=\"Hashtag 4\" formControlName=\"hashtag_4\" type=\"text\"></ion-input>\n          <ion-input style=\"width: 250px;\"  placeholder=\"Hashtag 5\" formControlName=\"hashtag_5\" type=\"text\"></ion-input>\n\n          <!-- Pictures -->\n          <h2 id=\"pictures-checkbox\">\n            Pictures\n            <ion-checkbox style=\"float: right; position: relative; top: 6px;\" (ionChange)=\"picturesSectionChange($event)\"></ion-checkbox>\n          </h2>\n          <div *ngIf=\"this.picturesSection\" id=\"pictures-section\">\n            <h4 style=\"margin-top: 1em;\">Picture 1</h4>\n            <input id=\"picture-1\" (change)=\"getPictureOneFile($event)\" name=\"blog-picture\" type=\"file\" placeholder=\"Picture-1\" />\n            <img class=\"picture-preview\" *ngIf=\"this.pictureOneDataURL\" src=\"{{this.pictureOneDataURL}}\">\n\n            <h4>Picture 2</h4>\n            <input id=\"picture-2\" (change)=\"getPictureTwoFile($event)\" name=\"blog-picture\" type=\"file\" placeholder=\"Picture-2\" />\n            <img class=\"picture-preview\" *ngIf=\"this.pictureTwoDataURL\" src=\"{{this.pictureTwoDataURL}}\">\n\n            <h4>Picture 3</h4>\n            <input id=\"picture-3\" (change)=\"getPictureThreeFile($event)\" name=\"blog-picture\" type=\"file\" placeholder=\"Picture-3\" />\n            <img class=\"picture-preview\" *ngIf=\"this.pictureThreeDataURL\" src=\"{{this.pictureThreeDataURL}}\">\n\n            <h4>Picture 4</h4>\n            <input id=\"picture-4\" (change)=\"getPictureFourFile($event)\" name=\"blog-picture\" type=\"file\" placeholder=\"Picture-4\" />\n            <img class=\"picture-preview\" *ngIf=\"this.pictureFourDataURL\" src=\"{{this.pictureFourDataURL}}\">\n\n            <h4>Picture 5</h4>\n            <input id=\"picture-5\" (change)=\"getPictureFiveFile($event)\" name=\"blog-picture\"  type=\"file\" placeholder=\"Picture-5\" />\n            <img class=\"picture-preview\" *ngIf=\"this.pictureFiveDataURL\" src=\"{{this.pictureFiveDataURL}}\">\n\n          </div>\n\n          <!-- Code Snippets -->\n          <h2 id=\"code-checkbox\">\n            Code\n            <ion-checkbox style=\"float: right; position: relative; top: 6px;\"  (ionChange)=\"codeSectionChange($event)\"></ion-checkbox>\n          </h2>\n          <div *ngIf=\"this.codeSection\" id=\"code-section\">\n            <h4 style=\"margin-top: 1em;\">Code Snippet 1</h4>\n            <ion-textarea rows=\"10\" autoGrow=\"true\" formControlName=\"code_1\" placeholder=\"Put code here:\"></ion-textarea>\n\n            <h4>Code Snippet 2</h4>\n            <ion-textarea rows=\"10\" autoGrow=\"true\" formControlName=\"code_2\" placeholder=\"Put code here:\"></ion-textarea>\n\n            <h4>Code Snippet 3</h4>\n            <ion-textarea rows=\"10\" autoGrow=\"true\" formControlName=\"code_3\" placeholder=\"Put code here:\"></ion-textarea>\n\n            <h4>Code Snippet 4</h4>\n            <ion-textarea rows=\"10\" autoGrow=\"true\" formControlName=\"code_4\" placeholder=\"Put code here:\"></ion-textarea>\n\n            <h4>Code Snippet 5</h4>\n            <ion-textarea rows=\"10\" autoGrow=\"true\" formControlName=\"code_5\" placeholder=\"Put code here:\"></ion-textarea>\n          </div>\n\n          <!-- Blog Post -->\n          <div style=\"margin-top: 5em;\"></div>\n          <h4>Post Content</h4>\n          <div class=\"alert\">\n            <p>Add up to 5 pictures with the &lt;&lt;picture-n &gt;&gt; tag </p>\n          </div>\n          <div class=\"alert\">\n            <p>Add up to 5 code snippets with the &lt;&lt;code-n &gt;&gt; tag </p>\n          </div>\n          <div style=\"margin-top: 2em;\"></div>\n\n          <ion-textarea rows=\"30\" autoGrow=\"true\" placeholder=\"Post\" required formControlName=\"post\"></ion-textarea>\n\n          <ion-button style=\"margin: 5em auto 10em auto;\" class=\"green-button\" id=\"submit-blog-button\" type=\"submit\">\n            Submit\n          </ion-button>\n        </form>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n";
      /***/
    },

    /***/
    25071:
    /*!*********************************************************!*\
      !*** ./src/app/admin/blogs/add-blog/add-blog.page.scss ***!
      \*********************************************************/

    /***/
    function _(module) {
      module.exports = "ion-grid {\n  background-image: url('Matrix-Background.svg');\n  background-attachment: fixed;\n  background-size: cover;\n  --color: white;\n  height: auto;\n}\n\n@media only screen and (max-width: 600px) {\n  ion-grid {\n    background-image: url('Matrix-Background-Mobile.svg');\n    background-size: cover;\n    background-repeat: no-repeat;\n  }\n}\n\nform {\n  padding: 1em;\n}\n\n.alert {\n  background-color: #333;\n  border: solid 2px #3cf63c;\n  border-radius: 5px;\n  margin: 1em auto;\n  padding: 0.5em;\n}\n\n.picture-preview {\n  display: block;\n  height: 200px;\n  margin-top: 3em;\n  -webkit-animation: preview-slide-in 0.5s ease-in forwards;\n          animation: preview-slide-in 0.5s ease-in forwards;\n}\n\n@-webkit-keyframes preview-slide-in {\n  0% {\n    opacity: 0;\n    transform: translateX(-20px);\n  }\n  100% {\n    opacity: 1;\n    transform: translateX(0px);\n  }\n}\n\n@keyframes preview-slide-in {\n  0% {\n    opacity: 0;\n    transform: translateX(-20px);\n  }\n  100% {\n    opacity: 1;\n    transform: translateX(0px);\n  }\n}\n\nion-toolbar {\n  margin: 2.5em 0;\n  --background: #1805199e;\n  border-radius: 5px;\n  padding: 0em 1em;\n}\n\nion-toolbar ion-title {\n  position: relative;\n  left: -20px;\n}\n\n#pictures-checkbox, #code-checkbox {\n  border: 2px solid #3cf63c;\n  width: 180px;\n  padding: 0.5em;\n  margin: 2em 0em;\n  border-radius: 5px;\n}\n\n#pictures-section, #code-section {\n  background: rgba(224, 224, 224, 0.692);\n  padding: 1em;\n  border-radius: 5px;\n}\n\n.purple-button {\n  width: 150px;\n  display: block;\n  margin: 30px 0;\n  --background: linear-gradient(360deg, #777777 -2%, #333, #777777);\n  --color: white;\n  --border-radius: 50px;\n  --box-shadow: none;\n}\n\nion-input, ion-textarea {\n  background: #fff;\n  --color: #333;\n  --placeholder-color: #333;\n  margin: 1em 0;\n  border-radius: 5px;\n  box-shadow: 1px 1px 10px #333;\n}\n\nion-input {\n  --padding-start: 0.5em;\n  height: 50px;\n}\n\nh4 {\n  color: #1d071f;\n  background: #d8cca8;\n  width: 200px;\n  padding: 0.6em;\n  border-radius: 5px;\n  margin: 4em 0 2em 0;\n}\n\n.green-button {\n  margin-top: 3em;\n  margin-bottom: 10em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZC1ibG9nLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDhDQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0FBQ0Y7O0FBQ0E7RUFDRTtJQUNFLHFEQUFBO0lBQ0Esc0JBQUE7SUFDQSw0QkFBQTtFQUVGO0FBQ0Y7O0FBQUE7RUFDRSxZQUFBO0FBRUY7O0FBQUE7RUFDRSxzQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFHRjs7QUFEQTtFQUNFLGNBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLHlEQUFBO1VBQUEsaURBQUE7QUFJRjs7QUFEQTtFQUNFO0lBQ0UsVUFBQTtJQUNBLDRCQUFBO0VBSUY7RUFGQTtJQUNFLFVBQUE7SUFDQSwwQkFBQTtFQUlGO0FBQ0Y7O0FBWkE7RUFDRTtJQUNFLFVBQUE7SUFDQSw0QkFBQTtFQUlGO0VBRkE7SUFDRSxVQUFBO0lBQ0EsMEJBQUE7RUFJRjtBQUNGOztBQUZBO0VBQ0UsZUFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQUlGOztBQURFO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0FBR0o7O0FBQUE7RUFDRSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FBR0Y7O0FBREE7RUFDRSxzQ0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQUlGOztBQUZBO0VBQ0UsWUFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0VBQ0EsaUVBQUE7RUFDQSxjQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtBQUtGOztBQUhBO0VBQ0UsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7RUFFQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSw2QkFBQTtBQUtGOztBQUhBO0VBQ0Usc0JBQUE7RUFDQSxZQUFBO0FBTUY7O0FBSkE7RUFDRSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUFPRjs7QUFMQTtFQUNFLGVBQUE7RUFDQSxtQkFBQTtBQVFGIiwiZmlsZSI6ImFkZC1ibG9nLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1ncmlkIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi8uLi9hc3NldHMvaWxsdXN0cmF0aW9ucy9NYXRyaXgtQmFja2dyb3VuZC5zdmcnKTtcbiAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgLS1jb2xvcjogd2hpdGU7XG4gIGhlaWdodDogYXV0bztcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgaW9uLWdyaWQge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vLi4vYXNzZXRzL2lsbHVzdHJhdGlvbnMvTWF0cml4LUJhY2tncm91bmQtTW9iaWxlLnN2ZycpO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgfVxufVxuZm9ybSB7XG4gIHBhZGRpbmc6IDFlbTtcbn1cbi5hbGVydCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XG4gIGJvcmRlcjogc29saWQgMnB4ICMzY2Y2M2M7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgbWFyZ2luOiAxZW0gYXV0bztcbiAgcGFkZGluZzogMC41ZW07XG59XG4ucGljdHVyZS1wcmV2aWV3IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGhlaWdodDogMjAwcHg7XG4gIG1hcmdpbi10b3A6IDNlbTtcbiAgYW5pbWF0aW9uOiBwcmV2aWV3LXNsaWRlLWluIDAuNXMgZWFzZS1pbiBmb3J3YXJkcztcbn1cblxuQGtleWZyYW1lcyBwcmV2aWV3LXNsaWRlLWluIHtcbiAgMCUge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0yMHB4KTtcbiAgfVxuICAxMDAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwcHgpO1xuICB9XG59XG5pb24tdG9vbGJhciB7XG4gIG1hcmdpbjogMi41ZW0gMDtcbiAgLS1iYWNrZ3JvdW5kOiAjMTgwNTE5OWU7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgcGFkZGluZzogMGVtIDFlbTtcblxuXG4gIGlvbi10aXRsZSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGxlZnQ6IC0yMHB4O1xuICB9XG59XG4jcGljdHVyZXMtY2hlY2tib3gsICAjY29kZS1jaGVja2JveHtcbiAgYm9yZGVyOiAycHggc29saWQgIzNjZjYzYztcbiAgd2lkdGg6IDE4MHB4O1xuICBwYWRkaW5nOiAwLjVlbTtcbiAgbWFyZ2luOiAyZW0gMGVtO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG4jcGljdHVyZXMtc2VjdGlvbiwgI2NvZGUtc2VjdGlvbiB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjI0LCAyMjQsIDIyNCwgMC42OTIpO1xuICBwYWRkaW5nOiAxZW07XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cbi5wdXJwbGUtYnV0dG9uIHtcbiAgd2lkdGg6IDE1MHB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiAzMHB4IDA7XG4gIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDM2MGRlZywgIzc3Nzc3NyAtMiUsICMzMzMsICM3Nzc3NzcpO1xuICAtLWNvbG9yOiB3aGl0ZTtcbiAgLS1ib3JkZXItcmFkaXVzOiA1MHB4O1xuICAtLWJveC1zaGFkb3c6IG5vbmU7XG59XG5pb24taW5wdXQsIGlvbi10ZXh0YXJlYSB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIC0tY29sb3I6ICMzMzM7XG4gIC0tcGxhY2Vob2xkZXItY29sb3I6ICMzMzM7XG4gIC8vIHBhZGRpbmc6IDAgMCAwIDAuNWVtO1xuICBtYXJnaW46IDFlbSAwO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJveC1zaGFkb3c6IDFweCAxcHggMTBweCAjMzMzO1xufVxuaW9uLWlucHV0IHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwLjVlbTtcbiAgaGVpZ2h0OiA1MHB4O1xufVxuaDQge1xuICBjb2xvcjogIzFkMDcxZjtcbiAgYmFja2dyb3VuZDogI2Q4Y2NhODtcbiAgd2lkdGg6IDIwMHB4O1xuICBwYWRkaW5nOiAwLjZlbTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBtYXJnaW46IDRlbSAwIDJlbSAwO1xufVxuLmdyZWVuLWJ1dHRvbiB7XG4gIG1hcmdpbi10b3A6IDNlbTtcbiAgbWFyZ2luLWJvdHRvbTogMTBlbTtcbn0iXX0= */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_admin_blogs_add-blog_add-blog_module_ts-es5.js.map