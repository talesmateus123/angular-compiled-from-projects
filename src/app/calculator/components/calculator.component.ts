import { Component, OnInit } from '@angular/core';
import { CalculatorService } from '../services'

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  private number1 : string;
  private number2 : string;
  private result : number;
  private operation : string;

  constructor(private calculatorService:CalculatorService) { }

  ngOnInit(): void {
    this.clean();
  }

  /**
   * This method is responsible by change the applications values to default
   * @returns void
   */
  clean():void{
    this.number1='0';
    this.number2=null;
    this.result=null;
    this.operation=null;
  }

  /**
   * This method is responsible by adding a selected number for the calculation.
   * @param string numberToAdd 
   */
  addNumber(numberToAdd:string):void{
    if (this.operation===null)
      this.number1=this.concatenateNumber(this.number1, numberToAdd);
      else
      this.number2=this.concatenateNumber(this.number2, numberToAdd);
  }

  /**
   * This method is responsible by return a concatenated number and treat the decimal separator.
   * @param string currentNumber 
   * @param string concatenatedNumber 
   */
  concatenateNumber(currentNumber:string, concatenatedNumber:string):string{
    // If the currentNumber be '0' or null, the value will be restarted.
    if(currentNumber === '0' || currentNumber===null){
      currentNumber='';
    }
    // If the first digit be '.', It returns '0.'
    if(concatenatedNumber === '.' && currentNumber === ''){
      return '0.';
    }
    // If '.' is entered, returns the currentNumber.
    if(concatenatedNumber === '.' && currentNumber.indexOf('.') > -1){
      return currentNumber;
    }

    return currentNumber + concatenatedNumber;
  }

  /**
   * Define typed operation or calculate the operation.
   * @param string operation 
   */
  defineOperation(operation:string):void{
    // This action only define an operation if it doesn't exists.
    if(this.operation === null){
      this.operation=operation;
      return;
    }
    // If an operation is already defined, execute the operation using CalculatorService.
    else{
      this.result=this.calculatorService.calculate(
        parseFloat(this.number1), 
        parseFloat(this.number2), 
        this.operation
      );
      this.operation = operation;
      this.number1 = this.result.toString();
      this.number2 = null;
      this.result = null;
    }
  }

  /**
   * Perform the calculation using CalculatorService.
   */
  calculate():void{
    if(this.number2 === null){
      return;
    }
    this.result=this.calculatorService.calculate(
      parseFloat(this.number1), 
      parseFloat(this.number2), 
      this.operation
    );
  }

  /**
   * Print the result on the calculator display.
   * @returns string
   */
  get display():string{
    if(this.result !== null){
      return this.result.toString();
    }
    if(this.number2 !== null){
      return this.number2;
    }
    return this.number1;
  }
}
