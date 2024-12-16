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
var maxDepth = function (root) {
  let count = 0;
  if (!root) return count;

  const DFS = (node, L) => {
    if (!node) {
      count = Math.max(count, L - 1);
      return;
    } else {
      DFS(node.left, L + 1);
      DFS(node.right, L + 1);
    }
  };

  DFS(root, 1);
  return count;
};
