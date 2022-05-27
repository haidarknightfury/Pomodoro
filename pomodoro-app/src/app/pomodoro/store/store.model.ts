import { ActionReducerMap } from '@ngrx/store';
import {TaskState} from '../store/pomodoro/pomodor.reducer';
import * as fromTaskList from '../store/pomodoro/pomodor.reducer';
import * as fromSettings from '../store/settings/settings.reducer';

export interface AppState { 
    taskList: TaskState;
    settings: fromSettings.SettingState;
}

export const reducers: ActionReducerMap<AppState> = {
    taskList: fromTaskList.TaskReducer,
    settings: fromSettings.settingsReducer
}