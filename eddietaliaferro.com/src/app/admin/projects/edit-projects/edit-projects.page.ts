import { Component, OnInit, HostListener, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastController, LoadingController, IonInput, IonSpinner, AlertController } from '@ionic/angular';
import { ProjectService, Project } from 'src/app/services/project/project.service';
import { AdminBlogEmitterService } from 'src/app/services/emitters/admin-blog-emitter/admin-blog-emitter.service';
import { PicturesService } from 'src/app/services/pictures/pictures.service';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-edit-projects',
  templateUrl: './edit-projects.page.html',
  styleUrls: ['./edit-projects.page.scss'],
})
export class EditProjectsPage implements OnInit {
  editProjectForm: FormGroup;
  id;

  formattedThumbailToDataURL;
  thumbnailDataURL;
  thumbnailS3Link;


  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private toastController: ToastController,
    private projectService: ProjectService,
    private adminBlogEmitterService: AdminBlogEmitterService,
    private picturesService: PicturesService,) { }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.id = id;

    this.editProjectForm = this.formBuilder.group({
      title: ['', [Validators.required]],
      thumbnail: ['', [Validators.required]],
      url: ['', Validators.required],
      description: ['', Validators.required]
    });

    this.projectService.getProjectInfo(id).subscribe(
      projectInfo => {
        console.log(projectInfo);
        let xhr = new Promise((res, rej) => {
          var request = new XMLHttpRequest();
          request.open('GET', projectInfo['thumbnail'], true);
          request.responseType = 'blob';
          request.onload = function() {
              var reader = new FileReader();
              console.log(typeof request.response);
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
          this.thumbnailDataURL = data;
        })

        this.editProjectForm.patchValue({
          title: projectInfo['title'],
          description: projectInfo['description'],
          // thumbnail: projectInfo['thumbnail'],
          url: projectInfo['url'],
        })
      })}
  back() {
    this.router.navigateByUrl('/admin/projects')
  }
  getThumbnailFile(event) {
    this.editProjectForm.value.thumbnail = '';
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
  submitEdittedProject() {
    console.log('Getting Thumbnail S3 URL');
    const formData = new FormData();
    let thumbnailFile = new File([this.dataURLtoBlob(this.thumbnailDataURL)], 'thumbnail.png');
    formData.append('blog-thumbnail', thumbnailFile);
    this.picturesService.blogThumbnailUpload(formData)
      .subscribe(pictureURL => {
          this.thumbnailDataURL = '';
          this.editProjectForm.value.thumbnail = pictureURL['objectUrl'];

          if(!this.editProjectForm.value.title) {
            console.log('There was no Title');
            return this.notTitleToast();
          }
          if(!this.editProjectForm.value.thumbnail) {
            console.log('There was no Thumbnail');
            return this.notThumbnailToast();
          }
          if(!this.editProjectForm.value.description) {
            console.log('There was no Blog Description');
            return this.noProjectDescriptionToast();
          }
          if(!this.editProjectForm.value.url) {
            console.log('There was no Project Link');
            return this.noProjectLinkToast();
          }
          let updatedProject = {
            id: this.id,
            title: this.editProjectForm.value.title,
            thumbnail: this.editProjectForm.value.thumbnail,
            url: this.editProjectForm.value.url,
            description: this.editProjectForm.value.description,
          }
          console.log(updatedProject)
          this.projectService.editProject(updatedProject)
          .pipe(catchError((error) => {
            this.errorToast();
            of(`I caught: ${error.error}`)
            throw Error(error);
          }))
          .subscribe(
            async data => {
              console.log(data);
              await this.adminBlogEmitterService.resetAdminBlogs()
              await this.successfullProjectSubmit()
              await this.router.navigateByUrl('admin/projects');
              return;
            }
          )
        });
  }

}
