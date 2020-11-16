//1. String concatenation
console.log('my' + ' cat');
console.log('1' + 2);
console.log(`string literals: 1 + 2 = ${1 + 2}`);

// 2. Numeric operators
console.log(1 + 1);  // add 
console.log(1 - 1);  // substract
console.log(1 / 1);  // divide
console.log(1 * 1);  // multiply
console.log(5 % 2);  // remainder
console.log(2 ** 3); // exponentiation

// 3. Increment and decrement operators
let counter = 2;
const preIncrement = ++counter;
// counter = counter + 1;
// preIncrement = counter;
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`);
const preIncrement = counter++;
// postIncrement = counter;
// counter = counter + 1;
console.log(`postIntcrement: ${postIncrement}, counter: ${counter}`);
const preDecrement = --counter;
console.log(`preDecremnet: ${preDecrement}, counter: ${counter}`);
const postDecrement = counter--;
console.log(`postDecrement: ${postDecrement}, counter: ${counter}`);

// 4. Assignment operators 
let x = 3;
let y = 6;
x += y; // x = x + y;
x -= y; // 단지 반복되는 x를 생략한 것이다.
x *= y;
x /= y;

// 5. Comparison operators(비교 연산자)
console.log(10 < 6); //less than
console.log(10 <= 6); // less than or equal
console.log(10 > 6);  // greater than
console.log(10 >= 6); // greater than or equal

// 6. Logical operators: || (or), && (and), !(not)
const value1 = true;
const value2 = 4 < 2;

// || (or), finds the first truthy value
console.log(`or: ${value1 || value2 || check()}`);

// && (and), find the first falsy value
console.log(`and: ${value1 && value2 && check()}`);

// often used to compress long if-statement
// nullableObject && nullableObject.something
if (nullableObject != null) {
  nullableObject.something;
}

function check() {
  for (let i = 0; i < 10; i++) {
    //wasting time
    console.log('😱');
  }
  return true;
}

// ! (not)
console.log(!value1);

// 7. Equality
const stringFive = '5';
const numberFive = 5;

// '==' loose equality, with type conversion
console.log(stringFive == numberFive);

// '==='  strict equality, no type conversion
console.log(stringFive === numberFive);
console.log(stringFive !== numberFive);

// object equality by referance
const sujin1 = { name: 'sujin' };
const sujin2 = { name: 'sujin' };
const sujin3 = sujin1;
console.log(sujin1 == sujin2);  // false
console.log(sujin1 === sujin2); // false
console.log(sujin1 === sujin3); // true

// quiz
console.log(0 == false);   // true
console.log(0 === false);  // false
console.log('' == false);  // true
console.log('' === false); // false
console.log(null == undefined);  // true
console.log(null === undefined); // false

// 8. Conditional operators: if
// if, else, if, else
const name = 'sujin';
if (name === 'sujin') {
  console.log('Welcome, Sujin!');
} else if (name === 'coder') {
  console.log('You are amazing coder');
} else {
  console.log('unkwnon');
}

// 9. Ternary operator: ?
// condition ? value1 : value2
console.log(name === 'Sujin' ? 'Yes' : 'No');

// 10. Switch statement 
// use for multiple if checks
// use for enum-like value check
// use for multipe type checks in TS
const browser = 'IE';
switch (browser) {
  case 'IE':
    console.log('go away');
    break;
  case 'Chrome':
    console.log('love u');
    break;
  case 'Firefox':
    console.log('love u');
    break;
  default:
    console.log('same all!');
    break;
}

// 11. Loops
// while loop, while the condition is truthy,
// body code is executed.
// 조건문이 맞을 경우에만 실행하고 싶으면 while을 사용.
let i = 3;
while (i > 0) {
  console.log(`while: ${i}`);
  i--;
}

// do while loop, body code is executed first,
// then, check the condition.
// 블럭을 먼저 실행하고 싶으면 do while사용.
do {
  console.log(`do while: ${i}`);
  i--;
} while (i > 0);

// for loop, for(begin; condition; step)
for (i = 3; i > 0; i--) {
  console.log(`for: ${i}`);
}

for (let i = 3; i > 0; i = i - 2) {
  // inline variable declartion
  console.log(`inline variable for: ${i}`);
}

// nested loops (cpu에 좋지 않으므로 가급적 삼가)
for (let i = 0; i < 10; i++) {
  for (let j = 0; j < 10; j++) {
    console.log(`i: ${i}, j: ${j}`);
  }
}

// break, continue
// Q1. iterate from 0 to 10 and print only even numbers(use continue)
for (let i = 0; i < 11; i++) {
  if (i % 2 !== 0) {
    console.log(`q1. ${i}`);
  }
}

// Q2. iterate from 0 to 10 and print numbers until reaching 8(use break)
for (let i = 0; i < 11; i++) {
  if (i > 8) {
    break;
  }
  console.log(`q2. ${i}`);
}