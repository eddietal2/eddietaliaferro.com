import { Component, OnInit, ViewChild, AfterViewInit, ElementRef, HostListener, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BlogService, Blog } from 'src/app/services/blog/blog.service';
import { format, formatDistance, parseISO } from 'date-fns';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Subscription } from 'rxjs';
import { IonContent, IonTextarea, ToastController, AlertController, PopoverController } from '@ionic/angular';
import { catchError, tap } from 'rxjs/operators';
import { CommentOptionsComponent } from 'src/app/components/comment-options/comment-options.component';
import { AdminBlogEmitterService } from 'src/app/services/emitters/admin-blog-emitter/admin-blog-emitter.service';

@Component({
  selector: 'app-blog-page',
  templateUrl: './blog-page.page.html',
  styleUrls: ['./blog-page.page.scss'],
})
export class BlogPagePage implements OnInit {
  id: string;
  title: string;
  thumbnail: string;
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
  blogServiceSub: Subscription;
  editCommentSub: Subscription;
  editReplySub: Subscription;
  replySub: Subscription;
  deleteReplySub: Subscription;
  commentSub: Subscription;
  @ViewChild('content') ionContent: IonContent;
  @ViewChild('commentInput') commentInput: IonTextarea;
  @ViewChild('commentInputBottom') commentInputBottom: IonTextarea;
  @ViewChild('mobileCommentInput') mobileCommentInput: IonTextarea;
  scrollTop;
  allBlogs: Blog[];
  prevBlogTitle;
  nextBlogTitle;
  currentBlogPosition: number;
  commentMoreButtonActive = false;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private toastController: ToastController,
    private popoverController: PopoverController,
    private alertController: AlertController,
    private adminBlogEmitterService: AdminBlogEmitterService,
    private auth: AuthService,
    private blogService: BlogService,) { }

    ngOnInit() {
      const id  = this.activatedRoute.snapshot.paramMap.get('id');
      this.id = id;
      // For returning to this blog after logging in or registering
      this.auth.blogID = id;
      this.getUserDetails();
      this.getBlogInfo();
      this.getBlogsForNextPrev();
    }

    // Blog
    getBlogInfo() {
      this.blogInfoSub = this.blogService.getBlogInfo(this.id).subscribe(
        info => {
          // console.log(info);
          this.title = info['title'];
          this.thumbnail = info['thumbnail'];
          this.date = format(parseISO(info['date']), 'MMMM do, uu');
          this.hashtags = info['hashtags'];
          this.comments = info['comments'];
          this.commentsLength = this.comments.length;

          // Convert Code to Pre tags
          let codeSourceOne: string = info['code_1'];
          let codeSourceTwo: string = info['code_2'];
          let codeSourceThree: string = info['code_3'];
          let codeSourceFour: string = info['code_4'];
          let codeSourceFive: string = info['code_5'];

          // For HTML Tags, include excape characters so
          // browsers doesn't read tags as actual HTML tags
          codeSourceOne = codeSourceOne.replace(/</g, '&lt');
          codeSourceOne = codeSourceOne.replace(/>/g, '&gt');
          codeSourceTwo = codeSourceTwo.replace(/</g, '&lt');
          codeSourceTwo = codeSourceTwo.replace(/>/g, '&gt');
          codeSourceThree = codeSourceThree.replace(/</g, '&lt');
          codeSourceThree = codeSourceThree.replace(/>/g, '&gt');
          codeSourceFour = codeSourceFour.replace(/</g, '&lt');
          codeSourceFour = codeSourceFour.replace(/>/g, '&gt');
          codeSourceFive = codeSourceFive.replace(/</g, '&lt');
          codeSourceFive = codeSourceFive.replace(/>/g, '&gt');


          let convertedCodeOne = `<div style="background: #333;padding: 1em;"><pre><code style="background: #333; color: white; padding: 0.5em; border-radius: 10px;">${codeSourceOne}</code></pre></div>`;
          let convertedCodeTwo = `<div style="background: #333;padding: 1em;"><pre><code style="background: #333; color: white; padding: 0.5em; border-radius: 10px;">${codeSourceTwo}</code></pre></div>`;
          let convertedCodeThree = `<div style="background: #333;padding: 1em;"><pre><code style="background: #333; color: white; padding: 0.5em; border-radius: 10px;">${codeSourceThree}</code></pre></div>`;
          let convertedCodeFour = `<div style="background: #333;padding: 1em;"><pre><code style="background: #333; color: white; padding: 0.5em; border-radius: 10px;">${codeSourceFour}</code></pre></div>`;
          let convertedCodeFive = `<div style="background: #333;padding: 1em;"><pre><code style="background: #333; color: white; padding: 0.5em; border-radius: 10px;">${codeSourceFive}</code></pre></div>`;

          // Create Object to put in replace
          var codeInserts = {
            '<< code-1 >>': convertedCodeOne,
            '<< code-2 >>': convertedCodeTwo,
            '<< code-3 >>': convertedCodeThree,
            '<< code-4 >>': convertedCodeFour,
            '<< code-5 >>': convertedCodeFive,
         };

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
          let picRegex = /<< picture-1 >>|<< picture-2 >>|<< picture-3 >>|<< picture-4 >>|<< picture-5 >>/gi;

          let codeRegex = /<< code-1 >>|<< code-2 >>|<< code-3 >>|<< code-4 >>|<< code-5 >>/gi;

          this.post = info['post'];
          let postContent: string = info['post'];
          let postHTML = document.getElementById('blog-post');

          postHTML.innerHTML = postContent.replace(picRegex, function(matched){

            return pictureInserts[matched];
          }).replace(codeRegex, function(matched){
            return codeInserts[matched];
          });

          for (let i = 0; i < this.comments.length; i++) {
            this.comments[i]['date'] = formatDistance(parseISO(this.comments[i]['date']), Date.now())
            let replies = this.comments[i]['replies'];
            for (let i = 0; i < replies.length; i++) {
              console.log(replies[i]['date'])
              replies[i]['date'] = formatDistance(parseISO(replies[i]['date']), Date.now())
            }
          }


          // postHTML.innerHTML = postContent.replace(codeRegex, function(matched){
          //   return codeInserts[matched];
          // });


        }
      )
    }
    getUserDetails() {
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
    }
    loginPageFromBlog(){
      console.clear();
      console.log(this.id)
      this.router.navigate(['/login/', this.id])
    }
    editBlog() {
      this.router.navigate(['/admin/blogs/edit-blog/', this.id])
    }
    getScrollPosition(e) {
      this.scrollTop = e.detail.scrollTop;
      // console.log(this.scrollTop)
      let mobileCommentInput = document.getElementById('mobile-comment-input');
      mobileCommentInput.style.transition = '0.5s';
      mobileCommentInput.style.height = '80px';

    }
    scrollToTop() {
      this.ionContent.scrollToTop();
    }

    // Comments
    detectNewComments() {
      // There is a div that is underneath the most recent comment to scroll to.
      let newCommentBreakpoint = document.getElementById('new-comment-breakpoint');
      newCommentBreakpoint.scrollIntoView();
    }
    viewComments() {
      let commentsWrapper = document.getElementById('all-comments');
      // commentsWrapper.scrollIntoView()
      console.log(commentsWrapper.offsetTop);
      this.ionContent.scrollToPoint(0,(commentsWrapper.offsetTop - 400))
    }
    comment(blogID, userName, userPicture, comment, userEmail) {
      this.commentSub = this.blogService.comment(blogID, userName, userPicture, comment, userEmail).subscribe(
        data => {
          this.comments = data['comments'];
          this.commentsLength = this.comments.length;
          for (let i = 0; i < this.comments.length; i++) {
            this.comments[i]['date'] = formatDistance(parseISO(this.comments[i]['date']), Date.now())
          }
          this.commentInput.value = '';
          this.commentInputBottom.value = '';
          this.addCommentToast();
          this.detectNewComments();
          return;
        });
    }
    commentFromTop(blogID, userName, userPicture, comment, userEmail) {
      this.commentSub =this.blogService.comment(blogID, userName, userPicture, comment, userEmail).subscribe(
        data => {
          this.comments = data['comments'];
          this.commentsLength = this.comments.length;
          console.clear();
          for (let i = 0; i < this.comments.length; i++) {
            this.comments[i]['date'] = formatDistance(parseISO(this.comments[i]['date']), Date.now())
            console.log(this.comments[i]['_id'])
          }
          this.commentInput.value = '';
          this.commentInputBottom.value = '';
          this.addCommentToast();
          this.detectNewComments();
          return;
        });
    }
    mobileComment(blogID, userName, userPicture, comment, userEmail) {
      this.commentSub =this.blogService.comment(blogID, userName, userPicture, comment, userEmail).subscribe(
        data => {
          this.comments = data['comments'];
          this.commentsLength = this.comments.length;
          for (let i = 0; i < this.comments.length; i++) {
            this.comments[i]['date'] = formatDistance(parseISO(this.comments[i]['date']), Date.now())
          }
          this.mobileCommentInput.value = '';
          this.addCommentToast();
          this.detectNewComments();
          return;
        });
    }
    async commentOptionsPopover(ev: any, blogID, commentID, userFullName, title) {
      const popover = await this.popoverController.create({
        component: CommentOptionsComponent,
        cssClass: 'comment-popover',
        componentProps: {
          blogID,
          commentID,
          userFullName,
          title,
          comments: this.comments,
          comment: document.getElementById(commentID + '-comment'),
          replyInput: document.getElementById(commentID + '-reply-input'),
          replyInputButton: document.getElementById(commentID + '-reply-input-button'),
          commentEditButton: document.getElementById(commentID + '-comment-edit-button'),
          commentMoreButton: document.getElementById(commentID + '-comment-more-button')

        },
        event: ev,
        translucent: true
      });
      await popover.present();

      const { role } = await popover.onDidDismiss();
      console.log('onDidDismiss resolved with role', role);
    }
    async addCommentToast() {
      if(window.innerWidth > 993) {
        const toast = await this.toastController.create({
          message: 'You have successfully added a Comment!',
          position: 'bottom',
          // cssClass: 'success-toast',
          duration: 2000
        });
        toast.present();
        return;
      }
      else {
        const toast = await this.toastController.create({
          message: 'You have successfully added a Comment!',
          position: 'bottom',
          cssClass: 'success-toast',
          duration: 2000
        });
        toast.present();
        return;
      }
    }

    // Replies
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
              this.addReplyToast();

              // Scroll to new Reply
              let newReplyBreakpoint = document.getElementById(commentID+'-add-reply-breakpoint');
              newReplyBreakpoint.scrollIntoView();

              return
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
      editReplyTextarea.style.fontSize = '18px';
      editReplyTextarea.style.animation = 'slide-in-right 0.5s ease-in forwards';
      editReplyTextarea.style.width = '100%';
      editReplyTextarea.style.border = '4px solid #1a061b';
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
        replyEditButton.style.display = 'block';
        replyDeleteButton.style.display = 'block';
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
      completeEditButton.style.padding = '0.6em 0.3em';
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
      cancelEditButton.style.padding = '0.6em 0.3em';
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
      if(window.innerWidth > 993) {
        const toast = await this.toastController.create({
          message: 'You have successfully added a Reply!',
          position: 'bottom',
          cssClass: 'success-toast',
          duration: 2000
        });
        toast.present();
      }
      else {
        const toast = await this.toastController.create({
          message: 'You have successfully added a Reply!',
          position: 'bottom',
          cssClass: 'success-toast',
          duration: 2000
        });
        toast.present();
      }
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
    hideMobileInput(commentID) {
      let replyInput = document.getElementById(commentID+'-reply-input');
      let mobileCommentInput = document.getElementById('mobile-comment-input');
      console.log(replyInput);
      console.log(mobileCommentInput);
      replyInput.style.border = "1px #3cf63c solid";
      mobileCommentInput.style.transition = '0.5s';
      mobileCommentInput.style.height = '0px';
    }
    revealMobileInput(commentID) {
      let replyInput = document.getElementById(commentID+'-reply-input');
      let mobileCommentInput = document.getElementById('mobile-comment-input');
      console.log(replyInput);
      console.log(mobileCommentInput);
      replyInput.style.border = "1px white solid";
      mobileCommentInput.style.transition = '0.5s';
      mobileCommentInput.style.height = '80px';
    }
    getReplyContent(e, commentID) {
      console.clear();
      console.log(e)
      if(this.replyContent) {
        // console.log('There was already a reply field on the page that was populated. Refreshing Reply content');
        this.replyContent = '';
        this.replyContent = e.detail.value;
      }
      else if(!this.replyContent)
      this.replyContent = e.detail.value;
      
    }
    viewReplies(comment, id, e, repliesLength) {
      var repliesLength = repliesLength;
      let replies = document.getElementById(id+'-replies');
      let repliesButton = document.getElementById(id+'-reply-button');
      let repliesCloseButton = document.getElementById(id+'-replies-close-button');
      replies.style.display = 'block';
      repliesButton.style.display = 'none';
      repliesCloseButton.style.display = 'block';
    }
    closeReplies(id) {
      let replies = document.getElementById(id+'-replies');
      let repliesInput = document.getElementById(id+'-close-replies-breakpoint');
      let repliesButton = document.getElementById(id+'-reply-button');
      let repliesCloseButton = document.getElementById(id+'-replies-close-button');
      replies.style.display = 'none';
      repliesCloseButton.style.display = 'none';
      repliesButton.style.display = 'block';
      repliesInput.style.position = 'relative';
      repliesInput.style.top = '-100px';
      repliesInput.scrollIntoView();
    }

    // Footer
    donatePage() {
      this.router.navigateByUrl('/donate');
    }
    contactPage() {
      this.router.navigateByUrl('/contact');
    }
    getBlogsForNextPrev () {
      this.blogServiceSub = this.blogService.getBlogs().subscribe(
        data => {
          console.log(data);
           this.allBlogs = data;

           for (let i = 0; i < this.allBlogs.length; i++) {
             if(this.allBlogs[i]['_id'] === this.id) {
              this.currentBlogPosition = i;

              let prevBlogWrapper = document.getElementById('prev');
              let nextBlogWrapper = document.getElementById('next');

              // First Blog
              if(this.currentBlogPosition == 0) {
                console.log('This is the first blog')
                // Next
                this.nextBlogTitle = '---';

                // Prev
                this.prevBlogTitle = this.allBlogs[this.currentBlogPosition +1 ].title;
                return;
              }

              // Last Blog
              if(this.currentBlogPosition == (this.allBlogs.length - 1)) {
                console.log('This is the last blog')
                // Next
                this.nextBlogTitle = this.allBlogs[this.currentBlogPosition-1].title;

                // Prev
                this.prevBlogTitle = '---';
                return;
              }

              // Every blog in between
              else {
                this.nextBlogTitle = this.allBlogs[this.currentBlogPosition - 1].title;
                this.prevBlogTitle = this.allBlogs[this.currentBlogPosition + 1 ].title;
              }
             }
           }
        }
      )
    }
    nextBlog() {
      console.log('Wassup')
      this.router.navigate(['blog/blog-page/', this.allBlogs[this.currentBlogPosition-1]['_id']])
    }
    prevBlog() {
      console.log('Wassup')
      this.router.navigate(['blog/blog-page/', this.allBlogs[this.currentBlogPosition+1]['_id']])
    }

    // Alerts
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

    // When page is Destroyed.
    @HostListener('unloaded')
    ngOnDestroy() {
    // this.userTypeSub.unsubscribe();
    // this.userEmailSub.unsubscribe();
    // this.userFullNameSub.unsubscribe();
    // this.userPictureSub.unsubscribe();
    // this.blogInfoSub.unsubscribe();
    // this.blogServiceSub.unsubscribe();
    // this.editCommentSub.unsubscribe();
    // this.replySub.unsubscribe();
    // this.editReplySub.unsubscribe();
    // this.deleteReplySub.unsubscribe();
    // this.commentSub.unsubscribe();
    console.log('Blog Page destroyed');
  }

}
