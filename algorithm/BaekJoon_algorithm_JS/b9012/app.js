const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = +input.shift();

for (let i = 0; i < N; i++) {
  console.log(solution(input[i]));
}
function solution(testCase) {
  const stack = [];
  let answer = "YES";

  for (const x of testCase) {
    if (x === "(") stack.push(x);

    if (x == ")") {
      if (stack.length === 0) return (answer = "NO");
      stack.pop();
    }
  }

  if (stack.length > 0) return (answer = "NO");
  return answer;
}
