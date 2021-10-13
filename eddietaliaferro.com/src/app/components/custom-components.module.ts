import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { HeaderIllustrationComponent } from './header-illustration/header-illustration.component';
import { HomeIllustrationTwoComponent } from './home-illustration-two/home-illustration-two.component';
import { DonateIllustrationComponent } from './donate-illustration/donate-illustration.component';
import { ContactIllustrationComponent } from './contact-illustration/contact-illustration.component';
import { BlogIllustrationComponent } from './blog-illustration/blog-illustration.component';
import { ProjectsIllustrationComponent } from './projects-illustration/projects-illustration.component';
import { DesignIconComponent } from './design-icon/design-icon.component';
import { DevelopmentIconComponent } from './development-icon/development-icon.component';
import { InstructingIconComponent } from './instructing-icon/instructing-icon.component';



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
        ContactIllustrationComponent,
        BlogIllustrationComponent,
        ProjectsIllustrationComponent,
        DesignIconComponent,
        DevelopmentIconComponent,
        InstructingIconComponent
    ],
    exports: [
        NavbarComponent,
        HeaderIllustrationComponent,
        HomeIllustrationTwoComponent,
        DonateIllustrationComponent,
        ContactIllustrationComponent,
        BlogIllustrationComponent,
        ProjectsIllustrationComponent,
        DesignIconComponent,
        DevelopmentIconComponent,
        InstructingIconComponent
    ]
})
export class CustomComponentsModule {}
