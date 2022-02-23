# dynamic Routes

- 게시물상세페이지를 만든다고 가정해보자.
- pages/posts/[id].js경로를 만들게되면, [id].js파일내에서 상세페이지를 작성할 코드를 작성해주면된다.
- [id].js 파일내에서 반드시 포함되어야할 내용으로는

  - 1. 페이지 컴포넌트
  - 2. id값들로가능한 값을 담은 배열을 리턴하는 getStaticPaths함수.
  - 3. 해당id에 매치되는 데이터를 가져올 getStaticProps함수.

  ```js
  import Layout from "../../components/layout";

  export default function Post() {
    return <Layout>...</Layout>;
  }

  export async function getStaticPaths() {
    // Return a list of possible value for id
  }

  export async function getStaticProps({ params }) {
    // Fetch necessary data for the blog post using params.id
  }
  ```

  <br></br>
  <br></br>

## 1. 외부 자원에서 id를가져오는함수 만들기

- 반드시 params키를 포함하는 객체를 요소로하는 배열형태로 리턴해야하고 params는 또다시 id([id].js에서 정의된)키를 포함한 객체로 정의되야한다.

```js
export function getAllPostIds() {
  const fileNames = fs.readdirSync(postsDirectory);

  // Returns an array that looks like this:
  // [
  //   {
  //     params: {
  //       id: 'ssg-ssr'
  //     }
  //   },
  //   {
  //     params: {
  //       id: 'pre-rendering'
  //     }
  //   }
  // ]
  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ""),
      },
    };
  });
}
```

<br></br>
<br></br>

## 2. getStaticPaths에서 호출하여 id배열 가져오기

- getStaticPaths함수내에서 외부 api통신을 통해(예시에선 파일) id값들을 받아와 리턴할떄, **반드시 params키를 포함하는 객체를 요소로하는 배열형태로 리턴해야하고**, params는

  ```js
  import { getAllPostIds } from "../../lib/posts";

  export async function getStaticPaths() {
    const paths = getAllPostIds();
    return {
      paths,
      fallback: false,
    };
  }
  ```

  <br></br>
  <br></br>

## 3. id를 getStaticProps에서 받기

```js
import { getAllPostIds, getPostData } from "../../lib/posts";

export async function getStaticProps({ params }) {
  const postData = getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}
```

- getStaticPaths함수내에서 리턴된 배열은 getStaticProps로 전달되고, 위의 예시에선 이중 params객체를 구조분해할당으로 가져온다.
- 이후 id값을 참조하여 일치되는 데이터를 받아올 수 있고, 이후 페이지 컴포넌트로 props로 값이 전달되어 페이지를 그리게된다.
  <br></br>
  <br></br>

## 4. getStaticPaths의 fallback.

- 위의getStaticPaths함수에서 id배열을 리턴할떄 fallback키를 false로 리턴하는 코드를 볼 수 있는데, fallback은 작성된 id이외의 페이지에 접근했을떄를 조치하는 옵션이다.
  - false로 설정할 경우
    - 주어진 id이외의 페이지를 404페이지를 보여준다.
  - true로 설정할 경우 - 우선 작성된 id이외의 id에대해서 첫 요청시에 404페이지가아닌, 미리작성된 fallback페이지를 보여주고, 해당하는 id의 페이지를 build하여 다른 페이지와같이 pre-render시킨다. - 이후 동일한 id로 요청할경우, 다른 페이지처럼 준비된 해당 id에대한 페이지를 보여주게된다.
    <br></br>
    <br></br>

## 5. Catch -all Routes

- ('...')전개를 사용하여 path를 확장시킬 수 있다.
  - ex. `pages/posts/[...id].js` => `/posts/a` 뿐만아닌 `/posts/a/b`, `/posts/a/b/c` 등등.
- ('...')전개를 사용하면 getStaticPaths에서 배열을 리턴할떄 아래와같이 전달해야한다.

```js
return [
  {
    params: {
      // Statically Generates /posts/a/b/c
      id: ["a", "b", "c"],
    },
  },
  //...
];
```

<br></br>
<br></br>
<br></br>

# 결론

- getStaticPaths로 id가져오고 getStaticProps로 세부데이터를 가져온다.
