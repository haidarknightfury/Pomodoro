import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {


  settingOptions = [
    {
      title: 'Pomodoro timer (in minutes)',
      name: 'Pomodoro'
    },
    {
      title: 'Short break (in minutes)',
      name: 'ShortBreak'
    },
    {
      title: 'Long break (in minutes)',
      name: 'LongBreak'
    }
  ]

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  backToPomodoro() {
    this.router.navigate(['/', 'pomodoro']);
  }

  saveChanges() {

    this.backToPomodoro();
  }

}
