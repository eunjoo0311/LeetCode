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
 * @return {number[][]}
 */
var levelOrder = function(root) {
    // bfs
    const queue = [root]
    const answer = []

    while(queue.length > 0) {
        const size = queue.length
        const level = []
        for(let i = 0; i < size; i++) {
            const node = queue.shift()

            if(node === null) return []
            
            level.push(node.val)

            if(node.left !== null) queue.push(node.left)
            if(node.right !== null) queue.push(node.right)
        }
        answer.push(level)
    }
    return answer
};