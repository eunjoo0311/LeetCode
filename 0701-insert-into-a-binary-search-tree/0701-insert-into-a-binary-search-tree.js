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
 * @param {number} val
 * @return {TreeNode}
 */
var insertIntoBST = function(root, val) {
    if(root === null) return new TreeNode(val)

    let current = root

    while(true) {
        if(val < current.val) {
            if(current.left === null) {
                current.left = new TreeNode(val)
                break
            }
            current = current.left
        } else {
            if(current.right === null) {
                current.right = new TreeNode(val)
                break
            }
            current = current.right
        }
    }

    return root
};