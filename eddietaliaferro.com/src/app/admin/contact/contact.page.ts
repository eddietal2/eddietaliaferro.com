import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController, LoadingController, IonInput, IonSpinner, AlertController } from '@ionic/angular';
import { ContactService } from 'src/app/services/contact/contact.service';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
})
export class ContactPage implements OnInit {
  allMessages: Array<object>;
  messageCount: Number;

  constructor(
    private router: Router,
    private contactService: ContactService,
    private alert: AlertController,) { }

  ngOnInit() {
    this.contactService.getMessages().subscribe(
      messages => {
        console.log(messages);
        this.allMessages = messages['messages'];
        this.messageCount = messages['messageCount'];
      }
    )
  }
  async deleteAlert(id) {
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
            console.log('Deleting message ...');
            this.contactService.deleteMessage(id).subscribe(
              data => {
                console.log(data)
                this.allMessages = data['messages'];
                this.messageCount = data['messageCount'];
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
  reply() {
    console.log('Replying to message ...');
    let replyMessage = document.getElementById('reply');
  }
  submitReply() {

  }

}
