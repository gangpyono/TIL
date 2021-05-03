## 1. node.js

- 구글 크롬에서 동작하는 자바스크립트 성능을 개선하고자 V8엔진 개발.
- 이v8엔진을 기반으로 node.js개발.
- javascript가 웹 브라우저를 제어한다면 node.js는 컴퓨터 자체를 제어함.


## 2. node.js 웹 애플리케이션

- javascript를이용해 작성.
- node.js 런타임이라는 프로그램에서 작동(별도설치)
- 터미널창에서 명령어 $ node 를 입력하여 node.js실행(웹서버 실행).
- 코드를 직접 입력하는것보다 파일에 코드를작성후 node.js를통해 파일을 실행시킴.

## 3. node.js 웹서버 만들기

- node.js는 웹서버의 역할을 한다.
- 웹 브라우저에 주소를 입력해서 웹 서버에 요청하면 웹 서버는 요청받은 정보를 찾아서 응답함.
<img width="800" alt="웹브라우저  -  웹서버" src="https://user-images.githubusercontent.com/58588011/116800265-928b7d00-ab3a-11eb-920c-1a7d184d60af.png">

- 에디터(vscode)에서 main.js파일을 생성후 아래의 웹서버생성 코드를 입력한다.
<img width="564" alt="웹서버 생성코드" src="https://user-images.githubusercontent.com/58588011/116801581-434b4980-ab46-11eb-989b-20fab7c96c46.png">

- 터미널창을 켜서 node main.js 입력하여 node.js를 웹서버로서 동작시킨다.
<img width="199" alt="웹서버 동작명령어" src="https://user-images.githubusercontent.com/58588011/116801678-f2882080-ab46-11eb-859e-79aa09ee70b8.png">


- 웹서버가 제대로 동작했는지 확인하기위해 브라우저를 열어 주소창에 아래의 주소를 입력하여 정보를 요청한다.
<img width="117" alt="웹서버로 정보요청" src="https://user-images.githubusercontent.com/58588011/116801709-3c710680-ab47-11eb-8670-e4186e4894df.png">

- 다음과같은 페이지가 나오면 node.js가 웹서버로서 동작하는것을 확인.
<img width="1276" alt="웹서버가 전송한 페이지" src="https://user-images.githubusercontent.com/58588011/116801745-780bd080-ab47-11eb-9165-459016ca13f7.png">

- 웹서버를 끄는방법으로는 터미널창에서 control + c 입력
<img width="366" alt="서버 종료 명령어" src="https://user-images.githubusercontent.com/58588011/116801771-b3a69a80-ab47-11eb-9666-ff1f400afb51.png">



