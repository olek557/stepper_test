import { Step, StepperDirection } from './components/stepper/stepper.model';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  readonly stepperDirection = StepperDirection;
  stepper1: Step[] = [
    {label: 'Role'},
    {label: 'Email'},
    {label: 'Settings'},
  ];
  
  stepper2: Step[] = [
    {label: 'Role'},
    {label: 'Email'},
    {label: 'Settings'},
    {label: 'Settings'},
  ];

  stepper1CurrentStep = 0;
  stepper2CurrentStep = 0;
}
