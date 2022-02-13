# 초기 셋팅.

```
yarn add graphql graphql-request graphql-tag
```

- graphql : graphql
- graphql-request : graphql요청할떄 사용하는 라이브러리.
- graphql-tag : graphql를 자바스크립트로 치환해주는 라이브러리.
  <br></br>
  <br></br>

# Query,Mutation 설정

- 서버에서 작성된 schema의 type을 토대로, query와 mutaion을 작성할 수있다. 이떄 한 type에대해서 원하는 데이터만 묶어서 정의 할 수 있다.(이부분이 restAPI와의 결정적인 차이)
  <br></br>
  <br></br>

# 요청 보내기

- URL을 로컬환경 8000포트로 가정하면 http://localhost:8000/graphql로 통일하고, graphql-request의 request함수를 통해 URL,query(혹은 mutation) ,변수(필요하다면)를 인자로 전달하여 호출하여 데이터를 받아온다.
  <br></br>
  <br></br>

## 클라이언트에서 rest api -> graphql로 변경하면서 느낀점

- 요청 URL이 하나로 통일된다.
- 요청하고자하는 type에대해서 전체 데이터가아닌 필요한 데이터만 따로 정의후 요청을 보낼 수 있다.
