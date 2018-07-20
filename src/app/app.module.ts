import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { HomeModule } from './home/home.module';
import { CommunityModule } from './community/community.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    CommunityModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
