import {Task} from '../model/task.model';
import {Injectable} from '@angular/core';
import { NgxIndexedDBService } from 'ngx-indexed-db';
import { Observable } from 'rxjs';
import { from } from 'rxjs';


export interface ITaskService {
    saveTasks(task: Task): Observable<any>;
    getAllTasks(): Observable<any[]>;
}

@Injectable({providedIn: 'root'})
export class TaskService implements ITaskService {

    constructor(private dbService: NgxIndexedDBService){}

    saveTasks(task: Task): Observable<any> {
        return from(this.dbService.add('tasks', task))
    }

    getAllTasks(): Observable<any[]> {
        return from(this.dbService.getAll('tasks'));
    }

    updateTask(task: Task): Observable<any>{
        return from(this.dbService.update('tasks', task, task.id));
    }
    
}