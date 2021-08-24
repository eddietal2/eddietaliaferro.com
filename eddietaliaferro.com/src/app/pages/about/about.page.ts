import { Component, OnInit } from '@angular/core';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit {
  slides: IonSlides;
  slideOpts = {
    initialSlide: 0,
    speed: 400,
  };

  constructor() { }

  ngOnInit() {
    // this.slides.startAutoplay();
  }
  slidesDidLoad(slides: IonSlides) {
    slides.startAutoplay();
  }
  donatePage() {
    
  }
  contactPage() {

  }
}
