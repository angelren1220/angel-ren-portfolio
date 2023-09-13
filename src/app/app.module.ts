import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { WelcomeSectionComponent } from './welcome-section/welcome-section.component';
import { ProjectsSectionComponent } from './projects-section/projects-section.component';
import { ContactSectionComponent } from './contact-section/contact-section.component';
import { FooterComponent } from './footer/footer.component';
import { TopButtonComponent } from './top-button/top-button.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    WelcomeSectionComponent,
    ProjectsSectionComponent,
    ContactSectionComponent,
    FooterComponent,
    TopButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
