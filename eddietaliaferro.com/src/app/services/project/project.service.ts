import { Injectable } from '@angular/core';
import { HttpErrorResponse, HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

export interface Project {
  title: string,
  url: string,
  visible: boolean,
  thumbnail: string,
  description: string,
}

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private BLOG_BACKEND_URL = environment.url;

  constructor(
    private http: HttpClient) { }

  public getProjects(): Observable<Project[]> {
    console.log('Getting Projects from Project Service');
    return this.http.get<Project[]>(`${this.BLOG_BACKEND_URL}/project/get-project-posts`).pipe(catchError(error => {
      console.log(error);
      return of<Project[]>([]);
    }))
  }
  public getLatestProjectPosts(): Observable<Project[]> {
    console.log('Getting Projects from Project Service');
    return this.http.get<Project[]>(`${this.BLOG_BACKEND_URL}/project/get-latest-project-posts`).pipe(catchError(error => {
      console.log(error);
      return of<Project[]>([]);
    }))
  }

  public getProjectInfo(projectID): Observable<Project[]> {
    console.log(projectID)
    return this.http.post<Project[]>(`${this.BLOG_BACKEND_URL}/project/get-project-info`, {id: projectID}).pipe(catchError(error => {
      console.log(error);
      return of<Project[]>([]);
    }))
  }

  public submitProject(project: Project) {
    console.log('Submitting Projects ...');
    return this.http.post<Project[]>(`${this.BLOG_BACKEND_URL}/project/add-project`, project)
  }

  public editProject(project) {
    console.log(project);
    console.log('Editting Projects ...');
    return this.http.post(`${this.BLOG_BACKEND_URL}/project/edit-project`, project)
  }

  public deleteProject(projectID) {
    console.log('Deleting Project ...');
    return this.http.post<Project[]>(`${this.BLOG_BACKEND_URL}/project/delete-project`, {id: projectID})
  }

  public projectVisibility(projectID, title, visible) {
    console.log('Visibility ...');
    return this.http.post<Project[]>(`${this.BLOG_BACKEND_URL}/project/toggle-visibility`, {id: projectID, visible, title})
  }
}
