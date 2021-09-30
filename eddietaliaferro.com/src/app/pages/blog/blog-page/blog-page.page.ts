import { Component, OnInit, ViewChild, AfterViewInit, ElementRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BlogService, Blog } from 'src/app/services/blog/blog.service';
import { format, parseISO } from 'date-fns';
import { AuthService } from 'src/app/services/auth/auth.service';


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
  userType = 'none'
  userPicture;
  userFullName;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private auth: AuthService,
    private blogService: BlogService,) { }

    ngOnInit() {
      const id  = this.activatedRoute.snapshot.paramMap.get('id');
      console.log(id);
      this.id = id;
      this.userPicture = this.auth.userInfo.fullName;
      this.userFullName = this.auth.userInfo.picture;

      this.auth.userType.subscribe(
        data => {
          console.log('Usertype: ' + data);
          this.userType = data;
        }
      )

      this.blogService.getBlogInfo(id).subscribe(
        info => {
          // console.log(info);
          this.title = info['title'];
          this.date = format(parseISO(info['date']), 'MMMM Lo, uu');
          this.hashtags = info['hashtags'];
          this.comments = info['comments'];


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
    comment(blogID) {
      this.blogService.comment(blogID).subscribe(
        data => {
          console.log(data);
          return;
        });
    }
    reply(blodID, commentID) {
      this.blogService.reply(blodID, commentID).subscribe(
        data => {
          console.log(data);
          return;
        }
      )
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
