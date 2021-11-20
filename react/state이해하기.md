# 1.State 이해하기
-  state 변경 -> render함수 호출로 ui업데이트

<img width="1334" alt="스크린샷 2021-05-28 오후 11 33 25" src="https://user-images.githubusercontent.com/58588011/119999814-1c7d1780-c00d-11eb-943e-222cc4c73579.png">
<img width="673" alt="스크린샷 2021-05-28 오후 11 34 18" src="https://user-images.githubusercontent.com/58588011/119999943-446c7b00-c00d-11eb-855d-742c8059a229.png">

- state의값을 직접 변경시 변경되지않는다.
- state의값을 변경하기위해선 리액트에서 제공하는 setState 함수 사용.
- setState함수 인자로 새로운 오브젝트전달.(업데이트 하고자 하는 상태데이터 전달)
- setState함수인자로써 새로운 오브젝트를 전달할시 기존의상태와 비교를한다.
→ 비교하는 방식에는 컴포넌트와 순수컴포넌트간 차이를보인다.

</br>
</br>

### 컴포넌트의 경우
- 따로 라이프싸이클 메소드중 하나인 shouldComponentUpdate()를 구현하지않았다면 setState가 호출될떄마다 무조건render함수 호출.
</br>
</br>

### 순수 컴포넌트의 경우
 - 얇게비교(제일상위 레퍼런스만 비교)후 달라진게있다면 업데이트 ( 레퍼런스안의 값이변한경우에는 업데이트x)
</br>
</br>

### 예제와같이 state를 업데이트하는과정에서 계산이 이루어지는경우
- setState(prevState → newState) 와같이 기존state를 받아와서 그걸로 새로 업데이트되는 state를 만들자.
```js
this.setState( state => { count : this.state.count +1 });
```
</br>

### 리액트에서 제공하는 setState함수는 두가지 종류가 있다.
- setState(newState) //새로운 state오브젝트를 인자로 바로 받는함수
- setState(preState => {return newState}) // 이전 state를받아서 그걸로 계산한후 새로운 state를 리턴하는 함수를 인자로 받는 함수


 




