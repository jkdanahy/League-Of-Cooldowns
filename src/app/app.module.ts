import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SiteContentModule } from './modules/site-content/site-content.module';
import { ChampionModule } from './modules/champion/champion.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,  
    SiteContentModule,
    ChampionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
