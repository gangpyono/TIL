/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  const hs = new Map();

  for (const char of t) {
    if (hs.has(char)) {
      hs.set(char, hs.get(char) + 1);
    } else {
      hs.set(char, 1);
    }
  }

  for (const char of s) {
    if (hs.has(char)) {
      hs.set(char, hs.get(char) - 1);
      if (hs.get(char) === 0) hs.delete(char);
    } else {
      return false;
    }
  }

  if (hs.size !== 0) return false;
  return true;
};
