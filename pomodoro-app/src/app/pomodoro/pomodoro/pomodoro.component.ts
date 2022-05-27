import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { take } from 'rxjs/operators';
import { Task } from 'src/app/core/model/task.model';
import { Timer } from 'src/app/core/model/timer.model';
import { TaskService } from 'src/app/core/service/task.service';
import * as pomodoroAction from '../store/pomodoro/pomodoro.action';
import * as fromModel from '../store/pomodoro/pomodor.reducer';

@Component({
  selector: 'app-pomodoro',
  templateUrl: './pomodoro.component.html',
  styleUrls: ['./pomodoro.component.scss']
})
export class PomodoroComponent implements OnInit {

  constructor(private store: Store<{ taskList: fromModel.TaskState}>,
              private router: Router,
              private taskService: TaskService) { }

  ngOnInit(): void { }

  timerCompleted(timer: Timer){
    this.store.select('taskList').pipe(take(1)).subscribe((state)=>{ 
      const activeTaskIndex = state.tasks.findIndex((task)=> (task as Task).id === state.activeTask.id);
      this.store.dispatch(new pomodoroAction.MarkTaskAsDone({activeTask: state.activeTask, index: activeTaskIndex}))
    });
    
        // this.notifyTaskDone(task);
        // this.store.dispatch(new taskOperations.MarkTaskAsDone());
  }


  gotoSettings(){
    this.router.navigate(['/', 'settings']);
  }

}
