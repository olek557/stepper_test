import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StepperModule } from './components/stepper/stepper.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    StepperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
