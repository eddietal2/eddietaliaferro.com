import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProjectPagePageRoutingModule } from './project-page-routing.module';

import { ProjectPagePage } from './project-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProjectPagePageRoutingModule
  ],
  declarations: [ProjectPagePage]
})
export class ProjectPagePageModule {}
