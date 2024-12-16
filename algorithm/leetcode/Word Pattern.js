/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function (pattern, s) {
  const splited = s.split(" ");
  if (splited.length !== pattern.length) return false;

  const hs = new Map();
  const set = new Set();
  const length = splited.length;
  let n = 0;

  while (n < length) {
    if (hs.has(splited[n]) && hs.get(splited[n]) !== pattern[n]) {
      return false;
    }

    if (!hs.has(splited[n]) && set.has(pattern[n])) {
      return false;
    }

    hs.set(splited[n], pattern[n]);
    set.add(pattern[n]);
    n++;
  }
  return true;
};
