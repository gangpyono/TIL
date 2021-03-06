{
  //   // JavaScript ๐ฉ
  //   // ํ์์ด ์ง์ ๋์ด์์ง์์, ์ด๋ค ๊ฐ์ ๋ค๋ฃจ๊ณ  ์ด๋ค ๊ธฐ๋ฅ์ ํ๋ ํจ์์ธ์ง ํ์ํ๊ธฐ๊ฐ ์ด๋ ต๋ค.
  //   function jsAdd(num1, num2) {
  //     return num1 + num2;
  //   }

  //   // typeScript โจ
  //   // ์ซ์๋ค์ ๋ฐ๊ณ , ์ซ์๋ฅผ ๋ฆฌํดํจ์ ๋ช์ํด์ค.
  //   function add(num1: number, num2: number): number {
  //     return num1 + num2;
  //   }
  //   // -------------
  //   // JavaScript ๐ฉ
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

  // js์ต์ ๋ฌธ๋ฒ + ts์์๋ง ๋์ํ๋ ๋ฌธ๋ฒ
  //Optional parameter (์ธ์๋ฅผ ์ ํ์ ์ผ๋ก ๋ฐ๊ณ ์ถ์๋)
  function printName(firstName: string, lastName?: string): void {
    console.log(firstName);
    console.log(lastName);
  }

  printName("Steve", "jobs");
  printName("Noh"); // ๋๋ฒ์จฐ ์ธ์๋ก undefined ์ ๋ฌ๋จ.
  printName("Noh", undefined);

  // Default parameter
  function printMessage(message: string = "default message") {
    console.log(message);
  }
  printMessage();

  //Rest parameter
  function addNumbers(...nums: number[]): number {
    // numberํ์์ ์ธ์๋ฅผ ๋ฐฐ์ด๋ก ๋ฐ๋๋ค.
    return nums.reduce((a, b) => a + b);
  }

  console.log(addNumbers(1, 2));
  console.log(addNumbers(1, 2, 3, 4));
  console.log(addNumbers(1, 2, 3, 4, 5, 0));
}
