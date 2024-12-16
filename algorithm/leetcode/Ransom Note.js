/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  const hs = new Map();

  for (const char of magazine) {
    if (hs.has(char)) hs.set(char, hs.get(char) + 1);
    else {
      hs.set(char, 1);
    }
  }

  for (const char of ransomNote) {
    if (hs.has(char)) {
      hs.set(char, hs.get(char) - 1);
      if (hs.get(char) === 0) hs.delete(char);
    } else {
      return false;
    }
  }

  return true;
};
