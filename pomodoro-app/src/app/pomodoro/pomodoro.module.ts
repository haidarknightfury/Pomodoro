import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PomodoroComponent } from './pomodoro/pomodoro.component';
import { TimerComponent } from './timer/timer.component';
import { TasksComponent } from './tasks/tasks.component';



@NgModule({
  declarations: [TimerComponent, TasksComponent, PomodoroComponent],
  imports: [ CommonModule],
  exports : [TimerComponent]
})
export class PomodoroModule { }
