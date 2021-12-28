# DreamCoding async & await
```html
<script>
  // async & await
// 프로미스를 깔끔하게 사용하는방법. 
// 비동기 코드를 동기코드처럼 작성하여 가독성 상승.


// 1. async
// function fetchUser() {   // 일반 promise 사용
//   return new Promise((resolve, reject) => {
//     //do network requset in 10 secs...
//     resolve('ellie');
//   });
// }
async function fetchUser() {
  //async를사용할시 코드블록이 프로미스로 변경된다. (promise 객체를 생성하지않아도 promise 객체가 리턴됨.)
  //do network requset in 10 secs...
  return 'ellie';
}

const user = fetchUser();
user.then((user) => console.log(user));
console.log(user);

// 2. await 은 async 안에서만 사용이가능하다.
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function getApple() {
  await delay(2000); // delay(2000)가 처리될떄까지 기다렸다 사과를 리턴함.
  return '🍎';
}

// function getBanana() {
//   return delay(1000).then(() => '🍌');
// }
// 이런식으로 chaning를 하는것보다 아래와같이 동기식처럼 작성하는것이 가속성이 좋다.

async function getBanana() {
  await delay(1000);
  return '🍌';
}

// function pickFruits() {
//   return getApple().then((apple) => {
//     return getBanana().then((banana) => `${apple} + ${banana}`);
//   });
// }
// promise도 위처럼 중첩하여 chaining을 할경우 콜백지옥과 비슷한 상황이 발생.

async function pickFruits() {
  const applePromise = getApple(); //  서로 연관이없기떄문에 병렬적으로 받아올 수있다.
  const bananaPromise = getBanana(); //
  const apple = await applePromise; // await 키워드를사용하여 일반 비동기처럼 다음코드로넘어가는것이아닌 결과값을 얻을떄까지 기다린다. ( 동기코드 처리와 동일한 흐름으로 코드를 작성할 수 있어 읽기가 편하다.)
  const banana = await bananaPromise;
  return `${apple} + ${banana}`; // async 키워드가 붙어있는 함수를 호출할시 명시적으로 promise객체를 생성하지않아도 promise 객체가 리턴된다. 따라서 then 메서드를 통해 결과값을 추출해야함.
}
pickFruits().then(console.log);

// 3. useful Promise APIs : all , race
function pickAllFruits() {
  return Promise.all([getApple(), getBanana()]).then((fruits) =>
    fruits.join(' + ')
  ); // promise 배열을 전달하게되면 모든 promise가 병렬적으로 받아올떄까지 기다림.
}
pickAllFruits().then(console.log);

function pickOnlyOne() {
  return Promise.race([getApple(), getBanana()]);
} // promise 배열을 전달하게되면 가장먼저 전달되는 값을 받아온다.

pickOnlyOne().then(console.log);
</script>
```
