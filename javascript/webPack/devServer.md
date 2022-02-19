# 웹팩 개발 서버

- 번들링된 결과물에대해서 실제 배포전 미리 개발환경에서 동작시켜볼 수 있는 서버.

```js
npm i -D webpack-dev-server
```

<br></br>

## 실행 방법

```js
npm run webpack-dev-server
```

<br></br>

## 설정 방법

- 웹팩 설정파일에서 devServer객체를 생성하여 옵션을 설정해 줄 수 있다.
  <br></br>

# 장점

1. 웹팩의 번들링 대상의 파일을 변경하였을때, 매번 번들링 명령어를 실행하지않아도, 자동으로 번들링후 브라우저를 새로고침 해주게되어 작업이 편리해진다.
2. 개발서버에서 결과물을 확인할시, 실제로 번들링된 결과물이 코드에디터의 파일탐색기에선 보이지않게되는데,
   이는 만들어지지 않은게 아니라 메모리에만 생성을하고 파일을 따로 만들지는 않기떄문에 보이지 않게된다.(네트워크 탭에서 확인해보면 번들링된 파일을 불러온다는것을 확인할 수 있다.)따라서 번들링 시간을 줄여주고, 새로고침 시간또한 줄어든다.
3. 목업 데이터를 다룰 수 있는 가상의 서버를 셋팅해 줄 수 있다.

   <br></br>

## 웹팩 개발환경에서의 API서버 연동

- 아직 서버에서 api설계를 완료하지않았을시, 클라이언트에서 임시로 서버를 구동시킬 수있다.
- 웹팩 설정파일 devServer객체의 before옵션을 통해 목업 데이터를 전송해줄 수있는 서버를 실행 시킴.(5버전이후 onBeforeSetupMiddleware)

```js
devServer : {
  onBeforeSetupMiddleware : app => { // 서버 실행
    a.get("/api/users", (req,res) => { // api경로
      res.json([
        {
          ... // 전송할 데이터 목록
        }
      ])
    })
  }
}
```

- 많은 목업데이터가 필요할경우. connect-api-mocker라이브러리를 사용하여 json파일과 연동 시킬 수 있다.
- 목업 데이터를다룰 폴더를 구성하고(루트경로에서 mocks로 구성) 웹팩 환경설정의 devServer의 before속성을 변경 해준다.

```js
const apiMocker = require("connect-api-mocker");

 devServer: {
    onBeforeSetupMiddleware: (app, server, compiler) => {
      app.use(apiMocker("/api", "mocks/api")) // (api경로 , 전송할 데이터 위치)
    },
  },
```

- 이렇게 작성하면 클라이언트에서 임시로 api를 만들어 볼 수 있게되고, 많은 양의 목업 데이터를 쉽게 관리 할 수 있게된다.
  <br></br>

## 실제 서버 api 연동

- 서버에서의 로직이 완성되어 해당 경로로 api 요청을 보내게 되면 cors 정책 때문에 오류가 발생하게 된다.
- cors : 브라우저가 최초로 접속한 서버에서만 ajax 요청을 보낼 수 있다. 위의 devServer에서 api 서버를 구동하는 경우는 로컬 환경에서 서버를 구동시켰기 때문에 현재 브라우저의 경로와 서버의 경로가 같아 문제가 발생하지 않았던 것이다. cors 정책 문제는 서버 or 클라이언트 둘 중 하나에서만 처리해 주면 해결된다.

  - 서버에서 해결
    - 해당 api 응답 헤더에 "Access-Control-Allow-Origiin: \\\* " 헤더를 추가한 뒤 응답하면, 브라우저에서 응답 데이터를 받을 수 있다.
  - 클라이언트에서 해결
    - 서버 응답 헤더에 별도의 추가 없이 웹 팩 개발 서버에서 api 서버로 프록 싱하는 것이다. 이는 웹 팩 환경설정에서 proxy 속성으로 이를 지원한다.

  ```js
  module.exports = {
    devServer: {
      proxy: {
        "/api": "http://localhost:8081", // 프록시
      },
    },
  };
  ```

- 클라이언트에서 위와같이 설정된 "/api"경로로 api요청을 보내게되면, 웹팩개발서버에서 http://localhost:8081 쪽으로 요청을 보내도록 설정한다.

- 이처럼 웹팩 개발서버에서 제공하는 proxy속성을 활용하면 주소가 다른 api서버를 요청을 보낼 수 있게 된다.
  <br></br>
  <br></br>

# 참고자료

- https://joshua1988.github.io/webpack-guide/devtools/webpack-dev-server.html#%ED%94%84%EB%A1%9D%EC%8B%9C-proxy-%EC%84%A4%EC%A0%95
- https://jeonghwan-kim.github.io/series/2020/01/02/frontend-dev-env-webpack-intermediate.html
