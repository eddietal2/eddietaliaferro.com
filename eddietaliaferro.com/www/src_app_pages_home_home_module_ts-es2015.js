"use strict";
(self["webpackChunkeddietaliaferro_com"] = self["webpackChunkeddietaliaferro_com"] || []).push([["src_app_pages_home_home_module_ts"],{

/***/ 96610:
/*!***************************************************!*\
  !*** ./src/app/pages/home/home-routing.module.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageRoutingModule": function() { return /* binding */ HomePageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 10678);




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], HomePageRoutingModule);



/***/ }),

/***/ 57994:
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.module.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageModule": function() { return /* binding */ HomePageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 7602);
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home-routing.module */ 96610);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.page */ 10678);
/* harmony import */ var src_app_components_custom_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/custom-components.module */ 52719);








let HomePageModule = class HomePageModule {
};
HomePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            src_app_components_custom_components_module__WEBPACK_IMPORTED_MODULE_2__.CustomComponentsModule,
            _home_routing_module__WEBPACK_IMPORTED_MODULE_0__.HomePageRoutingModule
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_1__.HomePage]
    })
], HomePageModule);



/***/ }),

/***/ 10678:
/*!*****************************************!*\
  !*** ./src/app/pages/home/home.page.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePage": function() { return /* binding */ HomePage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _Users_ferro_Desktop_personal_website_eddietaliaferro_com_node_modules_ngtools_webpack_src_loaders_direct_resource_js_home_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./home.page.html */ 99090);
/* harmony import */ var _home_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.page.scss */ 26613);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! date-fns */ 79379);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! date-fns */ 98048);
/* harmony import */ var src_app_services_blog_blog_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/blog/blog.service */ 22036);
/* harmony import */ var src_app_services_project_project_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/project/project.service */ 64439);








let HomePage = class HomePage {
    constructor(router, blogService, projectService) {
        this.router = router;
        this.blogService = blogService;
        this.projectService = projectService;
    }
    ngOnInit() {
        this.headerNameBackgroundAnimation();
        this.getBlogs();
        this.getProjects();
    }
    ngAfterViewInit() {
        window.onscroll = function () {
        };
    }
    headerNameBackgroundAnimation() {
        let headerName = document.getElementById('header-name');
        let degrees = 180;
        setInterval(() => {
            if (degrees === 360) {
                degrees = 0;
                // console.log('Going back to 0degs!')
            }
            degrees = degrees + 5;
            // console.log('Rotating Gradient');
            // console.log(degrees);
            headerName.style.backgroundImage = "linear-gradient(" + degrees + "deg, #847145, #d8cca8, #847145)";
        }, 50);
    }
    scrollAnimations(e) {
        let scrollTop = e.detail.scrollTop;
        let widowWidth = window.innerWidth;
        // console.log('\n');
        // console.log('\n');
        // console.log('\n');
        // console.log('\n');
        // console.log('%cScrollTop:  ', 'background: #222; color: #bada55');
        // console.log(scrollTop);
        // console.log('\n');
        // Services Animation Wrappers
        let servicesWrapperOffsetTop = document.getElementById('services').offsetTop;
        // console.log('Services Wrapper OffsetTop: ');
        // console.log(servicesWrapperOffsetTop);
        // console.log('\n');
        let designIconWrapperOffsetTop = (document.getElementById('design-icon-wrapper').parentElement.offsetTop) + servicesWrapperOffsetTop;
        let developmentIconWrapperOffsetTop = (document.getElementById('development-icon-wrapper').parentElement.offsetTop) + servicesWrapperOffsetTop;
        let instructingIconWrapperOffsetTop = (document.getElementById('instructing-icon-wrapper').parentElement.offsetTop) + servicesWrapperOffsetTop;
        // console.log('Design Icon Wrapper OffsetTop: ');
        // console.log(designIconWrapperOffsetTop);
        // console.log('Development Icon Wrapper OffsetTop: ');
        // console.log(developmentIconWrapperOffsetTop);
        // console.log('Instructing Icon Wrapper OffsetTop: ');
        // console.log(instructingIconWrapperOffsetTop);
        // console.log('\n');
        // Yin-Ying Animation Wrappers
        let yinYangWrapperOffsetTop = (document.getElementById('yin-yang-wrapper')).parentElement.parentElement.offsetTop;
        // console.log('Yin Yang Wrapper OffsetTop: ');
        // console.log(yinYangWrapperOffsetTop);
        // console.log('\n');
        // console.log('Window Width: ');
        // console.log(widowWidth);
        // console.log('\n');
        // Design Icon Animation
        if (designIconWrapperOffsetTop >= scrollTop) {
            // console.log('Released Design Icon Animation trigger');
            this.designIconAnimationRelease((designIconWrapperOffsetTop - 500), scrollTop);
        }
        if ((designIconWrapperOffsetTop - 500) <= scrollTop) {
            // console.log('Trigger Design Icon Animation');
            this.designIconAnimationTrigger((designIconWrapperOffsetTop - 500), scrollTop);
        }
        // Development Icon Animation
        if (developmentIconWrapperOffsetTop >= scrollTop) {
            // console.log('Released Development Icon Animation trigger');
            this.developmentIconAnimationRelease((developmentIconWrapperOffsetTop - 500), scrollTop);
        }
        if ((developmentIconWrapperOffsetTop - 500) <= scrollTop) {
            // console.log('Trigger Development Icon Animation');
            this.developmentIconAnimationTrigger((developmentIconWrapperOffsetTop - 500), scrollTop);
        }
        // Instructing Icon Animation
        if (instructingIconWrapperOffsetTop >= scrollTop) {
            // console.log('Released Instructing Icon Animation');
            this.instructinIconAnimationRelease(((instructingIconWrapperOffsetTop - 500)), scrollTop);
        }
        if ((instructingIconWrapperOffsetTop - 500) <= scrollTop) {
            // console.log('Trigger Instructing Icon Animation');
            this.instructinIconAnimationTrigger((instructingIconWrapperOffsetTop - 500), scrollTop);
        }
        // Yin Yang Animation
        if (yinYangWrapperOffsetTop > scrollTop) {
            // console.log('Released Instructing Icon Animation');
            this.yinYangRotateAnimationRelease(((yinYangWrapperOffsetTop - 500)), scrollTop);
        }
        if ((yinYangWrapperOffsetTop - 500) < scrollTop) {
            // console.log('Trigger Instructing Icon Animation');
            this.yinYangRotateAnimationTrigger((yinYangWrapperOffsetTop - 500), scrollTop);
        }
    }
    // Design Icon
    designIconAnimationRelease(designIconWrapperOffsetTop, scrollTop) {
        let setSquare = document.getElementById('set-square');
        let setSquareAnimationLength = -(designIconWrapperOffsetTop - scrollTop) / 100;
        // console.log(setSquareAnimationLength);
        // I need to calculate the distance from the SVGs to the top of the services element.
        setSquare.style.opacity = setSquareAnimationLength.toString();
        // setSquare.style.transform = 'translate(0,-30px)';
    }
    designIconAnimationTrigger(designIconWrapperOffsetTop, scrollTop) {
        let setSquare = document.getElementById('set-square');
        let setSquareAnimationLength = -(designIconWrapperOffsetTop - scrollTop) / 300;
        // console.log(setSquareAnimationLength);
        if (setSquareAnimationLength <= 0.99) {
            // console.log('First half of color animation!')
            setSquare.style.stroke = "#d8cca8";
        }
        if (setSquareAnimationLength > 0.99) {
            // console.log('Second half of color animation!')
            setSquare.style.stroke = "#49bde5";
        }
        setSquare.style.opacity = setSquareAnimationLength.toString();
        // setSquare.style.transform = 'translateY(0,0px)';
    }
    // Development Icon
    developmentIconAnimationRelease(developmentIconWrapperOffsetTop, scrollTop) {
        let openingBracket = document.getElementById('opening-bracket');
        let closingBracket = document.getElementById('closing-bracket');
        let forwardSlash = document.getElementById('forward-slash');
        let developmentIconAnimationLengthOpacity = -(developmentIconWrapperOffsetTop - scrollTop) / 100;
        openingBracket.style.opacity = developmentIconAnimationLengthOpacity.toString();
        closingBracket.style.opacity = developmentIconAnimationLengthOpacity.toString();
        forwardSlash.style.opacity = developmentIconAnimationLengthOpacity.toString();
    }
    developmentIconAnimationTrigger(developmentIconWrapperOffsetTop, scrollTop) {
        let developmentIconAnimationLengthOpacity = -(developmentIconWrapperOffsetTop - scrollTop) / 100;
        let openingBracket = document.getElementById('opening-bracket');
        let closingBracket = document.getElementById('closing-bracket');
        let forwardSlash = document.getElementById('forward-slash');
        openingBracket.style.fill = '#49bde5';
        closingBracket.style.fill = '#49bde5';
        forwardSlash.style.fill = '#49bde5';
        openingBracket.style.opacity = developmentIconAnimationLengthOpacity.toString();
        closingBracket.style.opacity = developmentIconAnimationLengthOpacity.toString();
        forwardSlash.style.opacity = developmentIconAnimationLengthOpacity.toString();
    }
    // Instructing Icon
    instructinIconAnimationRelease(instructingIconWrapperOffsetTop, scrollTop) {
        let instructor = document.getElementById('instructor');
        let instructorAnimationLength = -(instructingIconWrapperOffsetTop - scrollTop) / 1.3;
        instructor.style.fill = "#D8CCA8";
        instructor.style.opacity = instructorAnimationLength.toString();
        // I need to calculate the distance from the SVGs to the top of the services element.
    }
    instructinIconAnimationTrigger(instructingIconWrapperOffsetTop, scrollTop) {
        let instructor = document.getElementById('instructor');
        let instructorAnimationLength = -(instructingIconWrapperOffsetTop - scrollTop) / 100;
        instructor.style.fill = "#49bde5";
        instructor.style.opacity = instructorAnimationLength.toString();
    }
    // Yin-Yang Icon
    yinYangRotateAnimationRelease(yinYangWrapperOffsetTop, scrollTop) {
        // Yang = Black
        // Yin = Green
        let yang = document.getElementById("yang");
        let yin = document.getElementById("yin");
        let yinYangWrapper = document.getElementById("yin-yang-wrapper");
        // 0 to 150
        //  yang.style.transform = "translate(0px, 167px)";
        //  // 612 to 462
        //  yin.style.transform = "translate(612px, 167px)";
        yinYangWrapper.style.transformOrigin = "center";
    }
    yinYangRotateAnimationTrigger(yinYangWrapperOffsetTop, scrollTop) {
        // Yang = Black
        // Yin = Green
        let yang = document.getElementById("yang");
        let yin = document.getElementById("yin");
        let yinYangWrapper = document.getElementById("yin-yang-wrapper");
        let yingYangRotationSpeed = ((yinYangWrapperOffsetTop - scrollTop) / 4.33);
        // console.log('Yin Yang Animation Measure: ');
        yinYangWrapper.style.transform = "rotateZ(" + yingYangRotationSpeed + "deg)";
    }
    getBlogs() {
        this.blogServiceSub = this.blogService.getLatestBlogPosts().subscribe(data => {
            console.log('Latest Blogs on Homepage');
            console.log(data);
            this.latestBlogs = data;
            for (let i = 0; i < this.latestBlogs.length; i++) {
                this.latestBlogs[i].date = (0,date_fns__WEBPACK_IMPORTED_MODULE_4__.default)((0,date_fns__WEBPACK_IMPORTED_MODULE_5__.default)(this.latestBlogs[i].date), 'MMMM do, uu');
            }
            return;
        });
    }
    getProjects() {
        this.projectServiceSub = this.projectService.getLatestProjectPosts().subscribe(data => {
            console.log('Latest Projects on Homepage');
            console.log(data);
            this.latestProjects = data;
        });
    }
    donatePage() {
        this.router.navigateByUrl('/donate');
    }
    contactPage() {
        this.router.navigateByUrl('/contact');
    }
    viewBlogs() {
        this.router.navigateByUrl('blog');
    }
    viewProjects() {
        this.router.navigateByUrl('projects');
    }
    viewBlogPage(blogID) {
        console.log(blogID);
        this.router.navigateByUrl('/blog/blog-page/' + blogID);
    }
    viewProjectPage(projectID) {
        this.router.navigate(['/projects/project-page', projectID]);
    }
    ngOnDestroy() {
        this.projectServiceSub.unsubscribe();
        this.blogServiceSub.unsubscribe();
        console.log('Home Page destroyed');
    }
};
HomePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: src_app_services_blog_blog_service__WEBPACK_IMPORTED_MODULE_2__.BlogService },
    { type: src_app_services_project_project_service__WEBPACK_IMPORTED_MODULE_3__.ProjectService }
];
HomePage.propDecorators = {
    ngOnDestroy: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.HostListener, args: ['unloaded',] }]
};
HomePage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-home',
        template: _Users_ferro_Desktop_personal_website_eddietaliaferro_com_node_modules_ngtools_webpack_src_loaders_direct_resource_js_home_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_home_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], HomePage);



/***/ }),

/***/ 99090:
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/home/home.page.html ***!
  \**********************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content scrollEvents=\"true\" (ionScroll)=\"scrollAnimations($event)\">\n  <ion-grid>\n    <!-- Landing Page Header -->\n    <ion-row id=\"landing-page-header\" style=\"position: relative;\" class=\"ion-justify-content-center\">\n      <!-- Header Info -->\n      <ion-col size-xs=\"12\" size-sm=\"11\" size-md=\"8\" size-lg=\"4.5\">\n        <!-- Mobile Header Info -->\n        <ion-row class=\"ion-justify-content-center header-info-wrapper\">\n          <!-- Photo -->\n         <ion-col class=\"ion-text-center\" size-xs=\"11\" size-sm=\"6\" size-md=\"6\" size-lg=\"12\"  size-xl=\"4.9\">\n           <div id=\"headshot-picture\"></div>\n         </ion-col>\n         <!-- Info -->\n         <ion-col class=\"ion-text-center\" size-xs=\"11\" size-sm=\"6\" size-md=\"6\" size-lg=\"12\" push-xl=\"1\" size-xl=\"7.1\">\n           <h3 id=\"header-name\">Eddie Taliaferro II</h3>\n           <h4 class=\"caption\" style=\"animation-delay: 0.25s;\">Extraordinary</h4>\n           <h4 class=\"caption\" style=\"animation-delay: 0.5s;\">Dude,</h4>\n           <h4 class=\"caption\" style=\"animation-delay: 0.75s;\">Designer.</h4>\n           <h4 class=\"caption\" style=\"animation-delay: 1s;\">\n            Instructor.</h4>\n           <h4 class=\"caption\" style=\"animation-delay: 1.25s;\">Engineer.</h4>\n         </ion-col>\n        </ion-row>\n      </ion-col>\n      <!-- Red Pill / Blue Pill Illustration -->\n      <ion-col class=\"ion-text-center\" size-xs=\"12\" size-sm=\"11\" size-md=\"8\" size-lg=\"6\">\n        <app-header-illustration></app-header-illustration>\n      </ion-col>\n\n      <!-- Curve Under Header-->\n      <svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" preserveAspectRatio=\"none\" viewBox=\"0 0 1680 40\" id=\"bottom-curve\"><path d=\"M0 40h1680V30S1340 0 840 0 0 30 0 30z\" fill=\"#1b061c\"></path></svg>\n    </ion-row>\n\n    <!-- Services -->\n    <ion-row id=\"services\" class=\"ion-justify-content-center\">\n      <ion-col class=\"ion-text-center\" size=\"10\">\n        <h1 style=\"max-width: 592px; margin: 10em auto 0 auto;\" class=\"page-header\">What do I do?</h1>\n      </ion-col>\n      <ion-col class=\"service-card\" size-xs=\"11\" size-sm=\"10\" size-md=\"8\" size-lg=\"4\" size-xl=\"3.8\">\n            <div id=\"design-icon-wrapper\" class=\"ion-text-center\">\n              <app-design-icon></app-design-icon>\n            </div>\n            <div class=\"ion-text-center\">\n              <h3>UI / UX / Graphic Design</h3>\n            </div>\n            <p>My skillset involves minimalist style design. I believe you should nail (most) design down to its simplist form, unless the design's functionality is to waste or stall time. From simple icons and logos, focusing on overall experience of the user, and cool 'lil SVG - Javascript animation illustrations... I'm your guy. #DesignVibez</p>\n      </ion-col>\n      <ion-col class=\"service-card\" size-xs=\"11\" size-sm=\"10\" size-md=\"8\" size-lg=\"4\" size-xl=\"3.8\">\n            <div id=\"development-icon-wrapper\" class=\"ion-text-center\">\n              <app-development-icon></app-development-icon>\n            </div>\n            <div class=\"ion-text-center\">\n              <h3>Web Development</h3>\n            </div>\n            <p>I am proficient with Front-End and Back-End Web Technologies. I am a JavaScript and Progressive Web App enthusiast! The stack that I have the most experience with, and prefer as of 2021, the MEAN Stack - MongoDB, Express, Angular(2+), and Node.js. I love working with Ionic as well. To top it all off, I can work with Amazon Web Services (AWS), dealing with EC2 Instances and S3 specifically, with NGINX.</p>\n      </ion-col>\n      <ion-col class=\"service-card\" size-xs=\"11\" size-sm=\"10\" size-md=\"8\" size-lg=\"4\" size-xl=\"3.8\">\n            <div id=\"instructing-icon-wrapper\" class=\"ion-text-center\">\n              <app-instructing-icon></app-instructing-icon>\n            </div>\n            <div class=\"ion-text-center\">\n              <h3>Instructor</h3>\n            </div>\n            <p>Another passion that I have Teaching. Most of my experience comes from working with a Non-profit named Journi of out Detroit. I teach HTML, CSS, Design Principles, Design Thinking, and Entrepruership with many programs with have with different schools in the Detroit Area. I also offer consultation, and will generally teach anyone I know how to code.</p>\n      </ion-col>\n    </ion-row>\n\n    <!-- Yin-Yang Illustration -->\n    <ion-row class=\"ion-justify-content-center\">\n      <ion-col class=\"ion-text-center\" size=\"10\">\n        <div>\n          <app-home-illustration-two></app-home-illustration-two>\n        </div>\n      </ion-col>\n    </ion-row>\n\n    <!-- Latest Blog Posts -->\n    <ion-row class=\"latest-blogs ion-justify-content-center\">\n      <ion-col size-xs=\"11\" size-sm=\"10\" size-md=\"9\" size-lg=\"7\">\n        <ion-col class=\"ion-text-center\" size=\"10\">\n          <h1 class=\"page-header\">Latests Blogs</h1>\n        </ion-col>\n        <ion-row *ngFor=\"let blog of latestBlogs\" class=\"blog-post\">\n          <ion-col size-xs=\"2\" size-sm=\"2\" size-lg=\"2\">\n            <img src=\"{{blog.thumbnail}}\" alt=\"Blog Post Thumbnail\" class=\"blog-thumbnail\">\n          </ion-col>\n          <ion-col size-xs=\"10\" size-sm=\"10\" size-lg=\"7\" class=\"blog-info\">\n            <h5 class=\"blog-date\">{{blog.date}}</h5>\n            <h1 class=\"blog-title\">{{blog.title}}</h1>\n            <h6 class=\"blog-hashtags\">{{blog.hashtags}}</h6>\n          </ion-col>\n          <ion-col size-xs=\"11\" size-sm=\"11\" size-lg=\"3\" class=\"view-page-button ion-text-center\">\n            <ion-button class=\"gold-button\" (click)=\"viewBlogPage(blog._id)\">\n              View\n            </ion-button>\n          </ion-col>\n        </ion-row>\n        <ion-row class=\"ion-justify-content-center\">\n          <ion-col class=\"ion-text-center\" size-xs=\"10\" size-sm=\"10\" size-md=\"6\" size-lg=\"4\" size-xl=\"4\">\n            <ion-button class=\"green-mobile-button\" (click)=\"viewBlogs()\">\n              View Blogs\n            </ion-button>\n          </ion-col>\n        </ion-row>\n      </ion-col>\n    </ion-row>\n\n     <!-- Latest Projects -->\n     <ion-row class=\"latest-projects ion-justify-content-center\" style=\"margin-top: 10em; padding-bottom: 14em;\">\n      <ion-col size-xs=\"11\" size-sm=\"10\" size-md=\"9\" size-lg=\"7\">\n        <ion-col class=\"ion-text-center\" size=\"10\">\n          <h1 class=\"page-header\">Latest Projects</h1>\n        </ion-col>\n        <ion-row *ngFor=\"let project of latestProjects\" class=\"project-post\">\n          <ion-col size-xs=\"2\" size-sm=\"2\" size-lg=\"2\">\n            <img src=\"{{project.thumbnail}}\" alt=\"Project Post Thumbnail\" class=\"project-thumbnail\">\n          </ion-col>\n          <ion-col size-xs=\"10\" size-sm=\"10\" size-lg=\"7\" class=\"blog-info\">\n            <h1 class=\"project-title\">{{project.title}}</h1>\n            <p class=\"project-description\">{{project.description}}</p>\n          </ion-col>\n          <ion-col size-xs=\"11\" size-sm=\"11\" size-lg=\"3\" class=\"view-page-button\">\n            <ion-button class=\"gold-button\" (click)=\"viewProjectPage(project.url)\">\n              View\n            </ion-button>\n          </ion-col>\n        </ion-row>\n        <ion-row class=\"ion-justify-content-center\">\n          <ion-col class=\"ion-text-center\" size-xs=\"10\" size-sm=\"10\" size-md=\"6\" size-lg=\"4\" size-xl=\"4\">\n            <ion-button class=\"green-mobile-button\" (click)=\"viewProjects()\">\n              View Projects\n            </ion-button>\n          </ion-col>\n        </ion-row>\n      </ion-col>\n    </ion-row>\n\n    <!-- Footer -->\n    <!-- <ion-row id=\"footer\" class=\"ion-justify-content-center\">\n      <ion-col class=\"ion-text-center\" size=\"11\">\n        <img id=\"footer-logo\" src=\"../../../assets/gold-logo.svg\" alt=\"Footer Logo\">\n      </ion-col>\n      <ion-col class=\"ion-text-center\" size=\"11\">\n        <div id=\"footer-buttons\">\n          <hr class=\"footer-hr\">\n          <ion-button class=\"gold-button\" (click)=\"donatePage()\">\n            Donate\n          </ion-button>\n          <ion-button class=\"red-button\" (click)=\"contactPage()\">\n            Contact\n          </ion-button>\n        </div>\n      <div id=\"social-media\">\n        <hr class=\"footer-hr\">\n        <ion-icon size=\"large\" name=\"logo-linkedin\"></ion-icon>\n      </div>\n      </ion-col>\n    </ion-row> -->\n  </ion-grid>\n</ion-content>\n\n");

/***/ }),

/***/ 26613:
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.page.scss ***!
  \*******************************************/
/***/ (function(module) {

module.exports = "#landing-page-header {\n  background: linear-gradient(45deg, #ffffffe5, #ffffffe5);\n  height: auto;\n  padding: 5em 0 5em 0;\n  position: relative;\n  margin-bottom: 5em;\n}\n#landing-page-header span {\n  font-weight: 800;\n}\n#landing-page-header .caption {\n  margin: 0em 0em;\n  font-size: 1.5em;\n  text-align: justify;\n  color: #1d071f;\n  width: 230px;\n  opacity: 0;\n  -webkit-animation: slide-in 1s cubic-bezier(0.95, 0.05, 0.795, 0.035) forwards;\n          animation: slide-in 1s cubic-bezier(0.95, 0.05, 0.795, 0.035) forwards;\n}\n@-webkit-keyframes slide-in {\n  0% {\n    opacity: 0;\n    transform: translateX(-150px);\n  }\n  100% {\n    opacity: 1;\n    transform: translateX(0px);\n  }\n}\n@keyframes slide-in {\n  0% {\n    opacity: 0;\n    transform: translateX(-150px);\n  }\n  100% {\n    opacity: 1;\n    transform: translateX(0px);\n  }\n}\n#landing-page-header .header-info-wrapper {\n  border-radius: 10px;\n  height: auto;\n  padding: 1em;\n  position: relative;\n}\n#landing-page-header #headshot-picture {\n  width: 200px;\n  height: 200px;\n  border-radius: 200px;\n  background-image: url('photo.png');\n  background-size: contain;\n}\n#landing-page-header #header-name {\n  color: white;\n  font-size: 1.7em;\n  margin: 1em auto;\n  padding: 6px;\n  transition: 500ms;\n  margin-bottom: 0.5em;\n  box-shadow: 1px 1px 3px #0000006e;\n}\n#landing-page-header #header-buttons {\n  margin: 3em auto;\n  text-align: center;\n}\n#landing-page-header #header-buttons #donate-header-button {\n  width: 200px;\n  height: 40px;\n  display: block;\n  margin: 2em auto;\n  --background: linear-gradient(360deg, #D01801 -2%, #810b00, #D01801);\n  --color: white;\n  --border-radius: 50px;\n  --box-shadow: none;\n}\n#landing-page-header #header-buttons #contact-header-button {\n  width: 200px;\n  height: 40px;\n  display: block;\n  margin: 2em auto;\n  --background: linear-gradient(360deg, #3df63d -2%, #00b400, #3df63d);\n  --color: white;\n  --border-radius: 50px;\n  --box-shadow: none;\n}\n@media only screen and (min-width: 1100px) {\n  #landing-page-header #header-illustration {\n    height: 500px;\n    width: 500px;\n  }\n}\n@media only screen and (max-width: 500px) {\n  #landing-page-header {\n    padding: 5em 0;\n  }\n}\n#bottom-curve {\n  position: absolute;\n  bottom: 0px;\n}\n#services {\n  height: auto;\n  width: 100%;\n  position: relative;\n  top: -100px;\n  display: flex;\n  align-items: center;\n  padding: 3em 0;\n}\n.service-card {\n  background: linear-gradient(118deg, #320534 1%, rgba(48, 7, 55, 0.5) 25%, #320534 50%, rgba(38, 7, 42, 0.5) 75%, #320534 100%);\n  background-attachment: fixed;\n  min-height: 600px;\n  margin: 2em auto;\n  box-shadow: 1px 1px 10px #0003;\n  border-radius: 5px;\n  padding: 2em;\n}\n.service-card p {\n  font-size: 1.1em;\n  line-height: 1.5em;\n}\n.service-card h3 {\n  color: #3df63d;\n  margin: 0 auto;\n}\n@media only screen and (max-width: 500px) {\n  .service-card {\n    min-height: 400px;\n  }\n  .service-card p {\n    font-size: 1em;\n    line-height: 1.3em;\n  }\n}\n@media only screen and (max-width: 991px) {\n  .service-card {\n    min-height: 500px;\n  }\n}\n#design-icon, #development-icon, #instructing-icon {\n  height: 100px;\n  width: 100px;\n  margin: 0.5em auto;\n}\n#design-icon {\n  background-image: url('design-icon.svg');\n}\n#development-icon {\n  background-image: url('development-icon.svg');\n}\n#instructing-icon {\n  background-image: url('instructing-icon.svg');\n}\n@media only screen and (min-width: 450px) {\n  ion-toolbar .section-header {\n    font-size: 2em;\n  }\n}\n@media only screen and (max-width: 600px) {\n  #landing-page-header {\n    height: auto;\n  }\n\n  #services {\n    width: 100%;\n    padding: 3em 0;\n    display: flex;\n    align-items: center;\n  }\n}\n.gold-button {\n  width: 100px;\n  float: right;\n}\n@media only screen and (max-width: 1100px) {\n  #landing-page-header {\n    height: auto;\n  }\n\n  #headshot-picture {\n    margin: 0 auto;\n  }\n\n  #header-buttons {\n    margin: 0 auto;\n  }\n  #header-buttons .gold-button {\n    display: inline-block;\n    height: 40px;\n    width: 120px;\n    margin: 1em auto;\n  }\n  #header-buttons .red-button {\n    display: inline-block;\n    height: 40px;\n    width: 120px;\n    margin: 1em auto;\n  }\n}\n#illustration-1 {\n  background-image: url('home-illustration-2.svg');\n  height: 300px;\n  width: 350px;\n  margin: 3em auto;\n  padding: 3em;\n  border-radius: 5px;\n}\n#illustration-1 p {\n  padding: 25px 0px;\n  font-size: 1em;\n  line-height: 1.2em;\n}\n#yin-yang-wrapper {\n  transform-origin: center;\n}\n#yin-yang {\n  margin: 0em auto 5em auto;\n}\n.green-mobile-button {\n  height: 56px;\n  width: 300px;\n  margin-top: 63px;\n  --background: #6bff6b61;\n  font-size: 1em;\n  color: white;\n  border: 3px solid #3cf63c;\n  border-radius: 5px;\n}\n.latest-blogs {\n  height: auto;\n  padding: 1em 0;\n  margin: 0;\n}\n.latest-blogs ion-toolbar {\n  font-size: 1.4em;\n  font-weight: 800;\n  background: #1d071f;\n  border-radius: 10px;\n}\n.latest-blogs ion-toolbar .section-header {\n  font-family: Ayuthaya;\n  font-size: 1.4em;\n  color: white;\n}\n.latest-blogs ion-toolbar > ion-buttons > .grey-button {\n  width: 150px;\n  display: block;\n  margin: 30px 0;\n  --background: black;\n  --color: white;\n  --border-radius: 50px;\n  --box-shadow: none;\n}\n.blog-post {\n  height: auto;\n  background: linear-gradient(118deg, #320534 1%, rgba(48, 7, 55, 0.5) 25%, #320534 50%, rgba(38, 7, 42, 0.5) 75%, #320534 100%);\n  background-attachment: fixed;\n  box-shadow: 1px 1px 13px #00000094;\n  padding: 25px;\n  transition: 0.5s;\n  margin: 2em 0;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n}\n.blog-post ion-toolbar {\n  font-size: 1.4em;\n  font-weight: 800;\n  background: #1d071f;\n  border-radius: 10px;\n}\n.blog-post ion-toolbar .section-header {\n  font-family: Ayuthaya;\n  font-size: 1.4em;\n  color: white;\n}\n.blog-post .green-button {\n  margin: 0;\n}\n.blog-post .blog-info {\n  display: inline-block;\n}\n.blog-post .blog-thumbnail {\n  width: 100%;\n  border-radius: 100px;\n  margin-right: 2.5em;\n}\n.blog-post .blog-date {\n  color: #999;\n  margin: 0 0;\n  opacity: 0.6;\n}\n.blog-post .blog-title {\n  margin: 0 0;\n  color: white;\n  font-size: 1.2em;\n}\n@media only screen and (max-width: 645px) {\n  .blog-post .blog-title {\n    font-size: 1em;\n  }\n}\n.blog-post .blog-hashtags {\n  margin: 0 0;\n  color: #3df63d;\n}\n.latest-projects {\n  height: auto;\n  padding: 1em 0;\n  margin: 0;\n}\n.latest-projects ion-toolbar {\n  font-size: 1.4em;\n  font-weight: 800;\n  background: #1d071f;\n  border-radius: 10px;\n}\n.latest-projects ion-toolbar .section-header {\n  font-family: Ayuthaya;\n  font-size: 1.4em;\n  color: white;\n}\n.latest-projects ion-toolbar > ion-buttons > .grey-button {\n  width: 150px;\n  display: block;\n  margin: 30px 0;\n  --background: black;\n  --color: white;\n  --border-radius: 50px;\n  --box-shadow: none;\n}\n.latest-projects h2 {\n  color: white;\n  font-size: 3em;\n  margin: 2em 0;\n  border-bottom: 2px solid white;\n  padding-bottom: 0.5em;\n}\n.latest-projects .logo {\n  background: blue;\n  height: 400px;\n}\n.latest-projects .description {\n  box-shadow: 1px 1px 28px #161616;\n  border-radius: 15px;\n  height: 400px;\n}\n.project-post {\n  height: auto;\n  background: linear-gradient(118deg, #320534 1%, rgba(48, 7, 55, 0.5) 25%, #320534 50%, rgba(38, 7, 42, 0.5) 75%, #320534 100%);\n  background-attachment: fixed;\n  box-shadow: 1px 1px 13px #00000094;\n  padding: 25px;\n  transition: 0.5s;\n  margin: 2em 0;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n}\n.project-post .project-thumbnail {\n  width: 100%;\n  border-radius: 100px;\n  margin-right: 2.5em;\n}\n.project-post .project-title {\n  margin: 0 0 0.5em 0;\n  color: #3df63d;\n  font-size: 1.6em;\n}\n.project-post .project-description {\n  margin: 0 0;\n  color: white;\n  font-size: 1em;\n}\n@media only screen and (max-width: 645px) {\n  .project-post .project-title {\n    font-size: 1.2em;\n  }\n  .project-post .project-description {\n    font-size: 1em;\n  }\n}\n#footer {\n  background: #000000d1;\n  height: 600px;\n  margin-top: 4em;\n  padding: 6em 0em 3em 0em;\n}\n#footer #footer-logo {\n  width: 100px;\n}\n#footer #footer-buttons {\n  width: 150px;\n  display: inline-block;\n}\n#footer .footer-hr {\n  border-top: 5px solid #D3B900;\n  opacity: 0.4;\n  padding: 0;\n  width: 150px;\n}\n#footer #social-media {\n  margin-bottom: 1em;\n}\nion-toolbar {\n  --background: #ffffff17;\n  padding: 0.2em 1em;\n  border-radius: 5px;\n}\n.section-header {\n  font-size: 1.6em;\n  padding: 0;\n  color: #D3B900;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usd0RBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FBQ0Y7QUFBRTtFQUNFLGdCQUFBO0FBRUo7QUFBRTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsOEVBQUE7VUFBQSxzRUFBQTtBQUVKO0FBQ0U7RUFDRTtJQUNFLFVBQUE7SUFDQSw2QkFBQTtFQUNKO0VBQ0U7SUFDRSxVQUFBO0lBQ0EsMEJBQUE7RUFDSjtBQUNGO0FBVEU7RUFDRTtJQUNFLFVBQUE7SUFDQSw2QkFBQTtFQUNKO0VBQ0U7SUFDRSxVQUFBO0lBQ0EsMEJBQUE7RUFDSjtBQUNGO0FBQ0U7RUFFRSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUFBSjtBQUVFO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxvQkFBQTtFQUNBLGtDQUFBO0VBQ0Esd0JBQUE7QUFBSjtBQUdFO0VBQ0UsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFFQSxvQkFBQTtFQUNBLGlDQUFBO0FBRko7QUFJRTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7QUFGSjtBQUdJO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvRUFBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0FBRE47QUFHSTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0Esb0VBQUE7RUFDQSxjQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtBQUROO0FBSUU7RUFDRTtJQUNFLGFBQUE7SUFDQSxZQUFBO0VBRko7QUFDRjtBQUtBO0VBQ0U7SUFDRSxjQUFBO0VBRkY7QUFDRjtBQUtBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0FBSEY7QUFNQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtBQUhGO0FBTUE7RUFDRSw4SEFBQTtFQUNBLDRCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLDhCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FBSEY7QUFLRTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7QUFISjtBQUtFO0VBQ0UsY0FBQTtFQUNBLGNBQUE7QUFISjtBQU1BO0VBQ0U7SUFDRSxpQkFBQTtFQUhGO0VBSUU7SUFDRSxjQUFBO0lBQ0Esa0JBQUE7RUFGSjtBQUNGO0FBS0E7RUFDRTtJQUNFLGlCQUFBO0VBSEY7QUFDRjtBQUtBO0VBQ0UsYUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQUhGO0FBS0E7RUFDRSx3Q0FBQTtBQUZGO0FBSUE7RUFDRSw2Q0FBQTtBQURGO0FBR0E7RUFDRSw2Q0FBQTtBQUFGO0FBRUE7RUFFSTtJQUNFLGNBQUE7RUFBSjtBQUNGO0FBR0E7RUFDRTtJQUNFLFlBQUE7RUFERjs7RUFHQTtJQUNFLFdBQUE7SUFDQSxjQUFBO0lBQ0EsYUFBQTtJQUNBLG1CQUFBO0VBQUY7QUFDRjtBQUVBO0VBQ0UsWUFBQTtFQUNBLFlBQUE7QUFBRjtBQUVBO0VBQ0U7SUFDRSxZQUFBO0VBQ0Y7O0VBQ0E7SUFDRSxjQUFBO0VBRUY7O0VBQUE7SUFDRSxjQUFBO0VBR0Y7RUFGRTtJQUNFLHFCQUFBO0lBQ0EsWUFBQTtJQUNBLFlBQUE7SUFDQSxnQkFBQTtFQUlKO0VBRkU7SUFDRSxxQkFBQTtJQUNBLFlBQUE7SUFDQSxZQUFBO0lBQ0EsZ0JBQUE7RUFJSjtBQUNGO0FBQUE7RUFDRSxnREFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUFFRjtBQUFFO0VBQ0UsaUJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUFFSjtBQUNBO0VBQ0Usd0JBQUE7QUFFRjtBQUFBO0VBQ0UseUJBQUE7QUFHRjtBQUFBO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0FBR0Y7QUFDQTtFQUVFLFlBQUE7RUFDQSxjQUFBO0VBQ0EsU0FBQTtBQUNGO0FBRUU7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQUFKO0FBRUk7RUFDRSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQUFOO0FBSUU7RUFDSSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0FBRk47QUFLQTtFQUNFLFlBQUE7RUFDQSw4SEFBQTtFQUNBLDRCQUFBO0VBQ0Esa0NBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUFGRjtBQUlFO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUFGSjtBQUlJO0VBQ0UscUJBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUFGTjtBQU1FO0VBQ0UsU0FBQTtBQUpKO0FBUUU7RUFDRSxxQkFBQTtBQU5KO0FBUUU7RUFDRSxXQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtBQU5KO0FBUUU7RUFDRSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFOSjtBQVFFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQU5KO0FBU0U7RUFDRTtJQUNFLGNBQUE7RUFQSjtBQUNGO0FBU0U7RUFDRSxXQUFBO0VBQ0EsY0FBQTtBQVBKO0FBYUE7RUFFRSxZQUFBO0VBQ0EsY0FBQTtFQUNBLFNBQUE7QUFYRjtBQWFFO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUFYSjtBQWFJO0VBQ0UscUJBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUFYTjtBQWVFO0VBQ0UsWUFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtBQWJKO0FBZ0JFO0VBQ0UsWUFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxxQkFBQTtBQWRKO0FBZ0JFO0VBQ0UsZ0JBQUE7RUFDQSxhQUFBO0FBZEo7QUFnQkU7RUFFRSxnQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtBQWZKO0FBbUJBO0VBQ0UsWUFBQTtFQUNBLDhIQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQ0FBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQWhCRjtBQWtCRTtFQUNFLFdBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0FBaEJKO0FBa0JFO0VBQ0UsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUFoQko7QUFtQkU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7QUFqQko7QUFtQkU7RUFDRTtJQUNFLGdCQUFBO0VBakJKO0VBbUJFO0lBQ0UsY0FBQTtFQWpCSjtBQUNGO0FBc0JBO0VBQ0UscUJBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLHdCQUFBO0FBbkJGO0FBcUJFO0VBQ0UsWUFBQTtBQW5CSjtBQXFCRTtFQUNFLFlBQUE7RUFDQSxxQkFBQTtBQW5CSjtBQXFCRTtFQUNFLDZCQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0FBbkJKO0FBcUJFO0VBQ0Usa0JBQUE7QUFuQko7QUFzQkE7RUFDRSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUFuQkY7QUFxQkE7RUFDRSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0FBbEJGIiwiZmlsZSI6ImhvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2xhbmRpbmctcGFnZS1oZWFkZXIge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsICNmZmZmZmZlNSwgI2ZmZmZmZmU1KTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBwYWRkaW5nOiA1ZW0gMCA1ZW0gMDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW4tYm90dG9tOiA1ZW07XG4gIHNwYW4ge1xuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIH1cbiAgLmNhcHRpb24ge1xuICAgIG1hcmdpbjogMGVtIDBlbTtcbiAgICBmb250LXNpemU6IDEuNWVtO1xuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gICAgY29sb3I6ICMxZDA3MWY7XG4gICAgd2lkdGg6IDIzMHB4O1xuICAgIG9wYWNpdHk6IDA7XG4gICAgYW5pbWF0aW9uOiBzbGlkZS1pbiAxcyBjdWJpYy1iZXppZXIoMC45NSwgMC4wNSwgMC43OTUsIDAuMDM1KSBmb3J3YXJkcztcbiAgfVxuXG4gIEBrZXlmcmFtZXMgc2xpZGUtaW4ge1xuICAgIDAlIHtcbiAgICAgIG9wYWNpdHk6IDA7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTE1MHB4KTtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDBweCk7XG4gICAgfVxuICB9XG4gIC5oZWFkZXItaW5mby13cmFwcGVyIHtcbiAgICAvLyBiYWNrZ3JvdW5kOiAjMDAwMDAwNmI7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgcGFkZGluZzogMWVtO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgfVxuICAjaGVhZHNob3QtcGljdHVyZSB7XG4gICAgd2lkdGg6IDIwMHB4O1xuICAgIGhlaWdodDogMjAwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMjAwcHg7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8vLi4vLi4vYXNzZXRzL3Bob3RvLnBuZycpO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgfVxuXG4gICNoZWFkZXItbmFtZSB7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtc2l6ZTogMS43ZW07XG4gICAgbWFyZ2luOiAxZW0gYXV0bztcbiAgICBwYWRkaW5nOiA2cHg7XG4gICAgdHJhbnNpdGlvbjogNTAwbXM7XG4gICAgLy8gYm9yZGVyLXJhZGl1czogN3B4O1xuICAgIG1hcmdpbi1ib3R0b206IDAuNWVtO1xuICAgIGJveC1zaGFkb3c6IDFweCAxcHggM3B4ICMwMDAwMDA2ZTtcbiAgfVxuICAjaGVhZGVyLWJ1dHRvbnMge1xuICAgIG1hcmdpbjogM2VtIGF1dG87XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICNkb25hdGUtaGVhZGVyLWJ1dHRvbiB7XG4gICAgICB3aWR0aDogMjAwcHg7XG4gICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIG1hcmdpbjogMmVtIGF1dG87XG4gICAgICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgzNjBkZWcsICNEMDE4MDEgLTIlLCAjODEwYjAwLCAjRDAxODAxKTtcbiAgICAgIC0tY29sb3I6IHdoaXRlO1xuICAgICAgLS1ib3JkZXItcmFkaXVzOiA1MHB4O1xuICAgICAgLS1ib3gtc2hhZG93OiBub25lO1xuICAgIH1cbiAgICAjY29udGFjdC1oZWFkZXItYnV0dG9uIHtcbiAgICAgIHdpZHRoOiAyMDBweDtcbiAgICAgIGhlaWdodDogNDBweDtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgbWFyZ2luOiAyZW0gYXV0bztcbiAgICAgIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDM2MGRlZywgIzNkZjYzZCAtMiUsICMwMGI0MDAsICMzZGY2M2QpO1xuICAgICAgLS1jb2xvcjogd2hpdGU7XG4gICAgICAtLWJvcmRlci1yYWRpdXM6IDUwcHg7XG4gICAgICAtLWJveC1zaGFkb3c6IG5vbmU7XG4gICAgfVxuICB9XG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTEwMHB4KSB7XG4gICAgI2hlYWRlci1pbGx1c3RyYXRpb24ge1xuICAgICAgaGVpZ2h0OiA1MDBweDtcbiAgICAgIHdpZHRoOiA1MDBweDtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTAwcHgpIHtcbiAgI2xhbmRpbmctcGFnZS1oZWFkZXIge1xuICAgIHBhZGRpbmc6IDVlbSAwO1xuICB9XG59XG5cbiNib3R0b20tY3VydmUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMHB4O1xufVxuXG4jc2VydmljZXMge1xuICBoZWlnaHQ6IGF1dG87XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogLTEwMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAzZW0gMDtcblxufVxuLnNlcnZpY2UtY2FyZCB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMThkZWcsIHJnYmEoNTAsNSw1MiwxKSAxJSwgcmdiKDQ4IDcgNTUgLyA1MCUpIDI1JSwgcmdiYSg1MCw1LDUyLDEpIDUwJSwgcmdiKDM4IDcgNDIgLyA1MCUpIDc1JSwgcmdiYSg1MCw1LDUyLDEpIDEwMCUpO1xuICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xuICBtaW4taGVpZ2h0OiA2MDBweDtcbiAgbWFyZ2luOiAyZW0gYXV0bztcbiAgYm94LXNoYWRvdzogMXB4IDFweCAxMHB4ICMwMDAzO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHBhZGRpbmc6IDJlbTtcblxuICBwIHtcbiAgICBmb250LXNpemU6IDEuMWVtO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjVlbTtcbiAgfVxuICBoMyB7XG4gICAgY29sb3I6ICMzZGY2M2Q7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTAwcHgpIHtcbiAgLnNlcnZpY2UtY2FyZHtcbiAgICBtaW4taGVpZ2h0OiA0MDBweDtcbiAgICBwIHtcbiAgICAgIGZvbnQtc2l6ZTogMWVtO1xuICAgICAgbGluZS1oZWlnaHQ6IDEuM2VtO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTFweCkge1xuICAuc2VydmljZS1jYXJke1xuICAgIG1pbi1oZWlnaHQ6IDUwMHB4O1xuICB9XG59XG4jZGVzaWduLWljb24sICNkZXZlbG9wbWVudC1pY29uLCAjaW5zdHJ1Y3RpbmctaWNvbiB7XG4gIGhlaWdodDogMTAwcHg7XG4gIHdpZHRoOiAxMDBweDtcbiAgbWFyZ2luOiAwLjVlbSBhdXRvO1xufVxuI2Rlc2lnbi1pY29uIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi9hc3NldHMvaWNvbnMvZGVzaWduLWljb24uc3ZnJyk7XG59XG4jZGV2ZWxvcG1lbnQtaWNvbiB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vYXNzZXRzL2ljb25zL2RldmVsb3BtZW50LWljb24uc3ZnJyk7XG59XG4jaW5zdHJ1Y3RpbmctaWNvbiB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vYXNzZXRzL2ljb25zL2luc3RydWN0aW5nLWljb24uc3ZnJyk7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDQ1MHB4KSB7XG4gIGlvbi10b29sYmFyIHtcbiAgICAuc2VjdGlvbi1oZWFkZXIge1xuICAgICAgZm9udC1zaXplOiAyZW07XG4gICAgfVxuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gICNsYW5kaW5nLXBhZ2UtaGVhZGVyIHtcbiAgICBoZWlnaHQ6IGF1dG87XG4gIH1cbiAgI3NlcnZpY2VzIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiAzZW0gMDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIH1cbn1cbi5nb2xkLWJ1dHRvbiB7XG4gIHdpZHRoOiAxMDBweDtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMTAwcHgpIHtcbiAgI2xhbmRpbmctcGFnZS1oZWFkZXIge1xuICAgIGhlaWdodDogYXV0bztcbiAgfVxuICAjaGVhZHNob3QtcGljdHVyZSB7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gIH1cbiAgI2hlYWRlci1idXR0b25zIHtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICAuZ29sZC1idXR0b24ge1xuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgd2lkdGg6IDEyMHB4O1xuICAgICAgbWFyZ2luOiAxZW0gYXV0bztcbiAgICB9XG4gICAgLnJlZC1idXR0b24ge1xuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgd2lkdGg6IDEyMHB4O1xuICAgICAgbWFyZ2luOiAxZW0gYXV0bztcbiAgICB9XG4gIH1cbn1cblxuI2lsbHVzdHJhdGlvbi0xIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi9hc3NldHMvaWxsdXN0cmF0aW9ucy9ob21lLWlsbHVzdHJhdGlvbi0yLnN2ZycpO1xuICBoZWlnaHQ6IDMwMHB4O1xuICB3aWR0aDogMzUwcHg7XG4gIG1hcmdpbjogM2VtIGF1dG87XG4gIHBhZGRpbmc6IDNlbTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuXG4gIHAge1xuICAgIHBhZGRpbmc6IDI1cHggMHB4O1xuICAgIGZvbnQtc2l6ZTogMWVtO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjJlbTtcbiAgfVxufVxuI3lpbi15YW5nLXdyYXBwZXIge1xuICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXI7XG59XG4jeWluLXlhbmcge1xuICBtYXJnaW46IDBlbSBhdXRvIDVlbSBhdXRvO1xufVxuXG4uZ3JlZW4tbW9iaWxlLWJ1dHRvbiB7XG4gIGhlaWdodDogNTZweDtcbiAgd2lkdGg6IDMwMHB4O1xuICBtYXJnaW4tdG9wOiA2M3B4O1xuICAtLWJhY2tncm91bmQ6ICM2YmZmNmI2MTtcbiAgZm9udC1zaXplOiAxZW07XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyOiAzcHggc29saWQgIzNjZjYzYztcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4vLyBMYXRlc3QgQmxvZ3Ncbi5sYXRlc3QtYmxvZ3Mge1xuICAvLyBiYWNrZ3JvdW5kOiAjZjdmN2Y3O1xuICBoZWlnaHQ6IGF1dG87XG4gIHBhZGRpbmc6IDFlbSAwO1xuICBtYXJnaW46IDA7XG4gIC8vIHBhZGRpbmc6IDQwcHg7XG5cbiAgaW9uLXRvb2xiYXIge1xuICAgIGZvbnQtc2l6ZTogIDEuNGVtO1xuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XG4gICAgYmFja2dyb3VuZDogIzFkMDcxZjtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuXG4gICAgLnNlY3Rpb24taGVhZGVyIHtcbiAgICAgIGZvbnQtZmFtaWx5OiBBeXV0aGF5YTtcbiAgICAgIGZvbnQtc2l6ZTogIDEuNGVtO1xuICAgICAgY29sb3I6IHdoaXRlO1xuICAgIH1cbiAgfVxuXG4gIGlvbi10b29sYmFyID4gaW9uLWJ1dHRvbnMgPiAuZ3JleS1idXR0b24ge1xuICAgICAgd2lkdGg6IDE1MHB4O1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICBtYXJnaW46IDMwcHggMDtcbiAgICAgIC0tYmFja2dyb3VuZDogYmxhY2s7XG4gICAgICAtLWNvbG9yOiB3aGl0ZTtcbiAgICAgIC0tYm9yZGVyLXJhZGl1czogNTBweDtcbiAgICAgIC0tYm94LXNoYWRvdzogbm9uZTtcbiAgfVxufVxuLmJsb2ctcG9zdCB7XG4gIGhlaWdodDogYXV0bztcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDExOGRlZywgcmdiYSg1MCw1LDUyLDEpIDElLCByZ2IoNDggNyA1NSAvIDUwJSkgMjUlLCByZ2JhKDUwLDUsNTIsMSkgNTAlLCByZ2IoMzggNyA0MiAvIDUwJSkgNzUlLCByZ2JhKDUwLDUsNTIsMSkgMTAwJSk7XG4gIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XG4gIGJveC1zaGFkb3c6IDFweCAxcHggMTNweCAjMDAwMDAwOTQ7XG4gIHBhZGRpbmc6IDI1cHg7XG4gIHRyYW5zaXRpb246IDAuNXM7XG4gIG1hcmdpbjogMmVtIDA7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgaW9uLXRvb2xiYXIge1xuICAgIGZvbnQtc2l6ZTogIDEuNGVtO1xuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XG4gICAgYmFja2dyb3VuZDogIzFkMDcxZjtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuXG4gICAgLnNlY3Rpb24taGVhZGVyIHtcbiAgICAgIGZvbnQtZmFtaWx5OiBBeXV0aGF5YTtcbiAgICAgIGZvbnQtc2l6ZTogIDEuNGVtO1xuICAgICAgY29sb3I6IHdoaXRlO1xuICAgIH1cbiAgfVxuXG4gIC5ncmVlbi1idXR0b24ge1xuICAgIG1hcmdpbjogMDtcbiAgfVxuICBcblxuICAuYmxvZy1pbmZvIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIH1cbiAgLmJsb2ctdGh1bWJuYWlsIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3JkZXItcmFkaXVzOiAxMDBweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDIuNWVtO1xuICB9XG4gIC5ibG9nLWRhdGUge1xuICAgIGNvbG9yOiAjOTk5O1xuICAgIG1hcmdpbjogMCAwO1xuICAgIG9wYWNpdHk6IDAuNjtcbiAgfVxuICAuYmxvZy10aXRsZSB7XG4gICAgbWFyZ2luOiAwIDA7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtc2l6ZTogMS4yZW07XG5cbiAgfVxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY0NXB4KSB7XG4gICAgLmJsb2ctdGl0bGUge1xuICAgICAgZm9udC1zaXplOiAxZW07XG4gICAgfVxuICB9XG4gIC5ibG9nLWhhc2h0YWdzIHtcbiAgICBtYXJnaW46IDAgMDtcbiAgICBjb2xvcjogIzNkZjYzZDtcbiAgfVxufVxuXG5cbi8vIExhdGVzdCBQcm9qZWN0XG4ubGF0ZXN0LXByb2plY3RzIHtcbiAgLy8gYmFja2dyb3VuZDogIzIyMjtcbiAgaGVpZ2h0OiBhdXRvO1xuICBwYWRkaW5nOiAxZW0gMDtcbiAgbWFyZ2luOiAwO1xuXG4gIGlvbi10b29sYmFyIHtcbiAgICBmb250LXNpemU6ICAxLjRlbTtcbiAgICBmb250LXdlaWdodDogODAwO1xuICAgIGJhY2tncm91bmQ6ICMxZDA3MWY7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcblxuICAgIC5zZWN0aW9uLWhlYWRlciB7XG4gICAgICBmb250LWZhbWlseTogQXl1dGhheWE7XG4gICAgICBmb250LXNpemU6ICAxLjRlbTtcbiAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB9XG4gIH1cblxuICBpb24tdG9vbGJhciA+IGlvbi1idXR0b25zID4gLmdyZXktYnV0dG9uIHtcbiAgICB3aWR0aDogMTUwcHg7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luOiAzMHB4IDA7XG4gICAgLS1iYWNrZ3JvdW5kOiBibGFjaztcbiAgICAtLWNvbG9yOiB3aGl0ZTtcbiAgICAtLWJvcmRlci1yYWRpdXM6IDUwcHg7XG4gICAgLS1ib3gtc2hhZG93OiBub25lO1xufVxuXG4gIGgyIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1zaXplOiAzZW07XG4gICAgbWFyZ2luOiAyZW0gMDtcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgd2hpdGU7XG4gICAgcGFkZGluZy1ib3R0b206IDAuNWVtO1xuICB9XG4gIC5sb2dvIHtcbiAgICBiYWNrZ3JvdW5kOiBibHVlO1xuICAgIGhlaWdodDogNDAwcHg7XG4gIH1cbiAgLmRlc2NyaXB0aW9uIHtcbiAgICAvLyBiYWNrZ3JvdW5kOiAjMjIyO1xuICAgIGJveC1zaGFkb3c6IDFweCAxcHggMjhweCAjMTYxNjE2O1xuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gICAgaGVpZ2h0OiA0MDBweDtcbiAgfVxuICAvLyBwYWRkaW5nOiA0MHB4O1xufVxuLnByb2plY3QtcG9zdCB7XG4gIGhlaWdodDogYXV0bztcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDExOGRlZywgcmdiYSg1MCw1LDUyLDEpIDElLCByZ2IoNDggNyA1NSAvIDUwJSkgMjUlLCByZ2JhKDUwLDUsNTIsMSkgNTAlLCByZ2IoMzggNyA0MiAvIDUwJSkgNzUlLCByZ2JhKDUwLDUsNTIsMSkgMTAwJSk7XG4gIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XG4gIGJveC1zaGFkb3c6IDFweCAxcHggMTNweCAjMDAwMDAwOTQ7XG4gIHBhZGRpbmc6IDI1cHg7XG4gIHRyYW5zaXRpb246IDAuNXM7XG4gIG1hcmdpbjogMmVtIDA7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgLnByb2plY3QtdGh1bWJuYWlsIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3JkZXItcmFkaXVzOiAxMDBweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDIuNWVtO1xuICB9XG4gIC5wcm9qZWN0LXRpdGxlIHtcbiAgICBtYXJnaW46IDAgMCAwLjVlbSAwO1xuICAgIGNvbG9yOiAjM2RmNjNkO1xuICAgIGZvbnQtc2l6ZTogMS42ZW07XG5cbiAgfVxuICAucHJvamVjdC1kZXNjcmlwdGlvbiB7XG4gICAgbWFyZ2luOiAwIDA7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtc2l6ZTogMWVtO1xuICB9XG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjQ1cHgpIHtcbiAgICAucHJvamVjdC10aXRsZSB7XG4gICAgICBmb250LXNpemU6IDEuMmVtO1xuICAgIH1cbiAgICAucHJvamVjdC1kZXNjcmlwdGlvbiB7XG4gICAgICBmb250LXNpemU6IDFlbTtcbiAgICB9XG4gIH1cblxufVxuXG4jZm9vdGVyIHtcbiAgYmFja2dyb3VuZDogIzAwMDAwMGQxO1xuICBoZWlnaHQ6IDYwMHB4O1xuICBtYXJnaW4tdG9wOiA0ZW07XG4gIHBhZGRpbmc6IDZlbSAwZW0gM2VtIDBlbTtcblxuICAjZm9vdGVyLWxvZ28ge1xuICAgIHdpZHRoOiAxMDBweDtcbiAgfVxuICAjZm9vdGVyLWJ1dHRvbnMge1xuICAgIHdpZHRoOiAxNTBweDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIH1cbiAgLmZvb3Rlci1ociB7XG4gICAgYm9yZGVyLXRvcDogNXB4IHNvbGlkICNEM0I5MDA7XG4gICAgb3BhY2l0eTogMC40O1xuICAgIHBhZGRpbmc6IDA7XG4gICAgd2lkdGg6IDE1MHB4O1xuICB9XG4gICNzb2NpYWwtbWVkaWEge1xuICAgIG1hcmdpbi1ib3R0b206IDFlbTtcbiAgfVxufVxuaW9uLXRvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6ICNmZmZmZmYxNztcbiAgcGFkZGluZzogMC4yZW0gMWVtO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG4uc2VjdGlvbi1oZWFkZXJ7XG4gIGZvbnQtc2l6ZTogMS42ZW07XG4gIHBhZGRpbmc6IDA7XG4gIGNvbG9yOiAjRDNCOTAwO1xufSJdfQ== */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_home_home_module_ts-es2015.js.map