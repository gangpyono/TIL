const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");
input = input[0];
input = input.split(" ").map((item) => +item);
solution(input[0], input[1]);

function solution(n1, n2) {
  let GCD = 0;
  let LCM = 0;
  for (let i = 1; i <= n1; i++) {
    if (n1 % i === 0 && n2 % i === 0) GCD = i;
  }

  LCM = (n1 * n2) / GCD;

  console.log(GCD);
  console.log(LCM);
}
