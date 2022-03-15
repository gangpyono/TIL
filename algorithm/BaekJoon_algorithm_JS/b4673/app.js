solution();
function d(n) {
  let sum = 0;
  let str = String(n);
  for (const x of str) {
    sum += +x;
  }

  return sum + n;
}

function solution() {
  for (let i = 1; i <= 10000; i++) {
    if (!isSelf(i)) {
      console.log(i);
    }
  }

  // 판별함수
  function isSelf(n) {
    let answer = false;

    for (let k = 1; k < n; k++) {
      if (d(k) === n) {
        answer = true;
        break;
      }
    }

    return answer;
  }
}
