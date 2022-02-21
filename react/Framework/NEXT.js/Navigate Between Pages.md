# Navigate Between Pages

## 1. next.js에서의 라우팅 방식

- next.js에선 pages폴더안의 파일명로 라우팅을 구분짓는다.
- 예를들어 pages/index.js 파일이 존재한다면, 이는 '/' 라우트로 처리되고,
  pages/posts/first-post.js는 '/posts/first-post' 라우트로 처리된다.

```js
// /pages/posts/first-post.js
export default function FirstPost() {
  return <h1>First Post</h1>;
}
```

- default로 export해줄것에 주의.
  <br></br>
  <br></br>

## 2. next/Link 컴포넌트를통해 SPA에서의 라우팅구현.

- a태그를 Link컴포넌트로 감싸주면 기존에 리액트에서 사용하던 라우팅을 구현할 수 있다.
- 스타일을 적용하려면 a태그에 적용해야한다.

```js
import Link from "next/link";

export default function FirstPost() {
  return (
    <>
      <h1>First Post</h1>
      <h2>
        <Link href="/home">
          <a>Back to home</a>
        </Link>
      </h2>
    </>
  );
}
```

<br></br>

## 3. 내장 code splitting & prefetching

### code splitting

- next.js는 code splitting을 따로 설정해주지않아도 자동적으로 지원해준다. 따라서 해당 페이지에 필요한 정보들만 가져오고, 다른 페이지에해당하는 코드는 불러오지 않는다. 즉 아무리 페이지가 많더라도, 각 페이지에해당하는 url로 접속했을떄, 페이지의 빠른 로딩속도를 보장해준다.

### prefetching

- 현재 브라우저 **뷰포트에서 보이는** Link컴포넌트가 가르키고있는 페이지에대해서 next.js는 prefetches(미리 페이지를 불러와놓음)를 제공해준다. 따라서 해당 링크 태그를 눌러 이동시 미리 로드되어있는 페이지를 보여주기떄문에 해당 페이지의 빠른 로딩속도를 보장해준다.
- 만약 Link컴포넌트가 가르키는 태그가 스크롤로 가려져있다면, 해당 링크가 보이기 시작할떄 prefetch되기 시작한다.
- 이는 development모드(npm run dev)가 아닌 production모드(npm run build -> npm run start)에서만 제공해준다.
