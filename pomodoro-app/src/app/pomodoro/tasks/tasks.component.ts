import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Task } from '../../core/model/task.model';
import * as taskOperations from '../store/pomodoro.action';
import {TaskService} from '../../core/service/task.service';
@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {

  constructor(private store: Store<{ taskList: { tasks: Task[] } }>,
              private taskService: TaskService) { }

  taskItems = [new Task('Fist task', '')];

  ngOnInit(): void {
    this.store.select('taskList').subscribe((res) => {
        this.taskItems = res.tasks;
    });
  }

  addNewTask() {
    this.store.dispatch(new taskOperations.AddTask(new Task('New task','')));
  }

  taskUpdated(task:Task, index: number){
    this.store.dispatch(new taskOperations.UpdateTask({index, task}));
  }

}
