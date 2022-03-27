const fs = require("fs");
const { CLIENT_RENEG_WINDOW } = require("tls");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");
solution(input[0]);

function solution(str) {
  let answer = 0;
  let temp = str.split("-");

  temp = temp.map((v) => {
    if (v.indexOf("+")) {
      let temp = v.split("+");
      let sum = 0;
      for (const num of temp) {
        sum += +num;
      }
      return sum;
    } else {
      return v;
    }
  });

  answer += temp[0];
  for (let i = 1; i < temp.length; i++) {
    answer -= +temp[i];
  }

  console.log(answer);
}
