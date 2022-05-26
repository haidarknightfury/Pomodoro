import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { TimerService } from 'src/app/core/service/timer.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {


  settingOptions : any[];
  formGroup: FormGroup;

  constructor(private router: Router,
              private timerService: TimerService) { }

  ngOnInit(): void {
    this.settingOptions = this.timerService.getFormControls(this.timerService.getTimers());
    this.formGroup = this.getFormGroup(this.settingOptions);
  }

  getFormGroup(options: any[]) {
    const fg = {}
    options.forEach(opt => {
      fg[opt.timer.modelValue] = opt.formControl
    }); 
    return new FormGroup(fg);
  }

  backToPomodoro() {
    this.router.navigate(['/', 'pomodoro']);
  }

  saveChanges() {
    console.log(this.formGroup.value);
    this.backToPomodoro();
  }

}
