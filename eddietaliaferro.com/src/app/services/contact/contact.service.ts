import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToastController } from '@ionic/angular';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  BACKEND_URL = environment.url;

  constructor(
    private http: HttpClient,
    private toast: ToastController) { }

  getMessages() {
    return this.http.get(`${this.BACKEND_URL}/contact/get-contact-messages`);
  }
  deleteMessage(id) {
    return this.http.post(`${this.BACKEND_URL}/contact/delete-contact-message`, {id: id});
  }
  sendMessage(data) {
    return this.http.post(`${this.BACKEND_URL}/contact/send-contact-message`, data);
  }
}
