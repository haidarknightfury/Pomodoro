import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PomodoroComponent } from './pomodoro/pomodoro.component';
import { TimerComponent } from './timer/timer.component';
import { TasksComponent } from './tasks/tasks.component';
import { TaskItemComponent } from './tasks/task-item/task-item.component';
import { ReactiveFormsModule } from '@angular/forms';
import { Store, StoreModule } from '@ngrx/store';
import * as taskStore from '../pomodoro/store/pomodor.reducer';

@NgModule({
  declarations: [TimerComponent, TasksComponent, PomodoroComponent, TaskItemComponent],
  imports: [ CommonModule, ReactiveFormsModule, StoreModule.forRoot({taskList: taskStore.TaskReducer })],
  exports : [TimerComponent]
})
export class PomodoroModule { }
