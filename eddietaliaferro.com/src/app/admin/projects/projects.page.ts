import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-projects',
  templateUrl: './projects.page.html',
  styleUrls: ['./projects.page.scss'],
})
export class ProjectsPage implements OnInit {

  constructor(
    private router: Router) { }

  ngOnInit() {
  }
  viewProject() {
    
  }
  addProject() {
    this.router.navigateByUrl('/admin/blogs/add-Project')
  }
  deleteProject() {

  }
  editProject() {

  }
  blogComments() {

  }
  visibleToggle(event) {
    let checked = event.detail.checked;
    if(checked === true) {
      console.log('The Project is Visible')
    }
    else if(checked === false) {
      console.log('The Project is NOT Visible')
    }
    else {
      return Error('There was an error with making toggling the Blogs visibility.')
    }

  }

}
