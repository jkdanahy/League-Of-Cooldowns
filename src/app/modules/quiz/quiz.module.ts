import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { QuizComponent } from './components/quiz/quiz.component';

@NgModule({
  declarations: [QuizComponent],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class QuizModule { }
