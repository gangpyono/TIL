const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");
const testNum = +input.shift();

function solution(N, testCase) {
  const stack = [];
  const answer = [];
  for (const operator of testCase) {
    if (operator.indexOf("push") !== -1) {
      const target = operator.split(" ")[1];
      stack.push(target);
      continue;
    }
    if (operator.indexOf("pop") !== -1) {
      const popped = stack.pop();
      if (popped) {
        answer.push(popped);
      } else {
        answer.push(-1);
      }
      continue;
    }
    if (operator.indexOf("size") !== -1) {
      answer.push(stack.length);
      continue;
    }
    if (operator.indexOf("empty") !== -1) {
      if (stack.length > 0) answer.push(0);
      else answer.push(1);
      continue;
    }
    if (operator.indexOf("top") !== -1) {
      if (stack.length > 0) answer.push(stack[stack.length - 1]);
      else answer.push(-1);
      continue;
    }
  }

  console.log(answer.join(`\n`));
}

solution(testNum, input);
