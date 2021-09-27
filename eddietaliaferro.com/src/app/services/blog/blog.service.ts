import { Injectable } from '@angular/core';
import { HttpErrorResponse, HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { Router } from '@angular/router';
import { LoadingController, AlertController } from '@ionic/angular';

export interface Blog {
  title: string,
  hashtags: Array<string>,
  thumbnail: string,
  post: string,
  comments: Array<string>
  picture_1: string,
  picture_2: string,
  picture_3: string,
  picture_4: string,
  picture_5: string,
}

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private BLOG_BACKEND_URL = environment.url;

  constructor(
    private http: HttpClient) { }

  public getBlogs(): Observable<Blog[]> {
    console.log('Getting Blogs from Blog Service');
    return this.http.get<Blog[]>(`${this.BLOG_BACKEND_URL}/blog/get-blog-posts`).pipe(catchError(error => {
      console.log(error);
      return of<Blog[]>([]);
    }))
  }

  public getBlogInfo(blogID): Observable<Blog[]> {
    console.log(blogID)
    return this.http.post<Blog[]>(`${this.BLOG_BACKEND_URL}/blog/get-blog-info`, {id: blogID}).pipe(catchError(error => {
      console.log(error);
      return of<Blog[]>([]);
    }))
  }

  public submitBlog(blog: Blog) {
    console.log('Submitting Blogs ...');
    return this.http.post<Blog[]>(`${this.BLOG_BACKEND_URL}/blog/add-blog`, blog)
  }

  public deleteBlog(blogID) {
    console.log('Deleting Blog ...');
    return this.http.post<Blog[]>(`${this.BLOG_BACKEND_URL}/blog/delete-blog`, {id: blogID})
  }
}
