const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().split("\n");

const testNum = +input.shift();
const testCase = input;

for (let i = 0; i < testNum; i++) {
  const A = testCase[i].split(" ")[0];
  const B = testCase[i].split(" ")[1];
  console.log(solution(A, B));
}

function solution(a, b) {
  const big = Math.max(a, b);
  const small = Math.min(a, b);

  let GCD = 0;
  let LCM = 0;

  function getGCD(num1, num2) {
    if (num2 === 0) {
      GCD = num1;
      return;
    } else {
      getGCD(num2, num1 % num2);
    }
  }

  getGCD(big, small);

  LCM = GCD * (big / GCD) * (small / GCD);

  return LCM;
}
// 노션사용법: 스쿨 언제나 꺼내보는 영상
// 깃허브 강의쿠폰 받기
