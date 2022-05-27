import { Task } from '../model/task.model';
import { Injectable } from '@angular/core';
import { NgxIndexedDBService } from 'ngx-indexed-db';
import { Observable } from 'rxjs';
import { from } from 'rxjs';
import { Store } from '@ngrx/store';
import * as taskOperations from '../../pomodoro/store/pomodoro/pomodoro.action'


export interface ITaskService {
    saveTasks(task: Task): Observable<any>;
    getAllTasks(): Observable<any[]>;
    updateTask(task: Task): Observable<any>;
    deleteTask(task: Task): Observable<any>;
    notifyTaskDone(task: Task);
}

export abstract class AbstractTaskService implements ITaskService {
    abstract saveTasks(task: Task): Observable<any>;
    abstract getAllTasks(): Observable<any[]>;
    abstract updateTask(task: Task): Observable<any>;
    abstract deleteTask(task: Task): Observable<any>;

    constructor(){
      
    }

    notifyTaskDone(task: Task) {
        const notificationMessage = `task with title ${task.title} and details : ${task.note} has been completed`;
        alert(notificationMessage);
    }
}


@Injectable({ providedIn: 'root' })
export class TaskService extends AbstractTaskService {

    readonly storeName: string = 'tasks';
    constructor(private dbService: NgxIndexedDBService) {
        super();
    }

    saveTasks(task: Task): Observable<any> {
        return from(this.dbService.add(this.storeName, task))
    }

    getAllTasks(): Observable<any[]> {
        return from(this.dbService.getAll(this.storeName));
    }

    updateTask(task: Task): Observable<any> {
        const updatedTask = {...task};
        return from(this.dbService.update(this.storeName, updatedTask));
    }

    deleteTask(task: Task): Observable<any> {
        return from(this.dbService.delete(this.storeName, task.id));
    }
}

