import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { HeaderIllustrationComponent } from './header-illustration/header-illustration.component';
import { HomeIllustrationTwoComponent } from './home-illustration-two/home-illustration-two.component';
import { DonateIllustrationComponent } from './donate-illustration/donate-illustration.component';
import { ContactIllustrationComponent } from './contact-illustration/contact-illustration.component';


@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        IonicModule.forRoot()
     ],
    declarations: [
        NavbarComponent,
        HeaderIllustrationComponent,
        HomeIllustrationTwoComponent,
        DonateIllustrationComponent,
        ContactIllustrationComponent
    ],
    exports: [
        NavbarComponent,
        HeaderIllustrationComponent,
        HomeIllustrationTwoComponent,
        DonateIllustrationComponent,
        ContactIllustrationComponent
    ]
})
export class CustomComponentsModule {}
