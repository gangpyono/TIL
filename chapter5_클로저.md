# 쿨로저란
- 어떤 함수 A에서 선언한 변수 a를 참조하는 내부함수 B를 외부로 전달할 경우 A의 실행 컨텍스트가 종료된 이후에도 변수a가 사라지지 않는 현상.

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
- outer 함수의 실행 컨텍스트가 종료되기전에 inner 함수의 실행컨텍스트가 종료된다.

## outer 함수의 실행 컨텍스트가 종료된 후에도 inner함수를 호출할 수 있게 만들면 어떨까요?
- outer의 반환값으로 inner함수실행 결과값이아닌 함수 자체를 반환하면, outer2는 inner함수의 주소값을 참조하게된다.
- 이후 console.log등을통해 inner함수를 실행시키는데, inner함수를 실행시키는 시점엔 outer함수의 실행컨텍스트는 이미 종료된상태다.
- 근데 어떻게 outer함수의 LexicalEnvironment에 저장되있는 a에 접근할 수 있을까? outer실행컨텍스트는 이미 종료되었는데?
- 가비지 컬렉터의 동작방식떄문인데, 가비지 컬렉터는 기본적으로 어떤 값을 참조하는 변수가 하나라도 있다면 그 값은 수집 대상에 포함시키지 않는다. (이 상황에선 정확하게는 이후 호출과정을 통해 참조될 예정인 값이다.)
- outer함수가 inner함수를 반환하면서 outer함수의 실행컨텍스트가 종료될텐데( === outerEnvironmentReference와 LexicalEnvironment를 참조하고있던 대상이 사라짐), inner함수 자체를 반환했음으로, 언젠가 이 반환된 inner함수를 outer2에의해 호출하게되어
  inner함수의 실행컨텍스트를 활성화 시킬일이 발생했을떄(===inner함수를 호출할떄), 구성사항으로 outerEnvironmentReference에 저장될 outer함수의 LexicalEnvironment가 필요할 것임으로 (참조할것임으로)
  outer함수의 LexicalEnvironment이 가비지 컬렉터의 수집 대상에서 제외되어 outer함수의 LexicalEnvironment에 저장되어있는 a에 접근할 수 있게된다.
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

## 클로저의 활용 사례
### 콜백 함수 내부에서 외부 데이터를 사용하고자 할떄.

