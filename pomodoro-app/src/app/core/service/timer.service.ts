
import { Injectable } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { NgxIndexedDBService } from 'ngx-indexed-db';
import { from, Observable } from 'rxjs';
import { TimerMode } from '../model/timer-mode.model';


class TimerFormControl {

    constructor(public timer: TimerMode,
                public formControl: FormControl) { }
}

@Injectable({ providedIn: 'root' })
export class TimerService {

    readonly storeName: string = 'timers';
    constructor(private dbService: NgxIndexedDBService) {}

    getTimers(): TimerMode[] {
        let pomodoroTimers = [];
        pomodoroTimers.push(new TimerMode(5, 'Pomodoro', true, 'Pomodoro Timer (in minutes)'));
        pomodoroTimers.push(new TimerMode(10, 'Short break', false, 'Short break (in minutes)'));
        pomodoroTimers.push(new TimerMode(25, 'Long break', false, 'Long break (in minutes)'));
        return pomodoroTimers;
    }

    getFormControls(timerMode: TimerMode[]): TimerFormControl[] {
        return timerMode.map(timer => {
            const formControl = new FormControl(timer.timeInMins, [Validators.required]);
            return new TimerFormControl({ ...timer }, formControl);
        })
    }

    getAllTimers(): Observable<any[]> {
        return from(this.dbService.getAll(this.storeName));
    }

    updateTimer(task: TimerMode): Observable<any> {
        const updatedTask = {...task};
        return from(this.dbService.update(this.storeName, updatedTask));
    }

    addTimer(timer: TimerMode): Observable<number> {
        const timerObj = {
            timeInMins: timer.timeInMins,
            active: timer.active,
            label: timer.label,
            description: timer.description,
            modelValue: timer.modelValue
        }
        return from(this.dbService.add(this.storeName, timerObj));
    }


}