const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = +input.shift();
const testCase = [];

for (const x of input) {
  testCase.push(
    x
      .trim()
      .split(" ")
      .map((v) => +v)
  );
}

for (const test of testCase) {
  console.log(solution(test[1], test[0]));
}

function solution(n, r) {
  let answer = 0;
  const dy = Array.from(Array(30), () => Array(30).fill(0));

  function DFS(n, r) {
    if (dy[n][r] > 0) return dy[n][r];
    if (n === r || r === 0) return 1;
    else return (dy[n][r] = DFS(n - 1, r - 1) + DFS(n - 1, r));
  }

  answer = DFS(+n, +r);
  return answer;
}
