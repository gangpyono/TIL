# GraphQL이란.

- API를 만들떄 사용할 수 있는 쿼리언어.

## GraphQL의 장점.

- 기존의 REST API를 사용하여 API를 구현할 경우 발생할 수 있는 overfetching 과 underfetching
  을 해결해주며, 기능이 추가될떄마다 새로운 API를 작성해야하는 수고를 덜어줄수있다.
  - overfetching : 요청 후에 돌아오는 응답에, 필요 이상의 데이터들이 들어 있은것을 의미. -> 불필요한 데이터를 불러오기떄문에 낭비 발생.
  - underfetching : 요청 후에 돌아오는 응답에, 필요한 데이터보다 적게 들어있는것을 의미 -> 필요한 데이터를 완성하기위해 여러요청을 보내게되어 낭비가 발생.

## GraphQL의 구조

### 쿼리(query)

- 데이터를 읽는데사용 (R)

### 뮤테이션(mutation)

- 데이터를 변조하는데 사용(CUD)


## Apollo

- GraphQL를 사용 할 수있는 환경.
- ApolloServer 생성자 함수에 typeDefs,resolvers를 전달하여 Apollo서버 생성.
  - typeDefs
    - 데이터를 주고받는 형식 설정.
    - gql(template literal tag)로 생성됨.
  - resolvers : 데이터반환,DB접근에 해당하는 함수들의 집합. (express에서 routes폴더역할.)
