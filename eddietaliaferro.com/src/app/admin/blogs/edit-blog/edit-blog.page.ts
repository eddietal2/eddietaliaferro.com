import { Component, OnInit, AfterContentInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastController, LoadingController, IonInput, IonSpinner } from '@ionic/angular';
import { Blog, BlogService } from 'src/app/services/blog/blog.service';

@Component({
  selector: 'app-edit-blog',
  templateUrl: './edit-blog.page.html',
  styleUrls: ['./edit-blog.page.scss'],
})
export class EditBlogPage implements OnInit, AfterViewInit {
  editBlogForm: FormGroup;
  blog: Blog = {
    title: '',
    hashtags: [],
    thumbnail: '',
    post: '',
    comments: [],
    pictures: []
  };
  pictureOne    =  '<< picture-1 >>';
  pictureTwo    =  '<< picture-2 >>';
  pictureThree  =  '<< picture-3 >>';
  pictureFour   =  '<< picture-4 >>';
  pictureFive   =  '<< picture-5 >>';

  constructor(
    private router: Router,
    private blogService: BlogService,
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,) { }

  ngOnInit() {
    const id  = this.activatedRoute.snapshot.paramMap.get('id');

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
      post: ['', Validators.compose([
        Validators.minLength(6),
        Validators.required,
     ])]
    });

    this.blogService.getBlogInfo(id).subscribe(
      blogInfo => {
        this.editBlogForm.patchValue({
          title: blogInfo['title'],
          post: blogInfo['post'],
          thumbnail: blogInfo['thumbnail'],
          // Deleting # from beginning of tag
          // First chatacter is a space
          // Second character is hashtag
          hashtag_1: blogInfo['hashtags'][0].substring(2),
          hashtag_2: blogInfo['hashtags'][1].substring(2),
          hashtag_3: blogInfo['hashtags'][2].substring(2),
          hashtag_4: blogInfo['hashtags'][3].substring(2),
          hashtag_5: blogInfo['hashtags'][4].substring(2),
        })
      });

    const title = this.blog.title;
  }

  ngAfterViewInit(): void {
    
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
