const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = +input.shift();
const testCase = [];

for (const x of input) {
  testCase.push(
    x
      .trim()
      .split(" ")
      .map((v) => +v)
  );
}

testCase.sort((a, b) => {
  if (a[1] !== b[1]) {
    return a[1] - b[1];
  }

  if (a[1] === b[1]) {
    return a[0] - b[0];
  }
});

let answer = "";
for (const x of testCase) {
  answer += x[0] + " " + x[1] + "\n";
}

console.log(answer);
