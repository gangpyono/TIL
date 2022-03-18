{
  // 타입스크립트에서 catch문을 통해 받는 error는 항상 any타입으로 전달되기떄문에,
  // 에러의 타입을 정해놓고 throw 해도 무시된다.
  // 따라서 error state통해 예상가능한 에러에대해 처리를하고, 예상되지 않는 에러에 대해서만 throw로써 정의하자.

  // ResultState라는 union types를 통해 성공과 실패케이스를 정의한다.
  // 이후 실패케이스에서 예상되는 에러에대해서 정의하고("offline","down","timeout"), 예상되지않는 에러에대해서만 catch문에서 잡힐 수 있도록 작성한다.

  type NetworkErrorState = {
    result: "fail";
    reason: "offline" | "down" | "timeout";
  };

  type SuccessState = {
    result: "success";
  };

  // 예상되는 결과를 정의.
  type ResultState = SuccessState | NetworkErrorState;

  class NetworkClient {
    tryConnect(): ResultState {}
  }

  class UserService {
    constructor(private client: NetworkClient) {}

    login() {
      // try {
      this.client.tryConnect();
      // } catch (error) {
      //    잡은 에러를통해 어떤일을 할  수 있을까?
      //    의미를 찾을 수 있는곳에서 잡자.
      //
      //   console.log("catched!");
      // }

      //login...
    }
  }

  const client = new NetworkClient();
  const service = new UserService(client);

  // service.login();

  class App {
    constructor(private userService: UserService) {}

    run() {
      try {
        this.userService.login();
      } catch (error) {
        // show dialog to user
      }
    }
  }

  const app = new App(service);

  app.run();
}
