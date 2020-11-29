import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GuidePagePage } from './guide-page.page';

const routes: Routes = [
  {
    path: '',
    component: GuidePagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GuidePagePageRoutingModule {}
