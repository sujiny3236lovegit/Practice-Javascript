// Objects
// one of the JavaScript's data types.
// a collection of related data and/or function.
// Nearly all objects in Javascript ar instance.
// object = { key : value }  -> object는 key와 value의 집합체이다.

// 1. Literals and properties
const obj1 = {}; // 'object literal' syntax
const obj2 = new Object(); // 'object constructor' syntax

function print(person) {
  console.log(person.name);
  console.log(person.age);
}

const sujin = {
  name: 'sujin';
  age: 30
}
print(sujin);

// with Javascript magic (dynamically typed language)
// can add properties later
sujin.hasJob = true;
console.log(sujin.hasJob);

// can delete propertice later
delete sujin.hasJob;
console.log(sujin.hasJob);

// 2. Computed properties
// key should be always string
console.log(sujin.name);
console.log(sujin['name']);
sujin['hasJob'] = true;
console.log(sujin.hasJob);

function printValue(obj, key) {
  console.log(obj['key']);
}
printValue(sujin, 'name');
printValue(sujin, 'age');

// 3. Property value shorthand (-> key와 value가 같을 경우, 하나로 생략해서 작성)
const person1 = { name: 'sujin', age: 30 };
const person2 = { name: 'alice', age: 28 };
const person3 = { name: 'july', age: 32 };
const person4 = makePerson('dave', 35);

function makePerson(name, age) {
  return {
    name, // name: name
    age,  // age: age
  };
}

// 4. Contructor Function 
const person1 = { name: 'sujin', age: 30 };
const person2 = { name: 'alice', age: 28 };
const person3 = { name: 'july', age: 32 };
const person4 = new Person('dave', 35);

function Person(name, age) {
  // this = {};
  this.name = name;
  this.age = age;
  // return this;
}

// 5. in operator: property existence check (key in obj)
console.log('name' in sujin);   // true
console.log('age' in sujin);    // true
console.log('school' in sujin); // false
console.log(sujin.school);      // undefined

console.clear(); // 이건 모든 콘솔 clear시키기
// 6. for..in vs for..of
// for (key in obj)
for (key in ellie) {
  console.log(key); //name, age, hasJob이 출력됨
}

// for (value of iterable)
const array = [1, 2, 3, 4, 5];
/*
for(let i = 0; i < array.length; i++){
  console.log(array[i]);
}
*/
for (value of Array) {
  console.log(value);
}

// 7. Fun cloning
// Object.assign(dest, [obj1, obj2, obj3...])
const user1 = { name: 'sujin', age: 30 };
const user2 = user;
user.name = 'coder';
console.log(user);

// old way
const user3 = {};
for (key in user) {
  user3[key] = user1[key];
}
console.log(user3);

// Object.assign
const user4 = {};
Object.assign(user4, user);
console.log(user4);
// 혹은
const user4 = Object.assign({}, user);
console.log(user4);

// another example
const fruit1 = {}
const fruit2 = {}
const mixed = Object.assign({}, fruit1, fruit2);
console.log(mixed.color);  // blue
console.log(mixed.size);   // big 