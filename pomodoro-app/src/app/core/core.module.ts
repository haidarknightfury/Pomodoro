import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AuthModule } from '../auth/auth.module';
import { DBConfig, NgxIndexedDBModule } from 'ngx-indexed-db';
import { TaskService , AbstractTaskService} from './service/task.service';
import { TimerMode } from './model/timer-mode.model';





const dbConfig: DBConfig = {
  name: 'pomodorodb',
  version: 3,
  objectStoresMeta: [
    {
      store: 'tasks', storeConfig: { keyPath: 'id', autoIncrement: true },
      storeSchema: [
        { name: 'title', keypath: 'title', options: { unique: false } },
        { name: 'note', keypath: 'note', options: { unique: false } },
        { name: 'estPomodoro', keypath: 'estPomodoro', options: { unique: false } },
        { name: 'completed', keypath: 'completed', options: { unique: false } }
      ]
    },
    {
      store: 'timers', storeConfig: { keyPath: 'id', autoIncrement: true },
      storeSchema: [
        { name: 'timeInMins', keypath: 'timeInMins', options: { unique: false } },
        { name: 'active', keypath: 'active', options: { unique: false } },
        { name: 'label', keypath: 'label', options: { unique: false } },
        { name: 'description', keypath: 'description', options: { unique: false } },
        { name: 'modelValue', keypath: 'modelValue', options: { unique: false } }
      ]
    }
  ]
}

@NgModule({
  declarations: [HeaderComponent, FooterComponent],
  imports: [CommonModule, AuthModule, NgxIndexedDBModule.forRoot(dbConfig)],
  exports: [HeaderComponent, FooterComponent],
  providers: [{provide: AbstractTaskService, useValue: TaskService}]
})
export class CoreModule { }
