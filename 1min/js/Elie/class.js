// "class"
// 관련있는 데이터(변수나 함수들)끼리 묶어 놓은 것
class person {
  name; // field(속성)
  age;  // field(속성)
  speak(); //method(행동)
}
// "객체 지향 언어"
// 객체끼리 묶이는 것을 지향하는 언어
// class 안에서도, 내부적으로 보여지는 변수와 외부에서도 보여지는 변수로 나눈 것을 '캡슐화'라고 한다.
// class를 이용해, 상속과 다양성을 일어날 수 있다. 

// "class & object" 
// 1. class
//  - template: 틀
//  - declare once: 한번만 선언
//  - no data in: 데이터는 들어올 수 없음
//  - '이러이러한 데이터만 들어올 수 있어'하고 알려주는 청사진 같은 아이
//  - 붕어빵 틀

// 2. object
//  - instance of a class
//  - created many times
//  - data in
//  - 실제로 데이터를 넣어주는 아이
//  - 팥붕어빵, 크림붕어빵, 피자붕어빵
// -----------------------------------------------------------------------------------

// Object-oriendted programming
// class: teplate
// object: instance of class
// Javascirpt classes
//  - introduced in ES6
//  - syntactical sugar over prototype-based inheritance

// 1. Class declarations
class Person {
  // constructor생성자를 이용해 필요한 데이터를 전달한다.
  constructor(name, age) {
    // fields(전달된 데이터)를 바로 할당함
    this.name = name;
    this.age = age;
  }

  // methods
  speak() {
    console.log(`${this.name}: hello!`);
  }
}

// object 생성
const sujin = new Person('sujin', 30);
console.log(sujin.name);
console.log(sujin.age);
sujin.speak();

// 2. Getter and setters
class User {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
  get age() { //값을 리턴
    return this._age;
  }

  set age(value) { //값을 설정(값을 설정하는 것이므로 값인 value를 받아와야한다.)
    /* if (value < 0){
          throw Error('age can not be negative');
       } */
    this._age = value < 0 ? 0 : value;
  }
}

const user1 = new User('Steve', 'Job', -1);

// 3. Fields (publick, private)
// Too soon!
class Experiment {
  publicField = 2;
  #privateField = 0;
}
const experiment = new Experiment();
console.log(experiment.publicField);
console.log(experiment.privateField);

// 4. Static properties and methods
// Too soon!
class Article {
  static publisher = 'Dream Coding'; //static을 붙여서 사용
  constructor(articleNumber) {
    this.articleNumber = articleNumber;
  }

  static printPublisher() {  //static을 붙여서 사용
    console.log(Article.publisher);
  }
}

const article1 = new Article(1);
const article2 = new Article(2);
console.log(Article.publisher);
Article.printPublisher();

// "상속 & 다양성"
// 5. Inheritance
// a way for one class to extend another class.
class Shape {
  constructor(width, height, color) {
    this.width = width;
    this.height = height;
    this.color = color;
  }

  draw() {
    console.log(`drawing ${this.color} color of`);
  }

  getArea() {
    return this.width * this.height;
  }
}

class Rectangle extends Shape() { } //extends 키워드를 이용해서 Shape를 연장한다. (=> Shape에서 만든 field와 method가 자동적으로 Rectangle에 포함됨)
class Triangle extends Shape() {
  draw() {
    super.draw();
  }
  getArea() {
    return (this.width * this.height) / 2;
  }
  toString() {
    return `Triangle: color: ${this.color}`;
  }
}

const rectangle = new Rectangle(20, 20, 'blue');
rectangle.draw();
const triangle = new Triangle(20, 20, 'red');
triangle.draw();


// 6. Class checking: instanceOf
console.log(rectangle instanceof Rectangle); // true
console.log(triangle instanceof Rectangle);  // false
console.log(triangle instanceof Triangle);   // true
console.log(triangle instanceof Shape);      // true
console.log(triangle instanceof Object);     // true
console.log(triangle.toString());