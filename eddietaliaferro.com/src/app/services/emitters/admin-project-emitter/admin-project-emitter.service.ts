import { Injectable, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';

@Injectable({
  providedIn: 'root'
})
export class AdminProjectEmitterService {
  invokeAdminProjectsPageRefresh = new EventEmitter();
  subsVar: Subscription;

  constructor() { }

  resetAdminProjects() {
    console.log('Reseting Admin Projects Page');
    this.invokeAdminProjectsPageRefresh.emit();
  }
}
