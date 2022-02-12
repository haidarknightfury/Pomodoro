import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Task } from 'src/app/core/model/task.model';
import { TaskService } from 'src/app/core/service/task.service';
import * as pomodoroAction from '../store/pomodoro.action';

@Component({
  selector: 'app-pomodoro',
  templateUrl: './pomodoro.component.html',
  styleUrls: ['./pomodoro.component.scss']
})
export class PomodoroComponent implements OnInit {

  constructor(private store: Store<{ taskList: { tasks: Task[] , activeTask:Task} }>,
    private taskService: TaskService) { }

  ngOnInit(): void { }

  timerCompleted(){
    this.store.dispatch(new pomodoroAction.MarkTaskAsDone())
  }

}
