import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { homepage } from './homepage/homepage.component';
import { projects } from './projects/projects.component';
import { resume } from './resume/resume.component';
import { socials } from './socials/socials.component';
import { navbar } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    homepage,
    projects,
    resume,
    socials,
    navbar
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }