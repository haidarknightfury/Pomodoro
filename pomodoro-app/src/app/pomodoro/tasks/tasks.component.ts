
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Task } from '../../core/model/task.model';
import * as taskOperations from '../store/pomodoro/pomodoro.action';
import {TaskService} from '../../core/service/task.service';
import * as fromTaskList from '../store/pomodoro/pomodor.reducer';
@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {

  constructor(private store: Store<{ taskList: fromTaskList.TaskState}>,
              private taskService: TaskService) { }

  taskItems = [new Task('Fist task', '')];
  activeTask:Task = undefined;

  ngOnInit(): void {
    this.store.dispatch(new taskOperations.LoadTask());
    this.store.select('taskList').subscribe((res)=> {
      this.taskItems = res.tasks;
      this.activeTask = res.activeTask;
      console.log('all tasks', res.tasks);
    });
  }

  addNewTask() {
    const task = new Task('New task','');
    this.store.dispatch(new taskOperations.AddTask({...task}));
  }

  taskUpdated(task:Task, index: number){
    this.taskService.updateTask(task).subscribe((res)=>{
      this.store.dispatch(new taskOperations.UpdateTask({index, task}));
    })
  }

  taskDeleted(task:Task, index:number){
    this.taskService.deleteTask(task).subscribe((res)=>{
        this.store.dispatch(new taskOperations.DeleteTask(index));
    });
  }

  isActive(task:Task) {
    return this.activeTask?.id === task?.id;
  }

}
