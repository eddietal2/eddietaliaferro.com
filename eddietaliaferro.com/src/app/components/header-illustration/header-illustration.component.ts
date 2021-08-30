import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-illustration',
  templateUrl: './header-illustration.component.html',
  styleUrls: ['./header-illustration.component.scss'],
})
export class HeaderIllustrationComponent implements OnInit {

  constructor() { }

  ngOnInit() {}
  bluePill() {
    console.log('User has selected Blue Pill');
  }
  redPill() {
    console.log('User has selected Red Pill');
  }

}
