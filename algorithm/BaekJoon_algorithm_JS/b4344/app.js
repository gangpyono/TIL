const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().split("\n");
const inputC = +input[0];
const inputTestCase = [];
for (let i = 1; i <= inputC; ++i) {
  const arr = input[i].split(" ").map((item) => +item);
  const newArr = [];
  for (let i = 1; i <= arr[0]; ++i) {
    newArr.push(arr[i]);
  }
  const testCase = {
    N: arr[0],
    arr: newArr,
  };
  inputTestCase.push(testCase);
}

solution(inputC, inputTestCase);
function solution(C, testCase) {
  for (let i = 0; i < C; i++) {
    console.log(output(testCase[i].N, testCase[i].arr));
  }

  function output(cnt, students) {
    let answer = 0;

    // 키 평균.
    let sum = 0;
    for (const x of students) {
      sum += x;
    }

    const average = sum / cnt; // 1) 평균이 소수점일수도있음.

    // 평균 넘는 학생 수
    let overCnt = 0;
    for (const x of students) {
      if (average < x) overCnt++;
    }

    // 비율
    answer = ((overCnt / cnt) * 100).toFixed(3);
    // 2) toFixed는 숫자형을 받고, 문자열을 출력한다.
    // 소수점 3째까지 고정 노출(4번쨰에서 반올림)
    answer = answer + "%";
    return answer;
  }
}
