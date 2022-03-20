const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

const testCaseNum = +input[0];

for (let i = 1; i <= testCaseNum; i++) {
  const testCase = input[i].split(" ").map((v) => Number(v));
  solution(testCase[0], testCase[1], testCase[2]);
}

function solution(H, W, N) {
  const result = 0;

  let ho = 0;
  let layer = 0;

  if (N % H === 0) {
    ho = N / H;
    layer = H;
  } else {
    ho = Math.floor(N / H) + 1;
    layer = N % H;
  }

  if (ho <= 9) {
    ho = "0" + String(ho);
  }

  console.log(String(layer) + String(ho));

  return result;
}
