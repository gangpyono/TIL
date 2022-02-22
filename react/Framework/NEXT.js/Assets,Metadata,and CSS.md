# 1. How to add static files (images, etc) to Next.js.

- next.js에선 정적파일(ex. image)를 루트경로의 public폴더 안에서 관리한다.(pages와 비슷)
- public의 경로가 '/'로 자동을 잡아준다.
- pages내의 파일이름과 동일한 이름을 사용하게되면 오류가 발생한다.
- robots.txt, favicon.ico등의 파일도 관리.
- Image 컴포넌트 사용시, 이미지 리사이징,최적화 자동지원.(외부 url로부터 받아오는 파일도 포함)

```js
import Image from "next/image";

function Avatar() {
  return <Image src="/me.png" alt="me" width="64" height="64" />;
}

export default Avatar;
```

<br></br>
<br></br>

# 2. How to customize what goes inside the <head> for each page. (Metadata)

## 1) Adding title

```js
import Head from "next/head";

export default function FirstPost() {
  return (
    <>
      <Head>
        <title>First Post</title>
      </Head>
      <h1>First Post</h1>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </>
  );
}
```

<br></br>

## 2) Adding Third-Party JavaScript

```js
<Head>
  <title>First Post</title>
  <script src="https://connect.facebook.net/en_US/sdk.js" />
</Head>
```

<br></br>
<br></br>

# 3. 지원하는 built-in css

- CSS MOdules
- Sass
- styled-jsx
  <br></br>
  <br></br>

# 4. How to add global CSS in pages/\_app.js.

- global CSS를 적용하기 위해서 "pages/\_app.js"파일을 만들자.

```js
//pages / _app.js;
import "../styles/global.css";

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
```

- App컴포넌트는 모든 pages폴더에있는 모든 페이지의 최상위 컴포넌트가 된다.
- \_app.js의 또다른 사용 예로 전역상태를 적용시킬 수 있다.
