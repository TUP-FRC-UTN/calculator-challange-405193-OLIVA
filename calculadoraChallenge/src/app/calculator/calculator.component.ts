import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.css'
})
export class CalculatorComponent {
  @Input() valor1: number = 0;
  @Input() valor2: number = 0;
  @Output() resultado = new EventEmitter<number>();

  
}
