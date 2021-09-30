import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  userType;
  
  constructor(
    private auth: AuthService) { }

  ngOnInit() {
    this.auth.userType.subscribe(
      data => {
        console.log(data);
        this.userType = data;
        return;
      }
    )
  }
  logout() {
    this.auth.logout();
  }
  openMenu () {
    console.log('Opening side menu ..')
  }

}
