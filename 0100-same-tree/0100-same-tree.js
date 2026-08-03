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
var isSameTree = function(p, q) {
    // dfs
    const dfs = (a,b) => {
        if(a === null && b === null) return true
        if(a === null || b === null) return false
        if(a.val !== b.val) return false

        return dfs(a.left, b.left) && dfs(a.right, b.right)
    }

    return dfs(p, q)
};