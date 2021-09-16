import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastController, LoadingController, IonInput, IonSpinner, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-add-blog',
  templateUrl: './add-blog.page.html',
  styleUrls: ['./add-blog.page.scss'],
})
export class AddBlogPage implements OnInit {
  addBlogForm: FormGroup;
  pictureOne    =  '<< picture-1 >>';
  pictureTwo    =  '<< picture-2 >>';
  pictureThree  =  '<< picture-3 >>';
  pictureFour   =  '<< picture-4 >>';
  pictureFive   =  '<< picture-5 >>';

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
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
  }
  back() {
    this.router.navigateByUrl('/admin/blogs')
  }
  submitBlogPost() {

  }
  trackTextArea(event) {
    let post: String = event.detail.value;
    let pictureOnePosition = post.search(this.pictureOne)
    let pictureTwoPosition = post.search(this.pictureTwo)
    let pictureThreePosition = post.search(this.pictureThree)
    let pictureFourPosition = post.search(this.pictureFour)
    let pictureFivePosition = post.search(this.pictureFive)

    if(pictureOnePosition > -1) {
      console.log('Picture 1 embedded');
      console.log('Picture 1 postion: ' + pictureOnePosition);
    }
    if(pictureOnePosition === -1) {
      // console.log('Picture 1 NOT embedded');
    }

    if(pictureTwoPosition > -1) {
      console.log('Picture 2 embedded');
    }
    if(pictureTwoPosition === -1) {
      // console.log('Picture 2 NOT embedded');
    }

    if(pictureThreePosition > -1) {
      console.log('Picture 3 embedded');
    }
    if(pictureThreePosition === -1) {
      // console.log('Picture 3 NOT embedded');
    }

    if(pictureFourPosition > -1) {
      console.log('Picture 4 embedded');
    }
    if(pictureFourPosition === -1) {
      // console.log('Picture 4 NOT embedded');
    }

    if(pictureFivePosition > -1) {
      console.log('Picture 5 embedded');
    }
    if(pictureFivePosition == -1) {
      // console.log('Picture 5 NOT embedded');
    }
    // console.log('Picture One position: ' + pictureOnePosition);
    // console.log('Picture Two position: ' + pictureTwoPosition);
    // console.log('Picture Three position: ' + pictureThreePosition);
    // console.log('Picture Four position: ' + pictureFourPosition);
    // console.log('Picture Five position: ' + pictureFivePosition);

  }

  // Add codes inside of ion-textarea
  // Each blog can have up to 5 pictures
  // Desktop = 1000 x 478
  // Tablet = 600 x ??
  // Mobile = 400 x ??
}