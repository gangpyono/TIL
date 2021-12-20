# 프로토타입
- 자바스크립트는 프로토타입기반 언어다.




## 프로토타입 개념 이해.
- constructor (생성자 함수)
- prototype : 인스턴스가 사용할 메서드를 저장한다. 
- instance
1. 어떤 생성자함수를 new연산자와 호출하면.
2. 이 생성자함수에서 정의된 내용을 바탕으로 새로운 인스턴스(instance)가 생성된다.
3. 이떄 instance에는 __proto__라는 프로퍼티가 자동으로 생성됨. (이 프로퍼티는 생성자함수의 prototype이라는 프로퍼티를 참조한다. 또한 생략가능.)
4. __proto__프로퍼티를통해 prototype에 저장된 프로퍼티나 메서드를 참조할수있는데, __proto__가 생략가능함으로, 인스턴스의 프로퍼티 or 메서드처럼 작성해도
  prototype의 프로퍼티 or 메서드를 참조할 수 있다.
  
  
### constructor 프로퍼티
- 생성자함수의 프로퍼티인 prototype 객체 내부에는 constructor이라는 프로퍼티가 있다.
- 인스턴스로부터 원형이 무엇인지를 판단해준다.


## 프로토타입 체인
### 메서드 오버라이드 (교체가 아니다.)
- 메서드 위에 메서드를 덮어씌웠다.
- 만약 인스턴스에 프로토타입에도 존재하는 동일한 이름의 프로퍼티 or 메서드를 가지고 있으면 어떻게될까?
  -> getName이라는 메서드가 선언되어 있다고하면, 자바스크립트 엔진이 getName이라는 메서드를 찾는 방식은 가장 가까운 대상인 자신의 프로퍼티를 검색하고, 없으면 __proto__를 검색한다.
```js
var Person = function(name) {
  this.name = name;
};
Person.prototype.getName = function() {
  return this.name;
};

var iu = new Person('지금');
iu.getName = function() {
  return '바로 ' + this.name;
};
console.log(iu.getName()); // 바로 지금
```

### 프로토타입 체인
- 어떤 데이터의 __proto__프로퍼티 내부에 다시 __proto__프로퍼티가 연쇄적으로 이어진것.
- 이 체인을따라 검색해나가는걸 프로토타입 체이닝 이라한다.

### 객체 전용 메서드의 예외사항
- 어떤 생성자함수이든 prototype은 반드시 객체이기떄문에 Object.prototype이 언제나 프로토타입 체인의 최상단에 존재한다.
- 따라서 객체에서만 사용할 메서드는 다른 데이터 타입처럼 프로토타입 객체 안에 정의 할 수 없다. 왜냐하면 다른 데이터 타입도 해당 메서드를 사용 할 수 있게되기 떄문이다.

