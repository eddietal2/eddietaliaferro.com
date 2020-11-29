import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  deferredPrompt: any;
  downloadButton;
  iPhoneInstallBanner: HTMLElement;
  openSafariBanner: HTMLElement;
  closeIPhoneInstallBannerButton: HTMLElement;
  openSafariClose: HTMLElement;

  constructor() { }

  ngOnInit() {
    this.downloadButton = document.getElementById('download-button');
    this.closeIPhoneInstallBannerButton = document.getElementById('close');
    this.iPhoneInstallBanner = document.getElementById('iphone-install-banner');
    this.openSafariBanner = document.getElementById('open-safari-banner');
    this.openSafariClose = document.getElementById('open-safari-close');

    const deviceType = window.navigator.userAgent;
    console.log(deviceType);

    // Apple
    // Safari Desktop
    if (deviceType.search('Safari') > -1) {
      console.log('Safari');
      this.downloadButton.innerHTML = 'Safari';
    }
    // iPhone Safari
    // The word Version is the only difference between the iOS Chrome and Safari User Agents
    //Mozilla/5.0 (iPhone; CPU iPhone OS 14_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0 Mobile/15E148 Safari/604.1

    if (deviceType.search('Version' && 'iPhone') > -1) {
      this.downloadButton.innerHTML = 'iOS Safari';
      this.downloadButton.addEventListener('click', () => {
        console.log('Clicked Button');
        this.iPhoneInstallBanner.style.display = 'block';
        this.closeIPhoneInstallBannerButton.addEventListener('click', () => {
          console.log('Closing iPhone Install banner');
          this.iPhoneInstallBanner.style.display = 'none';
        });
      });
    }
    // (Mobile) Chrome iOS
    if (deviceType.search('CriOS') > -1) {
      this.downloadButton.innerHTML = 'iOS Chrome';
      this.downloadButton.addEventListener('click', () => {
        console.log('Clicked Button');
        this.openSafariBanner.style.display = 'block';
        this.openSafariClose.addEventListener('click', () => {
          console.log('Closing iPhone Install banner');
          this.openSafariBanner.style.display = 'none';
        });
      });
    }
    // (Mobile) FireFox iOS
    if (deviceType.search('FxiOS') > -1) {
      this.downloadButton.innerHTML = 'iOS Firefox';
      this.downloadButton.addEventListener('click', () => {
        console.log('Clicked Button');
        this.openSafariBanner.style.display = 'block';
        this.iPhoneInstallBanner.style.display = 'none';
        this.openSafariClose.addEventListener('click', () => {
          console.log('Closing iPhone Install banner');
          this.openSafariBanner.style.display = 'none';
        });
      });
    }
    // (Mobile) Edge iOS
    if (deviceType.search('EdgiOS') > -1) {
      this.downloadButton.innerHTML = 'iOS Edge';
      this.downloadButton.addEventListener('click', () => {
        this.openSafariBanner.style.display = 'block';
        this.iPhoneInstallBanner.style.display = 'none';
        this.openSafariClose.addEventListener('click', () => {
          console.log('Closing iPhone Install banner');
          this.openSafariBanner.style.display = 'none';
        });
      });
    }
    // (Mobile) Opera iOS
    if (deviceType.search('OPT') > -1) {
      this.downloadButton.innerHTML = 'iOS Opera';
      this.downloadButton.addEventListener('click', () => {
        console.log('Clicked Button');
        this.openSafariBanner.style.display = 'block';
        this.iPhoneInstallBanner.style.display = 'none';
        this.openSafariClose.addEventListener('click', () => {
          console.log('Closing iPhone Install banner');
          this.openSafariBanner.style.display = 'none';
        });
      });
    }



    // iPad
    if (deviceType.search('iPad') > -1) {
      this.downloadButton.innerHTML = 'iPad';
    }

    // Android
    if (deviceType.search('Chrome') > -1) {
      console.log('Chrome Browser');
      this.downloadButton.innerHTML = 'Chrome';

    }
    // if (deviceType.search('Chrome' && 'Mobile' && 'Android') > -1) {
    //   console.log('Chrome Browser');
    //   this.downloadButton.innerHTML = 'Android';
    // }

    // Firefox
    if (deviceType.search('Firefox') > -1) {
      console.log('Firefox Browser');
      this.downloadButton.innerHTML = 'Firefox';
    }

    // Edge
    // if (deviceType.search('Edg') > -1) {
    //   this.downloadButton.innerHTML = 'Edge';
    // }
    // Samsung Browser
    // if (deviceType.search('Firefox') > -1) {

    // }

    // Opera
    // if (deviceType.search('OPR') > -1) {
    //   console.log('Opera');
    //   this.downloadButton.innerHTML = 'Opera';
    // }


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
