import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SiteContentModule } from './modules/site-content/site-content.module';
import { Routes } from '@angular/router';
import { ChampionModule } from './modules/champion/champion.module';
import { ChampionDetailComponent } from './modules/champion/components/detail/champion-detail.component';

const appRoutes: Routes = [
  { path: 'champion/:id',      component: ChampionDetailComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    appRoutes
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
