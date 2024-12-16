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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function (root, targetSum) {
  if (!root) return false;

  let answer = false;

  function DFS(leftroot, rightroot, sum) {
    if (!leftroot && !rightroot) {
      if (sum === targetSum) answer = true;
      return;
    } else {
      DFS(leftroot?.left, leftroot?.right, sum + leftroot?.val);
      DFS(rightroot?.left, rightroot?.right, sum + rightroot?.val);
    }
  }

  DFS(root.left, root.right, root.val);

  return answer;
};
