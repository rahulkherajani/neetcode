/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  const obj = {};
  for (i in nums) {
    if (nums[i] in obj) {
      return true;
    }
    obj[nums[i]] = true;
  }
  return false;
};
