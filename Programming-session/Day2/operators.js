// + Operator -> Add/Concat

// Summation of numbers
// numbers have limit 2^32
// after that use BigInt
let sum = 10 + 20;
console.log("Sum: ", sum); // 30

const sum2 = 10 + 100;
console.log("Sum: ", sum2);

let num1 = 10;
let num2 = 40;
const finalSum = num1 + num2 + sum + sum2;
const chekingAddString = "1" + "1";


const uName = "Vikas";
const uCity = "Denmark";
const uCountry = "Europe";

const greetingsMessage =
  "Hello " + uName + ", Welcome to " + uCity + ", " + uCountry;
console.log("greetingsMessage: ", greetingsMessage + ".");


//let checkingTheresult ="Sum of strings: " + "1" + "1" + " ends here";
console.log("Final Sum: ", finalSum);
console.log("Sum of strings: " + "1" + "1" + " ends here");
//console.log(typeof(checkingTheresult));
//console.log(typeof("1") + " Next type of is: " + typeof("1" + "1") + "1" + "1");

console.log("string" + 2);