{
  /**
   * Type Assertions 💩
   * 확실할떄만 사용할것.
   * Type Assertions 을 너무 남용하고있다면 다른 방법에대해 고민해보자.
   */

  function jsStrFunc(): any {
    return "ggg";
  }

  const result = jsStrFunc();
  (result as string).length;

  console.log((result as string).length);
  console.log((<string>result).length);

  const wrong: any = 5;
  console.log(wrong.push(1));
  console.log((wrong as Array<number>).push(1)); // 😱

  function findNumbers(): number[] | undefined {
    return undefined;
  }

  const numbers = findNumbers()!; // 무조건 숫자 배열을 받을것이라 장담.
  numbers.push(2); // 😱

  const button = document.querySelector("class")!; // 무조건 요소가 있을것이라 장담.
}
