import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChampionDetailComponent } from './modules/champion/components/detail/champion-detail.component';
import { ChampionListComponent } from './modules/champion/components/list/champion-list.component';
import { QuizComponent } from './modules/quiz/components/quiz/quiz.component';

const routes: Routes = [
  { path: '',
    redirectTo: '/champion/list',
    pathMatch: 'full'
  },
  { path: 'champion/detail/:id', component: ChampionDetailComponent },
  { path: 'champion/list', component: ChampionListComponent },
  { path: 'quiz', component: QuizComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
