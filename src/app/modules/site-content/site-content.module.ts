import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SiteFooterComponent } from './components/site-footer/site-footer.component';
import { SiteHeaderComponent } from './components/site-header/site-header.component';
import { MainContentComponent } from './components/main-content/main-content.component';

@NgModule({
  declarations: [
    SiteFooterComponent,
    SiteHeaderComponent,
    MainContentComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SiteFooterComponent,
    SiteHeaderComponent,
    MainContentComponent
  ]
})
export class SiteContentModule { }
