# 1. DOM(Document Object Model)


## DOM은 HTML문서를 파싱한 결과물이다.
<br></br>

## DOM은 어떻게 생성되는가.
- 브라우저의 요청에의해 서버측에서 HTML문서(여러HTML파일중 기본설정이 index.html 파일로 설정되어있음)를 찾는다.
- 이 문서를 구성하고있는 html태그,div태그,text,태그속성 등등이  브라우저에 보여지려면 브라우저가 이해할 수 있는 객체형태(노드)로 변환 시켜야 한다.(브라우저의 렌더링 엔진에의해 실행)
- 변환된 노드들로 구성된 트리자료구조를 DOM이라 부른다.
<br></br>


## DOM의 특징
- EventTarget을 상속하여 EventTarget API를 사용할 수 있다.( == 모든 Node는 이벤트가 발생할 수 있다)

- [Node API](https://developer.mozilla.org/en-US/docs/Web/API/Node)
- [EventTarget API](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget)


   <img width="700" alt="event target APIs" src="https://user-images.githubusercontent.com/58588011/117319478-4cca0e00-aec6-11eb-9611-28c44e1c742a.png">
 

 
 
