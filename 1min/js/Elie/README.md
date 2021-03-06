 # 프로젝트 이름
---

## 목표(or 목적) :rocket: 
1. 자바스크립트의 큰 그림을 이해하되 그 속의 동작원리를 파악한다.
1. 자바스크립트에 대한 이해를 높인다.
---
## 개발인원
- 개인 프로젝트

---

## 개발기간
- 11/14 ~ 11/ 

---

## 개발기간
- 개인 프로젝트

---

## 기술스팩
- Javascript

---
## 메모사항
* API(Application Programing Interface)는 브라우저가 제공하는 함수
* Node.js와 Web APIs 둘다 console APIs가 존재한다. 
* script fetching
  * fetching: js파일을 서버에서 받아옴
      * head + js: html파일을 parsing하는 것을 멈추고 script파일을 다운로드한다. script파일의 데이터 크기가 클 경우, 사용자가 웹사이트를 보는데에 많은 시간이 소요된다.
      * body + js: html문서를 빠르게 볼 수 있다는 장점은 있으나, 해당 웹사이트가 JS에 의존적이면  사용자에게 원할하게 보여줄 수 없다.
      * head + async: boolean타입의 속성값으로, 병렬로 js파일을 다운로드**해놓은 뒤** html파일을 읽는다. querySelector를 이용해 DOM요소를 조작하려고 하는 시점에서 HTML요소가 아직 정의되어있지 않아 위험할 수도 있고, html을 parsing하는 동안에 js를 실행하기 위해 멈출 수가 있다. 만일 나의 웹사이트가 js파일들의 순서에 의존적이라면 데이터가 작아 먼저 다운로드 받아진 js가 실행되어지게 된다.
      * head + defer: html을 parsing하는 동안 defer옵션을 보면 다운로드 **명령만 해놓은 뒤** 나머지 html을 끝까지 parsing한다. 그리고 parsing이 끝난 다음 다운로드 되어진 js를 실행하게 된다. defer은 html parsing 후 다운로드 받아진 순서대로 실행하므로 내가 정의한 순서에 맞춰서 js가 실행되어 진다. 
* 순수 바닐라JS를 사용할때면 **'use strict'**작성해 JS의 유연함에 따라오는 위험성을 줄인다.
* 프로그래밍에서 가장 중요한 것: 1.입력 2.연산 3.출력 
  * 입력: 사용자에게 console이나 UI에서 데이터를 입력받음
  * 연산: 입력받은 데이터를 잘 처리하고 연산함
  * 출력: 알맞게 사용자에게 출력해서 보여줌
  * ++ 받아온 데이터를 서버로 전송하고 받아오는 것도 중요.
  * ++ CPU에 최적화된 연산도 중요
  * ++ 메모리의 사용의 최소화도 중요
* Variable(변수)
  * **var**
    * var hoisting으로 인해 값이 없어도 가장 상위로 선언되어 진다.
    * block scope라는 개념이 존재하지 않는다. (그 어떤 함수에도 접근이 가능해져 버림)
* Constance(상수)
  * 포인터가 잠겨서 선언함과 동시에 절대로 값을 변경할 수 없다.
  * Mutable datatype: 값의 변경이 가능함 => let
  * Immutable datatype: 값의 변경이 불가능함 => const 
    - 보안상의 문제가 발생할 수 있으므로 const를 사용해 프로그래밍을 작성하는 것이 중요하다. 
* Variable types
  * **primitive**, single item
    - 더이상 작은 단위로 나뉠 수 없는 한가지의 아이템 
    - number, string, boolean, null, undefinend, symble
  * **object**, box container
    - 싱글 아이템들을 여러개 묶은, 즉 한 단위 혹은 한 박스
  * **first-class function**, function
    - function(함수)도 다른 데이터 타입과 같이 변수에 할당이 가능
    - 함수의 인자로도 전달이 가능
    - 함수에서 리턴타입으로도 function이 리턴 가능
  * number: specialnumeric values: infinity, -infinity, NaN
  * bigInt: fairly new, dont use it yet
  * string
  * boolean
  * null: 말그대로 아무것도 아닌, 텅텅비어진 
  * undefined: 변수는 지정되었지만 값이 할당 되어있지 않은
  * symbol
* Dynamic typing: dynamically typed language
* TypeScript: 자바스크립트 위에 타입이 더 올려진 언어 
* **Function**
  * 함수도 프로그램 안에서 각각의 작은 단위의 기능들을 수행하므로 함수는 sub-program이라고도 불린다.
  * 함수는 Input인 parameter를 받아와 잘 처리한 후 Output인 return을 하는 것이 function(함수)이다.
    - 함수는 input과 output이 중요하며, function의 이름을 잘 정의하는 것이 중요하다.
  * 하나의 함수는 한가지의 일만 한다.
* class
  * 관련있는 데이터(변수나 함수들)끼리 묶어 놓은 것
  * '이러이러한 데이터만 들어올 수 있어'하고 알려주는 청사진 같은 아이
  * 붕어빵 틀
* object 
  * 실제로 데이터를 넣어주는 아이
  * 팥붕어빵, 크림붕어빵, 피자붕어빵
* Array
  * 자료 구조 중의 하나.
    * **자료구조**: 비슷한 종류의 데이터끼리 한곳에 모아 놓는 것을 **자료 구조**라고 한다.
    * 자료구조에는 어떤 형태, 어떤 방식으로 데이터를 담느냐에 따라 굉장히 다양한 타입이 있다.
      - Object와 자료구조의 차이점
        * Object: 서로 연관된 특징, 행동들을 묶어 놓은것(토끼(귀 두개/먹는다/뛴다)와 당근(주황색/비타민c)처럼) 
        * 자료구조: 서로 연관된 타입의 오브젝트들을 묶어 놓은 것 (토끼토끼토끼//당근당근당근)
    * 다른 언어에서의 자료구조는 '동일한 타입의 오브젝트끼리만' 담을 수 있다.
    * 그러나 Javascript는 **Javascript === dynamically typed language**이다. 
      * 즉 한 바구니 안에 다양한 종류의 데이터를 담을 수 있다. (그러나 그렇게 프로그래밍하는 것은 좋지 않다 결코!)
  * 후에 어떤 문제를 해결하느냐에 따라, 많은 자료구조들 중에 어떤 자료구조를 선택하는지, 선택시 검색, 삽입, 삭제, 정렬 이러한 속도들을 고려('빅오')해서 선택하는 것이 중요하다.
  