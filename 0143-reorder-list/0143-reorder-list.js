/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
    if(head === null || head.next === null) return

    let slow = head
    let fast = head

    while(fast !== null && fast.next !== null) {
        slow = slow.next
        fast = fast.next.next
    }

    let second = slow.next
    slow.next = null

    let prev = null
    let cur = second

    while(cur !== null) {
        let next = cur.next
        cur.next = prev
        prev = cur
        cur = next
    }
    second = prev

    let first = head
    while(second !== null) {
        let temp1 = first.next
        let temp2 = second.next

        first.next = second
        second.next = temp1

        first = temp1
        second = temp2
    }
};