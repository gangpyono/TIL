// 기존 stack에서 숫자뿐만이아닌 타입에 상관없이 제어할 수 있게 수정해볼것.
// 제네릭 사용.
// 재사용성이 높은 컴포넌트를 만들떄 유용하다.
interface Stack<T> {
  readonly size: number;
  push(value: T): void;
  pop(): T;
}

type StackNode<T> = {
  readonly value: T;
  readonly next?: StackNode<T>;
};

class StackImpl<T> implements Stack<T> {
  private _size: number = 0;
  private head?: StackNode<T>;

  constructor(private capacity: number) {}

  get size() {
    return this._size;
  }

  push(value: T) {
    if (this.size === this.capacity) {
      throw new Error("Stack is full!!");
    }

    const node: StackNode<T> = { value: value, next: this.head };
    this.head = node;
    this._size++;
  }

  pop(): T {
    if (this.head == null) {
      throw new Error("Stack is empty!");
    }

    const node = this.head;
    this.head = node.next;
    this._size--;
    return node.value;
  }
}

const stack = new StackImpl<string>(10);
stack.push("gang1");
stack.push("Bob 2");
stack.push("Steve 3");

while (stack.size !== 0) {
  console.log(stack.pop());
}

const stack2 = new StackImpl<number>(10);
stack2.push(1);
stack2.push(2);
stack2.push(3);

while (stack2.size !== 0) {
  console.log(stack2.pop());
}

// class StackMaker {
//   private stack: string = "";

//   pop() {
//     if (this.stack.length === 0) {
//       throw new Error("스택이 비었습니다.");
//     }

//     const popped = this.stack[this.stack.length - 1];
//     let newStack: string = "";
//     for (let i = 0; i < this.stack.length - 1; i++) {
//       newStack += this.stack[i];
//     }

//     this.stack = newStack;
//     return popped;
//   }

//   push(char: string) {
//     this.stack += char;
//   }

//   stackPrint() {
//     console.log(this.stack);
//   }
// }

// const bucket = new StackMaker();
// bucket.push("aa");
// bucket.stackPrint();
// bucket.pop();
// bucket.stackPrint();
// bucket.push("bc");
// bucket.stackPrint();
