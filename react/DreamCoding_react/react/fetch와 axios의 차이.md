
# 라이브러리를 쓴다는것은
- 라이브러리를 사용할떄 사용하는 이유에대해서 정당하게 얘기할 수 있어야한다.
- 의존하는 라이브러리라 추가로 생기게되는것이기 떄문에 사용전에 충분히 고민하고 장단점이 무엇인지,
  기존의 언어나 프레임워크에서 제공하는 기능만으로는 부족한게 뭔지 정확하게 이해하고 사용할것. 
  <br></br>
  <br></br>
## fetch와 axios의 차이

### fetch
- IE에서 동작하지않는다.
- 서버로부터 응답을 받고 json형식으로 변형시켜줘야한다.
- 전체적인 url를 작성해야한다.

### axios
- 브라우저간 호환성이 좋다. ( IE에서도 동작한다.)
  - XMLHttpRequest객체 와 fetch를 브라우저의 버전에따라 맞춰서 사용한다.
- 서버로부터 응답을 받고 json형식으로 자동변환시켜준다.
- url을 나눠서 작성하여 가독성을 높힐수 있다.
- https://github.com/axios/axios
