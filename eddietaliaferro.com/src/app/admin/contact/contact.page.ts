import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
})
export class ContactPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  deleteMessage() {
    console.log('Deleting message ...');
  }
  reply() {
    console.log('Replying to message ...');
  }

}
