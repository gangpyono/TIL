{
  // type Inference
  // 타입추론 : 타입을 명시하지않아도, 할당된값을 타입스크립트에서 해석해서 타입을 지정해줌.
  // 규모가 커질수록 추론하기가 어렵기때문에 될수 있으면 명시하자.
  // 팀간의 협의를통해 컨벤션으로 만들자.
  let text = "hello";
  // text = 1;     error

  function print(message = "hello") {
    console.log(message);
  }
  print("hello");
  // print(1);  error

  function add(x: number, y: number): number {
    return x + y; // 숫자형으로 추론.
  }

  const result = add(1, 2);
}
