import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DonatePageRoutingModule } from './donate-routing.module';
import { CustomComponentsModule } from 'src/app/components/custom-components.module';

import { DonatePage } from './donate.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    DonatePageRoutingModule,
    CustomComponentsModule
  ],
  declarations: [DonatePage]
})
export class DonatePageModule {}
