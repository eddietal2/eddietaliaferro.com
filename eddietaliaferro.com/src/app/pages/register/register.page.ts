import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastController, LoadingController, IonInput, IonSpinner, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  registerForm: FormGroup;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      picture: ['', [Validators.required]],
      email: ['', [Validators.required]],
      password: ['', [Validators.required,]]
    });
  }
  back() {
    this.router.navigateByUrl('login');
  }
  register() {
    this.router.navigateByUrl('register');
  }

}
