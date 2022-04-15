const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
let input1 = input.shift().split(" ");
let a = +input1[0];
let b = +input1[1];
input = input.map((v) => +v);

console.log(solution(a, b, input));

function solution(h, c, arr) {
  let answer = 0;
  arr.sort((a, b) => a - b);

  let lt = 1;
  let rt = arr[arr.length - 1] - arr[0];

  while (lt <= rt) {
    let mid = Math.floor((lt + rt) / 2);
    let count = c - 1;
    let point = arr[0]; // 맨앞에 무조건 넣는다.

    for (let i = 1; i < arr.length; i += 1) {
      if (arr[i] - point >= mid) {
        count -= 1;
        point = arr[i]; // 만족한다면 비교대상을 만족하는 위치로 변경.
      }
      if (count === 0) {
        // 다놨으면 최대가능 거리 교체후 탈출.
        answer = Math.max(answer, mid);
        break;
      }
    }

    if (count === 0) {
      lt = mid + 1;
    } else {
      rt = mid - 1;
    }
  }
  return answer;
}
