import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContactPage } from './contact.page';

const routes: Routes = [
  {
    path: '',
    component: ContactPage
  },
  {
    path: 'success',
    loadChildren: () => import('./success/success.module').then( m => m.SuccessPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContactPageRoutingModule {}
