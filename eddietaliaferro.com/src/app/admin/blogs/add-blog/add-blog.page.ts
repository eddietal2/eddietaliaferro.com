import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastController, LoadingController, IonInput, IonSpinner } from '@ionic/angular';

@Component({
  selector: 'app-add-blog',
  templateUrl: './add-blog.page.html',
  styleUrls: ['./add-blog.page.scss'],
})
export class AddBlogPage implements OnInit {
  addBlogForm: FormGroup;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit() {
    this.addBlogForm = this.formBuilder.group({
      title: ['', [Validators.required]],
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
}
