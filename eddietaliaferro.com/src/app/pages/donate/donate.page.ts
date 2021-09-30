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

}
