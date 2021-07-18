# dreamCoding 콜백함수 이해하기.

```html
<script>
'use strict';

// 자바스크립트는 동기적인 언어다.
// 호이스팅이 이루어진 이후로부터 코드블록이 한줄씩 실행된다.
// 호이스팅 : var , 함수선언문이 자동적으로 맨위로 올라가는것.

// 비동기적인 실행방법.
console.log('1'); // 첫번쨰 출력
setTimeout(function () {
  // 브라우저에게 1초후 안의 콜백함수를 실행시킬것을 명령후 다음코드블록 실행.(3번쨰출력)
  console.log('2');
}, 1000);
console.log('3'); // 두번쨰 출력

// 동기적인 콜백
function printImmediatley(print) {
  print();
}
printImmediatley(() => console.log('hello')); // 동작을 희망하는 콜백함수 전달.

// 비동기적인 콜백
function printWithDelay(print, timeout) {
  setTimeout(print, timeout);
}
printWithDelay(() => console.log('async callback'), 2000); // 동작을 희망하는 콜백함수, 시간을 인자로전달.



// Callback Hell example
class UserStorage {
  loginUser(id, password, onSuccess, onError) {
    setTimeout(() => {
      if (
        (id === 'ellie' && password === 'dream') ||
        (id === 'coder' && password === 'academy')
      ) {
        onSuccess(id);
      } else {
        onError(new Error('not found'));
      }
    }, 2000);
  }

  getRoles(user, onSuccess, onError) {
    setTimeout(() => {
      if (user === 'ellie') {
        onSuccess({ name: 'ellie', role: 'admin' });
      } else {
        onError(new Error('no access'));
      }
    }, 1000);
  }
}

const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');

userStorage.loginUser(
  id,
  password,
  (user) => {
    userStorage.getRoles(
      user,
      (userWithRoles) => {
        alert(`Hello ${userWithRoles.name}, you have a ${userWithRoles.role}!`);
      },
      (error) => {
        console.log(error);
      }
    );
  },
  (error) => {
    console.log(error);
  }
);


  </script>
```
