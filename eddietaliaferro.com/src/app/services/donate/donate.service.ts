import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DonateService {
  BACKEND_URL = environment.url;
  stripeKey = environment.stripeKey;
  paymentHandler: any = null;

  constructor(
    private http: HttpClient,
    ) { }

  makePayment(amount) {
      const paymentHandler = (<any>window).StripeCheckout.configure({
        key: this.stripeKey,
        locale: 'auto',
        token: function (stripeToken: any) {
          console.log(stripeToken)
          // I need to make this token global so I can make an HTTP call to add to the donations collection.
        },
      });
      paymentHandler.open({
        name: 'Donate to Eddie Taliaferro!',
        description: 'Thank you very much for your donation.',
        amount: amount * 100      }
        );
  }

  invokeStripe() {
    if(!window.document.getElementById('stripe-script')) {
      const script = window.document.createElement("script");
      script.id = "stripe-script";
      script.type = "text/javascript";
      script.src = "https://checkout.stripe.com/checkout.js";
      script.onload = () => {
        this.paymentHandler = (<any>window).StripeCheckout.configure({
          key: this.stripeKey,
          locale: 'auto',
          token: function (stripeToken: any) {
            console.log(stripeToken)
            alert('Payment has been successfull!');
          }
        });
      }
      window.document.body.appendChild(script);
    }
  }

    donate(picture) {
      console.log('blog picture uploading');
      console.log(picture);
      return this.http.post(`${this.BACKEND_URL}/pictures/upload-blog-picture`, picture);
     }
}
