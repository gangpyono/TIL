{
  // 에러핸들링을 어디서해야 의미가 있을까?
  // 에러를 핸들링할떄 무지성으로 발생한 곳에서 처리하려하지말고,
  // 어디서 처리하면 전체적으로 좀더 깔끔한지를 생각하면서 처리하려고하자.
  // 아래의경우에선, 비록 UserService의 login함수에서 최초로 에러를 잡을 수 있지만,
  // App클래스 내부에서  run 부분에서 잡는것이 좀더 의미가 맞을 수 있다.
  class NetworkClient {
    tryConnect(): void {
      throw new Error("no network!!");
    }
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
