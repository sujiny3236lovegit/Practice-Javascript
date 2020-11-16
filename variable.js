//1. Use strict 
// added in ES5
// use this for Vanila Javascript
'use strict';

// 2. Varialble 
// let (added in ES6)
let globalName = 'global name';
{
  let name = 'Alice';
  console.log(name);
  name = 'hello';
  console.log(name);
  console.log(globalName);
}
console.log(name);
// global 변수들은 application의 시작부터 끝까지 메모리에 탑재되므로 최소한으로만 사용하고,
// 가능하면 class, function(함수), if, for loop을 사용해서 정의하는 것이 좋다.

// 2-2. var (dont ever use this)
// var hoisting: hoisting은 어디에 선언했느냐에 상관없이 최상단으로 끌어올려주는 것
// var has no block scope
console.log(age);
age = 4;
var age;

name = 4;
let name;

// 3. Constants
// favor immutable data type always for a reasons: 한번 할당하면 값을 절대 변경할 수 없다.
//  - security
//  - thread safety
//  - reduce human mistakes
const daysInWeek = 7;
const maxNumber = 5;

// 4. Variable types
//  - primitive, single item: number, string, boolean, null, undefinend, symble
//  - object, box container
//  - function, first-class function 
const count = 17; //integer
const size = 17.1; //decimal number
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);

//  - object, real-life object, data structue
const ellie = { name: 'sujin', age: 30 }
sujin.age = 30;
//  - number - specialnumeric values: infinity, -infinity, NaN
const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = 'not a number' / 2;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

//  - bigInt (fairly new, dont use it yet);
const bigInt = 1234567890123456789012345678901234567890n; //over (-2**53) ~ 2* 53)
console.log(`value: ${bigInt}, type: ${typeof bigInt}`);
Number.MAX_SAFE_INTEGER;

//  - string
const char = 'c';
const brendan = 'brendan';
const greeting = 'hello' + brendan;
console.log(`value: ${greeting}, type: ${typeof greeting}`);
const helloBob = `hi ${brendan}!` //template literals (string);
console.log(`value: ${helloBob}, type: ${typeof helloBob}`);

//  - boolean
//     - false: 0, null, undefined, NaN, '' 
//     - true: any other value 
const canRead = true;
const test = 3 < 1; //false
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);

//  - null
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`);

//  - undefined
let x;
console.log(`value: ${x}, type: ${typeof x}`);

//  - symbol, create unique identifiers for objects
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(tymbol1 === symbol2);
const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1 === gSymbol2); // true
console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`);

// 5. Dynamic typing: dynamically typed language
let text = 'h';
console.log(text.charAt(0)); //h
console.log(`value: ${text}, type: ${typeof text}`);
text = 1;
console.log(`value: ${text}, type: ${typeof text}`);
text = '7' + 5;
console.log(`value: ${text}, type: ${typeof text}`);
text = '8' / '2';
console.log(`value: ${text}, type: ${typeof text}`);
console.log(text.charAt(0));

// 6. 
// 
// 
// 

