import { Component, OnInit } from '@angular/core';
import { Timer } from '../../core/model/timer.model';

@Component({
  selector: 'app-pomodoro-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit {

  constructor() { }
  timer: Timer = new Timer(25*60*1000, 1000, null);
  currentTime: string = '';

  ngOnInit(): void {
    this.currentTime = this.timer.getFormattedTime();
    console.log(this.currentTime);
  }

  startTimer(){
    this.timer = new Timer(25*60*1000 ,1000, () => {
        this.currentTime =  this.timer.getFormattedTime();
        console.log('current time is ', this.currentTime);
    });
    this.timer.start();
  }

}
