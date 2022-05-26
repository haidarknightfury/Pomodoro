import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as pomodoroOperation from './pomodoro.action';
import { map, switchMap } from 'rxjs/operators';
import { TaskService } from 'src/app/core/service/task.service';
import { Task } from 'src/app/core/model/task.model';
import { forkJoin, Observable, of, zip } from 'rxjs';
import { Store } from '@ngrx/store';

@Injectable({ providedIn: 'root' })
export class PomodoroEffects {

    constructor(private actions$: Actions,
        private taskService: TaskService) { }

    @Effect()
    taskAddedEffect = this.actions$.pipe(
        ofType(pomodoroOperation.ADD_TASK),
        map((addTaskAction: pomodoroOperation.AddTask) => addTaskAction.payload),
        switchMap((task) => {
            const res = this.taskService.saveTasks(task);
            return forkJoin([res, of(task)])
        }),
        map((combined)=> {
            return ({...combined[1], id: combined[0]})
        }),
        switchMap((newTask: Task)=> [new pomodoroOperation.TaskAdded(newTask)])
    )


    @Effect()
    tasksLoadedEffect = this.actions$.pipe(
        ofType(pomodoroOperation.LOAD_TASK),
        switchMap(() => this.taskService.getAllTasks()),
        switchMap((allTasks)=> [new pomodoroOperation.TaskLoaded(allTasks)])
    )


    @Effect()
    markTaskAsDone = this.actions$.pipe(
        ofType(pomodoroOperation.MARK_TASK_AS_DONE),
        map((markTaskAsDoneAction: pomodoroOperation.MarkTaskAsDone) => markTaskAsDoneAction.payload),
        switchMap((payload) => {
            const updatedActiveTask = {...payload.activeTask, completed: true};
            this.taskService.updateTask(updatedActiveTask);
            this.taskService.notifyTaskDone(updatedActiveTask);
            return [new pomodoroOperation.UpdateTask({index: payload.index, task: updatedActiveTask})];
        })

    )
}