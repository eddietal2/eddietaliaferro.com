import { Component, OnInit, Input } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';
import { formatDistance, parseISO } from 'date-fns';
import { catchError, tap } from 'rxjs/operators';
import { BlogService } from 'src/app/services/blog/blog.service';

@Component({
  selector: 'app-comment-options',
  templateUrl: './comment-options.component.html',
  styleUrls: ['./comment-options.component.scss'],
})
export class CommentOptionsComponent implements OnInit {
  @Input("blogID") blogID;
  @Input("commentID") commentID;
  @Input("userFullName") userFullName;
  @Input("title") title;
  @Input("comments") comments;
  @Input("comment") comment;
  @Input("replyInput") replyInput;
  @Input("replyInputButton") replyInputButton;
  @Input("commentEditButton") commentEditButton;
  commentsLength: any;
  editCommentSub: any;

  constructor(
    private blogService: BlogService,
    private alertController: AlertController,
    private toastController: ToastController,
  ) { }

  ngOnInit() {
    console.log(this.blogID, this.commentID, this.userFullName, this.title, this.comments)
  }

  deleteComment(blogID, commentID, userFullName, title) {
    this.blogService.deleteComment(blogID, commentID, userFullName, title).subscribe(
      data => {
        console.log(data);
        this.comments = data['comments'];
        this.commentsLength = this.comments.length;
        for (let i = 0; i < this.comments.length; i++) {
          this.comments[i]['date'] = formatDistance(parseISO(this.comments[i]['date']), Date.now())
        }
        // Slide Out Animation for Reply.
        let commentWrapper = document.getElementById(commentID + '-comment-wrapper');
        let start = Date.now();
        let timer = setInterval(function() {
          // how much time passed from the start?
          let timePassed = Date.now() - start;
          if (timePassed >= 200) {
            commentWrapper.style.transform = 'translateX(-50px)';
          }
          if (timePassed >= 500) {
            commentWrapper.style.opacity = '0';
          }
          if (timePassed >= 1000) {
            commentWrapper.style.height = '0px';
            commentWrapper.style.display = 'none';
            commentWrapper.remove();
            clearInterval(timer); // finish the animation after 2 seconds
            return;
          }
        }, 20);
      });
      this.deleteCommentToast();
      return;
  }
  async deleteCommentAlert(blogID, commentID, userFullName, title) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      message: 'Are you sure you want to Delete this comment?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Delete',
          handler: () => {
            this.deleteComment(blogID, commentID, userFullName, title);
          }
        }
      ]
    });
    await alert.present();
  }
  async deleteCommentToast() {
    const toast = await this.toastController.create({
      message: 'You have successfully deleted a Comment!',
      cssClass: 'danger-toast',
      duration: 2000
    });
    toast.present();
  }
  editComment(blogID, commentID, comment, replyInput, replyInputButton, commentEditButton) {
    // get commentID
    // Turn comment p element to a textarea element
    // When finished, turn back into a p element
    // let comment = document.getElementById(commentID + '-comment');
    // let replyInput = document.getElementById(commentID + '-reply-input');
    // let replyInputButton = document.getElementById(commentID + '-reply-input-button');
    // let commentEditButton = document.getElementById(commentID + '-comment-edit-button');
    console.log(this.comment)
    console.log(this.replyInput)
    console.log(this.replyInputButton)
    console.log(this.commentEditButton)

    // this.commentEditButton.style.display = 'none';
    let commentValue = comment.innerHTML;

    // Edit Text Area Element
    let editTextarea = document.createElement('textarea');
    editTextarea.setAttribute('rows', '10');
    editTextarea.style.fontSize = '1em';
    editTextarea.style.animation = 'slide-in-right 0.5s ease-in forwards';
    editTextarea.style.width = '100%';
    editTextarea.style.border = '4px solid #BC3790';
    editTextarea.style.borderRadius = '10px';
    editTextarea.style.backgroundColor = '#fff9';
    editTextarea.style.color = '#333';
    editTextarea.style.padding = '1em';
    editTextarea.style.marginBottom = '1em';
    editTextarea.innerHTML = commentValue;

    // Complete Edit & Cancel Edit Buttons
    let completeEditButton = document.createElement('button');
    completeEditButton.addEventListener('click', () => {
      console.log('Completing Edit');
      cancelEditButton.remove();
      completeEditButton.remove();
      this.replyInput.style.display = 'block';
      this.replyInputButton.style.display = 'block';commentEditButton.style.display = 'block';
      // HTTP Request
      this.editCommentSub = this.blogService.editComment(blogID, commentID, editTextarea.value)
      .pipe(
        tap(res => {
          if (!res) {
            console.log('There was no response.');
          }
        }),
        catchError(e => {
          console.error(e);
          if (e) {
            this.presentAlert('Error ', 'There was an error editting your comment');
          }
          editTextarea.replaceWith(comment)
          throw new Error(e);
        })
      )
      .subscribe(
        data => {
          console.log(data);
          // Only update Comment if there was a successful network request.
          comment.innerHTML = editTextarea.value;
          editTextarea.replaceWith(comment)
        }
      )
    });
    completeEditButton.innerHTML = 'Edit';
    editTextarea.style.animation = 'slide-in-right 0.5s ease-in forwards';
    completeEditButton.style.width = '100px';
    completeEditButton.style.padding = '0.3em';
    completeEditButton.style.margin = '0.3em 0.5em';
    completeEditButton.style.borderRadius = '100px';
    completeEditButton.style.color = '#00c400';

    let cancelEditButton = document.createElement('button');
    cancelEditButton.addEventListener('click', () => {
      console.log('Cancelling Edit');
      cancelEditButton.remove();
      completeEditButton.remove();
      this.replyInput.style.display = 'block';
      this.replyInputButton.style.display = 'block';commentEditButton.style.display = 'block';
      editTextarea.replaceWith(comment);
    });
    cancelEditButton.innerHTML = 'Cancel';
    editTextarea.style.animation = 'slide-in-right 0.5s ease-in forwards';
    cancelEditButton.style.width = '100px';
    cancelEditButton.style.padding = '0.3em';
    cancelEditButton.style.margin = '0.3m 0';
    cancelEditButton.style.borderRadius = '100px';
    cancelEditButton.style.color = 'red';



    // Adding elements to interface.
    comment.replaceWith(editTextarea);
    this.replyInput.style.display = 'none';
    this.replyInputButton.style.display = 'none';
    insertAfter(editTextarea, completeEditButton)
    insertAfter(completeEditButton, cancelEditButton)

    // Inserting buttons after edit textarea
    function insertAfter(referenceNode, newNode) {
      referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
    }
  }

  async editCommentToast() {
    const toast = await this.toastController.create({
      message: 'You have successfully editted a Comment!',
      cssClass: 'edit-toast',
      duration: 2000
    });
    toast.present();
  }

  async presentAlert(header: string, msg: string) {
    const alert = await this.alertController.create({
      cssClass: 'danger-alert',
      header,
      message: msg,
      buttons: [{
        text: 'OK'
      }]
    });

    await alert.present();
  }

}
