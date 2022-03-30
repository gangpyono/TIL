const { AssertionError } = require("assert");
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");
input = input[0];
input = input.split(" ").map((item) => +item);
class Queue {
  constructor() {
    this.queue = [];
    this.rear = 0;
    this.front = 0;
  }

  enqueue(value) {
    this.queue[this.rear++] = value;
  }

  dequeue() {
    const value = this.queue[this.front];
    delete this.queue[this.front];
    this.front++;
    return value;
  }

  size() {
    return this.rear - this.front;
  }
}
function solution(N, K) {
  const queue = new Queue();
  let cnt = 0;
  const stack = [];
  for (let i = 0; i < N; i++) {
    queue.enqueue(i + 1);
  }

  while (queue.size() > 0) {
    const value = queue.dequeue();
    cnt++;
    if (cnt !== K) {
      queue.enqueue(value);
    } else {
      cnt = 0;
      stack.push(value);
    }
  }

  stack[0] = "<" + String(stack[0]);
  stack[stack.length - 1] = String(stack[stack.length - 1]) + ">";

  return stack.join(", ");
}

console.log(solution(input[0], input[1]));
