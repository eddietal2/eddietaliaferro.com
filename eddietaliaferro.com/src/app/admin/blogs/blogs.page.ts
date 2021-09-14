import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.page.html',
  styleUrls: ['./blogs.page.scss'],
})
export class BlogsPage implements OnInit {

  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
  }
  viewBlog() {
    
  }
  addBlog() {
    this.router.navigateByUrl('/admin/blogs/add-blog')
  }
  deleteBlog() {

  }
  editBlog() {

  }
  blogComments() {

  }
  visibleToggle(event) {
    let checked = event.detail.checked;
    if(checked === true) {
      console.log('The Blog is Visible')
    }
    else if(checked === false) {
      console.log('The Blog is NOT Visible')
    }
    else {
      return Error('There was an error with making toggling the Blogs visibility.')
    }

  }
}
