const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs
  .readFileSync(filePath)
  .toString()
  .split("\n")
  .map((v) => Number(v));

const testCase = +input.shift();

for (let i = 0; i < testCase; i++) {
  solution(input[i]);
}

function solution(N) {
  const countArr = Array.from({ length: N + 1 }, () => {
    return { A: 0, B: 0 };
  });

  countArr[0].A = 1;
  countArr[0].B = 0;
  if (N === 0) {
    console.log(countArr[0].A, countArr[0].B);
    return;
  } else {
    countArr[1].A = 0;
    countArr[1].B = 1;

    if (N === 1) {
      console.log(countArr[1].A, countArr[1].B);
      return;
    }

    for (let i = 2; i <= N; i++) {
      countArr[i].A = countArr[i - 1].A + countArr[i - 2].A;
      countArr[i].B = countArr[i - 1].B + countArr[i - 2].B;
    }
    console.log(countArr[N].A, countArr[N].B);
    return;
  }
}
