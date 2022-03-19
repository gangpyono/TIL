const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().split("\n");

const divisors_num = +input[0];
const divisors = input[1].split(" ").map((v) => Number(v));

function solution(divisors_num, divisors) {
  divisors.sort((a, b) => a - b);

  answer = divisors[0] * divisors[divisors.length - 1];
  return answer;
}

console.log(solution(divisors_num, divisors));
