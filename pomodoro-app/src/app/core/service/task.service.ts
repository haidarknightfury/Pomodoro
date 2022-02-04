import {Task} from '../model/task.model';
import {Injectable} from '@angular/core';
import { NgxIndexedDBService } from 'ngx-indexed-db';
import { Observable } from 'rxjs';
import { from } from 'rxjs';


export interface ITaskService {
    saveTasks(task: Task): Observable<any>;
    getAllTasks(): Observable<any[]>;
    updateTask(task: Task): Observable<any>;
    deleteTask(task: Task): Observable<any>;
}

@Injectable({providedIn: 'root'})
export class TaskService implements ITaskService {

    readonly storeName: string = 'tasks';

    constructor(private dbService: NgxIndexedDBService){}

    saveTasks(task: Task): Observable<any> {
        return from(this.dbService.add(this.storeName, task))
    }

    getAllTasks(): Observable<any[]> {
        return from(this.dbService.getAll(this.storeName));
    }

    updateTask(task: Task): Observable<any>{
        return from(this.dbService.update(this.storeName, task));
    }

    deleteTask(task: Task): Observable<any> {
        return from(this.dbService.delete(this.storeName, task.id));
    }
    
}