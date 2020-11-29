import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GuidePagePageRoutingModule } from './guide-page-routing.module';

import { GuidePagePage } from './guide-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GuidePagePageRoutingModule
  ],
  declarations: [GuidePagePage]
})
export class GuidePagePageModule {}
