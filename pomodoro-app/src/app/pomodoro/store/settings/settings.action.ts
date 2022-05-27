import { Action } from "@ngrx/store";
import { TimerMode } from "../../../core/model/timer-mode.model";

export const LOAD_SETTINGS = 'LOAD_SETTINGS';
export const UPDATE_SETTINGS = 'UPDATE_SETTINGS';

export class UpdateSettingsAction implements Action {
    readonly type = UPDATE_SETTINGS;
    constructor(public payload: TimerMode){}
}


export class LoadSettingsAction implements Action {
    readonly type = LOAD_SETTINGS;
}

export type SettingsAction = UpdateSettingsAction | LoadSettingsAction;