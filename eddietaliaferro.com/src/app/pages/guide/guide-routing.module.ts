import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GuidePage } from './guide.page';

const routes: Routes = [
  {
    path: '',
    component: GuidePage
  },
  {
    path: 'guide-page',
    loadChildren: () => import('./guide-page/guide-page.module').then( m => m.GuidePagePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GuidePageRoutingModule {}
