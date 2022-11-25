/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const spares = {};
  for (const i in nums) {
    const diff = target - nums[i];
    if (diff in spares) return [i, spares[diff]];
    spares[nums[i]] = i;
  }
};
