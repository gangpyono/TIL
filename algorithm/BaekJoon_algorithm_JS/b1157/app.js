const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");
solution(input[0]);
function solution(str) {
  let strUpperCase = str.toUpperCase();
  let hs = new Map();

  for (const x of strUpperCase) {
    if (hs.has(x)) {
      hs.set(x, hs.get(x) + 1);
    } else {
      hs.set(x, 1);
    }
  }

  let biggest = 0;
  for (const value of hs.values()) {
    if (biggest <= value) biggest = value;
  }

  let count = 0;
  for (const value of hs.values()) {
    if (biggest === value) {
      count++;
    }
  }

  if (count > 1) {
    console.log("?");
  } else {
    for (const [key, value] of hs) {
      if (biggest === value) {
        console.log(key);
      }
    }
  }
}
