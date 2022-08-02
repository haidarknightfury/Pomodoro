import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PomodoroComponent } from './pomodoro/pomodoro.component';
import { TimerComponent } from './timer/timer.component';
import { TasksComponent } from './tasks/tasks.component';
import { TaskItemComponent } from './tasks/task-item/task-item.component';
import { ReactiveFormsModule } from '@angular/forms';
import { Store, StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import {PomodoroEffects} from './store/pomodoro/pomodoro.effects';
import {SettingsEffects} from './store/settings/setting.effects';
import { SettingsComponent } from './settings/settings.component';
import * as fromStore from  './store/store.model';

@NgModule({
  declarations: [TimerComponent, TasksComponent, PomodoroComponent, TaskItemComponent, SettingsComponent],
  imports: [ CommonModule, ReactiveFormsModule, StoreModule.forRoot(fromStore.reducers), EffectsModule.forRoot([PomodoroEffects, SettingsEffects])],
  exports : [TimerComponent]
})
export class PomodoroModule { }
