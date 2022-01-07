# VDOM

## 정의

- 말 그대로 가상의 돔트리로, 메모리에서 구현된 돔트리(컴포넌트들의 트리구조).

## 특징

- 리렌더링이 발생할떄 이전의VDOM과 비교하여 실질적으로 업데이트된부분만 실제 돔트리에 업데이트시킴.
  <img width="700" alt="스크린샷 2021-07-03 오후 10 33 56" src="https://user-images.githubusercontent.com/58588011/124355981-c2482580-dc4e-11eb-974d-705c9d882822.png">

- render함수가 많이 호출되어도(리렌더링이 많이 발생해도) 변동사항이 없으면, 실제 돔트리에는 반영이되지않아 성능면에서 크게 문제되지않는다. (또한 매번 바뀐것이 생길떄마다 업데이트를하는방식이아닌 업데이트를 하는 내용들을 모았다가 한번에 업데이트 시킴으로 성능이 보장된다.)
- 사용자가 부드럽게 웹어플리케이션을 이용할 수 있으려면 60fps를 유지해야하는데, 리액트는 이부분을 보장해준다. (60fps : 1초에 60개 프레임의 업데이트)
  <br></br>
  <br></br>


## 관련 링크
- [React Virtual DOM vs Real DOM](https://medium.com/devinder/react-virtual-dom-vs-real-dom-23749ff7adc9)
- [ReactDOM.render()](https://dream-frontend.tistory.com/249?category=819621)
