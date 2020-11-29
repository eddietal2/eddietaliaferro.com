import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BlogPagePageRoutingModule } from './blog-page-routing.module';

import { BlogPagePage } from './blog-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BlogPagePageRoutingModule
  ],
  declarations: [BlogPagePage]
})
export class BlogPagePageModule {}
