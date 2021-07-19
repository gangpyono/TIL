# 1.Promise
```html
<script>
  'use stricet';

//promise is a javascript object for asynchronous operation.
//State : pending -> fulfilled(완료) or rejected(실패) 각각 resolve 와 reject로 값을 받아온다.
//Producer vs Consumer

// 1. Producer
// When new Promise is created, the executor runs automatically.

const promise = new Promise((resolve, reject) => {
  // executor function
  //doing some heavy work(network, read files)
  console.log('doing something...');
  setTimeout(() => {
    // resolve('ellie') // 성공적으로 데이터를받왔을시 ellie 전달.
    reject(new Error('no network')); // 에러발생시 호출,자바스크립트에서 제공하는 Error 오브젝트를통해 값을 전달.
  }, 2000);
});

// 2. Consumers : then, catch , finally

promise
  .then((value) => {
    //then은 promise가 정상적으로 작동해서 resolve 콜백함수로 전달된 ellie 를 value로 받아온다
    console.log(value);
  })
  .catch((error) => {
    // catch는 promise에서 에러가 발생했을시 호출됨.  (reject의 인자를 받아옴)
    console.log(error);
  })
  .finally(() => {
    // 값을 성공적으로 받아온것과 상관없이 항상 호출.
    console.log('finally');
  });

// 3. promise chaining

const fetchNumber = new Promise((resolve, reject) => {
  setTimeout(() => resolve(1), 1000);
});

fetchNumber
  .then((num) => num * 2)
  .then((num) => num * 3)
  .then((num) => {
    // then은 값뿐만아니라 promise도 리턴할 수있다.
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(num - 1), 1000);
    });
  })
  .then((num) => console.log(num));

//4. Error Handling
const getHen = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve('hen'), 1000);
  });
const getEgg = (hen) =>
  new Promise((resolve, reject) => {
    setTimeout(
      () =>
        // reject(new Error(`error! => egg`));
        resolve(`${hen} => egg`),
      1000
    );
  });
const cook = (egg) =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(`${egg} => fry`), 1000);
  });

getHen()
  .then((hen) => getEgg(hen)) // 받아온 value를 바로 함수의 인자로 전달할시 .then(getEgg) 으로 생략해서작성가능
  // .catch(error => {  //  egg를 받아오는과정에서 실패할시 bread를 리턴하여 도중에 문제가생겨도 전체진행에있어 문제발생을 없애준다.
  //     return 'bread';
  // })
  .then((egg) => cook(egg)) // === cook
  .then((meal) => console.log(meal)) //  === console.log
  .catch(console.log); // 도중 오류가발생시 호출.
</script>
```
