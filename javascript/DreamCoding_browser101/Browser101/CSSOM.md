# 1. CSSOM(Css Object Model)  [공식문서 링크](https://developer.mozilla.org/en-US/docs/Web/API/CSS_Object_Model) 
- 브라우저에서 돔트리와 css를 병합하여 구성.
<img width="700" alt="CSSOM" src="https://user-images.githubusercontent.com/58588011/117447398-6af04680-af78-11eb-97ea-9cd797c7f258.png">

- external : 링크태그에의한 css파일로 작성. 
- embedded : html문서 head태그 내에서 style태그로 직접 작성.
- inline : 태그에 직접 정의한 style.
- user-agent stylesheet : 브라우저자체 내장 css
 
- cascading rules : 부모요소에 스타일을 적용시 그 자식 요소들은 자동으로 적용.
- computed styles : 모든 것들이 계산된 스타일.
<img width="700" alt="스크린샷 2021-05-07 오후 9 21 30" src="https://user-images.githubusercontent.com/58588011/117448841-32ea0300-af7a-11eb-85ac-6ac5c94dbc08.png">

## 주의
- section 태그내에서 dispaly : none으로 css를 설정하면, 이후 렌더트리를 만들떄 section태그를 포함시키지않는다.
- visibility : hidden or  opacity : 0으로 css를 설정하면 렌더트리에 반영은되나 보이지는 않는다.
 

