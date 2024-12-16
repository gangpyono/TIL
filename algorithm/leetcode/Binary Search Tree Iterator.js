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
 */
var BSTIterator = function (root) {
  this.treeArr = [];
  this.min = 0;
  this.pointer = 0;
  const DFS = (root) => {
    if (root.left !== null) DFS(root.left);
    this.treeArr.push(root.val);
    if (this.min > root.val) this.min = root.val;
    if (root.right !== null) DFS(root.right);
  };

  DFS(root);
};

/**
 * @return {number}
 */
BSTIterator.prototype.next = function () {
  if (this.treeArr[this.pointer] !== undefined) {
    return this.treeArr[this.pointer++];
  } else {
    return this.min;
  }
};

/**
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function () {
  return this.treeArr[this.pointer] !== undefined;
};

/**
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */
