{
  // Union Types : OR로 이해하자. (ts에서의 활용도가 매우 높은 type)

  type Direction = "left" | "right" | "up" | "down";
  // 가능한 경우의수 중에서 하나의 값을 선택하는 방식으로 작성하고 싶을떄.
  function move(direction: Direction) {
    console.log(direction);
  }
  move("down");

  type TileSize = 8 | 16 | 32;
  const tile: TileSize = 8;

  //  function : login => success , fail
  type SuccessState = {
    response: {
      body: string;
    };
  };

  type FailState = {
    reason: string;
  };

  type LoginState = SuccessState | FailState;

  function login(): LoginState {
    return {
      response: {
        body: "logged in!",
      },
    };
  }
  // union : 발생할 수 있는 다양한 case중 하나의 틀을 정하고 싶을떄.

  //
  function printLoginState(state: LoginState) {
    if ("response" in state) {
      console.log(`🎉 ${state.response.body}`);
    } else {
      console.log(`😭 ${state.reason}`);
    }
  }
}
