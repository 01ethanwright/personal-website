import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { homepage } from './homepage/homepage.component';
import { projects } from './projects/projects.component';
import { resume } from './resume/resume.component';
import { socials } from './socials/socials.component';
import { navbar } from './navbar/navbar.component';
import { socialcard } from './socials/social-card/social-card.component';

@NgModule({
  declarations: [
    AppComponent,
    homepage,
    projects,
    resume,
    socials,
    navbar,
    socialcard
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PdfViewerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
