# URI(Uniform Resource Identifier)

- Uniform : 리소스를 식별하는 통일된 방식.
- Resource : 자원(html파일,실시간 교통정보등등),식별할 수 있는 모든 것(제한 없음).
- Identifier : 다른 항목과 구분하는데 필요한 정보.
- URI = URL(Resource Locator) + URN(Resource Name)

## URL

- 리소스가 있는 위치 지정

## URN

- 리소스에 이름을 부여

- ex. 브라우저에 URL을 검색하는행위가 찾고자하는 리소스의 위치를 전송하는것.

- URN만으로 실제 리소스를 찾을 수 있는 방법이 보편화 되어 있지않다.

### URL === URI

## URL 전체 문법

- scheme://[userinfo@]host[:port][/path][?query][#fragment]
- https://www.google.com:443/search?q=hello&hl=ko
  - 프로토콜(https)
  - 호스트명(www.google.com)
  - 포트 번호(443)
  - 패스(/search)
  - 쿼리 파라미터(q=hello&hl=ko)

### Scheme

- 주로 프로토콜 사용
- 프로토콜: 어떤 방식으로 자원에 접근할 것인가 하는 약속 규칙.
  - 예) http, https, ftp 등등
- http는 80 포트, https는 443 포트를 주로 사용, 포트는 생략 가능.
- https는 http에 보안 추가 (HTTP Secure)
  - 대부분의 웹사이트 동작 방식

### userinfo@

- URL에 사용자정보를 포함해서 인증.
- 거의 사용하지않음.

### host

- 도메인명 or IP주소를 직접 사용가능.

### Port

- 접속 포트.
- 일반적으로 생략, 생략시 http는 80, https는 443 포트로 자동지정.

### Path

- 리소스 경로(path), 계층적 구조
- ex.
  - /home/file1.jpg
  - /members
  - /members/100, /items/iphone12

### query

- key=value 형태
- ?로 시작, &로 추가 가능 ?keyA=valueA&keyB=valueB
- query parameter, query string 등으로 불림, 웹서버에 제공하는 파라미터, 문자 형태로 전송되기떄문.

### fragment

- html 내부 북마크 등에 사용
- 서버에 전송하는 정보 아님

<br></br>

# 웹 브라우저 요청 흐름

1. 브라우저에 URL입력.
2. 브라우저가 HTTP 요청 메세지 생성.

- ex. GET /search?q=hello&hl=ko HTTP/1.1 Host: www.google.com

3. SOCKET 라이브러리를 통해 연결상태확인.
  - TCP/IP연결확인후(syn, syn+ack, syn) 데이터를 OS로 전달.
5.  OS에서 TCP/IP 패킷 생성후 HTTP메세지를 포함하여 네트워크 인터페이스로 전달.
6. 네트워크 인터페이스에서 인터넷으로 전달하여 서버로 전송.
7. 서버에서 요청 패킷을 확인후 동일하게 응답패킷을 만들고 인터넷을통해 전달하여 클라이언트에서 응답 패킷을통해 응답메세지(html문서가 포함되어있다.)확인후 브라우저에 렌더링.
