import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.page.html',
  styleUrls: ['./blog.page.scss'],
})
export class BlogPage implements OnInit {

  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
  }
  donatePage() {
    
  }
  contactPage() {

  }
  viewBlogPage() {
    this.router.navigateByUrl('/blog/blog-page');
  }

}
