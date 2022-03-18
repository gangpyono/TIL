const fs = require("fs");
const stdin = (
  process.platform === "linux" ? fs.readFileSync("/dev/stdin").toString() : `100 99 1000000000`
).split("\n");

const input = (() => {
  let line = 0;
  return () => stdin[0];
})();

let t = input()
  .split(" ")
  .map((item) => Number(item));

let totalHeight = t[2]; // 정상 높이
const moveUp = t[0]; // 올라가는 거리
const moveDown = t[1]; // 내려가는 거리

let day = 0;

let oneDayMove = moveUp - moveDown;
let remainHeight = totalHeight - moveUp;

if (remainHeight % oneDayMove === 0) {
  day = remainHeight / oneDayMove + 1;
} else {
  day = Math.floor(remainHeight / oneDayMove) + 2;
}

console.log(day);
