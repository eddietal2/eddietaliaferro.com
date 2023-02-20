import { Component, OnInit } from '@angular/core';
import Swiper, { SwiperOptions, Autoplay } from 'swiper';

Swiper.use([Autoplay]);

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit {

  swiperConfig: SwiperOptions = {
    slidesPerView: 1,
    spaceBetween: 20,
    navigation: true,
    pagination: { clickable: true },
    scrollbar: { draggable: true },
  };

  constructor() { }

  ngOnInit() {
    // this.slides.startAutoplay();
  }
  onSwiper(swiper) {
    // console.log(swiper);
  }
  donatePage() {
    
  }
  contactPage() {

  }
}
