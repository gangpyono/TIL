{
  // Discriminated Union : 동일한 타입에서 공통된 키를 가진 union

  //  function : login => success , fail
  type SuccessState = {
    result: "success"; // Discriminated Union
    response: {
      body: string;
    };
  };

  type FailState = {
    result: "fail"; // Discriminated Union
    reason: string;
  };

  type LoginState = SuccessState | FailState;

  function login1(): LoginState {
    return {
      result: "success",
      response: {
        body: "logged in!",
      },
    };
  }

  // union : 발생할 수 있는 다양한 case중 하나의 틀을 정하고 싶을떄.
  function printLoginState(state: LoginState) {
    // LoginState중에서 공통값 result를 각 타입에 설정해줌.
    if (state.result === "success") {
      console.log(`🎉 ${state.response.body}`);
    } else {
      console.log(`😭 ${state.reason}`);
    }
  }
}
