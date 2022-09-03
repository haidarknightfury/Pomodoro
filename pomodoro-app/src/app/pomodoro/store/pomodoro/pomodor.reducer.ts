import { Task } from '../../../core/model/task.model';
import * as taskOperations from './pomodoro.action';


export interface TaskState {
    tasks: Task[],
    activeTask: Task
}

const initialTaskState: TaskState = {
    tasks: [],
    activeTask: undefined
}

export function TaskReducer(state: TaskState = initialTaskState, action: taskOperations.TaskAction) {
    console.log('task reducer action', action);
    switch (action.type) {
        case taskOperations.TASK_ADDED:
            const noTaskYet = (state.tasks.length === 0 && action.payload )|| state.tasks.every((task) => task.completed);
            return { ...state, tasks: [...state.tasks, action.payload], activeTask: noTaskYet ? action.payload : state.tasks.find(task => !task.completed)};
        case taskOperations.UPDATE_TASK:
            const taskToUpdate = state.tasks[action.payload.index];
            const updatedTask = { ...taskToUpdate, ...action.payload.task };
            const tasks = [...state.tasks];
            tasks[action.payload.index] = updatedTask;
            return {...state, tasks: tasks, activeTask: tasks.find(task => !task.completed)};
        case taskOperations.DELETE_TASK:
            const oldtasks = [...state.tasks];
            oldtasks.splice(action.payload, 1);
            return { ...state, tasks: oldtasks, activeTask: oldtasks.find(task => !task.completed)}
        case taskOperations.TASK_LOADED:
            return {...state, tasks: [...action.payload], activeTask: action.payload.find(task => !task.completed)}
        default:
            return {...state}
    }
}