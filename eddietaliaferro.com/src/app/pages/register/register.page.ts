import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastController, LoadingController, IonInput, IonSpinner, AlertController, ModalController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth/auth.service';
import { PicturesService } from 'src/app/services/pictures/pictures.service';
import { catchError, tap } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { SuccessModalComponent } from 'src/app/components/success-modal/success-modal.component';


@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit, OnDestroy {
  emailCheckSub: Subscription;
  registerForm: FormGroup;
  pictureDataURL: string | ArrayBuffer;
  passwordShow = false;
  validCode = false;
  code = '';

  validationMessasges = {
    email: [
      { type: 'email', message: 'Please enter a valid email address'}
    ],
    password: [
      { type: 'password', message: 'Please enter a valid password that is at least 6 characters long'}
    ]
  };
  codeSub: any;

  constructor(
    private router: Router,
    private auth: AuthService,
    private alertController: AlertController,
    private modalController: ModalController,
    private pictureService: PicturesService,
    private formBuilder: FormBuilder) { }


    ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstName: ['John', [Validators.required]],
      lastName: ['Doe', [Validators.required]],
      // picture: ['', [Validators.required]],
      email: ['networkbiz92@gmail.com', [Validators.required, Validators.email]],
      password: ['123456', [Validators.required]]
    });
    console.log(this.registerForm.valid);
  }
  back() {
    this.router.navigate(['login', this.auth.blogID]);
  }
  register() {
    console.clear();
    console.log('Registering User Data: ');
    console.log(this.registerForm.value);
    this.getPictureS3URL()
    let fullName = this.registerForm.value.firstName + ' ' + this.registerForm.value.lastName;
    let email = this.registerForm.value.email;
    let picture = this.registerForm.value.picture;
    let password = this.registerForm.value.password;

    this.emailCheckSub = this.auth.checkEmail(email).subscribe(
      data => {
        console.log(data);
        if(data['isEmail']) {
          this.presentAlert('Use different Email', 'There is a user that already exists with this email.\n' + email);
          return;
        }
        else {
          return this.codeAlert('6 Digit Code', 'An email has been sent to the email you provided with a 6 digit code. Please Enter the correct code to finish signing up.', fullName, picture, email, password);
        }
      }
    )

    }
  passwordShowToggle() {
    let passwordInput = document.getElementById('password-input');
    if(!this.passwordShow) {
      passwordInput.setAttribute('type', 'text');
      console.log(passwordInput)
      this.passwordShow = true;
      return;
    }
    else {
      passwordInput.setAttribute('type', 'password');
      console.log(passwordInput)
      this.passwordShow = false;
      return;
    }
  }
  inputFocus(e, input) {
    console.clear()
    console.log(e);
    console.log(input);
    let firstNameInput = document.getElementById('first-name-input');
    let lastNameInput = document.getElementById('last-name-input');
    let emailInput = document.getElementById('email-input');
    let passwordInput = document.getElementById('password-input');

    if(input === 'firstName') {
      firstNameInput.style.border = '2px solid #3cf63c';
    }
    if(input === 'lastName') {
      lastNameInput.style.border = '2px solid #3cf63c';
    }
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
    let firstNameInput = document.getElementById('first-name-input');
    let lastNameInput = document.getElementById('last-name-input');
    let emailInput = document.getElementById('email-input');
    let passwordInput = document.getElementById('password-input');

    firstNameInput.style.border = '2px solid white';
    lastNameInput.style.border = '2px solid white';
    emailInput.style.border = '2px solid white';
    passwordInput.style.border = '2px solid white';


  }
  getPictureFile(event) {
    const pictureOne = document.getElementById('picture-input');
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
    if(!this.pictureDataURL) {
      this.registerForm.value.picture = 'https://eddietaliaferro-com.s3.us-east-2.amazonaws.com/picture/001001635260303625_picture.png';
      return;
    }
    else {
      const formData = new FormData();
      let pictureOneFile = new File([this.dataURLtoBlob(this.pictureDataURL)], 'user-profile-picture.png');
      formData.append('user-profile-picture', pictureOneFile);
      this.pictureService.userProfilePictureUpload(formData)
          .subscribe(pictureURL => {
            this.registerForm.value.picture = pictureURL['objectUrl'];
          });
    }
  }
  dataURLtoBlob(dataurl) {
    // console.log(dataurl)
    if(!dataurl) {
      this.registerForm.value.picture = 'https://eddietaliaferro-com.s3.us-east-2.amazonaws.com/picture/001001635260303625_picture.png';
      return;
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
      }],
    });

    await alert.present();
  }
  async codeAlert(header: string, msg: string, fullName, picture, email, password) {
    const alert = await this.alertController.create({
      cssClass: 'danger-alert',
      header,
      message: msg,
      buttons: [
        {
          text: 'Submit',
          handler: () => {
            console.log('Confirm Okay');
            if(this.validCode) {
              let emailCheckPromise = new Promise((res, rej) => {
                res(this.emailCheckSub.unsubscribe())
                rej(console.log('emialCheckSubPromise Rejected'))
              })
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
              .subscribe( data => {
                console.log(data);
                return this.presentSuccessModal();
              })
            }
            else {

            }

          }
        },
        {
          text: 'Send New Code',
          handler: () => {
            console.log('Confirm Okay');
          }
        },
        {
          text: 'Cancel',
          role: 'cancel',
        },
      ],
      inputs: [
        {
          name: 'code',
          id: 'code',
          type: 'text',
          placeholder: 'Enter 6 Digit code'
        },
      ]
    });

    await alert.present().then(
      data => {
        console.clear();

        // Create new ion-input
        let newIonicInput = document.createElement('ion-input');
        let inputValue;
        newIonicInput.setAttribute('id', 'ion-code');
        newIonicInput.setAttribute('type', 'text');
        newIonicInput.setAttribute('maxlength', '6');
        newIonicInput.setAttribute('placeholder', 'Enter 6 Digit Code: ');
        console.log(newIonicInput);
        

        // Remove Default Ionic-Alert Input
        let alertInput = document.getElementById('code');
        insertAfter(alertInput, newIonicInput)
        alertInput.remove();

        function insertAfter(referenceNode, newNode) {
          referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
        }

        // Send Code
        this.generateCode(6);
        this.codeSub = this.auth.sendRegistrationCode(this.registerForm.value.email, this.code).subscribe(
          data => {
            console.log('Code Successfully sent')
            newIonicInput.addEventListener('ionChange', (e) => {
              inputValue = e['detail'].value;
              console.log(inputValue);
              if(inputValue === this.code) {
                console.log('Congrats');
                return this.validCode = true;
              }
              else if (inputValue != this.code) {
                console.log('Wrong Code');
              }
            })
          }
        )
      }
    );
  }
  async generateCode(length) {
    let result = '';
    const characters = '0123456789';
    const charactersLength = characters.length;

    for ( let i = 0; i < length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    console.log('Generated Code: ' + result);
    return this.code = result;
  }
  // async sendNewCode() {
  // await this.generateCode(6).then(code => {
  //   console.log('Data: ' + code);
  //   this.auth.sendEmailWithCode(code, this.userEmail);
  // });

  // await this.presentNewCodeToast(this.userEmail);
  // }
  async presentSuccessModal() {
    const modal = await this.modalController.create({
      component: SuccessModalComponent,
      componentProps: {
        'firstName': this.registerForm.value.firstName,
        'email': this.registerForm.value.email,
        'picture': this.registerForm.value.picture,
        'page': 'register',
      },
      cssClass: 'my-custom-class'
    });
    return await modal.present()
      .catch((e) => {
        throw Error(e);
      })
      .then(() => {
        this.router.navigate(['/login', this.auth.blogID]);
        setTimeout(() => {
          modal.dismiss();
        }, 5000);
      })
  }

  @HostListener('unloaded')
  ngOnDestroy() {
    console.log('Register Page destroyed');
    this.emailCheckSub.unsubscribe();
  }
}
