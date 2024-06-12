import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Step, StepperDirection } from './stepper.model';

@Component({
  selector: 'app-stepper[currentStep]',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss'],
})
export class StepperComponent {
  readonly stepperDirection = StepperDirection;
  @Input() steps: Step[] = [];
  @Input() currentStep!: number;
  @Input() direction: StepperDirection = StepperDirection.Horizontal;
  @Input() color = '#007bff';
  @Output() stepClicked = new EventEmitter<number>();

  constructor() { }


}
