{
  /**
   * Type Assertions ๐ฉ
   * ํ์คํ ๋๋ง ์ฌ์ฉํ ๊ฒ.
   * Type Assertions ์ ๋๋ฌด ๋จ์ฉํ๊ณ ์๋ค๋ฉด ๋ค๋ฅธ ๋ฐฉ๋ฒ์๋ํด ๊ณ ๋ฏผํด๋ณด์.
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
  console.log((wrong as Array<number>).push(1)); // ๐ฑ

  function findNumbers(): number[] | undefined {
    return undefined;
  }

  const numbers = findNumbers()!; // ๋ฌด์กฐ๊ฑด ์ซ์ ๋ฐฐ์ด์ ๋ฐ์๊ฒ์ด๋ผ ์ฅ๋ด.
  numbers.push(2); // ๐ฑ

  const button = document.querySelector("class")!; // ๋ฌด์กฐ๊ฑด ์์๊ฐ ์์๊ฒ์ด๋ผ ์ฅ๋ด.
}
