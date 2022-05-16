import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { homepage } from './homepage/homepage.component';
import { navbar } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    homepage,
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
