# CSS 전처리기
- 해당 전처리기에서의 제공하는 간편한 문법들로 코드를 작성하면 이를 브라우저가 이해할 수 있는 순수 CSS로 변환해준다.
## 왜쓰는가.
- 기존css는 중복적으로 작성해야하는 불편함이있다.
- 브라우저간의 호환성을위해 추가적으로 설정해야하는 부분들을 해결해준다.

### Sass,Less 
- Sass,Less에서 제공하는 문법들로만 사용 할 수있다.


### PostCSS
- <img width="694" alt="스크린샷 2021-12-14 오후 1 51 27" src="https://user-images.githubusercontent.com/58588011/145935188-40dd04dd-fdea-4eb5-8251-4c890ae792e6.png">
- 위의 Sass,Scss에서 제한적인부분들이 postCss에서 제공하는 다양한 플러그인들을 통해 해결할 수있다.
- CRA시 기본적으로 설치가된다. (CRA는 리액트를 사용하는 사람들이 공통적을 사용하는 라이브러리를 설치해주는데 거기에 포함되어있다. 별도 설치가 필요없다.)
- css를작성할떄 autoPrefixer라는걸 활용할 수 있다. ( -webkit, -ms등을 안붙여도 됨) 


  -> Sass에서도 mixin을통해 적용시킬 수있지만, postCSS에서는 추가적인 코드없이 자동을 적용시켜줌.
  *  [PostCSS에서 제공하는 플러그인](https://github.com/postcss/postcss/blob/main/docs/plugins.md)
  
  
  
  ## PostCSS로 모듈화 이용하기.
  
- <img width="157" alt="스크린샷 2021-12-14 오후 1 36 46" src="https://user-images.githubusercontent.com/58588011/145933831-de30e4c8-54cd-4d0a-b2e7-d50966677ba4.png">
- <img width="410" alt="스크린샷 2021-12-14 오후 1 40 13" src="https://user-images.githubusercontent.com/58588011/145934237-a24d5a7b-b209-4fbc-b9a8-c81b029ddff2.png">
- <img width="280" alt="스크린샷 2021-12-14 오후 1 41 27" src="https://user-images.githubusercontent.com/58588011/145934299-6d7385d5-72e6-4f6c-b8c8-ed00f452a191.png">

- module를 추가해줌으로써, 각 파일에서 클래스이름을 동일하게 선언을해도 각각 적용이되고, 클래스 이름이 모듈화되어 작성됨.
### 다른컴포넌트에서 동일한 클래스명을 사용했는지에대해 신경을 안써도된다.
