/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  var groups = {};
  nums.forEach((value) => {
    groups[value] = groups[value] + 1 || 1;
  });
  var result = [];
  Object.keys(groups)
    .sort((a, b) => groups[b] - groups[a])
    .slice(0, k)
    .forEach((x) => {
      result.push(parseInt(x));
    });
  return result;
};
