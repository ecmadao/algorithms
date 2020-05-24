/*
 * Difficulty:
 * Medium
 *
 * Desc:
 * A linked list is given such that each node contains an additional random pointer which could point to any node in the list or null.
 * Return a deep copy of the list.
 * The Linked List is represented in the input/output as a list of n nodes.
 * Each node is represented as a pair of [val, random_index] where:
 * - val: an integer representing Node.val
 * - random_index: the index of the node (range from 0 to n-1) where random pointer points to, or null if it does not point to any node.
 *
 * Example 1:
 * Input: head = [[7,null],[13,0],[11,4],[10,2],[1,0]]
 * Output: [[7,null],[13,0],[11,4],[10,2],[1,0]]
 *
 * Example 2:
 * Input: head = [[1,1],[2,1]]
 * Output: [[1,1],[2,1]]
 *
 * Example 3:
 * Input: head = [[3,null],[3,0],[3,null]]
 * Output: [[3,null],[3,0],[3,null]]
 *
 * Example 4:
 * Input: head = []
 * Output: []
 * Explanation: Given linked list is empty (null pointer), so return null.
 *
 * Constraints:
 * -10000 <= Node.val <= 10000
 * Node.random is null or pointing to a node in the linked list.
 * Number of Nodes will not exceed 1000.
*/

/*
// Definition for a Node.
public class Node {
    public int val;
    public Node next;
    public Node random;

    public Node(){}
    public Node(int _val,Node _next,Node _random) {
        val = _val;
        next = _next;
        random = _random;
    }
}
*/

public class Solution {
    public Node CopyRandomList(Node head) {
        Node cur = head;
        while (cur != null) {
            Node next = cur.next;
            cur.next = new Node(cur.val);
            cur.next.next = next;
            cur = next;
        }

        cur = head;

        while (cur != null) {
            Node copyNext = cur.next;

            Node random = cur.random;
            if (random != null) copyNext.random = random.next;

            cur = copyNext.next;
        }

        Node res = null;
        while (head != null) {
            Node copyNext = head.next;
            Node realNext = copyNext.next;

            if (res == null) res = copyNext;
            if (realNext != null) copyNext.next = realNext.next;

            head.next = realNext;
            head = head.next;
        }

        return res;
    }
}