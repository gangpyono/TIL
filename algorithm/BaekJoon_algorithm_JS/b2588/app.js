const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().split("\n");

function solution(A, B) {
  const n1 = A * (B % 10);
  const n2 = A * (Math.floor(B / 10) % 10);
  const n3 = A * Math.floor(B / 100);
  console.log(n1);
  console.log(n2);
  console.log(n3);
  console.log(n1 + n2 * 10 + n3 * 100);
}

solution(+input[0], +input[1]);
