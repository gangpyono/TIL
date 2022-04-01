const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = +input[0];
const paper = input
  .slice(1)
  .map((v) => v.split(" "))
  .map((v) => v.map((v) => v.split("")))
  .flat()
  .map((v) => v.map((v) => +v));

function solution(N, arr) {
  let answer = [];

  const nx = [0, 1, 0, -1];
  const ny = [1, 0, -1, 0];

  let cnt = 0;

  function DFS(y, x) {
    if (x < 0 || x >= N || y < 0 || y >= N) {
      return;
    } else {
      for (let k = 0; k < 4; k++) {
        let dy = y - ny[k];
        let dx = x + nx[k];
        if (dy >= 0 && dy < N && dx >= 0 && dx < N && arr[dy][dx] === 1) {
          arr[dy][dx] = 0;
          cnt += 1;
          DFS(dy, dx);
        }
      }
    }
  }

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (arr[i][j] === 1) {
        cnt = 1;
        arr[i][j] = 0;
        DFS(i, j);
        answer.push(cnt);
      }
    }
  }

  answer.sort((a, b) => a - b);
  answer.unshift(answer.length);
  console.log(answer.join("\n"));
  return;
}

solution(n, paper);
