"use strict";
(self["webpackChunkeddietaliaferro_com"] = self["webpackChunkeddietaliaferro_com"] || []).push([["src_app_admin_blogs_edit-blog_edit-blog_module_ts"],{

/***/ 42306:
/*!*******************************************************************!*\
  !*** ./src/app/admin/blogs/edit-blog/edit-blog-routing.module.ts ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditBlogPageRoutingModule": function() { return /* binding */ EditBlogPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _edit_blog_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit-blog.page */ 23726);




const routes = [
    {
        path: '',
        component: _edit_blog_page__WEBPACK_IMPORTED_MODULE_0__.EditBlogPage
    }
];
let EditBlogPageRoutingModule = class EditBlogPageRoutingModule {
};
EditBlogPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], EditBlogPageRoutingModule);



/***/ }),

/***/ 17625:
/*!***********************************************************!*\
  !*** ./src/app/admin/blogs/edit-blog/edit-blog.module.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditBlogPageModule": function() { return /* binding */ EditBlogPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 7602);
/* harmony import */ var _edit_blog_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit-blog-routing.module */ 42306);
/* harmony import */ var _edit_blog_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit-blog.page */ 23726);







let EditBlogPageModule = class EditBlogPageModule {
};
EditBlogPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _edit_blog_routing_module__WEBPACK_IMPORTED_MODULE_0__.EditBlogPageRoutingModule
        ],
        declarations: [_edit_blog_page__WEBPACK_IMPORTED_MODULE_1__.EditBlogPage]
    })
], EditBlogPageModule);



/***/ }),

/***/ 23726:
/*!*********************************************************!*\
  !*** ./src/app/admin/blogs/edit-blog/edit-blog.page.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditBlogPage": function() { return /* binding */ EditBlogPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _Users_ferro_Desktop_personal_website_eddietaliaferro_com_node_modules_ngtools_webpack_src_loaders_direct_resource_js_edit_blog_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./edit-blog.page.html */ 47067);
/* harmony import */ var _edit_blog_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit-blog.page.scss */ 14144);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 7602);
/* harmony import */ var src_app_services_blog_blog_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/blog/blog.service */ 22036);
/* harmony import */ var src_app_services_emitters_admin_blog_emitter_admin_blog_emitter_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/emitters/admin-blog-emitter/admin-blog-emitter.service */ 97775);
/* harmony import */ var src_app_services_pictures_pictures_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/pictures/pictures.service */ 1311);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 18293);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 81134);












let EditBlogPage = class EditBlogPage {
    constructor(activatedRoute, router, formBuilder, toastController, blogService, adminBlogEmitterService, picturesService) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.formBuilder = formBuilder;
        this.toastController = toastController;
        this.blogService = blogService;
        this.adminBlogEmitterService = adminBlogEmitterService;
        this.picturesService = picturesService;
        this.picturesSection = false;
        this.codeSection = false;
        this.pictureOne = '<< picture-1 >>';
        this.pictureTwo = '<< picture-2 >>';
        this.pictureThree = '<< picture-3 >>';
        this.pictureFour = '<< picture-4 >>';
        this.pictureFive = '<< picture-5 >>';
    }
    ;
    ngOnInit() {
        const id = this.activatedRoute.snapshot.paramMap.get('id');
        this.id = id;
        this.editBlogForm = this.formBuilder.group({
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
            post: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required,]]
        });
        this.blogService.getBlogInfo(id).subscribe(blogInfo => {
            console.log(blogInfo);
            // Convert S3 URL to DataURL
            let xhr = new Promise((res, rej) => {
                var request = new XMLHttpRequest();
                request.open('GET', blogInfo['thumbnail'], true);
                request.responseType = 'blob';
                request.onload = function () {
                    var reader = new FileReader();
                    reader.readAsDataURL(request.response);
                    reader.onload = function (e) {
                        let convertOctetStreamToPNGImage = e.target.result.toString().replace('data:application/octet-stream', 'data:image/png');
                        res(convertOctetStreamToPNGImage);
                        rej('Something bad happened');
                        return;
                    };
                    return;
                };
                request.send();
            });
            xhr.then(data => {
                // console.log(data);
                this.thumbnailDataURL = data;
            });
            // Properly format Hashtags
            if (blogInfo['hashtags'][0]) {
                this.hashtagOne = blogInfo['hashtags'][0];
            }
            if (blogInfo['hashtags'][1]) {
                this.hashtagTwo = blogInfo['hashtags'][1];
            }
            if (blogInfo['hashtags'][2]) {
                this.hashtagThree = blogInfo['hashtags'][2];
            }
            if (blogInfo['hashtags'][3]) {
                this.hashtagFour = blogInfo['hashtags'][3];
            }
            if (blogInfo['hashtags'][4]) {
                this.hashtagFive = blogInfo['hashtags'][4];
            }
            if (blogInfo['hashtags'][0] === undefined) {
                this.hashtagOne = '';
            }
            if (blogInfo['hashtags'][1] === undefined) {
                this.hashtagTwo = '';
            }
            if (blogInfo['hashtags'][2] === undefined) {
                this.hashtagThree = '';
            }
            if (blogInfo['hashtags'][3] === undefined) {
                this.hashtagFour = '';
            }
            if (blogInfo['hashtags'][4] === undefined) {
                this.hashtagFive = '';
            }
            this.editBlogForm.patchValue({
                title: blogInfo['title'],
                post: blogInfo['post'],
                // thumbnail: this.formattedThumbailToDataURL,
                // Deleting # from beginning of tag
                // First chatacter is a space
                // Second character is hashtag
                hashtag_1: this.hashtagOne.substring(2),
                hashtag_2: this.hashtagTwo.substring(2),
                hashtag_3: this.hashtagThree.substring(2),
                hashtag_4: this.hashtagFour.substring(2),
                hashtag_5: this.hashtagFive.substring(2),
                code_1: blogInfo['code_1'],
                code_2: blogInfo['code_2'],
                code_3: blogInfo['code_3'],
                code_4: blogInfo['code_4'],
                code_5: blogInfo['code_5'],
                picture_1: blogInfo['picture_1'],
                picture_2: blogInfo['picture_2'],
                picture_3: blogInfo['picture_3'],
                picture_4: blogInfo['picture_4'],
                picture_5: blogInfo['picture_5'],
            });
        });
    }
    back() {
        this.router.navigateByUrl('/admin/blogs');
    }
    picturesSectionChange(e) {
        console.log(e.detail);
        if (e.detail.checked) {
            this.picturesSection = true;
        }
        else {
            this.picturesSection = false;
        }
    }
    codeSectionChange(e) {
        console.log(e.detail);
        if (e.detail.checked) {
            this.codeSection = true;
        }
        else {
            this.codeSection = false;
        }
    }
    viewBlog() {
        this.router.navigate(['/blog/blog-page', this.id]);
    }
    // Pictures
    // For each picture, get the DataURL of the file FIRST
    // When the blog is ready to be submitted, add them to S3 bucket
    // and get their links before adding the blog to the database
    getPictureOneFile(event) {
        this.editBlogForm.value.picture_1 = '';
        const pictureOne = document.getElementById('picture-1');
        let reader = new FileReader();
        if (pictureOne) {
            reader.readAsDataURL(event.target.files[0]);
        }
        reader.addEventListener('load', () => {
            // Convert image file ot base64 string
            this.pictureOneDataURL = reader.result;
            const formData = new FormData();
            let pictureOneFile = new File([this.dataURLtoBlob(this.pictureOneDataURL)], 'picture-1.png');
            formData.append('blog-picture', pictureOneFile);
            this.picturesService.blogPictureUpload(formData)
                .subscribe(pictureURL => {
                this.editBlogForm.value.picture_1 = pictureURL['objectUrl'];
            });
        }, false);
    }
    getPictureTwoFile(event) {
        this.editBlogForm.value.picture_2 = '';
        const pictureTwo = document.getElementById('picture-2');
        let reader = new FileReader();
        if (pictureTwo) {
            reader.readAsDataURL(event.target.files[0]);
        }
        reader.addEventListener('load', () => {
            // Convert image file ot base64 string
            this.pictureTwoDataURL = reader.result;
            console.log(this.pictureTwoDataURL);
            const formData = new FormData();
            let pictureTwoFile = new File([this.dataURLtoBlob(this.pictureTwoDataURL)], 'picture-2.png');
            formData.append('blog-picture', pictureTwoFile);
            this.picturesService.blogPictureUpload(formData)
                .subscribe(pictureURL => {
                console.log(pictureURL);
                return this.editBlogForm.value.picture_2 = pictureURL['objectUrl'];
            });
        }, false);
    }
    getPictureThreeFile(event) {
        this.editBlogForm.value.picture_3 = '';
        const pictureThree = document.getElementById('picture-3');
        let reader = new FileReader();
        if (pictureThree) {
            reader.readAsDataURL(event.target.files[0]);
        }
        reader.addEventListener('load', () => {
            // Convert image file ot base64 string
            this.pictureThreeDataURL = reader.result;
            console.log(this.pictureThreeDataURL);
            const formData = new FormData();
            let pictureThreeFile = new File([this.dataURLtoBlob(this.pictureThreeDataURL)], 'picture-3.png');
            formData.append('blog-picture', pictureThreeFile);
            this.picturesService.blogPictureUpload(formData)
                .subscribe(pictureURL => {
                return this.editBlogForm.value.picture_3 = pictureURL['objectUrl'];
            });
        }, false);
    }
    getPictureFourFile(event) {
        this.editBlogForm.value.picture_4 = '';
        const pictureFour = document.getElementById('picture-4');
        let reader = new FileReader();
        if (pictureFour) {
            reader.readAsDataURL(event.target.files[0]);
        }
        reader.addEventListener('load', () => {
            // Convert image file ot base64 string
            this.pictureFourDataURL = reader.result;
            console.log(this.pictureFourDataURL);
            const formData = new FormData();
            let pictureFourFile = new File([this.dataURLtoBlob(this.pictureFourDataURL)], 'picture-4.png');
            formData.append('blog-picture', pictureFourFile);
            this.picturesService.blogPictureUpload(formData)
                .subscribe(pictureURL => {
                this.editBlogForm.value.picture_4 = pictureURL['objectUrl'];
            });
        }, false);
    }
    getPictureFiveFile(event) {
        this.editBlogForm.value.picture_5 = '';
        const pictureFive = document.getElementById('picture-5');
        let reader = new FileReader();
        if (pictureFive) {
            reader.readAsDataURL(event.target.files[0]);
        }
        reader.addEventListener('load', () => {
            // Convert image file ot base64 string
            this.pictureFiveDataURL = reader.result;
            console.log(this.pictureFiveDataURL);
            const formData = new FormData();
            let pictureFiveFile = new File([this.dataURLtoBlob(this.pictureFiveDataURL)], 'picture-5.png');
            formData.append('blog-picture', pictureFiveFile);
            this.picturesService.blogPictureUpload(formData)
                .subscribe(pictureURL => {
                this.editBlogForm.value.picture_5 = pictureURL['objectUrl'];
            });
        }, false);
    }
    getThumbnailFile(event) {
        this.editBlogForm.value.thumbnail = '';
        const formElement = document.getElementById('thumbnail');
        let reader = new FileReader();
        if (formElement) {
            reader.readAsDataURL(event.target.files[0]);
        }
        reader.addEventListener('load', () => {
            // Convert image file ot base64 string
            this.thumbnailDataURL = reader.result;
            console.log(this.thumbnailDataURL);
        }, false);
    }
    dataURLtoBlob(dataurl) {
        // console.log(dataurl)
        const arr = dataurl.split(',');
        const mime = arr[0].match(/:(.*?);/)[1];
        const bstr = atob(arr[1]);
        let n = bstr.length;
        const u8arr = new Uint8Array(n);
        while (n--) {
            u8arr[n] = bstr.charCodeAt(n);
        }
        return new Blob([u8arr], { type: mime });
    }
    // Toasts
    notTitleToast() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: 'There was no Title',
                cssClass: 'danger-toast',
                position: 'top',
                duration: 2000
            });
            toast.present();
        });
    }
    notThumbnailToast() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: 'There was no Thumbnail',
                cssClass: 'danger-toast',
                position: 'top',
                duration: 2000
            });
            toast.present();
        });
    }
    errorToast() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: 'There was an Error',
                cssClass: 'danger-toast',
                position: 'top',
                duration: 2000
            });
            toast.present();
        });
    }
    notBlogContentToast() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: 'There was no Blog Toast',
                cssClass: 'danger-toast',
                position: 'top',
                duration: 2000
            });
            toast.present();
        });
    }
    successfulBlogSubmit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: 'Successfully added Blog!',
                cssClass: 'success-toast',
                position: 'top',
                duration: 2000
            });
            toast.present();
        });
    }
    submitBlogPost() {
        console.log('Getting Thumbnail S3 URL');
        const formData = new FormData();
        let thumbnailFile = new File([this.dataURLtoBlob(this.thumbnailDataURL)], 'thumbnail.png');
        formData.append('blog-thumbnail', thumbnailFile);
        this.picturesService.blogThumbnailUpload(formData)
            .subscribe(pictureURL => {
            this.thumbnailDataURL = '';
            this.editBlogForm.value.thumbnail = pictureURL['objectUrl'];
            if (!this.editBlogForm.value.title) {
                console.log('There was no Title');
                return this.notTitleToast();
            }
            if (!this.editBlogForm.value.thumbnail) {
                console.log('There was no Thumbnail');
                return this.notThumbnailToast();
            }
            if (!this.editBlogForm.value.post) {
                console.log('There was no Blog Content');
                return this.notBlogContentToast();
            }
            // For each picture that is added, get a link for that photo
            let formattedHashtags = [
                this.editBlogForm.value.hashtag_1,
                this.editBlogForm.value.hashtag_2,
                this.editBlogForm.value.hashtag_3,
                this.editBlogForm.value.hashtag_4,
                this.editBlogForm.value.hashtag_5
            ];
            let updatedBlog = {
                id: this.id,
                title: this.editBlogForm.value.title,
                thumbnail: this.editBlogForm.value.thumbnail,
                visible: false,
                hashtags: formattedHashtags.filter(item => item),
                post: this.editBlogForm.value.post,
                code_1: this.editBlogForm.value.code_1,
                code_2: this.editBlogForm.value.code_2,
                code_3: this.editBlogForm.value.code_3,
                code_4: this.editBlogForm.value.code_4,
                code_5: this.editBlogForm.value.code_5,
                picture_1: this.editBlogForm.value.picture_1,
                picture_2: this.editBlogForm.value.picture_2,
                picture_3: this.editBlogForm.value.picture_3,
                picture_4: this.editBlogForm.value.picture_4,
                picture_5: this.editBlogForm.value.picture_5,
            };
            console.log(updatedBlog);
            this.blogService.editBlog(updatedBlog)
                .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.catchError)((error) => {
                this.errorToast();
                (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.of)(`I caught: ${error.error}`);
                throw Error(error);
            }))
                .subscribe((data) => (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
                console.log(data);
                yield this.adminBlogEmitterService.resetAdminBlogs();
                yield this.successfulBlogSubmit();
                yield this.router.navigate(['/blog/blog-page', this.id]);
                return;
            }));
        });
    }
    ngOnDestroy() {
        console.log('Add Blog Page destroyed');
    }
};
EditBlogPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.ActivatedRoute },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.Router },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.ToastController },
    { type: src_app_services_blog_blog_service__WEBPACK_IMPORTED_MODULE_2__.BlogService },
    { type: src_app_services_emitters_admin_blog_emitter_admin_blog_emitter_service__WEBPACK_IMPORTED_MODULE_3__.AdminBlogEmitterService },
    { type: src_app_services_pictures_pictures_service__WEBPACK_IMPORTED_MODULE_4__.PicturesService }
];
EditBlogPage.propDecorators = {
    ngOnDestroy: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.HostListener, args: ['unloaded',] }]
};
EditBlogPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
        selector: 'app-edit-blog',
        template: _Users_ferro_Desktop_personal_website_eddietaliaferro_com_node_modules_ngtools_webpack_src_loaders_direct_resource_js_edit_blog_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_edit_blog_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], EditBlogPage);



/***/ }),

/***/ 47067:
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/admin/blogs/edit-blog/edit-blog.page.html ***!
  \**************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n  <ion-grid>\n    <ion-row style=\"height: 50px;\"></ion-row>\n    <ion-row class=\"ion-justify-content-center\">\n      <ion-col id=\"header-button\" size-lg=\"8\">\n        <ion-toolbar>\n          <ion-title>Edit Blog</ion-title>\n          <ion-buttons slot=\"end\">\n            <ion-button class=\"gold-button\" (click)=\"viewBlog()\">\n              View Blog\n            </ion-button>\n            <ion-button id=\"back-button\" style=\"--border-radius: 50px;\" class=\"grey-button\" (click)=\"back()\">\n              Back\n            </ion-button>\n          </ion-buttons>\n        </ion-toolbar>\n      </ion-col>\n      <ion-col size-lg=\"8\">\n        <form [formGroup]=\"editBlogForm\" (ngSubmit)=\"submitBlogPost()\">\n          <!-- Title -->\n          <h4 style=\"margin-top: 0em;\">Title</h4>\n          <ion-input placeholder=\"Title\" required formControlName=\"title\" type=\"text\"></ion-input>\n\n          <!-- Thumbnail -->\n          <h4>Thumbnail</h4>\n          <input id=\"thumbnail\" (change)=\"getThumbnailFile($event)\" name=\"blog-thumbnail\" placeholder=\"Title\"  type=\"file\"/><br>\n          <!-- ThumbnailDataURL is the updated picture -->\n          <img height=\"200\" class=\"picture-preview\" *ngIf=\"this.thumbnailDataURL\" src=\"{{this.thumbnailDataURL}}\">\n          <img height=\"200\" class=\"picture-preview\" *ngIf=\"this.editBlogForm.value.thumbnail\" src=\"{{this.editBlogForm.value.thumbnail}}\">\n\n\n          <!-- Hashtags -->\n          <h4>Hashtags</h4>\n          <ion-input style=\"width: 250px;\" placeholder=\"Hashtag 1\" formControlName=\"hashtag_1\" type=\"text\"></ion-input>\n          <ion-input style=\"width: 250px;\" placeholder=\"Hashtag 2\" formControlName=\"hashtag_2\" type=\"text\"></ion-input>\n          <ion-input style=\"width: 250px;\" placeholder=\"Hashtag 3\" formControlName=\"hashtag_3\" type=\"text\"></ion-input>\n          <ion-input style=\"width: 250px;\" placeholder=\"Hashtag 4\" formControlName=\"hashtag_4\" type=\"text\"></ion-input>\n          <ion-input style=\"width: 250px;\" placeholder=\"Hashtag 5\" formControlName=\"hashtag_5\" type=\"text\"></ion-input>\n\n          <!-- Pictures -->\n          <h2 id=\"pictures-checkbox\">\n            Pictures\n            <ion-checkbox style=\"float: right; position: relative; top: 6px;\" (ionChange)=\"picturesSectionChange($event)\"></ion-checkbox>\n          </h2>\n          <div *ngIf=\"this.picturesSection\" id=\"pictures-section\">\n            <h4 style=\"margin-top: 1em;\">Picture 1</h4>\n            <input id=\"picture-1\" (change)=\"getPictureOneFile($event)\" name=\"blog-picture\" type=\"file\" placeholder=\"Picture-1\" />\n            <img class=\"picture-preview\" *ngIf=\"this.pictureOneDataURL\" src=\"{{this.pictureOneDataURL}}\">\n            <img class=\"picture-preview\" *ngIf=\"this.editBlogForm.value.picture_1\" src=\"{{this.editBlogForm.value.picture_1}}\">\n\n            <h4>Picture 2</h4>\n            <input id=\"picture-2\" (change)=\"getPictureTwoFile($event)\" name=\"blog-picture\" type=\"file\" placeholder=\"Picture-2\" />\n            <img class=\"picture-preview\" *ngIf=\"this.pictureTwoDataURL\" src=\"{{this.pictureTwoDataURL}}\">\n            <img class=\"picture-preview\" *ngIf=\"this.editBlogForm.value.picture_2\" src=\"{{this.editBlogForm.value.picture_2}}\">\n\n            <h4>Picture 3</h4>\n            <input id=\"picture-3\" (change)=\"getPictureThreeFile($event)\" name=\"blog-picture\" type=\"file\" placeholder=\"Picture-3\" />\n            <img class=\"picture-preview\" *ngIf=\"this.pictureThreeDataURL\" src=\"{{this.pictureThreeDataURL}}\">\n            <img class=\"picture-preview\" *ngIf=\"this.editBlogForm.value.picture_3\" src=\"{{this.editBlogForm.value.picture_3}}\">\n\n            <h4>Picture 4</h4>\n            <input id=\"picture-4\" (change)=\"getPictureFourFile($event)\" name=\"blog-picture\" type=\"file\" placeholder=\"Picture-4\" />\n            <img class=\"picture-preview\" *ngIf=\"this.pictureFourDataURL\" src=\"{{this.pictureFourDataURL}}\">\n            <img class=\"picture-preview\" *ngIf=\"this.editBlogForm.value.picture_4\" src=\"{{this.editBlogForm.value.picture_4}}\">\n\n            <h4>Picture 5</h4>\n            <input id=\"picture-5\" (change)=\"getPictureFiveFile($event)\" name=\"blog-picture\"  type=\"file\" placeholder=\"Picture-5\" />\n            <img class=\"picture-preview\" *ngIf=\"this.pictureFiveDataURL\" src=\"{{this.pictureFiveDataURL}}\">\n            <img class=\"picture-preview\" *ngIf=\"this.editBlogForm.value.picture_5\" src=\"{{this.editBlogForm.value.picture_5}}\">\n            </div>\n\n          <!-- Code Snippets -->\n          <h2 id=\"code-checkbox\">\n            Code\n            <ion-checkbox style=\"float: right; position: relative; top: 6px;\"  (ionChange)=\"codeSectionChange($event)\"></ion-checkbox>\n          </h2>\n\n          <!-- Code Snippets -->\n          <div *ngIf=\"this.codeSection\" id=\"code-section\">\n            <h4 style=\"margin-top: 1em;\">Code Snippet 1</h4>\n            <ion-textarea rows=\"10\" autoGrow=\"true\" formControlName=\"code_1\" placeholder=\"Put code here:\"></ion-textarea>\n\n            <h4>Code Snippet 2</h4>\n            <ion-textarea rows=\"10\" autoGrow=\"true\" formControlName=\"code_2\" placeholder=\"Put code here:\"></ion-textarea>\n\n            <h4>Code Snippet 3</h4>\n            <ion-textarea rows=\"10\" autoGrow=\"true\" formControlName=\"code_3\" placeholder=\"Put code here:\"></ion-textarea>\n\n            <h4>Code Snippet 4</h4>\n            <ion-textarea rows=\"10\" autoGrow=\"true\" formControlName=\"code_4\" placeholder=\"Put code here:\"></ion-textarea>\n\n            <h4>Code Snippet 5</h4>\n            <ion-textarea rows=\"10\" autoGrow=\"true\" formControlName=\"code_5\" placeholder=\"Put code here:\"></ion-textarea>\n          </div>\n\n          <!-- Blog Post -->\n          <div style=\"margin-top: 5em;\"></div>\n          <h4>Post Content</h4>\n          <div class=\"alert\">\n            <p>Add up to 5 pictures with the &lt;&lt;picture-n &gt;&gt; tag </p>\n          </div>\n          <div class=\"alert\">\n            <p>Add up to 5 code snippets with the &lt;&lt;code-n &gt;&gt; tag </p>\n          </div>\n          <div style=\"margin-top: 2em;\"></div>\n          <ion-textarea rows=\"30\" placeholder=\"Post\" required formControlName=\"post\"></ion-textarea>\n\n          <ion-button style=\"margin: 5em auto 10em auto;\" class=\"green-button\" id=\"submit-blog-button\" type=\"submit\">\n            Submit\n          </ion-button>\n        </form>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n");

/***/ }),

/***/ 14144:
/*!***********************************************************!*\
  !*** ./src/app/admin/blogs/edit-blog/edit-blog.page.scss ***!
  \***********************************************************/
/***/ (function(module) {

module.exports = "ion-grid {\n  background-image: url('Matrix-Background.svg');\n  background-attachment: fixed;\n  background-size: cover;\n  --color: white;\n  height: auto;\n}\n\n@media only screen and (max-width: 600px) {\n  ion-grid {\n    background-image: url('Matrix-Background-Mobile.svg');\n    background-size: cover;\n    background-repeat: no-repeat;\n  }\n}\n\n.alert {\n  background-color: #333;\n  border: solid 2px #3cf63c;\n  border-radius: 5px;\n  margin: 1em auto;\n  padding: 0.5em;\n}\n\nform {\n  padding: 1em;\n}\n\n.picture-preview {\n  margin-top: 3em;\n  -webkit-animation: preview-slide-in 0.5s ease-in forwards;\n          animation: preview-slide-in 0.5s ease-in forwards;\n}\n\n@-webkit-keyframes preview-slide-in {\n  0% {\n    opacity: 0;\n    transform: translateX(-20px);\n  }\n  100% {\n    opacity: 1;\n    transform: translateX(0px);\n  }\n}\n\n@keyframes preview-slide-in {\n  0% {\n    opacity: 0;\n    transform: translateX(-20px);\n  }\n  100% {\n    opacity: 1;\n    transform: translateX(0px);\n  }\n}\n\nion-toolbar {\n  margin: 2.5em 0;\n  --background: #1805199e;\n  border-radius: 5px;\n  padding: 0em 1em;\n}\n\nion-toolbar ion-title {\n  position: relative;\n  left: -20px;\n}\n\nion-toolbar ion-buttons .grey-button {\n  width: 110px;\n  display: block;\n  margin-left: 1em;\n  --background: linear-gradient(360deg, #777777 -2%, #333, #777777);\n  --color: white;\n  --border-radius: 50px;\n  --box-shadow: none;\n}\n\nion-toolbar ion-buttons .gold-button {\n  width: 110px;\n  display: block;\n  margin: 30px 0;\n  --background: linear-gradient(360deg, #d8cca8 -2%, #847145, #d8cca8);\n  --color: white;\n  --border-radius: 50px;\n  --box-shadow: none;\n}\n\n#pictures-checkbox, #code-checkbox {\n  border: 2px solid #3cf63c;\n  width: 180px;\n  padding: 0.5em;\n  margin: 2em 0em;\n  border-radius: 5px;\n}\n\n#pictures-section, #code-section {\n  background: rgba(224, 224, 224, 0.692);\n  padding: 1em;\n  border-radius: 5px;\n}\n\nion-input, ion-textarea {\n  background: #fff;\n  --color: #333;\n  --placeholder-color: #333;\n  margin: 1em 0;\n  border-radius: 5px;\n  box-shadow: 1px 1px 10px #333;\n}\n\nion-input {\n  --padding-start: 0.5em;\n  height: 50px;\n}\n\nh4 {\n  color: #1d071f;\n  background: #d8cca8;\n  width: 200px;\n  padding: 0.6em;\n  border-radius: 5px;\n  margin: 4em 0 2em 0;\n}\n\n.green-button {\n  margin-top: 3em;\n  margin-bottom: 10em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVkaXQtYmxvZy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSw4Q0FBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtBQUNGOztBQUNBO0VBQ0U7SUFDRSxxREFBQTtJQUNBLHNCQUFBO0lBQ0EsNEJBQUE7RUFFRjtBQUNGOztBQUFBO0VBQ0Usc0JBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBRUY7O0FBQUE7RUFDRSxZQUFBO0FBR0Y7O0FBREE7RUFDRSxlQUFBO0VBQ0EseURBQUE7VUFBQSxpREFBQTtBQUlGOztBQUZBO0VBQ0U7SUFDRSxVQUFBO0lBQ0EsNEJBQUE7RUFLRjtFQUhBO0lBQ0UsVUFBQTtJQUNBLDBCQUFBO0VBS0Y7QUFDRjs7QUFiQTtFQUNFO0lBQ0UsVUFBQTtJQUNBLDRCQUFBO0VBS0Y7RUFIQTtJQUNFLFVBQUE7SUFDQSwwQkFBQTtFQUtGO0FBQ0Y7O0FBSEE7RUFDRSxlQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBS0Y7O0FBRkU7RUFDRSxrQkFBQTtFQUNBLFdBQUE7QUFJSjs7QUFESTtFQUNFLFlBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpRUFBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0FBR047O0FBREk7RUFDRSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7RUFDQSxvRUFBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0FBR047O0FBQ0E7RUFDRSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FBRUY7O0FBQUE7RUFDRSxzQ0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQUdGOztBQURBO0VBQ0UsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7RUFFQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSw2QkFBQTtBQUdGOztBQURBO0VBQ0Usc0JBQUE7RUFDQSxZQUFBO0FBSUY7O0FBRkE7RUFDRSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUFLRjs7QUFIQTtFQUNFLGVBQUE7RUFDQSxtQkFBQTtBQU1GIiwiZmlsZSI6ImVkaXQtYmxvZy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tZ3JpZCB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vLi4vYXNzZXRzL2lsbHVzdHJhdGlvbnMvTWF0cml4LUJhY2tncm91bmQuc3ZnJyk7XG4gIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIC0tY29sb3I6IHdoaXRlO1xuICBoZWlnaHQ6IGF1dG87XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIGlvbi1ncmlkIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uLy4uL2Fzc2V0cy9pbGx1c3RyYXRpb25zL01hdHJpeC1CYWNrZ3JvdW5kLU1vYmlsZS5zdmcnKTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIH1cbn1cbi5hbGVydCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XG4gIGJvcmRlcjogc29saWQgMnB4ICMzY2Y2M2M7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgbWFyZ2luOiAxZW0gYXV0bztcbiAgcGFkZGluZzogMC41ZW07XG59XG5mb3JtIHtcbiAgcGFkZGluZzogMWVtO1xufVxuLnBpY3R1cmUtcHJldmlldyB7XG4gIG1hcmdpbi10b3A6IDNlbTtcbiAgYW5pbWF0aW9uOiBwcmV2aWV3LXNsaWRlLWluIDAuNXMgZWFzZS1pbiBmb3J3YXJkcztcbn1cbkBrZXlmcmFtZXMgcHJldmlldy1zbGlkZS1pbiB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMjBweCk7XG4gIH1cbiAgMTAwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMHB4KTtcbiAgfVxufVxuaW9uLXRvb2xiYXIge1xuICBtYXJnaW46IDIuNWVtIDA7XG4gIC0tYmFja2dyb3VuZDogIzE4MDUxOTllO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHBhZGRpbmc6IDBlbSAxZW07XG5cblxuICBpb24tdGl0bGUge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBsZWZ0OiAtMjBweDtcbiAgfVxuICBpb24tYnV0dG9ucyB7XG4gICAgLmdyZXktYnV0dG9uIHtcbiAgICAgIHdpZHRoOiAxMTBweDtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgbWFyZ2luLWxlZnQ6IDFlbTtcbiAgICAgIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDM2MGRlZywgIzc3Nzc3NyAtMiUsICMzMzMsICM3Nzc3NzcpO1xuICAgICAgLS1jb2xvcjogd2hpdGU7XG4gICAgICAtLWJvcmRlci1yYWRpdXM6IDUwcHg7XG4gICAgICAtLWJveC1zaGFkb3c6IG5vbmU7XG4gICAgfVxuICAgIC5nb2xkLWJ1dHRvbiB7XG4gICAgICB3aWR0aDogMTEwcHg7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIG1hcmdpbjogMzBweCAwO1xuICAgICAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMzYwZGVnLCAjZDhjY2E4IC0yJSwgIzg0NzE0NSwgI2Q4Y2NhOCk7XG4gICAgICAtLWNvbG9yOiB3aGl0ZTtcbiAgICAgIC0tYm9yZGVyLXJhZGl1czogNTBweDtcbiAgICAgIC0tYm94LXNoYWRvdzogbm9uZTtcbiAgICB9XG4gIH1cbn1cbiNwaWN0dXJlcy1jaGVja2JveCwgICNjb2RlLWNoZWNrYm94e1xuICBib3JkZXI6IDJweCBzb2xpZCAjM2NmNjNjO1xuICB3aWR0aDogMTgwcHg7XG4gIHBhZGRpbmc6IDAuNWVtO1xuICBtYXJnaW46IDJlbSAwZW07XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cbiNwaWN0dXJlcy1zZWN0aW9uLCAjY29kZS1zZWN0aW9uIHtcbiAgYmFja2dyb3VuZDogcmdiYSgyMjQsIDIyNCwgMjI0LCAwLjY5Mik7XG4gIHBhZGRpbmc6IDFlbTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuaW9uLWlucHV0LCBpb24tdGV4dGFyZWEge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAtLWNvbG9yOiAjMzMzO1xuICAtLXBsYWNlaG9sZGVyLWNvbG9yOiAjMzMzO1xuICAvLyBwYWRkaW5nOiAwIDAgMCAwLjVlbTtcbiAgbWFyZ2luOiAxZW0gMDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBib3gtc2hhZG93OiAxcHggMXB4IDEwcHggIzMzMztcbn1cbmlvbi1pbnB1dCB7XG4gIC0tcGFkZGluZy1zdGFydDogMC41ZW07XG4gIGhlaWdodDogNTBweDtcbn1cbmg0IHtcbiAgY29sb3I6ICMxZDA3MWY7XG4gIGJhY2tncm91bmQ6ICNkOGNjYTg7XG4gIHdpZHRoOiAyMDBweDtcbiAgcGFkZGluZzogMC42ZW07XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgbWFyZ2luOiA0ZW0gMCAyZW0gMDtcbn1cbi5ncmVlbi1idXR0b24ge1xuICBtYXJnaW4tdG9wOiAzZW07XG4gIG1hcmdpbi1ib3R0b206IDEwZW07XG59Il19 */";

/***/ })

}]);
//# sourceMappingURL=src_app_admin_blogs_edit-blog_edit-blog_module_ts-es2015.js.map