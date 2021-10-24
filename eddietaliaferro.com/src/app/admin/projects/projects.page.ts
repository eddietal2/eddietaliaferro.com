import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController, LoadingController, IonInput, IonSpinner, AlertController } from '@ionic/angular';
import { AdminProjectEmitterService } from 'src/app/services/emitters/admin-project-emitter/admin-project-emitter.service';
import { ProjectService, Project } from 'src/app/services/project/project.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.page.html',
  styleUrls: ['./projects.page.scss'],
})
export class ProjectsPage implements OnInit {
  allProjects;

  constructor(
    private router: Router,
    private projectService: ProjectService,
    private loadingController: LoadingController,
    private toastController: ToastController,
    private adminProjectEmitterService: AdminProjectEmitterService,
    private alert: AlertController) { }

  ngOnInit() {
    // When a blog is added on the Add Blog page, refresh this page.
    if (this.adminProjectEmitterService.subsVar == undefined) {
      this.adminProjectEmitterService.subsVar = this.adminProjectEmitterService.invokeAdminProjectsPageRefresh.subscribe(() => {
        this.getProjects();
      });
      this.getProjects();
    }
  }
  getProjects() {
    this.projectService.getProjects().subscribe(
      projects => {
        console.log(projects);
        return this.allProjects = projects;
      }
    )
  }
  addProject() {
    this.router.navigateByUrl('/admin/projects/add-projects');
  }
  async deleteAlert(projectID) {
    const alert = await this.alert.create({
      cssClass: 'my-custom-class',
      header: 'Delete Project',
      message: 'Are you sure you want to Delete this Project? It cannot be undone.',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
        },
        {
          text: 'Delete',
          cssClass: 'alert-delete-button',
          handler: (blah) => {
            console.log(projectID);
            this.projectService.deleteProject(projectID).subscribe(
              updatedProjects => {
                this.presentLoading(updatedProjects);
                this.allProjects = updatedProjects;
                this.deleteProjectToast();
              }
            )
          }
        }
      ]
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }
  async presentLoading(updatedProjects) {
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      duration: 1000
    });
   await loading.present();
   await loading.onDidDismiss().then( () => {
      console.log(updatedProjects);
    }
    )
  }
  async deleteProjectToast() {
    const toast = await this.toastController.create({
      message: 'Deleted Blog!',
      cssClass: 'danger-toast',
      position: 'top',
      duration: 2000
    });
    toast.present();
  }
  editProject(id) {
    this.router.navigate(['/admin/projects/edit-projects', id]);
  }
  visibleToggle(event, blogID, title, visible) {
    console.log(event)
    let checked = event.detail.checked;
    if(checked === true) {
      console.log('The Blog is Visible');
      this.projectService.projectVisibility(blogID, title, visible)
        .subscribe( data => {
          console.log(data);
        })
    }
    else if(checked === false) {
      console.log('The Blog is NOT Visible');
      this.projectService.projectVisibility(blogID, title, visible)
        .subscribe( data => {
          console.log(data);
        })
    }
    else {
      return Error('There was an error with making toggling the Blogs visibility.')
    }
  }
  // @HostListener('unloaded')
  // ngOnDestroy() {
  //   console.log('Admin Projects Page destroyed');
  // }

}
