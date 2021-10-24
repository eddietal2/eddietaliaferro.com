import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastController, LoadingController, IonInput, IonSpinner, AlertController } from '@ionic/angular';
import { DonateService } from 'src/app/services/donate/donate.service';

@Component({
  selector: 'app-donate',
  templateUrl: './donate.page.html',
  styleUrls: ['./donate.page.scss'],
})
export class DonatePage implements OnInit {
  donateForm: FormGroup

  constructor(
    private formBuilder: FormBuilder,
    private donateService: DonateService,
    ) { }

  ngOnInit() {
    this.donateForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      dollar_amount: ['', [Validators.required]],
      email: ['', [Validators.required]],
      message: ['', [Validators.required,]]
    });
    this.donateService.invokeStripe();
  }
  makePayment(data) {
    console.log(data);
    this.donateService.makePayment(data);
  }
  contactPage() {

  }
  inputFocus(e, input) {
    console.clear()
    console.log(e);
    let nameInput = document.getElementById('name-input');
    let emailInput = document.getElementById('email-input');
    let amountInput = document.getElementById('amount-input');
    let messageInput = document.getElementById('message-input');
    if(input === 'name') {
      console.log(nameInput)
      nameInput.style.border = '2px solid #3cf63c';
    }
    if(input === 'email') {
      emailInput.style.border = '2px solid #3cf63c';
    }
    if(input === 'amount') {
      amountInput.style.border = '2px solid #3cf63c';
    }
    if(input === 'message') {
      messageInput.style.border = '2px solid #3cf63c';
    }
  }
  inputBlur(e) {
    console.clear()
    console.log(e);
    let nameInput = document.getElementById('name-input');
    let emailInput = document.getElementById('email-input');
    let amountInput = document.getElementById('amount-input');
    let messageInput = document.getElementById('message-input');
    nameInput.style.border = '2px solid white';
    emailInput.style.border = '2px solid white';
    amountInput.style.border = '2px solid white';
    messageInput.style.border = '2px solid white';
  }

}
