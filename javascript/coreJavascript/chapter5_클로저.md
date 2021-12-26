# 클로저란
- 어떤 함수 A에서 선언한 변수 a를 참조하는 내부함수 B를 외부로 전달할 경우 A의 실행 컨텍스트가 종료된 이후에도 변수a가 사라지지 않는 현상.
- 함수와 그 함수가 선언된 렉시컬 환경과의 조합.
### 외부함수의 변수를 참조하는 내부함수 (1
- outer 함수의 실행 컨텍스트가 종료되기전에 inner 함수의 실행컨텍스트가 종료된다.
- 이후 별도로 inner함수를 호출할 수 없다.
```js
var outer = function() {
  var a = 1;
  var inner = function() {
    return ++a;
  };
  return inner();
};
var outer2 = outer();
console.log(outer2); // 2
```


### outer 함수의 실행 컨텍스트가 종료된 후에도 내부함수인 inner함수를 호출할 수 있게 만들면 어떨까요?
- outer의 반환값으로 inner함수실행 결과값이아닌 함수 자체를 반환하면, outer2는 inner함수의 주소값을 참조하게된다.
- 이후 inner함수가 호출될떄, a값또한 참조가능한 모습을 볼 수 있다.
- 근데 어떻게 outer함수의 LexicalEnvironment에 저장되있는 a에 접근할 수 있을까? outer실행컨텍스트는 이미 종료되었는데?
- 가비지 컬렉터의 동작방식떄문인데, 가비지 컬렉터는 기본적으로 어떤 값을 참조하는 변수가 하나라도 있다면 그 값은 수집 대상에 포함시키지 않는다. (이 상황에선 정확하게는 이후 호출과정을 통해 참조될 예정인 값이다.)
- outer함수가 inner함수를 반환하면서 outer함수의 실행컨텍스트가 종료될텐데( === outerEnvironmentReference와 LexicalEnvironment를 참조하고있던 대상이 사라짐), inner함수 자체를 반환했음으로, 언젠가 이 반환된 inner함수를 outer2에의해 호출하게되어
  inner함수의 실행컨텍스트를 활성화 시킬일이 발생했을떄(===inner함수를 호출할떄), 구성사항으로 outerEnvironmentReference에 저장될 outer함수의 LexicalEnvironment가 필요할 것임으로 (참조할것임으로)
  outer함수의 LexicalEnvironment이 가비지 컬렉터의 수집 대상에서 제외되어 outer함수의 LexicalEnvironment에 저장되어있는 a에 접근할 수 있게된다.
  
 ### 외부함수의 변수를 참조하는 내부함수 (2
```js
var outer = function() {
  var a = 1;
  var inner = function() {
    return ++a;
  };
  return inner;
};
var outer2 = outer(); 
console.log(outer2()); // 2
console.log(outer2()); // 3
```


## 클로저와 메모리
- 클로저는 어떤 필요에의해 함수의 지역변수로 메모리를 소모하도록 함으로써 발생한다.
- 필요성이 사라지는 시점에 참조 카운틑 0을 만들어줌으로써 해결한다.
```js
// (1) return에 의한 클로저의 메모리 해제
var outer = (function() {
  var a = 1;
  var inner = function() {
    return ++a;
  };
  return inner;
})();
console.log(outer());
console.log(outer());
outer = null; // outer 식별자의 inner 함수 참조를 끊음
```



## 클로저는 언제 쓰는가?

### 콜백함수 내부에서 외부 데이터를 사용하고자 할떄.
```js
var fruits = ['apple', 'banana', 'peach'];
var $ul = document.createElement('ul');

var alertFruitBuilder = function(fruit) {
  return function() {
    alert('your choice is ' + fruit);
  };
};
fruits.forEach(function(fruit) {
  var $li = document.createElement('li');
  $li.innerText = fruit;
  $li.addEventListener('click', alertFruitBuilder(fruit)); // 반환된함수가 이후 이벤트가 발생했을떄 반환된 함수의 실행컨텍스트에 존재하는 outerEnvirnomentReference에 의해 참조되는 alertFruitBuilder의 인자로넘어온 fruit를 참조할 수 있게된다. 즉, alertFruitBuilder(fruit)는 클로저가 존재한다.
  $ul.appendChild($li);
});
document.body.appendChild($ul);
```

### 접근권한 제어(정보 은닉)
- 접근 권한에는 public(어디에서든 접근가능), private(내부에서만 사용가능하며 외부에 노출 시키지않음)이 존재한다.
- 다만 자바스크립트에서는 접근권한을 직접적으로 부여할수있게 설계되어있지않음. 이를 클로저를 통해 public한 값과 private한 값을 구분하는것이 가능하다.
  
 ```js
 var outer = function() {
  var a = 1;
  var inner = function() {
    return ++a;
  };
  return inner;
};
var outer2 = outer();
console.log(outer2()); // 2
console.log(outer2()); // 3
```
- outer2를통해 outer밖에서도 a변수를 참조할 수 있게되었다.
- 즉 변수a의 접근권한을 return문을통해 return한 변수들은 public한 값이되고, 그렇지않은 변수들은 private한 값이된다.

 
 
### 커링 함수
- 여러 개의 인자를 받는 함수를 하나의 인자만 받는 함수로 나눠서 순차적으로 호출될 수 있게 체인 형태로 구성한 것을 말한다.
- 한 번에 하나의 인자만 전달하는 것을 원칙으로한다.
- 마지막 인자를 받기전까지 함수가 실행되지않는다.(함수의 실행을 미루는 지연실행으로 지칭)
```js
var curry3 = function(func) {
  return function(a) {
    return function(b) {
      return func(a, b);
    };
  };
};

var getMaxWith10 = curry3(Math.max)(10); //  a인자를 받고 b인자를 받을 함수.
console.log(getMaxWith10(8)); // 10  // b인자를받고 func에 a,b를 인자로 전달.
console.log(getMaxWith10(25)); // 25

var getMinWith10 = curry3(Math.min)(10);
console.log(getMinWith10(8)); // 8   
console.log(getMinWith10(25)); // 10  
```

### 사용시 주의사항
- 클로저는 메모리를 차지하는 개념이므로 사용하지않게된 클로저에대해서는 메모리를 차지하지않도록 관리해줘야한다.

