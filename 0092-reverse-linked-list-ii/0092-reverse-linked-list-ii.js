/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function(head, left, right) {
    const dummy = new ListNode(0, head)
    let before = dummy

    for(let i = 1; i < left; i++) {
        before = before.next
    }

    let current = before.next
    let previous = null

    for(let i = left; i <= right; i++) {
        const next = current.next
        current.next = previous
        previous = current
        current = next
    }

    before.next.next = current
    before.next = previous

    return dummy.next
};