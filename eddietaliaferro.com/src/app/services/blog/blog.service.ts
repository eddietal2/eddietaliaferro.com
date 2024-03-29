import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

export interface Blog {
  title: string,
  visible: boolean,
  hashtags: Array<string>,
  thumbnail: string,
  post: string,
  code_1: string,
  code_2: string,
  code_3: string,
  code_4: string,
  code_5: string,
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
  public getLatestBlogPosts(): Observable<Blog[]> {
    console.log('Getting Blogs from Blog Service');
    return this.http.get<Blog[]>(`${this.BLOG_BACKEND_URL}/blog/get-latest-blog-posts`).pipe(catchError(error => {
      console.log(error);
      return of<Blog[]>([]);
    }))
  }

  public getBlogInfo(blogID): Observable<Blog[]> {
    return this.http.post<Blog[]>(`${this.BLOG_BACKEND_URL}/blog/get-blog-info`, {id: blogID}).pipe(catchError(error => {
      console.log(error);
      return of<Blog[]>([]);
    }))
  }

  public submitBlog(blog: Blog) {
    console.log('Submitting Blogs ...');
    return this.http.post<Blog[]>(`${this.BLOG_BACKEND_URL}/blog/add-blog`, blog)
  }

  public editBlog(blog) {
    console.log(blog);
    console.log('Editting Blogs ...');
    return this.http.post(`${this.BLOG_BACKEND_URL}/blog/edit-blog`, blog)
  }

  public deleteBlog(blogID) {
    console.log('Deleting Blog ...');
    return this.http.post<Blog[]>(`${this.BLOG_BACKEND_URL}/blog/delete-blog`, {id: blogID})
  }

  public blogVisibility(blogID, title, visible) {
    console.log('Visibility ...');
    return this.http.post<Blog[]>(`${this.BLOG_BACKEND_URL}/blog/toggle-visibility`, {id: blogID, visible, title})
  }

  public comment(blogID, name, picture, comment, userEmail) {
    console.log('Commenting on Blog ...');
    console.log(userEmail)
    return this.http.post(`${this.BLOG_BACKEND_URL}/blog/add-comment`, {id: blogID, name, picture, comment, userEmail})
  }

  public editComment(blogID, commentID, comment) {
    console.log('Editting a Comment ...');
    return this.http.post(`${this.BLOG_BACKEND_URL}/blog/edit-comment`, {blogID, commentID, comment})
  }

  public deleteComment(blogID, commentID, userFullName, title) {
    console.log('Deleting Comment ...');
    return this.http.post(`${this.BLOG_BACKEND_URL}/blog/delete-comment`, {blogID: blogID, commentID: commentID, userFullName, title})
  }

  public reply(blogID, commentID, fullName, picture, reply, email) {
    console.log('Replying to Comment ...');
    return this.http.post(`${this.BLOG_BACKEND_URL}/blog/add-reply`, {blogID, commentID, fullName, picture, reply, email})
  }

  public deleteReply(blogID, commentID, replyID) {
    console.log('Deleting Reply ...');
    return this.http.post(`${this.BLOG_BACKEND_URL}/blog/delete-reply`, {blogID, commentID, replyID})
  }

  public editReply(blogID, commentID, replyID, reply) {
    console.log('Edit Reply ...');
    return this.http.post(`${this.BLOG_BACKEND_URL}/blog/edit-reply`, {blogID, commentID, replyID, reply})
  }

}
