import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProjectService, Project } from 'src/app/services/project/project.service';


@Component({
  selector: 'app-projects',
  templateUrl: './projects.page.html',
  styleUrls: ['./projects.page.scss'],
})
export class ProjectsPage implements OnInit {
  allProjects: Project[];

  constructor(
    private router: Router,
    private projectService: ProjectService,
    ) { }

  ngOnInit() {
    this.getProjects();
  }
  getProjects() {
    this.projectService.getProjects().subscribe(
      projects => {
        console.log(projects);
        this.allProjects = projects;
      }
    )
  }
  donatePage() {
    this.router.navigateByUrl('/donate');
  }
  contactPage() {
    this.router.navigateByUrl('/contact');
  }
  viewProject(url) {
    console.log(url);
  }

}
