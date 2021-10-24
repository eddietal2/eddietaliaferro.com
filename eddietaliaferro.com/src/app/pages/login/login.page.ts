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
      email: ['eddielacrosse2@gmail.com', [Validators.required]],
      password: ['Et061792!', [Validators.required,]]
    });
  }
  login() {
    this.auth.login(this.loginForm.value.email, this.loginForm.value.password)
  }
  register() {
    this.router.navigateByUrl('register');
  }
  inputFocus(e, input) {
    console.clear()
    console.log(e);
    console.log(input);
    let emailInput = document.getElementById('email-input');
    let passwordInput = document.getElementById('password-input');
    if(input === 'email') {
      emailInput.style.border = '2px solid #3cf63c';
    }
    if(input === 'password') {
      passwordInput.style.border = '2px solid #3cf63c';
    }
  }
  inputBlur(e) {
    console.clear()
    console.log(e);
    let emailInput = document.getElementById('email-input');
    let passwordInput = document.getElementById('password-input');
    passwordInput.style.border = '2px solid white';
    emailInput.style.border = '2px solid white';
  }

}
