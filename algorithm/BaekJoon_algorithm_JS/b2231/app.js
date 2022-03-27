const fs = require("fs");
const { CLIENT_RENEG_WINDOW } = require("tls");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");
console.log(solution(+input[0]));

function solution(N) {
  let answer = 0;
  for (let i = 0; i < N; i++) {
    let number = i;
    let sum = 0;

    while (number != 0) {
      sum += number % 10; // 각자리 수의 합.
      number = Math.floor(number / 10);
    }

    if (sum + i === N) return (answer = i);
  }
  return answer;
}
