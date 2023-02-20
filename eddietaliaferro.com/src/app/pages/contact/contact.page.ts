import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UntypedFormGroup, UntypedFormBuilder, Validators } from '@angular/forms';
import { AlertController, ModalController } from '@ionic/angular';
import { ContactService } from 'src/app/services/contact/contact.service';
import { catchError, tap } from 'rxjs/operators';
import { SuccessModalComponent } from 'src/app/components/success-modal/success-modal.component';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
})
export class ContactPage implements OnInit {
  contactForm: UntypedFormGroup;

  validationMessasges = {
    email: [
      { type: 'email', message: 'Please enter a valid email address'}
    ],
  };

  constructor(
    private formBuilder: UntypedFormBuilder,
    private modalController: ModalController,
    private alertController: AlertController,
    private contact: ContactService,
    private router: Router,
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
            this.presentSuccessModal();
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
  async presentSuccessModal() {
    const modal = await this.modalController.create({
      component: SuccessModalComponent,
      componentProps: {
        'fullName': this.contactForm.value.name,
        'email': this.contactForm.value.email,
        'page': 'contact',
      },
      cssClass: 'my-custom-class'
    });
    return await modal.present()
      .catch((e) => {
        throw Error(e);
      })
      .then(() => {
        this.router.navigateByUrl('/contact');
        setTimeout(() => {
          modal.dismiss();
        }, 5000);
      })
  }
  donatePage() {

  }
  inputFocus(e, input) {
    console.clear()
    console.log(e);
    console.log(input);
    let fullnameInput = document.getElementById('full-name-input');
    let emailInput = document.getElementById('email-input');
    let messageInput = document.getElementById('message-input');
    if(input === 'full-name') {
      fullnameInput.style.border = '2px solid #3cf63c';
    }
    if(input === 'email') {
      emailInput.style.border = '2px solid #3cf63c';
    }
    if(input === 'message') {
      messageInput.style.border = '2px solid #3cf63c';
    }
  }
  inputBlur(e) {
    console.clear()
    console.log(e);
    let fullnameInput = document.getElementById('full-name-input');
    let emailInput = document.getElementById('email-input');
    let messageInput = document.getElementById('message-input');

    fullnameInput.style.border = '2px solid white';
    emailInput.style.border = '2px solid white';
    messageInput.style.border = '2px solid white';
  }

}
