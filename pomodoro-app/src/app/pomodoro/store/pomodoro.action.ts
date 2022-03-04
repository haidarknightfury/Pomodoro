import {Action} from '@ngrx/store';
import {Task} from '../../core/model/task.model';

export const ADD_TASK = 'ADD_TASK';
export const TASK_ADDED = 'TASK_ADDED';
export const UPDATE_TASK = 'UPDATE_TASK';
export const DELETE_TASK ='DELETE_TASK';
export const LOAD_TASK = 'LOAD_TASK';
export const TASK_LOADED = 'TASK_LOADED';
export const MARK_TASK_AS_DONE = 'MARK_TASK_AS_DONE';


export class AddTask implements Action {
    readonly type = ADD_TASK;
    constructor(public payload: Task){}
}

export class TaskAdded implements Action {
    readonly type = TASK_ADDED;
    constructor(public payload: Task){}
}

export class LoadTask implements Action {
    readonly type = LOAD_TASK;
    constructor(){}
}

export class TaskLoaded implements Action {
    readonly type = TASK_LOADED;
    constructor(public payload: Task[]){}
}

export class UpdateTask implements Action {
    readonly type = UPDATE_TASK;
    constructor(public payload: {index:number, task: Task}){}
}

export class DeleteTask implements Action {
    readonly type = DELETE_TASK;
    constructor(public payload:number){}
}

export class MarkTaskAsDone implements Action {
    readonly type = MARK_TASK_AS_DONE;
    constructor(public payload: {activeTask:Task, index: number}){}
}

export type TaskAction = AddTask | UpdateTask | DeleteTask |LoadTask|MarkTaskAsDone | TaskAdded | TaskLoaded;