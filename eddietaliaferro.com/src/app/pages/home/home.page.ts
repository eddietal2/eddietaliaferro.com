import { Component, ElementRef, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { format, parseISO } from 'date-fns';
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
        for (let i = 0; i < this.latestBlogs.length; i++) {
          this.latestBlogs[i].date = format(parseISO(this.latestBlogs[i].date), 'MMMM do, uu');
        }
        return;
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
    window.onscroll = function () {
      this.scrollRotate();
    };
  }
  scrollRotate(e) {
    // Yang = White
    // Yin = Colored
    let yang = document.getElementById("yang");
    let yin = document.getElementById("yin");
    let wrapper = document.getElementById("wrapper");
    let scrollTop = e.detail.scrollTop;
    if(scrollTop < 1175) {
      // 0 to 150
      yang.style.transform = "translate(0px, 167px)";
      // 612 to 462
      yin.style.transform = "translate(612px, 167px)";
    }
    if(scrollTop > 1175 && scrollTop < 1375) {
      yang.style.transform = "translate(" + -(1175 - scrollTop)/1.33 + "px, 167px)";
      console.log('Yang position: ' + -(1175 - scrollTop)/1.33)

      yin.style.transform = "translate(" + (1175 - scrollTop + 812)/1.33 + "px, 167px)";


      console.log('Yin position: ' + (1175 - scrollTop + 812)/1.33)
      // yin.style.transform = "translateX(" + scrollTop/10 + "px)";
      // yin.style.transform = "translateY(167px)";
    }
    console.log('Scrolltop: ' + scrollTop);
  }
  donatePage() {
    this.router.navigateByUrl('/donate');
  }
  contactPage() {
    this.router.navigateByUrl('/contact');
  }
  viewBlogPage() {

  }
  viewProjectPage(url) {
    console.log(url);
  }

}
