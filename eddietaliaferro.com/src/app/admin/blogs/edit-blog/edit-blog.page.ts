import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastController, LoadingController, IonInput, IonSpinner } from '@ionic/angular';

@Component({
  selector: 'app-edit-blog',
  templateUrl: './edit-blog.page.html',
  styleUrls: ['./edit-blog.page.scss'],
})
export class EditBlogPage implements OnInit {
  editBlogForm: FormGroup;
  pictureOne    =  '<< picture-1 >>';
  pictureTwo    =  '<< picture-2 >>';
  pictureThree  =  '<< picture-3 >>';
  pictureFour   =  '<< picture-4 >>';
  pictureFive   =  '<< picture-5 >>';

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,) { }

  ngOnInit() {
    this.editBlogForm = this.formBuilder.group({
      title: ['', [Validators.required]],
      thumbnail: ['', [Validators.required]],
      hashtags: ['', [Validators.required]],
      post: ['', Validators.compose([
        Validators.minLength(6),
        Validators.required,
     ])]
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

}
