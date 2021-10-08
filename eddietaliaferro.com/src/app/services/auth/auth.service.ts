import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { ToastController, AlertController, Platform } from '@ionic/angular';
import { environment } from '../../../environments/environment';
import { tap, catchError } from 'rxjs/operators';
import { BehaviorSubject, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  BACKEND_URL = environment.url;
  loginSub: Subscription;
  TOKEN_KEY = 'access_token';
  user = null;
  downloadPrompt;
  activeEmail = '';

  authenticationState = new BehaviorSubject(false);
  userType = new BehaviorSubject('none');
  userFullName = new BehaviorSubject('none');
  userEmail = new BehaviorSubject('none');
  userPicture = new BehaviorSubject('none');

  constructor(
    private http: HttpClient,
    private storage: Storage,
    private alertController: AlertController,
    private helper: JwtHelperService,
    private plt: Platform,
    private router: Router,
    private toast: ToastController
  ) {

    // Inside the constructor we always check for an existing token so we can automatically log in a user
    this.plt.ready().then(() => {
      this.checkToken();
    });
    console.log('Authentication State');
    this.authenticationState.subscribe(console.log); }

  login(email, password) {
    if(email === 'eddielacrosse2@gmail.com') {
      // navigate to admin page?
      this.http.post(`${this.BACKEND_URL}/user/login-user-admin`, {email, password})
      .pipe(
        tap(res => {
          if (!res) {
            console.log('There was no response.');
          }
          this.storage.set(this.TOKEN_KEY, res['token']);
          this.user = this.helper.decodeToken( res['token']);
          console.log(this.user)
          this.userType.next('admin');
          this.authenticationState.next(true);
          console.log('Active User: ' + this.user.email);
        }),
        catchError(e => {
          console.error(e);
          if (e.error.msg === 'The email and password don\'t match.') {
            this.presentAlert('Incorrect Email/Password', 'The email and password don\'t match.');
          } else if (e.error.msg === 'The user does not exist') {
            this.presentAlert('Nonexistent User Account', 'There is no account with that email address.');
          } else if (e.message.startsWith('Http failure response')) {
            this.presentAlert('Server Connection Error', 'There was a problem connecting to the server. Please try again later.');
          }  else {
            this.presentAlert('Email/Password Error', 'Please try again.');
          }
          throw new Error(e);
        })
      )
      .subscribe(
        data => {
          this.userFullName.next(data['fullName']);
          this.userPicture.next(data['picture']);
          this.userEmail.next(data['email']);
        }
      );
    } else {
        this.http.post(`${this.BACKEND_URL}/user/login-user`, {email, password})
        .pipe(
          tap(res => {
            if (!res) {
              console.log('There was no response.');
            }
            this.storage.set(this.TOKEN_KEY, res['token']);
            this.user = this.helper.decodeToken( res['token']);
            this.userType.next('user');
            this.authenticationState.next(true);
            console.log('Active User: ' + this.user.email);
          }),
          catchError(e => {
            console.error(e);
            if (e.error.msg === 'The email and password don\'t match.') {
              this.presentAlert('Incorrect Email/Password', 'The email and password don\'t match.');
            } else if (e.error.msg === 'The user does not exist') {
              this.presentAlert('Nonexistent User Account', 'There is no account with that email address.');
            } else if (e.message.startsWith('Http failure response')) {
              this.presentAlert('Server Connection Error', 'There was a problem connecting to the server. Please try again later.');
            }  else {
              this.presentAlert('Email/Password Error', 'Please try again.');
            }
            throw new Error(e);
          })
        )
        .subscribe(
          data => {
            console.log(data);
            this.userFullName.next(data['fullName']);
            this.userPicture.next(data['picture']);
            this.userEmail.next(data['email']);
          }
        );
    }
  }
  logout() {
    this.storage.remove(this.TOKEN_KEY).then((token) => {
      console.log('Logging out...');
      this.user = null;
      this.authenticationState.next(false);
      this.userType.next('none');
      this.userFullName.next('none');
      this.userPicture.next('none');
      this.userEmail.next('none');
      window.location.reload();
    });
  }
  register(fullName, picture, email, password) {
    return this.http.post(`${this.BACKEND_URL}/user/register-user`, {fullName, picture, email, password});
  }

  // looks up our storage for a valid JWT and if found, changes our authenticationState
  async checkToken() {
    this.storage.get(this.TOKEN_KEY).then(token => {
      if (token) {
        const decoded = this.helper.decodeToken(token);
        const isExpired = this.helper.isTokenExpired(token);

        if (!isExpired) {
          this.user = decoded;
          console.log('Decoded Token: ' + JSON.stringify(decoded));
          this.authenticationState.next(true);
          console.log(decoded);
          // Check to see if the Token is for an admin or user
          if(decoded.email === 'eddielacrosse2@gmail.com') {
            this.userType.next('admin');
            this.userPicture.next(decoded.picture);
            this.userEmail.next(decoded.email);
            this.userFullName.next(decoded.fullName);
          } 
          else if((decoded.email !== 'eddielacrosse2@gmail.com' && decoded.email !== '')) {
            this.userType.next('user');
            this.userPicture.next(decoded.picture);
            this.userEmail.next(decoded.email);
            this.userFullName.next(decoded.fullName);
          }
        } else {
          console.log('Token Removed from Storage');
          this.storage.remove(this.TOKEN_KEY);
        }
      }
    });
  }

  async presentAlert(header: string, msg: string) {
    const alert = await this.alertController.create({
      cssClass: 'danger-alert',
      header,
      message: msg,
      buttons: [{
        text: 'OK'
      }]
    });

    await alert.present();
  }
}


