import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController, LoadingController, IonInput, IonSpinner, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.page.html',
  styleUrls: ['./blogs.page.scss'],
})
export class BlogsPage implements OnInit {

  constructor(
    private router: Router,
    private alert: AlertController,
  ) { }

  ngOnInit() {
  }
  viewBlog() {

  }
  addBlog() {
    this.router.navigateByUrl('/admin/blogs/add-blog')
  }
  deleteBlog() {
  }
  async deleteAlert() {
    const alert = await this.alert.create({
      cssClass: 'my-custom-class',
      header: 'Delete Blog',
      message: 'Are you sure you want to Delete this Blog Post? It cannot be undone.',
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
  editBlog() {
    this.router.navigateByUrl('/admin/blogs/edit-blog')
  }
  blogComments() {

  }
  visibleToggle(event) {
    let checked = event.detail.checked;
    if(checked === true) {
      console.log('The Blog is Visible');
      this.visibleAlert();
    }
    else if(checked === false) {
      console.log('The Blog is NOT Visible');
    }
    else {
      return Error('There was an error with making toggling the Blogs visibility.')
    }

  }
  async visibleAlert() {
    const alert = await this.alert.create({
      cssClass: 'my-custom-class',
      header: 'Make Blog Visible',
      message: 'Are you sure you want to make this Blog visible?',
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
