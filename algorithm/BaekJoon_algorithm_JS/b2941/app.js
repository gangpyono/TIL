const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");
solution(input[0]);

function solution(str) {
  let answer = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === "c") {
      if (str[i + 1] === "=" || str[i + 1] === "-") {
        i++;
      }
    } else if (str[i] === "d") {
      if (str[i + 1] === "z" && str[i + 2] === "=") {
        i = i + 2;
      }
      if (str[i + 1] === "-") {
        i++;
      }
    } else if (str[i] === "l" && str[i + 1] === "j") i++;
    else if (str[i] === "n" && str[i + 1] === "j") i++;
    else if (str[i] === "s" && str[i + 1] === "=") i++;
    else if (str[i] === "z" && str[i + 1] === "=") i++;

    answer++;
  }

  console.log(answer);
}
