class Calculator {
  static sum(x, y) {
    return x + y;
  }
  sum2(x, y) {
    return x + y;
  }
  multiply(x, y) {
    return x * y;
  }
}

const Calculatorobject = new Calculator();
// console.log(Calculator.sum(1, 2));
// console.log(Calculatorobject.sum(2, 3));
// console.log(Calculatorobject.sum(5, 6));
console.log(Calculatorobject.multiply(10, 20));
