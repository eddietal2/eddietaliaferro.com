import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UntypedFormGroup, UntypedFormBuilder, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  blogID
  loginForm: UntypedFormGroup;
  BACKEND_URL = environment.url;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private auth: AuthService,
    private formBuilder: UntypedFormBuilder) { }

  ngOnInit() {
    this.blogID = this.activatedRoute.snapshot.paramMap.get('id');
    console.log('From Blog Page: ' + this.blogID);
    this.loginForm = this.formBuilder.group({
      email: ['eddielacrosse2@gmail.com', [Validators.required]],
      password: ['Et061792!', [Validators.required,]]
    });
  }
  login() {
    if(this.blogID === 'no-blog-id') {
      this.auth.login(this.loginForm.value.email, this.loginForm.value.password);
    }
    else if (this.blogID) {
      console.log(this.blogID + '...!!!')
      this.auth.login(this.loginForm.value.email, this.loginForm.value.password);
      this.router.navigate(['/blog/blog-page', this.blogID])
    }
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
