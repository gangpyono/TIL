# 1.State 이해하기
-  state 변경 -> render함수 호출로 ui업데이트

<img width="1334" alt="스크린샷 2021-05-28 오후 11 33 25" src="https://user-images.githubusercontent.com/58588011/119999814-1c7d1780-c00d-11eb-943e-222cc4c73579.png">
<img width="673" alt="스크린샷 2021-05-28 오후 11 34 18" src="https://user-images.githubusercontent.com/58588011/119999943-446c7b00-c00d-11eb-855d-742c8059a229.png">

- state의 값을 변경하고싶을떄, handleIncrement, handleDcrement에서와같이 setState라는 리액트에서제공하는 api를 이용해서 업데이트를 해줘야한다.
- 코멘트와같이 state의값을 직접 변겅시 변경되지않는다.
- setState함수 인자로 새로운 오브전달.
- setState함수인자로써 새로운 오브젝트를 전달할시 리액트에선 기존의 상태객체와 비교후 업데이트가 필요한경우 해당 컴포넌트의 render함수를 호출한다.
→ 비교하는 방식에는 컴포넌트와 순수컴포넌트간 차이를보인다.(아래 참고)
- 예제와같이 state를 업데이트하는과정에서 계산이 이루어지는경우
→ setState(prevState → newState) 와같이 기존state를 받아와서 그걸로 새로 업데이트되는 state를 만들자.
```js
this.setState( state => { count : this.state.count +1 });
```

### 컴포넌트의 경우
- 따로 라이프싸이클 메소드중 하나인 shouldComponentUpdate()를 구현하지않았다면 setState가 호출될떄마다 render 함수 호출.



### 순수 컴포넌트의 경우
 - 얇게비교(제일상위 레퍼런스만 비교)후 달라진게있다면 업데이트 ( 레퍼런스안의 값이변한경우에는 업데이트x)
 




