## Babel
- 자바스크립트 트랜스컴파일러
- 이크마스크립트(ECMA) 2015년도 이후 버전을 예전버전으로 변환시켜줌

    → 최신 버전의 자바스클비트로 개발을하여도 배포를할떄에는 바벨을 이용해서 예전브라우저에서도 이해할수있게 바꿔준다.
    
    → 뿐만아니라 타입스크립트나 jsx의 순수자바스크립트가 아닌것들도 브라우저가 이해할 수 있게 자바스크립트로 변환해준다.
</br>

## Webpack

- 작성한 여러코드나 이미지파일들을 한번에 묶어서 번들단위로 사용자에게 제공해줌.
- 중복된 코드도 최소화하고 긴 변수나 함수의 이름을 다른 사람들,해커들이 못알아보도록 변형해줌.
    <img width="678" alt="스크린샷 2021-07-04 오후 11 49 27" src="https://user-images.githubusercontent.com/58588011/124389516-79fa3780-dd22-11eb-9a18-e073091746d1.png">
</br>

## ESLint
- 코드를 잘못짜거나 문제가 생기면 경고사인을 보내줌.
</br>

## Jset
- 코드가 제대로 동작하는지 확인하는 test case를 만드는 '테스팅 프레임워크'
- 테스트를 잘 할 수있게 도와줌.
</br>

## PostCSS : css전처리기
- 중복되는 코드를 최소화하고자등장.
- 간편하게 작성하고  순수 css로 자동으로 변환해준다.
</br>

### 1) SASS,LESS와의 차이점
- 플러그인이 다양하다. (다양한 외부 프로그램과 호환이 가능하다)
- 사용자 수가 많음.
- create react app 안에 내장되어있음.
- 모듈화가 가능하여 css명을 일일이 다르게작성하지않아도된다.
</br>

### 2) postCSS 활용한 모듈화 예시
1. 각 컴포넌트별로 css모듈 파일을 만든다.
    </br>
    <img width="700" alt="css모듈 파일생성" src="https://user-images.githubusercontent.com/58588011/122941959-ce132c80-d3b0-11eb-984d-a8ed86a7aa94.png">
    </br>

 2. 적용하고자하는 컴포넌트에import한다.
    </br>
    <img width="700" height = "30" alt="컴포넌트에 모듈추가" src="https://user-images.githubusercontent.com/58588011/122942193-fe5acb00-d3b0-11eb-82c8-4b210f9a760f.png">
    </br>

 3.적용하고자하는 컴포넌트내에서 클래스명을 문자열이아닌 코드로작성
    </br>
    <img width="700" height = "30" alt="코드로 작성" src="https://user-images.githubusercontent.com/58588011/122942571-4548c080-d3b1-11eb-99fa-beae01197514.png">
    </br>

 4. 개발자도구 확인시 자동으로 변환되어 작성되어있음
    </br>
    <img width="700"  height = "30" alt="개발자도구 확인" src="https://user-images.githubusercontent.com/58588011/122942662-572a6380-d3b1-11eb-95fb-99ced9030780.png">
    </br>
     
