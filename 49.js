/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  const group = {};
  for (word of strs) {
    count = new Array(26).fill(0);
    for (char of word) {
      count[char.charCodeAt() - 'a'.charCodeAt()] += 1;
    }
    const str = count.join();
    const values = group[str] || [];
    values.push(word);
    group[str] = values;
  }
  return Object.values(group);
};
