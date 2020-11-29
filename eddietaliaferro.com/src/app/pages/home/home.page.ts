import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  deferredPrompt: any;
  downloadButton;
  iPhoneInstallBanner;
  closeIPhoneInstallBannerButton: HTMLElement;

  constructor() { }

  ngOnInit() {
    this.downloadButton = document.getElementById('download-button');
    this.closeIPhoneInstallBannerButton = document.getElementById('close');
    this.iPhoneInstallBanner = document.getElementById('iphone-install-banner');

    const deviceType = window.navigator.userAgent;
    console.log(deviceType);

    // Apple
    if (deviceType.search('Safari') > -1) {
      console.log('Safari');
      this.downloadButton.innerHTML = 'Safari';
    }
    if (deviceType.search('iPhone') > -1) {
      console.log('iPhone');
      this.downloadButton.innerHTML = 'iOS'; this.downloadButton.addEventListener('click', () => {
        console.log('Clicked Button');
        this.iPhoneInstallBanner.style.display = 'block';
        this.closeIPhoneInstallBannerButton.addEventListener('click', () => {
          console.log('Closing iPhone Install banner');
          this.iPhoneInstallBanner.style.height = '0';
        });
      });
    }
    if (deviceType.search('iPad') > -1) {
      console.log('iPad');
      this.downloadButton.innerHTML = 'iPad';
    }
  
    // Android
    if (deviceType.search('Chrome') > -1) {
      console.log('Chrome Browser');
      this.downloadButton.innerHTML = 'Chrome';

    }
    if (deviceType.search('Chrome' && 'Mobile' && 'Android') > -1) {
      console.log('Chrome Browser');
      this.downloadButton.innerHTML = 'Android';
    }

    // Firefox
    if (deviceType.search('Firefox') > -1) {
      console.log('Firefox Browser');
      this.downloadButton.innerHTML = 'Firefox';
    }

    // Opera
    if (deviceType.search('OPR') > -1) {
      console.log('Opera');
      this.downloadButton.innerHTML = 'Opera';
    }

    // Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:83.0) Gecko/20100101 Firefox/83.0

    // Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.198 Safari/537.36


    window.addEventListener('beforeinstallprompt', (e) => {
      console.log('beforeinstallprompt Event fired');
      // Prevent Chrome 67 and earlier from automatically showing the prompt
      e.preventDefault();
      // Stash the event so it can be triggered later.
      this.deferredPrompt = e;
      console.log('This is the stashed event');
      console.log(e);
});

    // Determine if the app is install
    window.addEventListener('appinstalled', (event) => {
      console.log('installed');
      console.log(event);
    });

    // Detect if app is launched from home screen
    if (window.matchMedia('(display-mode: standalone)').matches) {
      console.log('display-mode is standalone');
    }
    // Detect if app is launched from home screen
    // Safari
    // if (window.navigator.standalone === true) {
    //   console.log('display-mode is standalone');
    // }
  }

  showInstallBanner() {

    console.log('Trying to Show Install Banner ...');
    console.log(this.deferredPrompt);
    if (this.deferredPrompt !== undefined && this.deferredPrompt !== null) {
      // Hide Download Button
      this.downloadButton.style.display = 'none';
      // Show the prompt
      this.deferredPrompt.prompt();
      // Wait for the user to respond to the prompt
      this.deferredPrompt.userChoice
      .then((choiceResult) => {
        if (choiceResult.outcome === 'accepted') {
          console.log('User accepted the A2HS prompt');
        } else {
          this.downloadButton.style.display = 'block';
          console.log('User dismissed the A2HS prompt');
        }
        // We no longer need the prompt.  Clear it up.
        this.deferredPrompt = null;
      });
    }
  }

}
