/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  let shortest = strs[0];
  let answer = "";
  for (let i = 0; i < strs.length; i++) {
    if (shortest.length >= strs[i].length) {
      shortest = strs[i];
    }
  }

  for (let i = 1; i <= shortest.length; i++) {
    const piece = shortest.substring(0, i);
    let flag = true;
    for (let j = 0; j < strs.length; j++) {
      if (strs[j].indexOf(piece) !== 0) {
        flag = false;
        break;
      }
    }

    if (flag) {
      answer = piece;
    }
  }

  return answer;
};
