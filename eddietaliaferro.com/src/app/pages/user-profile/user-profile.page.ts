import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth/auth.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PicturesService } from 'src/app/services/pictures/pictures.service';
import { Storage } from '@ionic/storage';
import { JwtHelperService } from '@auth0/angular-jwt';


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
    private helper: JwtHelperService,
  ) { }

  ngOnInit() {
    this.storage.get(this.TOKEN_KEY).then(
      token => {
        const decoded = this.helper.decodeToken(token);
        console.log(decoded);
      }
    );
    this.storage.remove(this.TOKEN_KEY);
    this.storage.set(this.TOKEN_KEY, {
      name: 'Eddie'
    })
    this.storage.get(this.TOKEN_KEY).then(
      token => {
        const decoded = this.helper.decodeToken(token);
        console.log(decoded);
      }
    );


    this.userFullName = this.auth.userFullName.subscribe(
      data => {
        console.log(data);
        this.userFirstName = data.split(" ")[0];
        this.userLastName = data.split(" ")[1];
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
  editProfile(picture) {
    console.log('checking email')
    if(this.userProfileForm.value.email === this.userProfileForm.value.oldEmail) {
      console.log('There emails were the same!');
      if(!this.pictureDataURL) {
        let updatedProfile = {
          fullName: this.userProfileForm.value.firstName + ' ' + this.userProfileForm.value.lastName,
          email: this.userProfileForm.value.email,
          password: this.userProfileForm.value.password,
          picture: this.userPicture
        }
        this.auth.updateProfile(updatedProfile).subscribe(
          data => {
            console.log(data);
            if(data['isMatch'] === true) {
                this.storage.remove(this.TOKEN_KEY);
                this.auth.userFullName.next(data['fullName']);
                this.auth.userEmail.next(data['email']);
                this.auth.userPicture.next(data['picture']);
            }
        })
      } else {
      console.log('Getting Thumbnail S3 URL');
      const formData = new FormData();
      let pictureFile = new File([this.dataURLtoBlob(this.pictureDataURL)], 'user-profile-picture.png');
      formData.append('user-profile-picture', pictureFile);
        this.pictureService.userProfilePictureUpload(formData).subscribe(
          pictureURL => {
            this.userProfileForm.value.picture = pictureURL['objectUrl'];

            let updatedProfile = {
              fullName: this.userProfileForm.value.firstName + ' ' + this.userProfileForm.value.lastName,
              email: this.userProfileForm.value.email,
              password: this.userProfileForm.value.password,
              picture: this.userProfileForm.value.picture,
            }
            this.auth.updateProfile(updatedProfile).subscribe(
              data => {
                console.log(data);
                if(data['isMatch'] === true) {
                  this.storage.remove(this.TOKEN_KEY);
                  this.storage.set(this.TOKEN_KEY, {
                    picture: data['picture'],
                    email: data['email'],
                    fullName: data['fullName'],
                  }).then( data => {
                    this.auth.userFullName.next(data['fullName']);
                    this.auth.userEmail.next(data['email']);
                    this.auth.userPicture.next(data['picture']);
                    const decoded = this.helper.decodeToken(data);
                    const isExpired = this.helper.isTokenExpired(data);
                    console.log(decoded)
                  })
                }
            })
      })
      }
    } else {
      console.log('The emails were not the same');
      this.auth.checkEmail(this.userProfileForm.value.email).subscribe(
        data => {
          if(!data['isEmail']) {
            console.log('No one else has this email!')
            if(!this.pictureDataURL) {
              let updatedProfile = {
                fullName: this.userProfileForm.value.firstName + ' ' + this.userProfileForm.value.lastName,
                email: this.userProfileForm.value.email,
                password: this.userProfileForm.value.password,
                picture: this.userPicture
              }
              this.auth.updateProfile(updatedProfile).subscribe(
                data => {
                  console.log(data);
                  if(data['isMatch'] === true) {
                    this.auth.userFullName.next(data['fullName']);
                    this.auth.userEmail.next(data['email']);
                    this.auth.userPicture.next(data['picture']);
                  }
              })
            }
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
                    email: this.userProfileForm.value.email,
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

}
