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
 */
var sumNumbers = function (root) {
  let total = 0;

  function DFS(root, sum) {
    if (!root.left && !root.right) {
      total = total + Number(sum);

      return;
    }
    if (root.left) DFS(root.left, String(sum) + String(root.left.val));
    if (root.right) DFS(root.right, String(sum) + String(root.right.val));
  }
  if (root) DFS(root, root.val);

  return total;
};
