import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastController, AlertController } from '@ionic/angular';
import { ProjectService } from 'src/app/services/project/project.service';
import { AdminProjectEmitterService } from 'src/app/services/emitters/admin-project-emitter/admin-project-emitter.service';
import { PicturesService } from 'src/app/services/pictures/pictures.service';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';


@Component({
  selector: 'app-add-projects',
  templateUrl: './add-projects.page.html',
  styleUrls: ['./add-projects.page.scss'],
})
export class AddProjectsPage implements OnInit {
  addProjectForm: FormGroup;
  thumbnailDataURL;
  thumbnailS3Link;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private toastController: ToastController,
    private projectService: ProjectService,
    private adminProjectEmitterService: AdminProjectEmitterService,
    private picturesService: PicturesService,
    ) { }

  ngOnInit() {
    this.addProjectForm = this.formBuilder.group({
      title: ['', [Validators.required]],
      thumbnail: ['', [Validators.required]],
      url: ['', Validators.required],
      description: ['', Validators.required]
    });
  }
  back() {
    this.router.navigateByUrl('/admin/blogs')
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
  async noProjectLinkToast() {
    const toast = await this.toastController.create({
      message: 'There was no Blog Toast',
      cssClass: 'danger-toast',
      position: 'top',
      duration: 2000
    });
    toast.present();
  }
  async noProjectDescriptionToast() {
    const toast = await this.toastController.create({
      message: 'There was no Blog Toast',
      cssClass: 'danger-toast',
      position: 'top',
      duration: 2000
    });
    toast.present();
  }
  async successfullProjectSubmit() {
    const toast = await this.toastController.create({
      message: 'Successfully added Blog!',
      cssClass: 'success-toast',
      position: 'top',
      duration: 2000
    });
    toast.present();
  }

  submitProject() {
    console.log('Getting Thumbnail S3 URL');
    const formData = new FormData();
    let thumbnailFile = new File([this.dataURLtoBlob(this.thumbnailDataURL)], 'thumbnail.png');
    formData.append('project-thumbnail', thumbnailFile);
    this.picturesService.projectThumbnailUpload(formData)
      .subscribe(pictureURL => {
          this.addProjectForm.value.thumbnail = pictureURL['objectUrl'];

          if(!this.addProjectForm.value.title) {
            console.log('There was no Title');
            return this.notTitleToast();
          }
          if(!this.addProjectForm.value.thumbnail) {
            console.log('There was no Thumbnail');
            return this.notThumbnailToast();
          }
          if(!this.addProjectForm.value.description) {
            console.log('There was no Project Description');
            return this.noProjectDescriptionToast();
          }
          if(!this.addProjectForm.value.url) {
            console.log('There was no Project Link');
            return this.noProjectLinkToast();
          }

          let newProject = {
            title: this.addProjectForm.value.title,
            thumbnail: this.addProjectForm.value.thumbnail,
            url: this.addProjectForm.value.url,
            visible: false,
            description: this.addProjectForm.value.description,
          }
          console.log(newProject)
          this.projectService.submitProject(newProject)
          .pipe(catchError((error) => {
            this.errorToast();
            of(`I caught: ${error.error}`)
            throw Error(error);
          }))
          .subscribe(
            async data => {
              console.log(data);
              await this.adminProjectEmitterService.resetAdminProjects()
              await this.successfullProjectSubmit()
              await this.router.navigateByUrl('admin/blogs');
              return;
            }
          )
        });
  }

  @HostListener('unloaded')
  ngOnDestroy() {
    console.log('Add Project Page destroyed');
  }

}
