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
var maxDepth = function(root) {
    // dfs
    let depth = 0
    const dfs = (node, index) => {
        if(node === null) return 
        depth = Math.max(depth, index)
        if(node.left !== null) dfs(node.left, index + 1)
        if(node.right !== null) dfs(node.right, index + 1)
    }
    dfs(root, 1)
    return depth
};