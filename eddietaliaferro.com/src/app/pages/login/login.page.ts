import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastController, LoadingController, IonInput, IonSpinner, AlertController } from '@ionic/angular';
import { environment } from 'src/environments/environment';
import { AuthService } from 'src/app/services/auth/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm: FormGroup;
  BACKEND_URL = environment.url;

  constructor(
    private router: Router,
    private auth: AuthService,
    private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required,]]
    });
  }
  login() {
    this.auth.login(this.loginForm.value.email, this.loginForm.value.password)
  }
  register() {
    this.router.navigateByUrl('register');
  }

}
