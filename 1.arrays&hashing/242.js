/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  const lenS = s.length;
  const lenT = t.length;
  const countS = {};
  const countT = {};
  if (lenS != lenT) return false;
  for (i = 0; i < lenS; i++) {
    countS[s[i]] = 1 + (countS[s[i]] ?? 0);
    countT[t[i]] = 1 + (countT[t[i]] ?? 0);
  }
  for (i in countS) {
    if (countS[i] != countT[i]) return false;
  }

  return true;
};
