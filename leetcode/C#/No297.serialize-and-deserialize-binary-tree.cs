/*
 * Difficulty:
 * Hard
 *
 * Desc:
 * Serialization is the process of converting a data structure or object into a sequence of bits so that it can be stored in a file or memory buffer,
 * or transmitted across a network connection link to be reconstructed later in the same or another computer environment.
 * Design an algorithm to serialize and deserialize a binary tree.
 * There is no restriction on how your serialization/deserialization algorithm should work.
 * You just need to ensure that a binary tree can be serialized to a string and this string can be deserialized to the original tree structure.
 *
 * Example:
 * You may serialize the following tree:
 *    1
 *   / \
 *  2   3
 *     / \
 *    4   5
 * as "[1,2,3,null,null,4,5]"
 *
 * Clarification: The above format is the same as how LeetCode serializes a binary tree. You do not necessarily need to follow this format, so please be creative and come up with different approaches yourself.
 * Note: Do not use class member/global/static variables to store states. Your serialize and deserialize algorithms should be stateless.
*/

/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     public int val;
 *     public TreeNode left;
 *     public TreeNode right;
 *     public TreeNode(int x) { val = x; }
 * }
 */
public class Codec {

    // Encodes a tree to a single string.
    public string serialize(TreeNode root) {
        if (root == null) return "";

        List<string> arr = new List<string>();
        arr.Add($"{root.val}");

        Queue<TreeNode> queue = new Queue<TreeNode>();
        queue.Enqueue(root);

        while (queue.Count > 0) {
            TreeNode node = queue.Dequeue();
            arr.Add(node.left != null ? $"{node.left.val}" : "null");
            arr.Add(node.right != null ? $"{node.right.val}" : "null");

            if (node.left != null) queue.Enqueue(node.left);
            if (node.right != null) queue.Enqueue(node.right);
        }
        return string.Join(",", arr);
    }

    // Decodes your encoded data to tree.
    public TreeNode deserialize(string data) {
        if (data == "") return null;
        string[] arr = data.Split(",");
        if (arr.Length <= 0) return null;

        TreeNode res = new TreeNode(Int32.Parse(arr[0]));
        Queue<TreeNode> queue = new Queue<TreeNode>();
        queue.Enqueue(res);

        int i = 1;
        while (i < arr.Length) {
            TreeNode node = queue.Dequeue();
            if (node == null) continue;

            string leftStr = arr[i++];
            string rightStr = i < arr.Length ? arr[i++] : "null";

            TreeNode left = leftStr == "null" ? null : new TreeNode(Int32.Parse(leftStr));
            TreeNode right = rightStr == "null" ? null : new TreeNode(Int32.Parse(rightStr));

            node.left = left;
            node.right = right;

            queue.Enqueue(left);
            queue.Enqueue(right);
        }
        return res;
    }
}

// Your Codec object will be instantiated and called as such:
// Codec codec = new Codec();
// codec.deserialize(codec.serialize(root));