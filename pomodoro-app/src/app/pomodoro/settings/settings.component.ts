import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { TimerService } from 'src/app/core/service/timer.service';
import { SettingState } from '../store/settings/settings.reducer';
import * as fromSettingsAction from '../store/settings/settings.action';
import { TimerMode } from 'src/app/core/model/timer-mode.model';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {


  settingOptions: any[];
  formGroup: FormGroup;
  timerModes: TimerMode[];

  constructor(private router: Router,
    private timerService: TimerService,
    private store: Store<{ settings: SettingState }>) { }

  ngOnInit(): void {
    this.store.dispatch(new fromSettingsAction.LoadSettingsAction());

    this.store.select('settings').subscribe(resp => {
      this.timerModes = resp.timerModes;
      if (resp.timerModes && resp.timerModes.length > 0) {
        this.settingOptions = this.timerService.getFormControls([...resp.timerModes]);
        this.formGroup = this.getFormGroup(this.settingOptions);
      }
    });
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
    let updated = [];
    this.timerModes.forEach(timer => {
      const newMinuteValue = this.formGroup.value[timer.modelValue];
      updated.push({ ...timer, timeInMins: newMinuteValue });
    });
    this.store.dispatch(new fromSettingsAction.UpdateAllSettingsAction(updated));
    this.backToPomodoro();

  }

}
