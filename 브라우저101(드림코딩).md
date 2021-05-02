# API (application programming interface)
ex)

1. 자판기에서 내부가 어떻게 동작하는지몰라도, 돈을넣으면 원하는 물건을 얻을 수 있다.

2. 전원플러그를 콘센트에 꼽을시, 어떻게 전기가흘러 전원이 공급되는지 몰라도 전기를 사용할 수 있다.

→ 윈도우에서 동작하는 애플리케이션을 만들고싶다면 윈도우에서 제공하는 API를 이용해서 윈도우 애플리케이션을만들 수있다. ( 안드로이드.맥...등등)

3. 유튜브에서 자체 백엔드 서비스에서 제공하는API를통해 유튜브의 데이터를 받아올 수있음. 

4. 내가 직접 작성하는 프로젝트에서  ex)userStorage 클래스에서 login,logout를 할 수 있는 함수들이 있다면 이것도 userStorage가 제공하는 로그인,로그아웃 두가지의 api가 있다고도함.

# web API란? (브라우저가 자체적으로 제공하는 API)

- DOM API

- Network APIs

- Graphics APIs

- Audio/Video APIs

- Device APIs

- File APIs

- Storage APIs 등등.

-> 추가적인 API검색은 mdn 사이트에서 가능

# http 
- 웹 클라이언트와 웹서버간 통신규약정의

## http vs https

- https 는 보안처리가 되어있다. 몇몇의 web API는 이 보안처리가된 https환경에서만 사용할 수있는 것도 존재한다.

 

# external APIs

- 트위터,유튜브등등의 회사에서 자신들의 백엔드API를 제공하는경우도 있다.



# 웹 애플리케이션을 브라우저에서 열었을떄 어떻게 구조화되서 보여지는가?
<img width="800" alt="window,document" src="https://user-images.githubusercontent.com/58588011/116819475-30b72b80-abab-11eb-9928-394f926c730a.png">

- window라는 전체적인 object 존재.

- document오브젝트 : HTML에서 작성한요소들이 표기되어지는 부분.

- Navigator오브젝트 : 사용자의 눈에는 보이지않지만 브라우저자체에 관련된 정보들이 담겨있음

 ### 브라우저에서 웹 애플리케이션을 실행시키면 아래와 같은 오브젝트들이 들어있고 사용할 수있다.

<img width="800" alt="윈도우객체 구성" src="https://user-images.githubusercontent.com/58588011/116819566-8a1f5a80-abab-11eb-87cd-12c91f11397e.png">



# 브라우저에서 윈도우는 가장 큰 오브젝트다.(글로벌 오브젝트)

- 직접 확인하려면 콘솔창에서 console.log(window) 실행

- 동일하게 console.log(this) 실행해도 같은값출력.

- ex)console.log(innerwidth)   === console.log(window.innerwidth)  

### window 자체에 들어있는 api중 주로 사용하는것들
- size
- scroll
- load (작성한 웹 애플리케이션이 브라우저에 올라왔는지 안올라왔는지) 등등
