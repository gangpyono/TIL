const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
const total = +input.shift();
const con = +input.shift();
input = input.map((v) => v.split(" ").map((v) => +v));

function sol(total, c, arr) {
  let answer = 0;

  const graph = Array.from({ length: total + 1 }, () => Array());
  const ch = Array.from({ length: total + 1 }, () => false);

  for (const [a, b] of arr) {
    graph[a].push(b);
  }

  for (const [a, b] of arr) {
    graph[b].push(a);
  }

  function DFS(L) {
    if (ch[L]) {
      return;
    } else {
      ch[L] = true;
      answer += 1;
      for (const s of graph[L]) {
        if (ch[s] === false) {
          DFS(s);
        }
      }
    }
  }

  DFS(1);
  return answer - 1;
}

console.log(sol(total, con, input));
