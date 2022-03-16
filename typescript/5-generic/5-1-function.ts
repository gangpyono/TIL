{
  // 제네릭
  // 타입을 함수의 파라미터처럼 받아 정의함으로써, 재사용성을 높힐 수 있다.

  // 숫자밖에 확인하지못함. (숫자 or null)
  function checkNotNullBad(arg: number | null): number {
    if (arg == null) {
      throw new Error("not valid number!");
    }
    return arg;
  }

  // 여러타입의 값을 인자로 받을 수 는 있지만, 타입을 보장받지 못함.
  function checkoutNotNullAnyBad(arg: any | null): any {
    if (arg == null) {
      throw new Error("not valid number!");
    }
    return arg;
  }

  // ->  제네릭을 이용하여 타입에대한 보장을 받으면서 여러 타입의 값을 받을 수 있게된다.
  // 함수에서 사용할 타입을 <> 내부에 표기.
  // 인자와 출력값의 타입을 설정해줌으로써, any와는 달리 인자와 출력의 타입이 같은지에대한 보장을 받을 수 있게된다.
  function checkNotNull<T>(arg: T | null): T {
    if (arg == null) {
      throw new Error("not valid number!");
    }
    return arg;
  }

  const number = checkNotNull(123);
  const boal: boolean = checkNotNull(true);
}
