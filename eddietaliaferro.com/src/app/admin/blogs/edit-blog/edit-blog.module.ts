import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditBlogPageRoutingModule } from './edit-blog-routing.module';

import { EditBlogPage } from './edit-blog.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    EditBlogPageRoutingModule
  ],
  declarations: [EditBlogPage]
})
export class EditBlogPageModule {}
