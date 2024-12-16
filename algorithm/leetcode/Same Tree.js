/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
  if (p === null && q === null) return true;
  if (!p || !q || p.val !== q.val) return false;

  const isSameLeftNode = isSameTree(p.left, q.left);
  const isSameRightNode = isSameTree(p.right, q.right);

  return isSameLeftNode && isSameRightNode;
};
