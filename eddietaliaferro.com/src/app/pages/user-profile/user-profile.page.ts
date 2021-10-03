import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth/auth.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PicturesService } from 'src/app/services/pictures/pictures.service';


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
  userPicture: Subscription;
  picture: any;
  userEmail: string;
  userPassword: any;

  constructor(
    private auth: AuthService,
    private pictureService: PicturesService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.userEmail = this.auth.activeEmail;
    this.userFullName = this.auth.userFullName.subscribe(
      data => {
        console.log(data);
        this.userFirstName = data.split(" ")[0];
        this.userLastName = data.split(" ")[1];
      });
    this.userPicture = this.auth.userPicture.subscribe(
      data => {
        console.log(data);
        this.picture = data;
        return data;
      });
      this.userProfileForm = this.formBuilder.group({
        firstName: ['', [Validators.required]],
        lastName: ['', [Validators.required]],
        picture: ['', [Validators.required]],
        email: ['', [Validators.required]],
        password: ['', [Validators.required,]],
      });
      this.userProfileForm.patchValue({
        firstName: this.userFirstName,
        lastName: this.userLastName,
        email: this.userEmail,
        password: this.userPassword,
      })
  }
  editProfile() {
    console.log('Editting profile');
  }
  getPictureFile(event) {
    const pictureOne = document.getElementById('picture');
    let reader = new FileReader();

    if (pictureOne) {
      reader.readAsDataURL(event.target.files[0]);
    }
    reader.addEventListener('load', () => {
      // Convert image file ot base64 string
      this.picture = reader.result;
      console.log(this.picture);
      }, false);
  }

}
