import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProjectService } from 'src/app/services/project/project.service';


@Component({
  selector: 'app-project-page',
  templateUrl: './project-page.page.html',
  styleUrls: ['./project-page.page.scss'],
})
export class ProjectPagePage implements OnInit {
  id: string;
  thumbnail: string;
  title: string;
  url: string;
  description: string;
  skeletonData = true;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private projects: ProjectService,
    ) { }

  ngOnInit() {
    const id  = this.activatedRoute.snapshot.paramMap.get('id');
    this.id = id;
    this.getProject();
  }
  getProject() {
    this.projects.getProjectInfo(this.id).subscribe(project => {
      console.clear();
      console.log(project);
      this. title = project['title'];
      this. thumbnail = project['thumbnail'];
      this. url = project['url'];
      this. description = project['description'];
    })
  }
  projectUrl(url) {
    window.open(url, '_blank').focus();
  }
  ionViewWillEnter() {
    setTimeout(() => {
      this.skeletonData = false;
    }, 1800);
  }
  back() {
    this.router.navigateByUrl('projects');
  }

}
