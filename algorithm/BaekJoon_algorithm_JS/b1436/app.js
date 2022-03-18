const fs = require("fs");
const { CLIENT_RENEG_WINDOW } = require("tls");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");
solution(+input[0]);

function solution(N) {
  let result = 665;
  // 1. 입력 : N번쨰로 작은 666을 포함한 수.
  // 1. 665부터 시작해서 숫자를 1씩 증가시킨다.
  // 2. 증가시키는 과정에서 666이 나타나면, 입력값을 1씩 감소.

  while (N !== 0) {
    result++;
    if (isContinuous(result)) N--;
  }
  console.log(result);
}

function isContinuous(n) {
  let flag = false;

  if (String(n).indexOf("666") !== -1) {
    flag = true;
  }
  return flag;
}
