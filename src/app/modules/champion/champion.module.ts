import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChampionDetailComponent } from './components/detail/champion-detail.component';
import { ChampionListComponent } from './components/list/champion-list.component';

@NgModule({
  declarations: [
    ChampionDetailComponent,
    ChampionListComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
  ]
})
export class ChampionModule { }
