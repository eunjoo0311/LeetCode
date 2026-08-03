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
    // let depth = 0
    // const dfs = (node, index) => {
    //     if(node === null) return 
    //     depth = Math.max(depth,)
    //     if(node.left !== null) dfs(node.left, index + 1)
    //     if(node.right !== null) dfs(node.right, index + 1)
    // }
    // dfs(root, 1)
    // return depth

    // bfs
    if(root === null) return 0
    const queue = [root]
    let depth = 0

    while(queue.length > 0) {
        const size = queue.length

        for(let i = 0; i < size; i++) {
            const node = queue.shift()
            if(node.left !== null) queue.push(node.left)
            if(node.right !== null) queue.push(node.right)
        }
        depth++
    }
    return depth
};