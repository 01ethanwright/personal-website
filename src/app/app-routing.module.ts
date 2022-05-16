import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { homepage } from './homepage/homepage.component';
import { projects } from './projects/projects.component';
import { resume } from './resume/resume.component';
import { links } from './links/links.component';

const routes: Routes = [
  {path: '', component: homepage},
  {path: 'projects', component: projects},
  {path: 'resume', component: resume},
  {path: 'socials', component: links}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
