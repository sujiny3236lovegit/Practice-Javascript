'use strict';

// Array🎉

// 1. Array Declaration '배열 선언하는 방법'
const arr1 = new Array();
const arr2 = [1, 2];

// 2. Index position
const fruit = ['🍎', '🍌'];
console.log(fruit);
console.log(fruit.length);
console.log(fruit[0]);  //console.log(fruit['key']);
console.log(fruit[1]);
console.log(fruit[2]);  // undefined
console.log(fruit[fruits.length - 1]); //index는 0부터 시작하므로 -1을 하면 결국 가장 마지막에 있는 key를 가져온다.

console.clear();
// 3. Looping over an array
// print all fruits

// a. for
for (let i = 0; let < fruits.length; i++) {
  console.log(fruits[i]);
}

// b. for of
for (let fruit of fruits) {
  console.log(fruit);
}

// c. forEach -> callback함수를 받아옴//forEach는 배열 안에 들어있는 value들마다 내가 전달한 함수를 출력하는구나 
fruit.forEach(function (fruit) {
  console.log(fruit);
});
// 혹은 arrow function으로 작성.
fruit.forEach((fruit) => console.log(fruit));

// 4. Addition, deletion, copy
//  - push: add an item to the end
fruits.push('🍑', '🍇');
console.log(fruits);

//  - pop: remove an item from the end (+pop은 pop으로 인해 삭제된 아이가 출력된다.)
const poped = fruits.pop(); //끝에서 한 개 삭제
fruits.pop(); //또 한 개 삭제
console.log(fruits);

//  - unshift: add an item to the beginning
fruits.unshift('🍋', '🍓');
console.log(fruits);

//  - shift: remove an item to the beginning
fruits.shift();
fruits.shift();
console.log(fruits);

// ✨ note!!✨
// shift, unshift are slower than pop, push (-> 따라서 pop, push를 사용하는 것이 좋다. )
// splice: remove an item by index position
fruit.push('🍓', '🍑', '🍇');
console.log(fruits);
fruits.splice(1, 1); //1 index에서부터 1개만 삭제 
console.log(fruits);
fruits.splice(1, 0, '🍏', '🍉'); //1 index에서부터 1개만 삭제하고 🍏, 🍉를 추가

// combine two arrays두가지 배열 묶어 생성
const fruits2 = ['🥝', '🍍'];
const newFruits = fruits.concat(fruits2);
console.log(newFruits);

// 5. Searching (검색)
//  - indexOf: find the index
console.clear();
console.log(fruits.indexOf('🍎')); // 사과가 배열에서 몇번째 index에 있는지 출력
console.log(fruits.indexOf('🥥')); // 존재하지 않는 것은 -1을 출력

//  - includes
console.log(fruits.includes('🍎')); // 사과가 존재하면 true, 존재하지않으면 false를 출력
console.log(fruits.includes('🍒'));

//  - lastIndexOf
console.clear();
fruits.push('🍈');
console.log(fruits.indexOf('🍈'));        // 제일 첫 index의 값을 출력
console.log(fruits.lastOfIndexOf('🍈'));  //제일 끝 index의 값을 출력

