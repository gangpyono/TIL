const fs = require("fs");
const { CLIENT_RENEG_WINDOW } = require("tls");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");
solution(+input[0]);

function solution(total) {
  const SMALL = 3;
  const LARGE = 5;
  let bucket_count = 0;

  // 3과 5의 공배수 or 5의 배수
  if ((total % SMALL === 0 && total % LARGE === 0) || total % LARGE === 0) {
    const large_count = Math.floor(total / LARGE);
    bucket_count += large_count;
  } else {
    while (total !== 0) {
      //1차 확인
      if (total < SMALL) {
        console.log(-1);
        return;
      }

      total = total - SMALL;
      bucket_count++;

      //2차 확인
      if (total % LARGE === 0) {
        const large_count = Math.floor(total / LARGE);
        bucket_count += large_count;
        total -= LARGE * large_count;
      }
    }
  }
  console.log(bucket_count);
}
