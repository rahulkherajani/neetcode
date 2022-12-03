/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 * https://leetcode.com/problems/diameter-of-binary-tree
 * Time O(N) | Space O(H)
 */
var diameterOfBinaryTree = function (root) {
  let max = 0;
  const heightofTree = (root) => {
    if (!root) {
      return 0;
    }
    const left = heightofTree(root.left);
    const right = heightofTree(root.right);

    const diameter = left + right;
    max = Math.max(max, diameter);

    const height = Math.max(left, right);

    return height + 1;
  };
  heightofTree(root);
  return max;
};
