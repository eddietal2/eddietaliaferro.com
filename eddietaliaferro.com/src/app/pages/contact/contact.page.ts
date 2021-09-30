import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastController, LoadingController, IonInput, IonSpinner, AlertController } from '@ionic/angular';
import { ContactService } from 'src/app/services/contact/contact.service';
import { catchError, tap } from 'rxjs/operators';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
})
export class ContactPage implements OnInit {
  contactForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private alertController: AlertController,
    private contact: ContactService,
    ) { }

  ngOnInit() {
    this.contactForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required]],
      message: ['', [Validators.required,]]
    });
  }
  sendMessage(data) {
    console.log(data);
    this.contact.sendMessage(data)
    .pipe(
      tap(res => {
        if (!res) {
          console.log('There was no response.');
        }
      }),
      catchError(e => {
        console.error(e);
        if (e.error.msg === 'There was no message that saved.') {
          this.presentAlert('Error', 'There was an error with sending the message. Please try again later');
        }
        if (e.error.msg === 'Message does not have all properties!') {
          this.presentAlert('Form incomplete', 'The form needs all fields to be complete.');
        } else {
          this.presentAlert('Server Error', 'There was an error with the server. Please come back later.');
        }
        throw new Error(e);
      })
    )
    .subscribe(
      data => {
        console.log(data);
      }
    )
  }

  async presentAlert(header: string, msg: string) {
    const alert = await this.alertController.create({
      cssClass: 'danger-alert',
      header,
      message: msg,
      buttons: [{
        text: 'OK'
      }]
    });

    await alert.present();
  }
  donatePage() {

  }

}
