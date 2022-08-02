import { Action } from "@ngrx/store";
import { TimerMode } from "../../../core/model/timer-mode.model";

export const LOAD_SETTINGS = 'LOAD_SETTINGS';
export const UPDATE_SETTINGS = 'UPDATE_SETTINGS';
export const SETTINGS_LOADED = 'SETTINGS_LOADED';
export const SAVE_SETTINGS = 'SAVE_SETTINGS';
export const SETTINGS_SAVED  = 'SETTINGS_SAVED';
export class UpdateSettingsAction implements Action {
    readonly type = UPDATE_SETTINGS;
    constructor(public payload: TimerMode){}
}


export class LoadSettingsAction implements Action {
    readonly type = LOAD_SETTINGS;
}

export class SettingsLoadedAction implements Action {
    readonly type = SETTINGS_LOADED;
    constructor(public payload: TimerMode[]){}
}

export class UpdateAllSettingsAction implements Action { 
    readonly type = SAVE_SETTINGS;
    constructor(public payload: TimerMode[]){}
}

export type SettingsAction = UpdateSettingsAction | LoadSettingsAction  | SettingsLoadedAction | UpdateAllSettingsAction;