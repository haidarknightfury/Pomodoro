import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { filter, map, switchMap } from 'rxjs/operators';
import { forkJoin, Observable, of, zip } from 'rxjs';
import { Store } from '@ngrx/store';
import * as settingsOperation from '../settings/settings.action';
import { TimerService } from '../../../core/service/timer.service';


@Injectable({ providedIn: 'root' })
export class SettingsEffects {

    constructor(private actions$: Actions,
        private timerService: TimerService) {

    }


    @Effect()
    settingsLoadedEffect = this.actions$.pipe(
        ofType(settingsOperation.LOAD_SETTINGS),
        switchMap(() => this.timerService.getAllTimers()),
        switchMap((allSettings) => {
            console.log('getting settings from db');
            if (allSettings.length === 0) return [new settingsOperation.SettingsLoadedAction(this.timerService.getTimers())];
            return [new settingsOperation.SettingsLoadedAction(allSettings)]
        })
    )


    @Effect()
    trySaveSettingsEffect = this.actions$.pipe(
        ofType(settingsOperation.SAVE_SETTINGS),
        map((saveAction: settingsOperation.UpdateAllSettingsAction) => {
            console.log('trying to save everything to db', saveAction.payload);
            return saveAction.payload;
        }),
        map((timers) => timers.map(timer => {
            return (!Boolean(timer.id)) ? this.timerService.addTimer(timer) : this.timerService.updateTimer(timer);
          }
        )),
        switchMap((timers$) => forkJoin(timers$)),
        switchMap((_resolved) => {
            console.log('timers has been persisted in application', _resolved);
            return this.timerService.getAllTimers();
        }),
        switchMap((timers) => [new settingsOperation.SettingsLoadedAction(timers)])
    )

}