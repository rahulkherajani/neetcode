/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const chars = [];
  const ref = { ')': '(', '}': '{', ']': '[' };
  for (char of s) {
    if (Object.keys(ref).includes(char)) {
      if (chars.pop() != ref[char]) return false;
    } else {
      chars.push(char);
    }
  }
  if (chars.length === 0) return true;
  return false;
};
