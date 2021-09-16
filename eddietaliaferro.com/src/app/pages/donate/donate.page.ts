import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastController, LoadingController, IonInput, IonSpinner, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-donate',
  templateUrl: './donate.page.html',
  styleUrls: ['./donate.page.scss'],
})
export class DonatePage implements OnInit {
  donateForm: FormGroup

  constructor(
    private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.donateForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      dollar_amount: ['', [Validators.required]],
      email: ['', [Validators.required]],
      message: ['', [Validators.required,]]
    });
  }
  onSubmit() {

  }
  contactPage() {

  }

}
