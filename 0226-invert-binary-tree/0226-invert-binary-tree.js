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
 * @return {TreeNode}
 */
var invertTree = function(root) {
    // dfs
    const dfs = (node) => {
        if(node === null) return

        const temp = node.left
        node.left = node.right
        node.right = temp

        if(node.left !== null) dfs(node.left)
        if(node.right !== null) dfs(node.right)
    }
    dfs(root)
    return root
};