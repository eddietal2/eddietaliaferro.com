import { Component, OnInit, OnDestroy, HostListener, } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Router } from '@angular/router';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { MenuController, AlertController } from '@ionic/angular';
import { AuthService } from './services/auth/auth.service';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  userType;
  userPicture;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private auth: AuthService,
    private storage: Storage,
    private router: Router,
    private menu: MenuController,
    private alertController: AlertController
  ) {
    this.initializeApp();
  }
  ngOnInit() {
    this.auth.userType.subscribe(
      data => {
        console.log(data);
        this.userType = data;
        return;
      }
    )
    this.auth.userPicture.subscribe(
      data => {
        this.userPicture = data;
        return;
      }
    )

  }
  initializeApp() {
    this.storage.create();
    this.auth.checkToken();
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });

    // State for the User. If Authentication State == False, the app reverts back to the landing page
    this.auth.authenticationState.subscribe(async state => {
      if (state) {
        this.router.navigate(['home']);

      } else {
        this.router.navigate(['']);
      }
    });
  }
  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }
  closeMenu() {
    this.menu.close();
  }
  async logoutConfirm() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      message: 'Are you sure you want to Logout?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Yes',
          handler: () => {
            this.auth.logout();
          }
        }
      ]
    });

    await alert.present();
  }
  @HostListener('unloaded')
  ngOnDestroy() {
    this.auth.authenticationState.unsubscribe();
  }

}
