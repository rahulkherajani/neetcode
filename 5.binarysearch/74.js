/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  for (i in matrix) {
    if (matrix[i][matrix[i].length - 1] < target) {
      continue;
    } else {
      return matrix[i].includes(target);
    }
  }
  return false;
};
