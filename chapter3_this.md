#  this


## 1. this는 상황에따라 달라진다.
1-1. 전역 공간에서의 this는 전역객체를 참조한다.(브라우저에서는 window,Node.js에서는 global 참조)


1-2. 어떤 함수를 메서드로서 호출할 경우 this는 메서드 호출 주체(메서드명 앞의 객체)를 참조한다.


1-3. 어떤 함수를 함수로서 호출할 경우 this는 전역 객체를 참조한다. (메서드 내에서 정의한 함수를 호출할경우도 동일하다.)


1-4. 콜백 함수 내부에서의 this는 해당 콜백 함수의 제어권을 넘겨받은 함수가 정의한 바에 따르며, 정의하지 않은 경우에는 전역 객체를 참조한다.


1-5. 생성자 함수에서의 this는 생성될 인스턴스를 참조한다.

## 2. 명시적 this 바인딩( 위 규칙에 부합하지 않는 경우엔 아래 내용으로 this를 예측 할 수 있다.)
2.1 call,apply 메서드는 this를 명시적으로 지정하면서 함수 또는 메서드를 호출한다.


2.2 bind메서드는 this 및 함수에 넘길 인수를 일부 지정해서 새로운 함수를 만든다.


2.3  요소를 순회하면서 콜백 함수를 반복 호출하는 내용의 일부 메서드는 별도의 인자로 this를 받기도 한다.
</br>
</br>
</br>
### 1.1 전역 공간에서의 this는 전역객체를 참조한다.(브라우저에서는 window,Node.js에서는 global 참조)
```js
console.log(this); // { alert: f(), atob: f(), blur: f(), btoa: f(), ... }
console.log(window); // { alert: f(), atob: f(), blur: f(), btoa: f(), ... }
console.log(this === window); // true
```
### 1-2. 어떤 함수를 메서드로서 호출할 경우 this는 메서드 호출 주체(메서드명 앞의 객체)를 참조한다.
### 1-3. 어떤 함수를 함수로서 호출할 경우 this는 전역 객체를 참조한다. (메서드 내에서 정의한 함수를 호출할경우도 동일하다.)
#### 함수 vs 메서드
- 독립성 차이.
 - 함수 : 그 차체로 독립적인 기능을 수행.
 - 메서드 : 대상 객체에 관한 동작을 수행.
 ```js
 var func = function(x) { // 실행할 함수 정의.
  console.log(this, x);
};

func(1); // Window { ... } 1  

var obj = {
  method: func,
};
obj.method(2); // { method: f } 2
obj['method'](2); // { method: f } 2

// 함수 앞에 점(.) or 대괄호 표기법으로 함수를 호출할경우엔 메서드로서 호출한것
```

```js
var obj1 = {
  outer: function() {
    console.log(this); 
    var innerFunc = function() {
      console.log(this); 
    };
    innerFunc();  // (2) 앞에 아무것도없음으로 window 출력. (함수로 호출)

    var obj2 = {
      innerMethod: innerFunc,
    };
    obj2.innerMethod(); // (3) 앞에 (.)이 존재함으로, this로 obj2가출력됨. (메서드로서 호출)
  },
};


obj1.outer(); // (1)  앞에 (.)이 존재했음으로, this로 obj가 출력된다. ( 메서드로써 호출)

```

### 1-4. 콜백 함수 내부에서의 this는 해당 콜백 함수의 제어권을 넘겨받은 함수가 정의한 바에 따르며, 정의하지 않은 경우에는 전역 객체를 참조한다.
- 콜백함수 : 함수 A의 제어권을 다른함수(또는 메서드) B에게 넘겨주는 경우 함수A를 콜백 함수라 한다.
```js
setTimeout(function() {
  console.log(this);
}, 300); // (1)

[1, 2, 3, 4, 5].forEach(function(x) {
  // (2)
  console.log(this, x);
});

document.body.innerHTML += '<button id="a">클릭</button>';
document.body.querySelector('#a').addEventListener('click', function(e) { 
  // (3)
  console.log(this, e); // <button id="a">클릭</button> 
});
// function(e) {...} 함수의 제어권을 다른함수 addEventListener에게 넘겨줌. 
// function(e) {...} 함수를 콜백함수라한다.
// addEventListener 메서드는 콜백함수를 호출할때 자신의 this를 상속하도록 정의되어있다.
// 따라서 콜백함수 내부에서의 this는 <button id="a">클릭</button>.
```
- 콜백함수 내에선 this를 정확하게 정의 할 수 없다.
- 콜백함수의 제어권을 가진 함수가 콜백 함수에서의 this를 무엇으로 할지를 결정하며, 특별히 정의하지않는 경우에는 기본적으로 전역객체를 바라본다.


### 1-5. 생성자 함수에서의 this는 생성될 인스턴스를 참조한다.
- 자바스크립트에선 함수에 new명령어와 함꼐 호출시 생성자로써 동작하게되어있다. (클래스로써 동작)
- 어떤 함수가 생성자 함수로써 호출된경우, 함수 내부에서의 this는 새로만들어질 인스턴스를 가리킨다.

#### 생성자함수 
- 공통된 성질을 지닌 객체들을 생성하는데 사용되는 함수. 
- 객체 지향 언어에서는 생서자를 클래스, 클래스를 통해 만들어진 객체를 인스턴스라고한다.
- 생성자는 인스턴트를 만들기위한 '틀'.

```js 
var Cat = function(name, age) {
  this.bark = '야옹';
  this.name = name;
  this.age = age;
};
var choco = new Cat('초코', 7); 
var nabi = new Cat('나비', 5);
console.log(choco, nabi); 

/* 결과
Cat { bark: '야옹', name: '초코', age: 7 }.  
Cat { bark: '야옹', name: '나비', age: 5 }
*/
// 출력된 결과를 확인했을떄, choco,nabi에 할당되는 값을 만들기위해 호출된 생성자함수 내부에서의 this는 각각 choco, nabi를 가리켰음을 알 수 있다. 
```

</br>
</br>
</br>

### 2.1 call,apply 메서드는 this를 명시적으로 지정하면서 함수 또는 메서드를 호출한다.
#### call 메서드
- call메서드는 call메서드의 호출 주최를 즉시 실행시킨다.
- 첫번째 인자로는 this로 설정할 값이 전달된다. (첫번쨰 인자를 this로 바인딩한다)
- 두번쨰 인자로는 호출할 함수로 전달되는 인자로 구성된다.
```js
var func = function(a, b, c) {
  console.log(this, a, b, c);
};

func(1, 2, 3); // Window{ ... } 1 2 3
func.call({ x: 1 }, 4, 5, 6); // { x: 1 } 4 5 6
```
#### apply 메서드
- call 메서드와 기능적으로는 완전동일.
- 한가지 차이점으로는 호출할 함수에게 전달되는 인자들을 배열로 받는다.
```js
var func = function(a, b, c) {
  console.log(this, a, b, c);
};

func.apply({ x: 1 }, [4, 5, 6]); // { x: 1 } 4 5 6

var obj = {
  a: 1,
  method: function(x, y) {
    console.log(this.a, x, y);
  },
};

obj.method.apply({ a: 4 }, [5, 6]); // 4 5 6
```

### 2.2 bind메서드는 this지정 및 함수에 넘길 인수를 일부 지정해서 새로운 함수를 만든다.
- 마찬가지로 call과 비슷하지만 즉시 호출하지는않고 넘겨받은 값들을 바탕으로 새로운 함수를 반환하기만 하는 메서드.

```js 
var func = function(a, b, c, d) {
  console.log(this, a, b, c, d);
};

func(1, 2, 3, 4); // Window{ ... } 1 2 3 4

var bindFunc1 = func.bind({ x: 1 });
bindFunc1(5, 6, 7, 8); // { x: 1 } 5 6 7 8

var bindFunc2 = func.bind({ x: 1 }, 4, 5);
bindFunc2(6, 7); // { x: 1 } 4 5 6 7
bindFunc2(8, 9); // { x: 1 } 4 5 8 9
```


### 2.3 요소를 순회하면서 콜백 함수를 반복 호출하는 내용의 일부 메서드는 별도의 인자로 this를 받기도 한다.
```js
var report = {
  sum: 0,
  count: 0,
  add: function() {
    var args = Array.prototype.slice.call(arguments);
    args.forEach(function(entry) {
      this.sum += entry;
      ++this.count;
    }, this);  // 별도의 인자로 this를 받는다. (report 바라봄)
  },
  average: function() {
    return this.sum / this.count;
  },
};
report.add(60, 85, 95);  //  앞에 (.)이 존재함으로, this로 report설정. 
console.log(report.sum, report.count, report.average()); // 240 3 80
```
- 위 forEach함수와같이 요소를 순회하면서 콜백함수를 반복호출하고 this를 별도의 인자로 받는 함수목록.
```js
Array.prototype.forEach(callback[, thisArg])
Array.prototype.map(callback[, thisArg])
Array.prototype.filter(callback[, thisArg])
Array.prototype.some(callback[, thisArg])
Array.prototype.every(callback[, thisArg])
Array.prototype.find(callback[, thisArg])
Array.prototype.findIndex(callback[, thisArg])
Array.prototype.flatMap(callback[, thisArg])
Array.prototype.from(arrayLike[, callback[, thisArg]])
Set.prototype.forEach(callback[, thisArg])
Map.prototype.forEach(callback[, thisArg])
```



