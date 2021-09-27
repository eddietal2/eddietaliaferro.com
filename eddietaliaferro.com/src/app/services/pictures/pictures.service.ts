import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PicturesService {
  BACKEND_URL = environment.url;

  constructor(
    private http: HttpClient) { }

    blogPictureUpload(picture) {
      console.log('blog picture uploading');
      console.log(picture);
      return this.http.post(`${this.BACKEND_URL}/pictures/upload-blog-picture`,
      picture);
     }
    blogThumbnailUpload(thumbnail) {
      console.log('blog thumbnail uploading');
      console.log(thumbnail);
      return this.http.post(`${this.BACKEND_URL}/pictures/upload-blog-thumbnail`,
      thumbnail);
     }
}
