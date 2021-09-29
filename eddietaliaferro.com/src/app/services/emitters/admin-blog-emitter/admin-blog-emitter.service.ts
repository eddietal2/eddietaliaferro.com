import { Injectable, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';

@Injectable({
  providedIn: 'root'
})
export class AdminBlogEmitterService {
  invokeAdminBlogsPageRefresh = new EventEmitter();
  subsVar: Subscription;

  constructor() { }

  resetAdminBlogs() {
    console.log('Reseting Admin Blogs Page');
    this.invokeAdminBlogsPageRefresh.emit();
  }
}
