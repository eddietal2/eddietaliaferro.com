"use strict";
(self["webpackChunkeddietaliaferro_com"] = self["webpackChunkeddietaliaferro_com"] || []).push([["src_app_pages_blog_blog_module_ts"],{

/***/ 46727:
/*!***************************************************!*\
  !*** ./src/app/pages/blog/blog-routing.module.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BlogPageRoutingModule": function() { return /* binding */ BlogPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _blog_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./blog.page */ 65128);




const routes = [
    {
        path: '',
        component: _blog_page__WEBPACK_IMPORTED_MODULE_0__.BlogPage
    },
    {
        path: 'blog-page/:id',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_blog_blog-page_blog-page_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./blog-page/blog-page.module */ 85413)).then(m => m.BlogPagePageModule)
    }
];
let BlogPageRoutingModule = class BlogPageRoutingModule {
};
BlogPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], BlogPageRoutingModule);



/***/ }),

/***/ 86238:
/*!*******************************************!*\
  !*** ./src/app/pages/blog/blog.module.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BlogPageModule": function() { return /* binding */ BlogPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 7602);
/* harmony import */ var _blog_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./blog-routing.module */ 46727);
/* harmony import */ var _blog_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./blog.page */ 65128);
/* harmony import */ var src_app_components_custom_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/custom-components.module */ 52719);








let BlogPageModule = class BlogPageModule {
};
BlogPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            src_app_components_custom_components_module__WEBPACK_IMPORTED_MODULE_2__.CustomComponentsModule,
            _blog_routing_module__WEBPACK_IMPORTED_MODULE_0__.BlogPageRoutingModule
        ],
        declarations: [_blog_page__WEBPACK_IMPORTED_MODULE_1__.BlogPage]
    })
], BlogPageModule);



/***/ }),

/***/ 65128:
/*!*****************************************!*\
  !*** ./src/app/pages/blog/blog.page.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BlogPage": function() { return /* binding */ BlogPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _Users_ferro_Desktop_personal_website_eddietaliaferro_com_node_modules_ngtools_webpack_src_loaders_direct_resource_js_blog_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./blog.page.html */ 55153);
/* harmony import */ var _blog_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./blog.page.scss */ 45882);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var src_app_services_blog_blog_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/blog/blog.service */ 22036);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! date-fns */ 79379);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! date-fns */ 98048);
/* harmony import */ var src_app_services_emitters_admin_blog_emitter_admin_blog_emitter_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/emitters/admin-blog-emitter/admin-blog-emitter.service */ 97775);
/* harmony import */ var src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/auth/auth.service */ 51228);









let BlogPage = class BlogPage {
    constructor(router, auth, adminBlogEmitterService, blogs) {
        this.router = router;
        this.auth = auth;
        this.adminBlogEmitterService = adminBlogEmitterService;
        this.blogs = blogs;
        this.allBlogs = [];
    }
    ngOnInit() {
        // When a blog is added on the Add Blog page, refresh this page.
        if (this.adminBlogEmitterService.subsVar == undefined) {
            this.adminBlogEmitterService.subsVar = this.adminBlogEmitterService.invokeAdminBlogsPageRefresh.subscribe(() => {
                this.getBlogs();
            });
        }
        this.getBlogs();
    }
    getBlogs() {
        this.blogs.getBlogs().subscribe(blogs => {
            this.allBlogs = blogs.reverse();
            console.log(blogs);
            for (let i = 0; i < this.allBlogs.length; i++) {
                this.allBlogs[i].date = (0,date_fns__WEBPACK_IMPORTED_MODULE_5__.default)((0,date_fns__WEBPACK_IMPORTED_MODULE_6__.default)(this.allBlogs[i].date), 'MMMM do, uu');
            }
            return;
        });
    }
    donatePage() {
    }
    contactPage() {
    }
    viewBlogPage(id) {
        console.log(id);
        this.router.navigate(['/blog/blog-page/', id]);
    }
    ngOnDestroy() {
        this.auth.blogID = null;
        console.log('Blogs Page destroyed');
    }
};
BlogPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router },
    { type: src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__.AuthService },
    { type: src_app_services_emitters_admin_blog_emitter_admin_blog_emitter_service__WEBPACK_IMPORTED_MODULE_3__.AdminBlogEmitterService },
    { type: src_app_services_blog_blog_service__WEBPACK_IMPORTED_MODULE_2__.BlogService }
];
BlogPage.propDecorators = {
    ngOnDestroy: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.HostListener, args: ['unloaded',] }]
};
BlogPage = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-blog',
        template: _Users_ferro_Desktop_personal_website_eddietaliaferro_com_node_modules_ngtools_webpack_src_loaders_direct_resource_js_blog_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_blog_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], BlogPage);



/***/ }),

/***/ 55153:
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/blog/blog.page.html ***!
  \**********************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n  <ion-grid>\n\n    <!-- Blogs Illustration -->\n    <ion-row class=\"ion-justify-content-center\">\n      <ion-col class=\"ion-text-center\" size-xs=\"11\" size-sm=\"8\" size-lg=\"6\">\n        <app-blog-illustration></app-blog-illustration>\n      </ion-col>\n    </ion-row>\n\n    <!-- Blog Header and Search Bar -->\n    <ion-row class=\"ion-justify-content-center\" style=\"margin-bottom: 80px;\">\n      <ion-col class=\"ion-text-center\" size-xs=\"11\" size-sm=\"8\">\n        <!-- <h1 class=\"page-header\">Blogs</h1> -->\n        <h4 class=\"page-header\">Blogs - Search for articles, tutorials, rants, ect.</h4>\n        <!-- <ion-input class=\"blog-search\" type=\"text\" placeholder=\"Search ...\"></ion-input> -->\n      </ion-col>\n    </ion-row>\n\n    <!-- Blogs -->\n    <ion-row class=\"latest-blogs ion-justify-content-center\">\n      <ion-col size-xs=\"12\" size-sm=\"10\" size-md=\"9\" size-lg=\"8\" size-xl=\"6\">\n        <ion-row *ngFor=\"let blog of allBlogs\">\n          <ion-col size=\"12\">\n            <ion-row class=\"blog-post\" *ngIf=\"blog.visible\">\n              <ion-col size-xs=\"2\" size-sm=\"2\" size-lg=\"2\">\n                <img src=\"{{blog.thumbnail}}\" alt=\"Blog Post Thumbnail\" class=\"blog-thumbnail\">\n              </ion-col>\n              <ion-col size-xs=\"10\" size-sm=\"10\" size-lg=\"8\" class=\"blog-info\">\n                <h5 class=\"blog-date\">{{blog.date}}</h5>\n                <h1 class=\"blog-title\">{{blog.title}}</h1>\n                <h6 class=\"blog-hashtags\">{{blog.hashtags}}</h6>\n              </ion-col>\n              <ion-col size-xs=\"11\" size-sm=\"11\" size-lg=\"2\" class=\"view-page-button ion-text-center\">\n                <ion-button class=\"gold-button\" (click)=\"viewBlogPage(blog._id)\">\n                  View\n                </ion-button>\n              </ion-col>\n            </ion-row>\n          </ion-col>\n        </ion-row>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n");

/***/ }),

/***/ 45882:
/*!*******************************************!*\
  !*** ./src/app/pages/blog/blog.page.scss ***!
  \*******************************************/
/***/ (function(module) {

module.exports = ".blog-by-year-wrapper {\n  margin-bottom: 80px;\n}\n\n.blog-search {\n  border: 3px solid #e9e9e9;\n  width: 100%;\n  transition: 500ms;\n}\n\n.blog-search:hover {\n  border: 2px solid #2B50C8;\n  transition: 500ms;\n}\n\n.latest-blogs {\n  margin-bottom: 10em;\n}\n\n.blog-post {\n  height: auto;\n  background: linear-gradient(118deg, #320534 1%, rgba(48, 7, 55, 0.5) 25%, #320534 50%, rgba(38, 7, 42, 0.5) 75%, #320534 100%);\n  padding: 30px;\n  transition: 0.5s;\n  border-radius: 10px;\n  border-left: 16px solid #1d071f;\n  display: flex;\n  align-items: center;\n}\n\n.blog-post .green-button {\n  margin: 0;\n}\n\n.blog-post .blog-info {\n  display: inline-block;\n}\n\n.blog-post .blog-thumbnail {\n  width: 100%;\n  border-radius: 100px;\n  margin-right: 2.5em;\n}\n\n.blog-post .blog-date {\n  color: #999;\n  margin: 0 0;\n  opacity: 0.6;\n}\n\n.blog-post .blog-title {\n  margin: 0 0;\n  font-size: 1.2em;\n  color: white;\n}\n\n@media only screen and (max-width: 645px) {\n  .blog-post .blog-title {\n    font-size: 1em;\n  }\n}\n\n.blog-post .blog-hashtags {\n  margin: 0 0;\n  color: #3df63d;\n}\n\n.blog-post .blog-post:hover {\n  border-left: none;\n}\n\n@media only screen and (max-width: 500px) {\n  .purple-button {\n    margin: 5em auto 0 auto;\n  }\n}\n\n#footer {\n  background: #000000d1;\n  height: 600px;\n  margin-top: 4em;\n  padding: 6em 0em 3em 0em;\n}\n\n#footer #footer-logo {\n  width: 100px;\n}\n\n#footer #footer-buttons {\n  width: 150px;\n  display: inline-block;\n}\n\n#footer .footer-hr {\n  border-top: 5px solid #D3B900;\n  opacity: 0.4;\n  padding: 0;\n  width: 150px;\n}\n\n#footer #social-media {\n  margin-bottom: 1em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJsb2cucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQUE7QUFDRjs7QUFDQTtFQUNFLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0FBRUY7O0FBQUE7RUFDRSx5QkFBQTtFQUNBLGlCQUFBO0FBR0Y7O0FBREE7RUFDRSxtQkFBQTtBQUlGOztBQUZBO0VBQ0UsWUFBQTtFQUNBLDhIQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSwrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQUtGOztBQUhFO0VBQ0UsU0FBQTtBQUtKOztBQUZFO0VBQ0UscUJBQUE7QUFJSjs7QUFGRTtFQUNFLFdBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0FBSUo7O0FBRkU7RUFDRSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFJSjs7QUFGRTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUFJSjs7QUFGRTtFQUNFO0lBQ0UsY0FBQTtFQUlKO0FBQ0Y7O0FBRkU7RUFDRSxXQUFBO0VBQ0EsY0FBQTtBQUlKOztBQUZFO0VBQ0UsaUJBQUE7QUFJSjs7QUFBQTtFQUNFO0lBQ0UsdUJBQUE7RUFHRjtBQUNGOztBQUFBO0VBQ0UscUJBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLHdCQUFBO0FBRUY7O0FBQUU7RUFDRSxZQUFBO0FBRUo7O0FBQUU7RUFDRSxZQUFBO0VBQ0EscUJBQUE7QUFFSjs7QUFBRTtFQUNFLDZCQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0FBRUo7O0FBQUU7RUFDRSxrQkFBQTtBQUVKIiwiZmlsZSI6ImJsb2cucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJsb2ctYnkteWVhci13cmFwcGVye1xuICBtYXJnaW4tYm90dG9tOiA4MHB4O1xufVxuLmJsb2ctc2VhcmNoIHtcbiAgYm9yZGVyOiAzcHggc29saWQgcmdiKDIzMywgMjMzLCAyMzMpO1xuICB3aWR0aDogMTAwJTtcbiAgdHJhbnNpdGlvbjogNTAwbXM7XG59XG4uYmxvZy1zZWFyY2g6aG92ZXIge1xuICBib3JkZXI6IDJweCBzb2xpZCAjMkI1MEM4O1xuICB0cmFuc2l0aW9uOiA1MDBtcztcbn1cbi5sYXRlc3QtYmxvZ3Mge1xuICBtYXJnaW4tYm90dG9tOiAxMGVtO1xufVxuLmJsb2ctcG9zdCB7XG4gIGhlaWdodDogYXV0bztcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDExOGRlZywgcmdiYSg1MCw1LDUyLDEpIDElLCByZ2IoNDggNyA1NSAvIDUwJSkgMjUlLCByZ2JhKDUwLDUsNTIsMSkgNTAlLCByZ2IoMzggNyA0MiAvIDUwJSkgNzUlLCByZ2JhKDUwLDUsNTIsMSkgMTAwJSk7XG4gIHBhZGRpbmc6IDMwcHg7XG4gIHRyYW5zaXRpb246IDAuNXM7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJvcmRlci1sZWZ0OiAxNnB4IHNvbGlkICMxZDA3MWY7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgLmdyZWVuLWJ1dHRvbiB7XG4gICAgbWFyZ2luOiAwO1xuICB9XG5cbiAgLmJsb2ctaW5mbyB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB9XG4gIC5ibG9nLXRodW1ibmFpbCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm9yZGVyLXJhZGl1czogMTAwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAyLjVlbTtcbiAgfVxuICAuYmxvZy1kYXRlIHtcbiAgICBjb2xvcjogIzk5OTtcbiAgICBtYXJnaW46IDAgMDtcbiAgICBvcGFjaXR5OiAwLjY7XG4gIH1cbiAgLmJsb2ctdGl0bGUge1xuICAgIG1hcmdpbjogMCAwO1xuICAgIGZvbnQtc2l6ZTogMS4yZW07XG4gICAgY29sb3I6IHdoaXRlO1xuICB9XG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjQ1cHgpIHtcbiAgICAuYmxvZy10aXRsZSB7XG4gICAgICBmb250LXNpemU6IDFlbTtcbiAgICB9XG4gIH1cbiAgLmJsb2ctaGFzaHRhZ3Mge1xuICAgIG1hcmdpbjogMCAwO1xuICAgIGNvbG9yOiAjM2RmNjNkO1xuICB9XG4gIC5ibG9nLXBvc3Q6aG92ZXIge1xuICAgIGJvcmRlci1sZWZ0OiBub25lO1xuICB9XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTAwcHgpIHtcbiAgLnB1cnBsZS1idXR0b257XG4gICAgbWFyZ2luOiA1ZW0gYXV0byAwIGF1dG87XG4gIH1cbn1cblxuI2Zvb3RlciB7XG4gIGJhY2tncm91bmQ6ICMwMDAwMDBkMTtcbiAgaGVpZ2h0OiA2MDBweDtcbiAgbWFyZ2luLXRvcDogNGVtO1xuICBwYWRkaW5nOiA2ZW0gMGVtIDNlbSAwZW07XG5cbiAgI2Zvb3Rlci1sb2dvIHtcbiAgICB3aWR0aDogMTAwcHg7XG4gIH1cbiAgI2Zvb3Rlci1idXR0b25zIHtcbiAgICB3aWR0aDogMTUwcHg7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB9XG4gIC5mb290ZXItaHIge1xuICAgIGJvcmRlci10b3A6IDVweCBzb2xpZCAjRDNCOTAwO1xuICAgIG9wYWNpdHk6IDAuNDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIHdpZHRoOiAxNTBweDtcbiAgfVxuICAjc29jaWFsLW1lZGlhIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxZW07XG4gIH1cbn0iXX0= */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_blog_blog_module_ts-es2015.js.map