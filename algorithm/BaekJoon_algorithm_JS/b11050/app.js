const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");
input = input[0];
input = input.split(" ").map((item) => +item);

console.log(solution(input[0], input[1]));

function solution(n, r) {
  let answer = 0;

  function DFS(n, r) {
    if (r === n || r === 0) return 1;
    else return DFS(n - 1, r - 1) + DFS(n - 1, r);
  }

  answer = DFS(n, r);
  return answer;
}
