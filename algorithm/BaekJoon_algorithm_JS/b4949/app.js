const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

for (let i = 0; i < input.length; i++) {
  const testCase = input[i].split("");

  if (testCase.length === 1 && testCase[0] === ".") continue;
  console.log(solution(testCase));
}

function solution(str) {
  let answer = "yes";
  const stack = [];

  for (const x of str) {
    if (x === "[" || x === "(") {
      stack.push(x);
    } else {
      if (x === "]") {
        const popped = stack.pop();
        if (popped === "[") {
          continue;
        } else {
          answer = "no";
          break;
        }
      }

      if (x === ")") {
        const popped = stack.pop();
        if (popped === "(") {
          continue;
        } else {
          answer = "no";
          break;
        }
      }
    }
  }

  if (stack.length > 0) answer = "no";
  return answer;
}
