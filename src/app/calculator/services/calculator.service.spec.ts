import { TestBed, inject } from '@angular/core/testing';

import { CalculatorService } from './calculator.service';

describe('CalculatorService', () => {
  let service: CalculatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalculatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should ensure that 1 + 4 = 5', inject([CalculatorService], (service:CalculatorService)=>{
    let sum =service.calculate(1, 4, CalculatorService.SOMA);
    expect(sum).toEqual(5);
  }))

  it('should ensure that 1 - 4 = -3', inject([CalculatorService], (service:CalculatorService)=>{
    let sum =service.calculate(1, 4, CalculatorService.SUBTRACTION);
    expect(sum).toEqual(-3);
  }))

  it('should ensure that 1 * 4 = 4', inject([CalculatorService], (service:CalculatorService)=>{
    let sum =service.calculate(1, 4, CalculatorService.MULTIPLICATION);
    expect(sum).toEqual(4);
  }))

  it('should ensure that 1 / 4 = 0.25', inject([CalculatorService], (service:CalculatorService)=>{
    let sum =service.calculate(1, 4, CalculatorService.DIVISION);
    expect(sum).toEqual(0.25);
  }))

  it('should ensure that invalid operation = 0', inject([CalculatorService], (service:CalculatorService)=>{
    let sum =service.calculate(1, 4, "$");
    expect(sum).toEqual(0);
  }))
});
