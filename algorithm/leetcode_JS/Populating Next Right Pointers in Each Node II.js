/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function (root) {
  if (!root) return null;

  const queue = [];
  queue.push(root);
  while (queue.length !== 0) {
    const n = queue.length;
    const temp = [];
    for (let i = 0; i < n; i++) {
      const node = queue.shift();
      if (queue.length !== 0) {
        node.next = queue[0];
      }
      temp.push(node);
    }

    while (temp.length !== 0) {
      const node = temp.shift();
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
  }

  return root;
};
