/**
 * // Definition for a _Node.
 * function _Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {_Node} head
 * @return {_Node}
 */
var copyRandomList = function(head) {
    if(head === null) return null

    let current = head
    const map = new Map()

    while(current !== null) {
        map.set(current, new _Node(current.val, null, null))
        current = current.next
    }

    current = head

    while(current !== null) {
        const copiedNode = map.get(current)

        copiedNode.next = map.get(current.next) || null
        copiedNode.random = map.get(current.random) || null

        current = current.next
    }

    return map.get(head)
};