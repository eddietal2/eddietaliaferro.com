import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminPage } from './admin.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/admin/blogs',
    pathMatch: 'full'
  },
  {
    path: '',
    component: AdminPage,
    children: [
      {
        path: 'blogs',
        pathMatch: '/admin',
        loadChildren: () => import('./blogs/blogs.module').then( m => m.BlogsPageModule)
      },
      {
        path: 'projects',
        loadChildren: () => import('./projects/projects.module').then( m => m.ProjectsPageModule)
      },
      {
        path: 'contact',
        loadChildren: () => import('./contact/contact.module').then( m => m.ContactPageModule)
      },
      {
        path: 'donate',
        loadChildren: () => import('./donate/donate.module').then( m => m.DonatePageModule)
      }
    ]
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminPageRoutingModule {}
