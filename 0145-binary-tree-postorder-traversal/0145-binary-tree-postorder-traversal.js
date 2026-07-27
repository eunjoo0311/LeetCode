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
 * @return {number[]}
 */
var postorderTraversal = function(root) {
    const answer = []

    function postorder(node) {
        if(node === null) return

        postorder(node.left)
        postorder(node.right)
        answer.push(node.val)
    }

    postorder(root)

    return answer
};