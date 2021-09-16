import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController, LoadingController, IonInput, IonSpinner, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
})
export class ContactPage implements OnInit {

  constructor(
    private router: Router,
    private alert: AlertController,) { }

  ngOnInit() {
  }
  deleteMessage() {
    console.log('Deleting message ...');
  }

  async deleteAlert() {
    const alert = await this.alert.create({
      cssClass: 'my-custom-class',
      header: 'Delete Message',
      message: 'Are you sure you want to Delete this message? It cannot be undone.',
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
  reply() {
    console.log('Replying to message ...');
    let replyMessage = document.getElementById('reply');
  }
  submitReply() {

  }

}
