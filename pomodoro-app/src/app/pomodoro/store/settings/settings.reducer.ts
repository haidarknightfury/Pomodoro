import {TimerMode} from '../../../core/model/timer-mode.model';
import * as fromSettingsAction from './settings.action';
export interface SettingState { 
    timerModes: TimerMode[]; 
}

const initialSettings: SettingState  = {
    timerModes: []
}

export function settingsReducer(initialState = initialSettings, action: fromSettingsAction.SettingsAction): SettingState{
    switch(action.type) {
        case fromSettingsAction.LOAD_SETTINGS:
            let pomodoroTimers = [];
            pomodoroTimers.push(new TimerMode(0.1, 'Pomodoro', true, 'Pomodoro Timer (in minutes)'));
            pomodoroTimers.push(new TimerMode(10, 'Short break', false, 'Short break (in minutes)'));
            pomodoroTimers.push(new TimerMode(25, 'Long break', false, 'Long break (in minutes)'));
            return { timerModes: pomodoroTimers};
        case fromSettingsAction.UPDATE_SETTINGS:
            const currentSettingsIndex = initialState.timerModes.findIndex(i => i.label === action.payload.label);
            const newSettings = initialState.timerModes.splice(currentSettingsIndex, 1, action.payload);
            return { timerModes: newSettings}
        default:
            return initialState
    }
}