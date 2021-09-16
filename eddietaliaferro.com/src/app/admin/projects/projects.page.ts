import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController, LoadingController, IonInput, IonSpinner, AlertController } from '@ionic/angular';


@Component({
  selector: 'app-projects',
  templateUrl: './projects.page.html',
  styleUrls: ['./projects.page.scss'],
})
export class ProjectsPage implements OnInit {

  constructor(
    private router: Router,
    private alert: AlertController) { }

  ngOnInit() {
  }
  viewProject() {
    
  }
  addProject() {
    this.router.navigateByUrl('/admin/projects/add-projects');
  }
  deleteProject() {
  }
  async deleteAlert() {
    const alert = await this.alert.create({
      cssClass: 'my-custom-class',
      header: 'Delete Project',
      message: 'Are you sure you want to Delete this Project? It cannot be undone.',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        },
        {
          text: 'Delete',
          cssClass: 'alert-delete-button',
          handler: () => {
            console.log('Confirm Okay');
          }
        }
      ]
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }
  editProject() {
    this.router.navigateByUrl('/admin/projects/edit-projects');
  }
  blogComments() {

  }
  visibleToggle(event) {
    let checked = event.detail.checked;
    if(checked === true) {
      console.log('The Project is Visible')
    }
    else if(checked === false) {
      console.log('The Project is NOT Visible')
    }
    else {
      return Error('There was an error with making toggling the Blogs visibility.')
    }

  }
  async visibleAlert() {
    const alert = await this.alert.create({
      cssClass: 'my-custom-class',
      header: 'Make Blog Visible',
      message: 'Are you sure you want to make this Project visible?',
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        },
        {
          text: 'Yes',
          cssClass: 'alert-delete-button',
          handler: () => {
            console.log('Confirm Okay');
          }
        }
      ]
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

}
