import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WelcomeSectionComponent } from './welcome-section/welcome-section.component';
import { ProjectsSectionComponent } from './projects-section/projects-section.component';
import { ContactSectionComponent } from './contact-section/contact-section.component';

const routes: Routes = [
  { path: '', },
  { path: 'welcome-section', component: WelcomeSectionComponent },
  { path: 'projects', component: ProjectsSectionComponent },
  { path: 'contact', component: ContactSectionComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
