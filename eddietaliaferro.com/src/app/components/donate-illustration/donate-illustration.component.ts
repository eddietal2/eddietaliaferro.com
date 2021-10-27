import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-donate-illustration',
  templateUrl: './donate-illustration.component.html',
  styleUrls: ['./donate-illustration.component.scss'],
})
export class DonateIllustrationComponent implements OnInit {
  // turn linear-gradient-1 to 401
  // turn linear-gradient-2 to 402
  // turn linear-gradient-3 to 403
  // turn linear-gradient-6 to 404
  // path-4 to 401
  // path-7 to 701
  sprite = null;
  track = null;
  duration: any;
  tZero: number;


  constructor() { }

  ngOnInit() {
    this.init('coin', 'coin-path');
    this.start(1500);
  }
  init(sprite, track) {
    this.sprite = document.getElementById(sprite) as any;
    this.track = document.getElementById(track) as any;
    console.log(this.sprite);
    console.log(this.track);
  }
  move(u) {
    const p = this.track.getPointAtLength(u * this.track.getTotalLength());
    this.sprite.setAttribute("transform", `translate(${p.x}, ${p.y})`);
  }
  start(duration) {
    this.duration = duration;
    this.tZero = Date.now();
    console.clear();
    console.log('Current moment in time: ');
    console.log(this.tZero);

    requestAnimationFrame(() => this.run());
  }
  run() {
    let u = Math.min((Date.now() - this.tZero) / this.duration, 1);
    console.log('U: ');
    console.log(u)

    if (u < 1) {
        // Keep requesting frames, till animation is ready
        requestAnimationFrame(() => this.run());
    } else {
        this.onFinish();
    }

    this.move(u);
  }
  onFinish() {
    // Schedule the animation to restart
    setTimeout(() => this.start(this.duration), 0);
  }


}
