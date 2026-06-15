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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function(root, subRoot) {
    function isSametree(p, q) {
        if(p === null && q === null) return true
        if(p === null || q === null) return false

        if(p.val !== q.val) return false
        return isSametree(p.right, q.right) && isSametree(p.left, q.left)
    }
    if(root === null) return false
    if(isSametree(root, subRoot)) return true
    return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot)
};