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
var diameterOfBinaryTree = function (root) {
    let diameter = 0

    function getDepth(root) {
        if(root === null) return 0

        const leftDepth = getDepth(root.left)
        const rightDepth = getDepth(root.right)

        diameter = Math.max(diameter, leftDepth + rightDepth)

        return Math.max(leftDepth, rightDepth) + 1
    }

    getDepth(root)
    return diameter
};