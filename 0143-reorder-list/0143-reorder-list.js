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

    // 반 자르기
    while(fast.next !== null && fast.next.next !== null) {
        slow = slow.next
        fast = fast.next.next
    }

    // 자르기
    let second = slow.next
    slow.next = null

    // 뒤에꺼 뒤집기
    let prev= null
    let cur = second

    while(cur !== null) {
        let next = cur.next
        cur.next = prev
        prev = cur
        cur = next
    }

    second = prev

    // 섞기
    let first = head
    
    while(second !== null) {
        const firstNext = first.next
        const secondNext = second.next

        first.next = second
        second.next= firstNext

        first = firstNext
        second= secondNext
    }
};