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
 * @return {boolean}
 * https://leetcode.com/problems/balanced-binary-tree
 * Time O(N) | Space O(H)
 */
var isBalanced = function (root) {
  const isTreeBalanced = (root) => {
    if (!root) {
      return [true, 0];
    }
    const left = isTreeBalanced(root.left);
    const right = isTreeBalanced(root.right);

    const isBalanced = left[0] && right[0] && Math.abs(left[1] - right[1]) <= 1;

    return [isBalanced, 1 + Math.max(left[1], right[1])];
  };
  return isTreeBalanced(root)[0];
};
