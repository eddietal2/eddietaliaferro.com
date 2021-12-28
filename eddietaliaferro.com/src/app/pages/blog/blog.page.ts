import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BlogService } from 'src/app/services/blog/blog.service';
import { format, parseISO } from 'date-fns';
import { AdminBlogEmitterService } from 'src/app/services/emitters/admin-blog-emitter/admin-blog-emitter.service';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.page.html',
  styleUrls: ['./blog.page.scss'],
})
export class BlogPage implements OnInit, OnDestroy {
  allBlogs = [];
  skeletonData = true;

  constructor(
    private router: Router,
    private auth: AuthService,
    private adminBlogEmitterService: AdminBlogEmitterService,
    private blogs: BlogService,
  ) { }
  
  /**
   * 
   */
  ngOnInit() {
    // When a blog is added on the Add Blog page, refresh this page.
    if (this.adminBlogEmitterService.subsVar == undefined) {
      this.adminBlogEmitterService.subsVar = this.adminBlogEmitterService.invokeAdminBlogsPageRefresh.subscribe(() => {
        this.getBlogs();
      });
    }
    this.getBlogs();
  }

  /**
   * 
   */
  ionViewWillEnter() {
    this.triggerSkeletonData();
  }

  /**
   * Trigger skeleton Data on UI for 1s
   */
  triggerSkeletonData() {
    setTimeout(() => {
      this.skeletonData = false;
      this.getBlogs();
      return;
    }, 1500);
  }
  /**
   * Description
   */
  getBlogs() {
    this.blogs.getBlogs().subscribe(blogs => {
      this.allBlogs = blogs.reverse();
      console.log(blogs);
      for (let i = 0; i < this.allBlogs.length; i++) {
        this.allBlogs[i].date = format(parseISO(this.allBlogs[i].date), 'MMMM do, uu');
      }
      return;
    });
  }
  /**
   * Description
   */  
  donatePage() {
    
  }
  /**
   * Description
   */
  contactPage() {

  }
  /**
   * Description
   */
  viewBlogPage(id) {
    console.log(id);
    this.router.navigate(['/blog/blog-page/', id]);
  }
  /**
   * Description
   */
  @HostListener('unloaded')
  ngOnDestroy() {
    this.auth.blogID = null;
    console.log('Blogs Page destroyed');
  }

}
