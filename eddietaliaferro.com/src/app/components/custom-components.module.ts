import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { HeaderIllustrationComponent } from './header-illustration/header-illustration.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        IonicModule.forRoot()
     ],
    declarations: [
        NavbarComponent,
        HeaderIllustrationComponent
    ],
    exports: [
        NavbarComponent,
        HeaderIllustrationComponent
    ]
})
export class CustomComponentsModule {}
