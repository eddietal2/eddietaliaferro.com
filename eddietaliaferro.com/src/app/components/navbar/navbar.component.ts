import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth/auth.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  userType;

  constructor(
    private auth: AuthService,
    private alertController: AlertController,
    ) { }

  ngOnInit() {
    this.auth.userType.subscribe(
      data => {
        console.log(data);
        this.userType = data;
        return;
      }
    )
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
}
