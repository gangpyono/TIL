{
  // Discriminated Union(유니언 식별하기) : 공통된 필드를 가지고있는 타입의 Union.

  //  function : login => success , fail
  type SuccessState = {
    result: "success"; // 공통
    response: {
      body: string;
    };
  };

  type FailState = {
    result: "fail"; // 공통
    reason: string;
  };

  type LoginState = SuccessState | FailState; // Discriminated Union

  function login(): LoginState {
    return {
      result: "success",
      response: {
        body: "logged in!",
      },
    };
  }

  // union : 발생할 수 있는 다양한 case중 하나의 틀을 정하고 싶을떄.
  function printLoginState(state: LoginState) {
    if (state.result === "success") {
      // result키 값에 따라 type이 결정된다.
      console.log(`🎉 ${state.response.body}`);
    } else {
      console.log(`😭 ${state.reason}`);
    }
  }
}
