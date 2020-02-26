/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * Design your implementation of the linked list. You can choose to use the singly linked list or the doubly linked list.
 * A node in a singly linked list should have two attributes: val and next. val is the value of the current node, and next is a pointer/reference to the next node.
 * If you want to use the doubly linked list, you will need one more attribute prev to indicate the previous node in the linked list. Assume all nodes in the linked list are 0-indexed.
 * Implement these functions in your linked list class:
 * 1. get(index) : Get the value of the index-th node in the linked list. If the index is invalid, return -1.
 * 2. addAtHead(val) : Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list.
 * 3. addAtTail(val) : Append a node of value val to the last element of the linked list.
 * 4. addAtIndex(index, val) : Add a node of value val before the index-th node in the linked list. If index equals to the length of linked list, the node will be appended to the end of linked list. If index is greater than the length, the node will not be inserted.
 * 5. deleteAtIndex(index) : Delete the index-th node in the linked list, if the index is valid.
 *
 * Example:
 * Input:
 * ["MyLinkedList","addAtHead","addAtTail","addAtIndex","get","deleteAtIndex","get"]
 * [[],[1],[3],[1,2],[1],[1],[1]]
 * Output:
 * [null,null,null,null,2,null,3]
 * Explanation:
 * MyLinkedList linkedList = new MyLinkedList(); // Initialize empty LinkedList
 * linkedList.addAtHead(1);
 * linkedList.addAtTail(3);
 * linkedList.addAtIndex(1, 2);  // linked list becomes 1->2->3
 * linkedList.get(1);            // returns 2
 * linkedList.deleteAtIndex(1);  // now the linked list is 1->3
 * linkedList.get(1);            // returns 3
 *
 * Constraints:
 * 1. 0 <= index,val <= 1000
 * 2. Please do not use the built-in LinkedList library.
 * 3. At most 2000 calls will be made to get, addAtHead, addAtTail,  addAtIndex and deleteAtIndex.
 *
 * 设计链表的实现。您可以选择使用单链表或双链表。单链表中的节点应该具有两个属性：val 和 next。val 是当前节点的值，next 是指向下一个节点的指针/引用。
 * 如果要使用双向链表，则还需要一个属性 prev 以指示链表中的上一个节点。假设链表中的所有节点都是 0-index 的。
 * 在链表类中实现这些功能：
 * 1. get(index)：获取链表中第 index 个节点的值。如果索引无效，则返回-1。
 * 2. addAtHead(val)：在链表的第一个元素之前添加一个值为 val 的节点。插入后，新节点将成为链表的第一个节点。
 * 3. addAtTail(val)：将值为 val 的节点追加到链表的最后一个元素。
 * 4. addAtIndex(index,val)：在链表中的第 index 个节点之前添加值为 val  的节点。如果 index 等于链表的长度，则该节点将附加到链表的末尾。如果 index 大于链表长度，则不会插入节点。如果index小于0，则在头部插入节点。
 * 5. deleteAtIndex(index)：如果索引 index 有效，则删除链表中的第 index 个节点。
 */

var LinkedNode = function(val) {
  this.val = val
  this.next = null
}

/**
* Initialize your data structure here.
*/
var MyLinkedList = function() {
  this.head = null
  this.tail = null
};

/**
* Get the value of the index-th node in the linked list. If the index is invalid, return -1.
* @param {number} index
* @return {number}
*/
MyLinkedList.prototype.get = function(index) {
  let node = this.head
  while (index > 0 && node) { index -= 1; node = node.next }
  return node ? node.val : -1
};

/**
* Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list.
* @param {number} val
* @return {void}
*/
MyLinkedList.prototype.addAtHead = function(val) {
  const node = new LinkedNode(val)
  node.next = this.head
  this.head = node
  if (!this.tail) this.tail = node
};

/**
* Append a node of value val to the last element of the linked list.
* @param {number} val
* @return {void}
*/
MyLinkedList.prototype.addAtTail = function(val) {
  const node = new LinkedNode(val)
  if (!this.tail) {
    this.tail = node
    this.head = node
  } else {
    this.tail.next = node
    this.tail = node
  }
};

/**
* Add a node of value val before the index-th node in the linked list.
* If index equals to the length of linked list, the node will be appended to the end of linked list.
* If index is greater than the length, the node will not be inserted.
* @param {number} index
* @param {number} val
* @return {void}
*/
MyLinkedList.prototype.addAtIndex = function(index, val) {
  if (!this.head || index <= 0) return this.addAtHead(val)

  let node = this.head
  while (index - 1 > 0 && node.next) { index -= 1; node = node.next }
  if (!node.next && index - 1 > 0) return

  const rawNext = node.next
  node.next = new LinkedNode(val)
  node.next.next = rawNext

  if (!rawNext) this.tail = node.next
};

/**
* Delete the index-th node in the linked list, if the index is valid.
* @param {number} index
* @return {void}
*/
MyLinkedList.prototype.deleteAtIndex = function(index) {
  if (!this.head) return
  if (index === 0) {
    if (this.tail === this.head) this.tail = null
    this.head = this.head.next
    return
  }

  let node = this.head
  while (index - 1 > 0 && node.next) { index -= 1; node = node.next }
  if (!node.next) return

  const rawNext = node.next
  node.next = node.next.next
  if (!rawNext.next) this.tail = node
};

/**
* Your MyLinkedList object will be instantiated and called as such:
* var obj = new MyLinkedList()
* var param_1 = obj.get(index)
* obj.addAtHead(val)
* obj.addAtTail(val)
* obj.addAtIndex(index,val)
* obj.deleteAtIndex(index)
*/

// Test case
// ["MyLinkedList","addAtHead","get","addAtHead","addAtHead","deleteAtIndex","addAtHead","get","get","get","addAtHead","deleteAtIndex"]
// [[],[4],[1],[1],[5],[3],[7],[3],[3],[3],[1],[4]]
