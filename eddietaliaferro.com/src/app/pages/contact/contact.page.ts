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

  validationMessasges = {
    email: [
      { type: 'email', message: 'Please enter a valid email address'}
    ],
  };

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
    console.log(this.contactForm.controls)
        if(!this.contactForm.controls.name.touched) {
          this.presentAlert('No Name provided in form', 'Please enter your name.');
          return;
        }
        if(!this.contactForm.controls.email.touched) {
          this.presentAlert('No Email provided in form', 'Please enter your email.');
          return
        }
        if(!this.contactForm.controls.message.touched) {
          this.presentAlert('No Message provided in form', 'Please enter a message.');
          return;
        }
        if(!this.contactForm.controls.name.valid) {
          this.presentAlert('Please enter a valid Name', 'Please make sure your name is valid');
          return;
        }
        if(!this.contactForm.controls.email.valid) {
          this.presentAlert('Please enter a valid email', 'Make sure you have a correctly formatted email address.');
          return;
        }
        if(!this.contactForm.controls.message.valid) {
          this.presentAlert('Please enter a valid message', 'There was an issue with your message.');
          return;
        }
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
            this.contactForm.reset();
            this.presentAlert('Thank You!' ,'I will contact you via the email you provided at my earliest convience.')
          }
          )
  }

  async presentAlert(header:string, msg: string) {
    const alert = await this.alertController.create({
      cssClass: 'success-alert',
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
