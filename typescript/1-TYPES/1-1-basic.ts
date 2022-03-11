{
  //JavaScript
  // 컴파일 과정에서 target을통해 호환성을 해결할 수 있기때문에 let,const를 쓴다고해서 호환성에대한 문제에데해 걱정하지 말자.

  // let es6
  // let name = "hello";
  // name = "hi";

  // const es6
  // const age = 5;
  // age = 5; // error;

  // * JavaScript
  // * Primitive: number, string,boolean, bigint(더 큰 숫자 다룰떄), symbol,null,undefined
  // * Object: function,array...

  // * typeScript에서는 타입을 설정하면, 이후 다른타입을 담을 수 없다.
  // number
  const num: number = -6;

  // string
  const str: string = "hello";

  //boolean
  const boal: boolean = true;

  //undefined (값이 있는지 없는지 아직 결정되지않은,)
  let name: undefined; // 💩
  let age: number | undefined; // 아직 결정되지 않았을떄.
  age = undefined;
  age = 1;

  function f1(): number | undefined {
    // 무엇인가를 찾는 함수라 가정. 이떄 값을 찾았다면 number, 그렇지않다면 undefined 리턴 정의.
    return undefined; // 못찾았다면.
  }

  //null (좀더 명확히 값이 없음을 명시.)
  let person: null; // 💩
  let person2: string | null; // 유무를 판단할떄.

  // unknown 💩
  // 어떤 값이 담기는지 알 수 없는경우. -> 가능하면 쓰지말자.
  // ts에서 js를 사용할떄 적용.
  // ts에서 js의 라이브러리를 사용할떄 적용시키는방식이지만, 될수 있으면 타입을 정하여 사용하자.
  let notSure: unknown = 0;
  notSure = "he";
  notSure = true;

  // any 💩
  let anything: any = 0; // 어떠한 값이든 수용.
  anything = "hello";

  //void : 함수에서 return을 단순 함수의 종료 의미로 사용할떄.
  function print(): void {
    console.log("hello");
    return;
  }
  let unusable: void = undefined; // 💩

  //never : 함수에서 리턴문이 없을떄 (끝나지 않게 작성해줘야한다.)
  function throwError(message: string): never {
    // message -> server (log)
    throw new Error(message);
    //while(true) {}
    // never가 아닌 케이스에선 에러가 발생한다.(즉 값을 리턴할때.)
  }

  // object  💩
  // 원시타입을 제외한 모든 object타입을 할당할 수 있다.
  // 좀더 구체적인 object를 명시하여 사용하자.
  let obj: object;
  function acceptSomeObject(obj: object) {
    acceptSomeObject({ name: "ellie" });
    acceptSomeObject({ animal: "dog" });
  }
}
