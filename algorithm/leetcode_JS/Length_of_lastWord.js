/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  const splited = s.trim().split(" ");
  return splited[splited.length - 1].length;
};
