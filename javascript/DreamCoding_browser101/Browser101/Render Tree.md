# 1. Render Tree.
- DOM + CSSOM.
- Render Tree는 사용자에게 최종적으로 보여줄 요소로 구성.
- DOM트리구성요소중 head는 사용자에게 직접적으로 보이지않는 부분이기때문에 Render Tree에서 제외.
- css속성중 display : none으로 설정시에도 마찬가지로 사용자에게 보이지않는부분으로 제외.
- visibility : hidden or opacity : 0으로 css를 설정하면 렌더트리에 반영은되나 보이지는 않는다. 
<img width="705" alt="스크린샷 2021-05-07 오후 9 28 28" src="https://user-images.githubusercontent.com/58588011/117449639-2c0fc000-af7b-11eb-9bbe-b25652d11a30.png">
