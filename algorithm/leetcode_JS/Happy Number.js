/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
  // 최대 10자리

  const getSplited = (num) => {
    const result = [];
    for (let i = 0; i < 10; i++) {
      if (num === 0) break;
      result.push(num % 10);
      num = Math.floor(num / 10);
    }

    return [...result];
  };
  let arr = getSplited(n);
  const set = new Set();
  while (1) {
    const result = arr.reduce((acc, cur) => acc + Math.pow(cur, 2), 0);
    if (set.has(result)) return false;

    if (result === 1) return true;
    else {
      arr = getSplited(result);
      set.add(result);
    }
  }
};
