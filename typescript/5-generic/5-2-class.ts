// 클래스에서의 제네릭 사용
// either : A or B
interface Either<L, R> {
  left: () => L;
  right: () => R;
}
// 할당받는 값의 타입으로 정의된다.
class SimpleEither<L, R> implements Either<L, R> {
  constructor(private leftValue: L, private rightValue: R) {}
  left(): L {
    return this.leftValue;
  }

  right(): R {
    return this.rightValue;
  }
}

const either: Either<number, number> = new SimpleEither(4, 5);
either.left(); // 4
either.right(); // 5
const best = new SimpleEither({ name: "noh" }, "hello");
best.left(); // {name : "noh"}
best.right(); // "hello"
