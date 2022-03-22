import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AuthModule } from '../auth/auth.module';
import { DBConfig, NgxIndexedDBModule } from 'ngx-indexed-db';
import { TaskService , AbstractTaskService} from './service/task.service';
import { HoverableDirective } from './directives/hoverable.directive';


const dbConfig: DBConfig = {
  name: 'pomodorodb',
  version: 1,
  objectStoresMeta: [
    {
      store: 'tasks', storeConfig: { keyPath: 'id', autoIncrement: true },
      storeSchema: [
        { name: 'title', keypath: 'title', options: { unique: false } },
        { name: 'note', keypath: 'note', options: { unique: false } },
        { name: 'estPomodoro', keypath: 'estPomodoro', options: { unique: false } },
        { name: 'completed', keypath: 'completed', options: { unique: false } }
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
