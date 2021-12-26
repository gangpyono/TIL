# 콜백함수
- 다른 함수 or 메서드에게 인자로 넘겨지면서 제어권도 함꼐 전달된다.
- 콜백 함수를 위임받은 함수 or 메서드는 자체적인 로직에의해 전달받은 콜백함수를 실행함.

## 제어권
### 1. 호출 시점
- setInterval는 첫번쨰인자로써 전달된 함수(콜백함수)로부터 제어권을 넘겨받고 적절한시점(0.3초)마다 함수를 실행했다.
```js
var count = 0;
var cbFunc = function() {
  console.log(count);
  if (++count > 4) clearInterval(timer);
};
var timer = setInterval(cbFunc, 300);

// -- 실행 결과 --
// 0  (0.3초)
// 1  (0.6초)
// 2  (0.9초)
// 3  (1.2초)
// 4  (1.5초)
```
 
### 2. 인자
- 아래의 Array의 prototype에 담긴 map메서드를 예로들면, map이 콜백함수를 호출할떄,
  currentValue,index에 어떤 값들을 어떤 순서로 전달할지를 전적으로 map함수에 달려있음. (다른 값들을 넣어도 무조건 배열의 해당원소와 인덱스가 참조됨)
 ```js
 var newArr = [10, 20, 30].map(function(currentValue, index) {
  console.log(currentValue, index);
  return currentValue + 5;
});
console.log(newArr);

// -- 실행 결과 --
// 10 0
// 20 1
// 30 2
// [15, 25, 35]
```

  
### 3. this  
#### 1) 기본적으론 콜백함수도 함수여서 this는 전역객체를 참조하지만, 제어권을 넘겨받을 함수에서 별도로 this가 될 대상을 지정한 경우엔 
  그 대상을 참조한다.
```js
setTimeout(function() {
  console.log(this);  // 기본적으로 this는 전역객체다.
}, 300); // (1) Window { ... }

[1, 2, 3, 4, 5].forEach(function(x) {.   // 두번쨰 인자로 this를 지정할 수있지만 그러지않았음.
  console.log(this); // (2) Window { ... }
});

document.body.innerHTML += '<button id="a">클릭</button>';
document.body.querySelector('#a').addEventListener(
  'click',
  function(e) { // this에 addEventListener메서드의 this를 그대로 전달한다.
    console.log(this, e); // (3) <button id="a">클릭</button>
  } // MouseEvent { isTrusted: true, ... }
);
```

  
#### 2) 메서드를 콜백함수로 전달한 경우
- 객체의 메서드를 전달하더라도 메서드가아닌 함수일 뿐.
```js
var obj = {
  vals: [1, 2, 3],
  logValues: function(v, i) {
    console.log(this, v, i);
  },
};
obj.logValues(1, 2); // { vals: [1, 2, 3], logValues: f } 1 2 // 이 메서드의 이름앞에 (.)이 있으니 this는 obj를 가리킨다. 
[4, 5, 6].forEach(obj.logValues); // Window { ... } 4 0  // obj.logValues가 가리키는 함수만 전달함. ( this가 obj가 아님)
// Window { ... } 5 1
// Window { ... } 6 2
```

 
 #### 3) 콜백 함수 내부의 this에 다른 값을 바인딩 하는 방법 : bind메서드 활용.
 ```js
 var obj1 = {
  name: 'obj1',
  func: function() {
    console.log(this.name);
  },
};
setTimeout(obj1.func.bind(obj1), 1000);  //  1초후 obj1 출력

var obj2 = { name: 'obj2' };
setTimeout(obj1.func.bind(obj2), 1500); // 1.5초후 obj2 출력
```
 
### 4) 콜백지옥
- 비동기 제어를 위해 콜백함수를 사용하다보면 콜백 지옥에 빠지기 쉽다.
- 최근 ECMAScript에서 지원하는 Promise,Generator, async/await등을 활용하자.

