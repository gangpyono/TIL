const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");
solution(+input[0], input.slice(1));
function solution(N, arr) {
  let answer = 0;

  for (const word of arr) {
    if (isGroup(word)) answer++;
  }

  console.log(answer);
}

function isGroup(testWord) {
  if (testWord === "") return false;

  const hs = new Map();

  hs.set(testWord[0], 1);

  for (let i = 1; i < testWord.length; i++) {
    if (hs.has(testWord[i])) {
      if (testWord[i - 1] !== testWord[i]) {
        return false;
      }
    } else {
      hs.set(testWord[i], 1);
    }
  }

  return true;
}
