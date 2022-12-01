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
 * https://leetcode.com/problems/reorder-list
 * Time O(N) | Space O(1)
 */
var reorderList = function (head) {
  let slow = head,
    fast = head.next;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  let second = slow.next,
    prev = null;
  slow.next = null;
  while (second) {
    temp = second.next;
    second.next = prev;
    prev = second;
    second = temp;
  }

  let first = head;
  second = prev;
  while (second) {
    let temp1 = first.next,
      temp2 = second.next;
    first.next = second;
    second.next = temp1;
    (first = temp1), (second = temp2);
  }
};
