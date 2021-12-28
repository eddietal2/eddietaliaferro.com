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
  skeletonData = true;

  constructor(
    private router: Router,
    private projectService: ProjectService,
    ) { }

  ngOnInit() {
    this.triggerSkeletonData();
  }

  ionViewWillEnter() {
    this.triggerSkeletonData();
  }

  /**
   * Trigger skeleton Data on UI for 1s
   */
  triggerSkeletonData() {
    setTimeout(() => {
      this.skeletonData = false;
      this.getProjects();
      return;
    }, 1500);
  }
  getProjects() {
    this.projectService.getProjects().subscribe(
      projects => {
        console.log(projects);
        this.allProjects = projects;
        return;
      }
    )
  }
  donatePage() {
    this.router.navigateByUrl('/donate');
  }
  contactPage() {
    this.router.navigateByUrl('/contact');
  }
  viewProject(id) {
    this.router.navigate(['/projects/project-page/', id]);
  }

}
