import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PomodoroComponent } from './pomodoro/pomodoro.component';



@NgModule({
  declarations: [PomodoroComponent],
  imports: [
    CommonModule
  ]
})
export class PomodoroModule { }
