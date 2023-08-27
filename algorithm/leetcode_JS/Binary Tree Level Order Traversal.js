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
 * @return {number[][]}
 */
var levelOrder = function (root) {
  if (!root) return [];
  const queue = [];
  const answer = [];
  queue.push(root);
  // answer.push([root.val]);
  while (queue.length) {
    const len = queue.length;
    const temp = [];
    for (let i = 0; i < len; i++) {
      const cur = queue.shift();
      temp.push(cur.val);
      if (cur.left) queue.push(cur.left);
      if (cur.right) queue.push(cur.right);
    }
    answer.push(temp);
  }
  return answer;
};
