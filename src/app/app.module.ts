import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { homepage } from './homepage/homepage.component';
import { projects } from './projects/projects.component';
import { resume } from './resume/resume.component';
import { links } from './links/links.component';
import { navbar } from './navbar/navbar.component';
import { linkcard } from './links/link-card/link-card.component';

@NgModule({
  declarations: [
    AppComponent,
    homepage,
    projects,
    resume,
    links,
    navbar,
    linkcard
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
