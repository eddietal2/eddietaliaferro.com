import { Component, OnInit, ViewChild, AfterViewInit, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { IonTextarea } from '@ionic/angular';

@Component({
  selector: 'app-blog-page',
  templateUrl: './blog-page.page.html',
  styleUrls: ['./blog-page.page.scss'],
})
export class BlogPagePage implements OnInit, AfterViewInit {

  constructor(
    private router: Router) { }

  ngAfterViewInit() {
    // console.log(this.replyTextarea);
  }

  ngOnInit() {
  }
  reply(comment) {
    let replyTextarea = document.getElementById('reply-textarea');
    replyTextarea.style.display = 'block';
  }
  closeReplyTeaxtarea() {
    let replyTextarea = document.getElementById('reply-textarea');
    replyTextarea.style.display = 'none';
  }
  viewReplies(comment) {
    let replies = document.getElementById('replies');
    let repliesButton = document.getElementById('replies-button');
    replies.style.display = 'block';
    repliesButton.className = 'red-button md button button-clear in-toolbar ion-activatable ion-focusable hydrated ion-activated';
    repliesButton.innerHTML = 'Close Replies';
    repliesButton.addEventListener('click', () => {
      this.closeReplies(comment);
    });
  }
  closeReplies(comment) {
    let replies = document.getElementById('replies');
    let repliesButton = document.getElementById('replies-button');
    replies.style.display = 'none';
    repliesButton.className = 'grey-button md button button-clear in-toolbar ion-activatable ion-focusable hydrated ion-activated';
    repliesButton.innerHTML = 'View Replies (0)';
    repliesButton.addEventListener('click', () => {
      this.viewReplies(comment);
    });
  }
  donatePage() {
    this.router.navigateByUrl('/donate');
  }
  contactPage() {
    this.router.navigateByUrl('/contact');
  }

}
