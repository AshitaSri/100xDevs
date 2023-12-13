/*
  Implement a class Calculator having below methods
    - initialise a result variable in the constructor and keep updating it after every arithmetic operation
    - add: takes a number and adds it to the result
    - subtract: takes a number and subtracts it from the result
    - multiply: takes a number and multiply it to the result
    - divide: takes a number and divide it to the result
    - clear: makes the result variable to 0
    - getResult: returns the value of result variable
    - calculate: takes a string expression which can take multi-arithmetic operations and give its result
      example input: 10 +   2 *    (   6 - (4 + 1) / 2) + 7
      Points to Note: 
        1. the input can have multiple continuous spaces, you're supposed to avoid them and parse the expression correctly
        2. the input can have invalid non-numerical characters like 5 + abc, you're supposed to throw error for such inputs

  Once you've implemented the logic, test your code by running
*/

class Calculator {
  constructor(result){
    this.result = 0;
  }
  add(x){
    this.result= this.result+x;
  }
  subtract(x){
    this.result= this.result-x;
  }
  multiply(x){
    this.result = this.result*x;
  }
  divide(x){
    if(x==0){
    throw new Error("invalid number");
    }
    this.result = this.result/x;
  }
  clear(){
    this.result = 0;
  }
  getResult(){
    return this.result;
  }
  calculate(str){
    var calculate =str.replace(/\s+/g,'');
  
    if (/[^0-9+\-*/().\s]/.test(calculate)) {
      throw new Error('non numeric characters in the expression');
    }
  
    const divisionByZeroPattern = /\/\s*0/g;
    var boolean = divisionByZeroPattern.test(calculate);
    if(boolean==true)
    throw new Error("division by 0 not allowed");
  
    else{
    this.result = eval(calculate); 
      return this.result;
    }
  }
}

module.exports = Calculator;