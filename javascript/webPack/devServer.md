# 웹팩 개발 서버

- 번들링된 결과물에대해서 실제 배포전 미리 개발환경에서 동작시켜볼 수 있는 서버.

```js
npm i -D webpack-dev-server
```

## 실행 방법

```js
npm run webpack-dev-server
```

## 설정 방법

- 웹팩 설정파일에서 devServer객체를 생성하여 옵션을 설정해 줄 수 있다.

## 장점

- 웹팩의 번들링 대상의 파일을 변경하였을때, 매번 번들링 명령어를 실행하지않아도, 자동으로 번들링후 브라우저를 새로고침 해주게되어 작업이 편리해진다.
- 개발서버에서 결과물을 확인할시, 실제로 번들링된 결과물이 코드에디터의 파일탐색기에선 보이지않게되는데,
  이는 만들어지지 않은게 아니라 메모리에만 생성을하고 파일을 따로 만들지는 않기떄문에 보이지 않게된다.(네트워크 탭에서 확인해보면 번들링된 파일을 불러온다는것을 확인할 수 있다.)
  - 파일을 만들지않음으로써 번들링 시간을 줄여주고, 새로고침 시간또한 줄어든다.

# 참고자료

- https://joshua1988.github.io/webpack-guide/devtools/webpack-dev-server.html#%ED%94%84%EB%A1%9D%EC%8B%9C-proxy-%EC%84%A4%EC%A0%95
- https://jeonghwan-kim.github.io/series/2020/01/02/frontend-dev-env-webpack-intermediate.html
