import { Component, OnInit, ViewChild, AfterViewInit, ElementRef, HostListener } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BlogService, Blog } from 'src/app/services/blog/blog.service';
import { format, formatDistance, parseISO } from 'date-fns';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Subscription } from 'rxjs';
import { IonContent } from '@ionic/angular';



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
  @ViewChild('content') ionContent: IonContent;


  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private auth: AuthService,
    private blogService: BlogService,) { }

    ngOnInit() {
      const id  = this.activatedRoute.snapshot.paramMap.get('id');
      console.log(id);
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
          this.commentsLength = this.comments.length;
          console.log(this.comments)

          for (let i = 0; i < this.comments.length; i++) {
            this.comments[i]['date'] = formatDistance(parseISO(this.comments[i]['date']), Date.now())
            let replies = this.comments[i]['replies'];
            for (let i = 0; i < replies.length; i++) {
              replies[i]['date'] = formatDistance(replies[i]['date'], Date.now())
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
    comment(blogID, userName, userPicture, comment) {
      this.blogService.comment(blogID, userName, userPicture, comment).subscribe(
        data => {
          this.comments = data['comments'];
          this.commentsLength = this.comments.length;
          for (let i = 0; i < this.comments.length; i++) {
            this.comments[i]['date'] = formatDistance(parseISO(this.comments[i]['date']), Date.now())
          }
          console.log(data);
          return;
        });
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
          return;
        });
    }
    reply(blodID, commentID, fullName, picture, reply, email) {
      this.blogService.reply(blodID, commentID, fullName, picture, reply, email).subscribe(
        data => {
          console.log(data['replies']);
          this.comments = data['replies'];
          for (let i = 0; i < this.comments.length; i++) {
            this.comments[i]['replies'] = formatDistance(parseISO(this.comments[i]['date']), Date.now())
          }
          // Get comment ID or Index #
          // Replace that comment's replies
          return this.replyContent = '';
        }
      )
    }
    getReplyContent(e) {
      console.log(e)
      if(this.replyContent) {
        console.log('There was already a reply field on the page that was populated. Refreshing Reply content');
        this.replyContent = '';
        this.replyContent = e.detail.value;
      }
      else if(!this.replyContent)
      this.replyContent = e.detail.value;
    }
    viewReplies(comment, id, e) {
      console.log(e);
      window.scrollTo()
      let replies = document.getElementById(id+'-replies');
      console.log(replies)
      let repliesButton = document.getElementById(id+'-reply-button');
      console.log(repliesButton)
      replies.style.display = 'block';
      repliesButton.className = 'red-button md button button-clear in-toolbar ion-activatable ion-focusable hydrated ion-activated';
      repliesButton.innerHTML = 'Close Replies';
      repliesButton.addEventListener('click', () => {
        this.closeReplies(comment, id, e);
      });
    }
    closeReplies(comment, id, e) {
      let replies = document.getElementById(id+'-replies');
      console.log(replies)
      let repliesButton = document.getElementById(id+'-reply-button');
      console.log(repliesButton)
      replies.style.display = 'none';
      repliesButton.className = 'grey-button md button button-clear in-toolbar ion-activatable ion-focusable hydrated ion-activated';
      repliesButton.innerHTML = 'View Replies (0)';
      repliesButton.addEventListener('click', () => {
        this.viewReplies(comment, id, e);
      });
      this.ionContent.scrollToPoint(0, e.clientY);
    }
    donatePage() {
      this.router.navigateByUrl('/donate');
    }
    contactPage() {
      this.router.navigateByUrl('/contact');
    }

    @HostListener('unloaded')
    ngOnDestroy() {
    console.log('Blog Page destroyed');
    this.userTypeSub.unsubscribe();
    this.userFullNameSub.unsubscribe();
    this.userPictureSub.unsubscribe();
    this.blogInfoSub.unsubscribe();
  }

}
