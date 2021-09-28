import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BlogService } from 'src/app/services/blog/blog.service';
import { format, parseISO } from 'date-fns';


@Component({
  selector: 'app-blog',
  templateUrl: './blog.page.html',
  styleUrls: ['./blog.page.scss'],
})
export class BlogPage implements OnInit, OnDestroy {
  allBlogs = [];

  constructor(
    private router: Router,
    private blogs: BlogService,
  ) { }

  ngOnInit() {
    this.blogs.getBlogs().subscribe(blogs => {
      this.allBlogs = blogs;
      console.log(blogs);
      for (let i = 0; i < this.allBlogs.length; i++) {
        this.allBlogs[i].date = format(parseISO(this.allBlogs[i].date), 'MMMM Lo, uu');
      }
      return;
    });
  }
  donatePage() {
    
  }
  contactPage() {

  }
  viewBlogPage(id) {
    console.log(id);
    this.router.navigate(['/blog/blog-page/', id]);
  }
  @HostListener('unloaded')
  ngOnDestroy() {
    console.log('Blogs Page destroyed');
  }

}
