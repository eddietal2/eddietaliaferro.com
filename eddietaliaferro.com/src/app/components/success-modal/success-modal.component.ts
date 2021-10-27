import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-success-modal',
  templateUrl: './success-modal.component.html',
  styleUrls: ['./success-modal.component.scss'],
})
export class SuccessModalComponent implements OnInit {
  // Register Page
  @Input() firstName: string;
  @Input() picture: string;

  // Contact Page
  @Input() fullName: string;

  @Input() email: string;
  @Input() page: string;
  message: string;

  constructor(public modalController: ModalController) { }

  ngOnInit() {
    if(this.page === 'register') {
      this.message = `Thanks for joining my my site, ${this.firstName}. When you login in, use your email: networkbiz92@gmail.com`
    }
    if(this.page === 'donate') {
      this.message = `Thanks for Donating! I really, really appreciate you for taking the time to do that!`
    }
    if(this.page === 'contact') {
      this.message = `Thanks for contacting me! I will contact you at my earliest convenience at the email you've given me in this form.`
    }
  }

  dismiss() {
    this.modalController.dismiss({
      'dismissed': true
    });
  }

}
