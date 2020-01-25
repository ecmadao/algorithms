/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * A linked list is given such that each node contains an additional random pointer which could point to any node in the list or null.
 * Return a deep copy of the list.
 *
 * 深度拷贝一个链表，链表内的各节点有一个 random 属性，随机指向 null 或者链表中任意一个节点
 */

/**
 * 思路一 正常方法：
 * 拷贝一个正常的链表很简单，遍历一次，每次创建新的节点
 * 而如果链表内有随机的 random 属性，则需要注意的是，拷贝过后的节点的 random，
 * 指向的还是新生成的被拷贝的节点
 */

/**
 * Definition for singly-linked list with a random pointer.
 * function RandomListNode(label) {
 *     this.label = label;
 *     this.next = this.random = null;
 * }
 */

/**
 * @param {RandomListNode} head
 * @return {RandomListNode}
 */
var copyRandomList_1 = function(head) {
  if (!head) return null;

  var newHead = null;
  var tmp = null;
  var cache = {};

  while (head) {
    var copy = cache[head.label];
    if (!copy) {
      copy = new RandomListNode(head.label);
      cache[head.label] = copy;
    }
    if (head.random) {
        var random = cache[head.random.label];
        if (!random) {
          random = new RandomListNode(head.random.label);
          cache[head.random.label] = random;
        }
        copy.random = random;
    }
    if (tmp) {
      tmp.next = copy;
      tmp = copy;
    } else {
      newHead = copy;
      tmp = copy;
    }
    head = head.next;
  }

  return newHead;
};

/**
 * 思路二：
 * 给原链表的每个节点都做一个拷贝，并放在该节点后面；因此，原节点的 next 变成了 next.next:
 * 原链表: 1 -> 2 -> 3 -> 4
 * 加入拷贝 1 -> 1' -> 2 -> 2' -> 3 -> 3' -> 4 -> 4'
 * 但是，原节点和拷贝节点的 random 都指向了同一个原节点，例如拷贝前 1.random 指向 3，
 * 加入拷贝之后 1'.random 也指向 3
 * 下一步，遍历该链表的拷贝节点，获取每个拷贝节点的 random 节点，然后将其改变为 random 节点的下一个节点（一定是拷贝节点）
 * 并提取出所有的拷贝节点。注意题目要求原链表不能变动，因此还需要回复原链表
 * 深度拷贝完毕
 */

/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */
/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function(head) {
  if (!head) return null

  let node = head
  while (node) {
    const copy = new Node(node.val)
    const next = node.next
    node.next = copy
    copy.next = next

    node = next
  }

  node = head
  while (node && node.next) {
    if (node.random) {
      node.next.random = node.random.next
    }
    node = node.next.next
  }

  node = head
  const resultHead = node.next
  while (node && node.next) {
    const tmp = node.next
    node.next = node.next.next
    node = tmp
  }

  return resultHead
}
