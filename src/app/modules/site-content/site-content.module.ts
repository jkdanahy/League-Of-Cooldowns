import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SiteFooterComponent } from './components/site-footer/site-footer.component';
import { SiteHeaderComponent } from './components/site-header/site-header.component';
@NgModule({
  declarations: [
    SiteFooterComponent,
    SiteHeaderComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SiteFooterComponent,
    SiteHeaderComponent
  ]
})
export class SiteContentModule { }
