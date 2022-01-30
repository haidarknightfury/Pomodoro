import { Component, OnInit } from '@angular/core';
import { Timer } from '../../core/model/timer.model';

class TimerMode { 
  timeInMins: number;
  active: boolean;
  label: string;

  constructor(time, label : string, active = false){
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
  pomodoroTimers : TimerMode[] = [];

  ngOnInit(): void {
    this.initialiseTimerModes();
    this.timer =  new Timer(this.convertToMs(this.getActiveTimer().timeInMins), 1000, null);
    this.currentTime = this.timer.getFormattedTime();
    console.log(this.currentTime);
  }

  startTimer(){
    this.timer = new Timer(this.convertToMs(this.getActiveTimer().timeInMins) ,1000, () => {
        this.currentTime =  this.timer.getFormattedTime();
        console.log('current time is ', this.currentTime);
    });
    this.timer.start();
  }

  convertToMs(timeInMins) {
    return timeInMins * 60*1000;
  }
  

  initialiseTimerModes() {
    this.pomodoroTimers = [];
    this.pomodoroTimers.push(new TimerMode(25, 'Pomodoro', true));
    this.pomodoroTimers.push(new TimerMode(15, 'Short break', false));
    this.pomodoroTimers.push(new TimerMode(20, 'Long break', false));
  }

  setCurrentTimer(timer: TimerMode){
    this.pomodoroTimers.forEach(timerVal => timerVal.active = false);
    this.pomodoroTimers.filter(timerVal => timerVal.label === timer.label).forEach(timerVal => timerVal.active = true);    
    this.timer =  new Timer(this.convertToMs(this.getActiveTimer().timeInMins), 1000, null);
    this.currentTime = this.timer.getFormattedTime();
  }

  getActiveTimer():TimerMode {
    return this.pomodoroTimers.find(timer => timer.active);
  }

}