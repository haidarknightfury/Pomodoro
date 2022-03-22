import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import {PomodoroModule} from './pomodoro/pomodoro.module';
import { HoverableDirective } from './core/directives/hoverable.directive';

@NgModule({
  declarations: [
    AppComponent,
    HoverableDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    PomodoroModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
