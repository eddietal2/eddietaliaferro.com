"use strict";
(self["webpackChunkeddietaliaferro_com"] = self["webpackChunkeddietaliaferro_com"] || []).push([["src_app_pages_about_about_module_ts"],{

/***/ 93423:
/*!*****************************************************!*\
  !*** ./src/app/pages/about/about-routing.module.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AboutPageRoutingModule": function() { return /* binding */ AboutPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _about_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./about.page */ 388);




const routes = [
    {
        path: '',
        component: _about_page__WEBPACK_IMPORTED_MODULE_0__.AboutPage
    }
];
let AboutPageRoutingModule = class AboutPageRoutingModule {
};
AboutPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AboutPageRoutingModule);



/***/ }),

/***/ 18114:
/*!*********************************************!*\
  !*** ./src/app/pages/about/about.module.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AboutPageModule": function() { return /* binding */ AboutPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 7602);
/* harmony import */ var _about_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./about-routing.module */ 93423);
/* harmony import */ var _about_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./about.page */ 388);







let AboutPageModule = class AboutPageModule {
};
AboutPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _about_routing_module__WEBPACK_IMPORTED_MODULE_0__.AboutPageRoutingModule
        ],
        declarations: [_about_page__WEBPACK_IMPORTED_MODULE_1__.AboutPage]
    })
], AboutPageModule);



/***/ }),

/***/ 388:
/*!*******************************************!*\
  !*** ./src/app/pages/about/about.page.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AboutPage": function() { return /* binding */ AboutPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _Users_ferro_Desktop_personal_website_eddietaliaferro_com_node_modules_ngtools_webpack_src_loaders_direct_resource_js_about_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./about.page.html */ 42221);
/* harmony import */ var _about_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./about.page.scss */ 81075);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);




let AboutPage = class AboutPage {
    constructor() {
        this.slideOpts = {
            initialSlide: 0,
            speed: 400,
        };
    }
    ngOnInit() {
        // this.slides.startAutoplay();
    }
    slidesDidLoad(slides) {
        slides.startAutoplay();
    }
    donatePage() {
    }
    contactPage() {
    }
};
AboutPage.ctorParameters = () => [];
AboutPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-about',
        template: _Users_ferro_Desktop_personal_website_eddietaliaferro_com_node_modules_ngtools_webpack_src_loaders_direct_resource_js_about_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_about_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], AboutPage);



/***/ }),

/***/ 42221:
/*!************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/about/about.page.html ***!
  \************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n  <ion-grid>\n    <!-- Blog Header and Search Bar -->\n  <ion-row class=\"ion-justify-content-center\" style=\"margin-bottom: 80px;\">\n    <ion-col class=\"ion-text-center\" size-xs=\"11\" size-sm=\"8\" size-lg=\"6\">\n      <ion-slides #slider (ionSlidesDidLoad)=\"slidesDidLoad(slider)\" [options]=\"slideOpts\">\n        <ion-slide id=\"slide-1\">\n        </ion-slide>\n        <ion-slide id=\"slide-2\">\n        </ion-slide>\n        <ion-slide id=\"slide-3\">\n        </ion-slide>\n      </ion-slides>\n    </ion-col>\n    \n    <ion-col class=\"ion-text-center\" size-xs=\"11\" size-sm=\"8\" size-lg=\"8\">\n      <h1 class=\"page-header\">Just a lil' about me.</h1>\n    </ion-col>\n  </ion-row>\n\n  <!-- About Me -->\n  <ion-row class=\"ion-justify-content-center\">\n    <ion-col id=\"about-me\" size-xs=\"11\" size-sm=\"10\" size-md=\"9\" size-lg=\"8\">\n      <h2 class=\"sub-title\">Who is Eddie Taliaferro II?</h2>\n      <hr class=\"line\">\n      <p>HI! My name is Eddie Taliaferro II. I know what you are thinking… It's pronounced <b>Tah-lee-ah-ferro</b>. If I had a nickel for every time someone mispronounced my name throughout my life, I’d realistically probably would have around $60,000. Now that we got that out of the way … who am I?<br><br>\n\n        I am a Web Developer, Designer, Artist, Instructor, and Entrepreneur out of Detroit. The D. The 313. Motown. The Motorcity. One of the original tech hubs of the United States. If you have never been to Detroit, come pay us a visit! We don’t bite.<br><br>\n\n        Ever since I was a child, I have always been into Technology. I was always the kid that was fixing my family members' computers. I remember being 12 years old and rewiring my basement’s phone lines just so the internet could work (I still have no idea what I was doing). I broke literally every PlayStation 2 I ever owned trying to either fix or reverse engineer them (sorry Mom). I was sort of a freelance Graphic Designer as early as age 11, and I always dreamed of being a programmer, mostly because I had never seen anyone around me do it. So it was mostly a dream.<br><br>\n\n        Fast forward to me as a 29 year old Man, and Technology has become my life. I have a huge passion for teaching kids how to code, design, or program -- especially in the Detroit area. I can empathize with many of their upbringings, and I have a duty to pass on my knowledge so that their dreams come true -- the same dream that I once had as a kid.<br><br>\n\n        Outside of Tech, I am an Entrepreneur, with Freelance Design and Development being just one endeavor. I am a cat dad to 2 beautiful cats - Joey, and Yin. I am a newly avid Longboarder. Pretty big fan of Sports and Professional Wrestling. Last, but not least, I love to travel!<br><br>\n\n        Thank you for visiting my site and reading this far into my About page. I hope that this website gives you some sort of value.Peace, and Good Vibez!\n      </p><br>\n    </ion-col>\n  </ion-row>\n  </ion-grid>\n\n</ion-content>\n\n");

/***/ }),

/***/ 81075:
/*!*********************************************!*\
  !*** ./src/app/pages/about/about.page.scss ***!
  \*********************************************/
/***/ (function(module) {

module.exports = "ion-slides {\n  margin-top: 5em;\n  width: 400px;\n  border-radius: 400px;\n}\n\n#slide-1, #slide-2, #slide-3 {\n  width: 400px;\n  height: 400px;\n  background-repeat: no-repeat;\n}\n\n@media only screen and (max-width: 450px) {\n  #slide-1, #slide-2, #slide-3 {\n    width: 300px;\n    height: 300px;\n    background-repeat: no-repeat;\n    background-size: 100% auto;\n  }\n}\n\n@media only screen and (max-width: 750px) {\n  .picture {\n    width: 100%;\n    height: 400px;\n  }\n\n  ion-slides {\n    height: 300px;\n    width: 300px;\n  }\n}\n\n@media only screen and (max-width: 340px) {\n  ion-slides {\n    height: 200px;\n    width: 200px;\n    background-size: 200px auto;\n  }\n}\n\n#slide-1 {\n  background-image: url('photo.png');\n}\n\n#slide-2 {\n  background-image: url('IMG_0040.JPG');\n  background-size: cover;\n  background-position-y: -130px;\n}\n\n#slide-3 {\n  background-image: url('IMG_0097 2.JPG');\n  background-size: cover;\n}\n\n.sub-title {\n  color: #3df63d;\n  font-size: 1.6em;\n}\n\nb {\n  color: white;\n  background: #847146;\n  padding: 4px;\n  border-radius: 5px;\n}\n\n#about-me {\n  background: linear-gradient(118deg, #320534 1%, rgba(48, 7, 55, 0.5) 25%, #320534 50%, rgba(38, 7, 42, 0.5) 75%, #320534 100%);\n  font-size: 16px;\n  line-height: 28px;\n  padding: 2em;\n  margin-bottom: 14em;\n  box-shadow: 1px 1px 21px #00000057;\n  color: white;\n  border-radius: 10px;\n}\n\n.page-sub-header {\n  color: #999;\n  margin: 30px 0 0 0;\n}\n\n.picture {\n  height: 700px;\n  width: 600px;\n  background: #999;\n  margin: 0 auto;\n}\n\n.blog-page-illustration {\n  background: lightgoldenrodyellow;\n  height: 80vh;\n}\n\n@media only screen and (max-width: 550px) {\n  #about-me {\n    padding: 1em;\n  }\n\n  p {\n    font-size: 1em;\n    line-height: 1.3em;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFib3V0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7QUFDRjs7QUFDQTtFQUNFLFlBQUE7RUFBYyxhQUFBO0VBQ2QsNEJBQUE7QUFHRjs7QUFBQTtFQUNFO0lBQ0UsWUFBQTtJQUFjLGFBQUE7SUFDZCw0QkFBQTtJQUNBLDBCQUFBO0VBSUY7QUFDRjs7QUFEQTtFQUNFO0lBQ0UsV0FBQTtJQUNBLGFBQUE7RUFHRjs7RUFEQTtJQUNFLGFBQUE7SUFDQSxZQUFBO0VBSUY7QUFDRjs7QUFGQTtFQUNFO0lBQ0UsYUFBQTtJQUNBLFlBQUE7SUFDQSwyQkFBQTtFQUlGO0FBQ0Y7O0FBRkE7RUFDRSxrQ0FBQTtBQUlGOztBQUZBO0VBQ0UscUNBQUE7RUFDQSxzQkFBQTtFQUNBLDZCQUFBO0FBS0Y7O0FBSEE7RUFDRSx1Q0FBQTtFQUNBLHNCQUFBO0FBTUY7O0FBSkE7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7QUFPRjs7QUFMQTtFQUNFLFlBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQVFGOztBQU5BO0VBQ0UsOEhBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQ0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQVNGOztBQVBBO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0FBVUY7O0FBUEE7RUFDRSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQVVGOztBQVBBO0VBQ0UsZ0NBQUE7RUFDQSxZQUFBO0FBVUY7O0FBUEE7RUFDRTtJQUNFLFlBQUE7RUFVRjs7RUFSQTtJQUNFLGNBQUE7SUFDQSxrQkFBQTtFQVdGO0FBQ0YiLCJmaWxlIjoiYWJvdXQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXNsaWRlcyB7XG4gIG1hcmdpbi10b3A6IDVlbTtcbiAgd2lkdGg6IDQwMHB4O1xuICBib3JkZXItcmFkaXVzOiA0MDBweDtcbn1cbiNzbGlkZS0xLCAjc2xpZGUtMiwgI3NsaWRlLTMge1xuICB3aWR0aDogNDAwcHg7IGhlaWdodDogNDAwcHg7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDUwcHgpIHtcbiAgI3NsaWRlLTEsICNzbGlkZS0yLCAjc2xpZGUtMyB7XG4gICAgd2lkdGg6IDMwMHB4OyBoZWlnaHQ6IDMwMHB4O1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIGF1dG87XG4gIH1cbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NTBweCkge1xuICAucGljdHVyZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA0MDBweDtcbiAgfVxuICBpb24tc2xpZGVzIHtcbiAgICBoZWlnaHQ6IDMwMHB4O1xuICAgIHdpZHRoOiAzMDBweDtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzNDBweCkge1xuICBpb24tc2xpZGVzIHtcbiAgICBoZWlnaHQ6IDIwMHB4O1xuICAgIHdpZHRoOiAyMDBweDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDIwMHB4IGF1dG87XG4gIH1cbn1cbiNzbGlkZS0xIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi9hc3NldHMvcGhvdG8ucG5nJyk7XG59XG4jc2xpZGUtMiB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vYXNzZXRzL0lNR18wMDQwLkpQRycpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXk6IC0xMzBweDtcbn1cbiNzbGlkZS0zIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi9hc3NldHMvSU1HXzAwOTdcXCAyLkpQRycpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuLnN1Yi10aXRsZSB7XG4gIGNvbG9yOiAjM2RmNjNkO1xuICBmb250LXNpemU6IDEuNmVtO1xufVxuYiB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZDogIzg0NzE0NjtcbiAgcGFkZGluZzogNHB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG4jYWJvdXQtbWUge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTE4ZGVnLCByZ2JhKDUwLDUsNTIsMSkgMSUsIHJnYig0OCA3IDU1IC8gNTAlKSAyNSUsIHJnYmEoNTAsNSw1MiwxKSA1MCUsIHJnYigzOCA3IDQyIC8gNTAlKSA3NSUsIHJnYmEoNTAsNSw1MiwxKSAxMDAlKTs7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDI4cHg7XG4gIHBhZGRpbmc6IDJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMTRlbTtcbiAgYm94LXNoYWRvdzogMXB4IDFweCAyMXB4ICMwMDAwMDA1NztcbiAgY29sb3I6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuLnBhZ2Utc3ViLWhlYWRlciB7XG4gIGNvbG9yOiAjOTk5O1xuICBtYXJnaW46IDMwcHggMCAwIDA7XG59XG5cbi5waWN0dXJlIHtcbiAgaGVpZ2h0OiA3MDBweDtcbiAgd2lkdGg6IDYwMHB4O1xuICBiYWNrZ3JvdW5kOiAjOTk5O1xuICBtYXJnaW46IDAgYXV0bztcbn1cblxuLmJsb2ctcGFnZS1pbGx1c3RyYXRpb257XG4gIGJhY2tncm91bmQ6IGxpZ2h0Z29sZGVucm9keWVsbG93O1xuICBoZWlnaHQ6IDgwdmg7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTUwcHgpIHtcbiAgI2Fib3V0LW1le1xuICAgIHBhZGRpbmc6IDFlbTtcbiAgfVxuICBwIHtcbiAgICBmb250LXNpemU6IDFlbTtcbiAgICBsaW5lLWhlaWdodDogMS4zZW07XG4gIH1cbn0iXX0= */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_about_about_module_ts-es2015.js.map