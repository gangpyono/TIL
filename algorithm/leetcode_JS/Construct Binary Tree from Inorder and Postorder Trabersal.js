/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */

function splitTree(P, M, pidx, ileft, iright) {
  const rval = P[pidx];
  const imid = M.get(rval);
  const root = new TreeNode(rval);
  if (imid < iright) {
    root.right = splitTree(P, M, pidx - 1, imid + 1, iright);
  }

  if (imid > ileft) {
    root.left = splitTree(P, M, pidx - 1 - (iright - imid), ileft, imid - 1);
  }
  return root;
}

var buildTree = function (inorder, postorder) {
  const M = new Map();
  for (let i = 0; i < inorder.length; i++) {
    M.set(inorder[i], i);
  }
  return splitTree(postorder, M, postorder.length - 1, 0, inorder.length - 1);
};
