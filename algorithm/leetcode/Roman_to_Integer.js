/**
 * @param {string} s
 * @return {number}
 */
const op = {
  IV: 4,
  IX: 9,
  XL: 40,
  XC: 90,
  CD: 400,
  CM: 900,
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

var romanToInt = function (s) {
  let answer = 0;
  let p = 0;

  while (p < s.length) {
    if (Object.keys(op).includes(s[p] + s[p + 1])) {
      answer = answer + op[s[p] + s[p + 1]];
      p = p + 2;
      continue;
    }

    answer = answer + op[s[p]];
    p = p + 1;
  }
  return answer;
};
