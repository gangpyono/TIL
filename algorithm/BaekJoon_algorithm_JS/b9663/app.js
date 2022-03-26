const fs = require("fs");
const { CLIENT_RENEG_WINDOW } = require("tls");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");
solution(+input[0]);

function solution(N) {
  // 열 기준.
  const arr = Array(N).fill(0);
  let cnt = 0;

  function DFS(L) {
    if (L === N) {
      cnt++;
      return;
    } else {
      for (let i = 0; i < N; i++) {
        arr[L] = i;
        if (Possibility(L)) {
          DFS(L + 1);
        }
      }
    }
  }

  DFS(0);

  function Possibility(col) {
    for (let i = 0; i < col; i++) {
      if (arr[col] === arr[i]) return false;
      else if (Math.abs(col - i) === Math.abs(arr[col] - arr[i])) return false;
    }

    return true;
  }

  console.log(cnt);
}
