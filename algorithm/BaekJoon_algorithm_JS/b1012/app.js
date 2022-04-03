const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const TC = +input.shift();
let data = input;
const maps = [];

for (let i = 0; i < TC; i++) {
  let [M, N, K] = data.shift().split(" ").map(Number);
  let map = Array.from({ length: N }).map((row) => (row = Array.from({ length: M }).fill(0)));

  for (let i = 0; i < K; i++) {
    let [X, Y] = [+data[i].split(" ")[0], +data[i].split(" ")[1]];
    map[Y][X] = 1;
  }

  maps.push(map);
  data.splice(0, K);
}

function solution(arr) {
  let answer = 0;

  const N = arr.length; // 세로길이
  const M = arr[0].length; // 가로길이

  // 북 동 남 서
  const dy = [-1, 0, 1, 0];
  const dx = [0, 1, 0, -1];

  function DFS(y, x) {
    let ny;
    let nx;
    for (let k = 0; k < 4; k += 1) {
      ny = y + dy[k];
      nx = x + dx[k];
      if (nx < M && nx >= 0 && ny >= 0 && ny < N && arr[ny][nx] === 1) {
        arr[ny][nx] = 0;
        DFS(ny, nx);
      }
    }
  }

  for (let i = 0; i < N; i += 1) {
    for (let j = 0; j < M; j += 1) {
      if (arr[i][j] === 1) {
        arr[i][j] = 0;
        answer += 1;
        DFS(i, j);
      }
    }
  }

  return answer;
}

maps.forEach((farm) => {
  console.log(solution(farm));
});
