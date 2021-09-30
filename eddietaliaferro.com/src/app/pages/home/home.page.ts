import { Component, ElementRef, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { BlogService } from 'src/app/services/blog/blog.service';
import { ProjectService } from 'src/app/services/project/project.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  latestBlogs;
  latestProjects;

  constructor(
    private router: Router,
    private blogService: BlogService,
    private projectService: ProjectService,
    ) { }

  ngOnInit() {
    this.blogService.getLatestBlogPosts().subscribe(
      data => {
        console.log(data);
        this.latestBlogs = data;
      }
    );
    this.projectService.getLatestProjectPosts().subscribe(
      data => {
        console.log(data);
        this.latestProjects = data;
      }
    );
  }
  ngAfterViewInit(){


  }
  donatePage() {
    this.router.navigateByUrl('/donate');
  }
  contactPage() {
    this.router.navigateByUrl('/contact');
  }
  viewBlogPage() {

  }
  viewProjectPage() {

  }

}
