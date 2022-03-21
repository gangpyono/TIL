const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");
solution(+input[0]);

function solution(num) {
  const answer = {
    count: 0,
    trace: [],
  };

  function hanoi(N, start, to, via) {
    answer.count++;
    if (N === 1) {
      return move(start, to);
    } else {
      hanoi(N - 1, start, via, to);
      move(start, to);
      hanoi(N - 1, via, to, start);
    }
  }

  function move(start, to) {
    answer.trace.push(`${start} ${to}`);
    return;
  }

  hanoi(num, 1, 3, 2);
  console.log(answer.count);
  console.log(answer.trace.join("\n"));
  // 하노이탑 참고링크
  // https://shoark7.github.io/programming/algorithm/tower-of-hanoi
}
