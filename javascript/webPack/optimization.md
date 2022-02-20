# 최적화

- 코드가 많아지면 번들링된 결과도 커지게된다. 거의 메가바이트 단위로 커질 수 있게되는데, 이렇게되면 번들링된 파일을 다운받는데 오랜시간이걸려 성능에 영향을 미치게된다. 이를 최적화시키는 방법에대해서 알아보자.

## 1. production 모드

- 웹팩에 내장되어있는 최적화 방식으로, mode 값을 production으로 설정하는것이
  기본적인 방식이다.
- production모드로 설정할시 아래 내장 플러그인들로인해 결과물을 최적화시킨다.
  - FlagDependencyUsagePlugin
  - FlagIncludedChunksPlugin
  - ModuleConcatenationPlugin
  - NoEmitOnErrorsPlugin
  - OccurrenceOrderPlugin
  - SideEffectsFlagPlugin
  - TerserPlugin : js파일에있어서 빌드결과물 난독화.

## 2. optimazation 속성으로 최적화

from: "./node_modules/axios/dist/axios.min.js",

- 웹팩 설정파일 optimazation속성에서 추가 옵션을 통해 빌드 결과물을 압축 시킬 수 있다.

## 3. 코드 스플리팅

- 빌드파일결과물을 여러개로 쪼갠다.
- entry를 여러개를 지정해 분할 할 수 있는데, 이렇게되면 빌드결과물에서 중복되는 코드가 발생하게된다. 이를 optimazation옵션중 splitChunks를 설정해주면 빌드결과물에서 중복된 코드를 다루는 추가적인 파일이 생성된다.(venders.js)

```js
module.exports = {
  optimization: {
    splitChunks: {
      chunks: "all",
    },
  },
};
```

- 이렇게 개발자가 일일이 entry를 여러개로 지정하여 분할을 진행할 수 있지만, 이를 dynamicImport를통해 자동화시켜줄 수 있게된다.

## 4 동적 임포트

- 위의 설정에서 entry와 optimization속성 설정을 기존으로 유지.

```js
import(
  /*webpackChunkName : "빌드결과물에 나타낼 파일명"*/ "분할시킬 파일명"
).then((m) => {
  const result = m.default; // 모듈내에서 default로 설정된 대상.
});
```

- 주석을통해 빌드결과물에 작성될 파일이름을 명시해주면 웹팩에서 빌드를 진행할떄 위의 코드스플리팅과 동일한 결과물로, 빌드파일을 따로 만들어주고, 중복된코드를 vender.js로 만들어준다.

## 5. external

- 번들 대상에서 제외시키기.
- axios같은 써드파트 라이브러리같은경우 이미 패키지로 제공될떄 빌드 과정을 거쳤기떄문에 빌드 프로세스에서 제외시켜주는것이 좋다.

```js
module.exports = {
  externals: {
    axios: "axios", //빌드과정에서 "axios"를 사용하는 모듈이 발견되면, 전역변수 axios로 대체.
  },
};
```

- 대신, 전역변수로 axios를 접근하려면, 직접 index.html에 script태그를통해 axios를 불러와야한다.

  ```html
  <script type="text/javascript" src="axios.min.js"></script>
  ```

  <img width="625" alt="스크린샷 2022-02-20 오후 6 37 03" src="https://user-images.githubusercontent.com/58588011/154836733-13553445-977c-48f8-903d-bf21fe94ecd0.png">

- 추가로 빌드 결과물에도 존재해야함으로, CopyWebpackPlugin 플러그인을 통해 기존 node-modules에 설치된 axios빌드 결과물을 복사해준다.

```js
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  plugins: [
    new CopyPlugin({
      patterns: [
        {
          from: "./node_modules/axios/dist/axios.min.js", // 전역에위치한 axios빌드결과물 경로.
          to: "./dist/axios.min.js", // 빌드 결과물경로.
        },
      ],
    }),
  ],
};
```

- 이미 빌드과정을 거친 라이브러리를 사용하고있다면 빌드과정에서 제외시켜 용량감소와 빌드시간을 단축시키자.
- 이러한 작업을 개발 초기단계보단 배포전 빌드용량을 고려하여 적용하자.
