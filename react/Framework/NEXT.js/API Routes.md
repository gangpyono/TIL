## 1. How to create API Route

- api Routes는 next.js app에서 API를 작성할 수 있게 해준다.
- `pages/api`폴더내에서 함수를 작성하여 사용할 수 있다.
- getStaticProps에서 `pages/api`에서 작성된 api를 사용하려면, `lib/`폴더에서 작성된 요청 api만으로 요청이가능하다.(client-side와 공유)

  ```js
  // req = HTTP incoming message, res = HTTP server response
  export default function handler(req, res) {
    // ...
  }
  ```

- 이러한 함수들은 Serverless 함수들로 배포될 수 있다.(Lambdas로도 알려진)
  <br></br>

### api 예시

- `pages/api`폴더 경로에 `hello.js`파일을 만들자.

  ```js
  export default function handler(req, res) {
    res.status(200).json({ text: "Hello" });
  }
  ``;
  ```

- req는 HTTP incoming message.
- res는 HTTP server response.

<br></br>
<br></br>

## 2. some useful information on API Routes

- `pages/api`에 존재하는 파일들은 page가아닌 API로 다뤄진다.
- 이파일들은 page와 동일하게 server-side번들이고, 따라서 client-side의 번들사이즈를 증가시키지않는다.
