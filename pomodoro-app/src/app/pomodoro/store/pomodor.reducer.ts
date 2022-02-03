import { Task } from '../../core/model/task.model';
import * as taskOperations from './pomodoro.action';

const initialTaskState = {
    tasks: []
}


export function TaskReducer(state = initialTaskState, action: taskOperations.TaskAction) {
    switch (action.type) {
        case taskOperations.ADD_TASK:
            return {
                ...initialTaskState,
                tasks: [...state.tasks, action.payload]
            };
        case taskOperations.UPDATE_TASK:
            const taskToUpdate = state.tasks[action.payload.index];
            const updatedTask = { ...taskToUpdate, ...action.payload.task };
            const tasks = [...state.tasks];
            tasks[action.payload.index] = updatedTask;
            return {
                ...state,
                tasks: tasks
            };
        case taskOperations.DELETE_TASK:
            const oldtasks = [...state.tasks];
            oldtasks.splice(action.payload, 1);
            return { ...state, tasks: oldtasks }
        case taskOperations.LOAD_TASK:
            return {...state, tasks: [...action.payload]}
        default:
            return {...state}
    }
}









