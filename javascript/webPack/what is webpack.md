# 웹팩

- 웹팩이란, 모듈번들러.

## 모듈

- 비슷한 기능,의미를 갖는 코드들을 하나의 파일로 관리하는 것을 모듈로 정의.

  - ex

  ```js
  // math.js
  function sum(a, b) {
    return a + b;
  }

  function substract(a, b) {
    return a - b;
  }

  const pi = 3.14;

  export { sum, substract, pi };
  ```
<br></br>
<br></br>

## 웹팩에서의 모듈

- 위의 코드뿐만이아닌,애플리케이션을 구성하는 모든 자원을 모듈로 정의.
  - html,css,js,image,font 등의 파일들.
  - 이러한 파일 하나하나를 모두 모듈로 정의.
<br></br>
<br></br>

## 모듈 번들링

- 왼쪽이 번들링 전, 오른쪽이 번들링 후의 상태다.
- 일반적으로 프로젝트를 진행했을 떄 왼쪽처럼 여러 개의 파일을 나누어 하나의 루트 폴더에 관리를 했을 것이다.
- 리액트를 통해 cra로 초기 세팅을 하다 보니 웹 팩에 대한 별다른 설정을 직접 안 했어도 이러한 번들링 작업이 웹 팩에 의해 발생하고 있었다.
- 이런 여러 파일을 하나의 파일로 병합 및 압축해 주는 동작을 모듈 번들링이라 하며, 이러한 작업을 해주는 장치를 모듈 번들러 라고 한다.
  <img width="573" alt="스크린샷 2022-02-14 오후 11 50 24" src="https://user-images.githubusercontent.com/58588011/153887435-6d5c7e29-2ee3-436e-905a-cf1ea3874b92.png">
<br></br>
<br></br>

## 웹팩의 장점

### 1) 브라우저별 HTTP 요청 횟수의 제약 충족

- 브라우저별 지원하는  최대 요청횟수
<img width="200" alt="스크린샷 2022-02-16 오전 12 13 01" src="https://user-images.githubusercontent.com/58588011/154090823-3c264a36-b1f3-4f21-95d6-ab139bcb997a.png">

- 웹팩에 의한 모듈 번들링을 통해 HTTP 요청 횟수를 줄일 수 있게 되어 서버 요청을 최소화 할 수 있다.

- 적용전 vs 적용후 비교
<p align='start'>
<img width="300" alt="스크린샷 2022-02-16 오전 12 53 49" src="https://user-images.githubusercontent.com/58588011/154099580-865a46a4-35cc-4a03-9bae-c3f05b3e20d8.png">
<img width="300" alt="스크린샷 2022-02-16 오전 12 55 52" src="https://user-images.githubusercontent.com/58588011/154099556-ed8503bc-0091-4c03-8ea6-cffa0eafe9c0.png">
</p>

### 2) 웹 개발 자동화 도구 지원

- HTML,CSS,JS압축
- 이미지 압축
- CSS전처리기 변환

### 3) 레이지 로딩(lazy Loading)지원

- 초기 페이지 로딩 속도를 높이기위해 당장 필요하지 않은 자원은 나중에 요청하도록 설정할 수 있다.
