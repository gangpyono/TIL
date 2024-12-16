/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  const lowerCase = s.toLowerCase();
  let converted = "";

  for (let i = 0; i < lowerCase.length; i++) {
    const code = lowerCase.charCodeAt(i);
    if ((code >= 97 && code <= 122) || (code >= 48 && code <= 57)) {
      converted = converted + lowerCase[i];
    }
  }

  let lp = 0;
  let rp = converted.length - 1;

  while (lp < rp) {
    if (converted[lp] !== converted[rp]) return false;
    else {
      lp = lp + 1;
      rp = rp - 1;
    }
  }
  return true;
};
