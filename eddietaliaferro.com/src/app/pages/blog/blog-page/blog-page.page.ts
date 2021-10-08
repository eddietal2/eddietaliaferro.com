import { Component, OnInit, ViewChild, AfterViewInit, ElementRef, HostListener } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BlogService, Blog } from 'src/app/services/blog/blog.service';
import { format, formatDistance, parseISO } from 'date-fns';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Subscription } from 'rxjs';
import { IonContent, IonTextarea, ToastController, AlertController } from '@ionic/angular';
import { catchError, tap } from 'rxjs/operators';


@Component({
  selector: 'app-blog-page',
  templateUrl: './blog-page.page.html',
  styleUrls: ['./blog-page.page.scss'],
})
export class BlogPagePage implements OnInit {
  id: string;
  title: string;
  date: string;
  post: string;
  hashtags: string;
  picture_1: string;
  picture_2: string;
  picture_3: string;
  picture_4: string;
  picture_5: string;
  comments: Array<object>;
  commentsLength: number;
  replyContent: string;
  userType = 'none'
  userPicture;
  userFullName;
  userEmail;
  userTypeSub: Subscription;
  userFullNameSub: Subscription;
  userPictureSub: Subscription;
  userEmailSub: Subscription;
  blogInfoSub: Subscription;
  editCommentSub: Subscription;
  editReplySub: Subscription;
  replySub: Subscription;
  deleteReplySub: Subscription;
  commentSub: Subscription;
  @ViewChild('content') ionContent: IonContent;
  @ViewChild('commentInput') commentInput: IonTextarea;
  scrollTop;


  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private toastController: ToastController,
    private alertController: AlertController,
    private auth: AuthService,
    private blogService: BlogService,) { }

    ngOnInit() {
      const id  = this.activatedRoute.snapshot.paramMap.get('id');
      this.id = id;

      this.userTypeSub = this.auth.userType.subscribe(
        data => {
          console.log('Usertype: ' + data);
          this.userType = data;
        }
      )
      this.userFullNameSub = this.auth.userFullName.subscribe(
        data => {
          console.log('userFullName: ' + data);
          this.userFullName = data;
        }
      )
      this.userPictureSub = this.auth.userPicture.subscribe(
        data => {
          console.log('userPicture: ' + data);
          this.userPicture = data;
        }
      )
      this.userEmailSub = this.auth.userEmail.subscribe(
        data => {
          console.log('userEmail: ' + data);
          this.userEmail = data;
        }
      )

      this.blogInfoSub = this.blogService.getBlogInfo(id).subscribe(
        info => {
          // console.log(info);
          this.title = info['title'];
          this.date = format(parseISO(info['date']), 'MMMM do, uu');
          this.hashtags = info['hashtags'];
          this.comments = info['comments'];
          console.log(this.comments)
          this.commentsLength = this.comments.length;

          for (let i = 0; i < this.comments.length; i++) {
            this.comments[i]['date'] = formatDistance(parseISO(this.comments[i]['date']), Date.now())
            let replies = this.comments[i]['replies'];
            for (let i = 0; i < replies.length; i++) {
              console.log(replies[i]['date'])
              replies[i]['date'] = formatDistance(parseISO(replies[i]['date']), Date.now())
            }
          }


          let postContent = info['post'];
          let postHTML = document.getElementById('blog-post');

          // Grab photo links from Blogs Object
          let pictureSourceOne = info['picture_1'];
          let pictureSourceTwo = info['picture_2'];
          let pictureSourceThree = info['picture_3'];
          let pictureSourceFour = info['picture_4'];
          let pictureSourceFive = info['picture_5'];

          // Convert links to HTML Elements
          let convertedPictureOne = `<br><img style='margin: 2em auto; display: block; width: 100%;' src="${pictureSourceOne}"' /><br>`;
          let convertedPictureTwo = `<br><img style='margin: 2em auto; display: block; width: 100%;' src="${pictureSourceTwo}"' /><br>`;
          let convertedPictureThree = `<br><img style='margin: 2em auto; display: block; width: 100%;' src="${pictureSourceThree}"' /><br>`;
          let convertedPictureFour = `<br><img style='margin: 2em auto; display: block; width: 100%;' src="${pictureSourceFour}"' /><br>`;
          let convertedPictureFive = `<br><img style='margin: 2em auto; display: block; width: 100%;' src="${pictureSourceFive}"' /><br>`;

          // Create Object to put in replace
          var pictureInserts = {
            '<< picture-1 >>': convertedPictureOne,
            '<< picture-2 >>': convertedPictureTwo,
            '<< picture-3 >>': convertedPictureThree,
            '<< picture-4 >>': convertedPictureFour,
            '<< picture-5 >>': convertedPictureFive,
         };

          // Insert elements into the blog's HTML
          // Find all the picture tags and replace them with images.
          let regex = /<< picture-1 >>|<< picture-2 >>|<< picture-3 >>|<< picture-4 >>|<< picture-5 >>/gi;
          postHTML.innerHTML = postContent.replace(regex, function(matched){
            return pictureInserts[matched];
          });


        }
      )
    }
    comment(blogID, userName, userPicture, comment, userEmail) {
      this.commentSub =this.blogService.comment(blogID, userName, userPicture, comment, userEmail).subscribe(
        data => {
          this.comments = data['comments'];
          this.commentsLength = this.comments.length;
          for (let i = 0; i < this.comments.length; i++) {
            this.comments[i]['date'] = formatDistance(parseISO(this.comments[i]['date']), Date.now())
          }
          console.log(data);
          this.commentInput.value = '';
          return this.addCommentToast();
        });
    }
    editComment(blogID, commentID) {
      // get commentID
      // Turn comment p element to a textarea element
      // When finished, turn back into a p element
      let comment = document.getElementById(commentID + '-comment');
      let replyInput = document.getElementById(commentID + '-reply-input');
      let replyInputButton = document.getElementById(commentID + '-reply-input-button');
      let commentEditButton = document.getElementById(commentID + '-comment-edit-button');

      commentEditButton.style.display = 'none';
      let commentValue = comment.innerHTML;

      // Edit Text Area Element
      let editTextarea = document.createElement('textarea');
      editTextarea.setAttribute('rows', '10');
      editTextarea.style.fontSize = '21px';
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
        replyInput.style.display = 'block';
        replyInputButton.style.display = 'block';commentEditButton.style.display = 'block';
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
        replyInput.style.display = 'block';
        replyInputButton.style.display = 'block';commentEditButton.style.display = 'block';
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
      replyInput.style.display = 'none';
      replyInputButton.style.display = 'none';
      insertAfter(editTextarea, completeEditButton)
      insertAfter(completeEditButton, cancelEditButton)

      // Inserting buttons after edit textarea
      function insertAfter(referenceNode, newNode) {
        referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
      }
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
        });
        this.deleteCommentToast();
        return;
    }
    async addCommentToast() {
      const toast = await this.toastController.create({
        message: 'You have successfully added a Comment!',
        cssClass: 'success-toast',
        duration: 2000
      });
      toast.present();
    }
    async editCommentToast() {
      const toast = await this.toastController.create({
        message: 'You have successfully editted a Comment!',
        cssClass: 'edit-toast',
        duration: 2000
      });
      toast.present();
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
    reply(blogID, commentID, fullName, picture, reply, email) {
      console.log(blogID, commentID, fullName, picture, reply, email)
      this.replySub = this.blogService.reply(blogID, commentID, fullName, picture, reply, email).subscribe(
        data => {
          console.log(data);
          for (let i = 0; i < this.comments.length; i++) {
            // Update all the dates in the replies
            // Find the comment ID, then update its replies

            if(this.comments[i]['_id'] == commentID) {
              this.comments[i]['replies'] = data['replies'];
              for (let i = 0; i < data['replies'].length; i++) {
                data['replies'][i].date = formatDistance(parseISO(data['replies'][i].date), Date.now())
              }
              // Clear Reply Input
              let replyInput = (<IonTextarea><unknown>document.getElementById(commentID + '-reply-input'));
              replyInput.value = '';
              // View All Replies after user has successfully added a Reply
              this.viewReplies(undefined, commentID, undefined, undefined);
              return this.addReplyToast();
            }
          }
        }
      )
    }
    editReply(blogID, commentID, replyID) {
      console.log('Editting Reply');
      let reply = document.getElementById('reply-' + replyID);
      let replyDeleteButton = document.getElementById('reply-' + replyID + '-delete-button');
      let replyEditButton = document.getElementById('reply-' + replyID + '-edit-button');
      let replyValue = reply.innerHTML;

      let editReplyTextarea = document.createElement('textarea');
      editReplyTextarea.setAttribute('rows', '5');
      editReplyTextarea.style.fontSize = '21px';
      editReplyTextarea.style.animation = 'slide-in-right 0.5s ease-in forwards';
      editReplyTextarea.style.width = '100%';
      editReplyTextarea.style.border = '4px solid #BC3790';
      editReplyTextarea.style.borderRadius = '10px';
      editReplyTextarea.style.backgroundColor = '#fff9';
      editReplyTextarea.style.color = '#333';
      editReplyTextarea.style.padding = '1em';
      editReplyTextarea.style.marginBottom = '1em';
      editReplyTextarea.innerHTML = replyValue;

      // Complete Edit & Cancel Edit Buttons
      let completeEditButton = document.createElement('button');
      completeEditButton.addEventListener('click', () => {
        console.log('Completing Edit');
        cancelEditButton.remove();
        completeEditButton.remove();
        replyEditButton.style.display = 'block';replyDeleteButton.style.display = 'block';
        // HTTP Request
        console.log(editReplyTextarea)
        console.log(editReplyTextarea.value)
        this.editReplySub = this.blogService.editReply(blogID, commentID, replyID, editReplyTextarea.value)
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
            editReplyTextarea.replaceWith(reply)
            throw new Error(e);
          })
        )
        .subscribe(
          data => {
            console.log(data);
            // Only update Comment if there was a successful network request.
            reply.innerHTML = editReplyTextarea.value;
            editReplyTextarea.replaceWith(reply)
          }
        )
      });
      completeEditButton.innerHTML = 'Edit';
      editReplyTextarea.style.animation = 'slide-in-right 0.5s ease-in forwards';
      completeEditButton.style.width = '100px';
      completeEditButton.style.padding = '0.3em';
      completeEditButton.style.margin = '0.3em 0.5em';
      completeEditButton.style.borderRadius = '100px';
      completeEditButton.style.color = '#00c400';
      completeEditButton.style.backgroundColor = '#222';

      let cancelEditButton = document.createElement('button');
      cancelEditButton.addEventListener('click', () => {
        console.log('Cancelling Edit');
        cancelEditButton.remove();
        completeEditButton.remove();
        replyEditButton.style.display = 'block';replyDeleteButton.style.display = 'block';
        editReplyTextarea.replaceWith(reply);
      });
      cancelEditButton.innerHTML = 'Cancel';
      editReplyTextarea.style.animation = 'slide-in-right 0.5s ease-in forwards';
      cancelEditButton.style.width = '100px';
      cancelEditButton.style.padding = '0.3em';
      cancelEditButton.style.margin = '0.3m 0';
      cancelEditButton.style.borderRadius = '100px';
      cancelEditButton.style.color = 'red';
      cancelEditButton.style.backgroundColor = '#222';

      reply.replaceWith(editReplyTextarea);
      replyDeleteButton.style.display = 'none';
      replyEditButton.style.display = 'none';
      insertAfter(editReplyTextarea, completeEditButton)
      insertAfter(completeEditButton, cancelEditButton)

      // Inserting buttons after edit textarea
      function insertAfter(referenceNode, newNode) {
        referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
      }
    }
    deleteReply(blogID, commentID, replyID) {
      console.log('Deleting Reply')
      console.log(blogID, commentID, replyID)
      this.deleteReplySub = this.blogService.deleteReply(blogID, commentID, replyID).subscribe(
        data => {

          // Slide Out Animation for Reply.
          let reply = document.getElementById('reply-' + replyID + '-wrapper');
          let start = Date.now();
          let timer = setInterval(function() {
            // how much time passed from the start?
            let timePassed = Date.now() - start;
            if (timePassed >= 200) {
              reply.style.transform = 'translateX(-50px)';
            }
            if (timePassed >= 500) {
              reply.style.opacity = '0';
            }
            if (timePassed >= 1000) {
              reply.style.height = '0px';
              reply.style.display = 'none';
              reply.remove();
              clearInterval(timer); // finish the animation after 2 seconds
              return;
            }
          }, 20);

          // Allow for the animation to finish first before updating the reply data
          setTimeout(() => {
            for (let i = 0; i < this.comments.length; i++) {
              if(this.comments[i]['_id'] === commentID) {
                this.comments[i]['replies'] = data['replies']
                for (let i = 0; i < data['replies'].length; i++) {
                  data['replies'][i].date = formatDistance(parseISO(data['replies'][i].date), Date.now())
                }
              }
            }
          }, 1000);
        });
        return;
    }
    async addReplyToast() {
      const toast = await this.toastController.create({
        message: 'You have successfully added a Reply!',
        cssClass: 'success-toast',
        duration: 2000
      });
      toast.present();
    }
    async editReplyToast() {
      const toast = await this.toastController.create({
        message: 'You have successfully editted a Reply!',
        cssClass: 'edit-toast',
        duration: 2000
      });
      toast.present();
    }
    async deleteReplyAlert(blogID, commentID, replyID) {
      const alert = await this.alertController.create({
        cssClass: 'my-custom-class',
        message: 'Are you sure you want to Delete this Reply?',
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
              this.deleteReply(blogID, commentID, replyID);
            }
          }
        ]
      });
      await alert.present();
    }
    async deleteReplyToast() {
      const toast = await this.toastController.create({
        message: 'You have successfully deleted a Reply!',
        cssClass: 'danger-toast',
        duration: 2000
      });
      toast.present();
    }
    getReplyContent(e) {
      // console.log(e)
      if(this.replyContent) {
        // console.log('There was already a reply field on the page that was populated. Refreshing Reply content');
        this.replyContent = '';
        this.replyContent = e.detail.value;
      }
      else if(!this.replyContent)
      this.replyContent = e.detail.value;
    }
    getScrollPosition(e) {
      this.scrollTop = e.scrollTop;
    }
    viewReplies(comment, id, e, repliesLength) {
      var repliesLength = repliesLength;
      let replies = document.getElementById(id+'-replies');
      let repliesButton = document.getElementById(id+'-reply-button');
      replies.style.display = 'block';
      repliesButton.className = 'close-replies-button md button button-clear in-toolbar ion-activatable ion-focusable hydrated ion-activated';
      repliesButton.innerHTML = 'Close Replies';
      repliesButton.addEventListener('click', () => {
        this.closeReplies(comment, id, e, repliesLength);
      });
    }
    closeReplies(comment, id, e, repliesLength) {
      let replies = document.getElementById(id+'-replies');
      let repliesButton = document.getElementById(id+'-reply-button');
      replies.style.display = 'none';
      repliesButton.className = 'grey-button md button button-clear in-toolbar ion-activatable ion-focusable hydrated ion-activated';
      repliesButton.innerHTML = 'View Replies - ' + repliesLength;
      repliesButton.addEventListener('click', () => {
        this.viewReplies(comment, id, e, repliesLength);
      });
      console.log('Y position: ');
      console.log(e);
      this.ionContent.scrollToPoint(0, this.scrollTop);
    }
    donatePage() {
      this.router.navigateByUrl('/donate');
    }
    contactPage() {
      this.router.navigateByUrl('/contact');
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

    @HostListener('unloaded')
    ngOnDestroy() {
    this.userTypeSub.unsubscribe();
    this.userEmailSub.unsubscribe();
    this.userFullNameSub.unsubscribe();
    this.userPictureSub.unsubscribe();
    this.blogInfoSub.unsubscribe();
    this.editCommentSub.unsubscribe();
    this.replySub.unsubscribe();
    this.editReplySub.unsubscribe();
    this.deleteReplySub.unsubscribe();
    this.commentSub.unsubscribe();
    console.log('Blog Page destroyed');
  }

}
