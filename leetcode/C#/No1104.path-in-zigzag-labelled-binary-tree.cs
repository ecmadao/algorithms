/*
 * Difficulty:
 * Medium
 *
 * Desc:
 * In an infinite binary tree where every node has two children, the nodes are labelled in row order.
 * In the odd numbered rows (ie., the first, third, fifth,...), the labelling is left to right,
 * while in the even numbered rows (second, fourth, sixth,...), the labelling is right to left.
 * Given the label of a node in this tree, return the labels in the path from the root of the tree to the node with that label.
 *
 * Example 1:
 * Input: label = 14
 * Output: [1,3,4,14]
 *
 * Example 2:
 * Input: label = 26
 * Output: [1,2,6,10,26]
 *
 * Constraints:
 * 1 <= label <= 10^6
*/

public class Solution {
    public IList<int> PathInZigZagTree(int label) {
        List<(int Total, int Count)> nodes = new List<(int Total, int Count)>();
        nodes.Add((Total: 1, Count: 1));

        while (label > nodes[nodes.Count - 1].Total) {
            (int total, int count) = nodes[nodes.Count - 1];
            nodes.Add((Total: total + count * 2, Count: count * 2));
        }

        Stack<int> stack = new Stack<int>();
        stack.Push(label);
        for (int i = nodes.Count - 1; i >= 1; i -= 1) {
            int count = stack.Peek() - nodes[i - 1].Total;
            if (count % 2 == 1) count += 1;
            int j = count / 2;

            int num = nodes[i - 1].Total - (j - 1);
            stack.Push(num);
        }

        return new List<int>(stack);
    }
}