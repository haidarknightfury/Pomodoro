import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Timer } from '../../core/model/timer.model';
import { TimerMode } from '../../core/model/timer-mode.model';
import { TimerService } from '../../core/service/timer.service';
import { Store } from '@ngrx/store';
import { SettingState } from '../store/settings/settings.reducer';
import { LoadSettingsAction } from '../store/settings/settings.action';


@Component({
  selector: 'app-pomodoro-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit {

  constructor(private timerService: TimerService, private store: Store<{ settings: SettingState }>) { }

  timer: Timer;
  currentTime: string = '';
  pomodoroTimers: TimerMode[] = [];

  @Output()
  timerCompletedEvent = new EventEmitter();

  ngOnInit(): void {
    this.store.dispatch(new LoadSettingsAction());

    this.store.select('settings').subscribe((resp) => {
      if (resp && resp.timerModes && resp.timerModes.length > 0) {
        this.pomodoroTimers = JSON.parse(JSON.stringify(resp.timerModes));
        this.timer = new Timer(this.convertToMs(this.getActiveTimer().timeInMins), 1000, null);
        this.currentTime = this.timer.getFormattedTime();
      }
    });
  }

  startTimer() {
    const completedCallback = () => this.timerCompleted();
    const tickCallback = () => {
      this.currentTime = this.timer.getFormattedTime();
    };

    this.timer = new Timer(this.convertToMs(this.getActiveTimer().timeInMins), 1000, tickCallback, completedCallback);
    this.timer.start();
  }

  convertToMs(timeInMins) {
    return timeInMins * 60 * 1000;
  }

  timerCompleted() {
    this.timerCompletedEvent.emit(this.timer);
  }

  setCurrentTimer(timer: TimerMode) {
    this.pomodoroTimers.forEach(timerVal => timerVal.active = false);
    this.pomodoroTimers.filter(timerVal => timerVal.label === timer.label).forEach(timerVal => timerVal.active = true);
    this.timer = new Timer(this.convertToMs(this.getActiveTimer().timeInMins), 1000, null);
    this.currentTime = this.timer.getFormattedTime();
  }

  getActiveTimer(): TimerMode {
    return this.pomodoroTimers.find(timer => timer.active);
  }

  nextTimer(direction = 1) {
    const activeIndex = this.pomodoroTimers.findIndex(timerVal => timerVal.active);
    const nextActiveIndex = ((activeIndex + direction) < 0 ? (this.pomodoroTimers.length - Math.abs(activeIndex + direction)) : (activeIndex + direction)) % this.pomodoroTimers.length;
    this.pomodoroTimers.forEach(timerVal => timerVal.active = false);
    this.pomodoroTimers.filter((_, index) => index === nextActiveIndex).forEach(timerVal => timerVal.active = true);
    this.timer = new Timer(this.convertToMs(this.getActiveTimer().timeInMins), 1000, null);
    this.currentTime = this.timer.getFormattedTime();
  }

}
