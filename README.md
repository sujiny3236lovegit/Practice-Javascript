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
  