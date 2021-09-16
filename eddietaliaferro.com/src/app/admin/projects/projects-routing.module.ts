import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProjectsPage } from './projects.page';

const routes: Routes = [
  {
    path: '',
    component: ProjectsPage
  },
  {
    path: 'add-projects',
    loadChildren: () => import('./add-projects/add-projects.module').then( m => m.AddProjectsPageModule)
  },
  {
    path: 'edit-projects',
    loadChildren: () => import('./edit-projects/edit-projects.module').then( m => m.EditProjectsPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProjectsPageRoutingModule {}
