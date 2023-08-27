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
var zigzagLevelOrder = function (root) {
  if (!root) return [];
  let level = 0;
  const queue = [];
  const answer = [];
  queue.push(root);
  while (queue.length) {
    const len = queue.length;
    const temp = [];
    for (let i = 0; i < len; i++) {
      const cur = queue.shift();
      if (cur.left) queue.push(cur.left);
      if (cur.right) queue.push(cur.right);
      if (level % 2 === 0) {
        temp.push(cur.val);
      } else {
        temp.unshift(cur.val);
      }
    }
    answer.push(temp);
    level++;
  }
  return answer;
};
