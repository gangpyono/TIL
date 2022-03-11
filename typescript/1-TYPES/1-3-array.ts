{
  //Array
  // 타입을 설정하는 두가지 방법. (둘다 모두 사용된다.)
  const fruits: string[] = ["🍅", "🍌"];
  const scroes: Array<number> = [1, 3, 4];
  // 차이점
  // 인자를 읽기 전용으로 전달하려면 첫번쨰 표기법을 사용해야한다.
  function printArray(fruits: readonly string[]) {}

  //Tuple
  // 서로 다른 타입을 함꼐 가질수 있는 배열.
  let student: [string, number];
  student = ["name", 123];
  student[0]; // "name"
  student[1]; // 123

  // Tuple자체를 선호하지않는다.
  // 이유
  //1. 배열의 요소에 접근할떄 배열의 인덱스로 표기하는 가독성문제로, 선언된 부분을 직접 확인해야 어떤
  //   값에 접근하는지를 알 수 있기떄문에
  // -> interface, type alias, class 선호.

  // Tuple의 사용 예시
  // 리액트의 React.useState -> 튜플로써 작성됨 const [state,setState] = React.useState(0);  (좋은 사용예.)
  // 하지만 동적으로 개발자의 의해 이름을 지어서 사용하는경우(React.useState)가 아니라면 지양하자.
  // + 다른 interface, type alias, class로 쓸수있는 부분을 굳이 tuple로써 사용하지 말자.
}
