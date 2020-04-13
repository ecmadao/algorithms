/*
 * Difficulty:
 * Easy
 *
 * Desc:
 * Given a n-ary tree, find its maximum depth.
 * The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.
 * Nary-Tree input serialization is represented in their level order traversal, each group of children is separated by the null value (See examples).
 *
 * Example 1:
 * Input: root = [1,null,3,2,4,null,5,6]
 * Output: 3
 *
 * Example 2:
 * Input: root = [1,null,2,3,4,5,null,null,6,7,null,8,null,9,10,null,null,11,null,12,null,13,null,null,14]
 * Output: 5
 *
 * Constraints:
 * 1. The depth of the n-ary tree is less than or equal to 1000.
 * 2. The total number of nodes is between [0, 10^4].
*/

using System.Collections;

/*
// Definition for a Node.
public class Node {
    public int val;
    public IList<Node> children;

    public Node() {}

    public Node(int _val) {
        val = _val;
    }

    public Node(int _val, IList<Node> _children) {
        val = _val;
        children = _children;
    }
}
*/

public class Solution {
    public int MaxDepth(Node root) {
        if (root == null) return 0;

        Queue<Node> queue = new Queue<Node>();
        queue.Enqueue(root);

        int res = 0;

        while (queue.Count > 0) {
          int len = queue.Count;
          res += 1;
          while (len > 0) {
            Node node = queue.Dequeue();
            foreach (Node child in node.children) {
                queue.Enqueue(child);
            }
            len -= 1;
          }
        }

        return res;
        // Queue queue = new Queue();
        // q.Enqueue(root);

        // while ()
    }
}