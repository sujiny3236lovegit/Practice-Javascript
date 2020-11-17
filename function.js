// Function
//  - function building block in the program
//  - subprogram can be used multiple times
//  - performs a task or calculates a value

// "함수 선언"
// 1. Function declaration 
// function name(param1, param2){ body...return; }
// one function === one thing 하나의 함수는 한가지의 일만 한다.
// naming: doSomething, command, verb(동사)
// e.g. createCardAndPoint -> createCard, createPoint 함수를 깨끗하게 
// function is object in JS 때문에 함수를 변수나 인자로 전달, 리턴할 수도 있다.
function printHello() {
  console.log('Hello');
}
printHello();

// 2. Parameters
// premitive parameters: passed by value
// object parameters: passed by referance
function changeName(ogj) {
  obj.name = "coder";
}
const sujin = { name: 'sujin' };
changeName(sujin);
console.log(sujin);

// 3. Default parameters(added in ES6)
function showMessage(message, from = '내가 전달받길 원하는 string') {
  console.log(`${message} by ${from}`);
}
showMessage('Hi!');

//  4. Rest parameters (added in ES6)
function printAll(...args) { //배열형태
  for (let i = 0; i < args.length; i++) {    // 배열 1
    console.log(args[i]);
  }
  for (const arg of args) {                  // 배열 2
    console.log(arg);
  }
  args.forEach((arg) => console.log(arg));   // 배열 3
}
printAll('dream', 'coding', 'sujin');

//  5. Local scope 밖에서는 안이 보이지 않고 '안에서만 밖을 볼 수 있다'. 
let globalMessage = 'global'; // global variable 
function printMessate() {
  let message = 'hello';
  console.log(message); // local variable 
  console.log(globalMessage);
}
printMessate();

//  6. Return a value
function sum(a, b) {
  return a + b;
}
const result = sum(1, 2); // 3
console.log(`sum: ${sum(1, 2)}`);

//  7. Early return, early exit
//  bad
function upgradeUser(user) {
  if (user.point > 10) {
    // long upgrade logic...
  }
}

// good
function upgradeUser(user) {
  if (user.point <= 10) {
    return;
  }
  // long upgrade logic...
}

// "함수 표현"
// First-class function
// functions are treated like any other variable
// can be assigned(할당) as a value to variable
// can be passed(전달) as an argument to other functions.
// can be returned(리턴값) by another function

// 1. Function expression
// a function declar can be called earlier than it is defiend. (hoisted)
// a function expression is created when the execution reaches it.
const print = function () { //anonymous function
  console.log('print');
}
print();
const printAgain = print;
printAgain();
const sumAgain = sum;
console.log(sumAgain(1, 3));

// 2. Callbak function using function expression
function randomQuiz(answer, printYes, printNo) {
  if (answer === 'love u') {
    printYes();
  } else {
    printNo();
  }
}
// anonymous function
const printYes = function () {
  console.log('Yes!');
}

// named function
// better debugging in debugger's stack traces
// recusions
const printNo = function print() {
  console.log('No!');
  print();
}
randomQuiz('Wrong', printYes, printNo);
randomQuiz('love you', printYes, printNo);

// Arrow function
// always anoymous function
const simplePrint = function () {
  console.log('simplePrint!');
};

const simplePrint = () => console.log('simplePrint!');
const add = (a, b) => a + b;
// 위 함수는 아래 함수와 같다.
const simpleMultiply = (a, b) => {
  // do something more
  return a * b;
}

// IIFE : Immediately Invoked Function Expression
(function hello() {
  console.log('IIFE');
})();

// Fun quiz time
// function calculate(command, a, b)
// command: add, substract, divide, multiply, remainder