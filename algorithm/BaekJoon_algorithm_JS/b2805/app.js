const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");
const input1 = input[0].split(" ").map((v) => Number(v));
const input2 = input[1].split(" ").map((v) => Number(v));
// input = input.split(" ").map((item) => +item);

console.log(solution(input1[0], input1[1], input2));

function solution(N, M, trees) {
  let answer = 0;
  // N : 나무수
  // M : 가져갈 나무높이

  // 설정할 수있는 톱의 높이  mid 범위 : 0 ~ 20
  let lt = 0;
  let rt = Math.max(...trees);

  while (lt <= rt) {
    let mid = Math.floor((lt + rt) / 2);

    let amount = 0;
    for (const tree of trees) {
      if (mid < tree) amount += tree - mid;
    }

    if (M <= amount) {
      if (answer < mid) answer = mid;
      lt = mid + 1;
    } else {
      rt = mid - 1;
    }
  }

  //1. M높이 가져가기위한 절단기 높이 최댓값은?

  return answer;
}
