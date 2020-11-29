import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BlogPagePage } from './blog-page.page';

const routes: Routes = [
  {
    path: '',
    component: BlogPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BlogPagePageRoutingModule {}
