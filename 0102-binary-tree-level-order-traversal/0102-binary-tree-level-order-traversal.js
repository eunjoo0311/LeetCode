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
    // const queue = [root]
    // const answer = []

    // while(queue.length > 0) {
    //     const size = queue.length
    //     const level = []
    //     for(let i = 0; i < size; i++) {
    //         const node = queue.shift()
    //         if(node === null) return []
            
    //         level.push(node.val)
    //         if(node.left !== null) queue.push(node.left)
    //         if(node.right !== null) queue.push(node.right)
    //     }
    //     answer.push(level)
    // }
    // return answer

    // dfs
    const answer = []

    const dfs = (node, depth) => {
        if(node === null) return []

        if(answer[depth] === undefined) {
            answer[depth] = []
        }

        answer[depth].push(node.val)

        if(node.left !== null) dfs(node.left, depth + 1)
        if(node.right !== null) dfs(node.right, depth + 1)
    }

    dfs(root, 0)
    return answer
};