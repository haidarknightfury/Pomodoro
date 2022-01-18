import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import {AuthModule} from '../auth/auth.module';


@NgModule({
  declarations: [HeaderComponent, FooterComponent],
  imports: [ CommonModule, AuthModule ],
  exports: [HeaderComponent, FooterComponent]
})
export class CoreModule { }
