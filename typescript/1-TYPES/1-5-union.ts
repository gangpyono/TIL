{
  // Union Types : OR(ts에서의 활용도가 매우 높은 type)
  // 가능한 경우의수 중에서 하나의 타입을 선택하는 방식.
  type Direction = "left" | "right" | "up" | "down"; // Union types

  function move(direction: Direction) {
    console.log(direction);
  }

  move("down");

  type TileSize = 8 | 16 | 32; // Union types
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

  type LoginState = SuccessState | FailState; // Union types

  function login(): LoginState {
    return {
      response: {
        body: "logged in!",
      },
    };
  }

  function printLoginState(state: LoginState) {
    if ("response" in state) {
      console.log(`🎉 ${state.response.body}`);
    } else {
      console.log(`😭 ${state.reason}`);
    }
  }
}
