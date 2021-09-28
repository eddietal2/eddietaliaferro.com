import { Component, OnInit, HostListener, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastController, LoadingController, IonSpinner } from '@ionic/angular';
import { BlogService, Blog } from 'src/app/services/blog/blog.service';
import { HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { PicturesService } from 'src/app/services/pictures/pictures.service';


@Component({
  selector: 'app-add-blog',
  templateUrl: './add-blog.page.html',
  styleUrls: ['./add-blog.page.scss'],
})
export class AddBlogPage implements OnInit, OnDestroy {
  addBlogForm: FormGroup;
  thumbnailDataURL;
  thumbnailS3Link;

  pictureOneDataURL;
  pictureTwoDataURL;
  pictureThreeDataURL;
  pictureFourDataURL;
  pictureFiveDataURL;

  pictureOneTag    =  '<< picture-1 >>';
  pictureTwoTag    =  '<< picture-2 >>';
  pictureThreeTag  =  '<< picture-3 >>';
  pictureFourTag   =  '<< picture-4 >>';
  pictureFiveTag   =  '<< picture-5 >>';

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private blogService: BlogService,
    private picturesService: PicturesService,
  ) { }


  ngOnInit() {
    this.addBlogForm = this.formBuilder.group({
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

    this.addBlogForm.valueChanges.subscribe(
      data => {
        console.log(data);
      });
  }
  back() {
    this.router.navigateByUrl('/admin/blogs')
  }
  // For each picture, get the DataURL of the file FIRST
  // When the blog is ready to be submitted, add them to S3 bucket
  // and get their links before adding the blog to the database

  getPictureOneFile(event) {
    const pictureOne = document.getElementById('picture-1');
    let reader = new FileReader();

    if (pictureOne) {
      reader.readAsDataURL(event.target.files[0]);
    }
    reader.addEventListener('load', () => {
      // Convert image file ot base64 string
      this.pictureOneDataURL = reader.result;
      console.log(this.pictureOneDataURL);
      }, false);
  }
  getPictureOneS3URL() {
    const formData = new FormData();
    let pictureOneFile = new File([this.dataURLtoBlob(this.pictureOneDataURL)], 'picture-1.png');
    formData.append('blog-picture', pictureOneFile);
    this.picturesService.blogPictureUpload(formData)
        .subscribe(pictureURL => {
          this.addBlogForm.value.picture_1 = pictureURL['objectUrl'];
        });
  }

  getPictureTwoFile(event) {
    const pictureTwo = document.getElementById('picture-2');
    let reader = new FileReader();
    if (pictureTwo) {
      reader.readAsDataURL(event.target.files[0]);
    }
    reader.addEventListener('load', () => {
      // Convert image file ot base64 string
      this.pictureTwoDataURL = reader.result;
      console.log(this.pictureTwoDataURL);
      }, false);

  }
  getPictureTwoS3URL() {
    const formData = new FormData();
    let pictureTwoFile = new File([this.dataURLtoBlob(this.pictureTwoDataURL)], 'picture-2.png');
    formData.append('blog-picture', pictureTwoFile);
    this.picturesService.blogPictureUpload(formData)
        .subscribe(pictureURL => {
          this.addBlogForm.value.picture_2 = pictureURL['objectUrl'];
        });
  }

  getPictureThreeFile(event) {
    const pictureThree = document.getElementById('picture-3');
    let reader = new FileReader();
    if (pictureThree) {
      reader.readAsDataURL(event.target.files[0]);
    }
    reader.addEventListener('load', () => {
      // Convert image file ot base64 string
      this.pictureThreeDataURL = reader.result;
      console.log(this.pictureThreeDataURL);
      }, false);

  }
  getPictureThreeS3URL() {
    const formData = new FormData();
    let pictureThreeFile = new File([this.dataURLtoBlob(this.pictureThreeDataURL)], 'picture-3.png');
    formData.append('blog-picture', pictureThreeFile);
    this.picturesService.blogPictureUpload(formData)
        .subscribe(pictureURL => {
          this.addBlogForm.value.picture_3 = pictureURL['objectUrl'];
        });
  }

  getPictureFourFile(event) {
    const pictureFour = document.getElementById('picture-4');
    let reader = new FileReader();
    if (pictureFour) {
      reader.readAsDataURL(event.target.files[0]);
    }
    reader.addEventListener('load', () => {
      // Convert image file ot base64 string
      this.pictureFourDataURL = reader.result;
      console.log(this.pictureFourDataURL);
      }, false);

  }
  getPictureFourS3URL() {
    const formData = new FormData();
    let pictureFourFile = new File([this.dataURLtoBlob(this.pictureFourDataURL)], 'picture-4.png');
    formData.append('blog-picture', pictureFourFile);
    this.picturesService.blogPictureUpload(formData)
        .subscribe(pictureURL => {
          this.addBlogForm.value.picture_4 = pictureURL['objectUrl'];
        });
  }

  getPictureFiveFile(event) {
    const pictureFive = document.getElementById('picture-5');
    let reader = new FileReader();
    if (pictureFive) {
      reader.readAsDataURL(event.target.files[0]);
    }
    reader.addEventListener('load', () => {
      // Convert image file ot base64 string
      this.pictureFiveDataURL = reader.result;
      console.log(this.pictureFiveDataURL);
      }, false);

  }
  getPictureFiveS3URL() {
    const formData = new FormData();
    let pictureFiveFile = new File([this.dataURLtoBlob(this.pictureFiveDataURL)], 'picture-5.png');
    formData.append('blog-picture', pictureFiveFile);
    this.picturesService.blogPictureUpload(formData)
        .subscribe(pictureURL => {
          this.addBlogForm.value.picture_5 = pictureURL['objectUrl'];
        });
  }

  getThumbnailFile(event) {
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
  getThumbnailS3URL() {
    const formData = new FormData();
    let thumbnailFile = new File([this.dataURLtoBlob(this.thumbnailDataURL)], 'thumbnail.png');
    formData.append('blog-thumbnail', thumbnailFile);
    this.picturesService.blogThumbnailUpload(formData)
        .subscribe(pictureURL => {
          this.addBlogForm.value.thumbnail = pictureURL['objectUrl'];
        });
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

  submitBlogPost() {
    this.getThumbnailS3URL();
    // For each picture that is added, get a link for that photo
    if(this.pictureOneDataURL) {
      this.getPictureOneS3URL();
    }
    if(this.pictureTwoDataURL) {
      this.getPictureTwoS3URL();
    }
    if(this.pictureThreeDataURL) {
      this.getPictureThreeS3URL();
    }
    if(this.pictureFourDataURL) {
      this.getPictureFourS3URL();
    }
    if(this.pictureFiveDataURL) {
      this.getPictureFiveS3URL();
    }

    let formattedHashtags = [
      this.addBlogForm.value.hashtag_1,
      this.addBlogForm.value.hashtag_2,
      this.addBlogForm.value.hashtag_3,
      this.addBlogForm.value.hashtag_4,
      this.addBlogForm.value.hashtag_5
    ];

    let newBlog = {
      title: this.addBlogForm.value.title,
      thumbnail: this.addBlogForm.value.thumbnail,
      visible: false,
      hashtags: formattedHashtags.filter(item => item),
      post: this.addBlogForm.value.post,
      comments: [],
      picture_1: this.addBlogForm.value.picture_1,
      picture_2: this.addBlogForm.value.picture_2,
      picture_3: this.addBlogForm.value.picture_3,
      picture_4: this.addBlogForm.value.picture_4,
      picture_5: this.addBlogForm.value.picture_5,
    }
    console.log(newBlog)
    // Check for Truthy title, thumbnail, and blog post.
    // If one is messing, show a toast.
    // If all three are valid, submit Blog.
    this.blogService.submitBlog(newBlog)
    .pipe(catchError(error => of(`I caught: ${error.error}`)))
    .subscribe(
      data => {
        console.log(data);
        this.router.navigateByUrl('admin/blogs');
        return;
      }
    )

  }

  @HostListener('unloaded')
  ngOnDestroy() {
    console.log('Add Blog Page destroyed');
  }
}


