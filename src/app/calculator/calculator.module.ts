import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalculatorComponent } from './components';
import { CalculatorService } from './services';
import { CalculatorRoutingComponent } from './calculator-routing.component';
import { CalculatorRoutingModule } from './calculator-routing.module';

@NgModule({
  declarations: [
    CalculatorComponent,
    CalculatorRoutingComponent
  ],
  imports: [
    CommonModule,
    CalculatorRoutingModule
  ],
  exports: [
    CalculatorComponent
  ],
  providers: [
    CalculatorService
  ]
})
export class CalculatorModule { }
