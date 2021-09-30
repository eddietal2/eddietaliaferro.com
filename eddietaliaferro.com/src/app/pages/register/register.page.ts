import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastController, LoadingController, IonInput, IonSpinner, AlertController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth/auth.service';
import { PicturesService } from 'src/app/services/pictures/pictures.service';
import { catchError, tap } from 'rxjs/operators';


@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  registerForm: FormGroup;
  pictureDataURL: string | ArrayBuffer;

  constructor(
    private router: Router,
    private auth: AuthService,
    private alertController: AlertController,
    private pictureService: PicturesService,
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
  register(picture) {
    console.log(this.registerForm.value);
    let fullName = this.registerForm.value.firstName + ' ' + this.registerForm.value.lastName;
    let email = this.registerForm.value.email;
    let password = this.registerForm.value.password;
    console.log(picture)
    this.auth.register(fullName, picture, email, password)
    .pipe(
      tap(res => {
        if (!res) {
          console.log('There was no response.');
        }
      }),
      catchError(e => {
        console.error(e);
        if (e.error.msg === 'The user already exists') {
          this.presentAlert('Use different Email', 'There is a user that already exists with this email.');
        } else {
          this.presentAlert('Server Error', 'There was an error with the server. Please come back later.');
        }
        throw new Error(e);
      })
    )
    .subscribe(
      data => {
        console.log(data);
        this.router.navigate(['/register/success', this.registerForm.value.firstName, picture])
      }
    )
  }
  getPictureFile(event) {
    const pictureOne = document.getElementById('picture');
    let reader = new FileReader();

    if (pictureOne) {
      reader.readAsDataURL(event.target.files[0]);
    }
    reader.addEventListener('load', () => {
      // Convert image file ot base64 string
      this.pictureDataURL = reader.result;
      console.log(this.pictureDataURL);
      }, false);
  }
  getPictureS3URL() {
    const formData = new FormData();
    let pictureOneFile = new File([this.dataURLtoBlob(this.pictureDataURL)], 'user-profile-picture.png');
    formData.append('user-profile-picture', pictureOneFile);
    this.pictureService.userProfilePictureUpload(formData)
        .subscribe(pictureURL => {
          this.registerForm.value.picture = pictureURL['objectUrl'];
          this.register(pictureURL['objectUrl'])
        });
  }
  dataURLtoBlob(dataurl) {
    // console.log(dataurl)
    if(!dataurl) {
      this.noPictureAlert();
    }
    const arr = dataurl.split(',');
    const mime = arr[0].match(/:(.*?);/)[1];
    const bstr = atob(arr[1]);
    let n = bstr.length;
    const u8arr = new Uint8Array(n);

    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }
    return new Blob([u8arr], {type: mime});
  }
  async noPictureAlert() {
    const alert = await this.alertController.create({
      cssClass: 'danger-alert',
      message: 'Please upload a profile picture!',
      buttons: [{
        text: 'OK'
      }]
    });

    await alert.present();
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
