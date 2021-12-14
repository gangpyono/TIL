#  this
- 


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

