```js
const log = console.log;
```
## 기존과 달라진 ES6에서의 리스트 순회
- for i++
- for of
```js
  const list = [1, 2, 3];
  for (var i = 0; i < list.length; i++) {
    // log(list[i]);
  }
  const str = 'abc';
  for (var i = 0; i < str.length; i++) {
    // log(str[i]);
  }
  for (const a of list) {
    // log(a);
  }
  for (const a of str) {
    // log(a);
  }
```
### Array를 통해 알아보기
```js
  log('Arr -----------');
  const arr = [1, 2, 3];
  let iter1 = arr[Symbol.iterator]();
  for (const a of iter1) log(a);
```
### Set을 통해 알아보기
```js
  log('Set -----------');
  const set = new Set([1, 2, 3]);
  for (const a of set) log(a);
```
### Map을 통해 알아보기
```js
  log('Map -----------');
  const map = new Map([['a', 1], ['b', 2], ['c', 3]]);
  for (const a of map.keys()) log(a);
  for (const a of map.values()) log(a);
  for (const a of map.entries()) log(a);
  console.clear();
```
## 이터러블/이터레이터 프로토콜
- 이터러블: 이터레이터를 리턴하는 [Symbol.iterator]() 를 가진 값
- 이터레이터: { value, done } 객체를 리턴하는 next() 를 가진 값
- 이터러블/이터레이터 프로토콜: 이터러블을 for...of, 전개 연산자 등과 함께 동작하도록한 규약



- Array,Set,Map은 자바스크립트의 내장 이터러블이다. 
- 따라서 이터러블/이터레이터 프로토콜을 따른다.

### Array
- 값을 참조하는 방법
1. 이터레이터에있는 next()메서드를 호출하여 {value,done} 객체의 value를통해 값을 참조할 수있다.
2. for...of문을 활용하여 이터러블을 순회하면, 이터레이터의 next()메서드를 호출을통해 얻은 {value,done} 객체안의 value값을 참조할 수 있다.
3. 이터레이터를 for...of문으로 순회해도 value값을 참조할 수 있다.
4. next()를 호출한후 for...of문을 순회하면 next()호출로 참조한값 이후부터 순회한다.

### Set
- Array과 동일.

### Map
- map.keys() // 이터레이터를 리턴한다. => next()로 value 접근이가능한데, key값만 담긴다.
- map.keys()를 for...of로 순회하면 키값만 참조된다.

- map.values() // 이터레이터를 리턴한다. => 동일하게 value값만 담긴다.
- map.values()를 for...of로 순회하면 value값만 참조된다.
 
- map.entries() // 이터레이터를 리턴한다. => key,value배열로 담긴다.
- map.entries()를 for...of로 순회하면 [key,value] 값을 참조된다.

- 이터레이터의[Symbol.iterator]()가 또 이터레이터 자신이된다. ( 이터레이터 == 이터러블??)




### 사용자 정의 이터러블을 통해 알아보기
```js
  const iterable = {  // 이터러블 만들기.
    [Symbol.iterator]() {
      let i = 3;
      return { // 이터레이터 반환.
        next() {
          return i == 0 ? {done: true} : {value: i--, done: false};
        },
        [Symbol.iterator]() {
          return this;
        }
      }
    }
  };
  let iterator = iterable[Symbol.iterator](); // 만든 이터러블을통해 이터레이터를 반환한다.
  iterator.next(); // next()을통해 내부의 값을 조회할 수 있다.
  iterator.next();
  // log(iterator.next());
  // log(iterator.next());
  // log(iterator.next());
  for (const a of iterator) log(a); //이터러블에 Symbol.iterator가 구현되어있기떄문에 이터러블을통해 순회 할 수 있다.
  // 잘 구현된 이터러블은 이터레이터를 순회해도 이터러블과 동일한 결과를 보여준다. -> 이터레이터가 Symbol.iterator를 가지고있어야하고, 자기자신을 반환해야한다.
  // const arr2 = [1, 2, 3];
  // let iter2 = arr2[Symbol.iterator]();
  // iter2.next();
  // log(iter2[Symbol.iterator]() == iter2);
  // for (const a of iter2) log(a);

  
  //자바스크립트에서 순회가 가능한 형태의 값을 가진 값들은, 대부분 이터러블/이터레이터 프로토콜을 따른다.
  for (const a of document.querySelectorAll('*')) log(a);
  const all = document.querySelectorAll('*');
  let iter3 = all[Symbol.iterator](); // Symbol.iterator가 구현이 되어있기떄문에 순회가가능하다.
  log(iter3.next()); //마찬가지로 이터레이터의 next메서드를통해 접근이 가능함.
  log(iter3.next());
  log(iter3.next());
```
## 전개 연산자 ( 이터러블/이터레이터 프로토콜을 따른다.)
```js
  console.clear();
  const a = [1, 2];
  // a[Symbol.iterator] = null; -> 아래줄에서 에러발생.
  log([...a, ...arr, ...set, ...map.keys()]);
```
-> 이터러블/이터레이터 프로토콜을 잘 사용해야 값들을 잘 사용한 함수들을 만들고, 값들을 잘 다룰수가 있다.
