# HTTP method 활용

- 클라이언트에서 서버로 데이터 전송
- 4가지 상황
- HTTP API 설계 예시
  <br></br>

## 1. 클라이언트에서 서버로 데이터를 전송하는 방식은 크게 2가지.

### 1) 쿼리파라미터를 통한 데이터 전송

- GET
- ex)정렬 필터(검색어)
  <br></br>

### 2) 메세지 바디를 통한 데이터 전송

- POST,PUT,PATCH
- 회원가입, 상품주문, 리소스 등록, 리소스 변경
  <br></br>
  <br></br>

## 2. 4가지 상황

### 1) 정적 데이터 조회 할때 (쿼리 파라미터 미사용)

<img width="800" alt="스크린샷 2022-01-12 오후 12 09 08" src="https://user-images.githubusercontent.com/58588011/149057050-e5a726ed-83d9-460f-9195-31a2b3ac2594.png">

- 이미지, 정적 텍스트 문서
- 조회는 GET 사용
- 정적 데이터는 일반적으로 쿼리 파라미터 없이 리소스 경로로 단순하게 조회 가능
  <br></br>

### 2) 동적 데이터 조회 할때

<img width="800" height = "210" alt="스크린샷 2022-01-12 오후 12 10 33" src="https://user-images.githubusercontent.com/58588011/149057205-877d2c75-42cd-4ce7-a67a-94201abd43d1.png">

- 주로 검색, 게시판 목록에서 정렬 필터(검색어)
- 조회 조건을 줄여주는 필터, 조회 결과를 정렬하는 정렬 조건에 주로 사용
- 조회는 GET 사용
- GET은 쿼리 파라미터 사용해서 데이터를 전달
  <br></br>

### 3) HTML Form을 통한 데이터 전송할떄

#### i) get

<img width="800" alt="스크린샷 2022-01-12 오전 9 47 39" src="https://user-images.githubusercontent.com/58588011/149044059-bd0ac0e3-61a2-4d26-bbe8-425ee574648b.png">

#### ii) post

<img width="800" alt="스크린샷 2022-01-12 오전 9 47 14" src="https://user-images.githubusercontent.com/58588011/149044028-3a5cdf19-0265-4a28-b752-0f799fe39b00.png">

#### iii) multipart/form-data

<img width="800" alt="스크린샷 2022-01-12 오전 11 02 12" src="https://user-images.githubusercontent.com/58588011/149050706-f5261f85-5549-433c-ae6e-88e07a37efbf.png">

### 정리

- HTML Form submit시 POST 전송
  - 예) 회원 가입, 상품 주문, 데이터 변경
- Content-Type: application/x-www-form-urlencoded 사용
  - form의 내용을 메시지 바디를 통해서 전송(key=value, 쿼리 파라미터 형식)
  - 전송 데이터를 url encoding 처리
    - 예) abc김 -> abc%EA%B9%80
- HTML Form은 GET 전송도 가능
- Content-Type: multipart/form-data
  - 파일 업로드 같은 바이너리 데이터 전송시 사용
  - 다른 종류의 여러 파일과 폼의 내용 함께 전송 가능(그래서 이름이 multipart)
- 참고: HTML Form 전송은 **GET, POST만 지원**
  <br></br>

### 4) HTTP API를 통한 데이터 전송할떄

- 서버 to 서버
  - 백엔드 시스템 통신
- 앱 클라이언트
  - 아이폰, 안드로이드
- 웹 클라이언트
  - HTML에서 Form 전송 대신 자바 스크립트를 통한 통신에 사용(AJAX)
  - 예) React, VueJs 같은 웹 클라이언트와 API 통신
- POST, PUT, PATCH: 메시지 바디를 통해 데이터 전송
- GET: 조회, 쿼리 파라미터로 데이터 전달
- Content-Type: application/json을 주로 사용 (사실상 표준)
  - TEXT, XML, JSON 등등

## 3. HTTP API 설계 예시

### 1) HTTP API - 컬렉션형식

- 서버가 리소스 URI 결정
- POST 기반 등록

  - 예) 회원 관리 API 제공
  - 클라이언트는 등록될 리소스의 URI를 모른다.
    - 회원 등록 /members -> POST
    - POST /members
  - 서버에서 리소스 URI를 만들고 보내준다.(응답메세지의 Location or 바디에 id항목을 추가해 전달.)
    - HTTP/1.1 201 Created Locaotion : /members/100

- 컬렉션이란(Collection)
  - 서버가 관리하는 리소스 디렉토리.
  - 서버가 리소스의 URI를 생성하고 관리.
  - 여기서 컬렉션은 /members.

### 2) HTTP API - 스토어형식

- 클라이언트가 리소스 URI 결정.
- PUT 기반 등록.

  - 예) 정적 컨텐츠 관리, 원격 파일 관리
  - 클라이언트가 리소스 URI를 알고 있어야 한다.
    - 파일 등록 /files/{filename} -> PUT
    - PUT /**files/star.jpg**
  - 클라이언트가 직접 리소스의 URI를 지정한다.

- 스토어란
  - 클라이언트가 관리하는 리소스 저장소.
  - 클라이언트가 리소스의 URI를 알고 관리.
  - 여기서 스토어는 /files.

### 3) HTML FORM 사용

- HTML FORM은 GET, POST만 지원.
- AJAX 같은 기술을 사용해서 해결 가능.
- 여기서는 순수 HTML, HTML FORM 만 사용했을때를 가정하고 설명한다.
- GET, POST만 지원하므로 제약이 있음.
- 컨트롤 URI 사용.
  - **동사**로된 리소스 경로 사용. (POST의 /new, /edit, /delete)
  - HTTP 메서드로 해결하기 애매한 경우 사용(HTTP API포함.)
  - 최소화하여 사용한다고 생각.
    - 회원 목록 /members/new -> GET
    - 회원 등록 폼 /members/new -> GET
    - 회원 등록 /members/new -> POST
    - 회원 조회 /members/{id} -> GET
    - 회원 수정 폼 /members/{id}/edit -> GET
    - 회원 수정 /members/{id}/edit -> POST (수정 폼과 일치선호)
    - 회원 삭제 /members/{id}/delete -> POST (어쩔수 없이 컨트롤 URI사용)

