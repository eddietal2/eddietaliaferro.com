import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-home-illustration-two',
  templateUrl: './home-illustration-two.component.html',
  styleUrls: ['./home-illustration-two.component.scss'],
})
export class HomeIllustrationTwoComponent implements OnInit {
  canvas: HTMLCanvasElement;

  constructor() { }

  ngOnInit() {
    window.onscroll = function () {
      this.scrollRotate();
    };
  }
  scrollRotate() {
    console.log(window.scrollY);
    let yin = document.getElementById("yin");
    yin.style.transform = "translateX(" + window.pageYOffset/2 + "px)";
  }

}
