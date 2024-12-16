/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
  const hs1 = new Map();
  const hs2 = new Map();
  const length = s.length;

  for (let i = 0; i < length; i++) {
    if (hs1.has(s[i])) {
      if (hs1.get(s[i]) !== t[i]) {
        return false;
      }
    } else {
      hs1.set(s[i], t[i]);
    }
  }

  for (let j = 0; j < length; j++) {
    if (hs2.has(t[j])) {
      if (hs2.get(t[j]) !== s[j]) {
        return false;
      }
    } else {
      hs2.set(t[j], s[j]);
    }
  }
  return true;
};
