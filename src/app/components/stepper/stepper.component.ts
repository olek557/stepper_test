import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Step, StepperDirection } from './stepper.model';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss'],
})
export class StepperComponent {
  readonly stepperDirection = StepperDirection;
  @Input() steps: Step[] = [];
  @Input() currentStep = 0;
  @Input() direction: StepperDirection = StepperDirection.Horizontal;
  @Input() color = '#007bff';

  constructor() { }


}
