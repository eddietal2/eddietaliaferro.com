import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BlogsPage } from './blogs.page';

const routes: Routes = [
  {
    path: '',
    component: BlogsPage
  },
  {
    path: 'add-blog',
    loadChildren: () => import('./add-blog/add-blog.module').then( m => m.AddBlogPageModule)
  },
  {
    path: 'edit-blog',
    loadChildren: () => import('./edit-blog/edit-blog.module').then( m => m.EditBlogPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BlogsPageRoutingModule {}
