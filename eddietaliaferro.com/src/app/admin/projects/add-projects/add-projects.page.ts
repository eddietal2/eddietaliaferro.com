import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastController, LoadingController, IonInput, IonSpinner, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-add-projects',
  templateUrl: './add-projects.page.html',
  styleUrls: ['./add-projects.page.scss'],
})
export class AddProjectsPage implements OnInit {
  addProjectForm: FormGroup;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.addProjectForm = this.formBuilder.group({
      title: ['', [Validators.required]],
      thumbnail: ['', [Validators.required]],
      link: ['', Validators.required],
      description: ['', Validators.required]
    });
  }
  back() {
    this.router.navigateByUrl('/admin/blogs')
  }
  submitProject() {
    
  }

}
