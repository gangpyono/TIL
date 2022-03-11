{
  //   // JavaScript 💩
  //   // 타입이 지정되어있지않아, 어떤 값을 다루고 어떤 기능을 하는 함수인지 파악하기가 어렵다.
  //   function jsAdd(num1, num2) {
  //     return num1 + num2;
  //   }

  //   // typeScript ✨
  //   // 숫자들을 받고, 숫자를 리턴함을 명시해줌.
  //   function add(num1: number, num2: number): number {
  //     return num1 + num2;
  //   }
  //   // -------------
  //   // JavaScript 💩
  //   function jsFetchNum(id) {
  //     // code ..
  //     // code ..
  //     return new Promise((resolve, reject) => {
  //       resolve(100);
  //     });
  //   }
  //   // typeScript
  //   function FetchNum(id: string): Promise<number> {
  //     // code ..
  //     // code ..
  //     return new Promise((resolve, reject) => {
  //       resolve(100);
  //     });
  //   }

  // js최신문법 + ts에서만 동작하는 문법
  //Optional parameter (인자를 선택적으로 받고싶을떄)
  function printName(firstName: string, lastName?: string): void {
    console.log(firstName);
    console.log(lastName);
  }

  printName("Steve", "jobs");
  printName("Noh"); // 두번쨰 인자로 undefined 전달됨.
  printName("Noh", undefined);

  // Default parameter
  function printMessage(message: string = "default message") {
    console.log(message);
  }
  printMessage();

  //Rest parameter
  function addNumbers(...nums: number[]): number {
    // number타입의 인자를 배열로 받는다.
    return nums.reduce((a, b) => a + b);
  }

  console.log(addNumbers(1, 2));
  console.log(addNumbers(1, 2, 3, 4));
  console.log(addNumbers(1, 2, 3, 4, 5, 0));
}
