# 클래스란
- 어떤 사물의 공통 속성을 모아 정의한 추상적인 개념
- 인스턴스는 클래스의 속성을 지니는 구체적 사례.
- 자바스크립트는 프로토타입 기반 언어라서 클래스 및 '상속' 개념이 존재하지않지만, 프로토타입을 기반으로 클래스와 비슷하게 동작하게끔 하는 기법들이 도입돼옴.



## 자바스크립트의 클래스
- ex) 생성자함수 Array를 new 연산자와 호출하면 인스턴스가 생성된다.
- 이떄 Array를 일종의 class라고 하면, Array의 prototype 객체 내부 요소들이 인스턴스에 '상속'된다 할 수 있다.
- 엄밀히는 상속이아닌, 프로토타입 체이닝에 의한 참조지만, 이렇게 이해해도 무방하다.
- 한편, Array 내부 프로퍼티들 중 prototype 프로퍼티를 제외한 나머지는 인스턴스에 상속되지 않는다.
- 인스턴스에 상속되는지(인스턴스가 참조하는지) 여부에 따라 스태틱멤버와 인스턴스 멤버로 나뉜다.
- 다른 클래스와는 달리, 자바스크립트에서는 인스턴스에서도 직접 메서드를 정의할 수 있기떄문에 프로도타입에 정의된 메서드명칭을 구분지어 프로토타입 메서드라 칭한다.



## ES6의 클래스 및 클래스 상속
- ES5 자바스크립트에서 클래스 상속을 구현했다는것은, 프로토타입 체이닝활용했다고 이해(완벽하게 구현하지는 못함).
- ES6문법부터 클래스 문법이 도입됨.
```js
var ES5 = function(name) {
  this.name = name;
};
ES5.staticMethod = function() {
  return this.name + ' staticMethod';
};
ES5.prototype.method = function() {
  return this.name + ' method';
};
var es5Instance = new ES5('es5');
console.log(ES5.staticMethod()); // es5 staticMethod
console.log(es5Instance.method()); // es5 method

var ES6 = class {    //중괄호 묶음 내부가 클래스 본문 영역
  constructor(name) {   // 클래스 본문에서는 'function' 키워드를 생략하더라도 모두 메서드로 인식.
    this.name = name;     
  }  // 메서드와 다음 메서드 사이를 콤마(,)로 구분하지 않는다.
  static staticMethod() {  // 클래스 자신만이 호출할 수 있다. (인스턴스에서 호출불가)
    return this.name + ' staticMethod';
  }
  method() { // prototype 객체 내부에 할당되는 메서드.(인스턴스가 프로토타입 체이닝을통해 자신의 것처럼 호출할 수 있는 메서드)
    return this.name + ' method';
  }
};
var es6Instance = new ES6('es6');
console.log(ES6.staticMethod()); // es6 staticMethod
console.log(es6Instance.method()); // es6 method
```

- ES6의 클래스 상속
```js
var Rectangle = class {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
  getArea() {
    return this.width * this.height;
  }
};
var Square = class extends Rectangle { // Squre를 Rectangle 클래스를 상속받는 SubClass로 설정. 상속 끝.
  constructor(width) {
    super(width, width); // SuperClass의 constructor를 실행.
  }
  getArea() {
    console.log('size is :', super.getArea());  // constructor 메서드를 제외한 다른 메서드에서는 super 키워드를 마치 객체처럼 사용할 수 있고, 호출한 메서드의 this는 
    'super'가 아닌 원래의 this를 그대로따른다.
  }
};
```


