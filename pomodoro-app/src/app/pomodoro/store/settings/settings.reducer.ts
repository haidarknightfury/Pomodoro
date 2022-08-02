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
        case fromSettingsAction.SETTINGS_LOADED:
            console.log('settings has been loaded', action.payload);
            return { timerModes: action.payload};
        case fromSettingsAction.UPDATE_SETTINGS:
            const currentSettingsIndex = initialState.timerModes.findIndex(i => i.label === action.payload.label);
            const newSettings = initialState.timerModes.splice(currentSettingsIndex, 1, action.payload);
            return { timerModes: newSettings}
        default:
            return initialState
    }
}