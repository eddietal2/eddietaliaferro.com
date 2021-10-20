import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth/auth.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PicturesService } from 'src/app/services/pictures/pictures.service';
import { Storage } from '@ionic/storage';
import { JwtHelperService } from '@auth0/angular-jwt';
import { AlertController, ToastController } from '@ionic/angular';



@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.page.html',
  styleUrls: ['./user-profile.page.scss'],
})
export class UserProfilePage implements OnInit {
  userProfileForm: FormGroup;
  userFullName: Subscription;
  userFirstName: string;
  userLastName: string;
  userPicture: string;
  pictureDataURL: any;
  pictureS3Link: any;
  userEmail: any;
  newUserEmail: any;
  userPassword: any;
  TOKEN_KEY = 'access_token';

  constructor(
    private auth: AuthService,
    private storage: Storage,
    private pictureService: PicturesService,
    private formBuilder: FormBuilder,
    private alertController: AlertController,
    private toastController: ToastController,
    private helper: JwtHelperService,
  ) { }

  ngOnInit() {
    this.storage.get(this.TOKEN_KEY).then(
      token => {
        const decoded = this.helper.decodeToken(token);
        console.clear();
        console.log(decoded);
      }
    );
    this.userFullName = this.auth.userFullName.subscribe(
      data => {
        this.userFirstName = data.split(" ")[0];
        this.userLastName = data.split(" ")[1];
        console.log(this.userFirstName)
        console.log(this.userLastName )
    });
    this.auth.userPicture.subscribe(
      data => {
        console.log(data);
        this.userPicture = data;
    });
    this.auth.userEmail.subscribe(
      data => {
        console.log(data);
        return this.userEmail = data;
    });
    this.userProfileForm = this.formBuilder.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      picture: ['', [Validators.required]],
      email: ['', [Validators.required]],
      oldEmail: [this.userEmail, [Validators.required]],
      password: ['', [Validators.required,]],
    });
    this.userProfileForm.patchValue({
      firstName: this.userFirstName,
      lastName: this.userLastName,
      email: this.userEmail,
    })
  }
  editProfile() {

    // If Password Input is Empty
    if(this.userProfileForm.value.password === '') {
      return this.wrongPasswordAlert('You forgot to enter a password!')
    }

    // If currenty Email is remaining the same.
    if(this.userProfileForm.value.email === this.userEmail) {
      console.log('There emails were the same!');
      if(!this.pictureDataURL) {
        let updatedProfile = {
          fullName: this.userProfileForm.value.firstName + ' ' + this.userProfileForm.value.lastName,
          oldEmail: this.userEmail,
          newEmail: this.userProfileForm.value.email,
          password: this.userProfileForm.value.password,
          picture: this.userPicture,
        }
        this.auth.updateProfile(updatedProfile).subscribe(
          data => {
            // console.clear()
            console.log('Change Picture Update Profile Data: ')
            console.log(data)
            if(data['isMatch'] === true) {
                this.storage.remove(this.TOKEN_KEY);
                this.auth.userFullName.next(data['fullName']);
                this.auth.userEmail.next(data['newEmail']);
                this.auth.userPicture.next(data['picture']);
                this.successToast('You have successfully updated your profile!')
                this.userProfileForm.patchValue({
                  password: ''
                })
            }
        })
      }
      console.log('Getting Thumbnail S3 URL');
      const formData = new FormData();
      let pictureFile = new File([this.dataURLtoBlob(this.pictureDataURL)], 'user-profile-picture.png');
      formData.append('user-profile-picture', pictureFile);
        this.pictureService.userProfilePictureUpload(formData).subscribe(
            pictureURL => {
              this.userProfileForm.value.picture = pictureURL['objectUrl'];
              console.clear();
              console.log('USER EMAIL');
              console.log(this.userEmail);

              let updatedProfile = {
                fullName: this.userProfileForm.value.firstName + ' ' + this.userProfileForm.value.lastName,
                oldEmail: this.userEmail,
                newEmail: this.userProfileForm.value.email,
                password: this.userProfileForm.value.password,
                picture: this.userProfileForm.value.picture,
              }
              this.auth.updateProfile(updatedProfile).subscribe(
                data => {
                  console.log(data);
                  if(data['isMatch'] === true) {
                    this.storage.remove(this.TOKEN_KEY);
                    this.auth.userFullName.next(data['fullName']);
                    this.auth.userEmail.next(data['newEmail']);
                    this.auth.userPicture.next(data['picture']);
                    this.successToast('You have successfully updated your profile!')
                    this.userProfileForm.patchValue({
                      password: ''
                    })
                  }
              })
        })
      }
    // If current email is being changed via the email input
    else {
      console.log('The emails were not the same');
      this.auth.checkEmail(this.userProfileForm.value.email).subscribe(
        data => {
          if(!data['isEmail']) {
            console.log('No one else has this email!')
            // If the user does NOT change their profile picture
            if(!this.pictureDataURL) {
              let updatedProfile = {
                fullName: this.userProfileForm.value.firstName + ' ' + this.userProfileForm.value.lastName,
                oldEmail: this.userEmail,
                newEmail: this.userProfileForm.value.email,
                password: this.userProfileForm.value.password,
                picture: this.userPicture
              }
              console.log(updatedProfile)
              this.auth.updateProfile(updatedProfile).subscribe(
                data => {
                  console.log(data);
                  if(data['isMatch'] === true) {
                    this.auth.userFullName.next(data['fullName']);
                    this.auth.userEmail.next(data['email']);
                    this.auth.userPicture.next(data['picture']);
                    this.successToast('You have successfully updated your profile!')
                    this.userProfileForm.value.password = '';
                  }
              })
            }
            // If user uploads a new Profile Picture
            else {
            console.log('Getting Thumbnail S3 URL');
            const formData = new FormData();
            let pictureFile = new File([this.dataURLtoBlob(this.pictureDataURL)], 'user-profile-picture.png');
            formData.append('user-profile-picture', pictureFile);
              this.pictureService.userProfilePictureUpload(formData).subscribe(
                pictureURL => {
                  this.userProfileForm.value.picture = pictureURL['objectUrl'];

                  let updatedProfile = {
                    fullName: this.userProfileForm.value.firstName + ' ' + this.userProfileForm.value.lastName,
                    oldEmail: this.userEmail,
                    newEmail: this.userProfileForm.value.email,
                    password: this.userProfileForm.value.password,
                    picture: this.userProfileForm.value.picture,
                  }
                  this.auth.updateProfile(updatedProfile).subscribe(
                    data => {
                      console.log(data);
                      if(data['isMatch'] === true) {
                        this.auth.userFullName.next(data['fullName']);
                        this.auth.userEmail.next(data['email']);
                        this.auth.userPicture.next(data['picture']);
                        this.successToast('You have successfully updated your profile!')
                        this.userProfileForm.value.password = '';
                      }
                  })
            })
            }
          } else {
            console.log('SOMEONE HAS THIS EMAIL! Retry')
          }
        }
      )
    }
  }
  getPictureFile(event) {
    let userCurrentPicture = document.getElementById('user-current-picture');
    userCurrentPicture.style.display = 'none';
    console.log(event);
    const pictureOne = document.getElementById('user-profile-picture');
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
  dataURLtoBlob(dataurl) {
    // console.log(dataurl)
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
  changePassword() {
    
  }
  async presentAlertPrompt(email) {
    const alert = await this.alertController.create({
      cssClass: 'change-password-alert',
      header: 'Change Password',
      inputs: [
        {
          name: 'current-password',
          id: 'current-password',
          type: 'password',
          placeholder: 'Password'
        },
        {
          name: 'new-password',
          id: 'new-password',
          type: 'password',
          placeholder: 'New Password'
        },
        {
          name: 'retype-new-password',
          id: 'retype-new-password',
          type: 'password',
          placeholder: 'Re-Type New Password'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',

          handler: (e) => {
            console.log(e);
            let currentPassword = e['current-password'];
            let newPassword = e['new-password'];
            let reTypeNewPassword = e['retype-new-password'];

            if(currentPassword == newPassword) {
              console.log('New password cannot be the same as old password');
              return false;
            }
            else if (newPassword != reTypeNewPassword) {
              console.log('New Passwords do not match!');
              this.wrongPasswordAlert('New passwords do not match. Please double check both entries.');;
              return false ;
            }
              this.auth.changePassword(email, currentPassword, newPassword).subscribe(
                data => {
                  if(!data) {
                    console.log(data);
                    this.wrongPasswordAlert('The password was wrong. Please end your current password again.');
                    return;
                  }
                  if(data) {
                    this.successToast('You have successfully changed your password');
                    this.alertController.dismiss()
                    return;
                  }
                }
              )
            return false;
          }
        }
      ]
    });

    await alert.present();
  }
  async wrongPasswordAlert(msg) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Wrong Password!',
      message: msg,
      buttons: ['OK']
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }
  async successToast(msg) {
    const toast = await this.toastController.create({
      message: msg,
      // cssClass: 'success-toast',
      duration: 2000
    });
    toast.present();
  }


}
