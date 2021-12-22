"use strict";
(self["webpackChunkeddietaliaferro_com"] = self["webpackChunkeddietaliaferro_com"] || []).push([["src_app_admin_projects_projects_module_ts"],{

/***/ 59237:
/*!***********************************************************!*\
  !*** ./src/app/admin/projects/projects-routing.module.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProjectsPageRoutingModule": function() { return /* binding */ ProjectsPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _projects_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projects.page */ 67255);




const routes = [
    {
        path: '',
        component: _projects_page__WEBPACK_IMPORTED_MODULE_0__.ProjectsPage
    },
    {
        path: 'add-projects',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_admin_projects_add-projects_add-projects_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./add-projects/add-projects.module */ 55437)).then(m => m.AddProjectsPageModule)
    },
    {
        path: 'edit-projects/:id',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_admin_projects_edit-projects_edit-projects_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./edit-projects/edit-projects.module */ 44885)).then(m => m.EditProjectsPageModule)
    }
];
let ProjectsPageRoutingModule = class ProjectsPageRoutingModule {
};
ProjectsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ProjectsPageRoutingModule);



/***/ }),

/***/ 93041:
/*!***************************************************!*\
  !*** ./src/app/admin/projects/projects.module.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProjectsPageModule": function() { return /* binding */ ProjectsPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 7602);
/* harmony import */ var _projects_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projects-routing.module */ 59237);
/* harmony import */ var _projects_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projects.page */ 67255);







let ProjectsPageModule = class ProjectsPageModule {
};
ProjectsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _projects_routing_module__WEBPACK_IMPORTED_MODULE_0__.ProjectsPageRoutingModule
        ],
        declarations: [_projects_page__WEBPACK_IMPORTED_MODULE_1__.ProjectsPage]
    })
], ProjectsPageModule);



/***/ }),

/***/ 67255:
/*!*************************************************!*\
  !*** ./src/app/admin/projects/projects.page.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProjectsPage": function() { return /* binding */ ProjectsPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _Users_ferro_Desktop_personal_website_eddietaliaferro_com_node_modules_ngtools_webpack_src_loaders_direct_resource_js_projects_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./projects.page.html */ 261);
/* harmony import */ var _projects_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projects.page.scss */ 65668);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 7602);
/* harmony import */ var src_app_services_emitters_admin_project_emitter_admin_project_emitter_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/emitters/admin-project-emitter/admin-project-emitter.service */ 6862);
/* harmony import */ var src_app_services_project_project_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/project/project.service */ 64439);








let ProjectsPage = class ProjectsPage {
    constructor(router, projectService, loadingController, toastController, adminProjectEmitterService, alert) {
        this.router = router;
        this.projectService = projectService;
        this.loadingController = loadingController;
        this.toastController = toastController;
        this.adminProjectEmitterService = adminProjectEmitterService;
        this.alert = alert;
    }
    ngOnInit() {
        // When a blog is added on the Add Blog page, refresh this page.
        if (this.adminProjectEmitterService.subsVar == undefined) {
            this.adminProjectEmitterService.subsVar = this.adminProjectEmitterService.invokeAdminProjectsPageRefresh.subscribe(() => {
                this.getProjects();
            });
            this.getProjects();
        }
    }
    getProjects() {
        this.projectService.getProjects().subscribe(projects => {
            console.log(projects);
            return this.allProjects = projects;
        });
    }
    addProject() {
        this.router.navigateByUrl('/admin/projects/add-projects');
    }
    deleteAlert(projectID) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alert.create({
                cssClass: 'my-custom-class',
                header: 'Delete Project',
                message: 'Are you sure you want to Delete this Project? It cannot be undone.',
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        cssClass: 'secondary',
                    },
                    {
                        text: 'Delete',
                        cssClass: 'alert-delete-button',
                        handler: (blah) => {
                            console.log(projectID);
                            this.projectService.deleteProject(projectID).subscribe(updatedProjects => {
                                this.presentLoading(updatedProjects);
                                this.allProjects = updatedProjects;
                                this.deleteProjectToast();
                            });
                        }
                    }
                ]
            });
            yield alert.present();
            const { role } = yield alert.onDidDismiss();
            console.log('onDidDismiss resolved with role', role);
        });
    }
    presentLoading(updatedProjects) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                cssClass: 'my-custom-class',
                duration: 1000
            });
            yield loading.present();
            yield loading.onDidDismiss().then(() => {
                console.log(updatedProjects);
            });
        });
    }
    deleteProjectToast() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: 'Deleted Blog!',
                cssClass: 'danger-toast',
                position: 'top',
                duration: 2000
            });
            toast.present();
        });
    }
    editProject(id) {
        this.router.navigate(['/admin/projects/edit-projects', id]);
    }
    visibleToggle(event, blogID, title, visible) {
        console.log(event);
        let checked = event.detail.checked;
        if (checked === true) {
            console.log('The Blog is Visible');
            this.projectService.projectVisibility(blogID, title, visible)
                .subscribe(data => {
                console.log(data);
            });
        }
        else if (checked === false) {
            console.log('The Blog is NOT Visible');
            this.projectService.projectVisibility(blogID, title, visible)
                .subscribe(data => {
                console.log(data);
            });
        }
        else {
            return Error('There was an error with making toggling the Blogs visibility.');
        }
    }
};
ProjectsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: src_app_services_project_project_service__WEBPACK_IMPORTED_MODULE_3__.ProjectService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.LoadingController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ToastController },
    { type: src_app_services_emitters_admin_project_emitter_admin_project_emitter_service__WEBPACK_IMPORTED_MODULE_2__.AdminProjectEmitterService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.AlertController }
];
ProjectsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-projects',
        template: _Users_ferro_Desktop_personal_website_eddietaliaferro_com_node_modules_ngtools_webpack_src_loaders_direct_resource_js_projects_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_projects_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], ProjectsPage);



/***/ }),

/***/ 6862:
/*!******************************************************************************************!*\
  !*** ./src/app/services/emitters/admin-project-emitter/admin-project-emitter.service.ts ***!
  \******************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminProjectEmitterService": function() { return /* binding */ AdminProjectEmitterService; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);


let AdminProjectEmitterService = class AdminProjectEmitterService {
    constructor() {
        this.invokeAdminProjectsPageRefresh = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    }
    resetAdminProjects() {
        console.log('Reseting Admin Projects Page');
        this.invokeAdminProjectsPageRefresh.emit();
    }
};
AdminProjectEmitterService.ctorParameters = () => [];
AdminProjectEmitterService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable)({
        providedIn: 'root'
    })
], AdminProjectEmitterService);



/***/ }),

/***/ 261:
/*!******************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/admin/projects/projects.page.html ***!
  \******************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n  <ion-grid>\n    <ion-row style=\"margin-top: 3em;\" class=\"ion-justify-content-center\">\n      <ion-col id=\"header-button\" size-xs=\"11\" size-sm=\"9\" size-md=\"8\" size-lg=\"8\">\n        <ion-button class=\"green-button\" (click)=\"addProject()\">\n          <ion-icon slot=\"start\" name=\"add\"></ion-icon>\n          Add Project\n        </ion-button>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"ion-justify-content-center\">\n      <ion-col size-xs=\"11\" size-sm=\"9\" size-md=\"8\" size-lg=\"8\">\n        <ion-row *ngFor=\"let project of allProjects\" class=\"project-post\">\n          <ion-col size-xs=\"2\" size-sm=\"2\" size-lg=\"2\">\n            <img src=\"{{project.thumbnail}}\" alt=\"Project Post Thumbnail\" class=\"project-thumbnail\">\n          </ion-col>\n          <ion-col size-xs=\"10\" size-sm=\"10\" size-lg=\"7\" class=\"project-info\">\n            <h1 class=\"project-title\">{{project.title}}</h1>\n            <h3 class=\"project-descrtion\">{{project.description}}</h3>\n            <p style=\"display: inline;\">Visible</p>\n            <ion-toggle checked=\"{{project.visible}}\" (ionChange)=\"visibleToggle($event, project._id, project.title, project.visible)\"></ion-toggle>\n          </ion-col>\n          <ion-col size-xs=\"11\" size-sm=\"11\" size-lg=\"3\" class=\"view-page-button ion-text-center\">\n            <!-- <ion-button class=\"purple-button\" (click)=\"viewProject()\">\n              View\n            </ion-button> -->\n            <ion-button class=\"gold-button\" (click)=\"editProject(project._id)\">\n              Edit\n            </ion-button>\n            <ion-button class=\"red-button\" (click)=\"deleteAlert(project._id)\">\n              Delete\n            </ion-button>\n          </ion-col>\n        </ion-row>\n      </ion-col>\n    </ion-row>\n\n    <!-- Mobile Admin Tabbar -->\n    <ion-row class=\"admin-mobile-tab ion-hide-lg-up\">\n      <ion-col class=\"ion-text-center\" size=\"3\">\n        <a routerLink=\"/admin/blogs\" routerLinkActive=\"active-link\">Blogs</a>\n      </ion-col>\n      <ion-col class=\"ion-text-center\" size=\"3\">\n        <a routerLink=\"/admin/projects\" routerLinkActive=\"active-link\">Projects</a>\n      </ion-col>\n      <ion-col class=\"ion-text-center\" size=\"3\">\n        <a routerLink=\"/admin/contact\" routerLinkActive=\"active-link\">Contact</a>\n      </ion-col>\n      <ion-col class=\"ion-text-center\" size=\"3\">\n        <a routerLink=\"/admin/donate\" routerLinkActive=\"active-link\">Donate</a>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>");

/***/ }),

/***/ 65668:
/*!***************************************************!*\
  !*** ./src/app/admin/projects/projects.page.scss ***!
  \***************************************************/
/***/ (function(module) {

module.exports = "ion-grid {\n  background-image: url('Matrix-Background.svg');\n  background-attachment: fixed;\n  background-size: cover;\n  --color: white;\n  height: 100vh;\n}\n\n@media only screen and (max-width: 600px) {\n  ion-grid {\n    background-image: url('Matrix-Background.svg');\n    background-size: cover;\n    background-repeat: no-repeat;\n  }\n}\n\n.picture-preview {\n  display: block;\n  margin-top: 3em;\n  -webkit-animation: preview-slide-in 0.5s ease-in forwards;\n          animation: preview-slide-in 0.5s ease-in forwards;\n}\n\n@-webkit-keyframes preview-slide-in {\n  0% {\n    opacity: 0;\n    transform: translateX(-20px);\n  }\n  100% {\n    opacity: 1;\n    transform: translateX(0px);\n  }\n}\n\n@keyframes preview-slide-in {\n  0% {\n    opacity: 0;\n    transform: translateX(-20px);\n  }\n  100% {\n    opacity: 1;\n    transform: translateX(0px);\n  }\n}\n\n#header-button {\n  margin-top: 40px;\n  border-bottom: #333 solid 2px;\n}\n\n.project-post {\n  height: auto;\n  background: linear-gradient(118deg, #320534 1%, rgba(48, 7, 55, 0.5) 25%, #320534 50%, rgba(38, 7, 42, 0.5) 75%, #320534 100%);\n  padding: 8px 25px;\n  transition: 0.5s;\n  border-radius: 10px;\n  border-left: 16px solid #1d071f;\n  display: flex;\n  align-items: center;\n}\n\n.project-post ion-toolbar {\n  font-size: 1.4em;\n  font-weight: 800;\n  margin: 2.5em 0;\n  --background: #1805199e;\n  border-radius: 5px;\n  padding: 0em 1em;\n}\n\n.project-post .green-button {\n  margin: 0;\n}\n\n.project-post .project-info {\n  display: inline-block;\n}\n\n.project-post .project-thumbnail {\n  width: 100%;\n  border-radius: 100px;\n  margin-right: 2.5em;\n}\n\n.project-post .project-date {\n  color: #999;\n  margin: 0 0;\n  opacity: 0.6;\n}\n\n.project-post .project-title {\n  margin: 0 0;\n  color: #3df63d;\n  font-size: 1.2em;\n}\n\n.project-post .project-description {\n  margin: 0 0;\n  color: white;\n}\n\n.project-post ion-toggle {\n  position: relative;\n  top: 12px;\n  --background: #000;\n  --background-checked: #999;\n  --handle-background: #777;\n  --handle-background-checked: #3df63d;\n}\n\n@media only screen and (max-width: 600px) {\n  .project-post .project-thumbnail {\n    width: 100%;\n    margin-right: 0.75em;\n  }\n  .project-post .green-button {\n    margin-top: 3em;\n  }\n  .project-post .project-post:hover {\n    margin: 2.3em 0;\n    background: #1805199e;\n    border-left: none;\n  }\n}\n\n.active-link {\n  color: #3df63d;\n  padding-left: 0.3em;\n  padding-bottom: 4px;\n  font-weight: 600;\n  transition: 0.5s;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDhDQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0FBQ0Y7O0FBQ0E7RUFDRTtJQUNFLDhDQUFBO0lBQ0Esc0JBQUE7SUFDQSw0QkFBQTtFQUVGO0FBQ0Y7O0FBQUE7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLHlEQUFBO1VBQUEsaURBQUE7QUFFRjs7QUFBQTtFQUNFO0lBQ0UsVUFBQTtJQUNBLDRCQUFBO0VBR0Y7RUFEQTtJQUNFLFVBQUE7SUFDQSwwQkFBQTtFQUdGO0FBQ0Y7O0FBWEE7RUFDRTtJQUNFLFVBQUE7SUFDQSw0QkFBQTtFQUdGO0VBREE7SUFDRSxVQUFBO0lBQ0EsMEJBQUE7RUFHRjtBQUNGOztBQURBO0VBQ0UsZ0JBQUE7RUFDQSw2QkFBQTtBQUdGOztBQUFBO0VBQ0UsWUFBQTtFQUNBLDhIQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsK0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUFHRjs7QUFERTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBR0o7O0FBRUU7RUFDRSxTQUFBO0FBQUo7O0FBR0U7RUFDRSxxQkFBQTtBQURKOztBQUdFO0VBQ0UsV0FBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7QUFESjs7QUFHRTtFQUNFLFdBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQURKOztBQUdFO0VBQ0UsV0FBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQURKOztBQUdFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUFESjs7QUFHRTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0VBQ0EsMEJBQUE7RUFDQSx5QkFBQTtFQUNBLG9DQUFBO0FBREo7O0FBSUE7RUFFSTtJQUNFLFdBQUE7SUFDQSxvQkFBQTtFQUZKO0VBSUU7SUFDRSxlQUFBO0VBRko7RUFJRTtJQUNFLGVBQUE7SUFDQSxxQkFBQTtJQUNBLGlCQUFBO0VBRko7QUFDRjs7QUFLQTtFQUNFLGNBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQUhGIiwiZmlsZSI6InByb2plY3RzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1ncmlkIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi9hc3NldHMvaWxsdXN0cmF0aW9ucy9NYXRyaXgtQmFja2dyb3VuZC5zdmcnKTtcbiAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgLS1jb2xvcjogd2hpdGU7XG4gIGhlaWdodDogMTAwdmg7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIGlvbi1ncmlkIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9pbGx1c3RyYXRpb25zL01hdHJpeC1CYWNrZ3JvdW5kLnN2ZycpO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgfVxufVxuLnBpY3R1cmUtcHJldmlldyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tdG9wOiAzZW07XG4gIGFuaW1hdGlvbjogcHJldmlldy1zbGlkZS1pbiAwLjVzIGVhc2UtaW4gZm9yd2FyZHM7XG59XG5Aa2V5ZnJhbWVzIHByZXZpZXctc2xpZGUtaW4ge1xuICAwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTIwcHgpO1xuICB9XG4gIDEwMCUge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDBweCk7XG4gIH1cbn1cbiNoZWFkZXItYnV0dG9uIHtcbiAgbWFyZ2luLXRvcDogNDBweDtcbiAgYm9yZGVyLWJvdHRvbTogIzMzMyBzb2xpZCAycHg7XG59XG5cbi5wcm9qZWN0LXBvc3Qge1xuICBoZWlnaHQ6IGF1dG87XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMThkZWcsIHJnYmEoNTAsNSw1MiwxKSAxJSwgcmdiKDQ4IDcgNTUgLyA1MCUpIDI1JSwgcmdiYSg1MCw1LDUyLDEpIDUwJSwgcmdiKDM4IDcgNDIgLyA1MCUpIDc1JSwgcmdiYSg1MCw1LDUyLDEpIDEwMCUpOztcbiAgcGFkZGluZzogOHB4IDI1cHg7XG4gIHRyYW5zaXRpb246IDAuNXM7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJvcmRlci1sZWZ0OiAxNnB4IHNvbGlkICMxZDA3MWY7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgaW9uLXRvb2xiYXIge1xuICAgIGZvbnQtc2l6ZTogIDEuNGVtO1xuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XG4gICAgbWFyZ2luOiAyLjVlbSAwO1xuICAgIC0tYmFja2dyb3VuZDogIzE4MDUxOTllO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBwYWRkaW5nOiAwZW0gMWVtO1xuXG4gICAgLy8gYmFja2dyb3VuZDogIzAwMmEwMDtcbiAgfVxuXG4gIC5ncmVlbi1idXR0b24ge1xuICAgIG1hcmdpbjogMDtcbiAgfVxuXG4gIC5wcm9qZWN0LWluZm8ge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgfVxuICAucHJvamVjdC10aHVtYm5haWwge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xuICAgIG1hcmdpbi1yaWdodDogMi41ZW07XG4gIH1cbiAgLnByb2plY3QtZGF0ZSB7XG4gICAgY29sb3I6ICM5OTk7XG4gICAgbWFyZ2luOiAwIDA7XG4gICAgb3BhY2l0eTogMC42O1xuICB9XG4gIC5wcm9qZWN0LXRpdGxlIHtcbiAgICBtYXJnaW46IDAgMDtcbiAgICBjb2xvcjogIzNkZjYzZDtcbiAgICBmb250LXNpemU6IDEuMmVtO1xuICB9XG4gIC5wcm9qZWN0LWRlc2NyaXB0aW9uIHtcbiAgICBtYXJnaW46IDAgMDtcbiAgICBjb2xvcjogd2hpdGU7XG4gIH1cbiAgaW9uLXRvZ2dsZSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvcDogMTJweDtcbiAgICAtLWJhY2tncm91bmQ6ICMwMDA7XG4gICAgLS1iYWNrZ3JvdW5kLWNoZWNrZWQ6ICM5OTk7XG4gICAgLS1oYW5kbGUtYmFja2dyb3VuZDogIzc3NztcbiAgICAtLWhhbmRsZS1iYWNrZ3JvdW5kLWNoZWNrZWQ6ICMzZGY2M2Q7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgLnByb2plY3QtcG9zdCB7XG4gICAgLnByb2plY3QtdGh1bWJuYWlsIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgbWFyZ2luLXJpZ2h0OiAwLjc1ZW07XG4gICAgfVxuICAgIC5ncmVlbi1idXR0b24ge1xuICAgICAgbWFyZ2luLXRvcDogM2VtO1xuICAgIH1cbiAgICAucHJvamVjdC1wb3N0OmhvdmVyIHtcbiAgICAgIG1hcmdpbjogMi4zZW0gMDtcbiAgICAgIGJhY2tncm91bmQ6ICMxODA1MTk5ZTtcbiAgICAgIGJvcmRlci1sZWZ0OiBub25lO1xuICAgIH1cbiAgfVxufVxuLmFjdGl2ZS1saW5rIHtcbiAgY29sb3I6ICMzZGY2M2Q7XG4gIHBhZGRpbmctbGVmdDogMC4zZW07XG4gIHBhZGRpbmctYm90dG9tOiA0cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHRyYW5zaXRpb246IDAuNXM7XG59Il19 */";

/***/ })

}]);
//# sourceMappingURL=src_app_admin_projects_projects_module_ts-es2015.js.map