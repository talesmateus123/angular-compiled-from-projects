/**
 * This service is responsible for performing numerical operations required by the system
 * @author Tales Mateus de Oliveira Ferreira <talesmateus1999@hotmail.com>
 * @since 1.000
 */

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {
  /*
    These constants are used to divide and choose numeric operations correctly
  */
  static readonly SOMA:string = "+";
  static readonly SUBTRACTION:string = "-";
  static readonly MULTIPLICATION:string = "*";
  static readonly DIVISION:string = "/";

  constructor() { }

  /**
   * This method is responsible for performing a numeric operation provided by two numbers and one character, which will be responsible for determining the type of operation to be performed
   * @param num1 number
   * @param num2 number
   * @param operation string
   * @returns return a number by operation
   */
  calculate(num1:number, num2:number, operation:string):number{
    let result:number; // Stores the content resulting from the operation
    switch(operation){
      case CalculatorService.SOMA:
        result=num1+num2;
      break;
      case CalculatorService.SUBTRACTION:
        result=num1-num2;
      break;
      case CalculatorService.MULTIPLICATION:
        result=num1*num2;
      break;
      case CalculatorService.DIVISION:
        result=num1/num2;
      break;
      default:
        result=0;
    }
    return result;
  }

}
