const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");
input = input[0];
input = input.split(" ").map((item) => +item);

solution(input[0], input[1]);
function solution(N, M) {
  const arr = Array.from({ length: N }, (_, i) => i + 1);

  const temp = Array.from({ length: M }, () => 0);

  function DFS(L, s) {
    if (L === M) {
      console.log(...temp.sort((a, b) => a - b));
      return;
    } else {
      for (let i = s; i < N; i++) {
        temp[L] = arr[i];
        DFS(L + 1, i + 1);
      }
    }
  }

  DFS(0, 0);
}
