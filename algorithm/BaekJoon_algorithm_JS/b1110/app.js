const fs = require("fs");
const { CLIENT_RENEG_WINDOW } = require("tls");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");
solution(+input[0]);

function solution(N) {
  let num = N; // 최초 입력값부터 시작.
  let cnt = 0;

  while (1) {
    // 찾을떄까지 돈다.
    let a = num % 10; // 일의자리.
    let b = Math.floor(num / 10); // 십의자리.

    const c = a + b;
    const newNum = a * 10 + (c % 10);
    cnt++;
    if (newNum === N) break;

    num = newNum;
  }

  console.log(cnt);
}
