import { Component, OnInit, HostListener, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastController, LoadingController, IonInput, IonSpinner, AlertController } from '@ionic/angular';
import { Blog, BlogService } from 'src/app/services/blog/blog.service';
import { AdminBlogEmitterService } from 'src/app/services/emitters/admin-blog-emitter/admin-blog-emitter.service';
import { PicturesService } from 'src/app/services/pictures/pictures.service';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-edit-blog',
  templateUrl: './edit-blog.page.html',
  styleUrls: ['./edit-blog.page.scss'],
})
export class EditBlogPage implements OnInit, OnDestroy {
  editBlogForm: FormGroup;
  id;
  hashtagOne;
  hashtagTwo;
  hashtagThree;
  hashtagFour;
  hashtagFive;
;
  thumbnailDataURL;
  thumbnailS3Link;

  pictureOneDataURL;
  pictureTwoDataURL;
  pictureThreeDataURL;
  pictureFourDataURL;
  pictureFiveDataURL;

  pictureOne    =  '<< picture-1 >>';
  pictureTwo    =  '<< picture-2 >>';
  pictureThree  =  '<< picture-3 >>';
  pictureFour   =  '<< picture-4 >>';
  pictureFive   =  '<< picture-5 >>';

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private toastController: ToastController,
    private blogService: BlogService,
    private adminBlogEmitterService: AdminBlogEmitterService,
    private picturesService: PicturesService,
    ) { }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.id = id;

    this.editBlogForm = this.formBuilder.group({
      title: ['', [Validators.required]],
      thumbnail: ['', [Validators.required]],
      hashtag_1: [''],
      hashtag_2: [''],
      hashtag_3: [''],
      hashtag_4: [''],
      hashtag_5: [''],
      picture_1: [''],
      picture_2: [''],
      picture_3: [''],
      picture_4: [''],
      picture_5: [''],
      post: ['', [Validators.required,]]
    });

    this.blogService.getBlogInfo(id).subscribe(
      blogInfo => {
        console.log(blogInfo);
        // Convert S3 URL to DataURL
        let xhr = new Promise((res, rej) => {
          var request = new XMLHttpRequest();
          request.open('GET', blogInfo['thumbnail'], true);
          request.responseType = 'blob';
          request.onload = function() {
              var reader = new FileReader();
              reader.readAsDataURL(request.response);
              reader.onload =  function(e){
                let convertOctetStreamToPNGImage = e.target.result.toString().replace('data:application/octet-stream', 'data:image/png')
                res(convertOctetStreamToPNGImage);
                rej('Something bad happened')
                  return;
              };
            return;
        };
        request.send();
        });

        xhr.then( data => {
          console.log(data);
          this.thumbnailDataURL = data;
        })

        // Properly format Hashtags
        if(blogInfo['hashtags'][0]) {
          this.hashtagOne = blogInfo['hashtags'][0];
        }
        if(blogInfo['hashtags'][1]) {
          this.hashtagTwo = blogInfo['hashtags'][1];
        }
        if(blogInfo['hashtags'][2]) {
          this.hashtagThree = blogInfo['hashtags'][2];
        }
        if(blogInfo['hashtags'][3]) {
          this.hashtagFour = blogInfo['hashtags'][3];
        }
        if(blogInfo['hashtags'][4]) {
          this.hashtagFive = blogInfo['hashtags'][4];
        }
        if(blogInfo['hashtags'][0] === undefined) {
          this.hashtagOne = '';
        }
        if(blogInfo['hashtags'][1] === undefined) {
          this.hashtagTwo = '';
        }
        if(blogInfo['hashtags'][2] === undefined) {
          this.hashtagThree = '';
        }
        if(blogInfo['hashtags'][3] === undefined) {
          this.hashtagFour = '';
        }
        if(blogInfo['hashtags'][4] === undefined) {
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
          picture_1: blogInfo['picture_1'],
          picture_2: blogInfo['picture_2'],
          picture_3: blogInfo['picture_3'],
          picture_4: blogInfo['picture_4'],
          picture_5: blogInfo['picture_5'],
        })
      });

  }

  back() {
    this.router.navigateByUrl('/admin/blogs')
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
      console.log(this.pictureOneDataURL);


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
          console.log(pictureURL)
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
    return new Blob([u8arr], {type: mime});
  }

  // Toasts
  async notTitleToast() {
    const toast = await this.toastController.create({
      message: 'There was no Title',
      cssClass: 'danger-toast',
      position: 'top',
      duration: 2000
    });
    toast.present();
  }
  async notThumbnailToast() {
    const toast = await this.toastController.create({
      message: 'There was no Thumbnail',
      cssClass: 'danger-toast',
      position: 'top',
      duration: 2000
    });
    toast.present();
  }
  async errorToast() {
    const toast = await this.toastController.create({
      message: 'There was an Error',
      cssClass: 'danger-toast',
      position: 'top',
      duration: 2000
    });
    toast.present();
  }
  async notBlogContentToast() {
    const toast = await this.toastController.create({
      message: 'There was no Blog Toast',
      cssClass: 'danger-toast',
      position: 'top',
      duration: 2000
    });
    toast.present();
  }
  async successfulBlogSubmit() {
    const toast = await this.toastController.create({
      message: 'Successfully added Blog!',
      cssClass: 'success-toast',
      position: 'top',
      duration: 2000
    });
    toast.present();
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

          if(!this.editBlogForm.value.title) {
            console.log('There was no Title');
            return this.notTitleToast();
          }
          if(!this.editBlogForm.value.thumbnail) {
            console.log('There was no Thumbnail');
            return this.notThumbnailToast();
          }
          if(!this.editBlogForm.value.post) {
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
            picture_1: this.editBlogForm.value.picture_1,
            picture_2: this.editBlogForm.value.picture_2,
            picture_3: this.editBlogForm.value.picture_3,
            picture_4: this.editBlogForm.value.picture_4,
            picture_5: this.editBlogForm.value.picture_5,
          }
          console.log(updatedBlog)
          this.blogService.editBlog(updatedBlog)
          .pipe(catchError((error) => {
            this.errorToast();
            of(`I caught: ${error.error}`)
            throw Error(error);
          }))
          .subscribe(
            async data => {
              console.log(data);
              await this.adminBlogEmitterService.resetAdminBlogs()
              await this.successfulBlogSubmit()
              await this.router.navigateByUrl('admin/blogs');
              return;
            }
          )
        });
  }
  @HostListener('unloaded')
  ngOnDestroy() {
    console.log('Add Blog Page destroyed');
  }

}
