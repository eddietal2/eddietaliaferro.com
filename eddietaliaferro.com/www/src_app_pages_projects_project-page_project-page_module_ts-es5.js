(function () {
  "use strict";

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkeddietaliaferro_com"] = self["webpackChunkeddietaliaferro_com"] || []).push([["src_app_pages_projects_project-page_project-page_module_ts"], {
    /***/
    79472:
    /*!****************************************************************************!*\
      !*** ./src/app/pages/projects/project-page/project-page-routing.module.ts ***!
      \****************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ProjectPagePageRoutingModule": function ProjectPagePageRoutingModule() {
          return (
            /* binding */
            _ProjectPagePageRoutingModule
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


      var _project_page_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./project-page.page */
      65722);

      var routes = [{
        path: '',
        component: _project_page_page__WEBPACK_IMPORTED_MODULE_0__.ProjectPagePage
      }];

      var _ProjectPagePageRoutingModule = function ProjectPagePageRoutingModule() {
        _classCallCheck(this, ProjectPagePageRoutingModule);
      };

      _ProjectPagePageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _ProjectPagePageRoutingModule);
      /***/
    },

    /***/
    79695:
    /*!********************************************************************!*\
      !*** ./src/app/pages/projects/project-page/project-page.module.ts ***!
      \********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ProjectPagePageModule": function ProjectPagePageModule() {
          return (
            /* binding */
            _ProjectPagePageModule
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


      var _project_page_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./project-page-routing.module */
      79472);
      /* harmony import */


      var _project_page_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./project-page.page */
      65722);

      var _ProjectPagePageModule = function ProjectPagePageModule() {
        _classCallCheck(this, ProjectPagePageModule);
      };

      _ProjectPagePageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _project_page_routing_module__WEBPACK_IMPORTED_MODULE_0__.ProjectPagePageRoutingModule],
        declarations: [_project_page_page__WEBPACK_IMPORTED_MODULE_1__.ProjectPagePage]
      })], _ProjectPagePageModule);
      /***/
    },

    /***/
    65722:
    /*!******************************************************************!*\
      !*** ./src/app/pages/projects/project-page/project-page.page.ts ***!
      \******************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ProjectPagePage": function ProjectPagePage() {
          return (
            /* binding */
            _ProjectPagePage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! tslib */
      3786);
      /* harmony import */


      var _Users_ferro_Desktop_personal_website_eddietaliaferro_com_node_modules_ngtools_webpack_src_loaders_direct_resource_js_project_page_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./project-page.page.html */
      55713);
      /* harmony import */


      var _project_page_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./project-page.page.scss */
      61361);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var src_app_services_project_project_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/project/project.service */
      64439);

      var _ProjectPagePage = /*#__PURE__*/function () {
        function ProjectPagePage(router, activatedRoute, projects) {
          _classCallCheck(this, ProjectPagePage);

          this.router = router;
          this.activatedRoute = activatedRoute;
          this.projects = projects;
          this.skeletonData = true;
        }

        _createClass(ProjectPagePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var id = this.activatedRoute.snapshot.paramMap.get('id');
            this.id = id;
            this.getProject();
          }
        }, {
          key: "getProject",
          value: function getProject() {
            var _this = this;

            this.projects.getProjectInfo(this.id).subscribe(function (project) {
              console.clear();
              console.log(project);
              _this.title = project['title'];
              _this.thumbnail = project['thumbnail'];
              _this.url = project['url'];
              _this.description = project['description'];
            });
          }
        }, {
          key: "projectUrl",
          value: function projectUrl(url) {
            window.open(url, '_blank').focus();
          }
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            var _this2 = this;

            setTimeout(function () {
              _this2.skeletonData = false;
            }, 1800);
          }
        }, {
          key: "back",
          value: function back() {
            this.router.navigateByUrl('projects');
          }
        }]);

        return ProjectPagePage;
      }();

      _ProjectPagePage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute
        }, {
          type: src_app_services_project_project_service__WEBPACK_IMPORTED_MODULE_2__.ProjectService
        }];
      };

      _ProjectPagePage = (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-project-page',
        template: _Users_ferro_Desktop_personal_website_eddietaliaferro_com_node_modules_ngtools_webpack_src_loaders_direct_resource_js_project_page_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_project_page_page_scss__WEBPACK_IMPORTED_MODULE_1__]
      })], _ProjectPagePage);
      /***/
    },

    /***/
    55713:
    /*!***********************************************************************************************************************************!*\
      !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/projects/project-page/project-page.page.html ***!
      \***********************************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content>\n  <ion-grid>\n    <!-- <ion-row *ngIf=\"!skeletonData\" class=\"ion-justify-content-center\">\n      \n    </ion-row> -->\n    <ion-row class=\"ion-justify-content-center\">\n      <ion-col class=\"ion-hide-lg-up\" size-xs=\"12\" size-sm=\"10\" size-md=\"8\" size-lg=\"6\" size-xl=\"5\">\n        <!-- Mobile Toolbar -->\n        <ion-toolbar id=\"mobile-toolbar\">\n          <ion-title>Project</ion-title>\n          <ion-buttons slot=\"end\">\n            <ion-button class=\"grey-button\" (click)=\"back()\">\n              Back\n            </ion-button>\n          </ion-buttons>\n        </ion-toolbar>\n      </ion-col>\n      <ion-col class=\"project-wrapper\" size-xs=\"12\" size-sm=\"10\" size-md=\"8\" size-lg=\"6\" size-xl=\"7\">\n        <img id=\"project-thumbnail\" src=\"{{this.thumbnail}}\" alt=\"Project Thumbnail\">\n        <!-- Desktop Toolbar -->\n        <ion-toolbar style=\"margin-top: 3em;\" class=\"ion-hide-lg-down\">\n          <ion-title>{{this.title}}</ion-title>\n          <ion-buttons slot=\"end\">\n            <ion-button class=\"grey-button\" (click)=\"back()\">\n              Back\n            </ion-button>\n            <ion-button class=\"green-button\" (click)=\"projectUrl(this.url)\">\n              Link\n            </ion-button>\n          </ion-buttons>\n        </ion-toolbar>\n        <h1 class=\"ion-hide-lg-up\">{{this.title}}</h1>\n        <p id=\"description\">{{this.description}}</p>\n      </ion-col>\n    </ion-row>\n    <ion-footer class=\"ion-hide-lg-up\" (click)=\"projectUrl(this.url)\">\n      <p>Link</p>\n    </ion-footer>\n  \n    <!-- Skeleton -->\n    <!-- <div *ngIf=\"skeletonData\">\n      <div style=\"margin-top: 7em;\" class=\"ion-padding custom-skeleton\">\n        <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\n        <ion-skeleton-text animated></ion-skeleton-text>\n        <ion-skeleton-text animated style=\"width: 88%\"></ion-skeleton-text>\n        <ion-skeleton-text animated style=\"width: 70%\"></ion-skeleton-text>\n        <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\n      </div>\n    </div> -->\n  </ion-grid>\n</ion-content>\n";
      /***/
    },

    /***/
    61361:
    /*!********************************************************************!*\
      !*** ./src/app/pages/projects/project-page/project-page.page.scss ***!
      \********************************************************************/

    /***/
    function _(module) {
      module.exports = "#mobile-toolbar {\n  position: relative;\n  top: 90px;\n  --background: #505050bf;\n}\n\n#project-thumbnail {\n  width: 100px;\n  border-radius: 100px;\n}\n\n.project-wrapper {\n  padding: 1.5em;\n  background: linear-gradient(118deg, #320534 1%, rgba(48, 7, 55, 0.5) 25%, #320534 50%, rgba(38, 7, 42, 0.5) 75%, #320534 100%);\n  border-radius: 10px;\n  margin-top: 7em;\n}\n\nion-title {\n  color: #3cf63c;\n}\n\nh1 {\n  color: #3cf63c;\n}\n\n#description {\n  background: #1805199e;\n  padding: 30px;\n}\n\nion-footer {\n  text-align: center;\n  background: #3cf63c;\n  position: fixed;\n  bottom: 0px;\n}\n\nion-footer p {\n  color: #1b061c;\n  font-size: 1.5em;\n}\n\nion-toolbar {\n  --background: none;\n}\n\nion-toolbar ion-buttons .green-button {\n  width: 80px;\n  display: block;\n  margin-right: 1em;\n  --background: #3df63d94;\n  --color: white;\n  --border-color: #3df63d;\n  --border-width: 2px;\n  --border-style: solid;\n  --border-radius: 5px;\n  --box-shadow: none;\n}\n\nion-toolbar ion-buttons .grey-button {\n  width: 80px;\n  display: block;\n  margin-right: 1em;\n  --background: #77777794;\n  --color: white;\n  --border-color: #777777;\n  --border-width: 2px;\n  --border-style: solid;\n  --border-radius: 5px;\n  --box-shadow: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3QtcGFnZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSx1QkFBQTtBQUNGOztBQUNBO0VBQ0UsWUFBQTtFQUNBLG9CQUFBO0FBRUY7O0FBQUE7RUFDRSxjQUFBO0VBQ0EsOEhBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUFHRjs7QUFEQTtFQUNFLGNBQUE7QUFJRjs7QUFGQTtFQUVFLGNBQUE7QUFJRjs7QUFGQTtFQUNFLHFCQUFBO0VBQ0EsYUFBQTtBQUtGOztBQUhBO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0FBTUY7O0FBSkU7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7QUFNSjs7QUFIQTtFQUNFLGtCQUFBO0FBTUY7O0FBSkk7RUFDRSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtBQU1OOztBQUpJO0VBQ0UsV0FBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7QUFNTiIsImZpbGUiOiJwcm9qZWN0LXBhZ2UucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI21vYmlsZS10b29sYmFyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDkwcHg7XG4gIC0tYmFja2dyb3VuZDogIzUwNTA1MGJmO1xufVxuI3Byb2plY3QtdGh1bWJuYWlsIHtcbiAgd2lkdGg6IDEwMHB4O1xuICBib3JkZXItcmFkaXVzOiAxMDBweDtcbn1cbi5wcm9qZWN0LXdyYXBwZXJ7XG4gIHBhZGRpbmc6IDEuNWVtO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTE4ZGVnLCByZ2JhKDUwLDUsNTIsMSkgMSUsIHJnYig0OCA3IDU1IC8gNTAlKSAyNSUsIHJnYmEoNTAsNSw1MiwxKSA1MCUsIHJnYigzOCA3IDQyIC8gNTAlKSA3NSUsIHJnYmEoNTAsNSw1MiwxKSAxMDAlKTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgbWFyZ2luLXRvcDogN2VtO1xufVxuaW9uLXRpdGxlIHtcbiAgY29sb3I6ICMzY2Y2M2M7XG59XG5oMSB7XG4gIC8vIGNvbG9yOiAjZDhjY2E4O1xuICBjb2xvcjogIzNjZjYzYztcbn1cbiNkZXNjcmlwdGlvbiB7XG4gIGJhY2tncm91bmQ6ICMxODA1MTk5ZTtcbiAgcGFkZGluZzogMzBweDtcbn1cbmlvbi1mb290ZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6ICMzY2Y2M2M7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiAwcHg7XG5cbiAgcCB7XG4gICAgY29sb3I6ICMxYjA2MWM7XG4gICAgZm9udC1zaXplOiAxLjVlbTtcbiAgfVxufVxuaW9uLXRvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6IG5vbmU7XG4gIGlvbi1idXR0b25zIHtcbiAgICAuZ3JlZW4tYnV0dG9uIHtcbiAgICAgIHdpZHRoOiA4MHB4O1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDFlbTtcbiAgICAgIC0tYmFja2dyb3VuZDogIzNkZjYzZDk0O1xuICAgICAgLS1jb2xvcjogd2hpdGU7XG4gICAgICAtLWJvcmRlci1jb2xvcjogIzNkZjYzZDtcbiAgICAgIC0tYm9yZGVyLXdpZHRoOiAycHg7XG4gICAgICAtLWJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgICAtLWJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgIC0tYm94LXNoYWRvdzogbm9uZTtcbiAgICB9XG4gICAgLmdyZXktYnV0dG9uIHtcbiAgICAgIHdpZHRoOiA4MHB4O1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDFlbTtcbiAgICAgIC0tYmFja2dyb3VuZDogIzc3Nzc3Nzk0O1xuICAgICAgLS1jb2xvcjogd2hpdGU7XG4gICAgICAtLWJvcmRlci1jb2xvcjogIzc3Nzc3NztcbiAgICAgIC0tYm9yZGVyLXdpZHRoOiAycHg7XG4gICAgICAtLWJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgICAtLWJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgIC0tYm94LXNoYWRvdzogbm9uZTtcbiAgICB9XG4gIH1cbn0iXX0= */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_projects_project-page_project-page_module_ts-es5.js.map