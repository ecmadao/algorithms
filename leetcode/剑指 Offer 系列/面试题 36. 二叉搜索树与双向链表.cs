/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * 输入一棵二叉搜索树，将该二叉搜索树转换成一个排序的循环双向链表。要求不能创建任何新的节点，只能调整树中节点指针的指向。
 * 特别地，我们希望可以就地完成转换操作。当转化完成以后，树中节点的左指针需要指向前驱，树中节点的右指针需要指向后继。还需要返回链表中的第一个节点的指针。
 * 注意：本题与主站 426 题相同：https://leetcode-cn.com/problems/convert-binary-search-tree-to-sorted-doubly-linked-list/
 */


/*
// Definition for a Node.
public class Node {
    public int val;
    public Node left;
    public Node right;

    public Node(){}
    public Node(int _val,Node _left,Node _right) {
        val = _val;
        left = _left;
        right = _right;
    }
}
*/
public class Solution {
    public Node TreeToDoublyList(Node root) {
        Node head = null;
        Node cur = head;
        if (root == null) return head;

        Stack<Node> stack = new Stack<Node>();

        while (root != null || stack.Count > 0) {
            if (root != null) {
                stack.Push(root);
                root = root.left;
            } else {
                root = stack.Pop();
                if (head == null) {
                    head = root;
                    cur = head;
                } else {
                    cur.right = root;
                    root.left = cur;
                    cur = root;
                }
                root = root.right;
            }
        }

        cur.right = head;
        head.left = cur;
        return head;
    }
}