# 1. Spread Operator.
 

 ```jsx
//spread Syntax

{
const obj1 = { key : 'key1' };
const obj2 = {key : 'key2' };
const array = [obj1, obj2];

//array copy
const arrayCopy = [...array];
console.log(array, arrayCopy);  // array와 동일

const arrayCopy2 = [...array, { key: 'key3' }];
obj1.key = 'newKey'
console.log(array.arrayCopy, arrayCopy2); // obj1의 키값만 변경되어도 arrayCopy,arrayCopy2에 저장된값은 주소값이기떄문에 전부다 바뀐다.

//object copy
const  obj3 = { ...obj1 };
console.log(obj3);

//array concatenation
const fruits1 = ['🍎','🍐'];
const fruits2 = ['🍌','🍊']; 
const fruits = [...fruits1, ...fruits2];
console.log(fruits);

//object merge
const dog1 = { dog : '🐶' };
const dog2 = { dog : '🐻' };
const dog = { ...dog1, ...dog2};  //  병합되는 오브젝트의 키이름이 같을시 마지막에오는 값으로 저장된다.
console.log(dog);

}
```
