# 초기 셋팅 (express환경 가정)

```
yarn add graphql apollo-server apollo-server-express
```

- graphql : graphql 설치
- apollo-server : graphql을 사용할 수 있도록 해주는 환경설정
- apollo-server-express : express환경에서 apollo-server를 사용할 수 있게 해줌.

# schema 설정

- schema란 서버와 클라이언트가 데이터를 주고받는 형식을 의미한다. [예시코드](https://github.com/gangpyono/express_react-practice/blob/main/server/src/schema/message.js)
  - rest API의 api명세서를 작성하는것과 비슷한 느낌(?)

# resolvers 설정

- resolvers란 Query와 Mutation으로 구성되는, 실질적으로 데이터를 조작하는 역할을하는 resolver들의 집합이다.(express의 routes폴더 역할.) [예시코드](https://github.com/gangpyono/express_react-practice/blob/main/server/src/resolvers/messages.js)

# playGround

- postman과같은 api의 요청과 응답을 확인해볼수 있는 공간이다.
- 로컬에서 서버를 실행할시,ex) localhost:8000/graphql 과같이 요청을보내면 접속할 수 있다.

## 서버에서 rest api -> graphql로 변경하면서 느낀점

1. 우선 Query 와 Mutation 이 두가지로 데이터를 다룬다는점이 형식에서 좀더 자유롭고 간결하다.
2. 서버에서 클라이언트로부터 오는 데이터를 body, params, query 등으로 구분하여 받지 않아 가독성이 좋다.
3. db에 접근할 일이 있을경우 resolver의 인자로 쉽게 가능하다.
