# HTTP 헤더 1

일반 헤더

- header-field = field-name":" OWS field-value OWS (OWS : 띄어쓰기 허용)
- field-name는 대소문자 구문 없음.

  <img width="311" alt="스크린샷 2022-01-15 오전 11 56 17" src="https://user-images.githubusercontent.com/58588011/149606399-5dac041a-d453-4bca-8005-dc7a2942e11c.png">
  <br></br>

## 1. 용도

- HTTP 전송에 필요한 모든 부가정보.
  - 메세지 바디의 내용, 메세지 바디의 크기, 압축, 인증, 요청 클라이언트, 서버 정보, 캐시 관리 정보..
- 필요시 임의의 헤더 추가 가능
  - ex. helloworld: hihi
    <br></br>

## 2. 분류

- 헤더분류 (RFC2616 - 과거)
  - General 헤더 : 메시지 전체에 적용되는 정보(요청,응답헤더에 모두 포함되는정보) ex) Connection : close
  - Request 헤더 : 요청 정보. ex) User-Agent : Mozilla
  - Response 헤더 : 응답 정보. ex) Sever : Apache
  - Entity 헤더 : 엔티티 바디 정보. ex) Content-type : text/html, Content-Length : 3423
    <br></br>
    <br></br>

# HTTP BODY (본문) / REC2616(구버전)

<img width="300" alt="스크린샷 2022-01-15 오전 11 56 17" src="https://user-images.githubusercontent.com/58588011/149608052-70a59344-aad8-42a4-850b-fb5cd3662c89.png">

- 메세지 본문에 엔티티 본문을 담아서 전달.
- 엔티티 본문은 요청이나 응답에서 전달할 실제 데이터를 의미.
- 엔티티 헤더는 엔티티 본문의 데이터를 해석할 수 있는 정보 제공.
  - 데이터유형(html,json),데이터 길이, 압축 정보등등.

-> HTTP 표준이 RFC 2616 에서 RFC7230~7235로 변경됨으로써 **엔티티** 에서 **표현**으로 명칭 변경.
<br></br>
<br></br>

# HTTP BODY (본문) / REC7230(최신)

<img width="300" alt="스크린샷 2022-01-15 오후 1 06 54" src="https://user-images.githubusercontent.com/58588011/149608225-b764c662-156d-424d-8897-72a9e5d9a953.png">

- 메시지 본문(message body)을 통해 표현 데이터 전달.
- 메시지 본문 = 페이로드(payload).
- **표현**은 요청이나 응답에서 전달할 실제 데이터.
- **표현 헤더는 표현 데이터**를 해석할 수 있는 정보 제공.
  - 데이터 유형(html, json), 데이터 길이, 압축 정보 등등.
    <br></br>

## 표현

<img width="300" alt="스크린샷 2022-01-15 오후 1 11 26" src="https://user-images.githubusercontent.com/58588011/149608351-21319370-2877-4348-a6f2-de9e177d03b3.png">

- Content-Type: 표현 데이터의 형식
  - 미디어 타입, 문자 인코딩
    - ex. text/html, charset=utf-8
    - application/json (기본이 utf-8)
    - image/png
- Content-Encoding: 표현 데이터의 압축 방식

  - <img width="300" alt="스크린샷 2022-01-15 오후 1 14 33" src="https://user-images.githubusercontent.com/58588011/149608480-8370f862-1208-44b1-8f81-f85c971e6b26.png">

  - 표현 데이터를 압축하기 위해 사용.
  - 데이터를 전달하는 곳에서 압축 후 인코딩 헤더 추가.
    - ex. gzip, identity(원본 그대로)

- Content-Language: 표현 데이터의 자연 언어.
  - ex. ko(한국어), en(영어)
  - 어플리케이션의 언어를 설정하기위해 클라이언트에서 참고 할 수 있다.
- Content-Length: 표현 데이터의 길이.

- 표현 헤더는 전송,응답 둘다 사용.
  <br></br>
  <br></br>

# 주요 헤더 필드.

## Accept : 협상(콘텐츠 네고시에이션)

클라이언트가 서버에 선호하는 표현 요청 (가급적 이렇게 응답해줘)

- Accept: 클라이언트가 선호하는 미디어 타입 전달
- Accept-Charset: 클라이언트가 선호하는 문자 인코딩
  - 기본 OS에 적용된 언어가 최우선 순위로 설정되어있음
- Accept-Encoding: 클라이언트가 선호하는 압축 인코딩
- Accept-Language: 클라이언트가 선호하는 자연 언어

- 협상 헤더는 요청시에만 사용.

### 협상과 우선순위

Quality values(q)

- 구체적인 것이 우선한다.
- Accept: text/\*, text/plain, text/plain;format=flowed, \*/\*
  1. text/plain;format=flowed
  2. text/plain
  3. text/\*
  4. \*/\*
     <br></br>

## 전송 방식

- 단순 전송(Content-Length) : Content-Length의 길이를 알떄 사용. (길이에 해당하는 값까지 전송)
- 압축 전송(Content-Encoding) : 서버로 부터 압축된 파일을 전송받고 헤더에 Content-Encoding 필드로 압축 형식을 전달 받는다.
- 분할 전송(Transfer-Encoding) : 헤더에 필드로 Transfer-Encoding : chunked 전달받음 \* chunk : 덩어리.

  - <img width="408" alt="스크린샷 2022-01-17 오후 3 35 19" src="https://user-images.githubusercontent.com/58588011/149719492-7c7636ff-33d2-4883-964b-6fc3468dad36.png">

  - 5파이트씩 끊어서 보내고 전부 전송됬을경우 0으로 알려줌.
  - Content-length를 넣으면 안된다.
    - 분할해서 보내는 방식이기떄문에 예상을 못하기떄문.

- 범위 전송 : Range, Content-Range

  - <img width="513" alt="스크린샷 2022-01-15 오후 3 10 59" src="https://user-images.githubusercontent.com/58588011/149611334-98c843ed-d614-402e-bd34-d1597cf94bdd.png">

  - 데이터를 전송받다가 중간에 끊겼을경우 끊긴부분부터 요청을 보낼 수 있다.
  - ex) 파일다운로드시 취소가되었어도 받았던 부분에서 부터 받을 수 있음.
    <br></br>

## 일반 정보

### 헤더 필드 명

- From : 유저 에이전트의 이메일 정보.

  - 일반적으로 잘 사용되지 않음.
  - 검색 엔진에서 주로 사용함.(페이지 주인과의 연락수단 제공떄문)

- Referer(자주쓴다) : 이전 웹 페이지 주소.

  - A -> B로 이동하는 경우 B를요청할떄 Referer : A 를 포함해서 요청함.
  - 유입경로를 분석 할떄 주로 사용.
  - 요청에서 사용
  - 참고 : referer는 단어 referrer의 오타 (이미 널리 알려짐)

- User - Agent : 유저 에이전트 정보.

  - 클라이언트의 애플리케이션 정보. (웹 브라우저 정보,등등)
  - 언제 사용하는가?
    - 서버측에서 특정 브라우저에서만 발생하는 버그를 유저 에이전트 정보를 비교하여 찾을 수 있다.
    - 통계를 낼떄 활용가능. (어떤 브라우저에서 유입되는지)
  - 요청에서 사용.

- Server : 요청을 처리하는 origin서버의 소프트웨어 정보 \* origin서버 : http요청을보내면 중간에 여러 proxy 서버를 거치게되는데, 실제로 내 요청을 받아서 처리하는 맨 마지막 서버를 의미.

  - 응답에서 사용.

- Date : 메세지가 생성된 날짜.

  - 응답에서 사용.
    <br></br>

## 특별한 정보

### 헤더 필드 명

- Host : 요청한 호스트 정보(도메인). // 중요

  - 요청에서 사용
  - 필수
  - 하나의 IP주소에 여러 도메인이 적용되어 사용되고 있었을떄 구분자로써의 역할을한다.

    - 호스트로 구분후, 세부적으로 포트로 또다시 구분.

    - <img width="400" alt="스크린샷 2022-01-17 오후 12 55 03" src="https://user-images.githubusercontent.com/58588011/149705738-1cd25303-9485-4af5-90b9-499c92454741.png">

- Location : 페이지 리다이렉션.

  - 웹 브라우저는 3xx응답의 결과에 Location 헤더필드가 있다면, 그 위치로 자동 이동(리다이렉트)
  - 201응답결과의 경우 (Created) : Location 값은 요청에 의해 생성된 리소스 URI.

- Allow : 허용 가능한 HTTP 메서드.

  - 405 (Method Not Allowed) 에서 응답에 포함해야함.
  - ex. Allow : GET,HEAD,PUT 라고한다면, 이외의 메서드는 사용할 수 있다는것을 클라이언트에게 알려줌.
  - 서버에 많이 구현되어있지는 않다.

- Retry-Afer : 유저 에이전트가 다음 요청을 하기까지 기다려야 하는 시간.

  - 503(Service Unavailable) : 서비스가 언제까지 불능인지 알려줄 수 있음.
    <br></br>

## 인증

### 헤더 필드 명

- Authorization : 클라이언트 인증 정보를 서버에 전달.
- WWW-Authenticate : 리소스 접근시 필요한 인증 방법 정의.
  - 401 Unauthenticate 응답안의 필드값으로 알려준다.
    <br></br>

## 쿠키

- 예) set-cookie: sessionId=abcde1234; expires=Sat, 26-Dec-2020 00:00:00 GMT; path=/; domain=.google.com; Secure

### 헤더 필드 명

- Set-Cookie : 서버에서 클라이언트로 쿠키 전달(응답)
- Cookie : 클라이언트가 서버에서 받은 쿠키를 저장하고, HTTP 요청시 서버로 전달

### Stateless(무상태)

- HTTP는 무상태 프로토콜이다.
- 클라이언트와 서버가 요청과 응답을 주고 받으면 연결이 끊어짐.
- 클라이언트와 서버는 서로 상태를 유지하지않는다.
- 쿠키를 사용하여 상태를 유지시킬수 있다.

### 쿠키 미사용 예

1. 사용자 로그인 정보 관리

   - 로그인이 필요한 페이지에 접근할떄 매번 쿼리데이터를 통해 인증에 필요한 데이터를 보내야한다.(아이디, 비밀번호 등)
   - 개발자 입장에서 인증이필요한 페이지를 구성할떄 사용자 정보를 다루는 코드를 반복적으로 작성해야하는 단점 발생.

### 쿠키 사용 예

1. 사용자 로그인 정보 관리

   - 로그인 요청을 보냈을시 응답 헤더의 Set-Cookie필드의 내용을 브라우저 쿠키 저장소에 저장.
   - 이후 클라이언트에서 서버로 요청을 보냈을떄 브라우저는 자동으로 쿠키 저장소를 확인하고 요청 헤더의 Cookie필드값으로 쿠키 저장소에 저장된 내용을 서버로 전송.

2. 광고 정보 트래킹

- 사용자가 어떤 웹사이트를 주로 접근하는지 파악가능.

### 쿠키 종류

- 세션 쿠키 : 만료 날짜를 생략하면 브라우저 종료시 까지만 유지.
- 영속 쿠키 : 만료 날짜를 입력하면 해당 날짜까지 유지.

### 쿠키 정보는 항상 서버에 전송된다.

- 모든 요청에대해서 쿠키를 전송하기떄문에 네트워크 트랙픽 추가 유발.
- 용량이 크지않아 최소한의 내용만을 전송해야함.(세션 id, 인증 토큰)
- 서버에 전송하지않고, 웹 브라우저 내부에 데이터를 저장하고싶으면 웹 스토리지 (로컬 스토리지, 세션 스토리지)참고
- 필요할떄만 보낼 수 있게됨.

### 쿠키 설정

- expire : 쿠키의 만료일을 지정

  - set-cookie: expires=Sat, 26-Dec-2020 04:39:21 GMT

- max-age : 쿠키의 만료시간 지정

  - set-cookie: max-age = 3600(3600초)

- domain : 명시한 기준 도메인

  - domain을 명시할시 명시된 도메인의 서브 도메인도 포함됨.
  - set-cookie : domain = example.org
  - 이후 해당 도메인(+서브 도메인)에서 요청을 보낼시 쿠키를 포함시킴.
  - domain을 따로 명시하지않을시 쿠키가 생성된 도메인에서만 접근이 가능하다.

- path : 해당 경로를 포함한 하위 경로 페이지에서만 쿠키에 접근 가능하다.

  - set-cookie : path=/
  - 도메인으로 1차 식별후 path로 2차 식별.
  - 일반적으로 루트로 지정한다.

- secure

  - set-cookie : Secure
    - 쿠키는 http,https를 구분하지 않고 전송하지만 secure적용시 https인 경우에만 전송.
  - set-cookie : HttpOnly
    - XSS 공격 방지
    - 자바스크립트에서 접근 불가(document.cookie) HTTP 전송에만 사용
    - HTTP전송시에만 사용
  - set-cookie : SameSite (도입된지 얼마 되지않아 사용시 찾아볼것)
    - XSRF 공격 방지
    - 요청 도메인과 쿠키에 설정된 도메인이 같은 경우만 쿠키 전송

### 주의

- 보안에 민감한 데이터는 저장하면 안된다.(주민번호, 신용카드 번호 등등)
