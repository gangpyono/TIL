{
  /**
   * Print Loading State
   */
  // function printLoginState(netWorkState: ResourceLoadState) {
  //   if (netWorkState.state === "loading") {
  //     console.log(`👀 ${netWorkState.state}...`);
  //   }
  //   if (netWorkState.state === "success") {
  //     console.log(`😃 ${netWorkState.response.body}`);
  //   }
  //   if (netWorkState.state === "fail") {
  //     console.log(`😱 ${netWorkState.reason}`);
  //   }
  // }
  // if (netWorkState.state === "loading") {
  //   console.log(`👀 ${netWorkState.state}...`);
  // }
  // if (netWorkState.state === "success") {
  //   console.log(`😃 ${netWorkState.response.body}`);
  // }
  // if (netWorkState.state === "fail") {
  //   console.log(`😱 ${netWorkState.reason}`);
  // }
}

type LoadingState = {
  state: "loading";
};

type SuccessState = {
  state: "success";
  response: {
    body: string;
  };
};

type FailState = {
  state: "fail";
  reason: string;
};

type ResourceLoadState = LoadingState | SuccessState | FailState;

function printLoginState(state: ResourceLoadState) {
  switch (state.state) {
    case "loading":
      console.log("👀 loading...");
      break;
    case "success":
      console.log(` 😃 ${state.response.body}`);
      break;
    case "fail":
      console.log(`😱 ${state.reason}`);
      break;
    default:
      throw new Error(`unknown state : ${state}`);
  }
  printLoginState({ state: "loading" }); // 👀 loading...
  printLoginState({ state: "success", response: { body: "loaded" } }); // 😃 loaded
  printLoginState({ state: "fail", reason: "no network" }); // 😱 no network
}
