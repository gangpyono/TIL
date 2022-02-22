# Pre-rendering and Data Fetching

## 1. Next.js의 pre-rendering 특징

- Next.js에선 기본적으로 모든 페이지를 pre-render한다.
- 기존 리액트의 CSR처럼 클라이언트 단에서 js로 그리는방식이아닌, 미리 HTML파일을 생성해놓고 요청시 전달해주는 방식이다. 이는 결과적으로 빠른 로딩속도와 SEO(검색엔진 최적화)를 제공해 주게 된다.
- 페이지가 브라우저에의해 보여지게되면,그떄 js파일을 불러오게되고, 이후 페이지가 완전히 ineractive된다.(이런 방식을 hydration이라 부른다.)
- 우선 페이지는 빠르게 보여줄 수있지만, js를 다 다운받기전까진 interaction을 주고받을 수는 없다.

### 1) SSG,SSR에대한 방식(pre-rendering)

- 두 방식의 차이점으로는 페이지에 해당하는 html파일을 언제 생성하는지로 나뉜다.
  <img width="600" alt="스크린샷 2022-02-22 오후 12 46 34" src="https://user-images.githubusercontent.com/58588011/155059502-802342fe-eb10-4301-9f4a-3cd4e5c25d1c.png">

<br></br>

### 2) 기존 리액트에서 사용했던 방식(CSR)

- CSR에대해서 설명하자면, 클라이언트 측에서 화면을 생성한다는 의미이다(js로 화면을 그림).
- 이는 사이트에 처음 접속했을때 해당 사이트에 존재하는 모든 자원을 한번에 받아오게된다.

  - 장점
    - 첫 접속시 모든 자원을 받아오기떄문에 이후 사이트의 화면전환에 있어 빠른 속도를 보장해준다.
  - 단점
    - 첫 접속시 모든 자원을 받아오기때문에, 만약 불러오는 번들 사이즈가 커지게되면 긴 로딩시간을 갖게될 수 있다.(이를 보완하여 코드 스플리팅을통해 번들을 나누어 요청을 보낼 수 있다.)
    - 기본적으로 js로 돔을 그리는 방식으로, SEO(검색 엔진 최적화)대응이 어렵다.
      - 국내 검색 봇은 기본적으로 html문서를 기반으로 요소를 찾기떄문에,(구글은 x) 검색봇의 제대로된 동작이 어렵게된다.

  <img width="600" alt="스크린샷 2022-02-22 오후 12 48 17" src="https://user-images.githubusercontent.com/58588011/155059648-53a67994-838d-4e70-9df8-a32931ab1ce0.png">

<br></br>

## 2. pre-rendering : static site Generation (SSG)

- 프로젝트를 배포전 build 시 js파일로 만든 pages의 파일들을 html 파일로 변환시킨다.(developmnet 모드 일시, SSR로 동작한다.)
- 또한 CDN에 의한 cache 기능을 별다른 설정 없이 제공해 준다. 따라서 첫 요청이후 요청에 좀 더 빠른 로딩 시간을 제공한다.

  <img width="600" alt="스크린샷 2022-02-22 오후 1 26 29" src="https://user-images.githubusercontent.com/58588011/155063111-7f88ce1d-6c39-420b-9074-217f5392131f.png">
<br></br>
<br></br>

## 3. pre-rendering : Server-side Rendering. (SSR)

- SSR은 사용자의 요청이 있을떄 html파일을 생성하고 제공해준다. 이는 SSG에비해 느린 로딩속도를 가지게되는 원인이며, 반드시 필요한 상황이아닌이상 가급적 SSG방식으로 페이지를 구성할것을 권장한다.

  <img width="600" alt="스크린샷 2022-02-22 오후 1 31 51" src="https://user-images.githubusercontent.com/58588011/155063549-00b6e722-7a3d-4e91-bd09-8e2638c4926d.png">
<br></br>
<br></br>

## 4. when to use SSG? SSR?

- 가능하면 SSG를 사용할것을 권장.
- 사용자가 요청하기전까지 pre-render를 구성할 필요가 없다면 SSR, 그렇지않다면 SSG.
- 페이지의 표시되는 데이터들의 업데이트가 자주 발생한다면 SSR , or SSG + CSR.
  <br></br>
  <br></br>

## 5. 자주사용하는 SSG에대해서 좀더 알아보자.

### 1) 서버로부터 불러오는 데이터가 존재하지않을떄. -> 페이지 컴포넌트로만 구성

<br></br>

### 2) 서버로부터 불러오는 데이터가 존재할떄. -> 페이지 컴포넌트 + getStaticProps함수로 구성.

- 페이지를 다루는 컴포넌트를 export할떄 getStaticProps라는 async함수 또한 함께export해줄 수 있다.(getStaticProps는 오직 page파일에서만 export될수있음.)
- 이 함수 안에서 외부 데이터를 가져오는 로직을 작성할 수 있고, 기존 pre-render을 준비할떄 getStaticPros함수를 우선 실행후, 리턴값을 페이지를 다루는 컴포넌트에게 props로 전달해준다.
- 이후 build과정을 거쳐 pre-render을 진행.

<img width="600" alt="스크린샷 2022-02-22 오후 10 51 01" src="https://user-images.githubusercontent.com/58588011/155145720-e7231305-ec84-42d5-b298-debd5e094f92.png">
<br></br>

### 3) 데이터베이스 직접접근.

- 외부 api를통해서 데이터를 가져올수도 있지만, 데이터베이스를 직접접근하여 데이터를 가져올 수 도있다. 이게 가능한이유는 getStaticProps는 오직 server-side에서만 동작하고 절떄 client-side에선 동작하지 않기 떄문이다.
  <br></br>
  <br></br>

## 6. Development vs Production

1. Development모드에서 getStaticProps는 매 요청떄마다 실행된다.( === SSR)

2. production모드에서는 오직 빌드를 할 시에만 실행되지만, getStaticPaths라는 함수의 옵션인 fallback key를통해 제어될 수 있다.
   <br></br>
   <br></br>

## 7. SSG(without Data) + CSR

- 보통 이런방식을 적용하는 케이스는 개인정보,유저정보,SEO가 필요없는경우, 페이지가 pre-render될 필요가 없는 경우(데이터가 자주 변경되는경우)이다.
  <br></br>
  <br></br>

## 8. SWR

- Next.js팀에서만든 clinet-side에서 데이터를 가져올떄 사용하는 react-hook이다.
- 이는 caching,revalidation,focus tracking, refetching on interval 등등을 지원해줌으로, 공식문서에서 client-side에서 데이터를 가져올 일이 있으면 사용할것을 강력 추천한다.

  ```js
  import useSWR from "swr";

  function Profile() {
    const { data, error } = useSWR("/api/user", fetch);

    if (error) return <div>failed to load</div>;
    if (!data) return <div>loading...</div>;
    return <div>hello {data.name}!</div>;
  }
  ```
