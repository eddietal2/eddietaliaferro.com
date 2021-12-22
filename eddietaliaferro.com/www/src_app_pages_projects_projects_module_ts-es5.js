(function () {
  "use strict";

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkeddietaliaferro_com"] = self["webpackChunkeddietaliaferro_com"] || []).push([["src_app_pages_projects_projects_module_ts"], {
    /***/
    36702:
    /*!***********************************************************!*\
      !*** ./src/app/pages/projects/projects-routing.module.ts ***!
      \***********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ProjectsPageRoutingModule": function ProjectsPageRoutingModule() {
          return (
            /* binding */
            _ProjectsPageRoutingModule
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


      var _projects_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./projects.page */
      95913);

      var routes = [{
        path: '',
        component: _projects_page__WEBPACK_IMPORTED_MODULE_0__.ProjectsPage
      }, {
        path: 'project-page/:id',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_pages_projects_project-page_project-page_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./project-page/project-page.module */
          79695)).then(function (m) {
            return m.ProjectPagePageModule;
          });
        }
      }];

      var _ProjectsPageRoutingModule = function ProjectsPageRoutingModule() {
        _classCallCheck(this, ProjectsPageRoutingModule);
      };

      _ProjectsPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _ProjectsPageRoutingModule);
      /***/
    },

    /***/
    43206:
    /*!***************************************************!*\
      !*** ./src/app/pages/projects/projects.module.ts ***!
      \***************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ProjectsPageModule": function ProjectsPageModule() {
          return (
            /* binding */
            _ProjectsPageModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! tslib */
      3786);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic/angular */
      7602);
      /* harmony import */


      var _projects_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./projects-routing.module */
      36702);
      /* harmony import */


      var _projects_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./projects.page */
      95913);
      /* harmony import */


      var src_app_components_custom_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/components/custom-components.module */
      52719);

      var _ProjectsPageModule = function ProjectsPageModule() {
        _classCallCheck(this, ProjectsPageModule);
      };

      _ProjectsPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule, src_app_components_custom_components_module__WEBPACK_IMPORTED_MODULE_2__.CustomComponentsModule, _projects_routing_module__WEBPACK_IMPORTED_MODULE_0__.ProjectsPageRoutingModule],
        declarations: [_projects_page__WEBPACK_IMPORTED_MODULE_1__.ProjectsPage]
      })], _ProjectsPageModule);
      /***/
    },

    /***/
    95913:
    /*!*************************************************!*\
      !*** ./src/app/pages/projects/projects.page.ts ***!
      \*************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ProjectsPage": function ProjectsPage() {
          return (
            /* binding */
            _ProjectsPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! tslib */
      3786);
      /* harmony import */


      var _Users_ferro_Desktop_personal_website_eddietaliaferro_com_node_modules_ngtools_webpack_src_loaders_direct_resource_js_projects_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./projects.page.html */
      91804);
      /* harmony import */


      var _projects_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./projects.page.scss */
      84092);
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

      var _ProjectsPage = /*#__PURE__*/function () {
        function ProjectsPage(router, projectService) {
          _classCallCheck(this, ProjectsPage);

          this.router = router;
          this.projectService = projectService;
        }

        _createClass(ProjectsPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getProjects();
          }
        }, {
          key: "getProjects",
          value: function getProjects() {
            var _this = this;

            this.projectService.getProjects().subscribe(function (projects) {
              console.log(projects);
              _this.allProjects = projects;
              return;
            });
          }
        }, {
          key: "donatePage",
          value: function donatePage() {
            this.router.navigateByUrl('/donate');
          }
        }, {
          key: "contactPage",
          value: function contactPage() {
            this.router.navigateByUrl('/contact');
          }
        }, {
          key: "viewProject",
          value: function viewProject(id) {
            this.router.navigate(['/projects/project-page/', id]);
          }
        }]);

        return ProjectsPage;
      }();

      _ProjectsPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router
        }, {
          type: src_app_services_project_project_service__WEBPACK_IMPORTED_MODULE_2__.ProjectService
        }];
      };

      _ProjectsPage = (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-projects',
        template: _Users_ferro_Desktop_personal_website_eddietaliaferro_com_node_modules_ngtools_webpack_src_loaders_direct_resource_js_projects_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_projects_page_scss__WEBPACK_IMPORTED_MODULE_1__]
      })], _ProjectsPage);
      /***/
    },

    /***/
    91804:
    /*!******************************************************************************************************************!*\
      !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/projects/projects.page.html ***!
      \******************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Projects</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n    <!-- Project Illustration -->\n    <ion-row class=\"ion-justify-content-center\">\n      <ion-col class=\"ion-text-center\" size-xs=\"11\" size-sm=\"8\" size-lg=\"6\">\n        <app-projects-illustration></app-projects-illustration>\n      </ion-col>\n    </ion-row>\n\n    <ion-row class=\"ion-justify-content-center\" style=\"margin-bottom: 80px;\">\n      <ion-col class=\"ion-text-center\" size-xs=\"11\" size-sm=\"8\">\n        <h1 class=\"page-header\">Here are some personal and professional projects of mine.</h1>\n        <!-- <h4 class=\"page-sub-header\"></h4> -->\n      </ion-col>\n    </ion-row>\n\n    <ion-row class=\"latest-projects ion-justify-content-center\">\n      <ion-col size-xs=\"11\" size-sm=\"10\" size-md=\"9\" size-lg=\"8\" size-xl=\"6\">\n        <ion-row *ngFor=\"let project of allProjects\">\n          <ion-row class=\"project-post\" *ngIf=\"project.visible\">\n            <ion-col size-xs=\"2\" size-sm=\"2\" size-lg=\"2\">\n              <img src=\"{{project.thumbnail}}\" alt=\"Project Post Thumbnail\" class=\"project-thumbnail\">\n            </ion-col>\n            <ion-col size-xs=\"10\" size-sm=\"10\" size-lg=\"8\" class=\"project-info\">\n              <h1 class=\"project-title\">{{project.title}}</h1>\n              <p class=\"project-description\">{{project.description}}</p>\n            </ion-col>\n            <ion-col size-xs=\"11\" size-sm=\"11\" size-lg=\"2\" class=\"view-page-button ion-text-center\">\n              <ion-button class=\"gold-button\" (click)=\"viewProject(project._id)\">\n                View\n              </ion-button>\n            </ion-col>\n          </ion-row>\n        </ion-row>\n      </ion-col>\n    </ion-row>\n\n    <!-- Footer Illustration -->\n    <!-- <ion-row id=\"footer\" class=\"ion-justify-content-center\">\n      <ion-col class=\"ion-text-center\" size-md=\"11\" size-lg=\"3\">\n        <img id=\"footer-logo\" src=\"../../../assets/gold-logo.svg\" alt=\"Footer Logo\">\n      </ion-col>\n      <ion-col class=\"ion-text-center\" size-md=\"11\" size-lg=\"3\">\n        <ion-icon size=\"large\" name=\"logo-linkedin\"></ion-icon>\n      </ion-col>\n      <ion-col class=\"ion-text-center\" size-md=\"11\" size-lg=\"3\">\n        <ion-button class=\"gold-button\" (click)=\"donatePage()\">\n          Donate\n        </ion-button>\n        <ion-button class=\"red-button\" (click)=\"contactPage()\">\n          Contact\n        </ion-button>\n      </ion-col>\n    </ion-row> -->\n  </ion-grid>\n</ion-content>\n";
      /***/
    },

    /***/
    84092:
    /*!***************************************************!*\
      !*** ./src/app/pages/projects/projects.page.scss ***!
      \***************************************************/

    /***/
    function _(module) {
      module.exports = ".project {\n  height: 200px;\n  margin: 1em;\n  padding: 0.5em;\n  border-radius: 10px;\n  box-shadow: 1px 1px 21px #e3dede;\n}\n\n#footer {\n  background: #000000d1;\n}\n\n#footer #footer-logo {\n  width: 100px;\n}\n\n#footer #footer-buttons {\n  width: 150px;\n  display: inline-block;\n}\n\n#footer .footer-hr {\n  border-top: 5px solid #D3B900;\n  opacity: 0.4;\n  padding: 0;\n  width: 150px;\n}\n\n#footer #social-media {\n  margin-bottom: 1em;\n}\n\n.project-post {\n  height: auto;\n  background: linear-gradient(118deg, #320534 1%, rgba(48, 7, 55, 0.5) 25%, #320534 50%, rgba(38, 7, 42, 0.5) 75%, #320534 100%);\n  padding: 25px;\n  transition: 0.5s;\n  border-radius: 10px;\n  border-left: 16px solid #1d071f;\n  display: flex;\n  align-items: center;\n}\n\n.project-post .green-button {\n  margin: 0;\n}\n\n.project-post .gold-button {\n  margin: 0;\n}\n\n.project-post .project-info {\n  display: inline-block;\n}\n\n.project-post .project-date {\n  color: #999;\n  margin: 0 0;\n  opacity: 0.6;\n}\n\n.project-post .project-thumbnail {\n  width: 100%;\n  border-radius: 100px;\n  margin-right: 2.5em;\n}\n\n.project-post .project-title {\n  margin: 0 0 0.5em 0;\n  color: #3df63d;\n  font-size: 1.2em;\n}\n\n.project-post .project-description {\n  margin: 0 4em 0 0;\n  color: white;\n  font-size: 0.9em;\n}\n\n@media only screen and (max-width: 645px) {\n  .project-post .project-title {\n    font-size: 1.2em;\n  }\n  .project-post .project-description {\n    font-size: 1em;\n  }\n  .project-post .project-post:hover {\n    border-left: none;\n  }\n}\n\n.latest-projects {\n  height: auto;\n  padding: 1em 0.4em;\n  padding-bottom: 10em;\n}\n\n.latest-projects ion-toolbar > ion-buttons > .gold-button {\n  width: 150px;\n  display: block;\n  margin: 30px 0;\n  --background: linear-gradient(360deg, #D3B900 -2%, #87780a, #D3B900);\n  --color: white;\n  --border-radius: 50px;\n  --box-shadow: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsZ0NBQUE7QUFDRjs7QUFDQTtFQUNFLHFCQUFBO0FBRUY7O0FBQUU7RUFDRSxZQUFBO0FBRUo7O0FBQUU7RUFDRSxZQUFBO0VBQ0EscUJBQUE7QUFFSjs7QUFBRTtFQUNFLDZCQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0FBRUo7O0FBQUU7RUFDRSxrQkFBQTtBQUVKOztBQUNBO0VBQ0UsWUFBQTtFQUNBLDhIQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSwrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQUVGOztBQUFFO0VBQ0UsU0FBQTtBQUVKOztBQUFFO0VBQ0UsU0FBQTtBQUVKOztBQUNFO0VBQ0UscUJBQUE7QUFDSjs7QUFDRTtFQUNFLFdBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUNKOztBQUNFO0VBQ0UsV0FBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7QUFDSjs7QUFDRTtFQUNFLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FBQ0o7O0FBRUU7RUFDRSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQUFKOztBQUVFO0VBQ0U7SUFDRSxnQkFBQTtFQUFKO0VBRUU7SUFDRSxjQUFBO0VBQUo7RUFFRTtJQUNFLGlCQUFBO0VBQUo7QUFDRjs7QUFHQTtFQUVFLFlBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0FBREY7O0FBR0U7RUFDRSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7RUFDQSxvRUFBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0FBREoiLCJmaWxlIjoicHJvamVjdHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByb2plY3Qge1xuICBoZWlnaHQ6IDIwMHB4O1xuICBtYXJnaW46IDFlbTtcbiAgcGFkZGluZzogMC41ZW07XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJveC1zaGFkb3c6IDFweCAxcHggMjFweCAjZTNkZWRlO1xufVxuI2Zvb3RlciB7XG4gIGJhY2tncm91bmQ6ICMwMDAwMDBkMTtcblxuICAjZm9vdGVyLWxvZ28ge1xuICAgIHdpZHRoOiAxMDBweDtcbiAgfVxuICAjZm9vdGVyLWJ1dHRvbnMge1xuICAgIHdpZHRoOiAxNTBweDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIH1cbiAgLmZvb3Rlci1ociB7XG4gICAgYm9yZGVyLXRvcDogNXB4IHNvbGlkICNEM0I5MDA7XG4gICAgb3BhY2l0eTogMC40O1xuICAgIHBhZGRpbmc6IDA7XG4gICAgd2lkdGg6IDE1MHB4O1xuICB9XG4gICNzb2NpYWwtbWVkaWEge1xuICAgIG1hcmdpbi1ib3R0b206IDFlbTtcbiAgfVxufVxuLnByb2plY3QtcG9zdCB7XG4gIGhlaWdodDogYXV0bztcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDExOGRlZywgcmdiYSg1MCw1LDUyLDEpIDElLCByZ2IoNDggNyA1NSAvIDUwJSkgMjUlLCByZ2JhKDUwLDUsNTIsMSkgNTAlLCByZ2IoMzggNyA0MiAvIDUwJSkgNzUlLCByZ2JhKDUwLDUsNTIsMSkgMTAwJSk7XG4gIHBhZGRpbmc6IDI1cHg7XG4gIHRyYW5zaXRpb246IDAuNXM7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJvcmRlci1sZWZ0OiAxNnB4IHNvbGlkICMxZDA3MWY7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgLmdyZWVuLWJ1dHRvbiB7XG4gICAgbWFyZ2luOiAwO1xuICB9XG4gIC5nb2xkLWJ1dHRvbiB7XG4gICAgbWFyZ2luOiAwO1xuICB9XG5cbiAgLnByb2plY3QtaW5mbyB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB9XG4gIC5wcm9qZWN0LWRhdGUge1xuICAgIGNvbG9yOiAjOTk5O1xuICAgIG1hcmdpbjogMCAwO1xuICAgIG9wYWNpdHk6IDAuNjtcbiAgfVxuICAucHJvamVjdC10aHVtYm5haWwge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xuICAgIG1hcmdpbi1yaWdodDogMi41ZW07XG4gIH1cbiAgLnByb2plY3QtdGl0bGUge1xuICAgIG1hcmdpbjogMCAwIDAuNWVtIDA7XG4gICAgY29sb3I6ICMzZGY2M2Q7XG4gICAgZm9udC1zaXplOiAxLjJlbTtcblxuICB9XG4gIC5wcm9qZWN0LWRlc2NyaXB0aW9uIHtcbiAgICBtYXJnaW46IDAgNGVtIDAgMDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1zaXplOiAwLjllbTtcbiAgfVxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY0NXB4KSB7XG4gICAgLnByb2plY3QtdGl0bGUge1xuICAgICAgZm9udC1zaXplOiAxLjJlbTtcbiAgICB9XG4gICAgLnByb2plY3QtZGVzY3JpcHRpb24ge1xuICAgICAgZm9udC1zaXplOiAxZW07XG4gICAgfVxuICAgIC5wcm9qZWN0LXBvc3Q6aG92ZXIge1xuICAgICAgYm9yZGVyLWxlZnQ6IG5vbmU7XG4gICAgfVxufVxufVxuLmxhdGVzdC1wcm9qZWN0cyB7XG4gIC8vIGJhY2tncm91bmQ6ICNmN2Y3Zjc7XG4gIGhlaWdodDogYXV0bztcbiAgcGFkZGluZzogMWVtIDAuNGVtO1xuICBwYWRkaW5nLWJvdHRvbTogMTBlbTtcblxuICBpb24tdG9vbGJhciA+IGlvbi1idXR0b25zID4gLmdvbGQtYnV0dG9uIHtcbiAgICB3aWR0aDogMTUwcHg7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luOiAzMHB4IDA7XG4gICAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMzYwZGVnLCAjRDNCOTAwIC0yJSwgIzg3NzgwYSwgI0QzQjkwMCk7XG4gICAgLS1jb2xvcjogd2hpdGU7XG4gICAgLS1ib3JkZXItcmFkaXVzOiA1MHB4O1xuICAgIC0tYm94LXNoYWRvdzogbm9uZTtcbiAgfVxufSJdfQ== */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_projects_projects_module_ts-es5.js.map