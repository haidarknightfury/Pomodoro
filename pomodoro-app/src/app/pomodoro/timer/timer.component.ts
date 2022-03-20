import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Timer } from '../../core/model/timer.model';

class TimerMode {
  timeInMins: number;
  active: boolean;
  label: string;

  constructor(time, label: string, active = false) {
    this.timeInMins = time;
    this.label = label;
    this.active = active;
  }
}

@Component({
  selector: 'app-pomodoro-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit {

  constructor() { }

  timer: Timer;
  currentTime: string = '';
  pomodoroTimers: TimerMode[] = [];

  @Output()
  timerCompletedEvent = new EventEmitter();

  ngOnInit(): void {
    this.initialiseTimerModes();
    this.timer = new Timer(this.convertToMs(this.getActiveTimer().timeInMins), 1000, null);
    this.currentTime = this.timer.getFormattedTime();
    console.log(this.currentTime);
  }

  startTimer() {
    const completedCallback = () => this.timerCompleted();
    const tickCallback = () => { 
      this.currentTime = this.timer.getFormattedTime();
      console.log('current time is ', this.currentTime);
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

  initialiseTimerModes() {
    this.pomodoroTimers = [];
    this.pomodoroTimers.push(new TimerMode(0.1, 'Pomodoro', true));
    this.pomodoroTimers.push(new TimerMode(10, 'Short break', false));
    this.pomodoroTimers.push(new TimerMode(25, 'Long break', false));
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

  nextTimer(direction = 1){
    const activeIndex = this.pomodoroTimers.findIndex(timerVal => timerVal.active);
    const nextActiveIndex = ((activeIndex + direction) < 0  ? (this.pomodoroTimers.length - Math.abs(activeIndex + direction)) : (activeIndex + direction)) % this.pomodoroTimers.length;
    this.pomodoroTimers.forEach(timerVal => timerVal.active = false);
    this.pomodoroTimers.filter((_, index)=> index === nextActiveIndex).forEach(timerVal => timerVal.active = true);
    this.timer = new Timer(this.convertToMs(this.getActiveTimer().timeInMins), 1000, null);
    this.currentTime = this.timer.getFormattedTime();
  }

}
