## PostCSS : css전처리기

- 중복되는 코드를 최소화하고자등장.
- 간편하게 작성하고  순수 css로 자동으로 변환해준다.


## SASS,LESS와의 차이점

- 플러그인이 다양하다. (다양한 외부 프로그램과 호환이 가능하다)
- 사용자 수가 많음.
- create react app 안에 내장되어있음.
- 모듈화가 가능하여 css명을 일일이 다르게작성하지않아도된다.


## postCSS 활용한 모듈화 예시
1. 각 컴포넌트별로 css모듈 파일을 만든다.
<img width="700" alt="css모듈 파일생성" src="https://user-images.githubusercontent.com/58588011/122941959-ce132c80-d3b0-11eb-984d-a8ed86a7aa94.png">
<br></br>


2. 적용하고자하는 컴포넌트에import한다.
<img width="700" alt="컴포넌트에 모듈추가" src="https://user-images.githubusercontent.com/58588011/122942193-fe5acb00-d3b0-11eb-82c8-4b210f9a760f.png">
<br></br>


3.적용하고자하는 컴포넌트내에서 클래스명을 문자열이아닌  코드로작성
<img width="694" alt="코드로 작성" src="https://user-images.githubusercontent.com/58588011/122942571-4548c080-d3b1-11eb-99fa-beae01197514.png">
<br></br>


4. 개발자도구 확인시 자동으로 변환되어작성되어있음
<img width="427" alt="개발자도구 확인" src="https://user-images.githubusercontent.com/58588011/122942662-572a6380-d3b1-11eb-95fb-99ced9030780.png">
<br></br>
     
